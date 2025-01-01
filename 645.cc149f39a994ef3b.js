"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [645],
  {
    147645: (K, T, c) => {
      c.d(T, { U: () => z, N: () => Y });
      var t = c(617705),
        d = c(491813),
        g = c(354732),
        m = c(134191),
        C = c(840683),
        I = c(834668),
        P = c(588529),
        p = c(324215),
        h = c(691410),
        f = c(272782),
        u = c(187919),
        y = c(278323),
        w = c(158502),
        E = c(332230),
        G = c(300983),
        L = c(96354),
        l = c(360177),
        v = c(240800);
      const D = ["element"];
      function R(i, s) {
        if ((1 & i && (t.qex(0), t.EFF(1), t.bVm()), 2 & i)) {
          const n = s.polymorpheusOutlet;
          t.R7$(1), t.SpI(" ", n, " ");
        }
      }
      const N = function (i) {
        return { $implicit: i };
      };
      function V(i, s) {
        if (1 & i) {
          const n = t.RV6();
          t.j41(0, "button", 9, 10),
            t.bIt("click", function () {
              t.eBV(n);
              const o = t.XpG().tuiLet,
                a = t.XpG(4);
              return t.Njj(a.onElementClick(o));
            })("keydown.arrowLeft.prevent", function () {
              t.eBV(n);
              const o = t.sdS(1),
                a = t.XpG(5);
              return t.Njj(a.onElementKeyDownArrowLeft(o));
            })("keydown.arrowRight.prevent", function () {
              t.eBV(n);
              const o = t.sdS(1),
                a = t.XpG(5);
              return t.Njj(a.onElementKeyDownArrowRight(o));
            }),
            t.DNE(2, R, 2, 1, "ng-container", 11),
            t.k0s();
        }
        if (2 & i) {
          const n = t.XpG().tuiLet,
            e = t.XpG(4);
          t.Y8G("appearance", e.getElementMode(n))("disabled", e.disabled)(
            "focusable",
            e.elementIsFocusable(n)
          )("size", e.buttonSize),
            t.R7$(2),
            t.Y8G("polymorpheusOutlet", e.content || n + 1)(
              "polymorpheusOutletContext",
              t.eq3(6, N, n)
            );
        }
      }
      function M(i, s) {
        if (
          (1 & i && (t.qex(0), t.DNE(1, V, 3, 8, "button", 8), t.bVm()), 2 & i)
        ) {
          const n = s.tuiLet;
          t.XpG(4);
          const e = t.sdS(5);
          t.R7$(1), t.Y8G("ngIf", null !== n)("ngIfElse", e);
        }
      }
      function S(i, s) {
        if (
          (1 & i && (t.qex(0), t.DNE(1, M, 2, 2, "ng-container", 7), t.bVm()),
          2 & i)
        ) {
          const n = s.$implicit,
            e = t.XpG(3);
          t.R7$(1), t.Y8G("tuiLet", e.getItemIndexByElementIndex(n));
        }
      }
      function j(i, s) {
        if (1 & i) {
          const n = t.RV6();
          t.qex(0),
            t.j41(1, "button", 5),
            t.bIt("click", function () {
              t.eBV(n);
              const o = t.XpG(2);
              return t.Njj(o.onArrowClick("left"));
            })("mousedown.silent.prevent", function () {
              return 0;
            }),
            t.k0s(),
            t.DNE(2, S, 2, 1, "ng-container", 6),
            t.j41(3, "button", 5),
            t.bIt("click", function () {
              t.eBV(n);
              const o = t.XpG(2);
              return t.Njj(o.onArrowClick("right"));
            })("mousedown.silent.prevent", function () {
              return 0;
            }),
            t.k0s(),
            t.bVm();
        }
        if (2 & i) {
          const n = s.ngIf,
            e = t.XpG(2);
          t.R7$(1),
            t.Y8G("disabled", e.arrowIsDisabledLeft)("focusable", !1)(
              "icon",
              e.icons.decrement
            )("size", e.buttonSize)("title", n[0]),
            t.R7$(1),
            t.Y8G("tuiRepeatTimesOf", e.elementsLength),
            t.R7$(1),
            t.Y8G("disabled", e.arrowIsDisabledRight)("focusable", !1)(
              "icon",
              e.icons.increment
            )("size", e.buttonSize)("title", n[1]);
        }
      }
      function X(i, s) {
        if (
          (1 & i &&
            (t.qex(0),
            t.DNE(1, j, 4, 11, "ng-container", 4),
            t.nI1(2, "async"),
            t.bVm()),
          2 & i)
        ) {
          const n = t.XpG();
          t.R7$(1), t.Y8G("ngIf", t.bMT(2, 1, n.texts$));
        }
      }
      function B(i, s) {
        if (1 & i) {
          const n = t.RV6();
          t.j41(0, "button", 13, 10),
            t.bIt("click", function () {
              const a = t.eBV(n).$implicit,
                r = t.XpG(2);
              return t.Njj(r.onElementClick(a));
            })("keydown.arrowLeft.prevent", function () {
              t.eBV(n);
              const o = t.sdS(1),
                a = t.XpG(2);
              return t.Njj(a.onElementKeyDownArrowLeft(o));
            })("keydown.arrowRight.prevent", function () {
              t.eBV(n);
              const o = t.sdS(1),
                a = t.XpG(2);
              return t.Njj(a.onElementKeyDownArrowRight(o));
            }),
            t.nI1(2, "async"),
            t.k0s();
        }
        if (2 & i) {
          const n = s.$implicit,
            e = t.XpG(2);
          t.AVh("t-button_active", n === e.index),
            t.Y8G("appearance", e.getSmallElementMode(n, t.bMT(2, 5, e.mode$)))(
              "disabled",
              e.disabled
            )("focusable", e.elementIsFocusable(n));
        }
      }
      function F(i, s) {
        if ((1 & i && t.DNE(0, B, 3, 7, "button", 12), 2 & i)) {
          const n = t.XpG();
          t.Y8G("tuiRepeatTimesOf", n.length);
        }
      }
      function O(i, s) {
        1 & i && t.nrm(0, "div", 14);
      }
      let z = (() => {
          class i extends C.Xb {
            constructor(n, e, o, a) {
              super(),
                (this.el = n),
                (this.modeDirective = e),
                (this.texts$ = o),
                (this.icons = a),
                (this.els = I.xQ),
                (this.length = 1),
                (this.size = "l"),
                (this.disabled = !1),
                (this.activePadding = 1),
                (this.sidePadding = 1),
                (this.index = 0),
                (this.indexChange = new t.bkB()),
                (this.mode$ = this.modeDirective
                  ? this.modeDirective.change$.pipe(
                      (0, L.T)(() => {
                        var r;
                        return (
                          (null === (r = this.modeDirective) || void 0 === r
                            ? void 0
                            : r.mode) || null
                        );
                      })
                    )
                  : G.w);
            }
            get nativeFocusableElement() {
              if (this.disabled) return null;
              let n = 0;
              const { elementsLength: e } = this;
              for (let a = 0; a < e; a++) {
                const r = this.getItemIndexByElementIndex(a);
                if ((r && n++, r === this.index)) break;
              }
              const o = this.els.find((a, r) => r === n);
              return o ? o.nativeFocusableElement : null;
            }
            get focused() {
              return (0, P.Ij)(this.el.nativeElement);
            }
            get elementsLength() {
              return this.itemsFit ? this.length : this.maxElementsLength;
            }
            get buttonSize() {
              return "m" === this.size ? "xs" : "s";
            }
            get arrowIsDisabledLeft() {
              return 0 === this.index;
            }
            get arrowIsDisabledRight() {
              return 0 === this.reverseIndex;
            }
            elementIsFocusable(n) {
              return this.index === n && !this.focused;
            }
            getItemIndexByElementIndex(n) {
              if ("s" === this.size || n < this.sidePadding) return n;
              if (n === this.sidePadding && this.hasCollapsedItems(this.index))
                return null;
              const e = this.lastElementIndex - n;
              return e === this.sidePadding &&
                this.hasCollapsedItems(this.reverseIndex)
                ? null
                : e < this.sidePadding
                ? this.lastIndex - e
                : (0, p.wN)(
                    this.index - this.maxHalfLength + n,
                    n,
                    this.lastIndex - e
                  );
            }
            getElementMode(n) {
              return this.index === n ? u.bC.Primary : u.bC.Flat;
            }
            getSmallElementMode(n, e) {
              return this.index === n && "onLight" !== e
                ? u.bC.Primary
                : u.bC.Secondary;
            }
            onElementClick(n) {
              this.updateIndex(n);
            }
            onElementKeyDownArrowLeft(n) {
              if (n === this.els.first) return;
              const e = this.els.find((o, a, r) => r[a + 1] === n);
              e?.nativeFocusableElement && e.nativeFocusableElement.focus();
            }
            onElementKeyDownArrowRight(n) {
              if (n === this.els.last) return;
              const e = this.els.find((o, a, r) => r[a - 1] === n);
              e?.nativeFocusableElement && e.nativeFocusableElement.focus();
            }
            onArrowClick(n) {
              this.tryChangeTo(n), this.focusActive();
            }
            onActiveZone(n) {
              this.updateFocused(n);
            }
            get reverseIndex() {
              return this.lastIndex - this.index;
            }
            get maxHalfLength() {
              return this.sidePadding + 1 + this.activePadding;
            }
            get itemsFit() {
              return this.length <= this.maxElementsLength;
            }
            get maxElementsLength() {
              return 2 * this.maxHalfLength + 1;
            }
            get lastIndex() {
              return this.length - 1;
            }
            get lastElementIndex() {
              return this.elementsLength - 1;
            }
            hasCollapsedItems(n) {
              return !this.itemsFit && n > this.maxHalfLength;
            }
            tryChangeTo(n) {
              this.updateIndex(
                (0, p.wN)(
                  this.index +
                    (function k(i) {
                      switch (i) {
                        case "left":
                          return -1;
                        case "right":
                          return 1;
                      }
                    })(n),
                  0,
                  this.lastIndex
                )
              );
            }
            focusActive() {
              const { nativeFocusableElement: n } = this;
              n && n.focus();
            }
            updateIndex(n) {
              this.index !== n && ((this.index = n), this.indexChange.emit(n));
            }
          }
          return (
            (i.ɵfac = function (n) {
              return new (n || i)(
                t.rXU(t.aKT),
                t.rXU(y.h, 8),
                t.rXU(E.DP),
                t.rXU(w.dx)
              );
            }),
            (i.ɵcmp = t.VBU({
              type: i,
              selectors: [["tui-pagination"]],
              viewQuery: function (n, e) {
                if ((1 & n && t.GBs(D, 5, h.aX), 2 & n)) {
                  let o;
                  t.mGM((o = t.lsd())) && (e.els = o);
                }
              },
              inputs: {
                length: "length",
                size: "size",
                disabled: "disabled",
                activePadding: "activePadding",
                sidePadding: "sidePadding",
                content: "content",
                index: "index",
              },
              outputs: { indexChange: "indexChange" },
              features: [t.Jv_([(0, h.Jr)(i)]), t.Vt3],
              decls: 6,
              vars: 2,
              consts: [
                [1, "t-content", 3, "tuiActiveZoneChange"],
                [4, "ngIf", "ngIfElse"],
                ["smallButtons", ""],
                ["dotsTemplate", ""],
                [4, "ngIf"],
                [
                  "appearance",
                  "flat",
                  "tuiIconButton",
                  "",
                  "type",
                  "button",
                  1,
                  "t-button",
                  3,
                  "disabled",
                  "focusable",
                  "icon",
                  "size",
                  "title",
                  "click",
                  "mousedown.silent.prevent",
                ],
                [4, "tuiRepeatTimes", "tuiRepeatTimesOf"],
                [4, "tuiLet"],
                [
                  "automation-id",
                  "tui-pagination__element",
                  "shape",
                  "square",
                  "tuiButton",
                  "",
                  "type",
                  "button",
                  "class",
                  "t-button",
                  3,
                  "appearance",
                  "disabled",
                  "focusable",
                  "size",
                  "click",
                  "keydown.arrowLeft.prevent",
                  "keydown.arrowRight.prevent",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                [
                  "automation-id",
                  "tui-pagination__element",
                  "shape",
                  "square",
                  "tuiButton",
                  "",
                  "type",
                  "button",
                  1,
                  "t-button",
                  3,
                  "appearance",
                  "disabled",
                  "focusable",
                  "size",
                  "click",
                  "keydown.arrowLeft.prevent",
                  "keydown.arrowRight.prevent",
                ],
                ["element", ""],
                [4, "polymorpheusOutlet", "polymorpheusOutletContext"],
                [
                  "shape",
                  "square",
                  "tuiButton",
                  "",
                  "type",
                  "button",
                  "class",
                  "t-button t-button_small",
                  3,
                  "appearance",
                  "t-button_active",
                  "disabled",
                  "focusable",
                  "click",
                  "keydown.arrowLeft.prevent",
                  "keydown.arrowRight.prevent",
                  4,
                  "tuiRepeatTimes",
                  "tuiRepeatTimesOf",
                ],
                [
                  "shape",
                  "square",
                  "tuiButton",
                  "",
                  "type",
                  "button",
                  1,
                  "t-button",
                  "t-button_small",
                  3,
                  "appearance",
                  "disabled",
                  "focusable",
                  "click",
                  "keydown.arrowLeft.prevent",
                  "keydown.arrowRight.prevent",
                ],
                ["automation-id", "tui-pagination__element", 1, "t-dots"],
              ],
              template: function (n, e) {
                if (
                  (1 & n &&
                    (t.j41(0, "div", 0),
                    t.bIt("tuiActiveZoneChange", function (a) {
                      return e.onActiveZone(a);
                    }),
                    t.DNE(1, X, 3, 3, "ng-container", 1),
                    t.DNE(2, F, 1, 1, "ng-template", null, 2, t.C5r),
                    t.DNE(4, O, 1, 0, "ng-template", null, 3, t.C5r),
                    t.k0s()),
                  2 & n)
                ) {
                  const o = t.sdS(3);
                  t.R7$(1), t.Y8G("ngIf", "s" !== e.size)("ngIfElse", o);
                }
              },
              dependencies: [f.SM, d.Y, l.bT, g.NM, m.Nx, v.OA, l.Jj],
              styles: [
                '[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;text-align:center}.t-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.t-button[_ngcontent-%COMP%]{margin:0 .125rem;flex-shrink:0}.t-button_active[_ngcontent-%COMP%]{background:currentColor}.t-button.t-button.t-button_small[_ngcontent-%COMP%]{width:.5rem;height:.5rem;margin:0}.t-button.t-button.t-button_small[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}.t-dots[_ngcontent-%COMP%]{width:var(--tui-height-s);height:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-03);text-align:center;cursor:default}.t-dots[_ngcontent-%COMP%]:before{content:"\\2026"}',
              ],
              changeDetection: 0,
            })),
            i
          );
        })(),
        Y = (() => {
          class i {}
          return (
            (i.ɵfac = function (n) {
              return new (n || i)();
            }),
            (i.ɵmod = t.$C({ type: i })),
            (i.ɵinj = t.G2t({
              imports: [[l.MD, v.yJ, g.ED, m.ks, d.L, f.Pv]],
            })),
            i
          );
        })();
    },
  },
]);
