"use strict";
(() => {
var exports = {};
exports.id = 344;
exports.ids = [344,515,551];
exports.modules = {

/***/ 7102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _session_manager_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2332);
/* harmony import */ var _redux_dispatchers_appDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1656);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session_manager_cookie__WEBPACK_IMPORTED_MODULE_2__]);
_session_manager_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function Login() {
  const loginAction = () => {
    (0,_session_manager_cookie__WEBPACK_IMPORTED_MODULE_2__/* .setSession */ .K)("user-token", "4739479nm,bfdshf9832rgh32erbdslfhp93");
    _redux_dispatchers_appDispatcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"].setUserLoggedIn */ .Z.setUserLoggedIn({
      token: "4739479nm,bfdshf9832rgh32erbdslfhp93"
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
      children: "Login"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
      children: process.env.NEXT_PUBLIC_ENV
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "contained",
      onClick: loginAction,
      children: "Test Button"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
});

/***/ }),

/***/ 1656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2401);
/* harmony import */ var _actions_appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8536);
// App wide dispatcher


const AppDispatcher = {
  setUserLoggedIn: data => {
    _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dispatch */ .Z.dispatch({
      type: _actions_appActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SET_TOKEN */ .Z.SET_TOKEN,
      data: data.tokens
    });
    _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dispatch */ .Z.dispatch({
      type: _actions_appActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOGIN */ .Z.LOGIN,
      data: data.user
    });
  },
  setUserLoggedOut: () => {
    _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dispatch */ .Z.dispatch({
      type: _actions_appActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOGOUT */ .Z.LOGOUT
    });
  },
  updateUserTokens: data => {
    _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dispatch */ .Z.dispatch({
      type: _actions_appActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SET_TOKEN */ .Z.SET_TOKEN,
      data
    });
  },
  updateUserInfo: data => {
    _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dispatch */ .Z.dispatch({
      type: _actions_appActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOGIN */ .Z.LOGIN,
      data
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppDispatcher);

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [942], () => (__webpack_exec__(7102)));
module.exports = __webpack_exports__;

})();