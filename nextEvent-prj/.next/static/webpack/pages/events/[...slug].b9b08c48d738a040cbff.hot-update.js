webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ryankim_Downloads_nextjs_rev_2_nextEvent_prj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n\n\n\nvar _jsxFileName = \"/Users/ryankim/Downloads/nextjs-rev-2/nextEvent-prj/pages/events/[...slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar FilteredEventsPage = function FilteredEventsPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var filteredData = router.query.slug;\n\n  if (!filteredData) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }, _this);\n  }\n\n  var _filteredData = Object(_Users_ryankim_Downloads_nextjs_rev_2_nextEvent_prj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredData, 2),\n      year = _filteredData[0],\n      month = _filteredData[1];\n\n  var numYear = +year;\n  var numMonth = +month;\n\n  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"Invalid filter. Please adjust your values;\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }, _this);\n  }\n\n  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_4__[\"getFilteredEvents\"])({\n    year: numYear,\n    month: numMonth\n  });\n\n  if (!filteredEvents || filteredEvents.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"No events found for the chosen filter!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      items: filteredEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = FilteredEventsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlcmVkRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInllYXIiLCJtb250aCIsIm51bVllYXIiLCJudW1Nb250aCIsImlzTmFOIiwiZmlsdGVyZWRFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsWUFBWSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBbEM7O0FBRUEsTUFBSSxDQUFDRixZQUFMLEVBQW1CO0FBQ2pCLHdCQUFPO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQVA4QiwrS0FTVEEsWUFUUztBQUFBLE1BU3hCRyxJQVR3QjtBQUFBLE1BU2xCQyxLQVRrQjs7QUFXL0IsTUFBTUMsT0FBTyxHQUFHLENBQUNGLElBQWpCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLENBQUNGLEtBQWxCOztBQUVBLE1BQ0VHLEtBQUssQ0FBQ0YsT0FBRCxDQUFMLElBQ0FFLEtBQUssQ0FBQ0QsUUFBRCxDQURMLElBRUFELE9BQU8sR0FBRyxJQUZWLElBR0FBLE9BQU8sR0FBRyxJQUhWLElBSUFDLFFBQVEsR0FBRyxDQUpYLElBS0FBLFFBQVEsR0FBRyxFQU5iLEVBT0U7QUFDQSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsY0FBYyxHQUFHQyxxRUFBaUIsQ0FBQztBQUFFTixRQUFJLEVBQUVFLE9BQVI7QUFBaUJELFNBQUssRUFBRUU7QUFBeEIsR0FBRCxDQUF4Qzs7QUFFQSxNQUFJLENBQUNFLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ0UsTUFBZixLQUEwQixDQUFqRCxFQUFvRDtBQUNsRCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxxRUFBRDtBQUFXLFdBQUssRUFBRUY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBcENEOztHQUFNWCxrQjtVQUNXRSxxRDs7O0tBRFhGLGtCO0FBc0NTQSxpRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdFwiO1xuXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9kdW1teS1kYXRhXCI7XG5cbmNvbnN0IEZpbHRlcmVkRXZlbnRzUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgaWYgKCFmaWx0ZXJlZERhdGEpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBjb25zdCBbeWVhciwgbW9udGhdID0gZmlsdGVyZWREYXRhO1xuXG4gIGNvbnN0IG51bVllYXIgPSAreWVhcjtcbiAgY29uc3QgbnVtTW9udGggPSArbW9udGg7XG5cbiAgaWYgKFxuICAgIGlzTmFOKG51bVllYXIpIHx8XG4gICAgaXNOYU4obnVtTW9udGgpIHx8XG4gICAgbnVtWWVhciA+IDIwMzAgfHxcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxuICAgIG51bU1vbnRoIDwgMSB8fFxuICAgIG51bU1vbnRoID4gMTJcbiAgKSB7XG4gICAgcmV0dXJuIDxwPkludmFsaWQgZmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzOzwvcD47XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGdldEZpbHRlcmVkRXZlbnRzKHsgeWVhcjogbnVtWWVhciwgbW9udGg6IG51bU1vbnRoIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})