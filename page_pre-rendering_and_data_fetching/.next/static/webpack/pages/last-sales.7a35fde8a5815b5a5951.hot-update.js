webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/ryankim/Downloads/nextjs-rev-2/page_pre-rendering_and_data_fetching/pages/last-sales.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar LastSalesPage = function LastSalesPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      sales = _useState[0],\n      setSales = _useState[1]; // const [isLoading, setIsLoading] = useState(false);\n\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var transformedSales = [];\n\n      for (var key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\", fetcher),\n      error = _useSWR.error; // useEffect(() => {\n  //   setIsLoading(true);\n  //   fetch(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\")\n  //     .then((response) => response.json())\n  //     .then((data) => {\n  //       const transformedSales = [];\n  //       for (const key in data) {\n  //         transformedSales.push({\n  //           id: key,\n  //           username: data[key].username,\n  //           volume: data[key].volume,\n  //         });\n  //       }\n  //       setSales(transformedSales);\n  //       setIsLoading(false);\n  //     });\n  // }, []);\n\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(function (sale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(LastSalesPage, \"qvq6DjhL1CGJaL3VCTodU4LF++4=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LastSalesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwic2FsZXMiLCJzZXRTYWxlcyIsImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsInVzZVNXUiIsImVycm9yIiwibWFwIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBd0JBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUIsaUJBRS9COzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQ2RDLEtBQUssTUFBTCxvQkFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFVBQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFdBQUssSUFBTUMsR0FBWCxJQUFrQkYsSUFBbEIsRUFBd0I7QUFDdEJDLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsWUFBRSxFQUFFRixHQURnQjtBQUVwQkcsa0JBQVEsRUFBRUwsSUFBSSxDQUFDRSxHQUFELENBQUosQ0FBVUcsUUFGQTtBQUdwQkMsZ0JBQU0sRUFBRU4sSUFBSSxDQUFDRSxHQUFELENBQUosQ0FBVUk7QUFIRSxTQUF0QjtBQUtEOztBQUVEWixjQUFRLENBQUNPLGdCQUFELENBQVI7QUFDRCxLQWRILENBRGM7QUFBQSxHQUFoQjs7QUFKK0IsZ0JBcUJiTSxtREFBTSxDQUN0QixvRUFEc0IsRUFFdEJaLE9BRnNCLENBckJPO0FBQUEsTUFxQnZCYSxLQXJCdUIsV0FxQnZCQSxLQXJCdUIsRUF5Qi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlBLEtBQUosRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNmLEtBQUwsRUFBWTtBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1Q7QUFBQSxtQkFDR0EsSUFBSSxDQUFDTCxRQURSLFVBQ3NCSyxJQUFJLENBQUNKLE1BRDNCO0FBQUEsU0FBU0ksSUFBSSxDQUFDTixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTlERDs7R0FBTWQsYTtVQXFCY2lCLDJDOzs7S0FyQmRqQixhOztBQWdFU0EsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtODRlZTAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2FsZTogdHJhbnNmb3JtZWRTYWxlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG59XG5cbmNvbnN0IExhc3RTYWxlc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpO1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT5cbiAgICBmZXRjaCguLi5hcmdzKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gICAgICB9KTtcblxuICBjb25zdCB7IGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHRqcy1jb3Vyc2UtODRlZTAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIixcbiAgICBmZXRjaGVyXG4gICk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTg0ZWUwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCIpXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuICAvLyAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gIC8vICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIGlkOiBrZXksXG4gIC8vICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAvLyAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gIC8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8cD5GYWlsZWQgdG8gbG9hZDwvcD47XG4gIH1cblxuICBpZiAoIXNhbGVzKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7c2FsZXMubWFwKChzYWxlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52b2x1bWV9XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

})