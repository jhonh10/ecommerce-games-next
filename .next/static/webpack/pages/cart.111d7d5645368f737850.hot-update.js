webpackHotUpdate_N_E("pages/cart",{

/***/ "./api/cart.js":
/*!*********************!*\
  !*** ./api/cart.js ***!
  \*********************/
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2NhcnQuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHNDYXJ0IiwiY2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJDQVJUIiwicHJvZHVjdHMiLCJzcGxpdCIsImFkZFByb2R1Y3RDYXJ0IiwicHJvZHVjdCIsInNldEl0ZW0iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwcm9kdWN0Rm91bmQiLCJpbmNsdWRlcyIsIndhcm5pbmciLCJwdXNoIiwiY291bnRQcm9kdWN0c0NhcnQiLCJzaXplIiwicmVtb3ZlUHJvZHVjdENhcnQiLCJyZW1vdmUiLCJpdGVtIiwicmVtb3ZlSXRlbSIsInBheW1lbnRDYXJkQXBpIiwidG9rZW4iLCJpZFVzZXIiLCJhZHJlc3MiLCJsb2dvdXQiLCJhZHJlc3NTaGlwcGluZyIsInVzZXIiLCJjcmVhdGVkQXQiLCJ1cmwiLCJCQVNFX1BBVEgiLCJwYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdXRoRmV0Y2giLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQWxsUHJvZHVjdHNDYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLGVBQVQsR0FBMkI7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJDLHFEQUFyQixDQUFiOztBQUNBLE1BQUksQ0FBQ0gsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBTUksUUFBUSxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxHQUFYLENBQWpCO0FBQ0EsV0FBT0QsUUFBUDtBQUNIO0FBQ0o7QUFFTSxTQUFTRSxjQUFULENBQXdCQyxPQUF4QixFQUFpQztBQUNwQyxNQUFNUCxJQUFJLEdBQUdELGVBQWUsRUFBNUI7O0FBQ0EsTUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDUEMsZ0JBQVksQ0FBQ08sT0FBYixDQUFxQkwscURBQXJCLEVBQTJCSSxPQUEzQjtBQUNBRSx3REFBSyxDQUFDQyxPQUFOLENBQWMsd0JBQWQ7QUFDSCxHQUhELE1BR087QUFDSCxRQUFNQyxZQUFZLEdBQUdDLHVEQUFRLENBQUNaLElBQUQsRUFBT08sT0FBUCxDQUE3Qjs7QUFDQSxRQUFJSSxZQUFKLEVBQWtCO0FBQ2RGLDBEQUFLLENBQUNJLE9BQU4sQ0FBYyw4QkFBZDtBQUNILEtBRkQsTUFFTztBQUNIYixVQUFJLENBQUNjLElBQUwsQ0FBVVAsT0FBVjtBQUNBTixrQkFBWSxDQUFDTyxPQUFiLENBQXFCTCxxREFBckIsRUFBMkJILElBQTNCO0FBQ0FTLDBEQUFLLENBQUNDLE9BQU4sQ0FBYyx1QkFBZDtBQUNIO0FBQ0o7QUFDSjtBQUVNLFNBQVNLLGlCQUFULEdBQTZCO0FBQ2hDLE1BQU1mLElBQUksR0FBR0QsZUFBZSxFQUE1Qjs7QUFDQSxNQUFJLENBQUNDLElBQUwsRUFBVztBQUNQLFdBQU8sQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU9nQixtREFBSSxDQUFDaEIsSUFBRCxDQUFYO0FBQ0g7QUFDSjtBQUVNLFNBQVNpQixpQkFBVCxDQUEyQlYsT0FBM0IsRUFBb0M7QUFDdkMsTUFBTVAsSUFBSSxHQUFHRCxlQUFlLEVBQTVCO0FBQ0FtQix1REFBTSxDQUFDbEIsSUFBRCxFQUFPLFVBQUNtQixJQUFELEVBQVU7QUFDbkIsV0FBT0EsSUFBSSxLQUFLWixPQUFoQjtBQUNILEdBRkssQ0FBTjs7QUFJQSxNQUFJUyxtREFBSSxDQUFDaEIsSUFBRCxDQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJDLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUJMLHFEQUFyQixFQUEyQkgsSUFBM0I7QUFDSCxHQUZELE1BRU87QUFDSEMsZ0JBQVksQ0FBQ21CLFVBQWIsQ0FBd0JqQixxREFBeEI7QUFDSDtBQUNKO0FBRU0sU0FBZWtCLGNBQXRCO0FBQUE7QUFBQTs7OzJXQUFPLGlCQUE4QkMsS0FBOUIsRUFBcUNsQixRQUFyQyxFQUErQ21CLE1BQS9DLEVBQXVEQyxNQUF2RCxFQUErREMsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFT0MsMEJBRlAsR0FFd0JGLE1BRnhCO0FBR0MsbUJBQU9FLGNBQWMsQ0FBQ0MsSUFBdEI7QUFDQSxtQkFBT0QsY0FBYyxDQUFDRSxTQUF0QjtBQUVNQyxlQU5QLGFBTWdCQywwREFOaEI7QUFPT0Msa0JBUFAsR0FPZ0I7QUFDWEMsb0JBQU0sRUFBRSxNQURHO0FBRVhDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWCxlQUZFO0FBS1hDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCZCxxQkFBSyxFQUFMQSxLQURpQjtBQUVqQmxCLHdCQUFRLEVBQVJBLFFBRmlCO0FBR2pCbUIsc0JBQU0sRUFBTkEsTUFIaUI7QUFJakJHLDhCQUFjLEVBQWRBO0FBSmlCLGVBQWY7QUFMSyxhQVBoQjtBQUFBO0FBQUEsbUJBbUJzQlcsOERBQVMsQ0FBQ1IsR0FBRCxFQUFNRSxNQUFOLEVBQWNOLE1BQWQsQ0FuQi9COztBQUFBO0FBbUJPYSxrQkFuQlA7QUFBQSw2Q0FvQlFBLE1BcEJSOztBQUFBO0FBQUE7QUFBQTtBQXNCQ0MsbUJBQU8sQ0FBQ0MsR0FBUjtBQXRCRCw2Q0F1QlEsSUF2QlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTJCQSxTQUFTQyxxQkFBVCxHQUFnQztBQUNuQ3hDLGNBQVksQ0FBQ21CLFVBQWIsQ0FBd0JqQixxREFBeEI7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjExMWQ3ZDU2NDUzNjhmNzM3ODUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQkFTRV9QQVRILCBDQVJUIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2l6ZSwgaW5jbHVkZXMsIHJlbW92ZSB9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgYXV0aEZldGNoIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0NhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FSVCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBjYXJ0LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0Q2FydChwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBwcm9kdWN0KTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQWdyZWdhZG8gQ29ycmVjdGFtZW50ZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0Rm91bmQgPSBpbmNsdWRlcyhjYXJ0LCBwcm9kdWN0KTtcclxuICAgICAgICBpZiAocHJvZHVjdEZvdW5kKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJZYSBoYXMgYcOxYWRpZG8gZXN0ZSBwcm9kdWN0b1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJ0LnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlQsIGNhcnQpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQcOxYWRpZG8gQ29ycmVjdGFtZW50ZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UHJvZHVjdHNDYXJ0KCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgaWYgKCFjYXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaXplKGNhcnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdENhcnQocHJvZHVjdCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgcmVtb3ZlKGNhcnQsIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2l6ZShjYXJ0KSA+IDApIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBjYXJ0KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQVJUKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF5bWVudENhcmRBcGkodG9rZW4sIHByb2R1Y3RzLCBpZFVzZXIsIGFkcmVzcywgbG9nb3V0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFkcmVzc1NoaXBwaW5nID0gYWRyZXNzO1xyXG4gICAgICAgIGRlbGV0ZSBhZHJlc3NTaGlwcGluZy51c2VyO1xyXG4gICAgICAgIGRlbGV0ZSBhZHJlc3NTaGlwcGluZy5jcmVhdGVkQXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vb3JkZXJzYDtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICBpZFVzZXIsXHJcbiAgICAgICAgICAgICAgICBhZHJlc3NTaGlwcGluZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aEZldGNoKHVybCwgcGFyYW1zLCBsb2dvdXQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbFByb2R1Y3RzQ2FydCgpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FSVCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9