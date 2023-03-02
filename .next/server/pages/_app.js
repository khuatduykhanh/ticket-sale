"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./src/components/header.tsx




const siteTitle = "Ticket NFT";
function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    as: "header",
                    bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
                    p: 3,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkBox, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkOverlay, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                        size: "md",
                                        ml: "50px",
                                        color: "#6CB3A7",
                                        fontSize: "30px",
                                        children: siteTitle
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            focusBorderColor: "#6CB3A7",
                            boxShadow: "2xl",
                            placeholder: "Search....",
                            _placeholder: {
                                color: "#6CB3A7"
                            },
                            w: "500px"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            boxShadow: "2xl",
                            bg: "#6CB3A7",
                            ml: "10px",
                            "aria-label": "Search database",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.Search2Icon, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            mr: "20px",
                            borderRightRadius: "20",
                            borderLeftRadius: "20",
                            color: "black",
                            borderColor: "#6CB3A7",
                            variant: "outline",
                            w: "150px",
                            children: "Tạo Sự Kiện"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ButtonGroup, {
                            gap: "2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    bg: "#6CB3A7",
                                    color: "black",
                                    children: "Đăng K\xfd"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    bg: "#6CB3A7",
                                    color: "black",
                                    children: "Đăng Nhập"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
                    p: 0,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                mr: "20px",
                                color: "#6CB3A7",
                                bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
                                children: "Trang chủ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                color: "#6CB3A7",
                                bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
                                children: "Sự kiện"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layout.tsx
// src/components/layout.tsx




function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.md",
                py: "8",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                as: "footer",
                bg: (0,react_.useColorModeValue)("gray.100", "gray.700"),
                p: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: "md",
                    children: "first dapp by W3BCD - 2022"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function getLibrary(provider) {
    const library = new providers_namespaceObject.Web3Provider(provider);
    return library;
}
function MyApp({ Component , pageProps  }) {
    const [showChild, setShowChild] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setShowChild(true);
    }, []);
    if (!showChild) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(5104)));
module.exports = __webpack_exports__;

})();