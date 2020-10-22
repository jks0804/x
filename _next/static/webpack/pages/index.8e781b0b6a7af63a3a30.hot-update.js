webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime.js */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name,\n      x = _ref.x,\n      y = _ref.y;\n  console.log(x, y);\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n\n  var getWebamp = function getWebamp() {\n    return document.getElementById('webamp');\n  };\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              if (onClose) webamp.onClose(onClose);\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(function () {\n    var webamp;\n\n    var tryDispose = function tryDispose() {\n      try {\n        webamp.dispose();\n      } catch (exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return tryDispose;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_7__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.winamp,\n    enableResizing: false,\n    enableUserSelectHack: false,\n    dragHandleClassName: \"draggable\",\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"touchControls\"],\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_6__[\"onTouchEventsOnly\"],\n    onFocus: onFocus,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = {\n  windowed: false\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiV2luYW1wIiwib25DbG9zZSIsIm9uTWluaW1pemUiLCJvbkZvY3VzIiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJtaW5pbWl6ZWQiLCJmaWxlIiwidXJsIiwibmFtZSIsIngiLCJ5IiwiY29uc29sZSIsImxvZyIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJnZXRXZWJhbXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZFdlYmFtcCIsIldlYmFtcENvbnN0cnVjdG9yIiwid2ViYW1wIiwid2ViYW1wT3B0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJjdXJyZW50IiwiY2xvc2VFcXVhbGl6ZXIiLCJyZW5kZXJXaGVuUmVhZHkiLCJhcHBlbmRFbGVtZW50IiwiZm9jdXMiLCJsb2FkVHJhY2tPclNraW4iLCJ1c2VFZmZlY3QiLCJ0cnlEaXNwb3NlIiwiZGlzcG9zZSIsImV4Y2VwdGlvbiIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJzdHlsZXMiLCJ3aW5hbXAiLCJ0b3VjaENvbnRyb2xzIiwib25Ub3VjaEV2ZW50c09ubHkiLCJmb2N1c09uRHJhZyIsInZpc2liaWxpdHkiLCJsb2FkZXJPcHRpb25zIiwid2luZG93ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQThCLEdBQUcsU0FBakNBLE1BQWlDLE9BU2pDO0FBQUE7O0FBQUEsTUFSSkMsT0FRSSxRQVJKQSxPQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsY0FLSSxRQUxKQSxjQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsdUJB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bnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Qcm9ncmFtcy9XaW5hbXAubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5pbXBvcnQgdHlwZSB7IFdlYmFtcFN0b3JlIH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1Byb2dyYW1zL3dpbmFtcCc7XG5cbmltcG9ydCB7IGFwcGVuZEVsZW1lbnQsIGZvY3VzT25EcmFnIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBjbG9zZUVxdWFsaXplcixcbiAgbG9hZFRyYWNrT3JTa2luLFxuICB0b3VjaENvbnRyb2xzLFxuICB3ZWJhbXBPcHRpb25zXG59IGZyb20gJ0AvdXRpbHMvd2luYW1wJztcbmltcG9ydCB7IG9uVG91Y2hFdmVudHNPbmx5IH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaW5hbXA6IFJlYWN0LkZDPEFwcENvbXBvbmVudD4gPSAoe1xuICBvbkNsb3NlLFxuICBvbk1pbmltaXplLFxuICBvbkZvY3VzLFxuICB1cGRhdGVQb3NpdGlvbixcbiAgekluZGV4LFxuICBtaW5pbWl6ZWQsXG4gIGZpbGU6IHsgdXJsID0gJycsIG5hbWUgPSAnJyB9ID0ge30sXG4gIHgsIHlcbn0pID0+IHtcbiAgY29uc29sZS5sb2coeCwgeSk7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBnZXRXZWJhbXAgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViYW1wJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGxvYWRXZWJhbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wQ29uc3RydWN0b3IgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyk7XG4gICAgY29uc3Qgd2ViYW1wID0gbmV3IFdlYmFtcENvbnN0cnVjdG9yKHdlYmFtcE9wdGlvbnMpIGFzIFdlYmFtcCAmIFdlYmFtcFN0b3JlO1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyRWxlbWVudCB9ID0gZWxlbWVudFJlZiBhcyB7XG4gICAgICBjdXJyZW50OiBIVE1MRWxlbWVudDtcbiAgICB9O1xuXG4gICAgaWYgKG9uQ2xvc2UpIHdlYmFtcC5vbkNsb3NlKG9uQ2xvc2UpO1xuICAgIGlmIChvbk1pbmltaXplKSB3ZWJhbXAub25NaW5pbWl6ZShvbk1pbmltaXplKTtcbiAgICBjbG9zZUVxdWFsaXplcih3ZWJhbXApO1xuICAgIGF3YWl0IHdlYmFtcC5yZW5kZXJXaGVuUmVhZHkoY29udGFpbmVyRWxlbWVudCk7XG4gICAgYXBwZW5kRWxlbWVudChjb250YWluZXJFbGVtZW50LCBnZXRXZWJhbXAoKSkuZm9jdXMoKTtcbiAgICBvbkZvY3VzKCk7XG4gICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcCwgdXJsLCBuYW1lKTtcblxuICAgIHJldHVybiB3ZWJhbXA7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgd2ViYW1wOiBXZWJhbXAgJiBXZWJhbXBTdG9yZTtcbiAgICBjb25zdCB0cnlEaXNwb3NlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2ViYW1wLmRpc3Bvc2UoKTtcbiAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAvKiBlc2xpbnQgbm8tZW1wdHk6IG9mZiAqL1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkV2ViYW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICB3ZWJhbXAgPSBsb2FkZWRXZWJhbXA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ5RGlzcG9zZTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2luYW1wfVxuICAgICAgZW5hYmxlUmVzaXppbmc9e2ZhbHNlfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImRyYWdnYWJsZVwiXG4gICAgICBjYW5jZWw9e3RvdWNoQ29udHJvbHN9XG4gICAgICBvbkRyYWc9e29uVG91Y2hFdmVudHNPbmx5fVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgc3R5bGU9e3sgekluZGV4LCB2aXNpYmlsaXR5OiBtaW5pbWl6ZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmFtcDtcblxuZXhwb3J0IGNvbnN0IGxvYWRlck9wdGlvbnMgPSB7XG4gIHdpbmRvd2VkOiBmYWxzZVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})