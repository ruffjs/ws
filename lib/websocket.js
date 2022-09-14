/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */
'use strict';

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.object.entries.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var EventEmitter = require('events');

var https = require('https');

var http = require('http');

var net = require('net');

var tls = require('tls');

var _require = require('crypto'),
    randomBytes = _require.randomBytes,
    createHash = _require.createHash;

randomBytes = function (number) {
    var buffer = new Buffer(number);
    for (var i = 0; i < buffer.length; i++) {
        buffer[i] = Math.random() * 256;
    }

    return buffer;
}

var _require2 = require('stream'),
    Readable = _require2.Readable;

var _require3 = require('url'),
    URL = _require3; //const PerMessageDeflate = require('./permessage-deflate');


var Receiver = require('./receiver');

var Sender = require('./sender');

var _require4 = require('./constants'),
    BINARY_TYPES = _require4.BINARY_TYPES,
    EMPTY_BUFFER = _require4.EMPTY_BUFFER,
    GUID = _require4.GUID,
    kForOnEventAttribute = _require4.kForOnEventAttribute,
    kListener = _require4.kListener,
    kStatusCode = _require4.kStatusCode,
    kWebSocket = _require4.kWebSocket,
    NOOP = _require4.NOOP;

var _require5 = require('./event-target'),
    _require5$EventTarget = _require5.EventTarget,
    addEventListener = _require5$EventTarget.addEventListener,
    removeEventListener = _require5$EventTarget.removeEventListener;

var _require6 = require('./extension'),
    format = _require6.format,
    parse = _require6.parse;

var _require7 = require('./buffer-util'),
    toBuffer = _require7.toBuffer;

var closeTimeout = 30 * 1000;
var kAborted = 'kAborted';
var protocolVersions = [8, 13];
var readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */

var WebSocket = /*#__PURE__*/function (_EventEmitter) {
  _inherits(WebSocket, _EventEmitter);

  var _super = _createSuper(WebSocket);

  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  function WebSocket(address, protocols, options) {
    var _this;

    _classCallCheck(this, WebSocket);

    _this = _super.call(this);
    _this._binaryType = BINARY_TYPES[0];
    _this._closeCode = 1006;
    _this._closeFrameReceived = false;
    _this._closeFrameSent = false;
    _this._closeMessage = EMPTY_BUFFER;
    _this._closeTimer = null;
    _this._extensions = {};
    _this._paused = false;
    _this._protocol = '';
    _this._readyState = WebSocket.CONNECTING;
    _this._receiver = null;
    _this._sender = null;
    _this._socket = null;

    if (address !== null) {
      _this._bufferedAmount = 0;
      _this._isServer = false;
      _this._redirects = 0;

      if (protocols === undefined) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        if (_typeof(protocols) === 'object' && protocols !== null) {
          options = protocols;
          protocols = [];
        } else {
          protocols = [protocols];
        }
      }

      initAsClient(_assertThisInitialized(_this), address, protocols, options);
    } else {
      _this._isServer = true;
    }

    return _this;
  }
  /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */


  _createClass(WebSocket, [{
    key: "binaryType",
    get: function get() {
      return this._binaryType;
    },
    set: function set(type) {
      if (!BINARY_TYPES.includes(type)) return;
      this._binaryType = type; //
      // Allow to change `binaryType` on the fly.
      //

      if (this._receiver) this._receiver._binaryType = type;
    }
    /**
     * @type {Number}
     */

  }, {
    key: "bufferedAmount",
    get: function get() {
      if (!this._socket) return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
     * @type {String}
     */

  }, {
    key: "extensions",
    get: function get() {
      return Object.keys(this._extensions).join();
    }
    /**
     * @type {Boolean}
     */

  }, {
    key: "isPaused",
    get: function get() {
      return this._paused;
    }
    /**
     * @type {Function}
     */

    /* istanbul ignore next */

  }, {
    key: "onclose",
    get: function get() {
      return null;
    }
    /**
     * @type {Function}
     */

    /* istanbul ignore next */

  }, {
    key: "onerror",
    get: function get() {
      return null;
    }
    /**
     * @type {Function}
     */

    /* istanbul ignore next */

  }, {
    key: "onopen",
    get: function get() {
      return null;
    }
    /**
     * @type {Function}
     */

    /* istanbul ignore next */

  }, {
    key: "onmessage",
    get: function get() {
      return null;
    }
    /**
     * @type {String}
     */

  }, {
    key: "protocol",
    get: function get() {
      return this._protocol;
    }
    /**
     * @type {Number}
     */

  }, {
    key: "readyState",
    get: function get() {
      return this._readyState;
    }
    /**
     * @type {String}
     */

  }, {
    key: "url",
    get: function get() {
      return this._url;
    }
    /**
     * Set up the socket and the internal resources.
     *
     * @param {(net.Socket|tls.Socket)} socket The network socket between the
     *     server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Object} options Options object
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Number} [options.maxPayload=0] The maximum allowed message size
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     * @private
     */

  }, {
    key: "setSocket",
    value: function setSocket(socket, head, options) {
      var receiver = new Receiver({
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxPayload: options.maxPayload,
        skipUTF8Validation: options.skipUTF8Validation
      });
      this._sender = new Sender(socket, this._extensions, options.generateMask);
      this._receiver = receiver;
      this._socket = socket;
      receiver[kWebSocket] = this;
      socket[kWebSocket] = this;
      receiver.on('conclude', receiverOnConclude);
      receiver.on('drain', receiverOnDrain);
      receiver.on('error', receiverOnError);
      receiver.on('message', receiverOnMessage);
      receiver.on('ping', receiverOnPing);
      receiver.on('pong', receiverOnPong);
      socket.setTimeout(0);
      socket.setNoDelay();
      if (head.length > 0) socket.unshift(head);
      socket.on('close', socketOnClose);
      socket.on('data', socketOnData);
      socket.on('end', socketOnEnd);
      socket.on('error', socketOnError);
      this._readyState = WebSocket.OPEN;
      this.emit('open');
    }
    /**
     * Emit the `'close'` event.
     *
     * @private
     */

  }, {
    key: "emitClose",
    value: function emitClose() {
      if (!this._socket) {
        this._readyState = WebSocket.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
        return;
      }
      /*
      if (this._extensions[PerMessageDeflate.extensionName]) {
        this._extensions[PerMessageDeflate.extensionName].cleanup();
      }
      */


      this._receiver.removeAllListeners();

      this._readyState = WebSocket.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
    }
    /**
     * Start a closing handshake.
     *
     *          +----------+   +-----------+   +----------+
     *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
     *    |     +----------+   +-----------+   +----------+     |
     *          +----------+   +-----------+         |
     * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
     *          +----------+   +-----------+   |
     *    |           |                        |   +---+        |
     *                +------------------------+-->|fin| - - - -
     *    |         +---+                      |   +---+
     *     - - - - -|fin|<---------------------+
     *              +---+
     *
     * @param {Number} [code] Status code explaining why the connection is closing
     * @param {(String|Buffer)} [data] The reason why the connection is
     *     closing
     * @public
     */

  }, {
    key: "close",
    value: function close(code, data) {
      var _this2 = this;

      if (this.readyState === WebSocket.CLOSED) return;

      if (this.readyState === WebSocket.CONNECTING) {
        var msg = 'WebSocket was closed before the connection was established';
        return abortHandshake(this, this._req, msg);
      }

      if (this.readyState === WebSocket.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
          this._socket.end();
        }

        return;
      }

      this._readyState = WebSocket.CLOSING;

      this._sender.close(code, data, !this._isServer, function (err) {
        //
        // This error is handled by the `'error'` listener on the socket. We only
        // want to know if the close frame has been sent here.
        //
        if (err) return;
        _this2._closeFrameSent = true;

        if (_this2._closeFrameReceived || _this2._receiver._writableState.errorEmitted) {
          _this2._socket.end();
        }
      }); //
      // Specify a timeout for the closing handshake to complete.
      //


      this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }
    /**
     * Pause the socket.
     *
     * @public
     */

  }, {
    key: "pause",
    value: function pause() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }

      this._paused = true;

      this._socket.pause();
    }
    /**
     * Send a ping.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the ping is sent
     * @public
     */

  }, {
    key: "ping",
    value: function ping(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }

      if (typeof data === 'function') {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === 'function') {
        cb = mask;
        mask = undefined;
      }

      if (typeof data === 'number') data = data.toString();

      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }

      if (mask === undefined) mask = !this._isServer;

      this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
     * Send a pong.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the pong is sent
     * @public
     */

  }, {
    key: "pong",
    value: function pong(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }

      if (typeof data === 'function') {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === 'function') {
        cb = mask;
        mask = undefined;
      }

      if (typeof data === 'number') data = data.toString();

      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }

      if (mask === undefined) mask = !this._isServer;

      this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
     * Resume the socket.
     *
     * @public
     */

  }, {
    key: "resume",
    value: function resume() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }

      this._paused = false;
      if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    /**
     * Send a data message.
     *
     * @param {*} data The message to send
     * @param {Object} [options] Options object
     * @param {Boolean} [options.binary] Specifies whether `data` is binary or
     *     text
     * @param {Boolean} [options.compress] Specifies whether or not to compress
     *     `data`
     * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when data is written out
     * @public
     */

  }, {
    key: "send",
    value: function send(data, options, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }

      if (typeof options === 'function') {
        cb = options;
        options = {};
      }

      if (typeof data === 'number') data = data.toString();

      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }

      var opts = _objectSpread({
        binary: typeof data !== 'string',
        mask: !this._isServer,
        compress: true,
        fin: true
      }, options);
      /*
      if (!this._extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }
      */


      this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
     * Forcibly close the connection.
     *
     * @public
     */

  }, {
    key: "terminate",
    value: function terminate() {
      if (this.readyState === WebSocket.CLOSED) return;

      if (this.readyState === WebSocket.CONNECTING) {
        var msg = 'WebSocket was closed before the connection was established';
        return abortHandshake(this, this._req, msg);
      }

      if (this._socket) {
        this._readyState = WebSocket.CLOSING;

        this._socket.destroy();
      }
    }
  }]);

  return WebSocket;
}(EventEmitter);
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */


Object.defineProperty(WebSocket, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */

Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */

Object.defineProperty(WebSocket, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */

Object.defineProperty(WebSocket.prototype, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */

Object.defineProperty(WebSocket, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */

Object.defineProperty(WebSocket.prototype, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */

Object.defineProperty(WebSocket, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */

Object.defineProperty(WebSocket.prototype, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});
['binaryType', 'bufferedAmount', 'extensions', 'isPaused', 'protocol', 'readyState', 'url'].forEach(function (property) {
  Object.defineProperty(WebSocket.prototype, property, {
    enumerable: true
  });
}); //
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//

['open', 'error', 'close', 'message'].forEach(function (method) {
  Object.defineProperty(WebSocket.prototype, "on".concat(method), {
    enumerable: true,
    get: function get() {
      var _iterator = _createForOfIteratorHelper(this.listeners(method)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          if (listener[kForOnEventAttribute]) return listener[kListener];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    },
    set: function set(handler) {
      var _iterator2 = _createForOfIteratorHelper(this.listeners(method)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var listener = _step2.value;

          if (listener[kForOnEventAttribute]) {
            this.removeListener(method, listener);
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (typeof handler !== 'function') return;
      this.addEventListener(method, handler, _defineProperty({}, kForOnEventAttribute, true));
    }
  });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module.exports = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */

function initAsClient(websocket, address, protocols, options) {
  var opts = _objectSpread(_objectSpread({
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    skipUTF8Validation: false,
    perMessageDeflate: false, // RUFF
    followRedirects: false,
    maxRedirects: 10
  }, options), {}, {
    createConnection: undefined,
    socketPath: undefined,
    hostname: undefined,
    protocol: undefined,
    timeout: undefined,
    method: undefined,
    host: undefined,
    path: undefined,
    port: undefined
  });

  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError("Unsupported protocol version: ".concat(opts.protocolVersion, " ") + "(supported versions: ".concat(protocolVersions.join(', '), ")"));
  }

  var parsedUrl;

//  if (address instanceof URL) {
//    parsedUrl = address;
//    websocket._url = address.href;
//  } else {
    try {
      parsedUrl = URL.parse(address);
      // Add for Ruff porting
      parsedUrl.search = parsedUrl.search === null ? '' : parsedUrl.search;
      parsedUrl.hash = parsedUrl.hash === null ? '' : parsedUrl.hash;
    } catch (e) {
      throw new SyntaxError("Invalid URL: ".concat(address));
    }

    websocket._url = address;
//  }

  var isSecure = parsedUrl.protocol === 'wss:';
  var isUnixSocket = parsedUrl.protocol === 'ws+unix:';
  var invalidURLMessage;

  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isUnixSocket) {
    invalidURLMessage = 'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
  } else if (isUnixSocket && !parsedUrl.pathname) {
    invalidURLMessage = "The URL's pathname is empty";
  } else if (parsedUrl.hash) {
    invalidURLMessage = 'The URL contains a fragment identifier';
  }

  if (invalidURLMessage) {
    var err = new SyntaxError(invalidURLMessage);

    if (websocket._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket, err);
      return;
    }
  }

  var defaultPort = isSecure ? 443 : 80;
  var key = randomBytes(16).toString('base64');
  var request = isSecure ? https.request : http.request;
  var protocolSet = new Set();
  var perMessageDeflate;
  opts.createConnection = isSecure ? tlsConnect : netConnect;
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
  opts.headers = _objectSpread(_objectSpread({}, opts.headers), {}, {
    'Sec-WebSocket-Version': opts.protocolVersion,
    'Sec-WebSocket-Key': key,
    Connection: 'Upgrade',
    Upgrade: 'websocket'
  });
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;
  /*
  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers['Sec-WebSocket-Extensions'] = format({
      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
    });
  }
  */

  if (protocols.length) {
    var _iterator3 = _createForOfIteratorHelper(protocols),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var protocol = _step3.value;

        if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
          throw new SyntaxError('An invalid or duplicated subprotocol was specified');
        }

        protocolSet.add(protocol);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
  }

  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }

  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = "".concat(parsedUrl.username, ":").concat(parsedUrl.password);
  }

  if (isUnixSocket) {
    var parts = opts.path.split(':');
    opts.socketPath = parts[0];
    opts.path = parts[1];
  }

  var req;

  if (opts.followRedirects) {
    if (websocket._redirects === 0) {
      websocket._originalUnixSocket = isUnixSocket;
      websocket._originalSecure = isSecure;
      websocket._originalHostOrSocketPath = isUnixSocket ? opts.socketPath : parsedUrl.host;
      var headers = options && options.headers; //
      // Shallow copy the user provided options so that headers can be changed
      // without mutating the original object.
      //

      options = _objectSpread(_objectSpread({}, options), {}, {
        headers: {}
      });

      if (headers) {
        for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              _key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          options.headers[_key.toLowerCase()] = value;
        }
      }
    } else if (websocket.listenerCount('redirect') === 0) {
      var isSameHost = isUnixSocket ? websocket._originalUnixSocket ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalUnixSocket ? false : parsedUrl.host === websocket._originalHostOrSocketPath;

      if (!isSameHost || websocket._originalSecure && !isSecure) {
        //
        // Match curl 7.77.0 behavior and drop the following headers. These
        // headers are also dropped when following a redirect to a subdomain.
        //
        delete opts.headers.authorization;
        delete opts.headers.cookie;
        if (!isSameHost) delete opts.headers.host;
        opts.auth = undefined;
      }
    } //
    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
    // If the `Authorization` header is set, then there is nothing to do as it
    // will take precedence.
    //


    if (opts.auth && !options.headers.authorization) {
      options.headers.authorization = 'Basic ' + Buffer.from(opts.auth).toString('base64');
    }

    req = websocket._req = request(opts);

    if (websocket._redirects) {
      //
      // Unlike what is done for the `'upgrade'` event, no early exit is
      // triggered here if the user calls `websocket.close()` or
      // `websocket.terminate()` from a listener of the `'redirect'` event. This
      // is because the user can also call `request.destroy()` with an error
      // before calling `websocket.close()` or `websocket.terminate()` and this
      // would result in an error being emitted on the `request` object with no
      // `'error'` event listeners attached.
      //
      websocket.emit('redirect', websocket.url, req);
    }
  } else {
    req = websocket._req = request(opts);
  }

  if (opts.timeout) {
    req.on('timeout', function () {
      abortHandshake(websocket, req, 'Opening handshake has timed out');
    });
  }

  req.on('error', function (err) {
    if (req === null || req[kAborted]) return;
    req = websocket._req = null;
    emitErrorAndClose(websocket, err);
  });
  req.on('response', function (res) {
    var location = res.headers.location;
    var statusCode = res.statusCode;

    if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
      if (++websocket._redirects > opts.maxRedirects) {
        abortHandshake(websocket, req, 'Maximum redirects exceeded');
        return;
      }

      req.abort();
      var addr;

      try {
        addr = new URL(location, address);
      } catch (e) {
        var _err = new SyntaxError("Invalid URL: ".concat(location));

        emitErrorAndClose(websocket, _err);
        return;
      }

      initAsClient(websocket, addr, protocols, options);
    } else if (!websocket.emit('unexpected-response', req, res)) {
      abortHandshake(websocket, req, "Unexpected server response: ".concat(res.statusCode));
    }
  });
  req.on('upgrade', function (res, socket, head) {
    websocket.emit('upgrade', res); //
    // The user may have closed the connection from a listener of the
    // `'upgrade'` event.
    //

    if (websocket.readyState !== WebSocket.CONNECTING) return;
    req = websocket._req = null;

    if (res.headers.upgrade.toLowerCase() !== 'websocket') {
      abortHandshake(websocket, socket, 'Invalid Upgrade header');
      return;
    }

    var digest = createHash('sha1').update(key + GUID).digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
      return;
    }

    var serverProt = res.headers['sec-websocket-protocol'];
    var protError;

    if (serverProt !== undefined) {
      if (!protocolSet.size) {
        protError = 'Server sent a subprotocol but none was requested';
      } else if (!protocolSet.has(serverProt)) {
        protError = 'Server sent an invalid subprotocol';
      }
    } else if (protocolSet.size) {
      protError = 'Server sent no subprotocol';
    }

    if (protError) {
      abortHandshake(websocket, socket, protError);
      return;
    }

    if (serverProt) websocket._protocol = serverProt;
    var secWebSocketExtensions = res.headers['sec-websocket-extensions'];

    if (secWebSocketExtensions !== undefined) {
      if (!perMessageDeflate) {
        var message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      var extensions;

      try {
        extensions = parse(secWebSocketExtensions);
      } catch (err) {
        var _message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, _message);
        return;
      }

      var extensionNames = Object.keys(extensions);

      if (extensionNames.length !== 1 //||
      //        extensionNames[0] !== PerMessageDeflate.extensionName
      ) {
        var _message2 = 'Server indicated an extension that was not requested';
        abortHandshake(websocket, socket, _message2);
        return;
      }
      /*
      try {
        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }
       websocket._extensions[PerMessageDeflate.extensionName] =
        perMessageDeflate;
      */

    }

    websocket.setSocket(socket, head, {
      generateMask: opts.generateMask,
      maxPayload: opts.maxPayload,
      skipUTF8Validation: opts.skipUTF8Validation
    });
  });
  req.end();
}
/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */


function emitErrorAndClose(websocket, err) {
  websocket._readyState = WebSocket.CLOSING;
  websocket.emit('error', err);
  websocket.emitClose();
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */


function netConnect(options) {
  options.path = options.socketPath;
  return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */

var fs = require('fs');

function tlsConnect(options) {
  options.path = undefined;

  if (!options.servername && options.servername !== '') {
    options.servername = net.isIP(options.host) ? '' : options.host;
  }

//  console.log(options);
  options.rejectUnauthorized = false;
//  options.ca = fs.readFileSync('/Users/young/Desktop/SSL/OWN/ca.crt');
  options.cert = fs.readFileSync('/Users/young/Desktop/SSL/OWN/client.crt');
  options.key = fs.readFileSync('/Users/young/Desktop/SSL/OWN/client.key');

  return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */


function abortHandshake(websocket, stream, message) {
  websocket._readyState = WebSocket.CLOSING;
  var err = new Error(message);
  //Error.captureStackTrace(err, abortHandshake);

  if (stream.setHeader) {
    stream[kAborted] = true;
    stream.abort();

    if (stream.socket && !stream.socket.destroyed) {
      //
      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
      // called after the request completed. See
      // https://github.com/websockets/ws/issues/1869.
      //
      stream.socket.destroy();
    }

    process.nextTick(emitErrorAndClose, websocket, err);
  } else {
    stream.destroy(err);
    stream.once('error', websocket.emit.bind(websocket, 'error'));
    stream.once('close', websocket.emitClose.bind(websocket));
  }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */


function sendAfterClose(websocket, data, cb) {
  if (data) {
    var length = toBuffer(data).length; //
    // The `_bufferedAmount` property is used only when the peer is a client and
    // the opening handshake fails. Under these circumstances, in fact, the
    // `setSocket()` method is not called, so the `_socket` and `_sender`
    // properties are set to `null`.
    //

    if (websocket._socket) websocket._sender._bufferedBytes += length;else websocket._bufferedAmount += length;
  }

  if (cb) {
    var err = new Error("WebSocket is not open: readyState ".concat(websocket.readyState, " ") + "(".concat(readyStates[websocket.readyState], ")"));
    cb(err);
  }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */


function receiverOnConclude(code, reason) {
  var websocket = this[kWebSocket];
  websocket._closeFrameReceived = true;
  websocket._closeMessage = reason;
  websocket._closeCode = code;
  if (websocket._socket[kWebSocket] === undefined) return;

  websocket._socket.removeListener('data', socketOnData);

  process.nextTick(resume, websocket._socket);
  if (code === 1005) websocket.close();else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */


function receiverOnDrain() {
  var websocket = this[kWebSocket];
  if (!websocket.isPaused) websocket._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */


function receiverOnError(err) {
  var websocket = this[kWebSocket];

  if (websocket._socket[kWebSocket] !== undefined) {
    websocket._socket.removeListener('data', socketOnData); //
    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
    // https://github.com/websockets/ws/issues/1940.
    //


    process.nextTick(resume, websocket._socket);
    websocket.close(err[kStatusCode]);
  }

  websocket.emit('error', err);
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */


function receiverOnFinish() {
  this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */


function receiverOnMessage(data, isBinary) {
  this[kWebSocket].emit('message', data, isBinary);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */


function receiverOnPing(data) {
  var websocket = this[kWebSocket];
  websocket.pong(data, !websocket._isServer, NOOP);
  websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */


function receiverOnPong(data) {
  this[kWebSocket].emit('pong', data);
}
/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */


function resume(stream) {
  stream.resume();
}
/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */


function socketOnClose() {
  var websocket = this[kWebSocket];
  this.removeListener('close', socketOnClose);
  this.removeListener('data', socketOnData);
  this.removeListener('end', socketOnEnd);
  websocket._readyState = WebSocket.CLOSING;
  var chunk; //
  // The close frame might not have been received or the `'end'` event emitted,
  // for example, if the socket was destroyed due to an error. Ensure that the
  // `receiver` stream is closed after writing any remaining buffered data to
  // it. If the readable side of the socket is in flowing mode then there is no
  // buffered data as everything has been already written and `readable.read()`
  // will return `null`. If instead, the socket is paused, any possible buffered
  // data will be read as a single chunk.
  //

  if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
    websocket._receiver.write(chunk);
  }

  websocket._receiver.end();

  this[kWebSocket] = undefined;
  clearTimeout(websocket._closeTimer);

  if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
    websocket.emitClose();
  } else {
    websocket._receiver.on('error', receiverOnFinish);

    websocket._receiver.on('finish', receiverOnFinish);
  }
}
/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */


function socketOnData(chunk) {
  if (!this[kWebSocket]._receiver.write(chunk)) {
    this.pause();
  }
}
/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */


function socketOnEnd() {
  var websocket = this[kWebSocket];
  websocket._readyState = WebSocket.CLOSING;

  websocket._receiver.end();

  this.end();
}
/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */


function socketOnError() {
  var websocket = this[kWebSocket];
  this.removeListener('error', socketOnError);
  this.on('error', NOOP);

  if (websocket) {
    websocket._readyState = WebSocket.CLOSING;
    this.destroy();
  }
}
