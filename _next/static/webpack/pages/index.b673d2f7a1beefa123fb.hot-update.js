webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/MenuView.tsx":
/*!****************************************************!*\
  !*** ./components/System/FileManager/MenuView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_FileManager_MenuView_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/FileManager/MenuView.module.scss */ \"./styles/System/FileManager/MenuView.module.scss\");\n/* harmony import */ var _styles_System_FileManager_MenuView_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_FileManager_MenuView_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Icon */ \"./components/System/Icon.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/MenuView.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DirectoryMenu = function DirectoryMenu(_ref) {\n  var entries = _ref.entries,\n      onDoubleClick = _ref.onDoubleClick;\n  return __jsx(\"ol\", {\n    className: _styles_System_FileManager_MenuView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuView,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].li, {\n      key: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }, __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: _styles_System_FileManager_MenuView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuIcon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, __jsx(_components_System_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      src: icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    })), __jsx(\"figcaption\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, name)));\n  }));\n};\n\n_c = DirectoryMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcudHN4Pzc4YzkiXSwibmFtZXMiOlsiRGlyZWN0b3J5TWVudSIsImVudHJpZXMiLCJvbkRvdWJsZUNsaWNrIiwic3R5bGVzIiwibWVudVZpZXciLCJtYXAiLCJpY29uIiwibmFtZSIsInBhdGgiLCJ1cmwiLCJtZW51SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBOztBQUVBLElBQU1BLGFBQXNDLEdBQUcsU0FBekNBLGFBQXlDLE9BR3pDO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsYUFDSSxRQURKQSxhQUNJO0FBQ0osU0FDRTtBQUFJLGFBQVMsRUFBRUMsc0ZBQU0sQ0FBQ0MsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLFFBQWVDLElBQWYsU0FBZUEsSUFBZjtBQUFBLFFBQXFCQyxHQUFyQixTQUFxQkEsR0FBckI7QUFBQSxXQUNYLE1BQUMsb0RBQUQsQ0FBUSxFQUFSO0FBQVcsU0FBRyxFQUFFRCxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFTCxzRkFBTSxDQUFDTyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrREFBRDtBQUFNLFNBQUcsRUFBRUosSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUMsSUFBYixDQUpGLENBREYsQ0FEVztBQUFBLEdBQVosQ0FESCxDQURGO0FBY0QsQ0FsQkQ7O0tBQU1QLGE7QUFvQlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeVZpZXcgfSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcblxuaW1wb3J0IEljb24gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9JY29uJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBEaXJlY3RvcnlNZW51OiBSZWFjdC5GQzxEaXJlY3RvcnlWaWV3PiA9ICh7XG4gIGVudHJpZXMsXG4gIG9uRG91YmxlQ2xpY2tcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8b2wgY2xhc3NOYW1lPXtzdHlsZXMubWVudVZpZXd9PlxuICAgICAge2VudHJpZXMubWFwKCh7IGljb24sIG5hbWUsIHBhdGgsIHVybCB9KSA9PiAoXG4gICAgICAgIDxtb3Rpb24ubGkga2V5PXtwYXRofT5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn0+XG4gICAgICAgICAgICAgIDxJY29uIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e25hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICkpfVxuICAgIDwvb2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3RvcnlNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/FileManager/MenuView.tsx\n");

/***/ })

})