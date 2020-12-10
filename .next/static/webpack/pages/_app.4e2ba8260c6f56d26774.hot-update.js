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
      removeAllProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_8__["removeAllProductsCart"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiYXV0aCIsInNldEF1dGgiLCJyZWxvYWRVc2VyIiwic2V0UmVsb2FkVXNlciIsInRvdGFsUHJvZHVjdHNDYXJ0Iiwic2V0VG90YWxQcm9kdWN0c0NhcnQiLCJyZWxvYWRDYXJ0Iiwic2V0UmVsb2FkQ2FydCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInRva2VuIiwiZ2V0VG9rZW4iLCJpZFVzZXIiLCJqd3REZWNvZGUiLCJpZCIsImNvdW50UHJvZHVjdHNDYXJ0IiwibG9naW4iLCJzZXRUb2tlbiIsImxvZ291dCIsInJlbW92ZVRva2VuIiwicHVzaCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiYWRkUHJvZHVjdENhcnQiLCJ0b2FzdCIsIndhcm5pbmciLCJyZW1vdmVQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdENhcnQiLCJhdXRoRGF0YSIsInVzZU1lbW8iLCJjYXJ0RGF0YSIsInByb2R1Y3RzQ2FydCIsImdldFByb2R1Y3RzQ2FydCIsInJlbW92ZUFsbFByb2R1Y3RzQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLZSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUNDLFNBQUQsQ0FEb0I7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsT0FEdUM7O0FBQUEsbUJBRWhCSCxzREFBUSxDQUFDLEtBQUQsQ0FGUTtBQUFBLE1BRTdDSSxV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QixDQUFDOUIsaUJBQUQsQ0FSb0IsQ0FBeEI7QUFXQSxNQUFJSixJQUFJLEtBQUtELFNBQWIsRUFBd0Isb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUV4QixzQkFFSSxxRUFBQyw0REFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFOEIsUUFBN0I7QUFBQSwyQkFDSSxxRUFBQyw0REFBRCxDQUFhLFFBQWI7QUFBc0IsV0FBSyxFQUFFRSxRQUE3QjtBQUFBLDhCQUNJLHFFQUFDLFNBQUQsb0JBQWVsQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLDZEQUFEO0FBQ0ksZ0JBQVEsRUFBQyxXQURiO0FBRUksaUJBQVMsRUFBRSxJQUZmO0FBR0ksdUJBQWUsTUFIbkI7QUFJSSxtQkFBVyxNQUpmO0FBS0ksb0JBQVksTUFMaEI7QUFNSSxXQUFHLEVBQUUsS0FOVDtBQU9JLHdCQUFnQixFQUFFLEtBUHRCO0FBUUksaUJBQVMsTUFSYjtBQVNJLG9CQUFZO0FBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFtQkg7O0dBbEd1QkYsSztVQUtMYyxxRDs7O0tBTEtkLEs7QUFrR3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGUyYmE4MjYwYzZmNTZkMjY3NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgc2V0VG9rZW4sIGdldFRva2VuLCByZW1vdmVUb2tlbiB9IGZyb20gJy4uL2FwaS90b2tlbic7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRQcm9kdWN0c0NhcnQsXHJcbiAgICBhZGRQcm9kdWN0Q2FydCxcclxuICAgIGNvdW50UHJvZHVjdHNDYXJ0LFxyXG4gICAgcmVtb3ZlUHJvZHVjdENhcnQsXHJcbiAgICByZW1vdmVBbGxQcm9kdWN0c0NhcnRcclxufSBmcm9tICcuLi9hcGkvY2FydCdcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQ29udGV4dENhcnQnO1xyXG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbcmVsb2FkVXNlciwgc2V0UmVsb2FkVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdG90YWxQcm9kdWN0c0NhcnQsIHNldFRvdGFsUHJvZHVjdHNDYXJ0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JlbG9hZENhcnQsIHNldFJlbG9hZENhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHNldEF1dGgoe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBpZFVzZXI6IGp3dERlY29kZSh0b2tlbikuaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBdXRoKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRSZWxvYWRVc2VyKGZhbHNlKTtcclxuICAgIH0sIFtyZWxvYWRVc2VyXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRvdGFsUHJvZHVjdHNDYXJ0KGNvdW50UHJvZHVjdHNDYXJ0KCkpO1xyXG4gICAgICAgIHNldFJlbG9hZENhcnQoZmFsc2UpO1xyXG4gICAgfSwgW3JlbG9hZENhcnQsIGF1dGhdKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9ICh0b2tlbikgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgICAgICBzZXRBdXRoKHtcclxuICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVG9rZW4oKTtcclxuICAgICAgICAgICAgc2V0QXV0aChudWxsKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FydChwcm9kdWN0KTtcclxuICAgICAgICAgICAgc2V0UmVsb2FkQ2FydCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiTm8gaGFzIGluaWNpYWRvIFNlc2lvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZVByb2R1Y3RDYXJ0KHByb2R1Y3QpO1xyXG4gICAgICAgIHNldFJlbG9hZENhcnQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aERhdGEgPSB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIGF1dGgsXHJcbiAgICAgICAgICAgIGxvZ2luLFxyXG4gICAgICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgICAgIHNldFJlbG9hZFVzZXIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW2F1dGhdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNhcnREYXRhID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBwcm9kdWN0c0NhcnQ6IHRvdGFsUHJvZHVjdHNDYXJ0LFxyXG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FydDogKHByb2R1Y3QpID0+IGFkZFByb2R1Y3QocHJvZHVjdCksXHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RzQ2FydDogZ2V0UHJvZHVjdHNDYXJ0LFxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0Q2FydDogKHByb2R1Y3QpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCksXHJcbiAgICAgICAgICAgIHJlbW92ZUFsbFByb2R1Y3RzQ2FydDogcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW3RvdGFsUHJvZHVjdHNDYXJ0XVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoYXV0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfT5cclxuICAgICAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJ0RGF0YX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9