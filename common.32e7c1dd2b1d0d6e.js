"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [76],
  {
    467532: (U, I, e) => {
      e.d(I, { r: () => L });
      var A = e(474523),
        t = e(331635),
        v = e(617705),
        E = e(768247),
        a = e(455748),
        M = e(489417);
      const n = [
        a.BLOCKCHAIN_NAME.ETHEREUM,
        a.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        a.BLOCKCHAIN_NAME.POLYGON,
        a.BLOCKCHAIN_NAME.ARBITRUM,
        a.BLOCKCHAIN_NAME.OPTIMISM,
        a.BLOCKCHAIN_NAME.AVALANCHE,
        a.BLOCKCHAIN_NAME.FANTOM,
      ];
      var s = e(84412),
        l = e(399172),
        O = e(544668),
        S = e(820140),
        x = e(525558),
        P = e(96354),
        T = e(607673),
        V = e(727468),
        D = e(71985),
        H = e(181170),
        h = e(187919),
        X = e(673193),
        d = e(793802),
        g = e(93359),
        k = e(700409),
        $ = e(905964),
        K = e(323294),
        j = e(788141),
        Q = e(597647),
        Z = e(461594),
        J = e(699437),
        G = e(670152),
        r = e(935763),
        _ = e(88368),
        i = e(595917),
        o = e(259925),
        C = e(821626),
        N = e(16123),
        B = e(873955);
      class L {
        set tableLoading(c) {
          this._tableLoading$.next(c);
        }
        set tokenSearchQuery(c) {
          this.queryForm.controls.token.patchValue(c);
        }
        set spenderSearchQuery(c) {
          this.queryForm.controls.spender.patchValue(c);
        }
        set size(c) {
          this._size$.next(c);
        }
        set page(c) {
          this._page$.next(c);
        }
        constructor(c, p, m, b, u, y, w, R) {
          (this.walletConnectorService = c),
            (this.httpService = p),
            (this.injector = m),
            (this.tokensService = b),
            (this.tokensStoreService = u),
            (this.notificationsService = y),
            (this.translateService = w),
            (this.gasService = R),
            (this._exceededLimits$ = new s.t(!1)),
            (this.exceededLimits$ = this._exceededLimits$.asObservable()),
            (this.supportedBlockchains = Object.entries(E.i)
              .filter(([f]) => n.includes(f))
              .map(([f, F]) => F)),
            (this.defaultBlockchain =
              this.supportedBlockchains.find(
                (f) =>
                  f.key ===
                  (this.walletConnectorService.network ??
                    a.BLOCKCHAIN_NAME.ETHEREUM)
              ) ?? E.i.ETH),
            (this.form = new M.gE({
              blockchain: new M.MJ(this.defaultBlockchain),
            })),
            (this.queryForm = new M.gE({
              spender: new M.MJ(""),
              token: new M.MJ(""),
            })),
            (this.selectedBlockchain$ =
              this.form.controls.blockchain.valueChanges.pipe(
                (0, l.Z)(this.form.controls.blockchain.value),
                (0, O.t)(d.V)
              )),
            (this._refreshTable$ = new s.t("")),
            (this.refreshTable$ = this._refreshTable$.asObservable()),
            (this.allApproves$ = this.selectedBlockchain$.pipe(
              (0, l.Z)(this.defaultBlockchain),
              (0, S.v)(
                this.walletConnectorService.addressChange$.pipe(
                  (0, $.p)((f) => null !== f)
                ),
                this.refreshTable$
              ),
              (0, K.F)(),
              (0, j.M)(() => {
                (this.tableLoading = !0),
                  (this.page = 0),
                  (this.tokenSearchQuery = ""),
                  (this.spenderSearchQuery = "");
              }),
              (0, x.n)(([f, F, Y]) => this.fetchTransactions(f, F, Y)),
              (0, j.M)(() => (this.tableLoading = !1))
            )),
            (this._tableLoading$ = new s.t(!0)),
            (this.tableLoading$ = this._tableLoading$.asObservable()),
            (this._size$ = new s.t(10)),
            (this.size$ = this._size$.asObservable()),
            (this._page$ = new s.t(0)),
            (this.page$ = this._page$.asObservable()),
            (this.visibleApproves$ = this.allApproves$.pipe(
              (0, S.v)(
                this.page$,
                this.size$,
                this.queryForm.valueChanges.pipe((0, G.B)(400))
              ),
              (0, G.B)(0),
              (0, P.T)(([f, F, Y, tt]) => {
                const q = tt.token.split(" ").join(""),
                  et = tt.spender.split(" ").join("");
                if (q || et)
                  return f.filter((W) => {
                    const z = W.spender
                        .toLowerCase()
                        .includes(et.toLowerCase()),
                      it =
                        W.token?.symbol
                          .toLowerCase()
                          .includes(q.toLowerCase()) ||
                        W.tokenAddress.toLowerCase().includes(q.toLowerCase());
                    return z && it;
                  });
                const nt = F * Y,
                  ot = nt + Y;
                return f.filter((W, z) => z >= nt && z < ot);
              }),
              (0, Q.u)()
            )),
            this.visibleApproves$.subscribe();
        }
        fetchTransactions(c, p, m) {
          return this.httpService
            .get(
              {
                [a.BLOCKCHAIN_NAME
                  .ETHEREUM]: `https://api.etherscan.io/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .BINANCE_SMART_CHAIN]: `https://api.bscscan.com/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .POLYGON]: `https://api.polygonscan.com/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .ARBITRUM]: `https://api.arbiscan.io/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .OPTIMISM]: `https://api-optimistic.etherscan.io/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .FANTOM]: `https://api.ftmscan.com/api?module=account&action=txlist&address=${p}`,
                [a.BLOCKCHAIN_NAME
                  .AVALANCHE]: `https://api.snowtrace.io/api?module=account&action=txlist&address=${p}`,
              }[c.key]
            )
            .pipe(
              (0, P.T)((u) => this.handleScannerResponse(u)),
              (0, r.AO)(() =>
                this.tokensStoreService.tokens$.pipe((0, Z.$)(o.Aj))
              ),
              (0, x.n)((u) => this.findTokensForApproves(u)),
              (0, x.n)((u) => this.fetchLastAllowance(u, c)),
              (0, P.T)((u) => u.filter((y) => "0" !== y.value)),
              (0, j.M)(() => this._exceededLimits$.next(!1)),
              (0, J.W)(
                (u) => (
                  u instanceof Error &&
                    u.message.includes("Exceed limits") &&
                    this._exceededLimits$.next(!0),
                  (0, T.of)([])
                )
              )
            );
        }
        revokeApprove(c, p) {
          var m = this;
          return (0, A.A)(function* () {
            const b = m.form.controls.blockchain.value.key,
              u = a.Injector.web3PublicService.getWeb3Public(b);
            let y;
            if (
              (yield u.getAllowance(c, m.walletConnectorService.address, p)).eq(
                0
              )
            )
              throw new a.RubicSdkError(
                "Approve already revoked, token has 0 allowance"
              );
            try {
              const { shouldCalculateGasPrice: R, gasPriceOptions: f } =
                yield m.gasService.getGasInfo(b);
              yield a.Injector.web3PrivateService
                .getWeb3PrivateByBlockchain(b)
                .approveTokens(c, p, new g.A(0), {
                  onTransactionHash: (F) => {
                    y = m.showProgressNotification();
                  },
                  ...(R && { gasPriceOptions: f }),
                }),
                m.showSuccessNotification(),
                m._refreshTable$.next(c);
            } catch (R) {
              m.handleError(R);
            } finally {
              y?.unsubscribe();
            }
          })();
        }
        showProgressNotification() {
          return this.notificationsService.show(
            this.translateService.instant("Revoke in progress"),
            {
              status: h.wS.Info,
              autoClose: !1,
              data: null,
              icon: "",
              defaultAutoCloseTime: 0,
            }
          );
        }
        showSuccessNotification() {
          return this.notificationsService.show("Successful revoke", {
            status: h.wS.Success,
            autoClose: 1e4,
            data: null,
            icon: "",
            defaultAutoCloseTime: 0,
          });
        }
        handleError(c) {
          if (c instanceof Error) {
            let p, m;
            c instanceof a.UserRejectError
              ? ((p = this.translateService.instant("errors.userReject")),
                (m = h.wS.Error))
              : ((p = this.translateService.instant("errors.unknown")),
                (m = h.wS.Error)),
              this.notificationsService.show(p, {
                autoClose: 1e4,
                status: m,
                data: null,
                icon: "",
                defaultAutoCloseTime: 0,
              });
          }
        }
        handleScannerResponse(c) {
          if ("string" == typeof c.result) throw new Error("Exceed limits");
          const p = c.result
              .filter((b) => b?.functionName.includes("approve"))
              .reverse(),
            m = new Map();
          return (
            p.forEach((b) => {
              const u = a.MethodDecoder.decodeMethod(
                  a.ERC20_TOKEN_ABI.find((f) => "approve" === f.name),
                  b.input
                ),
                y = u.params.find((f) => "_spender" === f.name).value,
                w = u.params.find((f) => "_value" === f.name).value,
                R = `${b.to}${y}`;
              m.has(R) ||
                m.set(R, {
                  hash: b.hash,
                  tokenAddress: b.to,
                  spender: y,
                  value: w,
                  timeStamp: 1e3 * b.timeStamp,
                });
            }),
            Array.from(m.values())
          );
        }
        findTokensForApproves(c) {
          const p = c.map((u) => u.tokenAddress),
            b = Array.from(new Set(p)).map((u) =>
              this.tokensService.findToken(
                {
                  address: u,
                  blockchain: this.form.controls.blockchain.value.key,
                },
                !0
              )
            );
          return (0, V.p)([(0, T.of)(c), Promise.all(b)]).pipe(
            (0, P.T)(([u, y]) =>
              u.map((w) => ({
                ...w,
                token: y.find((R) =>
                  (0, a.compareAddresses)(R?.address, w.tokenAddress)
                ),
              }))
            )
          );
        }
        fetchLastAllowance(c, p) {
          var m = this;
          return (0, A.A)(function* () {
            const u = yield a.Injector.web3PublicService
              .getWeb3Public(p.key)
              .multicallContractsMethods(
                a.ERC20_TOKEN_ABI,
                c.map((y) => ({
                  contractAddress: y.tokenAddress,
                  methodsData: [
                    {
                      methodName: "allowance",
                      methodArguments: [
                        m.walletConnectorService.address,
                        y.spender,
                      ],
                    },
                  ],
                }))
              );
            return c.map((y, w) => ({
              ...y,
              value: u[w]?.[0].success ? u[w][0].output : y.value,
            }));
          })();
        }
        static #t = (this.ɵfac = function (p) {
          return new (p || L)(
            v.KVO(H.c),
            v.KVO(C.Qq),
            v.KVO(v.duS),
            v.KVO(k.m),
            v.KVO(i.p),
            v.KVO(N.I),
            v.KVO(B.c$),
            v.KVO(_.R)
          );
        });
        static #e = (this.ɵprov = v.jDH({ token: L, factory: L.ɵfac }));
      }
      (0, t.__decorate)(
        [
          (0, X.R)({ maxAge: 12e4 }),
          (0, t.__metadata)("design:type", Function),
          (0, t.__metadata)("design:paramtypes", [Object, String, String]),
          (0, t.__metadata)("design:returntype", D.c),
        ],
        L.prototype,
        "fetchTransactions",
        null
      );
    },
    550392: (U, I, e) => {
      e.d(I, { o: () => G });
      var A = e(474523),
        t = e(617705),
        v = e(831861),
        E = e(455748),
        a = e(155485);
      const M = {
          login: "airdrop.button.login",
          claim: "airdrop.button.claim",
          claimed: "airdrop.button.claimed",
          stake: "airdrop.button.stake",
          staked: "airdrop.button.staked",
          closed: "airdrop.button.closed",
          soon: "airdrop.button.soon",
          expired: "airdrop.button.expired",
          emptyError: "airdrop.button.emptyError",
          changeNetwork: "airdrop.button.changeNetwork",
          notParticipant: "airdrop.button.notParticipant",
          wrongAddressError: "airdrop.button.wrongAddressError",
          incorrectAddressError: "airdrop.button.incorrectAddressError",
        },
        n = (r) => "wrongAddressError" === r || "incorrectAddressError" === r;
      var O = e(166841),
        S = e(60135),
        x = e(360177),
        P = e(644819),
        T = e(272782),
        V = e(6249),
        D = e(647097),
        H = e(873955),
        h = e(640920),
        X = e(862826);
      const d = function (r) {
        return { round__container_disabled: r };
      };
      function g(r, _) {
        if (1 & r) {
          const i = t.RV6();
          t.j41(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 7),
            t.EFF(4),
            t.k0s()(),
            t.j41(5, "div", 8)(6, "div", 9)(7, "div", 10),
            t.EFF(8),
            t.k0s(),
            t.j41(9, "span", 11),
            t.nrm(10, "img", 12),
            t.EFF(11),
            t.nI1(12, "shortenAmount"),
            t.nI1(13, "bigNumberFormat"),
            t.k0s()(),
            t.j41(14, "tui-loader", 13)(15, "button", 14),
            t.bIt("click", function () {
              t.eBV(i);
              const C = t.XpG(2);
              return t.Njj(
                C.round.isAlreadyClaimed
                  ? null
                  : C.handleClick(C.buttonState.label)
              );
            }),
            t.EFF(16),
            t.nI1(17, "translate"),
            t.k0s()()()()();
        }
        if (2 & r) {
          const i = t.XpG().ngLet,
            o = t.XpG();
          t.R7$(1),
            t.Y8G("ngClass", t.eq3(18, d, i || o.round.isAlreadyClaimed)),
            t.R7$(3),
            t.SpI("Round #", o.round.roundNumber, ""),
            t.R7$(4),
            t.SpI(" ", o.round.claimDate, " "),
            t.R7$(3),
            t.SpI(
              " ",
              "-.-" === o.claimAmountValue
                ? o.claimAmountValue
                : t.ii3(12, 9, t.bMT(13, 14, o.claimAmountValue), 6, 2, !0),
              " RBC "
            ),
            t.R7$(3),
            t.Y8G("showLoader", o.loading && !i && !o.round.isAlreadyClaimed)(
              "overlay",
              !0
            ),
            t.R7$(1),
            t.Y8G("disabled", o.round.isAlreadyClaimed || i)(
              "tuiHint",
              o.getHintText()
            ),
            t.R7$(1),
            t.SpI(" ", t.bMT(17, 16, o.buttonState.translation), " ");
        }
      }
      const k = function (r) {
          return { round__container_border: r };
        },
        $ = function (r) {
          return { round__footer_border: r };
        };
      function K(r, _) {
        if (1 & r) {
          const i = t.RV6();
          t.j41(0, "div", 15)(1, "div", 5)(2, "div", 6)(3, "span", 11),
            t.nrm(4, "img", 12),
            t.EFF(5),
            t.nI1(6, "shortenAmount"),
            t.nI1(7, "bigNumberFormat"),
            t.k0s(),
            t.j41(8, "tui-loader", 13)(9, "button", 14),
            t.bIt("click", function () {
              t.eBV(i);
              const C = t.XpG(2);
              return t.Njj(
                C.round.isAlreadyClaimed
                  ? null
                  : C.handleClick(C.buttonState.label)
              );
            }),
            t.EFF(10),
            t.nI1(11, "translate"),
            t.k0s()()(),
            t.j41(12, "div", 16)(13, "span", 7),
            t.EFF(14),
            t.k0s(),
            t.j41(15, "span", 17),
            t.EFF(16),
            t.k0s()()()();
        }
        if (2 & r) {
          const i = t.XpG().ngLet,
            o = t.XpG();
          t.R7$(1),
            t.Y8G(
              "ngClass",
              t.eq3(19, k, o.isModal || "retrodrop" === o.round.claimName)
            ),
            t.R7$(4),
            t.SpI(
              " ",
              "-.-" === o.claimAmountValue
                ? o.claimAmountValue
                : t.ii3(6, 10, t.bMT(7, 15, o.claimAmountValue), 6, 2, !0),
              " RBC "
            ),
            t.R7$(3),
            t.Y8G("showLoader", o.loading && !i && !o.round.isAlreadyClaimed)(
              "overlay",
              !0
            ),
            t.R7$(1),
            t.Y8G("disabled", o.round.isAlreadyClaimed || i)(
              "tuiHint",
              o.getHintText()
            ),
            t.R7$(1),
            t.SpI(" ", t.bMT(11, 17, o.buttonState.translation), " "),
            t.R7$(2),
            t.Y8G("ngClass", t.eq3(21, $, o.isModal)),
            t.R7$(2),
            t.SpI("Round #", o.round.roundNumber, ""),
            t.R7$(2),
            t.SpI(" ", o.round.claimDate, " ");
        }
      }
      function j(r, _) {
        if (
          (1 & r &&
            (t.qex(0),
            t.DNE(1, g, 18, 20, "div", 2),
            t.nI1(2, "async"),
            t.DNE(3, K, 17, 23, "div", 3),
            t.nI1(4, "async"),
            t.bVm()),
          2 & r)
        ) {
          const i = t.XpG();
          t.R7$(1),
            t.Y8G("ngIf", !1 === t.bMT(2, 2, i.isMobile$)),
            t.R7$(2),
            t.Y8G("ngIf", t.bMT(4, 4, i.isMobile$));
        }
      }
      function Q(r, _) {
        1 & r &&
          (t.qex(0),
          t.EFF(
            1,
            " Your tokens have been already claimed, please check your wallet. "
          ),
          t.bVm());
      }
      function Z(r, _) {
        1 & r &&
          (t.qex(0),
          t.EFF(
            1,
            " Your tokens have already been successfully staked. Please review the Staking tab for further details. "
          ),
          t.bVm());
      }
      function J(r, _) {
        if (
          (1 & r &&
            (t.DNE(0, Q, 2, 0, "ng-container", 18),
            t.DNE(1, Z, 2, 0, "ng-container", 18)),
          2 & r)
        ) {
          const i = t.XpG();
          t.Y8G("ngIf", "airdrop" === i.round.claimName),
            t.R7$(1),
            t.Y8G("ngIf", "retrodrop" === i.round.claimName);
        }
      }
      let G = (() => {
        class r {
          set inputRound(i) {
            (this.round = i),
              this.setButtonStateValue(i),
              this.setClaimAmountValue(
                this.round.status,
                this.round.claimAmount
              );
          }
          constructor(i, o, C) {
            (this.claimService = i),
              (this.walletModalService = o),
              (this.headerStore = C),
              (this.isModal = !1),
              (this.loading = !1),
              (this.handleClaim = new t.bkB()),
              (this.isMobile$ = this.headerStore.getMobileDisplayStatus());
          }
          handleClick(i) {
            var o = this;
            return (0, A.A)(function* () {
              switch (i) {
                case "changeNetwork":
                  yield o.claimService.changeNetwork();
                  break;
                case "login":
                  o.walletModalService.open$();
                  break;
                case "claim":
                case "stake":
                  o.handleClaim.emit({
                    claimData: o.round.claimData,
                    claimRound: o.round.roundNumber,
                  });
              }
            })();
          }
          setButtonStateValue(i) {
            this.buttonState = ((r, _, i, o, C, N) => {
              const B = (([r, _, i, o, C, N]) =>
                _
                  ? "active" !== o
                    ? "expired"
                    : r
                    ? C
                      ? "airdrop" === N
                        ? "claimed"
                        : "staked"
                      : i && i === a.z.blockchain
                      ? r
                        ? "airdrop" === N
                          ? "claim"
                          : "stake"
                        : E.EvmWeb3Pure.isAddressCorrect(_)
                        ? "wrongAddressError"
                        : "incorrectAddressError"
                      : "changeNetwork"
                    : "notParticipant"
                  : "login")([r, _, i, o, C, N]);
              return { label: B, translation: M[B], isError: n(B) };
            })(
              i.isParticipantOfCurrentRound,
              i.claimData.node?.account || "",
              i.network,
              i.status,
              i.isAlreadyClaimed,
              i.claimName
            );
          }
          setClaimAmountValue(i, o) {
            this.claimAmountValue =
              "soon" === i || "expired" === i
                ? "-.-"
                : "closed" === i
                ? "0"
                : o;
          }
          getHintText() {
            return "closed" === this.round.status &&
              "airdrop" !== this.round.claimName
              ? null
              : "closed" === this.round.status &&
                "airdrop" === this.round.claimName
              ? "The Claiming Round has finished;\n      all claimed tokens have now been transferred into the next Claiming Round."
              : "soon" === this.round.status
              ? "The staking round will start soon."
              : this.round.isParticipantOfPrevRounds ||
                "airdrop" === this.round.claimName
              ? this.round.isAlreadyClaimed
                ? "retrodrop" === this.round.claimName
                  ? "Your tokens have already been successfully staked. Please review the Staking tab for further details."
                  : "Your tokens have been already claimed, please check your wallet."
                : void 0
              : "You're not eligible";
          }
          static #t = (this.ɵfac = function (o) {
            return new (o || r)(t.rXU(O.q), t.rXU(v.R), t.rXU(S.X));
          });
          static #e = (this.ɵcmp = t.VBU({
            type: r,
            selectors: [["app-claim-round-row-container"]],
            inputs: {
              isModal: "isModal",
              loading: "loading",
              inputRound: "inputRound",
            },
            outputs: { handleClaim: "handleClaim" },
            decls: 3,
            vars: 1,
            consts: [
              [4, "ngLet"],
              ["hintTemplate", ""],
              ["class", "round round_desktop", 4, "ngIf"],
              ["class", "round", 4, "ngIf"],
              [1, "round", "round_desktop"],
              [1, "round__container", 3, "ngClass"],
              [1, "round__header"],
              [1, "round__number"],
              [1, "round__footer"],
              [1, "round__info"],
              [1, "round__info-date"],
              [1, "round__info-amount"],
              [
                "src",
                "assets/images/rbc-white.png",
                "alt",
                "Confirmed RBC",
                1,
                "round__info-amount-icon",
              ],
              [3, "showLoader", "overlay"],
              [
                "tuiButton",
                "",
                "appearance",
                "primary",
                "type",
                "button",
                "size",
                "m",
                "tuiHintAppearance",
                "onDark",
                1,
                "round__button",
                3,
                "disabled",
                "tuiHint",
                "click",
              ],
              [1, "round"],
              [1, "round__footer", 3, "ngClass"],
              [1, "round__date"],
              [4, "ngIf"],
            ],
            template: function (o, C) {
              1 & o &&
                (t.DNE(0, j, 5, 6, "ng-container", 0),
                t.DNE(1, J, 2, 2, "ng-template", null, 1, t.C5r)),
                2 & o && t.Y8G("ngLet", "active" !== C.round.status);
            },
            dependencies: [
              x.YU,
              x.bT,
              P.XZ,
              P.ZF,
              P.JL,
              P.AZ,
              T.SM,
              V.jT,
              D.N,
              x.Jj,
              H.D9,
              h.p,
              X.W,
            ],
            styles: [
              '[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.round__container[_ngcontent-%COMP%]{margin-right:var(--tui-padding-m);padding:var(--tui-padding-xs);background:var(--primary-background);border-radius:var(--tui-radius-m)}.round__container_disabled[_ngcontent-%COMP%]{color:var(--tui-text-03)}.round__container_disabled[_ngcontent-%COMP%]   .round__info-amount-icon[_ngcontent-%COMP%]{filter:grayscale(1)}.round__header[_ngcontent-%COMP%]{padding:0 0 5px var(--tui-padding-l);font-size:15px}.round__number[_ngcontent-%COMP%]{font-size:15px}.round__footer[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-xs);align-items:center;justify-content:space-between}.round__footer[_ngcontent-%COMP%]   tui-loader[_ngcontent-%COMP%]{overflow:inherit}.round__info[_ngcontent-%COMP%]{display:flex;gap:32px;align-items:center;width:100%;max-width:388px;height:50px;padding:var(--tui-padding-s) var(--tui-padding-l);font-size:15px;background:var(--secondary-background);border-radius:var(--tui-radius-m)}.round__info-date[_ngcontent-%COMP%]{position:relative;width:100%;max-width:190px}.round__info-date[_ngcontent-%COMP%]:after{position:absolute;top:50%;right:-10px;width:2px;height:30px;background:var(--io-background);transform:translateY(-50%);content:""}.round__info-amount[_ngcontent-%COMP%]{display:flex;gap:var(--tui-padding-m);align-items:center}.round__info-amount-icon[_ngcontent-%COMP%]{width:25px}.round__button[_ngcontent-%COMP%]{z-index:0;display:flex;align-items:center;justify-content:center;width:100px;height:50px;line-height:1;text-align:center;background:var(--primary-color);border:1px solid var(--primary-color);border-radius:var(--tui-radius-m);cursor:pointer;transition:all .1s linear}.round__button[disabled][_ngcontent-%COMP%]{cursor:not-allowed}.round__button-icon[_ngcontent-%COMP%]{width:25px;margin-left:var(--tui-padding-xs)}@media (max-width: 651px){[_nghost-%COMP%]{width:100%}.round__container[_ngcontent-%COMP%]{margin-right:0;padding:0;overflow:hidden;background:var(--secondary-background)}.round__container_border[_ngcontent-%COMP%]{border:2px solid var(--app-background)}.round__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:var(--tui-padding-l)}.round__footer[_ngcontent-%COMP%]{padding:var(--tui-padding-m) var(--tui-padding-l);background:var(--io-background);border-top:3px solid var(--app-background)}.round__number[_ngcontent-%COMP%], .round__date[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:12px;line-height:16px;letter-spacing:.36px}.round__info-amount[_ngcontent-%COMP%]{color:var(--tui-text-01);font-weight:500;font-size:18px;line-height:25px;letter-spacing:.54px;gap:var(--tui-padding-s)}.round__button[_ngcontent-%COMP%]{width:100px;height:40px;line-height:13px}}',
            ],
            changeDetection: 0,
          }));
        }
        return r;
      })();
    },
    768247: (U, I, e) => {
      e.d(I, { i: () => a });
      var A = e(455748),
        v = e(776006),
        E = e(897119);
      const a = Object.fromEntries(
        Object.values(A.BLOCKCHAIN_NAME).map((M) => [
          M,
          { key: M, name: v.Z[M], img: E._[M] },
        ])
      );
    },
    644455: (U, I, e) => {
      e.d(I, { B: () => E });
      var A = e(617705),
        t = e(93359),
        v = e(593679);
      let E = (() => {
        class a {
          set decimals(n) {
            (this._decimals = n), setTimeout(() => this.onChange());
          }
          constructor(n) {
            (this.elementRef = n),
              (this.amountChange = new A.bkB()),
              (this.amountRegex = /^([0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)?$/),
              (this.prevValue = ""),
              (this.prevCaretPosition = 0),
              (this.isFocused = !1);
          }
          onChange() {
            const n = this.elementRef.nativeElement.value || "";
            let s = n.replaceAll(",", ""),
              l = this.elementRef.nativeElement.selectionStart;
            n && "," === n[n.length - 1] && (s += "."),
              "." === s &&
                ("" === this.prevValue
                  ? ((s = "0."), (l = 2))
                  : ((s = ""), (l = 0))),
              this.amountRegex.test(s)
                ? ((s = a.transformValue(s, this._decimals)),
                  (l =
                    s === this.prevValue
                      ? this.prevCaretPosition
                      : this.getNewCaretPosition(s, l)))
                : ((s = this.prevValue), (l = this.prevCaretPosition)),
              (this.elementRef.nativeElement.value = s),
              this.isFocused &&
                this.elementRef.nativeElement.setSelectionRange(l, l),
              this.amountChange.emit(s),
              (this.prevValue = s),
              (this.prevCaretPosition = l);
          }
          static transformValue(n, s) {
            if (n.includes(".")) {
              const S = n.indexOf(".") + 1;
              n = n.slice(0, S + s);
            }
            const [l, O] = n.split(".");
            return (
              l.length &&
                (n =
                  new t.A(l).toFormat(v.Z) +
                  (n.includes(".") ? "." : "") +
                  (O || "")),
              n
            );
          }
          getNewCaretPosition(n, s) {
            const O =
              this.prevValue
                .substring(0, s - (this.prevValue.length < n.length ? 1 : 0))
                .split(",").length - 1;
            let x = s + (n.substring(0, s).split(",").length - 1 - O);
            return x && n.length && "," === n[x - 1] && x--, x;
          }
          onCaretPositionChange() {
            this.prevCaretPosition =
              this.elementRef.nativeElement.selectionStart;
          }
          onFocus() {
            this.isFocused = !0;
          }
          onFocusOut() {
            this.isFocused = !1;
          }
          static #t = (this.ɵfac = function (s) {
            return new (s || a)(A.rXU(A.aKT));
          });
          static #e = (this.ɵdir = A.FsC({
            type: a,
            selectors: [["", "appTokenAmount", ""]],
            hostBindings: function (s, l) {
              1 & s &&
                A.bIt("ngModelChange", function () {
                  return l.onChange();
                })("keyup", function () {
                  return l.onCaretPositionChange();
                })("click", function () {
                  return l.onCaretPositionChange();
                })("focus", function () {
                  return l.onFocus();
                })("focusout", function () {
                  return l.onFocusOut();
                });
            },
            inputs: { decimals: "decimals" },
            outputs: { amountChange: "amountChange" },
          }));
        }
        return a;
      })();
    },
    440204: (U, I, e) => {
      e.d(I, { g: () => H });
      var A = e(474523),
        t = e(84412),
        v = e(525558),
        E = e(607673),
        a = e(788141),
        M = e(240800),
        n = e(617705),
        s = e(513711),
        l = e(873955);
      let O = (() => {
        class h {
          constructor(d) {
            (this.context = d), (this.points = d.data.points);
          }
          ngAfterViewInit() {
            h.toggleConfettiBackground("show");
          }
          ngOnDestroy() {
            h.toggleConfettiBackground("remove");
          }
          static toggleConfettiBackground(d) {
            const g = document.querySelector(".t-overlay");
            "show" === d && g.classList.add("t-overlay-it-confetti"),
              "remove" === d && g.classList.remove("t-overlay-it-confetti");
          }
          onConfirm() {
            this.context.completeWith(null);
          }
          static #t = (this.ɵfac = function (g) {
            return new (g || h)(n.rXU(M.su));
          });
          static #e = (this.ɵcmp = n.VBU({
            type: h,
            selectors: [["polymorpheus-success-withdraw-modal"]],
            decls: 20,
            vars: 5,
            consts: [
              [1, "modal", 3, "id"],
              [1, "modal__content"],
              [1, "modal__body"],
              [
                "src",
                "assets/images/swap-and-earn/it-mouse.svg",
                "alt",
                "Mouse",
                1,
                "modal__success-image",
              ],
              [1, "modal__point-subtitle"],
              [1, "modal__point-subtitle_green"],
              [1, "modal__footer"],
              ["fullWidth", "", "appearance", "primary", 3, "click"],
            ],
            template: function (g, k) {
              1 & g &&
                (n.j41(0, "div", 0)(1, "div", 1)(2, "main", 2),
                n.nrm(3, "img", 3),
                n.j41(4, "span", 4)(5, "span", 5),
                n.EFF(6),
                n.k0s(),
                n.EFF(7, " are requested to withdraw."),
                n.nrm(8, "br")(9, "br"),
                n.j41(10, "span"),
                n.EFF(
                  11,
                  "You can get your RBC through the Airdrop Claim twice a week. We\u2019ll share the Claim Link soon."
                ),
                n.k0s(),
                n.nrm(12, "br")(13, "br"),
                n.j41(14, "span"),
                n.EFF(15, "Follow our socials to not miss out!"),
                n.k0s()()(),
                n.j41(16, "footer", 6)(17, "app-rubic-button", 7),
                n.bIt("click", function () {
                  return k.onConfirm();
                }),
                n.EFF(18),
                n.nI1(19, "translate"),
                n.k0s()()()()),
                2 & g &&
                  (n.Y8G("id", "gtm-transaction-modal"),
                  n.R7$(6),
                  n.SpI("", k.points, " RBC"),
                  n.R7$(12),
                  n.SpI(" ", n.bMT(19, 3, "common.OK"), " "));
            },
            dependencies: [s.l, l.D9],
            styles: [
              "[_ngcontent-%COMP%]:root{--app-background: #282935;--primary-background: var(--tui-base-01);--secondary-background: var(--tui-secondary);--dropdpwn-background: rgba(60, 61, 68, .85);--io-background: #222331;--tui-primary: #00e28d;--tui-primary-hover: #02b774;--tui-primary-active: #02b774;--tui-primary-text: #14141d;--tui-secondary: #3b3d4f;--tui-secondary-hover: #4c4e67;--tui-secondary-active: #4c4e67;--tui-elevation-01: var(--tui-secondary);--tui-elevation-02: var(--tui-secondary);--tui-clear: var(--primary-background);--tui-link: white;--tui-link-hover: white;--tui-base-01: #2c2d3e;--tui-base-02: #2c2d3e;--tui-base-03: #2c2d3e;--tui-base-04: #4d4d59;--tui-text-01: white;--tui-text-02: #9a9ab0;--tui-text-03: #9a9ab0;--tui-padding-xs: .25rem;--tui-padding-s: .5rem;--tui-padding-xl: 1.25rem;--tui-padding-4xl: 2rem;--tui-disabled-opacity: .5;--tui-radius-l: 17px;--tui-radius-m: 17px;--tui-radius-s: 12px}.highlight_green[_ngcontent-%COMP%]{color:var(--primary-color);cursor:pointer}.modal__content[_ngcontent-%COMP%]{padding:44px 20px;text-align:center}.modal__title[_ngcontent-%COMP%]{margin:30px auto 40px;font-size:25px;line-height:30px}.modal__title-points[_ngcontent-%COMP%]{margin:30px auto 19px;color:var(--primary-color)}.modal__point-subtitle[_ngcontent-%COMP%]{display:block;max-width:262px;margin:0 auto 17px;font-size:16px;line-height:120%;letter-spacing:.03em}.modal__footer-text[_ngcontent-%COMP%]{line-height:1.3}.modal__footer-text_warning[_ngcontent-%COMP%]{color:#d6bd27}.modal__footer-link[_ngcontent-%COMP%]{display:inline-block;font-size:17px;line-height:1.3;cursor:pointer}.modal[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]{display:block;margin-top:25px}  .modal__content{padding:20px!important}.modal__point-subtitle[_ngcontent-%COMP%]{max-width:91%;line-height:160%}.modal__point-subtitle_green[_ngcontent-%COMP%]{color:#00e28e}.modal__footer[_ngcontent-%COMP%]{margin-bottom:25px}",
            ],
            changeDetection: 0,
          }));
        }
        return h;
      })();
      var S = e(935763),
        x = e(667337),
        P = e(802248),
        T = e(181170);
      let V = (() => {
        class h {
          constructor(d) {
            this.httpService = d;
          }
          fetchAirdropUserPointsInfo(d) {
            return d
              ? this.httpService.get(`rewards/?address=${d}`)
              : (0, E.of)({ confirmed: 0, pending: 0 });
          }
          static #t = (this.ɵfac = function (g) {
            return new (g || h)(n.KVO(x.k));
          });
          static #e = (this.ɵprov = n.jDH({
            token: h,
            factory: h.ɵfac,
            providedIn: "root",
          }));
        }
        return h;
      })();
      var D = e(305206);
      let H = (() => {
        class h {
          constructor(d, g, k, $, K) {
            (this.httpService = d),
              (this.dialogService = g),
              (this.walletConnectorService = k),
              (this.apiService = $),
              (this.authService = K),
              (this.defaultPoints = { confirmed: 0, pending: 0 }),
              (this._fetchUserPointsInfoLoading$ = new t.t(!1)),
              (this.fetchUserPointsInfoLoading$ =
                this._fetchUserPointsInfoLoading$.asObservable()),
              (this._points$ = new t.t(this.defaultPoints)),
              (this.points$ = this._points$.asObservable()),
              (this._pointsAmount$ = new t.t(0)),
              (this.pointsAmount$ = this._pointsAmount$.asObservable()),
              this.handleAddressChange();
          }
          updateSwapToEarnUserPointsInfo() {
            this._fetchUserPointsInfoLoading$.next(!0),
              this.authService.currentUser$
                .pipe(
                  (0, v.n)((d) =>
                    this.apiService.fetchAirdropUserPointsInfo(d?.address)
                  ),
                  (0, a.M)((d) => {
                    this._points$.next(d),
                      this._fetchUserPointsInfoLoading$.next(!1);
                  })
                )
                .subscribe();
          }
          claimPoints(d, g) {
            var k = this;
            return (0, A.A)(function* () {
              g &&
                (k.httpService
                  .post(`rewards/withdraw/?address=${g}`)
                  .subscribe(() => k.updateSwapToEarnUserPointsInfo()),
                k.dialogService
                  .showDialog(O, { data: { points: d } })
                  .subscribe());
            })();
          }
          handleAddressChange() {
            this.walletConnectorService.addressChange$
              .pipe(
                (0, S.n)(
                  Boolean,
                  (d) => this.apiService.fetchAirdropUserPointsInfo(d),
                  () => (0, E.of)(this.defaultPoints)
                )
              )
              .subscribe((d) => {
                this._points$.next(d);
              });
          }
          static #t = (this.ɵfac = function (g) {
            return new (g || h)(
              n.KVO(x.k),
              n.KVO(P.B),
              n.KVO(T.c),
              n.KVO(V),
              n.KVO(D.u)
            );
          });
          static #e = (this.ɵprov = n.jDH({
            token: h,
            factory: h.ɵfac,
            providedIn: "root",
          }));
        }
        return h;
      })();
    },
  },
]);
