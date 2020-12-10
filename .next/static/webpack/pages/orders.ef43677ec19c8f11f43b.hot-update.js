webpackHotUpdate_N_E("pages/orders",{

/***/ "./api/order.js":
/*!**********************!*\
  !*** ./api/order.js ***!
  \**********************/
/*! exports provided: getOrdersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersApi", function() { return getOrdersApi; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");





function getOrdersApi(_x, _x2) {
  return _getOrdersApi.apply(this, arguments);
}

function _getOrdersApi() {
  _getOrdersApi = Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idUser, logout) {
    var url, _result;

    return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], "/orders?_sort=createdAt:desc&user").concat(idUser);
            _result = Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_4__["authFetch"])(url, null, logout);
            return _context.abrupt("return", _result);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", null);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _getOrdersApi.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orders; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var _api_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/order */ "./api/order.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useAuth */ "./hooks/useAuth.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\orders.js",
    _s = $RefreshSig$();






function Orders() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      orders = _useState[0],
      setOrders = _useState[1];

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      auth = _useAuth.auth,
      logout = _useAuth.logout;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_order__WEBPACK_IMPORTED_MODULE_6__["getOrdersApi"])(auth.idUser, logout);

            case 2:
              response = _context.sent;
              setOrders(response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "orders",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "orders__block",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "title",
        children: "Mis Pedidos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "data",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Lista de pedidos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Orders, "tIoMw5pHOu+4cT9Xkb/CbhY+eoc=", false, function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Orders;

var _c;

$RefreshReg$(_c, "Orders");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL29yZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9vcmRlcnMuanMiXSwibmFtZXMiOlsiZ2V0T3JkZXJzQXBpIiwiaWRVc2VyIiwibG9nb3V0IiwidXJsIiwiQkFTRV9QQVRIIiwicmVzdWx0IiwiYXV0aEZldGNoIiwiY29uc29sZSIsImxvZyIsIk9yZGVycyIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwidXNlQXV0aCIsImF1dGgiLCJ1c2VFZmZlY3QiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBZUEsWUFBdEI7QUFBQTtBQUFBOzs7eVdBQU8saUJBQTRCQyxNQUE1QixFQUFvQ0MsTUFBcEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUdDLGVBRkgsYUFFWUMsMERBRlosOENBRXlESCxNQUZ6RDtBQUdHSSxtQkFISCxHQUdZQyw4REFBUyxDQUFDSCxHQUFELEVBQU0sSUFBTixFQUFZRCxNQUFaLENBSHJCO0FBQUEsNkNBSUlHLE9BSko7O0FBQUE7QUFBQTtBQUFBO0FBTUhFLG1CQUFPLENBQUNDLEdBQVI7QUFORyw2Q0FPSSxJQVBKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ3RCQyxNQURzQjtBQUFBLE1BQ2RDLFNBRGM7O0FBQUEsaUJBRU5DLDhEQUFPLEVBRkQ7QUFBQSxNQUV0QkMsSUFGc0IsWUFFdEJBLElBRnNCO0FBQUEsTUFFaEJaLE1BRmdCLFlBRWhCQSxNQUZnQjs7QUFJN0JhLHlEQUFTLENBQUMsWUFBTTtBQUNkLDJWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzBCZiwrREFBWSxDQUFDYyxJQUFJLENBQUNiLE1BQU4sRUFBY0MsTUFBZCxDQUR0Qzs7QUFBQTtBQUNTYyxzQkFEVDtBQUVHSix1QkFBUyxDQUFDSSxRQUFELENBQVQ7O0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUlELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyw0REFBRDtBQUFhLGFBQVMsRUFBQyxRQUF2QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQWxCdUJQLE07VUFFR0ksc0Q7OztLQUZISixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVycy5lZjQzNjc3ZWMxOWM4ZjExZjQzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzdWx0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYXV0aEZldGNoIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyc0FwaShpZFVzZXIsIGxvZ291dCl7XHJcbnRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L29yZGVycz9fc29ydD1jcmVhdGVkQXQ6ZGVzYyZ1c2VyJHtpZFVzZXJ9YDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF1dGhGZXRjaCh1cmwsIG51bGwsIGxvZ291dCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0T3JkZXJzQXBpIH0gZnJvbSAnLi4vYXBpL29yZGVyJztcclxuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi4vaG9va3MvdXNlQXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnMoKSB7XHJcbiAgICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7YXV0aCwgbG9nb3V0fSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAoYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE9yZGVyc0FwaShhdXRoLmlkVXNlciwgbG9nb3V0KTtcclxuICAgICAgICAgIHNldE9yZGVycyhyZXNwb25zZSk7XHJcbiAgICAgIH0pKClcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2ljTGF5b3V0IGNsYXNzTmFtZT1cIm9yZGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyc19fYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5NaXMgUGVkaWRvczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+PHA+TGlzdGEgZGUgcGVkaWRvczwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CYXNpY0xheW91dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9