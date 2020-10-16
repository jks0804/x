webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var foreground = _ref.foreground,\n      getState = _ref.getState,\n      saveState = _ref.saveState,\n      foregroundId = _ref.foregroundId,\n      stackOrder = _ref.stackOrder,\n      processes = _ref.processes,\n      close = _ref.close,\n      maximize = _ref.maximize,\n      minimize = _ref.minimize,\n      position = _ref.position,\n      restore = _ref.restore,\n      size = _ref.size,\n      App = _ref.App,\n      loadedAppOptions = _ref.loadedAppOptions,\n      defaultWidth = _ref.defaultWidth,\n      defaultHeight = _ref.defaultHeight,\n      id = _ref.id,\n      icon = _ref.icon,\n      name = _ref.name,\n      bgColor = _ref.bgColor,\n      windowed = _ref.windowed,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      lockAspectRatio = _ref.lockAspectRatio,\n      initialHeight = _ref.initialHeight,\n      initialWidth = _ref.initialWidth,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n\n  var _getState = getState({\n    id: id\n  }),\n      _getState$x = _getState.x,\n      previousX = _getState$x === void 0 ? 0 : _getState$x,\n      _getState$y = _getState.y,\n      previousY = _getState$y === void 0 ? 0 : _getState$y;\n\n  var windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var windowOptions = {\n    onMinimize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      // TODO: Allow restoring maximized. Fix max restore.\n      // if (maximized) restore(id, 'maximized');\n      minimize(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [id, stackOrder, processes, foreground, minimize]),\n    // Q: stackOrder, processes, foreground ?\n    onMaximize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    }, [maximized, restore, maximize, id]),\n    onClose: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      saveState({\n        id: id,\n        height: height,\n        width: width,\n        x: x,\n        y: y\n      });\n      close(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [id, stackOrder, processes, foreground, close, saveState, height, width, x, y]),\n    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return foreground(id);\n    }, [id, foreground]),\n    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    }, [foreground, taskbarElement]),\n    updatePosition: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return position(id);\n    }, [id, position]),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximized,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  var updateSize = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    return size(id);\n  }, [id, size]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_7__[\"windowMotionSettings\"])({\n    initialX: previousX,\n    initialY: previousY,\n    animation: minimized && 'minimized' || maximized && 'maximized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    icon: icon,\n    name: name,\n    bgColor: bgColor,\n    lockAspectRatio: lockAspectRatio,\n    updateSize: updateSize\n  }, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id\n  }, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProcessWindow, \"PYfwB4ObEj5JM3dc5BxnHiiCtHw=\");\n\n_c3 = ProcessWindow;\nProcessWindow.whyDidYouRender = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(ProcessWindow));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJQcm9jZXNzV2luZG93IiwiZm9yZWdyb3VuZCIsImdldFN0YXRlIiwic2F2ZVN0YXRlIiwiZm9yZWdyb3VuZElkIiwic3RhY2tPcmRlciIsInByb2Nlc3NlcyIsImNsb3NlIiwibWF4aW1pemUiLCJtaW5pbWl6ZSIsInBvc2l0aW9uIiwicmVzdG9yZSIsInNpemUiLCJBcHAiLCJsb2FkZWRBcHBPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImlkIiwiaWNvbiIsIm5hbWUiLCJiZ0NvbG9yIiwid2luZG93ZWQiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZWQiLCJsb2NrQXNwZWN0UmF0aW8iLCJpbml0aWFsSGVpZ2h0IiwiaW5pdGlhbFdpZHRoIiwieCIsInkiLCJ0YXNrYmFyRWxlbWVudCIsImxhdW5jaEVsZW1lbnQiLCJwcmV2aW91c1giLCJwcmV2aW91c1kiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiZ2V0TWF4RGltZW5zaW9ucyIsImhlaWdodCIsIndpZHRoIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJ1c2VDYWxsYmFjayIsImZvY3VzTmV4dFZpc2libGVXaW5kb3ciLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldmVudCIsInJlbGF0ZWRUYXJnZXQiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsInNsaWNlIiwicmV2ZXJzZSIsImluZGV4T2YiLCJ1cGRhdGVTaXplIiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0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LGNBWHVCO0FBWXZCQyxpQkFBYSxFQUFiQTtBQVp1QixHQUFELENBWDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEwQkdULFFBQVEsR0FDUCxNQUFDLE1BQUQ7QUFDRSxRQUFJLEVBQUVILElBRFI7QUFFRSxRQUFJLEVBQUVDLElBRlI7QUFHRSxXQUFPLEVBQUVDLE9BSFg7QUFJRSxtQkFBZSxFQUFFSSxlQUpuQjtBQUtFLGNBQVUsRUFBRStCO0FBTGQsS0FNTWYsYUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUUsTUFBQyxHQUFELHlGQUFTMUIsZ0JBQVQsRUFBK0IwQixhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkYsQ0FETyxHQVlQLE1BQUMsR0FBRDtBQUFLLE9BQUcsRUFBRXZCO0FBQVYsS0FBa0JILGdCQUFsQixFQUF3QzBCLGFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0Q0osQ0FERjtBQTJDRCxDQTNIRDs7R0FBTXhDLGE7O01BQUFBLGE7QUE2SE5BLGFBQWEsQ0FBQytELGVBQWQsR0FBZ0MsSUFBaEM7QUFFZSxrRkFBQUMsa0RBQUksQ0FBQ2hFLGFBQUQsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1Byb2Nlc3NXaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7XG4gIGJhc2VaaW5kZXgsXG4gIGZvcmVncm91bmRaaW5kZXgsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGZvY3VzTmV4dFZpc2libGVXaW5kb3csXG4gIGdldE1heERpbWVuc2lvbnNcbn0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB3aW5kb3dNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdXRpbHMvbW90aW9ucyc7XG5cbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93JykpO1xuXG5jb25zdCBQcm9jZXNzV2luZG93OiBSZWFjdC5GQzxhbnk+ID0gKHtcbiAgZm9yZWdyb3VuZCxcbiAgZ2V0U3RhdGUsXG4gIHNhdmVTdGF0ZSxcbiAgZm9yZWdyb3VuZElkLFxuICBzdGFja09yZGVyLFxuICBwcm9jZXNzZXMsXG4gIGNsb3NlLFxuICBtYXhpbWl6ZSxcbiAgbWluaW1pemUsXG4gIHBvc2l0aW9uLFxuICByZXN0b3JlLFxuICBzaXplLFxuICBBcHAsXG4gIGxvYWRlZEFwcE9wdGlvbnMsXG4gIGRlZmF1bHRXaWR0aCxcbiAgZGVmYXVsdEhlaWdodCxcbiAgaWQsXG4gIGljb24sXG4gIG5hbWUsXG4gIGJnQ29sb3IsXG4gIHdpbmRvd2VkLFxuICBtYXhpbWl6ZWQsXG4gIG1pbmltaXplZCxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBpbml0aWFsSGVpZ2h0LFxuICBpbml0aWFsV2lkdGgsXG4gIHgsXG4gIHksXG4gIHRhc2tiYXJFbGVtZW50LFxuICBsYXVuY2hFbGVtZW50XG59KSA9PiB7XG4gIGNvbnN0IHsgeDogcHJldmlvdXNYID0gMCwgeTogcHJldmlvdXNZID0gMCB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB3aW5kb3daaW5kZXggPVxuICAgIGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG4gIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0TWF4RGltZW5zaW9ucyhcbiAgICBpbml0aWFsV2lkdGgsXG4gICAgaW5pdGlhbEhlaWdodCxcbiAgICBkZWZhdWx0V2lkdGgsXG4gICAgZGVmYXVsdEhlaWdodCxcbiAgICBsb2NrQXNwZWN0UmF0aW9cbiAgKTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBBbGxvdyByZXN0b3JpbmcgbWF4aW1pemVkLiBGaXggbWF4IHJlc3RvcmUuXG4gICAgICAvLyBpZiAobWF4aW1pemVkKSByZXN0b3JlKGlkLCAnbWF4aW1pemVkJyk7XG4gICAgICBtaW5pbWl6ZShpZCk7XG4gICAgICBmb2N1c05leHRWaXNpYmxlV2luZG93KHN0YWNrT3JkZXIsIHByb2Nlc3NlcywgZm9yZWdyb3VuZCk7XG4gICAgfSwgW2lkLCBzdGFja09yZGVyLCBwcm9jZXNzZXMsIGZvcmVncm91bmQsIG1pbmltaXplXSksIC8vIFE6IHN0YWNrT3JkZXIsIHByb2Nlc3NlcywgZm9yZWdyb3VuZCA/XG4gICAgb25NYXhpbWl6ZTogdXNlQ2FsbGJhY2soKCkgPT5cbiAgICAgIG1heGltaXplZCA/IHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKSA6IG1heGltaXplKGlkKSwgW21heGltaXplZCwgcmVzdG9yZSwgbWF4aW1pemUsIGlkXSksXG4gICAgb25DbG9zZTogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2F2ZVN0YXRlKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0pO1xuICAgICAgY2xvc2UoaWQpO1xuICAgICAgZm9jdXNOZXh0VmlzaWJsZVdpbmRvdyhzdGFja09yZGVyLCBwcm9jZXNzZXMsIGZvcmVncm91bmQpO1xuICAgIH0sIFtpZCwgc3RhY2tPcmRlciwgcHJvY2Vzc2VzLCBmb3JlZ3JvdW5kLCBjbG9zZSwgc2F2ZVN0YXRlLCBoZWlnaHQsIHdpZHRoLCB4LCB5XSksXG4gICAgb25Gb2N1czogdXNlQ2FsbGJhY2soKCkgPT4gZm9yZWdyb3VuZChpZCksIFtpZCwgZm9yZWdyb3VuZF0pLFxuICAgIG9uQmx1cjogdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSwgW2ZvcmVncm91bmQsIHRhc2tiYXJFbGVtZW50XSksXG4gICAgdXBkYXRlUG9zaXRpb246IHVzZUNhbGxiYWNrKCgpID0+IHBvc2l0aW9uKGlkKSwgW2lkLCBwb3NpdGlvbl0pLFxuICAgIHpJbmRleDogd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKSxcbiAgICBtYXhpbWl6ZWQsXG4gICAgbWluaW1pemVkLFxuICAgIGlkLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aFxuICB9O1xuICBjb25zdCB1cGRhdGVTaXplID0gdXNlQ2FsbGJhY2soKCkgPT4gc2l6ZShpZCksIFtpZCwgc2l6ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGtleT17aWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZFdpbmRvd3N9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB6SW5kZXg6XG4gICAgICAgICAgZm9yZWdyb3VuZElkID09PSBpZFxuICAgICAgICAgICAgPyBmb3JlZ3JvdW5kWmluZGV4XG4gICAgICAgICAgICA6IHdpbmRvd09wdGlvbnMuekluZGV4LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9fVxuICAgICAgey4uLndpbmRvd01vdGlvblNldHRpbmdzKHtcbiAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCxcbiAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSxcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIChtaW5pbWl6ZWQgJiYgJ21pbmltaXplZCcpIHx8XG4gICAgICAgICAgKG1heGltaXplZCAmJiAnbWF4aW1pemVkJykgfHxcbiAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17dXBkYXRlU2l6ZX1cbiAgICAgICAgICB7Li4ud2luZG93T3B0aW9uc31cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgICA8L1dpbmRvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBcHAga2V5PXtpZH0gey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5Qcm9jZXNzV2luZG93LndoeURpZFlvdVJlbmRlciA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUHJvY2Vzc1dpbmRvdyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})