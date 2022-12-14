'use strict';

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.number.is-integer.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var zlib = require('zlib');

var bufferUtil = require('./buffer-util');

var Limiter = require('./limiter');

var _require = require('./constants'),
    kStatusCode = _require.kStatusCode;

var TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
var kPerMessageDeflate = Symbol('permessage-deflate');
var kTotalLength = Symbol('total-length');
var kCallback = Symbol('callback');
var kBuffers = Symbol('buffers');
var kError = Symbol('error'); //
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//

var zlibLimiter;
/**
 * permessage-deflate implementation.
 */

var PerMessageDeflate = /*#__PURE__*/function () {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  function PerMessageDeflate(options, isServer, maxPayload) {
    _classCallCheck(this, PerMessageDeflate);

    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;
    this.params = null;

    if (!zlibLimiter) {
      var concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
      zlibLimiter = new Limiter(concurrency);
    }
  }
  /**
   * @type {String}
   */


  _createClass(PerMessageDeflate, [{
    key: "offer",
    value:
    /**
     * Create an extension negotiation offer.
     *
     * @return {Object} Extension parameters
     * @public
     */
    function offer() {
      var params = {};

      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }

      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }

      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }

      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }

      return params;
    }
    /**
     * Accept an extension negotiation offer/response.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Object} Accepted configuration
     * @public
     */

  }, {
    key: "accept",
    value: function accept(configurations) {
      configurations = this.normalizeParams(configurations);
      this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
      return this.params;
    }
    /**
     * Releases all resources used by the extension.
     *
     * @public
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      if (this._inflate) {
        this._inflate.close();

        this._inflate = null;
      }

      if (this._deflate) {
        var callback = this._deflate[kCallback];

        this._deflate.close();

        this._deflate = null;

        if (callback) {
          callback(new Error('The deflate stream was closed while data was being processed'));
        }
      }
    }
    /**
     *  Accept an extension negotiation offer.
     *
     * @param {Array} offers The extension negotiation offers
     * @return {Object} Accepted configuration
     * @private
     */

  }, {
    key: "acceptAsServer",
    value: function acceptAsServer(offers) {
      var opts = this._options;
      var accepted = offers.find(function (params) {
        if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
          return false;
        }

        return true;
      });

      if (!accepted) {
        throw new Error('None of the extension offers can be accepted');
      }

      if (opts.serverNoContextTakeover) {
        accepted.server_no_context_takeover = true;
      }

      if (opts.clientNoContextTakeover) {
        accepted.client_no_context_takeover = true;
      }

      if (typeof opts.serverMaxWindowBits === 'number') {
        accepted.server_max_window_bits = opts.serverMaxWindowBits;
      }

      if (typeof opts.clientMaxWindowBits === 'number') {
        accepted.client_max_window_bits = opts.clientMaxWindowBits;
      } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
        delete accepted.client_max_window_bits;
      }

      return accepted;
    }
    /**
     * Accept the extension negotiation response.
     *
     * @param {Array} response The extension negotiation response
     * @return {Object} Accepted configuration
     * @private
     */

  }, {
    key: "acceptAsClient",
    value: function acceptAsClient(response) {
      var params = response[0];

      if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
        throw new Error('Unexpected parameter "client_no_context_takeover"');
      }

      if (!params.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === 'number') {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        }
      } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
        throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      }

      return params;
    }
    /**
     * Normalize parameters.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Array} The offers/response with normalized parameters
     * @private
     */

  }, {
    key: "normalizeParams",
    value: function normalizeParams(configurations) {
      var _this = this;

      configurations.forEach(function (params) {
        Object.keys(params).forEach(function (key) {
          var value = params[key];

          if (value.length > 1) {
            throw new Error("Parameter \"".concat(key, "\" must have only a single value"));
          }

          value = value[0];

          if (key === 'client_max_window_bits') {
            if (value !== true) {
              var num = +value;

              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
              }

              value = num;
            } else if (!_this._isServer) {
              throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
            }
          } else if (key === 'server_max_window_bits') {
            var _num = +value;

            if (!Number.isInteger(_num) || _num < 8 || _num > 15) {
              throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
            }

            value = _num;
          } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
            if (value !== true) {
              throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
            }
          } else {
            throw new Error("Unknown parameter \"".concat(key, "\""));
          }

          params[key] = value;
        });
      });
      return configurations;
    }
    /**
     * Decompress data. Concurrency limited.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */

  }, {
    key: "decompress",
    value: function decompress(data, fin, callback) {
      var _this2 = this;

      zlibLimiter.add(function (done) {
        _this2._decompress(data, fin, function (err, result) {
          done();
          callback(err, result);
        });
      });
    }
    /**
     * Compress data. Concurrency limited.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */

  }, {
    key: "compress",
    value: function compress(data, fin, callback) {
      var _this3 = this;

      zlibLimiter.add(function (done) {
        _this3._compress(data, fin, function (err, result) {
          done();
          callback(err, result);
        });
      });
    }
    /**
     * Decompress data.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */

  }, {
    key: "_decompress",
    value: function _decompress(data, fin, callback) {
      var _this4 = this;

      var endpoint = this._isServer ? 'client' : 'server';

      if (!this._inflate) {
        var key = "".concat(endpoint, "_max_window_bits");
        var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._inflate = zlib.createInflateRaw(_objectSpread(_objectSpread({}, this._options.zlibInflateOptions), {}, {
          windowBits: windowBits
        }));
        this._inflate[kPerMessageDeflate] = this;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];

        this._inflate.on('error', inflateOnError);

        this._inflate.on('data', inflateOnData);
      }

      this._inflate[kCallback] = callback;

      this._inflate.write(data);

      if (fin) this._inflate.write(TRAILER);

      this._inflate.flush(function () {
        var err = _this4._inflate[kError];

        if (err) {
          _this4._inflate.close();

          _this4._inflate = null;
          callback(err);
          return;
        }

        var data = bufferUtil.concat(_this4._inflate[kBuffers], _this4._inflate[kTotalLength]);

        if (_this4._inflate._readableState.endEmitted) {
          _this4._inflate.close();

          _this4._inflate = null;
        } else {
          _this4._inflate[kTotalLength] = 0;
          _this4._inflate[kBuffers] = [];

          if (fin && _this4.params["".concat(endpoint, "_no_context_takeover")]) {
            _this4._inflate.reset();
          }
        }

        callback(null, data);
      });
    }
    /**
     * Compress data.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */

  }, {
    key: "_compress",
    value: function _compress(data, fin, callback) {
      var _this5 = this;

      var endpoint = this._isServer ? 'server' : 'client';

      if (!this._deflate) {
        var key = "".concat(endpoint, "_max_window_bits");
        var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._deflate = zlib.createDeflateRaw(_objectSpread(_objectSpread({}, this._options.zlibDeflateOptions), {}, {
          windowBits: windowBits
        }));
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];

        this._deflate.on('data', deflateOnData);
      }

      this._deflate[kCallback] = callback;

      this._deflate.write(data);

      this._deflate.flush(zlib.Z_SYNC_FLUSH, function () {
        if (!_this5._deflate) {
          //
          // The deflate stream was closed while data was being processed.
          //
          return;
        }

        var data = bufferUtil.concat(_this5._deflate[kBuffers], _this5._deflate[kTotalLength]);
        if (fin) data = data.slice(0, data.length - 4); //
        // Ensure that the callback will not be called again in
        // `PerMessageDeflate#cleanup()`.
        //

        _this5._deflate[kCallback] = null;
        _this5._deflate[kTotalLength] = 0;
        _this5._deflate[kBuffers] = [];

        if (fin && _this5.params["".concat(endpoint, "_no_context_takeover")]) {
          _this5._deflate.reset();
        }

        callback(null, data);
      });
    }
  }], [{
    key: "extensionName",
    get: function get() {
      return 'permessage-deflate';
    }
  }]);

  return PerMessageDeflate;
}();

module.exports = PerMessageDeflate;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */

function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */


function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;

  if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError] = new RangeError('Max payload size exceeded');
  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
  this[kError][kStatusCode] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */


function inflateOnError(err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode] = 1007;
  this[kCallback](err);
}