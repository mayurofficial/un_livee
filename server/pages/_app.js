(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,515,551,690];
exports.modules = {

/***/ 7723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_HomeNavbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/homeheader.module.css
var homeheader_module = __webpack_require__(7946);
var homeheader_module_default = /*#__PURE__*/__webpack_require__.n(homeheader_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/HomeSubHeader.js






function HomeSubHeader() {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (homeheader_module_default()).home_site_navigation,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "https://www.iaea.org",
          target: "_blank",
          children: "IAEA.org"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "https://www.iaea.org/resources/nucleus-information-resources",
          children: "NUCLEUS"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          id: "contact_id",
          href: "/contact",
          children: "Contact Us"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "English"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Arabic"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Chinese"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "French"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Russian"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Spanish"
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const Header_HomeSubHeader = (HomeSubHeader);
// EXTERNAL MODULE: ./src/components/navigationLinks.js
var navigationLinks = __webpack_require__(5563);
;// CONCATENATED MODULE: ./src/components/Header/HomeNavbar.js









function HomeNavbar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_HomeSubHeader, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (homeheader_module_default()).home_main_header,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homeheader_module_default()).home_logo_wrapper,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homeheader_module_default()).home_header_logo,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                src: "/assets/images/header/DetailedLogo.svg",
                width: "260",
                height: "120",
                alt: "logo"
              })
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homeheader_module_default()).home_header_content,
        children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: (homeheader_module_default()).home_navigation_container,
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: navigationLinks/* navigationLinks.map */.t.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: data.link,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: index === 0 ? (homeheader_module_default()).home_section : undefined,
                  children: data.category
                })
              })
            }, index))
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const Header_HomeNavbar = (HomeNavbar);

/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Navbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/header.module.css
var header_module = __webpack_require__(5591);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/SubHeader.js






function SubHeader() {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (header_module_default()).site_navigation,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "https://www.iaea.org",
          children: "IAEA.org"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "https://www.iaea.org/resources/nucleus-information-resources",
          children: "NUCLEUS"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          id: "contact_id",
          href: "/contact",
          children: "Contact Us"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "English"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Arabic"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Chinese"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "French"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Russian"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            children: "Spanish"
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const Header_SubHeader = (SubHeader);
// EXTERNAL MODULE: ./src/components/navigationLinks.js
var navigationLinks = __webpack_require__(5563);
;// CONCATENATED MODULE: ./src/components/Header/Navbar.js









function Navbar() {
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (header_module_default()).main_header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).header_logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: "/assets/images/header/DetailedLogo.svg",
            width: "260",
            height: "120",
            alt: "logo"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (header_module_default()).header_search_content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header_SubHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: (header_module_default()).navigation_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: navigationLinks/* navigationLinks.map */.t.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: toggle.count === index ? (header_module_default()).activeLink : undefined,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: data.link,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => {
                  setToggle(index);
                },
                children: data.category
              })
            })
          }, index))
        })
      })]
    })]
  });
}

/* harmony default export */ const Header_Navbar = (/*#__PURE__*/external_react_default().memo(Navbar));

/***/ }),

/***/ 4010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PrivateLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8307);
/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9026);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _session_cookie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2332);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session_cookie__WEBPACK_IMPORTED_MODULE_20__]);
_session_cookie__WEBPACK_IMPORTED_MODULE_20__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const drawerWidth = 240;
const Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("main", {
  shouldForwardProp: prop => prop !== "open"
})(({
  theme,
  open
}) => _objectSpread({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`
}, open && {
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  marginLeft: 0
}));
const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5___default()), {
  shouldForwardProp: prop => prop !== "open"
})(({
  theme,
  open
}) => _objectSpread({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}, open && {
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  })
}));
const DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({
  theme
}) => _objectSpread(_objectSpread({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1)
}, theme.mixins.toolbar), {}, {
  justifyContent: "flex-end"
}));
function PrivateLayout({
  children
}) {
  const {
    replace
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
  const session = (0,_session_cookie__WEBPACK_IMPORTED_MODULE_20__/* .getSession */ .G)("user-token");
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!session) {
      replace("/auth/login", "/auth/login");
    }
  }, [session]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    sx: {
      display: "flex"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(AppBar, {
      position: "fixed",
      open: open,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          sx: _objectSpread({
            mr: 2
          }, open && {
            display: "none"
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
          variant: "h6",
          noWrap: true,
          component: "div",
          children: "Persistent drawer"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3___default()), {
      sx: {
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      },
      variant: "persistent",
      anchor: "left",
      open: open,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DrawerHeader, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
          onClick: handleDrawerClose,
          children: theme.direction === "ltr" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default()), {})
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: ["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default()), {
          button: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: index % 2 === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_18___default()), {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default()), {
            primary: text
          })]
        }, text))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: ["All mail", "Trash", "Spam"].map((text, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default()), {
          button: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: index % 2 === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_18___default()), {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default()), {
            primary: text
          })]
        }, text))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Main, {
      open: open,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DrawerHeader, {}), children]
    })]
  });
}
});

/***/ }),

/***/ 124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PublicLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _session_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2332);
/* harmony import */ var _components_Header_HomeNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7723);
/* harmony import */ var _components_Header_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9983);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3340);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session_cookie__WEBPACK_IMPORTED_MODULE_4__]);
_session_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function PublicLayout({
  children
}) {
  const {
    replace
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const session = (0,_session_cookie__WEBPACK_IMPORTED_MODULE_4__/* .getSession */ .G)("user-token");
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (session) {
      replace("/user/dashboard", "/user/dashboard");
    }
  }, [session]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [children.type.name === 'Home' || children.type.name === 'Contact' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Header_HomeNavbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Header_Navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_footer_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})]
  });
}
});

/***/ }),

/***/ 6927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_publicLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(124);
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4010);
/* harmony import */ var _themes_defaultTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5589);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2401);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_publicLayout__WEBPACK_IMPORTED_MODULE_4__, _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_publicLayout__WEBPACK_IMPORTED_MODULE_4__, _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const currentTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)(_themes_defaultTheme__WEBPACK_IMPORTED_MODULE_6__/* .defaultTheme */ .u);
  const path = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const isPublic = path.asPath.includes("/auth/");
  const isPrivate = path.asPath.includes("/user/");
  const Wrapper = isPublic ? _layouts_publicLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z : isPrivate ? _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _layouts_publicLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
      theme: currentTheme,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Wrapper, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
});

/***/ }),

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ defaultTheme)
/* harmony export */ });
// default app theme and colors
const defaultTheme = {
  palette: {
    primary: {
      main: "#0067A5"
    },
    secondary: {
      main: "#FD2B88"
    },
    error: {
      main: "#FF0040"
    },
    background: {
      default: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: 54,
      lineHeight: 74 / 34,
      fontWeight: 600
    },
    h2: {
      fontSize: 46,
      lineHeight: 68 / 30,
      fontWeight: 600
    },
    h3: {
      fontSize: 32,
      lineHeight: 48 / 26,
      fontWeight: 600
    },
    h4: {
      fontSize: 28,
      lineHeight: 40 / 24,
      fontWeight: 500
    },
    h5: {
      fontSize: 18,
      lineHeight: 24 / 20,
      fontWeight: 500
    },
    h6: {
      fontSize: 14,
      lineHeight: 24 / 18,
      fontWeight: 500
    },
    p1: {
      fontSize: 16,
      lineHeight: 24 / 15,
      fontWeight: 500
    },
    p2: {
      fontSize: 16,
      lineHeight: 22 / 14,
      fontWeight: 400
    },
    button: {
      fontSize: 14,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 700,
      textTransform: "unset"
    },
    c1: {
      fontSize: 13,
      lineHeight: 20 / 13,
      fontWeight: 500
    },
    c2: {
      fontSize: 12,
      lineHeight: 17 / 12,
      fontWeight: 600
    },
    label: {
      fontSize: 11,
      lineHeight: 15 / 11,
      fontWeight: 600
    }
  },
  shadows: ["none", 0, 1, 2, 3, 4],
  overrides: {}
};

/***/ }),

/***/ 5591:
/***/ ((module) => {

// Exports
module.exports = {
	"main_header": "header_main_header__jIfJD",
	"header_logo": "header_header_logo__VS_Vl",
	"header_search_content": "header_header_search_content__1jhCY",
	"site_navigation": "header_site_navigation__MvLth",
	"navigation_container": "header_navigation_container__hnXWo",
	"activeLink": "header_activeLink__Hvc8D"
};


/***/ }),

/***/ 7946:
/***/ ((module) => {

// Exports
module.exports = {
	"home_site_navigation": "homeheader_home_site_navigation__ZCXFu",
	"home_main_header": "homeheader_home_main_header__sxTZP",
	"home_header_logo": "homeheader_home_header_logo__9FF_7",
	"home_navigation_container": "homeheader_home_navigation_container__DF9lB",
	"home_section": "homeheader_home_section__pL5nb"
};


/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 9026:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8307:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MoveToInbox");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [639,675,676,664,942,340], () => (__webpack_exec__(6927)));
module.exports = __webpack_exports__;

})();