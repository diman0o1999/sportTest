webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1]; // const [homeSquad, setHomeSquad] = useState(null)\n  // const [awaySquad, setAwaySquad] = useState(null)\n  // let homeSquad = { \"gk\": {}, \"df\": [], \"cm\": [], \"fw\": [] }\n  // let awaySquad = { \"gk\": {}, \"df\": [], \"cm\": [], \"fw\": [] }\n\n\n  var homeTeam = {\n    \"color\": \"red\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  };\n  var awayTeam = {\n    \"color\": \"blue\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  };\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n  }\n\n  var getStartXI = function getStartXI(startXI, team) {\n    console.log(team); // let squad = { \"gk\": {}, \"df\": [], \"cm\": [], \"fw\": [] }\n\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          team.squad.gk = item;\n          break;\n\n        case \"D\":\n          team.squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.df, item);\n          break;\n\n        case \"M\":\n          team.squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.cm, item);\n          break;\n\n        case \"F\":\n          team.squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return team;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    homeTeam = getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI, homeTeam);\n    awayTeam = getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(lineupData.response).startXI, awayTeam);\n  }, []);\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\",\n    homeTeam: homeTeam,\n    awayTeam: awayTeam,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"EUAQYoMCKdK8y5sM5nkCFKZf+Rw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImxpbmV1cFRlbXBEYXRhIiwiZ2V0U3RhcnRYSSIsInN0YXJ0WEkiLCJ0ZWFtIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwic3F1YWQiLCJnayIsImRmIiwiY29uY2F0IiwiY20iLCJmdyIsInVzZUVmZmVjdCIsImhlYWQiLCJyZXNwb25zZSIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsVUFBVjtBQUFBLEdBQU4sQ0FBWixDQURYO0FBQUEsTUFDMUJBLFVBRDBCO0FBQUEsTUFDZEMsYUFEYyxpQkFFakM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUlDLFFBQVEsR0FBRztBQUNYLGFBQVMsS0FERTtBQUVYLGFBQVM7QUFBRSxZQUFNLEVBQVI7QUFBWSxZQUFNLEVBQWxCO0FBQXNCLFlBQU0sRUFBNUI7QUFBZ0MsWUFBTTtBQUF0QztBQUZFLEdBQWY7QUFJQSxNQUFJQyxRQUFRLEdBQUc7QUFDWCxhQUFTLE1BREU7QUFFWCxhQUFTO0FBQUUsWUFBTSxFQUFSO0FBQVksWUFBTSxFQUFsQjtBQUFzQixZQUFNLEVBQTVCO0FBQWdDLFlBQU07QUFBdEM7QUFGRSxHQUFmOztBQUlBLE1BQUlILFVBQVUsS0FBSyxJQUFuQixFQUF3QjtBQUNwQkMsaUJBQWEsQ0FBQ0csNkRBQUQsQ0FBYjtBQUNIOztBQUNELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUNsQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFEa0MsQ0FFbEM7O0FBQ0FHLHlEQUFPLENBQUNKLE9BQUQsRUFBVSxVQUFBSyxJQUFJLEVBQUk7QUFDckIsY0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQW5CO0FBQ0ksYUFBSyxHQUFMO0FBQ0lOLGNBQUksQ0FBQ08sS0FBTCxDQUFXQyxFQUFYLEdBQWdCSixJQUFoQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJSixjQUFJLENBQUNPLEtBQUwsQ0FBV0UsRUFBWCxHQUFnQkMsb0RBQU0sQ0FBQ1YsSUFBSSxDQUFDTyxLQUFMLENBQVdFLEVBQVosRUFBZ0JMLElBQWhCLENBQXRCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lKLGNBQUksQ0FBQ08sS0FBTCxDQUFXSSxFQUFYLEdBQWdCRCxvREFBTSxDQUFDVixJQUFJLENBQUNPLEtBQUwsQ0FBV0ksRUFBWixFQUFnQlAsSUFBaEIsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUosY0FBSSxDQUFDTyxLQUFMLENBQVdLLEVBQVgsR0FBZ0JGLG9EQUFNLENBQUNWLElBQUksQ0FBQ08sS0FBTCxDQUFXSyxFQUFaLEVBQWdCUixJQUFoQixDQUF0QjtBQUNBOztBQUNKO0FBQ0k7QUFkUjtBQWdCSCxLQWpCTSxDQUFQO0FBa0JBLFdBQU9KLElBQVA7QUFDSCxHQXRCRDs7QUF3QkFhLHlEQUFTLENBQUMsWUFBTTtBQUNabEIsWUFBUSxHQUFHRyxVQUFVLENBQUNnQixrREFBSSxDQUFDckIsVUFBVSxDQUFDc0IsUUFBWixDQUFKLENBQTBCaEIsT0FBM0IsRUFBb0NKLFFBQXBDLENBQXJCO0FBQ0FDLFlBQVEsR0FBR0UsVUFBVSxDQUFDa0Isa0RBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ3NCLFFBQVosQ0FBSixDQUEwQmhCLE9BQTNCLEVBQW9DSCxRQUFwQyxDQUFyQjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFRQSxTQUNJLE1BQUMsMkRBQUQ7QUFDSSxRQUFJLEVBQUcsT0FEWDtBQUVJLFNBQUssRUFBRyxlQUZaO0FBR0ksV0FBTyxFQUFHLFNBSGQ7QUFJSSxZQUFRLEVBQUdELFFBSmY7QUFLSSxZQUFRLEVBQUdDLFFBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBVUgsQ0EzREQ7O0dBQU1SLGE7VUFDMkNHLHVEOzs7S0FEM0NILGE7QUE0RFNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXh0dXJlTGluZXVwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnXG5pbXBvcnQgY29uY2F0IGZyb20gJ2xvZGFzaC9jb25jYXQnXG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCdcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0J1xuaW1wb3J0IFNvY2NlckxpbmVVcCBmcm9tICdyZWFjdC1zb2NjZXItbGluZXVwJ1xuaW1wb3J0IHtsaW5ldXBUZW1wRGF0YX0gZnJvbSAnLi4vdGVtcC90ZW1wRGF0YSdcblxuY29uc3QgRml4dHVyZUxpbmV1cCA9IChmaXh0dXJlSWQpID0+IHtcbiAgICBjb25zdCBbbGluZXVwRGF0YSwgc2V0TGluZXVwRGF0YV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5saW5ldXBEYXRhKSlcbiAgICAvLyBjb25zdCBbaG9tZVNxdWFkLCBzZXRIb21lU3F1YWRdID0gdXNlU3RhdGUobnVsbClcbiAgICAvLyBjb25zdCBbYXdheVNxdWFkLCBzZXRBd2F5U3F1YWRdID0gdXNlU3RhdGUobnVsbClcbiAgICAvLyBsZXQgaG9tZVNxdWFkID0geyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICAvLyBsZXQgYXdheVNxdWFkID0geyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICBsZXQgaG9tZVRlYW0gPSB7XG4gICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgXCJzcXVhZFwiOiB7IFwiZ2tcIjoge30sIFwiZGZcIjogW10sIFwiY21cIjogW10sIFwiZndcIjogW10gfVxuICAgIH1cbiAgICBsZXQgYXdheVRlYW0gPSB7XG4gICAgICAgIFwiY29sb3JcIjogXCJibHVlXCIsXG4gICAgICAgIFwic3F1YWRcIjogeyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICB9XG4gICAgaWYgKGxpbmV1cERhdGEgPT09IG51bGwpe1xuICAgICAgICBzZXRMaW5ldXBEYXRhKGxpbmV1cFRlbXBEYXRhKVxuICAgIH1cbiAgICBjb25zdCBnZXRTdGFydFhJID0gKHN0YXJ0WEksIHRlYW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGVhbSlcbiAgICAgICAgLy8gbGV0IHNxdWFkID0geyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICAgICAgZm9yRWFjaChzdGFydFhJLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnBsYXllci5wb3Mpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuZ2sgPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5kZiA9IGNvbmNhdCh0ZWFtLnNxdWFkLmRmLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuY20gPSBjb25jYXQodGVhbS5zcXVhZC5jbSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRlwiOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtLnNxdWFkLmZ3ID0gY29uY2F0KHRlYW0uc3F1YWQuZncsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRlYW1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgIFxuICAgICAgICBob21lVGVhbSA9IGdldFN0YXJ0WEkoaGVhZChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJLCBob21lVGVhbSlcbiAgICAgICAgYXdheVRlYW0gPSBnZXRTdGFydFhJKGxhc3QobGluZXVwRGF0YS5yZXNwb25zZSkuc3RhcnRYSSwgYXdheVRlYW0pXG4gICAgfSwgW10pXG4gICAgXG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTb2NjZXJMaW5lVXBcbiAgICAgICAgICAgIHNpemU9eyBcInNtYWxsXCIgfVxuICAgICAgICAgICAgY29sb3I9eyBcImxpZ2h0c2VhZ3JlZW5cIiB9XG4gICAgICAgICAgICBwYXR0ZXJuPXsgXCJjaXJjbGVzXCIgfVxuICAgICAgICAgICAgaG9tZVRlYW09eyBob21lVGVhbSB9XG4gICAgICAgICAgICBhd2F5VGVhbT17IGF3YXlUZWFtIH1cbiAgICAgICAgLz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpeHR1cmVMaW5ldXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})