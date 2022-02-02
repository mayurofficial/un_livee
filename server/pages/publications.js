(() => {
var exports = {};
exports.id = 548;
exports.ids = [548,515,551,690];
exports.modules = {

/***/ 8785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ publications)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/publication.module.css
var publication_module = __webpack_require__(2743);
var publication_module_default = /*#__PURE__*/__webpack_require__.n(publication_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/publication/PublicationComponent.js







function PublicationComponent(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (publication_module_default()).publication_main_container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (publication_module_default()).publication_image_container,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: props.image,
        alt: props.title,
        height: "184px",
        width: "130px"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (publication_module_default()).publication_content_container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (publication_module_default()).publication_heading,
        children: props.title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (publication_module_default()).publication_content,
        children: props.description
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: props.pdfLink,
        passHref: false,
        prefetch: false,
        children: "view \u276F"
      })]
    })]
  });
}

/* harmony default export */ const publication_PublicationComponent = (PublicationComponent);
// EXTERNAL MODULE: ./src/pages/publications/publicationinfo.js
var publicationinfo = __webpack_require__(6755);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: ./src/pages/publications/index.js








function Publications() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: (publication_module_default()).publication_main_heading,
      children: "Publications"
    }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
      sx: {
        paddingLeft: "0px",
        maxWidth: "100%"
      },
      container: true,
      rowSpacing: 1,
      columnSpacing: {
        xs: 1,
        sm: 2,
        md: 3
      },
      children: publicationinfo.publicationinfo.map(data => /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        xl: 6,
        lg: 6,
        children: /*#__PURE__*/jsx_runtime_.jsx(publication_PublicationComponent, {
          title: data.title,
          description: data.description,
          image: data.image,
          pdfLink: data.pdfLink
        })
      }, data.id))
    })]
  });
}

/* harmony default export */ const publications = (Publications);

/***/ }),

/***/ 2743:
/***/ ((module) => {

// Exports
module.exports = {
	"publication_main_heading": "publication_publication_main_heading__a93sn",
	"publication_main_container": "publication_publication_main_container__jt3HZ",
	"publication_image_container": "publication_publication_image_container__BnxxM",
	"publication_content_container": "publication_publication_content_container__cqJBA",
	"publication_heading": "publication_publication_heading__Uf4BH",
	"publication_content": "publication_publication_content__1aVOe"
};


/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

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
var __webpack_exports__ = __webpack_require__.X(0, [639,675,676,664,755], () => (__webpack_exec__(8785)));
module.exports = __webpack_exports__;

})();