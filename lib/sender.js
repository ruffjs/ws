/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */
'use strict';

require("../core-js/modules/es.reflect.apply.js");

require("../core-js/modules/es.object.to-string.js");

require("../core-js/modules/es.array.slice.js");

require("../core-js/modules/es.object.define-property.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var net = require('net');

var tls = require('tls');

var _require = require('crypto'),
    randomFillSync = _require.randomFillSync; //const PerMessageDeflate = require('./permessage-deflate');

randomFillSync = function (buffer, offset, size) {
    for (var i = offset; i < offset + size; i++) {
        buffer[i] = Math.random() * 256;
    }
}

var _require2 = require('./constants'),
    EMPTY_BUFFER = _require2.EMPTY_BUFFER;

var _require3 = require('./validation'),
    isValidStatusCode = _require3.isValidStatusCode;

var _require4 = require('./buffer-util'),
    applyMask = _require4.mask,
    toBuffer = _require4.toBuffer;

var kByteLength = 'kByteLength';
var maskBuffer = Buffer.alloc(4);
/**
 * HyBi Sender implementation.
 */

var Sender = /*#__PURE__*/function () {
  /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  function Sender(socket, extensions, generateMask) {
    _classCallCheck(this, Sender);

    this._extensions = extensions || {};

    if (generateMask) {
      this._generateMask = generateMask;
      this._maskBuffer = Buffer.alloc(4);
    }

    this._socket = socket;
    this._firstFragment = true;
    this._compress = false;
    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];
  }
  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */


  _createClass(Sender, [{
    key: "close",
    value:
    /**
     * Sends a close message to the other peer.
     *
     * @param {Number} [code] The status code component of the body
     * @param {(String|Buffer)} [data] The message component of the body
     * @param {Boolean} [mask=false] Specifies whether or not to mask the message
     * @param {Function} [cb] Callback
     * @public
     */
    function close(code, data, mask, cb) {
      var _options;

      var buf;

      if (code === undefined) {
        buf = EMPTY_BUFFER;
      } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
        throw new TypeError('First argument must be a valid error code number');
      } else if (data === undefined || !data.length) {
        buf = Buffer.allocUnsafe(2);
        buf.writeUInt16BE(code, 0);
      } else {
        var length = Buffer.byteLength(data);

        if (length > 123) {
          throw new RangeError('The message must not be greater than 123 bytes');
        }

        buf = Buffer.allocUnsafe(2 + length);
        buf.writeUInt16BE(code, 0);

        if (typeof data === 'string') {
          buf.write(data, 2);
        } else {
          buf.set(data, 2);
        }
      }

      var options = (_options = {}, _defineProperty(_options, kByteLength, buf.length), _defineProperty(_options, "fin", true), _defineProperty(_options, "generateMask", this._generateMask), _defineProperty(_options, "mask", mask), _defineProperty(_options, "maskBuffer", this._maskBuffer), _defineProperty(_options, "opcode", 0x08), _defineProperty(_options, "readOnly", false), _defineProperty(_options, "rsv1", false), _options);

      if (this._deflating) {
        this.enqueue([this.dispatch, buf, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(buf, options), cb);
      }
    }
    /**
     * Sends a ping message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */

  }, {
    key: "ping",
    value: function ping(data, mask, cb) {
      var _options2;

      var byteLength;
      var readOnly;

      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }

      if (byteLength > 125) {
        throw new RangeError('The data size must not be greater than 125 bytes');
      }

      var options = (_options2 = {}, _defineProperty(_options2, kByteLength, byteLength), _defineProperty(_options2, "fin", true), _defineProperty(_options2, "generateMask", this._generateMask), _defineProperty(_options2, "mask", mask), _defineProperty(_options2, "maskBuffer", this._maskBuffer), _defineProperty(_options2, "opcode", 0x09), _defineProperty(_options2, "readOnly", readOnly), _defineProperty(_options2, "rsv1", false), _options2);

      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    /**
     * Sends a pong message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */

  }, {
    key: "pong",
    value: function pong(data, mask, cb) {
      var _options3;

      var byteLength;
      var readOnly;

      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }

      if (byteLength > 125) {
        throw new RangeError('The data size must not be greater than 125 bytes');
      }

      var options = (_options3 = {}, _defineProperty(_options3, kByteLength, byteLength), _defineProperty(_options3, "fin", true), _defineProperty(_options3, "generateMask", this._generateMask), _defineProperty(_options3, "mask", mask), _defineProperty(_options3, "maskBuffer", this._maskBuffer), _defineProperty(_options3, "opcode", 0x0a), _defineProperty(_options3, "readOnly", readOnly), _defineProperty(_options3, "rsv1", false), _options3);

      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    /**
     * Sends a data message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Object} options Options object
     * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
     *     or text
     * @param {Boolean} [options.compress=false] Specifies whether or not to
     *     compress `data`
     * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Function} [cb] Callback
     * @public
     */

  }, {
    key: "send",
    value: function send(data, options, cb) {
      //    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      var opcode = options.binary ? 2 : 1;
      var rsv1 = options.compress;
      var byteLength;
      var readOnly;

      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }

      if (this._firstFragment) {
        this._firstFragment = false; //      if (
        //        rsv1 &&
        //        perMessageDeflate &&
        //        perMessageDeflate.params[
        //          perMessageDeflate._isServer
        //            ? 'server_no_context_takeover'
        //            : 'client_no_context_takeover'
        //        ]
        //      ) {
        //        rsv1 = byteLength >= perMessageDeflate._threshold;
        //      }

        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }

      if (options.fin) this._firstFragment = true; //    if (perMessageDeflate) {

      if (false) {
        var _opts;

        var opts = (_opts = {}, _defineProperty(_opts, kByteLength, byteLength), _defineProperty(_opts, "fin", options.fin), _defineProperty(_opts, "generateMask", this._generateMask), _defineProperty(_opts, "mask", options.mask), _defineProperty(_opts, "maskBuffer", this._maskBuffer), _defineProperty(_opts, "opcode", opcode), _defineProperty(_opts, "readOnly", readOnly), _defineProperty(_opts, "rsv1", rsv1), _opts);

        if (this._deflating) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      } else {
        var _Sender$frame;

        this.sendFrame(Sender.frame(data, (_Sender$frame = {}, _defineProperty(_Sender$frame, kByteLength, byteLength), _defineProperty(_Sender$frame, "fin", options.fin), _defineProperty(_Sender$frame, "generateMask", this._generateMask), _defineProperty(_Sender$frame, "mask", options.mask), _defineProperty(_Sender$frame, "maskBuffer", this._maskBuffer), _defineProperty(_Sender$frame, "opcode", opcode), _defineProperty(_Sender$frame, "readOnly", readOnly), _defineProperty(_Sender$frame, "rsv1", false), _Sender$frame)), cb);
      }
    }
    /**
     * Dispatches a message.
     *
     * @param {(Buffer|String)} data The message to send
     * @param {Boolean} [compress=false] Specifies whether or not to compress
     *     `data`
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @param {Function} [cb] Callback
     * @private
     */

  }, {
    key: "dispatch",
    value: function dispatch(data, compress, options, cb) {
      if (!compress) {
        this.sendFrame(Sender.frame(data, options), cb);
        return;
      } //    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];


      this._bufferedBytes += options[kByteLength];
      this._deflating = true; //    perMessageDeflate.compress(data, options.fin, (_, buf) => {
      //      if (this._socket.destroyed) {
      //        const err = new Error(
      //          'The socket was closed while data was being compressed'
      //        );
      //
      //        if (typeof cb === 'function') cb(err);
      //
      //        for (let i = 0; i < this._queue.length; i++) {
      //          const params = this._queue[i];
      //          const callback = params[params.length - 1];
      //
      //          if (typeof callback === 'function') callback(err);
      //        }
      //
      //        return;
      //      }
      //
      //      this._bufferedBytes -= options[kByteLength];
      //      this._deflating = false;
      //      options.readOnly = false;
      //      this.sendFrame(Sender.frame(buf, options), cb);
      //      this.dequeue();
      //    });
    }
    /**
     * Executes queued send operations.
     *
     * @private
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      while (!this._deflating && this._queue.length) {
        var params = this._queue.shift();

        this._bufferedBytes -= params[3][kByteLength];
        Reflect.apply(params[0], this, params.slice(1));
      }
    }
    /**
     * Enqueues a send operation.
     *
     * @param {Array} params Send operation parameters.
     * @private
     */

  }, {
    key: "enqueue",
    value: function enqueue(params) {
      this._bufferedBytes += params[3][kByteLength];

      this._queue.push(params);
    }
    /**
     * Sends a frame.
     *
     * @param {Buffer[]} list The frame to send
     * @param {Function} [cb] Callback
     * @private
     */

  }, {
    key: "sendFrame",
    value: function sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.cork();

        this._socket.write(list[0]);

        this._socket.write(list[1], cb);

        this._socket.uncork();
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }], [{
    key: "frame",
    value: function frame(data, options) {
      var mask;
      var merge = false;
      var offset = 2;
      var skipMasking = false;

      if (options.mask) {
        mask = options.maskBuffer || maskBuffer;

        if (options.generateMask) {
          options.generateMask(mask);
        } else {
          randomFillSync(mask, 0, 4);
        }

        skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
        offset = 6;
      }

      var dataLength;

      if (typeof data === 'string') {
        if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
          dataLength = options[kByteLength];
        } else {
          data = Buffer.from(data);
          dataLength = data.length;
        }
      } else {
        dataLength = data.length;
        merge = options.mask && options.readOnly && !skipMasking;
      }

      var payloadLength = dataLength;

      if (dataLength >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (dataLength > 125) {
        offset += 2;
        payloadLength = 126;
      }

      var target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
      target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
      if (options.rsv1) target[0] |= 0x40;
      target[1] = payloadLength;

      if (payloadLength === 126) {
        target.writeUInt16BE(dataLength, 2);
      } else if (payloadLength === 127) {
        target[2] = target[3] = 0;
        target.writeUIntBE(dataLength, 4, 6);
      }

      if (!options.mask) return [target, data];
      target[1] |= 0x80;
      target[offset - 4] = mask[0];
      target[offset - 3] = mask[1];
      target[offset - 2] = mask[2];
      target[offset - 1] = mask[3];
      if (skipMasking) return [target, data];

      if (merge) {
        applyMask(data, mask, target, offset, dataLength);
        return [target];
      }

      applyMask(data, mask, data, 0, dataLength);
      return [target, data];
    }
  }]);

  return Sender;
}();

module.exports = Sender;
