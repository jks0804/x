webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/WindowManager/WindowManager.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/WindowManager.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _components_System_WindowManager_ProcessWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/WindowManager/ProcessWindow */ \"./components/System/WindowManager/ProcessWindow.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/WindowManager.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar WindowManager = function WindowManager() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_4__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  return __jsx(\"div\", {\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.windows,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, processes.map(function (_ref) {\n    var _ref$loader = _ref.loader,\n        App = _ref$loader.loader,\n        loadedAppOptions = _ref$loader.loadedAppOptions,\n        _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n        defaultWidth = _ref$loader$loaderOpt.width,\n        defaultHeight = _ref$loader$loaderOpt.height,\n        id = _ref.id,\n        icon = _ref.icon,\n        name = _ref.name,\n        bgColor = _ref.bgColor,\n        windowed = _ref.windowed,\n        maximized = _ref.maximized,\n        minimized = _ref.minimized,\n        lockAspectRatio = _ref.lockAspectRatio,\n        initialHeight = _ref.height,\n        initialWidth = _ref.width,\n        x = _ref.x,\n        y = _ref.y,\n        taskbarElement = _ref.taskbarElement,\n        launchElement = _ref.launchElement;\n    return __jsx(_components_System_WindowManager_ProcessWindow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, {\n      foreground: foreground,\n      getState: getState,\n      saveState: saveState,\n      foregroundId: foregroundId,\n      stackOrder: stackOrder,\n      processes: processes,\n      close: close,\n      maximize: maximize,\n      minimize: minimize,\n      position: position,\n      restore: restore,\n      size: size,\n      App: App,\n      loadedAppOptions: loadedAppOptions,\n      defaultWidth: defaultWidth,\n      defaultHeight: defaultHeight,\n      id: id,\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      windowed: windowed,\n      maximized: maximized,\n      minimized: minimized,\n      lockAspectRatio: lockAspectRatio,\n      initialHeight: initialHeight,\n      initialWidth: initialWidth,\n      x: x,\n      y: y,\n      taskbarElement: taskbarElement,\n      launchElement: launchElement\n    }, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }));\n  })));\n};\n\n_s(WindowManager, \"vqSOmbgcsS0muHXQd79uIIwU3o8=\");\n\n_c = WindowManager;\nWindowManager.whyDidYouRender = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(WindowManager));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"WindowManager\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLnRzeD9iNDcyIl0sIm5hbWVzIjpbIldpbmRvd01hbmFnZXIiLCJ1c2VDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwiZ2V0U3RhdGUiLCJzYXZlU3RhdGUiLCJzZXNzaW9uIiwiZm9yZWdyb3VuZElkIiwic3RhY2tPcmRlciIsIlByb2Nlc3NDb250ZXh0IiwicHJvY2Vzc2VzIiwiY2xvc2UiLCJtYXhpbWl6ZSIsIm1pbmltaXplIiwicG9zaXRpb24iLCJyZXN0b3JlIiwic2l6ZSIsInN0eWxlcyIsIndpbmRvd3MiLCJtYXAiLCJsb2FkZXIiLCJBcHAiLCJsb2FkZWRBcHBPcHRpb25zIiwibG9hZGVyT3B0aW9ucyIsImRlZmF1bHRXaWR0aCIsIndpZHRoIiwiZGVmYXVsdEhlaWdodCIsImhlaWdodCIsImlkIiwiaWNvbiIsIm5hbWUiLCJiZ0NvbG9yIiwid2luZG93ZWQiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZWQiLCJsb2NrQXNwZWN0UmF0aW8iLCJpbml0aWFsSGVpZ2h0IiwiaW5pdGlhbFdpZHRoIiwieCIsInkiLCJ0YXNrYmFyRWxlbWVudCIsImxhdW5jaEVsZW1lbnQiLCJ3aHlEaWRZb3VSZW5kZXIiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBOztBQUFBLG9CQU1oQ0Msd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FOc0I7QUFBQSxNQUVsQ0MsVUFGa0MsZUFFbENBLFVBRmtDO0FBQUEsTUFHbENDLFFBSGtDLGVBR2xDQSxRQUhrQztBQUFBLE1BSWxDQyxTQUprQyxlQUlsQ0EsU0FKa0M7QUFBQSx3Q0FLbENDLE9BTGtDO0FBQUEsTUFLdkJDLFlBTHVCLHVCQUt2QkEs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QkY7QUFBQSxHQURELENBREgsQ0FERixDQURGO0FBZ0VELENBakZEOztHQUFNekMsYTs7S0FBQUEsYTtBQW1GTkEsYUFBYSxDQUFDMEMsZUFBZCxHQUFnQyxJQUFoQztBQUVlLGtGQUFBQyxrREFBSSxDQUFDM0MsYUFBRCxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93TWFuYWdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IG1lbW8sIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IFByb2Nlc3NXaW5kb3cgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1Byb2Nlc3NXaW5kb3cnO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcblxuY29uc3QgV2luZG93TWFuYWdlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3dzfT5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHtwcm9jZXNzZXMubWFwKFxuICAgICAgICAgICh7XG4gICAgICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICAgICAgbG9hZGVyOiBBcHAsXG4gICAgICAgICAgICAgIGxvYWRlZEFwcE9wdGlvbnMsXG4gICAgICAgICAgICAgIGxvYWRlck9wdGlvbnM6IHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYmdDb2xvcixcbiAgICAgICAgICAgIHdpbmRvd2VkLFxuICAgICAgICAgICAgbWF4aW1pemVkLFxuICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWxXaWR0aCxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgICAgICBsYXVuY2hFbGVtZW50XG4gICAgICAgICAgfSkgPT5cbiAgICAgICAgICAgIDxQcm9jZXNzV2luZG93XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZCxcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZSxcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGUsXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZElkLFxuICAgICAgICAgICAgICAgIHN0YWNrT3JkZXIsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICAgICAgICAgIGNsb3NlLFxuICAgICAgICAgICAgICAgIG1heGltaXplLFxuICAgICAgICAgICAgICAgIG1pbmltaXplLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHJlc3RvcmUsXG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBBcHAsXG4gICAgICAgICAgICAgICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdEhlaWdodCxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYmdDb2xvcixcbiAgICAgICAgICAgICAgICB3aW5kb3dlZCxcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgICAgICBpbml0aWFsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaWR0aCxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuV2luZG93TWFuYWdlci53aHlEaWRZb3VSZW5kZXIgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFdpbmRvd01hbmFnZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/WindowManager.tsx\n");

/***/ })

})