'use strict';

require("../core-js/modules/es.object.create.js");

require("../core-js/modules/es.array.slice.js");

require("../core-js/modules/es.regexp.exec.js");

require("../core-js/modules/es.string.replace.js");

require("../core-js/modules/es.array.join.js");

require("../core-js/modules/es.array.map.js");

require("../core-js/modules/es.object.keys.js");

require("../core-js/modules/es.array.is-array.js");

require("../core-js/modules/es.array.concat.js");

var _require = require('./validation'),
    tokenChars = _require.tokenChars;
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */


function push(dest, name, elem) {
  if (dest[name] === undefined) dest[name] = [elem];else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */


function parse(header) {
  var offers = Object.create(null);
  var params = Object.create(null);
  var mustUnescape = false;
  var isEscaping = false;
  var inQuotes = false;
  var extensionName;
  var paramName;
  var start = -1;
  var code = -1;
  var end = -1;
  var i = 0;

  for (; i < header.length; i++) {
    code = header.charCodeAt(i);

    if (extensionName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (i !== 0 && (code === 0x20
      /* ' ' */
      || code === 0x09)
      /* '\t' */
      ) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b
      /* ';' */
      || code === 0x2c
      /* ',' */
      ) {
        if (start === -1) {
          throw new SyntaxError("Unexpected character at index ".concat(i));
        }

        if (end === -1) end = i;
        var name = header.slice(start, end);

        if (code === 0x2c) {
          push(offers, name, params);
          params = Object.create(null);
        } else {
          extensionName = name;
        }

        start = end = -1;
      } else {
        throw new SyntaxError("Unexpected character at index ".concat(i));
      }
    } else if (paramName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 || code === 0x09) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError("Unexpected character at index ".concat(i));
        }

        if (end === -1) end = i;
        push(params, header.slice(start, end), true);

        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        start = end = -1;
      } else if (code === 0x3d
      /* '=' */
      && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError("Unexpected character at index ".concat(i));
      }
    } else {
      //
      // The value of a quoted-string after unescaping must conform to the
      // token ABNF, so only token characters are valid.
      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
      //
      if (isEscaping) {
        if (tokenChars[code] !== 1) {
          throw new SyntaxError("Unexpected character at index ".concat(i));
        }

        if (start === -1) start = i;else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x22
        /* '"' */
        && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 0x5c
        /* '\' */
        ) {
          isEscaping = true;
        } else {
          throw new SyntaxError("Unexpected character at index ".concat(i));
        }
      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
        inQuotes = true;
      } else if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
        if (end === -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError("Unexpected character at index ".concat(i));
        }

        if (end === -1) end = i;
        var value = header.slice(start, end);

        if (mustUnescape) {
          value = value.replace(/\\/g, '');
          mustUnescape = false;
        }

        push(params, paramName, value);

        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        paramName = undefined;
        start = end = -1;
      } else {
        throw new SyntaxError("Unexpected character at index ".concat(i));
      }
    }
  }

  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
    throw new SyntaxError('Unexpected end of input');
  }

  if (end === -1) end = i;
  var token = header.slice(start, end);

  if (extensionName === undefined) {
    push(offers, token, params);
  } else {
    if (paramName === undefined) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ''));
    } else {
      push(params, paramName, token);
    }

    push(offers, extensionName, params);
  }

  return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */


function format(extensions) {
  return Object.keys(extensions).map(function (extension) {
    var configurations = extensions[extension];
    if (!Array.isArray(configurations)) configurations = [configurations];
    return configurations.map(function (params) {
      return [extension].concat(Object.keys(params).map(function (k) {
        var values = params[k];
        if (!Array.isArray(values)) values = [values];
        return values.map(function (v) {
          return v === true ? k : "".concat(k, "=").concat(v);
        }).join('; ');
      })).join('; ');
    }).join(', ');
  }).join(', ');
}

module.exports = {
  format: format,
  parse: parse
};
