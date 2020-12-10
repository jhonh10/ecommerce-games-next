webpackHotUpdate_N_E("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/user */ "./api/user.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useAuth */ "./hooks/useAuth.js");
/* harmony import */ var _components_Account_ChangeNameForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Account/ChangeNameForm */ "./components/Account/ChangeNameForm/index.js");
/* harmony import */ var _components_Account_ChangeEmailForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Account/ChangeEmailForm */ "./components/Account/ChangeEmailForm/index.js");
/* harmony import */ var _components_Account_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Account/ChangePasswordForm */ "./components/Account/ChangePasswordForm/index.js");
/* harmony import */ var _components_Modal_BasicModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Modal/BasicModal */ "./components/Modal/BasicModal.js");
/* harmony import */ var _components_Account_AdressForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Account/AdressForm */ "./components/Account/AdressForm/index.js");
/* harmony import */ var _components_Account_ListAdress_ListAdress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Account/ListAdress/ListAdress */ "./components/Account/ListAdress/ListAdress.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\account.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();














function Account() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      user = _useState[0],
      setUser = _useState[1];

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      auth = _useAuth.auth,
      logout = _useAuth.logout,
      setReloadUser = _useAuth.setReloadUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_user__WEBPACK_IMPORTED_MODULE_7__["getMeApi"])(logout);

            case 2:
              response = _context.sent;
              setUser(response || null);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [auth]);
  if (user === undefined) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "Cargando..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 36
  }, this);

  if (!auth && !user) {
    router.replace("/");
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "account",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Seo__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: "Mi Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Configuration, {
      user: user,
      logout: logout,
      setReloadUser: setReloadUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Adresses, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

_s(Account, "NL0Qwhty9JXcUFln6l5tBOtrTuE=", false, function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Account;

function Configuration(_ref2) {
  var user = _ref2.user,
      logout = _ref2.logout,
      setReloadUser = _ref2.setReloadUser;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "account__configuration",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "title",
      children: "Configuracion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "data",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Account_ChangeNameForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: user,
        logout: logout,
        setReloadUser: setReloadUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Account_ChangeEmailForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: user,
        logout: logout,
        setReloadUser: setReloadUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Account_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: user,
        logout: logout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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

_c2 = Configuration;

function Adresses() {
  _s2();

  var _this = this;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      titleModal = _useState3[0],
      setTitleModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      formModal = _useState4[0],
      setFormModal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      reloadAdresess = _useState5[0],
      setReloadAdresess = _useState5[1];

  var openModal = function openModal(title, adress) {
    setTitleModal(title);
    setFormModal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Account_AdressForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setReloadAdresess: setReloadAdresess,
      setShowModal: setShowModal,
      newAdress: adress ? false : true,
      adress: adress || null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this));
    setShowModal(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "account__adresses",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "title",
      children: ["Direcciones de envio", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: "plus",
        link: true,
        onClick: function onClick() {
          return openModal("Nueva dirección");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "data",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Account_ListAdress_ListAdress__WEBPACK_IMPORTED_MODULE_14__["default"], {
        reloadAdresess: reloadAdresess,
        setReloadAdresess: setReloadAdresess,
        openModal: openModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Modal_BasicModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: showModal,
      setShow: setShowModal,
      title: titleModal,
      children: formModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s2(Adresses, "tXheH+JiZCDRnPaQlsEuKV7z81I=");

_c3 = Adresses;

var _c, _c2, _c3;

$RefreshReg$(_c, "Account");
$RefreshReg$(_c2, "Configuration");
$RefreshReg$(_c3, "Adresses");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VyIiwic2V0VXNlciIsInVzZUF1dGgiLCJhdXRoIiwibG9nb3V0Iiwic2V0UmVsb2FkVXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImdldE1lQXBpIiwicmVzcG9uc2UiLCJyZXBsYWNlIiwiQ29uZmlndXJhdGlvbiIsIkFkcmVzc2VzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidGl0bGVNb2RhbCIsInNldFRpdGxlTW9kYWwiLCJmb3JtTW9kYWwiLCJzZXRGb3JtTW9kYWwiLCJyZWxvYWRBZHJlc2VzcyIsInNldFJlbG9hZEFkcmVzZXNzIiwib3Blbk1vZGFsIiwidGl0bGUiLCJhZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUFBLGlCQUVVQyw4REFBTyxFQUZqQjtBQUFBLE1BRXRCQyxJQUZzQixZQUV0QkEsSUFGc0I7QUFBQSxNQUVoQkMsTUFGZ0IsWUFFaEJBLE1BRmdCO0FBQUEsTUFFUkMsYUFGUSxZQUVSQSxhQUZROztBQUc5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLDJWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzBCQywwREFBUSxDQUFDTCxNQUFELENBRGxDOztBQUFBO0FBQ1NNLHNCQURUO0FBRUdULHFCQUFPLENB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dEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLENBQVo7QUFPQVQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQVZEOztBQVdBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLHNEQUVJLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDLE1BQVg7QUFBa0IsWUFBSSxNQUF0QjtBQUF1QixlQUFPLEVBQUU7QUFBQSxpQkFBTU8sU0FBUyxDQUFDLGlCQUFELENBQWY7QUFBQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0kscUVBQUMsa0ZBQUQ7QUFBWSxzQkFBYyxFQUFFRixjQUE1QjtBQUE0Qyx5QkFBaUIsRUFBRUMsaUJBQS9EO0FBQWtGLGlCQUFTLEVBQUVDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFRSSxxRUFBQyxxRUFBRDtBQUFZLFVBQUksRUFBRVIsU0FBbEI7QUFBNkIsYUFBTyxFQUFFQyxZQUF0QztBQUFvRCxXQUFLLEVBQUVDLFVBQTNEO0FBQUEsZ0JBQ0tFO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0lBakNRTCxROztNQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY291bnQuMzcxYzYyMGFlNmEwMzlhNzkzNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRNZUFwaSB9IGZyb20gJy4uL2FwaS91c2VyJ1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IENoYW5nZU5hbWVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudC9DaGFuZ2VOYW1lRm9ybSc7XHJcbmltcG9ydCBDaGFuZ2VFbWFpbEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50L0NoYW5nZUVtYWlsRm9ybSc7XHJcbmltcG9ydCBDaGFuZ2VQYXNzd29yZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50L0NoYW5nZVBhc3N3b3JkRm9ybSc7XHJcbmltcG9ydCBCYXNpY01vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwvQmFzaWNNb2RhbCc7XHJcbmltcG9ydCBBZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudC9BZHJlc3NGb3JtJztcclxuaW1wb3J0IExpc3RBZHJlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50L0xpc3RBZHJlc3MvTGlzdEFkcmVzcyc7XHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vY29tcG9uZW50cy9TZW8nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgeyBhdXRoLCBsb2dvdXQsIHNldFJlbG9hZFVzZXIgfSA9IHVzZUF1dGgoKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE1lQXBpKGxvZ291dCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UgfHwgbnVsbCk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHJldHVybiA8ZGl2PkNhcmdhbmRvLi4uPC9kaXY+O1xyXG4gICAgaWYgKCFhdXRoICYmICF1c2VyKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzaWNMYXlvdXQgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICA8U2VvIHRpdGxlPVwiTWkgQ3VlbnRhXCIvPlxyXG4gICAgICAgICAgICA8Q29uZmlndXJhdGlvbiB1c2VyPXt1c2VyfSBsb2dvdXQ9e2xvZ291dH0gc2V0UmVsb2FkVXNlcj17c2V0UmVsb2FkVXNlcn0gLz5cclxuICAgICAgICAgICAgPEFkcmVzc2VzIC8+XHJcbiAgICAgICAgPC9CYXNpY0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbmZpZ3VyYXRpb24oeyB1c2VyLCBsb2dvdXQsIHNldFJlbG9hZFVzZXIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX2NvbmZpZ3VyYXRpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbmZpZ3VyYWNpb248L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hhbmdlTmFtZUZvcm0gdXNlcj17dXNlcn0gbG9nb3V0PXtsb2dvdXR9IHNldFJlbG9hZFVzZXI9e3NldFJlbG9hZFVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2hhbmdlRW1haWxGb3JtIHVzZXI9e3VzZXJ9IGxvZ291dD17bG9nb3V0fSBzZXRSZWxvYWRVc2VyPXtzZXRSZWxvYWRVc2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPENoYW5nZVBhc3N3b3JkRm9ybSB1c2VyPXt1c2VyfSBsb2dvdXQ9e2xvZ291dH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkcmVzc2VzKCkge1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0aXRsZU1vZGFsLCBzZXRUaXRsZU1vZGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Zvcm1Nb2RhbCwgc2V0Rm9ybU1vZGFsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlbG9hZEFkcmVzZXNzLCBzZXRSZWxvYWRBZHJlc2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICh0aXRsZSwgYWRyZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGVNb2RhbCh0aXRsZSlcclxuICAgICAgICBzZXRGb3JtTW9kYWwoXHJcbiAgICAgICAgICAgIDxBZHJlc3NGb3JtXHJcbiAgICAgICAgICAgICAgICBzZXRSZWxvYWRBZHJlc2Vzcz17c2V0UmVsb2FkQWRyZXNlc3N9XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIG5ld0FkcmVzcz17YWRyZXNzID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgYWRyZXNzPXthZHJlc3MgfHwgbnVsbH1cclxuICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fYWRyZXNzZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRGlyZWNjaW9uZXMgZGUgZW52aW9cclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgbGluayBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoXCJOdWV2YSBkaXJlY2Npw7NuXCIpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEFkcmVzcyByZWxvYWRBZHJlc2Vzcz17cmVsb2FkQWRyZXNlc3N9IHNldFJlbG9hZEFkcmVzZXNzPXtzZXRSZWxvYWRBZHJlc2Vzc30gb3Blbk1vZGFsPXtvcGVuTW9kYWx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QmFzaWNNb2RhbCBzaG93PXtzaG93TW9kYWx9IHNldFNob3c9e3NldFNob3dNb2RhbH0gdGl0bGU9e3RpdGxlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAge2Zvcm1Nb2RhbH1cclxuICAgICAgICAgICAgPC9CYXNpY01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=