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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst drawRectangle = (context, x, y, w, h, color)=>{\n    context.fillStyle = color;\n    context.fillRect(x, y, w, h);\n};\nconst drawCircle = (context, x, y, r, color)=>{\n    context.fillStyle = color;\n    context.beginPath();\n    context.arc(x, y, r, 0, Math.PI * 2, false);\n    context.closePath();\n    context.fill();\n};\nconst PingPong = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (context) {\n            drawRectangle(context, 0, 0, context.canvas.width, context.canvas.height, \"#000000\");\n            drawCircle();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[2px] border-gray w-fit\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef,\n            className: \"w-[1000px] h-[500px]\"\n        }, void 0, false, {\n            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendence/View/app/game/component/PingPong.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PingPong, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = PingPong;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PingPong);\nvar _c;\n$RefreshReg$(_c, \"PingPong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dhbWUvY29tcG9uZW50L1BpbmdQb25nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDZ0Q7QUFFaEQsTUFBTUcsZ0JBQWdCLENBQUNDLFNBQW1DQyxHQUFXQyxHQUFXQyxHQUFXQyxHQUFXQztJQUNsR0wsUUFBUU0sU0FBUyxHQUFHRDtJQUNwQkwsUUFBUU8sUUFBUSxDQUFDTixHQUFHQyxHQUFHQyxHQUFHQztBQUM5QjtBQUVBLE1BQU1JLGFBQWEsQ0FBQ1IsU0FBbUNDLEdBQVdDLEdBQVdPLEdBQVdKO0lBQ3BGTCxRQUFRTSxTQUFTLEdBQUdEO0lBQ3BCTCxRQUFRVSxTQUFTO0lBQ2pCVixRQUFRVyxHQUFHLENBQUNWLEdBQUdDLEdBQUdPLEdBQUcsR0FBR0csS0FBS0MsRUFBRSxHQUFHLEdBQUc7SUFDckNiLFFBQVFjLFNBQVM7SUFDakJkLFFBQVFlLElBQUk7QUFDaEI7QUFFQSxNQUFNQyxXQUFXOztJQUNiLE1BQU1DLFlBQVlwQiw2Q0FBTUEsQ0FBQztJQUV6QkMsZ0RBQVNBLENBQUM7UUFDTixNQUFNb0IsU0FBU0QsVUFBVUUsT0FBTztRQUNoQyxNQUFNbkIsVUFBVWtCLE9BQU9FLFVBQVUsQ0FBQztRQUNsQyxJQUFHcEIsU0FDSDtZQUNJRCxjQUFjQyxTQUFTLEdBQUcsR0FBR0EsUUFBUWtCLE1BQU0sQ0FBQ0csS0FBSyxFQUFFckIsUUFBUWtCLE1BQU0sQ0FBQ0ksTUFBTSxFQUFFO1lBQzFFZDtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNlO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNOO1lBQU9PLEtBQUtSO1lBQVdPLFdBQVU7Ozs7Ozs7Ozs7O0FBSzlDO0dBbkJNUjtLQUFBQTtBQXFCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2FtZS9jb21wb25lbnQvUGluZ1BvbmcudHN4P2YzM2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBkcmF3UmVjdGFuZ2xlID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xufVxuXG5jb25zdCBkcmF3Q2lyY2xlID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgY29sb3I6IHN0cmluZykgPT4ge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5maWxsKCk7XG59XG5cbmNvbnN0IFBpbmdQb25nID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmKGNvbnRleHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRyYXdSZWN0YW5nbGUoY29udGV4dCwgMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCwgXCIjMDAwMDAwXCIpO1xuICAgICAgICAgICAgZHJhd0NpcmNsZSgpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvcmRlci1bMnB4XSBib3JkZXItZ3JheSB3LWZpdCc+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9J3ctWzEwMDBweF0gaC1bNTAwcHhdJz5cblxuICAgICAgICAgICAgPC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbmdQb25nOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRyYXdSZWN0YW5nbGUiLCJjb250ZXh0IiwieCIsInkiLCJ3IiwiaCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3Q2lyY2xlIiwiciIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJQaW5nUG9uZyIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/game/component/PingPong.tsx\n"));

/***/ })

});