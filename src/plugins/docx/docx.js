var Ho = Object.defineProperty;
var Go = (e, t, r) => t in e ? Ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => (Go(e, typeof t != "symbol" ? t + "" : t, r), r);
import { TitleLevel as Xt, PaperDirection as Ko, NumberType as qo, RowFlex as ee, ElementType as gt, ListStyle as ti, VerticalAlign as je, TableBorder as Jr, ImageDisplay as Me, ListType as ji, ControlType as tr, TdBorder as mr } from "@hufe921/canvas-editor";
var gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pa = { exports: {} }, ma = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, ga = { exports: {} }, Vo = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, $o = Vo, Zo = Array.prototype.concat, Xo = Array.prototype.slice, Wi = ga.exports = function(t) {
  for (var r = [], i = 0, a = t.length; i < a; i++) {
    var o = t[i];
    $o(o) ? r = Zo.call(r, Xo.call(o)) : r.push(o);
  }
  return r;
};
Wi.wrap = function(e) {
  return function() {
    return e(Wi(arguments));
  };
};
var Yo = ga.exports, lr = ma, fr = Yo, wa = Object.hasOwnProperty, ya = /* @__PURE__ */ Object.create(null);
for (var Qr in lr)
  wa.call(lr, Qr) && (ya[lr[Qr]] = Qr);
var Vt = pa.exports = {
  to: {},
  get: {}
};
Vt.get = function(e) {
  var t = e.substring(0, 3).toLowerCase(), r, i;
  switch (t) {
    case "hsl":
      r = Vt.get.hsl(e), i = "hsl";
      break;
    case "hwb":
      r = Vt.get.hwb(e), i = "hwb";
      break;
    default:
      r = Vt.get.rgb(e), i = "rgb";
      break;
  }
  return r ? { model: i, value: r } : null;
};
Vt.get.rgb = function(e) {
  if (!e)
    return null;
  var t = /^#([a-f0-9]{3,4})$/i, r = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, i = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, o = /^(\w+)$/, s = [0, 0, 0, 1], n, c, w;
  if (n = e.match(r)) {
    for (w = n[2], n = n[1], c = 0; c < 3; c++) {
      var b = c * 2;
      s[c] = parseInt(n.slice(b, b + 2), 16);
    }
    w && (s[3] = parseInt(w, 16) / 255);
  } else if (n = e.match(t)) {
    for (n = n[1], w = n[3], c = 0; c < 3; c++)
      s[c] = parseInt(n[c] + n[c], 16);
    w && (s[3] = parseInt(w + w, 16) / 255);
  } else if (n = e.match(i)) {
    for (c = 0; c < 3; c++)
      s[c] = parseInt(n[c + 1], 0);
    n[4] && (n[5] ? s[3] = parseFloat(n[4]) * 0.01 : s[3] = parseFloat(n[4]));
  } else if (n = e.match(a)) {
    for (c = 0; c < 3; c++)
      s[c] = Math.round(parseFloat(n[c + 1]) * 2.55);
    n[4] && (n[5] ? s[3] = parseFloat(n[4]) * 0.01 : s[3] = parseFloat(n[4]));
  } else
    return (n = e.match(o)) ? n[1] === "transparent" ? [0, 0, 0, 0] : wa.call(lr, n[1]) ? (s = lr[n[1]], s[3] = 1, s) : null : null;
  for (c = 0; c < 3; c++)
    s[c] = ye(s[c], 0, 255);
  return s[3] = ye(s[3], 0, 1), s;
};
Vt.get.hsl = function(e) {
  if (!e)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, r = e.match(t);
  if (r) {
    var i = parseFloat(r[4]), a = (parseFloat(r[1]) % 360 + 360) % 360, o = ye(parseFloat(r[2]), 0, 100), s = ye(parseFloat(r[3]), 0, 100), n = ye(isNaN(i) ? 1 : i, 0, 1);
    return [a, o, s, n];
  }
  return null;
};
Vt.get.hwb = function(e) {
  if (!e)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, r = e.match(t);
  if (r) {
    var i = parseFloat(r[4]), a = (parseFloat(r[1]) % 360 + 360) % 360, o = ye(parseFloat(r[2]), 0, 100), s = ye(parseFloat(r[3]), 0, 100), n = ye(isNaN(i) ? 1 : i, 0, 1);
    return [a, o, s, n];
  }
  return null;
};
Vt.to.hex = function() {
  var e = fr(arguments);
  return "#" + wr(e[0]) + wr(e[1]) + wr(e[2]) + (e[3] < 1 ? wr(Math.round(e[3] * 255)) : "");
};
Vt.to.rgb = function() {
  var e = fr(arguments);
  return e.length < 4 || e[3] === 1 ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
};
Vt.to.rgb.percent = function() {
  var e = fr(arguments), t = Math.round(e[0] / 255 * 100), r = Math.round(e[1] / 255 * 100), i = Math.round(e[2] / 255 * 100);
  return e.length < 4 || e[3] === 1 ? "rgb(" + t + "%, " + r + "%, " + i + "%)" : "rgba(" + t + "%, " + r + "%, " + i + "%, " + e[3] + ")";
};
Vt.to.hsl = function() {
  var e = fr(arguments);
  return e.length < 4 || e[3] === 1 ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
};
Vt.to.hwb = function() {
  var e = fr(arguments), t = "";
  return e.length >= 4 && e[3] !== 1 && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
};
Vt.to.keyword = function(e) {
  return ya[e.slice(0, 3)];
};
function ye(e, t, r) {
  return Math.min(Math.max(t, e), r);
}
function wr(e) {
  var t = Math.round(e).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var Jo = pa.exports;
const cr = ma, va = {};
for (const e of Object.keys(cr))
  va[cr[e]] = e;
const wt = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var ba = wt;
for (const e of Object.keys(wt)) {
  if (!("channels" in wt[e]))
    throw new Error("missing channels property: " + e);
  if (!("labels" in wt[e]))
    throw new Error("missing channel labels property: " + e);
  if (wt[e].labels.length !== wt[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: t, labels: r } = wt[e];
  delete wt[e].channels, delete wt[e].labels, Object.defineProperty(wt[e], "channels", { value: t }), Object.defineProperty(wt[e], "labels", { value: r });
}
wt.rgb.hsl = function(e) {
  const t = e[0] / 255, r = e[1] / 255, i = e[2] / 255, a = Math.min(t, r, i), o = Math.max(t, r, i), s = o - a;
  let n, c;
  o === a ? n = 0 : t === o ? n = (r - i) / s : r === o ? n = 2 + (i - t) / s : i === o && (n = 4 + (t - r) / s), n = Math.min(n * 60, 360), n < 0 && (n += 360);
  const w = (a + o) / 2;
  return o === a ? c = 0 : w <= 0.5 ? c = s / (o + a) : c = s / (2 - o - a), [n, c * 100, w * 100];
};
wt.rgb.hsv = function(e) {
  let t, r, i, a, o;
  const s = e[0] / 255, n = e[1] / 255, c = e[2] / 255, w = Math.max(s, n, c), b = w - Math.min(s, n, c), g = function(_) {
    return (w - _) / 6 / b + 1 / 2;
  };
  return b === 0 ? (a = 0, o = 0) : (o = b / w, t = g(s), r = g(n), i = g(c), s === w ? a = i - r : n === w ? a = 1 / 3 + t - i : c === w && (a = 2 / 3 + r - t), a < 0 ? a += 1 : a > 1 && (a -= 1)), [
    a * 360,
    o * 100,
    w * 100
  ];
};
wt.rgb.hwb = function(e) {
  const t = e[0], r = e[1];
  let i = e[2];
  const a = wt.rgb.hsl(e)[0], o = 1 / 255 * Math.min(t, Math.min(r, i));
  return i = 1 - 1 / 255 * Math.max(t, Math.max(r, i)), [a, o * 100, i * 100];
};
wt.rgb.cmyk = function(e) {
  const t = e[0] / 255, r = e[1] / 255, i = e[2] / 255, a = Math.min(1 - t, 1 - r, 1 - i), o = (1 - t - a) / (1 - a) || 0, s = (1 - r - a) / (1 - a) || 0, n = (1 - i - a) / (1 - a) || 0;
  return [o * 100, s * 100, n * 100, a * 100];
};
function Qo(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
wt.rgb.keyword = function(e) {
  const t = va[e];
  if (t)
    return t;
  let r = 1 / 0, i;
  for (const a of Object.keys(cr)) {
    const o = cr[a], s = Qo(e, o);
    s < r && (r = s, i = a);
  }
  return i;
};
wt.keyword.rgb = function(e) {
  return cr[e];
};
wt.rgb.xyz = function(e) {
  let t = e[0] / 255, r = e[1] / 255, i = e[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92, i = i > 0.04045 ? ((i + 0.055) / 1.055) ** 2.4 : i / 12.92;
  const a = t * 0.4124 + r * 0.3576 + i * 0.1805, o = t * 0.2126 + r * 0.7152 + i * 0.0722, s = t * 0.0193 + r * 0.1192 + i * 0.9505;
  return [a * 100, o * 100, s * 100];
};
wt.rgb.lab = function(e) {
  const t = wt.rgb.xyz(e);
  let r = t[0], i = t[1], a = t[2];
  r /= 95.047, i /= 100, a /= 108.883, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116;
  const o = 116 * i - 16, s = 500 * (r - i), n = 200 * (i - a);
  return [o, s, n];
};
wt.hsl.rgb = function(e) {
  const t = e[0] / 360, r = e[1] / 100, i = e[2] / 100;
  let a, o, s;
  if (r === 0)
    return s = i * 255, [s, s, s];
  i < 0.5 ? a = i * (1 + r) : a = i + r - i * r;
  const n = 2 * i - a, c = [0, 0, 0];
  for (let w = 0; w < 3; w++)
    o = t + 1 / 3 * -(w - 1), o < 0 && o++, o > 1 && o--, 6 * o < 1 ? s = n + (a - n) * 6 * o : 2 * o < 1 ? s = a : 3 * o < 2 ? s = n + (a - n) * (2 / 3 - o) * 6 : s = n, c[w] = s * 255;
  return c;
};
wt.hsl.hsv = function(e) {
  const t = e[0];
  let r = e[1] / 100, i = e[2] / 100, a = r;
  const o = Math.max(i, 0.01);
  i *= 2, r *= i <= 1 ? i : 2 - i, a *= o <= 1 ? o : 2 - o;
  const s = (i + r) / 2, n = i === 0 ? 2 * a / (o + a) : 2 * r / (i + r);
  return [t, n * 100, s * 100];
};
wt.hsv.rgb = function(e) {
  const t = e[0] / 60, r = e[1] / 100;
  let i = e[2] / 100;
  const a = Math.floor(t) % 6, o = t - Math.floor(t), s = 255 * i * (1 - r), n = 255 * i * (1 - r * o), c = 255 * i * (1 - r * (1 - o));
  switch (i *= 255, a) {
    case 0:
      return [i, c, s];
    case 1:
      return [n, i, s];
    case 2:
      return [s, i, c];
    case 3:
      return [s, n, i];
    case 4:
      return [c, s, i];
    case 5:
      return [i, s, n];
  }
};
wt.hsv.hsl = function(e) {
  const t = e[0], r = e[1] / 100, i = e[2] / 100, a = Math.max(i, 0.01);
  let o, s;
  s = (2 - r) * i;
  const n = (2 - r) * a;
  return o = r * a, o /= n <= 1 ? n : 2 - n, o = o || 0, s /= 2, [t, o * 100, s * 100];
};
wt.hwb.rgb = function(e) {
  const t = e[0] / 360;
  let r = e[1] / 100, i = e[2] / 100;
  const a = r + i;
  let o;
  a > 1 && (r /= a, i /= a);
  const s = Math.floor(6 * t), n = 1 - i;
  o = 6 * t - s, s & 1 && (o = 1 - o);
  const c = r + o * (n - r);
  let w, b, g;
  switch (s) {
    default:
    case 6:
    case 0:
      w = n, b = c, g = r;
      break;
    case 1:
      w = c, b = n, g = r;
      break;
    case 2:
      w = r, b = n, g = c;
      break;
    case 3:
      w = r, b = c, g = n;
      break;
    case 4:
      w = c, b = r, g = n;
      break;
    case 5:
      w = n, b = r, g = c;
      break;
  }
  return [w * 255, b * 255, g * 255];
};
wt.cmyk.rgb = function(e) {
  const t = e[0] / 100, r = e[1] / 100, i = e[2] / 100, a = e[3] / 100, o = 1 - Math.min(1, t * (1 - a) + a), s = 1 - Math.min(1, r * (1 - a) + a), n = 1 - Math.min(1, i * (1 - a) + a);
  return [o * 255, s * 255, n * 255];
};
wt.xyz.rgb = function(e) {
  const t = e[0] / 100, r = e[1] / 100, i = e[2] / 100;
  let a, o, s;
  return a = t * 3.2406 + r * -1.5372 + i * -0.4986, o = t * -0.9689 + r * 1.8758 + i * 0.0415, s = t * 0.0557 + r * -0.204 + i * 1.057, a = a > 31308e-7 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, a = Math.min(Math.max(0, a), 1), o = Math.min(Math.max(0, o), 1), s = Math.min(Math.max(0, s), 1), [a * 255, o * 255, s * 255];
};
wt.xyz.lab = function(e) {
  let t = e[0], r = e[1], i = e[2];
  t /= 95.047, r /= 100, i /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116;
  const a = 116 * r - 16, o = 500 * (t - r), s = 200 * (r - i);
  return [a, o, s];
};
wt.lab.xyz = function(e) {
  const t = e[0], r = e[1], i = e[2];
  let a, o, s;
  o = (t + 16) / 116, a = r / 500 + o, s = o - i / 200;
  const n = o ** 3, c = a ** 3, w = s ** 3;
  return o = n > 8856e-6 ? n : (o - 16 / 116) / 7.787, a = c > 8856e-6 ? c : (a - 16 / 116) / 7.787, s = w > 8856e-6 ? w : (s - 16 / 116) / 7.787, a *= 95.047, o *= 100, s *= 108.883, [a, o, s];
};
wt.lab.lch = function(e) {
  const t = e[0], r = e[1], i = e[2];
  let a;
  a = Math.atan2(i, r) * 360 / 2 / Math.PI, a < 0 && (a += 360);
  const s = Math.sqrt(r * r + i * i);
  return [t, s, a];
};
wt.lch.lab = function(e) {
  const t = e[0], r = e[1], a = e[2] / 360 * 2 * Math.PI, o = r * Math.cos(a), s = r * Math.sin(a);
  return [t, o, s];
};
wt.rgb.ansi16 = function(e, t = null) {
  const [r, i, a] = e;
  let o = t === null ? wt.rgb.hsv(e)[2] : t;
  if (o = Math.round(o / 50), o === 0)
    return 30;
  let s = 30 + (Math.round(a / 255) << 2 | Math.round(i / 255) << 1 | Math.round(r / 255));
  return o === 2 && (s += 60), s;
};
wt.hsv.ansi16 = function(e) {
  return wt.rgb.ansi16(wt.hsv.rgb(e), e[2]);
};
wt.rgb.ansi256 = function(e) {
  const t = e[0], r = e[1], i = e[2];
  return t === r && r === i ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(i / 255 * 5);
};
wt.ansi16.rgb = function(e) {
  let t = e % 10;
  if (t === 0 || t === 7)
    return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const r = (~~(e > 50) + 1) * 0.5, i = (t & 1) * r * 255, a = (t >> 1 & 1) * r * 255, o = (t >> 2 & 1) * r * 255;
  return [i, a, o];
};
wt.ansi256.rgb = function(e) {
  if (e >= 232) {
    const o = (e - 232) * 10 + 8;
    return [o, o, o];
  }
  e -= 16;
  let t;
  const r = Math.floor(e / 36) / 5 * 255, i = Math.floor((t = e % 36) / 6) / 5 * 255, a = t % 6 / 5 * 255;
  return [r, i, a];
};
wt.rgb.hex = function(e) {
  const r = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
wt.hex.rgb = function(e) {
  const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let r = t[0];
  t[0].length === 3 && (r = r.split("").map((n) => n + n).join(""));
  const i = parseInt(r, 16), a = i >> 16 & 255, o = i >> 8 & 255, s = i & 255;
  return [a, o, s];
};
wt.rgb.hcg = function(e) {
  const t = e[0] / 255, r = e[1] / 255, i = e[2] / 255, a = Math.max(Math.max(t, r), i), o = Math.min(Math.min(t, r), i), s = a - o;
  let n, c;
  return s < 1 ? n = o / (1 - s) : n = 0, s <= 0 ? c = 0 : a === t ? c = (r - i) / s % 6 : a === r ? c = 2 + (i - t) / s : c = 4 + (t - r) / s, c /= 6, c %= 1, [c * 360, s * 100, n * 100];
};
wt.hsl.hcg = function(e) {
  const t = e[1] / 100, r = e[2] / 100, i = r < 0.5 ? 2 * t * r : 2 * t * (1 - r);
  let a = 0;
  return i < 1 && (a = (r - 0.5 * i) / (1 - i)), [e[0], i * 100, a * 100];
};
wt.hsv.hcg = function(e) {
  const t = e[1] / 100, r = e[2] / 100, i = t * r;
  let a = 0;
  return i < 1 && (a = (r - i) / (1 - i)), [e[0], i * 100, a * 100];
};
wt.hcg.rgb = function(e) {
  const t = e[0] / 360, r = e[1] / 100, i = e[2] / 100;
  if (r === 0)
    return [i * 255, i * 255, i * 255];
  const a = [0, 0, 0], o = t % 1 * 6, s = o % 1, n = 1 - s;
  let c = 0;
  switch (Math.floor(o)) {
    case 0:
      a[0] = 1, a[1] = s, a[2] = 0;
      break;
    case 1:
      a[0] = n, a[1] = 1, a[2] = 0;
      break;
    case 2:
      a[0] = 0, a[1] = 1, a[2] = s;
      break;
    case 3:
      a[0] = 0, a[1] = n, a[2] = 1;
      break;
    case 4:
      a[0] = s, a[1] = 0, a[2] = 1;
      break;
    default:
      a[0] = 1, a[1] = 0, a[2] = n;
  }
  return c = (1 - r) * i, [
    (r * a[0] + c) * 255,
    (r * a[1] + c) * 255,
    (r * a[2] + c) * 255
  ];
};
wt.hcg.hsv = function(e) {
  const t = e[1] / 100, r = e[2] / 100, i = t + r * (1 - t);
  let a = 0;
  return i > 0 && (a = t / i), [e[0], a * 100, i * 100];
};
wt.hcg.hsl = function(e) {
  const t = e[1] / 100, i = e[2] / 100 * (1 - t) + 0.5 * t;
  let a = 0;
  return i > 0 && i < 0.5 ? a = t / (2 * i) : i >= 0.5 && i < 1 && (a = t / (2 * (1 - i))), [e[0], a * 100, i * 100];
};
wt.hcg.hwb = function(e) {
  const t = e[1] / 100, r = e[2] / 100, i = t + r * (1 - t);
  return [e[0], (i - t) * 100, (1 - i) * 100];
};
wt.hwb.hcg = function(e) {
  const t = e[1] / 100, i = 1 - e[2] / 100, a = i - t;
  let o = 0;
  return a < 1 && (o = (i - a) / (1 - a)), [e[0], a * 100, o * 100];
};
wt.apple.rgb = function(e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
};
wt.rgb.apple = function(e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
};
wt.gray.rgb = function(e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
};
wt.gray.hsl = function(e) {
  return [0, 0, e[0]];
};
wt.gray.hsv = wt.gray.hsl;
wt.gray.hwb = function(e) {
  return [0, 100, e[0]];
};
wt.gray.cmyk = function(e) {
  return [0, 0, 0, e[0]];
};
wt.gray.lab = function(e) {
  return [e[0], 0, 0];
};
wt.gray.hex = function(e) {
  const t = Math.round(e[0] / 100 * 255) & 255, i = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(i.length) + i;
};
wt.rgb.gray = function(e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
};
const Nr = ba;
function tl() {
  const e = {}, t = Object.keys(Nr);
  for (let r = t.length, i = 0; i < r; i++)
    e[t[i]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return e;
}
function el(e) {
  const t = tl(), r = [e];
  for (t[e].distance = 0; r.length; ) {
    const i = r.pop(), a = Object.keys(Nr[i]);
    for (let o = a.length, s = 0; s < o; s++) {
      const n = a[s], c = t[n];
      c.distance === -1 && (c.distance = t[i].distance + 1, c.parent = i, r.unshift(n));
    }
  }
  return t;
}
function rl(e, t) {
  return function(r) {
    return t(e(r));
  };
}
function nl(e, t) {
  const r = [t[e].parent, e];
  let i = Nr[t[e].parent][e], a = t[e].parent;
  for (; t[a].parent; )
    r.unshift(t[a].parent), i = rl(Nr[t[a].parent][a], i), a = t[a].parent;
  return i.conversion = r, i;
}
var il = function(e) {
  const t = el(e), r = {}, i = Object.keys(t);
  for (let a = i.length, o = 0; o < a; o++) {
    const s = i[o];
    t[s].parent !== null && (r[s] = nl(s, t));
  }
  return r;
};
const ei = ba, sl = il, Le = {}, al = Object.keys(ei);
function ol(e) {
  const t = function(...r) {
    const i = r[0];
    return i == null ? i : (i.length > 1 && (r = i), e(r));
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
function ll(e) {
  const t = function(...r) {
    const i = r[0];
    if (i == null)
      return i;
    i.length > 1 && (r = i);
    const a = e(r);
    if (typeof a == "object")
      for (let o = a.length, s = 0; s < o; s++)
        a[s] = Math.round(a[s]);
    return a;
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
al.forEach((e) => {
  Le[e] = {}, Object.defineProperty(Le[e], "channels", { value: ei[e].channels }), Object.defineProperty(Le[e], "labels", { value: ei[e].labels });
  const t = sl(e);
  Object.keys(t).forEach((i) => {
    const a = t[i];
    Le[e][i] = ll(a), Le[e][i].raw = ol(a);
  });
});
var ul = Le;
const Pe = Jo, Kt = ul, _a = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], ri = {};
for (const e of Object.keys(Kt))
  ri[[...Kt[e].labels].sort().join("")] = e;
const Or = {};
function Ft(e, t) {
  if (!(this instanceof Ft))
    return new Ft(e, t);
  if (t && t in _a && (t = null), t && !(t in Kt))
    throw new Error("Unknown model: " + t);
  let r, i;
  if (e == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e instanceof Ft)
    this.model = e.model, this.color = [...e.color], this.valpha = e.valpha;
  else if (typeof e == "string") {
    const a = Pe.get(e);
    if (a === null)
      throw new Error("Unable to parse color from string: " + e);
    this.model = a.model, i = Kt[this.model].channels, this.color = a.value.slice(0, i), this.valpha = typeof a.value[i] == "number" ? a.value[i] : 1;
  } else if (e.length > 0) {
    this.model = t || "rgb", i = Kt[this.model].channels;
    const a = Array.prototype.slice.call(e, 0, i);
    this.color = ni(a, i), this.valpha = typeof e[i] == "number" ? e[i] : 1;
  } else if (typeof e == "number")
    this.model = "rgb", this.color = [
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const a = Object.keys(e);
    "alpha" in e && (a.splice(a.indexOf("alpha"), 1), this.valpha = typeof e.alpha == "number" ? e.alpha : 0);
    const o = a.sort().join("");
    if (!(o in ri))
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = ri[o];
    const { labels: s } = Kt[this.model], n = [];
    for (r = 0; r < s.length; r++)
      n.push(e[s[r]]);
    this.color = ni(n);
  }
  if (Or[this.model])
    for (i = Kt[this.model].channels, r = 0; r < i; r++) {
      const a = Or[this.model][r];
      a && (this.color[r] = a(this.color[r]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
Ft.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(e) {
    let t = this.model in Pe.to ? this : this.rgb();
    t = t.round(typeof e == "number" ? e : 1);
    const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Pe.to[t.model](r);
  },
  percentString(e) {
    const t = this.rgb().round(typeof e == "number" ? e : 1), r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Pe.to.rgb.percent(r);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const e = {}, { channels: t } = Kt[this.model], { labels: r } = Kt[this.model];
    for (let i = 0; i < t; i++)
      e[r[i]] = this.color[i];
    return this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  unitArray() {
    const e = this.rgb().color;
    return e[0] /= 255, e[1] /= 255, e[2] /= 255, this.valpha !== 1 && e.push(this.valpha), e;
  },
  unitObject() {
    const e = this.rgb().object();
    return e.r /= 255, e.g /= 255, e.b /= 255, this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  round(e) {
    return e = Math.max(e || 0, 0), new Ft([...this.color.map(hl(e)), this.valpha], this.model);
  },
  alpha(e) {
    return e !== void 0 ? new Ft([...this.color, Math.max(0, Math.min(1, e))], this.model) : this.valpha;
  },
  // Rgb
  red: It("rgb", 0, Dt(255)),
  green: It("rgb", 1, Dt(255)),
  blue: It("rgb", 2, Dt(255)),
  hue: It(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (e) => (e % 360 + 360) % 360),
  saturationl: It("hsl", 1, Dt(100)),
  lightness: It("hsl", 2, Dt(100)),
  saturationv: It("hsv", 1, Dt(100)),
  value: It("hsv", 2, Dt(100)),
  chroma: It("hcg", 1, Dt(100)),
  gray: It("hcg", 2, Dt(100)),
  white: It("hwb", 1, Dt(100)),
  wblack: It("hwb", 2, Dt(100)),
  cyan: It("cmyk", 0, Dt(100)),
  magenta: It("cmyk", 1, Dt(100)),
  yellow: It("cmyk", 2, Dt(100)),
  black: It("cmyk", 3, Dt(100)),
  x: It("xyz", 0, Dt(95.047)),
  y: It("xyz", 1, Dt(100)),
  z: It("xyz", 2, Dt(108.833)),
  l: It("lab", 0, Dt(100)),
  a: It("lab", 1),
  b: It("lab", 2),
  keyword(e) {
    return e !== void 0 ? new Ft(e) : Kt[this.model].keyword(this.color);
  },
  hex(e) {
    return e !== void 0 ? new Ft(e) : Pe.to.hex(this.rgb().round().color);
  },
  hexa(e) {
    if (e !== void 0)
      return new Ft(e);
    const t = this.rgb().round().color;
    let r = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return r.length === 1 && (r = "0" + r), Pe.to.hex(t) + r;
  },
  rgbNumber() {
    const e = this.rgb().color;
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  },
  luminosity() {
    const e = this.rgb().color, t = [];
    for (const [r, i] of e.entries()) {
      const a = i / 255;
      t[r] = a <= 0.04045 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(e) {
    const t = this.luminosity(), r = e.luminosity();
    return t > r ? (t + 0.05) / (r + 0.05) : (r + 0.05) / (t + 0.05);
  },
  level(e) {
    const t = this.contrast(e);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const e = this.rgb().color;
    return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const e = this.rgb();
    for (let t = 0; t < 3; t++)
      e.color[t] = 255 - e.color[t];
    return e;
  },
  lighten(e) {
    const t = this.hsl();
    return t.color[2] += t.color[2] * e, t;
  },
  darken(e) {
    const t = this.hsl();
    return t.color[2] -= t.color[2] * e, t;
  },
  saturate(e) {
    const t = this.hsl();
    return t.color[1] += t.color[1] * e, t;
  },
  desaturate(e) {
    const t = this.hsl();
    return t.color[1] -= t.color[1] * e, t;
  },
  whiten(e) {
    const t = this.hwb();
    return t.color[1] += t.color[1] * e, t;
  },
  blacken(e) {
    const t = this.hwb();
    return t.color[2] += t.color[2] * e, t;
  },
  grayscale() {
    const e = this.rgb().color, t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
    return Ft.rgb(t, t, t);
  },
  fade(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate(e) {
    const t = this.hsl();
    let r = t.color[0];
    return r = (r + e) % 360, r = r < 0 ? 360 + r : r, t.color[0] = r, t;
  },
  mix(e, t) {
    if (!e || !e.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
    const r = e.rgb(), i = this.rgb(), a = t === void 0 ? 0.5 : t, o = 2 * a - 1, s = r.alpha() - i.alpha(), n = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2, c = 1 - n;
    return Ft.rgb(
      n * r.red() + c * i.red(),
      n * r.green() + c * i.green(),
      n * r.blue() + c * i.blue(),
      r.alpha() * a + i.alpha() * (1 - a)
    );
  }
};
for (const e of Object.keys(Kt)) {
  if (_a.includes(e))
    continue;
  const { channels: t } = Kt[e];
  Ft.prototype[e] = function(...r) {
    return this.model === e ? new Ft(this) : r.length > 0 ? new Ft(r, e) : new Ft([...fl(Kt[this.model][e].raw(this.color)), this.valpha], e);
  }, Ft[e] = function(...r) {
    let i = r[0];
    return typeof i == "number" && (i = ni(r, t)), new Ft(i, e);
  };
}
function cl(e, t) {
  return Number(e.toFixed(t));
}
function hl(e) {
  return function(t) {
    return cl(t, e);
  };
}
function It(e, t, r) {
  e = Array.isArray(e) ? e : [e];
  for (const i of e)
    (Or[i] || (Or[i] = []))[t] = r;
  return e = e[0], function(i) {
    let a;
    return i !== void 0 ? (r && (i = r(i)), a = this[e](), a.color[t] = i, a) : (a = this[e]().color[t], r && (a = r(a)), a);
  };
}
function Dt(e) {
  return function(t) {
    return Math.max(0, Math.min(e, t));
  };
}
function fl(e) {
  return Array.isArray(e) ? e : [e];
}
function ni(e, t) {
  for (let r = 0; r < t; r++)
    typeof e[r] != "number" && (e[r] = 0);
  return e;
}
var dl = Ft;
const Br = /* @__PURE__ */ da(dl);
var pl = Object.defineProperty, ml = Object.defineProperties, gl = Object.getOwnPropertyDescriptors, Hi = Object.getOwnPropertySymbols, wl = Object.prototype.hasOwnProperty, yl = Object.prototype.propertyIsEnumerable, ii = (e, t, r) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, _t = (e, t) => {
  for (var r in t || (t = {}))
    wl.call(t, r) && ii(e, r, t[r]);
  if (Hi)
    for (var r of Hi(t))
      yl.call(t, r) && ii(e, r, t[r]);
  return e;
}, be = (e, t) => ml(e, gl(t)), it = (e, t, r) => (ii(e, typeof t != "symbol" ? t + "" : t, r), r), yr = (e, t, r) => new Promise((i, a) => {
  var o = (c) => {
    try {
      n(r.next(c));
    } catch (w) {
      a(w);
    }
  }, s = (c) => {
    try {
      n(r.throw(c));
    } catch (w) {
      a(w);
    }
  }, n = (c) => c.done ? i(c.value) : Promise.resolve(c.value).then(o, s);
  n((r = r.apply(e, t)).next());
});
class Dr {
  constructor(t) {
    it(this, "rootKey"), this.rootKey = t;
  }
}
const vl = Object.seal({});
class nt extends Dr {
  constructor(t) {
    super(t), it(this, "root"), this.root = new Array();
  }
  // This method is called by the formatter to get the XML representation of this component.
  // It is called recursively for all child components.
  // It is a serializer to be used in the xml library.
  // https://www.npmjs.com/package/xml
  // Child components can override this method to customize the XML representation, or execute side effects.
  prepForXml(t) {
    var r;
    t.stack.push(this);
    const i = this.root.map((a) => a instanceof Dr ? a.prepForXml(t) : a).filter((a) => a !== void 0);
    return t.stack.pop(), {
      [this.rootKey]: i.length ? i.length === 1 && ((r = i[0]) != null && r._attr) ? i[0] : i : vl
    };
  }
  /**
   * @deprecated Do not use this method. It is only used internally by the library. It will be removed in a future version.
   */
  addChildElement(t) {
    return this.root.push(t), this;
  }
}
class me extends nt {
  prepForXml(t) {
    const r = super.prepForXml(t);
    if (r && (typeof r[this.rootKey] != "object" || Object.keys(r[this.rootKey]).length))
      return r;
  }
}
class mt extends Dr {
  constructor(t) {
    super("_attr"), it(this, "xmlKeys"), this.root = t;
  }
  prepForXml(t) {
    const r = {};
    return Object.keys(this.root).forEach((i) => {
      const a = this.root[i];
      if (a !== void 0) {
        const o = this.xmlKeys && this.xmlKeys[i] || i;
        r[o] = a;
      }
    }), { _attr: r };
  }
}
class ge extends Dr {
  constructor(t) {
    super("_attr"), this.root = t;
  }
  prepForXml(t) {
    return { _attr: Object.values(this.root).filter(({ value: i }) => i !== void 0).reduce((i, { key: a, value: o }) => be(_t({}, i), { [a]: o }), {}) };
  }
}
class kt extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      val: "w:val",
      color: "w:color",
      fill: "w:fill",
      space: "w:space",
      sz: "w:sz",
      type: "w:type",
      rsidR: "w:rsidR",
      rsidRPr: "w:rsidRPr",
      rsidSect: "w:rsidSect",
      w: "w:w",
      h: "w:h",
      top: "w:top",
      right: "w:right",
      bottom: "w:bottom",
      left: "w:left",
      header: "w:header",
      footer: "w:footer",
      gutter: "w:gutter",
      linePitch: "w:linePitch",
      pos: "w:pos"
    });
  }
}
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xa = {}, wi = { exports: {} }, We = typeof Reflect == "object" ? Reflect : null, Gi = We && typeof We.apply == "function" ? We.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, Sr;
We && typeof We.ownKeys == "function" ? Sr = We.ownKeys : Object.getOwnPropertySymbols ? Sr = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Sr = function(t) {
  return Object.getOwnPropertyNames(t);
};
function bl(e) {
  console && console.warn && console.warn(e);
}
var Ta = Number.isNaN || function(t) {
  return t !== t;
};
function At() {
  At.init.call(this);
}
wi.exports = At;
wi.exports.once = Tl;
At.EventEmitter = At;
At.prototype._events = void 0;
At.prototype._eventsCount = 0;
At.prototype._maxListeners = void 0;
var Ki = 10;
function zr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(At, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ki;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Ta(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ki = e;
  }
});
At.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
At.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ta(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Aa(e) {
  return e._maxListeners === void 0 ? At.defaultMaxListeners : e._maxListeners;
}
At.prototype.getMaxListeners = function() {
  return Aa(this);
};
At.prototype.emit = function(t) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var a = t === "error", o = this._events;
  if (o !== void 0)
    a = a && o.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var s;
    if (r.length > 0 && (s = r[0]), s instanceof Error)
      throw s;
    var n = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw n.context = s, n;
  }
  var c = o[t];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    Gi(c, this, r);
  else
    for (var w = c.length, b = Ra(c, w), i = 0; i < w; ++i)
      Gi(b[i], this, r);
  return !0;
};
function Sa(e, t, r, i) {
  var a, o, s;
  if (zr(r), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), o = e._events), s = o[t]), s === void 0)
    s = o[t] = r, ++e._eventsCount;
  else if (typeof s == "function" ? s = o[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), a = Aa(e), a > 0 && s.length > a && !s.warned) {
    s.warned = !0;
    var n = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    n.name = "MaxListenersExceededWarning", n.emitter = e, n.type = t, n.count = s.length, bl(n);
  }
  return e;
}
At.prototype.addListener = function(t, r) {
  return Sa(this, t, r, !1);
};
At.prototype.on = At.prototype.addListener;
At.prototype.prependListener = function(t, r) {
  return Sa(this, t, r, !0);
};
function _l() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ka(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, a = _l.bind(i);
  return a.listener = r, i.wrapFn = a, a;
}
At.prototype.once = function(t, r) {
  return zr(r), this.on(t, ka(this, t, r)), this;
};
At.prototype.prependOnceListener = function(t, r) {
  return zr(r), this.prependListener(t, ka(this, t, r)), this;
};
At.prototype.removeListener = function(t, r) {
  var i, a, o, s, n;
  if (zr(r), a = this._events, a === void 0)
    return this;
  if (i = a[t], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, i.listener || r));
  else if (typeof i != "function") {
    for (o = -1, s = i.length - 1; s >= 0; s--)
      if (i[s] === r || i[s].listener === r) {
        n = i[s].listener, o = s;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? i.shift() : El(i, o), i.length === 1 && (a[t] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", t, n || r);
  }
  return this;
};
At.prototype.off = At.prototype.removeListener;
At.prototype.removeAllListeners = function(t) {
  var r, i, a;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(i), s;
    for (a = 0; a < o.length; ++a)
      s = o[a], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (a = r.length - 1; a >= 0; a--)
      this.removeListener(t, r[a]);
  return this;
};
function Ia(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var a = i[t];
  return a === void 0 ? [] : typeof a == "function" ? r ? [a.listener || a] : [a] : r ? xl(a) : Ra(a, a.length);
}
At.prototype.listeners = function(t) {
  return Ia(this, t, !0);
};
At.prototype.rawListeners = function(t) {
  return Ia(this, t, !1);
};
At.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ca.call(e, t);
};
At.prototype.listenerCount = Ca;
function Ca(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
At.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Sr(this._events) : [];
};
function Ra(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function El(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function xl(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Tl(e, t) {
  return new Promise(function(r, i) {
    function a(s) {
      e.removeListener(t, o), i(s);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", a), r([].slice.call(arguments));
    }
    Na(e, t, o, { once: !0 }), t !== "error" && Al(e, a, { once: !0 });
  });
}
function Al(e, t, r) {
  typeof e.on == "function" && Na(e, "error", t, r);
}
function Na(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(o) {
      i.once && e.removeEventListener(t, a), r(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var yi = wi.exports, si = { exports: {} };
typeof Object.create == "function" ? si.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : si.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var i = function() {
    };
    i.prototype = r.prototype, t.prototype = new i(), t.prototype.constructor = t;
  }
};
var Re = si.exports;
function Sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oa = { exports: {} }, Nt = Oa.exports = {}, ne, ie;
function ai() {
  throw new Error("setTimeout has not been defined");
}
function oi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? ne = setTimeout : ne = ai;
  } catch {
    ne = ai;
  }
  try {
    typeof clearTimeout == "function" ? ie = clearTimeout : ie = oi;
  } catch {
    ie = oi;
  }
})();
function Ba(e) {
  if (ne === setTimeout)
    return setTimeout(e, 0);
  if ((ne === ai || !ne) && setTimeout)
    return ne = setTimeout, setTimeout(e, 0);
  try {
    return ne(e, 0);
  } catch {
    try {
      return ne.call(null, e, 0);
    } catch {
      return ne.call(this, e, 0);
    }
  }
}
function kl(e) {
  if (ie === clearTimeout)
    return clearTimeout(e);
  if ((ie === oi || !ie) && clearTimeout)
    return ie = clearTimeout, clearTimeout(e);
  try {
    return ie(e);
  } catch {
    try {
      return ie.call(null, e);
    } catch {
      return ie.call(this, e);
    }
  }
}
var fe = [], He = !1, Ae, kr = -1;
function Il() {
  !He || !Ae || (He = !1, Ae.length ? fe = Ae.concat(fe) : kr = -1, fe.length && Da());
}
function Da() {
  if (!He) {
    var e = Ba(Il);
    He = !0;
    for (var t = fe.length; t; ) {
      for (Ae = fe, fe = []; ++kr < t; )
        Ae && Ae[kr].run();
      kr = -1, t = fe.length;
    }
    Ae = null, He = !1, kl(e);
  }
}
Nt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  fe.push(new Fa(e, t)), fe.length === 1 && !He && Ba(Da);
};
function Fa(e, t) {
  this.fun = e, this.array = t;
}
Fa.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Nt.title = "browser";
Nt.browser = !0;
Nt.env = {};
Nt.argv = [];
Nt.version = "";
Nt.versions = {};
function we() {
}
Nt.on = we;
Nt.addListener = we;
Nt.once = we;
Nt.off = we;
Nt.removeListener = we;
Nt.removeAllListeners = we;
Nt.emit = we;
Nt.prependListener = we;
Nt.prependOnceListener = we;
Nt.listeners = function(e) {
  return [];
};
Nt.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Nt.cwd = function() {
  return "/";
};
Nt.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Nt.umask = function() {
  return 0;
};
var Cl = Oa.exports;
const bt = /* @__PURE__ */ Sl(Cl);
var tn, qi;
function La() {
  return qi || (qi = 1, tn = yi.EventEmitter), tn;
}
var en = {}, er = {}, Vi;
function Rl() {
  if (Vi)
    return er;
  Vi = 1, er.byteLength = n, er.toByteArray = w, er.fromByteArray = _;
  for (var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a)
    e[a] = i[a], t[i.charCodeAt(a)] = a;
  t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
  function s(f) {
    var y = f.length;
    if (y % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var d = f.indexOf("=");
    d === -1 && (d = y);
    var x = d === y ? 0 : 4 - d % 4;
    return [d, x];
  }
  function n(f) {
    var y = s(f), d = y[0], x = y[1];
    return (d + x) * 3 / 4 - x;
  }
  function c(f, y, d) {
    return (y + d) * 3 / 4 - d;
  }
  function w(f) {
    var y, d = s(f), x = d[0], p = d[1], E = new r(c(f, x, p)), A = 0, N = p > 0 ? x - 4 : x, O;
    for (O = 0; O < N; O += 4)
      y = t[f.charCodeAt(O)] << 18 | t[f.charCodeAt(O + 1)] << 12 | t[f.charCodeAt(O + 2)] << 6 | t[f.charCodeAt(O + 3)], E[A++] = y >> 16 & 255, E[A++] = y >> 8 & 255, E[A++] = y & 255;
    return p === 2 && (y = t[f.charCodeAt(O)] << 2 | t[f.charCodeAt(O + 1)] >> 4, E[A++] = y & 255), p === 1 && (y = t[f.charCodeAt(O)] << 10 | t[f.charCodeAt(O + 1)] << 4 | t[f.charCodeAt(O + 2)] >> 2, E[A++] = y >> 8 & 255, E[A++] = y & 255), E;
  }
  function b(f) {
    return e[f >> 18 & 63] + e[f >> 12 & 63] + e[f >> 6 & 63] + e[f & 63];
  }
  function g(f, y, d) {
    for (var x, p = [], E = y; E < d; E += 3)
      x = (f[E] << 16 & 16711680) + (f[E + 1] << 8 & 65280) + (f[E + 2] & 255), p.push(b(x));
    return p.join("");
  }
  function _(f) {
    for (var y, d = f.length, x = d % 3, p = [], E = 16383, A = 0, N = d - x; A < N; A += E)
      p.push(g(f, A, A + E > N ? N : A + E));
    return x === 1 ? (y = f[d - 1], p.push(
      e[y >> 2] + e[y << 4 & 63] + "=="
    )) : x === 2 && (y = (f[d - 2] << 8) + f[d - 1], p.push(
      e[y >> 10] + e[y >> 4 & 63] + e[y << 2 & 63] + "="
    )), p.join("");
  }
  return er;
}
var vr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var $i;
function Nl() {
  return $i || ($i = 1, vr.read = function(e, t, r, i, a) {
    var o, s, n = a * 8 - i - 1, c = (1 << n) - 1, w = c >> 1, b = -7, g = r ? a - 1 : 0, _ = r ? -1 : 1, f = e[t + g];
    for (g += _, o = f & (1 << -b) - 1, f >>= -b, b += n; b > 0; o = o * 256 + e[t + g], g += _, b -= 8)
      ;
    for (s = o & (1 << -b) - 1, o >>= -b, b += i; b > 0; s = s * 256 + e[t + g], g += _, b -= 8)
      ;
    if (o === 0)
      o = 1 - w;
    else {
      if (o === c)
        return s ? NaN : (f ? -1 : 1) * (1 / 0);
      s = s + Math.pow(2, i), o = o - w;
    }
    return (f ? -1 : 1) * s * Math.pow(2, o - i);
  }, vr.write = function(e, t, r, i, a, o) {
    var s, n, c, w = o * 8 - a - 1, b = (1 << w) - 1, g = b >> 1, _ = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = i ? 0 : o - 1, y = i ? 1 : -1, d = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (n = isNaN(t) ? 1 : 0, s = b) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + g >= 1 ? t += _ / c : t += _ * Math.pow(2, 1 - g), t * c >= 2 && (s++, c /= 2), s + g >= b ? (n = 0, s = b) : s + g >= 1 ? (n = (t * c - 1) * Math.pow(2, a), s = s + g) : (n = t * Math.pow(2, g - 1) * Math.pow(2, a), s = 0)); a >= 8; e[r + f] = n & 255, f += y, n /= 256, a -= 8)
      ;
    for (s = s << a | n, w += a; w > 0; e[r + f] = s & 255, f += y, s /= 256, w -= 8)
      ;
    e[r + f - y] |= d * 128;
  }), vr;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Zi;
function jr() {
  return Zi || (Zi = 1, function(e) {
    var t = Rl(), r = Nl(), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = n, e.SlowBuffer = E, e.INSPECT_MAX_BYTES = 50;
    var a = 2147483647;
    e.kMaxLength = a, n.TYPED_ARRAY_SUPPORT = o(), !n.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function o() {
      try {
        var T = new Uint8Array(1), l = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(T, l), T.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(n.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (n.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(n.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (n.isBuffer(this))
          return this.byteOffset;
      }
    });
    function s(T) {
      if (T > a)
        throw new RangeError('The value "' + T + '" is invalid for option "size"');
      var l = new Uint8Array(T);
      return Object.setPrototypeOf(l, n.prototype), l;
    }
    function n(T, l, u) {
      if (typeof T == "number") {
        if (typeof l == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return g(T);
      }
      return c(T, l, u);
    }
    n.poolSize = 8192;
    function c(T, l, u) {
      if (typeof T == "string")
        return _(T, l);
      if (ArrayBuffer.isView(T))
        return y(T);
      if (T == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T
        );
      if (st(T, ArrayBuffer) || T && st(T.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (st(T, SharedArrayBuffer) || T && st(T.buffer, SharedArrayBuffer)))
        return d(T, l, u);
      if (typeof T == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      var v = T.valueOf && T.valueOf();
      if (v != null && v !== T)
        return n.from(v, l, u);
      var D = x(T);
      if (D)
        return D;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof T[Symbol.toPrimitive] == "function")
        return n.from(
          T[Symbol.toPrimitive]("string"),
          l,
          u
        );
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T
      );
    }
    n.from = function(T, l, u) {
      return c(T, l, u);
    }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array);
    function w(T) {
      if (typeof T != "number")
        throw new TypeError('"size" argument must be of type number');
      if (T < 0)
        throw new RangeError('The value "' + T + '" is invalid for option "size"');
    }
    function b(T, l, u) {
      return w(T), T <= 0 ? s(T) : l !== void 0 ? typeof u == "string" ? s(T).fill(l, u) : s(T).fill(l) : s(T);
    }
    n.alloc = function(T, l, u) {
      return b(T, l, u);
    };
    function g(T) {
      return w(T), s(T < 0 ? 0 : p(T) | 0);
    }
    n.allocUnsafe = function(T) {
      return g(T);
    }, n.allocUnsafeSlow = function(T) {
      return g(T);
    };
    function _(T, l) {
      if ((typeof l != "string" || l === "") && (l = "utf8"), !n.isEncoding(l))
        throw new TypeError("Unknown encoding: " + l);
      var u = A(T, l) | 0, v = s(u), D = v.write(T, l);
      return D !== u && (v = v.slice(0, D)), v;
    }
    function f(T) {
      for (var l = T.length < 0 ? 0 : p(T.length) | 0, u = s(l), v = 0; v < l; v += 1)
        u[v] = T[v] & 255;
      return u;
    }
    function y(T) {
      if (st(T, Uint8Array)) {
        var l = new Uint8Array(T);
        return d(l.buffer, l.byteOffset, l.byteLength);
      }
      return f(T);
    }
    function d(T, l, u) {
      if (l < 0 || T.byteLength < l)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (T.byteLength < l + (u || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      var v;
      return l === void 0 && u === void 0 ? v = new Uint8Array(T) : u === void 0 ? v = new Uint8Array(T, l) : v = new Uint8Array(T, l, u), Object.setPrototypeOf(v, n.prototype), v;
    }
    function x(T) {
      if (n.isBuffer(T)) {
        var l = p(T.length) | 0, u = s(l);
        return u.length === 0 || T.copy(u, 0, 0, l), u;
      }
      if (T.length !== void 0)
        return typeof T.length != "number" || h(T.length) ? s(0) : f(T);
      if (T.type === "Buffer" && Array.isArray(T.data))
        return f(T.data);
    }
    function p(T) {
      if (T >= a)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
      return T | 0;
    }
    function E(T) {
      return +T != T && (T = 0), n.alloc(+T);
    }
    n.isBuffer = function(l) {
      return l != null && l._isBuffer === !0 && l !== n.prototype;
    }, n.compare = function(l, u) {
      if (st(l, Uint8Array) && (l = n.from(l, l.offset, l.byteLength)), st(u, Uint8Array) && (u = n.from(u, u.offset, u.byteLength)), !n.isBuffer(l) || !n.isBuffer(u))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (l === u)
        return 0;
      for (var v = l.length, D = u.length, M = 0, B = Math.min(v, D); M < B; ++M)
        if (l[M] !== u[M]) {
          v = l[M], D = u[M];
          break;
        }
      return v < D ? -1 : D < v ? 1 : 0;
    }, n.isEncoding = function(l) {
      switch (String(l).toLowerCase()) {
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
    }, n.concat = function(l, u) {
      if (!Array.isArray(l))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (l.length === 0)
        return n.alloc(0);
      var v;
      if (u === void 0)
        for (u = 0, v = 0; v < l.length; ++v)
          u += l[v].length;
      var D = n.allocUnsafe(u), M = 0;
      for (v = 0; v < l.length; ++v) {
        var B = l[v];
        if (st(B, Uint8Array))
          M + B.length > D.length ? n.from(B).copy(D, M) : Uint8Array.prototype.set.call(
            D,
            B,
            M
          );
        else if (n.isBuffer(B))
          B.copy(D, M);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        M += B.length;
      }
      return D;
    };
    function A(T, l) {
      if (n.isBuffer(T))
        return T.length;
      if (ArrayBuffer.isView(T) || st(T, ArrayBuffer))
        return T.byteLength;
      if (typeof T != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof T
        );
      var u = T.length, v = arguments.length > 2 && arguments[2] === !0;
      if (!v && u === 0)
        return 0;
      for (var D = !1; ; )
        switch (l) {
          case "ascii":
          case "latin1":
          case "binary":
            return u;
          case "utf8":
          case "utf-8":
            return S(T).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return u * 2;
          case "hex":
            return u >>> 1;
          case "base64":
            return F(T).length;
          default:
            if (D)
              return v ? -1 : S(T).length;
            l = ("" + l).toLowerCase(), D = !0;
        }
    }
    n.byteLength = A;
    function N(T, l, u) {
      var v = !1;
      if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, l >>>= 0, u <= l))
        return "";
      for (T || (T = "utf8"); ; )
        switch (T) {
          case "hex":
            return Y(this, l, u);
          case "utf8":
          case "utf-8":
            return m(this, l, u);
          case "ascii":
            return V(this, l, u);
          case "latin1":
          case "binary":
            return ft(this, l, u);
          case "base64":
            return j(this, l, u);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ct(this, l, u);
          default:
            if (v)
              throw new TypeError("Unknown encoding: " + T);
            T = (T + "").toLowerCase(), v = !0;
        }
    }
    n.prototype._isBuffer = !0;
    function O(T, l, u) {
      var v = T[l];
      T[l] = T[u], T[u] = v;
    }
    n.prototype.swap16 = function() {
      var l = this.length;
      if (l % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var u = 0; u < l; u += 2)
        O(this, u, u + 1);
      return this;
    }, n.prototype.swap32 = function() {
      var l = this.length;
      if (l % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var u = 0; u < l; u += 4)
        O(this, u, u + 3), O(this, u + 1, u + 2);
      return this;
    }, n.prototype.swap64 = function() {
      var l = this.length;
      if (l % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var u = 0; u < l; u += 8)
        O(this, u, u + 7), O(this, u + 1, u + 6), O(this, u + 2, u + 5), O(this, u + 3, u + 4);
      return this;
    }, n.prototype.toString = function() {
      var l = this.length;
      return l === 0 ? "" : arguments.length === 0 ? m(this, 0, l) : N.apply(this, arguments);
    }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(l) {
      if (!n.isBuffer(l))
        throw new TypeError("Argument must be a Buffer");
      return this === l ? !0 : n.compare(this, l) === 0;
    }, n.prototype.inspect = function() {
      var l = "", u = e.INSPECT_MAX_BYTES;
      return l = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (l += " ... "), "<Buffer " + l + ">";
    }, i && (n.prototype[i] = n.prototype.inspect), n.prototype.compare = function(l, u, v, D, M) {
      if (st(l, Uint8Array) && (l = n.from(l, l.offset, l.byteLength)), !n.isBuffer(l))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
        );
      if (u === void 0 && (u = 0), v === void 0 && (v = l ? l.length : 0), D === void 0 && (D = 0), M === void 0 && (M = this.length), u < 0 || v > l.length || D < 0 || M > this.length)
        throw new RangeError("out of range index");
      if (D >= M && u >= v)
        return 0;
      if (D >= M)
        return -1;
      if (u >= v)
        return 1;
      if (u >>>= 0, v >>>= 0, D >>>= 0, M >>>= 0, this === l)
        return 0;
      for (var B = M - D, Q = v - u, rt = Math.min(B, Q), et = this.slice(D, M), lt = l.slice(u, v), dt = 0; dt < rt; ++dt)
        if (et[dt] !== lt[dt]) {
          B = et[dt], Q = lt[dt];
          break;
        }
      return B < Q ? -1 : Q < B ? 1 : 0;
    };
    function z(T, l, u, v, D) {
      if (T.length === 0)
        return -1;
      if (typeof u == "string" ? (v = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, h(u) && (u = D ? 0 : T.length - 1), u < 0 && (u = T.length + u), u >= T.length) {
        if (D)
          return -1;
        u = T.length - 1;
      } else if (u < 0)
        if (D)
          u = 0;
        else
          return -1;
      if (typeof l == "string" && (l = n.from(l, v)), n.isBuffer(l))
        return l.length === 0 ? -1 : P(T, l, u, v, D);
      if (typeof l == "number")
        return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? D ? Uint8Array.prototype.indexOf.call(T, l, u) : Uint8Array.prototype.lastIndexOf.call(T, l, u) : P(T, [l], u, v, D);
      throw new TypeError("val must be string, number or Buffer");
    }
    function P(T, l, u, v, D) {
      var M = 1, B = T.length, Q = l.length;
      if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
        if (T.length < 2 || l.length < 2)
          return -1;
        M = 2, B /= 2, Q /= 2, u /= 2;
      }
      function rt(xt, Ht) {
        return M === 1 ? xt[Ht] : xt.readUInt16BE(Ht * M);
      }
      var et;
      if (D) {
        var lt = -1;
        for (et = u; et < B; et++)
          if (rt(T, et) === rt(l, lt === -1 ? 0 : et - lt)) {
            if (lt === -1 && (lt = et), et - lt + 1 === Q)
              return lt * M;
          } else
            lt !== -1 && (et -= et - lt), lt = -1;
      } else
        for (u + Q > B && (u = B - Q), et = u; et >= 0; et--) {
          for (var dt = !0, pt = 0; pt < Q; pt++)
            if (rt(T, et + pt) !== rt(l, pt)) {
              dt = !1;
              break;
            }
          if (dt)
            return et;
        }
      return -1;
    }
    n.prototype.includes = function(l, u, v) {
      return this.indexOf(l, u, v) !== -1;
    }, n.prototype.indexOf = function(l, u, v) {
      return z(this, l, u, v, !0);
    }, n.prototype.lastIndexOf = function(l, u, v) {
      return z(this, l, u, v, !1);
    };
    function K(T, l, u, v) {
      u = Number(u) || 0;
      var D = T.length - u;
      v ? (v = Number(v), v > D && (v = D)) : v = D;
      var M = l.length;
      v > M / 2 && (v = M / 2);
      for (var B = 0; B < v; ++B) {
        var Q = parseInt(l.substr(B * 2, 2), 16);
        if (h(Q))
          return B;
        T[u + B] = Q;
      }
      return B;
    }
    function C(T, l, u, v) {
      return U(S(l, T.length - u), T, u, v);
    }
    function tt(T, l, u, v) {
      return U(q(l), T, u, v);
    }
    function at(T, l, u, v) {
      return U(F(l), T, u, v);
    }
    function I(T, l, u, v) {
      return U(W(l, T.length - u), T, u, v);
    }
    n.prototype.write = function(l, u, v, D) {
      if (u === void 0)
        D = "utf8", v = this.length, u = 0;
      else if (v === void 0 && typeof u == "string")
        D = u, v = this.length, u = 0;
      else if (isFinite(u))
        u = u >>> 0, isFinite(v) ? (v = v >>> 0, D === void 0 && (D = "utf8")) : (D = v, v = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var M = this.length - u;
      if ((v === void 0 || v > M) && (v = M), l.length > 0 && (v < 0 || u < 0) || u > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      D || (D = "utf8");
      for (var B = !1; ; )
        switch (D) {
          case "hex":
            return K(this, l, u, v);
          case "utf8":
          case "utf-8":
            return C(this, l, u, v);
          case "ascii":
          case "latin1":
          case "binary":
            return tt(this, l, u, v);
          case "base64":
            return at(this, l, u, v);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return I(this, l, u, v);
          default:
            if (B)
              throw new TypeError("Unknown encoding: " + D);
            D = ("" + D).toLowerCase(), B = !0;
        }
    }, n.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function j(T, l, u) {
      return l === 0 && u === T.length ? t.fromByteArray(T) : t.fromByteArray(T.slice(l, u));
    }
    function m(T, l, u) {
      u = Math.min(T.length, u);
      for (var v = [], D = l; D < u; ) {
        var M = T[D], B = null, Q = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
        if (D + Q <= u) {
          var rt, et, lt, dt;
          switch (Q) {
            case 1:
              M < 128 && (B = M);
              break;
            case 2:
              rt = T[D + 1], (rt & 192) === 128 && (dt = (M & 31) << 6 | rt & 63, dt > 127 && (B = dt));
              break;
            case 3:
              rt = T[D + 1], et = T[D + 2], (rt & 192) === 128 && (et & 192) === 128 && (dt = (M & 15) << 12 | (rt & 63) << 6 | et & 63, dt > 2047 && (dt < 55296 || dt > 57343) && (B = dt));
              break;
            case 4:
              rt = T[D + 1], et = T[D + 2], lt = T[D + 3], (rt & 192) === 128 && (et & 192) === 128 && (lt & 192) === 128 && (dt = (M & 15) << 18 | (rt & 63) << 12 | (et & 63) << 6 | lt & 63, dt > 65535 && dt < 1114112 && (B = dt));
          }
        }
        B === null ? (B = 65533, Q = 1) : B > 65535 && (B -= 65536, v.push(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), v.push(B), D += Q;
      }
      return ut(v);
    }
    var G = 4096;
    function ut(T) {
      var l = T.length;
      if (l <= G)
        return String.fromCharCode.apply(String, T);
      for (var u = "", v = 0; v < l; )
        u += String.fromCharCode.apply(
          String,
          T.slice(v, v += G)
        );
      return u;
    }
    function V(T, l, u) {
      var v = "";
      u = Math.min(T.length, u);
      for (var D = l; D < u; ++D)
        v += String.fromCharCode(T[D] & 127);
      return v;
    }
    function ft(T, l, u) {
      var v = "";
      u = Math.min(T.length, u);
      for (var D = l; D < u; ++D)
        v += String.fromCharCode(T[D]);
      return v;
    }
    function Y(T, l, u) {
      var v = T.length;
      (!l || l < 0) && (l = 0), (!u || u < 0 || u > v) && (u = v);
      for (var D = "", M = l; M < u; ++M)
        D += H[T[M]];
      return D;
    }
    function ct(T, l, u) {
      for (var v = T.slice(l, u), D = "", M = 0; M < v.length - 1; M += 2)
        D += String.fromCharCode(v[M] + v[M + 1] * 256);
      return D;
    }
    n.prototype.slice = function(l, u) {
      var v = this.length;
      l = ~~l, u = u === void 0 ? v : ~~u, l < 0 ? (l += v, l < 0 && (l = 0)) : l > v && (l = v), u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), u < l && (u = l);
      var D = this.subarray(l, u);
      return Object.setPrototypeOf(D, n.prototype), D;
    };
    function L(T, l, u) {
      if (T % 1 !== 0 || T < 0)
        throw new RangeError("offset is not uint");
      if (T + l > u)
        throw new RangeError("Trying to access beyond buffer length");
    }
    n.prototype.readUintLE = n.prototype.readUIntLE = function(l, u, v) {
      l = l >>> 0, u = u >>> 0, v || L(l, u, this.length);
      for (var D = this[l], M = 1, B = 0; ++B < u && (M *= 256); )
        D += this[l + B] * M;
      return D;
    }, n.prototype.readUintBE = n.prototype.readUIntBE = function(l, u, v) {
      l = l >>> 0, u = u >>> 0, v || L(l, u, this.length);
      for (var D = this[l + --u], M = 1; u > 0 && (M *= 256); )
        D += this[l + --u] * M;
      return D;
    }, n.prototype.readUint8 = n.prototype.readUInt8 = function(l, u) {
      return l = l >>> 0, u || L(l, 1, this.length), this[l];
    }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(l, u) {
      return l = l >>> 0, u || L(l, 2, this.length), this[l] | this[l + 1] << 8;
    }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(l, u) {
      return l = l >>> 0, u || L(l, 2, this.length), this[l] << 8 | this[l + 1];
    }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
    }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
    }, n.prototype.readIntLE = function(l, u, v) {
      l = l >>> 0, u = u >>> 0, v || L(l, u, this.length);
      for (var D = this[l], M = 1, B = 0; ++B < u && (M *= 256); )
        D += this[l + B] * M;
      return M *= 128, D >= M && (D -= Math.pow(2, 8 * u)), D;
    }, n.prototype.readIntBE = function(l, u, v) {
      l = l >>> 0, u = u >>> 0, v || L(l, u, this.length);
      for (var D = u, M = 1, B = this[l + --D]; D > 0 && (M *= 256); )
        B += this[l + --D] * M;
      return M *= 128, B >= M && (B -= Math.pow(2, 8 * u)), B;
    }, n.prototype.readInt8 = function(l, u) {
      return l = l >>> 0, u || L(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
    }, n.prototype.readInt16LE = function(l, u) {
      l = l >>> 0, u || L(l, 2, this.length);
      var v = this[l] | this[l + 1] << 8;
      return v & 32768 ? v | 4294901760 : v;
    }, n.prototype.readInt16BE = function(l, u) {
      l = l >>> 0, u || L(l, 2, this.length);
      var v = this[l + 1] | this[l] << 8;
      return v & 32768 ? v | 4294901760 : v;
    }, n.prototype.readInt32LE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
    }, n.prototype.readInt32BE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
    }, n.prototype.readFloatLE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), r.read(this, l, !0, 23, 4);
    }, n.prototype.readFloatBE = function(l, u) {
      return l = l >>> 0, u || L(l, 4, this.length), r.read(this, l, !1, 23, 4);
    }, n.prototype.readDoubleLE = function(l, u) {
      return l = l >>> 0, u || L(l, 8, this.length), r.read(this, l, !0, 52, 8);
    }, n.prototype.readDoubleBE = function(l, u) {
      return l = l >>> 0, u || L(l, 8, this.length), r.read(this, l, !1, 52, 8);
    };
    function R(T, l, u, v, D, M) {
      if (!n.isBuffer(T))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (l > D || l < M)
        throw new RangeError('"value" argument is out of bounds');
      if (u + v > T.length)
        throw new RangeError("Index out of range");
    }
    n.prototype.writeUintLE = n.prototype.writeUIntLE = function(l, u, v, D) {
      if (l = +l, u = u >>> 0, v = v >>> 0, !D) {
        var M = Math.pow(2, 8 * v) - 1;
        R(this, l, u, v, M, 0);
      }
      var B = 1, Q = 0;
      for (this[u] = l & 255; ++Q < v && (B *= 256); )
        this[u + Q] = l / B & 255;
      return u + v;
    }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(l, u, v, D) {
      if (l = +l, u = u >>> 0, v = v >>> 0, !D) {
        var M = Math.pow(2, 8 * v) - 1;
        R(this, l, u, v, M, 0);
      }
      var B = v - 1, Q = 1;
      for (this[u + B] = l & 255; --B >= 0 && (Q *= 256); )
        this[u + B] = l / Q & 255;
      return u + v;
    }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 1, 255, 0), this[u] = l & 255, u + 1;
    }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 2, 65535, 0), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2;
    }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 2, 65535, 0), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2;
    }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 4, 4294967295, 0), this[u + 3] = l >>> 24, this[u + 2] = l >>> 16, this[u + 1] = l >>> 8, this[u] = l & 255, u + 4;
    }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 4, 4294967295, 0), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4;
    }, n.prototype.writeIntLE = function(l, u, v, D) {
      if (l = +l, u = u >>> 0, !D) {
        var M = Math.pow(2, 8 * v - 1);
        R(this, l, u, v, M - 1, -M);
      }
      var B = 0, Q = 1, rt = 0;
      for (this[u] = l & 255; ++B < v && (Q *= 256); )
        l < 0 && rt === 0 && this[u + B - 1] !== 0 && (rt = 1), this[u + B] = (l / Q >> 0) - rt & 255;
      return u + v;
    }, n.prototype.writeIntBE = function(l, u, v, D) {
      if (l = +l, u = u >>> 0, !D) {
        var M = Math.pow(2, 8 * v - 1);
        R(this, l, u, v, M - 1, -M);
      }
      var B = v - 1, Q = 1, rt = 0;
      for (this[u + B] = l & 255; --B >= 0 && (Q *= 256); )
        l < 0 && rt === 0 && this[u + B + 1] !== 0 && (rt = 1), this[u + B] = (l / Q >> 0) - rt & 255;
      return u + v;
    }, n.prototype.writeInt8 = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[u] = l & 255, u + 1;
    }, n.prototype.writeInt16LE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 2, 32767, -32768), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2;
    }, n.prototype.writeInt16BE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 2, 32767, -32768), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2;
    }, n.prototype.writeInt32LE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 4, 2147483647, -2147483648), this[u] = l & 255, this[u + 1] = l >>> 8, this[u + 2] = l >>> 16, this[u + 3] = l >>> 24, u + 4;
    }, n.prototype.writeInt32BE = function(l, u, v) {
      return l = +l, u = u >>> 0, v || R(this, l, u, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4;
    };
    function Z(T, l, u, v, D, M) {
      if (u + v > T.length)
        throw new RangeError("Index out of range");
      if (u < 0)
        throw new RangeError("Index out of range");
    }
    function $(T, l, u, v, D) {
      return l = +l, u = u >>> 0, D || Z(T, l, u, 4), r.write(T, l, u, v, 23, 4), u + 4;
    }
    n.prototype.writeFloatLE = function(l, u, v) {
      return $(this, l, u, !0, v);
    }, n.prototype.writeFloatBE = function(l, u, v) {
      return $(this, l, u, !1, v);
    };
    function J(T, l, u, v, D) {
      return l = +l, u = u >>> 0, D || Z(T, l, u, 8), r.write(T, l, u, v, 52, 8), u + 8;
    }
    n.prototype.writeDoubleLE = function(l, u, v) {
      return J(this, l, u, !0, v);
    }, n.prototype.writeDoubleBE = function(l, u, v) {
      return J(this, l, u, !1, v);
    }, n.prototype.copy = function(l, u, v, D) {
      if (!n.isBuffer(l))
        throw new TypeError("argument should be a Buffer");
      if (v || (v = 0), !D && D !== 0 && (D = this.length), u >= l.length && (u = l.length), u || (u = 0), D > 0 && D < v && (D = v), D === v || l.length === 0 || this.length === 0)
        return 0;
      if (u < 0)
        throw new RangeError("targetStart out of bounds");
      if (v < 0 || v >= this.length)
        throw new RangeError("Index out of range");
      if (D < 0)
        throw new RangeError("sourceEnd out of bounds");
      D > this.length && (D = this.length), l.length - u < D - v && (D = l.length - u + v);
      var M = D - v;
      return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, v, D) : Uint8Array.prototype.set.call(
        l,
        this.subarray(v, D),
        u
      ), M;
    }, n.prototype.fill = function(l, u, v, D) {
      if (typeof l == "string") {
        if (typeof u == "string" ? (D = u, u = 0, v = this.length) : typeof v == "string" && (D = v, v = this.length), D !== void 0 && typeof D != "string")
          throw new TypeError("encoding must be a string");
        if (typeof D == "string" && !n.isEncoding(D))
          throw new TypeError("Unknown encoding: " + D);
        if (l.length === 1) {
          var M = l.charCodeAt(0);
          (D === "utf8" && M < 128 || D === "latin1") && (l = M);
        }
      } else
        typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
      if (u < 0 || this.length < u || this.length < v)
        throw new RangeError("Out of range index");
      if (v <= u)
        return this;
      u = u >>> 0, v = v === void 0 ? this.length : v >>> 0, l || (l = 0);
      var B;
      if (typeof l == "number")
        for (B = u; B < v; ++B)
          this[B] = l;
      else {
        var Q = n.isBuffer(l) ? l : n.from(l, D), rt = Q.length;
        if (rt === 0)
          throw new TypeError('The value "' + l + '" is invalid for argument "value"');
        for (B = 0; B < v - u; ++B)
          this[B + u] = Q[B % rt];
      }
      return this;
    };
    var X = /[^+/0-9A-Za-z-_]/g;
    function k(T) {
      if (T = T.split("=")[0], T = T.trim().replace(X, ""), T.length < 2)
        return "";
      for (; T.length % 4 !== 0; )
        T = T + "=";
      return T;
    }
    function S(T, l) {
      l = l || 1 / 0;
      for (var u, v = T.length, D = null, M = [], B = 0; B < v; ++B) {
        if (u = T.charCodeAt(B), u > 55295 && u < 57344) {
          if (!D) {
            if (u > 56319) {
              (l -= 3) > -1 && M.push(239, 191, 189);
              continue;
            } else if (B + 1 === v) {
              (l -= 3) > -1 && M.push(239, 191, 189);
              continue;
            }
            D = u;
            continue;
          }
          if (u < 56320) {
            (l -= 3) > -1 && M.push(239, 191, 189), D = u;
            continue;
          }
          u = (D - 55296 << 10 | u - 56320) + 65536;
        } else
          D && (l -= 3) > -1 && M.push(239, 191, 189);
        if (D = null, u < 128) {
          if ((l -= 1) < 0)
            break;
          M.push(u);
        } else if (u < 2048) {
          if ((l -= 2) < 0)
            break;
          M.push(
            u >> 6 | 192,
            u & 63 | 128
          );
        } else if (u < 65536) {
          if ((l -= 3) < 0)
            break;
          M.push(
            u >> 12 | 224,
            u >> 6 & 63 | 128,
            u & 63 | 128
          );
        } else if (u < 1114112) {
          if ((l -= 4) < 0)
            break;
          M.push(
            u >> 18 | 240,
            u >> 12 & 63 | 128,
            u >> 6 & 63 | 128,
            u & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return M;
    }
    function q(T) {
      for (var l = [], u = 0; u < T.length; ++u)
        l.push(T.charCodeAt(u) & 255);
      return l;
    }
    function W(T, l) {
      for (var u, v, D, M = [], B = 0; B < T.length && !((l -= 2) < 0); ++B)
        u = T.charCodeAt(B), v = u >> 8, D = u % 256, M.push(D), M.push(v);
      return M;
    }
    function F(T) {
      return t.toByteArray(k(T));
    }
    function U(T, l, u, v) {
      for (var D = 0; D < v && !(D + u >= l.length || D >= T.length); ++D)
        l[D + u] = T[D];
      return D;
    }
    function st(T, l) {
      return T instanceof l || T != null && T.constructor != null && T.constructor.name != null && T.constructor.name === l.name;
    }
    function h(T) {
      return T !== T;
    }
    var H = function() {
      for (var T = "0123456789abcdef", l = new Array(256), u = 0; u < 16; ++u)
        for (var v = u * 16, D = 0; D < 16; ++D)
          l[v + D] = T[u] + T[D];
      return l;
    }();
  }(en)), en;
}
var rn = {}, nn = {}, sn, Xi;
function Pa() {
  return Xi || (Xi = 1, sn = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), i = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]")
      return !1;
    var a = 42;
    t[r] = a;
    for (r in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = Object.getOwnPropertyDescriptor(t, r);
      if (s.value !== a || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), sn;
}
var an, Yi;
function vi() {
  if (Yi)
    return an;
  Yi = 1;
  var e = Pa();
  return an = function() {
    return e() && !!Symbol.toStringTag;
  }, an;
}
var on, Ji;
function Ol() {
  if (Ji)
    return on;
  Ji = 1;
  var e = typeof Symbol < "u" && Symbol, t = Pa();
  return on = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, on;
}
var ln, Qi;
function Bl() {
  if (Qi)
    return ln;
  Qi = 1;
  var e = {
    foo: {}
  }, t = Object;
  return ln = function() {
    return { __proto__: e }.foo === e.foo && !({ __proto__: null } instanceof t);
  }, ln;
}
var un, ts;
function Dl() {
  if (ts)
    return un;
  ts = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, i = "[object Function]", a = function(c, w) {
    for (var b = [], g = 0; g < c.length; g += 1)
      b[g] = c[g];
    for (var _ = 0; _ < w.length; _ += 1)
      b[_ + c.length] = w[_];
    return b;
  }, o = function(c, w) {
    for (var b = [], g = w || 0, _ = 0; g < c.length; g += 1, _ += 1)
      b[_] = c[g];
    return b;
  }, s = function(n, c) {
    for (var w = "", b = 0; b < n.length; b += 1)
      w += n[b], b + 1 < n.length && (w += c);
    return w;
  };
  return un = function(c) {
    var w = this;
    if (typeof w != "function" || t.apply(w) !== i)
      throw new TypeError(e + w);
    for (var b = o(arguments, 1), g, _ = function() {
      if (this instanceof g) {
        var p = w.apply(
          this,
          a(b, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return w.apply(
        c,
        a(b, arguments)
      );
    }, f = r(0, w.length - b.length), y = [], d = 0; d < f; d++)
      y[d] = "$" + d;
    if (g = Function("binder", "return function (" + s(y, ",") + "){ return binder.apply(this,arguments); }")(_), w.prototype) {
      var x = function() {
      };
      x.prototype = w.prototype, g.prototype = new x(), x.prototype = null;
    }
    return g;
  }, un;
}
var cn, es;
function bi() {
  if (es)
    return cn;
  es = 1;
  var e = Dl();
  return cn = Function.prototype.bind || e, cn;
}
var hn, rs;
function Fl() {
  if (rs)
    return hn;
  rs = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = bi();
  return hn = r.call(e, t), hn;
}
var fn, ns;
function Ze() {
  if (ns)
    return fn;
  ns = 1;
  var e, t = SyntaxError, r = Function, i = TypeError, a = function(I) {
    try {
      return r('"use strict"; return (' + I + ").constructor;")();
    } catch {
    }
  }, o = Object.getOwnPropertyDescriptor;
  if (o)
    try {
      o({}, "");
    } catch {
      o = null;
    }
  var s = function() {
    throw new i();
  }, n = o ? function() {
    try {
      return arguments.callee, s;
    } catch {
      try {
        return o(arguments, "callee").get;
      } catch {
        return s;
      }
    }
  }() : s, c = Ol()(), w = Bl()(), b = Object.getPrototypeOf || (w ? function(I) {
    return I.__proto__;
  } : null), g = {}, _ = typeof Uint8Array > "u" || !b ? e : b(Uint8Array), f = {
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": c && b ? b([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": g,
    "%AsyncGenerator%": g,
    "%AsyncGeneratorFunction%": g,
    "%AsyncIteratorPrototype%": g,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": r,
    "%GeneratorFunction%": g,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": c && b ? b(b([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !c || !b ? e : b((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !c || !b ? e : b((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": c && b ? b(""[Symbol.iterator]()) : e,
    "%Symbol%": c ? Symbol : e,
    "%SyntaxError%": t,
    "%ThrowTypeError%": n,
    "%TypedArray%": _,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
  };
  if (b)
    try {
      null.error;
    } catch (I) {
      var y = b(b(I));
      f["%Error.prototype%"] = y;
    }
  var d = function I(j) {
    var m;
    if (j === "%AsyncFunction%")
      m = a("async function () {}");
    else if (j === "%GeneratorFunction%")
      m = a("function* () {}");
    else if (j === "%AsyncGeneratorFunction%")
      m = a("async function* () {}");
    else if (j === "%AsyncGenerator%") {
      var G = I("%AsyncGeneratorFunction%");
      G && (m = G.prototype);
    } else if (j === "%AsyncIteratorPrototype%") {
      var ut = I("%AsyncGenerator%");
      ut && b && (m = b(ut.prototype));
    }
    return f[j] = m, m;
  }, x = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, p = bi(), E = Fl(), A = p.call(Function.call, Array.prototype.concat), N = p.call(Function.apply, Array.prototype.splice), O = p.call(Function.call, String.prototype.replace), z = p.call(Function.call, String.prototype.slice), P = p.call(Function.call, RegExp.prototype.exec), K = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, C = /\\(\\)?/g, tt = function(j) {
    var m = z(j, 0, 1), G = z(j, -1);
    if (m === "%" && G !== "%")
      throw new t("invalid intrinsic syntax, expected closing `%`");
    if (G === "%" && m !== "%")
      throw new t("invalid intrinsic syntax, expected opening `%`");
    var ut = [];
    return O(j, K, function(V, ft, Y, ct) {
      ut[ut.length] = Y ? O(ct, C, "$1") : ft || V;
    }), ut;
  }, at = function(j, m) {
    var G = j, ut;
    if (E(x, G) && (ut = x[G], G = "%" + ut[0] + "%"), E(f, G)) {
      var V = f[G];
      if (V === g && (V = d(G)), typeof V > "u" && !m)
        throw new i("intrinsic " + j + " exists, but is not available. Please file an issue!");
      return {
        alias: ut,
        name: G,
        value: V
      };
    }
    throw new t("intrinsic " + j + " does not exist!");
  };
  return fn = function(j, m) {
    if (typeof j != "string" || j.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof m != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (P(/^%?[^%]*%?$/, j) === null)
      throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var G = tt(j), ut = G.length > 0 ? G[0] : "", V = at("%" + ut + "%", m), ft = V.name, Y = V.value, ct = !1, L = V.alias;
    L && (ut = L[0], N(G, A([0, 1], L)));
    for (var R = 1, Z = !0; R < G.length; R += 1) {
      var $ = G[R], J = z($, 0, 1), X = z($, -1);
      if ((J === '"' || J === "'" || J === "`" || X === '"' || X === "'" || X === "`") && J !== X)
        throw new t("property names with quotes must have matching quotes");
      if (($ === "constructor" || !Z) && (ct = !0), ut += "." + $, ft = "%" + ut + "%", E(f, ft))
        Y = f[ft];
      else if (Y != null) {
        if (!($ in Y)) {
          if (!m)
            throw new i("base intrinsic for " + j + " exists, but the property is not available.");
          return;
        }
        if (o && R + 1 >= G.length) {
          var k = o(Y, $);
          Z = !!k, Z && "get" in k && !("originalValue" in k.get) ? Y = k.get : Y = Y[$];
        } else
          Z = E(Y, $), Y = Y[$];
        Z && !ct && (f[ft] = Y);
      }
    }
    return Y;
  }, fn;
}
var dn = { exports: {} }, pn, is;
function Ma() {
  if (is)
    return pn;
  is = 1;
  var e = Ze(), t = e("%Object.defineProperty%", !0), r = function() {
    if (t)
      try {
        return t({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!r())
      return null;
    try {
      return t([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, pn = r, pn;
}
var mn, ss;
function _i() {
  if (ss)
    return mn;
  ss = 1;
  var e = Ze(), t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return mn = t, mn;
}
var gn, as;
function Ll() {
  if (as)
    return gn;
  as = 1;
  var e = Ma()(), t = Ze(), r = e && t("%Object.defineProperty%", !0);
  if (r)
    try {
      r({}, "a", { value: 1 });
    } catch {
      r = !1;
    }
  var i = t("%SyntaxError%"), a = t("%TypeError%"), o = _i();
  return gn = function(n, c, w) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new a("`obj` must be an object or a function`");
    if (typeof c != "string" && typeof c != "symbol")
      throw new a("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new a("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new a("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new a("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new a("`loose`, if provided, must be a boolean");
    var b = arguments.length > 3 ? arguments[3] : null, g = arguments.length > 4 ? arguments[4] : null, _ = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, y = !!o && o(n, c);
    if (r)
      r(n, c, {
        configurable: _ === null && y ? y.configurable : !_,
        enumerable: b === null && y ? y.enumerable : !b,
        value: w,
        writable: g === null && y ? y.writable : !g
      });
    else if (f || !b && !g && !_)
      n[c] = w;
    else
      throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, gn;
}
var wn, os;
function Pl() {
  if (os)
    return wn;
  os = 1;
  var e = Ze(), t = Ll(), r = Ma()(), i = _i(), a = e("%TypeError%"), o = e("%Math.floor%");
  return wn = function(n, c) {
    if (typeof n != "function")
      throw new a("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || o(c) !== c)
      throw new a("`length` must be a positive 32-bit integer");
    var w = arguments.length > 2 && !!arguments[2], b = !0, g = !0;
    if ("length" in n && i) {
      var _ = i(n, "length");
      _ && !_.configurable && (b = !1), _ && !_.writable && (g = !1);
    }
    return (b || g || !w) && (r ? t(n, "length", c, !0, !0) : t(n, "length", c)), n;
  }, wn;
}
var ls;
function Ua() {
  return ls || (ls = 1, function(e) {
    var t = bi(), r = Ze(), i = Pl(), a = r("%TypeError%"), o = r("%Function.prototype.apply%"), s = r("%Function.prototype.call%"), n = r("%Reflect.apply%", !0) || t.call(s, o), c = r("%Object.defineProperty%", !0), w = r("%Math.max%");
    if (c)
      try {
        c({}, "a", { value: 1 });
      } catch {
        c = null;
      }
    e.exports = function(_) {
      if (typeof _ != "function")
        throw new a("a function is required");
      var f = n(t, s, arguments);
      return i(
        f,
        1 + w(0, _.length - (arguments.length - 1)),
        !0
      );
    };
    var b = function() {
      return n(t, o, arguments);
    };
    c ? c(e.exports, "apply", { value: b }) : e.exports.apply = b;
  }(dn)), dn.exports;
}
var yn, us;
function za() {
  if (us)
    return yn;
  us = 1;
  var e = Ze(), t = Ua(), r = t(e("String.prototype.indexOf"));
  return yn = function(a, o) {
    var s = e(a, !!o);
    return typeof s == "function" && r(a, ".prototype.") > -1 ? t(s) : s;
  }, yn;
}
var vn, cs;
function Ml() {
  if (cs)
    return vn;
  cs = 1;
  var e = vi()(), t = za(), r = t("Object.prototype.toString"), i = function(n) {
    return e && n && typeof n == "object" && Symbol.toStringTag in n ? !1 : r(n) === "[object Arguments]";
  }, a = function(n) {
    return i(n) ? !0 : n !== null && typeof n == "object" && typeof n.length == "number" && n.length >= 0 && r(n) !== "[object Array]" && r(n.callee) === "[object Function]";
  }, o = function() {
    return i(arguments);
  }();
  return i.isLegacyArguments = a, vn = o ? i : a, vn;
}
var bn, hs;
function Ul() {
  if (hs)
    return bn;
  hs = 1;
  var e = Object.prototype.toString, t = Function.prototype.toString, r = /^\s*(?:function)?\*/, i = vi()(), a = Object.getPrototypeOf, o = function() {
    if (!i)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, s;
  return bn = function(c) {
    if (typeof c != "function")
      return !1;
    if (r.test(t.call(c)))
      return !0;
    if (!i) {
      var w = e.call(c);
      return w === "[object GeneratorFunction]";
    }
    if (!a)
      return !1;
    if (typeof s > "u") {
      var b = o();
      s = b ? a(b) : !1;
    }
    return a(c) === s;
  }, bn;
}
var _n, fs;
function zl() {
  if (fs)
    return _n;
  fs = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, i;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw i;
        }
      }), i = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (E) {
      E !== i && (t = null);
    }
  else
    t = null;
  var a = /^\s*class\b/, o = function(A) {
    try {
      var N = e.call(A);
      return a.test(N);
    } catch {
      return !1;
    }
  }, s = function(A) {
    try {
      return o(A) ? !1 : (e.call(A), !0);
    } catch {
      return !1;
    }
  }, n = Object.prototype.toString, c = "[object Object]", w = "[object Function]", b = "[object GeneratorFunction]", g = "[object HTMLAllCollection]", _ = "[object HTML document.all class]", f = "[object HTMLCollection]", y = typeof Symbol == "function" && !!Symbol.toStringTag, d = !(0 in [,]), x = function() {
    return !1;
  };
  if (typeof document == "object") {
    var p = document.all;
    n.call(p) === n.call(document.all) && (x = function(A) {
      if ((d || !A) && (typeof A > "u" || typeof A == "object"))
        try {
          var N = n.call(A);
          return (N === g || N === _ || N === f || N === c) && A("") == null;
        } catch {
        }
      return !1;
    });
  }
  return _n = t ? function(A) {
    if (x(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    try {
      t(A, null, r);
    } catch (N) {
      if (N !== i)
        return !1;
    }
    return !o(A) && s(A);
  } : function(A) {
    if (x(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    if (y)
      return s(A);
    if (o(A))
      return !1;
    var N = n.call(A);
    return N !== w && N !== b && !/^\[object HTML/.test(N) ? !1 : s(A);
  }, _n;
}
var En, ds;
function jl() {
  if (ds)
    return En;
  ds = 1;
  var e = zl(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, i = function(c, w, b) {
    for (var g = 0, _ = c.length; g < _; g++)
      r.call(c, g) && (b == null ? w(c[g], g, c) : w.call(b, c[g], g, c));
  }, a = function(c, w, b) {
    for (var g = 0, _ = c.length; g < _; g++)
      b == null ? w(c.charAt(g), g, c) : w.call(b, c.charAt(g), g, c);
  }, o = function(c, w, b) {
    for (var g in c)
      r.call(c, g) && (b == null ? w(c[g], g, c) : w.call(b, c[g], g, c));
  }, s = function(c, w, b) {
    if (!e(w))
      throw new TypeError("iterator must be a function");
    var g;
    arguments.length >= 3 && (g = b), t.call(c) === "[object Array]" ? i(c, w, g) : typeof c == "string" ? a(c, w, g) : o(c, w, g);
  };
  return En = s, En;
}
var xn, ps;
function Wl() {
  if (ps)
    return xn;
  ps = 1;
  var e = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ], t = typeof globalThis > "u" ? ae : globalThis;
  return xn = function() {
    for (var i = [], a = 0; a < e.length; a++)
      typeof t[e[a]] == "function" && (i[i.length] = e[a]);
    return i;
  }, xn;
}
var Tn, ms;
function ja() {
  if (ms)
    return Tn;
  ms = 1;
  var e = jl(), t = Wl(), r = Ua(), i = za(), a = _i(), o = i("Object.prototype.toString"), s = vi()(), n = typeof globalThis > "u" ? ae : globalThis, c = t(), w = i("String.prototype.slice"), b = Object.getPrototypeOf, g = i("Array.prototype.indexOf", !0) || function(x, p) {
    for (var E = 0; E < x.length; E += 1)
      if (x[E] === p)
        return E;
    return -1;
  }, _ = { __proto__: null };
  s && a && b ? e(c, function(d) {
    var x = new n[d]();
    if (Symbol.toStringTag in x) {
      var p = b(x), E = a(p, Symbol.toStringTag);
      if (!E) {
        var A = b(p);
        E = a(A, Symbol.toStringTag);
      }
      _["$" + d] = r(E.get);
    }
  }) : e(c, function(d) {
    var x = new n[d](), p = x.slice || x.set;
    p && (_["$" + d] = r(p));
  });
  var f = function(x) {
    var p = !1;
    return e(_, function(E, A) {
      if (!p)
        try {
          "$" + E(x) === A && (p = w(A, 1));
        } catch {
        }
    }), p;
  }, y = function(x) {
    var p = !1;
    return e(_, function(E, A) {
      if (!p)
        try {
          E(x), p = w(A, 1);
        } catch {
        }
    }), p;
  };
  return Tn = function(x) {
    if (!x || typeof x != "object")
      return !1;
    if (!s) {
      var p = w(o(x), 8, -1);
      return g(c, p) > -1 ? p : p !== "Object" ? !1 : y(x);
    }
    return a ? f(x) : null;
  }, Tn;
}
var An, gs;
function Hl() {
  if (gs)
    return An;
  gs = 1;
  var e = ja();
  return An = function(r) {
    return !!e(r);
  }, An;
}
var ws;
function Gl() {
  return ws || (ws = 1, function(e) {
    var t = Ml(), r = Ul(), i = ja(), a = Hl();
    function o(v) {
      return v.call.bind(v);
    }
    var s = typeof BigInt < "u", n = typeof Symbol < "u", c = o(Object.prototype.toString), w = o(Number.prototype.valueOf), b = o(String.prototype.valueOf), g = o(Boolean.prototype.valueOf);
    if (s)
      var _ = o(BigInt.prototype.valueOf);
    if (n)
      var f = o(Symbol.prototype.valueOf);
    function y(v, D) {
      if (typeof v != "object")
        return !1;
      try {
        return D(v), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = a;
    function d(v) {
      return typeof Promise < "u" && v instanceof Promise || v !== null && typeof v == "object" && typeof v.then == "function" && typeof v.catch == "function";
    }
    e.isPromise = d;
    function x(v) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(v) : a(v) || Z(v);
    }
    e.isArrayBufferView = x;
    function p(v) {
      return i(v) === "Uint8Array";
    }
    e.isUint8Array = p;
    function E(v) {
      return i(v) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = E;
    function A(v) {
      return i(v) === "Uint16Array";
    }
    e.isUint16Array = A;
    function N(v) {
      return i(v) === "Uint32Array";
    }
    e.isUint32Array = N;
    function O(v) {
      return i(v) === "Int8Array";
    }
    e.isInt8Array = O;
    function z(v) {
      return i(v) === "Int16Array";
    }
    e.isInt16Array = z;
    function P(v) {
      return i(v) === "Int32Array";
    }
    e.isInt32Array = P;
    function K(v) {
      return i(v) === "Float32Array";
    }
    e.isFloat32Array = K;
    function C(v) {
      return i(v) === "Float64Array";
    }
    e.isFloat64Array = C;
    function tt(v) {
      return i(v) === "BigInt64Array";
    }
    e.isBigInt64Array = tt;
    function at(v) {
      return i(v) === "BigUint64Array";
    }
    e.isBigUint64Array = at;
    function I(v) {
      return c(v) === "[object Map]";
    }
    I.working = typeof Map < "u" && I(/* @__PURE__ */ new Map());
    function j(v) {
      return typeof Map > "u" ? !1 : I.working ? I(v) : v instanceof Map;
    }
    e.isMap = j;
    function m(v) {
      return c(v) === "[object Set]";
    }
    m.working = typeof Set < "u" && m(/* @__PURE__ */ new Set());
    function G(v) {
      return typeof Set > "u" ? !1 : m.working ? m(v) : v instanceof Set;
    }
    e.isSet = G;
    function ut(v) {
      return c(v) === "[object WeakMap]";
    }
    ut.working = typeof WeakMap < "u" && ut(/* @__PURE__ */ new WeakMap());
    function V(v) {
      return typeof WeakMap > "u" ? !1 : ut.working ? ut(v) : v instanceof WeakMap;
    }
    e.isWeakMap = V;
    function ft(v) {
      return c(v) === "[object WeakSet]";
    }
    ft.working = typeof WeakSet < "u" && ft(/* @__PURE__ */ new WeakSet());
    function Y(v) {
      return ft(v);
    }
    e.isWeakSet = Y;
    function ct(v) {
      return c(v) === "[object ArrayBuffer]";
    }
    ct.working = typeof ArrayBuffer < "u" && ct(new ArrayBuffer());
    function L(v) {
      return typeof ArrayBuffer > "u" ? !1 : ct.working ? ct(v) : v instanceof ArrayBuffer;
    }
    e.isArrayBuffer = L;
    function R(v) {
      return c(v) === "[object DataView]";
    }
    R.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && R(new DataView(new ArrayBuffer(1), 0, 1));
    function Z(v) {
      return typeof DataView > "u" ? !1 : R.working ? R(v) : v instanceof DataView;
    }
    e.isDataView = Z;
    var $ = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function J(v) {
      return c(v) === "[object SharedArrayBuffer]";
    }
    function X(v) {
      return typeof $ > "u" ? !1 : (typeof J.working > "u" && (J.working = J(new $())), J.working ? J(v) : v instanceof $);
    }
    e.isSharedArrayBuffer = X;
    function k(v) {
      return c(v) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = k;
    function S(v) {
      return c(v) === "[object Map Iterator]";
    }
    e.isMapIterator = S;
    function q(v) {
      return c(v) === "[object Set Iterator]";
    }
    e.isSetIterator = q;
    function W(v) {
      return c(v) === "[object Generator]";
    }
    e.isGeneratorObject = W;
    function F(v) {
      return c(v) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = F;
    function U(v) {
      return y(v, w);
    }
    e.isNumberObject = U;
    function st(v) {
      return y(v, b);
    }
    e.isStringObject = st;
    function h(v) {
      return y(v, g);
    }
    e.isBooleanObject = h;
    function H(v) {
      return s && y(v, _);
    }
    e.isBigIntObject = H;
    function T(v) {
      return n && y(v, f);
    }
    e.isSymbolObject = T;
    function l(v) {
      return U(v) || st(v) || h(v) || H(v) || T(v);
    }
    e.isBoxedPrimitive = l;
    function u(v) {
      return typeof Uint8Array < "u" && (L(v) || X(v));
    }
    e.isAnyArrayBuffer = u, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(v) {
      Object.defineProperty(e, v, {
        enumerable: !1,
        value: function() {
          throw new Error(v + " is not supported in userland");
        }
      });
    });
  }(nn)), nn;
}
var Sn, ys;
function Kl() {
  return ys || (ys = 1, Sn = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Sn;
}
var vs;
function Wa() {
  return vs || (vs = 1, function(e) {
    var t = Object.getOwnPropertyDescriptors || function(Z) {
      for (var $ = Object.keys(Z), J = {}, X = 0; X < $.length; X++)
        J[$[X]] = Object.getOwnPropertyDescriptor(Z, $[X]);
      return J;
    }, r = /%[sdj%]/g;
    e.format = function(R) {
      if (!O(R)) {
        for (var Z = [], $ = 0; $ < arguments.length; $++)
          Z.push(s(arguments[$]));
        return Z.join(" ");
      }
      for (var $ = 1, J = arguments, X = J.length, k = String(R).replace(r, function(q) {
        if (q === "%%")
          return "%";
        if ($ >= X)
          return q;
        switch (q) {
          case "%s":
            return String(J[$++]);
          case "%d":
            return Number(J[$++]);
          case "%j":
            try {
              return JSON.stringify(J[$++]);
            } catch {
              return "[Circular]";
            }
          default:
            return q;
        }
      }), S = J[$]; $ < X; S = J[++$])
        E(S) || !C(S) ? k += " " + S : k += " " + s(S);
      return k;
    }, e.deprecate = function(R, Z) {
      if (typeof bt < "u" && bt.noDeprecation === !0)
        return R;
      if (typeof bt > "u")
        return function() {
          return e.deprecate(R, Z).apply(this, arguments);
        };
      var $ = !1;
      function J() {
        if (!$) {
          if (bt.throwDeprecation)
            throw new Error(Z);
          bt.traceDeprecation ? console.trace(Z) : console.error(Z), $ = !0;
        }
        return R.apply(this, arguments);
      }
      return J;
    };
    var i = {}, a = /^$/;
    if (bt.env.NODE_DEBUG) {
      var o = bt.env.NODE_DEBUG;
      o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), a = new RegExp("^" + o + "$", "i");
    }
    e.debuglog = function(R) {
      if (R = R.toUpperCase(), !i[R])
        if (a.test(R)) {
          var Z = bt.pid;
          i[R] = function() {
            var $ = e.format.apply(e, arguments);
            console.error("%s %d: %s", R, Z, $);
          };
        } else
          i[R] = function() {
          };
      return i[R];
    };
    function s(R, Z) {
      var $ = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && ($.depth = arguments[2]), arguments.length >= 4 && ($.colors = arguments[3]), p(Z) ? $.showHidden = Z : Z && e._extend($, Z), P($.showHidden) && ($.showHidden = !1), P($.depth) && ($.depth = 2), P($.colors) && ($.colors = !1), P($.customInspect) && ($.customInspect = !0), $.colors && ($.stylize = n), b($, R, $.depth);
    }
    e.inspect = s, s.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, s.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function n(R, Z) {
      var $ = s.styles[Z];
      return $ ? "\x1B[" + s.colors[$][0] + "m" + R + "\x1B[" + s.colors[$][1] + "m" : R;
    }
    function c(R, Z) {
      return R;
    }
    function w(R) {
      var Z = {};
      return R.forEach(function($, J) {
        Z[$] = !0;
      }), Z;
    }
    function b(R, Z, $) {
      if (R.customInspect && Z && I(Z.inspect) && // Filter out the util module, it's inspect function is special
      Z.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(Z.constructor && Z.constructor.prototype === Z)) {
        var J = Z.inspect($, R);
        return O(J) || (J = b(R, J, $)), J;
      }
      var X = g(R, Z);
      if (X)
        return X;
      var k = Object.keys(Z), S = w(k);
      if (R.showHidden && (k = Object.getOwnPropertyNames(Z)), at(Z) && (k.indexOf("message") >= 0 || k.indexOf("description") >= 0))
        return _(Z);
      if (k.length === 0) {
        if (I(Z)) {
          var q = Z.name ? ": " + Z.name : "";
          return R.stylize("[Function" + q + "]", "special");
        }
        if (K(Z))
          return R.stylize(RegExp.prototype.toString.call(Z), "regexp");
        if (tt(Z))
          return R.stylize(Date.prototype.toString.call(Z), "date");
        if (at(Z))
          return _(Z);
      }
      var W = "", F = !1, U = ["{", "}"];
      if (x(Z) && (F = !0, U = ["[", "]"]), I(Z)) {
        var st = Z.name ? ": " + Z.name : "";
        W = " [Function" + st + "]";
      }
      if (K(Z) && (W = " " + RegExp.prototype.toString.call(Z)), tt(Z) && (W = " " + Date.prototype.toUTCString.call(Z)), at(Z) && (W = " " + _(Z)), k.length === 0 && (!F || Z.length == 0))
        return U[0] + W + U[1];
      if ($ < 0)
        return K(Z) ? R.stylize(RegExp.prototype.toString.call(Z), "regexp") : R.stylize("[Object]", "special");
      R.seen.push(Z);
      var h;
      return F ? h = f(R, Z, $, S, k) : h = k.map(function(H) {
        return y(R, Z, $, S, H, F);
      }), R.seen.pop(), d(h, W, U);
    }
    function g(R, Z) {
      if (P(Z))
        return R.stylize("undefined", "undefined");
      if (O(Z)) {
        var $ = "'" + JSON.stringify(Z).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return R.stylize($, "string");
      }
      if (N(Z))
        return R.stylize("" + Z, "number");
      if (p(Z))
        return R.stylize("" + Z, "boolean");
      if (E(Z))
        return R.stylize("null", "null");
    }
    function _(R) {
      return "[" + Error.prototype.toString.call(R) + "]";
    }
    function f(R, Z, $, J, X) {
      for (var k = [], S = 0, q = Z.length; S < q; ++S)
        ft(Z, String(S)) ? k.push(y(
          R,
          Z,
          $,
          J,
          String(S),
          !0
        )) : k.push("");
      return X.forEach(function(W) {
        W.match(/^\d+$/) || k.push(y(
          R,
          Z,
          $,
          J,
          W,
          !0
        ));
      }), k;
    }
    function y(R, Z, $, J, X, k) {
      var S, q, W;
      if (W = Object.getOwnPropertyDescriptor(Z, X) || { value: Z[X] }, W.get ? W.set ? q = R.stylize("[Getter/Setter]", "special") : q = R.stylize("[Getter]", "special") : W.set && (q = R.stylize("[Setter]", "special")), ft(J, X) || (S = "[" + X + "]"), q || (R.seen.indexOf(W.value) < 0 ? (E($) ? q = b(R, W.value, null) : q = b(R, W.value, $ - 1), q.indexOf(`
`) > -1 && (k ? q = q.split(`
`).map(function(F) {
        return "  " + F;
      }).join(`
`).slice(2) : q = `
` + q.split(`
`).map(function(F) {
        return "   " + F;
      }).join(`
`))) : q = R.stylize("[Circular]", "special")), P(S)) {
        if (k && X.match(/^\d+$/))
          return q;
        S = JSON.stringify("" + X), S.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (S = S.slice(1, -1), S = R.stylize(S, "name")) : (S = S.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), S = R.stylize(S, "string"));
      }
      return S + ": " + q;
    }
    function d(R, Z, $) {
      var J = R.reduce(function(X, k) {
        return k.indexOf(`
`) >= 0, X + k.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return J > 60 ? $[0] + (Z === "" ? "" : Z + `
 `) + " " + R.join(`,
  `) + " " + $[1] : $[0] + Z + " " + R.join(", ") + " " + $[1];
    }
    e.types = Gl();
    function x(R) {
      return Array.isArray(R);
    }
    e.isArray = x;
    function p(R) {
      return typeof R == "boolean";
    }
    e.isBoolean = p;
    function E(R) {
      return R === null;
    }
    e.isNull = E;
    function A(R) {
      return R == null;
    }
    e.isNullOrUndefined = A;
    function N(R) {
      return typeof R == "number";
    }
    e.isNumber = N;
    function O(R) {
      return typeof R == "string";
    }
    e.isString = O;
    function z(R) {
      return typeof R == "symbol";
    }
    e.isSymbol = z;
    function P(R) {
      return R === void 0;
    }
    e.isUndefined = P;
    function K(R) {
      return C(R) && m(R) === "[object RegExp]";
    }
    e.isRegExp = K, e.types.isRegExp = K;
    function C(R) {
      return typeof R == "object" && R !== null;
    }
    e.isObject = C;
    function tt(R) {
      return C(R) && m(R) === "[object Date]";
    }
    e.isDate = tt, e.types.isDate = tt;
    function at(R) {
      return C(R) && (m(R) === "[object Error]" || R instanceof Error);
    }
    e.isError = at, e.types.isNativeError = at;
    function I(R) {
      return typeof R == "function";
    }
    e.isFunction = I;
    function j(R) {
      return R === null || typeof R == "boolean" || typeof R == "number" || typeof R == "string" || typeof R == "symbol" || // ES6 symbol
      typeof R > "u";
    }
    e.isPrimitive = j, e.isBuffer = Kl();
    function m(R) {
      return Object.prototype.toString.call(R);
    }
    function G(R) {
      return R < 10 ? "0" + R.toString(10) : R.toString(10);
    }
    var ut = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function V() {
      var R = /* @__PURE__ */ new Date(), Z = [
        G(R.getHours()),
        G(R.getMinutes()),
        G(R.getSeconds())
      ].join(":");
      return [R.getDate(), ut[R.getMonth()], Z].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", V(), e.format.apply(e, arguments));
    }, e.inherits = Re, e._extend = function(R, Z) {
      if (!Z || !C(Z))
        return R;
      for (var $ = Object.keys(Z), J = $.length; J--; )
        R[$[J]] = Z[$[J]];
      return R;
    };
    function ft(R, Z) {
      return Object.prototype.hasOwnProperty.call(R, Z);
    }
    var Y = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function(Z) {
      if (typeof Z != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (Y && Z[Y]) {
        var $ = Z[Y];
        if (typeof $ != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty($, Y, {
          value: $,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), $;
      }
      function $() {
        for (var J, X, k = new Promise(function(W, F) {
          J = W, X = F;
        }), S = [], q = 0; q < arguments.length; q++)
          S.push(arguments[q]);
        S.push(function(W, F) {
          W ? X(W) : J(F);
        });
        try {
          Z.apply(this, S);
        } catch (W) {
          X(W);
        }
        return k;
      }
      return Object.setPrototypeOf($, Object.getPrototypeOf(Z)), Y && Object.defineProperty($, Y, {
        value: $,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        $,
        t(Z)
      );
    }, e.promisify.custom = Y;
    function ct(R, Z) {
      if (!R) {
        var $ = new Error("Promise was rejected with a falsy value");
        $.reason = R, R = $;
      }
      return Z(R);
    }
    function L(R) {
      if (typeof R != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function Z() {
        for (var $ = [], J = 0; J < arguments.length; J++)
          $.push(arguments[J]);
        var X = $.pop();
        if (typeof X != "function")
          throw new TypeError("The last argument must be of type Function");
        var k = this, S = function() {
          return X.apply(k, arguments);
        };
        R.apply(this, $).then(
          function(q) {
            bt.nextTick(S.bind(null, null, q));
          },
          function(q) {
            bt.nextTick(ct.bind(null, q, S));
          }
        );
      }
      return Object.setPrototypeOf(Z, Object.getPrototypeOf(R)), Object.defineProperties(
        Z,
        t(R)
      ), Z;
    }
    e.callbackify = L;
  }(rn)), rn;
}
var kn, bs;
function ql() {
  if (bs)
    return kn;
  bs = 1;
  function e(_, f) {
    var y = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(_);
      f && (d = d.filter(function(x) {
        return Object.getOwnPropertyDescriptor(_, x).enumerable;
      })), y.push.apply(y, d);
    }
    return y;
  }
  function t(_) {
    for (var f = 1; f < arguments.length; f++) {
      var y = arguments[f] != null ? arguments[f] : {};
      f % 2 ? e(Object(y), !0).forEach(function(d) {
        r(_, d, y[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(y)) : e(Object(y)).forEach(function(d) {
        Object.defineProperty(_, d, Object.getOwnPropertyDescriptor(y, d));
      });
    }
    return _;
  }
  function r(_, f, y) {
    return f in _ ? Object.defineProperty(_, f, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : _[f] = y, _;
  }
  function i(_, f) {
    if (!(_ instanceof f))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(_, f) {
    for (var y = 0; y < f.length; y++) {
      var d = f[y];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(_, d.key, d);
    }
  }
  function o(_, f, y) {
    return f && a(_.prototype, f), y && a(_, y), _;
  }
  var s = jr(), n = s.Buffer, c = Wa(), w = c.inspect, b = w && w.custom || "inspect";
  function g(_, f, y) {
    n.prototype.copy.call(_, f, y);
  }
  return kn = /* @__PURE__ */ function() {
    function _() {
      i(this, _), this.head = null, this.tail = null, this.length = 0;
    }
    return o(_, [{
      key: "push",
      value: function(y) {
        var d = {
          data: y,
          next: null
        };
        this.length > 0 ? this.tail.next = d : this.head = d, this.tail = d, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(y) {
        var d = {
          data: y,
          next: this.head
        };
        this.length === 0 && (this.tail = d), this.head = d, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var y = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, y;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(y) {
        if (this.length === 0)
          return "";
        for (var d = this.head, x = "" + d.data; d = d.next; )
          x += y + d.data;
        return x;
      }
    }, {
      key: "concat",
      value: function(y) {
        if (this.length === 0)
          return n.alloc(0);
        for (var d = n.allocUnsafe(y >>> 0), x = this.head, p = 0; x; )
          g(x.data, d, p), p += x.data.length, x = x.next;
        return d;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(y, d) {
        var x;
        return y < this.head.data.length ? (x = this.head.data.slice(0, y), this.head.data = this.head.data.slice(y)) : y === this.head.data.length ? x = this.shift() : x = d ? this._getString(y) : this._getBuffer(y), x;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(y) {
        var d = this.head, x = 1, p = d.data;
        for (y -= p.length; d = d.next; ) {
          var E = d.data, A = y > E.length ? E.length : y;
          if (A === E.length ? p += E : p += E.slice(0, y), y -= A, y === 0) {
            A === E.length ? (++x, d.next ? this.head = d.next : this.head = this.tail = null) : (this.head = d, d.data = E.slice(A));
            break;
          }
          ++x;
        }
        return this.length -= x, p;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(y) {
        var d = n.allocUnsafe(y), x = this.head, p = 1;
        for (x.data.copy(d), y -= x.data.length; x = x.next; ) {
          var E = x.data, A = y > E.length ? E.length : y;
          if (E.copy(d, d.length - y, 0, A), y -= A, y === 0) {
            A === E.length ? (++p, x.next ? this.head = x.next : this.head = this.tail = null) : (this.head = x, x.data = E.slice(A));
            break;
          }
          ++p;
        }
        return this.length -= p, d;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: b,
      value: function(y, d) {
        return w(this, t({}, d, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), _;
  }(), kn;
}
var In, _s;
function Ha() {
  if (_s)
    return In;
  _s = 1;
  function e(s, n) {
    var c = this, w = this._readableState && this._readableState.destroyed, b = this._writableState && this._writableState.destroyed;
    return w || b ? (n ? n(s) : s && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, bt.nextTick(a, this, s)) : bt.nextTick(a, this, s)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(s || null, function(g) {
      !n && g ? c._writableState ? c._writableState.errorEmitted ? bt.nextTick(r, c) : (c._writableState.errorEmitted = !0, bt.nextTick(t, c, g)) : bt.nextTick(t, c, g) : n ? (bt.nextTick(r, c), n(g)) : bt.nextTick(r, c);
    }), this);
  }
  function t(s, n) {
    a(s, n), r(s);
  }
  function r(s) {
    s._writableState && !s._writableState.emitClose || s._readableState && !s._readableState.emitClose || s.emit("close");
  }
  function i() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function a(s, n) {
    s.emit("error", n);
  }
  function o(s, n) {
    var c = s._readableState, w = s._writableState;
    c && c.autoDestroy || w && w.autoDestroy ? s.destroy(n) : s.emit("error", n);
  }
  return In = {
    destroy: e,
    undestroy: i,
    errorOrDestroy: o
  }, In;
}
var Cn = {}, Es;
function Xe() {
  if (Es)
    return Cn;
  Es = 1;
  function e(n, c) {
    n.prototype = Object.create(c.prototype), n.prototype.constructor = n, n.__proto__ = c;
  }
  var t = {};
  function r(n, c, w) {
    w || (w = Error);
    function b(_, f, y) {
      return typeof c == "string" ? c : c(_, f, y);
    }
    var g = /* @__PURE__ */ function(_) {
      e(f, _);
      function f(y, d, x) {
        return _.call(this, b(y, d, x)) || this;
      }
      return f;
    }(w);
    g.prototype.name = w.name, g.prototype.code = n, t[n] = g;
  }
  function i(n, c) {
    if (Array.isArray(n)) {
      var w = n.length;
      return n = n.map(function(b) {
        return String(b);
      }), w > 2 ? "one of ".concat(c, " ").concat(n.slice(0, w - 1).join(", "), ", or ") + n[w - 1] : w === 2 ? "one of ".concat(c, " ").concat(n[0], " or ").concat(n[1]) : "of ".concat(c, " ").concat(n[0]);
    } else
      return "of ".concat(c, " ").concat(String(n));
  }
  function a(n, c, w) {
    return n.substr(!w || w < 0 ? 0 : +w, c.length) === c;
  }
  function o(n, c, w) {
    return (w === void 0 || w > n.length) && (w = n.length), n.substring(w - c.length, w) === c;
  }
  function s(n, c, w) {
    return typeof w != "number" && (w = 0), w + c.length > n.length ? !1 : n.indexOf(c, w) !== -1;
  }
  return r("ERR_INVALID_OPT_VALUE", function(n, c) {
    return 'The value "' + c + '" is invalid for option "' + n + '"';
  }, TypeError), r("ERR_INVALID_ARG_TYPE", function(n, c, w) {
    var b;
    typeof c == "string" && a(c, "not ") ? (b = "must not be", c = c.replace(/^not /, "")) : b = "must be";
    var g;
    if (o(n, " argument"))
      g = "The ".concat(n, " ").concat(b, " ").concat(i(c, "type"));
    else {
      var _ = s(n, ".") ? "property" : "argument";
      g = 'The "'.concat(n, '" ').concat(_, " ").concat(b, " ").concat(i(c, "type"));
    }
    return g += ". Received type ".concat(typeof w), g;
  }, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(n) {
    return "The " + n + " method is not implemented";
  }), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(n) {
    return "Cannot call " + n + " after a stream was destroyed";
  }), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", function(n) {
    return "Unknown encoding: " + n;
  }, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Cn.codes = t, Cn;
}
var Rn, xs;
function Ga() {
  if (xs)
    return Rn;
  xs = 1;
  var e = Xe().codes.ERR_INVALID_OPT_VALUE;
  function t(i, a, o) {
    return i.highWaterMark != null ? i.highWaterMark : a ? i[o] : null;
  }
  function r(i, a, o, s) {
    var n = t(a, s, o);
    if (n != null) {
      if (!(isFinite(n) && Math.floor(n) === n) || n < 0) {
        var c = s ? o : "highWaterMark";
        throw new e(c, n);
      }
      return Math.floor(n);
    }
    return i.objectMode ? 16 : 16 * 1024;
  }
  return Rn = {
    getHighWaterMark: r
  }, Rn;
}
var Nn, Ts;
function Vl() {
  if (Ts)
    return Nn;
  Ts = 1, Nn = e;
  function e(r, i) {
    if (t("noDeprecation"))
      return r;
    var a = !1;
    function o() {
      if (!a) {
        if (t("throwDeprecation"))
          throw new Error(i);
        t("traceDeprecation") ? console.trace(i) : console.warn(i), a = !0;
      }
      return r.apply(this, arguments);
    }
    return o;
  }
  function t(r) {
    try {
      if (!ae.localStorage)
        return !1;
    } catch {
      return !1;
    }
    var i = ae.localStorage[r];
    return i == null ? !1 : String(i).toLowerCase() === "true";
  }
  return Nn;
}
var On, As;
function Ka() {
  if (As)
    return On;
  As = 1, On = K;
  function e(X) {
    var k = this;
    this.next = null, this.entry = null, this.finish = function() {
      J(k, X);
    };
  }
  var t;
  K.WritableState = z;
  var r = {
    deprecate: Vl()
  }, i = La(), a = jr().Buffer, o = ae.Uint8Array || function() {
  };
  function s(X) {
    return a.from(X);
  }
  function n(X) {
    return a.isBuffer(X) || X instanceof o;
  }
  var c = Ha(), w = Ga(), b = w.getHighWaterMark, g = Xe().codes, _ = g.ERR_INVALID_ARG_TYPE, f = g.ERR_METHOD_NOT_IMPLEMENTED, y = g.ERR_MULTIPLE_CALLBACK, d = g.ERR_STREAM_CANNOT_PIPE, x = g.ERR_STREAM_DESTROYED, p = g.ERR_STREAM_NULL_VALUES, E = g.ERR_STREAM_WRITE_AFTER_END, A = g.ERR_UNKNOWN_ENCODING, N = c.errorOrDestroy;
  Re(K, i);
  function O() {
  }
  function z(X, k, S) {
    t = t || qe(), X = X || {}, typeof S != "boolean" && (S = k instanceof t), this.objectMode = !!X.objectMode, S && (this.objectMode = this.objectMode || !!X.writableObjectMode), this.highWaterMark = b(this, X, "writableHighWaterMark", S), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var q = X.decodeStrings === !1;
    this.decodeStrings = !q, this.defaultEncoding = X.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(W) {
      ut(k, W);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = X.emitClose !== !1, this.autoDestroy = !!X.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  z.prototype.getBuffer = function() {
    for (var k = this.bufferedRequest, S = []; k; )
      S.push(k), k = k.next;
    return S;
  }, function() {
    try {
      Object.defineProperty(z.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var P;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (P = Function.prototype[Symbol.hasInstance], Object.defineProperty(K, Symbol.hasInstance, {
    value: function(k) {
      return P.call(this, k) ? !0 : this !== K ? !1 : k && k._writableState instanceof z;
    }
  })) : P = function(k) {
    return k instanceof this;
  };
  function K(X) {
    t = t || qe();
    var k = this instanceof t;
    if (!k && !P.call(K, this))
      return new K(X);
    this._writableState = new z(X, this, k), this.writable = !0, X && (typeof X.write == "function" && (this._write = X.write), typeof X.writev == "function" && (this._writev = X.writev), typeof X.destroy == "function" && (this._destroy = X.destroy), typeof X.final == "function" && (this._final = X.final)), i.call(this);
  }
  K.prototype.pipe = function() {
    N(this, new d());
  };
  function C(X, k) {
    var S = new E();
    N(X, S), bt.nextTick(k, S);
  }
  function tt(X, k, S, q) {
    var W;
    return S === null ? W = new p() : typeof S != "string" && !k.objectMode && (W = new _("chunk", ["string", "Buffer"], S)), W ? (N(X, W), bt.nextTick(q, W), !1) : !0;
  }
  K.prototype.write = function(X, k, S) {
    var q = this._writableState, W = !1, F = !q.objectMode && n(X);
    return F && !a.isBuffer(X) && (X = s(X)), typeof k == "function" && (S = k, k = null), F ? k = "buffer" : k || (k = q.defaultEncoding), typeof S != "function" && (S = O), q.ending ? C(this, S) : (F || tt(this, q, X, S)) && (q.pendingcb++, W = I(this, q, F, X, k, S)), W;
  }, K.prototype.cork = function() {
    this._writableState.corked++;
  }, K.prototype.uncork = function() {
    var X = this._writableState;
    X.corked && (X.corked--, !X.writing && !X.corked && !X.bufferProcessing && X.bufferedRequest && Y(this, X));
  }, K.prototype.setDefaultEncoding = function(k) {
    if (typeof k == "string" && (k = k.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((k + "").toLowerCase()) > -1))
      throw new A(k);
    return this._writableState.defaultEncoding = k, this;
  }, Object.defineProperty(K.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function at(X, k, S) {
    return !X.objectMode && X.decodeStrings !== !1 && typeof k == "string" && (k = a.from(k, S)), k;
  }
  Object.defineProperty(K.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function I(X, k, S, q, W, F) {
    if (!S) {
      var U = at(k, q, W);
      q !== U && (S = !0, W = "buffer", q = U);
    }
    var st = k.objectMode ? 1 : q.length;
    k.length += st;
    var h = k.length < k.highWaterMark;
    if (h || (k.needDrain = !0), k.writing || k.corked) {
      var H = k.lastBufferedRequest;
      k.lastBufferedRequest = {
        chunk: q,
        encoding: W,
        isBuf: S,
        callback: F,
        next: null
      }, H ? H.next = k.lastBufferedRequest : k.bufferedRequest = k.lastBufferedRequest, k.bufferedRequestCount += 1;
    } else
      j(X, k, !1, st, q, W, F);
    return h;
  }
  function j(X, k, S, q, W, F, U) {
    k.writelen = q, k.writecb = U, k.writing = !0, k.sync = !0, k.destroyed ? k.onwrite(new x("write")) : S ? X._writev(W, k.onwrite) : X._write(W, F, k.onwrite), k.sync = !1;
  }
  function m(X, k, S, q, W) {
    --k.pendingcb, S ? (bt.nextTick(W, q), bt.nextTick(Z, X, k), X._writableState.errorEmitted = !0, N(X, q)) : (W(q), X._writableState.errorEmitted = !0, N(X, q), Z(X, k));
  }
  function G(X) {
    X.writing = !1, X.writecb = null, X.length -= X.writelen, X.writelen = 0;
  }
  function ut(X, k) {
    var S = X._writableState, q = S.sync, W = S.writecb;
    if (typeof W != "function")
      throw new y();
    if (G(S), k)
      m(X, S, q, k, W);
    else {
      var F = ct(S) || X.destroyed;
      !F && !S.corked && !S.bufferProcessing && S.bufferedRequest && Y(X, S), q ? bt.nextTick(V, X, S, F, W) : V(X, S, F, W);
    }
  }
  function V(X, k, S, q) {
    S || ft(X, k), k.pendingcb--, q(), Z(X, k);
  }
  function ft(X, k) {
    k.length === 0 && k.needDrain && (k.needDrain = !1, X.emit("drain"));
  }
  function Y(X, k) {
    k.bufferProcessing = !0;
    var S = k.bufferedRequest;
    if (X._writev && S && S.next) {
      var q = k.bufferedRequestCount, W = new Array(q), F = k.corkedRequestsFree;
      F.entry = S;
      for (var U = 0, st = !0; S; )
        W[U] = S, S.isBuf || (st = !1), S = S.next, U += 1;
      W.allBuffers = st, j(X, k, !0, k.length, W, "", F.finish), k.pendingcb++, k.lastBufferedRequest = null, F.next ? (k.corkedRequestsFree = F.next, F.next = null) : k.corkedRequestsFree = new e(k), k.bufferedRequestCount = 0;
    } else {
      for (; S; ) {
        var h = S.chunk, H = S.encoding, T = S.callback, l = k.objectMode ? 1 : h.length;
        if (j(X, k, !1, l, h, H, T), S = S.next, k.bufferedRequestCount--, k.writing)
          break;
      }
      S === null && (k.lastBufferedRequest = null);
    }
    k.bufferedRequest = S, k.bufferProcessing = !1;
  }
  K.prototype._write = function(X, k, S) {
    S(new f("_write()"));
  }, K.prototype._writev = null, K.prototype.end = function(X, k, S) {
    var q = this._writableState;
    return typeof X == "function" ? (S = X, X = null, k = null) : typeof k == "function" && (S = k, k = null), X != null && this.write(X, k), q.corked && (q.corked = 1, this.uncork()), q.ending || $(this, q, S), this;
  }, Object.defineProperty(K.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function ct(X) {
    return X.ending && X.length === 0 && X.bufferedRequest === null && !X.finished && !X.writing;
  }
  function L(X, k) {
    X._final(function(S) {
      k.pendingcb--, S && N(X, S), k.prefinished = !0, X.emit("prefinish"), Z(X, k);
    });
  }
  function R(X, k) {
    !k.prefinished && !k.finalCalled && (typeof X._final == "function" && !k.destroyed ? (k.pendingcb++, k.finalCalled = !0, bt.nextTick(L, X, k)) : (k.prefinished = !0, X.emit("prefinish")));
  }
  function Z(X, k) {
    var S = ct(k);
    if (S && (R(X, k), k.pendingcb === 0 && (k.finished = !0, X.emit("finish"), k.autoDestroy))) {
      var q = X._readableState;
      (!q || q.autoDestroy && q.endEmitted) && X.destroy();
    }
    return S;
  }
  function $(X, k, S) {
    k.ending = !0, Z(X, k), S && (k.finished ? bt.nextTick(S) : X.once("finish", S)), k.ended = !0, X.writable = !1;
  }
  function J(X, k, S) {
    var q = X.entry;
    for (X.entry = null; q; ) {
      var W = q.callback;
      k.pendingcb--, W(S), q = q.next;
    }
    k.corkedRequestsFree.next = X;
  }
  return Object.defineProperty(K.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(k) {
      this._writableState && (this._writableState.destroyed = k);
    }
  }), K.prototype.destroy = c.destroy, K.prototype._undestroy = c.undestroy, K.prototype._destroy = function(X, k) {
    k(X);
  }, On;
}
var Bn, Ss;
function qe() {
  if (Ss)
    return Bn;
  Ss = 1;
  var e = Object.keys || function(w) {
    var b = [];
    for (var g in w)
      b.push(g);
    return b;
  };
  Bn = s;
  var t = qa(), r = Ka();
  Re(s, t);
  for (var i = e(r.prototype), a = 0; a < i.length; a++) {
    var o = i[a];
    s.prototype[o] || (s.prototype[o] = r.prototype[o]);
  }
  function s(w) {
    if (!(this instanceof s))
      return new s(w);
    t.call(this, w), r.call(this, w), this.allowHalfOpen = !0, w && (w.readable === !1 && (this.readable = !1), w.writable === !1 && (this.writable = !1), w.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", n)));
  }
  Object.defineProperty(s.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(s.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(s.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function n() {
    this._writableState.ended || bt.nextTick(c, this);
  }
  function c(w) {
    w.end();
  }
  return Object.defineProperty(s.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(b) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = b, this._writableState.destroyed = b);
    }
  }), Bn;
}
var Dn = {}, br = { exports: {} }, ks;
function $l() {
  return ks || (ks = 1, function(e, t) {
    var r = jr(), i = r.Buffer;
    function a(s, n) {
      for (var c in s)
        n[c] = s[c];
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = o);
    function o(s, n, c) {
      return i(s, n, c);
    }
    a(i, o), o.from = function(s, n, c) {
      if (typeof s == "number")
        throw new TypeError("Argument must not be a number");
      return i(s, n, c);
    }, o.alloc = function(s, n, c) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      var w = i(s);
      return n !== void 0 ? typeof c == "string" ? w.fill(n, c) : w.fill(n) : w.fill(0), w;
    }, o.allocUnsafe = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return i(s);
    }, o.allocUnsafeSlow = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(s);
    };
  }(br, br.exports)), br.exports;
}
var Is;
function li() {
  if (Is)
    return Dn;
  Is = 1;
  var e = $l().Buffer, t = e.isEncoding || function(p) {
    switch (p = "" + p, p && p.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function r(p) {
    if (!p)
      return "utf8";
    for (var E; ; )
      switch (p) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return p;
        default:
          if (E)
            return;
          p = ("" + p).toLowerCase(), E = !0;
      }
  }
  function i(p) {
    var E = r(p);
    if (typeof E != "string" && (e.isEncoding === t || !t(p)))
      throw new Error("Unknown encoding: " + p);
    return E || p;
  }
  Dn.StringDecoder = a;
  function a(p) {
    this.encoding = i(p);
    var E;
    switch (this.encoding) {
      case "utf16le":
        this.text = g, this.end = _, E = 4;
        break;
      case "utf8":
        this.fillLast = c, E = 4;
        break;
      case "base64":
        this.text = f, this.end = y, E = 3;
        break;
      default:
        this.write = d, this.end = x;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(E);
  }
  a.prototype.write = function(p) {
    if (p.length === 0)
      return "";
    var E, A;
    if (this.lastNeed) {
      if (E = this.fillLast(p), E === void 0)
        return "";
      A = this.lastNeed, this.lastNeed = 0;
    } else
      A = 0;
    return A < p.length ? E ? E + this.text(p, A) : this.text(p, A) : E || "";
  }, a.prototype.end = b, a.prototype.text = w, a.prototype.fillLast = function(p) {
    if (this.lastNeed <= p.length)
      return p.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    p.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, p.length), this.lastNeed -= p.length;
  };
  function o(p) {
    return p <= 127 ? 0 : p >> 5 === 6 ? 2 : p >> 4 === 14 ? 3 : p >> 3 === 30 ? 4 : p >> 6 === 2 ? -1 : -2;
  }
  function s(p, E, A) {
    var N = E.length - 1;
    if (N < A)
      return 0;
    var O = o(E[N]);
    return O >= 0 ? (O > 0 && (p.lastNeed = O - 1), O) : --N < A || O === -2 ? 0 : (O = o(E[N]), O >= 0 ? (O > 0 && (p.lastNeed = O - 2), O) : --N < A || O === -2 ? 0 : (O = o(E[N]), O >= 0 ? (O > 0 && (O === 2 ? O = 0 : p.lastNeed = O - 3), O) : 0));
  }
  function n(p, E, A) {
    if ((E[0] & 192) !== 128)
      return p.lastNeed = 0, "�";
    if (p.lastNeed > 1 && E.length > 1) {
      if ((E[1] & 192) !== 128)
        return p.lastNeed = 1, "�";
      if (p.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128)
        return p.lastNeed = 2, "�";
    }
  }
  function c(p) {
    var E = this.lastTotal - this.lastNeed, A = n(this, p);
    if (A !== void 0)
      return A;
    if (this.lastNeed <= p.length)
      return p.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    p.copy(this.lastChar, E, 0, p.length), this.lastNeed -= p.length;
  }
  function w(p, E) {
    var A = s(this, p, E);
    if (!this.lastNeed)
      return p.toString("utf8", E);
    this.lastTotal = A;
    var N = p.length - (A - this.lastNeed);
    return p.copy(this.lastChar, 0, N), p.toString("utf8", E, N);
  }
  function b(p) {
    var E = p && p.length ? this.write(p) : "";
    return this.lastNeed ? E + "�" : E;
  }
  function g(p, E) {
    if ((p.length - E) % 2 === 0) {
      var A = p.toString("utf16le", E);
      if (A) {
        var N = A.charCodeAt(A.length - 1);
        if (N >= 55296 && N <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = p[p.length - 2], this.lastChar[1] = p[p.length - 1], A.slice(0, -1);
      }
      return A;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = p[p.length - 1], p.toString("utf16le", E, p.length - 1);
  }
  function _(p) {
    var E = p && p.length ? this.write(p) : "";
    if (this.lastNeed) {
      var A = this.lastTotal - this.lastNeed;
      return E + this.lastChar.toString("utf16le", 0, A);
    }
    return E;
  }
  function f(p, E) {
    var A = (p.length - E) % 3;
    return A === 0 ? p.toString("base64", E) : (this.lastNeed = 3 - A, this.lastTotal = 3, A === 1 ? this.lastChar[0] = p[p.length - 1] : (this.lastChar[0] = p[p.length - 2], this.lastChar[1] = p[p.length - 1]), p.toString("base64", E, p.length - A));
  }
  function y(p) {
    var E = p && p.length ? this.write(p) : "";
    return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
  }
  function d(p) {
    return p.toString(this.encoding);
  }
  function x(p) {
    return p && p.length ? this.write(p) : "";
  }
  return Dn;
}
var Fn, Cs;
function Ei() {
  if (Cs)
    return Fn;
  Cs = 1;
  var e = Xe().codes.ERR_STREAM_PREMATURE_CLOSE;
  function t(o) {
    var s = !1;
    return function() {
      if (!s) {
        s = !0;
        for (var n = arguments.length, c = new Array(n), w = 0; w < n; w++)
          c[w] = arguments[w];
        o.apply(this, c);
      }
    };
  }
  function r() {
  }
  function i(o) {
    return o.setHeader && typeof o.abort == "function";
  }
  function a(o, s, n) {
    if (typeof s == "function")
      return a(o, null, s);
    s || (s = {}), n = t(n || r);
    var c = s.readable || s.readable !== !1 && o.readable, w = s.writable || s.writable !== !1 && o.writable, b = function() {
      o.writable || _();
    }, g = o._writableState && o._writableState.finished, _ = function() {
      w = !1, g = !0, c || n.call(o);
    }, f = o._readableState && o._readableState.endEmitted, y = function() {
      c = !1, f = !0, w || n.call(o);
    }, d = function(A) {
      n.call(o, A);
    }, x = function() {
      var A;
      if (c && !f)
        return (!o._readableState || !o._readableState.ended) && (A = new e()), n.call(o, A);
      if (w && !g)
        return (!o._writableState || !o._writableState.ended) && (A = new e()), n.call(o, A);
    }, p = function() {
      o.req.on("finish", _);
    };
    return i(o) ? (o.on("complete", _), o.on("abort", x), o.req ? p() : o.on("request", p)) : w && !o._writableState && (o.on("end", b), o.on("close", b)), o.on("end", y), o.on("finish", _), s.error !== !1 && o.on("error", d), o.on("close", x), function() {
      o.removeListener("complete", _), o.removeListener("abort", x), o.removeListener("request", p), o.req && o.req.removeListener("finish", _), o.removeListener("end", b), o.removeListener("close", b), o.removeListener("finish", _), o.removeListener("end", y), o.removeListener("error", d), o.removeListener("close", x);
    };
  }
  return Fn = a, Fn;
}
var Ln, Rs;
function Zl() {
  if (Rs)
    return Ln;
  Rs = 1;
  var e;
  function t(p, E, A) {
    return E in p ? Object.defineProperty(p, E, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : p[E] = A, p;
  }
  var r = Ei(), i = Symbol("lastResolve"), a = Symbol("lastReject"), o = Symbol("error"), s = Symbol("ended"), n = Symbol("lastPromise"), c = Symbol("handlePromise"), w = Symbol("stream");
  function b(p, E) {
    return {
      value: p,
      done: E
    };
  }
  function g(p) {
    var E = p[i];
    if (E !== null) {
      var A = p[w].read();
      A !== null && (p[n] = null, p[i] = null, p[a] = null, E(b(A, !1)));
    }
  }
  function _(p) {
    bt.nextTick(g, p);
  }
  function f(p, E) {
    return function(A, N) {
      p.then(function() {
        if (E[s]) {
          A(b(void 0, !0));
          return;
        }
        E[c](A, N);
      }, N);
    };
  }
  var y = Object.getPrototypeOf(function() {
  }), d = Object.setPrototypeOf((e = {
    get stream() {
      return this[w];
    },
    next: function() {
      var E = this, A = this[o];
      if (A !== null)
        return Promise.reject(A);
      if (this[s])
        return Promise.resolve(b(void 0, !0));
      if (this[w].destroyed)
        return new Promise(function(P, K) {
          bt.nextTick(function() {
            E[o] ? K(E[o]) : P(b(void 0, !0));
          });
        });
      var N = this[n], O;
      if (N)
        O = new Promise(f(N, this));
      else {
        var z = this[w].read();
        if (z !== null)
          return Promise.resolve(b(z, !1));
        O = new Promise(this[c]);
      }
      return this[n] = O, O;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var E = this;
    return new Promise(function(A, N) {
      E[w].destroy(null, function(O) {
        if (O) {
          N(O);
          return;
        }
        A(b(void 0, !0));
      });
    });
  }), e), y), x = function(E) {
    var A, N = Object.create(d, (A = {}, t(A, w, {
      value: E,
      writable: !0
    }), t(A, i, {
      value: null,
      writable: !0
    }), t(A, a, {
      value: null,
      writable: !0
    }), t(A, o, {
      value: null,
      writable: !0
    }), t(A, s, {
      value: E._readableState.endEmitted,
      writable: !0
    }), t(A, c, {
      value: function(z, P) {
        var K = N[w].read();
        K ? (N[n] = null, N[i] = null, N[a] = null, z(b(K, !1))) : (N[i] = z, N[a] = P);
      },
      writable: !0
    }), A));
    return N[n] = null, r(E, function(O) {
      if (O && O.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var z = N[a];
        z !== null && (N[n] = null, N[i] = null, N[a] = null, z(O)), N[o] = O;
        return;
      }
      var P = N[i];
      P !== null && (N[n] = null, N[i] = null, N[a] = null, P(b(void 0, !0))), N[s] = !0;
    }), E.on("readable", _.bind(null, N)), N;
  };
  return Ln = x, Ln;
}
var Pn, Ns;
function Xl() {
  return Ns || (Ns = 1, Pn = function() {
    throw new Error("Readable.from is not available in the browser");
  }), Pn;
}
var Mn, Os;
function qa() {
  if (Os)
    return Mn;
  Os = 1, Mn = C;
  var e;
  C.ReadableState = K, yi.EventEmitter;
  var t = function(U, st) {
    return U.listeners(st).length;
  }, r = La(), i = jr().Buffer, a = ae.Uint8Array || function() {
  };
  function o(F) {
    return i.from(F);
  }
  function s(F) {
    return i.isBuffer(F) || F instanceof a;
  }
  var n = Wa(), c;
  n && n.debuglog ? c = n.debuglog("stream") : c = function() {
  };
  var w = ql(), b = Ha(), g = Ga(), _ = g.getHighWaterMark, f = Xe().codes, y = f.ERR_INVALID_ARG_TYPE, d = f.ERR_STREAM_PUSH_AFTER_EOF, x = f.ERR_METHOD_NOT_IMPLEMENTED, p = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, A, N;
  Re(C, r);
  var O = b.errorOrDestroy, z = ["error", "close", "destroy", "pause", "resume"];
  function P(F, U, st) {
    if (typeof F.prependListener == "function")
      return F.prependListener(U, st);
    !F._events || !F._events[U] ? F.on(U, st) : Array.isArray(F._events[U]) ? F._events[U].unshift(st) : F._events[U] = [st, F._events[U]];
  }
  function K(F, U, st) {
    e = e || qe(), F = F || {}, typeof st != "boolean" && (st = U instanceof e), this.objectMode = !!F.objectMode, st && (this.objectMode = this.objectMode || !!F.readableObjectMode), this.highWaterMark = _(this, F, "readableHighWaterMark", st), this.buffer = new w(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = F.emitClose !== !1, this.autoDestroy = !!F.autoDestroy, this.destroyed = !1, this.defaultEncoding = F.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, F.encoding && (E || (E = li().StringDecoder), this.decoder = new E(F.encoding), this.encoding = F.encoding);
  }
  function C(F) {
    if (e = e || qe(), !(this instanceof C))
      return new C(F);
    var U = this instanceof e;
    this._readableState = new K(F, this, U), this.readable = !0, F && (typeof F.read == "function" && (this._read = F.read), typeof F.destroy == "function" && (this._destroy = F.destroy)), r.call(this);
  }
  Object.defineProperty(C.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(U) {
      this._readableState && (this._readableState.destroyed = U);
    }
  }), C.prototype.destroy = b.destroy, C.prototype._undestroy = b.undestroy, C.prototype._destroy = function(F, U) {
    U(F);
  }, C.prototype.push = function(F, U) {
    var st = this._readableState, h;
    return st.objectMode ? h = !0 : typeof F == "string" && (U = U || st.defaultEncoding, U !== st.encoding && (F = i.from(F, U), U = ""), h = !0), tt(this, F, U, !1, h);
  }, C.prototype.unshift = function(F) {
    return tt(this, F, null, !0, !1);
  };
  function tt(F, U, st, h, H) {
    c("readableAddChunk", U);
    var T = F._readableState;
    if (U === null)
      T.reading = !1, ut(F, T);
    else {
      var l;
      if (H || (l = I(T, U)), l)
        O(F, l);
      else if (T.objectMode || U && U.length > 0)
        if (typeof U != "string" && !T.objectMode && Object.getPrototypeOf(U) !== i.prototype && (U = o(U)), h)
          T.endEmitted ? O(F, new p()) : at(F, T, U, !0);
        else if (T.ended)
          O(F, new d());
        else {
          if (T.destroyed)
            return !1;
          T.reading = !1, T.decoder && !st ? (U = T.decoder.write(U), T.objectMode || U.length !== 0 ? at(F, T, U, !1) : Y(F, T)) : at(F, T, U, !1);
        }
      else
        h || (T.reading = !1, Y(F, T));
    }
    return !T.ended && (T.length < T.highWaterMark || T.length === 0);
  }
  function at(F, U, st, h) {
    U.flowing && U.length === 0 && !U.sync ? (U.awaitDrain = 0, F.emit("data", st)) : (U.length += U.objectMode ? 1 : st.length, h ? U.buffer.unshift(st) : U.buffer.push(st), U.needReadable && V(F)), Y(F, U);
  }
  function I(F, U) {
    var st;
    return !s(U) && typeof U != "string" && U !== void 0 && !F.objectMode && (st = new y("chunk", ["string", "Buffer", "Uint8Array"], U)), st;
  }
  C.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, C.prototype.setEncoding = function(F) {
    E || (E = li().StringDecoder);
    var U = new E(F);
    this._readableState.decoder = U, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var st = this._readableState.buffer.head, h = ""; st !== null; )
      h += U.write(st.data), st = st.next;
    return this._readableState.buffer.clear(), h !== "" && this._readableState.buffer.push(h), this._readableState.length = h.length, this;
  };
  var j = 1073741824;
  function m(F) {
    return F >= j ? F = j : (F--, F |= F >>> 1, F |= F >>> 2, F |= F >>> 4, F |= F >>> 8, F |= F >>> 16, F++), F;
  }
  function G(F, U) {
    return F <= 0 || U.length === 0 && U.ended ? 0 : U.objectMode ? 1 : F !== F ? U.flowing && U.length ? U.buffer.head.data.length : U.length : (F > U.highWaterMark && (U.highWaterMark = m(F)), F <= U.length ? F : U.ended ? U.length : (U.needReadable = !0, 0));
  }
  C.prototype.read = function(F) {
    c("read", F), F = parseInt(F, 10);
    var U = this._readableState, st = F;
    if (F !== 0 && (U.emittedReadable = !1), F === 0 && U.needReadable && ((U.highWaterMark !== 0 ? U.length >= U.highWaterMark : U.length > 0) || U.ended))
      return c("read: emitReadable", U.length, U.ended), U.length === 0 && U.ended ? S(this) : V(this), null;
    if (F = G(F, U), F === 0 && U.ended)
      return U.length === 0 && S(this), null;
    var h = U.needReadable;
    c("need readable", h), (U.length === 0 || U.length - F < U.highWaterMark) && (h = !0, c("length less than watermark", h)), U.ended || U.reading ? (h = !1, c("reading or ended", h)) : h && (c("do read"), U.reading = !0, U.sync = !0, U.length === 0 && (U.needReadable = !0), this._read(U.highWaterMark), U.sync = !1, U.reading || (F = G(st, U)));
    var H;
    return F > 0 ? H = k(F, U) : H = null, H === null ? (U.needReadable = U.length <= U.highWaterMark, F = 0) : (U.length -= F, U.awaitDrain = 0), U.length === 0 && (U.ended || (U.needReadable = !0), st !== F && U.ended && S(this)), H !== null && this.emit("data", H), H;
  };
  function ut(F, U) {
    if (c("onEofChunk"), !U.ended) {
      if (U.decoder) {
        var st = U.decoder.end();
        st && st.length && (U.buffer.push(st), U.length += U.objectMode ? 1 : st.length);
      }
      U.ended = !0, U.sync ? V(F) : (U.needReadable = !1, U.emittedReadable || (U.emittedReadable = !0, ft(F)));
    }
  }
  function V(F) {
    var U = F._readableState;
    c("emitReadable", U.needReadable, U.emittedReadable), U.needReadable = !1, U.emittedReadable || (c("emitReadable", U.flowing), U.emittedReadable = !0, bt.nextTick(ft, F));
  }
  function ft(F) {
    var U = F._readableState;
    c("emitReadable_", U.destroyed, U.length, U.ended), !U.destroyed && (U.length || U.ended) && (F.emit("readable"), U.emittedReadable = !1), U.needReadable = !U.flowing && !U.ended && U.length <= U.highWaterMark, X(F);
  }
  function Y(F, U) {
    U.readingMore || (U.readingMore = !0, bt.nextTick(ct, F, U));
  }
  function ct(F, U) {
    for (; !U.reading && !U.ended && (U.length < U.highWaterMark || U.flowing && U.length === 0); ) {
      var st = U.length;
      if (c("maybeReadMore read 0"), F.read(0), st === U.length)
        break;
    }
    U.readingMore = !1;
  }
  C.prototype._read = function(F) {
    O(this, new x("_read()"));
  }, C.prototype.pipe = function(F, U) {
    var st = this, h = this._readableState;
    switch (h.pipesCount) {
      case 0:
        h.pipes = F;
        break;
      case 1:
        h.pipes = [h.pipes, F];
        break;
      default:
        h.pipes.push(F);
        break;
    }
    h.pipesCount += 1, c("pipe count=%d opts=%j", h.pipesCount, U);
    var H = (!U || U.end !== !1) && F !== bt.stdout && F !== bt.stderr, T = H ? u : lt;
    h.endEmitted ? bt.nextTick(T) : st.once("end", T), F.on("unpipe", l);
    function l(dt, pt) {
      c("onunpipe"), dt === st && pt && pt.hasUnpiped === !1 && (pt.hasUnpiped = !0, M());
    }
    function u() {
      c("onend"), F.end();
    }
    var v = L(st);
    F.on("drain", v);
    var D = !1;
    function M() {
      c("cleanup"), F.removeListener("close", rt), F.removeListener("finish", et), F.removeListener("drain", v), F.removeListener("error", Q), F.removeListener("unpipe", l), st.removeListener("end", u), st.removeListener("end", lt), st.removeListener("data", B), D = !0, h.awaitDrain && (!F._writableState || F._writableState.needDrain) && v();
    }
    st.on("data", B);
    function B(dt) {
      c("ondata");
      var pt = F.write(dt);
      c("dest.write", pt), pt === !1 && ((h.pipesCount === 1 && h.pipes === F || h.pipesCount > 1 && W(h.pipes, F) !== -1) && !D && (c("false write response, pause", h.awaitDrain), h.awaitDrain++), st.pause());
    }
    function Q(dt) {
      c("onerror", dt), lt(), F.removeListener("error", Q), t(F, "error") === 0 && O(F, dt);
    }
    P(F, "error", Q);
    function rt() {
      F.removeListener("finish", et), lt();
    }
    F.once("close", rt);
    function et() {
      c("onfinish"), F.removeListener("close", rt), lt();
    }
    F.once("finish", et);
    function lt() {
      c("unpipe"), st.unpipe(F);
    }
    return F.emit("pipe", st), h.flowing || (c("pipe resume"), st.resume()), F;
  };
  function L(F) {
    return function() {
      var st = F._readableState;
      c("pipeOnDrain", st.awaitDrain), st.awaitDrain && st.awaitDrain--, st.awaitDrain === 0 && t(F, "data") && (st.flowing = !0, X(F));
    };
  }
  C.prototype.unpipe = function(F) {
    var U = this._readableState, st = {
      hasUnpiped: !1
    };
    if (U.pipesCount === 0)
      return this;
    if (U.pipesCount === 1)
      return F && F !== U.pipes ? this : (F || (F = U.pipes), U.pipes = null, U.pipesCount = 0, U.flowing = !1, F && F.emit("unpipe", this, st), this);
    if (!F) {
      var h = U.pipes, H = U.pipesCount;
      U.pipes = null, U.pipesCount = 0, U.flowing = !1;
      for (var T = 0; T < H; T++)
        h[T].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var l = W(U.pipes, F);
    return l === -1 ? this : (U.pipes.splice(l, 1), U.pipesCount -= 1, U.pipesCount === 1 && (U.pipes = U.pipes[0]), F.emit("unpipe", this, st), this);
  }, C.prototype.on = function(F, U) {
    var st = r.prototype.on.call(this, F, U), h = this._readableState;
    return F === "data" ? (h.readableListening = this.listenerCount("readable") > 0, h.flowing !== !1 && this.resume()) : F === "readable" && !h.endEmitted && !h.readableListening && (h.readableListening = h.needReadable = !0, h.flowing = !1, h.emittedReadable = !1, c("on readable", h.length, h.reading), h.length ? V(this) : h.reading || bt.nextTick(Z, this)), st;
  }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function(F, U) {
    var st = r.prototype.removeListener.call(this, F, U);
    return F === "readable" && bt.nextTick(R, this), st;
  }, C.prototype.removeAllListeners = function(F) {
    var U = r.prototype.removeAllListeners.apply(this, arguments);
    return (F === "readable" || F === void 0) && bt.nextTick(R, this), U;
  };
  function R(F) {
    var U = F._readableState;
    U.readableListening = F.listenerCount("readable") > 0, U.resumeScheduled && !U.paused ? U.flowing = !0 : F.listenerCount("data") > 0 && F.resume();
  }
  function Z(F) {
    c("readable nexttick read 0"), F.read(0);
  }
  C.prototype.resume = function() {
    var F = this._readableState;
    return F.flowing || (c("resume"), F.flowing = !F.readableListening, $(this, F)), F.paused = !1, this;
  };
  function $(F, U) {
    U.resumeScheduled || (U.resumeScheduled = !0, bt.nextTick(J, F, U));
  }
  function J(F, U) {
    c("resume", U.reading), U.reading || F.read(0), U.resumeScheduled = !1, F.emit("resume"), X(F), U.flowing && !U.reading && F.read(0);
  }
  C.prototype.pause = function() {
    return c("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function X(F) {
    var U = F._readableState;
    for (c("flow", U.flowing); U.flowing && F.read() !== null; )
      ;
  }
  C.prototype.wrap = function(F) {
    var U = this, st = this._readableState, h = !1;
    F.on("end", function() {
      if (c("wrapped end"), st.decoder && !st.ended) {
        var l = st.decoder.end();
        l && l.length && U.push(l);
      }
      U.push(null);
    }), F.on("data", function(l) {
      if (c("wrapped data"), st.decoder && (l = st.decoder.write(l)), !(st.objectMode && l == null) && !(!st.objectMode && (!l || !l.length))) {
        var u = U.push(l);
        u || (h = !0, F.pause());
      }
    });
    for (var H in F)
      this[H] === void 0 && typeof F[H] == "function" && (this[H] = /* @__PURE__ */ function(u) {
        return function() {
          return F[u].apply(F, arguments);
        };
      }(H));
    for (var T = 0; T < z.length; T++)
      F.on(z[T], this.emit.bind(this, z[T]));
    return this._read = function(l) {
      c("wrapped _read", l), h && (h = !1, F.resume());
    }, this;
  }, typeof Symbol == "function" && (C.prototype[Symbol.asyncIterator] = function() {
    return A === void 0 && (A = Zl()), A(this);
  }), Object.defineProperty(C.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(C.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(C.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(U) {
      this._readableState && (this._readableState.flowing = U);
    }
  }), C._fromList = k, Object.defineProperty(C.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function k(F, U) {
    if (U.length === 0)
      return null;
    var st;
    return U.objectMode ? st = U.buffer.shift() : !F || F >= U.length ? (U.decoder ? st = U.buffer.join("") : U.buffer.length === 1 ? st = U.buffer.first() : st = U.buffer.concat(U.length), U.buffer.clear()) : st = U.buffer.consume(F, U.decoder), st;
  }
  function S(F) {
    var U = F._readableState;
    c("endReadable", U.endEmitted), U.endEmitted || (U.ended = !0, bt.nextTick(q, U, F));
  }
  function q(F, U) {
    if (c("endReadableNT", F.endEmitted, F.length), !F.endEmitted && F.length === 0 && (F.endEmitted = !0, U.readable = !1, U.emit("end"), F.autoDestroy)) {
      var st = U._writableState;
      (!st || st.autoDestroy && st.finished) && U.destroy();
    }
  }
  typeof Symbol == "function" && (C.from = function(F, U) {
    return N === void 0 && (N = Xl()), N(C, F, U);
  });
  function W(F, U) {
    for (var st = 0, h = F.length; st < h; st++)
      if (F[st] === U)
        return st;
    return -1;
  }
  return Mn;
}
var Un, Bs;
function Va() {
  if (Bs)
    return Un;
  Bs = 1, Un = n;
  var e = Xe().codes, t = e.ERR_METHOD_NOT_IMPLEMENTED, r = e.ERR_MULTIPLE_CALLBACK, i = e.ERR_TRANSFORM_ALREADY_TRANSFORMING, a = e.ERR_TRANSFORM_WITH_LENGTH_0, o = qe();
  Re(n, o);
  function s(b, g) {
    var _ = this._transformState;
    _.transforming = !1;
    var f = _.writecb;
    if (f === null)
      return this.emit("error", new r());
    _.writechunk = null, _.writecb = null, g != null && this.push(g), f(b);
    var y = this._readableState;
    y.reading = !1, (y.needReadable || y.length < y.highWaterMark) && this._read(y.highWaterMark);
  }
  function n(b) {
    if (!(this instanceof n))
      return new n(b);
    o.call(this, b), this._transformState = {
      afterTransform: s.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, b && (typeof b.transform == "function" && (this._transform = b.transform), typeof b.flush == "function" && (this._flush = b.flush)), this.on("prefinish", c);
  }
  function c() {
    var b = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(g, _) {
      w(b, g, _);
    }) : w(this, null, null);
  }
  n.prototype.push = function(b, g) {
    return this._transformState.needTransform = !1, o.prototype.push.call(this, b, g);
  }, n.prototype._transform = function(b, g, _) {
    _(new t("_transform()"));
  }, n.prototype._write = function(b, g, _) {
    var f = this._transformState;
    if (f.writecb = _, f.writechunk = b, f.writeencoding = g, !f.transforming) {
      var y = this._readableState;
      (f.needTransform || y.needReadable || y.length < y.highWaterMark) && this._read(y.highWaterMark);
    }
  }, n.prototype._read = function(b) {
    var g = this._transformState;
    g.writechunk !== null && !g.transforming ? (g.transforming = !0, this._transform(g.writechunk, g.writeencoding, g.afterTransform)) : g.needTransform = !0;
  }, n.prototype._destroy = function(b, g) {
    o.prototype._destroy.call(this, b, function(_) {
      g(_);
    });
  };
  function w(b, g, _) {
    if (g)
      return b.emit("error", g);
    if (_ != null && b.push(_), b._writableState.length)
      throw new a();
    if (b._transformState.transforming)
      throw new i();
    return b.push(null);
  }
  return Un;
}
var zn, Ds;
function Yl() {
  if (Ds)
    return zn;
  Ds = 1, zn = t;
  var e = Va();
  Re(t, e);
  function t(r) {
    if (!(this instanceof t))
      return new t(r);
    e.call(this, r);
  }
  return t.prototype._transform = function(r, i, a) {
    a(null, r);
  }, zn;
}
var jn, Fs;
function Jl() {
  if (Fs)
    return jn;
  Fs = 1;
  var e;
  function t(_) {
    var f = !1;
    return function() {
      f || (f = !0, _.apply(void 0, arguments));
    };
  }
  var r = Xe().codes, i = r.ERR_MISSING_ARGS, a = r.ERR_STREAM_DESTROYED;
  function o(_) {
    if (_)
      throw _;
  }
  function s(_) {
    return _.setHeader && typeof _.abort == "function";
  }
  function n(_, f, y, d) {
    d = t(d);
    var x = !1;
    _.on("close", function() {
      x = !0;
    }), e === void 0 && (e = Ei()), e(_, {
      readable: f,
      writable: y
    }, function(E) {
      if (E)
        return d(E);
      x = !0, d();
    });
    var p = !1;
    return function(E) {
      if (!x && !p) {
        if (p = !0, s(_))
          return _.abort();
        if (typeof _.destroy == "function")
          return _.destroy();
        d(E || new a("pipe"));
      }
    };
  }
  function c(_) {
    _();
  }
  function w(_, f) {
    return _.pipe(f);
  }
  function b(_) {
    return !_.length || typeof _[_.length - 1] != "function" ? o : _.pop();
  }
  function g() {
    for (var _ = arguments.length, f = new Array(_), y = 0; y < _; y++)
      f[y] = arguments[y];
    var d = b(f);
    if (Array.isArray(f[0]) && (f = f[0]), f.length < 2)
      throw new i("streams");
    var x, p = f.map(function(E, A) {
      var N = A < f.length - 1, O = A > 0;
      return n(E, N, O, function(z) {
        x || (x = z), z && p.forEach(c), !N && (p.forEach(c), d(x));
      });
    });
    return f.reduce(w);
  }
  return jn = g, jn;
}
var xi = Yt, Ti = yi.EventEmitter, Ql = Re;
Ql(Yt, Ti);
Yt.Readable = qa();
Yt.Writable = Ka();
Yt.Duplex = qe();
Yt.Transform = Va();
Yt.PassThrough = Yl();
Yt.finished = Ei();
Yt.pipeline = Jl();
Yt.Stream = Yt;
function Yt() {
  Ti.call(this);
}
Yt.prototype.pipe = function(e, t) {
  var r = this;
  function i(b) {
    e.writable && e.write(b) === !1 && r.pause && r.pause();
  }
  r.on("data", i);
  function a() {
    r.readable && r.resume && r.resume();
  }
  e.on("drain", a), !e._isStdio && (!t || t.end !== !1) && (r.on("end", s), r.on("close", n));
  var o = !1;
  function s() {
    o || (o = !0, e.end());
  }
  function n() {
    o || (o = !0, typeof e.destroy == "function" && e.destroy());
  }
  function c(b) {
    if (w(), Ti.listenerCount(this, "error") === 0)
      throw b;
  }
  r.on("error", c), e.on("error", c);
  function w() {
    r.removeListener("data", i), e.removeListener("drain", a), r.removeListener("end", s), r.removeListener("close", n), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", w), r.removeListener("close", w), e.removeListener("close", w);
  }
  return r.on("end", w), r.on("close", w), e.on("close", w), e.emit("pipe", r), e;
};
(function(e) {
  (function(t) {
    t.parser = function(k, S) {
      return new i(k, S);
    }, t.SAXParser = i, t.SAXStream = b, t.createStream = w, t.MAX_BUFFER_LENGTH = 64 * 1024;
    var r = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    t.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function i(k, S) {
      if (!(this instanceof i))
        return new i(k, S);
      var q = this;
      o(q), q.q = q.c = "", q.bufferCheckPosition = t.MAX_BUFFER_LENGTH, q.opt = S || {}, q.opt.lowercase = q.opt.lowercase || q.opt.lowercasetags, q.looseCase = q.opt.lowercase ? "toLowerCase" : "toUpperCase", q.tags = [], q.closed = q.closedRoot = q.sawRoot = !1, q.tag = q.error = null, q.strict = !!k, q.noscript = !!(k || q.opt.noscript), q.state = C.BEGIN, q.strictEntities = q.opt.strictEntities, q.ENTITIES = q.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), q.attribList = [], q.opt.xmlns && (q.ns = Object.create(d)), q.trackPosition = q.opt.position !== !1, q.trackPosition && (q.position = q.line = q.column = 0), at(q, "onready");
    }
    Object.create || (Object.create = function(k) {
      function S() {
      }
      S.prototype = k;
      var q = new S();
      return q;
    }), Object.keys || (Object.keys = function(k) {
      var S = [];
      for (var q in k)
        k.hasOwnProperty(q) && S.push(q);
      return S;
    });
    function a(k) {
      for (var S = Math.max(t.MAX_BUFFER_LENGTH, 10), q = 0, W = 0, F = r.length; W < F; W++) {
        var U = k[r[W]].length;
        if (U > S)
          switch (r[W]) {
            case "textNode":
              j(k);
              break;
            case "cdata":
              I(k, "oncdata", k.cdata), k.cdata = "";
              break;
            case "script":
              I(k, "onscript", k.script), k.script = "";
              break;
            default:
              G(k, "Max buffer length exceeded: " + r[W]);
          }
        q = Math.max(q, U);
      }
      var st = t.MAX_BUFFER_LENGTH - q;
      k.bufferCheckPosition = st + k.position;
    }
    function o(k) {
      for (var S = 0, q = r.length; S < q; S++)
        k[r[S]] = "";
    }
    function s(k) {
      j(k), k.cdata !== "" && (I(k, "oncdata", k.cdata), k.cdata = ""), k.script !== "" && (I(k, "onscript", k.script), k.script = "");
    }
    i.prototype = {
      end: function() {
        ut(this);
      },
      write: X,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        s(this);
      }
    };
    var n;
    try {
      n = xi.Stream;
    } catch {
      n = function() {
      };
    }
    var c = t.EVENTS.filter(function(k) {
      return k !== "error" && k !== "end";
    });
    function w(k, S) {
      return new b(k, S);
    }
    function b(k, S) {
      if (!(this instanceof b))
        return new b(k, S);
      n.apply(this), this._parser = new i(k, S), this.writable = !0, this.readable = !0;
      var q = this;
      this._parser.onend = function() {
        q.emit("end");
      }, this._parser.onerror = function(W) {
        q.emit("error", W), q._parser.error = null;
      }, this._decoder = null, c.forEach(function(W) {
        Object.defineProperty(q, "on" + W, {
          get: function() {
            return q._parser["on" + W];
          },
          set: function(F) {
            if (!F)
              return q.removeAllListeners(W), q._parser["on" + W] = F, F;
            q.on(W, F);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }
    b.prototype = Object.create(n.prototype, {
      constructor: {
        value: b
      }
    }), b.prototype.write = function(k) {
      if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(k)) {
        if (!this._decoder) {
          var S = li().StringDecoder;
          this._decoder = new S("utf8");
        }
        k = this._decoder.write(k);
      }
      return this._parser.write(k.toString()), this.emit("data", k), !0;
    }, b.prototype.end = function(k) {
      return k && k.length && this.write(k), this._parser.end(), !0;
    }, b.prototype.on = function(k, S) {
      var q = this;
      return !q._parser["on" + k] && c.indexOf(k) !== -1 && (q._parser["on" + k] = function() {
        var W = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        W.splice(0, 0, k), q.emit.apply(q, W);
      }), n.prototype.on.call(q, k, S);
    };
    var g = "[CDATA[", _ = "DOCTYPE", f = "http://www.w3.org/XML/1998/namespace", y = "http://www.w3.org/2000/xmlns/", d = { xml: f, xmlns: y }, x = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, E = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, A = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function N(k) {
      return k === " " || k === `
` || k === "\r" || k === "	";
    }
    function O(k) {
      return k === '"' || k === "'";
    }
    function z(k) {
      return k === ">" || N(k);
    }
    function P(k, S) {
      return k.test(S);
    }
    function K(k, S) {
      return !P(k, S);
    }
    var C = 0;
    t.STATE = {
      BEGIN: C++,
      // leading byte order mark or whitespace
      BEGIN_WHITESPACE: C++,
      // leading whitespace
      TEXT: C++,
      // general stuff
      TEXT_ENTITY: C++,
      // &amp and such.
      OPEN_WAKA: C++,
      // <
      SGML_DECL: C++,
      // <!BLARG
      SGML_DECL_QUOTED: C++,
      // <!BLARG foo "bar
      DOCTYPE: C++,
      // <!DOCTYPE
      DOCTYPE_QUOTED: C++,
      // <!DOCTYPE "//blah
      DOCTYPE_DTD: C++,
      // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: C++,
      // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: C++,
      // <!-
      COMMENT: C++,
      // <!--
      COMMENT_ENDING: C++,
      // <!-- blah -
      COMMENT_ENDED: C++,
      // <!-- blah --
      CDATA: C++,
      // <![CDATA[ something
      CDATA_ENDING: C++,
      // ]
      CDATA_ENDING_2: C++,
      // ]]
      PROC_INST: C++,
      // <?hi
      PROC_INST_BODY: C++,
      // <?hi there
      PROC_INST_ENDING: C++,
      // <?hi "there" ?
      OPEN_TAG: C++,
      // <strong
      OPEN_TAG_SLASH: C++,
      // <strong /
      ATTRIB: C++,
      // <a
      ATTRIB_NAME: C++,
      // <a foo
      ATTRIB_NAME_SAW_WHITE: C++,
      // <a foo _
      ATTRIB_VALUE: C++,
      // <a foo=
      ATTRIB_VALUE_QUOTED: C++,
      // <a foo="bar
      ATTRIB_VALUE_CLOSED: C++,
      // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: C++,
      // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: C++,
      // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: C++,
      // <foo bar=&quot
      CLOSE_TAG: C++,
      // </a
      CLOSE_TAG_SAW_WHITE: C++,
      // </a   >
      SCRIPT: C++,
      // <script> ...
      SCRIPT_ENDING: C++
      // <script> ... <
    }, t.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, t.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(t.ENTITIES).forEach(function(k) {
      var S = t.ENTITIES[k], q = typeof S == "number" ? String.fromCharCode(S) : S;
      t.ENTITIES[k] = q;
    });
    for (var tt in t.STATE)
      t.STATE[t.STATE[tt]] = tt;
    C = t.STATE;
    function at(k, S, q) {
      k[S] && k[S](q);
    }
    function I(k, S, q) {
      k.textNode && j(k), at(k, S, q);
    }
    function j(k) {
      k.textNode = m(k.opt, k.textNode), k.textNode && at(k, "ontext", k.textNode), k.textNode = "";
    }
    function m(k, S) {
      return k.trim && (S = S.trim()), k.normalize && (S = S.replace(/\s+/g, " ")), S;
    }
    function G(k, S) {
      return j(k), k.trackPosition && (S += `
Line: ` + k.line + `
Column: ` + k.column + `
Char: ` + k.c), S = new Error(S), k.error = S, at(k, "onerror", S), k;
    }
    function ut(k) {
      return k.sawRoot && !k.closedRoot && V(k, "Unclosed root tag"), k.state !== C.BEGIN && k.state !== C.BEGIN_WHITESPACE && k.state !== C.TEXT && G(k, "Unexpected end"), j(k), k.c = "", k.closed = !0, at(k, "onend"), i.call(k, k.strict, k.opt), k;
    }
    function V(k, S) {
      if (typeof k != "object" || !(k instanceof i))
        throw new Error("bad call to strictFail");
      k.strict && G(k, S);
    }
    function ft(k) {
      k.strict || (k.tagName = k.tagName[k.looseCase]());
      var S = k.tags[k.tags.length - 1] || k, q = k.tag = { name: k.tagName, attributes: {} };
      k.opt.xmlns && (q.ns = S.ns), k.attribList.length = 0, I(k, "onopentagstart", q);
    }
    function Y(k, S) {
      var q = k.indexOf(":"), W = q < 0 ? ["", k] : k.split(":"), F = W[0], U = W[1];
      return S && k === "xmlns" && (F = "xmlns", U = ""), { prefix: F, local: U };
    }
    function ct(k) {
      if (k.strict || (k.attribName = k.attribName[k.looseCase]()), k.attribList.indexOf(k.attribName) !== -1 || k.tag.attributes.hasOwnProperty(k.attribName)) {
        k.attribName = k.attribValue = "";
        return;
      }
      if (k.opt.xmlns) {
        var S = Y(k.attribName, !0), q = S.prefix, W = S.local;
        if (q === "xmlns")
          if (W === "xml" && k.attribValue !== f)
            V(
              k,
              "xml: prefix must be bound to " + f + `
Actual: ` + k.attribValue
            );
          else if (W === "xmlns" && k.attribValue !== y)
            V(
              k,
              "xmlns: prefix must be bound to " + y + `
Actual: ` + k.attribValue
            );
          else {
            var F = k.tag, U = k.tags[k.tags.length - 1] || k;
            F.ns === U.ns && (F.ns = Object.create(U.ns)), F.ns[W] = k.attribValue;
          }
        k.attribList.push([k.attribName, k.attribValue]);
      } else
        k.tag.attributes[k.attribName] = k.attribValue, I(k, "onattribute", {
          name: k.attribName,
          value: k.attribValue
        });
      k.attribName = k.attribValue = "";
    }
    function L(k, S) {
      if (k.opt.xmlns) {
        var q = k.tag, W = Y(k.tagName);
        q.prefix = W.prefix, q.local = W.local, q.uri = q.ns[W.prefix] || "", q.prefix && !q.uri && (V(k, "Unbound namespace prefix: " + JSON.stringify(k.tagName)), q.uri = W.prefix);
        var F = k.tags[k.tags.length - 1] || k;
        q.ns && F.ns !== q.ns && Object.keys(q.ns).forEach(function(B) {
          I(k, "onopennamespace", {
            prefix: B,
            uri: q.ns[B]
          });
        });
        for (var U = 0, st = k.attribList.length; U < st; U++) {
          var h = k.attribList[U], H = h[0], T = h[1], l = Y(H, !0), u = l.prefix, v = l.local, D = u === "" ? "" : q.ns[u] || "", M = {
            name: H,
            value: T,
            prefix: u,
            local: v,
            uri: D
          };
          u && u !== "xmlns" && !D && (V(k, "Unbound namespace prefix: " + JSON.stringify(u)), M.uri = u), k.tag.attributes[H] = M, I(k, "onattribute", M);
        }
        k.attribList.length = 0;
      }
      k.tag.isSelfClosing = !!S, k.sawRoot = !0, k.tags.push(k.tag), I(k, "onopentag", k.tag), S || (!k.noscript && k.tagName.toLowerCase() === "script" ? k.state = C.SCRIPT : k.state = C.TEXT, k.tag = null, k.tagName = ""), k.attribName = k.attribValue = "", k.attribList.length = 0;
    }
    function R(k) {
      if (!k.tagName) {
        V(k, "Weird empty close tag."), k.textNode += "</>", k.state = C.TEXT;
        return;
      }
      if (k.script) {
        if (k.tagName !== "script") {
          k.script += "</" + k.tagName + ">", k.tagName = "", k.state = C.SCRIPT;
          return;
        }
        I(k, "onscript", k.script), k.script = "";
      }
      var S = k.tags.length, q = k.tagName;
      k.strict || (q = q[k.looseCase]());
      for (var W = q; S--; ) {
        var F = k.tags[S];
        if (F.name !== W)
          V(k, "Unexpected close tag");
        else
          break;
      }
      if (S < 0) {
        V(k, "Unmatched closing tag: " + k.tagName), k.textNode += "</" + k.tagName + ">", k.state = C.TEXT;
        return;
      }
      k.tagName = q;
      for (var U = k.tags.length; U-- > S; ) {
        var st = k.tag = k.tags.pop();
        k.tagName = k.tag.name, I(k, "onclosetag", k.tagName);
        var h = {};
        for (var H in st.ns)
          h[H] = st.ns[H];
        var T = k.tags[k.tags.length - 1] || k;
        k.opt.xmlns && st.ns !== T.ns && Object.keys(st.ns).forEach(function(l) {
          var u = st.ns[l];
          I(k, "onclosenamespace", { prefix: l, uri: u });
        });
      }
      S === 0 && (k.closedRoot = !0), k.tagName = k.attribValue = k.attribName = "", k.attribList.length = 0, k.state = C.TEXT;
    }
    function Z(k) {
      var S = k.entity, q = S.toLowerCase(), W, F = "";
      return k.ENTITIES[S] ? k.ENTITIES[S] : k.ENTITIES[q] ? k.ENTITIES[q] : (S = q, S.charAt(0) === "#" && (S.charAt(1) === "x" ? (S = S.slice(2), W = parseInt(S, 16), F = W.toString(16)) : (S = S.slice(1), W = parseInt(S, 10), F = W.toString(10))), S = S.replace(/^0+/, ""), isNaN(W) || F.toLowerCase() !== S ? (V(k, "Invalid character entity"), "&" + k.entity + ";") : String.fromCodePoint(W));
    }
    function $(k, S) {
      S === "<" ? (k.state = C.OPEN_WAKA, k.startTagPosition = k.position) : N(S) || (V(k, "Non-whitespace before first tag."), k.textNode = S, k.state = C.TEXT);
    }
    function J(k, S) {
      var q = "";
      return S < k.length && (q = k.charAt(S)), q;
    }
    function X(k) {
      var S = this;
      if (this.error)
        throw this.error;
      if (S.closed)
        return G(
          S,
          "Cannot write after close. Assign an onready handler."
        );
      if (k === null)
        return ut(S);
      typeof k == "object" && (k = k.toString());
      for (var q = 0, W = ""; W = J(k, q++), S.c = W, !!W; )
        switch (S.trackPosition && (S.position++, W === `
` ? (S.line++, S.column = 0) : S.column++), S.state) {
          case C.BEGIN:
            if (S.state = C.BEGIN_WHITESPACE, W === "\uFEFF")
              continue;
            $(S, W);
            continue;
          case C.BEGIN_WHITESPACE:
            $(S, W);
            continue;
          case C.TEXT:
            if (S.sawRoot && !S.closedRoot) {
              for (var F = q - 1; W && W !== "<" && W !== "&"; )
                W = J(k, q++), W && S.trackPosition && (S.position++, W === `
` ? (S.line++, S.column = 0) : S.column++);
              S.textNode += k.substring(F, q - 1);
            }
            W === "<" && !(S.sawRoot && S.closedRoot && !S.strict) ? (S.state = C.OPEN_WAKA, S.startTagPosition = S.position) : (!N(W) && (!S.sawRoot || S.closedRoot) && V(S, "Text data outside of root node."), W === "&" ? S.state = C.TEXT_ENTITY : S.textNode += W);
            continue;
          case C.SCRIPT:
            W === "<" ? S.state = C.SCRIPT_ENDING : S.script += W;
            continue;
          case C.SCRIPT_ENDING:
            W === "/" ? S.state = C.CLOSE_TAG : (S.script += "<" + W, S.state = C.SCRIPT);
            continue;
          case C.OPEN_WAKA:
            if (W === "!")
              S.state = C.SGML_DECL, S.sgmlDecl = "";
            else if (!N(W))
              if (P(x, W))
                S.state = C.OPEN_TAG, S.tagName = W;
              else if (W === "/")
                S.state = C.CLOSE_TAG, S.tagName = "";
              else if (W === "?")
                S.state = C.PROC_INST, S.procInstName = S.procInstBody = "";
              else {
                if (V(S, "Unencoded <"), S.startTagPosition + 1 < S.position) {
                  var U = S.position - S.startTagPosition;
                  W = new Array(U).join(" ") + W;
                }
                S.textNode += "<" + W, S.state = C.TEXT;
              }
            continue;
          case C.SGML_DECL:
            (S.sgmlDecl + W).toUpperCase() === g ? (I(S, "onopencdata"), S.state = C.CDATA, S.sgmlDecl = "", S.cdata = "") : S.sgmlDecl + W === "--" ? (S.state = C.COMMENT, S.comment = "", S.sgmlDecl = "") : (S.sgmlDecl + W).toUpperCase() === _ ? (S.state = C.DOCTYPE, (S.doctype || S.sawRoot) && V(
              S,
              "Inappropriately located doctype declaration"
            ), S.doctype = "", S.sgmlDecl = "") : W === ">" ? (I(S, "onsgmldeclaration", S.sgmlDecl), S.sgmlDecl = "", S.state = C.TEXT) : (O(W) && (S.state = C.SGML_DECL_QUOTED), S.sgmlDecl += W);
            continue;
          case C.SGML_DECL_QUOTED:
            W === S.q && (S.state = C.SGML_DECL, S.q = ""), S.sgmlDecl += W;
            continue;
          case C.DOCTYPE:
            W === ">" ? (S.state = C.TEXT, I(S, "ondoctype", S.doctype), S.doctype = !0) : (S.doctype += W, W === "[" ? S.state = C.DOCTYPE_DTD : O(W) && (S.state = C.DOCTYPE_QUOTED, S.q = W));
            continue;
          case C.DOCTYPE_QUOTED:
            S.doctype += W, W === S.q && (S.q = "", S.state = C.DOCTYPE);
            continue;
          case C.DOCTYPE_DTD:
            S.doctype += W, W === "]" ? S.state = C.DOCTYPE : O(W) && (S.state = C.DOCTYPE_DTD_QUOTED, S.q = W);
            continue;
          case C.DOCTYPE_DTD_QUOTED:
            S.doctype += W, W === S.q && (S.state = C.DOCTYPE_DTD, S.q = "");
            continue;
          case C.COMMENT:
            W === "-" ? S.state = C.COMMENT_ENDING : S.comment += W;
            continue;
          case C.COMMENT_ENDING:
            W === "-" ? (S.state = C.COMMENT_ENDED, S.comment = m(S.opt, S.comment), S.comment && I(S, "oncomment", S.comment), S.comment = "") : (S.comment += "-" + W, S.state = C.COMMENT);
            continue;
          case C.COMMENT_ENDED:
            W !== ">" ? (V(S, "Malformed comment"), S.comment += "--" + W, S.state = C.COMMENT) : S.state = C.TEXT;
            continue;
          case C.CDATA:
            W === "]" ? S.state = C.CDATA_ENDING : S.cdata += W;
            continue;
          case C.CDATA_ENDING:
            W === "]" ? S.state = C.CDATA_ENDING_2 : (S.cdata += "]" + W, S.state = C.CDATA);
            continue;
          case C.CDATA_ENDING_2:
            W === ">" ? (S.cdata && I(S, "oncdata", S.cdata), I(S, "onclosecdata"), S.cdata = "", S.state = C.TEXT) : W === "]" ? S.cdata += "]" : (S.cdata += "]]" + W, S.state = C.CDATA);
            continue;
          case C.PROC_INST:
            W === "?" ? S.state = C.PROC_INST_ENDING : N(W) ? S.state = C.PROC_INST_BODY : S.procInstName += W;
            continue;
          case C.PROC_INST_BODY:
            if (!S.procInstBody && N(W))
              continue;
            W === "?" ? S.state = C.PROC_INST_ENDING : S.procInstBody += W;
            continue;
          case C.PROC_INST_ENDING:
            W === ">" ? (I(S, "onprocessinginstruction", {
              name: S.procInstName,
              body: S.procInstBody
            }), S.procInstName = S.procInstBody = "", S.state = C.TEXT) : (S.procInstBody += "?" + W, S.state = C.PROC_INST_BODY);
            continue;
          case C.OPEN_TAG:
            P(p, W) ? S.tagName += W : (ft(S), W === ">" ? L(S) : W === "/" ? S.state = C.OPEN_TAG_SLASH : (N(W) || V(S, "Invalid character in tag name"), S.state = C.ATTRIB));
            continue;
          case C.OPEN_TAG_SLASH:
            W === ">" ? (L(S, !0), R(S)) : (V(S, "Forward-slash in opening tag not followed by >"), S.state = C.ATTRIB);
            continue;
          case C.ATTRIB:
            if (N(W))
              continue;
            W === ">" ? L(S) : W === "/" ? S.state = C.OPEN_TAG_SLASH : P(x, W) ? (S.attribName = W, S.attribValue = "", S.state = C.ATTRIB_NAME) : V(S, "Invalid attribute name");
            continue;
          case C.ATTRIB_NAME:
            W === "=" ? S.state = C.ATTRIB_VALUE : W === ">" ? (V(S, "Attribute without value"), S.attribValue = S.attribName, ct(S), L(S)) : N(W) ? S.state = C.ATTRIB_NAME_SAW_WHITE : P(p, W) ? S.attribName += W : V(S, "Invalid attribute name");
            continue;
          case C.ATTRIB_NAME_SAW_WHITE:
            if (W === "=")
              S.state = C.ATTRIB_VALUE;
            else {
              if (N(W))
                continue;
              V(S, "Attribute without value"), S.tag.attributes[S.attribName] = "", S.attribValue = "", I(S, "onattribute", {
                name: S.attribName,
                value: ""
              }), S.attribName = "", W === ">" ? L(S) : P(x, W) ? (S.attribName = W, S.state = C.ATTRIB_NAME) : (V(S, "Invalid attribute name"), S.state = C.ATTRIB);
            }
            continue;
          case C.ATTRIB_VALUE:
            if (N(W))
              continue;
            O(W) ? (S.q = W, S.state = C.ATTRIB_VALUE_QUOTED) : (V(S, "Unquoted attribute value"), S.state = C.ATTRIB_VALUE_UNQUOTED, S.attribValue = W);
            continue;
          case C.ATTRIB_VALUE_QUOTED:
            if (W !== S.q) {
              W === "&" ? S.state = C.ATTRIB_VALUE_ENTITY_Q : S.attribValue += W;
              continue;
            }
            ct(S), S.q = "", S.state = C.ATTRIB_VALUE_CLOSED;
            continue;
          case C.ATTRIB_VALUE_CLOSED:
            N(W) ? S.state = C.ATTRIB : W === ">" ? L(S) : W === "/" ? S.state = C.OPEN_TAG_SLASH : P(x, W) ? (V(S, "No whitespace between attributes"), S.attribName = W, S.attribValue = "", S.state = C.ATTRIB_NAME) : V(S, "Invalid attribute name");
            continue;
          case C.ATTRIB_VALUE_UNQUOTED:
            if (!z(W)) {
              W === "&" ? S.state = C.ATTRIB_VALUE_ENTITY_U : S.attribValue += W;
              continue;
            }
            ct(S), W === ">" ? L(S) : S.state = C.ATTRIB;
            continue;
          case C.CLOSE_TAG:
            if (S.tagName)
              W === ">" ? R(S) : P(p, W) ? S.tagName += W : S.script ? (S.script += "</" + S.tagName, S.tagName = "", S.state = C.SCRIPT) : (N(W) || V(S, "Invalid tagname in closing tag"), S.state = C.CLOSE_TAG_SAW_WHITE);
            else {
              if (N(W))
                continue;
              K(x, W) ? S.script ? (S.script += "</" + W, S.state = C.SCRIPT) : V(S, "Invalid tagname in closing tag.") : S.tagName = W;
            }
            continue;
          case C.CLOSE_TAG_SAW_WHITE:
            if (N(W))
              continue;
            W === ">" ? R(S) : V(S, "Invalid characters in closing tag");
            continue;
          case C.TEXT_ENTITY:
          case C.ATTRIB_VALUE_ENTITY_Q:
          case C.ATTRIB_VALUE_ENTITY_U:
            var st, h;
            switch (S.state) {
              case C.TEXT_ENTITY:
                st = C.TEXT, h = "textNode";
                break;
              case C.ATTRIB_VALUE_ENTITY_Q:
                st = C.ATTRIB_VALUE_QUOTED, h = "attribValue";
                break;
              case C.ATTRIB_VALUE_ENTITY_U:
                st = C.ATTRIB_VALUE_UNQUOTED, h = "attribValue";
                break;
            }
            W === ";" ? (S[h] += Z(S), S.entity = "", S.state = st) : P(S.entity.length ? A : E, W) ? S.entity += W : (V(S, "Invalid character in entity name"), S[h] += "&" + S.entity + W, S.entity = "", S.state = st);
            continue;
          default:
            throw new Error(S, "Unknown state: " + S.state);
        }
      return S.position >= S.bufferCheckPosition && a(S), S;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    String.fromCodePoint || function() {
      var k = String.fromCharCode, S = Math.floor, q = function() {
        var W = 16384, F = [], U, st, h = -1, H = arguments.length;
        if (!H)
          return "";
        for (var T = ""; ++h < H; ) {
          var l = Number(arguments[h]);
          if (!isFinite(l) || // `NaN`, `+Infinity`, or `-Infinity`
          l < 0 || // not a valid Unicode code point
          l > 1114111 || // not a valid Unicode code point
          S(l) !== l)
            throw RangeError("Invalid code point: " + l);
          l <= 65535 ? F.push(l) : (l -= 65536, U = (l >> 10) + 55296, st = l % 1024 + 56320, F.push(U, st)), (h + 1 === H || F.length > W) && (T += k.apply(null, F), F.length = 0);
        }
        return T;
      };
      Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
        value: q,
        configurable: !0,
        writable: !0
      }) : String.fromCodePoint = q;
    }();
  })(e);
})(xa);
var Ai = {
  isArray: function(e) {
    return Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
  }
}, tu = Ai.isArray, Si = {
  copyOptions: function(e) {
    var t, r = {};
    for (t in e)
      e.hasOwnProperty(t) && (r[t] = e[t]);
    return r;
  },
  ensureFlagExists: function(e, t) {
    (!(e in t) || typeof t[e] != "boolean") && (t[e] = !1);
  },
  ensureSpacesExists: function(e) {
    (!("spaces" in e) || typeof e.spaces != "number" && typeof e.spaces != "string") && (e.spaces = 0);
  },
  ensureAlwaysArrayExists: function(e) {
    (!("alwaysArray" in e) || typeof e.alwaysArray != "boolean" && !tu(e.alwaysArray)) && (e.alwaysArray = !1);
  },
  ensureKeyExists: function(e, t) {
    (!(e + "Key" in t) || typeof t[e + "Key"] != "string") && (t[e + "Key"] = t.compact ? "_" + e : e);
  },
  checkFnExists: function(e, t) {
    return e + "Fn" in t;
  }
}, eu = xa, Et = Si, Ge = Ai.isArray, ot, yt;
function ru(e) {
  return ot = Et.copyOptions(e), Et.ensureFlagExists("ignoreDeclaration", ot), Et.ensureFlagExists("ignoreInstruction", ot), Et.ensureFlagExists("ignoreAttributes", ot), Et.ensureFlagExists("ignoreText", ot), Et.ensureFlagExists("ignoreComment", ot), Et.ensureFlagExists("ignoreCdata", ot), Et.ensureFlagExists("ignoreDoctype", ot), Et.ensureFlagExists("compact", ot), Et.ensureFlagExists("alwaysChildren", ot), Et.ensureFlagExists("addParent", ot), Et.ensureFlagExists("trim", ot), Et.ensureFlagExists("nativeType", ot), Et.ensureFlagExists("nativeTypeAttributes", ot), Et.ensureFlagExists("sanitize", ot), Et.ensureFlagExists("instructionHasAttributes", ot), Et.ensureFlagExists("captureSpacesBetweenElements", ot), Et.ensureAlwaysArrayExists(ot), Et.ensureKeyExists("declaration", ot), Et.ensureKeyExists("instruction", ot), Et.ensureKeyExists("attributes", ot), Et.ensureKeyExists("text", ot), Et.ensureKeyExists("comment", ot), Et.ensureKeyExists("cdata", ot), Et.ensureKeyExists("doctype", ot), Et.ensureKeyExists("type", ot), Et.ensureKeyExists("name", ot), Et.ensureKeyExists("elements", ot), Et.ensureKeyExists("parent", ot), ot;
}
function $a(e) {
  var t = Number(e);
  if (!isNaN(t))
    return t;
  var r = e.toLowerCase();
  return r === "true" ? !0 : r === "false" ? !1 : e;
}
function dr(e, t) {
  var r;
  if (ot.compact) {
    if (!yt[ot[e + "Key"]] && (Ge(ot.alwaysArray) ? ot.alwaysArray.indexOf(ot[e + "Key"]) !== -1 : ot.alwaysArray) && (yt[ot[e + "Key"]] = []), yt[ot[e + "Key"]] && !Ge(yt[ot[e + "Key"]]) && (yt[ot[e + "Key"]] = [yt[ot[e + "Key"]]]), e + "Fn" in ot && typeof t == "string" && (t = ot[e + "Fn"](t, yt)), e === "instruction" && ("instructionFn" in ot || "instructionNameFn" in ot)) {
      for (r in t)
        if (t.hasOwnProperty(r))
          if ("instructionFn" in ot)
            t[r] = ot.instructionFn(t[r], r, yt);
          else {
            var i = t[r];
            delete t[r], t[ot.instructionNameFn(r, i, yt)] = i;
          }
    }
    Ge(yt[ot[e + "Key"]]) ? yt[ot[e + "Key"]].push(t) : yt[ot[e + "Key"]] = t;
  } else {
    yt[ot.elementsKey] || (yt[ot.elementsKey] = []);
    var a = {};
    if (a[ot.typeKey] = e, e === "instruction") {
      for (r in t)
        if (t.hasOwnProperty(r))
          break;
      a[ot.nameKey] = "instructionNameFn" in ot ? ot.instructionNameFn(r, t, yt) : r, ot.instructionHasAttributes ? (a[ot.attributesKey] = t[r][ot.attributesKey], "instructionFn" in ot && (a[ot.attributesKey] = ot.instructionFn(a[ot.attributesKey], r, yt))) : ("instructionFn" in ot && (t[r] = ot.instructionFn(t[r], r, yt)), a[ot.instructionKey] = t[r]);
    } else
      e + "Fn" in ot && (t = ot[e + "Fn"](t, yt)), a[ot[e + "Key"]] = t;
    ot.addParent && (a[ot.parentKey] = yt), yt[ot.elementsKey].push(a);
  }
}
function Za(e) {
  if ("attributesFn" in ot && e && (e = ot.attributesFn(e, yt)), (ot.trim || "attributeValueFn" in ot || "attributeNameFn" in ot || ot.nativeTypeAttributes) && e) {
    var t;
    for (t in e)
      if (e.hasOwnProperty(t) && (ot.trim && (e[t] = e[t].trim()), ot.nativeTypeAttributes && (e[t] = $a(e[t])), "attributeValueFn" in ot && (e[t] = ot.attributeValueFn(e[t], t, yt)), "attributeNameFn" in ot)) {
        var r = e[t];
        delete e[t], e[ot.attributeNameFn(t, e[t], yt)] = r;
      }
  }
  return e;
}
function nu(e) {
  var t = {};
  if (e.body && (e.name.toLowerCase() === "xml" || ot.instructionHasAttributes)) {
    for (var r = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g, i; (i = r.exec(e.body)) !== null; )
      t[i[1]] = i[2] || i[3] || i[4];
    t = Za(t);
  }
  if (e.name.toLowerCase() === "xml") {
    if (ot.ignoreDeclaration)
      return;
    yt[ot.declarationKey] = {}, Object.keys(t).length && (yt[ot.declarationKey][ot.attributesKey] = t), ot.addParent && (yt[ot.declarationKey][ot.parentKey] = yt);
  } else {
    if (ot.ignoreInstruction)
      return;
    ot.trim && (e.body = e.body.trim());
    var a = {};
    ot.instructionHasAttributes && Object.keys(t).length ? (a[e.name] = {}, a[e.name][ot.attributesKey] = t) : a[e.name] = e.body, dr("instruction", a);
  }
}
function iu(e, t) {
  var r;
  if (typeof e == "object" && (t = e.attributes, e = e.name), t = Za(t), "elementNameFn" in ot && (e = ot.elementNameFn(e, yt)), ot.compact) {
    if (r = {}, !ot.ignoreAttributes && t && Object.keys(t).length) {
      r[ot.attributesKey] = {};
      var i;
      for (i in t)
        t.hasOwnProperty(i) && (r[ot.attributesKey][i] = t[i]);
    }
    !(e in yt) && (Ge(ot.alwaysArray) ? ot.alwaysArray.indexOf(e) !== -1 : ot.alwaysArray) && (yt[e] = []), yt[e] && !Ge(yt[e]) && (yt[e] = [yt[e]]), Ge(yt[e]) ? yt[e].push(r) : yt[e] = r;
  } else
    yt[ot.elementsKey] || (yt[ot.elementsKey] = []), r = {}, r[ot.typeKey] = "element", r[ot.nameKey] = e, !ot.ignoreAttributes && t && Object.keys(t).length && (r[ot.attributesKey] = t), ot.alwaysChildren && (r[ot.elementsKey] = []), yt[ot.elementsKey].push(r);
  r[ot.parentKey] = yt, yt = r;
}
function su(e) {
  ot.ignoreText || !e.trim() && !ot.captureSpacesBetweenElements || (ot.trim && (e = e.trim()), ot.nativeType && (e = $a(e)), ot.sanitize && (e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), dr("text", e));
}
function au(e) {
  ot.ignoreComment || (ot.trim && (e = e.trim()), dr("comment", e));
}
function ou(e) {
  var t = yt[ot.parentKey];
  ot.addParent || delete yt[ot.parentKey], yt = t;
}
function lu(e) {
  ot.ignoreCdata || (ot.trim && (e = e.trim()), dr("cdata", e));
}
function uu(e) {
  ot.ignoreDoctype || (e = e.replace(/^ /, ""), ot.trim && (e = e.trim()), dr("doctype", e));
}
function cu(e) {
  e.note = e;
}
var Xa = function(e, t) {
  var r = eu.parser(!0, {}), i = {};
  if (yt = i, ot = ru(t), r.opt = { strictEntities: !0 }, r.onopentag = iu, r.ontext = su, r.oncomment = au, r.onclosetag = ou, r.onerror = cu, r.oncdata = lu, r.ondoctype = uu, r.onprocessinginstruction = nu, r.write(e).close(), i[ot.elementsKey]) {
    var a = i[ot.elementsKey];
    delete i[ot.elementsKey], i[ot.elementsKey] = a, delete i.text;
  }
  return i;
}, Ls = Si, hu = Xa;
function fu(e) {
  var t = Ls.copyOptions(e);
  return Ls.ensureSpacesExists(t), t;
}
var du = function(e, t) {
  var r, i, a, o;
  return r = fu(t), i = hu(e, r), o = "compact" in r && r.compact ? "_parent" : "parent", "addParent" in r && r.addParent ? a = JSON.stringify(i, function(s, n) {
    return s === o ? "_" : n;
  }, r.spaces) : a = JSON.stringify(i, null, r.spaces), a.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}, St = Si, pu = Ai.isArray, Mt, Ut;
function mu(e) {
  var t = St.copyOptions(e);
  return St.ensureFlagExists("ignoreDeclaration", t), St.ensureFlagExists("ignoreInstruction", t), St.ensureFlagExists("ignoreAttributes", t), St.ensureFlagExists("ignoreText", t), St.ensureFlagExists("ignoreComment", t), St.ensureFlagExists("ignoreCdata", t), St.ensureFlagExists("ignoreDoctype", t), St.ensureFlagExists("compact", t), St.ensureFlagExists("indentText", t), St.ensureFlagExists("indentCdata", t), St.ensureFlagExists("indentAttributes", t), St.ensureFlagExists("indentInstruction", t), St.ensureFlagExists("fullTagEmptyElement", t), St.ensureFlagExists("noQuotesForNativeAttributes", t), St.ensureSpacesExists(t), typeof t.spaces == "number" && (t.spaces = Array(t.spaces + 1).join(" ")), St.ensureKeyExists("declaration", t), St.ensureKeyExists("instruction", t), St.ensureKeyExists("attributes", t), St.ensureKeyExists("text", t), St.ensureKeyExists("comment", t), St.ensureKeyExists("cdata", t), St.ensureKeyExists("doctype", t), St.ensureKeyExists("type", t), St.ensureKeyExists("name", t), St.ensureKeyExists("elements", t), t;
}
function se(e, t, r) {
  return (!r && e.spaces ? `
` : "") + Array(t + 1).join(e.spaces);
}
function Wr(e, t, r) {
  if (t.ignoreAttributes)
    return "";
  "attributesFn" in t && (e = t.attributesFn(e, Ut, Mt));
  var i, a, o, s, n = [];
  for (i in e)
    e.hasOwnProperty(i) && e[i] !== null && e[i] !== void 0 && (s = t.noQuotesForNativeAttributes && typeof e[i] != "string" ? "" : '"', a = "" + e[i], a = a.replace(/"/g, "&quot;"), o = "attributeNameFn" in t ? t.attributeNameFn(i, a, Ut, Mt) : i, n.push(t.spaces && t.indentAttributes ? se(t, r + 1, !1) : " "), n.push(o + "=" + s + ("attributeValueFn" in t ? t.attributeValueFn(a, i, Ut, Mt) : a) + s));
  return e && Object.keys(e).length && t.spaces && t.indentAttributes && n.push(se(t, r, !1)), n.join("");
}
function Ya(e, t, r) {
  return Mt = e, Ut = "xml", t.ignoreDeclaration ? "" : "<?xml" + Wr(e[t.attributesKey], t, r) + "?>";
}
function Ja(e, t, r) {
  if (t.ignoreInstruction)
    return "";
  var i;
  for (i in e)
    if (e.hasOwnProperty(i))
      break;
  var a = "instructionNameFn" in t ? t.instructionNameFn(i, e[i], Ut, Mt) : i;
  if (typeof e[i] == "object")
    return Mt = e, Ut = a, "<?" + a + Wr(e[i][t.attributesKey], t, r) + "?>";
  var o = e[i] ? e[i] : "";
  return "instructionFn" in t && (o = t.instructionFn(o, i, Ut, Mt)), "<?" + a + (o ? " " + o : "") + "?>";
}
function Qa(e, t) {
  return t.ignoreComment ? "" : "<!--" + ("commentFn" in t ? t.commentFn(e, Ut, Mt) : e) + "-->";
}
function to(e, t) {
  return t.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in t ? t.cdataFn(e, Ut, Mt) : e.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
}
function eo(e, t) {
  return t.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in t ? t.doctypeFn(e, Ut, Mt) : e) + ">";
}
function ki(e, t) {
  return t.ignoreText ? "" : (e = "" + e, e = e.replace(/&amp;/g, "&"), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "textFn" in t ? t.textFn(e, Ut, Mt) : e);
}
function gu(e, t) {
  var r;
  if (e.elements && e.elements.length)
    for (r = 0; r < e.elements.length; ++r)
      switch (e.elements[r][t.typeKey]) {
        case "text":
          if (t.indentText)
            return !0;
          break;
        case "cdata":
          if (t.indentCdata)
            return !0;
          break;
        case "instruction":
          if (t.indentInstruction)
            return !0;
          break;
        case "doctype":
        case "comment":
        case "element":
          return !0;
        default:
          return !0;
      }
  return !1;
}
function wu(e, t, r) {
  Mt = e, Ut = e.name;
  var i = [], a = "elementNameFn" in t ? t.elementNameFn(e.name, e) : e.name;
  i.push("<" + a), e[t.attributesKey] && i.push(Wr(e[t.attributesKey], t, r));
  var o = e[t.elementsKey] && e[t.elementsKey].length || e[t.attributesKey] && e[t.attributesKey]["xml:space"] === "preserve";
  return o || ("fullTagEmptyElementFn" in t ? o = t.fullTagEmptyElementFn(e.name, e) : o = t.fullTagEmptyElement), o ? (i.push(">"), e[t.elementsKey] && e[t.elementsKey].length && (i.push(ro(e[t.elementsKey], t, r + 1)), Mt = e, Ut = e.name), i.push(t.spaces && gu(e, t) ? `
` + Array(r + 1).join(t.spaces) : ""), i.push("</" + a + ">")) : i.push("/>"), i.join("");
}
function ro(e, t, r, i) {
  return e.reduce(function(a, o) {
    var s = se(t, r, i && !a);
    switch (o.type) {
      case "element":
        return a + s + wu(o, t, r);
      case "comment":
        return a + s + Qa(o[t.commentKey], t);
      case "doctype":
        return a + s + eo(o[t.doctypeKey], t);
      case "cdata":
        return a + (t.indentCdata ? s : "") + to(o[t.cdataKey], t);
      case "text":
        return a + (t.indentText ? s : "") + ki(o[t.textKey], t);
      case "instruction":
        var n = {};
        return n[o[t.nameKey]] = o[t.attributesKey] ? o : o[t.instructionKey], a + (t.indentInstruction ? s : "") + Ja(n, t, r);
    }
  }, "");
}
function no(e, t, r) {
  var i;
  for (i in e)
    if (e.hasOwnProperty(i))
      switch (i) {
        case t.parentKey:
        case t.attributesKey:
          break;
        case t.textKey:
          if (t.indentText || r)
            return !0;
          break;
        case t.cdataKey:
          if (t.indentCdata || r)
            return !0;
          break;
        case t.instructionKey:
          if (t.indentInstruction || r)
            return !0;
          break;
        case t.doctypeKey:
        case t.commentKey:
          return !0;
        default:
          return !0;
      }
  return !1;
}
function yu(e, t, r, i, a) {
  Mt = e, Ut = t;
  var o = "elementNameFn" in r ? r.elementNameFn(t, e) : t;
  if (typeof e > "u" || e === null || e === "")
    return "fullTagEmptyElementFn" in r && r.fullTagEmptyElementFn(t, e) || r.fullTagEmptyElement ? "<" + o + "></" + o + ">" : "<" + o + "/>";
  var s = [];
  if (t) {
    if (s.push("<" + o), typeof e != "object")
      return s.push(">" + ki(e, r) + "</" + o + ">"), s.join("");
    e[r.attributesKey] && s.push(Wr(e[r.attributesKey], r, i));
    var n = no(e, r, !0) || e[r.attributesKey] && e[r.attributesKey]["xml:space"] === "preserve";
    if (n || ("fullTagEmptyElementFn" in r ? n = r.fullTagEmptyElementFn(t, e) : n = r.fullTagEmptyElement), n)
      s.push(">");
    else
      return s.push("/>"), s.join("");
  }
  return s.push(io(e, r, i + 1, !1)), Mt = e, Ut = t, t && s.push((a ? se(r, i, !1) : "") + "</" + o + ">"), s.join("");
}
function io(e, t, r, i) {
  var a, o, s, n = [];
  for (o in e)
    if (e.hasOwnProperty(o))
      for (s = pu(e[o]) ? e[o] : [e[o]], a = 0; a < s.length; ++a) {
        switch (o) {
          case t.declarationKey:
            n.push(Ya(s[a], t, r));
            break;
          case t.instructionKey:
            n.push((t.indentInstruction ? se(t, r, i) : "") + Ja(s[a], t, r));
            break;
          case t.attributesKey:
          case t.parentKey:
            break;
          case t.textKey:
            n.push((t.indentText ? se(t, r, i) : "") + ki(s[a], t));
            break;
          case t.cdataKey:
            n.push((t.indentCdata ? se(t, r, i) : "") + to(s[a], t));
            break;
          case t.doctypeKey:
            n.push(se(t, r, i) + eo(s[a], t));
            break;
          case t.commentKey:
            n.push(se(t, r, i) + Qa(s[a], t));
            break;
          default:
            n.push(se(t, r, i) + yu(s[a], o, t, r, no(s[a], t)));
        }
        i = i && !n.length;
      }
  return n.join("");
}
var so = function(e, t) {
  t = mu(t);
  var r = [];
  return Mt = e, Ut = "_root_", t.compact ? r.push(io(e, t, 0, !0)) : (e[t.declarationKey] && r.push(Ya(e[t.declarationKey], t, 0)), e[t.elementsKey] && e[t.elementsKey].length && r.push(ro(e[t.elementsKey], t, 0, !r.length))), r.join("");
}, vu = so, bu = function(e, t) {
  e instanceof Buffer && (e = e.toString());
  var r = null;
  if (typeof e == "string")
    try {
      r = JSON.parse(e);
    } catch {
      throw new Error("The JSON structure is invalid");
    }
  else
    r = e;
  return vu(r, t);
}, _u = Xa, Eu = du, xu = so, Tu = bu, ao = {
  xml2js: _u,
  xml2json: Eu,
  js2xml: xu,
  json2xml: Tu
};
const Ii = (e) => {
  switch (e.type) {
    case void 0:
    case "element":
      const t = new oo(e.name, e.attributes), r = e.elements || [];
      for (const i of r) {
        const a = Ii(i);
        a !== void 0 && t.push(a);
      }
      return t;
    case "text":
      return e.text;
    default:
      return;
  }
};
class Au extends mt {
  // noop
}
class oo extends nt {
  /**
   * Converts the xml string to a XmlComponent tree.
   *
   * @param importedContent xml content of the imported component
   */
  static fromXmlString(t) {
    const r = ao.xml2js(t, { compact: !1 });
    return Ii(r);
  }
  /**
   * Converts the xml string to a XmlComponent tree.
   *
   * @param importedContent xml content of the imported component
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(t, r) {
    super(t), r && this.root.push(new Au(r));
  }
  push(t) {
    this.root.push(t);
  }
}
class Su extends nt {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(t) {
    super(""), this._attr = t;
  }
  prepForXml(t) {
    return {
      _attr: this._attr
    };
  }
}
class lo extends nt {
  constructor(t, r) {
    super(t), r && (this.root = r.root);
  }
}
const zt = (e) => {
  if (isNaN(e))
    throw new Error(`Invalid value '${e}' specified. Must be an integer.`);
  return Math.floor(e);
}, Hr = (e) => {
  const t = zt(e);
  if (t < 0)
    throw new Error(`Invalid value '${e}' specified. Must be a positive integer.`);
  return t;
}, Ci = (e, t) => {
  const r = t * 2;
  if (e.length !== r || isNaN(+`0x${e}`))
    throw new Error(`Invalid hex value '${e}'. Expected ${r} digit hex value`);
  return e;
}, ku = (e) => Ci(e, 2), Ps = (e) => Ci(e, 1), Ri = (e) => {
  const t = e.slice(-2), r = e.substring(0, e.length - 2);
  return `${Number(r)}${t}`;
}, uo = (e) => {
  const t = Ri(e);
  if (parseFloat(t) < 0)
    throw new Error(`Invalid value '${t}' specified. Expected a positive number.`);
  return t;
}, Ve = (e) => {
  if (e === "auto")
    return e;
  const t = e.charAt(0) === "#" ? e.substring(1) : e;
  return Ci(t, 3);
}, de = (e) => typeof e == "string" ? Ri(e) : zt(e), Iu = (e) => typeof e == "string" ? uo(e) : Hr(e), Pt = (e) => typeof e == "string" ? uo(e) : Hr(e), Cu = (e) => {
  const t = e.substring(0, e.length - 1);
  return `${Number(t)}%`;
}, Ru = (e) => typeof e == "number" ? zt(e) : e.slice(-1) === "%" ? Cu(e) : Ri(e), Nu = Hr, Ou = Hr, Bu = (e) => e.toISOString();
class ht extends nt {
  constructor(t, r = !0) {
    super(t), r !== !0 && this.root.push(new kt({ val: r }));
  }
}
class Wn extends nt {
  constructor(t, r) {
    super(t), this.root.push(new kt({ val: Iu(r) }));
  }
}
class Du extends nt {
}
class ve extends nt {
  constructor(t, r) {
    super(t), this.root.push(new kt({ val: r }));
  }
}
const rr = (e, t) => new Ot({
  name: e,
  attributes: {
    value: { key: "w:val", value: t }
  }
});
class Ni extends nt {
  constructor(t, r) {
    super(t), this.root.push(new kt({ val: r }));
  }
}
class Fu extends nt {
  constructor(t, r) {
    super(t), this.root.push(new kt({ val: r }));
  }
}
class xe extends nt {
  constructor(t, r) {
    super(t), this.root.push(r);
  }
}
class Ot extends nt {
  constructor({
    name: t,
    attributes: r,
    children: i
  }) {
    super(t), r && this.root.push(new ge(r)), i && this.root.push(...i);
  }
}
const Gt = {
  /** Align Start */
  START: "start",
  /** Align Center */
  CENTER: "center",
  /** End */
  END: "end",
  /** Justified */
  BOTH: "both",
  /** Medium Kashida Length */
  MEDIUM_KASHIDA: "mediumKashida",
  /** Distribute All Characters Equally */
  DISTRIBUTE: "distribute",
  /** Align to List Tab */
  NUM_TAB: "numTab",
  /** Widest Kashida Length */
  HIGH_KASHIDA: "highKashida",
  /** Low Kashida Length */
  LOW_KASHIDA: "lowKashida",
  /** Thai Language Justification */
  THAI_DISTRIBUTE: "thaiDistribute",
  /** Align Left */
  LEFT: "left",
  /** Align Right */
  RIGHT: "right",
  /** Justified */
  JUSTIFIED: "both"
};
class Lu extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class co extends nt {
  constructor(t) {
    super("w:jc"), this.root.push(new Lu({ val: t }));
  }
}
class Tt extends nt {
  constructor(t, { color: r, size: i, space: a, style: o }) {
    super(t), this.root.push(
      new Pu({
        style: o,
        color: r === void 0 ? void 0 : Ve(r),
        size: i === void 0 ? void 0 : Nu(i),
        space: a === void 0 ? void 0 : Ou(a)
      })
    );
  }
}
class Pu extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      style: "w:val",
      color: "w:color",
      size: "w:sz",
      space: "w:space"
    });
  }
}
const ke = {
  SINGLE: "single",
  DASH_DOT_STROKED: "dashDotStroked",
  DASHED: "dashed",
  DASH_SMALL_GAP: "dashSmallGap",
  DOT_DASH: "dotDash",
  DOT_DOT_DASH: "dotDotDash",
  DOTTED: "dotted",
  DOUBLE: "double",
  DOUBLE_WAVE: "doubleWave",
  INSET: "inset",
  NIL: "nil",
  NONE: "none",
  OUTSET: "outset",
  THICK: "thick",
  THICK_THIN_LARGE_GAP: "thickThinLargeGap",
  THICK_THIN_MEDIUM_GAP: "thickThinMediumGap",
  THICK_THIN_SMALL_GAP: "thickThinSmallGap",
  THIN_THICK_LARGE_GAP: "thinThickLargeGap",
  THIN_THICK_MEDIUM_GAP: "thinThickMediumGap",
  THIN_THICK_SMALL_GAP: "thinThickSmallGap",
  THIN_THICK_THIN_LARGE_GAP: "thinThickThinLargeGap",
  THIN_THICK_THIN_MEDIUM_GAP: "thinThickThinMediumGap",
  THIN_THICK_THIN_SMALL_GAP: "thinThickThinSmallGap",
  THREE_D_EMBOSS: "threeDEmboss",
  THREE_D_ENGRAVE: "threeDEngrave",
  TRIPLE: "triple",
  WAVE: "wave"
};
class Mu extends me {
  constructor(t) {
    super("w:pBdr"), t.top && this.root.push(new Tt("w:top", t.top)), t.bottom && this.root.push(new Tt("w:bottom", t.bottom)), t.left && this.root.push(new Tt("w:left", t.left)), t.right && this.root.push(new Tt("w:right", t.right));
  }
}
class Uu extends nt {
  constructor() {
    super("w:pBdr");
    const t = new Tt("w:bottom", {
      color: "auto",
      space: 1,
      style: ke.SINGLE,
      size: 6
    });
    this.root.push(t);
  }
}
class zu extends nt {
  constructor({ start: t, end: r, left: i, right: a, hanging: o, firstLine: s }) {
    super("w:ind"), this.root.push(
      new ge({
        start: {
          key: "w:start",
          value: t === void 0 ? void 0 : de(t)
        },
        end: {
          key: "w:end",
          value: r === void 0 ? void 0 : de(r)
        },
        left: {
          key: "w:left",
          value: i === void 0 ? void 0 : de(i)
        },
        right: {
          key: "w:right",
          value: a === void 0 ? void 0 : de(a)
        },
        hanging: {
          key: "w:hanging",
          value: o === void 0 ? void 0 : Pt(o)
        },
        firstLine: {
          key: "w:firstLine",
          value: s === void 0 ? void 0 : Pt(s)
        }
      })
    );
  }
}
let ju = class extends nt {
  constructor() {
    super("w:br");
  }
};
const Oi = {
  BEGIN: "begin",
  END: "end",
  SEPARATE: "separate"
};
class Bi extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { type: "w:fldCharType", dirty: "w:dirty" });
  }
}
class sr extends nt {
  constructor(t) {
    super("w:fldChar"), this.root.push(new Bi({ type: Oi.BEGIN, dirty: t }));
  }
}
class ar extends nt {
  constructor(t) {
    super("w:fldChar"), this.root.push(new Bi({ type: Oi.SEPARATE, dirty: t }));
  }
}
class or extends nt {
  constructor(t) {
    super("w:fldChar"), this.root.push(new Bi({ type: Oi.END, dirty: t }));
  }
}
const Wu = {
  DECIMAL: "decimal",
  UPPER_ROMAN: "upperRoman",
  LOWER_ROMAN: "lowerRoman",
  UPPER_LETTER: "upperLetter",
  LOWER_LETTER: "lowerLetter",
  ORDINAL: "ordinal",
  CARDINAL_TEXT: "cardinalText",
  ORDINAL_TEXT: "ordinalText",
  HEX: "hex",
  CHICAGO: "chicago",
  IDEOGRAPH_DIGITAL: "ideographDigital",
  JAPANESE_COUNTING: "japaneseCounting",
  AIUEO: "aiueo",
  IROHA: "iroha",
  DECIMAL_FULL_WIDTH: "decimalFullWidth",
  DECIMAL_HALF_WIDTH: "decimalHalfWidth",
  JAPANESE_LEGAL: "japaneseLegal",
  JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand",
  DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle",
  DECIMAL_FULL_WIDTH_2: "decimalFullWidth2",
  AIUEO_FULL_WIDTH: "aiueoFullWidth",
  IROHA_FULL_WIDTH: "irohaFullWidth",
  DECIMAL_ZERO: "decimalZero",
  BULLET: "bullet",
  GANADA: "ganada",
  CHOSUNG: "chosung",
  DECIMAL_ENCLOSED_FULL_STOP: "decimalEnclosedFullstop",
  DECIMAL_ENCLOSED_PAREN: "decimalEnclosedParen",
  DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese",
  IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle",
  IDEOGRAPH_TRADITIONAL: "ideographTraditional",
  IDEOGRAPH_ZODIAC: "ideographZodiac",
  IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional",
  TAIWANESE_COUNTING: "taiwaneseCounting",
  IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional",
  TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand",
  TAIWANESE_DIGITAL: "taiwaneseDigital",
  CHINESE_COUNTING: "chineseCounting",
  CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified",
  CHINESE_COUNTING_TEN_THOUSAND: "chineseCountingThousand",
  KOREAN_DIGITAL: "koreanDigital",
  KOREAN_COUNTING: "koreanCounting",
  KOREAN_LEGAL: "koreanLegal",
  KOREAN_DIGITAL_2: "koreanDigital2",
  VIETNAMESE_COUNTING: "vietnameseCounting",
  RUSSIAN_LOWER: "russianLower",
  RUSSIAN_UPPER: "russianUpper",
  NONE: "none",
  NUMBER_IN_DASH: "numberInDash",
  HEBREW_1: "hebrew1",
  HEBREW_2: "hebrew2",
  ARABIC_ALPHA: "arabicAlpha",
  ARABIC_ABJAD: "arabicAbjad",
  HINDI_VOWELS: "hindiVowels",
  HINDI_CONSONANTS: "hindiConsonants",
  HINDI_NUMBERS: "hindiNumbers",
  HINDI_COUNTING: "hindiCounting",
  THAI_LETTERS: "thaiLetters",
  THAI_NUMBERS: "thaiNumbers",
  THAI_COUNTING: "thaiCounting",
  BAHT_TEXT: "bahtText",
  DOLLAR_TEXT: "dollarText"
  //   <xsd:enumeration value="custom"/>
}, Ie = {
  DEFAULT: "default",
  PRESERVE: "preserve"
};
class Ce extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { space: "xml:space" });
  }
}
class Hu extends nt {
  constructor() {
    super("w:instrText"), this.root.push(new Ce({ space: Ie.PRESERVE })), this.root.push("PAGE");
  }
}
class Gu extends nt {
  constructor() {
    super("w:instrText"), this.root.push(new Ce({ space: Ie.PRESERVE })), this.root.push("NUMPAGES");
  }
}
class Ku extends nt {
  constructor() {
    super("w:instrText"), this.root.push(new Ce({ space: Ie.PRESERVE })), this.root.push("SECTIONPAGES");
  }
}
class qu extends nt {
  constructor() {
    super("w:instrText"), this.root.push(new Ce({ space: Ie.PRESERVE })), this.root.push("SECTION");
  }
}
class Vu extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      fill: "w:fill",
      color: "w:color",
      type: "w:val"
    });
  }
}
class Gr extends nt {
  constructor({ fill: t, color: r, type: i }) {
    super("w:shd"), this.root.push(
      new Vu({
        fill: t === void 0 ? void 0 : Ve(t),
        color: r === void 0 ? void 0 : Ve(r),
        type: i
      })
    );
  }
}
class $u extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "w:id",
      author: "w:author",
      date: "w:date"
    });
  }
}
const Zu = {
  DOT: "dot"
};
class Xu extends nt {
  constructor(t) {
    super("w:em"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class Yu extends Xu {
  constructor(t = Zu.DOT) {
    super(t);
  }
}
class Ju extends nt {
  constructor(t) {
    super("w:spacing"), this.root.push(
      new kt({
        val: de(t)
      })
    );
  }
}
class Qu extends nt {
  constructor(t) {
    super("w:color"), this.root.push(
      new kt({
        val: Ve(t)
      })
    );
  }
}
class tc extends nt {
  constructor(t) {
    super("w:highlight"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class ec extends nt {
  constructor(t) {
    super("w:highlightCs"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
const rc = (e) => new Ot({
  name: "w:lang",
  attributes: {
    value: {
      key: "w:val",
      value: e.value
    },
    eastAsia: {
      key: "w:eastAsia",
      value: e.eastAsia
    },
    bidirectional: {
      key: "w:bidi",
      value: e.bidirectional
    }
  }
});
class Ms extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      ascii: "w:ascii",
      cs: "w:cs",
      eastAsia: "w:eastAsia",
      hAnsi: "w:hAnsi",
      hint: "w:hint"
    });
  }
}
class Hn extends nt {
  constructor(t, r) {
    if (super("w:rFonts"), typeof t == "string") {
      const i = t;
      this.root.push(
        new Ms({
          ascii: i,
          cs: i,
          eastAsia: i,
          hAnsi: i,
          hint: r
        })
      );
    } else {
      const i = t;
      this.root.push(new Ms(i));
    }
  }
}
let ho = class extends nt {
  constructor(t) {
    super("w:vertAlign"), this.root.push(
      new kt({
        val: t
      })
    );
  }
};
class nc extends ho {
  constructor() {
    super("superscript");
  }
}
class ic extends ho {
  constructor() {
    super("subscript");
  }
}
const fo = {
  SINGLE: "single",
  WORDS: "words",
  DOUBLE: "double",
  THICK: "thick",
  DOTTED: "dotted",
  DOTTEDHEAVY: "dottedHeavy",
  DASH: "dash",
  DASHEDHEAVY: "dashedHeavy",
  DASHLONG: "dashLong",
  DASHLONGHEAVY: "dashLongHeavy",
  DOTDASH: "dotDash",
  DASHDOTHEAVY: "dashDotHeavy",
  DOTDOTDASH: "dotDotDash",
  DASHDOTDOTHEAVY: "dashDotDotHeavy",
  WAVE: "wave",
  WAVYHEAVY: "wavyHeavy",
  WAVYDOUBLE: "wavyDouble",
  NONE: "none"
};
class sc extends nt {
  constructor(t = fo.SINGLE, r) {
    super("w:u"), this.root.push(
      new kt({
        val: t,
        color: r === void 0 ? void 0 : Ve(r)
      })
    );
  }
}
class Ne extends me {
  constructor(t) {
    var r, i;
    if (super("w:rPr"), !t)
      return;
    t.noProof !== void 0 && this.push(new ht("w:noProof", t.noProof)), t.bold !== void 0 && this.push(new ht("w:b", t.bold)), (t.boldComplexScript === void 0 && t.bold !== void 0 || t.boldComplexScript) && this.push(new ht("w:bCs", (r = t.boldComplexScript) != null ? r : t.bold)), t.italics !== void 0 && this.push(new ht("w:i", t.italics)), (t.italicsComplexScript === void 0 && t.italics !== void 0 || t.italicsComplexScript) && this.push(new ht("w:iCs", (i = t.italicsComplexScript) != null ? i : t.italics)), t.underline && this.push(new sc(t.underline.type, t.underline.color)), t.effect && this.push(new ve("w:effect", t.effect)), t.emphasisMark && this.push(new Yu(t.emphasisMark.type)), t.color && this.push(new Qu(t.color)), t.kern && this.push(new Wn("w:kern", t.kern)), t.position && this.push(new ve("w:position", t.position)), t.size !== void 0 && this.push(new Wn("w:sz", t.size));
    const a = t.sizeComplexScript === void 0 || t.sizeComplexScript === !0 ? t.size : t.sizeComplexScript;
    a && this.push(new Wn("w:szCs", a)), t.rightToLeft !== void 0 && this.push(new ht("w:rtl", t.rightToLeft)), t.smallCaps !== void 0 ? this.push(new ht("w:smallCaps", t.smallCaps)) : t.allCaps !== void 0 && this.push(new ht("w:caps", t.allCaps)), t.strike !== void 0 && this.push(new ht("w:strike", t.strike)), t.doubleStrike !== void 0 && this.push(new ht("w:dstrike", t.doubleStrike)), t.subScript && this.push(new ic()), t.superScript && this.push(new nc()), t.style && this.push(new ve("w:rStyle", t.style)), t.font && (typeof t.font == "string" ? this.push(new Hn(t.font)) : "name" in t.font ? this.push(new Hn(t.font.name, t.font.hint)) : this.push(new Hn(t.font))), t.highlight && this.push(new tc(t.highlight));
    const o = t.highlightComplexScript === void 0 || t.highlightComplexScript === !0 ? t.highlight : t.highlightComplexScript;
    o && this.push(new ec(o)), t.characterSpacing && this.push(new Ju(t.characterSpacing)), t.emboss !== void 0 && this.push(new ht("w:emboss", t.emboss)), t.imprint !== void 0 && this.push(new ht("w:imprint", t.imprint)), t.shading && this.push(new Gr(t.shading)), t.revision && this.push(new ac(t.revision)), t.border && this.push(new Tt("w:bdr", t.border)), t.snapToGrid !== void 0 && this.push(new ht("w:snapToGrid", t.snapToGrid)), t.vanish && this.push(new ht("w:vanish", t.vanish)), t.specVanish && this.push(new ht("w:specVanish", t.vanish)), t.scale !== void 0 && this.push(new Ni("w:w", t.scale)), t.language && this.push(rc(t.language)), t.math && this.push(new ht("w:oMath", t.math));
  }
  push(t) {
    this.root.push(t);
  }
}
class ac extends nt {
  constructor(t) {
    super("w:rPrChange"), this.root.push(
      new $u({
        id: t.id,
        author: t.author,
        date: t.date
      })
    ), this.addChildElement(new Ne(t));
  }
}
class ui extends nt {
  constructor(t) {
    var r;
    super("w:t"), typeof t == "string" ? (this.root.push(new Ce({ space: Ie.PRESERVE })), this.root.push(t)) : (this.root.push(new Ce({ space: (r = t.space) != null ? r : Ie.DEFAULT })), this.root.push(t.text));
  }
}
const Ue = {
  CURRENT: "CURRENT",
  TOTAL_PAGES: "TOTAL_PAGES",
  TOTAL_PAGES_IN_SECTION: "TOTAL_PAGES_IN_SECTION",
  CURRENT_SECTION: "SECTION"
};
class pe extends nt {
  constructor(t) {
    if (super("w:r"), it(this, "properties"), this.properties = new Ne(t), this.root.push(this.properties), t.break)
      for (let r = 0; r < t.break; r++)
        this.root.push(new ju());
    if (t.children)
      for (const r of t.children) {
        if (typeof r == "string") {
          switch (r) {
            case Ue.CURRENT:
              this.root.push(new sr()), this.root.push(new Hu()), this.root.push(new ar()), this.root.push(new or());
              break;
            case Ue.TOTAL_PAGES:
              this.root.push(new sr()), this.root.push(new Gu()), this.root.push(new ar()), this.root.push(new or());
              break;
            case Ue.TOTAL_PAGES_IN_SECTION:
              this.root.push(new sr()), this.root.push(new Ku()), this.root.push(new ar()), this.root.push(new or());
              break;
            case Ue.CURRENT_SECTION:
              this.root.push(new sr()), this.root.push(new qu()), this.root.push(new ar()), this.root.push(new or());
              break;
            default:
              this.root.push(new ui(r));
              break;
          }
          continue;
        }
        this.root.push(r);
      }
    else
      t.text && this.root.push(new ui(t.text));
  }
}
class qt extends pe {
  constructor(t) {
    if (typeof t == "string")
      return super({}), this.root.push(new ui(t)), this;
    super(t);
  }
}
class oc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      char: "w:char",
      symbolfont: "w:font"
    });
  }
}
let Us = class extends nt {
  constructor(t = "", r = "Wingdings") {
    super("w:sym"), this.root.push(new oc({ char: t, symbolfont: r }));
  }
};
class lc extends pe {
  constructor(t) {
    if (typeof t == "string")
      return super({}), this.root.push(new Us(t)), this;
    super(t), this.root.push(new Us(t.char, t.symbolfont));
  }
}
let uc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", cc = (e, t = 21) => (r = t) => {
  let i = "", a = r;
  for (; a--; )
    i += e[Math.random() * e.length | 0];
  return i;
}, hc = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += uc[Math.random() * 64 | 0];
  return t;
};
const te = (e) => Math.floor(e * 72 * 20), Kr = (e = 0) => {
  let t = e;
  return () => ++t;
}, fc = () => Kr(), dc = () => Kr(1), pc = () => Kr(), mc = () => Kr(), ci = () => hc().toLowerCase(), nr = (e) => cc("1234567890abcdef", e)(), gc = () => `${nr(8)}-${nr(4)}-${nr(4)}-${nr(4)}-${nr(12)}`, Di = {
  CHARACTER: "character",
  COLUMN: "column",
  INSIDE_MARGIN: "insideMargin",
  LEFT_MARGIN: "leftMargin",
  MARGIN: "margin",
  OUTSIDE_MARGIN: "outsideMargin",
  PAGE: "page",
  RIGHT_MARGIN: "rightMargin"
}, Fi = {
  BOTTOM_MARGIN: "bottomMargin",
  INSIDE_MARGIN: "insideMargin",
  LINE: "line",
  MARGIN: "margin",
  OUTSIDE_MARGIN: "outsideMargin",
  PAGE: "page",
  PARAGRAPH: "paragraph",
  TOP_MARGIN: "topMargin"
};
class wc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      x: "x",
      y: "y"
    });
  }
}
class yc extends nt {
  constructor() {
    super("wp:simplePos"), this.root.push(
      new wc({
        x: 0,
        y: 0
      })
    );
  }
}
class po extends nt {
  constructor(t) {
    super("wp:align"), this.root.push(t);
  }
}
class mo extends nt {
  constructor(t) {
    super("wp:posOffset"), this.root.push(t.toString());
  }
}
class vc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      relativeFrom: "relativeFrom"
    });
  }
}
class bc extends nt {
  constructor(t) {
    if (super("wp:positionH"), this.root.push(
      new vc({
        relativeFrom: t.relative || Di.PAGE
      })
    ), t.align)
      this.root.push(new po(t.align));
    else if (t.offset !== void 0)
      this.root.push(new mo(t.offset));
    else
      throw new Error("There is no configuration provided for floating position (Align or offset)");
  }
}
class _c extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      relativeFrom: "relativeFrom"
    });
  }
}
class Ec extends nt {
  constructor(t) {
    if (super("wp:positionV"), this.root.push(
      new _c({
        relativeFrom: t.relative || Fi.PAGE
      })
    ), t.align)
      this.root.push(new po(t.align));
    else if (t.offset !== void 0)
      this.root.push(new mo(t.offset));
    else
      throw new Error("There is no configuration provided for floating position (Align or offset)");
  }
}
class xc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      uri: "uri"
    });
  }
}
const Tc = (e) => new Ot({
  name: "asvg:svgBlip",
  attributes: {
    asvg: {
      key: "xmlns:asvg",
      value: "http://schemas.microsoft.com/office/drawing/2016/SVG/main"
    },
    embed: {
      key: "r:embed",
      value: `rId{${e.fileName}}`
    }
  }
}), Ac = (e) => new Ot({
  name: "a:ext",
  attributes: {
    uri: {
      key: "uri",
      value: "{96DAC541-7B7A-43D3-8B79-37D633B846F1}"
    }
  },
  children: [Tc(e)]
}), Sc = (e) => new Ot({
  name: "a:extLst",
  children: [Ac(e)]
}), kc = (e) => new Ot({
  name: "a:blip",
  attributes: {
    embed: {
      key: "r:embed",
      value: `rId{${e.type === "svg" ? e.fallback.fileName : e.fileName}}`
    },
    cstate: {
      key: "cstate",
      value: "none"
    }
  },
  children: e.type === "svg" ? [Sc(e)] : []
});
class Ic extends nt {
  constructor() {
    super("a:srcRect");
  }
}
class Cc extends nt {
  constructor() {
    super("a:fillRect");
  }
}
class Rc extends nt {
  constructor() {
    super("a:stretch"), this.root.push(new Cc());
  }
}
class Nc extends nt {
  constructor(t) {
    super("pic:blipFill"), this.root.push(kc(t)), this.root.push(new Ic()), this.root.push(new Rc());
  }
}
class Oc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      noChangeAspect: "noChangeAspect",
      noChangeArrowheads: "noChangeArrowheads"
    });
  }
}
class Bc extends nt {
  constructor() {
    super("a:picLocks"), this.root.push(
      new Oc({
        noChangeAspect: 1,
        noChangeArrowheads: 1
      })
    );
  }
}
class Dc extends nt {
  constructor() {
    super("pic:cNvPicPr"), this.root.push(new Bc());
  }
}
const go = (e, t) => new Ot({
  name: "a:hlinkClick",
  attributes: be(_t({}, t ? {
    xmlns: {
      key: "xmlns:a",
      value: "http://schemas.openxmlformats.org/drawingml/2006/main"
    }
  } : {}), {
    id: {
      key: "r:id",
      value: `rId${e}`
    }
  })
});
class Fc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "id",
      name: "name",
      descr: "descr"
    });
  }
}
class Lc extends nt {
  constructor() {
    super("pic:cNvPr"), this.root.push(
      new Fc({
        id: 0,
        name: "",
        descr: ""
      })
    );
  }
  prepForXml(t) {
    for (let r = t.stack.length - 1; r >= 0; r--) {
      const i = t.stack[r];
      if (i instanceof Pi) {
        this.root.push(go(i.linkId, !1));
        break;
      }
    }
    return super.prepForXml(t);
  }
}
class Pc extends nt {
  constructor() {
    super("pic:nvPicPr"), this.root.push(new Lc()), this.root.push(new Dc());
  }
}
class Mc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns:pic"
    });
  }
}
class Uc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      cx: "cx",
      cy: "cy"
    });
  }
}
class zc extends nt {
  constructor(t, r) {
    super("a:ext"), it(this, "attributes"), this.attributes = new Uc({
      cx: t,
      cy: r
    }), this.root.push(this.attributes);
  }
}
class jc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      x: "x",
      y: "y"
    });
  }
}
class Wc extends nt {
  constructor() {
    super("a:off"), this.root.push(
      new jc({
        x: 0,
        y: 0
      })
    );
  }
}
class Hc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      flipVertical: "flipV",
      flipHorizontal: "flipH",
      rotation: "rot"
    });
  }
}
class Gc extends nt {
  constructor(t) {
    var r, i;
    super("a:xfrm"), it(this, "extents"), this.root.push(
      new Hc({
        flipVertical: (r = t.flip) == null ? void 0 : r.vertical,
        flipHorizontal: (i = t.flip) == null ? void 0 : i.horizontal,
        rotation: t.rotation
      })
    ), this.extents = new zc(t.emus.x, t.emus.y), this.root.push(new Wc()), this.root.push(this.extents);
  }
}
const wo = () => new Ot({ name: "a:noFill" }), Kc = (e) => new Ot({
  name: "a:schemeClr",
  attributes: {
    value: {
      key: "val",
      value: e.value
    }
  }
}), qc = (e) => new Ot({
  name: "a:srgbClr",
  attributes: {
    value: {
      key: "val",
      value: e.value
    }
  }
}), zs = (e) => new Ot({
  name: "a:solidFill",
  children: [e.type === "rgb" ? qc(e) : Kc(e)]
}), Vc = (e) => new Ot({
  name: "a:ln",
  attributes: {
    width: {
      key: "w",
      value: e.width
    },
    cap: {
      key: "cap",
      value: e.cap
    },
    compoundLine: {
      key: "cmpd",
      value: e.compoundLine
    },
    align: {
      key: "algn",
      value: e.align
    }
  },
  children: [
    e.type === "noFill" ? wo() : e.solidFillType === "rgb" ? zs({
      type: "rgb",
      value: e.value
    }) : zs({
      type: "scheme",
      value: e.value
    })
  ]
});
class $c extends nt {
  constructor() {
    super("a:avLst");
  }
}
class Zc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      prst: "prst"
    });
  }
}
class Xc extends nt {
  constructor() {
    super("a:prstGeom"), this.root.push(
      new Zc({
        prst: "rect"
      })
    ), this.root.push(new $c());
  }
}
class Yc extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      bwMode: "bwMode"
    });
  }
}
class Jc extends nt {
  constructor({ outline: t, transform: r }) {
    super("pic:spPr"), it(this, "form"), this.root.push(
      new Yc({
        bwMode: "auto"
      })
    ), this.form = new Gc(r), this.root.push(this.form), this.root.push(new Xc()), t && (this.root.push(wo()), this.root.push(Vc(t)));
  }
}
class Qc extends nt {
  constructor({
    mediaData: t,
    transform: r,
    outline: i
  }) {
    super("pic:pic"), this.root.push(
      new Mc({
        xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture"
      })
    ), this.root.push(new Pc()), this.root.push(new Nc(t)), this.root.push(new Jc({ transform: r, outline: i }));
  }
}
class th extends nt {
  constructor({
    mediaData: t,
    transform: r,
    outline: i
  }) {
    super("a:graphicData"), it(this, "pic"), this.root.push(
      new xc({
        uri: "http://schemas.openxmlformats.org/drawingml/2006/picture"
      })
    ), this.pic = new Qc({ mediaData: t, transform: r, outline: i }), this.root.push(this.pic);
  }
}
class eh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      a: "xmlns:a"
    });
  }
}
class yo extends nt {
  constructor({
    mediaData: t,
    transform: r,
    outline: i
  }) {
    super("a:graphic"), it(this, "data"), this.root.push(
      new eh({
        a: "http://schemas.openxmlformats.org/drawingml/2006/main"
      })
    ), this.data = new th({ mediaData: t, transform: r, outline: i }), this.root.push(this.data);
  }
}
const ze = {
  NONE: 0,
  SQUARE: 1,
  TIGHT: 2,
  TOP_AND_BOTTOM: 3
}, rh = {
  BOTH_SIDES: "bothSides",
  LEFT: "left",
  RIGHT: "right",
  LARGEST: "largest"
};
class js extends nt {
  constructor() {
    super("wp:wrapNone");
  }
}
class nh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      distT: "distT",
      distB: "distB",
      distL: "distL",
      distR: "distR",
      wrapText: "wrapText"
    });
  }
}
class ih extends nt {
  constructor(t, r = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }) {
    super("wp:wrapSquare"), this.root.push(
      new nh({
        wrapText: t.side || rh.BOTH_SIDES,
        distT: r.top,
        distB: r.bottom,
        distL: r.left,
        distR: r.right
      })
    );
  }
}
class sh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      distT: "distT",
      distB: "distB"
    });
  }
}
class ah extends nt {
  constructor(t = {
    top: 0,
    bottom: 0
  }) {
    super("wp:wrapTight"), this.root.push(
      new sh({
        distT: t.top,
        distB: t.bottom
      })
    );
  }
}
class oh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      distT: "distT",
      distB: "distB"
    });
  }
}
class lh extends nt {
  constructor(t = {
    top: 0,
    bottom: 0
  }) {
    super("wp:wrapTopAndBottom"), this.root.push(
      new oh({
        distT: t.top,
        distB: t.bottom
      })
    );
  }
}
class vo extends nt {
  constructor({ name: t, description: r, title: i } = { name: "", description: "", title: "" }) {
    super("wp:docPr"), it(this, "docPropertiesUniqueNumericId", pc()), this.root.push(
      new ge({
        id: {
          key: "id",
          value: this.docPropertiesUniqueNumericId()
        },
        name: {
          key: "name",
          value: t
        },
        description: {
          key: "descr",
          value: r
        },
        title: {
          key: "title",
          value: i
        }
      })
    );
  }
  prepForXml(t) {
    for (let r = t.stack.length - 1; r >= 0; r--) {
      const i = t.stack[r];
      if (i instanceof Pi) {
        this.root.push(go(i.linkId, !0));
        break;
      }
    }
    return super.prepForXml(t);
  }
}
const bo = ({ top: e, right: t, bottom: r, left: i }) => new Ot({
  name: "wp:effectExtent",
  attributes: {
    top: {
      key: "t",
      value: e
    },
    right: {
      key: "r",
      value: t
    },
    bottom: {
      key: "b",
      value: r
    },
    left: {
      key: "l",
      value: i
    }
  }
});
class uh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      cx: "cx",
      cy: "cy"
    });
  }
}
class _o extends nt {
  constructor(t, r) {
    super("wp:extent"), it(this, "attributes"), this.attributes = new uh({
      cx: t,
      cy: r
    }), this.root.push(this.attributes);
  }
}
class ch extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns:a",
      noChangeAspect: "noChangeAspect"
    });
  }
}
class hh extends nt {
  constructor() {
    super("a:graphicFrameLocks"), this.root.push(
      new ch({
        xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main",
        noChangeAspect: 1
      })
    );
  }
}
class Eo extends nt {
  constructor() {
    super("wp:cNvGraphicFramePr"), this.root.push(new hh());
  }
}
class fh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      distT: "distT",
      distB: "distB",
      distL: "distL",
      distR: "distR",
      allowOverlap: "allowOverlap",
      behindDoc: "behindDoc",
      layoutInCell: "layoutInCell",
      locked: "locked",
      relativeHeight: "relativeHeight",
      simplePos: "simplePos"
    });
  }
}
class dh extends nt {
  constructor({
    mediaData: t,
    transform: r,
    drawingOptions: i
  }) {
    super("wp:anchor");
    const a = _t({
      allowOverlap: !0,
      behindDocument: !1,
      lockAnchor: !1,
      layoutInCell: !0,
      verticalPosition: {},
      horizontalPosition: {}
    }, i.floating);
    if (this.root.push(
      new fh({
        distT: a.margins && a.margins.top || 0,
        distB: a.margins && a.margins.bottom || 0,
        distL: a.margins && a.margins.left || 0,
        distR: a.margins && a.margins.right || 0,
        simplePos: "0",
        // note: word doesn't fully support - so we use 0
        allowOverlap: a.allowOverlap === !0 ? "1" : "0",
        behindDoc: a.behindDocument === !0 ? "1" : "0",
        locked: a.lockAnchor === !0 ? "1" : "0",
        layoutInCell: a.layoutInCell === !0 ? "1" : "0",
        relativeHeight: a.zIndex ? a.zIndex : r.emus.y
      })
    ), this.root.push(new yc()), this.root.push(new bc(a.horizontalPosition)), this.root.push(new Ec(a.verticalPosition)), this.root.push(new _o(r.emus.x, r.emus.y)), this.root.push(bo({ top: 0, right: 0, bottom: 0, left: 0 })), i.floating !== void 0 && i.floating.wrap !== void 0)
      switch (i.floating.wrap.type) {
        case ze.SQUARE:
          this.root.push(new ih(i.floating.wrap, i.floating.margins));
          break;
        case ze.TIGHT:
          this.root.push(new ah(i.floating.margins));
          break;
        case ze.TOP_AND_BOTTOM:
          this.root.push(new lh(i.floating.margins));
          break;
        case ze.NONE:
        default:
          this.root.push(new js());
      }
    else
      this.root.push(new js());
    this.root.push(new vo(i.docProperties)), this.root.push(new Eo()), this.root.push(new yo({ mediaData: t, transform: r, outline: i.outline }));
  }
}
const ph = ({ mediaData: e, transform: t, docProperties: r, outline: i }) => {
  var a, o, s, n;
  return new Ot({
    name: "wp:inline",
    attributes: {
      distanceTop: {
        key: "distT",
        value: 0
      },
      distanceBottom: {
        key: "distB",
        value: 0
      },
      distanceLeft: {
        key: "distL",
        value: 0
      },
      distanceRight: {
        key: "distR",
        value: 0
      }
    },
    children: [
      new _o(t.emus.x, t.emus.y),
      bo(
        i ? {
          top: ((a = i.width) != null ? a : 9525) * 2,
          right: ((o = i.width) != null ? o : 9525) * 2,
          bottom: ((s = i.width) != null ? s : 9525) * 2,
          left: ((n = i.width) != null ? n : 9525) * 2
        } : { top: 0, right: 0, bottom: 0, left: 0 }
      ),
      new vo(r),
      new Eo(),
      new yo({ mediaData: e, transform: t, outline: i })
    ]
  });
};
class mh extends nt {
  constructor(t, r = {}) {
    super("w:drawing"), r.floating ? this.root.push(new dh({ mediaData: t, transform: t.transformation, drawingOptions: r })) : this.root.push(
      ph({
        mediaData: t,
        transform: t.transformation,
        docProperties: r.docProperties,
        outline: r.outline
      })
    );
  }
}
const gh = (e) => {
  if (typeof atob == "function") {
    const t = ";base64,", r = e.indexOf(t), i = r === -1 ? 0 : r + t.length;
    return new Uint8Array(
      atob(e.substring(i)).split("").map((a) => a.charCodeAt(0))
    );
  } else {
    const t = require("buffer");
    return new t.Buffer(e, "base64");
  }
}, wh = (e) => typeof e == "string" ? gh(e) : e, Gn = (e, t) => ({
  data: wh(e.data),
  fileName: t,
  transformation: {
    pixels: {
      x: Math.round(e.transformation.width),
      y: Math.round(e.transformation.height)
    },
    emus: {
      x: Math.round(e.transformation.width * 9525),
      y: Math.round(e.transformation.height * 9525)
    },
    flip: e.transformation.flip,
    rotation: e.transformation.rotation ? e.transformation.rotation * 6e4 : void 0
  }
});
class hi extends pe {
  constructor(t) {
    super({}), it(this, "key"), it(this, "fallbackKey", `${ci()}.png`), it(this, "imageData"), this.key = `${ci()}.${t.type}`, this.imageData = t.type === "svg" ? be(_t({
      type: t.type
    }, Gn(t, this.key)), {
      fallback: _t({
        type: t.fallback.type
      }, Gn(
        be(_t({}, t.fallback), {
          transformation: t.transformation
        }),
        this.fallbackKey
      ))
    }) : _t({
      type: t.type
    }, Gn(t, this.key));
    const r = new mh(this.imageData, {
      floating: t.floating,
      docProperties: t.altText,
      outline: t.outline
    });
    this.root.push(r);
  }
  prepForXml(t) {
    return t.file.Media.addImage(this.key, this.imageData), this.imageData.type === "svg" && t.file.Media.addImage(this.fallbackKey, this.imageData.fallback), super.prepForXml(t);
  }
}
class yh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { id: "w:id", initials: "w:initials", author: "w:author", date: "w:date" });
  }
}
class vh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      "xmlns:cx": "xmlns:cx",
      "xmlns:cx1": "xmlns:cx1",
      "xmlns:cx2": "xmlns:cx2",
      "xmlns:cx3": "xmlns:cx3",
      "xmlns:cx4": "xmlns:cx4",
      "xmlns:cx5": "xmlns:cx5",
      "xmlns:cx6": "xmlns:cx6",
      "xmlns:cx7": "xmlns:cx7",
      "xmlns:cx8": "xmlns:cx8",
      "xmlns:mc": "xmlns:mc",
      "xmlns:aink": "xmlns:aink",
      "xmlns:am3d": "xmlns:am3d",
      "xmlns:o": "xmlns:o",
      "xmlns:r": "xmlns:r",
      "xmlns:m": "xmlns:m",
      "xmlns:v": "xmlns:v",
      "xmlns:wp14": "xmlns:wp14",
      "xmlns:wp": "xmlns:wp",
      "xmlns:w10": "xmlns:w10",
      "xmlns:w": "xmlns:w",
      "xmlns:w14": "xmlns:w14",
      "xmlns:w15": "xmlns:w15",
      "xmlns:w16cex": "xmlns:w16cex",
      "xmlns:w16cid": "xmlns:w16cid",
      "xmlns:w16": "xmlns:w16",
      "xmlns:w16sdtdh": "xmlns:w16sdtdh",
      "xmlns:w16se": "xmlns:w16se",
      "xmlns:wpg": "xmlns:wpg",
      "xmlns:wpi": "xmlns:wpi",
      "xmlns:wne": "xmlns:wne",
      "xmlns:wps": "xmlns:wps"
    });
  }
}
class bh extends nt {
  constructor({ id: t, initials: r, author: i, date: a = /* @__PURE__ */ new Date(), children: o }) {
    super("w:comment"), this.root.push(
      new yh({
        id: t,
        initials: r,
        author: i,
        date: a.toISOString()
      })
    );
    for (const s of o)
      this.root.push(s);
  }
}
class _h extends nt {
  constructor({ children: t }) {
    super("w:comments"), this.root.push(
      new vh({
        "xmlns:cx": "http://schemas.microsoft.com/office/drawing/2014/chartex",
        "xmlns:cx1": "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
        "xmlns:cx2": "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
        "xmlns:cx3": "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
        "xmlns:cx4": "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
        "xmlns:cx5": "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
        "xmlns:cx6": "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
        "xmlns:cx7": "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
        "xmlns:cx8": "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
        "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
        "xmlns:aink": "http://schemas.microsoft.com/office/drawing/2016/ink",
        "xmlns:am3d": "http://schemas.microsoft.com/office/drawing/2017/model3d",
        "xmlns:o": "urn:schemas-microsoft-com:office:office",
        "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
        "xmlns:v": "urn:schemas-microsoft-com:vml",
        "xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        "xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        "xmlns:w10": "urn:schemas-microsoft-com:office:word",
        "xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        "xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
        "xmlns:w15": "http://schemas.microsoft.com/office/word/2012/wordml",
        "xmlns:w16cex": "http://schemas.microsoft.com/office/word/2018/wordml/cex",
        "xmlns:w16cid": "http://schemas.microsoft.com/office/word/2016/wordml/cid",
        "xmlns:w16": "http://schemas.microsoft.com/office/word/2018/wordml",
        "xmlns:w16sdtdh": "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
        "xmlns:w16se": "http://schemas.microsoft.com/office/word/2015/wordml/symex",
        "xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        "xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        "xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
        "xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
      })
    );
    for (const r of t)
      this.root.push(new bh(r));
  }
}
class Eh extends Du {
  constructor() {
    super("w:tab");
  }
}
const xh = {
  COLUMN: "column",
  PAGE: "page"
  // textWrapping breaks are the default and already exposed via the "Run" class
};
class Th extends nt {
  constructor(t) {
    super("w:br"), this.root.push(
      new kt({
        type: t
      })
    );
  }
}
class Ah extends pe {
  constructor() {
    super({}), this.root.push(new Th(xh.PAGE));
  }
}
class Sh extends nt {
  constructor() {
    super("w:pageBreakBefore");
  }
}
const Fr = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AT_LEAST: "atLeast",
  EXACTLY: "exactly",
  EXACT: "exact",
  AUTO: "auto"
};
class kh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      after: "w:after",
      before: "w:before",
      line: "w:line",
      lineRule: "w:lineRule"
    });
  }
}
class Ih extends nt {
  constructor(t) {
    super("w:spacing"), this.root.push(new kh(t));
  }
}
const Oe = {
  HEADING_1: "Heading1",
  HEADING_2: "Heading2",
  HEADING_3: "Heading3",
  HEADING_4: "Heading4",
  HEADING_5: "Heading5",
  HEADING_6: "Heading6",
  TITLE: "Title"
};
let _r = class extends nt {
  constructor(t) {
    super("w:pStyle"), this.root.push(
      new kt({
        val: t
      })
    );
  }
};
class Ch extends nt {
  constructor(t) {
    super("w:tabs");
    for (const r of t)
      this.root.push(new Nh(r));
  }
}
const Ws = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  BAR: "bar",
  CLEAR: "clear",
  DECIMAL: "decimal",
  END: "end",
  NUM: "num",
  START: "start"
};
class Rh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val", pos: "w:pos", leader: "w:leader" });
  }
}
class Nh extends nt {
  constructor({ type: t, position: r, leader: i }) {
    super("w:tab"), this.root.push(
      new Rh({
        val: t,
        pos: r,
        leader: i
      })
    );
  }
}
class Kn extends nt {
  constructor(t, r) {
    super("w:numPr"), this.root.push(new Oh(r)), this.root.push(new Bh(t));
  }
}
class Oh extends nt {
  constructor(t) {
    if (super("w:ilvl"), t > 9)
      throw new Error(
        "Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7"
      );
    this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class Bh extends nt {
  constructor(t) {
    super("w:numId"), this.root.push(
      new kt({
        val: typeof t == "string" ? `{${t}}` : t
      })
    );
  }
}
class Li extends nt {
  constructor() {
    super(...arguments), it(this, "fileChild", Symbol());
  }
}
class Dh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "Id",
      type: "Type",
      target: "Target",
      targetMode: "TargetMode"
    });
  }
}
const Fh = {
  EXTERNAL: "External"
};
class Lh extends nt {
  constructor(t, r, i, a) {
    super("Relationship"), this.root.push(
      new Dh({
        id: t,
        type: r,
        target: i,
        targetMode: a
      })
    );
  }
}
class Ph extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "r:id",
      history: "w:history",
      anchor: "w:anchor"
    });
  }
}
class Pi extends nt {
  constructor(t, r, i) {
    super("w:hyperlink"), it(this, "linkId"), this.linkId = r;
    const a = {
      history: 1,
      anchor: i || void 0,
      id: i ? void 0 : `rId${this.linkId}`
    }, o = new Ph(a);
    this.root.push(o), t.forEach((s) => {
      this.root.push(s);
    });
  }
}
class xo extends nt {
  constructor(t) {
    super("w:externalHyperlink"), this.options = t;
  }
}
class Mh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "w:id",
      name: "w:name"
    });
  }
}
class Uh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      id: "w:id"
    });
  }
}
class zh {
  constructor(t) {
    it(this, "bookmarkUniqueNumericId", mc()), it(this, "start"), it(this, "children"), it(this, "end");
    const r = this.bookmarkUniqueNumericId();
    this.start = new jh(t.id, r), this.children = t.children, this.end = new Wh(r);
  }
}
class jh extends nt {
  constructor(t, r) {
    super("w:bookmarkStart");
    const i = new Mh({
      name: t,
      id: r
    });
    this.root.push(i);
  }
}
class Wh extends nt {
  constructor(t) {
    super("w:bookmarkEnd");
    const r = new Uh({
      id: t
    });
    this.root.push(r);
  }
}
class Hh extends nt {
  constructor(t) {
    super("w:outlineLvl"), this.level = t, this.root.push(
      new kt({
        val: t
      })
    );
  }
}
const qn = {
  BOTTOM: "bottom",
  CENTER: "center",
  TOP: "top"
};
class Gh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      verticalAlign: "w:val"
    });
  }
}
class To extends nt {
  constructor(t) {
    super("w:vAlign"), this.root.push(new Gh({ verticalAlign: t }));
  }
}
const Ke = {
  DEFAULT: "default",
  FIRST: "first",
  EVEN: "even"
};
class Kh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      type: "w:type",
      id: "r:id"
    });
  }
}
const Hs = {
  HEADER: "w:headerReference",
  FOOTER: "w:footerReference"
};
class Vn extends nt {
  constructor(t, r) {
    super(t), this.root.push(
      new Kh({
        type: r.type || Ke.DEFAULT,
        id: `rId${r.id}`
      })
    );
  }
}
class qh extends nt {
  constructor({ space: t, count: r, separate: i, equalWidth: a, children: o }) {
    super("w:cols"), this.root.push(
      new ge({
        space: { key: "w:space", value: t === void 0 ? void 0 : Pt(t) },
        count: { key: "w:num", value: r === void 0 ? void 0 : zt(r) },
        separate: { key: "w:sep", value: i },
        equalWidth: { key: "w:equalWidth", value: a }
      })
    ), !a && o && o.forEach((s) => this.addChildElement(s));
  }
}
class Vh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      type: "w:type",
      linePitch: "w:linePitch",
      charSpace: "w:charSpace"
    });
  }
}
class $h extends nt {
  constructor(t, r, i) {
    super("w:docGrid"), this.root.push(
      new Vh({
        type: i,
        linePitch: zt(t),
        charSpace: r ? zt(r) : void 0
      })
    );
  }
}
const Zh = ({ countBy: e, start: t, restart: r, distance: i }) => new Ot({
  name: "w:lnNumType",
  attributes: {
    countBy: { key: "w:countBy", value: e === void 0 ? void 0 : zt(e) },
    start: { key: "w:start", value: t === void 0 ? void 0 : zt(t) },
    restart: { key: "w:restart", value: r },
    distance: {
      key: "w:distance",
      value: i === void 0 ? void 0 : Pt(i)
    }
  }
});
class Gs extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      display: "w:display",
      offsetFrom: "w:offsetFrom",
      zOrder: "w:zOrder"
    });
  }
}
class Xh extends me {
  constructor(t) {
    if (super("w:pgBorders"), !t)
      return this;
    t.pageBorders ? this.root.push(
      new Gs({
        display: t.pageBorders.display,
        offsetFrom: t.pageBorders.offsetFrom,
        zOrder: t.pageBorders.zOrder
      })
    ) : this.root.push(new Gs({})), t.pageBorderTop && this.root.push(new Tt("w:top", t.pageBorderTop)), t.pageBorderLeft && this.root.push(new Tt("w:left", t.pageBorderLeft)), t.pageBorderBottom && this.root.push(new Tt("w:bottom", t.pageBorderBottom)), t.pageBorderRight && this.root.push(new Tt("w:right", t.pageBorderRight));
  }
}
class Yh extends nt {
  constructor(t, r, i, a, o, s, n) {
    super("w:pgMar"), this.root.push(
      new ge({
        top: { key: "w:top", value: de(t) },
        right: { key: "w:right", value: Pt(r) },
        bottom: { key: "w:bottom", value: de(i) },
        left: { key: "w:left", value: Pt(a) },
        header: { key: "w:header", value: Pt(o) },
        footer: { key: "w:footer", value: Pt(s) },
        gutter: { key: "w:gutter", value: Pt(n) }
      })
    );
  }
}
class Jh extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      start: "w:start",
      formatType: "w:fmt",
      separator: "w:chapSep"
    });
  }
}
class Qh extends nt {
  constructor({ start: t, formatType: r, separator: i }) {
    super("w:pgNumType"), this.root.push(
      new Jh({
        start: t === void 0 ? void 0 : zt(t),
        formatType: r,
        separator: i
      })
    );
  }
}
const Lr = {
  PORTRAIT: "portrait",
  LANDSCAPE: "landscape"
};
class tf extends nt {
  constructor(t, r, i) {
    super("w:pgSz");
    const a = i === Lr.LANDSCAPE, o = Pt(t), s = Pt(r);
    this.root.push(
      new ge({
        width: { key: "w:w", value: a ? s : o },
        height: { key: "w:h", value: a ? o : s },
        orientation: { key: "w:orient", value: i }
      })
    );
  }
}
class ef extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class rf extends nt {
  constructor(t) {
    super("w:textDirection"), this.root.push(
      new ef({
        val: t
      })
    );
  }
}
class nf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      val: "w:val"
    });
  }
}
class sf extends nt {
  constructor(t) {
    super("w:type"), this.root.push(new nf({ val: t }));
  }
}
const Te = {
  TOP: 1440,
  RIGHT: 1440,
  BOTTOM: 1440,
  LEFT: 1440,
  HEADER: 708,
  FOOTER: 708,
  GUTTER: 0
}, $n = {
  WIDTH: 11906,
  HEIGHT: 16838,
  ORIENTATION: Lr.PORTRAIT
};
class af extends nt {
  constructor({
    page: {
      size: {
        width: t = $n.WIDTH,
        height: r = $n.HEIGHT,
        orientation: i = $n.ORIENTATION
      } = {},
      margin: {
        top: a = Te.TOP,
        right: o = Te.RIGHT,
        bottom: s = Te.BOTTOM,
        left: n = Te.LEFT,
        header: c = Te.HEADER,
        footer: w = Te.FOOTER,
        gutter: b = Te.GUTTER
      } = {},
      pageNumbers: g = {},
      borders: _,
      textDirection: f
    } = {},
    grid: { linePitch: y = 360, charSpace: d, type: x } = {},
    headerWrapperGroup: p = {},
    footerWrapperGroup: E = {},
    lineNumbers: A,
    titlePage: N,
    verticalAlign: O,
    column: z,
    type: P
  } = {}) {
    super("w:sectPr"), this.addHeaderFooterGroup(Hs.HEADER, p), this.addHeaderFooterGroup(Hs.FOOTER, E), P && this.root.push(new sf(P)), this.root.push(new tf(t, r, i)), this.root.push(new Yh(a, o, s, n, c, w, b)), _ && this.root.push(new Xh(_)), A && this.root.push(Zh(A)), this.root.push(new Qh(g)), z && this.root.push(new qh(z)), O && this.root.push(new To(O)), N !== void 0 && this.root.push(new ht("w:titlePg", N)), f && this.root.push(new rf(f)), this.root.push(new $h(y, d, x));
  }
  addHeaderFooterGroup(t, r) {
    r.default && this.root.push(
      new Vn(t, {
        type: Ke.DEFAULT,
        id: r.default.View.ReferenceId
      })
    ), r.first && this.root.push(
      new Vn(t, {
        type: Ke.FIRST,
        id: r.first.View.ReferenceId
      })
    ), r.even && this.root.push(
      new Vn(t, {
        type: Ke.EVEN,
        id: r.even.View.ReferenceId
      })
    );
  }
}
class of extends nt {
  constructor() {
    super("w:body"), it(this, "sections", []);
  }
  /**
   * Adds new section properties.
   * Note: Previous section is created in paragraph after the current element, and then new section will be added.
   * The spec says:
   *  - section element should be in the last paragraph of the section
   *  - last section should be direct child of body
   *
   * @param options new section options
   */
  addSection(t) {
    const r = this.sections.pop();
    this.root.push(this.createSectionParagraph(r)), this.sections.push(new af(t));
  }
  prepForXml(t) {
    return this.sections.length === 1 && (this.root.splice(0, 1), this.root.push(this.sections.pop())), super.prepForXml(t);
  }
  push(t) {
    this.root.push(t);
  }
  createSectionParagraph(t) {
    const r = new Wt({}), i = new $e({});
    return i.push(t), r.addChildElement(i), r;
  }
}
class pr extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      wpc: "xmlns:wpc",
      mc: "xmlns:mc",
      o: "xmlns:o",
      r: "xmlns:r",
      m: "xmlns:m",
      v: "xmlns:v",
      wp14: "xmlns:wp14",
      wp: "xmlns:wp",
      w10: "xmlns:w10",
      w: "xmlns:w",
      w14: "xmlns:w14",
      w15: "xmlns:w15",
      wpg: "xmlns:wpg",
      wpi: "xmlns:wpi",
      wne: "xmlns:wne",
      wps: "xmlns:wps",
      Ignorable: "mc:Ignorable",
      cp: "xmlns:cp",
      dc: "xmlns:dc",
      dcterms: "xmlns:dcterms",
      dcmitype: "xmlns:dcmitype",
      xsi: "xmlns:xsi",
      type: "xsi:type",
      cx: "xmlns:cx",
      cx1: "xmlns:cx1",
      cx2: "xmlns:cx2",
      cx3: "xmlns:cx3",
      cx4: "xmlns:cx4",
      cx5: "xmlns:cx5",
      cx6: "xmlns:cx6",
      cx7: "xmlns:cx7",
      cx8: "xmlns:cx8",
      aink: "xmlns:aink",
      am3d: "xmlns:am3d",
      w16cex: "xmlns:w16cex",
      w16cid: "xmlns:w16cid",
      w16: "xmlns:w16",
      w16sdtdh: "xmlns:w16sdtdh",
      w16se: "xmlns:w16se"
    });
  }
}
class lf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      color: "w:color",
      themeColor: "w:themeColor",
      themeShade: "w:themeShade",
      themeTint: "w:themeTint"
    });
  }
}
class uf extends nt {
  constructor(t) {
    super("w:background"), this.root.push(
      new lf({
        color: t.color === void 0 ? void 0 : Ve(t.color),
        themeColor: t.themeColor,
        themeShade: t.themeShade === void 0 ? void 0 : Ps(t.themeShade),
        themeTint: t.themeTint === void 0 ? void 0 : Ps(t.themeTint)
      })
    );
  }
}
class cf extends nt {
  constructor(t) {
    super("w:document"), it(this, "body"), this.root.push(
      new pr({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
        cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
        cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
        cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
        cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
        cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
        cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
        cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
        cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
        aink: "http://schemas.microsoft.com/office/drawing/2016/ink",
        am3d: "http://schemas.microsoft.com/office/drawing/2017/model3d",
        w16cex: "http://schemas.microsoft.com/office/word/2018/wordml/cex",
        w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
        w16: "http://schemas.microsoft.com/office/word/2018/wordml",
        w16sdtdh: "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
        w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex",
        Ignorable: "w14 w15 wp14"
      })
    ), this.body = new of(), t.background && this.root.push(new uf(t.background)), this.root.push(this.body);
  }
  add(t) {
    return this.body.push(t), this;
  }
  get Body() {
    return this.body;
  }
}
class hf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns"
    });
  }
}
class Ye extends nt {
  constructor() {
    super("Relationships"), this.root.push(
      new hf({
        xmlns: "http://schemas.openxmlformats.org/package/2006/relationships"
      })
    );
  }
  createRelationship(t, r, i, a) {
    const o = new Lh(`rId${t}`, r, i, a);
    return this.root.push(o), o;
  }
  get RelationshipCount() {
    return this.root.length - 1;
  }
}
class Ao {
  constructor(t) {
    it(this, "document"), it(this, "relationships"), this.document = new cf(t), this.relationships = new Ye();
  }
  get View() {
    return this.document;
  }
  get Relationships() {
    return this.relationships;
  }
}
class ff extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class df extends nt {
  constructor() {
    super("w:wordWrap"), this.root.push(new ff({ val: 0 }));
  }
}
const pf = (e) => {
  var t, r;
  return new Ot({
    name: "w:framePr",
    attributes: {
      anchorLock: {
        key: "w:anchorLock",
        value: e.anchorLock
      },
      dropCap: {
        key: "w:dropCap",
        value: e.dropCap
      },
      width: {
        key: "w:w",
        value: e.width
      },
      height: {
        key: "w:h",
        value: e.height
      },
      x: {
        key: "w:x",
        value: e.position ? e.position.x : void 0
      },
      y: {
        key: "w:y",
        value: e.position ? e.position.y : void 0
      },
      anchorHorizontal: {
        key: "w:hAnchor",
        value: e.anchor.horizontal
      },
      anchorVertical: {
        key: "w:vAnchor",
        value: e.anchor.vertical
      },
      spaceHorizontal: {
        key: "w:hSpace",
        value: (t = e.space) == null ? void 0 : t.horizontal
      },
      spaceVertical: {
        key: "w:vSpace",
        value: (r = e.space) == null ? void 0 : r.vertical
      },
      rule: {
        key: "w:hRule",
        value: e.rule
      },
      alignmentX: {
        key: "w:xAlign",
        value: e.alignment ? e.alignment.x : void 0
      },
      alignmentY: {
        key: "w:yAlign",
        value: e.alignment ? e.alignment.y : void 0
      },
      lines: {
        key: "w:lines",
        value: e.lines
      },
      wrap: {
        key: "w:wrap",
        value: e.wrap
      }
    }
  });
};
class $e extends me {
  constructor(t) {
    var r, i;
    if (super("w:pPr"), it(this, "numberingReferences", []), !t)
      return this;
    t.heading && this.push(new _r(t.heading)), t.bullet && this.push(new _r("ListParagraph")), t.numbering && !t.style && !t.heading && (t.numbering.custom || this.push(new _r("ListParagraph"))), t.style && this.push(new _r(t.style)), t.keepNext !== void 0 && this.push(new ht("w:keepNext", t.keepNext)), t.keepLines !== void 0 && this.push(new ht("w:keepLines", t.keepLines)), t.pageBreakBefore && this.push(new Sh()), t.frame && this.push(pf(t.frame)), t.widowControl !== void 0 && this.push(new ht("w:widowControl", t.widowControl)), t.bullet && this.push(new Kn(1, t.bullet.level)), t.numbering ? (this.numberingReferences.push({
      reference: t.numbering.reference,
      instance: (r = t.numbering.instance) != null ? r : 0
    }), this.push(new Kn(`${t.numbering.reference}-${(i = t.numbering.instance) != null ? i : 0}`, t.numbering.level))) : t.numbering === !1 && this.push(new Kn(0, 0)), t.border && this.push(new Mu(t.border)), t.thematicBreak && this.push(new Uu()), t.shading && this.push(new Gr(t.shading)), t.wordWrap && this.push(new df()), t.overflowPunctuation && this.push(new ht("w:overflowPunct", t.overflowPunctuation));
    const a = [
      ...t.rightTabStop !== void 0 ? [{ type: Ws.RIGHT, position: t.rightTabStop }] : [],
      ...t.tabStops ? t.tabStops : [],
      ...t.leftTabStop !== void 0 ? [{ type: Ws.LEFT, position: t.leftTabStop }] : []
    ];
    a.length > 0 && this.push(new Ch(a)), t.bidirectional !== void 0 && this.push(new ht("w:bidi", t.bidirectional)), t.spacing && this.push(new Ih(t.spacing)), t.indent && this.push(new zu(t.indent)), t.contextualSpacing !== void 0 && this.push(new ht("w:contextualSpacing", t.contextualSpacing)), t.alignment && this.push(new co(t.alignment)), t.outlineLevel !== void 0 && this.push(new Hh(t.outlineLevel)), t.suppressLineNumbers !== void 0 && this.push(new ht("w:suppressLineNumbers", t.suppressLineNumbers)), t.autoSpaceEastAsianText !== void 0 && this.push(new ht("w:autoSpaceDN", t.autoSpaceEastAsianText)), t.run && this.push(new Ne(t.run));
  }
  push(t) {
    this.root.push(t);
  }
  prepForXml(t) {
    if (t.viewWrapper instanceof Ao)
      for (const r of this.numberingReferences)
        t.file.Numbering.createConcreteNumberingInstance(r.reference, r.instance);
    return super.prepForXml(t);
  }
}
class Wt extends Li {
  constructor(t) {
    if (super("w:p"), it(this, "properties"), typeof t == "string")
      return this.properties = new $e({}), this.root.push(this.properties), this.root.push(new qt(t)), this;
    if (this.properties = new $e(t), this.root.push(this.properties), t.text && this.root.push(new qt(t.text)), t.children)
      for (const r of t.children) {
        if (r instanceof zh) {
          this.root.push(r.start);
          for (const i of r.children)
            this.root.push(i);
          this.root.push(r.end);
          continue;
        }
        this.root.push(r);
      }
  }
  prepForXml(t) {
    for (const r of this.root)
      if (r instanceof xo) {
        const i = this.root.indexOf(r), a = new Pi(r.options.children, ci());
        t.viewWrapper.Relationships.createRelationship(
          a.linkId,
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
          r.options.link,
          Fh.EXTERNAL
        ), this.root[i] = a;
      }
    return super.prepForXml(t);
  }
  addRunToFront(t) {
    return this.root.splice(1, 0, t), this;
  }
}
let mf = class extends nt {
  constructor(t) {
    super("m:oMath");
    for (const r of t.children)
      this.root.push(r);
  }
};
class gf extends nt {
  constructor(t) {
    super("m:t"), this.root.push(t);
  }
}
class wf extends nt {
  constructor(t) {
    super("m:r"), this.root.push(new gf(t));
  }
}
class yf extends nt {
  constructor(t) {
    super("w:tblGrid");
    for (const r of t)
      this.root.push(new vf(r));
  }
}
class vf extends nt {
  constructor(t) {
    super("w:gridCol"), t !== void 0 && this.root.push(
      new ge({
        width: { key: "w:w", value: Pt(t) }
      })
    );
  }
}
const So = {
  TABLE: "w:tblCellMar",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TABLE_CELL: "w:tcMar"
};
class ko extends me {
  constructor(t, { marginUnitType: r = hr.DXA, top: i, left: a, bottom: o, right: s }) {
    super(t), i !== void 0 && this.root.push(new Se("w:top", { type: r, size: i })), a !== void 0 && this.root.push(new Se("w:left", { type: r, size: a })), o !== void 0 && this.root.push(new Se("w:bottom", { type: r, size: o })), s !== void 0 && this.root.push(new Se("w:right", { type: r, size: s }));
  }
}
const hr = {
  /** Auto. */
  AUTO: "auto",
  /** Value is in twentieths of a point */
  DXA: "dxa",
  /** No (empty) value. */
  NIL: "nil",
  /** Value is in percentage. */
  PERCENTAGE: "pct"
};
class Se extends nt {
  constructor(t, { type: r = hr.AUTO, size: i }) {
    super(t);
    let a = i;
    r === hr.PERCENTAGE && typeof i == "number" && (a = `${i}%`), this.root.push(
      new ge({
        type: { key: "w:type", value: r },
        size: { key: "w:w", value: Ru(a) }
      })
    );
  }
}
class bf extends me {
  constructor(t) {
    super("w:tcBorders"), t.top && this.root.push(new Tt("w:top", t.top)), t.start && this.root.push(new Tt("w:start", t.start)), t.left && this.root.push(new Tt("w:left", t.left)), t.bottom && this.root.push(new Tt("w:bottom", t.bottom)), t.end && this.root.push(new Tt("w:end", t.end)), t.right && this.root.push(new Tt("w:right", t.right));
  }
}
class _f extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class Ef extends nt {
  constructor(t) {
    super("w:gridSpan"), this.root.push(
      new _f({
        val: zt(t)
      })
    );
  }
}
const Io = {
  /**
   * Cell that is merged with upper one.
   */
  CONTINUE: "continue",
  /**
   * Cell that is starting the vertical merge.
   */
  RESTART: "restart"
};
class xf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class Ks extends nt {
  constructor(t) {
    super("w:vMerge"), this.root.push(
      new xf({
        val: t
      })
    );
  }
}
class Tf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class Af extends nt {
  constructor(t) {
    super("w:textDirection"), this.root.push(
      new Tf({
        val: t
      })
    );
  }
}
class Sf extends me {
  constructor(t) {
    super("w:tcPr"), t.width && this.root.push(new Se("w:tcW", t.width)), t.columnSpan && this.root.push(new Ef(t.columnSpan)), t.verticalMerge ? this.root.push(new Ks(t.verticalMerge)) : t.rowSpan && t.rowSpan > 1 && this.root.push(new Ks(Io.RESTART)), t.borders && this.root.push(new bf(t.borders)), t.shading && this.root.push(new Gr(t.shading)), t.margins && this.root.push(new ko(So.TABLE_CELL, t.margins)), t.textDirection && this.root.push(new Af(t.textDirection)), t.verticalAlign && this.root.push(new To(t.verticalAlign));
  }
}
class Mi extends nt {
  constructor(t) {
    super("w:tc"), this.options = t, this.root.push(new Sf(t));
    for (const r of t.children)
      this.root.push(r);
  }
  prepForXml(t) {
    return this.root[this.root.length - 1] instanceof Wt || this.root.push(new Wt({})), super.prepForXml(t);
  }
}
const Be = {
  style: ke.NONE,
  size: 0,
  color: "auto"
}, De = {
  style: ke.SINGLE,
  size: 4,
  color: "auto"
};
class Co extends nt {
  constructor(t) {
    super("w:tblBorders"), t.top ? this.root.push(new Tt("w:top", t.top)) : this.root.push(new Tt("w:top", De)), t.left ? this.root.push(new Tt("w:left", t.left)) : this.root.push(new Tt("w:left", De)), t.bottom ? this.root.push(new Tt("w:bottom", t.bottom)) : this.root.push(new Tt("w:bottom", De)), t.right ? this.root.push(new Tt("w:right", t.right)) : this.root.push(new Tt("w:right", De)), t.insideHorizontal ? this.root.push(new Tt("w:insideH", t.insideHorizontal)) : this.root.push(new Tt("w:insideH", De)), t.insideVertical ? this.root.push(new Tt("w:insideV", t.insideVertical)) : this.root.push(new Tt("w:insideV", De));
  }
}
it(Co, "NONE", {
  top: Be,
  bottom: Be,
  left: Be,
  right: Be,
  insideHorizontal: Be,
  insideVertical: Be
});
class kf extends nt {
  constructor({
    horizontalAnchor: t,
    verticalAnchor: r,
    absoluteHorizontalPosition: i,
    relativeHorizontalPosition: a,
    absoluteVerticalPosition: o,
    relativeVerticalPosition: s,
    bottomFromText: n,
    topFromText: c,
    leftFromText: w,
    rightFromText: b,
    overlap: g
  }) {
    super("w:tblpPr"), this.root.push(
      new ge({
        leftFromText: {
          key: "w:leftFromText",
          value: w === void 0 ? void 0 : Pt(w)
        },
        rightFromText: {
          key: "w:rightFromText",
          value: b === void 0 ? void 0 : Pt(b)
        },
        topFromText: {
          key: "w:topFromText",
          value: c === void 0 ? void 0 : Pt(c)
        },
        bottomFromText: {
          key: "w:bottomFromText",
          value: n === void 0 ? void 0 : Pt(n)
        },
        absoluteHorizontalPosition: {
          key: "w:tblpX",
          value: i === void 0 ? void 0 : de(i)
        },
        absoluteVerticalPosition: {
          key: "w:tblpY",
          value: o === void 0 ? void 0 : de(o)
        },
        horizontalAnchor: {
          key: "w:horzAnchor",
          value: t === void 0 ? void 0 : t
        },
        relativeHorizontalPosition: {
          key: "w:tblpXSpec",
          value: a
        },
        relativeVerticalPosition: {
          key: "w:tblpYSpec",
          value: s
        },
        verticalAnchor: {
          key: "w:vertAnchor",
          value: r
        }
      })
    ), g && this.root.push(new Fu("w:tblOverlap", g));
  }
}
class If extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { type: "w:type" });
  }
}
class Cf extends nt {
  constructor(t) {
    super("w:tblLayout"), this.root.push(new If({ type: t }));
  }
}
class Rf extends me {
  constructor(t) {
    super("w:tblPr"), t.style && this.root.push(new ve("w:tblStyle", t.style)), t.float && this.root.push(new kf(t.float)), t.visuallyRightToLeft !== void 0 && this.root.push(new ht("w:bidiVisual", t.visuallyRightToLeft)), t.width && this.root.push(new Se("w:tblW", t.width)), t.alignment && this.root.push(new co(t.alignment)), t.indent && this.root.push(new Se("w:tblInd", t.indent)), t.borders && this.root.push(new Co(t.borders)), t.shading && this.root.push(new Gr(t.shading)), t.layout && this.root.push(new Cf(t.layout)), t.cellMargin && this.root.push(new ko(So.TABLE, t.cellMargin));
  }
}
class Nf extends Li {
  constructor({
    rows: t,
    width: r,
    // eslint-disable-next-line functional/immutable-data
    columnWidths: i = Array(Math.max(...t.map((_) => _.CellCount))).fill(100),
    margins: a,
    indent: o,
    float: s,
    layout: n,
    style: c,
    borders: w,
    alignment: b,
    visuallyRightToLeft: g
  }) {
    super("w:tbl"), this.root.push(
      new Rf({
        borders: w ?? {},
        width: r ?? { size: 100 },
        indent: o,
        float: s,
        layout: n,
        style: c,
        alignment: b,
        cellMargin: a,
        visuallyRightToLeft: g
      })
    ), this.root.push(new yf(i));
    for (const _ of t)
      this.root.push(_);
    t.forEach((_, f) => {
      if (f === t.length - 1)
        return;
      let y = 0;
      _.cells.forEach((d) => {
        if (d.options.rowSpan && d.options.rowSpan > 1) {
          const x = new Mi({
            // the inserted CONTINUE cell has rowSpan, and will be handled when process the next row
            rowSpan: d.options.rowSpan - 1,
            columnSpan: d.options.columnSpan,
            borders: d.options.borders,
            children: [],
            verticalMerge: Io.CONTINUE
          });
          t[f + 1].addCellToColumnIndex(x, y);
        }
        y += d.options.columnSpan || 1;
      });
    });
  }
}
const Of = {
  /** Height is determined based on the content, so value is ignored. */
  AUTO: "auto",
  /** At least the value specified */
  ATLEAST: "atLeast",
  /** Exactly the value specified */
  EXACT: "exact"
};
class Bf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { value: "w:val", rule: "w:hRule" });
  }
}
class Df extends nt {
  constructor(t, r) {
    super("w:trHeight"), this.root.push(
      new Bf({
        value: Pt(t),
        rule: r
      })
    );
  }
}
class Ff extends me {
  constructor(t) {
    super("w:trPr"), t.cantSplit !== void 0 && this.root.push(new ht("w:cantSplit", t.cantSplit)), t.tableHeader !== void 0 && this.root.push(new ht("w:tblHeader", t.tableHeader)), t.height && this.root.push(new Df(t.height.value, t.height.rule));
  }
}
class Lf extends nt {
  constructor(t) {
    super("w:tr"), this.options = t, this.root.push(new Ff(t));
    for (const r of t.children)
      this.root.push(r);
  }
  get CellCount() {
    return this.options.children.length;
  }
  get cells() {
    return this.root.filter((t) => t instanceof Mi);
  }
  addCellToIndex(t, r) {
    this.root.splice(r + 1, 0, t);
  }
  addCellToColumnIndex(t, r) {
    const i = this.columnIndexToRootIndex(r, !0);
    this.addCellToIndex(t, i - 1);
  }
  rootIndexToColumnIndex(t) {
    if (t < 1 || t >= this.root.length)
      throw new Error(`cell 'rootIndex' should between 1 to ${this.root.length - 1}`);
    let r = 0;
    for (let i = 1; i < t; i++) {
      const a = this.root[i];
      r += a.options.columnSpan || 1;
    }
    return r;
  }
  columnIndexToRootIndex(t, r = !1) {
    if (t < 0)
      throw new Error("cell 'columnIndex' should not less than zero");
    let i = 0, a = 1;
    for (; i <= t; ) {
      if (a >= this.root.length) {
        if (r)
          return this.root.length;
        throw new Error(`cell 'columnIndex' should not great than ${i - 1}`);
      }
      const o = this.root[a];
      a += 1, i += o && o.options.columnSpan || 1;
    }
    return a - 1;
  }
}
class Pf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns",
      vt: "xmlns:vt"
    });
  }
}
class Mf extends nt {
  constructor() {
    super("Properties"), this.root.push(
      new Pf({
        xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"
      })
    );
  }
}
class Uf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns"
    });
  }
}
class zf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      contentType: "ContentType",
      extension: "Extension"
    });
  }
}
class ue extends nt {
  constructor(t, r) {
    super("Default"), this.root.push(
      new zf({
        contentType: t,
        extension: r
      })
    );
  }
}
class jf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      contentType: "ContentType",
      partName: "PartName"
    });
  }
}
class $t extends nt {
  constructor(t, r) {
    super("Override"), this.root.push(
      new jf({
        contentType: t,
        partName: r
      })
    );
  }
}
class Wf extends nt {
  constructor() {
    super("Types"), this.root.push(
      new Uf({
        xmlns: "http://schemas.openxmlformats.org/package/2006/content-types"
      })
    ), this.root.push(new ue("image/png", "png")), this.root.push(new ue("image/jpeg", "jpeg")), this.root.push(new ue("image/jpeg", "jpg")), this.root.push(new ue("image/bmp", "bmp")), this.root.push(new ue("image/gif", "gif")), this.root.push(new ue("image/svg+xml", "svg")), this.root.push(new ue("application/vnd.openxmlformats-package.relationships+xml", "rels")), this.root.push(new ue("application/xml", "xml")), this.root.push(new ue("application/vnd.openxmlformats-officedocument.obfuscatedFont", "odttf")), this.root.push(
      new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", "/word/document.xml")
    ), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml", "/word/styles.xml")), this.root.push(new $t("application/vnd.openxmlformats-package.core-properties+xml", "/docProps/core.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.custom-properties+xml", "/docProps/custom.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.extended-properties+xml", "/docProps/app.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml", "/word/numbering.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", "/word/footnotes.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", "/word/settings.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml", "/word/comments.xml")), this.root.push(new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml", "/word/fontTable.xml"));
  }
  addFooter(t) {
    this.root.push(
      new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", `/word/footer${t}.xml`)
    );
  }
  addHeader(t) {
    this.root.push(
      new $t("application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", `/word/header${t}.xml`)
    );
  }
}
class Hf extends nt {
  constructor(t) {
    super("cp:coreProperties"), this.root.push(
      new pr({
        cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        xsi: "http://www.w3.org/2001/XMLSchema-instance"
      })
    ), t.title && this.root.push(new xe("dc:title", t.title)), t.subject && this.root.push(new xe("dc:subject", t.subject)), t.creator && this.root.push(new xe("dc:creator", t.creator)), t.keywords && this.root.push(new xe("cp:keywords", t.keywords)), t.description && this.root.push(new xe("dc:description", t.description)), t.lastModifiedBy && this.root.push(new xe("cp:lastModifiedBy", t.lastModifiedBy)), t.revision && this.root.push(new xe("cp:revision", String(t.revision))), this.root.push(new qs("dcterms:created")), this.root.push(new qs("dcterms:modified"));
  }
}
class qs extends nt {
  constructor(t) {
    super(t), this.root.push(
      new pr({
        type: "dcterms:W3CDTF"
      })
    ), this.root.push(Bu(/* @__PURE__ */ new Date()));
  }
}
class Gf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      xmlns: "xmlns",
      vt: "xmlns:vt"
    });
  }
}
class Kf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      fmtid: "fmtid",
      pid: "pid",
      name: "name"
    });
  }
}
class qf extends nt {
  constructor(t, r) {
    super("property"), this.root.push(
      new Kf({
        fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
        pid: t.toString(),
        name: r.name
      })
    ), this.root.push(new Vf(r.value));
  }
}
class Vf extends nt {
  constructor(t) {
    super("vt:lpwstr"), this.root.push(t);
  }
}
class $f extends nt {
  constructor(t) {
    super("Properties"), it(this, "nextId"), it(this, "properties", []), this.root.push(
      new Gf({
        xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"
      })
    ), this.nextId = 2;
    for (const r of t)
      this.addCustomProperty(r);
  }
  prepForXml(t) {
    return this.properties.forEach((r) => this.root.push(r)), super.prepForXml(t);
  }
  addCustomProperty(t) {
    this.properties.push(new qf(this.nextId++, t));
  }
}
class Zf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      wpc: "xmlns:wpc",
      mc: "xmlns:mc",
      o: "xmlns:o",
      r: "xmlns:r",
      m: "xmlns:m",
      v: "xmlns:v",
      wp14: "xmlns:wp14",
      wp: "xmlns:wp",
      w10: "xmlns:w10",
      w: "xmlns:w",
      w14: "xmlns:w14",
      w15: "xmlns:w15",
      wpg: "xmlns:wpg",
      wpi: "xmlns:wpi",
      wne: "xmlns:wne",
      wps: "xmlns:wps",
      cp: "xmlns:cp",
      dc: "xmlns:dc",
      dcterms: "xmlns:dcterms",
      dcmitype: "xmlns:dcmitype",
      xsi: "xmlns:xsi",
      type: "xsi:type"
    });
  }
}
let Xf = class extends lo {
  constructor(t, r) {
    super("w:ftr", r), it(this, "refId"), this.refId = t, r || this.root.push(
      new Zf({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
      })
    );
  }
  get ReferenceId() {
    return this.refId;
  }
  add(t) {
    this.root.push(t);
  }
};
class Yf {
  constructor(t, r, i) {
    it(this, "footer"), it(this, "relationships"), this.media = t, this.footer = new Xf(r, i), this.relationships = new Ye();
  }
  add(t) {
    this.footer.add(t);
  }
  addChildElement(t) {
    this.footer.addChildElement(t);
  }
  get View() {
    return this.footer;
  }
  get Relationships() {
    return this.relationships;
  }
  get Media() {
    return this.media;
  }
}
class Jf extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      type: "w:type",
      id: "w:id"
    });
  }
}
class Qf extends nt {
  constructor() {
    super("w:footnoteRef");
  }
}
class td extends pe {
  constructor() {
    super({
      style: "FootnoteReference"
    }), this.root.push(new Qf());
  }
}
const Vs = {
  SEPERATOR: "separator",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CONTINUATION_SEPERATOR: "continuationSeparator"
};
class Zn extends nt {
  constructor(t) {
    super("w:footnote"), this.root.push(
      new Jf({
        type: t.type,
        id: t.id
      })
    );
    for (let r = 0; r < t.children.length; r++) {
      const i = t.children[r];
      r === 0 && i.addRunToFront(new td()), this.root.push(i);
    }
  }
}
class ed extends nt {
  constructor() {
    super("w:continuationSeparator");
  }
}
class rd extends pe {
  constructor() {
    super({}), this.root.push(new ed());
  }
}
class nd extends nt {
  constructor() {
    super("w:separator");
  }
}
class id extends pe {
  constructor() {
    super({}), this.root.push(new nd());
  }
}
class sd extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      wpc: "xmlns:wpc",
      mc: "xmlns:mc",
      o: "xmlns:o",
      r: "xmlns:r",
      m: "xmlns:m",
      v: "xmlns:v",
      wp14: "xmlns:wp14",
      wp: "xmlns:wp",
      w10: "xmlns:w10",
      w: "xmlns:w",
      w14: "xmlns:w14",
      w15: "xmlns:w15",
      wpg: "xmlns:wpg",
      wpi: "xmlns:wpi",
      wne: "xmlns:wne",
      wps: "xmlns:wps",
      Ignorable: "mc:Ignorable"
    });
  }
}
class ad extends nt {
  constructor() {
    super("w:footnotes"), this.root.push(
      new sd({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      })
    );
    const t = new Zn({
      id: -1,
      type: Vs.SEPERATOR,
      children: [
        new Wt({
          spacing: {
            after: 0,
            line: 240,
            lineRule: Fr.AUTO
          },
          children: [new id()]
        })
      ]
    });
    this.root.push(t);
    const r = new Zn({
      id: 0,
      type: Vs.CONTINUATION_SEPERATOR,
      children: [
        new Wt({
          spacing: {
            after: 0,
            line: 240,
            lineRule: Fr.AUTO
          },
          children: [new rd()]
        })
      ]
    });
    this.root.push(r);
  }
  createFootNote(t, r) {
    const i = new Zn({
      id: t,
      children: r
    });
    this.root.push(i);
  }
}
class od {
  constructor() {
    it(this, "footnotess"), it(this, "relationships"), this.footnotess = new ad(), this.relationships = new Ye();
  }
  get View() {
    return this.footnotess;
  }
  get Relationships() {
    return this.relationships;
  }
}
class ld extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      wpc: "xmlns:wpc",
      mc: "xmlns:mc",
      o: "xmlns:o",
      r: "xmlns:r",
      m: "xmlns:m",
      v: "xmlns:v",
      wp14: "xmlns:wp14",
      wp: "xmlns:wp",
      w10: "xmlns:w10",
      w: "xmlns:w",
      w14: "xmlns:w14",
      w15: "xmlns:w15",
      wpg: "xmlns:wpg",
      wpi: "xmlns:wpi",
      wne: "xmlns:wne",
      wps: "xmlns:wps",
      cp: "xmlns:cp",
      dc: "xmlns:dc",
      dcterms: "xmlns:dcterms",
      dcmitype: "xmlns:dcmitype",
      xsi: "xmlns:xsi",
      type: "xsi:type",
      cx: "xmlns:cx",
      cx1: "xmlns:cx1",
      cx2: "xmlns:cx2",
      cx3: "xmlns:cx3",
      cx4: "xmlns:cx4",
      cx5: "xmlns:cx5",
      cx6: "xmlns:cx6",
      cx7: "xmlns:cx7",
      cx8: "xmlns:cx8",
      w16cid: "xmlns:w16cid",
      w16se: "xmlns:w16se"
    });
  }
}
let ud = class extends lo {
  constructor(t, r) {
    super("w:hdr", r), it(this, "refId"), this.refId = t, r || this.root.push(
      new ld({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
        cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
        cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
        cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
        cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
        cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
        cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
        cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
        cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
        w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
        w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex"
      })
    );
  }
  get ReferenceId() {
    return this.refId;
  }
  add(t) {
    this.root.push(t);
  }
};
class cd {
  constructor(t, r, i) {
    it(this, "header"), it(this, "relationships"), this.media = t, this.header = new ud(r, i), this.relationships = new Ye();
  }
  add(t) {
    return this.header.add(t), this;
  }
  addChildElement(t) {
    this.header.addChildElement(t);
  }
  get View() {
    return this.header;
  }
  get Relationships() {
    return this.relationships;
  }
  get Media() {
    return this.media;
  }
}
class hd {
  constructor() {
    it(this, "map"), this.map = /* @__PURE__ */ new Map();
  }
  addImage(t, r) {
    this.map.set(t, r);
  }
  get Array() {
    return Array.from(this.map.values());
  }
}
const ce = {
  DECIMAL: "decimal",
  UPPER_ROMAN: "upperRoman",
  LOWER_ROMAN: "lowerRoman",
  UPPER_LETTER: "upperLetter",
  LOWER_LETTER: "lowerLetter",
  ORDINAL: "ordinal",
  CARDINAL_TEXT: "cardinalText",
  ORDINAL_TEXT: "ordinalText",
  HEX: "hex",
  CHICAGO: "chicago",
  IDEOGRAPH__DIGITAL: "ideographDigital",
  JAPANESE_COUNTING: "japaneseCounting",
  AIUEO: "aiueo",
  IROHA: "iroha",
  DECIMAL_FULL_WIDTH: "decimalFullWidth",
  DECIMAL_HALF_WIDTH: "decimalHalfWidth",
  JAPANESE_LEGAL: "japaneseLegal",
  JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand",
  DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle",
  DECIMAL_FULL_WIDTH2: "decimalFullWidth2",
  AIUEO_FULL_WIDTH: "aiueoFullWidth",
  IROHA_FULL_WIDTH: "irohaFullWidth",
  DECIMAL_ZERO: "decimalZero",
  BULLET: "bullet",
  GANADA: "ganada",
  CHOSUNG: "chosung",
  DECIMAL_ENCLOSED_FULLSTOP: "decimalEnclosedFullstop",
  DECIMAL_ENCLOSED_PARENTHESES: "decimalEnclosedParen",
  DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese",
  IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle",
  IDEOGRAPH_TRADITIONAL: "ideographTraditional",
  IDEOGRAPH_ZODIAC: "ideographZodiac",
  IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional",
  TAIWANESE_COUNTING: "taiwaneseCounting",
  IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional",
  TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand",
  TAIWANESE_DIGITAL: "taiwaneseDigital",
  CHINESE_COUNTING: "chineseCounting",
  CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified",
  CHINESE_COUNTING_THOUSAND: "chineseCountingThousand",
  KOREAN_DIGITAL: "koreanDigital",
  KOREAN_COUNTING: "koreanCounting",
  KOREAN_LEGAL: "koreanLegal",
  KOREAN_DIGITAL2: "koreanDigital2",
  VIETNAMESE_COUNTING: "vietnameseCounting",
  RUSSIAN_LOWER: "russianLower",
  RUSSIAN_UPPER: "russianUpper",
  NONE: "none",
  NUMBER_IN_DASH: "numberInDash",
  HEBREW1: "hebrew1",
  HEBREW2: "hebrew2",
  ARABIC_ALPHA: "arabicAlpha",
  ARABIC_ABJAD: "arabicAbjad",
  HINDI_VOWELS: "hindiVowels",
  HINDI_CONSONANTS: "hindiConsonants",
  HINDI_NUMBERS: "hindiNumbers",
  HINDI_COUNTING: "hindiCounting",
  THAI_LETTERS: "thaiLetters",
  THAI_NUMBERS: "thaiNumbers",
  THAI_COUNTING: "thaiCounting",
  BAHT_TEXT: "bahtText",
  DOLLAR_TEXT: "dollarText",
  CUSTOM: "custom"
};
class fd extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      ilvl: "w:ilvl",
      tentative: "w15:tentative"
    });
  }
}
class dd extends nt {
  constructor(t) {
    super("w:numFmt"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class pd extends nt {
  constructor(t) {
    super("w:lvlText"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class md extends nt {
  constructor(t) {
    super("w:lvlJc"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class gd extends nt {
  constructor(t) {
    super("w:suff"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class wd extends nt {
  constructor() {
    super("w:isLgl");
  }
}
class yd extends nt {
  constructor({
    level: t,
    format: r,
    text: i,
    alignment: a = Gt.START,
    start: o = 1,
    style: s,
    suffix: n,
    isLegalNumberingStyle: c
  }) {
    if (super("w:lvl"), it(this, "paragraphProperties"), it(this, "runProperties"), this.root.push(new Ni("w:start", zt(o))), r && this.root.push(new dd(r)), n && this.root.push(new gd(n)), c && this.root.push(new wd()), i && this.root.push(new pd(i)), this.root.push(new md(a)), this.paragraphProperties = new $e(s && s.paragraph), this.runProperties = new Ne(s && s.run), this.root.push(this.paragraphProperties), this.root.push(this.runProperties), t > 9)
      throw new Error(
        "Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7"
      );
    this.root.push(
      new fd({
        ilvl: zt(t),
        tentative: 1
      })
    );
  }
}
class vd extends yd {
  // This is the level that sits under abstractNum. We make a
  // handful of properties required
}
class bd extends nt {
  constructor(t) {
    super("w:multiLevelType"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class _d extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      abstractNumId: "w:abstractNumId",
      restartNumberingAfterBreak: "w15:restartNumberingAfterBreak"
    });
  }
}
class $s extends nt {
  constructor(t, r) {
    super("w:abstractNum"), it(this, "id"), this.root.push(
      new _d({
        abstractNumId: zt(t),
        restartNumberingAfterBreak: 0
      })
    ), this.root.push(new bd("hybridMultilevel")), this.id = t;
    for (const i of r)
      this.root.push(new vd(i));
  }
}
class Ed extends nt {
  constructor(t) {
    super("w:abstractNumId"), this.root.push(
      new kt({
        val: t
      })
    );
  }
}
class xd extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { numId: "w:numId" });
  }
}
class Zs extends nt {
  constructor(t) {
    if (super("w:num"), it(this, "numId"), it(this, "reference"), it(this, "instance"), this.numId = t.numId, this.reference = t.reference, this.instance = t.instance, this.root.push(
      new xd({
        numId: zt(t.numId)
      })
    ), this.root.push(new Ed(zt(t.abstractNumId))), t.overrideLevels && t.overrideLevels.length)
      for (const r of t.overrideLevels)
        this.root.push(new Ad(r.num, r.start));
  }
}
class Td extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { ilvl: "w:ilvl" });
  }
}
class Ad extends nt {
  constructor(t, r) {
    super("w:lvlOverride"), this.root.push(new Td({ ilvl: t })), r !== void 0 && this.root.push(new kd(r));
  }
}
class Sd extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class kd extends nt {
  constructor(t) {
    super("w:startOverride"), this.root.push(new Sd({ val: t }));
  }
}
class Id extends nt {
  constructor(t) {
    super("w:numbering"), it(this, "abstractNumberingMap", /* @__PURE__ */ new Map()), it(this, "concreteNumberingMap", /* @__PURE__ */ new Map()), it(this, "referenceConfigMap", /* @__PURE__ */ new Map()), it(this, "abstractNumUniqueNumericId", fc()), it(this, "concreteNumUniqueNumericId", dc()), this.root.push(
      new pr({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      })
    );
    const r = new $s(this.abstractNumUniqueNumericId(), [
      {
        level: 0,
        format: ce.BULLET,
        text: "●",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: te(0.5), hanging: te(0.25) }
          }
        }
      },
      {
        level: 1,
        format: ce.BULLET,
        text: "○",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: te(1), hanging: te(0.25) }
          }
        }
      },
      {
        level: 2,
        format: ce.BULLET,
        text: "■",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 2160, hanging: te(0.25) }
          }
        }
      },
      {
        level: 3,
        format: ce.BULLET,
        text: "●",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 2880, hanging: te(0.25) }
          }
        }
      },
      {
        level: 4,
        format: ce.BULLET,
        text: "○",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 3600, hanging: te(0.25) }
          }
        }
      },
      {
        level: 5,
        format: ce.BULLET,
        text: "■",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 4320, hanging: te(0.25) }
          }
        }
      },
      {
        level: 6,
        format: ce.BULLET,
        text: "●",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 5040, hanging: te(0.25) }
          }
        }
      },
      {
        level: 7,
        format: ce.BULLET,
        text: "●",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 5760, hanging: te(0.25) }
          }
        }
      },
      {
        level: 8,
        format: ce.BULLET,
        text: "●",
        alignment: Gt.LEFT,
        style: {
          paragraph: {
            indent: { left: 6480, hanging: te(0.25) }
          }
        }
      }
    ]);
    this.concreteNumberingMap.set(
      "default-bullet-numbering",
      new Zs({
        numId: 1,
        abstractNumId: r.id,
        reference: "default-bullet-numbering",
        instance: 0,
        overrideLevels: [
          {
            num: 0,
            start: 1
          }
        ]
      })
    ), this.abstractNumberingMap.set("default-bullet-numbering", r);
    for (const i of t.config)
      this.abstractNumberingMap.set(i.reference, new $s(this.abstractNumUniqueNumericId(), i.levels)), this.referenceConfigMap.set(i.reference, i.levels);
  }
  prepForXml(t) {
    for (const r of this.abstractNumberingMap.values())
      this.root.push(r);
    for (const r of this.concreteNumberingMap.values())
      this.root.push(r);
    return super.prepForXml(t);
  }
  createConcreteNumberingInstance(t, r) {
    const i = this.abstractNumberingMap.get(t);
    if (!i)
      return;
    const a = `${t}-${r}`;
    if (this.concreteNumberingMap.has(a))
      return;
    const o = this.referenceConfigMap.get(t), s = o && o[0].start, n = {
      numId: this.concreteNumUniqueNumericId(),
      abstractNumId: i.id,
      reference: t,
      instance: r,
      overrideLevels: [
        s && Number.isInteger(s) ? {
          num: 0,
          start: s
        } : {
          num: 0,
          start: 1
        }
      ]
    };
    this.concreteNumberingMap.set(a, new Zs(n));
  }
  get ConcreteNumbering() {
    return Array.from(this.concreteNumberingMap.values());
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get ReferenceConfig() {
    return Array.from(this.referenceConfigMap.values());
  }
}
class Cd extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      version: "w:val",
      name: "w:name",
      uri: "w:uri"
    });
  }
}
class Rd extends nt {
  constructor(t) {
    super("w:compatSetting"), this.root.push(
      new Cd({
        version: t,
        uri: "http://schemas.microsoft.com/office/word",
        name: "compatibilityMode"
      })
    );
  }
}
class Nd extends nt {
  constructor(t) {
    super("w:compat"), t.version && this.root.push(new Rd(t.version)), t.useSingleBorderforContiguousCells && this.root.push(new ht("w:useSingleBorderforContiguousCells", t.useSingleBorderforContiguousCells)), t.wordPerfectJustification && this.root.push(new ht("w:wpJustification", t.wordPerfectJustification)), t.noTabStopForHangingIndent && this.root.push(new ht("w:noTabHangInd", t.noTabStopForHangingIndent)), t.noLeading && this.root.push(new ht("w:noLeading", t.noLeading)), t.spaceForUnderline && this.root.push(new ht("w:spaceForUL", t.spaceForUnderline)), t.noColumnBalance && this.root.push(new ht("w:noColumnBalance", t.noColumnBalance)), t.balanceSingleByteDoubleByteWidth && this.root.push(new ht("w:balanceSingleByteDoubleByteWidth", t.balanceSingleByteDoubleByteWidth)), t.noExtraLineSpacing && this.root.push(new ht("w:noExtraLineSpacing", t.noExtraLineSpacing)), t.doNotLeaveBackslashAlone && this.root.push(new ht("w:doNotLeaveBackslashAlone", t.doNotLeaveBackslashAlone)), t.underlineTrailingSpaces && this.root.push(new ht("w:ulTrailSpace", t.underlineTrailingSpaces)), t.doNotExpandShiftReturn && this.root.push(new ht("w:doNotExpandShiftReturn", t.doNotExpandShiftReturn)), t.spacingInWholePoints && this.root.push(new ht("w:spacingInWholePoints", t.spacingInWholePoints)), t.lineWrapLikeWord6 && this.root.push(new ht("w:lineWrapLikeWord6", t.lineWrapLikeWord6)), t.printBodyTextBeforeHeader && this.root.push(new ht("w:printBodyTextBeforeHeader", t.printBodyTextBeforeHeader)), t.printColorsBlack && this.root.push(new ht("w:printColBlack", t.printColorsBlack)), t.spaceWidth && this.root.push(new ht("w:wpSpaceWidth", t.spaceWidth)), t.showBreaksInFrames && this.root.push(new ht("w:showBreaksInFrames", t.showBreaksInFrames)), t.subFontBySize && this.root.push(new ht("w:subFontBySize", t.subFontBySize)), t.suppressBottomSpacing && this.root.push(new ht("w:suppressBottomSpacing", t.suppressBottomSpacing)), t.suppressTopSpacing && this.root.push(new ht("w:suppressTopSpacing", t.suppressTopSpacing)), t.suppressSpacingAtTopOfPage && this.root.push(new ht("w:suppressSpacingAtTopOfPage", t.suppressSpacingAtTopOfPage)), t.suppressTopSpacingWP && this.root.push(new ht("w:suppressTopSpacingWP", t.suppressTopSpacingWP)), t.suppressSpBfAfterPgBrk && this.root.push(new ht("w:suppressSpBfAfterPgBrk", t.suppressSpBfAfterPgBrk)), t.swapBordersFacingPages && this.root.push(new ht("w:swapBordersFacingPages", t.swapBordersFacingPages)), t.convertMailMergeEsc && this.root.push(new ht("w:convMailMergeEsc", t.convertMailMergeEsc)), t.truncateFontHeightsLikeWP6 && this.root.push(new ht("w:truncateFontHeightsLikeWP6", t.truncateFontHeightsLikeWP6)), t.macWordSmallCaps && this.root.push(new ht("w:mwSmallCaps", t.macWordSmallCaps)), t.usePrinterMetrics && this.root.push(new ht("w:usePrinterMetrics", t.usePrinterMetrics)), t.doNotSuppressParagraphBorders && this.root.push(new ht("w:doNotSuppressParagraphBorders", t.doNotSuppressParagraphBorders)), t.wrapTrailSpaces && this.root.push(new ht("w:wrapTrailSpaces", t.wrapTrailSpaces)), t.footnoteLayoutLikeWW8 && this.root.push(new ht("w:footnoteLayoutLikeWW8", t.footnoteLayoutLikeWW8)), t.shapeLayoutLikeWW8 && this.root.push(new ht("w:shapeLayoutLikeWW8", t.shapeLayoutLikeWW8)), t.alignTablesRowByRow && this.root.push(new ht("w:alignTablesRowByRow", t.alignTablesRowByRow)), t.forgetLastTabAlignment && this.root.push(new ht("w:forgetLastTabAlignment", t.forgetLastTabAlignment)), t.adjustLineHeightInTable && this.root.push(new ht("w:adjustLineHeightInTable", t.adjustLineHeightInTable)), t.autoSpaceLikeWord95 && this.root.push(new ht("w:autoSpaceLikeWord95", t.autoSpaceLikeWord95)), t.noSpaceRaiseLower && this.root.push(new ht("w:noSpaceRaiseLower", t.noSpaceRaiseLower)), t.doNotUseHTMLParagraphAutoSpacing && this.root.push(new ht("w:doNotUseHTMLParagraphAutoSpacing", t.doNotUseHTMLParagraphAutoSpacing)), t.layoutRawTableWidth && this.root.push(new ht("w:layoutRawTableWidth", t.layoutRawTableWidth)), t.layoutTableRowsApart && this.root.push(new ht("w:layoutTableRowsApart", t.layoutTableRowsApart)), t.useWord97LineBreakRules && this.root.push(new ht("w:useWord97LineBreakRules", t.useWord97LineBreakRules)), t.doNotBreakWrappedTables && this.root.push(new ht("w:doNotBreakWrappedTables", t.doNotBreakWrappedTables)), t.doNotSnapToGridInCell && this.root.push(new ht("w:doNotSnapToGridInCell", t.doNotSnapToGridInCell)), t.selectFieldWithFirstOrLastCharacter && this.root.push(new ht("w:selectFldWithFirstOrLastChar", t.selectFieldWithFirstOrLastCharacter)), t.applyBreakingRules && this.root.push(new ht("w:applyBreakingRules", t.applyBreakingRules)), t.doNotWrapTextWithPunctuation && this.root.push(new ht("w:doNotWrapTextWithPunct", t.doNotWrapTextWithPunctuation)), t.doNotUseEastAsianBreakRules && this.root.push(new ht("w:doNotUseEastAsianBreakRules", t.doNotUseEastAsianBreakRules)), t.useWord2002TableStyleRules && this.root.push(new ht("w:useWord2002TableStyleRules", t.useWord2002TableStyleRules)), t.growAutofit && this.root.push(new ht("w:growAutofit", t.growAutofit)), t.useFELayout && this.root.push(new ht("w:useFELayout", t.useFELayout)), t.useNormalStyleForList && this.root.push(new ht("w:useNormalStyleForList", t.useNormalStyleForList)), t.doNotUseIndentAsNumberingTabStop && this.root.push(new ht("w:doNotUseIndentAsNumberingTabStop", t.doNotUseIndentAsNumberingTabStop)), t.useAlternateEastAsianLineBreakRules && this.root.push(new ht("w:useAltKinsokuLineBreakRules", t.useAlternateEastAsianLineBreakRules)), t.allowSpaceOfSameStyleInTable && this.root.push(new ht("w:allowSpaceOfSameStyleInTable", t.allowSpaceOfSameStyleInTable)), t.doNotSuppressIndentation && this.root.push(new ht("w:doNotSuppressIndentation", t.doNotSuppressIndentation)), t.doNotAutofitConstrainedTables && this.root.push(new ht("w:doNotAutofitConstrainedTables", t.doNotAutofitConstrainedTables)), t.autofitToFirstFixedWidthCell && this.root.push(new ht("w:autofitToFirstFixedWidthCell", t.autofitToFirstFixedWidthCell)), t.underlineTabInNumberingList && this.root.push(new ht("w:underlineTabInNumList", t.underlineTabInNumberingList)), t.displayHangulFixedWidth && this.root.push(new ht("w:displayHangulFixedWidth", t.displayHangulFixedWidth)), t.splitPgBreakAndParaMark && this.root.push(new ht("w:splitPgBreakAndParaMark", t.splitPgBreakAndParaMark)), t.doNotVerticallyAlignCellWithSp && this.root.push(new ht("w:doNotVertAlignCellWithSp", t.doNotVerticallyAlignCellWithSp)), t.doNotBreakConstrainedForcedTable && this.root.push(new ht("w:doNotBreakConstrainedForcedTable", t.doNotBreakConstrainedForcedTable)), t.ignoreVerticalAlignmentInTextboxes && this.root.push(new ht("w:doNotVertAlignInTxbx", t.ignoreVerticalAlignmentInTextboxes)), t.useAnsiKerningPairs && this.root.push(new ht("w:useAnsiKerningPairs", t.useAnsiKerningPairs)), t.cachedColumnBalance && this.root.push(new ht("w:cachedColBalance", t.cachedColumnBalance));
  }
}
class Od extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      wpc: "xmlns:wpc",
      mc: "xmlns:mc",
      o: "xmlns:o",
      r: "xmlns:r",
      m: "xmlns:m",
      v: "xmlns:v",
      wp14: "xmlns:wp14",
      wp: "xmlns:wp",
      w10: "xmlns:w10",
      w: "xmlns:w",
      w14: "xmlns:w14",
      w15: "xmlns:w15",
      wpg: "xmlns:wpg",
      wpi: "xmlns:wpi",
      wne: "xmlns:wne",
      wps: "xmlns:wps",
      Ignorable: "mc:Ignorable"
    });
  }
}
class Bd extends nt {
  constructor(t) {
    var r, i, a, o;
    super("w:settings"), this.root.push(
      new Od({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      })
    ), this.root.push(new ht("w:displayBackgroundShape", !0)), t.trackRevisions !== void 0 && this.root.push(new ht("w:trackRevisions", t.trackRevisions)), t.evenAndOddHeaders !== void 0 && this.root.push(new ht("w:evenAndOddHeaders", t.evenAndOddHeaders)), t.updateFields !== void 0 && this.root.push(new ht("w:updateFields", t.updateFields)), t.defaultTabStop !== void 0 && this.root.push(new Ni("w:defaultTabStop", t.defaultTabStop)), this.root.push(
      new Nd(be(_t({}, (r = t.compatibility) != null ? r : {}), {
        version: (o = (a = (i = t.compatibility) == null ? void 0 : i.version) != null ? a : t.compatibilityModeVersion) != null ? o : 15
      }))
    );
  }
}
class Ro extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", { val: "w:val" });
  }
}
class Dd extends nt {
  constructor(t) {
    super("w:name"), this.root.push(new Ro({ val: t }));
  }
}
class Fd extends nt {
  constructor(t) {
    super("w:uiPriority"), this.root.push(new Ro({ val: zt(t) }));
  }
}
class Ld extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      type: "w:type",
      styleId: "w:styleId",
      default: "w:default",
      customStyle: "w:customStyle"
    });
  }
}
class No extends nt {
  constructor(t, r) {
    super("w:style"), this.root.push(new Ld(t)), r.name && this.root.push(new Dd(r.name)), r.basedOn && this.root.push(new ve("w:basedOn", r.basedOn)), r.next && this.root.push(new ve("w:next", r.next)), r.link && this.root.push(new ve("w:link", r.link)), r.uiPriority !== void 0 && this.root.push(new Fd(r.uiPriority)), r.semiHidden !== void 0 && this.root.push(new ht("w:semiHidden", r.semiHidden)), r.unhideWhenUsed !== void 0 && this.root.push(new ht("w:unhideWhenUsed", r.unhideWhenUsed)), r.quickFormat !== void 0 && this.root.push(new ht("w:qFormat", r.quickFormat));
  }
}
class qr extends No {
  constructor(t) {
    super({ type: "paragraph", styleId: t.id }, t), it(this, "paragraphProperties"), it(this, "runProperties"), this.paragraphProperties = new $e(t.paragraph), this.runProperties = new Ne(t.run), this.root.push(this.paragraphProperties), this.root.push(this.runProperties);
  }
}
class Vr extends No {
  constructor(t) {
    super(
      { type: "character", styleId: t.id },
      _t({
        uiPriority: 99,
        unhideWhenUsed: !0
      }, t)
    ), it(this, "runProperties"), this.runProperties = new Ne(t.run), this.root.push(this.runProperties);
  }
}
class _e extends qr {
  constructor(t) {
    super(_t({
      basedOn: "Normal",
      next: "Normal",
      quickFormat: !0
    }, t));
  }
}
class Pd extends _e {
  constructor(t) {
    super(_t({
      id: "Title",
      name: "Title"
    }, t));
  }
}
class Md extends _e {
  constructor(t) {
    super(_t({
      id: "Heading1",
      name: "Heading 1"
    }, t));
  }
}
class Ud extends _e {
  constructor(t) {
    super(_t({
      id: "Heading2",
      name: "Heading 2"
    }, t));
  }
}
class zd extends _e {
  constructor(t) {
    super(_t({
      id: "Heading3",
      name: "Heading 3"
    }, t));
  }
}
class jd extends _e {
  constructor(t) {
    super(_t({
      id: "Heading4",
      name: "Heading 4"
    }, t));
  }
}
class Wd extends _e {
  constructor(t) {
    super(_t({
      id: "Heading5",
      name: "Heading 5"
    }, t));
  }
}
class Hd extends _e {
  constructor(t) {
    super(_t({
      id: "Heading6",
      name: "Heading 6"
    }, t));
  }
}
class Gd extends _e {
  constructor(t) {
    super(_t({
      id: "Strong",
      name: "Strong"
    }, t));
  }
}
class Kd extends qr {
  constructor(t) {
    super(_t({
      id: "ListParagraph",
      name: "List Paragraph",
      basedOn: "Normal",
      quickFormat: !0
    }, t));
  }
}
class qd extends qr {
  constructor(t) {
    super(_t({
      id: "FootnoteText",
      name: "footnote text",
      link: "FootnoteTextChar",
      basedOn: "Normal",
      uiPriority: 99,
      semiHidden: !0,
      unhideWhenUsed: !0,
      paragraph: {
        spacing: {
          after: 0,
          line: 240,
          lineRule: Fr.AUTO
        }
      },
      run: {
        size: 20
      }
    }, t));
  }
}
class Vd extends Vr {
  constructor(t) {
    super(_t({
      id: "FootnoteReference",
      name: "footnote reference",
      basedOn: "DefaultParagraphFont",
      semiHidden: !0,
      run: {
        superScript: !0
      }
    }, t));
  }
}
class $d extends Vr {
  constructor(t) {
    super(_t({
      id: "FootnoteTextChar",
      name: "Footnote Text Char",
      basedOn: "DefaultParagraphFont",
      link: "FootnoteText",
      semiHidden: !0,
      run: {
        size: 20
      }
    }, t));
  }
}
class Zd extends Vr {
  constructor(t) {
    super(_t({
      id: "Hyperlink",
      name: "Hyperlink",
      basedOn: "DefaultParagraphFont",
      run: {
        color: "0563C1",
        underline: {
          type: fo.SINGLE
        }
      }
    }, t));
  }
}
class fi extends nt {
  constructor(t) {
    if (super("w:styles"), t.initialStyles && this.root.push(t.initialStyles), t.importedStyles)
      for (const r of t.importedStyles)
        this.root.push(r);
    if (t.paragraphStyles)
      for (const r of t.paragraphStyles)
        this.root.push(new qr(r));
    if (t.characterStyles)
      for (const r of t.characterStyles)
        this.root.push(new Vr(r));
  }
}
class Xd extends nt {
  constructor(t) {
    super("w:pPrDefault"), this.root.push(new $e(t));
  }
}
class Yd extends nt {
  constructor(t) {
    super("w:rPrDefault"), this.root.push(new Ne(t));
  }
}
class Jd extends nt {
  constructor(t) {
    super("w:docDefaults"), it(this, "runPropertiesDefaults"), it(this, "paragraphPropertiesDefaults"), this.runPropertiesDefaults = new Yd(t.run), this.paragraphPropertiesDefaults = new Xd(t.paragraph), this.root.push(this.runPropertiesDefaults), this.root.push(this.paragraphPropertiesDefaults);
  }
}
class Qd {
  /**
   * Creates new Style based on the given styles.
   * Parses the styles and convert them to XmlComponent.
   * Example content from styles.xml:
   * <?xml version="1.0">
   * <w:styles xmlns:mc="some schema" ...>
   *
   *   <w:style w:type="paragraph" w:styleId="Heading1">
   *           <w:name w:val="heading 1"/>
   *           .....
   *   </w:style>
   *
   *   <w:style w:type="paragraph" w:styleId="Heading2">
   *           <w:name w:val="heading 2"/>
   *           .....
   *   </w:style>
   *
   *   <w:docDefaults>Or any other element will be parsed to</w:docDefaults>
   *
   * </w:styles>
   *
   * @param externalStyles context from styles.xml
   */
  newInstance(t) {
    const r = ao.xml2js(t, { compact: !1 });
    let i;
    for (const s of r.elements || [])
      s.name === "w:styles" && (i = s);
    if (i === void 0)
      throw new Error("can not find styles element");
    const a = i.elements || [];
    return new fi({
      initialStyles: new Su(i.attributes),
      importedStyles: a.map((s) => Ii(s))
    });
  }
}
class Xs {
  newInstance(t = {}) {
    var r;
    return {
      initialStyles: new pr({
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        Ignorable: "w14 w15"
      }),
      importedStyles: [
        new Jd((r = t.document) != null ? r : {}),
        new Pd(_t({
          run: {
            size: 56
          }
        }, t.title)),
        new Md(_t({
          run: {
            color: "2E74B5",
            size: 32
          }
        }, t.heading1)),
        new Ud(_t({
          run: {
            color: "2E74B5",
            size: 26
          }
        }, t.heading2)),
        new zd(_t({
          run: {
            color: "1F4D78",
            size: 24
          }
        }, t.heading3)),
        new jd(_t({
          run: {
            color: "2E74B5",
            italics: !0
          }
        }, t.heading4)),
        new Wd(_t({
          run: {
            color: "2E74B5"
          }
        }, t.heading5)),
        new Hd(_t({
          run: {
            color: "1F4D78"
          }
        }, t.heading6)),
        new Gd(_t({
          run: {
            bold: !0
          }
        }, t.strong)),
        new Kd(t.listParagraph || {}),
        new Zd(t.hyperlink || {}),
        new Vd(t.footnoteReference || {}),
        new qd(t.footnoteText || {}),
        new $d(t.footnoteTextChar || {})
      ]
    };
  }
}
const Er = ({ id: e, fontKey: t, subsetted: r }, i) => new Ot({
  name: i,
  attributes: _t({
    id: { key: "r:id", value: e }
  }, t ? { fontKey: { key: "w:fontKey", value: `{${t}}` } } : {}),
  children: [...r ? [new ht("w:subsetted", r)] : []]
}), tp = ({
  name: e,
  altName: t,
  panose1: r,
  charset: i,
  family: a,
  notTrueType: o,
  pitch: s,
  sig: n,
  embedRegular: c,
  embedBold: w,
  embedItalic: b,
  embedBoldItalic: g
}) => (
  // http://www.datypic.com/sc/ooxml/e-w_font-1.html
  new Ot({
    name: "w:font",
    attributes: {
      name: { key: "w:name", value: e }
    },
    children: [
      // http://www.datypic.com/sc/ooxml/e-w_altName-1.html
      ...t ? [rr("w:altName", t)] : [],
      // http://www.datypic.com/sc/ooxml/e-w_panose1-1.html
      ...r ? [rr("w:panose1", r)] : [],
      // http://www.datypic.com/sc/ooxml/e-w_charset-1.html
      ...i ? [rr("w:charset", i)] : [],
      // http://www.datypic.com/sc/ooxml/e-w_family-1.html
      ...a ? [rr("w:family", a)] : [],
      // http://www.datypic.com/sc/ooxml/e-w_notTrueType-1.html
      ...o ? [new ht("w:notTrueType", o)] : [],
      ...s ? [rr("w:pitch", s)] : [],
      // http://www.datypic.com/sc/ooxml/e-w_sig-1.html
      ...n ? [
        new Ot({
          name: "w:sig",
          attributes: {
            usb0: { key: "w:usb0", value: n.usb0 },
            usb1: { key: "w:usb1", value: n.usb1 },
            usb2: { key: "w:usb2", value: n.usb2 },
            usb3: { key: "w:usb3", value: n.usb3 },
            csb0: { key: "w:csb0", value: n.csb0 },
            csb1: { key: "w:csb1", value: n.csb1 }
          }
        })
      ] : [],
      // http://www.datypic.com/sc/ooxml/e-w_embedRegular-1.html
      ...c ? [Er(c, "w:embedRegular")] : [],
      // http://www.datypic.com/sc/ooxml/e-w_embedBold-1.html
      ...w ? [Er(w, "w:embedBold")] : [],
      // http://www.datypic.com/sc/ooxml/e-w_embedItalic-1.html
      ...b ? [Er(b, "w:embedItalic")] : [],
      // http://www.datypic.com/sc/ooxml/e-w_embedBoldItalic-1.html
      ...g ? [Er(g, "w:embedBoldItalic")] : []
    ]
  })
), ep = ({
  name: e,
  index: t,
  fontKey: r,
  characterSet: i
}) => tp({
  name: e,
  sig: {
    usb0: "E0002AFF",
    usb1: "C000247B",
    usb2: "00000009",
    usb3: "00000000",
    csb0: "000001FF",
    csb1: "00000000"
  },
  charset: i,
  family: "auto",
  pitch: "variable",
  embedRegular: {
    fontKey: r,
    id: `rId${t}`
  }
}), rp = (e) => (
  // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_Font_topic_ID0ERNCU.html
  // http://www.datypic.com/sc/ooxml/e-w_fonts.html
  new Ot({
    name: "w:fonts",
    attributes: {
      mc: { key: "xmlns:mc", value: "http://schemas.openxmlformats.org/markup-compatibility/2006" },
      r: { key: "xmlns:r", value: "http://schemas.openxmlformats.org/officeDocument/2006/relationships" },
      w: { key: "xmlns:w", value: "http://schemas.openxmlformats.org/wordprocessingml/2006/main" },
      w14: { key: "xmlns:w14", value: "http://schemas.microsoft.com/office/word/2010/wordml" },
      w15: { key: "xmlns:w15", value: "http://schemas.microsoft.com/office/word/2012/wordml" },
      w16cex: { key: "xmlns:w16cex", value: "http://schemas.microsoft.com/office/word/2018/wordml/cex" },
      w16cid: { key: "xmlns:w16cid", value: "http://schemas.microsoft.com/office/word/2016/wordml/cid" },
      w16: { key: "xmlns:w16", value: "http://schemas.microsoft.com/office/word/2018/wordml" },
      w16sdtdh: { key: "xmlns:w16sdtdh", value: "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash" },
      w16se: { key: "xmlns:w16se", value: "http://schemas.microsoft.com/office/word/2015/wordml/symex" },
      Ignorable: { key: "mc:Ignorable", value: "w14 w15 w16se w16cid w16 w16cex w16sdtdh" }
    },
    children: e.map(
      (t, r) => ep({
        name: t.name,
        index: r + 1,
        fontKey: t.fontKey
      })
    )
  })
);
class np {
  constructor(t) {
    it(this, "fontTable"), it(this, "relationships"), it(this, "fontOptionsWithKey", []), this.options = t, this.fontOptionsWithKey = t.map((r) => be(_t({}, r), { fontKey: gc() })), this.fontTable = rp(this.fontOptionsWithKey), this.relationships = new Ye();
    for (let r = 0; r < t.length; r++)
      this.relationships.createRelationship(
        r + 1,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font",
        `fonts/${t[r].name}.odttf`
      );
  }
  get View() {
    return this.fontTable;
  }
  get Relationships() {
    return this.relationships;
  }
}
class ip {
  constructor(t) {
    it(this, "currentRelationshipId", 1), it(this, "documentWrapper"), it(this, "headers", []), it(this, "footers", []), it(this, "coreProperties"), it(this, "numbering"), it(this, "media"), it(this, "fileRelationships"), it(this, "footnotesWrapper"), it(this, "settings"), it(this, "contentTypes"), it(this, "customProperties"), it(this, "appProperties"), it(this, "styles"), it(this, "comments"), it(this, "fontWrapper");
    var r, i, a, o, s, n, c, w;
    if (this.coreProperties = new Hf(be(_t({}, t), {
      creator: (r = t.creator) != null ? r : "Un-named",
      revision: (i = t.revision) != null ? i : 1,
      lastModifiedBy: (a = t.lastModifiedBy) != null ? a : "Un-named"
    })), this.numbering = new Id(t.numbering ? t.numbering : { config: [] }), this.comments = new _h((o = t.comments) != null ? o : { children: [] }), this.fileRelationships = new Ye(), this.customProperties = new $f((s = t.customProperties) != null ? s : []), this.appProperties = new Mf(), this.footnotesWrapper = new od(), this.contentTypes = new Wf(), this.documentWrapper = new Ao({ background: t.background }), this.settings = new Bd({
      compatibilityModeVersion: t.compatabilityModeVersion,
      compatibility: t.compatibility,
      evenAndOddHeaders: !!t.evenAndOddHeaderAndFooters,
      trackRevisions: (n = t.features) == null ? void 0 : n.trackRevisions,
      updateFields: (c = t.features) == null ? void 0 : c.updateFields,
      defaultTabStop: t.defaultTabStop
    }), this.media = new hd(), t.externalStyles !== void 0) {
      const b = new Qd();
      this.styles = b.newInstance(t.externalStyles);
    } else if (t.styles) {
      const g = new Xs().newInstance(t.styles.default);
      this.styles = new fi(_t(_t({}, g), t.styles));
    } else {
      const b = new Xs();
      this.styles = new fi(b.newInstance());
    }
    this.addDefaultRelationships();
    for (const b of t.sections)
      this.addSection(b);
    if (t.footnotes)
      for (const b in t.footnotes)
        this.footnotesWrapper.View.createFootNote(parseFloat(b), t.footnotes[b].children);
    this.fontWrapper = new np((w = t.fonts) != null ? w : []);
  }
  addSection({ headers: t = {}, footers: r = {}, children: i, properties: a }) {
    this.documentWrapper.View.Body.addSection(be(_t({}, a), {
      headerWrapperGroup: {
        default: t.default ? this.createHeader(t.default) : void 0,
        first: t.first ? this.createHeader(t.first) : void 0,
        even: t.even ? this.createHeader(t.even) : void 0
      },
      footerWrapperGroup: {
        default: r.default ? this.createFooter(r.default) : void 0,
        first: r.first ? this.createFooter(r.first) : void 0,
        even: r.even ? this.createFooter(r.even) : void 0
      }
    }));
    for (const o of i)
      this.documentWrapper.View.add(o);
  }
  createHeader(t) {
    const r = new cd(this.media, this.currentRelationshipId++);
    for (const i of t.options.children)
      r.add(i);
    return this.addHeaderToDocument(r), r;
  }
  createFooter(t) {
    const r = new Yf(this.media, this.currentRelationshipId++);
    for (const i of t.options.children)
      r.add(i);
    return this.addFooterToDocument(r), r;
  }
  addHeaderToDocument(t, r = Ke.DEFAULT) {
    this.headers.push({ header: t, type: r }), this.documentWrapper.Relationships.createRelationship(
      t.View.ReferenceId,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",
      `header${this.headers.length}.xml`
    ), this.contentTypes.addHeader(this.headers.length);
  }
  addFooterToDocument(t, r = Ke.DEFAULT) {
    this.footers.push({ footer: t, type: r }), this.documentWrapper.Relationships.createRelationship(
      t.View.ReferenceId,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer",
      `footer${this.footers.length}.xml`
    ), this.contentTypes.addFooter(this.footers.length);
  }
  addDefaultRelationships() {
    this.fileRelationships.createRelationship(
      1,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      "word/document.xml"
    ), this.fileRelationships.createRelationship(
      2,
      "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
      "docProps/core.xml"
    ), this.fileRelationships.createRelationship(
      3,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
      "docProps/app.xml"
    ), this.fileRelationships.createRelationship(
      4,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
      "docProps/custom.xml"
    ), this.documentWrapper.Relationships.createRelationship(
      // eslint-disable-next-line functional/immutable-data
      this.currentRelationshipId++,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
      "styles.xml"
    ), this.documentWrapper.Relationships.createRelationship(
      // eslint-disable-next-line functional/immutable-data
      this.currentRelationshipId++,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
      "numbering.xml"
    ), this.documentWrapper.Relationships.createRelationship(
      // eslint-disable-next-line functional/immutable-data
      this.currentRelationshipId++,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes",
      "footnotes.xml"
    ), this.documentWrapper.Relationships.createRelationship(
      // eslint-disable-next-line functional/immutable-data
      this.currentRelationshipId++,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
      "settings.xml"
    ), this.documentWrapper.Relationships.createRelationship(
      // eslint-disable-next-line functional/immutable-data
      this.currentRelationshipId++,
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
      "comments.xml"
    );
  }
  get Document() {
    return this.documentWrapper;
  }
  get Styles() {
    return this.styles;
  }
  get CoreProperties() {
    return this.coreProperties;
  }
  get Numbering() {
    return this.numbering;
  }
  get Media() {
    return this.media;
  }
  get FileRelationships() {
    return this.fileRelationships;
  }
  get Headers() {
    return this.headers.map((t) => t.header);
  }
  get Footers() {
    return this.footers.map((t) => t.footer);
  }
  get ContentTypes() {
    return this.contentTypes;
  }
  get CustomProperties() {
    return this.customProperties;
  }
  get AppProperties() {
    return this.appProperties;
  }
  get FootNotes() {
    return this.footnotesWrapper;
  }
  get Settings() {
    return this.settings;
  }
  get Comments() {
    return this.comments;
  }
  get FontTable() {
    return this.fontWrapper;
  }
}
class sp extends nt {
  constructor(t = {}) {
    super("w:instrText"), it(this, "properties"), this.properties = t, this.root.push(new Ce({ space: Ie.PRESERVE }));
    let r = "TOC";
    if (this.properties.captionLabel && (r = `${r} \\a "${this.properties.captionLabel}"`), this.properties.entriesFromBookmark && (r = `${r} \\b "${this.properties.entriesFromBookmark}"`), this.properties.captionLabelIncludingNumbers && (r = `${r} \\c "${this.properties.captionLabelIncludingNumbers}"`), this.properties.sequenceAndPageNumbersSeparator && (r = `${r} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`), this.properties.tcFieldIdentifier && (r = `${r} \\f "${this.properties.tcFieldIdentifier}"`), this.properties.hyperlink && (r = `${r} \\h`), this.properties.tcFieldLevelRange && (r = `${r} \\l "${this.properties.tcFieldLevelRange}"`), this.properties.pageNumbersEntryLevelsRange && (r = `${r} \\n "${this.properties.pageNumbersEntryLevelsRange}"`), this.properties.headingStyleRange && (r = `${r} \\o "${this.properties.headingStyleRange}"`), this.properties.entryAndPageNumberSeparator && (r = `${r} \\p "${this.properties.entryAndPageNumberSeparator}"`), this.properties.seqFieldIdentifierForPrefix && (r = `${r} \\s "${this.properties.seqFieldIdentifierForPrefix}"`), this.properties.stylesWithLevels && this.properties.stylesWithLevels.length) {
      const i = this.properties.stylesWithLevels.map((a) => `${a.styleName},${a.level}`).join(",");
      r = `${r} \\t "${i}"`;
    }
    this.properties.useAppliedParagraphOutlineLevel && (r = `${r} \\u`), this.properties.preserveTabInEntries && (r = `${r} \\w`), this.properties.preserveNewLineInEntries && (r = `${r} \\x`), this.properties.hideTabAndPageNumbersInWebView && (r = `${r} \\z`), this.root.push(r);
  }
}
class Oo extends nt {
  constructor() {
    super("w:sdtContent");
  }
}
class Bo extends nt {
  constructor(t) {
    super("w:sdtPr"), t && this.root.push(new ve("w:alias", t));
  }
}
class ap extends Li {
  constructor(t = "Table of Contents", r) {
    super("w:sdt"), this.root.push(new Bo(t));
    const i = new Oo(), a = new Wt({
      children: [
        new pe({
          children: [new sr(!0), new sp(r), new ar()]
        })
      ]
    });
    i.addChildElement(a);
    const o = new Wt({
      children: [
        new pe({
          children: [new or()]
        })
      ]
    });
    i.addChildElement(o), this.root.push(i);
  }
}
class op {
  constructor(t = { children: [] }) {
    it(this, "options"), this.options = t;
  }
}
class lp {
  constructor(t = { children: [] }) {
    it(this, "options"), this.options = t;
  }
}
class Ys extends mt {
  constructor() {
    super(...arguments), it(this, "xmlKeys", {
      val: "w14:val",
      symbolfont: "w14:font"
    });
  }
}
class Xn extends nt {
  constructor(t, r, i) {
    super(t), i ? this.root.push(new Ys({ val: ku(r), symbolfont: i })) : this.root.push(new Ys({ val: r }));
  }
}
class up extends nt {
  constructor(t) {
    var r, i, a, o, s, n, c, w;
    super("w14:checkbox"), it(this, "DEFAULT_UNCHECKED_SYMBOL", "2610"), it(this, "DEFAULT_CHECKED_SYMBOL", "2612"), it(this, "DEFAULT_FONT", "MS Gothic");
    const b = t != null && t.checked ? "1" : "0";
    let g, _;
    this.root.push(new Xn("w14:checked", b)), g = (r = t == null ? void 0 : t.checkedState) != null && r.value ? (i = t == null ? void 0 : t.checkedState) == null ? void 0 : i.value : this.DEFAULT_CHECKED_SYMBOL, _ = (a = t == null ? void 0 : t.checkedState) != null && a.font ? (o = t == null ? void 0 : t.checkedState) == null ? void 0 : o.font : this.DEFAULT_FONT, this.root.push(new Xn("w14:checkedState", g, _)), g = (s = t == null ? void 0 : t.uncheckedState) != null && s.value ? (n = t == null ? void 0 : t.uncheckedState) == null ? void 0 : n.value : this.DEFAULT_UNCHECKED_SYMBOL, _ = (c = t == null ? void 0 : t.uncheckedState) != null && c.font ? (w = t == null ? void 0 : t.uncheckedState) == null ? void 0 : w.font : this.DEFAULT_FONT, this.root.push(new Xn("w14:uncheckedState", g, _));
  }
}
class di extends nt {
  constructor(t) {
    var r, i, a, o;
    super("w:sdt"), it(this, "DEFAULT_UNCHECKED_SYMBOL", "2610"), it(this, "DEFAULT_CHECKED_SYMBOL", "2612"), it(this, "DEFAULT_FONT", "MS Gothic");
    const s = new Bo(t == null ? void 0 : t.alias);
    s.addChildElement(new up(t)), this.root.push(s);
    const n = new Oo(), c = (r = t == null ? void 0 : t.checkedState) == null ? void 0 : r.font, w = (i = t == null ? void 0 : t.checkedState) == null ? void 0 : i.value, b = (a = t == null ? void 0 : t.uncheckedState) == null ? void 0 : a.font, g = (o = t == null ? void 0 : t.uncheckedState) == null ? void 0 : o.value;
    let _, f;
    t != null && t.checked ? (_ = c || this.DEFAULT_FONT, f = w || this.DEFAULT_CHECKED_SYMBOL) : (_ = b || this.DEFAULT_FONT, f = g || this.DEFAULT_UNCHECKED_SYMBOL);
    const y = new lc({
      char: f,
      symbolfont: _
    });
    n.addChildElement(y), this.root.push(n);
  }
}
function xr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Do = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(i, a, o) {
      function s(w, b) {
        if (!a[w]) {
          if (!i[w]) {
            var g = typeof xr == "function" && xr;
            if (!b && g)
              return g(w, !0);
            if (n)
              return n(w, !0);
            var _ = new Error("Cannot find module '" + w + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var f = a[w] = { exports: {} };
          i[w][0].call(f.exports, function(y) {
            var d = i[w][1][y];
            return s(d || y);
          }, f, f.exports, r, i, a, o);
        }
        return a[w].exports;
      }
      for (var n = typeof xr == "function" && xr, c = 0; c < o.length; c++)
        s(o[c]);
      return s;
    }({ 1: [function(r, i, a) {
      var o = r("./utils"), s = r("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.encode = function(c) {
        for (var w, b, g, _, f, y, d, x = [], p = 0, E = c.length, A = E, N = o.getTypeOf(c) !== "string"; p < c.length; )
          A = E - p, g = N ? (w = c[p++], b = p < E ? c[p++] : 0, p < E ? c[p++] : 0) : (w = c.charCodeAt(p++), b = p < E ? c.charCodeAt(p++) : 0, p < E ? c.charCodeAt(p++) : 0), _ = w >> 2, f = (3 & w) << 4 | b >> 4, y = 1 < A ? (15 & b) << 2 | g >> 6 : 64, d = 2 < A ? 63 & g : 64, x.push(n.charAt(_) + n.charAt(f) + n.charAt(y) + n.charAt(d));
        return x.join("");
      }, a.decode = function(c) {
        var w, b, g, _, f, y, d = 0, x = 0, p = "data:";
        if (c.substr(0, p.length) === p)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var E, A = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (c.charAt(c.length - 1) === n.charAt(64) && A--, c.charAt(c.length - 2) === n.charAt(64) && A--, A % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (E = s.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); d < c.length; )
          w = n.indexOf(c.charAt(d++)) << 2 | (_ = n.indexOf(c.charAt(d++))) >> 4, b = (15 & _) << 4 | (f = n.indexOf(c.charAt(d++))) >> 2, g = (3 & f) << 6 | (y = n.indexOf(c.charAt(d++))), E[x++] = w, f !== 64 && (E[x++] = b), y !== 64 && (E[x++] = g);
        return E;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, i, a) {
      var o = r("./external"), s = r("./stream/DataWorker"), n = r("./stream/Crc32Probe"), c = r("./stream/DataLengthProbe");
      function w(b, g, _, f, y) {
        this.compressedSize = b, this.uncompressedSize = g, this.crc32 = _, this.compression = f, this.compressedContent = y;
      }
      w.prototype = { getContentWorker: function() {
        var b = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), g = this;
        return b.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), b;
      }, getCompressedWorker: function() {
        return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, w.createWorkerFrom = function(b, g, _) {
        return b.pipe(new n()).pipe(new c("uncompressedSize")).pipe(g.compressWorker(_)).pipe(new c("compressedSize")).withStreamInfo("compression", g);
      }, i.exports = w;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, i, a) {
      var o = r("./stream/GenericWorker");
      a.STORE = { magic: "\0\0", compressWorker: function() {
        return new o("STORE compression");
      }, uncompressWorker: function() {
        return new o("STORE decompression");
      } }, a.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, i, a) {
      var o = r("./utils"), s = function() {
        for (var n, c = [], w = 0; w < 256; w++) {
          n = w;
          for (var b = 0; b < 8; b++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          c[w] = n;
        }
        return c;
      }();
      i.exports = function(n, c) {
        return n !== void 0 && n.length ? o.getTypeOf(n) !== "string" ? function(w, b, g, _) {
          var f = s, y = _ + g;
          w ^= -1;
          for (var d = _; d < y; d++)
            w = w >>> 8 ^ f[255 & (w ^ b[d])];
          return -1 ^ w;
        }(0 | c, n, n.length, 0) : function(w, b, g, _) {
          var f = s, y = _ + g;
          w ^= -1;
          for (var d = _; d < y; d++)
            w = w >>> 8 ^ f[255 & (w ^ b.charCodeAt(d))];
          return -1 ^ w;
        }(0 | c, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, i, a) {
      a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
    }, {}], 6: [function(r, i, a) {
      var o = null;
      o = typeof Promise < "u" ? Promise : r("lie"), i.exports = { Promise: o };
    }, { lie: 37 }], 7: [function(r, i, a) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), n = r("./utils"), c = r("./stream/GenericWorker"), w = o ? "uint8array" : "array";
      function b(g, _) {
        c.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = _, this.meta = {};
      }
      a.magic = "\b\0", n.inherits(b, c), b.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(w, g.data), !1);
      }, b.prototype.flush = function() {
        c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, b.prototype.cleanUp = function() {
        c.prototype.cleanUp.call(this), this._pako = null;
      }, b.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(_) {
          g.push({ data: _, meta: g.meta });
        };
      }, a.compressWorker = function(g) {
        return new b("Deflate", g);
      }, a.uncompressWorker = function() {
        return new b("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, i, a) {
      function o(f, y) {
        var d, x = "";
        for (d = 0; d < y; d++)
          x += String.fromCharCode(255 & f), f >>>= 8;
        return x;
      }
      function s(f, y, d, x, p, E) {
        var A, N, O = f.file, z = f.compression, P = E !== w.utf8encode, K = n.transformTo("string", E(O.name)), C = n.transformTo("string", w.utf8encode(O.name)), tt = O.comment, at = n.transformTo("string", E(tt)), I = n.transformTo("string", w.utf8encode(tt)), j = C.length !== O.name.length, m = I.length !== tt.length, G = "", ut = "", V = "", ft = O.dir, Y = O.date, ct = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !d || (ct.crc32 = f.crc32, ct.compressedSize = f.compressedSize, ct.uncompressedSize = f.uncompressedSize);
        var L = 0;
        y && (L |= 8), P || !j && !m || (L |= 2048);
        var R = 0, Z = 0;
        ft && (R |= 16), p === "UNIX" ? (Z = 798, R |= function(J, X) {
          var k = J;
          return J || (k = X ? 16893 : 33204), (65535 & k) << 16;
        }(O.unixPermissions, ft)) : (Z = 20, R |= function(J) {
          return 63 & (J || 0);
        }(O.dosPermissions)), A = Y.getUTCHours(), A <<= 6, A |= Y.getUTCMinutes(), A <<= 5, A |= Y.getUTCSeconds() / 2, N = Y.getUTCFullYear() - 1980, N <<= 4, N |= Y.getUTCMonth() + 1, N <<= 5, N |= Y.getUTCDate(), j && (ut = o(1, 1) + o(b(K), 4) + C, G += "up" + o(ut.length, 2) + ut), m && (V = o(1, 1) + o(b(at), 4) + I, G += "uc" + o(V.length, 2) + V);
        var $ = "";
        return $ += `
\0`, $ += o(L, 2), $ += z.magic, $ += o(A, 2), $ += o(N, 2), $ += o(ct.crc32, 4), $ += o(ct.compressedSize, 4), $ += o(ct.uncompressedSize, 4), $ += o(K.length, 2), $ += o(G.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + $ + K + G, dirRecord: g.CENTRAL_FILE_HEADER + o(Z, 2) + $ + o(at.length, 2) + "\0\0\0\0" + o(R, 4) + o(x, 4) + K + G + at };
      }
      var n = r("../utils"), c = r("../stream/GenericWorker"), w = r("../utf8"), b = r("../crc32"), g = r("../signature");
      function _(f, y, d, x) {
        c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = d, this.encodeFileName = x, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(_, c), _.prototype.push = function(f) {
        var y = f.meta.percent || 0, d = this.entriesCount, x = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, c.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: d ? (y + 100 * (d - x - 1)) / d : 100 } }));
      }, _.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var y = this.streamFiles && !f.file.dir;
        if (y) {
          var d = s(f, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: d.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, _.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var y = this.streamFiles && !f.file.dir, d = s(f, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(d.dirRecord), y)
          this.push({ data: function(x) {
            return g.DATA_DESCRIPTOR + o(x.crc32, 4) + o(x.compressedSize, 4) + o(x.uncompressedSize, 4);
          }(f), meta: { percent: 100 } });
        else
          for (this.push({ data: d.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, _.prototype.flush = function() {
        for (var f = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
          this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var d = this.bytesWritten - f, x = function(p, E, A, N, O) {
          var z = n.transformTo("string", O(N));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(p, 2) + o(p, 2) + o(E, 4) + o(A, 4) + o(z.length, 2) + z;
        }(this.dirRecords.length, d, f, this.zipComment, this.encodeFileName);
        this.push({ data: x, meta: { percent: 100 } });
      }, _.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, _.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var y = this;
        return f.on("data", function(d) {
          y.processChunk(d);
        }), f.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), f.on("error", function(d) {
          y.error(d);
        }), this;
      }, _.prototype.resume = function() {
        return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, _.prototype.error = function(f) {
        var y = this._sources;
        if (!c.prototype.error.call(this, f))
          return !1;
        for (var d = 0; d < y.length; d++)
          try {
            y[d].error(f);
          } catch {
          }
        return !0;
      }, _.prototype.lock = function() {
        c.prototype.lock.call(this);
        for (var f = this._sources, y = 0; y < f.length; y++)
          f[y].lock();
      }, i.exports = _;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, i, a) {
      var o = r("../compressions"), s = r("./ZipFileWorker");
      a.generateWorker = function(n, c, w) {
        var b = new s(c.streamFiles, w, c.platform, c.encodeFileName), g = 0;
        try {
          n.forEach(function(_, f) {
            g++;
            var y = function(E, A) {
              var N = E || A, O = o[N];
              if (!O)
                throw new Error(N + " is not a valid compression method !");
              return O;
            }(f.options.compression, c.compression), d = f.options.compressionOptions || c.compressionOptions || {}, x = f.dir, p = f.date;
            f._compressWorker(y, d).withStreamInfo("file", { name: _, dir: x, date: p, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(b);
          }), b.entriesCount = g;
        } catch (_) {
          b.error(_);
        }
        return b;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, i, a) {
      function o() {
        if (!(this instanceof o))
          return new o();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new o();
          for (var n in this)
            typeof this[n] != "function" && (s[n] = this[n]);
          return s;
        };
      }
      (o.prototype = r("./object")).loadAsync = r("./load"), o.support = r("./support"), o.defaults = r("./defaults"), o.version = "3.10.1", o.loadAsync = function(s, n) {
        return new o().loadAsync(s, n);
      }, o.external = r("./external"), i.exports = o;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, i, a) {
      var o = r("./utils"), s = r("./external"), n = r("./utf8"), c = r("./zipEntries"), w = r("./stream/Crc32Probe"), b = r("./nodejsUtils");
      function g(_) {
        return new s.Promise(function(f, y) {
          var d = _.decompressed.getContentWorker().pipe(new w());
          d.on("error", function(x) {
            y(x);
          }).on("end", function() {
            d.streamInfo.crc32 !== _.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      i.exports = function(_, f) {
        var y = this;
        return f = o.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), b.isNode && b.isStream(_) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(d) {
          var x = new c(f);
          return x.load(d), x;
        }).then(function(d) {
          var x = [s.Promise.resolve(d)], p = d.files;
          if (f.checkCRC32)
            for (var E = 0; E < p.length; E++)
              x.push(g(p[E]));
          return s.Promise.all(x);
        }).then(function(d) {
          for (var x = d.shift(), p = x.files, E = 0; E < p.length; E++) {
            var A = p[E], N = A.fileNameStr, O = o.resolve(A.fileNameStr);
            y.file(O, A.decompressed, { binary: !0, optimizedBinaryString: !0, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: f.createFolders }), A.dir || (y.file(O).unsafeOriginalName = N);
          }
          return x.zipComment.length && (y.comment = x.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, i, a) {
      var o = r("../utils"), s = r("../stream/GenericWorker");
      function n(c, w) {
        s.call(this, "Nodejs stream input adapter for " + c), this._upstreamEnded = !1, this._bindStream(w);
      }
      o.inherits(n, s), n.prototype._bindStream = function(c) {
        var w = this;
        (this._stream = c).pause(), c.on("data", function(b) {
          w.push({ data: b, meta: { percent: 0 } });
        }).on("error", function(b) {
          w.isPaused ? this.generatedError = b : w.error(b);
        }).on("end", function() {
          w.isPaused ? w._upstreamEnded = !0 : w.end();
        });
      }, n.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, i.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, i, a) {
      var o = r("readable-stream").Readable;
      function s(n, c, w) {
        o.call(this, c), this._helper = n;
        var b = this;
        n.on("data", function(g, _) {
          b.push(g) || b._helper.pause(), w && w(_);
        }).on("error", function(g) {
          b.emit("error", g);
        }).on("end", function() {
          b.push(null);
        });
      }
      r("../utils").inherits(s, o), s.prototype._read = function() {
        this._helper.resume();
      }, i.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, i, a) {
      i.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(o, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(o, s);
        if (typeof o == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(o, s);
      }, allocBuffer: function(o) {
        if (Buffer.alloc)
          return Buffer.alloc(o);
        var s = new Buffer(o);
        return s.fill(0), s;
      }, isBuffer: function(o) {
        return Buffer.isBuffer(o);
      }, isStream: function(o) {
        return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function";
      } };
    }, {}], 15: [function(r, i, a) {
      function o(O, z, P) {
        var K, C = n.getTypeOf(z), tt = n.extend(P || {}, b);
        tt.date = tt.date || /* @__PURE__ */ new Date(), tt.compression !== null && (tt.compression = tt.compression.toUpperCase()), typeof tt.unixPermissions == "string" && (tt.unixPermissions = parseInt(tt.unixPermissions, 8)), tt.unixPermissions && 16384 & tt.unixPermissions && (tt.dir = !0), tt.dosPermissions && 16 & tt.dosPermissions && (tt.dir = !0), tt.dir && (O = p(O)), tt.createFolders && (K = x(O)) && E.call(this, K, !0);
        var at = C === "string" && tt.binary === !1 && tt.base64 === !1;
        P && P.binary !== void 0 || (tt.binary = !at), (z instanceof g && z.uncompressedSize === 0 || tt.dir || !z || z.length === 0) && (tt.base64 = !1, tt.binary = !0, z = "", tt.compression = "STORE", C = "string");
        var I = null;
        I = z instanceof g || z instanceof c ? z : y.isNode && y.isStream(z) ? new d(O, z) : n.prepareContent(O, z, tt.binary, tt.optimizedBinaryString, tt.base64);
        var j = new _(O, I, tt);
        this.files[O] = j;
      }
      var s = r("./utf8"), n = r("./utils"), c = r("./stream/GenericWorker"), w = r("./stream/StreamHelper"), b = r("./defaults"), g = r("./compressedObject"), _ = r("./zipObject"), f = r("./generate"), y = r("./nodejsUtils"), d = r("./nodejs/NodejsStreamInputAdapter"), x = function(O) {
        O.slice(-1) === "/" && (O = O.substring(0, O.length - 1));
        var z = O.lastIndexOf("/");
        return 0 < z ? O.substring(0, z) : "";
      }, p = function(O) {
        return O.slice(-1) !== "/" && (O += "/"), O;
      }, E = function(O, z) {
        return z = z !== void 0 ? z : b.createFolders, O = p(O), this.files[O] || o.call(this, O, null, { dir: !0, createFolders: z }), this.files[O];
      };
      function A(O) {
        return Object.prototype.toString.call(O) === "[object RegExp]";
      }
      var N = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(O) {
        var z, P, K;
        for (z in this.files)
          K = this.files[z], (P = z.slice(this.root.length, z.length)) && z.slice(0, this.root.length) === this.root && O(P, K);
      }, filter: function(O) {
        var z = [];
        return this.forEach(function(P, K) {
          O(P, K) && z.push(K);
        }), z;
      }, file: function(O, z, P) {
        if (arguments.length !== 1)
          return O = this.root + O, o.call(this, O, z, P), this;
        if (A(O)) {
          var K = O;
          return this.filter(function(tt, at) {
            return !at.dir && K.test(tt);
          });
        }
        var C = this.files[this.root + O];
        return C && !C.dir ? C : null;
      }, folder: function(O) {
        if (!O)
          return this;
        if (A(O))
          return this.filter(function(C, tt) {
            return tt.dir && O.test(C);
          });
        var z = this.root + O, P = E.call(this, z), K = this.clone();
        return K.root = P.name, K;
      }, remove: function(O) {
        O = this.root + O;
        var z = this.files[O];
        if (z || (O.slice(-1) !== "/" && (O += "/"), z = this.files[O]), z && !z.dir)
          delete this.files[O];
        else
          for (var P = this.filter(function(C, tt) {
            return tt.name.slice(0, O.length) === O;
          }), K = 0; K < P.length; K++)
            delete this.files[P[K].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(O) {
        var z, P = {};
        try {
          if ((P = n.extend(O || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type)
            throw new Error("No output type specified.");
          n.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
          var K = P.comment || this.comment || "";
          z = f.generateWorker(this, P, K);
        } catch (C) {
          (z = new c("error")).error(C);
        }
        return new w(z, P.type || "string", P.mimeType);
      }, generateAsync: function(O, z) {
        return this.generateInternalStream(O).accumulate(z);
      }, generateNodeStream: function(O, z) {
        return (O = O || {}).type || (O.type = "nodebuffer"), this.generateInternalStream(O).toNodejsStream(z);
      } };
      i.exports = N;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, i, a) {
      i.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, i, a) {
      var o = r("./DataReader");
      function s(n) {
        o.call(this, n);
        for (var c = 0; c < this.data.length; c++)
          n[c] = 255 & n[c];
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, s.prototype.lastIndexOfSignature = function(n) {
        for (var c = n.charCodeAt(0), w = n.charCodeAt(1), b = n.charCodeAt(2), g = n.charCodeAt(3), _ = this.length - 4; 0 <= _; --_)
          if (this.data[_] === c && this.data[_ + 1] === w && this.data[_ + 2] === b && this.data[_ + 3] === g)
            return _ - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(n) {
        var c = n.charCodeAt(0), w = n.charCodeAt(1), b = n.charCodeAt(2), g = n.charCodeAt(3), _ = this.readData(4);
        return c === _[0] && w === _[1] && b === _[2] && g === _[3];
      }, s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, i, a) {
      var o = r("../utils");
      function s(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(n) {
        this.checkIndex(this.index + n);
      }, checkIndex: function(n) {
        if (this.length < this.zero + n || n < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
      }, setIndex: function(n) {
        this.checkIndex(n), this.index = n;
      }, skip: function(n) {
        this.setIndex(this.index + n);
      }, byteAt: function() {
      }, readInt: function(n) {
        var c, w = 0;
        for (this.checkOffset(n), c = this.index + n - 1; c >= this.index; c--)
          w = (w << 8) + this.byteAt(c);
        return this.index += n, w;
      }, readString: function(n) {
        return o.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, i.exports = s;
    }, { "../utils": 32 }], 19: [function(r, i, a) {
      var o = r("./Uint8ArrayReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(n) {
        this.checkOffset(n);
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, i, a) {
      var o = r("./DataReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, s.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, s.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, s.prototype.readData = function(n) {
        this.checkOffset(n);
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, i, a) {
      var o = r("./ArrayReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var c = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, i, a) {
      var o = r("../utils"), s = r("../support"), n = r("./ArrayReader"), c = r("./StringReader"), w = r("./NodeBufferReader"), b = r("./Uint8ArrayReader");
      i.exports = function(g) {
        var _ = o.getTypeOf(g);
        return o.checkSupport(_), _ !== "string" || s.uint8array ? _ === "nodebuffer" ? new w(g) : s.uint8array ? new b(o.transformTo("uint8array", g)) : new n(o.transformTo("array", g)) : new c(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, i, a) {
      a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, i, a) {
      var o = r("./GenericWorker"), s = r("../utils");
      function n(c) {
        o.call(this, "ConvertWorker to " + c), this.destType = c;
      }
      s.inherits(n, o), n.prototype.processChunk = function(c) {
        this.push({ data: s.transformTo(this.destType, c.data), meta: c.meta });
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, i, a) {
      var o = r("./GenericWorker"), s = r("../crc32");
      function n() {
        o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(n, o), n.prototype.processChunk = function(c) {
        this.streamInfo.crc32 = s(c.data, this.streamInfo.crc32 || 0), this.push(c);
      }, i.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, i, a) {
      var o = r("../utils"), s = r("./GenericWorker");
      function n(c) {
        s.call(this, "DataLengthProbe for " + c), this.propName = c, this.withStreamInfo(c, 0);
      }
      o.inherits(n, s), n.prototype.processChunk = function(c) {
        if (c) {
          var w = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = w + c.data.length;
        }
        s.prototype.processChunk.call(this, c);
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, i, a) {
      var o = r("../utils"), s = r("./GenericWorker");
      function n(c) {
        s.call(this, "DataWorker");
        var w = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, c.then(function(b) {
          w.dataIsReady = !0, w.data = b, w.max = b && b.length || 0, w.type = o.getTypeOf(b), w.isPaused || w._tickAndRepeat();
        }, function(b) {
          w.error(b);
        });
      }
      o.inherits(n, s), n.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var c = null, w = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            c = this.data.substring(this.index, w);
            break;
          case "uint8array":
            c = this.data.subarray(this.index, w);
            break;
          case "array":
          case "nodebuffer":
            c = this.data.slice(this.index, w);
        }
        return this.index = w, this.push({ data: c, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, i, a) {
      function o(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      o.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, n) {
        return this._listeners[s].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, n) {
        if (this._listeners[s])
          for (var c = 0; c < this._listeners[s].length; c++)
            this._listeners[s][c].call(this, n);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var n = this;
        return s.on("data", function(c) {
          n.processChunk(c);
        }), s.on("end", function() {
          n.end();
        }), s.on("error", function(c) {
          n.error(c);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, n) {
        return this.extraStreamInfo[s] = n, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, i.exports = o;
    }, {}], 29: [function(r, i, a) {
      var o = r("../utils"), s = r("./ConvertWorker"), n = r("./GenericWorker"), c = r("../base64"), w = r("../support"), b = r("../external"), g = null;
      if (w.nodestream)
        try {
          g = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function _(y, d) {
        return new b.Promise(function(x, p) {
          var E = [], A = y._internalType, N = y._outputType, O = y._mimeType;
          y.on("data", function(z, P) {
            E.push(z), d && d(P);
          }).on("error", function(z) {
            E = [], p(z);
          }).on("end", function() {
            try {
              var z = function(P, K, C) {
                switch (P) {
                  case "blob":
                    return o.newBlob(o.transformTo("arraybuffer", K), C);
                  case "base64":
                    return c.encode(K);
                  default:
                    return o.transformTo(P, K);
                }
              }(N, function(P, K) {
                var C, tt = 0, at = null, I = 0;
                for (C = 0; C < K.length; C++)
                  I += K[C].length;
                switch (P) {
                  case "string":
                    return K.join("");
                  case "array":
                    return Array.prototype.concat.apply([], K);
                  case "uint8array":
                    for (at = new Uint8Array(I), C = 0; C < K.length; C++)
                      at.set(K[C], tt), tt += K[C].length;
                    return at;
                  case "nodebuffer":
                    return Buffer.concat(K);
                  default:
                    throw new Error("concat : unsupported type '" + P + "'");
                }
              }(A, E), O);
              x(z);
            } catch (P) {
              p(P);
            }
            E = [];
          }).resume();
        });
      }
      function f(y, d, x) {
        var p = d;
        switch (d) {
          case "blob":
          case "arraybuffer":
            p = "uint8array";
            break;
          case "base64":
            p = "string";
        }
        try {
          this._internalType = p, this._outputType = d, this._mimeType = x, o.checkSupport(p), this._worker = y.pipe(new s(p)), y.lock();
        } catch (E) {
          this._worker = new n("error"), this._worker.error(E);
        }
      }
      f.prototype = { accumulate: function(y) {
        return _(this, y);
      }, on: function(y, d) {
        var x = this;
        return y === "data" ? this._worker.on(y, function(p) {
          d.call(x, p.data, p.meta);
        }) : this._worker.on(y, function() {
          o.delay(d, arguments, x);
        }), this;
      }, resume: function() {
        return o.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(y) {
        if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, y);
      } }, i.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, i, a) {
      if (a.base64 = !0, a.array = !0, a.string = !0, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        a.blob = !1;
      else {
        var o = new ArrayBuffer(0);
        try {
          a.blob = new Blob([o], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(o), a.blob = s.getBlob("application/zip").size === 0;
          } catch {
            a.blob = !1;
          }
        }
      }
      try {
        a.nodestream = !!r("readable-stream").Readable;
      } catch {
        a.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, i, a) {
      for (var o = r("./utils"), s = r("./support"), n = r("./nodejsUtils"), c = r("./stream/GenericWorker"), w = new Array(256), b = 0; b < 256; b++)
        w[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
      w[254] = w[254] = 1;
      function g() {
        c.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function _() {
        c.call(this, "utf-8 encode");
      }
      a.utf8encode = function(f) {
        return s.nodebuffer ? n.newBufferFrom(f, "utf-8") : function(y) {
          var d, x, p, E, A, N = y.length, O = 0;
          for (E = 0; E < N; E++)
            (64512 & (x = y.charCodeAt(E))) == 55296 && E + 1 < N && (64512 & (p = y.charCodeAt(E + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (p - 56320), E++), O += x < 128 ? 1 : x < 2048 ? 2 : x < 65536 ? 3 : 4;
          for (d = s.uint8array ? new Uint8Array(O) : new Array(O), E = A = 0; A < O; E++)
            (64512 & (x = y.charCodeAt(E))) == 55296 && E + 1 < N && (64512 & (p = y.charCodeAt(E + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (p - 56320), E++), x < 128 ? d[A++] = x : (x < 2048 ? d[A++] = 192 | x >>> 6 : (x < 65536 ? d[A++] = 224 | x >>> 12 : (d[A++] = 240 | x >>> 18, d[A++] = 128 | x >>> 12 & 63), d[A++] = 128 | x >>> 6 & 63), d[A++] = 128 | 63 & x);
          return d;
        }(f);
      }, a.utf8decode = function(f) {
        return s.nodebuffer ? o.transformTo("nodebuffer", f).toString("utf-8") : function(y) {
          var d, x, p, E, A = y.length, N = new Array(2 * A);
          for (d = x = 0; d < A; )
            if ((p = y[d++]) < 128)
              N[x++] = p;
            else if (4 < (E = w[p]))
              N[x++] = 65533, d += E - 1;
            else {
              for (p &= E === 2 ? 31 : E === 3 ? 15 : 7; 1 < E && d < A; )
                p = p << 6 | 63 & y[d++], E--;
              1 < E ? N[x++] = 65533 : p < 65536 ? N[x++] = p : (p -= 65536, N[x++] = 55296 | p >> 10 & 1023, N[x++] = 56320 | 1023 & p);
            }
          return N.length !== x && (N.subarray ? N = N.subarray(0, x) : N.length = x), o.applyFromCharCode(N);
        }(f = o.transformTo(s.uint8array ? "uint8array" : "array", f));
      }, o.inherits(g, c), g.prototype.processChunk = function(f) {
        var y = o.transformTo(s.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var d = y;
            (y = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), y.set(d, this.leftOver.length);
          } else
            y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var x = function(E, A) {
          var N;
          for ((A = A || E.length) > E.length && (A = E.length), N = A - 1; 0 <= N && (192 & E[N]) == 128; )
            N--;
          return N < 0 || N === 0 ? A : N + w[E[N]] > A ? N : A;
        }(y), p = y;
        x !== y.length && (s.uint8array ? (p = y.subarray(0, x), this.leftOver = y.subarray(x, y.length)) : (p = y.slice(0, x), this.leftOver = y.slice(x, y.length))), this.push({ data: a.utf8decode(p), meta: f.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, a.Utf8DecodeWorker = g, o.inherits(_, c), _.prototype.processChunk = function(f) {
        this.push({ data: a.utf8encode(f.data), meta: f.meta });
      }, a.Utf8EncodeWorker = _;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, i, a) {
      var o = r("./support"), s = r("./base64"), n = r("./nodejsUtils"), c = r("./external");
      function w(d) {
        return d;
      }
      function b(d, x) {
        for (var p = 0; p < d.length; ++p)
          x[p] = 255 & d.charCodeAt(p);
        return x;
      }
      r("setimmediate"), a.newBlob = function(d, x) {
        a.checkSupport("blob");
        try {
          return new Blob([d], { type: x });
        } catch {
          try {
            var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return p.append(d), p.getBlob(x);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(d, x, p) {
        var E = [], A = 0, N = d.length;
        if (N <= p)
          return String.fromCharCode.apply(null, d);
        for (; A < N; )
          x === "array" || x === "nodebuffer" ? E.push(String.fromCharCode.apply(null, d.slice(A, Math.min(A + p, N)))) : E.push(String.fromCharCode.apply(null, d.subarray(A, Math.min(A + p, N)))), A += p;
        return E.join("");
      }, stringifyByChar: function(d) {
        for (var x = "", p = 0; p < d.length; p++)
          x += String.fromCharCode(d[p]);
        return x;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function _(d) {
        var x = 65536, p = a.getTypeOf(d), E = !0;
        if (p === "uint8array" ? E = g.applyCanBeUsed.uint8array : p === "nodebuffer" && (E = g.applyCanBeUsed.nodebuffer), E)
          for (; 1 < x; )
            try {
              return g.stringifyByChunk(d, p, x);
            } catch {
              x = Math.floor(x / 2);
            }
        return g.stringifyByChar(d);
      }
      function f(d, x) {
        for (var p = 0; p < d.length; p++)
          x[p] = d[p];
        return x;
      }
      a.applyFromCharCode = _;
      var y = {};
      y.string = { string: w, array: function(d) {
        return b(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return y.string.uint8array(d).buffer;
      }, uint8array: function(d) {
        return b(d, new Uint8Array(d.length));
      }, nodebuffer: function(d) {
        return b(d, n.allocBuffer(d.length));
      } }, y.array = { string: _, array: w, arraybuffer: function(d) {
        return new Uint8Array(d).buffer;
      }, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return n.newBufferFrom(d);
      } }, y.arraybuffer = { string: function(d) {
        return _(new Uint8Array(d));
      }, array: function(d) {
        return f(new Uint8Array(d), new Array(d.byteLength));
      }, arraybuffer: w, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return n.newBufferFrom(new Uint8Array(d));
      } }, y.uint8array = { string: _, array: function(d) {
        return f(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return d.buffer;
      }, uint8array: w, nodebuffer: function(d) {
        return n.newBufferFrom(d);
      } }, y.nodebuffer = { string: _, array: function(d) {
        return f(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return y.nodebuffer.uint8array(d).buffer;
      }, uint8array: function(d) {
        return f(d, new Uint8Array(d.length));
      }, nodebuffer: w }, a.transformTo = function(d, x) {
        if (x = x || "", !d)
          return x;
        a.checkSupport(d);
        var p = a.getTypeOf(x);
        return y[p][d](x);
      }, a.resolve = function(d) {
        for (var x = d.split("/"), p = [], E = 0; E < x.length; E++) {
          var A = x[E];
          A === "." || A === "" && E !== 0 && E !== x.length - 1 || (A === ".." ? p.pop() : p.push(A));
        }
        return p.join("/");
      }, a.getTypeOf = function(d) {
        return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : o.nodebuffer && n.isBuffer(d) ? "nodebuffer" : o.uint8array && d instanceof Uint8Array ? "uint8array" : o.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function(d) {
        if (!o[d.toLowerCase()])
          throw new Error(d + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(d) {
        var x, p, E = "";
        for (p = 0; p < (d || "").length; p++)
          E += "\\x" + ((x = d.charCodeAt(p)) < 16 ? "0" : "") + x.toString(16).toUpperCase();
        return E;
      }, a.delay = function(d, x, p) {
        setImmediate(function() {
          d.apply(p || null, x || []);
        });
      }, a.inherits = function(d, x) {
        function p() {
        }
        p.prototype = x.prototype, d.prototype = new p();
      }, a.extend = function() {
        var d, x, p = {};
        for (d = 0; d < arguments.length; d++)
          for (x in arguments[d])
            Object.prototype.hasOwnProperty.call(arguments[d], x) && p[x] === void 0 && (p[x] = arguments[d][x]);
        return p;
      }, a.prepareContent = function(d, x, p, E, A) {
        return c.Promise.resolve(x).then(function(N) {
          return o.blob && (N instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(N)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(O, z) {
            var P = new FileReader();
            P.onload = function(K) {
              O(K.target.result);
            }, P.onerror = function(K) {
              z(K.target.error);
            }, P.readAsArrayBuffer(N);
          }) : N;
        }).then(function(N) {
          var O = a.getTypeOf(N);
          return O ? (O === "arraybuffer" ? N = a.transformTo("uint8array", N) : O === "string" && (A ? N = s.decode(N) : p && E !== !0 && (N = function(z) {
            return b(z, o.uint8array ? new Uint8Array(z.length) : new Array(z.length));
          }(N))), N) : c.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, i, a) {
      var o = r("./reader/readerFor"), s = r("./utils"), n = r("./signature"), c = r("./zipEntry"), w = r("./support");
      function b(g) {
        this.files = [], this.loadOptions = g;
      }
      b.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var _ = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(_) + ", expected " + s.pretty(g) + ")");
        }
      }, isSignature: function(g, _) {
        var f = this.reader.index;
        this.reader.setIndex(g);
        var y = this.reader.readString(4) === _;
        return this.reader.setIndex(f), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), _ = w.uint8array ? "uint8array" : "array", f = s.transformTo(_, g);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, _, f, y = this.zip64EndOfCentralSize - 44; 0 < y; )
          g = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[g] = { id: g, length: _, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, _;
        for (g = 0; g < this.files.length; g++)
          _ = this.files[g], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (g = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var _ = g;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var y = _ - f;
        if (0 < y)
          this.isSignature(_, n.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = o(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, i.exports = b;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, i, a) {
      var o = r("./reader/readerFor"), s = r("./utils"), n = r("./compressedObject"), c = r("./crc32"), w = r("./utf8"), b = r("./compressions"), g = r("./support");
      function _(f, y) {
        this.options = f, this.loadOptions = y;
      }
      _.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var y, d;
        if (f.skip(22), this.fileNameLength = f.readInt(2), d = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(x) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p) && b[p].magic === x)
              return b[p];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, y, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var y = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        f.skip(y), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = o(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var y, d, x, p = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < p; )
          y = f.readInt(2), d = f.readInt(2), x = f.readData(d), this.extraFields[y] = { id: y, length: d, value: x };
        f.setIndex(p);
      }, handleUTF8: function() {
        var f = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = w.utf8decode(this.fileName), this.fileCommentStr = w.utf8decode(this.fileComment);
        else {
          var y = this.findExtraFieldUnicodePath();
          if (y !== null)
            this.fileNameStr = y;
          else {
            var d = s.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(d);
          }
          var x = this.findExtraFieldUnicodeComment();
          if (x !== null)
            this.fileCommentStr = x;
          else {
            var p = s.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(p);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var y = o(f.value);
          return y.readInt(1) !== 1 || c(this.fileName) !== y.readInt(4) ? null : w.utf8decode(y.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var y = o(f.value);
          return y.readInt(1) !== 1 || c(this.fileComment) !== y.readInt(4) ? null : w.utf8decode(y.readData(f.length - 5));
        }
        return null;
      } }, i.exports = _;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, i, a) {
      function o(y, d, x) {
        this.name = y, this.dir = x.dir, this.date = x.date, this.comment = x.comment, this.unixPermissions = x.unixPermissions, this.dosPermissions = x.dosPermissions, this._data = d, this._dataBinary = x.binary, this.options = { compression: x.compression, compressionOptions: x.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), n = r("./stream/DataWorker"), c = r("./utf8"), w = r("./compressedObject"), b = r("./stream/GenericWorker");
      o.prototype = { internalStream: function(y) {
        var d = null, x = "string";
        try {
          if (!y)
            throw new Error("No output type specified.");
          var p = (x = y.toLowerCase()) === "string" || x === "text";
          x !== "binarystring" && x !== "text" || (x = "string"), d = this._decompressWorker();
          var E = !this._dataBinary;
          E && !p && (d = d.pipe(new c.Utf8EncodeWorker())), !E && p && (d = d.pipe(new c.Utf8DecodeWorker()));
        } catch (A) {
          (d = new b("error")).error(A);
        }
        return new s(d, x, "");
      }, async: function(y, d) {
        return this.internalStream(y).accumulate(d);
      }, nodeStream: function(y, d) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(d);
      }, _compressWorker: function(y, d) {
        if (this._data instanceof w && this._data.compression.magic === y.magic)
          return this._data.getCompressedWorker();
        var x = this._decompressWorker();
        return this._dataBinary || (x = x.pipe(new c.Utf8EncodeWorker())), w.createWorkerFrom(x, y, d);
      }, _decompressWorker: function() {
        return this._data instanceof w ? this._data.getContentWorker() : this._data instanceof b ? this._data : new n(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < g.length; f++)
        o.prototype[g[f]] = _;
      i.exports = o;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, i, a) {
      (function(o) {
        var s, n, c = o.MutationObserver || o.WebKitMutationObserver;
        if (c) {
          var w = 0, b = new c(y), g = o.document.createTextNode("");
          b.observe(g, { characterData: !0 }), s = function() {
            g.data = w = ++w % 2;
          };
        } else if (o.setImmediate || o.MessageChannel === void 0)
          s = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
            var d = o.document.createElement("script");
            d.onreadystatechange = function() {
              y(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
            }, o.document.documentElement.appendChild(d);
          } : function() {
            setTimeout(y, 0);
          };
        else {
          var _ = new o.MessageChannel();
          _.port1.onmessage = y, s = function() {
            _.port2.postMessage(0);
          };
        }
        var f = [];
        function y() {
          var d, x;
          n = !0;
          for (var p = f.length; p; ) {
            for (x = f, f = [], d = -1; ++d < p; )
              x[d]();
            p = f.length;
          }
          n = !1;
        }
        i.exports = function(d) {
          f.push(d) !== 1 || n || s();
        };
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, i, a) {
      var o = r("immediate");
      function s() {
      }
      var n = {}, c = ["REJECTED"], w = ["FULFILLED"], b = ["PENDING"];
      function g(p) {
        if (typeof p != "function")
          throw new TypeError("resolver must be a function");
        this.state = b, this.queue = [], this.outcome = void 0, p !== s && d(this, p);
      }
      function _(p, E, A) {
        this.promise = p, typeof E == "function" && (this.onFulfilled = E, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
      }
      function f(p, E, A) {
        o(function() {
          var N;
          try {
            N = E(A);
          } catch (O) {
            return n.reject(p, O);
          }
          N === p ? n.reject(p, new TypeError("Cannot resolve promise with itself")) : n.resolve(p, N);
        });
      }
      function y(p) {
        var E = p && p.then;
        if (p && (typeof p == "object" || typeof p == "function") && typeof E == "function")
          return function() {
            E.apply(p, arguments);
          };
      }
      function d(p, E) {
        var A = !1;
        function N(P) {
          A || (A = !0, n.reject(p, P));
        }
        function O(P) {
          A || (A = !0, n.resolve(p, P));
        }
        var z = x(function() {
          E(O, N);
        });
        z.status === "error" && N(z.value);
      }
      function x(p, E) {
        var A = {};
        try {
          A.value = p(E), A.status = "success";
        } catch (N) {
          A.status = "error", A.value = N;
        }
        return A;
      }
      (i.exports = g).prototype.finally = function(p) {
        if (typeof p != "function")
          return this;
        var E = this.constructor;
        return this.then(function(A) {
          return E.resolve(p()).then(function() {
            return A;
          });
        }, function(A) {
          return E.resolve(p()).then(function() {
            throw A;
          });
        });
      }, g.prototype.catch = function(p) {
        return this.then(null, p);
      }, g.prototype.then = function(p, E) {
        if (typeof p != "function" && this.state === w || typeof E != "function" && this.state === c)
          return this;
        var A = new this.constructor(s);
        return this.state !== b ? f(A, this.state === w ? p : E, this.outcome) : this.queue.push(new _(A, p, E)), A;
      }, _.prototype.callFulfilled = function(p) {
        n.resolve(this.promise, p);
      }, _.prototype.otherCallFulfilled = function(p) {
        f(this.promise, this.onFulfilled, p);
      }, _.prototype.callRejected = function(p) {
        n.reject(this.promise, p);
      }, _.prototype.otherCallRejected = function(p) {
        f(this.promise, this.onRejected, p);
      }, n.resolve = function(p, E) {
        var A = x(y, E);
        if (A.status === "error")
          return n.reject(p, A.value);
        var N = A.value;
        if (N)
          d(p, N);
        else {
          p.state = w, p.outcome = E;
          for (var O = -1, z = p.queue.length; ++O < z; )
            p.queue[O].callFulfilled(E);
        }
        return p;
      }, n.reject = function(p, E) {
        p.state = c, p.outcome = E;
        for (var A = -1, N = p.queue.length; ++A < N; )
          p.queue[A].callRejected(E);
        return p;
      }, g.resolve = function(p) {
        return p instanceof this ? p : n.resolve(new this(s), p);
      }, g.reject = function(p) {
        var E = new this(s);
        return n.reject(E, p);
      }, g.all = function(p) {
        var E = this;
        if (Object.prototype.toString.call(p) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = p.length, N = !1;
        if (!A)
          return this.resolve([]);
        for (var O = new Array(A), z = 0, P = -1, K = new this(s); ++P < A; )
          C(p[P], P);
        return K;
        function C(tt, at) {
          E.resolve(tt).then(function(I) {
            O[at] = I, ++z !== A || N || (N = !0, n.resolve(K, O));
          }, function(I) {
            N || (N = !0, n.reject(K, I));
          });
        }
      }, g.race = function(p) {
        var E = this;
        if (Object.prototype.toString.call(p) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = p.length, N = !1;
        if (!A)
          return this.resolve([]);
        for (var O = -1, z = new this(s); ++O < A; )
          P = p[O], E.resolve(P).then(function(K) {
            N || (N = !0, n.resolve(z, K));
          }, function(K) {
            N || (N = !0, n.reject(z, K));
          });
        var P;
        return z;
      };
    }, { immediate: 36 }], 38: [function(r, i, a) {
      var o = {};
      (0, r("./lib/utils/common").assign)(o, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), i.exports = o;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, i, a) {
      var o = r("./zlib/deflate"), s = r("./utils/common"), n = r("./utils/strings"), c = r("./zlib/messages"), w = r("./zlib/zstream"), b = Object.prototype.toString, g = 0, _ = -1, f = 0, y = 8;
      function d(p) {
        if (!(this instanceof d))
          return new d(p);
        this.options = s.assign({ level: _, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, p || {});
        var E = this.options;
        E.raw && 0 < E.windowBits ? E.windowBits = -E.windowBits : E.gzip && 0 < E.windowBits && E.windowBits < 16 && (E.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new w(), this.strm.avail_out = 0;
        var A = o.deflateInit2(this.strm, E.level, E.method, E.windowBits, E.memLevel, E.strategy);
        if (A !== g)
          throw new Error(c[A]);
        if (E.header && o.deflateSetHeader(this.strm, E.header), E.dictionary) {
          var N;
          if (N = typeof E.dictionary == "string" ? n.string2buf(E.dictionary) : b.call(E.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(E.dictionary) : E.dictionary, (A = o.deflateSetDictionary(this.strm, N)) !== g)
            throw new Error(c[A]);
          this._dict_set = !0;
        }
      }
      function x(p, E) {
        var A = new d(E);
        if (A.push(p, !0), A.err)
          throw A.msg || c[A.err];
        return A.result;
      }
      d.prototype.push = function(p, E) {
        var A, N, O = this.strm, z = this.options.chunkSize;
        if (this.ended)
          return !1;
        N = E === ~~E ? E : E === !0 ? 4 : 0, typeof p == "string" ? O.input = n.string2buf(p) : b.call(p) === "[object ArrayBuffer]" ? O.input = new Uint8Array(p) : O.input = p, O.next_in = 0, O.avail_in = O.input.length;
        do {
          if (O.avail_out === 0 && (O.output = new s.Buf8(z), O.next_out = 0, O.avail_out = z), (A = o.deflate(O, N)) !== 1 && A !== g)
            return this.onEnd(A), !(this.ended = !0);
          O.avail_out !== 0 && (O.avail_in !== 0 || N !== 4 && N !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(O.output, O.next_out))) : this.onData(s.shrinkBuf(O.output, O.next_out)));
        } while ((0 < O.avail_in || O.avail_out === 0) && A !== 1);
        return N === 4 ? (A = o.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === g) : N !== 2 || (this.onEnd(g), !(O.avail_out = 0));
      }, d.prototype.onData = function(p) {
        this.chunks.push(p);
      }, d.prototype.onEnd = function(p) {
        p === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, a.Deflate = d, a.deflate = x, a.deflateRaw = function(p, E) {
        return (E = E || {}).raw = !0, x(p, E);
      }, a.gzip = function(p, E) {
        return (E = E || {}).gzip = !0, x(p, E);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, i, a) {
      var o = r("./zlib/inflate"), s = r("./utils/common"), n = r("./utils/strings"), c = r("./zlib/constants"), w = r("./zlib/messages"), b = r("./zlib/zstream"), g = r("./zlib/gzheader"), _ = Object.prototype.toString;
      function f(d) {
        if (!(this instanceof f))
          return new f(d);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, d || {});
        var x = this.options;
        x.raw && 0 <= x.windowBits && x.windowBits < 16 && (x.windowBits = -x.windowBits, x.windowBits === 0 && (x.windowBits = -15)), !(0 <= x.windowBits && x.windowBits < 16) || d && d.windowBits || (x.windowBits += 32), 15 < x.windowBits && x.windowBits < 48 && !(15 & x.windowBits) && (x.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
        var p = o.inflateInit2(this.strm, x.windowBits);
        if (p !== c.Z_OK)
          throw new Error(w[p]);
        this.header = new g(), o.inflateGetHeader(this.strm, this.header);
      }
      function y(d, x) {
        var p = new f(x);
        if (p.push(d, !0), p.err)
          throw p.msg || w[p.err];
        return p.result;
      }
      f.prototype.push = function(d, x) {
        var p, E, A, N, O, z, P = this.strm, K = this.options.chunkSize, C = this.options.dictionary, tt = !1;
        if (this.ended)
          return !1;
        E = x === ~~x ? x : x === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof d == "string" ? P.input = n.binstring2buf(d) : _.call(d) === "[object ArrayBuffer]" ? P.input = new Uint8Array(d) : P.input = d, P.next_in = 0, P.avail_in = P.input.length;
        do {
          if (P.avail_out === 0 && (P.output = new s.Buf8(K), P.next_out = 0, P.avail_out = K), (p = o.inflate(P, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && C && (z = typeof C == "string" ? n.string2buf(C) : _.call(C) === "[object ArrayBuffer]" ? new Uint8Array(C) : C, p = o.inflateSetDictionary(this.strm, z)), p === c.Z_BUF_ERROR && tt === !0 && (p = c.Z_OK, tt = !1), p !== c.Z_STREAM_END && p !== c.Z_OK)
            return this.onEnd(p), !(this.ended = !0);
          P.next_out && (P.avail_out !== 0 && p !== c.Z_STREAM_END && (P.avail_in !== 0 || E !== c.Z_FINISH && E !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = n.utf8border(P.output, P.next_out), N = P.next_out - A, O = n.buf2string(P.output, A), P.next_out = N, P.avail_out = K - N, N && s.arraySet(P.output, P.output, A, N, 0), this.onData(O)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (tt = !0);
        } while ((0 < P.avail_in || P.avail_out === 0) && p !== c.Z_STREAM_END);
        return p === c.Z_STREAM_END && (E = c.Z_FINISH), E === c.Z_FINISH ? (p = o.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === c.Z_OK) : E !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(P.avail_out = 0));
      }, f.prototype.onData = function(d) {
        this.chunks.push(d);
      }, f.prototype.onEnd = function(d) {
        d === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, a.Inflate = f, a.inflate = y, a.inflateRaw = function(d, x) {
        return (x = x || {}).raw = !0, y(d, x);
      }, a.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, i, a) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      a.assign = function(c) {
        for (var w = Array.prototype.slice.call(arguments, 1); w.length; ) {
          var b = w.shift();
          if (b) {
            if (typeof b != "object")
              throw new TypeError(b + "must be non-object");
            for (var g in b)
              b.hasOwnProperty(g) && (c[g] = b[g]);
          }
        }
        return c;
      }, a.shrinkBuf = function(c, w) {
        return c.length === w ? c : c.subarray ? c.subarray(0, w) : (c.length = w, c);
      };
      var s = { arraySet: function(c, w, b, g, _) {
        if (w.subarray && c.subarray)
          c.set(w.subarray(b, b + g), _);
        else
          for (var f = 0; f < g; f++)
            c[_ + f] = w[b + f];
      }, flattenChunks: function(c) {
        var w, b, g, _, f, y;
        for (w = g = 0, b = c.length; w < b; w++)
          g += c[w].length;
        for (y = new Uint8Array(g), w = _ = 0, b = c.length; w < b; w++)
          f = c[w], y.set(f, _), _ += f.length;
        return y;
      } }, n = { arraySet: function(c, w, b, g, _) {
        for (var f = 0; f < g; f++)
          c[_ + f] = w[b + f];
      }, flattenChunks: function(c) {
        return [].concat.apply([], c);
      } };
      a.setTyped = function(c) {
        c ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, s)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, n));
      }, a.setTyped(o);
    }, {}], 42: [function(r, i, a) {
      var o = r("./common"), s = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var c = new o.Buf8(256), w = 0; w < 256; w++)
        c[w] = 252 <= w ? 6 : 248 <= w ? 5 : 240 <= w ? 4 : 224 <= w ? 3 : 192 <= w ? 2 : 1;
      function b(g, _) {
        if (_ < 65537 && (g.subarray && n || !g.subarray && s))
          return String.fromCharCode.apply(null, o.shrinkBuf(g, _));
        for (var f = "", y = 0; y < _; y++)
          f += String.fromCharCode(g[y]);
        return f;
      }
      c[254] = c[254] = 1, a.string2buf = function(g) {
        var _, f, y, d, x, p = g.length, E = 0;
        for (d = 0; d < p; d++)
          (64512 & (f = g.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = g.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), E += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (_ = new o.Buf8(E), d = x = 0; x < E; d++)
          (64512 & (f = g.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = g.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), f < 128 ? _[x++] = f : (f < 2048 ? _[x++] = 192 | f >>> 6 : (f < 65536 ? _[x++] = 224 | f >>> 12 : (_[x++] = 240 | f >>> 18, _[x++] = 128 | f >>> 12 & 63), _[x++] = 128 | f >>> 6 & 63), _[x++] = 128 | 63 & f);
        return _;
      }, a.buf2binstring = function(g) {
        return b(g, g.length);
      }, a.binstring2buf = function(g) {
        for (var _ = new o.Buf8(g.length), f = 0, y = _.length; f < y; f++)
          _[f] = g.charCodeAt(f);
        return _;
      }, a.buf2string = function(g, _) {
        var f, y, d, x, p = _ || g.length, E = new Array(2 * p);
        for (f = y = 0; f < p; )
          if ((d = g[f++]) < 128)
            E[y++] = d;
          else if (4 < (x = c[d]))
            E[y++] = 65533, f += x - 1;
          else {
            for (d &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && f < p; )
              d = d << 6 | 63 & g[f++], x--;
            1 < x ? E[y++] = 65533 : d < 65536 ? E[y++] = d : (d -= 65536, E[y++] = 55296 | d >> 10 & 1023, E[y++] = 56320 | 1023 & d);
          }
        return b(E, y);
      }, a.utf8border = function(g, _) {
        var f;
        for ((_ = _ || g.length) > g.length && (_ = g.length), f = _ - 1; 0 <= f && (192 & g[f]) == 128; )
          f--;
        return f < 0 || f === 0 ? _ : f + c[g[f]] > _ ? f : _;
      };
    }, { "./common": 41 }], 43: [function(r, i, a) {
      i.exports = function(o, s, n, c) {
        for (var w = 65535 & o | 0, b = o >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; b = b + (w = w + s[c++] | 0) | 0, --g; )
            ;
          w %= 65521, b %= 65521;
        }
        return w | b << 16 | 0;
      };
    }, {}], 44: [function(r, i, a) {
      i.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, i, a) {
      var o = function() {
        for (var s, n = [], c = 0; c < 256; c++) {
          s = c;
          for (var w = 0; w < 8; w++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          n[c] = s;
        }
        return n;
      }();
      i.exports = function(s, n, c, w) {
        var b = o, g = w + c;
        s ^= -1;
        for (var _ = w; _ < g; _++)
          s = s >>> 8 ^ b[255 & (s ^ n[_])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, i, a) {
      var o, s = r("../utils/common"), n = r("./trees"), c = r("./adler32"), w = r("./crc32"), b = r("./messages"), g = 0, _ = 4, f = 0, y = -2, d = -1, x = 4, p = 2, E = 8, A = 9, N = 286, O = 30, z = 19, P = 2 * N + 1, K = 15, C = 3, tt = 258, at = tt + C + 1, I = 42, j = 113, m = 1, G = 2, ut = 3, V = 4;
      function ft(h, H) {
        return h.msg = b[H], H;
      }
      function Y(h) {
        return (h << 1) - (4 < h ? 9 : 0);
      }
      function ct(h) {
        for (var H = h.length; 0 <= --H; )
          h[H] = 0;
      }
      function L(h) {
        var H = h.state, T = H.pending;
        T > h.avail_out && (T = h.avail_out), T !== 0 && (s.arraySet(h.output, H.pending_buf, H.pending_out, T, h.next_out), h.next_out += T, H.pending_out += T, h.total_out += T, h.avail_out -= T, H.pending -= T, H.pending === 0 && (H.pending_out = 0));
      }
      function R(h, H) {
        n._tr_flush_block(h, 0 <= h.block_start ? h.block_start : -1, h.strstart - h.block_start, H), h.block_start = h.strstart, L(h.strm);
      }
      function Z(h, H) {
        h.pending_buf[h.pending++] = H;
      }
      function $(h, H) {
        h.pending_buf[h.pending++] = H >>> 8 & 255, h.pending_buf[h.pending++] = 255 & H;
      }
      function J(h, H) {
        var T, l, u = h.max_chain_length, v = h.strstart, D = h.prev_length, M = h.nice_match, B = h.strstart > h.w_size - at ? h.strstart - (h.w_size - at) : 0, Q = h.window, rt = h.w_mask, et = h.prev, lt = h.strstart + tt, dt = Q[v + D - 1], pt = Q[v + D];
        h.prev_length >= h.good_match && (u >>= 2), M > h.lookahead && (M = h.lookahead);
        do
          if (Q[(T = H) + D] === pt && Q[T + D - 1] === dt && Q[T] === Q[v] && Q[++T] === Q[v + 1]) {
            v += 2, T++;
            do
              ;
            while (Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && v < lt);
            if (l = tt - (lt - v), v = lt - tt, D < l) {
              if (h.match_start = H, M <= (D = l))
                break;
              dt = Q[v + D - 1], pt = Q[v + D];
            }
          }
        while ((H = et[H & rt]) > B && --u != 0);
        return D <= h.lookahead ? D : h.lookahead;
      }
      function X(h) {
        var H, T, l, u, v, D, M, B, Q, rt, et = h.w_size;
        do {
          if (u = h.window_size - h.lookahead - h.strstart, h.strstart >= et + (et - at)) {
            for (s.arraySet(h.window, h.window, et, et, 0), h.match_start -= et, h.strstart -= et, h.block_start -= et, H = T = h.hash_size; l = h.head[--H], h.head[H] = et <= l ? l - et : 0, --T; )
              ;
            for (H = T = et; l = h.prev[--H], h.prev[H] = et <= l ? l - et : 0, --T; )
              ;
            u += et;
          }
          if (h.strm.avail_in === 0)
            break;
          if (D = h.strm, M = h.window, B = h.strstart + h.lookahead, Q = u, rt = void 0, rt = D.avail_in, Q < rt && (rt = Q), T = rt === 0 ? 0 : (D.avail_in -= rt, s.arraySet(M, D.input, D.next_in, rt, B), D.state.wrap === 1 ? D.adler = c(D.adler, M, rt, B) : D.state.wrap === 2 && (D.adler = w(D.adler, M, rt, B)), D.next_in += rt, D.total_in += rt, rt), h.lookahead += T, h.lookahead + h.insert >= C)
            for (v = h.strstart - h.insert, h.ins_h = h.window[v], h.ins_h = (h.ins_h << h.hash_shift ^ h.window[v + 1]) & h.hash_mask; h.insert && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[v + C - 1]) & h.hash_mask, h.prev[v & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = v, v++, h.insert--, !(h.lookahead + h.insert < C)); )
              ;
        } while (h.lookahead < at && h.strm.avail_in !== 0);
      }
      function k(h, H) {
        for (var T, l; ; ) {
          if (h.lookahead < at) {
            if (X(h), h.lookahead < at && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          if (T = 0, h.lookahead >= C && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), T !== 0 && h.strstart - T <= h.w_size - at && (h.match_length = J(h, T)), h.match_length >= C)
            if (l = n._tr_tally(h, h.strstart - h.match_start, h.match_length - C), h.lookahead -= h.match_length, h.match_length <= h.max_lazy_match && h.lookahead >= C) {
              for (h.match_length--; h.strstart++, h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart, --h.match_length != 0; )
                ;
              h.strstart++;
            } else
              h.strstart += h.match_length, h.match_length = 0, h.ins_h = h.window[h.strstart], h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + 1]) & h.hash_mask;
          else
            l = n._tr_tally(h, 0, h.window[h.strstart]), h.lookahead--, h.strstart++;
          if (l && (R(h, !1), h.strm.avail_out === 0))
            return m;
        }
        return h.insert = h.strstart < C - 1 ? h.strstart : C - 1, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : h.last_lit && (R(h, !1), h.strm.avail_out === 0) ? m : G;
      }
      function S(h, H) {
        for (var T, l, u; ; ) {
          if (h.lookahead < at) {
            if (X(h), h.lookahead < at && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          if (T = 0, h.lookahead >= C && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), h.prev_length = h.match_length, h.prev_match = h.match_start, h.match_length = C - 1, T !== 0 && h.prev_length < h.max_lazy_match && h.strstart - T <= h.w_size - at && (h.match_length = J(h, T), h.match_length <= 5 && (h.strategy === 1 || h.match_length === C && 4096 < h.strstart - h.match_start) && (h.match_length = C - 1)), h.prev_length >= C && h.match_length <= h.prev_length) {
            for (u = h.strstart + h.lookahead - C, l = n._tr_tally(h, h.strstart - 1 - h.prev_match, h.prev_length - C), h.lookahead -= h.prev_length - 1, h.prev_length -= 2; ++h.strstart <= u && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), --h.prev_length != 0; )
              ;
            if (h.match_available = 0, h.match_length = C - 1, h.strstart++, l && (R(h, !1), h.strm.avail_out === 0))
              return m;
          } else if (h.match_available) {
            if ((l = n._tr_tally(h, 0, h.window[h.strstart - 1])) && R(h, !1), h.strstart++, h.lookahead--, h.strm.avail_out === 0)
              return m;
          } else
            h.match_available = 1, h.strstart++, h.lookahead--;
        }
        return h.match_available && (l = n._tr_tally(h, 0, h.window[h.strstart - 1]), h.match_available = 0), h.insert = h.strstart < C - 1 ? h.strstart : C - 1, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : h.last_lit && (R(h, !1), h.strm.avail_out === 0) ? m : G;
      }
      function q(h, H, T, l, u) {
        this.good_length = h, this.max_lazy = H, this.nice_length = T, this.max_chain = l, this.func = u;
      }
      function W() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = E, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * O + 1)), this.bl_tree = new s.Buf16(2 * (2 * z + 1)), ct(this.dyn_ltree), ct(this.dyn_dtree), ct(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(K + 1), this.heap = new s.Buf16(2 * N + 1), ct(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * N + 1), ct(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function F(h) {
        var H;
        return h && h.state ? (h.total_in = h.total_out = 0, h.data_type = p, (H = h.state).pending = 0, H.pending_out = 0, H.wrap < 0 && (H.wrap = -H.wrap), H.status = H.wrap ? I : j, h.adler = H.wrap === 2 ? 0 : 1, H.last_flush = g, n._tr_init(H), f) : ft(h, y);
      }
      function U(h) {
        var H = F(h);
        return H === f && function(T) {
          T.window_size = 2 * T.w_size, ct(T.head), T.max_lazy_match = o[T.level].max_lazy, T.good_match = o[T.level].good_length, T.nice_match = o[T.level].nice_length, T.max_chain_length = o[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = C - 1, T.match_available = 0, T.ins_h = 0;
        }(h.state), H;
      }
      function st(h, H, T, l, u, v) {
        if (!h)
          return y;
        var D = 1;
        if (H === d && (H = 6), l < 0 ? (D = 0, l = -l) : 15 < l && (D = 2, l -= 16), u < 1 || A < u || T !== E || l < 8 || 15 < l || H < 0 || 9 < H || v < 0 || x < v)
          return ft(h, y);
        l === 8 && (l = 9);
        var M = new W();
        return (h.state = M).strm = h, M.wrap = D, M.gzhead = null, M.w_bits = l, M.w_size = 1 << M.w_bits, M.w_mask = M.w_size - 1, M.hash_bits = u + 7, M.hash_size = 1 << M.hash_bits, M.hash_mask = M.hash_size - 1, M.hash_shift = ~~((M.hash_bits + C - 1) / C), M.window = new s.Buf8(2 * M.w_size), M.head = new s.Buf16(M.hash_size), M.prev = new s.Buf16(M.w_size), M.lit_bufsize = 1 << u + 6, M.pending_buf_size = 4 * M.lit_bufsize, M.pending_buf = new s.Buf8(M.pending_buf_size), M.d_buf = 1 * M.lit_bufsize, M.l_buf = 3 * M.lit_bufsize, M.level = H, M.strategy = v, M.method = T, U(h);
      }
      o = [new q(0, 0, 0, 0, function(h, H) {
        var T = 65535;
        for (T > h.pending_buf_size - 5 && (T = h.pending_buf_size - 5); ; ) {
          if (h.lookahead <= 1) {
            if (X(h), h.lookahead === 0 && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          h.strstart += h.lookahead, h.lookahead = 0;
          var l = h.block_start + T;
          if ((h.strstart === 0 || h.strstart >= l) && (h.lookahead = h.strstart - l, h.strstart = l, R(h, !1), h.strm.avail_out === 0) || h.strstart - h.block_start >= h.w_size - at && (R(h, !1), h.strm.avail_out === 0))
            return m;
        }
        return h.insert = 0, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : (h.strstart > h.block_start && (R(h, !1), h.strm.avail_out), m);
      }), new q(4, 4, 8, 4, k), new q(4, 5, 16, 8, k), new q(4, 6, 32, 32, k), new q(4, 4, 16, 16, S), new q(8, 16, 32, 32, S), new q(8, 16, 128, 128, S), new q(8, 32, 128, 256, S), new q(32, 128, 258, 1024, S), new q(32, 258, 258, 4096, S)], a.deflateInit = function(h, H) {
        return st(h, H, E, 15, 8, 0);
      }, a.deflateInit2 = st, a.deflateReset = U, a.deflateResetKeep = F, a.deflateSetHeader = function(h, H) {
        return h && h.state ? h.state.wrap !== 2 ? y : (h.state.gzhead = H, f) : y;
      }, a.deflate = function(h, H) {
        var T, l, u, v;
        if (!h || !h.state || 5 < H || H < 0)
          return h ? ft(h, y) : y;
        if (l = h.state, !h.output || !h.input && h.avail_in !== 0 || l.status === 666 && H !== _)
          return ft(h, h.avail_out === 0 ? -5 : y);
        if (l.strm = h, T = l.last_flush, l.last_flush = H, l.status === I)
          if (l.wrap === 2)
            h.adler = 0, Z(l, 31), Z(l, 139), Z(l, 8), l.gzhead ? (Z(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)), Z(l, 255 & l.gzhead.time), Z(l, l.gzhead.time >> 8 & 255), Z(l, l.gzhead.time >> 16 & 255), Z(l, l.gzhead.time >> 24 & 255), Z(l, l.level === 9 ? 2 : 2 <= l.strategy || l.level < 2 ? 4 : 0), Z(l, 255 & l.gzhead.os), l.gzhead.extra && l.gzhead.extra.length && (Z(l, 255 & l.gzhead.extra.length), Z(l, l.gzhead.extra.length >> 8 & 255)), l.gzhead.hcrc && (h.adler = w(h.adler, l.pending_buf, l.pending, 0)), l.gzindex = 0, l.status = 69) : (Z(l, 0), Z(l, 0), Z(l, 0), Z(l, 0), Z(l, 0), Z(l, l.level === 9 ? 2 : 2 <= l.strategy || l.level < 2 ? 4 : 0), Z(l, 3), l.status = j);
          else {
            var D = E + (l.w_bits - 8 << 4) << 8;
            D |= (2 <= l.strategy || l.level < 2 ? 0 : l.level < 6 ? 1 : l.level === 6 ? 2 : 3) << 6, l.strstart !== 0 && (D |= 32), D += 31 - D % 31, l.status = j, $(l, D), l.strstart !== 0 && ($(l, h.adler >>> 16), $(l, 65535 & h.adler)), h.adler = 1;
          }
        if (l.status === 69)
          if (l.gzhead.extra) {
            for (u = l.pending; l.gzindex < (65535 & l.gzhead.extra.length) && (l.pending !== l.pending_buf_size || (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending !== l.pending_buf_size)); )
              Z(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), l.gzindex === l.gzhead.extra.length && (l.gzindex = 0, l.status = 73);
          } else
            l.status = 73;
        if (l.status === 73)
          if (l.gzhead.name) {
            u = l.pending;
            do {
              if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending === l.pending_buf_size)) {
                v = 1;
                break;
              }
              v = l.gzindex < l.gzhead.name.length ? 255 & l.gzhead.name.charCodeAt(l.gzindex++) : 0, Z(l, v);
            } while (v !== 0);
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), v === 0 && (l.gzindex = 0, l.status = 91);
          } else
            l.status = 91;
        if (l.status === 91)
          if (l.gzhead.comment) {
            u = l.pending;
            do {
              if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending === l.pending_buf_size)) {
                v = 1;
                break;
              }
              v = l.gzindex < l.gzhead.comment.length ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++) : 0, Z(l, v);
            } while (v !== 0);
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), v === 0 && (l.status = 103);
          } else
            l.status = 103;
        if (l.status === 103 && (l.gzhead.hcrc ? (l.pending + 2 > l.pending_buf_size && L(h), l.pending + 2 <= l.pending_buf_size && (Z(l, 255 & h.adler), Z(l, h.adler >> 8 & 255), h.adler = 0, l.status = j)) : l.status = j), l.pending !== 0) {
          if (L(h), h.avail_out === 0)
            return l.last_flush = -1, f;
        } else if (h.avail_in === 0 && Y(H) <= Y(T) && H !== _)
          return ft(h, -5);
        if (l.status === 666 && h.avail_in !== 0)
          return ft(h, -5);
        if (h.avail_in !== 0 || l.lookahead !== 0 || H !== g && l.status !== 666) {
          var M = l.strategy === 2 ? function(B, Q) {
            for (var rt; ; ) {
              if (B.lookahead === 0 && (X(B), B.lookahead === 0)) {
                if (Q === g)
                  return m;
                break;
              }
              if (B.match_length = 0, rt = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++, rt && (R(B, !1), B.strm.avail_out === 0))
                return m;
            }
            return B.insert = 0, Q === _ ? (R(B, !0), B.strm.avail_out === 0 ? ut : V) : B.last_lit && (R(B, !1), B.strm.avail_out === 0) ? m : G;
          }(l, H) : l.strategy === 3 ? function(B, Q) {
            for (var rt, et, lt, dt, pt = B.window; ; ) {
              if (B.lookahead <= tt) {
                if (X(B), B.lookahead <= tt && Q === g)
                  return m;
                if (B.lookahead === 0)
                  break;
              }
              if (B.match_length = 0, B.lookahead >= C && 0 < B.strstart && (et = pt[lt = B.strstart - 1]) === pt[++lt] && et === pt[++lt] && et === pt[++lt]) {
                dt = B.strstart + tt;
                do
                  ;
                while (et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && lt < dt);
                B.match_length = tt - (dt - lt), B.match_length > B.lookahead && (B.match_length = B.lookahead);
              }
              if (B.match_length >= C ? (rt = n._tr_tally(B, 1, B.match_length - C), B.lookahead -= B.match_length, B.strstart += B.match_length, B.match_length = 0) : (rt = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++), rt && (R(B, !1), B.strm.avail_out === 0))
                return m;
            }
            return B.insert = 0, Q === _ ? (R(B, !0), B.strm.avail_out === 0 ? ut : V) : B.last_lit && (R(B, !1), B.strm.avail_out === 0) ? m : G;
          }(l, H) : o[l.level].func(l, H);
          if (M !== ut && M !== V || (l.status = 666), M === m || M === ut)
            return h.avail_out === 0 && (l.last_flush = -1), f;
          if (M === G && (H === 1 ? n._tr_align(l) : H !== 5 && (n._tr_stored_block(l, 0, 0, !1), H === 3 && (ct(l.head), l.lookahead === 0 && (l.strstart = 0, l.block_start = 0, l.insert = 0))), L(h), h.avail_out === 0))
            return l.last_flush = -1, f;
        }
        return H !== _ ? f : l.wrap <= 0 ? 1 : (l.wrap === 2 ? (Z(l, 255 & h.adler), Z(l, h.adler >> 8 & 255), Z(l, h.adler >> 16 & 255), Z(l, h.adler >> 24 & 255), Z(l, 255 & h.total_in), Z(l, h.total_in >> 8 & 255), Z(l, h.total_in >> 16 & 255), Z(l, h.total_in >> 24 & 255)) : ($(l, h.adler >>> 16), $(l, 65535 & h.adler)), L(h), 0 < l.wrap && (l.wrap = -l.wrap), l.pending !== 0 ? f : 1);
      }, a.deflateEnd = function(h) {
        var H;
        return h && h.state ? (H = h.state.status) !== I && H !== 69 && H !== 73 && H !== 91 && H !== 103 && H !== j && H !== 666 ? ft(h, y) : (h.state = null, H === j ? ft(h, -3) : f) : y;
      }, a.deflateSetDictionary = function(h, H) {
        var T, l, u, v, D, M, B, Q, rt = H.length;
        if (!h || !h.state || (v = (T = h.state).wrap) === 2 || v === 1 && T.status !== I || T.lookahead)
          return y;
        for (v === 1 && (h.adler = c(h.adler, H, rt, 0)), T.wrap = 0, rt >= T.w_size && (v === 0 && (ct(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), Q = new s.Buf8(T.w_size), s.arraySet(Q, H, rt - T.w_size, T.w_size, 0), H = Q, rt = T.w_size), D = h.avail_in, M = h.next_in, B = h.input, h.avail_in = rt, h.next_in = 0, h.input = H, X(T); T.lookahead >= C; ) {
          for (l = T.strstart, u = T.lookahead - (C - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[l + C - 1]) & T.hash_mask, T.prev[l & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = l, l++, --u; )
            ;
          T.strstart = l, T.lookahead = C - 1, X(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = C - 1, T.match_available = 0, h.next_in = M, h.input = B, h.avail_in = D, T.wrap = v, f;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, i, a) {
      i.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, i, a) {
      i.exports = function(o, s) {
        var n, c, w, b, g, _, f, y, d, x, p, E, A, N, O, z, P, K, C, tt, at, I, j, m, G;
        n = o.state, c = o.next_in, m = o.input, w = c + (o.avail_in - 5), b = o.next_out, G = o.output, g = b - (s - o.avail_out), _ = b + (o.avail_out - 257), f = n.dmax, y = n.wsize, d = n.whave, x = n.wnext, p = n.window, E = n.hold, A = n.bits, N = n.lencode, O = n.distcode, z = (1 << n.lenbits) - 1, P = (1 << n.distbits) - 1;
        t:
          do {
            A < 15 && (E += m[c++] << A, A += 8, E += m[c++] << A, A += 8), K = N[E & z];
            e:
              for (; ; ) {
                if (E >>>= C = K >>> 24, A -= C, (C = K >>> 16 & 255) === 0)
                  G[b++] = 65535 & K;
                else {
                  if (!(16 & C)) {
                    if (!(64 & C)) {
                      K = N[(65535 & K) + (E & (1 << C) - 1)];
                      continue e;
                    }
                    if (32 & C) {
                      n.mode = 12;
                      break t;
                    }
                    o.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  tt = 65535 & K, (C &= 15) && (A < C && (E += m[c++] << A, A += 8), tt += E & (1 << C) - 1, E >>>= C, A -= C), A < 15 && (E += m[c++] << A, A += 8, E += m[c++] << A, A += 8), K = O[E & P];
                  r:
                    for (; ; ) {
                      if (E >>>= C = K >>> 24, A -= C, !(16 & (C = K >>> 16 & 255))) {
                        if (!(64 & C)) {
                          K = O[(65535 & K) + (E & (1 << C) - 1)];
                          continue r;
                        }
                        o.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (at = 65535 & K, A < (C &= 15) && (E += m[c++] << A, (A += 8) < C && (E += m[c++] << A, A += 8)), f < (at += E & (1 << C) - 1)) {
                        o.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (E >>>= C, A -= C, (C = b - g) < at) {
                        if (d < (C = at - C) && n.sane) {
                          o.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (j = p, (I = 0) === x) {
                          if (I += y - C, C < tt) {
                            for (tt -= C; G[b++] = p[I++], --C; )
                              ;
                            I = b - at, j = G;
                          }
                        } else if (x < C) {
                          if (I += y + x - C, (C -= x) < tt) {
                            for (tt -= C; G[b++] = p[I++], --C; )
                              ;
                            if (I = 0, x < tt) {
                              for (tt -= C = x; G[b++] = p[I++], --C; )
                                ;
                              I = b - at, j = G;
                            }
                          }
                        } else if (I += x - C, C < tt) {
                          for (tt -= C; G[b++] = p[I++], --C; )
                            ;
                          I = b - at, j = G;
                        }
                        for (; 2 < tt; )
                          G[b++] = j[I++], G[b++] = j[I++], G[b++] = j[I++], tt -= 3;
                        tt && (G[b++] = j[I++], 1 < tt && (G[b++] = j[I++]));
                      } else {
                        for (I = b - at; G[b++] = G[I++], G[b++] = G[I++], G[b++] = G[I++], 2 < (tt -= 3); )
                          ;
                        tt && (G[b++] = G[I++], 1 < tt && (G[b++] = G[I++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (c < w && b < _);
        c -= tt = A >> 3, E &= (1 << (A -= tt << 3)) - 1, o.next_in = c, o.next_out = b, o.avail_in = c < w ? w - c + 5 : 5 - (c - w), o.avail_out = b < _ ? _ - b + 257 : 257 - (b - _), n.hold = E, n.bits = A;
      };
    }, {}], 49: [function(r, i, a) {
      var o = r("../utils/common"), s = r("./adler32"), n = r("./crc32"), c = r("./inffast"), w = r("./inftrees"), b = 1, g = 2, _ = 0, f = -2, y = 1, d = 852, x = 592;
      function p(I) {
        return (I >>> 24 & 255) + (I >>> 8 & 65280) + ((65280 & I) << 8) + ((255 & I) << 24);
      }
      function E() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function A(I) {
        var j;
        return I && I.state ? (j = I.state, I.total_in = I.total_out = j.total = 0, I.msg = "", j.wrap && (I.adler = 1 & j.wrap), j.mode = y, j.last = 0, j.havedict = 0, j.dmax = 32768, j.head = null, j.hold = 0, j.bits = 0, j.lencode = j.lendyn = new o.Buf32(d), j.distcode = j.distdyn = new o.Buf32(x), j.sane = 1, j.back = -1, _) : f;
      }
      function N(I) {
        var j;
        return I && I.state ? ((j = I.state).wsize = 0, j.whave = 0, j.wnext = 0, A(I)) : f;
      }
      function O(I, j) {
        var m, G;
        return I && I.state ? (G = I.state, j < 0 ? (m = 0, j = -j) : (m = 1 + (j >> 4), j < 48 && (j &= 15)), j && (j < 8 || 15 < j) ? f : (G.window !== null && G.wbits !== j && (G.window = null), G.wrap = m, G.wbits = j, N(I))) : f;
      }
      function z(I, j) {
        var m, G;
        return I ? (G = new E(), (I.state = G).window = null, (m = O(I, j)) !== _ && (I.state = null), m) : f;
      }
      var P, K, C = !0;
      function tt(I) {
        if (C) {
          var j;
          for (P = new o.Buf32(512), K = new o.Buf32(32), j = 0; j < 144; )
            I.lens[j++] = 8;
          for (; j < 256; )
            I.lens[j++] = 9;
          for (; j < 280; )
            I.lens[j++] = 7;
          for (; j < 288; )
            I.lens[j++] = 8;
          for (w(b, I.lens, 0, 288, P, 0, I.work, { bits: 9 }), j = 0; j < 32; )
            I.lens[j++] = 5;
          w(g, I.lens, 0, 32, K, 0, I.work, { bits: 5 }), C = !1;
        }
        I.lencode = P, I.lenbits = 9, I.distcode = K, I.distbits = 5;
      }
      function at(I, j, m, G) {
        var ut, V = I.state;
        return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new o.Buf8(V.wsize)), G >= V.wsize ? (o.arraySet(V.window, j, m - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (G < (ut = V.wsize - V.wnext) && (ut = G), o.arraySet(V.window, j, m - G, ut, V.wnext), (G -= ut) ? (o.arraySet(V.window, j, m - G, G, 0), V.wnext = G, V.whave = V.wsize) : (V.wnext += ut, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += ut))), 0;
      }
      a.inflateReset = N, a.inflateReset2 = O, a.inflateResetKeep = A, a.inflateInit = function(I) {
        return z(I, 15);
      }, a.inflateInit2 = z, a.inflate = function(I, j) {
        var m, G, ut, V, ft, Y, ct, L, R, Z, $, J, X, k, S, q, W, F, U, st, h, H, T, l, u = 0, v = new o.Buf8(4), D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!I || !I.state || !I.output || !I.input && I.avail_in !== 0)
          return f;
        (m = I.state).mode === 12 && (m.mode = 13), ft = I.next_out, ut = I.output, ct = I.avail_out, V = I.next_in, G = I.input, Y = I.avail_in, L = m.hold, R = m.bits, Z = Y, $ = ct, H = _;
        t:
          for (; ; )
            switch (m.mode) {
              case y:
                if (m.wrap === 0) {
                  m.mode = 13;
                  break;
                }
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (2 & m.wrap && L === 35615) {
                  v[m.check = 0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0), R = L = 0, m.mode = 2;
                  break;
                }
                if (m.flags = 0, m.head && (m.head.done = !1), !(1 & m.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                  I.msg = "incorrect header check", m.mode = 30;
                  break;
                }
                if ((15 & L) != 8) {
                  I.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (R -= 4, h = 8 + (15 & (L >>>= 4)), m.wbits === 0)
                  m.wbits = h;
                else if (h > m.wbits) {
                  I.msg = "invalid window size", m.mode = 30;
                  break;
                }
                m.dmax = 1 << h, I.adler = m.check = 1, m.mode = 512 & L ? 10 : 12, R = L = 0;
                break;
              case 2:
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (m.flags = L, (255 & m.flags) != 8) {
                  I.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (57344 & m.flags) {
                  I.msg = "unknown header flags set", m.mode = 30;
                  break;
                }
                m.head && (m.head.text = L >> 8 & 1), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0, m.mode = 3;
              case 3:
                for (; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                m.head && (m.head.time = L), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, v[2] = L >>> 16 & 255, v[3] = L >>> 24 & 255, m.check = n(m.check, v, 4, 0)), R = L = 0, m.mode = 4;
              case 4:
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                m.head && (m.head.xflags = 255 & L, m.head.os = L >> 8), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0, m.mode = 5;
              case 5:
                if (1024 & m.flags) {
                  for (; R < 16; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.length = L, m.head && (m.head.extra_len = L), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0;
                } else
                  m.head && (m.head.extra = null);
                m.mode = 6;
              case 6:
                if (1024 & m.flags && (Y < (J = m.length) && (J = Y), J && (m.head && (h = m.head.extra_len - m.length, m.head.extra || (m.head.extra = new Array(m.head.extra_len)), o.arraySet(m.head.extra, G, V, J, h)), 512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, m.length -= J), m.length))
                  break t;
                m.length = 0, m.mode = 7;
              case 7:
                if (2048 & m.flags) {
                  if (Y === 0)
                    break t;
                  for (J = 0; h = G[V + J++], m.head && h && m.length < 65536 && (m.head.name += String.fromCharCode(h)), h && J < Y; )
                    ;
                  if (512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, h)
                    break t;
                } else
                  m.head && (m.head.name = null);
                m.length = 0, m.mode = 8;
              case 8:
                if (4096 & m.flags) {
                  if (Y === 0)
                    break t;
                  for (J = 0; h = G[V + J++], m.head && h && m.length < 65536 && (m.head.comment += String.fromCharCode(h)), h && J < Y; )
                    ;
                  if (512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, h)
                    break t;
                } else
                  m.head && (m.head.comment = null);
                m.mode = 9;
              case 9:
                if (512 & m.flags) {
                  for (; R < 16; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (L !== (65535 & m.check)) {
                    I.msg = "header crc mismatch", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.head && (m.head.hcrc = m.flags >> 9 & 1, m.head.done = !0), I.adler = m.check = 0, m.mode = 12;
                break;
              case 10:
                for (; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                I.adler = m.check = p(L), R = L = 0, m.mode = 11;
              case 11:
                if (m.havedict === 0)
                  return I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, 2;
                I.adler = m.check = 1, m.mode = 12;
              case 12:
                if (j === 5 || j === 6)
                  break t;
              case 13:
                if (m.last) {
                  L >>>= 7 & R, R -= 7 & R, m.mode = 27;
                  break;
                }
                for (; R < 3; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                switch (m.last = 1 & L, R -= 1, 3 & (L >>>= 1)) {
                  case 0:
                    m.mode = 14;
                    break;
                  case 1:
                    if (tt(m), m.mode = 20, j !== 6)
                      break;
                    L >>>= 2, R -= 2;
                    break t;
                  case 2:
                    m.mode = 17;
                    break;
                  case 3:
                    I.msg = "invalid block type", m.mode = 30;
                }
                L >>>= 2, R -= 2;
                break;
              case 14:
                for (L >>>= 7 & R, R -= 7 & R; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if ((65535 & L) != (L >>> 16 ^ 65535)) {
                  I.msg = "invalid stored block lengths", m.mode = 30;
                  break;
                }
                if (m.length = 65535 & L, R = L = 0, m.mode = 15, j === 6)
                  break t;
              case 15:
                m.mode = 16;
              case 16:
                if (J = m.length) {
                  if (Y < J && (J = Y), ct < J && (J = ct), J === 0)
                    break t;
                  o.arraySet(ut, G, V, J, ft), Y -= J, V += J, ct -= J, ft += J, m.length -= J;
                  break;
                }
                m.mode = 12;
                break;
              case 17:
                for (; R < 14; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (m.nlen = 257 + (31 & L), L >>>= 5, R -= 5, m.ndist = 1 + (31 & L), L >>>= 5, R -= 5, m.ncode = 4 + (15 & L), L >>>= 4, R -= 4, 286 < m.nlen || 30 < m.ndist) {
                  I.msg = "too many length or distance symbols", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 18;
              case 18:
                for (; m.have < m.ncode; ) {
                  for (; R < 3; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.lens[D[m.have++]] = 7 & L, L >>>= 3, R -= 3;
                }
                for (; m.have < 19; )
                  m.lens[D[m.have++]] = 0;
                if (m.lencode = m.lendyn, m.lenbits = 7, T = { bits: m.lenbits }, H = w(0, m.lens, 0, 19, m.lencode, 0, m.work, T), m.lenbits = T.bits, H) {
                  I.msg = "invalid code lengths set", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 19;
              case 19:
                for (; m.have < m.nlen + m.ndist; ) {
                  for (; q = (u = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (W < 16)
                    L >>>= S, R -= S, m.lens[m.have++] = W;
                  else {
                    if (W === 16) {
                      for (l = S + 2; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      if (L >>>= S, R -= S, m.have === 0) {
                        I.msg = "invalid bit length repeat", m.mode = 30;
                        break;
                      }
                      h = m.lens[m.have - 1], J = 3 + (3 & L), L >>>= 2, R -= 2;
                    } else if (W === 17) {
                      for (l = S + 3; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      R -= S, h = 0, J = 3 + (7 & (L >>>= S)), L >>>= 3, R -= 3;
                    } else {
                      for (l = S + 7; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      R -= S, h = 0, J = 11 + (127 & (L >>>= S)), L >>>= 7, R -= 7;
                    }
                    if (m.have + J > m.nlen + m.ndist) {
                      I.msg = "invalid bit length repeat", m.mode = 30;
                      break;
                    }
                    for (; J--; )
                      m.lens[m.have++] = h;
                  }
                }
                if (m.mode === 30)
                  break;
                if (m.lens[256] === 0) {
                  I.msg = "invalid code -- missing end-of-block", m.mode = 30;
                  break;
                }
                if (m.lenbits = 9, T = { bits: m.lenbits }, H = w(b, m.lens, 0, m.nlen, m.lencode, 0, m.work, T), m.lenbits = T.bits, H) {
                  I.msg = "invalid literal/lengths set", m.mode = 30;
                  break;
                }
                if (m.distbits = 6, m.distcode = m.distdyn, T = { bits: m.distbits }, H = w(g, m.lens, m.nlen, m.ndist, m.distcode, 0, m.work, T), m.distbits = T.bits, H) {
                  I.msg = "invalid distances set", m.mode = 30;
                  break;
                }
                if (m.mode = 20, j === 6)
                  break t;
              case 20:
                m.mode = 21;
              case 21:
                if (6 <= Y && 258 <= ct) {
                  I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, c(I, $), ft = I.next_out, ut = I.output, ct = I.avail_out, V = I.next_in, G = I.input, Y = I.avail_in, L = m.hold, R = m.bits, m.mode === 12 && (m.back = -1);
                  break;
                }
                for (m.back = 0; q = (u = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (q && !(240 & q)) {
                  for (F = S, U = q, st = W; q = (u = m.lencode[st + ((L & (1 << F + U) - 1) >> F)]) >>> 16 & 255, W = 65535 & u, !(F + (S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  L >>>= F, R -= F, m.back += F;
                }
                if (L >>>= S, R -= S, m.back += S, m.length = W, q === 0) {
                  m.mode = 26;
                  break;
                }
                if (32 & q) {
                  m.back = -1, m.mode = 12;
                  break;
                }
                if (64 & q) {
                  I.msg = "invalid literal/length code", m.mode = 30;
                  break;
                }
                m.extra = 15 & q, m.mode = 22;
              case 22:
                if (m.extra) {
                  for (l = m.extra; R < l; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.length += L & (1 << m.extra) - 1, L >>>= m.extra, R -= m.extra, m.back += m.extra;
                }
                m.was = m.length, m.mode = 23;
              case 23:
                for (; q = (u = m.distcode[L & (1 << m.distbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (!(240 & q)) {
                  for (F = S, U = q, st = W; q = (u = m.distcode[st + ((L & (1 << F + U) - 1) >> F)]) >>> 16 & 255, W = 65535 & u, !(F + (S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  L >>>= F, R -= F, m.back += F;
                }
                if (L >>>= S, R -= S, m.back += S, 64 & q) {
                  I.msg = "invalid distance code", m.mode = 30;
                  break;
                }
                m.offset = W, m.extra = 15 & q, m.mode = 24;
              case 24:
                if (m.extra) {
                  for (l = m.extra; R < l; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.offset += L & (1 << m.extra) - 1, L >>>= m.extra, R -= m.extra, m.back += m.extra;
                }
                if (m.offset > m.dmax) {
                  I.msg = "invalid distance too far back", m.mode = 30;
                  break;
                }
                m.mode = 25;
              case 25:
                if (ct === 0)
                  break t;
                if (J = $ - ct, m.offset > J) {
                  if ((J = m.offset - J) > m.whave && m.sane) {
                    I.msg = "invalid distance too far back", m.mode = 30;
                    break;
                  }
                  X = J > m.wnext ? (J -= m.wnext, m.wsize - J) : m.wnext - J, J > m.length && (J = m.length), k = m.window;
                } else
                  k = ut, X = ft - m.offset, J = m.length;
                for (ct < J && (J = ct), ct -= J, m.length -= J; ut[ft++] = k[X++], --J; )
                  ;
                m.length === 0 && (m.mode = 21);
                break;
              case 26:
                if (ct === 0)
                  break t;
                ut[ft++] = m.length, ct--, m.mode = 21;
                break;
              case 27:
                if (m.wrap) {
                  for (; R < 32; ) {
                    if (Y === 0)
                      break t;
                    Y--, L |= G[V++] << R, R += 8;
                  }
                  if ($ -= ct, I.total_out += $, m.total += $, $ && (I.adler = m.check = m.flags ? n(m.check, ut, $, ft - $) : s(m.check, ut, $, ft - $)), $ = ct, (m.flags ? L : p(L)) !== m.check) {
                    I.msg = "incorrect data check", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.mode = 28;
              case 28:
                if (m.wrap && m.flags) {
                  for (; R < 32; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (L !== (4294967295 & m.total)) {
                    I.msg = "incorrect length check", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.mode = 29;
              case 29:
                H = 1;
                break t;
              case 30:
                H = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return f;
            }
        return I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, (m.wsize || $ !== I.avail_out && m.mode < 30 && (m.mode < 27 || j !== 4)) && at(I, I.output, I.next_out, $ - I.avail_out) ? (m.mode = 31, -4) : (Z -= I.avail_in, $ -= I.avail_out, I.total_in += Z, I.total_out += $, m.total += $, m.wrap && $ && (I.adler = m.check = m.flags ? n(m.check, ut, $, I.next_out - $) : s(m.check, ut, $, I.next_out - $)), I.data_type = m.bits + (m.last ? 64 : 0) + (m.mode === 12 ? 128 : 0) + (m.mode === 20 || m.mode === 15 ? 256 : 0), (Z == 0 && $ === 0 || j === 4) && H === _ && (H = -5), H);
      }, a.inflateEnd = function(I) {
        if (!I || !I.state)
          return f;
        var j = I.state;
        return j.window && (j.window = null), I.state = null, _;
      }, a.inflateGetHeader = function(I, j) {
        var m;
        return I && I.state && 2 & (m = I.state).wrap ? ((m.head = j).done = !1, _) : f;
      }, a.inflateSetDictionary = function(I, j) {
        var m, G = j.length;
        return I && I.state ? (m = I.state).wrap !== 0 && m.mode !== 11 ? f : m.mode === 11 && s(1, j, G, 0) !== m.check ? -3 : at(I, j, G, G) ? (m.mode = 31, -4) : (m.havedict = 1, _) : f;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, i, a) {
      var o = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], w = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      i.exports = function(b, g, _, f, y, d, x, p) {
        var E, A, N, O, z, P, K, C, tt, at = p.bits, I = 0, j = 0, m = 0, G = 0, ut = 0, V = 0, ft = 0, Y = 0, ct = 0, L = 0, R = null, Z = 0, $ = new o.Buf16(16), J = new o.Buf16(16), X = null, k = 0;
        for (I = 0; I <= 15; I++)
          $[I] = 0;
        for (j = 0; j < f; j++)
          $[g[_ + j]]++;
        for (ut = at, G = 15; 1 <= G && $[G] === 0; G--)
          ;
        if (G < ut && (ut = G), G === 0)
          return y[d++] = 20971520, y[d++] = 20971520, p.bits = 1, 0;
        for (m = 1; m < G && $[m] === 0; m++)
          ;
        for (ut < m && (ut = m), I = Y = 1; I <= 15; I++)
          if (Y <<= 1, (Y -= $[I]) < 0)
            return -1;
        if (0 < Y && (b === 0 || G !== 1))
          return -1;
        for (J[1] = 0, I = 1; I < 15; I++)
          J[I + 1] = J[I] + $[I];
        for (j = 0; j < f; j++)
          g[_ + j] !== 0 && (x[J[g[_ + j]]++] = j);
        if (P = b === 0 ? (R = X = x, 19) : b === 1 ? (R = s, Z -= 257, X = n, k -= 257, 256) : (R = c, X = w, -1), I = m, z = d, ft = j = L = 0, N = -1, O = (ct = 1 << (V = ut)) - 1, b === 1 && 852 < ct || b === 2 && 592 < ct)
          return 1;
        for (; ; ) {
          for (K = I - ft, tt = x[j] < P ? (C = 0, x[j]) : x[j] > P ? (C = X[k + x[j]], R[Z + x[j]]) : (C = 96, 0), E = 1 << I - ft, m = A = 1 << V; y[z + (L >> ft) + (A -= E)] = K << 24 | C << 16 | tt | 0, A !== 0; )
            ;
          for (E = 1 << I - 1; L & E; )
            E >>= 1;
          if (E !== 0 ? (L &= E - 1, L += E) : L = 0, j++, --$[I] == 0) {
            if (I === G)
              break;
            I = g[_ + x[j]];
          }
          if (ut < I && (L & O) !== N) {
            for (ft === 0 && (ft = ut), z += m, Y = 1 << (V = I - ft); V + ft < G && !((Y -= $[V + ft]) <= 0); )
              V++, Y <<= 1;
            if (ct += 1 << V, b === 1 && 852 < ct || b === 2 && 592 < ct)
              return 1;
            y[N = L & O] = ut << 24 | V << 16 | z - d | 0;
          }
        }
        return L !== 0 && (y[z + L] = I - ft << 24 | 64 << 16 | 0), p.bits = ut, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, i, a) {
      i.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, i, a) {
      var o = r("../utils/common"), s = 0, n = 1;
      function c(u) {
        for (var v = u.length; 0 <= --v; )
          u[v] = 0;
      }
      var w = 0, b = 29, g = 256, _ = g + 1 + b, f = 30, y = 19, d = 2 * _ + 1, x = 15, p = 16, E = 7, A = 256, N = 16, O = 17, z = 18, P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], K = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], tt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], at = new Array(2 * (_ + 2));
      c(at);
      var I = new Array(2 * f);
      c(I);
      var j = new Array(512);
      c(j);
      var m = new Array(256);
      c(m);
      var G = new Array(b);
      c(G);
      var ut, V, ft, Y = new Array(f);
      function ct(u, v, D, M, B) {
        this.static_tree = u, this.extra_bits = v, this.extra_base = D, this.elems = M, this.max_length = B, this.has_stree = u && u.length;
      }
      function L(u, v) {
        this.dyn_tree = u, this.max_code = 0, this.stat_desc = v;
      }
      function R(u) {
        return u < 256 ? j[u] : j[256 + (u >>> 7)];
      }
      function Z(u, v) {
        u.pending_buf[u.pending++] = 255 & v, u.pending_buf[u.pending++] = v >>> 8 & 255;
      }
      function $(u, v, D) {
        u.bi_valid > p - D ? (u.bi_buf |= v << u.bi_valid & 65535, Z(u, u.bi_buf), u.bi_buf = v >> p - u.bi_valid, u.bi_valid += D - p) : (u.bi_buf |= v << u.bi_valid & 65535, u.bi_valid += D);
      }
      function J(u, v, D) {
        $(u, D[2 * v], D[2 * v + 1]);
      }
      function X(u, v) {
        for (var D = 0; D |= 1 & u, u >>>= 1, D <<= 1, 0 < --v; )
          ;
        return D >>> 1;
      }
      function k(u, v, D) {
        var M, B, Q = new Array(x + 1), rt = 0;
        for (M = 1; M <= x; M++)
          Q[M] = rt = rt + D[M - 1] << 1;
        for (B = 0; B <= v; B++) {
          var et = u[2 * B + 1];
          et !== 0 && (u[2 * B] = X(Q[et]++, et));
        }
      }
      function S(u) {
        var v;
        for (v = 0; v < _; v++)
          u.dyn_ltree[2 * v] = 0;
        for (v = 0; v < f; v++)
          u.dyn_dtree[2 * v] = 0;
        for (v = 0; v < y; v++)
          u.bl_tree[2 * v] = 0;
        u.dyn_ltree[2 * A] = 1, u.opt_len = u.static_len = 0, u.last_lit = u.matches = 0;
      }
      function q(u) {
        8 < u.bi_valid ? Z(u, u.bi_buf) : 0 < u.bi_valid && (u.pending_buf[u.pending++] = u.bi_buf), u.bi_buf = 0, u.bi_valid = 0;
      }
      function W(u, v, D, M) {
        var B = 2 * v, Q = 2 * D;
        return u[B] < u[Q] || u[B] === u[Q] && M[v] <= M[D];
      }
      function F(u, v, D) {
        for (var M = u.heap[D], B = D << 1; B <= u.heap_len && (B < u.heap_len && W(v, u.heap[B + 1], u.heap[B], u.depth) && B++, !W(v, M, u.heap[B], u.depth)); )
          u.heap[D] = u.heap[B], D = B, B <<= 1;
        u.heap[D] = M;
      }
      function U(u, v, D) {
        var M, B, Q, rt, et = 0;
        if (u.last_lit !== 0)
          for (; M = u.pending_buf[u.d_buf + 2 * et] << 8 | u.pending_buf[u.d_buf + 2 * et + 1], B = u.pending_buf[u.l_buf + et], et++, M === 0 ? J(u, B, v) : (J(u, (Q = m[B]) + g + 1, v), (rt = P[Q]) !== 0 && $(u, B -= G[Q], rt), J(u, Q = R(--M), D), (rt = K[Q]) !== 0 && $(u, M -= Y[Q], rt)), et < u.last_lit; )
            ;
        J(u, A, v);
      }
      function st(u, v) {
        var D, M, B, Q = v.dyn_tree, rt = v.stat_desc.static_tree, et = v.stat_desc.has_stree, lt = v.stat_desc.elems, dt = -1;
        for (u.heap_len = 0, u.heap_max = d, D = 0; D < lt; D++)
          Q[2 * D] !== 0 ? (u.heap[++u.heap_len] = dt = D, u.depth[D] = 0) : Q[2 * D + 1] = 0;
        for (; u.heap_len < 2; )
          Q[2 * (B = u.heap[++u.heap_len] = dt < 2 ? ++dt : 0)] = 1, u.depth[B] = 0, u.opt_len--, et && (u.static_len -= rt[2 * B + 1]);
        for (v.max_code = dt, D = u.heap_len >> 1; 1 <= D; D--)
          F(u, Q, D);
        for (B = lt; D = u.heap[1], u.heap[1] = u.heap[u.heap_len--], F(u, Q, 1), M = u.heap[1], u.heap[--u.heap_max] = D, u.heap[--u.heap_max] = M, Q[2 * B] = Q[2 * D] + Q[2 * M], u.depth[B] = (u.depth[D] >= u.depth[M] ? u.depth[D] : u.depth[M]) + 1, Q[2 * D + 1] = Q[2 * M + 1] = B, u.heap[1] = B++, F(u, Q, 1), 2 <= u.heap_len; )
          ;
        u.heap[--u.heap_max] = u.heap[1], function(pt, xt) {
          var Ht, Ct, Jt, vt, oe, Ee, Bt = xt.dyn_tree, Je = xt.max_code, Zr = xt.stat_desc.static_tree, Xr = xt.stat_desc.has_stree, Yr = xt.stat_desc.extra_bits, Qe = xt.stat_desc.extra_base, Qt = xt.stat_desc.max_length, le = 0;
          for (vt = 0; vt <= x; vt++)
            pt.bl_count[vt] = 0;
          for (Bt[2 * pt.heap[pt.heap_max] + 1] = 0, Ht = pt.heap_max + 1; Ht < d; Ht++)
            Qt < (vt = Bt[2 * Bt[2 * (Ct = pt.heap[Ht]) + 1] + 1] + 1) && (vt = Qt, le++), Bt[2 * Ct + 1] = vt, Je < Ct || (pt.bl_count[vt]++, oe = 0, Qe <= Ct && (oe = Yr[Ct - Qe]), Ee = Bt[2 * Ct], pt.opt_len += Ee * (vt + oe), Xr && (pt.static_len += Ee * (Zr[2 * Ct + 1] + oe)));
          if (le !== 0) {
            do {
              for (vt = Qt - 1; pt.bl_count[vt] === 0; )
                vt--;
              pt.bl_count[vt]--, pt.bl_count[vt + 1] += 2, pt.bl_count[Qt]--, le -= 2;
            } while (0 < le);
            for (vt = Qt; vt !== 0; vt--)
              for (Ct = pt.bl_count[vt]; Ct !== 0; )
                Je < (Jt = pt.heap[--Ht]) || (Bt[2 * Jt + 1] !== vt && (pt.opt_len += (vt - Bt[2 * Jt + 1]) * Bt[2 * Jt], Bt[2 * Jt + 1] = vt), Ct--);
          }
        }(u, v), k(Q, dt, u.bl_count);
      }
      function h(u, v, D) {
        var M, B, Q = -1, rt = v[1], et = 0, lt = 7, dt = 4;
        for (rt === 0 && (lt = 138, dt = 3), v[2 * (D + 1) + 1] = 65535, M = 0; M <= D; M++)
          B = rt, rt = v[2 * (M + 1) + 1], ++et < lt && B === rt || (et < dt ? u.bl_tree[2 * B] += et : B !== 0 ? (B !== Q && u.bl_tree[2 * B]++, u.bl_tree[2 * N]++) : et <= 10 ? u.bl_tree[2 * O]++ : u.bl_tree[2 * z]++, Q = B, dt = (et = 0) === rt ? (lt = 138, 3) : B === rt ? (lt = 6, 3) : (lt = 7, 4));
      }
      function H(u, v, D) {
        var M, B, Q = -1, rt = v[1], et = 0, lt = 7, dt = 4;
        for (rt === 0 && (lt = 138, dt = 3), M = 0; M <= D; M++)
          if (B = rt, rt = v[2 * (M + 1) + 1], !(++et < lt && B === rt)) {
            if (et < dt)
              for (; J(u, B, u.bl_tree), --et != 0; )
                ;
            else
              B !== 0 ? (B !== Q && (J(u, B, u.bl_tree), et--), J(u, N, u.bl_tree), $(u, et - 3, 2)) : et <= 10 ? (J(u, O, u.bl_tree), $(u, et - 3, 3)) : (J(u, z, u.bl_tree), $(u, et - 11, 7));
            Q = B, dt = (et = 0) === rt ? (lt = 138, 3) : B === rt ? (lt = 6, 3) : (lt = 7, 4);
          }
      }
      c(Y);
      var T = !1;
      function l(u, v, D, M) {
        $(u, (w << 1) + (M ? 1 : 0), 3), function(B, Q, rt, et) {
          q(B), et && (Z(B, rt), Z(B, ~rt)), o.arraySet(B.pending_buf, B.window, Q, rt, B.pending), B.pending += rt;
        }(u, v, D, !0);
      }
      a._tr_init = function(u) {
        T || (function() {
          var v, D, M, B, Q, rt = new Array(x + 1);
          for (B = M = 0; B < b - 1; B++)
            for (G[B] = M, v = 0; v < 1 << P[B]; v++)
              m[M++] = B;
          for (m[M - 1] = B, B = Q = 0; B < 16; B++)
            for (Y[B] = Q, v = 0; v < 1 << K[B]; v++)
              j[Q++] = B;
          for (Q >>= 7; B < f; B++)
            for (Y[B] = Q << 7, v = 0; v < 1 << K[B] - 7; v++)
              j[256 + Q++] = B;
          for (D = 0; D <= x; D++)
            rt[D] = 0;
          for (v = 0; v <= 143; )
            at[2 * v + 1] = 8, v++, rt[8]++;
          for (; v <= 255; )
            at[2 * v + 1] = 9, v++, rt[9]++;
          for (; v <= 279; )
            at[2 * v + 1] = 7, v++, rt[7]++;
          for (; v <= 287; )
            at[2 * v + 1] = 8, v++, rt[8]++;
          for (k(at, _ + 1, rt), v = 0; v < f; v++)
            I[2 * v + 1] = 5, I[2 * v] = X(v, 5);
          ut = new ct(at, P, g + 1, _, x), V = new ct(I, K, 0, f, x), ft = new ct(new Array(0), C, 0, y, E);
        }(), T = !0), u.l_desc = new L(u.dyn_ltree, ut), u.d_desc = new L(u.dyn_dtree, V), u.bl_desc = new L(u.bl_tree, ft), u.bi_buf = 0, u.bi_valid = 0, S(u);
      }, a._tr_stored_block = l, a._tr_flush_block = function(u, v, D, M) {
        var B, Q, rt = 0;
        0 < u.level ? (u.strm.data_type === 2 && (u.strm.data_type = function(et) {
          var lt, dt = 4093624447;
          for (lt = 0; lt <= 31; lt++, dt >>>= 1)
            if (1 & dt && et.dyn_ltree[2 * lt] !== 0)
              return s;
          if (et.dyn_ltree[18] !== 0 || et.dyn_ltree[20] !== 0 || et.dyn_ltree[26] !== 0)
            return n;
          for (lt = 32; lt < g; lt++)
            if (et.dyn_ltree[2 * lt] !== 0)
              return n;
          return s;
        }(u)), st(u, u.l_desc), st(u, u.d_desc), rt = function(et) {
          var lt;
          for (h(et, et.dyn_ltree, et.l_desc.max_code), h(et, et.dyn_dtree, et.d_desc.max_code), st(et, et.bl_desc), lt = y - 1; 3 <= lt && et.bl_tree[2 * tt[lt] + 1] === 0; lt--)
            ;
          return et.opt_len += 3 * (lt + 1) + 5 + 5 + 4, lt;
        }(u), B = u.opt_len + 3 + 7 >>> 3, (Q = u.static_len + 3 + 7 >>> 3) <= B && (B = Q)) : B = Q = D + 5, D + 4 <= B && v !== -1 ? l(u, v, D, M) : u.strategy === 4 || Q === B ? ($(u, 2 + (M ? 1 : 0), 3), U(u, at, I)) : ($(u, 4 + (M ? 1 : 0), 3), function(et, lt, dt, pt) {
          var xt;
          for ($(et, lt - 257, 5), $(et, dt - 1, 5), $(et, pt - 4, 4), xt = 0; xt < pt; xt++)
            $(et, et.bl_tree[2 * tt[xt] + 1], 3);
          H(et, et.dyn_ltree, lt - 1), H(et, et.dyn_dtree, dt - 1);
        }(u, u.l_desc.max_code + 1, u.d_desc.max_code + 1, rt + 1), U(u, u.dyn_ltree, u.dyn_dtree)), S(u), M && q(u);
      }, a._tr_tally = function(u, v, D) {
        return u.pending_buf[u.d_buf + 2 * u.last_lit] = v >>> 8 & 255, u.pending_buf[u.d_buf + 2 * u.last_lit + 1] = 255 & v, u.pending_buf[u.l_buf + u.last_lit] = 255 & D, u.last_lit++, v === 0 ? u.dyn_ltree[2 * D]++ : (u.matches++, v--, u.dyn_ltree[2 * (m[D] + g + 1)]++, u.dyn_dtree[2 * R(v)]++), u.last_lit === u.lit_bufsize - 1;
      }, a._tr_align = function(u) {
        $(u, 2, 3), J(u, A, at), function(v) {
          v.bi_valid === 16 ? (Z(v, v.bi_buf), v.bi_buf = 0, v.bi_valid = 0) : 8 <= v.bi_valid && (v.pending_buf[v.pending++] = 255 & v.bi_buf, v.bi_buf >>= 8, v.bi_valid -= 8);
        }(u);
      };
    }, { "../utils/common": 41 }], 53: [function(r, i, a) {
      i.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, i, a) {
      (function(o) {
        (function(s, n) {
          if (!s.setImmediate) {
            var c, w, b, g, _ = 1, f = {}, y = !1, d = s.document, x = Object.getPrototypeOf && Object.getPrototypeOf(s);
            x = x && x.setTimeout ? x : s, c = {}.toString.call(s.process) === "[object process]" ? function(N) {
              bt.nextTick(function() {
                E(N);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var N = !0, O = s.onmessage;
                return s.onmessage = function() {
                  N = !1;
                }, s.postMessage("", "*"), s.onmessage = O, N;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", A, !1) : s.attachEvent("onmessage", A), function(N) {
              s.postMessage(g + N, "*");
            }) : s.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(N) {
              E(N.data);
            }, function(N) {
              b.port2.postMessage(N);
            }) : d && "onreadystatechange" in d.createElement("script") ? (w = d.documentElement, function(N) {
              var O = d.createElement("script");
              O.onreadystatechange = function() {
                E(N), O.onreadystatechange = null, w.removeChild(O), O = null;
              }, w.appendChild(O);
            }) : function(N) {
              setTimeout(E, 0, N);
            }, x.setImmediate = function(N) {
              typeof N != "function" && (N = new Function("" + N));
              for (var O = new Array(arguments.length - 1), z = 0; z < O.length; z++)
                O[z] = arguments[z + 1];
              var P = { callback: N, args: O };
              return f[_] = P, c(_), _++;
            }, x.clearImmediate = p;
          }
          function p(N) {
            delete f[N];
          }
          function E(N) {
            if (y)
              setTimeout(E, 0, N);
            else {
              var O = f[N];
              if (O) {
                y = !0;
                try {
                  (function(z) {
                    var P = z.callback, K = z.args;
                    switch (K.length) {
                      case 0:
                        P();
                        break;
                      case 1:
                        P(K[0]);
                        break;
                      case 2:
                        P(K[0], K[1]);
                        break;
                      case 3:
                        P(K[0], K[1], K[2]);
                        break;
                      default:
                        P.apply(n, K);
                    }
                  })(O);
                } finally {
                  p(N), y = !1;
                }
              }
            }
          }
          function A(N) {
            N.source === s && typeof N.data == "string" && N.data.indexOf(g) === 0 && E(+N.data.slice(g.length));
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Do);
var cp = Do.exports;
const hp = /* @__PURE__ */ Ea(cp);
var Pr = { exports: {} }, fp = {
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;"
};
function dp(e) {
  return e && e.replace ? e.replace(/([&"<>'])/g, function(t, r) {
    return fp[r];
  }) : e;
}
var pp = dp, pi = pp, Js = xi.Stream, mp = "    ";
function gp(e, t) {
  typeof t != "object" && (t = {
    indent: t
  });
  var r = t.stream ? new Js() : null, i = "", a = !1, o = t.indent ? t.indent === !0 ? mp : t.indent : "", s = !0;
  function n(_) {
    s ? bt.nextTick(_) : _();
  }
  function c(_, f) {
    if (f !== void 0 && (i += f), _ && !a && (r = r || new Js(), a = !0), _ && a) {
      var y = i;
      n(function() {
        r.emit("data", y);
      }), i = "";
    }
  }
  function w(_, f) {
    Ui(c, Mr(_, o, o ? 1 : 0), f);
  }
  function b() {
    if (r) {
      var _ = i;
      n(function() {
        r.emit("data", _), r.emit("end"), r.readable = !1, r.emit("close");
      });
    }
  }
  function g(_) {
    var f = _.encoding || "UTF-8", y = { version: "1.0", encoding: f };
    _.standalone && (y.standalone = _.standalone), w({ "?xml": { _attr: y } }), i = i.replace("/>", "?>");
  }
  return n(function() {
    s = !1;
  }), t.declaration && g(t.declaration), e && e.forEach ? e.forEach(function(_, f) {
    var y;
    f + 1 === e.length && (y = b), w(_, y);
  }) : w(e, b), r ? (r.readable = !0, r) : i;
}
function wp() {
  var e = Array.prototype.slice.call(arguments), t = {
    _elem: Mr(e)
  };
  return t.push = function(r) {
    if (!this.append)
      throw new Error("not assigned to a parent!");
    var i = this, a = this._elem.indent;
    Ui(
      this.append,
      Mr(
        r,
        a,
        this._elem.icount + (a ? 1 : 0)
      ),
      function() {
        i.append(!0);
      }
    );
  }, t.close = function(r) {
    r !== void 0 && this.push(r), this.end && this.end();
  }, t;
}
function yp(e, t) {
  return new Array(t || 0).join(e || "");
}
function Mr(e, t, r) {
  r = r || 0;
  var i = yp(t, r), a, o = e, s = !1;
  if (typeof e == "object") {
    var n = Object.keys(e);
    if (a = n[0], o = e[a], o && o._elem)
      return o._elem.name = a, o._elem.icount = r, o._elem.indent = t, o._elem.indents = i, o._elem.interrupt = o, o._elem;
  }
  var c = [], w = [], b;
  function g(_) {
    var f = Object.keys(_);
    f.forEach(function(y) {
      c.push(vp(y, _[y]));
    });
  }
  switch (typeof o) {
    case "object":
      if (o === null)
        break;
      o._attr && g(o._attr), o._cdata && w.push(
        ("<![CDATA[" + o._cdata).replace(/\]\]>/g, "]]]]><![CDATA[>") + "]]>"
      ), o.forEach && (b = !1, w.push(""), o.forEach(function(_) {
        if (typeof _ == "object") {
          var f = Object.keys(_)[0];
          f == "_attr" ? g(_._attr) : w.push(Mr(
            _,
            t,
            r + 1
          ));
        } else
          w.pop(), b = !0, w.push(pi(_));
      }), b || w.push(""));
      break;
    default:
      w.push(pi(o));
  }
  return {
    name: a,
    interrupt: s,
    attributes: c,
    content: w,
    icount: r,
    indents: i,
    indent: t
  };
}
function Ui(e, t, r) {
  if (typeof t != "object")
    return e(!1, t);
  var i = t.interrupt ? 1 : t.content.length;
  function a() {
    for (; t.content.length; ) {
      var s = t.content.shift();
      if (s !== void 0) {
        if (o(s))
          return;
        Ui(e, s);
      }
    }
    e(!1, (i > 1 ? t.indents : "") + (t.name ? "</" + t.name + ">" : "") + (t.indent && !r ? `
` : "")), r && r();
  }
  function o(s) {
    return s.interrupt ? (s.interrupt.append = e, s.interrupt.end = a, s.interrupt = !1, e(!0), !0) : !1;
  }
  if (e(!1, t.indents + (t.name ? "<" + t.name : "") + (t.attributes.length ? " " + t.attributes.join(" ") : "") + (i ? t.name ? ">" : "" : t.name ? "/>" : "") + (t.indent && i > 1 ? `
` : "")), !i)
    return e(!1, t.indent ? `
` : "");
  o(t) || a();
}
function vp(e, t) {
  return e + '="' + pi(t) + '"';
}
Pr.exports = gp;
Pr.exports.element = Pr.exports.Element = wp;
var bp = Pr.exports;
const Rt = /* @__PURE__ */ Ea(bp), Qs = 0, ta = 32, _p = 32, Ep = (e, t) => {
  const r = t.replace(/-/g, "");
  if (r.length !== _p)
    throw new Error(`Error: Cannot extract GUID from font filename: ${t}`);
  const a = r.replace(/(..)/g, "$1 ").trim().split(" ").map((c) => parseInt(c, 16));
  a.reverse();
  const s = e.slice(Qs, ta).map((c, w) => c ^ a[w % a.length]);
  return Buffer.concat([e.slice(0, Qs), s, e.slice(ta)]);
};
class xp {
  // tslint:disable-next-line: no-object-literal-type-assertion
  format(t, r = { stack: [] }) {
    const i = t.prepForXml(r);
    if (i)
      return i;
    throw Error("XMLComponent did not format correctly");
  }
}
class Tp {
  replace(t, r, i) {
    let a = t;
    return r.forEach((o, s) => {
      a = a.replace(new RegExp(`{${o.fileName}}`, "g"), (i + s).toString());
    }), a;
  }
  getMediaData(t, r) {
    return r.Array.filter((i) => t.search(`{${i.fileName}}`) > 0);
  }
}
class Ap {
  replace(t, r) {
    let i = t;
    for (const a of r)
      i = i.replace(
        new RegExp(`{${a.reference}-${a.instance}}`, "g"),
        a.numId.toString()
      );
    return i;
  }
}
class Sp {
  constructor() {
    it(this, "formatter"), it(this, "imageReplacer"), it(this, "numberingReplacer"), this.formatter = new xp(), this.imageReplacer = new Tp(), this.numberingReplacer = new Ap();
  }
  compile(t, r) {
    const i = new hp(), a = this.xmlifyFile(t, r), o = new Map(Object.entries(a));
    for (const [, s] of o)
      if (Array.isArray(s))
        for (const n of s)
          i.file(n.path, n.data);
      else
        i.file(s.path, s.data);
    for (const s of t.Media.Array)
      s.type !== "svg" ? i.file(`word/media/${s.fileName}`, s.data) : (i.file(`word/media/${s.fileName}`, s.data), i.file(`word/media/${s.fallback.fileName}`, s.fallback.data));
    for (const { data: s, name: n, fontKey: c } of t.FontTable.fontOptionsWithKey) {
      const [w] = n.split(".");
      i.file(`word/fonts/${w}.odttf`, Ep(s, c));
    }
    return i;
  }
  xmlifyFile(t, r) {
    const i = t.Document.Relationships.RelationshipCount + 1, a = Rt(
      this.formatter.format(t.Document.View, {
        viewWrapper: t.Document,
        file: t,
        stack: []
      }),
      {
        indent: r,
        declaration: {
          standalone: "yes",
          encoding: "UTF-8"
        }
      }
    ), o = this.imageReplacer.getMediaData(a, t.Media);
    return {
      Relationships: {
        data: (() => (o.forEach((s, n) => {
          t.Document.Relationships.createRelationship(
            i + n,
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
            `media/${s.fileName}`
          );
        }), Rt(
          this.formatter.format(t.Document.Relationships, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        )))(),
        path: "word/_rels/document.xml.rels"
      },
      Document: {
        data: (() => {
          const s = this.imageReplacer.replace(a, o, i);
          return this.numberingReplacer.replace(s, t.Numbering.ConcreteNumbering);
        })(),
        path: "word/document.xml"
      },
      Styles: {
        data: (() => {
          const s = Rt(
            this.formatter.format(t.Styles, {
              viewWrapper: t.Document,
              file: t,
              stack: []
            }),
            {
              indent: r,
              declaration: {
                standalone: "yes",
                encoding: "UTF-8"
              }
            }
          );
          return this.numberingReplacer.replace(s, t.Numbering.ConcreteNumbering);
        })(),
        path: "word/styles.xml"
      },
      Properties: {
        data: Rt(
          this.formatter.format(t.CoreProperties, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "docProps/core.xml"
      },
      Numbering: {
        data: Rt(
          this.formatter.format(t.Numbering, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/numbering.xml"
      },
      FileRelationships: {
        data: Rt(
          this.formatter.format(t.FileRelationships, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ),
        path: "_rels/.rels"
      },
      HeaderRelationships: t.Headers.map((s, n) => {
        const c = Rt(
          this.formatter.format(s.View, {
            viewWrapper: s,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        );
        return this.imageReplacer.getMediaData(c, t.Media).forEach((b, g) => {
          s.Relationships.createRelationship(
            g,
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
            `media/${b.fileName}`
          );
        }), {
          data: Rt(
            this.formatter.format(s.Relationships, {
              viewWrapper: s,
              file: t,
              stack: []
            }),
            {
              indent: r,
              declaration: {
                encoding: "UTF-8"
              }
            }
          ),
          path: `word/_rels/header${n + 1}.xml.rels`
        };
      }),
      FooterRelationships: t.Footers.map((s, n) => {
        const c = Rt(
          this.formatter.format(s.View, {
            viewWrapper: s,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        );
        return this.imageReplacer.getMediaData(c, t.Media).forEach((b, g) => {
          s.Relationships.createRelationship(
            g,
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
            `media/${b.fileName}`
          );
        }), {
          data: Rt(
            this.formatter.format(s.Relationships, {
              viewWrapper: s,
              file: t,
              stack: []
            }),
            {
              indent: r,
              declaration: {
                encoding: "UTF-8"
              }
            }
          ),
          path: `word/_rels/footer${n + 1}.xml.rels`
        };
      }),
      Headers: t.Headers.map((s, n) => {
        const c = Rt(
          this.formatter.format(s.View, {
            viewWrapper: s,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ), w = this.imageReplacer.getMediaData(c, t.Media), b = this.imageReplacer.replace(c, w, 0);
        return {
          data: this.numberingReplacer.replace(b, t.Numbering.ConcreteNumbering),
          path: `word/header${n + 1}.xml`
        };
      }),
      Footers: t.Footers.map((s, n) => {
        const c = Rt(
          this.formatter.format(s.View, {
            viewWrapper: s,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ), w = this.imageReplacer.getMediaData(c, t.Media), b = this.imageReplacer.replace(c, w, 0);
        return {
          data: this.numberingReplacer.replace(b, t.Numbering.ConcreteNumbering),
          path: `word/footer${n + 1}.xml`
        };
      }),
      ContentTypes: {
        data: Rt(
          this.formatter.format(t.ContentTypes, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ),
        path: "[Content_Types].xml"
      },
      CustomProperties: {
        data: Rt(
          this.formatter.format(t.CustomProperties, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "docProps/custom.xml"
      },
      AppProperties: {
        data: Rt(
          this.formatter.format(t.AppProperties, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "docProps/app.xml"
      },
      FootNotes: {
        data: Rt(
          this.formatter.format(t.FootNotes.View, {
            viewWrapper: t.FootNotes,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/footnotes.xml"
      },
      FootNotesRelationships: {
        data: Rt(
          this.formatter.format(t.FootNotes.Relationships, {
            viewWrapper: t.FootNotes,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/_rels/footnotes.xml.rels"
      },
      Settings: {
        data: Rt(
          this.formatter.format(t.Settings, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/settings.xml"
      },
      Comments: {
        data: Rt(
          this.formatter.format(t.Comments, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/comments.xml"
      },
      FontTable: {
        data: Rt(
          this.formatter.format(t.FontTable.View, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }
        ),
        path: "word/fontTable.xml"
      },
      FontTableRelationships: {
        data: (() => Rt(
          this.formatter.format(t.FontTable.Relationships, {
            viewWrapper: t.Document,
            file: t,
            stack: []
          }),
          {
            indent: r,
            declaration: {
              encoding: "UTF-8"
            }
          }
        ))(),
        path: "word/_rels/fontTable.xml.rels"
      }
    };
  }
}
const kp = {
  NONE: "",
  WITH_2_BLANKS: "  ",
  WITH_4_BLANKS: "    ",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WITH_TAB: "	"
}, ir = (e) => e === !0 ? kp.WITH_2_BLANKS : e === !1 ? void 0 : e;
class Fo {
  static toString(t, r) {
    return yr(this, null, function* () {
      return yield this.compiler.compile(t, ir(r)).generateAsync({
        type: "string",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE"
      });
    });
  }
  static toBuffer(t, r) {
    return yr(this, null, function* () {
      return yield this.compiler.compile(t, ir(r)).generateAsync({
        type: "nodebuffer",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE"
      });
    });
  }
  static toBase64String(t, r) {
    return yr(this, null, function* () {
      return yield this.compiler.compile(t, ir(r)).generateAsync({
        type: "base64",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE"
      });
    });
  }
  static toBlob(t, r) {
    return yr(this, null, function* () {
      return yield this.compiler.compile(t, ir(r)).generateAsync({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE"
      });
    });
  }
  static toStream(t, r) {
    const i = new xi.Stream();
    return this.compiler.compile(t, ir(r)).generateAsync({
      type: "nodebuffer",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      compression: "DEFLATE"
    }).then((o) => {
      i.emit("data", o), i.emit("end");
    }), i;
  }
}
it(Fo, "compiler", new Sp());
function Ip(e) {
  return new Promise((t, r) => {
    const i = new Image();
    i.onload = () => t(i), i.onerror = r, i.src = e;
  });
}
function Cp(e, t) {
  const r = document.createElement("a");
  r.href = window.URL.createObjectURL(e), r.download = t, r.style.display = "none", document.body.append(r), r.click(), r.remove(), window.URL.revokeObjectURL(r.href);
}
function jt(e) {
  if (!e)
    return 0;
  const t = parseFloat(e);
  return Number.isFinite(t) ? t : 0;
}
const ea = /* @__PURE__ */ new Map();
function zi(e, t) {
  const r = `${e}-${t}`, i = ea.get(r);
  if (i)
    return i;
  let a = { ascent: t * 0.86, descent: t * 0.14 };
  try {
    const o = document.createElement("canvas").getContext("2d");
    if (o) {
      o.font = `${t}px ${e || "sans-serif"}`;
      const s = o.measureText("中");
      s.actualBoundingBoxAscent && s.actualBoundingBoxDescent && (a = {
        ascent: s.actualBoundingBoxAscent,
        descent: s.actualBoundingBoxDescent
      });
    }
  } catch {
  }
  return ea.set(r, a), a;
}
const ra = /* @__PURE__ */ new Map();
function Rp(e, t, r) {
  const i = `${e}-${t}-${r}`, a = ra.get(i);
  if (a !== void 0)
    return a;
  let o = r.length * t;
  try {
    const s = document.createElement("canvas").getContext("2d");
    s && (s.font = `${t}px ${e || "sans-serif"}`, o = s.measureText(r).width || o);
  } catch {
  }
  return ra.set(i, o), o;
}
const Np = {
  [Xt.FIRST]: Oe.HEADING_1,
  [Xt.SECOND]: Oe.HEADING_2,
  [Xt.THIRD]: Oe.HEADING_3,
  [Xt.FOURTH]: Oe.HEADING_4,
  [Xt.FIFTH]: Oe.HEADING_5,
  [Xt.SIXTH]: Oe.HEADING_6
}, Op = 794, Bp = 1123, Dp = [
  100,
  120,
  100,
  120
];
function Zt(e) {
  return Math.round(e * 15);
}
function na(e) {
  return Math.round(e * 9525);
}
function Ir(e) {
  switch (e) {
    case ee.LEFT:
      return Gt.LEFT;
    case ee.CENTER:
      return Gt.CENTER;
    case ee.RIGHT:
      return Gt.RIGHT;
    case ee.ALIGNMENT:
      return Gt.JUSTIFIED;
    default:
      return;
  }
}
function Fp(e) {
  switch (e) {
    case je.TOP:
      return qn.TOP;
    case je.MIDDLE:
      return qn.CENTER;
    case je.BOTTOM:
      return qn.BOTTOM;
    default:
      return;
  }
}
function Lp(e) {
  const t = { style: ke.SINGLE, size: 1, color: "#000000" }, r = { style: ke.NIL, size: 0, color: "#000000" };
  switch (e) {
    case Jr.ALL:
      return {
        top: t,
        bottom: t,
        left: t,
        right: t,
        insideHorizontal: t,
        insideVertical: t
      };
    case Jr.EXTERNAL:
      return {
        top: t,
        bottom: t,
        left: t,
        right: t,
        insideHorizontal: r,
        insideVertical: r
      };
    case Jr.EMPTY:
      return {
        top: r,
        bottom: r,
        left: r,
        right: r,
        insideHorizontal: r,
        insideVertical: r
      };
    default:
      return;
  }
}
const Lo = "#9C9B9B";
let $r = 16, Po = 1, Mo = 8;
const mi = /* @__PURE__ */ new Map();
function Uo(e) {
  const t = e.match(/^data:image\/(png|jpg|jpeg|gif|bmp);base64,/i);
  if (t) {
    const r = t[1].toLowerCase();
    return r === "jpeg" ? "jpg" : r;
  }
  return "png";
}
function gi(e) {
  return e.replace(/^data:image\/[^;]+;base64,/, "");
}
async function Pp(e, t, r) {
  try {
    const i = URL.createObjectURL(new Blob([e], { type: "image/svg+xml;charset=utf-8" }));
    try {
      const a = await Ip(i), o = t || a.naturalWidth || 100, s = r || a.naturalHeight || 30, n = document.createElement("canvas");
      n.width = o, n.height = s;
      const c = n.getContext("2d");
      return c ? (c.drawImage(a, 0, 0, o, s), n.toDataURL("image/png")) : void 0;
    } finally {
      URL.revokeObjectURL(i);
    }
  } catch {
    return;
  }
}
async function Cr(e) {
  var t, r;
  if (e.type === gt.IMAGE) {
    const i = e.imgDisplay === Me.FLOAT_BOTTOM, a = i || e.imgDisplay === Me.FLOAT_TOP, o = e.imgFloatPosition;
    return new hi({
      type: Uo(e.value),
      data: gi(e.value),
      transformation: {
        width: e.width,
        height: e.height
      },
      // 浮动图片：衬于文字下方/浮于文字上方时按页面坐标绝对定位
      floating: a && o ? {
        horizontalPosition: {
          relative: Di.PAGE,
          offset: na(o.x)
        },
        verticalPosition: {
          relative: Fi.PAGE,
          offset: na(o.y)
        },
        behindDocument: i,
        allowOverlap: !0,
        wrap: { type: ze.NONE }
      } : void 0
    });
  }
  if (e.type === gt.HYPERLINK)
    return new xo({
      children: [
        new qt({
          text: (t = e.valueList) == null ? void 0 : t.map((i) => i.value).join(""),
          style: "Hyperlink"
        })
      ],
      link: e.url
    });
  if (e.type === gt.TAB)
    return new qt({
      children: [new Eh()]
    });
  if (e.type === gt.LATEX) {
    if (e.laTexSVG) {
      const i = await Pp(e.laTexSVG, e.width, e.height);
      if (i)
        return new hi({
          type: "png",
          data: gi(i),
          transformation: {
            width: e.width || 100,
            height: e.height || 30
          }
        });
    }
    return new mf({ children: [new wf(e.value)] });
  }
  if (e.type === gt.PAGE_BREAK)
    return new Ah();
  if (e.type === gt.CHECKBOX)
    return new di({
      checked: !!((r = e.checkbox) != null && r.value)
    });
  if (e.controlComponent === "placeholder")
    return new qt({
      text: e.value || "",
      color: Lo
    });
  if (e.controlComponent === "checkbox" || e.controlComponent === "radio") {
    const i = e.control, a = (i == null ? void 0 : i.valueSets) || [], o = mi.get(e.controlId || "") || 0;
    mi.set(e.controlId || "", o + 1);
    const s = a[o], n = s ? String((i == null ? void 0 : i.code) || "").split(",").includes(s.code) : !1;
    return new di({ checked: n });
  }
  return new qt({
    font: e.font,
    text: e.value,
    bold: e.bold,
    size: Math.round((e.size || $r) * 1.5),
    color: Br(e.color).hex() || "#000000",
    italics: e.italic,
    strike: e.strikeout,
    shading: e.highlight ? { fill: Br(e.highlight).hex() } : void 0,
    superScript: e.type === gt.SUPERSCRIPT,
    subScript: e.type === gt.SUBSCRIPT,
    underline: e.underline ? {} : void 0
  });
}
async function Mp(e) {
  const t = e.control;
  if (!t)
    return [];
  const r = [], i = t.prefix ?? "{", a = t.postfix ?? "}", o = t.valueSets || [], s = t.underline === !0, n = e.size || $r;
  if ((t.type === "checkbox" || t.type === "radio") && o.length) {
    const w = String(t.code || "").split(",");
    for (const b of o)
      r.push(new di({
        checked: t.type === "radio" ? t.code === b.code : w.includes(b.code)
      })), r.push(new qt({ text: b.value }));
    return r;
  }
  r.push(new qt({ text: i }));
  const c = t.value || [];
  if (c.length)
    for (const w of c) {
      const b = await Cr(s ? { ...w, underline: !0 } : w);
      r.push(b);
    }
  else if (t.placeholder)
    r.push(new qt({
      text: t.placeholder,
      color: Lo,
      ...s ? { underline: {} } : {}
    }));
  else if (s) {
    const w = t.minWidth || 0, b = w ? Math.ceil(w / (n / 2)) : 0;
    b > 0 && r.push(new qt({
      text: " ".repeat(b),
      ...s ? { underline: {} } : {}
    }));
  }
  return r.push(new qt({ text: a })), r;
}
async function Rr(e) {
  var s, n, c, w;
  const t = [];
  let r = [], i, a;
  function o() {
    r.length && (t.push(new Wt({
      alignment: i,
      spacing: a,
      children: r
    })), r = [], i = void 0, a = void 0);
  }
  for (let b = 0; b < e.length; b++) {
    const g = e[b];
    if (g.type === gt.TITLE)
      o(), t.push(new Wt({
        heading: Np[g.level],
        alignment: Ir(g.rowFlex),
        spacing: Yn(g),
        children: g.valueList ? await Promise.all(g.valueList.map((_) => Cr(_))) : []
      }));
    else if (g.type === gt.LIST) {
      o();
      const _ = ((s = g.valueList) == null ? void 0 : s.map((f) => f.value).join("").split(`
`).filter((f, y) => y !== 0 || f !== "").map((f, y) => new Wt({
        alignment: Ir(g.rowFlex),
        spacing: Yn(g),
        children: [
          new qt({
            text: `${!g.listStyle || g.listStyle === ti.DECIMAL ? `${y + 1}. ` : "• "}${f}`
          })
        ]
      }))) || [];
      t.push(..._);
    } else if (g.type === gt.TABLE) {
      o();
      const { trList: _, colgroup: f, borderType: y } = g, d = [], x = f == null ? void 0 : f.map((p) => Zt(p.width));
      for (let p = 0; p < _.length; p++) {
        const E = _[p], A = E.tdList, N = [];
        for (let O = 0; O < A.length; O++) {
          const z = A[O];
          N.push(new Mi({
            columnSpan: z.colspan,
            rowSpan: z.rowspan,
            shading: z.backgroundColor ? { fill: Br(z.backgroundColor).hex() } : void 0,
            verticalAlign: Fp(z.verticalAlign),
            width: z.width ? { size: Zt(z.width), type: hr.DXA } : void 0,
            children: z.value ? await Rr(z.value) : []
          }));
        }
        d.push(new Lf({
          height: E.height ? { value: Zt(E.height), rule: Of.ATLEAST } : void 0,
          children: N
        }));
      }
      t.push(new Nf({
        rows: d,
        width: {
          size: "100%",
          type: hr.PERCENTAGE
        },
        columnWidths: x,
        borders: Lp(y)
      }));
    } else if (g.type === gt.SEPARATOR)
      o(), t.push(new Wt({
        border: {
          bottom: {
            color: g.color || "#000000",
            space: 1,
            style: (n = g.dashArray) != null && n.length ? ke.DASHED : ke.SINGLE,
            size: 6
          }
        },
        spacing: { after: 0, before: 0 },
        children: []
      }));
    else if (g.type === gt.DATE)
      r.push(...await Promise.all((g.valueList || []).map((_) => Cr(_))));
    else {
      if (g.type === gt.CONTROL && g.control) {
        r.push(...await Mp(g));
        continue;
      }
      const _ = (c = e[b - 1]) == null ? void 0 : c.controlId;
      _ && _ !== g.controlId && o();
      const f = g.value ?? "";
      if (/^\n/.test(f)) {
        const N = !!((w = e[b - 1]) != null && w.controlId);
        if (o(), g.value = f.replace(/^\n/, ""), N && !g.value)
          continue;
      }
      const y = e[b + 1], d = y == null ? void 0 : y.type, E = (d !== void 0 && [
        gt.TITLE,
        gt.LIST,
        gt.TABLE,
        gt.SEPARATOR
      ].includes(d) ? g.value.replace(/\n$/, "") : g.value).split(`
`);
      let A = -1;
      for (let N = 0; N < E.length; N++)
        E[N] && (A = N);
      for (let N = 0; N < E.length; N++) {
        const O = E[N];
        N > 0 && o();
        const z = g.controlComponent === "checkbox" || g.controlComponent === "radio" || g.type === gt.CHECKBOX;
        (O || N === 0 && z || N < A) && (r.length === 0 && (i = Ir(g.rowFlex), a = Yn(g)), r.push(await Cr({ ...g, value: O })));
      }
    }
  }
  return r.length && t.push(new Wt({
    alignment: i,
    spacing: a,
    children: r
  })), t;
}
function ia(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Up(e, t, r) {
  var x, p;
  const i = (E) => oo.fromXmlString(E).root[0] ?? new Wt({ children: [] });
  if (e.type === "image" && e.data) {
    const E = String(e.data);
    return [
      new Wt({
        children: [
          new hi({
            type: Uo(E),
            data: gi(E),
            transformation: {
              width: e.width || 300,
              height: e.height || 300
            },
            floating: {
              horizontalPosition: {
                relative: Di.PAGE,
                align: "center"
              },
              verticalPosition: {
                relative: Fi.PAGE,
                align: "center"
              },
              behindDocument: e.layer !== "top",
              allowOverlap: !0,
              wrap: { type: ze.NONE }
            }
          })
        ]
      })
    ];
  }
  const a = ia(String(e.data || ""));
  if (!a)
    return [];
  const o = e.color || "#AEB5C0", s = e.opacity !== void 0 ? e.opacity : 0.3, n = ia(String(e.font || "Microsoft YaHei")), c = e.size || 200, w = Rp(String(e.font || "Microsoft YaHei"), c, String(e.data || "")), { ascent: b, descent: g } = zi(String(e.font || "Microsoft YaHei"), c), _ = b + g, f = Math.round(w * 1.15 * 0.75), y = Math.round(_ * 1.4 * 0.75), d = (E) => `<w:p><w:pPr><w:rPr><w:noProof/></w:rPr></w:pPr><w:r><w:rPr><w:noProof/></w:rPr><w:pict><v:shapetype id="_x0000_t136" coordsize="21600,21600" o:spt="136" adj="10800" path="m@7,l@8,m@5,21600l@6,21600e"><v:formulas><v:f eqn="sum #0 0 10800"/><v:f eqn="prod #0 2 1"/><v:f eqn="sum 21600 0 @1"/><v:f eqn="sum 0 0 @2"/><v:f eqn="sum 21600 0 @3"/><v:f eqn="if @0 @3 0"/><v:f eqn="if @0 21600 @1"/><v:f eqn="if @0 0 @2"/><v:f eqn="if @0 @4 21600"/><v:f eqn="mid @5 @6"/><v:f eqn="mid @8 @5"/><v:f eqn="mid @7 @8"/><v:f eqn="mid @6 @7"/><v:f eqn="sum @6 0 @5"/></v:formulas><v:path textpathok="t" o:connecttype="custom" o:connectlocs="@9,0;@10,10800;@11,21600;@12,10800" o:connectangles="270,180,90,0"/><v:textpath on="t" fitshape="t"/></v:shapetype><v:shape id="PowerPlusWaterMarkObject${Math.round(Math.random() * 1e6)}" o:spid="_x0000_s2049" type="#_x0000_t136" style="position:absolute;${E}width:${f}pt;height:${y}pt;rotation:315;z-index:-251654144;mso-wrap-edited:f;" o:allowincell="f" fillcolor="${o}" stroked="f"><v:fill opacity="${s}"/><v:textpath style="font-family:'${n}';font-size:1pt" string="${a}"/></v:shape></w:pict></w:r></w:p>`;
  if (e.repeat) {
    const E = Math.sqrt(w * w + _ * _), A = E + (((x = e.gap) == null ? void 0 : x[0]) ?? 10) * 2, N = E + (((p = e.gap) == null ? void 0 : p[1]) ?? 10) * 2, O = [], z = Math.max(1, Math.ceil(t / (A * 0.75))), P = Math.max(1, Math.ceil(r / (N * 0.75)));
    for (let K = 0; K < P; K++)
      for (let C = 0; C < z; C++) {
        const tt = Math.round(C * A * 0.75), at = Math.round(K * N * 0.75);
        O.push(d(`margin-left:${tt}pt;margin-top:${at}pt;mso-position-horizontal-relative:page;mso-position-vertical-relative:page;`));
      }
    return O.map((K) => i(K));
  }
  return [
    i(d("margin-left:0;margin-top:0;mso-position-horizontal:center;mso-position-horizontal-relative:margin;mso-position-vertical:center;mso-position-vertical-relative:margin;"))
  ];
}
function Yn(e) {
  const t = e.size || $r;
  let r = 1;
  t < 12 ? r = t / 12 : t > 30 && (r = 1 + (t - 30) / 30);
  const i = Mo * r * (e.rowMargin ?? Po), { ascent: a, descent: o } = zi(e.font, t), s = a + o + i * 2;
  return {
    line: Zt(s),
    lineRule: Fr.AT_LEAST,
    before: 0,
    after: 0
  };
}
function zp(e) {
  return async function(t) {
    mi.clear();
    const { fileName: r, toc: i, download: a = !0 } = t, { data: { header: o, main: s, footer: n }, options: c } = e.command.getValue();
    $r = c.defaultSize || 16, Po = c.defaultRowMargin || 1, Mo = c.defaultBasicRowMarginHeight || 8;
    const w = await Rr(s || []);
    i && w.unshift(new ap("目录", {
      hyperlink: !0,
      headingStyleRange: "1-6"
    }));
    const { width: b, height: g, margins: _, paperDirection: f, pageNumber: y } = c, d = b || Op, x = g || Bp, p = _ || Dp, E = f === Ko.HORIZONTAL, A = await Rr(o || []), N = await Rr(n || []);
    if (y && !y.disabled) {
      const tt = (y.format || "{pageNo}").split(/(\{pageNo\}|\{pageCount\})/).filter((at) => !!at);
      tt.length && N.push(new Wt({
        alignment: Ir(y.rowFlex),
        children: [
          new qt({
            font: y.font,
            size: Math.round((y.size || 12) * 1.5),
            color: y.color ? Br(y.color).hex() : void 0,
            children: tt.map((at) => at === "{pageNo}" ? Ue.CURRENT : at === "{pageCount}" ? Ue.TOTAL_PAGES : at)
          })
        ]
      }));
    }
    const O = (y == null ? void 0 : y.numberType) === qo.CHINESE, z = y == null ? void 0 : y.startPageNo, P = O || z !== void 0 && z !== 1 ? {
      formatType: O ? Wu.CHINESE_COUNTING : void 0,
      start: z !== void 0 && z !== 1 ? z : void 0
    } : void 0, K = new ip({
      sections: [
        {
          properties: {
            page: {
              size: {
                width: Zt(E ? x : d),
                height: Zt(E ? d : x),
                orientation: E ? Lr.LANDSCAPE : Lr.PORTRAIT
              },
              margin: {
                top: Zt(p[0]),
                right: Zt(p[1]),
                bottom: Zt(p[2]),
                left: Zt(p[3])
              },
              pageNumbers: P
            }
          },
          headers: {
            default: new op({
              children: [
                ...Up(c.watermark || {}, Zt(E ? x : d) / 20, Zt(E ? d : x) / 20),
                ...A
              ]
            })
          },
          footers: {
            default: new lp({
              children: N
            })
          },
          children: w
        }
      ]
    }), C = await Fo.toBlob(K);
    return a && Cp(C, `${r}.docx`), C;
  };
}
function Tr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zo = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(i, a, o) {
      function s(w, b) {
        if (!a[w]) {
          if (!i[w]) {
            var g = typeof Tr == "function" && Tr;
            if (!b && g)
              return g(w, !0);
            if (n)
              return n(w, !0);
            var _ = new Error("Cannot find module '" + w + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var f = a[w] = { exports: {} };
          i[w][0].call(f.exports, function(y) {
            var d = i[w][1][y];
            return s(d || y);
          }, f, f.exports, r, i, a, o);
        }
        return a[w].exports;
      }
      for (var n = typeof Tr == "function" && Tr, c = 0; c < o.length; c++)
        s(o[c]);
      return s;
    }({ 1: [function(r, i, a) {
      var o = r("./utils"), s = r("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.encode = function(c) {
        for (var w, b, g, _, f, y, d, x = [], p = 0, E = c.length, A = E, N = o.getTypeOf(c) !== "string"; p < c.length; )
          A = E - p, g = N ? (w = c[p++], b = p < E ? c[p++] : 0, p < E ? c[p++] : 0) : (w = c.charCodeAt(p++), b = p < E ? c.charCodeAt(p++) : 0, p < E ? c.charCodeAt(p++) : 0), _ = w >> 2, f = (3 & w) << 4 | b >> 4, y = 1 < A ? (15 & b) << 2 | g >> 6 : 64, d = 2 < A ? 63 & g : 64, x.push(n.charAt(_) + n.charAt(f) + n.charAt(y) + n.charAt(d));
        return x.join("");
      }, a.decode = function(c) {
        var w, b, g, _, f, y, d = 0, x = 0, p = "data:";
        if (c.substr(0, p.length) === p)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var E, A = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (c.charAt(c.length - 1) === n.charAt(64) && A--, c.charAt(c.length - 2) === n.charAt(64) && A--, A % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (E = s.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); d < c.length; )
          w = n.indexOf(c.charAt(d++)) << 2 | (_ = n.indexOf(c.charAt(d++))) >> 4, b = (15 & _) << 4 | (f = n.indexOf(c.charAt(d++))) >> 2, g = (3 & f) << 6 | (y = n.indexOf(c.charAt(d++))), E[x++] = w, f !== 64 && (E[x++] = b), y !== 64 && (E[x++] = g);
        return E;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, i, a) {
      var o = r("./external"), s = r("./stream/DataWorker"), n = r("./stream/Crc32Probe"), c = r("./stream/DataLengthProbe");
      function w(b, g, _, f, y) {
        this.compressedSize = b, this.uncompressedSize = g, this.crc32 = _, this.compression = f, this.compressedContent = y;
      }
      w.prototype = { getContentWorker: function() {
        var b = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), g = this;
        return b.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), b;
      }, getCompressedWorker: function() {
        return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, w.createWorkerFrom = function(b, g, _) {
        return b.pipe(new n()).pipe(new c("uncompressedSize")).pipe(g.compressWorker(_)).pipe(new c("compressedSize")).withStreamInfo("compression", g);
      }, i.exports = w;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, i, a) {
      var o = r("./stream/GenericWorker");
      a.STORE = { magic: "\0\0", compressWorker: function() {
        return new o("STORE compression");
      }, uncompressWorker: function() {
        return new o("STORE decompression");
      } }, a.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, i, a) {
      var o = r("./utils"), s = function() {
        for (var n, c = [], w = 0; w < 256; w++) {
          n = w;
          for (var b = 0; b < 8; b++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          c[w] = n;
        }
        return c;
      }();
      i.exports = function(n, c) {
        return n !== void 0 && n.length ? o.getTypeOf(n) !== "string" ? function(w, b, g, _) {
          var f = s, y = _ + g;
          w ^= -1;
          for (var d = _; d < y; d++)
            w = w >>> 8 ^ f[255 & (w ^ b[d])];
          return -1 ^ w;
        }(0 | c, n, n.length, 0) : function(w, b, g, _) {
          var f = s, y = _ + g;
          w ^= -1;
          for (var d = _; d < y; d++)
            w = w >>> 8 ^ f[255 & (w ^ b.charCodeAt(d))];
          return -1 ^ w;
        }(0 | c, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, i, a) {
      a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
    }, {}], 6: [function(r, i, a) {
      var o = null;
      o = typeof Promise < "u" ? Promise : r("lie"), i.exports = { Promise: o };
    }, { lie: 37 }], 7: [function(r, i, a) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), n = r("./utils"), c = r("./stream/GenericWorker"), w = o ? "uint8array" : "array";
      function b(g, _) {
        c.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = _, this.meta = {};
      }
      a.magic = "\b\0", n.inherits(b, c), b.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(w, g.data), !1);
      }, b.prototype.flush = function() {
        c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, b.prototype.cleanUp = function() {
        c.prototype.cleanUp.call(this), this._pako = null;
      }, b.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(_) {
          g.push({ data: _, meta: g.meta });
        };
      }, a.compressWorker = function(g) {
        return new b("Deflate", g);
      }, a.uncompressWorker = function() {
        return new b("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, i, a) {
      function o(f, y) {
        var d, x = "";
        for (d = 0; d < y; d++)
          x += String.fromCharCode(255 & f), f >>>= 8;
        return x;
      }
      function s(f, y, d, x, p, E) {
        var A, N, O = f.file, z = f.compression, P = E !== w.utf8encode, K = n.transformTo("string", E(O.name)), C = n.transformTo("string", w.utf8encode(O.name)), tt = O.comment, at = n.transformTo("string", E(tt)), I = n.transformTo("string", w.utf8encode(tt)), j = C.length !== O.name.length, m = I.length !== tt.length, G = "", ut = "", V = "", ft = O.dir, Y = O.date, ct = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !d || (ct.crc32 = f.crc32, ct.compressedSize = f.compressedSize, ct.uncompressedSize = f.uncompressedSize);
        var L = 0;
        y && (L |= 8), P || !j && !m || (L |= 2048);
        var R = 0, Z = 0;
        ft && (R |= 16), p === "UNIX" ? (Z = 798, R |= function(J, X) {
          var k = J;
          return J || (k = X ? 16893 : 33204), (65535 & k) << 16;
        }(O.unixPermissions, ft)) : (Z = 20, R |= function(J) {
          return 63 & (J || 0);
        }(O.dosPermissions)), A = Y.getUTCHours(), A <<= 6, A |= Y.getUTCMinutes(), A <<= 5, A |= Y.getUTCSeconds() / 2, N = Y.getUTCFullYear() - 1980, N <<= 4, N |= Y.getUTCMonth() + 1, N <<= 5, N |= Y.getUTCDate(), j && (ut = o(1, 1) + o(b(K), 4) + C, G += "up" + o(ut.length, 2) + ut), m && (V = o(1, 1) + o(b(at), 4) + I, G += "uc" + o(V.length, 2) + V);
        var $ = "";
        return $ += `
\0`, $ += o(L, 2), $ += z.magic, $ += o(A, 2), $ += o(N, 2), $ += o(ct.crc32, 4), $ += o(ct.compressedSize, 4), $ += o(ct.uncompressedSize, 4), $ += o(K.length, 2), $ += o(G.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + $ + K + G, dirRecord: g.CENTRAL_FILE_HEADER + o(Z, 2) + $ + o(at.length, 2) + "\0\0\0\0" + o(R, 4) + o(x, 4) + K + G + at };
      }
      var n = r("../utils"), c = r("../stream/GenericWorker"), w = r("../utf8"), b = r("../crc32"), g = r("../signature");
      function _(f, y, d, x) {
        c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = d, this.encodeFileName = x, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(_, c), _.prototype.push = function(f) {
        var y = f.meta.percent || 0, d = this.entriesCount, x = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, c.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: d ? (y + 100 * (d - x - 1)) / d : 100 } }));
      }, _.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var y = this.streamFiles && !f.file.dir;
        if (y) {
          var d = s(f, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: d.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, _.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var y = this.streamFiles && !f.file.dir, d = s(f, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(d.dirRecord), y)
          this.push({ data: function(x) {
            return g.DATA_DESCRIPTOR + o(x.crc32, 4) + o(x.compressedSize, 4) + o(x.uncompressedSize, 4);
          }(f), meta: { percent: 100 } });
        else
          for (this.push({ data: d.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, _.prototype.flush = function() {
        for (var f = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
          this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var d = this.bytesWritten - f, x = function(p, E, A, N, O) {
          var z = n.transformTo("string", O(N));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(p, 2) + o(p, 2) + o(E, 4) + o(A, 4) + o(z.length, 2) + z;
        }(this.dirRecords.length, d, f, this.zipComment, this.encodeFileName);
        this.push({ data: x, meta: { percent: 100 } });
      }, _.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, _.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var y = this;
        return f.on("data", function(d) {
          y.processChunk(d);
        }), f.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), f.on("error", function(d) {
          y.error(d);
        }), this;
      }, _.prototype.resume = function() {
        return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, _.prototype.error = function(f) {
        var y = this._sources;
        if (!c.prototype.error.call(this, f))
          return !1;
        for (var d = 0; d < y.length; d++)
          try {
            y[d].error(f);
          } catch {
          }
        return !0;
      }, _.prototype.lock = function() {
        c.prototype.lock.call(this);
        for (var f = this._sources, y = 0; y < f.length; y++)
          f[y].lock();
      }, i.exports = _;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, i, a) {
      var o = r("../compressions"), s = r("./ZipFileWorker");
      a.generateWorker = function(n, c, w) {
        var b = new s(c.streamFiles, w, c.platform, c.encodeFileName), g = 0;
        try {
          n.forEach(function(_, f) {
            g++;
            var y = function(E, A) {
              var N = E || A, O = o[N];
              if (!O)
                throw new Error(N + " is not a valid compression method !");
              return O;
            }(f.options.compression, c.compression), d = f.options.compressionOptions || c.compressionOptions || {}, x = f.dir, p = f.date;
            f._compressWorker(y, d).withStreamInfo("file", { name: _, dir: x, date: p, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(b);
          }), b.entriesCount = g;
        } catch (_) {
          b.error(_);
        }
        return b;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, i, a) {
      function o() {
        if (!(this instanceof o))
          return new o();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new o();
          for (var n in this)
            typeof this[n] != "function" && (s[n] = this[n]);
          return s;
        };
      }
      (o.prototype = r("./object")).loadAsync = r("./load"), o.support = r("./support"), o.defaults = r("./defaults"), o.version = "3.10.1", o.loadAsync = function(s, n) {
        return new o().loadAsync(s, n);
      }, o.external = r("./external"), i.exports = o;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, i, a) {
      var o = r("./utils"), s = r("./external"), n = r("./utf8"), c = r("./zipEntries"), w = r("./stream/Crc32Probe"), b = r("./nodejsUtils");
      function g(_) {
        return new s.Promise(function(f, y) {
          var d = _.decompressed.getContentWorker().pipe(new w());
          d.on("error", function(x) {
            y(x);
          }).on("end", function() {
            d.streamInfo.crc32 !== _.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      i.exports = function(_, f) {
        var y = this;
        return f = o.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), b.isNode && b.isStream(_) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(d) {
          var x = new c(f);
          return x.load(d), x;
        }).then(function(d) {
          var x = [s.Promise.resolve(d)], p = d.files;
          if (f.checkCRC32)
            for (var E = 0; E < p.length; E++)
              x.push(g(p[E]));
          return s.Promise.all(x);
        }).then(function(d) {
          for (var x = d.shift(), p = x.files, E = 0; E < p.length; E++) {
            var A = p[E], N = A.fileNameStr, O = o.resolve(A.fileNameStr);
            y.file(O, A.decompressed, { binary: !0, optimizedBinaryString: !0, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: f.createFolders }), A.dir || (y.file(O).unsafeOriginalName = N);
          }
          return x.zipComment.length && (y.comment = x.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, i, a) {
      var o = r("../utils"), s = r("../stream/GenericWorker");
      function n(c, w) {
        s.call(this, "Nodejs stream input adapter for " + c), this._upstreamEnded = !1, this._bindStream(w);
      }
      o.inherits(n, s), n.prototype._bindStream = function(c) {
        var w = this;
        (this._stream = c).pause(), c.on("data", function(b) {
          w.push({ data: b, meta: { percent: 0 } });
        }).on("error", function(b) {
          w.isPaused ? this.generatedError = b : w.error(b);
        }).on("end", function() {
          w.isPaused ? w._upstreamEnded = !0 : w.end();
        });
      }, n.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, i.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, i, a) {
      var o = r("readable-stream").Readable;
      function s(n, c, w) {
        o.call(this, c), this._helper = n;
        var b = this;
        n.on("data", function(g, _) {
          b.push(g) || b._helper.pause(), w && w(_);
        }).on("error", function(g) {
          b.emit("error", g);
        }).on("end", function() {
          b.push(null);
        });
      }
      r("../utils").inherits(s, o), s.prototype._read = function() {
        this._helper.resume();
      }, i.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, i, a) {
      i.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(o, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(o, s);
        if (typeof o == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(o, s);
      }, allocBuffer: function(o) {
        if (Buffer.alloc)
          return Buffer.alloc(o);
        var s = new Buffer(o);
        return s.fill(0), s;
      }, isBuffer: function(o) {
        return Buffer.isBuffer(o);
      }, isStream: function(o) {
        return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function";
      } };
    }, {}], 15: [function(r, i, a) {
      function o(O, z, P) {
        var K, C = n.getTypeOf(z), tt = n.extend(P || {}, b);
        tt.date = tt.date || /* @__PURE__ */ new Date(), tt.compression !== null && (tt.compression = tt.compression.toUpperCase()), typeof tt.unixPermissions == "string" && (tt.unixPermissions = parseInt(tt.unixPermissions, 8)), tt.unixPermissions && 16384 & tt.unixPermissions && (tt.dir = !0), tt.dosPermissions && 16 & tt.dosPermissions && (tt.dir = !0), tt.dir && (O = p(O)), tt.createFolders && (K = x(O)) && E.call(this, K, !0);
        var at = C === "string" && tt.binary === !1 && tt.base64 === !1;
        P && P.binary !== void 0 || (tt.binary = !at), (z instanceof g && z.uncompressedSize === 0 || tt.dir || !z || z.length === 0) && (tt.base64 = !1, tt.binary = !0, z = "", tt.compression = "STORE", C = "string");
        var I = null;
        I = z instanceof g || z instanceof c ? z : y.isNode && y.isStream(z) ? new d(O, z) : n.prepareContent(O, z, tt.binary, tt.optimizedBinaryString, tt.base64);
        var j = new _(O, I, tt);
        this.files[O] = j;
      }
      var s = r("./utf8"), n = r("./utils"), c = r("./stream/GenericWorker"), w = r("./stream/StreamHelper"), b = r("./defaults"), g = r("./compressedObject"), _ = r("./zipObject"), f = r("./generate"), y = r("./nodejsUtils"), d = r("./nodejs/NodejsStreamInputAdapter"), x = function(O) {
        O.slice(-1) === "/" && (O = O.substring(0, O.length - 1));
        var z = O.lastIndexOf("/");
        return 0 < z ? O.substring(0, z) : "";
      }, p = function(O) {
        return O.slice(-1) !== "/" && (O += "/"), O;
      }, E = function(O, z) {
        return z = z !== void 0 ? z : b.createFolders, O = p(O), this.files[O] || o.call(this, O, null, { dir: !0, createFolders: z }), this.files[O];
      };
      function A(O) {
        return Object.prototype.toString.call(O) === "[object RegExp]";
      }
      var N = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(O) {
        var z, P, K;
        for (z in this.files)
          K = this.files[z], (P = z.slice(this.root.length, z.length)) && z.slice(0, this.root.length) === this.root && O(P, K);
      }, filter: function(O) {
        var z = [];
        return this.forEach(function(P, K) {
          O(P, K) && z.push(K);
        }), z;
      }, file: function(O, z, P) {
        if (arguments.length !== 1)
          return O = this.root + O, o.call(this, O, z, P), this;
        if (A(O)) {
          var K = O;
          return this.filter(function(tt, at) {
            return !at.dir && K.test(tt);
          });
        }
        var C = this.files[this.root + O];
        return C && !C.dir ? C : null;
      }, folder: function(O) {
        if (!O)
          return this;
        if (A(O))
          return this.filter(function(C, tt) {
            return tt.dir && O.test(C);
          });
        var z = this.root + O, P = E.call(this, z), K = this.clone();
        return K.root = P.name, K;
      }, remove: function(O) {
        O = this.root + O;
        var z = this.files[O];
        if (z || (O.slice(-1) !== "/" && (O += "/"), z = this.files[O]), z && !z.dir)
          delete this.files[O];
        else
          for (var P = this.filter(function(C, tt) {
            return tt.name.slice(0, O.length) === O;
          }), K = 0; K < P.length; K++)
            delete this.files[P[K].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(O) {
        var z, P = {};
        try {
          if ((P = n.extend(O || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type)
            throw new Error("No output type specified.");
          n.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
          var K = P.comment || this.comment || "";
          z = f.generateWorker(this, P, K);
        } catch (C) {
          (z = new c("error")).error(C);
        }
        return new w(z, P.type || "string", P.mimeType);
      }, generateAsync: function(O, z) {
        return this.generateInternalStream(O).accumulate(z);
      }, generateNodeStream: function(O, z) {
        return (O = O || {}).type || (O.type = "nodebuffer"), this.generateInternalStream(O).toNodejsStream(z);
      } };
      i.exports = N;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, i, a) {
      i.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, i, a) {
      var o = r("./DataReader");
      function s(n) {
        o.call(this, n);
        for (var c = 0; c < this.data.length; c++)
          n[c] = 255 & n[c];
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, s.prototype.lastIndexOfSignature = function(n) {
        for (var c = n.charCodeAt(0), w = n.charCodeAt(1), b = n.charCodeAt(2), g = n.charCodeAt(3), _ = this.length - 4; 0 <= _; --_)
          if (this.data[_] === c && this.data[_ + 1] === w && this.data[_ + 2] === b && this.data[_ + 3] === g)
            return _ - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(n) {
        var c = n.charCodeAt(0), w = n.charCodeAt(1), b = n.charCodeAt(2), g = n.charCodeAt(3), _ = this.readData(4);
        return c === _[0] && w === _[1] && b === _[2] && g === _[3];
      }, s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, i, a) {
      var o = r("../utils");
      function s(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(n) {
        this.checkIndex(this.index + n);
      }, checkIndex: function(n) {
        if (this.length < this.zero + n || n < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
      }, setIndex: function(n) {
        this.checkIndex(n), this.index = n;
      }, skip: function(n) {
        this.setIndex(this.index + n);
      }, byteAt: function() {
      }, readInt: function(n) {
        var c, w = 0;
        for (this.checkOffset(n), c = this.index + n - 1; c >= this.index; c--)
          w = (w << 8) + this.byteAt(c);
        return this.index += n, w;
      }, readString: function(n) {
        return o.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, i.exports = s;
    }, { "../utils": 32 }], 19: [function(r, i, a) {
      var o = r("./Uint8ArrayReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(n) {
        this.checkOffset(n);
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, i, a) {
      var o = r("./DataReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, s.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, s.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, s.prototype.readData = function(n) {
        this.checkOffset(n);
        var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, i, a) {
      var o = r("./ArrayReader");
      function s(n) {
        o.call(this, n);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var c = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, c;
      }, i.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, i, a) {
      var o = r("../utils"), s = r("../support"), n = r("./ArrayReader"), c = r("./StringReader"), w = r("./NodeBufferReader"), b = r("./Uint8ArrayReader");
      i.exports = function(g) {
        var _ = o.getTypeOf(g);
        return o.checkSupport(_), _ !== "string" || s.uint8array ? _ === "nodebuffer" ? new w(g) : s.uint8array ? new b(o.transformTo("uint8array", g)) : new n(o.transformTo("array", g)) : new c(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, i, a) {
      a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, i, a) {
      var o = r("./GenericWorker"), s = r("../utils");
      function n(c) {
        o.call(this, "ConvertWorker to " + c), this.destType = c;
      }
      s.inherits(n, o), n.prototype.processChunk = function(c) {
        this.push({ data: s.transformTo(this.destType, c.data), meta: c.meta });
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, i, a) {
      var o = r("./GenericWorker"), s = r("../crc32");
      function n() {
        o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(n, o), n.prototype.processChunk = function(c) {
        this.streamInfo.crc32 = s(c.data, this.streamInfo.crc32 || 0), this.push(c);
      }, i.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, i, a) {
      var o = r("../utils"), s = r("./GenericWorker");
      function n(c) {
        s.call(this, "DataLengthProbe for " + c), this.propName = c, this.withStreamInfo(c, 0);
      }
      o.inherits(n, s), n.prototype.processChunk = function(c) {
        if (c) {
          var w = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = w + c.data.length;
        }
        s.prototype.processChunk.call(this, c);
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, i, a) {
      var o = r("../utils"), s = r("./GenericWorker");
      function n(c) {
        s.call(this, "DataWorker");
        var w = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, c.then(function(b) {
          w.dataIsReady = !0, w.data = b, w.max = b && b.length || 0, w.type = o.getTypeOf(b), w.isPaused || w._tickAndRepeat();
        }, function(b) {
          w.error(b);
        });
      }
      o.inherits(n, s), n.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var c = null, w = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            c = this.data.substring(this.index, w);
            break;
          case "uint8array":
            c = this.data.subarray(this.index, w);
            break;
          case "array":
          case "nodebuffer":
            c = this.data.slice(this.index, w);
        }
        return this.index = w, this.push({ data: c, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, i.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, i, a) {
      function o(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      o.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, n) {
        return this._listeners[s].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, n) {
        if (this._listeners[s])
          for (var c = 0; c < this._listeners[s].length; c++)
            this._listeners[s][c].call(this, n);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var n = this;
        return s.on("data", function(c) {
          n.processChunk(c);
        }), s.on("end", function() {
          n.end();
        }), s.on("error", function(c) {
          n.error(c);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, n) {
        return this.extraStreamInfo[s] = n, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, i.exports = o;
    }, {}], 29: [function(r, i, a) {
      var o = r("../utils"), s = r("./ConvertWorker"), n = r("./GenericWorker"), c = r("../base64"), w = r("../support"), b = r("../external"), g = null;
      if (w.nodestream)
        try {
          g = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function _(y, d) {
        return new b.Promise(function(x, p) {
          var E = [], A = y._internalType, N = y._outputType, O = y._mimeType;
          y.on("data", function(z, P) {
            E.push(z), d && d(P);
          }).on("error", function(z) {
            E = [], p(z);
          }).on("end", function() {
            try {
              var z = function(P, K, C) {
                switch (P) {
                  case "blob":
                    return o.newBlob(o.transformTo("arraybuffer", K), C);
                  case "base64":
                    return c.encode(K);
                  default:
                    return o.transformTo(P, K);
                }
              }(N, function(P, K) {
                var C, tt = 0, at = null, I = 0;
                for (C = 0; C < K.length; C++)
                  I += K[C].length;
                switch (P) {
                  case "string":
                    return K.join("");
                  case "array":
                    return Array.prototype.concat.apply([], K);
                  case "uint8array":
                    for (at = new Uint8Array(I), C = 0; C < K.length; C++)
                      at.set(K[C], tt), tt += K[C].length;
                    return at;
                  case "nodebuffer":
                    return Buffer.concat(K);
                  default:
                    throw new Error("concat : unsupported type '" + P + "'");
                }
              }(A, E), O);
              x(z);
            } catch (P) {
              p(P);
            }
            E = [];
          }).resume();
        });
      }
      function f(y, d, x) {
        var p = d;
        switch (d) {
          case "blob":
          case "arraybuffer":
            p = "uint8array";
            break;
          case "base64":
            p = "string";
        }
        try {
          this._internalType = p, this._outputType = d, this._mimeType = x, o.checkSupport(p), this._worker = y.pipe(new s(p)), y.lock();
        } catch (E) {
          this._worker = new n("error"), this._worker.error(E);
        }
      }
      f.prototype = { accumulate: function(y) {
        return _(this, y);
      }, on: function(y, d) {
        var x = this;
        return y === "data" ? this._worker.on(y, function(p) {
          d.call(x, p.data, p.meta);
        }) : this._worker.on(y, function() {
          o.delay(d, arguments, x);
        }), this;
      }, resume: function() {
        return o.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(y) {
        if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, y);
      } }, i.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, i, a) {
      if (a.base64 = !0, a.array = !0, a.string = !0, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        a.blob = !1;
      else {
        var o = new ArrayBuffer(0);
        try {
          a.blob = new Blob([o], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(o), a.blob = s.getBlob("application/zip").size === 0;
          } catch {
            a.blob = !1;
          }
        }
      }
      try {
        a.nodestream = !!r("readable-stream").Readable;
      } catch {
        a.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, i, a) {
      for (var o = r("./utils"), s = r("./support"), n = r("./nodejsUtils"), c = r("./stream/GenericWorker"), w = new Array(256), b = 0; b < 256; b++)
        w[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
      w[254] = w[254] = 1;
      function g() {
        c.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function _() {
        c.call(this, "utf-8 encode");
      }
      a.utf8encode = function(f) {
        return s.nodebuffer ? n.newBufferFrom(f, "utf-8") : function(y) {
          var d, x, p, E, A, N = y.length, O = 0;
          for (E = 0; E < N; E++)
            (64512 & (x = y.charCodeAt(E))) == 55296 && E + 1 < N && (64512 & (p = y.charCodeAt(E + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (p - 56320), E++), O += x < 128 ? 1 : x < 2048 ? 2 : x < 65536 ? 3 : 4;
          for (d = s.uint8array ? new Uint8Array(O) : new Array(O), E = A = 0; A < O; E++)
            (64512 & (x = y.charCodeAt(E))) == 55296 && E + 1 < N && (64512 & (p = y.charCodeAt(E + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (p - 56320), E++), x < 128 ? d[A++] = x : (x < 2048 ? d[A++] = 192 | x >>> 6 : (x < 65536 ? d[A++] = 224 | x >>> 12 : (d[A++] = 240 | x >>> 18, d[A++] = 128 | x >>> 12 & 63), d[A++] = 128 | x >>> 6 & 63), d[A++] = 128 | 63 & x);
          return d;
        }(f);
      }, a.utf8decode = function(f) {
        return s.nodebuffer ? o.transformTo("nodebuffer", f).toString("utf-8") : function(y) {
          var d, x, p, E, A = y.length, N = new Array(2 * A);
          for (d = x = 0; d < A; )
            if ((p = y[d++]) < 128)
              N[x++] = p;
            else if (4 < (E = w[p]))
              N[x++] = 65533, d += E - 1;
            else {
              for (p &= E === 2 ? 31 : E === 3 ? 15 : 7; 1 < E && d < A; )
                p = p << 6 | 63 & y[d++], E--;
              1 < E ? N[x++] = 65533 : p < 65536 ? N[x++] = p : (p -= 65536, N[x++] = 55296 | p >> 10 & 1023, N[x++] = 56320 | 1023 & p);
            }
          return N.length !== x && (N.subarray ? N = N.subarray(0, x) : N.length = x), o.applyFromCharCode(N);
        }(f = o.transformTo(s.uint8array ? "uint8array" : "array", f));
      }, o.inherits(g, c), g.prototype.processChunk = function(f) {
        var y = o.transformTo(s.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var d = y;
            (y = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), y.set(d, this.leftOver.length);
          } else
            y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var x = function(E, A) {
          var N;
          for ((A = A || E.length) > E.length && (A = E.length), N = A - 1; 0 <= N && (192 & E[N]) == 128; )
            N--;
          return N < 0 || N === 0 ? A : N + w[E[N]] > A ? N : A;
        }(y), p = y;
        x !== y.length && (s.uint8array ? (p = y.subarray(0, x), this.leftOver = y.subarray(x, y.length)) : (p = y.slice(0, x), this.leftOver = y.slice(x, y.length))), this.push({ data: a.utf8decode(p), meta: f.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, a.Utf8DecodeWorker = g, o.inherits(_, c), _.prototype.processChunk = function(f) {
        this.push({ data: a.utf8encode(f.data), meta: f.meta });
      }, a.Utf8EncodeWorker = _;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, i, a) {
      var o = r("./support"), s = r("./base64"), n = r("./nodejsUtils"), c = r("./external");
      function w(d) {
        return d;
      }
      function b(d, x) {
        for (var p = 0; p < d.length; ++p)
          x[p] = 255 & d.charCodeAt(p);
        return x;
      }
      r("setimmediate"), a.newBlob = function(d, x) {
        a.checkSupport("blob");
        try {
          return new Blob([d], { type: x });
        } catch {
          try {
            var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return p.append(d), p.getBlob(x);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(d, x, p) {
        var E = [], A = 0, N = d.length;
        if (N <= p)
          return String.fromCharCode.apply(null, d);
        for (; A < N; )
          x === "array" || x === "nodebuffer" ? E.push(String.fromCharCode.apply(null, d.slice(A, Math.min(A + p, N)))) : E.push(String.fromCharCode.apply(null, d.subarray(A, Math.min(A + p, N)))), A += p;
        return E.join("");
      }, stringifyByChar: function(d) {
        for (var x = "", p = 0; p < d.length; p++)
          x += String.fromCharCode(d[p]);
        return x;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function _(d) {
        var x = 65536, p = a.getTypeOf(d), E = !0;
        if (p === "uint8array" ? E = g.applyCanBeUsed.uint8array : p === "nodebuffer" && (E = g.applyCanBeUsed.nodebuffer), E)
          for (; 1 < x; )
            try {
              return g.stringifyByChunk(d, p, x);
            } catch {
              x = Math.floor(x / 2);
            }
        return g.stringifyByChar(d);
      }
      function f(d, x) {
        for (var p = 0; p < d.length; p++)
          x[p] = d[p];
        return x;
      }
      a.applyFromCharCode = _;
      var y = {};
      y.string = { string: w, array: function(d) {
        return b(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return y.string.uint8array(d).buffer;
      }, uint8array: function(d) {
        return b(d, new Uint8Array(d.length));
      }, nodebuffer: function(d) {
        return b(d, n.allocBuffer(d.length));
      } }, y.array = { string: _, array: w, arraybuffer: function(d) {
        return new Uint8Array(d).buffer;
      }, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return n.newBufferFrom(d);
      } }, y.arraybuffer = { string: function(d) {
        return _(new Uint8Array(d));
      }, array: function(d) {
        return f(new Uint8Array(d), new Array(d.byteLength));
      }, arraybuffer: w, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return n.newBufferFrom(new Uint8Array(d));
      } }, y.uint8array = { string: _, array: function(d) {
        return f(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return d.buffer;
      }, uint8array: w, nodebuffer: function(d) {
        return n.newBufferFrom(d);
      } }, y.nodebuffer = { string: _, array: function(d) {
        return f(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return y.nodebuffer.uint8array(d).buffer;
      }, uint8array: function(d) {
        return f(d, new Uint8Array(d.length));
      }, nodebuffer: w }, a.transformTo = function(d, x) {
        if (x = x || "", !d)
          return x;
        a.checkSupport(d);
        var p = a.getTypeOf(x);
        return y[p][d](x);
      }, a.resolve = function(d) {
        for (var x = d.split("/"), p = [], E = 0; E < x.length; E++) {
          var A = x[E];
          A === "." || A === "" && E !== 0 && E !== x.length - 1 || (A === ".." ? p.pop() : p.push(A));
        }
        return p.join("/");
      }, a.getTypeOf = function(d) {
        return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : o.nodebuffer && n.isBuffer(d) ? "nodebuffer" : o.uint8array && d instanceof Uint8Array ? "uint8array" : o.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function(d) {
        if (!o[d.toLowerCase()])
          throw new Error(d + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(d) {
        var x, p, E = "";
        for (p = 0; p < (d || "").length; p++)
          E += "\\x" + ((x = d.charCodeAt(p)) < 16 ? "0" : "") + x.toString(16).toUpperCase();
        return E;
      }, a.delay = function(d, x, p) {
        setImmediate(function() {
          d.apply(p || null, x || []);
        });
      }, a.inherits = function(d, x) {
        function p() {
        }
        p.prototype = x.prototype, d.prototype = new p();
      }, a.extend = function() {
        var d, x, p = {};
        for (d = 0; d < arguments.length; d++)
          for (x in arguments[d])
            Object.prototype.hasOwnProperty.call(arguments[d], x) && p[x] === void 0 && (p[x] = arguments[d][x]);
        return p;
      }, a.prepareContent = function(d, x, p, E, A) {
        return c.Promise.resolve(x).then(function(N) {
          return o.blob && (N instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(N)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(O, z) {
            var P = new FileReader();
            P.onload = function(K) {
              O(K.target.result);
            }, P.onerror = function(K) {
              z(K.target.error);
            }, P.readAsArrayBuffer(N);
          }) : N;
        }).then(function(N) {
          var O = a.getTypeOf(N);
          return O ? (O === "arraybuffer" ? N = a.transformTo("uint8array", N) : O === "string" && (A ? N = s.decode(N) : p && E !== !0 && (N = function(z) {
            return b(z, o.uint8array ? new Uint8Array(z.length) : new Array(z.length));
          }(N))), N) : c.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, i, a) {
      var o = r("./reader/readerFor"), s = r("./utils"), n = r("./signature"), c = r("./zipEntry"), w = r("./support");
      function b(g) {
        this.files = [], this.loadOptions = g;
      }
      b.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var _ = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(_) + ", expected " + s.pretty(g) + ")");
        }
      }, isSignature: function(g, _) {
        var f = this.reader.index;
        this.reader.setIndex(g);
        var y = this.reader.readString(4) === _;
        return this.reader.setIndex(f), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), _ = w.uint8array ? "uint8array" : "array", f = s.transformTo(_, g);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, _, f, y = this.zip64EndOfCentralSize - 44; 0 < y; )
          g = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[g] = { id: g, length: _, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, _;
        for (g = 0; g < this.files.length; g++)
          _ = this.files[g], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (g = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var _ = g;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var y = _ - f;
        if (0 < y)
          this.isSignature(_, n.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = o(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, i.exports = b;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, i, a) {
      var o = r("./reader/readerFor"), s = r("./utils"), n = r("./compressedObject"), c = r("./crc32"), w = r("./utf8"), b = r("./compressions"), g = r("./support");
      function _(f, y) {
        this.options = f, this.loadOptions = y;
      }
      _.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var y, d;
        if (f.skip(22), this.fileNameLength = f.readInt(2), d = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(x) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p) && b[p].magic === x)
              return b[p];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, y, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var y = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        f.skip(y), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = o(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var y, d, x, p = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < p; )
          y = f.readInt(2), d = f.readInt(2), x = f.readData(d), this.extraFields[y] = { id: y, length: d, value: x };
        f.setIndex(p);
      }, handleUTF8: function() {
        var f = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = w.utf8decode(this.fileName), this.fileCommentStr = w.utf8decode(this.fileComment);
        else {
          var y = this.findExtraFieldUnicodePath();
          if (y !== null)
            this.fileNameStr = y;
          else {
            var d = s.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(d);
          }
          var x = this.findExtraFieldUnicodeComment();
          if (x !== null)
            this.fileCommentStr = x;
          else {
            var p = s.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(p);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var y = o(f.value);
          return y.readInt(1) !== 1 || c(this.fileName) !== y.readInt(4) ? null : w.utf8decode(y.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var y = o(f.value);
          return y.readInt(1) !== 1 || c(this.fileComment) !== y.readInt(4) ? null : w.utf8decode(y.readData(f.length - 5));
        }
        return null;
      } }, i.exports = _;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, i, a) {
      function o(y, d, x) {
        this.name = y, this.dir = x.dir, this.date = x.date, this.comment = x.comment, this.unixPermissions = x.unixPermissions, this.dosPermissions = x.dosPermissions, this._data = d, this._dataBinary = x.binary, this.options = { compression: x.compression, compressionOptions: x.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), n = r("./stream/DataWorker"), c = r("./utf8"), w = r("./compressedObject"), b = r("./stream/GenericWorker");
      o.prototype = { internalStream: function(y) {
        var d = null, x = "string";
        try {
          if (!y)
            throw new Error("No output type specified.");
          var p = (x = y.toLowerCase()) === "string" || x === "text";
          x !== "binarystring" && x !== "text" || (x = "string"), d = this._decompressWorker();
          var E = !this._dataBinary;
          E && !p && (d = d.pipe(new c.Utf8EncodeWorker())), !E && p && (d = d.pipe(new c.Utf8DecodeWorker()));
        } catch (A) {
          (d = new b("error")).error(A);
        }
        return new s(d, x, "");
      }, async: function(y, d) {
        return this.internalStream(y).accumulate(d);
      }, nodeStream: function(y, d) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(d);
      }, _compressWorker: function(y, d) {
        if (this._data instanceof w && this._data.compression.magic === y.magic)
          return this._data.getCompressedWorker();
        var x = this._decompressWorker();
        return this._dataBinary || (x = x.pipe(new c.Utf8EncodeWorker())), w.createWorkerFrom(x, y, d);
      }, _decompressWorker: function() {
        return this._data instanceof w ? this._data.getContentWorker() : this._data instanceof b ? this._data : new n(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < g.length; f++)
        o.prototype[g[f]] = _;
      i.exports = o;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, i, a) {
      (function(o) {
        var s, n, c = o.MutationObserver || o.WebKitMutationObserver;
        if (c) {
          var w = 0, b = new c(y), g = o.document.createTextNode("");
          b.observe(g, { characterData: !0 }), s = function() {
            g.data = w = ++w % 2;
          };
        } else if (o.setImmediate || o.MessageChannel === void 0)
          s = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
            var d = o.document.createElement("script");
            d.onreadystatechange = function() {
              y(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
            }, o.document.documentElement.appendChild(d);
          } : function() {
            setTimeout(y, 0);
          };
        else {
          var _ = new o.MessageChannel();
          _.port1.onmessage = y, s = function() {
            _.port2.postMessage(0);
          };
        }
        var f = [];
        function y() {
          var d, x;
          n = !0;
          for (var p = f.length; p; ) {
            for (x = f, f = [], d = -1; ++d < p; )
              x[d]();
            p = f.length;
          }
          n = !1;
        }
        i.exports = function(d) {
          f.push(d) !== 1 || n || s();
        };
      }).call(this, typeof gr < "u" ? gr : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, i, a) {
      var o = r("immediate");
      function s() {
      }
      var n = {}, c = ["REJECTED"], w = ["FULFILLED"], b = ["PENDING"];
      function g(p) {
        if (typeof p != "function")
          throw new TypeError("resolver must be a function");
        this.state = b, this.queue = [], this.outcome = void 0, p !== s && d(this, p);
      }
      function _(p, E, A) {
        this.promise = p, typeof E == "function" && (this.onFulfilled = E, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
      }
      function f(p, E, A) {
        o(function() {
          var N;
          try {
            N = E(A);
          } catch (O) {
            return n.reject(p, O);
          }
          N === p ? n.reject(p, new TypeError("Cannot resolve promise with itself")) : n.resolve(p, N);
        });
      }
      function y(p) {
        var E = p && p.then;
        if (p && (typeof p == "object" || typeof p == "function") && typeof E == "function")
          return function() {
            E.apply(p, arguments);
          };
      }
      function d(p, E) {
        var A = !1;
        function N(P) {
          A || (A = !0, n.reject(p, P));
        }
        function O(P) {
          A || (A = !0, n.resolve(p, P));
        }
        var z = x(function() {
          E(O, N);
        });
        z.status === "error" && N(z.value);
      }
      function x(p, E) {
        var A = {};
        try {
          A.value = p(E), A.status = "success";
        } catch (N) {
          A.status = "error", A.value = N;
        }
        return A;
      }
      (i.exports = g).prototype.finally = function(p) {
        if (typeof p != "function")
          return this;
        var E = this.constructor;
        return this.then(function(A) {
          return E.resolve(p()).then(function() {
            return A;
          });
        }, function(A) {
          return E.resolve(p()).then(function() {
            throw A;
          });
        });
      }, g.prototype.catch = function(p) {
        return this.then(null, p);
      }, g.prototype.then = function(p, E) {
        if (typeof p != "function" && this.state === w || typeof E != "function" && this.state === c)
          return this;
        var A = new this.constructor(s);
        return this.state !== b ? f(A, this.state === w ? p : E, this.outcome) : this.queue.push(new _(A, p, E)), A;
      }, _.prototype.callFulfilled = function(p) {
        n.resolve(this.promise, p);
      }, _.prototype.otherCallFulfilled = function(p) {
        f(this.promise, this.onFulfilled, p);
      }, _.prototype.callRejected = function(p) {
        n.reject(this.promise, p);
      }, _.prototype.otherCallRejected = function(p) {
        f(this.promise, this.onRejected, p);
      }, n.resolve = function(p, E) {
        var A = x(y, E);
        if (A.status === "error")
          return n.reject(p, A.value);
        var N = A.value;
        if (N)
          d(p, N);
        else {
          p.state = w, p.outcome = E;
          for (var O = -1, z = p.queue.length; ++O < z; )
            p.queue[O].callFulfilled(E);
        }
        return p;
      }, n.reject = function(p, E) {
        p.state = c, p.outcome = E;
        for (var A = -1, N = p.queue.length; ++A < N; )
          p.queue[A].callRejected(E);
        return p;
      }, g.resolve = function(p) {
        return p instanceof this ? p : n.resolve(new this(s), p);
      }, g.reject = function(p) {
        var E = new this(s);
        return n.reject(E, p);
      }, g.all = function(p) {
        var E = this;
        if (Object.prototype.toString.call(p) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = p.length, N = !1;
        if (!A)
          return this.resolve([]);
        for (var O = new Array(A), z = 0, P = -1, K = new this(s); ++P < A; )
          C(p[P], P);
        return K;
        function C(tt, at) {
          E.resolve(tt).then(function(I) {
            O[at] = I, ++z !== A || N || (N = !0, n.resolve(K, O));
          }, function(I) {
            N || (N = !0, n.reject(K, I));
          });
        }
      }, g.race = function(p) {
        var E = this;
        if (Object.prototype.toString.call(p) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = p.length, N = !1;
        if (!A)
          return this.resolve([]);
        for (var O = -1, z = new this(s); ++O < A; )
          P = p[O], E.resolve(P).then(function(K) {
            N || (N = !0, n.resolve(z, K));
          }, function(K) {
            N || (N = !0, n.reject(z, K));
          });
        var P;
        return z;
      };
    }, { immediate: 36 }], 38: [function(r, i, a) {
      var o = {};
      (0, r("./lib/utils/common").assign)(o, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), i.exports = o;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, i, a) {
      var o = r("./zlib/deflate"), s = r("./utils/common"), n = r("./utils/strings"), c = r("./zlib/messages"), w = r("./zlib/zstream"), b = Object.prototype.toString, g = 0, _ = -1, f = 0, y = 8;
      function d(p) {
        if (!(this instanceof d))
          return new d(p);
        this.options = s.assign({ level: _, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, p || {});
        var E = this.options;
        E.raw && 0 < E.windowBits ? E.windowBits = -E.windowBits : E.gzip && 0 < E.windowBits && E.windowBits < 16 && (E.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new w(), this.strm.avail_out = 0;
        var A = o.deflateInit2(this.strm, E.level, E.method, E.windowBits, E.memLevel, E.strategy);
        if (A !== g)
          throw new Error(c[A]);
        if (E.header && o.deflateSetHeader(this.strm, E.header), E.dictionary) {
          var N;
          if (N = typeof E.dictionary == "string" ? n.string2buf(E.dictionary) : b.call(E.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(E.dictionary) : E.dictionary, (A = o.deflateSetDictionary(this.strm, N)) !== g)
            throw new Error(c[A]);
          this._dict_set = !0;
        }
      }
      function x(p, E) {
        var A = new d(E);
        if (A.push(p, !0), A.err)
          throw A.msg || c[A.err];
        return A.result;
      }
      d.prototype.push = function(p, E) {
        var A, N, O = this.strm, z = this.options.chunkSize;
        if (this.ended)
          return !1;
        N = E === ~~E ? E : E === !0 ? 4 : 0, typeof p == "string" ? O.input = n.string2buf(p) : b.call(p) === "[object ArrayBuffer]" ? O.input = new Uint8Array(p) : O.input = p, O.next_in = 0, O.avail_in = O.input.length;
        do {
          if (O.avail_out === 0 && (O.output = new s.Buf8(z), O.next_out = 0, O.avail_out = z), (A = o.deflate(O, N)) !== 1 && A !== g)
            return this.onEnd(A), !(this.ended = !0);
          O.avail_out !== 0 && (O.avail_in !== 0 || N !== 4 && N !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(O.output, O.next_out))) : this.onData(s.shrinkBuf(O.output, O.next_out)));
        } while ((0 < O.avail_in || O.avail_out === 0) && A !== 1);
        return N === 4 ? (A = o.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === g) : N !== 2 || (this.onEnd(g), !(O.avail_out = 0));
      }, d.prototype.onData = function(p) {
        this.chunks.push(p);
      }, d.prototype.onEnd = function(p) {
        p === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, a.Deflate = d, a.deflate = x, a.deflateRaw = function(p, E) {
        return (E = E || {}).raw = !0, x(p, E);
      }, a.gzip = function(p, E) {
        return (E = E || {}).gzip = !0, x(p, E);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, i, a) {
      var o = r("./zlib/inflate"), s = r("./utils/common"), n = r("./utils/strings"), c = r("./zlib/constants"), w = r("./zlib/messages"), b = r("./zlib/zstream"), g = r("./zlib/gzheader"), _ = Object.prototype.toString;
      function f(d) {
        if (!(this instanceof f))
          return new f(d);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, d || {});
        var x = this.options;
        x.raw && 0 <= x.windowBits && x.windowBits < 16 && (x.windowBits = -x.windowBits, x.windowBits === 0 && (x.windowBits = -15)), !(0 <= x.windowBits && x.windowBits < 16) || d && d.windowBits || (x.windowBits += 32), 15 < x.windowBits && x.windowBits < 48 && !(15 & x.windowBits) && (x.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
        var p = o.inflateInit2(this.strm, x.windowBits);
        if (p !== c.Z_OK)
          throw new Error(w[p]);
        this.header = new g(), o.inflateGetHeader(this.strm, this.header);
      }
      function y(d, x) {
        var p = new f(x);
        if (p.push(d, !0), p.err)
          throw p.msg || w[p.err];
        return p.result;
      }
      f.prototype.push = function(d, x) {
        var p, E, A, N, O, z, P = this.strm, K = this.options.chunkSize, C = this.options.dictionary, tt = !1;
        if (this.ended)
          return !1;
        E = x === ~~x ? x : x === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof d == "string" ? P.input = n.binstring2buf(d) : _.call(d) === "[object ArrayBuffer]" ? P.input = new Uint8Array(d) : P.input = d, P.next_in = 0, P.avail_in = P.input.length;
        do {
          if (P.avail_out === 0 && (P.output = new s.Buf8(K), P.next_out = 0, P.avail_out = K), (p = o.inflate(P, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && C && (z = typeof C == "string" ? n.string2buf(C) : _.call(C) === "[object ArrayBuffer]" ? new Uint8Array(C) : C, p = o.inflateSetDictionary(this.strm, z)), p === c.Z_BUF_ERROR && tt === !0 && (p = c.Z_OK, tt = !1), p !== c.Z_STREAM_END && p !== c.Z_OK)
            return this.onEnd(p), !(this.ended = !0);
          P.next_out && (P.avail_out !== 0 && p !== c.Z_STREAM_END && (P.avail_in !== 0 || E !== c.Z_FINISH && E !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = n.utf8border(P.output, P.next_out), N = P.next_out - A, O = n.buf2string(P.output, A), P.next_out = N, P.avail_out = K - N, N && s.arraySet(P.output, P.output, A, N, 0), this.onData(O)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (tt = !0);
        } while ((0 < P.avail_in || P.avail_out === 0) && p !== c.Z_STREAM_END);
        return p === c.Z_STREAM_END && (E = c.Z_FINISH), E === c.Z_FINISH ? (p = o.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === c.Z_OK) : E !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(P.avail_out = 0));
      }, f.prototype.onData = function(d) {
        this.chunks.push(d);
      }, f.prototype.onEnd = function(d) {
        d === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, a.Inflate = f, a.inflate = y, a.inflateRaw = function(d, x) {
        return (x = x || {}).raw = !0, y(d, x);
      }, a.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, i, a) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      a.assign = function(c) {
        for (var w = Array.prototype.slice.call(arguments, 1); w.length; ) {
          var b = w.shift();
          if (b) {
            if (typeof b != "object")
              throw new TypeError(b + "must be non-object");
            for (var g in b)
              b.hasOwnProperty(g) && (c[g] = b[g]);
          }
        }
        return c;
      }, a.shrinkBuf = function(c, w) {
        return c.length === w ? c : c.subarray ? c.subarray(0, w) : (c.length = w, c);
      };
      var s = { arraySet: function(c, w, b, g, _) {
        if (w.subarray && c.subarray)
          c.set(w.subarray(b, b + g), _);
        else
          for (var f = 0; f < g; f++)
            c[_ + f] = w[b + f];
      }, flattenChunks: function(c) {
        var w, b, g, _, f, y;
        for (w = g = 0, b = c.length; w < b; w++)
          g += c[w].length;
        for (y = new Uint8Array(g), w = _ = 0, b = c.length; w < b; w++)
          f = c[w], y.set(f, _), _ += f.length;
        return y;
      } }, n = { arraySet: function(c, w, b, g, _) {
        for (var f = 0; f < g; f++)
          c[_ + f] = w[b + f];
      }, flattenChunks: function(c) {
        return [].concat.apply([], c);
      } };
      a.setTyped = function(c) {
        c ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, s)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, n));
      }, a.setTyped(o);
    }, {}], 42: [function(r, i, a) {
      var o = r("./common"), s = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var c = new o.Buf8(256), w = 0; w < 256; w++)
        c[w] = 252 <= w ? 6 : 248 <= w ? 5 : 240 <= w ? 4 : 224 <= w ? 3 : 192 <= w ? 2 : 1;
      function b(g, _) {
        if (_ < 65537 && (g.subarray && n || !g.subarray && s))
          return String.fromCharCode.apply(null, o.shrinkBuf(g, _));
        for (var f = "", y = 0; y < _; y++)
          f += String.fromCharCode(g[y]);
        return f;
      }
      c[254] = c[254] = 1, a.string2buf = function(g) {
        var _, f, y, d, x, p = g.length, E = 0;
        for (d = 0; d < p; d++)
          (64512 & (f = g.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = g.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), E += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (_ = new o.Buf8(E), d = x = 0; x < E; d++)
          (64512 & (f = g.charCodeAt(d))) == 55296 && d + 1 < p && (64512 & (y = g.charCodeAt(d + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (y - 56320), d++), f < 128 ? _[x++] = f : (f < 2048 ? _[x++] = 192 | f >>> 6 : (f < 65536 ? _[x++] = 224 | f >>> 12 : (_[x++] = 240 | f >>> 18, _[x++] = 128 | f >>> 12 & 63), _[x++] = 128 | f >>> 6 & 63), _[x++] = 128 | 63 & f);
        return _;
      }, a.buf2binstring = function(g) {
        return b(g, g.length);
      }, a.binstring2buf = function(g) {
        for (var _ = new o.Buf8(g.length), f = 0, y = _.length; f < y; f++)
          _[f] = g.charCodeAt(f);
        return _;
      }, a.buf2string = function(g, _) {
        var f, y, d, x, p = _ || g.length, E = new Array(2 * p);
        for (f = y = 0; f < p; )
          if ((d = g[f++]) < 128)
            E[y++] = d;
          else if (4 < (x = c[d]))
            E[y++] = 65533, f += x - 1;
          else {
            for (d &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && f < p; )
              d = d << 6 | 63 & g[f++], x--;
            1 < x ? E[y++] = 65533 : d < 65536 ? E[y++] = d : (d -= 65536, E[y++] = 55296 | d >> 10 & 1023, E[y++] = 56320 | 1023 & d);
          }
        return b(E, y);
      }, a.utf8border = function(g, _) {
        var f;
        for ((_ = _ || g.length) > g.length && (_ = g.length), f = _ - 1; 0 <= f && (192 & g[f]) == 128; )
          f--;
        return f < 0 || f === 0 ? _ : f + c[g[f]] > _ ? f : _;
      };
    }, { "./common": 41 }], 43: [function(r, i, a) {
      i.exports = function(o, s, n, c) {
        for (var w = 65535 & o | 0, b = o >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; b = b + (w = w + s[c++] | 0) | 0, --g; )
            ;
          w %= 65521, b %= 65521;
        }
        return w | b << 16 | 0;
      };
    }, {}], 44: [function(r, i, a) {
      i.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, i, a) {
      var o = function() {
        for (var s, n = [], c = 0; c < 256; c++) {
          s = c;
          for (var w = 0; w < 8; w++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          n[c] = s;
        }
        return n;
      }();
      i.exports = function(s, n, c, w) {
        var b = o, g = w + c;
        s ^= -1;
        for (var _ = w; _ < g; _++)
          s = s >>> 8 ^ b[255 & (s ^ n[_])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, i, a) {
      var o, s = r("../utils/common"), n = r("./trees"), c = r("./adler32"), w = r("./crc32"), b = r("./messages"), g = 0, _ = 4, f = 0, y = -2, d = -1, x = 4, p = 2, E = 8, A = 9, N = 286, O = 30, z = 19, P = 2 * N + 1, K = 15, C = 3, tt = 258, at = tt + C + 1, I = 42, j = 113, m = 1, G = 2, ut = 3, V = 4;
      function ft(h, H) {
        return h.msg = b[H], H;
      }
      function Y(h) {
        return (h << 1) - (4 < h ? 9 : 0);
      }
      function ct(h) {
        for (var H = h.length; 0 <= --H; )
          h[H] = 0;
      }
      function L(h) {
        var H = h.state, T = H.pending;
        T > h.avail_out && (T = h.avail_out), T !== 0 && (s.arraySet(h.output, H.pending_buf, H.pending_out, T, h.next_out), h.next_out += T, H.pending_out += T, h.total_out += T, h.avail_out -= T, H.pending -= T, H.pending === 0 && (H.pending_out = 0));
      }
      function R(h, H) {
        n._tr_flush_block(h, 0 <= h.block_start ? h.block_start : -1, h.strstart - h.block_start, H), h.block_start = h.strstart, L(h.strm);
      }
      function Z(h, H) {
        h.pending_buf[h.pending++] = H;
      }
      function $(h, H) {
        h.pending_buf[h.pending++] = H >>> 8 & 255, h.pending_buf[h.pending++] = 255 & H;
      }
      function J(h, H) {
        var T, l, u = h.max_chain_length, v = h.strstart, D = h.prev_length, M = h.nice_match, B = h.strstart > h.w_size - at ? h.strstart - (h.w_size - at) : 0, Q = h.window, rt = h.w_mask, et = h.prev, lt = h.strstart + tt, dt = Q[v + D - 1], pt = Q[v + D];
        h.prev_length >= h.good_match && (u >>= 2), M > h.lookahead && (M = h.lookahead);
        do
          if (Q[(T = H) + D] === pt && Q[T + D - 1] === dt && Q[T] === Q[v] && Q[++T] === Q[v + 1]) {
            v += 2, T++;
            do
              ;
            while (Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && Q[++v] === Q[++T] && v < lt);
            if (l = tt - (lt - v), v = lt - tt, D < l) {
              if (h.match_start = H, M <= (D = l))
                break;
              dt = Q[v + D - 1], pt = Q[v + D];
            }
          }
        while ((H = et[H & rt]) > B && --u != 0);
        return D <= h.lookahead ? D : h.lookahead;
      }
      function X(h) {
        var H, T, l, u, v, D, M, B, Q, rt, et = h.w_size;
        do {
          if (u = h.window_size - h.lookahead - h.strstart, h.strstart >= et + (et - at)) {
            for (s.arraySet(h.window, h.window, et, et, 0), h.match_start -= et, h.strstart -= et, h.block_start -= et, H = T = h.hash_size; l = h.head[--H], h.head[H] = et <= l ? l - et : 0, --T; )
              ;
            for (H = T = et; l = h.prev[--H], h.prev[H] = et <= l ? l - et : 0, --T; )
              ;
            u += et;
          }
          if (h.strm.avail_in === 0)
            break;
          if (D = h.strm, M = h.window, B = h.strstart + h.lookahead, Q = u, rt = void 0, rt = D.avail_in, Q < rt && (rt = Q), T = rt === 0 ? 0 : (D.avail_in -= rt, s.arraySet(M, D.input, D.next_in, rt, B), D.state.wrap === 1 ? D.adler = c(D.adler, M, rt, B) : D.state.wrap === 2 && (D.adler = w(D.adler, M, rt, B)), D.next_in += rt, D.total_in += rt, rt), h.lookahead += T, h.lookahead + h.insert >= C)
            for (v = h.strstart - h.insert, h.ins_h = h.window[v], h.ins_h = (h.ins_h << h.hash_shift ^ h.window[v + 1]) & h.hash_mask; h.insert && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[v + C - 1]) & h.hash_mask, h.prev[v & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = v, v++, h.insert--, !(h.lookahead + h.insert < C)); )
              ;
        } while (h.lookahead < at && h.strm.avail_in !== 0);
      }
      function k(h, H) {
        for (var T, l; ; ) {
          if (h.lookahead < at) {
            if (X(h), h.lookahead < at && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          if (T = 0, h.lookahead >= C && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), T !== 0 && h.strstart - T <= h.w_size - at && (h.match_length = J(h, T)), h.match_length >= C)
            if (l = n._tr_tally(h, h.strstart - h.match_start, h.match_length - C), h.lookahead -= h.match_length, h.match_length <= h.max_lazy_match && h.lookahead >= C) {
              for (h.match_length--; h.strstart++, h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart, --h.match_length != 0; )
                ;
              h.strstart++;
            } else
              h.strstart += h.match_length, h.match_length = 0, h.ins_h = h.window[h.strstart], h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + 1]) & h.hash_mask;
          else
            l = n._tr_tally(h, 0, h.window[h.strstart]), h.lookahead--, h.strstart++;
          if (l && (R(h, !1), h.strm.avail_out === 0))
            return m;
        }
        return h.insert = h.strstart < C - 1 ? h.strstart : C - 1, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : h.last_lit && (R(h, !1), h.strm.avail_out === 0) ? m : G;
      }
      function S(h, H) {
        for (var T, l, u; ; ) {
          if (h.lookahead < at) {
            if (X(h), h.lookahead < at && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          if (T = 0, h.lookahead >= C && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), h.prev_length = h.match_length, h.prev_match = h.match_start, h.match_length = C - 1, T !== 0 && h.prev_length < h.max_lazy_match && h.strstart - T <= h.w_size - at && (h.match_length = J(h, T), h.match_length <= 5 && (h.strategy === 1 || h.match_length === C && 4096 < h.strstart - h.match_start) && (h.match_length = C - 1)), h.prev_length >= C && h.match_length <= h.prev_length) {
            for (u = h.strstart + h.lookahead - C, l = n._tr_tally(h, h.strstart - 1 - h.prev_match, h.prev_length - C), h.lookahead -= h.prev_length - 1, h.prev_length -= 2; ++h.strstart <= u && (h.ins_h = (h.ins_h << h.hash_shift ^ h.window[h.strstart + C - 1]) & h.hash_mask, T = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h], h.head[h.ins_h] = h.strstart), --h.prev_length != 0; )
              ;
            if (h.match_available = 0, h.match_length = C - 1, h.strstart++, l && (R(h, !1), h.strm.avail_out === 0))
              return m;
          } else if (h.match_available) {
            if ((l = n._tr_tally(h, 0, h.window[h.strstart - 1])) && R(h, !1), h.strstart++, h.lookahead--, h.strm.avail_out === 0)
              return m;
          } else
            h.match_available = 1, h.strstart++, h.lookahead--;
        }
        return h.match_available && (l = n._tr_tally(h, 0, h.window[h.strstart - 1]), h.match_available = 0), h.insert = h.strstart < C - 1 ? h.strstart : C - 1, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : h.last_lit && (R(h, !1), h.strm.avail_out === 0) ? m : G;
      }
      function q(h, H, T, l, u) {
        this.good_length = h, this.max_lazy = H, this.nice_length = T, this.max_chain = l, this.func = u;
      }
      function W() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = E, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * O + 1)), this.bl_tree = new s.Buf16(2 * (2 * z + 1)), ct(this.dyn_ltree), ct(this.dyn_dtree), ct(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(K + 1), this.heap = new s.Buf16(2 * N + 1), ct(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * N + 1), ct(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function F(h) {
        var H;
        return h && h.state ? (h.total_in = h.total_out = 0, h.data_type = p, (H = h.state).pending = 0, H.pending_out = 0, H.wrap < 0 && (H.wrap = -H.wrap), H.status = H.wrap ? I : j, h.adler = H.wrap === 2 ? 0 : 1, H.last_flush = g, n._tr_init(H), f) : ft(h, y);
      }
      function U(h) {
        var H = F(h);
        return H === f && function(T) {
          T.window_size = 2 * T.w_size, ct(T.head), T.max_lazy_match = o[T.level].max_lazy, T.good_match = o[T.level].good_length, T.nice_match = o[T.level].nice_length, T.max_chain_length = o[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = C - 1, T.match_available = 0, T.ins_h = 0;
        }(h.state), H;
      }
      function st(h, H, T, l, u, v) {
        if (!h)
          return y;
        var D = 1;
        if (H === d && (H = 6), l < 0 ? (D = 0, l = -l) : 15 < l && (D = 2, l -= 16), u < 1 || A < u || T !== E || l < 8 || 15 < l || H < 0 || 9 < H || v < 0 || x < v)
          return ft(h, y);
        l === 8 && (l = 9);
        var M = new W();
        return (h.state = M).strm = h, M.wrap = D, M.gzhead = null, M.w_bits = l, M.w_size = 1 << M.w_bits, M.w_mask = M.w_size - 1, M.hash_bits = u + 7, M.hash_size = 1 << M.hash_bits, M.hash_mask = M.hash_size - 1, M.hash_shift = ~~((M.hash_bits + C - 1) / C), M.window = new s.Buf8(2 * M.w_size), M.head = new s.Buf16(M.hash_size), M.prev = new s.Buf16(M.w_size), M.lit_bufsize = 1 << u + 6, M.pending_buf_size = 4 * M.lit_bufsize, M.pending_buf = new s.Buf8(M.pending_buf_size), M.d_buf = 1 * M.lit_bufsize, M.l_buf = 3 * M.lit_bufsize, M.level = H, M.strategy = v, M.method = T, U(h);
      }
      o = [new q(0, 0, 0, 0, function(h, H) {
        var T = 65535;
        for (T > h.pending_buf_size - 5 && (T = h.pending_buf_size - 5); ; ) {
          if (h.lookahead <= 1) {
            if (X(h), h.lookahead === 0 && H === g)
              return m;
            if (h.lookahead === 0)
              break;
          }
          h.strstart += h.lookahead, h.lookahead = 0;
          var l = h.block_start + T;
          if ((h.strstart === 0 || h.strstart >= l) && (h.lookahead = h.strstart - l, h.strstart = l, R(h, !1), h.strm.avail_out === 0) || h.strstart - h.block_start >= h.w_size - at && (R(h, !1), h.strm.avail_out === 0))
            return m;
        }
        return h.insert = 0, H === _ ? (R(h, !0), h.strm.avail_out === 0 ? ut : V) : (h.strstart > h.block_start && (R(h, !1), h.strm.avail_out), m);
      }), new q(4, 4, 8, 4, k), new q(4, 5, 16, 8, k), new q(4, 6, 32, 32, k), new q(4, 4, 16, 16, S), new q(8, 16, 32, 32, S), new q(8, 16, 128, 128, S), new q(8, 32, 128, 256, S), new q(32, 128, 258, 1024, S), new q(32, 258, 258, 4096, S)], a.deflateInit = function(h, H) {
        return st(h, H, E, 15, 8, 0);
      }, a.deflateInit2 = st, a.deflateReset = U, a.deflateResetKeep = F, a.deflateSetHeader = function(h, H) {
        return h && h.state ? h.state.wrap !== 2 ? y : (h.state.gzhead = H, f) : y;
      }, a.deflate = function(h, H) {
        var T, l, u, v;
        if (!h || !h.state || 5 < H || H < 0)
          return h ? ft(h, y) : y;
        if (l = h.state, !h.output || !h.input && h.avail_in !== 0 || l.status === 666 && H !== _)
          return ft(h, h.avail_out === 0 ? -5 : y);
        if (l.strm = h, T = l.last_flush, l.last_flush = H, l.status === I)
          if (l.wrap === 2)
            h.adler = 0, Z(l, 31), Z(l, 139), Z(l, 8), l.gzhead ? (Z(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)), Z(l, 255 & l.gzhead.time), Z(l, l.gzhead.time >> 8 & 255), Z(l, l.gzhead.time >> 16 & 255), Z(l, l.gzhead.time >> 24 & 255), Z(l, l.level === 9 ? 2 : 2 <= l.strategy || l.level < 2 ? 4 : 0), Z(l, 255 & l.gzhead.os), l.gzhead.extra && l.gzhead.extra.length && (Z(l, 255 & l.gzhead.extra.length), Z(l, l.gzhead.extra.length >> 8 & 255)), l.gzhead.hcrc && (h.adler = w(h.adler, l.pending_buf, l.pending, 0)), l.gzindex = 0, l.status = 69) : (Z(l, 0), Z(l, 0), Z(l, 0), Z(l, 0), Z(l, 0), Z(l, l.level === 9 ? 2 : 2 <= l.strategy || l.level < 2 ? 4 : 0), Z(l, 3), l.status = j);
          else {
            var D = E + (l.w_bits - 8 << 4) << 8;
            D |= (2 <= l.strategy || l.level < 2 ? 0 : l.level < 6 ? 1 : l.level === 6 ? 2 : 3) << 6, l.strstart !== 0 && (D |= 32), D += 31 - D % 31, l.status = j, $(l, D), l.strstart !== 0 && ($(l, h.adler >>> 16), $(l, 65535 & h.adler)), h.adler = 1;
          }
        if (l.status === 69)
          if (l.gzhead.extra) {
            for (u = l.pending; l.gzindex < (65535 & l.gzhead.extra.length) && (l.pending !== l.pending_buf_size || (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending !== l.pending_buf_size)); )
              Z(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), l.gzindex === l.gzhead.extra.length && (l.gzindex = 0, l.status = 73);
          } else
            l.status = 73;
        if (l.status === 73)
          if (l.gzhead.name) {
            u = l.pending;
            do {
              if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending === l.pending_buf_size)) {
                v = 1;
                break;
              }
              v = l.gzindex < l.gzhead.name.length ? 255 & l.gzhead.name.charCodeAt(l.gzindex++) : 0, Z(l, v);
            } while (v !== 0);
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), v === 0 && (l.gzindex = 0, l.status = 91);
          } else
            l.status = 91;
        if (l.status === 91)
          if (l.gzhead.comment) {
            u = l.pending;
            do {
              if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), L(h), u = l.pending, l.pending === l.pending_buf_size)) {
                v = 1;
                break;
              }
              v = l.gzindex < l.gzhead.comment.length ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++) : 0, Z(l, v);
            } while (v !== 0);
            l.gzhead.hcrc && l.pending > u && (h.adler = w(h.adler, l.pending_buf, l.pending - u, u)), v === 0 && (l.status = 103);
          } else
            l.status = 103;
        if (l.status === 103 && (l.gzhead.hcrc ? (l.pending + 2 > l.pending_buf_size && L(h), l.pending + 2 <= l.pending_buf_size && (Z(l, 255 & h.adler), Z(l, h.adler >> 8 & 255), h.adler = 0, l.status = j)) : l.status = j), l.pending !== 0) {
          if (L(h), h.avail_out === 0)
            return l.last_flush = -1, f;
        } else if (h.avail_in === 0 && Y(H) <= Y(T) && H !== _)
          return ft(h, -5);
        if (l.status === 666 && h.avail_in !== 0)
          return ft(h, -5);
        if (h.avail_in !== 0 || l.lookahead !== 0 || H !== g && l.status !== 666) {
          var M = l.strategy === 2 ? function(B, Q) {
            for (var rt; ; ) {
              if (B.lookahead === 0 && (X(B), B.lookahead === 0)) {
                if (Q === g)
                  return m;
                break;
              }
              if (B.match_length = 0, rt = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++, rt && (R(B, !1), B.strm.avail_out === 0))
                return m;
            }
            return B.insert = 0, Q === _ ? (R(B, !0), B.strm.avail_out === 0 ? ut : V) : B.last_lit && (R(B, !1), B.strm.avail_out === 0) ? m : G;
          }(l, H) : l.strategy === 3 ? function(B, Q) {
            for (var rt, et, lt, dt, pt = B.window; ; ) {
              if (B.lookahead <= tt) {
                if (X(B), B.lookahead <= tt && Q === g)
                  return m;
                if (B.lookahead === 0)
                  break;
              }
              if (B.match_length = 0, B.lookahead >= C && 0 < B.strstart && (et = pt[lt = B.strstart - 1]) === pt[++lt] && et === pt[++lt] && et === pt[++lt]) {
                dt = B.strstart + tt;
                do
                  ;
                while (et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && et === pt[++lt] && lt < dt);
                B.match_length = tt - (dt - lt), B.match_length > B.lookahead && (B.match_length = B.lookahead);
              }
              if (B.match_length >= C ? (rt = n._tr_tally(B, 1, B.match_length - C), B.lookahead -= B.match_length, B.strstart += B.match_length, B.match_length = 0) : (rt = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++), rt && (R(B, !1), B.strm.avail_out === 0))
                return m;
            }
            return B.insert = 0, Q === _ ? (R(B, !0), B.strm.avail_out === 0 ? ut : V) : B.last_lit && (R(B, !1), B.strm.avail_out === 0) ? m : G;
          }(l, H) : o[l.level].func(l, H);
          if (M !== ut && M !== V || (l.status = 666), M === m || M === ut)
            return h.avail_out === 0 && (l.last_flush = -1), f;
          if (M === G && (H === 1 ? n._tr_align(l) : H !== 5 && (n._tr_stored_block(l, 0, 0, !1), H === 3 && (ct(l.head), l.lookahead === 0 && (l.strstart = 0, l.block_start = 0, l.insert = 0))), L(h), h.avail_out === 0))
            return l.last_flush = -1, f;
        }
        return H !== _ ? f : l.wrap <= 0 ? 1 : (l.wrap === 2 ? (Z(l, 255 & h.adler), Z(l, h.adler >> 8 & 255), Z(l, h.adler >> 16 & 255), Z(l, h.adler >> 24 & 255), Z(l, 255 & h.total_in), Z(l, h.total_in >> 8 & 255), Z(l, h.total_in >> 16 & 255), Z(l, h.total_in >> 24 & 255)) : ($(l, h.adler >>> 16), $(l, 65535 & h.adler)), L(h), 0 < l.wrap && (l.wrap = -l.wrap), l.pending !== 0 ? f : 1);
      }, a.deflateEnd = function(h) {
        var H;
        return h && h.state ? (H = h.state.status) !== I && H !== 69 && H !== 73 && H !== 91 && H !== 103 && H !== j && H !== 666 ? ft(h, y) : (h.state = null, H === j ? ft(h, -3) : f) : y;
      }, a.deflateSetDictionary = function(h, H) {
        var T, l, u, v, D, M, B, Q, rt = H.length;
        if (!h || !h.state || (v = (T = h.state).wrap) === 2 || v === 1 && T.status !== I || T.lookahead)
          return y;
        for (v === 1 && (h.adler = c(h.adler, H, rt, 0)), T.wrap = 0, rt >= T.w_size && (v === 0 && (ct(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), Q = new s.Buf8(T.w_size), s.arraySet(Q, H, rt - T.w_size, T.w_size, 0), H = Q, rt = T.w_size), D = h.avail_in, M = h.next_in, B = h.input, h.avail_in = rt, h.next_in = 0, h.input = H, X(T); T.lookahead >= C; ) {
          for (l = T.strstart, u = T.lookahead - (C - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[l + C - 1]) & T.hash_mask, T.prev[l & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = l, l++, --u; )
            ;
          T.strstart = l, T.lookahead = C - 1, X(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = C - 1, T.match_available = 0, h.next_in = M, h.input = B, h.avail_in = D, T.wrap = v, f;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, i, a) {
      i.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, i, a) {
      i.exports = function(o, s) {
        var n, c, w, b, g, _, f, y, d, x, p, E, A, N, O, z, P, K, C, tt, at, I, j, m, G;
        n = o.state, c = o.next_in, m = o.input, w = c + (o.avail_in - 5), b = o.next_out, G = o.output, g = b - (s - o.avail_out), _ = b + (o.avail_out - 257), f = n.dmax, y = n.wsize, d = n.whave, x = n.wnext, p = n.window, E = n.hold, A = n.bits, N = n.lencode, O = n.distcode, z = (1 << n.lenbits) - 1, P = (1 << n.distbits) - 1;
        t:
          do {
            A < 15 && (E += m[c++] << A, A += 8, E += m[c++] << A, A += 8), K = N[E & z];
            e:
              for (; ; ) {
                if (E >>>= C = K >>> 24, A -= C, (C = K >>> 16 & 255) === 0)
                  G[b++] = 65535 & K;
                else {
                  if (!(16 & C)) {
                    if (!(64 & C)) {
                      K = N[(65535 & K) + (E & (1 << C) - 1)];
                      continue e;
                    }
                    if (32 & C) {
                      n.mode = 12;
                      break t;
                    }
                    o.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  tt = 65535 & K, (C &= 15) && (A < C && (E += m[c++] << A, A += 8), tt += E & (1 << C) - 1, E >>>= C, A -= C), A < 15 && (E += m[c++] << A, A += 8, E += m[c++] << A, A += 8), K = O[E & P];
                  r:
                    for (; ; ) {
                      if (E >>>= C = K >>> 24, A -= C, !(16 & (C = K >>> 16 & 255))) {
                        if (!(64 & C)) {
                          K = O[(65535 & K) + (E & (1 << C) - 1)];
                          continue r;
                        }
                        o.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (at = 65535 & K, A < (C &= 15) && (E += m[c++] << A, (A += 8) < C && (E += m[c++] << A, A += 8)), f < (at += E & (1 << C) - 1)) {
                        o.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (E >>>= C, A -= C, (C = b - g) < at) {
                        if (d < (C = at - C) && n.sane) {
                          o.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (j = p, (I = 0) === x) {
                          if (I += y - C, C < tt) {
                            for (tt -= C; G[b++] = p[I++], --C; )
                              ;
                            I = b - at, j = G;
                          }
                        } else if (x < C) {
                          if (I += y + x - C, (C -= x) < tt) {
                            for (tt -= C; G[b++] = p[I++], --C; )
                              ;
                            if (I = 0, x < tt) {
                              for (tt -= C = x; G[b++] = p[I++], --C; )
                                ;
                              I = b - at, j = G;
                            }
                          }
                        } else if (I += x - C, C < tt) {
                          for (tt -= C; G[b++] = p[I++], --C; )
                            ;
                          I = b - at, j = G;
                        }
                        for (; 2 < tt; )
                          G[b++] = j[I++], G[b++] = j[I++], G[b++] = j[I++], tt -= 3;
                        tt && (G[b++] = j[I++], 1 < tt && (G[b++] = j[I++]));
                      } else {
                        for (I = b - at; G[b++] = G[I++], G[b++] = G[I++], G[b++] = G[I++], 2 < (tt -= 3); )
                          ;
                        tt && (G[b++] = G[I++], 1 < tt && (G[b++] = G[I++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (c < w && b < _);
        c -= tt = A >> 3, E &= (1 << (A -= tt << 3)) - 1, o.next_in = c, o.next_out = b, o.avail_in = c < w ? w - c + 5 : 5 - (c - w), o.avail_out = b < _ ? _ - b + 257 : 257 - (b - _), n.hold = E, n.bits = A;
      };
    }, {}], 49: [function(r, i, a) {
      var o = r("../utils/common"), s = r("./adler32"), n = r("./crc32"), c = r("./inffast"), w = r("./inftrees"), b = 1, g = 2, _ = 0, f = -2, y = 1, d = 852, x = 592;
      function p(I) {
        return (I >>> 24 & 255) + (I >>> 8 & 65280) + ((65280 & I) << 8) + ((255 & I) << 24);
      }
      function E() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function A(I) {
        var j;
        return I && I.state ? (j = I.state, I.total_in = I.total_out = j.total = 0, I.msg = "", j.wrap && (I.adler = 1 & j.wrap), j.mode = y, j.last = 0, j.havedict = 0, j.dmax = 32768, j.head = null, j.hold = 0, j.bits = 0, j.lencode = j.lendyn = new o.Buf32(d), j.distcode = j.distdyn = new o.Buf32(x), j.sane = 1, j.back = -1, _) : f;
      }
      function N(I) {
        var j;
        return I && I.state ? ((j = I.state).wsize = 0, j.whave = 0, j.wnext = 0, A(I)) : f;
      }
      function O(I, j) {
        var m, G;
        return I && I.state ? (G = I.state, j < 0 ? (m = 0, j = -j) : (m = 1 + (j >> 4), j < 48 && (j &= 15)), j && (j < 8 || 15 < j) ? f : (G.window !== null && G.wbits !== j && (G.window = null), G.wrap = m, G.wbits = j, N(I))) : f;
      }
      function z(I, j) {
        var m, G;
        return I ? (G = new E(), (I.state = G).window = null, (m = O(I, j)) !== _ && (I.state = null), m) : f;
      }
      var P, K, C = !0;
      function tt(I) {
        if (C) {
          var j;
          for (P = new o.Buf32(512), K = new o.Buf32(32), j = 0; j < 144; )
            I.lens[j++] = 8;
          for (; j < 256; )
            I.lens[j++] = 9;
          for (; j < 280; )
            I.lens[j++] = 7;
          for (; j < 288; )
            I.lens[j++] = 8;
          for (w(b, I.lens, 0, 288, P, 0, I.work, { bits: 9 }), j = 0; j < 32; )
            I.lens[j++] = 5;
          w(g, I.lens, 0, 32, K, 0, I.work, { bits: 5 }), C = !1;
        }
        I.lencode = P, I.lenbits = 9, I.distcode = K, I.distbits = 5;
      }
      function at(I, j, m, G) {
        var ut, V = I.state;
        return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new o.Buf8(V.wsize)), G >= V.wsize ? (o.arraySet(V.window, j, m - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (G < (ut = V.wsize - V.wnext) && (ut = G), o.arraySet(V.window, j, m - G, ut, V.wnext), (G -= ut) ? (o.arraySet(V.window, j, m - G, G, 0), V.wnext = G, V.whave = V.wsize) : (V.wnext += ut, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += ut))), 0;
      }
      a.inflateReset = N, a.inflateReset2 = O, a.inflateResetKeep = A, a.inflateInit = function(I) {
        return z(I, 15);
      }, a.inflateInit2 = z, a.inflate = function(I, j) {
        var m, G, ut, V, ft, Y, ct, L, R, Z, $, J, X, k, S, q, W, F, U, st, h, H, T, l, u = 0, v = new o.Buf8(4), D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!I || !I.state || !I.output || !I.input && I.avail_in !== 0)
          return f;
        (m = I.state).mode === 12 && (m.mode = 13), ft = I.next_out, ut = I.output, ct = I.avail_out, V = I.next_in, G = I.input, Y = I.avail_in, L = m.hold, R = m.bits, Z = Y, $ = ct, H = _;
        t:
          for (; ; )
            switch (m.mode) {
              case y:
                if (m.wrap === 0) {
                  m.mode = 13;
                  break;
                }
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (2 & m.wrap && L === 35615) {
                  v[m.check = 0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0), R = L = 0, m.mode = 2;
                  break;
                }
                if (m.flags = 0, m.head && (m.head.done = !1), !(1 & m.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                  I.msg = "incorrect header check", m.mode = 30;
                  break;
                }
                if ((15 & L) != 8) {
                  I.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (R -= 4, h = 8 + (15 & (L >>>= 4)), m.wbits === 0)
                  m.wbits = h;
                else if (h > m.wbits) {
                  I.msg = "invalid window size", m.mode = 30;
                  break;
                }
                m.dmax = 1 << h, I.adler = m.check = 1, m.mode = 512 & L ? 10 : 12, R = L = 0;
                break;
              case 2:
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (m.flags = L, (255 & m.flags) != 8) {
                  I.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (57344 & m.flags) {
                  I.msg = "unknown header flags set", m.mode = 30;
                  break;
                }
                m.head && (m.head.text = L >> 8 & 1), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0, m.mode = 3;
              case 3:
                for (; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                m.head && (m.head.time = L), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, v[2] = L >>> 16 & 255, v[3] = L >>> 24 & 255, m.check = n(m.check, v, 4, 0)), R = L = 0, m.mode = 4;
              case 4:
                for (; R < 16; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                m.head && (m.head.xflags = 255 & L, m.head.os = L >> 8), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0, m.mode = 5;
              case 5:
                if (1024 & m.flags) {
                  for (; R < 16; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.length = L, m.head && (m.head.extra_len = L), 512 & m.flags && (v[0] = 255 & L, v[1] = L >>> 8 & 255, m.check = n(m.check, v, 2, 0)), R = L = 0;
                } else
                  m.head && (m.head.extra = null);
                m.mode = 6;
              case 6:
                if (1024 & m.flags && (Y < (J = m.length) && (J = Y), J && (m.head && (h = m.head.extra_len - m.length, m.head.extra || (m.head.extra = new Array(m.head.extra_len)), o.arraySet(m.head.extra, G, V, J, h)), 512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, m.length -= J), m.length))
                  break t;
                m.length = 0, m.mode = 7;
              case 7:
                if (2048 & m.flags) {
                  if (Y === 0)
                    break t;
                  for (J = 0; h = G[V + J++], m.head && h && m.length < 65536 && (m.head.name += String.fromCharCode(h)), h && J < Y; )
                    ;
                  if (512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, h)
                    break t;
                } else
                  m.head && (m.head.name = null);
                m.length = 0, m.mode = 8;
              case 8:
                if (4096 & m.flags) {
                  if (Y === 0)
                    break t;
                  for (J = 0; h = G[V + J++], m.head && h && m.length < 65536 && (m.head.comment += String.fromCharCode(h)), h && J < Y; )
                    ;
                  if (512 & m.flags && (m.check = n(m.check, G, J, V)), Y -= J, V += J, h)
                    break t;
                } else
                  m.head && (m.head.comment = null);
                m.mode = 9;
              case 9:
                if (512 & m.flags) {
                  for (; R < 16; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (L !== (65535 & m.check)) {
                    I.msg = "header crc mismatch", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.head && (m.head.hcrc = m.flags >> 9 & 1, m.head.done = !0), I.adler = m.check = 0, m.mode = 12;
                break;
              case 10:
                for (; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                I.adler = m.check = p(L), R = L = 0, m.mode = 11;
              case 11:
                if (m.havedict === 0)
                  return I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, 2;
                I.adler = m.check = 1, m.mode = 12;
              case 12:
                if (j === 5 || j === 6)
                  break t;
              case 13:
                if (m.last) {
                  L >>>= 7 & R, R -= 7 & R, m.mode = 27;
                  break;
                }
                for (; R < 3; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                switch (m.last = 1 & L, R -= 1, 3 & (L >>>= 1)) {
                  case 0:
                    m.mode = 14;
                    break;
                  case 1:
                    if (tt(m), m.mode = 20, j !== 6)
                      break;
                    L >>>= 2, R -= 2;
                    break t;
                  case 2:
                    m.mode = 17;
                    break;
                  case 3:
                    I.msg = "invalid block type", m.mode = 30;
                }
                L >>>= 2, R -= 2;
                break;
              case 14:
                for (L >>>= 7 & R, R -= 7 & R; R < 32; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if ((65535 & L) != (L >>> 16 ^ 65535)) {
                  I.msg = "invalid stored block lengths", m.mode = 30;
                  break;
                }
                if (m.length = 65535 & L, R = L = 0, m.mode = 15, j === 6)
                  break t;
              case 15:
                m.mode = 16;
              case 16:
                if (J = m.length) {
                  if (Y < J && (J = Y), ct < J && (J = ct), J === 0)
                    break t;
                  o.arraySet(ut, G, V, J, ft), Y -= J, V += J, ct -= J, ft += J, m.length -= J;
                  break;
                }
                m.mode = 12;
                break;
              case 17:
                for (; R < 14; ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (m.nlen = 257 + (31 & L), L >>>= 5, R -= 5, m.ndist = 1 + (31 & L), L >>>= 5, R -= 5, m.ncode = 4 + (15 & L), L >>>= 4, R -= 4, 286 < m.nlen || 30 < m.ndist) {
                  I.msg = "too many length or distance symbols", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 18;
              case 18:
                for (; m.have < m.ncode; ) {
                  for (; R < 3; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.lens[D[m.have++]] = 7 & L, L >>>= 3, R -= 3;
                }
                for (; m.have < 19; )
                  m.lens[D[m.have++]] = 0;
                if (m.lencode = m.lendyn, m.lenbits = 7, T = { bits: m.lenbits }, H = w(0, m.lens, 0, 19, m.lencode, 0, m.work, T), m.lenbits = T.bits, H) {
                  I.msg = "invalid code lengths set", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 19;
              case 19:
                for (; m.have < m.nlen + m.ndist; ) {
                  for (; q = (u = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (W < 16)
                    L >>>= S, R -= S, m.lens[m.have++] = W;
                  else {
                    if (W === 16) {
                      for (l = S + 2; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      if (L >>>= S, R -= S, m.have === 0) {
                        I.msg = "invalid bit length repeat", m.mode = 30;
                        break;
                      }
                      h = m.lens[m.have - 1], J = 3 + (3 & L), L >>>= 2, R -= 2;
                    } else if (W === 17) {
                      for (l = S + 3; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      R -= S, h = 0, J = 3 + (7 & (L >>>= S)), L >>>= 3, R -= 3;
                    } else {
                      for (l = S + 7; R < l; ) {
                        if (Y === 0)
                          break t;
                        Y--, L += G[V++] << R, R += 8;
                      }
                      R -= S, h = 0, J = 11 + (127 & (L >>>= S)), L >>>= 7, R -= 7;
                    }
                    if (m.have + J > m.nlen + m.ndist) {
                      I.msg = "invalid bit length repeat", m.mode = 30;
                      break;
                    }
                    for (; J--; )
                      m.lens[m.have++] = h;
                  }
                }
                if (m.mode === 30)
                  break;
                if (m.lens[256] === 0) {
                  I.msg = "invalid code -- missing end-of-block", m.mode = 30;
                  break;
                }
                if (m.lenbits = 9, T = { bits: m.lenbits }, H = w(b, m.lens, 0, m.nlen, m.lencode, 0, m.work, T), m.lenbits = T.bits, H) {
                  I.msg = "invalid literal/lengths set", m.mode = 30;
                  break;
                }
                if (m.distbits = 6, m.distcode = m.distdyn, T = { bits: m.distbits }, H = w(g, m.lens, m.nlen, m.ndist, m.distcode, 0, m.work, T), m.distbits = T.bits, H) {
                  I.msg = "invalid distances set", m.mode = 30;
                  break;
                }
                if (m.mode = 20, j === 6)
                  break t;
              case 20:
                m.mode = 21;
              case 21:
                if (6 <= Y && 258 <= ct) {
                  I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, c(I, $), ft = I.next_out, ut = I.output, ct = I.avail_out, V = I.next_in, G = I.input, Y = I.avail_in, L = m.hold, R = m.bits, m.mode === 12 && (m.back = -1);
                  break;
                }
                for (m.back = 0; q = (u = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (q && !(240 & q)) {
                  for (F = S, U = q, st = W; q = (u = m.lencode[st + ((L & (1 << F + U) - 1) >> F)]) >>> 16 & 255, W = 65535 & u, !(F + (S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  L >>>= F, R -= F, m.back += F;
                }
                if (L >>>= S, R -= S, m.back += S, m.length = W, q === 0) {
                  m.mode = 26;
                  break;
                }
                if (32 & q) {
                  m.back = -1, m.mode = 12;
                  break;
                }
                if (64 & q) {
                  I.msg = "invalid literal/length code", m.mode = 30;
                  break;
                }
                m.extra = 15 & q, m.mode = 22;
              case 22:
                if (m.extra) {
                  for (l = m.extra; R < l; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.length += L & (1 << m.extra) - 1, L >>>= m.extra, R -= m.extra, m.back += m.extra;
                }
                m.was = m.length, m.mode = 23;
              case 23:
                for (; q = (u = m.distcode[L & (1 << m.distbits) - 1]) >>> 16 & 255, W = 65535 & u, !((S = u >>> 24) <= R); ) {
                  if (Y === 0)
                    break t;
                  Y--, L += G[V++] << R, R += 8;
                }
                if (!(240 & q)) {
                  for (F = S, U = q, st = W; q = (u = m.distcode[st + ((L & (1 << F + U) - 1) >> F)]) >>> 16 & 255, W = 65535 & u, !(F + (S = u >>> 24) <= R); ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  L >>>= F, R -= F, m.back += F;
                }
                if (L >>>= S, R -= S, m.back += S, 64 & q) {
                  I.msg = "invalid distance code", m.mode = 30;
                  break;
                }
                m.offset = W, m.extra = 15 & q, m.mode = 24;
              case 24:
                if (m.extra) {
                  for (l = m.extra; R < l; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  m.offset += L & (1 << m.extra) - 1, L >>>= m.extra, R -= m.extra, m.back += m.extra;
                }
                if (m.offset > m.dmax) {
                  I.msg = "invalid distance too far back", m.mode = 30;
                  break;
                }
                m.mode = 25;
              case 25:
                if (ct === 0)
                  break t;
                if (J = $ - ct, m.offset > J) {
                  if ((J = m.offset - J) > m.whave && m.sane) {
                    I.msg = "invalid distance too far back", m.mode = 30;
                    break;
                  }
                  X = J > m.wnext ? (J -= m.wnext, m.wsize - J) : m.wnext - J, J > m.length && (J = m.length), k = m.window;
                } else
                  k = ut, X = ft - m.offset, J = m.length;
                for (ct < J && (J = ct), ct -= J, m.length -= J; ut[ft++] = k[X++], --J; )
                  ;
                m.length === 0 && (m.mode = 21);
                break;
              case 26:
                if (ct === 0)
                  break t;
                ut[ft++] = m.length, ct--, m.mode = 21;
                break;
              case 27:
                if (m.wrap) {
                  for (; R < 32; ) {
                    if (Y === 0)
                      break t;
                    Y--, L |= G[V++] << R, R += 8;
                  }
                  if ($ -= ct, I.total_out += $, m.total += $, $ && (I.adler = m.check = m.flags ? n(m.check, ut, $, ft - $) : s(m.check, ut, $, ft - $)), $ = ct, (m.flags ? L : p(L)) !== m.check) {
                    I.msg = "incorrect data check", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.mode = 28;
              case 28:
                if (m.wrap && m.flags) {
                  for (; R < 32; ) {
                    if (Y === 0)
                      break t;
                    Y--, L += G[V++] << R, R += 8;
                  }
                  if (L !== (4294967295 & m.total)) {
                    I.msg = "incorrect length check", m.mode = 30;
                    break;
                  }
                  R = L = 0;
                }
                m.mode = 29;
              case 29:
                H = 1;
                break t;
              case 30:
                H = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return f;
            }
        return I.next_out = ft, I.avail_out = ct, I.next_in = V, I.avail_in = Y, m.hold = L, m.bits = R, (m.wsize || $ !== I.avail_out && m.mode < 30 && (m.mode < 27 || j !== 4)) && at(I, I.output, I.next_out, $ - I.avail_out) ? (m.mode = 31, -4) : (Z -= I.avail_in, $ -= I.avail_out, I.total_in += Z, I.total_out += $, m.total += $, m.wrap && $ && (I.adler = m.check = m.flags ? n(m.check, ut, $, I.next_out - $) : s(m.check, ut, $, I.next_out - $)), I.data_type = m.bits + (m.last ? 64 : 0) + (m.mode === 12 ? 128 : 0) + (m.mode === 20 || m.mode === 15 ? 256 : 0), (Z == 0 && $ === 0 || j === 4) && H === _ && (H = -5), H);
      }, a.inflateEnd = function(I) {
        if (!I || !I.state)
          return f;
        var j = I.state;
        return j.window && (j.window = null), I.state = null, _;
      }, a.inflateGetHeader = function(I, j) {
        var m;
        return I && I.state && 2 & (m = I.state).wrap ? ((m.head = j).done = !1, _) : f;
      }, a.inflateSetDictionary = function(I, j) {
        var m, G = j.length;
        return I && I.state ? (m = I.state).wrap !== 0 && m.mode !== 11 ? f : m.mode === 11 && s(1, j, G, 0) !== m.check ? -3 : at(I, j, G, G) ? (m.mode = 31, -4) : (m.havedict = 1, _) : f;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, i, a) {
      var o = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], w = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      i.exports = function(b, g, _, f, y, d, x, p) {
        var E, A, N, O, z, P, K, C, tt, at = p.bits, I = 0, j = 0, m = 0, G = 0, ut = 0, V = 0, ft = 0, Y = 0, ct = 0, L = 0, R = null, Z = 0, $ = new o.Buf16(16), J = new o.Buf16(16), X = null, k = 0;
        for (I = 0; I <= 15; I++)
          $[I] = 0;
        for (j = 0; j < f; j++)
          $[g[_ + j]]++;
        for (ut = at, G = 15; 1 <= G && $[G] === 0; G--)
          ;
        if (G < ut && (ut = G), G === 0)
          return y[d++] = 20971520, y[d++] = 20971520, p.bits = 1, 0;
        for (m = 1; m < G && $[m] === 0; m++)
          ;
        for (ut < m && (ut = m), I = Y = 1; I <= 15; I++)
          if (Y <<= 1, (Y -= $[I]) < 0)
            return -1;
        if (0 < Y && (b === 0 || G !== 1))
          return -1;
        for (J[1] = 0, I = 1; I < 15; I++)
          J[I + 1] = J[I] + $[I];
        for (j = 0; j < f; j++)
          g[_ + j] !== 0 && (x[J[g[_ + j]]++] = j);
        if (P = b === 0 ? (R = X = x, 19) : b === 1 ? (R = s, Z -= 257, X = n, k -= 257, 256) : (R = c, X = w, -1), I = m, z = d, ft = j = L = 0, N = -1, O = (ct = 1 << (V = ut)) - 1, b === 1 && 852 < ct || b === 2 && 592 < ct)
          return 1;
        for (; ; ) {
          for (K = I - ft, tt = x[j] < P ? (C = 0, x[j]) : x[j] > P ? (C = X[k + x[j]], R[Z + x[j]]) : (C = 96, 0), E = 1 << I - ft, m = A = 1 << V; y[z + (L >> ft) + (A -= E)] = K << 24 | C << 16 | tt | 0, A !== 0; )
            ;
          for (E = 1 << I - 1; L & E; )
            E >>= 1;
          if (E !== 0 ? (L &= E - 1, L += E) : L = 0, j++, --$[I] == 0) {
            if (I === G)
              break;
            I = g[_ + x[j]];
          }
          if (ut < I && (L & O) !== N) {
            for (ft === 0 && (ft = ut), z += m, Y = 1 << (V = I - ft); V + ft < G && !((Y -= $[V + ft]) <= 0); )
              V++, Y <<= 1;
            if (ct += 1 << V, b === 1 && 852 < ct || b === 2 && 592 < ct)
              return 1;
            y[N = L & O] = ut << 24 | V << 16 | z - d | 0;
          }
        }
        return L !== 0 && (y[z + L] = I - ft << 24 | 64 << 16 | 0), p.bits = ut, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, i, a) {
      i.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, i, a) {
      var o = r("../utils/common"), s = 0, n = 1;
      function c(u) {
        for (var v = u.length; 0 <= --v; )
          u[v] = 0;
      }
      var w = 0, b = 29, g = 256, _ = g + 1 + b, f = 30, y = 19, d = 2 * _ + 1, x = 15, p = 16, E = 7, A = 256, N = 16, O = 17, z = 18, P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], K = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], tt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], at = new Array(2 * (_ + 2));
      c(at);
      var I = new Array(2 * f);
      c(I);
      var j = new Array(512);
      c(j);
      var m = new Array(256);
      c(m);
      var G = new Array(b);
      c(G);
      var ut, V, ft, Y = new Array(f);
      function ct(u, v, D, M, B) {
        this.static_tree = u, this.extra_bits = v, this.extra_base = D, this.elems = M, this.max_length = B, this.has_stree = u && u.length;
      }
      function L(u, v) {
        this.dyn_tree = u, this.max_code = 0, this.stat_desc = v;
      }
      function R(u) {
        return u < 256 ? j[u] : j[256 + (u >>> 7)];
      }
      function Z(u, v) {
        u.pending_buf[u.pending++] = 255 & v, u.pending_buf[u.pending++] = v >>> 8 & 255;
      }
      function $(u, v, D) {
        u.bi_valid > p - D ? (u.bi_buf |= v << u.bi_valid & 65535, Z(u, u.bi_buf), u.bi_buf = v >> p - u.bi_valid, u.bi_valid += D - p) : (u.bi_buf |= v << u.bi_valid & 65535, u.bi_valid += D);
      }
      function J(u, v, D) {
        $(u, D[2 * v], D[2 * v + 1]);
      }
      function X(u, v) {
        for (var D = 0; D |= 1 & u, u >>>= 1, D <<= 1, 0 < --v; )
          ;
        return D >>> 1;
      }
      function k(u, v, D) {
        var M, B, Q = new Array(x + 1), rt = 0;
        for (M = 1; M <= x; M++)
          Q[M] = rt = rt + D[M - 1] << 1;
        for (B = 0; B <= v; B++) {
          var et = u[2 * B + 1];
          et !== 0 && (u[2 * B] = X(Q[et]++, et));
        }
      }
      function S(u) {
        var v;
        for (v = 0; v < _; v++)
          u.dyn_ltree[2 * v] = 0;
        for (v = 0; v < f; v++)
          u.dyn_dtree[2 * v] = 0;
        for (v = 0; v < y; v++)
          u.bl_tree[2 * v] = 0;
        u.dyn_ltree[2 * A] = 1, u.opt_len = u.static_len = 0, u.last_lit = u.matches = 0;
      }
      function q(u) {
        8 < u.bi_valid ? Z(u, u.bi_buf) : 0 < u.bi_valid && (u.pending_buf[u.pending++] = u.bi_buf), u.bi_buf = 0, u.bi_valid = 0;
      }
      function W(u, v, D, M) {
        var B = 2 * v, Q = 2 * D;
        return u[B] < u[Q] || u[B] === u[Q] && M[v] <= M[D];
      }
      function F(u, v, D) {
        for (var M = u.heap[D], B = D << 1; B <= u.heap_len && (B < u.heap_len && W(v, u.heap[B + 1], u.heap[B], u.depth) && B++, !W(v, M, u.heap[B], u.depth)); )
          u.heap[D] = u.heap[B], D = B, B <<= 1;
        u.heap[D] = M;
      }
      function U(u, v, D) {
        var M, B, Q, rt, et = 0;
        if (u.last_lit !== 0)
          for (; M = u.pending_buf[u.d_buf + 2 * et] << 8 | u.pending_buf[u.d_buf + 2 * et + 1], B = u.pending_buf[u.l_buf + et], et++, M === 0 ? J(u, B, v) : (J(u, (Q = m[B]) + g + 1, v), (rt = P[Q]) !== 0 && $(u, B -= G[Q], rt), J(u, Q = R(--M), D), (rt = K[Q]) !== 0 && $(u, M -= Y[Q], rt)), et < u.last_lit; )
            ;
        J(u, A, v);
      }
      function st(u, v) {
        var D, M, B, Q = v.dyn_tree, rt = v.stat_desc.static_tree, et = v.stat_desc.has_stree, lt = v.stat_desc.elems, dt = -1;
        for (u.heap_len = 0, u.heap_max = d, D = 0; D < lt; D++)
          Q[2 * D] !== 0 ? (u.heap[++u.heap_len] = dt = D, u.depth[D] = 0) : Q[2 * D + 1] = 0;
        for (; u.heap_len < 2; )
          Q[2 * (B = u.heap[++u.heap_len] = dt < 2 ? ++dt : 0)] = 1, u.depth[B] = 0, u.opt_len--, et && (u.static_len -= rt[2 * B + 1]);
        for (v.max_code = dt, D = u.heap_len >> 1; 1 <= D; D--)
          F(u, Q, D);
        for (B = lt; D = u.heap[1], u.heap[1] = u.heap[u.heap_len--], F(u, Q, 1), M = u.heap[1], u.heap[--u.heap_max] = D, u.heap[--u.heap_max] = M, Q[2 * B] = Q[2 * D] + Q[2 * M], u.depth[B] = (u.depth[D] >= u.depth[M] ? u.depth[D] : u.depth[M]) + 1, Q[2 * D + 1] = Q[2 * M + 1] = B, u.heap[1] = B++, F(u, Q, 1), 2 <= u.heap_len; )
          ;
        u.heap[--u.heap_max] = u.heap[1], function(pt, xt) {
          var Ht, Ct, Jt, vt, oe, Ee, Bt = xt.dyn_tree, Je = xt.max_code, Zr = xt.stat_desc.static_tree, Xr = xt.stat_desc.has_stree, Yr = xt.stat_desc.extra_bits, Qe = xt.stat_desc.extra_base, Qt = xt.stat_desc.max_length, le = 0;
          for (vt = 0; vt <= x; vt++)
            pt.bl_count[vt] = 0;
          for (Bt[2 * pt.heap[pt.heap_max] + 1] = 0, Ht = pt.heap_max + 1; Ht < d; Ht++)
            Qt < (vt = Bt[2 * Bt[2 * (Ct = pt.heap[Ht]) + 1] + 1] + 1) && (vt = Qt, le++), Bt[2 * Ct + 1] = vt, Je < Ct || (pt.bl_count[vt]++, oe = 0, Qe <= Ct && (oe = Yr[Ct - Qe]), Ee = Bt[2 * Ct], pt.opt_len += Ee * (vt + oe), Xr && (pt.static_len += Ee * (Zr[2 * Ct + 1] + oe)));
          if (le !== 0) {
            do {
              for (vt = Qt - 1; pt.bl_count[vt] === 0; )
                vt--;
              pt.bl_count[vt]--, pt.bl_count[vt + 1] += 2, pt.bl_count[Qt]--, le -= 2;
            } while (0 < le);
            for (vt = Qt; vt !== 0; vt--)
              for (Ct = pt.bl_count[vt]; Ct !== 0; )
                Je < (Jt = pt.heap[--Ht]) || (Bt[2 * Jt + 1] !== vt && (pt.opt_len += (vt - Bt[2 * Jt + 1]) * Bt[2 * Jt], Bt[2 * Jt + 1] = vt), Ct--);
          }
        }(u, v), k(Q, dt, u.bl_count);
      }
      function h(u, v, D) {
        var M, B, Q = -1, rt = v[1], et = 0, lt = 7, dt = 4;
        for (rt === 0 && (lt = 138, dt = 3), v[2 * (D + 1) + 1] = 65535, M = 0; M <= D; M++)
          B = rt, rt = v[2 * (M + 1) + 1], ++et < lt && B === rt || (et < dt ? u.bl_tree[2 * B] += et : B !== 0 ? (B !== Q && u.bl_tree[2 * B]++, u.bl_tree[2 * N]++) : et <= 10 ? u.bl_tree[2 * O]++ : u.bl_tree[2 * z]++, Q = B, dt = (et = 0) === rt ? (lt = 138, 3) : B === rt ? (lt = 6, 3) : (lt = 7, 4));
      }
      function H(u, v, D) {
        var M, B, Q = -1, rt = v[1], et = 0, lt = 7, dt = 4;
        for (rt === 0 && (lt = 138, dt = 3), M = 0; M <= D; M++)
          if (B = rt, rt = v[2 * (M + 1) + 1], !(++et < lt && B === rt)) {
            if (et < dt)
              for (; J(u, B, u.bl_tree), --et != 0; )
                ;
            else
              B !== 0 ? (B !== Q && (J(u, B, u.bl_tree), et--), J(u, N, u.bl_tree), $(u, et - 3, 2)) : et <= 10 ? (J(u, O, u.bl_tree), $(u, et - 3, 3)) : (J(u, z, u.bl_tree), $(u, et - 11, 7));
            Q = B, dt = (et = 0) === rt ? (lt = 138, 3) : B === rt ? (lt = 6, 3) : (lt = 7, 4);
          }
      }
      c(Y);
      var T = !1;
      function l(u, v, D, M) {
        $(u, (w << 1) + (M ? 1 : 0), 3), function(B, Q, rt, et) {
          q(B), et && (Z(B, rt), Z(B, ~rt)), o.arraySet(B.pending_buf, B.window, Q, rt, B.pending), B.pending += rt;
        }(u, v, D, !0);
      }
      a._tr_init = function(u) {
        T || (function() {
          var v, D, M, B, Q, rt = new Array(x + 1);
          for (B = M = 0; B < b - 1; B++)
            for (G[B] = M, v = 0; v < 1 << P[B]; v++)
              m[M++] = B;
          for (m[M - 1] = B, B = Q = 0; B < 16; B++)
            for (Y[B] = Q, v = 0; v < 1 << K[B]; v++)
              j[Q++] = B;
          for (Q >>= 7; B < f; B++)
            for (Y[B] = Q << 7, v = 0; v < 1 << K[B] - 7; v++)
              j[256 + Q++] = B;
          for (D = 0; D <= x; D++)
            rt[D] = 0;
          for (v = 0; v <= 143; )
            at[2 * v + 1] = 8, v++, rt[8]++;
          for (; v <= 255; )
            at[2 * v + 1] = 9, v++, rt[9]++;
          for (; v <= 279; )
            at[2 * v + 1] = 7, v++, rt[7]++;
          for (; v <= 287; )
            at[2 * v + 1] = 8, v++, rt[8]++;
          for (k(at, _ + 1, rt), v = 0; v < f; v++)
            I[2 * v + 1] = 5, I[2 * v] = X(v, 5);
          ut = new ct(at, P, g + 1, _, x), V = new ct(I, K, 0, f, x), ft = new ct(new Array(0), C, 0, y, E);
        }(), T = !0), u.l_desc = new L(u.dyn_ltree, ut), u.d_desc = new L(u.dyn_dtree, V), u.bl_desc = new L(u.bl_tree, ft), u.bi_buf = 0, u.bi_valid = 0, S(u);
      }, a._tr_stored_block = l, a._tr_flush_block = function(u, v, D, M) {
        var B, Q, rt = 0;
        0 < u.level ? (u.strm.data_type === 2 && (u.strm.data_type = function(et) {
          var lt, dt = 4093624447;
          for (lt = 0; lt <= 31; lt++, dt >>>= 1)
            if (1 & dt && et.dyn_ltree[2 * lt] !== 0)
              return s;
          if (et.dyn_ltree[18] !== 0 || et.dyn_ltree[20] !== 0 || et.dyn_ltree[26] !== 0)
            return n;
          for (lt = 32; lt < g; lt++)
            if (et.dyn_ltree[2 * lt] !== 0)
              return n;
          return s;
        }(u)), st(u, u.l_desc), st(u, u.d_desc), rt = function(et) {
          var lt;
          for (h(et, et.dyn_ltree, et.l_desc.max_code), h(et, et.dyn_dtree, et.d_desc.max_code), st(et, et.bl_desc), lt = y - 1; 3 <= lt && et.bl_tree[2 * tt[lt] + 1] === 0; lt--)
            ;
          return et.opt_len += 3 * (lt + 1) + 5 + 5 + 4, lt;
        }(u), B = u.opt_len + 3 + 7 >>> 3, (Q = u.static_len + 3 + 7 >>> 3) <= B && (B = Q)) : B = Q = D + 5, D + 4 <= B && v !== -1 ? l(u, v, D, M) : u.strategy === 4 || Q === B ? ($(u, 2 + (M ? 1 : 0), 3), U(u, at, I)) : ($(u, 4 + (M ? 1 : 0), 3), function(et, lt, dt, pt) {
          var xt;
          for ($(et, lt - 257, 5), $(et, dt - 1, 5), $(et, pt - 4, 4), xt = 0; xt < pt; xt++)
            $(et, et.bl_tree[2 * tt[xt] + 1], 3);
          H(et, et.dyn_ltree, lt - 1), H(et, et.dyn_dtree, dt - 1);
        }(u, u.l_desc.max_code + 1, u.d_desc.max_code + 1, rt + 1), U(u, u.dyn_ltree, u.dyn_dtree)), S(u), M && q(u);
      }, a._tr_tally = function(u, v, D) {
        return u.pending_buf[u.d_buf + 2 * u.last_lit] = v >>> 8 & 255, u.pending_buf[u.d_buf + 2 * u.last_lit + 1] = 255 & v, u.pending_buf[u.l_buf + u.last_lit] = 255 & D, u.last_lit++, v === 0 ? u.dyn_ltree[2 * D]++ : (u.matches++, v--, u.dyn_ltree[2 * (m[D] + g + 1)]++, u.dyn_dtree[2 * R(v)]++), u.last_lit === u.lit_bufsize - 1;
      }, a._tr_align = function(u) {
        $(u, 2, 3), J(u, A, at), function(v) {
          v.bi_valid === 16 ? (Z(v, v.bi_buf), v.bi_buf = 0, v.bi_valid = 0) : 8 <= v.bi_valid && (v.pending_buf[v.pending++] = 255 & v.bi_buf, v.bi_buf >>= 8, v.bi_valid -= 8);
        }(u);
      };
    }, { "../utils/common": 41 }], 53: [function(r, i, a) {
      i.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, i, a) {
      (function(o) {
        (function(s, n) {
          if (!s.setImmediate) {
            var c, w, b, g, _ = 1, f = {}, y = !1, d = s.document, x = Object.getPrototypeOf && Object.getPrototypeOf(s);
            x = x && x.setTimeout ? x : s, c = {}.toString.call(s.process) === "[object process]" ? function(N) {
              process.nextTick(function() {
                E(N);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var N = !0, O = s.onmessage;
                return s.onmessage = function() {
                  N = !1;
                }, s.postMessage("", "*"), s.onmessage = O, N;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", A, !1) : s.attachEvent("onmessage", A), function(N) {
              s.postMessage(g + N, "*");
            }) : s.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(N) {
              E(N.data);
            }, function(N) {
              b.port2.postMessage(N);
            }) : d && "onreadystatechange" in d.createElement("script") ? (w = d.documentElement, function(N) {
              var O = d.createElement("script");
              O.onreadystatechange = function() {
                E(N), O.onreadystatechange = null, w.removeChild(O), O = null;
              }, w.appendChild(O);
            }) : function(N) {
              setTimeout(E, 0, N);
            }, x.setImmediate = function(N) {
              typeof N != "function" && (N = new Function("" + N));
              for (var O = new Array(arguments.length - 1), z = 0; z < O.length; z++)
                O[z] = arguments[z + 1];
              var P = { callback: N, args: O };
              return f[_] = P, c(_), _++;
            }, x.clearImmediate = p;
          }
          function p(N) {
            delete f[N];
          }
          function E(N) {
            if (y)
              setTimeout(E, 0, N);
            else {
              var O = f[N];
              if (O) {
                y = !0;
                try {
                  (function(z) {
                    var P = z.callback, K = z.args;
                    switch (K.length) {
                      case 0:
                        P();
                        break;
                      case 1:
                        P(K[0]);
                        break;
                      case 2:
                        P(K[0], K[1]);
                        break;
                      case 3:
                        P(K[0], K[1], K[2]);
                        break;
                      default:
                        P.apply(n, K);
                    }
                  })(O);
                } finally {
                  p(N), y = !1;
                }
              }
            }
          }
          function A(N) {
            N.source === s && typeof N.data == "string" && N.data.indexOf(g) === 0 && E(+N.data.slice(g.length));
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, typeof gr < "u" ? gr : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(zo);
var jp = zo.exports;
const Wp = /* @__PURE__ */ da(jp), jo = 15, Hp = 9525;
function Lt(e) {
  const t = [];
  for (let r = 0; r < e.childNodes.length; r++) {
    const i = e.childNodes[r];
    i.nodeType === 1 && t.push(i);
  }
  return t;
}
function he(e) {
  return Math.round(e / jo);
}
function Fe(e) {
  return Math.round(e / Hp);
}
function Wo(e) {
  return Math.round(e * 2 / 3);
}
const sa = {
  yellow: "#FFFF00",
  green: "#00FF00",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  blue: "#0000FF",
  red: "#FF0000",
  darkBlue: "#00008B",
  darkCyan: "#008B8B",
  darkGreen: "#006400",
  darkMagenta: "#8B008B",
  darkRed: "#8B0000",
  darkYellow: "#808000",
  darkGray: "#A9A9A9",
  lightGray: "#D3D3D3",
  black: "#000000",
  white: "#FFFFFF"
}, Gp = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  bmp: "image/bmp",
  svg: "image/svg+xml",
  webp: "image/webp",
  tiff: "image/tiff"
}, aa = [
  Xt.FIRST,
  Xt.SECOND,
  Xt.THIRD,
  Xt.FOURTH,
  Xt.FIFTH,
  Xt.SIXTH
];
async function oa(e, t) {
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = e.file(t);
  if (!a)
    return { internal: r, external: i };
  const o = new DOMParser().parseFromString(await a.async("text"), "application/xml"), s = t.replace(/_rels\/[^/]+$/, "");
  for (const n of Array.from(o.getElementsByTagName("Relationship"))) {
    const c = n.getAttribute("Id"), w = n.getAttribute("Target") || "";
    !c || !w || (n.getAttribute("TargetMode") === "External" ? i.set(c, w) : r.set(c, decodeURIComponent(new URL(w, "http://localhost/" + s).pathname.slice(1))));
  }
  return { internal: r, external: i };
}
function Kp(e) {
  const t = (a) => e[a] << 8 | e[a + 1], r = (a) => e[a] | e[a + 1] << 8, i = (a) => (e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3]) >>> 0;
  if (e.length > 24 && e[0] === 137 && e[1] === 80)
    return { width: i(16), height: i(20) };
  if (e.length > 10 && e[0] === 71 && e[1] === 73)
    return { width: r(6), height: r(8) };
  if (e.length > 26 && e[0] === 66 && e[1] === 77)
    return {
      width: e[18] | e[19] << 8 | e[20] << 16,
      height: e[22] | e[23] << 8 | e[24] << 16
    };
  if (e.length > 4 && e[0] === 255 && e[1] === 216) {
    let a = 2;
    for (; a + 9 < e.length; ) {
      if (e[a] !== 255) {
        a++;
        continue;
      }
      const o = e[a + 1], s = t(a + 2);
      if (o >= 192 && o <= 195 || o >= 197 && o <= 199 || o >= 201 && o <= 203 || o >= 205 && o <= 207)
        return { height: t(a + 5), width: t(a + 7) };
      a += 2 + s;
    }
  }
  return null;
}
function qp(e) {
  return e !== null && e !== "0" && e !== "false" && e !== "off";
}
function Jn(e, t) {
  const r = e.getElementsByTagName(t)[0];
  if (!r)
    return !1;
  const i = r.getAttribute("w:val");
  return i === null || qp(i);
}
function ur(e) {
  if (!e || e === "auto")
    return;
  const t = e.replace("#", "").slice(-6).toUpperCase();
  return /^[0-9A-F]{6}$/.test(t) ? `#${t}` : void 0;
}
function Ar(e) {
  var g, _, f, y, d;
  const t = {};
  if (!e)
    return t;
  Jn(e, "w:b") && (t.bold = !0), Jn(e, "w:i") && (t.italic = !0);
  const r = (g = e.getElementsByTagName("w:u")[0]) == null ? void 0 : g.getAttribute("w:val");
  r && r !== "none" && (t.underline = !0), Jn(e, "w:strike") && (t.strikeout = !0);
  const i = ur(((_ = e.getElementsByTagName("w:color")[0]) == null ? void 0 : _.getAttribute("w:val")) ?? null);
  i && (t.color = i);
  const a = (f = e.getElementsByTagName("w:highlight")[0]) == null ? void 0 : f.getAttribute("w:val");
  if (a && sa[a])
    t.highlight = sa[a];
  else {
    const x = ur(((y = e.getElementsByTagName("w:shd")[0]) == null ? void 0 : y.getAttribute("w:fill")) ?? null);
    x && x !== "#FFFFFF" && (t.highlight = x);
  }
  const o = e.getElementsByTagName("w:sz")[0], s = e.getElementsByTagName("w:szCs")[0], n = jt(o == null ? void 0 : o.getAttribute("w:val")) || jt(s == null ? void 0 : s.getAttribute("w:val"));
  n && (t.size = Wo(n));
  const c = e.getElementsByTagName("w:rFonts")[0], w = (c == null ? void 0 : c.getAttribute("w:eastAsia")) || (c == null ? void 0 : c.getAttribute("w:ascii")) || (c == null ? void 0 : c.getAttribute("w:hAnsi"));
  w && (t.font = w);
  const b = (d = e.getElementsByTagName("w:vertAlign")[0]) == null ? void 0 : d.getAttribute("w:val");
  return b === "superscript" ? t.verticalType = "superscript" : b === "subscript" && (t.verticalType = "subscript"), t;
}
function la(...e) {
  return Object.assign({}, ...e);
}
function ua(e, t, r) {
  const i = {
    dashed: [4, 2],
    dotted: [1, 3],
    dashDot: [4, 2, 1, 2],
    dashDotDot: [4, 2, 1, 2],
    dotDash: [4, 2, 1, 2]
  }, a = t ? Math.max(1, Math.round(t / 6)) : void 0;
  return {
    value: `
`,
    type: gt.SEPARATOR,
    ...i[e] ? { dashArray: i[e] } : {},
    ...a ? { lineWidth: a } : {},
    ...r ? { color: r } : {}
  };
}
function Qn(e) {
  var a, o;
  if (!e)
    return {};
  const t = e.getAttribute("style") || "", r = Number(((a = t.match(/width:([\d.]+)pt/)) == null ? void 0 : a[1]) || 0), i = Number(((o = t.match(/height:([\d.]+)pt/)) == null ? void 0 : o[1]) || 0);
  return {
    ...r ? { width: Math.round(r * 4 / 3) } : {},
    ...i ? { height: Math.round(i * 4 / 3) } : {}
  };
}
function Ur(e) {
  var t;
  if (!e)
    return !1;
  for (const r of e)
    if (r.type === gt.TABLE) {
      if ((r.trList || []).some((i) => i.tdList.some((a) => Ur(a.value))))
        return !0;
    } else if ((t = r.valueList) != null && t.length) {
      if (Ur(r.valueList))
        return !0;
    } else {
      if (r.value && r.value !== `
`)
        return !0;
      if (r.type && r.type !== gt.TEXT && r.type !== gt.SEPARATOR)
        return !0;
    }
  return !1;
}
function Vp(e, t, r) {
  const i = Math.min(1, r.width / Math.max(e, 1), r.height / Math.max(t, 1));
  return {
    width: Math.round(e * i),
    height: Math.round(t * i)
  };
}
let ca = 0;
function $p() {
  return ca += 1, `docx-control-${ca}`;
}
function ha(e) {
  return Math.round(e * 100) / 100;
}
function fa(e) {
  var t;
  for (; e.length; ) {
    const r = e[e.length - 1];
    if (r.type === gt.TABLE || r.type === gt.IMAGE || r.type === gt.SEPARATOR)
      break;
    if (r.value === `
`) {
      e.pop();
      continue;
    }
    if (r.type === gt.TEXT && ((t = r.value) != null && t.endsWith(`
`))) {
      r.value = r.value.replace(/\n$/, ""), r.value || e.pop();
      continue;
    }
    break;
  }
  return e;
}
function Zp(e, t) {
  const r = e[e.length - 1];
  if (r && r.type === gt.TEXT && r.value !== `
`)
    r.value = `${r.value}
`;
  else {
    const { verticalType: i, ...a } = t;
    e.push({ value: `
`, type: gt.TEXT, ...a });
  }
}
class Xp {
  constructor(t) {
    re(this, "zip");
    re(this, "headingByStyleId", /* @__PURE__ */ new Map());
    re(this, "styleRPrById", /* @__PURE__ */ new Map());
    // numId -> 每级列表类型
    re(this, "listTypeByNumId", /* @__PURE__ */ new Map());
    re(this, "defaultRunStyle", {});
    // 默认段落样式（Normal）的 rPr，参与样式合并链
    re(this, "defaultParagraphStyle", null);
    // 目录样式（w:name "toc N"）styleId -> 层级
    re(this, "tocLevelByStyleId", /* @__PURE__ */ new Map());
    // 图片缓存：zip 路径 -> dataUrl + 原始尺寸
    re(this, "imageCache", /* @__PURE__ */ new Map());
    // document.xml 的关系缓存（页眉/页脚/图片引用解析共用）
    re(this, "documentRels", null);
    this.zip = t;
  }
  async getDocumentRels() {
    return this.documentRels || (this.documentRels = await oa(this.zip, "word/_rels/document.xml.rels")), this.documentRels;
  }
  async parse() {
    await this.parseStyles(), await this.parseNumbering();
    const t = this.zip.file("word/document.xml");
    if (!t)
      throw new Error("invalid docx: word/document.xml not found");
    const r = new DOMParser().parseFromString(await t.async("text"), "application/xml"), i = { rels: await this.getDocumentRels() };
    await this.cacheImages();
    const a = r.getElementsByTagName("w:body")[0], o = this.parsePageSetup(a), s = o || {}, n = {
      width: (s.width || 794) * 0.95,
      height: (s.height || 1123) * 0.95
    }, c = a ? this.parseBlockContainer(a, i) : [], w = {
      elements: []
    }, b = a ? await this.parseZone("header", a, n) : Promise.resolve(w), g = a ? await this.parseZone("footer", a, n) : Promise.resolve(w), [_, f] = await Promise.all([b, g]), y = {};
    return _.elements.length && await this.isFirstZoneEmpty("header", a) && (y.header = [0]), f.elements.length && await this.isFirstZoneEmpty("footer", a) && (y.footer = [0]), {
      header: _.elements,
      main: c,
      footer: f.elements,
      ..._.watermark ? { watermark: _.watermark } : {},
      ...o ? { pageSetup: o } : {},
      ...Object.keys(y).length ? { disabledPages: y } : {}
    };
  }
  // body 级 sectPr 的纸张尺寸/方向/页边距 + 文档默认字体字号
  parsePageSetup(t) {
    const r = {}, i = t == null ? void 0 : t.getElementsByTagName("w:sectPr"), a = i == null ? void 0 : i[i.length - 1], o = a == null ? void 0 : a.getElementsByTagName("w:pgSz")[0];
    if (o) {
      const b = he(jt(o.getAttribute("w:w"))), g = he(jt(o.getAttribute("w:h")));
      b && g && (r.width = b, r.height = g, r.paperDirection = o.getAttribute("w:orient") === "landscape" ? "horizontal" : "vertical");
    }
    const s = a == null ? void 0 : a.getElementsByTagName("w:pgMar")[0];
    if (s) {
      const b = he(jt(s.getAttribute("w:top"))), g = he(jt(s.getAttribute("w:right"))), _ = he(jt(s.getAttribute("w:bottom"))), f = he(jt(s.getAttribute("w:left")));
      b && g && _ && f && (r.margins = [b, g, _, f]);
    }
    const n = this.defaultParagraphStyle || {}, c = n.font || this.defaultRunStyle.font, w = n.size || this.defaultRunStyle.size;
    return c && (r.defaultFont = c), w && (r.defaultSize = w), Object.keys(r).length ? r : void 0;
  }
  // 批量读取 word/media 图片为 dataUrl 并嗅探原始尺寸
  async cacheImages() {
    var t;
    for (const r of Object.keys(this.zip.files)) {
      if (!/^word\/media\//.test(r))
        continue;
      const i = ((t = r.split(".").pop()) == null ? void 0 : t.toLowerCase()) || "", a = Gp[i];
      if (!a)
        continue;
      const o = await this.zip.files[r].async("base64"), s = Uint8Array.from(atob(o), (n) => n.charCodeAt(0));
      this.imageCache.set(r, {
        dataUrl: `data:${a};base64,${o}`,
        size: Kp(s)
      });
    }
  }
  // 样式表：docDefaults 默认字体字号、段落样式（标题级别映射 + basedOn 继承链）
  async parseStyles() {
    var n, c, w, b;
    const t = this.zip.file("word/styles.xml");
    if (!t)
      return;
    const r = new DOMParser().parseFromString(await t.async("text"), "application/xml"), i = r.getElementsByTagName("w:rPrDefault")[0];
    i && (this.defaultRunStyle = Ar(i.getElementsByTagName("w:rPr")[0] || null));
    const a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    for (const g of Array.from(r.getElementsByTagName("w:style"))) {
      const _ = g.getAttribute("w:styleId");
      if (!_)
        continue;
      g.getAttribute("w:type") === "paragraph" && g.getAttribute("w:default") === "1" && !this.defaultParagraphStyle && (this.defaultParagraphStyle = Ar(g.getElementsByTagName("w:rPr")[0] || null));
      const f = (c = (n = g.getElementsByTagName("w:name")[0]) == null ? void 0 : n.getAttribute("w:val")) == null ? void 0 : c.toLowerCase(), y = f == null ? void 0 : f.match(/^toc (\d)$/);
      y && this.tocLevelByStyleId.set(_, Number(y[1]));
      const d = f == null ? void 0 : f.match(/^heading (\d)$/);
      if (d)
        this.headingByStyleId.set(_, aa[Number(d[1]) - 1]);
      else {
        const p = Number(((w = g.getElementsByTagName("w:outlineLvl")[0]) == null ? void 0 : w.getAttribute("w:val")) ?? -1);
        p >= 0 && p < 6 && this.headingByStyleId.set(_, aa[p]);
      }
      const x = (b = g.getElementsByTagName("w:basedOn")[0]) == null ? void 0 : b.getAttribute("w:val");
      x && a.set(_, x), o.set(_, g.getElementsByTagName("w:rPr")[0] || null);
    }
    const s = (g, _ = 0) => {
      if (_ > 5)
        return {};
      const f = a.get(g), y = f ? [s(f, _ + 1)] : [];
      return y.push(Ar(o.get(g) ?? null)), la(...y);
    };
    for (const g of Array.from(o.keys()))
      this.styleRPrById.set(g, s(g));
  }
  // 编号：numId -> 各级 numFmt（bullet -> 无序列表，其余 -> 有序列表）
  async parseNumbering() {
    var a, o;
    const t = this.zip.file("word/numbering.xml");
    if (!t)
      return;
    const r = new DOMParser().parseFromString(await t.async("text"), "application/xml"), i = /* @__PURE__ */ new Map();
    for (const s of Array.from(r.getElementsByTagName("w:abstractNum"))) {
      const n = Lt(s).filter((w) => w.tagName === "w:lvl"), c = [];
      for (const w of n) {
        const b = (a = w.getElementsByTagName("w:numFmt")[0]) == null ? void 0 : a.getAttribute("w:val");
        c.push(b === "bullet" ? { listType: ji.UL, listStyle: ti.DISC } : { listType: ji.OL, listStyle: ti.DECIMAL });
      }
      i.set(s.getAttribute("w:abstractNumId") || "", c);
    }
    for (const s of Array.from(r.getElementsByTagName("w:num"))) {
      const n = s.getAttribute("w:numId") || "", c = (o = s.getElementsByTagName("w:abstractNumId")[0]) == null ? void 0 : o.getAttribute("w:val");
      n && c && this.listTypeByNumId.set(n, i.get(c) || []);
    }
  }
  // 解析节引用的页眉/页脚 DOM 与 rels。
  // direction：'first' 取第一个带引用的节（封面判定）/ 'last' 取最后一个
  // （OOXML 节继承语义：未定义引用的节继承前一节，正文页眉页脚=最近的引用）。
  // 仅解析被引用的文件，不按文件名猜测——避免捞到未引用的遗留文件
  async resolveZone(t, r, i) {
    const a = r.getElementsByTagName("w:sectPr"), o = Array.from({ length: a.length }, (n, c) => c), s = i === "first" ? o : o.reverse();
    for (const n of s) {
      const c = Array.from(a[n].getElementsByTagName(`w:${t}Reference`));
      if (!c.length)
        continue;
      const w = c.find((x) => x.getAttribute("w:type") === "default") || c[0], b = (w == null ? void 0 : w.getAttribute("r:id")) || "", g = b ? (await this.getDocumentRels()).internal.get(b) : void 0, _ = g ? this.zip.file(g) : null;
      if (!g || !_)
        return null;
      const f = new DOMParser().parseFromString(await _.async("text"), "application/xml"), y = f.getElementsByTagName(`w:${t}`)[0] || f.documentElement, d = await oa(this.zip, `word/_rels/${g.split("/").pop() || ""}.rels`);
      return { root: y, rels: d };
    }
    return null;
  }
  // 判定第一节（文档开头）的页眉/页脚是否无实际内容
  async isFirstZoneEmpty(t, r) {
    const i = await this.resolveZone(t, r, "first");
    return i ? !Ur(this.parseBlockContainer(i.root, { rels: i.rels })) : !0;
  }
  // 解析页眉/页脚为元素列表（header 可能携带 Word 水印）
  async parseZone(t, r, i) {
    const a = await this.resolveZone(t, r, "last");
    if (!a)
      return { elements: [] };
    const { root: o, rels: s } = a, n = fa(
      // 过滤完全无内容的装饰表格（WPS 页眉页脚的空三栏骨架）
      this.parseBlockContainer(o, { rels: s }).filter((b) => b.type !== gt.TABLE || (b.trList || []).some((g) => g.tdList.some((_) => Ur(_.value))))
    ), c = this.parseWatermark(o, s, i);
    return { elements: c ? n.filter((b) => !(b.type === gt.IMAGE && b.imgDisplay === Me.FLOAT_BOTTOM && (b.width || 0) >= 300)) : n, ...c ? { watermark: c } : {} };
  }
  // Word 水印（v:shape 含 v:textpath 文字或 v:imagedata 图片，id 通常为
  // PowerPlusWaterMarkObject）-> 编辑器 watermark 配置
  parseWatermark(t, r, i) {
    var a;
    for (const o of Array.from(t.getElementsByTagName("wp:anchor"))) {
      if (o.getAttribute("behindDoc") !== "1")
        continue;
      const s = o.getElementsByTagName("a:blip")[0], n = (s == null ? void 0 : s.getAttribute("r:embed")) || "", c = r.internal.get(n), w = c ? this.imageCache.get(c) : null;
      if (!w)
        continue;
      const b = o.getElementsByTagName("wp:extent")[0], g = Fe(Number((b == null ? void 0 : b.getAttribute("cx")) || 0)), _ = Fe(Number((b == null ? void 0 : b.getAttribute("cy")) || 0));
      if (g < 300)
        continue;
      const f = Vp(g, _, i);
      return {
        type: "image",
        data: w.dataUrl,
        width: f.width,
        height: f.height,
        layer: "bottom"
      };
    }
    for (const o of Array.from(t.getElementsByTagName("w:pict"))) {
      const s = o.getElementsByTagName("v:shape")[0];
      if (!s)
        continue;
      const n = s.getAttribute("id") || "", c = s.getElementsByTagName("v:textpath")[0], w = s.getElementsByTagName("v:imagedata")[0], b = c || /watermark/i.test(n) || s.getElementsByTagName("v:fill").length > 0 && !!s.getAttribute("o:allowincell");
      if (c) {
        const g = c.getAttribute("string") || "";
        if (!g)
          continue;
        const _ = Qn(s), f = _.height ? Math.max(12, Math.round(_.height / 1.4)) : void 0, y = s.getAttribute("fillcolor") || "", d = Number(((a = s.getElementsByTagName("v:fill")[0]) == null ? void 0 : a.getAttribute("opacity")) || 1);
        return {
          type: "text",
          data: g,
          ...y && y !== "silver" ? { color: ur(y) } : {},
          ...d !== 1 ? { opacity: d } : {},
          ...f ? { size: f } : {}
        };
      }
      if (w && b) {
        const g = w.getAttribute("r:id") || "", _ = r.internal.get(g), f = _ ? this.imageCache.get(_) : null;
        if (f) {
          const { width: y = 0, height: d = 0 } = Qn(s);
          return {
            type: "image",
            data: f.dataUrl,
            ...y ? { width: y } : {},
            ...d ? { height: d } : {}
          };
        }
      }
    }
  }
  // 遍历块级容器（body / 页眉页脚根 / 单元格）的直属子节点
  parseBlockContainer(t, r) {
    var s, n, c, w, b;
    const i = [];
    let a = !1;
    const o = (g) => {
      a && !g && i.push({ value: `
` }), a = !1;
    };
    for (const g of Lt(t))
      if (g.tagName === "w:p") {
        const { elements: _, trailingBreak: f } = this.parseParagraph(g, r);
        o(((s = _[0]) == null ? void 0 : s.type) === gt.LIST || ((n = _[0]) == null ? void 0 : n.type) === gt.TABLE || ((c = _[0]) == null ? void 0 : c.type) === gt.SEPARATOR), i.push(..._), a = f;
      } else if (g.tagName === "w:tbl")
        o(!0), i.push(this.parseTable(g, r));
      else if (g.tagName === "w:sdt") {
        const _ = this.parseSdtControl(g, r);
        if (_)
          o(!1), i.push(_), i.push({ value: `
` });
        else {
          const f = Lt(g).find((y) => y.tagName === "w:sdtContent");
          if (f) {
            const y = this.parseBlockContainer(f, r);
            o(((w = y[0]) == null ? void 0 : w.type) === gt.LIST || ((b = y[0]) == null ? void 0 : b.type) === gt.TABLE), i.push(...y);
          }
        }
      }
    return a && i.push({ value: `
` }), this.fixupTransitions(i);
  }
  // 块级衔接优化（对齐编辑器 setHTML 的数据规范，避免连续换行产生空行）：
  // 1. 标题后补换行——下一元素为列表/表格/分隔线或自带行首换行时不补（INLINE_NODE_NAME 规则）
  // 2. 列表/表格/分隔线自带断行，删除前一元素冗余的行尾换行
  //    （与编辑器 insertElementList"列表前如有换行符则删除-因为列表内已存在"同规则）
  fixupTransitions(t) {
    var i, a;
    const r = [];
    for (let o = 0; o < t.length; o++) {
      const s = t[o], n = t[o + 1];
      if (s.type === gt.LIST || s.type === gt.TABLE || s.type === gt.SEPARATOR) {
        const g = r[r.length - 1];
        g && !((i = g.valueList) != null && i.length) && g.type !== gt.TITLE && g.type !== gt.TABLE && g.type !== gt.LIST && g.value && g.value !== `
` && g.value.endsWith(`
`) && (g.value = g.value.replace(/\n$/, "")), r.push(s);
        continue;
      }
      if (r.push(s), s.type !== gt.TITLE || !n)
        continue;
      const w = n.type === gt.LIST || n.type === gt.TABLE || n.type === gt.SEPARATOR, b = (a = n.valueList) != null && a.length ? n.valueList[0].value : n.value;
      !w && !(b != null && b.startsWith(`
`)) && r.push({ value: `
` });
    }
    return r;
  }
  // 段落 -> 元素列表（标题 / 列表 / 普通文本行）
  // trailingBreak：段落以非文本元素（超链接/图片等）结尾时的行尾换行，
  // 由上层根据下一个块级元素类型决定是否补（列表/表格自带断行时省略）
  parseParagraph(t, r) {
    var d, x, p, E, A, N, O;
    const i = t.getElementsByTagName("w:pPr")[0] || null, a = ((d = i == null ? void 0 : i.getElementsByTagName("w:pStyle")[0]) == null ? void 0 : d.getAttribute("w:val")) ?? void 0, o = a ? this.headingByStyleId.get(a) : void 0, s = i != null && i.getElementsByTagName("w:pageBreakBefore").length ? [{ value: "", type: gt.PAGE_BREAK }] : [], n = this.parseBorderSeparator(t, i);
    if (n)
      return { elements: [...s, n], trailingBreak: !1 };
    const c = this.parseInlineContent(t, r, a), w = i == null ? void 0 : i.getElementsByTagName("w:numPr")[0];
    if (w) {
      const z = (x = w.getElementsByTagName("w:numId")[0]) == null ? void 0 : x.getAttribute("w:val"), P = Number(((p = w.getElementsByTagName("w:ilvl")[0]) == null ? void 0 : p.getAttribute("w:val")) || 0), K = z ? this.listTypeByNumId.get(z) : void 0;
      if (K != null && K[P]) {
        const { listType: C, listStyle: tt } = K[P], at = [{ value: `
` }];
        for (const I of c)
          if (I.type === gt.TEXT && ((E = I.value) != null && E.includes(`
`))) {
            const j = I.value.split(`
`);
            for (let m = 0; m < j.length; m++)
              j[m] && at.push({ ...I, value: j[m] }), m < j.length - 1 && at.push({ value: `
`, listWrap: !0 });
          } else
            at.push(I);
        return {
          elements: [
            ...s,
            {
              value: "",
              type: gt.LIST,
              listId: z || "1",
              listType: C,
              ...tt ? { listStyle: tt } : {},
              listLevel: P,
              valueList: at
            }
          ],
          trailingBreak: !1
        };
      }
    }
    const b = jt((A = t.getElementsByTagName("w:sz")[0]) == null ? void 0 : A.getAttribute("w:val")) || void 0, g = this.parseParagraphProps(i, b ? Wo(b) : (a ? (N = this.styleRPrById.get(a)) == null ? void 0 : N.size : void 0) || ((O = this.defaultParagraphStyle) == null ? void 0 : O.size) || this.defaultRunStyle.size), _ = a ? this.tocLevelByStyleId.get(a) : void 0;
    if (_)
      return {
        elements: [
          ...s,
          ...this.parseTocEntry(c, _, g.rowFlex)
        ],
        trailingBreak: !1
      };
    if (o) {
      const z = c.filter((P) => P.value !== `
`).map((P) => {
        var K;
        return {
          ...P,
          value: ((K = P.value) == null ? void 0 : K.replace(/\n$/, "")) || ""
        };
      });
      return {
        elements: [
          ...s,
          {
            value: "",
            type: gt.TITLE,
            level: o,
            ...g.rowFlex ? { rowFlex: g.rowFlex } : {},
            ...g.rowMargin ? { rowMargin: g.rowMargin } : {},
            valueList: z
          }
        ],
        trailingBreak: !1
      };
    }
    const f = c.map((z) => ({
      ...z,
      ...g.rowFlex && !z.rowFlex ? { rowFlex: g.rowFlex } : {},
      ...g.rowMargin && z.rowMargin === void 0 ? { rowMargin: g.rowMargin } : {}
    }));
    if (!f.length)
      return {
        elements: [
          ...s,
          {
            value: `
`,
            type: gt.TEXT,
            ...g.rowMargin ? { rowMargin: g.rowMargin } : {}
          }
        ],
        trailingBreak: !1
      };
    const y = f[f.length - 1];
    return y.type === gt.TEXT && y.value !== void 0 ? (y.value = y.value.endsWith(`
`) ? y.value : `${y.value}
`, { elements: [...s, ...f], trailingBreak: !1 }) : y.type === gt.SEPARATOR ? { elements: [...s, ...f], trailingBreak: !1 } : { elements: [...s, ...f], trailingBreak: !0 };
  }
  // 目录条目规整化：编辑器不支持段落缩进与制表符点线，目录原样导入会
  // 层级混乱、页码位置乱跳——层级用全角空格缩进、统一文档默认字号、
  // 制表符退化为空格分隔
  parseTocEntry(t, r, i) {
    var c;
    const a = ((c = this.defaultParagraphStyle) == null ? void 0 : c.size) || this.defaultRunStyle.size, o = t.flatMap((w) => {
      if (w.type === gt.TAB)
        return [{ value: "  ", type: gt.TEXT }];
      const { size: b, ...g } = w;
      return [{ ...g, ...a ? { size: a } : {} }];
    }), s = "　".repeat((r - 1) * 2);
    if (s && (o.length && o[0].type === gt.TEXT ? o[0].value = `${s}${o[0].value || ""}` : o.unshift({ value: s, type: gt.TEXT })), !o.length)
      return [{ value: `
`, type: gt.TEXT }];
    const n = o[o.length - 1];
    return n.type === gt.TEXT && n.value !== void 0 ? n.value = n.value.endsWith(`
`) ? n.value : `${n.value}
` : o.push({ value: `
`, type: gt.TEXT }), o.map((w) => ({
      ...w,
      ...i && !w.rowFlex ? { rowFlex: i } : {}
    }));
  }
  // 段落底边框（w:pBdr > w:bottom）的空段落 -> 分隔线
  parseBorderSeparator(t, r) {
    const i = r == null ? void 0 : r.getElementsByTagName("w:pBdr")[0], a = i == null ? void 0 : i.getElementsByTagName("w:bottom")[0];
    if (!a)
      return null;
    const o = a.getAttribute("w:val") || "";
    return ["", "nil", "none"].includes(o) || Array.from(t.getElementsByTagName("w:t")).map((n) => n.textContent || "").join("").trim() ? null : ua(o, Number(a.getAttribute("w:sz") || 0), ur(a.getAttribute("w:color")));
  }
  // VML 横线（w:pict 里的 v:line 或扁长 v:rect，Word"插入横线"）-> 分隔线
  parseVmlSeparator(t) {
    var n;
    const r = t.getElementsByTagName("v:line")[0], i = t.getElementsByTagName("v:rect")[0];
    if (!r && !i)
      return null;
    const a = r || i;
    if (i && Number(((n = (i.getAttribute("style") || "").match(/height:([\d.]+)pt/)) == null ? void 0 : n[1]) || 0) > 3)
      return null;
    const o = jt(a == null ? void 0 : a.getAttribute("strokeweight")), s = (a == null ? void 0 : a.getAttribute("dashstyle")) || "";
    return ua(s && s !== "solid" ? "dashed" : "single", o ? o * 8 : 0, void 0);
  }
  parseParagraphProps(t, r) {
    var w;
    const i = {};
    if (!t)
      return i;
    const a = (w = t.getElementsByTagName("w:jc")[0]) == null ? void 0 : w.getAttribute("w:val"), o = {
      left: ee.LEFT,
      start: ee.LEFT,
      center: ee.CENTER,
      right: ee.RIGHT,
      end: ee.RIGHT,
      both: ee.ALIGNMENT,
      distribute: ee.ALIGNMENT
    };
    a && o[a] && (i.rowFlex = o[a]);
    const s = t.getElementsByTagName("w:spacing")[0], n = jt(s == null ? void 0 : s.getAttribute("w:line")), c = (s == null ? void 0 : s.getAttribute("w:lineRule")) || "auto";
    if (n && n > 0)
      if (c === "auto")
        i.rowMargin = ha(n / 240);
      else {
        const b = n / jo, g = r || 16;
        let _ = 1;
        g < 12 ? _ = g / 12 : g > 30 && (_ = 1 + (g - 30) / 30);
        const { ascent: f, descent: y } = zi(void 0, g), d = f + y, x = ha(Math.max((b - d) / (2 * 8 * _), 0.5));
        i.rowMargin = x;
      }
    return i;
  }
  // 段落内的行内内容：runs、超链接、内容控件、域
  parseInlineContent(t, r, i) {
    const a = [];
    let o = null;
    for (const s of Lt(t)) {
      const n = s.tagName;
      if (n === "w:r") {
        const c = s.getElementsByTagName("w:fldChar")[0];
        if (c) {
          const w = c.getAttribute("w:fldCharType") || "";
          if (w === "begin") {
            const b = c.getElementsByTagName("w:ffData")[0];
            if (b) {
              const g = this.parseFfDataControl(b);
              if (g) {
                a.push(g), o = "ff";
                continue;
              }
            }
            continue;
          }
          w === "end" && (o = null);
          continue;
        }
        if (o === "ff")
          continue;
        a.push(...this.parseRun(s, r, i));
      } else if (n === "w:sdt") {
        const c = this.parseSdtControl(s, r);
        if (c)
          a.push(c);
        else {
          const w = Lt(s).find((b) => b.tagName === "w:sdtContent");
          w && a.push(...this.parseSdtInlineRuns(w, r));
        }
      } else if (n === "w:fldSimple")
        for (const c of Lt(s))
          c.tagName === "w:r" && a.push(...this.parseRun(c, r, i));
      else if (n === "w:hyperlink") {
        const c = Array.from(s.getElementsByTagName("w:r")).flatMap((b) => this.parseRun(b, r, i)).filter((b) => b.value !== `
`), w = r.rels.external.get(s.getAttribute("r:id") || "");
        w && c.length ? a.push({
          value: "",
          type: gt.HYPERLINK,
          url: w,
          valueList: c
        }) : a.push(...c);
      }
    }
    return a;
  }
  parseRun(t, r, i) {
    var c;
    const a = t.getElementsByTagName("w:rPr")[0] || null, o = (c = a == null ? void 0 : a.getElementsByTagName("w:rStyle")[0]) == null ? void 0 : c.getAttribute("w:val"), s = la(this.defaultRunStyle, this.defaultParagraphStyle || {}, i ? this.styleRPrById.get(i) || {} : {}, o ? this.styleRPrById.get(o) || {} : {}, Ar(a)), n = [];
    for (const w of Lt(t)) {
      const b = w.tagName;
      if (b === "w:t") {
        const g = w.textContent || "";
        if (g) {
          const { verticalType: _, ...f } = s;
          n.push({
            value: g,
            type: _ === "superscript" ? gt.SUPERSCRIPT : _ === "subscript" ? gt.SUBSCRIPT : gt.TEXT,
            ...f
          });
        }
      } else if (b === "w:br")
        w.getAttribute("w:type") === "page" ? n.push({ value: "", type: gt.PAGE_BREAK }) : Zp(n, s);
      else if (b === "w:tab")
        n.push({ value: "", type: gt.TAB });
      else if (b === "w:drawing" || b === "w:pict") {
        const g = this.parseDrawing(w, r);
        if (g)
          n.push(g);
        else {
          const _ = this.parseVmlSeparator(w);
          _ && n.push(_);
        }
      } else if (b === "w:sdt" || b === "w:fldSimple") {
        const g = Lt(w).find((f) => f.tagName === "w:sdtContent"), _ = Lt(g || w);
        for (const f of _)
          f.tagName === "w:r" && n.push(...this.parseRun(f, r, i));
      }
    }
    return n;
  }
  // 内容控件（w:sdt）映射为编辑器原生控件：
  // w14:checkbox -> 复选框元素；dropDownList/comboBox -> 下拉控件；
  // date -> 日期控件；其余（含 w:text）-> 文本控件（浅蓝底纹样式由编辑器渲染）
  parseSdtControl(t, r) {
    var b, g, _, f;
    const i = Lt(t).find((y) => y.tagName === "w:sdtPr"), a = Lt(t).find((y) => y.tagName === "w:sdtContent");
    if (!i && !a)
      return null;
    const o = a ? Array.from(a.getElementsByTagName("w:t")).map((y) => y.textContent || "").join("") : "", s = i == null ? void 0 : i.getElementsByTagName("w14:checkbox")[0];
    if (s) {
      const y = ["1", "true"].includes(((b = s.getElementsByTagName("w14:checked")[0]) == null ? void 0 : b.getAttribute("w14:val")) || "");
      return {
        value: "",
        type: gt.CHECKBOX,
        checkbox: { value: y }
      };
    }
    const n = (i == null ? void 0 : i.getElementsByTagName("w:dropDownList")[0]) || (i == null ? void 0 : i.getElementsByTagName("w:comboBox")[0]);
    if (n) {
      const y = Array.from(n.getElementsByTagName("w:listItem")).map((x) => {
        const p = x.getAttribute("w:value") || "";
        return {
          value: x.getAttribute("w:displayText") || p,
          code: p
        };
      }), d = ((g = y.find((x) => x.value === o)) == null ? void 0 : g.code) || ((_ = y[0]) == null ? void 0 : _.code) || "";
      return this.buildControlShell({
        type: tr.SELECT,
        code: d,
        valueSets: y,
        value: [{ value: o }]
      });
    }
    const c = i == null ? void 0 : i.getElementsByTagName("w:date")[0];
    if (c) {
      const y = ((f = c.getAttribute("w:dateFormat")) == null ? void 0 : f.replace(/'/g, "")) || void 0;
      return this.buildControlShell({
        type: tr.DATE,
        ...y ? { dateFormat: y } : {},
        value: o ? [{ value: o }] : []
      });
    }
    if (!(i != null && i.getElementsByTagName("w:text").length) && !(i != null && i.getElementsByTagName("w:richText").length) && !(i != null && i.getElementsByTagName("w:number").length))
      return null;
    const w = a ? this.parseSdtInlineRuns(a, r) : [];
    return this.buildControlShell({
      type: tr.TEXT,
      value: w.length ? w : o ? [{ value: o, type: gt.TEXT }] : []
    });
  }
  // 旧式窗体域（w:ffData）：复选框 / 下拉 / 文本窗体 -> 编辑器控件
  parseFfDataControl(t) {
    var o, s;
    const r = t.getElementsByTagName("w:checkBox")[0];
    if (r) {
      const n = r.getElementsByTagName("w:checked")[0], c = !!n && !["0", "false", "off"].includes(n.getAttribute("w:val") || "");
      return {
        value: "",
        type: gt.CHECKBOX,
        checkbox: { value: c }
      };
    }
    const i = t.getElementsByTagName("w:ddList")[0];
    if (i) {
      const n = Array.from(i.getElementsByTagName("w:listEntry")).map((b) => ({
        value: b.getAttribute("w:val") || "",
        code: b.getAttribute("w:val") || ""
      })), c = Number(((o = i.getElementsByTagName("w:result")[0]) == null ? void 0 : o.getAttribute("w:val")) || 0), w = n[c] || n[0];
      return this.buildControlShell({
        type: tr.SELECT,
        code: (w == null ? void 0 : w.code) || "",
        valueSets: n,
        value: w ? [{ value: w.value }] : []
      });
    }
    const a = ((s = t.getElementsByTagName("w:t")[0]) == null ? void 0 : s.getAttribute("w:val")) || "";
    return this.buildControlShell({
      type: tr.TEXT,
      value: a ? [{ value: a }] : []
    });
  }
  buildControlShell(t) {
    return {
      value: "",
      type: gt.CONTROL,
      control: { id: $p(), ...t }
    };
  }
  // 提取 sdtContent 的行内 runs（保留样式）
  parseSdtInlineRuns(t, r) {
    const i = [];
    for (const a of Lt(t))
      a.tagName === "w:p" ? i.push(...this.parseInlineContent(a, r)) : a.tagName === "w:r" && i.push(...this.parseRun(a, r));
    return i.filter((a) => a.value !== `
`);
  }
  // 图片：wp:inline 内联 / wp:anchor 浮动（含衬于文字下方、环绕）
  parseDrawing(t, r) {
    var y, d, x, p, E;
    const i = t.getElementsByTagName("a:blip")[0], a = t.getElementsByTagName("v:imagedata")[0];
    if (a && !i && (t.getElementsByTagName("v:textpath").length > 0 || /watermark/i.test(((y = t.getElementsByTagName("v:shape")[0]) == null ? void 0 : y.getAttribute("id")) || "")))
      return null;
    const s = (i == null ? void 0 : i.getAttribute("r:embed")) || (a == null ? void 0 : a.getAttribute("r:id")) || "";
    if (!s)
      return null;
    const n = r.rels.internal.get(s), c = n ? this.imageCache.get(n) : null;
    if (!n || !c)
      return null;
    const w = t.getElementsByTagName("wp:extent")[0];
    let b = Fe(Number((w == null ? void 0 : w.getAttribute("cx")) || 0)), g = Fe(Number((w == null ? void 0 : w.getAttribute("cy")) || 0));
    if (!b || !g) {
      const A = Qn(t.getElementsByTagName("v:shape")[0]);
      b = A.width || 0, g = A.height || 0;
    }
    (!b || !g) && c.size && (b = c.size.width, g = c.size.height);
    const _ = {
      value: c.dataUrl,
      type: gt.IMAGE,
      width: b || 100,
      height: g || 100
    }, f = t.getElementsByTagName("wp:anchor")[0];
    if (f) {
      const A = f.getAttribute("behindDoc") === "1", N = f.getElementsByTagName("wp:wrapSquare")[0] || f.getElementsByTagName("wp:wrapTight")[0] || f.getElementsByTagName("wp:wrapThrough")[0], O = Fe(Number(((x = (d = f.getElementsByTagName("wp:positionH")[0]) == null ? void 0 : d.getElementsByTagName("wp:posOffset")[0]) == null ? void 0 : x.textContent) || 0)), z = Fe(Number(((E = (p = f.getElementsByTagName("wp:positionV")[0]) == null ? void 0 : p.getElementsByTagName("wp:posOffset")[0]) == null ? void 0 : E.textContent) || 0));
      _.imgDisplay = A ? Me.FLOAT_BOTTOM : N ? Me.SURROUND : Me.FLOAT_TOP, _.imgFloatPosition = { x: O, y: z };
    }
    return _;
  }
  // 表格：tblGrid 列宽、行高、合并（gridSpan/vMerge）、边框、底纹、垂直对齐
  parseTable(t, r) {
    var _, f, y, d, x, p;
    const i = [], a = Lt(t).find((E) => E.tagName === "w:tblGrid");
    if (a)
      for (const E of Lt(a))
        E.tagName === "w:gridCol" && i.push({
          width: he(jt(E.getAttribute("w:w")))
        });
    const o = Lt(t).filter((E) => E.tagName === "w:tr"), s = o.map((E) => Lt(E).filter((A) => A.tagName === "w:tc").map((A) => {
      var P;
      const N = jt((P = A.getElementsByTagName("w:gridSpan")[0]) == null ? void 0 : P.getAttribute("w:val")) || 1, O = A.getElementsByTagName("w:vMerge")[0], z = O ? O.getAttribute("w:val") === "restart" ? "restart" : "continue" : null;
      return { tc: A, colspan: N, vMerge: z };
    })), n = /* @__PURE__ */ new Map(), c = (E, A) => {
      const N = `${E}:${A}`, O = n.get(N);
      if (O !== void 0)
        return O;
      let z = 0;
      for (let P = 0; P < A; P++)
        z += s[E][P].colspan;
      return n.set(N, z), z;
    }, w = (E, A, N) => {
      const O = c(E, A);
      let z = 1;
      for (let P = E + 1; P < s.length; P++) {
        let K = 0, C = null;
        for (let tt = 0; tt < s[P].length; tt++) {
          if (K === O) {
            C = s[P][tt];
            break;
          }
          K += s[P][tt].colspan;
        }
        if ((C == null ? void 0 : C.vMerge) === "continue" && C.colspan === N)
          z++;
        else
          break;
      }
      return z;
    }, b = {
      top: je.TOP,
      center: je.MIDDLE,
      bottom: je.BOTTOM
    }, g = [];
    for (let E = 0; E < s.length; E++) {
      const A = [];
      for (let O = 0; O < s[E].length; O++) {
        const z = s[E][O];
        if (z.vMerge === "continue")
          continue;
        const P = z.vMerge === "restart" ? w(E, O, z.colspan) : 1, K = z.tc.getElementsByTagName("w:tcPr")[0] || null, C = jt((_ = K == null ? void 0 : K.getElementsByTagName("w:tcW")[0]) == null ? void 0 : _.getAttribute("w:w")), tt = (f = K == null ? void 0 : K.getElementsByTagName("w:vAlign")[0]) == null ? void 0 : f.getAttribute("w:val"), at = ur(((y = K == null ? void 0 : K.getElementsByTagName("w:shd")[0]) == null ? void 0 : y.getAttribute("w:fill")) ?? null), I = [], j = K == null ? void 0 : K.getElementsByTagName("w:tcBorders")[0];
        if (j) {
          const m = [
            ["w:top", mr.TOP],
            ["w:right", mr.RIGHT],
            ["w:bottom", mr.BOTTOM],
            ["w:left", mr.LEFT]
          ];
          for (const [G, ut] of m) {
            const V = (d = j.getElementsByTagName(G)[0]) == null ? void 0 : d.getAttribute("w:val");
            V && V !== "nil" && V !== "none" && I.push(ut);
          }
        }
        A.push({
          colspan: z.colspan,
          rowspan: P,
          value: fa(this.parseBlockContainer(z.tc, r)),
          ...C ? { width: he(C) } : {},
          ...tt && b[tt] ? { verticalAlign: b[tt] } : {},
          ...at ? { backgroundColor: at } : {},
          ...I.length ? { borderTypes: I } : {}
        });
      }
      const N = jt((p = (x = o[E].getElementsByTagName("w:trPr")[0]) == null ? void 0 : x.getElementsByTagName("w:trHeight")[0]) == null ? void 0 : p.getAttribute("w:val"));
      g.push({
        height: N ? he(N) : 40,
        tdList: A
      });
    }
    return {
      value: `
`,
      type: gt.TABLE,
      ...i.length ? { colgroup: i } : {},
      trList: g
    };
  }
}
function Yp(e) {
  return async function(t) {
    var _, f;
    const { arrayBuffer: r, isAppend: i } = t, a = await Wp.loadAsync(r), o = new Xp(a), { watermark: s, pageSetup: n, disabledPages: c, ...w } = await o.parse();
    if (i) {
      const y = e;
      (_ = y.executeInsertElementList) == null || _.call(y, w.main || []);
      return;
    }
    const b = e.getValue().options || {}, g = !!((f = b.watermark) != null && f.data);
    if (s || n || c || g) {
      const y = e;
      if (y.executeUpdateOptions) {
        const d = {
          ...b,
          watermark: s || { data: "" },
          ...n || {}
        };
        c != null && c.header && (d.header = {
          ...b.header || {},
          disabledPages: c.header
        }), c != null && c.footer && (d.footer = {
          ...b.footer || {},
          disabledPages: c.footer
        }), y.executeUpdateOptions(d);
      }
    }
    e.executeSetValue(w);
  };
}
function om(e) {
  e.command.executeImportDocx = Yp(e.command), e.command.executeExportDocx = zp(e);
}
export {
  om as default
};
//# sourceMappingURL=docx.js.map
