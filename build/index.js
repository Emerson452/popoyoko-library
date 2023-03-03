'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".test-component {\n  background-color: var(--background);\n  color: var(--font-color);\n  border: 1px solid var(--harvey-black);\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n\n.test-component .heading {\n  font-size: var(--heading-font-size);\n}";
styleInject(css_248z$1);

var TestComponent = function (_a) {
    var heading = _a.heading, content = _a.content;
    return (React__default["default"].createElement("div", { "data-testid": "test-component", className: "test-component" },
        React__default["default"].createElement("h1", { "data-testid": "test-component__heading", className: "heading" }, heading),
        React__default["default"].createElement("div", { "data-testid": "test-component__content" }, content)));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z = ".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  .storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  .storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  .storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  .storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  .storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (React__default["default"].createElement("button", __assign({ type: "button", className: ["storybook-button", "storybook-button--".concat(size), mode].join(" "), style: { backgroundColor: backgroundColor } }, props), label));
};

exports.Button = Button;
exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map