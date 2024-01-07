import * as Z from "react";
import En, { useState as Re, useCallback as Se, forwardRef as Hi, useContext as ji, useLayoutEffect as ks, useRef as Be, createContext as Vs, useMemo as ct, Component as Ds, Fragment as ir, useEffect as wn } from "react";
import { createPortal as Bs } from "react-dom";
function Ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var or = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Ms() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = En, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, p = "@@iterator";
    function b(d) {
      if (d === null || typeof d != "object")
        return null;
      var A = y && d[y] || d[p];
      return typeof A == "function" ? A : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(d) {
      {
        for (var A = arguments.length, O = new Array(A > 1 ? A - 1 : 0), Y = 1; Y < A; Y++)
          O[Y - 1] = arguments[Y];
        x("error", d, O);
      }
    }
    function x(d, A, O) {
      {
        var Y = v.ReactDebugCurrentFrame, ae = Y.getStackAddendum();
        ae !== "" && (A += "%s", O = O.concat([ae]));
        var fe = O.map(function(ee) {
          return String(ee);
        });
        fe.unshift("Warning: " + A), Function.prototype.apply.call(console[d], console, fe);
      }
    }
    var E = !1, h = !1, P = !1, T = !1, G = !1, J;
    J = Symbol.for("react.module.reference");
    function H(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === a || d === i || G || d === n || d === c || d === l || T || d === g || E || h || P || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === f || d.$$typeof === o || d.$$typeof === u || d.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === J || d.getModuleId !== void 0));
    }
    function k(d, A, O) {
      var Y = d.displayName;
      if (Y)
        return Y;
      var ae = A.displayName || A.name || "";
      return ae !== "" ? O + "(" + ae + ")" : O;
    }
    function q(d) {
      return d.displayName || "Context";
    }
    function te(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            var A = d;
            return q(A) + ".Consumer";
          case o:
            var O = d;
            return q(O._context) + ".Provider";
          case s:
            return k(d, d.render, "ForwardRef");
          case f:
            var Y = d.displayName || null;
            return Y !== null ? Y : te(d.type) || "Memo";
          case m: {
            var ae = d, fe = ae._payload, ee = ae._init;
            try {
              return te(ee(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, re = 0, z, ge, ne, Ie, C, S, N;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function W() {
      {
        if (re === 0) {
          z = console.log, ge = console.info, ne = console.warn, Ie = console.error, C = console.group, S = console.groupCollapsed, N = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        re++;
      }
    }
    function _() {
      {
        if (re--, re === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, d, {
              value: z
            }),
            info: le({}, d, {
              value: ge
            }),
            warn: le({}, d, {
              value: ne
            }),
            error: le({}, d, {
              value: Ie
            }),
            group: le({}, d, {
              value: C
            }),
            groupCollapsed: le({}, d, {
              value: S
            }),
            groupEnd: le({}, d, {
              value: N
            })
          });
        }
        re < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = v.ReactCurrentDispatcher, X;
    function j(d, A, O) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (ae) {
            var Y = ae.stack.trim().match(/\n( *(at )?)/);
            X = Y && Y[1] || "";
          }
        return `
` + X + d;
      }
    }
    var $ = !1, U;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ce();
    }
    function w(d, A) {
      if (!d || $)
        return "";
      {
        var O = U.get(d);
        if (O !== void 0)
          return O;
      }
      var Y;
      $ = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = D.current, D.current = null, W();
      try {
        if (A) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Ze) {
              Y = Ze;
            }
            Reflect.construct(d, [], ee);
          } else {
            try {
              ee.call();
            } catch (Ze) {
              Y = Ze;
            }
            d.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Y = Ze;
          }
          d();
        }
      } catch (Ze) {
        if (Ze && Y && typeof Ze.stack == "string") {
          for (var K = Ze.stack.split(`
`), we = Y.stack.split(`
`), ve = K.length - 1, he = we.length - 1; ve >= 1 && he >= 0 && K[ve] !== we[he]; )
            he--;
          for (; ve >= 1 && he >= 0; ve--, he--)
            if (K[ve] !== we[he]) {
              if (ve !== 1 || he !== 1)
                do
                  if (ve--, he--, he < 0 || K[ve] !== we[he]) {
                    var Fe = `
` + K[ve].replace(" at new ", " at ");
                    return d.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", d.displayName)), typeof d == "function" && U.set(d, Fe), Fe;
                  }
                while (ve >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        $ = !1, D.current = fe, _(), Error.prepareStackTrace = ae;
      }
      var st = d ? d.displayName || d.name : "", Ca = st ? j(st) : "";
      return typeof d == "function" && U.set(d, Ca), Ca;
    }
    function Oe(d, A, O) {
      return w(d, !1);
    }
    function Le(d) {
      var A = d.prototype;
      return !!(A && A.isReactComponent);
    }
    function Xe(d, A, O) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return w(d, Le(d));
      if (typeof d == "string")
        return j(d);
      switch (d) {
        case c:
          return j("Suspense");
        case l:
          return j("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            return Oe(d.render);
          case f:
            return Xe(d.type, A, O);
          case m: {
            var Y = d, ae = Y._payload, fe = Y._init;
            try {
              return Xe(fe(ae), A, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Xt = Object.prototype.hasOwnProperty, ca = {}, la = v.ReactDebugCurrentFrame;
    function Zt(d) {
      if (d) {
        var A = d._owner, O = Xe(d.type, d._source, A ? A.type : null);
        la.setExtraStackFrame(O);
      } else
        la.setExtraStackFrame(null);
    }
    function gs(d, A, O, Y, ae) {
      {
        var fe = Function.call.bind(Xt);
        for (var ee in d)
          if (fe(d, ee)) {
            var K = void 0;
            try {
              if (typeof d[ee] != "function") {
                var we = Error((Y || "React class") + ": " + O + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              K = d[ee](A, ee, Y, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              K = ve;
            }
            K && !(K instanceof Error) && (Zt(ae), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", O, ee, typeof K), Zt(null)), K instanceof Error && !(K.message in ca) && (ca[K.message] = !0, Zt(ae), I("Failed %s type: %s", O, K.message), Zt(null));
          }
      }
    }
    var ps = Array.isArray;
    function Vn(d) {
      return ps(d);
    }
    function bs(d) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, O = A && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return O;
      }
    }
    function vs(d) {
      try {
        return fa(d), !1;
      } catch {
        return !0;
      }
    }
    function fa(d) {
      return "" + d;
    }
    function da(d) {
      if (vs(d))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bs(d)), fa(d);
    }
    var yt = v.ReactCurrentOwner, hs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ma, ga, Dn;
    Dn = {};
    function ys(d) {
      if (Xt.call(d, "ref")) {
        var A = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Is(d) {
      if (Xt.call(d, "key")) {
        var A = Object.getOwnPropertyDescriptor(d, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Cs(d, A) {
      if (typeof d.ref == "string" && yt.current && A && yt.current.stateNode !== A) {
        var O = te(yt.current.type);
        Dn[O] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(yt.current.type), d.ref), Dn[O] = !0);
      }
    }
    function As(d, A) {
      {
        var O = function() {
          ma || (ma = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function xs(d, A) {
      {
        var O = function() {
          ga || (ga = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Es = function(d, A, O, Y, ae, fe, ee) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: A,
        ref: O,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function ws(d, A, O, Y, ae) {
      {
        var fe, ee = {}, K = null, we = null;
        O !== void 0 && (da(O), K = "" + O), Is(A) && (da(A.key), K = "" + A.key), ys(A) && (we = A.ref, Cs(A, ae));
        for (fe in A)
          Xt.call(A, fe) && !hs.hasOwnProperty(fe) && (ee[fe] = A[fe]);
        if (d && d.defaultProps) {
          var ve = d.defaultProps;
          for (fe in ve)
            ee[fe] === void 0 && (ee[fe] = ve[fe]);
        }
        if (K || we) {
          var he = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          K && As(ee, he), we && xs(ee, he);
        }
        return Es(d, K, we, ae, Y, yt.current, ee);
      }
    }
    var Bn = v.ReactCurrentOwner, pa = v.ReactDebugCurrentFrame;
    function ot(d) {
      if (d) {
        var A = d._owner, O = Xe(d.type, d._source, A ? A.type : null);
        pa.setExtraStackFrame(O);
      } else
        pa.setExtraStackFrame(null);
    }
    var Wn;
    Wn = !1;
    function Mn(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function ba() {
      {
        if (Bn.current) {
          var d = te(Bn.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Ss(d) {
      {
        if (d !== void 0) {
          var A = d.fileName.replace(/^.*[\\\/]/, ""), O = d.lineNumber;
          return `

Check your code at ` + A + ":" + O + ".";
        }
        return "";
      }
    }
    var va = {};
    function Os(d) {
      {
        var A = ba();
        if (!A) {
          var O = typeof d == "string" ? d : d.displayName || d.name;
          O && (A = `

Check the top-level render call using <` + O + ">.");
        }
        return A;
      }
    }
    function ha(d, A) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var O = Os(A);
        if (va[O])
          return;
        va[O] = !0;
        var Y = "";
        d && d._owner && d._owner !== Bn.current && (Y = " It was passed a child from " + te(d._owner.type) + "."), ot(d), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, Y), ot(null);
      }
    }
    function ya(d, A) {
      {
        if (typeof d != "object")
          return;
        if (Vn(d))
          for (var O = 0; O < d.length; O++) {
            var Y = d[O];
            Mn(Y) && ha(Y, A);
          }
        else if (Mn(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ae = b(d);
          if (typeof ae == "function" && ae !== d.entries)
            for (var fe = ae.call(d), ee; !(ee = fe.next()).done; )
              Mn(ee.value) && ha(ee.value, A);
        }
      }
    }
    function Ts(d) {
      {
        var A = d.type;
        if (A == null || typeof A == "string")
          return;
        var O;
        if (typeof A == "function")
          O = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === f))
          O = A.propTypes;
        else
          return;
        if (O) {
          var Y = te(A);
          gs(O, d.props, "prop", Y, d);
        } else if (A.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var ae = te(A);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rs(d) {
      {
        for (var A = Object.keys(d.props), O = 0; O < A.length; O++) {
          var Y = A[O];
          if (Y !== "children" && Y !== "key") {
            ot(d), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), ot(null);
            break;
          }
        }
        d.ref !== null && (ot(d), I("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function Ia(d, A, O, Y, ae, fe) {
      {
        var ee = H(d);
        if (!ee) {
          var K = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = Ss(ae);
          we ? K += we : K += ba();
          var ve;
          d === null ? ve = "null" : Vn(d) ? ve = "array" : d !== void 0 && d.$$typeof === t ? (ve = "<" + (te(d.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof d, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, K);
        }
        var he = ws(d, A, O, ae, fe);
        if (he == null)
          return he;
        if (ee) {
          var Fe = A.children;
          if (Fe !== void 0)
            if (Y)
              if (Vn(Fe)) {
                for (var st = 0; st < Fe.length; st++)
                  ya(Fe[st], d);
                Object.freeze && Object.freeze(Fe);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ya(Fe, d);
        }
        return d === a ? Rs(he) : Ts(he), he;
      }
    }
    function Ps(d, A, O) {
      return Ia(d, A, O, !0);
    }
    function Ns(d, A, O) {
      return Ia(d, A, O, !1);
    }
    var Fs = Ns, Gs = Ps;
    It.Fragment = a, It.jsx = Fs, It.jsxs = Gs;
  }()), It;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Ls() {
  if (xa)
    return Ct;
  xa = 1;
  var e = En, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l, f = {}, m = null, g = null;
    c !== void 0 && (m = "" + c), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (l in s)
      a.call(s, l) && !i.hasOwnProperty(l) && (f[l] = s[l]);
    if (u && u.defaultProps)
      for (l in s = u.defaultProps, s)
        f[l] === void 0 && (f[l] = s[l]);
    return { $$typeof: t, type: u, key: m, ref: g, props: f, _owner: n.current };
  }
  return Ct.Fragment = r, Ct.jsx = o, Ct.jsxs = o, Ct;
}
process.env.NODE_ENV === "production" ? or.exports = Ls() : or.exports = Ms();
var ie = or.exports;
function Ea(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ea(Object(r), !0).forEach(function(a) {
      Ae(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ea(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Xs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Zs(e, t, r) {
  return t && wa(e.prototype, t), r && wa(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ae(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Nr(e, t) {
  return js(e) || zs(e, t) || Yi(e, t) || Js();
}
function Bt(e) {
  return Hs(e) || Ys(e) || Yi(e) || _s();
}
function Hs(e) {
  if (Array.isArray(e))
    return sr(e);
}
function js(e) {
  if (Array.isArray(e))
    return e;
}
function Ys(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function zs(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, i = !1, o, u;
    try {
      for (r = r.call(e); !(n = (o = r.next()).done) && (a.push(o.value), !(t && a.length === t)); n = !0)
        ;
    } catch (s) {
      i = !0, u = s;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i)
          throw u;
      }
    }
    return a;
  }
}
function Yi(e, t) {
  if (e) {
    if (typeof e == "string")
      return sr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sr(e, t);
  }
}
function sr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function _s() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Js() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Sa = function() {
}, Fr = {}, zi = {}, _i = null, Ji = {
  mark: Sa,
  measure: Sa
};
try {
  typeof window < "u" && (Fr = window), typeof document < "u" && (zi = document), typeof MutationObserver < "u" && (_i = MutationObserver), typeof performance < "u" && (Ji = performance);
} catch {
}
var Us = Fr.navigator || {}, Oa = Us.userAgent, Ta = Oa === void 0 ? "" : Oa, Qe = Fr, me = zi, Ra = _i, Ht = Ji;
Qe.document;
var _e = !!me.documentElement && !!me.head && typeof me.addEventListener == "function" && typeof me.createElement == "function", Ui = ~Ta.indexOf("MSIE") || ~Ta.indexOf("Trident/"), jt, Yt, zt, _t, Jt, je = "___FONT_AWESOME___", ur = 16, $i = "fa", Qi = "svg-inline--fa", rt = "data-fa-i2svg", cr = "data-fa-pseudo-element", $s = "data-fa-pseudo-element-pending", Gr = "data-prefix", kr = "data-icon", Pa = "fontawesome-i2svg", Qs = "async", Ks = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ki = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), de = "classic", pe = "sharp", Vr = [de, pe];
function Wt(e) {
  return new Proxy(e, {
    get: function(r, a) {
      return a in r ? r[a] : r[de];
    }
  });
}
var Tt = Wt((jt = {}, Ae(jt, de, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Ae(jt, pe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), jt)), Rt = Wt((Yt = {}, Ae(Yt, de, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ae(Yt, pe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Yt)), Pt = Wt((zt = {}, Ae(zt, de, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ae(zt, pe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), zt)), qs = Wt((_t = {}, Ae(_t, de, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ae(_t, pe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), _t)), eu = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, qi = "fa-layers-text", tu = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, nu = Wt((Jt = {}, Ae(Jt, de, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ae(Jt, pe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Jt)), eo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ru = eo.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), au = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], et = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Nt = /* @__PURE__ */ new Set();
Object.keys(Rt[de]).map(Nt.add.bind(Nt));
Object.keys(Rt[pe]).map(Nt.add.bind(Nt));
var iu = [].concat(Vr, Bt(Nt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", et.GROUP, et.SWAP_OPACITY, et.PRIMARY, et.SECONDARY]).concat(eo.map(function(e) {
  return "".concat(e, "x");
})).concat(ru.map(function(e) {
  return "w-".concat(e);
})), St = Qe.FontAwesomeConfig || {};
function ou(e) {
  var t = me.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function su(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (me && typeof me.querySelector == "function") {
  var uu = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  uu.forEach(function(e) {
    var t = Nr(e, 2), r = t[0], a = t[1], n = su(ou(r));
    n != null && (St[a] = n);
  });
}
var to = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: $i,
  replacementClass: Qi,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
St.familyPrefix && (St.cssPrefix = St.familyPrefix);
var pt = R(R({}, to), St);
pt.autoReplaceSvg || (pt.observeMutations = !1);
var F = {};
Object.keys(to).forEach(function(e) {
  Object.defineProperty(F, e, {
    enumerable: !0,
    set: function(r) {
      pt[e] = r, Ot.forEach(function(a) {
        return a(F);
      });
    },
    get: function() {
      return pt[e];
    }
  });
});
Object.defineProperty(F, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    pt.cssPrefix = t, Ot.forEach(function(r) {
      return r(F);
    });
  },
  get: function() {
    return pt.cssPrefix;
  }
});
Qe.FontAwesomeConfig = F;
var Ot = [];
function cu(e) {
  return Ot.push(e), function() {
    Ot.splice(Ot.indexOf(e), 1);
  };
}
var Ue = ur, We = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function lu(e) {
  if (!(!e || !_e)) {
    var t = me.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = me.head.childNodes, a = null, n = r.length - 1; n > -1; n--) {
      var i = r[n], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
    }
    return me.head.insertBefore(t, a), e;
  }
}
var fu = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ft() {
  for (var e = 12, t = ""; e-- > 0; )
    t += fu[Math.random() * 62 | 0];
  return t;
}
function vt(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Dr(e) {
  return e.classList ? vt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function no(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function du(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(no(e[r]), '" ');
  }, "").trim();
}
function Sn(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function Br(e) {
  return e.size !== We.size || e.x !== We.x || e.y !== We.y || e.rotate !== We.rotate || e.flipX || e.flipY;
}
function mu(e) {
  var t = e.transform, r = e.containerWidth, a = e.iconWidth, n = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), u = "rotate(".concat(t.rotate, " 0 0)"), s = {
    transform: "".concat(i, " ").concat(o, " ").concat(u)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: n,
    inner: s,
    path: c
  };
}
function gu(e) {
  var t = e.transform, r = e.width, a = r === void 0 ? ur : r, n = e.height, i = n === void 0 ? ur : n, o = e.startCentered, u = o === void 0 ? !1 : o, s = "";
  return u && Ui ? s += "translate(".concat(t.x / Ue - a / 2, "em, ").concat(t.y / Ue - i / 2, "em) ") : u ? s += "translate(calc(-50% + ".concat(t.x / Ue, "em), calc(-50% + ").concat(t.y / Ue, "em)) ") : s += "translate(".concat(t.x / Ue, "em, ").concat(t.y / Ue, "em) "), s += "scale(".concat(t.size / Ue * (t.flipX ? -1 : 1), ", ").concat(t.size / Ue * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var pu = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function ro() {
  var e = $i, t = Qi, r = F.cssPrefix, a = F.replacementClass, n = pu;
  if (r !== e || a !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), u = new RegExp("\\.".concat(t), "g");
    n = n.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(u, ".".concat(a));
  }
  return n;
}
var Na = !1;
function Ln() {
  F.autoAddCss && !Na && (lu(ro()), Na = !0);
}
var bu = {
  mixout: function() {
    return {
      dom: {
        css: ro,
        insertCss: Ln
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ln();
      },
      beforeI2svg: function() {
        Ln();
      }
    };
  }
}, Ye = Qe || {};
Ye[je] || (Ye[je] = {});
Ye[je].styles || (Ye[je].styles = {});
Ye[je].hooks || (Ye[je].hooks = {});
Ye[je].shims || (Ye[je].shims = []);
var ke = Ye[je], ao = [], vu = function e() {
  me.removeEventListener("DOMContentLoaded", e), dn = 1, ao.map(function(t) {
    return t();
  });
}, dn = !1;
_e && (dn = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(me.readyState), dn || me.addEventListener("DOMContentLoaded", vu));
function hu(e) {
  _e && (dn ? setTimeout(e, 0) : ao.push(e));
}
function Mt(e) {
  var t = e.tag, r = e.attributes, a = r === void 0 ? {} : r, n = e.children, i = n === void 0 ? [] : n;
  return typeof e == "string" ? no(e) : "<".concat(t, " ").concat(du(a), ">").concat(i.map(Mt).join(""), "</").concat(t, ">");
}
function Fa(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var yu = function(t, r) {
  return function(a, n, i, o) {
    return t.call(r, a, n, i, o);
  };
}, Xn = function(t, r, a, n) {
  var i = Object.keys(t), o = i.length, u = n !== void 0 ? yu(r, n) : r, s, c, l;
  for (a === void 0 ? (s = 1, l = t[i[0]]) : (s = 0, l = a); s < o; s++)
    c = i[s], l = u(l, t[c], c, t);
  return l;
};
function Iu(e) {
  for (var t = [], r = 0, a = e.length; r < a; ) {
    var n = e.charCodeAt(r++);
    if (n >= 55296 && n <= 56319 && r < a) {
      var i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((n & 1023) << 10) + (i & 1023) + 65536) : (t.push(n), r--);
    } else
      t.push(n);
  }
  return t;
}
function lr(e) {
  var t = Iu(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Cu(e, t) {
  var r = e.length, a = e.charCodeAt(t), n;
  return a >= 55296 && a <= 56319 && r > t + 1 && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (a - 55296) * 1024 + n - 56320 + 65536 : a;
}
function Ga(e) {
  return Object.keys(e).reduce(function(t, r) {
    var a = e[r], n = !!a.icon;
    return n ? t[a.iconName] = a.icon : t[r] = a, t;
  }, {});
}
function fr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.skipHooks, n = a === void 0 ? !1 : a, i = Ga(t);
  typeof ke.hooks.addPack == "function" && !n ? ke.hooks.addPack(e, Ga(t)) : ke.styles[e] = R(R({}, ke.styles[e] || {}), i), e === "fas" && fr("fa", t);
}
var Ut, $t, Qt, lt = ke.styles, Au = ke.shims, xu = (Ut = {}, Ae(Ut, de, Object.values(Pt[de])), Ae(Ut, pe, Object.values(Pt[pe])), Ut), Wr = null, io = {}, oo = {}, so = {}, uo = {}, co = {}, Eu = ($t = {}, Ae($t, de, Object.keys(Tt[de])), Ae($t, pe, Object.keys(Tt[pe])), $t);
function wu(e) {
  return ~iu.indexOf(e);
}
function Su(e, t) {
  var r = t.split("-"), a = r[0], n = r.slice(1).join("-");
  return a === e && n !== "" && !wu(n) ? n : null;
}
var lo = function() {
  var t = function(i) {
    return Xn(lt, function(o, u, s) {
      return o[s] = Xn(u, i, {}), o;
    }, {});
  };
  io = t(function(n, i, o) {
    if (i[3] && (n[i[3]] = o), i[2]) {
      var u = i[2].filter(function(s) {
        return typeof s == "number";
      });
      u.forEach(function(s) {
        n[s.toString(16)] = o;
      });
    }
    return n;
  }), oo = t(function(n, i, o) {
    if (n[o] = o, i[2]) {
      var u = i[2].filter(function(s) {
        return typeof s == "string";
      });
      u.forEach(function(s) {
        n[s] = o;
      });
    }
    return n;
  }), co = t(function(n, i, o) {
    var u = i[2];
    return n[o] = o, u.forEach(function(s) {
      n[s] = o;
    }), n;
  });
  var r = "far" in lt || F.autoFetchSvg, a = Xn(Au, function(n, i) {
    var o = i[0], u = i[1], s = i[2];
    return u === "far" && !r && (u = "fas"), typeof o == "string" && (n.names[o] = {
      prefix: u,
      iconName: s
    }), typeof o == "number" && (n.unicodes[o.toString(16)] = {
      prefix: u,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  so = a.names, uo = a.unicodes, Wr = On(F.styleDefault, {
    family: F.familyDefault
  });
};
cu(function(e) {
  Wr = On(e.styleDefault, {
    family: F.familyDefault
  });
});
lo();
function Mr(e, t) {
  return (io[e] || {})[t];
}
function Ou(e, t) {
  return (oo[e] || {})[t];
}
function tt(e, t) {
  return (co[e] || {})[t];
}
function fo(e) {
  return so[e] || {
    prefix: null,
    iconName: null
  };
}
function Tu(e) {
  var t = uo[e], r = Mr("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ke() {
  return Wr;
}
var Lr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function On(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, a = r === void 0 ? de : r, n = Tt[a][e], i = Rt[a][e] || Rt[a][n], o = e in ke.styles ? e : null;
  return i || o || null;
}
var ka = (Qt = {}, Ae(Qt, de, Object.keys(Pt[de])), Ae(Qt, pe, Object.keys(Pt[pe])), Qt);
function Tn(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.skipLookups, n = a === void 0 ? !1 : a, i = (t = {}, Ae(t, de, "".concat(F.cssPrefix, "-").concat(de)), Ae(t, pe, "".concat(F.cssPrefix, "-").concat(pe)), t), o = null, u = de;
  (e.includes(i[de]) || e.some(function(c) {
    return ka[de].includes(c);
  })) && (u = de), (e.includes(i[pe]) || e.some(function(c) {
    return ka[pe].includes(c);
  })) && (u = pe);
  var s = e.reduce(function(c, l) {
    var f = Su(F.cssPrefix, l);
    if (lt[l] ? (l = xu[u].includes(l) ? qs[u][l] : l, o = l, c.prefix = l) : Eu[u].indexOf(l) > -1 ? (o = l, c.prefix = On(l, {
      family: u
    })) : f ? c.iconName = f : l !== F.replacementClass && l !== i[de] && l !== i[pe] && c.rest.push(l), !n && c.prefix && c.iconName) {
      var m = o === "fa" ? fo(c.iconName) : {}, g = tt(c.prefix, c.iconName);
      m.prefix && (o = null), c.iconName = m.iconName || g || c.iconName, c.prefix = m.prefix || c.prefix, c.prefix === "far" && !lt.far && lt.fas && !F.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Lr());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && u === pe && (lt.fass || F.autoFetchSvg) && (s.prefix = "fass", s.iconName = tt(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = Ke() || "fas"), s;
}
var Ru = /* @__PURE__ */ function() {
  function e() {
    Xs(this, e), this.definitions = {};
  }
  return Zs(e, [{
    key: "add",
    value: function() {
      for (var r = this, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(u) {
        r.definitions[u] = R(R({}, r.definitions[u] || {}), o[u]), fr(u, o[u]);
        var s = Pt[de][u];
        s && fr(s, o[u]), lo();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, a) {
      var n = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(n).map(function(i) {
        var o = n[i], u = o.prefix, s = o.iconName, c = o.icon, l = c[2];
        r[u] || (r[u] = {}), l.length > 0 && l.forEach(function(f) {
          typeof f == "string" && (r[u][f] = c);
        }), r[u][s] = c;
      }), r;
    }
  }]), e;
}(), Va = [], ft = {}, mt = {}, Pu = Object.keys(mt);
function Nu(e, t) {
  var r = t.mixoutsTo;
  return Va = e, ft = {}, Object.keys(mt).forEach(function(a) {
    Pu.indexOf(a) === -1 && delete mt[a];
  }), Va.forEach(function(a) {
    var n = a.mixout ? a.mixout() : {};
    if (Object.keys(n).forEach(function(o) {
      typeof n[o] == "function" && (r[o] = n[o]), fn(n[o]) === "object" && Object.keys(n[o]).forEach(function(u) {
        r[o] || (r[o] = {}), r[o][u] = n[o][u];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(o) {
        ft[o] || (ft[o] = []), ft[o].push(i[o]);
      });
    }
    a.provides && a.provides(mt);
  }), r;
}
function dr(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    a[n - 2] = arguments[n];
  var i = ft[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(a));
  }), t;
}
function at(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    r[a - 1] = arguments[a];
  var n = ft[e] || [];
  n.forEach(function(i) {
    i.apply(null, r);
  });
}
function ze() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return mt[e] ? mt[e].apply(null, t) : void 0;
}
function mr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Ke();
  if (t)
    return t = tt(r, t) || t, Fa(mo.definitions, r, t) || Fa(ke.styles, r, t);
}
var mo = new Ru(), Fu = function() {
  F.autoReplaceSvg = !1, F.observeMutations = !1, at("noAuto");
}, Gu = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return _e ? (at("beforeI2svg", t), ze("pseudoElements2svg", t), ze("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    F.autoReplaceSvg === !1 && (F.autoReplaceSvg = !0), F.observeMutations = !0, hu(function() {
      Vu({
        autoReplaceSvgRoot: r
      }), at("watch", t);
    });
  }
}, ku = {
  icon: function(t) {
    if (t === null)
      return null;
    if (fn(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: tt(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = On(t[0]);
      return {
        prefix: a,
        iconName: tt(a, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(F.cssPrefix, "-")) > -1 || t.match(eu))) {
      var n = Tn(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || Ke(),
        iconName: tt(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof t == "string") {
      var i = Ke();
      return {
        prefix: i,
        iconName: tt(i, t) || t
      };
    }
  }
}, Ne = {
  noAuto: Fu,
  config: F,
  dom: Gu,
  parse: ku,
  library: mo,
  findIconDefinition: mr,
  toHtml: Mt
}, Vu = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, a = r === void 0 ? me : r;
  (Object.keys(ke.styles).length > 0 || F.autoFetchSvg) && _e && F.autoReplaceSvg && Ne.dom.i2svg({
    node: a
  });
};
function Rn(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(a) {
        return Mt(a);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (_e) {
        var a = me.createElement("div");
        return a.innerHTML = e.html, a.children;
      }
    }
  }), e;
}
function Du(e) {
  var t = e.children, r = e.main, a = e.mask, n = e.attributes, i = e.styles, o = e.transform;
  if (Br(o) && r.found && !a.found) {
    var u = r.width, s = r.height, c = {
      x: u / s / 2,
      y: 0.5
    };
    n.style = Sn(R(R({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: t
  }];
}
function Bu(e) {
  var t = e.prefix, r = e.iconName, a = e.children, n = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(F.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: R(R({}, n), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function Xr(e) {
  var t = e.icons, r = t.main, a = t.mask, n = e.prefix, i = e.iconName, o = e.transform, u = e.symbol, s = e.title, c = e.maskId, l = e.titleId, f = e.extra, m = e.watchable, g = m === void 0 ? !1 : m, y = a.found ? a : r, p = y.width, b = y.height, v = n === "fak", I = [F.replacementClass, i ? "".concat(F.cssPrefix, "-").concat(i) : ""].filter(function(J) {
    return f.classes.indexOf(J) === -1;
  }).filter(function(J) {
    return J !== "" || !!J;
  }).concat(f.classes).join(" "), x = {
    children: [],
    attributes: R(R({}, f.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: I,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(b)
    })
  }, E = v && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(p / b * 16 * 0.0625, "em")
  } : {};
  g && (x.attributes[rt] = ""), s && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(l || Ft())
    },
    children: [s]
  }), delete x.attributes.title);
  var h = R(R({}, x), {}, {
    prefix: n,
    iconName: i,
    main: r,
    mask: a,
    maskId: c,
    transform: o,
    symbol: u,
    styles: R(R({}, E), f.styles)
  }), P = a.found && r.found ? ze("generateAbstractMask", h) || {
    children: [],
    attributes: {}
  } : ze("generateAbstractIcon", h) || {
    children: [],
    attributes: {}
  }, T = P.children, G = P.attributes;
  return h.children = T, h.attributes = G, u ? Bu(h) : Du(h);
}
function Da(e) {
  var t = e.content, r = e.width, a = e.height, n = e.transform, i = e.title, o = e.extra, u = e.watchable, s = u === void 0 ? !1 : u, c = R(R(R({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (c[rt] = "");
  var l = R({}, o.styles);
  Br(n) && (l.transform = gu({
    transform: n,
    startCentered: !0,
    width: r,
    height: a
  }), l["-webkit-transform"] = l.transform);
  var f = Sn(l);
  f.length > 0 && (c.style = f);
  var m = [];
  return m.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), m;
}
function Wu(e) {
  var t = e.content, r = e.title, a = e.extra, n = R(R(R({}, a.attributes), r ? {
    title: r
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = Sn(a.styles);
  i.length > 0 && (n.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
var Zn = ke.styles;
function gr(e) {
  var t = e[0], r = e[1], a = e.slice(4), n = Nr(a, 1), i = n[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(F.cssPrefix, "-").concat(et.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(F.cssPrefix, "-").concat(et.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(F.cssPrefix, "-").concat(et.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: o
  };
}
var Mu = {
  found: !1,
  width: 512,
  height: 512
};
function Lu(e, t) {
  !Ki && !F.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function pr(e, t) {
  var r = t;
  return t === "fa" && F.styleDefault !== null && (t = Ke()), new Promise(function(a, n) {
    if (ze("missingIconAbstract"), r === "fa") {
      var i = fo(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Zn[t] && Zn[t][e]) {
      var o = Zn[t][e];
      return a(gr(o));
    }
    Lu(e, t), a(R(R({}, Mu), {}, {
      icon: F.showMissingIcons && e ? ze("missingIconAbstract") || {} : {}
    }));
  });
}
var Ba = function() {
}, br = F.measurePerformance && Ht && Ht.mark && Ht.measure ? Ht : {
  mark: Ba,
  measure: Ba
}, Et = 'FA "6.5.1"', Xu = function(t) {
  return br.mark("".concat(Et, " ").concat(t, " begins")), function() {
    return go(t);
  };
}, go = function(t) {
  br.mark("".concat(Et, " ").concat(t, " ends")), br.measure("".concat(Et, " ").concat(t), "".concat(Et, " ").concat(t, " begins"), "".concat(Et, " ").concat(t, " ends"));
}, Zr = {
  begin: Xu,
  end: go
}, an = function() {
};
function Wa(e) {
  var t = e.getAttribute ? e.getAttribute(rt) : null;
  return typeof t == "string";
}
function Zu(e) {
  var t = e.getAttribute ? e.getAttribute(Gr) : null, r = e.getAttribute ? e.getAttribute(kr) : null;
  return t && r;
}
function Hu(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(F.replacementClass);
}
function ju() {
  if (F.autoReplaceSvg === !0)
    return on.replace;
  var e = on[F.autoReplaceSvg];
  return e || on.replace;
}
function Yu(e) {
  return me.createElementNS("http://www.w3.org/2000/svg", e);
}
function zu(e) {
  return me.createElement(e);
}
function po(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, a = r === void 0 ? e.tag === "svg" ? Yu : zu : r;
  if (typeof e == "string")
    return me.createTextNode(e);
  var n = a(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    n.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    n.appendChild(po(o, {
      ceFn: a
    }));
  }), n;
}
function _u(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var on = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(n) {
        r.parentNode.insertBefore(po(n), r);
      }), r.getAttribute(rt) === null && F.keepOriginalSource) {
        var a = me.createComment(_u(r));
        r.parentNode.replaceChild(a, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], a = t[1];
    if (~Dr(r).indexOf(F.replacementClass))
      return on.replace(t);
    var n = new RegExp("".concat(F.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i = a[0].attributes.class.split(" ").reduce(function(u, s) {
        return s === F.replacementClass || s.match(n) ? u.toSvg.push(s) : u.toNode.push(s), u;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var o = a.map(function(u) {
      return Mt(u);
    }).join(`
`);
    r.setAttribute(rt, ""), r.innerHTML = o;
  }
};
function Ma(e) {
  e();
}
function bo(e, t) {
  var r = typeof t == "function" ? t : an;
  if (e.length === 0)
    r();
  else {
    var a = Ma;
    F.mutateApproach === Qs && (a = Qe.requestAnimationFrame || Ma), a(function() {
      var n = ju(), i = Zr.begin("mutate");
      e.map(n), i(), r();
    });
  }
}
var Hr = !1;
function vo() {
  Hr = !0;
}
function vr() {
  Hr = !1;
}
var mn = null;
function La(e) {
  if (Ra && F.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? an : t, a = e.nodeCallback, n = a === void 0 ? an : a, i = e.pseudoElementsCallback, o = i === void 0 ? an : i, u = e.observeMutationsRoot, s = u === void 0 ? me : u;
    mn = new Ra(function(c) {
      if (!Hr) {
        var l = Ke();
        vt(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !Wa(f.addedNodes[0]) && (F.searchPseudoElements && o(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && F.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && Wa(f.target) && ~au.indexOf(f.attributeName))
            if (f.attributeName === "class" && Zu(f.target)) {
              var m = Tn(Dr(f.target)), g = m.prefix, y = m.iconName;
              f.target.setAttribute(Gr, g || l), y && f.target.setAttribute(kr, y);
            } else
              Hu(f.target) && n(f.target);
        });
      }
    }), _e && mn.observe(s, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ju() {
  mn && mn.disconnect();
}
function Uu(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(a, n) {
    var i = n.split(":"), o = i[0], u = i.slice(1);
    return o && u.length > 0 && (a[o] = u.join(":").trim()), a;
  }, {})), r;
}
function $u(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "", n = Tn(Dr(e));
  return n.prefix || (n.prefix = Ke()), t && r && (n.prefix = t, n.iconName = r), n.iconName && n.prefix || (n.prefix && a.length > 0 && (n.iconName = Ou(n.prefix, e.innerText) || Mr(n.prefix, lr(e.innerText))), !n.iconName && F.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = e.firstChild.data)), n;
}
function Qu(e) {
  var t = vt(e.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), r = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return F.autoA11y && (r ? t["aria-labelledby"] = "".concat(F.replacementClass, "-title-").concat(a || Ft()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Ku() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: We,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Xa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = $u(e), a = r.iconName, n = r.prefix, i = r.rest, o = Qu(e), u = dr("parseNodeAttributes", {}, e), s = t.styleParser ? Uu(e) : [];
  return R({
    iconName: a,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: We,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: o
    }
  }, u);
}
var qu = ke.styles;
function ho(e) {
  var t = F.autoReplaceSvg === "nest" ? Xa(e, {
    styleParser: !1
  }) : Xa(e);
  return ~t.extra.classes.indexOf(qi) ? ze("generateLayersText", e, t) : ze("generateSvgReplacementMutation", e, t);
}
var qe = /* @__PURE__ */ new Set();
Vr.map(function(e) {
  qe.add("fa-".concat(e));
});
Object.keys(Tt[de]).map(qe.add.bind(qe));
Object.keys(Tt[pe]).map(qe.add.bind(qe));
qe = Bt(qe);
function Za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!_e)
    return Promise.resolve();
  var r = me.documentElement.classList, a = function(f) {
    return r.add("".concat(Pa, "-").concat(f));
  }, n = function(f) {
    return r.remove("".concat(Pa, "-").concat(f));
  }, i = F.autoFetchSvg ? qe : Vr.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(qu));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(qi, ":not([").concat(rt, "])")].concat(i.map(function(l) {
    return ".".concat(l, ":not([").concat(rt, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var u = [];
  try {
    u = vt(e.querySelectorAll(o));
  } catch {
  }
  if (u.length > 0)
    a("pending"), n("complete");
  else
    return Promise.resolve();
  var s = Zr.begin("onTree"), c = u.reduce(function(l, f) {
    try {
      var m = ho(f);
      m && l.push(m);
    } catch (g) {
      Ki || g.name === "MissingIcon" && console.error(g);
    }
    return l;
  }, []);
  return new Promise(function(l, f) {
    Promise.all(c).then(function(m) {
      bo(m, function() {
        a("active"), a("complete"), n("pending"), typeof t == "function" && t(), s(), l();
      });
    }).catch(function(m) {
      s(), f(m);
    });
  });
}
function ec(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ho(e).then(function(r) {
    r && bo([r], t);
  });
}
function tc(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : mr(t || {}), n = r.mask;
    return n && (n = (n || {}).icon ? n : mr(n || {})), e(a, R(R({}, r), {}, {
      mask: n
    }));
  };
}
var nc = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, n = a === void 0 ? We : a, i = r.symbol, o = i === void 0 ? !1 : i, u = r.mask, s = u === void 0 ? null : u, c = r.maskId, l = c === void 0 ? null : c, f = r.title, m = f === void 0 ? null : f, g = r.titleId, y = g === void 0 ? null : g, p = r.classes, b = p === void 0 ? [] : p, v = r.attributes, I = v === void 0 ? {} : v, x = r.styles, E = x === void 0 ? {} : x;
  if (t) {
    var h = t.prefix, P = t.iconName, T = t.icon;
    return Rn(R({
      type: "icon"
    }, t), function() {
      return at("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), F.autoA11y && (m ? I["aria-labelledby"] = "".concat(F.replacementClass, "-title-").concat(y || Ft()) : (I["aria-hidden"] = "true", I.focusable = "false")), Xr({
        icons: {
          main: gr(T),
          mask: s ? gr(s.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: h,
        iconName: P,
        transform: R(R({}, We), n),
        symbol: o,
        title: m,
        maskId: l,
        titleId: y,
        extra: {
          attributes: I,
          styles: E,
          classes: b
        }
      });
    });
  }
}, rc = {
  mixout: function() {
    return {
      icon: tc(nc)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Za, r.nodeCallback = ec, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var a = r.node, n = a === void 0 ? me : a, i = r.callback, o = i === void 0 ? function() {
      } : i;
      return Za(n, o);
    }, t.generateSvgReplacementMutation = function(r, a) {
      var n = a.iconName, i = a.title, o = a.titleId, u = a.prefix, s = a.transform, c = a.symbol, l = a.mask, f = a.maskId, m = a.extra;
      return new Promise(function(g, y) {
        Promise.all([pr(n, u), l.iconName ? pr(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(p) {
          var b = Nr(p, 2), v = b[0], I = b[1];
          g([r, Xr({
            icons: {
              main: v,
              mask: I
            },
            prefix: u,
            iconName: n,
            transform: s,
            symbol: c,
            maskId: f,
            title: i,
            titleId: o,
            extra: m,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, t.generateAbstractIcon = function(r) {
      var a = r.children, n = r.attributes, i = r.main, o = r.transform, u = r.styles, s = Sn(u);
      s.length > 0 && (n.style = s);
      var c;
      return Br(o) && (c = ze("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), a.push(c || i.icon), {
        children: a,
        attributes: n
      };
    };
  }
}, ac = {
  mixout: function() {
    return {
      layer: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.classes, i = n === void 0 ? [] : n;
        return Rn({
          type: "layer"
        }, function() {
          at("beforeDOMElementCreation", {
            assembler: r,
            params: a
          });
          var o = [];
          return r(function(u) {
            Array.isArray(u) ? u.map(function(s) {
              o = o.concat(s.abstract);
            }) : o = o.concat(u.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(F.cssPrefix, "-layers")].concat(Bt(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, ic = {
  mixout: function() {
    return {
      counter: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.title, i = n === void 0 ? null : n, o = a.classes, u = o === void 0 ? [] : o, s = a.attributes, c = s === void 0 ? {} : s, l = a.styles, f = l === void 0 ? {} : l;
        return Rn({
          type: "counter",
          content: r
        }, function() {
          return at("beforeDOMElementCreation", {
            content: r,
            params: a
          }), Wu({
            content: r.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(F.cssPrefix, "-layers-counter")].concat(Bt(u))
            }
          });
        });
      }
    };
  }
}, oc = {
  mixout: function() {
    return {
      text: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, i = n === void 0 ? We : n, o = a.title, u = o === void 0 ? null : o, s = a.classes, c = s === void 0 ? [] : s, l = a.attributes, f = l === void 0 ? {} : l, m = a.styles, g = m === void 0 ? {} : m;
        return Rn({
          type: "text",
          content: r
        }, function() {
          return at("beforeDOMElementCreation", {
            content: r,
            params: a
          }), Da({
            content: r,
            transform: R(R({}, We), i),
            title: u,
            extra: {
              attributes: f,
              styles: g,
              classes: ["".concat(F.cssPrefix, "-layers-text")].concat(Bt(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, a) {
      var n = a.title, i = a.transform, o = a.extra, u = null, s = null;
      if (Ui) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), l = r.getBoundingClientRect();
        u = l.width / c, s = l.height / c;
      }
      return F.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, Da({
        content: r.innerHTML,
        width: u,
        height: s,
        transform: i,
        title: n,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, sc = new RegExp('"', "ug"), Ha = [1105920, 1112319];
function uc(e) {
  var t = e.replace(sc, ""), r = Cu(t, 0), a = r >= Ha[0] && r <= Ha[1], n = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: lr(n ? t[0] : t),
    isSecondary: a || n
  };
}
function ja(e, t) {
  var r = "".concat($s).concat(t.replace(":", "-"));
  return new Promise(function(a, n) {
    if (e.getAttribute(r) !== null)
      return a();
    var i = vt(e.children), o = i.filter(function(T) {
      return T.getAttribute(cr) === t;
    })[0], u = Qe.getComputedStyle(e, t), s = u.getPropertyValue("font-family").match(tu), c = u.getPropertyValue("font-weight"), l = u.getPropertyValue("content");
    if (o && !s)
      return e.removeChild(o), a();
    if (s && l !== "none" && l !== "") {
      var f = u.getPropertyValue("content"), m = ~["Sharp"].indexOf(s[2]) ? pe : de, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? Rt[m][s[2].toLowerCase()] : nu[m][c], y = uc(f), p = y.value, b = y.isSecondary, v = s[0].startsWith("FontAwesome"), I = Mr(g, p), x = I;
      if (v) {
        var E = Tu(p);
        E.iconName && E.prefix && (I = E.iconName, g = E.prefix);
      }
      if (I && !b && (!o || o.getAttribute(Gr) !== g || o.getAttribute(kr) !== x)) {
        e.setAttribute(r, x), o && e.removeChild(o);
        var h = Ku(), P = h.extra;
        P.attributes[cr] = t, pr(I, g).then(function(T) {
          var G = Xr(R(R({}, h), {}, {
            icons: {
              main: T,
              mask: Lr()
            },
            prefix: g,
            iconName: x,
            extra: P,
            watchable: !0
          })), J = me.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(J, e.firstChild) : e.appendChild(J), J.outerHTML = G.map(function(H) {
            return Mt(H);
          }).join(`
`), e.removeAttribute(r), a();
        }).catch(n);
      } else
        a();
    } else
      a();
  });
}
function cc(e) {
  return Promise.all([ja(e, "::before"), ja(e, "::after")]);
}
function lc(e) {
  return e.parentNode !== document.head && !~Ks.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(cr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ya(e) {
  if (_e)
    return new Promise(function(t, r) {
      var a = vt(e.querySelectorAll("*")).filter(lc).map(cc), n = Zr.begin("searchPseudoElements");
      vo(), Promise.all(a).then(function() {
        n(), vr(), t();
      }).catch(function() {
        n(), vr(), r();
      });
    });
}
var fc = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Ya, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var a = r.node, n = a === void 0 ? me : a;
      F.searchPseudoElements && Ya(n);
    };
  }
}, za = !1, dc = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          vo(), za = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        La(dr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ju();
      },
      watch: function(r) {
        var a = r.observeMutationsRoot;
        za ? vr() : La(dr("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
}, _a = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(a, n) {
    var i = n.toLowerCase().split("-"), o = i[0], u = i.slice(1).join("-");
    if (o && u === "h")
      return a.flipX = !0, a;
    if (o && u === "v")
      return a.flipY = !0, a;
    if (u = parseFloat(u), isNaN(u))
      return a;
    switch (o) {
      case "grow":
        a.size = a.size + u;
        break;
      case "shrink":
        a.size = a.size - u;
        break;
      case "left":
        a.x = a.x - u;
        break;
      case "right":
        a.x = a.x + u;
        break;
      case "up":
        a.y = a.y - u;
        break;
      case "down":
        a.y = a.y + u;
        break;
      case "rotate":
        a.rotate = a.rotate + u;
        break;
    }
    return a;
  }, r);
}, mc = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return _a(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-transform");
        return n && (r.transform = _a(n)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var a = r.main, n = r.transform, i = r.containerWidth, o = r.iconWidth, u = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), c = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), l = "rotate(".concat(n.rotate, " 0 0)"), f = {
        transform: "".concat(s, " ").concat(c, " ").concat(l)
      }, m = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: u,
        inner: f,
        path: m
      };
      return {
        tag: "g",
        attributes: R({}, g.outer),
        children: [{
          tag: "g",
          attributes: R({}, g.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: R(R({}, a.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
}, Hn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ja(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function gc(e) {
  return e.tag === "g" ? e.children : [e];
}
var pc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-mask"), i = n ? Tn(n.split(" ").map(function(o) {
          return o.trim();
        })) : Lr();
        return i.prefix || (i.prefix = Ke()), r.mask = i, r.maskId = a.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var a = r.children, n = r.attributes, i = r.main, o = r.mask, u = r.maskId, s = r.transform, c = i.width, l = i.icon, f = o.width, m = o.icon, g = mu({
        transform: s,
        containerWidth: f,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: R(R({}, Hn), {}, {
          fill: "white"
        })
      }, p = l.children ? {
        children: l.children.map(Ja)
      } : {}, b = {
        tag: "g",
        attributes: R({}, g.inner),
        children: [Ja(R({
          tag: l.tag,
          attributes: R(R({}, l.attributes), g.path)
        }, p))]
      }, v = {
        tag: "g",
        attributes: R({}, g.outer),
        children: [b]
      }, I = "mask-".concat(u || Ft()), x = "clip-".concat(u || Ft()), E = {
        tag: "mask",
        attributes: R(R({}, Hn), {}, {
          id: I,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, v]
      }, h = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: gc(m)
        }, E]
      };
      return a.push(h, {
        tag: "rect",
        attributes: R({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(I, ")")
        }, Hn)
      }), {
        children: a,
        attributes: n
      };
    };
  }
}, bc = {
  provides: function(t) {
    var r = !1;
    Qe.matchMedia && (r = Qe.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var a = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: R(R({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = R(R({}, i), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: R(R({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || u.children.push({
        tag: "animate",
        attributes: R(R({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: R(R({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(u), a.push({
        tag: "path",
        attributes: R(R({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || a.push({
        tag: "path",
        attributes: R(R({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
}, vc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return r.symbol = i, r;
      }
    };
  }
}, hc = [bu, rc, ac, ic, oc, fc, dc, mc, pc, bc, vc];
Nu(hc, {
  mixoutsTo: Ne
});
Ne.noAuto;
Ne.config;
Ne.library;
Ne.dom;
var hr = Ne.parse;
Ne.findIconDefinition;
Ne.toHtml;
var yc = Ne.icon;
Ne.layer;
Ne.text;
Ne.counter;
var yr = { exports: {} }, jn, Ua;
function jr() {
  if (Ua)
    return jn;
  Ua = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = e, jn;
}
var Yn, $a;
function Ic() {
  if ($a)
    return Yn;
  $a = 1;
  var e = jr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Yn = function() {
    function a(o, u, s, c, l, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    a.isRequired = a;
    function n() {
      return a;
    }
    var i = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: n,
      element: a,
      elementType: a,
      instanceOf: n,
      node: a,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Yn;
}
var Kt = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function Cc() {
  return Qa || (Qa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function x(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === a || w === c || w === i || w === n || w === f || w === m || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === o || w.$$typeof === u || w.$$typeof === l || w.$$typeof === b || w.$$typeof === v || w.$$typeof === I || w.$$typeof === p);
    }
    function E(w) {
      if (typeof w == "object" && w !== null) {
        var Oe = w.$$typeof;
        switch (Oe) {
          case t:
            var Le = w.type;
            switch (Le) {
              case s:
              case c:
              case a:
              case i:
              case n:
              case f:
                return Le;
              default:
                var Xe = Le && Le.$$typeof;
                switch (Xe) {
                  case u:
                  case l:
                  case y:
                  case g:
                  case o:
                    return Xe;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var h = s, P = c, T = u, G = o, J = t, H = l, k = a, q = y, te = g, le = r, re = i, z = n, ge = f, ne = !1;
    function Ie(w) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(w) || E(w) === s;
    }
    function C(w) {
      return E(w) === c;
    }
    function S(w) {
      return E(w) === u;
    }
    function N(w) {
      return E(w) === o;
    }
    function V(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function W(w) {
      return E(w) === l;
    }
    function _(w) {
      return E(w) === a;
    }
    function D(w) {
      return E(w) === y;
    }
    function X(w) {
      return E(w) === g;
    }
    function j(w) {
      return E(w) === r;
    }
    function $(w) {
      return E(w) === i;
    }
    function U(w) {
      return E(w) === n;
    }
    function Ce(w) {
      return E(w) === f;
    }
    ue.AsyncMode = h, ue.ConcurrentMode = P, ue.ContextConsumer = T, ue.ContextProvider = G, ue.Element = J, ue.ForwardRef = H, ue.Fragment = k, ue.Lazy = q, ue.Memo = te, ue.Portal = le, ue.Profiler = re, ue.StrictMode = z, ue.Suspense = ge, ue.isAsyncMode = Ie, ue.isConcurrentMode = C, ue.isContextConsumer = S, ue.isContextProvider = N, ue.isElement = V, ue.isForwardRef = W, ue.isFragment = _, ue.isLazy = D, ue.isMemo = X, ue.isPortal = j, ue.isProfiler = $, ue.isStrictMode = U, ue.isSuspense = Ce, ue.isValidElementType = x, ue.typeOf = E;
  }()), ue;
}
var ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function Ac() {
  if (Ka)
    return ce;
  Ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case t:
          switch (h = h.type, h) {
            case s:
            case c:
            case a:
            case i:
            case n:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case l:
                case y:
                case g:
                case o:
                  return h;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function E(h) {
    return x(h) === c;
  }
  return ce.AsyncMode = s, ce.ConcurrentMode = c, ce.ContextConsumer = u, ce.ContextProvider = o, ce.Element = t, ce.ForwardRef = l, ce.Fragment = a, ce.Lazy = y, ce.Memo = g, ce.Portal = r, ce.Profiler = i, ce.StrictMode = n, ce.Suspense = f, ce.isAsyncMode = function(h) {
    return E(h) || x(h) === s;
  }, ce.isConcurrentMode = E, ce.isContextConsumer = function(h) {
    return x(h) === u;
  }, ce.isContextProvider = function(h) {
    return x(h) === o;
  }, ce.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ce.isForwardRef = function(h) {
    return x(h) === l;
  }, ce.isFragment = function(h) {
    return x(h) === a;
  }, ce.isLazy = function(h) {
    return x(h) === y;
  }, ce.isMemo = function(h) {
    return x(h) === g;
  }, ce.isPortal = function(h) {
    return x(h) === r;
  }, ce.isProfiler = function(h) {
    return x(h) === i;
  }, ce.isStrictMode = function(h) {
    return x(h) === n;
  }, ce.isSuspense = function(h) {
    return x(h) === f;
  }, ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === a || h === c || h === i || h === n || h === f || h === m || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === o || h.$$typeof === u || h.$$typeof === l || h.$$typeof === b || h.$$typeof === v || h.$$typeof === I || h.$$typeof === p);
  }, ce.typeOf = x, ce;
}
var qa;
function Yr() {
  return qa || (qa = 1, process.env.NODE_ENV === "production" ? Kt.exports = Ac() : Kt.exports = Cc()), Kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zn, ei;
function xc() {
  if (ei)
    return zn;
  ei = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var s = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zn = n() ? Object.assign : function(i, o) {
    for (var u, s = a(i), c, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var f in u)
        t.call(u, f) && (s[f] = u[f]);
      if (e) {
        c = e(u);
        for (var m = 0; m < c.length; m++)
          r.call(u, c[m]) && (s[c[m]] = u[c[m]]);
      }
    }
    return s;
  }, zn;
}
var _n, ti;
function yo() {
  return ti || (ti = 1, _n = Function.call.bind(Object.prototype.hasOwnProperty)), _n;
}
var Jn, ni;
function Ec() {
  if (ni)
    return Jn;
  ni = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jr(), r = {}, a = yo();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function n(i, o, u, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (a(i, l)) {
          var f;
          try {
            if (typeof i[l] != "function") {
              var m = Error(
                (s || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = i[l](o, l, s, u, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + u + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jn = n, Jn;
}
var Un, ri;
function wc() {
  if (ri)
    return Un;
  ri = 1;
  var e = Yr(), t = xc(), r = jr(), a = yo(), n = Ec(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Un = function(u, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(C) {
      var S = C && (c && C[c] || C[l]);
      if (typeof S == "function")
        return S;
    }
    var m = "<<anonymous>>", g = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: I(),
      arrayOf: x,
      element: E(),
      elementType: h(),
      instanceOf: P,
      node: H(),
      objectOf: G,
      oneOf: T,
      oneOfType: J,
      shape: q,
      exact: te
    };
    function y(C, S) {
      return C === S ? C !== 0 || 1 / C === 1 / S : C !== C && S !== S;
    }
    function p(C, S) {
      this.message = C, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function b(C) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, N = 0;
      function V(_, D, X, j, $, U, Ce) {
        if (j = j || m, U = U || X, Ce !== r) {
          if (s) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = j + ":" + X;
            !S[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[Oe] = !0, N++);
          }
        }
        return D[X] == null ? _ ? D[X] === null ? new p("The " + $ + " `" + U + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new p("The " + $ + " `" + U + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : C(D, X, j, $, U);
      }
      var W = V.bind(null, !1);
      return W.isRequired = V.bind(null, !0), W;
    }
    function v(C) {
      function S(N, V, W, _, D, X) {
        var j = N[V], $ = z(j);
        if ($ !== C) {
          var U = ge(j);
          return new p(
            "Invalid " + _ + " `" + D + "` of type " + ("`" + U + "` supplied to `" + W + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return b(S);
    }
    function I() {
      return b(o);
    }
    function x(C) {
      function S(N, V, W, _, D) {
        if (typeof C != "function")
          return new p("Property `" + D + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var X = N[V];
        if (!Array.isArray(X)) {
          var j = z(X);
          return new p("Invalid " + _ + " `" + D + "` of type " + ("`" + j + "` supplied to `" + W + "`, expected an array."));
        }
        for (var $ = 0; $ < X.length; $++) {
          var U = C(X, $, W, _, D + "[" + $ + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return b(S);
    }
    function E() {
      function C(S, N, V, W, _) {
        var D = S[N];
        if (!u(D)) {
          var X = z(D);
          return new p("Invalid " + W + " `" + _ + "` of type " + ("`" + X + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(C);
    }
    function h() {
      function C(S, N, V, W, _) {
        var D = S[N];
        if (!e.isValidElementType(D)) {
          var X = z(D);
          return new p("Invalid " + W + " `" + _ + "` of type " + ("`" + X + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(C);
    }
    function P(C) {
      function S(N, V, W, _, D) {
        if (!(N[V] instanceof C)) {
          var X = C.name || m, j = Ie(N[V]);
          return new p("Invalid " + _ + " `" + D + "` of type " + ("`" + j + "` supplied to `" + W + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return b(S);
    }
    function T(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function S(N, V, W, _, D) {
        for (var X = N[V], j = 0; j < C.length; j++)
          if (y(X, C[j]))
            return null;
        var $ = JSON.stringify(C, function(Ce, w) {
          var Oe = ge(w);
          return Oe === "symbol" ? String(w) : w;
        });
        return new p("Invalid " + _ + " `" + D + "` of value `" + String(X) + "` " + ("supplied to `" + W + "`, expected one of " + $ + "."));
      }
      return b(S);
    }
    function G(C) {
      function S(N, V, W, _, D) {
        if (typeof C != "function")
          return new p("Property `" + D + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var X = N[V], j = z(X);
        if (j !== "object")
          return new p("Invalid " + _ + " `" + D + "` of type " + ("`" + j + "` supplied to `" + W + "`, expected an object."));
        for (var $ in X)
          if (a(X, $)) {
            var U = C(X, $, W, _, D + "." + $, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return b(S);
    }
    function J(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var S = 0; S < C.length; S++) {
        var N = C[S];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(N) + " at index " + S + "."
          ), o;
      }
      function V(W, _, D, X, j) {
        for (var $ = [], U = 0; U < C.length; U++) {
          var Ce = C[U], w = Ce(W, _, D, X, j, r);
          if (w == null)
            return null;
          w.data && a(w.data, "expectedType") && $.push(w.data.expectedType);
        }
        var Oe = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new p("Invalid " + X + " `" + j + "` supplied to " + ("`" + D + "`" + Oe + "."));
      }
      return b(V);
    }
    function H() {
      function C(S, N, V, W, _) {
        return le(S[N]) ? null : new p("Invalid " + W + " `" + _ + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return b(C);
    }
    function k(C, S, N, V, W) {
      return new p(
        (C || "React class") + ": " + S + " type `" + N + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function q(C) {
      function S(N, V, W, _, D) {
        var X = N[V], j = z(X);
        if (j !== "object")
          return new p("Invalid " + _ + " `" + D + "` of type `" + j + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var $ in C) {
          var U = C[$];
          if (typeof U != "function")
            return k(W, _, D, $, ge(U));
          var Ce = U(X, $, W, _, D + "." + $, r);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return b(S);
    }
    function te(C) {
      function S(N, V, W, _, D) {
        var X = N[V], j = z(X);
        if (j !== "object")
          return new p("Invalid " + _ + " `" + D + "` of type `" + j + "` " + ("supplied to `" + W + "`, expected `object`."));
        var $ = t({}, N[V], C);
        for (var U in $) {
          var Ce = C[U];
          if (a(C, U) && typeof Ce != "function")
            return k(W, _, D, U, ge(Ce));
          if (!Ce)
            return new p(
              "Invalid " + _ + " `" + D + "` key `" + U + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(N[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var w = Ce(X, U, W, _, D + "." + U, r);
          if (w)
            return w;
        }
        return null;
      }
      return b(S);
    }
    function le(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(le);
          if (C === null || u(C))
            return !0;
          var S = f(C);
          if (S) {
            var N = S.call(C), V;
            if (S !== C.entries) {
              for (; !(V = N.next()).done; )
                if (!le(V.value))
                  return !1;
            } else
              for (; !(V = N.next()).done; ) {
                var W = V.value;
                if (W && !le(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(C, S) {
      return C === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function z(C) {
      var S = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : re(S, C) ? "symbol" : S;
    }
    function ge(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var S = z(C);
      if (S === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function ne(C) {
      var S = ge(C);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function Ie(C) {
      return !C.constructor || !C.constructor.name ? m : C.constructor.name;
    }
    return g.checkPropTypes = n, g.resetWarningCache = n.resetWarningCache, g.PropTypes = g, g;
  }, Un;
}
if (process.env.NODE_ENV !== "production") {
  var Sc = Yr(), Oc = !0;
  yr.exports = wc()(Sc.isElement, Oc);
} else
  yr.exports = Ic()();
var Tc = yr.exports;
const Q = /* @__PURE__ */ Ws(Tc);
function ai(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ai(Object(r), !0).forEach(function(a) {
      dt(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ai(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function dt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Rc(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function Pc(e, t) {
  if (e == null)
    return {};
  var r = Rc(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Ir(e) {
  return Nc(e) || Fc(e) || Gc(e) || kc();
}
function Nc(e) {
  if (Array.isArray(e))
    return Cr(e);
}
function Fc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Gc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Cr(e, t);
  }
}
function Cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function kc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vc(e) {
  var t, r = e.beat, a = e.fade, n = e.beatFade, i = e.bounce, o = e.shake, u = e.flash, s = e.spin, c = e.spinPulse, l = e.spinReverse, f = e.pulse, m = e.fixedWidth, g = e.inverse, y = e.border, p = e.listItem, b = e.flip, v = e.size, I = e.rotation, x = e.pull, E = (t = {
    "fa-beat": r,
    "fa-fade": a,
    "fa-beat-fade": n,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": u,
    "fa-spin": s,
    "fa-spin-reverse": l,
    "fa-spin-pulse": c,
    "fa-pulse": f,
    "fa-fw": m,
    "fa-inverse": g,
    "fa-border": y,
    "fa-li": p,
    "fa-flip": b === !0,
    "fa-flip-horizontal": b === "horizontal" || b === "both",
    "fa-flip-vertical": b === "vertical" || b === "both"
  }, dt(t, "fa-".concat(v), typeof v < "u" && v !== null), dt(t, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), dt(t, "fa-pull-".concat(x), typeof x < "u" && x !== null), dt(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(E).map(function(h) {
    return E[h] ? h : null;
  }).filter(function(h) {
    return h;
  });
}
function Dc(e) {
  return e = e - 0, e === e;
}
function Io(e) {
  return Dc(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Bc = ["style"];
function Wc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var a = r.indexOf(":"), n = Io(r.slice(0, a)), i = r.slice(a + 1).trim();
    return n.startsWith("webkit") ? t[Wc(n)] = i : t[n] = i, t;
  }, {});
}
function Co(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(s) {
    return Co(e, s);
  }), n = Object.keys(t.attributes || {}).reduce(function(s, c) {
    var l = t.attributes[c];
    switch (c) {
      case "class":
        s.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        s.attrs.style = Mc(l);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? s.attrs[c.toLowerCase()] = l : s.attrs[Io(c)] = l;
    }
    return s;
  }, {
    attrs: {}
  }), i = r.style, o = i === void 0 ? {} : i, u = Pc(r, Bc);
  return n.attrs.style = $e($e({}, n.attrs.style), o), e.apply(void 0, [t.tag, $e($e({}, n.attrs), u)].concat(Ir(a)));
}
var Ao = !1;
try {
  Ao = process.env.NODE_ENV === "production";
} catch {
}
function Lc() {
  if (!Ao && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ii(e) {
  if (e && gn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (hr.icon)
    return hr.icon(e);
  if (e === null)
    return null;
  if (e && gn(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function $n(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? dt({}, e, t) : {};
}
var nt = /* @__PURE__ */ En.forwardRef(function(e, t) {
  var r = e.icon, a = e.mask, n = e.symbol, i = e.className, o = e.title, u = e.titleId, s = e.maskId, c = ii(r), l = $n("classes", [].concat(Ir(Vc(e)), Ir(i.split(" ")))), f = $n("transform", typeof e.transform == "string" ? hr.transform(e.transform) : e.transform), m = $n("mask", ii(a)), g = yc(c, $e($e($e($e({}, l), f), m), {}, {
    symbol: n,
    title: o,
    titleId: u,
    maskId: s
  }));
  if (!g)
    return Lc("Could not find icon", c), null;
  var y = g.abstract, p = {
    ref: t
  };
  return Object.keys(e).forEach(function(b) {
    nt.defaultProps.hasOwnProperty(b) || (p[b] = e[b]);
  }), Xc(y[0], p);
});
nt.displayName = "FontAwesomeIcon";
nt.propTypes = {
  beat: Q.bool,
  border: Q.bool,
  beatFade: Q.bool,
  bounce: Q.bool,
  className: Q.string,
  fade: Q.bool,
  flash: Q.bool,
  mask: Q.oneOfType([Q.object, Q.array, Q.string]),
  maskId: Q.string,
  fixedWidth: Q.bool,
  inverse: Q.bool,
  flip: Q.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Q.oneOfType([Q.object, Q.array, Q.string]),
  listItem: Q.bool,
  pull: Q.oneOf(["right", "left"]),
  pulse: Q.bool,
  rotation: Q.oneOf([0, 90, 180, 270]),
  shake: Q.bool,
  size: Q.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Q.bool,
  spinPulse: Q.bool,
  spinReverse: Q.bool,
  symbol: Q.oneOfType([Q.bool, Q.string]),
  title: Q.string,
  titleId: Q.string,
  transform: Q.oneOfType([Q.string, Q.object]),
  swapOpacity: Q.bool
};
nt.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var Xc = Co.bind(null, En.createElement), Zc = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Hc = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, jc = {
  prefix: "fas",
  iconName: "house",
  icon: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]
};
function it(e) {
  "@babel/helpers - typeof";
  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, it(e);
}
function Yc(e, t) {
  if (it(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (it(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xo(e) {
  var t = Yc(e, "string");
  return it(t) == "symbol" ? t : String(t);
}
function wt(e, t, r) {
  return t = xo(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function oi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oi(Object(r), !0).forEach(function(a) {
      wt(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function zc(e) {
  if (Array.isArray(e))
    return e;
}
function _c(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, n, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        s = !1;
      } else
        for (; !(s = (a = i.call(r)).done) && (u.push(a.value), u.length !== t); s = !0)
          ;
    } catch (l) {
      c = !0, n = l;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (c)
          throw n;
      }
    }
    return u;
  }
}
function Ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function Eo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ar(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ar(e, t);
  }
}
function Jc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e, t) {
  return zc(e) || _c(e, t) || Eo(e, t) || Jc();
}
function Uc(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function Je(e, t) {
  if (e == null)
    return {};
  var r = Uc(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
var $c = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Qc(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, a = e.defaultMenuIsOpen, n = a === void 0 ? !1 : a, i = e.defaultValue, o = i === void 0 ? null : i, u = e.inputValue, s = e.menuIsOpen, c = e.onChange, l = e.onInputChange, f = e.onMenuClose, m = e.onMenuOpen, g = e.value, y = Je(e, $c), p = Re(u !== void 0 ? u : r), b = He(p, 2), v = b[0], I = b[1], x = Re(s !== void 0 ? s : n), E = He(x, 2), h = E[0], P = E[1], T = Re(g !== void 0 ? g : o), G = He(T, 2), J = G[0], H = G[1], k = Se(function(ne, Ie) {
    typeof c == "function" && c(ne, Ie), H(ne);
  }, [c]), q = Se(function(ne, Ie) {
    var C;
    typeof l == "function" && (C = l(ne, Ie)), I(C !== void 0 ? C : ne);
  }, [l]), te = Se(function() {
    typeof m == "function" && m(), P(!0);
  }, [m]), le = Se(function() {
    typeof f == "function" && f(), P(!1);
  }, [f]), re = u !== void 0 ? u : v, z = s !== void 0 ? s : h, ge = g !== void 0 ? g : J;
  return M(M({}, y), {}, {
    inputValue: re,
    menuIsOpen: z,
    onChange: k,
    onInputChange: q,
    onMenuClose: le,
    onMenuOpen: te,
    value: ge
  });
}
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, L.apply(this, arguments);
}
function Kc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function si(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, xo(a.key), a);
  }
}
function qc(e, t, r) {
  return t && si(e.prototype, t), r && si(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function xr(e, t) {
  return xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, xr(e, t);
}
function el(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && xr(e, t);
}
function pn(e) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pn(e);
}
function tl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function nl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rl(e, t) {
  if (t && (it(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nl(e);
}
function al(e) {
  var t = tl();
  return function() {
    var a = pn(e), n;
    if (t) {
      var i = pn(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return rl(this, n);
  };
}
function il(e) {
  if (Array.isArray(e))
    return Ar(e);
}
function ol(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function sl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zr(e) {
  return il(e) || ol(e) || Eo(e) || sl();
}
function ul(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function cl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ll = /* @__PURE__ */ function() {
  function e(r) {
    var a = this;
    this._insertTag = function(n) {
      var i;
      a.tags.length === 0 ? a.insertionPoint ? i = a.insertionPoint.nextSibling : a.prepend ? i = a.container.firstChild : i = a.before : i = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(n, i), a.tags.push(n);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cl(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var o = ul(n);
      try {
        o.insertRule(a, o.cssRules.length);
      } catch (u) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', u);
      }
    } else
      n.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ee = "-ms-", bn = "-moz-", oe = "-webkit-", _r = "comm", Jr = "rule", Ur = "decl", fl = "@import", wo = "@keyframes", dl = "@layer", ml = Math.abs, Pn = String.fromCharCode, gl = Object.assign;
function pl(e, t) {
  return xe(e, 0) ^ 45 ? (((t << 2 ^ xe(e, 0)) << 2 ^ xe(e, 1)) << 2 ^ xe(e, 2)) << 2 ^ xe(e, 3) : 0;
}
function So(e) {
  return e.trim();
}
function bl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, r) {
  return e.replace(t, r);
}
function Er(e, t) {
  return e.indexOf(t);
}
function xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gt(e, t, r) {
  return e.slice(t, r);
}
function De(e) {
  return e.length;
}
function $r(e) {
  return e.length;
}
function qt(e, t) {
  return t.push(e), e;
}
function vl(e, t) {
  return e.map(t).join("");
}
var Nn = 1, bt = 1, Oo = 0, Te = 0, ye = 0, ht = "";
function Fn(e, t, r, a, n, i, o) {
  return { value: e, root: t, parent: r, type: a, props: n, children: i, line: Nn, column: bt, length: o, return: "" };
}
function At(e, t) {
  return gl(Fn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hl() {
  return ye;
}
function yl() {
  return ye = Te > 0 ? xe(ht, --Te) : 0, bt--, ye === 10 && (bt = 1, Nn--), ye;
}
function Pe() {
  return ye = Te < Oo ? xe(ht, Te++) : 0, bt++, ye === 10 && (bt = 1, Nn++), ye;
}
function Me() {
  return xe(ht, Te);
}
function sn() {
  return Te;
}
function Lt(e, t) {
  return Gt(ht, e, t);
}
function kt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function To(e) {
  return Nn = bt = 1, Oo = De(ht = e), Te = 0, [];
}
function Ro(e) {
  return ht = "", e;
}
function un(e) {
  return So(Lt(Te - 1, wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Il(e) {
  for (; (ye = Me()) && ye < 33; )
    Pe();
  return kt(e) > 2 || kt(ye) > 3 ? "" : " ";
}
function Cl(e, t) {
  for (; --t && Pe() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Lt(e, sn() + (t < 6 && Me() == 32 && Pe() == 32));
}
function wr(e) {
  for (; Pe(); )
    switch (ye) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wr(ye);
        break;
      case 40:
        e === 41 && wr(e);
        break;
      case 92:
        Pe();
        break;
    }
  return Te;
}
function Al(e, t) {
  for (; Pe() && e + ye !== 57; )
    if (e + ye === 84 && Me() === 47)
      break;
  return "/*" + Lt(t, Te - 1) + "*" + Pn(e === 47 ? e : Pe());
}
function xl(e) {
  for (; !kt(Me()); )
    Pe();
  return Lt(e, Te);
}
function El(e) {
  return Ro(cn("", null, null, null, [""], e = To(e), 0, [0], e));
}
function cn(e, t, r, a, n, i, o, u, s) {
  for (var c = 0, l = 0, f = o, m = 0, g = 0, y = 0, p = 1, b = 1, v = 1, I = 0, x = "", E = n, h = i, P = a, T = x; b; )
    switch (y = I, I = Pe()) {
      case 40:
        if (y != 108 && xe(T, f - 1) == 58) {
          Er(T += se(un(I), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += un(I);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Il(y);
        break;
      case 92:
        T += Cl(sn() - 1, 7);
        continue;
      case 47:
        switch (Me()) {
          case 42:
          case 47:
            qt(wl(Al(Pe(), sn()), t, r), s);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * p:
        u[c++] = De(T) * v;
      case 125 * p:
      case 59:
      case 0:
        switch (I) {
          case 0:
          case 125:
            b = 0;
          case 59 + l:
            v == -1 && (T = se(T, /\f/g, "")), g > 0 && De(T) - f && qt(g > 32 ? ci(T + ";", a, r, f - 1) : ci(se(T, " ", "") + ";", a, r, f - 2), s);
            break;
          case 59:
            T += ";";
          default:
            if (qt(P = ui(T, t, r, c, l, n, u, x, E = [], h = [], f), i), I === 123)
              if (l === 0)
                cn(T, t, P, P, E, i, f, u, h);
              else
                switch (m === 99 && xe(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cn(e, P, P, a && qt(ui(e, P, P, 0, 0, n, u, x, n, E = [], f), h), n, h, f, u, a ? E : h);
                    break;
                  default:
                    cn(T, P, P, P, [""], h, 0, u, h);
                }
        }
        c = l = g = 0, p = v = 1, x = T = "", f = o;
        break;
      case 58:
        f = 1 + De(T), g = y;
      default:
        if (p < 1) {
          if (I == 123)
            --p;
          else if (I == 125 && p++ == 0 && yl() == 125)
            continue;
        }
        switch (T += Pn(I), I * p) {
          case 38:
            v = l > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            u[c++] = (De(T) - 1) * v, v = 1;
            break;
          case 64:
            Me() === 45 && (T += un(Pe())), m = Me(), l = f = De(x = T += xl(sn())), I++;
            break;
          case 45:
            y === 45 && De(T) == 2 && (p = 0);
        }
    }
  return i;
}
function ui(e, t, r, a, n, i, o, u, s, c, l) {
  for (var f = n - 1, m = n === 0 ? i : [""], g = $r(m), y = 0, p = 0, b = 0; y < a; ++y)
    for (var v = 0, I = Gt(e, f + 1, f = ml(p = o[y])), x = e; v < g; ++v)
      (x = So(p > 0 ? m[v] + " " + I : se(I, /&\f/g, m[v]))) && (s[b++] = x);
  return Fn(e, t, r, n === 0 ? Jr : u, s, c, l);
}
function wl(e, t, r) {
  return Fn(e, t, r, _r, Pn(hl()), Gt(e, 2, -2), 0);
}
function ci(e, t, r, a) {
  return Fn(e, t, r, Ur, Gt(e, 0, a), Gt(e, a + 1, -1), a);
}
function gt(e, t) {
  for (var r = "", a = $r(e), n = 0; n < a; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Sl(e, t, r, a) {
  switch (e.type) {
    case dl:
      if (e.children.length)
        break;
    case fl:
    case Ur:
      return e.return = e.return || e.value;
    case _r:
      return "";
    case wo:
      return e.return = e.value + "{" + gt(e.children, a) + "}";
    case Jr:
      e.value = e.props.join(",");
  }
  return De(r = gt(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ol(e) {
  var t = $r(e);
  return function(r, a, n, i) {
    for (var o = "", u = 0; u < t; u++)
      o += e[u](r, a, n, i) || "";
    return o;
  };
}
function Tl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Rl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Pl = function(t, r, a) {
  for (var n = 0, i = 0; n = i, i = Me(), n === 38 && i === 12 && (r[a] = 1), !kt(i); )
    Pe();
  return Lt(t, Te);
}, Nl = function(t, r) {
  var a = -1, n = 44;
  do
    switch (kt(n)) {
      case 0:
        n === 38 && Me() === 12 && (r[a] = 1), t[a] += Pl(Te - 1, r, a);
        break;
      case 2:
        t[a] += un(n);
        break;
      case 4:
        if (n === 44) {
          t[++a] = Me() === 58 ? "&\f" : "", r[a] = t[a].length;
          break;
        }
      default:
        t[a] += Pn(n);
    }
  while (n = Pe());
  return t;
}, Fl = function(t, r) {
  return Ro(Nl(To(t), r));
}, li = /* @__PURE__ */ new WeakMap(), Gl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, a = t.parent, n = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !li.get(a)) && !n) {
      li.set(t, !0);
      for (var i = [], o = Fl(r, i), u = a.props, s = 0, c = 0; s < o.length; s++)
        for (var l = 0; l < u.length; l++, c++)
          t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
    }
  }
}, kl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Vl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Dl = function(t) {
  return t.type === "comm" && t.children.indexOf(Vl) > -1;
}, Bl = function(t) {
  return function(r, a, n) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var o = !!r.parent, u = o ? r.parent.children : (
          // global rule at the root level
          n
        ), s = u.length - 1; s >= 0; s--) {
          var c = u[s];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (Dl(c))
              return;
            break;
          }
        }
        i.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Po = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Wl = function(t, r) {
  for (var a = t - 1; a >= 0; a--)
    if (!Po(r[a]))
      return !0;
  return !1;
}, fi = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Ml = function(t, r, a) {
  Po(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), fi(t)) : Wl(r, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), fi(t)));
};
function No(e, t) {
  switch (pl(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + bn + e + Ee + e + e;
    case 6828:
    case 4268:
      return oe + e + Ee + e + e;
    case 6165:
      return oe + e + Ee + "flex-" + e + e;
    case 5187:
      return oe + e + se(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Ee + "flex-$1$2") + e;
    case 5443:
      return oe + e + Ee + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Ee + "flex-line-pack" + se(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Ee + se(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Ee + se(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + se(e, "-grow", "") + oe + e + Ee + se(e, "grow", "positive") + e;
    case 4554:
      return oe + se(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (De(e) - 1 - t > 6)
        switch (xe(e, t + 1)) {
          case 109:
            if (xe(e, t + 4) !== 45)
              break;
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + bn + (xe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Er(e, "stretch") ? No(se(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (xe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (xe(e, De(e) - 3 - (~Er(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + oe) + e;
        case 101:
          return se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (xe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + Ee + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xe(e, t + 11)) {
        case 114:
          return oe + e + Ee + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Ee + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Ee + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Ee + e + e;
  }
  return e;
}
var Ll = function(t, r, a, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ur:
        t.return = No(t.value, t.length);
        break;
      case wo:
        return gt([At(t, {
          value: se(t.value, "@", "@" + oe)
        })], n);
      case Jr:
        if (t.length)
          return vl(t.props, function(i) {
            switch (bl(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return gt([At(t, {
                  props: [se(i, /:(read-\w+)/, ":" + bn + "$1")]
                })], n);
              case "::placeholder":
                return gt([At(t, {
                  props: [se(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), At(t, {
                  props: [se(i, /:(plac\w+)/, ":" + bn + "$1")]
                }), At(t, {
                  props: [se(i, /:(plac\w+)/, Ee + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, Xl = [Ll], Zl = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(p) {
      var b = p.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var n = t.stylisPlugins || Xl;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, o, u = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var b = p.getAttribute("data-emotion").split(" "), v = 1; v < b.length; v++)
        i[b[v]] = !0;
      u.push(p);
    }
  );
  var s, c = [Gl, kl];
  process.env.NODE_ENV !== "production" && c.push(Bl({
    get compat() {
      return y.compat;
    }
  }), Ml);
  {
    var l, f = [Sl, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? l.insert(p.return) : p.value && p.type !== _r && l.insert(p.value + "{}"));
    } : Tl(function(p) {
      l.insert(p);
    })], m = Ol(c.concat(n, f)), g = function(b) {
      return gt(El(b), m);
    };
    s = function(b, v, I, x) {
      l = I, process.env.NODE_ENV !== "production" && v.map !== void 0 && (l = {
        insert: function(h) {
          I.insert(h + v.map);
        }
      }), g(b ? b + "{" + v.styles + "}" : v.styles), x && (y.inserted[v.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new ll({
      key: r,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: s
  };
  return y.sheet.hydrate(u), y;
}, Fo = Yr(), Hl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Go = {};
Go[Fo.ForwardRef] = Hl;
Go[Fo.Memo] = jl;
var Yl = !0;
function ko(e, t, r) {
  var a = "";
  return r.split(" ").forEach(function(n) {
    e[n] !== void 0 ? t.push(e[n] + ";") : a += n + " ";
  }), a;
}
var Qr = function(t, r, a) {
  var n = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Yl === !1) && t.registered[n] === void 0 && (t.registered[n] = r.styles);
}, Kr = function(t, r, a) {
  Qr(t, r, a);
  var n = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + n : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function zl(e) {
  for (var t = 0, r, a = 0, n = e.length; n >= 4; ++a, n -= 4)
    r = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(a) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var _l = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, di = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Jl = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ul = /[A-Z]|^ms/g, Vo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qr = function(t) {
  return t.charCodeAt(1) === 45;
}, mi = function(t) {
  return t != null && typeof t != "boolean";
}, Qn = /* @__PURE__ */ Rl(function(e) {
  return qr(e) ? e : e.replace(Ul, "-$&").toLowerCase();
}), vn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Vo, function(a, n, i) {
          return Ge = {
            name: n,
            styles: i,
            next: Ge
          }, n;
        });
  }
  return _l[t] !== 1 && !qr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var $l = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Ql = ["normal", "none", "initial", "inherit", "unset"], Kl = vn, ql = /^-ms-/, ef = /-(.)/g, gi = {};
  vn = function(t, r) {
    if (t === "content" && (typeof r != "string" || Ql.indexOf(r) === -1 && !$l.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var a = Kl(t, r);
    return a !== "" && !qr(t) && t.indexOf("-") !== -1 && gi[t] === void 0 && (gi[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(ql, "ms-").replace(ef, function(n, i) {
      return i.toUpperCase();
    }) + "?")), a;
  };
}
var Do = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Vt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Do);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ge = {
          name: r.name,
          styles: r.styles,
          next: Ge
        }, r.name;
      if (r.styles !== void 0) {
        var a = r.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ge = {
              name: a.name,
              styles: a.styles,
              next: Ge
            }, a = a.next;
        var n = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (n += r.map), n;
      }
      return tf(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ge, o = r(e);
        return Ge = i, Vt(e, t, o);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], s = r.replace(Vo, function(l, f, m) {
          var g = "animation" + u.length;
          return u.push("const " + g + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + s + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + s + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function tf(e, t, r) {
  var a = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      a += Vt(e, t, r[n]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object")
        t != null && t[o] !== void 0 ? a += i + "{" + t[o] + "}" : mi(o) && (a += Qn(i) + ":" + vn(i, o) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Do);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var u = 0; u < o.length; u++)
            mi(o[u]) && (a += Qn(i) + ":" + vn(i, o[u]) + ";");
        else {
          var s = Vt(e, t, o);
          switch (i) {
            case "animation":
            case "animationName": {
              a += Qn(i) + ":" + s + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Jl), a += i + "{" + s + "}";
          }
        }
      }
    }
  return a;
}
var pi = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Bo;
process.env.NODE_ENV !== "production" && (Bo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ge, Dt = function(t, r, a) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var n = !0, i = "";
  Ge = void 0;
  var o = t[0];
  o == null || o.raw === void 0 ? (n = !1, i += Vt(a, r, o)) : (process.env.NODE_ENV !== "production" && o[0] === void 0 && console.error(di), i += o[0]);
  for (var u = 1; u < t.length; u++)
    i += Vt(a, r, t[u]), n && (process.env.NODE_ENV !== "production" && o[u] === void 0 && console.error(di), i += o[u]);
  var s;
  process.env.NODE_ENV !== "production" && (i = i.replace(Bo, function(m) {
    return s = m, "";
  })), pi.lastIndex = 0;
  for (var c = "", l; (l = pi.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var f = zl(i) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: i,
    map: s,
    next: Ge,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: i,
    next: Ge
  };
}, nf = function(t) {
  return t();
}, Wo = Z.useInsertionEffect ? Z.useInsertionEffect : !1, Mo = Wo || nf, bi = Wo || Z.useLayoutEffect, ea = {}.hasOwnProperty, ta = /* @__PURE__ */ Z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Zl({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ta.displayName = "EmotionCacheContext");
ta.Provider;
var na = function(t) {
  return /* @__PURE__ */ Hi(function(r, a) {
    var n = ji(ta);
    return t(r, n, a);
  });
}, Gn = /* @__PURE__ */ Z.createContext({});
process.env.NODE_ENV !== "production" && (Gn.displayName = "EmotionThemeContext");
var hi = function(t) {
  var r = t.split(".");
  return r[r.length - 1];
}, rf = function(t) {
  var r = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(t);
  if (r || (r = /^([A-Za-z0-9$.]+)@/.exec(t), r))
    return hi(r[1]);
}, af = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), of = function(t) {
  return t.replace(/\$/g, "-");
}, sf = function(t) {
  if (t)
    for (var r = t.split(`
`), a = 0; a < r.length; a++) {
      var n = rf(r[a]);
      if (n) {
        if (af.has(n))
          break;
        if (/^[A-Z]/.test(n))
          return of(n);
      }
    }
}, Sr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Or = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", uf = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof r.css == "string" && // check if there is a css declaration
  r.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + r.css + "`");
  var a = {};
  for (var n in r)
    ea.call(r, n) && (a[n] = r[n]);
  if (a[Sr] = t, process.env.NODE_ENV !== "production" && r.css && (typeof r.css != "object" || typeof r.css.name != "string" || r.css.name.indexOf("-") === -1)) {
    var i = sf(new Error().stack);
    i && (a[Or] = i);
  }
  return a;
}, cf = function(t) {
  var r = t.cache, a = t.serialized, n = t.isStringTag;
  return Qr(r, a, n), Mo(function() {
    return Kr(r, a, n);
  }), null;
}, Lo = /* @__PURE__ */ na(function(e, t, r) {
  var a = e.css;
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var n = e[Sr], i = [a], o = "";
  typeof e.className == "string" ? o = ko(t.registered, i, e.className) : e.className != null && (o = e.className + " ");
  var u = Dt(i, void 0, Z.useContext(Gn));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var s = e[Or];
    s && (u = Dt([u, "label:" + s + ";"]));
  }
  o += t.key + "-" + u.name;
  var c = {};
  for (var l in e)
    ea.call(e, l) && l !== "css" && l !== Sr && (process.env.NODE_ENV === "production" || l !== Or) && (c[l] = e[l]);
  return c.ref = r, c.className = o, /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(cf, {
    cache: t,
    serialized: u,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ Z.createElement(n, c));
});
process.env.NODE_ENV !== "production" && (Lo.displayName = "EmotionCssPropInternal");
var lf = Lo, ff = {
  name: "@emotion/react",
  version: "11.11.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, B = function(t, r) {
  var a = arguments;
  if (r == null || !ea.call(r, "css"))
    return Z.createElement.apply(void 0, a);
  var n = a.length, i = new Array(n);
  i[0] = lf, i[1] = uf(t, r);
  for (var o = 2; o < n; o++)
    i[o] = a[o];
  return Z.createElement.apply(null, i);
}, yi = !1, df = /* @__PURE__ */ na(function(e, t) {
  process.env.NODE_ENV !== "production" && !yi && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), yi = !0);
  var r = e.styles, a = Dt([r], void 0, Z.useContext(Gn)), n = Z.useRef();
  return bi(function() {
    var i = t.key + "-global", o = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + a.name + '"]');
    return t.sheet.tags.length && (o.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), o.hydrate([s])), n.current = [o, u], function() {
      o.flush();
    };
  }, [t]), bi(function() {
    var i = n.current, o = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (a.next !== void 0 && Kr(t, a.next, !0), o.tags.length) {
      var s = o.tags[o.tags.length - 1].nextElementSibling;
      o.before = s, o.flush();
    }
    t.insert("", a, o, !1);
  }, [t, a.name]), null;
});
process.env.NODE_ENV !== "production" && (df.displayName = "EmotionGlobal");
function ra() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Dt(t);
}
var mf = function() {
  var t = ra.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, gf = function e(t) {
  for (var r = t.length, a = 0, n = ""; a < r; a++) {
    var i = t[a];
    if (i != null) {
      var o = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            o = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), o = "";
            for (var u in i)
              i[u] && u && (o && (o += " "), o += u);
          }
          break;
        }
        default:
          o = i;
      }
      o && (n && (n += " "), n += o);
    }
  }
  return n;
};
function pf(e, t, r) {
  var a = [], n = ko(e, a, r);
  return a.length < 2 ? r : n + t(a);
}
var bf = function(t) {
  var r = t.cache, a = t.serializedArr;
  return Mo(function() {
    for (var n = 0; n < a.length; n++)
      Kr(r, a[n], !1);
  }), null;
}, vf = /* @__PURE__ */ na(function(e, t) {
  var r = !1, a = [], n = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    var m = Dt(l, t.registered);
    return a.push(m), Qr(t, m, !1), t.key + "-" + m.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    return pf(t.registered, n, gf(l));
  }, o = {
    css: n,
    cx: i,
    theme: Z.useContext(Gn)
  }, u = e.children(o);
  return r = !0, /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(bf, {
    cache: t,
    serializedArr: a
  }), u);
});
process.env.NODE_ENV !== "production" && (vf.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Ii = !0, hf = typeof jest < "u" || typeof vi < "u";
  if (Ii && !hf) {
    var Ci = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Ii ? window : global
    ), Ai = "__EMOTION_REACT_" + ff.version.split(".")[0] + "__";
    Ci[Ai] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ci[Ai] = !0;
  }
}
function yf(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const If = Math.min, Cf = Math.max, hn = Math.round, en = Math.floor, yn = (e) => ({
  x: e,
  y: e
});
function Af(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Xo(e) {
  return Ho(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zo(e) {
  var t;
  return (t = (Ho(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ho(e) {
  return e instanceof Node || e instanceof Ve(e).Node;
}
function Tr(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
function aa(e) {
  return e instanceof HTMLElement || e instanceof Ve(e).HTMLElement;
}
function xi(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function jo(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: a,
    display: n
  } = ia(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !["inline", "contents"].includes(n);
}
function xf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ef(e) {
  return ["html", "body", "#document"].includes(Xo(e));
}
function ia(e) {
  return Ve(e).getComputedStyle(e);
}
function wf(e) {
  if (Xo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    xi(e) && e.host || // Fallback.
    Zo(e)
  );
  return xi(t) ? t.host : t;
}
function Yo(e) {
  const t = wf(e);
  return Ef(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : aa(t) && jo(t) ? t : Yo(t);
}
function In(e, t, r) {
  var a;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const n = Yo(e), i = n === ((a = e.ownerDocument) == null ? void 0 : a.body), o = Ve(n);
  return i ? t.concat(o, o.visualViewport || [], jo(n) ? n : [], o.frameElement && r ? In(o.frameElement) : []) : t.concat(n, In(n, [], r));
}
function Sf(e) {
  const t = ia(e);
  let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const n = aa(e), i = n ? e.offsetWidth : r, o = n ? e.offsetHeight : a, u = hn(r) !== i || hn(a) !== o;
  return u && (r = i, a = o), {
    width: r,
    height: a,
    $: u
  };
}
function oa(e) {
  return Tr(e) ? e : e.contextElement;
}
function Kn(e) {
  const t = oa(e);
  if (!aa(t))
    return yn(1);
  const r = t.getBoundingClientRect(), {
    width: a,
    height: n,
    $: i
  } = Sf(t);
  let o = (i ? hn(r.width) : r.width) / a, u = (i ? hn(r.height) : r.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: o,
    y: u
  };
}
const Of = /* @__PURE__ */ yn(0);
function Tf(e) {
  const t = Ve(e);
  return !xf() || !t.visualViewport ? Of : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Rf(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ve(e) ? !1 : t;
}
function Ei(e, t, r, a) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = oa(e);
  let o = yn(1);
  t && (a ? Tr(a) && (o = Kn(a)) : o = Kn(e));
  const u = Rf(i, r, a) ? Tf(i) : yn(0);
  let s = (n.left + u.x) / o.x, c = (n.top + u.y) / o.y, l = n.width / o.x, f = n.height / o.y;
  if (i) {
    const m = Ve(i), g = a && Tr(a) ? Ve(a) : a;
    let y = m.frameElement;
    for (; y && a && g !== m; ) {
      const p = Kn(y), b = y.getBoundingClientRect(), v = ia(y), I = b.left + (y.clientLeft + parseFloat(v.paddingLeft)) * p.x, x = b.top + (y.clientTop + parseFloat(v.paddingTop)) * p.y;
      s *= p.x, c *= p.y, l *= p.x, f *= p.y, s += I, c += x, y = Ve(y).frameElement;
    }
  }
  return Af({
    width: l,
    height: f,
    x: s,
    y: c
  });
}
function Pf(e, t) {
  let r = null, a;
  const n = Zo(e);
  function i() {
    clearTimeout(a), r && r.disconnect(), r = null;
  }
  function o(u, s) {
    u === void 0 && (u = !1), s === void 0 && (s = 1), i();
    const {
      left: c,
      top: l,
      width: f,
      height: m
    } = e.getBoundingClientRect();
    if (u || t(), !f || !m)
      return;
    const g = en(l), y = en(n.clientWidth - (c + f)), p = en(n.clientHeight - (l + m)), b = en(c), I = {
      rootMargin: -g + "px " + -y + "px " + -p + "px " + -b + "px",
      threshold: Cf(0, If(1, s)) || 1
    };
    let x = !0;
    function E(h) {
      const P = h[0].intersectionRatio;
      if (P !== s) {
        if (!x)
          return o();
        P ? o(!1, P) : a = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...I,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, I);
    }
    r.observe(e);
  }
  return o(!0), i;
}
function Nf(e, t, r, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = a, c = oa(e), l = n || i ? [...c ? In(c) : [], ...In(t)] : [];
  l.forEach((v) => {
    n && v.addEventListener("scroll", r, {
      passive: !0
    }), i && v.addEventListener("resize", r);
  });
  const f = c && u ? Pf(c, r) : null;
  let m = -1, g = null;
  o && (g = new ResizeObserver((v) => {
    let [I] = v;
    I && I.target === c && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      g && g.observe(t);
    })), r();
  }), c && !s && g.observe(c), g.observe(t));
  let y, p = s ? Ei(e) : null;
  s && b();
  function b() {
    const v = Ei(e);
    p && (v.x !== p.x || v.y !== p.y || v.width !== p.width || v.height !== p.height) && r(), p = v, y = requestAnimationFrame(b);
  }
  return r(), () => {
    l.forEach((v) => {
      n && v.removeEventListener("scroll", r), i && v.removeEventListener("resize", r);
    }), f && f(), g && g.disconnect(), g = null, s && cancelAnimationFrame(y);
  };
}
var Rr = ks, Ff = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Cn = function() {
};
function Gf(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function kf(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    a[n - 2] = arguments[n];
  var i = [].concat(a);
  if (t && e)
    for (var o in t)
      t.hasOwnProperty(o) && t[o] && i.push("".concat(Gf(e, o)));
  return i.filter(function(u) {
    return u;
  }).map(function(u) {
    return String(u).trim();
  }).join(" ");
}
var wi = function(t) {
  return Hf(t) ? t.filter(Boolean) : it(t) === "object" && t !== null ? [t] : [];
}, zo = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = Je(t, Ff);
  return M({}, r);
}, be = function(t, r, a) {
  var n = t.cx, i = t.getStyles, o = t.getClassNames, u = t.className;
  return {
    css: i(r, t),
    className: n(a ?? {}, o(r, t), u)
  };
};
function kn(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Vf(e) {
  return kn(e) ? window.innerHeight : e.clientHeight;
}
function _o(e) {
  return kn(e) ? window.pageYOffset : e.scrollTop;
}
function An(e, t) {
  if (kn(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Df(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", a = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var n = e; n = n.parentElement; )
    if (t = getComputedStyle(n), !(r && t.position === "static") && a.test(t.overflow + t.overflowY + t.overflowX))
      return n;
  return document.documentElement;
}
function Bf(e, t, r, a) {
  return r * ((e = e / a - 1) * e * e + 1) + t;
}
function tn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Cn, n = _o(e), i = t - n, o = 10, u = 0;
  function s() {
    u += o;
    var c = Bf(u, n, i, r);
    An(e, c), u < r ? window.requestAnimationFrame(s) : a(e);
  }
  s();
}
function Si(e, t) {
  var r = e.getBoundingClientRect(), a = t.getBoundingClientRect(), n = t.offsetHeight / 3;
  a.bottom + n > r.bottom ? An(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + n, e.scrollHeight)) : a.top - n < r.top && An(e, Math.max(t.offsetTop - n, 0));
}
function Wf(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function Oi() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Mf() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Jo = !1, Lf = {
  get passive() {
    return Jo = !0;
  }
}, nn = typeof window < "u" ? window : {};
nn.addEventListener && nn.removeEventListener && (nn.addEventListener("p", Cn, Lf), nn.removeEventListener("p", Cn, !1));
var Xf = Jo;
function Zf(e) {
  return e != null;
}
function Hf(e) {
  return Array.isArray(e);
}
function rn(e, t, r) {
  return e ? t : r;
}
var jf = function(t) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    a[n - 1] = arguments[n];
  var i = Object.entries(t).filter(function(o) {
    var u = He(o, 1), s = u[0];
    return !a.includes(s);
  });
  return i.reduce(function(o, u) {
    var s = He(u, 2), c = s[0], l = s[1];
    return o[c] = l, o;
  }, {});
}, Yf = ["children", "innerProps"], zf = ["children", "innerProps"];
function _f(e) {
  var t = e.maxHeight, r = e.menuEl, a = e.minHeight, n = e.placement, i = e.shouldScroll, o = e.isFixedPosition, u = e.controlHeight, s = Df(r), c = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent)
    return c;
  var l = s.getBoundingClientRect(), f = l.height, m = r.getBoundingClientRect(), g = m.bottom, y = m.height, p = m.top, b = r.offsetParent.getBoundingClientRect(), v = b.top, I = o ? window.innerHeight : Vf(s), x = _o(s), E = parseInt(getComputedStyle(r).marginBottom, 10), h = parseInt(getComputedStyle(r).marginTop, 10), P = v - h, T = I - p, G = P + x, J = f - x - p, H = g - I + x + E, k = x + p - h, q = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (T >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (J >= y && !o)
        return i && tn(s, H, q), {
          placement: "bottom",
          maxHeight: t
        };
      if (!o && J >= a || o && T >= a) {
        i && tn(s, H, q);
        var te = o ? T - E : J - E;
        return {
          placement: "bottom",
          maxHeight: te
        };
      }
      if (n === "auto" || o) {
        var le = t, re = o ? P : G;
        return re >= a && (le = Math.min(re - E - u, t)), {
          placement: "top",
          maxHeight: le
        };
      }
      if (n === "bottom")
        return i && An(s, H), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= y)
        return {
          placement: "top",
          maxHeight: t
        };
      if (G >= y && !o)
        return i && tn(s, k, q), {
          placement: "top",
          maxHeight: t
        };
      if (!o && G >= a || o && P >= a) {
        var z = t;
        return (!o && G >= a || o && P >= a) && (z = o ? P - h : G - h), i && tn(s, k, q), {
          placement: "top",
          maxHeight: z
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return c;
}
function Jf(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Uo = function(t) {
  return t === "auto" ? "bottom" : t;
}, Uf = function(t, r) {
  var a, n = t.placement, i = t.theme, o = i.borderRadius, u = i.spacing, s = i.colors;
  return M((a = {
    label: "menu"
  }, wt(a, Jf(n), "100%"), wt(a, "position", "absolute"), wt(a, "width", "100%"), wt(a, "zIndex", 1), a), r ? {} : {
    backgroundColor: s.neutral0,
    borderRadius: o,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: u.menuGutter,
    marginTop: u.menuGutter
  });
}, $o = /* @__PURE__ */ Vs(null), $f = function(t) {
  var r = t.children, a = t.minMenuHeight, n = t.maxMenuHeight, i = t.menuPlacement, o = t.menuPosition, u = t.menuShouldScrollIntoView, s = t.theme, c = ji($o) || {}, l = c.setPortalPlacement, f = Be(null), m = Re(n), g = He(m, 2), y = g[0], p = g[1], b = Re(null), v = He(b, 2), I = v[0], x = v[1], E = s.spacing.controlHeight;
  return Rr(function() {
    var h = f.current;
    if (h) {
      var P = o === "fixed", T = u && !P, G = _f({
        maxHeight: n,
        menuEl: h,
        minHeight: a,
        placement: i,
        shouldScroll: T,
        isFixedPosition: P,
        controlHeight: E
      });
      p(G.maxHeight), x(G.placement), l == null || l(G.placement);
    }
  }, [n, i, o, u, a, l, E]), r({
    ref: f,
    placerProps: M(M({}, t), {}, {
      placement: I || Uo(i),
      maxHeight: y
    })
  });
}, Qf = function(t) {
  var r = t.children, a = t.innerRef, n = t.innerProps;
  return B("div", L({}, be(t, "menu", {
    menu: !0
  }), {
    ref: a
  }, n), r);
}, Kf = Qf, qf = function(t, r) {
  var a = t.maxHeight, n = t.theme.spacing.baseUnit;
  return M({
    maxHeight: a,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, ed = function(t) {
  var r = t.children, a = t.innerProps, n = t.innerRef, i = t.isMulti;
  return B("div", L({}, be(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: n
  }, a), r);
}, Qo = function(t, r) {
  var a = t.theme, n = a.spacing.baseUnit, i = a.colors;
  return M({
    textAlign: "center"
  }, r ? {} : {
    color: i.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, td = Qo, nd = Qo, rd = function(t) {
  var r = t.children, a = r === void 0 ? "No options" : r, n = t.innerProps, i = Je(t, Yf);
  return B("div", L({}, be(M(M({}, i), {}, {
    children: a,
    innerProps: n
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), n), a);
}, ad = function(t) {
  var r = t.children, a = r === void 0 ? "Loading..." : r, n = t.innerProps, i = Je(t, zf);
  return B("div", L({}, be(M(M({}, i), {}, {
    children: a,
    innerProps: n
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), n), a);
}, id = function(t) {
  var r = t.rect, a = t.offset, n = t.position;
  return {
    left: r.left,
    position: n,
    top: a,
    width: r.width,
    zIndex: 1
  };
}, od = function(t) {
  var r = t.appendTo, a = t.children, n = t.controlElement, i = t.innerProps, o = t.menuPlacement, u = t.menuPosition, s = Be(null), c = Be(null), l = Re(Uo(o)), f = He(l, 2), m = f[0], g = f[1], y = ct(function() {
    return {
      setPortalPlacement: g
    };
  }, []), p = Re(null), b = He(p, 2), v = b[0], I = b[1], x = Se(function() {
    if (n) {
      var T = Wf(n), G = u === "fixed" ? 0 : window.pageYOffset, J = T[m] + G;
      (J !== (v == null ? void 0 : v.offset) || T.left !== (v == null ? void 0 : v.rect.left) || T.width !== (v == null ? void 0 : v.rect.width)) && I({
        offset: J,
        rect: T
      });
    }
  }, [n, u, m, v == null ? void 0 : v.offset, v == null ? void 0 : v.rect.left, v == null ? void 0 : v.rect.width]);
  Rr(function() {
    x();
  }, [x]);
  var E = Se(function() {
    typeof c.current == "function" && (c.current(), c.current = null), n && s.current && (c.current = Nf(n, s.current, x, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, x]);
  Rr(function() {
    E();
  }, [E]);
  var h = Se(function(T) {
    s.current = T, E();
  }, [E]);
  if (!r && u !== "fixed" || !v)
    return null;
  var P = B("div", L({
    ref: h
  }, be(M(M({}, t), {}, {
    offset: v.offset,
    position: u,
    rect: v.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), a);
  return B($o.Provider, {
    value: y
  }, r ? /* @__PURE__ */ Bs(P, r) : P);
}, sd = function(t) {
  var r = t.isDisabled, a = t.isRtl;
  return {
    label: "container",
    direction: a ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, ud = function(t) {
  var r = t.children, a = t.innerProps, n = t.isDisabled, i = t.isRtl;
  return B("div", L({}, be(t, "container", {
    "--is-disabled": n,
    "--is-rtl": i
  }), a), r);
}, cd = function(t, r) {
  var a = t.theme.spacing, n = t.isMulti, i = t.hasValue, o = t.selectProps.controlShouldRenderValue;
  return M({
    alignItems: "center",
    display: n && i && o ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(a.baseUnit / 2, "px ").concat(a.baseUnit * 2, "px")
  });
}, ld = function(t) {
  var r = t.children, a = t.innerProps, n = t.isMulti, i = t.hasValue;
  return B("div", L({}, be(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": i
  }), a), r);
}, fd = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, dd = function(t) {
  var r = t.children, a = t.innerProps;
  return B("div", L({}, be(t, "indicatorsContainer", {
    indicators: !0
  }), a), r);
}, Ti, md = ["size"], gd = ["innerProps", "isRtl", "size"];
function pd() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var bd = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
  toString: pd
}, Ko = function(t) {
  var r = t.size, a = Je(t, md);
  return B("svg", L({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: bd
  }, a));
}, sa = function(t) {
  return B(Ko, L({
    size: 20
  }, t), B("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, qo = function(t) {
  return B(Ko, L({
    size: 20
  }, t), B("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, es = function(t, r) {
  var a = t.isFocused, n = t.theme, i = n.spacing.baseUnit, o = n.colors;
  return M({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: a ? o.neutral60 : o.neutral20,
    padding: i * 2,
    ":hover": {
      color: a ? o.neutral80 : o.neutral40
    }
  });
}, vd = es, hd = function(t) {
  var r = t.children, a = t.innerProps;
  return B("div", L({}, be(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), a), r || B(qo, null));
}, yd = es, Id = function(t) {
  var r = t.children, a = t.innerProps;
  return B("div", L({}, be(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), a), r || B(sa, null));
}, Cd = function(t, r) {
  var a = t.isDisabled, n = t.theme, i = n.spacing.baseUnit, o = n.colors;
  return M({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: a ? o.neutral10 : o.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, Ad = function(t) {
  var r = t.innerProps;
  return B("span", L({}, r, be(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, xd = mf(Ti || (Ti = yf([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), Ed = function(t, r) {
  var a = t.isFocused, n = t.size, i = t.theme, o = i.colors, u = i.spacing.baseUnit;
  return M({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: a ? o.neutral60 : o.neutral20,
    padding: u * 2
  });
}, qn = function(t) {
  var r = t.delay, a = t.offset;
  return B("span", {
    css: /* @__PURE__ */ ra({
      animation: "".concat(xd, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: a ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
  });
}, wd = function(t) {
  var r = t.innerProps, a = t.isRtl, n = t.size, i = n === void 0 ? 4 : n, o = Je(t, gd);
  return B("div", L({}, be(M(M({}, o), {}, {
    innerProps: r,
    isRtl: a,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), B(qn, {
    delay: 0,
    offset: a
  }), B(qn, {
    delay: 160,
    offset: !0
  }), B(qn, {
    delay: 320,
    offset: !a
  }));
}, Sd = function(t, r) {
  var a = t.isDisabled, n = t.isFocused, i = t.theme, o = i.colors, u = i.borderRadius, s = i.spacing;
  return M({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: s.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: a ? o.neutral5 : o.neutral0,
    borderColor: a ? o.neutral10 : n ? o.primary : o.neutral20,
    borderRadius: u,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(o.primary) : void 0,
    "&:hover": {
      borderColor: n ? o.primary : o.neutral30
    }
  });
}, Od = function(t) {
  var r = t.children, a = t.isDisabled, n = t.isFocused, i = t.innerRef, o = t.innerProps, u = t.menuIsOpen;
  return B("div", L({
    ref: i
  }, be(t, "control", {
    control: !0,
    "control--is-disabled": a,
    "control--is-focused": n,
    "control--menu-is-open": u
  }), o, {
    "aria-disabled": a || void 0
  }), r);
}, Td = Od, Rd = ["data"], Pd = function(t, r) {
  var a = t.theme.spacing;
  return r ? {} : {
    paddingBottom: a.baseUnit * 2,
    paddingTop: a.baseUnit * 2
  };
}, Nd = function(t) {
  var r = t.children, a = t.cx, n = t.getStyles, i = t.getClassNames, o = t.Heading, u = t.headingProps, s = t.innerProps, c = t.label, l = t.theme, f = t.selectProps;
  return B("div", L({}, be(t, "group", {
    group: !0
  }), s), B(o, L({}, u, {
    selectProps: f,
    theme: l,
    getStyles: n,
    getClassNames: i,
    cx: a
  }), c), B("div", null, r));
}, Fd = function(t, r) {
  var a = t.theme, n = a.colors, i = a.spacing;
  return M({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Gd = function(t) {
  var r = zo(t);
  r.data;
  var a = Je(r, Rd);
  return B("div", L({}, be(t, "groupHeading", {
    "group-heading": !0
  }), a));
}, kd = Nd, Vd = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Dd = function(t, r) {
  var a = t.isDisabled, n = t.value, i = t.theme, o = i.spacing, u = i.colors;
  return M(M({
    visibility: a ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, Bd), r ? {} : {
    margin: o.baseUnit / 2,
    paddingBottom: o.baseUnit / 2,
    paddingTop: o.baseUnit / 2,
    color: u.neutral80
  });
}, ts = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Bd = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": M({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, ts)
}, Wd = function(t) {
  return M({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, ts);
}, Md = function(t) {
  var r = t.cx, a = t.value, n = zo(t), i = n.innerRef, o = n.isDisabled, u = n.isHidden, s = n.inputClassName, c = Je(n, Vd);
  return B("div", L({}, be(t, "input", {
    "input-container": !0
  }), {
    "data-value": a || ""
  }), B("input", L({
    className: r({
      input: !0
    }, s),
    ref: i,
    style: Wd(u),
    disabled: o
  }, c)));
}, Ld = Md, Xd = function(t, r) {
  var a = t.theme, n = a.spacing, i = a.borderRadius, o = a.colors;
  return M({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: o.neutral10,
    borderRadius: i / 2,
    margin: n.baseUnit / 2
  });
}, Zd = function(t, r) {
  var a = t.theme, n = a.borderRadius, i = a.colors, o = t.cropWithEllipsis;
  return M({
    overflow: "hidden",
    textOverflow: o || o === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: n / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, Hd = function(t, r) {
  var a = t.theme, n = a.spacing, i = a.borderRadius, o = a.colors, u = t.isFocused;
  return M({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: i / 2,
    backgroundColor: u ? o.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: o.dangerLight,
      color: o.danger
    }
  });
}, ns = function(t) {
  var r = t.children, a = t.innerProps;
  return B("div", a, r);
}, jd = ns, Yd = ns;
function zd(e) {
  var t = e.children, r = e.innerProps;
  return B("div", L({
    role: "button"
  }, r), t || B(sa, {
    size: 14
  }));
}
var _d = function(t) {
  var r = t.children, a = t.components, n = t.data, i = t.innerProps, o = t.isDisabled, u = t.removeProps, s = t.selectProps, c = a.Container, l = a.Label, f = a.Remove;
  return B(c, {
    data: n,
    innerProps: M(M({}, be(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": o
    })), i),
    selectProps: s
  }, B(l, {
    data: n,
    innerProps: M({}, be(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: s
  }, r), B(f, {
    data: n,
    innerProps: M(M({}, be(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, u),
    selectProps: s
  }));
}, Jd = _d, Ud = function(t, r) {
  var a = t.isDisabled, n = t.isFocused, i = t.isSelected, o = t.theme, u = o.spacing, s = o.colors;
  return M({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: i ? s.primary : n ? s.primary25 : "transparent",
    color: a ? s.neutral20 : i ? s.neutral0 : "inherit",
    padding: "".concat(u.baseUnit * 2, "px ").concat(u.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: a ? void 0 : i ? s.primary : s.primary50
    }
  });
}, $d = function(t) {
  var r = t.children, a = t.isDisabled, n = t.isFocused, i = t.isSelected, o = t.innerRef, u = t.innerProps;
  return B("div", L({}, be(t, "option", {
    option: !0,
    "option--is-disabled": a,
    "option--is-focused": n,
    "option--is-selected": i
  }), {
    ref: o,
    "aria-disabled": a
  }, u), r);
}, Qd = $d, Kd = function(t, r) {
  var a = t.theme, n = a.spacing, i = a.colors;
  return M({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: i.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, qd = function(t) {
  var r = t.children, a = t.innerProps;
  return B("div", L({}, be(t, "placeholder", {
    placeholder: !0
  }), a), r);
}, em = qd, tm = function(t, r) {
  var a = t.isDisabled, n = t.theme, i = n.spacing, o = n.colors;
  return M({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: a ? o.neutral40 : o.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, nm = function(t) {
  var r = t.children, a = t.isDisabled, n = t.innerProps;
  return B("div", L({}, be(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": a
  }), n), r);
}, rm = nm, am = {
  ClearIndicator: Id,
  Control: Td,
  DropdownIndicator: hd,
  DownChevron: qo,
  CrossIcon: sa,
  Group: kd,
  GroupHeading: Gd,
  IndicatorsContainer: dd,
  IndicatorSeparator: Ad,
  Input: Ld,
  LoadingIndicator: wd,
  Menu: Kf,
  MenuList: ed,
  MenuPortal: od,
  LoadingMessage: ad,
  NoOptionsMessage: rd,
  MultiValue: Jd,
  MultiValueContainer: jd,
  MultiValueLabel: Yd,
  MultiValueRemove: zd,
  Option: Qd,
  Placeholder: em,
  SelectContainer: ud,
  SingleValue: rm,
  ValueContainer: ld
}, im = function(t) {
  return M(M({}, am), t.components);
}, Ri = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function om(e, t) {
  return !!(e === t || Ri(e) && Ri(t));
}
function sm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!om(e[r], t[r]))
      return !1;
  return !0;
}
function um(e, t) {
  t === void 0 && (t = sm);
  var r = null;
  function a() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var o = e.apply(this, n);
    return r = {
      lastResult: o,
      lastArgs: n,
      lastThis: this
    }, o;
  }
  return a.clear = function() {
    r = null;
  }, a;
}
function cm() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var lm = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: cm
}, fm = function(t) {
  return B("span", L({
    css: lm
  }, t));
}, Pi = fm, dm = {
  guidance: function(t) {
    var r = t.isSearchable, a = t.isMulti, n = t.tabSelectsValue, i = t.context, o = t.isInitialFocus;
    switch (i) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return o ? "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(a ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, a = t.label, n = a === void 0 ? "" : a, i = t.labels, o = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return o ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, a = t.focused, n = t.options, i = t.label, o = i === void 0 ? "" : i, u = t.selectValue, s = t.isDisabled, c = t.isSelected, l = t.isAppleDevice, f = function(p, b) {
      return p && p.length ? "".concat(p.indexOf(b) + 1, " of ").concat(p.length) : "";
    };
    if (r === "value" && u)
      return "value ".concat(o, " focused, ").concat(f(u, a), ".");
    if (r === "menu" && l) {
      var m = s ? " disabled" : "", g = "".concat(c ? " selected" : "").concat(m);
      return "".concat(o).concat(g, ", ").concat(f(n, a), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, a = t.resultsMessage;
    return "".concat(a).concat(r ? " for search term " + r : "", ".");
  }
}, mm = function(t) {
  var r = t.ariaSelection, a = t.focusedOption, n = t.focusedValue, i = t.focusableOptions, o = t.isFocused, u = t.selectValue, s = t.selectProps, c = t.id, l = t.isAppleDevice, f = s.ariaLiveMessages, m = s.getOptionLabel, g = s.inputValue, y = s.isMulti, p = s.isOptionDisabled, b = s.isSearchable, v = s.menuIsOpen, I = s.options, x = s.screenReaderStatus, E = s.tabSelectsValue, h = s.isLoading, P = s["aria-label"], T = s["aria-live"], G = ct(function() {
    return M(M({}, dm), f || {});
  }, [f]), J = ct(function() {
    var re = "";
    if (r && G.onChange) {
      var z = r.option, ge = r.options, ne = r.removedValue, Ie = r.removedValues, C = r.value, S = function(j) {
        return Array.isArray(j) ? null : j;
      }, N = ne || z || S(C), V = N ? m(N) : "", W = ge || Ie || void 0, _ = W ? W.map(m) : [], D = M({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: N && p(N, u),
        label: V,
        labels: _
      }, r);
      re = G.onChange(D);
    }
    return re;
  }, [r, G, p, u, m]), H = ct(function() {
    var re = "", z = a || n, ge = !!(a && u && u.includes(a));
    if (z && G.onFocus) {
      var ne = {
        focused: z,
        label: m(z),
        isDisabled: p(z, u),
        isSelected: ge,
        options: i,
        context: z === a ? "menu" : "value",
        selectValue: u,
        isAppleDevice: l
      };
      re = G.onFocus(ne);
    }
    return re;
  }, [a, n, m, p, G, i, u, l]), k = ct(function() {
    var re = "";
    if (v && I.length && !h && G.onFilter) {
      var z = x({
        count: i.length
      });
      re = G.onFilter({
        inputValue: g,
        resultsMessage: z
      });
    }
    return re;
  }, [i, g, v, G, I, x, h]), q = (r == null ? void 0 : r.action) === "initial-input-focus", te = ct(function() {
    var re = "";
    if (G.guidance) {
      var z = n ? "value" : v ? "menu" : "input";
      re = G.guidance({
        "aria-label": P,
        context: z,
        isDisabled: a && p(a, u),
        isMulti: y,
        isSearchable: b,
        tabSelectsValue: E,
        isInitialFocus: q
      });
    }
    return re;
  }, [P, a, n, y, p, b, v, G, u, E, q]), le = B(ir, null, B("span", {
    id: "aria-selection"
  }, J), B("span", {
    id: "aria-focused"
  }, H), B("span", {
    id: "aria-results"
  }, k), B("span", {
    id: "aria-guidance"
  }, te));
  return B(ir, null, B(Pi, {
    id: c
  }, q && le), B(Pi, {
    "aria-live": T,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, o && !q && le));
}, gm = mm, Pr = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], pm = new RegExp("[" + Pr.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), rs = {};
for (var er = 0; er < Pr.length; er++)
  for (var tr = Pr[er], nr = 0; nr < tr.letters.length; nr++)
    rs[tr.letters[nr]] = tr.base;
var as = function(t) {
  return t.replace(pm, function(r) {
    return rs[r];
  });
}, bm = um(as), Ni = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, vm = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, hm = function(t) {
  return function(r, a) {
    if (r.data.__isNew__)
      return !0;
    var n = M({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: vm,
      trim: !0,
      matchFrom: "any"
    }, t), i = n.ignoreCase, o = n.ignoreAccents, u = n.stringify, s = n.trim, c = n.matchFrom, l = s ? Ni(a) : a, f = s ? Ni(u(r)) : u(r);
    return i && (l = l.toLowerCase(), f = f.toLowerCase()), o && (l = bm(l), f = as(f)), c === "start" ? f.substr(0, l.length) === l : f.indexOf(l) > -1;
  };
}, ym = ["innerRef"];
function Im(e) {
  var t = e.innerRef, r = Je(e, ym), a = jf(r, "onExited", "in", "enter", "exit", "appear");
  return B("input", L({
    ref: t
  }, a, {
    css: /* @__PURE__ */ ra({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var Cm = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Am(e) {
  var t = e.isEnabled, r = e.onBottomArrive, a = e.onBottomLeave, n = e.onTopArrive, i = e.onTopLeave, o = Be(!1), u = Be(!1), s = Be(0), c = Be(null), l = Se(function(b, v) {
    if (c.current !== null) {
      var I = c.current, x = I.scrollTop, E = I.scrollHeight, h = I.clientHeight, P = c.current, T = v > 0, G = E - h - x, J = !1;
      G > v && o.current && (a && a(b), o.current = !1), T && u.current && (i && i(b), u.current = !1), T && v > G ? (r && !o.current && r(b), P.scrollTop = E, J = !0, o.current = !0) : !T && -v > x && (n && !u.current && n(b), P.scrollTop = 0, J = !0, u.current = !0), J && Cm(b);
    }
  }, [r, a, n, i]), f = Se(function(b) {
    l(b, b.deltaY);
  }, [l]), m = Se(function(b) {
    s.current = b.changedTouches[0].clientY;
  }, []), g = Se(function(b) {
    var v = s.current - b.changedTouches[0].clientY;
    l(b, v);
  }, [l]), y = Se(function(b) {
    if (b) {
      var v = Xf ? {
        passive: !1
      } : !1;
      b.addEventListener("wheel", f, v), b.addEventListener("touchstart", m, v), b.addEventListener("touchmove", g, v);
    }
  }, [g, m, f]), p = Se(function(b) {
    b && (b.removeEventListener("wheel", f, !1), b.removeEventListener("touchstart", m, !1), b.removeEventListener("touchmove", g, !1));
  }, [g, m, f]);
  return wn(function() {
    if (t) {
      var b = c.current;
      return y(b), function() {
        p(b);
      };
    }
  }, [t, y, p]), function(b) {
    c.current = b;
  };
}
var Fi = ["boxSizing", "height", "overflow", "paddingRight", "position"], Gi = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function ki(e) {
  e.preventDefault();
}
function Vi(e) {
  e.stopPropagation();
}
function Di() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function Bi() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Wi = !!(typeof window < "u" && window.document && window.document.createElement), xt = 0, ut = {
  capture: !1,
  passive: !1
};
function xm(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, a = r === void 0 ? !0 : r, n = Be({}), i = Be(null), o = Se(function(s) {
    if (Wi) {
      var c = document.body, l = c && c.style;
      if (a && Fi.forEach(function(y) {
        var p = l && l[y];
        n.current[y] = p;
      }), a && xt < 1) {
        var f = parseInt(n.current.paddingRight, 10) || 0, m = document.body ? document.body.clientWidth : 0, g = window.innerWidth - m + f || 0;
        Object.keys(Gi).forEach(function(y) {
          var p = Gi[y];
          l && (l[y] = p);
        }), l && (l.paddingRight = "".concat(g, "px"));
      }
      c && Bi() && (c.addEventListener("touchmove", ki, ut), s && (s.addEventListener("touchstart", Di, ut), s.addEventListener("touchmove", Vi, ut))), xt += 1;
    }
  }, [a]), u = Se(function(s) {
    if (Wi) {
      var c = document.body, l = c && c.style;
      xt = Math.max(xt - 1, 0), a && xt < 1 && Fi.forEach(function(f) {
        var m = n.current[f];
        l && (l[f] = m);
      }), c && Bi() && (c.removeEventListener("touchmove", ki, ut), s && (s.removeEventListener("touchstart", Di, ut), s.removeEventListener("touchmove", Vi, ut)));
    }
  }, [a]);
  return wn(function() {
    if (t) {
      var s = i.current;
      return o(s), function() {
        u(s);
      };
    }
  }, [t, o, u]), function(s) {
    i.current = s;
  };
}
function Em() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var wm = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, Sm = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: Em
};
function Om(e) {
  var t = e.children, r = e.lockEnabled, a = e.captureEnabled, n = a === void 0 ? !0 : a, i = e.onBottomArrive, o = e.onBottomLeave, u = e.onTopArrive, s = e.onTopLeave, c = Am({
    isEnabled: n,
    onBottomArrive: i,
    onBottomLeave: o,
    onTopArrive: u,
    onTopLeave: s
  }), l = xm({
    isEnabled: r
  }), f = function(g) {
    c(g), l(g);
  };
  return B(ir, null, r && B("div", {
    onClick: wm,
    css: Sm
  }), t(f));
}
function Tm() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Rm = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Tm
}, Pm = function(t) {
  var r = t.name, a = t.onFocus;
  return B("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: a,
    css: Rm,
    value: "",
    onChange: function() {
    }
  });
}, Nm = Pm;
function ua(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Fm() {
  return ua(/^iPhone/i);
}
function is() {
  return ua(/^Mac/i);
}
function Gm() {
  return ua(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  is() && navigator.maxTouchPoints > 1;
}
function km() {
  return Fm() || Gm();
}
function Vm() {
  return is() || km();
}
var Dm = function(t) {
  return t.label;
}, Bm = function(t) {
  return t.label;
}, Wm = function(t) {
  return t.value;
}, Mm = function(t) {
  return !!t.isDisabled;
}, Lm = {
  clearIndicator: yd,
  container: sd,
  control: Sd,
  dropdownIndicator: vd,
  group: Pd,
  groupHeading: Fd,
  indicatorsContainer: fd,
  indicatorSeparator: Cd,
  input: Dd,
  loadingIndicator: Ed,
  loadingMessage: nd,
  menu: Uf,
  menuList: qf,
  menuPortal: id,
  multiValue: Xd,
  multiValueLabel: Zd,
  multiValueRemove: Hd,
  noOptionsMessage: td,
  option: Ud,
  placeholder: Kd,
  singleValue: tm,
  valueContainer: cd
}, Xm = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, Zm = 4, os = 4, Hm = 38, jm = os * 2, Ym = {
  baseUnit: os,
  controlHeight: Hm,
  menuGutter: jm
}, rr = {
  borderRadius: Zm,
  colors: Xm,
  spacing: Ym
}, zm = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Oi(),
  captureMenuScroll: !Oi(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: hm(),
  formatGroupLabel: Dm,
  getOptionLabel: Bm,
  getOptionValue: Wm,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Mm,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Mf(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function Mi(e, t, r, a) {
  var n = cs(e, t, r), i = ls(e, t, r), o = us(e, t), u = xn(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: n,
    isSelected: i,
    label: o,
    value: u,
    index: a
  };
}
function ln(e, t) {
  return e.options.map(function(r, a) {
    if ("options" in r) {
      var n = r.options.map(function(o, u) {
        return Mi(e, o, t, u);
      }).filter(function(o) {
        return Xi(e, o);
      });
      return n.length > 0 ? {
        type: "group",
        data: r,
        options: n,
        index: a
      } : void 0;
    }
    var i = Mi(e, r, t, a);
    return Xi(e, i) ? i : void 0;
  }).filter(Zf);
}
function ss(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, zr(r.options.map(function(a) {
      return a.data;
    }))) : t.push(r.data), t;
  }, []);
}
function Li(e, t) {
  return e.reduce(function(r, a) {
    return a.type === "group" ? r.push.apply(r, zr(a.options.map(function(n) {
      return {
        data: n.data,
        id: "".concat(t, "-").concat(a.index, "-").concat(n.index)
      };
    }))) : r.push({
      data: a.data,
      id: "".concat(t, "-").concat(a.index)
    }), r;
  }, []);
}
function _m(e, t) {
  return ss(ln(e, t));
}
function Xi(e, t) {
  var r = e.inputValue, a = r === void 0 ? "" : r, n = t.data, i = t.isSelected, o = t.label, u = t.value;
  return (!ds(e) || !i) && fs(e, {
    label: o,
    value: u,
    data: n
  }, a);
}
function Jm(e, t) {
  var r = e.focusedValue, a = e.selectValue, n = a.indexOf(r);
  if (n > -1) {
    var i = t.indexOf(r);
    if (i > -1)
      return r;
    if (n < t.length)
      return t[n];
  }
  return null;
}
function Um(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var ar = function(t, r) {
  var a, n = (a = t.find(function(i) {
    return i.data === r;
  })) === null || a === void 0 ? void 0 : a.id;
  return n || null;
}, us = function(t, r) {
  return t.getOptionLabel(r);
}, xn = function(t, r) {
  return t.getOptionValue(r);
};
function cs(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function ls(e, t, r) {
  if (r.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var a = xn(e, t);
  return r.some(function(n) {
    return xn(e, n) === a;
  });
}
function fs(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var ds = function(t) {
  var r = t.hideSelectedOptions, a = t.isMulti;
  return r === void 0 ? a : r;
}, $m = 1, ms = /* @__PURE__ */ function(e) {
  el(r, e);
  var t = al(r);
  function r(a) {
    var n;
    if (Kc(this, r), n = t.call(this, a), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.isAppleDevice = Vm(), n.controlRef = null, n.getControlRef = function(s) {
      n.controlRef = s;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(s) {
      n.focusedOptionRef = s;
    }, n.menuListRef = null, n.getMenuListRef = function(s) {
      n.menuListRef = s;
    }, n.inputRef = null, n.getInputRef = function(s) {
      n.inputRef = s;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(s, c) {
      var l = n.props, f = l.onChange, m = l.name;
      c.name = m, n.ariaOnChange(s, c), f(s, c);
    }, n.setValue = function(s, c, l) {
      var f = n.props, m = f.closeMenuOnSelect, g = f.isMulti, y = f.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: y
      }), m && (n.setState({
        inputIsHiddenAfterUpdate: !g
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(s, {
        action: c,
        option: l
      });
    }, n.selectOption = function(s) {
      var c = n.props, l = c.blurInputOnSelect, f = c.isMulti, m = c.name, g = n.state.selectValue, y = f && n.isOptionSelected(s, g), p = n.isOptionDisabled(s, g);
      if (y) {
        var b = n.getOptionValue(s);
        n.setValue(g.filter(function(v) {
          return n.getOptionValue(v) !== b;
        }), "deselect-option", s);
      } else if (!p)
        f ? n.setValue([].concat(zr(g), [s]), "select-option", s) : n.setValue(s, "select-option");
      else {
        n.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: m
        });
        return;
      }
      l && n.blurInput();
    }, n.removeValue = function(s) {
      var c = n.props.isMulti, l = n.state.selectValue, f = n.getOptionValue(s), m = l.filter(function(y) {
        return n.getOptionValue(y) !== f;
      }), g = rn(c, m, m[0] || null);
      n.onChange(g, {
        action: "remove-value",
        removedValue: s
      }), n.focusInput();
    }, n.clearValue = function() {
      var s = n.state.selectValue;
      n.onChange(rn(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, n.popValue = function() {
      var s = n.props.isMulti, c = n.state.selectValue, l = c[c.length - 1], f = c.slice(0, c.length - 1), m = rn(s, f, f[0] || null);
      n.onChange(m, {
        action: "pop-value",
        removedValue: l
      });
    }, n.getFocusedOptionId = function(s) {
      return ar(n.state.focusableOptionsWithIds, s);
    }, n.getFocusableOptionsWithIds = function() {
      return Li(ln(n.props, n.state.selectValue), n.getElementId("option"));
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return kf.apply(void 0, [n.props.classNamePrefix].concat(c));
    }, n.getOptionLabel = function(s) {
      return us(n.props, s);
    }, n.getOptionValue = function(s) {
      return xn(n.props, s);
    }, n.getStyles = function(s, c) {
      var l = n.props.unstyled, f = Lm[s](c, l);
      f.boxSizing = "border-box";
      var m = n.props.styles[s];
      return m ? m(f, c) : f;
    }, n.getClassNames = function(s, c) {
      var l, f;
      return (l = (f = n.props.classNames)[s]) === null || l === void 0 ? void 0 : l.call(f, c);
    }, n.getElementId = function(s) {
      return "".concat(n.state.instancePrefix, "-").concat(s);
    }, n.getComponents = function() {
      return im(n.props);
    }, n.buildCategorizedOptions = function() {
      return ln(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return ss(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(s, c) {
      n.setState({
        ariaSelection: M({
          value: s
        }, c)
      });
    }, n.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(s) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var c = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && n.onMenuClose() : c && n.openMenu("first") : (c && (n.openAfterFocus = !0), n.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !n.props.isDisabled) {
        var c = n.props, l = c.isMulti, f = c.menuIsOpen;
        n.focusInput(), f ? (n.setState({
          inputIsHiddenAfterUpdate: !l
        }), n.onMenuClose()) : n.openMenu("first"), s.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (n.clearValue(), s.preventDefault(), n.openAfterFocus = !1, s.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(s) {
      typeof n.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && kn(s.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(s) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(s) {
      var c = s.touches, l = c && c.item(0);
      l && (n.initialTouchX = l.clientX, n.initialTouchY = l.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(s) {
      var c = s.touches, l = c && c.item(0);
      if (l) {
        var f = Math.abs(l.clientX - n.initialTouchX), m = Math.abs(l.clientY - n.initialTouchY), g = 5;
        n.userIsDragging = f > g || m > g;
      }
    }, n.onTouchEnd = function(s) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(s.target) && n.menuListRef && !n.menuListRef.contains(s.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(s) {
      n.userIsDragging || n.onControlMouseDown(s);
    }, n.onClearIndicatorTouchEnd = function(s) {
      n.userIsDragging || n.onClearIndicatorMouseDown(s);
    }, n.onDropdownIndicatorTouchEnd = function(s) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(s);
    }, n.handleInputChange = function(s) {
      var c = n.props.inputValue, l = s.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(l, {
        action: "input-change",
        prevInputValue: c
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(s) {
      n.props.onFocus && n.props.onFocus(s), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(s) {
      var c = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(s), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: c
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(s) {
      if (!(n.blockOptionHover || n.state.focusedOption === s)) {
        var c = n.getFocusableOptions(), l = c.indexOf(s);
        n.setState({
          focusedOption: s,
          focusedOptionId: l > -1 ? n.getFocusedOptionId(s) : null
        });
      }
    }, n.shouldHideSelectedOptions = function() {
      return ds(n.props);
    }, n.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), n.focus();
    }, n.onKeyDown = function(s) {
      var c = n.props, l = c.isMulti, f = c.backspaceRemovesValue, m = c.escapeClearsValue, g = c.inputValue, y = c.isClearable, p = c.isDisabled, b = c.menuIsOpen, v = c.onKeyDown, I = c.tabSelectsValue, x = c.openMenuOnFocus, E = n.state, h = E.focusedOption, P = E.focusedValue, T = E.selectValue;
      if (!p && !(typeof v == "function" && (v(s), s.defaultPrevented))) {
        switch (n.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!l || g)
              return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!l || g)
              return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (g)
              return;
            if (P)
              n.removeValue(P);
            else {
              if (!f)
                return;
              l ? n.popValue() : y && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || s.shiftKey || !b || !I || !h || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            x && n.isOptionSelected(h, T))
              return;
            n.selectOption(h);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (b) {
              if (!h || n.isComposing)
                return;
              n.selectOption(h);
              break;
            }
            return;
          case "Escape":
            b ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: g
            }), n.onMenuClose()) : y && m && n.clearValue();
            break;
          case " ":
            if (g)
              return;
            if (!b) {
              n.openMenu("first");
              break;
            }
            if (!h)
              return;
            n.selectOption(h);
            break;
          case "ArrowUp":
            b ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            b ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!b)
              return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!b)
              return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!b)
              return;
            n.focusOption("first");
            break;
          case "End":
            if (!b)
              return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++$m), n.state.selectValue = wi(a.value), a.menuIsOpen && n.state.selectValue.length) {
      var i = n.getFocusableOptionsWithIds(), o = n.buildFocusableOptions(), u = o.indexOf(n.state.selectValue[0]);
      n.state.focusableOptionsWithIds = i, n.state.focusedOption = o[u], n.state.focusedOptionId = ar(i, o[u]);
    }
    return n;
  }
  return qc(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Si(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var i = this.props, o = i.isDisabled, u = i.menuIsOpen, s = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (s && !o && n.isDisabled || // ensure focus is on the Input when the menu opens
      s && u && !n.menuIsOpen) && this.focusInput(), s && o && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !s && !o && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Si(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, i) {
      this.props.onInputChange(n, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var i = this, o = this.state, u = o.selectValue, s = o.isFocused, c = this.buildFocusableOptions(), l = n === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var f = c.indexOf(u[0]);
        f > -1 && (l = f);
      }
      this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[l],
        focusedOptionId: this.getFocusedOptionId(c[l])
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var i = this.state, o = i.selectValue, u = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var s = o.indexOf(u);
        u || (s = -1);
        var c = o.length - 1, l = -1;
        if (o.length) {
          switch (n) {
            case "previous":
              s === 0 ? l = 0 : s === -1 ? l = c : l = s - 1;
              break;
            case "next":
              s > -1 && s < c && (l = s + 1);
              break;
          }
          this.setState({
            inputIsHidden: l !== -1,
            focusedValue: o[l]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, o = this.state.focusedOption, u = this.getFocusableOptions();
      if (u.length) {
        var s = 0, c = u.indexOf(o);
        o || (c = -1), n === "up" ? s = c > 0 ? c - 1 : u.length - 1 : n === "down" ? s = (c + 1) % u.length : n === "pageup" ? (s = c - i, s < 0 && (s = 0)) : n === "pagedown" ? (s = c + i, s > u.length - 1 && (s = u.length - 1)) : n === "last" && (s = u.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: u[s],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(u[s])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(rr) : M(M({}, rr), this.props.theme) : rr;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, i = this.cx, o = this.getStyles, u = this.getClassNames, s = this.getValue, c = this.selectOption, l = this.setValue, f = this.props, m = f.isMulti, g = f.isRtl, y = f.options, p = this.hasValue();
      return {
        clearValue: n,
        cx: i,
        getStyles: o,
        getClassNames: u,
        getValue: s,
        hasValue: p,
        isMulti: m,
        isRtl: g,
        options: y,
        selectOption: c,
        selectProps: f,
        setValue: l,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, i = n.isClearable, o = n.isMulti;
      return i === void 0 ? o : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, i) {
      return cs(this.props, n, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, i) {
      return ls(this.props, n, i);
    }
  }, {
    key: "filterOption",
    value: function(n, i) {
      return fs(this.props, n, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var o = this.props.inputValue, u = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: i,
          inputValue: o,
          selectValue: u
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, i = n.isDisabled, o = n.isSearchable, u = n.inputId, s = n.inputValue, c = n.tabIndex, l = n.form, f = n.menuIsOpen, m = n.required, g = this.getComponents(), y = g.Input, p = this.state, b = p.inputIsHidden, v = p.ariaSelection, I = this.commonProps, x = u || this.getElementId("input"), E = M(M(M({
          "aria-autocomplete": "list",
          "aria-expanded": f,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": m,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, f && {
          "aria-controls": this.getElementId("listbox")
        }), !o && {
          "aria-readonly": !0
        }), this.hasValue() ? (v == null ? void 0 : v.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return o ? /* @__PURE__ */ Z.createElement(y, L({}, I, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: x,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: b,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: l,
          type: "text",
          value: s
        }, E)) : /* @__PURE__ */ Z.createElement(Im, L({
          id: x,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Cn,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: c,
          inputMode: "none",
          form: l,
          value: ""
        }, E));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, i = this.getComponents(), o = i.MultiValue, u = i.MultiValueContainer, s = i.MultiValueLabel, c = i.MultiValueRemove, l = i.SingleValue, f = i.Placeholder, m = this.commonProps, g = this.props, y = g.controlShouldRenderValue, p = g.isDisabled, b = g.isMulti, v = g.inputValue, I = g.placeholder, x = this.state, E = x.selectValue, h = x.focusedValue, P = x.isFocused;
      if (!this.hasValue() || !y)
        return v ? null : /* @__PURE__ */ Z.createElement(f, L({}, m, {
          key: "placeholder",
          isDisabled: p,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), I);
      if (b)
        return E.map(function(G, J) {
          var H = G === h, k = "".concat(n.getOptionLabel(G), "-").concat(n.getOptionValue(G));
          return /* @__PURE__ */ Z.createElement(o, L({}, m, {
            components: {
              Container: u,
              Label: s,
              Remove: c
            },
            isFocused: H,
            isDisabled: p,
            key: k,
            index: J,
            removeProps: {
              onClick: function() {
                return n.removeValue(G);
              },
              onTouchEnd: function() {
                return n.removeValue(G);
              },
              onMouseDown: function(te) {
                te.preventDefault();
              }
            },
            data: G
          }), n.formatOptionLabel(G, "value"));
        });
      if (v)
        return null;
      var T = E[0];
      return /* @__PURE__ */ Z.createElement(l, L({}, m, {
        data: T,
        isDisabled: p
      }), this.formatOptionLabel(T, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), i = n.ClearIndicator, o = this.commonProps, u = this.props, s = u.isDisabled, c = u.isLoading, l = this.state.isFocused;
      if (!this.isClearable() || !i || s || !this.hasValue() || c)
        return null;
      var f = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Z.createElement(i, L({}, o, {
        innerProps: f,
        isFocused: l
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), i = n.LoadingIndicator, o = this.commonProps, u = this.props, s = u.isDisabled, c = u.isLoading, l = this.state.isFocused;
      if (!i || !c)
        return null;
      var f = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Z.createElement(i, L({}, o, {
        innerProps: f,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), i = n.DropdownIndicator, o = n.IndicatorSeparator;
      if (!i || !o)
        return null;
      var u = this.commonProps, s = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ Z.createElement(o, L({}, u, {
        isDisabled: s,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), i = n.DropdownIndicator;
      if (!i)
        return null;
      var o = this.commonProps, u = this.props.isDisabled, s = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Z.createElement(i, L({}, o, {
        innerProps: c,
        isDisabled: u,
        isFocused: s
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, i = this.getComponents(), o = i.Group, u = i.GroupHeading, s = i.Menu, c = i.MenuList, l = i.MenuPortal, f = i.LoadingMessage, m = i.NoOptionsMessage, g = i.Option, y = this.commonProps, p = this.state.focusedOption, b = this.props, v = b.captureMenuScroll, I = b.inputValue, x = b.isLoading, E = b.loadingMessage, h = b.minMenuHeight, P = b.maxMenuHeight, T = b.menuIsOpen, G = b.menuPlacement, J = b.menuPosition, H = b.menuPortalTarget, k = b.menuShouldBlockScroll, q = b.menuShouldScrollIntoView, te = b.noOptionsMessage, le = b.onMenuScrollToTop, re = b.onMenuScrollToBottom;
      if (!T)
        return null;
      var z = function(V, W) {
        var _ = V.type, D = V.data, X = V.isDisabled, j = V.isSelected, $ = V.label, U = V.value, Ce = p === D, w = X ? void 0 : function() {
          return n.onOptionHover(D);
        }, Oe = X ? void 0 : function() {
          return n.selectOption(D);
        }, Le = "".concat(n.getElementId("option"), "-").concat(W), Xe = {
          id: Le,
          onClick: Oe,
          onMouseMove: w,
          onMouseOver: w,
          tabIndex: -1,
          role: "option",
          "aria-selected": n.isAppleDevice ? void 0 : j
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ Z.createElement(g, L({}, y, {
          innerProps: Xe,
          data: D,
          isDisabled: X,
          isSelected: j,
          key: Le,
          label: $,
          type: _,
          value: U,
          isFocused: Ce,
          innerRef: Ce ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(V.data, "menu"));
      }, ge;
      if (this.hasOptions())
        ge = this.getCategorizedOptions().map(function(N) {
          if (N.type === "group") {
            var V = N.data, W = N.options, _ = N.index, D = "".concat(n.getElementId("group"), "-").concat(_), X = "".concat(D, "-heading");
            return /* @__PURE__ */ Z.createElement(o, L({}, y, {
              key: D,
              data: V,
              options: W,
              Heading: u,
              headingProps: {
                id: X,
                data: N.data
              },
              label: n.formatGroupLabel(N.data)
            }), N.options.map(function(j) {
              return z(j, "".concat(_, "-").concat(j.index));
            }));
          } else if (N.type === "option")
            return z(N, "".concat(N.index));
        });
      else if (x) {
        var ne = E({
          inputValue: I
        });
        if (ne === null)
          return null;
        ge = /* @__PURE__ */ Z.createElement(f, y, ne);
      } else {
        var Ie = te({
          inputValue: I
        });
        if (Ie === null)
          return null;
        ge = /* @__PURE__ */ Z.createElement(m, y, Ie);
      }
      var C = {
        minMenuHeight: h,
        maxMenuHeight: P,
        menuPlacement: G,
        menuPosition: J,
        menuShouldScrollIntoView: q
      }, S = /* @__PURE__ */ Z.createElement($f, L({}, y, C), function(N) {
        var V = N.ref, W = N.placerProps, _ = W.placement, D = W.maxHeight;
        return /* @__PURE__ */ Z.createElement(s, L({}, y, C, {
          innerRef: V,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove
          },
          isLoading: x,
          placement: _
        }), /* @__PURE__ */ Z.createElement(Om, {
          captureEnabled: v,
          onTopArrive: le,
          onBottomArrive: re,
          lockEnabled: k
        }, function(X) {
          return /* @__PURE__ */ Z.createElement(c, L({}, y, {
            innerRef: function($) {
              n.getMenuListRef($), X($);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": y.isMulti,
              id: n.getElementId("listbox")
            },
            isLoading: x,
            maxHeight: D,
            focusedOption: p
          }), ge);
        }));
      });
      return H || J === "fixed" ? /* @__PURE__ */ Z.createElement(l, L({}, y, {
        appendTo: H,
        controlElement: this.controlRef,
        menuPlacement: G,
        menuPosition: J
      }), S) : S;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, i = this.props, o = i.delimiter, u = i.isDisabled, s = i.isMulti, c = i.name, l = i.required, f = this.state.selectValue;
      if (l && !this.hasValue() && !u)
        return /* @__PURE__ */ Z.createElement(Nm, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || u))
        if (s)
          if (o) {
            var m = f.map(function(p) {
              return n.getOptionValue(p);
            }).join(o);
            return /* @__PURE__ */ Z.createElement("input", {
              name: c,
              type: "hidden",
              value: m
            });
          } else {
            var g = f.length > 0 ? f.map(function(p, b) {
              return /* @__PURE__ */ Z.createElement("input", {
                key: "i-".concat(b),
                name: c,
                type: "hidden",
                value: n.getOptionValue(p)
              });
            }) : /* @__PURE__ */ Z.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ Z.createElement("div", null, g);
          }
        else {
          var y = f[0] ? this.getOptionValue(f[0]) : "";
          return /* @__PURE__ */ Z.createElement("input", {
            name: c,
            type: "hidden",
            value: y
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, i = this.state, o = i.ariaSelection, u = i.focusedOption, s = i.focusedValue, c = i.isFocused, l = i.selectValue, f = this.getFocusableOptions();
      return /* @__PURE__ */ Z.createElement(gm, L({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: o,
        focusedOption: u,
        focusedValue: s,
        isFocused: c,
        selectValue: l,
        focusableOptions: f,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), i = n.Control, o = n.IndicatorsContainer, u = n.SelectContainer, s = n.ValueContainer, c = this.props, l = c.className, f = c.id, m = c.isDisabled, g = c.menuIsOpen, y = this.state.isFocused, p = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ Z.createElement(u, L({}, p, {
        className: l,
        innerProps: {
          id: f,
          onKeyDown: this.onKeyDown
        },
        isDisabled: m,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ Z.createElement(i, L({}, p, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: m,
        isFocused: y,
        menuIsOpen: g
      }), /* @__PURE__ */ Z.createElement(s, L({}, p, {
        isDisabled: m
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ Z.createElement(o, L({}, p, {
        isDisabled: m
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var o = i.prevProps, u = i.clearFocusValueOnUpdate, s = i.inputIsHiddenAfterUpdate, c = i.ariaSelection, l = i.isFocused, f = i.prevWasFocused, m = i.instancePrefix, g = n.options, y = n.value, p = n.menuIsOpen, b = n.inputValue, v = n.isMulti, I = wi(y), x = {};
      if (o && (y !== o.value || g !== o.options || p !== o.menuIsOpen || b !== o.inputValue)) {
        var E = p ? _m(n, I) : [], h = p ? Li(ln(n, I), "".concat(m, "-option")) : [], P = u ? Jm(i, I) : null, T = Um(i, E), G = ar(h, T);
        x = {
          selectValue: I,
          focusedOption: T,
          focusedOptionId: G,
          focusableOptionsWithIds: h,
          focusedValue: P,
          clearFocusValueOnUpdate: !1
        };
      }
      var J = s != null && n !== o ? {
        inputIsHidden: s,
        inputIsHiddenAfterUpdate: void 0
      } : {}, H = c, k = l && f;
      return l && !k && (H = {
        value: rn(v, I, I[0] || null),
        options: I,
        action: "initial-input-focus"
      }, k = !f), (c == null ? void 0 : c.action) === "initial-input-focus" && (H = null), M(M(M({}, x), J), {}, {
        prevProps: n,
        ariaSelection: H,
        prevWasFocused: k
      });
    }
  }]), r;
}(Ds);
ms.defaultProps = zm;
var Qm = /* @__PURE__ */ Hi(function(e, t) {
  var r = Qc(e);
  return /* @__PURE__ */ Z.createElement(ms, L({
    ref: t
  }, r));
}), Km = Qm;
const Zi = ({ items: e, style: t, initialDefaultValue: r, onChange: a, value: n }) => {
  const i = () => e.find((l) => l.value === r) || null, [o, u] = Re(i());
  wn(() => {
    u(i());
  }, [r, e]);
  const s = {
    indicatorSeparator: (l) => ({
      ...l,
      display: "none"
    }),
    control: (l) => ({
      ...l,
      border: "none",
      boxShadow: "none",
      width: "110px"
    }),
    menu: (l) => ({
      ...l,
      maxHeight: "220px",
      overflowY: "auto"
    }),
    ...t
  }, c = (l) => {
    a == null || a(l);
  };
  return /* @__PURE__ */ ie.jsx("div", { children: /* @__PURE__ */ ie.jsx(
    Km,
    {
      className: "custom-select",
      options: e,
      styles: s,
      value: e.find((l) => l.value === (n ? n.value : o)),
      onChange: c
    }
  ) });
}, tg = ({ id: e, selectedDate: t, onChange: r, onFormInputChange: a }) => {
  const n = Be(null);
  wn(() => {
    const H = (k) => {
      n.current && !n.current.contains(k.target) && (s(!1), I());
    };
    return document.addEventListener("mousedown", H), () => {
      document.removeEventListener("mousedown", H);
    };
  }, []);
  const [i, o] = Re(/* @__PURE__ */ new Date()), [u, s] = Re(!1), [c, l] = Re(""), [f, m] = Re(!0), [g, y] = Re(!1), p = (H) => {
    const k = H.getFullYear(), q = String(H.getMonth() + 1).padStart(2, "0"), te = String(H.getDate()).padStart(2, "0");
    return `${k}-${q}-${te}`;
  }, b = (H) => {
    let k = H.target.value;
    k = k.replace(/[^\d-]/g, "");
    const q = (k.match(/-/g) || []).length;
    k.length === 4 && q < 1 ? k = k.substring(0, 4) + "-" + k.substring(4) : k.length === 7 && q < 2 && (k = k.substring(0, 7) + "-" + k.substring(7)), k.length <= 10 && (l(k), a("date", k));
    try {
      const te = new Date(k);
      !isNaN(te.getTime()) && k === te.toISOString().slice(0, 10) ? (m(!0), l(te.toISOString().slice(0, 10)), a("date", te.toISOString().slice(0, 10))) : m(!1);
    } catch {
      m(!1);
    }
  }, v = () => {
    s(!0), y(!0);
  }, I = () => {
    s(!1), !g && !f && m(!0), y(!1);
  }, x = (H) => {
    if (H.key === "Enter")
      if (/^\d{4}-\d{2}-\d{2}$/.test(c)) {
        const q = new Date(c);
        isNaN(q.getTime()) || (r(q), s(!1), o(q));
      } else
        r(null), l("");
  }, E = () => new Date(i.getFullYear(), i.getMonth() + 1, 0).getDate(), h = () => new Date(i.getFullYear(), i.getMonth(), 1).getDay(), P = () => new Date(i.getFullYear(), i.getMonth(), 0).getDate(), T = (H) => {
    const k = E(), q = h(), te = P(), le = /* @__PURE__ */ new Date(), re = [];
    let z = [];
    const ge = q === 0 ? 6 : q;
    for (let ne = 0; ne < ge; ne++)
      z.push(
        /* @__PURE__ */ ie.jsx("td", { className: "inactive", children: te - ge + ne + 1 }, `prev-${ne}`)
      );
    for (let ne = 1; ne <= k; ne++) {
      const Ie = new Date(i.getFullYear(), i.getMonth(), ne);
      let C = "";
      const S = i.getFullYear() === le.getFullYear() && i.getMonth() === le.getMonth() && ne === le.getDate(), N = t && t instanceof Date && !isNaN(t.getTime()) && Ie.getTime() === t.getTime();
      S && (N || !t) ? C = "currentDay selectedDay" : S ? C = "currentDayUnselected" : N && (C = "selectedDay"), z.push(
        /* @__PURE__ */ ie.jsx(
          "td",
          {
            onClick: () => {
              l(p(Ie)), r(Ie), m(!0), H();
            },
            className: C,
            children: ne
          },
          ne
        )
      ), z.length === 7 && (re.push(/* @__PURE__ */ ie.jsx("tr", { children: z }, ne)), z = []);
    }
    for (; z.length < 7; )
      z.push(
        /* @__PURE__ */ ie.jsx(
          "td",
          {
            className: "inactive",
            children: z.length + 1
          },
          `next-${z.length}`
        )
      );
    return re.push(/* @__PURE__ */ ie.jsx("tr", { children: z }, "row-next")), re;
  }, G = (H) => {
    H && !isNaN(Number(H.value)) && o((k) => new Date(k.getFullYear(), Number(H.value), 1));
  }, J = (H) => {
    H && !isNaN(Number(H.value)) && o((k) => new Date(Number(H.value), k.getMonth(), 1));
  };
  return /* @__PURE__ */ ie.jsxs("div", { className: "date-picker", ref: n, children: [
    /* @__PURE__ */ ie.jsx(
      "input",
      {
        type: "text",
        id: e,
        value: c,
        onChange: b,
        onKeyDown: x,
        onClick: v,
        placeholder: "YYYY-MM-DD"
      }
    ),
    !f && /* @__PURE__ */ ie.jsx("div", { className: "error-message", children: "Please enter a valid date (YYYY-MM-DD format)." }),
    u && /* @__PURE__ */ ie.jsxs("div", { className: "date-picker-container", children: [
      /* @__PURE__ */ ie.jsxs("div", { className: "date-picker-header", children: [
        /* @__PURE__ */ ie.jsx("button", { type: "button", onClick: () => o(new Date(i.getFullYear(), i.getMonth() - 1, 1)), children: /* @__PURE__ */ ie.jsx(nt, { icon: Hc }) }),
        /* @__PURE__ */ ie.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              o(/* @__PURE__ */ new Date());
            },
            children: /* @__PURE__ */ ie.jsx(nt, { icon: jc })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          Zi,
          {
            items: Array.from({ length: 12 }, (H, k) => ({
              value: k,
              label: new Date(i.getFullYear(), k, 1).toLocaleString("default", { month: "long" })
            })),
            value: { value: i.getMonth(), label: new Date(i.getFullYear(), i.getMonth(), 1).toLocaleString("default", { month: "long" }) },
            onChange: G
          }
        ),
        /* @__PURE__ */ ie.jsx(
          Zi,
          {
            items: Array.from({ length: 101 }, (H, k) => ({
              value: 1930 + k,
              label: `${1930 + k}`
            })),
            value: { value: i.getFullYear(), label: `${i.getFullYear()}` },
            onChange: J
          }
        ),
        /* @__PURE__ */ ie.jsx("button", { type: "button", onClick: () => o(new Date(i.getFullYear(), i.getMonth() + 1, 1)), children: /* @__PURE__ */ ie.jsx(nt, { icon: Zc }) })
      ] }),
      /* @__PURE__ */ ie.jsxs("table", { className: "date-picker-calendar", children: [
        /* @__PURE__ */ ie.jsx("thead", { children: /* @__PURE__ */ ie.jsxs("tr", { children: [
          /* @__PURE__ */ ie.jsx("th", { children: "Sun" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Mon" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Tue" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Wed" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Thu" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Fri" }),
          /* @__PURE__ */ ie.jsx("th", { children: "Sat" })
        ] }) }),
        /* @__PURE__ */ ie.jsx("tbody", { children: T(I) })
      ] })
    ] })
  ] });
};
export {
  tg as DatePicker
};
