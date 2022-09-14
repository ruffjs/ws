'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array-buffer.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.copy-within.js");

require("core-js/modules/es.typed-array.every.js");

require("core-js/modules/es.typed-array.fill.js");

require("core-js/modules/es.typed-array.filter.js");

require("core-js/modules/es.typed-array.find.js");

require("core-js/modules/es.typed-array.find-index.js");

require("core-js/modules/es.typed-array.for-each.js");

require("core-js/modules/es.typed-array.includes.js");

require("core-js/modules/es.typed-array.index-of.js");

require("core-js/modules/es.typed-array.iterator.js");

require("core-js/modules/es.typed-array.join.js");

require("core-js/modules/es.typed-array.last-index-of.js");

require("core-js/modules/es.typed-array.map.js");

require("core-js/modules/es.typed-array.reduce.js");

require("core-js/modules/es.typed-array.reduce-right.js");

require("core-js/modules/es.typed-array.reverse.js");

require("core-js/modules/es.typed-array.set.js");

require("core-js/modules/es.typed-array.slice.js");

require("core-js/modules/es.typed-array.some.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/es.typed-array.subarray.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/es.typed-array.to-string.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _require = require('stream'),
    Writable = _require.Writable; //const PerMessageDeflate = require('./permessage-deflate');


var _require2 = require('./constants'),
    BINARY_TYPES = _require2.BINARY_TYPES,
    EMPTY_BUFFER = _require2.EMPTY_BUFFER,
    kStatusCode = _require2.kStatusCode,
    kWebSocket = _require2.kWebSocket;

var _require3 = require('./buffer-util'),
    concat = _require3.concat,
    toArrayBuffer = _require3.toArrayBuffer,
    unmask = _require3.unmask;

var _require4 = require('./validation'),
    isValidStatusCode = _require4.isValidStatusCode,
    isValidUTF8 = _require4.isValidUTF8;

var GET_INFO = 0;
var GET_PAYLOAD_LENGTH_16 = 1;
var GET_PAYLOAD_LENGTH_64 = 2;
var GET_MASK = 3;
var GET_DATA = 4;
var INFLATING = 5;
/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */

var Receiver = /*#__PURE__*/function (_Writable) {
  _inherits(Receiver, _Writable);

  var _super = _createSuper(Receiver);

  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  function Receiver() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Receiver);

    _this = _super.call(this);
    _this._binaryType = options.binaryType || BINARY_TYPES[0];
    _this._extensions = options.extensions || {};
    _this._isServer = !!options.isServer;
    _this._maxPayload = options.maxPayload | 0;
    _this._skipUTF8Validation = !!options.skipUTF8Validation;
    _this[kWebSocket] = undefined;
    _this._bufferedBytes = 0;
    _this._buffers = [];
    _this._compressed = false;
    _this._payloadLength = 0;
    _this._mask = undefined;
    _this._fragmented = 0;
    _this._masked = false;
    _this._fin = false;
    _this._opcode = 0;
    _this._totalPayloadLength = 0;
    _this._messageLength = 0;
    _this._fragments = [];
    _this._state = GET_INFO;
    _this._loop = false;
    return _this;
  }
  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */


  _createClass(Receiver, [{
    key: "_write",
    value: function _write(chunk, encoding, cb) {
      if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
      this._bufferedBytes += chunk.length;

      this._buffers.push(chunk);

      this.startLoop(cb);
    }
    /**
     * Consumes `n` bytes from the buffered data.
     *
     * @param {Number} n The number of bytes to consume
     * @return {Buffer} The consumed bytes
     * @private
     */

  }, {
    key: "consume",
    value: function consume(n) {
      this._bufferedBytes -= n;
      if (n === this._buffers[0].length) return this._buffers.shift();

      if (n < this._buffers[0].length) {
        var buf = this._buffers[0];
        this._buffers[0] = buf.slice(n);
        return buf.slice(0, n);
      }

      var dst = Buffer.allocUnsafe(n);

      do {
        var _buf = this._buffers[0];
        var offset = dst.length - n;

        if (n >= _buf.length) {
          dst.set(this._buffers.shift(), offset);
        } else {
          dst.set(new Uint8Array(_buf.buffer, _buf.byteOffset, n), offset);
          this._buffers[0] = _buf.slice(n);
        }

        n -= _buf.length;
      } while (n > 0);

      return dst;
    }
    /**
     * Starts the parsing loop.
     *
     * @param {Function} cb Callback
     * @private
     */

  }, {
    key: "startLoop",
    value: function startLoop(cb) {
      var err;
      this._loop = true;

      do {
        switch (this._state) {
          case GET_INFO:
            err = this.getInfo();
            break;

          case GET_PAYLOAD_LENGTH_16:
            err = this.getPayloadLength16();
            break;

          case GET_PAYLOAD_LENGTH_64:
            err = this.getPayloadLength64();
            break;

          case GET_MASK:
            this.getMask();
            break;

          case GET_DATA:
            err = this.getData(cb);
            break;

          default:
            // `INFLATING`
            this._loop = false;
            return;
        }
      } while (this._loop);

      cb(err);
    }
    /**
     * Reads the first two bytes of a frame.
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "getInfo",
    value: function getInfo() {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }

      var buf = this.consume(2);

      if ((buf[0] & 0x30) !== 0x00) {
        this._loop = false;
        return error(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
      }

      var compressed = (buf[0] & 0x40) === 0x40; //    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
      //      this._loop = false;
      //      return error(
      //        RangeError,
      //        'RSV1 must be clear',
      //        true,
      //        1002,
      //        'WS_ERR_UNEXPECTED_RSV_1'
      //      );
      //    }

      this._fin = (buf[0] & 0x80) === 0x80;
      this._opcode = buf[0] & 0x0f;
      this._payloadLength = buf[1] & 0x7f;

      if (this._opcode === 0x00) {
        if (compressed) {
          this._loop = false;
          return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
        }

        if (!this._fragmented) {
          this._loop = false;
          return error(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
        }

        this._opcode = this._fragmented;
      } else if (this._opcode === 0x01 || this._opcode === 0x02) {
        if (this._fragmented) {
          this._loop = false;
          return error(RangeError, "invalid opcode ".concat(this._opcode), true, 1002, 'WS_ERR_INVALID_OPCODE');
        }

        this._compressed = compressed;
      } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
        if (!this._fin) {
          this._loop = false;
          return error(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
        }

        if (compressed) {
          this._loop = false;
          return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
        }

        if (this._payloadLength > 0x7d) {
          this._loop = false;
          return error(RangeError, "invalid payload length ".concat(this._payloadLength), true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
        }
      } else {
        this._loop = false;
        return error(RangeError, "invalid opcode ".concat(this._opcode), true, 1002, 'WS_ERR_INVALID_OPCODE');
      }

      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      this._masked = (buf[1] & 0x80) === 0x80;

      if (this._isServer) {
        if (!this._masked) {
          this._loop = false;
          return error(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
        }
      } else if (this._masked) {
        this._loop = false;
        return error(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
      }

      if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;else return this.haveLength();
    }
    /**
     * Gets extended payload length (7+16).
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "getPayloadLength16",
    value: function getPayloadLength16() {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }

      this._payloadLength = this.consume(2).readUInt16BE(0);
      return this.haveLength();
    }
    /**
     * Gets extended payload length (7+64).
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "getPayloadLength64",
    value: function getPayloadLength64() {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }

      var buf = this.consume(8);
      var num = buf.readUInt32BE(0); //
      // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
      // if payload length is greater than this number.
      //

      if (num > Math.pow(2, 53 - 32) - 1) {
        this._loop = false;
        return error(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
      }

      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
      return this.haveLength();
    }
    /**
     * Payload length has been read.
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "haveLength",
    value: function haveLength() {
      if (this._payloadLength && this._opcode < 0x08) {
        this._totalPayloadLength += this._payloadLength;

        if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          this._loop = false;
          return error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
        }
      }

      if (this._masked) this._state = GET_MASK;else this._state = GET_DATA;
    }
    /**
     * Reads mask bytes.
     *
     * @private
     */

  }, {
    key: "getMask",
    value: function getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }

      this._mask = this.consume(4);
      this._state = GET_DATA;
    }
    /**
     * Reads data bytes.
     *
     * @param {Function} cb Callback
     * @return {(Error|RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "getData",
    value: function getData(cb) {
      var data = EMPTY_BUFFER;

      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }

        data = this.consume(this._payloadLength);

        if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
          unmask(data, this._mask);
        }
      }

      if (this._opcode > 0x07) return this.controlMessage(data);

      if (this._compressed) {
        this._state = INFLATING; //      this.decompress(data, cb);

        return;
      }

      if (data.length) {
        //
        // This message is not compressed so its length is the sum of the payload
        // length of all fragments.
        //
        this._messageLength = this._totalPayloadLength;

        this._fragments.push(data);
      }

      return this.dataMessage();
    }
    /**
     * Decompresses data.
     *
     * @param {Buffer} data Compressed data
     * @param {Function} cb Callback
     * @private
     */

    /*
    decompress(data, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
       perMessageDeflate.decompress(data, this._fin, (err, buf) => {
        if (err) return cb(err);
         if (buf.length) {
          this._messageLength += buf.length;
          if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
            return cb(
              error(
                RangeError,
                'Max payload size exceeded',
                false,
                1009,
                'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
              )
            );
          }
           this._fragments.push(buf);
        }
         const er = this.dataMessage();
        if (er) return cb(er);
         this.startLoop(cb);
      });
    }
    */

    /**
     * Handles a data message.
     *
     * @return {(Error|undefined)} A possible error
     * @private
     */

  }, {
    key: "dataMessage",
    value: function dataMessage() {
      if (this._fin) {
        var messageLength = this._messageLength;
        var fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];

        if (this._opcode === 2) {
          var data;

          if (this._binaryType === 'nodebuffer') {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === 'arraybuffer') {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else {
            data = fragments;
          }

          this.emit('message', data, true);
        } else {
          var buf = concat(fragments, messageLength);

          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            this._loop = false;
            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
          }

          this.emit('message', buf, false);
        }
      }

      this._state = GET_INFO;
    }
    /**
     * Handles a control message.
     *
     * @param {Buffer} data Data to handle
     * @return {(Error|RangeError|undefined)} A possible error
     * @private
     */

  }, {
    key: "controlMessage",
    value: function controlMessage(data) {
      if (this._opcode === 0x08) {
        this._loop = false;

        if (data.length === 0) {
          this.emit('conclude', 1005, EMPTY_BUFFER);
          this.end();
        } else if (data.length === 1) {
          return error(RangeError, 'invalid payload length 1', true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
        } else {
          var code = data.readUInt16BE(0);

          if (!isValidStatusCode(code)) {
            return error(RangeError, "invalid status code ".concat(code), true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
          }

          var buf = data.slice(2);

          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
          }

          this.emit('conclude', code, buf);
          this.end();
        }
      } else if (this._opcode === 0x09) {
        this.emit('ping', data);
      } else {
        this.emit('pong', data);
      }

      this._state = GET_INFO;
    }
  }]);

  return Receiver;
}(Writable);

module.exports = Receiver;
/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */

function error(ErrorCtor, message, prefix, statusCode, errorCode) {
  var err = new ErrorCtor(prefix ? "Invalid WebSocket frame: ".concat(message) : message);
  Error.captureStackTrace(err, error);
  err.code = errorCode;
  err[kStatusCode] = statusCode;
  return err;
}