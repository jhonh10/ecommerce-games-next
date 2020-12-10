webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/Cart/Payment/FormPayment/FormPayment.js":
/*!************************************************************!*\
  !*** ./components/Cart/Payment/FormPayment/FormPayment.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormPayment; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useAuth */ "./hooks/useAuth.js");
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useCart */ "./hooks/useCart.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../api/cart */ "./api/cart.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\components\\Cart\\Payment\\FormPayment\\FormPayment.js",
    _s = $RefreshSig$();










function FormPayment(_ref) {
  _s();

  var adress = _ref.adress,
      products = _ref.products;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useElements"])();

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      auth = _useAuth.auth,
      logout = _useAuth.logout;

  var _useCart = Object(_hooks_useCart__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      removeAllProductsCart = _useCart.removeAllProductsCart;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var cardElement, result, response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setLoading(true);

              if (!(!stripe || !elements)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["CardElement"]);
              _context.next = 7;
              return stripe.createToken(cardElement);

            case 7:
              result = _context.sent;

              if (!result.error) {
                _context.next = 12;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(result.error.message);
              _context.next = 16;
              break;

            case 12:
              _context.next = 14;
              return Object(_api_cart__WEBPACK_IMPORTED_MODULE_11__["paymentCardApi"])(result.token, products, auth.idUser, adress, logout);

            case 14:
              response = _context.sent;

              if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["size"])(response) > 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("Pedido realizado correctamente");
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Error al realizar el pedido");
              }

            case 16:
              setLoading(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    className: "form-payment",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      loading: loading,
      disabled: !stripe,
      children: "Pagar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

_s(FormPayment, "Y1Lg577wNBIbxdIBc59INHdUzbA=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useElements"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useCart__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = FormPayment;

var _c;

$RefreshReg$(_c, "FormPayment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L1BheW1lbnQvRm9ybVBheW1lbnQvRm9ybVBheW1lbnQuanMiXSwibmFtZXMiOlsiRm9ybVBheW1lbnQiLCJhZHJlc3MiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwidXNlQXV0aCIsImF1dGgiLCJsb2dvdXQiLCJ1c2VDYXJ0IiwicmVtb3ZlQWxsUHJvZHVjdHNDYXJ0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJjcmVhdGVUb2tlbiIsInJlc3VsdCIsImVycm9yIiwidG9hc3QiLCJtZXNzYWdlIiwicGF5bWVudENhcmRBcGkiLCJ0b2tlbiIsImlkVXNlciIsInJlc3BvbnNlIiwic2l6ZSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDeEJDLHNEQUFRLENBQUMsS0FBRCxDQURnQjtBQUFBLE1BQy9DQyxPQUQrQztBQUFBLE1BQ3RDQyxVQURzQzs7QUFFdEQsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsMkVBQVcsRUFBNUI7O0FBSHNELGlCQUk3QkMsOERBQU8sRUFKc0I7QUFBQSxNQUk5Q0MsSUFKOEMsWUFJOUNBLElBSjhDO0FBQUEsTUFJeENDLE1BSndDLFlBSXhDQSxNQUp3Qzs7QUFBQSxpQkFLcEJDLCtEQUFPLEVBTGE7QUFBQSxNQUs5Q0MscUJBTDhDLFlBSzlDQSxxQkFMOEM7O0FBT3RELE1BQU1DLFlBQVk7QUFBQSx1V0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBWix3QkFBVSxDQUFDLElBQUQsQ0FBVjs7QUFGaUIsb0JBR2IsQ0FBQ0MsTUFBRCxJQUFXLENBQUNFLFFBSEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFLWFUseUJBTFcsR0FLR1YsUUFBUSxDQUFDVyxVQUFULENBQW9CQyxtRUFBcEIsQ0FMSDtBQUFBO0FBQUEscUJBTUlkLE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQkgsV0FBbkIsQ0FOSjs7QUFBQTtBQU1YSSxvQkFOVzs7QUFBQSxtQkFPYkEsTUFBTSxDQUFDQyxLQVBNO0FBQUE7QUFBQTtBQUFBOztBQVFiQyxrRUFBSyxDQUFDRCxLQUFOLENBQVlELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRSxPQUF6QjtBQVJhO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVVVQyxpRUFBYyxDQUNqQ0osTUFBTSxDQUFDSyxLQUQwQixFQUVqQ3pCLFFBRmlDLEVBR2pDUyxJQUFJLENBQUNpQixNQUg0QixFQUlqQzNCLE1BSmlDLEVBS2pDVyxNQUxpQyxDQVZ4Qjs7QUFBQTtBQVVQaUIsc0JBVk87O0FBaUJiLGtCQUFJQyxtREFBSSxDQUFDRCxRQUFELENBQUosR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJMLG9FQUFLLENBQUNPLE9BQU4sQ0FBYyxnQ0FBZDtBQUNILGVBRkQsTUFFTztBQUNIUCxvRUFBSyxDQUFDRCxLQUFOLENBQVksNkJBQVo7QUFDSDs7QUFyQlk7QUF1QmpCbEIsd0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBdkJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVSxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXlCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUErQixZQUFRLEVBQUVBLFlBQXpDO0FBQUEsNEJBQ0kscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVYLE9BQS9CO0FBQXdDLGNBQVEsRUFBRSxDQUFDRSxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBdEN1Qk4sVztVQUVMTyxpRSxFQUNFRSxtRSxFQUNRQyxzRCxFQUNTRyx1RDs7O0tBTGRiLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC43ZGJlMWYwODdjNjI1ZmU3OTRhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHNpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHVzZUNhcnQgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlQ2FydCc7XHJcbmltcG9ydCB7IHBheW1lbnRDYXJkQXBpIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2NhcnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1QYXltZW50KHsgYWRyZXNzLCBwcm9kdWN0cyB9KSB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuICAgIGNvbnN0IHsgYXV0aCwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZUFsbFByb2R1Y3RzQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFzdHJpcGUgfHwgIWVsZW1lbnRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVRva2VuKGNhcmRFbGVtZW50KTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3VsdC5lcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcGF5bWVudENhcmRBcGkoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQudG9rZW4sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgIGF1dGguaWRVc2VyLFxyXG4gICAgICAgICAgICAgICAgYWRyZXNzLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChzaXplKHJlc3BvbnNlKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQZWRpZG8gcmVhbGl6YWRvIGNvcnJlY3RhbWVudGVcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgYWwgcmVhbGl6YXIgZWwgcGVkaWRvXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tcGF5bWVudFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9hZGluZ30gZGlzYWJsZWQ9eyFzdHJpcGV9PlBhZ2FyPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=