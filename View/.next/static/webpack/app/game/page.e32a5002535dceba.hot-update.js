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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst drawRectangle = (context, x, y, w, h, color)=>{\n    context.fillStyle = color;\n    context.fillRect(x, y, w, h);\n};\nconst drawCircle = (context, x, y, r, color)=>{\n    context.fillStyle = color;\n    context.beginPath();\n    context.arc(x, y, r, 0, Math.PI * 2, false);\n    context.closePath();\n    context.fill();\n};\nconst PingPong = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (context) {\n            drawRectangle(context, 0, 0, context.canvas.width, canvas.height, \"#000000\");\n            drawCircle(context, 100, 100, 50, \"#FFFFFF\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[2px] border-gray w-fit\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef,\n            width: 1200,\n            height: 600\n        }, void 0, false, {\n            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PingPong, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = PingPong;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PingPong);\nvar _c;\n$RefreshReg$(_c, \"PingPong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dhbWUvY29tcG9uZW50L1BpbmdQb25nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDZ0Q7QUFFaEQsTUFBTUcsZ0JBQWdCLENBQUNDLFNBQW1DQyxHQUFXQyxHQUFXQyxHQUFXQyxHQUFXQztJQUNsR0wsUUFBUU0sU0FBUyxHQUFHRDtJQUNwQkwsUUFBUU8sUUFBUSxDQUFDTixHQUFHQyxHQUFHQyxHQUFHQztBQUM5QjtBQUVBLE1BQU1JLGFBQWEsQ0FBQ1IsU0FBbUNDLEdBQVdDLEdBQVdPLEdBQVdKO0lBQ3BGTCxRQUFRTSxTQUFTLEdBQUdEO0lBQ3BCTCxRQUFRVSxTQUFTO0lBQ2pCVixRQUFRVyxHQUFHLENBQUNWLEdBQUdDLEdBQUdPLEdBQUcsR0FBR0csS0FBS0MsRUFBRSxHQUFHLEdBQUc7SUFDckNiLFFBQVFjLFNBQVM7SUFDakJkLFFBQVFlLElBQUk7QUFDaEI7QUFFQSxNQUFNQyxXQUFXOztJQUNiLE1BQU1DLFlBQVlwQiw2Q0FBTUEsQ0FBQztJQUV6QkMsZ0RBQVNBLENBQUM7UUFDTixNQUFNb0IsU0FBU0QsVUFBVUUsT0FBTztRQUNoQyxNQUFNbkIsVUFBVWtCLE9BQU9FLFVBQVUsQ0FBQztRQUNsQyxJQUFHcEIsU0FDSDtZQUNJRCxjQUFjQyxTQUFTLEdBQUcsR0FBR0EsUUFBUWtCLE1BQU0sQ0FBQ0csS0FBSyxFQUFFSCxPQUFPSSxNQUFNLEVBQUU7WUFDbEVkLFdBQVdSLFNBQVMsS0FBSyxLQUFLLElBQUk7UUFDdEM7SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ3VCO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNOO1lBQU9PLEtBQUtSO1lBQVdJLE9BQU87WUFBTUMsUUFBUTs7Ozs7Ozs7Ozs7QUFLekQ7R0FuQk1OO0tBQUFBO0FBcUJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nYW1lL2NvbXBvbmVudC9QaW5nUG9uZy50c3g/ZjMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGRyYXdSZWN0YW5nbGUgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XG59XG5cbmNvbnN0IGRyYXdDaXJjbGUgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbn1cblxuY29uc3QgUGluZ1BvbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYoY29udGV4dClcbiAgICAgICAge1xuICAgICAgICAgICAgZHJhd1JlY3RhbmdsZShjb250ZXh0LCAwLCAwLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgXCIjMDAwMDAwXCIpO1xuICAgICAgICAgICAgZHJhd0NpcmNsZShjb250ZXh0LCAxMDAsIDEwMCwgNTAsIFwiI0ZGRkZGRlwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLVsycHhdIGJvcmRlci1ncmF5IHctZml0Jz5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHdpZHRoPXsxMjAwfSBoZWlnaHQ9ezYwMH0gPlxuXG4gICAgICAgICAgICA8L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGluZ1Bvbmc7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZHJhd1JlY3RhbmdsZSIsImNvbnRleHQiLCJ4IiwieSIsInciLCJoIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdDaXJjbGUiLCJyIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsIlBpbmdQb25nIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/game/component/PingPong.tsx\n"));

/***/ })

});