"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/tools/Row.tsx":
/*!**********************************!*\
  !*** ./components/tools/Row.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Row = (param)=>{\n    let { opponent, score, date, result, avatar } = param;\n    const WinOrLost = result === \"win\" ? \"bg-[#4ADE80]/[0.4]\" : \"bg-[#FF7171]/[0.4]\";\n    const WinOrLost_hover = result === \"win\" ? \"hover:bg-[#4ADE80]\" : \"hover:bg-[#FF7171]\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"\".concat(WinOrLost, \" \").concat(WinOrLost_hover, \" transition-all duration-700\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex align-items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-full h-12 w-12  object-cover \",\n                            src: avatar,\n                            alt: \"avatar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" ml-3 mt-3 font-Heading tracking-wider \",\n                            children: opponent\n                        }, void 0, false, {\n                            fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-5 text-2xl\",\n                children: score\n            }, void 0, false, {\n                fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 rounded-r-[.625rem]\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fbouanan/Desktop/Ft_Transcendence/View/components/tools/Row.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy90b29scy9Sb3cudHN4IiwibWFwcGluZ3MiOiI7OztBQVNBLE1BQU1BLE1BQU07UUFBRSxFQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBZ0I7SUFFbkUsTUFBTUMsWUFBWUYsV0FBVyxRQUFRLHVCQUF1QjtJQUM1RCxNQUFNRyxrQkFBa0JILFdBQVcsUUFBUSx1QkFBdUI7SUFFbEUscUJBQ0MsOERBQUNJO1FBQUdDLFdBQVksR0FBZ0JGLE9BQWJELFdBQVUsS0FBbUIsT0FBaEJDLGlCQUFnQjs7MEJBQy9DLDhEQUFDRztnQkFBR0QsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNkLDhEQUFDRzs0QkFBSUgsV0FBVTs0QkFBd0NJLEtBQUtSOzRCQUFRUyxLQUFJOzs7Ozs7c0NBQ3hFLDhEQUFDSDs0QkFBSUYsV0FBVTtzQ0FBMkNSOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUQsOERBQUNTO2dCQUFHRCxXQUFVOzBCQUFpQlA7Ozs7OzswQkFDL0IsOERBQUNRO2dCQUFHRCxXQUFVOzBCQUEyQk47Ozs7Ozs7Ozs7OztBQUc1QztLQWpCTUg7QUFtQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Sb3cudHN4PzVmZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXG50eXBlIFRhYmxlRGF0YVJvdyA9IHtcblx0b3Bwb25lbnQ6IHN0cmluZ1xuXHRzY29yZTogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRyZXN1bHQ6IHN0cmluZ1xuXHRhdmF0YXI6IHN0cmluZ1xufTtcblxuY29uc3QgUm93ID0gKCB7b3Bwb25lbnQsIHNjb3JlLCBkYXRlLCByZXN1bHQsIGF2YXRhcn0gOiBUYWJsZURhdGFSb3cgKSA9PiB7XG5cblx0Y29uc3QgV2luT3JMb3N0ID0gcmVzdWx0ID09PSBcIndpblwiID8gXCJiZy1bIzRBREU4MF0vWzAuNF1cIiA6IFwiYmctWyNGRjcxNzFdL1swLjRdXCI7XG5cdGNvbnN0IFdpbk9yTG9zdF9ob3ZlciA9IHJlc3VsdCA9PT0gXCJ3aW5cIiA/IFwiaG92ZXI6YmctWyM0QURFODBdXCIgOiBcImhvdmVyOmJnLVsjRkY3MTcxXVwiO1xuXHRcblx0cmV0dXJuIChcblx0XHQ8dHIgY2xhc3NOYW1lPXsgYCR7V2luT3JMb3N0fSAke1dpbk9yTG9zdF9ob3Zlcn0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwYH0gPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cInAtM1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIFwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgdy0xMiAgb2JqZWN0LWNvdmVyIFwiIHNyYz17YXZhdGFyfSBhbHQ9XCJhdmF0YXJcIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIG1sLTMgbXQtMyBmb250LUhlYWRpbmcgdHJhY2tpbmctd2lkZXIgXCI+e29wcG9uZW50fTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwicHgtNSB0ZXh0LTJ4bFwiPntzY29yZX08L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXItWy42MjVyZW1dXCI+e2RhdGV9PC90ZD5cblx0XHQ8L3RyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdzsiXSwibmFtZXMiOlsiUm93Iiwib3Bwb25lbnQiLCJzY29yZSIsImRhdGUiLCJyZXN1bHQiLCJhdmF0YXIiLCJXaW5Pckxvc3QiLCJXaW5Pckxvc3RfaG92ZXIiLCJ0ciIsImNsYXNzTmFtZSIsInRkIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/tools/Row.tsx\n"));

/***/ })

});