webpackHotUpdate_N_E("pages/_app",{

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/token */ "./api/token.js");
/* harmony import */ var _api_cartApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/cartApi */ "./api/cartApi.js");
/* harmony import */ var _context_ContextCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/ContextCart */ "./context/ContextCart.js");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scss/global.scss */ "./scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      auth = _useState[0],
      setAuth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      reloadUser = _useState2[0],
      setReloadUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      totalProductsCart = _useState3[0],
      setTotalProductsCart = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      reloadCart = _useState4[0],
      setReloadCart = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = Object(_api_token__WEBPACK_IMPORTED_MODULE_7__["getToken"])();

    if (token) {
      setAuth({
        token: token,
        idUser: Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token).id
      });
    } else {
      setAuth(null);
    }

    setReloadUser(false);
  }, [reloadUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTotalProductsCart(Object(_api_cartApi__WEBPACK_IMPORTED_MODULE_8__["countProductsCart"])());
    setReloadCart(false);
  }, [reloadCart, auth]);

  var login = function login(token) {
    Object(_api_token__WEBPACK_IMPORTED_MODULE_7__["setToken"])(token);
    setAuth({
      token: token,
      idUser: Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token).id
    });
  };

  var logout = function logout() {
    if (auth) {
      Object(_api_token__WEBPACK_IMPORTED_MODULE_7__["removeToken"])();
      setAuth(null);
      router.push("/");
    }
  };

  var addProduct = function addProduct(product) {
    var token = Object(_api_token__WEBPACK_IMPORTED_MODULE_7__["getToken"])();

    if (token) {
      Object(_api_cartApi__WEBPACK_IMPORTED_MODULE_8__["addProductCart"])(product);
      setReloadCart(true);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].warning("No has iniciado Sesion");
      return null;
    }
  };

  var removeProduct = function removeProduct(product) {
    Object(_api_cartApi__WEBPACK_IMPORTED_MODULE_8__["removeProductCart"])(product);
    setReloadCart(true);
  };

  var authData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      auth: auth,
      login: login,
      logout: logout,
      setReloadUser: setReloadUser
    };
  }, [auth]);
  var cartData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      productsCart: totalProductsCart,
      addProductCart: function addProductCart(product) {
        return addProduct(product);
      },
      getProductsCart: _api_cartApi__WEBPACK_IMPORTED_MODULE_8__["getProductsCart"],
      removeProductCart: function removeProductCart(product) {
        return removeProduct(product);
      },
      removeAllProductsCart: _api_cartApi__WEBPACK_IMPORTED_MODULE_8__["removeAllProductsCart"]
    };
  }, [totalProductsCart]);
  if (auth === undefined) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: "Cargando..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 36
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: authData,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_context_ContextCart__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
      value: cartData,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, this);
}

_s(MyApp, "rQSTAWzUs0QOScANkcyFpputjDc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = MyApp;
;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2NhcnRBcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHNDYXJ0IiwiY2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJDQVJUIiwicHJvZHVjdHMiLCJzcGxpdCIsImFkZFByb2R1Y3RDYXJ0IiwicHJvZHVjdCIsInNldEl0ZW0iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwcm9kdWN0Rm91bmQiLCJpbmNsdWRlcyIsIndhcm5pbmciLCJwdXNoIiwiY291bnRQcm9kdWN0c0NhcnQiLCJzaXplIiwicmVtb3ZlUHJvZHVjdENhcnQiLCJyZW1vdmUiLCJpdGVtIiwicmVtb3ZlSXRlbSIsInBheW1lbnRDYXJkQXBpIiwidG9rZW4iLCJpZFVzZXIiLCJhZHJlc3MiLCJsb2dvdXQiLCJhZHJlc3NTaGlwcGluZyIsInVzZXIiLCJjcmVhdGVkQXQiLCJ1cmwiLCJCQVNFX1BBVEgiLCJwYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdXRoRmV0Y2giLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQWxsUHJvZHVjdHNDYXJ0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImF1dGgiLCJzZXRBdXRoIiwicmVsb2FkVXNlciIsInNldFJlbG9hZFVzZXIiLCJ0b3RhbFByb2R1Y3RzQ2FydCIsInNldFRvdGFsUHJvZHVjdHNDYXJ0IiwicmVsb2FkQ2FydCIsInNldFJlbG9hZENhcnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbiIsImp3dERlY29kZSIsImlkIiwibG9naW4iLCJzZXRUb2tlbiIsInJlbW92ZVRva2VuIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJhdXRoRGF0YSIsInVzZU1lbW8iLCJjYXJ0RGF0YSIsInByb2R1Y3RzQ2Fy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QyxXQURiO0FBRUksaUJBQVMsRUFBRSxJQUZmO0FBR0ksdUJBQWUsTUFIbkI7QUFJSSxtQkFBVyxNQUpmO0FBS0ksb0JBQVksTUFMaEI7QUFNSSxXQUFHLEVBQUUsS0FOVDtBQU9JLHdCQUFnQixFQUFFLEtBUHRCO0FBUUksaUJBQVMsTUFSYjtBQVNJLG9CQUFZO0FBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFtQkg7O0dBbEd1QkYsSztVQUtMYSxxRDs7O0tBTEtiLEs7QUFrR3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWZlMDUzMzdlYzVhNTliY2FiNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBCQVNFX1BBVEgsIENBUlQgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzaXplLCBpbmNsdWRlcywgcmVtb3ZlIH0gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBhdXRoRmV0Y2ggfSBmcm9tICcuLi91dGlscy9mZXRjaCc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RzQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQVJUKTtcclxuICAgIGlmICghY2FydCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGNhcnQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RDYXJ0KHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBnZXRQcm9kdWN0c0NhcnQoKTtcclxuICAgIGlmICghY2FydCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlQsIHByb2R1Y3QpO1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJBZ3JlZ2FkbyBDb3JyZWN0YW1lbnRlXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RGb3VuZCA9IGluY2x1ZGVzKGNhcnQsIHByb2R1Y3QpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0Rm91bmQpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIllhIGhhcyBhw7FhZGlkbyBlc3RlIHByb2R1Y3RvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVCwgY2FydCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJBw7FhZGlkbyBDb3JyZWN0YW1lbnRlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRQcm9kdWN0c0NhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNpemUoY2FydCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9kdWN0Q2FydChwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XHJcbiAgICByZW1vdmUoY2FydCwgKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzaXplKGNhcnQpID4gMCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlQsIGNhcnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBUlQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXltZW50Q2FyZEFwaSh0b2tlbiwgcHJvZHVjdHMsIGlkVXNlciwgYWRyZXNzLCBsb2dvdXQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWRyZXNzU2hpcHBpbmcgPSBhZHJlc3M7XHJcbiAgICAgICAgZGVsZXRlIGFkcmVzc1NoaXBwaW5nLnVzZXI7XHJcbiAgICAgICAgZGVsZXRlIGFkcmVzc1NoaXBwaW5nLmNyZWF0ZWRBdDtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9vcmRlcnNgO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgIGlkVXNlcixcclxuICAgICAgICAgICAgICAgIGFkcmVzc1NoaXBwaW5nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoRmV0Y2godXJsLCBwYXJhbXMsIGxvZ291dCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0KCl7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQVJUKTtcclxufSIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0VG9rZW4sIGdldFRva2VuLCByZW1vdmVUb2tlbiB9IGZyb20gJy4uL2FwaS90b2tlbic7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRQcm9kdWN0c0NhcnQsXHJcbiAgICBhZGRQcm9kdWN0Q2FydCxcclxuICAgIGNvdW50UHJvZHVjdHNDYXJ0LFxyXG4gICAgcmVtb3ZlUHJvZHVjdENhcnQsXHJcbiAgICByZW1vdmVBbGxQcm9kdWN0c0NhcnRcclxufSBmcm9tICcuLi9hcGkvY2FydEFwaSdcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQ29udGV4dENhcnQnO1xyXG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlbG9hZFVzZXIsIHNldFJlbG9hZFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJvZHVjdHNDYXJ0LCBzZXRUb3RhbFByb2R1Y3RzQ2FydF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyZWxvYWRDYXJ0LCBzZXRSZWxvYWRDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBzZXRBdXRoKHtcclxuICAgICAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICAgICAgaWRVc2VyOiBqd3REZWNvZGUodG9rZW4pLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QXV0aChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UmVsb2FkVXNlcihmYWxzZSk7XHJcbiAgICB9LCBbcmVsb2FkVXNlcl0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUb3RhbFByb2R1Y3RzQ2FydChjb3VudFByb2R1Y3RzQ2FydCgpKTtcclxuICAgICAgICBzZXRSZWxvYWRDYXJ0KGZhbHNlKTtcclxuICAgIH0sIFtyZWxvYWRDYXJ0LCBhdXRoXSk7XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodG9rZW4pID0+IHtcclxuICAgICAgICBzZXRUb2tlbih0b2tlbik7XHJcbiAgICAgICAgc2V0QXV0aCh7XHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICBpZFVzZXI6IGp3dERlY29kZSh0b2tlbikuaWRcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVRva2VuKCk7XHJcbiAgICAgICAgICAgIHNldEF1dGgobnVsbCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdENhcnQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIHNldFJlbG9hZENhcnQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIk5vIGhhcyBpbmljaWFkbyBTZXNpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICByZW1vdmVQcm9kdWN0Q2FydChwcm9kdWN0KTtcclxuICAgICAgICBzZXRSZWxvYWRDYXJ0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhEYXRhID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBhdXRoLFxyXG4gICAgICAgICAgICBsb2dpbixcclxuICAgICAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgICAgICBzZXRSZWxvYWRVc2VyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFthdXRoXVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0RGF0YSA9IHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgcHJvZHVjdHNDYXJ0OiB0b3RhbFByb2R1Y3RzQ2FydCxcclxuICAgICAgICAgICAgYWRkUHJvZHVjdENhcnQ6IChwcm9kdWN0KSA9PiBhZGRQcm9kdWN0KHByb2R1Y3QpLFxyXG4gICAgICAgICAgICBnZXRQcm9kdWN0c0NhcnQ6IGdldFByb2R1Y3RzQ2FydCxcclxuICAgICAgICAgICAgcmVtb3ZlUHJvZHVjdENhcnQ6IChwcm9kdWN0KSA9PiByZW1vdmVQcm9kdWN0KHByb2R1Y3QpLFxyXG4gICAgICAgICAgICByZW1vdmVBbGxQcm9kdWN0c0NhcnQ6IHJlbW92ZUFsbFByb2R1Y3RzQ2FydFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFt0b3RhbFByb2R1Y3RzQ2FydF1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGF1dGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRoRGF0YX0+XHJcbiAgICAgICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2FydERhdGF9PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZT17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICAgICAgICBuZXdlc3RPblRvcFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICAgICAgICAgICAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==