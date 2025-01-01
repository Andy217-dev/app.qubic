"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [830],
  {
    936830: (qe, tt, r) => {
      r.r(tt), r.d(tt, { StakingModule: () => Ze });
      var p = r(360177),
        T = r(274710),
        m = r(474523),
        et = r(792460),
        _t = r(831861),
        z = r(229835),
        $ = r(805116),
        _ = r(93359),
        nt = r(399172),
        w = r(96354),
        b = r(84412),
        D = r(956977),
        k = r(186648),
        P = r(905964),
        v = r(525558),
        it = r(699437),
        R = r(607673),
        ft = r(71985),
        yt = r(758750),
        kt = r(442326),
        Ct = r(300983),
        wt = r(854360),
        xt = r(309326),
        F = r(788141),
        C = (function (i) {
          return (
            (i.INSUFFICIENT_BALANCE_RBC = "INSUFFICIENT_BALANCE_RBC"),
            (i.EMPTY_AMOUNT = "EMPTY_AMOUNT"),
            (i.LESS_THEN_MINIMUM = "LESS_THEN_MINIMUM"),
            (i.NULL = "NULL"),
            (i.NEED_APPROVE = "NEED_APPROVE"),
            (i.STAKING_CLOSED = "STAKING_CLOSED"),
            i
          );
        })(C || {}),
        W = r(240800),
        t = r(617705),
        E = r(272782),
        N = r(640920),
        x = r(873955),
        S = r(228437);
      const Tt = function () {
        return { decimals: 2 };
      };
      let St = (() => {
        class i {
          constructor(e) {
            (this.context = e),
              (this.amount = this.context.data.amount),
              (this.duration = this.context.data.duration),
              (this.unlockDate = this.context.data.unlockDate);
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(t.rXU(W.su));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-new-position-modal"]],
            decls: 19,
            vars: 30,
            consts: [
              [1, "new-position__info"],
              [1, "title"],
              [1, "text"],
              [
                "tuiButton",
                "",
                "type",
                "button",
                "size",
                "m",
                "appearance",
                "primary",
                1,
                "agree",
                3,
                "click",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (t.j41(0, "div", 0)(1, "div", 1),
                t.EFF(2),
                t.nI1(3, "translate"),
                t.k0s(),
                t.j41(4, "div", 2)(5, "span"),
                t.EFF(6),
                t.nI1(7, "withRound"),
                t.nI1(8, "bigNumberFormat"),
                t.k0s(),
                t.EFF(9),
                t.nI1(10, "translate"),
                t.nI1(11, "translate"),
                t.nrm(12, "br"),
                t.EFF(13),
                t.nI1(14, "translate"),
                t.nI1(15, "date"),
                t.k0s()(),
                t.j41(16, "button", 3),
                t.bIt("click", function () {
                  return a.context.completeWith(!0);
                }),
                t.EFF(17),
                t.nI1(18, "translate"),
                t.k0s()),
                2 & n &&
                  (t.R7$(2),
                  t.JRh(t.bMT(3, 10, "staking.newPositionModal.title")),
                  t.R7$(3),
                  t.AVh("tui-skeleton", !a.amount),
                  t.R7$(1),
                  t.SpI(
                    " ",
                    t.brH(
                      7,
                      12,
                      t.bMT(8, 16, a.amount),
                      "fixedValue",
                      t.lJ4(29, Tt)
                    ),
                    ""
                  ),
                  t.R7$(3),
                  t.E5c(
                    " ",
                    t.bMT(10, 18, "staking.stakeForm.hint.lockedRBCExpiresIn"),
                    " ",
                    a.duration,
                    " ",
                    t.bMT(11, 20, "staking.common.months"),
                    ". "
                  ),
                  t.R7$(4),
                  t.Lme(
                    "",
                    t.bMT(14, 22, "staking.stakeForm.hint.lockedUntil"),
                    " ",
                    t.i5U(15, 24, a.unlockDate, "mediumDate"),
                    " "
                  ),
                  t.R7$(4),
                  t.SpI(
                    " ",
                    t.bMT(18, 27, "staking.newPositionModal.buttonText"),
                    "\n"
                  ));
            },
            dependencies: [E.SM, p.vh, N.p, x.D9, S.l],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.new-position__info[_ngcontent-%COMP%]{margin-bottom:var(--tui-padding-m);padding:var(--tui-padding-xl);background:var(--io-background);border-radius:var(--tui-radius-m)}.title[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:400;font-size:15px;line-height:15px;letter-spacing:.45px;margin-bottom:var(--tui-padding-m);text-align:center}@media (max-width: 651px){.title[_ngcontent-%COMP%]{display:none}}.text[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:400;font-size:15px;line-height:18px;letter-spacing:.45px;margin:0 auto;text-align:center}.agree[_ngcontent-%COMP%]{display:block;width:100%}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var X = r(181170),
        d = r(455748),
        B = r(60135),
        Y = r(513711),
        A = r(564035);
      const It = function () {
        return { decimals: 10 };
      };
      function Ot(i, s) {
        if (
          (1 & i &&
            (t.j41(0, "span", 7),
            t.nrm(1, "br"),
            t.EFF(2),
            t.nI1(3, "translate"),
            t.j41(4, "span", 3),
            t.EFF(5),
            t.nI1(6, "withRound"),
            t.nI1(7, "bigNumberFormat"),
            t.k0s(),
            t.EFF(8),
            t.nI1(9, "translate"),
            t.k0s()),
          2 & i)
        ) {
          const e = t.XpG();
          t.R7$(2),
            t.SpI(" ", t.bMT(3, 5, "staking.withdrawModal.text_3"), " "),
            t.R7$(2),
            t.AVh("tui-skeleton", !e.totalNftRewards),
            t.R7$(1),
            t.SpI(
              " ",
              t.brH(
                6,
                7,
                t.bMT(7, 11, e.totalNftRewards),
                "fixedValue",
                t.lJ4(15, It)
              ),
              " ETH"
            ),
            t.R7$(3),
            t.SpI(" ", t.bMT(9, 13, "staking.withdrawModal.text_4"), " ");
        }
      }
      function Pt(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.qex(0),
            t.j41(1, "app-rubic-button", 8),
            t.bIt("onClick", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.switchNetwork());
            }),
            t.EFF(2),
            t.nI1(3, "translate"),
            t.k0s(),
            t.bVm();
        }
        if (2 & i) {
          const e = t.XpG();
          t.R7$(1),
            t.Y8G("disabled", e.isMobile),
            t.R7$(1),
            t.SpI(
              " ",
              e.isMobile
                ? "Choose Arbitrum network in your wallet"
                : t.bMT(3, 2, "staking.common.switchNetworkToArbitrum"),
              " "
            );
        }
      }
      function Rt(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-rubic-button", 9),
            t.bIt("onClick", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.context.completeWith(!0));
            }),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.k0s();
        }
        2 & i &&
          (t.R7$(1),
          t.SpI(" ", t.bMT(2, 1, "staking.withdrawModal.withdraw"), " "));
      }
      const Et = function () {
        return { decimals: 2 };
      };
      let Nt = (() => {
        class i {
          constructor(e, n, a) {
            (this.walletConnectorService = e),
              (this.headerStore = n),
              (this.context = a),
              (this.amount = this.context.data.amount),
              (this.totalNftRewards = this.context.data.totalNftRewards),
              (this.needSwitchNetwork$ = this.context.data.needSwitchNetwork$),
              (this.isMobile = this.headerStore.isMobile);
          }
          switchNetwork() {
            var e = this;
            return (0, m.A)(function* () {
              yield e.walletConnectorService.switchChain(
                d.BLOCKCHAIN_NAME.ARBITRUM
              );
            })();
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(t.rXU(X.c), t.rXU(B.X), t.rXU(W.su));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-withdraw-modal"]],
            decls: 21,
            vars: 27,
            consts: [
              [
                "inlineSVG",
                "assets/images/icons/crosshair.svg",
                1,
                "t-close",
                3,
                "click",
              ],
              [1, "title"],
              [1, "text", "text__wrapper"],
              [1, "text__amount"],
              ["class", "text", 4, "ngIf"],
              [4, "ngIf", "ngIfElse"],
              ["withdraw", ""],
              [1, "text"],
              [
                "appearance",
                "primary",
                1,
                "action-btn",
                3,
                "disabled",
                "onClick",
              ],
              ["appearance", "primary", 1, "action-btn", 3, "onClick"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (t.j41(0, "div", 0),
                  t.bIt("click", function () {
                    return a.context.completeWith(!1);
                  }),
                  t.k0s(),
                  t.j41(1, "div", 1),
                  t.EFF(2),
                  t.nI1(3, "translate"),
                  t.k0s(),
                  t.j41(4, "div", 2),
                  t.EFF(5),
                  t.nI1(6, "translate"),
                  t.nrm(7, "br"),
                  t.EFF(8),
                  t.nI1(9, "translate"),
                  t.j41(10, "span", 3),
                  t.EFF(11),
                  t.nI1(12, "withRound"),
                  t.nI1(13, "bigNumberFormat"),
                  t.k0s(),
                  t.EFF(14),
                  t.nI1(15, "translate"),
                  t.DNE(16, Ot, 10, 16, "span", 4),
                  t.k0s(),
                  t.DNE(17, Pt, 4, 4, "ng-container", 5),
                  t.nI1(18, "async"),
                  t.DNE(19, Rt, 3, 3, "ng-template", null, 6, t.C5r)),
                2 & n)
              ) {
                const o = t.sdS(20);
                t.R7$(2),
                  t.JRh(t.bMT(3, 10, "staking.withdrawModal.title")),
                  t.R7$(3),
                  t.SpI(" ", t.bMT(6, 12, "staking.withdrawModal.text_1"), ""),
                  t.R7$(3),
                  t.SpI(
                    " ",
                    t.bMT(9, 14, "staking.withdrawModal.text_1-1"),
                    " "
                  ),
                  t.R7$(2),
                  t.AVh("tui-skeleton", !a.amount),
                  t.R7$(1),
                  t.SpI(
                    "",
                    t.brH(
                      12,
                      16,
                      t.bMT(13, 20, a.amount),
                      "fixedValue",
                      t.lJ4(26, Et)
                    ),
                    " RBC"
                  ),
                  t.R7$(3),
                  t.SpI(
                    " ",
                    t.bMT(15, 22, "staking.withdrawModal.text_2"),
                    " "
                  ),
                  t.R7$(2),
                  t.Y8G(
                    "ngIf",
                    (null == a.totalNftRewards
                      ? null
                      : a.totalNftRewards.isFinite) &&
                      (null == a.totalNftRewards
                        ? null
                        : a.totalNftRewards.toNumber()) > 0
                  ),
                  t.R7$(1),
                  t.Y8G("ngIf", t.bMT(18, 24, a.needSwitchNetwork$))(
                    "ngIfElse",
                    o
                  );
              }
            },
            dependencies: [p.bT, Y.l, A.ll, p.Jj, N.p, x.D9, S.l],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{position:relative;display:block;padding:40px 0 10px}.t-close[_ngcontent-%COMP%]{position:absolute;top:0!important;right:5px!important;width:12px;height:12px;cursor:pointer}@media (max-width: 651px){.t-close[_ngcontent-%COMP%]{display:none}}.t-close[_ngcontent-%COMP%]     svg path{stroke:#000}html.dark[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]     svg path, html.dark   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]     svg path{stroke:#fff}.title[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:600;font-size:24px;line-height:29px;letter-spacing:normal;margin-bottom:26px;text-align:center}@media (max-width: 651px){.title[_ngcontent-%COMP%]{display:none}}.text[_ngcontent-%COMP%]{color:var(--secondary-text);font-weight:600;font-size:18px;line-height:29px;letter-spacing:normal;margin:0 auto 48px;text-align:center}.text__wrapper[_ngcontent-%COMP%]{padding:0 5px}.text__amount[_ngcontent-%COMP%]{color:var(--primary-color)}.action-btn[_ngcontent-%COMP%]{display:block;max-width:275px;margin:0 auto}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function At(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.qex(0),
            t.j41(1, "app-rubic-button", 5),
            t.bIt("onClick", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.switchNetwork());
            }),
            t.EFF(2),
            t.nI1(3, "translate"),
            t.k0s(),
            t.bVm();
        }
        if (2 & i) {
          const e = t.XpG();
          t.R7$(1),
            t.Y8G("disabled", e.isMobile),
            t.R7$(1),
            t.SpI(
              " ",
              e.isMobile
                ? "Choose Arbitrum network in your wallet"
                : t.bMT(3, 2, "staking.common.switchNetworkToArbitrum"),
              " "
            );
        }
      }
      function Ft(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-rubic-button", 6),
            t.bIt("onClick", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.context.completeWith(!0));
            }),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.k0s();
        }
        2 & i &&
          (t.R7$(1),
          t.SpI(" ", t.bMT(2, 1, "staking.claimRewardsModal.claim"), " "));
      }
      const $t = function () {
          return { decimals: 4 };
        },
        Dt = function () {
          return { decimals: 10 };
        };
      let Bt = (() => {
        class i {
          constructor(e, n, a, o) {
            (this.walletConnectorService = e),
              (this.cdr = n),
              (this.headerStore = a),
              (this.context = o),
              (this.rewards = this.context.data.rewards),
              (this.needSwitchNetwork$ = this.context.data.needSwitchNetwork$),
              (this.isMobile = this.headerStore.isMobile);
          }
          switchNetwork() {
            var e = this;
            return (0, m.A)(function* () {
              yield e.walletConnectorService.switchChain(
                d.BLOCKCHAIN_NAME.ARBITRUM
              ),
                e.cdr.detectChanges();
            })();
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(
              t.rXU(X.c),
              t.rXU(t.gRc),
              t.rXU(B.X),
              t.rXU(W.su)
            );
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-claim-modal"]],
            decls: 14,
            vars: 24,
            consts: [
              [
                "inlineSVG",
                "assets/images/icons/crosshair.svg",
                1,
                "t-close",
                3,
                "click",
              ],
              [1, "title"],
              [1, "text"],
              [4, "ngIf", "ngIfElse"],
              ["claim", ""],
              [
                "appearance",
                "primary",
                1,
                "action-btn",
                3,
                "disabled",
                "onClick",
              ],
              ["appearance", "primary", 1, "action-btn", 3, "onClick"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (t.j41(0, "div", 0),
                  t.bIt("click", function () {
                    return a.context.completeWith(!1);
                  }),
                  t.k0s(),
                  t.j41(1, "div", 1),
                  t.EFF(2),
                  t.nI1(3, "translate"),
                  t.k0s(),
                  t.j41(4, "div", 2),
                  t.EFF(5),
                  t.nI1(6, "withRound"),
                  t.nI1(7, "bigNumberFormat"),
                  t.nI1(8, "withRound"),
                  t.nI1(9, "bigNumberFormat"),
                  t.k0s(),
                  t.DNE(10, At, 4, 4, "ng-container", 3),
                  t.nI1(11, "async"),
                  t.DNE(12, Ft, 3, 3, "ng-template", null, 4, t.C5r)),
                2 & n)
              ) {
                const o = t.sdS(13);
                t.R7$(2),
                  t.SpI(
                    " ",
                    t.bMT(3, 6, "staking.claimRewardsModal.title"),
                    "\n"
                  ),
                  t.R7$(2),
                  t.AVh("tui-skeleton", !a.rewards),
                  t.R7$(1),
                  t.SpI(
                    " ",
                    a.rewards.gt(1e-4)
                      ? t.brH(
                          6,
                          8,
                          t.bMT(7, 12, a.rewards),
                          "fixedValue",
                          t.lJ4(22, $t)
                        )
                      : t.brH(
                          8,
                          14,
                          t.bMT(9, 18, a.rewards),
                          "fixedValue",
                          t.lJ4(23, Dt)
                        ),
                    " ETH\n"
                  ),
                  t.R7$(5),
                  t.Y8G("ngIf", t.bMT(11, 20, a.needSwitchNetwork$))(
                    "ngIfElse",
                    o
                  );
              }
            },
            dependencies: [p.bT, Y.l, A.ll, p.Jj, N.p, x.D9, S.l],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{position:relative;display:block;padding:40px 0 10px}.t-close[_ngcontent-%COMP%]{position:absolute;top:0!important;right:5px!important;width:12px;height:12px;cursor:pointer}@media (max-width: 651px){.t-close[_ngcontent-%COMP%]{display:none}}.t-close[_ngcontent-%COMP%]     svg path{stroke:#000}html.dark[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]     svg path, html.dark   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]     svg path{stroke:#fff}.title[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:600;font-size:24px;line-height:29px;letter-spacing:normal;margin-bottom:26px;text-align:center}@media (max-width: 651px){.title[_ngcontent-%COMP%]{display:none}}.text[_ngcontent-%COMP%]{color:var(--secondary-text);font-weight:600;font-size:24px;line-height:29px;letter-spacing:normal;margin:0 auto 48px;color:var(--primary-color);text-align:center}.text__warn[_ngcontent-%COMP%]{margin-bottom:16px}.action-btn[_ngcontent-%COMP%]{display:block;max-width:275px;margin:0 auto}.action-btn[_ngcontent-%COMP%]     button{font-size:15px!important}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var jt = r(802248);
      const K = { closeable: !1, size: "s" };
      let J = (() => {
        class i {
          constructor(e) {
            this.dialogService = e;
          }
          showDepositModal(e, n, a) {
            return this.dialogService.showDialog(St, {
              ...K,
              title: "New Position",
              data: { amount: e, duration: n, unlockDate: a },
              fitContent: !0,
            });
          }
          showWithdrawModal(e, n, a) {
            return this.dialogService.showDialog(Nt, {
              ...K,
              title: "Withdraw",
              data: { amount: e, needSwitchNetwork$: n, totalNftRewards: a },
              fitContent: !0,
            });
          }
          showClaimModal(e, n) {
            return this.dialogService.showDialog(Bt, {
              ...K,
              title: "Claim",
              data: { rewards: e, needSwitchNetwork$: n },
              fitContent: !0,
            });
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(t.KVO(jt.B));
          });
          static #e = (this.ɵprov = t.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Z = r(187919),
        Lt = r(16123);
      const j = {
        status: Z.wS.Success,
        autoClose: 5e3,
        data: null,
        icon: "",
        defaultAutoCloseTime: 0,
      };
      let L = (() => {
        class i {
          constructor(e) {
            this.notificationsService = e;
          }
          showSuccessDepositNotification() {
            this.notificationsService.show("RBC has been deposited", j);
          }
          showSuccessClaimNotification() {
            this.notificationsService.show("Rewards have been claimed", j);
          }
          showSuccessWithdrawNotification() {
            this.notificationsService.show("Withdrawal has been succesful", j);
          }
          showSuccessApproveNotification() {
            this.notificationsService.show("Successful RBC approve", j);
          }
          showStakingIsStoppedNotification() {
            this.notificationsService.show("Staking is stopped", {
              status: Z.wS.Error,
              autoClose: 5e3,
              data: null,
              icon: "",
              defaultAutoCloseTime: 0,
            });
          }
          showNftLockedError(e) {
            this.notificationsService.show(`NFT is locked until ${e}`, {
              autoClose: 5e3,
              status: Z.wS.Error,
              data: null,
              icon: "",
              defaultAutoCloseTime: 0,
            });
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(t.KVO(Lt.I));
          });
          static #e = (this.ɵprov = t.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Q = r(305206),
        Vt = r(700409),
        Ht = r(421413),
        V = r(84572),
        Gt = r(301807),
        Ut = r(254843),
        zt = r(727468),
        at = r(511288);
      const l = {
        TOKEN: {
          address: at.M.staking.rbcToken,
          abi: [
            {
              inputs: [
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        NFT: {
          address: at.M.staking.nftContractAddress,
          abi: [
            {
              inputs: [
                { internalType: "address", name: "_RBC", type: "address" },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "AddRewards",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Claim",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "bool",
                  name: "isStopped",
                  type: "bool",
                },
              ],
              name: "EmergencyStop",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint128",
                  name: "lockTime",
                  type: "uint128",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Enter",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint128",
                  name: "lockTime",
                  type: "uint128",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Migrate",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "rate",
                  type: "uint256",
                },
              ],
              name: "Rate",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Unstake",
              type: "event",
            },
            {
              inputs: [],
              name: "RBC",
              outputs: [
                {
                  internalType: "contract IERC20Minimal",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "addRewards",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
              ],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "calculateRewards",
              outputs: [
                { internalType: "uint256", name: "rewards", type: "uint256" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "claimRewards",
              outputs: [
                { internalType: "uint256", name: "rewards", type: "uint256" },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "emergencyStop",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "_amount", type: "uint256" },
                { internalType: "uint128", name: "_lockTime", type: "uint128" },
              ],
              name: "enterStaking",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "estimatedAnnualRewardsByTokenId",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "getApproved",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "address", name: "operator", type: "address" },
              ],
              name: "isApprovedForAll",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "ownerOf",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "prevTimestamp",
              outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "rewardGrowth",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "rewardRate",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "rewardReserve",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "operator", type: "address" },
                { internalType: "bool", name: "approved", type: "bool" },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bool", name: "_emergencyStop", type: "bool" },
              ],
              name: "setEmergencyStop",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "rate", type: "uint256" },
              ],
              name: "setRate",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              name: "stakes",
              outputs: [
                { internalType: "uint128", name: "lockTime", type: "uint128" },
                {
                  internalType: "uint128",
                  name: "lockStartTime",
                  type: "uint128",
                },
                { internalType: "uint256", name: "amount", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "lastRewardGrowth",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
              ],
              name: "supportsInterface",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "_asset", type: "address" },
                { internalType: "address", name: "_to", type: "address" },
                { internalType: "uint256", name: "_amount", type: "uint256" },
              ],
              name: "sweepTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              name: "tokenByIndex",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "tokenURI",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
              ],
              name: "tokensOfOwner",
              outputs: [
                { internalType: "uint256[]", name: "", type: "uint256[]" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "newOwner", type: "address" },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
              ],
              name: "unstake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "virtualRBCBalance",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      };
      var Yt = r(353517);
      let ot = (() => {
        class i {
          constructor() {
            (this._updateStatistics$ = new b.t(null)),
              (this.updateStatistics$ = this._updateStatistics$.asObservable()),
              (this._lockedRBC$ = new b.t(new _.A(NaN))),
              (this.lockedRBC$ = this._lockedRBC$.asObservable()),
              (this.lockedRBCInDollars$ = this.updateStatistics$.pipe(
                (0, v.n)(() =>
                  (0, V.z)([
                    this.lockedRBC$,
                    (0, k.H)(this.getRBCPrice()),
                  ]).pipe((0, w.T)(([e, n]) => e.multipliedBy(n)))
                )
              )),
              (this._totalSupply$ = new b.t(new _.A(NaN))),
              (this.totalSupply$ = this._totalSupply$.asObservable()),
              (this.numberOfSecondsPerYear = 31104e3),
              (this.numberOfSecondsPerWeek = 604800),
              (this.currentStakingApr = new _.A(0)),
              (this._rewardPerWeek$ = new b.t(new _.A(NaN))),
              (this.rewardPerWeek$ = this._rewardPerWeek$.asObservable()),
              (this.apr$ = this.updateStatistics$.pipe(
                (0, v.n)(() =>
                  (0, V.z)([
                    this.lockedRBCInDollars$,
                    (0, k.H)(this.getETHPrice()),
                    this.rewardPerWeek$,
                  ]).pipe(
                    (0, w.T)(([e, n, a]) => {
                      const o = a
                          .dividedBy(this.numberOfSecondsPerWeek)
                          .multipliedBy(this.numberOfSecondsPerYear),
                        c = e.dividedBy(n),
                        u = o.dividedBy(c).multipliedBy(100);
                      return (this.currentStakingApr = u), u;
                    })
                  )
                )
              )),
              (this.circRBCLocked$ = this.updateStatistics$.pipe(
                (0, v.n)(() =>
                  (0, V.z)([this.lockedRBC$, this.totalSupply$]).pipe(
                    (0, w.T)(([e, n]) => e.dividedBy(n).multipliedBy(100))
                  )
                )
              ));
          }
          static get blockchainAdapter() {
            return d.Injector.web3PublicService.getWeb3Public(
              d.BLOCKCHAIN_NAME.ARBITRUM
            );
          }
          getTotalSupply() {
            (0, k.H)(
              d.Injector.web3PublicService
                .getWeb3Public(d.BLOCKCHAIN_NAME.ETHEREUM)
                .callContractMethod(
                  "0x3330BFb7332cA23cd071631837dC289B09C33333",
                  l.TOKEN.abi,
                  "totalSupply"
                )
            ).subscribe((e) => {
              this._totalSupply$.next(d.Web3Pure.fromWei(e));
            });
          }
          getRewardPerWeek() {
            (0, k.H)(
              i.blockchainAdapter.callContractMethod(
                l.NFT.address,
                l.NFT.abi,
                "rewardRate"
              )
            ).subscribe((e) => {
              this._rewardPerWeek$.next(
                d.Web3Pure.fromWei(e).multipliedBy(this.numberOfSecondsPerWeek)
              );
            });
          }
          getLockedRBC() {
            (0, k.H)(
              i.blockchainAdapter.callContractMethod(
                l.TOKEN.address,
                l.TOKEN.abi,
                "balanceOf",
                [l.NFT.address]
              )
            ).subscribe((e) => {
              this._lockedRBC$.next(d.Web3Pure.fromWei(e));
            });
          }
          getRBCPrice() {
            return (0, m.A)(function* () {
              return d.Injector.coingeckoApi.getTokenPrice({
                blockchain: d.BLOCKCHAIN_NAME.ETHEREUM,
                address: "0x3330bfb7332ca23cd071631837dc289b09c33333",
              });
            })();
          }
          getETHPrice() {
            return (0, m.A)(function* () {
              return d.Injector.coingeckoApi.getTokenPrice({
                blockchain: d.BLOCKCHAIN_NAME.ETHEREUM,
                address: Yt.DG,
              });
            })();
          }
          updateStatistics() {
            this._updateStatistics$.next();
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #e = (this.ɵprov = t.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var H = r(294166),
        Kt = r(88368);
      let G = (() => {
        class i {
          get rbcTokenBalance() {
            return this._rbcTokenBalance$.getValue();
          }
          get rbcAllowance() {
            return this._rbcAllowance$.getValue();
          }
          get walletAddress() {
            return this.authService.userAddress;
          }
          get total() {
            return this._total$.getValue();
          }
          get deposits() {
            return this._deposits$.getValue();
          }
          constructor(e, n, a, o, c, u, g, h, f) {
            (this.statisticsService = e),
              (this.tokensService = n),
              (this.authService = a),
              (this.walletConnectorService = o),
              (this.errorService = c),
              (this.ngZone = u),
              (this.stakingNotificationService = g),
              (this.router = h),
              (this.gasService = f),
              (this.MIN_STAKE_AMOUNT = 1),
              (this.MAX_LOCK_TIME = 1),
              (this.user$ = this.authService.currentUser$),
              (this._rbcTokenBalance$ = new b.t(null)),
              (this.rbcTokenBalance$ = this._rbcTokenBalance$.asObservable()),
              (this._rbcAllowance$ = new b.t(null)),
              (this.rbcAllowance$ = this._rbcAllowance$.asObservable()),
              (this.needLogin$ = this.authService.currentUser$.pipe(
                (0, w.T)((M) => !M?.address)
              )),
              (this.needSwitchNetwork$ =
                this.walletConnectorService.networkChange$.pipe(
                  (0, P.p)(Boolean),
                  (0, w.T)((M) => M !== d.BLOCKCHAIN_NAME.ARBITRUM)
                )),
              (this.web3Public = d.Injector.web3PublicService.getWeb3Public(
                d.BLOCKCHAIN_NAME.ARBITRUM
              )),
              (this._deposits$ = new b.t([])),
              (this.deposits$ = this._deposits$.asObservable()),
              (this._total$ = new b.t({ balance: null, rewards: null })),
              (this.total$ = this._total$.asObservable()),
              (this._depositsLoading$ = new b.t(!1)),
              (this.depositsLoading$ = this._depositsLoading$.asObservable()),
              (this._stopWatchUserBalanceAndAllowance$ = new Ht.B()),
              this.watchUserBalanceAndAllowance();
          }
          getRbcAmountPrice() {
            return (0, k.H)(
              this.tokensService.getAndUpdateTokenPrice(
                {
                  address: "0x3330bfb7332ca23cd071631837dc289b09c33333",
                  blockchain: d.BLOCKCHAIN_NAME.ETHEREUM,
                },
                !0
              )
            );
          }
          watchUserBalanceAndAllowance() {
            const e = this.router.events.pipe(
                (0, P.p)((a) => a instanceof T.wF)
              ),
              n = this.user$.pipe(
                (0, P.p)((a) => !!a?.address),
                (0, v.n)(() => this.getAllowance()),
                (0, F.M)((a) => this.setAllowance(a)),
                (0, v.n)(() => this.getRbcTokenBalance())
              );
            (0, V.z)([e, n])
              .pipe((0, D.Q)(this._stopWatchUserBalanceAndAllowance$))
              .subscribe(([a]) => {
                a.url.includes("staking") ||
                  this._stopWatchUserBalanceAndAllowance$.next();
              });
          }
          getAllowance() {
            return (0, k.H)(
              this.web3Public.getAllowance(
                l.TOKEN.address,
                this.walletAddress,
                l.NFT.address
              )
            ).pipe((0, w.T)((e) => d.Web3Pure.fromWei(e)));
          }
          setAllowance(e) {
            this._rbcAllowance$.next(
              "Infinity" === e ? new _.A(2).pow(256).minus(1) : e
            );
          }
          getRbcTokenBalance() {
            return (
              this.walletAddress
                ? (0, k.H)(
                    this.web3Public.getTokenBalance(
                      this.walletAddress,
                      l.TOKEN.address
                    )
                  )
                : (0, R.of)(new _.A(0))
            ).pipe(
              (0, w.T)((n) => d.Web3Pure.fromWei(n)),
              (0, F.M)((n) => this._rbcTokenBalance$.next(n))
            );
          }
          estimatedAnnualRewardsByTokenId(e) {
            return this.web3Public.callContractMethod(
              l.NFT.address,
              l.NFT.abi,
              "estimatedAnnualRewardsByTokenId",
              [e]
            );
          }
          pollRbcTokens() {
            return (0, Gt.O)(0, 15e3).pipe(
              (0, v.n)(() => this.getRbcTokenBalance())
            );
          }
          getCurrentTimeInSeconds() {
            var e = this;
            return (0, m.A)(function* () {
              const n = yield e.web3Public.getBlock();
              return Number(n.timestamp);
            })();
          }
          getGasInfo() {
            var e = this;
            return (0, m.A)(function* () {
              const { shouldCalculateGasPrice: n, gasPriceOptions: a } =
                yield e.gasService.getGasInfo(d.BLOCKCHAIN_NAME.ARBITRUM);
              return { shouldCalculateGasPrice: n, gasPriceOptions: a };
            })();
          }
          approveRbc() {
            var e = this;
            return (0, m.A)(function* () {
              const { shouldCalculateGasPrice: n, gasPriceOptions: a } =
                yield e.getGasInfo();
              try {
                const o = yield d.Injector.web3PrivateService
                  .getWeb3Private(H.CHAIN_TYPE.EVM)
                  .approveTokens(l.TOKEN.address, l.NFT.address, "infinity", {
                    ...(n && { gasPriceOptions: a }),
                  });
                if (o && o.status) {
                  const c = yield (0, Ut._)(e.getAllowance());
                  e.stakingNotificationService.showSuccessApproveNotification(),
                    e.setAllowance(c);
                }
                return o;
              } catch (o) {
                return e.errorService.catch(o), null;
              }
            })();
          }
          stake(e, n) {
            var a = this;
            return (0, m.A)(function* () {
              const { shouldCalculateGasPrice: o, gasPriceOptions: c } =
                  yield a.getGasInfo(),
                u = 2592e3 * n;
              return d.Injector.web3PrivateService
                .getWeb3Private(H.CHAIN_TYPE.EVM)
                .tryExecuteContractMethod(
                  l.NFT.address,
                  l.NFT.abi,
                  "enterStaking",
                  [d.Web3Pure.toWei(e, 18), String(u)],
                  { ...(o && { gasPriceOptions: c }) }
                );
            })();
          }
          claim(e) {
            var n = this;
            return (0, m.A)(function* () {
              const { shouldCalculateGasPrice: a, gasPriceOptions: o } =
                yield n.getGasInfo();
              try {
                const c = yield d.Injector.web3PrivateService
                  .getWeb3Private(H.CHAIN_TYPE.EVM)
                  .tryExecuteContractMethod(
                    l.NFT.address,
                    l.NFT.abi,
                    "claimRewards",
                    [e.id],
                    { ...(a && { gasPriceOptions: o }) }
                  );
                return (
                  c.status &&
                    (n.stakingNotificationService.showSuccessClaimNotification(),
                    n._total$.next({
                      ...n.total,
                      rewards: n.total.rewards.minus(e.totalNftRewards),
                    }),
                    n.updateDepositById(e.id, {
                      ...e,
                      totalNftRewards: new _.A(0),
                    })),
                  c
                );
              } catch (c) {
                return n.errorService.catch(c), null;
              }
            })();
          }
          updateDepositById(e, n) {
            const a = this.deposits.map((o) => (o.id === e ? n : o));
            this._deposits$.next(a);
          }
          withdraw(e) {
            var n = this;
            return (0, m.A)(function* () {
              const { shouldCalculateGasPrice: a, gasPriceOptions: o } =
                yield n.getGasInfo();
              try {
                const c = yield d.Injector.web3PrivateService
                  .getWeb3Private(H.CHAIN_TYPE.EVM)
                  .tryExecuteContractMethod(
                    l.NFT.address,
                    l.NFT.abi,
                    "unstake",
                    [e.id],
                    { ...(a && { gasPriceOptions: o }) }
                  );
                if (c.status) {
                  n.stakingNotificationService.showSuccessWithdrawNotification();
                  const u = n.deposits.filter((g) => g.id !== e.id);
                  n.ngZone.run(() => {
                    n._total$.next({
                      ...n.total,
                      balance: n.total.balance.minus(e.amount),
                    }),
                      n._deposits$.next(u);
                  });
                }
                return c;
              } catch (c) {
                n.errorService.catch(c);
              }
            })();
          }
          isEmergencyStopped() {
            var e = this;
            return (0, m.A)(function* () {
              try {
                return yield e.web3Public.callContractMethod(
                  l.NFT.address,
                  l.NFT.abi,
                  "emergencyStop"
                );
              } catch {
                return;
              }
            })();
          }
          loadDeposits() {
            var e = this;
            return this.user$.pipe(
              (0, F.M)(() => this.setDepositsLoading(!0)),
              (0, v.n)(() =>
                this.authService?.user?.address
                  ? (0, k.H)(
                      this.getTokensByOwner(this.authService.user.address)
                    ).pipe(
                      (0, v.n)((n) =>
                        0 === n.length
                          ? (0, R.of)([])
                          : (0, zt.p)(
                              n.map(
                                (function () {
                                  var a = (0, m.A)(function* (o) {
                                    const c =
                                        yield e.estimatedAnnualRewardsByTokenId(
                                          o
                                        ),
                                      u = yield e.getNftInfo(o),
                                      g = yield e.getNftRewardsInfo(o),
                                      h =
                                        yield e.statisticsService.getRBCPrice(),
                                      f =
                                        yield e.statisticsService.getETHPrice(),
                                      O = u.amount.multipliedBy(h).dividedBy(f),
                                      Qe = d.Web3Pure.fromWei(c)
                                        .dividedBy(O)
                                        .multipliedBy(100);
                                    return {
                                      ...u,
                                      ...g,
                                      id: o,
                                      tokenApr: Qe,
                                      canWithdraw:
                                        Date.now() > u.endTimestamp ||
                                        (yield e.isEmergencyStopped()),
                                    };
                                  });
                                  return function (o) {
                                    return a.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                      )
                    )
                  : (0, R.of)([])
              ),
              (0, it.W)((n) => (console.debug(n), (0, R.of)([]))),
              (0, F.M)((n) => {
                const a = n
                    .map((c) => c.amount)
                    .reduce((c, u) => c.plus(u), new _.A(0)),
                  o = n
                    .map((c) => c.totalNftRewards)
                    .reduce((c, u) => c.plus(u), new _.A(0));
                this.setDepositsLoading(!1),
                  this.ngZone.run(() => {
                    this._deposits$.next(n),
                      this._total$.next({ balance: a, rewards: o });
                  });
              })
            );
          }
          setDepositsLoading(e) {
            this._depositsLoading$.next(e);
          }
          getTokensByOwner(e) {
            var n = this;
            return (0, m.A)(function* () {
              return n.web3Public.callContractMethod(
                l.NFT.address,
                l.NFT.abi,
                "tokensOfOwner",
                [e]
              );
            })();
          }
          getNftInfo(e) {
            var n = this;
            return (0, m.A)(function* () {
              const {
                  lockTime: a,
                  amount: o,
                  lockStartTime: c,
                } = yield n.web3Public.callContractMethod(
                  l.NFT.address,
                  l.NFT.abi,
                  "stakes",
                  [e]
                ),
                u = Number(c) + Number(a);
              return { amount: d.Web3Pure.fromWei(o), endTimestamp: 1e3 * u };
            })();
          }
          getNftRewardsInfo(e) {
            var n = this;
            return (0, m.A)(function* () {
              try {
                const a = yield n.web3Public.callContractMethod(
                  l.NFT.address,
                  l.NFT.abi,
                  "calculateRewards",
                  [e]
                );
                return { totalNftRewards: d.Web3Pure.fromWei(a) };
              } catch {
                return { totalNftRewards: new _.A(0) };
              }
            })();
          }
          switchNetwork() {
            var e = this;
            return (0, m.A)(function* () {
              return e.walletConnectorService.switchChain(
                d.BLOCKCHAIN_NAME.ARBITRUM
              );
            })();
          }
          getNftVotingPower(e) {
            var n = this;
            return (0, m.A)(function* () {
              return yield n.web3Public.callContractMethod(
                l.NFT.address,
                l.NFT.abi,
                "balanceOfNFT",
                [e]
              );
            })();
          }
          parseAmountToBn(e) {
            return new _.A(e ? String(e).split(",").join("") : NaN);
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(
              t.KVO(ot),
              t.KVO(Vt.m),
              t.KVO(Q.u),
              t.KVO(X.c),
              t.KVO(et.b),
              t.KVO(t.SKi),
              t.KVO(L),
              t.KVO(T.Ix),
              t.KVO(Kt.R)
            );
          });
          static #e = (this.ɵprov = t.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var I = r(489417),
        Jt = r(644455),
        rt = r(647097),
        st = r(556463);
      function Zt(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI(
              " ",
              t.bMT(2, 1, "staking.stakeForm.button.entryIsClosed"),
              " "
            ));
      }
      function Qt(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI(
              " ",
              t.bMT(2, 1, "staking.stakeForm.button.stakingStopped"),
              " "
            ));
      }
      function qt(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI("", t.bMT(2, 1, "staking.stakeForm.button.approve"), " "));
      }
      function te(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI(
              " ",
              t.bMT(2, 1, "staking.stakeForm.button.insufficientBalance"),
              " "
            ));
      }
      function ee(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI(
              "",
              t.bMT(2, 1, "staking.stakeForm.button.enterAnAmount"),
              " "
            ));
      }
      function ne(i, s) {
        if (
          (1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()), 2 & i)
        ) {
          const e = t.XpG(2);
          t.R7$(1),
            t.Lme(
              " ",
              t.bMT(2, 2, "staking.stakeForm.button.minAmount"),
              " ",
              e.minStakeAmount,
              " RBC "
            );
        }
      }
      function ie(i, s) {
        1 & i && (t.qex(0), t.EFF(1), t.nI1(2, "translate"), t.bVm()),
          2 & i &&
            (t.R7$(1),
            t.SpI("", t.bMT(2, 1, "staking.stakeForm.button.stake"), " "));
      }
      function ae(i, s) {
        if (
          (1 & i &&
            (t.qex(0, 3),
            t.DNE(1, Qt, 3, 3, "ng-container", 4),
            t.DNE(2, qt, 3, 3, "ng-container", 4),
            t.DNE(3, te, 3, 3, "ng-container", 4),
            t.DNE(4, ee, 3, 3, "ng-container", 4),
            t.DNE(5, ne, 3, 4, "ng-container", 4),
            t.DNE(6, ie, 3, 3, "ng-container", 4),
            t.bVm()),
          2 & i)
        ) {
          const e = t.XpG();
          t.Y8G("ngSwitch", e.amountError),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.STAKING_CLOSED),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.NEED_APPROVE),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.INSUFFICIENT_BALANCE_RBC),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.EMPTY_AMOUNT),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.LESS_THEN_MINIMUM),
            t.R7$(1),
            t.Y8G("ngSwitchCase", e.errors.NULL);
        }
      }
      let oe = (() => {
        class i {
          constructor() {
            (this.stakeLoading = !1),
              (this.approveLoading = !1),
              (this.onStake = new t.bkB()),
              (this.onApprove = new t.bkB()),
              (this.errors = C);
          }
          handleClick() {}
          static #t = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-stake-button"]],
            inputs: {
              stakeLoading: "stakeLoading",
              approveLoading: "approveLoading",
              amountError: "amountError",
              lockTimeExceededError: "lockTimeExceededError",
              minStakeAmount: "minStakeAmount",
              maxLockTime: "maxLockTime",
            },
            outputs: { onStake: "onStake", onApprove: "onApprove" },
            decls: 4,
            vars: 5,
            consts: [
              [3, "disabled", "appearance", "loading", "onClick"],
              [4, "ngIf", "ngIfElse"],
              ["amountValidation", ""],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (t.j41(0, "app-rubic-button", 0),
                  t.bIt("onClick", function () {
                    return a.handleClick();
                  }),
                  t.DNE(1, Zt, 3, 3, "ng-container", 1),
                  t.DNE(2, ae, 7, 7, "ng-template", null, 2, t.C5r),
                  t.k0s()),
                2 & n)
              ) {
                const o = t.sdS(3);
                t.Y8G(
                  "disabled",
                  (a.amountError !== a.errors.NULL &&
                    a.amountError !== a.errors.NEED_APPROVE) ||
                    a.lockTimeExceededError
                )(
                  "appearance",
                  a.errors.NULL || a.errors.NEED_APPROVE
                    ? "primary"
                    : "secondary"
                )("loading", a.stakeLoading || a.approveLoading),
                  t.R7$(1),
                  t.Y8G("ngIf", a.lockTimeExceededError)("ngIfElse", o);
              }
            },
            dependencies: [p.bT, p.ux, p.e1, Y.l, x.D9],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}  app-rubic-button .t-wrapper[data-appearance=primary]{color:#000}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var ct = r(361201);
      const re = function () {
        return { decimals: 2 };
      };
      function se(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "div", 26),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.nI1(3, "withRound"),
            t.nI1(4, "bigNumberFormat"),
            t.j41(5, "span", 27),
            t.bIt("click", function () {
              const o = t.eBV(e).ngLet,
                c = t.XpG();
              return t.Njj(c.setMaxAmount(o));
            }),
            t.EFF(6),
            t.nI1(7, "translate"),
            t.k0s()();
        }
        if (2 & i) {
          const e = s.ngLet;
          t.R7$(1),
            t.Lme(
              " ",
              t.bMT(2, 3, "staking.stakeForm.youHave"),
              " ",
              e
                ? t.brH(3, 5, t.bMT(4, 9, e), "fixedValue", t.lJ4(13, re))
                : "--.--",
              " "
            ),
            t.R7$(5),
            t.JRh(t.bMT(7, 11, "staking.stakeForm.max"));
        }
      }
      function ce(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.qex(0),
            t.j41(1, "button", 28),
            t.bIt("click", function () {
              const o = t.eBV(e).$implicit,
                c = t.XpG();
              return t.Njj(c.setDuration(o.value));
            }),
            t.j41(2, "span", 29),
            t.EFF(3),
            t.nI1(4, "translate"),
            t.k0s(),
            t.j41(5, "span", 30),
            t.EFF(6),
            t.nI1(7, "translate"),
            t.k0s()(),
            t.bVm();
        }
        if (2 & i) {
          const e = s.$implicit,
            n = t.XpG();
          t.R7$(1),
            t.AVh(
              "duration__common-chip_selected",
              n.handleSelectedDuration(e.value)
            ),
            t.Y8G("disabled", e.value > n.MAX_LOCK_TIME || n.stakingIsClosed),
            t.R7$(2),
            t.Lme(" ", e.label, " ", t.bMT(4, 7, "staking.common.months"), " "),
            t.R7$(3),
            t.Lme(
              " ",
              t.bMT(7, 9, "staking.stakeForm.duration.rewards"),
              " x",
              e.rewardRate,
              " "
            );
        }
      }
      function de(i, s) {
        if (
          (1 & i &&
            (t.j41(0, "div", 31)(1, "div", 32),
            t.nrm(2, "img", 33),
            t.k0s(),
            t.j41(3, "div", 34)(4, "span"),
            t.EFF(5),
            t.nI1(6, "translate"),
            t.nI1(7, "translate"),
            t.nrm(8, "br"),
            t.k0s(),
            t.j41(9, "span", 35),
            t.EFF(10),
            t.nI1(11, "translate"),
            t.nI1(12, "date"),
            t.k0s()()()),
          2 & i)
        ) {
          const e = t.XpG();
          t.R7$(5),
            t.LHq(
              " ",
              e.selectedAmount || "0.00",
              " ",
              t.bMT(6, 6, "staking.stakeForm.hint.lockedRBCExpiresIn"),
              " ",
              e.durationCtrl.value,
              " ",
              t.bMT(7, 8, "staking.common.months"),
              ". "
            ),
            t.R7$(5),
            t.Lme(
              " ",
              t.bMT(11, 10, "staking.stakeForm.hint.lockedUntil"),
              " ",
              t.i5U(12, 12, e.unlockDate, "mediumDate"),
              " "
            );
        }
      }
      function le(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "button", 39),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.login());
            }),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.k0s();
        }
        2 & i &&
          (t.R7$(1),
          t.SpI(" ", t.bMT(2, 1, "staking.common.connectWallet"), " "));
      }
      function ue(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "button", 40),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.switchNetwork());
            }),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.k0s();
        }
        if (2 & i) {
          const e = t.XpG(2);
          t.Y8G("disabled", e.isMobile),
            t.R7$(1),
            t.SpI(
              " ",
              e.isMobile
                ? "Choose Arbitrum network in your wallet"
                : t.bMT(2, 2, "staking.common.switchNetworkToArbitrum"),
              " "
            );
        }
      }
      function pe(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-stake-button", 41),
            t.bIt("onApprove", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.approve());
            })("onStake", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.stake());
            }),
            t.nI1(1, "async"),
            t.nI1(2, "async"),
            t.k0s();
        }
        if (2 & i) {
          const e = t.XpG(2);
          t.Y8G("minStakeAmount", e.MIN_STAKE_AMOUNT)(
            "maxLockTime",
            e.MAX_LOCK_TIME
          )("amountError", e.amountError)(
            "lockTimeExceededError",
            e.lockTimeExceededError
          )("stakeLoading", t.bMT(1, 6, e.stakeLoading$))(
            "approveLoading",
            t.bMT(2, 8, e.approveLoading$)
          );
        }
      }
      function me(i, s) {
        if (
          (1 & i &&
            (t.qex(0),
            t.DNE(1, le, 3, 3, "button", 36),
            t.DNE(2, ue, 3, 4, "button", 37),
            t.DNE(3, pe, 3, 10, "app-stake-button", 38),
            t.bVm()),
          2 & i)
        ) {
          const e = s.ngLet;
          t.R7$(1),
            t.Y8G("ngIf", e.needLogin),
            t.R7$(1),
            t.Y8G("ngIf", !e.needLogin && e.needSwitchNetwork),
            t.R7$(1),
            t.Y8G("ngIf", !e.needSwitchNetwork && !e.needLogin);
        }
      }
      const ge = function (i, s) {
        return { needSwitchNetwork: i, needLogin: s };
      };
      let he = (() => {
        class i {
          constructor(e, n, a, o, c, u, g, h, f, M) {
            (this.stakingService = e),
              (this.router = n),
              (this.walletsModalService = a),
              (this.headerStore = o),
              (this.errorsService = c),
              (this.cdr = u),
              (this.stakingModalService = g),
              (this.stakingNotificationService = h),
              (this.authService = f),
              (this.destroy$ = M),
              (this.DURATIONS = [
                { value: 1, label: "1", rewardRate: "1.0" },
                { value: 3, label: "3", rewardRate: "1.0" },
                { value: 6, label: "6", rewardRate: "1.2" },
                { value: 9, label: "9", rewardRate: "1.5" },
              ]),
              (this.MAX_LOCK_TIME = this.stakingService.MAX_LOCK_TIME),
              (this.MIN_STAKE_AMOUNT = this.stakingService.MIN_STAKE_AMOUNT),
              (this.rbcTokenBalance$ = this.stakingService.rbcTokenBalance$),
              (this.durationCtrl = new I.MJ(this.MAX_LOCK_TIME)),
              (this.rbcAmountCtrl = new I.MJ(null)),
              (this.rbcAmount$ = this.rbcAmountCtrl.valueChanges.pipe(
                (0, nt.Z)(this.rbcAmountCtrl.value),
                (0, w.T)((O) => this.stakingService.parseAmountToBn(O))
              )),
              (this.rbcAllowance$ = this.stakingService.rbcAllowance$),
              (this.needLogin$ = this.stakingService.needLogin$),
              (this.needSwitchNetwork$ =
                this.stakingService.needSwitchNetwork$),
              (this._stakeLoading$ = new b.t(!1)),
              (this.stakeLoading$ = this._stakeLoading$.asObservable()),
              (this._approveLoading$ = new b.t(!1)),
              (this.approveLoading$ = this._approveLoading$.asObservable()),
              (this.amountError = C.EMPTY_AMOUNT),
              (this.lockTimeExceededError = !1),
              (this.stakingIsClosed = !0),
              (this.errors = C),
              (this.isMobile = this.headerStore.isMobile),
              this.stakingService
                .getRbcAmountPrice()
                .subscribe((O) => (this.rbcUsdPrice = O)),
              this.authService.currentUser$.subscribe(() =>
                this.rbcAmountCtrl.patchValue("")
              );
          }
          ngOnInit() {
            this.handleStakeDurationChange(),
              this.handleDurationError(),
              this.stakingService
                .pollRbcTokens()
                .pipe((0, D.Q)(this.destroy$))
                .subscribe();
          }
          calculateUsdPrice(e) {
            return "" === e
              ? "0.00"
              : this.stakingService
                  .parseAmountToBn(e)
                  .multipliedBy(this.rbcUsdPrice)
                  .toFixed(2);
          }
          handleErrors(e) {
            var n = this;
            return (0, m.A)(function* () {
              yield n.setErrors(e), n.cdr.detectChanges();
            })();
          }
          setErrors(e) {
            var n = this;
            return (0, m.A)(function* () {
              const a = e.replaceAll(",", "");
              n.selectedAmount = a;
              try {
                if (yield n.stakingService.isEmergencyStopped())
                  return (
                    (n.amountError = C.STAKING_CLOSED),
                    void (n.stakingIsClosed = !0)
                  );
              } catch {
                return;
              }
              n.amountError =
                "" !== a
                  ? n.stakingService.rbcTokenBalance?.lt(
                      n.stakingService.parseAmountToBn(a)
                    )
                    ? C.INSUFFICIENT_BALANCE_RBC
                    : n.stakingService.parseAmountToBn(a).lt(n.MIN_STAKE_AMOUNT)
                    ? C.LESS_THEN_MINIMUM
                    : n.stakingService.rbcAllowance.isFinite() &&
                      n.stakingService.rbcAllowance.lt(a)
                    ? C.NEED_APPROVE
                    : C.NULL
                  : C.EMPTY_AMOUNT;
            })();
          }
          handleDurationError() {
            this.lockTimeExceededError = this.MAX_LOCK_TIME < 1;
          }
          setMaxAmount(e) {
            this.rbcAmountCtrl.patchValue(e);
          }
          setDuration(e) {
            this.durationCtrl.patchValue(e);
          }
          handleSelectedDuration(e) {
            return this.durationCtrl.value === e;
          }
          login() {
            this.walletsModalService.open().subscribe();
          }
          switchNetwork() {
            var e = this;
            return (0, m.A)(function* () {
              yield e.stakingService.switchNetwork();
            })();
          }
          approve() {
            this._approveLoading$.next(!0),
              (0, k.H)(this.stakingService.approveRbc()).subscribe(() => {
                this._approveLoading$.next(!1),
                  this.rbcAmountCtrl.patchValue(this.rbcAmountCtrl.value),
                  this.cdr.detectChanges();
              });
          }
          stake() {
            const e =
                "string" != typeof this.rbcAmountCtrl.value
                  ? this.rbcAmountCtrl.value
                  : new _.A(this.rbcAmountCtrl.value.replaceAll(",", "")),
              n = this.durationCtrl.value;
            this.stakingModalService
              .showDepositModal(e, n, this.unlockDate)
              .pipe(
                (0, P.p)(Boolean),
                (0, v.n)(
                  () => (
                    this._stakeLoading$.next(!0),
                    (0, k.H)(this.stakingService.stake(e, n)).pipe(
                      (0, v.n)(() => this.stakingService.getRbcTokenBalance()),
                      (0, it.W)(
                        (a) => (this.errorsService.catch(a), (0, R.of)(null))
                      ),
                      (0, z.Eb)(this.cdr)
                    )
                  )
                )
              )
              .subscribe((a) => {
                this._stakeLoading$.next(!1),
                  a &&
                    (this.stakingNotificationService.showSuccessDepositNotification(),
                    this.back());
              });
          }
          handleStakeDurationChange() {
            this.durationCtrl.valueChanges
              .pipe(
                (0, nt.Z)(this.durationCtrl.value),
                (0, v.n)((e) =>
                  (function Mt(...i) {
                    const s = (0, xt.ms)(i),
                      e = (0, kt.K)(i);
                    return e.length
                      ? new ft.c((n) => {
                          let a = e.map(() => []),
                            o = e.map(() => !1);
                          n.add(() => {
                            a = o = null;
                          });
                          for (let c = 0; !n.closed && c < e.length; c++)
                            (0, yt.Tg)(e[c]).subscribe(
                              (0, wt._)(
                                n,
                                (u) => {
                                  if (
                                    (a[c].push(u), a.every((g) => g.length))
                                  ) {
                                    const g = a.map((h) => h.shift());
                                    n.next(s ? s(...g) : g),
                                      a.some((h, f) => !h.length && o[f]) &&
                                        n.complete();
                                  }
                                },
                                () => {
                                  (o[c] = !0), !a[c].length && n.complete();
                                }
                              )
                            );
                          return () => {
                            a = o = null;
                          };
                        })
                      : Ct.w;
                  })(
                    (0, R.of)(e),
                    this.stakingService.getCurrentTimeInSeconds()
                  )
                ),
                (0, F.M)(([e, n]) => {
                  this.unlockDate = this.calculateUnlockDateTimestamp(n, e);
                }),
                (0, z.Eb)(this.cdr),
                (0, D.Q)(this.destroy$)
              )
              .subscribe();
          }
          back() {
            this.router.navigate(["/staking"]);
          }
          calculateUnlockDateTimestamp(e, n) {
            return Math.trunc(1e3 * e + 2592e6 * n);
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(
              t.rXU(G),
              t.rXU(T.Ix),
              t.rXU(_t.R),
              t.rXU(B.X),
              t.rXU(et.b),
              t.rXU(t.gRc),
              t.rXU(J),
              t.rXU(L),
              t.rXU(Q.u),
              t.rXU($.ew, 2)
            );
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-stake-form"]],
            features: [t.Jv_([$.ew])],
            decls: 37,
            vars: 27,
            consts: [
              [1, "form-container"],
              ["header", ""],
              [1, "title__wrapper", 3, "click"],
              [1, "title__back"],
              ["inlineSVG", "assets/images/icons/arrow-back.svg"],
              [1, "title__text"],
              [1, "stake-form"],
              [1, "token"],
              [1, "token__header"],
              [1, "token__logo"],
              [
                "src",
                "/assets/favicon/logo.svg",
                "alt",
                "",
                1,
                "token__logo-icon",
              ],
              [
                "autocomplete",
                "off",
                "name",
                "token-amount",
                "placeholder",
                "Enter an Amount",
                "appTokenAmount",
                "",
                "maxlength",
                "15",
                "inputmode",
                "decimal",
                1,
                "token__amount-input",
                3,
                "formControl",
                "decimals",
                "amountChange",
              ],
              [1, "token__footer"],
              ["class", "token__balance", 4, "ngLet"],
              [1, "token__price"],
              [1, "divider"],
              [1, "duration"],
              [1, "duration__title"],
              [1, "duration__common"],
              [4, "ngFor", "ngForOf"],
              ["class", "hint", 4, "ngIf"],
              [1, "button-container"],
              [4, "ngLet"],
              [1, "rules"],
              [
                // "href",
                // "https://cryptorubic.medium.com/dear-rubicans-ffcf7b611b42",
                "target",
                "_blank",
                1,
                "rules__link",
              ],
              [1, "rules__icon", 3, "inlineSVG"],
              [1, "token__balance"],
              [1, "token__max", 3, "click"],
              [1, "duration__common-chip", 3, "disabled", "click"],
              [1, "duration__common-chip-label"],
              [1, "duration__common-chip-rate"],
              [1, "hint"],
              [1, "hint__icon"],
              ["src", "assets/images/icons/info-warning.svg", "alt", ""],
              [1, "hint__text"],
              [1, "hint__text-locked-until"],
              [
                "tuiButton",
                "",
                "size",
                "l",
                "type",
                "button",
                "appearance",
                "primary",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "tuiButton",
                "",
                "size",
                "l",
                "type",
                "button",
                "appearance",
                "primary",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [
                3,
                "minStakeAmount",
                "maxLockTime",
                "amountError",
                "lockTimeExceededError",
                "stakeLoading",
                "approveLoading",
                "onApprove",
                "onStake",
                4,
                "ngIf",
              ],
              [
                "tuiButton",
                "",
                "size",
                "l",
                "type",
                "button",
                "appearance",
                "primary",
                3,
                "click",
              ],
              [
                "tuiButton",
                "",
                "size",
                "l",
                "type",
                "button",
                "appearance",
                "primary",
                3,
                "disabled",
                "click",
              ],
              [
                3,
                "minStakeAmount",
                "maxLockTime",
                "amountError",
                "lockTimeExceededError",
                "stakeLoading",
                "approveLoading",
                "onApprove",
                "onStake",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (t.j41(0, "app-window-container", 0),
                t.qex(1, 1),
                t.j41(2, "div", 2),
                t.bIt("click", function () {
                  return a.back();
                }),
                t.j41(3, "button", 3),
                t.nrm(4, "span", 4),
                t.k0s(),
                t.j41(5, "span", 5),
                t.EFF(6, "New position"),
                t.k0s()(),
                t.bVm(),
                t.j41(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9),
                t.nrm(11, "img", 10),
                t.EFF(12, " RBC "),
                t.k0s(),
                t.j41(13, "input", 11),
                t.bIt("amountChange", function (c) {
                  return a.handleErrors(c);
                }),
                t.k0s()(),
                t.j41(14, "div", 12),
                t.DNE(15, se, 8, 14, "div", 13),
                t.nI1(16, "async"),
                t.j41(17, "div", 14),
                t.EFF(18),
                t.nI1(19, "functionCall"),
                t.k0s()()(),
                t.nrm(20, "hr", 15),
                t.j41(21, "div", 16)(22, "div", 17),
                t.EFF(23),
                t.nI1(24, "translate"),
                t.k0s(),
                t.j41(25, "div", 18),
                t.DNE(26, ce, 8, 11, "ng-container", 19),
                t.k0s()()(),
                t.DNE(27, de, 13, 15, "div", 20),
                t.j41(28, "div", 21),
                t.DNE(29, me, 4, 3, "ng-container", 22),
                t.nI1(30, "async"),
                t.nI1(31, "async"),
                t.k0s()(),
                t.j41(32, "div", 23)(33, "a", 24),
                t.EFF(34),
                t.nI1(35, "translate"),
                t.nrm(36, "div", 25),
                t.k0s()()),
                2 & n &&
                  (t.R7$(13),
                  t.Y8G("formControl", a.rbcAmountCtrl)("decimals", 18),
                  t.R7$(2),
                  t.Y8G("ngLet", t.bMT(16, 10, a.rbcTokenBalance$)),
                  t.R7$(3),
                  t.SpI(
                    " $ ",
                    t.brH(19, 12, a.selectedAmount, a.calculateUsdPrice, a),
                    " "
                  ),
                  t.R7$(5),
                  t.JRh(t.bMT(24, 16, "staking.stakeForm.duration.title")),
                  t.R7$(3),
                  t.Y8G("ngForOf", a.DURATIONS),
                  t.R7$(1),
                  t.Y8G("ngIf", !a.stakingIsClosed),
                  t.R7$(2),
                  t.Y8G(
                    "ngLet",
                    t.l_i(
                      24,
                      ge,
                      t.bMT(30, 18, a.needSwitchNetwork$),
                      t.bMT(31, 20, a.needLogin$)
                    )
                  ),
                  t.R7$(5),
                  t.SpI(" ", t.bMT(35, 22, "staking.common.rules"), " "),
                  t.R7$(2),
                  t.Y8G("inlineSVG", "assets/images/icons/link-arrow.svg"));
            },
            dependencies: [
              p.Sq,
              p.bT,
              Jt.B,
              rt.N,
              st.r,
              A.ll,
              I.me,
              I.BC,
              I.tU,
              I.l_,
              E.SM,
              oe,
              p.Jj,
              p.vh,
              N.p,
              x.D9,
              S.l,
              ct.J,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     app-window-container header{padding:0 0 var(--tui-padding-m) var(--tui-padding-m)}[_ngcontent-%COMP%]::placeholder{color:var(--primary-text);font-weight:400;font-size:15px;line-height:21px;letter-spacing:.45px;color:var(--tui-text-03)}.form-container[_ngcontent-%COMP%]{display:block;max-width:490px;margin:9px auto 20px;background:var(--form-background);border-radius:24px}.title__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:-moz-fit-content;width:fit-content;cursor:pointer}.title__back[_ngcontent-%COMP%]{padding:0;font-size:inherit;line-height:inherit;background:none;border:0;-webkit-appearance:none;appearance:none;display:flex;margin-top:1px;margin-right:var(--tui-padding-l);cursor:pointer}.title__back[_ngcontent-%COMP%]     span svg{height:12px}.title__text[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:18px;line-height:22px;letter-spacing:normal;text-align:center}.stake-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:var(--tui-padding-m);background:var(--io-background);border-radius:var(--tui-radius-m)}.token[_ngcontent-%COMP%]{margin-bottom:var(--tui-padding-m)}.token__header[_ngcontent-%COMP%], .token__footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.token__header[_ngcontent-%COMP%]{gap:var(--tui-padding-m);margin-bottom:var(--tui-padding-m)}.token__footer[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:500;font-size:15px;line-height:15px;letter-spacing:.45px}.token__logo[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:21px;line-height:21px;letter-spacing:normal;display:flex;align-items:center}.token__logo-icon[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:var(--tui-padding-xs)}.token__amount-input[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:400;font-size:15px;line-height:21px;letter-spacing:.45px;width:100%;margin-top:1px;text-align:right;background-color:transparent;border:none}.token__balance[_ngcontent-%COMP%]{display:flex;align-items:center}.token__max[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:400;font-size:9px;line-height:9px;letter-spacing:.45px;margin-top:-2px;margin-left:var(--tui-padding-l);padding:var(--tui-padding-xs) var(--tui-radius-s);background:linear-gradient(90deg,#209e62 0%,#0fa4ad 91.5%);border-radius:var(--tui-radius-xs);cursor:pointer}.token__price[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.divider[_ngcontent-%COMP%]{height:2px;margin-bottom:var(--tui-padding-m);background:var(--secondary-background)}.duration[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.duration__title[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:500;font-size:15px;line-height:15px;letter-spacing:.45px;white-space:nowrap}.duration__common[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr 1fr;gap:var(--tui-padding-m);width:100%;margin-top:var(--tui-padding-m)}.duration__common-chip[_ngcontent-%COMP%]{font-size:inherit;line-height:inherit;background:none;border:0;-webkit-appearance:none;appearance:none;color:var(--tui-text-01);font-weight:500;font-size:15px;line-height:16px;letter-spacing:.15px;width:100%;padding:8px 12px;background:var(--secondary-background);border-radius:var(--tui-radius-m);cursor:pointer;transition:transform .1s ease-in-out}.duration__common-chip[_ngcontent-%COMP%]:last-child{display:grid;grid-column-start:1;grid-column-end:4}.duration__common-chip[_ngcontent-%COMP%]:hover{box-shadow:0 3px 7px #0000004d;transform:translateY(-3px) scale(1.03);transition:transform .1s ease-in-out}.duration__common-chip[_ngcontent-%COMP%]:active{box-shadow:0 1px 7px #0000001a;transform:translateY(0) scale(1)}.duration__common-chip-label[_ngcontent-%COMP%], .duration__common-chip-rate[_ngcontent-%COMP%]{display:block;font-size:14px;white-space:nowrap}.duration__common-chip-rate-end[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500;font-size:16px;line-height:19px;letter-spacing:normal}.duration__common-chip-rate-end-hint[_ngcontent-%COMP%]{color:#f3ba2f;font-weight:400;font-size:16px;line-height:19px;letter-spacing:normal;letter-spacing:.03em;text-align:center}.duration__common-chip-label[_ngcontent-%COMP%]{margin-bottom:5px}.duration__common-chip_selected[_ngcontent-%COMP%]{color:var(--tui-primary-text);background-color:var(--tui-primary)}.duration__common-chip_selected[_ngcontent-%COMP%]   .duration__common-chip-earn-end[_ngcontent-%COMP%], .duration__common-chip_selected[_ngcontent-%COMP%]   .duration__common-chip-earn-end-hint[_ngcontent-%COMP%]{color:var(--staking-form-selected-duration)}.duration__common-chip_selected[_ngcontent-%COMP%]:hover, .duration__common-chip_selected[_ngcontent-%COMP%]:active{box-shadow:none;transform:none;transition:none}.duration__common-chip[disabled][_ngcontent-%COMP%]{color:#909090b3;background-color:transparent;border:1px solid var(--secondary-background)}.duration__common-chip[disabled][_ngcontent-%COMP%]   .duration__common-chip-earn-end[_ngcontent-%COMP%], .duration__common-chip[disabled][_ngcontent-%COMP%]   .duration__common-chip-earn-end-hint[_ngcontent-%COMP%]{color:#909090b3}.duration__common-chip[disabled][_ngcontent-%COMP%]:hover{box-shadow:none;transform:translateY(0) scale(1);cursor:default}.hint[_ngcontent-%COMP%]{color:#f3ba2f;font-weight:400;font-size:15px;line-height:21px;letter-spacing:.15px;display:flex;margin-top:var(--tui-padding-m);margin-bottom:20px;padding:var(--tui-padding-m);word-break:break-word;background:rgba(243,186,47,.15);border-radius:var(--tui-radius-m)}.hint__icon[_ngcontent-%COMP%]{margin-right:var(--tui-padding-m)}.hint__text-locked-until[_ngcontent-%COMP%]{color:var(--tui-text-01)}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.rules__link[_ngcontent-%COMP%]{color:var(--tui-primary);font-weight:400;font-size:15px;line-height:21px;letter-spacing:.45px;display:flex;gap:5px;align-items:center;justify-content:center;width:-moz-fit-content;width:fit-content;margin:0 auto 30px}.rules__icon[_ngcontent-%COMP%]{display:flex}.rules__icon[_ngcontent-%COMP%]     svg path[fill=black]{fill:var(--primary-color)}.rules__icon[_ngcontent-%COMP%]     svg rect[fill=black]{fill:var(--primary-color)}@media (max-width: 651px){  app-window-container header{padding:var(--tui-padding-l)!important;background:var(--io-background);border-bottom:2px solid var(--app-background);border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}  app-window-container header h5{position:relative;justify-content:center}  app-window-container .window-container{padding:0!important;background:none!important;border-radius:0!important}.stake-form[_ngcontent-%COMP%]{gap:2px;padding:0;background:none;border-radius:0}.title__back[_ngcontent-%COMP%]{position:absolute;left:var(--tui-padding-m)}.token[_ngcontent-%COMP%]{margin-bottom:0;padding:var(--tui-padding-l);background:var(--io-background);border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.token__header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.token__amount-input[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:700;font-size:25px;line-height:35px;letter-spacing:.25px;margin:0;padding:0;text-align:left}.token__balance[_ngcontent-%COMP%]{flex-direction:column-reverse;gap:15px;align-items:flex-end}.token__max[_ngcontent-%COMP%]{margin-top:0;margin-left:0}.token__footer[_ngcontent-%COMP%]{flex-direction:row-reverse;align-items:flex-end;margin-top:-35px}.divider[_ngcontent-%COMP%]{display:none}.duration[_ngcontent-%COMP%]{padding:var(--tui-padding-s) 0;background:none;border-radius:0}.duration__title[_ngcontent-%COMP%]{display:none}.duration__common[_ngcontent-%COMP%]{gap:var(--tui-padding-s);margin-top:0}.duration__common-chip[_ngcontent-%COMP%]{padding:var(--tui-padding-s) var(--tui-padding-m);font-size:12px;line-height:14px;letter-spacing:.36px}.duration__common-chip-label[_ngcontent-%COMP%], .duration__common-chip-rate[_ngcontent-%COMP%]{font-size:12px}.duration__common-chip-rate-end[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500;font-size:16px;line-height:19px;letter-spacing:normal}.duration__common-chip-rate-end-hint[_ngcontent-%COMP%]{color:#f3ba2f;font-weight:400;font-size:16px;line-height:19px;letter-spacing:normal;letter-spacing:.03em;text-align:center}.duration__common-chip-label[_ngcontent-%COMP%]{margin-bottom:5px}.hint[_ngcontent-%COMP%]{margin-top:0}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var _e = r(196697),
        be = r(920839),
        dt = r(673864);
      const ve = ["icon"];
      let fe = (() => {
        class i {
          constructor(e) {
            (this.window = e),
              (this.image = "assets/images/icons/reload.svg"),
              (this.rotating = !1),
              (this.disabled = !1),
              (this.iconClick = new t.bkB()),
              (this.stopAnimation = "stopped");
          }
          ngOnChanges(e) {
            e.rotating?.currentValue &&
              !e.rotating?.previousValue &&
              this.animate();
          }
          animate() {
            const e = performance.now();
            let o = 0;
            const c = (u) => {
              const g = u > e ? u - e : 0,
                h = Math.round((0.36 * g) % 360),
                f = Math.floor((0.36 * g) / 360);
              !this.rotating && f > o
                ? this.setIconRotation(0, "left")
                : ((o = f),
                  this.setIconRotation(h, "left"),
                  this.window.requestAnimationFrame(c));
            };
            this.window.requestAnimationFrame(c);
          }
          setIconRotation(e, n = "right") {
            this.icon.nativeElement.style.transform = `rotate(${(e =
              "left" === n ? -1 * e : e)}deg)`;
          }
          onClick() {
            this.iconClick.emit();
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(t.rXU(dt.jf));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-rotating-icon"]],
            viewQuery: function (n, a) {
              if ((1 & n && t.GBs(ve, 7), 2 & n)) {
                let o;
                t.mGM((o = t.lsd())) && (a.icon = o.first);
              }
            },
            inputs: {
              image: "image",
              rotating: "rotating",
              disabled: "disabled",
            },
            outputs: { iconClick: "iconClick" },
            features: [t.OA$],
            decls: 3,
            vars: 2,
            consts: [
              [3, "disabled", "click"],
              [1, "icon", 3, "inlineSVG"],
              ["icon", ""],
            ],
            template: function (n, a) {
              1 & n &&
                (t.j41(0, "button", 0),
                t.bIt("click", function () {
                  return a.onClick();
                }),
                t.nrm(1, "span", 1, 2),
                t.k0s()),
                2 & n &&
                  (t.Y8G("disabled", a.disabled),
                  t.R7$(1),
                  t.Y8G("inlineSVG", a.image));
            },
            dependencies: [A.ll],
            styles: [
              "[_nghost-%COMP%]{display:block;width:18px;height:18px}button[_ngcontent-%COMP%]{display:block;width:100%;height:100%;padding:0;background:transparent;border:none}button[disabled][_ngcontent-%COMP%]{cursor:not-allowed}button[disabled][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.5}.icon[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.icon_animate[_ngcontent-%COMP%]{transition:1s;animation-name:_ngcontent-%COMP%_rotate;animation-duration:1s;animation-timing-function:linear;animation-delay:.1s;animation-iteration-count:infinite}.icon_gradually-stop[_ngcontent-%COMP%]{animation-iteration-count:2}@keyframes _ngcontent-%COMP%_rotate{to{transform:rotate(-360deg)}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var ye = r(963372),
        U = r(6249),
        y = r(644819);
      const ke = function () {
          return { decimals: 6 };
        },
        lt = function () {
          return { decimals: 0 };
        },
        ut = function () {
          return { decimals: 10 };
        },
        Ce = function (i) {
          return { "leave-btn_disabled": i };
        };
      function we(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "tbody")(1, "tr", 7)(2, "td", 5)(3, "div", 8),
            t.nrm(4, "img", 9),
            t.EFF(5),
            t.k0s()(),
            t.j41(6, "td", 5)(7, "span", 10),
            t.nI1(8, "withRound"),
            t.nI1(9, "bigNumberFormat"),
            t.EFF(10),
            t.nI1(11, "withRound"),
            t.nI1(12, "bigNumberFormat"),
            t.k0s()(),
            t.j41(13, "td", 5)(14, "span", 11),
            t.nI1(15, "withRound"),
            t.nI1(16, "bigNumberFormat"),
            t.EFF(17),
            t.nI1(18, "functionCall"),
            t.k0s()(),
            t.j41(19, "td", 5),
            t.EFF(20),
            t.nI1(21, "bigNumberFormat"),
            t.k0s(),
            t.j41(22, "td", 5),
            t.EFF(23),
            t.nI1(24, "date"),
            t.k0s(),
            t.j41(25, "td", 5)(26, "div", 12)(27, "tui-loader", 13)(
              28,
              "button",
              14
            ),
            t.bIt("click", function () {
              const o = t.eBV(e).$implicit,
                c = t.XpG();
              return t.Njj(c.onClaim.emit(o));
            }),
            t.EFF(29),
            t.nI1(30, "translate"),
            t.k0s()(),
            t.j41(31, "tui-loader", 13)(32, "button", 15),
            t.bIt("click", function () {
              const o = t.eBV(e).$implicit,
                c = t.XpG();
              return t.Njj(c.onWithdraw.emit(o));
            }),
            t.nrm(33, "img", 16),
            t.k0s()()()()()();
        }
        if (2 & i) {
          const e = s.$implicit,
            n = s.index,
            a = t.XpG();
          t.R7$(5),
            t.SpI(" ", e.id, " "),
            t.R7$(2),
            t.Y8G(
              "tuiHint",
              t.brH(8, 23, t.bMT(9, 27, e.amount), "fixedValue", t.lJ4(53, ke))
            )("tuiHintDirection", "top-right"),
            t.R7$(3),
            t.SpI(
              " ",
              t.brH(
                11,
                29,
                t.bMT(12, 33, e.amount),
                "toClosestValue",
                t.lJ4(54, lt)
              ),
              ""
            ),
            t.R7$(4),
            t.Y8G(
              "tuiHint",
              t.brH(
                15,
                35,
                t.bMT(16, 39, e.totalNftRewards),
                "fixedValue",
                t.lJ4(55, ut)
              ) + " ETH"
            )("tuiHintManual", !1)("tuiHintDirection", "top-left")(
              "tuiHintShowDelay",
              50
            ),
            t.R7$(3),
            t.SpI(" ", t.brH(18, 41, n, a.getTotalNftRewards, a), " "),
            t.R7$(3),
            t.SpI(
              " ",
              e.tokenApr && e.tokenApr.gte(0)
                ? t.i5U(21, 45, e.tokenApr, 2) + "%"
                : "-",
              " "
            ),
            t.R7$(3),
            t.JRh(t.i5U(24, 48, e.endTimestamp, "dd.MM.yyyy")),
            t.R7$(4),
            t.Y8G("showLoader", a.claimingId === e.id)("overlay", !0),
            t.R7$(1),
            t.Y8G(
              "appearance",
              e.totalNftRewards.gt(0) ? "primary" : "secondary"
            )("disabled", e.totalNftRewards.isZero()),
            t.R7$(1),
            t.SpI(" ", t.bMT(30, 51, "staking.deposits.claimRewards"), " "),
            t.R7$(2),
            t.Y8G("showLoader", a.claimingId === e.id)("overlay", !0),
            t.R7$(1),
            t.Y8G("appearance", e.canWithdraw ? "primary" : "secondary")(
              "tuiHint",
              "Withdraw"
            )("tuiHintDirection", "top-right"),
            t.R7$(1),
            t.Y8G("ngClass", t.eq3(56, Ce, !e.canWithdraw))(
              "src",
              "assets/images/icons/leave-black.svg",
              t.B4B
            );
        }
      }
      const xe = function () {
        return { decimals: 2 };
      };
      let Me = (() => {
        class i {
          constructor() {
            (this.onClaim = new t.bkB()), (this.onWithdraw = new t.bkB());
          }
          trackBy(e, n) {
            return e;
          }
          getTotalNftRewards(e) {
            const n = this.deposits[e].totalNftRewards;
            return n.isZero()
              ? "0.00"
              : n.lt(0.01)
              ? "< 0.01"
              : new S.l().transform(n.toString(), "fixedValue", {
                  decimals: 2,
                });
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-desktop-deposits"]],
            inputs: {
              deposits: "deposits",
              total: "total",
              claimingId: "claimingId",
              withdrawingId: "withdrawingId",
              isDarkTheme: "isDarkTheme",
            },
            outputs: { onClaim: "onClaim", onWithdraw: "onWithdraw" },
            decls: 33,
            vars: 36,
            consts: [
              [1, "tui-table"],
              [1, "tui-table__tr"],
              [1, "tui-table__th"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              [1, "tui-table__td", "total"],
              [1, "tui-table__td"],
              [
                "tuiHintAppearance",
                "onDark",
                1,
                "tui-table__td",
                3,
                "tuiHint",
                "tuiHintDirection",
              ],
              [1, "tui-table__tr", "data-row"],
              [1, "tui-table__td-id"],
              ["src", "assets/images/rbc.png", "alt", ""],
              ["tuiHintAppearance", "onDark", 3, "tuiHint", "tuiHintDirection"],
              [
                "tuiHintAppearance",
                "onDark",
                3,
                "tuiHint",
                "tuiHintManual",
                "tuiHintDirection",
                "tuiHintShowDelay",
              ],
              [1, "tui-table__td-actions"],
              [3, "showLoader", "overlay"],
              [
                "tuiButton",
                "",
                "size",
                "xs",
                "type",
                "button",
                3,
                "appearance",
                "disabled",
                "click",
              ],
              [
                "tuiButton",
                "",
                "size",
                "xs",
                "type",
                "button",
                "tuiHintAppearance",
                "onDark",
                3,
                "appearance",
                "tuiHint",
                "tuiHintDirection",
                "click",
              ],
              ["alt", "", 3, "ngClass", "src"],
            ],
            template: function (n, a) {
              1 & n &&
                (t.j41(0, "table", 0)(1, "thead")(2, "tr", 1)(3, "th", 2),
                t.EFF(4, "NFT ID"),
                t.k0s(),
                t.j41(5, "th", 2),
                t.EFF(6, "RBC"),
                t.k0s(),
                t.j41(7, "th", 2),
                t.EFF(8),
                t.nI1(9, "translate"),
                t.k0s(),
                t.j41(10, "th", 2),
                t.EFF(11, "APR"),
                t.k0s(),
                t.j41(12, "th", 2),
                t.EFF(13),
                t.nI1(14, "translate"),
                t.k0s(),
                t.j41(15, "th", 2),
                t.EFF(16, "\xa0"),
                t.k0s()()(),
                t.DNE(17, we, 34, 58, "tbody", 3),
                t.j41(18, "tfoot")(19, "tr", 1)(20, "td", 4),
                t.EFF(21),
                t.nI1(22, "translate"),
                t.k0s(),
                t.j41(23, "td", 5),
                t.EFF(24),
                t.nI1(25, "withRound"),
                t.nI1(26, "bigNumberFormat"),
                t.k0s(),
                t.j41(27, "td", 6),
                t.nI1(28, "withRound"),
                t.nI1(29, "bigNumberFormat"),
                t.EFF(30),
                t.nI1(31, "withRound"),
                t.nI1(32, "bigNumberFormat"),
                t.k0s()()()()),
                2 & n &&
                  (t.R7$(8),
                  t.JRh(t.bMT(9, 9, "staking.deposits.rewards")),
                  t.R7$(5),
                  t.JRh(t.bMT(14, 11, "staking.deposits.endDate")),
                  t.R7$(4),
                  t.Y8G("ngForOf", a.deposits)("ngForTrackBy", a.trackBy),
                  t.R7$(4),
                  t.JRh(t.bMT(22, 13, "staking.deposits.total")),
                  t.R7$(3),
                  t.SpI(
                    " ",
                    a.total.balance
                      ? t.brH(
                          25,
                          15,
                          t.bMT(26, 19, a.total.balance),
                          "fixedValue",
                          t.lJ4(33, lt)
                        )
                      : "0",
                    " "
                  ),
                  t.R7$(3),
                  t.Y8G(
                    "tuiHint",
                    t.brH(
                      28,
                      21,
                      t.bMT(29, 25, a.total.rewards),
                      "fixedValue",
                      t.lJ4(34, ut)
                    ) + " ETH"
                  )("tuiHintDirection", "top-right"),
                  t.R7$(3),
                  t.SpI(
                    " ",
                    a.total.rewards.isZero()
                      ? "0.00"
                      : a.total.rewards.lt(0.01)
                      ? "< 0.01"
                      : t.brH(
                          31,
                          27,
                          t.bMT(32, 31, a.total.rewards),
                          "fixedValue",
                          t.lJ4(35, xe)
                        ),
                    " "
                  ));
            },
            dependencies: [
              p.YU,
              p.Sq,
              U.jT,
              y.XZ,
              y.ZF,
              y.JL,
              y.Hg,
              y.AZ,
              E.SM,
              p.vh,
              N.p,
              x.D9,
              S.l,
              ct.J,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.tui-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{height:var(--tui-height-s)}.tui-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%]:hover{background:initial}.tui-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:500;font-size:11px;line-height:10px;letter-spacing:.45px;height:auto;padding:0;text-align:center}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__tr.data-row[_ngcontent-%COMP%]:hover, .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__tr.data-row[_ngcontent-%COMP%]:hover{background:var(--secondary-background)}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%], .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%]{height:var(--tui-height-s)}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%]:hover, .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%]:hover{background:initial}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:11px;line-height:10px;letter-spacing:.45px;height:auto;padding:0;text-align:center;vertical-align:middle}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]:first-child, .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]:first-child{padding-left:var(--tui-padding-m);border-radius:var(--tui-radius-m) 0 0 var(--tui-radius-m)}.tui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]:last-child, .tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]:last-child{padding-right:var(--tui-padding-m);border-radius:0 var(--tui-radius-m) var(--tui-radius-m) 0}.tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%]{color:var(--tui-primary)}.tui-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .tui-table__td.total[_ngcontent-%COMP%]{text-align:left}.tui-table[_ngcontent-%COMP%]   .tui-table__tr[_ngcontent-%COMP%]{border-bottom:none}.tui-table[_ngcontent-%COMP%]   .tui-table__td-id[_ngcontent-%COMP%]{display:flex;align-items:center}.tui-table[_ngcontent-%COMP%]   .tui-table__td-id[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;height:15px;margin-right:5px}.tui-table[_ngcontent-%COMP%]   .tui-table__td-actions[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);justify-content:flex-end;opacity:1}.tui-table[_ngcontent-%COMP%]   .tui-table__td-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:11px;white-space:nowrap}.leave-btn_disabled[_ngcontent-%COMP%]{opacity:.4}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var q = r(430569),
        pt = r(147645),
        Te = r(310495);
      const mt = function () {
          return { decimals: 0 };
        },
        Se = function () {
          return { decimals: 4 };
        },
        gt = function () {
          return { decimals: 2 };
        },
        Ie = function (i) {
          return { "leave-btn_disabled": i };
        };
      function Oe(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12),
            t.EFF(4, "NFT ID"),
            t.k0s(),
            t.j41(5, "span", 13),
            t.EFF(6),
            t.k0s()(),
            t.j41(7, "div", 11)(8, "span", 12),
            t.EFF(9, "RBC"),
            t.k0s(),
            t.j41(10, "span", 13),
            t.EFF(11),
            t.nI1(12, "withRound"),
            t.nI1(13, "bigNumberFormat"),
            t.k0s()(),
            t.j41(14, "div", 11)(15, "span", 12),
            t.EFF(16),
            t.nI1(17, "translate"),
            t.k0s(),
            t.j41(18, "span", 14),
            t.nI1(19, "withRound"),
            t.nI1(20, "bigNumberFormat"),
            t.EFF(21),
            t.nI1(22, "withRound"),
            t.nI1(23, "bigNumberFormat"),
            t.k0s()(),
            t.j41(24, "div", 11)(25, "span", 12),
            t.EFF(26, "APR"),
            t.k0s(),
            t.j41(27, "span", 15),
            t.nI1(28, "bigNumberFormat"),
            t.EFF(29),
            t.nI1(30, "bigNumberFormat"),
            t.k0s()(),
            t.j41(31, "div", 11)(32, "span", 12),
            t.EFF(33),
            t.nI1(34, "translate"),
            t.k0s(),
            t.j41(35, "span", 13),
            t.EFF(36),
            t.nI1(37, "date"),
            t.k0s()()(),
            t.j41(38, "div", 16)(39, "tui-loader", 17)(40, "button", 18),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG().$implicit,
                o = t.XpG();
              return t.Njj(o.onClaim.emit(a));
            }),
            t.EFF(41),
            t.nI1(42, "translate"),
            t.k0s()(),
            t.j41(43, "tui-loader", 17)(44, "button", 19),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG().$implicit,
                o = t.XpG();
              return t.Njj(o.onWithdraw.emit(a));
            }),
            t.nrm(45, "img", 20),
            t.k0s()()()();
        }
        if (2 & i) {
          const e = t.XpG().$implicit,
            n = t.XpG();
          t.R7$(6),
            t.JRh(e.id),
            t.R7$(5),
            t.JRh(
              t.brH(
                12,
                25,
                t.bMT(13, 29, e.amount),
                "fixedValue",
                t.lJ4(58, mt)
              )
            ),
            t.R7$(5),
            t.JRh(t.bMT(17, 31, "staking.deposits.rewards")),
            t.R7$(2),
            t.Y8G(
              "tuiHint",
              e.totalNftRewards.eq(0) || e.totalNftRewards.gt(1e-4)
                ? t.brH(
                    19,
                    33,
                    t.bMT(20, 37, e.totalNftRewards),
                    "fixedValue",
                    t.lJ4(59, Se)
                  )
                : "< 0.0001"
            )("tuiHintManual", !1)("tuiHintDirection", "top-left")(
              "tuiHintShowDelay",
              50
            ),
            t.R7$(3),
            t.SpI(
              " ",
              e.totalNftRewards.isZero()
                ? "0.00"
                : e.totalNftRewards.lt(0.01)
                ? "< 0.01"
                : t.brH(
                    22,
                    39,
                    t.bMT(23, 43, e.totalNftRewards),
                    "fixedValue",
                    t.lJ4(60, gt)
                  ),
              " "
            ),
            t.R7$(6),
            t.Y8G(
              "tuiHint",
              e.tokenApr && e.tokenApr.gte(0)
                ? t.i5U(28, 45, e.tokenApr, 2) + " %"
                : "-"
            )("tuiHintDirection", "top-right"),
            t.R7$(2),
            t.SpI(
              " ",
              e.tokenApr && e.tokenApr.gte(0)
                ? t.i5U(30, 48, e.tokenApr, 2) + "%"
                : "-",
              " "
            ),
            t.R7$(4),
            t.JRh(t.bMT(34, 51, "staking.deposits.endDate")),
            t.R7$(3),
            t.JRh(t.i5U(37, 53, e.endTimestamp, "dd.MM.yyyy")),
            t.R7$(3),
            t.Y8G("showLoader", n.claimingId === e.id)("overlay", !0),
            t.R7$(1),
            t.Y8G(
              "appearance",
              e.totalNftRewards.gt(0) ? "primary" : "secondary"
            )("disabled", e.totalNftRewards.isZero()),
            t.R7$(1),
            t.SpI(" ", t.bMT(42, 56, "staking.deposits.claim"), " "),
            t.R7$(2),
            t.Y8G("showLoader", n.claimingId === e.id)("overlay", !0),
            t.R7$(1),
            t.Y8G("appearance", e.canWithdraw ? "primary" : "secondary")(
              "tuiHint",
              "Withdraw"
            )("tuiHintDirection", "top-right"),
            t.R7$(1),
            t.Y8G("ngClass", t.eq3(61, Ie, !e.canWithdraw))(
              "src",
              "assets/images/icons/leave-black.svg",
              t.B4B
            );
        }
      }
      function Pe(i, s) {
        1 & i && (t.qex(0), t.DNE(1, Oe, 46, 63, "div", 8), t.bVm());
      }
      const Re = function () {
        return { decimals: 6 };
      };
      let Ee = (() => {
        class i {
          constructor() {
            (this.onClaim = new t.bkB()),
              (this.onWithdraw = new t.bkB()),
              (this.index = 0);
          }
          trackBy(e, n) {
            return e;
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-mobile-deposits"]],
            inputs: {
              deposits: "deposits",
              total: "total",
              claimingId: "claimingId",
              withdrawingId: "withdrawingId",
              isDarkTheme: "isDarkTheme",
            },
            outputs: { onClaim: "onClaim", onWithdraw: "onWithdraw" },
            decls: 18,
            vars: 38,
            consts: [
              [1, "mobile-deposits"],
              [1, "mobile-deposits__wrapper"],
              [3, "draggable", "itemsCount", "index", "indexChange"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              [
                "size",
                "s",
                1,
                "pagination",
                3,
                "length",
                "index",
                "indexChange",
              ],
              [1, "mobile-deposits__total"],
              [1, "mobile-deposits__cell"],
              [
                "tuiHintAppearance",
                "onDark",
                1,
                "mobile-deposits__cell",
                3,
                "tuiHint",
                "tuiHintDirection",
              ],
              ["class", "mobile-deposits__element", 4, "tuiItem"],
              [1, "mobile-deposits__element"],
              [1, "mobile-deposits__info"],
              [1, "mobile-deposits__info-item"],
              [1, "mobile-deposits__info-item-title"],
              [1, "mobile-deposits__info-item-value"],
              [
                "tuiHintAppearance",
                "onDark",
                1,
                "mobile-deposits__info-item-value",
                3,
                "tuiHint",
                "tuiHintManual",
                "tuiHintDirection",
                "tuiHintShowDelay",
              ],
              [
                "tuiHintAppearance",
                "onDark",
                1,
                "mobile-deposits__info-item-value",
                3,
                "tuiHint",
                "tuiHintDirection",
              ],
              [1, "mobile-deposits__buttons"],
              [3, "showLoader", "overlay"],
              [
                "tuiButton",
                "",
                "size",
                "m",
                "type",
                "button",
                1,
                "claim",
                3,
                "appearance",
                "disabled",
                "click",
              ],
              [
                "tuiButton",
                "",
                "size",
                "m",
                "type",
                "button",
                "tuiHintAppearance",
                "onDark",
                1,
                "withdraw",
                3,
                "appearance",
                "tuiHint",
                "tuiHintDirection",
                "click",
              ],
              ["alt", "", 3, "ngClass", "src"],
            ],
            template: function (n, a) {
              1 & n &&
                (t.j41(0, "div", 0)(1, "div", 1)(2, "tui-carousel", 2),
                t.bIt("indexChange", function (c) {
                  return (a.index = c);
                }),
                t.DNE(3, Pe, 2, 0, "ng-container", 3),
                t.k0s(),
                t.j41(4, "tui-pagination", 4),
                t.bIt("indexChange", function (c) {
                  return (a.index = c);
                }),
                t.k0s()(),
                t.j41(5, "div", 5)(6, "div", 6),
                t.EFF(7),
                t.nI1(8, "translate"),
                t.nI1(9, "withRound"),
                t.nI1(10, "bigNumberFormat"),
                t.k0s(),
                t.j41(11, "div", 7),
                t.nI1(12, "withRound"),
                t.nI1(13, "bigNumberFormat"),
                t.EFF(14),
                t.nI1(15, "translate"),
                t.nI1(16, "withRound"),
                t.nI1(17, "bigNumberFormat"),
                t.k0s()()()),
                2 & n &&
                  (t.R7$(2),
                  t.Y8G("draggable", !0)("itemsCount", 1)("index", a.index),
                  t.R7$(1),
                  t.Y8G("ngForOf", a.deposits)("ngForTrackBy", a.trackBy),
                  t.R7$(1),
                  t.Y8G("length", a.deposits.length)("index", a.index),
                  t.R7$(3),
                  t.Lme(
                    " ",
                    t.bMT(8, 13, "staking.deposits.totalRBC"),
                    " ",
                    a.total.balance
                      ? t.brH(
                          9,
                          15,
                          t.bMT(10, 19, a.total.balance),
                          "fixedValue",
                          t.lJ4(35, mt)
                        )
                      : "0",
                    " "
                  ),
                  t.R7$(4),
                  t.Y8G(
                    "tuiHint",
                    t.brH(
                      12,
                      21,
                      t.bMT(13, 25, a.total.rewards),
                      "fixedValue",
                      t.lJ4(36, Re)
                    )
                  )("tuiHintDirection", "top-right"),
                  t.R7$(3),
                  t.Lme(
                    " ",
                    t.bMT(15, 27, "staking.deposits.totalRewards"),
                    " ",
                    a.total.rewards.isZero()
                      ? "0.00"
                      : a.total.rewards.lt(0.01)
                      ? "< 0.01"
                      : t.brH(
                          16,
                          29,
                          t.bMT(17, 33, a.total.rewards),
                          "fixedValue",
                          t.lJ4(37, gt)
                        ),
                    " "
                  ));
            },
            dependencies: [
              p.YU,
              p.Sq,
              U.jT,
              y.XZ,
              y.ZF,
              y.JL,
              y.Hg,
              y.AZ,
              E.SM,
              q.ep,
              q.qE,
              Te.$,
              pt.U,
              p.vh,
              N.p,
              x.D9,
              S.l,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}  button.withdraw .t-wrapper{padding:0!important}  tui-carousel{margin-bottom:var(--tui-padding-m)}.mobile-deposits[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.mobile-deposits__wrapper[_ngcontent-%COMP%]{height:242px;margin-top:2px;padding:var(--tui-padding-m) 0;background:var(--io-background)}.mobile-deposits__element[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;max-width:232px;margin:0 auto;background:var(--app-background);border-radius:var(--tui-radius-m)}.mobile-deposits__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-xs);padding:var(--tui-padding-m) var(--tui-padding-l);border-bottom:2px solid var(--io-background)}.mobile-deposits__info-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.mobile-deposits__info-item-title[_ngcontent-%COMP%]{color:var(--tui-text-03)}.mobile-deposits__total[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:var(--tui-padding-l) var(--tui-padding-m);background:var(--io-background);border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.mobile-deposits__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:var(--tui-padding-s)}.mobile-deposits__buttons[_ngcontent-%COMP%]   button.claim[_ngcontent-%COMP%]{width:168px;height:40px}.mobile-deposits__buttons[_ngcontent-%COMP%]   button.withdraw[_ngcontent-%COMP%]{width:40px;height:40px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Ne(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-rotating-icon", 12),
            t.bIt("iconClick", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.refreshDeposits());
            }),
            t.k0s();
        }
        if (2 & i) {
          const e = t.XpG().ngLet;
          t.Y8G("rotating", e.depositsLoading);
        }
      }
      function Ae(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-desktop-deposits", 14),
            t.bIt("onClaim", function (a) {
              t.eBV(e);
              const o = t.XpG(3);
              return t.Njj(o.startClaim(a));
            })("onWithdraw", function (a) {
              t.eBV(e);
              const o = t.XpG(3);
              return t.Njj(o.startWithdraw(a));
            }),
            t.nI1(1, "async"),
            t.nI1(2, "async"),
            t.nI1(3, "async"),
            t.k0s();
        }
        if (2 & i) {
          const e = t.XpG(2).ngLet,
            n = t.XpG();
          t.Y8G("deposits", e.deposits)("total", t.bMT(1, 5, n.total$))(
            "claimingId",
            t.bMT(2, 7, n.claimingId$)
          )("withdrawingId", t.bMT(3, 9, n.withdrawingId$))(
            "isDarkTheme",
            e.isDarkTheme
          );
        }
      }
      function Fe(i, s) {
        if (
          (1 & i &&
            (t.qex(0),
            t.DNE(1, Ae, 4, 11, "app-desktop-deposits", 13),
            t.bVm()),
          2 & i)
        ) {
          t.XpG();
          const e = t.sdS(12),
            n = t.XpG();
          t.R7$(1), t.Y8G("ngIf", !n.isMobile)("ngIfElse", e);
        }
      }
      function $e(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "app-mobile-deposits", 14),
            t.bIt("onClaim", function (a) {
              t.eBV(e);
              const o = t.XpG(2);
              return t.Njj(o.startClaim(a));
            })("onWithdraw", function (a) {
              t.eBV(e);
              const o = t.XpG(2);
              return t.Njj(o.startWithdraw(a));
            }),
            t.nI1(1, "async"),
            t.nI1(2, "async"),
            t.nI1(3, "async"),
            t.k0s();
        }
        if (2 & i) {
          const e = t.XpG().ngLet,
            n = t.XpG();
          t.Y8G("deposits", e.deposits)("total", t.bMT(1, 5, n.total$))(
            "claimingId",
            t.bMT(2, 7, n.claimingId$)
          )("withdrawingId", t.bMT(3, 9, n.withdrawingId$))(
            "isDarkTheme",
            e.isDarkTheme
          );
        }
      }
      function De(i, s) {
        1 & i && (t.qex(0), t.nrm(1, "app-login-button"), t.bVm());
      }
      function Be(i, s) {
        if (
          (1 & i && (t.j41(0, "div", 15)(1, "span", 16), t.EFF(2), t.k0s()()),
          2 & i)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(2),
            t.SpI(
              " ",
              e.user
                ? "You have no deposits."
                : "Connect wallet to see your deposits.",
              ""
            );
        }
      }
      function je(i, s) {
        if (
          (1 & i &&
            (t.qex(0),
            t.j41(1, "app-window-container", 1)(2, "div", 2)(3, "div", 3)(
              4,
              "span",
              4
            ),
            t.EFF(5),
            t.nI1(6, "translate"),
            t.k0s(),
            t.DNE(7, Ne, 1, 1, "app-rotating-icon", 5),
            t.k0s()(),
            t.j41(8, "div", 6)(9, "tui-loader", 7),
            t.DNE(10, Fe, 2, 2, "ng-container", 8),
            t.k0s(),
            t.DNE(11, $e, 4, 11, "ng-template", null, 9, t.C5r),
            t.k0s(),
            t.DNE(13, De, 2, 0, "ng-container", 10),
            t.k0s(),
            t.DNE(14, Be, 3, 1, "ng-template", null, 11, t.C5r),
            t.bVm()),
          2 & i)
        ) {
          const e = s.ngLet,
            n = t.sdS(15);
          t.R7$(5),
            t.JRh(t.bMT(6, 8, "staking.overview.endTitle")),
            t.R7$(2),
            t.Y8G("ngIf", e.user),
            t.R7$(2),
            t.Y8G("showLoader", e.depositsLoading)("inheritColor", !0)(
              "overlay",
              !0
            ),
            t.R7$(1),
            t.Y8G("ngIf", e.deposits.length)("ngIfElse", n),
            t.R7$(3),
            t.Y8G("ngIf", !e.user);
        }
      }
      const Le = function (i, s, e, n) {
        return { isDarkTheme: i, deposits: s, depositsLoading: e, user: n };
      };
      let Ve = (() => {
        class i {
          constructor(e, n, a, o, c, u, g, h, f, M) {
            (this.router = e),
              (this.stakingService = n),
              (this.cdr = a),
              (this.headerStore = o),
              (this.themeService = c),
              (this.stakingModalService = u),
              (this.stakingNotificationService = g),
              (this.window = h),
              (this.destroy$ = f),
              (this.authService = M),
              (this.deposits$ = this.stakingService.deposits$),
              (this.depositsLoading$ = this.stakingService.depositsLoading$),
              (this.total$ = this.stakingService.total$),
              (this.isDarkTheme$ = this.themeService.theme$.pipe(
                (0, w.T)((O) => "dark" === O)
              )),
              (this.isMobile = this.headerStore.isMobile),
              (this._claimingId$ = new b.t("")),
              (this.claimingId$ = this._claimingId$.asObservable()),
              (this._withdrawingId$ = new b.t("")),
              (this.withdrawingId$ = this._withdrawingId$.asObservable()),
              (this.currentUser$ = this.authService.currentUser$);
          }
          ngOnInit() {
            this.stakingService
              .loadDeposits()
              .pipe((0, z.Eb)(this.cdr), (0, D.Q)(this.destroy$))
              .subscribe();
          }
          startClaim(e) {
            var n = this;
            return (0, m.A)(function* () {
              n.stakingModalService
                .showClaimModal(
                  e.totalNftRewards,
                  n.stakingService.needSwitchNetwork$
                )
                .pipe(
                  (0, P.p)(Boolean),
                  (0, v.n)(
                    () => (n._claimingId$.next(e.id), n.stakingService.claim(e))
                  )
                )
                .subscribe(() => {
                  n._claimingId$.next("");
                });
            })();
          }
          startWithdraw(e) {
            var n = this;
            return (0, m.A)(function* () {
              Date.now() > e.endTimestamp ||
              (yield n.stakingService.isEmergencyStopped())
                ? n.withdraw(e)
                : n.stakingNotificationService.showNftLockedError(
                    new p.vh("en-US").transform(e.endTimestamp, "mediumDate")
                  );
            })();
          }
          withdraw(e) {
            this.stakingModalService
              .showWithdrawModal(
                e.amount,
                this.stakingService.needSwitchNetwork$,
                e?.totalNftRewards
              )
              .pipe(
                (0, P.p)(Boolean),
                (0, v.n)(
                  () => (
                    this._withdrawingId$.next(e.id),
                    this.stakingService.withdraw(e)
                  )
                )
              )
              .subscribe(() => this._withdrawingId$.next(""));
          }
          refreshDeposits() {
            this.stakingService
              .loadDeposits()
              .pipe((0, _e.s)(1))
              .subscribe();
          }
          navigateToCcrForm() {
            var e = this;
            return (0, m.A)(function* () {
              const n = e.router.serializeUrl(
                e.router.createUrlTree(["/"], {
                  queryParams: {
                    from: "RBC",
                    to: "RBC",
                    fromChain: "ETH",
                    toChain: "ARBITRUM",
                    amount: 5e4,
                  },
                })
              );
              e.window.open(n, "_blank");
            })();
          }
          navigateToStakeForm() {
            this.router.navigate(["staking", "new-position"]);
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || i)(
              t.rXU(T.Ix),
              t.rXU(G),
              t.rXU(t.gRc),
              t.rXU(B.X),
              t.rXU(be.F),
              t.rXU(J),
              t.rXU(L),
              t.rXU(dt.jf),
              t.rXU($.ew, 2),
              t.rXU(Q.u)
            );
          });
          static #e = (this.ɵcmp = t.VBU({
            type: i,
            selectors: [["app-deposits"]],
            features: [t.Jv_([$.ew])],
            decls: 5,
            vars: 14,
            consts: [
              [4, "ngLet"],
              [1, "deposits", "fade-in"],
              [1, "deposits__head"],
              [1, "deposits__title"],
              [1, "deposits__title-text"],
              [3, "rotating", "iconClick", 4, "ngIf"],
              [1, "deposits__body"],
              [1, "inline-flex", 3, "showLoader", "inheritColor", "overlay"],
              [4, "ngIf", "ngIfElse"],
              ["mobileDeposits", ""],
              [4, "ngIf"],
              ["noDepositsOrNotLogged", ""],
              [3, "rotating", "iconClick"],
              [
                3,
                "deposits",
                "total",
                "claimingId",
                "withdrawingId",
                "isDarkTheme",
                "onClaim",
                "onWithdraw",
                4,
                "ngIf",
                "ngIfElse",
              ],
              [
                3,
                "deposits",
                "total",
                "claimingId",
                "withdrawingId",
                "isDarkTheme",
                "onClaim",
                "onWithdraw",
              ],
              [1, "no-deposits"],
              [1, "no-deposits__text"],
            ],
            template: function (n, a) {
              1 & n &&
                (t.DNE(0, je, 16, 10, "ng-container", 0),
                t.nI1(1, "async"),
                t.nI1(2, "async"),
                t.nI1(3, "async"),
                t.nI1(4, "async")),
                2 & n &&
                  t.Y8G(
                    "ngLet",
                    t.ziG(
                      9,
                      Le,
                      t.bMT(1, 1, a.isDarkTheme$),
                      t.bMT(2, 3, a.deposits$),
                      t.bMT(3, 5, a.depositsLoading$),
                      t.bMT(4, 7, a.currentUser$)
                    )
                  );
            },
            dependencies: [
              p.bT,
              rt.N,
              fe,
              ye.X,
              st.r,
              U.jT,
              Me,
              Ee,
              p.Jj,
              x.D9,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.deposits[_ngcontent-%COMP%]{position:relative;display:block;max-width:540px;margin:0 auto}.deposits__head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--tui-padding-m)}.deposits__head-btn[_ngcontent-%COMP%]{height:30px;font-weight:500;font-size:15px;letter-spacing:.15px;border-radius:var(--tui-radius-m)}.deposits__body[_ngcontent-%COMP%]{padding:var(--tui-padding-m);background:var(--io-background);border-radius:var(--tui-radius-m)}.deposits__title[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;padding:0 var(--tui-padding-l)}.deposits__title-text[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:15px;line-height:21px;letter-spacing:normal;white-space:nowrap}.deposits__title_full-width[_ngcontent-%COMP%]{justify-content:space-between;width:100%}@media (max-width: 480px){.deposits__refresh-btn-icon[_ngcontent-%COMP%]{width:15px;height:15px}}.no-deposits[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:400;font-size:16px;line-height:16px;letter-spacing:.54px;width:100%;margin-top:2px;padding:var(--tui-padding-m);text-align:center;border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}app-login-button[_ngcontent-%COMP%]     button{width:100%;margin-top:12px}.connect-wallet[_ngcontent-%COMP%]{display:block;max-width:396px;margin:0 auto}.fade-in[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_fade-in;animation-duration:.4s;animation-timing-function:ease-in;animation-delay:0s;animation-fill-mode:forwards}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}@media (max-width: 651px){  app-rotating-icon svg path{fill:var(--tui-text-01)}  app-window-container .window-container{padding:0!important;background:none!important;border-radius:0!important}.deposits__wrapper[_ngcontent-%COMP%]{position:relative;padding:26px 0;background:transparent;border-radius:0}.deposits__title[_ngcontent-%COMP%]{gap:8px;justify-content:space-between;width:100%;padding:0}.deposits__title-text[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:18px;line-height:25px;letter-spacing:.54px;padding:0 20px;text-align:center;text-wrap:wrap}.deposits__head[_ngcontent-%COMP%]{margin-bottom:0;padding:var(--tui-padding-m);background:var(--io-background);border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.deposits__head-btn[_ngcontent-%COMP%]{display:none}.deposits__body[_ngcontent-%COMP%]{padding:0;background:none;border-radius:0}.no-deposits[_ngcontent-%COMP%]{background:var(--io-background)}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function He(i, s) {
        if (1 & i) {
          const e = t.RV6();
          t.j41(0, "button", 4),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.navigateToStakeForm());
            }),
            t.EFF(1),
            t.nI1(2, "translate"),
            t.k0s();
        }
        2 & i &&
          (t.R7$(1),
          t.SpI(" ", t.bMT(2, 1, "staking.deposits.newPosition"), " "));
      }
      const Ge = [
        {
          path: "",
          children: [
            {
              path: "",
              component: (() => {
                class i {
                  constructor(e, n) {
                    (this.router = e),
                      (this.stakingService = n),
                      (this.deposits$ = this.stakingService.deposits$),
                      (this.depositsLoading$ =
                        this.stakingService.depositsLoading$),
                      (this.needLogin$ = this.stakingService.needLogin$);
                  }
                  navigateToStakeForm() {
                    this.router.navigate(["staking", "new-position"]);
                  }
                  static #t = (this.ɵfac = function (n) {
                    return new (n || i)(t.rXU(T.Ix), t.rXU(G));
                  });
                  static #e = (this.ɵcmp = t.VBU({
                    type: i,
                    selectors: [["app-staking"]],
                    decls: 9,
                    vars: 7,
                    consts: [
                      [
                        "class",
                        "new-position-button",
                        "tuiButton",
                        "",
                        "type",
                        "button",
                        "size",
                        "l",
                        "appearance",
                        "primary",
                        3,
                        "click",
                        4,
                        "ngIf",
                      ],
                      [1, "rules"],
                      [
                        // "href",
                        // "https://cryptorubic.medium.com/dear-rubicans-ffcf7b611b42",
                        "target",
                        "_blank",
                        1,
                        "rules__link",
                      ],
                      [1, "rules__icon", 3, "inlineSVG"],
                      [
                        "tuiButton",
                        "",
                        "type",
                        "button",
                        "size",
                        "l",
                        "appearance",
                        "primary",
                        1,
                        "new-position-button",
                        3,
                        "click",
                      ],
                    ],
                    template: function (n, a) {
                      1 & n &&
                        (t.qex(0),
                        t.DNE(1, He, 3, 3, "button", 0),
                        t.nI1(2, "async"),
                        t.nrm(3, "app-deposits"),
                        t.bVm(),
                        t.j41(4, "div", 1)(5, "a", 2),
                        t.EFF(6),
                        t.nI1(7, "translate"),
                        t.nrm(8, "div", 3),
                        t.k0s()()),
                        2 & n &&
                          (t.R7$(1),
                          t.Y8G("ngIf", t.bMT(2, 3, a.deposits$).length),
                          t.R7$(5),
                          t.SpI(" ", t.bMT(7, 5, "staking.common.rules"), " "),
                          t.R7$(2),
                          t.Y8G(
                            "inlineSVG",
                            "assets/images/icons/link-arrow.svg"
                          ));
                    },
                    dependencies: [p.bT, A.ll, E.SM, Ve, p.Jj, x.D9],
                    styles: [
                      "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{display:block;max-width:802px;margin:0 auto;padding-top:38px}@media (max-width: 768px){[_nghost-%COMP%]{padding-top:3px}}app-statistics[_ngcontent-%COMP%]{display:block;margin-bottom:22px}@media (max-width: 768px){app-statistics[_ngcontent-%COMP%]{margin-bottom:16px}}app-deposits[_ngcontent-%COMP%]{display:block}@media (max-width: 768px){app-deposits[_ngcontent-%COMP%]{margin-bottom:16px}}.new-position-button[_ngcontent-%COMP%]{display:none;width:100%;margin-bottom:var(--tui-padding-l)}@media (max-width: 651px){.new-position-button[_ngcontent-%COMP%]{display:block}}.accordion[_ngcontent-%COMP%]{margin-bottom:12px;padding:12px;background:var(--form-background);border-radius:24px}.accordion[_ngcontent-%COMP%]     .title{display:flex;align-items:center;justify-content:space-between}.accordion[_ngcontent-%COMP%]     .t-content{padding:0}.rules[_ngcontent-%COMP%]{margin-top:20px}.rules__link[_ngcontent-%COMP%]{color:var(--tui-primary);font-weight:400;font-size:16px;line-height:19px;letter-spacing:normal;display:flex;gap:5px;align-items:center;justify-content:center;margin:0 auto 30px}.rules__icon[_ngcontent-%COMP%]{display:flex}.rules__icon[_ngcontent-%COMP%]     svg path[fill=black]{fill:var(--primary-color)}.rules__icon[_ngcontent-%COMP%]     svg rect[fill=black]{fill:var(--primary-color)}.past-campaings[_ngcontent-%COMP%]     tui-accordion{--tui-base-02: transparent}@media (max-width: 768px){.past-campaings[_ngcontent-%COMP%]     tui-accordion .header{min-height:30px;padding:.55rem 1.25rem}}.past-campaings[_ngcontent-%COMP%]     tui-accordion .header .title{color:var(--primary-text);font-weight:500;font-size:18px;line-height:22px;letter-spacing:normal}.past-campaings__card[_ngcontent-%COMP%]:not(:last-child){display:block;margin-bottom:12px}@media (max-width: 768px){.statistics[_ngcontent-%COMP%]{margin-bottom:12px;border-radius:22px}.staking[_ngcontent-%COMP%]{margin-bottom:12px}.staking__title[_ngcontent-%COMP%], .lp__title[_ngcontent-%COMP%]{margin-bottom:22px;font-size:18px;line-height:22px}.staking[_ngcontent-%COMP%], .lp[_ngcontent-%COMP%]{padding:22px;border-radius:22px}}.connect-wallet[_ngcontent-%COMP%]{display:block;max-width:396px;margin:0 auto 20px}",
                    ],
                    changeDetection: 0,
                  }));
                }
                return i;
              })(),
            },
            { path: "new-position", component: he },
          ],
        },
      ];
      let Ue = (() => {
        class i {
          static #t = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #e = (this.ɵmod = t.$C({ type: i }));
          static #n = (this.ɵinj = t.G2t({
            imports: [p.MD, T.iI.forChild(Ge), T.iI],
          }));
        }
        return i;
      })();
      var ze = r(30640),
        We = r(45387),
        Xe = r(174486);
      (0, r(259925).gc)({ size: "m", trackColor: "var(--tui-base-03)" });
      let Je = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.$C({ type: i })),
            (i.ɵinj = t.G2t({ imports: [[p.MD]] })),
            i
          );
        })(),
        Ze = (() => {
          class i {
            static #t = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #e = (this.ɵmod = t.$C({ type: i }));
            static #n = (this.ɵinj = t.G2t({
              providers: [ot, G, J, L],
              imports: [
                p.MD,
                Ue,
                ze.G,
                A.e1,
                U.Yc,
                Xe.DJ,
                I.X1,
                We.CN,
                Je,
                y.Q3,
                y.Q3,
                E.Pv,
                q.x3,
                pt.N,
              ],
            }));
          }
          return i;
        })();
    },
  },
]);
