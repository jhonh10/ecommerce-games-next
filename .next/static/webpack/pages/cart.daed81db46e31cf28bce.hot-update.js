webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/Cart/Payment/Payment.js":
/*!********************************************!*\
  !*** ./components/Cart/Payment/Payment.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.js");

var _jsxFileName = "C:\\Users\\Jessica Palacios\\Desktop\\Proyectos React\\ecomemrce-next\\client\\components\\Cart\\Payment\\Payment.js";



function Payment(_ref) {
  var products = _ref.products,
      adress = _ref.adress;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "payment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Payment;

var _c;

$RefreshReg$(_c, "Payment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var isUnknownObject = function isUnknownObject(raw) {
    return raw !== null && _typeof(raw) === 'object';
  };
  var isPromise = function isPromise(raw) {
    return isUnknownObject(raw) && typeof raw.then === 'function';
  }; // We are using types to enforce the `stripe` prop in this lib,
  // but in an untyped integration `stripe` could be anything, so we need
  // to do some sanity validation to prevent type errors.

  var isStripe = function isStripe(raw) {
    return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
  };

  var PLAIN_OBJECT_STR = '[object Object]';
  var isEqual = function isEqual(left, right) {
    if (!isUnknownObject(left) || !isUnknownObject(right)) {
      return left === right;
    }

    var leftArray = Array.isArray(left);
    var rightArray = Array.isArray(right);
    if (leftArray !== rightArray) return false;
    var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
    var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
    if (leftPlainObject !== rightPlainObject) return false;
    if (!leftPlainObject && !leftArray) return false;
    var leftKeys = Object.keys(left);
    var rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) return false;
    var keySet = {};

    for (var i = 0; i < leftKeys.length; i += 1) {
      keySet[leftKeys[i]] = true;
    }

    for (var _i = 0; _i < rightKeys.length; _i += 1) {
      keySet[rightKeys[_i]] = true;
    }

    var allKeys = Object.keys(keySet);

    if (allKeys.length !== leftKeys.length) {
      return false;
    }

    var l = left;
    var r = right;

    var pred = function pred(key) {
      return isEqual(l[key], r[key]);
    };

    return allKeys.every(pred);
  };

  var usePrevious = function usePrevious(value) {
    var ref = React.useRef(value);
    React.useEffect(function () {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
  // integration `stripe` could be anything, so we need to do some sanity
  // validation to prevent type errors.

  var validateStripe = function validateStripe(maybeStripe) {
    if (maybeStripe === null || isStripe(maybeStripe)) {
      return maybeStripe;
    }

    throw new Error(INVALID_STRIPE_ERROR);
  };

  var parseStripeProp = function parseStripeProp(raw) {
    if (isPromise(raw)) {
      return {
        tag: 'async',
        stripePromise: Promise.resolve(raw).then(validateStripe)
      };
    }

    var stripe = validateStripe(raw);

    if (stripe === null) {
      return {
        tag: 'empty'
      };
    }

    return {
      tag: 'sync',
      stripe: stripe
    };
  };

  var ElementsContext = React.createContext(null);
  ElementsContext.displayName = 'ElementsContext';
  var parseElementsContext = function parseElementsContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    }

    return ctx;
  };
  /**
   * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
   * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
   *
   * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
   * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
   * Pass the returned `Promise` to `Elements`.
   *
   * @docs https://stripe.com/docs/stripe-js/react#elements-provider
   */

  var Elements = function Elements(_ref) {
    var rawStripeProp = _ref.stripe,
        options = _ref.options,
        children = _ref.children;

    var _final = React.useRef(false);

    var isMounted = React.useRef(true);
    var parsed = React.useMemo(function () {
      return parseStripeProp(rawStripeProp);
    }, [rawStripeProp]);

    var _React$useState = React.useState(function () {
      return {
        stripe: null,
        elements: null
      };
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        ctx = _React$useState2[0],
        setContext = _React$useState2[1];

    var prevStripe = usePrevious(rawStripeProp);
    var prevOptions = usePrevious(options);

    if (prevStripe !== null) {
      if (prevStripe !== rawStripeProp) {
        console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
      }

      if (!isEqual(options, prevOptions)) {
        console.warn('Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.');
      }
    }

    if (!_final.current) {
      if (parsed.tag === 'sync') {
        _final.current = true;
        setContext({
          stripe: parsed.stripe,
          elements: parsed.stripe.elements(options)
        });
      }

      if (parsed.tag === 'async') {
        _final.current = true;
        parsed.stripePromise.then(function (stripe) {
          if (stripe && isMounted.current) {
            // Only update Elements context if the component is still mounted
            // and stripe is not null. We allow stripe to be null to make
            // handling SSR easier.
            setContext({
              stripe: stripe,
              elements: stripe.elements(options)
            });
          }
        });
      }
    }

    React.useEffect(function () {
      return function () {
        isMounted.current = false;
      };
    }, []);
    React.useEffect(function () {
      var anyStripe = ctx.stripe;

      if (!anyStripe || !anyStripe._registerWrapper) {
        return;
      }

      anyStripe._registerWrapper({
        name: 'react-stripe-js',
        version: "1.1.2"
      });
    }, [ctx.stripe]);
    return React.createElement(ElementsContext.Provider, {
      value: ctx
    }, children);
  };
  Elements.propTypes = {
    stripe: propTypes.any,
    options: propTypes.object
  };
  var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
    var ctx = React.useContext(ElementsContext);
    return parseElementsContext(ctx, useCaseMessage);
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
   */

  var useElements = function useElements() {
    var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
        elements = _useElementsContextWi.elements;

    return elements;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
   */

  var useStripe = function useStripe() {
    var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
        stripe = _useElementsContextWi2.stripe;

    return stripe;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
   */

  var ElementsConsumer = function ElementsConsumer(_ref2) {
    var children = _ref2.children;
    var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

    return children(ctx);
  };
  ElementsConsumer.propTypes = {
    children: propTypes.func.isRequired
  };

  var useCallbackReference = function useCallbackReference(cb) {
    var ref = React.useRef(cb);
    React.useEffect(function () {
      ref.current = cb;
    }, [cb]);
    return function () {
      if (ref.current) {
        ref.current.apply(ref, arguments);
      }
    };
  };

  var extractUpdateableOptions = function extractUpdateableOptions(options) {
    if (!isUnknownObject(options)) {
      return {};
    }

    var _ = options.paymentRequest,
        rest = _objectWithoutProperties(options, ["paymentRequest"]);

    return rest;
  };

  var noop = function noop() {};

  var capitalized = function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var createElementComponent = function createElementComponent(type, isServer) {
    var displayName = "".concat(capitalized(type), "Element");

    var ClientElement = function ClientElement(_ref) {
      var id = _ref.id,
          className = _ref.className,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          _ref$onBlur = _ref.onBlur,
          onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur,
          _ref$onFocus = _ref.onFocus,
          onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus,
          _ref$onReady = _ref.onReady,
          onReady = _ref$onReady === void 0 ? noop : _ref$onReady,
          _ref$onChange = _ref.onChange,
          onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
          _ref$onEscape = _ref.onEscape,
          onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape,
          _ref$onClick = _ref.onClick,
          onClick = _ref$onClick === void 0 ? noop : _ref$onClick;

      var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
          elements = _useElementsContextWi.elements;

      var elementRef = React.useRef(null);
      var domNode = React.useRef(null);
      var callOnReady = useCallbackReference(onReady);
      var callOnBlur = useCallbackReference(onBlur);
      var callOnFocus = useCallbackReference(onFocus);
      var callOnClick = useCallbackReference(onClick);
      var callOnChange = useCallbackReference(onChange);
      var callOnEscape = useCallbackReference(onEscape);
      React.useLayoutEffect(function () {
        if (elementRef.current == null && elements && domNode.current != null) {
          var element = elements.create(type, options);
          elementRef.current = element;
          element.mount(domNode.current);
          element.on('ready', function () {
            return callOnReady(element);
          });
          element.on('change', callOnChange);
          element.on('blur', callOnBlur);
          element.on('focus', callOnFocus);
          element.on('escape', callOnEscape); // Users can pass an an onClick prop on any Element component
          // just as they could listen for the `click` event on any Element,
          // but only the PaymentRequestButton will actually trigger the event.

          element.on('click', callOnClick);
        }
      });
      var prevOptions = React.useRef(options);
      React.useEffect(function () {
        if (prevOptions.current && prevOptions.current.paymentRequest !== options.paymentRequest) {
          console.warn('Unsupported prop change: options.paymentRequest is not a customizable property.');
        }

        var updateableOptions = extractUpdateableOptions(options);

        if (Object.keys(updateableOptions).length !== 0 && !isEqual(updateableOptions, extractUpdateableOptions(prevOptions.current))) {
          if (elementRef.current) {
            elementRef.current.update(updateableOptions);
            prevOptions.current = options;
          }
        }
      }, [options]);
      React.useEffect(function () {
        return function () {
          if (elementRef.current) {
            elementRef.current.destroy();
          }
        };
      }, []);
      return React.createElement("div", {
        id: id,
        className: className,
        ref: domNode
      });
    }; // Only render the Element wrapper in a server environment.


    var ServerElement = function ServerElement(props) {
      // Validate that we are in the right context by calling useElementsContextWithUseCase.
      useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
      var id = props.id,
          className = props.className;
      return React.createElement("div", {
        id: id,
        className: className
      });
    };

    var Element = isServer ? ServerElement : ClientElement;
    Element.propTypes = {
      id: propTypes.string,
      className: propTypes.string,
      onChange: propTypes.func,
      onBlur: propTypes.func,
      onFocus: propTypes.func,
      onReady: propTypes.func,
      onClick: propTypes.func,
      options: propTypes.object
    };
    Element.displayName = displayName;
    Element.__elementType = type;
    return Element;
  };

  var isServer = typeof window === 'undefined';
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardElement = createElementComponent('card', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardNumberElement = createElementComponent('cardNumber', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardExpiryElement = createElementComponent('cardExpiry', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardCvcElement = createElementComponent('cardCvc', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var FpxBankElement = createElementComponent('fpxBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IbanElement = createElementComponent('iban', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IdealBankElement = createElementComponent('idealBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);

  exports.AuBankAccountElement = AuBankAccountElement;
  exports.CardCvcElement = CardCvcElement;
  exports.CardElement = CardElement;
  exports.CardExpiryElement = CardExpiryElement;
  exports.CardNumberElement = CardNumberElement;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.FpxBankElement = FpxBankElement;
  exports.IbanElement = IbanElement;
  exports.IdealBankElement = IdealBankElement;
  exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
  exports.useElements = useElements;
  exports.useStripe = useStripe;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStripe", function() { return loadStripe; });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.11.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
};

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L1BheW1lbnQvUGF5bWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzL2Rpc3QvcmVhY3Qtc3RyaXBlLnVtZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3RyaXBlLWpzL2Rpc3Qvc3RyaXBlLmVzbS5qcyJdLCJuYW1lcyI6WyJQYXltZW50IiwicHJvZHVjdHMiLCJhZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUF1QztBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDbEQsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIO0tBTnVCRixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQSxFQUFFLEtBQTRELG9CQUFvQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pHLEVBQUUsU0FDeUU7QUFDM0UsQ0FBQyxtQ0FBbUM7O0FBRXBDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQywrQkFBK0I7QUFDOUU7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFlBQVksRUFBRTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTs7QUFFQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxrT0FBa087QUFDbE87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzltQkQ7QUFBQTtBQUFBO0FBQ0E7QUFDQSx1SUFBdUk7QUFDdkk7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmRhZWQ4MWRiNDZlMzFjZjI4YmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgU1RJUEVfVE9LRU4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5bWVudCh7IHByb2R1Y3RzLCBhZHJlc3MgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+cGF5bWVudDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLlJlYWN0U3RyaXBlID0ge30sIGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMsIFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdCA9IFJlYWN0ICYmIFJlYWN0Lmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBSZWFjdFsnZGVmYXVsdCddIDogUmVhY3Q7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICAgIHZhciBrZXksIGk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICBpZiAoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuICBcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICovXG5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuICBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cblxuICBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxuICB2YXIgZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpIHtcbiAgICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgKyAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJyk7XG4gICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcblxuICAgIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgICByZXR1cm4gc2hpbTtcbiAgICB9XG4gICAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG5cbiAgICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgICBhcnJheTogc2hpbSxcbiAgICAgIGJvb2w6IHNoaW0sXG4gICAgICBmdW5jOiBzaGltLFxuICAgICAgbnVtYmVyOiBzaGltLFxuICAgICAgb2JqZWN0OiBzaGltLFxuICAgICAgc3RyaW5nOiBzaGltLFxuICAgICAgc3ltYm9sOiBzaGltLFxuICAgICAgYW55OiBzaGltLFxuICAgICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgICBub2RlOiBzaGltLFxuICAgICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICAgIHNoYXBlOiBnZXRTaGltLFxuICAgICAgZXhhY3Q6IGdldFNoaW0sXG4gICAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gICAgfTtcbiAgICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcbiAgICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG4gIH07XG5cbiAgdmFyIHByb3BUeXBlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyoqXG4gICAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKi9cbiAge1xuICAgIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gICAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zKCk7XG4gIH1cbiAgfSk7XG5cbiAgdmFyIGlzVW5rbm93bk9iamVjdCA9IGZ1bmN0aW9uIGlzVW5rbm93bk9iamVjdChyYXcpIHtcbiAgICByZXR1cm4gcmF3ICE9PSBudWxsICYmIF90eXBlb2YocmF3KSA9PT0gJ29iamVjdCc7XG4gIH07XG4gIHZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UocmF3KSB7XG4gICAgcmV0dXJuIGlzVW5rbm93bk9iamVjdChyYXcpICYmIHR5cGVvZiByYXcudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfTsgLy8gV2UgYXJlIHVzaW5nIHR5cGVzIHRvIGVuZm9yY2UgdGhlIGBzdHJpcGVgIHByb3AgaW4gdGhpcyBsaWIsXG4gIC8vIGJ1dCBpbiBhbiB1bnR5cGVkIGludGVncmF0aW9uIGBzdHJpcGVgIGNvdWxkIGJlIGFueXRoaW5nLCBzbyB3ZSBuZWVkXG4gIC8vIHRvIGRvIHNvbWUgc2FuaXR5IHZhbGlkYXRpb24gdG8gcHJldmVudCB0eXBlIGVycm9ycy5cblxuICB2YXIgaXNTdHJpcGUgPSBmdW5jdGlvbiBpc1N0cmlwZShyYXcpIHtcbiAgICByZXR1cm4gaXNVbmtub3duT2JqZWN0KHJhdykgJiYgdHlwZW9mIHJhdy5lbGVtZW50cyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmF3LmNyZWF0ZVRva2VuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByYXcuY3JlYXRlUGF5bWVudE1ldGhvZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmF3LmNvbmZpcm1DYXJkUGF5bWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgUExBSU5fT0JKRUNUX1NUUiA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICB2YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAoIWlzVW5rbm93bk9iamVjdChsZWZ0KSB8fCAhaXNVbmtub3duT2JqZWN0KHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgIH1cblxuICAgIHZhciBsZWZ0QXJyYXkgPSBBcnJheS5pc0FycmF5KGxlZnQpO1xuICAgIHZhciByaWdodEFycmF5ID0gQXJyYXkuaXNBcnJheShyaWdodCk7XG4gICAgaWYgKGxlZnRBcnJheSAhPT0gcmlnaHRBcnJheSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBsZWZ0UGxhaW5PYmplY3QgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobGVmdCkgPT09IFBMQUlOX09CSkVDVF9TVFI7XG4gICAgdmFyIHJpZ2h0UGxhaW5PYmplY3QgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocmlnaHQpID09PSBQTEFJTl9PQkpFQ1RfU1RSO1xuICAgIGlmIChsZWZ0UGxhaW5PYmplY3QgIT09IHJpZ2h0UGxhaW5PYmplY3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWxlZnRQbGFpbk9iamVjdCAmJiAhbGVmdEFycmF5KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGxlZnRLZXlzID0gT2JqZWN0LmtleXMobGVmdCk7XG4gICAgdmFyIHJpZ2h0S2V5cyA9IE9iamVjdC5rZXlzKHJpZ2h0KTtcbiAgICBpZiAobGVmdEtleXMubGVuZ3RoICE9PSByaWdodEtleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGtleVNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZWZ0S2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga2V5U2V0W2xlZnRLZXlzW2ldXSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHJpZ2h0S2V5cy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIGtleVNldFtyaWdodEtleXNbX2ldXSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGFsbEtleXMgPSBPYmplY3Qua2V5cyhrZXlTZXQpO1xuXG4gICAgaWYgKGFsbEtleXMubGVuZ3RoICE9PSBsZWZ0S2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbCA9IGxlZnQ7XG4gICAgdmFyIHIgPSByaWdodDtcblxuICAgIHZhciBwcmVkID0gZnVuY3Rpb24gcHJlZChrZXkpIHtcbiAgICAgIHJldHVybiBpc0VxdWFsKGxba2V5XSwgcltrZXldKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFsbEtleXMuZXZlcnkocHJlZCk7XG4gIH07XG5cbiAgdmFyIHVzZVByZXZpb3VzID0gZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKHZhbHVlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9LCBbdmFsdWVdKTtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgdmFyIElOVkFMSURfU1RSSVBFX0VSUk9SID0gJ0ludmFsaWQgcHJvcCBgc3RyaXBlYCBzdXBwbGllZCB0byBgRWxlbWVudHNgLiBXZSByZWNvbW1lbmQgdXNpbmcgdGhlIGBsb2FkU3RyaXBlYCB1dGlsaXR5IGZyb20gYEBzdHJpcGUvc3RyaXBlLWpzYC4gU2VlIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCNlbGVtZW50cy1wcm9wcy1zdHJpcGUgZm9yIGRldGFpbHMuJzsgLy8gV2UgYXJlIHVzaW5nIHR5cGVzIHRvIGVuZm9yY2UgdGhlIGBzdHJpcGVgIHByb3AgaW4gdGhpcyBsaWIsIGJ1dCBpbiBhIHJlYWxcbiAgLy8gaW50ZWdyYXRpb24gYHN0cmlwZWAgY291bGQgYmUgYW55dGhpbmcsIHNvIHdlIG5lZWQgdG8gZG8gc29tZSBzYW5pdHlcbiAgLy8gdmFsaWRhdGlvbiB0byBwcmV2ZW50IHR5cGUgZXJyb3JzLlxuXG4gIHZhciB2YWxpZGF0ZVN0cmlwZSA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaXBlKG1heWJlU3RyaXBlKSB7XG4gICAgaWYgKG1heWJlU3RyaXBlID09PSBudWxsIHx8IGlzU3RyaXBlKG1heWJlU3RyaXBlKSkge1xuICAgICAgcmV0dXJuIG1heWJlU3RyaXBlO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1NUUklQRV9FUlJPUik7XG4gIH07XG5cbiAgdmFyIHBhcnNlU3RyaXBlUHJvcCA9IGZ1bmN0aW9uIHBhcnNlU3RyaXBlUHJvcChyYXcpIHtcbiAgICBpZiAoaXNQcm9taXNlKHJhdykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhZzogJ2FzeW5jJyxcbiAgICAgICAgc3RyaXBlUHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKHJhdykudGhlbih2YWxpZGF0ZVN0cmlwZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHN0cmlwZSA9IHZhbGlkYXRlU3RyaXBlKHJhdyk7XG5cbiAgICBpZiAoc3RyaXBlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6ICdlbXB0eSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZzogJ3N5bmMnLFxuICAgICAgc3RyaXBlOiBzdHJpcGVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBFbGVtZW50c0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuICBFbGVtZW50c0NvbnRleHQuZGlzcGxheU5hbWUgPSAnRWxlbWVudHNDb250ZXh0JztcbiAgdmFyIHBhcnNlRWxlbWVudHNDb250ZXh0ID0gZnVuY3Rpb24gcGFyc2VFbGVtZW50c0NvbnRleHQoY3R4LCB1c2VDYXNlKSB7XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIEVsZW1lbnRzIGNvbnRleHQ7IFlvdSBuZWVkIHRvIHdyYXAgdGhlIHBhcnQgb2YgeW91ciBhcHAgdGhhdCBcIi5jb25jYXQodXNlQ2FzZSwgXCIgaW4gYW4gPEVsZW1lbnRzPiBwcm92aWRlci5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBjdHg7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgYEVsZW1lbnRzYCBwcm92aWRlciBhbGxvd3MgeW91IHRvIHVzZSBbRWxlbWVudCBjb21wb25lbnRzXShodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzKSBhbmQgYWNjZXNzIHRoZSBbU3RyaXBlIG9iamVjdF0oaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvaW5pdGlhbGl6aW5nKSBpbiBhbnkgbmVzdGVkIGNvbXBvbmVudC5cbiAgICogUmVuZGVyIGFuIGBFbGVtZW50c2AgcHJvdmlkZXIgYXQgdGhlIHJvb3Qgb2YgeW91ciBSZWFjdCBhcHAgc28gdGhhdCBpdCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSB5b3UgbmVlZCBpdC5cbiAgICpcbiAgICogVG8gdXNlIHRoZSBgRWxlbWVudHNgIHByb3ZpZGVyLCBjYWxsIGBsb2FkU3RyaXBlYCBmcm9tIGBAc3RyaXBlL3N0cmlwZS1qc2Agd2l0aCB5b3VyIHB1Ymxpc2hhYmxlIGtleS5cbiAgICogVGhlIGBsb2FkU3RyaXBlYCBmdW5jdGlvbiB3aWxsIGFzeW5jaHJvbm91c2x5IGxvYWQgdGhlIFN0cmlwZS5qcyBzY3JpcHQgYW5kIGluaXRpYWxpemUgYSBgU3RyaXBlYCBvYmplY3QuXG4gICAqIFBhc3MgdGhlIHJldHVybmVkIGBQcm9taXNlYCB0byBgRWxlbWVudHNgLlxuICAgKlxuICAgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudHMtcHJvdmlkZXJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gZnVuY3Rpb24gRWxlbWVudHMoX3JlZikge1xuICAgIHZhciByYXdTdHJpcGVQcm9wID0gX3JlZi5zdHJpcGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICAgIHZhciBfZmluYWwgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gICAgdmFyIGlzTW91bnRlZCA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICB2YXIgcGFyc2VkID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VTdHJpcGVQcm9wKHJhd1N0cmlwZVByb3ApO1xuICAgIH0sIFtyYXdTdHJpcGVQcm9wXSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RyaXBlOiBudWxsLFxuICAgICAgICBlbGVtZW50czogbnVsbFxuICAgICAgfTtcbiAgICB9KSxcbiAgICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICAgIGN0eCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICAgIHNldENvbnRleHQgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gICAgdmFyIHByZXZTdHJpcGUgPSB1c2VQcmV2aW91cyhyYXdTdHJpcGVQcm9wKTtcbiAgICB2YXIgcHJldk9wdGlvbnMgPSB1c2VQcmV2aW91cyhvcHRpb25zKTtcblxuICAgIGlmIChwcmV2U3RyaXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAocHJldlN0cmlwZSAhPT0gcmF3U3RyaXBlUHJvcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIHByb3AgY2hhbmdlIG9uIEVsZW1lbnRzOiBZb3UgY2Fubm90IGNoYW5nZSB0aGUgYHN0cmlwZWAgcHJvcCBhZnRlciBzZXR0aW5nIGl0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRXF1YWwob3B0aW9ucywgcHJldk9wdGlvbnMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQgcHJvcCBjaGFuZ2Ugb24gRWxlbWVudHM6IFlvdSBjYW5ub3QgY2hhbmdlIHRoZSBgb3B0aW9uc2AgcHJvcCBhZnRlciBzZXR0aW5nIHRoZSBgc3RyaXBlYCBwcm9wLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghX2ZpbmFsLmN1cnJlbnQpIHtcbiAgICAgIGlmIChwYXJzZWQudGFnID09PSAnc3luYycpIHtcbiAgICAgICAgX2ZpbmFsLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDb250ZXh0KHtcbiAgICAgICAgICBzdHJpcGU6IHBhcnNlZC5zdHJpcGUsXG4gICAgICAgICAgZWxlbWVudHM6IHBhcnNlZC5zdHJpcGUuZWxlbWVudHMob3B0aW9ucylcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJzZWQudGFnID09PSAnYXN5bmMnKSB7XG4gICAgICAgIF9maW5hbC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcGFyc2VkLnN0cmlwZVByb21pc2UudGhlbihmdW5jdGlvbiAoc3RyaXBlKSB7XG4gICAgICAgICAgaWYgKHN0cmlwZSAmJiBpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgRWxlbWVudHMgY29udGV4dCBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIG1vdW50ZWRcbiAgICAgICAgICAgIC8vIGFuZCBzdHJpcGUgaXMgbm90IG51bGwuIFdlIGFsbG93IHN0cmlwZSB0byBiZSBudWxsIHRvIG1ha2VcbiAgICAgICAgICAgIC8vIGhhbmRsaW5nIFNTUiBlYXNpZXIuXG4gICAgICAgICAgICBzZXRDb250ZXh0KHtcbiAgICAgICAgICAgICAgc3RyaXBlOiBzdHJpcGUsXG4gICAgICAgICAgICAgIGVsZW1lbnRzOiBzdHJpcGUuZWxlbWVudHMob3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFueVN0cmlwZSA9IGN0eC5zdHJpcGU7XG5cbiAgICAgIGlmICghYW55U3RyaXBlIHx8ICFhbnlTdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFueVN0cmlwZS5fcmVnaXN0ZXJXcmFwcGVyKHtcbiAgICAgICAgbmFtZTogJ3JlYWN0LXN0cmlwZS1qcycsXG4gICAgICAgIHZlcnNpb246IFwiMS4xLjJcIlxuICAgICAgfSk7XG4gICAgfSwgW2N0eC5zdHJpcGVdKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50c0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjdHhcbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG4gIEVsZW1lbnRzLnByb3BUeXBlcyA9IHtcbiAgICBzdHJpcGU6IHByb3BUeXBlcy5hbnksXG4gICAgb3B0aW9uczogcHJvcFR5cGVzLm9iamVjdFxuICB9O1xuICB2YXIgdXNlRWxlbWVudHNDb250ZXh0V2l0aFVzZUNhc2UgPSBmdW5jdGlvbiB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZSh1c2VDYXNlTWVzc2FnZSkge1xuICAgIHZhciBjdHggPSBSZWFjdC51c2VDb250ZXh0KEVsZW1lbnRzQ29udGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRWxlbWVudHNDb250ZXh0KGN0eCwgdXNlQ2FzZU1lc3NhZ2UpO1xuICB9O1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I3VzZWVsZW1lbnRzLWhvb2tcbiAgICovXG5cbiAgdmFyIHVzZUVsZW1lbnRzID0gZnVuY3Rpb24gdXNlRWxlbWVudHMoKSB7XG4gICAgdmFyIF91c2VFbGVtZW50c0NvbnRleHRXaSA9IHVzZUVsZW1lbnRzQ29udGV4dFdpdGhVc2VDYXNlKCdjYWxscyB1c2VFbGVtZW50cygpJyksXG4gICAgICAgIGVsZW1lbnRzID0gX3VzZUVsZW1lbnRzQ29udGV4dFdpLmVsZW1lbnRzO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9O1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I3VzZXN0cmlwZS1ob29rXG4gICAqL1xuXG4gIHZhciB1c2VTdHJpcGUgPSBmdW5jdGlvbiB1c2VTdHJpcGUoKSB7XG4gICAgdmFyIF91c2VFbGVtZW50c0NvbnRleHRXaTIgPSB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZSgnY2FsbHMgdXNlU3RyaXBlKCknKSxcbiAgICAgICAgc3RyaXBlID0gX3VzZUVsZW1lbnRzQ29udGV4dFdpMi5zdHJpcGU7XG5cbiAgICByZXR1cm4gc3RyaXBlO1xuICB9O1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnRzLWNvbnN1bWVyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50c0NvbnN1bWVyID0gZnVuY3Rpb24gRWxlbWVudHNDb25zdW1lcihfcmVmMikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuICAgIHZhciBjdHggPSB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZSgnbW91bnRzIDxFbGVtZW50c0NvbnN1bWVyPicpOyAvLyBBc3NlcnQgdG8gc2F0aXNmeSB0aGUgYnVzdGVkIFJlYWN0LkZDIHJldHVybiB0eXBlIChpdCBzaG91bGQgYmUgUmVhY3ROb2RlKVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuKGN0eCk7XG4gIH07XG4gIEVsZW1lbnRzQ29uc3VtZXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgdmFyIHVzZUNhbGxiYWNrUmVmZXJlbmNlID0gZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWZlcmVuY2UoY2IpIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKGNiKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgcmVmLmN1cnJlbnQgPSBjYjtcbiAgICB9LCBbY2JdKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmFwcGx5KHJlZiwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBleHRyYWN0VXBkYXRlYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiBleHRyYWN0VXBkYXRlYWJsZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICghaXNVbmtub3duT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIF8gPSBvcHRpb25zLnBheW1lbnRSZXF1ZXN0LFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcInBheW1lbnRSZXF1ZXN0XCJdKTtcblxuICAgIHJldHVybiByZXN0O1xuICB9O1xuXG4gIHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4gIHZhciBjYXBpdGFsaXplZCA9IGZ1bmN0aW9uIGNhcGl0YWxpemVkKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUVsZW1lbnRDb21wb25lbnQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50Q29tcG9uZW50KHR5cGUsIGlzU2VydmVyKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gXCJcIi5jb25jYXQoY2FwaXRhbGl6ZWQodHlwZSksIFwiRWxlbWVudFwiKTtcblxuICAgIHZhciBDbGllbnRFbGVtZW50ID0gZnVuY3Rpb24gQ2xpZW50RWxlbWVudChfcmVmKSB7XG4gICAgICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucyxcbiAgICAgICAgICBfcmVmJG9uQmx1ciA9IF9yZWYub25CbHVyLFxuICAgICAgICAgIG9uQmx1ciA9IF9yZWYkb25CbHVyID09PSB2b2lkIDAgPyBub29wIDogX3JlZiRvbkJsdXIsXG4gICAgICAgICAgX3JlZiRvbkZvY3VzID0gX3JlZi5vbkZvY3VzLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcmVmJG9uRm9jdXMgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uRm9jdXMsXG4gICAgICAgICAgX3JlZiRvblJlYWR5ID0gX3JlZi5vblJlYWR5LFxuICAgICAgICAgIG9uUmVhZHkgPSBfcmVmJG9uUmVhZHkgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uUmVhZHksXG4gICAgICAgICAgX3JlZiRvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcmVmJG9uQ2hhbmdlID09PSB2b2lkIDAgPyBub29wIDogX3JlZiRvbkNoYW5nZSxcbiAgICAgICAgICBfcmVmJG9uRXNjYXBlID0gX3JlZi5vbkVzY2FwZSxcbiAgICAgICAgICBvbkVzY2FwZSA9IF9yZWYkb25Fc2NhcGUgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uRXNjYXBlLFxuICAgICAgICAgIF9yZWYkb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgICAgICBvbkNsaWNrID0gX3JlZiRvbkNsaWNrID09PSB2b2lkIDAgPyBub29wIDogX3JlZiRvbkNsaWNrO1xuXG4gICAgICB2YXIgX3VzZUVsZW1lbnRzQ29udGV4dFdpID0gdXNlRWxlbWVudHNDb250ZXh0V2l0aFVzZUNhc2UoXCJtb3VudHMgPFwiLmNvbmNhdChkaXNwbGF5TmFtZSwgXCI+XCIpKSxcbiAgICAgICAgICBlbGVtZW50cyA9IF91c2VFbGVtZW50c0NvbnRleHRXaS5lbGVtZW50cztcblxuICAgICAgdmFyIGVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgICB2YXIgZG9tTm9kZSA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICAgIHZhciBjYWxsT25SZWFkeSA9IHVzZUNhbGxiYWNrUmVmZXJlbmNlKG9uUmVhZHkpO1xuICAgICAgdmFyIGNhbGxPbkJsdXIgPSB1c2VDYWxsYmFja1JlZmVyZW5jZShvbkJsdXIpO1xuICAgICAgdmFyIGNhbGxPbkZvY3VzID0gdXNlQ2FsbGJhY2tSZWZlcmVuY2Uob25Gb2N1cyk7XG4gICAgICB2YXIgY2FsbE9uQ2xpY2sgPSB1c2VDYWxsYmFja1JlZmVyZW5jZShvbkNsaWNrKTtcbiAgICAgIHZhciBjYWxsT25DaGFuZ2UgPSB1c2VDYWxsYmFja1JlZmVyZW5jZShvbkNoYW5nZSk7XG4gICAgICB2YXIgY2FsbE9uRXNjYXBlID0gdXNlQ2FsbGJhY2tSZWZlcmVuY2Uob25Fc2NhcGUpO1xuICAgICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRSZWYuY3VycmVudCA9PSBudWxsICYmIGVsZW1lbnRzICYmIGRvbU5vZGUuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUodHlwZSwgb3B0aW9ucyk7XG4gICAgICAgICAgZWxlbWVudFJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICBlbGVtZW50Lm1vdW50KGRvbU5vZGUuY3VycmVudCk7XG4gICAgICAgICAgZWxlbWVudC5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbE9uUmVhZHkoZWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWxlbWVudC5vbignY2hhbmdlJywgY2FsbE9uQ2hhbmdlKTtcbiAgICAgICAgICBlbGVtZW50Lm9uKCdibHVyJywgY2FsbE9uQmx1cik7XG4gICAgICAgICAgZWxlbWVudC5vbignZm9jdXMnLCBjYWxsT25Gb2N1cyk7XG4gICAgICAgICAgZWxlbWVudC5vbignZXNjYXBlJywgY2FsbE9uRXNjYXBlKTsgLy8gVXNlcnMgY2FuIHBhc3MgYW4gYW4gb25DbGljayBwcm9wIG9uIGFueSBFbGVtZW50IGNvbXBvbmVudFxuICAgICAgICAgIC8vIGp1c3QgYXMgdGhleSBjb3VsZCBsaXN0ZW4gZm9yIHRoZSBgY2xpY2tgIGV2ZW50IG9uIGFueSBFbGVtZW50LFxuICAgICAgICAgIC8vIGJ1dCBvbmx5IHRoZSBQYXltZW50UmVxdWVzdEJ1dHRvbiB3aWxsIGFjdHVhbGx5IHRyaWdnZXIgdGhlIGV2ZW50LlxuXG4gICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBjYWxsT25DbGljayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHByZXZPcHRpb25zID0gUmVhY3QudXNlUmVmKG9wdGlvbnMpO1xuICAgICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByZXZPcHRpb25zLmN1cnJlbnQgJiYgcHJldk9wdGlvbnMuY3VycmVudC5wYXltZW50UmVxdWVzdCAhPT0gb3B0aW9ucy5wYXltZW50UmVxdWVzdCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQgcHJvcCBjaGFuZ2U6IG9wdGlvbnMucGF5bWVudFJlcXVlc3QgaXMgbm90IGEgY3VzdG9taXphYmxlIHByb3BlcnR5LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVwZGF0ZWFibGVPcHRpb25zID0gZXh0cmFjdFVwZGF0ZWFibGVPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVhYmxlT3B0aW9ucykubGVuZ3RoICE9PSAwICYmICFpc0VxdWFsKHVwZGF0ZWFibGVPcHRpb25zLCBleHRyYWN0VXBkYXRlYWJsZU9wdGlvbnMocHJldk9wdGlvbnMuY3VycmVudCkpKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgZWxlbWVudFJlZi5jdXJyZW50LnVwZGF0ZSh1cGRhdGVhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgICBwcmV2T3B0aW9ucy5jdXJyZW50ID0gb3B0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFtvcHRpb25zXSk7XG4gICAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChlbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IGRvbU5vZGVcbiAgICAgIH0pO1xuICAgIH07IC8vIE9ubHkgcmVuZGVyIHRoZSBFbGVtZW50IHdyYXBwZXIgaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG5cblxuICAgIHZhciBTZXJ2ZXJFbGVtZW50ID0gZnVuY3Rpb24gU2VydmVyRWxlbWVudChwcm9wcykge1xuICAgICAgLy8gVmFsaWRhdGUgdGhhdCB3ZSBhcmUgaW4gdGhlIHJpZ2h0IGNvbnRleHQgYnkgY2FsbGluZyB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZS5cbiAgICAgIHVzZUVsZW1lbnRzQ29udGV4dFdpdGhVc2VDYXNlKFwibW91bnRzIDxcIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiPlwiKSk7XG4gICAgICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgRWxlbWVudCA9IGlzU2VydmVyID8gU2VydmVyRWxlbWVudCA6IENsaWVudEVsZW1lbnQ7XG4gICAgRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gICAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uQmx1cjogcHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvbkZvY3VzOiBwcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uUmVhZHk6IHByb3BUeXBlcy5mdW5jLFxuICAgICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvcHRpb25zOiBwcm9wVHlwZXMub2JqZWN0XG4gICAgfTtcbiAgICBFbGVtZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgRWxlbWVudC5fX2VsZW1lbnRUeXBlID0gdHlwZTtcbiAgICByZXR1cm4gRWxlbWVudDtcbiAgfTtcblxuICB2YXIgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbiAgLyoqXG4gICAqIFJlcXVpcmVzIGJldGEgYWNjZXNzOlxuICAgKiBDb250YWN0IFtTdHJpcGUgc3VwcG9ydF0oaHR0cHM6Ly9zdXBwb3J0LnN0cmlwZS5jb20vKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgQXVCYW5rQWNjb3VudEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdhdUJhbmtBY2NvdW50JywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgQ2FyZEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdjYXJkJywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgQ2FyZE51bWJlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdjYXJkTnVtYmVyJywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgQ2FyZEV4cGlyeUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdjYXJkRXhwaXJ5JywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgQ2FyZEN2Y0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdjYXJkQ3ZjJywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgRnB4QmFua0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdmcHhCYW5rJywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgSWJhbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdpYmFuJywgaXNTZXJ2ZXIpO1xuICAvKipcbiAgICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuICAgKi9cblxuICB2YXIgSWRlYWxCYW5rRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2lkZWFsQmFuaycsIGlzU2VydmVyKTtcbiAgLyoqXG4gICAqIEBkb2NzIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCNlbGVtZW50LWNvbXBvbmVudHNcbiAgICovXG5cbiAgdmFyIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ3BheW1lbnRSZXF1ZXN0QnV0dG9uJywgaXNTZXJ2ZXIpO1xuXG4gIGV4cG9ydHMuQXVCYW5rQWNjb3VudEVsZW1lbnQgPSBBdUJhbmtBY2NvdW50RWxlbWVudDtcbiAgZXhwb3J0cy5DYXJkQ3ZjRWxlbWVudCA9IENhcmRDdmNFbGVtZW50O1xuICBleHBvcnRzLkNhcmRFbGVtZW50ID0gQ2FyZEVsZW1lbnQ7XG4gIGV4cG9ydHMuQ2FyZEV4cGlyeUVsZW1lbnQgPSBDYXJkRXhwaXJ5RWxlbWVudDtcbiAgZXhwb3J0cy5DYXJkTnVtYmVyRWxlbWVudCA9IENhcmROdW1iZXJFbGVtZW50O1xuICBleHBvcnRzLkVsZW1lbnRzID0gRWxlbWVudHM7XG4gIGV4cG9ydHMuRWxlbWVudHNDb25zdW1lciA9IEVsZW1lbnRzQ29uc3VtZXI7XG4gIGV4cG9ydHMuRnB4QmFua0VsZW1lbnQgPSBGcHhCYW5rRWxlbWVudDtcbiAgZXhwb3J0cy5JYmFuRWxlbWVudCA9IEliYW5FbGVtZW50O1xuICBleHBvcnRzLklkZWFsQmFua0VsZW1lbnQgPSBJZGVhbEJhbmtFbGVtZW50O1xuICBleHBvcnRzLlBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudDtcbiAgZXhwb3J0cy51c2VFbGVtZW50cyA9IHVzZUVsZW1lbnRzO1xuICBleHBvcnRzLnVzZVN0cmlwZSA9IHVzZVN0cmlwZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwidmFyIFYzX1VSTCA9ICdodHRwczovL2pzLnN0cmlwZS5jb20vdjMnO1xudmFyIFYzX1VSTF9SRUdFWCA9IC9eaHR0cHM6XFwvXFwvanNcXC5zdHJpcGVcXC5jb21cXC92M1xcLz8oXFw/LiopPyQvO1xudmFyIEVYSVNUSU5HX1NDUklQVF9NRVNTQUdFID0gJ2xvYWRTdHJpcGUuc2V0TG9hZFBhcmFtZXRlcnMgd2FzIGNhbGxlZCBidXQgYW4gZXhpc3RpbmcgU3RyaXBlLmpzIHNjcmlwdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgZG9jdW1lbnQ7IGV4aXN0aW5nIHNjcmlwdCBwYXJhbWV0ZXJzIHdpbGwgYmUgdXNlZCc7XG52YXIgZmluZFNjcmlwdCA9IGZ1bmN0aW9uIGZpbmRTY3JpcHQoKSB7XG4gIHZhciBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtzcmNePVxcXCJcIi5jb25jYXQoVjNfVVJMLCBcIlxcXCJdXCIpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcblxuICAgIGlmICghVjNfVVJMX1JFR0VYLnRlc3Qoc2NyaXB0LnNyYykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JpcHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBpbmplY3RTY3JpcHQgPSBmdW5jdGlvbiBpbmplY3RTY3JpcHQocGFyYW1zKSB7XG4gIHZhciBxdWVyeVN0cmluZyA9IHBhcmFtcyAmJiAhcGFyYW1zLmFkdmFuY2VkRnJhdWRTaWduYWxzID8gJz9hZHZhbmNlZEZyYXVkU2lnbmFscz1mYWxzZScgOiAnJztcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gXCJcIi5jb25jYXQoVjNfVVJMKS5jb25jYXQocXVlcnlTdHJpbmcpO1xuICB2YXIgaGVhZE9yQm9keSA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIWhlYWRPckJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGRvY3VtZW50LmJvZHkgbm90IHRvIGJlIG51bGwuIFN0cmlwZS5qcyByZXF1aXJlcyBhIDxib2R5PiBlbGVtZW50LicpO1xuICB9XG5cbiAgaGVhZE9yQm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICByZXR1cm4gc2NyaXB0O1xufTtcblxudmFyIHJlZ2lzdGVyV3JhcHBlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyV3JhcHBlcihzdHJpcGUsIHN0YXJ0VGltZSkge1xuICBpZiAoIXN0cmlwZSB8fCAhc3RyaXBlLl9yZWdpc3RlcldyYXBwZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcih7XG4gICAgbmFtZTogJ3N0cmlwZS1qcycsXG4gICAgdmVyc2lvbjogXCIxLjExLjBcIixcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICB9KTtcbn07XG5cbnZhciBzdHJpcGVQcm9taXNlID0gbnVsbDtcbnZhciBsb2FkU2NyaXB0ID0gZnVuY3Rpb24gbG9hZFNjcmlwdChwYXJhbXMpIHtcbiAgLy8gRW5zdXJlIHRoYXQgd2Ugb25seSBhdHRlbXB0IHRvIGxvYWQgU3RyaXBlLmpzIGF0IG1vc3Qgb25jZVxuICBpZiAoc3RyaXBlUHJvbWlzZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzdHJpcGVQcm9taXNlO1xuICB9XG5cbiAgc3RyaXBlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJlc29sdmUgdG8gbnVsbCB3aGVuIGltcG9ydGVkIHNlcnZlciBzaWRlLiBUaGlzIG1ha2VzIHRoZSBtb2R1bGVcbiAgICAgIC8vIHNhZmUgdG8gaW1wb3J0IGluIGFuIGlzb21vcnBoaWMgY29kZSBiYXNlLlxuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlN0cmlwZSAmJiBwYXJhbXMpIHtcbiAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TdHJpcGUpIHtcbiAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzY3JpcHQgPSBmaW5kU2NyaXB0KCk7XG5cbiAgICAgIGlmIChzY3JpcHQgJiYgcGFyYW1zKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgICB9IGVsc2UgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gaW5qZWN0U2NyaXB0KHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LlN0cmlwZSkge1xuICAgICAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU3RyaXBlLmpzIG5vdCBhdmFpbGFibGUnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBTdHJpcGUuanMnKSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbn07XG52YXIgaW5pdFN0cmlwZSA9IGZ1bmN0aW9uIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSkge1xuICBpZiAobWF5YmVTdHJpcGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdHJpcGUgPSBtYXliZVN0cmlwZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICByZWdpc3RlcldyYXBwZXIoc3RyaXBlLCBzdGFydFRpbWUpO1xuICByZXR1cm4gc3RyaXBlO1xufTtcblxuLy8gb3duIHNjcmlwdCBpbmplY3Rpb24uXG5cbnZhciBzdHJpcGVQcm9taXNlJDEgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGxvYWRTY3JpcHQobnVsbCk7XG59KTtcbnZhciBsb2FkQ2FsbGVkID0gZmFsc2U7XG5zdHJpcGVQcm9taXNlJDFbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gIGlmICghbG9hZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihlcnIpO1xuICB9XG59KTtcbnZhciBsb2FkU3RyaXBlID0gZnVuY3Rpb24gbG9hZFN0cmlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGxvYWRDYWxsZWQgPSB0cnVlO1xuICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHN0cmlwZVByb21pc2UkMS50aGVuKGZ1bmN0aW9uIChtYXliZVN0cmlwZSkge1xuICAgIHJldHVybiBpbml0U3RyaXBlKG1heWJlU3RyaXBlLCBhcmdzLCBzdGFydFRpbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTdHJpcGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=