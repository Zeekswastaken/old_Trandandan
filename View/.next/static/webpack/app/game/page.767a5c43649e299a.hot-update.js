"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/game/page",{

/***/ "(app-client)/./app/game/component/PingPong.tsx":
/*!*****************************************!*\
  !*** ./app/game/component/PingPong.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    const canvas = canvasRef.current;\n    if (canvas) {\n        const context = canvas.getContext(\"2d\");\n        if (context) {\n            context.fillStyle = \"blue\";\n            context.fillRect(0, 0, canvas.width, canvas.height);\n        }\n    }\n}, []);\nconst PingPong = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[2px] border-gray w-fit bg-[#000000]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef,\n            className: \"w-[1000px] h-[500px]\"\n        }, void 0, false, {\n            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_c = PingPong;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PingPong);\nvar _c;\n$RefreshReg$(_c, \"PingPong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dhbWUvY29tcG9uZW50L1BpbmdQb25nLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNnRDtBQUVoRCxNQUFNRyxZQUFZRiw2Q0FBTUEsQ0FBQztBQUV6QkMsZ0RBQVNBLENBQUM7SUFDTixNQUFNRSxTQUFTRCxVQUFVRSxPQUFPO0lBQ2hDLElBQUlELFFBQVE7UUFDVixNQUFNRSxVQUFVRixPQUFPRyxVQUFVLENBQUM7UUFDbEMsSUFBSUQsU0FBUztZQUNYQSxRQUFRRSxTQUFTLEdBQUc7WUFDcEJGLFFBQVFHLFFBQVEsQ0FBQyxHQUFHLEdBQUdMLE9BQU9NLEtBQUssRUFBRU4sT0FBT08sTUFBTTtRQUNwRDtJQUNGO0FBQ0YsR0FBRyxFQUFFO0FBRVAsTUFBTUMsV0FBVztJQUNiLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDVjtZQUFPVyxLQUFLWjtZQUFXVyxXQUFVOzs7Ozs7Ozs7OztBQUs5QztLQVJNRjtBQVVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nYW1lL2NvbXBvbmVudC9QaW5nUG9uZy50c3g/ZjMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG5jb25zdCBQaW5nUG9uZyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLVsycHhdIGJvcmRlci1ncmF5IHctZml0IGJnLVsjMDAwMDAwXSc+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9J3ctWzEwMDBweF0gaC1bNTAwcHhdJz5cblxuICAgICAgICAgICAgPC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbmdQb25nOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJQaW5nUG9uZyIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/game/component/PingPong.tsx\n"));

/***/ })

});