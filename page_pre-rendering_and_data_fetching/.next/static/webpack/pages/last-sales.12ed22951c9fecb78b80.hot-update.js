webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/ryankim/Downloads/nextjs-rev-2/page_pre-rendering_and_data_fetching/pages/last-sales.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar LastSalesPage = function LastSalesPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales),\n      sales = _useState[0],\n      setSales = _useState[1]; // const [isLoading, setIsLoading] = useState(false);\n\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var transformedSales = [];\n\n      for (var key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\", fetcher),\n      error = _useSWR.error; // useEffect(() => {\n  //   setIsLoading(true);\n  //   fetch(\"https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json\")\n  //     .then((response) => response.json())\n  //     .then((data) => {\n  //       const transformedSales = [];\n  //       for (const key in data) {\n  //         transformedSales.push({\n  //           id: key,\n  //           username: data[key].username,\n  //           volume: data[key].volume,\n  //         });\n  //       }\n  //       setSales(transformedSales);\n  //       setIsLoading(false);\n  //     });\n  // }, []);\n\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 12\n    }, _this);\n  } // if (!sales) {\n  //   return <p>Loading...</p>;\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(function (sale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(LastSalesPage, \"LcoG6HeSMDy+vkeq7Em6sMezLkw=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LastSalesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwic2FsZXMiLCJzZXRTYWxlcyIsImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsInVzZVNXUiIsImVycm9yIiwibWFwIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBMEJBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQURIO0FBQUEsTUFDeEJBLEtBRHdCO0FBQUEsTUFDakJDLFFBRGlCLGlCQUUvQjs7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUNkQyxLQUFLLE1BQUwsb0JBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZCxVQUFNQyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JGLElBQWxCLEVBQXdCO0FBQ3RCQyx3QkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0I7QUFDcEJDLFlBQUUsRUFBRUYsR0FEZ0I7QUFFcEJHLGtCQUFRLEVBQUVMLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVHLFFBRkE7QUFHcEJDLGdCQUFNLEVBQUVOLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVJO0FBSEUsU0FBdEI7QUFLRDs7QUFFRFosY0FBUSxDQUFDTyxnQkFBRCxDQUFSO0FBQ0QsS0FkSCxDQURjO0FBQUEsR0FBaEI7O0FBSitCLGdCQXFCYk0sbURBQU0sQ0FDdEIsb0VBRHNCLEVBRXRCWixPQUZzQixDQXJCTztBQUFBLE1BcUJ2QmEsS0FyQnVCLFdBcUJ2QkEsS0FyQnVCLEVBeUIvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFJQSxLQUFKLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0EvQzhCLENBaUQvQjtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUEsY0FDR2YsS0FBSyxDQUFDZ0IsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSwwQkFDVDtBQUFBLG1CQUNHQSxJQUFJLENBQUNMLFFBRFIsVUFDc0JLLElBQUksQ0FBQ0osTUFEM0I7QUFBQSxTQUFTSSxJQUFJLENBQUNOLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBOUREOztHQUFNZCxhO1VBcUJjaUIsMkM7OztLQXJCZGpCLGE7O0FBZ0VTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xhc3Qtc2FsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTg0ZWUwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNhbGVzOiB0cmFuc2Zvcm1lZFNhbGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59XG5cbmNvbnN0IExhc3RTYWxlc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZShwcm9wcy5zYWxlcyk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PlxuICAgIGZldGNoKC4uLmFyZ3MpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgICAgIH0pO1xuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS04NGVlMC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiLFxuICAgIGZldGNoZXJcbiAgKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtODRlZTAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgLy8gICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAvLyAgICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gIC8vICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0pO1xuICAvLyB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPkZhaWxlZCB0byBsb2FkPC9wPjtcbiAgfVxuXG4gIC8vIGlmICghc2FsZXMpIHtcbiAgLy8gICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtzYWxlcy5tYXAoKHNhbGUpID0+IChcbiAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAge3NhbGUudXNlcm5hbWV9IC0gJHtzYWxlLnZvbHVtZX1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

})