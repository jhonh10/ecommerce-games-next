webpackHotUpdate_N_E("pages/cart",{

/***/ "./api/cart.js":
false,

/***/ "./api/cartApi.js":
/*!************************!*\
  !*** ./api/cartApi.js ***!
  \************************/
/*! exports provided: getProductsCart, addProductCart, countProductsCart, removeProductCart, paymentCardApi, removeAllProductsCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsCart", function() { return getProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductCart", function() { return addProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countProductsCart", function() { return countProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductCart", function() { return removeProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentCardApi", function() { return paymentCardApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllProductsCart", function() { return removeAllProductsCart; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");






function getProductsCart() {
  var cart = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"]);

  if (!cart) {
    return null;
  } else {
    var products = cart.split(",");
    return products;
  }
}
function addProductCart(product) {
  var cart = getProductsCart();

  if (!cart) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"], product);
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Agregado Correctamente");
  } else {
    var productFound = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["includes"])(cart, product);

    if (productFound) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].warning("Ya has añadido este producto");
    } else {
      cart.push(product);
      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"], cart);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Añadido Correctamente");
    }
  }
}
function countProductsCart() {
  var cart = getProductsCart();

  if (!cart) {
    return 0;
  } else {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["size"])(cart);
  }
}
function removeProductCart(product) {
  var cart = getProductsCart();
  Object(lodash__WEBPACK_IMPORTED_MODULE_4__["remove"])(cart, function (item) {
    return item === product;
  });

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["size"])(cart) > 0) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"], cart);
  } else {
    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"]);
  }
}
function paymentCardApi(_x, _x2, _x3, _x4, _x5) {
  return _paymentCardApi.apply(this, arguments);
}

function _paymentCardApi() {
  _paymentCardApi = Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token, products, idUser, adress, logout) {
    var adressShipping, url, params, result;
    return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            adressShipping = adress;
            delete adressShipping.user;
            delete adressShipping.createdAt;
            url = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], "/orders");
            params = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                token: token,
                products: products,
                idUser: idUser,
                adressShipping: adressShipping
              })
            };
            _context.next = 8;
            return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_5__["authFetch"])(url, params, logout);

          case 8:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _paymentCardApi.apply(this, arguments);
}

function removeAllProductsCart() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["CART"]);
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
/* harmony import */ var _api_cartApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../api/cartApi */ "./api/cartApi.js");




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
              return Object(_api_cartApi__WEBPACK_IMPORTED_MODULE_11__["paymentCardApi"])(result.token, products, auth.idUser, adress, logout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2NhcnRBcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FydC9QYXltZW50L0Zvcm1QYXltZW50L0Zvcm1QYXltZW50LmpzIl0sIm5hbWVzIjpbImdldFByb2R1Y3RzQ2FydCIsImNhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ0FSVCIsInByb2R1Y3RzIiwic3BsaXQiLCJhZGRQcm9kdWN0Q2FydCIsInByb2R1Y3QiLCJzZXRJdGVtIiwidG9hc3QiLCJzdWNjZXNzIiwicHJvZHVjdEZvdW5kIiwiaW5jbHVkZXMiLCJ3YXJuaW5nIiwicHVzaCIsImNvdW50UHJvZHVjdHNDYXJ0Iiwic2l6ZSIsInJlbW92ZVByb2R1Y3RDYXJ0IiwicmVtb3ZlIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJwYXltZW50Q2FyZEFwaSIsInRva2VuIiwiaWRVc2VyIiwiYWRyZXNzIiwibG9nb3V0IiwiYWRyZXNzU2hpcHBpbmciLCJ1c2VyIiwiY3JlYXRlZEF0IiwidXJsIiwiQkFTRV9QQVRIIiwicGFyYW1zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXV0aEZldGNoIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsbFByb2R1Y3RzQ2FydCIsIkZvcm1QYXltZW50IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJ1c2VBdXRoIiwiYXV0aCIsInVzZUNhcnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsImNyZWF0ZVRva2VuIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0F6Q3VCSixXO1VBRUxLLGlFLEVBQ0VFLG1FLEVBQ1FDLHNELEVBQ1NFLHVELEVBQ25CRSxxRDs7O0tBTktaLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5lZmUwNTMzN2VjNWE1OWJjYWI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IEJBU0VfUEFUSCwgQ0FSVCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNpemUsIGluY2x1ZGVzLCByZW1vdmUgfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IGF1dGhGZXRjaCB9IGZyb20gJy4uL3V0aWxzL2ZldGNoJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNDYXJ0KCkge1xyXG4gICAgY29uc3QgY2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENBUlQpO1xyXG4gICAgaWYgKCFjYXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gY2FydC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdENhcnQocHJvZHVjdCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgaWYgKCFjYXJ0KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVCwgcHJvZHVjdCk7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkFncmVnYWRvIENvcnJlY3RhbWVudGVcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdEZvdW5kID0gaW5jbHVkZXMoY2FydCwgcHJvZHVjdCk7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RGb3VuZCkge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiWWEgaGFzIGHDsWFkaWRvIGVzdGUgcHJvZHVjdG9cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FydC5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBjYXJ0KTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkHDsWFkaWRvIENvcnJlY3RhbWVudGVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudFByb2R1Y3RzQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBnZXRQcm9kdWN0c0NhcnQoKTtcclxuICAgIGlmICghY2FydCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc2l6ZShjYXJ0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3RDYXJ0KHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBnZXRQcm9kdWN0c0NhcnQoKTtcclxuICAgIHJlbW92ZShjYXJ0LCAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBwcm9kdWN0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNpemUoY2FydCkgPiAwKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVCwgY2FydClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FSVClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBheW1lbnRDYXJkQXBpKHRva2VuLCBwcm9kdWN0cywgaWRVc2VyLCBhZHJlc3MsIGxvZ291dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhZHJlc3NTaGlwcGluZyA9IGFkcmVzcztcclxuICAgICAgICBkZWxldGUgYWRyZXNzU2hpcHBpbmcudXNlcjtcclxuICAgICAgICBkZWxldGUgYWRyZXNzU2hpcHBpbmcuY3JlYXRlZEF0O1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L29yZGVyc2A7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgaWRVc2VyLFxyXG4gICAgICAgICAgICAgICAgYWRyZXNzU2hpcHBpbmdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGhGZXRjaCh1cmwsIHBhcmFtcywgbG9nb3V0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxQcm9kdWN0c0NhcnQoKXtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBUlQpO1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHNpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHVzZUNhcnQgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlQ2FydCc7XHJcbmltcG9ydCB7IHBheW1lbnRDYXJkQXBpIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2NhcnRBcGknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1QYXltZW50KHsgYWRyZXNzLCBwcm9kdWN0cyB9KSB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuICAgIGNvbnN0IHsgYXV0aCwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZUFsbFByb2R1Y3RzQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXltZW50Q2FyZEFwaShcclxuICAgICAgICAgICAgICAgIHJlc3VsdC50b2tlbixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgYXV0aC5pZFVzZXIsXHJcbiAgICAgICAgICAgICAgICBhZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHNpemUocmVzcG9uc2UpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBlZGlkbyByZWFsaXphZG8gY29ycmVjdGFtZW50ZVwiKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFsbFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvb3JkZXJzXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBhbCByZWFsaXphciBlbCBwZWRpZG9cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1wYXltZW50XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2FkaW5nfSBkaXNhYmxlZD17IXN0cmlwZX0+UGFnYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==