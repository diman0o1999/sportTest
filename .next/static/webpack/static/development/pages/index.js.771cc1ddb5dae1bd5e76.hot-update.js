webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  console.log(lineupData);\n\n  var getStartXI = function getStartXI(startXI) {\n    var squad = {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    };\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          squad.gk = item;\n          break;\n\n        case \"D\":\n          squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.df, item);\n          break;\n\n        case \"M\":\n          squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.cm, item);\n          break;\n\n        case \"F\":\n          squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return squad;\n  };\n\n  if (lineupData != null) {\n    var homeSquad = getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI);\n    console.log(homeSquad);\n  } // const homeTeam = {\n  //     \"color\": \"red\",\n  //     \"squad\": getStartXI(homeData.startXI)\n  // }\n  // const awayTeam = {\n  //     \"color\": \"blue\",\n  //     \"squad\": getStartXI(last(lineupData.response).startXI)\n  // }\n\n\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\" // homeTeam={ homeTeam }\n    // awayTeam={ awayTeam }\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"0pclw+nv4Jbg6LUkVmij50SLtr4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwibGluZXVwVGVtcERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhcnRYSSIsInN0YXJ0WEkiLCJzcXVhZCIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwiZ2siLCJkZiIsImNvbmNhdCIsImNtIiwiZnciLCJob21lU3F1YWQiLCJoZWFkIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsVUFBVjtBQUFBLEdBQU4sQ0FBWixDQURYO0FBQUEsTUFDMUJBLFVBRDBCO0FBQUEsTUFDZEMsYUFEYzs7QUFFakMsTUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXdCO0FBQ3BCQyxpQkFBYSxDQUFDQyw2REFBRCxDQUFiO0FBQ0g7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaOztBQUNBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtBQUM1QixRQUFJQyxLQUFLLEdBQUc7QUFBRSxZQUFNLEVBQVI7QUFBWSxZQUFNLEVBQWxCO0FBQXNCLFlBQU0sRUFBNUI7QUFBZ0MsWUFBTTtBQUF0QyxLQUFaO0FBQ0FDLHlEQUFPLENBQUNGLE9BQUQsRUFBVSxVQUFBRyxJQUFJLEVBQUk7QUFDckIsY0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQW5CO0FBQ0ksYUFBSyxHQUFMO0FBQ0lKLGVBQUssQ0FBQ0ssRUFBTixHQUFXSCxJQUFYO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGVBQUssQ0FBQ00sRUFBTixHQUFXQyxvREFBTSxDQUFDUCxLQUFLLENBQUNNLEVBQVAsRUFBV0osSUFBWCxDQUFqQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixlQUFLLENBQUNRLEVBQU4sR0FBV0Qsb0RBQU0sQ0FBQ1AsS0FBSyxDQUFDUSxFQUFQLEVBQVdOLElBQVgsQ0FBakI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsZUFBSyxDQUFDUyxFQUFOLEdBQVdGLG9EQUFNLENBQUNQLEtBQUssQ0FBQ1MsRUFBUCxFQUFXUCxJQUFYLENBQWpCO0FBQ0E7O0FBQ0o7QUFDSTtBQWRSO0FBZ0JILEtBakJNLENBQVA7QUFrQkEsV0FBT0YsS0FBUDtBQUNILEdBckJEOztBQXVCQSxNQUFJUCxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDcEIsUUFBTWlCLFNBQVMsR0FBR1osVUFBVSxDQUFDYSxrREFBSSxDQUFDbEIsVUFBVSxDQUFDbUIsUUFBWixDQUFKLENBQTBCYixPQUEzQixDQUE1QjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWWEsU0FBWjtBQUNILEdBaENnQyxDQWtDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFHLE9BRFg7QUFFSSxTQUFLLEVBQUcsZUFGWjtBQUdJLFdBQU8sRUFBRyxTQUhkLENBSUk7QUFDQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBckREOztHQUFNdEIsYTtVQUMyQ0csdUQ7OztLQUQzQ0gsYTtBQXNEU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnXG5pbXBvcnQgY29uY2F0IGZyb20gJ2xvZGFzaC9jb25jYXQnXG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCdcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0J1xuaW1wb3J0IFNvY2NlckxpbmVVcCBmcm9tICdyZWFjdC1zb2NjZXItbGluZXVwJ1xuaW1wb3J0IHtsaW5ldXBUZW1wRGF0YX0gZnJvbSAnLi4vdGVtcC90ZW1wRGF0YSdcblxuY29uc3QgRml4dHVyZUxpbmV1cCA9IChmaXh0dXJlSWQpID0+IHtcbiAgICBjb25zdCBbbGluZXVwRGF0YSwgc2V0TGluZXVwRGF0YV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5saW5ldXBEYXRhKSlcbiAgICBpZiAobGluZXVwRGF0YSA9PT0gbnVsbCl7XG4gICAgICAgIHNldExpbmV1cERhdGEobGluZXVwVGVtcERhdGEpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGxpbmV1cERhdGEpXG4gICAgY29uc3QgZ2V0U3RhcnRYSSA9IChzdGFydFhJKSA9PiB7XG4gICAgICAgIGxldCBzcXVhZCA9IHsgXCJna1wiOiB7fSwgXCJkZlwiOiBbXSwgXCJjbVwiOiBbXSwgXCJmd1wiOiBbXSB9XG4gICAgICAgIGZvckVhY2goc3RhcnRYSSwgaXRlbSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5wbGF5ZXIucG9zKXtcbiAgICAgICAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgICAgICAgICBzcXVhZC5nayA9IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICBzcXVhZC5kZiA9IGNvbmNhdChzcXVhZC5kZiwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICBzcXVhZC5jbSA9IGNvbmNhdChzcXVhZC5jbSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRlwiOlxuICAgICAgICAgICAgICAgICAgICBzcXVhZC5mdyA9IGNvbmNhdChzcXVhZC5mdywgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc3F1YWRcbiAgICB9XG5cbiAgICBpZiAobGluZXVwRGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGhvbWVTcXVhZCA9IGdldFN0YXJ0WEkoaGVhZChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJKVxuICAgICAgICBjb25zb2xlLmxvZyhob21lU3F1YWQpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgaG9tZVRlYW0gPSB7XG4gICAgLy8gICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAvLyAgICAgXCJzcXVhZFwiOiBnZXRTdGFydFhJKGhvbWVEYXRhLnN0YXJ0WEkpXG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IGF3YXlUZWFtID0ge1xuICAgIC8vICAgICBcImNvbG9yXCI6IFwiYmx1ZVwiLFxuICAgIC8vICAgICBcInNxdWFkXCI6IGdldFN0YXJ0WEkobGFzdChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJKVxuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTb2NjZXJMaW5lVXBcbiAgICAgICAgICAgIHNpemU9eyBcInNtYWxsXCIgfVxuICAgICAgICAgICAgY29sb3I9eyBcImxpZ2h0c2VhZ3JlZW5cIiB9XG4gICAgICAgICAgICBwYXR0ZXJuPXsgXCJjaXJjbGVzXCIgfVxuICAgICAgICAgICAgLy8gaG9tZVRlYW09eyBob21lVGVhbSB9XG4gICAgICAgICAgICAvLyBhd2F5VGVhbT17IGF3YXlUZWFtIH1cbiAgICAgICAgLz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpeHR1cmVMaW5ldXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})