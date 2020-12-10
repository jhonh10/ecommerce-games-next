webpackHotUpdate_N_E("pages/orders",{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Order */ "./components/Order/index.js");




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

  console.log(orders);
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
              setOrders(response || []);

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
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "data",
        children: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["size"])(orders) === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          style: {
            textAlign: "center"
          },
          children: "No has realizado compras"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(OrderList, {
          orders: orders
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(Orders, "WSWOE+B1tACcJ6sqPXq3yObCF4g=", false, function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Orders;

function OrderList(_ref2) {
  var _this = this;

  var orders = _ref2.orders;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    children: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(orders, function (order) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        mobile: 16,
        tablet: 8,
        computer: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Order__WEBPACK_IMPORTED_MODULE_9__["default"], {
          order: order
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_c2 = OrderList;

var _c, _c2;

$RefreshReg$(_c, "Orders");
$RefreshReg$(_c2, "OrderList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIk9yZGVycyIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwidXNlQXV0aCIsImF1dGgiLCJsb2dvdXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0T3JkZXJzQXBpIiwiaWRVc2VyIiwicmVzcG9uc2UiLCJzaXplIiwidGV4dEFsaWduIiwiT3JkZXJMaXN0IiwibWFwIiwib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ3RCQyxNQURzQjtBQUFBLE1BQ2RDLFNBRGM7O0FBQUEsaUJBRUpDLDhEQUFPLEVBRkg7QUFBQSxNQUVyQkMsSUFGcUIsWUFFckJBLElBRnFCO0FBQUEsTUFFZkMsTUFGZSxZQUVmQSxNQUZlOztBQUc3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVo7QUFFQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1osMlZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMEJDLCtEQUFZLENBQUNMLElBQUksQ0FBQ00sTUFBTixFQUFjTCxNQUFkLENBRHRDOztBQUFBO0FBQ1NNLHNCQURUO0FBRUdULHVCQUFTLENBQUNTLFFBQVEsSUFBSSxFQUFiLENBQVQ7O0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUlILEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyw0REFBRDtBQUFhLGFBQVMsRUFBQyxRQUF2QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFDS0MsbURBQUksQ0FBQ1gsTUFBRCxDQUFKLEtBQWlCLENBQWpCLGdCQUNHO0FBQUksZUFBSyxFQUFFO0FBQUVZLHFCQUFTLEVBQUU7QUFBYixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUtPLHFFQUFDLFNBQUQ7QUFBVyxnQkFBTSxFQUFFWjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7R0EzQnVCRixNO1VBRUtJLHNEOzs7S0FGTEosTTs7QUE2QnhCLFNBQVNlLFNBQVQsUUFBK0I7QUFBQTs7QUFBQSxNQUFWYixNQUFVLFNBQVZBLE1BQVU7QUFDM0Isc0JBQ0kscUVBQUMsc0RBQUQ7QUFBQSxjQUNLYyxrREFBRyxDQUFDZCxNQUFELEVBQVMsVUFBQ2UsS0FBRDtBQUFBLDBCQUNULHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGNBQU0sRUFBRSxFQUFyQjtBQUF5QixjQUFNLEVBQUUsQ0FBakM7QUFBb0MsZ0JBQVEsRUFBRSxDQUE5QztBQUFBLCtCQUNJLHFFQUFDLHlEQUFEO0FBQU8sZUFBSyxFQUFFQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFUO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O01BVlFGLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLmJlMDdkM2NhNWFkMDY4MzVlZWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQmFzaWNMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9CYXNpY0xheW91dCc7XHJcbmltcG9ydCB7IGdldE9yZGVyc0FwaSB9IGZyb20gJy4uL2FwaS9vcmRlcic7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgeyBtYXAsIHNpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9PcmRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVycygpIHtcclxuICAgIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgYXV0aCwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zb2xlLmxvZyhvcmRlcnMpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE9yZGVyc0FwaShhdXRoLmlkVXNlciwgbG9nb3V0KTtcclxuICAgICAgICAgICAgc2V0T3JkZXJzKHJlc3BvbnNlIHx8IFtdKTtcclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNpY0xheW91dCBjbGFzc05hbWU9XCJvcmRlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcnNfX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+TWlzIFBlZGlkb3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaXplKG9yZGVycykgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBoYXMgcmVhbGl6YWRvIGNvbXByYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyTGlzdCBvcmRlcnM9e29yZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jhc2ljTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBPcmRlckxpc3QoeyBvcmRlcnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAge21hcChvcmRlcnMsIChvcmRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcmRlciBvcmRlcj17b3JkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==