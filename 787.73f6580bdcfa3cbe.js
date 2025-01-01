"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [787],
  {
    562287: (ct, L, s) => {
      s.d(L, { Is: () => tt, BX: () => et });
      var t = s(617705),
        f = s(259925),
        C = s(274585);
      (0, f.ET)((0, C.Y)("showHideText"));
      const k = (0, f.ET)((0, C.Y)("paginationTexts"));
      var v = s(649169),
        g = s(229835),
        N = s(834668),
        b = s(588529),
        T = s(805116),
        G = s(691410),
        U = s(7291),
        y = s(158502),
        m = s(857786),
        B = s(96354),
        M = s(594350),
        h = s(360177);
      const F = ["tuiLink", ""];
      function S(o, u) {
        if ((1 & o && t.nrm(0, "tui-svg", 3), 2 & o)) {
          const r = t.XpG();
          t.Y8G("src", r.icon || "");
        }
      }
      function H(o, u) {
        if ((1 & o && t.nrm(0, "tui-svg", 4), 2 & o)) {
          const r = t.XpG();
          t.Y8G("src", r.icon || "");
        }
      }
      const E = ["*"];
      let w = (() => {
          class o {
            constructor(r, c, d) {
              (this.el = r),
                (this.mode$ = c),
                (this.pseudo = !1),
                (this.icon = ""),
                (this.iconAlign = "right"),
                (this.iconRotated = !1),
                (this.mode = null),
                (this.focusVisible = !1),
                (this.focusedChange = (0, m.h)(
                  (0, g.xM)(this.el.nativeElement, "focusin").pipe(
                    (0, B.T)(N.Uq)
                  ),
                  (0, g.xM)(this.el.nativeElement, "focusout").pipe(
                    (0, B.T)(N.Fr)
                  )
                )),
                d.subscribe((_) => {
                  this.focusVisible = _;
                });
            }
            get nativeFocusableElement() {
              return this.el.nativeElement;
            }
            get focused() {
              return (0, b.X)(this.nativeFocusableElement);
            }
            get hasIcon() {
              return !!this.icon;
            }
            get iconAlignLeft() {
              return this.hasIcon && "left" === this.iconAlign;
            }
            get iconAlignRight() {
              return this.hasIcon && "right" === this.iconAlign;
            }
          }
          return (
            (o.ɵfac = function (r) {
              return new (r || o)(t.rXU(t.aKT), t.rXU(y.fL), t.rXU(T.iF));
            }),
            (o.ɵcmp = t.VBU({
              type: o,
              selectors: [
                ["a", "tuiLink", ""],
                ["button", "tuiLink", ""],
              ],
              hostVars: 7,
              hostBindings: function (r, c) {
                1 & r &&
                  t.bIt("$.data-mode.attr", function () {
                    return c.mode$;
                  }),
                  2 & r &&
                    (t.BMQ("data-host-mode", c.mode),
                    t.AVh("_pseudo", c.pseudo)("_icon-rotated", c.iconRotated)(
                      "_focus-visible",
                      c.focusVisible
                    ));
              },
              inputs: {
                pseudo: "pseudo",
                icon: "icon",
                iconAlign: "iconAlign",
                iconRotated: "iconRotated",
                mode: "mode",
              },
              exportAs: ["tuiLink"],
              features: [t.Jv_([(0, G.Jr)(o), T.iF, T.ew, U.si])],
              attrs: F,
              ngContentSelectors: E,
              decls: 4,
              vars: 2,
              consts: [
                ["class", "t-icon t-icon_left", 3, "src", 4, "ngIf"],
                [1, "t-content"],
                ["class", "t-icon t-icon_right", 3, "src", 4, "ngIf"],
                [1, "t-icon", "t-icon_left", 3, "src"],
                [1, "t-icon", "t-icon_right", 3, "src"],
              ],
              template: function (r, c) {
                1 & r &&
                  (t.NAR(),
                  t.DNE(0, S, 1, 1, "tui-svg", 0),
                  t.j41(1, "span", 1),
                  t.SdG(2),
                  t.k0s(),
                  t.DNE(3, H, 1, 1, "tui-svg", 2)),
                  2 & r &&
                    (t.Y8G("ngIf", c.iconAlignLeft),
                    t.R7$(3),
                    t.Y8G("ngIf", c.iconAlignRight));
              },
              dependencies: [M._Y, h.bT],
              styles: [
                "[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}",
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        j = (() => {
          class o {}
          return (
            (o.ɵfac = function (r) {
              return new (r || o)();
            }),
            (o.ɵmod = t.$C({ type: o })),
            (o.ɵinj = t.G2t({ imports: [[h.MD, M.vl]] })),
            o
          );
        })();
      var I = s(801203),
        D = s(272782),
        $ = s(240800);
      function R(o, u) {
        if (
          (1 & o &&
            (t.qex(0),
            t.EFF(1),
            t.j41(2, "strong", 6),
            t.EFF(3),
            t.k0s(),
            t.bVm()),
          2 & o)
        ) {
          const r = t.XpG().ngIf,
            c = t.XpG();
          t.R7$(1), t.SpI(" ", r.pages, " "), t.R7$(2), t.JRh(c.pages);
        }
      }
      function z(o, u) {
        if ((1 & o && (t.qex(0), t.EFF(1), t.bVm()), 2 & o)) {
          const r = u.polymorpheusOutlet;
          t.R7$(1), t.SpI(" ", r, " ");
        }
      }
      function Y(o, u) {
        if ((1 & o && t.nrm(0, "tui-svg", 13), 2 & o)) {
          const r = t.XpG(4);
          t.Y8G("src", r.commonIcons.check);
        }
      }
      function J(o, u) {
        1 & o && t.nrm(0, "span", 14);
      }
      const O = function (o, u) {
        return { $implicit: o, total: u };
      };
      function Q(o, u) {
        if (1 & o) {
          const r = t.RV6();
          t.qex(0),
            t.j41(1, "button", 9),
            t.bIt("click", function () {
              const _ = t.eBV(r).$implicit,
                V = t.XpG(3);
              return t.Njj(V.onItem(_));
            }),
            t.DNE(2, z, 2, 1, "ng-container", 10),
            t.DNE(3, Y, 1, 1, "tui-svg", 11),
            t.DNE(4, J, 1, 0, "ng-template", null, 12, t.C5r),
            t.k0s(),
            t.bVm();
        }
        if (2 & o) {
          const r = u.$implicit,
            c = t.sdS(5),
            d = t.XpG(3);
          t.R7$(2),
            t.Y8G("polymorpheusOutlet", d.options.sizeOptionContent)(
              "polymorpheusOutletContext",
              t.l_i(4, O, r, d.total)
            ),
            t.R7$(1),
            t.Y8G("ngIf", r === d.size)("ngIfElse", c);
        }
      }
      function K(o, u) {
        if (
          (1 & o &&
            (t.j41(0, "tui-data-list", 7),
            t.DNE(1, Q, 6, 7, "ng-container", 8),
            t.k0s()),
          2 & o)
        ) {
          const r = t.XpG(2);
          t.R7$(1), t.Y8G("ngForOf", r.items);
        }
      }
      function W(o, u) {
        if (1 & o) {
          const r = t.RV6();
          t.qex(0),
            t.j41(1, "button", 15),
            t.bIt("click", function () {
              t.eBV(r);
              const d = t.XpG(2);
              return t.Njj(d.back());
            }),
            t.k0s(),
            t.j41(2, "button", 16),
            t.bIt("click", function () {
              t.eBV(r);
              const d = t.XpG(2);
              return t.Njj(d.forth());
            }),
            t.k0s(),
            t.bVm();
        }
        if (2 & o) {
          const r = u.ngIf,
            c = t.XpG(2);
          t.R7$(1),
            t.Y8G("disabled", c.leftDisabled)("icon", c.icons.decrement)(
              "title",
              r[0]
            ),
            t.R7$(1),
            t.Y8G("disabled", c.rightDisabled)("icon", c.icons.increment)(
              "title",
              r[1]
            );
        }
      }
      function Z(o, u) {
        if (1 & o) {
          const r = t.RV6();
          t.qex(0),
            t.j41(1, "span", 1),
            t.DNE(2, R, 4, 2, "ng-container", 0),
            t.k0s(),
            t.j41(3, "span", 2),
            t.EFF(4),
            t.j41(5, "tui-hosted-dropdown", 3),
            t.bIt("openChange", function (d) {
              t.eBV(r);
              const _ = t.XpG();
              return t.Njj((_.open = d));
            }),
            t.j41(6, "button", 4)(7, "strong"),
            t.EFF(8),
            t.k0s()(),
            t.DNE(9, K, 2, 1, "ng-template", null, 5, t.C5r),
            t.k0s(),
            t.EFF(11),
            t.j41(12, "strong", 6),
            t.EFF(13),
            t.k0s()(),
            t.DNE(14, W, 3, 6, "ng-container", 0),
            t.nI1(15, "async"),
            t.bVm();
        }
        if (2 & o) {
          const r = u.ngIf,
            c = t.sdS(10),
            d = t.XpG();
          t.R7$(2),
            t.Y8G("ngIf", d.options.showPages),
            t.R7$(2),
            t.SpI(" ", r.linesPerPage, " "),
            t.R7$(1),
            t.Y8G("content", c)("open", d.open),
            t.R7$(3),
            t.Lme("", d.start + 1, "\u2013", d.end, ""),
            t.R7$(3),
            t.SpI(" ", r.of, " "),
            t.R7$(2),
            t.JRh(d.total),
            t.R7$(1),
            t.Y8G("ngIf", t.bMT(15, 9, d.spinTexts$));
        }
      }
      const X = (0, f.gc)({
        sizeOptionContent: function q({ $implicit: o }) {
          return `${o}`;
        },
        showPages: !0,
        items: [10, 20, 50, 100],
        size: 10,
      });
      let tt = (() => {
          class o {
            constructor(r, c, d, _, V) {
              (this.icons = r),
                (this.spinTexts$ = c),
                (this.texts$ = d),
                (this.options = _),
                (this.commonIcons = V),
                (this.items = this.options.items),
                (this.total = 0),
                (this.page = 0),
                (this.size = this.options.size),
                (this.pageChange = new t.bkB()),
                (this.sizeChange = new t.bkB()),
                (this.paginationChange = new t.bkB()),
                (this.open = !1);
            }
            get pages() {
              return Math.ceil(this.total / this.size);
            }
            get start() {
              return this.page * this.size;
            }
            get end() {
              return Math.min(this.start + this.size, this.total);
            }
            get leftDisabled() {
              return !this.start;
            }
            get rightDisabled() {
              return this.end === this.total;
            }
            get pagination() {
              return { page: this.page, size: this.size };
            }
            onItem(r) {
              const { start: c } = this;
              (this.size = r),
                this.sizeChange.emit(r),
                (this.open = !1),
                (this.page = Math.floor(c / this.size)),
                this.pageChange.emit(this.page),
                this.paginationChange.emit(this.pagination);
            }
            back() {
              this.page--,
                this.pageChange.emit(this.page),
                this.paginationChange.emit(this.pagination);
            }
            forth() {
              this.page++,
                this.pageChange.emit(this.page),
                this.paginationChange.emit(this.pagination);
            }
          }
          return (
            (o.ɵfac = function (r) {
              return new (r || o)(
                t.rXU(y.dx),
                t.rXU(y.Pt),
                t.rXU(k),
                t.rXU(X),
                t.rXU(y._Z)
              );
            }),
            (o.ɵcmp = t.VBU({
              type: o,
              selectors: [["tui-table-pagination"]],
              inputs: {
                items: "items",
                total: "total",
                page: "page",
                size: "size",
              },
              outputs: {
                pageChange: "pageChange",
                sizeChange: "sizeChange",
                paginationChange: "paginationChange",
              },
              decls: 2,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [1, "t-pages"],
                [
                  "automation-id",
                  "tui-table-pagination__lines-per-page-wrapper",
                ],
                [3, "content", "open", "openChange"],
                ["tuiLink", "", "type", "button"],
                ["content", ""],
                [1, "t-strong"],
                ["size", "s"],
                [4, "ngFor", "ngForOf"],
                ["tuiOption", "", 1, "t-item", 3, "click"],
                [4, "polymorpheusOutlet", "polymorpheusOutletContext"],
                ["class", "t-checkmark", 3, "src", 4, "ngIf", "ngIfElse"],
                ["fakeIcon", ""],
                [1, "t-checkmark", 3, "src"],
                [1, "t-checkmark"],
                [
                  "appearance",
                  "icon",
                  "size",
                  "xs",
                  "tuiIconButton",
                  "",
                  "type",
                  "button",
                  1,
                  "t-back",
                  3,
                  "disabled",
                  "icon",
                  "title",
                  "click",
                ],
                [
                  "appearance",
                  "icon",
                  "size",
                  "xs",
                  "tuiIconButton",
                  "",
                  "type",
                  "button",
                  3,
                  "disabled",
                  "icon",
                  "title",
                  "click",
                ],
              ],
              template: function (r, c) {
                1 & r &&
                  (t.DNE(0, Z, 16, 11, "ng-container", 0), t.nI1(1, "async")),
                  2 & r && t.Y8G("ngIf", t.bMT(1, 1, c.texts$));
              },
              dependencies: [
                v.o2,
                w,
                I.uE,
                I.bc,
                M._Y,
                D.SM,
                h.bT,
                h.Sq,
                $.OA,
                h.Jj,
              ],
              styles: [
                "[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}",
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        et = (() => {
          class o {}
          return (
            (o.ɵfac = function (r) {
              return new (r || o)();
            }),
            (o.ɵmod = t.$C({ type: o })),
            (o.ɵinj = t.G2t({
              imports: [[h.MD, D.Pv, j, v.NT, I.Jk, M.vl, $.yJ]],
            })),
            o
          );
        })();
    },
    750573: (ct, L, s) => {
      s.d(L, { ET: () => Tt, ww: () => bt, pg: () => yt });
      var t = s(617705),
        f = s(649169),
        C = s(242630),
        P = s(45387),
        k = s(252061),
        v = s(801203),
        g = s(158502),
        N = s(407359),
        b = s(840683),
        T = s(805116),
        G = s(332230);
      let U = (() => {
        class n {
          constructor(e, i, l, p, x) {
            (this.host = e),
              (this.control = i),
              (this.el = l),
              (this.idService = p),
              (this.itemsHandlers = x),
              (this.disabledItemHandler = null),
              (this.datalist = null);
          }
          get id() {
            return this.el.nativeElement.id || this.idService.generate();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.rXU(g.w2),
              t.rXU(b.Er),
              t.rXU(t.aKT),
              t.rXU(T.BF),
              t.rXU(G.E4)
            );
          }),
          (n.ɵdir = t.FsC({
            type: n,
            viewQuery: function (e, i) {
              if ((1 & e && t.GBs(v.WX, 7, t.C4Q), 2 & e)) {
                let l;
                t.mGM((l = t.lsd())) && (i.datalist = l.first);
              }
            },
            hostVars: 1,
            hostBindings: function (e, i) {
              2 & e && t.Mr5("id", i.id);
            },
            inputs: { disabledItemHandler: "disabledItemHandler" },
          })),
          n
        );
      })();
      var y = s(230620),
        m = s(360177);
      let M = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.$C({ type: n })),
          (n.ɵinj = t.G2t({})),
          n
        );
      })();
      var h = s(489417),
        F = s(491813),
        S = s(259925),
        H = s(588529),
        E = s(691410),
        w = s(322373),
        j = s(229835),
        I = s(834668),
        D = s(594350),
        $ = s(848048),
        R = s(301807),
        z = s(956977);
      let Y = (() => {
          class n {
            constructor(e, i) {
              (this.el = e), (this.destroy$ = i);
            }
            set tuiScrollIntoView(e) {
              e &&
                (0, R.O)(0)
                  .pipe((0, z.Q)(this.destroy$))
                  .subscribe(() => {
                    this.el.nativeElement.dispatchEvent(
                      new CustomEvent($.Uk, {
                        bubbles: !0,
                        detail: this.el.nativeElement,
                      })
                    );
                  });
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.rXU(t.aKT), t.rXU(T.ew, 2));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["", "tuiScrollIntoView", ""]],
              inputs: { tuiScrollIntoView: "tuiScrollIntoView" },
              features: [t.Jv_([T.ew])],
            })),
            n
          );
        })(),
        J = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.$C({ type: n })),
            (n.ɵinj = t.G2t({})),
            n
          );
        })();
      var O = s(240800),
        Q = s(421413),
        K = s(857786),
        W = s(300983),
        Z = s(399172),
        q = s(96354),
        A = s(323294);
      function X(n, a) {
        if ((1 & n && t.nrm(0, "tui-svg", 3), 2 & n)) {
          const e = t.XpG();
          t.Y8G("src", e.icons.check)("tuiScrollIntoView", !0);
        }
      }
      function at(n, a) {
        1 & n && t.nrm(0, "span", 4);
      }
      const et = new O.lS(
        (() => {
          class n {
            constructor(e, i, l, p, x, nt, it, ot) {
              (this.icons = e),
                (this.context = i),
                (this.host = l),
                (this.el = p),
                (this.option = x),
                (this.dataList = nt),
                (this.control = it),
                (this.abstractControl = ot),
                (this.changeDetection$ = new Q.B()),
                (this.selected$ = (0, K.h)(
                  this.changeDetection$,
                  this.control.valueChanges || W.w,
                  (0, j.xM)(this.el.nativeElement, "animationstart")
                ).pipe(
                  (0, Z.Z)(null),
                  (0, q.T)(() => this.selected),
                  (0, A.F)()
                ));
            }
            get matcher() {
              return this.host.identityMatcher || I.BJ;
            }
            ngDoCheck() {
              this.changeDetection$.next();
            }
            ngOnInit() {
              Promise.resolve().then(() => {
                (0, S.Aj)(this.option.value) &&
                  this.host.checkOption &&
                  this.host.checkOption(this.option.value);
              });
            }
            get value() {
              var e, i;
              return null !==
                (i =
                  null === (e = this.abstractControl) || void 0 === e
                    ? void 0
                    : e.value) && void 0 !== i
                ? i
                : this.control.value;
            }
            get selected() {
              return (
                (0, S.Aj)(this.option.value) &&
                (0, S.Aj)(this.value) &&
                this.matcher(this.value, this.option.value)
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU(g._Z),
                t.rXU(O.su),
                t.rXU(g.KN),
                t.rXU(t.aKT),
                t.rXU(v.bc),
                t.rXU(v.uE, 8),
                t.rXU(h.vO),
                t.rXU(b.Er, 8)
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["tui-select-option"]],
              decls: 5,
              vars: 5,
              consts: [
                [3, "ngTemplateOutlet"],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  "class",
                  "t-checkmark",
                  3,
                  "src",
                  "tuiScrollIntoView",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["dummy", ""],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  1,
                  "t-checkmark",
                  3,
                  "src",
                  "tuiScrollIntoView",
                ],
                [1, "t-dummy"],
              ],
              template: function (e, i) {
                if (
                  (1 & e &&
                    (t.eu8(0, 0),
                    t.DNE(1, X, 1, 2, "tui-svg", 1),
                    t.nI1(2, "async"),
                    t.DNE(3, at, 1, 0, "ng-template", null, 2, t.C5r)),
                  2 & e)
                ) {
                  const l = t.sdS(4);
                  t.Y8G("ngTemplateOutlet", i.context.$implicit),
                    t.R7$(1),
                    t.Y8G("ngIf", t.bMT(2, 3, i.selected$))("ngIfElse", l);
                }
              },
              dependencies: [D._Y, m.T3, m.bT, Y, m.Jj],
              styles: [
                '@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-border-start:.25rem solid transparent;border-inline-start:.25rem solid transparent}tui-data-list[data-list-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}tui-data-list[data-list-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{width:1.75rem}',
              ],
              changeDetection: 0,
            })),
            n
          );
        })()
      );
      let o = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.$C({ type: n })),
          (n.ɵinj = t.G2t({ imports: [[m.MD, D.vl, J]] })),
          n
        );
      })();
      var u = s(796693);
      function ut(n, a) {
        1 & n && t.SdG(0, 2, ["*ngIf", "isMobile"]);
      }
      function dt(n, a) {
        if ((1 & n && t.DNE(0, ut, 1, 0, "ng-content", 6), 2 & n)) {
          const e = t.XpG();
          t.Y8G("ngIf", e.isMobile);
        }
      }
      function pt(n, a) {
        1 & n && t.eu8(0, 7);
      }
      function gt(n, a) {
        1 & n && t.nrm(0, "div", 10),
          2 & n && t.Y8G("textContent", a.polymorpheusOutlet);
      }
      const mt = function (n, a) {
        return { $implicit: n, active: a };
      };
      function ht(n, a) {
        if (
          (1 & n && (t.j41(0, "div", 8), t.DNE(1, gt, 1, 1, "div", 9), t.k0s()),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(1),
            t.Y8G("polymorpheusOutlet", e.computedContent)(
              "polymorpheusOutletContext",
              t.l_i(2, mt, e.value, e.computedFocused)
            );
        }
      }
      function vt(n, a) {
        1 & n && t.eu8(0);
      }
      function _t(n, a) {
        if (
          (1 & n &&
            (t.j41(0, "div", 11),
            t.DNE(1, vt, 1, 0, "ng-container", 12),
            t.k0s()),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(1), t.Y8G("polymorpheusOutlet", e.arrow);
        }
      }
      const ft = ["*", [["input"]], [["select"]]],
        Ct = ["*", "input", "select"],
        rt = (0, S.gc)({ valueContent: "" });
      let Tt = (() => {
          class n extends b.jc {
            constructor(e, i, l, p, x, nt, it, ot) {
              super(e, i),
                (this.textfieldCleaner = l),
                (this.textfieldSize = p),
                (this.arrowMode = x),
                (this.itemsHandlers = nt),
                (this.options = it),
                (this.isMobile = ot),
                (this.stringify = this.itemsHandlers.stringify),
                (this.identityMatcher = this.itemsHandlers.identityMatcher),
                (this.valueContent = this.options.valueContent);
            }
            get size() {
              return this.textfieldSize.size;
            }
            get arrow() {
              return this.interactive
                ? this.arrowMode.interactive
                : this.arrowMode.disabled;
            }
            get nativeFocusableElement() {
              return this.textfield
                ? this.textfield.nativeFocusableElement
                : null;
            }
            get focused() {
              return (
                (0, H.X)(this.nativeFocusableElement) ||
                (!!this.hostedDropdown && this.hostedDropdown.focused)
              );
            }
            get nativeDropdownMode() {
              return !!this.nativeSelect && this.isMobile;
            }
            get computedValue() {
              return null === this.value
                ? ""
                : this.stringify(this.value) || " ";
            }
            get computedContent() {
              return this.valueContent || this.computedValue;
            }
            onValueChange(e) {
              this.value = e || null;
            }
            onActiveZone(e) {
              this.updateFocused(e);
            }
            onKeyDownDelete() {
              this.textfieldCleaner.cleaner && (this.value = null);
            }
            handleOption(e) {
              var i;
              this.focusInput(),
                (this.value = e),
                null === (i = this.hostedDropdown) ||
                  void 0 === i ||
                  i.updateOpen(!1);
            }
            focusInput(e = !1) {
              this.nativeFocusableElement &&
                this.nativeFocusableElement.focus({ preventScroll: e });
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.rXU(h.vO, 10),
                t.rXU(t.gRc),
                t.rXU(P.u1),
                t.rXU(P.tI),
                t.rXU(w.lH),
                t.rXU(G.E4),
                t.rXU(rt),
                t.rXU(E.Td)
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [["tui-select"]],
              contentQueries: function (e, i, l) {
                if (
                  (1 & e && (t.wni(l, U, 7), t.wni(l, v.WX, 5, t.C4Q)), 2 & e)
                ) {
                  let p;
                  t.mGM((p = t.lsd())) && (i.nativeSelect = p.first),
                    t.mGM((p = t.lsd())) && (i.datalist = p.first);
                }
              },
              viewQuery: function (e, i) {
                if ((1 & e && (t.GBs(C.eD, 5), t.GBs(f.o2, 5)), 2 & e)) {
                  let l;
                  t.mGM((l = t.lsd())) && (i.textfield = l.first),
                    t.mGM((l = t.lsd())) && (i.hostedDropdown = l.first);
                }
              },
              hostVars: 1,
              hostBindings: function (e, i) {
                2 & e && t.BMQ("data-size", i.size);
              },
              inputs: {
                stringify: "stringify",
                identityMatcher: "identityMatcher",
                valueContent: "valueContent",
              },
              features: [
                t.Jv_(
                  [(0, E.Jr)(n), (0, b.SN)(n), (0, g.PU)(n), (0, g.NW)(et)],
                  [u.MJ]
                ),
                t.Vt3,
              ],
              ngContentSelectors: Ct,
              decls: 10,
              vars: 15,
              consts: [
                [1, "t-hosted", 3, "canOpen", "content", "tuiActiveZoneChange"],
                [
                  "automation-id",
                  "tui-select__textfield",
                  1,
                  "t-textfield",
                  3,
                  "disabled",
                  "editable",
                  "focusable",
                  "invalid",
                  "nativeId",
                  "pseudoActive",
                  "pseudoFocus",
                  "pseudoHover",
                  "readOnly",
                  "tuiTextfieldIcon",
                  "value",
                  "keydown.backspace.prevent",
                  "keydown.delete.prevent",
                  "valueChange",
                ],
                ["select", ""],
                ["ngProjectAs", "select", 5, ["select"], 4, "ngTemplateOutlet"],
                [
                  "automation-id",
                  "tui-select__value",
                  "ngProjectAs",
                  "tuiContent",
                  "class",
                  "t-value",
                  5,
                  ["tuiContent"],
                  4,
                  "ngIf",
                ],
                ["icon", ""],
                [4, "ngIf"],
                ["ngProjectAs", "select", 5, ["select"]],
                [
                  "automation-id",
                  "tui-select__value",
                  "ngProjectAs",
                  "tuiContent",
                  5,
                  ["tuiContent"],
                  1,
                  "t-value",
                ],
                [
                  "class",
                  "t-primitive-value",
                  3,
                  "textContent",
                  4,
                  "polymorpheusOutlet",
                  "polymorpheusOutletContext",
                ],
                [1, "t-primitive-value", 3, "textContent"],
                ["appearance", "icon", "tuiWrapper", "", 1, "t-icon"],
                [4, "polymorpheusOutlet"],
              ],
              template: function (e, i) {
                if (
                  (1 & e &&
                    (t.NAR(ft),
                    t.j41(0, "tui-hosted-dropdown", 0),
                    t.bIt("tuiActiveZoneChange", function (p) {
                      return i.onActiveZone(p);
                    }),
                    t.j41(1, "tui-primitive-textfield", 1),
                    t.bIt("keydown.backspace.prevent", function () {
                      return i.onKeyDownDelete();
                    })("keydown.delete.prevent", function () {
                      return i.onKeyDownDelete();
                    })("valueChange", function (p) {
                      return i.onValueChange(p);
                    }),
                    t.SdG(2),
                    t.SdG(3, 1, ["ngProjectAs", "input", 5, ["input"]]),
                    t.DNE(4, dt, 1, 1, "ng-template", null, 2, t.C5r),
                    t.DNE(6, pt, 1, 0, "ng-container", 3),
                    t.DNE(7, ht, 2, 5, "div", 4),
                    t.k0s(),
                    t.DNE(8, _t, 2, 1, "ng-template", null, 5, t.C5r),
                    t.k0s()),
                  2 & e)
                ) {
                  const l = t.sdS(5),
                    p = t.sdS(9);
                  t.Y8G("canOpen", i.interactive && !i.nativeDropdownMode)(
                    "content",
                    i.datalist || ""
                  ),
                    t.R7$(1),
                    t.Y8G("disabled", i.computedDisabled)("editable", !1)(
                      "focusable",
                      i.computedFocusable
                    )("invalid", i.computedInvalid)("nativeId", i.nativeId)(
                      "pseudoActive",
                      i.pseudoActive
                    )("pseudoFocus", i.computedFocused)(
                      "pseudoHover",
                      i.pseudoHover
                    )("readOnly", i.readOnly)(
                      "tuiTextfieldIcon",
                      i.arrow ? p : ""
                    )("value", i.computedValue),
                    t.R7$(5),
                    t.Y8G("ngTemplateOutlet", l),
                    t.R7$(1),
                    t.Y8G("ngIf", null !== i.value);
                }
              },
              dependencies: [
                f.o2,
                C.eD,
                F.Y,
                C.gt,
                P.OC,
                m.bT,
                m.T3,
                O.OA,
                k.l,
              ],
              styles: [
                "[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        bt = (() => {
          class n extends N.aX {
            get readOnly() {
              return !0;
            }
            get value() {
              return this.host.computedValue;
            }
            get stringify() {
              return this.host.stringify;
            }
            onValueChange(e) {
              this.host.onValueChange(e);
            }
          }
          return (
            (n.ɵfac = (function () {
              let a;
              return function (i) {
                return (a || (a = t.xGo(n)))(i || n);
              };
            })()),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [["tui-select"]],
              features: [t.Jv_([(0, g.Sc)(n)]), t.Vt3],
            })),
            n
          );
        })(),
        yt = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.$C({ type: n })),
            (n.ɵinj = t.G2t({
              imports: [
                [
                  m.MD,
                  O.yJ,
                  F.L,
                  C.Rp,
                  f.NT,
                  o,
                  w.mH,
                  k.E,
                  P.CN,
                  y.Km,
                  v.Jk,
                  M,
                ],
              ],
            })),
            n
          );
        })();
    },
  },
]);
