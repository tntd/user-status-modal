"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _modal = _interopRequireDefault(require("tntd/es/modal"));
var _button = _interopRequireDefault(require("tntd/es/button"));
var _react = require("react");
var _lang = _interopRequireDefault(require("../sources/lang"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _props$modalCloseEven = props.modalCloseEvent,
    modalCloseEvent = _props$modalCloseEven === void 0 ? void 0 : _props$modalCloseEven,
    _props$modalShowEvent = props.modalShowEvent,
    modalShowEvent = _props$modalShowEvent === void 0 ? void 0 : _props$modalShowEvent,
    dispatch = props.dispatch,
    lang = props.lang,
    _props$childrenDom = props.childrenDom,
    childrenDom = _props$childrenDom === void 0 ? null : _props$childrenDom;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1]; // 弹窗
  var _useState3 = (0, _react.useState)(props.noOperateTime || 1800000),
    _useState4 = _slicedToArray(_useState3, 2),
    noOperateTime = _useState4[0],
    setNoOperateTime = _useState4[1]; // 默认30分钟

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      closeModal: function closeModal() {
        setVisible(false);
      }
    };
  });
  var timer = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    listener(); // 初始化设定
    document.body.addEventListener("click", listener);
    document.body.addEventListener("keydown", listener);
    document.body.addEventListener("mousemove", listener);
    document.body.addEventListener("mousewheel", listener);
    return function () {
      removeListener();
    };
  }, []);
  var removeListener = function removeListener() {
    document.body.removeEventListener("click", listener);
    document.body.removeEventListener("keydown", listener);
    document.body.removeEventListener("mousemove", listener);
    document.body.removeEventListener("mousewheel", listener);
    clearInterval(timer.current);
    timer.current = null;
  };
  var listener = function listener() {
    timer.current && clearInterval(timer.current);
    localStorage.curTime = new Date().valueOf();
    // 设置定时器
    timer.current = setInterval(function () {
      var nowTime = new Date().valueOf();
      var durTime = nowTime - parseInt(localStorage.curTime, 10);
      if (durTime >= noOperateTime) {
        if (modalShowEvent && typeof modalShowEvent === "function") {
          modalShowEvent();
        } else if (dispatch) {
          dispatch({
            type: "login/signOut"
          });
        }
        removeListener();
        setVisible(true);
      }
    }, 1000);
  };
  var goToLogin = function goToLogin() {
    setVisible(false);
    if (modalCloseEvent && typeof modalCloseEvent === "function") {
      modalCloseEvent();
    } else if (dispatch) {
      dispatch({
        type: "login/goLogin"
      });
    } else {
      window.location.href = "/user/login";
    }
  };
  return /*#__PURE__*/React.createElement(_modal.default, {
    className: "user-operate-modal",
    visible: visible,
    closable: false,
    footer: null,
    width: 450
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-pic u-no-operate"
  }), !!childrenDom && childrenDom, !childrenDom && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, _lang.default.userStatusModal("noOperateContent", lang)), /*#__PURE__*/React.createElement("p", null, _lang.default.userStatusModal("warnMsg", lang)), /*#__PURE__*/React.createElement("div", {
    className: "btn"
  }, /*#__PURE__*/React.createElement(_button.default, {
    type: "primary",
    onClick: goToLogin
  }, _lang.default.userStatusModal("submit", lang)))));
});
exports.default = _default;