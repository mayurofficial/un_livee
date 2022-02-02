(() => {
var exports = {};
exports.id = 335;
exports.ids = [335,792,515,551,690];
exports.modules = {

/***/ 1484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactinfo": () => (/* binding */ contactinfo)
/* harmony export */ });
const contactinfo = [{
  id: 1,
  title: "Email Your questions",
  description: "If you have any Questions regarding the information we provided in ARIS please contact the team and we will try to give you an answer as soon as possible.",
  link: "Email Questions",
  image: '/assets/images/contact/mail.svg'
}, {
  id: 2,
  title: "Email Your Feedback",
  description: "If you have any Comments or suggestions regarding ARIS please email us.",
  link: "Email Feedback",
  image: '/assets/images/contact/feedback.svg'
}, {
  id: 3,
  title: "Contact NPTDS",
  description: "Contact IAEA's Nuclear Power Technology Development Section (NPTDS)",
  link: "Contact",
  image: '/assets/images/contact/contact.svg'
}];

/***/ }),

/***/ 2862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/contact.module.css
var contact_module = __webpack_require__(4015);
var contact_module_default = /*#__PURE__*/__webpack_require__.n(contact_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/ContactComponent.js






function ContactComponent(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (contact_module_default()).contact_container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (contact_module_default()).contact_logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: props.image,
        width: "40",
        height: "40",
        alt: "logo"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (contact_module_default()).contact_detail_wrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (contact_module_default()).contact_subHeading,
        children: props.title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (contact_module_default()).contact_description,
        children: props.description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: (contact_module_default()).contact_link,
        href: "mailto:ne-nptds@iaea.org?subject=ARIS_Question",
        children: [props.link, /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/assets/images/contact/arrow.svg",
          width: "30",
          height: "12",
          alt: "arrow"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Header_ContactComponent = (ContactComponent);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/pages/contact/contactinfo.js
var contactinfo = __webpack_require__(1484);
;// CONCATENATED MODULE: ./src/pages/contact/index.js








function Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: (contact_module_default()).contact_main_heading,
      children: "Contact Us"
    }), contactinfo.contactinfo.map(data => /*#__PURE__*/jsx_runtime_.jsx(Header_ContactComponent, {
      title: data.title,
      image: data.image,
      description: data.description,
      link: data.link
    }, data.id)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("address", {
      className: (contact_module_default()).contact_address,
      children: ["International Atomic Energy Agency ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Vienna International Centre ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "PO Box 100 1400 Vienna, Austria ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Tel: (+43-1) 2600-0 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Fax: (+43-1) 2600-7"]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      className: (contact_module_default()).contact_home_link,
      href: "https://www.iaea.org",
      children: "www.iaea.org"
    })]
  });
}

/* harmony default export */ const contact = (Contact);

/***/ }),

/***/ 4015:
/***/ ((module) => {

// Exports
module.exports = {
	"contact_main_heading": "contact_contact_main_heading__z9yh7",
	"contact_container": "contact_contact_container__rn__v",
	"contact_logo": "contact_contact_logo__oTM2K",
	"contact_detail_wrap": "contact_contact_detail_wrap__qgsjp",
	"contact_subHeading": "contact_contact_subHeading__agu47",
	"contact_description": "contact_contact_description__18u0m",
	"contact_link": "contact_contact_link__EXTvG",
	"contact_address": "contact_contact_address__q0UVy",
	"contact_home_link": "contact_contact_home_link__miGdd"
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [639,675,676,664], () => (__webpack_exec__(2862)));
module.exports = __webpack_exports__;

})();