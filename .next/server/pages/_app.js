module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/cart.js":
/*!*********************!*\
  !*** ./api/cart.js ***!
  \*********************/
/*! exports provided: getProductsCart, addProductCart, countProductsCart, removeProductCart, paymentCardApi, removeAllProductsCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsCart", function() { return getProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductCart", function() { return addProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countProductsCart", function() { return countProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductCart", function() { return removeProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentCardApi", function() { return paymentCardApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllProductsCart", function() { return removeAllProductsCart; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");




function getProductsCart() {
  const cart = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"]);

  if (!cart) {
    return null;
  } else {
    const products = cart.split(",");
    return products;
  }
}
function addProductCart(product) {
  const cart = getProductsCart();

  if (!cart) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"], product);
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Agregado Correctamente");
  } else {
    const productFound = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(cart, product);

    if (productFound) {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warning("Ya has añadido este producto");
    } else {
      cart.push(product);
      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"], cart);
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Añadido Correctamente");
    }
  }
}
function countProductsCart() {
  const cart = getProductsCart();

  if (!cart) {
    return 0;
  } else {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["size"])(cart);
  }
}
function removeProductCart(product) {
  const cart = getProductsCart();
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["remove"])(cart, item => {
    return item === product;
  });

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["size"])(cart) > 0) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"], cart);
  } else {
    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"]);
  }
}
async function paymentCardApi(token, products, idUser, adress, logout) {
  try {
    const adressShipping = adress;
    delete adressShipping.user;
    delete adressShipping.createdAt;
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]}/orders`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        products,
        idUser,
        adressShipping
      })
    };
    const result = await Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["authFetch"])(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
function removeAllProductsCart() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["CART"]);
}

/***/ }),

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/*! exports provided: setToken, getToken, removeToken, hasExpiredToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExpiredToken", function() { return hasExpiredToken; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");


function setToken(token) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token);
}
function getToken() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
}
function removeToken() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
}
function hasExpiredToken(token) {
  const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
  const expiredDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expiredDate) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null
});
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "./context/ContextCart.js":
/*!********************************!*\
  !*** ./context/ContextCart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  productsCart: 0,
  addProductCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  removeAllProductsCart: () => null
});
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/token */ "./api/token.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/cart */ "./api/cart.js");
/* harmony import */ var _context_ContextCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/ContextCart */ "./context/ContextCart.js");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/global.scss */ "./scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: reloadUser,
    1: setReloadUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: totalProductsCart,
    1: setTotalProductsCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: reloadCart,
    1: setReloadCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_6__["getToken"])();

    if (token) {
      setAuth({
        token,
        idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token).id
      });
    } else {
      setAuth(null);
    }

    setReloadUser(false);
  }, [reloadUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTotalProductsCart(Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__["countProductsCart"])());
    setReloadCart(false);
  }, [reloadCart, auth]);

  const login = token => {
    Object(_api_token__WEBPACK_IMPORTED_MODULE_6__["setToken"])(token);
    setAuth({
      token,
      idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token).id
    });
  };

  const logout = () => {
    if (auth) {
      Object(_api_token__WEBPACK_IMPORTED_MODULE_6__["removeToken"])();
      setAuth(null);
      router.push("/");
    }
  };

  const addProduct = product => {
    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_6__["getToken"])();

    if (token) {
      Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__["addProductCart"])(product);
      setReloadCart(true);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].warning("No has iniciado Sesion");
      return null;
    }
  };

  const removeProduct = product => {
    Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__["removeProductCart"])(product);
    setReloadCart(true);
  };

  const authData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    auth,
    login,
    logout,
    setReloadUser
  }), [auth]);
  const cartData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    productsCart: totalProductsCart,
    addProductCart: product => addProduct(product),
    getProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_7__["getProductsCart"],
    removeProductCart: product => removeProduct(product),
    removeAllProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_7__["removeAllProductsCart"]
  }), [totalProductsCart]);
  if (auth === undefined) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Cargando..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 36
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: authData,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ContextCart__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: cartData,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
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
;

/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: BASE_PATH, TOKEN, CART, STIPE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STIPE_TOKEN", function() { return STIPE_TOKEN; });
const BASE_PATH = "http://localhost:1337";
const TOKEN = "token";
const CART = "cart";
const STIPE_TOKEN = "pk_test_51HF7F3HzJPdfZmk4oLAfvlpeihd8nGW7RtYehEBJsuFjX27bwCk7xo1PWf7yXdIN2F78zbrQ9JsVNkRY1lkAYOQI00wGAUlECl";

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: authFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFetch", function() { return authFetch; });
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/token */ "./api/token.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function authFetch(url, params, logout) {
  const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_0__["getToken"])();

  if (!token) {
    //usuario no logueado
    logout();
  } else {
    if (Object(_api_token__WEBPACK_IMPORTED_MODULE_0__["hasExpiredToken"])(token)) {
      //token expirado
      logout();
    } else {
      const paramsTemp = _objectSpread(_objectSpread({}, params), {}, {
        headers: _objectSpread(_objectSpread({}, params === null || params === void 0 ? void 0 : params.headers), {}, {
          Authorization: `Bearer ${token}`
        })
      });

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL3Rva2VuLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Db250ZXh0Q2FydC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHNDYXJ0IiwiY2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJDQVJUIiwicHJvZHVjdHMiLCJzcGxpdCIsImFkZFByb2R1Y3RDYXJ0IiwicHJvZHVjdCIsInNldEl0ZW0iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwcm9kdWN0Rm91bmQiLCJpbmNsdWRlcyIsIndhcm5pbmciLCJwdXNoIiwiY291bnRQcm9kdWN0c0NhcnQiLCJzaXplIiwicmVtb3ZlUHJvZHVjdENhcnQiLCJyZW1vdmUiLCJpdGVtIiwicmVtb3ZlSXRlbSIsInBheW1lbnRDYXJkQXBpIiwidG9rZW4iLCJpZFVzZXIiLCJhZHJlc3MiLCJsb2dvdXQiLCJhZHJlc3NTaGlwcGluZyIsInVzZXIiLCJjcmVhdGVkQXQiLCJ1cmwiLCJCQVNFX1BBVEgiLCJwYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJhdXRoRmV0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGxQcm9kdWN0c0NhcnQiLCJzZXRUb2tlbiIsIlRPS0VOIiwiZ2V0VG9rZW4iLCJyZW1vdmVUb2tlbiIsImhhc0V4cGlyZWRUb2tlbiIsInRva2VuRGVjb2RlIiwiand0RGVjb2RlIiwiZXhwaXJlZERhdGUiLCJleHAiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXV0aCIsInVuZGVmaW5lZCIsImxvZ2luIiwic2V0UmVsb2FkVXNlciIsIkNhcnRDb250ZXh0IiwicHJvZHVjdHNDYXJ0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRBdXRoIiwidXNlU3RhdGUiLCJyZWxvYWRVc2VyIiwidG90YWxQcm9kdWN0c0NhcnQiLCJzZXRUb3RhbFByb2R1Y3RzQ2FydCIsInJlbG9hZENhcnQiLCJzZXRSZWxvYWRDYXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaWQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImF1dGhEYXRhIiwidXNlTWVtbyIsImNhcnREYXRhIiwiU1RJUEVfVE9LRU4iLCJwYXJhbXNUZW1wIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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QUFNQyxLQUFLLENBQUN6RCxHQUFELEVBQU1zRCxVQUFOLENBQTVCO0FBQ0EsY0FBTTlDLE1BQU0sR0FBRyxNQUFNZ0QsUUFBUSxDQUFDRSxJQUFULEVBQXJCO0FBQ0EsZUFBT2xELE1BQVA7QUFDSCxPQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsZUFBT0EsS0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQkFTRV9QQVRILCBDQVJUIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2l6ZSwgaW5jbHVkZXMsIHJlbW92ZSB9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgYXV0aEZldGNoIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0NhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FSVCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBjYXJ0LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0Q2FydChwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBwcm9kdWN0KTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQWdyZWdhZG8gQ29ycmVjdGFtZW50ZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0Rm91bmQgPSBpbmNsdWRlcyhjYXJ0LCBwcm9kdWN0KTtcclxuICAgICAgICBpZiAocHJvZHVjdEZvdW5kKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJZYSBoYXMgYcOxYWRpZG8gZXN0ZSBwcm9kdWN0b1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJ0LnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlQsIGNhcnQpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQcOxYWRpZG8gQ29ycmVjdGFtZW50ZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UHJvZHVjdHNDYXJ0KCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgaWYgKCFjYXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaXplKGNhcnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdENhcnQocHJvZHVjdCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldFByb2R1Y3RzQ2FydCgpO1xyXG4gICAgcmVtb3ZlKGNhcnQsIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2l6ZShjYXJ0KSA+IDApIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBjYXJ0KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQVJUKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF5bWVudENhcmRBcGkodG9rZW4sIHByb2R1Y3RzLCBpZFVzZXIsIGFkcmVzcywgbG9nb3V0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFkcmVzc1NoaXBwaW5nID0gYWRyZXNzO1xyXG4gICAgICAgIGRlbGV0ZSBhZHJlc3NTaGlwcGluZy51c2VyO1xyXG4gICAgICAgIGRlbGV0ZSBhZHJlc3NTaGlwcGluZy5jcmVhdGVkQXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vb3JkZXJzYDtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICBpZFVzZXIsXHJcbiAgICAgICAgICAgICAgICBhZHJlc3NTaGlwcGluZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aEZldGNoKHVybCwgcGFyYW1zLCBsb2dvdXQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbFByb2R1Y3RzQ2FydCgpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FSVCk7XHJcbn0iLCJpbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOLCB0b2tlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0V4cGlyZWRUb2tlbih0b2tlbikge1xyXG4gICAgY29uc3QgdG9rZW5EZWNvZGUgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgY29uc3QgZXhwaXJlZERhdGUgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmKGN1cnJlbnREYXRlID4gZXhwaXJlZERhdGUpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgYXV0aDogdW5kZWZpbmVkLFxyXG4gICAgbG9naW46ICgpID0+IG51bGwsXHJcbiAgICBsb2dvdXQ6ICgpID0+IG51bGwsXHJcbiAgICBzZXRSZWxvYWRVc2VyOiAoKSA9PiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBwcm9kdWN0c0NhcnQ6IDAsXHJcbiAgICBhZGRQcm9kdWN0Q2FydDogKCkgPT4gbnVsbCxcclxuICAgIGdldFByb2R1Y3RzQ2FydDogKCkgPT4gbnVsbCxcclxuICAgIHJlbW92ZVByb2R1Y3RDYXJ0OiAoKSA9PiBudWxsLFxyXG4gICAgcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0OiAoKSA9PiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHQ7IiwiaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBzZXRUb2tlbiwgZ2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSAnLi4vYXBpL3Rva2VuJztcclxuaW1wb3J0IHtcclxuICAgIGdldFByb2R1Y3RzQ2FydCxcclxuICAgIGFkZFByb2R1Y3RDYXJ0LFxyXG4gICAgY291bnRQcm9kdWN0c0NhcnQsXHJcbiAgICByZW1vdmVQcm9kdWN0Q2FydCxcclxuICAgIHJlbW92ZUFsbFByb2R1Y3RzQ2FydFxyXG59IGZyb20gJy4uL2FwaS9jYXJ0J1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9Db250ZXh0Q2FydCc7XHJcbmltcG9ydCBcIi4uL3Njc3MvZ2xvYmFsLnNjc3NcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcmVsb2FkVXNlciwgc2V0UmVsb2FkVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdG90YWxQcm9kdWN0c0NhcnQsIHNldFRvdGFsUHJvZHVjdHNDYXJ0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JlbG9hZENhcnQsIHNldFJlbG9hZENhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHNldEF1dGgoe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBpZFVzZXI6IGp3dERlY29kZSh0b2tlbikuaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBdXRoKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRSZWxvYWRVc2VyKGZhbHNlKTtcclxuICAgIH0sIFtyZWxvYWRVc2VyXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRvdGFsUHJvZHVjdHNDYXJ0KGNvdW50UHJvZHVjdHNDYXJ0KCkpO1xyXG4gICAgICAgIHNldFJlbG9hZENhcnQoZmFsc2UpO1xyXG4gICAgfSwgW3JlbG9hZENhcnQsIGF1dGhdKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9ICh0b2tlbikgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgICAgICBzZXRBdXRoKHtcclxuICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVG9rZW4oKTtcclxuICAgICAgICAgICAgc2V0QXV0aChudWxsKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FydChwcm9kdWN0KTtcclxuICAgICAgICAgICAgc2V0UmVsb2FkQ2FydCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiTm8gaGFzIGluaWNpYWRvIFNlc2lvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZVByb2R1Y3RDYXJ0KHByb2R1Y3QpO1xyXG4gICAgICAgIHNldFJlbG9hZENhcnQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aERhdGEgPSB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIGF1dGgsXHJcbiAgICAgICAgICAgIGxvZ2luLFxyXG4gICAgICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgICAgIHNldFJlbG9hZFVzZXIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW2F1dGhdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNhcnREYXRhID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBwcm9kdWN0c0NhcnQ6IHRvdGFsUHJvZHVjdHNDYXJ0LFxyXG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FydDogKHByb2R1Y3QpID0+IGFkZFByb2R1Y3QocHJvZHVjdCksXHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RzQ2FydDogZ2V0UHJvZHVjdHNDYXJ0LFxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0Q2FydDogKHByb2R1Y3QpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCksXHJcbiAgICAgICAgICAgIHJlbW92ZUFsbFByb2R1Y3RzQ2FydDogcmVtb3ZlQWxsUHJvZHVjdHNDYXJ0XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW3RvdGFsUHJvZHVjdHNDYXJ0XVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoYXV0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfT5cclxuICAgICAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJ0RGF0YX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJleHBvcnQgY29uc3QgQkFTRV9QQVRIID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcclxuZXhwb3J0IGNvbnN0IFRPS0VOID0gXCJ0b2tlblwiXHJcbmV4cG9ydCBjb25zdCBDQVJUID0gXCJjYXJ0XCI7XHJcbmV4cG9ydCBjb25zdCBTVElQRV9UT0tFTiA9IFwicGtfdGVzdF81MUhGN0YzSHpKUGRmWm1rNG9MQWZ2bHBlaWhkOG5HVzdSdFllaEVCSnN1RmpYMjdid0NrN3hvMVBXZjd5WGRJTjJGNzh6YnJROUpzVk5rUlkxbGtBWU9RSTAwd0dBVWxFQ2xcIjsiLCJpbXBvcnQgeyBnZXRUb2tlbiwgaGFzRXhwaXJlZFRva2VuIH0gZnJvbSAnLi4vYXBpL3Rva2VuJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoRmV0Y2godXJsLCBwYXJhbXMsIGxvZ291dCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIC8vdXN1YXJpbyBubyBsb2d1ZWFkb1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaGFzRXhwaXJlZFRva2VuKHRva2VuKSkge1xyXG4gICAgICAgICAgICAvL3Rva2VuIGV4cGlyYWRvXHJcbiAgICAgICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zPy5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBwYXJhbXNUZW1wKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqd3QtZGVjb2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==