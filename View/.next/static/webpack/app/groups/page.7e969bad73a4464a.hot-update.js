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

/***/ "(app-client)/./app/groups/page.tsx":
/*!*****************************!*\
  !*** ./app/groups/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FindGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FindGroup */ \"(app-client)/./app/groups/FindGroup.tsx\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"(app-client)/./app/groups/button.tsx\");\n/* harmony import */ var _groups_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups_form */ \"(app-client)/./app/groups/groups_form.tsx\");\n/* harmony import */ var _component_GroupInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/GroupInfo */ \"(app-client)/./app/groups/component/GroupInfo.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [group, setGroup] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const handleClick = ()=>{\n        setGroup(!group);\n    };\n    const groupsInfo = [\n        {\n            name: \"Fringilla Fusce Elit\",\n            images: \"https://placekitten.com/g/200/200\",\n            members: 20,\n            type: \"Protected\"\n        },\n        {\n            name: \"Inceptos\",\n            images: \"https://placekitten.com/g/200/200\",\n            members: 12,\n            type: \"Public\"\n        },\n        {\n            name: \"Vestibulum\",\n            images: \"https://placekitten.com/g/200/200\",\n            members: 20,\n            type: \"Protected\"\n        }\n    ];\n    const addGroupsInfo = (groupInfo)=>{\n        groupsInfo.push(groupInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" text-3xl text-white mt-[400px] w-full mx-10 max-w-[1400px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-[30px] w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        name: \"Find Group\",\n                                        bt_state: group,\n                                        onClick: handleClick\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    name: \"Creact Group\",\n                                    bt_state: !group,\n                                    onClick: handleClick\n                                }, void 0, false, {\n                                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: group ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_groups_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 26\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 42\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            group ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FindGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                groups: _component_GroupInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 19\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 53\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"TOKU8j7pDnT0QNxAMdlFwlYWKRE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dyb3Vwcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lCO0FBRVc7QUFDRDtBQUNHO0FBQ1E7QUFHOUMsTUFBTUssT0FBTzs7SUFFWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AscURBQWMsQ0FBQztJQUN6QyxNQUFNUyxjQUFjO1FBQ2xCRixTQUFTLENBQUNEO0lBQ1o7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCO1lBQ0VDLE1BQU87WUFDUEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBO1lBQ0VILE1BQU87WUFDUEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBO1lBQ0VILE1BQU87WUFDUEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtLQUNEO0lBU0QsTUFBTUMsZ0JBQWdCLENBQUNDO1FBRXJCTixXQUFXTyxJQUFJLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDakIsK0NBQVdBO3dDQUFDUyxNQUFLO3dDQUFhUyxVQUFVZDt3Q0FBT2UsU0FBU1o7Ozs7Ozs7Ozs7OzhDQUV6RCw4REFBQ1AsK0NBQVdBO29DQUFDUyxNQUFLO29DQUFlUyxVQUFVLENBQUNkO29DQUFPZSxTQUFTWjs7Ozs7Ozs7Ozs7O3NDQUVoRSw4REFBQ1M7c0NBQ0VaLHNCQUFRLDhEQUFDSCxvREFBU0E7Ozs7MERBQU0sOERBQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLakNaLHNCQUFTLDhEQUFDTCxrREFBU0E7Z0JBQUNxQixRQUFRbEIsNERBQVNBOzs7OzswQ0FBTSw4REFBQ2M7Ozs7Ozs7Ozs7O0FBR3JEO0dBM0RNYjtBQTZETiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ3JvdXBzL3BhZ2UudHN4P2Y1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZpbmRHcm91cCBmcm9tICcuL0ZpbmRHcm91cCc7XG5pbXBvcnQgR3JvdXBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEdyb3VwRnJvbSBmcm9tICcuL2dyb3Vwc19mb3JtJztcbmltcG9ydCBHcm91cEluZm8gZnJvbSAnLi9jb21wb25lbnQvR3JvdXBJbmZvJztcblxuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtncm91cCwgc2V0R3JvdXBdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEdyb3VwKCFncm91cCk7XG4gIH07XG5cbiAgY29uc3QgZ3JvdXBzSW5mbyA9IFtcbiAgICB7XG4gICAgICBuYW1lIDogXCJGcmluZ2lsbGEgRnVzY2UgRWxpdFwiLFxuICAgICAgaW1hZ2VzOiBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tL2cvMjAwLzIwMFwiLFxuICAgICAgbWVtYmVyczogMjAsXG4gICAgICB0eXBlOiBcIlByb3RlY3RlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lIDogXCJJbmNlcHRvc1wiLFxuICAgICAgaW1hZ2VzOiBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tL2cvMjAwLzIwMFwiLFxuICAgICAgbWVtYmVyczogMTIsXG4gICAgICB0eXBlOiBcIlB1YmxpY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lIDogXCJWZXN0aWJ1bHVtXCIsXG4gICAgICBpbWFnZXM6IFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vZy8yMDAvMjAwXCIsXG4gICAgICBtZW1iZXJzOiAyMCxcbiAgICAgIHR5cGU6IFwiUHJvdGVjdGVkXCJcbiAgICB9XG4gIF07XG5cbiAgaW50ZXJmYWNlIEdyb3VwSW5mbyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IG51bWJlcjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIFxuICB9XG5cbiAgY29uc3QgYWRkR3JvdXBzSW5mbyA9IChncm91cEluZm8pID0+XG4gIHtcbiAgICBncm91cHNJbmZvLnB1c2goZ3JvdXBJbmZvKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9JyB0ZXh0LTN4bCB0ZXh0LXdoaXRlIG10LVs0MDBweF0gdy1mdWxsIG14LTEwIG1heC13LVsxNDAwcHhdJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBtYi1bMzBweF0gdy1mdWxsJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci01Jz5cbiAgICAgICAgICAgICAgICAgIDxHcm91cEJ1dHRvbiBuYW1lPSdGaW5kIEdyb3VwJyBidF9zdGF0ZT17Z3JvdXB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L0dyb3VwQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEdyb3VwQnV0dG9uIG5hbWU9J0NyZWFjdCBHcm91cCcgYnRfc3RhdGU9eyFncm91cH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PjwvR3JvdXBCdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtncm91cCA/IDxHcm91cEZyb20gLz4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtncm91cCA/ICA8RmluZEdyb3VwIGdyb3Vwcz17R3JvdXBJbmZvfS8+IDogPGRpdj48L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpbmRHcm91cCIsIkdyb3VwQnV0dG9uIiwiR3JvdXBGcm9tIiwiR3JvdXBJbmZvIiwicGFnZSIsImdyb3VwIiwic2V0R3JvdXAiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZ3JvdXBzSW5mbyIsIm5hbWUiLCJpbWFnZXMiLCJtZW1iZXJzIiwidHlwZSIsImFkZEdyb3Vwc0luZm8iLCJncm91cEluZm8iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnRfc3RhdGUiLCJvbkNsaWNrIiwiZ3JvdXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/groups/page.tsx\n"));

/***/ })

});