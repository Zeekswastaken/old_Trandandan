"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/groups/page",{

/***/ "(app-client)/./app/groups/component/GroupInfo.tsx":
/*!********************************************!*\
  !*** ./app/groups/component/GroupInfo.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GroupInfos = (param)=>{\n    let { GroupsInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-xl max-w-[1200px] h-[100px] bg-[#670647] m-auto p-[15px] flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[75px] h-[px] bg-black rounded-xl overflow-hidden border-2 border-[#FF1382]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://placekitten.com/g/200/200\",\n                        className: \"w-full h-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/component/GroupInfo.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/component/GroupInfo.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/component/GroupInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/component/GroupInfo.tsx\",\n                lineNumber: 19,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/component/GroupInfo.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = GroupInfos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupInfos);\nvar _c;\n$RefreshReg$(_c, \"GroupInfos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dyb3Vwcy9jb21wb25lbnQvR3JvdXBJbmZvLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQU96QixNQUFNQyxhQUFhO1FBQUMsRUFBQ0MsVUFBVSxFQUFtQjtJQUM5QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNEOzBCQUNJLDRFQUFDQTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQ0dDLEtBQUk7d0JBQ0pGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZCLDhEQUFDRDs7Ozs7Ozs7Ozs7QUFLWjtLQWhCTUY7QUFrQk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dyb3Vwcy9jb21wb25lbnQvR3JvdXBJbmZvLnRzeD82NDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5pbnRlcmZhY2UgR3JvdXBzU3RhdGVwcm9wcyB7XG4gICAgR3JvdXBzSW5mbzogYW55O1xufVxuXG5jb25zdCBHcm91cEluZm9zID0gKHtHcm91cHNJbmZvfTogR3JvdXBzU3RhdGVwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXhsIG1heC13LVsxMjAwcHhdIGgtWzEwMHB4XSBiZy1bIzY3MDY0N10gbS1hdXRvIHAtWzE1cHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs3NXB4XSBoLVtweF0gYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgYm9yZGVyLVsjRkYxMzgyXVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzIwMC8yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBJbmZvcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyb3VwSW5mb3MiLCJHcm91cHNJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/groups/component/GroupInfo.tsx\n"));

/***/ })

});