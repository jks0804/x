webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: white;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n\\n.StartMenu_buttons__2EzaO {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 48px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,YAAA;AANJ;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;;AAiBA;EACE,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAfF;;AAkBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,WAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAlBF\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: white;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n}\\n\\n.menu {\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n}\\n\\n.buttons {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 48px;\\n  height: 300px; // TODO: Const like MenuView height\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLGlCQUFpQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcsNEJBQTRCLHlDQUF5Qyx3Q0FBd0Msd0NBQXdDLEdBQUcsK0JBQStCLHVCQUF1QixpQkFBaUIsWUFBWSxnQkFBZ0Isa0JBQWtCLHlDQUF5Qyx3Q0FBd0Msd0NBQXdDLEdBQUcsT0FBTyw4SUFBOEksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGtEQUFrRCwrQkFBK0IsWUFBWSx1QkFBdUIsY0FBYyxZQUFZLG9CQUFvQix3QkFBd0IsNEJBQTRCLHdDQUF3QyxzQ0FBc0MsbUJBQW1CLGtDQUFrQyxXQUFXLHNCQUFzQixxQkFBcUIsS0FBSyxlQUFlLHVJQUF1SSxhQUFhLCtCQUErQixPQUFPLEtBQUssR0FBRyxXQUFXLDBFQUEwRSx5REFBeUQsR0FBRyxjQUFjLHVCQUF1QixzQ0FBc0MsWUFBWSxrQkFBa0Isa0JBQWtCLGdIQUFnSCx5REFBeUQsR0FBRyw4QkFBOEIsdUNBQXVDLCtCQUErQixtQkFBbUIsdUJBQXVCLGlDQUFpQyxzQ0FBc0Msa0NBQWtDLDhCQUE4QixxQ0FBcUMsZ0NBQWdDLDJCQUEyQixrQ0FBa0MsOEJBQThCLGdNQUFnTSxvQkFBb0Isc0JBQXNCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsd0dBQXdHLDhCQUE4Qix3QkFBd0IscUJBQXFCO0FBQ3R5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUgc3ZnIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZTpob3ZlciBzdmcge1xcbiAgY29sb3I6ICM3NmI5ZWQ7XFxufVxcblxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuXFxuLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSw2QkFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0VBRUEsWUFBQTtBQU5KO0FBU0U7RUFDRSx1Q0FBQTtBQVBKO0FBY0k7RUFDRSxjQ2pDVztBRHFCakI7O0FBaUJBO0VBQ0Usb0NBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FBbEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL3ZhcmlhYmxlcyc7XFxuXFxuLnN0YXJ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJHN0YXJ0bWVudSwgd2lkdGgpO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBzdmcge1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICApO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0Q29sb3I7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgbWFwLWdldCgkdGFza2JhciwgYmFzZS1saWdodG5lc3MpLCA2MCUpO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKG1hcC1nZXQoJHRhc2tiYXIsIGJsdXIpICogMik7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogMzAwcHg7IC8vIFRPRE86IENvbnN0IGxpa2UgTWVudVZpZXcgaGVpZ2h0XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBiYXNlLWxpZ2h0bmVzcyksIDYwJSk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikgKiAyKTtcXG59XFxuXCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICM3NmI5ZWQ7XFxuJGhpZ2hsaWdodENvbG9yMjogcmdiKDIwMCwgMjAwLCAyMDApO1xcblxcbiR1aUNvbG9yMTogcmdiKDU1LCA1NSwgNTUpO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzdGFydFwiOiBcIlN0YXJ0TWVudV9zdGFydF9fbTJnZmVcIixcblx0XCJtZW51XCI6IFwiU3RhcnRNZW51X21lbnVfXzNyTUdEXCIsXG5cdFwiYnV0dG9uc1wiOiBcIlN0YXJ0TWVudV9idXR0b25zX18yRXphT1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})