exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 5224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alphabet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_modules_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8636);
/* harmony import */ var react_scroll_modules_components_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules_components_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3179);
/* harmony import */ var _styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Alphabet(props) {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_scroll_modules_components_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
      to: props.alphabet,
      smooth: true,
      duration: 1500,
      offset: -40,
      onClick: toggleFunction,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: toggle === true ? (_styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : (_styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inActive),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_styles_glossary_scss_alphabet_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button_text),
          children: props.alphabet
        })
      })
    })
  });
}

/***/ }),

/***/ 3179:
/***/ ((module) => {

// Exports
module.exports = {
	"button_text": "alphabet_button_text__FF_KU",
	"inActive": "alphabet_inActive__QsX6u",
	"active": "alphabet_active__3PKK6"
};


/***/ })

};
;