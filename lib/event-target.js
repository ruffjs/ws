'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require('./constants'),
    kForOnEventAttribute = _require.kForOnEventAttribute,
    kListener = _require.kListener;

var kCode = 'kCode';
var kData = 'kData';
var kError = 'kError';
var kMessage = 'kMessage';
var kReason = 'kReason';
var kTarget = 'kTarget';
var kType = 'kType';
var kWasClean = 'kWasClean';
/**
 * Class representing an event.
 */

var Event = /*#__PURE__*/function () {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  function Event(type) {
    _classCallCheck(this, Event);

    this[kTarget] = null;
    this[kType] = type;
  }
  /**
   * @type {*}
   */


  _createClass(Event, [{
    key: "target",
    get: function get() {
      return this[kTarget];
    }
    /**
     * @type {String}
     */

  }, {
    key: "type",
    get: function get() {
      return this[kType];
    }
  }]);

  return Event;
}();

Object.defineProperty(Event.prototype, 'target', {
  enumerable: true
});
Object.defineProperty(Event.prototype, 'type', {
  enumerable: true
});
/**
 * Class representing a close event.
 *
 * @extends Event
 */

var CloseEvent = /*#__PURE__*/function (_Event) {
  _inherits(CloseEvent, _Event);

  var _super = _createSuper(CloseEvent);

  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  function CloseEvent(type) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CloseEvent);

    _this = _super.call(this, type);
    _this[kCode] = options.code === undefined ? 0 : options.code;
    _this[kReason] = options.reason === undefined ? '' : options.reason;
    _this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    return _this;
  }
  /**
   * @type {Number}
   */


  _createClass(CloseEvent, [{
    key: "code",
    get: function get() {
      return this[kCode];
    }
    /**
     * @type {String}
     */

  }, {
    key: "reason",
    get: function get() {
      return this[kReason];
    }
    /**
     * @type {Boolean}
     */

  }, {
    key: "wasClean",
    get: function get() {
      return this[kWasClean];
    }
  }]);

  return CloseEvent;
}(Event);

Object.defineProperty(CloseEvent.prototype, 'code', {
  enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'reason', {
  enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'wasClean', {
  enumerable: true
});
/**
 * Class representing an error event.
 *
 * @extends Event
 */

var ErrorEvent = /*#__PURE__*/function (_Event2) {
  _inherits(ErrorEvent, _Event2);

  var _super2 = _createSuper(ErrorEvent);

  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  function ErrorEvent(type) {
    var _this2;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ErrorEvent);

    _this2 = _super2.call(this, type);
    _this2[kError] = options.error === undefined ? null : options.error;
    _this2[kMessage] = options.message === undefined ? '' : options.message;
    return _this2;
  }
  /**
   * @type {*}
   */


  _createClass(ErrorEvent, [{
    key: "error",
    get: function get() {
      return this[kError];
    }
    /**
     * @type {String}
     */

  }, {
    key: "message",
    get: function get() {
      return this[kMessage];
    }
  }]);

  return ErrorEvent;
}(Event);

Object.defineProperty(ErrorEvent.prototype, 'error', {
  enumerable: true
});
Object.defineProperty(ErrorEvent.prototype, 'message', {
  enumerable: true
});
/**
 * Class representing a message event.
 *
 * @extends Event
 */

var MessageEvent = /*#__PURE__*/function (_Event3) {
  _inherits(MessageEvent, _Event3);

  var _super3 = _createSuper(MessageEvent);

  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  function MessageEvent(type) {
    var _this3;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MessageEvent);

    _this3 = _super3.call(this, type);
    _this3[kData] = options.data === undefined ? null : options.data;
    return _this3;
  }
  /**
   * @type {*}
   */


  _createClass(MessageEvent, [{
    key: "data",
    get: function get() {
      return this[kData];
    }
  }]);

  return MessageEvent;
}(Event);

Object.defineProperty(MessageEvent.prototype, 'data', {
  enumerable: true
});
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */

var EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener: function addEventListener(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var wrapper;

    if (type === 'message') {
      wrapper = function onMessage(data, isBinary) {
        var event = new MessageEvent('message', {
          data: isBinary ? data : data.toString()
        });
        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'close') {
      wrapper = function onClose(code, message) {
        var event = new CloseEvent('close', {
          code: code,
          reason: message.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'error') {
      wrapper = function onError(error) {
        var event = new ErrorEvent('error', {
          error: error,
          message: error.message
        });
        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'open') {
      wrapper = function onOpen() {
        var event = new Event('open');
        event[kTarget] = this;
        listener.call(this, event);
      };
    } else {
      return;
    }

    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
    wrapper[kListener] = listener;

    if (options.once) {
      this.once(type, wrapper);
    } else {
      this.on(type, wrapper);
    }
  },

  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {Function} handler The listener to remove
   * @public
   */
  removeEventListener: function removeEventListener(type, handler) {
    var _iterator = _createForOfIteratorHelper(this.listeners(type)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var listener = _step.value;

        if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
          this.removeListener(type, listener);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
module.exports = {
  CloseEvent: CloseEvent,
  ErrorEvent: ErrorEvent,
  Event: Event,
  EventTarget: EventTarget,
  MessageEvent: MessageEvent
};