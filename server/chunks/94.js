"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 6094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_MobileWrapper)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/homepage.module.scss
var homepage_module = __webpack_require__(5282);
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/images/mobileBg.png
/* harmony default export */ const mobileBg = ({"src":"/_next/static/media/mobileBg.69763667.png","height":912,"width":1125,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGBAMAAAAMK8LIAAAAIVBMVEUJaaYHaaYGaaYGaKYGaKUFaKYFaKUEaKUDaKUDZ6UCZ6WprfYZAAAAJklEQVR42mNITy8vZ0ivaE9jWNUmqMowXUC9i6FNvFiIISW9owwAj7EJMtT8Zk8AAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/mobileCard/index.js







const MobileCard = ({
  heading,
  metaData,
  logo,
  alt
}) => {
  const link = heading.toLowerCase();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: link,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).mobile_card_wrapper,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homepage_module_default()).logo,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: logo,
          alt: heading + `.svg`,
          layout: "fixed"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: metaData
      })]
    })
  });
};

/* harmony default export */ const mobileCard = (MobileCard);
;// CONCATENATED MODULE: ./public/assets/images/MobileFullLogo.svg
/* harmony default export */ const MobileFullLogo = ({"src":"/_next/static/media/MobileFullLogo.7521a293.svg","height":58,"width":259});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/about.svg
/* harmony default export */ const about = ({"src":"/_next/static/media/about.85e031e1.svg","height":20,"width":20});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/characterstics.png
/* harmony default export */ const characterstics = ({"src":"/_next/static/media/characterstics.e43cf9b7.png","height":17,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvElEQVR42g3GywoBYRjG8S+RhUtxM27IwtZC2SkrSzmvCIWQxYyGSfIxYpxmpPlkjCnm8Hif+vX8mbw1XAKJG+AXC4pmQtpcfWVngLrEWrNdmKlI6C90DJZEPaE20/x0VcbefFVZoa16yWw31I1nkMp20BitQ0W3fsUhx9cLyqw55cg1ZNQnHOPVGb35AerhDu1qQdhui92sN3+8PufLwz6awgnuwnGoNSL2N5FjAGIkTqJEJnlGo08AiPwBe46ef8Z6FLsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/deployment.svg
/* harmony default export */ const deployment = ({"src":"/_next/static/media/deployment.23aafe5b.svg","height":20,"width":18});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/glossary.png
/* harmony default export */ const glossary = ({"src":"/_next/static/media/glossary.7a9af11d.png","height":20,"width":17,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzUlEQVR42i3JMWoCQRiG4W9mfjeKLJhgSJA0CYRAmpwgF8h1UokXEGy9gFew8QSiYGejyMIWoiKDrOiqq8zM74j7dC8vNmlWXyYH9pzHnsmjI7fHy2es97COHbyzsdC7E4QQkAIw8Nq9MUbRGuN5gv50hRsqBaQKpPD79YLnShkMoCTC+1RKcqAEft5fkWNU8zmcLMqJASKdOpJSAZC3H5C0NIs11WqPOGWuEOuUwyJZxywtcyaAVoj/j7/Gd7U5iDbtt0qxezHuKXig1RV4w2AxO915DwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/publication.png
/* harmony default export */ const publication = ({"src":"/_next/static/media/publication.04569c64.png","height":20,"width":15,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAnElEQVR42i2NSw6CUBRD345ciNtyJ87URGcOXIQx/sUfCAJ+AiIEVN493hgHJ03atDUi0rRWhqojoKOaKoUBPkAKUFvbVbMFOCYrKsYLDzdMAHIN+krbPDWYbgJmm8Ae/BvaKoC+eeQly33E1rvKZOVT1zYCeibLS5nvQnHci/XOd0QkBgamer1xjjFrbekMQPL7APw/JyBUcw40vgcjs0vYX1TjAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/images/mobileSubHero/technical.svg
/* harmony default export */ const technical = ({"src":"/_next/static/media/technical.73e5301b.svg","height":22,"width":17});
;// CONCATENATED MODULE: ./src/pages/homepage/MobileWrapper.js
















const MobileWrapper = () => {
  const cardData = [{
    logo: technical,
    heading: 'Technical Data',
    metaData: 'DSRs with technical specifications'
  }, {
    logo: deployment,
    heading: 'Deployment',
    metaData: 'DSRs with Economic data'
  }, {
    logo: characterstics,
    heading: 'Characterstics',
    metaData: 'DSRs with characteristics data'
  }, {
    logo: publication,
    heading: 'Publications',
    metaData: 'Aris related publications'
  }, {
    logo: glossary,
    heading: 'Glossary',
    metaData: 'Aris key glossary terms'
  }, {
    logo: about,
    heading: 'About',
    metaData: 'About ARIS and design description'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).mobile_wrapper,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: "relative",
        width: "100%",
        height: "304px",
        maxHeight: "304px",
        maxWidth: "100%"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: mobileBg,
        alt: "background",
        layout: "fill"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).mobile_herosection,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: MobileFullLogo,
        alt: "mobileLogo"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (homepage_module_default()).hero_card_wrapper,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "About ARIS"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "The Advanced Reactor Information System (ARIS) is a database designed and maintained by the IAEAs Nuclear Power Technology Development Section (NPTDS) since 2009."
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "https://web.aris.qa.foxlabs.in/TechnicalData",
          children: "Read More"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).sub_hero_section,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Explore ARIS"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homepage_module_default()).mobile_card_container,
        children: cardData.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(mobileCard, {
            heading: item.heading,
            metaData: item.metaData,
            logo: item.logo
          }, index);
        })
      })]
    })]
  });
};

/* harmony default export */ const homepage_MobileWrapper = (MobileWrapper);

/***/ })

};
;