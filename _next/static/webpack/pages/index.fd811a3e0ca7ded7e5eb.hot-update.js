webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/MenuView.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/FileManager/MenuView.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".MenuView_menuView__p_VbS {\\n  padding-top: 7px;\\n  padding-right: 10px;\\n  position: absolute;\\n  bottom: 0;\\n  left: 48px;\\n  width: 227px;\\n  height: 300px;\\n}\\n.MenuView_menuView__p_VbS li {\\n  color: white;\\n  padding: 2px;\\n}\\n.MenuView_menuView__p_VbS li figure {\\n  display: flex;\\n  align-items: center;\\n  font-size: 13px;\\n}\\n.MenuView_menuView__p_VbS li figure figcaption {\\n  padding-left: 7px;\\n}\\n.MenuView_menuView__p_VbS li:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.MenuView_menuView__p_VbS li:hover svg {\\n  color: #76b9ed;\\n}\\n\\n.MenuView_menuIcon__3lY0F {\\n  background-color: #1d8be0;\\n  width: 32px;\\n  height: 32px;\\n}\\n.MenuView_menuIcon__3lY0F img {\\n  width: 32px;\\n  height: 32px;\\n  padding: 5px;\\n  -webkit-filter: drop-shadow(0px 0px 1px black);\\n          filter: drop-shadow(0px 0px 1px black);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/FileManager/MenuView.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,gBAAA;EACA,mBAAA;EAEA,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,YAAA;EACA,aAAA;AANF;AAQE;EACE,YAAA;EACA,YAAA;AANJ;AAQI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AANN;AAQM;EACE,iBAAA;AANR;AAUI;EACE,uCAAA;AARN;AAeM;EACE,cCvCS;AD0BjB;;AAmBA;EACE,yBAAA;EACA,WAAA;EACA,YAAA;AAhBF;AAkBE;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,8CAAA;UAAA,sCAAA;AAhBJ\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n// TODO: Dimensions and position should not be part of the MenuView. All View's should be more generic. Pass class along?\\n\\n.menuView {\\n  padding-top: 7px;\\n  padding-right: 10px;\\n\\n  position: absolute;\\n  bottom: 0;\\n  left: 48px; // TODO: Width of button bar\\n\\n  width: 227px;\\n  height: 300px;\\n\\n  li {\\n    color: white;\\n    padding: 2px;\\n\\n    figure {\\n      display: flex;\\n      align-items: center;\\n      font-size: 13px;\\n\\n      figcaption {\\n        padding-left: 7px;\\n      }\\n    }\\n\\n    &:hover {\\n      background-color: hsla(\\n        0,\\n        0%,\\n        map-get($taskbar, hover-lightness),\\n        map-get($taskbar, opacity)\\n      );\\n  \\n      svg {\\n        color: $highlightColor;\\n      }\\n    }\\n  }\\n}\\n\\n.menuIcon {\\n  background-color: darken($highlightColor, 20%);\\n  width: 32px;\\n  height: 32px;\\n\\n  img {\\n    width: 32px;\\n    height: 32px;\\n    padding: 5px;\\n    filter: drop-shadow(0px 0px 1px black);\\n  }\\n}\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"menuView\": \"MenuView_menuView__p_VbS\",\n\t\"menuIcon\": \"MenuView_menuIcon__3lY0F\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldy5tb2R1bGUuc2Nzcz8xMDk3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4QkFBOEIscUJBQXFCLHdCQUF3Qix1QkFBdUIsY0FBYyxlQUFlLGlCQUFpQixrQkFBa0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLGlCQUFpQixHQUFHLHVDQUF1QyxrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxzQ0FBc0MsNENBQTRDLEdBQUcsMENBQTBDLG1CQUFtQixHQUFHLCtCQUErQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixtREFBbUQsbURBQW1ELEdBQUcsT0FBTyxpSkFBaUosV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxrREFBa0QsK0JBQStCLDRJQUE0SSxxQkFBcUIsd0JBQXdCLHlCQUF5QixjQUFjLGVBQWUsZ0RBQWdELGtCQUFrQixVQUFVLG1CQUFtQixtQkFBbUIsZ0JBQWdCLHNCQUFzQiw0QkFBNEIsd0JBQXdCLHNCQUFzQiw0QkFBNEIsU0FBUyxPQUFPLGlCQUFpQixtSkFBbUosaUJBQWlCLGlDQUFpQyxTQUFTLE9BQU8sS0FBSyxHQUFHLGVBQWUsbURBQW1ELGdCQUFnQixpQkFBaUIsV0FBVyxrQkFBa0IsbUJBQW1CLG1CQUFtQiw2Q0FBNkMsS0FBSyxHQUFHLDRCQUE0Qix1Q0FBdUMsK0JBQStCLG1CQUFtQix1QkFBdUIsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyw4QkFBOEIsZ01BQWdNLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qix3R0FBd0csOEJBQThCLHdCQUF3QixxQkFBcUI7QUFDeHlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5NZW51Vmlld19tZW51Vmlld19fcF9WYlMge1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA0OHB4O1xcbiAgd2lkdGg6IDIyN3B4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiUyBsaSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbi5NZW51Vmlld19tZW51Vmlld19fcF9WYlMgbGkgZmlndXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uTWVudVZpZXdfbWVudVZpZXdfX3BfVmJTIGxpIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIHBhZGRpbmctbGVmdDogN3B4O1xcbn1cXG4uTWVudVZpZXdfbWVudVZpZXdfX3BfVmJTIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XFxuLk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiUyBsaTpob3ZlciBzdmcge1xcbiAgY29sb3I6ICM3NmI5ZWQ7XFxufVxcblxcbi5NZW51Vmlld19tZW51SWNvbl9fM2xZMEYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGJlMDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG4uTWVudVZpZXdfbWVudUljb25fXzNsWTBGIGltZyB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDFweCBibGFjayk7XFxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggYmxhY2spO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7QUFORjtBQVFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFOSjtBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5OO0FBUU07RUFDRSxpQkFBQTtBQU5SO0FBVUk7RUFDRSx1Q0FBQTtBQVJOO0FBZU07RUFDRSxjQ3ZDUztBRDBCakI7O0FBbUJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCRjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUFoQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG4vLyBUT0RPOiBEaW1lbnNpb25zIGFuZCBwb3NpdGlvbiBzaG91bGQgbm90IGJlIHBhcnQgb2YgdGhlIE1lbnVWaWV3LiBBbGwgVmlldydzIHNob3VsZCBiZSBtb3JlIGdlbmVyaWMuIFBhc3MgY2xhc3MgYWxvbmc/XFxuXFxuLm1lbnVWaWV3IHtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNDhweDsgLy8gVE9ETzogV2lkdGggb2YgYnV0dG9uIGJhclxcblxcbiAgd2lkdGg6IDIyN3B4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gIGxpIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuXFxuICAgIGZpZ3VyZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG5cXG4gICAgICBmaWdjYXB0aW9uIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgICAgMCxcXG4gICAgICAgIDAlLFxcbiAgICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICAgKTtcXG4gIFxcbiAgICAgIHN2ZyB7XFxuICAgICAgICBjb2xvcjogJGhpZ2hsaWdodENvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMjAlKTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMXB4IGJsYWNrKTtcXG4gIH1cXG59XCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICM3NmI5ZWQ7XFxuJGhpZ2hsaWdodENvbG9yMjogcmdiKDIwMCwgMjAwLCAyMDApO1xcblxcbiR1aUNvbG9yMTogcmdiKDU1LCA1NSwgNTUpO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZW51Vmlld1wiOiBcIk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiU1wiLFxuXHRcIm1lbnVJY29uXCI6IFwiTWVudVZpZXdfbWVudUljb25fXzNsWTBGXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/MenuView.module.scss\n");

/***/ })

})