"use strict";
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 8536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Actions = {
  LOGIN: "SET_USER_STATE",
  SET_TOKEN: "SET_AUTH_TOKEN",
  LOGOUT: "SET_USER_LOGOUT"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);

/***/ }),

/***/ 2401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ redux_store)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./src/redux/actions/appActions.js
var appActions = __webpack_require__(8536);
;// CONCATENATED MODULE: ./src/redux/reducers/appReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let initialState = {
  user: {},
  authToken: null,
  isLogged: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions/* default.LOGIN */.Z.LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.data
      });

    case appActions/* default.LOGOUT */.Z.LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogged: false,
        authToken: null
      });

    case appActions/* default.SET_TOKEN */.Z.SET_TOKEN:
      return _objectSpread(_objectSpread({}, state), {}, {
        authToken: action.data,
        isLogged: true
      });

    default:
      return state;
  }
};

/* harmony default export */ const appReducer = (AppReducer);
;// CONCATENATED MODULE: ./src/redux/store.js


const AllReducer = {
  app: appReducer
};
const rootReducer = (0,external_redux_.combineReducers)(AllReducer);
const store = (0,external_redux_.createStore)(rootReducer);
/* harmony default export */ const redux_store = (store);

/***/ }),

/***/ 2332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ setSession),
/* harmony export */   "G": () => (/* binding */ getSession)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const setSession = (key, value) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(key, value);
};
const getSession = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(key);
};
});

/***/ })

};
;