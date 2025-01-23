(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    75557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(20417);
        },
      ]);
    },
    80055: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/DownArrow.640d2d7d.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    24175: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/Plus.cfe985de.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    17906: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/check-mark.933c4fbd.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    87477: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/copy.2752c27c.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    26486: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/crossThin.54e30fc4.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    5223: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/crossThinWhite.24108405.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    69182: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/success.a5a0aae8.svg",
        height: 88,
        width: 88,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    1348: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return validateToken;
        },
      });
      var r = n(3957);
      let validateToken = async () => {
        let e = (0, r.vQ)("token"),
          t = await fetch("/api/user/vtoken", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(e),
            },
          });
        if (!t.ok) throw Error("token is not valid");
        return (t.token = e), t;
      };
    },
    84782: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return getUserInfo;
        },
      });
      let getUserInfo = async (e) => {
        try {
          let t = await fetch("/api/user/getuserinfo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(e),
            },
          });
          if (!t.ok) throw Error("Network response was not ok " + t.statusText);
          return await t.json();
        } catch (e) {
          throw (
            (console.error("There was a problem with the fetch operation:", e),
            e)
          );
        }
      };
    },
    51428: function (e, t, n) {
      "use strict";
      n(85893), n(67294), n(25675), n(26486), n(36968);
    },
    62118: function (e, t, n) {
      "use strict";
      var r = n(85893);
      n(67294);
      var o = n(84184),
        i = n.n(o);
      t.Z = (e) => {
        let {
          children: t,
          onClick: n,
          type: o = "button",
          className: s = "",
          disabled: a = !1,
          variant: l = "primary",
          size: c = "small",
          ...d
        } = e;
        return (0, r.jsx)("button", {
          type: o,
          className: ""
            .concat(i().button, " ")
            .concat(
              ((e) => {
                var t;
                let n = { small: i().small, big: i().big };
                return null !== (t = n[e]) && void 0 !== t ? t : i().small;
              })(c),
              " "
            )
            .concat(
              ((e) => {
                var t;
                let n = {
                  primary: i().primary,
                  secondary: i().secondary,
                  circle: i().circle,
                };
                return null !== (t = n[e]) && void 0 !== t ? t : i().primary;
              })(l),
              " "
            )
            .concat(s),
          onClick: n,
          disabled: a,
          ...d,
          children: t,
        });
      };
    },
    84051: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Alert;
        },
      });
      var r = n(85893),
        o = n(67294),
        i = n(14166),
        s = n.n(i),
        a = {
          src: "/_next/static/media/cross.636f579b.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = n(25675),
        c = n.n(l),
        d = n(56040),
        Alert = () => {
          let { alerts: e, removeLastAlert: t, removeAlert: n } = (0, d.Z7)();
          (0, o.useEffect)(() => {
            if (0 === e.length) return;
            let n = setTimeout(() => {
              t();
            }, 3e3);
            return () => clearTimeout(n);
          }, [e]);
          let i = {
            error: s().error,
            warning: s().warning,
            success: s().success,
          };
          return (0, r.jsx)("div", {
            className: s().alerts,
            children: e.map((e, t) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "".concat(s().alert, " ").concat(i[e.type] || ""),
                  children: [
                    (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: e.alert },
                    }),
                    (0, r.jsx)(c(), {
                      src: a,
                      alt: "close alert",
                      onClick: () => n(t),
                    }),
                  ],
                },
                t
              )
            ),
          });
        };
    },
    51077: function (e, t, n) {
      "use strict";
      var r = n(85893),
        o = n(28882),
        i = n.n(o);
      t.Z = (e) => {
        let {
          text: t,
          type: n,
          email: o,
          onChange: s,
          placeholder: a,
          className: l,
          style: c,
        } = e;
        return (0, r.jsxs)("div", {
          className: "".concat(i().InputContainer, " ").concat(l),
          style: c,
          children: [
            (0, r.jsx)("p", { children: t }),
            (0, r.jsx)("input", {
              type: n,
              value: o,
              onChange: s,
              placeholder: a,
            }),
          ],
        });
      };
    },
    9709: function (e, t, n) {
      "use strict";
      var r = n(85893);
      n(67294),
        (t.Z = (e) => {
          let { className: t } = e;
          return (0, r.jsxs)("svg", {
            width: "124",
            height: "124",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              margin: "auto",
              display: "block",
              shapeRendering: "auto",
              background: "white",
            },
            className: t,
            children: [
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "\n            .spinner_9Mto{\n                animation: spinner_5GqJ 1.6s linear infinite;\n                animation-delay:-1.6s;\n            }\n            .spinner_bb12{\n                animation-delay: -1.6s;\n            }\n            @keyframes spinner_5GqJ {\n                12.5% {x:13px;y:1px}\n                25% {x:13px;y:1px}\n                37.5%{x:13px;y:13px}\n                50%{x:13px;y:13px}\n                62.5%{x:1px;y:13px}\n                75%{x:1px;y:13px}\n                87.5%{x:1px;y:1px}}\n        ",
                },
              }),
              (0, r.jsx)("rect", {
                class: "spinner_9Mto",
                x: "1",
                y: "1",
                rx: "1",
                width: "10",
                height: "10",
                style: { color: "black" },
              }),
              (0, r.jsx)("rect", {
                class: "spinner_9Mto spinner_bb12",
                x: "1",
                y: "1",
                rx: "1",
                width: "10",
                height: "10",
                style: { color: "black" },
              }),
            ],
          });
        });
    },
    57242: function (e, t, n) {
      "use strict";
      var r = n(85893),
        o = n(25675),
        i = n.n(o),
        s = n(26486),
        a = n(5223),
        l = n(62863);
      t.Z = (e) => {
        let {
          className: t,
          onClick: n = () => {},
          modal: o = (0, l.d)(),
          white: c = !1,
        } = e;
        return (0, r.jsx)(i(), {
          className: t,
          onClick: () => {
            o.close(), n();
          },
          src: c ? a.Z : s.Z,
          alt: "close modal",
        });
      };
    },
    74877: function (e, t, n) {
      "use strict";
      var r = n(85893),
        o = n(67294),
        i = n(85952),
        s = n.n(i),
        a = n(62863);
      t.Z = (e) => {
        let { children: t, onClose: n = () => {}, modal: i = (0, a.d)() } = e,
          l = (0, o.useRef)();
        return ((0, o.useEffect)(() => {
          let handleOutsideClick = (e) => {
            l.current && !l.current.contains(e.target) && (n(), i.close());
          };
          return (
            i.isOpen
              ? document.addEventListener("mousedown", handleOutsideClick)
              : document.removeEventListener("mousedown", handleOutsideClick),
            () => {
              document.removeEventListener("mousedown", handleOutsideClick);
            }
          );
        }, [i.isOpen, i.close, n]),
        i.isOpen)
          ? (0, r.jsx)("div", {
              className: s().modalOverlay,
              children: (0, r.jsx)("div", {
                className: s().modalContainer,
                ref: l,
                children: t,
              }),
            })
          : null;
      };
    },
    92243: function (e, t, n) {
      "use strict";
      var r = n(85893);
      n(67294);
      var o = n(58371),
        i = n.n(o);
      t.Z = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
          className: "".concat(i().container, " ").concat(n),
          children: t,
        });
      };
    },
    70511: function (e, t, n) {
      "use strict";
      function countWords(e) {
        let t = (e = (e = (e = e.replace(/(^\s*)|(\s*$)/gi, "")).replace(
          /[ ]{2,}/gi,
          " "
        )).replace(/\n /, "\n"))
          .split(" ")
          .filter(function (e) {
            return "" != e;
          });
        for (var n = 0; n < t.length; n++)
          t[n].length > 20 && (t[n] = t[n].match(/.{1,20}/g));
        return (t = [].concat.apply([], t)).length;
      }
      n.d(t, {
        H: function () {
          return countWords;
        },
      });
    },
    86022: function (e, t, n) {
      "use strict";
      n.d(t, {
        SN: function () {
          return i;
        },
        lo: function () {
          return o;
        },
        m8: function () {
          return r;
        },
      });
      let r =
          "650815245931-odo6j8ltlck7rv71ktr4vj7jkrhmu9fh.apps.googleusercontent.com",
        o = "".concat("https://www.humanizeai.pro", "/api/oauth/google"),
        i = "6Ldomx8kAAAAAAxDRmkI4lvA-N66IcaR_FRGEFBL";
    },
    18107: function (e, t, n) {
      "use strict";
      function getMaxTokens() {
        return 12e3;
      }
      function getMinTokens() {
        return 30;
      }
      function freewords() {
        return 1500;
      }
      n.d(t, {
        Ev: function () {
          return getMinTokens;
        },
        eO: function () {
          return freewords;
        },
        tq: function () {
          return getMaxTokens;
        },
      });
    },
    20417: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Home;
          },
        });
      var r = n(85893),
        o = n(67294),
        i = n(11163),
        s = n.n(i),
        a = n(9008),
        l = n.n(a),
        c = n(47229),
        d = n.n(c),
        u = n(3957),
        h = n(45022),
        p = n(92120),
        C = n(40592),
        m = n(74877),
        _ = n(619),
        x = n.n(_),
        g = n(13585),
        f = n.n(g),
        j = n(62118),
        w = n(62863);
      let b = (0, w.k)(),
        v = [
          "Copywriter",
          "Undergraduate Student",
          "Graduate Student",
          "Author/Blogger",
          "Other",
        ],
        Option = (e) => {
          let { option: t, checked: n, onChange: o, inputRef: i } = e;
          return (0, r.jsxs)("div", {
            className: x().option,
            onClick: o,
            children: [
              (0, r.jsx)(f(), {
                name: "my-input",
                checked: n,
                className: x().checkbox,
                style: { border: "1px solid #000" },
                icon: (0, r.jsx)("div", {
                  style: {
                    width: "70%",
                    height: "70%",
                    backgroundColor: "#1DFDFD",
                    borderRadius: 15,
                  },
                }),
              }),
              (0, r.jsxs)("p", {
                children: [
                  t,
                  "Other" === t &&
                    (0, r.jsx)("input", {
                      style: { opacity: n ? 1 : 0 },
                      placeholder: "Please specify",
                      ref: i,
                    }),
                ],
              }),
            ],
          });
        };
      var components_Questionnaire = () => {
          let [e, t] = (0, o.useState)({
              options: [!1, !1, !1, !1, !1],
              otherValue: "",
            }),
            n = (0, o.useRef)(),
            i = b(),
            handleOptionChange = (n) => {
              let r = e.options.map((e, t) => t === n);
              t({ ...e, options: r });
            };
          return (0, r.jsx)(m.Z, {
            modal: i,
            children: (0, r.jsxs)("div", {
              className: x().container,
              children: [
                (0, r.jsxs)("div", {
                  className: x().titleSection,
                  children: [
                    (0, r.jsx)("p", {
                      className: x().text,
                      children: "Let us better understand you",
                    }),
                    (0, r.jsx)("h2", {
                      className: x().title,
                      children: "What is your current occupation?",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: x().options,
                  children: v.map((t, o) =>
                    (0, r.jsx)(
                      Option,
                      {
                        option: t,
                        checked: e.options[o],
                        onChange: () => handleOptionChange(o),
                        inputRef: "Other" === t ? n : null,
                      },
                      t
                    )
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: x().buttons,
                  children: [
                    (0, r.jsx)(j.Z, {
                      variant: "secondary",
                      className: x().cancel,
                      onClick: () => {
                        i.close(),
                          localStorage.setItem(
                            "questionnaire-occupation-v1.0-humanizeai",
                            "false"
                          );
                      },
                      children: "Skip",
                    }),
                    (0, r.jsx)(j.Z, {
                      onClick: () => {
                        let t = (0, u.vQ)("token"),
                          r = e.options.findIndex((e) => e),
                          o = v[r];
                        if ("Other" === o) {
                          var s;
                          o = "other: ".concat(
                            null === (s = n.current) || void 0 === s
                              ? void 0
                              : s.value
                          );
                        }
                        fetch("/api/user/questionnaire", {
                          method: "POST",
                          headers: {
                            Authorization: "Bearer ".concat(t),
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            answers: [
                              {
                                question: "What is your occupation?",
                                answer: o,
                              },
                            ],
                            name: "questionnaire-occupation-v1.0-humanizeai",
                          }),
                        }),
                          i.close(),
                          localStorage.setItem(
                            "questionnaire-occupation-v1.0-humanizeai",
                            "false"
                          );
                      },
                      children: "Confirm",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        y = n(72040),
        k = n(37541),
        S = n.n(k),
        E = n(87049),
        A = n.n(E),
        I = n(25675),
        M = n.n(I),
        T = n(26486),
        N = n(48905),
        L = n(62710),
        O = n.n(L),
        InputContainer_ClearButton = () => {
          let { setKeywords: e } = (0, N.Nf)(),
            { setText: t } = (0, N.Ng)(),
            { setShowAdvanced: n } = (0, N.AX)(),
            { setShowButton: o } = (0, N.wc)(),
            { clearOutputText: i } = (0, N.Zq)(),
            { setShowDifferent: s } = (0, N.Qe)(),
            {
              setUpperBounder: a,
              setOutputIndex: l,
              clearOutputTexts: c,
            } = (0, N.cy)();
          return (0, r.jsx)(M(), {
            className: O().clearButton,
            src: T.Z,
            alt: "clear",
            style: { opacity: 0.5, cursor: "pointer" },
            onClick: () => {
              s(!1), i(), e([]), t(""), n(!1), o(!0), a(-1), l(), c();
            },
          });
        },
        U = n(56040),
        Z = n(70511),
        B = n(18107),
        z = n(78757),
        H = n.n(z),
        R = n(23604),
        q = n.n(R),
        P = n(57242);
      let Q = (0, w.k)();
      var Editor_SubscribeModal = () => {
          let e = Q(),
            t = (0, i.useRouter)();
          return (0, r.jsxs)(m.Z, {
            modal: e,
            children: [
              (0, r.jsxs)("div", {
                className: q().container,
                children: [
                  (0, r.jsx)("h2", { children: "Upgrade" }),
                  (0, r.jsxs)("p", {
                    children: [
                      "You’ve reached your word limit.",
                      (0, r.jsx)("br", {}),
                      "Upgrade to get more words and continue creating without interruption.",
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: q().flex,
                    children: [
                      (0, r.jsx)(j.Z, {
                        variant: "secondary",
                        onClick: e.close,
                        children: "Cancel",
                      }),
                      (0, r.jsx)(j.Z, {
                        onClick: () => t.push("/upgrade"),
                        children: "Upgrade",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(P.Z, { modal: e, className: q().close }),
            ],
          });
        },
        W = n(87825),
        V = n.n(W),
        D = n(34853),
        F = n(41664),
        G = n.n(F),
        Y = n(77181);
      n(86022);
      var J = n(51077);
      async function trackEvent(e) {
        try {
          let e = localStorage.getItem("user_id");
          localStorage.getItem("user_id") ||
            ((e = Math.random().toString(36).substring(2, 15)),
            localStorage.setItem("user_id", e));
        } catch (e) {
          console.error("Error:", e);
        }
      }
      let K = (0, w.k)(),
        SignupContent = () => {
          let [e, t] = (0, o.useState)(""),
            [n, i] = (0, o.useState)(null),
            [a, l] = (0, o.useState)(!1),
            c = (0, o.useRef)(!1),
            d = (0, o.useRef)(null),
            [p, C] = (0, o.useState)(!1),
            getUserInfo = async () => {
              let e = (0, u.vQ)("token");
              if (0 != e.length) {
                let t = await fetch("/api/user/vtoken", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e),
                  },
                });
                200 == t.status &&
                  (await fetch("/api/user/getuserinfo", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer ".concat(e),
                    },
                  }));
              }
            };
          (0, o.useEffect)(() => {
            h.n.track("/signup/start page loaded"),
              trackEvent("/index signupmodal opened"),
              getUserInfo();
          }, []);
          let validateInput = (e) => {
              if (0 == e.length)
                throw (l(!0), Error("Please, enter email address"));
              i(null);
            },
            [m, _] = (0, o.useState)(!1),
            [x, g] = (0, o.useState)(!1),
            f = (0, o.useRef)(null),
            w = "6Ldk4O4pAAAAALWK4QNSL5zK5998bGdV5PCNbYLZ";
          (0, o.useEffect)(() => {
            let e = document.createElement("script");
            return (
              (e.src =
                "https://www.google.com/recaptcha/enterprise.js?render=".concat(
                  w
                )),
              (f.current = e),
              document.body.appendChild(e),
              () => {
                document.body.removeChild(f.current);
              }
            );
          }, []);
          let handleSubmit = async (t) => {
              let n;
              if (
                (t.preventDefault(),
                (c.current = !0),
                h.n.track("/index sign up modal submit"),
                x)
              )
                (n = d.current.getValue()), d.current.reset();
              else {
                async function recaptchaCall() {
                  for (
                    window.grecaptcha.enterprise.ready(async () => {
                      n = await window.grecaptcha.enterprise.execute(w, {
                        action: "gptinf_com",
                      });
                    });
                    !n;

                  )
                    await new Promise((e) => setTimeout(e, 100));
                }
                await recaptchaCall();
              }
              try {
                if ((validateInput(e), null == n))
                  throw Error("Please, confirm you are not a robot");
                let t = await fetch("/api/user/confirmemail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: e,
                    recaptchaToken: { token: n, type: x ? "checkbox" : "auto" },
                  }),
                });
                if (!t.ok) throw Error((await t.json()).message);
                h.n.track("/signup/start button clicked"),
                  s().push("/signup/authemail?email=" + e),
                  d.current.reset();
              } catch (e) {
                i(e.message);
              }
            },
            errorChange = (e) => {
              if (c)
                try {
                  validateInput(e);
                } catch (e) {
                  i(e.message);
                }
            };
          return (
            (0, o.useRef)(null),
            (0, r.jsx)("div", {
              className: V().SignUpWrapper,
              children: (0, r.jsx)("div", {
                className: V().formWrapper,
                children: (0, r.jsxs)("form", {
                  onSubmit: handleSubmit,
                  children: [
                    (0, r.jsx)(J.Z, {
                      type: "email",
                      value: e,
                      onChange: (e) => {
                        t(e.target.value), errorChange(e.target.value);
                      },
                      placeholder: "Type your email",
                    }),
                    (0, r.jsx)("div", {
                      style: { zIndex: 1e3, display: x ? "block" : "none" },
                      children: (0, r.jsx)(D.Z, {
                        sitekey: "6LdQ1e4pAAAAAM7KV4ZRItvm_QU-iIw8vT4nW0I_",
                        ref: d,
                        theme: "dark",
                      }),
                    }),
                    n && (0, r.jsx)("p", { className: V().error, children: n }),
                    (0, r.jsx)(j.Z, {
                      size: "big",
                      type: "submit",
                      "data-track": "signup_modal_button",
                      className: V().submitButton,
                      children: "Sign Up",
                    }),
                    (0, r.jsx)(Y.Z, {
                      title: "Sign Up with Google",
                      className: V().googleButton,
                      onClick: () => {
                        h.n.track("/index sign up modal submit");
                      },
                      "data-track": "signup_modal_google",
                    }),
                    (0, r.jsxs)("p", {
                      className: V().account,
                      children: [
                        "Already have an account? ",
                        (0, r.jsx)(G(), { href: "/login", children: "Log in" }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
      var Editor_SignUpModal = () => {
          let e = K();
          return (
            (0, i.useRouter)(),
            (0, o.useEffect)(() => {
              (0, u.vQ)("token") && e.close();
            }, []),
            (0, r.jsxs)(m.Z, {
              modal: e,
              onClose: () => {
                h.n.track("/index sign up modal closed"),
                  trackEvent("/index signupmodal closed");
              },
              children: [
                (0, r.jsxs)("div", {
                  className: V().container,
                  "data-track": "signup_modal",
                  children: [
                    (0, r.jsxs)("div", {
                      className: V().signup,
                      "data-track": "signup_modal_email",
                      children: [
                        (0, r.jsx)("h2", {
                          children: "Sign Up to use this mode",
                        }),
                        (0, r.jsx)(SignupContent, {}),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: V().ad,
                      children: [
                        (0, r.jsx)("h2", { children: "Sign Up for FREE" }),
                        (0, r.jsx)("h3", {
                          children: "Get free 1500 credits at Sign Up",
                        }),
                        (0, r.jsxs)("p", {
                          children: [
                            "- Includes all modes & features ",
                            (0, r.jsx)("br", {}),
                            "- Bypasses ALL AI detection ",
                            (0, r.jsx)("br", {}),
                            "- High quality, legible content ",
                            (0, r.jsx)("br", {}),
                            "- Writing level matching ",
                            (0, r.jsx)("br", {}),
                            "- Watermark and future proof ",
                            (0, r.jsx)("br", {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(P.Z, { modal: e, className: V().close, white: !1 }),
              ],
            })
          );
        },
        X = n(1348),
        $ = n(84782),
        ee = n(39332),
        et = n(88429),
        en = n.n(et),
        Modal2 = (e) => {
          let { children: t, onClose: n = () => {}, modal: i = (0, w.d)() } = e,
            s = (0, o.useRef)();
          return ((0, o.useEffect)(() => {}, [i.isOpen, i.close, n]), i.isOpen)
            ? (0, r.jsx)("div", {
                className: en().modalContainer,
                ref: s,
                children: t,
              })
            : null;
        },
        er = n(81713),
        eo = n.n(er),
        ei = n(5223),
        Modal2_CloseCross = (e) => {
          let {
            className: t,
            onClick: n = () => {},
            modal: o = (0, w.d)(),
            white: i = !1,
          } = e;
          return (0, r.jsx)(M(), {
            className: t,
            onClick: () => {
              o.close(), n();
            },
            src: i ? ei.Z : T.Z,
            alt: "close modal",
          });
        };
      n(10928);
      var es = n(1944),
        ea = n.n(es),
        el = n(86712);
      let ec = (0, w.k)();
      var Editor_UpgradeModal = () => {
        let e = ec();
        (0, i.useRouter)(),
          (0, o.useEffect)(() => {
            (0, u.vQ)("token") && e.close();
          }, []);
        let t = (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "36px",
            viewBox: "0 -960 960 960",
            width: "36px",
            fill: "#1E9330",
            children: (0, r.jsx)("path", {
              d: "M421.77-325.92 675.8-579.95l-24.39-24.23-229.64 230.15-115.39-115.38-23.71 24.23 139.1 139.26Zm58.46 203.1q-73.96 0-139.04-28.22t-113.58-76.69q-48.51-48.47-76.65-113.32-28.14-64.85-28.14-138.72 0-74.11 28.22-139.45 28.22-65.33 76.69-113.67t113.32-76.31q64.85-27.98 138.72-27.98 74.11 0 139.45 28.13 65.34 28.13 113.68 76.36 48.33 48.22 76.3 113.33 27.98 65.11 27.98 139.13 0 73.96-28.05 139.04-28.06 65.08-76.36 113.58-48.3 48.51-113.41 76.65-65.11 28.14-139.13 28.14Zm-.28-32.44q135.24 0 230.02-94.8 94.77-94.81 94.77-229.89 0-135.24-94.72-230.02-94.73-94.77-229.97-94.77-135.09 0-229.94 94.72-94.85 94.73-94.85 229.97 0 135.09 94.8 229.94 94.81 94.85 229.89 94.85ZM480-480Z",
            }),
          }),
          [n, s] = (0, o.useState)(0),
          [a, l] = (0, o.useState)(""),
          [c, d] = (0, o.useState)("");
        return (
          (0, o.useEffect)(() => {
            (0, X.R)()
              .then((e) => {
                console.log(e.token),
                  (0, $.b)(e.token).then((e) => {
                    l(e.email);
                  });
              })
              .catch((e) => {
                console.log(e);
              }),
              window.rewardful("ready", function () {
                window.Rewardful.referral && d(window.Rewardful.referral);
              });
          }, []),
          (0, r.jsx)(m.Z, {
            modal: e,
            onClose: () => {
              h.n.track("/index sign up modal closed"),
                trackEvent("/index signupmodal closed");
            },
            children: (0, r.jsxs)("div", {
              className: ea().container,
              "data-track": "signup_modal",
              children: [
                (0, r.jsx)("div", {
                  className: ea().left,
                  children: (0, r.jsxs)("svg", {
                    width: "406",
                    height: "407",
                    viewBox: "0 0 256 247",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, r.jsxs)("g", {
                        "clip-path": "url(#clip0_215_83)",
                        children: [
                          (0, r.jsx)("path", {
                            d: "M256 0H0V247H256V0Z",
                            fill: "white",
                          }),
                          (0, r.jsx)("path", {
                            d: "M185.941 14.75C182.324 18.4766 180.777 22.3633 182.895 22.3633C183.684 22.3633 187.082 20.1523 188.984 18.3984C190.344 17.1445 191.156 15.4414 190.914 14.2969C190.613 13.0469 190.289 12.7812 189.012 12.7812C187.922 12.7812 187.734 12.9141 185.941 14.75Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M68.3751 26.6758C67.7774 27.504 67.8321 28.6485 68.4844 29.2852C68.7813 29.5782 69.5977 30.086 70.3048 30.4024C71.961 31.1758 73.6212 32.8282 74.8438 35.0118C76.2579 37.461 77.3712 38.0704 78.7579 37.1133C79.5977 36.5547 79.543 34.9844 78.6212 33.0665C77.7501 31.2305 74.1094 27.5821 72.2618 26.6758C70.6055 25.9063 68.918 25.879 68.3751 26.6758Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M196.348 28.9922C192.191 30.4571 189.988 32.4258 191.566 33.2813C192.246 33.6251 197.246 32.9883 198.902 32.3204C200.125 31.8438 201.105 30.8282 201.105 30.0586C201.105 29.793 200.832 29.3399 200.508 29.0196C199.773 28.3555 198.223 28.3555 196.348 28.9922Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M142.867 30.4023C139.305 32.5078 125.797 41.4804 120.582 45.1797C110.879 52.1015 106.668 55.7773 96.0664 66.5586C94.1094 68.5273 91.9648 70.6054 91.2578 71.164C89.6289 72.4414 89.6289 72.3906 93.3242 76.1445C94.8437 77.6875 96.7734 79.8711 97.6719 80.9883L99.2461 83.039L98.5156 83.7851C96.7461 85.6484 95.1172 90.4414 95.1172 93.8476V95.3125H93.8945C93.2148 95.3125 92.2617 95.4726 91.7734 95.6836C87.6172 97.3906 87.5078 106.066 91.6094 109.504C93.1055 110.754 94.6836 111.102 96.6914 110.594C97.5078 110.383 98.2148 110.25 98.2422 110.273C98.2695 110.328 98.9766 111.738 99.793 113.418C102.129 118.102 104.711 121.723 107.672 124.465L110.199 126.809L106.531 126.621C98.7578 126.223 92.3711 127.898 86.8281 131.734C80.5781 136.047 74.2188 143.926 68.8633 153.992C67.75 156.121 66.8281 157.559 66.7461 157.344C66.2812 156.039 64.5977 146.723 63.8633 141.559C62.7227 133.703 61.1484 118.184 61.1484 115.121C61.1484 113.816 61.0117 113.281 60.4414 112.457C59.7617 111.5 59.7617 111.418 60.168 110.727C60.4414 110.273 60.6016 109.395 60.6016 108.25C60.6016 105.801 61.3086 100.902 62.0703 97.9218C62.9141 94.7265 63.9727 92.2773 65.875 89.1875C68.3203 85.2734 68.6211 84.2617 67.832 82.3984C67.5313 81.6797 67.2344 81.4687 66.5 81.3359C64.4609 80.9609 62.3711 82.8008 60.3047 86.8476C59.707 87.9922 59.1367 88.9218 59.0273 88.9218C58.7266 88.8945 55.9844 87.9648 55.8477 87.8047C55.5195 87.5117 54.7617 82.1601 53.8086 73.7461C53.4297 70.3398 52.8867 68.7422 52.0156 68.5273C51.0352 68.289 50.3594 69.0351 49.7344 71.0586C49.2969 72.4961 48.457 77.6093 48.3477 79.5508C48.3203 79.789 48.0469 78.7773 47.6953 77.2617C46.5273 72.1484 45.3828 70.0195 43.8086 70.0195C42.0156 70.0195 41.418 71.9883 41.6875 77.1797C41.7695 79.1797 41.9336 81.3867 42.0156 82.1328L42.1758 83.4648L40.8984 81.3359C38.9687 78.0859 37.7187 77.0234 36.8242 77.9258C36.6055 78.1406 36.418 78.4062 36.418 78.539C36.418 79.3125 37.7188 85.5937 39.1328 91.5859C41.7695 102.82 42.8555 107.746 43.4805 111.02C43.7812 112.699 44.0781 114.293 44.1602 114.562C44.2148 114.906 43.6445 115.441 41.9336 116.559L39.5977 118.074L39.7852 121.805C40.3281 132.266 41.7969 146.031 42.7773 149.625C43.6719 152.98 45.3828 155.562 47.8828 157.398C48.6719 158.012 50.793 159.184 52.5859 160.008C57.3945 162.242 58.4297 163.281 58.4297 165.863C58.4297 169.859 53.8086 176.621 43.7812 187.297C41.9062 189.266 41.3086 190.066 41.418 190.465C41.5 190.758 41.418 191.156 41.2812 191.344C41.0625 191.582 41.2539 192.008 42.0703 192.941C43.3984 194.484 46.3359 197.281 48.375 198.957C50.9297 201.008 53.9727 202.34 54.4609 201.594C54.543 201.461 54.7891 199.809 55.0312 197.918C55.957 190.277 57.8047 183.223 61.0664 174.652C69.4883 152.555 81.1484 135.672 91.4492 130.641C95.8789 128.484 101.801 127.605 107.836 128.219L109.465 128.406L110.199 131.227C112.102 138.762 116.207 143.34 121.422 143.687C128.191 144.168 134.031 138.414 134.766 130.613L134.93 128.727L138.191 128.141C143.598 127.152 147.949 126.859 151.344 127.234C159.742 128.113 165.477 131.625 170.938 139.187C175.91 146.082 179.473 154.258 182.598 165.996C185.668 177.5 188.359 182.852 191.727 184.102C193.984 184.953 196.402 184.074 197.488 182.023C200.859 175.637 203.414 152.766 203.984 123.668C204.176 115.199 204.148 114.535 203.688 113.867C203.305 113.258 203.25 112.832 203.387 111.445C203.496 110.273 203.441 109.262 203.141 108.199C202.789 106.867 202.762 106.043 203.008 102.766C203.359 98.082 203.984 95.1797 205.75 89.9062C207.789 83.8633 208.414 81.6289 208.984 78.539C209.961 73.1875 210.613 68.3437 210.613 66.2656V64.1367L209.801 63.9765C208.82 63.789 208.77 63.5781 208.66 60.25C208.578 58.1445 208.496 57.6914 207.98 57.2148C207.082 56.3086 206.188 56.6797 205.508 58.2265C204.988 59.4492 203.957 63.2851 202.707 68.7695C202.383 70.207 202.055 71.3242 202 71.2461C201.945 71.1914 201.785 69.539 201.621 67.5976C201.348 63.8164 200.75 60.5156 200.125 59.289C199.691 58.5195 198.684 58.3047 198.168 58.9179C197.461 59.7422 197.027 62.6172 196.754 68.3711C196.621 71.6992 196.293 75.5586 196.078 76.9414C195.668 79.6562 194.961 82.2656 194.637 82.2656C194.527 82.2656 194.094 81.7617 193.629 81.1211C191.918 78.7539 188.738 75.2656 187.379 74.2539C185.262 72.6836 183.93 72.8437 183.547 74.7578C183.277 76.0351 183.848 77.7929 185.805 81.8672C187.598 85.5429 187.625 85.5937 187.734 88.2578C187.816 90.414 187.68 91.8515 186.973 95.8437C186.43 99.039 186.074 102.156 185.969 104.711L185.805 108.652L184.988 109.211C183.82 110.035 183.168 111.605 183.168 113.789C183.168 115.121 183.031 115.84 182.625 116.453C182.027 117.437 180.777 124.492 178.168 141.875C177.785 144.434 177.434 146.535 177.379 146.59C177.352 146.641 176.672 145.578 175.91 144.219C168.223 130.75 160.504 125.664 147.703 125.664C144.359 125.664 140.34 126.117 137.238 126.836C134.633 127.445 134.793 127.578 134.793 124.863C134.793 122.922 134.875 122.414 135.281 122.016C135.555 121.75 136.48 120.738 137.293 119.754C143.516 112.512 146.234 103.273 145.395 92.4101C144.66 82.6914 142.133 75.5312 137.891 71.0859L136.641 69.7812L137.703 69.3554C138.273 69.1133 140.203 68.3164 141.996 67.5703C152.867 63.0976 163.059 57.0547 168.086 52.0742C170.992 49.1718 172.133 47.0429 172.27 44.1679C172.352 42.3828 172.242 41.8789 171.672 40.6289C170.75 38.6289 168.793 36.6601 166.781 35.6758C165.477 35.0351 164.797 34.875 163.383 34.875C161.371 34.875 160.258 35.3047 158.898 36.6601C157.676 37.832 157.023 39.1914 156.859 40.7617C156.699 42.4648 157.188 43.7148 158.438 44.8359C161.344 47.3906 165.559 46.5117 167.27 42.9687L167.949 41.5312L167.434 40.5195C166.918 39.5351 165.938 38.8711 164.988 38.8711C164.363 38.8711 161.996 40.0703 161.289 40.7617C160.91 41.1328 160.855 41.3476 161.074 41.5586C161.289 41.7734 161.781 41.6133 162.977 40.8945C163.844 40.3593 164.742 39.9336 164.988 39.9336C165.641 39.9336 166.32 40.8125 166.32 41.6133C166.32 42.5976 164.633 44.3828 163.328 44.7539C160.285 45.6601 157.512 43.0781 158.41 40.1758C158.816 38.8711 160.422 37.0586 161.617 36.5547C164.336 35.4609 168.355 37.4336 170.148 40.7617C171.102 42.5429 171.047 45.1523 170.016 47.2304C167.105 53.0625 154.93 60.8359 138.383 67.4922L135.391 68.6875L132.457 67.2226C130.828 66.3984 128.898 65.6289 128.137 65.4687C127.402 65.2812 126.586 65.0937 126.371 65.0429C125.906 64.9101 125.691 65.0937 129.387 62.3008C133.816 58.9179 138.789 54.9765 142.402 51.9414C146.777 48.2968 154.523 40.789 155.582 39.2148C156.234 38.2031 156.289 38.0195 155.992 37.2187C155.691 36.4726 155.719 35.9414 156.156 34.0508C156.426 32.8281 156.645 31.3359 156.645 30.75C156.672 29.2343 156.129 29.0976 150.91 29.5C147.16 29.7656 146.617 29.7656 146.398 29.4179C146.047 28.7539 145.34 28.9414 142.867 30.4023ZM155.066 31.4687C154.578 33.7851 154.008 35.9687 153.816 36.0742C153.383 36.3398 148.652 32.0273 148.652 31.3359C148.652 31.1484 150.285 30.9883 153.082 30.9375C155.121 30.8828 155.176 30.9101 155.066 31.4687ZM146.914 35.6484L149.578 38.3906L147.973 39.8828C145.91 41.7461 142.621 44.3008 137.16 48.2968C134.793 50 131.426 52.582 129.684 53.9922C125.527 57.3476 119.387 62.1406 113.734 66.4258C108.406 70.4453 104.848 73.3203 101.746 76.0625C100.523 77.1289 99.3828 78.0078 99.2461 78.0078C98.8672 78.0078 95.8789 75 94.9531 73.7187L94.2461 72.707L94.9805 71.832C96.5859 69.914 102.863 63.8437 107.48 59.7695C114.113 53.8867 117.945 50.7695 125.961 44.5937C127.891 43.1289 132.945 39.5351 136.016 37.4843C142.051 33.4375 143.57 32.5078 143.898 32.6953C144.09 32.8008 145.445 34.1328 146.914 35.6484ZM207.246 62.1406C206.918 66.2656 205.48 73.6406 203.82 79.5781C202.461 84.4492 203.902 84.1054 205.398 79.207C205.695 78.1679 206.457 75.4258 207.055 73.082C207.629 70.7383 208.305 68.3945 208.551 67.8906L208.957 66.957L208.984 68.0234C208.984 69.8593 208.145 75.9297 207.465 78.8593C207.109 80.4297 206.023 84.1054 205.043 87.0312C202.898 93.5273 201.973 97.8398 201.594 103.379C201.32 106.812 201.211 107.559 200.887 107.426C199.719 107 196.266 106.707 193.629 106.84C190.996 106.973 189.445 107.266 187.68 107.957C187.191 108.172 187.164 108.066 187.324 105.004C187.406 103.246 187.68 100.691 187.895 99.3047C188.141 97.9218 188.574 95.207 188.902 93.3164C189.824 87.75 189.254 84.4218 186.594 79.8711C183.82 75.2109 184.527 73.2422 187.816 76.4609C188.547 77.1797 189.852 78.7539 190.695 79.9492C196.051 87.4062 197.137 85.6484 198.223 67.9687C198.441 64.4804 198.711 61.3945 198.82 61.1289C199.176 60.25 199.473 61.289 199.746 64.3476C199.883 65.9179 200.152 68.6875 200.316 70.5C200.508 72.3906 200.559 75.1601 200.453 77.0234C200.07 84.4218 201.785 80.6172 204.367 68.4218C205.777 61.7383 206.758 58.5468 207.137 59.2109C207.328 59.5312 207.355 60.6211 207.246 62.1406ZM126.914 66.5586C129.031 67.1445 133.164 68.9023 133.164 69.2226C133.164 69.4609 131.723 70.0742 127.43 71.6992C125.719 72.3633 123.762 73.1367 123.082 73.4258C111.098 78.7265 103.242 81.8945 103.676 81.2265C103.73 81.0937 104.684 80.4843 105.77 79.8437C107.891 78.5937 115.418 73.1367 118.762 70.4179C121.152 68.4765 124.469 66.0273 124.711 66.0273C124.82 66.0273 125.797 66.2656 126.914 66.5586ZM52.2852 73.6133C52.5313 75.2109 52.9102 78.0351 53.1289 79.8711C53.8086 85.25 54.0547 87.1406 54.2422 87.9101C54.3516 88.4961 54.8125 88.8437 56.8242 89.8008L59.2461 90.9726L60.0039 90.1211C60.4141 89.6406 61.3633 88.2031 62.0977 86.8984C63.6758 84.1836 64.9531 82.8008 65.9023 82.8008C66.3906 82.8008 66.582 82.9843 66.7188 83.5703C66.9336 84.5039 66.4453 85.7031 65.0039 87.7773C61.6367 92.6484 59.8711 98.4804 59.2461 106.895C59.1094 108.945 58.9727 110.754 58.9727 110.941C58.9727 111.125 58.2383 111.312 57.1523 111.418C54.1641 111.711 50.6836 112.539 48.1836 113.523C46.9062 114.055 45.7383 114.402 45.6289 114.32C45.4922 114.242 45.3828 113.922 45.3828 113.602C45.3828 112.699 43.3984 103.617 40.2227 89.8554C38.6992 83.3047 38.1016 80.1367 38.3438 80.1367C38.5898 80.1367 39.543 81.707 42.3398 86.7929C44.1328 90.0156 44.8945 90.8125 45.2773 89.8554C45.3828 89.6133 45.1406 88.3633 44.7305 87.1133C43.6992 83.7304 43.1563 79.9492 43.1016 75.9843C43.0742 72.5742 43.293 71.6172 44.0781 71.6172C44.7305 71.6172 46.0352 76.1445 47.043 81.9726C47.668 85.6484 47.8555 86.2617 48.4844 86.7656C48.8359 87.0586 48.9453 87.0039 49.1875 86.3945C49.3516 85.9922 49.5977 83.8633 49.7344 81.6289C49.9766 78.1406 50.8203 72.2031 51.2539 70.7109C51.5547 69.832 51.8242 70.6601 52.2852 73.6133ZM136.344 71.6718C139.605 74.6523 141.832 79.4726 143.273 86.7656C143.789 89.4023 143.871 90.707 143.871 95.7109C143.871 102.019 143.57 104.02 142.023 108.703C139.141 117.25 131.641 124.973 123.844 127.395C120.934 128.301 117.484 128.301 114.902 127.422C107.238 124.758 99.9258 114.348 97.2383 102.18C96.3672 98.2148 96.3398 91.9843 97.2109 89.2968C97.7539 87.6718 99.0586 85.3828 100.363 83.7851C100.605 83.4922 101.937 83.0117 103.84 82.5586C106.098 82 108.977 80.9336 114.277 78.6445C124.059 74.4648 133.707 70.6054 134.469 70.5781C134.82 70.5508 135.582 71.0039 136.344 71.6718ZM94.3828 96.8828C94.9531 97.0976 95.0625 97.3906 95.3633 99.4922C95.7422 102.18 96.2852 104.578 97.0742 107C97.6992 108.945 97.6445 109.023 95.6875 109.316C94.7109 109.477 94.2461 109.371 93.3242 108.891C89.707 107.027 88.7578 100.023 91.7461 97.4414C92.7266 96.6172 93.2969 96.4843 94.3828 96.8828ZM198.523 108.359C201.566 108.809 202.355 109.637 201.891 111.871L201.621 113.07L197.762 113.23C193.656 113.418 190.234 113.895 187.082 114.746C184.555 115.441 184.527 115.441 184.527 114.27C184.527 110.754 186.699 109.051 192 108.383C194.664 108.066 196.32 108.066 198.523 108.359ZM59 113.125C59.5156 113.523 59.6523 113.922 59.7344 115.332L59.8438 117.062L56.2266 118.074C52.0977 119.219 47.5859 120.711 43.8633 122.176C42.4492 122.734 41.2539 123.133 41.1719 123.055C41.0898 122.973 41.0352 121.988 41.0352 120.844V118.793L42.5586 117.809C46.1992 115.441 51.0898 113.602 55.4414 113.016C56.8516 112.832 58.1016 112.672 58.1836 112.645C58.293 112.617 58.6445 112.832 59 113.125ZM133.406 127.129C133.406 132.664 132.184 136.207 129.25 139.082C126.941 141.398 124.984 142.305 122.293 142.305C120.637 142.305 119.984 142.168 118.734 141.559C116.016 140.281 113.598 137.27 112.348 133.648C111.695 131.762 110.797 127.527 110.988 127.34C111.043 127.262 111.695 127.527 112.43 127.871C118.164 130.723 124.984 129.762 131.262 125.184C132.402 124.332 133.109 123.984 133.219 124.172C133.328 124.332 133.434 125.664 133.406 127.129Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M133.57 86.6329C131.941 88.2305 132.023 92.3047 133.707 93.1836C135.094 93.9024 136.289 92.7032 136.668 90.1993C137.188 87.0586 135.336 84.9024 133.57 86.6329Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M108.027 90.7851C107.375 92.039 107.48 93.7929 108.324 94.7539C109.93 96.6171 111.992 94.8867 111.395 92.1718C110.934 90.0937 108.84 89.2421 108.027 90.7851Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M122.566 91.1328C122.566 91.7695 123.109 92.8085 124.469 94.8867C127.375 99.2539 127.293 98.9843 126.207 100.211C125.094 101.461 124.984 102.234 125.934 102.234C126.613 102.234 127.699 101.195 128.406 99.8125C128.789 99.121 128.762 98.9843 127.809 97.3906C125.824 94.0351 123.434 90.6015 123 90.4414C122.645 90.3085 122.566 90.4414 122.566 91.1328Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M129.766 107.188C129.168 108.73 127.074 110.781 125.227 111.633C122.184 113.043 118.027 113.23 114.059 112.137C112.293 111.633 112.211 111.633 111.965 112.113C111.723 112.512 111.883 112.645 113.133 112.992C118.461 114.508 123.707 114.082 126.996 111.844C128.543 110.809 130.121 109.078 130.746 107.719C131.398 106.336 131.398 105.961 130.746 105.961C130.391 105.961 130.094 106.336 129.766 107.188Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M148.191 75.3437C147.813 75.5039 147.566 75.8242 147.566 76.1718C147.566 76.7031 147.648 76.7304 149.957 76.5429C152.676 76.3554 154.332 76.7304 155.883 77.875C157.352 78.9648 157.867 80.2695 158.137 83.5429C158.383 86.4453 158.844 87.9375 159.742 88.7343C159.988 88.9765 161.238 89.7226 162.516 90.3867C165.23 91.8515 165.992 92.4648 166.48 93.6367C167.434 95.7929 166.617 98.0273 164.008 100.477C162.73 101.676 162.27 102.262 162.406 102.582C162.648 103.219 163.086 103.141 164.336 102.262C165.531 101.41 167.215 99.3047 167.812 97.8672C168.465 96.3242 168.328 94.1406 167.488 92.625C166.672 91.1054 165.801 90.414 163.328 89.1875C161.48 88.2851 160.477 87.539 159.988 86.6601C159.824 86.3672 159.605 84.7422 159.523 83.0664C159.336 79.5781 158.844 78.3281 157.188 76.9961C155.773 75.8515 153.137 75.0781 150.746 75.1054C149.687 75.1054 148.52 75.2109 148.191 75.3437Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M146.234 88.2305C145.965 88.5508 146.02 88.6836 146.453 88.8945C146.75 89.0547 147.27 89.1875 147.621 89.1875C148.547 89.1875 149.414 89.8828 149.93 91C150.258 91.7188 150.395 92.8086 150.395 94.9141C150.422 97.6289 150.367 97.9766 149.633 99.5469C149.035 100.77 148.465 101.516 147.484 102.262C146.75 102.848 146.047 103.301 145.91 103.301C145.5 103.301 145.637 104.098 146.07 104.258C146.723 104.523 148.246 103.859 149.145 102.953C151.074 100.984 152.078 97.6016 151.832 93.9023C151.59 90.0391 150.121 87.8594 147.73 87.8594C147.023 87.8594 146.426 88.0156 146.234 88.2305Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M12.2578 90.7578C10.4882 91.371 9.62106 91.9843 8.48044 93.4218C6.98434 95.3398 6.957 96.8554 8.42575 97.4414C9.34763 97.8164 9.86325 97.5742 11.8203 95.8164C12.4453 95.2578 13.2617 94.6718 13.6406 94.539C14.7578 94.1406 16.1953 94.6484 17.3398 95.8984C19.4023 98.1601 19.7851 98.4804 20.4922 98.6679C21.4961 98.9062 22.2851 98.1601 22.2851 96.9648C22.2851 95.6328 21.3867 93.9531 19.9726 92.7031C17.5547 90.4921 14.9179 89.8281 12.2578 90.7578Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M227.195 112.324C227.195 112.59 227.629 113.469 228.172 114.242C229.828 116.559 230.535 118.367 230.344 119.594C229.965 121.961 227.871 123.746 222.059 126.676C218.277 128.566 215.914 129.496 214.039 129.789L213.008 129.949L213.117 131.254C213.305 133.066 214.938 136.234 218.195 141.078C221.785 146.402 222.547 148 223.035 151.195C223.469 154.043 223.387 156.148 222.547 162.004C221.867 166.902 221.867 169.191 222.574 170.312C223.496 171.828 224.203 171.215 223.742 169.246C223.523 168.262 223.578 167.941 224.23 166.637C225.914 163.281 229.504 160.488 236.051 157.453C245.293 153.191 246.789 152.285 248.309 150.105C249.504 148.32 249.668 146.777 248.934 143.848C247.277 137.352 243.254 131.812 234.938 124.73C233.742 123.691 232.438 122.629 232.031 122.309C231.352 121.805 231.324 121.668 231.566 120.605C231.922 119.035 231.461 116.93 230.262 114.668C229.312 112.883 228.281 111.82 227.574 111.82C227.355 111.82 227.195 112.031 227.195 112.324ZM233.879 125.824C238.418 129.762 242.113 133.516 243.551 135.672C245.156 138.043 246.844 141.371 247.414 143.289C247.957 145.152 247.984 147.813 247.441 148.801C246.406 150.797 243.418 152.578 234.395 156.68C230.969 158.223 226.895 160.887 225.184 162.672L223.852 164.055L224.066 162.645C224.176 161.844 224.367 160.434 224.504 159.477C224.855 156.785 224.773 152.074 224.34 150.023C223.797 147.469 222.547 145.02 219.449 140.438C216.949 136.738 214.691 132.586 214.691 131.707C214.691 131.441 215.234 131.121 216.105 130.828C220.344 129.445 225.996 126.543 228.688 124.359C229.586 123.641 230.398 123.027 230.48 123.027C230.562 123 232.086 124.277 233.879 125.824Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M229.094 129.977C228.418 130.27 226.43 131.016 224.668 131.625C221.512 132.691 220.781 133.172 221.949 133.332C223.469 133.543 230.996 130.59 230.996 129.789C230.996 129.258 230.535 129.285 229.094 129.977Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M234.664 135.406C232.738 136.098 228.469 137.113 227.438 137.113C225.914 137.113 224.746 137.402 224.746 137.777C224.746 138.391 225.59 138.441 228.254 138.043C232.52 137.379 237.25 135.914 237.25 135.246C237.25 134.875 235.945 134.953 234.664 135.406Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M235.781 141.637C230.809 143.793 226.352 146.59 227.113 147.043C227.246 147.121 228.77 146.402 230.48 145.445C232.195 144.484 234.559 143.262 235.754 142.73C238.852 141.344 238.988 141.266 238.555 140.891C238.254 140.68 237.602 140.84 235.781 141.637Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M238.988 147.867C234.965 149.359 231.406 151.063 230.047 152.129C229.395 152.633 229.313 152.848 229.559 153.113C229.828 153.379 230.184 153.246 231.324 152.5C233.309 151.223 235.891 150.051 238.77 149.117C242.711 147.867 243.5 147.496 243.5 146.934C243.5 146.668 243.336 146.43 243.172 146.43C242.98 146.43 241.105 147.07 238.988 147.867Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M31.4961 126.754C29.5937 129.363 29.7852 133.731 31.9609 137.988C33.1836 140.359 34.1602 141.77 36.2266 144.168C38.5352 146.828 38.5625 146.91 37.4492 148.375C36.9609 149.039 35.9531 150.449 35.1914 151.516C33.3438 154.176 29.0781 158.305 25.0312 161.313C21.5234 163.922 20.6523 164.906 20.6523 166.316C20.6523 167.516 21.5781 169.777 22.8008 171.617C24.2969 173.879 29.5117 179.949 32.5586 182.984C35.0312 185.461 39.1328 188.496 39.9766 188.496C40.1953 188.496 41.1719 187.508 42.125 186.313C43.1016 185.086 45.5195 182.316 47.5312 180.137C49.5156 177.953 51.8516 175.262 52.6953 174.145C55.5195 170.391 57.1523 166.531 56.5547 164.961C56.1445 163.973 54.4336 162.75 51.7695 161.551C45.3281 158.676 42.9375 156.066 40.7656 149.492C39.6211 146.059 39.3789 145.629 37.668 143.793C32.5586 138.363 30.2187 131.414 32.3398 128.008C32.9922 126.969 33.0469 126.301 32.4766 126.117C32.2305 126.008 31.8516 126.277 31.4961 126.754ZM49.082 166.266C49.7344 167.223 49.4609 169.301 48.375 171.75C47.8828 172.84 47.4766 174.012 47.4492 174.383C47.4219 175.129 46.6602 175.422 46.0625 174.918C45.4375 174.41 45.5742 173.188 46.4453 171.242C46.8789 170.258 47.2852 169.059 47.3945 168.555L47.5586 167.648L46.9883 168.152C45.6016 169.352 43.7539 171.773 43.7539 172.414C43.7539 173.215 42.6133 174.809 40.5742 176.859C39.3789 178.059 38.918 178.352 38.4805 178.219C37.5859 177.953 37.2305 177.367 37.5312 176.594C38.1836 174.891 41.8516 170.418 44.9492 167.516C47.2852 165.332 48.2656 165.039 49.082 166.266Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M26.2539 130.883C25.3828 131.574 22.6367 133.625 20.1367 135.434C11.2773 141.984 9.23828 144.699 9.23828 150.023C9.23828 154.176 10.7617 158.145 14.9453 164.801C16.1953 166.77 18.5898 170.711 20.2734 173.504C23.7266 179.258 24.9219 180.961 27.1484 183.172C28.8867 184.953 33.7539 188.68 34.7578 189.055C35.1406 189.215 35.9531 189.773 36.5781 190.359C37.8828 191.531 39.2969 192.328 39.6758 192.09C39.8398 192.008 39.9492 191.691 39.9492 191.422C39.9492 191.051 38.918 190.227 36.4961 188.656C28.3711 183.383 26.5781 181.441 20.7891 171.59C19.4023 169.246 17.2852 165.703 16.0625 163.734C11.6602 156.574 10.4102 153.219 10.6797 149.227C10.7617 148 11.0078 146.641 11.3047 146.031C12.6641 143.156 15.6523 140.305 22.3945 135.488C26.7148 132.398 28.5352 130.828 28.5352 130.164C28.5352 129.391 27.9922 129.551 26.2539 130.883Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M22.0391 143.422C17.2852 148.105 14.918 151.117 14.8398 152.605C14.7852 153.883 15.3281 153.75 16.1445 152.285C17.5547 149.758 20.2188 146.535 23.832 143.074C25.8164 141.133 27.4492 139.426 27.4492 139.27C27.4492 138.391 26.1172 139.402 22.0391 143.422Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M27.0117 146.109C22.3125 149.676 16.7421 155.988 17.2304 157.211C17.4726 157.852 17.746 157.691 18.75 156.227C19.9218 154.496 23.2343 150.609 24.5664 149.359C25.1093 148.852 26.6328 147.652 27.9375 146.695C29.2421 145.738 30.2734 144.832 30.246 144.699C30.1093 144.035 29.2695 144.406 27.0117 146.109Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M28.6445 152.367C23.2891 157.93 22.0117 159.367 22.0117 159.875C22.0117 160.781 22.6367 160.406 24.3789 158.488C25.3828 157.371 27.9648 154.656 30.1094 152.473C33.6992 148.824 34.3789 147.84 33.5625 147.574C33.4258 147.547 31.1992 149.676 28.6445 152.367Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M148.246 166.156C135.691 168.289 123.68 174.465 118.625 181.387C118.027 182.211 117.43 182.879 117.293 182.902C117.184 182.902 116.504 182.449 115.797 181.867C109.656 176.832 99.168 173.824 87.8047 173.852C82.914 173.879 74.8984 174.785 72.7773 175.582C72.4258 175.715 72.289 176.062 72.289 176.887C72.289 177.844 72.4258 178.59 72.9687 180.961C73.0781 181.465 72.9687 181.547 71.8008 181.707C69.8711 181.945 68.4023 182.852 68.0781 183.941C67.9414 184.449 67.4531 185.168 67.043 185.539C64.543 187.777 64.6797 187.535 64.6797 189.348C64.6797 191.691 65.0586 194.566 66.3086 201.461C66.9062 204.707 67.9961 210.883 68.7578 215.172C71.8828 233.141 72.6953 236.844 73.8633 238.281C74.8984 239.508 76.5547 240.383 78.2148 240.598C78.9453 240.676 81.664 240.492 84.2734 240.195C86.8828 239.879 90.9062 239.453 93.2148 239.211C95.5234 238.973 98.4062 238.68 99.6015 238.547C100.797 238.387 102.996 238.176 104.492 238.016C105.988 237.879 110.309 237.375 114.086 236.922L120.961 236.098L122.836 236.922C126.723 238.68 130.719 238.469 133.082 236.363C133.598 235.883 134.25 235.805 139.062 235.594C142.023 235.457 146.699 235.164 149.469 234.953C161.781 233.969 164.934 233.727 171.02 233.355C178.223 232.93 178.738 232.797 179.66 231.039C180.34 229.762 180.312 229.309 179.473 226.301C179.062 224.914 178.359 222.332 177.867 220.578C177.379 218.82 176.727 216.477 176.43 215.387C175.586 212.402 173.195 203.723 172.187 199.941C166.617 179.418 166.348 178.484 165.34 177.34C164.824 176.727 164.391 176.516 163.547 176.461C162.461 176.383 162.434 176.383 161.754 174.543C160.91 172.309 159.715 171.055 158.137 170.738L156.996 170.523L156.48 168.605C155.746 165.945 155.34 165.598 153.055 165.625C152.051 165.652 149.902 165.891 148.246 166.156ZM154.281 167.25C154.77 167.836 155.664 170.871 157.215 177.047C160.367 189.559 160.148 188.789 162.16 195.285C165.312 205.562 166.781 211.043 166.426 211.391C166.211 211.578 163.273 212.75 150.422 217.703C138.871 222.144 132.973 225.129 130.309 227.793C129.578 228.512 128.871 228.934 128.219 229.07C126.996 229.281 127.32 230.348 124.766 217.781C120.527 196.746 118.922 188.363 118.625 185.699C118.434 184.102 118.434 184.074 119.684 182.449C125.391 175.023 136.559 169.434 149.605 167.461C153.629 166.852 153.953 166.852 154.281 167.25ZM160.586 176.301C161.371 177.898 163.059 183.328 164.961 190.492C165.422 192.25 166.945 197.945 168.355 203.137C169.742 208.328 171.348 214.32 171.891 216.449C172.434 218.578 173.059 220.844 173.277 221.48C173.492 222.144 173.656 222.785 173.656 222.945C173.656 223.16 171.32 223.211 165.992 223.16C152.051 222.973 143.625 223.957 136.152 226.566C134.523 227.152 133.164 227.578 133.164 227.527C133.164 227.312 136.641 225.262 138.734 224.25C141.453 222.918 145.012 221.457 153.762 218.047C161.238 215.144 165.258 213.519 167.078 212.641C167.977 212.215 168.223 211.949 168.223 211.391C168.223 210.461 167.324 207.16 165.121 200.074C163.219 193.953 158.926 178.644 158.328 175.797C158.113 174.891 158.031 174.09 158.113 174.012C158.164 173.934 158.574 174.039 159.008 174.25C159.496 174.516 160.066 175.234 160.586 176.301ZM95.1172 175.82C103.812 176.781 110.309 179.281 115.797 183.73C116.965 184.687 117.047 184.848 117.348 186.684C117.512 187.75 117.973 190.305 118.324 192.355C120.609 204.867 120.527 204.547 123.543 218.844C125.391 227.605 125.691 229.203 125.473 229.387C125.391 229.469 124.141 229.043 122.645 228.43C116.613 225.898 115.281 225.449 112.074 224.676C104.059 222.812 93.4336 222.598 85.6875 224.172C84.082 224.516 83.7031 224.383 83.7031 223.582C83.7031 222.894 82.832 218.687 81.6367 213.519C81.1211 211.258 80.4414 208.301 80.1445 207C79.5703 204.441 79.1094 202.5 78.4023 199.57C76.8008 192.836 74.1914 179.844 74.1094 178.137L74.0547 176.676L75.3047 176.461C81.2305 175.449 89.4101 175.211 95.1172 175.82ZM164.145 178.91C164.77 179.23 165.531 181.227 166.617 185.246C167.867 189.957 169.008 194.219 169.715 196.883C170.777 200.82 176.293 220.844 177.352 224.648C177.895 226.594 178.305 228.215 178.25 228.297C178.141 228.375 170.312 228.855 155.586 229.629C151.398 229.84 144.984 230.32 141.344 230.691C137.676 231.066 134.496 231.359 134.25 231.359C133.953 231.359 133.543 231.945 133.027 233.09C132.402 234.555 132.078 234.953 131.043 235.539C128.543 236.977 124.305 236.363 122.512 234.316L121.613 233.301L119.305 233.621C114.547 234.316 94.3555 236.152 91.9922 236.125C90.4961 236.098 90.4414 236.07 91.3125 235.859C91.8281 235.754 94.2187 235.457 96.6133 235.219C99.0039 235.004 101.258 234.766 101.641 234.687C103.621 234.316 117.539 232.687 118.707 232.687C119.469 232.687 120.254 232.609 120.5 232.531C121.152 232.289 121.016 231.492 120.254 231.144C119.223 230.691 112.102 229.812 106.395 229.441C96.1758 228.777 87.4805 230.32 81.3945 233.836C80.4961 234.34 79.7344 234.738 79.6797 234.715C79.543 234.555 77.9414 228.109 76.8008 222.973C75.0898 215.465 73.7305 208.461 71.7461 197.148C71.0937 193.367 69.625 185.406 69.4336 184.582C69.3281 184.102 69.5156 183.941 70.9844 183.465C71.9101 183.144 72.8594 182.902 73.0781 182.902C73.4297 182.902 73.7851 184.262 74.8164 189.508C75.5508 193.129 76.3906 197.094 76.664 198.344C76.9648 199.598 78.0508 204.441 79.1094 209.129C80.9297 217.273 81.2031 218.527 82.2344 223.559L82.6992 225.769H83.6758C84.2187 225.769 86.8555 225.477 89.5469 225.102C95.2539 224.332 99.1914 224.277 104.355 224.863C110.527 225.555 115.715 226.914 120.582 229.094C122.672 230.055 123.109 230.562 123.109 231.945C123.109 232.957 124.305 234.316 125.637 234.793C127.402 235.457 129.793 234.953 131.125 233.648C131.914 232.875 132.078 231.121 131.398 230.562C131.18 230.371 130.988 230.133 130.988 230.027C130.988 229.812 137.078 227.684 140.094 226.832C145.258 225.394 155.504 224.383 165.367 224.332C172.055 224.332 174.199 224.57 174.199 225.367C174.199 226.406 169.934 226.832 156.453 227.098C148.41 227.258 144.145 227.473 142.133 227.766C137.566 228.457 133.707 229.602 133.707 230.293C133.707 230.879 135.121 230.828 137.676 230.187C143.734 228.644 148.762 228.164 159.523 228.164C170.312 228.164 174.66 227.684 175.34 226.488C175.777 225.633 175.449 223.613 173.953 218.312C173.223 215.598 171.59 209.555 170.395 204.867C167.922 195.309 166.102 188.68 164.336 182.691C163.656 180.48 163.246 178.644 163.383 178.644C163.52 178.644 163.871 178.75 164.145 178.91ZM69.0273 190.812C69.3281 192.09 69.789 194.539 70.1133 196.215C70.414 197.894 70.8476 200.234 71.0664 201.406C71.2851 202.578 71.9101 205.934 72.4258 208.863C74.1367 218.34 77.6445 234.156 78.3476 235.594L78.6758 236.258L83.8398 236.203C89.3828 236.125 90.0078 236.391 85.4687 236.922C80.2226 237.508 77.3437 237.59 76.9922 237.191C76.6914 236.816 75.9297 233.301 74.7344 226.699C73.7578 221.269 72.5351 215.41 72.125 214.027C71.7187 212.695 71.6914 212.695 70.7109 212.777L69.7344 212.855L69.4101 210.859C69.2187 209.766 68.8086 207.426 68.4844 205.668C67.3437 199.332 66.582 194.59 66.582 193.98C66.582 193.527 66.8789 193.18 67.5586 192.781L68.5664 192.195L68.375 190.144C68.2656 189.027 68.2656 188.176 68.3476 188.281C68.457 188.363 68.7578 189.508 69.0273 190.812ZM110.418 231.121C111.855 231.305 113 231.492 112.918 231.57C112.863 231.652 110.145 232.051 106.883 232.449C103.621 232.875 98.8125 233.516 96.2031 233.887C90.957 234.633 82.0976 235.086 82.9687 234.555C83.6758 234.102 87.5898 232.824 90.0898 232.184C92.2344 231.652 96.5586 230.934 98.9219 230.719C100.934 230.531 107.562 230.773 110.418 231.121Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M204.906 192.781C193.059 193.34 186.402 193.898 178.738 194.91C174.227 195.523 173.93 195.578 173.93 196.109C173.93 196.773 174.715 196.828 178.086 196.375C185.777 195.363 195.289 194.645 207.434 194.191C212.52 194.004 213.523 193.766 212.816 192.914C212.41 192.434 212.164 192.434 204.906 192.781Z",
                            fill: "black",
                          }),
                          (0, r.jsx)("path", {
                            d: "M62.2071 201.914C62.043 202.074 50.3829 203.086 44.9766 203.406C35.0313 203.988 24.5118 205.082 23.3712 205.641C22.9922 205.801 22.6641 206.172 22.6094 206.441C22.4727 207.023 21.9297 207.051 31.5235 205.961C34.7305 205.613 41.5782 205.055 46.7422 204.734C61.2266 203.856 65.793 203.191 65.1133 202.098C64.9258 201.832 62.4493 201.672 62.2071 201.914Z",
                            fill: "black",
                          }),
                        ],
                      }),
                      (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                          id: "clip0_215_83",
                          children: (0, r.jsx)("rect", {
                            width: "356",
                            height: "347",
                            fill: "white",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: ea().right,
                  children: [
                    (0, r.jsx)("h2", { children: "Upgrade to unlimited" }),
                    (0, r.jsx)("h3", {
                      children: "Create without limits with an unlimited plan.",
                    }),
                    (0, r.jsxs)("div", {
                      className: ea().points,
                      children: [
                        (0, r.jsxs)("p", {
                          children: [t, " Unlimited paraphrases"],
                        }),
                        (0, r.jsxs)("p", {
                          children: [t, " Bypass ALL detectors"],
                        }),
                        (0, r.jsxs)("p", {
                          children: [t, " Unlimited word count"],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: ea().planSelection,
                      children: [
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(ea().plan, " ")
                            .concat(0 == n && ea().selected),
                          onClick: () => {
                            s(0);
                          },
                          children: [
                            (0, r.jsxs)("h4", {
                              children: [
                                "Annual ",
                                (0, r.jsx)("div", {
                                  className: ea().banner,
                                  children: "Save 60%",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              children: [
                                (0, r.jsx)("span", { children: "$12" }),
                                "/mo",
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(ea().plan, " ")
                            .concat(1 == n && ea().selected),
                          onClick: () => {
                            s(1);
                          },
                          children: [
                            (0, r.jsx)("h4", { children: "Monthly" }),
                            (0, r.jsxs)("p", {
                              children: [
                                (0, r.jsx)("span", { children: "$30" }),
                                "/mo",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    ((e) => {
                      let t = (0, el.hh)("ul")[0];
                      return (0, r.jsxs)("form", {
                        action: "/api/stripe/create-checkout-session",
                        method: "POST",
                        children: [
                          (0, r.jsx)("input", {
                            type: "hidden",
                            name: "lookup_key",
                            value: 1 == e ? t.label : t.labelY,
                          }),
                          (0, r.jsx)("input", {
                            type: "hidden",
                            name: "email",
                            value: a,
                          }),
                          (0, r.jsx)("button", {
                            className: ea().button,
                            id: "checkout-and-portal-button",
                            type: "submit",
                            onClick: () => h.n.track("/upgrade button clicked"),
                            children: "Upgrade Now",
                          }),
                          c &&
                            (0, r.jsx)("input", {
                              type: "hidden",
                              name: "referral",
                              value: c,
                            }),
                        ],
                      });
                    })(n),
                    (0, r.jsxs)("div", {
                      className: ea().review,
                      children: [
                        (0, r.jsx)(M(), {
                          width: 50,
                          height: 19,
                          src: "/reviewers.png",
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            "Join ",
                            (0, r.jsx)("span", { children: "32,141 students" }),
                            " improving their writing with Humanize AI",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      let ed = (0, w.k)();
      var Editor_LimitNotificationModal = (e) => {
        let { general: t } = e,
          n = ed();
        (0, i.useRouter)();
        let s = ec(),
          { isLogged: a } = (0, N.DH)(),
          [l, c] = (0, o.useState)(null);
        (0, o.useEffect)(() => {
          if (
            (console.log("LimitNotificationModal mounted", a),
            localStorage.getItem("lastUsageTime"))
          ) {
            let e;
            let t = localStorage.getItem("lastUsageTime"),
              n = new Date(t);
            (n = new Date(n.getTime() - 6e4 * n.getTimezoneOffset())).setHours(
              n.getHours() + 12
            );
            let r = new Date(),
              o = n - r,
              updateTimeLeft = () => {
                if (o <= 0) {
                  clearInterval(e);
                  return;
                }
                (r = new Date()), (o = n - r);
                let t = Math.floor((o / 1e3 / 60 / 60) % 24),
                  i = Math.floor((o / 1e3 / 60) % 60),
                  s = Math.floor((o / 1e3) % 60);
                t > 0
                  ? c("".concat(t, "h ").concat(i, "m ").concat(s, "s"))
                  : i > 0
                  ? c("".concat(i, "m ").concat(s, "s"))
                  : c("".concat(s, "s"));
              };
            return (
              updateTimeLeft(),
              (e = setInterval(() => {
                updateTimeLeft();
              }, 1e3)),
              () => {
                clearInterval(e);
              }
            );
          }
        }, [n]);
        let [d, u] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            "true" == localStorage.getItem("test_ul") && u(!0);
          }, []),
          (0, r.jsx)(Modal2, {
            modal: n,
            onClose: () => {
              h.n.track("/limit_notification_modal closed");
            },
            children: (0, r.jsxs)("div", {
              className: eo().container,
              children: [
                (0, r.jsxs)("div", {
                  className: eo().wrapper,
                  children: [
                    (0, r.jsxs)("h2", {
                      children: [
                        (0, r.jsx)("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 37 37",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, r.jsx)("path", {
                            d: "M18.5 27.4583C19.0077 27.4583 19.4332 27.2865 19.7766 26.9431C20.12 26.5997 20.2917 26.1742 20.2917 25.6666C20.2917 25.1589 20.12 24.7334 19.7766 24.39C19.4332 24.0466 19.0077 23.8749 18.5 23.8749C17.9924 23.8749 17.5669 24.0466 17.2235 24.39C16.8801 24.7334 16.7084 25.1589 16.7084 25.6666C16.7084 26.1742 16.8801 26.5997 17.2235 26.9431C17.5669 27.2865 17.9924 27.4583 18.5 27.4583ZM16.7084 20.2916H20.2917V9.54158H16.7084V20.2916ZM18.5 36.4166C16.0216 36.4166 13.6924 35.9463 11.5125 35.0056C9.33268 34.065 7.4365 32.7885 5.824 31.176C4.2115 29.5635 2.93494 27.6673 1.99431 25.4874C1.05369 23.3076 0.583374 20.9784 0.583374 18.4999C0.583374 16.0214 1.05369 13.6923 1.99431 11.5124C2.93494 9.33256 4.2115 7.43638 5.824 5.82388C7.4365 4.21138 9.33268 2.93481 11.5125 1.99419C13.6924 1.05356 16.0216 0.583252 18.5 0.583252C20.9785 0.583252 23.3077 1.05356 25.4875 1.99419C27.6674 2.93481 29.5636 4.21138 31.1761 5.82388C32.7886 7.43638 34.0651 9.33256 35.0058 11.5124C35.9464 13.6923 36.4167 16.0214 36.4167 18.4999C36.4167 20.9784 35.9464 23.3076 35.0058 25.4874C34.0651 27.6673 32.7886 29.5635 31.1761 31.176C29.5636 32.7885 27.6674 34.065 25.4875 35.0056C23.3077 35.9463 20.9785 36.4166 18.5 36.4166Z",
                            fill: "#4E0C0C",
                          }),
                        }),
                        "Word limit for all non-free modes exceeded. You will receive 200 more words in \xa0",
                        (0, r.jsx)("strong", { children: l }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: eo().a_spacer,
                      children: " ",
                    }),
                    d
                      ? (0, r.jsx)("a", {
                          href: "#",
                          onClick: () => {
                            s.handleOpen();
                          },
                          children:
                            "Upgrade now to humanize more words immediately",
                        })
                      : (0, r.jsx)("a", {
                          href: "/upgrade",
                          onClick: () => {
                            h.n.track("/index limit-notification click");
                          },
                          children:
                            "Upgrade now to humanize more words immediately",
                        }),
                  ],
                }),
                (0, r.jsx)(Modal2_CloseCross, {
                  modal: n,
                  className: eo().close,
                  white: !1,
                }),
              ],
            }),
          })
        );
      };
      let eu = {
          standard1: {
            name: "Standard",
            description:
              "Standard mode preserves the original text style and tone as much as possible.",
          },
          academic1: {
            name: "Academic",
            description: "Expresses the text in an academic and technical way.",
          },
          simple1: {
            name: "Simple",
            description:
              "Simple mode is designed to simplify text and make it easier to understand.",
          },
          fluent1: {
            name: "Flowing",
            description:
              "Flowing mode is suitable to improve the flow and readability.",
          },
          informal1: {
            name: "Informal",
            description:
              "Informal mode makes/keeps the text informal. Beta feature.",
          },
          formal1: {
            name: "Formal",
            description: "Formal mode makes/keeps the text formal.",
          },
          expand1: {
            name: "Expand",
            description:
              "Makes the text longer by adding 'water' to it. Beta feature.",
          },
          shorten1: {
            name: "Shorten",
            description:
              "Makes the text shorter by making it more concise. Beta feature.",
          },
          custom1: {
            name: "Custom",
            description: "Any custom instruction. Coming soon...",
          },
          free1: {
            name: "Free",
            description:
              "Free mode allows you to use the service without any credits, but is worse in quality / bypass / speed. This mode is not frequently updated.",
          },
        },
        eh = [
          "standard1",
          "academic1",
          "simple1",
          "fluent1",
          "formal1",
          "informal1",
          "expand1",
          "shorten1",
        ],
        ep = eh.map((e) => eu[e]),
        eC = [
          "free1",
          "standard1",
          "academic1",
          "simple1",
          "formal1",
          "informal1",
          "expand1",
          "shorten1",
        ],
        em = eC.map((e) => eu[e]);
      var Editor_ParaphraseButton = (e) => {
        let { className: t } = e;
        (0, o.useRef)(null);
        let [n, i] = (0, o.useState)(!1),
          [s, a] = (0, o.useState)(!1),
          [l, c] = (0, o.useState)(!1),
          { showDifferent: d, setShowDifferent: p } = (0, N.Qe)(),
          { showButton: C, setShowButton: m } = (0, N.wc)(),
          { windowWidth: _, setWindowWidth: x } = (0, N.Os)(),
          { setShowOutput: g } = (0, N.C5)(),
          { text: f } = (0, N.Ng)(),
          { addAlertToStore: j } = (0, U.Z7)(),
          { setExpectedTime: w } = (0, N.dV)(),
          { showLoader: b, setShowLoader: v } = (0, N.OC)(),
          [y, k] = (0, o.useState)(0),
          { keywords: S } = (0, N.Nf)(),
          { showSubscription: E, setShowSubscription: A } = (0, N.dw)(),
          { setOutputText: I } = (0, N.Zq)(),
          { setOutputs: M } = (0, N.Yt)(),
          { showCompare: T, setShowCompare: L } = (0, N._B)(),
          { textToCompare: O, setTextToCompare: z } = (0, N.kE)(),
          { isLogged: R, setIsLogged: q } = (0, N.DH)(),
          { hasCredits: P, setHasCredits: W } = (0, N.pE)(),
          { model: V, setModel: D } = (0, N.tT)(),
          { isUltra: F, setUltra: G } = (0, N.Y5)(),
          [Y, J] = (0, o.useState)(null),
          et = Q(),
          en = K(),
          er = ed();
        (0, ee.useRouter)();
        let {
            outputTexts: eo,
            outputIndex: ei,
            appendOutputText: es,
            setOutputIndex: ea,
            clearOutputIndex: el,
            clearOutputTexts: eu,
            setUpperBounder: ep,
            setShowSwitchVersions: em,
          } = (0, N.cy)(),
          [e_, ex] = (0, o.useState)({ free: 0, paid: 0 });
        (0, o.useEffect)(() => {
          var e;
          I(null !== (e = eo[ei]) && void 0 !== e ? e : "");
        }, [eo, ei]),
          ec(),
          (0, o.useEffect)(() => {
            if (
              ((0, X.R)()
                .then((e) => {
                  (0, $.b)(e.token)
                    .then((e) => {
                      c(e.is_free_reparaphrase),
                        ex({
                          free: e.free_words_left,
                          paid: e.words_max - e.words_used,
                        });
                    })
                    .catch((e) => {
                      console.error("error", e);
                    });
                })
                .catch((e) => {
                  console.error("error with token", e);
                }),
              sessionStorage.getItem("sessionId"))
            )
              J(sessionStorage.getItem("sessionId"));
            else {
              let e =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
              sessionStorage.setItem("sessionId", e), J(e);
            }
          }, []);
        let eg = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          if (n) {
            let e = document.createElement("script");
            return (
              (e.src =
                "https://www.google.com/recaptcha/enterprise.js?render=".concat(
                  "6Ldk4O4pAAAAALWK4QNSL5zK5998bGdV5PCNbYLZ"
                )),
              (eg.current = e),
              document.body.appendChild(e),
              () => {
                document.body.removeChild(eg.current);
              }
            );
          }
        }, [n]);
        let addAlert = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "error";
            j({ alert: e, type: t });
          },
          fetchUserInfo = async (e) => {
            try {
              let t = await fetch("/api/user/getuserinfo", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(e),
                },
              });
              if (200 === t.status) return await t.json();
              return null;
            } catch (e) {
              return console.error("Error fetching user info:", e), null;
            }
          },
          handleUserInfo = (e) => {
            e && W(e.words_max > 0 || e.free_words_left > 0);
          },
          getUserInfoAfterParaphrase = async () => {
            let e = (0, u.vQ)("token");
            if (null == e ? void 0 : e.length) {
              let t = await fetchUserInfo(e);
              handleUserInfo(t);
            }
          },
          [ef, ej] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          "true" == localStorage.getItem("test_miniTrial") && ej(!0);
        }, []);
        let handleHideClick = async (e) => {
          if (b) return;
          if (
            (0 != V || F) &&
            !R &&
            (localStorage.getItem("used_n_times") > 3 || !ef)
          ) {
            en.handleOpen();
            return;
          }
          if (
            (O !== f &&
              (console.log("textToCompare"), z(f), el(), eu(), ep(-1), em(!1)),
            h.n.track("/index hide clicked"),
            I(""),
            em(!1),
            p(!1),
            0 === f.length)
          ) {
            addAlert("Please enter some text.");
            return;
          }
          if ((!(0, u.vQ)("token") || 0 === (0, u.vQ)("token").length) && R) {
            addAlert("Please login / signup to use Humanize AI.");
            return;
          }
          if ((0, Z.H)(f) > (0, B.tq)()) {
            addAlert("Please enter at most ".concat((0, B.tq)(), " words.")),
              h.n.track("Max tokens alert"),
              m(!0);
            return;
          }
          if ((0, Z.H)(f) < (0, B.Ev)()) {
            addAlert("Please enter at least ".concat((0, B.Ev)(), " words.")),
              h.n.track("Min tokens alert"),
              m(!0);
            return;
          }
          g(!0), M([]), v(!0), w(25 + Math.round((Math.random() - 0.5) * 10));
          let t = e_.free > 0 || e_.paid > (0, Z.H)(f);
          console.log("isEnoughCredits", t, e_, F, V, R, P);
          let n = fetch(
            !(
              (0 == V && !F && (!R || !P || !t)) ||
              (3 >= localStorage.getItem("used_n_times") && ef)
            )
              ? "/api/process"
              : "/api/process_free",
            {
              cache: "no-cache",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat((0, u.vQ)("token")),
                "keep-alive": "true",
              },
              body: JSON.stringify({
                cacheMode: "start",
                test_limitNot: localStorage.getItem("test_limitNot"),
                text: f,
                trialNumber: y,
                alg: 0,
                sessionId: sessionStorage.getItem("sessionId"),
                keywords: e,
                model: R && P ? eh[V] : eC[V],
                isLogged: R,
                ultra: F,
              }),
            }
          );
          if (
            (((R && P ? eh[V] : eC[V]) != "free1" || F) &&
              localStorage.setItem(
                "used_n_times",
                parseInt(localStorage.getItem("used_n_times") || 0) + 1
              ),
            trackEvent("/index paraphrase started"),
            getUserInfoAfterParaphrase(),
            a(!1),
            console.log((n = await n).status),
            403 === n.status)
          ) {
            let e = await n.json();
            if ("robot" === e.error) {
              i(!0),
                a(!0),
                v(!1),
                m(!0),
                addAlert("Please verify that you are not a robot.");
              return;
            }
          }
          if (200 !== n.status && 401 !== n.status) {
            addAlert("Something went wrong. Please try again."),
              h.n.track("Error"),
              v(!1);
            return;
          }
          let r = await n.json();
          if ("Too much words" === r.error) {
            v(!1),
              addAlert(
                "Please enter at most ".concat(
                  (0, B.tq)(),
                  ' words or <a href="/subscribe">subscribe</a> to Pro'
                )
              ),
              h.n.track("Max tokens alert");
            return;
          }
          if ("Too less words" === r.error) {
            v(!1),
              addAlert("Please enter at least ".concat((0, B.Ev)(), " words.")),
              h.n.track("Min tokens alert");
            return;
          }
          if ("unauthorized" === r.error) {
            addAlert(
              'Please <a href="/login">login</a> / <a href="/signup/start">signup</a> to use Humanize AI.',
              "reminder"
            ),
              v(!1),
              h.n.track("Not signed up alert");
            return;
          }
          if ("unauthorized, no subscription" === r.error) {
            addAlert(
              'You are not subscribed. Please <a href="/subscribe">Subscribe</a>.',
              "reminder"
            ),
              v(!1),
              h.n.track("No subscription alert");
            return;
          }
          if ("unauthorized, too much used this month" === r.error) {
            v(!1),
              addAlert(
                'No words left. <a href="/account" target="_blank">Upgrade your plan</a> to get more.'
              ),
              h.n.track("Too many requests alert");
            return;
          }
          if ("unauthorized, subscription paused" === r.error) {
            v(!1),
              addAlert(
                'Please unpause your subscription at <a href="/account">account</a>'
              ),
              h.n.track("Too many requests alert");
            return;
          }
          if ("unauthorized, too much used this month 2" === r.error) {
            if (
              (v(!1),
              h.n.track("/index subscribe offer opened"),
              "true" == localStorage.getItem("test_limitNot"))
            ) {
              r.lastUsageTime &&
                localStorage.setItem("lastUsageTime", r.lastUsageTime),
                er.handleOpen();
              return;
            }
            r.free_words_left > (0, B.Ev)() && m(!0),
              A(!0),
              et.handleOpen(),
              h.n.track("Too many requests alert");
            return;
          }
          "error" === r.error &&
            (k(y + 1),
            v(!1),
            (0, Z.H)(f) > 400
              ? addAlert(
                  "An error occurred. Please try again, and enter text in smaller chunks."
                )
              : addAlert(
                  'An error occurred. Please try again. If the problem persists, please <a href="mailto:support@humanizeai.pro">contact us.</a>'
                ),
            h.n.track("Error alert"));
          let o = r.completionId,
            s = setInterval(async () => {
              let n = await fetch(
                  !(
                    (0 == V && !F && (!R || !P || !t)) ||
                    (4 >= localStorage.getItem("used_n_times") && ef)
                  )
                    ? "/api/process"
                    : "/api/process_free",
                  {
                    cache: "no-cache",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer ".concat((0, u.vQ)("token")),
                    },
                    body: JSON.stringify({
                      cacheMode: "get",
                      completionId: o,
                      token: (0, u.vQ)("token"),
                      sessionId: sessionStorage.getItem("sessionId"),
                      keywords: e,
                    }),
                  }
                ),
                r = await n.json();
              if (
                "error" === r.error ||
                "wrong token" === r.error ||
                "failed" === r.error ||
                (null != r.result && r.result.error)
              ) {
                clearInterval(s),
                  v(!1),
                  addAlert(
                    r.message
                      ? r.message
                      : "Something went wrong. Please try again."
                  ),
                  h.n.track("Error");
                return;
              }
              if (null != r.result) {
                let e = r.result;
                v(!1), g(!0), M(e);
                let t = e[e.length - 1].text;
                es(t),
                  ea(),
                  em(!0),
                  h.n.track("Text processed"),
                  trackEvent("/index paraphrase finished"),
                  clearInterval(s),
                  p(!0);
              }
            }, 2e3);
          setTimeout(() => {
            clearInterval(s);
          }, 3e5);
        };
        return (
          (0, o.useEffect)(() => {
            let handleResize = () => {
              x(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            let e = document.addEventListener("click", (e) => {
              i(!0);
            });
            return () => {
              window.removeEventListener("resize", handleResize),
                window.removeEventListener("click", e);
            };
          }, []),
          (0, o.useEffect)(() => {
            _ < 1305 && m(!0);
          }, [_]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: "".concat(H().wrapper, " ").concat(t),
                children: [
                  (0, r.jsx)("div", {
                    className: H().paraphraseContainer,
                    children: (0, r.jsx)("button", {
                      onClick: () => handleHideClick(S),
                      className: ""
                        .concat(C ? "" : H().hide, "  ")
                        .concat(H().button),
                      "data-track": "paraphrase_button",
                      children: "Humanize AI",
                    }),
                  }),
                  (0, r.jsx)(Editor_SubscribeModal, {}),
                  (0, r.jsx)(Editor_SignUpModal, {}),
                  (0, r.jsx)(Editor_UpgradeModal, {}),
                ],
              }),
              (0, r.jsx)(Editor_LimitNotificationModal, {}),
            ],
          })
        );
      };
      n(80055), n(24175);
      var Editor_InputContainer = () => {
          let { text: e, setText: t } = (0, N.Ng)(),
            { height: n, setTextHeight: i } = (0, N.lF)(),
            { numberOfCharacters: s, setNumberOfCharacters: a } = (0, N.oo)(),
            l = (0, o.useRef)(null),
            { clearShowMinTokensAlert: c } = (0, U.cX)(),
            { clearShowErrors: d } = (0, U.dV)(),
            { setShowMaxTokensAlert: u } = (0, U.nJ)(),
            { clearRedCounter: h } = (0, U.mt)(),
            { setShowButton: p } = (0, N.wc)(),
            { isLogged: C, setIsLogged: m } = (0, N.DH)();
          return (
            (0, o.useEffect)(() => {
              (l.current.value = e), a((0, Z.H)(e));
            }, [e, l]),
            (0, r.jsxs)("div", {
              className: A().userInputWrapper,
              children: [
                (0, r.jsxs)("div", {
                  className: A().InputWrapper,
                  children: [
                    (0, r.jsx)("textarea", {
                      className: A().inputContainer,
                      placeholder: "Insert (English) text here",
                      onChange: () => {
                        let e = l.current.value,
                          n = (0, Z.H)(e);
                        a(n),
                          c(!1),
                          d(),
                          t(e),
                          p(n >= 0),
                          u(n > (0, B.tq)()),
                          n < (0, B.tq)() && h();
                      },
                      ref: l,
                      "data-track": "input_textarea",
                    }),
                    (0, r.jsxs)("div", {
                      className: A().textCount,
                      children: [s, " words"],
                    }),
                    s > 0 && (0, r.jsx)(InputContainer_ClearButton, {}),
                  ],
                }),
                (0, r.jsx)(Editor_ParaphraseButton, {
                  className: A().paraphraseButton,
                }),
              ],
            })
          );
        },
        e_ = n(52725),
        ex = n.n(e_),
        eg = n(9709),
        ef = n(96147),
        ej = n.n(ef),
        ew = n(37281),
        eb = n.n(ew),
        SwitchVersions_LeftArrow = (e) => {
          let { onClick: t } = e;
          return (0, r.jsx)("svg", {
            onClick: t,
            className: eb().arrow,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, r.jsx)("path", {
              d: "M14 8L10 12L14 16",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        SwitchVersions_RightArrow = (e) => {
          let { onClick: t } = e;
          return (0, r.jsx)("svg", {
            onClick: t,
            className: eb().arrow,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, r.jsx)("path", {
              d: "M10 16L14 12L10 8",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Editor_SwitchVersions = (e) => {
          let { className: t } = e,
            {
              outputIndex: n,
              upperBounder: i,
              changeOutputIndex: s,
              showSwitchVersions: a,
            } = (0, N.cy)();
          function handleKeyDown(e) {
            if (37 === e.keyCode) {
              try {
                s(-1);
              } catch (e) {
                console.error(e);
              }
              e.preventDefault();
            } else if (39 === e.keyCode) {
              try {
                s(1);
              } catch (e) {
                console.error(e);
              }
              e.preventDefault();
            }
          }
          return (
            (0, o.useEffect)(
              () => (
                window.addEventListener("keydown", handleKeyDown),
                () => {
                  window.removeEventListener("keydown", handleKeyDown);
                }
              ),
              []
            ),
            (0, r.jsxs)("div", {
              style: { display: i > 0 && a ? "flex" : "none" },
              className: "".concat(ej().switchVersions, " ").concat(t),
              children: [
                (0, r.jsx)(SwitchVersions_LeftArrow, { onClick: () => s(-1) }),
                (0, r.jsxs)("div", {
                  className: ej().versions,
                  children: [
                    (0, r.jsx)("span", { children: n + 1 }),
                    " / ",
                    i + 1,
                  ],
                }),
                (0, r.jsx)(SwitchVersions_RightArrow, { onClick: () => s(1) }),
              ],
            })
          );
        },
        ev = {
          src: "/_next/static/media/likeDislike.e10cc698.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        ey = n(97109),
        ek = n.n(ey),
        eS = n(2573),
        eE = n.n(eS),
        eA = n(64529);
      let eI = (0, eA.Ue)((e) => ({ rate: 0, setRate: (t) => e({ rate: t }) }));
      var eM = {
          src: "/_next/static/media/Star.12109348.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        eT = {
          src: "/_next/static/media/YellowStart.bf21ba50.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        eN = n(98634),
        eL = n.n(eN),
        ReviewModal_RateComponent = (e) => {
          let { className: t } = e,
            { rate: n, setRate: i } = eI();
          return (
            (0, o.useEffect)(
              () => () => {
                i(0);
              },
              []
            ),
            (0, r.jsx)("div", {
              className: "".concat(eL().RateComponent, " ").concat(t),
              children: [1, 2, 3, 4, 5].map((e) =>
                (0, r.jsx)(
                  M(),
                  {
                    src: e <= n ? eT : eM,
                    alt: e >= n ? "YellowStart" : "Star",
                    onClick: () => i(e),
                  },
                  e
                )
              ),
            })
          );
        },
        eO = n(69182);
      let eU = (0, eA.Ue)((e) => ({
        showSuccess: !1,
        setShowSuccess: (t) => {
          e({ showSuccess: t });
        },
      }));
      var ReviewSection_ReviewModal = () => {
          let { rate: e, setRate: t } = eI(),
            [n, i] = (0, o.useState)(""),
            { close: s } = (0, w.d)(),
            { text: a } = (0, N.Ng)(),
            { outputText: l } = (0, N.Zq)(),
            { showSuccess: c, setShowSuccess: d } = eU();
          return (0, r.jsxs)(m.Z, {
            onCloseD: () => {
              d(!1);
            },
            children: [
              c
                ? (0, r.jsxs)("div", {
                    className: ""
                      .concat(eE().container, " ")
                      .concat(eE().success),
                    children: [
                      (0, r.jsx)(M(), { src: eO.Z, alt: "success" }),
                      (0, r.jsx)("h3", { children: "Amazing!" }),
                      (0, r.jsx)("p", {
                        children: "Thank you for your feedback",
                      }),
                      (0, r.jsx)("button", {
                        className: ""
                          .concat(eE().button, " ")
                          .concat(eE().send),
                        onClick: () => {
                          s(), d(!1);
                        },
                        children: "Close",
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className: eE().container,
                    children: [
                      (0, r.jsx)("h2", {
                        children: "Are you satisfied with paraphrased text?",
                      }),
                      (0, r.jsx)(ReviewModal_RateComponent, {
                        className: eE().rate,
                      }),
                      (0, r.jsx)("div", {
                        style:
                          e > 0 ? { display: "flex" } : { display: "none" },
                        children: (0, r.jsx)("textarea", {
                          className: eE().review,
                          onChange: (e) => {
                            i(e.target.value);
                          },
                          value: n,
                          placeholder: "Type your feedback here",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: eE().buttonContainer,
                        children: (0, r.jsx)("button", {
                          className: ""
                            .concat(eE().button, " ")
                            .concat(eE().send),
                          onClick: () => {
                            h.n.track("Review submitted"),
                              fetch("/api/feedback", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  input: a,
                                  output: l,
                                  thumb: e,
                                  feedback: n,
                                  time: new Date(),
                                  token: (0, u.vQ)("token"),
                                }),
                              }).then(() => {
                                d(!0);
                              });
                          },
                          children: "Send Review",
                        }),
                      }),
                    ],
                  }),
              (0, r.jsx)(P.Z, {
                onClick: () => {
                  d(!1);
                },
                white: !0,
                className: eE().closeModal,
              }),
            ],
          });
        },
        eZ = n(17906),
        eB = n(87477),
        Editor_ReviewSection = (e) => {
          let { className: t } = e,
            [n, i] = (0, o.useState)(!1),
            { outputText: s } = (0, N.Zq)(),
            a = (0, w.d)();
          return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                className: " ".concat(ek().review, "  ").concat(t),
                children: [
                  (0, r.jsx)(M(), {
                    style: {
                      cursor: "pointer",
                      marginTop: "5px",
                      marginRight: "7px",
                    },
                    src: ev,
                    alt: "like",
                    onClick: () => {
                      a.handleOpen();
                    },
                  }),
                  0 !== s.length &&
                    (0, r.jsx)(M(), {
                      style: { cursor: "pointer" },
                      title: "Copy to clipboard",
                      onClick: () => {
                        h.n.track("Copy clicked"),
                          navigator.clipboard.writeText(s).then(() => {
                            i(!0),
                              setTimeout(() => {
                                i(!1);
                              }, 1e3);
                          });
                      },
                      src: n ? eZ.Z : eB.Z,
                      alt: "copy",
                    }),
                  (0, r.jsx)(ReviewSection_ReviewModal, {}),
                ],
              });
        },
        ez = n(92243),
        eH = n(49351);
      n(36968);
      var Editor_OutputContainer = () => {
          let { numberOfOutputCharacters: e, setNumberOfOutputCharacters: t } =
              (0, N.tS)(),
            { height: n, setTextHeight: i } = (0, N.lF)(),
            { outputText: s } = (0, N.Zq)(),
            { text: a } = (0, N.Ng)(),
            { windowWidth: l } = (0, N.Os)(),
            { showOutput: c, setShowOutput: d } = (0, N.C5)(),
            { expectedTime: u } = (0, N.dV)(),
            { showLoader: h } = (0, N.OC)(),
            { showCompare: p, setShowCompare: C } = (0, N._B)(),
            { model: m } = (0, N.tT)(),
            { isLogged: _ } = (0, N.DH)(),
            { hasCredits: x } = (0, N.pE)(),
            { isUltra: g } = (0, N.Y5)(),
            [f, j] = (0, o.useState)(!1),
            [w, b] = (0, o.useState)(!1),
            v = K(),
            y = (0, o.useRef)(null);
          (0, o.useEffect)(() => {
            t((0, Z.H)(s));
          }, [s]),
            (0, o.useEffect)(() => {
              j(0 != m && !_ && localStorage.getItem("used_n_times") > 3),
                b(
                  (0 != m || g) &&
                    _ &&
                    !x &&
                    localStorage.getItem("used_n_times") > 3
                ),
                console.log(m, _, x, g);
            }, [m, _, x, g]),
            (0, o.useEffect)(() => {
              d(l > 1305 || s.length > 0);
            }, [l]);
          let [k, S] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            "true" == localStorage.getItem("test_limitNot") && S(!0);
          }, []);
          let [E, A] = (0, o.useState)(!0);
          return (0, r.jsxs)(ez.Z, {
            className: ""
              .concat(c ? "" : ex().hide, " ")
              .concat(ex().outputContainer),
            children: [
              0 === s.length &&
                !f &&
                (!w || k) &&
                (0, r.jsx)("div", {
                  className: ex().textBefore,
                  children: "Paraphrased text will appear here",
                }),
              h
                ? (0, r.jsxs)("div", {
                    className: ex().loaderContainer,
                    children: [
                      (0, r.jsx)(eg.Z, { className: ex().loader }),
                      (0, r.jsxs)("p", {
                        className: ex().expectedTime,
                        children: [
                          "Expected time: ",
                          _ ? Math.round(u / 2) : u,
                          " sec. ",
                          !_ &&
                            (0, r.jsxs)("div", {
                              onClick: () => {
                                v.handleOpen();
                              },
                              children: [
                                (0, r.jsx)("span", { children: "Sign Up" }),
                                " for faster processing time.",
                              ],
                            }),
                        ],
                      }),
                    ],
                  })
                : !k &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      !0 === f &&
                        (0, r.jsxs)("div", {
                          className: ex().signUpPrompt,
                          children: [
                            (0, r.jsx)("h2", { children: "Try this mode" }),
                            (0, r.jsx)("p", {
                              children:
                                "Sign up for free to use this mode and get access to all features",
                            }),
                            (0, r.jsx)(G(), {
                              href: "/signup/start",
                              children: "Sign Up",
                            }),
                          ],
                        }),
                      !0 === w &&
                        (0, r.jsxs)("div", {
                          className: ex().signUpPrompt,
                          children: [
                            (0, r.jsx)("h2", {
                              children: "Upgrade to use this mode",
                            }),
                            (0, r.jsx)("p", {
                              children:
                                "Upgrade to use this mode and get access to all features",
                            }),
                            (0, r.jsx)(G(), {
                              href: "/upgrade",
                              children: "Upgrade",
                            }),
                          ],
                        }),
                    ],
                  }),
              !f &&
                (!w || k) &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: ex().output,
                      ref: y,
                      children: E ? (0, eH.n)(a, s) : (0, eH.f)(s),
                    }),
                    (0, r.jsx)(Editor_ReviewSection, {
                      className: ex().reviewSection,
                    }),
                    (0, r.jsx)(Editor_SwitchVersions, {
                      className: "".concat(ex().switchVersions),
                    }),
                    s &&
                      s.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: ex().highLightDescription,
                        children: [
                          (0, r.jsx)("div", {
                            style: { background: "#fb8022" },
                          }),
                          " added change ",
                          (0, r.jsx)("div", {
                            style: { background: "#598eff" },
                          }),
                          " longest unedited part",
                          E
                            ? (0, r.jsx)("p", {
                                onClick: () => A(!1),
                                children: (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  height: "24px",
                                  viewBox: "0 -960 960 960",
                                  width: "24px",
                                  fill: "#777",
                                  children: (0, r.jsx)("path", {
                                    d: "M480.09-333.77q60.97 0 103.55-42.68 42.59-42.67 42.59-103.64t-42.68-103.55q-42.67-42.59-103.64-42.59t-103.55 42.68q-42.59 42.67-42.59 103.64t42.68 103.55q42.67 42.59 103.64 42.59Zm.01-51.85q-39.29 0-66.89-27.5-27.59-27.5-27.59-66.78 0-39.29 27.5-66.89 27.5-27.59 66.78-27.59 39.29 0 66.89 27.5 27.59 27.5 27.59 66.78 0 39.29-27.5 66.89-27.5 27.59-66.78 27.59Zm-.05 167.16q-131.65 0-239.58-71.66Q132.54-361.77 78.42-480q54.12-118.23 162-189.88 107.87-71.66 239.53-71.66 131.65 0 239.58 71.66Q827.46-598.23 881.58-480q-54.12 118.23-162 189.88-107.87 71.66-239.53 71.66ZM480-480Zm0 213.58q110.31 0 204.57-57.16Q778.83-380.74 828.96-480q-50.13-99.26-144.39-156.42-94.26-57.16-204.57-57.16-110.31 0-204.57 57.16Q181.17-579.26 131.04-480q50.13 99.26 144.39 156.42 94.26 57.16 204.57 57.16Z",
                                  }),
                                }),
                              })
                            : (0, r.jsx)("p", {
                                onClick: () => A(!0),
                                children: (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  height: "24px",
                                  viewBox: "0 -960 960 960",
                                  width: "24px",
                                  fill: "#777",
                                  children: (0, r.jsx)("path", {
                                    d: "m619.58-438.08-46.2-46.19q4.81-43.92-24.59-69.42-29.41-25.5-64.52-20.69l-46.19-46.1q9.54-3.17 20.67-4.46 11.13-1.29 21.19-1.29 61.58 0 103.94 42.35 42.35 42.36 42.35 103.94 0 10.06-1.29 21.73t-5.36 20.13Zm128.5 128.54-34.43-34.39q35-27.26 65.18-61.2 30.18-33.94 50.13-74.87-48.19-99.88-142.73-156.73-94.54-56.85-206.23-56.85-25.19 0-51.4 3.41-26.22 3.4-49.72 10.4L339-719.65q33.81-12.58 70.15-17.23 36.35-4.66 70.85-4.66 129.37 0 240.45 69.93 111.09 69.92 161.13 191.64-21.24 49.97-54.87 91.87-33.63 41.91-78.63 78.56Zm14.34 179.81L642.31-250.81q-32.66 14.58-74.27 23.46-41.61 8.89-88.04 8.89-129.67 0-240.32-69.93-110.64-69.92-161.26-191.53 23.16-56.27 62.24-103.1 39.07-46.83 87.42-82.02l-99.15-100 33.92-33.92 634.3 635.31-34.73 33.92ZM262.81-630.12q-37.69 26.43-74.46 65.16-36.77 38.73-57.31 84.96 48.19 99.88 142.73 156.73 94.54 56.85 206.23 56.85 34.62 0 69.06-5.71 34.44-5.72 57.48-14.26l-61.32-60.46q-13.14 6.16-31.41 9.62-18.27 3.46-33.86 3.46-61.41 0-103.8-42.34-42.38-42.33-42.38-103.89 0-15.1 4.46-32.83 4.46-17.72 8.62-31.67l-84.04-85.62Zm262.46 103.74Zm-69.5 83.03Z",
                                  }),
                                }),
                              }),
                        ],
                      }),
                    (0, r.jsx)("div", {
                      className: ex().textCount,
                      children: (0, r.jsxs)("div", {
                        className: ex().characterCount,
                        children: [e, " words"],
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        Hooks_useUnloadWarning = (e, t) => {
          (0, o.useEffect)(() => {
            let handleBeforeUnload = (n) => {
              if (t()) return n.preventDefault(), (n.returnValue = e), e;
            };
            return (
              window.addEventListener("beforeunload", handleBeforeUnload),
              () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
              }
            );
          }, [t, e]);
        },
        eR = n(5563),
        eq = n.n(eR),
        eP = n(11298),
        eQ = n.n(eP),
        SwitchComponent = (e) => {
          let { checked: t, onChange: n, lock: i, onLockClick: s } = e,
            [a, l] = (0, o.useState)(t);
          return (
            (0, o.useEffect)(() => {
              l(t);
            }, [t]),
            (0, r.jsx)("div", {
              className: eQ().switch,
              onClick: () => {
                if ((console.log(i), i && !a)) {
                  s && s();
                  return;
                }
                l(!a), n(!a);
              },
              children: (0, r.jsx)("div", {
                className: ""
                  .concat(eQ().slider, " ")
                  .concat(a ? eQ().on : eQ().off),
              }),
            })
          );
        };
      n(27361), n(18721);
      var Editor_ModeSelection = (e) => {
          var t, n;
          let { className: i } = e,
            { isLogged: s, setIsLogged: a } = (0, N.DH)(),
            { hasCredits: l, setHasCredits: c } = (0, N.pE)(),
            { model: d, setModel: h } = (0, N.tT)(),
            { isUltra: p, setUltra: C } = (0, N.Y5)(),
            [m, _] = (0, o.useState)(ep),
            [x, g] = (0, o.useState)([]),
            [f, j] = (0, o.useState)(null),
            [w, b] = (0, o.useState)(!1),
            [v, y] = (0, o.useState)(!1),
            [k, S] = (0, o.useState)(!0),
            [E, A] = (0, o.useState)({ top: 0, left: 0 }),
            [I, M] = (0, o.useState)(!1),
            T = (0, o.useRef)(!0),
            L = (0, o.useRef)(!1),
            [O, U] = (0, o.useState)(!1),
            [Z, B] = (0, o.useState)(!1),
            { showLoader: z } = (0, N.OC)(),
            H = (0, o.useRef)(null),
            R = (0, o.useRef)(null),
            handleSwitchChange = (e) => {
              U(e), console.log("SET ULTRA", e), C(e);
            },
            changeModel = (e) => {
              if (
                (console.log("Change triggered", e),
                0 != e &&
                  !s &&
                  (localStorage.getItem("used_n_times") > 3 || !J))
              ) {
                q.handleOpen();
                return;
              }
              "custom1" == eh[e] || z || h(e);
            },
            updateMenu = () => {
              let e = H.current,
                t = R.current;
              if (e && t) {
                if (e.scrollWidth > e.clientWidth && m.length > 0) {
                  let e = m.pop();
                  _((e) => [...m]), g((t) => [e, ...t]);
                  return;
                }
                if (t.scrollWidth - 380 > e.clientWidth && x.length > 0) {
                  let e = x.shift();
                  _((t) => [...t, e]), g([...x]);
                }
              }
            },
            handleMouseEnter = async (e, t) => {
              (L.current = !0), j(e);
              let n = t.target.getBoundingClientRect();
              A({
                top: n.bottom + window.scrollY,
                left: n.left + window.scrollX,
              }),
                console.log(T.current),
                T.current &&
                  (await new Promise((e) => setTimeout(e, 1e3)),
                  (T.current = !1)),
                L.current && b(!0);
            },
            handleMouseLeave = () => {
              (L.current = !1), b(!1), (T.current = !0);
            },
            handleDescriptionMouseEnter2 = () => {
              y(!0);
            },
            handleDescriptionMouseLeave2 = () => {
              y(!1);
            },
            handleClickOutside = (e) => {
              R.current && !R.current.contains(e.target) && B(!1);
            },
            q = K();
          (0, o.useEffect)(
            () => (
              window.addEventListener("resize", updateMenu),
              document.addEventListener("click", handleClickOutside),
              updateMenu(),
              () => {
                window.removeEventListener("resize", updateMenu),
                  document.removeEventListener("click", handleClickOutside);
              }
            ),
            [m.length]
          );
          let [P, Q] = (0, o.useState)(!1),
            fetchUserInfo = async (e) => {
              try {
                let t = await fetch("/api/user/getuserinfo", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e),
                  },
                });
                if (200 === t.status) return await t.json();
                return null;
              } catch (e) {
                return console.error("Error fetching user info:", e), null;
              }
            },
            handleUserInfo = (e) => {
              e && c(e.words_max > 0 || e.free_words_left > 0);
            },
            getUserInfoAfterParaphrase = async () => {
              let e = (0, u.vQ)("token");
              if (null == e ? void 0 : e.length) {
                let t = await fetchUserInfo(e);
                handleUserInfo(t), t && (t.words_max > 0 || t.free_words_left);
              }
            };
          (0, o.useEffect)(() => {
            getUserInfoAfterParaphrase();
          }, []),
            (0, o.useEffect)(() => {
              (s && l) || "true" == localStorage.getItem("test_forcedSignUp")
                ? (_(ep), Q(!1))
                : (console.log("Adding free mode", s, l), _(em), Q(!0));
            }, [s, l]),
            (0, o.useEffect)(() => {
              O && y(!1);
            }, [O]);
          let [W, V] = (0, o.useState)(!1),
            [D, F] = (0, o.useState)(!1);
          ed();
          let [G, Y] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            !s && localStorage.getItem("used_n_times") > 3 ? Y(!0) : Y(!1);
          }, [s, z, d, O]);
          let [J, X] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            "true" == localStorage.getItem("test_miniTrial") && X(!0);
          }, []);
          let $ = (0, r.jsx)("span", {
            className: eq().lock,
            children: (0, r.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "14px",
              viewBox: "0 -960 960 960",
              width: "14px",
              fill: "#000",
              children: (0, r.jsx)("path", {
                d: "M252.31-100q-29.92 0-51.12-21.19Q180-142.39 180-172.31v-375.38q0-29.92 21.19-51.12Q222.39-620 252.31-620H300v-80q0-74.92 52.54-127.46Q405.08-880 480-880q74.92 0 127.46 52.54Q660-774.92 660-700v80h47.69q29.92 0 51.12 21.19Q780-577.61 780-547.69v375.38q0 29.92-21.19 51.12Q737.61-100 707.69-100H252.31Zm0-60h455.38q5.39 0 8.85-3.46t3.46-8.85v-375.38q0-5.39-3.46-8.85t-8.85-3.46H252.31q-5.39 0-8.85 3.46t-3.46 8.85v375.38q0 5.39 3.46 8.85t8.85 3.46ZM480-290q29.15 0 49.58-20.42Q550-330.85 550-360t-20.42-49.58Q509.15-430 480-430t-49.58 20.42Q410-389.15 410-360t20.42 49.58Q450.85-290 480-290ZM360-620h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z",
              }),
            }),
          });
          return (0, r.jsxs)("div", {
            className: "".concat(eq().container, " ").concat(i),
            ref: R,
            children: [
              (0, r.jsx)("ul", {
                className: eq().items,
                style: 0 === m.length ? { display: "none" } : {},
                ref: H,
                onMouseLeave: handleMouseLeave,
                children: m.map((e, t) =>
                  (0, r.jsxs)(
                    "li",
                    {
                      className: ""
                        .concat(eq().item, " ")
                        .concat(d === t && eq().selected, " ")
                        .concat(
                          0 === t ? eq().left : "",
                          "\n                        "
                        )
                        .concat(
                          P && "free1" === eC[t] ? eq().rightSeparator : "",
                          "\n                        "
                        )
                        .concat(
                          P && "standard1" === eC[t] ? eq().rightSeparator : "",
                          "\n                        "
                        )
                        .concat(
                          P || "standard1" !== eh[t] ? "" : eq().rightSeparator,
                          "\n                        "
                        ),
                      onClick: () => changeModel(t),
                      onMouseEnter: (e) => handleMouseEnter(t, e),
                      style: {
                        cursor:
                          "custom1" != eh[t] ? "pointer" : "default !important",
                      },
                      children: [e.name, 0 != t && G && J && $],
                    },
                    t
                  )
                ),
              }),
              x.length > 0 &&
                (0, r.jsxs)("div", {
                  className: eq().more,
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () => B((e) => !e),
                      children: "More",
                    }),
                    (0, r.jsx)("ul", {
                      className: eq().dropdown,
                      style: Z ? { display: "block" } : {},
                      children: x.map((e, t) =>
                        (0, r.jsxs)(
                          "li",
                          {
                            className: ""
                              .concat(eq().item, " ")
                              .concat(d === m.length + t && eq().selected, " ")
                              .concat(0 === t ? eq().left : ""),
                            onClick: () => changeModel(m.length + t),
                            onMouseEnter: (e) =>
                              handleMouseEnter(m.length + t, e),
                            onMouseLeave: handleMouseLeave,
                            children: [e.name, 0 != t && G && J && $],
                          },
                          m.length + t
                        )
                      ),
                    }),
                  ],
                }),
              (0, r.jsxs)("div", {
                className: eq().ultraMode,
                onMouseEnter: handleDescriptionMouseEnter2,
                onMouseLeave: handleDescriptionMouseLeave2,
                "data-track": "ultra_mode_switch",
                children: [
                  (0, r.jsxs)("p", {
                    className: "".concat(O ? eq().underline : ""),
                    onClick: () => {
                      handleSwitchChange(!O);
                    },
                    children: ["Ultra run", G && J && $],
                  }),
                  (0, r.jsx)(SwitchComponent, {
                    checked: O,
                    onChange: handleSwitchChange,
                    lock: G,
                    onLockClick: () => {
                      s || q.handleOpen();
                    },
                  }),
                  v &&
                    (0, r.jsx)("div", {
                      className: eq().description2,
                      onMouseEnter: handleDescriptionMouseEnter2,
                      onMouseLeave: handleDescriptionMouseLeave2,
                      style: { marginLeft: -99 },
                      children: W
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              "Not compatible with free mode.",
                              (0, r.jsx)("br", {}),
                              "Undetectable by ALL AI detectors, even Originality AI and Turnitin. Use it for 0% AI.",
                            ],
                          })
                        : s && l
                        ? (0, r.jsx)(r.Fragment, {
                            children:
                              "Undetectable by ALL AI detectors, even Originality AI and Turnitin. Use it for 0% AI.",
                          })
                        : s && !l
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              "Undetectable by ALL AI detectors, even Originality AI and Turnitin. Use it for 0% AI. ",
                              (0, r.jsx)("br", {}),
                              " Upgrade to use this mode and get access to all features.",
                            ],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              "Undetectable by ALL AI detectors, even Originality AI and Turnitin. Use it for 0% AI. ",
                              (0, r.jsx)("br", {}),
                              " Sign up for free to use this mode and get access to all features.",
                            ],
                          }),
                    }),
                ],
              }),
              w &&
                (0, r.jsxs)("div", {
                  className: eq().description,
                  style: {
                    position: "absolute",
                    top: E.top,
                    left: E.left - 21,
                  },
                  children: [
                    G &&
                      J &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          "Freely available after Sign-Up.",
                          (0, r.jsx)("br", {}),
                        ],
                      }),
                    (null === (t = m[f]) || void 0 === t
                      ? void 0
                      : t.description) ||
                      (null === (n = x[f - m.length]) || void 0 === n
                        ? void 0
                        : n.description),
                  ],
                }),
            ],
          });
        },
        components_Editor = () => {
          let { outputText: e } = (0, N.Zq)(),
            { showSubscription: t } = (0, N.cy)(),
            { isLogged: n, setIsLogged: o } = (0, N.DH)();
          return (
            Hooks_useUnloadWarning(
              "Are you sure you want to leave? Changes you made may not be saved.",
              () => e.length > 0 && !t
            ),
            (0, r.jsx)("section", {
              className: S().editor,
              children: (0, r.jsxs)("div", {
                className: S().textSection,
                children: [
                  n
                    ? (0, r.jsx)("div", {
                        className: S().title2,
                        children: (0, r.jsx)("h1", {
                          children: "Humanize AI text",
                        }),
                      })
                    : (0, r.jsxs)("div", {
                        className: S().title3,
                        children: [
                          (0, r.jsx)("h1", {
                            className: S().editor__header,
                            children: "Humanize AI text",
                          }),
                          (0, r.jsx)("h2", {
                            className: S().editor__subheader,
                            children:
                              "Humanize AI text with the smartest AI humanizer",
                          }),
                          (0, r.jsx)("p", {
                            className: S().editor__description,
                            children:
                              "Transform your AI-generated content into natural, human-like text with the ultimate Humanize AI text tool. This ai-to-human text converter effortlessly converts output from ChatGPT, Bard, Jasper, Grammarly, GPT4, and other AI text generators into text indistinguishable from human writing. Achieve 100% originality and enhance your content creation with the best Humanize AI solution available.",
                          }),
                        ],
                      }),
                  (0, r.jsxs)("div", {
                    className: S().editorModeSection,
                    children: [
                      (0, r.jsx)(Editor_ModeSelection, {}),
                      (0, r.jsxs)("div", {
                        className: S().editorSection,
                        children: [
                          (0, r.jsx)(Editor_InputContainer, {}),
                          (0, r.jsx)(Editor_OutputContainer, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        eW = n(84051),
        eV = n(87182),
        eD = n(21813),
        eF = n.n(eD);
      function Content() {
        return (0, r.jsxs)("div", {
          className: eF().wrapper,
          children: [
            (0, r.jsxs)("p", {
              children: [
                "Start using our AI Humanizer and Humanize AI Text absolutely for free....",
                (0, r.jsx)("br", {}),
                (0, r.jsx)("br", {}),
                "We bypass ALL detectors, including Originality.ai, GPTZero, Turnitin, etc.",
                (0, r.jsx)("br", {}),
                (0, r.jsx)("br", {}),
              ],
            }),
            (0, r.jsx)("h2", {
              children:
                "Introducing Humanize AI: Your Premier AI-to-Human Text Converter",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "Humanize AI stands out as the leading, cost-free online platform designed for transforming AI-generated text into human-like content. Commonly known as the AI Humanizer or AI to Human Text Converter, our tool excels in rephrasing text created by AI writers, eliminating any robotic undertones. The output from our Humanize AI text tool is guaranteed to be 100% original, bypassing all AI detection systems currently available.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "Our advanced proprietary algorithms skillfully convert text from AI sources like ChatGPT, Google Bard, Microsoft Bing, QuillBot, Grammarly, Jasper.ai, Copy.ai, and others, into natural, human-like content. This process retains the original meaning, context, and crucially, the Search Engine Optimization (SEO) value. With our AI Humanizer, stay ahead in content creation with material indistinguishable from human writing.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", { children: "Understanding Humanize AI Text" }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "Humanizing AI text is the art of refining AI-generated content to resonate more naturally with human readers. This transformation ensures the content is engaging, relatable, and clear, devoid of any robotic flavor. The Humanize AI text encompasses various elements such as natural language usage, empathy, personalization, engagement, simplicity, and cultural sensitivity, all contributing to the conversion of AI text into natural, human-like content.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", {
              children: "How Can You Humanize AI Text for Free?",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "Humanizing AI text is now effortless and free with our AI Humanizer, following these simple steps:",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                "Step 1: Visit ",
                (0, r.jsx)("a", {
                  href: "https://www.humanizeai.pro",
                  children: "https://www.humanizeai.pro",
                }),
                " in your preferred browser. Our tool is compatible with all browsers.",
              ],
            }),
            (0, r.jsx)("p", {
              children:
                "Step 2: Input or paste the AI-generated text into the designated area.",
            }),
            (0, r.jsx)("p", {
              children:
                "Step 3: Complete the Captcha to confirm you're a human user.",
            }),
            (0, r.jsx)("p", {
              children:
                'Step 4: Click the "Humanize AI" button to initiate the conversion. This might take a moment, so please be patient.',
            }),
            (0, r.jsx)("p", {
              children:
                "Step 5: Upon completion, review the human-like, plagiarism-free output that's free from any robotic sound.",
            }),
            (0, r.jsx)("p", {
              children:
                "Step 6: Iterate steps 3 to 5 until you achieve the desired result from our AI Humanizer.",
            }),
            (0, r.jsx)("p", {
              children:
                "Step 7: Once satisfied, copy the human-like text, edit as necessary, and use it freely.",
            }),
            (0, r.jsx)("p", {
              children: 'Step 8: To begin anew, select the "Clear" button.',
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "And there you have it! Text that appears entirely human-written, undetectable by AI detectors, and optimized for your needs.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", {
              children: " Advantages of the Humanize AI Text Tool",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children:
                "Our AI Humanizer Tool is a game-changer in content creation, offering numerous benefits:",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Humanizes AI Content for Authenticity",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "It transforms AI-generated text into content that resonates with a human touch, ensuring relatability and authenticity.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Guaranteed Plagiarism-Free Content",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Originality is crucial in content writing. Our tool provides plagiarism-free content, ensuring uniqueness in every piece.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Evades AI Detectors" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Content crafted by this tool appears entirely human-written, seamlessly bypassing AI detection tests.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "SEO-Friendly Output" }),
            }),
            (0, r.jsx)("p", {
              children:
                "The tool intelligently retains essential keywords, ensuring the content remains SEO-friendly.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Boosts Productivity" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Save time and effort with this tool, increasing your efficiency in converting AI text to human-like content.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Exceptional Content Quality",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Expect high-quality content with natural language, free of grammatical errors and odd word choices.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Significant Cost Savings",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Reduce reliance on human writers and editors, translating to considerable savings.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Unmatched Accuracy" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Aims for a 100% human score, maintaining accuracy while preserving the original context and meaning.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Maintains Meaning and Context",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "The tool ensures consistency by retaining the original meaning and context of the provided content.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", {
              children: " Features of the Humanize AI Text Tool",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "User-Friendly Interface",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                'Accessible to anyone, the interface requires no special training. Enter AI text, click "Humanize AI," and receive human-like content.',
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Multilingual Support" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Supports various languages, including English, Chinese, Russian, Arabic, and Japanese.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Universal Browser Compatibility",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Works seamlessly across browsers like Chrome, Firefox, Explorer, and Safari.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Free of Cost" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Enjoy unlimited usage without any charges or hidden fees.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Cross-Device Functionality",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Optimized for desktops, tablets, laptops, and mobiles.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "No Registration Required",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Direct access to the tool without the need for registration or sign-up.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Unlimited Access" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Use the tool as often as needed, without restrictions or interruptions.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Strict Confidentiality" }),
            }),
            (0, r.jsx)("p", {
              children: "Your content remains safe and confidential.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Contextual Intelligence",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "The algorithm understands input context, ensuring consistent output.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Rapid and Efficient" }),
            }),
            (0, r.jsx)("p", {
              children: "Quick results without compromising content quality.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Emojis and Emoticons" }),
            }),
            (0, r.jsx)("p", {
              children: "Add an emotional touch with a variety of emojis.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Sentiment Analysis" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Considers emotional undertones, ensuring human-like content with emotional depth.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", { children: " Necessity of Humanizing AI Text" }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Creating Relatable and Authentic Content",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Humans gravitate towards content with emotional depth, real stories, and experiences. Humanize AI Tool enhances content engagement by adding a personal touch.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Addressing AI Imperfections",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Even with AI advancements, human intervention is needed for precision and bias elimination. Our tool ensures content fairness and impartiality.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", { children: "Cultural Sensitivity" }),
            }),
            (0, r.jsx)("p", {
              children:
                "Respecting cultural nuances is essential for content relatability, which AI alone cannot achieve.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Boosting Conversions through Emotional Engagement",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Emotionally charged content strengthens business-customer connections. Our tool facilitates this through a balanced blend of emotions, stories, and experiences.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Enhancing Search Engine Compatibility",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Search engines favor human-generated content with valuable information. The Humanize AI Tool ensures compliance with these guidelines.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Building Trust with Credibility and Feedback",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "Genuine content fosters credibility and trust among readers. Our tool adds a layer of authenticity, reflecting real incidents and experiences.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", {
              children:
                " Who Can Benefit from the Humanize AI Text Tool? Essentially, Everyone!",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Content Creators & Writers:" }),
                " Streamline your writing process. Generate initial drafts with an AI tool and refine them to sound human-written with our AI Humanizer.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", {
                  children: "Marketing Professionals & Ad Experts:",
                }),
                " Enhance your marketing messages to resonate emotionally with audiences using the AI Humanizer, making your campaigns more impactful.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Business Executives:" }),
                " Improve your business emails with a human touch, ensuring effective communication and better results.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Students:" }),
                " Ideal for assignments in early education and research publications in higher studies, ensuring your work has the perfect human touch.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Web Developers & Designers:" }),
                " Refine website content, prompts, error messages, and methodologies to sound more human and engaging.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "PR Professionals:" }),
                " Create engaging, emotionally resonant content and announcements to connect better with your audience.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Social Media Influencers:" }),
                " Elevate your social media content to be more human-centric, attracting more followers.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Researchers & Academics:" }),
                " Enhance your academic writing, from assignments to research papers and blogs, with a human touch.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Bloggers & Journalists:" }),
                " Make your articles more engaging and memorable, potentially going viral with humanized content.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "E-Commerce Experts:" }),
                " Improve product descriptions, emails, and marketing materials to be more appealing and relatable to customers.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Educators & Trainers:" }),
                " Refine online course materials and study content to be more accessible and engaging for students.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Non-Profit Organizations:" }),
                " Enhance the impact of your stories, messages, and appeals with a more human touch to reach a wider audience.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Freelance Writers:" }),
                " Access high-quality, human-touched content for diverse writing needs.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Podcasters & YouTubers:" }),
                " Ensure your scripts have the appropriate conversational and emotional tone for your audience.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Legal Professionals:" }),
                " Simplify legal jargon into language that's easier for clients to understand.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "HR Professionals:" }),
                " Humanize internal communications, job postings, emails, presentations, and other content to better represent your organization.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Creative Writers:" }),
                " Add realism to your poetry, fiction, or plays to attract a wider audience.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("b", { children: "Anyone with a Story to Tell:" }),
                " Whether for business or personal reasons, this tool is versatile enough for anyone looking to convey their message more effectively.",
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("h2", {
              children:
                " Frequently Asked Questions (FAQ) about Humanize AI Text Tool",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q1: What is Humanize AI?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A1: Humanize AI is a leading online AI-to-human text converter, transforming AI-generated content into human-like, engaging text. It's ideal for various applications, ensuring content is relatable and free from a robotic tone.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q2: How does the Humanize AI text tool work?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A2: The tool uses advanced algorithms to rewrite AI-generated content, maintaining the original meaning and context while adding a natural, human touch. It's designed to be SEO-friendly and bypass AI detectors.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q3: Is the Humanize AI tool free to use?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A3: Yes, our AI Humanizer is completely free, offering unlimited access without any hidden charges.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q4: Can Humanize AI handle content in multiple languages?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A4: Absolutely. The tool supports a variety of languages, ensuring versatility in AI text conversion.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q5: Does the tool work on all browsers and devices?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A5: Yes, our tool is compatible with all major browsers and optimized for use across different devices, including desktops, laptops, tablets, and smartphones.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q6: Is registration required to use the Humanize AI text tool?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A6: No, there's no need for registration or sign-up, allowing you to use the tool directly and save time.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q7: How does Humanize AI ensure the confidentiality of my content?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A7: We prioritize the security and confidentiality of your content, employing stringent measures to ensure it remains safe and private.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q8: Can Humanize AI improve SEO of my content?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A8: Yes, the tool is designed to retain essential keywords and optimize the content for SEO, enhancing its online visibility.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children: "Q9: Is the output from Humanize AI plagiarism-free?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A9: Definitely. Our tool guarantees plagiarism-free content, ensuring originality and uniqueness.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q10: Who can benefit from using the Humanize AI text tool?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A10: The tool is versatile and beneficial for content creators, marketers, business professionals, students, developers, PR professionals, social media influencers, researchers, bloggers, e-commerce experts, educators, non-profits, freelance writers, podcasters, legal professionals, HR professionals, creative writers, and anyone with a story to tell.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q11: Can Humanize AI help in bypassing AI detection tools?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A11: Yes, the content generated by our tool is crafted to bypass all AI detection systems, appearing as if it's written by a human.",
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", {
              children: (0, r.jsx)("b", {
                children:
                  "Q12: Does the tool maintain the meaning and context of the original AI text?",
              }),
            }),
            (0, r.jsx)("p", {
              children:
                "A12: Absolutely. One of the key strengths of the Humanize AI text tool is its ability to preserve the original meaning and context of the input text while humanizing it.",
            }),
            (0, r.jsx)("br", {}),
          ],
        });
      }
      function Home() {
        let e = (0, i.useRouter)(),
          { isLogged: t, setIsLogged: n } = (0, N.DH)(),
          { hasCredits: s, setHasCredits: a } = (0, N.pE)(),
          { isAcademic: c, setIsAcademic: m } = (0, N.Co)(),
          { model: _, setModel: x } = (0, N.tT)(),
          { handleOpen: g } = b();
        (0, o.useEffect)(() => {
          window.addEventListener("beforeunload", (e) => {
            trackEvent("/index page unloaded");
          });
        }),
          (0, o.useEffect)(() => {
            h.n.track("/index page loaded"),
              e.isReady &&
                (trackEvent("/index page loaded"),
                e.query.token &&
                  ((0, u.wn)("token", e.query.token),
                  h.n.track("/signup/ google processed"),
                  (window.location.href = "/")));
            let initialize = async () => {
              let t = await checkToken();
              if (t) {
                getUserInfo(),
                  "true" ==
                    localStorage.getItem(
                      "questionnaire-occupation-v1.0-humanizeai"
                    ) &&
                    window.innerWidth > 700 &&
                    (g(),
                    localStorage.setItem(
                      "questionnaire-occupation-v1.0-humanizeai",
                      "false"
                    ));
                try {
                  if (0 !== (0, u.vQ)("redirect_uri").length) {
                    let t = (0, u.vQ)("token"),
                      n = (0, u.vQ)("redirect_uri"),
                      r = n.replace("__token__", t);
                    (0, u.wn)("redirect_uri", ""),
                      e.push(r),
                      (window.location.href = r);
                  }
                } catch (e) {
                  console.error(e);
                }
              }
            };
            initialize();
          }, [e.isReady]);
        let checkToken = async () => {
          let e = (0, u.vQ)("token");
          if (!e) return n(!1), a(!1), !1;
          try {
            let t = await fetch("/api/user/vtoken", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(e),
              },
            });
            if ((n(!0), 401 === t.status)) return n(!1), a(!1), !1;
            return !0;
          } catch (e) {
            return console.error("Error verifying token:", e), n(!1), a(!1), !1;
          }
        };
        (0, o.useEffect)(() => {
          t
            ? (trackEvent("/index opened with signed in"),
              "true" != localStorage.getItem("logged_signup") &&
                (h.n.track("/index opened after signup"),
                localStorage.setItem("logged_signup", "true")))
            : x(0);
        }, [t]);
        let fetchUserInfo = async (e) => {
          try {
            let t = await fetch("/api/user/getuserinfo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(e),
              },
            });
            if (200 === t.status) return await t.json();
            return null;
          } catch (e) {
            return console.error("Error fetching user info:", e), null;
          }
        };
        ed();
        let handleUserInfo = (e) => {
            e &&
              ((0, u.wn)("email", e.email),
              (0, u.wn)("incode", e.incode),
              0 !== e.subscription && h.n.track("Subscribed"),
              m(e.is_academic),
              console.log("HAS CREDITS DATA", e.words_max, e.free_words_left),
              a(e.words_max > 0 || e.free_words_left > 0),
              "true" == localStorage.getItem("test_limitNot") &&
                e.exceededUsage &&
                localStorage.setItem("lastUsageTime", e.lastUsageTime));
          },
          getUserInfo = async () => {
            let e = (0, u.vQ)("token");
            if (null == e ? void 0 : e.length) {
              let t = await fetchUserInfo(e);
              handleUserInfo(t);
            }
          },
          f = {
            name: "humanizeai.pro",
            title: "Humanize AI",
            description:
              "Humanize AI text with #1 AI humanizer, for free. Easily convert AI-generated text into human-like content.",
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("title", { children: f.title }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content: f.description,
                }),
                (0, r.jsx)("link", {
                  rel: "canonical",
                  href: "https://www.".concat(f.name),
                }),
                (0, r.jsx)("meta", {
                  property: "og:url",
                  content: "https://www.".concat(f.name),
                }),
                (0, r.jsx)("meta", { property: "og:title", content: f.title }),
                (0, r.jsx)("meta", {
                  property: "og:description",
                  content: f.description,
                }),
                (0, r.jsx)("meta", { name: "X:card", content: "summary" }),
                (0, r.jsx)("meta", {
                  name: "X:site",
                  content: "@".concat(f.name),
                }),
                (0, r.jsx)("meta", {
                  name: "X:creator",
                  content: "@".concat(f.name),
                }),
                (0, r.jsx)("meta", { name: "X:title", content: f.title }),
                (0, r.jsx)("meta", {
                  name: "X:description",
                  content: f.description,
                }),
                (0, r.jsx)("meta", {
                  name: "X:image",
                  content: "https://www.".concat(f.name, "/logo.png"),
                }),
              ],
            }),
            (0, r.jsxs)("main", {
              className: d().main,
              children: [
                (0, r.jsx)(components_Questionnaire, {}),
                (0, r.jsx)(y.Z, {
                  links: C.HZ.slice(0, t ? 3 : 2),
                  openLog: !t,
                }),
                (0, r.jsx)(components_Editor, {}),
                (0, r.jsx)(eW.Z, {}),
                !t && (0, r.jsx)(Content, {}),
                (0, r.jsx)(eV.Z, { links: C.dk, openLog: !t }),
                (0, r.jsx)(p.Z, {}),
                (0, r.jsxs)("div", {
                  style: {
                    backgroundColor: "var(--light-blue)",
                    width: "100%",
                    color: "var(--grey)",
                    fontSize: 12,
                    paddingBottom: 20,
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                  },
                  children: [
                    "This site is protected by reCAPTCHA and the Google",
                    (0, r.jsx)("a", {
                      style: { color: "var(--grey)" },
                      href: "https://policies.google.com/privacy",
                      children: "Privacy Policy",
                    }),
                    " and",
                    (0, r.jsx)("a", {
                      style: { color: "var(--grey)" },
                      href: "https://policies.google.com/terms",
                      children: "Terms of Service",
                    }),
                    " apply.",
                  ],
                }),
              ],
            }),
          ],
        });
      }
      n(51428);
    },
    48905: function (e, t, n) {
      "use strict";
      n.d(t, {
        AX: function () {
          return x;
        },
        C5: function () {
          return w;
        },
        Co: function () {
          return c;
        },
        DH: function () {
          return l;
        },
        NM: function () {
          return d;
        },
        Nf: function () {
          return g;
        },
        Ng: function () {
          return o;
        },
        OC: function () {
          return v;
        },
        Os: function () {
          return j;
        },
        Qe: function () {
          return S;
        },
        Y5: function () {
          return a;
        },
        Yt: function () {
          return C;
        },
        Zq: function () {
          return h;
        },
        _B: function () {
          return k;
        },
        cy: function () {
          return p;
        },
        dV: function () {
          return b;
        },
        dw: function () {
          return y;
        },
        kE: function () {
          return E;
        },
        lF: function () {
          return i;
        },
        oo: function () {
          return m;
        },
        pE: function () {
          return u;
        },
        tS: function () {
          return _;
        },
        tT: function () {
          return s;
        },
        wc: function () {
          return f;
        },
      });
      var r = n(64529);
      let o = (0, r.Ue)((e) => ({
          text: "",
          setText: (t) => e({ text: t }),
          clearText: () => e({ text: "" }),
        })),
        i = (0, r.Ue)((e) => ({
          height: 430,
          setTextHeight: (t) => e({ height: t }),
        })),
        s = (0, r.Ue)((e) => ({ model: 0, setModel: (t) => e({ model: t }) })),
        a = (0, r.Ue)((e) => ({
          isUltra: 0,
          setUltra: (t) => e({ isUltra: t }),
        })),
        l = (0, r.Ue)((e) => ({
          isLogged: !1,
          setIsLogged: (t) => e({ isLogged: t }),
        })),
        c = (0, r.Ue)((e) => ({
          isAcademic: !1,
          setIsAcademic: (t) => e({ isAcademic: t }),
        })),
        d = (0, r.Ue)((e) => ({ AB: null, setAB: (t) => e({ AB: t }) })),
        u = (0, r.Ue)((e) => ({
          hasCredits: !0,
          setHasCredits: (t) => e({ hasCredits: t }),
        })),
        h = (0, r.Ue)((e) => ({
          outputText: "",
          setOutputText: (t) => e({ outputText: t }),
          clearOutputText: () => e({ outputText: "" }),
        })),
        p = (0, r.Ue)((e) => ({
          showSwitchVersions: !1,
          outputTexts: [],
          outputIndex: 0,
          upperBounder: -1,
          setShowSwitchVersions: (t) => e({ showSwitchVersions: t }),
          appendOutputText: (t) =>
            e((e) => ({
              outputTexts: [...e.outputTexts, t],
              upperBounder: e.upperBounder + 1,
            })),
          clearOutputTexts: () => e({ outputTexts: [] }),
          setOutputIndex: () => e((e) => ({ outputIndex: e.upperBounder })),
          changeOutputIndex: (t) =>
            e((e) => {
              let n = e.outputIndex + t,
                r = Math.max(0, Math.min(n, e.upperBounder));
              return { outputIndex: r };
            }),
          clearOutputIndex: () => e({ outputIndex: 0 }),
          setUpperBounder: (t) => e({ upperBounder: t }),
        })),
        C = (0, r.Ue)((e) => ({
          outputs: [],
          setOutputs: (t) => e({ outputs: t }),
        })),
        m = (0, r.Ue)((e) => ({
          numberOfCharacters: 0,
          setNumberOfCharacters: (t) => e({ numberOfCharacters: t }),
          clearNumberOfCharacters: () => e({ numberOfCharacters: 0 }),
        })),
        _ = (0, r.Ue)((e) => ({
          numberOfOutputCharacters: 0,
          setNumberOfOutputCharacters: (t) =>
            e({ numberOfOutputCharacters: t }),
          clearNumberOfOutputCharacters: () =>
            e({ numberOfOutputCharacters: 0 }),
        })),
        x = (0, r.Ue)((e) => ({
          showAdvancedOptions: !1,
          handleShowAdvancedOptions: () =>
            e((e) => ({ showAdvancedOptions: !e.showAdvancedOptions })),
          setShowAdvanced: (t) => e({ showAdvancedOptions: t }),
        })),
        g = (0, r.Ue)((e) => ({
          keywords: [],
          addKeyword: (t) => e((e) => ({ keywords: [...e.keywords, t] })),
          setKeywords: (t) => e({ keywords: t }),
        })),
        f = (0, r.Ue)((e) => ({
          showButton: !0,
          setShowButton: (t) => e({ showButton: t }),
          handleShowButton: () => e((e) => ({ showButton: !e.showButton })),
        })),
        j = (0, r.Ue)((e) => ({
          windowWidth: window.innerWidth,
          setWindowWidth: (t) => e({ windowWidth: t }),
        })),
        w = (0, r.Ue)((e) => ({
          showOutput: !0,
          setShowOutput: (t) => e({ showOutput: t }),
        })),
        b = (0, r.Ue)((e) => ({
          expectedTime: 0,
          setExpectedTime: (t) => e({ expectedTime: t }),
        })),
        v = (0, r.Ue)((e) => ({
          showLoader: !1,
          setShowLoader: (t) => e({ showLoader: t }),
        })),
        y = (0, r.Ue)((e) => ({
          showSubscription: !1,
          setShowSubscription: (t) => e({ showSubscription: t }),
        })),
        k = (0, r.Ue)((e) => ({
          showCompare: !1,
          setShowCompare: (t) => e({ showCompare: t }),
        })),
        S = (0, r.Ue)((e) => ({
          showDifferent: !1,
          setShowDifferent: (t) => e({ showDifferent: t }),
        })),
        E = (0, r.Ue)((e) => ({
          textToCompare: "",
          setTextToCompare: (t) => e({ textToCompare: t }),
        }));
    },
    56040: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z7: function () {
          return l;
        },
        cX: function () {
          return o;
        },
        dV: function () {
          return i;
        },
        mt: function () {
          return a;
        },
        nJ: function () {
          return s;
        },
      });
      var r = n(64529);
      let o = (0, r.Ue)((e) => ({
          showMinTokensAlert: !1,
          setShowMinTokensAlert: (t) => e({ showMinTokensAlert: t }),
          clearShowMinTokensAlert: () => e({ showMinTokensAlert: !1 }),
        })),
        i = (0, r.Ue)((e) => ({
          showAlerts: !1,
          setShowErrors: (t) => e({ showAlerts: t }),
          clearShowErrors: () => e({ showAlerts: !1 }),
        })),
        s = (0, r.Ue)((e) => ({
          showMaxTokensAlert: !1,
          setShowMaxTokensAlert: (t) => e({ showMaxTokensAlert: t }),
          clearShowMaxTokensAlert: () => e({ showMaxTokensAlert: !1 }),
        })),
        a = (0, r.Ue)((e) => ({
          showRedCounter: !1,
          setRedCounter: (t) => e({ showRedCounter: t }),
          clearRedCounter: () => e({ showRedCounter: !1 }),
        })),
        l = (0, r.Ue)((e) => ({
          alerts: [],
          setAlerts: (t) => e({ alerts: t }),
          addAlertToStore: (t) => e((e) => ({ alerts: [...e.alerts, t] })),
          clearAlerts: () => e({ alerts: [] }),
          removeLastAlert: () =>
            e((e) => ({ alerts: e.alerts.slice(0, e.alerts.length - 1) })),
          removeAlert: (t) =>
            e((e) => ({ alerts: e.alerts.filter((e, n) => n !== t) })),
        }));
    },
    62863: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return o;
        },
        k: function () {
          return createModalStore;
        },
      });
      var r = n(64529);
      let o = (0, r.Ue)((e) => ({
          isOpen: !1,
          handleOpen: () => e((e) => ({ isOpen: !0 })),
          close: () => e({ isOpen: !1 }),
        })),
        createModalStore = () =>
          (0, r.Ue)((e) => ({
            isOpen: !1,
            handleOpen: () => e((e) => ({ isOpen: !0 })),
            close: () => e({ isOpen: !1 }),
          }));
    },
    92120: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return CookiesBanner;
        },
      });
      var r = n(85893),
        o = n(65190),
        i = n.n(o),
        s = n(67294),
        a = n(3957);
      function CookiesBanner() {
        let [e, t] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            "true" == (0, a.vQ)("cookies") || "false" == (0, a.vQ)("cookies")
              ? t(!0)
              : t(!1);
          }, []),
          e
            ? null
            : (0, r.jsxs)("div", {
                className: i().cookies_container,
                children: [
                  (0, r.jsx)("p", {
                    className: i().title,
                    children: "Cookies",
                  }),
                  (0, r.jsxs)("p", {
                    className: i().description,
                    children: [
                      "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that ",
                      (0, r.jsx)("a", {
                        href: "/cookies_policy.html",
                        children: "you are happy with it",
                      }),
                      ".",
                    ],
                  }),
                  (0, r.jsx)("button", {
                    className: i().button,
                    onClick: () => {
                      (0, a.wn)("cookies", "true"), t(!0);
                    },
                    children: "Ok",
                  }),
                ],
              })
        );
      }
    },
    77181: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GoogleLoginButton;
        },
      });
      var r = n(85893),
        o = n(65190),
        i = n.n(o),
        s = n(86022);
      let getGoogleUrl = () => {
        let e = {
            redirect_uri: s.lo,
            client_id: s.m8,
            access_type: "offline",
            response_type: "code",
            prompt: "consent",
            scope: "https://www.googleapis.com/auth/userinfo.email",
            state: "",
          },
          t = new URLSearchParams(e);
        return ""
          .concat("https://accounts.google.com/o/oauth2/v2/auth", "?")
          .concat(t.toString());
      };
      var a = n(41664),
        l = n.n(a);
      function GoogleLoginButton(e) {
        return (0, r.jsx)(l(), {
          href: getGoogleUrl(),
          className: i().linkContainer,
          onClick: () => {
            e.onClick();
          },
          children: (0, r.jsxs)("div", {
            className: ""
              .concat(i().googleButtonContainer, " ")
              .concat(e.className),
            children: [
              (0, r.jsx)("span", {
                className: i().googleButtonIcon,
                children: (0, r.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 48",
                  width: "24px",
                  height: "24px",
                  children: [
                    (0, r.jsx)("path", {
                      fill: "#FFC107",
                      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
                    }),
                    (0, r.jsx)("path", {
                      fill: "#FF3D00",
                      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
                    }),
                    (0, r.jsx)("path", {
                      fill: "#4CAF50",
                      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
                    }),
                    (0, r.jsx)("path", {
                      fill: "#1976D2",
                      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z",
                    }),
                  ],
                }),
              }),
              e.title,
            ],
          }),
        });
      }
    },
    49351: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return format_text;
        },
        n: function () {
          return compare_texts;
        },
      });
      var r = n(85893),
        o = n(59295),
        i = n(67294),
        s = n(22531),
        a = n.n(s);
      function compare_texts(e, t) {
        let n = (0, o.NV)(e, t, {
            ignoreWhitespace: !0,
            ignoreCase: !0,
            ignorePunctuation: !0,
          }),
          s = [];
        return (
          n.forEach((e, t) => {
            let n = e.value
                .split("\n")
                .map((e, n, o) =>
                  (0, r.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        e,
                        n !== o.length - 1 &&
                          (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("br", {}),
                          }),
                      ],
                    },
                    "".concat(t, "-").concat(n)
                  )
                ),
              o = e.value.split("\n").join(" ");
            e.added
              ? s.push(
                  (0, r.jsx)(
                    "span",
                    { className: a().t__added, children: n },
                    "added-".concat(t)
                  )
                )
              : e.removed ||
                (o.split(" ").length > 5
                  ? s.push(
                      (0, r.jsx)(
                        "span",
                        { className: a().t__not_edited_long, children: n },
                        "not_edited-long-".concat(t)
                      )
                    )
                  : s.push(
                      (0, r.jsx)(
                        "span",
                        { className: a().t__not_edited, children: n },
                        "not_edited-".concat(t)
                      )
                    ));
          }),
          s
        );
      }
      function format_text(e) {
        let t = [],
          n = e
            .split("\n")
            .map((e, t, n) =>
              (0, r.jsxs)(
                i.Fragment,
                {
                  children: [
                    e,
                    t !== n.length - 1 &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("br", {}),
                      }),
                  ],
                },
                "line-".concat(t)
              )
            );
        return (
          t.push(
            (0, r.jsx)(
              "span",
              { className: a().t__not_edited, children: n },
              "formatted-text"
            )
          ),
          t
        );
      }
    },
    84184: function (e) {
      e.exports = {
        button: "CustomButton_button__Icrl5",
        small: "CustomButton_small__dqHta",
        big: "CustomButton_big__A6BGW",
        primary: "CustomButton_primary__8__9X",
        secondary: "CustomButton_secondary__z7fSf",
        circle: "CustomButton_circle__5nV70",
      };
    },
    65190: function (e) {
      e.exports = {
        linkContainer: "Components_linkContainer__nRnEU",
        googleButtonContainer: "Components_googleButtonContainer__4dBxI",
        googleButtonIcon: "Components_googleButtonIcon__32Tss",
        cookies_container: "Components_cookies_container__caKzG",
        allRightsReserved: "Components_allRightsReserved__Q5j_r",
        customSelect: "Components_customSelect__OytR9",
        selectedOption: "Components_selectedOption__qsEom",
        options: "Components_options__zNCD2",
        option: "Components_option__xjlX2",
        tooltipContainer: "Components_tooltipContainer__jQu3H",
        tooltipIcon: "Components_tooltipIcon__YydaM",
        tooltipText: "Components_tooltipText__1jhwc",
        tooltipLeft: "Components_tooltipLeft__WVEk3",
        alertsColumn: "Components_alertsColumn__8XRl4",
        alert: "Components_alert__jCsRl",
        alertClose: "Components_alertClose__oi1Kz",
        alertIcon: "Components_alertIcon__SND_r",
        alertText: "Components_alertText__RmZOF",
        deleted: "Components_deleted__iGed8",
        alertTypeRemind: "Components_alertTypeRemind__yIpAN",
        alertTypeSubscribe: "Components_alertTypeSubscribe__eMokH",
      };
    },
    22531: function (e) {
      e.exports = {
        marginBottom: "Editor_marginBottom__IdImO",
        input: "Editor_input__r1ANC",
        header: "Editor_header__8hrzw",
        signup: "Editor_signup__XitVs",
        sections: "Editor_sections__zEThk",
        section1: "Editor_section1__9HKmZ",
        gradient__border: "Editor_gradient__border__1uwNK",
        advancedOptions: "Editor_advancedOptions__bTHpV",
        advancedTop: "Editor_advancedTop__A3qKl",
        closeAdvanced: "Editor_closeAdvanced__2sK8_",
        advancedOptionsItem: "Editor_advancedOptionsItem__nT2jA",
        advancedInput: "Editor_advancedInput__eTOmm",
        advancedInputContainer: "Editor_advancedInputContainer__XNU1V",
        inputRow: "Editor_inputRow__hFftT",
        keywords: "Editor_keywords__TYqvN",
        keyword: "Editor_keyword__sJ1cZ",
        keywordText: "Editor_keywordText__4WrcY",
        deleteKeyword: "Editor_deleteKeyword__gHVtG",
        description: "Editor_description__UR9LG",
        advanceMode2: "Editor_advanceMode2__jGD7Q",
        advanceMode1: "Editor_advanceMode1__XEyNl",
        advancedOptionsContainer: "Editor_advancedOptionsContainer___CLbO",
        hideAdvanced: "Editor_hideAdvanced__VFlvS",
        freeParaphrasing: "Editor_freeParaphrasing__mbJeY",
        buttonClearContainer: "Editor_buttonClearContainer__ero2q",
        flatBorder: "Editor_flatBorder__IBsr1",
        chooseVersion: "Editor_chooseVersion__ye2YJ",
        arrowLeft: "Editor_arrowLeft__pjITC",
        arrowRight: "Editor_arrowRight__bTaCA",
        versionName: "Editor_versionName__uBqap",
        buttonSubscribe: "Editor_buttonSubscribe___vLzB",
        buttonHideContainer: "Editor_buttonHideContainer__Fl_6P",
        gradient__border__subscribe:
          "Editor_gradient__border__subscribe__Y4Dpi",
        buttonComp: "Editor_buttonComp__fkRXE",
        inputContainer: "Editor_inputContainer__lQvBO",
        inputContainerAlert: "Editor_inputContainerAlert__mJ0kF",
        buttonSelectionContainer: "Editor_buttonSelectionContainer__xamty",
        buttonContainer0: "Editor_buttonContainer0__vCDV_",
        textCount: "Editor_textCount__UwFDe",
        section2: "Editor_section2__FqLWH",
        title: "Editor_title__y1gd3",
        outputContainer: "Editor_outputContainer__1VC0Q",
        output: "Editor_output__8Gfxv",
        copyToClipboard: "Editor_copyToClipboard__QPjKV",
        thumbUp: "Editor_thumbUp__npyeV",
        thumbDown: "Editor_thumbDown__QtipY",
        loaderContainer: "Editor_loaderContainer__3sZlc",
        loader: "Editor_loader__sJ7fC",
        rotating: "Editor_rotating__irmDg",
        disclaimer: "Editor_disclaimer__BwYzp",
        allert: "Editor_allert___FIRT",
        close: "Editor_close__NkN72",
        allertLogin: "Editor_allertLogin__BQ2Qv",
        review: "Editor_review__auj_L",
        buttonContainer: "Editor_buttonContainer__vS2SK",
        loadingBarContainer: "Editor_loadingBarContainer__xyZ7T",
        loadingMessage: "Editor_loadingMessage__Fbi96",
        loadingBar: "Editor_loadingBar__oLnCB",
        loadingBarInner: "Editor_loadingBarInner__y3H_o",
        tooltipSelectContainer0: "Editor_tooltipSelectContainer0__0fBrO",
        tooltipSelectContainer1: "Editor_tooltipSelectContainer1__foMA2",
        selectContainer1: "Editor_selectContainer1__pr8Gd",
        tooltipContainer1: "Editor_tooltipContainer1__Jc1Mh",
        earnProgram: "Editor_earnProgram__dQd3v",
        outputText: "Editor_outputText__JEtt7",
        t__added: "Editor_t__added__LtuNJ",
        t__removed: "Editor_t__removed__JfBqi",
        t__not_edited: "Editor_t__not_edited__WuRP8",
        t__not_edited_long: "Editor_t__not_edited_long__JuNNx",
        score: "Editor_score__ZpaNC",
        marginBlock: "Editor_marginBlock__BJUp7",
        explScores: "Editor_explScores__Ygfyk",
        scoreGreen: "Editor_scoreGreen__5IaPq",
        scoreRed: "Editor_scoreRed__2vxpW",
        scoreYellow: "Editor_scoreYellow___ey2N",
        request: "Editor_request__aYhHI",
        subscribeRequest: "Editor_subscribeRequest__lWQos",
        buttonSelectionContainer_: "Editor_buttonSelectionContainer___u6UO5",
        loadingBarText: "Editor_loadingBarText__MxToV",
      };
    },
    21813: function (e) {
      e.exports = { wrapper: "Content_wrapper__2mAku" };
    },
    14166: function (e) {
      e.exports = {
        alerts: "Alert_alerts__fZ2VU",
        alert: "Alert_alert__taw2V",
        error: "Alert_error__bMR2p",
        warning: "Alert_warning__72_po",
        success: "Alert_success__0URsK",
      };
    },
    37541: function (e) {
      e.exports = {
        editor: "Editor_editor__N5NNN",
        textSection: "Editor_textSection__lMs8i",
        editorModeSection: "Editor_editorModeSection__FNLK0",
        editorSection: "Editor_editorSection__9tlzy",
        title2: "Editor_title2__MXp66",
        title3: "Editor_title3__hWeAn",
        editor__header: "Editor_editor__header__GIEq6",
        editor__subheader: "Editor_editor__subheader__uH98a",
        editor__description: "Editor_editor__description__sjr_h",
      };
    },
    62710: function (e) {
      e.exports = { clearButton: "ClearButton_clearButton__OqCIG" };
    },
    87049: function (e) {
      e.exports = {
        userInputWrapper: "InputContainer_userInputWrapper__WcJ_k",
        title2: "InputContainer_title2__pSoni",
        title3: "InputContainer_title3__nkUXy",
        title: "InputContainer_title__x0K7a",
        InputWrapper: "InputContainer_InputWrapper__g4qc_",
        inputContainer: "InputContainer_inputContainer__jeGwX",
        textCount: "InputContainer_textCount__fV6u2",
        paraphraseButton: "InputContainer_paraphraseButton__Z9w4R",
        modelSelection: "InputContainer_modelSelection__lY8k3",
      };
    },
    81713: function (e) {
      e.exports = {
        container: "LimitNotificationModal_container__bmBUr",
        a_spacer: "LimitNotificationModal_a_spacer__0lLuP",
        close: "LimitNotificationModal_close__6xb_p",
      };
    },
    5563: function (e) {
      e.exports = {
        container: "ModeSelection_container__j19xV",
        items: "ModeSelection_items__Mit1G",
        item: "ModeSelection_item__02gch",
        more: "ModeSelection_more__rCUrn",
        dropdown: "ModeSelection_dropdown__RH2h8",
        ultraMode: "ModeSelection_ultraMode__OJuqG",
        underline: "ModeSelection_underline__f8NZA",
        selected: "ModeSelection_selected__qcGan",
        left: "ModeSelection_left__6eTxu",
        rightSeparator: "ModeSelection_rightSeparator___S96w",
        description: "ModeSelection_description__hTy7I",
        description2: "ModeSelection_description2__JVNml",
      };
    },
    11298: function (e) {
      e.exports = {
        switch: "Switch_switch__vCzzb",
        slider: "Switch_slider__SM4nr",
        off: "Switch_off__QonAQ",
        on: "Switch_on__wB_im",
      };
    },
    52725: function (e) {
      e.exports = {
        outputContainer: "OutputContainer_outputContainer__PvVjd",
        loaderContainer: "OutputContainer_loaderContainer__Iy4pR",
        expectedTime: "OutputContainer_expectedTime__0Kldb",
        signUpPrompt: "OutputContainer_signUpPrompt__5flQ3",
        textBefore: "OutputContainer_textBefore__Rfzqq",
        textCount: "OutputContainer_textCount__JlHFW",
        characterCount: "OutputContainer_characterCount__jl8_M",
        output: "OutputContainer_output__wvgeh",
        hide: "OutputContainer_hide__A_wAP",
        reviewSection: "OutputContainer_reviewSection__aFxQp",
        switchVersions: "OutputContainer_switchVersions__AkrAC",
        highLightDescription: "OutputContainer_highLightDescription__bE_hC",
      };
    },
    78757: function (e) {
      e.exports = {
        wrapper: "ParaphraseButton_wrapper__7guiI",
        hide: "ParaphraseButton_hide__ImSQz",
        button: "ParaphraseButton_button__nWdlZ",
        differentResult: "ParaphraseButton_differentResult__pGLV_",
        buttons: "ParaphraseButton_buttons__Bv0fk",
        showDifferenceButton: "ParaphraseButton_showDifferenceButton__7O2oE",
        paraphraseContainer: "ParaphraseButton_paraphraseContainer__OxC0W",
        notEnough: "ParaphraseButton_notEnough__2yGh_",
      };
    },
    98634: function (e) {
      e.exports = { RateComponent: "RateComponent_RateComponent__9TGKl" };
    },
    2573: function (e) {
      e.exports = {
        container: "ReviewModal_container__VxYZz",
        buttonContainer: "ReviewModal_buttonContainer__a_oVS",
        cancel: "ReviewModal_cancel__pX3eN",
        rate: "ReviewModal_rate__sWR_y",
        review: "ReviewModal_review__iPrrd",
        button: "ReviewModal_button__3eTMB",
        send: "ReviewModal_send__evbRh",
        closeModal: "ReviewModal_closeModal__Ng7ld",
        success: "ReviewModal_success__x3Kh3",
      };
    },
    97109: function (e) {
      e.exports = { review: "ReviewSection_review__bfrJV" };
    },
    87825: function (e) {
      e.exports = {
        container: "SignUpModal_container__Y4hke",
        signup: "SignUpModal_signup__TafAZ",
        ad: "SignUpModal_ad__X9ZVW",
        close: "SignUpModal_close__ZVhWp",
        flex: "SignUpModal_flex__bwBH2",
        formWrapper: "SignUpModal_formWrapper__51PqV",
        SignUpWrapper: "SignUpModal_SignUpWrapper__qqLrq",
        submitButton: "SignUpModal_submitButton__RzC3m",
        googleButton: "SignUpModal_googleButton__Xb4_9",
      };
    },
    23604: function (e) {
      e.exports = {
        container: "SubscribeModal_container__PszV1",
        close: "SubscribeModal_close__qngEN",
        flex: "SubscribeModal_flex__6yKFT",
      };
    },
    37281: function (e) {
      e.exports = { arrow: "Arrow_arrow__cjUUv" };
    },
    96147: function (e) {
      e.exports = {
        switchVersions: "SwitchVersions_switchVersions__Afic5",
        versions: "SwitchVersions_versions__60Ltu",
      };
    },
    1944: function (e) {
      e.exports = {
        container: "UpgradeModal_container__L8Qd_",
        left: "UpgradeModal_left__EEj2R",
        right: "UpgradeModal_right__2nNRT",
        points: "UpgradeModal_points__BtvEq",
        planSelection: "UpgradeModal_planSelection__KsGkx",
        plan: "UpgradeModal_plan__n7F4z",
        banner: "UpgradeModal_banner__bjXBW",
        selected: "UpgradeModal_selected__8zQ74",
        button: "UpgradeModal_button__URpb7",
        review: "UpgradeModal_review__VGqhn",
        close: "UpgradeModal_close__wG_OA",
      };
    },
    28882: function (e) {
      e.exports = { InputContainer: "InputContainer_InputContainer__Ko23F" };
    },
    85952: function (e) {
      e.exports = {
        modalOverlay: "Modal_modalOverlay__6Ogqg",
        modalContainer: "Modal_modalContainer__0F7oA",
      };
    },
    88429: function (e) {
      e.exports = {
        modalOverlay: "Modal_modalOverlay__yPzK_",
        modalContainer: "Modal_modalContainer__RbPIQ",
      };
    },
    619: function (e) {
      e.exports = {
        container: "Questionnaire_container__obXRd",
        titleSection: "Questionnaire_titleSection__Wo9Ch",
        text: "Questionnaire_text__CZScZ",
        title: "Questionnaire_title__DitcB",
        cancel: "Questionnaire_cancel__8IcfT",
        options: "Questionnaire_options__vuT_Z",
        option: "Questionnaire_option__JNo_7",
        checkbox: "Questionnaire_checkbox__WZzg7",
        buttons: "Questionnaire_buttons__1Dgiq",
      };
    },
    58371: function (e) {
      e.exports = { container: "TextContainer_container__n2_WD" };
    },
    47229: function (e) {
      e.exports = { main: "main_main__fuNlW" };
    },
  },
  function (e) {
    e.O(
      0,
      [664, 675, 968, 875, 295, 117, 134, 335, 774, 888, 179],
      function () {
        return e((e.s = 75557));
      }
    ),
      (_N_E = e.O());
  },
]);
