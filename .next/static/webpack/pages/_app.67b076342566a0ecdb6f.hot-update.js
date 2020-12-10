webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/cart */ "./api/cart.js");
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
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
    setTotalProductsCart(Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__["countProductsCart"])());
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
      Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__["addProductCart"])(product);
      setReloadCart(true);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].warning("No has iniciado Sesion");
      return null;
    }
  };

  var removeProduct = function removeProduct(product) {
    Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__["removeProductCart"])(product);
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
      getProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_8__["getProductsCart"],
      removeProductCart: function removeProductCart(product) {
        return removeProduct(product);
      },
      removeAllProductsCart: function removeAllProductsCart() {
        return null;
      }
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

_s(MyApp, "l7cJI9JoP0pfAuaRVPPERmcZfCw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiYXV0aCIsInNldEF1dGgiLCJyZWxvYWRVc2VyIiwic2V0UmVsb2FkVXNlciIsInRvdGFsUHJvZHVjdHNDYXJ0Iiwic2V0VG90YWxQcm9kdWN0c0NhcnQiLCJyZWxvYWRDYXJ0Iiwic2V0UmVsb2FkQ2FydCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInRva2VuIiwiZ2V0VG9rZW4iLCJpZFVzZXIiLCJqd3REZWNvZGUiLCJpZCIsImNvdW50UHJvZHVjdHNDYXJ0IiwibG9naW4iLCJzZXRUb2tlbiIsImxvZ291dCIsInJlbW92ZVRva2VuIiwicHVzaCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiYWRkUHJvZHVjdENhcnQiLCJ0b2FzdCIsIndhcm5pbmciLCJyZW1vdmVQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdENhcnQiLCJhdXRoRGF0YSIsInVzZU1lbW8iLCJjYXJ0RGF0YSIsInByb2R1Y3RzQ2FydCIsImdldFByb2R1Y3RzQ2FydCIsInJlbW92ZUFsbFByb2R1Y3RzQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLZSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUNDLFNBQUQsQ0FEb0I7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsT0FEdUM7O0FBQUEsbUJBRWhCSCxzREFBUSxDQUFDLEtBQUQsQ0FGUTtBQUFBLE1BRTdDSSxV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LEdBRG9CLEVBUXBCLENBQUM5QixpQkFBRCxDQVJvQixDQUF4QjtBQVdBLE1BQUlKLElBQUksS0FBS0QsU0FBYixFQUF3QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRXhCLHNCQUVJLHFFQUFDLDREQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU4QixRQUE3QjtBQUFBLDJCQUNJLHFFQUFDLDREQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUVFLFFBQTdCO0FBQUEsOEJBQ0kscUVBQUMsU0FBRCxvQkFBZWxDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsNkRBQUQ7QUFDSSxnQkFBUSxFQUFDLFdBRGI7QUFFSSxpQkFBUyxFQUFFLElBRmY7QUFHSSx1QkFBZSxNQUhuQjtBQUlJLG1CQUFXLE1BSmY7QUFLSSxvQkFBWSxNQUxoQjtBQU1JLFdBQUcsRUFBRSxLQU5UO0FBT0ksd0JBQWdCLEVBQUUsS0FQdEI7QUFRSSxpQkFBUyxNQVJiO0FBU0ksb0JBQVk7QUFUaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQW1CSDs7R0FsR3VCRixLO1VBS0xjLHFEOzs7S0FMS2QsSztBQWtHdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42N2IwNzYzNDI1NjZhMGVjZGI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRUb2tlbiwgZ2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSAnLi4vYXBpL3Rva2VuJztcclxuaW1wb3J0IHtcclxuICAgIGdldFByb2R1Y3RzQ2FydCxcclxuICAgIGFkZFByb2R1Y3RDYXJ0LFxyXG4gICAgY291bnRQcm9kdWN0c0NhcnQsXHJcbiAgICByZW1vdmVQcm9kdWN0Q2FydCxcclxuICAgIHJlbW92ZUFsbFByb2R1Y3RzQ2FydFxyXG59IGZyb20gJy4uL2FwaS9jYXJ0J1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9Db250ZXh0Q2FydCc7XHJcbmltcG9ydCBcIi4uL3Njc3MvZ2xvYmFsLnNjc3NcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtyZWxvYWRVc2VyLCBzZXRSZWxvYWRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b3RhbFByb2R1Y3RzQ2FydCwgc2V0VG90YWxQcm9kdWN0c0NhcnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmVsb2FkQ2FydCwgc2V0UmVsb2FkQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgc2V0QXV0aCh7XHJcbiAgICAgICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEF1dGgobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFJlbG9hZFVzZXIoZmFsc2UpO1xyXG4gICAgfSwgW3JlbG9hZFVzZXJdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VG90YWxQcm9kdWN0c0NhcnQoY291bnRQcm9kdWN0c0NhcnQoKSk7XHJcbiAgICAgICAgc2V0UmVsb2FkQ2FydChmYWxzZSk7XHJcbiAgICB9LCBbcmVsb2FkQ2FydCwgYXV0aF0pO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKHRva2VuKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIHNldEF1dGgoe1xyXG4gICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgaWRVc2VyOiBqd3REZWNvZGUodG9rZW4pLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICByZW1vdmVUb2tlbigpO1xyXG4gICAgICAgICAgICBzZXRBdXRoKG51bGwpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJ0KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBzZXRSZWxvYWRDYXJ0KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJObyBoYXMgaW5pY2lhZG8gU2VzaW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdENhcnQocHJvZHVjdCk7XHJcbiAgICAgICAgc2V0UmVsb2FkQ2FydCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRoRGF0YSA9IHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgYXV0aCxcclxuICAgICAgICAgICAgbG9naW4sXHJcbiAgICAgICAgICAgIGxvZ291dCxcclxuICAgICAgICAgICAgc2V0UmVsb2FkVXNlcixcclxuICAgICAgICB9KSxcclxuICAgICAgICBbYXV0aF1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2FydERhdGEgPSB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzQ2FydDogdG90YWxQcm9kdWN0c0NhcnQsXHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJ0OiAocHJvZHVjdCkgPT4gYWRkUHJvZHVjdChwcm9kdWN0KSxcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdHNDYXJ0OiBnZXRQcm9kdWN0c0NhcnQsXHJcbiAgICAgICAgICAgIHJlbW92ZVByb2R1Y3RDYXJ0OiAocHJvZHVjdCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KSxcclxuICAgICAgICAgICAgcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0OiAoKSA9PiBudWxsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW3RvdGFsUHJvZHVjdHNDYXJ0XVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoYXV0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfT5cclxuICAgICAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJ0RGF0YX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9