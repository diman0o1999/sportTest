webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"red\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      homeTeam = _useState2[0],\n      setHomeTeam = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"blue\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      awayTeam = _useState3[0],\n      setAwayTeam = _useState3[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  var getStartXI = function getStartXI(startXI, team) {\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          team.squad.gk = item;\n          break;\n\n        case \"D\":\n          team.squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.df, item);\n          break;\n\n        case \"M\":\n          team.squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.cm, item);\n          break;\n\n        case \"F\":\n          team.squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return team;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setHomeTeam(getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI, homeTeam));\n    setAwayTeam(getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(lineupData.response).startXI, awayTeam));\n  }, []);\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\",\n    homeTeam: homeTeam,\n    awayTeam: awayTeam,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"ycRpk6rrGzLNB/z6K7cV4JlARq4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVRlYW0iLCJzZXRIb21lVGVhbSIsImF3YXlUZWFtIiwic2V0QXdheVRlYW0iLCJsaW5ldXBUZW1wRGF0YSIsImdldFN0YXJ0WEkiLCJzdGFydFhJIiwidGVhbSIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwic3F1YWQiLCJnayIsImRmIiwiY29uY2F0IiwiY20iLCJmdyIsInVzZUVmZmVjdCIsImhlYWQiLCJyZXNwb25zZSIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsVUFBVjtBQUFBLEdBQU4sQ0FBWixDQURYO0FBQUEsTUFDMUJBLFVBRDBCO0FBQUEsTUFDZEMsYUFEYzs7QUFBQSxtQkFFREosc0RBQVEsQ0FBQztBQUFDLGFBQVMsS0FBVjtBQUFpQixhQUFTO0FBQUUsWUFBTSxFQUFSO0FBQVksWUFBTSxFQUFsQjtBQUFzQixZQUFNLEVBQTVCO0FBQWdDLFlBQU07QUFBdEM7QUFBMUIsR0FBRCxDQUZQO0FBQUEsTUFFMUJLLFFBRjBCO0FBQUEsTUFFaEJDLFdBRmdCOztBQUFBLG1CQUdETixzREFBUSxDQUFDO0FBQUMsYUFBUyxNQUFWO0FBQWtCLGFBQVM7QUFBRSxZQUFNLEVBQVI7QUFBWSxZQUFNLEVBQWxCO0FBQXNCLFlBQU0sRUFBNUI7QUFBZ0MsWUFBTTtBQUF0QztBQUEzQixHQUFELENBSFA7QUFBQSxNQUcxQk8sUUFIMEI7QUFBQSxNQUdoQkMsV0FIZ0I7O0FBSWpDLE1BQUlMLFVBQVUsS0FBSyxJQUFuQixFQUF3QjtBQUNwQkMsaUJBQWEsQ0FBQ0ssNkRBQUQsQ0FBYjtBQUNIOztBQUNELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUNsQ0MseURBQU8sQ0FBQ0YsT0FBRCxFQUFVLFVBQUFHLElBQUksRUFBSTtBQUNyQixjQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsR0FBbkI7QUFDSSxhQUFLLEdBQUw7QUFDSUosY0FBSSxDQUFDSyxLQUFMLENBQVdDLEVBQVgsR0FBZ0JKLElBQWhCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGNBQUksQ0FBQ0ssS0FBTCxDQUFXRSxFQUFYLEdBQWdCQyxvREFBTSxDQUFDUixJQUFJLENBQUNLLEtBQUwsQ0FBV0UsRUFBWixFQUFnQkwsSUFBaEIsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsY0FBSSxDQUFDSyxLQUFMLENBQVdJLEVBQVgsR0FBZ0JELG9EQUFNLENBQUNSLElBQUksQ0FBQ0ssS0FBTCxDQUFXSSxFQUFaLEVBQWdCUCxJQUFoQixDQUF0QjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixjQUFJLENBQUNLLEtBQUwsQ0FBV0ssRUFBWCxHQUFnQkYsb0RBQU0sQ0FBQ1IsSUFBSSxDQUFDSyxLQUFMLENBQVdLLEVBQVosRUFBZ0JSLElBQWhCLENBQXRCO0FBQ0E7O0FBQ0o7QUFDSTtBQWRSO0FBZ0JILEtBakJNLENBQVA7QUFrQkEsV0FBT0YsSUFBUDtBQUNILEdBcEJEOztBQXNCQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1pqQixlQUFXLENBQUNJLFVBQVUsQ0FBQ2Msa0RBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLFFBQVosQ0FBSixDQUEwQmQsT0FBM0IsRUFBb0NOLFFBQXBDLENBQVgsQ0FBWDtBQUNBRyxlQUFXLENBQUNFLFVBQVUsQ0FBQ2dCLGtEQUFJLENBQUN2QixVQUFVLENBQUNzQixRQUFaLENBQUosQ0FBMEJkLE9BQTNCLEVBQW9DSixRQUFwQyxDQUFYLENBQVg7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsU0FDSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFHLE9BRFg7QUFFSSxTQUFLLEVBQUcsZUFGWjtBQUdJLFdBQU8sRUFBRyxTQUhkO0FBSUksWUFBUSxFQUFHRixRQUpmO0FBS0ksWUFBUSxFQUFHRSxRQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBNUNEOztHQUFNVCxhO1VBQzJDRyx1RDs7O0tBRDNDSCxhO0FBNkNTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRml4dHVyZUxpbmV1cC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBoZWFkIGZyb20gJ2xvZGFzaC9oZWFkJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICdsb2Rhc2gvY29uY2F0J1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnXG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCdcbmltcG9ydCBTb2NjZXJMaW5lVXAgZnJvbSAncmVhY3Qtc29jY2VyLWxpbmV1cCdcbmltcG9ydCB7bGluZXVwVGVtcERhdGF9IGZyb20gJy4uL3RlbXAvdGVtcERhdGEnXG5cbmNvbnN0IEZpeHR1cmVMaW5ldXAgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgY29uc3QgW2xpbmV1cERhdGEsIHNldExpbmV1cERhdGFdID0gdXNlU3RhdGUodXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGluZXVwRGF0YSkpXG4gICAgY29uc3QgW2hvbWVUZWFtLCBzZXRIb21lVGVhbV0gPSB1c2VTdGF0ZSh7XCJjb2xvclwiOiBcInJlZFwiLCBcInNxdWFkXCI6IHsgXCJna1wiOiB7fSwgXCJkZlwiOiBbXSwgXCJjbVwiOiBbXSwgXCJmd1wiOiBbXSB9fSlcbiAgICBjb25zdCBbYXdheVRlYW0sIHNldEF3YXlUZWFtXSA9IHVzZVN0YXRlKHtcImNvbG9yXCI6IFwiYmx1ZVwiLCBcInNxdWFkXCI6IHsgXCJna1wiOiB7fSwgXCJkZlwiOiBbXSwgXCJjbVwiOiBbXSwgXCJmd1wiOiBbXSB9fSlcbiAgICBpZiAobGluZXVwRGF0YSA9PT0gbnVsbCl7XG4gICAgICAgIHNldExpbmV1cERhdGEobGluZXVwVGVtcERhdGEpXG4gICAgfVxuICAgIGNvbnN0IGdldFN0YXJ0WEkgPSAoc3RhcnRYSSwgdGVhbSkgPT4ge1xuICAgICAgICBmb3JFYWNoKHN0YXJ0WEksIGl0ZW0gPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0ucGxheWVyLnBvcyl7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5nayA9IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtLnNxdWFkLmRmID0gY29uY2F0KHRlYW0uc3F1YWQuZGYsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5jbSA9IGNvbmNhdCh0ZWFtLnNxdWFkLmNtLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuZncgPSBjb25jYXQodGVhbS5zcXVhZC5mdywgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGVhbVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEhvbWVUZWFtKGdldFN0YXJ0WEkoaGVhZChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJLCBob21lVGVhbSkpXG4gICAgICAgIHNldEF3YXlUZWFtKGdldFN0YXJ0WEkobGFzdChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJLCBhd2F5VGVhbSkpXG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNvY2NlckxpbmVVcFxuICAgICAgICAgICAgc2l6ZT17IFwic21hbGxcIiB9XG4gICAgICAgICAgICBjb2xvcj17IFwibGlnaHRzZWFncmVlblwiIH1cbiAgICAgICAgICAgIHBhdHRlcm49eyBcImNpcmNsZXNcIiB9XG4gICAgICAgICAgICBob21lVGVhbT17IGhvbWVUZWFtIH1cbiAgICAgICAgICAgIGF3YXlUZWFtPXsgYXdheVRlYW0gfVxuICAgICAgICAvPlxuICAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgRml4dHVyZUxpbmV1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})