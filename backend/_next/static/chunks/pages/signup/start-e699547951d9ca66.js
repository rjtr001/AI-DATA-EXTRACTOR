(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [75],
  {
    48298: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/signup/start",
        function () {
          return n(14165);
        },
      ]);
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
    51428: function (e, t, n) {
      "use strict";
      n(85893), n(67294), n(25675), n(26486), n(36968);
    },
    62118: function (e, t, n) {
      "use strict";
      var o = n(85893);
      n(67294);
      var i = n(84184),
        r = n.n(i);
      t.Z = (e) => {
        let {
          children: t,
          onClick: n,
          type: i = "button",
          className: a = "",
          disabled: s = !1,
          variant: l = "primary",
          size: c = "small",
          ...u
        } = e;
        return (0, o.jsx)("button", {
          type: i,
          className: ""
            .concat(r().button, " ")
            .concat(
              ((e) => {
                var t;
                let n = { small: r().small, big: r().big };
                return null !== (t = n[e]) && void 0 !== t ? t : r().small;
              })(c),
              " "
            )
            .concat(
              ((e) => {
                var t;
                let n = {
                  primary: r().primary,
                  secondary: r().secondary,
                  circle: r().circle,
                };
                return null !== (t = n[e]) && void 0 !== t ? t : r().primary;
              })(l),
              " "
            )
            .concat(a),
          onClick: n,
          disabled: s,
          ...u,
          children: t,
        });
      };
    },
    87182: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Footer_Footer;
        },
      });
      var o = n(85893);
      n(67294);
      var i = n(54580),
        r = n(41664),
        a = n.n(r),
        s = n(95112),
        l = n.n(s),
        Footer_Footer = (e) => {
          let { link: t, links: n, openLog: r = !0 } = e;
          return (0, o.jsx)("footer", {
            className: l().FooterWrapper,
            children: (0, o.jsxs)("div", {
              className: l().test,
              children: [
                (0, o.jsxs)("div", {
                  className: l().flex,
                  children: [
                    (0, o.jsxs)(a(), {
                      href: t || "/",
                      className: l().logo,
                      children: [
                        (0, o.jsxs)("svg", {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 50 50",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, o.jsx)("g", {
                              "clip-path": "url(#clip0_4101_13191)",
                              children: (0, o.jsx)("path", {
                                d: "M25.3854 30.7153C27.2518 30.7153 28.8844 30.1078 30.2834 28.8929C31.6823 27.6776 32.3818 26.1941 32.3818 24.4424C32.3818 22.9753 31.9091 21.7083 30.9636 20.6413C30.0181 19.5743 28.8547 19.0408 27.4735 19.0408C26.3238 19.0408 25.3308 19.4278 24.4943 20.2017C23.6575 20.9757 23.2391 21.8814 23.2391 22.9189C23.2391 23.4415 23.3372 23.9147 23.5334 24.3387C23.7292 24.7623 24.0018 25.1571 24.3511 25.5231L25.5427 24.5116C25.2837 24.3022 25.0861 24.0573 24.95 23.7767C24.8139 23.4965 24.7459 23.2193 24.7459 22.945C24.7459 22.388 24.9865 21.8491 25.4677 21.3283C25.9493 20.8075 26.6188 20.547 27.4761 20.547C28.3295 20.547 29.1028 20.9047 29.7959 21.62C30.4889 22.3352 30.8354 23.275 30.8354 24.4392C30.8354 25.6847 30.3129 26.7844 29.2677 27.7382C28.2226 28.692 26.9358 29.1689 25.4073 29.1689C23.6427 29.1689 22.1044 28.4424 20.7922 26.9892C19.4801 25.5361 18.824 23.7712 18.824 21.6944C18.824 20.617 19.0304 19.5748 19.4433 18.5679C19.8558 17.5609 20.4728 16.6469 21.2943 15.8257L20.2021 14.8319C19.2816 15.783 18.5707 16.8415 18.0693 18.0075C17.5683 19.1731 17.3177 20.3977 17.3177 21.6814C17.3177 24.1526 18.0943 26.276 19.6474 28.0517C21.2005 29.8274 23.1132 30.7153 25.3854 30.7153ZM15.9235 42.8267V34.8965C13.9311 33.2337 12.3913 31.3113 11.3042 29.1293C10.217 26.9474 9.67346 24.7057 9.67346 22.4043C9.67346 18.1706 11.1703 14.5705 14.1641 11.6038C17.1578 8.63714 20.7854 7.15381 25.0469 7.15381C28.2396 7.15381 31.1782 8.0328 33.8625 9.79079C36.5469 11.5491 38.3183 13.8043 39.1766 16.5564L42.0532 26.0481C42.1868 26.5085 42.1221 26.92 41.8589 27.2825C41.5953 27.6453 41.2268 27.8267 40.7532 27.8267H37.8464V35.0382C37.8464 35.8243 37.575 36.4856 37.0323 37.022C36.4896 37.5585 35.8316 37.8267 35.0584 37.8267H29.0964V42.8267H27.5901V36.3205H35.0584C35.4188 36.3205 35.7226 36.2002 35.9698 35.9595C36.2167 35.7193 36.3401 35.4121 36.3401 35.0382V26.3205H40.513L37.7985 17.2137C37.0214 14.6832 35.4401 12.6248 33.0547 11.0387C30.6696 9.45294 28.0019 8.66006 25.0516 8.66006C21.1762 8.66006 17.8955 10.0059 15.2094 12.6976C12.5229 15.3892 11.1797 18.6528 11.1797 22.4882C11.1797 24.5476 11.6148 26.4988 12.4849 28.3418C13.3551 30.1845 14.5801 31.7656 16.1599 33.0851L17.4297 34.1991V42.8267H15.9235Z",
                                fill: "#80F2FF",
                              }),
                            }),
                            (0, o.jsx)("defs", {
                              children: (0, o.jsx)("clipPath", {
                                id: "clip0_4101_13191",
                                children: (0, o.jsx)("rect", {
                                  width: "50",
                                  height: "50",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                        "Humanize AI",
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: l().footerNavigation,
                      children: (0, o.jsx)(i.Z, { links: n, openLog: r }),
                    }),
                  ],
                }),
                (0, o.jsx)("p", {
                  children: "\xa9 2024 humanizeai.pro. All rights reserved.",
                }),
              ],
            }),
          });
        };
    },
    51077: function (e, t, n) {
      "use strict";
      var o = n(85893),
        i = n(28882),
        r = n.n(i);
      t.Z = (e) => {
        let {
          text: t,
          type: n,
          email: i,
          onChange: a,
          placeholder: s,
          className: l,
          style: c,
        } = e;
        return (0, o.jsxs)("div", {
          className: "".concat(r().InputContainer, " ").concat(l),
          style: c,
          children: [
            (0, o.jsx)("p", { children: t }),
            (0, o.jsx)("input", {
              type: n,
              value: i,
              onChange: a,
              placeholder: s,
            }),
          ],
        });
      };
    },
    34340: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Login_LoginHeader;
        },
      });
      var o = n(85893),
        i = n(25675),
        r = n.n(i),
        a = {
          src: "/_next/static/media/logo2.efe50d78.svg",
          height: 50,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = n(9432),
        l = n.n(s),
        c = n(41664),
        u = n.n(c),
        Login_LoginHeader = (e) => {
          let { link: t } = e;
          return (0, o.jsx)("header", {
            children: (0, o.jsx)(u(), {
              href: t || "/",
              className: l().loginHeader,
              children: (0, o.jsx)(r(), { src: a, width: 60, alt: "Logo" }),
            }),
          });
        };
    },
    54580: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Navigation_Navigation;
        },
      });
      var o = n(85893);
      n(67294);
      var i = n(41664),
        r = n.n(i),
        a = n(11163),
        s = n(20011),
        l = n.n(s),
        Navigation_Navigation = (e) => {
          let { links: t, openLog: n = !0 } = e,
            i = (0, a.useRouter)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("ul", {
                className: l().LinkingWrapper,
                children: t.map((e, t) =>
                  (0, o.jsx)(
                    "li",
                    {
                      children: (0, o.jsx)(r(), {
                        className: ""
                          .concat(l().navLink, " ")
                          .concat(i.pathname === e.path ? l().activeLink : ""),
                        href: e.path,
                        children: e.label,
                      }),
                    },
                    t
                  )
                ),
              }),
              n &&
                (0, o.jsxs)("div", {
                  className: l().logContainer,
                  children: [
                    (0, o.jsx)(r(), {
                      className: l().loginLink,
                      href: "/login",
                      children: "Log in",
                    }),
                    (0, o.jsx)(r(), {
                      className: l().signupLink,
                      href: "/signup/start",
                      children: "Sign up",
                    }),
                  ],
                }),
            ],
          });
        };
    },
    40592: function (e, t, n) {
      "use strict";
      n.d(t, {
        HZ: function () {
          return r;
        },
        Ok: function () {
          return o;
        },
        dk: function () {
          return i;
        },
      });
      let o = [
          { label: "Editor", path: "/" },
          { label: "Pricing", path: "/pricing" },
          { label: "History", path: "/history" },
          { label: "Account", path: "/account" },
        ],
        i = [
          { label: "Editor ", path: "/" },
          { label: "Pricing ", path: "/pricing" },
          {
            label: "Feature Request & Issue Report",
            path: "https://humanizeai.frill.co",
          },
          { label: "Terms of Service", path: "/tos" },
          { label: "Privacy Policy", path: "/privacy" },
        ],
        r = [
          { label: "Editor", path: "/" },
          { label: "History", path: "/history" },
          { label: "Account", path: "/account" },
        ];
    },
    86022: function (e, t, n) {
      "use strict";
      n.d(t, {
        SN: function () {
          return r;
        },
        lo: function () {
          return i;
        },
        m8: function () {
          return o;
        },
      });
      let o =
          "650815245931-odo6j8ltlck7rv71ktr4vj7jkrhmu9fh.apps.googleusercontent.com",
        i = "".concat("https://www.humanizeai.pro", "/api/oauth/google"),
        r = "6Ldomx8kAAAAAAxDRmkI4lvA-N66IcaR_FRGEFBL";
    },
    14165: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Signup;
          },
        });
      var o = n(85893),
        i = n(9008),
        r = n.n(i),
        a = n(87182),
        s = n(40592),
        l = n(34340),
        c = n(34853),
        u = n(67294),
        p = n(11163),
        _ = n.n(p),
        h = n(71188),
        d = n.n(h),
        g = n(41664),
        m = n.n(g),
        C = n(77181);
      n(86022);
      var f = n(3957),
        x = n(45022),
        v = n(62118),
        j = n(51077),
        SignUpContent = () => {
          let [e, t] = (0, u.useState)(""),
            [n, i] = (0, u.useState)(null),
            [r, a] = (0, u.useState)(!1),
            s = (0, u.useRef)(!1),
            l = (0, u.useRef)(null),
            [p, h] = (0, u.useState)(!1),
            getUserInfo = async () => {
              let e = (0, f.vQ)("token");
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
          (0, u.useEffect)(() => {
            x.n.track("/signup/start page loaded"), getUserInfo();
          }, []);
          let validateInput = (e) => {
              if (0 == e.length)
                throw (a(!0), Error("Please, enter email address"));
              i(null);
            },
            [g, y] = (0, u.useState)(!1),
            [w, k] = (0, u.useState)(!1),
            N = (0, u.useRef)(null),
            b = "6Ldk4O4pAAAAALWK4QNSL5zK5998bGdV5PCNbYLZ";
          (0, u.useEffect)(() => {
            let e = document.createElement("script");
            return (
              (e.src =
                "https://www.google.com/recaptcha/enterprise.js?render=".concat(
                  b
                )),
              (N.current = e),
              document.body.appendChild(e),
              () => {
                document.body.removeChild(N.current);
              }
            );
          }, []);
          let handleSubmit = async (t) => {
              let n;
              if ((t.preventDefault(), (s.current = !0), w))
                (n = l.current.getValue()), l.current.reset();
              else {
                async function recaptchaCall() {
                  for (
                    window.grecaptcha.enterprise.ready(async () => {
                      n = await window.grecaptcha.enterprise.execute(b, {
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
                    recaptchaToken: { token: n, type: w ? "checkbox" : "auto" },
                  }),
                });
                if (!t.ok) throw Error((await t.json()).message);
                x.n.track("/signup/start button clicked"),
                  _().push("/signup/authemail?email=" + e),
                  l.current.reset();
              } catch (e) {
                i(e.message);
              }
            },
            errorChange = (e) => {
              if (s)
                try {
                  validateInput(e);
                } catch (e) {
                  i(e.message);
                }
            };
          return (
            (0, u.useRef)(null),
            (0, o.jsx)("div", {
              className: d().SignUpWrapper,
              children: (0, o.jsx)("div", {
                className: d().formWrapper,
                children: (0, o.jsxs)("form", {
                  onSubmit: handleSubmit,
                  children: [
                    (0, o.jsx)("h1", { children: "Sign Up" }),
                    (0, o.jsx)(j.Z, {
                      type: "email",
                      text: "Email",
                      value: e,
                      onChange: (e) => {
                        t(e.target.value), errorChange(e.target.value);
                      },
                      placeholder: "Type your email",
                    }),
                    (0, o.jsx)("div", {
                      style: { zIndex: 1e3, display: w ? "block" : "none" },
                      children: (0, o.jsx)(c.Z, {
                        sitekey: "6LdQ1e4pAAAAAM7KV4ZRItvm_QU-iIw8vT4nW0I_",
                        ref: l,
                        theme: "dark",
                      }),
                    }),
                    n && (0, o.jsx)("p", { className: d().error, children: n }),
                    (0, o.jsx)(v.Z, {
                      size: "big",
                      type: "submit",
                      className: d().submitButton,
                      children: "Sign Up",
                    }),
                    (0, o.jsx)(C.Z, { title: "Sign Up with Google" }),
                    (0, o.jsxs)("p", {
                      className: d().account,
                      children: [
                        "Already have an account? ",
                        (0, o.jsx)(m(), { href: "/login", children: "Log in" }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
      function Signup() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(r(), {
              children: [
                (0, o.jsx)("title", { children: "Humanize AI - Sign Up" }),
                (0, o.jsx)("meta", {
                  name: "description",
                  content: "Generated by create next app",
                }),
                (0, o.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, o.jsx)("meta", {
                  name: "robots",
                  content: "NOINDEX,NOFOLLOW",
                }),
                (0, o.jsx)("link", {
                  rel: "stylesheet",
                  as: "style",
                  href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
                }),
              ],
            }),
            (0, o.jsxs)("main", {
              children: [
                (0, o.jsx)(l.Z, {}),
                (0, o.jsx)(SignUpContent, {}),
                (0, o.jsx)(a.Z, { links: s.dk }),
              ],
            }),
          ],
        });
      }
      n(51428);
    },
    77181: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GoogleLoginButton;
        },
      });
      var o = n(85893),
        i = n(65190),
        r = n.n(i),
        a = n(86022);
      let getGoogleUrl = () => {
        let e = {
            redirect_uri: a.lo,
            client_id: a.m8,
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
      var s = n(41664),
        l = n.n(s);
      function GoogleLoginButton(e) {
        return (0, o.jsx)(l(), {
          href: getGoogleUrl(),
          className: r().linkContainer,
          onClick: () => {
            e.onClick();
          },
          children: (0, o.jsxs)("div", {
            className: ""
              .concat(r().googleButtonContainer, " ")
              .concat(e.className),
            children: [
              (0, o.jsx)("span", {
                className: r().googleButtonIcon,
                children: (0, o.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 48 48",
                  width: "24px",
                  height: "24px",
                  children: [
                    (0, o.jsx)("path", {
                      fill: "#FFC107",
                      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
                    }),
                    (0, o.jsx)("path", {
                      fill: "#FF3D00",
                      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
                    }),
                    (0, o.jsx)("path", {
                      fill: "#4CAF50",
                      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
                    }),
                    (0, o.jsx)("path", {
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
    95112: function (e) {
      e.exports = {
        FooterWrapper: "Footer_FooterWrapper__82Jk5",
        test: "Footer_test__G3wOK",
        flex: "Footer_flex__szyW6",
        logo: "Footer_logo__tSFSn",
        footerNavigation: "Footer_footerNavigation__hVRSt",
      };
    },
    28882: function (e) {
      e.exports = { InputContainer: "InputContainer_InputContainer__Ko23F" };
    },
    9432: function (e) {
      e.exports = { loginHeader: "LoginHeader_loginHeader__4mJPh" };
    },
    20011: function (e) {
      e.exports = {
        LinkingWrapper: "Navigation_LinkingWrapper__5uT_r",
        navLink: "Navigation_navLink__2_3uc",
        activeLink: "Navigation_activeLink__a2ZCm",
        tryItNow: "Navigation_tryItNow__WLE2e",
        loginLink: "Navigation_loginLink__fnsD8",
        signupLink: "Navigation_signupLink__kreWp",
        logContainer: "Navigation_logContainer__uFx3R",
      };
    },
    71188: function (e) {
      e.exports = {
        SignUpWrapper: "SignUp_SignUpWrapper__esydG",
        main: "SignUp_main__NxkM7",
        formWrapper: "SignUp_formWrapper__PfUiI",
        captcha: "SignUp_captcha__SjVXS",
        error: "SignUp_error__xhz6g",
        submitButton: "SignUp_submitButton__8MWSO",
        account: "SignUp_account__RGBbE",
      };
    },
  },
  function (e) {
    e.O(0, [664, 675, 968, 875, 774, 888, 179], function () {
      return e((e.s = 48298));
    }),
      (_N_E = e.O());
  },
]);
