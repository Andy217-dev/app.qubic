(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [461],
  {
    824050: (xt, j, M) => {
      "use strict";
      M(796935),
        (window.global = window),
        (window.dataLayer = window.dataLayer),
        (window.process = window.process || M(840573)),
        (window.Buffer = window.Buffer || M(583838).Buffer),
        (window.ga = window?.ga);
    },
    213981: (xt, j) => {
      "use strict";
      (j.byteLength = function a(k) {
        var T = F(k),
          Q = T[1];
        return (3 * (T[0] + Q)) / 4 - Q;
      }),
        (j.toByteArray = function ct(k) {
          var T,
            it,
            R = F(k),
            Q = R[0],
            dt = R[1],
            ht = new ut(
              (function X(k, T, R) {
                return (3 * (T + R)) / 4 - R;
              })(0, Q, dt)
            ),
            _t = 0,
            Pt = dt > 0 ? Q - 4 : Q;
          for (it = 0; it < Pt; it += 4)
            (T =
              (P[k.charCodeAt(it)] << 18) |
              (P[k.charCodeAt(it + 1)] << 12) |
              (P[k.charCodeAt(it + 2)] << 6) |
              P[k.charCodeAt(it + 3)]),
              (ht[_t++] = (T >> 16) & 255),
              (ht[_t++] = (T >> 8) & 255),
              (ht[_t++] = 255 & T);
          return (
            2 === dt &&
              ((T =
                (P[k.charCodeAt(it)] << 2) | (P[k.charCodeAt(it + 1)] >> 4)),
              (ht[_t++] = 255 & T)),
            1 === dt &&
              ((T =
                (P[k.charCodeAt(it)] << 10) |
                (P[k.charCodeAt(it + 1)] << 4) |
                (P[k.charCodeAt(it + 2)] >> 2)),
              (ht[_t++] = (T >> 8) & 255),
              (ht[_t++] = 255 & T)),
            ht
          );
        }),
        (j.fromByteArray = function U(k) {
          for (
            var T, R = k.length, Q = R % 3, dt = [], _t = 0, Pt = R - Q;
            _t < Pt;
            _t += 16383
          )
            dt.push(K(k, _t, _t + 16383 > Pt ? Pt : _t + 16383));
          return (
            1 === Q
              ? dt.push(M[(T = k[R - 1]) >> 2] + M[(T << 4) & 63] + "==")
              : 2 === Q &&
                dt.push(
                  M[(T = (k[R - 2] << 8) + k[R - 1]) >> 10] +
                    M[(T >> 4) & 63] +
                    M[(T << 2) & 63] +
                    "="
                ),
            dt.join("")
          );
        });
      for (
        var M = [],
          P = [],
          ut = typeof Uint8Array < "u" ? Uint8Array : Array,
          at =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          z = 0;
        z < 64;
        ++z
      )
        (M[z] = at[z]), (P[at.charCodeAt(z)] = z);
      function F(k) {
        var T = k.length;
        if (T % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var R = k.indexOf("=");
        return -1 === R && (R = T), [R, R === T ? 0 : 4 - (R % 4)];
      }
      function rt(k) {
        return (
          M[(k >> 18) & 63] + M[(k >> 12) & 63] + M[(k >> 6) & 63] + M[63 & k]
        );
      }
      function K(k, T, R) {
        for (var dt = [], ht = T; ht < R; ht += 3)
          dt.push(
            rt(
              ((k[ht] << 16) & 16711680) +
                ((k[ht + 1] << 8) & 65280) +
                (255 & k[ht + 2])
            )
          );
        return dt.join("");
      }
      (P["-".charCodeAt(0)] = 62), (P["_".charCodeAt(0)] = 63);
    },
    583838: (xt, j, M) => {
      "use strict";
      const P = M(213981),
        ut = M(322020),
        at =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (j.Buffer = a),
        (j.SlowBuffer = function ht(n) {
          return +n != n && (n = 0), a.alloc(+n);
        }),
        (j.INSPECT_MAX_BYTES = 50);
      const z = 2147483647;
      function F(n) {
        if (n > z)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
        const t = new Uint8Array(n);
        return Object.setPrototypeOf(t, a.prototype), t;
      }
      function a(n, t, e) {
        if ("number" == typeof n) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return K(n);
        }
        return X(n, t, e);
      }
      function X(n, t, e) {
        if ("string" == typeof n)
          return (function U(n, t) {
            if (
              (("string" != typeof t || "" === t) && (t = "utf8"),
              !a.isEncoding(t))
            )
              throw new TypeError("Unknown encoding: " + t);
            const e = 0 | _t(n, t);
            let r = F(e);
            const i = r.write(n, t);
            return i !== e && (r = r.slice(0, i)), r;
          })(n, t);
        if (ArrayBuffer.isView(n))
          return (function T(n) {
            if (o(n, Uint8Array)) {
              const t = new Uint8Array(n);
              return R(t.buffer, t.byteOffset, t.byteLength);
            }
            return k(n);
          })(n);
        if (null == n)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof n
          );
        if (
          o(n, ArrayBuffer) ||
          (n && o(n.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (o(n, SharedArrayBuffer) || (n && o(n.buffer, SharedArrayBuffer))))
        )
          return R(n, t, e);
        if ("number" == typeof n)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const r = n.valueOf && n.valueOf();
        if (null != r && r !== n) return a.from(r, t, e);
        const i = (function Q(n) {
          if (a.isBuffer(n)) {
            const t = 0 | dt(n.length),
              e = F(t);
            return 0 === e.length || n.copy(e, 0, 0, t), e;
          }
          return void 0 !== n.length
            ? "number" != typeof n.length || u(n.length)
              ? F(0)
              : k(n)
            : "Buffer" === n.type && Array.isArray(n.data)
            ? k(n.data)
            : void 0;
        })(n);
        if (i) return i;
        if (
          typeof Symbol < "u" &&
          null != Symbol.toPrimitive &&
          "function" == typeof n[Symbol.toPrimitive]
        )
          return a.from(n[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      }
      function ct(n) {
        if ("number" != typeof n)
          throw new TypeError('"size" argument must be of type number');
        if (n < 0)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
      }
      function K(n) {
        return ct(n), F(n < 0 ? 0 : 0 | dt(n));
      }
      function k(n) {
        const t = n.length < 0 ? 0 : 0 | dt(n.length),
          e = F(t);
        for (let r = 0; r < t; r += 1) e[r] = 255 & n[r];
        return e;
      }
      function R(n, t, e) {
        if (t < 0 || n.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (n.byteLength < t + (e || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return (
          (r =
            void 0 === t && void 0 === e
              ? new Uint8Array(n)
              : void 0 === e
              ? new Uint8Array(n, t)
              : new Uint8Array(n, t, e)),
          Object.setPrototypeOf(r, a.prototype),
          r
        );
      }
      function dt(n) {
        if (n >= z)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              z.toString(16) +
              " bytes"
          );
        return 0 | n;
      }
      function _t(n, t) {
        if (a.isBuffer(n)) return n.length;
        if (ArrayBuffer.isView(n) || o(n, ArrayBuffer)) return n.byteLength;
        if ("string" != typeof n)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof n
          );
        const e = n.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === e) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return e;
            case "utf8":
            case "utf-8":
              return Nt(n).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * e;
            case "hex":
              return e >>> 1;
            case "base64":
              return se(n).length;
            default:
              if (i) return r ? -1 : Nt(n).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function Pt(n, t, e) {
        let r = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === e || e > this.length) && (e = this.length), e <= 0) ||
            (e >>>= 0) <= (t >>>= 0))
        )
          return "";
        for (n || (n = "utf8"); ; )
          switch (n) {
            case "hex":
              return ue(this, t, e);
            case "utf8":
            case "utf-8":
              return bt(this, t, e);
            case "ascii":
              return ie(this, t, e);
            case "latin1":
            case "binary":
              return qt(this, t, e);
            case "base64":
              return Mt(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ae(this, t, e);
            default:
              if (r) throw new TypeError("Unknown encoding: " + n);
              (n = (n + "").toLowerCase()), (r = !0);
          }
      }
      function it(n, t, e) {
        const r = n[t];
        (n[t] = n[e]), (n[e] = r);
      }
      function jt(n, t, e, r, i) {
        if (0 === n.length) return -1;
        if (
          ("string" == typeof e
            ? ((r = e), (e = 0))
            : e > 2147483647
            ? (e = 2147483647)
            : e < -2147483648 && (e = -2147483648),
          u((e = +e)) && (e = i ? 0 : n.length - 1),
          e < 0 && (e = n.length + e),
          e >= n.length)
        ) {
          if (i) return -1;
          e = n.length - 1;
        } else if (e < 0) {
          if (!i) return -1;
          e = 0;
        }
        if (("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)))
          return 0 === t.length ? -1 : Wt(n, t, e, r, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(n, t, e)
                : Uint8Array.prototype.lastIndexOf.call(n, t, e)
              : Wt(n, [t], e, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function Wt(n, t, e, r, i) {
        let v,
          c = 1,
          l = n.length,
          g = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (n.length < 2 || t.length < 2) return -1;
          (c = 2), (l /= 2), (g /= 2), (e /= 2);
        }
        function x(A, L) {
          return 1 === c ? A[L] : A.readUInt16BE(L * c);
        }
        if (i) {
          let A = -1;
          for (v = e; v < l; v++)
            if (x(n, v) === x(t, -1 === A ? 0 : v - A)) {
              if ((-1 === A && (A = v), v - A + 1 === g)) return A * c;
            } else -1 !== A && (v -= v - A), (A = -1);
        } else
          for (e + g > l && (e = l - g), v = e; v >= 0; v--) {
            let A = !0;
            for (let L = 0; L < g; L++)
              if (x(n, v + L) !== x(t, L)) {
                A = !1;
                break;
              }
            if (A) return v;
          }
        return -1;
      }
      function Ht(n, t, e, r) {
        e = Number(e) || 0;
        const i = n.length - e;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        const c = t.length;
        let l;
        for (r > c / 2 && (r = c / 2), l = 0; l < r; ++l) {
          const g = parseInt(t.substr(2 * l, 2), 16);
          if (u(g)) return l;
          n[e + l] = g;
        }
        return l;
      }
      function te(n, t, e, r) {
        return Vt(Nt(t, n.length - e), n, e, r);
      }
      function ee(n, t, e, r) {
        return Vt(
          (function Lt(n) {
            const t = [];
            for (let e = 0; e < n.length; ++e) t.push(255 & n.charCodeAt(e));
            return t;
          })(t),
          n,
          e,
          r
        );
      }
      function ne(n, t, e, r) {
        return Vt(se(t), n, e, r);
      }
      function Bt(n, t, e, r) {
        return Vt(
          (function pe(n, t) {
            let e, r, i;
            const c = [];
            for (let l = 0; l < n.length && !((t -= 2) < 0); ++l)
              (e = n.charCodeAt(l)),
                (r = e >> 8),
                (i = e % 256),
                c.push(i),
                c.push(r);
            return c;
          })(t, n.length - e),
          n,
          e,
          r
        );
      }
      function Mt(n, t, e) {
        return P.fromByteArray(0 === t && e === n.length ? n : n.slice(t, e));
      }
      function bt(n, t, e) {
        e = Math.min(n.length, e);
        const r = [];
        let i = t;
        for (; i < e; ) {
          const c = n[i];
          let l = null,
            g = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (i + g <= e) {
            let x, v, A, L;
            switch (g) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                (x = n[i + 1]),
                  128 == (192 & x) &&
                    ((L = ((31 & c) << 6) | (63 & x)), L > 127 && (l = L));
                break;
              case 3:
                (x = n[i + 1]),
                  (v = n[i + 2]),
                  128 == (192 & x) &&
                    128 == (192 & v) &&
                    ((L = ((15 & c) << 12) | ((63 & x) << 6) | (63 & v)),
                    L > 2047 && (L < 55296 || L > 57343) && (l = L));
                break;
              case 4:
                (x = n[i + 1]),
                  (v = n[i + 2]),
                  (A = n[i + 3]),
                  128 == (192 & x) &&
                    128 == (192 & v) &&
                    128 == (192 & A) &&
                    ((L =
                      ((15 & c) << 18) |
                      ((63 & x) << 12) |
                      ((63 & v) << 6) |
                      (63 & A)),
                    L > 65535 && L < 1114112 && (l = L));
            }
          }
          null === l
            ? ((l = 65533), (g = 1))
            : l > 65535 &&
              ((l -= 65536),
              r.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            r.push(l),
            (i += g);
        }
        return (function Rt(n) {
          const t = n.length;
          if (t <= re) return String.fromCharCode.apply(String, n);
          let e = "",
            r = 0;
          for (; r < t; )
            e += String.fromCharCode.apply(String, n.slice(r, (r += re)));
          return e;
        })(r);
      }
      (j.kMaxLength = z),
        !(a.TYPED_ARRAY_SUPPORT = (function st() {
          try {
            const n = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(n, t),
              42 === n.foo()
            );
          } catch {
            return !1;
          }
        })()) &&
          typeof console < "u" &&
          "function" == typeof console.error &&
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (n, t, e) {
          return X(n, t, e);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (n, t, e) {
          return (function rt(n, t, e) {
            return (
              ct(n),
              n <= 0
                ? F(n)
                : void 0 !== t
                ? "string" == typeof e
                  ? F(n).fill(t, e)
                  : F(n).fill(t)
                : F(n)
            );
          })(n, t, e);
        }),
        (a.allocUnsafe = function (n) {
          return K(n);
        }),
        (a.allocUnsafeSlow = function (n) {
          return K(n);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (o(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            o(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            i = e.length;
          for (let c = 0, l = Math.min(r, i); c < l; ++c)
            if (t[c] !== e[c]) {
              (r = t[c]), (i = e[c]);
              break;
            }
          return r < i ? -1 : i < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          let r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          const i = a.allocUnsafe(e);
          let c = 0;
          for (r = 0; r < t.length; ++r) {
            let l = t[r];
            if (o(l, Uint8Array))
              c + l.length > i.length
                ? (a.isBuffer(l) || (l = a.from(l)), l.copy(i, c))
                : Uint8Array.prototype.set.call(i, l, c);
            else {
              if (!a.isBuffer(l))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              l.copy(i, c);
            }
            c += l.length;
          }
          return i;
        }),
        (a.byteLength = _t),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          const t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) it(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          const t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            it(this, e, e + 3), it(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          const t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            it(this, e, e + 7),
              it(this, e + 1, e + 6),
              it(this, e + 2, e + 5),
              it(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toLocaleString = a.prototype.toString =
          function () {
            const t = this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? bt(this, 0, t)
              : Pt.apply(this, arguments);
          }),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = "";
          const e = j.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, e)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        at && (a.prototype[at] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, i, c) {
          if (
            (o(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === i && (i = 0),
            void 0 === c && (c = this.length),
            e < 0 || r > t.length || i < 0 || c > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= c && e >= r) return 0;
          if (i >= c) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          let l = (c >>>= 0) - (i >>>= 0),
            g = (r >>>= 0) - (e >>>= 0);
          const x = Math.min(l, g),
            v = this.slice(i, c),
            A = t.slice(e, r);
          for (let L = 0; L < x; ++L)
            if (v[L] !== A[L]) {
              (l = v[L]), (g = A[L]);
              break;
            }
          return l < g ? -1 : g < l ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return jt(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return jt(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, i) {
          if (void 0 === e) (i = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (i = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === i && (i = "utf8"))
                : ((i = r), (r = void 0));
          }
          const c = this.length - e;
          if (
            ((void 0 === r || r > c) && (r = c),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          let l = !1;
          for (;;)
            switch (i) {
              case "hex":
                return Ht(this, t, e, r);
              case "utf8":
              case "utf-8":
                return te(this, t, e, r);
              case "ascii":
              case "latin1":
              case "binary":
                return ee(this, t, e, r);
              case "base64":
                return ne(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return Bt(this, t, e, r);
              default:
                if (l) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (l = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const re = 4096;
      function ie(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i) r += String.fromCharCode(127 & n[i]);
        return r;
      }
      function qt(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i) r += String.fromCharCode(n[i]);
        return r;
      }
      function ue(n, t, e) {
        const r = n.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
        let i = "";
        for (let c = t; c < e; ++c) i += d[n[c]];
        return i;
      }
      function ae(n, t, e) {
        const r = n.slice(t, e);
        let i = "";
        for (let c = 0; c < r.length - 1; c += 2)
          i += String.fromCharCode(r[c] + 256 * r[c + 1]);
        return i;
      }
      function ot(n, t, e) {
        if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint");
        if (n + t > e)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function Tt(n, t, e, r, i, c) {
        if (!a.isBuffer(n))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < c)
          throw new RangeError('"value" argument is out of bounds');
        if (e + r > n.length) throw new RangeError("Index out of range");
      }
      function wt(n, t, e, r, i) {
        Kt(t, r, i, n, e, 7);
        let c = Number(t & BigInt(4294967295));
        (n[e++] = c),
          (c >>= 8),
          (n[e++] = c),
          (c >>= 8),
          (n[e++] = c),
          (c >>= 8),
          (n[e++] = c);
        let l = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[e++] = l),
          (l >>= 8),
          (n[e++] = l),
          (l >>= 8),
          (n[e++] = l),
          (l >>= 8),
          (n[e++] = l),
          e
        );
      }
      function Xt(n, t, e, r, i) {
        Kt(t, r, i, n, e, 7);
        let c = Number(t & BigInt(4294967295));
        (n[e + 7] = c),
          (c >>= 8),
          (n[e + 6] = c),
          (c >>= 8),
          (n[e + 5] = c),
          (c >>= 8),
          (n[e + 4] = c);
        let l = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[e + 3] = l),
          (l >>= 8),
          (n[e + 2] = l),
          (l >>= 8),
          (n[e + 1] = l),
          (l >>= 8),
          (n[e] = l),
          e + 8
        );
      }
      function Yt(n, t, e, r, i, c) {
        if (e + r > n.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range");
      }
      function zt(n, t, e, r, i) {
        return (
          (t = +t),
          (e >>>= 0),
          i || Yt(n, 0, e, 4),
          ut.write(n, t, e, r, 23, 4),
          e + 4
        );
      }
      function Jt(n, t, e, r, i) {
        return (
          (t = +t),
          (e >>>= 0),
          i || Yt(n, 0, e, 8),
          ut.write(n, t, e, r, 52, 8),
          e + 8
        );
      }
      (a.prototype.slice = function (t, e) {
        const r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t);
        const i = this.subarray(t, e);
        return Object.setPrototypeOf(i, a.prototype), i;
      }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || ot(t, e, this.length);
            let i = this[t],
              c = 1,
              l = 0;
            for (; ++l < e && (c *= 256); ) i += this[t + l] * c;
            return i;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || ot(t, e, this.length);
            let i = this[t + --e],
              c = 1;
            for (; e > 0 && (c *= 256); ) i += this[t + --e] * c;
            return i;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || ot(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || ot(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || ot(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || ot(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || ot(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = h(function (t) {
          Ft((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && vt(t, this.length - 8);
          const i =
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
            c = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
          return BigInt(i) + (BigInt(c) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = h(function (t) {
          Ft((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && vt(t, this.length - 8);
          const i =
              e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
            c = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(i) << BigInt(32)) + BigInt(c);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || ot(t, e, this.length);
          let i = this[t],
            c = 1,
            l = 0;
          for (; ++l < e && (c *= 256); ) i += this[t + l] * c;
          return (c *= 128), i >= c && (i -= Math.pow(2, 8 * e)), i;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || ot(t, e, this.length);
          let i = e,
            c = 1,
            l = this[t + --i];
          for (; i > 0 && (c *= 256); ) l += this[t + --i] * c;
          return (c *= 128), l >= c && (l -= Math.pow(2, 8 * e)), l;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || ot(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || ot(t, 2, this.length);
          const r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || ot(t, 2, this.length);
          const r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || ot(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || ot(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = h(function (t) {
          Ft((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && vt(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
              )
          );
        })),
        (a.prototype.readBigInt64BE = h(function (t) {
          Ft((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && vt(t, this.length - 8);
          const i = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
          return (
            (BigInt(i) << BigInt(32)) +
            BigInt(
              this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
            )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || ot(t, 4, this.length), ut.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || ot(t, 4, this.length), ut.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || ot(t, 8, this.length), ut.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || ot(t, 8, this.length), ut.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, i) {
            (t = +t),
              (e >>>= 0),
              (r >>>= 0),
              i || Tt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            let c = 1,
              l = 0;
            for (this[e] = 255 & t; ++l < r && (c *= 256); )
              this[e + l] = (t / c) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, i) {
            (t = +t),
              (e >>>= 0),
              (r >>>= 0),
              i || Tt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            let c = r - 1,
              l = 1;
            for (this[e + c] = 255 & t; --c >= 0 && (l *= 256); )
              this[e + c] = (t / l) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || Tt(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || Tt(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || Tt(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || Tt(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || Tt(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = h(function (t, e = 0) {
          return wt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = h(function (t, e = 0) {
          return Xt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (t, e, r, i) {
          if (((t = +t), (e >>>= 0), !i)) {
            const x = Math.pow(2, 8 * r - 1);
            Tt(this, t, e, r, x - 1, -x);
          }
          let c = 0,
            l = 1,
            g = 0;
          for (this[e] = 255 & t; ++c < r && (l *= 256); )
            t < 0 && 0 === g && 0 !== this[e + c - 1] && (g = 1),
              (this[e + c] = (((t / l) >> 0) - g) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, i) {
          if (((t = +t), (e >>>= 0), !i)) {
            const x = Math.pow(2, 8 * r - 1);
            Tt(this, t, e, r, x - 1, -x);
          }
          let c = r - 1,
            l = 1,
            g = 0;
          for (this[e + c] = 255 & t; --c >= 0 && (l *= 256); )
            t < 0 && 0 === g && 0 !== this[e + c + 1] && (g = 1),
              (this[e + c] = (((t / l) >> 0) - g) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || Tt(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || Tt(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || Tt(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || Tt(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || Tt(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = h(function (t, e = 0) {
          return wt(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = h(function (t, e = 0) {
          return Xt(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return zt(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return zt(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return Jt(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return Jt(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, i) {
          if (!a.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            !i && 0 !== i && (i = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            i > 0 && i < r && (i = r),
            i === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            t.length - e < i - r && (i = t.length - e + r);
          const c = i - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, i)
              : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
            c
          );
        }),
        (a.prototype.fill = function (t, e, r, i) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((i = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((i = r), (r = this.length)),
              void 0 !== i && "string" != typeof i)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !a.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
            if (1 === t.length) {
              const l = t.charCodeAt(0);
              (("utf8" === i && l < 128) || "latin1" === i) && (t = l);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          let c;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (c = e; c < r; ++c) this[c] = t;
          else {
            const l = a.isBuffer(t) ? t : a.from(t, i),
              g = l.length;
            if (0 === g)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (c = 0; c < r - e; ++c) this[c + e] = l[c % g];
          }
          return this;
        });
      const Dt = {};
      function Gt(n, t, e) {
        Dt[n] = class extends e {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${n}]`),
              delete this.name;
          }
          get code() {
            return n;
          }
          set code(i) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: i,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${n}]: ${this.message}`;
          }
        };
      }
      function oe(n) {
        let t = "",
          e = n.length;
        const r = "-" === n[0] ? 1 : 0;
        for (; e >= r + 4; e -= 3) t = `_${n.slice(e - 3, e)}${t}`;
        return `${n.slice(0, e)}${t}`;
      }
      function Kt(n, t, e, r, i, c) {
        if (n > e || n < t) {
          const l = "bigint" == typeof t ? "n" : "";
          let g;
          throw (
            ((g =
              c > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${l} and < 2${l} ** ${8 * (c + 1)}${l}`
                  : `>= -(2${l} ** ${8 * (c + 1) - 1}${l}) and < 2 ** ${
                      8 * (c + 1) - 1
                    }${l}`
                : `>= ${t}${l} and <= ${e}${l}`),
            new Dt.ERR_OUT_OF_RANGE("value", g, n))
          );
        }
        !(function le(n, t, e) {
          Ft(t, "offset"),
            (void 0 === n[t] || void 0 === n[t + e]) &&
              vt(t, n.length - (e + 1));
        })(r, i, c);
      }
      function Ft(n, t) {
        if ("number" != typeof n)
          throw new Dt.ERR_INVALID_ARG_TYPE(t, "number", n);
      }
      function vt(n, t, e) {
        throw Math.floor(n) !== n
          ? (Ft(n, e), new Dt.ERR_OUT_OF_RANGE(e || "offset", "an integer", n))
          : t < 0
          ? new Dt.ERR_BUFFER_OUT_OF_BOUNDS()
          : new Dt.ERR_OUT_OF_RANGE(
              e || "offset",
              `>= ${e ? 1 : 0} and <= ${t}`,
              n
            );
      }
      Gt(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (n) {
          return n
            ? `${n} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        Gt(
          "ERR_INVALID_ARG_TYPE",
          function (n, t) {
            return `The "${n}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        Gt(
          "ERR_OUT_OF_RANGE",
          function (n, t, e) {
            let r = `The value of "${n}" is out of range.`,
              i = e;
            return (
              Number.isInteger(e) && Math.abs(e) > 2 ** 32
                ? (i = oe(String(e)))
                : "bigint" == typeof e &&
                  ((i = String(e)),
                  (e > BigInt(2) ** BigInt(32) ||
                    e < -(BigInt(2) ** BigInt(32))) &&
                    (i = oe(i)),
                  (i += "n")),
              (r += ` It must be ${t}. Received ${i}`),
              r
            );
          },
          RangeError
        );
      const fe = /[^+/0-9A-Za-z-_]/g;
      function Nt(n, t) {
        let e;
        t = t || 1 / 0;
        const r = n.length;
        let i = null;
        const c = [];
        for (let l = 0; l < r; ++l) {
          if (((e = n.charCodeAt(l)), e > 55295 && e < 57344)) {
            if (!i) {
              if (e > 56319) {
                (t -= 3) > -1 && c.push(239, 191, 189);
                continue;
              }
              if (l + 1 === r) {
                (t -= 3) > -1 && c.push(239, 191, 189);
                continue;
              }
              i = e;
              continue;
            }
            if (e < 56320) {
              (t -= 3) > -1 && c.push(239, 191, 189), (i = e);
              continue;
            }
            e = 65536 + (((i - 55296) << 10) | (e - 56320));
          } else i && (t -= 3) > -1 && c.push(239, 191, 189);
          if (((i = null), e < 128)) {
            if ((t -= 1) < 0) break;
            c.push(e);
          } else if (e < 2048) {
            if ((t -= 2) < 0) break;
            c.push((e >> 6) | 192, (63 & e) | 128);
          } else if (e < 65536) {
            if ((t -= 3) < 0) break;
            c.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
          } else {
            if (!(e < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            c.push(
              (e >> 18) | 240,
              ((e >> 12) & 63) | 128,
              ((e >> 6) & 63) | 128,
              (63 & e) | 128
            );
          }
        }
        return c;
      }
      function se(n) {
        return P.toByteArray(
          (function he(n) {
            if ((n = (n = n.split("=")[0]).trim().replace(fe, "")).length < 2)
              return "";
            for (; n.length % 4 != 0; ) n += "=";
            return n;
          })(n)
        );
      }
      function Vt(n, t, e, r) {
        let i;
        for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i)
          t[i + e] = n[i];
        return i;
      }
      function o(n, t) {
        return (
          n instanceof t ||
          (null != n &&
            null != n.constructor &&
            null != n.constructor.name &&
            n.constructor.name === t.name)
        );
      }
      function u(n) {
        return n != n;
      }
      const d = (function () {
        const n = "0123456789abcdef",
          t = new Array(256);
        for (let e = 0; e < 16; ++e) {
          const r = 16 * e;
          for (let i = 0; i < 16; ++i) t[r + i] = n[e] + n[i];
        }
        return t;
      })();
      function h(n) {
        return typeof BigInt > "u" ? y : n;
      }
      function y() {
        throw new Error("BigInt not supported");
      }
    },
    322020: (xt, j) => {
      (j.read = function (M, P, ut, at, z) {
        var st,
          F,
          a = 8 * z - at - 1,
          X = (1 << a) - 1,
          ct = X >> 1,
          rt = -7,
          K = ut ? z - 1 : 0,
          U = ut ? -1 : 1,
          k = M[P + K];
        for (
          K += U, st = k & ((1 << -rt) - 1), k >>= -rt, rt += a;
          rt > 0;
          st = 256 * st + M[P + K], K += U, rt -= 8
        );
        for (
          F = st & ((1 << -rt) - 1), st >>= -rt, rt += at;
          rt > 0;
          F = 256 * F + M[P + K], K += U, rt -= 8
        );
        if (0 === st) st = 1 - ct;
        else {
          if (st === X) return F ? NaN : (1 / 0) * (k ? -1 : 1);
          (F += Math.pow(2, at)), (st -= ct);
        }
        return (k ? -1 : 1) * F * Math.pow(2, st - at);
      }),
        (j.write = function (M, P, ut, at, z, st) {
          var F,
            a,
            X,
            ct = 8 * st - z - 1,
            rt = (1 << ct) - 1,
            K = rt >> 1,
            U = 23 === z ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            k = at ? 0 : st - 1,
            T = at ? 1 : -1,
            R = P < 0 || (0 === P && 1 / P < 0) ? 1 : 0;
          for (
            P = Math.abs(P),
              isNaN(P) || P === 1 / 0
                ? ((a = isNaN(P) ? 1 : 0), (F = rt))
                : ((F = Math.floor(Math.log(P) / Math.LN2)),
                  P * (X = Math.pow(2, -F)) < 1 && (F--, (X *= 2)),
                  (P += F + K >= 1 ? U / X : U * Math.pow(2, 1 - K)) * X >= 2 &&
                    (F++, (X /= 2)),
                  F + K >= rt
                    ? ((a = 0), (F = rt))
                    : F + K >= 1
                    ? ((a = (P * X - 1) * Math.pow(2, z)), (F += K))
                    : ((a = P * Math.pow(2, K - 1) * Math.pow(2, z)), (F = 0)));
            z >= 8;
            M[ut + k] = 255 & a, k += T, a /= 256, z -= 8
          );
          for (
            F = (F << z) | a, ct += z;
            ct > 0;
            M[ut + k] = 255 & F, k += T, F /= 256, ct -= 8
          );
          M[ut + k - T] |= 128 * R;
        });
    },
    840573: (xt) => {
      var M,
        P,
        j = (xt.exports = {});
      function ut() {
        throw new Error("setTimeout has not been defined");
      }
      function at() {
        throw new Error("clearTimeout has not been defined");
      }
      function z(T) {
        if (M === setTimeout) return setTimeout(T, 0);
        if ((M === ut || !M) && setTimeout)
          return (M = setTimeout), setTimeout(T, 0);
        try {
          return M(T, 0);
        } catch {
          try {
            return M.call(null, T, 0);
          } catch {
            return M.call(this, T, 0);
          }
        }
      }
      !(function () {
        try {
          M = "function" == typeof setTimeout ? setTimeout : ut;
        } catch {
          M = ut;
        }
        try {
          P = "function" == typeof clearTimeout ? clearTimeout : at;
        } catch {
          P = at;
        }
      })();
      var X,
        F = [],
        a = !1,
        ct = -1;
      function rt() {
        !a ||
          !X ||
          ((a = !1), X.length ? (F = X.concat(F)) : (ct = -1), F.length && K());
      }
      function K() {
        if (!a) {
          var T = z(rt);
          a = !0;
          for (var R = F.length; R; ) {
            for (X = F, F = []; ++ct < R; ) X && X[ct].run();
            (ct = -1), (R = F.length);
          }
          (X = null),
            (a = !1),
            (function st(T) {
              if (P === clearTimeout) return clearTimeout(T);
              if ((P === at || !P) && clearTimeout)
                return (P = clearTimeout), clearTimeout(T);
              try {
                return P(T);
              } catch {
                try {
                  return P.call(null, T);
                } catch {
                  return P.call(this, T);
                }
              }
            })(T);
        }
      }
      function U(T, R) {
        (this.fun = T), (this.array = R);
      }
      function k() {}
      (j.nextTick = function (T) {
        var R = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var Q = 1; Q < arguments.length; Q++) R[Q - 1] = arguments[Q];
        F.push(new U(T, R)), 1 === F.length && !a && z(K);
      }),
        (U.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (j.title = "browser"),
        (j.browser = !0),
        (j.env = {}),
        (j.argv = []),
        (j.version = ""),
        (j.versions = {}),
        (j.on = k),
        (j.addListener = k),
        (j.once = k),
        (j.off = k),
        (j.removeListener = k),
        (j.removeAllListeners = k),
        (j.emit = k),
        (j.prependListener = k),
        (j.prependOnceListener = k),
        (j.listeners = function (T) {
          return [];
        }),
        (j.binding = function (T) {
          throw new Error("process.binding is not supported");
        }),
        (j.cwd = function () {
          return "/";
        }),
        (j.chdir = function (T) {
          throw new Error("process.chdir is not supported");
        }),
        (j.umask = function () {
          return 0;
        });
    },
    796935: () => {
      "use strict";
      !(function (o) {
        const u = o.performance;
        function d(q) {
          u && u.mark && u.mark(q);
        }
        function h(q, b) {
          u && u.measure && u.measure(q, b);
        }
        d("Zone");
        const y = o.__Zone_symbol_prefix || "__zone_symbol__";
        function n(q) {
          return y + q;
        }
        const t = !0 === o[n("forceDuplicateZoneCheck")];
        if (o.Zone) {
          if (t || "function" != typeof o.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return o.Zone;
        }
        let e = (() => {
          class q {
            static #t = (this.__symbol__ = n);
            static assertZonePatched() {
              if (o.Promise !== At.ZoneAwarePromise)
                throw new Error(
                  "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                );
            }
            static get root() {
              let s = q.current;
              for (; s.parent; ) s = s.parent;
              return s;
            }
            static get current() {
              return lt.zone;
            }
            static get currentTask() {
              return Ct;
            }
            static __load_patch(s, f, D = !1) {
              if (At.hasOwnProperty(s)) {
                if (!D && t) throw Error("Already loaded patch: " + s);
              } else if (!o["__Zone_disable_" + s]) {
                const H = "Zone:" + s;
                d(H), (At[s] = f(o, q, Et)), h(H, H);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            constructor(s, f) {
              (this._parent = s),
                (this._name = f ? f.name || "unnamed" : "<root>"),
                (this._properties = (f && f.properties) || {}),
                (this._zoneDelegate = new i(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  f
                ));
            }
            get(s) {
              const f = this.getZoneWith(s);
              if (f) return f._properties[s];
            }
            getZoneWith(s) {
              let f = this;
              for (; f; ) {
                if (f._properties.hasOwnProperty(s)) return f;
                f = f._parent;
              }
              return null;
            }
            fork(s) {
              if (!s) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, s);
            }
            wrap(s, f) {
              if ("function" != typeof s)
                throw new Error("Expecting function got: " + s);
              const D = this._zoneDelegate.intercept(this, s, f),
                H = this;
              return function () {
                return H.runGuarded(D, this, arguments, f);
              };
            }
            run(s, f, D, H) {
              lt = { parent: lt, zone: this };
              try {
                return this._zoneDelegate.invoke(this, s, f, D, H);
              } finally {
                lt = lt.parent;
              }
            }
            runGuarded(s, f = null, D, H) {
              lt = { parent: lt, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, s, f, D, H);
                } catch (mt) {
                  if (this._zoneDelegate.handleError(this, mt)) throw mt;
                }
              } finally {
                lt = lt.parent;
              }
            }
            runTask(s, f, D) {
              if (s.zone != this)
                throw new Error(
                  "A task can only be run in the zone of creation! (Creation: " +
                    (s.zone || gt).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (s.state === J && (s.type === kt || s.type === N)) return;
              const H = s.state != B;
              H && s._transitionTo(B, Y), s.runCount++;
              const mt = Ct;
              (Ct = s), (lt = { parent: lt, zone: this });
              try {
                s.type == N &&
                  s.data &&
                  !s.data.isPeriodic &&
                  (s.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, s, f, D);
                } catch (E) {
                  if (this._zoneDelegate.handleError(this, E)) throw E;
                }
              } finally {
                s.state !== J &&
                  s.state !== w &&
                  (s.type == kt || (s.data && s.data.isPeriodic)
                    ? H && s._transitionTo(Y, B)
                    : ((s.runCount = 0),
                      this._updateTaskCount(s, -1),
                      H && s._transitionTo(J, B, J))),
                  (lt = lt.parent),
                  (Ct = mt);
              }
            }
            scheduleTask(s) {
              if (s.zone && s.zone !== this) {
                let D = this;
                for (; D; ) {
                  if (D === s.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`
                    );
                  D = D.parent;
                }
              }
              s._transitionTo(yt, J);
              const f = [];
              (s._zoneDelegates = f), (s._zone = this);
              try {
                s = this._zoneDelegate.scheduleTask(this, s);
              } catch (D) {
                throw (
                  (s._transitionTo(w, yt, J),
                  this._zoneDelegate.handleError(this, D),
                  D)
                );
              }
              return (
                s._zoneDelegates === f && this._updateTaskCount(s, 1),
                s.state == yt && s._transitionTo(Y, yt),
                s
              );
            }
            scheduleMicroTask(s, f, D, H) {
              return this.scheduleTask(new c(W, s, f, D, H, void 0));
            }
            scheduleMacroTask(s, f, D, H, mt) {
              return this.scheduleTask(new c(N, s, f, D, H, mt));
            }
            scheduleEventTask(s, f, D, H, mt) {
              return this.scheduleTask(new c(kt, s, f, D, H, mt));
            }
            cancelTask(s) {
              if (s.zone != this)
                throw new Error(
                  "A task can only be cancelled in the zone of creation! (Creation: " +
                    (s.zone || gt).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (s.state === Y || s.state === B) {
                s._transitionTo(tt, Y, B);
                try {
                  this._zoneDelegate.cancelTask(this, s);
                } catch (f) {
                  throw (
                    (s._transitionTo(w, tt),
                    this._zoneDelegate.handleError(this, f),
                    f)
                  );
                }
                return (
                  this._updateTaskCount(s, -1),
                  s._transitionTo(J, tt),
                  (s.runCount = 0),
                  s
                );
              }
            }
            _updateTaskCount(s, f) {
              const D = s._zoneDelegates;
              -1 == f && (s._zoneDelegates = null);
              for (let H = 0; H < D.length; H++)
                D[H]._updateTaskCount(s.type, f);
            }
          }
          return q;
        })();
        const r = {
          name: "",
          onHasTask: (q, b, s, f) => q.hasTask(s, f),
          onScheduleTask: (q, b, s, f) => q.scheduleTask(s, f),
          onInvokeTask: (q, b, s, f, D, H) => q.invokeTask(s, f, D, H),
          onCancelTask: (q, b, s, f) => q.cancelTask(s, f),
        };
        class i {
          constructor(b, s, f) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = b),
              (this._parentDelegate = s),
              (this._forkZS = f && (f && f.onFork ? f : s._forkZS)),
              (this._forkDlgt = f && (f.onFork ? s : s._forkDlgt)),
              (this._forkCurrZone =
                f && (f.onFork ? this.zone : s._forkCurrZone)),
              (this._interceptZS = f && (f.onIntercept ? f : s._interceptZS)),
              (this._interceptDlgt =
                f && (f.onIntercept ? s : s._interceptDlgt)),
              (this._interceptCurrZone =
                f && (f.onIntercept ? this.zone : s._interceptCurrZone)),
              (this._invokeZS = f && (f.onInvoke ? f : s._invokeZS)),
              (this._invokeDlgt = f && (f.onInvoke ? s : s._invokeDlgt)),
              (this._invokeCurrZone =
                f && (f.onInvoke ? this.zone : s._invokeCurrZone)),
              (this._handleErrorZS =
                f && (f.onHandleError ? f : s._handleErrorZS)),
              (this._handleErrorDlgt =
                f && (f.onHandleError ? s : s._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                f && (f.onHandleError ? this.zone : s._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                f && (f.onScheduleTask ? f : s._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                f && (f.onScheduleTask ? s : s._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                f && (f.onScheduleTask ? this.zone : s._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                f && (f.onInvokeTask ? f : s._invokeTaskZS)),
              (this._invokeTaskDlgt =
                f && (f.onInvokeTask ? s : s._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                f && (f.onInvokeTask ? this.zone : s._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                f && (f.onCancelTask ? f : s._cancelTaskZS)),
              (this._cancelTaskDlgt =
                f && (f.onCancelTask ? s : s._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                f && (f.onCancelTask ? this.zone : s._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const D = f && f.onHasTask;
            (D || (s && s._hasTaskZS)) &&
              ((this._hasTaskZS = D ? f : r),
              (this._hasTaskDlgt = s),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = b),
              f.onScheduleTask ||
                ((this._scheduleTaskZS = r),
                (this._scheduleTaskDlgt = s),
                (this._scheduleTaskCurrZone = this.zone)),
              f.onInvokeTask ||
                ((this._invokeTaskZS = r),
                (this._invokeTaskDlgt = s),
                (this._invokeTaskCurrZone = this.zone)),
              f.onCancelTask ||
                ((this._cancelTaskZS = r),
                (this._cancelTaskDlgt = s),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(b, s) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, b, s)
              : new e(b, s);
          }
          intercept(b, s, f) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  b,
                  s,
                  f
                )
              : s;
          }
          invoke(b, s, f, D, H) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  b,
                  s,
                  f,
                  D,
                  H
                )
              : s.apply(f, D);
          }
          handleError(b, s) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                b,
                s
              )
            );
          }
          scheduleTask(b, s) {
            let f = s;
            if (this._scheduleTaskZS)
              this._hasTaskZS && f._zoneDelegates.push(this._hasTaskDlgtOwner),
                (f = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  b,
                  s
                )),
                f || (f = s);
            else if (s.scheduleFn) s.scheduleFn(s);
            else {
              if (s.type != W) throw new Error("Task is missing scheduleFn.");
              Z(s);
            }
            return f;
          }
          invokeTask(b, s, f, D) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  b,
                  s,
                  f,
                  D
                )
              : s.callback.apply(f, D);
          }
          cancelTask(b, s) {
            let f;
            if (this._cancelTaskZS)
              f = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                b,
                s
              );
            else {
              if (!s.cancelFn) throw Error("Task is not cancelable");
              f = s.cancelFn(s);
            }
            return f;
          }
          hasTask(b, s) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  b,
                  s
                );
            } catch (f) {
              this.handleError(b, f);
            }
          }
          _updateTaskCount(b, s) {
            const f = this._taskCounts,
              D = f[b],
              H = (f[b] = D + s);
            if (H < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != D && 0 != H) ||
              this.hasTask(this.zone, {
                microTask: f.microTask > 0,
                macroTask: f.macroTask > 0,
                eventTask: f.eventTask > 0,
                change: b,
              });
          }
        }
        class c {
          constructor(b, s, f, D, H, mt) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = b),
              (this.source = s),
              (this.data = D),
              (this.scheduleFn = H),
              (this.cancelFn = mt),
              !f)
            )
              throw new Error("callback is not defined");
            this.callback = f;
            const E = this;
            this.invoke =
              b === kt && D && D.useG
                ? c.invokeTask
                : function () {
                    return c.invokeTask.call(o, E, this, arguments);
                  };
          }
          static invokeTask(b, s, f) {
            b || (b = this), It++;
            try {
              return b.runCount++, b.zone.runTask(b, s, f);
            } finally {
              1 == It && I(), It--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(J, yt);
          }
          _transitionTo(b, s, f) {
            if (this._state !== s && this._state !== f)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${b}', expecting state '${s}'${
                  f ? " or '" + f + "'" : ""
                }, was '${this._state}'.`
              );
            (this._state = b), b == J && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && typeof this.data.handleId < "u"
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const l = n("setTimeout"),
          g = n("Promise"),
          x = n("then");
        let L,
          v = [],
          A = !1;
        function pt(q) {
          if ((L || (o[g] && (L = o[g].resolve(0))), L)) {
            let b = L[x];
            b || (b = L.then), b.call(L, q);
          } else o[l](q, 0);
        }
        function Z(q) {
          0 === It && 0 === v.length && pt(I), q && v.push(q);
        }
        function I() {
          if (!A) {
            for (A = !0; v.length; ) {
              const q = v;
              v = [];
              for (let b = 0; b < q.length; b++) {
                const s = q[b];
                try {
                  s.zone.runTask(s, null, null);
                } catch (f) {
                  Et.onUnhandledError(f);
                }
              }
            }
            Et.microtaskDrainDone(), (A = !1);
          }
        }
        const gt = { name: "NO ZONE" },
          J = "notScheduled",
          yt = "scheduling",
          Y = "scheduled",
          B = "running",
          tt = "canceling",
          w = "unknown",
          W = "microTask",
          N = "macroTask",
          kt = "eventTask",
          At = {},
          Et = {
            symbol: n,
            currentZoneFrame: () => lt,
            onUnhandledError: ft,
            microtaskDrainDone: ft,
            scheduleMicroTask: Z,
            showUncaughtError: () => !e[n("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: ft,
            patchMethod: () => ft,
            bindArguments: () => [],
            patchThen: () => ft,
            patchMacroTask: () => ft,
            patchEventPrototype: () => ft,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => ft,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => ft,
            wrapWithCurrentZone: () => ft,
            filterProperties: () => [],
            attachOriginToPatched: () => ft,
            _redefineProperty: () => ft,
            patchCallbacks: () => ft,
            nativeScheduleMicroTask: pt,
          };
        let lt = { parent: null, zone: new e(null, null) },
          Ct = null,
          It = 0;
        function ft() {}
        h("Zone", "Zone"), (o.Zone = e);
      })(
        (typeof window < "u" && window) || (typeof self < "u" && self) || global
      );
      const xt = Object.getOwnPropertyDescriptor,
        j = Object.defineProperty,
        M = Object.getPrototypeOf,
        P = Object.create,
        ut = Array.prototype.slice,
        at = "addEventListener",
        z = "removeEventListener",
        st = Zone.__symbol__(at),
        F = Zone.__symbol__(z),
        a = "true",
        X = "false",
        ct = Zone.__symbol__("");
      function rt(o, u) {
        return Zone.current.wrap(o, u);
      }
      function K(o, u, d, h, y) {
        return Zone.current.scheduleMacroTask(o, u, d, h, y);
      }
      const U = Zone.__symbol__,
        k = typeof window < "u",
        T = k ? window : void 0,
        R = (k && T) || ("object" == typeof self && self) || global,
        Q = "removeAttribute";
      function dt(o, u) {
        for (let d = o.length - 1; d >= 0; d--)
          "function" == typeof o[d] && (o[d] = rt(o[d], u + "_" + d));
        return o;
      }
      function _t(o) {
        return (
          !o ||
          (!1 !== o.writable &&
            !("function" == typeof o.get && typeof o.set > "u"))
        );
      }
      const Pt =
          typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
        it =
          !("nw" in R) &&
          typeof R.process < "u" &&
          "[object process]" === {}.toString.call(R.process),
        jt = !it && !Pt && !(!k || !T.HTMLElement),
        Wt =
          typeof R.process < "u" &&
          "[object process]" === {}.toString.call(R.process) &&
          !Pt &&
          !(!k || !T.HTMLElement),
        Ht = {},
        te = function (o) {
          if (!(o = o || R.event)) return;
          let u = Ht[o.type];
          u || (u = Ht[o.type] = U("ON_PROPERTY" + o.type));
          const d = this || o.target || R,
            h = d[u];
          let y;
          return (
            jt && d === T && "error" === o.type
              ? ((y =
                  h &&
                  h.call(
                    this,
                    o.message,
                    o.filename,
                    o.lineno,
                    o.colno,
                    o.error
                  )),
                !0 === y && o.preventDefault())
              : ((y = h && h.apply(this, arguments)),
                null != y && !y && o.preventDefault()),
            y
          );
        };
      function ee(o, u, d) {
        let h = xt(o, u);
        if (
          (!h && d && xt(d, u) && (h = { enumerable: !0, configurable: !0 }),
          !h || !h.configurable)
        )
          return;
        const y = U("on" + u + "patched");
        if (o.hasOwnProperty(y) && o[y]) return;
        delete h.writable, delete h.value;
        const n = h.get,
          t = h.set,
          e = u.slice(2);
        let r = Ht[e];
        r || (r = Ht[e] = U("ON_PROPERTY" + e)),
          (h.set = function (i) {
            let c = this;
            !c && o === R && (c = R),
              c &&
                ("function" == typeof c[r] && c.removeEventListener(e, te),
                t && t.call(c, null),
                (c[r] = i),
                "function" == typeof i && c.addEventListener(e, te, !1));
          }),
          (h.get = function () {
            let i = this;
            if ((!i && o === R && (i = R), !i)) return null;
            const c = i[r];
            if (c) return c;
            if (n) {
              let l = n.call(this);
              if (l)
                return (
                  h.set.call(this, l),
                  "function" == typeof i[Q] && i.removeAttribute(u),
                  l
                );
            }
            return null;
          }),
          j(o, u, h),
          (o[y] = !0);
      }
      function ne(o, u, d) {
        if (u) for (let h = 0; h < u.length; h++) ee(o, "on" + u[h], d);
        else {
          const h = [];
          for (const y in o) "on" == y.slice(0, 2) && h.push(y);
          for (let y = 0; y < h.length; y++) ee(o, h[y], d);
        }
      }
      const Bt = U("originalInstance");
      function Mt(o) {
        const u = R[o];
        if (!u) return;
        (R[U(o)] = u),
          (R[o] = function () {
            const y = dt(arguments, o);
            switch (y.length) {
              case 0:
                this[Bt] = new u();
                break;
              case 1:
                this[Bt] = new u(y[0]);
                break;
              case 2:
                this[Bt] = new u(y[0], y[1]);
                break;
              case 3:
                this[Bt] = new u(y[0], y[1], y[2]);
                break;
              case 4:
                this[Bt] = new u(y[0], y[1], y[2], y[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          Rt(R[o], u);
        const d = new u(function () {});
        let h;
        for (h in d)
          ("XMLHttpRequest" === o && "responseBlob" === h) ||
            (function (y) {
              "function" == typeof d[y]
                ? (R[o].prototype[y] = function () {
                    return this[Bt][y].apply(this[Bt], arguments);
                  })
                : j(R[o].prototype, y, {
                    set: function (n) {
                      "function" == typeof n
                        ? ((this[Bt][y] = rt(n, o + "." + y)),
                          Rt(this[Bt][y], n))
                        : (this[Bt][y] = n);
                    },
                    get: function () {
                      return this[Bt][y];
                    },
                  });
            })(h);
        for (h in u)
          "prototype" !== h && u.hasOwnProperty(h) && (R[o][h] = u[h]);
      }
      function bt(o, u, d) {
        let h = o;
        for (; h && !h.hasOwnProperty(u); ) h = M(h);
        !h && o[u] && (h = o);
        const y = U(u);
        let n = null;
        if (
          h &&
          (!(n = h[y]) || !h.hasOwnProperty(y)) &&
          ((n = h[y] = h[u]), _t(h && xt(h, u)))
        ) {
          const e = d(n, y, u);
          (h[u] = function () {
            return e(this, arguments);
          }),
            Rt(h[u], n);
        }
        return n;
      }
      function re(o, u, d) {
        let h = null;
        function y(n) {
          const t = n.data;
          return (
            (t.args[t.cbIdx] = function () {
              n.invoke.apply(this, arguments);
            }),
            h.apply(t.target, t.args),
            n
          );
        }
        h = bt(
          o,
          u,
          (n) =>
            function (t, e) {
              const r = d(t, e);
              return r.cbIdx >= 0 && "function" == typeof e[r.cbIdx]
                ? K(r.name, e[r.cbIdx], r, y)
                : n.apply(t, e);
            }
        );
      }
      function Rt(o, u) {
        o[U("OriginalDelegate")] = u;
      }
      let ie = !1,
        qt = !1;
      function ae() {
        if (ie) return qt;
        ie = !0;
        try {
          const o = T.navigator.userAgent;
          (-1 !== o.indexOf("MSIE ") ||
            -1 !== o.indexOf("Trident/") ||
            -1 !== o.indexOf("Edge/")) &&
            (qt = !0);
        } catch {}
        return qt;
      }
      Zone.__load_patch("ZoneAwarePromise", (o, u, d) => {
        const h = Object.getOwnPropertyDescriptor,
          y = Object.defineProperty,
          t = d.symbol,
          e = [],
          r = !0 === o[t("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          i = t("Promise"),
          c = t("then"),
          l = "__creationTrace__";
        (d.onUnhandledError = (E) => {
          if (d.showUncaughtError()) {
            const _ = E && E.rejection;
            _
              ? console.error(
                  "Unhandled Promise rejection:",
                  _ instanceof Error ? _.message : _,
                  "; Zone:",
                  E.zone.name,
                  "; Task:",
                  E.task && E.task.source,
                  "; Value:",
                  _,
                  _ instanceof Error ? _.stack : void 0
                )
              : console.error(E);
          }
        }),
          (d.microtaskDrainDone = () => {
            for (; e.length; ) {
              const E = e.shift();
              try {
                E.zone.runGuarded(() => {
                  throw E.throwOriginal ? E.rejection : E;
                });
              } catch (_) {
                x(_);
              }
            }
          });
        const g = t("unhandledPromiseRejectionHandler");
        function x(E) {
          d.onUnhandledError(E);
          try {
            const _ = u[g];
            "function" == typeof _ && _.call(this, E);
          } catch {}
        }
        function v(E) {
          return E && E.then;
        }
        function A(E) {
          return E;
        }
        function L(E) {
          return s.reject(E);
        }
        const pt = t("state"),
          Z = t("value"),
          I = t("finally"),
          gt = t("parentPromiseValue"),
          J = t("parentPromiseState"),
          yt = "Promise.then",
          Y = null,
          B = !0,
          tt = !1,
          w = 0;
        function W(E, _) {
          return (p) => {
            try {
              Et(E, _, p);
            } catch (m) {
              Et(E, !1, m);
            }
          };
        }
        const N = function () {
            let E = !1;
            return function (p) {
              return function () {
                E || ((E = !0), p.apply(null, arguments));
              };
            };
          },
          kt = "Promise resolved with itself",
          At = t("currentTaskTrace");
        function Et(E, _, p) {
          const m = N();
          if (E === p) throw new TypeError(kt);
          if (E[pt] === Y) {
            let S = null;
            try {
              ("object" == typeof p || "function" == typeof p) &&
                (S = p && p.then);
            } catch (O) {
              return (
                m(() => {
                  Et(E, !1, O);
                })(),
                E
              );
            }
            if (
              _ !== tt &&
              p instanceof s &&
              p.hasOwnProperty(pt) &&
              p.hasOwnProperty(Z) &&
              p[pt] !== Y
            )
              Ct(p), Et(E, p[pt], p[Z]);
            else if (_ !== tt && "function" == typeof S)
              try {
                S.call(p, m(W(E, _)), m(W(E, !1)));
              } catch (O) {
                m(() => {
                  Et(E, !1, O);
                })();
              }
            else {
              E[pt] = _;
              const O = E[Z];
              if (
                ((E[Z] = p),
                E[I] === I && _ === B && ((E[pt] = E[J]), (E[Z] = E[gt])),
                _ === tt && p instanceof Error)
              ) {
                const C =
                  u.currentTask && u.currentTask.data && u.currentTask.data[l];
                C &&
                  y(p, At, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: C,
                  });
              }
              for (let C = 0; C < O.length; )
                It(E, O[C++], O[C++], O[C++], O[C++]);
              if (0 == O.length && _ == tt) {
                E[pt] = w;
                let C = p;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      (function n(E) {
                        return E && E.toString === Object.prototype.toString
                          ? ((E.constructor && E.constructor.name) || "") +
                              ": " +
                              JSON.stringify(E)
                          : E
                          ? E.toString()
                          : Object.prototype.toString.call(E);
                      })(p) +
                      (p && p.stack ? "\n" + p.stack : "")
                  );
                } catch (G) {
                  C = G;
                }
                r && (C.throwOriginal = !0),
                  (C.rejection = p),
                  (C.promise = E),
                  (C.zone = u.current),
                  (C.task = u.currentTask),
                  e.push(C),
                  d.scheduleMicroTask();
              }
            }
          }
          return E;
        }
        const lt = t("rejectionHandledHandler");
        function Ct(E) {
          if (E[pt] === w) {
            try {
              const _ = u[lt];
              _ &&
                "function" == typeof _ &&
                _.call(this, { rejection: E[Z], promise: E });
            } catch {}
            E[pt] = tt;
            for (let _ = 0; _ < e.length; _++)
              E === e[_].promise && e.splice(_, 1);
          }
        }
        function It(E, _, p, m, S) {
          Ct(E);
          const O = E[pt],
            C = O
              ? "function" == typeof m
                ? m
                : A
              : "function" == typeof S
              ? S
              : L;
          _.scheduleMicroTask(
            yt,
            () => {
              try {
                const G = E[Z],
                  V = !!p && I === p[I];
                V && ((p[gt] = G), (p[J] = O));
                const $ = _.run(C, void 0, V && C !== L && C !== A ? [] : [G]);
                Et(p, !0, $);
              } catch (G) {
                Et(p, !1, G);
              }
            },
            p
          );
        }
        const q = function () {},
          b = o.AggregateError;
        class s {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(_) {
            return Et(new this(null), B, _);
          }
          static reject(_) {
            return Et(new this(null), tt, _);
          }
          static any(_) {
            if (!_ || "function" != typeof _[Symbol.iterator])
              return Promise.reject(new b([], "All promises were rejected"));
            const p = [];
            let m = 0;
            try {
              for (let C of _) m++, p.push(s.resolve(C));
            } catch {
              return Promise.reject(new b([], "All promises were rejected"));
            }
            if (0 === m)
              return Promise.reject(new b([], "All promises were rejected"));
            let S = !1;
            const O = [];
            return new s((C, G) => {
              for (let V = 0; V < p.length; V++)
                p[V].then(
                  ($) => {
                    S || ((S = !0), C($));
                  },
                  ($) => {
                    O.push($),
                      m--,
                      0 === m &&
                        ((S = !0), G(new b(O, "All promises were rejected")));
                  }
                );
            });
          }
          static race(_) {
            let p,
              m,
              S = new this((G, V) => {
                (p = G), (m = V);
              });
            function O(G) {
              p(G);
            }
            function C(G) {
              m(G);
            }
            for (let G of _) v(G) || (G = this.resolve(G)), G.then(O, C);
            return S;
          }
          static all(_) {
            return s.allWithCallback(_);
          }
          static allSettled(_) {
            return (
              this && this.prototype instanceof s ? this : s
            ).allWithCallback(_, {
              thenCallback: (m) => ({ status: "fulfilled", value: m }),
              errorCallback: (m) => ({ status: "rejected", reason: m }),
            });
          }
          static allWithCallback(_, p) {
            let m,
              S,
              O = new this(($, et) => {
                (m = $), (S = et);
              }),
              C = 2,
              G = 0;
            const V = [];
            for (let $ of _) {
              v($) || ($ = this.resolve($));
              const et = G;
              try {
                $.then(
                  (nt) => {
                    (V[et] = p ? p.thenCallback(nt) : nt), C--, 0 === C && m(V);
                  },
                  (nt) => {
                    p
                      ? ((V[et] = p.errorCallback(nt)), C--, 0 === C && m(V))
                      : S(nt);
                  }
                );
              } catch (nt) {
                S(nt);
              }
              C++, G++;
            }
            return (C -= 2), 0 === C && m(V), O;
          }
          constructor(_) {
            const p = this;
            if (!(p instanceof s))
              throw new Error("Must be an instanceof Promise.");
            (p[pt] = Y), (p[Z] = []);
            try {
              const m = N();
              _ && _(m(W(p, B)), m(W(p, tt)));
            } catch (m) {
              Et(p, !1, m);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return s;
          }
          then(_, p) {
            let m = this.constructor?.[Symbol.species];
            (!m || "function" != typeof m) && (m = this.constructor || s);
            const S = new m(q),
              O = u.current;
            return (
              this[pt] == Y ? this[Z].push(O, S, _, p) : It(this, O, S, _, p), S
            );
          }
          catch(_) {
            return this.then(null, _);
          }
          finally(_) {
            let p = this.constructor?.[Symbol.species];
            (!p || "function" != typeof p) && (p = s);
            const m = new p(q);
            m[I] = I;
            const S = u.current;
            return (
              this[pt] == Y ? this[Z].push(S, m, _, _) : It(this, S, m, _, _), m
            );
          }
        }
        (s.resolve = s.resolve),
          (s.reject = s.reject),
          (s.race = s.race),
          (s.all = s.all);
        const f = (o[i] = o.Promise);
        o.Promise = s;
        const D = t("thenPatched");
        function H(E) {
          const _ = E.prototype,
            p = h(_, "then");
          if (p && (!1 === p.writable || !p.configurable)) return;
          const m = _.then;
          (_[c] = m),
            (E.prototype.then = function (S, O) {
              return new s((G, V) => {
                m.call(this, G, V);
              }).then(S, O);
            }),
            (E[D] = !0);
        }
        return (
          (d.patchThen = H),
          f &&
            (H(f),
            bt(o, "fetch", (E) =>
              (function mt(E) {
                return function (_, p) {
                  let m = E.apply(_, p);
                  if (m instanceof s) return m;
                  let S = m.constructor;
                  return S[D] || H(S), m;
                };
              })(E)
            )),
          (Promise[u.__symbol__("uncaughtPromiseErrors")] = e),
          s
        );
      }),
        Zone.__load_patch("toString", (o) => {
          const u = Function.prototype.toString,
            d = U("OriginalDelegate"),
            h = U("Promise"),
            y = U("Error"),
            n = function () {
              if ("function" == typeof this) {
                const i = this[d];
                if (i)
                  return "function" == typeof i
                    ? u.call(i)
                    : Object.prototype.toString.call(i);
                if (this === Promise) {
                  const c = o[h];
                  if (c) return u.call(c);
                }
                if (this === Error) {
                  const c = o[y];
                  if (c) return u.call(c);
                }
              }
              return u.call(this);
            };
          (n[d] = u), (Function.prototype.toString = n);
          const t = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : t.call(this);
          };
        });
      let ot = !1;
      if (typeof window < "u")
        try {
          const o = Object.defineProperty({}, "passive", {
            get: function () {
              ot = !0;
            },
          });
          window.addEventListener("test", o, o),
            window.removeEventListener("test", o, o);
        } catch {
          ot = !1;
        }
      const Tt = { useG: !0 },
        wt = {},
        Xt = {},
        Yt = new RegExp("^" + ct + "(\\w+)(true|false)$"),
        zt = U("propagationStopped");
      function Jt(o, u) {
        const d = (u ? u(o) : o) + X,
          h = (u ? u(o) : o) + a,
          y = ct + d,
          n = ct + h;
        (wt[o] = {}), (wt[o][X] = y), (wt[o][a] = n);
      }
      function Dt(o, u, d, h) {
        const y = (h && h.add) || at,
          n = (h && h.rm) || z,
          t = (h && h.listeners) || "eventListeners",
          e = (h && h.rmAll) || "removeAllListeners",
          r = U(y),
          i = "." + y + ":",
          c = "prependListener",
          l = "." + c + ":",
          g = function (Z, I, gt) {
            if (Z.isRemoved) return;
            const J = Z.callback;
            let yt;
            "object" == typeof J &&
              J.handleEvent &&
              ((Z.callback = (B) => J.handleEvent(B)),
              (Z.originalDelegate = J));
            try {
              Z.invoke(Z, I, [gt]);
            } catch (B) {
              yt = B;
            }
            const Y = Z.options;
            return (
              Y &&
                "object" == typeof Y &&
                Y.once &&
                I[n].call(
                  I,
                  gt.type,
                  Z.originalDelegate ? Z.originalDelegate : Z.callback,
                  Y
                ),
              yt
            );
          };
        function x(Z, I, gt) {
          if (!(I = I || o.event)) return;
          const J = Z || I.target || o,
            yt = J[wt[I.type][gt ? a : X]];
          if (yt) {
            const Y = [];
            if (1 === yt.length) {
              const B = g(yt[0], J, I);
              B && Y.push(B);
            } else {
              const B = yt.slice();
              for (let tt = 0; tt < B.length && (!I || !0 !== I[zt]); tt++) {
                const w = g(B[tt], J, I);
                w && Y.push(w);
              }
            }
            if (1 === Y.length) throw Y[0];
            for (let B = 0; B < Y.length; B++) {
              const tt = Y[B];
              u.nativeScheduleMicroTask(() => {
                throw tt;
              });
            }
          }
        }
        const v = function (Z) {
            return x(this, Z, !1);
          },
          A = function (Z) {
            return x(this, Z, !0);
          };
        function L(Z, I) {
          if (!Z) return !1;
          let gt = !0;
          I && void 0 !== I.useG && (gt = I.useG);
          const J = I && I.vh;
          let yt = !0;
          I && void 0 !== I.chkDup && (yt = I.chkDup);
          let Y = !1;
          I && void 0 !== I.rt && (Y = I.rt);
          let B = Z;
          for (; B && !B.hasOwnProperty(y); ) B = M(B);
          if ((!B && Z[y] && (B = Z), !B || B[r])) return !1;
          const tt = I && I.eventNameToString,
            w = {},
            W = (B[r] = B[y]),
            N = (B[U(n)] = B[n]),
            kt = (B[U(t)] = B[t]),
            At = (B[U(e)] = B[e]);
          let Et;
          I && I.prepend && (Et = B[U(I.prepend)] = B[I.prepend]);
          const s = gt
              ? function (p) {
                  if (!w.isExisting)
                    return W.call(
                      w.target,
                      w.eventName,
                      w.capture ? A : v,
                      w.options
                    );
                }
              : function (p) {
                  return W.call(w.target, w.eventName, p.invoke, w.options);
                },
            f = gt
              ? function (p) {
                  if (!p.isRemoved) {
                    const m = wt[p.eventName];
                    let S;
                    m && (S = m[p.capture ? a : X]);
                    const O = S && p.target[S];
                    if (O)
                      for (let C = 0; C < O.length; C++)
                        if (O[C] === p) {
                          O.splice(C, 1),
                            (p.isRemoved = !0),
                            0 === O.length &&
                              ((p.allRemoved = !0), (p.target[S] = null));
                          break;
                        }
                  }
                  if (p.allRemoved)
                    return N.call(
                      p.target,
                      p.eventName,
                      p.capture ? A : v,
                      p.options
                    );
                }
              : function (p) {
                  return N.call(p.target, p.eventName, p.invoke, p.options);
                },
            H =
              I && I.diff
                ? I.diff
                : function (p, m) {
                    const S = typeof m;
                    return (
                      ("function" === S && p.callback === m) ||
                      ("object" === S && p.originalDelegate === m)
                    );
                  },
            mt = Zone[U("UNPATCHED_EVENTS")],
            E = o[U("PASSIVE_EVENTS")],
            _ = function (p, m, S, O, C = !1, G = !1) {
              return function () {
                const V = this || o;
                let $ = arguments[0];
                I && I.transferEventName && ($ = I.transferEventName($));
                let et = arguments[1];
                if (!et) return p.apply(this, arguments);
                if (it && "uncaughtException" === $)
                  return p.apply(this, arguments);
                let nt = !1;
                if ("function" != typeof et) {
                  if (!et.handleEvent) return p.apply(this, arguments);
                  nt = !0;
                }
                if (J && !J(p, et, V, arguments)) return;
                const Ot = ot && !!E && -1 !== E.indexOf($),
                  St = (function lt(p, m) {
                    return !ot && "object" == typeof p && p
                      ? !!p.capture
                      : ot && m
                      ? "boolean" == typeof p
                        ? { capture: p, passive: !0 }
                        : p
                        ? "object" == typeof p && !1 !== p.passive
                          ? { ...p, passive: !0 }
                          : p
                        : { passive: !0 }
                      : p;
                  })(arguments[2], Ot);
                if (mt)
                  for (let Zt = 0; Zt < mt.length; Zt++)
                    if ($ === mt[Zt])
                      return Ot
                        ? p.call(V, $, et, St)
                        : p.apply(this, arguments);
                const de = !!St && ("boolean" == typeof St || St.capture),
                  Ee = !(!St || "object" != typeof St) && St.once,
                  we = Zone.current;
                let ye = wt[$];
                ye || (Jt($, tt), (ye = wt[$]));
                const _e = ye[de ? a : X];
                let ce,
                  $t = V[_e],
                  me = !1;
                if ($t) {
                  if (((me = !0), yt))
                    for (let Zt = 0; Zt < $t.length; Zt++)
                      if (H($t[Zt], et)) return;
                } else $t = V[_e] = [];
                const ge = V.constructor.name,
                  Te = Xt[ge];
                Te && (ce = Te[$]),
                  ce || (ce = ge + m + (tt ? tt($) : $)),
                  (w.options = St),
                  Ee && (w.options.once = !1),
                  (w.target = V),
                  (w.capture = de),
                  (w.eventName = $),
                  (w.isExisting = me);
                const Qt = gt ? Tt : void 0;
                Qt && (Qt.taskData = w);
                const Ut = we.scheduleEventTask(ce, et, Qt, S, O);
                return (
                  (w.target = null),
                  Qt && (Qt.taskData = null),
                  Ee && (St.once = !0),
                  (!ot && "boolean" == typeof Ut.options) || (Ut.options = St),
                  (Ut.target = V),
                  (Ut.capture = de),
                  (Ut.eventName = $),
                  nt && (Ut.originalDelegate = et),
                  G ? $t.unshift(Ut) : $t.push(Ut),
                  C ? V : void 0
                );
              };
            };
          return (
            (B[y] = _(W, i, s, f, Y)),
            Et &&
              (B[c] = _(
                Et,
                l,
                function (p) {
                  return Et.call(w.target, w.eventName, p.invoke, w.options);
                },
                f,
                Y,
                !0
              )),
            (B[n] = function () {
              const p = this || o;
              let m = arguments[0];
              I && I.transferEventName && (m = I.transferEventName(m));
              const S = arguments[2],
                O = !!S && ("boolean" == typeof S || S.capture),
                C = arguments[1];
              if (!C) return N.apply(this, arguments);
              if (J && !J(N, C, p, arguments)) return;
              const G = wt[m];
              let V;
              G && (V = G[O ? a : X]);
              const $ = V && p[V];
              if ($)
                for (let et = 0; et < $.length; et++) {
                  const nt = $[et];
                  if (H(nt, C))
                    return (
                      $.splice(et, 1),
                      (nt.isRemoved = !0),
                      0 === $.length &&
                        ((nt.allRemoved = !0),
                        (p[V] = null),
                        "string" == typeof m) &&
                        (p[ct + "ON_PROPERTY" + m] = null),
                      nt.zone.cancelTask(nt),
                      Y ? p : void 0
                    );
                }
              return N.apply(this, arguments);
            }),
            (B[t] = function () {
              const p = this || o;
              let m = arguments[0];
              I && I.transferEventName && (m = I.transferEventName(m));
              const S = [],
                O = Gt(p, tt ? tt(m) : m);
              for (let C = 0; C < O.length; C++) {
                const G = O[C];
                S.push(G.originalDelegate ? G.originalDelegate : G.callback);
              }
              return S;
            }),
            (B[e] = function () {
              const p = this || o;
              let m = arguments[0];
              if (m) {
                I && I.transferEventName && (m = I.transferEventName(m));
                const S = wt[m];
                if (S) {
                  const G = p[S[X]],
                    V = p[S[a]];
                  if (G) {
                    const $ = G.slice();
                    for (let et = 0; et < $.length; et++) {
                      const nt = $[et];
                      this[n].call(
                        this,
                        m,
                        nt.originalDelegate ? nt.originalDelegate : nt.callback,
                        nt.options
                      );
                    }
                  }
                  if (V) {
                    const $ = V.slice();
                    for (let et = 0; et < $.length; et++) {
                      const nt = $[et];
                      this[n].call(
                        this,
                        m,
                        nt.originalDelegate ? nt.originalDelegate : nt.callback,
                        nt.options
                      );
                    }
                  }
                }
              } else {
                const S = Object.keys(p);
                for (let O = 0; O < S.length; O++) {
                  const G = Yt.exec(S[O]);
                  let V = G && G[1];
                  V && "removeListener" !== V && this[e].call(this, V);
                }
                this[e].call(this, "removeListener");
              }
              if (Y) return this;
            }),
            Rt(B[y], W),
            Rt(B[n], N),
            At && Rt(B[e], At),
            kt && Rt(B[t], kt),
            !0
          );
        }
        let pt = [];
        for (let Z = 0; Z < d.length; Z++) pt[Z] = L(d[Z], h);
        return pt;
      }
      function Gt(o, u) {
        if (!u) {
          const n = [];
          for (let t in o) {
            const e = Yt.exec(t);
            let r = e && e[1];
            if (r && (!u || r === u)) {
              const i = o[t];
              if (i) for (let c = 0; c < i.length; c++) n.push(i[c]);
            }
          }
          return n;
        }
        let d = wt[u];
        d || (Jt(u), (d = wt[u]));
        const h = o[d[X]],
          y = o[d[a]];
        return h ? (y ? h.concat(y) : h.slice()) : y ? y.slice() : [];
      }
      function oe(o, u) {
        const d = o.Event;
        d &&
          d.prototype &&
          u.patchMethod(
            d.prototype,
            "stopImmediatePropagation",
            (h) =>
              function (y, n) {
                (y[zt] = !0), h && h.apply(y, n);
              }
          );
      }
      function le(o, u, d, h, y) {
        const n = Zone.__symbol__(h);
        if (u[n]) return;
        const t = (u[n] = u[h]);
        (u[h] = function (e, r, i) {
          return (
            r &&
              r.prototype &&
              y.forEach(function (c) {
                const l = `${d}.${h}::` + c,
                  g = r.prototype;
                try {
                  if (g.hasOwnProperty(c)) {
                    const x = o.ObjectGetOwnPropertyDescriptor(g, c);
                    x && x.value
                      ? ((x.value = o.wrapWithCurrentZone(x.value, l)),
                        o._redefineProperty(r.prototype, c, x))
                      : g[c] && (g[c] = o.wrapWithCurrentZone(g[c], l));
                  } else g[c] && (g[c] = o.wrapWithCurrentZone(g[c], l));
                } catch {}
              }),
            t.call(u, e, r, i)
          );
        }),
          o.attachOriginToPatched(u[h], t);
      }
      function Kt(o, u, d) {
        if (!d || 0 === d.length) return u;
        const h = d.filter((n) => n.target === o);
        if (!h || 0 === h.length) return u;
        const y = h[0].ignoreProperties;
        return u.filter((n) => -1 === y.indexOf(n));
      }
      function Ft(o, u, d, h) {
        o && ne(o, Kt(o, u, d), h);
      }
      function vt(o) {
        return Object.getOwnPropertyNames(o)
          .filter((u) => u.startsWith("on") && u.length > 2)
          .map((u) => u.substring(2));
      }
      Zone.__load_patch("util", (o, u, d) => {
        const h = vt(o);
        (d.patchOnProperties = ne),
          (d.patchMethod = bt),
          (d.bindArguments = dt),
          (d.patchMacroTask = re);
        const y = u.__symbol__("BLACK_LISTED_EVENTS"),
          n = u.__symbol__("UNPATCHED_EVENTS");
        o[n] && (o[y] = o[n]),
          o[y] && (u[y] = u[n] = o[y]),
          (d.patchEventPrototype = oe),
          (d.patchEventTarget = Dt),
          (d.isIEOrEdge = ae),
          (d.ObjectDefineProperty = j),
          (d.ObjectGetOwnPropertyDescriptor = xt),
          (d.ObjectCreate = P),
          (d.ArraySlice = ut),
          (d.patchClass = Mt),
          (d.wrapWithCurrentZone = rt),
          (d.filterProperties = Kt),
          (d.attachOriginToPatched = Rt),
          (d._redefineProperty = Object.defineProperty),
          (d.patchCallbacks = le),
          (d.getGlobalObjects = () => ({
            globalSources: Xt,
            zoneSymbolEventNames: wt,
            eventNames: h,
            isBrowser: jt,
            isMix: Wt,
            isNode: it,
            TRUE_STR: a,
            FALSE_STR: X,
            ZONE_SYMBOL_PREFIX: ct,
            ADD_EVENT_LISTENER_STR: at,
            REMOVE_EVENT_LISTENER_STR: z,
          }));
      });
      const Nt = U("zoneTask");
      function Lt(o, u, d, h) {
        let y = null,
          n = null;
        d += h;
        const t = {};
        function e(i) {
          const c = i.data;
          return (
            (c.args[0] = function () {
              return i.invoke.apply(this, arguments);
            }),
            (c.handleId = y.apply(o, c.args)),
            i
          );
        }
        function r(i) {
          return n.call(o, i.data.handleId);
        }
        (y = bt(
          o,
          (u += h),
          (i) =>
            function (c, l) {
              if ("function" == typeof l[0]) {
                const g = {
                    isPeriodic: "Interval" === h,
                    delay:
                      "Timeout" === h || "Interval" === h ? l[1] || 0 : void 0,
                    args: l,
                  },
                  x = l[0];
                l[0] = function () {
                  try {
                    return x.apply(this, arguments);
                  } finally {
                    g.isPeriodic ||
                      ("number" == typeof g.handleId
                        ? delete t[g.handleId]
                        : g.handleId && (g.handleId[Nt] = null));
                  }
                };
                const v = K(u, l[0], g, e, r);
                if (!v) return v;
                const A = v.data.handleId;
                return (
                  "number" == typeof A ? (t[A] = v) : A && (A[Nt] = v),
                  A &&
                    A.ref &&
                    A.unref &&
                    "function" == typeof A.ref &&
                    "function" == typeof A.unref &&
                    ((v.ref = A.ref.bind(A)), (v.unref = A.unref.bind(A))),
                  "number" == typeof A || A ? A : v
                );
              }
              return i.apply(o, l);
            }
        )),
          (n = bt(
            o,
            d,
            (i) =>
              function (c, l) {
                const g = l[0];
                let x;
                "number" == typeof g
                  ? (x = t[g])
                  : ((x = g && g[Nt]), x || (x = g)),
                  x && "string" == typeof x.type
                    ? "notScheduled" !== x.state &&
                      ((x.cancelFn && x.data.isPeriodic) || 0 === x.runCount) &&
                      ("number" == typeof g ? delete t[g] : g && (g[Nt] = null),
                      x.zone.cancelTask(x))
                    : i.apply(o, l);
              }
          ));
      }
      Zone.__load_patch("legacy", (o) => {
        const u = o[Zone.__symbol__("legacyPatch")];
        u && u();
      }),
        Zone.__load_patch("timers", (o) => {
          const u = "set",
            d = "clear";
          Lt(o, u, d, "Timeout"),
            Lt(o, u, d, "Interval"),
            Lt(o, u, d, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (o) => {
          Lt(o, "request", "cancel", "AnimationFrame"),
            Lt(o, "mozRequest", "mozCancel", "AnimationFrame"),
            Lt(o, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (o, u) => {
          const d = ["alert", "prompt", "confirm"];
          for (let h = 0; h < d.length; h++)
            bt(
              o,
              d[h],
              (n, t, e) =>
                function (r, i) {
                  return u.current.run(n, o, i, e);
                }
            );
        }),
        Zone.__load_patch("EventTarget", (o, u, d) => {
          (function Vt(o, u) {
            u.patchEventPrototype(o, u);
          })(o, d),
            (function se(o, u) {
              if (Zone[u.symbol("patchEventTarget")]) return;
              const {
                eventNames: d,
                zoneSymbolEventNames: h,
                TRUE_STR: y,
                FALSE_STR: n,
                ZONE_SYMBOL_PREFIX: t,
              } = u.getGlobalObjects();
              for (let r = 0; r < d.length; r++) {
                const i = d[r],
                  g = t + (i + n),
                  x = t + (i + y);
                (h[i] = {}), (h[i][n] = g), (h[i][y] = x);
              }
              const e = o.EventTarget;
              e && e.prototype && u.patchEventTarget(o, u, [e && e.prototype]);
            })(o, d);
          const h = o.XMLHttpRequestEventTarget;
          h && h.prototype && d.patchEventTarget(o, d, [h.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (o, u, d) => {
          Mt("MutationObserver"), Mt("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (o, u, d) => {
          Mt("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (o, u, d) => {
          Mt("FileReader");
        }),
        Zone.__load_patch("on_property", (o, u, d) => {
          !(function fe(o, u) {
            if ((it && !Wt) || Zone[o.symbol("patchEvents")]) return;
            const d = u.__Zone_ignore_on_properties;
            let h = [];
            if (jt) {
              const y = window;
              h = h.concat([
                "Document",
                "SVGElement",
                "Element",
                "HTMLElement",
                "HTMLBodyElement",
                "HTMLMediaElement",
                "HTMLFrameSetElement",
                "HTMLFrameElement",
                "HTMLIFrameElement",
                "HTMLMarqueeElement",
                "Worker",
              ]);
              const n = (function ue() {
                try {
                  const o = T.navigator.userAgent;
                  if (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/"))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: y, ignoreProperties: ["error"] }]
                : [];
              Ft(y, vt(y), d && d.concat(n), M(y));
            }
            h = h.concat([
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "IDBIndex",
              "IDBRequest",
              "IDBOpenDBRequest",
              "IDBDatabase",
              "IDBTransaction",
              "IDBCursor",
              "WebSocket",
            ]);
            for (let y = 0; y < h.length; y++) {
              const n = u[h[y]];
              n && n.prototype && Ft(n.prototype, vt(n.prototype), d);
            }
          })(d, o);
        }),
        Zone.__load_patch("customElements", (o, u, d) => {
          !(function pe(o, u) {
            const { isBrowser: d, isMix: h } = u.getGlobalObjects();
            (d || h) &&
              o.customElements &&
              "customElements" in o &&
              u.patchCallbacks(
                u,
                o.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                ]
              );
          })(o, d);
        }),
        Zone.__load_patch("XHR", (o, u) => {
          !(function r(i) {
            const c = i.XMLHttpRequest;
            if (!c) return;
            const l = c.prototype;
            let x = l[st],
              v = l[F];
            if (!x) {
              const w = i.XMLHttpRequestEventTarget;
              if (w) {
                const W = w.prototype;
                (x = W[st]), (v = W[F]);
              }
            }
            const A = "readystatechange",
              L = "scheduled";
            function pt(w) {
              const W = w.data,
                N = W.target;
              (N[n] = !1), (N[e] = !1);
              const kt = N[y];
              x || ((x = N[st]), (v = N[F])), kt && v.call(N, A, kt);
              const At = (N[y] = () => {
                if (N.readyState === N.DONE)
                  if (!W.aborted && N[n] && w.state === L) {
                    const lt = N[u.__symbol__("loadfalse")];
                    if (0 !== N.status && lt && lt.length > 0) {
                      const Ct = w.invoke;
                      (w.invoke = function () {
                        const It = N[u.__symbol__("loadfalse")];
                        for (let ft = 0; ft < It.length; ft++)
                          It[ft] === w && It.splice(ft, 1);
                        !W.aborted && w.state === L && Ct.call(w);
                      }),
                        lt.push(w);
                    } else w.invoke();
                  } else !W.aborted && !1 === N[n] && (N[e] = !0);
              });
              return (
                x.call(N, A, At),
                N[d] || (N[d] = w),
                B.apply(N, W.args),
                (N[n] = !0),
                w
              );
            }
            function Z() {}
            function I(w) {
              const W = w.data;
              return (W.aborted = !0), tt.apply(W.target, W.args);
            }
            const gt = bt(
                l,
                "open",
                () =>
                  function (w, W) {
                    return (w[h] = 0 == W[2]), (w[t] = W[1]), gt.apply(w, W);
                  }
              ),
              yt = U("fetchTaskAborting"),
              Y = U("fetchTaskScheduling"),
              B = bt(
                l,
                "send",
                () =>
                  function (w, W) {
                    if (!0 === u.current[Y] || w[h]) return B.apply(w, W);
                    {
                      const N = {
                          target: w,
                          url: w[t],
                          isPeriodic: !1,
                          args: W,
                          aborted: !1,
                        },
                        kt = K("XMLHttpRequest.send", Z, N, pt, I);
                      w &&
                        !0 === w[e] &&
                        !N.aborted &&
                        kt.state === L &&
                        kt.invoke();
                    }
                  }
              ),
              tt = bt(
                l,
                "abort",
                () =>
                  function (w, W) {
                    const N = (function g(w) {
                      return w[d];
                    })(w);
                    if (N && "string" == typeof N.type) {
                      if (null == N.cancelFn || (N.data && N.data.aborted))
                        return;
                      N.zone.cancelTask(N);
                    } else if (!0 === u.current[yt]) return tt.apply(w, W);
                  }
              );
          })(o);
          const d = U("xhrTask"),
            h = U("xhrSync"),
            y = U("xhrListener"),
            n = U("xhrScheduled"),
            t = U("xhrURL"),
            e = U("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (o) => {
          o.navigator &&
            o.navigator.geolocation &&
            (function ht(o, u) {
              const d = o.constructor.name;
              for (let h = 0; h < u.length; h++) {
                const y = u[h],
                  n = o[y];
                if (n) {
                  if (!_t(xt(o, y))) continue;
                  o[y] = ((e) => {
                    const r = function () {
                      return e.apply(this, dt(arguments, d + "." + y));
                    };
                    return Rt(r, e), r;
                  })(n);
                }
              }
            })(o.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (o, u) => {
          function d(h) {
            return function (y) {
              Gt(o, h).forEach((t) => {
                const e = o.PromiseRejectionEvent;
                if (e) {
                  const r = new e(h, {
                    promise: y.promise,
                    reason: y.rejection,
                  });
                  t.invoke(r);
                }
              });
            };
          }
          o.PromiseRejectionEvent &&
            ((u[U("unhandledPromiseRejectionHandler")] =
              d("unhandledrejection")),
            (u[U("rejectionHandledHandler")] = d("rejectionhandled")));
        }),
        Zone.__load_patch("queueMicrotask", (o, u, d) => {
          !(function he(o, u) {
            u.patchMethod(
              o,
              "queueMicrotask",
              (d) =>
                function (h, y) {
                  Zone.current.scheduleMicroTask("queueMicrotask", y[0]);
                }
            );
          })(o, d);
        });
    },
  },
  (xt) => {
    xt((xt.s = 824050));
  },
]);
