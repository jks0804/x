(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      _getState$x = _getState.x,\n      previousX = _getState$x === void 0 ? 0 : _getState$x,\n      _getState$y = _getState.y,\n      previousY = _getState$y === void 0 ? 0 : _getState$y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var windowOptions = {\n    // TODO: Allow restoring maximized. Allow min when maxed with restore.\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: x,\n        y: y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_9__[\"windowMotionSettings\"])({\n    initialX: previousX,\n    initialY: previousY,\n    animation: minimized && 'minimized' || maximized && 'maximized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    icon: icon,\n    name: name,\n    bgColor: bgColor,\n    lockAspectRatio: lockAspectRatio,\n    updateSize: size(id)\n  }, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProcessWindow, \"/nMTEAAVdHGUbs0PPngxMaLeid4=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsIndpbmRvd09wdGlvbnMiLCJvbk1pbmltaXplIiwib25NYXhpbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwiZXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzbGljZSIsInJldmVyc2UiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJmaWx0ZXIiLCJzdGFja0lkIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU87QUFBQSxTQUFDLDZLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEZBQVI7QUFBQTtBQUFBLGNBQVEsMENBQVI7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFFTixJQUFNRSxZQUFZLEdBQUdDLDJEQUFVLEdBQUdDLG1FQUFrQixHQUFHQyxnRUFBdkQ7O0FBRUEsSUFBTUMsYUFBZ0MsR0FBRyxTQUFuQ0EsYUFBbUMsT0FvQm5DO0FBQUE7O0FBQUEseUJBbkJKQyxNQW1CSTtBQUFBLE1BbEJNQyxHQWtCTixlQWxCRkQsTUFrQkU7QUFBQSxNQWpCRkUsZ0JBaUJFLGVBakJGQSxnQkFpQkU7QUFBQSwwQ0FoQkZDLGFBZ0JFO0FBQUEsTUFoQnNCQyxZQWdCdEIseUJBaEJlQyxLQWdCZjtBQUFBLE1BaEI0Q0MsYUFnQjVDLHlCQWhCb0NDLE1BZ0JwQztBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYklDLGFBYUosUUFiSkYsTUFhSTtBQUFBLE1BWkpHLElBWUksUUFaSkEsSUFZSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BVkpDLGFBVUksUUFWSkEsYUFVSTtBQUFBLE1BVEpDLGVBU0ksUUFUSkEsZUFTSTtBQUFBLE1BUkpDLFNBUUksUUFSSkEsU0FR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dHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7XG4gIGJhc2VaaW5kZXgsXG4gIGZvcmVncm91bmRaaW5kZXgsXG4gIE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTLFxuICBNSUxMSVNFQ09ORFNfSU5fU0VDT05ELFxuICB3aW5kb3dzWmluZGV4TGV2ZWwsXG4gIHppbmRleExldmVsU2l6ZVxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROZXh0VmlzaWJsZVdpbmRvdywgZ2V0TWF4RGltZW5zaW9ucyB9IGZyb20gJ0AvdXRpbHMvd2luZG93bWFuYWdlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPFByb2Nlc3M+ID0gKHtcbiAgbG9hZGVyOiB7XG4gICAgbG9hZGVyOiBBcHAsXG4gICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICBsb2FkZXJPcHRpb25zOiB7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9XG4gIH0sXG4gIGJnQ29sb3IsXG4gIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgaWNvbixcbiAgaWQsXG4gIGxhdW5jaEVsZW1lbnQsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgbWF4aW1pemVkLFxuICBtaW5pbWl6ZWQsXG4gIG5hbWUsXG4gIHRhc2tiYXJFbGVtZW50LFxuICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICB3aW5kb3dlZCxcbiAgeCxcbiAgeVxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgZm9yZWdyb3VuZCxcbiAgICBnZXRTdGF0ZSxcbiAgICBzYXZlU3RhdGUsXG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBwcm9jZXNzZXMsXG4gICAgY2xvc2UsXG4gICAgbWF4aW1pemUsXG4gICAgbWluaW1pemUsXG4gICAgcG9zaXRpb24sXG4gICAgcmVzdG9yZSxcbiAgICBzaXplXG4gIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgW21heGltaXplV2luZG93LCBzZXRNYXhpbWl6ZVdpbmRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgeDogcHJldmlvdXNYID0gMCwgeTogcHJldmlvdXNZID0gMCB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgZGVmYXVsdFdpZHRoLFxuICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgbG9ja0FzcGVjdFJhdGlvXG4gICk7XG4gIGNvbnN0IHdpbmRvd09wdGlvbnMgPSB7XG4gICAgLy8gVE9ETzogQWxsb3cgcmVzdG9yaW5nIG1heGltaXplZC4gQWxsb3cgbWluIHdoZW4gbWF4ZWQgd2l0aCByZXN0b3JlLlxuICAgIG9uTWluaW1pemU6ICgpID0+IG1pbmltaXplKGlkKSxcbiAgICBvbk1heGltaXplOiAoKSA9PiAobWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpKSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiBmb3JlZ3JvdW5kKGlkKSxcbiAgICBvbkJsdXI6IChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRhc2tiYXJFbGVtZW50KSB7XG4gICAgICAgIGZvcmVncm91bmQoJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uKGlkKSxcbiAgICB6SW5kZXg6IHdpbmRvd1ppbmRleCArIHN0YWNrT3JkZXIuc2xpY2UoKS5yZXZlcnNlKCkuaW5kZXhPZihpZCksXG4gICAgbWF4aW1pemVkOiBtYXhpbWl6ZVdpbmRvdyxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9yZWdyb3VuZElkID09PSBpZCAmJiBtaW5pbWl6ZWQpIHtcbiAgICAgIGZvcmVncm91bmQoXG4gICAgICAgIGdldE5leHRWaXNpYmxlV2luZG93KFxuICAgICAgICAgIHByb2Nlc3NlcyxcbiAgICAgICAgICBzdGFja09yZGVyLmZpbHRlcigoc3RhY2tJZCkgPT4gc3RhY2tJZCAhPT0gaWQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghc3RhY2tPcmRlci5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGZvcmVncm91bmQoZ2V0TmV4dFZpc2libGVXaW5kb3cocHJvY2Vzc2VzLCBzdGFja09yZGVyKSk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZElkLCBtaW5pbWl6ZWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heGltaXplZCkge1xuICAgICAgc2V0TWF4aW1pemVXaW5kb3codHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtYXhpbWl6ZVdpbmRvdykge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gc2V0TWF4aW1pemVXaW5kb3coZmFsc2UpLFxuICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbiAgICAgICk7XG4gICAgfVxuICB9LCBbbWF4aW1pemVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgIGtleT17aWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZFdpbmRvd3N9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB6SW5kZXg6IGZvcmVncm91bmRJZCA9PT0gaWQgPyBmb3JlZ3JvdW5kWmluZGV4IDogd2luZG93T3B0aW9ucy56SW5kZXgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH19XG4gICAgICB7Li4ud2luZG93TW90aW9uU2V0dGluZ3Moe1xuICAgICAgICBpbml0aWFsWDogcHJldmlvdXNYLFxuICAgICAgICBpbml0aWFsWTogcHJldmlvdXNZLFxuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHwgKG1heGltaXplZCAmJiAnbWF4aW1pemVkJykgfHwgJ3N0YXJ0JyxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgIGxhdW5jaEVsZW1lbnRcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt3aW5kb3dlZCA/IChcbiAgICAgICAgPFdpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemUoaWQpfVxuICAgICAgICAgIHsuLi53aW5kb3dPcHRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ }),

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"];\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.min(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.floor(Math.min(maxHeight, height)),\n      width: Math.floor(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImZsb29yIiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJwcm9jZXNzZXMiLCJzdGFja09yZGVyIiwidmlzaWJsZVByb2Nlc3NJZCIsImZpbmQiLCJzdGFja0lkIiwicHJvY2VzcyIsImlkIiwibWluaW1pemVkIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QkMsS0FEOEIsRUFFOUJDLE1BRjhCLEVBTVE7QUFBQSxNQUh0Q0MsWUFHc0MsdUVBSHZCLENBR3VCO0FBQUEsTUFGdENDLGFBRXNDLHVFQUZ0QixDQUVzQjtBQUFBLE1BRHRDQyxlQUNzQyx1RUFEcEIsS0FDb0I7O0FBQ3RDLE1BQUlKLEtBQUssS0FBS0UsWUFBVixJQUEwQkQsTUFBTSxLQUFLRSxhQUF6QyxFQUF3RDtBQUN0RCxRQUFJRSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBdEI7QUFDQSxRQUFJQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQkMsK0RBQXJDOztBQUVBLFFBQUlOLGVBQUosRUFBcUI7QUFDbkIsVUFBTU8sa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFULEVBQW1CTCxLQUFuQixLQUE2QkMsTUFBTSxHQUFHRCxLQUF0QyxDQUEzQjs7QUFFQSxVQUFJVyxrQkFBa0IsR0FBR0gsU0FBekIsRUFBb0M7QUFDbENILGdCQUFRLEdBQUdHLFNBQVMsSUFBSVAsTUFBTSxHQUFHRCxLQUFiLENBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xRLGlCQUFTLEdBQUdHLGtCQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPO0FBQ0xWLFlBQU0sRUFBRVcsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxTQUFULEVBQW9CUCxNQUFwQixDQUFYLENBREg7QUFFTEQsV0FBSyxFQUFFWSxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJMLEtBQW5CLENBQVg7QUFGRixLQUFQO0FBSUQ7O0FBRUQsU0FBTztBQUFFQyxVQUFNLEVBQU5BLE1BQUY7QUFBVUQsU0FBSyxFQUFMQTtBQUFWLEdBQVA7QUFDRCxDQTVCTTtBQThCQSxJQUFNZSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQ2xDQyxTQURrQyxFQUVsQ0MsVUFGa0MsRUFHdkI7QUFDWCxNQUFNQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUN2Q0osU0FBUyxDQUFDRyxJQUFWLENBQWUsVUFBQ0UsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlRixPQUFmLElBQTBCLENBQUNDLE9BQU8sQ0FBQ0UsU0FBaEQ7QUFBQSxLQUFmLENBRHVDO0FBQUEsR0FBaEIsQ0FBekI7QUFJQSxTQUFPTCxnQkFBZ0IsSUFBSSxFQUEzQjtBQUNELENBVE0iLCJmaWxlIjoiLi91dGlscy93aW5kb3dtYW5hZ2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9jZXNzZXMgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2Nlc3NtYW5hZ2VyJztcblxuaW1wb3J0IHsgVEFTS0JBUl9IRUlHSFQgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhEaW1lbnNpb25zID0gKFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgZGVmYXVsdFdpZHRoID0gMCxcbiAgZGVmYXVsdEhlaWdodCA9IDAsXG4gIGxvY2tBc3BlY3RSYXRpbyA9IGZhbHNlXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gPT4ge1xuICBpZiAod2lkdGggPT09IGRlZmF1bHRXaWR0aCAmJiBoZWlnaHQgPT09IGRlZmF1bHRIZWlnaHQpIHtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQ7XG5cbiAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICBjb25zdCBhc3BlY3RMb2NrZWRIZWlnaHQgPSBNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpICogKGhlaWdodCAvIHdpZHRoKTtcblxuICAgICAgaWYgKGFzcGVjdExvY2tlZEhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICBtYXhXaWR0aCA9IG1heEhlaWdodCAvIChoZWlnaHQgLyB3aWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhIZWlnaHQgPSBhc3BlY3RMb2NrZWRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogTWF0aC5mbG9vcihNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCkpLFxuICAgICAgd2lkdGg6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

}]);