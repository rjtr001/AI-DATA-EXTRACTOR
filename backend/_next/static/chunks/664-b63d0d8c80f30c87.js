(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [664],
  {
    97498: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return l;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_PATCH: function () {
            return f;
          },
          ACTION_PREFETCH: function () {
            return a;
          },
          ACTION_FAST_REFRESH: function () {
            return i;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      let o = "refresh",
        l = "navigate",
        u = "restore",
        f = "server-patch",
        a = "prefetch",
        i = "fast-refresh",
        c = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    10030: function (e, t, r) {
      "use strict";
      function getDomainLocale(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        r(22866),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    65170: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(38754),
        o = n._(r(67294)),
        l = r(74450),
        u = r(92227),
        f = r(64364),
        a = r(10109),
        i = r(73607),
        c = r(11823),
        s = r(89031),
        d = r(40920),
        p = r(10030),
        h = r(77192),
        y = r(97498),
        b = new Set();
      function prefetch(e, t, r, n, o, l) {
        if (!l && !(0, u.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let o =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            l = t + "%" + r + "%" + o;
          if (b.has(l)) return;
          b.add(l);
        }
        let f = l ? e.prefetch(t, o) : e.prefetch(t, r, n);
        Promise.resolve(f).catch((e) => {});
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, f.formatUrl)(e);
      }
      let v = o.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: f,
            as: b,
            children: v,
            prefetch: _ = null,
            passHref: g,
            replace: O,
            shallow: m,
            scroll: C,
            locale: E,
            onClick: P,
            onMouseEnter: T,
            onTouchStart: j,
            legacyBehavior: M = !1,
            ...R
          } = e;
          (r = v),
            M &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = o.default.createElement("a", null, r));
          let A = o.default.useContext(c.RouterContext),
            I = o.default.useContext(s.AppRouterContext),
            k = null != A ? A : I,
            L = !A,
            S = !1 !== _,
            N = null === _ ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
            { href: U, as: x } = o.default.useMemo(() => {
              if (!A) {
                let e = formatStringOrUrl(f);
                return { href: e, as: b ? formatStringOrUrl(b) : e };
              }
              let [e, t] = (0, l.resolveHref)(A, f, !0);
              return { href: e, as: b ? (0, l.resolveHref)(A, b) : t || e };
            }, [A, f, b]),
            w = o.default.useRef(U),
            K = o.default.useRef(x);
          M && (n = o.default.Children.only(r));
          let D = M ? n && "object" == typeof n && n.ref : t,
            [F, H, V] = (0, d.useIntersection)({ rootMargin: "200px" }),
            q = o.default.useCallback(
              (e) => {
                (K.current !== x || w.current !== U) &&
                  (V(), (K.current = x), (w.current = U)),
                  F(e),
                  D &&
                    ("function" == typeof D
                      ? D(e)
                      : "object" == typeof D && (D.current = e));
              },
              [x, D, U, V, F]
            );
          o.default.useEffect(() => {
            k && H && S && prefetch(k, U, x, { locale: E }, { kind: N }, L);
          }, [x, U, H, E, S, null == A ? void 0 : A.locale, k, L, N]);
          let z = {
            ref: q,
            onClick(e) {
              M || "function" != typeof P || P(e),
                M &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                k &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, l, f, a, i, c, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = "A" === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!c && !(0, u.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == a || a;
                      "beforePopState" in t
                        ? t[l ? "replace" : "push"](r, n, {
                            shallow: f,
                            locale: i,
                            scroll: e,
                          })
                        : t[l ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !s,
                            scroll: e,
                          });
                    };
                    c ? o.default.startTransition(navigate) : navigate();
                  })(e, k, U, x, O, m, C, E, L, S);
            },
            onMouseEnter(e) {
              M || "function" != typeof T || T(e),
                M &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                k &&
                  (S || !L) &&
                  prefetch(
                    k,
                    U,
                    x,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: N },
                    L
                  );
            },
            onTouchStart(e) {
              M || "function" != typeof j || j(e),
                M &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                k &&
                  (S || !L) &&
                  prefetch(
                    k,
                    U,
                    x,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: N },
                    L
                  );
            },
          };
          if ((0, a.isAbsoluteUrl)(x)) z.href = x;
          else if (!M || g || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== E ? E : null == A ? void 0 : A.locale,
              t =
                (null == A ? void 0 : A.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  x,
                  e,
                  null == A ? void 0 : A.locales,
                  null == A ? void 0 : A.domainLocales
                );
            z.href =
              t ||
              (0, h.addBasePath)(
                (0, i.addLocale)(x, e, null == A ? void 0 : A.defaultLocale)
              );
          }
          return M
            ? o.default.cloneElement(n, z)
            : o.default.createElement("a", { ...R, ...z }, r);
        }),
        _ = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    40920: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let n = r(67294),
        o = r(63436),
        l = "function" == typeof IntersectionObserver,
        u = new Map(),
        f = [];
      function useIntersection(e) {
        let { rootRef: t, rootMargin: r, disabled: a } = e,
          i = a || !l,
          [c, s] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (l) {
            if (i || c) return;
            let e = d.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: l,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = f.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = u.get(n))) return t;
                  let o = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: l, elements: o }),
                    f.push(r),
                    u.set(r, t),
                    t
                  );
                })(r);
                return (
                  l.set(e, t),
                  o.observe(e),
                  function () {
                    if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                      o.disconnect(), u.delete(n);
                      let e = f.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && f.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => s(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [i, r, t, c, d.current]);
        let h = (0, n.useCallback)(() => {
          s(!1);
        }, []);
        return [p, c, h];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    41664: function (e, t, r) {
      e.exports = r(65170);
    },
  },
]);
