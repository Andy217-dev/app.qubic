"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [748],
  {
    398748: (co, Ct, s) => {
      s.r(Ct), s.d(Ct, { HistoryModule: () => ro });
      var l = s(360177),
        kt = s(274710),
        Vt = s(295717),
        t = s(617705),
        Ut = s(556463);
      const R = {
        pending: { appearance: "info", label: "Pending" },
        success: { appearance: "success", label: "Success" },
        completed: { appearance: "success", label: "Success" },
        not_found: { appearance: "warning", label: "Not Found" },
        fail: { appearance: "error", label: "Failed" },
        revert: { appearance: "primary", label: "Revert" },
        reverted: { appearance: "success", label: "Reverted" },
        long_pending: { appearance: "info", label: "Pending" },
        ready_to_claim: { appearance: "primary", label: "Claim" },
        failed: { appearance: "error", label: "Failed" },
      };
      var d = s(96354),
        yt = s(323294),
        xt = s(84572),
        X = s(820140),
        $t = s(670152),
        M = s(525558),
        v = s(399172),
        ot = s(597647),
        y = s(905964),
        x = s(229835),
        m = s(259925),
        at = s(667337),
        S = s(181170),
        p = s(455748),
        E = s(897119),
        P = s(663055),
        F = s(776006),
        Ot = s(955879),
        k = s(489417),
        I = s(84412),
        w = s(474523),
        Ht = s(254843),
        C = s(187919),
        zt = s(606697),
        Jt = s(792460),
        Kt = s(496623),
        Wt = s(16123),
        B = s(873955);
      let j = (() => {
        class n {
          set activeItemIndex(e) {
            this._activeItemIndex$.next(e);
          }
          constructor(e, i, a, r, c) {
            (this.errorService = e),
              (this.notificationsService = i),
              (this.translateService = a),
              (this.sdkService = r),
              (this.http = c),
              (this._activeItemIndex$ = new I.t(0)),
              (this.activeItemIndex$ = this._activeItemIndex$.asObservable());
          }
          claimArbitrumBridgeTokens(e) {
            var i = this;
            return (0, w.A)(function* () {
              let a, r;
              const c = () => {
                a = i.notificationsService.show(
                  i.translateService.instant("bridgePage.progressMessage"),
                  {
                    label: i.translateService.instant(
                      "notifications.tradeInProgress"
                    ),
                    status: C.wS.Info,
                    autoClose: !1,
                    data: null,
                    icon: "",
                    defaultAutoCloseTime: 0,
                  }
                );
              };
              try {
                (r = yield p.ArbitrumRbcBridgeTrade.claimTargetTokens(e, {
                  onConfirm: c,
                })),
                  yield i.sendHashesOnClaimSuccess(e, r.transactionHash),
                  a.unsubscribe(),
                  i.notificationsService.show(
                    i.translateService.instant("bridgePage.successMessage"),
                    {
                      label: i.translateService.instant(
                        "notifications.successfulTradeTitle"
                      ),
                      status: C.wS.Success,
                      autoClose: 15e3,
                      data: null,
                      icon: "",
                      defaultAutoCloseTime: 0,
                    }
                  );
              } catch (u) {
                console.debug("[ArbitrumBridge] Transaction claim error: ", u),
                  i.errorService.catch(u);
              } finally {
                a?.unsubscribe();
              }
              return r;
            })();
          }
          sendHashesOnClaimSuccess(e, i) {
            var a = this;
            return (0, w.A)(function* () {
              return (0,
              Ht._)(a.http.post("v2/trades/crosschain/rbc_arbitrum_bridge", { source_tx_hash: e, dest_tx_hash: i }, null, { headers: { Signature: (0, Kt.d)(i.toLowerCase(), e.toLowerCase()) } }));
            })();
          }
          revertSymbiosis(e) {
            var i = this;
            return (0, w.A)(function* () {
              let a, r;
              const c = () => {
                a = i.notificationsService.show(
                  i.translateService.instant("bridgePage.progressMessage"),
                  {
                    label: i.translateService.instant(
                      "notifications.tradeInProgress"
                    ),
                    status: C.wS.Info,
                    autoClose: !1,
                    data: null,
                    icon: "",
                    defaultAutoCloseTime: 0,
                  }
                );
              };
              try {
                (r = yield i.sdkService.symbiosis.revertTrade(e, {
                  onConfirm: c,
                })),
                  a.unsubscribe(),
                  i.notificationsService.show(
                    i.translateService.instant("bridgePage.successMessage"),
                    {
                      label: i.translateService.instant(
                        "notifications.successfulTradeTitle"
                      ),
                      status: C.wS.Success,
                      autoClose: 15e3,
                      data: null,
                      icon: "",
                      defaultAutoCloseTime: 0,
                    }
                  );
              } catch (u) {
                console.debug("[Symbiosis] Transaction revert error: ", u),
                  i.errorService.catch(u);
              } finally {
                a?.unsubscribe();
              }
              return r;
            })();
          }
          revertCbridge(e, i) {
            var a = this;
            return (0, w.A)(function* () {
              let r, c;
              const u = () => {
                r = a.notificationsService.show(
                  a.translateService.instant("bridgePage.progressMessage"),
                  {
                    label: a.translateService.instant(
                      "notifications.tradeInProgress"
                    ),
                    status: C.wS.Info,
                    autoClose: !1,
                    data: null,
                    icon: "",
                    defaultAutoCloseTime: 0,
                  }
                );
              };
              try {
                (c = yield p.CrossChainCbridgeManager.makeRefund(i, e, "", u)),
                  r.unsubscribe(),
                  a.notificationsService.show(
                    a.translateService.instant("bridgePage.successMessage"),
                    {
                      label: a.translateService.instant(
                        "notifications.successfulTradeTitle"
                      ),
                      status: C.wS.Success,
                      autoClose: 15e3,
                      data: null,
                      icon: "",
                      defaultAutoCloseTime: 0,
                    }
                  );
              } catch (_) {
                console.debug("[Cbridge] Transaction revert error: ", _),
                  a.errorService.catch(_);
              } finally {
                r?.unsubscribe();
              }
              return c;
            })();
          }
          redeemArbitrum(e) {
            var i = this;
            return (0, w.A)(function* () {
              let a, r;
              const c = () => {
                a = i.notificationsService.show(
                  i.translateService.instant("bridgePage.progressMessage"),
                  {
                    label: i.translateService.instant(
                      "notifications.tradeInProgress"
                    ),
                    status: C.wS.Info,
                    autoClose: !1,
                    data: null,
                    icon: "",
                    defaultAutoCloseTime: 0,
                  }
                );
              };
              try {
                (r = yield p.ArbitrumRbcBridgeTrade.redeemTokens(e, {
                  onConfirm: c,
                })),
                  a.unsubscribe(),
                  i.notificationsService.show(
                    i.translateService.instant("bridgePage.successMessage"),
                    {
                      label: i.translateService.instant(
                        "notifications.successfulTradeTitle"
                      ),
                      status: C.wS.Success,
                      autoClose: 15e3,
                      data: null,
                      icon: "",
                      defaultAutoCloseTime: 0,
                    }
                  );
              } catch (u) {
                console.debug("[Cbridge] Transaction revert error: ", u),
                  i.errorService.catch(u);
              } finally {
                a?.unsubscribe();
              }
              return r;
            })();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(
              t.KVO(Jt.b),
              t.KVO(Wt.I),
              t.KVO(B.c$),
              t.KVO(zt.K),
              t.KVO(at.k)
            );
          });
          static #e = (this.ɵprov = t.jDH({ token: n, factory: n.ɵfac }));
        }
        return n;
      })();
      class rt {
        constructor(o) {
          (this.initialSorterValue = o),
            (this._size$ = new I.t(10)),
            (this.size$ = this._size$.asObservable()),
            (this._page$ = new I.t(0)),
            (this.page$ = this._page$.asObservable()),
            (this._direction$ = new I.t(-1)),
            (this.direction$ = this._direction$.asObservable()),
            (this._sorter$ = new I.t(this.initialSorterValue)),
            (this.sorter$ = this._sorter$.asObservable()),
            (this.commonTableService = (0, t.WQX)(j)),
            (this.activeItemIndex$ = this.commonTableService.activeItemIndex$);
        }
        onDirection(o) {
          this._direction$.next(o);
        }
        onSize(o) {
          this._size$.next(o);
        }
        onPage(o) {
          this._page$.next(o);
        }
        onSorting(o) {
          this._sorter$.next(o);
        }
      }
      var Zt = s(635370);
      let L = (() => {
        class n extends rt {
          constructor(e, i) {
            super("created_at"),
              (this.httpService = e),
              (this.walletConnector = i),
              (this.statusFilter = new k.MJ("All")),
              (this.addressChange$ = this.walletConnector.addressChange$),
              (this.request$ = (0, xt.z)([
                this.addressChange$,
                this.sorter$,
                this.direction$,
                this.page$,
                this.size$,
                (0, x.lD)(this.statusFilter),
                this.activeItemIndex$,
              ]).pipe(
                (0, $t.B)(50),
                (0, M.n)(([a, ...r]) =>
                  this.getData(...r).pipe((0, v.Z)(null))
                ),
                (0, ot.u)()
              )),
              (this.loading$ = this.request$.pipe((0, d.T)(m._s))),
              (this.total$ = this.request$.pipe(
                (0, y.p)(m.Aj),
                (0, d.T)(({ total: a }) => a),
                (0, v.Z)(1)
              )),
              (this.totalPages$ = this.total$.pipe(
                (0, X.v)(this.size$),
                (0, d.T)(([a, r]) => Math.trunc(a / r) + 1)
              )),
              (this.data$ = this.request$.pipe(
                (0, y.p)(m.Aj),
                (0, d.T)((a) => a.data.filter(m.Aj)),
                (0, v.Z)([])
              ));
          }
          getData(e, i, a, r, c, u) {
            const _ = this.walletConnector.address,
              f = Object.entries(R).find(([, b]) => b.label === c)?.[0],
              g = {
                address: _,
                page: a + 1,
                pageSize: r,
                ordering: -1 === i ? `-${e}` : e,
                ...(f && 0 === u && { trade_status: f }),
              };
            return this.httpService
              .get("v2/trades/crosschain", g)
              .pipe((0, d.T)((b) => this.transformResponse(b)));
          }
          transformResponse(e) {
            return {
              data: e.results.map((i) => {
                const a = {
                    symbol: i.from_token.symbol,
                    image: i.from_token.logo_url,
                    amount: p.Web3Pure.fromWei(
                      i.from_amount,
                      i.from_token.decimals
                    ),
                  },
                  r = {
                    symbol: i.to_token.symbol,
                    image: i.to_token.logo_url,
                    amount: p.Web3Pure.fromWei(
                      i.to_amount,
                      i.to_token.decimals
                    ),
                  },
                  c = p.FROM_BACKEND_BLOCKCHAINS[i.from_network],
                  _ = p.FROM_BACKEND_BLOCKCHAINS[i.to_network];
                return {
                  fromToken: a,
                  toToken: r,
                  fromBlockchain: {
                    name: c,
                    label: F.Z[c],
                    color: P.E[c],
                    image: E._[c],
                  },
                  toBlockchain: {
                    name: _,
                    label: F.Z[_],
                    color: P.E[_],
                    image: E._[_],
                  },
                  fromTx: {
                    hash: i.source_transaction.hash,
                    status: R[i.source_transaction.status],
                    explorerLink: i.source_transaction.explorer_url,
                  },
                  toTx: {
                    hash: i.dest_transaction.hash,
                    status: R[i.status.toLowerCase()],
                    explorerLink: i.dest_transaction.explorer_url,
                  },
                  date: i.created_at,
                  provider: Ot.r[Zt.w[i.provider]],
                  ...(i.changenow_id && { changenowId: i.changenow_id }),
                };
              }),
              total: e.count,
            };
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.KVO(at.k), t.KVO(S.c));
          });
          static #e = (this.ɵprov = t.jDH({ token: n, factory: n.ɵfac }));
        }
        return n;
      })();
      var Qt = s(276422);
      let A = (() => {
        class n extends rt {
          constructor(e, i) {
            super("created_at"),
              (this.httpService = e),
              (this.walletConnector = i),
              (this.addressChange$ = this.walletConnector.addressChange$),
              (this.request$ = (0, xt.z)([
                this.addressChange$,
                this.sorter$,
                this.direction$,
                this.page$,
                this.size$,
              ]).pipe(
                (0, $t.B)(50),
                (0, M.n)(([a, ...r]) =>
                  this.getData(...r).pipe((0, v.Z)(null))
                ),
                (0, ot.u)()
              )),
              (this.loading$ = this.request$.pipe((0, d.T)(m._s))),
              (this.total$ = this.request$.pipe(
                (0, y.p)(m.Aj),
                (0, d.T)(({ total: a }) => a),
                (0, v.Z)(1)
              )),
              (this.totalPages$ = this.total$.pipe(
                (0, X.v)(this.size$),
                (0, d.T)(([a, r]) => Math.trunc(a / r) + 1)
              )),
              (this.data$ = this.request$.pipe(
                (0, y.p)(m.Aj),
                (0, d.T)((a) => a.data.filter(m.Aj)),
                (0, v.Z)([])
              ));
          }
          getData(e, i, a, r) {
            return this.httpService
              .get("v2/trades/onchain", {
                address: this.walletConnector.address,
                page: a + 1,
                pageSize: r,
                ordering: -1 === i ? `-${e}` : e,
              })
              .pipe((0, d.T)((_) => this.transformResponse(_)));
          }
          transformResponse(e) {
            return {
              data: e.results.map((i) => {
                const a = {
                    symbol: i.from_token.symbol,
                    image: i.from_token.logo_url,
                    amount: p.Web3Pure.fromWei(
                      i.from_amount,
                      i.from_token.decimals
                    ),
                  },
                  r = {
                    symbol: i.to_token.symbol,
                    image: i.to_token.logo_url,
                    amount: p.Web3Pure.fromWei(
                      i.to_amount,
                      i.to_token.decimals
                    ),
                  },
                  c = p.FROM_BACKEND_BLOCKCHAINS[i.network],
                  u = { name: c, label: F.Z[c], color: P.E[c], image: E._[c] },
                  _ = {
                    hash: i.transaction.hash,
                    status: R[i.status],
                    explorerLink: i.transaction.explorer_url,
                  },
                  f = Object.entries(Qt.I).find(
                    ([, b]) => b === i.provider
                  )?.[0];
                return {
                  fromToken: a,
                  toToken: r,
                  blockchain: u,
                  tx: _,
                  date: i.created_at,
                  provider: Ot.r[f],
                };
              }),
              total: e.count,
            };
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.KVO(at.k), t.KVO(S.c));
          });
          static #e = (this.ɵprov = t.jDH({ token: n, factory: n.ɵfac }));
        }
        return n;
      })();
      var V = s(235020),
        st = s(750573),
        Mt = s(230620),
        U = s(564035),
        qt = s(242630),
        $ = s(45387),
        It = s(801203);
      function te(n, o) {
        if ((1 & n && t.nrm(0, "tui-data-list-wrapper", 12), 2 & n)) {
          const e = t.XpG(2);
          t.Y8G("items", e.items);
        }
      }
      function ee(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tui-select", 9),
            t.EFF(1, " Status "),
            t.nrm(2, "input", 10),
            t.DNE(3, te, 1, 1, "tui-data-list-wrapper", 11),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG();
          t.Y8G("formControl", e.statusFilter),
            t.R7$(2),
            t.Y8G("tuiTextfieldLabelOutside", !0);
        }
      }
      let ne = (() => {
        class n {
          constructor(e, i, a) {
            (this.crossChainTableService = e),
              (this.onChainTableService = i),
              (this.commonTableService = a),
              (this.activeItemIndex$ =
                this.commonTableService.activeItemIndex$),
              (this.statusFilter = this.crossChainTableService.statusFilter),
              (this.isCrossChain$ =
                this.commonTableService.activeItemIndex$.pipe(
                  (0, d.T)((r) => 0 === r)
                )),
              (this.items = Array.from(
                new Set(["All", ...Object.values(R).map((r) => r.label)])
              )),
              this.statusFilter.valueChanges.pipe((0, yt.F)()).subscribe(() => {
                this.crossChainTableService.onPage(0);
              });
          }
          onClick(e) {
            (this.commonTableService.activeItemIndex = e),
              this.crossChainTableService.onPage(0),
              this.onChainTableService.onPage(0);
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.rXU(L), t.rXU(A), t.rXU(j));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-history-header"]],
            decls: 16,
            vars: 7,
            consts: [
              [1, "header"],
              ["size", "s", 1, "tabs", 3, "underline", "activeItemIndex"],
              ["tuiTab", "", 3, "click"],
              ["inlineSVG", "assets/images/icons/history/cross.svg", 1, "icon"],
              [
                "inlineSVG",
                "assets/images/icons/history/onchain.svg",
                1,
                "icon",
              ],
              ["inlineSVG", "assets/images/icons/history/cn.svg", 1, "icon"],
              [1, "filter"],
              [1, "b-form"],
              [
                "class",
                "filter__select",
                "tuiTextfieldSize",
                "m",
                3,
                "formControl",
                4,
                "ngIf",
              ],
              ["tuiTextfieldSize", "m", 1, "filter__select", 3, "formControl"],
              [
                "placeholder",
                "Choose your hero",
                "tuiTextfield",
                "",
                3,
                "tuiTextfieldLabelOutside",
              ],
              [3, "items", 4, "tuiDataList"],
              [3, "items"],
            ],
            template: function (i, a) {
              1 & i &&
                (t.j41(0, "div", 0)(1, "tui-tabs", 1),
                t.nI1(2, "async"),
                t.j41(3, "button", 2),
                t.bIt("click", function () {
                  return a.onClick(0);
                }),
                t.nrm(4, "div", 3),
                t.EFF(5, " Cross Chain "),
                t.k0s(),
                t.j41(6, "button", 2),
                t.bIt("click", function () {
                  return a.onClick(1);
                }),
                t.nrm(7, "div", 4),
                t.EFF(8, " On Chain "),
                t.k0s(),
                t.j41(9, "button", 2),
                t.bIt("click", function () {
                  return a.onClick(2);
                }),
                t.nrm(10, "div", 5),
                t.EFF(11, " CN "),
                t.k0s()(),
                t.j41(12, "div", 6)(13, "form", 7),
                t.DNE(14, ee, 4, 2, "tui-select", 8),
                t.nI1(15, "async"),
                t.k0s()()()),
                2 & i &&
                  (t.R7$(1),
                  t.Y8G("underline", !1)(
                    "activeItemIndex",
                    t.bMT(2, 3, a.activeItemIndex$)
                  ),
                  t.R7$(13),
                  t.Y8G("ngIf", t.bMT(15, 5, a.isCrossChain$)));
            },
            dependencies: [
              l.bT,
              V.Qx,
              V.OV,
              V.vy,
              U.ll,
              st.ET,
              st.ww,
              qt.Bw,
              $.kf,
              $.G6,
              Mt.df,
              It.WX,
              k.qT,
              k.BC,
              k.cb,
              k.l_,
              l.Jj,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.tabs[_ngcontent-%COMP%]{height:var(--tui-height-m);margin-bottom:var(--tui-padding-s);background:var(--tui-base-01);border-radius:var(--tui-radius-m)}@media (max-width: 500px){.tabs[_ngcontent-%COMP%]{justify-content:space-around;width:100%}}.tabs[_ngcontent-%COMP%]   ._active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]     svg path, .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]     svg path{fill:var(--tui-text-01)}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0!important;padding:0 var(--tui-padding-l)}@media (max-width: 500px){.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){border-left:1px solid var(--secondary-background)}.tabs[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:var(--tui-padding-s)}.tabs[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]     svg path{transition:.3s ease-in-out;fill:var(--tui-text-03)}.header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width: 500px){.header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-end}}.filter[_ngcontent-%COMP%]{margin-bottom:var(--tui-padding-s)}.filter__select[_ngcontent-%COMP%]{width:120px}",
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      var ct = s(673864),
        wt = s(607673),
        ie = s(802248),
        H = s(647097),
        oe = s(450317),
        Dt = s(6249),
        lt = s(272782),
        dt = s(817565);
      const ae = [
        {
          provider: dt.X[p.BRIDGE_TYPE.ARBITRUM],
          fromBlockchain: p.BLOCKCHAIN_NAME.ARBITRUM,
          status: "Claim",
        },
      ];
      var re = s(732534),
        Gt = s(700409),
        se = s(513711),
        Rt = s(384281);
      const ce = function (n, o, e, i) {
        return {
          badge_error: n,
          badge_warning: o,
          badge_success: e,
          badge_info: i,
        };
      };
      let ut = (() => {
        class n {
          static #t = (this.ɵfac = function (i) {
            return new (i || n)();
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-rubic-badge"]],
            inputs: { status: "status", label: "label" },
            decls: 4,
            vars: 7,
            consts: [
              [1, "badge", 3, "ngClass"],
              [1, "badge__dot"],
              [1, "badge__label"],
            ],
            template: function (i, a) {
              1 & i &&
                (t.j41(0, "div", 0),
                t.nrm(1, "span", 1),
                t.j41(2, "span", 2),
                t.EFF(3),
                t.k0s()()),
                2 & i &&
                  (t.Y8G(
                    "ngClass",
                    t.ziG(
                      2,
                      ce,
                      "error" === a.status,
                      "warning" === a.status,
                      "success" === a.status,
                      "info" === a.status
                    )
                  ),
                  t.R7$(3),
                  t.JRh(a.label));
            },
            dependencies: [l.YU],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.badge[_ngcontent-%COMP%]{display:inline-flex;gap:var(--tui-padding-s);align-items:center;min-width:90px;height:24px;padding:0 var(--tui-padding-m);border-radius:var(--tui-radius-m)}.badge__label[_ngcontent-%COMP%]{white-space:nowrap}.badge_error[_ngcontent-%COMP%]{background:var(--tui-error-bg)}.badge_error[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%]{background:var(--tui-error-fill)}.badge_warning[_ngcontent-%COMP%]{background:var(--tui-warning-bg)}.badge_warning[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%]{background:var(--tui-warning-fill)}.badge_success[_ngcontent-%COMP%]{background:var(--tui-success-bg)}.badge_success[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%]{background:var(--tui-success-fill)}.badge_info[_ngcontent-%COMP%]{background:var(--tui-info-bg)}.badge_info[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%]{background:var(--tui-info-fill)}.badge__dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}",
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      var T = s(644819),
        le = s(649169),
        de = s(491813);
      function ue(n, o) {
        1 & n && (t.j41(0, "span", 12), t.EFF(1, "Copy ChangeNOW ID"), t.k0s());
      }
      function _e(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.qex(0),
            t.j41(1, "span", 10),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.copyToClipboard());
            }),
            t.k0s(),
            t.DNE(2, ue, 2, 0, "ng-template", null, 11, t.C5r),
            t.bVm();
        }
        if (2 & n) {
          const e = t.sdS(3);
          t.R7$(1),
            t.Y8G("inlineSVG", "assets/images/swaps/swaps-info/copy-icon.svg")(
              "tuiHint",
              e
            )("tuiHintShowDelay", 50)("tuiHintHideDelay", 100);
        }
      }
      function pe(n, o) {
        1 & n && (t.j41(0, "span", 13), t.nrm(1, "span", 14), t.k0s()),
          2 & n &&
            (t.R7$(1),
            t.Y8G("inlineSVG", "assets/images/swaps/swaps-info/tick.svg"));
      }
      function ge(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.qex(0),
            t.j41(1, "img", 15),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG(2);
              return t.Njj(a.onLinkClick());
            }),
            t.k0s(),
            t.bVm();
        }
      }
      function me(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tui-data-list", 4)(1, "div", 5)(2, "div", 6),
            t.qex(3),
            t.DNE(4, _e, 4, 4, "ng-container", 7),
            t.DNE(5, pe, 2, 1, "ng-template", null, 8, t.C5r),
            t.bVm(),
            t.DNE(7, ge, 2, 0, "ng-container", 9),
            t.k0s()()()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.sdS(6),
            a = t.XpG();
          t.Y8G("tuiActiveZoneParent", e),
            t.R7$(4),
            t.Y8G("ngIf", !a.isCopyClicked)("ngIfElse", i),
            t.R7$(3),
            t.Y8G("ngIf", a.link);
        }
      }
      let he = (() => {
        class n {
          constructor(e, i) {
            (this.navigator = e),
              (this.cdr = i),
              (this.copyValue = ""),
              (this.link = ""),
              (this.isDropdownOpen = !1),
              (this.isCopyClicked = !1);
          }
          copyToClipboard() {
            (this.isCopyClicked = !0),
              this.navigator.clipboard.writeText(this.copyValue),
              setTimeout(() => {
                (this.isCopyClicked = !1), this.cdr.markForCheck();
              }, 500);
          }
          onLinkClick() {
            window.open(this.link, "_blank"), (this.isDropdownOpen = !1);
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.rXU(ct.kW), t.rXU(t.gRc));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-dropdown-options-table-item"]],
            inputs: { copyValue: "copyValue", link: "link" },
            decls: 5,
            vars: 4,
            consts: [
              [3, "content", "open", "openChange"],
              ["dropdown", ""],
              [
                "appearance",
                "flat",
                "icon",
                "tuiIconMoreVertical",
                "tuiIconButton",
                "",
                "type",
                "button",
                3,
                "size",
                "pseudoHover",
              ],
              ["content", ""],
              [
                "tuiDataListDropdownManager",
                "",
                "size",
                "m",
                3,
                "tuiActiveZoneParent",
              ],
              [1, "dropdown-content-wrapper"],
              [1, "dropdown-content__actions"],
              [4, "ngIf", "ngIfElse"],
              ["copyClicked", ""],
              [4, "ngIf"],
              [
                "tuiHintDirection",
                "top-right",
                1,
                "dropdown-content__actions-copy-icon",
                3,
                "inlineSVG",
                "tuiHint",
                "tuiHintShowDelay",
                "tuiHintHideDelay",
                "click",
              ],
              ["copyHint", ""],
              [1, "dropdown-content__actions-address-hint"],
              [1, "dropdown-content__actions-copied-container"],
              [1, "dropdown-content__actions-copied-icon", 3, "inlineSVG"],
              [
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                1,
                "dropdown-content__actions-link-arrow",
                3,
                "click",
              ],
            ],
            template: function (i, a) {
              if (
                (1 & i &&
                  (t.j41(0, "tui-hosted-dropdown", 0, 1),
                  t.bIt("openChange", function (c) {
                    return (a.isDropdownOpen = c);
                  }),
                  t.nrm(2, "button", 2),
                  t.k0s(),
                  t.DNE(3, me, 8, 4, "ng-template", null, 3, t.C5r)),
                2 & i)
              ) {
                const r = t.sdS(1),
                  c = t.sdS(4);
                t.Y8G("content", c)("open", a.isDropdownOpen),
                  t.R7$(2),
                  t.Y8G("size", "xs")("pseudoHover", r.open || null);
              }
            },
            dependencies: [
              l.bT,
              U.ll,
              T.XZ,
              T.ZF,
              T.JL,
              T.AZ,
              lt.SM,
              It.uE,
              de.Y,
              le.o2,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.dropdown-content-wrapper[_ngcontent-%COMP%]{position:relative;z-index:1000000000000000;display:flex;gap:var(--tui-padding-s);align-items:baseline;padding:var(--tui-padding-s);overflow-y:hidden}.dropdown-content[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-m);align-items:center;justify-content:center;width:100%;height:25px;padding:var(--tui-padding-xs) var(--tui-padding-s)}.dropdown-content[_ngcontent-%COMP%]:hover{background:var(--tui-secondary);border-radius:var(--tui-radius-m)}.dropdown-content__actions[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center;justify-content:center}.dropdown-content__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{cursor:pointer}.dropdown-content__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]     *{width:100%;height:100%}.dropdown-content__actions-copy-icon[_ngcontent-%COMP%], .dropdown-content__actions-copied-container[_ngcontent-%COMP%]{width:14px;height:14px;transition:all .1s ease-in-out}.dropdown-content__actions-copy-icon[_ngcontent-%COMP%]:hover, .dropdown-content__actions-copied-container[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(-3px)}.dropdown-content__actions-link-arrow[_ngcontent-%COMP%]{width:12px;height:12px;transform:scale(1) translateY(3px);transition:all .1s ease-in-out}.dropdown-content__actions-link-arrow[_ngcontent-%COMP%]:hover{transform:scale(1.2) translate(3px)}",
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      var be = s(956977),
        N = s(63756),
        St = s(700584),
        fe = s(840683),
        ve = s(436651),
        z = s(834668),
        Te = s(434343),
        Et = s(805116),
        J = s(594350),
        Pt = s(7291),
        _t = s(158502),
        Ft = s(67638),
        Ce = s(322373),
        ke = s(392771),
        D = s(331635),
        Bt = s(240800);
      const ye = ["tuiTh", ""];
      function xe(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "button", 3),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.table.updateSorterAndDirection(a.sorter));
            }),
            t.eu8(1, 4),
            t.EFF(2),
            t.nI1(3, "async"),
            t.nrm(4, "tui-svg", 5),
            t.k0s();
        }
        if (2 & n) {
          const e = t.XpG(),
            i = t.sdS(2);
          t.AVh("t-sort_sorted", e.isCurrent),
            t.R7$(1),
            t.Y8G("ngTemplateOutlet", i),
            t.R7$(1),
            t.SpI(" ", t.bMT(3, 5, e.table.change$), " "),
            t.R7$(2),
            t.Y8G("src", e.icon);
        }
      }
      function $e(n, o) {
        1 & n && t.SdG(0);
      }
      function Oe(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "div", 6),
            t.bIt("tuiResized", function (a) {
              t.eBV(e);
              const r = t.XpG();
              return t.Njj(r.onResized(a));
            }),
            t.k0s();
        }
      }
      const K = ["*"],
        Me = ["tuiTd", ""],
        Ie = ["tuiTr", ""];
      function we(n, o) {
        if ((1 & n && (t.j41(0, "td", 5), t.EFF(1), t.k0s()), 2 & n)) {
          const e = o.ngIf,
            i = t.XpG(2).$implicit;
          t.R7$(1), t.SpI(" ", e[i], " ");
        }
      }
      function De(n, o) {
        if (
          (1 & n && (t.DNE(0, we, 2, 1, "td", 4), t.nI1(1, "async")), 2 & n)
        ) {
          const e = t.XpG(3);
          t.Y8G("ngIf", t.bMT(1, 1, e.item$));
        }
      }
      function Ge(n, o) {
        if (
          (1 & n &&
            (t.qex(0, 2),
            t.DNE(1, De, 2, 3, "ng-template", null, 3, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.sdS(2),
            a = t.XpG().ngIf;
          t.Y8G("ngTemplateOutlet", (null == a[e] ? null : a[e].template) || i);
        }
      }
      function Re(n, o) {
        if (
          (1 & n && (t.qex(0), t.DNE(1, Ge, 3, 1, "ng-container", 1), t.bVm()),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(1), t.Y8G("ngForOf", e.table.columns);
        }
      }
      const Se = ["tuiTbody", ""];
      function Ee(n, o) {
        if ((1 & n && (t.qex(0), t.EFF(1), t.bVm()), 2 & n)) {
          const e = o.polymorpheusOutlet;
          t.R7$(1), t.SpI(" ", e, " ");
        }
      }
      function Pe(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "tr")(1, "th", 1)(2, "button", 2),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.onClick());
            }),
            t.j41(3, "span", 3),
            t.DNE(4, Ee, 2, 1, "ng-container", 4),
            t.k0s(),
            t.nrm(5, "tui-svg", 5),
            t.k0s()()();
        }
        if (2 & n) {
          const e = t.XpG();
          t.R7$(1),
            t.Y8G("colSpan", e.table.columns.length),
            t.R7$(3),
            t.Y8G("polymorpheusOutlet", e.heading),
            t.R7$(1),
            t.AVh("t-chevron_rotated", e.open),
            t.Y8G("src", e.arrowOptions.iconLarge);
        }
      }
      function Fe(n, o) {
        1 & n && (t.qex(0), t.SdG(1), t.bVm());
      }
      function Be(n, o) {
        if ((1 & n && (t.eu8(0, 7), t.nI1(1, "tuiMapper")), 2 & n)) {
          const e = o.$implicit,
            i = o.index,
            a = t.XpG(2);
          t.Y8G("ngTemplateOutlet", a.row.template)(
            "ngTemplateOutletContext",
            t.brH(1, 2, e, a.toContext, i)
          );
        }
      }
      function je(n, o) {
        if (
          (1 & n && (t.qex(0), t.DNE(1, Be, 2, 6, "ng-container", 6), t.bVm()),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(1), t.Y8G("ngForOf", e.sorted);
        }
      }
      const Ne = ["tuiThGroup", ""];
      function Ye(n, o) {
        if ((1 & n && (t.j41(0, "th", 5), t.EFF(1), t.k0s()), 2 & n)) {
          const e = t.XpG(2).$implicit;
          t.R7$(1), t.SpI(" ", e.toString(), " ");
        }
      }
      function Xe(n, o) {
        if ((1 & n && t.DNE(0, Ye, 2, 1, "th", 4), 2 & n)) {
          const e = t.XpG(3);
          t.Y8G("ngIf", !e.th && !e.heads.length);
        }
      }
      function Le(n, o) {
        if (
          (1 & n &&
            (t.qex(0, 2),
            t.DNE(1, Xe, 1, 1, "ng-template", null, 3, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.sdS(2),
            a = t.XpG().ngIf;
          t.Y8G(
            "ngTemplateOutlet",
            (null == a[e.toString()] ? null : a[e.toString()].template) || i
          );
        }
      }
      function Ae(n, o) {
        if (
          (1 & n && (t.qex(0), t.DNE(1, Le, 3, 1, "ng-container", 1), t.bVm()),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(1), t.Y8G("ngForOf", e.table.columns);
        }
      }
      let W = (() => {
        class n {
          constructor(e) {
            (this.template = e), (this.tuiCell = "");
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.rXU(t.C4Q));
          }),
          (n.ɵdir = t.FsC({
            type: n,
            selectors: [["", "tuiCell", ""]],
            inputs: { tuiCell: "tuiCell" },
          })),
          n
        );
      })();
      const jt = new t.nKC("[TUI_STUCK]"),
        Ve = {
          provide: jt,
          deps: [t.aKT, N.PZ],
          useFactory: ({ nativeElement: n }, o) => {
            const e = o.pipe((0, d.T)(([{ intersectionRatio: i }]) => i < 1));
            return (n["$.class._stuck"] = e), e;
          },
        },
        Ue = [
          { provide: N.CY, useValue: "10000px 10000px 10000px 0px" },
          { provide: N.jB, useValue: [0, 1] },
          {
            provide: $.Cs,
            useFactory: () => {
              const n = new $.Px();
              return (n.appearance = C.bC.Table), n;
            },
          },
          { provide: $.uN, useValue: { labelOutside: !0 } },
          {
            provide: Ft.X0,
            deps: [[new t.kdw(), Ft.X0]],
            useFactory: (n) =>
              Object.assign(Object.assign({}, n), { hideButtons: !0 }),
          },
          { provide: $.tI, useExisting: (0, t.Rfq)(() => h) },
          N.PZ,
          Pt.si,
          Ve,
        ],
        Z = (0, m.gc)({
          sticky: !1,
          resizable: !1,
          open: !0,
          size: "m",
          direction: 1,
          sortIcons: {
            asc: "tuiIconSortAscending",
            desc: "tuiIconSortDescending",
            off: "tuiIconSortOff",
          },
        });
      let h = (() => {
          class n extends fe.zY {
            constructor(e, i, a, r, c) {
              super(),
                (this.entries$ = e),
                (this.mode$ = i),
                (this.stuck$ = a),
                (this.options = r),
                (this.cdr = c),
                (this.columns = []),
                (this.size = this.options.size),
                (this.direction = this.options.direction),
                (this.directionChange = new t.bkB()),
                (this.sorterChange = new t.bkB()),
                (this.sorter = () => 0);
            }
            updateSorterAndDirection(e) {
              this.sorter === e
                ? this.updateDirection(1 === this.direction ? -1 : 1)
                : (this.updateSorter(e), this.updateDirection(1));
            }
            ngAfterViewInit() {
              this.cdr.detectChanges();
            }
            updateSorter(e) {
              (this.sorter = e || (() => 0)),
                this.sorterChange.emit(this.sorter),
                this.change$.next();
            }
            updateDirection(e) {
              (this.direction = e),
                this.directionChange.emit(this.direction),
                this.change$.next();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU(N.PZ),
                t.rXU(_t.fL),
                t.rXU(jt),
                t.rXU(Z),
                t.rXU(t.gRc)
              );
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["table", "tuiTable", ""]],
              hostAttrs: [2, "border-collapse", "separate"],
              hostVars: 1,
              hostBindings: function (e, i) {
                1 & e &&
                  t.bIt("$.data-mode.attr", function () {
                    return i.mode$;
                  })("$.class._stuck", function () {
                    return i.stuck$;
                  }),
                  2 & e && t.BMQ("data-size", i.size);
              },
              inputs: {
                columns: "columns",
                size: "size",
                direction: "direction",
                sorter: "sorter",
              },
              outputs: {
                directionChange: "directionChange",
                sorterChange: "sorterChange",
              },
              features: [t.Jv_(Ue), t.Vt3],
            })),
            n
          );
        })(),
        Y = (() => {
          class n {
            constructor(e) {
              this.template = e;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(t.C4Q));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["", "tuiHead", ""]],
              inputs: { tuiHead: "tuiHead" },
            })),
            n
          );
        })(),
        He = (() => {
          class n {
            constructor(e, i, a) {
              (this.doc = e),
                (this.el = i),
                (this.parentRef = a),
                (this.tuiResized = (0, x.xM)(
                  this.el.nativeElement,
                  "mousedown"
                ).pipe(
                  (0, x.QA)(),
                  (0, M.n)(() => {
                    const { width: r, right: c } =
                      this.parentRef.nativeElement.getBoundingClientRect();
                    return (0, x.xM)(this.doc, "mousemove").pipe(
                      (0, yt.F)(),
                      (0, d.T)(({ clientX: u }) => r + u - c),
                      (0, be.Q)((0, x.xM)(this.doc, "mouseup"))
                    );
                  })
                ));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(l.qQ), t.rXU(t.aKT), t.rXU(_t.UN));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["", "tuiResized", ""]],
              outputs: { tuiResized: "tuiResized" },
            })),
            n
          );
        })(),
        ze = (() => {
          class n {
            constructor(e) {
              (this.template = e), (this.tuiRowOf = []);
            }
            static ngTemplateContextGuard(e, i) {
              return !0;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(t.C4Q));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["ng-template", "tuiRow", ""]],
              inputs: { tuiRowOf: "tuiRowOf" },
            })),
            n
          );
        })(),
        G = (() => {
          class n {
            constructor(e, i, a) {
              (this.options = e),
                (this.head = i),
                (this.table = a),
                (this.sorter = this.head
                  ? (r, c) => (0, m._J)(r[this.key], c[this.key])
                  : null),
                (this.resizable = this.options.resizable),
                (this.sticky = this.options.sticky),
                (this.width = null);
            }
            get key() {
              if (!this.head) throw new ve.$E();
              return this.head.tuiHead;
            }
            get isCurrent() {
              return (
                !!this.sorter &&
                !!this.table &&
                this.sorter === this.table.sorter
              );
            }
            get icon() {
              var e;
              return this.isCurrent
                ? 1 ===
                  (null === (e = this.table) || void 0 === e
                    ? void 0
                    : e.direction)
                  ? this.options.sortIcons.desc
                  : this.options.sortIcons.asc
                : this.options.sortIcons.off;
            }
            onResized(e) {
              this.width = e;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU(Z),
                t.rXU(Y, 8),
                t.rXU(
                  (0, t.Rfq)(() => h),
                  8
                )
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["th", "tuiTh", ""]],
              hostVars: 4,
              hostBindings: function (e, i) {
                2 & e &&
                  (t.xc7("width", i.width, "px"), t.AVh("_sticky", i.sticky));
              },
              inputs: {
                sorter: "sorter",
                resizable: "resizable",
                sticky: "sticky",
              },
              features: [t.Jv_([{ provide: _t.UN, useExisting: t.aKT }])],
              attrs: ye,
              ngContentSelectors: K,
              decls: 4,
              vars: 3,
              consts: [
                [
                  "type",
                  "button",
                  "class",
                  "t-sort",
                  3,
                  "t-sort_sorted",
                  "click",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["content", ""],
                ["class", "t-bar", 3, "tuiResized", 4, "ngIf"],
                ["type", "button", 1, "t-sort", 3, "click"],
                [3, "ngTemplateOutlet"],
                [1, "t-sort-icon", 3, "src"],
                [1, "t-bar", 3, "tuiResized"],
              ],
              template: function (e, i) {
                if (
                  (1 & e &&
                    (t.NAR(),
                    t.DNE(0, xe, 5, 7, "button", 0),
                    t.DNE(1, $e, 1, 0, "ng-template", null, 1, t.C5r),
                    t.DNE(3, Oe, 1, 0, "div", 2)),
                  2 & e)
                ) {
                  const a = t.sdS(2);
                  t.Y8G("ngIf", i.sorter && i.table)("ngIfElse", a),
                    t.R7$(3),
                    t.Y8G("ngIf", i.resizable);
                }
              },
              dependencies: [J._Y, l.bT, l.T3, He, l.Jj],
              styles: [
                '[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:bold;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04)}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:bold;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}',
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        Je = (() => {
          class n {
            constructor(e, i, a) {
              (this.sortBy = e),
                (this.table = i),
                (this.th = a),
                (this.sorter = () => 0);
            }
            get key() {
              return this.th.key;
            }
            ngOnInit() {
              (this.sorter = this.match ? this.table.sorter : this.sorter),
                (this.th.sorter = this.sorter);
            }
            ngDoCheck() {
              this.match &&
                this.table.sorter !== this.sorter &&
                this.table.updateSorter(this.sorter);
            }
            get match() {
              return this.sortBy.tuiSortBy === this.key;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU((0, t.Rfq)(() => pt)),
                t.rXU(h),
                t.rXU(G)
              );
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["th", "tuiTh", "", "tuiSortable", ""]],
            })),
            n
          );
        })(),
        pt = (() => {
          class n {
            constructor(e) {
              (this.table = e),
                (this.sortables = z.xQ),
                (this.tuiSortBy = null),
                (this.tuiSortByChange = this.table.sorterChange.pipe(
                  (0, y.p)(() => !!this.sortables.length),
                  (0, d.T)((i) => this.getKey(i))
                ));
            }
            getKey(e) {
              var i;
              return (
                (null === (i = this.sortables.find((a) => a.sorter === e)) ||
                void 0 === i
                  ? void 0
                  : i.key) || null
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(h));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["table", "tuiTable", "", "tuiSortBy", ""]],
              contentQueries: function (e, i, a) {
                if ((1 & e && t.wni(a, Je, 5), 2 & e)) {
                  let r;
                  t.mGM((r = t.lsd())) && (i.sortables = r);
                }
              },
              inputs: { tuiSortBy: "tuiSortBy" },
              outputs: { tuiSortByChange: "tuiSortByChange" },
            })),
            n
          );
        })(),
        Q = (() => {
          class n {
            constructor(e) {
              this.table = e;
            }
            transform(e) {
              return this.sort(e, this.table.sorter, this.table.direction);
            }
            sort(e, i, a) {
              return [...e].sort((r, c) => a * i(r, c));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(h, 16));
            }),
            (n.ɵpipe = t.EJ8({ name: "tuiTableSort", type: n, pure: !1 })),
            (0, D.__decorate)([Te.PE], n.prototype, "sort", null),
            n
          );
        })();
      const gt = [
        Et.ew,
        Q,
        {
          provide: h,
          deps: [[new t.kdw(), h], t.gRc, Et.ew],
          useFactory: Pt.HB,
        },
      ];
      let q = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [
                ["th", "tuiTd", ""],
                ["td", "tuiTd", ""],
              ],
              contentQueries: function (e, i, a) {
                if ((1 & e && t.wni(a, k.vO, 5), 2 & e)) {
                  let r;
                  t.mGM((r = t.lsd())) && (i.control = r.first);
                }
              },
              hostVars: 2,
              hostBindings: function (e, i) {
                2 & e && t.AVh("_editable", i.control);
              },
              attrs: Me,
              ngContentSelectors: K,
              decls: 1,
              vars: 0,
              template: function (e, i) {
                1 & e && (t.NAR(), t.SdG(0));
              },
              styles: [
                '[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;transform:translate(0)}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}',
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        tt = (() => {
          class n {
            constructor(e, i) {
              (this.table = e),
                (this.body = i),
                (this.cells = z.xQ),
                (this.contentReady$ = new ke.m(1)),
                (this.cells$ = this.contentReady$.pipe(
                  (0, M.n)(() => (0, x.MJ)(this.cells)),
                  (0, d.T)((a) =>
                    a.reduce(
                      (r, c) =>
                        Object.assign(Object.assign({}, r), { [c.tuiCell]: c }),
                      {}
                    )
                  )
                )),
                (this.item$ = this.contentReady$.pipe(
                  (0, M.n)(() => (0, x.MJ)(this.body.rows)),
                  (0, d.T)(
                    (a) => this.body.sorted[a.findIndex((r) => r === this)]
                  )
                ));
            }
            ngAfterContentInit() {
              return (0, D.__awaiter)(this, void 0, void 0, function* () {
                yield Promise.resolve(), this.contentReady$.next(!0);
              });
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU((0, t.Rfq)(() => h)),
                t.rXU((0, t.Rfq)(() => et))
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["tr", "tuiTr", ""]],
              contentQueries: function (e, i, a) {
                if ((1 & e && t.wni(a, W, 4), 2 & e)) {
                  let r;
                  t.mGM((r = t.lsd())) && (i.cells = r);
                }
              },
              features: [t.Jv_([gt])],
              attrs: Ie,
              decls: 2,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"],
                [3, "ngTemplateOutlet"],
                ["plain", ""],
                ["tuiTd", "", 4, "ngIf"],
                ["tuiTd", ""],
              ],
              template: function (e, i) {
                1 & e &&
                  (t.DNE(0, Re, 2, 1, "ng-container", 0), t.nI1(1, "async")),
                  2 & e && t.Y8G("ngIf", t.bMT(1, 1, i.cells$));
              },
              dependencies: [q, l.bT, l.Sq, l.T3, l.Jj],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        et = (() => {
          class n {
            constructor(e, i, a, r) {
              (this.pipe = e),
                (this.options = i),
                (this.arrowOptions = a),
                (this.table = r),
                (this.data = []),
                (this.open = this.options.open),
                (this.openChange = new t.bkB()),
                (this.rows = z.xQ),
                (this.toContext = (c, u) => ({ $implicit: c, index: u }));
            }
            get sorted() {
              return this.pipe.transform(this.data);
            }
            onClick() {
              (this.open = !this.open), this.openChange.emit(this.open);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU(Q),
                t.rXU(Z),
                t.rXU(Ce.Gd),
                t.rXU((0, t.Rfq)(() => h))
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["tbody", "tuiTbody", ""]],
              contentQueries: function (e, i, a) {
                if ((1 & e && (t.wni(a, ze, 5), t.wni(a, tt, 4)), 2 & e)) {
                  let r;
                  t.mGM((r = t.lsd())) && (i.row = r.first),
                    t.mGM((r = t.lsd())) && (i.rows = r);
                }
              },
              inputs: { data: "data", heading: "heading", open: "open" },
              outputs: { openChange: "openChange" },
              features: [t.Jv_(gt)],
              attrs: Se,
              ngContentSelectors: K,
              decls: 3,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [1, "t-heading", 3, "colSpan"],
                ["type", "button", 1, "t-expand", 3, "click"],
                [1, "t-name"],
                [4, "polymorpheusOutlet"],
                [1, "t-chevron", 3, "src"],
                [
                  3,
                  "ngTemplateOutlet",
                  "ngTemplateOutletContext",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ],
              template: function (e, i) {
                1 & e &&
                  (t.NAR(),
                  t.DNE(0, Pe, 6, 5, "tr", 0),
                  t.DNE(1, Fe, 2, 0, "ng-container", 0),
                  t.DNE(2, je, 2, 1, "ng-container", 0)),
                  2 & e &&
                    (t.Y8G("ngIf", i.heading),
                    t.R7$(1),
                    t.Y8G("ngIf", i.open),
                    t.R7$(1),
                    t.Y8G("ngIf", i.open && i.row));
              },
              dependencies: [J._Y, l.bT, Bt.OA, l.Sq, l.T3, St.u],
              styles: [
                '[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:bold;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}',
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        mt = (() => {
          class n {
            constructor(e) {
              (this.table = e), (this.heads = z.xQ), (this.heads$ = null);
            }
            ngAfterContentInit() {
              this.heads$ = this.heads.changes.pipe(
                (0, v.Z)(null),
                (0, d.T)(() =>
                  this.heads.reduce(
                    (e, i) =>
                      Object.assign(Object.assign({}, e), { [i.tuiHead]: i }),
                    {}
                  )
                )
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU((0, t.Rfq)(() => h)));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["tr", "tuiThGroup", ""]],
              contentQueries: function (e, i, a) {
                if ((1 & e && (t.wni(a, G, 5), t.wni(a, Y, 4)), 2 & e)) {
                  let r;
                  t.mGM((r = t.lsd())) && (i.th = r.first),
                    t.mGM((r = t.lsd())) && (i.heads = r);
                }
              },
              features: [t.Jv_([gt])],
              attrs: Ne,
              ngContentSelectors: K,
              decls: 3,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"],
                [3, "ngTemplateOutlet"],
                ["plain", ""],
                ["tuiTh", "", 4, "ngIf"],
                ["tuiTh", ""],
              ],
              template: function (e, i) {
                1 & e &&
                  (t.NAR(),
                  t.SdG(0),
                  t.DNE(1, Ae, 2, 1, "ng-container", 0),
                  t.nI1(2, "async")),
                  2 & e && (t.R7$(1), t.Y8G("ngIf", t.bMT(2, 1, i.heads$)));
              },
              dependencies: [G, l.bT, l.Sq, l.T3, l.Jj],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        Ke = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.$C({ type: n })),
            (n.ɵinj = t.G2t({ imports: [[l.MD, Bt.yJ, St.W, J.vl]] })),
            n
          );
        })();
      var ht = s(134191),
        bt = s(147645),
        ft = s(640920),
        vt = s(862826);
      function We(n, o) {
        1 & n && (t.j41(0, "th", 11), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.from")));
      }
      function Ze(n, o) {
        1 & n && (t.j41(0, "th", 11), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.to")));
      }
      function Qe(n, o) {
        1 & n && (t.j41(0, "th", 12), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n && (t.R7$(1), t.JRh(t.bMT(2, 1, "recentTrades.date")));
      }
      function qe(n, o) {
        1 & n && (t.j41(0, "th", 11), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.SpI(" ", t.bMT(2, 2, "recentTrades.statusFrom"), " "));
      }
      function tn(n, o) {
        1 & n && (t.j41(0, "th", 11), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.SpI(" ", t.bMT(2, 2, "recentTrades.statusTo"), " "));
      }
      function en(n, o) {
        1 & n && (t.j41(0, "th", 11), t.EFF(1, "Provider"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      const nt = function (n) {
        return { background: n };
      };
      function nn(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "div", 21)(1, "div", 22),
            t.nrm(2, "img", 23),
            t.k0s(),
            t.j41(3, "img", 24),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(7);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s()();
        }
        if (2 & n) {
          const e = t.XpG(2).ngLet,
            i = t.XpG(5);
          t.R7$(1),
            t.Aen(t.eq3(6, nt, e.fromBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.fromBlockchain.image,
              t.B4B
            )("alt", e.fromBlockchain.label),
            t.R7$(1),
            t.Y8G(
              "src",
              e.fromToken.image || i.DEFAULT_TOKEN_IMAGE,
              t.B4B
            )("alt", e.fromToken.symbol);
        }
      }
      function on(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17)(1, "div", 18)(2, "div", 19),
            t.DNE(3, nn, 4, 8, "div", 20),
            t.EFF(4),
            t.nI1(5, "shortenAmount"),
            t.nI1(6, "bigNumberFormat"),
            t.k0s()()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G(
              "ngIf",
              null == e || null == e.fromBlockchain
                ? null
                : e.fromBlockchain.color
            ),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(5, 3, t.bMT(6, 8, e.fromToken.amount), 6, 4, !0),
              " ",
              e.fromToken.symbol,
              " "
            );
        }
      }
      function an(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "div", 21)(1, "div", 22),
            t.nrm(2, "img", 23),
            t.k0s(),
            t.j41(3, "img", 24),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(7);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s()();
        }
        if (2 & n) {
          const e = t.XpG(2).ngLet,
            i = t.XpG(5);
          t.R7$(1),
            t.Aen(t.eq3(6, nt, e.toBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.toBlockchain.image,
              t.B4B
            )("alt", e.toBlockchain.label),
            t.R7$(1),
            t.Y8G(
              "src",
              e.toToken.image || i.DEFAULT_TOKEN_IMAGE,
              t.B4B
            )("alt", e.toToken.symbol);
        }
      }
      function rn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17)(1, "div", 18)(2, "div", 19),
            t.DNE(3, an, 4, 8, "div", 20),
            t.j41(4, "div", 25),
            t.EFF(5),
            t.nI1(6, "shortenAmount"),
            t.nI1(7, "bigNumberFormat"),
            t.k0s()()()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G(
              "ngIf",
              null == e || null == e.toBlockchain ? null : e.toBlockchain.color
            ),
            t.R7$(2),
            t.Lme(
              " ",
              t.ii3(6, 3, t.bMT(7, 8, e.toToken.amount), 6, 4, !0),
              " ",
              e.toToken.symbol,
              " "
            );
        }
      }
      function sn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17),
            t.EFF(1),
            t.nI1(2, "date"),
            t.nI1(3, "date"),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1),
            t.Lme(
              " ",
              t.i5U(2, 2, null == e ? null : e.date, "MMM dd, yyyy"),
              " ",
              " at " + t.i5U(3, 5, null == e ? null : e.date, "h:mm"),
              " "
            );
        }
      }
      function cn(n, o) {
        1 & n && t.eu8(0);
      }
      const Yt = function (n) {
        return { item: n, isMobile: !1 };
      };
      function ln(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17),
            t.DNE(1, cn, 1, 0, "ng-container", 26),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.XpG(5);
          const i = t.sdS(8);
          t.R7$(1),
            t.Y8G("ngTemplateOutlet", i)(
              "ngTemplateOutletContext",
              t.eq3(2, Yt, e)
            );
        }
      }
      function dn(n, o) {
        1 & n && t.eu8(0);
      }
      function un(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17),
            t.DNE(1, dn, 1, 0, "ng-container", 26),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.XpG(5);
          const i = t.sdS(10);
          t.R7$(1),
            t.Y8G("ngTemplateOutlet", i)(
              "ngTemplateOutletContext",
              t.eq3(2, Yt, e)
            );
        }
      }
      function _n(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 28), t.nrm(1, "img", 29), t.EFF(2), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).ngLet;
          t.R7$(1),
            t.Y8G("src", e.provider.image, t.B4B)("alt", e.provider.name),
            t.R7$(1),
            t.SpI(" ", e.provider.name, " ");
        }
      }
      function pn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 17), t.DNE(1, _n, 3, 3, "div", 27), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1),
            t.Y8G(
              "ngIf",
              null == e || null == e.provider ? null : e.provider.name
            );
        }
      }
      function gn(n, o) {
        1 & n &&
          (t.qex(0),
          t.DNE(1, on, 7, 10, "td", 16),
          t.DNE(2, rn, 8, 10, "td", 16),
          t.DNE(3, sn, 4, 8, "td", 16),
          t.DNE(4, ln, 2, 4, "td", 16),
          t.DNE(5, un, 2, 4, "td", 16),
          t.DNE(6, pn, 2, 1, "td", 16),
          t.bVm()),
          2 & n &&
            (t.R7$(1),
            t.Y8G("tuiCell", "from"),
            t.R7$(1),
            t.Y8G("tuiCell", "to"),
            t.R7$(1),
            t.Y8G("tuiCell", "date"),
            t.R7$(1),
            t.Y8G("tuiCell", "statusFrom"),
            t.R7$(1),
            t.Y8G("tuiCell", "statusTo"),
            t.R7$(1),
            t.Y8G("tuiCell", "provider"));
      }
      function mn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tr", 15),
            t.DNE(1, gn, 7, 6, "ng-container", 0),
            t.k0s()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.XpG(4);
          t.R7$(1), t.Y8G("ngLet", i.getItem(e));
        }
      }
      function hn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tbody", 13), t.DNE(1, mn, 2, 1, "tr", 14), t.k0s()),
          2 & n)
        ) {
          const e = o.tuiLet;
          t.Y8G("data", e), t.R7$(1), t.Y8G("ngForOf", e);
        }
      }
      function bn(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "table", 6),
            t.bIt("directionChange", function (a) {
              t.eBV(e);
              const r = t.XpG(2);
              return t.Njj(r.changeDirection(a));
            })("tuiSortByChange", function (a) {
              t.eBV(e);
              const r = t.XpG(2);
              return t.Njj(r.changeSorting(a));
            }),
            t.j41(1, "thead")(2, "tr", 7),
            t.DNE(3, We, 3, 4, "th", 8),
            t.DNE(4, Ze, 3, 4, "th", 8),
            t.DNE(5, Qe, 3, 3, "th", 9),
            t.DNE(6, qe, 3, 4, "th", 8),
            t.DNE(7, tn, 3, 4, "th", 8),
            t.DNE(8, en, 2, 1, "th", 8),
            t.k0s()(),
            t.DNE(9, hn, 2, 2, "tbody", 10),
            t.nI1(10, "tuiTableSort"),
            t.k0s();
        }
        if (2 & n) {
          const e = t.XpG().ngLet,
            i = t.XpG();
          t.Y8G("columns", i.columns)("direction", e.direction || 1)(
            "tuiSortBy",
            e.sorter
          ),
            t.R7$(3),
            t.Y8G("tuiHead", "from"),
            t.R7$(1),
            t.Y8G("tuiHead", "to"),
            t.R7$(1),
            t.Y8G("tuiHead", "date"),
            t.R7$(1),
            t.Y8G("tuiHead", "statusFrom"),
            t.R7$(1),
            t.Y8G("tuiHead", "statusTo"),
            t.R7$(1),
            t.Y8G("tuiHead", "provider"),
            t.R7$(1),
            t.Y8G("tuiLet", t.bMT(10, 10, e.data));
        }
      }
      function fn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 21)(1, "div", 22),
            t.nrm(2, "img", 23),
            t.k0s(),
            t.nrm(3, "img", 39),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().$implicit;
          t.R7$(1),
            t.Aen(t.eq3(6, nt, e.fromBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.fromBlockchain.image,
              t.B4B
            )("alt", e.fromBlockchain.label),
            t.R7$(1),
            t.Y8G("src", e.fromToken.image, t.B4B)("alt", e.fromToken.symbol);
        }
      }
      function vn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 21)(1, "div", 22),
            t.nrm(2, "img", 23),
            t.k0s(),
            t.nrm(3, "img", 39),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().$implicit;
          t.R7$(1),
            t.Aen(t.eq3(6, nt, e.toBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.toBlockchain.image,
              t.B4B
            )("alt", e.toBlockchain.label),
            t.R7$(1),
            t.Y8G("src", e.toToken.image, t.B4B)("alt", e.toToken.symbol);
        }
      }
      function Tn(n, o) {
        1 & n && t.eu8(0);
      }
      function Cn(n, o) {
        1 & n && t.eu8(0);
      }
      function kn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 28), t.nrm(1, "img", 29), t.EFF(2), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().$implicit;
          t.R7$(1),
            t.Y8G("src", e.provider.image, t.B4B)("alt", e.provider.name),
            t.R7$(1),
            t.SpI(" ", e.provider.name, " ");
        }
      }
      const Xt = function (n) {
        return { item: n, isMobile: !0 };
      };
      function yn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 32)(1, "div", 33)(2, "div", 34),
            t.DNE(3, fn, 4, 8, "div", 20),
            t.EFF(4),
            t.nI1(5, "shortenAmount"),
            t.nI1(6, "bigNumberFormat"),
            t.k0s(),
            t.j41(7, "div", 35),
            t.DNE(8, vn, 4, 8, "div", 20),
            t.j41(9, "div", 25),
            t.EFF(10),
            t.nI1(11, "shortenAmount"),
            t.nI1(12, "bigNumberFormat"),
            t.k0s()()(),
            t.j41(13, "div", 36)(14, "div", 37),
            t.EFF(15),
            t.nI1(16, "translate"),
            t.k0s(),
            t.j41(17, "div", 38),
            t.EFF(18),
            t.nI1(19, "date"),
            t.nI1(20, "date"),
            t.k0s()(),
            t.j41(21, "div", 36)(22, "div", 37),
            t.EFF(23),
            t.nI1(24, "translate"),
            t.k0s(),
            t.j41(25, "div", 38),
            t.DNE(26, Tn, 1, 0, "ng-container", 26),
            t.k0s()(),
            t.j41(27, "div", 36)(28, "div", 37),
            t.EFF(29),
            t.nI1(30, "translate"),
            t.k0s(),
            t.j41(31, "div", 38),
            t.DNE(32, Cn, 1, 0, "ng-container", 26),
            t.k0s()(),
            t.j41(33, "div", 36)(34, "div", 37),
            t.EFF(35, "Provider"),
            t.k0s(),
            t.j41(36, "div", 38),
            t.DNE(37, kn, 3, 3, "div", 27),
            t.k0s()()()),
          2 & n)
        ) {
          const e = o.$implicit;
          t.XpG(3);
          const i = t.sdS(8),
            a = t.sdS(10);
          t.R7$(3),
            t.Y8G(
              "ngIf",
              null == e || null == e.fromBlockchain
                ? null
                : e.fromBlockchain.color
            ),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(5, 16, t.bMT(6, 21, e.fromToken.amount), 6, 4, !0),
              " ",
              e.fromToken.symbol,
              " "
            ),
            t.R7$(4),
            t.Y8G(
              "ngIf",
              null == e || null == e.toBlockchain ? null : e.toBlockchain.color
            ),
            t.R7$(2),
            t.Lme(
              " ",
              t.ii3(11, 23, t.bMT(12, 28, e.toToken.amount), 6, 4, !0),
              " ",
              e.toToken.symbol,
              " "
            ),
            t.R7$(5),
            t.JRh(t.bMT(16, 30, "recentTrades.date")),
            t.R7$(3),
            t.Lme(
              " ",
              t.i5U(19, 32, null == e ? null : e.date, "MMM dd, yyyy"),
              " ",
              " at " + t.i5U(20, 35, null == e ? null : e.date, "h:mm"),
              " "
            ),
            t.R7$(5),
            t.JRh(t.bMT(24, 38, "recentTrades.statusFrom")),
            t.R7$(3),
            t.Y8G("ngTemplateOutlet", i)(
              "ngTemplateOutletContext",
              t.eq3(42, Xt, e)
            ),
            t.R7$(3),
            t.JRh(t.bMT(30, 40, "recentTrades.statusTo")),
            t.R7$(3),
            t.Y8G("ngTemplateOutlet", a)(
              "ngTemplateOutletContext",
              t.eq3(44, Xt, e)
            ),
            t.R7$(5),
            t.Y8G(
              "ngIf",
              null == e || null == e.provider ? null : e.provider.name
            );
        }
      }
      function xn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 30), t.DNE(1, yn, 38, 46, "div", 31), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("ngForOf", e.data);
        }
      }
      function $n(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, bn, 11, 12, "table", 4),
            t.DNE(2, xn, 2, 1, "ng-template", null, 5, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = t.sdS(3),
            i = t.XpG();
          t.R7$(1), t.Y8G("ngIf", "desktop" === i.device)("ngIfElse", e);
        }
      }
      function On(n, o) {
        1 & n && t.nrm(0, "img", 45);
      }
      function Mn(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.j41(1, "a", 42),
            t.nrm(2, "app-rubic-badge", 43),
            t.DNE(3, On, 1, 0, "img", 44),
            t.k0s(),
            t.bVm()),
          2 & n)
        ) {
          const e = t.XpG().item;
          t.R7$(1),
            t.Y8G(
              "safetyLink",
              null == e || null == e.fromTx ? null : e.fromTx.explorerLink
            ),
            t.R7$(1),
            t.Y8G("status", e.fromTx.status.appearance)(
              "label",
              e.fromTx.status.label
            ),
            t.R7$(1),
            t.Y8G("ngIf", e.fromTx.explorerLink);
        }
      }
      const In = function (n, o) {
        return {
          "statusFrom-dropdown": n,
          "mobile-view__row-value-dropdown": o,
        };
      };
      function wn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 46)(1, "a", 47),
            t.nrm(2, "app-rubic-badge", 43),
            t.k0s(),
            t.nrm(3, "app-dropdown-options-table-item", 48),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(),
            i = e.isMobile,
            a = e.item;
          t.Y8G("ngClass", t.l_i(6, In, !i, i)),
            t.R7$(1),
            t.Y8G("safetyLink", a.fromTx.explorerLink),
            t.R7$(1),
            t.Y8G("status", a.fromTx.status.appearance)(
              "label",
              a.fromTx.status.label
            ),
            t.R7$(1),
            t.Y8G("copyValue", a.changenowId)("link", a.fromTx.explorerLink);
        }
      }
      function Dn(n, o) {
        if (
          (1 & n &&
            (t.DNE(0, Mn, 4, 4, "ng-container", 40),
            t.DNE(1, wn, 4, 9, "ng-template", null, 41, t.C5r)),
          2 & n)
        ) {
          const e = o.item,
            i = t.sdS(2);
          t.Y8G(
            "ngIf",
            "ChangeNOW" !== (null == e.provider ? null : e.provider.name)
          )("ngIfElse", i);
        }
      }
      function Gn(n, o) {
        1 & n && t.nrm(0, "img", 53);
      }
      function Rn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "a", 42),
            t.nrm(1, "app-rubic-badge", 43),
            t.DNE(2, Gn, 1, 0, "img", 52),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).item;
          t.Y8G("safetyLink", e.toTx.explorerLink),
            t.R7$(1),
            t.Y8G("status", e.toTx.status.appearance)(
              "label",
              e.toTx.status.label
            ),
            t.R7$(1),
            t.Y8G("ngIf", e.toTx.explorerLink);
        }
      }
      const Sn = function (n, o) {
        return {
          "statusTo-action-button__wrapper": n,
          "mobile-view__row-value-action-button__wrapper": o,
        };
      };
      function En(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "div", 46)(1, "app-rubic-button", 54),
            t.bIt("onClick", function () {
              t.eBV(e);
              const a = t.XpG(2).item,
                r = t.XpG();
              return t.Njj(r.handleStatusToItemClick(a));
            }),
            t.EFF(2),
            t.k0s()();
        }
        if (2 & n) {
          const e = t.XpG(2),
            i = e.isMobile,
            a = e.item,
            r = t.XpG();
          t.Y8G("ngClass", t.l_i(5, Sn, !i, i)),
            t.R7$(1),
            t.Y8G("size", "xs")(
              "loading",
              r.isLoadingActionButton(a.fromTx.hash)
            )("disabled", r.isLoadingActionButton(a.fromTx.hash)),
            t.R7$(1),
            t.SpI(" ", a.toTx.status.label, " ");
        }
      }
      function Pn(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, Rn, 3, 4, "a", 50),
            t.DNE(2, En, 3, 8, "ng-template", null, 51, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = t.sdS(3),
            i = t.XpG().item,
            a = t.XpG();
          t.R7$(1), t.Y8G("ngIf", !a.shouldShowActionButton(i))("ngIfElse", e);
        }
      }
      function Fn(n, o) {
        1 & n && t.DNE(0, Pn, 4, 2, "ng-container", 49),
          2 & n && t.Y8G("ngIf", o.item.toTx.status);
      }
      const Bn = function (n, o, e) {
          return { data: n, direction: o, sorter: e };
        },
        jn = ["from", "to", "date", "statusFrom", "statusTo", "provider"];
      let Nn = (() => {
        class n {
          constructor(e, i, a, r, c) {
            (this.crossChainTableSrvice = e),
              (this.commonTableService = i),
              (this.walletConnector = a),
              (this.cdr = r),
              (this.tokensService = c),
              (this.BLOCKCHAIN_NAME = p.BLOCKCHAIN_NAME),
              (this.DEFAULT_TOKEN_IMAGE = re.c),
              (this.columns = jn),
              (this.actionButtonsStatuses = []),
              (this.data$ = this.crossChainTableSrvice.data$),
              (this.loading$ = this.crossChainTableSrvice.loading$),
              (this.direction$ = this.crossChainTableSrvice.direction$),
              (this.sorter$ = this.crossChainTableSrvice.sorter$),
              (this.page$ = this.crossChainTableSrvice.page$),
              (this.totalPages$ = this.crossChainTableSrvice.totalPages$);
          }
          changeDirection(e) {
            this.crossChainTableSrvice.onDirection(e);
          }
          changePage(e) {
            this.crossChainTableSrvice.onPage(e);
          }
          changeSorting(e) {
            "date" === e && this.crossChainTableSrvice.onSorting("created_at");
          }
          getItem(e) {
            return e;
          }
          shouldShowActionButton(e) {
            return ae.some(
              (a) =>
                e.fromBlockchain.name === p.BLOCKCHAIN_NAME.ARBITRUM &&
                e.toTx.status.label === a.status &&
                a.provider === dt.X[p.BRIDGE_TYPE.ARBITRUM]
            );
          }
          handleStatusToItemClick(e) {
            var i = this;
            return (0, w.A)(function* () {
              const a = e.provider,
                r = e.fromBlockchain.name,
                c = e.toBlockchain.name,
                u = i.startLoadingOnAction(e);
              a === dt.X[p.BRIDGE_TYPE.ARBITRUM] &&
                r === p.BLOCKCHAIN_NAME.ARBITRUM &&
                (yield i.walletConnector.switchChain(c)) &&
                (yield i.commonTableService.claimArbitrumBridgeTokens(
                  e.fromTx.hash
                )),
                (u.isLoading = !1),
                i.cdr.markForCheck();
            })();
          }
          isLoadingActionButton(e) {
            return !!this.actionButtonsStatuses.find((i) => i.fromTxHash === e)
              ?.isLoading;
          }
          onImageError(e) {
            this.tokensService.onTokenImageError(e);
          }
          startLoadingOnAction(e) {
            let i = this.actionButtonsStatuses.find(
              (a) => a.fromTxHash === e.fromTx.hash
            );
            return (
              i
                ? (i.isLoading = !0)
                : ((i = { fromTxHash: e.fromTx.hash, isLoading: !0 }),
                  this.actionButtonsStatuses.push(i)),
              i
            );
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(
              t.rXU(L),
              t.rXU(j),
              t.rXU(S.c),
              t.rXU(t.gRc),
              t.rXU(Gt.m)
            );
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-cross-chain-desktop-table"]],
            inputs: { device: "device" },
            decls: 11,
            vars: 17,
            consts: [
              [4, "ngLet"],
              [3, "index", "length", "indexChange"],
              ["statusFromFieldContent", ""],
              ["statusToFieldContent", ""],
              [
                "tuiTable",
                "",
                "class",
                "table",
                3,
                "columns",
                "direction",
                "tuiSortBy",
                "directionChange",
                "tuiSortByChange",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["mobileView", ""],
              [
                "tuiTable",
                "",
                1,
                "table",
                3,
                "columns",
                "direction",
                "tuiSortBy",
                "directionChange",
                "tuiSortByChange",
              ],
              ["tuiThGroup", ""],
              ["tuiTh", "", 3, "sorter", 4, "tuiHead"],
              ["tuiTh", "", 4, "tuiHead"],
              ["tuiTbody", "", 3, "data", 4, "tuiLet"],
              ["tuiTh", "", 3, "sorter"],
              ["tuiTh", ""],
              ["tuiTbody", "", 3, "data"],
              ["tuiTr", "", 4, "ngFor", "ngForOf"],
              ["tuiTr", ""],
              ["tuiTd", "", 4, "tuiCell"],
              ["tuiTd", ""],
              [1, "token-container"],
              [1, "token-container__top"],
              ["class", "token-images", 4, "ngIf"],
              [1, "token-images"],
              [1, "token-images__second-container"],
              [3, "src", "alt"],
              [1, "token-images__main-image", 3, "src", "alt", "error"],
              [1, "asset__asset-type"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ["class", "provider-container", 4, "ngIf"],
              [1, "provider-container"],
              [1, "provider-container__image", 3, "src", "alt"],
              [1, "mobile-view"],
              ["class", "mobile-view__card", 4, "ngFor", "ngForOf"],
              [1, "mobile-view__card"],
              [1, "mobile-view__card-header"],
              [1, "mobile-view__from-field"],
              [1, "mobile-view__to-field"],
              [1, "mobile-view__row"],
              [1, "mobile-view__row-key"],
              [1, "mobile-view__row-value"],
              [1, "token-images__main-image", 3, "src", "alt"],
              [4, "ngIf", "ngIfElse"],
              ["dropdownOptions", ""],
              [1, "token-container__inner", 3, "safetyLink"],
              [3, "status", "label"],
              [
                "class",
                "status-from-link-arrow",
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                1,
                "status-from-link-arrow",
              ],
              [3, "ngClass"],
              [3, "safetyLink"],
              [3, "copyValue", "link"],
              [4, "ngIf"],
              [
                "class",
                "token-container__inner",
                3,
                "safetyLink",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["statusToActionButton", ""],
              [
                "class",
                "status-to-link-arrow",
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                1,
                "status-to-link-arrow",
              ],
              ["fullWidth", "", 3, "size", "loading", "disabled", "onClick"],
            ],
            template: function (i, a) {
              1 & i &&
                (t.DNE(0, $n, 4, 2, "ng-container", 0),
                t.nI1(1, "async"),
                t.nI1(2, "async"),
                t.nI1(3, "async"),
                t.j41(4, "tui-pagination", 1),
                t.bIt("indexChange", function (c) {
                  return a.changePage(c);
                }),
                t.nI1(5, "async"),
                t.nI1(6, "async"),
                t.k0s(),
                t.DNE(7, Dn, 3, 2, "ng-template", null, 2, t.C5r),
                t.DNE(9, Fn, 1, 1, "ng-template", null, 3, t.C5r)),
                2 & i &&
                  (t.Y8G(
                    "ngLet",
                    t.sMw(
                      13,
                      Bn,
                      t.bMT(1, 3, a.data$),
                      t.bMT(2, 5, a.direction$),
                      t.bMT(3, 7, a.sorter$)
                    )
                  ),
                  t.R7$(4),
                  t.Y8G("index", t.bMT(5, 9, a.page$) || 0)(
                    "length",
                    t.bMT(6, 11, a.totalPages$) || 0
                  ));
            },
            dependencies: [
              l.YU,
              l.Sq,
              l.bT,
              l.T3,
              se.l,
              Rt.A,
              H.N,
              ut,
              he,
              h,
              et,
              mt,
              G,
              q,
              tt,
              W,
              Y,
              pt,
              ht.Nx,
              bt.U,
              l.Jj,
              l.vh,
              ft.p,
              B.D9,
              vt.W,
              Q,
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      function Yn(n, o) {
        1 & n && (t.j41(0, "th", 9), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.from")));
      }
      function Xn(n, o) {
        1 & n && (t.j41(0, "th", 9), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.to")));
      }
      function Ln(n, o) {
        1 & n && (t.j41(0, "th", 9), t.EFF(1, "Blockchain"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      function An(n, o) {
        1 & n && (t.j41(0, "th", 10), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n && (t.R7$(1), t.JRh(t.bMT(2, 1, "recentTrades.date")));
      }
      function Vn(n, o) {
        1 & n && (t.j41(0, "th", 9), t.EFF(1, "Status"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      function Un(n, o) {
        1 & n && (t.j41(0, "th", 9), t.EFF(1, "Provider"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      function Hn(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "td", 15)(1, "div", 16)(2, "div", 17)(3, "img", 18),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(6);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s(),
            t.EFF(4),
            t.nI1(5, "shortenAmount"),
            t.nI1(6, "bigNumberFormat"),
            t.k0s()()();
        }
        if (2 & n) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G("src", e.fromToken.image, t.B4B)("alt", e.fromToken.symbol),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(5, 4, t.bMT(6, 9, e.fromToken.amount), 6, 4, !0),
              " ",
              e.fromToken.symbol,
              " "
            );
        }
      }
      function zn(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "td", 15)(1, "div", 16)(2, "div", 17)(3, "img", 18),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(6);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s(),
            t.EFF(4),
            t.nI1(5, "shortenAmount"),
            t.nI1(6, "bigNumberFormat"),
            t.k0s()()();
        }
        if (2 & n) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G("src", e.toToken.image, t.B4B)("alt", e.toToken.symbol),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(5, 4, t.bMT(6, 9, e.toToken.amount), 6, 4, !0),
              " ",
              e.toToken.symbol,
              " "
            );
        }
      }
      function Jn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 17), t.nrm(1, "img", 20), t.EFF(2), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).ngLet;
          t.R7$(1),
            t.Y8G("src", e.blockchain.image, t.B4B)("alt", e.blockchain.label),
            t.R7$(1),
            t.SpI(" ", e.blockchain.label, " ");
        }
      }
      function Kn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 15)(1, "div", 16),
            t.DNE(2, Jn, 3, 3, "div", 19),
            t.k0s()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(2),
            t.Y8G(
              "ngIf",
              null == e || null == e.blockchain ? null : e.blockchain.image
            );
        }
      }
      function Wn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 15),
            t.EFF(1),
            t.nI1(2, "date"),
            t.nI1(3, "date"),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1),
            t.Lme(
              " ",
              t.i5U(2, 2, null == e ? null : e.date, "MMM dd, yyyy"),
              " ",
              " at " + t.i5U(3, 5, null == e ? null : e.date, "h:mm"),
              " "
            );
        }
      }
      function Zn(n, o) {
        if ((1 & n && t.nrm(0, "img", 25), 2 & n)) {
          const e = t.XpG(3).ngLet;
          t.Y8G("safetyLink", null == e.tx ? null : e.tx.explorerLink);
        }
      }
      function Qn(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "a", 22),
            t.nrm(1, "app-rubic-badge", 23),
            t.DNE(2, Zn, 1, 1, "img", 24),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).ngLet;
          t.Y8G("safetyLink", null == e.tx ? null : e.tx.explorerLink),
            t.R7$(1),
            t.Y8G("status", e.tx.status.appearance)("label", e.tx.status.label),
            t.R7$(1),
            t.Y8G("ngIf", e.tx.explorerLink);
        }
      }
      function qn(n, o) {
        if (
          (1 & n && (t.j41(0, "td", 15), t.DNE(1, Qn, 3, 4, "a", 21), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("ngIf", null == e.tx ? null : e.tx.status);
        }
      }
      function ti(n, o) {
        if (
          (1 & n && (t.j41(0, "td", 15)(1, "div", 26), t.EFF(2), t.k0s()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(2),
            t.SpI(
              " ",
              (null == e || null == e.provider ? null : e.provider.name) ||
                "Unknown",
              " "
            );
        }
      }
      function ei(n, o) {
        1 & n &&
          (t.qex(0),
          t.DNE(1, Hn, 7, 11, "td", 14),
          t.DNE(2, zn, 7, 11, "td", 14),
          t.DNE(3, Kn, 3, 1, "td", 14),
          t.DNE(4, Wn, 4, 8, "td", 14),
          t.DNE(5, qn, 2, 1, "td", 14),
          t.DNE(6, ti, 3, 1, "td", 14),
          t.bVm()),
          2 & n &&
            (t.R7$(1),
            t.Y8G("tuiCell", "from"),
            t.R7$(1),
            t.Y8G("tuiCell", "to"),
            t.R7$(1),
            t.Y8G("tuiCell", "blockchain"),
            t.R7$(1),
            t.Y8G("tuiCell", "date"),
            t.R7$(1),
            t.Y8G("tuiCell", "status"),
            t.R7$(1),
            t.Y8G("tuiCell", "provider"));
      }
      function ni(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tr", 13),
            t.DNE(1, ei, 7, 6, "ng-container", 0),
            t.k0s()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.XpG(4);
          t.R7$(1), t.Y8G("ngLet", i.getItem(e));
        }
      }
      function ii(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tbody", 11), t.DNE(1, ni, 2, 1, "tr", 12), t.k0s()),
          2 & n)
        ) {
          const e = o.tuiLet;
          t.Y8G("data", e), t.R7$(1), t.Y8G("ngForOf", e);
        }
      }
      function oi(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "table", 4),
            t.bIt("directionChange", function (a) {
              t.eBV(e);
              const r = t.XpG(2);
              return t.Njj(r.changeDirection(a));
            })("tuiSortByChange", function (a) {
              t.eBV(e);
              const r = t.XpG(2);
              return t.Njj(r.changeSorting(a));
            }),
            t.j41(1, "thead")(2, "tr", 5),
            t.DNE(3, Yn, 3, 4, "th", 6),
            t.DNE(4, Xn, 3, 4, "th", 6),
            t.DNE(5, Ln, 2, 1, "th", 6),
            t.DNE(6, An, 3, 3, "th", 7),
            t.DNE(7, Vn, 2, 1, "th", 6),
            t.DNE(8, Un, 2, 1, "th", 6),
            t.k0s()(),
            t.DNE(9, ii, 2, 2, "tbody", 8),
            t.nI1(10, "tuiTableSort"),
            t.k0s();
        }
        if (2 & n) {
          const e = t.XpG().ngLet,
            i = t.XpG();
          t.Y8G("columns", i.columns)("direction", e.direction || 1)(
            "tuiSortBy",
            e.sorter
          ),
            t.R7$(3),
            t.Y8G("tuiHead", "from"),
            t.R7$(1),
            t.Y8G("tuiHead", "to"),
            t.R7$(1),
            t.Y8G("tuiHead", "blockchain"),
            t.R7$(1),
            t.Y8G("tuiHead", "date"),
            t.R7$(1),
            t.Y8G("tuiHead", "status"),
            t.R7$(1),
            t.Y8G("tuiHead", "provider"),
            t.R7$(1),
            t.Y8G("tuiLet", t.bMT(10, 10, e.data));
        }
      }
      function ai(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 17), t.nrm(1, "img", 20), t.EFF(2), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().$implicit;
          t.R7$(1),
            t.Y8G("src", e.blockchain.image, t.B4B)("alt", e.blockchain.label),
            t.R7$(1),
            t.SpI(" ", e.blockchain.label, " ");
        }
      }
      function ri(n, o) {
        if ((1 & n && t.nrm(0, "img", 25), 2 & n)) {
          const e = t.XpG(2).$implicit;
          t.Y8G("safetyLink", null == e.tx ? null : e.tx.explorerLink);
        }
      }
      function si(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "a", 22),
            t.nrm(1, "app-rubic-badge", 23),
            t.DNE(2, ri, 1, 1, "img", 24),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().$implicit;
          t.Y8G("safetyLink", null == e.tx ? null : e.tx.explorerLink),
            t.R7$(1),
            t.Y8G("status", e.tx.status.appearance)("label", e.tx.status.label),
            t.R7$(1),
            t.Y8G("ngIf", e.tx.explorerLink);
        }
      }
      function ci(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.j41(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 17)(
            4,
            "img",
            18
          ),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(3);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s(),
            t.EFF(5),
            t.nI1(6, "shortenAmount"),
            t.nI1(7, "bigNumberFormat"),
            t.k0s()(),
            t.j41(8, "div", 32)(9, "div", 17)(10, "img", 18),
            t.bIt("error", function (a) {
              t.eBV(e);
              const r = t.XpG(3);
              return t.Njj(r.onImageError(a));
            }),
            t.k0s(),
            t.EFF(11),
            t.nI1(12, "shortenAmount"),
            t.nI1(13, "bigNumberFormat"),
            t.k0s()()(),
            t.j41(14, "div", 33)(15, "div", 34),
            t.EFF(16, "Blockchain"),
            t.k0s(),
            t.j41(17, "div", 35),
            t.DNE(18, ai, 3, 3, "div", 19),
            t.k0s()(),
            t.j41(19, "div", 33)(20, "div", 34),
            t.EFF(21),
            t.nI1(22, "translate"),
            t.k0s(),
            t.j41(23, "div", 35),
            t.EFF(24),
            t.nI1(25, "date"),
            t.nI1(26, "date"),
            t.k0s()(),
            t.j41(27, "div", 33)(28, "div", 34),
            t.EFF(29),
            t.nI1(30, "translate"),
            t.k0s(),
            t.j41(31, "div", 35),
            t.DNE(32, si, 3, 4, "a", 21),
            t.k0s()(),
            t.j41(33, "div", 33)(34, "div", 34),
            t.EFF(35, "Provider"),
            t.k0s(),
            t.j41(36, "div", 35)(37, "div", 26),
            t.EFF(38),
            t.k0s()()()();
        }
        if (2 & n) {
          const e = o.$implicit;
          t.R7$(4),
            t.Y8G("src", e.fromToken.image, t.B4B)("alt", e.fromToken.symbol),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(6, 15, t.bMT(7, 20, e.fromToken.amount), 6, 4, !0),
              " ",
              e.fromToken.symbol,
              " "
            ),
            t.R7$(5),
            t.Y8G("src", e.toToken.image, t.B4B)("alt", e.toToken.symbol),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(12, 22, t.bMT(13, 27, e.toToken.amount), 6, 4, !0),
              " ",
              e.toToken.symbol,
              " "
            ),
            t.R7$(7),
            t.Y8G(
              "ngIf",
              null == e || null == e.blockchain ? null : e.blockchain.image
            ),
            t.R7$(3),
            t.JRh(t.bMT(22, 29, "recentTrades.date")),
            t.R7$(3),
            t.Lme(
              " ",
              t.i5U(25, 31, null == e ? null : e.date, "MMM dd, yyyy"),
              " ",
              " at " + t.i5U(26, 34, null == e ? null : e.date, "h:mm"),
              " "
            ),
            t.R7$(5),
            t.JRh(t.bMT(30, 37, "recentTrades.statusFrom")),
            t.R7$(3),
            t.Y8G("ngIf", null == e.tx ? null : e.tx.status),
            t.R7$(6),
            t.SpI(
              " ",
              (null == e || null == e.provider ? null : e.provider.name) ||
                "Unknown",
              " "
            );
        }
      }
      function li(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 27), t.DNE(1, ci, 39, 39, "div", 28), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("ngForOf", e.data);
        }
      }
      function di(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, oi, 11, 12, "table", 2),
            t.DNE(2, li, 2, 1, "ng-template", null, 3, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = t.sdS(3),
            i = t.XpG();
          t.R7$(1), t.Y8G("ngIf", "desktop" === i.device)("ngIfElse", e);
        }
      }
      const ui = function (n, o, e) {
          return { data: n, direction: o, sorter: e };
        },
        _i = ["from", "to", "blockchain", "date", "status", "provider"];
      let pi = (() => {
        class n {
          constructor(e, i) {
            (this.tableService = e),
              (this.tokensService = i),
              (this.data$ = this.tableService.data$),
              (this.loading$ = this.tableService.loading$),
              (this.direction$ = this.tableService.direction$),
              (this.sorter$ = this.tableService.sorter$),
              (this.columns = _i),
              (this.page$ = this.tableService.page$),
              (this.totalPages$ = this.tableService.totalPages$);
          }
          changeDirection(e) {
            this.tableService.onDirection(e);
          }
          changePage(e) {
            this.tableService.onPage(e);
          }
          changeSorting(e) {
            "date" === e && this.tableService.onSorting("created_at");
          }
          getItem(e) {
            return e;
          }
          onImageError(e) {
            this.tokensService.onTokenImageError(e);
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.rXU(A), t.rXU(Gt.m));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-on-chain-desktop-table"]],
            inputs: { device: "device" },
            decls: 7,
            vars: 17,
            consts: [
              [4, "ngLet"],
              [3, "index", "length", "indexChange"],
              [
                "tuiTable",
                "",
                "class",
                "table",
                3,
                "columns",
                "direction",
                "tuiSortBy",
                "directionChange",
                "tuiSortByChange",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["mobileView", ""],
              [
                "tuiTable",
                "",
                1,
                "table",
                3,
                "columns",
                "direction",
                "tuiSortBy",
                "directionChange",
                "tuiSortByChange",
              ],
              ["tuiThGroup", ""],
              ["tuiTh", "", 3, "sorter", 4, "tuiHead"],
              ["tuiTh", "", 4, "tuiHead"],
              ["tuiTbody", "", 3, "data", 4, "tuiLet"],
              ["tuiTh", "", 3, "sorter"],
              ["tuiTh", ""],
              ["tuiTbody", "", 3, "data"],
              ["tuiTr", "", 4, "ngFor", "ngForOf"],
              ["tuiTr", ""],
              ["tuiTd", "", 4, "tuiCell"],
              ["tuiTd", ""],
              [1, "token-container"],
              [1, "token-container__inner"],
              [1, "token-container__main-image", 3, "src", "alt", "error"],
              ["class", "token-container__inner", 4, "ngIf"],
              [1, "token-container__main-image", 3, "src", "alt"],
              ["class", "token-container__inner", 3, "safetyLink", 4, "ngIf"],
              [1, "token-container__inner", 3, "safetyLink"],
              [3, "status", "label"],
              [
                "class",
                "status-from-link-arrow",
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                3,
                "safetyLink",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/arrow/link-arrow.svg",
                "alt",
                "link-arrow",
                1,
                "status-from-link-arrow",
                3,
                "safetyLink",
              ],
              [1, "provider-container"],
              [1, "mobile-view"],
              ["class", "mobile-view__card", 4, "ngFor", "ngForOf"],
              [1, "mobile-view__card"],
              [1, "mobile-view__card-header"],
              [1, "mobile-view__from-field"],
              [1, "mobile-view__to-field"],
              [1, "mobile-view__row"],
              [1, "mobile-view__row-key"],
              [1, "mobile-view__row-value"],
            ],
            template: function (i, a) {
              1 & i &&
                (t.DNE(0, di, 4, 2, "ng-container", 0),
                t.nI1(1, "async"),
                t.nI1(2, "async"),
                t.nI1(3, "async"),
                t.j41(4, "tui-pagination", 1),
                t.bIt("indexChange", function (c) {
                  return a.changePage(c);
                }),
                t.nI1(5, "async"),
                t.nI1(6, "async"),
                t.k0s()),
                2 & i &&
                  (t.Y8G(
                    "ngLet",
                    t.sMw(
                      13,
                      ui,
                      t.bMT(1, 3, a.data$),
                      t.bMT(2, 5, a.direction$),
                      t.bMT(3, 7, a.sorter$)
                    )
                  ),
                  t.R7$(4),
                  t.Y8G("index", t.bMT(5, 9, a.page$) || 0)(
                    "length",
                    t.bMT(6, 11, a.totalPages$) || 0
                  ));
            },
            dependencies: [
              l.Sq,
              l.bT,
              Rt.A,
              H.N,
              ut,
              h,
              et,
              mt,
              G,
              q,
              tt,
              W,
              Y,
              pt,
              ht.Nx,
              bt.U,
              l.Jj,
              l.vh,
              ft.p,
              B.D9,
              vt.W,
              Q,
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      var gi = s(727468),
        mi = s(186648),
        hi = s(71985),
        bi = s(118562),
        fi = s(673193),
        Lt = s(93359),
        vi = s(821626);
      class O extends rt {
        constructor(o, e, i) {
          super("date"),
            (this.walletConnector = o),
            (this.storeService = e),
            (this.httpClient = i),
            (this.statusFilter = new k.MJ("All")),
            (this._tableUpdate$ = new I.t(null)),
            (this.tableUpdate$ = this._tableUpdate$.asObservable()),
            (this.request$ = this.tableUpdate$.pipe(
              (0, M.n)(() => this.getData().pipe((0, v.Z)(null))),
              (0, ot.u)()
            )),
            (this.loading$ = this.request$.pipe((0, d.T)(m._s))),
            (this.total$ = this.request$.pipe(
              (0, y.p)(m.Aj),
              (0, d.T)(({ total: a }) => a),
              (0, v.Z)(1)
            )),
            (this.totalPages$ = this.total$.pipe(
              (0, X.v)(this.size$),
              (0, d.T)(([a, r]) => Math.trunc(a / r) + 1)
            )),
            (this.data$ = this.request$.pipe(
              (0, y.p)(m.Aj),
              (0, d.T)((a) => a.data.filter(m.Aj)),
              (0, v.Z)([])
            ));
        }
        getData() {
          const o =
              this.storeService.getItem("RUBIC_CHANGENOW_RECENT_TRADE") || [],
            e = o.map((i) => this.getChangenowSwapStatus(i.id));
          return (0, gi.p)(e).pipe(
            (0, d.T)((i) => {
              const a = i.map((r, c) => {
                const u = this.getStatus(r),
                  _ = o[c],
                  f = {
                    symbol: _.fromToken.symbol,
                    image: _.fromToken.image,
                    amount: new Lt.A(_.fromAmount),
                  },
                  g = {
                    symbol: _.toToken.symbol,
                    image: _.toToken.image,
                    amount: new Lt.A(_.toAmount),
                  },
                  b = _.fromToken.blockchain,
                  it = _.toToken.blockchain;
                return {
                  ...o[c],
                  fromToken: f,
                  toToken: g,
                  fromBlockchain: {
                    name: b,
                    label: F.Z[b],
                    color: P.E[b],
                    image: E._[b],
                  },
                  toBlockchain: {
                    name: it,
                    label: F.Z[it],
                    color: P.E[it],
                    image: E._[it],
                  },
                  status: u,
                  date: _.timestamp.toString(),
                  receiverAddress: _.receiverAddress,
                };
              });
              return { data: a, total: a.length };
            })
          );
        }
        transformResponse(o) {}
        getChangenowSwapStatus(o) {
          if (!o) throw new p.RubicSdkError("Must provide changenow trade id");
          try {
            return (0, mi.H)(
              p.ChangeNowCrossChainApiService.getTxStatus(o)
            ).pipe((0, d.T)((e) => e.status));
          } catch {
            return (0, wt.of)(p.CHANGENOW_API_STATUS.WAITING);
          }
        }
        getStatus(o) {
          return {
            new: { appearance: "info", label: "New" },
            waiting: { appearance: "info", label: "Waiting" },
            confirming: { appearance: "info", label: "Confirming" },
            exchanging: { appearance: "info", label: "Exchanging" },
            sending: { appearance: "info", label: "Sending" },
            finished: { appearance: "success", label: "Success" },
            failed: { appearance: "error", label: "Failed" },
            refunded: { appearance: "success", label: "Refunded" },
            verifying: { appearance: "info", label: "Verifying" },
          }[o];
        }
        static #t = (this.ɵfac = function (e) {
          return new (e || O)(t.KVO(S.c), t.KVO(bi.n), t.KVO(vi.Qq));
        });
        static #e = (this.ɵprov = t.jDH({ token: O, factory: O.ɵfac }));
      }
      (0, D.__decorate)(
        [
          (0, fi.R)({ maxAge: 13e3 }),
          (0, D.__metadata)("design:type", Function),
          (0, D.__metadata)("design:paramtypes", [String]),
          (0, D.__metadata)("design:returntype", hi.c),
        ],
        O.prototype,
        "getChangenowSwapStatus",
        null
      );
      var Ti = s(301807);
      function Ci(n, o) {
        if ((1 & n && t.nrm(0, "app-rubic-badge", 4), 2 & n)) {
          const e = t.XpG();
          t.Y8G("status", e.item.status.appearance)(
            "label",
            e.item.status.label
          );
        }
      }
      function ki(n, o) {
        1 & n && t.EFF(0, "Transaction id copied to clipboard!");
      }
      let yi = (() => {
        class n {
          constructor(e, i) {
            (this.cdr = e), (this.navigator = i), (this.isHintVisible = !1);
          }
          copyToClipboard(e) {
            this.showHint(), this.navigator.clipboard.writeText(e);
          }
          showHint() {
            (this.isHintVisible = !0),
              (0, Ti.O)(1500).subscribe(() => {
                (this.isHintVisible = !1), this.cdr.markForCheck();
              });
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.rXU(t.gRc), t.rXU(ct.kW));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-rubic-badge-with-copy-btn"]],
            inputs: { item: "item" },
            decls: 5,
            vars: 4,
            consts: [
              [1, "badge-with-copy-btn"],
              [3, "status", "label", 4, "ngIf"],
              [
                1,
                "badge-with-copy-btn__copy-button",
                "content__icon",
                3,
                "inlineSVG",
                "tuiHint",
                "tuiHintManual",
                "click",
              ],
              ["copyHint", ""],
              [3, "status", "label"],
            ],
            template: function (i, a) {
              if (
                (1 & i &&
                  (t.j41(0, "div", 0),
                  t.DNE(1, Ci, 1, 2, "app-rubic-badge", 1),
                  t.j41(2, "span", 2),
                  t.bIt("click", function () {
                    return a.copyToClipboard(a.item.id);
                  }),
                  t.k0s()(),
                  t.DNE(3, ki, 1, 0, "ng-template", null, 3, t.C5r)),
                2 & i)
              ) {
                const r = t.sdS(4);
                t.R7$(1),
                  t.Y8G("ngIf", null == a.item ? null : a.item.status),
                  t.R7$(1),
                  t.Y8G("inlineSVG", "assets/images/icons/copy.svg")(
                    "tuiHint",
                    r
                  )("tuiHintManual", a.isHintVisible);
              }
            },
            dependencies: [l.bT, U.ll, T.XZ, T.ZF, T.JL, T.Hg, T.AZ, ut],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.badge-with-copy-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.badge-with-copy-btn[_ngcontent-%COMP%]   app-rubic-badge[_ngcontent-%COMP%]{margin-right:var(--tui-padding-xs)}.badge-with-copy-btn__copy-button[_ngcontent-%COMP%]:hover{cursor:pointer}",
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      var xi = s(603349);
      function $i(n, o) {
        1 & n && (t.j41(0, "th", 8), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.from")));
      }
      function Oi(n, o) {
        1 & n && (t.j41(0, "th", 8), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.to")));
      }
      function Mi(n, o) {
        1 & n && (t.j41(0, "th", 8), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
          2 & n &&
            (t.Y8G("sorter", null),
            t.R7$(1),
            t.JRh(t.bMT(2, 2, "recentTrades.date")));
      }
      function Ii(n, o) {
        1 & n && (t.j41(0, "th", 8), t.EFF(1, "Status"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      function wi(n, o) {
        1 & n && (t.j41(0, "th", 8), t.EFF(1, "Receiver address"), t.k0s()),
          2 & n && t.Y8G("sorter", null);
      }
      const At = function (n) {
        return { background: n };
      };
      function Di(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 15)(1, "div", 16),
            t.nrm(2, "img", 17),
            t.k0s(),
            t.nrm(3, "img", 18),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).ngLet;
          t.R7$(1),
            t.Aen(t.eq3(6, At, e.fromBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.fromBlockchain.image,
              t.B4B
            )("alt", e.fromBlockchain.label),
            t.R7$(1),
            t.Y8G("src", e.fromToken.image, t.B4B)("alt", e.fromToken.symbol);
        }
      }
      function Gi(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 11)(1, "div", 12)(2, "div", 13),
            t.DNE(3, Di, 4, 8, "div", 14),
            t.EFF(4),
            t.nI1(5, "shortenAmount"),
            t.nI1(6, "bigNumberFormat"),
            t.k0s()()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G(
              "ngIf",
              null == e || null == e.fromBlockchain
                ? null
                : e.fromBlockchain.color
            ),
            t.R7$(1),
            t.Lme(
              " ",
              t.ii3(5, 3, t.bMT(6, 8, e.fromToken.amount), 6, 4, !0),
              " ",
              e.fromToken.symbol,
              " "
            );
        }
      }
      function Ri(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 15)(1, "div", 16),
            t.nrm(2, "img", 17),
            t.k0s(),
            t.nrm(3, "img", 18),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG(2).ngLet;
          t.R7$(1),
            t.Aen(t.eq3(6, At, e.toBlockchain.color)),
            t.R7$(1),
            t.Y8G(
              "src",
              e.toBlockchain.image,
              t.B4B
            )("alt", e.toBlockchain.label),
            t.R7$(1),
            t.Y8G("src", e.toToken.image, t.B4B)("alt", e.toToken.symbol);
        }
      }
      function Si(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 11)(1, "div", 12)(2, "div", 13),
            t.DNE(3, Ri, 4, 8, "div", 14),
            t.j41(4, "div", 19),
            t.EFF(5),
            t.nI1(6, "shortenAmount"),
            t.nI1(7, "bigNumberFormat"),
            t.k0s()()()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(3),
            t.Y8G(
              "ngIf",
              null == e || null == e.toBlockchain ? null : e.toBlockchain.color
            ),
            t.R7$(2),
            t.Lme(
              " ",
              t.ii3(6, 3, t.bMT(7, 8, e.toToken.amount), 6, 4, !0),
              " ",
              e.toToken.symbol,
              " "
            );
        }
      }
      function Ei(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 11),
            t.EFF(1),
            t.nI1(2, "date"),
            t.nI1(3, "date"),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1),
            t.Lme(
              " ",
              t.i5U(2, 2, null == e ? null : e.date, "MMM dd, yyyy"),
              " ",
              " at " + t.i5U(3, 5, null == e ? null : e.date, "h:mm"),
              " "
            );
        }
      }
      function Pi(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 11),
            t.nrm(1, "app-rubic-badge-with-copy-btn", 20),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("item", e);
        }
      }
      function Fi(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "td", 11), t.EFF(1), t.nI1(2, "shortAddress"), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1),
            t.SpI(
              " ",
              t.brH(2, 1, null == e ? null : e.receiverAddress, 10, 8),
              " "
            );
        }
      }
      function Bi(n, o) {
        1 & n &&
          (t.qex(0),
          t.DNE(1, Gi, 7, 10, "td", 10),
          t.DNE(2, Si, 8, 10, "td", 10),
          t.DNE(3, Ei, 4, 8, "td", 10),
          t.DNE(4, Pi, 2, 1, "td", 10),
          t.DNE(5, Fi, 3, 5, "td", 10),
          t.bVm()),
          2 & n &&
            (t.R7$(1),
            t.Y8G("tuiCell", "from"),
            t.R7$(1),
            t.Y8G("tuiCell", "to"),
            t.R7$(1),
            t.Y8G("tuiCell", "date"),
            t.R7$(1),
            t.Y8G("tuiCell", "status"),
            t.R7$(1),
            t.Y8G("tuiCell", "receiver"));
      }
      function ji(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "tr", 9), t.DNE(1, Bi, 6, 5, "ng-container", 0), t.k0s()),
          2 & n)
        ) {
          const e = o.$implicit,
            i = t.XpG(3);
          t.R7$(1), t.Y8G("ngLet", i.getItem(e));
        }
      }
      function Ni(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "table", 3)(1, "thead")(2, "tr", 4),
            t.DNE(3, $i, 3, 4, "th", 5),
            t.DNE(4, Oi, 3, 4, "th", 5),
            t.DNE(5, Mi, 3, 4, "th", 5),
            t.DNE(6, Ii, 2, 1, "th", 5),
            t.DNE(7, wi, 2, 1, "th", 5),
            t.k0s()(),
            t.j41(8, "tbody", 6),
            t.DNE(9, ji, 2, 1, "tr", 7),
            t.k0s()()),
          2 & n)
        ) {
          const e = t.XpG().ngLet,
            i = t.XpG();
          t.Y8G("columns", i.columns),
            t.R7$(3),
            t.Y8G("tuiHead", "from"),
            t.R7$(1),
            t.Y8G("tuiHead", "to"),
            t.R7$(1),
            t.Y8G("tuiHead", "date"),
            t.R7$(1),
            t.Y8G("tuiHead", "status"),
            t.R7$(1),
            t.Y8G("tuiHead", "receiver"),
            t.R7$(1),
            t.Y8G("data", e.data),
            t.R7$(1),
            t.Y8G("ngForOf", e.data);
        }
      }
      function Yi(n, o) {
        1 & n &&
          (t.j41(0, "div", 23),
          t.nrm(1, "div", 24),
          t.j41(2, "div", 25)(3, "div", 26),
          t.EFF(4),
          t.nI1(5, "translate"),
          t.k0s()(),
          t.j41(6, "div", 25)(7, "div", 26),
          t.EFF(8),
          t.nI1(9, "translate"),
          t.k0s()(),
          t.j41(10, "div", 25)(11, "div", 26),
          t.EFF(12),
          t.nI1(13, "translate"),
          t.k0s()(),
          t.j41(14, "div", 25)(15, "div", 26),
          t.EFF(16, "Provider"),
          t.k0s(),
          t.nrm(17, "div", 27),
          t.k0s()()),
          2 & n &&
            (t.R7$(4),
            t.JRh(t.bMT(5, 3, "recentTrades.date")),
            t.R7$(4),
            t.JRh(t.bMT(9, 5, "recentTrades.statusFrom")),
            t.R7$(4),
            t.JRh(t.bMT(13, 7, "recentTrades.statusTo")));
      }
      function Xi(n, o) {
        if (
          (1 & n &&
            (t.j41(0, "div", 21), t.DNE(1, Yi, 18, 9, "div", 22), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("ngForOf", e.data);
        }
      }
      function Li(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, Ni, 10, 8, "table", 1),
            t.DNE(2, Xi, 2, 1, "ng-template", null, 2, t.C5r),
            t.bVm()),
          2 & n)
        ) {
          const e = t.sdS(3),
            i = t.XpG();
          t.R7$(1), t.Y8G("ngIf", "desktop" === i.device)("ngIfElse", e);
        }
      }
      const Ai = function (n) {
          return { data: n };
        },
        Vi = ["from", "to", "date", "status", "receiver"];
      let Ui = (() => {
        class n {
          constructor(e) {
            (this.tableService = e),
              (this.data$ = this.tableService.data$),
              (this.loading$ = this.tableService.loading$),
              (this.columns = Vi);
          }
          getItem(e) {
            return e;
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(t.rXU(O));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-cn-table"]],
            inputs: { device: "device" },
            decls: 2,
            vars: 5,
            consts: [
              [4, "ngLet"],
              [
                "tuiTable",
                "",
                "class",
                "table",
                3,
                "columns",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["mobileView", ""],
              ["tuiTable", "", 1, "table", 3, "columns"],
              ["tuiThGroup", ""],
              ["tuiTh", "", 3, "sorter", 4, "tuiHead"],
              ["tuiTbody", "", 3, "data"],
              ["tuiTr", "", 4, "ngFor", "ngForOf"],
              ["tuiTh", "", 3, "sorter"],
              ["tuiTr", ""],
              ["tuiTd", "", 4, "tuiCell"],
              ["tuiTd", ""],
              [1, "token-container"],
              [1, "token-container__top"],
              ["class", "token-images", 4, "ngIf"],
              [1, "token-images"],
              [1, "token-images__second-container"],
              [3, "src", "alt"],
              [1, "token-images__main-image", 3, "src", "alt"],
              [1, "asset__asset-type"],
              [3, "item"],
              [1, "mobile-view"],
              ["class", "mobile-view__card", 4, "ngFor", "ngForOf"],
              [1, "mobile-view__card"],
              [1, "mobile-view__card-header"],
              [1, "mobile-view__row"],
              [1, "mobile-view__row-key"],
              [1, "mobile-view__row-value"],
            ],
            template: function (i, a) {
              1 & i &&
                (t.DNE(0, Li, 4, 2, "ng-container", 0), t.nI1(1, "async")),
                2 & i && t.Y8G("ngLet", t.eq3(3, Ai, t.bMT(1, 1, a.data$)));
            },
            dependencies: [
              l.Sq,
              l.bT,
              H.N,
              yi,
              h,
              et,
              mt,
              G,
              q,
              tt,
              W,
              Y,
              l.Jj,
              l.vh,
              ft.p,
              B.D9,
              xi.b,
              vt.W,
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      function Hi(n, o) {
        if ((1 & n && t.nrm(0, "app-cross-chain-desktop-table", 5), 2 & n)) {
          const e = t.XpG(2).ngLet;
          t.Y8G("device", e.device);
        }
      }
      function zi(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, Hi, 1, 1, "app-cross-chain-desktop-table", 4),
            t.bVm()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.XpG();
          const i = t.sdS(9);
          t.R7$(1), t.Y8G("ngIf", e.isUserActive)("ngIfElse", i);
        }
      }
      function Ji(n, o) {
        if ((1 & n && t.nrm(0, "app-on-chain-desktop-table", 5), 2 & n)) {
          const e = t.XpG(2).ngLet;
          t.Y8G("device", e.device);
        }
      }
      function Ki(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, Ji, 1, 1, "app-on-chain-desktop-table", 4),
            t.bVm()),
          2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.XpG();
          const i = t.sdS(9);
          t.R7$(1), t.Y8G("ngIf", e.isUserActive)("ngIfElse", i);
        }
      }
      function Wi(n, o) {
        if (
          (1 & n && (t.qex(0), t.nrm(1, "app-cn-table", 5), t.bVm()), 2 & n)
        ) {
          const e = t.XpG().ngLet;
          t.R7$(1), t.Y8G("device", e.device);
        }
      }
      function Zi(n, o) {
        if (
          (1 & n &&
            (t.qex(0),
            t.DNE(1, zi, 2, 2, "ng-container", 3),
            t.DNE(2, Ki, 2, 2, "ng-container", 3),
            t.DNE(3, Wi, 2, 1, "ng-container", 3),
            t.bVm()),
          2 & n)
        ) {
          const e = o.ngLet;
          t.R7$(1),
            t.Y8G("ngIf", e.isCrossChain),
            t.R7$(1),
            t.Y8G("ngIf", e.isOnChain),
            t.R7$(1),
            t.Y8G("ngIf", e.isCn);
        }
      }
      function Qi(n, o) {
        if (1 & n) {
          const e = t.RV6();
          t.nrm(0, "app-no-result", 6),
            t.j41(1, "div", 7)(2, "button", 8),
            t.bIt("click", function () {
              t.eBV(e);
              const a = t.XpG();
              return t.Njj(a.connectWallet());
            }),
            t.EFF(3),
            t.nI1(4, "translate"),
            t.k0s()();
        }
        2 & n && (t.R7$(3), t.SpI(" ", t.bMT(4, 1, "navigation.login"), " "));
      }
      const qi = function (n, o, e, i, a) {
        return {
          device: n,
          isCrossChain: o,
          isOnChain: e,
          isCn: i,
          isUserActive: a,
        };
      };
      let to = (() => {
        class n {
          constructor(e, i, a, r, c, u, _) {
            (this.window = e),
              (this.commonTableService = i),
              (this.crossChainTableService = a),
              (this.onChainTableService = r),
              (this.walletConnectorService = c),
              (this.modalService = u),
              (this.injector = _),
              (this.isUserActive$ =
                this.walletConnectorService.addressChange$.pipe(
                  (0, d.T)(Boolean)
                )),
              (this.loading$ = this.crossChainTableService.loading$.pipe(
                (0, X.v)(this.onChainTableService.loading$),
                (0, d.T)((g) => g.some(Boolean))
              )),
              (this.isCrossChain$ =
                this.commonTableService.activeItemIndex$.pipe(
                  (0, d.T)((g) => 0 === g)
                )),
              (this.isOnChain$ = this.commonTableService.activeItemIndex$.pipe(
                (0, d.T)((g) => 1 === g)
              )),
              (this.isCn$ = this.commonTableService.activeItemIndex$.pipe(
                (0, d.T)((g) => 2 === g)
              )),
              (this.device$ = (0, wt.of)(this.window.innerWidth).pipe(
                (0, d.T)((g) =>
                  g > 960 ? "desktop" : g > 600 ? "tablet" : "mobile"
                )
              ));
            const f = this.window.history.state?.type;
            f &&
              (this.commonTableService.activeItemIndex =
                "cross-chain" === f ? 0 : 1);
          }
          connectWallet() {
            this.modalService.openWalletModal(this.injector).subscribe();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || n)(
              t.rXU(ct.jf),
              t.rXU(j),
              t.rXU(L),
              t.rXU(A),
              t.rXU(S.c),
              t.rXU(ie.B),
              t.rXU(t.zZn)
            );
          });
          static #e = (this.ɵcmp = t.VBU({
            type: n,
            selectors: [["app-history-table"]],
            decls: 10,
            vars: 21,
            consts: [
              [3, "overlay", "showLoader"],
              [4, "ngLet"],
              ["noUser", ""],
              [4, "ngIf"],
              [3, "device", 4, "ngIf", "ngIfElse"],
              [3, "device"],
              [
                "label",
                "Wallet has not connected",
                "description",
                "Connect wallet to obtain user trades history",
              ],
              [1, "button-container"],
              [
                "tuiButton",
                "",
                "appearance",
                "primary",
                "type",
                "button",
                "size",
                "m",
                3,
                "click",
              ],
            ],
            template: function (i, a) {
              1 & i &&
                (t.j41(0, "tui-loader", 0),
                t.nI1(1, "async"),
                t.DNE(2, Zi, 4, 3, "ng-container", 1),
                t.nI1(3, "async"),
                t.nI1(4, "async"),
                t.nI1(5, "async"),
                t.nI1(6, "async"),
                t.nI1(7, "async"),
                t.k0s(),
                t.DNE(8, Qi, 5, 3, "ng-template", null, 2, t.C5r)),
                2 & i &&
                  (t.Y8G("overlay", !0)("showLoader", t.bMT(1, 3, a.loading$)),
                  t.R7$(2),
                  t.Y8G(
                    "ngLet",
                    t.s1E(
                      15,
                      qi,
                      t.bMT(3, 5, a.device$),
                      t.bMT(4, 7, a.isCrossChain$),
                      t.bMT(5, 9, a.isOnChain$),
                      t.bMT(6, 11, a.isCn$),
                      t.bMT(7, 13, a.isUserActive$)
                    )
                  ));
            },
            dependencies: [
              l.bT,
              H.N,
              oe.q,
              Dt.jT,
              lt.SM,
              Nn,
              pi,
              Ui,
              l.Jj,
              B.D9,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]     .token-images{display:flex;height:16px}[_nghost-%COMP%]     .token-images__second-container{display:flex;align-items:center;width:26px;height:17px;padding-left:2px;overflow:hidden;border-radius:var(--tui-radius-s) 0 0 var(--tui-radius-s)}[_nghost-%COMP%]     .token-images__second-container img{width:15px;height:15px}[_nghost-%COMP%]     .token-images__main-image{width:17px;height:17px;margin-left:-8px;background:var(--primary-background);border-radius:100%;outline:1px solid var(--primary-background)}[_nghost-%COMP%]     a.token-container__inner{text-decoration:none}[_nghost-%COMP%]     a.token-container__inner img{transition:all .1s ease-in-out}[_nghost-%COMP%]     a.token-container__inner:hover img{transform:scale(1.3) translate(2px,-2px);transition:all .1s ease-in-out}[_nghost-%COMP%]     .token-container{display:flex;flex-direction:column}[_nghost-%COMP%]     .token-container__inner{display:flex;align-items:center}[_nghost-%COMP%]     .token-container__main-image{width:16px;height:16px;margin-right:var(--tui-padding-xs);border-radius:100%}[_nghost-%COMP%]     .token-container__top, [_nghost-%COMP%]     .token-container__bot{display:flex;gap:var(--tui-padding-s)}[_nghost-%COMP%]     .provider-container{display:flex;gap:var(--tui-padding-xs);align-items:center}[_nghost-%COMP%]     .provider-container__image{width:16px;height:16px;border-radius:50%}[_nghost-%COMP%]     .table{width:100%;overflow:hidden;background:var(--tui-base-01);border-radius:var(--tui-radius-m)}@media (max-width: 960px){[_nghost-%COMP%]     .table th{display:none}}[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th{border:none}[_nghost-%COMP%]     tui-pagination{display:block;margin-top:var(--tui-padding-m)}[_nghost-%COMP%]     .status-from-link-arrow, [_nghost-%COMP%]     .status-to-link-arrow{margin-left:var(--tui-padding-s);color:var(--tui-link)}[_nghost-%COMP%]     .statusTo-action-button__wrapper{width:87.4px}[_nghost-%COMP%]     .statusFrom-dropdown{display:flex;align-items:center}[_nghost-%COMP%]     .statusFrom-dropdown app-dropdown-options-table-item{margin-left:1px}[_nghost-%COMP%]     .mobile-view{display:flex;flex-wrap:wrap;gap:var(--tui-padding-m)}[_nghost-%COMP%]     .mobile-view__from-field, [_nghost-%COMP%]     .mobile-view__to-field{display:flex;gap:var(--tui-padding-xs);align-items:center}[_nghost-%COMP%]     .mobile-view__card-header{display:flex;justify-content:space-between;margin-bottom:var(--tui-padding-s)}@media (max-width: 651px){[_nghost-%COMP%]     .mobile-view__card-header{flex-direction:column;gap:var(--tui-padding-xs)}}@media (max-width: 500px){[_nghost-%COMP%]     .mobile-view__card-header{flex-direction:row}}[_nghost-%COMP%]     .mobile-view__card{display:flex;flex:1;flex-basis:calc(50% - var(--tui-padding-m) / 2);flex-direction:column;gap:var(--tui-padding-s);max-width:calc(50% - var(--tui-padding-m) / 2);padding:var(--tui-padding-l);background:var(--tui-base-01);border-radius:var(--tui-radius-m)}@media (max-width: 500px){[_nghost-%COMP%]     .mobile-view__card{flex-basis:100%;max-width:100%}}[_nghost-%COMP%]     .mobile-view__row{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]     .mobile-view__row-value-dropdown{position:relative;left:var(--tui-padding-s)}[_nghost-%COMP%]     .mobile-view__row-value-action-button__wrapper{width:87.4px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin-top:var(--tui-padding-l)}",
            ],
            changeDetection: 0,
          }));
        }
        return n;
      })();
      const eo = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(e) {
                (this.recentTradesStoreService = e), this.readAllTrades();
              }
              readAllTrades() {
                this.recentTradesStoreService.updateUnreadTrades(!0);
              }
              static #t = (this.ɵfac = function (i) {
                return new (i || n)(t.rXU(Vt.C));
              });
              static #e = (this.ɵcmp = t.VBU({
                type: n,
                selectors: [["app-history-view"]],
                decls: 5,
                vars: 0,
                consts: [["header", ""]],
                template: function (i, a) {
                  1 & i &&
                    (t.j41(0, "app-window-container"),
                    t.qex(1, 0),
                    t.EFF(2, "Recent Trades"),
                    t.bVm(),
                    t.nrm(3, "app-history-header")(4, "app-history-table"),
                    t.k0s());
                },
                dependencies: [Ut.r, ne, to],
                styles: [
                  "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{display:block;width:900px;margin:0 auto}@media (max-width: 960px){[_nghost-%COMP%]{width:100%}}",
                ],
                changeDetection: 0,
              }));
            }
            return n;
          })(),
        },
      ];
      let no = (() => {
        class n {
          static #t = (this.ɵfac = function (i) {
            return new (i || n)();
          });
          static #e = (this.ɵmod = t.$C({ type: n }));
          static #n = (this.ɵinj = t.G2t({
            imports: [kt.iI.forChild(eo), kt.iI],
          }));
        }
        return n;
      })();
      var io = s(30640),
        oo = s(300331),
        ao = s(562287);
      let ro = (() => {
        class n {
          static #t = (this.ɵfac = function (i) {
            return new (i || n)();
          });
          static #e = (this.ɵmod = t.$C({ type: n }));
          static #n = (this.ɵinj = t.G2t({
            providers: [j, L, A, O],
            imports: [
              l.MD,
              no,
              io.G,
              V.J8,
              J.vl,
              U.e1,
              Ke,
              Dt.Yc,
              ao.BX,
              ht.ks,
              oo.g,
              bt.N,
              st.pg,
              $.CN,
              Mt.Km,
              k.X1,
              lt.Pv,
              T.Q3,
            ],
          }));
        }
        return n;
      })();
    },
  },
]);
