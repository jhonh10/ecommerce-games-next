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

  console.log(auth);
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
      title: "Mis Favoritos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "wishlist__block",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "title",
        children: " Lista de deseos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "data",
        children: [!games && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Loader"], {
          active: true,
          children: "Cargando..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 32
        }, this), games && Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(games) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "data__not-found",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: "No tienes juegos favoritos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this), Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(games) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ListGames__WEBPACK_IMPORTED_MODULE_9__["default"], {
          games: games
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 42
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2lzaGxpc3QuanMiXSwibmFtZXMiOlsid2lzaGxpc3QiLCJ1c2VTdGF0ZSIsImdhbWVzIiwic2V0R2FtZXMiLCJ1c2VBdXRoIiwiYXV0aCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJnZXRGYXZvcml0ZUFwaSIsImlkVXNlciIsInJlc3BvbnNlIiwic2l6ZSIsImdhbWVzTGlzdCIsImZvckVhY2giLCJkYXRhIiwicHVzaCIsImdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLElBQUQsQ0FESDtBQUFBLE1BQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFBQSxpQkFFTkMsOERBQU8sRUFGRDtBQUFBLE1BRXZCQyxJQUZ1QixZQUV2QkEsSUFGdUI7QUFBQSxNQUVqQkMsTUFGaUIsWUFFakJBLE1BRmlCOztBQUcvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFHQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1osMlZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMEJDLG9FQUFjLENBQUNMLElBQUksQ0FBQ00sTUFBTixFQUFjTCxNQUFkLENBRHhDOztBQUFBO0FBQ1NNLHNCQURUOztBQUVHLGtCQUFJQyxtREFBSSxDQUFDRCxRQUFELENBQUosR0FBaUIsQ0FBckIsRUFBd0I7QUFDZEUseUJBRGMsR0FDRixFQURFO0FBRXBCQyxzRUFBTyxDQUFDSCxRQUFELEVBQVcsVUFBQ0ksSUFBRCxFQUFVO0FBQ3hCRiwyQkFBUyxDQUFDRyxJQUFWLENBQWVELElBQUksQ0FBQ0UsSUFBcEI7QUFDSCxpQkFGTSxDQUFQO0FBR0FmLHdCQUFRLENBQUNXLFNBQUQsQ0FBUjtBQUNILGVBTkQsTUFNTztBQUNIWCx3QkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNIOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0Esc0JBQ0kscUVBQUMsNERBQUQ7QUFBYSxhQUFTLEVBQUMsVUFBdkI7QUFBQSw0QkFDSSxxRUFBQyx3REFBRDtBQUFLLFdBQUs7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLG1CQUNLLENBQUNELEtBQUQsaUJBQVUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURmLEVBRUtBLEtBQUssSUFBSVcsbURBQUksQ0FBQ1gsS0FBRCxDQUFKLEtBQWdCLENBQXpCLGlCQUNHO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIUixFQU9LVyxtREFBSSxDQUFDWCxLQUFELENBQUosR0FBYyxDQUFkLGlCQUFvQixxRUFBQyw2REFBRDtBQUFXLGVBQUssRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBckN1QkYsUTtVQUVLSSxzRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aXNobGlzdC5kZDI5N2U0ZmUxNTFmYThhYzZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgc2l6ZSwgZm9yRWFjaCB9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQmFzaWNMYXlvdXQnO1xyXG5pbXBvcnQgeyBnZXRGYXZvcml0ZUFwaSB9IGZyb20gJy4uL2FwaS9mYXZvcml0ZSc7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgTGlzdEdhbWVzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEdhbWVzJztcclxuaW1wb3J0IFNlbyBmcm9tICcuLi9jb21wb25lbnRzL1Nlbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXNobGlzdCgpIHtcclxuICAgIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IGF1dGgsIGxvZ291dCB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc29sZS5sb2coYXV0aClcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZhdm9yaXRlQXBpKGF1dGguaWRVc2VyLCBsb2dvdXQpO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZShyZXNwb25zZSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2gocmVzcG9uc2UsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZXNMaXN0LnB1c2goZGF0YS5nYW1lKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lcyhnYW1lc0xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXMoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzaWNMYXlvdXQgY2xhc3NOYW1lPVwid2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgPFNlbyB0aXRsZT17YE1pcyBGYXZvcml0b3NgfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3RfX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+IExpc3RhIGRlIGRlc2VvczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lcyAmJiA8TG9hZGVyIGFjdGl2ZT5DYXJnYW5kby4uLjwvTG9hZGVyPn1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZXMgJiYgc2l6ZShnYW1lcykgPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfX25vdC1mb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5vIHRpZW5lcyBqdWVnb3MgZmF2b3JpdG9zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7c2l6ZShnYW1lcykgPiAwICYmICg8TGlzdEdhbWVzIGdhbWVzPXtnYW1lc30gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQmFzaWNMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==