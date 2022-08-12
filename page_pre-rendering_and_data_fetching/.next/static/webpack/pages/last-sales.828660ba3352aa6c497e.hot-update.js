webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/ryankim/Downloads/nextjs-rev-2/page_pre-rendering_and_data_fetching/pages/last-sales.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar LastSalesPage = function LastSalesPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      sales = _useState[0],\n      setSales = _useState[1]; // const [isLoading, setIsLoading] = useState(false);\n\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var transformedSales = [];\n\n      for (var key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\", fetcher),\n      error = _useSWR.error; // useEffect(() => {\n  //   setIsLoading(true);\n  //   fetch(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\")\n  //     .then((response) => response.json())\n  //     .then((data) => {\n  //       const transformedSales = [];\n  //       for (const key in data) {\n  //         transformedSales.push({\n  //           id: key,\n  //           username: data[key].username,\n  //           volume: data[key].volume,\n  //         });\n  //       }\n  //       setSales(transformedSales);\n  //       setIsLoading(false);\n  //     });\n  // }, []);\n\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(function (sale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(LastSalesPage, \"qvq6DjhL1CGJaL3VCTodU4LF++4=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LastSalesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwic2FsZXMiLCJzZXRTYWxlcyIsImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsInVzZVNXUiIsImVycm9yIiwibWFwIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBb0JBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUIsaUJBRS9COzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQ2RDLEtBQUssTUFBTCxvQkFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFVBQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFdBQUssSUFBTUMsR0FBWCxJQUFrQkYsSUFBbEIsRUFBd0I7QUFDdEJDLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsWUFBRSxFQUFFRixHQURnQjtBQUVwQkcsa0JBQVEsRUFBRUwsSUFBSSxDQUFDRSxHQUFELENBQUosQ0FBVUcsUUFGQTtBQUdwQkMsZ0JBQU0sRUFBRU4sSUFBSSxDQUFDRSxHQUFELENBQUosQ0FBVUk7QUFIRSxTQUF0QjtBQUtEOztBQUVEWixjQUFRLENBQUNPLGdCQUFELENBQVI7QUFDRCxLQWRILENBRGM7QUFBQSxHQUFoQjs7QUFKK0IsZ0JBcUJiTSxtREFBTSxDQUN0QixvRUFEc0IsRUFFdEJaLE9BRnNCLENBckJPO0FBQUEsTUFxQnZCYSxLQXJCdUIsV0FxQnZCQSxLQXJCdUIsRUF5Qi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlBLEtBQUosRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNmLEtBQUwsRUFBWTtBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1Q7QUFBQSxtQkFDR0EsSUFBSSxDQUFDTCxRQURSLFVBQ3NCSyxJQUFJLENBQUNKLE1BRDNCO0FBQUEsU0FBU0ksSUFBSSxDQUFDTixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTlERDs7R0FBTWQsYTtVQXFCY2lCLDJDOzs7S0FyQmRqQixhOztBQWdFU0EsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtODRlZTAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xuICAgIH0pO1xufVxuXG5jb25zdCBMYXN0U2FsZXNQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+XG4gICAgZmV0Y2goLi4uYXJncylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAgICAgfSk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTg0ZWUwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCIsXG4gICAgZmV0Y2hlclxuICApO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgLy8gICBmZXRjaChcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS04NGVlMC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiKVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cbiAgLy8gICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAvLyAgICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gIC8vICAgICAgICAgICBpZDoga2V5LFxuICAvLyAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgLy8gICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAvLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPHA+RmFpbGVkIHRvIGxvYWQ8L3A+O1xuICB9XG5cbiAgaWYgKCFzYWxlcykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

})