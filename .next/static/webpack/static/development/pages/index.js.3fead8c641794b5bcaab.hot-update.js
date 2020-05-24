webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  console.log(lineupData);\n\n  var getStartXI = function getStartXI(startXI) {\n    var squad = {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    };\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          squad.gk = item;\n          break;\n\n        case \"D\":\n          squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.df, item);\n          break;\n\n        case \"M\":\n          squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.cm, item);\n          break;\n\n        case \"F\":\n          squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return squad;\n  };\n\n  homeData = lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response); // const homeTeam = {\n  //     \"color\": \"red\",\n  //     \"squad\": getStartXI(homeData.startXI)\n  // }\n  // const awayTeam = {\n  //     \"color\": \"blue\",\n  //     \"squad\": getStartXI(last(lineupData.response).startXI)\n  // }\n\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\" // homeTeam={ homeTeam }\n    // awayTeam={ awayTeam }\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"0pclw+nv4Jbg6LUkVmij50SLtr4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwibGluZXVwVGVtcERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhcnRYSSIsInN0YXJ0WEkiLCJzcXVhZCIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwiZ2siLCJkZiIsImNvbmNhdCIsImNtIiwiZnciLCJob21lRGF0YSIsImhlYWQiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQWU7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxVQUFWO0FBQUEsR0FBTixDQUFaLENBRFg7QUFBQSxNQUMxQkEsVUFEMEI7QUFBQSxNQUNkQyxhQURjOztBQUVqQyxNQUFJRCxVQUFVLEtBQUssSUFBbkIsRUFBd0I7QUFDcEJDLGlCQUFhLENBQUNDLDZEQUFELENBQWI7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVo7O0FBQ0EsTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQzVCLFFBQUlDLEtBQUssR0FBRztBQUFFLFlBQU0sRUFBUjtBQUFZLFlBQU0sRUFBbEI7QUFBc0IsWUFBTSxFQUE1QjtBQUFnQyxZQUFNO0FBQXRDLEtBQVo7QUFDQUMseURBQU8sQ0FBQ0YsT0FBRCxFQUFVLFVBQUFHLElBQUksRUFBSTtBQUNyQixjQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsR0FBbkI7QUFDSSxhQUFLLEdBQUw7QUFDSUosZUFBSyxDQUFDSyxFQUFOLEdBQVdILElBQVg7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsZUFBSyxDQUFDTSxFQUFOLEdBQVdDLG9EQUFNLENBQUNQLEtBQUssQ0FBQ00sRUFBUCxFQUFXSixJQUFYLENBQWpCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGVBQUssQ0FBQ1EsRUFBTixHQUFXRCxvREFBTSxDQUFDUCxLQUFLLENBQUNRLEVBQVAsRUFBV04sSUFBWCxDQUFqQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixlQUFLLENBQUNTLEVBQU4sR0FBV0Ysb0RBQU0sQ0FBQ1AsS0FBSyxDQUFDUyxFQUFQLEVBQVdQLElBQVgsQ0FBakI7QUFDQTs7QUFDSjtBQUNJO0FBZFI7QUFnQkgsS0FqQk0sQ0FBUDtBQWtCQSxXQUFPRixLQUFQO0FBQ0gsR0FyQkQ7O0FBdUJBVSxVQUFRLEdBQUdDLGtEQUFJLENBQUNsQixVQUFVLENBQUNtQixRQUFaLENBQWYsQ0E3QmlDLENBOEJqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0ksTUFBQywyREFBRDtBQUNJLFFBQUksRUFBRyxPQURYO0FBRUksU0FBSyxFQUFHLGVBRlo7QUFHSSxXQUFPLEVBQUcsU0FIZCxDQUlJO0FBQ0E7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFVSCxDQWpERDs7R0FBTXhCLGE7VUFDMkNHLHVEOzs7S0FEM0NILGE7QUFrRFNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXh0dXJlTGluZXVwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBoZWFkIGZyb20gJ2xvZGFzaC9oZWFkJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICdsb2Rhc2gvY29uY2F0J1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnXG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCdcbmltcG9ydCBTb2NjZXJMaW5lVXAgZnJvbSAncmVhY3Qtc29jY2VyLWxpbmV1cCdcbmltcG9ydCB7bGluZXVwVGVtcERhdGF9IGZyb20gJy4uL3RlbXAvdGVtcERhdGEnXG5cbmNvbnN0IEZpeHR1cmVMaW5ldXAgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgY29uc3QgW2xpbmV1cERhdGEsIHNldExpbmV1cERhdGFdID0gdXNlU3RhdGUodXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGluZXVwRGF0YSkpXG4gICAgaWYgKGxpbmV1cERhdGEgPT09IG51bGwpe1xuICAgICAgICBzZXRMaW5ldXBEYXRhKGxpbmV1cFRlbXBEYXRhKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhsaW5ldXBEYXRhKVxuICAgIGNvbnN0IGdldFN0YXJ0WEkgPSAoc3RhcnRYSSkgPT4ge1xuICAgICAgICBsZXQgc3F1YWQgPSB7IFwiZ2tcIjoge30sIFwiZGZcIjogW10sIFwiY21cIjogW10sIFwiZndcIjogW10gfVxuICAgICAgICBmb3JFYWNoKHN0YXJ0WEksIGl0ZW0gPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0ucGxheWVyLnBvcyl7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgICAgICAgICAgc3F1YWQuZ2sgPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgc3F1YWQuZGYgPSBjb25jYXQoc3F1YWQuZGYsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgc3F1YWQuY20gPSBjb25jYXQoc3F1YWQuY20sIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZcIjpcbiAgICAgICAgICAgICAgICAgICAgc3F1YWQuZncgPSBjb25jYXQoc3F1YWQuZncsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHNxdWFkXG4gICAgfVxuXG4gICAgaG9tZURhdGEgPSBoZWFkKGxpbmV1cERhdGEucmVzcG9uc2UpXG4gICAgLy8gY29uc3QgaG9tZVRlYW0gPSB7XG4gICAgLy8gICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAvLyAgICAgXCJzcXVhZFwiOiBnZXRTdGFydFhJKGhvbWVEYXRhLnN0YXJ0WEkpXG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IGF3YXlUZWFtID0ge1xuICAgIC8vICAgICBcImNvbG9yXCI6IFwiYmx1ZVwiLFxuICAgIC8vICAgICBcInNxdWFkXCI6IGdldFN0YXJ0WEkobGFzdChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJKVxuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTb2NjZXJMaW5lVXBcbiAgICAgICAgICAgIHNpemU9eyBcInNtYWxsXCIgfVxuICAgICAgICAgICAgY29sb3I9eyBcImxpZ2h0c2VhZ3JlZW5cIiB9XG4gICAgICAgICAgICBwYXR0ZXJuPXsgXCJjaXJjbGVzXCIgfVxuICAgICAgICAgICAgLy8gaG9tZVRlYW09eyBob21lVGVhbSB9XG4gICAgICAgICAgICAvLyBhd2F5VGVhbT17IGF3YXlUZWFtIH1cbiAgICAgICAgLz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpeHR1cmVMaW5ldXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})