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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FindGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FindGroup */ \"(app-client)/./app/groups/FindGroup.tsx\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"(app-client)/./app/groups/button.tsx\");\n/* harmony import */ var _groups_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups_form */ \"(app-client)/./app/groups/groups_form.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [group, setGroup] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const handleClick = ()=>{\n        setGroup(!group);\n    };\n    const groupsInfo = [\n        {\n            name: \"Fringilla Fusce Elit\",\n            image: \"https://placekitten.com/g/200/200\",\n            members: 20,\n            type: \"Protected\"\n        },\n        {\n            name: \"Inceptos\",\n            image: \"https://placekitten.com/g/200/200\",\n            members: 12,\n            type: \"Public\"\n        },\n        {\n            name: \"Vestibulum\",\n            image: \"https://placekitten.com/g/200/200\",\n            members: 3,\n            type: \"Protected\"\n        },\n        {\n            name: \"Vestibulum\",\n            image: \"https://placekitten.com/g/200/200\",\n            members: 3,\n            type: \"Protected\"\n        }\n    ];\n    const addGroupsInfo = (groupInfo)=>{\n        groupsInfo.push(groupInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" text-3xl text-white mt-[400px] w-full mx-10 max-w-[1400px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-[30px] w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        name: \"Find Group\",\n                                        bt_state: group,\n                                        onClick: handleClick\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    name: \"Creact Group\",\n                                    bt_state: !group,\n                                    onClick: handleClick\n                                }, void 0, false, {\n                                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: group ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_groups_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 26\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 42\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            group ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FindGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                groupsInfos: groupsInfo\n            }, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 19\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hazaouya/Desktop/Ft_Transcendance/View/app/groups/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"TOKU8j7pDnT0QNxAMdlFwlYWKRE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dyb3Vwcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDeUI7QUFFVztBQUNEO0FBQ0c7QUFJdEMsTUFBTUksT0FBTzs7SUFFWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04scURBQWMsQ0FBQztJQUN6QyxNQUFNUSxjQUFjO1FBQ2xCRixTQUFTLENBQUNEO0lBQ1o7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCO1lBQ0VDLE1BQU87WUFDUEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBO1lBQ0VILE1BQU87WUFDUEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBO1lBQ0VILE1BQU87WUFDUEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBO1lBQ0VILE1BQU87WUFDUEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtLQUNEO0lBVUQsTUFBTUMsZ0JBQWdCLENBQUNDO1FBRXJCTixXQUFXTyxJQUFJLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDaEIsK0NBQVdBO3dDQUFDUSxNQUFLO3dDQUFhUyxVQUFVZDt3Q0FBT2UsU0FBU1o7Ozs7Ozs7Ozs7OzhDQUV6RCw4REFBQ04sK0NBQVdBO29DQUFDUSxNQUFLO29DQUFlUyxVQUFVLENBQUNkO29DQUFPZSxTQUFTWjs7Ozs7Ozs7Ozs7O3NDQUVoRSw4REFBQ1M7c0NBQ0VaLHNCQUFRLDhEQUFDRixvREFBU0E7Ozs7MERBQU0sOERBQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLakNaLHNCQUFTLDhEQUFDSixrREFBU0E7Z0JBQUNvQixhQUFhWjs7Ozs7MENBQWdCLDhEQUFDUTs7Ozs7Ozs7Ozs7QUFHM0Q7R0FsRU1iO0FBb0VOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ncm91cHMvcGFnZS50c3g/ZjU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRmluZEdyb3VwIGZyb20gJy4vRmluZEdyb3VwJztcbmltcG9ydCBHcm91cEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgR3JvdXBGcm9tIGZyb20gJy4vZ3JvdXBzX2Zvcm0nO1xuaW1wb3J0IEdyb3VwSW5mbyBmcm9tICcuL2NvbXBvbmVudC9Hcm91cEluZm8nO1xuXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2dyb3VwLCBzZXRHcm91cF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0R3JvdXAoIWdyb3VwKTtcbiAgfTtcblxuICBjb25zdCBncm91cHNJbmZvID0gW1xuICAgIHtcbiAgICAgIG5hbWUgOiBcIkZyaW5naWxsYSBGdXNjZSBFbGl0XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzIwMC8yMDBcIixcbiAgICAgIG1lbWJlcnM6IDIwLFxuICAgICAgdHlwZTogXCJQcm90ZWN0ZWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZSA6IFwiSW5jZXB0b3NcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tL2cvMjAwLzIwMFwiLFxuICAgICAgbWVtYmVyczogMTIsXG4gICAgICB0eXBlOiBcIlB1YmxpY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lIDogXCJWZXN0aWJ1bHVtXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzIwMC8yMDBcIixcbiAgICAgIG1lbWJlcnM6IDMsXG4gICAgICB0eXBlOiBcIlByb3RlY3RlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lIDogXCJWZXN0aWJ1bHVtXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzIwMC8yMDBcIixcbiAgICAgIG1lbWJlcnM6IDMsXG4gICAgICB0eXBlOiBcIlByb3RlY3RlZFwiXG4gICAgfVxuICBdO1xuXG4gIGludGVyZmFjZSBHcm91cEluZm9TdGF0ZXNQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogbnVtYmVyO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfVxuXG5cbiAgY29uc3QgYWRkR3JvdXBzSW5mbyA9IChncm91cEluZm86IEdyb3VwSW5mb1N0YXRlc1Byb3BzKSA9PlxuICB7XG4gICAgZ3JvdXBzSW5mby5wdXNoKGdyb3VwSW5mbyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPScgdGV4dC0zeGwgdGV4dC13aGl0ZSBtdC1bNDAwcHhdIHctZnVsbCBteC0xMCBtYXgtdy1bMTQwMHB4XSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWItWzMwcHhdIHctZnVsbCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItNSc+XG4gICAgICAgICAgICAgICAgICA8R3JvdXBCdXR0b24gbmFtZT0nRmluZCBHcm91cCcgYnRfc3RhdGU9e2dyb3VwfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9Hcm91cEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxHcm91cEJ1dHRvbiBuYW1lPSdDcmVhY3QgR3JvdXAnIGJ0X3N0YXRlPXshZ3JvdXB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L0dyb3VwQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Z3JvdXAgPyA8R3JvdXBGcm9tIC8+IDogPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Z3JvdXAgPyAgPEZpbmRHcm91cCBncm91cHNJbmZvcz17Z3JvdXBzSW5mb30vPiA6IDxkaXY+PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJGaW5kR3JvdXAiLCJHcm91cEJ1dHRvbiIsIkdyb3VwRnJvbSIsInBhZ2UiLCJncm91cCIsInNldEdyb3VwIiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImdyb3Vwc0luZm8iLCJuYW1lIiwiaW1hZ2UiLCJtZW1iZXJzIiwidHlwZSIsImFkZEdyb3Vwc0luZm8iLCJncm91cEluZm8iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnRfc3RhdGUiLCJvbkNsaWNrIiwiZ3JvdXBzSW5mb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/groups/page.tsx\n"));

/***/ })

});