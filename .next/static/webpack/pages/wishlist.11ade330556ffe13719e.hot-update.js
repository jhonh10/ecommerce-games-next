webpackHotUpdate_N_E("pages/wishlist",{

/***/ "./pages/wishlist.js":
/*!***************************!*\
  !*** ./pages/wishlist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wishlist; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var _api_favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/favorite */ "./api/favorite.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useAuth */ "./hooks/useAuth.js");
/* harmony import */ var _components_ListGames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ListGames */ "./components/ListGames/index.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\wishlist.js",
    _s = $RefreshSig$();









function wishlist() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      games = _useState[0],
      setGames = _useState[1];

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      auth = _useAuth.auth,
      logout = _useAuth.logout;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, gamesList;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_favorite__WEBPACK_IMPORTED_MODULE_7__["getFavoriteApi"])(auth.idUser, logout);

            case 2:
              response = _context.sent;

              if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(response) > 0) {
                gamesList = [];
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(response, function (data) {
                  gamesList.push(data.game);
                });
                setGames(gamesList);
              } else {
                setGames([]);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "wishlist",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Seo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "Pedidos - ".concat(auth.username)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "wishlist__block",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "title",
        children: " Lista de deseos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "data",
        children: [!games && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Loader"], {
          active: true,
          children: "Cargando..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 32
        }, this), games && Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(games) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "data__not-found",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: "No tienes juegos favoritos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this), Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(games) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ListGames__WEBPACK_IMPORTED_MODULE_9__["default"], {
          games: games
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 42
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(wishlist, "mGx5QHt5okbGU3I/Jakj550Z0Rw=", false, function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2lzaGxpc3QuanMiXSwibmFtZXMiOlsid2lzaGxpc3QiLCJ1c2VTdGF0ZSIsImdhbWVzIiwic2V0R2FtZXMiLCJ1c2VBdXRoIiwiYXV0aCIsImxvZ291dCIsInVzZUVmZmVjdCIsImdldEZhdm9yaXRlQXBpIiwiaWRVc2VyIiwicmVzcG9uc2UiLCJzaXplIiwiZ2FtZXNMaXN0IiwiZm9yRWFjaCIsImRhdGEiLCJwdXNoIiwiZ2FtZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxJQUFELENBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUI7O0FBQUEsaUJBRU5DLDhEQUFPLEVBRkQ7QUFBQSxNQUV2QkMsSUFGdUIsWUFFdkJBLElBRnVCO0FBQUEsTUFFakJDLE1BRmlCLFlBRWpCQSxNQUZpQjs7QUFLL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaLDJWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzBCQyxvRUFBYyxDQUFDSCxJQUFJLENBQUNJLE1BQU4sRUFBY0gsTUFBZCxDQUR4Qzs7QUFBQTtBQUNTSSxzQkFEVDs7QUFFRyxrQkFBSUMsbURBQUksQ0FBQ0QsUUFBRCxDQUFKLEdBQWlCLENBQXJCLEVBQXdCO0FBQ2RFLHlCQURjLEdBQ0YsRUFERTtBQUVwQkMsc0VBQU8sQ0FBQ0gsUUFBRCxFQUFXLFVBQUNJLElBQUQsRUFBVTtBQUN4QkYsMkJBQVMsQ0FBQ0csSUFBVixDQUFlRCxJQUFJLENBQUNFLElBQXBCO0FBQ0gsaUJBRk0sQ0FBUDtBQUdBYix3QkFBUSxDQUFDUyxTQUFELENBQVI7QUFDSCxlQU5ELE1BTU87QUFDSFQsd0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDSDs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBWUgsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWNBLHNCQUNJLHFFQUFDLDREQUFEO0FBQWEsYUFBUyxFQUFDLFVBQXZCO0FBQUEsNEJBQ0kscUVBQUMsd0RBQUQ7QUFBSyxXQUFLLHNCQUFlRSxJQUFJLENBQUNZLFFBQXBCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxtQkFDSyxDQUFDZixLQUFELGlCQUFVLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZixFQUVLQSxLQUFLLElBQUlTLG1EQUFJLENBQUNULEtBQUQsQ0FBSixLQUFnQixDQUF6QixpQkFDRztBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFIsRUFPS1MsbURBQUksQ0FBQ1QsS0FBRCxDQUFKLEdBQWMsQ0FBZCxpQkFBb0IscUVBQUMsNkRBQUQ7QUFBVyxlQUFLLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQXBDdUJGLFE7VUFFS0ksc0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2lzaGxpc3QuMTFhZGUzMzA1NTZmZmUxMzcxOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IHNpemUsIGZvckVhY2ggfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0RmF2b3JpdGVBcGkgfSBmcm9tICcuLi9hcGkvZmF2b3JpdGUnO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi9ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IExpc3RHYW1lcyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RHYW1lcyc7XHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vY29tcG9uZW50cy9TZW8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2lzaGxpc3QoKSB7XHJcbiAgICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyBhdXRoLCBsb2dvdXQgfSA9IHVzZUF1dGgoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZhdm9yaXRlQXBpKGF1dGguaWRVc2VyLCBsb2dvdXQpO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZShyZXNwb25zZSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2gocmVzcG9uc2UsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZXNMaXN0LnB1c2goZGF0YS5nYW1lKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lcyhnYW1lc0xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXMoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzaWNMYXlvdXQgY2xhc3NOYW1lPVwid2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgPFNlbyB0aXRsZT17YFBlZGlkb3MgLSAke2F1dGgudXNlcm5hbWV9YH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0X19ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPiBMaXN0YSBkZSBkZXNlb3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshZ2FtZXMgJiYgPExvYWRlciBhY3RpdmU+Q2FyZ2FuZG8uLi48L0xvYWRlcj59XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVzICYmIHNpemUoZ2FtZXMpID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhX19ub3QtZm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5ObyB0aWVuZXMganVlZ29zIGZhdm9yaXRvczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemUoZ2FtZXMpID4gMCAmJiAoPExpc3RHYW1lcyBnYW1lcz17Z2FtZXN9IC8+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jhc2ljTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=