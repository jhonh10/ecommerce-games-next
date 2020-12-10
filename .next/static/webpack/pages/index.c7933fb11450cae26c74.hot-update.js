webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/game */ "./api/game.js");
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ListGames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ListGames */ "./components/ListGames/index.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      games = _useState[0],
      setGames = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_game__WEBPACK_IMPORTED_MODULE_5__["getLastGamesApi"])(50);

            case 2:
              response = _context.sent;
              if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(response) > 0) setGames(response);else setGames([]);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Seo__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), !games && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Loader"], {
      active: true,
      children: "Cargando Juegos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 24
    }, this), games && Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(games) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "No existen Juegos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 50
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 45
    }, this), Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(games) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ListGames__WEBPACK_IMPORTED_MODULE_8__["default"], {
      games: games
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 34
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(Home, "cGYayGzOhsC9QkJj1PbKOUKMsuY=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZ2FtZXMiLCJzZXRHYW1lcyIsInVzZUVmZmVjdCIsImdldExhc3RHYW1lc0FwaSIsInJlc3BvbnNlIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsSUFBRCxDQURQO0FBQUEsTUFDcEJDLEtBRG9CO0FBQUEsTUFDYkMsUUFEYTs7QUFHM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaLDJWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzBCQyxpRUFBZSxDQUFDLEVBQUQsQ0FEekM7O0FBQUE7QUFDU0Msc0JBRFQ7QUFFRyxrQkFBSUMsbURBQUksQ0FBQ0QsUUFBRCxDQUFKLEdBQWlCLENBQXJCLEVBQXdCSCxRQUFRLENBQUNHLFFBQUQsQ0FBUixDQUF4QixLQUNLSCxRQUFRLENBQUMsRUFBRCxDQUFSOztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFLSCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0kscUVBQUMsNERBQUQ7QUFBYSxhQUFTLEVBQUMsTUFBdkI7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSyxDQUFDRCxLQUFELGlCQUFVLHFFQUFDLHdEQUFEO0FBQVEsWUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmYsRUFHS0EsS0FBSyxJQUFJSyxtREFBSSxDQUFDTCxLQUFELENBQUosS0FBZ0IsQ0FBekIsaUJBQStCO0FBQUEsNkJBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHBDLEVBSUtLLG1EQUFJLENBQUNMLEtBQUQsQ0FBSixHQUFjLENBQWQsaUJBQW9CLHFFQUFDLDZEQUFEO0FBQVcsV0FBSyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBbkJ1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNzkzM2ZiMTE0NTBjYWUyNmM3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IGdldExhc3RHYW1lc0FwaSB9IGZyb20gJy4uL2FwaS9nYW1lJztcclxuaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0XCI7XHJcbmltcG9ydCB7IHNpemUgfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBMaXN0R2FtZXMgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0R2FtZXMnXHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vY29tcG9uZW50cy9TZW8nXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMYXN0R2FtZXNBcGkoNTApO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZShyZXNwb25zZSkgPiAwKSBzZXRHYW1lcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2V0R2FtZXMoW10pO1xyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNpY0xheW91dCBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxTZW8gLz5cclxuICAgICAgICAgICAgeyFnYW1lcyAmJiA8TG9hZGVyIGFjdGl2ZT5DYXJnYW5kbyBKdWVnb3M8L0xvYWRlcj59XHJcbiAgICAgICAgICAgIHtnYW1lcyAmJiBzaXplKGdhbWVzKSA9PT0gMCAmJiAoPGRpdj48aDM+Tm8gZXhpc3RlbiBKdWVnb3M8L2gzPjwvZGl2Pil9XHJcbiAgICAgICAgICAgIHtzaXplKGdhbWVzKSA+IDAgJiYgKDxMaXN0R2FtZXMgZ2FtZXM9e2dhbWVzfSAvPil9XHJcbiAgICAgICAgPC9CYXNpY0xheW91dD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=