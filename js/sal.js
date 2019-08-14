!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.sal = t())
    : (e.sal = t())
})(this, function() {
  return (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports
      var o = (n[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    }
    var n = {}
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          })
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return t.d(n, "a", n), n
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (t.p = "dist/"),
      t((t.s = 0))
    )
  })([
    function(e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
      n(1)
      var o = {
          rootMargin: "0% 50%",
          threshold: 0.5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1
        },
        a = [],
        s = null,
        i = function(e, t) {
          var n = new CustomEvent(e, { bubbles: !0, detail: t })
          t.target.dispatchEvent(n)
        },
        l = function(e) {
          e.target.classList.add(o.animateClassName), i(o.enterEventName, e)
        },
        c = function(e) {
          e.target.classList.remove(o.animateClassName), i(o.exitEventName, e)
        },
        u = function(e) {
          return e.classList.contains(o.animateClassName)
        },
        d = function() {
          document.body.classList.remove(o.disabledClassName)
        },
        f = function() {
          document.body.classList.add(o.disabledClassName)
        },
        b = function() {
          return o.disabled || ("function" == typeof o.disabled && o.disabled())
        },
        m = function(e, t) {
          e.forEach(function(e) {
            e.intersectionRatio >= o.threshold
              ? (l(e), o.once && t.unobserve(e.target))
              : o.once || c(e)
          })
        },
        p = function() {
          f(), s.disconnect(), (s = null)
        },
        v = function() {
          d(),
            (s = new IntersectionObserver(m, {
              rootMargin: o.rootMargin,
              threshold: o.threshold
            })),
            (a = [].filter.call(document.querySelectorAll(o.selector), function(
              e
            ) {
              return !u(e, o.animateClassName)
            })),
            a.forEach(function(e) {
              return s.observe(e)
            })
        },
        h = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o
          if ((e !== o && (o = r({}, o, e)), !window.IntersectionObserver))
            throw (f(),
            Error(
              "\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    "
            ))
          return b() ? f() : v(), { elements: a, disable: p, enable: v }
        }
      t.default = h
    },
    function(e, t) {}
  ]).default
})
