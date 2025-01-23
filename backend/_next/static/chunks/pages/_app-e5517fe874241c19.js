(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    62705: function (e, t, r) {
      var i = r(55639).Symbol;
      e.exports = i;
    },
    44239: function (e, t, r) {
      var i = r(62705),
        n = r(89607),
        o = r(2333),
        s = i ? i.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
          ? n(e)
          : o(e);
      };
    },
    69877: function (e) {
      var t = Math.floor,
        r = Math.random;
      e.exports = function (e, i) {
        return e + t(r() * (i - e + 1));
      };
    },
    27561: function (e, t, r) {
      var i = r(67990),
        n = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, i(e) + 1).replace(n, "") : e;
      };
    },
    31957: function (e, t, r) {
      var i = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = i;
    },
    89607: function (e, t, r) {
      var i = r(62705),
        n = Object.prototype,
        o = n.hasOwnProperty,
        s = n.toString,
        a = i ? i.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, a),
          r = e[a];
        try {
          e[a] = void 0;
          var i = !0;
        } catch (e) {}
        var n = s.call(e);
        return i && (t ? (e[a] = r) : delete e[a]), n;
      };
    },
    65776: function (e) {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, r) {
        var i = typeof e;
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ("number" == i || ("symbol" != i && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < r
        );
      };
    },
    16612: function (e, t, r) {
      var i = r(77813),
        n = r(98612),
        o = r(65776),
        s = r(13218);
      e.exports = function (e, t, r) {
        if (!s(r)) return !1;
        var a = typeof t;
        return (
          ("number" == a
            ? !!(n(r) && o(t, r.length))
            : "string" == a && t in r) && i(r[t], e)
        );
      };
    },
    2333: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    55639: function (e, t, r) {
      var i = r(31957),
        n = "object" == typeof self && self && self.Object === Object && self,
        o = i || n || Function("return this")();
      e.exports = o;
    },
    67990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    77813: function (e) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    98612: function (e, t, r) {
      var i = r(23560),
        n = r(41780);
      e.exports = function (e) {
        return null != e && n(e.length) && !i(e);
      };
    },
    23560: function (e, t, r) {
      var i = r(44239),
        n = r(13218);
      e.exports = function (e) {
        if (!n(e)) return !1;
        var t = i(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    41780: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    13218: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    37005: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    33448: function (e, t, r) {
      var i = r(44239),
        n = r(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (n(e) && "[object Symbol]" == i(e));
      };
    },
    83608: function (e, t, r) {
      var i = r(69877),
        n = r(16612),
        o = r(18601),
        s = parseFloat,
        a = Math.min,
        p = Math.random;
      e.exports = function (e, t, r) {
        if (
          (r && "boolean" != typeof r && n(e, t, r) && (t = r = void 0),
          void 0 === r &&
            ("boolean" == typeof t
              ? ((r = t), (t = void 0))
              : "boolean" == typeof e && ((r = e), (e = void 0))),
          void 0 === e && void 0 === t
            ? ((e = 0), (t = 1))
            : ((e = o(e)), void 0 === t ? ((t = e), (e = 0)) : (t = o(t))),
          e > t)
        ) {
          var c = e;
          (e = t), (t = c);
        }
        if (r || e % 1 || t % 1) {
          var u = p();
          return a(e + u * (t - e + s("1e-" + ((u + "").length - 1))), t);
        }
        return i(e, t);
      };
    },
    18601: function (e, t, r) {
      var i = r(14841),
        n = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = i(e)) === n || e === -n
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
    },
    14841: function (e, t, r) {
      var i = r(27561),
        n = r(13218),
        o = r(33448),
        s = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return s;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = p.test(e);
        return r || c.test(e) ? u(e.slice(2), r ? 2 : 8) : a.test(e) ? s : +e;
      };
    },
    8891: function (e) {
      "use strict";
      var t,
        r,
        i,
        n,
        o,
        s,
        a,
        p,
        c,
        u,
        l,
        _,
        d,
        h,
        f,
        g,
        m,
        y,
        v = { DEBUG: !1, LIB_VERSION: "2.45.0" };
      if ("undefined" == typeof window) {
        var b = { hostname: "" };
        g = {
          navigator: { userAgent: "" },
          document: { location: b, referrer: "" },
          screen: { width: 0, height: 0 },
          location: b,
        };
      } else g = window;
      var x = Array.prototype,
        k = Function.prototype,
        M = Object.prototype,
        w = x.slice,
        S = M.toString,
        O = M.hasOwnProperty,
        q = g.console,
        L = g.navigator,
        E = g.document,
        P = g.opera,
        I = g.screen,
        T = L.userAgent,
        C = k.bind,
        B = x.forEach,
        D = x.indexOf,
        N = x.map,
        A = Array.isArray,
        j = {},
        U = {
          trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
        },
        F = {
          log: function () {
            if (v.DEBUG && !U.isUndefined(q) && q)
              try {
                q.log.apply(q, arguments);
              } catch (e) {
                U.each(arguments, function (e) {
                  q.log(e);
                });
              }
          },
          warn: function () {
            if (v.DEBUG && !U.isUndefined(q) && q) {
              var e = ["Mixpanel warning:"].concat(U.toArray(arguments));
              try {
                q.warn.apply(q, e);
              } catch (t) {
                U.each(e, function (e) {
                  q.warn(e);
                });
              }
            }
          },
          error: function () {
            if (v.DEBUG && !U.isUndefined(q) && q) {
              var e = ["Mixpanel error:"].concat(U.toArray(arguments));
              try {
                q.error.apply(q, e);
              } catch (t) {
                U.each(e, function (e) {
                  q.error(e);
                });
              }
            }
          },
          critical: function () {
            if (!U.isUndefined(q) && q) {
              var e = ["Mixpanel error:"].concat(U.toArray(arguments));
              try {
                q.error.apply(q, e);
              } catch (t) {
                U.each(e, function (e) {
                  q.error(e);
                });
              }
            }
          },
        },
        log_func_with_prefix = function (e, t) {
          return function () {
            return (
              (arguments[0] = "[" + t + "] " + arguments[0]),
              e.apply(F, arguments)
            );
          };
        },
        console_with_prefix = function (e) {
          return {
            log: log_func_with_prefix(F.log, e),
            error: log_func_with_prefix(F.error, e),
            critical: log_func_with_prefix(F.critical, e),
          };
        };
      (U.bind = function (e, t) {
        var r, i;
        if (C && e.bind === C) return C.apply(e, w.call(arguments, 1));
        if (!U.isFunction(e)) throw TypeError();
        return (
          (r = w.call(arguments, 2)),
          (i = function () {
            if (!(this instanceof i))
              return e.apply(t, r.concat(w.call(arguments)));
            var n = {};
            n.prototype = e.prototype;
            var o = new n();
            n.prototype = null;
            var s = e.apply(o, r.concat(w.call(arguments)));
            return Object(s) === s ? s : o;
          })
        );
      }),
        (U.each = function (e, t, r) {
          if (null != e) {
            if (B && e.forEach === B) e.forEach(t, r);
            else if (e.length === +e.length) {
              for (var i = 0, n = e.length; i < n; i++)
                if (i in e && t.call(r, e[i], i, e) === j) return;
            } else
              for (var o in e)
                if (O.call(e, o) && t.call(r, e[o], o, e) === j) return;
          }
        }),
        (U.extend = function (e) {
          return (
            U.each(w.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
            }),
            e
          );
        }),
        (U.isArray =
          A ||
          function (e) {
            return "[object Array]" === S.call(e);
          }),
        (U.isFunction = function (e) {
          try {
            return /^\s*\bfunction\b/.test(e);
          } catch (e) {
            return !1;
          }
        }),
        (U.isArguments = function (e) {
          return !!(e && O.call(e, "callee"));
        }),
        (U.toArray = function (e) {
          return e
            ? e.toArray
              ? e.toArray()
              : U.isArray(e) || U.isArguments(e)
              ? w.call(e)
              : U.values(e)
            : [];
        }),
        (U.map = function (e, t, r) {
          if (N && e.map === N) return e.map(t, r);
          var i = [];
          return (
            U.each(e, function (e) {
              i.push(t.call(r, e));
            }),
            i
          );
        }),
        (U.keys = function (e) {
          var t = [];
          return (
            null === e ||
              U.each(e, function (e, r) {
                t[t.length] = r;
              }),
            t
          );
        }),
        (U.values = function (e) {
          var t = [];
          return (
            null === e ||
              U.each(e, function (e) {
                t[t.length] = e;
              }),
            t
          );
        }),
        (U.include = function (e, t) {
          var r = !1;
          return null === e
            ? r
            : D && e.indexOf === D
            ? -1 != e.indexOf(t)
            : (U.each(e, function (e) {
                if (r || (r = e === t)) return j;
              }),
              r);
        }),
        (U.includes = function (e, t) {
          return -1 !== e.indexOf(t);
        }),
        (U.inherit = function (e, t) {
          return (
            (e.prototype = new t()),
            (e.prototype.constructor = e),
            (e.superclass = t.prototype),
            e
          );
        }),
        (U.isObject = function (e) {
          return e === Object(e) && !U.isArray(e);
        }),
        (U.isEmptyObject = function (e) {
          if (U.isObject(e)) {
            for (var t in e) if (O.call(e, t)) return !1;
            return !0;
          }
          return !1;
        }),
        (U.isUndefined = function (e) {
          return void 0 === e;
        }),
        (U.isString = function (e) {
          return "[object String]" == S.call(e);
        }),
        (U.isDate = function (e) {
          return "[object Date]" == S.call(e);
        }),
        (U.isNumber = function (e) {
          return "[object Number]" == S.call(e);
        }),
        (U.isElement = function (e) {
          return !!(e && 1 === e.nodeType);
        }),
        (U.encodeDates = function (e) {
          return (
            U.each(e, function (t, r) {
              U.isDate(t)
                ? (e[r] = U.formatDate(t))
                : U.isObject(t) && (e[r] = U.encodeDates(t));
            }),
            e
          );
        }),
        (U.timestamp = function () {
          return (
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now()
          );
        }),
        (U.formatDate = function (e) {
          function pad(e) {
            return e < 10 ? "0" + e : e;
          }
          return (
            e.getUTCFullYear() +
            "-" +
            pad(e.getUTCMonth() + 1) +
            "-" +
            pad(e.getUTCDate()) +
            "T" +
            pad(e.getUTCHours()) +
            ":" +
            pad(e.getUTCMinutes()) +
            ":" +
            pad(e.getUTCSeconds())
          );
        }),
        (U.strip_empty_properties = function (e) {
          var t = {};
          return (
            U.each(e, function (e, r) {
              U.isString(e) && e.length > 0 && (t[r] = e);
            }),
            t
          );
        }),
        (U.truncate = function (e, t) {
          var r;
          return (
            "string" == typeof e
              ? (r = e.slice(0, t))
              : U.isArray(e)
              ? ((r = []),
                U.each(e, function (e) {
                  r.push(U.truncate(e, t));
                }))
              : U.isObject(e)
              ? ((r = {}),
                U.each(e, function (e, i) {
                  r[i] = U.truncate(e, t);
                }))
              : (r = e),
            r
          );
        }),
        (U.JSONEncode = function (e) {
          var quote = function (e) {
              var t =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r = {
                  "\b": "\\b",
                  "	": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                };
              return (
                (t.lastIndex = 0),
                t.test(e)
                  ? '"' +
                    e.replace(t, function (e) {
                      var t = r[e];
                      return "string" == typeof t
                        ? t
                        : "\\u" +
                            ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + e + '"'
              );
            },
            str = function (e, t) {
              var r = "",
                i = 0,
                n = "",
                o = "",
                s = 0,
                a = r,
                p = [],
                c = t[e];
              switch (
                (c &&
                  "object" == typeof c &&
                  "function" == typeof c.toJSON &&
                  (c = c.toJSON(e)),
                typeof c)
              ) {
                case "string":
                  return quote(c);
                case "number":
                  return isFinite(c) ? String(c) : "null";
                case "boolean":
                case "null":
                  return String(c);
                case "object":
                  if (!c) return "null";
                  if (
                    ((r += "    "), (p = []), "[object Array]" === S.apply(c))
                  ) {
                    for (i = 0, s = c.length; i < s; i += 1)
                      p[i] = str(i, c) || "null";
                    return (
                      (o =
                        0 === p.length
                          ? "[]"
                          : r
                          ? "[\n" + r + p.join(",\n" + r) + "\n" + a + "]"
                          : "[" + p.join(",") + "]"),
                      (r = a),
                      o
                    );
                  }
                  for (n in c)
                    O.call(c, n) &&
                      (o = str(n, c)) &&
                      p.push(quote(n) + (r ? ": " : ":") + o);
                  return (
                    (o =
                      0 === p.length
                        ? "{}"
                        : r
                        ? "{" + p.join(",") + a + "}"
                        : "{" + p.join(",") + "}"),
                    (r = a),
                    o
                  );
              }
            };
          return str("", { "": e });
        }),
        (U.JSONDecode =
          ((o = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	",
          }),
          (s = function (e) {
            var r = SyntaxError(e);
            throw ((r.at = t), (r.text = i), r);
          }),
          (a = function (e) {
            return (
              e && e !== r && s("Expected '" + e + "' instead of '" + r + "'"),
              (r = i.charAt(t)),
              (t += 1),
              r
            );
          }),
          (p = function () {
            var e,
              t = "";
            for ("-" === r && ((t = "-"), a("-")); r >= "0" && r <= "9"; )
              (t += r), a();
            if ("." === r) for (t += "."; a() && r >= "0" && r <= "9"; ) t += r;
            if ("e" === r || "E" === r)
              for (
                t += r, a(), ("-" === r || "+" === r) && ((t += r), a());
                r >= "0" && r <= "9";

              )
                (t += r), a();
            if (isFinite((e = +t))) return e;
            s("Bad number");
          }),
          (c = function () {
            var e,
              t,
              i,
              n = "";
            if ('"' === r)
              for (; a(); ) {
                if ('"' === r) return a(), n;
                if ("\\" === r) {
                  if ((a(), "u" === r)) {
                    for (
                      t = 0, i = 0;
                      t < 4 && isFinite((e = parseInt(a(), 16)));
                      t += 1
                    )
                      i = 16 * i + e;
                    n += String.fromCharCode(i);
                  } else if ("string" == typeof o[r]) n += o[r];
                  else break;
                } else n += r;
              }
            s("Bad string");
          }),
          (u = function () {
            for (; r && r <= " "; ) a();
          }),
          (l = function () {
            switch (r) {
              case "t":
                return a("t"), a("r"), a("u"), a("e"), !0;
              case "f":
                return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
              case "n":
                return a("n"), a("u"), a("l"), a("l"), null;
            }
            s('Unexpected "' + r + '"');
          }),
          (_ = function () {
            var e = [];
            if ("[" === r) {
              if ((a("["), u(), "]" === r)) return a("]"), e;
              for (; r; ) {
                if ((e.push(n()), u(), "]" === r)) return a("]"), e;
                a(","), u();
              }
            }
            s("Bad array");
          }),
          (d = function () {
            var e,
              t = {};
            if ("{" === r) {
              if ((a("{"), u(), "}" === r)) return a("}"), t;
              for (; r; ) {
                if (
                  ((e = c()),
                  u(),
                  a(":"),
                  Object.hasOwnProperty.call(t, e) &&
                    s('Duplicate key "' + e + '"'),
                  (t[e] = n()),
                  u(),
                  "}" === r)
                )
                  return a("}"), t;
                a(","), u();
              }
            }
            s("Bad object");
          }),
          (n = function () {
            switch ((u(), r)) {
              case "{":
                return d();
              case "[":
                return _();
              case '"':
                return c();
              case "-":
                return p();
              default:
                return r >= "0" && r <= "9" ? p() : l();
            }
          }),
          function (e) {
            var o;
            return (
              (i = e),
              (t = 0),
              (r = " "),
              (o = n()),
              u(),
              r && s("Syntax error"),
              o
            );
          })),
        (U.base64Encode = function (e) {
          var t,
            r,
            i,
            n,
            o,
            s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            p = 0,
            c = "",
            u = [];
          if (!e) return e;
          e = U.utf8Encode(e);
          do
            (t =
              ((o =
                (e.charCodeAt(a++) << 16) |
                (e.charCodeAt(a++) << 8) |
                e.charCodeAt(a++)) >>
                18) &
              63),
              (r = (o >> 12) & 63),
              (i = (o >> 6) & 63),
              (n = 63 & o),
              (u[p++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(n));
          while (a < e.length);
          switch (((c = u.join("")), e.length % 3)) {
            case 1:
              c = c.slice(0, -2) + "==";
              break;
            case 2:
              c = c.slice(0, -1) + "=";
          }
          return c;
        }),
        (U.utf8Encode = function (e) {
          e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
          var t,
            r,
            i,
            n = "",
            o = 0;
          for (i = 0, t = r = 0, o = e.length; i < o; i++) {
            var s = e.charCodeAt(i),
              a = null;
            s < 128
              ? r++
              : (a =
                  s > 127 && s < 2048
                    ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                    : String.fromCharCode(
                        (s >> 12) | 224,
                        ((s >> 6) & 63) | 128,
                        (63 & s) | 128
                      )),
              null !== a &&
                (r > t && (n += e.substring(t, r)), (n += a), (t = r = i + 1));
          }
          return r > t && (n += e.substring(t, e.length)), n;
        }),
        (U.UUID =
          ((h = function () {
            for (var e = 1 * new Date(), t = 0; e == 1 * new Date(); ) t++;
            return e.toString(16) + t.toString(16);
          }),
          (f = function () {
            var e,
              t,
              r = [],
              i = 0;
            function xor(e, t) {
              var i,
                n = 0;
              for (i = 0; i < t.length; i++) n |= r[i] << (8 * i);
              return e ^ n;
            }
            for (e = 0; e < T.length; e++)
              (t = T.charCodeAt(e)),
                r.unshift(255 & t),
                r.length >= 4 && ((i = xor(i, r)), (r = []));
            return r.length > 0 && (i = xor(i, r)), i.toString(16);
          }),
          function () {
            var e = (I.height * I.width).toString(16);
            return (
              h() +
              "-" +
              Math.random().toString(16).replace(".", "") +
              "-" +
              f() +
              "-" +
              e +
              "-" +
              h()
            );
          }));
      var $ = [
        "ahrefsbot",
        "baiduspider",
        "bingbot",
        "bingpreview",
        "facebookexternal",
        "petalbot",
        "pinterest",
        "screaming frog",
        "yahoo! slurp",
        "yandexbot",
        "adsbot-google",
        "apis-google",
        "duplexweb-google",
        "feedfetcher-google",
        "google favicon",
        "google web preview",
        "google-read-aloud",
        "googlebot",
        "googleweblight",
        "mediapartners-google",
        "storebot-google",
      ];
      (U.isBlockedUA = function (e) {
        var t;
        for (t = 0, e = e.toLowerCase(); t < $.length; t++)
          if (-1 !== e.indexOf($[t])) return !0;
        return !1;
      }),
        (U.HTTPBuildQuery = function (e, t) {
          var r,
            i,
            n = [];
          return (
            U.isUndefined(t) && (t = "&"),
            U.each(e, function (e, t) {
              (r = encodeURIComponent(e.toString())),
                (i = encodeURIComponent(t)),
                (n[n.length] = i + "=" + r);
            }),
            n.join(t)
          );
        }),
        (U.getQueryParam = function (e, t) {
          var r =
              "[\\?&]" +
              (t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")) +
              "=([^&#]*)",
            i = new RegExp(r).exec(e);
          if (null === i || (i && "string" != typeof i[1] && i[1].length))
            return "";
          var n = i[1];
          try {
            n = decodeURIComponent(n);
          } catch (e) {
            F.error("Skipping decoding for malformed query param: " + n);
          }
          return n.replace(/\+/g, " ");
        }),
        (U.cookie = {
          get: function (e) {
            for (
              var t = e + "=", r = E.cookie.split(";"), i = 0;
              i < r.length;
              i++
            ) {
              for (var n = r[i]; " " == n.charAt(0); )
                n = n.substring(1, n.length);
              if (0 === n.indexOf(t))
                return decodeURIComponent(n.substring(t.length, n.length));
            }
            return null;
          },
          parse: function (e) {
            var t;
            try {
              t = U.JSONDecode(U.cookie.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set_seconds: function (e, t, r, i, n, o, s) {
            var a = "",
              p = "",
              c = "";
            if (s) a = "; domain=" + s;
            else if (i) {
              var u = extract_domain(E.location.hostname);
              a = u ? "; domain=." + u : "";
            }
            if (r) {
              var l = new Date();
              l.setTime(l.getTime() + 1e3 * r),
                (p = "; expires=" + l.toGMTString());
            }
            o && ((n = !0), (c = "; SameSite=None")),
              n && (c += "; secure"),
              (E.cookie =
                e + "=" + encodeURIComponent(t) + p + "; path=/" + a + c);
          },
          set: function (e, t, r, i, n, o, s) {
            var a = "",
              p = "",
              c = "";
            if (s) a = "; domain=" + s;
            else if (i) {
              var u = extract_domain(E.location.hostname);
              a = u ? "; domain=." + u : "";
            }
            if (r) {
              var l = new Date();
              l.setTime(l.getTime() + 864e5 * r),
                (p = "; expires=" + l.toGMTString());
            }
            o && ((n = !0), (c = "; SameSite=None")), n && (c += "; secure");
            var _ = e + "=" + encodeURIComponent(t) + p + "; path=/" + a + c;
            return (E.cookie = _), _;
          },
          remove: function (e, t, r) {
            U.cookie.set(e, "", -1, t, !1, !1, r);
          },
        });
      var R = null,
        localStorageSupported = function (e, t) {
          if (null !== R && !t) return R;
          var r = !0;
          try {
            e = e || window.localStorage;
            var i = "__mplss_" + cheap_guid(8);
            e.setItem(i, "xyz"),
              "xyz" !== e.getItem(i) && (r = !1),
              e.removeItem(i);
          } catch (e) {
            r = !1;
          }
          return (R = r), r;
        };
      (U.localStorage = {
        is_supported: function (e) {
          var t = localStorageSupported(null, e);
          return (
            t ||
              F.error("localStorage unsupported; falling back to cookie store"),
            t
          );
        },
        error: function (e) {
          F.error("localStorage error: " + e);
        },
        get: function (e) {
          try {
            return window.localStorage.getItem(e);
          } catch (e) {
            U.localStorage.error(e);
          }
          return null;
        },
        parse: function (e) {
          try {
            return U.JSONDecode(U.localStorage.get(e)) || {};
          } catch (e) {}
          return null;
        },
        set: function (e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch (e) {
            U.localStorage.error(e);
          }
        },
        remove: function (e) {
          try {
            window.localStorage.removeItem(e);
          } catch (e) {
            U.localStorage.error(e);
          }
        },
      }),
        (U.register_event = (function () {
          function fixEvent(e) {
            return (
              e &&
                ((e.preventDefault = fixEvent.preventDefault),
                (e.stopPropagation = fixEvent.stopPropagation)),
              e
            );
          }
          return (
            (fixEvent.preventDefault = function () {
              this.returnValue = !1;
            }),
            (fixEvent.stopPropagation = function () {
              this.cancelBubble = !0;
            }),
            function (e, t, r, i, n) {
              if (!e) {
                F.error("No valid element provided to register_event");
                return;
              }
              if (e.addEventListener && !i) e.addEventListener(t, r, !!n);
              else {
                var o = "on" + t,
                  s = e[o];
                e[o] = function (t) {
                  if ((t = t || fixEvent(window.event))) {
                    var i,
                      n,
                      o = !0;
                    return (
                      U.isFunction(s) && (i = s(t)),
                      (n = r.call(e, t)),
                      (!1 === i || !1 === n) && (o = !1),
                      o
                    );
                  }
                };
              }
            }
          );
        })());
      var G = RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
      (U.dom_query = (function () {
        function getAllChildren(e) {
          return e.all ? e.all : e.getElementsByTagName("*");
        }
        var e = /[\t\r\n]/g;
        function getElementsBySelector(t) {
          if (!E.getElementsByTagName) return [];
          var r = t.split(" "),
            i = [E];
          for (d = 0; d < r.length; d++) {
            if (
              (p = r[d].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") >
              -1
            ) {
              u = (c = p.split("#"))[0];
              var n = c[1],
                o = E.getElementById(n);
              if (!o || (u && o.nodeName.toLowerCase() != u)) return [];
              i = [o];
              continue;
            }
            if (p.indexOf(".") > -1) {
              u = (c = p.split("."))[0];
              var s = c[1];
              for (u || (u = "*"), l = [], _ = 0, h = 0; h < i.length; h++)
                for (
                  f = 0,
                    g =
                      "*" == u
                        ? getAllChildren(i[h])
                        : i[h].getElementsByTagName(u);
                  f < g.length;
                  f++
                )
                  l[_++] = g[f];
              for (h = 0, i = [], m = 0; h < l.length; h++)
                l[h].className &&
                  U.isString(l[h].className) &&
                  (" " + l[h].className + " ")
                    .replace(e, " ")
                    .indexOf(" " + s + " ") >= 0 &&
                  (i[m++] = l[h]);
              continue;
            }
            var a = p.match(G);
            if (a) {
              u = a[1];
              var p,
                c,
                u,
                l,
                _,
                d,
                h,
                f,
                g,
                m,
                y,
                v = a[2],
                b = a[3],
                x = a[4];
              for (u || (u = "*"), l = [], _ = 0, h = 0; h < i.length; h++)
                for (
                  f = 0,
                    g =
                      "*" == u
                        ? getAllChildren(i[h])
                        : i[h].getElementsByTagName(u);
                  f < g.length;
                  f++
                )
                  l[_++] = g[f];
              switch (((i = []), (m = 0), b)) {
                case "=":
                  y = function (e) {
                    return e.getAttribute(v) == x;
                  };
                  break;
                case "~":
                  y = function (e) {
                    return e.getAttribute(v).match(RegExp("\\b" + x + "\\b"));
                  };
                  break;
                case "|":
                  y = function (e) {
                    return e.getAttribute(v).match(RegExp("^" + x + "-?"));
                  };
                  break;
                case "^":
                  y = function (e) {
                    return 0 === e.getAttribute(v).indexOf(x);
                  };
                  break;
                case "$":
                  y = function (e) {
                    return (
                      e.getAttribute(v).lastIndexOf(x) ==
                      e.getAttribute(v).length - x.length
                    );
                  };
                  break;
                case "*":
                  y = function (e) {
                    return e.getAttribute(v).indexOf(x) > -1;
                  };
                  break;
                default:
                  y = function (e) {
                    return e.getAttribute(v);
                  };
              }
              for (h = 0, i = [], m = 0; h < l.length; h++)
                y(l[h]) && (i[m++] = l[h]);
              continue;
            }
            for (h = 0, u = p, l = [], _ = 0; h < i.length; h++)
              for (f = 0, g = i[h].getElementsByTagName(u); f < g.length; f++)
                l[_++] = g[f];
            i = l;
          }
          return i;
        }
        return function (e) {
          return U.isElement(e)
            ? [e]
            : U.isObject(e) && !U.isUndefined(e.length)
            ? e
            : getElementsBySelector.call(this, e);
        };
      })()),
        (U.info = {
          campaignParams: function () {
            var e = "",
              t = {};
            return (
              U.each(
                "utm_source utm_medium utm_campaign utm_content utm_term".split(
                  " "
                ),
                function (r) {
                  (e = U.getQueryParam(E.URL, r)).length && (t[r] = e);
                }
              ),
              t
            );
          },
          searchEngine: function (e) {
            return 0 === e.search("https?://(.*)google.([^/?]*)")
              ? "google"
              : 0 === e.search("https?://(.*)bing.com")
              ? "bing"
              : 0 === e.search("https?://(.*)yahoo.com")
              ? "yahoo"
              : 0 === e.search("https?://(.*)duckduckgo.com")
              ? "duckduckgo"
              : null;
          },
          searchInfo: function (e) {
            var t = U.info.searchEngine(e),
              r = {};
            if (null !== t) {
              r.$search_engine = t;
              var i = U.getQueryParam(e, "yahoo" != t ? "q" : "p");
              i.length && (r.mp_keyword = i);
            }
            return r;
          },
          browser: function (e, t, r) {
            if (((t = t || ""), r || U.includes(e, " OPR/")))
              return U.includes(e, "Mini") ? "Opera Mini" : "Opera";
            if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
            if (U.includes(e, "IEMobile") || U.includes(e, "WPDesktop"))
              return "Internet Explorer Mobile";
            if (U.includes(e, "SamsungBrowser/")) return "Samsung Internet";
            if (U.includes(e, "Edge") || U.includes(e, "Edg/"))
              return "Microsoft Edge";
            if (U.includes(e, "FBIOS")) return "Facebook Mobile";
            if (U.includes(e, "Chrome")) return "Chrome";
            else if (U.includes(e, "CriOS")) return "Chrome iOS";
            else if (U.includes(e, "UCWEB") || U.includes(e, "UCBrowser"))
              return "UC Browser";
            else if (U.includes(e, "FxiOS")) return "Firefox iOS";
            else if (U.includes(t, "Apple"))
              return U.includes(e, "Mobile") ? "Mobile Safari" : "Safari";
            else if (U.includes(e, "Android")) return "Android Mobile";
            else if (U.includes(e, "Konqueror")) return "Konqueror";
            else if (U.includes(e, "Firefox")) return "Firefox";
            else if (U.includes(e, "MSIE") || U.includes(e, "Trident/"))
              return "Internet Explorer";
            else if (U.includes(e, "Gecko")) return "Mozilla";
            else return "";
          },
          browserVersion: function (e, t, r) {
            var i = {
              "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
              "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
              Chrome: /Chrome\/(\d+(\.\d+)?)/,
              "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
              "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
              Safari: /Version\/(\d+(\.\d+)?)/,
              "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
              Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
              Firefox: /Firefox\/(\d+(\.\d+)?)/,
              "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
              Konqueror: /Konqueror:(\d+(\.\d+)?)/,
              BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
              "Android Mobile": /android\s(\d+(\.\d+)?)/,
              "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
              "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
              Mozilla: /rv:(\d+(\.\d+)?)/,
            }[U.info.browser(e, t, r)];
            if (void 0 === i) return null;
            var n = e.match(i);
            return n ? parseFloat(n[n.length - 2]) : null;
          },
          os: function () {
            if (/Windows/i.test(T))
              return /Phone/.test(T) || /WPDesktop/.test(T)
                ? "Windows Phone"
                : "Windows";
            if (/(iPhone|iPad|iPod)/.test(T)) return "iOS";
            if (/Android/.test(T)) return "Android";
            if (/(BlackBerry|PlayBook|BB10)/i.test(T)) return "BlackBerry";
            if (/Mac/i.test(T)) return "Mac OS X";
            if (/Linux/.test(T)) return "Linux";
            if (/CrOS/.test(T)) return "Chrome OS";
            else return "";
          },
          device: function (e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
              ? "Windows Phone"
              : /iPad/.test(e)
              ? "iPad"
              : /iPod/.test(e)
              ? "iPod Touch"
              : /iPhone/.test(e)
              ? "iPhone"
              : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? "BlackBerry"
              : /Android/.test(e)
              ? "Android"
              : "";
          },
          referringDomain: function (e) {
            var t = e.split("/");
            return t.length >= 3 ? t[2] : "";
          },
          properties: function () {
            return U.extend(
              U.strip_empty_properties({
                $os: U.info.os(),
                $browser: U.info.browser(T, L.vendor, P),
                $referrer: E.referrer,
                $referring_domain: U.info.referringDomain(E.referrer),
                $device: U.info.device(T),
              }),
              {
                $current_url: g.location.href,
                $browser_version: U.info.browserVersion(T, L.vendor, P),
                $screen_height: I.height,
                $screen_width: I.width,
                mp_lib: "web",
                $lib_version: v.LIB_VERSION,
                $insert_id: cheap_guid(),
                time: U.timestamp() / 1e3,
              }
            );
          },
          people_properties: function () {
            return U.extend(
              U.strip_empty_properties({
                $os: U.info.os(),
                $browser: U.info.browser(T, L.vendor, P),
              }),
              { $browser_version: U.info.browserVersion(T, L.vendor, P) }
            );
          },
          pageviewInfo: function (e) {
            return U.strip_empty_properties({
              mp_page: e,
              mp_referrer: E.referrer,
              mp_browser: U.info.browser(T, L.vendor, P),
              mp_platform: U.info.os(),
            });
          },
        });
      var cheap_guid = function (e) {
          var t =
            Math.random().toString(36).substring(2, 10) +
            Math.random().toString(36).substring(2, 10);
          return e ? t.substring(0, e) : t;
        },
        z = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        Q = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        extract_domain = function (e) {
          var t = Q,
            r = e.split("."),
            i = r[r.length - 1];
          (i.length > 4 || "com" === i || "org" === i) && (t = z);
          var n = e.match(t);
          return n ? n[0] : "";
        },
        J = null,
        K = null;
      "undefined" != typeof JSON && ((J = JSON.stringify), (K = JSON.parse)),
        (J = J || U.JSONEncode),
        (K = K || U.JSONDecode),
        (U.toArray = U.toArray),
        (U.isObject = U.isObject),
        (U.JSONEncode = U.JSONEncode),
        (U.JSONDecode = U.JSONDecode),
        (U.isBlockedUA = U.isBlockedUA),
        (U.isEmptyObject = U.isEmptyObject),
        (U.info = U.info),
        (U.info.device = U.info.device),
        (U.info.browser = U.info.browser),
        (U.info.browserVersion = U.info.browserVersion),
        (U.info.properties = U.info.properties);
      var DomTracker = function () {};
      (DomTracker.prototype.create_properties = function () {}),
        (DomTracker.prototype.event_handler = function () {}),
        (DomTracker.prototype.after_track_handler = function () {}),
        (DomTracker.prototype.init = function (e) {
          return (this.mp = e), this;
        }),
        (DomTracker.prototype.track = function (e, t, r, i) {
          var n = this,
            o = U.dom_query(e);
          if (0 === o.length) {
            F.error("The DOM query (" + e + ") returned 0 elements");
            return;
          }
          return (
            U.each(
              o,
              function (e) {
                U.register_event(e, this.override_event, function (e) {
                  var o = {},
                    s = n.create_properties(r, this),
                    a = n.mp.get_config("track_links_timeout");
                  n.event_handler(e, this, o),
                    window.setTimeout(n.track_callback(i, s, o, !0), a),
                    n.mp.track(t, s, n.track_callback(i, s, o));
                });
              },
              this
            ),
            !0
          );
        }),
        (DomTracker.prototype.track_callback = function (e, t, r, i) {
          i = i || !1;
          var n = this;
          return function () {
            !r.callback_fired &&
              ((r.callback_fired = !0),
              (e && !1 === e(i, t)) || n.after_track_handler(t, r, i));
          };
        }),
        (DomTracker.prototype.create_properties = function (e, t) {
          return "function" == typeof e ? e(t) : U.extend({}, e);
        });
      var LinkTracker = function () {
        this.override_event = "click";
      };
      U.inherit(LinkTracker, DomTracker),
        (LinkTracker.prototype.create_properties = function (e, t) {
          var r = LinkTracker.superclass.create_properties.apply(
            this,
            arguments
          );
          return t.href && (r.url = t.href), r;
        }),
        (LinkTracker.prototype.event_handler = function (e, t, r) {
          (r.new_tab =
            2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target),
            (r.href = t.href),
            r.new_tab || e.preventDefault();
        }),
        (LinkTracker.prototype.after_track_handler = function (e, t) {
          t.new_tab ||
            setTimeout(function () {
              window.location = t.href;
            }, 0);
        });
      var FormTracker = function () {
        this.override_event = "submit";
      };
      U.inherit(FormTracker, DomTracker),
        (FormTracker.prototype.event_handler = function (e, t, r) {
          (r.element = t), e.preventDefault();
        }),
        (FormTracker.prototype.after_track_handler = function (e, t) {
          setTimeout(function () {
            t.element.submit();
          }, 0);
        });
      var H = console_with_prefix("lock"),
        SharedLock = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.pollIntervalMS = t.pollIntervalMS || 100),
            (this.timeoutMS = t.timeoutMS || 2e3);
        };
      SharedLock.prototype.withLock = function (e, t, r) {
        r || "function" == typeof t || ((r = t), (t = null));
        var i = r || new Date().getTime() + "|" + Math.random(),
          n = new Date().getTime(),
          o = this.storageKey,
          s = this.pollIntervalMS,
          a = this.timeoutMS,
          p = this.storage,
          c = o + ":X",
          u = o + ":Y",
          l = o + ":Z",
          reportError = function (e) {
            t && t(e);
          },
          delay = function (e) {
            if (new Date().getTime() - n > a) {
              H.error(
                "Timeout waiting for mutex on " +
                  o +
                  "; clearing lock. [" +
                  i +
                  "]"
              ),
                p.removeItem(l),
                p.removeItem(u),
                loop();
              return;
            }
            setTimeout(function () {
              try {
                e();
              } catch (e) {
                reportError(e);
              }
            }, s * (Math.random() + 0.1));
          },
          waitFor = function (e, t) {
            e()
              ? t()
              : delay(function () {
                  waitFor(e, t);
                });
          },
          getSetY = function () {
            var e = p.getItem(u);
            if (e && e !== i) return !1;
            if ((p.setItem(u, i), p.getItem(u) === i)) return !0;
            if (!localStorageSupported(p, !0))
              throw Error("localStorage support dropped while acquiring lock");
            return !1;
          },
          loop = function () {
            p.setItem(c, i),
              waitFor(getSetY, function () {
                if (p.getItem(c) === i) {
                  criticalSection();
                  return;
                }
                delay(function () {
                  if (p.getItem(u) !== i) {
                    loop();
                    return;
                  }
                  waitFor(function () {
                    return !p.getItem(l);
                  }, criticalSection);
                });
              });
          },
          criticalSection = function () {
            p.setItem(l, "1");
            try {
              e();
            } finally {
              p.removeItem(l),
                p.getItem(u) === i && p.removeItem(u),
                p.getItem(c) === i && p.removeItem(c);
            }
          };
        try {
          if (localStorageSupported(p, !0)) loop();
          else throw Error("localStorage support check failed");
        } catch (e) {
          reportError(e);
        }
      };
      var V = console_with_prefix("batch"),
        RequestQueue = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.reportError = t.errorReporter || U.bind(V.error, V)),
            (this.lock = new SharedLock(e, { storage: this.storage })),
            (this.pid = t.pid || null),
            (this.memQueue = []);
        };
      (RequestQueue.prototype.enqueue = function (e, t, r) {
        var i = {
          id: cheap_guid(),
          flushAfter: new Date().getTime() + 2 * t,
          payload: e,
        };
        this.lock.withLock(
          U.bind(function () {
            var t;
            try {
              var n = this.readFromStorage();
              n.push(i), (t = this.saveToStorage(n)) && this.memQueue.push(i);
            } catch (r) {
              this.reportError("Error enqueueing item", e), (t = !1);
            }
            r && r(t);
          }, this),
          U.bind(function (e) {
            this.reportError("Error acquiring storage lock", e), r && r(!1);
          }, this),
          this.pid
        );
      }),
        (RequestQueue.prototype.fillBatch = function (e) {
          var t = this.memQueue.slice(0, e);
          if (t.length < e) {
            var r = this.readFromStorage();
            if (r.length) {
              var i = {};
              U.each(t, function (e) {
                i[e.id] = !0;
              });
              for (var n = 0; n < r.length; n++) {
                var o = r[n];
                if (
                  new Date().getTime() > o.flushAfter &&
                  !i[o.id] &&
                  ((o.orphaned = !0), t.push(o), t.length >= e)
                )
                  break;
              }
            }
          }
          return t;
        });
      var filterOutIDsAndInvalid = function (e, t) {
        var r = [];
        return (
          U.each(e, function (e) {
            e.id && !t[e.id] && r.push(e);
          }),
          r
        );
      };
      RequestQueue.prototype.removeItemsByID = function (e, t) {
        var r = {};
        U.each(e, function (e) {
          r[e] = !0;
        }),
          (this.memQueue = filterOutIDsAndInvalid(this.memQueue, r));
        var i = U.bind(function () {
          var t;
          try {
            var i = this.readFromStorage();
            if (
              ((i = filterOutIDsAndInvalid(i, r)), (t = this.saveToStorage(i)))
            ) {
              i = this.readFromStorage();
              for (var n = 0; n < i.length; n++) {
                var o = i[n];
                if (o.id && r[o.id])
                  return this.reportError("Item not removed from storage"), !1;
              }
            }
          } catch (r) {
            this.reportError("Error removing items", e), (t = !1);
          }
          return t;
        }, this);
        this.lock.withLock(
          function () {
            var e = i();
            t && t(e);
          },
          U.bind(function (e) {
            var r = !1;
            if (
              (this.reportError("Error acquiring storage lock", e),
              !localStorageSupported(this.storage, !0) && !(r = i()))
            )
              try {
                this.storage.removeItem(this.storageKey);
              } catch (e) {
                this.reportError("Error clearing queue", e);
              }
            t && t(r);
          }, this),
          this.pid
        );
      };
      var updatePayloads = function (e, t) {
        var r = [];
        return (
          U.each(e, function (e) {
            var i = e.id;
            if (i in t) {
              var n = t[i];
              null !== n && ((e.payload = n), r.push(e));
            } else r.push(e);
          }),
          r
        );
      };
      (RequestQueue.prototype.updatePayloads = function (e, t) {
        (this.memQueue = updatePayloads(this.memQueue, e)),
          this.lock.withLock(
            U.bind(function () {
              var r;
              try {
                var i = this.readFromStorage();
                (i = updatePayloads(i, e)), (r = this.saveToStorage(i));
              } catch (t) {
                this.reportError("Error updating items", e), (r = !1);
              }
              t && t(r);
            }, this),
            U.bind(function (e) {
              this.reportError("Error acquiring storage lock", e), t && t(!1);
            }, this),
            this.pid
          );
      }),
        (RequestQueue.prototype.readFromStorage = function () {
          var e;
          try {
            (e = this.storage.getItem(this.storageKey)) &&
              ((e = K(e)),
              U.isArray(e) ||
                (this.reportError("Invalid storage entry:", e), (e = null)));
          } catch (t) {
            this.reportError("Error retrieving queue", t), (e = null);
          }
          return e || [];
        }),
        (RequestQueue.prototype.saveToStorage = function (e) {
          try {
            return this.storage.setItem(this.storageKey, J(e)), !0;
          } catch (e) {
            return this.reportError("Error saving queue", e), !1;
          }
        }),
        (RequestQueue.prototype.clear = function () {
          (this.memQueue = []), this.storage.removeItem(this.storageKey);
        });
      var X = console_with_prefix("batch"),
        RequestBatcher = function (e, t) {
          (this.errorReporter = t.errorReporter),
            (this.queue = new RequestQueue(e, {
              errorReporter: U.bind(this.reportError, this),
              storage: t.storage,
            })),
            (this.libConfig = t.libConfig),
            (this.sendRequest = t.sendRequestFunc),
            (this.beforeSendHook = t.beforeSendHook),
            (this.stopAllBatching = t.stopAllBatchingFunc),
            (this.batchSize = this.libConfig.batch_size),
            (this.flushInterval = this.libConfig.batch_flush_interval_ms),
            (this.stopped = !this.libConfig.batch_autostart),
            (this.consecutiveRemovalFailures = 0);
        };
      function optIn(e, t) {
        _optInOut(!0, e, t);
      }
      function optOut(e, t) {
        _optInOut(!1, e, t);
      }
      function hasOptedIn(e, t) {
        return "1" === _getStorageValue(e, t);
      }
      function hasOptedOut(e, t) {
        if (
          (function (e) {
            if (e && e.ignoreDnt) return !1;
            var t = (e && e.window) || g,
              r = t.navigator || {},
              i = !1;
            return (
              U.each(
                [r.doNotTrack, r.msDoNotTrack, t.doNotTrack],
                function (e) {
                  U.includes([!0, 1, "1", "yes"], e) && (i = !0);
                }
              ),
              i
            );
          })(t)
        )
          return (
            F.warn(
              'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
            ),
            !0
          );
        var r = "0" === _getStorageValue(e, t);
        return (
          r &&
            F.warn(
              "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
            ),
          r
        );
      }
      function addOptOutCheckMixpanelLib(e) {
        return _addOptOutCheck(e, function (e) {
          return this.get_config(e);
        });
      }
      function addOptOutCheckMixpanelPeople(e) {
        return _addOptOutCheck(e, function (e) {
          return this._get_config(e);
        });
      }
      function addOptOutCheckMixpanelGroup(e) {
        return _addOptOutCheck(e, function (e) {
          return this._get_config(e);
        });
      }
      function clearOptInOut(e, t) {
        _getStorage((t = t || {})).remove(
          _getStorageKey(e, t),
          !!t.crossSubdomainCookie,
          t.cookieDomain
        );
      }
      function _getStorage(e) {
        return "localStorage" === (e = e || {}).persistenceType
          ? U.localStorage
          : U.cookie;
      }
      function _getStorageKey(e, t) {
        return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e;
      }
      function _getStorageValue(e, t) {
        return _getStorage(t).get(_getStorageKey(e, t));
      }
      function _optInOut(e, t, r) {
        if (!U.isString(t) || !t.length) {
          F.error(
            "gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token"
          );
          return;
        }
        _getStorage((r = r || {})).set(
          _getStorageKey(t, r),
          e ? 1 : 0,
          U.isNumber(r.cookieExpiration) ? r.cookieExpiration : null,
          !!r.crossSubdomainCookie,
          !!r.secureCookie,
          !!r.crossSiteCookie,
          r.cookieDomain
        ),
          r.track &&
            e &&
            r.track(r.trackEventName || "$opt_in", r.trackProperties, {
              send_immediately: !0,
            });
      }
      function _addOptOutCheck(e, t) {
        return function () {
          var r = !1;
          try {
            var i = t.call(this, "token"),
              n = t.call(this, "ignore_dnt"),
              o = t.call(this, "opt_out_tracking_persistence_type"),
              s = t.call(this, "opt_out_tracking_cookie_prefix"),
              a = t.call(this, "window");
            i &&
              (r = hasOptedOut(i, {
                ignoreDnt: n,
                persistenceType: o,
                persistencePrefix: s,
                window: a,
              }));
          } catch (e) {
            F.error(
              "Unexpected error when checking tracking opt-out status: " + e
            );
          }
          if (!r) return e.apply(this, arguments);
          var p = arguments[arguments.length - 1];
          "function" == typeof p && p(0);
        };
      }
      (RequestBatcher.prototype.enqueue = function (e, t) {
        this.queue.enqueue(e, this.flushInterval, t);
      }),
        (RequestBatcher.prototype.start = function () {
          (this.stopped = !1),
            (this.consecutiveRemovalFailures = 0),
            this.flush();
        }),
        (RequestBatcher.prototype.stop = function () {
          (this.stopped = !0),
            this.timeoutID &&
              (clearTimeout(this.timeoutID), (this.timeoutID = null));
        }),
        (RequestBatcher.prototype.clear = function () {
          this.queue.clear();
        }),
        (RequestBatcher.prototype.resetBatchSize = function () {
          this.batchSize = this.libConfig.batch_size;
        }),
        (RequestBatcher.prototype.resetFlush = function () {
          this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
        }),
        (RequestBatcher.prototype.scheduleFlush = function (e) {
          (this.flushInterval = e),
            this.stopped ||
              (this.timeoutID = setTimeout(
                U.bind(this.flush, this),
                this.flushInterval
              ));
        }),
        (RequestBatcher.prototype.flush = function (e) {
          try {
            if (this.requestInProgress) {
              X.log("Flush: Request already in progress");
              return;
            }
            e = e || {};
            var t = this.libConfig.batch_request_timeout_ms,
              r = new Date().getTime(),
              i = this.batchSize,
              n = this.queue.fillBatch(i),
              o = [],
              s = {};
            if (
              (U.each(
                n,
                function (e) {
                  var t = e.payload;
                  this.beforeSendHook &&
                    !e.orphaned &&
                    (t = this.beforeSendHook(t)),
                    t && o.push(t),
                    (s[e.id] = t);
                },
                this
              ),
              o.length < 1)
            ) {
              this.resetFlush();
              return;
            }
            this.requestInProgress = !0;
            var a = U.bind(function (o) {
                this.requestInProgress = !1;
                try {
                  var a = !1;
                  if (e.unloading) this.queue.updatePayloads(s);
                  else if (
                    U.isObject(o) &&
                    "timeout" === o.error &&
                    new Date().getTime() - r >= t
                  )
                    this.reportError("Network timeout; retrying"), this.flush();
                  else if (
                    U.isObject(o) &&
                    o.xhr_req &&
                    (o.xhr_req.status >= 500 ||
                      429 === o.xhr_req.status ||
                      "timeout" === o.error)
                  ) {
                    var p = 2 * this.flushInterval,
                      c = o.xhr_req.responseHeaders;
                    if (c) {
                      var u = c["Retry-After"];
                      u && (p = 1e3 * parseInt(u, 10) || p);
                    }
                    (p = Math.min(6e5, p)),
                      this.reportError("Error; retry in " + p + " ms"),
                      this.scheduleFlush(p);
                  } else if (
                    U.isObject(o) &&
                    o.xhr_req &&
                    413 === o.xhr_req.status
                  ) {
                    if (n.length > 1) {
                      var l = Math.max(1, Math.floor(i / 2));
                      (this.batchSize = Math.min(
                        this.batchSize,
                        l,
                        n.length - 1
                      )),
                        this.reportError(
                          "413 response; reducing batch size to " +
                            this.batchSize
                        ),
                        this.resetFlush();
                    } else
                      this.reportError(
                        "Single-event request too large; dropping",
                        n
                      ),
                        this.resetBatchSize(),
                        (a = !0);
                  } else a = !0;
                  a &&
                    this.queue.removeItemsByID(
                      U.map(n, function (e) {
                        return e.id;
                      }),
                      U.bind(function (e) {
                        e
                          ? ((this.consecutiveRemovalFailures = 0),
                            this.flush())
                          : (this.reportError(
                              "Failed to remove items from queue"
                            ),
                            ++this.consecutiveRemovalFailures > 5
                              ? (this.reportError(
                                  "Too many queue failures; disabling batching system."
                                ),
                                this.stopAllBatching())
                              : this.resetFlush());
                      }, this)
                    );
                } catch (e) {
                  this.reportError("Error handling API response", e),
                    this.resetFlush();
                }
              }, this),
              p = {
                method: "POST",
                verbose: !0,
                ignore_json_errors: !0,
                timeout_ms: t,
              };
            e.unloading && (p.transport = "sendBeacon"),
              X.log("MIXPANEL REQUEST:", o),
              this.sendRequest(o, p, a);
          } catch (e) {
            this.reportError("Error flushing request queue", e),
              this.resetFlush();
          }
        }),
        (RequestBatcher.prototype.reportError = function (e, t) {
          if ((X.error.apply(X.error, arguments), this.errorReporter))
            try {
              t instanceof Error || (t = Error(e)), this.errorReporter(e, t);
            } catch (e) {
              X.error(e);
            }
        });
      var Y = "$set",
        W = "$set_once",
        Z = "$unset",
        ee = "$add",
        et = "$append",
        er = "$union",
        ei = "$remove",
        en = {
          set_action: function (e, t) {
            var r = {},
              i = {};
            return (
              U.isObject(e)
                ? U.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[Y] = i),
              r
            );
          },
          unset_action: function (e) {
            var t = {},
              r = [];
            return (
              U.isArray(e) || (e = [e]),
              U.each(
                e,
                function (e) {
                  this._is_reserved_property(e) || r.push(e);
                },
                this
              ),
              (t[Z] = r),
              t
            );
          },
          set_once_action: function (e, t) {
            var r = {},
              i = {};
            return (
              U.isObject(e)
                ? U.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[W] = i),
              r
            );
          },
          union_action: function (e, t) {
            var r = {},
              i = {};
            return (
              U.isObject(e)
                ? U.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) ||
                        (i[t] = U.isArray(e) ? e : [e]);
                    },
                    this
                  )
                : (i[e] = U.isArray(t) ? t : [t]),
              (r[er] = i),
              r
            );
          },
          append_action: function (e, t) {
            var r = {},
              i = {};
            return (
              U.isObject(e)
                ? U.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[et] = i),
              r
            );
          },
          remove_action: function (e, t) {
            var r = {},
              i = {};
            return (
              U.isObject(e)
                ? U.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[ei] = i),
              r
            );
          },
          delete_action: function () {
            var e = {};
            return (e.$delete = ""), e;
          },
        },
        MixpanelGroup = function () {};
      U.extend(MixpanelGroup.prototype, en),
        (MixpanelGroup.prototype._init = function (e, t, r) {
          (this._mixpanel = e), (this._group_key = t), (this._group_id = r);
        }),
        (MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function (
          e,
          t,
          r
        ) {
          var i = this.set_action(e, t);
          return U.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(
          function (e, t, r) {
            var i = this.set_once_action(e, t);
            return U.isObject(e) && (r = t), this._send_request(i, r);
          }
        )),
        (MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function (
          e,
          t
        ) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        })),
        (MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function (
          e,
          t,
          r
        ) {
          U.isObject(e) && (r = t);
          var i = this.union_action(e, t);
          return this._send_request(i, r);
        })),
        (MixpanelGroup.prototype.delete = addOptOutCheckMixpanelGroup(function (
          e
        ) {
          var t = this.delete_action();
          return this._send_request(t, e);
        })),
        (MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function (
          e,
          t,
          r
        ) {
          var i = this.remove_action(e, t);
          return this._send_request(i, r);
        })),
        (MixpanelGroup.prototype._send_request = function (e, t) {
          (e.$group_key = this._group_key),
            (e.$group_id = this._group_id),
            (e.$token = this._get_config("token"));
          var r = U.encodeDates(e);
          return this._mixpanel._track_or_batch(
            {
              type: "groups",
              data: r,
              endpoint: this._get_config("api_host") + "/groups/",
              batcher: this._mixpanel.request_batchers.groups,
            },
            t
          );
        }),
        (MixpanelGroup.prototype._is_reserved_property = function (e) {
          return "$group_key" === e || "$group_id" === e;
        }),
        (MixpanelGroup.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (MixpanelGroup.prototype.toString = function () {
          return (
            this._mixpanel.toString() +
            ".group." +
            this._group_key +
            "." +
            this._group_id
          );
        }),
        (MixpanelGroup.prototype.remove = MixpanelGroup.prototype.remove),
        (MixpanelGroup.prototype.set = MixpanelGroup.prototype.set),
        (MixpanelGroup.prototype.set_once = MixpanelGroup.prototype.set_once),
        (MixpanelGroup.prototype.union = MixpanelGroup.prototype.union),
        (MixpanelGroup.prototype.unset = MixpanelGroup.prototype.unset),
        (MixpanelGroup.prototype.toString = MixpanelGroup.prototype.toString);
      var MixpanelPeople = function () {};
      U.extend(MixpanelPeople.prototype, en),
        (MixpanelPeople.prototype._init = function (e) {
          this._mixpanel = e;
        }),
        (MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function (
          e,
          t,
          r
        ) {
          var i = this.set_action(e, t);
          return (
            U.isObject(e) && (r = t),
            this._get_config("save_referrer") &&
              this._mixpanel.persistence.update_referrer_info(
                document.referrer
              ),
            (i[Y] = U.extend(
              {},
              U.info.people_properties(),
              this._mixpanel.persistence.get_referrer_info(),
              i[Y]
            )),
            this._send_request(i, r)
          );
        })),
        (MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            var i = this.set_once_action(e, t);
            return U.isObject(e) && (r = t), this._send_request(i, r);
          }
        )),
        (MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(
          function (e, t) {
            var r = this.unset_action(e);
            return this._send_request(r, t);
          }
        )),
        (MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            var i = {},
              n = {};
            return (
              U.isObject(e)
                ? (U.each(
                    e,
                    function (e, t) {
                      if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e))) {
                          F.error(
                            "Invalid increment value passed to mixpanel.people.increment - must be a number"
                          );
                          return;
                        }
                        n[t] = e;
                      }
                    },
                    this
                  ),
                  (r = t))
                : (U.isUndefined(t) && (t = 1), (n[e] = t)),
              (i[ee] = n),
              this._send_request(i, r)
            );
          }
        )),
        (MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            U.isObject(e) && (r = t);
            var i = this.append_action(e, t);
            return this._send_request(i, r);
          }
        )),
        (MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            U.isObject(e) && (r = t);
            var i = this.remove_action(e, t);
            return this._send_request(i, r);
          }
        )),
        (MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            U.isObject(e) && (r = t);
            var i = this.union_action(e, t);
            return this._send_request(i, r);
          }
        )),
        (MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(
          function (e, t, r) {
            if (!U.isNumber(e) && isNaN((e = parseFloat(e)))) {
              F.error(
                "Invalid value passed to mixpanel.people.track_charge - must be a number"
              );
              return;
            }
            return this.append("$transactions", U.extend({ $amount: e }, t), r);
          }
        )),
        (MixpanelPeople.prototype.clear_charges = function (e) {
          return this.set("$transactions", [], e);
        }),
        (MixpanelPeople.prototype.delete_user = function () {
          if (!this._identify_called()) {
            F.error(
              "mixpanel.people.delete_user() requires you to call identify() first"
            );
            return;
          }
          var e = { $delete: this._mixpanel.get_distinct_id() };
          return this._send_request(e);
        }),
        (MixpanelPeople.prototype.toString = function () {
          return this._mixpanel.toString() + ".people";
        }),
        (MixpanelPeople.prototype._send_request = function (e, t) {
          (e.$token = this._get_config("token")),
            (e.$distinct_id = this._mixpanel.get_distinct_id());
          var r = this._mixpanel.get_property("$device_id"),
            i = this._mixpanel.get_property("$user_id"),
            n = this._mixpanel.get_property("$had_persisted_distinct_id");
          r && (e.$device_id = r),
            i && (e.$user_id = i),
            n && (e.$had_persisted_distinct_id = n);
          var o = U.encodeDates(e);
          return this._identify_called()
            ? this._mixpanel._track_or_batch(
                {
                  type: "people",
                  data: o,
                  endpoint: this._get_config("api_host") + "/engage/",
                  batcher: this._mixpanel.request_batchers.people,
                },
                t
              )
            : (this._enqueue(e),
              U.isUndefined(t) ||
                t(
                  this._get_config("verbose") ? { status: -1, error: null } : -1
                ),
              U.truncate(o, 255));
        }),
        (MixpanelPeople.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (MixpanelPeople.prototype._identify_called = function () {
          return !0 === this._mixpanel._flags.identify_called;
        }),
        (MixpanelPeople.prototype._enqueue = function (e) {
          Y in e
            ? this._mixpanel.persistence._add_to_people_queue(Y, e)
            : W in e
            ? this._mixpanel.persistence._add_to_people_queue(W, e)
            : Z in e
            ? this._mixpanel.persistence._add_to_people_queue(Z, e)
            : ee in e
            ? this._mixpanel.persistence._add_to_people_queue(ee, e)
            : et in e
            ? this._mixpanel.persistence._add_to_people_queue(et, e)
            : ei in e
            ? this._mixpanel.persistence._add_to_people_queue(ei, e)
            : er in e
            ? this._mixpanel.persistence._add_to_people_queue(er, e)
            : F.error("Invalid call to _enqueue():", e);
        }),
        (MixpanelPeople.prototype._flush_one_queue = function (e, t, r, i) {
          var n = this,
            o = U.extend({}, this._mixpanel.persistence._get_queue(e)),
            s = o;
          !U.isUndefined(o) &&
            U.isObject(o) &&
            !U.isEmptyObject(o) &&
            (n._mixpanel.persistence._pop_from_people_queue(e, o),
            i && (s = i(o)),
            t.call(n, s, function (t, i) {
              0 === t && n._mixpanel.persistence._add_to_people_queue(e, o),
                U.isUndefined(r) || r(t, i);
            }));
        }),
        (MixpanelPeople.prototype._flush = function (e, t, r, i, n, o, s) {
          var a = this,
            p = this._mixpanel.persistence._get_queue(et),
            c = this._mixpanel.persistence._get_queue(ei);
          if (
            (this._flush_one_queue(Y, this.set, e),
            this._flush_one_queue(W, this.set_once, i),
            this._flush_one_queue(Z, this.unset, o, function (e) {
              return U.keys(e);
            }),
            this._flush_one_queue(ee, this.increment, t),
            this._flush_one_queue(er, this.union, n),
            !U.isUndefined(p) && U.isArray(p) && p.length)
          ) {
            for (
              var u,
                append_callback = function (e, t) {
                  0 === e &&
                    a._mixpanel.persistence._add_to_people_queue(et, u),
                    U.isUndefined(r) || r(e, t);
                },
                l = p.length - 1;
              l >= 0;
              l--
            )
              (u = p.pop()), U.isEmptyObject(u) || a.append(u, append_callback);
            a._mixpanel.persistence.save();
          }
          if (!U.isUndefined(c) && U.isArray(c) && c.length) {
            for (
              var _,
                remove_callback = function (e, t) {
                  0 === e &&
                    a._mixpanel.persistence._add_to_people_queue(ei, _),
                    U.isUndefined(s) || s(e, t);
                },
                d = c.length - 1;
              d >= 0;
              d--
            )
              (_ = c.pop()), U.isEmptyObject(_) || a.remove(_, remove_callback);
            a._mixpanel.persistence.save();
          }
        }),
        (MixpanelPeople.prototype._is_reserved_property = function (e) {
          return (
            "$distinct_id" === e ||
            "$token" === e ||
            "$device_id" === e ||
            "$user_id" === e ||
            "$had_persisted_distinct_id" === e
          );
        }),
        (MixpanelPeople.prototype.set = MixpanelPeople.prototype.set),
        (MixpanelPeople.prototype.set_once = MixpanelPeople.prototype.set_once),
        (MixpanelPeople.prototype.unset = MixpanelPeople.prototype.unset),
        (MixpanelPeople.prototype.increment =
          MixpanelPeople.prototype.increment),
        (MixpanelPeople.prototype.append = MixpanelPeople.prototype.append),
        (MixpanelPeople.prototype.remove = MixpanelPeople.prototype.remove),
        (MixpanelPeople.prototype.union = MixpanelPeople.prototype.union),
        (MixpanelPeople.prototype.track_charge =
          MixpanelPeople.prototype.track_charge),
        (MixpanelPeople.prototype.clear_charges =
          MixpanelPeople.prototype.clear_charges),
        (MixpanelPeople.prototype.delete_user =
          MixpanelPeople.prototype.delete_user),
        (MixpanelPeople.prototype.toString = MixpanelPeople.prototype.toString);
      var eo = "__mps",
        es = "__mpso",
        ea = "__mpus",
        ep = "__mpa",
        ec = "__mpap",
        eu = "__mpr",
        el = "__mpu",
        e_ = "$people_distinct_id",
        ed = "__alias",
        eh = "__timers",
        ef = [eo, es, ea, ep, ec, eu, el, e_, ed, eh],
        MixpanelPersistence = function (e) {
          (this.props = {}),
            (this.campaign_params_saved = !1),
            e.persistence_name
              ? (this.name = "mp_" + e.persistence_name)
              : (this.name = "mp_" + e.token + "_mixpanel");
          var t = e.persistence;
          "cookie" !== t &&
            "localStorage" !== t &&
            (F.critical(
              "Unknown persistence type " + t + "; falling back to cookie"
            ),
            (t = e.persistence = "cookie")),
            "localStorage" === t && U.localStorage.is_supported()
              ? (this.storage = U.localStorage)
              : (this.storage = U.cookie),
            this.load(),
            this.update_config(e),
            this.upgrade(e),
            this.save();
        };
      (MixpanelPersistence.prototype.properties = function () {
        var e = {};
        return (
          U.each(this.props, function (t, r) {
            U.include(ef, r) || (e[r] = t);
          }),
          e
        );
      }),
        (MixpanelPersistence.prototype.load = function () {
          if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = U.extend({}, e));
          }
        }),
        (MixpanelPersistence.prototype.upgrade = function (e) {
          var t,
            r,
            i = e.upgrade;
          i &&
            ((t = "mp_super_properties"),
            "string" == typeof i && (t = i),
            (r = this.storage.parse(t)),
            this.storage.remove(t),
            this.storage.remove(t, !0),
            r && (this.props = U.extend(this.props, r.all, r.events))),
            !e.cookie_name &&
              "mixpanel" !== e.name &&
              ((t = "mp_" + e.token + "_" + e.name),
              (r = this.storage.parse(t)) &&
                (this.storage.remove(t),
                this.storage.remove(t, !0),
                this.register_once(r))),
            this.storage === U.localStorage &&
              ((r = U.cookie.parse(this.name)),
              U.cookie.remove(this.name),
              U.cookie.remove(this.name, !0),
              r && this.register_once(r));
        }),
        (MixpanelPersistence.prototype.save = function () {
          this.disabled ||
            this.storage.set(
              this.name,
              U.JSONEncode(this.props),
              this.expire_days,
              this.cross_subdomain,
              this.secure,
              this.cross_site,
              this.cookie_domain
            );
        }),
        (MixpanelPersistence.prototype.remove = function () {
          this.storage.remove(this.name, !1, this.cookie_domain),
            this.storage.remove(this.name, !0, this.cookie_domain);
        }),
        (MixpanelPersistence.prototype.clear = function () {
          this.remove(), (this.props = {});
        }),
        (MixpanelPersistence.prototype.register_once = function (e, t, r) {
          return (
            !!U.isObject(e) &&
            (void 0 === t && (t = "None"),
            (this.expire_days = void 0 === r ? this.default_expiry : r),
            U.each(
              e,
              function (e, r) {
                (this.props.hasOwnProperty(r) && this.props[r] !== t) ||
                  (this.props[r] = e);
              },
              this
            ),
            this.save(),
            !0)
          );
        }),
        (MixpanelPersistence.prototype.register = function (e, t) {
          return (
            !!U.isObject(e) &&
            ((this.expire_days = void 0 === t ? this.default_expiry : t),
            U.extend(this.props, e),
            this.save(),
            !0)
          );
        }),
        (MixpanelPersistence.prototype.unregister = function (e) {
          e in this.props && (delete this.props[e], this.save());
        }),
        (MixpanelPersistence.prototype.update_campaign_params = function () {
          this.campaign_params_saved ||
            (this.register_once(U.info.campaignParams()),
            (this.campaign_params_saved = !0));
        }),
        (MixpanelPersistence.prototype.update_search_keyword = function (e) {
          this.register(U.info.searchInfo(e));
        }),
        (MixpanelPersistence.prototype.update_referrer_info = function (e) {
          this.register_once(
            {
              $initial_referrer: e || "$direct",
              $initial_referring_domain: U.info.referringDomain(e) || "$direct",
            },
            ""
          );
        }),
        (MixpanelPersistence.prototype.get_referrer_info = function () {
          return U.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain,
          });
        }),
        (MixpanelPersistence.prototype.safe_merge = function (e) {
          return (
            U.each(this.props, function (t, r) {
              r in e || (e[r] = t);
            }),
            e
          );
        }),
        (MixpanelPersistence.prototype.update_config = function (e) {
          (this.default_expiry = this.expire_days = e.cookie_expiration),
            this.set_disabled(e.disable_persistence),
            this.set_cookie_domain(e.cookie_domain),
            this.set_cross_site(e.cross_site_cookie),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie);
        }),
        (MixpanelPersistence.prototype.set_disabled = function (e) {
          (this.disabled = e), this.disabled ? this.remove() : this.save();
        }),
        (MixpanelPersistence.prototype.set_cookie_domain = function (e) {
          e !== this.cookie_domain &&
            (this.remove(), (this.cookie_domain = e), this.save());
        }),
        (MixpanelPersistence.prototype.set_cross_site = function (e) {
          e !== this.cross_site &&
            ((this.cross_site = e), this.remove(), this.save());
        }),
        (MixpanelPersistence.prototype.set_cross_subdomain = function (e) {
          e !== this.cross_subdomain &&
            ((this.cross_subdomain = e), this.remove(), this.save());
        }),
        (MixpanelPersistence.prototype.get_cross_subdomain = function () {
          return this.cross_subdomain;
        }),
        (MixpanelPersistence.prototype.set_secure = function (e) {
          e !== this.secure &&
            ((this.secure = !!e), this.remove(), this.save());
        }),
        (MixpanelPersistence.prototype._add_to_people_queue = function (e, t) {
          var r = this._get_queue_key(e),
            i = t[e],
            n = this._get_or_create_queue(Y),
            o = this._get_or_create_queue(W),
            s = this._get_or_create_queue(Z),
            a = this._get_or_create_queue(ee),
            p = this._get_or_create_queue(er),
            c = this._get_or_create_queue(ei, []),
            u = this._get_or_create_queue(et, []);
          r === eo
            ? (U.extend(n, i),
              this._pop_from_people_queue(ee, i),
              this._pop_from_people_queue(er, i),
              this._pop_from_people_queue(Z, i))
            : r === es
            ? (U.each(i, function (e, t) {
                t in o || (o[t] = e);
              }),
              this._pop_from_people_queue(Z, i))
            : r === ea
            ? U.each(i, function (e) {
                U.each([n, o, a, p], function (t) {
                  e in t && delete t[e];
                }),
                  U.each(u, function (t) {
                    e in t && delete t[e];
                  }),
                  (s[e] = !0);
              })
            : r === ep
            ? (U.each(
                i,
                function (e, t) {
                  t in n ? (n[t] += e) : (t in a || (a[t] = 0), (a[t] += e));
                },
                this
              ),
              this._pop_from_people_queue(Z, i))
            : r === el
            ? (U.each(i, function (e, t) {
                U.isArray(e) &&
                  (t in p || (p[t] = []), (p[t] = p[t].concat(e)));
              }),
              this._pop_from_people_queue(Z, i))
            : r === eu
            ? (c.push(i), this._pop_from_people_queue(et, i))
            : r === ec && (u.push(i), this._pop_from_people_queue(Z, i)),
            F.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
            F.log(t),
            this.save();
        }),
        (MixpanelPersistence.prototype._pop_from_people_queue = function (
          e,
          t
        ) {
          var r = this._get_queue(e);
          U.isUndefined(r) ||
            (U.each(
              t,
              function (t, i) {
                e === et || e === ei
                  ? U.each(r, function (e) {
                      e[i] === t && delete e[i];
                    })
                  : delete r[i];
              },
              this
            ),
            this.save());
        }),
        (MixpanelPersistence.prototype._get_queue_key = function (e) {
          return e === Y
            ? eo
            : e === W
            ? es
            : e === Z
            ? ea
            : e === ee
            ? ep
            : e === et
            ? ec
            : e === ei
            ? eu
            : e === er
            ? el
            : void F.error("Invalid queue:", e);
        }),
        (MixpanelPersistence.prototype._get_queue = function (e) {
          return this.props[this._get_queue_key(e)];
        }),
        (MixpanelPersistence.prototype._get_or_create_queue = function (e, t) {
          var r = this._get_queue_key(e);
          return (
            (t = U.isUndefined(t) ? {} : t),
            this.props[r] || (this.props[r] = t)
          );
        }),
        (MixpanelPersistence.prototype.set_event_timer = function (e, t) {
          var r = this.props[eh] || {};
          (r[e] = t), (this.props[eh] = r), this.save();
        }),
        (MixpanelPersistence.prototype.remove_event_timer = function (e) {
          var t = (this.props[eh] || {})[e];
          return U.isUndefined(t) || (delete this.props[eh][e], this.save()), t;
        });
      var IDENTITY_FUNC = function (e) {
          return e;
        },
        NOOP_FUNC = function () {},
        eg = "mixpanel",
        em = "base64",
        ey = g.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
        ev = !ey && -1 === T.indexOf("MSIE") && -1 === T.indexOf("Mozilla"),
        eb = null;
      L.sendBeacon &&
        (eb = function () {
          return L.sendBeacon.apply(L, arguments);
        });
      var ex = {
          api_host: "https://api-js.mixpanel.com",
          api_method: "POST",
          api_transport: "XHR",
          api_payload_format: em,
          app_host: "https://mixpanel.com",
          cdn: "https://cdn.mxpnl.com",
          cross_site_cookie: !1,
          cross_subdomain_cookie: !0,
          error_reporter: NOOP_FUNC,
          persistence: "cookie",
          persistence_name: "",
          cookie_domain: "",
          cookie_name: "",
          loaded: NOOP_FUNC,
          store_google: !0,
          save_referrer: !0,
          test: !1,
          verbose: !1,
          img: !1,
          debug: !1,
          track_links_timeout: 300,
          cookie_expiration: 365,
          upgrade: !1,
          disable_persistence: !1,
          disable_cookie: !1,
          secure_cookie: !1,
          ip: !0,
          opt_out_tracking_by_default: !1,
          opt_out_persistence_by_default: !1,
          opt_out_tracking_persistence_type: "localStorage",
          opt_out_tracking_cookie_prefix: null,
          property_blacklist: [],
          xhr_headers: {},
          ignore_dnt: !1,
          batch_requests: !0,
          batch_size: 50,
          batch_flush_interval_ms: 5e3,
          batch_request_timeout_ms: 9e4,
          batch_autostart: !0,
          hooks: {},
        },
        ek = !1,
        MixpanelLib = function () {},
        create_mplib = function (e, t, r) {
          var i,
            n = r === eg ? y : y[r];
          if (n && 0 === m) i = n;
          else {
            if (n && !U.isArray(n)) {
              F.error("You have already initialized " + r);
              return;
            }
            i = new MixpanelLib();
          }
          return (
            (i._cached_groups = {}),
            i._init(e, t, r),
            (i.people = new MixpanelPeople()),
            i.people._init(i),
            (v.DEBUG = v.DEBUG || i.get_config("debug")),
            !U.isUndefined(n) &&
              U.isArray(n) &&
              (i._execute_array.call(i.people, n.people), i._execute_array(n)),
            i
          );
        };
      (MixpanelLib.prototype.init = function (e, t, r) {
        if (U.isUndefined(r)) {
          this.report_error(
            "You must name your new library: init(token, config, name)"
          );
          return;
        }
        if (r === eg) {
          this.report_error(
            "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
          );
          return;
        }
        var i = create_mplib(e, t, r);
        return (y[r] = i), i._loaded(), i;
      }),
        (MixpanelLib.prototype._init = function (e, t, r) {
          (t = t || {}), (this.__loaded = !0), (this.config = {});
          var i = {};
          if (
            (!("api_payload_format" in t) &&
              (t.api_host || ex.api_host).match(/\.mixpanel\.com$/) &&
              (i.api_payload_format = "json"),
            this.set_config(
              U.extend({}, ex, i, t, {
                name: r,
                token: e,
                callback_fn: (r === eg ? r : eg + "." + r) + "._jsc",
              })
            ),
            (this._jsc = NOOP_FUNC),
            (this.__dom_loaded_queue = []),
            (this.__request_queue = []),
            (this.__disabled_events = []),
            (this._flags = { disable_all_events: !1, identify_called: !1 }),
            (this.request_batchers = {}),
            (this._batch_requests = this.get_config("batch_requests")),
            this._batch_requests)
          ) {
            if (U.localStorage.is_supported(!0) && ey) {
              if ((this.init_batchers(), eb && g.addEventListener)) {
                var n = U.bind(function () {
                  this.request_batchers.events.stopped ||
                    this.request_batchers.events.flush({ unloading: !0 });
                }, this);
                g.addEventListener("pagehide", function (e) {
                  e.persisted && n();
                }),
                  g.addEventListener("visibilitychange", function () {
                    "hidden" === E.visibilityState && n();
                  });
              }
            } else
              (this._batch_requests = !1),
                F.log(
                  "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
                );
          }
          (this.persistence = this.cookie =
            new MixpanelPersistence(this.config)),
            (this.unpersisted_superprops = {}),
            this._gdpr_init();
          var o = U.UUID();
          this.get_distinct_id() ||
            this.register_once({ distinct_id: o, $device_id: o }, "");
        }),
        (MixpanelLib.prototype._loaded = function () {
          this.get_config("loaded")(this), this._set_default_superprops();
        }),
        (MixpanelLib.prototype._set_default_superprops = function () {
          this.persistence.update_search_keyword(E.referrer),
            this.get_config("store_google") &&
              this.persistence.update_campaign_params(),
            this.get_config("save_referrer") &&
              this.persistence.update_referrer_info(E.referrer);
        }),
        (MixpanelLib.prototype._dom_loaded = function () {
          U.each(
            this.__dom_loaded_queue,
            function (e) {
              this._track_dom.apply(this, e);
            },
            this
          ),
            this.has_opted_out_tracking() ||
              U.each(
                this.__request_queue,
                function (e) {
                  this._send_request.apply(this, e);
                },
                this
              ),
            delete this.__dom_loaded_queue,
            delete this.__request_queue;
        }),
        (MixpanelLib.prototype._track_dom = function (e, t) {
          if (this.get_config("img"))
            return (
              this.report_error(
                "You can't use DOM tracking functions with img = true."
              ),
              !1
            );
          if (!ek) return this.__dom_loaded_queue.push([e, t]), !1;
          var r = new e().init(this);
          return r.track.apply(r, t);
        }),
        (MixpanelLib.prototype._prepare_callback = function (e, t) {
          if (U.isUndefined(e)) return null;
          if (ey)
            return function (r) {
              e(r, t);
            };
          var r = this._jsc,
            i = "" + Math.floor(1e8 * Math.random()),
            n = this.get_config("callback_fn") + "[" + i + "]";
          return (
            (r[i] = function (n) {
              delete r[i], e(n, t);
            }),
            n
          );
        }),
        (MixpanelLib.prototype._send_request = function (e, t, r, i) {
          var n = !0;
          if (ev) return this.__request_queue.push(arguments), n;
          var o = {
              method: this.get_config("api_method"),
              transport: this.get_config("api_transport"),
              verbose: this.get_config("verbose"),
            },
            s = null;
          !i &&
            (U.isFunction(r) || "string" == typeof r) &&
            ((i = r), (r = null)),
            (r = U.extend(o, r || {})),
            ey || (r.method = "GET");
          var a = "POST" === r.method,
            p = eb && a && "sendbeacon" === r.transport.toLowerCase(),
            c = r.verbose;
          t.verbose && (c = !0),
            this.get_config("test") && (t.test = 1),
            c && (t.verbose = 1),
            this.get_config("img") && (t.img = 1),
            !ey &&
              (i
                ? (t.callback = i)
                : (c || this.get_config("test")) &&
                  (t.callback = "(function(){})")),
            (t.ip = this.get_config("ip") ? 1 : 0),
            (t._ = new Date().getTime().toString()),
            a && ((s = "data=" + encodeURIComponent(t.data)), delete t.data),
            (e += "?" + U.HTTPBuildQuery(t));
          var u = this;
          if ("img" in t) {
            var l = E.createElement("img");
            (l.src = e), E.body.appendChild(l);
          } else if (p) {
            try {
              n = eb(e, s);
            } catch (e) {
              u.report_error(e), (n = !1);
            }
            try {
              i && i(n ? 1 : 0);
            } catch (e) {
              u.report_error(e);
            }
          } else if (ey)
            try {
              var _ = new XMLHttpRequest();
              _.open(r.method, e, !0);
              var d = this.get_config("xhr_headers");
              if (
                (a && (d["Content-Type"] = "application/x-www-form-urlencoded"),
                U.each(d, function (e, t) {
                  _.setRequestHeader(t, e);
                }),
                r.timeout_ms && void 0 !== _.timeout)
              ) {
                _.timeout = r.timeout_ms;
                var h = new Date().getTime();
              }
              (_.withCredentials = !0),
                (_.onreadystatechange = function () {
                  if (4 === _.readyState) {
                    var e, t;
                    if (200 === _.status) {
                      if (i) {
                        if (c) {
                          try {
                            e = U.JSONDecode(_.responseText);
                          } catch (t) {
                            if ((u.report_error(t), !r.ignore_json_errors))
                              return;
                            e = _.responseText;
                          }
                          i(e);
                        } else i(Number(_.responseText));
                      }
                    } else
                      (t =
                        _.timeout &&
                        !_.status &&
                        new Date().getTime() - h >= _.timeout
                          ? "timeout"
                          : "Bad HTTP status: " +
                            _.status +
                            " " +
                            _.statusText),
                        u.report_error(t),
                        i &&
                          (c ? i({ status: 0, error: t, xhr_req: _ }) : i(0));
                  }
                }),
                _.send(s);
            } catch (e) {
              u.report_error(e), (n = !1);
            }
          else {
            var f = E.createElement("script");
            (f.type = "text/javascript"),
              (f.async = !0),
              (f.defer = !0),
              (f.src = e);
            var g = E.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(f, g);
          }
          return n;
        }),
        (MixpanelLib.prototype._execute_array = function (e) {
          var t,
            r = [],
            i = [],
            n = [];
          U.each(
            e,
            function (e) {
              e &&
                ((t = e[0]),
                U.isArray(t)
                  ? n.push(e)
                  : "function" == typeof e
                  ? e.call(this)
                  : U.isArray(e) && "alias" === t
                  ? r.push(e)
                  : U.isArray(e) &&
                    -1 !== t.indexOf("track") &&
                    "function" == typeof this[t]
                  ? n.push(e)
                  : i.push(e));
            },
            this
          );
          var execute = function (e, t) {
            U.each(
              e,
              function (e) {
                if (U.isArray(e[0])) {
                  var r = t;
                  U.each(e, function (e) {
                    r = r[e[0]].apply(r, e.slice(1));
                  });
                } else this[e[0]].apply(this, e.slice(1));
              },
              t
            );
          };
          execute(r, this), execute(i, this), execute(n, this);
        }),
        (MixpanelLib.prototype.are_batchers_initialized = function () {
          return !!this.request_batchers.events;
        }),
        (MixpanelLib.prototype.init_batchers = function () {
          var e = this.get_config("token");
          if (!this.are_batchers_initialized()) {
            var t = U.bind(function (t) {
              return new RequestBatcher("__mpq_" + e + t.queue_suffix, {
                libConfig: this.config,
                sendRequestFunc: U.bind(function (e, r, i) {
                  this._send_request(
                    this.get_config("api_host") + t.endpoint,
                    this._encode_data_for_request(e),
                    r,
                    this._prepare_callback(i, e)
                  );
                }, this),
                beforeSendHook: U.bind(function (e) {
                  return this._run_hook("before_send_" + t.type, e);
                }, this),
                errorReporter: this.get_config("error_reporter"),
                stopAllBatchingFunc: U.bind(this.stop_batch_senders, this),
              });
            }, this);
            this.request_batchers = {
              events: t({
                type: "events",
                endpoint: "/track/",
                queue_suffix: "_ev",
              }),
              people: t({
                type: "people",
                endpoint: "/engage/",
                queue_suffix: "_pp",
              }),
              groups: t({
                type: "groups",
                endpoint: "/groups/",
                queue_suffix: "_gr",
              }),
            };
          }
          this.get_config("batch_autostart") && this.start_batch_senders();
        }),
        (MixpanelLib.prototype.start_batch_senders = function () {
          this.are_batchers_initialized() &&
            ((this._batch_requests = !0),
            U.each(this.request_batchers, function (e) {
              e.start();
            }));
        }),
        (MixpanelLib.prototype.stop_batch_senders = function () {
          (this._batch_requests = !1),
            U.each(this.request_batchers, function (e) {
              e.stop(), e.clear();
            });
        }),
        (MixpanelLib.prototype.push = function (e) {
          this._execute_array([e]);
        }),
        (MixpanelLib.prototype.disable = function (e) {
          void 0 === e
            ? (this._flags.disable_all_events = !0)
            : (this.__disabled_events = this.__disabled_events.concat(e));
        }),
        (MixpanelLib.prototype._encode_data_for_request = function (e) {
          var t = U.JSONEncode(e);
          return (
            this.get_config("api_payload_format") === em &&
              (t = U.base64Encode(t)),
            { data: t }
          );
        }),
        (MixpanelLib.prototype._track_or_batch = function (e, t) {
          var r = U.truncate(e.data, 255),
            i = e.endpoint,
            n = e.batcher,
            o = e.should_send_immediately,
            s = e.send_request_options || {};
          t = t || NOOP_FUNC;
          var a = !0,
            p = U.bind(function () {
              return (s.skip_hooks ||
                (r = this._run_hook("before_send_" + e.type, r)),
              r)
                ? (F.log("MIXPANEL REQUEST:"),
                  F.log(r),
                  this._send_request(
                    i,
                    this._encode_data_for_request(r),
                    s,
                    this._prepare_callback(t, r)
                  ))
                : null;
            }, this);
          return (
            this._batch_requests && !o
              ? n.enqueue(r, function (e) {
                  e ? t(1, r) : p();
                })
              : (a = p()),
            a && r
          );
        }),
        (MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function (
          e,
          t,
          r,
          i
        ) {
          i || "function" != typeof r || ((i = r), (r = null));
          var n = (r = r || {}).transport;
          n && (r.transport = n);
          var o = r.send_immediately;
          if (("function" != typeof i && (i = NOOP_FUNC), U.isUndefined(e))) {
            this.report_error("No event name provided to mixpanel.track");
            return;
          }
          if (this._event_is_disabled(e)) {
            i(0);
            return;
          }
          (t = t || {}).token = this.get_config("token");
          var s = this.persistence.remove_event_timer(e);
          if (!U.isUndefined(s)) {
            var a = new Date().getTime() - s;
            t.$duration = parseFloat((a / 1e3).toFixed(3));
          }
          this._set_default_superprops(),
            (t = U.extend(
              {},
              U.info.properties(),
              this.persistence.properties(),
              this.unpersisted_superprops,
              t
            ));
          var p = this.get_config("property_blacklist");
          U.isArray(p)
            ? U.each(p, function (e) {
                delete t[e];
              })
            : this.report_error(
                "Invalid value for property_blacklist config: " + p
              );
          var c = { event: e, properties: t };
          return this._track_or_batch(
            {
              type: "events",
              data: c,
              endpoint: this.get_config("api_host") + "/track/",
              batcher: this.request_batchers.events,
              should_send_immediately: o,
              send_request_options: r,
            },
            i
          );
        })),
        (MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function (
          e,
          t,
          r
        ) {
          U.isArray(t) || (t = [t]);
          var i = {};
          return (i[e] = t), this.register(i), this.people.set(e, t, r);
        })),
        (MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function (
          e,
          t,
          r
        ) {
          var i = this.get_property(e);
          if (void 0 === i) {
            var n = {};
            (n[e] = [t]), this.register(n);
          } else -1 === i.indexOf(t) && (i.push(t), this.register(n));
          return this.people.union(e, t, r);
        })),
        (MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(
          function (e, t, r) {
            var i = this.get_property(e);
            if (void 0 !== i) {
              var n = i.indexOf(t);
              n > -1 && (i.splice(n, 1), this.register({ group_key: i })),
                0 === i.length && this.unregister(e);
            }
            return this.people.remove(e, t, r);
          }
        )),
        (MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(
          function (e, t, r, i) {
            var n = U.extend({}, t || {});
            return (
              U.each(r, function (e, t) {
                null != e && (n[t] = e);
              }),
              this.track(e, n, i)
            );
          }
        )),
        (MixpanelLib.prototype._create_map_key = function (e, t) {
          return e + "_" + JSON.stringify(t);
        }),
        (MixpanelLib.prototype._remove_group_from_cache = function (e, t) {
          delete this._cached_groups[this._create_map_key(e, t)];
        }),
        (MixpanelLib.prototype.get_group = function (e, t) {
          var r = this._create_map_key(e, t),
            i = this._cached_groups[r];
          return (
            (void 0 === i || i._group_key !== e || i._group_id !== t) &&
              ((i = new MixpanelGroup())._init(this, e, t),
              (this._cached_groups[r] = i)),
            i
          );
        }),
        (MixpanelLib.prototype.track_pageview = function (e) {
          U.isUndefined(e) && (e = E.location.href),
            this.track("mp_page_view", U.info.pageviewInfo(e));
        }),
        (MixpanelLib.prototype.track_links = function () {
          return this._track_dom.call(this, LinkTracker, arguments);
        }),
        (MixpanelLib.prototype.track_forms = function () {
          return this._track_dom.call(this, FormTracker, arguments);
        }),
        (MixpanelLib.prototype.time_event = function (e) {
          if (U.isUndefined(e)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return;
          }
          this._event_is_disabled(e) ||
            this.persistence.set_event_timer(e, new Date().getTime());
        });
      var eM = { persistent: !0 },
        options_for_register = function (e) {
          var t;
          return (
            (t = U.isObject(e) ? e : U.isUndefined(e) ? {} : { days: e }),
            U.extend({}, eM, t)
          );
        };
      (MixpanelLib.prototype.register = function (e, t) {
        var r = options_for_register(t);
        r.persistent
          ? this.persistence.register(e, r.days)
          : U.extend(this.unpersisted_superprops, e);
      }),
        (MixpanelLib.prototype.register_once = function (e, t, r) {
          var i = options_for_register(r);
          i.persistent
            ? this.persistence.register_once(e, t, i.days)
            : (void 0 === t && (t = "None"),
              U.each(
                e,
                function (e, r) {
                  (this.unpersisted_superprops.hasOwnProperty(r) &&
                    this.unpersisted_superprops[r] !== t) ||
                    (this.unpersisted_superprops[r] = e);
                },
                this
              ));
        }),
        (MixpanelLib.prototype.unregister = function (e, t) {
          (t = options_for_register(t)).persistent
            ? this.persistence.unregister(e)
            : delete this.unpersisted_superprops[e];
        }),
        (MixpanelLib.prototype._register_single = function (e, t) {
          var r = {};
          (r[e] = t), this.register(r);
        }),
        (MixpanelLib.prototype.identify = function (e, t, r, i, n, o, s, a) {
          var p = this.get_distinct_id();
          this.register({ $user_id: e }),
            this.get_property("$device_id") ||
              this.register_once(
                { $had_persisted_distinct_id: !0, $device_id: p },
                ""
              ),
            e !== p &&
              e !== this.get_property(ed) &&
              (this.unregister(ed), this.register({ distinct_id: e })),
            (this._flags.identify_called = !0),
            this.people._flush(t, r, i, n, o, s, a),
            e !== p &&
              this.track(
                "$identify",
                { distinct_id: e, $anon_distinct_id: p },
                { skip_hooks: !0 }
              );
        }),
        (MixpanelLib.prototype.reset = function () {
          this.persistence.clear(), (this._flags.identify_called = !1);
          var e = U.UUID();
          this.register_once({ distinct_id: e, $device_id: e }, "");
        }),
        (MixpanelLib.prototype.get_distinct_id = function () {
          return this.get_property("distinct_id");
        }),
        (MixpanelLib.prototype.alias = function (e, t) {
          if (e === this.get_property(e_))
            return (
              this.report_error(
                "Attempting to create alias for existing People user - aborting."
              ),
              -2
            );
          var r = this;
          return (U.isUndefined(t) && (t = this.get_distinct_id()), e !== t)
            ? (this._register_single(ed, e),
              this.track(
                "$create_alias",
                { alias: e, distinct_id: t },
                { skip_hooks: !0 },
                function () {
                  r.identify(e);
                }
              ))
            : (this.report_error(
                "alias matches current distinct_id - skipping api call."
              ),
              this.identify(e),
              -1);
        }),
        (MixpanelLib.prototype.name_tag = function (e) {
          this._register_single("mp_name_tag", e);
        }),
        (MixpanelLib.prototype.set_config = function (e) {
          U.isObject(e) &&
            (U.extend(this.config, e),
            e.batch_size &&
              U.each(this.request_batchers, function (e) {
                e.resetBatchSize();
              }),
            this.get_config("persistence_name") ||
              (this.config.persistence_name = this.config.cookie_name),
            this.get_config("disable_persistence") ||
              (this.config.disable_persistence = this.config.disable_cookie),
            this.persistence && this.persistence.update_config(this.config),
            (v.DEBUG = v.DEBUG || this.get_config("debug")));
        }),
        (MixpanelLib.prototype.get_config = function (e) {
          return this.config[e];
        }),
        (MixpanelLib.prototype._run_hook = function (e) {
          var t = (this.config.hooks[e] || IDENTITY_FUNC).apply(
            this,
            w.call(arguments, 1)
          );
          return (
            void 0 === t &&
              (this.report_error(e + " hook did not return a value"),
              (t = null)),
            t
          );
        }),
        (MixpanelLib.prototype.get_property = function (e) {
          return this.persistence.props[e];
        }),
        (MixpanelLib.prototype.toString = function () {
          var e = this.get_config("name");
          return e !== eg && (e = eg + "." + e), e;
        }),
        (MixpanelLib.prototype._event_is_disabled = function (e) {
          return (
            U.isBlockedUA(T) ||
            this._flags.disable_all_events ||
            U.include(this.__disabled_events, e)
          );
        }),
        (MixpanelLib.prototype._gdpr_init = function () {
          "localStorage" ===
            this.get_config("opt_out_tracking_persistence_type") &&
            U.localStorage.is_supported() &&
            (!this.has_opted_in_tracking() &&
              this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
              this.opt_in_tracking({ enable_persistence: !1 }),
            !this.has_opted_out_tracking() &&
              this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
              this.opt_out_tracking({ clear_persistence: !1 }),
            this.clear_opt_in_out_tracking({
              persistence_type: "cookie",
              enable_persistence: !1,
            })),
            this.has_opted_out_tracking()
              ? this._gdpr_update_persistence({ clear_persistence: !0 })
              : !this.has_opted_in_tracking() &&
                (this.get_config("opt_out_tracking_by_default") ||
                  U.cookie.get("mp_optout")) &&
                (U.cookie.remove("mp_optout"),
                this.opt_out_tracking({
                  clear_persistence: this.get_config(
                    "opt_out_persistence_by_default"
                  ),
                }));
        }),
        (MixpanelLib.prototype._gdpr_update_persistence = function (e) {
          var t;
          if (e && e.clear_persistence) t = !0;
          else {
            if (!e || !e.enable_persistence) return;
            t = !1;
          }
          this.get_config("disable_persistence") ||
            this.persistence.disabled === t ||
            this.persistence.set_disabled(t),
            t &&
              U.each(this.request_batchers, function (e) {
                e.clear();
              });
        }),
        (MixpanelLib.prototype._gdpr_call_func = function (e, t) {
          return (
            (t = U.extend(
              {
                track: U.bind(this.track, this),
                persistence_type: this.get_config(
                  "opt_out_tracking_persistence_type"
                ),
                cookie_prefix: this.get_config(
                  "opt_out_tracking_cookie_prefix"
                ),
                cookie_expiration: this.get_config("cookie_expiration"),
                cross_site_cookie: this.get_config("cross_site_cookie"),
                cross_subdomain_cookie: this.get_config(
                  "cross_subdomain_cookie"
                ),
                cookie_domain: this.get_config("cookie_domain"),
                secure_cookie: this.get_config("secure_cookie"),
                ignore_dnt: this.get_config("ignore_dnt"),
              },
              t
            )),
            U.localStorage.is_supported() || (t.persistence_type = "cookie"),
            e(this.get_config("token"), {
              track: t.track,
              trackEventName: t.track_event_name,
              trackProperties: t.track_properties,
              persistenceType: t.persistence_type,
              persistencePrefix: t.cookie_prefix,
              cookieDomain: t.cookie_domain,
              cookieExpiration: t.cookie_expiration,
              crossSiteCookie: t.cross_site_cookie,
              crossSubdomainCookie: t.cross_subdomain_cookie,
              secureCookie: t.secure_cookie,
              ignoreDnt: t.ignore_dnt,
            })
          );
        }),
        (MixpanelLib.prototype.opt_in_tracking = function (e) {
          (e = U.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(optIn, e),
            this._gdpr_update_persistence(e);
        }),
        (MixpanelLib.prototype.opt_out_tracking = function (e) {
          (e = U.extend({ clear_persistence: !0, delete_user: !0 }, e))
            .delete_user &&
            this.people &&
            this.people._identify_called() &&
            (this.people.delete_user(), this.people.clear_charges()),
            this._gdpr_call_func(optOut, e),
            this._gdpr_update_persistence(e);
        }),
        (MixpanelLib.prototype.has_opted_in_tracking = function (e) {
          return this._gdpr_call_func(hasOptedIn, e);
        }),
        (MixpanelLib.prototype.has_opted_out_tracking = function (e) {
          return this._gdpr_call_func(hasOptedOut, e);
        }),
        (MixpanelLib.prototype.clear_opt_in_out_tracking = function (e) {
          (e = U.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(clearOptInOut, e),
            this._gdpr_update_persistence(e);
        }),
        (MixpanelLib.prototype.report_error = function (e, t) {
          F.error.apply(F.error, arguments);
          try {
            t || e instanceof Error || (e = Error(e)),
              this.get_config("error_reporter")(e, t);
          } catch (e) {
            F.error(e);
          }
        }),
        (MixpanelLib.prototype.init = MixpanelLib.prototype.init),
        (MixpanelLib.prototype.reset = MixpanelLib.prototype.reset),
        (MixpanelLib.prototype.disable = MixpanelLib.prototype.disable),
        (MixpanelLib.prototype.time_event = MixpanelLib.prototype.time_event),
        (MixpanelLib.prototype.track = MixpanelLib.prototype.track),
        (MixpanelLib.prototype.track_links = MixpanelLib.prototype.track_links),
        (MixpanelLib.prototype.track_forms = MixpanelLib.prototype.track_forms),
        (MixpanelLib.prototype.track_pageview =
          MixpanelLib.prototype.track_pageview),
        (MixpanelLib.prototype.register = MixpanelLib.prototype.register),
        (MixpanelLib.prototype.register_once =
          MixpanelLib.prototype.register_once),
        (MixpanelLib.prototype.unregister = MixpanelLib.prototype.unregister),
        (MixpanelLib.prototype.identify = MixpanelLib.prototype.identify),
        (MixpanelLib.prototype.alias = MixpanelLib.prototype.alias),
        (MixpanelLib.prototype.name_tag = MixpanelLib.prototype.name_tag),
        (MixpanelLib.prototype.set_config = MixpanelLib.prototype.set_config),
        (MixpanelLib.prototype.get_config = MixpanelLib.prototype.get_config),
        (MixpanelLib.prototype.get_property =
          MixpanelLib.prototype.get_property),
        (MixpanelLib.prototype.get_distinct_id =
          MixpanelLib.prototype.get_distinct_id),
        (MixpanelLib.prototype.toString = MixpanelLib.prototype.toString),
        (MixpanelLib.prototype.opt_out_tracking =
          MixpanelLib.prototype.opt_out_tracking),
        (MixpanelLib.prototype.opt_in_tracking =
          MixpanelLib.prototype.opt_in_tracking),
        (MixpanelLib.prototype.has_opted_out_tracking =
          MixpanelLib.prototype.has_opted_out_tracking),
        (MixpanelLib.prototype.has_opted_in_tracking =
          MixpanelLib.prototype.has_opted_in_tracking),
        (MixpanelLib.prototype.clear_opt_in_out_tracking =
          MixpanelLib.prototype.clear_opt_in_out_tracking),
        (MixpanelLib.prototype.get_group = MixpanelLib.prototype.get_group),
        (MixpanelLib.prototype.set_group = MixpanelLib.prototype.set_group),
        (MixpanelLib.prototype.add_group = MixpanelLib.prototype.add_group),
        (MixpanelLib.prototype.remove_group =
          MixpanelLib.prototype.remove_group),
        (MixpanelLib.prototype.track_with_groups =
          MixpanelLib.prototype.track_with_groups),
        (MixpanelLib.prototype.start_batch_senders =
          MixpanelLib.prototype.start_batch_senders),
        (MixpanelLib.prototype.stop_batch_senders =
          MixpanelLib.prototype.stop_batch_senders),
        (MixpanelPersistence.prototype.properties =
          MixpanelPersistence.prototype.properties),
        (MixpanelPersistence.prototype.update_search_keyword =
          MixpanelPersistence.prototype.update_search_keyword),
        (MixpanelPersistence.prototype.update_referrer_info =
          MixpanelPersistence.prototype.update_referrer_info),
        (MixpanelPersistence.prototype.get_cross_subdomain =
          MixpanelPersistence.prototype.get_cross_subdomain),
        (MixpanelPersistence.prototype.clear =
          MixpanelPersistence.prototype.clear);
      var ew = {},
        extend_mp = function () {
          U.each(ew, function (e, t) {
            t !== eg && (y[t] = e);
          }),
            (y._ = U);
        },
        eS =
          ((m = 0),
          ((y = new MixpanelLib()).init = function (e, t, r) {
            if (r)
              return (
                y[r] ||
                  ((y[r] = ew[r] = create_mplib(e, t, r)), y[r]._loaded()),
                y[r]
              );
            var i = y;
            ew[eg]
              ? (i = ew[eg])
              : e && ((i = create_mplib(e, t, eg))._loaded(), (ew[eg] = i)),
              (y = i),
              1 === m && (g[eg] = y),
              extend_mp();
          }),
          y.init(),
          (function () {
            function dom_loaded_handler() {
              dom_loaded_handler.done ||
                ((dom_loaded_handler.done = !0),
                (ek = !0),
                (ev = !1),
                U.each(ew, function (e) {
                  e._dom_loaded();
                }));
            }
            if (E.addEventListener)
              "complete" === E.readyState
                ? dom_loaded_handler()
                : E.addEventListener(
                    "DOMContentLoaded",
                    dom_loaded_handler,
                    !1
                  );
            else if (E.attachEvent) {
              E.attachEvent("onreadystatechange", dom_loaded_handler);
              var e = !1;
              try {
                e = null === g.frameElement;
              } catch (e) {}
              E.documentElement.doScroll &&
                e &&
                (function do_scroll_check() {
                  try {
                    E.documentElement.doScroll("left");
                  } catch (e) {
                    setTimeout(do_scroll_check, 1);
                    return;
                  }
                  dom_loaded_handler();
                })();
            }
            U.register_event(g, "load", dom_loaded_handler, !0);
          })(),
          y);
      e.exports = eS;
    },
    91118: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(91324);
        },
      ]);
    },
    91324: function (e, t, r) {
      "use strict";
      let i;
      r.r(t),
        r.d(t, {
          default: function () {
            return _app;
          },
        });
      var n = r(85893);
      r(70415);
      var o = r(67294),
        s = r(1785),
        a = r.n(s),
        p = r(3957),
        c = r(45022);
      let u =
        "undefined" != typeof crypto &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto);
      var l = { randomUUID: u };
      let _ = new Uint8Array(16),
        d = [];
      for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));
      var esm_browser_v4 = function (e, t, r) {
          if (l.randomUUID && !t && !e) return l.randomUUID();
          e = e || {};
          let n =
            e.random ||
            (
              e.rng ||
              function () {
                if (
                  !i &&
                  !(i =
                    "undefined" != typeof crypto &&
                    crypto.getRandomValues &&
                    crypto.getRandomValues.bind(crypto))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return i(_);
              }
            )();
          if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
            r = r || 0;
            for (let e = 0; e < 16; ++e) t[r + e] = n[e];
            return t;
          }
          return (function (e, t = 0) {
            return (
              d[e[t + 0]] +
              d[e[t + 1]] +
              d[e[t + 2]] +
              d[e[t + 3]] +
              "-" +
              d[e[t + 4]] +
              d[e[t + 5]] +
              "-" +
              d[e[t + 6]] +
              d[e[t + 7]] +
              "-" +
              d[e[t + 8]] +
              d[e[t + 9]] +
              "-" +
              d[e[t + 10]] +
              d[e[t + 11]] +
              d[e[t + 12]] +
              d[e[t + 13]] +
              d[e[t + 14]] +
              d[e[t + 15]]
            );
          })(n);
        },
        h = r(11163),
        f = r(4298),
        g = r.n(f);
      r(83608);
      var _app = function (e) {
        let { Component: t, pageProps: r } = e,
          i = (0, h.useRouter)(),
          s = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            if (s.current !== i.asPath)
              try {
                s.current = i.asPath;
                let e = (0, p.vQ)("email"),
                  t = esm_browser_v4();
                sessionStorage.getItem("sessionLogsId")
                  ? (t = sessionStorage.getItem("sessionLogsId"))
                  : sessionStorage.setItem("sessionLogsId", t),
                  (e && e.length > 0) || (e = "anonymous"),
                  ""
                    .concat(window.location.protocol, "//")
                    .concat(window.location.host)
                    .concat(i.asPath);
              } catch (e) {
                console.error(e);
              }
          }, [i.asPath, i.events]),
          (0, o.useEffect)(() => {
            let init = async () => {
              a().initialize({ gtmId: "GTM-KGZKLLFQ" }),
                (null == (0, p.vQ)("__lo") ||
                  0 == (0, p.vQ)("__lo").length ||
                  "false" == (0, p.vQ)("__lo")) &&
                  (c.n.track("First Visit"),
                  (0, p.wn)("__lo", "true"),
                  0.5 > Math.random()
                    ? (0, p.wn)("__ab", "A")
                    : (0, p.wn)("__ab", "B"));
            };
            init(),
              null == localStorage.getItem("test_ul")
                ? 0.2 > Math.random()
                  ? (localStorage.setItem("test_ul", "true"),
                    c.n.track("AB--ul"))
                  : localStorage.setItem("test_ul", "false")
                : "true" == localStorage.getItem("test_ul") &&
                  c.n.track("AB--ul"),
              localStorage.setItem("test_limitNot", "true"),
              localStorage.setItem("test_forcedSignUp", "false"),
              null ==
                localStorage.getItem(
                  "questionnaire-occupation-v1.0-humanizeai"
                ) &&
                (Math.random() > 0.9
                  ? localStorage.setItem(
                      "questionnaire-occupation-v1.0-humanizeai",
                      "true"
                    )
                  : localStorage.setItem(
                      "questionnaire-occupation-v1.0-humanizeai",
                      "false"
                    )),
              localStorage.setItem("_num", "v.011"),
              localStorage.setItem("test_miniTrial", "false");
            let clickEvent = (e) => {
              if (document.getElementById("clarity-script")) return;
              let t = document.createElement("script");
              (t.innerHTML =
                '\n            (function(c,l,a,r,i,t,y){\n                    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };\n                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n    })(window, document, "clarity", "script", "o69hog1pnr");\n            '),
                (t.id = "clarity-script"),
                document.body.appendChild(t);
            };
            return (
              document.addEventListener("click", clickEvent),
              () => {
                document.removeEventListener("click", clickEvent);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(t, { ...r }),
              (0, n.jsx)(g(), {
                src: "https://r.wdfl.co/rw.js",
                "data-rewardful": "8ddbcf",
              }),
              (0, n.jsx)(g(), {
                id: "rewardful-queue",
                strategy: "beforeInteractive",
                children:
                  "(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');",
              }),
            ],
          })
        );
      };
    },
    3957: function (e, t, r) {
      "use strict";
      function writeCookie(e, t) {
        document.cookie = "".concat(e, "=").concat(t, ";path=/");
      }
      function readCookie(e) {
        let t = document.cookie.split(";");
        for (let r = 0; r < t.length; r++)
          if (
            t[r].split("=")[0] == " " + e ||
            t[r].split("=")[0] == e + " " ||
            t[r].split("=")[0] == e
          )
            return t[r].substring(t[r].indexOf("=") + 1);
        return "";
      }
      r.d(t, {
        vQ: function () {
          return readCookie;
        },
        wn: function () {
          return writeCookie;
        },
      });
    },
    45022: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return o;
        },
      });
      var i = r(8891),
        n = r.n(i);
      n().init("f83d4e15ac2a6a1b78303c48d15a0ff7");
      let o = {
        identify: (e) => {
          n().identify(e);
        },
        alias: (e) => {
          n().alias(e);
        },
        track: (e, t) => {},
        cohort: (e) => {
          n().register({ AB: e });
        },
        people: {
          set: (e) => {
            n().people.set(e);
          },
        },
      };
    },
    70415: function () {},
    11163: function (e, t, r) {
      e.exports = r(59974);
    },
    4298: function (e, t, r) {
      e.exports = r(85354);
    },
    56421: function (e, t, r) {
      "use strict";
      var i,
        n = (i = r(96425)) && i.__esModule ? i : { default: i };
      e.exports = {
        tags: function (e) {
          var t = e.id,
            r = e.events,
            i = e.dataLayer,
            o = e.dataLayerName,
            s = e.preview,
            a = "&gtm_auth=" + e.auth,
            p = "&gtm_preview=" + s;
          t || (0, n.default)("GTM Id is required");
          var c =
            "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
            JSON.stringify(r).slice(1, -1) +
            "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
            a +
            p +
            "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
            o +
            "','" +
            t +
            "');";
          return {
            iframe:
              '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
              t +
              a +
              p +
              '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
            script: c,
            dataLayerVar: this.dataLayer(i, o),
          };
        },
        dataLayer: function (e, t) {
          return (
            "\n      window." +
            t +
            " = window." +
            t +
            " || [];\n      window." +
            t +
            ".push(" +
            JSON.stringify(e) +
            ")"
          );
        },
      };
    },
    58676: function (e, t, r) {
      "use strict";
      var i,
        n = (i = r(56421)) && i.__esModule ? i : { default: i };
      e.exports = {
        dataScript: function (e) {
          var t = document.createElement("script");
          return (t.innerHTML = e), t;
        },
        gtm: function (e) {
          var t = n.default.tags(e);
          return {
            noScript: function () {
              var e = document.createElement("noscript");
              return (e.innerHTML = t.iframe), e;
            },
            script: function () {
              var e = document.createElement("script");
              return (e.innerHTML = t.script), e;
            },
            dataScript: this.dataScript(t.dataLayerVar),
          };
        },
        initialize: function (e) {
          var t = e.gtmId,
            r = e.events,
            i = e.dataLayer,
            n = e.dataLayerName,
            o = e.auth,
            s = e.preview,
            a = this.gtm({
              id: t,
              events: void 0 === r ? {} : r,
              dataLayer: i || void 0,
              dataLayerName: void 0 === n ? "dataLayer" : n,
              auth: void 0 === o ? "" : o,
              preview: void 0 === s ? "" : s,
            });
          i && document.head.appendChild(a.dataScript),
            document.head.insertBefore(a.script(), document.head.childNodes[0]),
            document.body.insertBefore(
              a.noScript(),
              document.body.childNodes[0]
            );
        },
        dataLayer: function (e) {
          var t = e.dataLayer,
            r = e.dataLayerName,
            i = void 0 === r ? "dataLayer" : r;
          if (window[i]) return window[i].push(t);
          var o = n.default.dataLayer(t, i),
            s = this.dataScript(o);
          document.head.insertBefore(s, document.head.childNodes[0]);
        },
      };
    },
    1785: function (e, t, r) {
      "use strict";
      var i,
        n = (i = r(58676)) && i.__esModule ? i : { default: i };
      e.exports = n.default;
    },
    96425: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          console.warn("[react-gtm]", e);
        });
    },
  },
  function (e) {
    var __webpack_exec__ = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(91118), __webpack_exec__(59974);
    }),
      (_N_E = e.O());
  },
]);
