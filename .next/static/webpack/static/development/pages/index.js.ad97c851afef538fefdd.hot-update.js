webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      homeSquad = _useState2[0],\n      setHomeSquad = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      awaySquad = _useState3[0],\n      setAwaySquad = _useState3[1];\n\n  if (lineupData === null) {\n    setLineupData(_temp_tempData__WEBPACK_IMPORTED_MODULE_7__[\"lineupTempData\"]);\n    console.log(lineupData);\n  }\n\n  var getStartXI = function getStartXI(startXI) {\n    var squad = {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    };\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          squad.gk = item;\n          break;\n\n        case \"D\":\n          squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.df, item);\n          break;\n\n        case \"M\":\n          squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.cm, item);\n          break;\n\n        case \"F\":\n          squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return squad;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"l\");\n    var homeSquad = getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI);\n    var awaySquad = getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(lineupData.response).startXI);\n    console.log(lineupData);\n    console.log(homeSquad);\n  }, []); // const homeTeam = {\n  //     \"color\": \"red\",\n  //     \"squad\": getStartXI(homeData.startXI)\n  // }\n  // const awayTeam = {\n  //     \"color\": \"blue\",\n  //     \"squad\": getStartXI(last(lineupData.response).startXI)\n  // }\n\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\" // homeTeam={ homeTeam }\n    // awayTeam={ awayTeam }\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"Z2OPtOp7hHsvtTW4A5TwJ98OA/E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVNxdWFkIiwic2V0SG9tZVNxdWFkIiwiYXdheVNxdWFkIiwic2V0QXdheVNxdWFkIiwibGluZXVwVGVtcERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhcnRYSSIsInN0YXJ0WEkiLCJzcXVhZCIsImZvckVhY2giLCJpdGVtIiwicGxheWVyIiwicG9zIiwiZ2siLCJkZiIsImNvbmNhdCIsImNtIiwiZnciLCJ1c2VFZmZlY3QiLCJoZWFkIiwicmVzcG9uc2UiLCJsYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQVY7QUFBQSxHQUFOLENBQVosQ0FEWDtBQUFBLE1BQzFCQSxVQUQwQjtBQUFBLE1BQ2RDLGFBRGM7O0FBQUEsbUJBRUNKLHNEQUFRLENBQUMsSUFBRCxDQUZUO0FBQUEsTUFFMUJLLFNBRjBCO0FBQUEsTUFFZkMsWUFGZTs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUlqQyxNQUFJTCxVQUFVLEtBQUssSUFBbkIsRUFBd0I7QUFDcEJDLGlCQUFhLENBQUNLLDZEQUFELENBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLFVBQVo7QUFDSDs7QUFDRCxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDNUIsUUFBSUMsS0FBSyxHQUFHO0FBQUUsWUFBTSxFQUFSO0FBQVksWUFBTSxFQUFsQjtBQUFzQixZQUFNLEVBQTVCO0FBQWdDLFlBQU07QUFBdEMsS0FBWjtBQUNBQyx5REFBTyxDQUFDRixPQUFELEVBQVUsVUFBQUcsSUFBSSxFQUFJO0FBQ3JCLGNBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxHQUFuQjtBQUNJLGFBQUssR0FBTDtBQUNJSixlQUFLLENBQUNLLEVBQU4sR0FBV0gsSUFBWDtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixlQUFLLENBQUNNLEVBQU4sR0FBV0Msb0RBQU0sQ0FBQ1AsS0FBSyxDQUFDTSxFQUFQLEVBQVdKLElBQVgsQ0FBakI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsZUFBSyxDQUFDUSxFQUFOLEdBQVdELG9EQUFNLENBQUNQLEtBQUssQ0FBQ1EsRUFBUCxFQUFXTixJQUFYLENBQWpCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGVBQUssQ0FBQ1MsRUFBTixHQUFXRixvREFBTSxDQUFDUCxLQUFLLENBQUNTLEVBQVAsRUFBV1AsSUFBWCxDQUFqQjtBQUNBOztBQUNKO0FBQ0k7QUFkUjtBQWdCSCxLQWpCTSxDQUFQO0FBa0JBLFdBQU9GLEtBQVA7QUFDSCxHQXJCRDs7QUF1QkFVLHlEQUFTLENBQUMsWUFBTTtBQUNaZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBR0EsUUFBTU4sU0FBUyxHQUFHTyxVQUFVLENBQUNhLGtEQUFJLENBQUN0QixVQUFVLENBQUN1QixRQUFaLENBQUosQ0FBMEJiLE9BQTNCLENBQTVCO0FBQ0EsUUFBTU4sU0FBUyxHQUFHSyxVQUFVLENBQUNlLGtEQUFJLENBQUN4QixVQUFVLENBQUN1QixRQUFaLENBQUosQ0FBMEJiLE9BQTNCLENBQTVCO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBQ0gsR0FSUSxFQVFOLEVBUk0sQ0FBVCxDQS9CaUMsQ0EwQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFHLE9BRFg7QUFFSSxTQUFLLEVBQUcsZUFGWjtBQUdJLFdBQU8sRUFBRyxTQUhkLENBSUk7QUFDQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBN0REOztHQUFNUCxhO1VBQzJDRyx1RDs7O0tBRDNDSCxhO0FBOERTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRml4dHVyZUxpbmV1cC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBoZWFkIGZyb20gJ2xvZGFzaC9oZWFkJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICdsb2Rhc2gvY29uY2F0J1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnXG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCdcbmltcG9ydCBTb2NjZXJMaW5lVXAgZnJvbSAncmVhY3Qtc29jY2VyLWxpbmV1cCdcbmltcG9ydCB7bGluZXVwVGVtcERhdGF9IGZyb20gJy4uL3RlbXAvdGVtcERhdGEnXG5cbmNvbnN0IEZpeHR1cmVMaW5ldXAgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgY29uc3QgW2xpbmV1cERhdGEsIHNldExpbmV1cERhdGFdID0gdXNlU3RhdGUodXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGluZXVwRGF0YSkpXG4gICAgY29uc3QgW2hvbWVTcXVhZCwgc2V0SG9tZVNxdWFkXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2F3YXlTcXVhZCwgc2V0QXdheVNxdWFkXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgaWYgKGxpbmV1cERhdGEgPT09IG51bGwpe1xuICAgICAgICBzZXRMaW5ldXBEYXRhKGxpbmV1cFRlbXBEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhsaW5ldXBEYXRhKVxuICAgIH1cbiAgICBjb25zdCBnZXRTdGFydFhJID0gKHN0YXJ0WEkpID0+IHtcbiAgICAgICAgbGV0IHNxdWFkID0geyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH1cbiAgICAgICAgZm9yRWFjaChzdGFydFhJLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnBsYXllci5wb3Mpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmdrID0gaXRlbVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmRmID0gY29uY2F0KHNxdWFkLmRmLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmNtID0gY29uY2F0KHNxdWFkLmNtLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgICAgICAgICAgIHNxdWFkLmZ3ID0gY29uY2F0KHNxdWFkLmZ3LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzcXVhZFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcImxcIilcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgaG9tZVNxdWFkID0gZ2V0U3RhcnRYSShoZWFkKGxpbmV1cERhdGEucmVzcG9uc2UpLnN0YXJ0WEkpXG4gICAgICAgIGNvbnN0IGF3YXlTcXVhZCA9IGdldFN0YXJ0WEkobGFzdChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJKVxuICAgICAgICBjb25zb2xlLmxvZyhsaW5ldXBEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhob21lU3F1YWQpXG4gICAgfSwgW10pXG4gICAgXG5cbiAgICAvLyBjb25zdCBob21lVGVhbSA9IHtcbiAgICAvLyAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgIC8vICAgICBcInNxdWFkXCI6IGdldFN0YXJ0WEkoaG9tZURhdGEuc3RhcnRYSSlcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgYXdheVRlYW0gPSB7XG4gICAgLy8gICAgIFwiY29sb3JcIjogXCJibHVlXCIsXG4gICAgLy8gICAgIFwic3F1YWRcIjogZ2V0U3RhcnRYSShsYXN0KGxpbmV1cERhdGEucmVzcG9uc2UpLnN0YXJ0WEkpXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNvY2NlckxpbmVVcFxuICAgICAgICAgICAgc2l6ZT17IFwic21hbGxcIiB9XG4gICAgICAgICAgICBjb2xvcj17IFwibGlnaHRzZWFncmVlblwiIH1cbiAgICAgICAgICAgIHBhdHRlcm49eyBcImNpcmNsZXNcIiB9XG4gICAgICAgICAgICAvLyBob21lVGVhbT17IGhvbWVUZWFtIH1cbiAgICAgICAgICAgIC8vIGF3YXlUZWFtPXsgYXdheVRlYW0gfVxuICAgICAgICAvPlxuICAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgRml4dHVyZUxpbmV1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})