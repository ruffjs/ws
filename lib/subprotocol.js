'use strict';

require("../core-js/modules/es.array.iterator.js");

require("../core-js/modules/es.object.to-string.js");

require("../core-js/modules/es.set.js");

require("../core-js/modules/es.string.iterator.js");

require("../core-js/modules/web.dom-collections.iterator.js");

require("../core-js/modules/es.array.slice.js");

var _require = require('./validation'),
    tokenChars = _require.tokenChars;
/**
 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
 *
 * @param {String} header The field value of the header
 * @return {Set} The subprotocol names
 * @public
 */


function parse(header) {
  var protocols = new Set();
  var start = -1;
  var end = -1;
  var i = 0;

  for (i; i < header.length; i++) {
    var code = header.charCodeAt(i);

    if (end === -1 && tokenChars[code] === 1) {
      if (start === -1) start = i;
    } else if (i !== 0 && (code === 0x20
    /* ' ' */
    || code === 0x09)
    /* '\t' */
    ) {
      if (end === -1 && start !== -1) end = i;
    } else if (code === 0x2c
    /* ',' */
    ) {
      if (start === -1) {
        throw new SyntaxError("Unexpected character at index ".concat(i));
      }

      if (end === -1) end = i;

      var _protocol = header.slice(start, end);

      if (protocols.has(_protocol)) {
        throw new SyntaxError("The \"".concat(_protocol, "\" subprotocol is duplicated"));
      }

      protocols.add(_protocol);
      start = end = -1;
    } else {
      throw new SyntaxError("Unexpected character at index ".concat(i));
    }
  }

  if (start === -1 || end !== -1) {
    throw new SyntaxError('Unexpected end of input');
  }

  var protocol = header.slice(start, i);

  if (protocols.has(protocol)) {
    throw new SyntaxError("The \"".concat(protocol, "\" subprotocol is duplicated"));
  }

  protocols.add(protocol);
  return protocols;
}

module.exports = {
  parse: parse
};
