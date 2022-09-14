/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.map.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var http = require('http');

var https = require('https');

var net = require('net');

var tls = require('tls');

var _require = require('crypto'),
    createHash = _require.createHash;

var extension = require('./extension'); //const PerMessageDeflate = require('./permessage-deflate');


var subprotocol = require('./subprotocol');

var WebSocket = require('./websocket');

var _require2 = require('./constants'),
    GUID = _require2.GUID,
    kWebSocket = _require2.kWebSocket;

var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
var RUNNING = 0;
var CLOSING = 1;
var CLOSED = 2;
/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */

var WebSocketServer = /*#__PURE__*/function (_EventEmitter) {
  _inherits(WebSocketServer, _EventEmitter);

  var _super = _createSuper(WebSocketServer);

  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */
  function WebSocketServer(options, callback) {
    var _this;

    _classCallCheck(this, WebSocketServer);

    _this = _super.call(this);
    options = _objectSpread({
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null,
      // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      WebSocket: WebSocket
    }, options);

    if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
      throw new TypeError('One and only one of the "port", "server", or "noServer" options ' + 'must be specified');
    }

    if (options.port != null) {
      _this._server = http.createServer(function (req, res) {
        var body = http.STATUS_CODES[426];
        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });

      _this._server.listen(options.port, options.host, options.backlog, callback);
    } else if (options.server) {
      _this._server = options.server;
    }

    if (_this._server) {
      var emitConnection = _this.emit.bind(_assertThisInitialized(_this), 'connection');

      _this._removeListeners = addListeners(_this._server, {
        listening: _this.emit.bind(_assertThisInitialized(_this), 'listening'),
        error: _this.emit.bind(_assertThisInitialized(_this), 'error'),
        upgrade: function upgrade(req, socket, head) {
          _this.handleUpgrade(req, socket, head, emitConnection);
        }
      });
    }

    if (options.perMessageDeflate === true) options.perMessageDeflate = {};

    if (options.clientTracking) {
      _this.clients = new Set();
      _this._shouldEmitClose = false;
    }

    _this.options = options;
    _this._state = RUNNING;
    return _this;
  }
  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */


  _createClass(WebSocketServer, [{
    key: "address",
    value: function address() {
      if (this.options.noServer) {
        throw new Error('The server is operating in "noServer" mode');
      }

      if (!this._server) return null;
      return this._server.address();
    }
    /**
     * Stop the server from accepting new connections and emit the `'close'` event
     * when all existing connections are closed.
     *
     * @param {Function} [cb] A one-time listener for the `'close'` event
     * @public
     */

  }, {
    key: "close",
    value: function close(cb) {
      var _this2 = this;

      if (this._state === CLOSED) {
        if (cb) {
          this.once('close', function () {
            cb(new Error('The server is not running'));
          });
        }

        process.nextTick(emitClose, this);
        return;
      }

      if (cb) this.once('close', cb);
      if (this._state === CLOSING) return;
      this._state = CLOSING;

      if (this.options.noServer || this.options.server) {
        if (this._server) {
          this._removeListeners();

          this._removeListeners = this._server = null;
        }

        if (this.clients) {
          if (!this.clients.size) {
            process.nextTick(emitClose, this);
          } else {
            this._shouldEmitClose = true;
          }
        } else {
          process.nextTick(emitClose, this);
        }
      } else {
        var server = this._server;

        this._removeListeners();

        this._removeListeners = this._server = null; //
        // The HTTP/S server was created internally. Close it, and rely on its
        // `'close'` event.
        //

        server.close(function () {
          emitClose(_this2);
        });
      }
    }
    /**
     * See if a given request should be handled by this server instance.
     *
     * @param {http.IncomingMessage} req Request object to inspect
     * @return {Boolean} `true` if the request is valid, else `false`
     * @public
     */

  }, {
    key: "shouldHandle",
    value: function shouldHandle(req) {
      if (this.options.path) {
        var index = req.url.indexOf('?');
        var pathname = index !== -1 ? req.url.slice(0, index) : req.url;
        if (pathname !== this.options.path) return false;
      }

      return true;
    }
    /**
     * Handle a HTTP Upgrade request.
     *
     * @param {http.IncomingMessage} req The request object
     * @param {(net.Socket|tls.Socket)} socket The network socket between the
     *     server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @public
     */

  }, {
    key: "handleUpgrade",
    value: function handleUpgrade(req, socket, head, cb) {
      var _this3 = this;

      socket.on('error', socketOnError);
      var key = req.headers['sec-websocket-key'];
      var version = +req.headers['sec-websocket-version'];

      if (req.method !== 'GET') {
        var message = 'Invalid HTTP method';
        abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
        return;
      }

      if (req.headers.upgrade.toLowerCase() !== 'websocket') {
        var _message = 'Invalid Upgrade header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, _message);
        return;
      }

      if (!key || !keyRegex.test(key)) {
        var _message2 = 'Missing or invalid Sec-WebSocket-Key header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, _message2);
        return;
      }

      if (version !== 8 && version !== 13) {
        var _message3 = 'Missing or invalid Sec-WebSocket-Version header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, _message3);
        return;
      }

      if (!this.shouldHandle(req)) {
        abortHandshake(socket, 400);
        return;
      }

      var secWebSocketProtocol = req.headers['sec-websocket-protocol'];
      var protocols = new Set();

      if (secWebSocketProtocol !== undefined) {
        try {
          protocols = subprotocol.parse(secWebSocketProtocol);
        } catch (err) {
          var _message4 = 'Invalid Sec-WebSocket-Protocol header';
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, _message4);
          return;
        }
      }

      var secWebSocketExtensions = req.headers['sec-websocket-extensions'];
      var extensions = {};
      /*
      if (
        this.options.perMessageDeflate &&
        secWebSocketExtensions !== undefined
      ) {
        const perMessageDeflate = new PerMessageDeflate(
          this.options.perMessageDeflate,
          true,
          this.options.maxPayload
        );
         try {
          const offers = extension.parse(secWebSocketExtensions);
           if (offers[PerMessageDeflate.extensionName]) {
            perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
            extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
          }
        } catch (err) {
          const message =
            'Invalid or unacceptable Sec-WebSocket-Extensions header';
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      */
      //
      // Optionally call external client verification handler.
      //

      if (this.options.verifyClient) {
        var info = {
          origin: req.headers["".concat(version === 8 ? 'sec-websocket-origin' : 'origin')],
          secure: !!(req.socket.authorized || req.socket.encrypted),
          req: req
        };

        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(info, function (verified, code, message, headers) {
            if (!verified) {
              return abortHandshake(socket, code || 401, message, headers);
            }

            _this3.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
          });
          return;
        }

        if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
      }

      this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    /**
     * Upgrade the connection to WebSocket.
     *
     * @param {Object} extensions The accepted extensions
     * @param {String} key The value of the `Sec-WebSocket-Key` header
     * @param {Set} protocols The subprotocols
     * @param {http.IncomingMessage} req The request object
     * @param {(net.Socket|tls.Socket)} socket The network socket between the
     *     server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @throws {Error} If called more than once with the same socket
     * @private
     */

  }, {
    key: "completeUpgrade",
    value: function completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
      var _this4 = this;

      //
      // Destroy the socket if the client has already sent a FIN packet.
      //
      if (!socket.readable || !socket.writable) return socket.destroy();

      if (socket[kWebSocket]) {
        throw new Error('server.handleUpgrade() was called more than once with the same ' + 'socket, possibly due to a misconfiguration');
      }

      if (this._state > RUNNING) return abortHandshake(socket, 503);
      var digest = createHash('sha1').update(key + GUID).digest('base64');
      var headers = ['HTTP/1.1 101 Switching Protocols', 'Upgrade: websocket', 'Connection: Upgrade', "Sec-WebSocket-Accept: ".concat(digest)];
      var ws = new this.options.WebSocket(null);

      if (protocols.size) {
        //
        // Optionally call external protocol selection handler.
        //
        var protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;

        if (protocol) {
          headers.push("Sec-WebSocket-Protocol: ".concat(protocol));
          ws._protocol = protocol;
        }
      }
      /*
      if (extensions[PerMessageDeflate.extensionName]) {
        const params = extensions[PerMessageDeflate.extensionName].params;
        const value = extension.format({
          [PerMessageDeflate.extensionName]: [params]
        });
        headers.push(`Sec-WebSocket-Extensions: ${value}`);
        ws._extensions = extensions;
      }
      */
      //
      // Allow external modification/inspection of handshake headers.
      //


      this.emit('headers', headers, req);
      socket.write(headers.concat('\r\n').join('\r\n'));
      socket.removeListener('error', socketOnError);
      ws.setSocket(socket, head, {
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation
      });

      if (this.clients) {
        this.clients.add(ws);
        ws.on('close', function () {
          _this4.clients["delete"](ws);

          if (_this4._shouldEmitClose && !_this4.clients.size) {
            process.nextTick(emitClose, _this4);
          }
        });
      }

      cb(ws, req);
    }
  }]);

  return WebSocketServer;
}(EventEmitter);

module.exports = WebSocketServer;
/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */

function addListeners(server, map) {
  for (var _i = 0, _Object$keys = Object.keys(map); _i < _Object$keys.length; _i++) {
    var event = _Object$keys[_i];
    server.on(event, map[event]);
  }

  return function removeListeners() {
    for (var _i2 = 0, _Object$keys2 = Object.keys(map); _i2 < _Object$keys2.length; _i2++) {
      var _event = _Object$keys2[_i2];
      server.removeListener(_event, map[_event]);
    }
  };
}
/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */


function emitClose(server) {
  server._state = CLOSED;
  server.emit('close');
}
/**
 * Handle socket errors.
 *
 * @private
 */


function socketOnError() {
  this.destroy();
}
/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */


function abortHandshake(socket, code, message, headers) {
  //
  // The socket is writable unless the user destroyed or ended it before calling
  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
  // error. Handling this does not make much sense as the worst that can happen
  // is that some of the data written by the user might be discarded due to the
  // call to `socket.end()` below, which triggers an `'error'` event that in
  // turn causes the socket to be destroyed.
  //
  message = message || http.STATUS_CODES[code];
  headers = _objectSpread({
    Connection: 'close',
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(message)
  }, headers);
  socket.once('finish', socket.destroy);
  socket.end("HTTP/1.1 ".concat(code, " ").concat(http.STATUS_CODES[code], "\r\n") + Object.keys(headers).map(function (h) {
    return "".concat(h, ": ").concat(headers[h]);
  }).join('\r\n') + '\r\n\r\n' + message);
}
/**
 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
 * one listener for it, otherwise call `abortHandshake()`.
 *
 * @param {WebSocketServer} server The WebSocket server
 * @param {http.IncomingMessage} req The request object
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} message The HTTP response body
 * @private
 */


function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
  if (server.listenerCount('wsClientError')) {
    var err = new Error(message);
    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
    server.emit('wsClientError', err, socket, req);
  } else {
    abortHandshake(socket, code, message);
  }
}