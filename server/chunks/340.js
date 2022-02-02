exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 3340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5003);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _navigationLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5563);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);








function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
        children: _navigationLinks__WEBPACK_IMPORTED_MODULE_2__/* .navigationLinks.map */ .t.map((item, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: item.link,
              children: item.category
            })
          }, index);
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        children: "Copyright 2021 International Atomic Energy Agency (IAEA), All rights reserved."
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 5563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ navigationLinks)
/* harmony export */ });
const navigationLinks = [{
  category: "Home",
  link: "/"
}, {
  category: "Technical Data",
  link: "/technical-data"
}, {
  category: "Deployment",
  link: "/deployment"
}, {
  category: "Characteristics",
  link: "/characteristics"
}, {
  category: "Publications",
  link: "/publications"
}, {
  category: "Glossary",
  link: "/glossary"
}, {
  category: "About",
  link: "/about"
}];

/***/ }),

/***/ 5003:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__PoHod"
};


/***/ })

};
;