(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [276],
  {
    70851: function (t, e, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/history",
        function () {
          return o(48309);
        },
      ]);
    },
    48309: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, {
          default: function () {
            return History;
          },
        });
      var i = o(85893),
        n = o(9008),
        r = o.n(n),
        a = o(61350),
        s = o.n(a),
        _ = o(67294),
        l = o(3957),
        c = o(72040),
        p = o(40592),
        d = o(87182),
        y = o(19966),
        u = o(9709);
      function History() {
        let [t, e] = (0, _.useState)([]),
          [o, n] = (0, _.useState)(1),
          [a, h] = (0, _.useState)(10),
          [g, m] = (0, _.useState)(!0);
        (0, _.useEffect)(() => {
          let fetchData = async () => {
            try {
              let t = await fetch("/api/user/history", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + (0, l.vQ)("token"),
                },
              });
              401 === t.status && (window.location.href = "/login");
              let o = await t.json();
              o.length > 0 && e(o);
            } catch (t) {
              (windonw.location.href = "/login"),
                console.error("Error fetching data:", t);
            } finally {
              m(!1);
            }
          };
          fetchData();
        }, []);
        let deleteHistoryItem = (o, i) => {
          o.preventDefault();
          let n = t.filter((t) => t.id !== i);
          e(n),
            fetch("/api/user/history_item", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + (0, l.vQ)("token"),
              },
              body: JSON.stringify({ id: i }),
            });
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r(), {
              children: [
                (0, i.jsx)("title", { children: "Humanize AI" }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content:
                    "A paraphrasing tool to avoid chatGPT detector, like GPTZero. Humanize AI rephrases AI-content into an undetectable version for AI plagiarism detectors.",
                }),
                (0, i.jsx)("meta", {
                  name: "keywords",
                  content:
                    "bypass gptzero, bypass gpt zero, gpt zero bypass, avoid gptzero, avoid gpt zero, gpt zero, gpt inf, gptinf, gptzero, chatgpt, gpt3, gpt2, gpt, paraphrasing, paraphrase, paraphraser, paraphrasing tool, paraphrase generator, rewrite text, essay",
                }),
                (0, i.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, i.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/apple-touch-icon.png",
                }),
                (0, i.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/favicon-32x32.png",
                }),
                (0, i.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/favicon-16x16.png",
                }),
                (0, i.jsx)("link", {
                  rel: "manifest",
                  href: "/site.webmanifest",
                }),
                (0, i.jsx)("meta", {
                  property: "og:title",
                  content: "Bypass GPTZero detection - Humanize AI",
                }),
                (0, i.jsx)("meta", { property: "og:type", content: "website" }),
                (0, i.jsx)("meta", {
                  property: "og:description",
                  content:
                    "A paraphrasing tool to avoid chatGPT detector, like GPTZero, in one click",
                }),
                (0, i.jsx)("meta", { property: "og:locale", content: "en_US" }),
                (0, i.jsx)("meta", {
                  property: "og:url",
                  content: "https://www.humanizeai.pro",
                }),
                (0, i.jsx)("meta", {
                  name: "robots",
                  content: "noindex, nofollow",
                }),
              ],
            }),
            (0, i.jsxs)("main", {
              className: s().main,
              children: [
                (0, i.jsx)(c.Z, { links: p.HZ, openLog: !1 }),
                g
                  ? (0, i.jsx)("div", {
                      style: { height: "80vh", paddingTop: "300px" },
                      children: (0, i.jsx)(u.Z, {}),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: s().container,
                          children: t
                            .slice((o - 1) * a, o * a)
                            .map((t, e) =>
                              (0, i.jsxs)(
                                "a",
                                {
                                  className: s().historyItem,
                                  href: "/history/"
                                    .concat(
                                      [...Array(6)]
                                        .map(
                                          () => Math.random().toString(36)[7]
                                        )
                                        .join("")
                                    )
                                    .concat(t.id),
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: s().timeContainer,
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: s().datetime,
                                          children: (0, y.M)(t.datetime),
                                        }),
                                        (0, i.jsx)("div", {
                                          className: s().time,
                                          children: (0, y.B)(t.datetime),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("div", {
                                      className: s().text,
                                      children: t.text_before,
                                    }),
                                    (0, i.jsx)("div", {
                                      className: s().delete,
                                      onClick: (e) =>
                                        deleteHistoryItem(e, t.id),
                                      children: "Delete",
                                    }),
                                  ],
                                },
                                e
                              )
                            ),
                        }),
                        (0, i.jsxs)("div", {
                          className: s().pageButtons,
                          children: [
                            (0, i.jsx)("button", {
                              className: s().pageButton,
                              disabled: 1 === o,
                              onClick: () => n(o - 1),
                              children: " < Previous",
                            }),
                            (0, i.jsxs)("span", {
                              className: s().pageNum,
                              children: [o, " / ", Math.ceil(t.length / a)],
                            }),
                            (0, i.jsx)("button", {
                              className: s().pageButton,
                              disabled: o === Math.ceil(t.length / a),
                              onClick: () => n(o + 1),
                              children: "Next >",
                            }),
                          ],
                        }),
                      ],
                    }),
                (0, i.jsx)("div", { style: { height: 100 } }),
                (0, i.jsx)(d.Z, { links: p.dk, openLog: !1 }),
              ],
            }),
          ],
        });
      }
    },
    61350: function (t) {
      t.exports = {
        container: "History_container__Zlbf7",
        main: "History_main__WdCZa",
        loader: "History_loader__TD66X",
        historyItem: "History_historyItem__oSGC3",
        delete: "History_delete__ZXF73",
        datetime: "History_datetime__yfbSA",
        time: "History_time__uk8Um",
        text: "History_text__s_k4k",
        pageButtons: "History_pageButtons__xVHZG",
        pageNum: "History_pageNum__PO9P_",
        pageButton: "History_pageButton__oI_Sw",
        pageButton2: "History_pageButton2__d4L28",
        input: "History_input__S72ji",
        header: "History_header__cl4dB",
        signup: "History_signup__ID4Lv",
        sections: "History_sections__jKkQO",
        section1: "History_section1__Agt33",
        gradient__border: "History_gradient__border___Elku",
        buttonComp: "History_buttonComp__ksN0x",
        inputContainer: "History_inputContainer___Ld84",
        inputContainerAlert: "History_inputContainerAlert__k7DRJ",
        buttonSelectionContainer: "History_buttonSelectionContainer__jpbGV",
        buttonContainer0: "History_buttonContainer0__XIhUH",
        textCount: "History_textCount__NRBbN",
        section2: "History_section2__zefpK",
        title: "History_title__EGCvO",
        outputContainer: "History_outputContainer___hwlq",
        output: "History_output__YQY_O",
        copyToClipboard: "History_copyToClipboard__WUOcq",
        thumbUp: "History_thumbUp__I8aUj",
        thumbDown: "History_thumbDown__A1STS",
        loaderContainer: "History_loaderContainer___nIFg",
        rotating: "History_rotating__L1aB6",
        disclaimer: "History_disclaimer__YvVRM",
        allert: "History_allert__Bf6AH",
        close: "History_close__xspp_",
        allertLogin: "History_allertLogin__wdy63",
        review: "History_review__GEWWa",
        buttonContainer: "History_buttonContainer__PzZBk",
        loadingBarContainer: "History_loadingBarContainer__orL1_",
        loadingMessage: "History_loadingMessage__kn8EP",
        loadingBar: "History_loadingBar__SIULC",
        loadingBarInner: "History_loadingBarInner__0XabV",
        tooltipSelectContainer0: "History_tooltipSelectContainer0__UN81i",
        tooltipSelectContainer1: "History_tooltipSelectContainer1___ZoSz",
        selectContainer1: "History_selectContainer1__wghSO",
        tooltipContainer1: "History_tooltipContainer1__JbfqK",
        earnProgram: "History_earnProgram__k5hIj",
        outputText: "History_outputText__PN_3q",
        t__added: "History_t__added__EuCKt",
        t__removed: "History_t__removed__3lJW9",
        t__not_edited: "History_t__not_edited__1Cmhx",
        score: "History_score__OtXh_",
        scoreGreen: "History_scoreGreen__Ya00X",
        scoreRed: "History_scoreRed___AWve",
        scoreYellow: "History_scoreYellow__BK3Tx",
        request: "History_request__i_I5l",
        buttonSelectionContainer_: "History_buttonSelectionContainer___fTmyy",
        loadingBarText: "History_loadingBarText__KiqEQ",
      };
    },
  },
  function (t) {
    t.O(0, [664, 675, 74, 774, 888, 179], function () {
      return t((t.s = 70851));
    }),
      (_N_E = t.O());
  },
]);
