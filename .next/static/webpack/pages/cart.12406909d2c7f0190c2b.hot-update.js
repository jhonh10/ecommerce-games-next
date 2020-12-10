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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

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
                removeAllProductsCart();
                router.push("/orders");
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
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      loading: loading,
      disabled: !stripe,
      children: "Pagar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s(FormPayment, "W0EPUrqZuL5W2tnZ4AOFakAQqOg=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__["useElements"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useCart__WEBPACK_IMPORTED_MODULE_10__["default"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L1BheW1lbnQvRm9ybVBheW1lbnQvRm9ybVBheW1lbnQuanMiXSwibmFtZXMiOlsiRm9ybVBheW1lbnQiLCJhZHJlc3MiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwidXNlQXV0aCIsImF1dGgiLCJsb2dvdXQiLCJ1c2VDYXJ0IiwicmVtb3ZlQWxsUHJvZHVjdHNDYXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJjcmVhdGVUb2tlbiIsInJlc3VsdCIsImVycm9yIiwidG9hc3QiLCJtZXNzYWdlIiwicGF5bWVudENhcmRBcGkiLCJ0b2tlbiIsImlkVXNlciIsInJlc3BvbnNlIiwic2l6ZSIsInN1Y2Nlc3MiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsV0FBVCxPQUEyQztBQUFBOztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ3hCQyxzREFBUSxDQUFDLEtBQUQsQ0FEZ0I7QUFBQSxNQUMvQ0MsT0FEK0M7QUFBQSxNQUN0Q0MsVUFEc0M7O0FBRXRELE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCOztBQUhzRCxpQkFJN0JDLDhEQUFPLEVBSnNCO0FBQUEsTUFJOUNDLElBSjhDLFlBSTlDQSxJQUo4QztBQUFBLE1BSXhDQyxNQUp3QyxZQUl4Q0EsTUFKd0M7O0FBQUEsaUJBS3BCQywrREFBTyxFQUxhO0FBQUEsTUFLOUNDLHFCQUw4QyxZQUs5Q0EscUJBTDhDOztBQU10RCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFlBQVk7QUFBQSx1V0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBZCx3QkFBVSxDQUFDLElBQUQsQ0FBVjs7QUFGaUIsb0JBR2IsQ0FBQ0MsTUFBRCxJQUFXLENBQUNFLFFBSEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFLWFkseUJBTFcsR0FLR1osUUFBUSxDQUFDYSxVQUFULENBQW9CQyxtRUFBcEIsQ0FMSDtBQUFBO0FBQUEscUJBTUloQixNQUFNLENBQUNpQixXQUFQLENBQW1CSCxXQUFuQixDQU5KOztBQUFBO0FBTVhJLG9CQU5XOztBQUFBLG1CQU9iQSxNQUFNLENBQUNDLEtBUE07QUFBQTtBQUFBO0FBQUE7O0FBUWJDLGtFQUFLLENBQUNELEtBQU4sQ0FBWUQsTUFBTSxDQUFDQyxLQUFQLENBQWFFLE9BQXpCO0FBUmE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBVVVDLGlFQUFjLENBQ2pDSixNQUFNLENBQUNLLEtBRDBCLEVBRWpDM0IsUUFGaUMsRUFHakNTLElBQUksQ0FBQ21CLE1BSDRCLEVBSWpDN0IsTUFKaUMsRUFLakNXLE1BTGlDLENBVnhCOztBQUFBO0FBVVBtQixzQkFWTzs7QUFpQmIsa0JBQUlDLG1EQUFJLENBQUNELFFBQUQsQ0FBSixHQUFpQixDQUFyQixFQUF3QjtBQUNwQkwsb0VBQUssQ0FBQ08sT0FBTixDQUFjLGdDQUFkO0FBQ0FuQixxQ0FBcUI7QUFDckJDLHNCQUFNLENBQUNtQixJQUFQLENBQVksU0FBWjtBQUNILGVBSkQsTUFJTztBQUNIUixvRUFBSyxDQUFDRCxLQUFOLENBQVksNkJBQVo7QUFDSDs7QUF2Qlk7QUF5QmpCcEIsd0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBekJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaWSxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTJCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUErQixZQUFRLEVBQUVBLFlBQXpDO0FBQUEsNEJBQ0kscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUViLE9BQS9CO0FBQXdDLGNBQVEsRUFBRSxDQUFDRSxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBekN1Qk4sVztVQUVMTyxpRSxFQUNFRSxtRSxFQUNRQyxzRCxFQUNTRyx1RCxFQUNuQkcscUQ7OztLQU5LaEIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjEyNDA2OTA5ZDJjN2YwMTkwYzJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgc2l6ZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgdXNlQ2FydCBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VDYXJ0JztcclxuaW1wb3J0IHsgcGF5bWVudENhcmRBcGkgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvY2FydCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVBheW1lbnQoeyBhZHJlc3MsIHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG4gICAgY29uc3QgeyBhdXRoLCBsb2dvdXQgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBheW1lbnRDYXJkQXBpKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRva2VuLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICBhdXRoLmlkVXNlcixcclxuICAgICAgICAgICAgICAgIGFkcmVzcyxcclxuICAgICAgICAgICAgICAgIGxvZ291dFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZShyZXNwb25zZSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGVkaWRvIHJlYWxpemFkbyBjb3JyZWN0YW1lbnRlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9vcmRlcnNcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGFsIHJlYWxpemFyIGVsIHBlZGlkb1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXBheW1lbnRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshc3RyaXBlfT5QYWdhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9