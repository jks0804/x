webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n}; // TODO: Refactor this to be more efficent and DRY\n\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterPosit4 = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(launchElement),\n      _getTargetCenterPosit5 = _getTargetCenterPosit4.x,\n      launchElementX = _getTargetCenterPosit5 === void 0 ? 0 : _getTargetCenterPosit5,\n      _getTargetCenterPosit6 = _getTargetCenterPosit4.y,\n      launchElementY = _getTargetCenterPosit6 === void 0 ? 0 : _getTargetCenterPosit6;\n\n  if (launchElementX === 0) {\n    launchElementX = window.innerWidth / 2;\n  }\n\n  if (launchElementY === 0) {\n    launchElementY = window.innerHeight / 2;\n  }\n\n  var baseTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  var maximizedExitTransform = {\n    scale: 0,\n    x: -(window.innerWidth / 2) + launchElementX,\n    y: -(window.innerHeight / 2) + launchElementY\n  }; // NOTES:\n  // - The main issue is that if I start at 400x400, then it's getting considered as 0x0\n  // - I need to look at what else is available with `delta` and such during the move function\n\n  initialX = Math.round(widthOffset + window.innerWidth * 0.5);\n  initialY = Math.round(heightOffset + window.innerHeight * 0.45);\n  console.log('initial', initialX, initialY);\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width\n    },\n    maximized: {\n      scale: 1,\n      // TODO: Save state on first load once positioned, then x/y will match and maximize will work\n      x: initialX === x ? 0 : -x,\n      y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"],\n      width: '100vw'\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY\n    },\n    maxmin: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY\n    }\n  };\n  return {\n    initial: baseTransform,\n    exit: animation === 'maximized' ? maximizedExitTransform : baseTransform,\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsIndpZHRoT2Zmc2V0IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0T2Zmc2V0IiwiZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24iLCJ0YXNrYmFyRWxlbWVudFgiLCJ0YXNrYmFyRWxlbWVudFkiLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYmFzZVRyYW5zZm9ybSIsInNjYWxlIiwibWF4aW1pemVkRXhpdFRyYW5zZm9ybSIsInJvdW5kIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGlvblZhcmlhbnRzIiwic3RhcnQiLCJtYXhpbWl6ZWQiLCJUQVNLQkFSX0hFSUdIVCIsIm1pbmltaXplZCIsIm1heG1pbiIsIk1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTIl0sIm1hcHBpbmdzIjoiQUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNyQ0MsYUFBVyxFQUFFLElBRHdCO0FBRXJDQyxn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QUFHVHJCLE9BQUMsRUFBRW1CLFlBQVksR0FBR0c7QUFIVCxLQWhCVDtBQXFCRmlCLFVBQU0sRUFBRTtBQUNOVixXQUFLLEVBQUUsQ0FERDtBQUVOeEIsT0FBQyxFQUFFLEVBQUVvQixNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBdEIsSUFBMkJMLGVBRnhCO0FBR05yQixPQUFDLEVBQUUsRUFBRXlCLE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQixDQUF2QixJQUE0Qkw7QUFIekI7QUFyQk4sR0FGSjtBQThCQSxTQUFPO0FBQ0x4QixXQUFPLEVBQUU4QixhQURKO0FBRUx0QixRQUFJLEVBQ0ZNLFNBQVMsS0FBSyxXQUFkLEdBQTRCa0Isc0JBQTVCLEdBQXFERixhQUhsRDtBQUlMM0IsV0FBTyxFQUFFaUMsaUJBQWlCLENBQUN0QixTQUFELENBSnJCO0FBS0xWLGNBQVUsRUFBRTtBQUNWTSxjQUFRLEVBQUVnQyxvRkFBbUNBO0FBRG5DO0FBTFAsR0FBUDtBQVNELENBbEZNIiwiZmlsZSI6Ii4vdXRpbHMvbW90aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgQW5pbWF0aW9uUHJvcHMsXG4gIFRyYW5zZm9ybVByb3BlcnRpZXNcbn0gZnJvbSAnZnJhbWVyLW1vdGlvbi90eXBlcy9tb3Rpb24vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNb3Rpb25Qcm9wcywgVGFyZ2V0QW5kVHJhbnNpdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBXaW5kb3dNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvbW90aW9uJztcblxuaW1wb3J0IHsgZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24gfSBmcm9tICdAL3V0aWxzL2VsZW1lbnRzJztcbmltcG9ydCB7XG4gIE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTLFxuICBUQVNLQkFSX0hFSUdIVFxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBkZXNrdG9wSWNvbkRyYWdTZXR0aW5ncyA9IHtcbiAgZHJhZ0VsYXN0aWM6IDAuMjUsXG4gIGRyYWdUcmFuc2l0aW9uOiB7IGJvdW5jZVN0aWZmbmVzczogNTAwLCBib3VuY2VEYW1waW5nOiAxNSB9LFxuICBkcmFnTW9tZW50dW06IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgZGVza3RvcEljb25Nb3Rpb25TZXR0aW5nczogTW90aW9uUHJvcHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbiAgdHJhbnNpdGlvbjogeyB5OiB7IHR5cGU6ICdzcHJpbmcnIH0gfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3M6IE1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIHRyYW5zaXRpb246IHsgeDogeyB0eXBlOiAnc3ByaW5nJyB9IH0sXG4gIGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9LFxuICAgIHg6IC0xMDBcbiAgfVxufTtcblxuLy8gVE9ETzogUmVmYWN0b3IgdGhpcyB0byBiZSBtb3JlIGVmZmljZW50IGFuZCBEUllcbmV4cG9ydCBjb25zdCB3aW5kb3dNb3Rpb25TZXR0aW5ncyA9ICh7XG4gIGluaXRpYWxYID0gMCxcbiAgaW5pdGlhbFkgPSAwLFxuICBhbmltYXRpb24gPSAnc3RhcnQnLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICB4LFxuICB5LFxuICB0YXNrYmFyRWxlbWVudCxcbiAgbGF1bmNoRWxlbWVudFxufTogV2luZG93TW90aW9uU2V0dGluZ3MpOiBNb3Rpb25Qcm9wcyA9PiB7XG4gIGNvbnN0IHdpZHRoT2Zmc2V0ID0gLU1hdGguZmxvb3Iod2lkdGggLyAyKTtcbiAgY29uc3QgaGVpZ2h0T2Zmc2V0ID0gLU1hdGguZmxvb3IoaGVpZ2h0IC8gMik7XG4gIGNvbnN0IHtcbiAgICB4OiB0YXNrYmFyRWxlbWVudFggPSAwLFxuICAgIHk6IHRhc2tiYXJFbGVtZW50WSA9IDBcbiAgfSA9IGdldFRhcmdldENlbnRlclBvc2l0aW9uKHRhc2tiYXJFbGVtZW50KTtcbiAgbGV0IHtcbiAgICB4OiBsYXVuY2hFbGVtZW50WCA9IDAsXG4gICAgeTogbGF1bmNoRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbihsYXVuY2hFbGVtZW50KTtcbiAgaWYgKGxhdW5jaEVsZW1lbnRYID09PSAwKSB7XG4gICAgbGF1bmNoRWxlbWVudFggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gIH1cbiAgaWYgKGxhdW5jaEVsZW1lbnRZID09PSAwKSB7XG4gICAgbGF1bmNoRWxlbWVudFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICB9XG4gIGNvbnN0IGJhc2VUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogd2lkdGhPZmZzZXQgKyBsYXVuY2hFbGVtZW50WCxcbiAgICB5OiBoZWlnaHRPZmZzZXQgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBtYXhpbWl6ZWRFeGl0VHJhbnNmb3JtOiBUcmFuc2Zvcm1Qcm9wZXJ0aWVzID0ge1xuICAgIHNjYWxlOiAwLFxuICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIGxhdW5jaEVsZW1lbnRYLFxuICAgIHk6IC0od2luZG93LmlubmVySGVpZ2h0IC8gMikgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICAvLyBOT1RFUzpcbiAgLy8gLSBUaGUgbWFpbiBpc3N1ZSBpcyB0aGF0IGlmIEkgc3RhcnQgYXQgNDAweDQwMCwgdGhlbiBpdCdzIGdldHRpbmcgY29uc2lkZXJlZCBhcyAweDBcbiAgLy8gLSBJIG5lZWQgdG8gbG9vayBhdCB3aGF0IGVsc2UgaXMgYXZhaWxhYmxlIHdpdGggYGRlbHRhYCBhbmQgc3VjaCBkdXJpbmcgdGhlIG1vdmUgZnVuY3Rpb25cbiAgaW5pdGlhbFggPSBNYXRoLnJvdW5kKHdpZHRoT2Zmc2V0ICsgKHdpbmRvdy5pbm5lcldpZHRoICogMC41KSk7XG4gIGluaXRpYWxZID0gTWF0aC5yb3VuZChoZWlnaHRPZmZzZXQgKyAod2luZG93LmlubmVySGVpZ2h0ICogMC40NSkpO1xuICBjb25zb2xlLmxvZygnaW5pdGlhbCcsIGluaXRpYWxYLCBpbml0aWFsWSk7XG4gIGNvbnN0IGFuaW1hdGlvblZhcmlhbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogQW5pbWF0aW9uUHJvcHMgJiBUYXJnZXRBbmRUcmFuc2l0aW9uO1xuICB9ID0ge1xuICAgIHN0YXJ0OiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIHg6IGluaXRpYWxYLFxuICAgICAgeTogaW5pdGlhbFksXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH0sXG4gICAgbWF4aW1pemVkOiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIC8vIFRPRE86IFNhdmUgc3RhdGUgb24gZmlyc3QgbG9hZCBvbmNlIHBvc2l0aW9uZWQsIHRoZW4geC95IHdpbGwgbWF0Y2ggYW5kIG1heGltaXplIHdpbGwgd29ya1xuICAgICAgeDogaW5pdGlhbFggPT09IHggPyAwIDogLXgsXG4gICAgICB5OiBpbml0aWFsWSA9PT0geSA/IDAgOiAteSxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQsXG4gICAgICB3aWR0aDogJzEwMHZ3J1xuICAgIH0sXG4gICAgbWluaW1pemVkOiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHg6IHdpZHRoT2Zmc2V0ICsgdGFza2JhckVsZW1lbnRYLFxuICAgICAgeTogaGVpZ2h0T2Zmc2V0ICsgdGFza2JhckVsZW1lbnRZXG4gICAgfSxcbiAgICBtYXhtaW46IHtcbiAgICAgIHNjYWxlOiAwLFxuICAgICAgeDogLSh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgdGFza2JhckVsZW1lbnRYLFxuICAgICAgeTogLSh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSArIHRhc2tiYXJFbGVtZW50WVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWw6IGJhc2VUcmFuc2Zvcm0sXG4gICAgZXhpdDpcbiAgICAgIGFuaW1hdGlvbiA9PT0gJ21heGltaXplZCcgPyBtYXhpbWl6ZWRFeGl0VHJhbnNmb3JtIDogYmFzZVRyYW5zZm9ybSxcbiAgICBhbmltYXRlOiBhbmltYXRpb25WYXJpYW50c1thbmltYXRpb25dLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EU1xuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})