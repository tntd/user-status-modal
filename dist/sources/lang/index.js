"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = exports.default = void 0;
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _zh_CN = _interopRequireDefault(require("./zh_CN"));
var _en_US = _interopRequireDefault(require("./en_US"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var cookies = new _universalCookie.default();
var userStatusModal = function userStatusModal(key, language) {
  var _ref;
  console.log("language", language);
  var text = (_ref = {
    cn: _zh_CN.default,
    en: _en_US.default
  }[language || getLanguage()] || _zh_CN.default) == null ? void 0 : _ref[key];
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }
  if (params != null && params.length) {
    return params.reduce(function (acc, cur) {
      return acc.replace(/%s/, cur);
    }, text);
  }
  return text;
};
var getLanguage = function getLanguage() {
  return cookies.get('lang', {
    path: '/'
  }) || 'cn';
};
exports.getLanguage = getLanguage;
var _default = {
  userStatusModal: userStatusModal
};
exports.default = _default;