"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [289],
  {
    313289: (ll, Vt, p) => {
      p.r(Vt), p.d(Vt, { TradeModule: () => cl });
      var $e = p(274710),
        e = p(617705);
      let Jn = (() => {
        class i {
          constructor(t) {
            this.router = t;
          }
          canActivate() {
            return this.router.navigate(["/"]), !1;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO($e.Ix));
          });
          static #t = (this.ɵprov = e.jDH({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          }));
        }
        return i;
      })();
      var C = p(474523),
        S = p(749969),
        N = p(84412),
        G = p(820140),
        qn = p(544668),
        Se = p(301807),
        ee = p(670152),
        k = p(96354),
        te = p(905964),
        F = p(399172),
        L = p(323294),
        A = p(525558),
        Te = p(413946),
        R = p(461594),
        r = p(455748),
        z = p(739795),
        ne = (function (i) {
          return (
            (i[(i.NOT_INITIATED = 0)] = "NOT_INITIATED"),
            (i[(i.DISABLED = 1)] = "DISABLED"),
            (i[(i.LOADING = 2)] = "LOADING"),
            (i[(i.READY_TO_APPROVE = 3)] = "READY_TO_APPROVE"),
            (i[(i.APPROVE_IN_PROGRESS = 4)] = "APPROVE_IN_PROGRESS"),
            (i[(i.READY_TO_SWAP = 5)] = "READY_TO_SWAP"),
            (i[(i.SWAP_IN_PROGRESS = 6)] = "SWAP_IN_PROGRESS"),
            (i[(i.OLD_TRADE_DATA = 7)] = "OLD_TRADE_DATA"),
            (i[(i.READY_TO_BUY_NATIVE = 8)] = "READY_TO_BUY_NATIVE"),
            (i[(i.BUY_NATIVE_IN_PROGRESS = 9)] = "BUY_NATIVE_IN_PROGRESS"),
            i
          );
        })(ne || {}),
        M = p(970950),
        U = p(181170),
        V = p(674204),
        E = p(93359),
        x = p(935763),
        Z = p(595917),
        ei = p(793802);
      const ti = {
          noRoutes: !1,
          showSidebar: !1,
          activeCalculation: !1,
          calculationProgress: { total: 0, current: 0 },
        },
        ni = {
          trade: null,
          error: null,
          needApprove: !1,
          tradeType: void 0,
          tags: { isBest: !1, cheap: !1 },
          routes: [],
          selectedByUser: !1,
          status: ne.NOT_INITIATED,
        },
        jt = "linear-gradient(to bottom, #49c0f0 0%,#2cafe3 100%)",
        si = {
          [r.CROSS_CHAIN_TRADE_TYPE.OWL_TO_BRIDGE]: [
            {
              getUrl: () => "https://owlto.finance/",
              bgColor: jt,
              fromSdk: !1,
              getLabel: () => "+Points!",
              getHint: () =>
                "Complete swap using Owlto and recieve Owlto points!",
              showLabel: () => !0,
            },
          ],
          [r.BRIDGE_TYPE.SYMBIOSIS]: [
            {
              getUrl: (i) => {
                const c =
                    i instanceof r.CrossChainTrade ? i.promotions?.[0] : null,
                  [t] = c.split("_");
                return "taiko" === t.toLowerCase()
                  ? "https://x.com/symbiosis_fi/status/1811374725391888666"
                  : "arb" === t.toLowerCase()
                  ? "https://symbiosis.finance/blog/earn-arb-arbitrum-incentives-at-symbiosis#how-much-arb-rewards-can-you-earn"
                  : "";
              },
              fromSdk: !0,
              getLabel: (i) => {
                const c =
                    i instanceof r.CrossChainTrade ? i.promotions?.[0] : null,
                  [t] = c.split("_");
                return "taiko" === t.toLowerCase()
                  ? "+5 $Taiko"
                  : "arb" === t.toLowerCase()
                  ? "+ARB"
                  : "";
              },
              getHint: (i) => {
                const c =
                    i instanceof r.CrossChainTrade ? i.promotions?.[0] : null,
                  [t] = c.split("_");
                return "taiko" === t.toLowerCase()
                  ? "Get up to 5 $Taiko per swap via Symbiosis!"
                  : "arb" === t.toLowerCase()
                  ? "Earn ARB Arbitrum Incentives at Symbiosis"
                  : "";
              },
              showLabel: () => !0,
            },
          ],
          [r.BRIDGE_TYPE.MESON]: [
            {
              bgColor: jt,
              fromSdk: !1,
              getLabel: () => "INFO",
              getHint: () =>
                "Meson Provider allows swaps only for amounts with 6 or fewer decimal places. \n      If your transaction amount has more than 6 decimals, only the first 6 digits after the decimal point will be considered during the transaction.\n      Example: 0.99999999999 ETH -> 0.999999 ETH",
              showLabel: () => !0,
            },
          ],
          [r.BRIDGE_TYPE.ARBITRUM]: [
            {
              bgColor:
                "linear-gradient(90deg, rgba(0, 255, 117, 0.6) 0%, rgba(224, 255, 32, 0.6) 99.18%)",
              fromSdk: !1,
              getLabel: () => "NO SLIPPAGE",
              showLabel: function oi(i) {
                return (
                  "rbc" === i.from.symbol.toLowerCase() &&
                  "rbc" === i.to.symbol.toLowerCase()
                );
              },
            },
            {
              bgColor:
                "linear-gradient(90deg, rgba(204, 141, 23, 0.83) 0%, rgba(213, 185, 5, 0.94) 99.18%)",
              fromSdk: !1,
              getLabel: () => "ATTENTION",
              getHint: () => "Waiting funds in target chain for 7 days",
              showLabel: function ri(i) {
                return (
                  i.from.blockchain === r.BLOCKCHAIN_NAME.ARBITRUM &&
                  i.to.blockchain === r.BLOCKCHAIN_NAME.ETHEREUM
                );
              },
            },
          ],
        },
        di = {
          [r.BLOCKCHAIN_NAME.ZK_LINK]: [
            {
              fromSdk: !1,
              bgColor:
                "linear-gradient(0deg, rgba(39,153,104,1) 0%, rgba(42,189,143,1) 100%)",
              getUrl: () =>
                "https://rubic.exchange/blog/bridge-to-zklink-network-and-get-extra-nova-points/",
              getLabel: () => "+ Nova and Qubic AI Points",
              getHint: () =>
                "Double RBC points for all transactions and 1 Nova point for every transaction.",
              showLabel: function li(i) {
                return i.to.blockchain === r.BLOCKCHAIN_NAME.ZK_LINK;
              },
            },
          ],
          [r.BLOCKCHAIN_NAME.SCROLL]: [
            {
              getUrl: () => "https://scroll.io/sessions",
              bgColor: "#BDA584",
              fromSdk: !1,
              getLabel: () => "+Marks!",
              getHint: () =>
                "You will recieve Marks from Scroll for completing this swap and holding this token!",
              showLabel: function ci(i) {
                const t =
                  i.to.isNative ||
                  [
                    "weth",
                    "usdt",
                    "usdc",
                    "wsteth",
                    "wrseth",
                    "stone",
                  ].includes(i.to.symbol.toLowerCase());
                return (
                  i.to.blockchain === r.BLOCKCHAIN_NAME.SCROLL &&
                  i.feeInfo?.rubicProxy?.fixedFee?.amount.gt(0) &&
                  t
                );
              },
            },
          ],
        };
      var Fe = p(84572),
        X = p(788141),
        re = p(699437),
        y = p(607673),
        Le = (function (i) {
          return (
            (i.PENDING = "pending"),
            (i.COMPLETE = "complete"),
            (i.NO_ROUTES = "noroutes"),
            i
          );
        })(Le || {}),
        Yt = p(511288),
        ht = p(821626);
      let Ke = (() => {
        class i {
          constructor(t, n, a) {
            (this.httpClient = t),
              (this.swapFormService = n),
              (this.tokenStoreService = a),
              (this._alternativeRouteStatus$ = new N.t(Le.PENDING)),
              (this.DEFAULT_TOKEN_PRICE = 100),
              (this.DEFAULT_TOKEN_AMOUNT = new E.A(100)),
              (this.alternativeRouteStatus$ =
                this._alternativeRouteStatus$.asObservable()),
              (this._prevAlternativeRoutes$ = new N.t([])),
              (this._currentAlternativeRoute$ = new N.t(null));
          }
          setCurrentAlternativeRoute(t) {
            this._currentAlternativeRoute$.next(t);
          }
          get currentAlternativeRoute() {
            return this._currentAlternativeRoute$.getValue();
          }
          setPrevAlternativeRoute(t) {
            const n = this._prevAlternativeRoutes$.getValue();
            this.checkIsPrevRoute({
              fromAddress: t.from.address,
              toAddress: t.to.address,
            }) || this._prevAlternativeRoutes$.next([...n, t]);
          }
          fetchAlternativeRoutes(t) {
            return this.httpClient
              .get(`${Yt.M.apiTokenUrl}/v1/token_pairs/`, { params: { ...t } })
              .pipe((0, k.T)((n) => n.token_pairs));
          }
          getAlternativeRoutes() {
            return (
              this._alternativeRouteStatus$.next(Le.PENDING),
              (0, Fe.z)([
                this.swapFormService.fromToken$,
                this.swapFormService.toToken$,
              ]).pipe(
                (0, A.n)(([t, n]) =>
                  this.fetchAlternativeRoutes({
                    sourceNetwork: r.TO_BACKEND_BLOCKCHAINS[t.blockchain],
                    sourceTokenAddress: t.address,
                    destinationNetwork: r.TO_BACKEND_BLOCKCHAINS[n.blockchain],
                    destinationTokenAddress: n.address,
                  })
                ),
                (0, k.T)((t) => {
                  const n = t.filter(
                    (o) =>
                      !this.checkIsPrevRoute({
                        fromAddress: o.sourceTokenAddress,
                        toAddress: o.destinationTokenAddress,
                      })
                  );
                  if (n && 0 === n.length) throw Error();
                  const a = n
                    .sort((o, s) => s.totalRank - o.totalRank)
                    .map((o) => {
                      const s = this.tokenStoreService.tokens.find(
                          (d) =>
                            (0, x.Qb)(d.address, o.sourceTokenAddress) &&
                            r.TO_BACKEND_BLOCKCHAINS[d.blockchain] ===
                              o.sourceTokenNetwork.toLowerCase()
                        ),
                        l = this.tokenStoreService.tokens.find(
                          (d) =>
                            (0, x.Qb)(d.address, o.destinationTokenAddress) &&
                            r.TO_BACKEND_BLOCKCHAINS[d.blockchain] ===
                              o.destinationTokenNetwork.toLowerCase()
                        );
                      return s && l
                        ? {
                            from: s,
                            to: l,
                            amount: this.getFromTokenAmount(
                              s,
                              o.sourceTokenUsdPrice
                            ),
                          }
                        : null;
                    })
                    .slice(0, 5)
                    .filter(x.TM);
                  if (0 === a.length) throw new Error();
                  return a;
                }),
                (0, X.M)(() => this._alternativeRouteStatus$.next(Le.COMPLETE)),
                (0, re.W)(
                  () => (
                    this._alternativeRouteStatus$.next(Le.NO_ROUTES),
                    (0, y.of)(null)
                  )
                )
              )
            );
          }
          getFromTokenAmount(t, n) {
            const o = this.swapFormService.inputValue.fromAmount;
            if (
              !(0, x.Qb)(
                this.swapFormService.inputValue.fromToken.address,
                t.address
              )
            ) {
              if (!n) return this.DEFAULT_TOKEN_AMOUNT;
              const s = this.swapFormService.inputValue.fromToken.price;
              return s
                ? o.actualValue.multipliedBy(s).dividedBy(n)
                : new E.A(this.DEFAULT_TOKEN_PRICE).dividedBy(n);
            }
            return o.actualValue;
          }
          checkIsPrevRoute(t) {
            return this._prevAlternativeRoutes$
              .getValue()
              .some(
                (a) =>
                  (0, x.Qb)(a.from.address, t.fromAddress) &&
                  (0, x.Qb)(a.to.address, t.toAddress)
              );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(ht.Qq), e.KVO(M.K), e.KVO(Z.p));
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var se = p(548770),
        K = p(60135);
      let he = (() => {
        class i {
          get tradeState() {
            return this._tradeState$.value;
          }
          set currentTrade(t) {
            this._tradeState$.next(t);
          }
          get currentTrade() {
            return this._tradeState$.getValue();
          }
          constructor(t, n, a, o, s, l) {
            (this.swapsFormService = t),
              (this.walletConnector = n),
              (this.tradePageService = a),
              (this.tokensStoreService = o),
              (this.headerStore = s),
              (this.alternativeRouteService = l),
              (this.defaultState = ni),
              (this.swapType = V.T.CROSS_CHAIN_ROUTING),
              (this._tradeState$ = new N.t(this.defaultState)),
              (this.tradeState$ = this._tradeState$
                .asObservable()
                .pipe((0, ee.B)(0))),
              (this.currentTrade$ = this.tradeState$.pipe(
                (0, k.T)((u) => u?.trade)
              )),
              (this.wrongBlockchain$ = this.swapsFormService.fromToken$.pipe(
                (0, te.p)(Boolean),
                (0, G.v)(this.walletConnector.networkChange$),
                (0, k.T)(([u, d]) => u?.blockchain !== d),
                (0, F.Z)(!1)
              )),
              (this.notEnoughBalance$ = this.swapsFormService.fromToken$.pipe(
                (0, te.p)(Boolean),
                (0, G.v)(
                  this.tokensStoreService.tokens$,
                  this.swapsFormService.fromAmount$,
                  this.walletConnector.networkChange$,
                  this.walletConnector.addressChange$
                ),
                (0, k.T)(([u, d, m, v, g]) => {
                  const f = d.find((T) => (0, x._f)(u, T));
                  try {
                    const T = r.BlockchainsInfo.getChainType(f.blockchain),
                      b = r.BlockchainsInfo.getChainType(v);
                    return (
                      !!(g && b && T === b && f) &&
                      (!f.amount?.isFinite() || f.amount.lt(m?.actualValue))
                    );
                  } catch {
                    return !1;
                  }
                })
              )),
              (this._tradesStore$ = new N.t([])),
              (this.tradesStore$ = this._tradesStore$.asObservable()),
              (this._calculationProgress$ = new N.t({ total: 0, current: 0 })),
              (this.calculationProgress$ =
                this._calculationProgress$.asObservable()),
              (this.calculationStatus$ = this.initCalculationStatus()),
              this.subscribeOnTradeChange();
          }
          updateTrade(t, n, a, o) {
            const s = t?.trade,
              l = s
                ? {
                    error: t?.error,
                    trade: s,
                    needApprove: a,
                    needAuthWallet: o,
                    tradeType: t.tradeType,
                    tags: { isBest: !1, cheap: !1 },
                    routes: s.getTradeInfo().routePath || [],
                    badges: this.setSpecificBadges(s),
                  }
                : {
                    error: t.error,
                    trade: null,
                    needApprove: a,
                    needAuthWallet: o,
                    tradeType: t.tradeType,
                    tags: { isBest: !1, cheap: !1 },
                    routes: [],
                  };
            let u = this._tradesStore$.getValue();
            if (u.length)
              if (n === this.swapType) {
                const d = u.findIndex((m) => m?.trade?.type === t?.tradeType);
                -1 !== d
                  ? s
                    ? (u[d] = {
                        ...u[d],
                        trade: l.trade,
                        needApprove: l.needApprove,
                        error: l.error,
                        routes: l.routes,
                      })
                    : u.splice(d, 1)
                  : s && u.push(l);
              } else s && (u = [l]);
            else s && u.push(l);
            (this.swapType = n), this._tradesStore$.next(u);
          }
          clearProviders(t = !1) {
            this._tradeState$.next(this.defaultState),
              this._tradesStore$.next([]),
              this.tradePageService.setProvidersVisibility(!1),
              t
                ? this.setCalculationProgress(1, 1)
                : this.setCalculationProgress(0, 0);
          }
          pickProvider(t) {
            let n = this._tradesStore$.getValue();
            if (n.length) {
              const a = n.some((d) => d?.trade instanceof z.CrossChainTrade),
                o = n.some((d) => d?.trade instanceof r.OnChainTrade),
                s = n
                  .filter((d) => d?.trade?.to)
                  .some((d) => !d.trade.to?.price?.gt(0));
              (a || o) &&
                (n = a
                  ? this.sortCrossChainTrades(n, s)
                  : this.sortOnChainTrades(n, s));
              const u = {
                ...n[0],
                selectedByUser: !1,
                status: ne.READY_TO_SWAP,
              };
              u.error && (u.status = ne.DISABLED),
                u.needApprove && (u.status = ne.READY_TO_APPROVE),
                this._tradesStore$.next(n),
                (this.currentTrade = u);
            } else
              this.currentTrade = {
                ...this.defaultState,
                status: t ? ne.DISABLED : ne.LOADING,
              };
          }
          sortCrossChainTrades(t, n) {
            return t.sort((a, o) => {
              const s = a?.trade
                  ? this.getNativeTokenPrice(a.trade.from.blockchain)
                  : new E.A(0),
                l = o?.trade
                  ? this.getNativeTokenPrice(o.trade.from.blockchain)
                  : new E.A(0);
              return this.isArbitrumBridgeForRBCTokens(a?.trade)
                ? -1
                : (0, r.compareCrossChainTrades)(a, o, s, l, n);
            });
          }
          isArbitrumBridgeForRBCTokens(t) {
            return (
              "rbc" === t.to.symbol.toLowerCase() &&
              "rbc" === t.from.symbol.toLowerCase() &&
              t.type === r.CROSS_CHAIN_TRADE_TYPE.ARBITRUM
            );
          }
          getNativeTokenPrice(t) {
            const n = r.nativeTokensList[t],
              a = this.tokensStoreService.tokens.find((o) =>
                (0, x._f)(o, { blockchain: t, address: n.address })
              ).price;
            return new E.A(a);
          }
          sortOnChainTrades(t, n) {
            return t.sort((a, o) => {
              let s, l;
              return (
                n
                  ? ((s = a.trade.to.tokenAmount), (l = o.trade.to.tokenAmount))
                  : ((s = a.trade.to.price.multipliedBy(
                      a.trade.to.tokenAmount
                    )),
                    (l = o.trade.to.price.multipliedBy(
                      o.trade.to.tokenAmount
                    ))),
                s.gt(l) ? -1 : l.gt(s) ? 1 : 0
              );
            });
          }
          selectTrade(t) {
            var n = this;
            return (0, C.A)(function* () {
              const a = n._tradesStore$.value.find((o) => o.tradeType === t);
              (n.currentTrade = {
                ...a,
                selectedByUser: !1,
                status: n.currentTrade.status,
              }),
                n.swapsFormService.outputControl.patchValue({
                  toAmount: a?.trade?.to?.tokenAmount || null,
                });
            })();
          }
          subscribeOnTradeChange() {
            this.currentTrade$.subscribe((t) => {
              this.swapsFormService.outputControl.patchValue({
                toAmount: t?.to?.tokenAmount || null,
              });
            });
          }
          patchCalculationState() {
            this._tradeState$.next({
              ...this._tradeState$.value,
              status: ne.LOADING,
            });
          }
          setCalculationProgress(t, n) {
            this._calculationProgress$.next({ total: t, current: n });
          }
          checkWrap(t, n) {
            if (!t?.address || !n?.address) return !1;
            const a = new r.Token(t),
              o = new r.Token(n);
            return (
              ((a.isNative && o.isWrapped) || (a.isWrapped && o.isNative)) &&
              t.blockchain === n.blockchain
            );
          }
          initCalculationStatus() {
            return this.swapsFormService.fromToken$.pipe(
              (0, L.F)(this.shouldEmitToken),
              (0, G.v)(
                this.swapsFormService.toToken$.pipe(
                  (0, L.F)(this.shouldEmitToken)
                )
              ),
              (0, A.n)(this.getTimerObservable),
              (0, G.v)(
                this.swapsFormService.isFilled$.pipe((0, L.F)()),
                this.tradesStore$,
                this.calculationProgress$,
                this.tradePageService.formContent$.pipe(
                  (0, Te.J)(),
                  (0, k.T)(([t, n]) => t === n || "form" !== n),
                  (0, F.Z)(!1),
                  (0, G.v)(
                    this.headerStore.getMobileDisplayStatus().pipe((0, R.$)())
                  ),
                  (0, k.T)(([t, n]) => t && !n)
                )
              ),
              (0, k.T)((t) => {
                const n = this.getCalculationStatus(t),
                  a = this.alternativeRouteService.currentAlternativeRoute,
                  { fromToken: o, toToken: s } =
                    this.swapsFormService.inputValue;
                if (a) {
                  const l =
                    (0, x.Qb)(o.address, a.from.address) &&
                    (0, x.Qb)(s.address, a.to.address);
                  n.noRoutes &&
                    l &&
                    this.alternativeRouteService.setPrevAlternativeRoute(a);
                }
                return n;
              }),
              (0, ee.B)(50),
              (0, L.F)((t, n) => (0, x.Gq)(t, n)),
              (0, qn.t)(ei.V),
              (0, F.Z)(ti)
            );
          }
          getCalculationStatus(t) {
            const [n, a, o, s, l] = t,
              { fromToken: u, toToken: d } = this.swapsFormService.inputValue,
              m =
                o.some((w) => w.trade instanceof r.EvmWrapTrade) ||
                this.checkWrap(u, d),
              v = o.filter((w) => !!w.trade).length > 0,
              g = s.current !== s.total,
              f = {
                noRoutes: !g && !v && s.total > 0,
                showSidebar: !1,
                activeCalculation: g,
                calculationProgress: s,
              };
            return !a || m || l
              ? { ...f, showSidebar: !1 }
              : (((1 === s.total && 0 === s.current) || s.total > 0) && v) || n
              ? { ...f, showSidebar: !0 }
              : f;
          }
          shouldEmitToken(t, n) {
            return !(!t || !n);
          }
          getTimerObservable() {
            return (0, Se.O)(2e3).pipe(
              (0, k.T)(() => !0),
              (0, F.Z)(!1)
            );
          }
          setSpecificBadges(t) {
            const n = Object.entries(si).find(([d]) => d === t.type),
              a = Object.entries(di)
                .filter(
                  ([d]) => d === t.to.blockchain || d === t.from.blockchain
                )
                .flatMap(([d, m]) => m);
            return n || a
              ? [...(n?.[1] || []), ...(a || [])]
                  .filter(Boolean)
                  .filter(
                    (d) =>
                      !(
                        !d.showLabel(t) ||
                        (d.fromSdk &&
                          !(
                            d.fromSdk &&
                            "promotions" in t &&
                            t.promotions?.length
                          ))
                      )
                  )
                  .map((d) => ({
                    bgColor: d.bgColor,
                    label: d.getLabel(t),
                    hint: d?.getHint?.(t),
                    href: d?.getUrl?.(t),
                  }))
              : [];
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(M.K),
              e.KVO(U.c),
              e.KVO(se.p),
              e.KVO(Z.p),
              e.KVO(K.X),
              e.KVO(Ke)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Ce = p(634231),
        ce = p(727468),
        Ae = p(186648),
        Ue = p(50401),
        _e = p(700409);
      const De = {
        swap: {
          fromChain: r.BLOCKCHAIN_NAME.ETHEREUM,
          toChain: r.BLOCKCHAIN_NAME.ETHEREUM,
          from: {
            [r.BLOCKCHAIN_NAME.ETHEREUM]: "ETH",
            [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: "BNB",
            [r.BLOCKCHAIN_NAME.POLYGON]: "MATIC",
            [r.BLOCKCHAIN_NAME.HARMONY]: "ONE",
            [r.BLOCKCHAIN_NAME.AVALANCHE]: "AVAX",
            [r.BLOCKCHAIN_NAME.MOONRIVER]: "MOVR",
            [r.BLOCKCHAIN_NAME.ARBITRUM]: "AETH",
            [r.BLOCKCHAIN_NAME.AURORA]: "aETH",
            [r.BLOCKCHAIN_NAME.TELOS]: "TLOS",
          },
          to: {
            [r.BLOCKCHAIN_NAME.ETHEREUM]: "RBC",
            [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: "BRBC",
          },
          amount: "1",
        },
      };
      var gt = p(259925);
      let Kt = (() => {
        class i {
          get initialLoading() {
            return this._initialLoading$.getValue();
          }
          constructor(t, n, a, o, s, l) {
            (this.queryParamsService = t),
              (this.swapsFormService = n),
              (this.tokensService = a),
              (this.tokensStoreService = o),
              (this.gtmService = s),
              (this.walletConnectorService = l),
              (this._initialLoading$ = new N.t(!0)),
              (this.initialLoading$ = this._initialLoading$.asObservable()),
              this.subscribeOnSwapForm(),
              this.subscribeOnQueryParams();
          }
          subscribeOnSwapForm() {
            this.swapsFormService.inputValue$
              .pipe(
                (0, L.F)((t, n) => (0, x.Gq)(t, n)),
                (0, Te.J)()
              )
              .subscribe(([t, n]) => {
                let a = (0, x.Gq)(t, n);
                if (
                  t?.fromToken &&
                  "price" in t?.fromToken &&
                  n?.fromToken &&
                  "price" in n?.fromToken
                ) {
                  const o = {
                      ...t,
                      fromToken: { ...t.fromToken, price: 0 },
                      toToken: { ...t.toToken, price: 0 },
                    },
                    s = {
                      ...n,
                      fromToken: { ...n.fromToken, price: 0 },
                      toToken: { ...n.toToken, price: 0 },
                    };
                  a = (0, x.Gq)(o, s);
                }
                this.queryParamsService.patchQueryParams({
                  ...(n.fromToken?.symbol && { from: n.fromToken.symbol.replaceAll("RBC", "CRAI") }),
                  ...(n.toToken?.symbol && { to: n.toToken.symbol.replaceAll("RBC", "CRAI") }),
                  ...(n.fromBlockchain && { fromChain: n.fromBlockchain }),
                  ...(n.toBlockchain && { toChain: n.toBlockchain }),
                  ...(n.fromAmount?.actualValue.gt(0) && {
                    amount: n.fromAmount.actualValue.toFixed(),
                  }),
                  ...(!a && { onramperTxId: null }),
                });
              });
          }
          subscribeOnQueryParams() {
            this.tokensStoreService.tokens$
              .pipe((0, R.$)(gt.Aj))
              .pipe(
                (0, A.n)((t) => {
                  const a = this.getProtectedSwapParams(
                      this.queryParamsService.queryParams
                    ),
                    o = a.fromChain,
                    s = a.toChain,
                    l = this.getTokenBySymbolOrAddress(t, a.from, o),
                    u = this.getTokenBySymbolOrAddress(t, a.to, s);
                  return (0, ce.p)([l, u]).pipe(
                    (0, k.T)(([d, m]) => ({
                      fromToken: d,
                      toToken: m,
                      fromBlockchain: o,
                      toBlockchain: s,
                      amount: a.amount,
                      amountTo: a.amountTo,
                    }))
                  );
                })
              )
              .subscribe(
                ({
                  fromBlockchain: t,
                  toToken: n,
                  fromToken: a,
                  toBlockchain: o,
                  amount: s,
                }) => {
                  (this.gtmService.needTrackFormEventsNow = !1),
                    this.swapsFormService.inputControl.patchValue({
                      fromBlockchain: t,
                      toBlockchain: o,
                      ...(a && { fromToken: a }),
                      ...(n && { toToken: n }),
                      ...(s && {
                        fromAmount: {
                          actualValue: new E.A(s),
                          visibleValue: s,
                        },
                      }),
                    }),
                    this._initialLoading$.next(!1);
                }
              );
          }
          getProtectedSwapParams(t) {
            let n;
            n =
              r.BlockchainsInfo.isBlockchainName(t.fromChain) ||
              "fiat" === t.fromChain
                ? t.fromChain
                : this.walletConnectorService.network
                ? this.walletConnectorService.network
                : De.swap.fromChain;
            const a = r.BlockchainsInfo.isBlockchainName(t?.toChain)
                ? t.toChain
                : De.swap.toChain,
              o = { ...t, fromChain: n, toChain: a };
            return (
              n === a &&
                o.from &&
                o.from === o.to &&
                (o.from === De.swap.from[n]
                  ? (o.from = De.swap.to[n])
                  : (o.to = De.swap.from[n])),
              o
            );
          }
          getTokenBySymbolOrAddress(t, n, a) {
            if (!n) return (0, y.of)(null);
            const o = r.BlockchainsInfo.getChainType(a);
            return (0, Ae.H)(r.Web3Pure[o].isAddressCorrect(n)).pipe(
              (0, A.n)((s) => {
                if (o && s) {
                  const l =
                    o === r.CHAIN_TYPE.EVM
                      ? r.EvmWeb3Pure.toChecksumAddress(n)
                      : n;
                  return this.searchTokenByAddress(t, l, a);
                }
                return this.searchTokenBySymbol(t, n, a);
              }),
              (0, re.W)(() => this.searchTokenBySymbol(t, n, a)),
              (0, A.n)((s) =>
                (0, ce.p)([
                  (0, y.of)(s),
                  (0, Ae.H)(
                    this.tokensService.getAndUpdateTokenBalance(s)
                  ).pipe((0, re.W)(() => (0, y.of)(new E.A(NaN)))),
                ])
              ),
              (0, k.T)(([s, l]) => ({ ...s, amount: l }))
            );
          }
          searchTokenBySymbol(t, n, a) {
            const o = t.filter(
              (s) =>
                s.symbol.toLowerCase() === n.toLowerCase() && s.blockchain === a
            );
            return o.size
              ? (0, y.of)(o.first())
              : this.tokensService.fetchQueryTokens(n, a).pipe(
                  (0, k.T)((s) => {
                    if (s?.size) {
                      const l =
                        s?.size > 1
                          ? s.find(
                              (d) => d.symbol.toLowerCase() === n.toLowerCase()
                            )
                          : s.first();
                      if (!l) return null;
                      const u = { ...l, amount: new E.A(NaN) };
                      return this.tokensStoreService.addToken(u), u;
                    }
                    return null;
                  })
                );
          }
          searchTokenByAddress(t, n, a) {
            const o = t.find(
              (s) => (0, x.Qb)(s.address, n) && s.blockchain === a
            );
            return o
              ? (0, y.of)(o)
              : this.tokensService.fetchQueryTokens(n, a).pipe(
                  (0, x.n)(
                    (s) => !!s?.size,
                    (s) => (0, y.of)(s.first()),
                    () =>
                      this.tokensStoreService
                        .addTokenByAddress(n, a)
                        .pipe((0, R.$)())
                  ),
                  (0, k.T)((s) => {
                    const l = { ...s, amount: new E.A(NaN) };
                    return this.tokensStoreService.addToken(l), l;
                  })
                );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(Ce.w),
              e.KVO(M.K),
              e.KVO(_e.m),
              e.KVO(Z.p),
              e.KVO(Ue.A),
              e.KVO(U.c)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var xe = p(599030),
        Ut = p(757316);
      let Xt = (() => {
        class i {
          constructor(t, n, a, o) {
            (this.swapsFormService = t),
              (this.tokensService = n),
              (this.tokensStoreService = a),
              (this.walletConnector = o),
              this.subscribeOnForm(),
              this.subscribeOnTokens(),
              this.subscribeOnUserChange();
          }
          subscribeOnForm() {
            this.swapsFormService.inputValue$
              .pipe((0, F.Z)(null), (0, Te.J)())
              .subscribe(([t, n]) => {
                ((!(0, Ut.p)(t?.fromToken, n.fromToken) &&
                  (0, xe.Tl)(n.fromToken)) ||
                  (!(0, x._f)(t?.toToken, n.toToken) && n.toToken)) &&
                  this.updateTokensPrices(n),
                  !(0, Ut.p)(t?.fromToken, n.fromToken) &&
                    (0, xe.Tl)(n.fromToken) &&
                    this.updateTokenBalance(n.fromToken);
              });
          }
          updateTokensPrices(t) {
            this.intervalId && clearInterval(this.intervalId);
            const n = () => {
              (0, xe.Tl)(t.fromToken) &&
                this.tokensService.getAndUpdateTokenPrice(t.fromToken),
                t.toToken &&
                  this.tokensService.getAndUpdateTokenPrice(t.toToken, !0);
            };
            n(), (this.intervalId = setInterval(n, 15e3));
          }
          updateTokenBalance(t) {
            t?.amount &&
              !t.amount.isFinite() &&
              this.tokensService.getAndUpdateTokenBalance(t);
          }
          subscribeOnTokens() {
            this.tokensStoreService.tokens$
              .pipe((0, ee.B)(50), (0, te.p)(Boolean))
              .subscribe((t) => {
                const n = this.swapsFormService.inputValue,
                  a =
                    (0, xe.Tl)(n.fromToken) &&
                    t.find((s) => (0, x._f)(s, n.fromToken)),
                  o = n.toToken && t.find((s) => (0, x._f)(s, n.toToken));
                this.swapsFormService.inputControl.patchValue(
                  { ...(a && { fromAsset: a }), ...(o && { toToken: o }) },
                  { emitEvent: !1 }
                );
              });
          }
          subscribeOnUserChange() {
            this.walletConnector.addressChange$
              .pipe(
                (0, A.n)(() => {
                  const { fromToken: t, toToken: n } =
                    this.swapsFormService.inputValue;
                  return t || n
                    ? (0, ce.p)([
                        ...(t
                          ? [this.tokensService.getAndUpdateTokenBalance(t)]
                          : []),
                        ...(n
                          ? [this.tokensService.getAndUpdateTokenBalance(n)]
                          : []),
                      ])
                    : (0, y.of)(null);
                })
              )
              .subscribe();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(M.K),
              e.KVO(_e.m),
              e.KVO(Z.p),
              e.KVO(U.c)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var D = p(254843),
        pi = p(597647),
        ie = p(802248),
        ae = p(925127),
        ge = p(552608);
      let vt = (() => {
        class i {
          constructor(t, n, a, o, s, l, u) {
            (this.tradeState = t),
              (this.walletConnector = n),
              (this.tradePageService = a),
              (this.modalService = o),
              (this.injector = s),
              (this.targetNetworkAddressService = l),
              (this.formsTogglerService = u),
              (this.buttonState$ = this.tradeState.tradeState$
                .pipe(
                  (0, G.v)([
                    this.tradeState.wrongBlockchain$,
                    this.tradeState.notEnoughBalance$,
                    this.walletConnector.addressChange$,
                    this.targetNetworkAddressService.isAddressValid$,
                    this.targetNetworkAddressService.isAddressRequired$,
                    this.targetNetworkAddressService.address$,
                    this.formsTogglerService.selectedForm$,
                  ])
                )
                .pipe(
                  (0, ee.B)(10),
                  (0, F.Z)(this.getDefaultParams()),
                  (0, pi.u)(),
                  (0, k.T)((d) => this.getState(...d))
                ));
          }
          swap() {
            this.tradePageService.setState("preview");
          }
          swapCn() {
            this.tradePageService.setState("cnPreview");
          }
          connectWallet() {
            this.modalService.openWalletModal(this.injector).subscribe();
          }
          getState(t, n, a, o, s, l, u) {
            if (!t)
              return { type: "error", text: "Select tokens", action: () => {} };
            if (t.error)
              return { type: "error", text: t.error.message, action: () => {} };
            if (!o)
              return {
                type: "action",
                text: "Connect wallet",
                action: this.connectWallet.bind(this),
              };
            if (a)
              return {
                type: "error",
                text: "Insufficient balance",
                action: () => {},
              };
            const d =
              t.trade instanceof r.ChangenowCrossChainTrade &&
              !r.BlockchainsInfo.isEvmBlockchainName(t.trade.from.blockchain);
            return t.status === ne.READY_TO_SWAP ||
              t.status === ne.READY_TO_APPROVE ||
              (t.trade && n)
              ? l
                ? s && u
                  ? d
                    ? {
                        type: "action",
                        text: "Preview swap",
                        action: this.swapCn.bind(this),
                      }
                    : {
                        type: "action",
                        text: "Preview swap",
                        action: this.swap.bind(this),
                      }
                  : {
                      type: "error",
                      text: "Enter receiver address",
                      action: () => {},
                    }
                : s
                ? {
                    type: "action",
                    text: "Preview swap",
                    action: this.swap.bind(this),
                  }
                : {
                    type: "error",
                    text: "Enter correct receiver address",
                    action: () => {},
                  }
              : t.status === ne.LOADING
              ? { type: "error", text: "Calculating", action: () => {} }
              : t.status === ne.NOT_INITIATED
              ? { type: "error", text: "Select tokens", action: () => {} }
              : {
                  type: "error",
                  text: "Trade is not available",
                  action: () => {},
                };
          }
          getDefaultParams() {
            return [null, !1, !1, "", !0, !1, ""];
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(he),
              e.KVO(U.c),
              e.KVO(se.p),
              e.KVO(ie.B),
              e.KVO(e.zZn),
              e.KVO(ae.P),
              e.KVO(ge.D)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var ui = p(187919),
        ft = p(40605),
        _i = p(62087),
        bt = p(677048),
        Wt = p(768247),
        zt = p(663055),
        Ct = p(421413),
        Zt = p(470274),
        Xe = p(606697),
        Oe = p(445208),
        Qt = p(667337),
        We = p(535335),
        le = p(305206),
        ze = p(691410),
        Ze = p(673864),
        Jt = p(496623);
      class ve {
        static getCrossChainSwapParams(c) {
          return {
            fromAddress: c.from.address,
            fromSymbol: c.from.symbol,
            fromAmount: c.from.tokenAmount,
            fromPrice: c.from.price.toNumber(),
            fromDecimals: c.from.decimals,
            toAddress: c.to.address,
            toSymbol: c.to.symbol,
            toAmount: c.to.tokenAmount,
            toPrice: c.to.price.toNumber(),
            toDecimals: c.to.decimals,
            fromBlockchain: c.from.blockchain,
            toBlockchain: c.to.blockchain,
            type: c.type,
          };
        }
        static getItSwapParams(c) {
          return {
            fromAddress: c.from.address,
            fromSymbol: c.from.symbol.replaceAll("RBC", "CRAI"),
            fromAmount: c.from.tokenAmount,
            fromPrice: c.from.price.toNumber(),
            fromDecimals: c.from.decimals,
            toAddress: c.to.address,
            toSymbol: c.to.symbol.replaceAll("RBC", "CRAI"),
            toAmount: c.to.tokenAmount,
            toPrice: c.to.price.toNumber(),
            toDecimals: c.to.decimals,
            blockchain: c.from.blockchain,
            type: c.type,
          };
        }
      }
      const Qe = {
        [r.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS]: "symbiosis",
        [r.CROSS_CHAIN_TRADE_TYPE.LIFI]: "lifi",
        [r.CROSS_CHAIN_TRADE_TYPE.BRIDGERS]: "bridgers",
        [r.CROSS_CHAIN_TRADE_TYPE.DEBRIDGE]: "dln",
        [r.CROSS_CHAIN_TRADE_TYPE.MULTICHAIN]: "multichain",
        [r.CROSS_CHAIN_TRADE_TYPE.XY]: "xy",
        [r.CROSS_CHAIN_TRADE_TYPE.CELER_BRIDGE]: "celer_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.CHANGENOW]: "changenow",
        [r.CROSS_CHAIN_TRADE_TYPE.STARGATE]: "stargate",
        [r.CROSS_CHAIN_TRADE_TYPE.ARBITRUM]: "rbc_arbitrum_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.SQUIDROUTER]: "squidrouter",
        [r.CROSS_CHAIN_TRADE_TYPE.SCROLL_BRIDGE]: "scroll_sepolia",
        [r.CROSS_CHAIN_TRADE_TYPE.TAIKO_BRIDGE]: "taiko_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.RANGO]: "rango",
        [r.CROSS_CHAIN_TRADE_TYPE.PULSE_CHAIN_BRIDGE]: "pulsechain_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.ORBITER_BRIDGE]: "orbiter_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.LAYERZERO]: "layerzero",
        [r.CROSS_CHAIN_TRADE_TYPE.ARCHON_BRIDGE]: "archon_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.MESON]: "meson",
        [r.CROSS_CHAIN_TRADE_TYPE.OWL_TO_BRIDGE]: "owl_to_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.EDDY_BRIDGE]: "eddy_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.STARGATE_V2]: "stargate_v2",
        [r.CROSS_CHAIN_TRADE_TYPE.ROUTER]: "router",
        [r.CROSS_CHAIN_TRADE_TYPE.RETRO_BRIDGE]: "retro_bridge",
        [r.CROSS_CHAIN_TRADE_TYPE.ACROSS]: "across",
        [r.CROSS_CHAIN_TRADE_TYPE.UNIZEN]: "unizen",
        [r.CROSS_CHAIN_TRADE_TYPE.SIMPLE_SWAP]: "simple_swap",
      };
      var Q = p(539999),
        me = p(944188),
        Je = p(670323);
      let qe = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d) {
            (this.httpService = t),
              (this.authService = n),
              (this.walletConnectorService = a),
              (this.sessionStorage = o),
              (this.settingsService = s),
              (this.targetNetworkAddressService = l),
              (this.isMobile = u),
              (this.window = d),
              (this.apiEndpoint = "v2/trades/crosschain/new_extended");
          }
          saveNotWhitelistedProvider(t, n, a) {
            return this.httpService.post("info/new_provider", {
              network: r.TO_BACKEND_BLOCKCHAINS[n],
              title: Qe[a],
              address:
                t.providerRouter +
                (t.providerGateway ? `_${t.providerGateway}` : ""),
              cause: "cross-chain",
            });
          }
          saveProvidersStatistics(t) {
            return this.httpService.post(
              "route_calculation_statistic/save",
              t,
              null,
              {
                headers: {
                  Signature: (0, Jt.d)(
                    t.to_token.toLowerCase(),
                    t.from_token.toLowerCase()
                  ),
                },
              }
            );
          }
          saveNotWhitelistedCcrProvider(t, n, a) {
            return this.httpService.post("info/new_provider", {
              network: r.TO_BACKEND_BLOCKCHAINS[n],
              title: Qe[a],
              address: t.contract,
              cause: "cross-chain",
              selector: t.method,
            });
          }
          createTrade(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              const {
                  fromBlockchain: s,
                  toBlockchain: l,
                  fromAmount: u,
                  fromAddress: d,
                  fromDecimals: m,
                  toAmount: v,
                  toDecimals: g,
                  toAddress: f,
                } = ve.getCrossChainSwapParams(n),
                T = o.sessionStorage.getItem("referral"),
                b = n.getTradeInfo().slippage,
                w = {
                  price_impact: n.getTradeInfo().priceImpact,
                  slippage: b,
                  wallet_name: o.walletConnectorService.provider.walletName,
                  device_type: o.isMobile ? "mobile" : "desktop",
                  expected_amount: r.Web3Pure.toWei(v, g),
                  mevbot_protection:
                    o.settingsService.crossChainRoutingValue
                      .useMevBotProtection,
                  to_amount_min: r.Web3Pure.toWei(n.toTokenAmountMin, g),
                  from_network: r.TO_BACKEND_BLOCKCHAINS[s],
                  to_network: r.TO_BACKEND_BLOCKCHAINS[l],
                  provider: Qe[n.type],
                  from_token: d,
                  to_token: f,
                  from_amount: r.Web3Pure.toWei(u, m),
                  to_amount: r.Web3Pure.toWei(v, g),
                  user: o.authService.userAddress,
                  tx_hash: t,
                  receiver:
                    o.targetNetworkAddressService.address ||
                    o.authService.userAddress,
                  domain:
                    o.window.location !== o.window.parent.location
                      ? o.window.document.referrer
                      : o.window.document.location.href,
                  ...(a && { pretrade_id: a }),
                  ...(n instanceof r.ChangenowCrossChainTrade && {
                    changenow_id: n.changenowId,
                  }),
                  ...("rangoRequestId" in n && {
                    rango_request_id: n.rangoRequestId,
                  }),
                  ...("squidrouterRequestId" in n && {
                    squidrouter_request_id: n.squidrouterRequestId,
                  }),
                  ...("retroBridgeId" in n && {
                    retrobridge_transaction_id: n.retroBridgeId,
                  }),
                  ...(T && { influencer: T }),
                };
              yield (0,
              D._)(o.httpService.post(o.apiEndpoint, w).pipe((0, We.c)(1e3)));
            })();
          }
          patchTrade(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              try {
                const o = {
                  success: n,
                  hash: t,
                  user: a.authService.userAddress,
                };
                return yield (0, D._)(a.httpService.patch(a.apiEndpoint, o));
              } catch (o) {
                throw new Q.A(o);
              }
            })();
          }
          sendMesonSwapId(t, n) {
            this.httpService
              .post("v2/trades/crosschain/new_via_meson_trade", {
                source_tx_hash: n,
                swap_id: t.extraInfo?.mesonSwapId,
              })
              .subscribe();
          }
          sendPreTradeInfo(t) {
            var n = this;
            return (0, C.A)(function* () {
              const {
                  fromBlockchain: a,
                  toBlockchain: o,
                  fromAmount: s,
                  fromAddress: l,
                  fromDecimals: u,
                  toAmount: d,
                  toDecimals: m,
                  toAddress: v,
                } = ve.getCrossChainSwapParams(t),
                g = n.sessionStorage.getItem("referral"),
                f = t.getTradeInfo().slippage,
                T = {
                  price_impact: t.getTradeInfo().priceImpact,
                  slippage: f,
                  wallet_name: n.walletConnectorService.provider.walletName,
                  device_type: n.isMobile ? "mobile" : "desktop",
                  expected_amount: r.Web3Pure.toWei(d, m),
                  mevbot_protection:
                    n.settingsService.crossChainRoutingValue
                      .useMevBotProtection,
                  to_amount_min: r.Web3Pure.toWei(t.toTokenAmountMin, m),
                  from_network: r.TO_BACKEND_BLOCKCHAINS[a],
                  to_network: r.TO_BACKEND_BLOCKCHAINS[o],
                  provider: Qe[t.type],
                  from_token: l,
                  to_token: v,
                  from_amount: r.Web3Pure.toWei(s, u),
                  to_amount: r.Web3Pure.toWei(d, m),
                  user: n.authService.userAddress,
                  receiver:
                    n.targetNetworkAddressService.address ||
                    n.authService.userAddress,
                  domain:
                    n.window.location !== n.window.parent.location
                      ? n.window.document.referrer
                      : n.window.document.location.href,
                  ...(g && { influencer: g }),
                };
              return (0, D._)(
                n.httpService.post("v2/trades/crosschain/pretrade_new", T).pipe(
                  (0, We.c)(1e3),
                  (0, k.T)((b) => b.pretrade_id)
                )
              );
            })();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(Qt.k),
              e.KVO(le.u),
              e.KVO(U.c),
              e.KVO(Je.R),
              e.KVO(me.h),
              e.KVO(ae.P),
              e.KVO(ze.Td),
              e.KVO(Ze.jf)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var et = p(240800),
        qt = p(513711),
        J = p(873955);
      let mi = (() => {
        class i {
          constructor(t) {
            this.context = t;
          }
          onConfirm() {
            this.context.completeWith(null);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(et.su));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["polymorpheus-auto-slippage-warning-modal"]],
            decls: 11,
            vars: 6,
            consts: [
              [1, "modal"],
              [1, "modal__content"],
              [1, "modal__body"],
              [
                "src",
                "assets/images/bridge/warning-image.svg",
                "alt",
                "Success",
                1,
                "modal__warning-image",
              ],
              [1, "modal__footer"],
              [1, "modal__footer-text"],
              ["fullWidth", "", "appearance", "secondary", 3, "click"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0)(1, "div", 1)(2, "main", 2),
                e.nrm(3, "img", 3),
                e.k0s(),
                e.j41(4, "div", 4)(5, "div", 5),
                e.EFF(6),
                e.nI1(7, "translate"),
                e.k0s(),
                e.j41(8, "app-rubic-button", 6),
                e.bIt("click", function () {
                  return a.onConfirm();
                }),
                e.EFF(9),
                e.nI1(10, "translate"),
                e.k0s()()()()),
                2 & n &&
                  (e.R7$(6),
                  e.SpI(
                    " ",
                    e.bMT(7, 2, "modals.warningModal.autoSlippage"),
                    " "
                  ),
                  e.R7$(3),
                  e.SpI(" ", e.bMT(10, 4, "common.OK"), " "));
            },
            dependencies: [qt.l, J.D9],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.modal__content[_ngcontent-%COMP%]{padding:35px 20px 0;text-align:center}.modal__footer[_ngcontent-%COMP%]{margin-top:20px}.modal__footer-text[_ngcontent-%COMP%]{margin-bottom:18px}.modal__footer-link[_ngcontent-%COMP%]{display:inline-block;margin-bottom:18px;font-size:17px;cursor:pointer}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var kt = p(448861);
      class St extends kt.e {
        constructor(c) {
          super(`${c} blockchain is currently unavailable.`),
            Object.setPrototypeOf(this, St.prototype);
        }
      }
      const Ge = St;
      var He = p(776006),
        en = p(88368),
        Tt = p(56600);
      const tt = [r.BLOCKCHAIN_NAME.XLAYER, r.BLOCKCHAIN_NAME.ROOTSTOCK],
        Ve = {
          default: "0xE20c7F79DAEaBEB7a9D8cEffB73c4f857Be7fC27",
          zeroFee: "0x51c276f1392E87D4De6203BdD80c83f5F62724d4",
          onePercent: "0xC095e57dDfa5924BC56bEAcf1D515F154ac44e94",
          twoPercent: "0xE20c7F79DAEaBEB7a9D8cEffB73c4f857Be7fC27",
        },
        hi = {
          native_eth_stable: "nativeStableSwap",
          native_eth_token: "tokenSwap",
          native_eth_wNative: "tokenSwap",
          stable_native_eth: "nativeStableSwap",
          token_native_eth: "tokenSwap",
          wNative_native_eth: "tokenSwap",
          wNative_wNative: "tokenSwap",
          wNative_stable: "stableWnativeSwap",
          wNative_token: "tokenSwap",
          wNative_native: "tokenSwap",
          native_stable: "nativeStableSwap",
          native_token: "tokenSwap",
          native_wNative: "tokenSwap",
          stable_native: "nativeStableSwap",
          stable_wNative: "stableWnativeSwap",
          stable_stable: "stableSwap",
          stable_token: "stableTokenSwap",
          token_native: "tokenSwap",
          token_wNative: "tokenSwap",
          token_stable: "stableTokenSwap",
          token_token: "tokenSwap",
          bridged_native_token: "tokenSwap",
          bridged_native_wNative: "tokenSwap",
          wNative_bridged_native: "tokenSwap",
          token_bridged_native: "tokenSwap",
          bridged_native_native: "tokenSwap",
          bridged_native_native_eth: "tokenSwap",
          bridged_native_stable: "stableTokenSwap",
          native_bridged_native: "tokenSwap",
          native_eth_bridged_native: "tokenSwap",
          stable_bridged_native: "stableTokenSwap",
        },
        gi = {
          nativeStableSwap_1: "zeroFee",
          nativeStableSwap_2: [{ limit: 100, type: "twoPercent" }],
          stableSwap_1: "zeroFee",
          stableSwap_2: "zeroFee",
          stableTokenSwap_1: [{ limit: 100, type: "onePercent" }],
          stableTokenSwap_2: [{ limit: 100, type: "onePercent" }],
          stableWnativeSwap_1: [{ limit: 100, type: "onePercent" }],
          stableWnativeSwap_2: [{ limit: 100, type: "onePercent" }],
          tokenSwap_1: [{ limit: 100, type: "twoPercent" }],
          tokenSwap_2: [{ limit: 100, type: "twoPercent" }],
        },
        vi = {
          native_eth_native: "tokenSwap",
          native_eth_native_eth: "sameNativeSwap",
          native_eth_stable: "nativeStableSwap",
          native_eth_token: "tokenSwap",
          native_eth_wNative: "tokenSwap",
          native_native: "tokenSwap",
          native_native_eth: "tokenSwap",
          native_stable: "nativeStableSwap",
          native_token: "tokenSwap",
          native_wNative: "tokenSwap",
          stable_native: "nativeStableSwap",
          stable_native_eth: "nativeStableSwap",
          stable_stable: "stableSwap",
          stable_token: "stableTokenSwap",
          stable_wNative: "stableWnativeSwap",
          token_native: "tokenSwap",
          token_native_eth: "tokenSwap",
          token_stable: "stableTokenSwap",
          token_token: "tokenSwap",
          token_wNative: "tokenSwap",
          wNative_native: "tokenSwap",
          wNative_native_eth: "tokenSwap",
          wNative_stable: "stableWnativeSwap",
          wNative_token: "tokenSwap",
          wNative_wNative: "tokenSwap",
          bridged_native_bridged_native: "sameTokenSwap",
          bridged_native_native: "bridgedNative_NativeSwap",
          bridged_native_native_eth: "bridgedNative_TokenSwap",
          bridged_native_stable: "bridgedNative_StableSwap",
          bridged_native_token: "tokenSwap",
          bridged_native_wNative: "tokenSwap",
          native_bridged_native: "bridgedNative_NativeSwap",
          native_eth_bridged_native: "bridgedNative_TokenSwap",
          stable_bridged_native: "bridgedNative_StableSwap",
          wNative_bridged_native: "tokenSwap",
          token_bridged_native: "tokenSwap",
        },
        fi = {
          bridgedNative_NativeSwap_1_1: [
            { limit: 100, type: "onePercent" },
            { limit: 5e3, type: "twoPercent" },
          ],
          bridgedNative_NativeSwap_1_2: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          bridgedNative_NativeSwap_2_1: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          bridgedNative_NativeSwap_2_2: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          bridgedNative_StableSwap_1_1: [{ limit: 100, type: "twoPercent" }],
          bridgedNative_StableSwap_1_2: [{ limit: 100, type: "twoPercent" }],
          bridgedNative_StableSwap_2_1: [{ limit: 100, type: "twoPercent" }],
          bridgedNative_StableSwap_2_2: [{ limit: 100, type: "twoPercent" }],
          bridgedNative_TokenSwap_1_1: "twoPercent",
          bridgedNative_TokenSwap_1_2: "twoPercent",
          bridgedNative_TokenSwap_2_1: "twoPercent",
          bridgedNative_TokenSwap_2_2: "twoPercent",
          nativeStableSwap_1_1: [{ limit: 100, type: "onePercent" }],
          nativeStableSwap_1_2: [{ limit: 100, type: "twoPercent" }],
          nativeStableSwap_2_1: [{ limit: 100, type: "twoPercent" }],
          nativeStableSwap_2_2: [{ limit: 100, type: "twoPercent" }],
          sameNativeSwap_1_1: "zeroFee",
          sameNativeSwap_1_2: "twoPercent",
          sameNativeSwap_2_1: "twoPercent",
          sameNativeSwap_2_2: "twoPercent",
          sameTokenSwap_1_1: [{ limit: 100, type: "twoPercent" }],
          sameTokenSwap_1_2: "twoPercent",
          sameTokenSwap_2_1: "twoPercent",
          sameTokenSwap_2_2: "twoPercent",
          stableSwap_1_1: "zeroFee",
          stableSwap_1_2: "twoPercent",
          stableSwap_2_1: "twoPercent",
          stableSwap_2_2: "twoPercent",
          stableTokenSwap_1_1: [{ limit: 100, type: "twoPercent" }],
          stableTokenSwap_1_2: "twoPercent",
          stableTokenSwap_2_1: "twoPercent",
          stableTokenSwap_2_2: "twoPercent",
          stableWnativeSwap_1_1: [
            { limit: 100, type: "onePercent" },
            { limit: 5e3, type: "twoPercent" },
          ],
          stableWnativeSwap_1_2: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          stableWnativeSwap_2_1: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          stableWnativeSwap_2_2: [
            { limit: 100, type: "onePercent" },
            { limit: 1e4, type: "twoPercent" },
          ],
          tokenSwap_1_1: "twoPercent",
          tokenSwap_1_2: "twoPercent",
          tokenSwap_2_1: "twoPercent",
          tokenSwap_2_2: "twoPercent",
        },
        bi = {
          STABLE: "stable",
          WRAPPED_NATIVE: "wNative",
          NATIVE: "native",
          NATIVE_ETH: "native_eth",
          TOKEN: "token",
          BRIDGED_NATIVE: "bridged_native",
        };
      let tn = (() => {
        class i {
          constructor(t, n) {
            (this.configService = t), (this.tokensStore = n);
          }
          getIntegratorAddress(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              try {
                const s = t.price.multipliedBy(n);
                if (s.lte(0) || !s.isFinite())
                  return o.handlePromoIntegrator(t, a, Ve.default);
                if (s.lte(100))
                  return o.handlePromoIntegrator(t, a, Ve.zeroFee);
                const l = o.getTokenType(t);
                if (!l) throw new Error("Failed to fetch token from backend");
                const u = o.getTokenType(a);
                if (!u) throw new Error("Failed to fetch token from backend");
                const d = o.getFeeValue(t, l, a, u);
                if ("string" == typeof d)
                  return o.handlePromoIntegrator(t, a, Ve[d]);
                const v = d
                  .sort((g, f) => f.limit - g.limit)
                  .find((g) => s.gt(g.limit));
                if (!v) throw new Error("Limit not found");
                return o.handlePromoIntegrator(t, a, Ve[v.type]);
              } catch (s) {
                return console.error(s), Ve.default;
              }
            })();
          }
          getOnChainFee(t, n, a) {
            return gi[`${hi[`${t}_${n}`]}_${a}`];
          }
          getCrossChainFee(t, n, a, o, s, l) {
            let d = vi[`${t}_${n}`];
            return (
              "tokenSwap" === d && s === l && (d = "sameTokenSwap"),
              fi[`${d}_${a}_${o}`]
            );
          }
          getFeeValue(t, n, a, o) {
            const s = this.configService.availableBlockchains;
            if (t.blockchain !== a.blockchain) {
              const u = s.find((m) => m.blockchain === t.blockchain).tier,
                d = s.find((m) => m.blockchain === a.blockchain).tier;
              return this.getCrossChainFee(n, o, u, d, t.symbol, a.symbol);
            }
            {
              const u = s.find((d) => d.blockchain === t.blockchain).tier;
              return this.getOnChainFee(n, o, u);
            }
          }
          getTokenType(t) {
            const a = this.tokensStore.tokens.find(
              (o) => o.blockchain === t.blockchain && o.address === t.address
            ).type;
            return bi[a];
          }
          handlePromoIntegrator(t, n, a) {
            const o = new URLSearchParams(window.location.search),
              s = o.get("feeTarget") || o.get("providerAddress"),
              l = o.get("crossChainIntegratorAddress") || s,
              u = o.get("onChainIntegratorAddress") || s,
              d = t.blockchain === n.blockchain;
            return u && d ? u : l && !d ? l : a;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(Oe.p), e.KVO(Z.p));
          });
          static #t = (this.ɵprov = e.jDH({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          }));
        }
        return i;
      })();
      var nn = p(826444),
        Ci = p(866003);
      let an = (() => {
        class i {
          get receiverAddress() {
            return this.settingsService.crossChainRoutingValue
              .showReceiverAddress
              ? this.targetNetworkAddressService.address
              : null;
          }
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b, w, O, I) {
            (this.sdkService = t),
              (this.swapFormService = n),
              (this.settingsService = a),
              (this.targetNetworkAddressService = o),
              (this.platformConfigurationService = s),
              (this.queryParamsService = l),
              (this.sessionStorage = u),
              (this.tokensService = d),
              (this.crossChainApiService = m),
              (this.walletConnectorService = v),
              (this.dialogService = g),
              (this.injector = f),
              (this.authService = T),
              (this.gtmService = b),
              (this.gasService = w),
              (this.proxyService = O),
              (this.iframeService = I),
              (this.defaultTimeout = 15e3);
          }
          calculateTrades(t) {
            let n = [];
            const {
                fromToken: a,
                toToken: o,
                fromAmount: s,
                fromBlockchain: l,
                toBlockchain: u,
              } = this.swapFormService.inputValue,
              d = this.getDisabledProviders(t, l);
            return (0, ce.p)([
              this.sdkService.deflationTokenManager.isDeflationToken(
                new r.Token(a)
              ),
              this.tokensService.getAndUpdateTokenPrice(a, !0),
              this.tokensService.getAndUpdateTokenPrice(o, !0),
            ]).pipe(
              (0, A.n)(([m, v, g]) => {
                const f = new r.PriceToken({ ...a, price: v }),
                  T = new r.PriceToken({ ...o, price: g });
                return (0, ce.p)([
                  (0, y.of)(f),
                  (0, y.of)(T),
                  (0, y.of)(m),
                  this.getOptions(d, f, T, s.actualValue),
                ]);
              }),
              (0, A.n)(([m, v, g, f]) => {
                const T = Date.now();
                return this.sdkService.crossChain
                  .calculateTradesReactively(
                    m,
                    s.actualValue.toFixed(),
                    v,
                    g.isDeflation
                      ? { ...f, useProxy: this.getDisabledProxyConfig() }
                      : f
                  )
                  .pipe(
                    (0, k.T)((b) => ({
                      ...b,
                      calculationTime: Date.now() - T,
                    })),
                    (0, k.T)((b) => ({
                      value: b,
                      type: V.T.CROSS_CHAIN_ROUTING,
                    })),
                    (0, X.M)((b) => {
                      b?.value?.wrappedTrade?.error instanceof
                        r.NotWhitelistedProviderError &&
                        this.saveNotWhitelistedProvider(
                          b.value.wrappedTrade.error,
                          a.blockchain,
                          b.value.wrappedTrade.tradeType
                        );
                    }),
                    (0, X.M)((b) => {
                      const w = b?.value;
                      (n = 0 === w.calculated ? [] : [...n, w]),
                        w.calculated === w.total &&
                          0 !== w?.calculated &&
                          this.saveTrade(n, {
                            fromAmount: r.Web3Pure.toWei(
                              s.actualValue,
                              a.decimals
                            ),
                            fromBlockchain: l,
                            toBlockchain: u,
                            fromAddress: a.address,
                            toAddress: o.address,
                          });
                    })
                  );
              })
            );
          }
          getOptions(t, n, a, o) {
            var s = this;
            return (0, C.A)(function* () {
              const l =
                  s.settingsService.crossChainRoutingValue.slippageTolerance /
                  100,
                u = s.receiverAddress,
                { disabledCrossChainTradeTypes: d, disabledSubProviders: m } =
                  s.platformConfigurationService.disabledProviders,
                v = s.queryParamsService.disabledLifiBridges,
                g = s.queryParamsService.disabledRangoBridges,
                T = Array.from(
                  new Set([
                    ...t,
                    ...(d || []),
                    ...(s.queryParamsService.disabledCrossChainProviders || []),
                  ])
                ),
                b = s.authService.userAddress,
                w = s.calculateTimeoutForChains(),
                O = yield s.proxyService.getIntegratorAddress(n, o, a);
              return {
                fromSlippageTolerance: l / 2,
                toSlippageTolerance: l / 2,
                slippageTolerance: l,
                timeout: w,
                disabledProviders: T,
                lifiDisabledBridgeTypes: [
                  ...(m[r.CROSS_CHAIN_TRADE_TYPE.LIFI] || []),
                  ...(v || []),
                ],
                rangoDisabledProviders: [
                  ...(m[r.CROSS_CHAIN_TRADE_TYPE.RANGO] || []),
                  ...(g || []),
                ],
                ...(u && { receiverAddress: u }),
                changenowFullyEnabled: !0,
                gasCalculation: b ? "enabled" : "disabled",
                useProxy: {
                  ...s.platformConfigurationService.useCrossChainChainProxy,
                },
                providerAddress: O,
              };
            })();
          }
          getDisabledProxyConfig() {
            return Object.fromEntries(
              Object.values(r.CROSS_CHAIN_TRADE_TYPE).map((t) => [t, !1])
            );
          }
          saveNotWhitelistedProvider(t, n, a) {
            t instanceof r.NotWhitelistedProviderError
              ? this.crossChainApiService
                  .saveNotWhitelistedProvider(t, n, a)
                  .subscribe()
              : this.crossChainApiService
                  .saveNotWhitelistedCcrProvider(t, n, a)
                  .subscribe();
          }
          getChangenowPaymentInfo(t) {
            var n = this;
            return (0, C.A)(function* () {
              const a = n.receiverAddress;
              return {
                paymentInfo: yield t.getChangenowPostTrade(a),
                receiverAddress: a,
              };
            })();
          }
          swapTrade(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              if (!o.isSlippageCorrect(t)) return null;
              const s =
                o.settingsService.crossChainRoutingValue.useMevBotProtection;
              o.checkBlockchainsAvailable(t);
              const [l, u] = yield Promise.all([
                o.tokensService.findToken(t.from),
                o.tokensService.findToken(t.to),
              ]);
              yield o.handlePreSwapModal(t);
              const d = yield o.sendPreTradeInfo(t);
              let m;
              const g = t.from.blockchain,
                { shouldCalculateGasPrice: f, gasPriceOptions: T } =
                  yield o.gasService.getGasInfo(g),
                b = o.sessionStorage.getItem("referral"),
                w = o.receiverAddress,
                O = {
                  onConfirm: (I) => {
                    (m = I),
                      n?.(I),
                      o.crossChainApiService.createTrade(I, t, d),
                      o.notifyGtmAfterSignTx(I, l, u, t.from.tokenAmount, s);
                  },
                  ...(w && { receiverAddress: w }),
                  ...(f && { gasPriceOptions: T }),
                  ...(o.queryParamsService.testMode && { testMode: !0 }),
                  ...(b && { referrer: b }),
                  useCacheData: a || !1,
                };
              try {
                return (
                  yield t.swap(O),
                  yield o.conditionalAwait(l.blockchain),
                  yield o.tokensService.updateTokenBalanceAfterCcrSwap(l, u),
                  m
                );
              } catch (I) {
                m &&
                  I instanceof Error &&
                  I.message.includes("Transaction was not mined") &&
                  (yield o.crossChainApiService.patchTrade(m, !1)),
                  (I instanceof r.NotWhitelistedProviderError ||
                    I instanceof r.UnapprovedContractError ||
                    I instanceof r.UnapprovedMethodError) &&
                    o.saveNotWhitelistedProvider(I, t.from.blockchain, t.type);
                const ue = Tt.T.parseError(I);
                throw (
                  (ue instanceof r.UserRejectError ||
                    o.gtmService.fireSwapError(
                      t,
                      o.authService.userAddress,
                      ue
                    ),
                  ue)
                );
              }
            })();
          }
          approveTrade(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              a.checkBlockchainsAvailable(t);
              const o = t.from.blockchain,
                { shouldCalculateGasPrice: s, gasPriceOptions: l } =
                  yield a.gasService.getGasInfo(o);
              let u = {};
              try {
                t instanceof r.EvmCrossChainTrade &&
                  (u = { ...u, ...(s && { gasPriceOptions: l }) });
                const { fromAmount: d, fromDecimals: m } =
                    ve.getCrossChainSwapParams(t),
                  v = new E.A(r.Web3Pure.toWei(d, m));
                yield t.approve(u, !0, v);
              } catch (d) {
                if (d instanceof r.UnnecessaryApproveError) return;
                throw d;
              }
            })();
          }
          saveTrade(t, n) {
            this.crossChainApiService
              .saveProvidersStatistics({
                user: this.walletConnectorService.address,
                from_token: n.fromAddress,
                from_network: r.TO_BACKEND_BLOCKCHAINS?.[n.fromBlockchain],
                from_amount: n.fromAmount,
                to_token: n.toAddress,
                to_network: r.TO_BACKEND_BLOCKCHAINS?.[n.toBlockchain],
                providers_statistics: t.map((a) => {
                  const { calculationTime: o, wrappedTrade: s } = a;
                  return {
                    provider_title: s?.tradeType,
                    calculation_time_in_seconds: String(o / 1e3),
                    to_amount: s?.trade?.to.stringWeiAmount,
                    status: s?.trade ? "success" : "error",
                    has_swap_in_source_network:
                      s?.trade && "onChainTrade" in s.trade,
                    proxy_used:
                      s?.trade?.feeInfo?.rubicProxy?.fixedFee?.amount?.gt(0),
                    ...(s?.error && { additional_info: s.error.message }),
                  };
                }),
              })
              .subscribe();
          }
          isSlippageCorrect(t) {
            return !(
              !this.settingsService.crossChainRoutingValue
                .autoSlippageTolerance &&
              ![r.CROSS_CHAIN_TRADE_TYPE.BRIDGERS].every((n) => n !== t.type) &&
              (this.dialogService
                .showDialog(mi, { size: "s", fitContent: !0 }, this.injector)
                .subscribe(),
              1)
            );
          }
          checkBlockchainsAvailable(t) {
            const n = t.from.blockchain,
              a = t.to.blockchain;
            if (!this.platformConfigurationService.isAvailableBlockchain(n))
              throw new Ge(He.Z[n]);
            if (!this.platformConfigurationService.isAvailableBlockchain(a))
              throw new Ge(He.Z[a]);
          }
          handlePreSwapModal(t) {
            var n = this;
            return (0, C.A)(function* () {
              if (
                t.type === r.CROSS_CHAIN_TRADE_TYPE.ARBITRUM &&
                t.from.blockchain === r.BLOCKCHAIN_NAME.ARBITRUM
              )
                try {
                  yield (0, D._)(n.dialogService.openArbitrumWarningModal());
                } catch {
                  throw new r.UserRejectError();
                }
            })();
          }
          notifyGtmAfterSignTx(t, n, a, o, s) {
            const l = new E.A(2);
            this.gtmService.fireTxSignedEvent(
              V.T.CROSS_CHAIN_ROUTING,
              t,
              n.symbol,
              a.symbol,
              l,
              o.multipliedBy(n.price),
              "crosschain",
              o.multipliedBy(n.price).gt(1e3) ? s : null
            );
          }
          conditionalAwait(t) {
            return (0, C.A)(function* () {
              t === r.BLOCKCHAIN_NAME.SOLANA &&
                (yield (0, D._)((0, Se.O)(3e3)));
            })();
          }
          calculateTimeoutForChains() {
            const { fromBlockchain: t, toBlockchain: n } =
              this.swapFormService.inputValue;
            return tt.includes(t) || tt.includes(n) ? 3e4 : this.defaultTimeout;
          }
          getDisabledProviders(t, n) {
            return Object.values(nn.h).includes(n) &&
              this.iframeService.isIframe
              ? [...t, r.CROSS_CHAIN_TRADE_TYPE.CHANGENOW]
              : t;
          }
          sendPreTradeInfo(t) {
            var n = this;
            return (0, C.A)(function* () {
              try {
                return yield n.crossChainApiService.sendPreTradeInfo(t);
              } catch {
                return null;
              }
            })();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(Xe.K),
              e.KVO(M.K),
              e.KVO(me.h),
              e.KVO(ae.P),
              e.KVO(Oe.p),
              e.KVO(Ce.w),
              e.KVO(Je.R),
              e.KVO(_e.m),
              e.KVO(qe),
              e.KVO(U.c),
              e.KVO(ie.B),
              e.KVO(e.duS),
              e.KVO(le.u),
              e.KVO(Ue.A),
              e.KVO(en.R),
              e.KVO(tn),
              e.KVO(Ci.s)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var je = p(297681),
        _ = p(360177),
        nt = p(384281),
        it = p(93197);
      function ki(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "a", 1),
            e.nI1(1, "scannerLink"),
            e.EFF(2, "See details."),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG();
          e.Y8G(
            "safetyLink",
            e.brH(1, 1, t.txHash, t.blockchainName, t.ADDRESS_TYPE.TRANSACTION)
          );
        }
      }
      let Si = (() => {
        class i {
          constructor(t) {
            (this.context = t),
              (this.ADDRESS_TYPE = je.A),
              (this.blockchainName = t.data.blockchainName),
              (this.txHash = t.data.txHash);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(et.su));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-transaction-failed-error"]],
            decls: 4,
            vars: 1,
            consts: [
              [3, "safetyLink", 4, "ngIf"],
              [3, "safetyLink"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.qex(0),
                e.j41(1, "span"),
                e.EFF(2, "Transaction failed. "),
                e.DNE(3, ki, 3, 5, "a", 0),
                e.k0s(),
                e.bVm()),
                2 & n && (e.R7$(3), e.Y8G("ngIf", a.txHash));
            },
            dependencies: [_.bT, nt.A, it.n],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      class yt extends Q.A {
        constructor(c, t) {
          super(Si, { txHash: t, blockchainName: c }),
            Object.setPrototypeOf(this, yt.prototype);
        }
      }
      var on = p(276422);
      let At = (() => {
        class i {
          constructor(t, n, a, o, s, l, u) {
            (this.httpService = t),
              (this.walletConnectorService = n),
              (this.authService = a),
              (this.sessionStorage = o),
              (this.settingsService = s),
              (this.targetNetworkAddressService = l),
              (this.isMobile = u);
          }
          notifyInstantTradesBot(t) {
            const {
                fromAmount: n,
                toAmount: a,
                fromSymbol: o,
                toSymbol: s,
                fromPrice: l,
                blockchain: u,
                type: d,
              } = ve.getItSwapParams(t.trade),
              { txHash: m, walletAddress: v } = t,
              g = {
                fromAmount: n.toNumber(),
                toAmount: a.toNumber(),
                fromSymbol: o,
                toSymbol: s,
                price: l,
                txHash: m,
                walletAddress: v,
                blockchain: u,
                provider: d,
              };
            return this.httpService.post("bot/instant_trade", g).toPromise();
          }
          createTrade(t, n, a, o) {
            const {
                blockchain: s,
                fromAmount: l,
                fromAddress: u,
                fromDecimals: d,
                toAmount: m,
                toDecimals: v,
                toAddress: g,
              } = ve.getItSwapParams(a),
              f = this.sessionStorage.getItem("referral"),
              T = this.sessionStorage.getItem("swapId"),
              b = {
                blockchain: s,
                fromAddress: u,
                fromAmount: r.Web3Pure.toWei(l, d),
                toAddress: g,
                toAmount: r.Web3Pure.toWei(m, v),
              },
              w = on.I[n],
              O = {
                price_impact: a.getTradeInfo().priceImpact,
                walletName: this.walletConnectorService.provider.walletName,
                deviceType: this.isMobile ? "mobile" : "desktop",
                slippage: a.slippageTolerance,
                expected_amount: b.toAmount,
                mevbot_protection:
                  this.settingsService.instantTradeValue.useMevBotProtection,
                to_amount_min: a.toTokenAmountMin.stringWeiAmount,
                network: r.TO_BACKEND_BLOCKCHAINS[b.blockchain],
                provider: w,
                from_token: b.fromAddress,
                to_token: b.toAddress,
                from_amount: b.fromAmount,
                to_amount: b.toAmount,
                user: this.authService.userAddress,
                receiver:
                  this.targetNetworkAddressService.address ||
                  this.authService.userAddress,
                hash: t,
                ...(o && { pretrade_id: o }),
                ...(f && { influencer: f }),
                ...(T && { swap_id: T }),
              };
            return this.httpService
              .post("v2/trades/onchain/new_extended", O)
              .pipe((0, We.c)(1e3));
          }
          patchTrade(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              try {
                const o = {
                  success: n,
                  hash: t,
                  user: a.authService.userAddress,
                };
                return yield (0,
                D._)(a.httpService.patch("v2/trades/onchain/new_extended", o));
              } catch (o) {
                throw new Q.A(o);
              }
            })();
          }
          saveNotWhitelistedProvider(t, n, a) {
            return this.httpService.post("info/new_provider", {
              network: r.TO_BACKEND_BLOCKCHAINS[n],
              title: a,
              address:
                t.providerRouter +
                (t.providerGateway ? `_${t.providerGateway}` : ""),
              cause: "on-chain",
            });
          }
          saveNotWhitelistedOnChainProvider(t, n, a) {
            return this.httpService.post("info/new_provider", {
              network: r.TO_BACKEND_BLOCKCHAINS[n],
              title: a,
              address: t.contract,
              cause: "on-chain",
              selector: t.method,
            });
          }
          saveProvidersStatistics(t) {
            return this.httpService.post(
              "onchain_route_calculation/save",
              t,
              null,
              {
                headers: {
                  Signature: (0, Jt.d)(
                    t.to_token.toLowerCase(),
                    t.from_token.toLowerCase()
                  ),
                },
              }
            );
          }
          sendPreTradeInfo(t) {
            const {
                blockchain: n,
                fromAmount: a,
                fromAddress: o,
                fromDecimals: s,
                toAmount: l,
                toDecimals: u,
                toAddress: d,
              } = ve.getItSwapParams(t),
              m = this.sessionStorage.getItem("referral"),
              v = on.I[t.type],
              g = {
                price_impact: t.getTradeInfo().priceImpact,
                walletName: this.walletConnectorService.provider.walletName,
                deviceType: this.isMobile ? "mobile" : "desktop",
                slippage: t.slippageTolerance,
                expected_amount: r.Web3Pure.toWei(l, u),
                mevbot_protection:
                  this.settingsService.instantTradeValue.useMevBotProtection,
                to_amount_min: t.toTokenAmountMin.stringWeiAmount,
                network: r.TO_BACKEND_BLOCKCHAINS[n],
                provider: v,
                from_token: o,
                to_token: d,
                from_amount: r.Web3Pure.toWei(a, s),
                to_amount: r.Web3Pure.toWei(l, u),
                user: this.authService.userAddress,
                receiver:
                  this.targetNetworkAddressService.address ||
                  this.authService.userAddress,
                ...(m && { influencer: m }),
              };
            return (0, D._)(
              this.httpService.post("v2/trades/onchain/pretrade_new", g).pipe(
                (0, We.c)(1e3),
                (0, k.T)((f) => f.pretrade_id)
              )
            );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(Qt.k),
              e.KVO(U.c),
              e.KVO(le.u),
              e.KVO(Je.R),
              e.KVO(me.h),
              e.KVO(ae.P),
              e.KVO(ze.Td)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      const rn = [r.BLOCKCHAIN_NAME.MERLIN];
      let sn = (() => {
        class i {
          get receiverAddress() {
            return this.settingsService.instantTradeValue.showReceiverAddress
              ? this.targetNetworkAddressService.address
              : null;
          }
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b, w) {
            (this.sdkService = t),
              (this.swapFormService = n),
              (this.platformConfigurationService = a),
              (this.gasService = o),
              (this.tokensService = s),
              (this.authService = l),
              (this.settingsService = u),
              (this.targetNetworkAddressService = d),
              (this.gtmService = m),
              (this.onChainApiService = v),
              (this.queryParamsService = g),
              (this.sessionStorage = f),
              (this.proxyService = T),
              (this.walletConnectorService = b),
              (this.modalService = w);
          }
          calculateTrades(t) {
            const {
                fromToken: n,
                toToken: a,
                fromAmount: o,
              } = this.swapFormService.inputValue,
              s = r.BlockchainsInfo.getChainType(n.blockchain);
            return (0, ce.p)([
              this.tokensService.getAndUpdateTokenPrice(n, !0),
              r.PriceToken.createToken(n),
              this.tokensService.getAndUpdateTokenPrice(a, !0),
              r.PriceToken.createToken(a),
            ]).pipe(
              (0, A.n)(([l, u, d, m]) =>
                (0, ce.p)([
                  this.sdkService.deflationTokenManager.isDeflationToken(u),
                  (0, y.of)(
                    new r.PriceToken({ ...u.asStruct, price: new E.A(l) })
                  ),
                  this.sdkService.deflationTokenManager.isDeflationToken(m),
                  (0, y.of)(
                    new r.PriceToken({ ...m.asStruct, price: new E.A(d) })
                  ),
                  r.Web3Pure[s].isAddressCorrect(this.authService.userAddress),
                ])
              ),
              (0, A.n)(([l, u, d, m, v]) =>
                (0, ce.p)([
                  (0, y.of)(u),
                  (0, y.of)(m),
                  this.getOptions(u, m, l, d, v, t, o.actualValue),
                ])
              ),
              (0, A.n)(([l, u, d]) => {
                const m = Date.now();
                let v = [];
                return this.sdkService.instantTrade
                  .calculateTradeReactively(l, o.actualValue.toFixed(), u, d)
                  .pipe(
                    (0, k.T)((g) => ({
                      ...g,
                      calculationTime: Date.now() - m,
                    })),
                    (0, k.T)((g) => ({ value: g, type: V.T.INSTANT_TRADE })),
                    (0, X.M)((g) => {
                      const f = g?.value;
                      (v = 0 === f.calculated ? [] : [...v, f]),
                        f.calculated === f.total &&
                          0 !== f?.calculated &&
                          this.saveTrade(v, {
                            fromAmount: r.Web3Pure.toWei(
                              o.actualValue,
                              n.decimals
                            ),
                            blockchain: n.blockchain,
                            fromAddress: n.address,
                            toAddress: a.address,
                          });
                    })
                  );
              })
            );
          }
          swapTrade(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              const s = t.from.blockchain,
                {
                  fromSymbol: l,
                  toSymbol: u,
                  fromAmount: d,
                  fromPrice: m,
                  blockchain: v,
                } = ve.getItSwapParams(t);
              if (!o.platformConfigurationService.isAvailableBlockchain(s))
                throw new Ge(He.Z[s]);
              yield o.handlePreSwapModal(t);
              const g = o.receiverAddress,
                { shouldCalculateGasPrice: f, gasPriceOptions: T } =
                  yield o.gasService.getGasInfo(v),
                b = o.sessionStorage.getItem("referral"),
                w = o.settingsService.instantTradeValue.useMevBotProtection;
              let O;
              const I = yield o.sendPreTradeInfo(t),
                ue = {
                  onConfirm: (H) => {
                    (O = H),
                      n?.(H),
                      o.notifyGtmAfterSignTx(O, l, u, d.multipliedBy(m), w),
                      o.postTrade(H, t, I);
                  },
                  ...(o.queryParamsService.testMode && { testMode: !0 }),
                  ...(f && { gasPriceOptions: T }),
                  ...(g && { receiverAddress: g }),
                  useCacheData: a || !1,
                  ...(b && { referrer: b }),
                };
              try {
                yield t.swap(ue);
                const [H, Re] = yield Promise.all([
                  o.tokensService.findToken(t.from),
                  o.tokensService.findToken(t.to),
                ]);
                if (
                  (yield o.conditionalAwait(s),
                  yield o.tokensService.updateTokenBalancesAfterItSwap(H, Re),
                  t instanceof r.OnChainTrade &&
                    t.from.blockchain === r.BLOCKCHAIN_NAME.TRON &&
                    t.type === r.ON_CHAIN_TRADE_TYPE.BRIDGERS)
                ) {
                  const mt = yield (0, D._)(
                    (0, Se.O)(7e3, 5e3).pipe(
                      (0, Zt.H)(() =>
                        o.sdkService.onChainStatusManager.getBridgersSwapStatus(
                          O
                        )
                      ),
                      (0, R.$)(
                        (Be) =>
                          Be.status === r.TX_STATUS.SUCCESS ||
                          Be.status === r.TX_STATUS.FAIL
                      ),
                      (0, re.W)(
                        (Be) => (
                          console.log(Be),
                          (0, y.of)({ hash: null, status: r.TX_STATUS.PENDING })
                        )
                      )
                    )
                  );
                  if (mt.status !== r.TX_STATUS.SUCCESS)
                    throw new yt(r.BLOCKCHAIN_NAME.TRON, mt.hash);
                }
                return O;
              } catch (H) {
                (H instanceof r.NotWhitelistedProviderError ||
                  H instanceof r.UnapprovedContractError ||
                  H instanceof r.UnapprovedMethodError) &&
                  o.saveNotWhitelistedProvider(H, s, t?.type);
                const Re = Tt.T.parseError(H);
                throw (
                  (H instanceof r.UserRejectError ||
                    o.gtmService.fireSwapError(
                      t,
                      o.authService.userAddress,
                      Re
                    ),
                  O &&
                    !o.isNotMinedError(H) &&
                    (yield o.onChainApiService.patchTrade(O, !1)),
                  H?.message?.includes("execution reverted") &&
                  o.settingsService.instantTradeValue.slippageTolerance < 0.5
                    ? new Q.A("Please, increase the slippage and try again!")
                    : Re)
                );
              }
            })();
          }
          approveTrade(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              if (
                !a.platformConfigurationService.isAvailableBlockchain(
                  t.from.blockchain
                )
              )
                throw new Ge(He.Z[t.from.blockchain]);
              if (
                !a.platformConfigurationService.isAvailableBlockchain(
                  t.to.blockchain
                )
              )
                throw new Ge(He.Z[t.to.blockchain]);
              const {
                  blockchain: o,
                  fromAmount: s,
                  fromDecimals: l,
                } = ve.getItSwapParams(t),
                { shouldCalculateGasPrice: u, gasPriceOptions: d } =
                  yield a.gasService.getGasInfo(o),
                m = { onTransactionHash: n, ...(u && { gasPriceOptions: d }) };
              try {
                const v = new E.A(r.Web3Pure.toWei(s, l));
                yield t.approve(m, !0, v);
              } catch (v) {
                if (v instanceof r.UnnecessaryApproveError) return;
                throw v;
              }
            })();
          }
          notifyGtmAfterSignTx(t, n, a, o, s) {
            this.gtmService.fireTxSignedEvent(
              V.T.INSTANT_TRADE,
              t,
              n,
              a,
              new E.A(1),
              o,
              "onchain",
              o.gt(1e3) ? s : null
            );
          }
          postTrade(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              const { blockchain: s } = ve.getItSwapParams(n),
                l = s === r.BLOCKCHAIN_NAME.BOBA ? 3e3 : 0;
              yield (0,
              D._)((0, Se.O)(l).pipe((0, A.n)(() => o.onChainApiService.createTrade(t, n.type, n, a))));
            })();
          }
          saveNotWhitelistedProvider(t, n, a) {
            t instanceof r.NotWhitelistedProviderError
              ? this.onChainApiService
                  .saveNotWhitelistedProvider(t, n, a)
                  .subscribe()
              : this.onChainApiService
                  .saveNotWhitelistedOnChainProvider(t, n, a)
                  .subscribe();
          }
          isNotMinedError(t) {
            return (
              !!t?.message?.includes &&
              t.message.includes(
                "Transaction was not mined within 50 blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!"
              )
            );
          }
          handlePreSwapModal(t) {
            var n = this;
            return (0, C.A)(function* () {
              if (
                t instanceof r.TonOnChainTrade &&
                t.additionalInfo.isMultistep &&
                !(yield n.modalService.openTonSlippageWarning(t))
              )
                throw new r.UserRejectError();
            })();
          }
          conditionalAwait(t) {
            return (0, C.A)(function* () {
              t === r.BLOCKCHAIN_NAME.SOLANA &&
                (yield (0, D._)((0, Se.O)(3e3)));
            })();
          }
          calculateTimeoutForChains() {
            const { fromBlockchain: t } = this.swapFormService.inputValue;
            return rn.includes(t) ? 3e4 : 1e4;
          }
          saveTrade(t, n) {
            this.onChainApiService
              .saveProvidersStatistics({
                user: this.walletConnectorService.address,
                from_token: n.fromAddress,
                network: r.TO_BACKEND_BLOCKCHAINS?.[n.blockchain],
                from_amount: n.fromAmount,
                to_token: n.toAddress,
                providers_statistics: t.map((a) => {
                  const { calculationTime: o, wrappedTrade: s } = a;
                  return {
                    provider_title: s?.tradeType,
                    calculation_time_in_seconds: String(o / 1e3),
                    to_amount: s?.trade?.to.stringWeiAmount,
                    status: s?.trade ? "success" : "error",
                    proxy_used:
                      s?.trade?.feeInfo?.rubicProxy?.fixedFee?.amount?.gt(0),
                    ...(s?.error && { additional_info: s.error.message }),
                  };
                }),
              })
              .subscribe();
          }
          getOptions(t, n, a, o, s, l, u) {
            var d = this;
            return (0, C.A)(function* () {
              const m = d.authService.userAddress && s,
                g = Array.from(
                  new Set([
                    ...l,
                    ...d.queryParamsService.disabledOnChainProviders,
                  ])
                ),
                f = d.settingsService.instantTradeValue,
                T = f.slippageTolerance / 100,
                b = f.disableMultihops,
                w = f.deadline,
                O =
                  !a.isDeflation &&
                  !o.isDeflation &&
                  d.platformConfigurationService.useOnChainProxy,
                I = d.calculateTimeoutForChains(),
                ue = yield d.proxyService.getIntegratorAddress(t, u, n);
              return {
                timeout: I,
                gasCalculation: m ? "calculate" : "disabled",
                zrxAffiliateAddress: Yt.M.zrxAffiliateAddress,
                slippageTolerance: T,
                disableMultihops: b,
                deadlineMinutes: w,
                useProxy: O,
                disabledProviders: [...g],
                providerAddress: ue,
              };
            })();
          }
          sendPreTradeInfo(t) {
            var n = this;
            return (0, C.A)(function* () {
              try {
                return yield n.onChainApiService.sendPreTradeInfo(t);
              } catch {
                return null;
              }
            })();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(Xe.K),
              e.KVO(M.K),
              e.KVO(Oe.p),
              e.KVO(en.R),
              e.KVO(_e.m),
              e.KVO(le.u),
              e.KVO(me.h),
              e.KVO(ae.P),
              e.KVO(Ue.A),
              e.KVO(At),
              e.KVO(Ce.w),
              e.KVO(Je.R),
              e.KVO(tn),
              e.KVO(U.c),
              e.KVO(ie.B)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var xt = p(792460),
        de = (function (i) {
          return (
            (i.REFRESHING = "refreshing"),
            (i.IN_PROGRESS = "in progress"),
            (i.STOPPED = "stopped"),
            i
          );
        })(de || {});
      let Ot = (() => {
        class i {
          get status() {
            return this._status$.getValue();
          }
          constructor(t) {
            (this.swapFormService = t),
              (this._status$ = new N.t(de.STOPPED)),
              (this.status$ = this._status$.asObservable()),
              (this._onRefresh$ = new Ct.B()),
              (this.onRefresh$ = this._onRefresh$.asObservable()),
              (this.timeout = 6e4),
              (this.isRefreshing = !1),
              (this.isForcedRefresh = !1),
              (this.isRefreshRotating$ = this.status$.pipe(
                (0, k.T)((n, a) => {
                  const o = 1 === a;
                  return this.isForcedRefresh && (this.isForcedRefresh = !1), o;
                })
              )),
              this.swapFormService.isFilled$.pipe((0, L.F)()).subscribe((n) => {
                n ||
                  (this._status$.next(de.STOPPED),
                  clearTimeout(this.timeoutId));
              });
          }
          onButtonClick() {
            this._onRefresh$.next({ isForced: !0 }),
              (this.isForcedRefresh = !0);
          }
          setRefreshing() {
            clearTimeout(this.timeoutId),
              (this.isRefreshing = !0),
              this.status !== de.IN_PROGRESS &&
                this._status$.next(de.REFRESHING);
          }
          setStopped() {
            (this.isRefreshing = !1),
              this.status !== de.IN_PROGRESS && this._status$.next(de.STOPPED),
              this.setupTimer();
          }
          setupTimer() {
            clearTimeout(this.timeoutId),
              (this.timeoutId = setTimeout(() => {
                this._onRefresh$.next({ isForced: !1 });
              }, this.timeout));
          }
          startInProgress() {
            this._status$.next(de.IN_PROGRESS);
          }
          stopInProgress() {
            this._status$.next(this.isRefreshing ? de.REFRESHING : de.STOPPED);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(M.K));
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      class It extends kt.e {
        constructor() {
          super("errors.crossChainIsUnavailable"),
            Object.setPrototypeOf(this, It.prototype);
        }
      }
      const wi = It;
      var yi = p(443276),
        cn = p(115738);
      class Pt extends Q.A {
        constructor() {
          super(
            null,
            {},
            "The swap between this pair of tokens is currently unavailable. Please try again later."
          ),
            Object.setPrototypeOf(this, Pt.prototype);
        }
      }
      const Ai = Pt;
      var xi = p(825368),
        Oi = p(164165);
      const Pi = [
        ...new Set(
          Object.values({
            [r.BLOCKCHAIN_NAME.ETHEREUM]: [
              r.ON_CHAIN_TRADE_TYPE.DODO,
              r.ON_CHAIN_TRADE_TYPE.ZRX,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
            ],
            [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: [
              r.ON_CHAIN_TRADE_TYPE.DODO,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
              r.ON_CHAIN_TRADE_TYPE.ZRX,
            ],
            [r.BLOCKCHAIN_NAME.POLYGON]: [
              r.ON_CHAIN_TRADE_TYPE.ALGEBRA,
              r.ON_CHAIN_TRADE_TYPE.DODO,
              r.ON_CHAIN_TRADE_TYPE.ZRX,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
            ],
            [r.BLOCKCHAIN_NAME.POLYGON_ZKEVM]: [],
            [r.BLOCKCHAIN_NAME.HARMONY]: [],
            [r.BLOCKCHAIN_NAME.AVALANCHE]: [
              r.ON_CHAIN_TRADE_TYPE.ZRX,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
            ],
            [r.BLOCKCHAIN_NAME.MOONRIVER]: [r.ON_CHAIN_TRADE_TYPE.DODO],
            [r.BLOCKCHAIN_NAME.FANTOM]: [
              r.ON_CHAIN_TRADE_TYPE.ZRX,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
            ],
            [r.BLOCKCHAIN_NAME.ARBITRUM]: [
              r.ON_CHAIN_TRADE_TYPE.DODO,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
            ],
            [r.BLOCKCHAIN_NAME.AURORA]: [],
            [r.BLOCKCHAIN_NAME.TELOS]: [],
            [r.BLOCKCHAIN_NAME.OPTIMISM]: [
              r.ON_CHAIN_TRADE_TYPE.ZRX,
              r.ON_CHAIN_TRADE_TYPE.CURVE,
              r.ON_CHAIN_TRADE_TYPE.DODO,
            ],
            [r.BLOCKCHAIN_NAME.CRONOS]: [],
            [r.BLOCKCHAIN_NAME.OKE_X_CHAIN]: [r.ON_CHAIN_TRADE_TYPE.DODO],
            [r.BLOCKCHAIN_NAME.GNOSIS]: [r.ON_CHAIN_TRADE_TYPE.CURVE],
            [r.BLOCKCHAIN_NAME.FUSE]: [],
            [r.BLOCKCHAIN_NAME.MOONBEAM]: [],
            [r.BLOCKCHAIN_NAME.CELO]: [r.ON_CHAIN_TRADE_TYPE.CURVE],
            [r.BLOCKCHAIN_NAME.BOBA]: [],
            [r.BLOCKCHAIN_NAME.ETHEREUM_POW]: [],
            [r.BLOCKCHAIN_NAME.KAVA]: [],
            [r.BLOCKCHAIN_NAME.TRON]: [],
            [r.BLOCKCHAIN_NAME.OASIS]: [],
            [r.BLOCKCHAIN_NAME.METIS]: [],
            [r.BLOCKCHAIN_NAME.KLAYTN]: [],
            [r.BLOCKCHAIN_NAME.VELAS]: [],
            [r.BLOCKCHAIN_NAME.SYSCOIN]: [],
            [r.BLOCKCHAIN_NAME.ASTAR_EVM]: [],
            [r.BLOCKCHAIN_NAME.ZK_SYNC]: [],
            [r.BLOCKCHAIN_NAME.PULSECHAIN]: [],
            [r.BLOCKCHAIN_NAME.LINEA]: [r.ON_CHAIN_TRADE_TYPE.HORIZONDEX],
            [r.BLOCKCHAIN_NAME.BASE]: [],
            [r.BLOCKCHAIN_NAME.MANTLE]: [],
            [r.BLOCKCHAIN_NAME.FUJI]: [],
            [r.BLOCKCHAIN_NAME.GOERLI]: [],
            [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET]: [],
            [r.BLOCKCHAIN_NAME.MUMBAI]: [],
            [r.BLOCKCHAIN_NAME.SCROLL_SEPOLIA]: [],
            [r.BLOCKCHAIN_NAME.ARTHERA]: [],
            [r.BLOCKCHAIN_NAME.ZETACHAIN]: [],
            [r.BLOCKCHAIN_NAME.TAIKO]: [],
            [r.BLOCKCHAIN_NAME.SEPOLIA]: [],
            [r.BLOCKCHAIN_NAME.MANTA_PACIFIC]: [],
            [r.BLOCKCHAIN_NAME.SCROLL]: [],
            [r.BLOCKCHAIN_NAME.STARKNET]: [],
            [r.BLOCKCHAIN_NAME.BERACHAIN]: [],
            [r.BLOCKCHAIN_NAME.BLAST]: [r.ON_CHAIN_TRADE_TYPE.FENIX_V2],
            [r.BLOCKCHAIN_NAME.BLAST_TESTNET]: [],
            [r.BLOCKCHAIN_NAME.HOLESKY]: [],
            [r.BLOCKCHAIN_NAME.KROMA]: [],
            [r.BLOCKCHAIN_NAME.HORIZEN_EON]: [],
            [r.BLOCKCHAIN_NAME.MERLIN]: [],
            [r.BLOCKCHAIN_NAME.ROOTSTOCK]: [],
            [r.BLOCKCHAIN_NAME.MODE]: [],
            [r.BLOCKCHAIN_NAME.ZK_FAIR]: [],
            [r.BLOCKCHAIN_NAME.ZK_LINK]: [],
            [r.BLOCKCHAIN_NAME.XLAYER]: [],
            [r.BLOCKCHAIN_NAME.SEI]: [],
            [r.BLOCKCHAIN_NAME.CORE]: [],
            [r.BLOCKCHAIN_NAME.BAHAMUT]: [],
            [r.BLOCKCHAIN_NAME.BITLAYER]: [],
            [r.BLOCKCHAIN_NAME.GRAVITY]: [],
            [r.BLOCKCHAIN_NAME.UNICHAIN_SEPOLIA_TESTNET]: [],
          })
            .filter((i) => i.length)
            .flat()
        ),
      ];
      class Mt extends kt.e {
        constructor() {
          super(
            "Your transaction is still in progress. Please wait for it to complete before performing a new Approve transaction. If it takes too long, try to boost your transaction in wallet"
          ),
            Object.setPrototypeOf(this, Mt.prototype);
        }
      }
      const Mi = Mt;
      var Ni = p(687796),
        Ei = p(217202);
      let ln = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b) {
            (this.swapFormService = t),
              (this.sdkService = n),
              (this.crossChainService = a),
              (this.onChainService = o),
              (this.swapsStateService = s),
              (this.errorsService = l),
              (this.authService = u),
              (this.tradePageService = d),
              (this.refreshService = m),
              (this.modalService = v),
              (this.settingsService = g),
              (this.targetNetworkAddressService = f),
              (this.crossChainApiService = T),
              (this.onChainApiService = b),
              (this._calculateTrade$ = new Ct.B()),
              (this.calculateTrade$ = this._calculateTrade$
                .asObservable()
                .pipe((0, ee.B)(20))),
              (this.disabledTradesTypes = { crossChain: [], onChain: [] }),
              this.subscribeOnFormChanges(),
              this.subscribeOnCalculation(),
              this.subscribeOnRefreshServiceCalls(),
              this.subscribeOnAddressChange(),
              this.subscribeOnSettings(),
              this.subscribeOnReceiverChange();
          }
          subscribeOnFormChanges() {
            this.swapFormService.inputValueDistinct$.subscribe(() => {
              this.startRecalculation(!0);
            });
          }
          startRecalculation(t = !1) {
            this._calculateTrade$.next({ isForced: t });
          }
          subscribeOnCalculation() {
            this.calculateTrade$
              .pipe(
                (0, ee.B)(200),
                (0, k.T)((t) =>
                  t.stop || !this.swapFormService.isFilled
                    ? (this.refreshService.setStopped(), { ...t, stop: !0 })
                    : { ...t, stop: !1 }
                ),
                (0, X.M)((t) => {
                  t.stop ||
                    (this.refreshService.setRefreshing(),
                    this.swapsStateService.setCalculationProgress(1, 0),
                    t.isForced &&
                      (this.swapsStateService.clearProviders(!1),
                      (this.disabledTradesTypes.crossChain = []),
                      (this.disabledTradesTypes.onChain = [])),
                    this.swapsStateService.patchCalculationState());
                }),
                (0, A.n)((t) => {
                  if (t.stop) return (0, y.of)(null);
                  const { fromToken: n, toToken: a } =
                    this.swapFormService.inputValue;
                  return (
                    (this.disabledTradesTypes.crossChain =
                      Object.values(r.ALGB_TOKEN).includes(
                        n.address.toLowerCase()
                      ) &&
                      Object.values(r.ALGB_TOKEN).includes(
                        a.address.toLowerCase()
                      )
                        ? [
                            ...Object.values(r.CROSS_CHAIN_TRADE_TYPE).filter(
                              (s) => "layerzero" !== s
                            ),
                          ]
                        : [
                            ...this.disabledTradesTypes.crossChain,
                            "layerzero",
                          ]),
                    n.blockchain === a.blockchain
                      ? this.onChainService
                          .calculateTrades([
                            ...this.disabledTradesTypes.onChain,
                            ...Pi,
                          ])
                          .pipe(
                            (0, re.W)(
                              (s) => (console.debug(s), (0, y.of)(null))
                            )
                          )
                      : this.crossChainService
                          .calculateTrades(this.disabledTradesTypes.crossChain)
                          .pipe(
                            (0, re.W)(
                              (s) => (console.debug(s), (0, y.of)(null))
                            )
                          )
                  );
                }),
                (0, re.W)((t) => (console.debug(t), (0, y.of)(null))),
                (0, Zt.H)((t) => {
                  const n = t?.value?.wrappedTrade;
                  if (n) {
                    const a = t.value.total === t.value.calculated,
                      o =
                        n?.trade?.needApprove().catch(() => !1) ||
                        (0, y.of)(!1),
                      s = this.needAuthWallet(n.trade),
                      l = this.checkIsNotLinkedAccount(n.trade, n?.error);
                    return (0, ce.p)([(0, y.of)(n), o, (0, y.of)(t.type), l, s])
                      .pipe(
                        (0, X.M)(([u, d, m, v, g]) => {
                          try {
                            v &&
                              (this.errorsService.catch(
                                new r.NoLinkedAccountError()
                              ),
                              (u.trade = null)),
                              this.swapsStateService.updateTrade(u, m, d, g),
                              this.swapsStateService.pickProvider(a),
                              this.swapsStateService.setCalculationProgress(
                                t.value.total,
                                t.value.calculated
                              ),
                              this.setTradeAmount(),
                              a && this.refreshService.setStopped();
                          } catch (f) {
                            console.error(f);
                          }
                        })
                      )
                      .pipe(
                        (0, re.W)(
                          () => (
                            this.swapsStateService.pickProvider(a),
                            (0, y.of)(null)
                          )
                        )
                      );
                  }
                  return (
                    t?.value
                      ? this.swapsStateService.setCalculationProgress(
                          t.value.total,
                          t.value.calculated
                        )
                      : (this.refreshService.setStopped(),
                        this.swapsStateService.clearProviders(!0)),
                    (0, y.of)(null)
                  );
                }),
                (0, re.W)(
                  (t) => (
                    this.refreshService.setStopped(),
                    this.swapsStateService.pickProvider(!0),
                    (0, y.of)(null)
                  )
                )
              )
              .subscribe();
          }
          subscribeOnRefreshServiceCalls() {
            this.refreshService.onRefresh$.subscribe((t) => {
              this.startRecalculation(t.isForced);
            });
          }
          setTradeAmount() {
            const t = this.swapsStateService.tradeState?.trade;
            t &&
              this.swapFormService.outputControl.patchValue({
                toAmount: t.to.tokenAmount,
              });
          }
          swap(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              const o = t.trade;
              let s;
              try {
                if (
                  !(yield a.settingsService.checkSlippageAndPriceImpact(
                    o instanceof z.CrossChainTrade
                      ? V.T.CROSS_CHAIN_ROUTING
                      : V.T.INSTANT_TRADE,
                    o
                  ))
                )
                  return void n.onError?.();
                s =
                  o instanceof z.CrossChainTrade
                    ? yield a.crossChainService.swapTrade(o, n.onHash)
                    : yield a.onChainService.swapTrade(o, n.onHash);
              } catch (l) {
                if (l instanceof Ni.A)
                  if (
                    yield (0, D._)(
                      a.modalService.openRateChangedModal(
                        r.Web3Pure.fromWei(l.oldAmount, o.to.decimals),
                        r.Web3Pure.fromWei(l.newAmount, o.to.decimals),
                        o.to.symbol
                      )
                    )
                  )
                    try {
                      s =
                        o instanceof z.CrossChainTrade
                          ? yield a.crossChainService.swapTrade(o, n.onHash, !0)
                          : yield a.onChainService.swapTrade(o, n.onHash, !0);
                    } catch (d) {
                      a.catchSwapError(d, t, n?.onError);
                    }
                  else a.catchSwapError(new r.UserRejectError(), t, n?.onError);
                else a.catchSwapError(l, t, n?.onError);
              }
              s &&
                (o instanceof z.CrossChainTrade
                  ? yield a.handleCrossChainSwapResponse(o, s, n.onSwap)
                  : yield a.handleOnChainSwapResponse(s, n.onSwap));
            })();
          }
          approve(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              try {
                t.trade instanceof z.CrossChainTrade
                  ? yield a.crossChainService.approveTrade(t.trade, n.onHash)
                  : yield a.onChainService.approveTrade(t.trade, n.onHash),
                  n?.onSwap();
              } catch (o) {
                console.error(o), n?.onError();
                let s = o;
                o?.message?.includes(
                  "Transaction was not mined within 50 blocks"
                ) && (s = new Mi()),
                  a.errorsService.catch(s);
              }
            })();
          }
          authWallet(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              const o = t.trade;
              try {
                yield o.authWallet(), n.onSwap();
              } catch (s) {
                console.error(s), n.onError(), a.errorsService.catch(s);
              }
            })();
          }
          subscribeOnAddressChange() {
            this.authService.currentUser$
              .pipe(
                (0, L.F)(),
                (0, A.n)(() => this.swapFormService.isFilled$),
                (0, te.p)((t) => t)
              )
              .subscribe(() => {
                this.startRecalculation(!0);
              });
          }
          parseCalculationError(t) {
            if (t instanceof r.NotSupportedTokensError)
              return new Q.A(
                "Currently, Qubic AI does not support swaps between these tokens."
              );
            if (t instanceof r.UnsupportedReceiverAddressError)
              return new Q.A(
                "This provider doesn\u2019t support the receiver address."
              );
            if (t instanceof r.CrossChainIsUnavailableError) return new wi();
            if (t instanceof r.LowSlippageError)
              return new Q.A("Slippage is too low for transaction.");
            if (t instanceof yi.A)
              return new Q.A(
                "The swap can't be executed with the entered amount of tokens. Please change it to the greater amount."
              );
            if (t?.message?.includes("No available routes"))
              return new Q.A("No available routes.");
            if (t?.message?.includes("There are no providers for trade"))
              return new Q.A("There are no providers for trade.");
            if (t?.message?.includes("Representation of "))
              return new Q.A(
                "The swap between this pair of blockchains is currently unavailable."
              );
            if (t?.message?.includes("INSUFFICIENT_OUTPUT_AMOUNT"))
              return new Q.A(
                "Please, increase the slippage or amount and try again!"
              );
            const n = t && Tt.T.parseError(t);
            return !n || n instanceof cn.A ? new Ai() : n;
          }
          isExecutionCriticalError(t) {
            return [xi.A, Oi.A, cn.A, Ei.A].some((n) => t instanceof n);
          }
          checkIsNotLinkedAccount(t, n) {
            return n && n instanceof r.NoLinkedAccountError
              ? (0, y.of)(!0)
              : t instanceof r.SymbiosisEvmCcrTrade &&
                t.to.blockchain === r.BLOCKCHAIN_NAME.SEI
              ? (0, Ae.H)(t.checkBlockchainRequirements())
              : (0, y.of)(!1);
          }
          needAuthWallet(t) {
            return t instanceof r.RetroBridgeEvmTrade ||
              t instanceof r.RetroBridgeTonTrade
              ? (0, Ae.H)(t.needAuthWallet())
              : (0, y.of)(!1);
          }
          handleCrossChainSwapResponse(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              const s = {};
              t instanceof r.ChangenowCrossChainTrade &&
                (s.changenowId = t.changenowId),
                "rangoRequestId" in t && (s.rangoRequestId = t.rangoRequestId),
                "squidrouterRequestId" in t &&
                  (s.squidrouterId = t.squidrouterRequestId),
                "retroBridgeId" in t && (s.retroBridgeId = t.retroBridgeId),
                a?.(s),
                yield o.crossChainApiService.patchTrade(n, !0);
            })();
          }
          handleOnChainSwapResponse(t, n) {
            var a = this;
            return (0, C.A)(function* () {
              n?.(), yield a.onChainApiService.patchTrade(t, !0);
            })();
          }
          catchSwapError(t, n, a) {
            console.error(t);
            const o = this.parseCalculationError(t);
            this.isExecutionCriticalError(o) &&
              (n.trade instanceof z.CrossChainTrade
                ? this.disabledTradesTypes.crossChain.push(n.trade.type)
                : this.disabledTradesTypes.onChain.push(n.trade.type),
              this.swapsStateService.updateTrade(
                { trade: null, error: o, tradeType: n.tradeType },
                n.trade instanceof z.CrossChainTrade
                  ? V.T.CROSS_CHAIN_ROUTING
                  : V.T.INSTANT_TRADE,
                !1,
                !1
              ),
              this.swapsStateService.pickProvider(!0)),
              a?.(),
              this.errorsService.catch(o);
          }
          subscribeOnSettings() {
            this.settingsService.crossChainRoutingValueChanges
              .pipe(
                (0, F.Z)(this.settingsService.crossChainRoutingValue),
                (0, L.F)(
                  (t, n) => t.useMevBotProtection !== n.useMevBotProtection
                ),
                (0, G.v)(
                  this.settingsService.instantTradeValueChanges.pipe(
                    (0, F.Z)(this.settingsService.instantTradeValue),
                    (0, L.F)(
                      (t, n) => t.useMevBotProtection !== n.useMevBotProtection
                    )
                  )
                ),
                (0, ee.B)(10),
                (0, Te.J)(),
                (0, te.p)(([t, n]) => !(0, x.Gq)(t, n))
              )
              .subscribe(() => {
                this.startRecalculation(!0);
              });
          }
          subscribeOnReceiverChange() {
            this.targetNetworkAddressService.address$
              .pipe(
                (0, G.v)(this.targetNetworkAddressService.isAddressValid$),
                (0, ee.B)(50)
              )
              .subscribe(([t, n]) => {
                ("" === t || (t && n)) && this.startRecalculation(!0);
              });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(M.K),
              e.KVO(Xe.K),
              e.KVO(an),
              e.KVO(sn),
              e.KVO(he),
              e.KVO(xt.b),
              e.KVO(le.u),
              e.KVO(se.p),
              e.KVO(Ot),
              e.KVO(ie.B),
              e.KVO(me.h),
              e.KVO(ae.P),
              e.KVO(qe),
              e.KVO(At)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Ri = p(440204),
        Bi = p(295717);
      const dn = [
          r.BLOCKCHAIN_NAME.ETHEREUM,
          r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
          r.BLOCKCHAIN_NAME.POLYGON,
        ],
        $i = {
          [r.BLOCKCHAIN_NAME.ETHEREUM]: "https://rubic-eth.rpc.blxrbdn.com",
          [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]:
            "https://rubic-bnb.rpc.blxrbdn.com",
          [r.BLOCKCHAIN_NAME.POLYGON]: "https://rubic-polygon.rpc.blxrbdn.com",
        };
      var Fi = p(629278),
        pn = p(477894),
        un = p(16123);
      let Ie = (() => {
        class i {
          get transactionState() {
            return this._transactionState$.getValue();
          }
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b) {
            (this.swapsStateService = t),
              (this.swapForm = n),
              (this.swapsControllerService = a),
              (this.sdkService = o),
              (this.walletConnectorService = s),
              (this.tradePageService = l),
              (this.airdropPointsService = u),
              (this.recentTradesStoreService = d),
              (this.settingsService = m),
              (this.notificationsService = v),
              (this.translateService = g),
              (this.errorService = f),
              (this.ccrApiService = T),
              (this.spindlService = b),
              (this._transactionState$ = new N.t({
                step: "inactive",
                data: {},
              })),
              (this.subscriptions$ = []),
              (this.useCallback = !1),
              (this.transactionState$ = this._transactionState$.asObservable()),
              (this._selectedTradeState$ = new N.t(null)),
              (this.selectedTradeState$ =
                this._selectedTradeState$.asObservable()),
              (this.tradeInfo$ = (0, ce.p)([
                this.swapForm.fromToken$.pipe((0, R.$)()),
                this.swapForm.fromAmount$.pipe((0, R.$)()),
                this.swapForm.toToken$.pipe((0, R.$)()),
                this.swapForm.toAmount$.pipe((0, R.$)()),
              ]).pipe(
                (0, k.T)(([w, O, I, ue]) => ({
                  fromAsset: this.getTokenAsset(w),
                  fromValue: {
                    tokenAmount: O.actualValue,
                    fiatAmount:
                      O.actualValue.gt(0) && w.price
                        ? O.actualValue.multipliedBy(w.price || 0).toFixed(2)
                        : null,
                  },
                  toAsset: this.getTokenAsset(I),
                  toValue: {
                    tokenAmount: ue,
                    fiatAmount:
                      ue.gt(0) && I.price
                        ? ue.multipliedBy(I.price || 0).toFixed(2)
                        : null,
                  },
                }))
              ));
          }
          getTokenAsset(t) {
            const n = Wt.i[t.blockchain];
            return {
              secondImage: n.img,
              secondLabel: n.name.replaceAll("RBC", "CRAI"),
              mainImage: t.image,
              mainLabel: t.symbol.replaceAll("RBC", "CRAI"),
              secondColor: zt.E[t.blockchain],
            };
          }
          setNextTxState(t) {
            this._transactionState$.next(t);
          }
          requestTxSign() {
            var t = this;
            return (0, C.A)(function* () {
              const n = yield (0, D._)(t.selectedTradeState$);
              n.needAuthWallet
                ? t.startAuthWallet()
                : n.needApprove
                ? t.startApprove()
                : t.startSwap();
            })();
          }
          startSwap() {
            this.setNextTxState({
              step: "swapRequest",
              data: this.transactionState.data,
            });
          }
          startAuthWallet() {
            this.setNextTxState({
              step: "authWalletPending",
              data: this.transactionState.data,
            });
          }
          startApprove() {
            this.setNextTxState({
              step: "approvePending",
              data: this.transactionState.data,
            });
          }
          activatePage() {
            this.resetTransactionState(),
              this.subscribeOnNetworkChange(),
              this.subscribeOnAddressChange(),
              this.subscribeOnValidation(),
              this.handleTransactionState();
          }
          deactivatePage() {
            this.subscriptions$.forEach((t) => t?.unsubscribe()),
              (this.subscriptions$.length = 0),
              (this.useCallback = !1),
              this._selectedTradeState$.next(null);
          }
          handleTransactionState() {
            const t = this.transactionState$
              .pipe(
                (0, te.p)((n) => "inactive" !== n.step),
                (0, G.v)(this.selectedTradeState$.pipe((0, R.$)(gt.Aj))),
                (0, L.F)(
                  ([n, a], [o, s]) => n.step === o.step && (0, x.Gq)(a, s)
                ),
                (0, ee.B)(10),
                (0, A.n)(([n, a]) =>
                  "approvePending" === n.step
                    ? this.handleApprove(a)
                    : "authWalletPending" === n.step
                    ? this.handleAuthMessage(a)
                    : "swapRequest" === n.step
                    ? this.makeSwapRequest(a)
                    : (0, y.of)(null)
                )
              )
              .subscribe();
            this.subscriptions$.push(t);
          }
          initDstTxStatusPolling(t, n, a, o) {
            const s = (0, ft.Y)(3e4)
              .pipe(
                (0, F.Z)(-1),
                (0, A.n)(() => this.selectedTradeState$.pipe((0, R.$)())),
                (0, A.n)((l) =>
                  (0, Ae.H)(
                    this.sdkService.crossChainStatusManager.getCrossChainStatus(
                      {
                        fromBlockchain: l.trade.from.blockchain,
                        toBlockchain: l.trade.to.blockchain,
                        srcTxHash: t,
                        txTimestamp: n,
                        ...(o?.changenowId && { changenowId: o.changenowId }),
                        ...(o.rangoRequestId && {
                          rangoRequestId: o.rangoRequestId,
                        }),
                        ...(o?.squidrouterId && {
                          squidrouterRequestId: o.squidrouterId,
                        }),
                        ...(o.retroBridgeId && {
                          retroBridgeId: o.retroBridgeId,
                        }),
                      },
                      l.tradeType
                    )
                  ).pipe(
                    (0, _i.w)(29e3),
                    (0, re.W)(() =>
                      (0, y.of)({
                        srcTxStatus: r.TX_STATUS.SUCCESS,
                        dstTxStatus: r.TX_STATUS.PENDING,
                        dstTxHash: null,
                      })
                    )
                  )
                ),
                (0, X.M)((l) => {
                  l.dstTxStatus === r.TX_STATUS.SUCCESS
                    ? this.setNextTxState({
                        step: "success",
                        data: { hash: l.dstTxHash, toBlockchain: a },
                      })
                    : l.dstTxStatus === r.TX_STATUS.FALLBACK
                    ? (this.setNextTxState(
                        l.dstTxHash
                          ? {
                              step: "success",
                              data: { hash: l.dstTxHash, toBlockchain: a },
                            }
                          : { step: "error", data: this.transactionState.data }
                      ),
                      this.errorService.catch(new Fi.e()),
                      l.extraInfo?.mesonSwapId &&
                        this.ccrApiService.sendMesonSwapId(l, t))
                    : l.dstTxStatus === r.TX_STATUS.FAIL &&
                      this.setNextTxState({
                        step: "error",
                        data: this.transactionState.data,
                      });
                }),
                (0, bt.v)((l) => l.dstTxStatus === r.TX_STATUS.PENDING)
              )
              .subscribe();
            this.subscriptions$.push(s);
          }
          subscribeOnNetworkChange() {
            const t = this.walletConnectorService.networkChange$.subscribe(
              (n) => this.checkNetwork(n)
            );
            this.subscriptions$.push(t);
          }
          subscribeOnAddressChange() {
            const t = this.walletConnectorService.addressChange$.subscribe(
              (n) => this.checkAddress(n)
            );
            this.subscriptions$.push(t);
          }
          checkAddress(t = this.walletConnectorService.address) {
            const n = this._transactionState$.getValue();
            (n.data.activeWallet = !!t), this.setNextTxState(n);
          }
          checkNetwork(t = this.walletConnectorService.network) {
            const a = this._selectedTradeState$.value?.trade?.from?.blockchain,
              o = this._transactionState$.getValue();
            (o.data.wrongNetwork = !!a && t !== a), this.setNextTxState(o);
          }
          loadRpcParams(t) {
            var n = this;
            return (0, C.A)(function* () {
              const o = (yield (0, D._)(n.selectedTradeState$)).trade.from
                  .blockchain,
                s = dn.some((l) => l === o);
              if (t && s) {
                const l = $i[o];
                try {
                  return yield n.walletConnectorService.addChain(o, l), !0;
                } catch {
                  return !1;
                }
              }
              return !0;
            })();
          }
          setSelectedProvider() {
            this._selectedTradeState$.next(this.swapsStateService.tradeState);
          }
          catchSwitchCancel() {
            var t = this;
            return (0, C.A)(function* () {
              const n = t.translateService.instant(
                "notifications.cancelRpcSwitch"
              );
              t.notificationsService.show(n, {
                status: "warning",
                autoClose: !0,
                data: null,
                icon: "",
                defaultAutoCloseTime: 0,
              }),
                t.resetTransactionState();
            })();
          }
          makeSwapRequest(t) {
            let n;
            return (
              (this.useCallback = !0),
              (0, Ae.H)(
                this.loadRpcParams(
                  t.trade.from.blockchain === t.trade.to.blockchain
                    ? this.settingsService.instantTradeValue.useMevBotProtection
                    : this.settingsService.crossChainRoutingValue
                        .useMevBotProtection
                )
              ).pipe(
                (0, ee.B)(50),
                (0, A.n)((o) =>
                  o
                    ? this.swapsControllerService.swap(t, {
                        onHash: (s) => {
                          this.useCallback &&
                            ((n = s),
                            this.setNextTxState({
                              step: "sourcePending",
                              data: { ...this.transactionState.data },
                            }));
                        },
                        onSwap: (s) => {
                          this.useCallback &&
                            (t.trade instanceof z.CrossChainTrade
                              ? (this.setNextTxState({
                                  step: "destinationPending",
                                  data: { ...this.transactionState.data },
                                }),
                                this.initDstTxStatusPolling(
                                  n,
                                  Date.now(),
                                  t.trade.to.blockchain,
                                  s
                                ))
                              : this.setNextTxState({
                                  step: "success",
                                  data: {
                                    hash: n,
                                    toBlockchain: t.trade.to.blockchain,
                                  },
                                }),
                            this.spindlService.sendSwapEvent(n),
                            this.recentTradesStoreService.updateUnreadTrades());
                        },
                        onError: () => {
                          this.useCallback &&
                            (this.setNextTxState({
                              step: "inactive",
                              data: {},
                            }),
                            this.tradePageService.setState("form"));
                        },
                      })
                    : this.catchSwitchCancel()
                )
              )
            );
          }
          handleApprove(t) {
            return (
              (this.useCallback = !0),
              this.swapsControllerService.approve(t, {
                onSwap: () => {
                  this.useCallback && this.startSwap();
                },
                onError: () => {
                  this.useCallback &&
                    this.setNextTxState({
                      step: "approveReady",
                      data: this.transactionState.data,
                    });
                },
              })
            );
          }
          handleAuthMessage(t) {
            return (
              (this.useCallback = !0),
              this.swapsControllerService.authWallet(t, {
                onSwap: () => {
                  this.useCallback && this.startSwap();
                },
                onError: () => {
                  this.useCallback &&
                    this.setNextTxState({
                      step: "authWalletReady",
                      data: this.transactionState.data,
                    });
                },
              })
            );
          }
          subscribeOnValidation() {
            const t = this.selectedTradeState$
              .pipe((0, F.Z)())
              .subscribe(() => {
                this.checkAddress(), this.checkNetwork();
              });
            this.subscriptions$.push(t);
          }
          resetTransactionState() {
            this.setNextTxState({ step: "idle", data: {} });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(he),
              e.KVO(M.K),
              e.KVO(ln),
              e.KVO(Xe.K),
              e.KVO(U.c),
              e.KVO(se.p),
              e.KVO(Ri.g),
              e.KVO(Bi.C),
              e.KVO(me.h),
              e.KVO(un.I),
              e.KVO(J.c$),
              e.KVO(xt.b),
              e.KVO(qe),
              e.KVO(pn.Q)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var B = p(647097),
        Li = p(53252);
      function Di(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 1),
            e.nrm(1, "iframe", 2),
            e.nI1(2, "safeSanitizer"),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet;
          e.R7$(1),
            e.Y8G(
              "src",
              e.i5U(2, 3, t.src, "resourceUrl"),
              e.f$h
            )("width", t.size.width)("height", t.size.height);
        }
      }
      const Gi = function (i, c) {
        return { src: i, size: c };
      };
      let Hi = (() => {
        class i {
          get isMobile() {
            return this.headerStore.isMobile;
          }
          constructor(t, n, a) {
            (this.headerStore = t),
              (this.authService = n),
              (this.previewSwapService = a),
              (this.iframeSrc$ = this.headerStore.getMobileDisplayStatus().pipe(
                (0, G.v)(
                  this.authService.currentUser$,
                  this.previewSwapService.transactionState$
                )
              )),
              (this.iframeSize$ = this.headerStore
                .getMobileDisplayStatus()
                .pipe(
                  (0, G.v)(this.previewSwapService.transactionState$),
                  (0, k.T)(([o, s]) =>
                    o || "success" === s.step
                      ? { width: 300, height: 250 }
                      : { width: 600, height: 100 }
                  )
                ));
          }
          getPlacementId(t, n) {
            return "success" === n
              ? "post_swap"
              : t
              ? "under_swap_mobile"
              : "under_swap_desktop";
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(K.X), e.rXU(le.u), e.rXU(Ie));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-spindle-banner"]],
            decls: 3,
            vars: 8,
            consts: [
              ["class", "spindle-banner", 4, "ngLet"],
              [1, "spindle-banner"],
              ["title", "SpindleAds", 3, "src", "width", "height"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Di, 3, 6, "div", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.l_i(
                      5,
                      Gi,
                      e.bMT(1, 1, a.iframeSrc$),
                      e.bMT(2, 3, a.iframeSize$)
                    )
                  );
            },
            dependencies: [B.N, _.Jj, Li.f],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]   .spindle-banner[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}[_nghost-%COMP%]   .spindle-banner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border-radius:var(--tui-radius-m)}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var _n = p(933726),
        q = p(956977),
        mn = p(663808),
        j = p(805116),
        Pe = p(556463),
        Vi = p(576533);
      let ji = (() => {
        class i {
          constructor() {
            this.max = 100;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-progress-bar"]],
            inputs: { max: "max", value: "value" },
            decls: 1,
            vars: 2,
            consts: [
              [
                "tuiProgressBar",
                "",
                "new",
                "",
                "size",
                "xs",
                3,
                "max",
                "value",
              ],
            ],
            template: function (n, a) {
              1 & n && e.nrm(0, "progress", 0),
                2 & n && e.Y8G("max", a.max)("value", a.value);
            },
            dependencies: [Vi.gI],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var we = p(113910),
        W = p(564035),
        hn = p(523856),
        gn = p(450317),
        at = p(732534),
        vn = p(232999);
      function Yi(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "div", 3),
            e.nrm(2, "img", 4),
            e.k0s(),
            e.j41(3, "img", 5),
            e.bIt("error", function (a) {
              e.eBV(t);
              const o = e.XpG();
              return e.Njj(o.onTokenImageError(a));
            }),
            e.k0s(),
            e.j41(4, "div", 6)(5, "span", 7),
            e.EFF(6),
            e.k0s(),
            e.j41(7, "span", 8),
            e.EFF(8),
            e.nrm(9, "img", 9),
            e.k0s()(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG();
          e.R7$(1),
            e.xc7("background", t.visibleAsset.secondColor),
            e.R7$(1),
            e.Y8G(
              "src",
              t.visibleAsset.secondImage,
              e.B4B
            )("alt", t.visibleAsset.secondLabel),
            e.R7$(1),
            e.Y8G(
              "src",
              t.visibleAsset.mainImage || t.DEFAULT_TOKEN_IMAGE,
              e.B4B
            )("alt", t.visibleAsset.mainLabel),
            e.R7$(3),
            e.JRh(t.visibleAsset.secondLabel),
            e.R7$(2),
            e.SpI("", t.visibleAsset.mainLabel, " ");
        }
      }
      function Ki(i, c) {
        1 & i && e.nrm(0, "img", 14);
      }
      function Ui(i, c) {
        1 & i && e.nrm(0, "img", 9);
      }
      function Xi(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 10)(1, "div", 11),
            e.EFF(2),
            e.DNE(3, Ki, 1, 0, "img", 12),
            e.DNE(4, Ui, 1, 0, "img", 13),
            e.k0s()()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(2),
            e.SpI(" ", t.emptySelectorText, " "),
            e.R7$(1),
            e.Y8G("ngIf", t.isDisabled),
            e.R7$(1),
            e.Y8G("ngIf", !t.isDisabled);
        }
      }
      let Nt = (() => {
        class i {
          set mainFormType(t) {
            (this._mainFormType = t),
              (this.emptySelectorText = this.getEmptySelectorText());
          }
          get mainFormType() {
            return this._mainFormType;
          }
          set asset(t) {
            (this.visibleAsset = t ? this.getTokenAsset(t) : null),
              (this.emptySelectorText = this.getEmptySelectorText());
          }
          constructor(t, n, a, o) {
            (this.queryParamsService = t),
              (this.destroy$ = n),
              (this.cdr = a),
              (this.tokenService = o),
              (this._mainFormType = vn.g.SWAP_FORM),
              (this.isDisabled = !1),
              (this.handleAssetSelection = new e.bkB()),
              (this.visibleAsset = null),
              (this.emptySelectorText = ""),
              (this.DEFAULT_TOKEN_IMAGE = at.c);
          }
          ngOnInit() {
            this.subOnHideSelectorQueryParamsChange();
          }
          subOnHideSelectorQueryParamsChange() {
            this.queryParamsService.tokensSelectionDisabled$
              .pipe((0, q.Q)(this.destroy$))
              .subscribe(([t, n]) => {
                (this.isDisabled = "from" === this.selectorType ? t : n),
                  this.cdr.markForCheck();
              });
          }
          getTokenAsset(t) {
            const n = Wt.i[t.blockchain];
            return {
              secondImage: n.img,
              secondLabel: n.name.replaceAll("RBC", "CRAI"),
              mainImage: t.image,
              mainLabel: t.symbol.replaceAll("RBC", "CRAI"),
              secondColor: zt.E[t.blockchain],
            };
          }
          handleSelection() {
            this.isDisabled || this.handleAssetSelection.emit();
          }
          onTokenImageError(t) {
            this.tokenService.onTokenImageError(t);
          }
          getEmptySelectorText() {
            return "Select Token";
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(Ce.w),
              e.rXU(j.ew, 2),
              e.rXU(e.gRc),
              e.rXU(_e.m)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-asset-selector"]],
            inputs: {
              isDisabled: "isDisabled",
              selectorType: "selectorType",
              mainFormType: "mainFormType",
              asset: "asset",
            },
            outputs: { handleAssetSelection: "handleAssetSelection" },
            features: [e.Jv_([j.ew])],
            decls: 4,
            vars: 2,
            consts: [
              [1, "selector", 3, "click"],
              [4, "ngIf", "ngIfElse"],
              ["emptySelector", ""],
              [1, "selector__second-image-container"],
              [
                "width",
                "35",
                "height",
                "35",
                1,
                "selector__second-image",
                3,
                "src",
                "alt",
              ],
              [
                "width",
                "50",
                "height",
                "50",
                1,
                "selector__main-image",
                3,
                "src",
                "alt",
                "error",
              ],
              [1, "selector__labels"],
              [1, "selector__second-label"],
              [1, "selector__main-label"],
              [
                "src",
                "assets/images/icons/arrow/arrow-down-white.svg",
                "alt",
                "Select token",
              ],
              [1, "selector__empty"],
              [1, "selector__empty-container"],
              [
                "src",
                "assets/images/icons/arrow/arrow-down-grey.svg",
                "alt",
                "Select token",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/arrow/arrow-down-white.svg",
                "alt",
                "Select token",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/arrow/arrow-down-grey.svg",
                "alt",
                "Select token",
              ],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0),
                  e.bIt("click", function () {
                    return a.handleSelection();
                  }),
                  e.DNE(1, Yi, 10, 8, "ng-container", 1),
                  e.DNE(2, Xi, 5, 3, "ng-template", null, 2, e.C5r),
                  e.k0s()),
                2 & n)
              ) {
                const o = e.sdS(3);
                e.R7$(1), e.Y8G("ngIf", a.visibleAsset)("ngIfElse", o);
              }
            },
            dependencies: [_.bT],
            styles: [
              '[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.selector[_ngcontent-%COMP%]{display:flex;height:50px}.selector[_ngcontent-%COMP%]:hover{cursor:pointer}.selector__second-label[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:400;font-size:15px}.selector__main-label[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);align-items:center;color:#fff;font-weight:700;font-size:21px}.selector__labels[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-s);justify-content:center}.selector__main-image[_ngcontent-%COMP%]{box-sizing:content-box;margin-top:-5px;margin-left:-25px;background:var(--io-background);border:5px solid var(--io-background);border-radius:100%}.selector__second-image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:67px;background:#627eea;border-radius:var(--tui-radius-m) 0 0 var(--tui-radius-m)}.selector__second-image[_ngcontent-%COMP%]{margin-right:22px;border-radius:100%}.selector__empty-container[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;justify-content:space-between;width:100%}.selector__empty[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:150px;height:100%;margin-right:-25px;padding-left:25px;color:#fff;font-weight:700;font-size:1rem;background:var(--tui-secondary);border-radius:var(--tui-radius-m) 0 0 var(--tui-radius-m)}.selector__empty-gas-form[_ngcontent-%COMP%]{width:200px}.selector__empty-gas-form__disabled[_ngcontent-%COMP%]{color:var(--tui-text-03)}.selector__empty[_ngcontent-%COMP%]:after{position:absolute;right:-25px;z-index:0;width:25px;height:100%;background:var(--tui-secondary);border-radius:0 50px 50px 0;content:""}@media (max-width: 651px){.selector[_ngcontent-%COMP%]{height:40px}.selector__main-image[_ngcontent-%COMP%]{width:40px;height:40px}.selector__empty-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:var(--tui-padding-s)}.selector__empty[_ngcontent-%COMP%]{justify-content:flex-start;padding-left:16px;font-weight:400;font-size:18px;border-radius:var(--tui-radius-s) 0 0 var(--tui-radius-s)}.selector__empty[_ngcontent-%COMP%]:after{right:-18px}}',
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var oe = p(272782);
      let Wi = (() => {
        class i {
          constructor() {
            this.selectedRoute = new e.bkB();
          }
          handleSelectedRoute() {
            this.selectedRoute.emit(this.route);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-alternative-route-element"]],
            inputs: { route: "route" },
            outputs: { selectedRoute: "selectedRoute" },
            decls: 7,
            vars: 4,
            consts: [
              [1, "element__route-container"],
              [1, "element__assets-container"],
              ["left", "", "selectorType", "from", 3, "asset", "mainFormType"],
              [
                "src",
                "assets/images/icons/arrow/arrow-right-white.svg",
                1,
                "element__assets-container_arrow-image",
              ],
              ["right", "", "selectorType", "to", 3, "asset", "mainFormType"],
              [
                "tuiButton",
                "",
                "type",
                "button",
                "appearance",
                "primary",
                "size",
                "s",
                3,
                "click",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0)(1, "div", 1),
                e.nrm(2, "app-asset-selector", 2)(3, "img", 3)(
                  4,
                  "app-asset-selector",
                  4
                ),
                e.k0s(),
                e.j41(5, "button", 5),
                e.bIt("click", function () {
                  return a.handleSelectedRoute();
                }),
                e.EFF(6, " Get "),
                e.k0s()()),
                2 & n &&
                  (e.R7$(2),
                  e.Y8G("asset", a.route.from)("mainFormType", "swapForm"),
                  e.R7$(2),
                  e.Y8G("asset", a.route.to)("mainFormType", "swapForm"));
            },
            dependencies: [Nt, oe.SM],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.element__route-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:62px;margin-right:10px;padding:var(--tui-padding-m);background:var(--io-background);border-radius:var(--tui-radius-s)}.element__route-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:500;font-size:15px;border-radius:var(--tui-radius-s)}.element__assets-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:80%}.element__assets-container_arrow-image[_ngcontent-%COMP%]{filter:sepia(1) saturate(0) brightness(.5)}.element__assets-container[_ngcontent-%COMP%]     .selector__main-image{width:27px;height:27px;margin-top:unset;overflow:hidden}.element__assets-container[_ngcontent-%COMP%]     .selector__second-image-container{width:47px;height:27px;overflow:hidden;border-radius:10px 0 0 10px}.element__assets-container[_ngcontent-%COMP%]     .selector__second-image-container img{width:25px;height:25px}.element__assets-container[_ngcontent-%COMP%]     .selector__main-label img{display:none}.element__assets-container[_ngcontent-%COMP%]     .selector__labels{gap:unset;width:50px;margin:0;line-height:1.2}.element__assets-container[_ngcontent-%COMP%]     .selector__labels span{font-size:12px}.element__assets-container[_ngcontent-%COMP%]     .selector{align-items:center}.element__assets-container[_ngcontent-%COMP%]     .selector:hover{cursor:unset}@media (max-width: 651px){.element__route-container[_ngcontent-%COMP%]{height:55px;margin-right:0;background:transparent}.element__assets-container[_ngcontent-%COMP%]     .selector__main-image{background-color:var(--tui-secondary);border:5px solid var(--tui-secondary)}.element__assets-container_arrow-image[_ngcontent-%COMP%]{filter:unset}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function zi(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-alternative-route-element", 8),
            e.bIt("selectedRoute", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.handleAlternativeRouteSelection(a));
            }),
            e.k0s();
        }
        2 & i && e.Y8G("route", c.$implicit);
      }
      function Zi(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 3)(1, "div", 4)(2, "span"),
            e.EFF(
              3,
              " Most likely there will be no routes available. You can use networks below for intermediate swap. "
            ),
            e.k0s()(),
            e.nrm(4, "hr", 5),
            e.j41(5, "div", 6),
            e.DNE(6, zi, 1, 1, "app-alternative-route-element", 7),
            e.k0s()()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(6), e.Y8G("ngForOf", t.alternativeRoutes);
        }
      }
      function Qi(i, c) {
        1 & i &&
          (e.j41(0, "div", 9)(1, "div", 10),
          e.nrm(2, "app-no-result", 11),
          e.k0s()());
      }
      let Ji = (() => {
        class i {
          handleAlternativeRouteSelection(t) {
            this.selectedRoute.emit(t);
          }
          constructor(t) {
            (this.alternativeRouteService = t),
              (this.selectedRoute = new e.bkB()),
              (this.routeStatus$ =
                this.alternativeRouteService.alternativeRouteStatus$);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(Ke));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-alternative-routes-list"]],
            inputs: { alternativeRoutes: "alternativeRoutes" },
            outputs: { selectedRoute: "selectedRoute" },
            decls: 4,
            vars: 5,
            consts: [
              [3, "ngSwitch"],
              [
                "class",
                "alternative-routes-list__container",
                4,
                "ngSwitchCase",
              ],
              ["class", "empty-list", 4, "ngSwitchCase"],
              [1, "alternative-routes-list__container"],
              [1, "alternative-routes-list__title"],
              [1, "hr-mobile"],
              [1, "alternative-routes-list"],
              [3, "route", "selectedRoute", 4, "ngFor", "ngForOf"],
              [3, "route", "selectedRoute"],
              [1, "empty-list"],
              [1, "empty-list__content"],
              [
                "label",
                "No routes available",
                "description",
                "Please try another token combination.",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0),
                e.nI1(1, "async"),
                e.DNE(2, Zi, 7, 1, "div", 1),
                e.DNE(3, Qi, 3, 0, "div", 2),
                e.k0s()),
                2 & n &&
                  (e.Y8G("ngSwitch", e.bMT(1, 3, a.routeStatus$)),
                  e.R7$(2),
                  e.Y8G("ngSwitchCase", "complete"),
                  e.R7$(1),
                  e.Y8G("ngSwitchCase", "noroutes"));
            },
            dependencies: [_.Sq, _.ux, _.e1, gn.q, Wi, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.alternative-routes-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:12px}.alternative-routes-list__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;line-height:15px}.hr-mobile[_ngcontent-%COMP%]{display:none;height:2px}.empty-list__content[_ngcontent-%COMP%]{margin-right:10px;padding:var(--tui-padding-l);background:var(--primary-background);border-radius:var(--tui-radius-m)}@media (max-width: 651px){.alternative-routes-list[_ngcontent-%COMP%], .alternative-routes-list__title[_ngcontent-%COMP%]{gap:4px;padding:15px;background:var(--tui-secondary)}.alternative-routes-list[_ngcontent-%COMP%]{margin-top:0;border-radius:0 0 20px 20px}.alternative-routes-list__title[_ngcontent-%COMP%]{border-radius:20px 20px 0 0}.hr-mobile[_ngcontent-%COMP%]{display:block}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const qi = ["tuiScrollBar"];
      function ea(i, c) {
        1 & i && e.eu8(0);
      }
      function ta(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-providers-list", 9),
            e.bIt("selectTrade", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.handleTradeSelection(a));
            }),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG(2);
          e.Y8G("states", t.states)("selectedTradeType", t.selectedTradeType)(
            "calculationProgress",
            t.calculationStatus.calculationProgress
          )("isModal", !1);
        }
      }
      function na(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-window-container"),
            e.qex(1, 4),
            e.EFF(2, "Providers list"),
            e.bVm(),
            e.DNE(3, ea, 1, 0, "ng-container", 5),
            e.j41(4, "tui-scrollbar", 6, 7),
            e.DNE(6, ta, 1, 4, "app-providers-list", 8),
            e.k0s()()),
          2 & i)
        ) {
          const t = e.XpG(),
            n = e.sdS(6),
            a = e.sdS(2);
          e.R7$(3),
            e.Y8G("ngTemplateOutlet", n),
            e.R7$(3),
            e.Y8G("ngIf", !t.calculationStatus.noRoutes)("ngIfElse", a);
        }
      }
      function ia(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-alternative-routes-list", 10),
            e.bIt("selectedRoute", function (a) {
              e.eBV(t);
              const o = e.XpG();
              return e.Njj(o.handleRouteSelection(a));
            }),
            e.nI1(1, "async"),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG();
          e.Y8G("alternativeRoutes", e.bMT(1, 1, t.alternativeRoutes$));
        }
      }
      function aa(i, c) {
        1 & i && e.eu8(0);
      }
      function oa(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-providers-list", 13),
            e.bIt("selectTrade", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.handleTradeSelection(a));
            }),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG(2);
          e.Y8G("states", t.states.slice(0, 1))(
            "selectedTradeType",
            t.selectedTradeType
          )("calculationProgress", t.calculationStatus.calculationProgress)(
            "isModal",
            !1
          )("shortedInfo", !0);
        }
      }
      function ra(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 14),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.openOtherProvidersList());
            }),
            e.j41(1, "span", 15),
            e.EFF(2, "Other Providers"),
            e.k0s(),
            e.nrm(3, "span", 16),
            e.k0s();
        }
        2 & i &&
          (e.R7$(3), e.Y8G("inlineSVG", "assets/images/icons/arrow-down.svg"));
      }
      function sa(i, c) {
        if (
          (1 & i &&
            (e.DNE(0, aa, 1, 0, "ng-container", 5),
            e.DNE(1, oa, 1, 5, "app-providers-list", 11),
            e.DNE(2, ra, 4, 1, "div", 12)),
          2 & i)
        ) {
          const t = e.XpG(),
            n = e.sdS(6),
            a = e.sdS(2);
          e.Y8G("ngTemplateOutlet", n),
            e.R7$(1),
            e.Y8G("ngIf", !t.calculationStatus.noRoutes)("ngIfElse", a),
            e.R7$(1),
            e.Y8G("ngIf", (null == t.states ? null : t.states.length) > 1);
        }
      }
      function ca(i, c) {
        if ((1 & i && e.nrm(0, "app-progress-bar", 20), 2 & i)) {
          const t = c.ngIf;
          e.Y8G("max", 100)("value", t);
        }
      }
      function la(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 18)(1, "h5"),
            e.EFF(2),
            e.nI1(3, "async"),
            e.k0s(),
            e.DNE(4, ca, 1, 2, "app-progress-bar", 19),
            e.nI1(5, "async"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.Y8G("@progress", void 0),
            e.R7$(2),
            e.JRh(e.bMT(3, 3, t.calculationText$)),
            e.R7$(2),
            e.Y8G("ngIf", e.bMT(5, 5, t.calculationProcess$));
        }
      }
      function da(i, c) {
        if ((1 & i && e.DNE(0, la, 6, 7, "div", 17), 2 & i)) {
          const t = e.XpG();
          e.Y8G("ngIf", t.calculationStatus.activeCalculation);
        }
      }
      let pa = (() => {
        class i {
          set calculationStatus(t) {
            (this._calculationStatus = t),
              0 === t.calculationProgress.current &&
                1 === t.calculationProgress.total &&
                this._triggerCalculation$.next();
          }
          get calculationStatus() {
            return this._calculationStatus;
          }
          constructor(t, n, a, o, s, l, u) {
            (this.injector = t),
              (this.modalService = n),
              (this.headerStore = a),
              (this.swapsFormService = o),
              (this.providerHintService = s),
              (this.destroy$ = l),
              (this.alternativeRoutesService = u),
              (this.states = []),
              (this._triggerCalculation$ = new N.t(null)),
              (this.ratio = 100),
              (this.calculationProcess$ = this._triggerCalculation$
                .asObservable()
                .pipe(
                  (0, A.n)(() => (0, ft.Y)(this.ratio)),
                  (0, bt.v)((d) =>
                    this.isLongTimeoutChain()
                      ? d <= 3e4 / this.ratio
                      : d <= 15e3 / this.ratio
                  ),
                  (0, k.T)((d) => this.convertIntervalValueToPercents(d))
                )),
              (this.calculationText$ = this.calculationProcess$.pipe(
                (0, k.T)((d) =>
                  d <= 50
                    ? "Calculating providers..."
                    : "More providers can get close, but they are delaying the answer..."
                )
              )),
              (this.selectTrade = new e.bkB()),
              (this.isMobile = this.headerStore.isMobile),
              (this.alternativeRoutes$ =
                this.alternativeRoutesService.getAlternativeRoutes());
          }
          handleTradeSelection(t) {
            this.selectTrade.emit(t);
          }
          handleRouteSelection(t) {
            this.swapsFormService.inputControl.patchValue({
              fromBlockchain: t.from.blockchain,
              fromToken: t.from,
              toBlockchain: t.to.blockchain,
              toToken: t.to,
              fromAmount: {
                visibleValue: t.amount.toFixed(),
                actualValue: t.amount,
              },
            }),
              this.alternativeRoutesService.setCurrentAlternativeRoute(t);
          }
          openOtherProvidersList() {
            this.modalService
              .openOtherProvidersList(
                this.states,
                this.selectedTradeType,
                this.calculationStatus.calculationProgress,
                !0,
                this.injector,
                this.calculationStatus.noRoutes
              )
              .subscribe((t) => {
                t && this.handleTradeSelection(t);
              });
          }
          convertIntervalValueToPercents(t) {
            return this.isLongTimeoutChain()
              ? t * ((100 * this.ratio) / 3e4)
              : t * ((100 * this.ratio) / 15e3);
          }
          isLongTimeoutChain() {
            const { fromBlockchain: t, toBlockchain: n } =
              this.swapsFormService.inputValue;
            return t === n ? rn.includes(t) : tt.includes(t) || tt.includes(n);
          }
          ngAfterViewInit() {
            this.isMobile ||
              (0, _n.R)(
                this.scrollBarElement.browserScrollRef.nativeElement,
                "scroll"
              )
                .pipe(
                  (0, X.M)(() => this.hideProviderHintOnScroll(!0)),
                  (0, ee.B)(500),
                  (0, q.Q)(this.destroy$)
                )
                .subscribe(() => this.hideProviderHintOnScroll(!1));
          }
          hideProviderHintOnScroll(t) {
            this.providerHintService.setHintVisibility(t);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(e.zZn),
              e.rXU(ie.B),
              e.rXU(K.X),
              e.rXU(M.K),
              e.rXU(mn.m),
              e.rXU(j.ew, 2),
              e.rXU(Ke)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-providers-list-general"]],
            viewQuery: function (n, a) {
              if ((1 & n && e.GBs(qi, 5), 2 & n)) {
                let o;
                e.mGM((o = e.lsd())) && (a.scrollBarElement = o.first);
              }
            },
            inputs: {
              states: "states",
              selectedTradeType: "selectedTradeType",
              showCalculation: "showCalculation",
              calculationStatus: "calculationStatus",
            },
            outputs: { selectTrade: "selectTrade" },
            features: [e.Jv_([j.ew, mn.m])],
            decls: 7,
            vars: 2,
            consts: [
              [4, "ngIf", "ngIfElse"],
              ["alternativeRoutes", ""],
              ["mobileProviders", ""],
              ["waiting", ""],
              ["header", ""],
              [4, "ngTemplateOutlet"],
              [1, "providers-list"],
              ["tuiScrollBar", ""],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationProgress",
                "isModal",
                "selectTrade",
                4,
                "ngIf",
                "ngIfElse",
              ],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationProgress",
                "isModal",
                "selectTrade",
              ],
              [3, "alternativeRoutes", "selectedRoute"],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationProgress",
                "isModal",
                "shortedInfo",
                "selectTrade",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["class", "other-providers", 3, "click", 4, "ngIf"],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationProgress",
                "isModal",
                "shortedInfo",
                "selectTrade",
              ],
              [1, "other-providers", 3, "click"],
              [1, "other-providers__text"],
              [1, "other-providers__arrow", 3, "inlineSVG"],
              ["class", "waiting", 4, "ngIf"],
              [1, "waiting"],
              [3, "max", "value", 4, "ngIf"],
              [3, "max", "value"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.DNE(0, na, 7, 3, "app-window-container", 0),
                  e.DNE(1, ia, 2, 3, "ng-template", null, 1, e.C5r),
                  e.DNE(3, sa, 3, 4, "ng-template", null, 2, e.C5r),
                  e.DNE(5, da, 1, 1, "ng-template", null, 3, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(4);
                e.Y8G("ngIf", !a.isMobile)("ngIfElse", o);
              }
            },
            dependencies: [_.bT, _.T3, Pe.r, ji, we.UB, W.ll, hn.S, Ji, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{width:100%}h5[_ngcontent-%COMP%]{margin:0 0 var(--tui-padding-l);padding-right:10px;font-size:15px;line-height:15px}.waiting[_ngcontent-%COMP%]{margin-bottom:var(--tui-padding-m)}.providers-list[_ngcontent-%COMP%]{max-height:455px;margin-right:-10px}.other-providers[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:var(--tui-padding-m);padding:var(--tui-padding-l);background:var(--io-background);border-radius:var(--tui-radius-m)}.other-providers__text[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:18px;line-height:18px;letter-spacing:.54px}@media (max-width: 651px){.waiting[_ngcontent-%COMP%]{padding:var(--tui-padding-m)}.providers-list[_ngcontent-%COMP%]{height:auto;margin-right:0}}",
            ],
            data: {
              animation: [
                (0, S.hZ)("progress", [
                  (0, S.kY)(":enter", [
                    (0, S.iF)({ height: "0px", opacity: 0 }),
                    (0, S.i0)(
                      "0.2s ease-out",
                      (0, S.iF)({ height: "53px", opacity: 1 })
                    ),
                  ]),
                  (0, S.kY)(":leave", [
                    (0, S.iF)({ height: "63px", opacity: 1 }),
                    (0, S.i0)(
                      "0.2s ease-in",
                      (0, S.iF)({ height: "0px", opacity: 0 })
                    ),
                  ]),
                ]),
              ],
            },
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function ua(i, c) {
        1 & i && e.nrm(0, "img", 7);
      }
      function _a(i, c) {
        1 & i && e.nrm(0, "span", 8);
      }
      const ma = function (i, c) {
          return {
            "state__element-icon_focus": i,
            "state__element-icon_done": c,
          };
        },
        ha = function (i, c) {
          return {
            "state__element-text_focus": i,
            "state__element-text_pending": c,
          };
        };
      function ga(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 2)(1, "div", 3),
            e.DNE(2, ua, 1, 0, "img", 4),
            e.DNE(3, _a, 1, 0, "span", 5),
            e.k0s(),
            e.j41(4, "div", 6),
            e.EFF(5),
            e.k0s()()),
          2 & i)
        ) {
          const t = c.$implicit;
          e.R7$(1),
            e.Y8G(
              "ngClass",
              e.l_i(5, ma, "pending" === t.status, "fullfilled" === t.status)
            ),
            e.R7$(1),
            e.Y8G("ngIf", "fullfilled" === t.status),
            e.R7$(1),
            e.Y8G("ngIf", "pending" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.l_i(8, ha, "fullfilled" === t.status, "pending" === t.status)
            ),
            e.R7$(1),
            e.SpI(" ", t.value, " ");
        }
      }
      let fn = (() => {
        class i {
          set state(t) {
            this.setStepStates(t);
          }
          set transactionData(t) {
            const n = [];
            (this.type = t.type),
              t.needAuthWallet && n.push("authWalletPending"),
              t.needApprove && n.push("approvePending"),
              "swap" === t.type
                ? n.push("swapRequest", "sourcePending")
                : n.push("swapRequest", "sourcePending", "destinationPending"),
              n.push("success"),
              (this.steps = n.map((a) => ({
                status: "default",
                key: a,
                value: i.getLabel(a, this.type),
              })));
          }
          static getLabel(t, n) {
            return {
              idle: "Swap",
              error: "Error",
              approveReady: "Approve",
              approvePending: "Manage allowance",
              authWalletPending: "Signing message",
              authWalletReady: "Wallet authorized",
              swapReady: "Swap",
              swapRequest: "Transaction Sign",
              sourcePending:
                "swap" === n
                  ? "Waiting for transaction"
                  : "Waiting for complete in source chain",
              destinationPending: "Waiting for complete in target chain",
              success: "Success swap",
              inactive: "Inactive",
            }[t];
          }
          setStepStates(t) {
            const n = this.steps.findIndex((a) => a.key === t);
            this.steps = this.steps.map((a, o) =>
              o < n || "success" === t || "error" === t
                ? { ...a, status: "fullfilled" }
                : o === n
                ? { ...a, status: "pending" }
                : { ...a, status: "default" }
            );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-transaction-state"]],
            inputs: { state: "state", transactionData: "transactionData" },
            decls: 2,
            vars: 1,
            consts: [
              [1, "state"],
              ["class", "state__element", 4, "ngFor", "ngForOf"],
              [1, "state__element"],
              [1, "state__element-icon", 3, "ngClass"],
              [
                "src",
                "/assets/images/icons/checkmark/checkmark-thin-white.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              ["class", "loader", 4, "ngIf"],
              [1, "state__element-text", 3, "ngClass"],
              [
                "src",
                "/assets/images/icons/checkmark/checkmark-thin-white.svg",
                "alt",
                "",
              ],
              [1, "loader"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0), e.DNE(1, ga, 6, 11, "div", 1), e.k0s()),
                2 & n && (e.R7$(1), e.Y8G("ngForOf", a.steps));
            },
            dependencies: [_.YU, _.Sq, _.bT],
            styles: [
              '.state[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:var(--tui-padding-l)}.state[_ngcontent-%COMP%]:before{position:absolute;top:2px;left:7.5px;width:1px;height:calc(100% - 4px);background:var(--tui-neutral-fill);opacity:.5;content:""}.state__element[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-l);align-items:center}.state__element-icon[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:16px;height:16px;background:var(--tui-neutral-fill);border-radius:100%}.state__element-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12px;height:12px}.state__element-icon_focus[_ngcontent-%COMP%]{background:var(--primary-background)}.state__element-icon_done[_ngcontent-%COMP%]{background:var(--tui-success-fill)}.state__element-text[_ngcontent-%COMP%]{color:var(--tui-text-03)}.state__element-text_focus[_ngcontent-%COMP%], .state__element-text_done[_ngcontent-%COMP%]{color:var(--tui-text-01)}.loader[_ngcontent-%COMP%]{display:inline-block;box-sizing:border-box;width:12px;height:12px;border:1px solid #fff;border-bottom-color:transparent;border-radius:50%;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}',
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Et = p(955879);
      function bn(i) {
        return (
          i.type === r.CROSS_CHAIN_TRADE_TYPE.ARBITRUM &&
          i.from.blockchain === r.BLOCKCHAIN_NAME.ARBITRUM &&
          i.to.blockchain === r.BLOCKCHAIN_NAME.ETHEREUM
        );
      }
      let Rt = (() => {
        class i {
          constructor(t, n) {
            (this.tokensStoreService = t),
              (this.platformConfigurationService = n);
          }
          getFeeInfo(t) {
            const n = this.tokensStoreService.getNativeToken(t.from.blockchain);
            return { fee: t.feeInfo, nativeToken: n };
          }
          getProviderInfo(t) {
            const n = Et.r[t],
              o = this.platformConfigurationService.providersAverageTime?.[t];
            return { ...n, averageTime: o || n.averageTime };
          }
          getGasData(t) {
            if (!("gasData" in t) && !("gasFeeInfo" in t)) return null;
            const n = t.from.blockchain,
              a = r.nativeTokensList[n],
              o = this.tokensStoreService.tokens.find((l) =>
                (0, x._f)(l, { blockchain: n, address: a.address })
              ).price;
            let s = null;
            return (
              t instanceof r.EvmCrossChainTrade
                ? (s = this.getCcrGasFee(t, a))
                : (t instanceof r.EvmOnChainTrade ||
                    t instanceof r.TonOnChainTrade) &&
                  (s = this.getOnChainGasFee(t, a)),
              !s || s.lte(0)
                ? null
                : {
                    amount: s,
                    amountInUsd: s.multipliedBy(o),
                    symbol: a.symbol.replaceAll("RBC", "CRAI"),
                  }
            );
          }
          getCcrGasFee(t, n) {
            const a = t.gasData;
            if (!a) return null;
            let o = null;
            return (
              "totalGas" in a
                ? (o = a.totalGas)
                : "gasPrice" in a && a.gasPrice.gt(0)
                ? (o = a.gasLimit?.multipliedBy(a.gasPrice))
                : "maxFeePerGas" in a &&
                  a.maxFeePerGas.gt(0) &&
                  (o = a.gasLimit?.multipliedBy(a.maxFeePerGas || 0)),
              o ? r.Web3Pure.fromWei(o, n.decimals) : null
            );
          }
          getOnChainGasFee(t, n) {
            const a = t.gasFeeInfo;
            if (!a) return null;
            if (a.totalGas) return r.Web3Pure.fromWei(a.totalGas, n.decimals);
            if (!a.gasLimit) return null;
            let o = null;
            return (
              "gasPrice" in a && a.gasPrice.gt(0)
                ? (o = a.gasLimit.multipliedBy(a.gasPrice))
                : "maxFeePerGas" in a &&
                  a.maxFeePerGas.gt(0) &&
                  (o = a.gasLimit.multipliedBy(a.maxFeePerGas)),
              r.Web3Pure.fromWei(o, n.decimals)
            );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(Z.p), e.KVO(Oe.p));
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Bt = p(933117),
        fe = p(640920),
        ke = p(862826),
        h = p(644819);
      function va(i, c) {
        1 & i && (e.j41(0, "div"), e.EFF(1, "< 0.01 $"), e.k0s());
      }
      function fa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div"),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.SpI(
              " ",
              e.brH(2, 1, e.bMT(3, 5, t.gasInfo.amountInUsd), 6, 2),
              " $ "
            );
        }
      }
      function ba(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 8),
            e.nrm(1, "img", 9),
            e.DNE(2, va, 2, 0, "div", 10),
            e.DNE(3, fa, 4, 7, "div", 10),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(),
            n = e.sdS(12);
          e.Y8G("tuiHint", n)("tuiHintAppearance", t.hintAppearance)(
            "tuiHintDirection",
            t.hintDirection
          )("tuiHintHideDelay", t.hideHint ? 0 : 200),
            e.R7$(2),
            e.Y8G("ngIf", t.gasInfo.amountInUsd.lt(0.01)),
            e.R7$(1),
            e.Y8G("ngIf", t.gasInfo.amountInUsd.gt(0.01));
        }
      }
      function Ca(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 8), e.nrm(1, "img", 11), e.EFF(2), e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(),
            n = e.sdS(8);
          e.Y8G("tuiHint", n)("tuiHintAppearance", t.hintAppearance)(
            "tuiHintDirection",
            t.hintDirection
          )("tuiHintHideDelay", t.hideHint ? 0 : 200),
            e.R7$(2),
            e.SpI(" ", t.displayAmount, " ");
        }
      }
      function ka(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div"),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.Lme(
              " Protocol Fee: ",
              e.brH(
                2,
                2,
                e.bMT(3, 6, t.feeInfo.rubicProxy.fixedFee.amount),
                8,
                8
              ),
              " ",
              t.feeInfo.rubicProxy.fixedFee.token.symbol.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI"),
              " "
            );
        }
      }
      function Sa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div"),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.Lme(
              " Provider Fee: ",
              e.brH(
                2,
                2,
                e.bMT(3, 6, t.feeInfo.provider.cryptoFee.amount),
                8,
                8
              ),
              " ",
              t.feeInfo.provider.cryptoFee.token.symbol.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI"),
              " "
            );
        }
      }
      function Ta(i, c) {
        if (
          (1 & i &&
            (e.DNE(0, ka, 4, 8, "div", 10), e.DNE(1, Sa, 4, 8, "div", 10)),
          2 & i)
        ) {
          const t = e.XpG();
          e.Y8G(
            "ngIf",
            null == t.feeInfo ||
              null == t.feeInfo.rubicProxy ||
              null == t.feeInfo.rubicProxy.fixedFee
              ? null
              : t.feeInfo.rubicProxy.fixedFee.amount.gt(
                  t.minAmountToShowProtocolFee
                )
          ),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              null == t.feeInfo ||
                null == t.feeInfo.provider ||
                null == t.feeInfo.provider.cryptoFee
                ? null
                : t.feeInfo.provider.cryptoFee.amount.isFinite()
            );
        }
      }
      function wa(i, c) {
        1 & i && e.EFF(0, "Estimated arriving time");
      }
      function ya(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "span"),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.nI1(4, "shortenAmount"),
            e.nI1(5, "bigNumberFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.E5c(
              " ",
              e.ii3(2, 3, e.brH(3, 8, t.gasInfo.amount, 20, !1), 20, 10, !1),
              " ",
              t.gasInfo.symbol,
              " ~ ",
              e.ii3(
                4,
                12,
                e.brH(5, 17, t.gasInfo.amountInUsd, 20, !1),
                20,
                10,
                !1
              ),
              " $ "
            );
        }
      }
      function Aa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "span"),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.nI1(4, "shortenAmount"),
            e.nI1(5, "bigNumberFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.E5c(
              " ",
              e.brH(2, 3, e.bMT(3, 7, t.gasInfo.amount), 8, 8),
              " ",
              t.gasInfo.symbol,
              " ~ ",
              e.brH(4, 9, e.bMT(5, 13, t.gasInfo.amountInUsd), 8, 8),
              " $ "
            );
        }
      }
      function xa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div")(1, "span"),
            e.EFF(2, " Estimated Gas: "),
            e.k0s(),
            e.nrm(3, "br"),
            e.DNE(4, ya, 6, 21, "span", 10),
            e.DNE(5, Aa, 6, 15, "span", 10),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(4),
            e.Y8G("ngIf", t.gasInfo.amountInUsd.lt(0.01)),
            e.R7$(1),
            e.Y8G("ngIf", t.gasInfo.amountInUsd.gt(0.01));
        }
      }
      let Cn = (() => {
        class i {
          constructor() {
            (this.minAmountToShowProtocolFee = new E.A(5e-7)),
              (this.hintAppearance = ""),
              (this.hintDirection = "bottom-right"),
              (this.hideHint = !1);
          }
          set feeInfoChange(t) {
            this.feeInfo = t.fee;
            const n = new E.A(0)
              .plus(t?.fee?.rubicProxy?.fixedFee?.amount || 0)
              .plus(t?.fee?.provider?.cryptoFee?.amount || 0);
            if (t?.nativeToken?.price && n.gt(0)) {
              const a = n.multipliedBy(t.nativeToken.price);
              this.displayAmount = a.gt(0.1) ? `~ $${a.toFixed(2)}` : null;
            } else if (t.nativeToken?.symbol && n.gt(0)) {
              const a = new fe.p(),
                o = new ke.W();
              this.displayAmount = `${o.transform(a.transform(n), 6, 4)} ${
                t.nativeToken.symbol
              }`;
            } else this.displayAmount = null;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-swap-data-element"]],
            inputs: {
              hintAppearance: "hintAppearance",
              hintDirection: "hintDirection",
              feeInfoChange: "feeInfoChange",
              gasInfo: "gasInfo",
              time: "time",
              hideHint: "hideHint",
            },
            decls: 13,
            vars: 7,
            consts: [
              [1, "provider-info"],
              [
                "class",
                "provider-info__element",
                3,
                "tuiHint",
                "tuiHintAppearance",
                "tuiHintDirection",
                "tuiHintHideDelay",
                4,
                "ngIf",
              ],
              [
                1,
                "provider-info__element",
                "time",
                3,
                "tuiHint",
                "tuiHintAppearance",
                "tuiHintDirection",
                "tuiHintHideDelay",
              ],
              [
                "src",
                "assets/images/icons/time.svg",
                "alt",
                "Time for transaction",
              ],
              [1, ""],
              ["feeData", ""],
              ["timeTooltip", ""],
              ["gasTooltip", ""],
              [
                1,
                "provider-info__element",
                3,
                "tuiHint",
                "tuiHintAppearance",
                "tuiHintDirection",
                "tuiHintHideDelay",
              ],
              ["src", "assets/images/icons/gas.svg", "alt", "Gas Price"],
              [4, "ngIf"],
              ["src", "assets/images/icons/money.svg", "alt", "Fee"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0),
                  e.DNE(1, ba, 4, 6, "div", 1),
                  e.DNE(2, Ca, 3, 5, "div", 1),
                  e.j41(3, "div", 2),
                  e.nrm(4, "img", 3),
                  e.j41(5, "div", 4),
                  e.EFF(6),
                  e.k0s()()(),
                  e.DNE(7, Ta, 2, 2, "ng-template", null, 5, e.C5r),
                  e.DNE(9, wa, 1, 0, "ng-template", null, 6, e.C5r),
                  e.DNE(11, xa, 6, 2, "ng-template", null, 7, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(10);
                e.R7$(1),
                  e.Y8G(
                    "ngIf",
                    null == a.gasInfo || null == a.gasInfo.amountInUsd
                      ? null
                      : a.gasInfo.amountInUsd.gt(0)
                  ),
                  e.R7$(1),
                  e.Y8G("ngIf", a.displayAmount),
                  e.R7$(1),
                  e.Y8G("tuiHint", o)("tuiHintAppearance", a.hintAppearance)(
                    "tuiHintDirection",
                    a.hintDirection
                  )("tuiHintHideDelay", a.hideHint ? 0 : 200),
                  e.R7$(3),
                  e.JRh(a.time);
              }
            },
            dependencies: [_.bT, h.XZ, h.ZF, h.JL, h.AZ, fe.p, ke.W],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.provider-info[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-l);justify-content:space-between;padding:var(--tui-padding-l)}.provider-info__element[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center;cursor:pointer}.provider-info__element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:.75rem}.provider-info__element.time[_ngcontent-%COMP%]{margin-left:auto}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const Oa = {
        protocolFee: {
          label: "Protocol fee",
          description: "Qubic AI protocol commission fee",
        },
        networkFee: {
          label: "Network fee",
          description: "Provider fee to proceed swap in target network",
        },
        priceImpact: {
          label: "Price impact",
          description:
            "Correlation between an incoming order and the change in the price of the asset involved caused by the trade",
        },
        slippage: {
          label: "Slippage",
          description:
            "Your transaction will be canceled if the price changes unfavorably by more than the entered percentage (a lower percentage decreases the chances of your transaction being front-run)",
        },
        rate: { label: "Rate", description: "" },
        route: { label: "Route", description: "" },
        receiver: {
          label: "Receiver address",
          description: "Address to send assets",
        },
        minReceived: {
          label: "Minimum Received",
          description:
            "Minimum amount of tokens you will receive in target blockchain. Depends on slippage",
        },
      };
      var $t = p(583801);
      function Ia(i, c) {
        if ((1 & i && e.nrm(0, "img", 5), 2 & i)) {
          const t = e.XpG();
          e.Y8G("alt", t.title)("tuiHint", t.description);
        }
      }
      const Pa = ["*"];
      let kn = (() => {
        class i {
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-transaction-details-element"]],
            inputs: { title: "title", description: "description" },
            ngContentSelectors: Pa,
            decls: 7,
            vars: 2,
            consts: [
              [1, "details-element"],
              [1, "details-element__text"],
              [
                "class",
                "details-element__text-icon",
                "src",
                "assets/images/icons/hint.svg",
                3,
                "alt",
                "tuiHint",
                4,
                "ngIf",
              ],
              [1, "details-element__text-title"],
              [1, "details-element__value"],
              [
                "src",
                "assets/images/icons/hint.svg",
                1,
                "details-element__text-icon",
                3,
                "alt",
                "tuiHint",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.NAR(),
                e.j41(0, "div", 0)(1, "div", 1),
                e.DNE(2, Ia, 1, 2, "img", 2),
                e.j41(3, "span", 3),
                e.EFF(4),
                e.k0s()(),
                e.j41(5, "div", 4),
                e.SdG(6),
                e.k0s()()),
                2 & n &&
                  (e.R7$(2),
                  e.Y8G("ngIf", a.description),
                  e.R7$(2),
                  e.JRh(a.title));
            },
            dependencies: [_.bT, h.XZ, h.ZF, h.JL, h.AZ],
            styles: [
              ".details-element[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center;width:100%;overflow:hidden}.details-element__text[_ngcontent-%COMP%]{display:flex;align-items:center}.details-element__text-title[_ngcontent-%COMP%]{white-space:nowrap}.details-element__text-icon[_ngcontent-%COMP%]{width:.75rem;height:.75rem;margin-right:var(--tui-padding-s)}.details-element__value[_ngcontent-%COMP%]{margin-left:auto;white-space:nowrap}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Ft = p(603349);
      let Ma = (() => {
          class i {
            transform(t) {
              return isNaN(t) || (0, x.gD)(t)
                ? "unknown"
                : t < 0.01
                ? "<0.01%"
                : `${t}%`;
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵpipe = e.EJ8({
              name: "priceImpactFormat",
              type: i,
              pure: !0,
            }));
          }
          return i;
        })(),
        Na = (() => {
          class i {
            transform(t, n = 2) {
              const a = new E.A(t);
              return a.isFinite() ? String(Number(a.toFixed(n))) : "Unknown";
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵpipe = e.EJ8({
              name: "slippageFormat",
              type: i,
              pure: !0,
            }));
          }
          return i;
        })();
      const Ea = function (i) {
        return [i];
      };
      function Ra(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "span", 6),
            e.EFF(2),
            e.nI1(3, "priceImpactFormat"),
            e.k0s(),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.XpG().ngLet;
          e.R7$(1),
            e.Y8G("ngClass", e.eq3(4, Ea, t)),
            e.R7$(1),
            e.SpI(
              " ",
              e.bMT(3, 2, null == n.details ? null : n.details.priceImpact),
              " "
            );
        }
      }
      function Ba(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-transaction-details-element", 3),
            e.EFF(1),
            e.nI1(2, "slippageFormat"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.Y8G("title", n.text.slippage.label)(
            "description",
            n.text.slippage.description
          ),
            e.R7$(1),
            e.SpI(" ", e.bMT(2, 3, t.details.slippage), " % ");
        }
      }
      function $a(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.EFF(1),
            e.nI1(2, "shortenAmount"),
            e.nI1(3, "bigNumberFormat"),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngIf;
          e.R7$(1), e.JRh(e.brH(2, 1, e.bMT(3, 5, t), 10, 8));
        }
      }
      function Fa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-transaction-details-element", 3),
            e.DNE(1, $a, 4, 7, "ng-container", 7),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngIf,
            n = e.XpG(2);
          e.Y8G("title", n.text.minReceived.label)(
            "description",
            n.text.minReceived.description
          ),
            e.R7$(1),
            e.Y8G("ngIf", (null == t ? null : t.tokenAmount) || t);
        }
      }
      function La(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "a", 12),
            e.nI1(1, "scannerLink"),
            e.nrm(2, "img", 13),
            e.nI1(3, "translate"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG(2).ngLet,
            n = e.XpG();
          e.Y8G(
            "safetyLink",
            e.brH(1, 2, t.wallet, t.trade.to.blockchain, n.ADDRESS_TYPE.WALLET)
          ),
            e.R7$(2),
            e.Y8G("alt", e.bMT(3, 6, "common.checkOnScanner"));
        }
      }
      function Da(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-transaction-details-element", 3)(1, "div", 8),
            e.EFF(2),
            e.nI1(3, "shortAddress"),
            e.DNE(4, La, 4, 8, "a", 9),
            e.j41(5, "button", 10),
            e.bIt("cdkCopyToClipboardCopied", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.copyToClipboard());
            }),
            e.nrm(6, "div", 11),
            e.k0s()()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.Y8G("title", n.text.receiver.label)(
            "description",
            n.text.receiver.description
          ),
            e.R7$(2),
            e.SpI(" ", e.brH(3, 6, t.wallet, 5, 5), " "),
            e.R7$(2),
            e.Y8G("ngIf", null == t.trade ? null : t.trade.to),
            e.R7$(1),
            e.Y8G("cdkCopyToClipboard", t.wallet),
            e.R7$(1),
            e.Y8G(
              "inlineSVG",
              n.isWalletCopied
                ? "assets/images/swaps/swaps-info/tick.svg"
                : "assets/images/swaps/swaps-info/copy-icon.svg"
            );
        }
      }
      function Ga(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 1)(1, "h5", 2),
            e.EFF(2, "Transaction details"),
            e.k0s(),
            e.j41(3, "app-transaction-details-element", 3),
            e.DNE(4, Ra, 4, 6, "ng-container", 4),
            e.nI1(5, "async"),
            e.k0s(),
            e.DNE(6, Ba, 3, 5, "app-transaction-details-element", 5),
            e.DNE(7, Fa, 2, 3, "app-transaction-details-element", 5),
            e.DNE(8, Da, 7, 10, "app-transaction-details-element", 5),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.XpG();
          e.R7$(3),
            e.Y8G("title", n.text.priceImpact.label)(
              "description",
              n.text.priceImpact.description
            ),
            e.R7$(1),
            e.Y8G("ngLet", e.bMT(5, 6, n.priceImpactCssClass$)),
            e.R7$(2),
            e.Y8G("ngIf", null == t.details ? null : t.details.slippage),
            e.R7$(1),
            e.Y8G("ngIf", null == t.trade ? null : t.trade.toTokenAmountMin),
            e.R7$(1),
            e.Y8G("ngIf", t.wallet);
        }
      }
      const Ha = function (i, c, t) {
        return { details: i, trade: c, wallet: t };
      };
      let Va = (() => {
        class i {
          constructor(t, n, a, o, s) {
            (this.swapsStateService = t),
              (this.walletConnector = n),
              (this.targetAddressService = a),
              (this.settingsService = o),
              (this.cdr = s),
              (this.text = Oa),
              (this.trade$ = this.swapsStateService.currentTrade$.pipe(
                (0, R.$)()
              )),
              (this.details$ = this.trade$.pipe(
                (0, k.T)((l) => l.getTradeInfo())
              )),
              (this.priceImpactCssClass$ = this.details$.pipe(
                (0, k.T)((l) => this.getPriceImpactCssClass(l.priceImpact)),
                (0, L.F)(),
                (0, F.Z)("")
              )),
              (this.walletAddress = this.getWalletAddress()),
              (this.isWalletCopied = !1),
              (this.ADDRESS_TYPE = je.A);
          }
          copyToClipboard() {
            (this.isWalletCopied = !0),
              setTimeout(() => {
                (this.isWalletCopied = !1), this.cdr.markForCheck();
              }, 700);
          }
          getPriceImpactCssClass(t) {
            return isNaN(t) || (0, x.gD)(t) || (t >= 0.01 && t < 10)
              ? ""
              : t < 0.01
              ? "transaction-details__priceImpact-low"
              : t >= 10 && t < 20
              ? "transaction-details__priceImpact-medium"
              : "transaction-details__priceImpact-high";
          }
          getWalletAddress() {
            return (this.swapsStateService.currentTrade.trade instanceof
            r.OnChainTrade
              ? this.settingsService.instantTradeValue
              : this.settingsService.crossChainRoutingValue
            ).showReceiverAddress &&
              this.targetAddressService.address &&
              "WRAPPED" !== this.swapsStateService.currentTrade.tradeType
              ? this.targetAddressService.address
              : this.walletConnector.address;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(he),
              e.rXU(U.c),
              e.rXU(ae.P),
              e.rXU(me.h),
              e.rXU(e.gRc)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-transaction-details"]],
            decls: 3,
            vars: 9,
            consts: [
              ["class", "transaction-details", 4, "ngLet"],
              [1, "transaction-details"],
              [1, "transaction-details__label"],
              [3, "title", "description"],
              [4, "ngLet"],
              [3, "title", "description", 4, "ngIf"],
              [3, "ngClass"],
              [4, "ngIf"],
              [1, "receiver-container"],
              [3, "safetyLink", 4, "ngIf"],
              [3, "cdkCopyToClipboard", "cdkCopyToClipboardCopied"],
              [1, "image", 3, "inlineSVG"],
              [3, "safetyLink"],
              ["src", "assets/images/icons/scanner.svg", 1, "image", 3, "alt"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Ga, 9, 8, "div", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.sMw(
                      5,
                      Ha,
                      e.bMT(1, 1, a.details$),
                      e.bMT(2, 3, a.trade$),
                      a.walletAddress
                    )
                  );
            },
            dependencies: [
              _.YU,
              _.bT,
              nt.A,
              B.N,
              W.ll,
              $t.dF,
              kn,
              _.Jj,
              fe.p,
              it.n,
              J.D9,
              Ft.b,
              ke.W,
              Ma,
              Na,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.transaction-details[_ngcontent-%COMP%]{padding:var(--tui-padding-l);background:var(--primary-background);border-radius:var(--tui-radius-m)}.transaction-details__label[_ngcontent-%COMP%]{margin-top:0;margin-bottom:var(--tui-padding-l);font-size:15px;text-align:center}.transaction-details__priceImpact-low[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.transaction-details__priceImpact-medium[_ngcontent-%COMP%]{color:var(--tui-warning-fill)}.transaction-details__priceImpact-high[_ngcontent-%COMP%]{color:var(--tui-error-fill)}.image[_ngcontent-%COMP%]{width:13px;height:13px}.image[_ngcontent-%COMP%]     svg{width:100%;height:100%}.receiver-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);align-items:center}.receiver-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex}@media (max-width: 651px){.transaction-details__label[_ngcontent-%COMP%]{font-size:18px}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var ja = p(817565),
        Ya = p(571617);
      function Ka(i, c) {
        1 & i && e.nrm(0, "img", 10);
      }
      function Ua(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div"), e.EFF(1), e.DNE(2, Ka, 1, 0, "img", 9), e.k0s()),
          2 & i)
        ) {
          const t = c.$implicit,
            n = c.index,
            a = e.XpG().$implicit;
          e.R7$(1),
            e.SpI(" ", t, " "),
            e.R7$(1),
            e.Y8G("ngIf", n !== a.amounts.length - 1);
        }
      }
      function Xa(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 2)(1, "div", 3),
            e.nrm(2, "img", 4),
            e.j41(3, "div", 5)(4, "div", 6),
            e.EFF(5),
            e.k0s(),
            e.j41(6, "div", 7),
            e.DNE(7, Ua, 3, 2, "div", 8),
            e.k0s()()()()),
          2 & i)
        ) {
          const t = c.$implicit;
          e.R7$(2),
            e.Y8G("src", t.provider.image, e.B4B)("alt", t.provider.label),
            e.R7$(3),
            e.JRh(t.provider.label),
            e.R7$(2),
            e.Y8G("ngForOf", t.amounts);
        }
      }
      let Sn = (() => {
          class i {
            constructor() {
              this.steps = [];
            }
            set routes(t) {
              this.steps = this.getSteps(t);
            }
            getSteps(t) {
              return t.map((n) => {
                if ("on-chain" === n.type) {
                  const l = Ya.j[n.provider] || this.getUnknownDex();
                  return {
                    provider: { label: `Swap Via ${l.name}`, image: l.image },
                    amounts: n.path.map((u) => u.symbol),
                  };
                }
                const a = ja.X[n.provider],
                  o = new fe.p(),
                  s = new ke.W();
                return {
                  provider: { label: `Bridge Via ${a.name}`, image: a.image },
                  amounts: n.path.map(
                    (l) =>
                      `${
                        "tokenAmount" in l && l.tokenAmount.gt(0)
                          ? s.transform(o.transform(l.tokenAmount), 8, 6) + " "
                          : ""
                      }${l.symbol.replaceAll("RBC", "CRAI")}`
                  ),
                };
              });
            }
            getUnknownDex() {
              return {
                name: "Unknown dex",
                color: "white",
                image: "assets/images/icons/unknown.svg",
              };
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵcmp = e.VBU({
              type: i,
              selectors: [["app-route-element"]],
              inputs: { tradeType: "tradeType", routes: "routes" },
              decls: 2,
              vars: 1,
              consts: [
                [1, "route-element"],
                ["class", "route-element__provider-row", 4, "ngFor", "ngForOf"],
                [1, "route-element__provider-row"],
                [1, "route-element__provider-data-info"],
                [1, "route-element__provider-icon", 3, "src", "alt"],
                [1, "element__provider-data"],
                [1, "route-element__provider-name"],
                [1, "route-element__provider-rate"],
                [4, "ngFor", "ngForOf"],
                [
                  "src",
                  "assets/images/icons/arrow/arrow-right.svg",
                  "alt",
                  "",
                  4,
                  "ngIf",
                ],
                ["src", "assets/images/icons/arrow/arrow-right.svg", "alt", ""],
              ],
              template: function (n, a) {
                1 & n &&
                  (e.j41(0, "div", 0), e.DNE(1, Xa, 8, 4, "div", 1), e.k0s()),
                  2 & n && (e.R7$(1), e.Y8G("ngForOf", a.steps));
              },
              dependencies: [_.Sq, _.bT],
              styles: [
                ".route-element[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.route-element__provider-data-info[_ngcontent-%COMP%]{display:flex}.route-element__provider-icon[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:var(--tui-padding-s);border-radius:50%}.route-element__provider-rate[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);color:var(--tui-text-03);font-size:12px}.route-element__provider-rate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);align-items:center}.route-element__provider-rate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:10px}.route-element__provider-name[_ngcontent-%COMP%]{color:var(--tui-text-01);font-size:15px}",
              ],
              changeDetection: 0,
            }));
          }
          return i;
        })(),
        Wa = (() => {
          class i {
            constructor() {}
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵcmp = e.VBU({
              type: i,
              selectors: [["app-success-swap-info"]],
              decls: 3,
              vars: 0,
              consts: [
                [1, "info"],
                [1, "info__title"],
              ],
              template: function (n, a) {
                1 & n &&
                  (e.j41(0, "div", 0)(1, "div", 1),
                  e.EFF(2, "Yahoo!"),
                  e.k0s()());
              },
              styles: [
                ".info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-l);padding:var(--tui-padding-l);text-align:center;background:url(/assets/images/success-bg.svg);background-size:cover}.info__title[_ngcontent-%COMP%]{color:var(--tui-positive);font-weight:500;font-size:21px}.highlight_green[_ngcontent-%COMP%]{color:var(--tui-primary);cursor:pointer}",
              ],
              changeDetection: 0,
            }));
          }
          return i;
        })();
      var Y = p(489417),
        Lt = p(638821),
        Tn = p(377489);
      function za(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "tui-notification", 2)(1, "div", 3)(2, "strong"),
            e.EFF(3, "MEV bot protection"),
            e.k0s()(),
            e.j41(4, "div", 4),
            e.EFF(5, " Use private RPC to protect your trades "),
            e.j41(6, "form", 5),
            e.nrm(7, "tui-toggle", 6),
            e.k0s()()()),
          2 & i)
        ) {
          const t = e.XpG().ngLet;
          e.Y8G("status", t.value.useMevBotProtection ? "success" : "warning")(
            "tuiHint",
            "You can turn on the MEV-bot protection, this will ensure better security of your trade."
          )("tuiHintManual", !t.value.useMevBotProtection),
            e.R7$(6),
            e.Y8G("formGroup", t);
        }
      }
      function Za(i, c) {
        if (
          (1 & i &&
            (e.qex(0), e.DNE(1, za, 8, 4, "tui-notification", 1), e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(1), e.Y8G("ngIf", t.displayMev);
        }
      }
      let Qa = (() => {
        class i {
          set trade(t) {
            const a = t?.from.price.multipliedBy(t?.from.tokenAmount);
            this._routingForm$.next(
              t?.from.blockchain !== t?.to.blockchain
                ? this.settingsService.crossChainRouting
                : this.settingsService.instantTrade
            ),
              (this.displayMev =
                !!a && a.gte(1e3) && !this.headerStore.isMobile),
              this.displayMev ||
                this.settings.patchValue({ useMevBotProtection: !1 });
          }
          get settings() {
            return this._routingForm$.getValue();
          }
          constructor(t, n, a, o) {
            (this.settingsService = t),
              (this.destroy$ = n),
              (this.modalService = a),
              (this.headerStore = o),
              (this._routingForm$ = new N.t(
                this.settingsService.crossChainRouting
              )),
              (this.routingForm$ = this._routingForm$.asObservable()),
              (this.displayMev = !1),
              this.subscribeOnRoutingForm();
          }
          subscribeOnRoutingForm() {
            this.routingForm$
              .pipe(
                (0, A.n)((t) => t.valueChanges),
                (0, F.Z)(this.settingsService.crossChainRouting.value),
                (0, L.F)(),
                (0, Te.J)(),
                (0, q.Q)(this.destroy$)
              )
              .subscribe(([t, n]) => {
                t.useMevBotProtection !== n.useMevBotProtection &&
                  n.useMevBotProtection &&
                  this.modalService.openMevBotModal().subscribe();
              });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(me.h),
              e.rXU(j.ew),
              e.rXU(ie.B),
              e.rXU(K.X)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-mev-bot"]],
            inputs: { trade: "trade" },
            features: [e.Jv_([j.ew])],
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngLet"],
              [
                "class",
                "mev-bot",
                "tuiHintDirection",
                "right",
                3,
                "status",
                "tuiHint",
                "tuiHintManual",
                4,
                "ngIf",
              ],
              [
                "tuiHintDirection",
                "right",
                1,
                "mev-bot",
                3,
                "status",
                "tuiHint",
                "tuiHintManual",
              ],
              [1, "tui-text_body-l-2"],
              [1, "mev-bot__row"],
              [1, "settings__form", 3, "formGroup"],
              [
                "id",
                "useMevBotProtection",
                "formControlName",
                "useMevBotProtection",
                1,
                "mev-bot__toggle",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Za, 2, 1, "ng-container", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.routingForm$));
            },
            dependencies: [
              _.bT,
              B.N,
              Y.qT,
              Y.BC,
              Y.cb,
              Y.j4,
              Y.JD,
              h.XZ,
              h.ZF,
              h.JL,
              h.Hg,
              h.AZ,
              Tn.sJ,
              Lt.v,
              _.Jj,
            ],
            styles: [
              '.mev-bot[_ngcontent-%COMP%]{z-index:0;transition:.2s ease-in-out}.mev-bot__row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mev-bot[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background:url(/assets/images/mev-pattern.png);background-size:cover;opacity:.5;content:""}',
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Ja(i, c) {
        1 & i && (e.qex(0), e.EFF(1, "Preview Swap"), e.bVm());
      }
      function qa(i, c) {
        1 & i && (e.qex(0), e.EFF(1, "Success Swap"), e.bVm());
      }
      function eo(i, c) {
        1 & i && (e.qex(0), e.EFF(1, " Swap "), e.bVm());
      }
      function to(i, c) {
        if ((1 & i && (e.j41(0, "div", 29), e.EFF(1), e.k0s()), 2 & i)) {
          const t = c.ngIf;
          e.R7$(1), e.SpI(" ~ $", t, "\xa0-\xa0 ");
        }
      }
      const ot = function (i) {
        return { background: i };
      };
      function no(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "div", 20)(2, "div", 21)(3, "div", 22),
            e.nrm(4, "img", 23),
            e.k0s(),
            e.j41(5, "img", 24),
            e.bIt("error", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onImageError(a));
            }),
            e.k0s()(),
            e.j41(6, "div", 25)(7, "div", 26),
            e.EFF(8),
            e.nI1(9, "shortenAmount"),
            e.nI1(10, "bigNumberFormat"),
            e.k0s(),
            e.DNE(11, to, 2, 1, "div", 27),
            e.j41(12, "div", 28),
            e.EFF(13),
            e.k0s()()(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG().ngLet;
          e.R7$(3),
            e.Aen(e.eq3(16, ot, t.tradeInfo.fromAsset.secondColor)),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.fromAsset.secondImage,
              e.B4B
            )("alt", t.tradeInfo.fromAsset.secondImage),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.fromAsset.mainImage,
              e.B4B
            )("alt", t.tradeInfo.fromAsset.mainLabel),
            e.R7$(3),
            e.Lme(
              " ",
              e.brH(
                9,
                10,
                e.bMT(10, 14, t.tradeInfo.fromValue.tokenAmount),
                8,
                6
              ),
              "\xa0",
              t.tradeInfo.fromAsset.mainLabel,
              " "
            ),
            e.R7$(3),
            e.Y8G("ngIf", t.tradeInfo.fromValue.fiatAmount),
            e.R7$(2),
            e.SpI(" on ", t.tradeInfo.fromAsset.secondLabel, " ");
        }
      }
      function io(i, c) {
        if ((1 & i && (e.j41(0, "div", 29), e.EFF(1), e.k0s()), 2 & i)) {
          const t = c.ngIf;
          e.R7$(1), e.SpI(" ~ $", t, "\xa0-\xa0 ");
        }
      }
      function ao(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 20)(1, "div", 30)(2, "div", 21)(3, "div", 22),
            e.nrm(4, "img", 23),
            e.k0s(),
            e.j41(5, "img", 24),
            e.bIt("error", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onImageError(a));
            }),
            e.k0s()(),
            e.j41(6, "div", 26),
            e.EFF(7),
            e.nI1(8, "shortenAmount"),
            e.nI1(9, "bigNumberFormat"),
            e.k0s()(),
            e.j41(10, "div", 31),
            e.DNE(11, io, 2, 1, "div", 27),
            e.j41(12, "div", 28),
            e.EFF(13),
            e.k0s()()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet;
          e.R7$(3),
            e.Aen(e.eq3(16, ot, t.tradeInfo.fromAsset.secondColor)),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.fromAsset.secondImage,
              e.B4B
            )("alt", t.tradeInfo.fromAsset.secondImage),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.fromAsset.mainImage,
              e.B4B
            )("alt", t.tradeInfo.fromAsset.mainLabel),
            e.R7$(2),
            e.Lme(
              " ",
              e.brH(
                8,
                10,
                e.bMT(9, 14, t.tradeInfo.fromValue.tokenAmount),
                8,
                6
              ),
              "\xa0",
              t.tradeInfo.fromAsset.mainLabel,
              " "
            ),
            e.R7$(4),
            e.Y8G("ngIf", t.tradeInfo.fromValue.fiatAmount),
            e.R7$(2),
            e.SpI(" on ", t.tradeInfo.fromAsset.secondLabel, " ");
        }
      }
      const oo = function () {
        return [];
      };
      function ro(i, c) {
        if ((1 & i && e.nrm(0, "app-route-element", 32), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G(
            "routes",
            (null == t.tradeState ? null : t.tradeState.routes) || e.lJ4(2, oo)
          )("tradeType", t.tradeState.tradeType);
        }
      }
      const so = function (i, c, t) {
        return { type: i, needApprove: c, needAuthWallet: t };
      };
      function co(i, c) {
        if ((1 & i && e.nrm(0, "app-transaction-state", 33), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G(
            "transactionData",
            e.sMw(
              2,
              so,
              t.tradeInfo.fromAsset.secondLabel ===
                t.tradeInfo.toAsset.secondLabel
                ? "swap"
                : "bridge",
              null == t.tradeState ? null : t.tradeState.needApprove,
              t.tradeState.needAuthWallet
            )
          )("state", t.transaction.step);
        }
      }
      function lo(i, c) {
        if ((1 & i && (e.j41(0, "div", 29), e.EFF(1), e.k0s()), 2 & i)) {
          const t = c.ngIf;
          e.R7$(1), e.SpI(" ~ $", t, "\xa0-\xa0 ");
        }
      }
      function po(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "div", 20)(2, "div", 21)(3, "div", 22),
            e.nrm(4, "img", 23),
            e.k0s(),
            e.j41(5, "img", 24),
            e.bIt("error", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onImageError(a));
            }),
            e.k0s()(),
            e.j41(6, "div", 25)(7, "div", 26),
            e.EFF(8),
            e.nI1(9, "shortenAmount"),
            e.nI1(10, "bigNumberFormat"),
            e.k0s(),
            e.DNE(11, lo, 2, 1, "div", 27),
            e.j41(12, "div", 28),
            e.EFF(13),
            e.k0s()()(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG().ngLet;
          e.R7$(3),
            e.Aen(e.eq3(16, ot, t.tradeInfo.toAsset.secondColor)),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.toAsset.secondImage,
              e.B4B
            )("alt", t.tradeInfo.toAsset.secondImage),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.toAsset.mainImage,
              e.B4B
            )("alt", t.tradeInfo.toAsset.mainLabel),
            e.R7$(3),
            e.Lme(
              " ",
              e.brH(
                9,
                10,
                e.bMT(10, 14, t.tradeInfo.toValue.tokenAmount),
                8,
                6
              ),
              "\xa0",
              t.tradeInfo.toAsset.mainLabel,
              " "
            ),
            e.R7$(3),
            e.Y8G("ngIf", t.tradeInfo.toValue.fiatAmount),
            e.R7$(2),
            e.SpI("on ", t.tradeInfo.toAsset.secondLabel, "");
        }
      }
      function uo(i, c) {
        if ((1 & i && (e.j41(0, "div", 29), e.EFF(1), e.k0s()), 2 & i)) {
          const t = c.ngIf;
          e.R7$(1), e.SpI(" ~ $", t, "\xa0-\xa0 ");
        }
      }
      function _o(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 20)(1, "div", 30)(2, "div", 21)(3, "div", 22),
            e.nrm(4, "img", 23),
            e.k0s(),
            e.j41(5, "img", 24),
            e.bIt("error", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onImageError(a));
            }),
            e.k0s()(),
            e.j41(6, "div", 26),
            e.EFF(7),
            e.nI1(8, "shortenAmount"),
            e.nI1(9, "bigNumberFormat"),
            e.k0s()(),
            e.j41(10, "div", 31),
            e.DNE(11, uo, 2, 1, "div", 27),
            e.j41(12, "div", 28),
            e.EFF(13),
            e.k0s()()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet;
          e.R7$(3),
            e.Aen(e.eq3(16, ot, t.tradeInfo.toAsset.secondColor)),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.toAsset.secondImage,
              e.B4B
            )("alt", t.tradeInfo.toAsset.secondImage),
            e.R7$(1),
            e.Y8G(
              "src",
              t.tradeInfo.toAsset.mainImage,
              e.B4B
            )("alt", t.tradeInfo.toAsset.mainLabel),
            e.R7$(2),
            e.Lme(
              " ",
              e.brH(8, 10, e.bMT(9, 14, t.tradeInfo.toValue.tokenAmount), 8, 6),
              "\xa0",
              t.tradeInfo.toAsset.mainLabel,
              " "
            ),
            e.R7$(4),
            e.Y8G("ngIf", t.tradeInfo.toValue.fiatAmount),
            e.R7$(2),
            e.SpI(" on ", t.tradeInfo.toAsset.secondLabel, " ");
        }
      }
      const mo = function (i, c) {
        return { fee: i, nativeToken: c };
      };
      function ho(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 34),
            e.nrm(1, "app-swap-data-element", 35),
            e.nI1(2, "async"),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.R7$(1),
            e.Y8G(
              "gasInfo",
              n.getGasData(
                null == t || null == t.tradeState ? null : t.tradeState.trade
              )
            )(
              "feeInfoChange",
              e.l_i(
                5,
                mo,
                (null == t.tradeState ? null : t.tradeState.feeInfo) || null,
                e.bMT(2, 3, n.nativeToken$)
              )
            )("time", n.getAverageTime(null == t ? null : t.tradeState));
        }
      }
      function go(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 36)(1, "a", 37),
            e.nI1(2, "scannerLink"),
            e.EFF(3, " Explorer "),
            e.k0s(),
            e.j41(4, "button", 38),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.navigateToHistory());
            }),
            e.EFF(5, " See Details > "),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.R7$(1),
            e.Y8G(
              "safetyLink",
              e.brH(
                2,
                1,
                t.transaction.data.hash,
                t.transaction.data.toBlockchain,
                n.ADDRESS_TYPE.TRANSACTION
              )
            );
        }
      }
      function vo(i, c) {
        1 & i &&
          (e.j41(0, "div", 39), e.nrm(1, "app-transaction-details"), e.k0s());
      }
      function fo(i, c) {
        1 & i &&
          (e.j41(0, "div", 40), e.nrm(1, "app-success-swap-info"), e.k0s());
      }
      function bo(i, c) {
        if ((1 & i && e.nrm(0, "app-mev-bot", 41), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G("trade", null == t.tradeState ? null : t.tradeState.trade);
        }
      }
      function Co(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 42),
            e.bIt("click", function () {
              const o = e.eBV(t).ngLet;
              return e.Njj(null == o ? null : o.action());
            }),
            e.EFF(1),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet;
          e.Y8G("disabled", null == t ? null : t.disabled),
            e.R7$(1),
            e.SpI(" ", null == t ? null : t.label, " ");
        }
      }
      function ko(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 38),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.navigateToHistory());
            }),
            e.EFF(1, " See Details > "),
            e.k0s();
        }
      }
      const So = function (i) {
        return { "preview__data-container_with-line": i };
      };
      function To(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-window-container"),
            e.qex(1, 1),
            e.j41(2, "app-back-button", 2),
            e.bIt("onClick", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.backToForm());
            }),
            e.k0s(),
            e.j41(3, "span", 3),
            e.DNE(4, Ja, 2, 0, "ng-container", 4),
            e.DNE(5, qa, 2, 0, "ng-container", 4),
            e.DNE(6, eo, 2, 0, "ng-container", 4),
            e.k0s(),
            e.bVm(),
            e.qex(7),
            e.j41(8, "div", 5)(9, "div", 6),
            e.DNE(10, no, 14, 18, "ng-container", 7),
            e.nI1(11, "async"),
            e.DNE(12, ao, 14, 18, "ng-template", null, 8, e.C5r),
            e.DNE(14, ro, 1, 3, "app-route-element", 9),
            e.DNE(15, co, 1, 6, "app-transaction-state", 10),
            e.DNE(16, po, 14, 18, "ng-container", 7),
            e.nI1(17, "async"),
            e.DNE(18, _o, 14, 18, "ng-template", null, 11, e.C5r),
            e.k0s(),
            e.DNE(20, ho, 3, 8, "div", 12),
            e.DNE(21, go, 6, 5, "div", 13),
            e.DNE(22, vo, 2, 0, "div", 14),
            e.DNE(23, fo, 2, 0, "div", 15),
            e.k0s(),
            e.DNE(24, bo, 1, 1, "app-mev-bot", 16),
            e.nI1(25, "async"),
            e.j41(26, "div", 17),
            e.DNE(27, Co, 2, 2, "button", 18),
            e.nI1(28, "async"),
            e.DNE(29, ko, 2, 0, "button", 19),
            e.k0s(),
            e.bVm(),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet,
            n = e.sdS(13),
            a = e.sdS(19),
            o = e.XpG();
          e.R7$(2),
            e.Y8G("isMobile", !1),
            e.R7$(2),
            e.Y8G("ngIf", "idle" === t.transaction.step),
            e.R7$(1),
            e.Y8G("ngIf", "success" === t.transaction.step),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              "idle" !== t.transaction.step && "success" !== t.transaction.step
            ),
            e.R7$(3),
            e.Y8G("ngClass", e.eq3(26, So, "idle" === t.transaction.step)),
            e.R7$(1),
            e.Y8G("ngIf", !1 === e.bMT(11, 18, o.isMobile$))("ngIfElse", n),
            e.R7$(4),
            e.Y8G("ngIf", "idle" === t.transaction.step),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              "idle" !== t.transaction.step && "success" !== t.transaction.step
            ),
            e.R7$(1),
            e.Y8G("ngIf", !1 === e.bMT(17, 20, o.isMobile$))("ngIfElse", a),
            e.R7$(4),
            e.Y8G("ngIf", "success" !== t.transaction.step),
            e.R7$(1),
            e.Y8G("ngIf", "success" === t.transaction.step),
            e.R7$(1),
            e.Y8G("ngIf", "success" !== t.transaction.step),
            e.R7$(1),
            e.Y8G("ngIf", "success" === t.transaction.step),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              e.bMT(
                25,
                22,
                "success" !== t.transaction.step && o.isMevBotProtectedChains$
              )
            ),
            e.R7$(3),
            e.Y8G("ngLet", e.bMT(28, 24, o.buttonState$)),
            e.R7$(2),
            e.Y8G("ngIf", "destinationPending" === t.transaction.step);
        }
      }
      const wo = function (i, c, t) {
        return { tradeInfo: i, tradeState: c, transaction: t };
      };
      let yo = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b, w) {
            (this.tradePageService = t),
              (this.previewSwapService = n),
              (this.router = a),
              (this.swapsFormService = o),
              (this.walletConnector = s),
              (this.modalService = l),
              (this.injector = u),
              (this.tokensService = d),
              (this.headerStore = m),
              (this.platformConfigurationService = v),
              (this.tokensStoreService = g),
              (this.authService = f),
              (this.gtmService = T),
              (this.swapsStateService = b),
              (this.tradeInfoManager = w),
              (this.SWAP_PROVIDER_TYPE = V.T),
              (this.tradeInfo$ = this.previewSwapService.tradeInfo$),
              (this.nativeToken$ = this.swapsFormService.nativeToken$),
              (this.isMevBotProtectedChains$ =
                this.swapsFormService.fromBlockchain$.pipe(
                  (0, k.T)((O) => dn.some((I) => I === O))
                )),
              (this.tradeState$ =
                this.previewSwapService.selectedTradeState$.pipe(
                  (0, R.$)(gt.Aj),
                  (0, k.T)((O) => {
                    const I = O.trade.getTradeInfo();
                    return { ...O, feeInfo: I?.feeInfo };
                  })
                )),
              (this.transactionState$ =
                this.previewSwapService.transactionState$),
              (this.buttonState$ = this.transactionState$.pipe(
                (0, G.v)(
                  this.tradeState$.pipe((0, R.$)()),
                  this.swapsStateService.notEnoughBalance$
                ),
                (0, A.n)((O) => this.getState(...O)),
                (0, F.Z)({
                  action: () => {},
                  label: "Select Tokens",
                  disabled: !0,
                })
              )),
              (this.isMobile$ = this.headerStore.getMobileDisplayStatus()),
              (this.ADDRESS_TYPE = je.A),
              this.previewSwapService.setSelectedProvider(),
              this.previewSwapService.activatePage();
          }
          backToForm() {
            this.tradePageService.setState("form"),
              this.previewSwapService.setNextTxState({
                step: "inactive",
                data: {},
              });
          }
          startTrade() {
            var t = this;
            return (0, C.A)(function* () {
              yield t.previewSwapService.requestTxSign();
            })();
          }
          swap() {
            var t = this;
            return (0, C.A)(function* () {
              t.previewSwapService.startSwap();
            })();
          }
          approve() {
            var t = this;
            return (0, C.A)(function* () {
              yield t.previewSwapService.startApprove();
            })();
          }
          authWallet() {
            this.previewSwapService.startAuthWallet();
          }
          navigateToHistory() {
            var t = this;
            return (0, C.A)(function* () {
              const a =
                (yield (0, D._)(t.tradeState$)).trade instanceof
                z.CrossChainTrade;
              yield t.router.navigate(["/history"], {
                queryParamsHandling: "preserve",
                state: { type: a ? "cross-chain" : "on-chain" },
              });
            })();
          }
          logoutAndChangeWallet() {
            this.authService.disconnectWallet(),
              this.gtmService.fireClickOnConnectWalletButtonEvent(),
              this.modalService.openWalletModal(this.injector).subscribe();
          }
          switchChain() {
            var t = this;
            return (0, C.A)(function* () {
              const n = t.swapsFormService.inputValue.fromBlockchain;
              (yield t.walletConnector.switchChain(n)) &&
                (yield t.previewSwapService.requestTxSign());
            })();
          }
          isTradeWithPermit2Approve(t) {
            return (
              t.trade instanceof r.EvmOnChainTrade &&
              t.trade.permit2ApproveConfig.usePermit2Approve
            );
          }
          connectWallet() {
            this.modalService
              .openWalletModal(this.injector)
              .pipe(
                (0, A.n)(() =>
                  (0, ce.p)([
                    this.walletConnector.addressChange$,
                    this.swapsStateService.notEnoughBalance$,
                  ])
                ),
                (0, A.n)(([t, n]) =>
                  t && !n
                    ? this.previewSwapService.requestTxSign()
                    : (0, y.of)(null)
                )
              )
              .subscribe();
          }
          getAverageTime(t) {
            if (t?.tradeType) {
              if (bn(t.trade)) return "7 D";
              const n = Et.r[t.tradeType],
                o =
                  this.platformConfigurationService.providersAverageTime?.[
                    t.tradeType
                  ];
              return o ? `${o} M` : `${n.averageTime} M`;
            }
            return t instanceof z.CrossChainTrade ? "30 M" : "3 M";
          }
          getGasData(t) {
            return this.tradeInfoManager.getGasData(t);
          }
          getState(t, n, a) {
            var o = this;
            return (0, C.A)(function* () {
              const s =
                  o.swapsFormService.inputValue.fromBlockchain !==
                  o.swapsFormService.inputValue.toBlockchain,
                l = o.swapsFormService.inputValue.fromBlockchain,
                u = r.BlockchainsInfo.getChainType(l),
                d = {
                  action: () => {},
                  label: fn.getLabel(t.step, s ? "bridge" : "swap"),
                  disabled: !0,
                };
              if (
                ("approveReady" === t.step
                  ? ((d.disabled = !1),
                    (d.label = o.isTradeWithPermit2Approve(n)
                      ? "Approve and Permit"
                      : d.label),
                    (d.action = o.approve.bind(o)))
                  : "swapReady" === t.step
                  ? ((d.disabled = !1), (d.action = o.swap.bind(o)))
                  : "idle" === t.step
                  ? ((d.disabled = !1), (d.action = o.startTrade.bind(o)))
                  : "success" === t.step || "destinationPending" === t.step
                  ? ((d.disabled = !1),
                    (d.label = "Done"),
                    (d.action = o.backToForm.bind(o)))
                  : "authWalletReady" === t.step &&
                    ((d.disabled = !1), (d.action = o.authWallet.bind(o))),
                ((t.data.wrongNetwork &&
                  !r.BlockchainsInfo.isEvmBlockchainName(l) &&
                  "success" !== t.step) ||
                  u !== o.walletConnector.chainType) &&
                  ((d.disabled = !1),
                  (d.action = () => o.logoutAndChangeWallet()),
                  (d.label = "Change Wallet")),
                t.data?.wrongNetwork &&
                  ("approvePending" === t.step ||
                    "approveReady" === t.step ||
                    "swapRequest" === t.step ||
                    "swapReady" === t.step ||
                    "idle" === t.step) &&
                  r.BlockchainsInfo.isEvmBlockchainName(l) &&
                  u === o.walletConnector.chainType &&
                  ((d.disabled = !1),
                  (d.action = () => o.switchChain()),
                  (d.label = "Change network")),
                !1 === t.data?.activeWallet &&
                  ((d.disabled = !1),
                  (d.action = () => o.connectWallet()),
                  (d.label = "Connect wallet")),
                n?.error &&
                  ((d.disabled = !0),
                  (d.action = () => {}),
                  (d.label = n.error.message)),
                a &&
                  "success" !== t.step &&
                  "destinationPending" !== t.step &&
                  ((d.disabled = !0),
                  (d.action = () => {}),
                  (d.label = "Insufficient funds")),
                ("idle" === t.step || "swapReady" === t.step) &&
                  !s &&
                  n?.trade?.type === r.ON_CHAIN_TRADE_TYPE.WRAPPED)
              ) {
                const g = (0, x.Qb)(
                  o.swapsFormService.inputValue.fromToken.address,
                  r.nativeTokensList[l].address
                );
                d.label = g ? "Wrap" : "Unwrap";
              }
              return d;
            })();
          }
          ngOnDestroy() {
            this.previewSwapService.deactivatePage();
          }
          onImageError(t) {
            this.tokensService.onTokenImageError(t);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(se.p),
              e.rXU(Ie),
              e.rXU($e.Ix),
              e.rXU(M.K),
              e.rXU(U.c),
              e.rXU(ie.B),
              e.rXU(e.zZn),
              e.rXU(_e.m),
              e.rXU(K.X),
              e.rXU(Oe.p),
              e.rXU(Z.p),
              e.rXU(le.u),
              e.rXU(Ue.A),
              e.rXU(he),
              e.rXU(Rt)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-preview-swap"]],
            decls: 4,
            vars: 11,
            consts: [
              [4, "ngLet"],
              ["header", ""],
              [3, "isMobile", "onClick"],
              [1, "back-button__text"],
              [4, "ngIf"],
              [1, "preview"],
              [1, "preview__data-container", 3, "ngClass"],
              [4, "ngIf", "ngIfElse"],
              ["mobileInputTokenContainer", ""],
              [3, "routes", "tradeType", 4, "ngIf"],
              [3, "transactionData", "state", 4, "ngIf"],
              ["mobileOutputTokenContainer", ""],
              ["class", "preview__swap-info", 4, "ngIf"],
              ["class", "preview__buttons", 4, "ngIf"],
              ["class", "preview__transaction-details", 4, "ngIf"],
              ["class", "preview__success-info", 4, "ngIf"],
              [3, "trade", 4, "ngIf"],
              [1, "preview__action-container"],
              [
                "class",
                "preview__action-button",
                "tuiButton",
                "",
                "appearance",
                "primary",
                "type",
                "button",
                "size",
                "m",
                3,
                "disabled",
                "click",
                4,
                "ngLet",
              ],
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
                4,
                "ngIf",
              ],
              [1, "preview__io-container"],
              [1, "preview__token-container"],
              [1, "preview__second-image-container"],
              [3, "src", "alt"],
              [1, "preview__main-image", 3, "src", "alt", "error"],
              [1, "preview__amount-container"],
              [1, "preview__token-amount"],
              ["class", "preview__fiat-amount", 4, "ngIf"],
              [1, "preview__token-info"],
              [1, "preview__fiat-amount"],
              [1, "preview__token-and-amount-container"],
              [1, "preview__fiat-container"],
              [3, "routes", "tradeType"],
              [3, "transactionData", "state"],
              [1, "preview__swap-info"],
              [3, "gasInfo", "feeInfoChange", "time"],
              [1, "preview__buttons"],
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
                "safetyLink",
              ],
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
              [1, "preview__transaction-details"],
              [1, "preview__success-info"],
              [3, "trade"],
              [
                "tuiButton",
                "",
                "appearance",
                "primary",
                "type",
                "button",
                "size",
                "m",
                1,
                "preview__action-button",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, To, 30, 28, "app-window-container", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async"),
                e.nI1(3, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.sMw(
                      7,
                      wo,
                      e.bMT(1, 1, a.tradeInfo$),
                      e.bMT(2, 3, a.tradeState$),
                      e.bMT(3, 5, a.transactionState$)
                    )
                  );
            },
            dependencies: [
              _.YU,
              _.bT,
              nt.A,
              B.N,
              Bt.X,
              Pe.r,
              oe.SM,
              Cn,
              Va,
              Sn,
              fn,
              Wa,
              Qa,
              _.Jj,
              fe.p,
              it.n,
              ke.W,
            ],
            styles: [
              '[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-m);margin-bottom:var(--tui-padding-m)}.preview__buttons[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-m)}.preview__buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;text-decoration:none}.preview__data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-s);padding:var(--tui-padding-l);background:var(--primary-background);border-radius:var(--tui-radius-m)}.preview__data-container[_ngcontent-%COMP%]   app-route-element[_ngcontent-%COMP%]{margin-left:var(--tui-padding-l)}.preview__data-container[_ngcontent-%COMP%]   app-route-element[_ngcontent-%COMP%]     .route-element__provider-data-info{align-items:center}.preview__io-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center}.preview__token-container[_ngcontent-%COMP%]{display:flex;height:30px}.preview__second-image-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:45px;height:100%;overflow:hidden;border-radius:var(--tui-radius-s) 0 0 var(--tui-radius-s)}.preview__second-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:100%;height:25px;margin-left:3px}.preview__main-image[_ngcontent-%COMP%]{width:30px;margin-left:-15px;background:var(--primary-background);border-radius:100%;outline:2px solid var(--primary-background)}.preview__amount-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%}.preview__amount-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{line-height:1rem}.preview__token-amount[_ngcontent-%COMP%]{width:100%;font-weight:500}.preview__fiat-amount[_ngcontent-%COMP%], .preview__token-info[_ngcontent-%COMP%]{color:var(--tui-text-03)}.preview__action-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center}.preview__action-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-shrink:1;width:100%}.preview__action-button[_ngcontent-%COMP%]{width:100%}.preview__success-info[_ngcontent-%COMP%]{overflow:hidden;background:var(--primary-background);border-radius:var(--tui-radius-m)}app-swap-data-element[_ngcontent-%COMP%]     .provider-info{padding:var(--tui-padding-l);background:var(--primary-background);border-radius:var(--tui-radius-m)}@media (max-width: 651px){app-route-element[_ngcontent-%COMP%]{z-index:1}app-route-element[_ngcontent-%COMP%]     .route-element{gap:var(--tui-padding-xl)}app-route-element[_ngcontent-%COMP%]     .route-element__provider-icon{background:var(--io-background)}app-transaction-state[_ngcontent-%COMP%]{margin:var(--tui-padding-s) var(--tui-padding-l) var(--tui-padding-l) var(--tui-padding-l)}.preview__data-container[_ngcontent-%COMP%]{position:relative;gap:0;margin-top:2px}.preview__data-container_with-line[_ngcontent-%COMP%]{gap:24px}.preview__data-container_with-line[_ngcontent-%COMP%]:before{position:absolute;top:16px;left:27px;z-index:0;width:2px;height:calc(100% - 70px);background:var(--tui-base-04);content:""}.preview__data-container[_ngcontent-%COMP%]   app-route-element[_ngcontent-%COMP%]{margin-left:0}.preview__io-container[_ngcontent-%COMP%]{z-index:1;display:flex;flex-direction:column;gap:var(--tui-padding-xs);align-items:flex-start}.preview__token-and-amount-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center}.preview__fiat-container[_ngcontent-%COMP%]{display:flex;margin-left:63px}.preview__token-container[_ngcontent-%COMP%]{height:25px}.preview__token-amount[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:18px;line-height:18px;letter-spacing:.54px}.preview__main-image[_ngcontent-%COMP%]{width:25px}}app-mev-bot[_ngcontent-%COMP%]{display:block;margin-bottom:var(--tui-padding-m)}',
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var wn = p(519968);
      const Ao = [[["", "left", ""]], [["", "right", ""]]],
        xo = function (i, c, t, n, a) {
          return {
            "io-container_round-top": i,
            "io-container_round-bottom": c,
            "io-container_round-all": t,
            "io-container_round-none": n,
            "io-container_margin-top": a,
          };
        },
        Oo = ["[left]", "[right]"];
      let yn = (() => {
        class i {
          constructor() {
            this.round = "all";
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-input-output-container"]],
            inputs: { round: "round", marginTop: "marginTop" },
            ngContentSelectors: Oo,
            decls: 5,
            vars: 7,
            consts: [
              [1, "io-container", 3, "ngClass"],
              [1, "io-left"],
              [1, "io-right"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.NAR(Ao),
                e.j41(0, "div", 0)(1, "div", 1),
                e.SdG(2),
                e.k0s(),
                e.j41(3, "div", 2),
                e.SdG(4, 1),
                e.k0s()()),
                2 & n &&
                  e.Y8G(
                    "ngClass",
                    e.s1E(
                      1,
                      xo,
                      "top" === a.round,
                      "bottom" === a.round,
                      "all" === a.round,
                      "none" === a.round,
                      a.marginTop
                    )
                  );
            },
            dependencies: [_.YU],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.io-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-m);justify-content:center;padding:var(--tui-padding-l);background:var(--io-background);border-radius:var(--tui-radius-m);transition:.2s ease-in-out}.io-container_round-top[_ngcontent-%COMP%]{padding-bottom:var(--tui-padding-s);border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.io-container_round-bottom[_ngcontent-%COMP%]{padding-top:var(--tui-padding-s);border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.io-container_round-all[_ngcontent-%COMP%]{border-radius:var(--tui-radius-s)}.io-container_round-none[_ngcontent-%COMP%]{padding-top:var(--tui-padding-s);border-radius:0}.io-left[_ngcontent-%COMP%], .io-right[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center}@media (max-width: 651px){.io-container[_ngcontent-%COMP%]{flex-direction:column;gap:0;justify-content:flex-start}.io-container_round-none[_ngcontent-%COMP%], .io-container_round-bottom[_ngcontent-%COMP%]{padding-top:var(--tui-padding-xl)}.io-container_margin-top[_ngcontent-%COMP%]{margin-top:2px}.io-left[_ngcontent-%COMP%]{margin-bottom:var(--tui-padding-m)}.io-right[_ngcontent-%COMP%]{flex:none;align-items:flex-start;height:60px}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var An = p(644455);
      let xn = (() => {
        class i {
          set amountValue(t) {
            ("input" !== this.inputMode ||
              (t?.actualValue && t?.actualValue.gt(0))) &&
              this.updateAmountValue(t);
          }
          updateAmountValue(t) {
            let n = t?.actualValue ? t.visibleValue : "";
            if ("input" !== this.inputMode) {
              const a = new ke.W();
              (n = t?.actualValue
                ? a.transform(t?.visibleValue, 12, 6, !0)
                : ""),
                (n = An.B.transformValue(n, this.selectedToken?.decimals));
            }
            this.amount.setValue(n, { emitViewToModelChange: !1 });
          }
          get formattedAmount() {
            return this.amount?.value.split(",").join("");
          }
          constructor(t, n) {
            (this.translateService = t),
              (this.swapFormService = n),
              (this.inputPlaceholder$ = this.translateService.get(
                "errors.noEnteredAmount"
              )),
              (this.outputPlaceholder = ""),
              (this.amount = new Y.MJ("")),
              (this.defaultDecimals = 18),
              (this.amountUpdated = new e.bkB());
          }
          handleAmountChange(t) {
            "output" !== this.inputMode &&
              (this.amount.setValue(t, { emitViewToModelChange: !1 }),
              this.amountUpdated.emit({
                visibleValue: t,
                actualValue: new E.A(this.formattedAmount),
              }));
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(J.c$), e.rXU(M.K));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-amount-transput"]],
            inputs: {
              selectedToken: "selectedToken",
              formType: "formType",
              inputMode: "inputMode",
              amountValue: "amountValue",
            },
            outputs: { amountUpdated: "amountUpdated" },
            decls: 3,
            vars: 6,
            consts: [
              [1, "amount-transput"],
              [
                "appTokenAmount",
                "",
                "autocomplete",
                "off",
                "name",
                "token-amount",
                "inputmode",
                "decimal",
                "id",
                "token-amount-input-element",
                1,
                "amount-transput__input",
                3,
                "placeholder",
                "formControl",
                "decimals",
                "readonly",
                "amountChange",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "label", 0)(1, "input", 1),
                e.bIt("amountChange", function (s) {
                  return a.handleAmountChange(s);
                }),
                e.nI1(2, "async"),
                e.k0s()()),
                2 & n &&
                  (e.R7$(1),
                  e.Y8G(
                    "placeholder",
                    "output" !== a.inputMode
                      ? e.bMT(2, 4, a.inputPlaceholder$)
                      : a.outputPlaceholder
                  )("formControl", a.amount)(
                    "decimals",
                    (null == a.selectedToken
                      ? null
                      : a.selectedToken.decimals) || a.defaultDecimals
                  )("readonly", "output" === a.inputMode));
            },
            dependencies: [Y.me, Y.BC, Y.l_, An.B, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.amount-transput[_ngcontent-%COMP%]{width:100%;height:35px}.amount-transput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{letter-spacing:.6px}.amount-transput__input[_ngcontent-%COMP%]{width:100%;height:21px;padding:0;color:var(--tui-text-01);font-weight:400;font-size:21px;letter-spacing:.1em;text-align:right;background-color:transparent;border:none}.amount-transput__input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--tui-text-03)}@media (max-width: 651px){.amount-transput__input[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:25px;line-height:35px;letter-spacing:.25px;text-align:left}.amount-transput__input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);font-weight:500;font-size:18px;line-height:18px;letter-spacing:.54px}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Io(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "button", 1),
            e.bIt("click", function () {
              const o = e.eBV(t).ngIf;
              return e.Njj(o.action());
            }),
            e.EFF(2),
            e.k0s(),
            e.bVm();
        }
        if (2 & i) {
          const t = c.ngIf;
          e.R7$(1),
            e.Y8G("disabled", "error" === t.type),
            e.R7$(1),
            e.SpI(" ", t.text, " ");
        }
      }
      let Po = (() => {
        class i {
          constructor(t) {
            (this.actionButtonService = t),
              (this.buttonState$ = this.actionButtonService.buttonState$);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(vt));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-action-button"]],
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngIf"],
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
                "disabled",
                "click",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Io, 3, 2, "ng-container", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngIf", e.bMT(1, 1, a.buttonState$));
            },
            dependencies: [_.bT, oe.SM, _.Jj],
            styles: ["button[_ngcontent-%COMP%]{width:100%}"],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const Mo = function (i) {
        return { network: i };
      };
      function No(i, c) {
        if (
          (1 & i && (e.EFF(0), e.nI1(1, "translate"), e.nI1(2, "async")), 2 & i)
        ) {
          const t = e.XpG();
          e.SpI(
            " ",
            e.i5U(
              1,
              1,
              "crossChainPage.targetAddress.hint",
              e.eq3(6, Mo, e.bMT(2, 4, t.toBlockchain$))
            ),
            "\n"
          );
        }
      }
      let Eo = (() => {
        class i {
          constructor(t) {
            (this.swapFormService = t),
              (this.handleClick = new e.bkB()),
              (this.toBlockchain$ = this.swapFormService.toBlockchain$);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(M.K));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-receiver-address-button"]],
            outputs: { handleClick: "handleClick" },
            decls: 4,
            vars: 1,
            consts: [
              [
                "tuiIconButton",
                "",
                "appearance",
                "secondary",
                "type",
                "button",
                "size",
                "m",
                3,
                "tuiHint",
                "click",
              ],
              [
                "inlineSVG",
                "/assets/images/icons/wallet-change.svg",
                1,
                "image",
              ],
              ["hint", ""],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "button", 0),
                  e.bIt("click", function () {
                    return a.handleClick.emit();
                  }),
                  e.nrm(1, "div", 1),
                  e.k0s(),
                  e.DNE(2, No, 3, 8, "ng-template", null, 2, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(3);
                e.Y8G("tuiHint", o);
              }
            },
            dependencies: [W.ll, oe.SM, h.XZ, h.ZF, h.JL, h.AZ, _.Jj, J.D9],
            styles: [
              "[_nghost-%COMP%]{--tui-secondary: var(--tui-base-01);--tui-secondary-hover: var(--tui-secondary);--tui-secondary-active: #2c2d36}[_nghost-%COMP%]     .image{display:flex;align-items:center;justify-content:center;width:24px;height:24px}[_nghost-%COMP%]     .image svg{width:100%;height:100%}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var rt = p(700398),
        On = p(228437);
      const Ro = function () {
        return { decimals: 6 };
      };
      function Bo(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "span", 5),
            e.EFF(1, "Balance: "),
            e.j41(2, "span", 6),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(3);
              return e.Njj(a.isMobile ? a.maxButtonClickEvent.emit() : null);
            }),
            e.EFF(3),
            e.nI1(4, "withRound"),
            e.nI1(5, "bigNumberFormat"),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG(2).ngLet;
          e.R7$(3),
            e.SpI(
              " ",
              e.brH(
                4,
                1,
                e.bMT(5, 5, null == t ? null : t.amount),
                "fixedValue",
                e.lJ4(7, Ro)
              ),
              " "
            );
        }
      }
      function $o(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "tui-tag", 7),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(3);
              return e.Njj(a.maxButtonClickEvent.emit());
            }),
            e.k0s();
        }
      }
      function Fo(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Bo, 6, 8, "span", 3),
            e.DNE(2, $o, 1, 0, "tui-tag", 4),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1),
            e.Y8G("ngIf", "balance" !== t.hide),
            e.R7$(1),
            e.Y8G("ngIf", "maxButton" !== t.hide);
        }
      }
      function Lo(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 1),
            e.DNE(1, Fo, 3, 2, "ng-container", 2),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet;
          e.R7$(1),
            e.Y8G(
              "ngIf",
              null == t || null == t.amount ? null : t.amount.gt(0)
            );
        }
      }
      let Do = (() => {
        class i {
          constructor(t, n, a, o, s) {
            (this.headerStore = t),
              (this.tokensStoreService = n),
              (this.swapsFormService = a),
              (this.previewSwapService = o),
              (this.walletConnectorService = s),
              (this._triggerRefresh$ = new N.t(null)),
              (this.token$ = this.swapsFormService.fromToken$.pipe(
                (0, G.v)(
                  this._triggerRefresh$.pipe((0, F.Z)()),
                  this.tokensStoreService.tokens$
                ),
                (0, te.p)(() => !!this.tokensStoreService.tokens),
                (0, L.F)((l, u) => JSON.stringify(l) === JSON.stringify(u)),
                (0, k.T)(([l]) =>
                  this.tokensStoreService.tokens.find((u) => (0, x._f)(l, u))
                )
              )),
              (this.maxButtonClickEvent = new e.bkB()),
              (this.isMobile = this.headerStore.isMobile),
              this.tokensStoreService.tokens$
                .pipe(
                  (0, G.v)(this.previewSwapService.transactionState$),
                  (0, L.F)(),
                  (0, ee.B)(20),
                  (0, te.p)(
                    ([l, u]) => "success" === u.step || "inactive" === u.step
                  ),
                  (0, X.M)(([, l]) => {
                    "success" === l.step &&
                      (this.tokensStoreService.startBalanceCalculating(
                        this.swapsFormService.inputValue.fromBlockchain
                      ),
                      this._triggerRefresh$.next(null));
                  })
                )
                .subscribe(),
              this.walletConnectorService.addressChange$.subscribe(() => {
                this.tokensStoreService.startBalanceCalculating(
                  this.swapsFormService.inputValue.fromBlockchain
                );
              });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(K.X),
              e.rXU(Z.p),
              e.rXU(M.K),
              e.rXU(Ie),
              e.rXU(U.c)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-user-balance-container"]],
            inputs: { hide: "hide" },
            outputs: { maxButtonClickEvent: "maxButtonClickEvent" },
            decls: 2,
            vars: 3,
            consts: [
              ["class", "user-balance-container", 4, "ngLet"],
              [1, "user-balance-container"],
              [4, "ngIf"],
              ["class", "user-balance-container__balance", 4, "ngIf"],
              [
                "size",
                "s",
                "status",
                "custom",
                "value",
                "MAX",
                "class",
                "user-balance-container__max-button",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "user-balance-container__balance"],
              [1, "user-balance-container__balance_amount", 3, "click"],
              [
                "size",
                "s",
                "status",
                "custom",
                "value",
                "MAX",
                1,
                "user-balance-container__max-button",
                3,
                "click",
              ],
            ],
            template: function (n, a) {
              1 & n && (e.DNE(0, Lo, 2, 1, "div", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.token$));
            },
            dependencies: [_.bT, B.N, rt.ud, _.Jj, fe.p, On.l],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.user-balance-container[_ngcontent-%COMP%]{display:flex;align-items:center}.user-balance-container__balance[_ngcontent-%COMP%]{margin-right:var(--tui-padding-xs);color:var(--tui-text-03);font-size:15px;line-height:15px}.user-balance-container__max-button[_ngcontent-%COMP%]{margin-top:-2px;background:linear-gradient(90deg,#209e62 0%,#0fa4ad 91.5%);transition:.2s ease-in-out}.user-balance-container__max-button[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#1c8c56 0%,#0d868c 91.5%)}.user-balance-container__max-button_disabled[_ngcontent-%COMP%]{color:var(--secondary-text);cursor:default}@media (max-width: 651px){[_nghost-%COMP%]{width:100%}.user-balance-container[_ngcontent-%COMP%]{justify-content:space-between;width:100%}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Go(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 1),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.onClick());
            }),
            e.j41(1, "div", 2),
            e.nrm(2, "img", 3)(3, "img", 3),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG();
          e.AVh("disabled", t.disabled), e.Y8G("disabled", t.disabled);
        }
      }
      let In = (() => {
        class i {
          constructor(t, n, a) {
            (this.queryParamsService = t),
              (this.formsTogglerService = n),
              (this.cdr = a),
              (this.switcherClick = new e.bkB()),
              (this.showTokenSwitcher$ =
                this.formsTogglerService.selectedForm$.pipe(
                  (0, G.v)(this.queryParamsService.queryParams$),
                  (0, k.T)(
                    ([o, s]) => !s.hideTokenSwitcher && o === vn.g.SWAP_FORM
                  )
                )),
              (this.disabled = !1);
          }
          onClick() {
            (this.disabled = !0),
              this.switcherClick.emit(),
              setTimeout(() => {
                (this.disabled = !1), this.cdr.markForCheck();
              }, 2e3);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(Ce.w), e.rXU(ge.D), e.rXU(e.gRc));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-form-switcher"]],
            outputs: { switcherClick: "switcherClick" },
            decls: 2,
            vars: 3,
            consts: [
              ["class", "switcher", 3, "disabled", "click", 4, "ngIf"],
              [1, "switcher", 3, "disabled", "click"],
              [1, "switcher__img-container"],
              ["src", "assets/images/icons/chevron.svg", "alt", "Switch swaps"],
            ],
            template: function (n, a) {
              1 & n && (e.DNE(0, Go, 4, 3, "button", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngIf", e.bMT(1, 1, a.showTokenSwitcher$));
            },
            dependencies: [_.bT, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.switcher[_ngcontent-%COMP%]{z-index:999;display:flex;flex-direction:column;gap:2px;align-items:center;justify-content:center;box-sizing:content-box;width:32px;height:32px;padding:0;background-color:var(--io-background);border:2px solid var(--secondary-background);border-radius:50%;transform:translateY(-50%);cursor:pointer;transition:.2s ease-in-out}.switcher__img-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;align-items:center;justify-content:center;transition:.2s ease-in-out}.switcher[_ngcontent-%COMP%]:hover{background-color:var(--secondary-background)}.switcher[_ngcontent-%COMP%]:hover   .switcher__img-container[_ngcontent-%COMP%]{rotate:180deg}.switcher[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child{transform:rotate(180deg)}.disabled[_ngcontent-%COMP%]{cursor:default;opacity:.7}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var pe = p(45387),
        Me = p(72180);
      function Ho(i, c) {
        1 & i && e.nrm(0, "div", 6),
          2 & i &&
            e.Y8G("inlineSVG", "assets/images/icons/forms/success-input.svg");
      }
      function Vo(i, c) {
        1 & i && e.nrm(0, "div", 6),
          2 & i &&
            e.Y8G("inlineSVG", "assets/images/icons/forms/error-input.svg");
      }
      let jo = (() => {
        class i {
          constructor(t, n, a) {
            (this.targetNetworkAddressService = t),
              (this.swapFormService = n),
              (this.destroy$ = a),
              (this.address = this.targetNetworkAddressService.addressControl),
              (this.toBlockchain$ = this.swapFormService.toBlockchain$),
              (this.isActiveInput = !1);
          }
          onFocusChange(t) {
            this.isActiveInput = t || !!this.address.value;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(ae.P), e.rXU(M.K), e.rXU(j.ew, 2));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-target-network-address"]],
            features: [e.Jv_([j.ew])],
            decls: 9,
            vars: 7,
            consts: [
              [1, "network-container"],
              [
                "tuiTextfieldSize",
                "l",
                3,
                "tuiTextfieldCustomContent",
                "formControl",
                "pseudoFocus",
                "pseudoInvalid",
                "tuiTextfieldCleaner",
                "tuiTextfieldLabelOutside",
                "focusedChange",
              ],
              [1, "network-container__row"],
              [1, "network-container__label"],
              ["success", ""],
              ["error", ""],
              [1, "network-container__input-status-icon", 3, "inlineSVG"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0)(1, "tui-input", 1),
                  e.bIt("focusedChange", function (s) {
                    return a.onFocusChange(s);
                  }),
                  e.j41(2, "div", 2)(3, "label", 3),
                  e.EFF(4, "Wallet address or ENS name in target network"),
                  e.k0s()()(),
                  e.DNE(5, Ho, 1, 1, "ng-template", null, 4, e.C5r),
                  e.DNE(7, Vo, 1, 1, "ng-template", null, 5, e.C5r),
                  e.k0s()),
                2 & n)
              ) {
                const o = e.sdS(6),
                  s = e.sdS(8);
                e.R7$(1),
                  e.Y8G(
                    "tuiTextfieldCustomContent",
                    a.address.value ? (a.address.valid ? o : s) : ""
                  )("formControl", a.address)("pseudoFocus", a.address.invalid)(
                    "pseudoInvalid",
                    a.address.invalid
                  )("tuiTextfieldCleaner", !!a.address.value)(
                    "tuiTextfieldLabelOutside",
                    !1
                  ),
                  e.R7$(1),
                  e.Y8G("@moveLabel", a.isActiveInput);
              }
            },
            dependencies: [
              W.ll,
              Y.BC,
              Y.l_,
              pe.np,
              pe.Rd,
              pe.kf,
              pe.G6,
              Me.mp,
              Me.Ws,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.network-container[_ngcontent-%COMP%]{margin-top:1px}.network-container__row[_ngcontent-%COMP%]{position:relative;top:0;display:flex;gap:10px}.network-container[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]{border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}",
            ],
            data: {
              animation: [
                (0, S.hZ)("moveLabel", [
                  (0, S.wk)(
                    "true",
                    (0, S.iF)({
                      color: "#02b774",
                      fontSize: "12px",
                      top: "-5px",
                    })
                  ),
                  (0, S.wk)(
                    "false",
                    (0, S.iF)({
                      color: "#9a9ab0",
                      fontSize: "16px",
                      top: "0px",
                    })
                  ),
                  (0, S.kY)("true <=> false", (0, S.i0)("0.2s ease-out")),
                ]),
              ],
            },
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Yo(i, c) {
        if ((1 & i && (e.qex(0), e.EFF(1), e.bVm()), 2 & i)) {
          const t = e.XpG().ngLet;
          e.R7$(1), e.JRh(t);
        }
      }
      function Ko(i, c) {
        if ((1 & i && (e.j41(0, "span", 7), e.EFF(1), e.k0s()), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G("tuiHint", t)("tuiHintShowDelay", 0)("tuiHintHideDelay", 0),
            e.R7$(1),
            e.SpI("", t.slice(0, 10), "...");
        }
      }
      function Uo(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Yo, 2, 1, "ng-container", 1),
            e.DNE(2, Ko, 2, 4, "span", 6),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngLet;
          e.R7$(1),
            e.Y8G("ngIf", t.length <= 15),
            e.R7$(1),
            e.Y8G("ngIf", t.length > 15);
        }
      }
      function Xo(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 4),
            e.EFF(1),
            e.DNE(2, Uo, 3, 2, "ng-container", 5),
            e.nI1(3, "withRound"),
            e.nI1(4, "bigNumberFormat"),
            e.EFF(5),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngIf;
          e.R7$(1),
            e.SpI(" 1 ", t.from.symbol.replaceAll("RBC", "CRAI"), " = "),
            e.R7$(1),
            e.Y8G(
              "ngLet",
              e.i5U(3, 3, e.bMT(4, 6, t.to.amount), "toClosestValue")
            ),
            e.R7$(3),
            e.SpI(" ", t.to.symbol.replaceAll("RBC", "CRAI"), " ");
        }
      }
      function Wo(i, c) {
        if ((1 & i && (e.qex(0), e.EFF(1), e.bVm()), 2 & i)) {
          const t = e.XpG().ngLet;
          e.R7$(1), e.JRh(t);
        }
      }
      function zo(i, c) {
        if ((1 & i && (e.j41(0, "span", 7), e.EFF(1), e.k0s()), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G("tuiHint", t)("tuiHintShowDelay", 0)("tuiHintHideDelay", 0),
            e.R7$(1),
            e.SpI("", t.slice(0, 10), "...");
        }
      }
      function Zo(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Wo, 2, 1, "ng-container", 1),
            e.DNE(2, zo, 2, 4, "span", 6),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngLet;
          e.R7$(1),
            e.Y8G("ngIf", t.length <= 15),
            e.R7$(1),
            e.Y8G("ngIf", t.length > 15);
        }
      }
      function Qo(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 4),
            e.DNE(1, Zo, 3, 2, "ng-container", 5),
            e.nI1(2, "withRound"),
            e.nI1(3, "bigNumberFormat"),
            e.EFF(4),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngIf;
          e.R7$(1),
            e.Y8G(
              "ngLet",
              e.i5U(2, 3, e.bMT(3, 6, t.from.amount), "toClosestValue")
            ),
            e.R7$(3),
            e.Lme(" ", t.from.symbol.replaceAll("RBC", "CRAI"), " = 1 ", t.to.symbol.replaceAll("RBC", "CRAI"), " ");
        }
      }
      function Jo(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.DNE(1, Xo, 6, 8, "div", 2),
            e.DNE(2, Qo, 5, 8, "div", 2),
            e.j41(3, "div", 3),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.onChangeDirection());
            }),
            e.k0s(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG();
          e.R7$(1),
            e.Y8G("ngIf", "from" === t.rateDirection),
            e.R7$(1),
            e.Y8G("ngIf", "to" === t.rateDirection);
        }
      }
      let Pn = (() => {
        class i {
          constructor(t) {
            (this.swapFormService = t), (this.rateDirection = "from");
          }
          ngOnInit() {
            this.tokensRate$ = (0, Fe.z)([
              this.swapFormService.inputValueDistinct$,
              this.swapFormService.outputValueDistinct$,
            ]).pipe(
              (0, k.T)(([t, n]) => {
                const { fromAmount: a, fromToken: o, toToken: s } = t,
                  { toAmount: l } = n;
                return l?.gt(0) && a?.actualValue.gt(0) && o && s
                  ? {
                      from: {
                        amount: a.actualValue.dividedBy(l),
                        symbol: o.symbol.replaceAll("RBC", "CRAI"),
                      },
                      to: {
                        amount: l.dividedBy(a.actualValue),
                        symbol: s.symbol.replaceAll("RBC", "CRAI"),
                      },
                    }
                  : null;
              })
            );
          }
          onChangeDirection() {
            this.rateDirection = "from" === this.rateDirection ? "to" : "from";
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(M.K));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-tokens-rate"]],
            decls: 3,
            vars: 3,
            consts: [
              [1, "tokens-rate"],
              [4, "ngIf"],
              ["class", "tokens-rate__amounts", 4, "ngIf"],
              [
                "inlineSVG",
                "assets/images/swaps/icons/rate-direction-button.svg",
                1,
                "tokens-rate__direction-button",
                3,
                "click",
              ],
              [1, "tokens-rate__amounts"],
              [4, "ngLet"],
              [
                "tuiHintAppearance",
                "onDark",
                "tuiHintDirection",
                "bottom-right",
                3,
                "tuiHint",
                "tuiHintShowDelay",
                "tuiHintHideDelay",
                4,
                "ngIf",
              ],
              [
                "tuiHintAppearance",
                "onDark",
                "tuiHintDirection",
                "bottom-right",
                3,
                "tuiHint",
                "tuiHintShowDelay",
                "tuiHintHideDelay",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0),
                e.DNE(1, Jo, 4, 2, "ng-container", 1),
                e.nI1(2, "async"),
                e.k0s()),
                2 & n && (e.R7$(1), e.Y8G("ngIf", e.bMT(2, 1, a.tokensRate$)));
            },
            dependencies: [
              _.bT,
              B.N,
              W.ll,
              h.XZ,
              h.ZF,
              h.JL,
              h.AZ,
              _.Jj,
              fe.p,
              On.l,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.tokens-rate[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);justify-content:end;height:15px}.tokens-rate__amounts[_ngcontent-%COMP%]{overflow:hidden;color:var(--tui-text-03);font-size:15px;line-height:15px;letter-spacing:.08em;white-space:nowrap}.tokens-rate__direction-button[_ngcontent-%COMP%]{display:flex;align-items:center;width:15px;cursor:pointer}.tokens-rate__direction-button[_ngcontent-%COMP%]     svg path{fill:var(--tui-text-03)}@media (max-width: 420px){.tokens-rate[_ngcontent-%COMP%]{justify-content:start}.tokens-rate__direction-button[_ngcontent-%COMP%]{display:none}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var qo = p(300983),
        er = p(831397),
        tr = p(196697);
      const nr = ["refreshIcon"];
      function ir(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "span", 4), e.EFF(1), e.nI1(2, "translate"), e.k0s()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(1),
            e.JRh(
              e.bMT(
                2,
                1,
                "swaps" === t.mode ? "common.refreshTrade" : "Update orders"
              )
            );
        }
      }
      let ar = (() => {
        class i {
          constructor(t, n) {
            (this.destroy$ = t),
              (this.isMobile = n),
              (this.onRefresh = new e.bkB());
          }
          ngOnInit() {
            this.isRotating$
              .pipe(
                (0, Te.J)(),
                (0, er.Z)(([t, n]) => {
                  const o = t && !1 === n;
                  return n && !1 === t
                    ? (this.refreshIconElement.nativeElement.classList.add(
                        "refresh-button__icon_refreshing"
                      ),
                      qo.w)
                    : (0, _n.R)(
                        this.refreshIconElement.nativeElement,
                        "animationiteration"
                      ).pipe(
                        (0, tr.s)(1),
                        (0, X.M)(() => {
                          o &&
                            this.refreshIconElement.nativeElement.classList.remove(
                              "refresh-button__icon_refreshing"
                            );
                        })
                      );
                }),
                (0, q.Q)(this.destroy$)
              )
              .subscribe();
          }
          toggleClick() {
            this.onRefresh.emit();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(j.ew, 2), e.rXU(ze.Td));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-refresh-button"]],
            viewQuery: function (n, a) {
              if ((1 & n && e.GBs(nr, 7), 2 & n)) {
                let o;
                e.mGM((o = e.lsd())) && (a.refreshIconElement = o.first);
              }
            },
            inputs: {
              isRotating$: "isRotating$",
              isRotating: "isRotating",
              mode: "mode",
            },
            outputs: { onRefresh: "onRefresh" },
            features: [e.Jv_([j.ew])],
            decls: 5,
            vars: 1,
            consts: [
              [
                "tuiHintAppearance",
                "onDark",
                1,
                "refresh-button",
                3,
                "tuiHint",
                "click",
              ],
              [
                "inlineSVG",
                "assets/images/icons/reload.svg",
                1,
                "refresh-button__icon",
              ],
              ["refreshIcon", ""],
              ["refreshIconTooltip", ""],
              [1, "refresh-icon-tooltip"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0),
                  e.bIt("click", function () {
                    return a.toggleClick();
                  }),
                  e.nrm(1, "div", 1, 2),
                  e.k0s(),
                  e.DNE(3, ir, 3, 3, "ng-template", null, 3, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(4);
                e.Y8G("tuiHint", a.isMobile ? "" : o);
              }
            },
            dependencies: [W.ll, h.XZ, h.ZF, h.JL, h.AZ, J.D9],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}body.hide-unused-ui   [_nghost-%COMP%]{display:flex;align-items:center}@media (max-width: 651px){body.hide-unused-ui   [_nghost-%COMP%]{position:initial!important}}.refresh-button[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:18px;height:18px;cursor:pointer}.refresh-button__icon[_ngcontent-%COMP%]{display:flex;align-items:center;width:18px;height:16px}.refresh-button__icon[_ngcontent-%COMP%]     svg{width:100%;height:100%}.refresh-button__icon[_ngcontent-%COMP%]     svg path{fill:var(--tui-text-03)}.refresh-button__icon_refreshing[_ngcontent-%COMP%]{animation:.9s linear .1s infinite _ngcontent-%COMP%_refreshAnimation}.refresh-icon-tooltip[_ngcontent-%COMP%]{font-size:15px}@keyframes _ngcontent-%COMP%_refreshAnimation{to{transform:rotate(-360deg)}}@keyframes _ngcontent-%COMP%_timerAnimation{to{stroke-dashoffset:0}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Mn = p(865245),
        or = p(176680),
        rr = p(426374),
        st = p(649169),
        Nn = p(739077);
      function sr(i, c) {
        1 & i && e.eu8(0);
      }
      function cr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "tui-hosted-dropdown", 3),
            e.bIt("openChange", function (a) {
              e.eBV(t);
              const o = e.XpG();
              return e.Njj((o.open = a));
            }),
            e.j41(1, "div", 4),
            e.nrm(2, "div", 5),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG();
          e.Y8G("content", t.settingsComponent)("open", t.open)(
            "tuiDropdownMinHeight",
            0
          );
        }
      }
      function lr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 6),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.openMobile());
            }),
            e.j41(1, "div", 4),
            e.nrm(2, "div", 5),
            e.k0s()();
        }
      }
      let dr = (() => {
        class i {
          constructor(t, n, a, o) {
            (this.headerStore = t),
              (this.swapsFormService = n),
              (this.modalService = a),
              (this.injector = o),
              (this.mode$ = this.swapsFormService.inputValue$.pipe(
                (0, Mn.i)(1),
                (0, k.T)(({ fromBlockchain: s, toBlockchain: l }) =>
                  s === l ? V.T.INSTANT_TRADE : V.T.CROSS_CHAIN_ROUTING
                ),
                (0, F.Z)(V.T.INSTANT_TRADE)
              )),
              (this.isMobile$ = this.headerStore.getMobileDisplayStatus()),
              (this.open = !1);
          }
          ngOnInit() {
            this.mode$.pipe((0, L.F)()).subscribe((t) => {
              this.settingsComponent = new et.lS(
                t === V.T.INSTANT_TRADE ? or.U : rr.$
              );
            });
          }
          openMobile() {
            this.mode$
              .pipe(
                (0, R.$)(),
                (0, A.n)((t) =>
                  t === V.T.INSTANT_TRADE
                    ? this.modalService.openItSettings(this.injector)
                    : this.modalService.openCcrSettings(this.injector)
                )
              )
              .subscribe();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(K.X),
              e.rXU(M.K),
              e.rXU(ie.B),
              e.rXU(e.zZn)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-settings-container"]],
            decls: 6,
            vars: 5,
            consts: [
              [4, "ngIf", "ngIfThen", "ngIfElse"],
              ["settingsDesktop", ""],
              ["settingsMobile", ""],
              [
                "tuiDropdownDirection",
                "bottom",
                3,
                "content",
                "open",
                "tuiDropdownMinHeight",
                "openChange",
              ],
              [1, "image-container"],
              ["inlineSVG", "/assets/images/icons/options.svg", 1, "image"],
              [3, "click"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.DNE(0, sr, 1, 0, "ng-container", 0),
                  e.nI1(1, "async"),
                  e.DNE(2, cr, 3, 3, "ng-template", null, 1, e.C5r),
                  e.DNE(4, lr, 3, 0, "ng-template", null, 2, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(3),
                  s = e.sdS(5);
                e.Y8G("ngIf", e.bMT(1, 3, a.isMobile$))("ngIfThen", s)(
                  "ngIfElse",
                  o
                );
              }
            },
            dependencies: [_.bT, W.ll, st.o2, Nn.HY, _.Jj],
            styles: [
              "[_nghost-%COMP%]{display:flex;align-items:center}.image[_ngcontent-%COMP%]{display:flex;align-items:center}.image[_ngcontent-%COMP%]     svg{width:20px;height:20px}.image-container[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function pr(i, c) {
        1 & i && e.eu8(0);
      }
      function ur(i, c) {
        if (
          (1 & i && (e.j41(0, "div", 7)(1, "span", 8), e.EFF(2), e.k0s()()),
          2 & i)
        ) {
          const t = c.type,
            n = c.text,
            a = e.XpG().ngLet;
          e.AVh("selected", a === t), e.R7$(2), e.SpI(" ", n, " ");
        }
      }
      const _r = function () {
        return { type: "swapForm", text: "Swap" };
      };
      function mr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 1)(1, "div", 2),
            e.DNE(2, pr, 1, 0, "ng-container", 3),
            e.k0s(),
            e.j41(3, "div", 4)(4, "app-refresh-button", 5),
            e.bIt("onRefresh", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.refreshTrades());
            }),
            e.k0s(),
            e.nrm(5, "app-settings-container"),
            e.k0s(),
            e.DNE(6, ur, 3, 3, "ng-template", null, 6, e.C5r),
            e.k0s();
        }
        if (2 & i) {
          const t = e.sdS(7),
            n = e.XpG();
          e.R7$(2),
            e.Y8G("ngTemplateOutlet", t)(
              "ngTemplateOutletContext",
              e.lJ4(3, _r)
            ),
            e.R7$(2),
            e.Y8G("isRotating$", n.isRefreshRotating$);
        }
      }
      let hr = (() => {
        class i {
          constructor(t, n) {
            (this.formsTogglerService = t),
              (this.refreshService = n),
              (this.selectedForm$ = this.formsTogglerService.selectedForm$),
              (this.isRefreshRotating$ = this.refreshService.status$.pipe(
                (0, k.T)((a) => a !== de.STOPPED)
              ));
          }
          refreshTrades() {
            this.refreshService.onButtonClick();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(ge.D), e.rXU(Ot));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-form-header"]],
            decls: 2,
            vars: 3,
            consts: [
              ["class", "form-header", 4, "ngLet"],
              [1, "form-header"],
              [1, "form-header__links"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [1, "form-header__actions"],
              [3, "isRotating$", "onRefresh"],
              ["formTypeSelector", ""],
              [1, "form-header__link"],
              [1, "form-header__link-title"],
            ],
            template: function (n, a) {
              1 & n && (e.DNE(0, mr, 8, 4, "div", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.selectedForm$));
            },
            dependencies: [_.T3, B.N, ar, dr, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.form-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:var(--tui-padding-s) var(--tui-padding-l) var(--tui-padding-m) var(--tui-padding-l);font-weight:700;font-size:15px}.form-header__links[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);color:var(--tui-text-03)}.form-header__link[_ngcontent-%COMP%]{position:relative}.form-header__link-new[_ngcontent-%COMP%]{position:absolute;top:-7px;right:-17px;padding:0 3px;color:#fff;font-size:9px;line-height:12px;background:var(--tui-primary-active);border-radius:5px;pointer-events:none}.form-header__link.selected[_ngcontent-%COMP%]{color:var(--tui-text-01)}.form-header__actions[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}@media (max-width: 651px){.form-header[_ngcontent-%COMP%]{background:var(--tui-base-01);border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function gr(i, c) {
        1 & i && e.nrm(0, "app-target-network-address"),
          2 & i && e.Y8G("@receiverAnimation", void 0);
      }
      function vr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-receiver-address-button", 15),
            e.bIt("handleClick", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.toggleReceiver());
            }),
            e.k0s();
        }
      }
      function fr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-window-container"),
            e.nrm(1, "app-form-header"),
            e.j41(2, "div", 1)(3, "app-input-output-container", 2)(
              4,
              "app-asset-selector",
              3
            ),
            e.bIt("handleAssetSelection", function () {
              const o = e.eBV(t).ngLet,
                s = e.XpG();
              return e.Njj(s.openSelector("from", o.isMobile));
            }),
            e.k0s(),
            e.j41(5, "div", 4)(6, "app-amount-transput", 5),
            e.bIt("amountUpdated", function (a) {
              e.eBV(t);
              const o = e.XpG();
              return e.Njj(o.updateInputValue(a));
            }),
            e.k0s(),
            e.j41(7, "app-user-balance-container", 6),
            e.bIt("maxButtonClickEvent", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.handleMaxButton());
            }),
            e.k0s()()(),
            e.j41(8, "app-form-switcher", 7),
            e.bIt("switcherClick", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.revert());
            }),
            e.k0s(),
            e.j41(9, "app-input-output-container", 8)(
              10,
              "app-asset-selector",
              9
            ),
            e.bIt("handleAssetSelection", function () {
              const o = e.eBV(t).ngLet,
                s = e.XpG();
              return e.Njj(s.openSelector("to", o.isMobile));
            }),
            e.k0s(),
            e.j41(11, "div", 4),
            e.nrm(12, "app-amount-transput", 10)(13, "app-tokens-rate"),
            e.k0s()()(),
            e.DNE(14, gr, 1, 1, "app-target-network-address", 11),
            e.qex(15, 12),
            e.j41(16, "div", 13),
            e.nrm(17, "app-action-button"),
            e.DNE(18, vr, 1, 0, "app-receiver-address-button", 14),
            e.k0s(),
            e.bVm(),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet;
          e.R7$(3),
            e.Y8G("round", t.isMobile ? "none" : "top")(
              "marginTop",
              t.isMobile
            ),
            e.R7$(1),
            e.Y8G("asset", t.fromAsset)("mainFormType", t.selectedForm)(
              "isDisabled",
              t.isDisabledFromSelector
            ),
            e.R7$(2),
            e.Y8G("selectedToken", t.fromAsset)("amountValue", t.fromAmount),
            e.R7$(3),
            e.Y8G("round", t.displayReceiver ? "none" : "bottom"),
            e.R7$(1),
            e.Y8G("asset", t.toAsset)("mainFormType", t.selectedForm),
            e.R7$(2),
            e.Y8G("selectedToken", t.toAsset)("amountValue", t.toAmount),
            e.R7$(2),
            e.Y8G("ngIf", t.displayReceiver && "swapForm" === t.selectedForm),
            e.R7$(4),
            e.Y8G("ngIf", "swapForm" === t.selectedForm);
        }
      }
      const br = function (i, c, t, n, a, o, s, l) {
        return {
          displayReceiver: i,
          selectedForm: c,
          isMobile: t,
          fromAsset: n,
          fromAmount: a,
          toAsset: o,
          toAmount: s,
          calculationStatus: l,
        };
      };
      let Cr = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d, m, v) {
            (this.tradePageService = t),
              (this.swapFormService = n),
              (this.settingsService = a),
              (this.tokensStoreService = o),
              (this.headerStore = s),
              (this.modalService = l),
              (this.authService = u),
              (this.injector = d),
              (this.formsTogglerService = m),
              (this.swapsStateService = v),
              (this.selectedForm$ = this.formsTogglerService.selectedForm$),
              (this.calculationStatus$ =
                this.swapsStateService.calculationStatus$),
              (this.isMobile$ = this.headerStore.getMobileDisplayStatus()),
              (this.fromAsset$ = this.swapFormService.fromToken$),
              (this.toAsset$ = this.swapFormService.toToken$),
              (this.fromAmount$ = this.swapFormService.fromAmount$),
              (this.toAmount$ = this.swapFormService.toAmount$.pipe(
                (0, k.T)((g) =>
                  g ? { actualValue: g, visibleValue: g?.toFixed() } : null
                )
              )),
              (this.currentUser$ = this.authService.currentUser$),
              (this.displayTargetAddressInput$ = this.fromAsset$.pipe(
                (0, G.v)(
                  this.toAsset$,
                  this.settingsService.crossChainRoutingValueChanges.pipe(
                    (0, F.Z)(this.settingsService.crossChainRoutingValue)
                  ),
                  this.settingsService.instantTradeValueChanges.pipe(
                    (0, F.Z)(this.settingsService.instantTradeValue)
                  )
                ),
                (0, k.T)(([g, f, T, b]) =>
                  g && f && g.blockchain === f.blockchain
                    ? b.showReceiverAddress
                    : T.showReceiverAddress
                ),
                (0, L.F)()
              )),
              this.swapFormService.fromBlockchain$.subscribe((g) => {
                g && this.tokensStoreService.startBalanceCalculating(g);
              }),
              this.swapFormService.toBlockchain$.subscribe((g) => {
                g && this.tokensStoreService.startBalanceCalculating(g);
              });
          }
          openSelector(t, n) {
            n
              ? this.modalService
                  .openAssetsSelector(t, this.injector)
                  .subscribe()
              : this.tradePageService.setState(
                  "from" === t ? "fromSelector" : "toSelector"
                );
          }
          updateInputValue(t) {
            const n = !t.actualValue?.isNaN(),
              a = this.swapFormService.inputValue?.fromAmount?.actualValue;
            (!a || !a.eq(t?.actualValue)) &&
              this.swapFormService.inputControl.patchValue({
                fromAmount: n ? t : null,
              });
          }
          toggleReceiver() {
            var t = this;
            return (0, C.A)(function* () {
              const { fromToken: n, toToken: a } = t.swapFormService.inputValue;
              let o = t.settingsService.crossChainRouting;
              n &&
                a &&
                (o =
                  n.blockchain === a.blockchain
                    ? t.settingsService.instantTrade
                    : t.settingsService.crossChainRouting),
                o.patchValue({
                  showReceiverAddress: !o.controls.showReceiverAddress.value,
                });
            })();
          }
          revert() {
            var t = this;
            return (0, C.A)(function* () {
              const {
                  fromBlockchain: n,
                  toBlockchain: a,
                  fromToken: o,
                  toToken: s,
                } = t.swapFormService.inputValue,
                { toAmount: l } = t.swapFormService.outputValue;
              t.swapsStateService.setCalculationProgress(0, 0),
                t.swapFormService.inputControl.patchValue({
                  fromBlockchain: a,
                  fromToken: s,
                  toToken: o,
                  toBlockchain: n,
                  ...(l?.gt(0) && {
                    fromAmount: { visibleValue: l.toFixed(), actualValue: l },
                  }),
                }),
                t.swapFormService.outputControl.patchValue({ toAmount: null });
            })();
          }
          handleMaxButton() {
            this.swapFormService.fromToken$
              .pipe(
                (0, R.$)(),
                (0, X.M)((t) => {
                  const n = this.tokensStoreService.tokens.find((a) =>
                    (0, x._f)(t, a)
                  );
                  n.amount &&
                    this.swapFormService.inputControl.patchValue({
                      fromAmount: {
                        actualValue: n.amount,
                        visibleValue: n.amount.toFixed(),
                      },
                    });
                })
              )
              .subscribe();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(se.p),
              e.rXU(M.K),
              e.rXU(me.h),
              e.rXU(Z.p),
              e.rXU(K.X),
              e.rXU(ie.B),
              e.rXU(le.u),
              e.rXU(e.zZn),
              e.rXU(ge.D),
              e.rXU(he)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-swap-form-page"]],
            decls: 9,
            vars: 26,
            consts: [
              [4, "ngLet"],
              [1, "form__container"],
              [3, "round", "marginTop"],
              [
                "left",
                "",
                "selectorType",
                "from",
                3,
                "asset",
                "mainFormType",
                "isDisabled",
                "handleAssetSelection",
              ],
              ["right", "", 1, "input-container"],
              [
                "formType",
                "from",
                "inputMode",
                "input",
                3,
                "selectedToken",
                "amountValue",
                "amountUpdated",
              ],
              [3, "maxButtonClickEvent"],
              [3, "switcherClick"],
              [3, "round"],
              [
                "left",
                "",
                "selectorType",
                "to",
                3,
                "asset",
                "mainFormType",
                "handleAssetSelection",
              ],
              [
                "formType",
                "to",
                "inputMode",
                "output",
                3,
                "selectedToken",
                "amountValue",
              ],
              [4, "ngIf"],
              ["footer", ""],
              [1, "buttons-container"],
              [3, "handleClick", 4, "ngIf"],
              [3, "handleClick"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, fr, 19, 14, "app-window-container", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async"),
                e.nI1(3, "async"),
                e.nI1(4, "async"),
                e.nI1(5, "async"),
                e.nI1(6, "async"),
                e.nI1(7, "async"),
                e.nI1(8, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.lV(
                      17,
                      br,
                      e.bMT(1, 1, a.displayTargetAddressInput$),
                      e.bMT(2, 3, a.selectedForm$),
                      e.bMT(3, 5, a.isMobile$),
                      e.bMT(4, 7, a.fromAsset$),
                      e.bMT(5, 9, a.fromAmount$),
                      e.bMT(6, 11, a.toAsset$),
                      e.bMT(7, 13, a.toAmount$),
                      e.bMT(8, 15, a.calculationStatus$)
                    )
                  );
            },
            dependencies: [
              _.bT,
              B.N,
              Nt,
              Pe.r,
              yn,
              xn,
              Po,
              Eo,
              Do,
              In,
              jo,
              Pn,
              hr,
              _.Jj,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}app-action-button[_ngcontent-%COMP%]{width:100%}app-gas-form-hint[_ngcontent-%COMP%]{position:absolute;left:0}app-gas-form-hint.source-chain[_ngcontent-%COMP%]{top:85px}app-gas-form-hint.target-chain[_ngcontent-%COMP%]{bottom:110px}.form-links[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);color:var(--tui-text-03)}.form-links_selected[_ngcontent-%COMP%]{color:var(--tui-text-01)}.actions[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}app-target-network-address[_ngcontent-%COMP%]{display:block}.input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-s);align-items:flex-end;width:100%}.buttons-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-l);margin-top:var(--tui-padding-l)}app-form-switcher[_ngcontent-%COMP%]{display:flex;justify-content:center;height:2px;background:linear-gradient(90deg,var(--io-background) 0%,rgba(0,0,0,0) 50%,var(--io-background) 100%)}@media (max-width: 651px){[_nghost-%COMP%]     .window-container{padding:0!important;background:none!important;border-radius:0!important}[_nghost-%COMP%]     .window-container header{padding:var(--tui-padding-l)!important;background:var(--io-background);border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.input-container[_ngcontent-%COMP%]{gap:var(--tui-padding-xs);align-items:flex-start}}",
            ],
            data: {
              animation: [
                (0, S.hZ)("receiverAnimation", [
                  (0, S.kY)(":enter", [
                    (0, S.iF)({ height: "0px", opacity: 0.5 }),
                    (0, S.i0)(
                      "0.2s ease-out",
                      (0, S.iF)({ height: "56px", opacity: 1 })
                    ),
                  ]),
                  (0, S.kY)(":leave", [
                    (0, S.iF)({ opacity: 1, height: "56px" }),
                    (0, S.i0)(
                      "0.2s ease-in",
                      (0, S.iF)({ height: "0px", opacity: 0 })
                    ),
                  ]),
                ]),
              ],
            },
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var kr = p(118562);
      let Dt = (() => {
        class i {
          get changenowRecentTrades() {
            return (
              this.storeService.getItem("RUBIC_CHANGENOW_RECENT_TRADE") || []
            );
          }
          constructor(t, n, a) {
            (this.swapsFormService = t),
              (this.httpClient = n),
              (this.storeService = a),
              (this.maxLatestTrades = 8),
              (this._cnTrade$ = new N.t(null)),
              (this.cnTrade$ = this._cnTrade$
                .asObservable()
                .pipe((0, Mn.i)(1))),
              (this._status$ = new N.t(r.CHANGENOW_API_STATUS.WAITING)),
              (this.status$ = this._status$.asObservable());
          }
          updateTrade(t, n) {
            const {
                fromToken: a,
                toToken: o,
                fromAmount: s,
              } = this.swapsFormService.inputValue,
              { toAmount: l } = this.swapsFormService.outputValue,
              u = {
                id: t.id,
                fromToken: a,
                toToken: o,
                fromAmount: s.visibleValue,
                toAmount: l.toFixed(),
                timestamp: Date.now(),
                depositAddress: t.depositAddress,
                receiverAddress: n,
                extraField: t.extraField,
              };
            this._cnTrade$.next(u), this.saveTrade(u);
          }
          getChangenowSwapStatus(t) {
            return (0, C.A)(function* () {
              if (!t)
                throw new r.RubicSdkError("Must provide changenow trade id");
              try {
                return (yield r.ChangeNowCrossChainApiService.getTxStatus(
                  t
                )).status;
              } catch {
                return r.CHANGENOW_API_STATUS.WAITING;
              }
            })();
          }
          setupUpdate() {
            (0, ft.Y)(3e4)
              .pipe(
                (0, F.Z)(-1),
                (0, A.n)(() =>
                  this.getChangenowSwapStatus(this._cnTrade$.value?.id)
                ),
                (0, X.M)((t) => this._status$.next(t)),
                (0, bt.v)((t) => t !== r.CHANGENOW_API_STATUS.FINISHED)
              )
              .subscribe();
          }
          saveTrade(t) {
            const n = [...(this.changenowRecentTrades || [])];
            n?.length === this.maxLatestTrades && n.pop(), n.unshift(t);
            const a = [...n];
            this.storeService.setItem("RUBIC_CHANGENOW_RECENT_TRADE", a);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(M.K), e.KVO(ht.Qq), e.KVO(kr.n));
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      function Sr(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-input-output-container", 26),
            e.nrm(1, "app-asset-selector", 27),
            e.j41(2, "div", 11),
            e.nrm(3, "app-amount-transput", 28),
            e.nI1(4, "async"),
            e.k0s()()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.XpG().ngLet,
            a = e.XpG();
          e.Y8G("round", n.isMobile ? "none" : "top")("marginTop", n.isMobile),
            e.R7$(1),
            e.Y8G("asset", t)("mainFormType", "swapForm"),
            e.R7$(2),
            e.Y8G("selectedToken", t)(
              "amountValue",
              e.bMT(4, 6, a.fromAmount$)
            );
        }
      }
      function Tr(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 29),
            e.EFF(1),
            e.nI1(2, "shortAddress"),
            e.j41(3, "button", 30),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG().ngLet,
                o = e.XpG();
              return e.Njj(o.copyToClipboard(a.cnTrade.depositAddress));
            }),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG(),
            a = e.sdS(10);
          e.R7$(1),
            e.SpI(
              " ",
              e.brH(
                2,
                4,
                t.cnTrade.depositAddress,
                t.isMobile ? 10 : 20,
                t.isMobile ? 10 : 20
              ),
              " "
            ),
            e.R7$(2),
            e.Y8G("cdkCopyToClipboard", t.cnTrade.depositAddress)("tuiHint", a)(
              "tuiHintManual",
              n.hintShown
            );
        }
      }
      function wr(i, c) {
        1 & i && e.nrm(0, "div", 31);
      }
      function yr(i, c) {
        1 & i && (e.j41(0, "div", 32), e.nrm(1, "img", 33), e.k0s());
      }
      function Ar(i, c) {
        1 & i && e.nrm(0, "div", 34);
      }
      function xr(i, c) {
        1 & i && e.nrm(0, "div", 31);
      }
      function Or(i, c) {
        1 & i && (e.j41(0, "div", 32), e.nrm(1, "img", 33), e.k0s());
      }
      function Ir(i, c) {
        1 & i && e.nrm(0, "div", 34);
      }
      function Pr(i, c) {
        1 & i && e.nrm(0, "div", 31);
      }
      function Mr(i, c) {
        1 & i && (e.j41(0, "div", 32), e.nrm(1, "img", 33), e.k0s());
      }
      function Nr(i, c) {
        1 & i && e.nrm(0, "div", 34);
      }
      function Er(i, c) {
        1 & i && e.nrm(0, "div", 31);
      }
      function Rr(i, c) {
        1 & i && (e.j41(0, "div", 32), e.nrm(1, "img", 33), e.k0s());
      }
      const ct = function (i) {
          return { "status-item__value_completed": i };
        },
        En = function (i, c) {
          return {
            "status-item__line_completed": i,
            "status-item__line_load": c,
          };
        };
      function Br(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-window-container"),
            e.qex(1, 3),
            e.j41(2, "app-back-button", 4),
            e.bIt("onClick", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.backToForm());
            }),
            e.k0s(),
            e.j41(3, "span", 5),
            e.EFF(4, "Change Now Swap"),
            e.k0s(),
            e.bVm(),
            e.qex(5),
            e.j41(6, "div", 6)(7, "div", 7),
            e.DNE(8, Sr, 5, 8, "app-input-output-container", 8),
            e.nI1(9, "async"),
            e.nrm(10, "app-form-switcher"),
            e.j41(11, "app-input-output-container", 9),
            e.nrm(12, "app-asset-selector", 10),
            e.nI1(13, "async"),
            e.j41(14, "div", 11),
            e.nrm(15, "app-amount-transput", 12),
            e.nI1(16, "async"),
            e.nI1(17, "async"),
            e.nrm(18, "app-tokens-rate"),
            e.k0s()()()(),
            e.j41(19, "div", 13)(20, "div", 14),
            e.EFF(21, "Deposit address to transfer funds"),
            e.k0s(),
            e.DNE(22, Tr, 4, 8, "div", 15),
            e.k0s(),
            e.j41(23, "div", 16)(24, "div", 17)(25, "div", 18),
            e.DNE(26, wr, 1, 0, "div", 19),
            e.DNE(27, yr, 2, 0, "div", 20),
            e.j41(28, "div", 21),
            e.EFF(29, " Awaiting deposit "),
            e.k0s()(),
            e.nrm(30, "img", 22),
            e.j41(31, "div", 18),
            e.DNE(32, Ar, 1, 0, "div", 23),
            e.nrm(33, "div", 24),
            e.DNE(34, xr, 1, 0, "div", 19),
            e.DNE(35, Or, 2, 0, "div", 20),
            e.j41(36, "div", 21),
            e.EFF(37, " Confirming "),
            e.k0s()(),
            e.nrm(38, "img", 22),
            e.j41(39, "div", 18),
            e.DNE(40, Ir, 1, 0, "div", 23),
            e.nrm(41, "div", 25),
            e.DNE(42, Pr, 1, 0, "div", 19),
            e.DNE(43, Mr, 2, 0, "div", 20),
            e.j41(44, "div", 21),
            e.EFF(45, " Exchanging "),
            e.k0s()(),
            e.nrm(46, "img", 22),
            e.j41(47, "div", 18),
            e.DNE(48, Nr, 1, 0, "div", 23),
            e.DNE(49, Er, 1, 0, "div", 19),
            e.DNE(50, Rr, 2, 0, "div", 20),
            e.j41(51, "div", 21),
            e.EFF(52, " Sending to you "),
            e.k0s()()()(),
            e.bVm(),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet,
            n = e.XpG();
          e.R7$(2),
            e.Y8G("isMobile", !1),
            e.R7$(6),
            e.Y8G("ngLet", e.bMT(9, 24, n.fromAsset$)),
            e.R7$(4),
            e.Y8G("asset", e.bMT(13, 26, n.toAsset$))(
              "mainFormType",
              "swapForm"
            ),
            e.R7$(3),
            e.Y8G("selectedToken", e.bMT(16, 28, n.toAsset$))(
              "amountValue",
              e.bMT(17, 30, n.toAmount$)
            ),
            e.R7$(7),
            e.Y8G("ngIf", null == t.cnTrade ? null : t.cnTrade.depositAddress),
            e.R7$(4),
            e.Y8G("ngIf", "waiting" === t.status),
            e.R7$(1),
            e.Y8G("ngIf", "waiting" !== t.status),
            e.R7$(1),
            e.Y8G("ngClass", e.eq3(32, ct, t.status)),
            e.R7$(4),
            e.Y8G("ngIf", "waiting" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.l_i(
                34,
                En,
                "exchanging" === t.status ||
                  "sending" === t.status ||
                  "finished" === t.status,
                "confirming" === t.status
              )
            ),
            e.R7$(1),
            e.Y8G("ngIf", "confirming" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              "exchanging" === t.status ||
                "sending" === t.status ||
                "finished" === t.status
            ),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.eq3(
                37,
                ct,
                "confirming" === t.status ||
                  "exchanging" === t.status ||
                  "sending" === t.status ||
                  "finished" === t.status
              )
            ),
            e.R7$(4),
            e.Y8G("ngIf", "waiting" === t.status || "confirming" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.l_i(
                39,
                En,
                "sending" === t.status || "finished" === t.status,
                "exchanging" === t.status
              )
            ),
            e.R7$(1),
            e.Y8G("ngIf", "exchanging" === t.status),
            e.R7$(1),
            e.Y8G("ngIf", "sending" === t.status || "finished" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.eq3(
                42,
                ct,
                "exchanging" === t.status ||
                  "sending" === t.status ||
                  "finished" === t.status
              )
            ),
            e.R7$(4),
            e.Y8G(
              "ngIf",
              "waiting" === t.status ||
                "confirming" === t.status ||
                "exchanging" === t.status
            ),
            e.R7$(1),
            e.Y8G("ngIf", "sending" === t.status),
            e.R7$(1),
            e.Y8G("ngIf", "finished" === t.status),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.eq3(44, ct, "sending" === t.status || "finished" === t.status)
            );
        }
      }
      function $r(i, c) {
        1 & i &&
          (e.j41(0, "div", 35),
          e.EFF(
            1,
            " If your transaction seems to be taking longer than normal (more than 10 minutes), please contact our Support Team at "
          ),
          e.j41(2, "span", 36),
          e.EFF(3, "support@rubic.exchange"),
          e.k0s(),
          e.EFF(4, ". "),
          e.k0s());
      }
      function Fr(i, c) {
        1 & i && e.EFF(0, "Address copied on clipboard!");
      }
      const Lr = function (i, c, t, n, a, o) {
        return {
          tradeInfo: i,
          tradeState: c,
          transaction: t,
          status: n,
          cnTrade: a,
          isMobile: o,
        };
      };
      let Dr = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T, b) {
            (this.tradePageService = t),
              (this.previewSwapService = n),
              (this.router = a),
              (this.swapsFormService = o),
              (this.walletConnector = s),
              (this.modalService = l),
              (this.injector = u),
              (this.tokensService = d),
              (this.headerStore = m),
              (this.platformConfigurationService = v),
              (this.cnSwapService = g),
              (this.targetAddressService = f),
              (this.navigator = T),
              (this.cdr = b),
              (this.status$ = this.cnSwapService.status$),
              (this.fromAsset$ = this.swapsFormService.fromToken$.pipe(
                (0, R.$)()
              )),
              (this.toAsset$ = this.swapsFormService.toToken$.pipe((0, R.$)())),
              (this.fromAmount$ = this.swapsFormService.fromAmount$.pipe(
                (0, R.$)()
              )),
              (this.toAmount$ = this.swapsFormService.toAmount$
                .pipe(
                  (0, k.T)((w) =>
                    w ? { actualValue: w, visibleValue: w?.toFixed() } : null
                  )
                )
                .pipe((0, R.$)())),
              (this.SWAP_PROVIDER_TYPE = V.T),
              (this.tradeInfo$ = this.previewSwapService.tradeInfo$),
              (this.nativeToken$ = this.swapsFormService.nativeToken$),
              (this.tradeState$ =
                this.previewSwapService.selectedTradeState$.pipe(
                  (0, k.T)((w) => {
                    const O = w.trade.getTradeInfo();
                    return { ...w, feeInfo: O?.feeInfo };
                  })
                )),
              (this.transactionState$ =
                this.previewSwapService.transactionState$),
              (this.isMobile$ = this.headerStore.getMobileDisplayStatus()),
              (this.ADDRESS_TYPE = je.A),
              (this.cnTrade$ = this.cnSwapService.cnTrade$),
              (this.hintShown = !1),
              this.previewSwapService.setSelectedProvider(),
              this.setupTrade();
          }
          backToForm() {
            this.tradePageService.setState("form"),
              this.previewSwapService.setNextTxState({
                step: "inactive",
                data: {},
              });
          }
          startTrade() {
            var t = this;
            return (0, C.A)(function* () {
              yield t.previewSwapService.requestTxSign();
            })();
          }
          swap() {
            var t = this;
            return (0, C.A)(function* () {
              t.previewSwapService.startSwap();
            })();
          }
          approve() {
            var t = this;
            return (0, C.A)(function* () {
              yield t.previewSwapService.startApprove();
            })();
          }
          navigateToHistory() {
            var t = this;
            return (0, C.A)(function* () {
              const a =
                (yield (0, D._)(t.tradeState$)).trade instanceof
                z.CrossChainTrade;
              yield t.router.navigate(["/history"], {
                queryParamsHandling: "preserve",
                state: { type: a ? "cross-chain" : "on-chain" },
              });
            })();
          }
          switchChain() {
            var t = this;
            return (0, C.A)(function* () {
              const n = t.swapsFormService.inputValue.fromBlockchain;
              (yield t.walletConnector.switchChain(n)) &&
                (yield t.previewSwapService.requestTxSign());
            })();
          }
          connectWallet() {
            this.modalService
              .openWalletModal(this.injector)
              .pipe(
                (0, A.n)(() => this.walletConnector.addressChange$),
                (0, A.n)((t) =>
                  t ? this.previewSwapService.requestTxSign() : (0, y.of)(null)
                )
              )
              .subscribe();
          }
          getAverageTime(t) {
            if (t?.tradeType) {
              const n = Et.r[t.tradeType],
                o =
                  this.platformConfigurationService.providersAverageTime?.[
                    t.tradeType
                  ];
              return o ? `${o} M` : `${n.averageTime} M`;
            }
            return t instanceof z.CrossChainTrade ? "30 M" : "3 M";
          }
          getGasData(t) {
            let n = null;
            if (
              (t instanceof r.EvmCrossChainTrade
                ? (n = t.gasData)
                : t instanceof r.EvmOnChainTrade && (n = t.gasFeeInfo),
              !n)
            )
              return null;
            const o = r.nativeTokensList[t.from.blockchain];
            let s = null;
            return (
              n.gasLimit
                ? (s = n.gasLimit.multipliedBy(n.gasPrice ?? 0))
                : n.totalGas &&
                  (s = r.Web3Pure.fromWei(n.totalGas, o.decimals)),
              s
                ? {
                    amount: r.Web3Pure.fromWei(s, o.decimals),
                    symbol: o.symbol.replaceAll("RBC", "CRAI"),
                  }
                : null
            );
          }
          setupTrade() {
            var t = this;
            return (0, C.A)(function* () {
              const n = t.targetAddressService.address,
                o = yield (yield (0, D._)(
                  t.tradeState$
                )).trade.getChangenowPostTrade(n);
              t.cnSwapService.updateTrade(o, n), t.cnSwapService.setupUpdate();
            })();
          }
          copyToClipboard(t) {
            this.showHint(), this.navigator.clipboard.writeText(t);
          }
          showHint() {
            (this.hintShown = !0),
              (0, Se.O)(1500).subscribe(() => {
                (this.hintShown = !1), this.cdr.markForCheck();
              });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(se.p),
              e.rXU(Ie),
              e.rXU($e.Ix),
              e.rXU(M.K),
              e.rXU(U.c),
              e.rXU(ie.B),
              e.rXU(e.zZn),
              e.rXU(_e.m),
              e.rXU(K.X),
              e.rXU(Oe.p),
              e.rXU(Dt),
              e.rXU(ae.P),
              e.rXU(Ze.kW),
              e.rXU(e.gRc)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-cn-preview-swap"]],
            decls: 11,
            vars: 20,
            consts: [
              [4, "ngLet"],
              ["contactSupportHint", ""],
              ["template", ""],
              ["header", ""],
              [3, "isMobile", "onClick"],
              [1, "back-button__text"],
              [1, "preview"],
              [1, "form__container"],
              [3, "round", "marginTop", 4, "ngLet"],
              ["round", "bottom"],
              ["left", "", "selectorType", "to", 3, "asset", "mainFormType"],
              ["right", "", 1, "input-container"],
              [
                "formType",
                "to",
                "inputMode",
                "output",
                3,
                "selectedToken",
                "amountValue",
              ],
              [1, "target-address"],
              [1, "target-address__title"],
              ["class", "target-address__text", 4, "ngIf"],
              [1, "status-wrapper"],
              [1, "row", "row-status"],
              [1, "row-item", "status-item"],
              ["class", "status-item__spinner", 4, "ngIf"],
              ["class", "status-item__circle_complete", 4, "ngIf"],
              [1, "row-item__value", "status-item__value", 3, "ngClass"],
              [
                "src",
                "assets/images/icons/arrow/arrow-right-white.svg",
                "alt",
                "Next step",
                1,
                "arrow-step",
              ],
              ["class", "status-item__circle", 4, "ngIf"],
              [
                1,
                "status-item__line",
                "status-item__line_confirming",
                3,
                "ngClass",
              ],
              [
                1,
                "status-item__line",
                "status-item__line_exchanging",
                3,
                "ngClass",
              ],
              [3, "round", "marginTop"],
              ["left", "", "selectorType", "from", 3, "asset", "mainFormType"],
              [
                "formType",
                "from",
                "inputMode",
                "output",
                3,
                "selectedToken",
                "amountValue",
              ],
              [1, "target-address__text"],
              [
                "inlineSVG",
                "assets/images/icons/copy.svg",
                1,
                "copy-icon",
                "copy-icon_green",
                3,
                "cdkCopyToClipboard",
                "tuiHint",
                "tuiHintManual",
                "click",
              ],
              [1, "status-item__spinner"],
              [1, "status-item__circle_complete"],
              [
                "src",
                "assets/images/icons/checkmark/checkmark-bold-black.svg",
                "alt",
                "",
                1,
                "scheme__state.status-icon",
              ],
              [1, "status-item__circle"],
              [1, "contact-support-hint"],
              [1, "primary-text"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Br, 53, 46, "app-window-container", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async"),
                e.nI1(3, "async"),
                e.nI1(4, "async"),
                e.nI1(5, "async"),
                e.nI1(6, "async"),
                e.DNE(7, $r, 5, 0, "ng-template", null, 1, e.C5r),
                e.DNE(9, Fr, 1, 0, "ng-template", null, 2, e.C5r)),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.l4e(
                      13,
                      Lr,
                      e.bMT(1, 1, a.tradeInfo$),
                      e.bMT(2, 3, a.tradeState$),
                      e.bMT(3, 5, a.transactionState$),
                      e.bMT(4, 7, a.status$),
                      e.bMT(5, 9, a.cnTrade$),
                      e.bMT(6, 11, a.isMobile$)
                    )
                  );
            },
            dependencies: [
              _.YU,
              _.bT,
              B.N,
              Bt.X,
              Nt,
              Pe.r,
              yn,
              xn,
              W.ll,
              $t.dF,
              h.XZ,
              h.ZF,
              h.JL,
              h.Hg,
              h.AZ,
              In,
              Pn,
              _.Jj,
              Ft.b,
            ],
            styles: [
              '[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}app-form-switcher[_ngcontent-%COMP%]{display:flex;justify-content:center;height:2px}[_nghost-%COMP%]   app-input-output-container[_ngcontent-%COMP%]     .io-right{justify-content:flex-end}.target-address[_ngcontent-%COMP%]{margin-top:var(--tui-padding-l);padding:var(--tui-padding-l);background:var(--primary-background);border-bottom:2px solid var(--secondary-background);border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.target-address__title[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:400;font-size:15px}.target-address__text[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center;color:var(--tui-text-01);font-weight:700;font-size:18px}.status-wrapper[_ngcontent-%COMP%]{padding:var(--tui-padding-l);background:var(--primary-background);border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.row[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center;justify-content:space-between}.row[_ngcontent-%COMP%]:first-of-type{margin-top:0}.row__recent-trades[_ngcontent-%COMP%]{margin-top:var(--tui-padding-s)}.row-item__header[_ngcontent-%COMP%]{margin-bottom:2px;color:var(--primary-color)}.row-item__value[_ngcontent-%COMP%]{display:flex;grid-gap:var(--tui-padding-s);align-items:center;height:-moz-fit-content;height:fit-content;min-height:16px;color:var(--primary-text);font-weight:600;font-size:16px}.row-item__value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px}.status-item[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.status-item__circle[_ngcontent-%COMP%]{position:relative;width:16px;height:16px;border:1px solid var(--tui-text-02);border-radius:50%}.status-item__circle_complete[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:16px;height:16px;background-color:var(--tui-primary);border-color:var(--tui-primary);border-radius:50%}.status-item__circle_complete[_ngcontent-%COMP%]:before{display:none}.status-item__spinner[_ngcontent-%COMP%]{width:16px;height:16px;color:#fff;border-radius:50%;transform:rotate(45deg);perspective:1000px}.status-item__spinner[_ngcontent-%COMP%]:before, .status-item__spinner[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;display:block;width:inherit;height:inherit;border-radius:50%;transform:rotateX(70deg);animation:1s _ngcontent-%COMP%_spin linear infinite;content:""}.status-item__spinner[_ngcontent-%COMP%]:after{color:var(--tui-primary);transform:rotateY(70deg) rotate(180deg)}.status-item__value[_ngcontent-%COMP%]{margin-top:var(--tui-padding-xs);color:var(--tui-text-01);font-weight:400;font-size:12px;line-height:120%;white-space:nowrap}.status-item__value_completed[_ngcontent-%COMP%]{color:var(--tui-primary)}@media (max-width: 651px){.row-status[_ngcontent-%COMP%]{flex-direction:column}.row-status[_ngcontent-%COMP%]   .arrow-step[_ngcontent-%COMP%]{rotate:90deg}}.copy-icon[_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer}.copy-icon_green[_ngcontent-%COMP%]     svg path{stroke:var(--tui-primary)}@keyframes _ngcontent-%COMP%_dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotateccw{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(-360deg)}}@keyframes _ngcontent-%COMP%_spin{0%,to{box-shadow:.2em 0 0 0 currentcolor}12%{box-shadow:.2em .2em 0 0 currentcolor}25%{box-shadow:0 .2em 0 0 currentcolor}37%{box-shadow:-.2em .2em 0 0 currentcolor}50%{box-shadow:-.2em 0 0 0 currentcolor}62%{box-shadow:-.2em -.2em 0 0 currentcolor}75%{box-shadow:0 -.2em 0 0 currentcolor}87%{box-shadow:.2em -.2em 0 0 currentcolor}}',
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const Gr = {
        transactionId: {
          label: "Transaction ID",
          description: "Transaction swap identifier",
        },
        receiver: {
          label: "Receiver address",
          description: "Address to send assets",
        },
      };
      function Hr(i, c) {
        1 & i && e.EFF(0, " Copied! ");
      }
      let Vr = (() => {
        class i {
          constructor(t, n) {
            (this.cdr = t), (this.navigator = n), (this.hintShown = !1);
          }
          copyToClipboard() {
            this.openHint(), this.navigator.clipboard.writeText(this.text);
          }
          openHint() {
            (this.hintShown = !0),
              this.cdr.detectChanges(),
              setTimeout(() => {
                (this.hintShown = !1), this.cdr.markForCheck();
              }, 1e3);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(e.gRc), e.rXU(Ze.kW));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-copy-container"]],
            inputs: { text: "text" },
            decls: 3,
            vars: 2,
            consts: [
              [
                "inlineSVG",
                "assets/images/icons/copy.svg",
                1,
                "button-container",
                3,
                "tuiHint",
                "tuiHintManual",
                "click",
              ],
              ["tooltip", ""],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "button", 0),
                  e.bIt("click", function () {
                    return a.copyToClipboard();
                  }),
                  e.k0s(),
                  e.DNE(1, Hr, 1, 0, "ng-template", null, 1, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(2);
                e.Y8G("tuiHint", o)("tuiHintManual", a.hintShown);
              }
            },
            dependencies: [W.ll, h.XZ, h.ZF, h.JL, h.Hg, h.AZ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{display:block}.button-container[_ngcontent-%COMP%]{position:relative}.button-container[_ngcontent-%COMP%]:active{transform:scale(.95)}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function jr(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-transaction-details-element", 5)(1, "div", 9),
            e.EFF(2),
            e.nI1(3, "shortAddress"),
            e.j41(4, "a", 10),
            e.nI1(5, "scannerLink"),
            e.nrm(6, "img", 11),
            e.nI1(7, "translate"),
            e.k0s()()()),
          2 & i)
        ) {
          const t = e.XpG(2).ngLet,
            n = e.XpG();
          e.Y8G("title", n.text.receiver.label)(
            "description",
            n.text.receiver.description
          ),
            e.R7$(2),
            e.SpI(" ", e.brH(3, 5, t.wallet, 5, 5), " "),
            e.R7$(2),
            e.Y8G(
              "safetyLink",
              e.brH(
                5,
                9,
                t.wallet,
                t.trade.toToken.blockchain,
                n.ADDRESS_TYPE.WALLET
              )
            ),
            e.R7$(2),
            e.Y8G("alt", e.bMT(7, 13, "common.checkOnScanner"));
        }
      }
      function Yr(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-transaction-details-element", 5)(1, "div", 6),
            e.EFF(2),
            e.nI1(3, "shortAddress"),
            e.nrm(4, "app-copy-container", 7),
            e.k0s()()),
          2 & i)
        ) {
          const t = e.XpG(2).ngLet;
          e.Y8G("title", t.extraField.name)("description", t.extraField.text),
            e.R7$(2),
            e.SpI(
              " ",
              t.extraField.value.length > 25
                ? e.brH(3, 4, t.extraField.value, 10, 10)
                : t.extraField.value,
              " "
            ),
            e.R7$(2),
            e.Y8G("text", t.extraField.value);
        }
      }
      function Kr(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 4)(1, "app-transaction-details-element", 5)(
              2,
              "div",
              6
            ),
            e.EFF(3),
            e.nrm(4, "app-copy-container", 7),
            e.k0s()(),
            e.DNE(5, jr, 8, 15, "app-transaction-details-element", 8),
            e.DNE(6, Yr, 5, 8, "app-transaction-details-element", 8),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.R7$(1),
            e.Y8G("title", n.text.transactionId.label)(
              "description",
              n.text.transactionId.description
            ),
            e.R7$(2),
            e.SpI(" ", t.trade.id, " "),
            e.R7$(1),
            e.Y8G("text", t.trade.id),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              t.wallet && (null == t.trade ? null : t.trade.toToken.blockchain)
            ),
            e.R7$(1),
            e.Y8G("ngIf", t.extraField);
        }
      }
      function Ur(i, c) {
        if (
          (1 & i && (e.j41(0, "tui-notification", 12), e.EFF(1), e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet;
          e.R7$(1), e.SpI(" ", t.extraField.text, " ");
        }
      }
      function Xr(i, c) {}
      function Wr(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "app-window-container"),
            e.qex(1, 1),
            e.EFF(2, "Transaction details"),
            e.bVm(),
            e.DNE(3, Kr, 7, 6, "div", 2),
            e.DNE(4, Ur, 2, 1, "tui-notification", 3),
            e.DNE(5, Xr, 0, 0, "ng-template"),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet;
          e.R7$(3),
            e.Y8G("ngIf", null == t ? null : t.trade),
            e.R7$(1),
            e.Y8G("ngIf", t.extraField);
        }
      }
      const zr = function (i, c, t) {
        return { trade: i, wallet: c, extraField: t };
      };
      let Zr = (() => {
        class i {
          constructor(t, n, a, o) {
            (this.tradeStateService = t),
              (this.walletConnector = n),
              (this.targetAddressService = a),
              (this.cnSwapService = o),
              (this.text = Gr),
              (this.ADDRESS_TYPE = je.A),
              (this.trade$ = this.cnSwapService.cnTrade$),
              (this.extraField$ = this.trade$.pipe(
                (0, k.T)((s) =>
                  s?.extraField
                    ? {
                        name: s.extraField.name,
                        value: s.extraField.value,
                        text: `Please don\u2019t forget to specify the ${s.extraField.name} while sending the ${s.from.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI")} transaction for the exchange`,
                      }
                    : null
                )
              )),
              (this.walletAddress$ = this.targetAddressService.address$.pipe(
                (0, x.n)(
                  Boolean,
                  (s) => (0, y.of)(s),
                  () => this.walletConnector.addressChange$
                )
              ));
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(he), e.rXU(U.c), e.rXU(ae.P), e.rXU(Dt));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-cn-trade-info"]],
            decls: 4,
            vars: 11,
            consts: [
              [4, "ngLet"],
              ["header", ""],
              ["class", "transaction-details", 4, "ngIf"],
              ["status", "warning", "class", "tui-space_vertical-4", 4, "ngIf"],
              [1, "transaction-details"],
              [3, "title", "description"],
              [1, "row"],
              [3, "text"],
              [3, "title", "description", 4, "ngIf"],
              [1, "receiver-container"],
              [3, "safetyLink"],
              ["src", "assets/images/icons/scanner.svg", 1, "image", 3, "alt"],
              ["status", "warning", 1, "tui-space_vertical-4"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Wr, 6, 2, "app-window-container", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async"),
                e.nI1(3, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.sMw(
                      7,
                      zr,
                      e.bMT(1, 1, a.trade$),
                      e.bMT(2, 3, a.walletAddress$),
                      e.bMT(3, 5, a.extraField$)
                    )
                  );
            },
            dependencies: [
              _.bT,
              nt.A,
              B.N,
              Vr,
              Pe.r,
              Lt.v,
              kn,
              _.Jj,
              it.n,
              J.D9,
              Ft.b,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;width:360px;background:var(--secondary-background);border-radius:17px}.transaction-details[_ngcontent-%COMP%]{padding:var(--tui-padding-l);background:var(--primary-background);border-radius:var(--tui-radius-m)}.transaction-details__label[_ngcontent-%COMP%]{margin-top:0;margin-bottom:var(--tui-padding-l);font-size:15px;text-align:center}.image[_ngcontent-%COMP%]{width:13px;height:13px}.image[_ngcontent-%COMP%]     svg{width:100%;height:100%}.receiver-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);align-items:center}.receiver-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex}tui-notification[_ngcontent-%COMP%]{margin-top:var(--tui-padding-s)!important;margin-bottom:0!important;border:1px solid}.row[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);justify-content:flex-end}app-transaction-details-element[_ngcontent-%COMP%]{display:flex;align-items:center;height:24px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Qr(i, c) {
        1 & i && e.nrm(0, "app-token-selector-page", 9);
      }
      function Jr(i, c) {
        1 & i && e.nrm(0, "app-token-selector-page", 10);
      }
      function qr(i, c) {
        1 & i && e.nrm(0, "app-preview-swap");
      }
      function es(i, c) {
        1 & i && e.nrm(0, "app-cn-preview-swap");
      }
      const Rn = function (i) {
        return { display: i };
      };
      function ts(i, c) {
        if ((1 & i && e.nrm(0, "app-spindle-banner", 11), 2 & i)) {
          const t = e.XpG().ngLet;
          e.Y8G(
            "ngStyle",
            e.eq3(
              1,
              Rn,
              "form" === t.content || "success" === t.transactionState.step
                ? "block"
                : "none"
            )
          );
        }
      }
      function ns(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-providers-list-general", 12),
            e.bIt("selectTrade", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.selectTrade(a));
            }),
            e.nI1(1, "async"),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.Y8G("@inOutAnimation", void 0)("states", t.providers)(
            "selectedTradeType",
            e.bMT(1, 5, n.selectedTradeType$)
          )("calculationStatus", t.calculationStatus)("showCalculation", !0);
        }
      }
      function is(i, c) {
        1 & i && e.nrm(0, "app-cn-trade-info");
      }
      const as = function (i, c) {
        return { form_small: i, form_tokens: c };
      };
      function os(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 1)(1, "div", 2),
            e.DNE(2, Qr, 1, 0, "app-token-selector-page", 3),
            e.DNE(3, Jr, 1, 0, "app-token-selector-page", 4),
            e.nrm(4, "app-swap-form-page"),
            e.DNE(5, qr, 1, 0, "app-preview-swap", 5),
            e.DNE(6, es, 1, 0, "app-cn-preview-swap", 5),
            e.DNE(7, ts, 1, 3, "app-spindle-banner", 6),
            e.k0s(),
            e.DNE(8, ns, 2, 7, "app-providers-list-general", 7),
            e.DNE(9, is, 1, 0, "app-cn-trade-info", 8),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.XpG();
          e.AVh("large-iframe-swap-container", n.useLargeIframe),
            e.R7$(1),
            e.Y8G(
              "ngClass",
              e.l_i(
                13,
                as,
                "preview" === t.content,
                "fromSelector" === t.content || "toSelector" === t.content
              )
            )("ngSwitch", t.content),
            e.R7$(1),
            e.Y8G("ngSwitchCase", "fromSelector"),
            e.R7$(1),
            e.Y8G("ngSwitchCase", "toSelector"),
            e.R7$(1),
            e.Aen(e.eq3(16, Rn, "form" === t.content ? "block" : "none")),
            e.R7$(1),
            e.Y8G("ngSwitchCase", "preview"),
            e.R7$(1),
            e.Y8G("ngSwitchCase", "cnPreview"),
            e.R7$(1),
            e.Y8G("ngIf", n.showSpindl),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              t.calculationStatus &&
                t.calculationStatus.showSidebar &&
                "swapForm" === t.selectedForm &&
                "form" === t.content &&
                !n.useLargeIframe
            ),
            e.R7$(1),
            e.Y8G("ngIf", "cnPreview" === t.content);
        }
      }
      const rs = function (i, c, t, n, a) {
        return {
          content: i,
          providers: c,
          selectedForm: t,
          calculationStatus: n,
          transactionState: a,
        };
      };
      let Bn = (() => {
        class i {
          constructor(t, n, a, o, s, l, u, d, m, v, g, f, T) {
            (this.swapsState = t),
              (this.tradePageService = n),
              (this.swapFormQueryService = a),
              (this.swapFormService = o),
              (this.swapTokensUpdaterService = s),
              (this.targetNetworkAddressService = l),
              (this.headerStore = u),
              (this.previewSwapService = d),
              (this.actionButtonService = m),
              (this.notificationsService = v),
              (this.formsTogglerService = g),
              (this.queryParamsService = f),
              (this.spindlService = T),
              (this.selectedForm$ = this.formsTogglerService.selectedForm$),
              (this.formContent$ = this.tradePageService.formContent$),
              (this.providers$ = this.swapsState.tradesStore$.pipe(
                (0, X.M)((b) => this.setProvidersVisibility(b)),
                (0, k.T)((b) => b.filter((w) => w.trade))
              )),
              (this.calculationStatus$ = this.swapsState.calculationStatus$),
              (this.selectedTradeType$ = this.swapsState.tradeState$.pipe(
                (0, k.T)((b) => b.tradeType)
              )),
              (this.isMobile = this.headerStore.isMobile),
              (this.useLargeIframe = this.queryParamsService.useLargeIframe),
              (this.buttonState$ = this.actionButtonService.buttonState$),
              (this.transactionState$ =
                this.previewSwapService.transactionState$),
              (this.showSpindl = this.spindlService.showSpindl);
          }
          selectTrade(t) {
            var n = this;
            return (0, C.A)(function* () {
              yield n.swapsState.selectTrade(t), yield n.getSwapPreview();
            })();
          }
          getSwapPreview() {
            var t = this;
            return (0, C.A)(function* () {
              const n = yield (0, D._)(t.buttonState$);
              "Preview swap" === n.text
                ? n.action()
                : ("error" === n.type || "Connect wallet" === n.text) &&
                  t.notificationsService.show(n.text, {
                    status: ui.wS.Warning,
                    autoClose: 5e3,
                    data: null,
                    icon: "",
                    defaultAutoCloseTime: 0,
                  });
            })();
          }
          setProvidersVisibility(t) {
            if (this.swapFormService.isFilled) {
              let n;
              0 === t.length
                ? (n = setTimeout(() => {
                    this.tradePageService.setProvidersVisibility(!0),
                      clearTimeout(n);
                  }, 1500))
                : t[0].trade?.type === r.ON_CHAIN_TRADE_TYPE.WRAPPED
                ? (n && clearTimeout(n),
                  this.tradePageService.setProvidersVisibility(!1))
                : t.length > 0
                ? (this.tradePageService.setProvidersVisibility(!0),
                  n && clearTimeout(n))
                : n || this.tradePageService.setProvidersVisibility(!1);
            }
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(he),
              e.rXU(se.p),
              e.rXU(Kt),
              e.rXU(M.K),
              e.rXU(Xt),
              e.rXU(ae.P),
              e.rXU(K.X),
              e.rXU(Ie),
              e.rXU(vt),
              e.rXU(un.I),
              e.rXU(ge.D),
              e.rXU(Ce.w),
              e.rXU(pn.Q)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-trade-view-container"]],
            decls: 6,
            vars: 17,
            consts: [
              [
                "class",
                "swap-container",
                3,
                "large-iframe-swap-container",
                4,
                "ngLet",
              ],
              [1, "swap-container"],
              [1, "form", 3, "ngClass", "ngSwitch"],
              ["formType", "from", 4, "ngSwitchCase"],
              ["formType", "to", 4, "ngSwitchCase"],
              [4, "ngSwitchCase"],
              [3, "ngStyle", 4, "ngIf"],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationStatus",
                "showCalculation",
                "selectTrade",
                4,
                "ngIf",
              ],
              [4, "ngIf"],
              ["formType", "from"],
              ["formType", "to"],
              [3, "ngStyle"],
              [
                3,
                "states",
                "selectedTradeType",
                "calculationStatus",
                "showCalculation",
                "selectTrade",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, os, 10, 18, "div", 0),
                e.nI1(1, "async"),
                e.nI1(2, "async"),
                e.nI1(3, "async"),
                e.nI1(4, "async"),
                e.nI1(5, "async")),
                2 & n &&
                  e.Y8G(
                    "ngLet",
                    e.s1E(
                      11,
                      rs,
                      e.bMT(1, 1, a.formContent$),
                      e.bMT(2, 3, a.providers$),
                      e.bMT(3, 5, a.selectedForm$),
                      e.bMT(4, 7, a.calculationStatus$),
                      e.bMT(5, 9, a.transactionState$)
                    )
                  );
            },
            dependencies: [
              _.YU,
              _.bT,
              _.B3,
              _.ux,
              _.e1,
              B.N,
              Hi,
              pa,
              yo,
              wn.R,
              Cr,
              Dr,
              Zr,
              _.Jj,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]     .back-button{display:flex;gap:var(--tui-padding-s);align-items:center;padding:0 5px;cursor:pointer}[_nghost-%COMP%]     .back-button__text{display:block;margin-right:auto;margin-left:auto;padding-right:14px}[_nghost-%COMP%]     .back-button__image{height:12px}.swap-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin:0 auto}.swap-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;width:600px;margin-right:10px;margin-left:10px;transition:.2s ease-in-out}.swap-container[_ngcontent-%COMP%]   .form_tokens[_ngcontent-%COMP%]{width:600px}.swap-container[_ngcontent-%COMP%]   .form_small[_ngcontent-%COMP%]{width:360px}.swap-container[_ngcontent-%COMP%]   app-swap-form-page[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.swap-container[_ngcontent-%COMP%]   app-preview-swap[_ngcontent-%COMP%], .swap-container[_ngcontent-%COMP%]   app-cn-preview-swap[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.swap-container[_ngcontent-%COMP%]   app-input-output-container[_ngcontent-%COMP%]:first-child{display:block;margin-bottom:1px}.swap-container[_ngcontent-%COMP%]   app-providers-list-general[_ngcontent-%COMP%]{display:block;width:360px;height:510px;background:var(--secondary-background);border-radius:17px}.large-iframe-swap-container[_ngcontent-%COMP%]{flex-direction:column;gap:10px}.large-iframe-swap-container[_ngcontent-%COMP%]   app-cn-trade-info[_ngcontent-%COMP%]{width:600px;margin:0 10px}@media (max-width: 651px){.swap-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-l);align-items:center;width:100%;margin:0 auto}.swap-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:360px;overflow:hidden}.swap-container[_ngcontent-%COMP%]   app-providers-list-general[_ngcontent-%COMP%]{width:360px;height:auto;overflow:hidden;background:none;border-radius:0}}",
            ],
            data: {
              animation: [
                (0, S.hZ)("inOutAnimation", [
                  (0, S.kY)(":enter", [
                    (0, S.iF)({ opacity: 0, scale: 0 }),
                    (0, S.i0)(
                      "0.25s ease-in-out",
                      (0, S.iF)({ opacity: 1, scale: 1 })
                    ),
                  ]),
                  (0, S.kY)(":leave", [
                    (0, S.iF)({ opacity: 0.5, width: "360px", scale: 1 }),
                    (0, S.i0)(
                      "0.25s ease-in-out",
                      (0, S.iF)({ opacity: 0, width: 0, scale: 0 })
                    ),
                  ]),
                ]),
              ],
            },
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const ss = [
        { path: "get-gas", canActivate: [Jn], component: Bn },
        { path: "preview", redirectTo: "" },
        { path: "", component: Bn },
      ];
      let cs = (() => {
        class i {
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵmod = e.$C({ type: i }));
          static #n = (this.ɵinj = e.G2t({
            imports: [$e.iI.forChild(ss), $e.iI],
          }));
        }
        return i;
      })();
      var $n = p(30640),
        Gt = p(308894);
      let ls = (() => {
          class i {
            constructor() {
              this.skipDefault = !0;
            }
            onClick(t) {
              this.skipDefault && (t.preventDefault(), t.stopPropagation());
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵdir = e.FsC({
              type: i,
              selectors: [["", "skipDefault", ""]],
              hostBindings: function (n, a) {
                1 & n &&
                  e.bIt("click", function (s) {
                    return a.onClick(s);
                  });
              },
              inputs: { skipDefault: "skipDefault" },
              exportAs: ["skipDefault"],
            }));
          }
          return i;
        })(),
        ds = (() => {
          class i {
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵcmp = e.VBU({
              type: i,
              selectors: [["app-promotion-badge"]],
              inputs: { data: "data", hideHint: "hideHint" },
              decls: 2,
              vars: 7,
              consts: [
                ["target", "_blank", 3, "skipDefault", "href"],
                [
                  "size",
                  "s",
                  "status",
                  "custom",
                  1,
                  "element__gas-refund-badge",
                  3,
                  "value",
                  "tuiHint",
                  "tuiHintHideDelay",
                ],
              ],
              template: function (n, a) {
                1 & n && (e.j41(0, "a", 0), e.nrm(1, "tui-tag", 1), e.k0s()),
                  2 & n &&
                    (e.Y8G("skipDefault", !a.data.href)(
                      "href",
                      null == a.data ? null : a.data.href,
                      e.B4B
                    ),
                    e.R7$(1),
                    e.xc7("background", a.data.bgColor && a.data.bgColor),
                    e.Y8G("value", a.data.label)(
                      "tuiHint",
                      (null == a.data ? null : a.data.hint) || null
                    )("tuiHintHideDelay", a.hideHint ? 0 : 200));
              },
              dependencies: [ls, rt.ud, h.XZ, h.ZF, h.JL, h.AZ],
              styles: [
                ".element__gas-refund-badge[_ngcontent-%COMP%]{font-weight:700!important;text-shadow:0 1px 4px rgba(0,0,0,.6196078431);background:linear-gradient(90deg,rgb(188,45,255) 0%,rgb(0,102,255) 99.18%);cursor:pointer}",
              ],
              changeDetection: 0,
            }));
          }
          return i;
        })(),
        ps = (() => {
          class i {
            transform(t, n, a = 2, o = !1) {
              return o && t.isLessThanOrEqualTo(0)
                ? "0"
                : t.multipliedBy(n).toFixed(a);
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵpipe = e.EJ8({
              name: "getUsdPrice",
              type: i,
              pure: !0,
            }));
          }
          return i;
        })();
      function us(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 24), e.EFF(1), e.nI1(2, "getUsdPrice"), e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet;
          e.R7$(1),
            e.SpI(
              " ~ ",
              e.ii3(2, 1, t.to.tokenAmount, t.to.price, 2, !0),
              "\xa0$ "
            );
        }
      }
      function _s(i, c) {
        if ((1 & i && e.nrm(0, "tui-tag", 25), 2 & i)) {
          const t = e.XpG(2).ngLet;
          e.Y8G(
            "tuiHint",
            "The most profitable trade according to our calculations"
          )("tuiHintHideDelay", t ? 0 : 200);
        }
      }
      function ms(i, c) {
        if ((1 & i && e.nrm(0, "app-promotion-badge", 26), 2 & i)) {
          const t = c.$implicit,
            n = e.XpG(2).ngLet;
          e.Y8G("data", t)("hideHint", n);
        }
      }
      function hs(i, c) {
        if ((1 & i && e.nrm(0, "tui-tag", 27), 2 & i)) {
          const t = e.XpG(4);
          e.Y8G(
            "tuiHint",
            null == t.tradeState.error ? null : t.tradeState.error.message
          );
        }
      }
      function gs(i, c) {
        if ((1 & i && e.nrm(0, "app-route-element", 28), 2 & i)) {
          const t = e.XpG(4);
          e.Y8G("tradeType", t.tradeState.tradeType)(
            "routes",
            t.tradeState.routes
          );
        }
      }
      const vs = function (i) {
          return { "element__provider-container_selected": i };
        },
        fs = function (i) {
          return { element__expander_active: i };
        };
      function bs(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(
            4,
            "div",
            9
          ),
            e.EFF(5),
            e.nI1(6, "shortenAmount"),
            e.nI1(7, "bigNumberFormat"),
            e.k0s(),
            e.j41(8, "div", 10),
            e.EFF(9, "Provider"),
            e.k0s(),
            e.j41(10, "div", 11),
            e.nrm(11, "img", 12),
            e.j41(12, "div", 13),
            e.EFF(13),
            e.k0s()()()(),
            e.j41(14, "div", 14),
            e.DNE(15, us, 3, 6, "div", 15),
            e.j41(16, "div", 16)(17, "div", 17),
            e.DNE(18, _s, 1, 2, "tui-tag", 18),
            e.DNE(19, ms, 1, 2, "app-promotion-badge", 19),
            e.DNE(20, hs, 1, 1, "tui-tag", 20),
            e.k0s(),
            e.j41(21, "div", 21),
            e.bIt("click", function (a) {
              e.eBV(t);
              const o = e.XpG(3);
              return e.Njj(o.toggleExpand(a));
            }),
            e.k0s()()()(),
            e.j41(22, "tui-expand", 22),
            e.DNE(23, gs, 1, 2, "ng-template", 23),
            e.k0s()();
        }
        if (2 & i) {
          const t = c.ngLet,
            n = e.XpG(2).ngLet,
            a = e.XpG();
          e.Y8G(
            "ngClass",
            e.eq3(
              19,
              vs,
              a.selectedTradeType ===
                (null == a.tradeState ? null : a.tradeState.tradeType)
            )
          ),
            e.R7$(5),
            e.Lme(
              " ",
              e.ii3(6, 12, e.bMT(7, 17, t.to.tokenAmount), 7, 5, !0),
              "\xa0",
              t.to.symbol.replaceAll("RBC", "CRAI"),
              " "
            ),
            e.R7$(6),
            e.Y8G("src", n.image, e.B4B)("alt", n.name),
            e.R7$(2),
            e.JRh(n.name.replaceAll("RBC", "CRAI")),
            e.R7$(2),
            e.Y8G(
              "ngIf",
              (null == t || null == t.to || null == t.to.tokenAmount
                ? null
                : t.to.tokenAmount.isFinite) &&
                (null == t || null == t.to || null == t.to.price
                  ? null
                  : t.to.price.gt(0))
            ),
            e.R7$(3),
            e.Y8G("ngIf", a.isBest),
            e.R7$(1),
            e.Y8G("ngForOf", a.tradeState.badges),
            e.R7$(1),
            e.Y8G("ngIf", null == a.tradeState ? null : a.tradeState.error),
            e.R7$(1),
            e.Y8G("ngClass", e.eq3(21, fs, a.expanded)),
            e.R7$(1),
            e.Y8G("expanded", a.expanded);
        }
      }
      const Cs = function (i, c) {
        return { element_shorted: i, element_disabled: c };
      };
      function ks(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 2),
            e.DNE(1, bs, 24, 23, "div", 3),
            e.nrm(2, "app-swap-data-element", 4),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.XpG(2);
          e.Y8G(
            "ngClass",
            e.l_i(
              6,
              Cs,
              n.shortedInfo,
              (null == n.tradeState ? null : n.tradeState.error) ||
                (null == n.tradeState ||
                null == n.tradeState.trade ||
                null == n.tradeState.trade.to ||
                null == n.tradeState.trade.to.tokenAmount
                  ? null
                  : n.tradeState.trade.to.tokenAmount.lte(0))
            )
          ),
            e.R7$(1),
            e.Y8G("ngLet", null == n.tradeState ? null : n.tradeState.trade),
            e.R7$(1),
            e.Y8G("gasInfo", n.getGasData())("feeInfoChange", n.getFeeInfo())(
              "time",
              n.getAverageTimeString()
            )("hideHint", t);
        }
      }
      function Ss(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, ks, 3, 9, "div", 1),
            e.nI1(2, "async"),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(1), e.Y8G("ngLet", e.bMT(2, 1, t.hideHint$));
        }
      }
      let Ts = (() => {
        class i {
          constructor(t) {
            (this.tradeInfoManager = t),
              (this.isBest = !1),
              (this.shortedInfo = !1),
              (this.expanded = !1);
          }
          toggleExpand(t) {
            t.preventDefault(), (this.expanded = !this.expanded);
          }
          getAverageTimeString() {
            return bn(this.tradeState.trade)
              ? "7 D"
              : `${
                  this.getProviderInfo(this.tradeState.tradeType)
                    ?.averageTime || 3
                } M`;
          }
          getProviderInfo(t) {
            return this.tradeInfoManager.getProviderInfo(t);
          }
          getFeeInfo() {
            return this.tradeInfoManager.getFeeInfo(this.tradeState.trade);
          }
          getGasData() {
            return this.tradeInfoManager.getGasData(this.tradeState.trade);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(Rt));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-provider-element"]],
            inputs: {
              tradeState: "tradeState",
              selectedTradeType: "selectedTradeType",
              isBest: "isBest",
              shortedInfo: "shortedInfo",
              hideHint$: "hideHint$",
            },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngLet"],
              ["class", "element", 3, "ngClass", 4, "ngLet"],
              [1, "element", 3, "ngClass"],
              [
                "class",
                "element__provider-container",
                3,
                "ngClass",
                4,
                "ngLet",
              ],
              [3, "gasInfo", "feeInfoChange", "time", "hideHint"],
              [1, "element__provider-container", 3, "ngClass"],
              [1, "element__amounts-container"],
              [1, "element__amount"],
              [1, "element__token"],
              [1, "element__token-amount"],
              [1, "element__token-provider"],
              [1, "element__token-info"],
              [1, "element__token-image", 3, "src", "alt"],
              [1, "element__token-symbol"],
              [1, "element__right"],
              ["class", "element__amount-price", 4, "ngIf"],
              [1, "element__row"],
              [1, "element__row-badges"],
              [
                "class",
                "element__best-badge",
                "size",
                "s",
                "status",
                "custom",
                "value",
                "Best",
                3,
                "tuiHint",
                "tuiHintHideDelay",
                4,
                "ngIf",
              ],
              [3, "data", "hideHint", 4, "ngFor", "ngForOf"],
              [
                "class",
                "element__warning-badge",
                "size",
                "s",
                "status",
                "custom",
                "value",
                "Warn",
                3,
                "tuiHint",
                4,
                "ngIf",
              ],
              [
                "inlineSVG",
                "assets/images/icons/arrow-down.svg",
                1,
                "element__expander",
                3,
                "ngClass",
                "click",
              ],
              [3, "expanded"],
              ["tuiExpandContent", ""],
              [1, "element__amount-price"],
              [
                "size",
                "s",
                "status",
                "custom",
                "value",
                "Best",
                1,
                "element__best-badge",
                3,
                "tuiHint",
                "tuiHintHideDelay",
              ],
              [3, "data", "hideHint"],
              [
                "size",
                "s",
                "status",
                "custom",
                "value",
                "Warn",
                1,
                "element__warning-badge",
                3,
                "tuiHint",
              ],
              [3, "tradeType", "routes"],
            ],
            template: function (n, a) {
              1 & n && e.DNE(0, Ss, 3, 3, "ng-container", 0),
                2 & n &&
                  e.Y8G("ngLet", a.getProviderInfo(a.tradeState.tradeType));
            },
            dependencies: [
              _.YU,
              _.Sq,
              _.bT,
              B.N,
              Gt.sv,
              Gt.ND,
              rt.ud,
              W.ll,
              h.XZ,
              h.ZF,
              h.JL,
              h.AZ,
              Cn,
              Sn,
              ds,
              _.Jj,
              fe.p,
              ke.W,
              ps,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.element[_ngcontent-%COMP%]{overflow:hidden;background:var(--primary-background);border-radius:var(--tui-radius-m);cursor:pointer}.element_disabled[_ngcontent-%COMP%]{cursor:no-drop;opacity:.75}.element__provider-container[_ngcontent-%COMP%]{padding:var(--tui-padding-l);border-bottom:1px solid var(--tui-secondary)}.element__provider-container_selected[_ngcontent-%COMP%]{background:var(--io-background)}.element__row[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:flex-start}.element__row-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--tui-padding-s);justify-content:flex-end}.element__amounts-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.element__amount[_ngcontent-%COMP%]{display:flex;align-items:center}.element__token[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-xs)}.element__token-info[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);align-items:center}.element__token-provider[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:500;font-size:18px;line-height:18px;letter-spacing:.54px;display:none}.element__token-image[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:100%}.element__token-amount[_ngcontent-%COMP%]{max-width:145px;overflow:hidden;font-weight:700;font-size:18px;text-overflow:ellipsis}.element__token-symbol[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:14px}.element__amount-price[_ngcontent-%COMP%]{color:var(--tui-text-03);font-weight:400;font-size:14px}.element__middle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.element__provider[_ngcontent-%COMP%]{display:flex;align-items:center}.element__provider-image[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:var(--tui-padding-m);border-radius:100%}.element__provider-label[_ngcontent-%COMP%]{color:var(--tui-text-03)}.element__best-badge[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700!important;text-transform:uppercase;background:linear-gradient(90deg,rgba(0,255,117,.6) 0%,rgba(224,255,32,.6) 99.18%);cursor:pointer}.element__warning-badge[_ngcontent-%COMP%]{font-weight:700!important;text-transform:uppercase;background:linear-gradient(90deg,rgba(204,141,23,.83) 0%,rgba(213,185,5,.94) 99.18%);cursor:pointer}  .element__expander{display:flex;align-items:center;justify-content:center;width:20px;height:20px}  .element__expander svg{transition:.2s ease-in-out}  .element__expander_active svg{transform:rotate(180deg);transform-origin:center}  .element__expander_active svg path{fill:var(--tui-text-03)}  .element__expander svg path{fill:var(--tui-text-03)}.element__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--tui-padding-xs);align-items:flex-end}app-route-element[_ngcontent-%COMP%]{display:block;margin-top:var(--tui-padding-l)}@media (max-width: 651px){.element_shorted[_ngcontent-%COMP%]   .element__amounts-container[_ngcontent-%COMP%]{align-items:end}.element_shorted[_ngcontent-%COMP%]   .element__token-info[_ngcontent-%COMP%]{gap:var(--tui-padding-s)}.element_shorted[_ngcontent-%COMP%]   .element__token[_ngcontent-%COMP%]{gap:var(--tui-padding-m)}.element_shorted[_ngcontent-%COMP%]   .element__token-provider[_ngcontent-%COMP%]{display:block}.element_shorted[_ngcontent-%COMP%]   .element__token-image[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:100%}.element_shorted[_ngcontent-%COMP%]   .element__token-symbol[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:18px;line-height:18px;letter-spacing:.54px}.element_shorted[_ngcontent-%COMP%]   .element__token-amount[_ngcontent-%COMP%]{display:none}.element_shorted[_ngcontent-%COMP%]   .element__right[_ngcontent-%COMP%]{gap:var(--tui-padding-m)}.element_shorted[_ngcontent-%COMP%]   .element__amount-price[_ngcontent-%COMP%]{display:none}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var lt = p(6249),
        ws = p(278323),
        ys = p(817944),
        As = p(594350),
        Fn = p(801203);
      let xs = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.$C({ type: i })),
          (i.ɵinj = e.G2t({})),
          i
        );
      })();
      var Ye = p(127367),
        Os = p(651146),
        Ln = p(491813),
        be = p(353893);
      let Ne = (() => {
        class i {
          get query() {
            return this._query$.value;
          }
          set query(t) {
            this._query$.next(t.trim());
          }
          constructor(t, n, a) {
            (this.assetsSelectorService = t),
              (this.destroy$ = n),
              (this.formsTogglerService = a),
              (this._query$ = new N.t("")),
              (this.query$ = this._query$.asObservable()),
              this.subscribeOnSelectorListTypeChange();
          }
          subscribeOnSelectorListTypeChange() {
            this.assetsSelectorService.selectorListType$
              .pipe(
                (0, G.v)(this.formsTogglerService.selectedForm$),
                (0, L.F)(),
                (0, q.Q)(this.destroy$)
              )
              .subscribe(() => {
                this.query = "";
              });
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.KVO(be.Y), e.KVO(j.ew), e.KVO(ge.D));
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var dt = p(554978),
        Ht = p(946221);
      function Is(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "tui-input", 3),
            e.bIt("ngModelChange", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onQueryChanges(a));
            }),
            e.EFF(1),
            e.nI1(2, "translate"),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.Y8G("ngModel", t)("tuiTextfieldIconLeft", "tuiIconSearch")(
            "tuiTextfieldSize",
            "m"
          )("tuiTextfieldLabelOutside", !0),
            e.R7$(1),
            e.SpI(" ", e.bMT(2, 5, n.searchBarText), " ");
        }
      }
      function Ps(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 4),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.expand());
            }),
            e.j41(1, "tui-input", 5),
            e.bIt("ngModelChange", function (a) {
              e.eBV(t);
              const o = e.XpG(2);
              return e.Njj(o.onQueryChanges(a));
            }),
            e.EFF(2),
            e.nI1(3, "translate"),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.AVh("expandable-input_expanded", n.isExpanded),
            e.R7$(1),
            e.Y8G("ngModel", t)("tuiTextfieldIcon", "tuiIconSearch")(
              "tuiTextfieldCleaner",
              !0
            ),
            e.R7$(1),
            e.SpI(
              " ",
              e.bMT(3, 6, "modals.tokensListModal.searchPlaceholder"),
              " "
            );
        }
      }
      function Ms(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Is, 3, 7, "tui-input", 1),
            e.DNE(2, Ps, 4, 8, "ng-template", null, 2, e.C5r),
            e.bVm()),
          2 & i)
        ) {
          const t = e.sdS(3),
            n = e.XpG();
          e.R7$(1), e.Y8G("ngIf", !n.expandableField)("ngIfElse", t);
        }
      }
      let pt = (() => {
        class i {
          ngOnInit() {
            (this.searchBarText =
              "blockchains" === this.searchBarType
                ? `Search among ${this.blockchainListService.availableBlockchains.length} Chains`
                : "modals.tokensListModal.searchPlaceholder"),
              (this.searchQuery$ =
                "blockchains" === this.searchBarType
                  ? this.assetsSearchQueryService.assetsQuery$
                  : this.searchQueryService.query$);
          }
          constructor(t, n, a, o) {
            (this.searchQueryService = t),
              (this.assetsSearchQueryService = n),
              (this.headerStore = a),
              (this.blockchainListService = o),
              (this.expandableField = !1),
              (this.isExpanded = !1),
              (this.searchBarSize = this.headerStore.isMobile ? "m" : "s");
          }
          onQueryChanges(t) {
            "tokens" === this.searchBarType
              ? (this.searchQueryService.query = t)
              : "blockchains" === this.searchBarType &&
                (this.assetsSearchQueryService.assetsQuery = t);
          }
          expand() {
            this.isExpanded = !this.isExpanded;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(Ne),
              e.rXU(Ht.x),
              e.rXU(K.X),
              e.rXU(dt.h)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-search-bar"]],
            inputs: {
              expandableField: "expandableField",
              injector: "injector",
              searchBarType: "searchBarType",
            },
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngLet"],
              [
                3,
                "ngModel",
                "tuiTextfieldIconLeft",
                "tuiTextfieldSize",
                "tuiTextfieldLabelOutside",
                "ngModelChange",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["expandableInputTpl", ""],
              [
                3,
                "ngModel",
                "tuiTextfieldIconLeft",
                "tuiTextfieldSize",
                "tuiTextfieldLabelOutside",
                "ngModelChange",
              ],
              [1, "expandable-input", 3, "click"],
              [
                "tuiTextfieldSize",
                "l",
                3,
                "ngModel",
                "tuiTextfieldIcon",
                "tuiTextfieldCleaner",
                "ngModelChange",
              ],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Ms, 4, 2, "ng-container", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.searchQuery$));
            },
            dependencies: [
              _.bT,
              B.N,
              Me.mp,
              Me.Ws,
              Y.BC,
              Y.vS,
              pe.np,
              pe.kf,
              pe.G6,
              pe.OC,
              pe.dx,
              _.Jj,
              J.D9,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Ns = p(365089),
        ut = p(981357),
        Ee = p(538349);
      const Es = {
        [r.BLOCKCHAIN_NAME.POLYGON_ZKEVM]:
          "https://app.layer3.xyz/streaks/swap-on-rubic",
        [r.BLOCKCHAIN_NAME.ZK_SYNC]:
          "https://www.intract.io/quest/6659a29721949f76bb4714df",
        [r.BLOCKCHAIN_NAME.MODE]:
          "https://app.layer3.xyz/quests/rubic-on-mode?slug=rubic-on-mode",
        [r.BLOCKCHAIN_NAME.BLAST]:
          "https://app.layer3.xyz/quests/blast-through-rubic-exchange?slug=blast-through-rubic-exchange",
        [r.BLOCKCHAIN_NAME.TAIKO]:
          "https://rubic.exchange/blog/how-to-bridge-to-and-from-taiko-and-get-taiko-airdrop/",
        [r.BLOCKCHAIN_NAME.SCROLL]: "https://docs.crystalballsai.xyz",
        [r.BLOCKCHAIN_NAME.OPTIMISM]:
          "https://app.layer3.xyz/quests/supercharge-op-rubic?slug=supercharge-op-rubic",
        [r.BLOCKCHAIN_NAME.SOLANA]:
          "https://solana.layer3.xyz/quests/solana-ecosystem-rubic?slug=solana-ecosystem-rubic",
        [r.BLOCKCHAIN_NAME.LINEA]: "https://nomis.cc/quests?group=24",
        [r.BLOCKCHAIN_NAME.ROOTSTOCK]:
          "https://app.galxe.com/quest/Qubic AI/GC5w9tKX65",
      };
      function Rs(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "a", 1)(2, "span"),
            e.EFF(3),
            e.nI1(4, "uppercase"),
            e.k0s(),
            e.nrm(5, "img", 2),
            e.k0s(),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(1),
            e.Y8G("href", t.blockchainPromoLinks[t.blockchain], e.B4B),
            e.R7$(2),
            e.JRh(e.bMT(4, 2, t.tag));
        }
      }
      function Bs(i, c) {
        1 & i &&
          (e.qex(0), e.j41(1, "a", 3), e.nrm(2, "img", 4), e.k0s(), e.bVm());
      }
      function $s(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "div", 5)(2, "span"),
            e.EFF(3),
            e.nI1(4, "uppercase"),
            e.k0s()(),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(3), e.JRh(e.bMT(4, 1, t.tag));
        }
      }
      let Dn = (() => {
        class i {
          constructor() {
            (this.blockchainTags = Ee.g), (this.blockchainPromoLinks = Es);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-blockchains-promo-badge"]],
            inputs: { tag: "tag", blockchain: "blockchain" },
            decls: 3,
            vars: 3,
            consts: [
              [4, "ngIf"],
              ["target", "_blank", 1, "badge-element", "promo", 3, "href"],
              ["src", "assets/images/icons/promo-link.svg"],
              [
                "target",
                "_blank",
                1,
                "badge-element",
                "badge-element_full",
                "birthday",
              ],
              ["src", "assets/images/icons/bday_promo.svg"],
              [1, "badge-element", "new"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Rs, 6, 4, "ng-container", 0),
                e.DNE(1, Bs, 3, 0, "ng-container", 0),
                e.DNE(2, $s, 5, 3, "ng-container", 0)),
                2 & n &&
                  (e.Y8G("ngIf", a.tag === a.blockchainTags.PROMO),
                  e.R7$(1),
                  e.Y8G("ngIf", a.tag === a.blockchainTags.BDAY_PROMO),
                  e.R7$(1),
                  e.Y8G("ngIf", a.tag === a.blockchainTags.NEW));
            },
            dependencies: [_.bT, _.Pc],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.badge-element[_ngcontent-%COMP%]{display:flex;gap:2px;align-items:center;justify-content:center;width:45px;height:15px;margin-right:8px;font-size:50%;border-radius:4px}.badge-element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50%}.promo[_ngcontent-%COMP%]{background:linear-gradient(150deg,#23dca4 8%,#377fec 60%,#7e1dca 90%)}.new[_ngcontent-%COMP%]{background:linear-gradient(160deg,#fab2ff 10%,#1904e5 90%)}.birthday[_ngcontent-%COMP%]{background:transparent}.birthday[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}@media (max-width: 651px){.badge-element[_ngcontent-%COMP%]{width:83px;height:24px;font-size:70%;border-radius:6px}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Gn = p(361201);
      let Fs = (() => {
        class i {
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵmod = e.$C({ type: i }));
          static #n = (this.ɵinj = e.G2t({
            providers: [se.p, Ne, ge.D, be.Y, ut.s, Ht.x],
            imports: [
              _.MD,
              $n.G,
              we.FC,
              Me.zi,
              Y.YN,
              pe.CN,
              As.vl,
              oe.Pv,
              Ye.E9,
              h.Q3,
              h.Q3,
              lt.Yc,
              W.e1,
              Os.Yk,
              st.NT,
              xs,
              Ln.L,
              Nn.ML,
              Fn.Jk,
            ],
          }));
        }
        return i;
      })();
      e.wjB(
        Ns.F,
        [_.Sq, _.bT, B.N, gn.q, we.UB, oe.SM, h.XZ, h.ZF, h.JL, h.AZ, pt, Dn],
        [_.Jj, Gn.J]
      );
      let ye = (() => {
        class i {
          constructor() {
            (this._listType$ = new N.t("default")),
              (this.listType$ = this._listType$.asObservable());
          }
          get listType() {
            return this._listType$.value;
          }
          set listType(t) {
            this._listType$.next(t);
          }
          switchListType() {
            this.listType =
              "default" === this.listType ? "favorite" : "default";
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Ls = p(436106);
      const Ds = {
        ...Object.values(r.BLOCKCHAIN_NAME).reduce(
          (i, c) => ({ ...i, [c]: null }),
          {}
        ),
        [r.BLOCKCHAIN_NAME.ETHEREUM]: "ethereum",
        [r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: "smartchain",
        [r.BLOCKCHAIN_NAME.POLYGON]: "polygon",
        [r.BLOCKCHAIN_NAME.POLYGON_ZKEVM]: "polygon",
        [r.BLOCKCHAIN_NAME.AVALANCHE]: "avalanche",
        [r.BLOCKCHAIN_NAME.MOONRIVER]: "moonriver",
        [r.BLOCKCHAIN_NAME.FANTOM]: "fantom",
        [r.BLOCKCHAIN_NAME.ARBITRUM]: "arbitrum",
        [r.BLOCKCHAIN_NAME.AURORA]: "aurora",
        [r.BLOCKCHAIN_NAME.TELOS]: "telos",
        [r.BLOCKCHAIN_NAME.HARMONY]: "harmony",
        [r.BLOCKCHAIN_NAME.SOLANA]: "solana",
        [r.BLOCKCHAIN_NAME.NEAR]: "near",
        [r.BLOCKCHAIN_NAME.OPTIMISM]: "optimism",
        [r.BLOCKCHAIN_NAME.CRONOS]: "cronos",
        [r.BLOCKCHAIN_NAME.GNOSIS]: "xdai",
        [r.BLOCKCHAIN_NAME.MOONBEAM]: "moonbeam",
        [r.BLOCKCHAIN_NAME.CELO]: "celo",
        [r.BLOCKCHAIN_NAME.BOBA]: "boba",
        [r.BLOCKCHAIN_NAME.ASTAR_EVM]: "astar_evm",
        [r.BLOCKCHAIN_NAME.BITCOIN]: "bitcoin",
        [r.BLOCKCHAIN_NAME.ETHEREUM_POW]: "ethereum-pow",
        [r.BLOCKCHAIN_NAME.TRON]: "tron",
        [r.BLOCKCHAIN_NAME.KAVA]: "kava",
        [r.BLOCKCHAIN_NAME.BITGERT]: "bitgert",
        [r.BLOCKCHAIN_NAME.OASIS]: "oasis",
        [r.BLOCKCHAIN_NAME.METIS]: "metis",
        [r.BLOCKCHAIN_NAME.DFK]: "defi-kingdoms",
        [r.BLOCKCHAIN_NAME.KLAYTN]: "kaia",
        [r.BLOCKCHAIN_NAME.VELAS]: "velas",
        [r.BLOCKCHAIN_NAME.SYSCOIN]: "syscoin",
        [r.BLOCKCHAIN_NAME.PULSECHAIN]: "pulsechain",
        [r.BLOCKCHAIN_NAME.LINEA]: "linea",
        [r.BLOCKCHAIN_NAME.BASE]: "base",
        [r.BLOCKCHAIN_NAME.MANTLE]: "mantle",
        [r.BLOCKCHAIN_NAME.MANTA_PACIFIC]: "manta-pacific",
        [r.BLOCKCHAIN_NAME.SCROLL]: "scroll",
        [r.BLOCKCHAIN_NAME.ZETACHAIN]: "zetachain",
        [r.BLOCKCHAIN_NAME.BLAST]: "blast",
        [r.BLOCKCHAIN_NAME.KROMA]: "kroma",
        [r.BLOCKCHAIN_NAME.MERLIN]: "merlin",
        [r.BLOCKCHAIN_NAME.ROOTSTOCK]: "rootstock",
        [r.BLOCKCHAIN_NAME.MODE]: "mode",
        [r.BLOCKCHAIN_NAME.ZK_FAIR]: "zkfair",
        [r.BLOCKCHAIN_NAME.ZK_LINK]: "zklink",
        [r.BLOCKCHAIN_NAME.XLAYER]: "xlayer",
        [r.BLOCKCHAIN_NAME.TAIKO]: "taiko",
        [r.BLOCKCHAIN_NAME.SEI]: "sei",
        [r.BLOCKCHAIN_NAME.CORE]: "core",
        [r.BLOCKCHAIN_NAME.BAHAMUT]: "bahamut",
        [r.BLOCKCHAIN_NAME.GRAVITY]: "gravity",
      };
      let _t = (() => {
        class i {
          get searchLoading() {
            return this._searchLoading$.value;
          }
          set searchLoading(t) {
            this._searchLoading$.next(t);
          }
          get tokensToShow() {
            return this._tokensToShow$.value;
          }
          set tokensToShow(t) {
            this._tokensToShow$.next(t);
          }
          get customToken() {
            return this._customToken$.value;
          }
          set customToken(t) {
            this._customToken$.next(t);
          }
          get searchQuery() {
            return this.searchQueryService.query;
          }
          get blockchain() {
            const t = this.assetsSelectorService.assetType;
            return r.BlockchainsInfo.isBlockchainName(t) ? t : null;
          }
          get listType() {
            return this.tokensListTypeService.listType;
          }
          constructor(t, n, a, o, s, l, u, d) {
            (this.tokensListTypeService = t),
              (this.searchQueryService = n),
              (this.tokensService = a),
              (this.tokensStoreService = o),
              (this.assetsSelectorService = s),
              (this.httpClient = l),
              (this.swapFormService = u),
              (this.destroy$ = d),
              (this.updateTokens$ = new Ct.B()),
              (this._searchLoading$ = new N.t(!1)),
              (this.searchLoading$ = this._searchLoading$.asObservable()),
              (this._tokensToShow$ = new N.t([])),
              (this.tokensToShow$ = this._tokensToShow$.asObservable()),
              (this._customToken$ = new N.t(void 0)),
              (this.customToken$ = this._customToken$.asObservable()),
              this.subscribeOnUpdateTokens(),
              this.subscribeOnTokensChange(),
              this.subscribeOnSearchQueryChange(),
              this.subscribeOnBlockchainChange(),
              this.subscribeOnListType();
          }
          subscribeOnTokensChange() {
            (0, Fe.z)([
              this.tokensStoreService.tokens$,
              this.tokensStoreService.favoriteTokens$,
            ])
              .pipe((0, q.Q)(this.destroy$))
              .subscribe(() => {
                this.searchQuery || this.updateTokens();
              });
          }
          subscribeOnSearchQueryChange() {
            (0, Fe.z)([
              this.searchQueryService.query$,
              this.assetsSelectorService.selectorListType$,
            ])
              .pipe(
                (0, te.p)(([t, n]) => "tokens" === n),
                (0, q.Q)(this.destroy$)
              )
              .subscribe(() => {
                this.updateTokens();
              });
          }
          subscribeOnBlockchainChange() {
            this.assetsSelectorService.assetType$
              .pipe(
                (0, L.F)(),
                (0, te.p)((t) => r.BlockchainsInfo.isBlockchainName(t)),
                (0, q.Q)(this.destroy$)
              )
              .subscribe(() => {
                this.updateTokens();
              });
          }
          subscribeOnListType() {
            this.tokensListTypeService.listType$
              .pipe((0, q.Q)(this.destroy$))
              .subscribe(() => {
                this.updateTokens();
              });
          }
          updateTokens() {
            this.updateTokens$.next();
          }
          subscribeOnUpdateTokens() {
            this.updateTokens$
              .pipe(
                (0, A.n)(() =>
                  this.searchQuery.length
                    ? "default" === this.listType
                      ? this.getDefaultTokensByQuery()
                      : (0, y.of)({
                          tokensToShow: this.getFilteredFavoriteTokens(),
                        })
                    : (0, y.of)({ tokensToShow: this.getSortedTokens() })
                ),
                (0, q.Q)(this.destroy$)
              )
              .subscribe((t) => {
                "tokensToShow" in t
                  ? ((this.tokensToShow = t.tokensToShow),
                    (this.customToken = null))
                  : ((this.tokensToShow = []),
                    (this.customToken = t.customToken)),
                  (this.searchLoading = !1);
              });
          }
          getDefaultTokensByQuery() {
            var t = this;
            return (0, Se.O)(300).pipe(
              (0, X.M)(() => (this.searchLoading = !0)),
              (0, A.n)(() => this.tryParseQueryAsBackendTokens()),
              (0, A.n)(
                (function () {
                  var n = (0, C.A)(function* (a) {
                    if (a?.length) return { tokensToShow: a };
                    const o = yield t.tryParseQueryAsCustomToken();
                    return o ? { customToken: o } : { tokensToShow: [] };
                  });
                  return function (a) {
                    return n.apply(this, arguments);
                  };
                })()
              )
            );
          }
          tryParseQueryAsBackendTokens() {
            return this.searchQuery && this.blockchain
              ? this.tokensService
                  .fetchQueryTokens(this.searchQuery, this.blockchain)
                  .pipe(
                    (0, k.T)((t) =>
                      t.size
                        ? t
                            .map((n) => ({
                              ...n,
                              available: this.isTokenAvailable(n),
                              favorite: this.isTokenFavorite(n),
                            }))
                            .toArray()
                        : []
                    )
                  )
              : (0, y.of)([]);
          }
          tryParseQueryAsCustomToken() {
            var t = this;
            return (0, C.A)(function* () {
              try {
                if (t.searchQuery && t.blockchain) {
                  const n =
                      t.blockchain === r.BLOCKCHAIN_NAME.SOLANA
                        ? t.searchQuery
                        : t.searchQuery.toLowerCase(),
                    a = yield Ls.Token.createToken({
                      blockchain: t.blockchain,
                      address: n,
                    });
                  if (a?.name && a?.symbol && a?.decimals) {
                    const o = yield t.fetchTokenImage(a);
                    return {
                      ...a,
                      image: o,
                      rank: 0,
                      amount: new E.A(NaN),
                      price: 0,
                      available: t.isTokenAvailable(a),
                      favorite: t.isTokenFavorite(a),
                      tokenSecurity: yield t.getTokenSecurity(a),
                    };
                  }
                }
              } catch {}
              return null;
            })();
          }
          fetchTokenImage(t) {
            var n = this;
            return (0, C.A)(function* () {
              const a = Ds[t.blockchain];
              if (!a) return at.c;
              const s = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${a}/assets/${
                r.BlockchainsInfo.isEvmBlockchainName(t.blockchain)
                  ? r.EvmWeb3Pure.toChecksumAddress(t.address)
                  : t.address
              }/logo.png`;
              return (0,
              D._)(n.httpClient.get(s).pipe((0, re.W)((l) => (0, y.of)(200 === l?.status ? s : at.c))));
            })();
          }
          getFilteredFavoriteTokens() {
            const t = this.tokensStoreService.favoriteTokens.toArray(),
              n = this.searchQuery.toLowerCase(),
              a = t
                .filter((o) => o.blockchain === this.blockchain)
                .map((o) => ({
                  ...o,
                  available: this.isTokenAvailable(o),
                  favorite: !0,
                }));
            if (n.startsWith("0x"))
              return a.filter((o) => o.address.toLowerCase().includes(n));
            {
              const o = a.filter((l) => l.symbol.toLowerCase().includes(n)),
                s = a.filter((l) => l.name.toLowerCase().includes(n));
              return o.concat(
                s.filter((l) =>
                  o.every((u) => !(0, x.Qb)(l.address, u.address))
                )
              );
            }
          }
          getSortedTokens() {
            if ("default" === this.listType) {
              const n = this.tokensStoreService.tokens
                .toArray()
                .filter(
                  (a) =>
                    a.blockchain === this.blockchain && this.isTokenAvailable(a)
                )
                .map((a) => ({
                  ...a,
                  available: !0,
                  favorite: this.isTokenFavorite(a),
                }));
              return this.sortTokensByComparator(n);
            }
            {
              const n = this.tokensStoreService.favoriteTokens
                .toArray()
                .filter((a) => a.blockchain === this.blockchain)
                .map((a) => ({
                  ...a,
                  available: this.isTokenAvailable(a),
                  favorite: !0,
                }));
              return this.sortTokensByComparator(n);
            }
          }
          sortTokensByComparator(t) {
            const n = (o, s) => {
                const l = o.amount.isFinite()
                    ? o.amount.multipliedBy(null === o.price ? 0 : o.price)
                    : new E.A(0),
                  u = s.amount.isFinite()
                    ? s.amount.multipliedBy(null === s.price ? 0 : s.price)
                    : new E.A(0),
                  d = o.amount?.gt(0),
                  m = s.amount?.gt(0),
                  v = Number(s.available) - Number(o.available),
                  g = u.minus(l).toNumber(),
                  f = Number(m) - Number(d);
                return v || g || f || s.rank - o.rank;
              },
              a = t.findIndex((o) => {
                const s = r.BlockchainsInfo.getChainType(o.blockchain);
                return r.Web3Pure[s].isNativeAddress(o.address);
              });
            if (a < 0) return t.sort(n);
            {
              const o = [...t.slice(0, a), ...t.slice(a + 1, t.length)];
              return [t[a], ...o.sort(n)];
            }
          }
          isTokenFavorite(t) {
            return this.tokensStoreService.favoriteTokens.some((n) =>
              (0, x._f)(n, t)
            );
          }
          isTokenAvailable(t) {
            const n = this.oppositeToken();
            return !n || !(0, x._f)(n, t);
          }
          oppositeToken() {
            const n =
              this.swapFormService.inputValue[
                "from" === this.assetsSelectorService.formType
                  ? "toToken"
                  : "fromToken"
              ];
            return (0, xe.Tl)(n) ? n : null;
          }
          getTokenSecurity(t) {
            return this.tokensService.fetchTokenSecurity(
              t.address,
              t.blockchain
            );
          }
          isBalanceLoading$(t) {
            return this.tokensStoreService.isBalanceLoading$(t);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(ye),
              e.KVO(Ne),
              e.KVO(_e.m),
              e.KVO(Z.p),
              e.KVO(be.Y),
              e.KVO(ht.Qq),
              e.KVO(M.K),
              e.KVO(j.ew)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      var Gs = p(1876);
      let Hn = (() => {
        class i {
          get loading() {
            return (
              this._listUpdating$.value ||
              this.tokensListStoreService.searchLoading
            );
          }
          set listAnimationType(t) {
            this._listAnimationType$.next(t);
          }
          get listType() {
            return this.tokensListTypeService.listType;
          }
          get tokensToShow() {
            return this.tokensListStoreService.tokensToShow;
          }
          constructor(t, n, a, o, s, l, u) {
            (this.tokensListStoreService = t),
              (this.tokensListTypeService = n),
              (this.tokensStoreService = a),
              (this.tokensNetworkService = o),
              (this.assetsSelectorService = s),
              (this.searchQueryService = l),
              (this.destroy$ = u),
              (this._listUpdating$ = new N.t(!1)),
              (this.loading$ = (0, Fe.z)([
                this._listUpdating$,
                this.tokensListStoreService.searchLoading$,
              ]).pipe((0, k.T)(([d, m]) => d || m))),
              (this.listScrollSubject$ = new N.t(void 0)),
              (this._listAnimationType$ = new N.t("shown")),
              (this.listAnimationType$ =
                this._listAnimationType$.asObservable()),
              this.subscribeOnScroll(),
              this.subscribeOnTokensToShow();
          }
          setListScrollSubject(t) {
            t && this.listScrollSubject$.next(t);
          }
          resetScrollToTop() {
            this.listScrollSubject$.value &&
              this.listScrollSubject$.value.scrollToIndex(0);
          }
          subscribeOnScroll() {
            this.listScrollSubject$
              .pipe(
                (0, te.p)((t) => !!t),
                (0, A.n)((t) => t.renderedRangeStream),
                (0, te.p)((t) => !this.skipTokensFetching(t.end)),
                (0, q.Q)(this.destroy$)
              )
              .subscribe(() => {
                this._listUpdating$.next(!0),
                  this.tokensNetworkService.fetchNetworkTokens(
                    this.assetsSelectorService.assetType,
                    () => this._listUpdating$.next(!1)
                  );
              });
          }
          subscribeOnTokensToShow() {
            let t = this.searchQueryService.query,
              n = this.listType;
            this.tokensListStoreService.tokensToShow$
              .pipe((0, Te.J)(), (0, q.Q)(this.destroy$))
              .subscribe(([a, o]) => {
                if (a?.length && o?.length) {
                  let u = a[0].blockchain !== o[0].blockchain;
                  (u ||= n !== this.listType),
                    (n = this.listType),
                    u &&
                      ((this.listAnimationType = "hidden"),
                      setTimeout(() => {
                        this.listAnimationType = "shown";
                      }));
                }
                (a?.[0]?.blockchain !== o?.[0]?.blockchain ||
                  t !== this.searchQueryService.query) &&
                  (this.resetScrollToTop(),
                  (t = this.searchQueryService.query));
              });
          }
          skipTokensFetching(t) {
            const n = this.assetsSelectorService.assetType;
            if (!r.BlockchainsInfo.isBlockchainName(n)) return !0;
            const a = this.tokensNetworkService.tokensNetworkState[n];
            return (
              !(
                !this.loading &&
                !this.searchQueryService.query &&
                "favorite" !== this.listType &&
                a &&
                a.maxPage !== a.page
              ) || this.tokensToShow.length - t > 10
            );
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.KVO(_t),
              e.KVO(ye),
              e.KVO(Z.p),
              e.KVO(Gs.A),
              e.KVO(be.Y),
              e.KVO(Ne),
              e.KVO(j.ew)
            );
          });
          static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
        }
        return i;
      })();
      const Hs = [be.Y, Ne, dt.h, ut.s, ye, _t, Hn, j.ew, Ht.x];
      var Vs = p(172617);
      function js(i, c) {
        if ((1 & i && (e.nrm(0, "img", 2), e.nI1(1, "lowercase")), 2 & i)) {
          const t = e.XpG();
          e.Y8G(
            "src",
            "assets/images/icons/blockchain-filters/" +
              e.bMT(1, 1, t.blockchainFilter) +
              ".svg",
            e.B4B
          );
        }
      }
      const Ys = function (i) {
        return { "filter-list-element__clicked-element": i };
      };
      let Vn = (() => {
        class i {
          static #e = (this.ɵfac = function (n) {
            return new (n || i)();
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-filter-list-element"]],
            inputs: {
              blockchainFilter: "blockchainFilter",
              isSelected: "isSelected",
            },
            decls: 3,
            vars: 5,
            consts: [
              [
                "tuiButton",
                "",
                "type",
                "button",
                "appearance",
                "secondary",
                "size",
                "m",
                1,
                "filter-list-element",
                3,
                "ngClass",
              ],
              ["class", "filter-list-element__icon", 3, "src", 4, "ngIf"],
              [1, "filter-list-element__icon", 3, "src"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "button", 0),
                e.EFF(1),
                e.DNE(2, js, 2, 3, "img", 1),
                e.k0s()),
                2 & n &&
                  (e.Y8G("ngClass", e.eq3(3, Ys, a.isSelected)),
                  e.R7$(1),
                  e.SpI(" ", a.blockchainFilter, " "),
                  e.R7$(1),
                  e.Y8G("ngIf", "All" !== a.blockchainFilter));
            },
            dependencies: [_.YU, _.bT, oe.SM, _.GH],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.filter-list-element[_ngcontent-%COMP%]     .t-wrapper{width:90px;padding:0!important;background:var(--tui-base-01)}.filter-list-element[_ngcontent-%COMP%]     .t-content{gap:8px;font-size:12px}.filter-list-element__icon[_ngcontent-%COMP%]{filter:invert(0);transition:filter var(--tui-duration, .3s) ease-in-out}.filter-list-element__clicked-element[_ngcontent-%COMP%]     .t-wrapper{color:#000;background:var(--tui-primary)}.filter-list-element__clicked-element[_ngcontent-%COMP%]     .t-wrapper:hover{background-color:var(--tui-primary)}.filter-list-element__clicked-element[_ngcontent-%COMP%]   .filter-list-element__icon[_ngcontent-%COMP%]{filter:invert(1)}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Ks(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "div", 6),
            e.nrm(1, "app-search-bar", 7),
            e.j41(2, "app-filter-list-element", 8),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.setBlockchainFilterAll());
            }),
            e.nI1(3, "async"),
            e.k0s()();
        }
        if (2 & i) {
          const t = e.XpG();
          e.R7$(1),
            e.Y8G("searchBarType", "blockchains"),
            e.R7$(1),
            e.Y8G("blockchainFilter", "All")(
              "isSelected",
              "All" === e.bMT(3, 3, t.selectedFilter$)
            );
        }
      }
      function Us(i, c) {
        1 & i && e.nrm(0, "app-search-bar", 7),
          2 & i && e.Y8G("searchBarType", "blockchains");
      }
      function Xs(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "div", 17),
            e.nrm(2, "app-blockchains-promo-badge", 18),
            e.k0s(),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngIf,
            n = e.XpG(2).$implicit;
          e.R7$(2), e.Y8G("tag", t)("blockchain", n.name);
        }
      }
      function Ws(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "button", 12),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG().$implicit,
                o = e.XpG(2);
              return e.Njj(o.onBlockchainSelect(a.name));
            }),
            e.nI1(2, "functionCall"),
            e.j41(3, "div", 13),
            e.nrm(4, "img", 14),
            e.j41(5, "span", 15),
            e.EFF(6),
            e.k0s()(),
            e.DNE(7, Xs, 3, 2, "ng-container", 16),
            e.k0s(),
            e.bVm();
        }
        if (2 & i) {
          const t = c.ngLet,
            n = e.XpG().$implicit,
            a = e.XpG().ngLet,
            o = e.XpG();
          e.R7$(1),
            e.Y8G("id", o.idPrefix + "Network_" + n.name)(
              "disabled",
              a === n.name || t
            )("tuiHint", e.brH(2, 7, n, o.getBlockchainHintText, o)),
            e.R7$(3),
            e.Y8G("src", n.icon, e.B4B)("alt", n.label),
            e.R7$(2),
            e.JRh(n.label.replaceAll("RBC", "CRAI")),
            e.R7$(1),
            e.Y8G("ngIf", !o.isMobile && o.getBlockchainTag(n));
        }
      }
      function zs(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Ws, 8, 11, "ng-container", 11),
            e.nI1(2, "functionCall"),
            e.bVm()),
          2 & i)
        ) {
          const t = c.$implicit,
            n = e.XpG(2);
          e.R7$(1), e.Y8G("ngLet", e.brH(2, 1, t, n.isBlockchainDisabled, n));
        }
      }
      function Zs(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "ul", 9),
            e.qex(1),
            e.DNE(2, zs, 3, 5, "ng-container", 10),
            e.nI1(3, "async"),
            e.bVm(),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(2), e.Y8G("ngForOf", e.bMT(3, 1, t.blockchainsToShow$));
        }
      }
      const Qs = function (i, c) {
          return {
            "asset-types-aside__search-bar": i,
            "asset-types-aside__search-bar-mobile": c,
          };
        },
        Js = ["*"];
      let qs = (() => {
        class i {
          get blockchainsAmount() {
            return this.blockchainsListService.availableBlockchains.length;
          }
          get showFiats() {
            return (
              "from" === this.formType && !this.queryParamsService.hideUnusedUI
            );
          }
          constructor(t, n, a, o, s, l, u, d) {
            (this.blockchainsListService = t),
              (this.assetsSelectorService = n),
              (this.swapFormService = a),
              (this.queryParamsService = o),
              (this.modalService = s),
              (this.headerStore = l),
              (this.filterQueryService = u),
              (this.injector = d),
              (this.selectedAssetType$ = this.assetsSelectorService.assetType$),
              (this.formType = this.assetsSelectorService.formType),
              (this.isMobile = this.headerStore.isMobile),
              (this.blockchainTags = Ee.g),
              (this.selectedFilter$ = this.filterQueryService.filterQuery$),
              (this.blockchainsToShow$ =
                this.blockchainsListService.assetsBlockchainsToShow$),
              (this.useLargeIframe = this.queryParamsService.useLargeIframe);
          }
          getBlockchainsListForLandingIframe() {
            const t = this.blockchainsListService.availableBlockchains,
              n = this.blockchainsListService.availableBlockchains.find(
                (a) => "ZK_SYNC" === a.name
              );
            return "ZK_SYNC" !==
              this.swapFormService.inputValue.fromToken.blockchain
              ? "from" === this.formType
                ? [...t]
                : [n]
              : "from" === this.formType
              ? [n]
              : [...t];
          }
          getBlockchainTag(t) {
            return Vs.j.getBlockchainTag(t);
          }
          setBlockchainFilterAll() {
            this.filterQueryService.filterQuery = Ee.g.ALL;
          }
          isBlockchainDisabled(t) {
            return this.blockchainsListService.isDisabled(t);
          }
          getBlockchainHintText(t) {
            return this.blockchainsListService.getHintText(t);
          }
          onBlockchainSelect(t) {
            this.assetsSelectorService.onBlockchainSelect(t);
          }
          openFiatsList() {
            this.assetsSelectorService.openFiatsList();
          }
          toggleBlockchainList() {
            this.modalService.openMobileBlockchainList(this.injector);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(dt.h),
              e.rXU(be.Y),
              e.rXU(M.K),
              e.rXU(Ce.w),
              e.rXU(ie.B),
              e.rXU(K.X),
              e.rXU(ut.s),
              e.rXU(e.zZn)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-asset-types-aside"]],
            inputs: { idPrefix: "idPrefix" },
            ngContentSelectors: Js,
            decls: 8,
            vars: 11,
            consts: [
              [3, "ngClass"],
              [
                "class",
                "asset-types-aside__search-bar-mobile__search-bar-container",
                4,
                "ngIf",
              ],
              [3, "searchBarType", 4, "ngIf"],
              [1, "asset-types-aside"],
              [1, "asset-types-aside__scroll"],
              ["class", "asset-types-aside__list", 4, "ngLet"],
              [1, "asset-types-aside__search-bar-mobile__search-bar-container"],
              [3, "searchBarType"],
              [3, "blockchainFilter", "isSelected", "click"],
              [1, "asset-types-aside__list"],
              [4, "ngFor", "ngForOf"],
              [4, "ngLet"],
              [
                "tuiButton",
                "",
                "size",
                "l",
                "type",
                "button",
                "appearance",
                "secondary",
                1,
                "asset-types-aside__list-element",
                3,
                "id",
                "disabled",
                "tuiHint",
                "click",
              ],
              [1, "icon-container"],
              [1, "icon", 3, "src", "alt"],
              [1, "icon-label"],
              [4, "ngIf"],
              [1, "badge-container"],
              [3, "tag", "blockchain"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.NAR(),
                e.j41(0, "div", 0),
                e.DNE(1, Ks, 4, 5, "div", 1),
                e.DNE(2, Us, 1, 1, "app-search-bar", 2),
                e.SdG(3),
                e.k0s(),
                e.j41(4, "aside", 3)(5, "tui-scrollbar", 4),
                e.DNE(6, Zs, 4, 3, "ul", 5),
                e.nI1(7, "async"),
                e.k0s()()),
                2 & n &&
                  (e.Y8G("ngClass", e.l_i(8, Qs, !a.isMobile, a.isMobile)),
                  e.R7$(1),
                  e.Y8G("ngIf", a.isMobile),
                  e.R7$(1),
                  e.Y8G("ngIf", !a.isMobile),
                  e.R7$(2),
                  e.AVh("large-iframe-asset", a.useLargeIframe),
                  e.R7$(2),
                  e.Y8G("ngLet", e.bMT(7, 6, a.selectedAssetType$)));
            },
            dependencies: [
              _.YU,
              _.Sq,
              _.bT,
              B.N,
              we.UB,
              oe.SM,
              h.XZ,
              h.ZF,
              h.JL,
              h.AZ,
              pt,
              Vn,
              Dn,
              _.Jj,
              Gn.J,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{--tui-secondary: var(--io-background);--tui-padding: 0;--tui-height-l: 60px}.icon[_ngcontent-%COMP%]{width:24px;height:24px}.icon-label[_ngcontent-%COMP%]{font-size:12px;line-height:1}.icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:var(--tui-padding-xs);align-items:center;height:60px;padding:5px;overflow:hidden}.badge-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.asset-types-aside[_ngcontent-%COMP%]{width:191px;height:469px;padding-top:10px;padding-bottom:10px;background:var(--tui-secondary);border-bottom-right-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.asset-types-aside__scroll[_ngcontent-%COMP%]{min-height:450px;max-height:100%}.asset-types-aside__search-bar[_ngcontent-%COMP%]{width:191px;margin-bottom:2px}.asset-types-aside__search-bar[_ngcontent-%COMP%]     .tui-autofill{background-color:var(--tui-secondary);border-radius:0;border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.asset-types-aside__search-bar-mobile[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:space-between;height:51px}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]   app-filter-list-element[_ngcontent-%COMP%]     .t-wrapper{width:51px;height:51px}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]   app-filter-list-element[_ngcontent-%COMP%]     .t-content{color:var(--tui-text-02)}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]   app-filter-list-element[_ngcontent-%COMP%]     .filter-list-element__clicked-element .t-content{color:#000}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]   app-search-bar[_ngcontent-%COMP%]{flex:1}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]     .tui-autofill{height:51px}.asset-types-aside__search-bar-mobile__search-bar-container[_ngcontent-%COMP%]     .t-wrapper{background:var(--tui-base-01)}.asset-types-aside__list-element[_ngcontent-%COMP%]{width:169px;height:41px;border-radius:8px}.asset-types-aside__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;justify-content:center}.asset-types-aside__list-element._disabled[_ngcontent-%COMP%]{cursor:not-allowed!important}.asset-types-aside__list-element._disabled[_ngcontent-%COMP%]   app-blockchains-promo-badge[_ngcontent-%COMP%]{z-index:1;pointer-events:auto}.asset-types-aside__list-element._disabled[_ngcontent-%COMP%]     .t-wrapper{background:var(--tui-secondary-hover)!important;opacity:1!important}.asset-types-aside__list-element[_ngcontent-%COMP%]     .t-content{justify-content:space-between}.asset-types-aside__blockchain-header[_ngcontent-%COMP%]{display:none}.open-selector[_ngcontent-%COMP%]{width:75px}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]{height:68px;border-radius:var(--tui-radius-m)}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]._pressed, .open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]:focus, .open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]:hover{background:transparent;box-shadow:none}.open-selector[_ngcontent-%COMP%]     app-rubic-button .t-wrapper{padding:0!important}@media (max-width: 651px){[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:0 16px}.icon-container[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}.asset-types-aside[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;align-items:flex-start;justify-content:center;width:100%;height:100%;padding:0;overflow-x:auto;background-color:unset;border-radius:unset}.asset-types-aside__list-element[_ngcontent-%COMP%]{width:80px;height:62px;border-radius:16px}.asset-types-aside__list-element[_ngcontent-%COMP%]     .t-content{justify-content:center}.asset-types-aside__list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:12px;align-items:center}.asset-types-aside__blockchain-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;padding:0 1rem}.asset-types-aside__blockchain-header-label[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:400;font-size:18px;line-height:18px;letter-spacing:.54px}.asset-types-aside__blockchain-header-expand[_ngcontent-%COMP%]{color:var(--tui-primary);font-weight:400;font-size:16px}.asset-types-aside__scroll[_ngcontent-%COMP%]{min-height:unset}.asset-types-aside__scroll[_ngcontent-%COMP%]     tui-scroll-controls{display:none}.asset-types-aside[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}@media (max-width: 500px){.open-selector[_ngcontent-%COMP%]{width:57px}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]{height:52px}}.large-iframe-asset[_ngcontent-%COMP%]{height:430px}.large-iframe-asset[_ngcontent-%COMP%]   tui-scrollbar[_ngcontent-%COMP%]{min-height:410px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      const ec = (0, S.hZ)("listAnimation", [
        (0, S.kY)(":enter", [
          (0, S.iF)({ opacity: 0.4 }),
          (0, S.i0)("0.28s", (0, S.iF)({ opacity: 1 })),
        ]),
        (0, S.wk)("hidden", (0, S.iF)({ opacity: "0.4" })),
        (0, S.wk)("shown", (0, S.iF)({ opacity: "1" })),
        (0, S.kY)("hidden => shown", (0, S.i0)("0.28s ease-in-out")),
      ]);
      var jn = p(151059);
      const tc = ["usdt", "usdc", "usd coin", "tether", "dai"];
      var $ = (function (i) {
        return (
          (i.TRUST_LIST = "trust-list"),
          (i.SECURED = "safe"),
          (i.LOW_RISK = "low-risk"),
          (i.HIGH_RISK = "high-risk"),
          (i.NO_INFO = "no-info"),
          (i.UNSUPPORTED_BLOCKCHAIN = "unsupported"),
          (i.SCAM_LIST = "scam-list"),
          (i.PLATFORM_TOKEN = "platform-token"),
          i
        );
      })($ || {});
      const Yn = {
          [$.TRUST_LIST]: "Token is in the Go+ Trust List",
          [$.SCAM_LIST]: "Token is in the Scam List",
          [$.SECURED]: "Token code has no elements of concern",
          [$.LOW_RISK]: "Token code contains some low risk elements of concern",
          [$.HIGH_RISK]:
            "Token code contains some high risk elements of concern",
          [$.NO_INFO]: "No information",
          [$.PLATFORM_TOKEN]: "Platform Native Token",
          [$.UNSUPPORTED_BLOCKCHAIN]: "Unsupported blockchain",
        },
        nc = [
          r.BLOCKCHAIN_NAME.ETHEREUM,
          r.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
          r.BLOCKCHAIN_NAME.POLYGON,
          r.BLOCKCHAIN_NAME.ARBITRUM,
          r.BLOCKCHAIN_NAME.OPTIMISM,
          r.BLOCKCHAIN_NAME.AVALANCHE,
          r.BLOCKCHAIN_NAME.FANTOM,
          r.BLOCKCHAIN_NAME.OKE_X_CHAIN,
          r.BLOCKCHAIN_NAME.CRONOS,
          r.BLOCKCHAIN_NAME.GNOSIS,
          r.BLOCKCHAIN_NAME.TRON,
          r.BLOCKCHAIN_NAME.ZK_FAIR,
        ];
      var Kn = p(353517);
      const Un = "0x3330BFb7332cA23cd071631837dC289B09C33333",
        Xn = "0x10aaed289a7b1b0155bf4b86c862f297e84465e0";
      var Wn = p(214741),
        ic = p(290345);
      function ac(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "tui-hosted-dropdown", 2, 3),
            e.bIt("openChange", function (a) {
              e.eBV(t);
              const o = e.XpG();
              return e.Njj((o.isDropdownOpen = a));
            }),
            e.nrm(2, "button", 4),
            e.k0s();
        }
        if (2 & i) {
          const t = e.sdS(1),
            n = e.XpG(),
            a = e.sdS(2);
          e.Y8G("content", a)("open", n.isDropdownOpen),
            e.R7$(2),
            e.Y8G("size", "m")("pseudoHover", t.open || null);
        }
      }
      function oc(i, c) {
        1 & i && (e.qex(0), e.nrm(1, "span", 14), e.bVm()),
          2 & i &&
            (e.R7$(1),
            e.Y8G("inlineSVG", "assets/images/swaps/swaps-info/copy-icon.svg"));
      }
      function rc(i, c) {
        if ((1 & i && (e.j41(0, "span", 15), e.EFF(1), e.k0s()), 2 & i)) {
          const t = e.XpG(3);
          e.R7$(1), e.JRh(t.token.address);
        }
      }
      function sc(i, c) {
        1 & i && (e.j41(0, "span", 16), e.nrm(1, "span", 17), e.k0s()),
          2 & i &&
            (e.R7$(1),
            e.Y8G("inlineSVG", "assets/images/swaps/swaps-info/tick.svg"));
      }
      function cc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "div", 9),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.copyToClipboard());
            }),
            e.DNE(2, oc, 2, 1, "ng-container", 10),
            e.j41(3, "span", 11),
            e.EFF(4, "Copy address"),
            e.k0s(),
            e.DNE(5, rc, 2, 1, "ng-template", null, 12, e.C5r),
            e.k0s(),
            e.DNE(7, sc, 2, 1, "ng-template", null, 13, e.C5r),
            e.bVm();
        }
        if (2 & i) {
          const t = e.sdS(6),
            n = e.sdS(8),
            a = e.XpG(2);
          e.R7$(1),
            e.Y8G("tuiHint", t)("tuiHintShowDelay", 50)(
              "tuiHintHideDelay",
              100
            ),
            e.R7$(1),
            e.Y8G("ngIf", !a.isCopyClicked)("ngIfElse", n);
        }
      }
      const lc = function (i) {
        return { "dropdown-content__favorite_active": i };
      };
      function dc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.j41(1, "tui-loader", 18),
            e.bIt("click.stop", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.toggleFavorite());
            }),
            e.j41(2, "div", 19),
            e.nrm(3, "div", 20),
            e.j41(4, "span", 11),
            e.EFF(5, "Save to favorites"),
            e.k0s()()(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG(2);
          e.R7$(1),
            e.Y8G("showLoader", t.loadingFavoriteToken)("overlay", !0)(
              "size",
              "s"
            ),
            e.R7$(2),
            e.Y8G(
              "ngClass",
              e.eq3(5, lc, null == t.token ? null : t.token.favorite)
            )("inlineSVG", "assets/images/icons/star2.svg");
        }
      }
      function pc(i, c) {
        1 & i &&
          (e.qex(0),
          e.j41(1, "span", 25),
          e.EFF(2, " Powered by Go+"),
          e.k0s(),
          e.bVm());
      }
      function uc(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "div", 21)(2, "a", 22)(3, "span", 23),
            e.bIt("click", function (n) {
              return n.stopPropagation();
            }),
            e.k0s(),
            e.j41(4, "span", 24)(5, "span", 11),
            e.EFF(6),
            e.k0s(),
            e.DNE(7, pc, 3, 0, "ng-container", 8),
            e.k0s()()(),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(2),
            e.Y8G("href", t.goPlusLabsLink, e.B4B),
            e.R7$(1),
            e.Y8G(
              "inlineSVG",
              "assets/images/swaps/swaps-info/token-security-" +
                t.securityStatus +
                "-icon.svg"
            ),
            e.R7$(3),
            e.JRh(t.securityMessages[t.securityStatus]),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              t.securityStatus !== t.TokenSecurityStatus.PLATFORM_TOKEN
            );
        }
      }
      function _c(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "tui-data-list", 5)(1, "div", 6)(2, "div", 7),
            e.DNE(3, cc, 9, 5, "ng-container", 8),
            e.DNE(4, dc, 6, 7, "ng-container", 8),
            e.DNE(5, uc, 8, 4, "ng-container", 8),
            e.k0s()()()),
          2 & i)
        ) {
          const t = c.$implicit,
            n = e.XpG();
          e.Y8G("tuiActiveZoneParent", t),
            e.R7$(3),
            e.Y8G("ngIf", n.showCopyToClipboardOption),
            e.R7$(1),
            e.Y8G("ngIf", n.isTokenFromEvm),
            e.R7$(1),
            e.Y8G(
              "ngIf",
              n.securityStatus !== n.TokenSecurityStatus.UNSUPPORTED_BLOCKCHAIN
            );
        }
      }
      let mc = (() => {
        class i {
          constructor(t, n, a, o, s, l) {
            (this.navigator = t),
              (this.cdr = n),
              (this.tokensStoreService = a),
              (this.errorsService = o),
              (this.authService = s),
              (this.tokensListTypeService = l),
              (this.isDropdownOpen = !1),
              (this.isCopyClicked = !1),
              (this.blockchainTags = Ee.g),
              (this.loadingFavoriteToken = !1),
              (this.TokenSecurityStatus = $),
              (this.securityMessages = Yn);
          }
          get isTokenFromEvm() {
            const t = nn.s.filter((n) => n.name === this.token.blockchain)[0];
            return (
              !t.tags.includes(Ee.g.NON_EVM) ||
              t.name === r.BLOCKCHAIN_NAME.TRON ||
              t.name === r.BLOCKCHAIN_NAME.SOLANA
            );
          }
          get showCopyToClipboardOption() {
            return (
              this.token.address &&
              "0x0000000000000000000000000000000000000000" !==
                this.token.address
            );
          }
          get isNativeToken() {
            return this.token?.address === Kn.DG;
          }
          get isPlatformToken() {
            return (
              (0, r.compareAddresses)(this.token.address, Un) ||
              (0, r.compareAddresses)(this.token.address, Xn)
            );
          }
          toggleFavorite() {
            this.token &&
              !this.loadingFavoriteToken &&
              (this.authService.userAddress
                ? ((this.loadingFavoriteToken = !0),
                  (this.token.favorite
                    ? this.tokensStoreService.removeFavoriteToken(this.token)
                    : this.tokensStoreService.addFavoriteToken(this.token)
                  ).subscribe({
                    error: () => {
                      this.errorsService.catch(new Wn.m());
                    },
                    complete: () => {
                      (this.loadingFavoriteToken = !1),
                        (this.token.favorite = !this.token.favorite),
                        (this.isDropdownOpen =
                          "favorite" !== this.tokensListTypeService.listType &&
                          this.isDropdownOpen),
                        this.cdr.detectChanges();
                    },
                  }))
                : this.errorsService.catch(new Wn.m()));
          }
          get goPlusLabsLink() {
            return `${ic.m.GO_PLUS_LABS}/${
              this.token.blockchain === r.BLOCKCHAIN_NAME.TRON
                ? "tron"
                : r.blockchainId[this.token.blockchain]
            }/${
              (this.isNativeToken
                ? r.wrappedNativeTokensList[this.token.blockchain]?.address
                : this.token.address) || ""
            }`;
          }
          copyToClipboard() {
            (this.isCopyClicked = !0),
              this.navigator.clipboard.writeText(this.token.address),
              setTimeout(() => {
                (this.isCopyClicked = !1), this.cdr.markForCheck();
              }, 500);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(Ze.kW),
              e.rXU(e.gRc),
              e.rXU(Z.p),
              e.rXU(xt.b),
              e.rXU(le.u),
              e.rXU(ye)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-dropdown-options-token"]],
            inputs: { token: "token", securityStatus: "securityStatus" },
            decls: 3,
            vars: 1,
            consts: [
              [3, "content", "open", "openChange", 4, "ngIf"],
              ["content", ""],
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
              [
                "tuiDataListDropdownManager",
                "",
                "size",
                "l",
                3,
                "tuiActiveZoneParent",
              ],
              [1, "dropdown-content__wrapper"],
              [1, "dropdown-content"],
              [4, "ngIf"],
              [
                "tuiHintAppearance",
                "onDark",
                "tuiHintDirection",
                "top-right",
                1,
                "dropdown-content__element",
                3,
                "tuiHint",
                "tuiHintShowDelay",
                "tuiHintHideDelay",
                "click",
              ],
              [4, "ngIf", "ngIfElse"],
              [1, "auto-height"],
              ["copyHint", ""],
              ["copyClicked", ""],
              [1, "dropdown-content__copy-icon", 3, "inlineSVG"],
              [1, "dropdown-content__container-address-hint"],
              [1, "dropdown-content__container-copied-container"],
              [1, "dropdown-content__container-copied-icon", 3, "inlineSVG"],
              [
                1,
                "dropdown-content__favorite-container",
                3,
                "showLoader",
                "overlay",
                "size",
                "click.stop",
              ],
              [1, "dropdown-content__element"],
              [1, "dropdown-content__favorite", 3, "ngClass", "inlineSVG"],
              [1, "dropdown-content__security-container"],
              [
                "target",
                "_blank",
                1,
                "dropdown-content__element",
                "security-content",
                3,
                "href",
              ],
              [
                "tuiHintAppearance",
                "onDark",
                "tuiHintDirection",
                "top-right",
                "rel",
                "noopener noreferrer",
                "target",
                "_blank",
                1,
                "dropdown-content__security-container-icon",
                3,
                "inlineSVG",
                "click",
              ],
              [1, "dropdown-content__security-container-label"],
              [1, "dropdown-content__security-label-powered-by", "auto-height"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, ac, 3, 4, "tui-hosted-dropdown", 0),
                e.DNE(1, _c, 6, 4, "ng-template", null, 1, e.C5r)),
                2 & n &&
                  e.Y8G(
                    "ngIf",
                    a.isTokenFromEvm ||
                      a.showCopyToClipboardOption ||
                      a.securityStatus !==
                        a.TokenSecurityStatus.UNSUPPORTED_BLOCKCHAIN
                  );
            },
            dependencies: [
              _.YU,
              _.bT,
              W.ll,
              h.XZ,
              h.ZF,
              h.JL,
              h.AZ,
              oe.SM,
              Fn.uE,
              Ln.Y,
              st.o2,
              lt.jT,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.dropdown-content__wrapper[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s);padding:var(--tui-padding-xs)}.dropdown-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;width:209px;padding:var(--tui-padding-xs) var(--tui-padding-xs)}.dropdown-content[_ngcontent-%COMP%]   .auto-height[_ngcontent-%COMP%]{height:auto!important}.dropdown-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.dropdown-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]     *{height:100%}.dropdown-content[_ngcontent-%COMP%]:hover{background:var(--tui-secondary);border-radius:var(--tui-radius-m)}.dropdown-content__element[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;padding:5px;color:#fff;font-size:13px}.dropdown-content__element[_ngcontent-%COMP%]:active{padding:5px}.dropdown-content__element[_ngcontent-%COMP%]:hover{text-decoration:none;background:var(--tui-base-01);border-radius:var(--tui-radius-s)}.dropdown-content__element[_ngcontent-%COMP%]     svg{width:20px;height:20px}.dropdown-content__favorite_active[_ngcontent-%COMP%]     path{stroke:var(--tui-primary)}.dropdown-content__favorite-container[_ngcontent-%COMP%]{height:16px}.dropdown-content__favorite-container[_ngcontent-%COMP%]     .t-loader{left:-65%;min-width:unset}.dropdown-content__security-label-powered-by[_ngcontent-%COMP%]{color:#9a9ab0;font-weight:400}.dropdown-content__security-container-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:center;line-height:1.2}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function hc(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "div", 14),
            e.nrm(2, "div", 15),
            e.k0s(),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(2),
            e.Y8G(
              "inlineSVG",
              "assets/images/swaps/swaps-info/token-security-" +
                t.securityStatus +
                "-icon.svg"
            );
        }
      }
      function gc(i, c) {
        if ((1 & i && (e.EFF(0), e.nI1(1, "bigNumberFormat")), 2 & i)) {
          const t = e.XpG(2);
          e.JRh(e.bMT(1, 1, t.token.amount));
        }
      }
      function vc(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "div", 16)(1, "span", 17),
            e.EFF(2),
            e.nI1(3, "shortenAmount"),
            e.nI1(4, "bigNumberFormat"),
            e.k0s(),
            e.DNE(5, gc, 2, 3, "ng-template", null, 18, e.C5r),
            e.k0s()),
          2 & i)
        ) {
          const t = e.sdS(6),
            n = e.XpG();
          e.R7$(1),
            e.Y8G("tuiHint", t),
            e.R7$(1),
            e.JRh(e.brH(3, 2, e.bMT(4, 6, n.token.amount), 6, 4));
        }
      }
      function fc(i, c) {
        if ((1 & i && (e.j41(0, "span", 19), e.EFF(1), e.k0s()), 2 & i)) {
          const t = e.XpG();
          e.R7$(1),
            e.SpI(
              "~",
              t.token.amount.multipliedBy(t.token.price).toFixed(2),
              " $"
            );
        }
      }
      let zn = (() => {
        class i {
          get isNativeToken() {
            return this.token.address === Kn.DG;
          }
          get isPlatformToken() {
            return (
              (0, r.compareAddresses)(this.token.address, Un) ||
              (0, r.compareAddresses)(this.token.address, Xn)
            );
          }
          get securityStatus() {
            return !1 === nc.includes(this.token.blockchain)
              ? $.UNSUPPORTED_BLOCKCHAIN
              : this.isPlatformToken
              ? $.PLATFORM_TOKEN
              : this.isNativeToken ||
                (this.token.tokenSecurity &&
                  this.token.tokenSecurity.trust_list)
              ? $.TRUST_LIST
              : !this.token.tokenSecurity ||
                (this.token.tokenSecurity &&
                  !1 === this.token.tokenSecurity.has_info)
              ? $.NO_INFO
              : this.token.tokenSecurity.fake_token ||
                this.token.tokenSecurity.is_airdrop_scam
              ? $.SCAM_LIST
              : 0 === this.token.tokenSecurity.risky_security_items &&
                0 === this.token.tokenSecurity.attention_security_items
              ? $.SECURED
              : this.token.tokenSecurity.risky_security_items > 0
              ? $.HIGH_RISK
              : $.LOW_RISK;
          }
          constructor(t, n) {
            (this.tokensService = t),
              (this.isMobile = n),
              (this.balanceLoading = !1),
              (this.selectToken = new e.bkB()),
              (this.DEFAULT_TOKEN_IMAGE = at.c),
              (this.TokenSecurityStatus = $),
              (this.securityMessages = Yn);
          }
          onImageError(t) {
            this.tokensService.onTokenImageError(t);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(_e.m), e.rXU(ze.Td));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-tokens-list-element"]],
            inputs: { token: "token", balanceLoading: "balanceLoading" },
            outputs: { selectToken: "selectToken" },
            decls: 16,
            vars: 11,
            consts: [
              [1, "token-card-container"],
              [1, "token-card", 3, "click"],
              [1, "token-card__image-container"],
              ["loading", "lazy", 3, "src", "alt", "error"],
              [1, "token-card__symbol-name-container"],
              [1, "token-card__symbol-container"],
              [1, "token-card__symbol"],
              [1, "token-card__actions"],
              [4, "ngIf"],
              [1, "token-card__name"],
              [1, "token-card__amount-container"],
              ["class", "token-card__amount", 4, "ngIf"],
              ["class", "token-card__dollar-amount", 4, "ngIf"],
              [3, "token", "securityStatus"],
              [1, "token-card__security-container"],
              [
                1,
                "token-card__security-container-security-icon",
                3,
                "inlineSVG",
              ],
              [1, "token-card__amount"],
              [
                "tuiHintDirection",
                "top-left",
                "tuiHintAppearance",
                "onDark",
                3,
                "tuiHint",
              ],
              ["tokenAmountTooltip", ""],
              [1, "token-card__dollar-amount"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0)(1, "div", 1),
                e.bIt("click", function () {
                  return a.selectToken.emit(a.token);
                }),
                e.j41(2, "div", 2)(3, "img", 3),
                e.bIt("error", function (s) {
                  return a.onImageError(s);
                }),
                e.k0s()(),
                e.j41(4, "div", 4)(5, "div", 5)(6, "span", 6),
                e.EFF(7),
                e.k0s(),
                e.j41(8, "div", 7),
                e.DNE(9, hc, 3, 1, "ng-container", 8),
                e.k0s()(),
                e.j41(10, "span", 9),
                e.EFF(11),
                e.k0s()(),
                e.j41(12, "div", 10),
                e.DNE(13, vc, 7, 8, "div", 11),
                e.DNE(14, fc, 2, 1, "span", 12),
                e.k0s()(),
                e.nrm(15, "app-dropdown-options-token", 13),
                e.k0s()),
                2 & n &&
                  (e.R7$(3),
                  e.Y8G(
                    "src",
                    a.token.image || a.DEFAULT_TOKEN_IMAGE,
                    e.B4B
                  )("alt", a.token.name),
                  e.R7$(4),
                  e.JRh(
                    a.token.symbol.length > 10
                      ? a.token.symbol.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI").slice(0, 10) + "..."
                      : a.token.symbol.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI")
                  ),
                  e.R7$(2),
                  e.Y8G(
                    "ngIf",
                    a.securityStatus !==
                      a.TokenSecurityStatus.UNSUPPORTED_BLOCKCHAIN
                  ),
                  e.R7$(2),
                  e.JRh(a.token.name.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI")),
                  e.R7$(1),
                  e.AVh("tui-skeleton", a.balanceLoading),
                  e.R7$(1),
                  e.Y8G("ngIf", a.token.amount.gt(0)),
                  e.R7$(1),
                  e.Y8G("ngIf", a.token.amount.gt(0) && a.token.price),
                  e.R7$(1),
                  e.Y8G("token", a.token)("securityStatus", a.securityStatus));
            },
            dependencies: [_.bT, mc, h.XZ, h.ZF, h.JL, h.AZ, W.ll, fe.p, ke.W],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.token-card-container[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-s)}.token-card[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-m);align-items:center;width:100%;padding:var(--tui-padding-xs) var(--tui-padding-s)}.token-card[_ngcontent-%COMP%]:hover{background:var(--tui-secondary);border-radius:var(--tui-radius-m)}.token-card__image-container[_ngcontent-%COMP%]{display:flex}.token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:25%}.token-card__symbol-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:auto}.token-card__symbol-container[_ngcontent-%COMP%]{display:flex;gap:10px}.token-card__actions[_ngcontent-%COMP%]{display:flex;gap:5px}.token-card__actions_clickable[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{cursor:pointer}.token-card__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:16px;height:16px}.token-card__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]     *{width:100%;height:100%}.token-card__name[_ngcontent-%COMP%], .token-card__dollar-amount[_ngcontent-%COMP%]{color:var(--tui-text-03);font-size:12px;line-height:12px}.token-card__amount-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}@media (max-width: 651px){.token-card[_ngcontent-%COMP%]{gap:var(--tui-padding-l);padding:var(--tui-padding-s) var(--tui-padding-l);background:var(--io-background);border-radius:var(--tui-radius-m)}.token-card[_ngcontent-%COMP%]:hover{background:var(--tui-base-01)}.token-card__image-container[_ngcontent-%COMP%]{display:flex}.token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:35px}.token-card__symbol[_ngcontent-%COMP%], .token-card__amount[_ngcontent-%COMP%]{font-weight:500;font-size:18px;letter-spacing:.54px}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var bc = p(635527);
      let Cc = (() => {
          class i {
            constructor(t, n) {
              (this.context = t),
                (this.mobileNativeService = n),
                (this.token = t.data.token);
            }
            onAccept() {
              this.mobileNativeService.forceClose(),
                this.context.completeWith(!0);
            }
            onDecline() {
              this.context.completeWith(!1);
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)(e.rXU(et.su), e.rXU(jn.c));
            });
            static #t = (this.ɵcmp = e.VBU({
              type: i,
              selectors: [["polymorpheus-custom-token-warning-modal"]],
              decls: 11,
              vars: 9,
              consts: [
                [1, "buttons-container"],
                ["fullWidth", "", "appearance", "outline", 3, "click"],
                ["fullWidth", "", "bordered", "", 3, "click"],
              ],
              template: function (n, a) {
                1 & n &&
                  (e.qex(0),
                  e.j41(1, "span"),
                  e.EFF(2),
                  e.nI1(3, "translate"),
                  e.k0s(),
                  e.j41(4, "div", 0)(5, "app-rubic-button", 1),
                  e.bIt("click", function () {
                    return a.onDecline();
                  }),
                  e.EFF(6),
                  e.nI1(7, "translate"),
                  e.k0s(),
                  e.j41(8, "app-rubic-button", 2),
                  e.bIt("click", function () {
                    return a.onAccept();
                  }),
                  e.EFF(9),
                  e.nI1(10, "translate"),
                  e.k0s()(),
                  e.bVm()),
                  2 & n &&
                    (e.R7$(2),
                    e.JRh(e.bMT(3, 3, "modals.confirmImportModal.text")),
                    e.R7$(4),
                    e.JRh(e.bMT(7, 5, "common.cancel")),
                    e.R7$(3),
                    e.JRh(e.bMT(10, 7, "common.OK")));
              },
              dependencies: [qt.l, J.D9],
              styles: [
                "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%;text-align:center}.buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:15px}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]{width:150px}@media (max-width: 651px){[_nghost-%COMP%]   span[_ngcontent-%COMP%]{padding:0 25px}.buttons-container[_ngcontent-%COMP%]{padding:0 25px}}",
              ],
              changeDetection: 0,
            }));
          }
          return i;
        })(),
        Zn = (() => {
          class i {
            constructor(t, n, a, o, s) {
              (this.dialogService = t),
                (this.injector = n),
                (this.translateService = a),
                (this.authService = o),
                (this.assetsSelectorService = s);
            }
            openModal(t) {
              var n = this;
              this.dialogService
                .showDialog(
                  Cc,
                  {
                    data: { token: t },
                    dismissible: !0,
                    label: this.translateService.instant(
                      "modals.confirmImportModal.title"
                    ),
                    size: "s",
                    fitContent: !0,
                  },
                  this.injector
                )
                .pipe(
                  (0, A.n)(
                    (function () {
                      var a = (0, C.A)(function* (o) {
                        if (o) {
                          try {
                            if (
                              n.authService.userAddress &&
                              n.authService.userChainType ===
                                r.BlockchainsInfo.getChainType(t.blockchain)
                            ) {
                              const s = yield bc.Injector.web3PublicService
                                .getWeb3Public(t.blockchain)
                                .getTokenBalance(
                                  n.authService.userAddress,
                                  t.address
                                );
                              return {
                                ...t,
                                amount: r.Web3Pure.fromWei(s, t.decimals),
                              };
                            }
                          } catch {}
                          return t;
                        }
                      });
                      return function (o) {
                        return a.apply(this, arguments);
                      };
                    })()
                  )
                )
                .subscribe((a) => {
                  a && this.assetsSelectorService.onAssetSelect(a);
                });
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)(
                e.KVO(ie.B),
                e.KVO(e.zZn),
                e.KVO(J.c$),
                e.KVO(le.u),
                e.KVO(be.Y)
              );
            });
            static #t = (this.ɵprov = e.jDH({ token: i, factory: i.ɵfac }));
          }
          return i;
        })();
      function kc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 5),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.onImportClick());
            }),
            e.EFF(1),
            e.k0s();
        }
        if (2 & i) {
          const t = e.XpG();
          e.Y8G("disabled", !t.token.available),
            e.R7$(1),
            e.SpI(" Import ", t.token.symbol.replaceAll("RBC", "CRAI").replaceAll("RUBIC", "CRAI"), " ");
        }
      }
      function Sc(i, c) {
        1 & i && (e.j41(0, "div"), e.EFF(1), e.nI1(2, "translate"), e.k0s()),
          2 & i &&
            (e.R7$(1),
            e.SpI(
              " ",
              e.bMT(2, 1, "modals.tokensListModal.unsupportedPairsHint"),
              " "
            ));
      }
      const Tc = function (i) {
        return { "custom-token__element_disabled": i };
      };
      let wc = (() => {
        class i {
          constructor(t, n) {
            (this.customTokenService = t),
              (this.tokensListStoreService = n),
              (this.token = this.tokensListStoreService.customToken);
          }
          onImportClick() {
            this.customTokenService.openModal(this.token);
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(Zn), e.rXU(_t));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-custom-token"]],
            features: [e.Jv_([Zn])],
            decls: 6,
            vars: 6,
            consts: [
              [1, "custom-token"],
              [1, "custom-token__element", 3, "ngClass"],
              [
                "tuiHintAppearance",
                "error",
                "tuiHintDirection",
                "bottom-right",
                3,
                "token",
                "tuiHint",
              ],
              [
                "tuiButton",
                "",
                "appearance",
                "secondary",
                "type",
                "button",
                "size",
                "m",
                "class",
                "custom-token__button",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              ["disabledTokenHint", ""],
              [
                "tuiButton",
                "",
                "appearance",
                "secondary",
                "type",
                "button",
                "size",
                "m",
                1,
                "custom-token__button",
                3,
                "disabled",
                "click",
              ],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0)(1, "div", 1),
                  e.nrm(2, "app-tokens-list-element", 2),
                  e.k0s(),
                  e.DNE(3, kc, 2, 2, "button", 3),
                  e.k0s(),
                  e.DNE(4, Sc, 3, 3, "ng-template", null, 4, e.C5r)),
                2 & n)
              ) {
                const o = e.sdS(5);
                e.R7$(1),
                  e.Y8G("ngClass", e.eq3(4, Tc, !a.token.available)),
                  e.R7$(1),
                  e.Y8G("token", a.token)(
                    "tuiHint",
                    a.token.available ? null : o
                  ),
                  e.R7$(1),
                  e.Y8G("ngIf", a.token.available);
              }
            },
            dependencies: [_.YU, _.bT, oe.SM, h.XZ, h.ZF, h.JL, h.AZ, zn, J.D9],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{width:100%}.custom-token__element[_ngcontent-%COMP%]{padding:5px 0;cursor:default}.custom-token__element_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.custom-token__element_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.custom-token__button[_ngcontent-%COMP%]{display:block;width:100%;margin-top:15px}.custom-token__button[_ngcontent-%COMP%]     .t-wrapper{background-color:var(--tui-primary)}.custom-token__button[_ngcontent-%COMP%]     .t-wrapper span{height:100%;font-size:14px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function yc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "button", 1),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.switchMode());
            }),
            e.nrm(1, "img", 2),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet;
          e.Y8G("tuiHint", t.hintText),
            e.R7$(1),
            e.Y8G(
              "src",
              "assets/images/icons/" + t.icon,
              e.B4B
            )("alt", "Switch list");
        }
      }
      let Qn = (() => {
        class i {
          constructor(t) {
            (this.tokensListTypeService = t),
              (this.buttonData$ = this.tokensListTypeService.listType$.pipe(
                (0, k.T)((n) => ({
                  icon: "default" === n ? "star.svg" : "back.svg",
                  hintText:
                    "default" === n
                      ? "List of favorite tokens"
                      : "Back to whole tokens list",
                }))
              ));
          }
          switchMode() {
            this.tokensListTypeService.switchListType();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(ye));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-switch-list-type-button"]],
            decls: 2,
            vars: 3,
            consts: [
              [
                "tuiIconButton",
                "",
                "size",
                "m",
                "appearance",
                "secondary",
                "type",
                "button",
                "tuiHintAppearance",
                "onDark",
                3,
                "tuiHint",
                "click",
                4,
                "ngLet",
              ],
              [
                "tuiIconButton",
                "",
                "size",
                "m",
                "appearance",
                "secondary",
                "type",
                "button",
                "tuiHintAppearance",
                "onDark",
                3,
                "tuiHint",
                "click",
              ],
              [1, "image", 3, "src", "alt"],
            ],
            template: function (n, a) {
              1 & n && (e.DNE(0, yc, 2, 3, "button", 0), e.nI1(1, "async")),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.buttonData$));
            },
            dependencies: [B.N, oe.SM, h.XZ, h.ZF, h.JL, h.AZ, _.Jj],
            styles: [
              "[_nghost-%COMP%]{--tui-secondary: var(--tui-base-01)}.image[_ngcontent-%COMP%]{width:16px;height:16px}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      var Ac = p(831861);
      function xc(i, c) {
        1 & i && (e.qex(0), e.EFF(1), e.nI1(2, "translate"), e.bVm()),
          2 & i &&
            (e.R7$(1),
            e.SpI(
              " ",
              e.bMT(2, 1, "modals.tokensListModal.noSearchData"),
              " "
            ));
      }
      function Oc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0),
            e.EFF(1),
            e.nI1(2, "translate"),
            e.j41(3, "button", 4),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2);
              return e.Njj(a.switchToDefaultList());
            }),
            e.EFF(4),
            e.nI1(5, "translate"),
            e.k0s(),
            e.bVm();
        }
        2 & i &&
          (e.R7$(1),
          e.SpI(" ", e.bMT(2, 2, "modals.tokensListModal.noFavoriteData"), " "),
          e.R7$(3),
          e.SpI(" ", e.bMT(5, 4, "modals.tokensListModal.backToTokens"), " "));
      }
      function Ic(i, c) {
        if (
          (1 & i && (e.DNE(0, Oc, 6, 6, "ng-container", 1), e.nI1(1, "async")),
          2 & i)
        ) {
          const t = e.XpG(),
            n = e.sdS(7);
          e.Y8G("ngIf", e.bMT(1, 2, t.user$))("ngIfElse", n);
        }
      }
      function Pc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.EFF(0),
            e.nI1(1, "translate"),
            e.j41(2, "button", 4),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.openAuthModal());
            }),
            e.EFF(3),
            e.nI1(4, "translate"),
            e.k0s();
        }
        2 & i &&
          (e.SpI(" ", e.bMT(1, 2, "modals.tokensListModal.unauthorized"), " "),
          e.R7$(3),
          e.SpI(" ", e.bMT(4, 4, "navigation.login"), " "));
      }
      let Mc = (() => {
        class i {
          constructor(t, n, a, o) {
            (this.tokensListTypeService = t),
              (this.searchQueryService = n),
              (this.authService = a),
              (this.walletsModalService = o),
              (this.user$ = this.authService.currentUser$),
              (this.hasSearchQuery$ = this.searchQueryService.query$.pipe(
                (0, k.T)((s) => !!s.length)
              )),
              (this.listType$ = this.tokensListTypeService.listType$);
          }
          switchToDefaultList() {
            this.tokensListTypeService.switchListType();
          }
          openAuthModal() {
            this.walletsModalService.open$();
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(ye), e.rXU(Ne), e.rXU(le.u), e.rXU(Ac.R));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-empty-list"]],
            decls: 8,
            vars: 6,
            consts: [
              [1, "nothing-to-show-message"],
              [4, "ngIf", "ngIfElse"],
              ["noFavoriteTokens", ""],
              ["noAuth", ""],
              [1, "nothing-to-show-message__link", 3, "click"],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.j41(0, "div", 0),
                  e.DNE(1, xc, 3, 3, "ng-container", 1),
                  e.nI1(2, "async"),
                  e.nI1(3, "async"),
                  e.DNE(4, Ic, 2, 4, "ng-template", null, 2, e.C5r),
                  e.DNE(6, Pc, 5, 6, "ng-template", null, 3, e.C5r),
                  e.k0s()),
                2 & n)
              ) {
                const o = e.sdS(5);
                e.R7$(1),
                  e.Y8G(
                    "ngIf",
                    e.bMT(2, 2, a.hasSearchQuery$) ||
                      "default" === e.bMT(3, 4, a.listType$)
                  )("ngIfElse", o);
              }
            },
            dependencies: [_.bT, _.Jj, J.D9],
            styles: [
              ".nothing-to-show-message[_ngcontent-%COMP%]{font-size:16px;text-align:center;opacity:.6}.nothing-to-show-message__link[_ngcontent-%COMP%]{color:var(--tui-primary);font-size:16px;cursor:pointer}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Nc(i, c) {
        1 & i &&
          (e.j41(0, "div", 5),
          e.nrm(1, "app-search-bar", 6)(2, "app-switch-list-type-button"),
          e.k0s()),
          2 & i && (e.R7$(1), e.Y8G("searchBarType", "tokens"));
      }
      function Ec(i, c) {
        1 & i && (e.j41(0, "div", 12), e.nrm(1, "app-empty-list"), e.k0s());
      }
      const Rc = function (i) {
        return { "tokens-list__item_disabled": i };
      };
      function Bc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "li", 16)(1, "app-tokens-list-element", 17),
            e.bIt("selectToken", function () {
              const o = e.eBV(t).$implicit,
                s = e.XpG(5);
              return e.Njj(s.onTokenSelect(o));
            }),
            e.nI1(2, "async"),
            e.k0s()();
        }
        if (2 & i) {
          const t = c.$implicit,
            n = e.XpG(5),
            a = e.sdS(3);
          e.Y8G("ngClass", e.eq3(6, Rc, !t.available))(
            "tuiHint",
            t.available ? null : a
          ),
            e.R7$(1),
            e.Y8G("token", t)(
              "balanceLoading",
              e.bMT(2, 4, n.isBalanceLoading$)
            );
        }
      }
      const $c = function (i) {
        return { "tokens-scrollbar__empty": i };
      };
      function Fc(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "ul", 13),
            e.nI1(1, "async"),
            e.j41(2, "cdk-virtual-scroll-viewport", 14),
            e.DNE(3, Bc, 3, 8, "li", 15),
            e.k0s()()),
          2 & i)
        ) {
          const t = e.XpG(2).ngLet,
            n = e.XpG().ngLet,
            a = e.XpG();
          e.Y8G("@listAnimation", e.bMT(1, 6, a.listAnimationState$)),
            e.R7$(2),
            e.xc7("overflow", t ? "hidden" : "auto"),
            e.Y8G("ngClass", e.eq3(8, $c, !(null != n && n.length))),
            e.R7$(1),
            e.Y8G("cdkVirtualForOf", n)("cdkVirtualForTrackBy", a.trackByFn);
        }
      }
      function Lc(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Ec, 2, 0, "div", 10),
            e.DNE(2, Fc, 4, 10, "ng-template", null, 11, e.C5r),
            e.bVm()),
          2 & i)
        ) {
          const t = e.sdS(3),
            n = e.XpG(2).ngLet;
          e.R7$(1), e.Y8G("ngIf", !(null != n && n.length))("ngIfElse", t);
        }
      }
      function Dc(i, c) {
        1 & i && e.nrm(0, "app-custom-token");
      }
      function Gc(i, c) {
        if (
          (1 & i &&
            (e.j41(0, "tui-loader", 7),
            e.DNE(1, Lc, 4, 2, "ng-container", 8),
            e.nI1(2, "async"),
            e.DNE(3, Dc, 1, 0, "ng-template", null, 9, e.C5r),
            e.k0s()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.sdS(4),
            a = e.XpG(2);
          e.Y8G("showLoader", t)("overlay", !0),
            e.R7$(1),
            e.Y8G("ngIf", null === e.bMT(2, 4, a.customToken$))("ngIfElse", n);
        }
      }
      const Hc = function (i) {
        return { "large-iframe-token-container": i };
      };
      function Vc(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Nc, 3, 1, "div", 2),
            e.j41(2, "tui-scrollbar", 3),
            e.DNE(3, Gc, 5, 6, "tui-loader", 4),
            e.nI1(4, "async"),
            e.k0s(),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG();
          e.R7$(1),
            e.Y8G("ngIf", !t.isMobile),
            e.R7$(1),
            e.Y8G("ngClass", e.eq3(5, Hc, t.useLargeIframe)),
            e.R7$(1),
            e.Y8G("ngLet", e.bMT(4, 3, t.loading$));
        }
      }
      function jc(i, c) {
        1 & i && (e.j41(0, "div"), e.EFF(1), e.nI1(2, "translate"), e.k0s()),
          2 & i &&
            (e.R7$(1),
            e.SpI(
              " ",
              e.bMT(2, 1, "modals.tokensListModal.clearParamsHint"),
              " "
            ));
      }
      let Yc = (() => {
        class i {
          set virtualScroll(t) {
            this.tokensListService.setListScrollSubject(t);
          }
          constructor(t, n, a, o, s, l) {
            (this.tokensListService = t),
              (this.tokensListStoreService = n),
              (this.mobileNativeService = a),
              (this.assetsSelectorService = o),
              (this.headerStore = s),
              (this.queryParamsService = l),
              (this.loading$ = this.tokensListService.loading$),
              (this.listAnimationState$ =
                this.tokensListService.listAnimationType$),
              (this.customToken$ = this.tokensListStoreService.customToken$),
              (this.isMobile = this.headerStore.isMobile),
              (this.isBalanceLoading$ =
                this.tokensListStoreService.tokensToShow$.pipe(
                  (0, A.n)((u) =>
                    u.length
                      ? this.tokensListStoreService.isBalanceLoading$(
                          u[0].blockchain
                        )
                      : (0, y.of)(!1)
                  )
                )),
              (this.tokensToShow$ = this.tokensListStoreService.tokensToShow$),
              (this.useLargeIframe = this.queryParamsService.useLargeIframe);
          }
          trackByFn(t, n) {
            return `${n.blockchain}_${n.address}`;
          }
          onTokenSelect(t) {
            this.mobileNativeService.forceClose(),
              t.available && this.assetsSelectorService.onAssetSelect(t);
          }
          isGasExchangeableToken(t) {
            const n = r.BlockchainsInfo.getChainType(t.blockchain),
              a = r.Web3Pure[n].isNativeAddress(t.address),
              o = r.wrappedNativeTokensList[t.blockchain]?.address,
              s = (0, x.Qb)(o, t.address),
              l = tc.some((u) => new RegExp(u, "i").test(t.name));
            return a || s || l;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(
              e.rXU(Hn),
              e.rXU(_t),
              e.rXU(jn.c),
              e.rXU(be.Y),
              e.rXU(K.X),
              e.rXU(Ce.w)
            );
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-tokens-list"]],
            viewQuery: function (n, a) {
              if ((1 & n && e.GBs(Ye.d6, 5), 2 & n)) {
                let o;
                e.mGM((o = e.lsd())) && (a.virtualScroll = o.first);
              }
            },
            decls: 4,
            vars: 3,
            consts: [
              [4, "ngLet"],
              ["disabledTokenHint", ""],
              ["class", "tokens-list__search-bar-container", 4, "ngIf"],
              [1, "tokens-container", 3, "ngClass"],
              [3, "showLoader", "overlay", 4, "ngLet"],
              [1, "tokens-list__search-bar-container"],
              [3, "searchBarType"],
              [3, "showLoader", "overlay"],
              [4, "ngIf", "ngIfElse"],
              ["customTokenTmpl", ""],
              ["class", "tokens-container__empty-list", 4, "ngIf", "ngIfElse"],
              ["tokenList", ""],
              [1, "tokens-container__empty-list"],
              [1, "tokens-list"],
              [
                "tuiScrollable",
                "",
                "itemSize",
                "50",
                1,
                "tokens-scrollbar",
                "tui-zero-scrollbar",
                3,
                "ngClass",
              ],
              [
                "class",
                "tokens-list__item",
                "tuiHintAppearance",
                "error",
                "tuiHintDirection",
                "bottom-right",
                3,
                "ngClass",
                "tuiHint",
                4,
                "cdkVirtualFor",
                "cdkVirtualForOf",
                "cdkVirtualForTrackBy",
              ],
              [
                "tuiHintAppearance",
                "error",
                "tuiHintDirection",
                "bottom-right",
                1,
                "tokens-list__item",
                3,
                "ngClass",
                "tuiHint",
              ],
              [3, "token", "balanceLoading", "selectToken"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.DNE(0, Vc, 5, 7, "ng-container", 0),
                e.nI1(1, "async"),
                e.DNE(2, jc, 3, 3, "ng-template", null, 1, e.C5r)),
                2 & n && e.Y8G("ngLet", e.bMT(1, 1, a.tokensToShow$));
            },
            dependencies: [
              _.YU,
              _.bT,
              B.N,
              we.UB,
              we.d6,
              Ye.yg,
              Ye.E$,
              Ye.d6,
              h.XZ,
              h.ZF,
              h.JL,
              h.AZ,
              lt.jT,
              pt,
              zn,
              wc,
              Qn,
              Mc,
              _.Jj,
              J.D9,
            ],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}[_nghost-%COMP%]{width:100%}@media (max-width: 651px){[_nghost-%COMP%]     tui-scroll-controls .t-bar{right:-14px!important}}.tokens-container[_ngcontent-%COMP%]{position:relative;height:469px;padding:10px;background:var(--io-background);border-bottom-right-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}@media (max-width: 651px){.tokens-container[_ngcontent-%COMP%]{height:54vh;padding:var(--tui-padding-l);background:none;border-radius:0}.tokens-container[_ngcontent-%COMP%]   .tokens-scrollbar[_ngcontent-%COMP%]{height:30vh}}.tokens-container__empty-list[_ngcontent-%COMP%]{position:relative;margin-top:20px}.tokens-container__empty-list_metis[_ngcontent-%COMP%]{margin:0 20px;font-size:16px}.tokens-container[_ngcontent-%COMP%]     .t-content{height:100%}@media (max-width: 599px){.tokens-container[_ngcontent-%COMP%]     .t-content{height:calc(100% - 10px)}}tui-loader[_ngcontent-%COMP%]{height:100%}.tokens-list[_ngcontent-%COMP%]{height:100%;padding-right:15px}@media (max-width: 651px){.tokens-list[_ngcontent-%COMP%]{padding:0}}.tokens-list__search-bar-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:2px}.tokens-list__search-bar-container[_ngcontent-%COMP%]   app-search-bar[_ngcontent-%COMP%]{flex:1}.tokens-list__search-bar-container[_ngcontent-%COMP%]     .tui-autofill{background-color:var(--io-background);border-radius:0;border-top-left-radius:var(--tui-radius-m)}.tokens-list__search-bar-container[_ngcontent-%COMP%]     button .t-wrapper{background-color:var(--io-background);border-radius:0;border-top-right-radius:var(--tui-radius-m)}.tokens-list__item[_ngcontent-%COMP%]{border-radius:var(--tui-radius-m);cursor:pointer}@media (max-width: 651px){.tokens-list__item[_ngcontent-%COMP%]{background-color:transparent;border:1px solid var(--transparent-line)}}.tokens-list__item[_ngcontent-%COMP%]:hover{background-color:var(--transparent-line)}.tokens-list__item_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.tokens-list__item_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-list__item_empty[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:18px}.tokens-list__item_empty[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-scrollbar[_ngcontent-%COMP%]{height:100%;overflow-x:hidden!important}.tokens-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{display:flex;flex-direction:column;gap:10px;width:100%}.vertical-frame-link[_ngcontent-%COMP%]{border:2px solid var(--primary-color)}.vertical-frame-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:100%;height:100%;line-height:30px;text-align:center}.vertical-frame-link[_ngcontent-%COMP%]:hover{background-color:unset}.large-iframe-token-container[_ngcontent-%COMP%]{height:430px}",
            ],
            data: { animation: [ec] },
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function Kc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.j41(0, "app-filter-list-element", 4),
            e.bIt("click", function () {
              e.eBV(t);
              const a = e.XpG(2).$implicit,
                o = e.XpG();
              return e.Njj(o.onSelectFilter(a));
            }),
            e.k0s();
        }
        if (2 & i) {
          const t = c.ngLet,
            n = e.XpG(2).$implicit;
          e.Y8G("blockchainFilter", n)("isSelected", t === n);
        }
      }
      function Uc(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Kc, 1, 2, "app-filter-list-element", 3),
            e.nI1(2, "async"),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG(2);
          e.R7$(1), e.Y8G("ngLet", e.bMT(2, 1, t.currentFilter$));
        }
      }
      function Xc(i, c) {
        if (
          (1 & i && (e.qex(0), e.DNE(1, Uc, 3, 3, "ng-container", 2), e.bVm()),
          2 & i)
        ) {
          const t = c.$implicit,
            n = e.XpG();
          e.R7$(1), e.Y8G("ngIf", !n.isMobile || (n.isMobile && "All" !== t));
        }
      }
      let Wc = (() => {
        class i {
          constructor(t, n) {
            (this.filterQueryService = t),
              (this.headerStore = n),
              (this.BLOCKCHAIN_FILTERS = Ee.C),
              (this.currentFilter$ = this.filterQueryService.filterQuery$),
              (this.isMobile = this.headerStore.isMobile);
          }
          onSelectFilter(t) {
            this.filterQueryService.filterQuery = t;
          }
          static #e = (this.ɵfac = function (n) {
            return new (n || i)(e.rXU(ut.s), e.rXU(K.X));
          });
          static #t = (this.ɵcmp = e.VBU({
            type: i,
            selectors: [["app-blockchains-filter-list"]],
            decls: 2,
            vars: 1,
            consts: [
              [1, "blockchains-filter-list"],
              [4, "ngFor", "ngForOf"],
              [4, "ngIf"],
              [3, "blockchainFilter", "isSelected", "click", 4, "ngLet"],
              [3, "blockchainFilter", "isSelected", "click"],
            ],
            template: function (n, a) {
              1 & n &&
                (e.j41(0, "div", 0),
                e.DNE(1, Xc, 2, 1, "ng-container", 1),
                e.k0s()),
                2 & n && (e.R7$(1), e.Y8G("ngForOf", a.BLOCKCHAIN_FILTERS));
            },
            dependencies: [_.Sq, _.bT, B.N, Vn, _.Jj],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.blockchains-filter-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:12px}@media (max-width: 500px){.blockchains-filter-list[_ngcontent-%COMP%]{gap:12px;align-items:unset;margin-top:0;overflow-x:auto}.blockchains-filter-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}",
            ],
            changeDetection: 0,
          }));
        }
        return i;
      })();
      function zc(i, c) {
        if (1 & i) {
          const t = e.RV6();
          e.qex(0, 3),
            e.j41(1, "div", 4)(2, "app-back-button", 5),
            e.bIt("onClick", function () {
              e.eBV(t);
              const a = e.XpG();
              return e.Njj(a.backToForm());
            }),
            e.k0s(),
            e.j41(3, "span", 6),
            e.EFF(4),
            e.nI1(5, "async"),
            e.k0s()(),
            e.bVm();
        }
        if (2 & i) {
          const t = e.XpG();
          e.R7$(2),
            e.Y8G("isMobile", !1),
            e.R7$(2),
            e.JRh(e.bMT(5, 2, t.headerText$));
        }
      }
      function Zc(i, c) {
        1 & i && e.nrm(0, "app-blockchains-filter-list");
      }
      function Qc(i, c) {
        1 & i && e.eu8(0);
      }
      function Jc(i, c) {
        1 & i && e.nrm(0, "app-blockchains-filter-list");
      }
      function qc(i, c) {
        1 & i && (e.qex(0), e.nrm(1, "app-search-bar", 13), e.bVm()),
          2 & i && (e.R7$(1), e.Y8G("searchBarType", "tokens"));
      }
      function el(i, c) {
        1 & i && e.eu8(0);
      }
      function tl(i, c) {
        1 & i &&
          (e.j41(0, "div", 14)(1, "div", 15),
          e.nrm(2, "app-tokens-list"),
          e.k0s()());
      }
      function nl(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.j41(1, "app-asset-types-aside", 11),
            e.DNE(2, Jc, 1, 0, "app-blockchains-filter-list", 7),
            e.k0s(),
            e.DNE(3, qc, 2, 1, "ng-container", 7),
            e.DNE(4, el, 1, 0, "ng-container", 8),
            e.DNE(5, tl, 3, 0, "div", 12),
            e.bVm()),
          2 & i)
        ) {
          const t = e.XpG().ngLet,
            n = e.sdS(6),
            a = e.XpG();
          e.R7$(1),
            e.Y8G("idPrefix", "idPrefix"),
            e.R7$(1),
            e.Y8G("ngIf", a.isMobile),
            e.R7$(1),
            e.Y8G("ngIf", "fiats" === t),
            e.R7$(1),
            e.Y8G("ngIf", a.isMobile)("ngIfThen", n),
            e.R7$(1),
            e.Y8G("ngIf", "tokens" === t);
        }
      }
      function il(i, c) {
        1 & i && e.nrm(0, "hr", 18);
      }
      function al(i, c) {
        1 & i && e.nrm(0, "app-switch-list-type-button");
      }
      function ol(i, c) {
        if (
          (1 & i &&
            (e.DNE(0, il, 1, 0, "hr", 16),
            e.j41(1, "div", 9),
            e.nrm(2, "app-search-bar", 17),
            e.DNE(3, al, 1, 0, "app-switch-list-type-button", 7),
            e.k0s()),
          2 & i)
        ) {
          const t = e.XpG().ngLet,
            n = e.XpG();
          e.Y8G("ngIf", n.isMobile),
            e.R7$(2),
            e.Y8G("searchBarType", "tokens"),
            e.R7$(1),
            e.Y8G("ngIf", "tokens" === t);
        }
      }
      function rl(i, c) {
        if (
          (1 & i &&
            (e.qex(0),
            e.DNE(1, Zc, 1, 0, "app-blockchains-filter-list", 7),
            e.DNE(2, Qc, 1, 0, "ng-container", 8),
            e.j41(3, "div", 9),
            e.DNE(4, nl, 6, 6, "ng-container", 7),
            e.k0s(),
            e.DNE(5, ol, 4, 3, "ng-template", null, 10, e.C5r),
            e.bVm()),
          2 & i)
        ) {
          const t = c.ngLet,
            n = e.sdS(6),
            a = e.XpG();
          e.R7$(1),
            e.Y8G("ngIf", !a.isMobile && "blockchains" !== t),
            e.R7$(1),
            e.Y8G("ngIf", !a.isMobile && "blockchains" === t)("ngIfThen", n),
            e.R7$(2),
            e.Y8G("ngIf", "blockchains" !== t);
        }
      }
      let sl = (() => {
          class i {
            set type(t) {
              this.assetsSelectorService.initParameters({ formType: t });
            }
            constructor(t, n, a, o, s, l, u, d) {
              (this.tokensService = t),
                (this.tokensStoreService = n),
                (this.assetsSelectorService = a),
                (this.tokensListTypeService = o),
                (this.headerStore = s),
                (this.document = l),
                (this.destroy$ = u),
                (this.tradePageService = d),
                (this.tokenSelect = new e.bkB()),
                (this.selectorListType$ =
                  this.assetsSelectorService.selectorListType$),
                (this.headerText$ = this.selectorListType$.pipe(
                  (0, k.T)((m) =>
                    "blockchains" === m
                      ? "Blockchains List"
                      : "Select Chain and Token"
                  )
                )),
                (this.isMobile = this.headerStore.isMobile),
                this.assetsSelectorService.initParameters({
                  formType: this.type,
                }),
                this.subscribeOnAssetsSelect();
            }
            ngOnInit() {
              this.setWindowHeight();
            }
            ngOnDestroy() {
              this.resetWindowHeight();
            }
            backToForm() {
              this.tradePageService.setState("form");
            }
            setWindowHeight() {
              this.document.documentElement.style.setProperty(
                "--window-inner-height",
                `${window.innerHeight}px`
              ),
                this.document.documentElement.classList.add("is-locked"),
                this.document.documentElement.classList.add("scroll-y");
            }
            resetWindowHeight() {
              this.document.documentElement.classList.remove("is-locked");
            }
            subscribeOnAssetsSelect() {
              this.assetsSelectorService.assetSelected$
                .pipe((0, q.Q)(this.destroy$))
                .subscribe((t) => {
                  (0, xe.Tl)(t) && this.tokensStoreService.addToken(t),
                    this.tokenSelect.emit(t);
                });
            }
            static #e = (this.ɵfac = function (n) {
              return new (n || i)(
                e.rXU(_e.m),
                e.rXU(Z.p),
                e.rXU(be.Y),
                e.rXU(ye),
                e.rXU(K.X),
                e.rXU(_.qQ),
                e.rXU(j.ew, 2),
                e.rXU(se.p)
              );
            });
            static #t = (this.ɵcmp = e.VBU({
              type: i,
              selectors: [["app-assets-selector-page"]],
              inputs: { type: "type" },
              outputs: { tokenSelect: "tokenSelect" },
              features: [e.Jv_([Hs, j.ew])],
              decls: 4,
              vars: 4,
              consts: [
                [1, "assets-selector"],
                ["header", "", 4, "ngIf"],
                [4, "ngLet"],
                ["header", ""],
                [1, "assets-selector__header"],
                [3, "isMobile", "onClick"],
                [1, "back-button__text"],
                [4, "ngIf"],
                [4, "ngIf", "ngIfThen"],
                [1, "assets-selector__row"],
                ["searchBar", ""],
                [3, "idPrefix"],
                ["class", "token-list-container", 4, "ngIf"],
                [1, "vertical-iframe-token-search", 3, "searchBarType"],
                [1, "token-list-container"],
                [1, "token-list-container__list"],
                ["class", "assets-selector__horizontal-line", 4, "ngIf"],
                [3, "searchBarType"],
                [1, "assets-selector__horizontal-line"],
              ],
              template: function (n, a) {
                1 & n &&
                  (e.j41(0, "section", 0),
                  e.DNE(1, zc, 6, 4, "ng-container", 1),
                  e.DNE(2, rl, 7, 4, "ng-container", 2),
                  e.nI1(3, "async"),
                  e.k0s()),
                  2 & n &&
                    (e.R7$(1),
                    e.Y8G("ngIf", !a.isMobile),
                    e.R7$(1),
                    e.Y8G("ngLet", e.bMT(3, 2, a.selectorListType$)));
              },
              dependencies: [_.bT, B.N, Bt.X, qs, pt, Yc, Qn, Wc, _.Jj],
              styles: [
                "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.assets-selector__row[_ngcontent-%COMP%]{display:flex;gap:10px}.assets-selector__row[_ngcontent-%COMP%]:not(:first-child){margin-top:10px}.assets-selector__header[_ngcontent-%COMP%]{display:flex;font-weight:700;font-size:15px}app-search-bar[_ngcontent-%COMP%]{width:100%}.token-list__header[_ngcontent-%COMP%]{display:none}.token-list-container[_ngcontent-%COMP%]{width:100%;min-height:410px;max-height:410px}.token-list-container__list[_ngcontent-%COMP%]{height:100%}.blockchains-list-container[_ngcontent-%COMP%]{width:100%}@media (max-width: 651px){.assets-selector[_ngcontent-%COMP%]{padding-top:var(--tui-padding-l);border-top:1px solid var(--tui-base-04)}.assets-selector__row[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]{gap:12px;margin:var(--tui-padding-l) 0;margin-bottom:0;padding:0 var(--tui-padding-l)}.assets-selector__row[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]     app-search-bar .tui-autofill{height:51px}.assets-selector__row[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]     app-switch-list-type-button{height:51px}.assets-selector__row[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]     app-switch-list-type-button .t-wrapper{width:51px;height:51px}.assets-selector__row[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]     app-switch-list-type-button button{width:auto}.assets-selector__horizontal-line[_ngcontent-%COMP%]{margin:var(--tui-padding-l);margin-bottom:0;border:2px solid var(--tui-base-01)}.assets-selector[_ngcontent-%COMP%] > .assets-selector__row[_ngcontent-%COMP%]{flex-direction:column;gap:0;margin-top:0}.token-list__header[_ngcontent-%COMP%]{display:block;padding:0 1rem}.token-list__header-label[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:400;font-size:18px;line-height:18px;letter-spacing:.54px}}",
              ],
              changeDetection: 0,
            }));
          }
          return i;
        })(),
        cl = (() => {
          class i {
            static #e = (this.ɵfac = function (n) {
              return new (n || i)();
            });
            static #t = (this.ɵmod = e.$C({ type: i }));
            static #n = (this.ɵinj = e.G2t({
              providers: [
                he,
                M.K,
                ln,
                Kt,
                an,
                sn,
                qe,
                me.h,
                ae.P,
                Ot,
                Ie,
                At,
                Xt,
                se.p,
                Dt,
                vt,
                ge.D,
                Rt,
                dt.h,
                ge.D,
                Ke,
              ],
              imports: [
                cs,
                _.MD,
                $n.G,
                Gt.N,
                we.FC,
                rt.Nd,
                W.e1,
                oe.Pv,
                $t.FQ,
                Y.X1,
                h.Q3,
                Y.YN,
                pe.CN,
                ys.O9,
                Tn.jB,
                st.NT,
                Me.zi,
                lt.Yc,
                Fs,
                Lt.O,
                ws.Q,
              ],
            }));
          }
          return i;
        })();
      e.wjB(wn.R, [Pe.r, sl], []), e.wjB(hn.S, [_.YU, _.Sq, Ts], []);
    },
  },
]);
