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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst login = ()=>{\n    const handleSubmit = ()=>{\n        console.log(\"Submited\");\n    };\n    const handleGoogle = async ()=>{\n        try {\n            // Make an HTTP GET request to your backend endpoint for Google OAuth\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/auth/google\", {\n                withCredentials: true\n            });\n            // Handle the response from the backend\n            console.log(\"Backend response:\", res.headers);\n        } catch (error) {\n            // Handle any errors that might occur during the request\n            console.error(\"Error:\", error);\n        }\n    };\n    const handle_42 = async ()=>{\n        const corsProxyUrl = \"https://cors-anywhere.herokuapp.com/\";\n        const apiUrl = \"https://api.intra.42.fr/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Ffrom-42&client_id=u-s4t2ud-97201b0b9664120cef3e2130f4f15b0f1993c65c776a8593967c46214ef534d6\";\n        const fullUrl = corsProxyUrl + apiUrl;\n        console.log(\"here\");\n        // Now make the request to fullUrl using Axios or any other library\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(fullUrl).then((res)=>{\n            console.log(res);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    // try {\n    //   // Make an HTTP GET request to your backend route for the 42 API\n    //   const res = await axios.get(fullUrl);\n    //   // Handle the response from your backend\n    //   console.log('Backend response:', res);\n    // } catch (error) {\n    //   // Handle any errors that might occur during the request\n    //   console.error('Error:', error);\n    // }\n    };\n    const link_42 = \"http://localhost:3000/auth/42\";\n    const link_google = \"http://localhost:3000/auth/google\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" grid place-items-center h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-[#1B071C]/[0.8] min-w-[300px] overflow-auto h-[600px] w-[500px] rounded-2xl border-[#D16ACE] border\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \" text-center grid  place-content-center  font-semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-white text-center grid place-content-center  \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-Glitch\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-[45px] pt-10\",\n                                children: \"Welcome Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-11 flex place-content-center mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link_42,\n                                    onClick: handle_42,\n                                    className: \" shadow-2xl bg-[#472B4E] hover:bg-[#472B4E]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"\",\n                                            src: \"/42.svg\",\n                                            alt: \"42\",\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Network\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link_google,\n                                    onClick: handleGoogle,\n                                    className: \" shadow-2xl bg-[#A1216C] hover:bg-[#A1216C]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/google.svg\",\n                                            alt: \"google\",\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Google\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" pt-10 divider\",\n                            children: \"or\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Username\",\n                            className: \"bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-10 sm:mx-0 mx-5 rounded-xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            className: \"bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-4 sm:mx-0 mx-5 rounded-xl \"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \" hover:underline pt-2 text-[#EBA3EA] text-end font-normal text-sm\",\n                            children: \"Forgot  Password?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            className: \" text-center text-xl bg-primary-pink-300 hover:bg-primary-pink-300/[0.8] transition duration-300 hover:border font-Bomb mx-20 mt-10 p-2 rounded-2xl\",\n                            children: \"log in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" font-normal text-xs mt-3\",\n                            children: [\n                                \"Don’t have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \" hover:underline text-[#EBA3EA]\",\n                                    href: \"/signup\",\n                                    children: \"Sing up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 77\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/orbiay/Desktop/Ft_Transcendance/View/app/login/page.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQjtBQUNjO0FBRXhDLE1BQU1FLFFBQVE7SUFDWixNQUFNQyxlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUdGLE1BQU1DLGVBQWU7UUFDbkIsSUFBSTtZQUNGLHFFQUFxRTtZQUNyRSxNQUFNQyxNQUFNLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQUMscUNBQW9DO2dCQUM5REMsaUJBQWdCO1lBQ2xCO1lBRUEsdUNBQXVDO1lBQ3ZDTCxRQUFRQyxHQUFHLENBQUMscUJBQXFCRSxJQUFJRyxPQUFPO1FBQzlDLEVBQUUsT0FBT0MsT0FBTztZQUNkLHdEQUF3RDtZQUN4RFAsUUFBUU8sS0FBSyxDQUFDLFVBQVVBO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCLE1BQU1DLGVBQWU7UUFDdkIsTUFBTUMsU0FBUztRQUVmLE1BQU1DLFVBQVVGLGVBQWVDO1FBQy9CVixRQUFRQyxHQUFHLENBQUM7UUFDWixtRUFBbUU7UUFDbkUsTUFBTUUsTUFBTSxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDTyxTQUMzQkMsSUFBSSxDQUFDLENBQUNUO1lBQU9ILFFBQVFDLEdBQUcsQ0FBQ0U7UUFBSSxHQUFHVSxLQUFLLENBQUMsQ0FBQ0M7WUFBT2QsUUFBUUMsR0FBRyxDQUFDYTtRQUFJO0lBQzdELFFBQVE7SUFDUixxRUFBcUU7SUFDckUsMENBQTBDO0lBRTFDLDZDQUE2QztJQUM3QywyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLDZEQUE2RDtJQUM3RCxvQ0FBb0M7SUFDcEMsSUFBSTtJQUNOO0lBSUUsTUFBTUMsVUFBVTtJQUVoQixNQUFNQyxjQUFjO0lBRXBCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBTUQsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUVGLFdBQVU7MENBQXFCOzs7Ozs7Ozs7OztzQ0FFbEMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQUVDLE1BQU1QO29DQUFTUSxTQUFTZjtvQ0FBV1UsV0FBVTs7c0RBQzlDLDhEQUFDTTs0Q0FBSU4sV0FBVTs0Q0FBR08sS0FBSTs0Q0FBVUMsS0FBSTs0Q0FBS0MsT0FBTzs0Q0FBSUMsUUFBUTs7Ozs7O3NEQUM1RCw4REFBQ1I7c0RBQUU7Ozs7Ozs7Ozs7Ozs4Q0FFTCw4REFBQ0M7b0NBQUVDLE1BQU1OO29DQUFhTyxTQUFTckI7b0NBQWNnQixXQUFVOztzREFDckQsOERBQUNNOzRDQUFJQyxLQUFJOzRDQUFjQyxLQUFJOzRDQUFTQyxPQUFPOzRDQUFJQyxRQUFROzs7Ozs7c0RBQ3ZELDhEQUFDUjtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdQLDhEQUFDSDs0QkFBSUMsV0FBVTtzQ0FBaUI7Ozs7OztzQ0FDaEMsOERBQUNXOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFXYixXQUFVOzs7Ozs7c0NBQ3BELDhEQUFDVzs0QkFBTUMsTUFBSzs0QkFBV0MsYUFBWTs0QkFBV2IsV0FBVTs7Ozs7O3NDQUN4RCw4REFBQ0c7NEJBQUVDLE1BQUs7NEJBQUlKLFdBQVU7c0NBQW9FOzs7Ozs7c0NBQzFGLDhEQUFDRzs0QkFBRUMsTUFBSzs0QkFBSUosV0FBVztzQ0FBc0o7Ozs7OztzQ0FFN0ssOERBQUNFOzRCQUFFRixXQUFVOztnQ0FBNEI7OENBQXVCLDhEQUFDRztvQ0FBRUgsV0FBVTtvQ0FBa0NJLE1BQUs7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xSTtBQUNBLCtEQUFleEIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS50c3g/NDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWJtaXRlZFwiKTtcbiAgfVxuXG5cbmNvbnN0IGhhbmRsZUdvb2dsZSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBNYWtlIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8geW91ciBiYWNrZW5kIGVuZHBvaW50IGZvciBHb29nbGUgT0F1dGhcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL2dvb2dsZScse1xuICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGJhY2tlbmRcbiAgICBjb25zb2xlLmxvZygnQmFja2VuZCByZXNwb25zZTonLCByZXMuaGVhZGVycyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gSGFuZGxlIGFueSBlcnJvcnMgdGhhdCBtaWdodCBvY2N1ciBkdXJpbmcgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZV80MiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29yc1Byb3h5VXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG5jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9hcGkuaW50cmEuNDIuZnIvb2F1dGgvYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cCUzQSUyRiUyRmxvY2FsaG9zdCUzQTMwMDAlMkZhdXRoJTJGZnJvbS00MiZjbGllbnRfaWQ9dS1zNHQydWQtOTcyMDFiMGI5NjY0MTIwY2VmM2UyMTMwZjRmMTViMGYxOTkzYzY1Yzc3NmE4NTkzOTY3YzQ2MjE0ZWY1MzRkNic7XG5cbmNvbnN0IGZ1bGxVcmwgPSBjb3JzUHJveHlVcmwgKyBhcGlVcmw7XG5jb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyBOb3cgbWFrZSB0aGUgcmVxdWVzdCB0byBmdWxsVXJsIHVzaW5nIEF4aW9zIG9yIGFueSBvdGhlciBsaWJyYXJ5XG5jb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoZnVsbFVybClcbi50aGVuKChyZXMpPT57Y29uc29sZS5sb2cocmVzKX0pLmNhdGNoKChlcnIpPT57Y29uc29sZS5sb2coZXJyKX0pO1xuICAvLyB0cnkge1xuICAvLyAgIC8vIE1ha2UgYW4gSFRUUCBHRVQgcmVxdWVzdCB0byB5b3VyIGJhY2tlbmQgcm91dGUgZm9yIHRoZSA0MiBBUElcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoZnVsbFVybCk7XG5cbiAgLy8gICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGZyb20geW91ciBiYWNrZW5kXG4gIC8vICAgY29uc29sZS5sb2coJ0JhY2tlbmQgcmVzcG9uc2U6JywgcmVzKTtcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG1pZ2h0IG9jY3VyIGR1cmluZyB0aGUgcmVxdWVzdFxuICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgLy8gfVxufTtcblxuXG5cbiAgY29uc3QgbGlua180MiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvNDJcIjtcblxuICBjb25zdCBsaW5rX2dvb2dsZSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvZ29vZ2xlXCJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctWyMxQjA3MUNdL1swLjhdIG1pbi13LVszMDBweF0gb3ZlcmZsb3ctYXV0byBoLVs2MDBweF0gdy1bNTAwcHhdIHJvdW5kZWQtMnhsIGJvcmRlci1bI0QxNkFDRV0gYm9yZGVyXCI+XG4gICAgICA8Zm9ybSAgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyIGdyaWQgIHBsYWNlLWNvbnRlbnQtY2VudGVyICBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZ3JpZCBwbGFjZS1jb250ZW50LWNlbnRlciAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LUdsaXRjaFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtWzQ1cHhdIHB0LTEwXCI+V2VsY29tZSBCYWNrPC9wPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0xMSBmbGV4IHBsYWNlLWNvbnRlbnQtY2VudGVyIG10LThcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bGlua180Mn0gb25DbGljaz17aGFuZGxlXzQyfSBjbGFzc05hbWU9XCIgc2hhZG93LTJ4bCBiZy1bIzQ3MkI0RV0gaG92ZXI6YmctWyM0NzJCNEVdL1swLjhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTIgZmxleCBzcGFjZS14LTIgcm91bmRlZC0yeGwgaG92ZXI6dGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPVwiLzQyLnN2Z1wiIGFsdD1cIjQyXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgIDxwPk5ldHdvcms8L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bGlua19nb29nbGV9IG9uQ2xpY2s9e2hhbmRsZUdvb2dsZX0gY2xhc3NOYW1lPVwiIHNoYWRvdy0yeGwgYmctWyNBMTIxNkNdIGhvdmVyOmJnLVsjQTEyMTZDXS9bMC44XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcC0yIGZsZXggc3BhY2UteC0yIHJvdW5kZWQtMnhsIGhvdmVyOnRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUuc3ZnXCIgYWx0PVwiZ29vZ2xlXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgIDxwPkdvb2dsZTwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwdC0xMCBkaXZpZGVyXCI+b3I8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBjbGFzc05hbWU9XCJiZy1bIzFDMEQxNl0gYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBmb2N1czpyaW5nLTAgZm9jdXM6b3V0bGluZS1wcmltYXJ5LXBpbmstMzAwICBwbGFjZWhvbGRlcjp0ZXh0LVsjODM3RjdGXSBwLTQgbXQtMTAgc206bXgtMCBteC01IHJvdW5kZWQteGxcIi8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cImJnLVsjMUMwRDE2XSBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMCBmb2N1czpvdXRsaW5lLXByaW1hcnktcGluay0zMDAgIHBsYWNlaG9sZGVyOnRleHQtWyM4MzdGN0ZdIHAtNCBtdC00IHNtOm14LTAgbXgtNSByb3VuZGVkLXhsIFwiLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiIGhvdmVyOnVuZGVybGluZSBwdC0yIHRleHQtWyNFQkEzRUFdIHRleHQtZW5kIGZvbnQtbm9ybWFsIHRleHQtc21cIj5Gb3Jnb3QgIFBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSBcIiB0ZXh0LWNlbnRlciB0ZXh0LXhsIGJnLXByaW1hcnktcGluay0zMDAgaG92ZXI6YmctcHJpbWFyeS1waW5rLTMwMC9bMC44XSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXIgZm9udC1Cb21iIG14LTIwIG10LTEwIHAtMiByb3VuZGVkLTJ4bFwiPmxvZyBpblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtbm9ybWFsIHRleHQteHMgbXQtM1wiPkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyA8YSBjbGFzc05hbWU9XCIgaG92ZXI6dW5kZXJsaW5lIHRleHQtWyNFQkEzRUFdXCIgaHJlZj1cIi9zaWdudXBcIj5TaW5nIHVwPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgbG9naW4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsImxvZ2luIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdvb2dsZSIsInJlcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJlcnJvciIsImhhbmRsZV80MiIsImNvcnNQcm94eVVybCIsImFwaVVybCIsImZ1bGxVcmwiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJsaW5rXzQyIiwibGlua19nb29nbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwicCIsImEiLCJocmVmIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});