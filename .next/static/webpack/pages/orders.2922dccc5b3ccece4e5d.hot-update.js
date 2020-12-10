webpackHotUpdate_N_E("pages/orders",{

/***/ "./components/Order/Order.js":
/*!***********************************!*\
  !*** ./components/Order/Order.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orders; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_BasicModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/BasicModal */ "./components/Modal/BasicModal.js");



var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\components\\Order\\Order.js",
    _s = $RefreshSig$();







function Orders(_ref) {
  _s();

  var order = _ref.order;
  var game = order.game,
      totalPayment = order.totalPayment,
      createdAt = order.createdAt,
      adressShipping = order.adressShipping;
  var title = game.title,
      poster = game.poster,
      url = game.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "order",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "order__info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "order__info-data",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/".concat(url),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: poster.url,
                alt: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [totalPayment, " \u20AC"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "order__other",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "order__other-date",
            children: [moment__WEBPACK_IMPORTED_MODULE_4___default()(createdAt).format("L"), " - ", moment__WEBPACK_IMPORTED_MODULE_4___default()(createdAt).format("LT")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            name: "eye",
            circular: true,
            link: true,
            onClick: function onClick() {
              return setShowModal(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddressModal, {
      showModal: showModal,
      setShowModal: setShowModal,
      addressShipping: addressShipping,
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Orders, "uVlnG5KLfXemZk5i5Fl+Cg356FU=");

_c = Orders;

function AddressModal(_ref2) {
  var showModal = _ref2.showModal,
      setShowModal = _ref2.setShowModal,
      addressShipping = _ref2.addressShipping,
      title = _ref2.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_BasicModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showModal,
    setShow: setShowModal,
    size: "tiny",
    title: title,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "El pedido se ha enviado a la siguiente direcci\xF3n:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: addressShipping.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: addressShipping.address
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [addressShipping.state, ", ", addressShipping.city, " ", addressShipping.postalCode]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: addressShipping.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_c2 = AddressModal;

var _c, _c2;

$RefreshReg$(_c, "Orders");
$RefreshReg$(_c2, "AddressModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlci9PcmRlci5qcyJdLCJuYW1lcyI6WyJPcmRlcnMiLCJvcmRlciIsImdhbWUiLCJ0b3RhbFBheW1lbnQiLCJjcmVhdGVkQXQiLCJhZHJlc3NTaGlwcGluZyIsInRpdGxlIiwicG9zdGVyIiwidXJsIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb21lbnQiLCJmb3JtYXQiLCJhZGRyZXNzU2hpcHBpbmciLCJBZGRyZXNzTW9kYWwiLCJuYW1lIiwiYWRkcmVzcyIsInN0YXRlIiwiY2l0eSIsInBvc3RhbENvZGUiLCJwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUFBLE1BQzlCQyxJQUQ4QixHQUNvQkQsS0FEcEIsQ0FDOUJDLElBRDhCO0FBQUEsTUFDeEJDLFlBRHdCLEdBQ29CRixLQURwQixDQUN4QkUsWUFEd0I7QUFBQSxNQUNWQyxTQURVLEdBQ29CSCxLQURwQixDQUNWRyxTQURVO0FBQUEsTUFDQ0MsY0FERCxHQUNvQkosS0FEcEIsQ0FDQ0ksY0FERDtBQUFBLE1BRTlCQyxLQUY4QixHQUVQSixJQUZPLENBRTlCSSxLQUY4QjtBQUFBLE1BRXZCQyxNQUZ1QixHQUVQTCxJQUZPLENBRXZCSyxNQUZ1QjtBQUFBLE1BRWZDLEdBRmUsR0FFUE4sSUFGTyxDQUVmTSxHQUZlOztBQUFBLGtCQUdKQyxzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BRy9CQyxTQUgrQjtBQUFBLE1BR3BCQyxZQUhvQjs7QUFJdEMsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxrQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLGFBQU1ILEdBQU4sQ0FBVjtBQUFBLG1DQUNJO0FBQUEscUNBQ0kscUVBQUMsdURBQUQ7QUFBTyxtQkFBRyxFQUFFRCxNQUFNLENBQUNDLEdBQW5CO0FBQXdCLG1CQUFHLEVBQUVGO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU1JO0FBQUEsb0NBQ0k7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQSx5QkFBSUgsWUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVlJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLG1CQUFiO0FBQUEsdUJBQ0tTLDZDQUFNLENBQUNSLFNBQUQsQ0FBTixDQUFrQlMsTUFBbEIsQ0FBeUIsR0FBekIsQ0FETCxTQUN1Q0QsNkNBQU0sQ0FBQ1IsU0FBRCxDQUFOLENBQWtCUyxNQUFsQixDQUF5QixJQUF6QixDQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSSxxRUFBQyxzREFBRDtBQUFNLGdCQUFJLEVBQUMsS0FBWDtBQUFpQixvQkFBUSxNQUF6QjtBQUEwQixnQkFBSSxNQUE5QjtBQUErQixtQkFBTyxFQUFFO0FBQUEscUJBQU1GLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBc0JJLHFFQUFDLFlBQUQ7QUFDSSxlQUFTLEVBQUVELFNBRGY7QUFFSSxrQkFBWSxFQUFFQyxZQUZsQjtBQUdJLHFCQUFlLEVBQUVHLGVBSHJCO0FBSUksV0FBSyxFQUFFUjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Qko7QUFBQSxrQkFESjtBQStCSDs7R0FuQ3VCTixNOztLQUFBQSxNOztBQXFDeEIsU0FBU2UsWUFBVCxRQUEyRTtBQUFBLE1BQW5ETCxTQUFtRCxTQUFuREEsU0FBbUQ7QUFBQSxNQUF4Q0MsWUFBd0MsU0FBeENBLFlBQXdDO0FBQUEsTUFBMUJHLGVBQTBCLFNBQTFCQSxlQUEwQjtBQUFBLE1BQVRSLEtBQVMsU0FBVEEsS0FBUztBQUV2RSxzQkFDSSxxRUFBQyx5REFBRDtBQUNJLFFBQUksRUFBRUksU0FEVjtBQUVJLFdBQU8sRUFBRUMsWUFGYjtBQUdJLFFBQUksRUFBQyxNQUhUO0FBSUksU0FBSyxFQUFFTCxLQUpYO0FBQUEsNEJBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSVEsZUFBZSxDQUFDRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFJRixlQUFlLENBQUNHO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUEsbUJBQ0tILGVBQWUsQ0FBQ0ksS0FEckIsUUFDOEJKLGVBQWUsQ0FBQ0ssSUFEOUMsRUFDb0QsR0FEcEQsRUFFS0wsZUFBZSxDQUFDTSxVQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQU9JO0FBQUEsa0JBQUlOLGVBQWUsQ0FBQ087QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztNQXJCUU4sWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlcnMuMjkyMmRjY2M1YjNjY2VjZTRlNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZXMnO1xyXG5pbXBvcnQgQmFzaWNNb2RhbCBmcm9tICcuLi9Nb2RhbC9CYXNpY01vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVycyh7IG9yZGVyIH0pIHtcclxuICAgIGNvbnN0IHsgZ2FtZSwgdG90YWxQYXltZW50LCBjcmVhdGVkQXQsIGFkcmVzc1NoaXBwaW5nIH0gPSBvcmRlcjtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHBvc3RlciwgdXJsIH0gPSBnYW1lO1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl9faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfX2luZm8tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdGVyLnVybH0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RvdGFsUGF5bWVudH0g4oKsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX19vdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcmRlcl9fb3RoZXItZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdChcIkxcIil9IC0ge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdChcIkxUXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJleWVcIiBjaXJjdWxhciBsaW5rIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFkZHJlc3NNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3NTaGlwcGluZz17YWRkcmVzc1NoaXBwaW5nfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRyZXNzTW9kYWwoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCwgYWRkcmVzc1NoaXBwaW5nLCB0aXRsZSB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzaWNNb2RhbFxyXG4gICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgIHNldFNob3c9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgc2l6ZT1cInRpbnlcIlxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+RWwgcGVkaWRvIHNlIGhhIGVudmlhZG8gYSBsYSBzaWd1aWVudGUgZGlyZWNjacOzbjo8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+e2FkZHJlc3NTaGlwcGluZy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnthZGRyZXNzU2hpcHBpbmcuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7YWRkcmVzc1NoaXBwaW5nLnN0YXRlfSwge2FkZHJlc3NTaGlwcGluZy5jaXR5fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7YWRkcmVzc1NoaXBwaW5nLnBvc3RhbENvZGV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57YWRkcmVzc1NoaXBwaW5nLnBob25lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CYXNpY01vZGFsPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=