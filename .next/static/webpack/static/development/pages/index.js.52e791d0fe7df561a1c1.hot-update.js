webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    \"color\": \"red\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      homeTeam = _useState2[0],\n      setHomeTeam = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    \"color\": \"blue\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      awayTeam = _useState3[0],\n      setAwayTeam = _useState3[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_8__[\"lineupTempData\"]);\n  }\n\n  var getStartXI = function getStartXI(startXI, team) {\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          team.squad.gk = item;\n          break;\n\n        case \"D\":\n          team.squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_4___default()(team.squad.df, item);\n          break;\n\n        case \"M\":\n          team.squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_4___default()(team.squad.cm, item);\n          break;\n\n        case \"F\":\n          team.squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_4___default()(team.squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return team;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setHomeTeam();\n    homeTeam = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"homeTeam\"), getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_3___default()(lineupData.response).startXI, homeTeam));\n    awayTeam = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"awayTeam\"), getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_6___default()(lineupData.response).startXI, awayTeam));\n    console.log(homeTeam);\n  }, []);\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\",\n    homeTeam: homeTeam,\n    awayTeam: awayTeam,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"ycRpk6rrGzLNB/z6K7cV4JlARq4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVRlYW0iLCJzZXRIb21lVGVhbSIsImF3YXlUZWFtIiwic2V0QXdheVRlYW0iLCJsaW5ldXBUZW1wRGF0YSIsImdldFN0YXJ0WEkiLCJzdGFydFhJIiwidGVhbSIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwic3F1YWQiLCJnayIsImRmIiwiY29uY2F0IiwiY20iLCJmdyIsInVzZUVmZmVjdCIsImhlYWQiLCJyZXNwb25zZSIsImxhc3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQVY7QUFBQSxHQUFOLENBQVosQ0FEWDtBQUFBLE1BQzFCQSxVQUQwQjtBQUFBLE1BQ2RDLGFBRGM7O0FBQUEsbUJBRURKLHNEQUFRLENBQUM7QUFBQyxhQUFTLEtBQVY7QUFBaUIsYUFBUztBQUFFLFlBQU0sRUFBUjtBQUFZLFlBQU0sRUFBbEI7QUFBc0IsWUFBTSxFQUE1QjtBQUFnQyxZQUFNO0FBQXRDO0FBQTFCLEdBQUQsQ0FGUDtBQUFBLE1BRTFCSyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHRE4sc0RBQVEsQ0FBQztBQUFDLGFBQVMsTUFBVjtBQUFrQixhQUFTO0FBQUUsWUFBTSxFQUFSO0FBQVksWUFBTSxFQUFsQjtBQUFzQixZQUFNLEVBQTVCO0FBQWdDLFlBQU07QUFBdEM7QUFBM0IsR0FBRCxDQUhQO0FBQUEsTUFHMUJPLFFBSDBCO0FBQUEsTUFHaEJDLFdBSGdCOztBQUtqQyxNQUFJTCxVQUFVLEtBQUssSUFBbkIsRUFBd0I7QUFDcEJDLGlCQUFhLENBQUNLLDZEQUFELENBQWI7QUFDSDs7QUFDRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDbENDLHlEQUFPLENBQUNGLE9BQUQsRUFBVSxVQUFBRyxJQUFJLEVBQUk7QUFDckIsY0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQW5CO0FBQ0ksYUFBSyxHQUFMO0FBQ0lKLGNBQUksQ0FBQ0ssS0FBTCxDQUFXQyxFQUFYLEdBQWdCSixJQUFoQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixjQUFJLENBQUNLLEtBQUwsQ0FBV0UsRUFBWCxHQUFnQkMsb0RBQU0sQ0FBQ1IsSUFBSSxDQUFDSyxLQUFMLENBQVdFLEVBQVosRUFBZ0JMLElBQWhCLENBQXRCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGNBQUksQ0FBQ0ssS0FBTCxDQUFXSSxFQUFYLEdBQWdCRCxvREFBTSxDQUFDUixJQUFJLENBQUNLLEtBQUwsQ0FBV0ksRUFBWixFQUFnQlAsSUFBaEIsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsY0FBSSxDQUFDSyxLQUFMLENBQVdLLEVBQVgsR0FBZ0JGLG9EQUFNLENBQUNSLElBQUksQ0FBQ0ssS0FBTCxDQUFXSyxFQUFaLEVBQWdCUixJQUFoQixDQUF0QjtBQUNBOztBQUNKO0FBQ0k7QUFkUjtBQWdCSCxLQWpCTSxDQUFQO0FBa0JBLFdBQU9GLElBQVA7QUFDSCxHQXBCRDs7QUFzQkFXLHlEQUFTLENBQUMsWUFBTTtBQUNaakIsZUFBVztBQUNYRCxZQUFRLDBHQUFHSyxVQUFVLENBQUNjLGtEQUFJLENBQUNyQixVQUFVLENBQUNzQixRQUFaLENBQUosQ0FBMEJkLE9BQTNCLEVBQW9DTixRQUFwQyxDQUFiLENBQVI7QUFDQUUsWUFBUSwwR0FBR0csVUFBVSxDQUFDZ0Isa0RBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ3NCLFFBQVosQ0FBSixDQUEwQmQsT0FBM0IsRUFBb0NKLFFBQXBDLENBQWIsQ0FBUjtBQUNBb0IsV0FBTyxDQUFDQyxHQUFSLENBQVl2QixRQUFaO0FBQ0gsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQVVBLFNBQ0ksTUFBQywyREFBRDtBQUNJLFFBQUksRUFBRyxPQURYO0FBRUksU0FBSyxFQUFHLGVBRlo7QUFHSSxXQUFPLEVBQUcsU0FIZDtBQUlJLFlBQVEsRUFBR0EsUUFKZjtBQUtJLFlBQVEsRUFBR0UsUUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFVSCxDQWxERDs7R0FBTVQsYTtVQUMyQ0csdUQ7OztLQUQzQ0gsYTtBQW1EU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgaGVhZCBmcm9tICdsb2Rhc2gvaGVhZCdcbmltcG9ydCBjb25jYXQgZnJvbSAnbG9kYXNoL2NvbmNhdCdcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJ1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnXG5pbXBvcnQgU29jY2VyTGluZVVwIGZyb20gJ3JlYWN0LXNvY2Nlci1saW5ldXAnXG5pbXBvcnQge2xpbmV1cFRlbXBEYXRhfSBmcm9tICcuLi90ZW1wL3RlbXBEYXRhJ1xuXG5jb25zdCBGaXh0dXJlTGluZXVwID0gKGZpeHR1cmVJZCkgPT4ge1xuICAgIGNvbnN0IFtsaW5ldXBEYXRhLCBzZXRMaW5ldXBEYXRhXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxpbmV1cERhdGEpKVxuICAgIGNvbnN0IFtob21lVGVhbSwgc2V0SG9tZVRlYW1dID0gdXNlU3RhdGUoe1wiY29sb3JcIjogXCJyZWRcIiwgXCJzcXVhZFwiOiB7IFwiZ2tcIjoge30sIFwiZGZcIjogW10sIFwiY21cIjogW10sIFwiZndcIjogW10gfX0pXG4gICAgY29uc3QgW2F3YXlUZWFtLCBzZXRBd2F5VGVhbV0gPSB1c2VTdGF0ZSh7XCJjb2xvclwiOiBcImJsdWVcIiwgXCJzcXVhZFwiOiB7IFwiZ2tcIjoge30sIFwiZGZcIjogW10sIFwiY21cIjogW10sIFwiZndcIjogW10gfX0pXG4gICAgXG4gICAgaWYgKGxpbmV1cERhdGEgPT09IG51bGwpe1xuICAgICAgICBzZXRMaW5ldXBEYXRhKGxpbmV1cFRlbXBEYXRhKVxuICAgIH1cbiAgICBjb25zdCBnZXRTdGFydFhJID0gKHN0YXJ0WEksIHRlYW0pID0+IHtcbiAgICAgICAgZm9yRWFjaChzdGFydFhJLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnBsYXllci5wb3Mpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuZ2sgPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5kZiA9IGNvbmNhdCh0ZWFtLnNxdWFkLmRmLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuY20gPSBjb25jYXQodGVhbS5zcXVhZC5jbSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRlwiOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtLnNxdWFkLmZ3ID0gY29uY2F0KHRlYW0uc3F1YWQuZncsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRlYW1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRIb21lVGVhbSgpICAgICAgICAgXG4gICAgICAgIGhvbWVUZWFtID0gZ2V0U3RhcnRYSShoZWFkKGxpbmV1cERhdGEucmVzcG9uc2UpLnN0YXJ0WEksIGhvbWVUZWFtKVxuICAgICAgICBhd2F5VGVhbSA9IGdldFN0YXJ0WEkobGFzdChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJLCBhd2F5VGVhbSlcbiAgICAgICAgY29uc29sZS5sb2coaG9tZVRlYW0pXG4gICAgfSwgW10pXG4gICAgXG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTb2NjZXJMaW5lVXBcbiAgICAgICAgICAgIHNpemU9eyBcInNtYWxsXCIgfVxuICAgICAgICAgICAgY29sb3I9eyBcImxpZ2h0c2VhZ3JlZW5cIiB9XG4gICAgICAgICAgICBwYXR0ZXJuPXsgXCJjaXJjbGVzXCIgfVxuICAgICAgICAgICAgaG9tZVRlYW09eyBob21lVGVhbSB9XG4gICAgICAgICAgICBhd2F5VGVhbT17IGF3YXlUZWFtIH1cbiAgICAgICAgLz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpeHR1cmVMaW5ldXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})