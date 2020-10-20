webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/FileManager.tsx":
/*!*******************************************************!*\
  !*** ./components/System/FileManager/FileManager.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/FileSystem */ \"./contexts/FileSystem.tsx\");\n/* harmony import */ var _utils_filemanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/filemanager */ \"./utils/filemanager.ts\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/FileManager.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar FileManager = function FileManager(_ref) {\n  _s();\n\n  var directoryPath = _ref.path,\n      render = _ref.render,\n      _ref$details = _ref.details,\n      details = _ref$details === void 0 ? false : _ref$details,\n      onChange = _ref.onChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(directoryPath),\n      cwd = _useState[0],\n      cd = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      entries = _useState2[0],\n      setEntries = _useState2[1];\n\n  var fs = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__[\"FileContext\"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__[\"ProcessContext\"]),\n      load = _useContext.load,\n      open = _useContext.open,\n      restore = _useContext.restore;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__[\"SessionContext\"]),\n      foreground = _useContext2.foreground,\n      getState = _useContext2.getState;\n\n  var fileDropHandler = Object(_utils_events__WEBPACK_IMPORTED_MODULE_10__[\"useFileDrop\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dragEvent, file) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              load(file, getState({\n                name: file.name\n              }), dragEvent.target);\n              fs.writeFile(\"\".concat(cwd, \"/\").concat(file.name), file);\n              _context.t0 = setEntries;\n              _context.t1 = [];\n              _context.t2 = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(entries);\n              _context.next = 7;\n              return Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectoryEntry\"])(fs, cwd, file.name, details);\n\n            case 7:\n              _context.t3 = _context.sent;\n              _context.t4 = [_context.t3];\n              _context.t5 = _context.t1.concat.call(_context.t1, _context.t2, _context.t4);\n              (0, _context.t0)(_context.t5);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  var onDoubleClick = function onDoubleClick(_ref3) {\n    var path = _ref3.path,\n        url = _ref3.url,\n        _ref3$icon = _ref3.icon,\n        icon = _ref3$icon === void 0 ? '' : _ref3$icon,\n        _ref3$name = _ref3.name,\n        name = _ref3$name === void 0 ? '' : _ref3$name;\n    return function (event) {\n      console.log(event.currentTarget);\n      debugger;\n\n      if (path && !path.includes('.url') && (path === '..' || !Object(path__WEBPACK_IMPORTED_MODULE_5__[\"extname\"])(path))) {\n        cd(path === '..' ? Object(path__WEBPACK_IMPORTED_MODULE_5__[\"resolve\"])(cwd, '..') : path);\n      } else {\n        var processsId = open({\n          url: url || path || '',\n          icon: icon,\n          name: name\n        }, getState({\n          name: name\n        }), event.currentTarget);\n        restore(processsId, 'minimized');\n        foreground(processsId);\n      }\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectory\"])(fs, cwd, details, setEntries);\n    onChange === null || onChange === void 0 ? void 0 : onChange(cwd);\n  }, [fs, cwd]);\n  return __jsx(\"article\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, fileDropHandler, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }), render({\n    entries: entries,\n    onDoubleClick: onDoubleClick,\n    cwd: cwd\n  }));\n};\n\n_s(FileManager, \"3e1cDAFmQbjnmlx2WbgzGQvV57A=\", false, function () {\n  return [_utils_events__WEBPACK_IMPORTED_MODULE_10__[\"useFileDrop\"]];\n});\n\n_c = FileManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileManager);\n\nvar _c;\n\n$RefreshReg$(_c, \"FileManager\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXIudHN4PzFlMTUiXSwibmFtZXMiOlsiRmlsZU1hbmFnZXIiLCJkaXJlY3RvcnlQYXRoIiwicGF0aCIsInJlbmRlciIsImRldGFpbHMiLCJvbkNoYW5nZSIsInVzZVN0YXRlIiwiY3dkIiwiY2QiLCJlbnRyaWVzIiwic2V0RW50cmllcyIsImZzIiwidXNlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJsb2FkIiwib3BlbiIsInJlc3RvcmUiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsImZpbGVEcm9wSGFuZGxlciIsInVzZUZpbGVEcm9wIiwiZHJhZ0V2ZW50IiwiZmlsZSIsIm5hbWUiLCJ0YXJnZXQiLCJ3cml0ZUZpbGUiLCJnZXREaXJlY3RvcnlFbnRyeSIsIm9uRG91YmxlQ2xpY2siLCJ1cmwiLCJpY29uIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImluY2x1ZGVzIiwiZXh0bmFtZSIsInJlc29sdmUiLCJwcm9jZXNzc0lkIiwidXNlRWZmZWN0IiwiZ2V0RGlyZWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQW9DLEdBQUcsU0FBdkNBLFdBQXVDLE9BS3ZDO0FBQUE7O0FBQUEsTUFKRUMsYUFJRixRQUpKQyxJQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsMEJBRkpDLE9BRUk7QUFBQSxNQUZKQSxPQUVJLDZCQUZNLEtBRU47QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUNMLGFBQUQsQ0FEdEI7QUFBQSxNQUNHTSxHQURIO0FBQUEsTUFDUUMsRUFEUjs7QUFBQSxtQkFFMEJGLHNE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LEdBSFEsRUFHTixDQUFDSSxFQUFELEVBQUtKLEdBQUwsQ0FITSxDQUFUO0FBS0EsU0FDRSx3R0FBYWMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dsQixNQUFNLENBQUM7QUFBRU0sV0FBTyxFQUFQQSxPQUFGO0FBQVdvQixpQkFBYSxFQUFiQSxhQUFYO0FBQTBCdEIsT0FBRyxFQUFIQTtBQUExQixHQUFELENBRFQsQ0FERjtBQUtELENBbkREOztHQUFNUCxXO1VBV29Cc0IsMEQ7OztLQVhwQnRCLFc7QUFxRFNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBEaXJlY3RvcnlFbnRyeSxcbiAgRGlyZWN0b3J5RW50cnlEb3VibGVDbGljayxcbiAgRGlyZWN0b3J5VHlwZVxufSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcblxuaW1wb3J0IHsgZXh0bmFtZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0ZpbGVTeXN0ZW0nO1xuaW1wb3J0IHsgZ2V0RGlyZWN0b3J5LCBnZXREaXJlY3RvcnlFbnRyeSB9IGZyb20gJ0AvdXRpbHMvZmlsZW1hbmFnZXInO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmlsZURyb3AgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5cbmNvbnN0IEZpbGVNYW5hZ2VyOiBSZWFjdC5GQzxEaXJlY3RvcnlUeXBlPiA9ICh7XG4gIHBhdGg6IGRpcmVjdG9yeVBhdGgsXG4gIHJlbmRlcixcbiAgZGV0YWlscyA9IGZhbHNlLFxuICBvbkNoYW5nZVxufSkgPT4ge1xuICBjb25zdCBbY3dkLCBjZF0gPSB1c2VTdGF0ZShkaXJlY3RvcnlQYXRoKTtcbiAgY29uc3QgW2VudHJpZXMsIHNldEVudHJpZXNdID0gdXNlU3RhdGU8RGlyZWN0b3J5RW50cnlbXT4oW10pO1xuICBjb25zdCBmcyA9IHVzZUNvbnRleHQoRmlsZUNvbnRleHQpO1xuICBjb25zdCB7IGxvYWQsIG9wZW4sIHJlc3RvcmUgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCB7IGZvcmVncm91bmQsIGdldFN0YXRlIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3QgZmlsZURyb3BIYW5kbGVyID0gdXNlRmlsZURyb3AoYXN5bmMgKGRyYWdFdmVudCwgZmlsZSkgPT4ge1xuICAgIGxvYWQoZmlsZSwgZ2V0U3RhdGUoeyBuYW1lOiBmaWxlLm5hbWUgfSksIGRyYWdFdmVudC50YXJnZXQpO1xuICAgIGZzLndyaXRlRmlsZShgJHtjd2R9LyR7ZmlsZS5uYW1lfWAsIGZpbGUpO1xuICAgIHNldEVudHJpZXMoW1xuICAgICAgLi4uZW50cmllcyxcbiAgICAgIGF3YWl0IGdldERpcmVjdG9yeUVudHJ5KGZzLCBjd2QsIGZpbGUubmFtZSwgZGV0YWlscylcbiAgICBdKTtcbiAgfSk7XG4gIGNvbnN0IG9uRG91YmxlQ2xpY2sgPSAoe1xuICAgIHBhdGgsXG4gICAgdXJsLFxuICAgIGljb24gPSAnJyxcbiAgICBuYW1lID0gJydcbiAgfTogRGlyZWN0b3J5RW50cnlEb3VibGVDbGljaykgPT4gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldClcbiAgICBkZWJ1Z2dlclxuICAgIGlmIChwYXRoICYmICFwYXRoLmluY2x1ZGVzKCcudXJsJykgJiYgKHBhdGggPT09ICcuLicgfHwgIWV4dG5hbWUocGF0aCkpKSB7XG4gICAgICBjZChwYXRoID09PSAnLi4nID8gcmVzb2x2ZShjd2QsICcuLicpIDogcGF0aCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgcHJvY2Vzc3NJZCA9IG9wZW4oXG4gICAgICAgIHsgdXJsOiB1cmwgfHwgcGF0aCB8fCAnJywgaWNvbiwgbmFtZSB9LFxuICAgICAgICBnZXRTdGF0ZSh7IG5hbWUgfSksXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICk7XG4gICAgICByZXN0b3JlKHByb2Nlc3NzSWQsICdtaW5pbWl6ZWQnKTtcbiAgICAgIGZvcmVncm91bmQocHJvY2Vzc3NJZCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGlyZWN0b3J5KGZzLCBjd2QsIGRldGFpbHMsIHNldEVudHJpZXMpO1xuICAgIG9uQ2hhbmdlPy4oY3dkKTtcbiAgfSwgW2ZzLCBjd2RdKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHsuLi5maWxlRHJvcEhhbmRsZXJ9PlxuICAgICAge3JlbmRlcih7IGVudHJpZXMsIG9uRG91YmxlQ2xpY2ssIGN3ZCB9KX1cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlTWFuYWdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/FileManager/FileManager.tsx\n");

/***/ })

})