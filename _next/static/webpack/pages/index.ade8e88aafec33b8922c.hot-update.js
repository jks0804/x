webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var foreground = _ref.foreground,\n      getState = _ref.getState,\n      saveState = _ref.saveState,\n      foregroundId = _ref.foregroundId,\n      stackOrder = _ref.stackOrder,\n      processes = _ref.processes,\n      close = _ref.close,\n      maximize = _ref.maximize,\n      minimize = _ref.minimize,\n      position = _ref.position,\n      restore = _ref.restore,\n      size = _ref.size,\n      App = _ref.App,\n      loadedAppOptions = _ref.loadedAppOptions,\n      defaultWidth = _ref.defaultWidth,\n      defaultHeight = _ref.defaultHeight,\n      id = _ref.id,\n      icon = _ref.icon,\n      name = _ref.name,\n      bgColor = _ref.bgColor,\n      windowed = _ref.windowed,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      lockAspectRatio = _ref.lockAspectRatio,\n      initialHeight = _ref.initialHeight,\n      initialWidth = _ref.initialWidth,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n\n  var _getState = getState({\n    id: id\n  }),\n      _getState$x = _getState.x,\n      previousX = _getState$x === void 0 ? 0 : _getState$x,\n      _getState$y = _getState.y,\n      previousY = _getState$y === void 0 ? 0 : _getState$y;\n\n  var windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var windowOptions = {\n    onMinimize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      // TODO: Allow restoring maximized. Fix max restore.\n      // if (maximized) restore(id, 'maximized');\n      minimize(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [id]),\n    // Q: stackOrder, processes, foreground ?\n    onMaximize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    }, [id]),\n    onClose: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      saveState({\n        id: id,\n        height: height,\n        width: width,\n        x: x,\n        y: y\n      });\n      close(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [id]),\n    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return foreground(id);\n    }, [id]),\n    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    }, [id]),\n    updatePosition: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return position(id);\n    }, [id]),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximized,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  var updateSize = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    return size(id);\n  }, [id]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_7__[\"windowMotionSettings\"])({\n    initialX: previousX,\n    initialY: previousY,\n    animation: minimized && 'minimized' || maximized && 'maximized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    icon: icon,\n    name: name,\n    bgColor: bgColor,\n    lockAspectRatio: lockAspectRatio,\n    updateSize: updateSize\n  }, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id\n  }, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProcessWindow, \"PYfwB4ObEj5JM3dc5BxnHiiCtHw=\");\n\n_c3 = ProcessWindow;\nProcessWindow.whyDidYouRender = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(ProcessWindow));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJQcm9jZXNzV2luZG93IiwiZm9yZWdyb3VuZCIsImdldFN0YXRlIiwic2F2ZVN0YXRlIiwiZm9yZWdyb3VuZElkIiwic3RhY2tPcmRlciIsInByb2Nlc3NlcyIsImNsb3NlIiwibWF4aW1pemUiLCJtaW5pbWl6ZSIsInBvc2l0aW9uIiwicmVzdG9yZSIsInNpemUiLCJBcHAiLCJsb2FkZWRBcHBPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImlkIiwiaWNvbiIsIm5hbWUiLCJiZ0NvbG9yIiwid2luZG93ZWQiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZWQiLCJsb2NrQXNwZWN0UmF0aW8iLCJpbml0aWFsSGVpZ2h0IiwiaW5pdGlhbFdpZHRoIiwieCIsInkiLCJ0YXNrYmFyRWxlbWVudCIsImxhdW5jaEVsZW1lbnQiLCJwcmV2aW91c1giLCJwcmV2aW91c1kiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiZ2V0TWF4RGltZW5zaW9ucyIsImhlaWdodCIsIndpZHRoIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJ1c2VDYWxsYmFjayIsImZvY3VzTmV4dFZpc2libGVXaW5kb3ciLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldmVudCIsInJlbGF0ZWRUYXJnZXQiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsInNsaWNlIiwicmV2ZXJzZSIsImluZGV4T2YiLCJ1cGRhdGVTaXplIiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0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QUFBO0FBQUEsTUFRRSxNQUFDLEdBQUQseUZBQVMxQixnQkFBVCxFQUErQjBCLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSRixDQURPLEdBWVAsTUFBQyxHQUFEO0FBQUssT0FBRyxFQUFFdkI7QUFBVixLQUFrQkgsZ0JBQWxCLEVBQXdDMEIsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRDSixDQURGO0FBMkNELENBM0hEOztHQUFNeEMsYTs7TUFBQUEsYTtBQTZITkEsYUFBYSxDQUFDK0QsZUFBZCxHQUFnQyxJQUFoQztBQUVlLGtGQUFBQyxrREFBSSxDQUFDaEUsYUFBRCxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgd2luZG93c1ppbmRleExldmVsLFxuICB6aW5kZXhMZXZlbFNpemVcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZm9jdXNOZXh0VmlzaWJsZVdpbmRvdyxcbiAgZ2V0TWF4RGltZW5zaW9uc1xufSBmcm9tICdAL3V0aWxzL3dpbmRvd21hbmFnZXInO1xuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPGFueT4gPSAoe1xuICBmb3JlZ3JvdW5kLFxuICBnZXRTdGF0ZSxcbiAgc2F2ZVN0YXRlLFxuICBmb3JlZ3JvdW5kSWQsXG4gIHN0YWNrT3JkZXIsXG4gIHByb2Nlc3NlcyxcbiAgY2xvc2UsXG4gIG1heGltaXplLFxuICBtaW5pbWl6ZSxcbiAgcG9zaXRpb24sXG4gIHJlc3RvcmUsXG4gIHNpemUsXG4gIEFwcCxcbiAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgZGVmYXVsdFdpZHRoLFxuICBkZWZhdWx0SGVpZ2h0LFxuICBpZCxcbiAgaWNvbixcbiAgbmFtZSxcbiAgYmdDb2xvcixcbiAgd2luZG93ZWQsXG4gIG1heGltaXplZCxcbiAgbWluaW1pemVkLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIGluaXRpYWxIZWlnaHQsXG4gIGluaXRpYWxXaWR0aCxcbiAgeCxcbiAgeSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIGxhdW5jaEVsZW1lbnRcbn0pID0+IHtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1ggPSAwLCB5OiBwcmV2aW91c1kgPSAwIH0gPSBnZXRTdGF0ZSh7XG4gICAgaWRcbiAgfSk7XG4gIGNvbnN0IHdpbmRvd1ppbmRleCA9XG4gICAgYmFzZVppbmRleCArIHdpbmRvd3NaaW5kZXhMZXZlbCAqIHppbmRleExldmVsU2l6ZTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRNYXhEaW1lbnNpb25zKFxuICAgIGluaXRpYWxXaWR0aCxcbiAgICBpbml0aWFsSGVpZ2h0LFxuICAgIGRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0LFxuICAgIGxvY2tBc3BlY3RSYXRpb1xuICApO1xuICBjb25zdCB3aW5kb3dPcHRpb25zID0ge1xuICAgIG9uTWluaW1pemU6IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIC8vIFRPRE86IEFsbG93IHJlc3RvcmluZyBtYXhpbWl6ZWQuIEZpeCBtYXggcmVzdG9yZS5cbiAgICAgIC8vIGlmIChtYXhpbWl6ZWQpIHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKTtcbiAgICAgIG1pbmltaXplKGlkKTtcbiAgICAgIGZvY3VzTmV4dFZpc2libGVXaW5kb3coc3RhY2tPcmRlciwgcHJvY2Vzc2VzLCBmb3JlZ3JvdW5kKTtcbiAgICB9LCBbaWRdKSwgLy8gUTogc3RhY2tPcmRlciwgcHJvY2Vzc2VzLCBmb3JlZ3JvdW5kID9cbiAgICBvbk1heGltaXplOiB1c2VDYWxsYmFjaygoKSA9PlxuICAgICAgbWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpLCBbaWRdKSxcbiAgICBvbkNsb3NlOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBpZCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgICBmb2N1c05leHRWaXNpYmxlV2luZG93KHN0YWNrT3JkZXIsIHByb2Nlc3NlcywgZm9yZWdyb3VuZCk7XG4gICAgfSwgW2lkXSksXG4gICAgb25Gb2N1czogdXNlQ2FsbGJhY2soKCkgPT4gZm9yZWdyb3VuZChpZCksIFtpZF0pLFxuICAgIG9uQmx1cjogdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSwgW2lkXSksXG4gICAgdXBkYXRlUG9zaXRpb246IHVzZUNhbGxiYWNrKCgpID0+IHBvc2l0aW9uKGlkKSwgW2lkXSksXG4gICAgekluZGV4OiB3aW5kb3daaW5kZXggKyBzdGFja09yZGVyLnNsaWNlKCkucmV2ZXJzZSgpLmluZGV4T2YoaWQpLFxuICAgIG1heGltaXplZCxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG4gIGNvbnN0IHVwZGF0ZVNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiBzaXplKGlkKSwgW2lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAga2V5PXtpZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDpcbiAgICAgICAgICBmb3JlZ3JvdW5kSWQgPT09IGlkXG4gICAgICAgICAgICA/IGZvcmVncm91bmRaaW5kZXhcbiAgICAgICAgICAgIDogd2luZG93T3B0aW9ucy56SW5kZXgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH19XG4gICAgICB7Li4ud2luZG93TW90aW9uU2V0dGluZ3Moe1xuICAgICAgICBpbml0aWFsWDogcHJldmlvdXNYLFxuICAgICAgICBpbml0aWFsWTogcHJldmlvdXNZLFxuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHxcbiAgICAgICAgICAobWF4aW1pemVkICYmICdtYXhpbWl6ZWQnKSB8fFxuICAgICAgICAgICdzdGFydCcsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHRhc2tiYXJFbGVtZW50LFxuICAgICAgICBsYXVuY2hFbGVtZW50XG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7d2luZG93ZWQgPyAoXG4gICAgICAgIDxXaW5kb3dcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYmdDb2xvcj17YmdDb2xvcn1cbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgICB1cGRhdGVTaXplPXt1cGRhdGVTaXplfVxuICAgICAgICAgIHsuLi53aW5kb3dPcHRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEFwcCBrZXk9e2lkfSB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cblByb2Nlc3NXaW5kb3cud2h5RGlkWW91UmVuZGVyID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQcm9jZXNzV2luZG93KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})