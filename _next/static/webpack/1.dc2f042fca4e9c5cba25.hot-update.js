webpackHotUpdate_N_E(1,{

/***/ "./components/System/WindowManager/Window.tsx":
/*!****************************************************!*\
  !*** ./components/System/WindowManager/Window.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/WindowManager/Window.module.scss */ \"./styles/System/WindowManager/Window.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/WindowManager/TitleBar */ \"./components/System/WindowManager/TitleBar.tsx\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/window */ \"./utils/window.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$icon = _ref.icon,\n      icon = _ref$icon === void 0 ? '' : _ref$icon,\n      id = _ref.id,\n      _ref$name = _ref.name,\n      name = _ref$name === void 0 ? '' : _ref$name,\n      bgColor = _ref.bgColor,\n      onMaximize = _ref.onMaximize,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      zIndex = _ref.zIndex,\n      maximized = _ref.maximized,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 0 : _ref$height,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 0 : _ref$width;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_7__[\"SessionContext\"]),\n      foregroundId = _useContext.session.foregroundId;\n\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusResizableElementRef\"])(windowRef);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized, maximizeWindow, setMaximizeWindow]);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_6__[\"Rnd\"], {\n    ref: windowRef,\n    enableUserSelectHack: false,\n    className: \"\".concat(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window, \" \").concat(maximized ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximized : '', \" \").concat(foregroundId === id ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.foreground : ''),\n    dragHandleClassName: \"handle\",\n    resizeHandleClasses: Object(_utils_window__WEBPACK_IMPORTED_MODULE_5__[\"resizeHandleClasses\"])(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a),\n    cancel: \".cancel\",\n    size: {\n      height: maximizeWindow ? '100%' : height,\n      width: maximizeWindow ? '100%' : width\n    },\n    minHeight: 250,\n    minWidth: 250,\n    tabIndex: 0,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    enableResizing: !maximized,\n    disableDragging: maximized,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(_components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: icon,\n    name: name,\n    onMaximize: onMaximize,\n    onMinimize: onMinimize,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    style: {\n      backgroundColor: bgColor\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(Window, \"cZbKVZR2fV4PNMf2GPsWMoFZ4XE=\");\n\n_c = Window;\nWindow.whyDidYouRender = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cudHN4PzJhMGQiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJpY29uIiwiaWQiLCJuYW1lIiwiYmdDb2xvciIsIm9uTWF4aW1pemUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJ6SW5kZXgiLCJtYXhpbWl6ZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmRJZCIsInNlc3Npb24iLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1heGltaXplV2luZG93Iiwic2V0TWF4aW1pemVXaW5kb3ciLCJ1c2VFZmZlY3QiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwic3R5bGVzIiwid2luZG93IiwiZm9yZWdyb3VuZCIsInJlc2l6ZUhhbmRsZUNsYXNzZXMiLCJmb2N1c09uRHJhZyIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aHlEaWRZb3VSZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQWtCakM7QUFBQTs7QUFBQSxNQWpCSkMsUUFpQkksUUFqQkpBLFFBaUJJO0FBQUEsdUJBaEJKQyxJQWdCSTtBQUFBLE1BaEJKQSxJQWdCSSwwQkFoQkcsRUFnQkg7QUFBQSxNQWZKQyxFQWVJLFFBZkpBLEVBZUk7QUFBQSx1QkFkSkMsSUFjSTtBQUFBLE1BZEpBLElB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WDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLEVBaUNFO0FBQVMsYUFBUyxFQUFFd0Isc0ZBQU0sQ0FBQ0ssT0FBM0I7QUFBb0MsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVqQztBQUFuQixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFFBREgsQ0FqQ0YsQ0FERjtBQXVDRCxDQS9FRDs7R0FBTUQsTTs7S0FBQUEsTTtBQWlGTkEsTUFBTSxDQUFDdUMsZUFBUCxHQUF5QixJQUF6QjtBQUVldkMscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5cbmltcG9ydCBUaXRsZUJhciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvVGl0bGVCYXInO1xuaW1wb3J0IHsgZm9jdXNPbkRyYWcsIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHtcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgbWVtbywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVzaXplSGFuZGxlQ2xhc3NlcyB9IGZyb20gJ0AvdXRpbHMvd2luZG93JztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuXG5jb25zdCBXaW5kb3c6IFJlYWN0LkZDPEFwcENvbXBvbmVudD4gPSAoe1xuICBjaGlsZHJlbixcbiAgaWNvbiA9ICcnLFxuICBpZCxcbiAgbmFtZSA9ICcnLFxuICBiZ0NvbG9yLFxuICBvbk1heGltaXplLFxuICBvbk1pbmltaXplLFxuICBvbkNsb3NlLFxuICBvbkZvY3VzLFxuICBvbkJsdXIsXG4gIHVwZGF0ZVBvc2l0aW9uLFxuICB1cGRhdGVTaXplLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIHpJbmRleCxcbiAgbWF4aW1pemVkLFxuICBoZWlnaHQgPSAwLFxuICB3aWR0aCA9IDBcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHNlc3Npb246IHsgZm9yZWdyb3VuZElkIH1cbiAgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcbiAgY29uc3QgW21heGltaXplV2luZG93LCBzZXRNYXhpbWl6ZVdpbmRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYod2luZG93UmVmKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heGltaXplZCkge1xuICAgICAgc2V0TWF4aW1pemVXaW5kb3codHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtYXhpbWl6ZVdpbmRvdykge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gc2V0TWF4aW1pemVXaW5kb3coZmFsc2UpLFxuICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbiAgICAgICk7XG4gICAgfVxuICB9LCBbbWF4aW1pemVkLCBtYXhpbWl6ZVdpbmRvdywgc2V0TWF4aW1pemVXaW5kb3ddKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIHJlZj17d2luZG93UmVmfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMud2luZG93fSAke21heGltaXplZCA/IHN0eWxlcy5tYXhpbWl6ZWQgOiAnJ30gJHtcbiAgICAgICAgZm9yZWdyb3VuZElkID09PSBpZCA/IHN0eWxlcy5mb3JlZ3JvdW5kIDogJydcbiAgICAgIH1gfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICByZXNpemVIYW5kbGVDbGFzc2VzPXtyZXNpemVIYW5kbGVDbGFzc2VzKHN0eWxlcyl9XG4gICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgIHNpemU9e3tcbiAgICAgICAgaGVpZ2h0OiBtYXhpbWl6ZVdpbmRvdyA/ICcxMDAlJyA6IGhlaWdodCxcbiAgICAgICAgd2lkdGg6IG1heGltaXplV2luZG93ID8gJzEwMCUnIDogd2lkdGhcbiAgICAgIH19XG4gICAgICBtaW5IZWlnaHQ9ezI1MH1cbiAgICAgIG1pbldpZHRoPXsyNTB9XG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgb25SZXNpemVTdG9wPXt1cGRhdGVTaXplfVxuICAgICAgZW5hYmxlUmVzaXppbmc9eyFtYXhpbWl6ZWR9XG4gICAgICBkaXNhYmxlRHJhZ2dpbmc9e21heGltaXplZH1cbiAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgPlxuICAgICAgPFRpdGxlQmFyXG4gICAgICAgIGljb249e2ljb259XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uTWF4aW1pemU9e29uTWF4aW1pemV9XG4gICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemV9XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5XaW5kb3cud2h5RGlkWW91UmVuZGVyID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/Window.tsx\n");

/***/ })

})