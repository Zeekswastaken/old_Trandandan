"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst login = ()=>{\n    const handleSubmit = ()=>{\n        console.log(\"Submited\");\n    };\n    const handleGoogle = async ()=>{\n        try {\n            // Make an HTTP GET request to your backend endpoint for Google OAuth\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/auth/google\", {\n                withCredentials: tr\n            });\n            // Handle the response from the backend\n            console.log(\"Backend response:\", res.data);\n        } catch (error) {\n            // Handle any errors that might occur during the request\n            console.error(\"Error:\", error);\n        }\n    };\n    const handle_42 = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/auth/42\");\n        console.log(res.data);\n    // alert(res);\n    // console.log(res.headers);\n    };\n    const link_42 = \"http://localhost:3000/auth/42\";\n    const link_google = \"http://localhost:3000/auth/google\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" grid place-items-center h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-[#1B071C]/[0.8] min-w-[300px] overflow-auto h-[600px] w-[500px] rounded-2xl border-[#D16ACE] border\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \" text-center grid  place-content-center  font-semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-white text-center grid place-content-center  \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-Glitch\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-[45px] pt-10\",\n                                children: \"Welcome Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-11 flex place-content-center mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link_42,\n                                    onClick: handle_42,\n                                    className: \" shadow-2xl bg-[#472B4E] hover:bg-[#472B4E]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"\",\n                                            src: \"/42.svg\",\n                                            alt: \"42\",\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Network\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link_google,\n                                    onClick: handleGoogle,\n                                    className: \" shadow-2xl bg-[#A1216C] hover:bg-[#A1216C]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/google.svg\",\n                                            alt: \"google\",\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Google\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" pt-10 divider\",\n                            children: \"or\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Username\",\n                            className: \"bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-10 sm:mx-0 mx-5 rounded-xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            className: \"bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-4 sm:mx-0 mx-5 rounded-xl \"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \" hover:underline pt-2 text-[#EBA3EA] text-end font-normal text-sm\",\n                            children: \"Forgot  Password?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            className: \" text-center text-xl bg-primary-pink-300 hover:bg-primary-pink-300/[0.8] transition duration-300 hover:border font-Bomb mx-20 mt-10 p-2 rounded-2xl\",\n                            children: \"log in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" font-normal text-xs mt-3\",\n                            children: [\n                                \"Don’t have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \" hover:underline text-[#EBA3EA]\",\n                                    href: \"/signup\",\n                                    children: \"Sing up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 77\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQjtBQUdjO0FBRXhDLE1BQU1FLFFBQVE7SUFDWixNQUFNQyxlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUdGLE1BQU1DLGVBQWU7UUFDbkIsSUFBSTtZQUNGLHFFQUFxRTtZQUNyRSxNQUFNQyxNQUFNLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQUMscUNBQW9DO2dCQUM5REMsaUJBQWdCQztZQUNsQjtZQUVBLHVDQUF1QztZQUN2Q04sUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkUsSUFBSUksSUFBSTtRQUMzQyxFQUFFLE9BQU9DLE9BQU87WUFDZCx3REFBd0Q7WUFDeERSLFFBQVFRLEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtJQUNGO0lBRUUsTUFBTUMsWUFBWTtRQUNoQixNQUFNTixNQUFPLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQUM7UUFDN0JKLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSUksSUFBSTtJQUNwQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzlCO0lBRUEsTUFBTUcsVUFBVTtJQUVoQixNQUFNQyxjQUFjO0lBRXBCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBTUQsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUVGLFdBQVU7MENBQXFCOzs7Ozs7Ozs7OztzQ0FFbEMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQUVDLE1BQU1QO29DQUFTUSxTQUFTVDtvQ0FBV0ksV0FBVTs7c0RBQzlDLDhEQUFDTTs0Q0FBSU4sV0FBVTs0Q0FBR08sS0FBSTs0Q0FBVUMsS0FBSTs0Q0FBS0MsT0FBTzs0Q0FBSUMsUUFBUTs7Ozs7O3NEQUM1RCw4REFBQ1I7c0RBQUU7Ozs7Ozs7Ozs7Ozs4Q0FFTCw4REFBQ0M7b0NBQUVDLE1BQU1OO29DQUFhTyxTQUFTaEI7b0NBQWNXLFdBQVU7O3NEQUNyRCw4REFBQ007NENBQUlDLEtBQUk7NENBQWNDLEtBQUk7NENBQVNDLE9BQU87NENBQUlDLFFBQVE7Ozs7OztzREFDdkQsOERBQUNSO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1AsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUFpQjs7Ozs7O3NDQUNoQyw4REFBQ1c7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQVdiLFdBQVU7Ozs7OztzQ0FDcEQsOERBQUNXOzRCQUFNQyxNQUFLOzRCQUFXQyxhQUFZOzRCQUFXYixXQUFVOzs7Ozs7c0NBQ3hELDhEQUFDRzs0QkFBRUMsTUFBSzs0QkFBSUosV0FBVTtzQ0FBb0U7Ozs7OztzQ0FDMUYsOERBQUNHOzRCQUFFQyxNQUFLOzRCQUFJSixXQUFXO3NDQUFzSjs7Ozs7O3NDQUU3Syw4REFBQ0U7NEJBQUVGLFdBQVU7O2dDQUE0Qjs4Q0FBdUIsOERBQUNHO29DQUFFSCxXQUFVO29DQUFrQ0ksTUFBSzs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFJO0FBQ0EsK0RBQWVuQixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLnRzeD80OTBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBraWxsIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3VibWl0ZWRcIik7XG4gIH1cblxuXG5jb25zdCBoYW5kbGVHb29nbGUgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gTWFrZSBhbiBIVFRQIEdFVCByZXF1ZXN0IHRvIHlvdXIgYmFja2VuZCBlbmRwb2ludCBmb3IgR29vZ2xlIE9BdXRoXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9nb29nbGUnLHtcbiAgICAgIHdpdGhDcmVkZW50aWFsczp0clxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgY29uc29sZS5sb2coJ0JhY2tlbmQgcmVzcG9uc2U6JywgcmVzLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3JzIHRoYXQgbWlnaHQgb2NjdXIgZHVyaW5nIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICB9XG59O1xuXG4gIGNvbnN0IGhhbmRsZV80MiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSAgYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvNDJcIilcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgLy8gYWxlcnQocmVzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMuaGVhZGVycyk7XG4gIH1cblxuICBjb25zdCBsaW5rXzQyID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC80MlwiO1xuXG4gIGNvbnN0IGxpbmtfZ29vZ2xlID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9nb29nbGVcIlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgaC1zY3JlZW4gXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1bIzFCMDcxQ10vWzAuOF0gbWluLXctWzMwMHB4XSBvdmVyZmxvdy1hdXRvIGgtWzYwMHB4XSB3LVs1MDBweF0gcm91bmRlZC0yeGwgYm9yZGVyLVsjRDE2QUNFXSBib3JkZXJcIj5cbiAgICAgIDxmb3JtICBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgZ3JpZCAgcGxhY2UtY29udGVudC1jZW50ZXIgIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtR2xpdGNoXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1bNDVweF0gcHQtMTBcIj5XZWxjb21lIEJhY2s8L3A+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTExIGZsZXggcGxhY2UtY29udGVudC1jZW50ZXIgbXQtOFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rXzQyfSBvbkNsaWNrPXtoYW5kbGVfNDJ9IGNsYXNzTmFtZT1cIiBzaGFkb3ctMnhsIGJnLVsjNDcyQjRFXSBob3ZlcjpiZy1bIzQ3MkI0RV0vWzAuOF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtMiBmbGV4IHNwYWNlLXgtMiByb3VuZGVkLTJ4bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCIvNDIuc3ZnXCIgYWx0PVwiNDJcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgPHA+TmV0d29yazwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rX2dvb2dsZX0gb25DbGljaz17aGFuZGxlR29vZ2xlfSBjbGFzc05hbWU9XCIgc2hhZG93LTJ4bCBiZy1bI0ExMjE2Q10gaG92ZXI6YmctWyNBMTIxNkNdL1swLjhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTIgZmxleCBzcGFjZS14LTIgcm91bmRlZC0yeGwgaG92ZXI6dGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dvb2dsZS5zdmdcIiBhbHQ9XCJnb29nbGVcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgPHA+R29vZ2xlPC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTEwIGRpdmlkZXJcIj5vcjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIGNsYXNzTmFtZT1cImJnLVsjMUMwRDE2XSBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMCBmb2N1czpvdXRsaW5lLXByaW1hcnktcGluay0zMDAgIHBsYWNlaG9sZGVyOnRleHQtWyM4MzdGN0ZdIHAtNCBtdC0xMCBzbTpteC0wIG14LTUgcm91bmRlZC14bFwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmctWyMxQzBEMTZdIGJvcmRlci10cmFuc3BhcmVudCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6cmluZy0wIGZvY3VzOm91dGxpbmUtcHJpbWFyeS1waW5rLTMwMCAgcGxhY2Vob2xkZXI6dGV4dC1bIzgzN0Y3Rl0gcC00IG10LTQgc206bXgtMCBteC01IHJvdW5kZWQteGwgXCIvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCIgaG92ZXI6dW5kZXJsaW5lIHB0LTIgdGV4dC1bI0VCQTNFQV0gdGV4dC1lbmQgZm9udC1ub3JtYWwgdGV4dC1zbVwiPkZvcmdvdCAgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9IFwiIHRleHQtY2VudGVyIHRleHQteGwgYmctcHJpbWFyeS1waW5rLTMwMCBob3ZlcjpiZy1wcmltYXJ5LXBpbmstMzAwL1swLjhdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlciBmb250LUJvbWIgbXgtMjAgbXQtMTAgcC0yIHJvdW5kZWQtMnhsXCI+bG9nIGluXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWwgdGV4dC14cyBtdC0zXCI+RG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IDxhIGNsYXNzTmFtZT1cIiBob3Zlcjp1bmRlcmxpbmUgdGV4dC1bI0VCQTNFQV1cIiBocmVmPVwiL3NpZ251cFwiPlNpbmcgdXA8L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBsb2dpbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwibG9naW4iLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR29vZ2xlIiwicmVzIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidHIiLCJkYXRhIiwiZXJyb3IiLCJoYW5kbGVfNDIiLCJsaW5rXzQyIiwibGlua19nb29nbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwicCIsImEiLCJocmVmIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});