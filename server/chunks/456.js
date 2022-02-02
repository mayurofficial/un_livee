"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 9456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_SubHeroSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: ./src/styles/homepage.module.scss
var homepage_module = __webpack_require__(5282);
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/assets/images/hero-section-bg.webp
var hero_section_bg = __webpack_require__(7466);
// EXTERNAL MODULE: ./src/components/button/index.js
var components_button = __webpack_require__(3706);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/tabCard/index.js








const TabCard = ({
  heading,
  para1,
  para2,
  link
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (homepage_module_default()).tab_card_wrapper,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (homepage_module_default()).card_left_container,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "385px",
          maxHeight: "100%",
          maxWidth: "100%"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: hero_section_bg/* default */.Z,
          alt: "card-img",
          layout: "fill"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homepage_module_default()).card_right_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: heading
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: para1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: para2
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: link,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
          name: "Read More",
          type: "secondary"
        })
      })]
    })]
  });
};

/* harmony default export */ const tabCard = (TabCard);
;// CONCATENATED MODULE: ./src/components/tab/index.js
const _excluded = ["children", "value", "index"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      className: (homepage_module_default()).tab_pannel,
      children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        component: "div",
        children: children
      })
    })
  }));
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function BasicTabs() {
  const [value, setValue] = external_react_.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const advancedReactorsData = [{
    heading: 'Water Cooled Technology',
    para1: 'Water cooled reactors have played a significant role in the commercial nuclear industry since its beginnings and currently account for more than 95 per cent of all operating civilian power reactors in the world. In addition, the majority of nuclear reactors under development and construction are water-cooled.',
    para2: 'Water Cooled Reactors (WCRs) have been the cornerstone of the nuclear industry in the 20th century. Of the currently operating 442 reactors, 96 per cent are water-cooled.',
    link: 'https://www.iaea.org/topics/water-cooled-reactors'
  }, {
    heading: 'Gas Cooled Technology',
    para1: 'Commercial gas cooled reactors are currently in use only in the United Kingdom. International interest in developing high temperature gas cooled reactors is increasing because they can provide efficient and cost effective electricity and produce high-temperature process heat usable for various industrial applications.',
    para2: 'Gas cooled reactors currently represent about three per cent of the total number of reactors in commercial operation worldwide. These are all advanced carbon-dioxide gas cooled reactors in the United Kingdom that will be phased out around the mid-2020s.',
    link: 'https://www.iaea.org/topics/gas-cooled-reactors'
  }, {
    heading: 'Liquid Metal Cooled Technology',
    para1: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
    para2: 'Gas cooled reactors currently represent about three per cent of the total number of reactors in commercial operation worldwide. These are all advanced carbon-dioxide gas cooled reactors in the United Kingdom that will be phased out around the mid-2020s.',
    link: 'https://www.iaea.org/topics/gas-cooled-reactors'
  }, {
    heading: 'Molten Salt Cooled Technology',
    para1: 'Initially developed in the 1950s, molten salt reactors have benefits in higher efficiencies and lower waste generation. Some designs do not require solid fuel, which eliminates the need for manufacturing and disposing of it. In recent years, growing interest in this technology has led to renewed development activities.',
    para2: 'Molten salt reactors (MSRs) are seen in some countries as a promising advanced reactor technology because of the various benefits associated with them. They operate at higher temperatures, which lead to increased efficiencies in generating electricity.',
    link: 'https://www.iaea.org/topics/molten-salt-reactors'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
    sx: {
      width: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      sx: {
        borderColor: 'divider'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Tabs_default()), {
        value: value,
        onChange: handleChange,
        "aria-label": "basic tabs example",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Tab_default()), _objectSpread({
          className: (homepage_module_default()).inner_tab_pannel,
          label: "Water Cooled Technology"
        }, a11yProps(0))), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), _objectSpread({
          className: (homepage_module_default()).inner_tab_pannel,
          label: "Gas Cooled Technology"
        }, a11yProps(1))), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), _objectSpread({
          className: (homepage_module_default()).inner_tab_pannel,
          label: "Liquid Metal Cooled Technology"
        }, a11yProps(2))), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), _objectSpread({
          className: (homepage_module_default()).inner_tab_pannel,
          label: "Molten Salt Cooled Technology"
        }, a11yProps(3)))]
      })
    }), advancedReactorsData.map((card, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
        value: value,
        index: index,
        children: /*#__PURE__*/jsx_runtime_.jsx(tabCard, {
          heading: card.heading,
          para1: card.para1,
          para2: card.para2,
          link: card.link
        })
      }, card.heading);
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/homepage/SubHeroSection.js
const SubHeroSection_excluded = ["children", "value", "index"];

function SubHeroSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SubHeroSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SubHeroSection_ownKeys(Object(source), true).forEach(function (key) { SubHeroSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SubHeroSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SubHeroSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SubHeroSection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SubHeroSection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SubHeroSection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function SubHeroSection_TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = SubHeroSection_objectWithoutProperties(props, SubHeroSection_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", SubHeroSection_objectSpread(SubHeroSection_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      sx: {
        py: 3
      },
      children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        component: "div",
        children: children
      })
    })
  }));
}

function SubHeroSection_a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const SubHeroSection = () => {
  const [value, setValue] = external_react_default().useState(0);
  const [cssStyle, setCss] = external_react_default().useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCss = () => {
    console.log(1);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
    sx: {
      width: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      sx: {
        borderColor: 'divider'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Tabs_default()), {
        value: value,
        onChange: handleChange,
        "aria-label": "basic tabs example",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Tab_default()), SubHeroSection_objectSpread({
          className: cssStyle ? (homepage_module_default()).defaultCss : (homepage_module_default()).parent_tab,
          label: "Advanced Reactors"
        }, SubHeroSection_a11yProps(0))), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), SubHeroSection_objectSpread(SubHeroSection_objectSpread({
          className: (homepage_module_default()).parent_tab,
          label: "Small Modular Reactors"
        }, SubHeroSection_a11yProps(1)), {}, {
          onClick: () => setCss(false)
        }))]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SubHeroSection_TabPanel, {
      value: value,
      index: 0,
      children: /*#__PURE__*/jsx_runtime_.jsx(BasicTabs, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(SubHeroSection_TabPanel, {
      value: value,
      index: 1,
      children: /*#__PURE__*/jsx_runtime_.jsx(tabCard, {
        heading: "Small Modular Reactors",
        para1: "Small and medium-sized or modular reactors are an option to fulfil the need for flexible power generation for a wider range of users and applications. Small modular reactors, deployable either as single or multi-module plant, offer the possibility to combine nuclear with alternative energy sources, including renewables.",
        para2: "There are about 50 SMR designs and concepts globally. Most of them are in various developmental stages and some are claimed as being near-term deployable. There are currently four SMRs in advanced stages of construction in Argentina, China and Russia, and several existing and newcomer nuclear energy countries are conducting SMR research and development.",
        link: "https://www.iaea.org/topics/small-modular-reactors"
      })
    })]
  });
};

/* harmony default export */ const homepage_SubHeroSection = (SubHeroSection);

/***/ })

};
;