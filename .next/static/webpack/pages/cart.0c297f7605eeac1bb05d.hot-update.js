webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator */ "./node_modules/@babel/runtime/helpers/esm/asyncIterator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/game */ "./api/game.js");
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useCart */ "./hooks/useCart.js");
/* harmony import */ var _components_Cart_SummaryCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Cart/SummaryCart */ "./components/Cart/SummaryCart/index.js");
/* harmony import */ var _components_Cart_ShippingAdress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Cart/ShippingAdress */ "./components/Cart/ShippingAdress/index.js");
/* harmony import */ var _components_Cart_Payment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cart/Payment */ "./components/Cart/Payment/index.js");





var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\cart.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();








function Cart() {
  _s();

  var _useCart = Object(_hooks_useCart__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      getProductsCart = _useCart.getProductsCart;

  var products = getProductsCart();
  return !products ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(EmptyCart, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 24
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(FullCart, {
    products: products
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 40
  }, this);
}

_s(Cart, "aQ9NHNvOtdpsZMTUFTcKwrmGYNQ=", false, function () {
  return [_hooks_useCart__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Cart;

function EmptyCart() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "empty-cart",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
      children: "No hay productos en el carrito"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_c2 = EmptyCart;

function FullCart(_ref) {
  _s2();

  var products = _ref.products;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      productsData = _useState[0],
      setProductsData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      reloadCart = _useState2[0],
      setReloadCart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      adress = _useState3[0],
      setAdress = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var productsTemp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, product, data;

      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productsTemp = [];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__["default"])(products);

            case 5:
              _context.next = 7;
              return _iterator.next();

            case 7:
              _step = _context.sent;
              _iteratorNormalCompletion = _step.done;
              _context.next = 11;
              return _step.value;

            case 11:
              _value = _context.sent;

              if (_iteratorNormalCompletion) {
                _context.next = 21;
                break;
              }

              product = _value;
              _context.next = 16;
              return Object(_api_game__WEBPACK_IMPORTED_MODULE_6__["getGameByUrlApi"])(product);

            case 16:
              data = _context.sent;
              productsTemp.push(data);

            case 18:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 21:
              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 27:
              _context.prev = 27;
              _context.prev = 28;

              if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                _context.next = 32;
                break;
              }

              _context.next = 32;
              return _iterator["return"]();

            case 32:
              _context.prev = 32;

              if (!_didIteratorError) {
                _context.next = 35;
                break;
              }

              throw _iteratorError;

            case 35:
              return _context.finish(32);

            case 36:
              return _context.finish(27);

            case 37:
              setProductsData(productsTemp);

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 23, 27, 37], [28,, 32, 36]]);
    }))();

    setReloadCart(false);
  }, [reloadCart]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "empty-cart",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Cart_SummaryCart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      products: productsData,
      setReloadCart: setReloadCart,
      reloadCart: reloadCart
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Cart_ShippingAdress__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAdress: setAdress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), adress && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Cart_Payment__WEBPACK_IMPORTED_MODULE_10__["default"], {
      products: productsData,
      adress: adress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s2(FullCart, "VM9vr68BZWVzlLsSw4+glD/Uh3w=");

_c3 = FullCart;

var _c, _c2, _c3;

$RefreshReg$(_c, "Cart");
$RefreshReg$(_c2, "EmptyCart");
$RefreshReg$(_c3, "FullCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0IiwidXNlQ2FydCIsImdldFByb2R1Y3RzQ2FydCIsInByb2R1Y3RzIiwiRW1wdHlDYXJ0IiwiRnVsbENhcnQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzRGF0YSIsInNldFByb2R1Y3RzRGF0YSIsInJlbG9hZENhcnQiLCJzZXRSZWxvYWRDYXJ0IiwiYWRyZXNzIiwic2V0QWRyZXNzIiwidXNlRWZmZWN0IiwicHJvZHVjdHNUZW1wIiwicHJvZHVjdCIsImdldEdhbWVCeVVybEFwaSIsImRhdGEiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGlCQUNDQyw4REFBTyxFQURSO0FBQUEsTUFDbkJDLGVBRG1CLFlBQ25CQSxlQURtQjs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHRCxlQUFlLEVBQWhDO0FBQ0EsU0FBTyxDQUFDQyxRQUFELGdCQUFZLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFaLGdCQUE0QixxRUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFFQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQW5DO0FBRUg7O0dBTHVCSCxJO1VBQ1FDLHNEOzs7S0FEUkQsSTs7QUFPeEIsU0FBU0ksU0FBVCxHQUFxQjtBQUNqQixzQkFDSSxxRUFBQyw0REFBRDtBQUFhLGFBQVMsRUFBQyxZQUF2QjtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O01BTlFBLFM7O0FBUVQsU0FBU0MsUUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVpGLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDWUcsc0RBQVEsQ0FBQyxJQUFELENBRHBCO0FBQUEsTUFDckJDLFlBRHFCO0FBQUEsTUFDUEMsZUFETzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFckJHLFVBRnFCO0FBQUEsTUFFVEMsYUFGUzs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQyxJQUFELENBSFI7QUFBQSxNQUdyQkssTUFIcUI7QUFBQSxNQUdiQyxTQUhhOztBQUs1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osMlZBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNTQywwQkFEVCxHQUN3QixFQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNNQUUrQlgsUUFGL0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFb0JZLHFCQUZwQjtBQUFBO0FBQUEscUJBRzBCQyxpRUFBZSxDQUFDRCxPQUFELENBSHpDOztBQUFBO0FBR2FFLGtCQUhiO0FBSU9ILDBCQUFZLENBQUNJLElBQWIsQ0FBa0JELElBQWxCOztBQUpQO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBTUdULDZCQUFlLENBQUNNLFlBQUQsQ0FBZjs7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQVFBSixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNILEdBVlEsRUFVTixDQUFDRCxVQUFELENBVk0sQ0FBVDtBQVdBLHNCQUNJLHFFQUFDLDREQUFEO0FBQWEsYUFBUyxFQUFDLFlBQXZCO0FBQUEsNEJBQ0kscUVBQUMsb0VBQUQ7QUFBYSxjQUFRLEVBQUVGLFlBQXZCO0FBQXFDLG1CQUFhLEVBQUVHLGFBQXBEO0FBQW1FLGdCQUFVLEVBQUVEO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLHVFQUFEO0FBQWdCLGVBQVMsRUFBRUc7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0tELE1BQU0saUJBQUkscUVBQUMsaUVBQUQ7QUFBVSxjQUFRLEVBQUVKLFlBQXBCO0FBQWtDLFlBQU0sRUFBRUk7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0lBdkJRTixROztNQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuMGMyOTdmNzYwNWVlYWMxYmIwNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0R2FtZUJ5VXJsQXBpIH0gZnJvbSAnLi4vYXBpL2dhbWUnO1xyXG5pbXBvcnQgdXNlQ2FydCBmcm9tICcuLi9ob29rcy91c2VDYXJ0JztcclxuaW1wb3J0IFN1bW1hcnlDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydC9TdW1tYXJ5Q2FydCc7XHJcbmltcG9ydCBTaGlwcGluZ0FkcmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQvU2hpcHBpbmdBZHJlc3MnO1xyXG5pbXBvcnQgUGF5bWVudCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQvUGF5bWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgZ2V0UHJvZHVjdHNDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgcmV0dXJuICFwcm9kdWN0cyA/IDxFbXB0eUNhcnQgLz4gOiA8RnVsbENhcnQgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gRW1wdHlDYXJ0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzaWNMYXlvdXQgY2xhc3NOYW1lPVwiZW1wdHktY2FydFwiPlxyXG4gICAgICAgICAgICA8aDI+Tm8gaGF5IHByb2R1Y3RvcyBlbiBlbCBjYXJyaXRvPC9oMj5cclxuICAgICAgICA8L0Jhc2ljTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBGdWxsQ2FydCh7IHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IFtwcm9kdWN0c0RhdGEsIHNldFByb2R1Y3RzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtyZWxvYWRDYXJ0LCBzZXRSZWxvYWRDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthZHJlc3MsIHNldEFkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzVGVtcCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRHYW1lQnlVcmxBcGkocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1RlbXAucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQcm9kdWN0c0RhdGEocHJvZHVjdHNUZW1wKVxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBzZXRSZWxvYWRDYXJ0KGZhbHNlKTtcclxuICAgIH0sIFtyZWxvYWRDYXJ0XSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2ljTGF5b3V0IGNsYXNzTmFtZT1cImVtcHR5LWNhcnRcIj5cclxuICAgICAgICAgICAgPFN1bW1hcnlDYXJ0IHByb2R1Y3RzPXtwcm9kdWN0c0RhdGF9IHNldFJlbG9hZENhcnQ9e3NldFJlbG9hZENhcnR9IHJlbG9hZENhcnQ9e3JlbG9hZENhcnR9IC8+XHJcbiAgICAgICAgICAgIDxTaGlwcGluZ0FkcmVzcyBzZXRBZHJlc3M9e3NldEFkcmVzc30vPlxyXG4gICAgICAgICAgICB7YWRyZXNzICYmIDxQYXltZW50ICBwcm9kdWN0cz17cHJvZHVjdHNEYXRhfSBhZHJlc3M9e2FkcmVzc30vPn1cclxuICAgICAgICA8L0Jhc2ljTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=