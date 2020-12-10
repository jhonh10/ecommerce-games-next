webpackHotUpdate_N_E("pages/games/[platform]",{

/***/ "./pages/games/[platform].js":
/*!***********************************!*\
  !*** ./pages/games/[platform].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/game */ "./api/game.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_ListGames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ListGames */ "./components/ListGames/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination/index.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Seo */ "./components/Seo.js");




var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\pages\\games\\[platform].js",
    _s = $RefreshSig$();










var limitPerPage = 1;
function Platform() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      query = _useRouter.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      games = _useState[0],
      setGames = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      totalGames = _useState2[0],
      setTotalGames = _useState2[1];

  var getStartItem = function getStartItem() {
    var currentPage = parseInt(query.page);
    if (!query.page || currentPage === 1) return 0;else return currentPage * limitPerPage - limitPerPage;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!query.platform) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return Object(_api_game__WEBPACK_IMPORTED_MODULE_6__["getGamesPlatformApi"])(query.platform, limitPerPage, getStartItem());

            case 3:
              response = _context.sent;
              setGames(response);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var response;
      return C_Users_Jessica_Palacios_Desktop_Proyectos_React_ecomemrce_next_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_api_game__WEBPACK_IMPORTED_MODULE_6__["getTotalGamesPlatformApi"])(query.platform);

            case 2:
              response = _context2.sent;
              setTotalGames(response);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "platform",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Seo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: "Juegos - ".concat(query.platform)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), !games && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Loader"], {
      active: true,
      children: "Cargando..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 24
    }, this), games && Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(games) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "No hay juegos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this), Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(games) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ListGames__WEBPACK_IMPORTED_MODULE_9__["default"], {
      games: games
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 34
    }, this), totalGames ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
      totalGames: totalGames,
      page: query.page ? parseInt(query.page) : 1,
      limitPerPage: limitPerPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(Platform, "Ozm1xLuTJRy0rn8BRdsSCqX3/yg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Platform;

var _c;

$RefreshReg$(_c, "Platform");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZXMvW3BsYXRmb3JtXS5qcyJdLCJuYW1lcyI6WyJsaW1pdFBlclBhZ2UiLCJQbGF0Zm9ybSIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJnYW1lcyIsInNldEdhbWVzIiwidG90YWxHYW1lcyIsInNldFRvdGFsR2FtZXMiLCJnZXRTdGFydEl0ZW0iLCJjdXJyZW50UGFnZSIsInBhcnNlSW50IiwicGFnZSIsInVzZUVmZmVjdCIsInBsYXRmb3JtIiwiZ2V0R2FtZXNQbGF0Zm9ybUFwaSIsInJlc3BvbnNlIiwiZ2V0VG90YWxHYW1lc1BsYXRmb3JtQXBpIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQXJCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLG1CQUNiQyw2REFBUyxFQURJO0FBQUEsTUFDdkJDLEtBRHVCLGNBQ3ZCQSxLQUR1Qjs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUV4QkMsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0tGLHNEQUFRLENBQUMsSUFBRCxDQUhiO0FBQUEsTUFHeEJHLFVBSHdCO0FBQUEsTUFHWkMsYUFIWTs7QUFLL0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDUyxJQUFQLENBQTVCO0FBQ0EsUUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQVAsSUFBZUYsV0FBVyxLQUFLLENBQW5DLEVBQXNDLE9BQU8sQ0FBUCxDQUF0QyxLQUNLLE9BQU9BLFdBQVcsR0FBR1YsWUFBZCxHQUE2QkEsWUFBcEM7QUFDUixHQUpEOztBQU1BYSx5REFBUyxDQUFDLFlBQU07QUFDWiwyVkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDT1YsS0FBSyxDQUFDVyxRQURiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRThCQyxxRUFBbUIsQ0FBQ1osS0FBSyxDQUFDVyxRQUFQLEVBQWlCZCxZQUFqQixFQUErQlMsWUFBWSxFQUEzQyxDQUZqRDs7QUFBQTtBQUVhTyxzQkFGYjtBQUdPVixzQkFBUSxDQUFDVSxRQUFELENBQVI7O0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQU1ILEdBUFEsRUFPTixDQUFDYixLQUFELENBUE0sQ0FBVDtBQVNBVSx5REFBUyxDQUFDLFlBQU07QUFDWiwyVkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMwQkksMEVBQXdCLENBQUNkLEtBQUssQ0FBQ1csUUFBUCxDQURsRDs7QUFBQTtBQUNTRSxzQkFEVDtBQUVHUiwyQkFBYSxDQUFDUSxRQUFELENBQWI7O0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUlILEdBTFEsRUFLTixDQUFDYixLQUFELENBTE0sQ0FBVDtBQVFBLHNCQUNJLHFFQUFDLDREQUFEO0FBQWEsYUFBUyxFQUFDLFVBQXZCO0FBQUEsNEJBQ0kscUVBQUMsd0RBQUQ7QUFBSyxXQUFLLHFCQUFjQSxLQUFLLENBQUNXLFFBQXBCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUssQ0FBQ1QsS0FBRCxpQkFBVSxxRUFBQyx3REFBRDtBQUFRLFlBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZmLEVBR0tBLEtBQUssSUFBSWEsbURBQUksQ0FBQ2IsS0FBRCxDQUFKLEtBQWdCLENBQXpCLGlCQUNHO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSlIsRUFRS2EsbURBQUksQ0FBQ2IsS0FBRCxDQUFKLEdBQWMsQ0FBZCxpQkFBb0IscUVBQUMsNkRBQUQ7QUFBVyxXQUFLLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSekIsRUFVS0UsVUFBVSxnQkFDUCxxRUFBQywrREFBRDtBQUNJLGdCQUFVLEVBQUVBLFVBRGhCO0FBRUksVUFBSSxFQUFFSixLQUFLLENBQUNTLElBQU4sR0FBYUQsUUFBUSxDQUFDUixLQUFLLENBQUNTLElBQVAsQ0FBckIsR0FBb0MsQ0FGOUM7QUFHSSxrQkFBWSxFQUFFWjtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sR0FNUCxJQWhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0FoRHVCQyxRO1VBQ0ZDLHFEOzs7S0FERUQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lcy9bcGxhdGZvcm1dLmYwNzJlOWY4Y2M4ZDIxZDQ0NjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzaWNMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9CYXNpY0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0R2FtZXNQbGF0Zm9ybUFwaSwgZ2V0VG90YWxHYW1lc1BsYXRmb3JtQXBpIH0gZnJvbSAnLi4vLi4vYXBpL2dhbWUnXHJcbmltcG9ydCB7IHNpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMaXN0R2FtZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0R2FtZXMnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgU2VvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VvJztcclxuXHJcbmNvbnN0IGxpbWl0UGVyUGFnZSA9IDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF0Zm9ybSgpIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0b3RhbEdhbWVzLCBzZXRUb3RhbEdhbWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXJ0SXRlbSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIGlmICghcXVlcnkucGFnZSB8fCBjdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuIDA7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gY3VycmVudFBhZ2UgKiBsaW1pdFBlclBhZ2UgLSBsaW1pdFBlclBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0R2FtZXNQbGF0Zm9ybUFwaShxdWVyeS5wbGF0Zm9ybSwgbGltaXRQZXJQYWdlLCBnZXRTdGFydEl0ZW0oKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbcXVlcnldKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0VG90YWxHYW1lc1BsYXRmb3JtQXBpKHF1ZXJ5LnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgc2V0VG90YWxHYW1lcyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW3F1ZXJ5XSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2ljTGF5b3V0IGNsYXNzTmFtZT1cInBsYXRmb3JtXCI+XHJcbiAgICAgICAgICAgIDxTZW8gdGl0bGU9e2BKdWVnb3MgLSAke3F1ZXJ5LnBsYXRmb3JtfWB9Lz5cclxuICAgICAgICAgICAgeyFnYW1lcyAmJiA8TG9hZGVyIGFjdGl2ZT5DYXJnYW5kby4uLjwvTG9hZGVyPn1cclxuICAgICAgICAgICAge2dhbWVzICYmIHNpemUoZ2FtZXMpID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIGhheSBqdWVnb3M8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaXplKGdhbWVzKSA+IDAgJiYgKDxMaXN0R2FtZXMgZ2FtZXM9e2dhbWVzfSAvPil9XHJcblxyXG4gICAgICAgICAgICB7dG90YWxHYW1lcyA/IChcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxHYW1lcz17dG90YWxHYW1lc31cclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXtxdWVyeS5wYWdlID8gcGFyc2VJbnQocXVlcnkucGFnZSkgOiAxfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0UGVyUGFnZT17bGltaXRQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9CYXNpY0xheW91dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9