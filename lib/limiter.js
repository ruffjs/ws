'use strict';

require("core-js/modules/es.object.define-property.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var kDone = 'kDone';
var kRun = 'kRun';
/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */

var Limiter = /*#__PURE__*/function () {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  function Limiter(concurrency) {
    var _this = this;

    _classCallCheck(this, Limiter);

    this[kDone] = function () {
      _this.pending--;

      _this[kRun]();
    };

    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }
  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */


  _createClass(Limiter, [{
    key: "add",
    value: function add(job) {
      this.jobs.push(job);
      this[kRun]();
    }
    /**
     * Removes a job from the queue and runs it if possible.
     *
     * @private
     */

  }, {
    key: kRun,
    value: function value() {
      if (this.pending === this.concurrency) return;

      if (this.jobs.length) {
        var job = this.jobs.shift();
        this.pending++;
        job(this[kDone]);
      }
    }
  }]);

  return Limiter;
}();

module.exports = Limiter;