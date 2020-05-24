webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"red\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      homeTeam = _useState2[0],\n      setHomeTeam = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"blue\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      awayTeam = _useState3[0],\n      setAwayTeam = _useState3[1];\n\n  console.log(lineupData);\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  console.log(lineupData);\n\n  var getStartXI = function getStartXI(startXI, team) {\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          team.squad.gk = item;\n          break;\n\n        case \"D\":\n          team.squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.df, item);\n          break;\n\n        case \"M\":\n          team.squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.cm, item);\n          break;\n\n        case \"F\":\n          team.squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return team;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setHomeTeam(getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI, homeTeam));\n    setAwayTeam(getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(lineupData.response).startXI, awayTeam));\n  }, []);\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\",\n    homeTeam: homeTeam,\n    awayTeam: awayTeam,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"ycRpk6rrGzLNB/z6K7cV4JlARq4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVRlYW0iLCJzZXRIb21lVGVhbSIsImF3YXlUZWFtIiwic2V0QXdheVRlYW0iLCJjb25zb2xlIiwibG9nIiwibGluZXVwVGVtcERhdGEiLCJnZXRTdGFydFhJIiwic3RhcnRYSSIsInRlYW0iLCJmb3JFYWNoIiwiaXRlbSIsInBsYXllciIsInBvcyIsInNxdWFkIiwiZ2siLCJkZiIsImNvbmNhdCIsImNtIiwiZnciLCJ1c2VFZmZlY3QiLCJoZWFkIiwicmVzcG9uc2UiLCJsYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQVY7QUFBQSxHQUFOLENBQVosQ0FEWDtBQUFBLE1BQzFCQSxVQUQwQjtBQUFBLE1BQ2RDLGFBRGM7O0FBQUEsbUJBRURKLHNEQUFRLENBQUM7QUFBQyxhQUFTLEtBQVY7QUFBaUIsYUFBUztBQUFFLFlBQU0sRUFBUjtBQUFZLFlBQU0sRUFBbEI7QUFBc0IsWUFBTSxFQUE1QjtBQUFnQyxZQUFNO0FBQXRDO0FBQTFCLEdBQUQsQ0FGUDtBQUFBLE1BRTFCSyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHRE4sc0RBQVEsQ0FBQztBQUFDLGFBQVMsTUFBVjtBQUFrQixhQUFTO0FBQUUsWUFBTSxFQUFSO0FBQVksWUFBTSxFQUFsQjtBQUFzQixZQUFNLEVBQTVCO0FBQWdDLFlBQU07QUFBdEM7QUFBM0IsR0FBRCxDQUhQO0FBQUEsTUFHMUJPLFFBSDBCO0FBQUEsTUFHaEJDLFdBSGdCOztBQUlqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlQLFVBQVo7O0FBQ0EsTUFBSUEsVUFBVSxLQUFLLElBQW5CLEVBQXdCO0FBQ3BCQyxpQkFBYSxDQUFDTyw2REFBRCxDQUFiO0FBQ0g7O0FBQ0RGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaOztBQUNBLE1BQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUNsQ0MseURBQU8sQ0FBQ0YsT0FBRCxFQUFVLFVBQUFHLElBQUksRUFBSTtBQUNyQixjQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsR0FBbkI7QUFDSSxhQUFLLEdBQUw7QUFDSUosY0FBSSxDQUFDSyxLQUFMLENBQVdDLEVBQVgsR0FBZ0JKLElBQWhCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGNBQUksQ0FBQ0ssS0FBTCxDQUFXRSxFQUFYLEdBQWdCQyxvREFBTSxDQUFDUixJQUFJLENBQUNLLEtBQUwsQ0FBV0UsRUFBWixFQUFnQkwsSUFBaEIsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsY0FBSSxDQUFDSyxLQUFMLENBQVdJLEVBQVgsR0FBZ0JELG9EQUFNLENBQUNSLElBQUksQ0FBQ0ssS0FBTCxDQUFXSSxFQUFaLEVBQWdCUCxJQUFoQixDQUF0QjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixjQUFJLENBQUNLLEtBQUwsQ0FBV0ssRUFBWCxHQUFnQkYsb0RBQU0sQ0FBQ1IsSUFBSSxDQUFDSyxLQUFMLENBQVdLLEVBQVosRUFBZ0JSLElBQWhCLENBQXRCO0FBQ0E7O0FBQ0o7QUFDSTtBQWRSO0FBZ0JILEtBakJNLENBQVA7QUFrQkEsV0FBT0YsSUFBUDtBQUNILEdBcEJEOztBQXNCQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1puQixlQUFXLENBQUNNLFVBQVUsQ0FBQ2Msa0RBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ3dCLFFBQVosQ0FBSixDQUEwQmQsT0FBM0IsRUFBb0NSLFFBQXBDLENBQVgsQ0FBWDtBQUNBRyxlQUFXLENBQUNJLFVBQVUsQ0FBQ2dCLGtEQUFJLENBQUN6QixVQUFVLENBQUN3QixRQUFaLENBQUosQ0FBMEJkLE9BQTNCLEVBQW9DTixRQUFwQyxDQUFYLENBQVg7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsU0FDSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFHLE9BRFg7QUFFSSxTQUFLLEVBQUcsZUFGWjtBQUdJLFdBQU8sRUFBRyxTQUhkO0FBSUksWUFBUSxFQUFHRixRQUpmO0FBS0ksWUFBUSxFQUFHRSxRQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBOUNEOztHQUFNVCxhO1VBQzJDRyx1RDs7O0tBRDNDSCxhO0FBK0NTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRml4dHVyZUxpbmV1cC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBoZWFkIGZyb20gJ2xvZGFzaC9oZWFkJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICdsb2Rhc2gvY29uY2F0J1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnXG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCdcbmltcG9ydCBTb2NjZXJMaW5lVXAgZnJvbSAncmVhY3Qtc29jY2VyLWxpbmV1cCdcbmltcG9ydCB7bGluZXVwVGVtcERhdGF9IGZyb20gJy4uL3RlbXAvdGVtcERhdGEnXG5cbmNvbnN0IEZpeHR1cmVMaW5ldXAgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgY29uc3QgW2xpbmV1cERhdGEsIHNldExpbmV1cERhdGFdID0gdXNlU3RhdGUodXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGluZXVwRGF0YSkpXG4gICAgY29uc3QgW2hvbWVUZWFtLCBzZXRIb21lVGVhbV0gPSB1c2VTdGF0ZSh7XCJjb2xvclwiOiBcInJlZFwiLCBcInNxdWFkXCI6IHsgXCJna1wiOiB7fSwgXCJkZlwiOiBbXSwgXCJjbVwiOiBbXSwgXCJmd1wiOiBbXSB9fSlcbiAgICBjb25zdCBbYXdheVRlYW0sIHNldEF3YXlUZWFtXSA9IHVzZVN0YXRlKHtcImNvbG9yXCI6IFwiYmx1ZVwiLCBcInNxdWFkXCI6IHsgXCJna1wiOiB7fSwgXCJkZlwiOiBbXSwgXCJjbVwiOiBbXSwgXCJmd1wiOiBbXSB9fSlcbiAgICBjb25zb2xlLmxvZyhsaW5ldXBEYXRhKVxuICAgIGlmIChsaW5ldXBEYXRhID09PSBudWxsKXtcbiAgICAgICAgc2V0TGluZXVwRGF0YShsaW5ldXBUZW1wRGF0YSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cobGluZXVwRGF0YSlcbiAgICBjb25zdCBnZXRTdGFydFhJID0gKHN0YXJ0WEksIHRlYW0pID0+IHtcbiAgICAgICAgZm9yRWFjaChzdGFydFhJLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnBsYXllci5wb3Mpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuZ2sgPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5kZiA9IGNvbmNhdCh0ZWFtLnNxdWFkLmRmLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuY20gPSBjb25jYXQodGVhbS5zcXVhZC5jbSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRlwiOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtLnNxdWFkLmZ3ID0gY29uY2F0KHRlYW0uc3F1YWQuZncsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRlYW1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRIb21lVGVhbShnZXRTdGFydFhJKGhlYWQobGluZXVwRGF0YS5yZXNwb25zZSkuc3RhcnRYSSwgaG9tZVRlYW0pKVxuICAgICAgICBzZXRBd2F5VGVhbShnZXRTdGFydFhJKGxhc3QobGluZXVwRGF0YS5yZXNwb25zZSkuc3RhcnRYSSwgYXdheVRlYW0pKVxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxTb2NjZXJMaW5lVXBcbiAgICAgICAgICAgIHNpemU9eyBcInNtYWxsXCIgfVxuICAgICAgICAgICAgY29sb3I9eyBcImxpZ2h0c2VhZ3JlZW5cIiB9XG4gICAgICAgICAgICBwYXR0ZXJuPXsgXCJjaXJjbGVzXCIgfVxuICAgICAgICAgICAgaG9tZVRlYW09eyBob21lVGVhbSB9XG4gICAgICAgICAgICBhd2F5VGVhbT17IGF3YXlUZWFtIH1cbiAgICAgICAgLz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpeHR1cmVMaW5ldXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})