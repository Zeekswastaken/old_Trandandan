"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[username]/layout",{

/***/ "(app-client)/./app/[username]/layout.tsx":
/*!***********************************!*\
  !*** ./app/[username]/layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserCard */ \"(app-client)/./app/[username]/UserCard.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// type User = {\n// params: { username: string };\n// };\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const User = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    console.log(User.username);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-[url('/neon-background2.jpeg')] bg-cover bg-center bg-no-repeat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" mt-[300px]  mx-5 lg:mx-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" grid  grid-cols-1 2xl:grid-cols-3 mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-auto 2xl:order-1 order-2 col-span-2  p-20\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/app/[username]/layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/app/[username]/layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/app/[username]/layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/app/[username]/layout.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/app/[username]/layout.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"qqB3OE1Buy/CHHgULupP/GFLo9I=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL1t1c2VybmFtZV0vbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHMEI7QUFDUTtBQUNxQjtBQUd2RCxnQkFBZ0I7QUFDZCxnQ0FBZ0M7QUFDbEMsS0FBSztBQUVVLFNBQVNHLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTUMsT0FBT0gsMERBQVNBO0lBQ3RCSSxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLFFBQVE7SUFDekIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pOOzs7Ozs7a0NBRUgsOERBQUNILGlEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBbkJ3QkU7O1FBS1RELHNEQUFTQTs7O0tBTEFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bdXNlcm5hbWVdL2xheW91dC50c3g/MTQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi9Vc2VyQ2FyZFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxuLy8gdHlwZSBVc2VyID0ge1xuICAvLyBwYXJhbXM6IHsgdXNlcm5hbWU6IHN0cmluZyB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLCBcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0gKSB7XG4gIGNvbnN0IFVzZXIgPSB1c2VQYXJhbXMoKTtcbiAgY29uc29sZS5sb2coVXNlci51c2VybmFtZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctW3VybCgnL25lb24tYmFja2dyb3VuZDIuanBlZycpXSBiZy1jb3ZlciBiZy1jZW50ZXIgYmctbm8tcmVwZWF0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC1bMzAwcHhdICBteC01IGxnOm14LTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdyaWQgIGdyaWQtY29scy0xIDJ4bDpncmlkLWNvbHMtMyBtYi0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtYXV0byAyeGw6b3JkZXItMSBvcmRlci0yIGNvbC1zcGFuLTIgIHAtMjBcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXJDYXJkIiwidXNlUGFyYW1zIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwiVXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VybmFtZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/[username]/layout.tsx\n"));

/***/ })

});