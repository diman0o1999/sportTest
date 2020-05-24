webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  console.log(lineupData);\n\n  var getStartXI = function getStartXI(startXI) {\n    var squad = {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    };\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          squad.gk = item;\n          break;\n\n        case \"D\":\n          squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.df, item);\n          break;\n\n        case \"M\":\n          squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.cm, item);\n          break;\n\n        case \"F\":\n          squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return squad;\n  };\n\n  homeSquad = lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI; // const homeTeam = {\n  //     \"color\": \"red\",\n  //     \"squad\": getStartXI(homeData.startXI)\n  // }\n  // const awayTeam = {\n  //     \"color\": \"blue\",\n  //     \"squad\": getStartXI(last(lineupData.response).startXI)\n  // }\n\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\" // homeTeam={ homeTeam }\n    // awayTeam={ awayTeam }\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"0pclw+nv4Jbg6LUkVmij50SLtr4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwibGluZXVwVGVtcERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhcnRYSSIsInN0YXJ0WEkiLCJzcXVhZCIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwiZ2siLCJkZiIsImNvbmNhdCIsImNtIiwiZnciLCJob21lU3F1YWQiLCJoZWFkIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsVUFBVjtBQUFBLEdBQU4sQ0FBWixDQURYO0FBQUEsTUFDMUJBLFVBRDBCO0FBQUEsTUFDZEMsYUFEYzs7QUFFakMsTUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXdCO0FBQ3BCQyxpQkFBYSxDQUFDQyw2REFBRCxDQUFiO0FBQ0g7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaOztBQUNBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtBQUM1QixRQUFJQyxLQUFLLEdBQUc7QUFBRSxZQUFNLEVBQVI7QUFBWSxZQUFNLEVBQWxCO0FBQXNCLFlBQU0sRUFBNUI7QUFBZ0MsWUFBTTtBQUF0QyxLQUFaO0FBQ0FDLHlEQUFPLENBQUNGLE9BQUQsRUFBVSxVQUFBRyxJQUFJLEVBQUk7QUFDckIsY0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQW5CO0FBQ0ksYUFBSyxHQUFMO0FBQ0lKLGVBQUssQ0FBQ0ssRUFBTixHQUFXSCxJQUFYO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGVBQUssQ0FBQ00sRUFBTixHQUFXQyxvREFBTSxDQUFDUCxLQUFLLENBQUNNLEVBQVAsRUFBV0osSUFBWCxDQUFqQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixlQUFLLENBQUNRLEVBQU4sR0FBV0Qsb0RBQU0sQ0FBQ1AsS0FBSyxDQUFDUSxFQUFQLEVBQVdOLElBQVgsQ0FBakI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsZUFBSyxDQUFDUyxFQUFOLEdBQVdGLG9EQUFNLENBQUNQLEtBQUssQ0FBQ1MsRUFBUCxFQUFXUCxJQUFYLENBQWpCO0FBQ0E7O0FBQ0o7QUFDSTtBQWRSO0FBZ0JILEtBakJNLENBQVA7QUFrQkEsV0FBT0YsS0FBUDtBQUNILEdBckJEOztBQXVCQVUsV0FBUyxHQUFHQyxrREFBSSxDQUFDbEIsVUFBVSxDQUFDbUIsUUFBWixDQUFKLENBQTBCYixPQUF0QyxDQTdCaUMsQ0E4QmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFHLE9BRFg7QUFFSSxTQUFLLEVBQUcsZUFGWjtBQUdJLFdBQU8sRUFBRyxTQUhkLENBSUk7QUFDQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBakREOztHQUFNWCxhO1VBQzJDRyx1RDs7O0tBRDNDSCxhO0FBa0RTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRml4dHVyZUxpbmV1cC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgaGVhZCBmcm9tICdsb2Rhc2gvaGVhZCdcbmltcG9ydCBjb25jYXQgZnJvbSAnbG9kYXNoL2NvbmNhdCdcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJ1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnXG5pbXBvcnQgU29jY2VyTGluZVVwIGZyb20gJ3JlYWN0LXNvY2Nlci1saW5ldXAnXG5pbXBvcnQge2xpbmV1cFRlbXBEYXRhfSBmcm9tICcuLi90ZW1wL3RlbXBEYXRhJ1xuXG5jb25zdCBGaXh0dXJlTGluZXVwID0gKGZpeHR1cmVJZCkgPT4ge1xuICAgIGNvbnN0IFtsaW5ldXBEYXRhLCBzZXRMaW5ldXBEYXRhXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxpbmV1cERhdGEpKVxuICAgIGlmIChsaW5ldXBEYXRhID09PSBudWxsKXtcbiAgICAgICAgc2V0TGluZXVwRGF0YShsaW5ldXBUZW1wRGF0YSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cobGluZXVwRGF0YSlcbiAgICBjb25zdCBnZXRTdGFydFhJID0gKHN0YXJ0WEkpID0+IHtcbiAgICAgICAgbGV0IHNxdWFkID0geyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICAgICAgZm9yRWFjaChzdGFydFhJLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnBsYXllci5wb3Mpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmdrID0gaXRlbVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmRmID0gY29uY2F0KHNxdWFkLmRmLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmNtID0gY29uY2F0KHNxdWFkLmNtLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmZ3ID0gY29uY2F0KHNxdWFkLmZ3LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzcXVhZFxuICAgIH1cblxuICAgIGhvbWVTcXVhZCA9IGhlYWQobGluZXVwRGF0YS5yZXNwb25zZSkuc3RhcnRYSVxuICAgIC8vIGNvbnN0IGhvbWVUZWFtID0ge1xuICAgIC8vICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgLy8gICAgIFwic3F1YWRcIjogZ2V0U3RhcnRYSShob21lRGF0YS5zdGFydFhJKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBhd2F5VGVhbSA9IHtcbiAgICAvLyAgICAgXCJjb2xvclwiOiBcImJsdWVcIixcbiAgICAvLyAgICAgXCJzcXVhZFwiOiBnZXRTdGFydFhJKGxhc3QobGluZXVwRGF0YS5yZXNwb25zZSkuc3RhcnRYSSlcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U29jY2VyTGluZVVwXG4gICAgICAgICAgICBzaXplPXsgXCJzbWFsbFwiIH1cbiAgICAgICAgICAgIGNvbG9yPXsgXCJsaWdodHNlYWdyZWVuXCIgfVxuICAgICAgICAgICAgcGF0dGVybj17IFwiY2lyY2xlc1wiIH1cbiAgICAgICAgICAgIC8vIGhvbWVUZWFtPXsgaG9tZVRlYW0gfVxuICAgICAgICAgICAgLy8gYXdheVRlYW09eyBhd2F5VGVhbSB9XG4gICAgICAgIC8+XG4gICAgKVxuXG59XG5leHBvcnQgZGVmYXVsdCBGaXh0dXJlTGluZXVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})