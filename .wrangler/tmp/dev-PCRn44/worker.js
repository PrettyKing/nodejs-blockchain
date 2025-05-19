var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-LJEj5T/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-LJEj5T/checked-fetch.js"() {
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// node_modules/elliptic/package.json
var require_package = __commonJS({
  "node_modules/elliptic/package.json"(exports, module) {
    module.exports = {
      name: "elliptic",
      version: "6.6.1",
      description: "EC cryptography",
      main: "lib/elliptic.js",
      files: [
        "lib"
      ],
      scripts: {
        lint: "eslint lib test",
        "lint:fix": "npm run lint -- --fix",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        test: "npm run lint && npm run unit",
        version: "grunt dist && git add dist/"
      },
      repository: {
        type: "git",
        url: "git@github.com:indutny/elliptic"
      },
      keywords: [
        "EC",
        "Elliptic",
        "curve",
        "Cryptography"
      ],
      author: "Fedor Indutny <fedor@indutny.com>",
      license: "MIT",
      bugs: {
        url: "https://github.com/indutny/elliptic/issues"
      },
      homepage: "https://github.com/indutny/elliptic",
      devDependencies: {
        brfs: "^2.0.2",
        coveralls: "^3.1.0",
        eslint: "^7.6.0",
        grunt: "^1.2.1",
        "grunt-browserify": "^5.3.0",
        "grunt-cli": "^1.3.2",
        "grunt-contrib-connect": "^3.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^5.0.0",
        "grunt-mocha-istanbul": "^5.0.2",
        "grunt-saucelabs": "^9.0.1",
        istanbul: "^0.4.5",
        mocha: "^8.0.1"
      },
      dependencies: {
        "bn.js": "^4.11.9",
        brorand: "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        inherits: "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    };
  }
});

// (disabled):buffer
var require_buffer = __commonJS({
  "(disabled):buffer"() {
    init_checked_fetch();
  }
});

// node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
  "node_modules/bn.js/lib/bn.js"(exports, module) {
    init_checked_fetch();
    (function(module2, exports2) {
      "use strict";
      function assert(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      __name(assert, "assert");
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = /* @__PURE__ */ __name(function() {
        }, "TempCtor");
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      __name(inherits, "inherits");
      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number || 0, base || 10, endian || "be");
        }
      }
      __name(BN, "BN");
      if (typeof module2 === "object") {
        module2.exports = BN;
      } else {
        exports2.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer2;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer2 = window.Buffer;
        } else {
          Buffer2 = require_buffer().Buffer;
        }
      } catch (e) {
      }
      BN.isBN = /* @__PURE__ */ __name(function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      }, "isBN");
      BN.max = /* @__PURE__ */ __name(function max(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      }, "max");
      BN.min = /* @__PURE__ */ __name(function min(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      }, "min");
      BN.prototype._init = /* @__PURE__ */ __name(function init(number, base, endian) {
        if (typeof number === "number") {
          return this._initNumber(number, base, endian);
        }
        if (typeof number === "object") {
          return this._initArray(number, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number.length) {
          if (base === 16) {
            this._parseHex(number, start, endian);
          } else {
            this._parseBase(number, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      }, "init");
      BN.prototype._initNumber = /* @__PURE__ */ __name(function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }
        if (number < 67108864) {
          this.words = [number & 67108863];
          this.length = 1;
        } else if (number < 4503599627370496) {
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert(number < 9007199254740992);
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base, endian);
      }, "_initNumber");
      BN.prototype._initArray = /* @__PURE__ */ __name(function _initArray(number, base, endian) {
        assert(typeof number.length === "number");
        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var j, w;
        var off = 0;
        if (endian === "be") {
          for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === "le") {
          for (i = 0, j = 0; i < number.length; i += 3) {
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }
        return this.strip();
      }, "_initArray");
      function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        if (c >= 65 && c <= 70) {
          return c - 55;
        } else if (c >= 97 && c <= 102) {
          return c - 87;
        } else {
          return c - 48 & 15;
        }
      }
      __name(parseHex4Bits, "parseHex4Bits");
      function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
          r |= parseHex4Bits(string, index - 1) << 4;
        }
        return r;
      }
      __name(parseHexByte, "parseHexByte");
      BN.prototype._parseHex = /* @__PURE__ */ __name(function _parseHex(number, start, endian) {
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var off = 0;
        var j = 0;
        var w;
        if (endian === "be") {
          for (i = number.length - 1; i >= start; i -= 2) {
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number.length - start;
          for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this.strip();
      }, "_parseHex");
      function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);
        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul;
          if (c >= 49) {
            r += c - 49 + 10;
          } else if (c >= 17) {
            r += c - 17 + 10;
          } else {
            r += c;
          }
        }
        return r;
      }
      __name(parseBase, "parseBase");
      BN.prototype._parseBase = /* @__PURE__ */ __name(function _parseBase(number, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i, number.length, base);
          for (i = 0; i < mod; i++) {
            pow *= base;
          }
          this.imuln(pow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this.strip();
      }, "_parseBase");
      BN.prototype.copy = /* @__PURE__ */ __name(function copy(dest) {
        dest.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      }, "copy");
      BN.prototype.clone = /* @__PURE__ */ __name(function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      }, "clone");
      BN.prototype._expand = /* @__PURE__ */ __name(function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      }, "_expand");
      BN.prototype.strip = /* @__PURE__ */ __name(function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      }, "strip");
      BN.prototype._normSign = /* @__PURE__ */ __name(function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      }, "_normSign");
      BN.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }, "inspect");
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = /* @__PURE__ */ __name(function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 16777215).toString(16);
            carry = w >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i--;
            }
            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c = this.clone();
          c.negative = 0;
          while (!c.isZero()) {
            var r = c.modn(groupBase).toString(base);
            c = c.idivn(groupBase);
            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert(false, "Base should be between 2 and 36");
      }, "toString");
      BN.prototype.toNumber = /* @__PURE__ */ __name(function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      }, "toNumber");
      BN.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
        return this.toString(16);
      }, "toJSON");
      BN.prototype.toBuffer = /* @__PURE__ */ __name(function toBuffer(endian, length) {
        assert(typeof Buffer2 !== "undefined");
        return this.toArrayLike(Buffer2, endian, length);
      }, "toBuffer");
      BN.prototype.toArray = /* @__PURE__ */ __name(function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      }, "toArray");
      BN.prototype.toArrayLike = /* @__PURE__ */ __name(function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, "byte array longer than desired length");
        assert(reqLength > 0, "Requested array length <= 0");
        this.strip();
        var littleEndian = endian === "le";
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();
        if (!littleEndian) {
          for (i = 0; i < reqLength - byteLength; i++) {
            res[i] = 0;
          }
          for (i = 0; !q.isZero(); i++) {
            b = q.andln(255);
            q.iushrn(8);
            res[reqLength - i - 1] = b;
          }
        } else {
          for (i = 0; !q.isZero(); i++) {
            b = q.andln(255);
            q.iushrn(8);
            res[i] = b;
          }
          for (; i < reqLength; i++) {
            res[i] = 0;
          }
        }
        return res;
      }, "toArrayLike");
      if (Math.clz32) {
        BN.prototype._countBits = /* @__PURE__ */ __name(function _countBits(w) {
          return 32 - Math.clz32(w);
        }, "_countBits");
      } else {
        BN.prototype._countBits = /* @__PURE__ */ __name(function _countBits(w) {
          var t = w;
          var r = 0;
          if (t >= 4096) {
            r += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r += 2;
            t >>>= 2;
          }
          return r + t;
        }, "_countBits");
      }
      BN.prototype._zeroBits = /* @__PURE__ */ __name(function _zeroBits(w) {
        if (w === 0)
          return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
          r += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r++;
        }
        return r;
      }, "_zeroBits");
      BN.prototype.bitLength = /* @__PURE__ */ __name(function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
      }, "bitLength");
      function toBitArray(num) {
        var w = new Array(num.bitLength());
        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w;
      }
      __name(toBitArray, "toBitArray");
      BN.prototype.zeroBits = /* @__PURE__ */ __name(function zeroBits() {
        if (this.isZero())
          return 0;
        var r = 0;
        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);
          r += b;
          if (b !== 26)
            break;
        }
        return r;
      }, "zeroBits");
      BN.prototype.byteLength = /* @__PURE__ */ __name(function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      }, "byteLength");
      BN.prototype.toTwos = /* @__PURE__ */ __name(function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      }, "toTwos");
      BN.prototype.fromTwos = /* @__PURE__ */ __name(function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      }, "fromTwos");
      BN.prototype.isNeg = /* @__PURE__ */ __name(function isNeg() {
        return this.negative !== 0;
      }, "isNeg");
      BN.prototype.neg = /* @__PURE__ */ __name(function neg() {
        return this.clone().ineg();
      }, "neg");
      BN.prototype.ineg = /* @__PURE__ */ __name(function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      }, "ineg");
      BN.prototype.iuor = /* @__PURE__ */ __name(function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }
        return this.strip();
      }, "iuor");
      BN.prototype.ior = /* @__PURE__ */ __name(function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      }, "ior");
      BN.prototype.or = /* @__PURE__ */ __name(function or(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      }, "or");
      BN.prototype.uor = /* @__PURE__ */ __name(function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      }, "uor");
      BN.prototype.iuand = /* @__PURE__ */ __name(function iuand(num) {
        var b;
        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b.length;
        return this.strip();
      }, "iuand");
      BN.prototype.iand = /* @__PURE__ */ __name(function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      }, "iand");
      BN.prototype.and = /* @__PURE__ */ __name(function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      }, "and");
      BN.prototype.uand = /* @__PURE__ */ __name(function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      }, "uand");
      BN.prototype.iuxor = /* @__PURE__ */ __name(function iuxor(num) {
        var a;
        var b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }
        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = a.length;
        return this.strip();
      }, "iuxor");
      BN.prototype.ixor = /* @__PURE__ */ __name(function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      }, "ixor");
      BN.prototype.xor = /* @__PURE__ */ __name(function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      }, "xor");
      BN.prototype.uxor = /* @__PURE__ */ __name(function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      }, "uxor");
      BN.prototype.inotn = /* @__PURE__ */ __name(function inotn(width) {
        assert(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        }
        return this.strip();
      }, "inotn");
      BN.prototype.notn = /* @__PURE__ */ __name(function notn(width) {
        return this.clone().inotn(width);
      }, "notn");
      BN.prototype.setn = /* @__PURE__ */ __name(function setn(bit, val) {
        assert(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this.strip();
      }, "setn");
      BN.prototype.iadd = /* @__PURE__ */ __name(function iadd(num) {
        var r;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        }
        var a, b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        return this;
      }, "iadd");
      BN.prototype.add = /* @__PURE__ */ __name(function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      }, "add");
      BN.prototype.isub = /* @__PURE__ */ __name(function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a, b;
        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
          this.negative = 1;
        }
        return this.strip();
      }, "isub");
      BN.prototype.sub = /* @__PURE__ */ __name(function sub(num) {
        return this.clone().isub(num);
      }, "sub");
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a = self2.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for (var k = 1; k < len; k++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self2.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 67108864 | 0;
            rword = r & 67108863;
          }
          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }
        return out.strip();
      }
      __name(smallMulTo, "smallMulTo");
      var comb10MulTo = /* @__PURE__ */ __name(function comb10MulTo2(self2, num, out) {
        var a = self2.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
          o[19] = c;
          out.length++;
        }
        return out;
      }, "comb10MulTo");
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k = 0; k < out.length - 1; k++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self2.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 67108863;
            ncarry = ncarry + (r / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }
        return out.strip();
      }
      __name(bigMulTo, "bigMulTo");
      function jumboMulTo(self2, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self2, num, out);
      }
      __name(jumboMulTo, "jumboMulTo");
      BN.prototype.mulTo = /* @__PURE__ */ __name(function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      }, "mulTo");
      function FFTM(x2, y) {
        this.x = x2;
        this.y = y;
      }
      __name(FFTM, "FFTM");
      FFTM.prototype.makeRBT = /* @__PURE__ */ __name(function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }
        return t;
      }, "makeRBT");
      FFTM.prototype.revBin = /* @__PURE__ */ __name(function revBin(x2, l, N) {
        if (x2 === 0 || x2 === N - 1)
          return x2;
        var rb = 0;
        for (var i = 0; i < l; i++) {
          rb |= (x2 & 1) << l - i - 1;
          x2 >>= 1;
        }
        return rb;
      }, "revBin");
      FFTM.prototype.permute = /* @__PURE__ */ __name(function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      }, "permute");
      FFTM.prototype.transform = /* @__PURE__ */ __name(function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);
          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      }, "transform");
      FFTM.prototype.guessLen13b = /* @__PURE__ */ __name(function guessLen13b(n2, m) {
        var N = Math.max(m, n2) | 1;
        var odd = N & 1;
        var i = 0;
        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }
        return 1 << i + 1 + odd;
      }, "guessLen13b");
      FFTM.prototype.conjugate = /* @__PURE__ */ __name(function conjugate(rws, iws, N) {
        if (N <= 1)
          return;
        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      }, "conjugate");
      FFTM.prototype.normalize13b = /* @__PURE__ */ __name(function normalize13b(ws, N) {
        var carry = 0;
        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 67108863;
          if (w < 67108864) {
            carry = 0;
          } else {
            carry = w / 67108864 | 0;
          }
        }
        return ws;
      }, "normalize13b");
      FFTM.prototype.convert13b = /* @__PURE__ */ __name(function convert13b(ws, len, rws, N) {
        var carry = 0;
        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }
        assert(carry === 0);
        assert((carry & ~8191) === 0);
      }, "convert13b");
      FFTM.prototype.stub = /* @__PURE__ */ __name(function stub(N) {
        var ph = new Array(N);
        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }
        return ph;
      }, "stub");
      FFTM.prototype.mulp = /* @__PURE__ */ __name(function mulp(x2, y, out) {
        var N = 2 * this.guessLen13b(x2.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x2.words, x2.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x2.negative ^ y.negative;
        out.length = x2.length + y.length;
        return out.strip();
      }, "mulp");
      BN.prototype.mul = /* @__PURE__ */ __name(function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      }, "mul");
      BN.prototype.mulf = /* @__PURE__ */ __name(function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      }, "mulf");
      BN.prototype.imul = /* @__PURE__ */ __name(function imul(num) {
        return this.clone().mulTo(num, this);
      }, "imul");
      BN.prototype.imuln = /* @__PURE__ */ __name(function imuln(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        this.length = num === 0 ? 1 : this.length;
        return this;
      }, "imuln");
      BN.prototype.muln = /* @__PURE__ */ __name(function muln(num) {
        return this.clone().imuln(num);
      }, "muln");
      BN.prototype.sqr = /* @__PURE__ */ __name(function sqr() {
        return this.mul(this);
      }, "sqr");
      BN.prototype.isqr = /* @__PURE__ */ __name(function isqr() {
        return this.imul(this.clone());
      }, "isqr");
      BN.prototype.pow = /* @__PURE__ */ __name(function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0)
          return new BN(1);
        var res = this;
        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0)
            break;
        }
        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0)
              continue;
            res = res.mul(q);
          }
        }
        return res;
      }, "pow");
      BN.prototype.iushln = /* @__PURE__ */ __name(function iushln(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
          var carry = 0;
          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }
          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }
          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }
          this.length += s;
        }
        return this.strip();
      }, "iushln");
      BN.prototype.ishln = /* @__PURE__ */ __name(function ishln(bits) {
        assert(this.negative === 0);
        return this.iushln(bits);
      }, "ishln");
      BN.prototype.iushrn = /* @__PURE__ */ __name(function iushrn(bits, hint, extended) {
        assert(typeof bits === "number" && bits >= 0);
        var h;
        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this.strip();
      }, "iushrn");
      BN.prototype.ishrn = /* @__PURE__ */ __name(function ishrn(bits, hint, extended) {
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      }, "ishrn");
      BN.prototype.shln = /* @__PURE__ */ __name(function shln(bits) {
        return this.clone().ishln(bits);
      }, "shln");
      BN.prototype.ushln = /* @__PURE__ */ __name(function ushln(bits) {
        return this.clone().iushln(bits);
      }, "ushln");
      BN.prototype.shrn = /* @__PURE__ */ __name(function shrn(bits) {
        return this.clone().ishrn(bits);
      }, "shrn");
      BN.prototype.ushrn = /* @__PURE__ */ __name(function ushrn(bits) {
        return this.clone().iushrn(bits);
      }, "ushrn");
      BN.prototype.testn = /* @__PURE__ */ __name(function testn(bit) {
        assert(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s)
          return false;
        var w = this.words[s];
        return !!(w & q);
      }, "testn");
      BN.prototype.imaskn = /* @__PURE__ */ __name(function imaskn(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
          var mask = 67108863 ^ 67108863 >>> r << r;
          this.words[this.length - 1] &= mask;
        }
        return this.strip();
      }, "imaskn");
      BN.prototype.maskn = /* @__PURE__ */ __name(function maskn(bits) {
        return this.clone().imaskn(bits);
      }, "maskn");
      BN.prototype.iaddn = /* @__PURE__ */ __name(function iaddn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      }, "iaddn");
      BN.prototype._iaddn = /* @__PURE__ */ __name(function _iaddn(num) {
        this.words[0] += num;
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
          this.words[i] -= 67108864;
          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
      }, "_iaddn");
      BN.prototype.isubn = /* @__PURE__ */ __name(function isubn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
          }
        }
        return this.strip();
      }, "isubn");
      BN.prototype.addn = /* @__PURE__ */ __name(function addn(num) {
        return this.clone().iaddn(num);
      }, "addn");
      BN.prototype.subn = /* @__PURE__ */ __name(function subn(num) {
        return this.clone().isubn(num);
      }, "subn");
      BN.prototype.iabs = /* @__PURE__ */ __name(function iabs() {
        this.negative = 0;
        return this;
      }, "iabs");
      BN.prototype.abs = /* @__PURE__ */ __name(function abs() {
        return this.clone().iabs();
      }, "abs");
      BN.prototype._ishlnsubmul = /* @__PURE__ */ __name(function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 67108863;
          carry = (w >> 26) - (right / 67108864 | 0);
          this.words[i + shift] = w & 67108863;
        }
        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 67108863;
        }
        if (carry === 0)
          return this.strip();
        assert(carry === -1);
        carry = 0;
        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this.strip();
      }, "_ishlnsubmul");
      BN.prototype._wordDiv = /* @__PURE__ */ __name(function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        }
        var m = a.length - b.length;
        var q;
        if (mode !== "mod") {
          q = new BN(null);
          q.length = m + 1;
          q.words = new Array(q.length);
          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
          a = diff;
          if (q) {
            q.words[m] = 1;
          }
        }
        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a._ishlnsubmul(b, qj, j);
          while (a.negative !== 0) {
            qj--;
            a.negative = 0;
            a._ishlnsubmul(b, 1, j);
            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }
          if (q) {
            q.words[j] = qj;
          }
        }
        if (q) {
          q.strip();
        }
        a.strip();
        if (mode !== "div" && shift !== 0) {
          a.iushrn(shift);
        }
        return {
          div: q || null,
          mod: a
        };
      }, "_wordDiv");
      BN.prototype.divmod = /* @__PURE__ */ __name(function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      }, "divmod");
      BN.prototype.div = /* @__PURE__ */ __name(function div(num) {
        return this.divmod(num, "div", false).div;
      }, "div");
      BN.prototype.mod = /* @__PURE__ */ __name(function mod(num) {
        return this.divmod(num, "mod", false).mod;
      }, "mod");
      BN.prototype.umod = /* @__PURE__ */ __name(function umod(num) {
        return this.divmod(num, "mod", true).mod;
      }, "umod");
      BN.prototype.divRound = /* @__PURE__ */ __name(function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      }, "divRound");
      BN.prototype.modn = /* @__PURE__ */ __name(function modn(num) {
        assert(num <= 67108863);
        var p = (1 << 26) % num;
        var acc = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }
        return acc;
      }, "modn");
      BN.prototype.idivn = /* @__PURE__ */ __name(function idivn(num) {
        assert(num <= 67108863);
        var carry = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 67108864;
          this.words[i] = w / num | 0;
          carry = w % num;
        }
        return this.strip();
      }, "idivn");
      BN.prototype.divn = /* @__PURE__ */ __name(function divn(num) {
        return this.clone().idivn(num);
      }, "divn");
      BN.prototype.egcd = /* @__PURE__ */ __name(function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x2 = this;
        var y = p.clone();
        if (x2.negative !== 0) {
          x2 = x2.umod(p);
        } else {
          x2 = x2.clone();
        }
        var A = new BN(1);
        var B = new BN(0);
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while (x2.isEven() && y.isEven()) {
          x2.iushrn(1);
          y.iushrn(1);
          ++g;
        }
        var yp = y.clone();
        var xp = x2.clone();
        while (!x2.isZero()) {
          for (var i = 0, im = 1; (x2.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            x2.iushrn(i);
            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }
              A.iushrn(1);
              B.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            y.iushrn(j);
            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }
              C.iushrn(1);
              D.iushrn(1);
            }
          }
          if (x2.cmp(y) >= 0) {
            x2.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x2);
            C.isub(A);
            D.isub(B);
          }
        }
        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      }, "egcd");
      BN.prototype._invmp = /* @__PURE__ */ __name(function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            a.iushrn(i);
            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            b.iushrn(j);
            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }
        var res;
        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }
        return res;
      }, "_invmp");
      BN.prototype.gcd = /* @__PURE__ */ __name(function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }
        do {
          while (a.isEven()) {
            a.iushrn(1);
          }
          while (b.isEven()) {
            b.iushrn(1);
          }
          var r = a.cmp(b);
          if (r < 0) {
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }
          a.isub(b);
        } while (true);
        return b.iushln(shift);
      }, "gcd");
      BN.prototype.invm = /* @__PURE__ */ __name(function invm(num) {
        return this.egcd(num).a.umod(num);
      }, "invm");
      BN.prototype.isEven = /* @__PURE__ */ __name(function isEven() {
        return (this.words[0] & 1) === 0;
      }, "isEven");
      BN.prototype.isOdd = /* @__PURE__ */ __name(function isOdd() {
        return (this.words[0] & 1) === 1;
      }, "isOdd");
      BN.prototype.andln = /* @__PURE__ */ __name(function andln(num) {
        return this.words[0] & num;
      }, "andln");
      BN.prototype.bincn = /* @__PURE__ */ __name(function bincn(bit) {
        assert(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q;
          return this;
        }
        var carry = q;
        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 67108863;
          this.words[i] = w;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      }, "bincn");
      BN.prototype.isZero = /* @__PURE__ */ __name(function isZero() {
        return this.length === 1 && this.words[0] === 0;
      }, "isZero");
      BN.prototype.cmpn = /* @__PURE__ */ __name(function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this.strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert(num <= 67108863, "Number is too big");
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      }, "cmpn");
      BN.prototype.cmp = /* @__PURE__ */ __name(function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      }, "cmp");
      BN.prototype.ucmp = /* @__PURE__ */ __name(function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b)
            continue;
          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }
          break;
        }
        return res;
      }, "ucmp");
      BN.prototype.gtn = /* @__PURE__ */ __name(function gtn(num) {
        return this.cmpn(num) === 1;
      }, "gtn");
      BN.prototype.gt = /* @__PURE__ */ __name(function gt(num) {
        return this.cmp(num) === 1;
      }, "gt");
      BN.prototype.gten = /* @__PURE__ */ __name(function gten(num) {
        return this.cmpn(num) >= 0;
      }, "gten");
      BN.prototype.gte = /* @__PURE__ */ __name(function gte(num) {
        return this.cmp(num) >= 0;
      }, "gte");
      BN.prototype.ltn = /* @__PURE__ */ __name(function ltn(num) {
        return this.cmpn(num) === -1;
      }, "ltn");
      BN.prototype.lt = /* @__PURE__ */ __name(function lt(num) {
        return this.cmp(num) === -1;
      }, "lt");
      BN.prototype.lten = /* @__PURE__ */ __name(function lten(num) {
        return this.cmpn(num) <= 0;
      }, "lten");
      BN.prototype.lte = /* @__PURE__ */ __name(function lte(num) {
        return this.cmp(num) <= 0;
      }, "lte");
      BN.prototype.eqn = /* @__PURE__ */ __name(function eqn(num) {
        return this.cmpn(num) === 0;
      }, "eqn");
      BN.prototype.eq = /* @__PURE__ */ __name(function eq(num) {
        return this.cmp(num) === 0;
      }, "eq");
      BN.red = /* @__PURE__ */ __name(function red(num) {
        return new Red(num);
      }, "red");
      BN.prototype.toRed = /* @__PURE__ */ __name(function toRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        assert(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      }, "toRed");
      BN.prototype.fromRed = /* @__PURE__ */ __name(function fromRed() {
        assert(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      }, "fromRed");
      BN.prototype._forceRed = /* @__PURE__ */ __name(function _forceRed(ctx) {
        this.red = ctx;
        return this;
      }, "_forceRed");
      BN.prototype.forceRed = /* @__PURE__ */ __name(function forceRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      }, "forceRed");
      BN.prototype.redAdd = /* @__PURE__ */ __name(function redAdd(num) {
        assert(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      }, "redAdd");
      BN.prototype.redIAdd = /* @__PURE__ */ __name(function redIAdd(num) {
        assert(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      }, "redIAdd");
      BN.prototype.redSub = /* @__PURE__ */ __name(function redSub(num) {
        assert(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      }, "redSub");
      BN.prototype.redISub = /* @__PURE__ */ __name(function redISub(num) {
        assert(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      }, "redISub");
      BN.prototype.redShl = /* @__PURE__ */ __name(function redShl(num) {
        assert(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      }, "redShl");
      BN.prototype.redMul = /* @__PURE__ */ __name(function redMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      }, "redMul");
      BN.prototype.redIMul = /* @__PURE__ */ __name(function redIMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      }, "redIMul");
      BN.prototype.redSqr = /* @__PURE__ */ __name(function redSqr() {
        assert(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      }, "redSqr");
      BN.prototype.redISqr = /* @__PURE__ */ __name(function redISqr() {
        assert(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      }, "redISqr");
      BN.prototype.redSqrt = /* @__PURE__ */ __name(function redSqrt() {
        assert(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      }, "redSqrt");
      BN.prototype.redInvm = /* @__PURE__ */ __name(function redInvm() {
        assert(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      }, "redInvm");
      BN.prototype.redNeg = /* @__PURE__ */ __name(function redNeg() {
        assert(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      }, "redNeg");
      BN.prototype.redPow = /* @__PURE__ */ __name(function redPow(num) {
        assert(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      }, "redPow");
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p) {
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      __name(MPrime, "MPrime");
      MPrime.prototype._tmp = /* @__PURE__ */ __name(function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      }, "_tmp");
      MPrime.prototype.ireduce = /* @__PURE__ */ __name(function ireduce(num) {
        var r = num;
        var rlen;
        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          if (r.strip !== void 0) {
            r.strip();
          } else {
            r._strip();
          }
        }
        return r;
      }, "ireduce");
      MPrime.prototype.split = /* @__PURE__ */ __name(function split(input, out) {
        input.iushrn(this.n, 0, out);
      }, "split");
      MPrime.prototype.imulK = /* @__PURE__ */ __name(function imulK(num) {
        return num.imul(this.k);
      }, "imulK");
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      __name(K256, "K256");
      inherits(K256, MPrime);
      K256.prototype.split = /* @__PURE__ */ __name(function split(input, output) {
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      }, "split");
      K256.prototype.imulK = /* @__PURE__ */ __name(function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 977;
          num.words[i] = lo & 67108863;
          lo = w * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      }, "imulK");
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      __name(P224, "P224");
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      __name(P192, "P192");
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      __name(P25519, "P25519");
      inherits(P25519, MPrime);
      P25519.prototype.imulK = /* @__PURE__ */ __name(function imulK(num) {
        var carry = 0;
        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      }, "imulK");
      BN._prime = /* @__PURE__ */ __name(function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      }, "prime");
      function Red(m) {
        if (typeof m === "string") {
          var prime = BN._prime(m);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m.gtn(1), "modulus must be greater than 1");
          this.m = m;
          this.prime = null;
        }
      }
      __name(Red, "Red");
      Red.prototype._verify1 = /* @__PURE__ */ __name(function _verify1(a) {
        assert(a.negative === 0, "red works only with positives");
        assert(a.red, "red works only with red numbers");
      }, "_verify1");
      Red.prototype._verify2 = /* @__PURE__ */ __name(function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, "red works only with positives");
        assert(
          a.red && a.red === b.red,
          "red works only with red numbers"
        );
      }, "_verify2");
      Red.prototype.imod = /* @__PURE__ */ __name(function imod(a) {
        if (this.prime)
          return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
      }, "imod");
      Red.prototype.neg = /* @__PURE__ */ __name(function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
      }, "neg");
      Red.prototype.add = /* @__PURE__ */ __name(function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      }, "add");
      Red.prototype.iadd = /* @__PURE__ */ __name(function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      }, "iadd");
      Red.prototype.sub = /* @__PURE__ */ __name(function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      }, "sub");
      Red.prototype.isub = /* @__PURE__ */ __name(function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      }, "isub");
      Red.prototype.shl = /* @__PURE__ */ __name(function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
      }, "shl");
      Red.prototype.imul = /* @__PURE__ */ __name(function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
      }, "imul");
      Red.prototype.mul = /* @__PURE__ */ __name(function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
      }, "mul");
      Red.prototype.isqr = /* @__PURE__ */ __name(function isqr(a) {
        return this.imul(a, a.clone());
      }, "isqr");
      Red.prototype.sqr = /* @__PURE__ */ __name(function sqr(a) {
        return this.mul(a, a);
      }, "sqr");
      Red.prototype.sqrt = /* @__PURE__ */ __name(function sqrt(a) {
        if (a.isZero())
          return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow);
        }
        var q = this.m.subn(1);
        var s = 0;
        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }
          assert(i < m);
          var b = this.pow(c, new BN(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }
        return r;
      }, "sqrt");
      Red.prototype.invm = /* @__PURE__ */ __name(function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      }, "invm");
      Red.prototype.pow = /* @__PURE__ */ __name(function pow(a, num) {
        if (num.isZero())
          return new BN(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];
          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      }, "pow");
      Red.prototype.convertTo = /* @__PURE__ */ __name(function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      }, "convertTo");
      Red.prototype.convertFrom = /* @__PURE__ */ __name(function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      }, "convertFrom");
      BN.mont = /* @__PURE__ */ __name(function mont(num) {
        return new Mont(num);
      }, "mont");
      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      __name(Mont, "Mont");
      inherits(Mont, Red);
      Mont.prototype.convertTo = /* @__PURE__ */ __name(function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      }, "convertTo");
      Mont.prototype.convertFrom = /* @__PURE__ */ __name(function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      }, "convertFrom");
      Mont.prototype.imul = /* @__PURE__ */ __name(function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      }, "imul");
      Mont.prototype.mul = /* @__PURE__ */ __name(function mul(a, b) {
        if (a.isZero() || b.isZero())
          return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      }, "mul");
      Mont.prototype.invm = /* @__PURE__ */ __name(function invm(a) {
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      }, "invm");
    })(typeof module === "undefined" || module, exports);
  }
});

// node_modules/minimalistic-assert/index.js
var require_minimalistic_assert = __commonJS({
  "node_modules/minimalistic-assert/index.js"(exports, module) {
    init_checked_fetch();
    module.exports = assert;
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    __name(assert, "assert");
    assert.equal = /* @__PURE__ */ __name(function assertEqual(l, r, msg) {
      if (l != r)
        throw new Error(msg || "Assertion failed: " + l + " != " + r);
    }, "assertEqual");
  }
});

// node_modules/minimalistic-crypto-utils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/minimalistic-crypto-utils/lib/utils.js"(exports) {
    "use strict";
    init_checked_fetch();
    var utils = exports;
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg !== "string") {
        for (var i = 0; i < msg.length; i++)
          res[i] = msg[i] | 0;
        return res;
      }
      if (enc === "hex") {
        msg = msg.replace(/[^a-z0-9]+/ig, "");
        if (msg.length % 2 !== 0)
          msg = "0" + msg;
        for (var i = 0; i < msg.length; i += 2)
          res.push(parseInt(msg[i] + msg[i + 1], 16));
      } else {
        for (var i = 0; i < msg.length; i++) {
          var c = msg.charCodeAt(i);
          var hi = c >> 8;
          var lo = c & 255;
          if (hi)
            res.push(hi, lo);
          else
            res.push(lo);
        }
      }
      return res;
    }
    __name(toArray, "toArray");
    utils.toArray = toArray;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    __name(zero2, "zero2");
    utils.zero2 = zero2;
    function toHex(msg) {
      var res = "";
      for (var i = 0; i < msg.length; i++)
        res += zero2(msg[i].toString(16));
      return res;
    }
    __name(toHex, "toHex");
    utils.toHex = toHex;
    utils.encode = /* @__PURE__ */ __name(function encode(arr, enc) {
      if (enc === "hex")
        return toHex(arr);
      else
        return arr;
    }, "encode");
  }
});

// node_modules/elliptic/lib/elliptic/utils.js
var require_utils2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/utils.js"(exports) {
    "use strict";
    init_checked_fetch();
    var utils = exports;
    var BN = require_bn();
    var minAssert = require_minimalistic_assert();
    var minUtils = require_utils();
    utils.assert = minAssert;
    utils.toArray = minUtils.toArray;
    utils.zero2 = minUtils.zero2;
    utils.toHex = minUtils.toHex;
    utils.encode = minUtils.encode;
    function getNAF(num, w, bits) {
      var naf = new Array(Math.max(num.bitLength(), bits) + 1);
      var i;
      for (i = 0; i < naf.length; i += 1) {
        naf[i] = 0;
      }
      var ws = 1 << w + 1;
      var k = num.clone();
      for (i = 0; i < naf.length; i++) {
        var z;
        var mod = k.andln(ws - 1);
        if (k.isOdd()) {
          if (mod > (ws >> 1) - 1)
            z = (ws >> 1) - mod;
          else
            z = mod;
          k.isubn(z);
        } else {
          z = 0;
        }
        naf[i] = z;
        k.iushrn(1);
      }
      return naf;
    }
    __name(getNAF, "getNAF");
    utils.getNAF = getNAF;
    function getJSF(k1, k2) {
      var jsf = [
        [],
        []
      ];
      k1 = k1.clone();
      k2 = k2.clone();
      var d1 = 0;
      var d2 = 0;
      var m8;
      while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
        var m14 = k1.andln(3) + d1 & 3;
        var m24 = k2.andln(3) + d2 & 3;
        if (m14 === 3)
          m14 = -1;
        if (m24 === 3)
          m24 = -1;
        var u1;
        if ((m14 & 1) === 0) {
          u1 = 0;
        } else {
          m8 = k1.andln(7) + d1 & 7;
          if ((m8 === 3 || m8 === 5) && m24 === 2)
            u1 = -m14;
          else
            u1 = m14;
        }
        jsf[0].push(u1);
        var u2;
        if ((m24 & 1) === 0) {
          u2 = 0;
        } else {
          m8 = k2.andln(7) + d2 & 7;
          if ((m8 === 3 || m8 === 5) && m14 === 2)
            u2 = -m24;
          else
            u2 = m24;
        }
        jsf[1].push(u2);
        if (2 * d1 === u1 + 1)
          d1 = 1 - d1;
        if (2 * d2 === u2 + 1)
          d2 = 1 - d2;
        k1.iushrn(1);
        k2.iushrn(1);
      }
      return jsf;
    }
    __name(getJSF, "getJSF");
    utils.getJSF = getJSF;
    function cachedProperty(obj, name, computer) {
      var key = "_" + name;
      obj.prototype[name] = /* @__PURE__ */ __name(function cachedProperty2() {
        return this[key] !== void 0 ? this[key] : this[key] = computer.call(this);
      }, "cachedProperty");
    }
    __name(cachedProperty, "cachedProperty");
    utils.cachedProperty = cachedProperty;
    function parseBytes(bytes) {
      return typeof bytes === "string" ? utils.toArray(bytes, "hex") : bytes;
    }
    __name(parseBytes, "parseBytes");
    utils.parseBytes = parseBytes;
    function intFromLE(bytes) {
      return new BN(bytes, "hex", "le");
    }
    __name(intFromLE, "intFromLE");
    utils.intFromLE = intFromLE;
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    init_checked_fetch();
  }
});

// node_modules/brorand/index.js
var require_brorand = __commonJS({
  "node_modules/brorand/index.js"(exports, module) {
    init_checked_fetch();
    var r;
    module.exports = /* @__PURE__ */ __name(function rand(len) {
      if (!r)
        r = new Rand(null);
      return r.generate(len);
    }, "rand");
    function Rand(rand) {
      this.rand = rand;
    }
    __name(Rand, "Rand");
    module.exports.Rand = Rand;
    Rand.prototype.generate = /* @__PURE__ */ __name(function generate(len) {
      return this._rand(len);
    }, "generate");
    Rand.prototype._rand = /* @__PURE__ */ __name(function _rand(n2) {
      if (this.rand.getBytes)
        return this.rand.getBytes(n2);
      var res = new Uint8Array(n2);
      for (var i = 0; i < res.length; i++)
        res[i] = this.rand.getByte();
      return res;
    }, "_rand");
    if (typeof self === "object") {
      if (self.crypto && self.crypto.getRandomValues) {
        Rand.prototype._rand = /* @__PURE__ */ __name(function _rand(n2) {
          var arr = new Uint8Array(n2);
          self.crypto.getRandomValues(arr);
          return arr;
        }, "_rand");
      } else if (self.msCrypto && self.msCrypto.getRandomValues) {
        Rand.prototype._rand = /* @__PURE__ */ __name(function _rand(n2) {
          var arr = new Uint8Array(n2);
          self.msCrypto.getRandomValues(arr);
          return arr;
        }, "_rand");
      } else if (typeof window === "object") {
        Rand.prototype._rand = function() {
          throw new Error("Not implemented yet");
        };
      }
    } else {
      try {
        crypto = require_crypto();
        if (typeof crypto.randomBytes !== "function")
          throw new Error("Not supported");
        Rand.prototype._rand = /* @__PURE__ */ __name(function _rand(n2) {
          return crypto.randomBytes(n2);
        }, "_rand");
      } catch (e) {
      }
    }
    var crypto;
  }
});

// node_modules/elliptic/lib/elliptic/curve/base.js
var require_base = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/base.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var utils = require_utils2();
    var getNAF = utils.getNAF;
    var getJSF = utils.getJSF;
    var assert = utils.assert;
    function BaseCurve(type, conf) {
      this.type = type;
      this.p = new BN(conf.p, 16);
      this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
      this.zero = new BN(0).toRed(this.red);
      this.one = new BN(1).toRed(this.red);
      this.two = new BN(2).toRed(this.red);
      this.n = conf.n && new BN(conf.n, 16);
      this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
      this._wnafT1 = new Array(4);
      this._wnafT2 = new Array(4);
      this._wnafT3 = new Array(4);
      this._wnafT4 = new Array(4);
      this._bitLength = this.n ? this.n.bitLength() : 0;
      var adjustCount = this.n && this.p.div(this.n);
      if (!adjustCount || adjustCount.cmpn(100) > 0) {
        this.redN = null;
      } else {
        this._maxwellTrick = true;
        this.redN = this.n.toRed(this.red);
      }
    }
    __name(BaseCurve, "BaseCurve");
    module.exports = BaseCurve;
    BaseCurve.prototype.point = /* @__PURE__ */ __name(function point() {
      throw new Error("Not implemented");
    }, "point");
    BaseCurve.prototype.validate = /* @__PURE__ */ __name(function validate() {
      throw new Error("Not implemented");
    }, "validate");
    BaseCurve.prototype._fixedNafMul = /* @__PURE__ */ __name(function _fixedNafMul(p, k) {
      assert(p.precomputed);
      var doubles = p._getDoubles();
      var naf = getNAF(k, 1, this._bitLength);
      var I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
      I /= 3;
      var repr = [];
      var j;
      var nafW;
      for (j = 0; j < naf.length; j += doubles.step) {
        nafW = 0;
        for (var l = j + doubles.step - 1; l >= j; l--)
          nafW = (nafW << 1) + naf[l];
        repr.push(nafW);
      }
      var a = this.jpoint(null, null, null);
      var b = this.jpoint(null, null, null);
      for (var i = I; i > 0; i--) {
        for (j = 0; j < repr.length; j++) {
          nafW = repr[j];
          if (nafW === i)
            b = b.mixedAdd(doubles.points[j]);
          else if (nafW === -i)
            b = b.mixedAdd(doubles.points[j].neg());
        }
        a = a.add(b);
      }
      return a.toP();
    }, "_fixedNafMul");
    BaseCurve.prototype._wnafMul = /* @__PURE__ */ __name(function _wnafMul(p, k) {
      var w = 4;
      var nafPoints = p._getNAFPoints(w);
      w = nafPoints.wnd;
      var wnd = nafPoints.points;
      var naf = getNAF(k, w, this._bitLength);
      var acc = this.jpoint(null, null, null);
      for (var i = naf.length - 1; i >= 0; i--) {
        for (var l = 0; i >= 0 && naf[i] === 0; i--)
          l++;
        if (i >= 0)
          l++;
        acc = acc.dblp(l);
        if (i < 0)
          break;
        var z = naf[i];
        assert(z !== 0);
        if (p.type === "affine") {
          if (z > 0)
            acc = acc.mixedAdd(wnd[z - 1 >> 1]);
          else
            acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
        } else {
          if (z > 0)
            acc = acc.add(wnd[z - 1 >> 1]);
          else
            acc = acc.add(wnd[-z - 1 >> 1].neg());
        }
      }
      return p.type === "affine" ? acc.toP() : acc;
    }, "_wnafMul");
    BaseCurve.prototype._wnafMulAdd = /* @__PURE__ */ __name(function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
      var wndWidth = this._wnafT1;
      var wnd = this._wnafT2;
      var naf = this._wnafT3;
      var max = 0;
      var i;
      var j;
      var p;
      for (i = 0; i < len; i++) {
        p = points[i];
        var nafPoints = p._getNAFPoints(defW);
        wndWidth[i] = nafPoints.wnd;
        wnd[i] = nafPoints.points;
      }
      for (i = len - 1; i >= 1; i -= 2) {
        var a = i - 1;
        var b = i;
        if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
          naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
          naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
          max = Math.max(naf[a].length, max);
          max = Math.max(naf[b].length, max);
          continue;
        }
        var comb = [
          points[a],
          /* 1 */
          null,
          /* 3 */
          null,
          /* 5 */
          points[b]
          /* 7 */
        ];
        if (points[a].y.cmp(points[b].y) === 0) {
          comb[1] = points[a].add(points[b]);
          comb[2] = points[a].toJ().mixedAdd(points[b].neg());
        } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
          comb[1] = points[a].toJ().mixedAdd(points[b]);
          comb[2] = points[a].add(points[b].neg());
        } else {
          comb[1] = points[a].toJ().mixedAdd(points[b]);
          comb[2] = points[a].toJ().mixedAdd(points[b].neg());
        }
        var index = [
          -3,
          /* -1 -1 */
          -1,
          /* -1 0 */
          -5,
          /* -1 1 */
          -7,
          /* 0 -1 */
          0,
          /* 0 0 */
          7,
          /* 0 1 */
          5,
          /* 1 -1 */
          1,
          /* 1 0 */
          3
          /* 1 1 */
        ];
        var jsf = getJSF(coeffs[a], coeffs[b]);
        max = Math.max(jsf[0].length, max);
        naf[a] = new Array(max);
        naf[b] = new Array(max);
        for (j = 0; j < max; j++) {
          var ja = jsf[0][j] | 0;
          var jb = jsf[1][j] | 0;
          naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
          naf[b][j] = 0;
          wnd[a] = comb;
        }
      }
      var acc = this.jpoint(null, null, null);
      var tmp = this._wnafT4;
      for (i = max; i >= 0; i--) {
        var k = 0;
        while (i >= 0) {
          var zero = true;
          for (j = 0; j < len; j++) {
            tmp[j] = naf[j][i] | 0;
            if (tmp[j] !== 0)
              zero = false;
          }
          if (!zero)
            break;
          k++;
          i--;
        }
        if (i >= 0)
          k++;
        acc = acc.dblp(k);
        if (i < 0)
          break;
        for (j = 0; j < len; j++) {
          var z = tmp[j];
          p;
          if (z === 0)
            continue;
          else if (z > 0)
            p = wnd[j][z - 1 >> 1];
          else if (z < 0)
            p = wnd[j][-z - 1 >> 1].neg();
          if (p.type === "affine")
            acc = acc.mixedAdd(p);
          else
            acc = acc.add(p);
        }
      }
      for (i = 0; i < len; i++)
        wnd[i] = null;
      if (jacobianResult)
        return acc;
      else
        return acc.toP();
    }, "_wnafMulAdd");
    function BasePoint(curve, type) {
      this.curve = curve;
      this.type = type;
      this.precomputed = null;
    }
    __name(BasePoint, "BasePoint");
    BaseCurve.BasePoint = BasePoint;
    BasePoint.prototype.eq = /* @__PURE__ */ __name(function eq() {
      throw new Error("Not implemented");
    }, "eq");
    BasePoint.prototype.validate = /* @__PURE__ */ __name(function validate() {
      return this.curve.validate(this);
    }, "validate");
    BaseCurve.prototype.decodePoint = /* @__PURE__ */ __name(function decodePoint(bytes, enc) {
      bytes = utils.toArray(bytes, enc);
      var len = this.p.byteLength();
      if ((bytes[0] === 4 || bytes[0] === 6 || bytes[0] === 7) && bytes.length - 1 === 2 * len) {
        if (bytes[0] === 6)
          assert(bytes[bytes.length - 1] % 2 === 0);
        else if (bytes[0] === 7)
          assert(bytes[bytes.length - 1] % 2 === 1);
        var res = this.point(
          bytes.slice(1, 1 + len),
          bytes.slice(1 + len, 1 + 2 * len)
        );
        return res;
      } else if ((bytes[0] === 2 || bytes[0] === 3) && bytes.length - 1 === len) {
        return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 3);
      }
      throw new Error("Unknown point format");
    }, "decodePoint");
    BasePoint.prototype.encodeCompressed = /* @__PURE__ */ __name(function encodeCompressed(enc) {
      return this.encode(enc, true);
    }, "encodeCompressed");
    BasePoint.prototype._encode = /* @__PURE__ */ __name(function _encode(compact) {
      var len = this.curve.p.byteLength();
      var x2 = this.getX().toArray("be", len);
      if (compact)
        return [this.getY().isEven() ? 2 : 3].concat(x2);
      return [4].concat(x2, this.getY().toArray("be", len));
    }, "_encode");
    BasePoint.prototype.encode = /* @__PURE__ */ __name(function encode(enc, compact) {
      return utils.encode(this._encode(compact), enc);
    }, "encode");
    BasePoint.prototype.precompute = /* @__PURE__ */ __name(function precompute(power) {
      if (this.precomputed)
        return this;
      var precomputed = {
        doubles: null,
        naf: null,
        beta: null
      };
      precomputed.naf = this._getNAFPoints(8);
      precomputed.doubles = this._getDoubles(4, power);
      precomputed.beta = this._getBeta();
      this.precomputed = precomputed;
      return this;
    }, "precompute");
    BasePoint.prototype._hasDoubles = /* @__PURE__ */ __name(function _hasDoubles(k) {
      if (!this.precomputed)
        return false;
      var doubles = this.precomputed.doubles;
      if (!doubles)
        return false;
      return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
    }, "_hasDoubles");
    BasePoint.prototype._getDoubles = /* @__PURE__ */ __name(function _getDoubles(step, power) {
      if (this.precomputed && this.precomputed.doubles)
        return this.precomputed.doubles;
      var doubles = [this];
      var acc = this;
      for (var i = 0; i < power; i += step) {
        for (var j = 0; j < step; j++)
          acc = acc.dbl();
        doubles.push(acc);
      }
      return {
        step,
        points: doubles
      };
    }, "_getDoubles");
    BasePoint.prototype._getNAFPoints = /* @__PURE__ */ __name(function _getNAFPoints(wnd) {
      if (this.precomputed && this.precomputed.naf)
        return this.precomputed.naf;
      var res = [this];
      var max = (1 << wnd) - 1;
      var dbl = max === 1 ? null : this.dbl();
      for (var i = 1; i < max; i++)
        res[i] = res[i - 1].add(dbl);
      return {
        wnd,
        points: res
      };
    }, "_getNAFPoints");
    BasePoint.prototype._getBeta = /* @__PURE__ */ __name(function _getBeta() {
      return null;
    }, "_getBeta");
    BasePoint.prototype.dblp = /* @__PURE__ */ __name(function dblp(k) {
      var r = this;
      for (var i = 0; i < k; i++)
        r = r.dbl();
      return r;
    }, "dblp");
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    init_checked_fetch();
    if (typeof Object.create === "function") {
      module.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      }, "inherits");
    } else {
      module.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = /* @__PURE__ */ __name(function() {
          }, "TempCtor");
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      }, "inherits");
    }
  }
});

// node_modules/elliptic/lib/elliptic/curve/short.js
var require_short = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/short.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base2 = require_base();
    var assert = utils.assert;
    function ShortCurve(conf) {
      Base2.call(this, "short", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.tinv = this.two.redInvm();
      this.zeroA = this.a.fromRed().cmpn(0) === 0;
      this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
      this.endo = this._getEndomorphism(conf);
      this._endoWnafT1 = new Array(4);
      this._endoWnafT2 = new Array(4);
    }
    __name(ShortCurve, "ShortCurve");
    inherits(ShortCurve, Base2);
    module.exports = ShortCurve;
    ShortCurve.prototype._getEndomorphism = /* @__PURE__ */ __name(function _getEndomorphism(conf) {
      if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
        return;
      var beta;
      var lambda;
      if (conf.beta) {
        beta = new BN(conf.beta, 16).toRed(this.red);
      } else {
        var betas = this._getEndoRoots(this.p);
        beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
        beta = beta.toRed(this.red);
      }
      if (conf.lambda) {
        lambda = new BN(conf.lambda, 16);
      } else {
        var lambdas = this._getEndoRoots(this.n);
        if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
          lambda = lambdas[0];
        } else {
          lambda = lambdas[1];
          assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
        }
      }
      var basis;
      if (conf.basis) {
        basis = conf.basis.map(function(vec) {
          return {
            a: new BN(vec.a, 16),
            b: new BN(vec.b, 16)
          };
        });
      } else {
        basis = this._getEndoBasis(lambda);
      }
      return {
        beta,
        lambda,
        basis
      };
    }, "_getEndomorphism");
    ShortCurve.prototype._getEndoRoots = /* @__PURE__ */ __name(function _getEndoRoots(num) {
      var red = num === this.p ? this.red : BN.mont(num);
      var tinv = new BN(2).toRed(red).redInvm();
      var ntinv = tinv.redNeg();
      var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
      var l1 = ntinv.redAdd(s).fromRed();
      var l2 = ntinv.redSub(s).fromRed();
      return [l1, l2];
    }, "_getEndoRoots");
    ShortCurve.prototype._getEndoBasis = /* @__PURE__ */ __name(function _getEndoBasis(lambda) {
      var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
      var u = lambda;
      var v = this.n.clone();
      var x1 = new BN(1);
      var y1 = new BN(0);
      var x2 = new BN(0);
      var y2 = new BN(1);
      var a0;
      var b0;
      var a1;
      var b1;
      var a2;
      var b2;
      var prevR;
      var i = 0;
      var r;
      var x3;
      while (u.cmpn(0) !== 0) {
        var q = v.div(u);
        r = v.sub(q.mul(u));
        x3 = x2.sub(q.mul(x1));
        var y = y2.sub(q.mul(y1));
        if (!a1 && r.cmp(aprxSqrt) < 0) {
          a0 = prevR.neg();
          b0 = x1;
          a1 = r.neg();
          b1 = x3;
        } else if (a1 && ++i === 2) {
          break;
        }
        prevR = r;
        v = u;
        u = r;
        x2 = x1;
        x1 = x3;
        y2 = y1;
        y1 = y;
      }
      a2 = r.neg();
      b2 = x3;
      var len1 = a1.sqr().add(b1.sqr());
      var len2 = a2.sqr().add(b2.sqr());
      if (len2.cmp(len1) >= 0) {
        a2 = a0;
        b2 = b0;
      }
      if (a1.negative) {
        a1 = a1.neg();
        b1 = b1.neg();
      }
      if (a2.negative) {
        a2 = a2.neg();
        b2 = b2.neg();
      }
      return [
        { a: a1, b: b1 },
        { a: a2, b: b2 }
      ];
    }, "_getEndoBasis");
    ShortCurve.prototype._endoSplit = /* @__PURE__ */ __name(function _endoSplit(k) {
      var basis = this.endo.basis;
      var v1 = basis[0];
      var v2 = basis[1];
      var c1 = v2.b.mul(k).divRound(this.n);
      var c2 = v1.b.neg().mul(k).divRound(this.n);
      var p1 = c1.mul(v1.a);
      var p2 = c2.mul(v2.a);
      var q1 = c1.mul(v1.b);
      var q2 = c2.mul(v2.b);
      var k1 = k.sub(p1).sub(p2);
      var k2 = q1.add(q2).neg();
      return { k1, k2 };
    }, "_endoSplit");
    ShortCurve.prototype.pointFromX = /* @__PURE__ */ __name(function pointFromX(x2, odd) {
      x2 = new BN(x2, 16);
      if (!x2.red)
        x2 = x2.toRed(this.red);
      var y2 = x2.redSqr().redMul(x2).redIAdd(x2.redMul(this.a)).redIAdd(this.b);
      var y = y2.redSqrt();
      if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y = y.redNeg();
      return this.point(x2, y);
    }, "pointFromX");
    ShortCurve.prototype.validate = /* @__PURE__ */ __name(function validate(point) {
      if (point.inf)
        return true;
      var x2 = point.x;
      var y = point.y;
      var ax = this.a.redMul(x2);
      var rhs = x2.redSqr().redMul(x2).redIAdd(ax).redIAdd(this.b);
      return y.redSqr().redISub(rhs).cmpn(0) === 0;
    }, "validate");
    ShortCurve.prototype._endoWnafMulAdd = /* @__PURE__ */ __name(function _endoWnafMulAdd(points, coeffs, jacobianResult) {
      var npoints = this._endoWnafT1;
      var ncoeffs = this._endoWnafT2;
      for (var i = 0; i < points.length; i++) {
        var split = this._endoSplit(coeffs[i]);
        var p = points[i];
        var beta = p._getBeta();
        if (split.k1.negative) {
          split.k1.ineg();
          p = p.neg(true);
        }
        if (split.k2.negative) {
          split.k2.ineg();
          beta = beta.neg(true);
        }
        npoints[i * 2] = p;
        npoints[i * 2 + 1] = beta;
        ncoeffs[i * 2] = split.k1;
        ncoeffs[i * 2 + 1] = split.k2;
      }
      var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
      for (var j = 0; j < i * 2; j++) {
        npoints[j] = null;
        ncoeffs[j] = null;
      }
      return res;
    }, "_endoWnafMulAdd");
    function Point(curve, x2, y, isRed) {
      Base2.BasePoint.call(this, curve, "affine");
      if (x2 === null && y === null) {
        this.x = null;
        this.y = null;
        this.inf = true;
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y, 16);
        if (isRed) {
          this.x.forceRed(this.curve.red);
          this.y.forceRed(this.curve.red);
        }
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        this.inf = false;
      }
    }
    __name(Point, "Point");
    inherits(Point, Base2.BasePoint);
    ShortCurve.prototype.point = /* @__PURE__ */ __name(function point(x2, y, isRed) {
      return new Point(this, x2, y, isRed);
    }, "point");
    ShortCurve.prototype.pointFromJSON = /* @__PURE__ */ __name(function pointFromJSON(obj, red) {
      return Point.fromJSON(this, obj, red);
    }, "pointFromJSON");
    Point.prototype._getBeta = /* @__PURE__ */ __name(function _getBeta() {
      if (!this.curve.endo)
        return;
      var pre = this.precomputed;
      if (pre && pre.beta)
        return pre.beta;
      var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (pre) {
        var curve = this.curve;
        var endoMul = /* @__PURE__ */ __name(function(p) {
          return curve.point(p.x.redMul(curve.endo.beta), p.y);
        }, "endoMul");
        pre.beta = beta;
        beta.precomputed = {
          beta: null,
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(endoMul)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(endoMul)
          }
        };
      }
      return beta;
    }, "_getBeta");
    Point.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
      if (!this.precomputed)
        return [this.x, this.y];
      return [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
          step: this.precomputed.doubles.step,
          points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
          wnd: this.precomputed.naf.wnd,
          points: this.precomputed.naf.points.slice(1)
        }
      }];
    }, "toJSON");
    Point.fromJSON = /* @__PURE__ */ __name(function fromJSON(curve, obj, red) {
      if (typeof obj === "string")
        obj = JSON.parse(obj);
      var res = curve.point(obj[0], obj[1], red);
      if (!obj[2])
        return res;
      function obj2point(obj2) {
        return curve.point(obj2[0], obj2[1], red);
      }
      __name(obj2point, "obj2point");
      var pre = obj[2];
      res.precomputed = {
        beta: null,
        doubles: pre.doubles && {
          step: pre.doubles.step,
          points: [res].concat(pre.doubles.points.map(obj2point))
        },
        naf: pre.naf && {
          wnd: pre.naf.wnd,
          points: [res].concat(pre.naf.points.map(obj2point))
        }
      };
      return res;
    }, "fromJSON");
    Point.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    }, "inspect");
    Point.prototype.isInfinity = /* @__PURE__ */ __name(function isInfinity() {
      return this.inf;
    }, "isInfinity");
    Point.prototype.add = /* @__PURE__ */ __name(function add(p) {
      if (this.inf)
        return p;
      if (p.inf)
        return this;
      if (this.eq(p))
        return this.dbl();
      if (this.neg().eq(p))
        return this.curve.point(null, null);
      if (this.x.cmp(p.x) === 0)
        return this.curve.point(null, null);
      var c = this.y.redSub(p.y);
      if (c.cmpn(0) !== 0)
        c = c.redMul(this.x.redSub(p.x).redInvm());
      var nx = c.redSqr().redISub(this.x).redISub(p.x);
      var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    }, "add");
    Point.prototype.dbl = /* @__PURE__ */ __name(function dbl() {
      if (this.inf)
        return this;
      var ys1 = this.y.redAdd(this.y);
      if (ys1.cmpn(0) === 0)
        return this.curve.point(null, null);
      var a = this.curve.a;
      var x2 = this.x.redSqr();
      var dyinv = ys1.redInvm();
      var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
      var nx = c.redSqr().redISub(this.x.redAdd(this.x));
      var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    }, "dbl");
    Point.prototype.getX = /* @__PURE__ */ __name(function getX() {
      return this.x.fromRed();
    }, "getX");
    Point.prototype.getY = /* @__PURE__ */ __name(function getY() {
      return this.y.fromRed();
    }, "getY");
    Point.prototype.mul = /* @__PURE__ */ __name(function mul(k) {
      k = new BN(k, 16);
      if (this.isInfinity())
        return this;
      else if (this._hasDoubles(k))
        return this.curve._fixedNafMul(this, k);
      else if (this.curve.endo)
        return this.curve._endoWnafMulAdd([this], [k]);
      else
        return this.curve._wnafMul(this, k);
    }, "mul");
    Point.prototype.mulAdd = /* @__PURE__ */ __name(function mulAdd(k1, p2, k2) {
      var points = [this, p2];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2);
    }, "mulAdd");
    Point.prototype.jmulAdd = /* @__PURE__ */ __name(function jmulAdd(k1, p2, k2) {
      var points = [this, p2];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs, true);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
    }, "jmulAdd");
    Point.prototype.eq = /* @__PURE__ */ __name(function eq(p) {
      return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
    }, "eq");
    Point.prototype.neg = /* @__PURE__ */ __name(function neg(_precompute) {
      if (this.inf)
        return this;
      var res = this.curve.point(this.x, this.y.redNeg());
      if (_precompute && this.precomputed) {
        var pre = this.precomputed;
        var negate = /* @__PURE__ */ __name(function(p) {
          return p.neg();
        }, "negate");
        res.precomputed = {
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(negate)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(negate)
          }
        };
      }
      return res;
    }, "neg");
    Point.prototype.toJ = /* @__PURE__ */ __name(function toJ() {
      if (this.inf)
        return this.curve.jpoint(null, null, null);
      var res = this.curve.jpoint(this.x, this.y, this.curve.one);
      return res;
    }, "toJ");
    function JPoint(curve, x2, y, z) {
      Base2.BasePoint.call(this, curve, "jacobian");
      if (x2 === null && y === null && z === null) {
        this.x = this.curve.one;
        this.y = this.curve.one;
        this.z = new BN(0);
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y, 16);
        this.z = new BN(z, 16);
      }
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.y.red)
        this.y = this.y.toRed(this.curve.red);
      if (!this.z.red)
        this.z = this.z.toRed(this.curve.red);
      this.zOne = this.z === this.curve.one;
    }
    __name(JPoint, "JPoint");
    inherits(JPoint, Base2.BasePoint);
    ShortCurve.prototype.jpoint = /* @__PURE__ */ __name(function jpoint(x2, y, z) {
      return new JPoint(this, x2, y, z);
    }, "jpoint");
    JPoint.prototype.toP = /* @__PURE__ */ __name(function toP() {
      if (this.isInfinity())
        return this.curve.point(null, null);
      var zinv = this.z.redInvm();
      var zinv2 = zinv.redSqr();
      var ax = this.x.redMul(zinv2);
      var ay = this.y.redMul(zinv2).redMul(zinv);
      return this.curve.point(ax, ay);
    }, "toP");
    JPoint.prototype.neg = /* @__PURE__ */ __name(function neg() {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }, "neg");
    JPoint.prototype.add = /* @__PURE__ */ __name(function add(p) {
      if (this.isInfinity())
        return p;
      if (p.isInfinity())
        return this;
      var pz2 = p.z.redSqr();
      var z2 = this.z.redSqr();
      var u1 = this.x.redMul(pz2);
      var u2 = p.x.redMul(z2);
      var s1 = this.y.redMul(pz2.redMul(p.z));
      var s2 = p.y.redMul(z2.redMul(this.z));
      var h = u1.redSub(u2);
      var r = s1.redSub(s2);
      if (h.cmpn(0) === 0) {
        if (r.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h2 = h.redSqr();
      var h3 = h2.redMul(h);
      var v = u1.redMul(h2);
      var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
      var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
      var nz = this.z.redMul(p.z).redMul(h);
      return this.curve.jpoint(nx, ny, nz);
    }, "add");
    JPoint.prototype.mixedAdd = /* @__PURE__ */ __name(function mixedAdd(p) {
      if (this.isInfinity())
        return p.toJ();
      if (p.isInfinity())
        return this;
      var z2 = this.z.redSqr();
      var u1 = this.x;
      var u2 = p.x.redMul(z2);
      var s1 = this.y;
      var s2 = p.y.redMul(z2).redMul(this.z);
      var h = u1.redSub(u2);
      var r = s1.redSub(s2);
      if (h.cmpn(0) === 0) {
        if (r.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h2 = h.redSqr();
      var h3 = h2.redMul(h);
      var v = u1.redMul(h2);
      var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
      var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
      var nz = this.z.redMul(h);
      return this.curve.jpoint(nx, ny, nz);
    }, "mixedAdd");
    JPoint.prototype.dblp = /* @__PURE__ */ __name(function dblp(pow) {
      if (pow === 0)
        return this;
      if (this.isInfinity())
        return this;
      if (!pow)
        return this.dbl();
      var i;
      if (this.curve.zeroA || this.curve.threeA) {
        var r = this;
        for (i = 0; i < pow; i++)
          r = r.dbl();
        return r;
      }
      var a = this.curve.a;
      var tinv = this.curve.tinv;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jyd = jy.redAdd(jy);
      for (i = 0; i < pow; i++) {
        var jx2 = jx.redSqr();
        var jyd2 = jyd.redSqr();
        var jyd4 = jyd2.redSqr();
        var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
        var t1 = jx.redMul(jyd2);
        var nx = c.redSqr().redISub(t1.redAdd(t1));
        var t2 = t1.redISub(nx);
        var dny = c.redMul(t2);
        dny = dny.redIAdd(dny).redISub(jyd4);
        var nz = jyd.redMul(jz);
        if (i + 1 < pow)
          jz4 = jz4.redMul(jyd4);
        jx = nx;
        jz = nz;
        jyd = dny;
      }
      return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
    }, "dblp");
    JPoint.prototype.dbl = /* @__PURE__ */ __name(function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.zeroA)
        return this._zeroDbl();
      else if (this.curve.threeA)
        return this._threeDbl();
      else
        return this._dbl();
    }, "dbl");
    JPoint.prototype._zeroDbl = /* @__PURE__ */ __name(function _zeroDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m = xx.redAdd(xx).redIAdd(xx);
        var t = m.redSqr().redISub(s).redISub(s);
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        nx = t;
        ny = m.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var a = this.x.redSqr();
        var b = this.y.redSqr();
        var c = b.redSqr();
        var d2 = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
        d2 = d2.redIAdd(d2);
        var e = a.redAdd(a).redIAdd(a);
        var f = e.redSqr();
        var c8 = c.redIAdd(c);
        c8 = c8.redIAdd(c8);
        c8 = c8.redIAdd(c8);
        nx = f.redISub(d2).redISub(d2);
        ny = e.redMul(d2.redISub(nx)).redISub(c8);
        nz = this.y.redMul(this.z);
        nz = nz.redIAdd(nz);
      }
      return this.curve.jpoint(nx, ny, nz);
    }, "_zeroDbl");
    JPoint.prototype._threeDbl = /* @__PURE__ */ __name(function _threeDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
        var t = m.redSqr().redISub(s).redISub(s);
        nx = t;
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        ny = m.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var delta = this.z.redSqr();
        var gamma = this.y.redSqr();
        var beta = this.x.redMul(gamma);
        var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
        alpha = alpha.redAdd(alpha).redIAdd(alpha);
        var beta4 = beta.redIAdd(beta);
        beta4 = beta4.redIAdd(beta4);
        var beta8 = beta4.redAdd(beta4);
        nx = alpha.redSqr().redISub(beta8);
        nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
        var ggamma8 = gamma.redSqr();
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
      }
      return this.curve.jpoint(nx, ny, nz);
    }, "_threeDbl");
    JPoint.prototype._dbl = /* @__PURE__ */ __name(function _dbl() {
      var a = this.curve.a;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jx2 = jx.redSqr();
      var jy2 = jy.redSqr();
      var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
      var jxd4 = jx.redAdd(jx);
      jxd4 = jxd4.redIAdd(jxd4);
      var t1 = jxd4.redMul(jy2);
      var nx = c.redSqr().redISub(t1.redAdd(t1));
      var t2 = t1.redISub(nx);
      var jyd8 = jy2.redSqr();
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      var ny = c.redMul(t2).redISub(jyd8);
      var nz = jy.redAdd(jy).redMul(jz);
      return this.curve.jpoint(nx, ny, nz);
    }, "_dbl");
    JPoint.prototype.trpl = /* @__PURE__ */ __name(function trpl() {
      if (!this.curve.zeroA)
        return this.dbl().add(this);
      var xx = this.x.redSqr();
      var yy = this.y.redSqr();
      var zz = this.z.redSqr();
      var yyyy = yy.redSqr();
      var m = xx.redAdd(xx).redIAdd(xx);
      var mm = m.redSqr();
      var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
      e = e.redIAdd(e);
      e = e.redAdd(e).redIAdd(e);
      e = e.redISub(mm);
      var ee = e.redSqr();
      var t = yyyy.redIAdd(yyyy);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
      var yyu4 = yy.redMul(u);
      yyu4 = yyu4.redIAdd(yyu4);
      yyu4 = yyu4.redIAdd(yyu4);
      var nx = this.x.redMul(ee).redISub(yyu4);
      nx = nx.redIAdd(nx);
      nx = nx.redIAdd(nx);
      var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
      return this.curve.jpoint(nx, ny, nz);
    }, "trpl");
    JPoint.prototype.mul = /* @__PURE__ */ __name(function mul(k, kbase) {
      k = new BN(k, kbase);
      return this.curve._wnafMul(this, k);
    }, "mul");
    JPoint.prototype.eq = /* @__PURE__ */ __name(function eq(p) {
      if (p.type === "affine")
        return this.eq(p.toJ());
      if (this === p)
        return true;
      var z2 = this.z.redSqr();
      var pz2 = p.z.redSqr();
      if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
        return false;
      var z3 = z2.redMul(this.z);
      var pz3 = pz2.redMul(p.z);
      return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
    }, "eq");
    JPoint.prototype.eqXToP = /* @__PURE__ */ __name(function eqXToP(x2) {
      var zs = this.z.redSqr();
      var rx = x2.toRed(this.curve.red).redMul(zs);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc = x2.clone();
      var t = this.curve.redN.redMul(zs);
      for (; ; ) {
        xc.iadd(this.curve.n);
        if (xc.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    }, "eqXToP");
    JPoint.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      if (this.isInfinity())
        return "<EC JPoint Infinity>";
      return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    }, "inspect");
    JPoint.prototype.isInfinity = /* @__PURE__ */ __name(function isInfinity() {
      return this.z.cmpn(0) === 0;
    }, "isInfinity");
  }
});

// node_modules/elliptic/lib/elliptic/curve/mont.js
var require_mont = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/mont.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base2 = require_base();
    var utils = require_utils2();
    function MontCurve(conf) {
      Base2.call(this, "mont", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.i4 = new BN(4).toRed(this.red).redInvm();
      this.two = new BN(2).toRed(this.red);
      this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    __name(MontCurve, "MontCurve");
    inherits(MontCurve, Base2);
    module.exports = MontCurve;
    MontCurve.prototype.validate = /* @__PURE__ */ __name(function validate(point) {
      var x2 = point.normalize().x;
      var x22 = x2.redSqr();
      var rhs = x22.redMul(x2).redAdd(x22.redMul(this.a)).redAdd(x2);
      var y = rhs.redSqrt();
      return y.redSqr().cmp(rhs) === 0;
    }, "validate");
    function Point(curve, x2, z) {
      Base2.BasePoint.call(this, curve, "projective");
      if (x2 === null && z === null) {
        this.x = this.curve.one;
        this.z = this.curve.zero;
      } else {
        this.x = new BN(x2, 16);
        this.z = new BN(z, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
      }
    }
    __name(Point, "Point");
    inherits(Point, Base2.BasePoint);
    MontCurve.prototype.decodePoint = /* @__PURE__ */ __name(function decodePoint(bytes, enc) {
      return this.point(utils.toArray(bytes, enc), 1);
    }, "decodePoint");
    MontCurve.prototype.point = /* @__PURE__ */ __name(function point(x2, z) {
      return new Point(this, x2, z);
    }, "point");
    MontCurve.prototype.pointFromJSON = /* @__PURE__ */ __name(function pointFromJSON(obj) {
      return Point.fromJSON(this, obj);
    }, "pointFromJSON");
    Point.prototype.precompute = /* @__PURE__ */ __name(function precompute() {
    }, "precompute");
    Point.prototype._encode = /* @__PURE__ */ __name(function _encode() {
      return this.getX().toArray("be", this.curve.p.byteLength());
    }, "_encode");
    Point.fromJSON = /* @__PURE__ */ __name(function fromJSON(curve, obj) {
      return new Point(curve, obj[0], obj[1] || curve.one);
    }, "fromJSON");
    Point.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, "inspect");
    Point.prototype.isInfinity = /* @__PURE__ */ __name(function isInfinity() {
      return this.z.cmpn(0) === 0;
    }, "isInfinity");
    Point.prototype.dbl = /* @__PURE__ */ __name(function dbl() {
      var a = this.x.redAdd(this.z);
      var aa = a.redSqr();
      var b = this.x.redSub(this.z);
      var bb = b.redSqr();
      var c = aa.redSub(bb);
      var nx = aa.redMul(bb);
      var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
      return this.curve.point(nx, nz);
    }, "dbl");
    Point.prototype.add = /* @__PURE__ */ __name(function add() {
      throw new Error("Not supported on Montgomery curve");
    }, "add");
    Point.prototype.diffAdd = /* @__PURE__ */ __name(function diffAdd(p, diff) {
      var a = this.x.redAdd(this.z);
      var b = this.x.redSub(this.z);
      var c = p.x.redAdd(p.z);
      var d2 = p.x.redSub(p.z);
      var da = d2.redMul(a);
      var cb = c.redMul(b);
      var nx = diff.z.redMul(da.redAdd(cb).redSqr());
      var nz = diff.x.redMul(da.redISub(cb).redSqr());
      return this.curve.point(nx, nz);
    }, "diffAdd");
    Point.prototype.mul = /* @__PURE__ */ __name(function mul(k) {
      var t = k.clone();
      var a = this;
      var b = this.curve.point(null, null);
      var c = this;
      for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
        bits.push(t.andln(1));
      for (var i = bits.length - 1; i >= 0; i--) {
        if (bits[i] === 0) {
          a = a.diffAdd(b, c);
          b = b.dbl();
        } else {
          b = a.diffAdd(b, c);
          a = a.dbl();
        }
      }
      return b;
    }, "mul");
    Point.prototype.mulAdd = /* @__PURE__ */ __name(function mulAdd() {
      throw new Error("Not supported on Montgomery curve");
    }, "mulAdd");
    Point.prototype.jumlAdd = /* @__PURE__ */ __name(function jumlAdd() {
      throw new Error("Not supported on Montgomery curve");
    }, "jumlAdd");
    Point.prototype.eq = /* @__PURE__ */ __name(function eq(other) {
      return this.getX().cmp(other.getX()) === 0;
    }, "eq");
    Point.prototype.normalize = /* @__PURE__ */ __name(function normalize() {
      this.x = this.x.redMul(this.z.redInvm());
      this.z = this.curve.one;
      return this;
    }, "normalize");
    Point.prototype.getX = /* @__PURE__ */ __name(function getX() {
      this.normalize();
      return this.x.fromRed();
    }, "getX");
  }
});

// node_modules/elliptic/lib/elliptic/curve/edwards.js
var require_edwards = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/edwards.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base2 = require_base();
    var assert = utils.assert;
    function EdwardsCurve(conf) {
      this.twisted = (conf.a | 0) !== 1;
      this.mOneA = this.twisted && (conf.a | 0) === -1;
      this.extended = this.mOneA;
      Base2.call(this, "edwards", conf);
      this.a = new BN(conf.a, 16).umod(this.red.m);
      this.a = this.a.toRed(this.red);
      this.c = new BN(conf.c, 16).toRed(this.red);
      this.c2 = this.c.redSqr();
      this.d = new BN(conf.d, 16).toRed(this.red);
      this.dd = this.d.redAdd(this.d);
      assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
      this.oneC = (conf.c | 0) === 1;
    }
    __name(EdwardsCurve, "EdwardsCurve");
    inherits(EdwardsCurve, Base2);
    module.exports = EdwardsCurve;
    EdwardsCurve.prototype._mulA = /* @__PURE__ */ __name(function _mulA(num) {
      if (this.mOneA)
        return num.redNeg();
      else
        return this.a.redMul(num);
    }, "_mulA");
    EdwardsCurve.prototype._mulC = /* @__PURE__ */ __name(function _mulC(num) {
      if (this.oneC)
        return num;
      else
        return this.c.redMul(num);
    }, "_mulC");
    EdwardsCurve.prototype.jpoint = /* @__PURE__ */ __name(function jpoint(x2, y, z, t) {
      return this.point(x2, y, z, t);
    }, "jpoint");
    EdwardsCurve.prototype.pointFromX = /* @__PURE__ */ __name(function pointFromX(x2, odd) {
      x2 = new BN(x2, 16);
      if (!x2.red)
        x2 = x2.toRed(this.red);
      var x22 = x2.redSqr();
      var rhs = this.c2.redSub(this.a.redMul(x22));
      var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x22));
      var y2 = rhs.redMul(lhs.redInvm());
      var y = y2.redSqrt();
      if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y = y.redNeg();
      return this.point(x2, y);
    }, "pointFromX");
    EdwardsCurve.prototype.pointFromY = /* @__PURE__ */ __name(function pointFromY(y, odd) {
      y = new BN(y, 16);
      if (!y.red)
        y = y.toRed(this.red);
      var y2 = y.redSqr();
      var lhs = y2.redSub(this.c2);
      var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
      var x2 = lhs.redMul(rhs.redInvm());
      if (x2.cmp(this.zero) === 0) {
        if (odd)
          throw new Error("invalid point");
        else
          return this.point(this.zero, y);
      }
      var x3 = x2.redSqrt();
      if (x3.redSqr().redSub(x2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      if (x3.fromRed().isOdd() !== odd)
        x3 = x3.redNeg();
      return this.point(x3, y);
    }, "pointFromY");
    EdwardsCurve.prototype.validate = /* @__PURE__ */ __name(function validate(point) {
      if (point.isInfinity())
        return true;
      point.normalize();
      var x2 = point.x.redSqr();
      var y2 = point.y.redSqr();
      var lhs = x2.redMul(this.a).redAdd(y2);
      var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
      return lhs.cmp(rhs) === 0;
    }, "validate");
    function Point(curve, x2, y, z, t) {
      Base2.BasePoint.call(this, curve, "projective");
      if (x2 === null && y === null && z === null) {
        this.x = this.curve.zero;
        this.y = this.curve.one;
        this.z = this.curve.one;
        this.t = this.curve.zero;
        this.zOne = true;
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y, 16);
        this.z = z ? new BN(z, 16) : this.curve.one;
        this.t = t && new BN(t, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
        if (this.t && !this.t.red)
          this.t = this.t.toRed(this.curve.red);
        this.zOne = this.z === this.curve.one;
        if (this.curve.extended && !this.t) {
          this.t = this.x.redMul(this.y);
          if (!this.zOne)
            this.t = this.t.redMul(this.z.redInvm());
        }
      }
    }
    __name(Point, "Point");
    inherits(Point, Base2.BasePoint);
    EdwardsCurve.prototype.pointFromJSON = /* @__PURE__ */ __name(function pointFromJSON(obj) {
      return Point.fromJSON(this, obj);
    }, "pointFromJSON");
    EdwardsCurve.prototype.point = /* @__PURE__ */ __name(function point(x2, y, z, t) {
      return new Point(this, x2, y, z, t);
    }, "point");
    Point.fromJSON = /* @__PURE__ */ __name(function fromJSON(curve, obj) {
      return new Point(curve, obj[0], obj[1], obj[2]);
    }, "fromJSON");
    Point.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, "inspect");
    Point.prototype.isInfinity = /* @__PURE__ */ __name(function isInfinity() {
      return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
    }, "isInfinity");
    Point.prototype._extDbl = /* @__PURE__ */ __name(function _extDbl() {
      var a = this.x.redSqr();
      var b = this.y.redSqr();
      var c = this.z.redSqr();
      c = c.redIAdd(c);
      var d2 = this.curve._mulA(a);
      var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
      var g = d2.redAdd(b);
      var f = g.redSub(c);
      var h = d2.redSub(b);
      var nx = e.redMul(f);
      var ny = g.redMul(h);
      var nt = e.redMul(h);
      var nz = f.redMul(g);
      return this.curve.point(nx, ny, nz, nt);
    }, "_extDbl");
    Point.prototype._projDbl = /* @__PURE__ */ __name(function _projDbl() {
      var b = this.x.redAdd(this.y).redSqr();
      var c = this.x.redSqr();
      var d2 = this.y.redSqr();
      var nx;
      var ny;
      var nz;
      var e;
      var h;
      var j;
      if (this.curve.twisted) {
        e = this.curve._mulA(c);
        var f = e.redAdd(d2);
        if (this.zOne) {
          nx = b.redSub(c).redSub(d2).redMul(f.redSub(this.curve.two));
          ny = f.redMul(e.redSub(d2));
          nz = f.redSqr().redSub(f).redSub(f);
        } else {
          h = this.z.redSqr();
          j = f.redSub(h).redISub(h);
          nx = b.redSub(c).redISub(d2).redMul(j);
          ny = f.redMul(e.redSub(d2));
          nz = f.redMul(j);
        }
      } else {
        e = c.redAdd(d2);
        h = this.curve._mulC(this.z).redSqr();
        j = e.redSub(h).redSub(h);
        nx = this.curve._mulC(b.redISub(e)).redMul(j);
        ny = this.curve._mulC(e).redMul(c.redISub(d2));
        nz = e.redMul(j);
      }
      return this.curve.point(nx, ny, nz);
    }, "_projDbl");
    Point.prototype.dbl = /* @__PURE__ */ __name(function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extDbl();
      else
        return this._projDbl();
    }, "dbl");
    Point.prototype._extAdd = /* @__PURE__ */ __name(function _extAdd(p) {
      var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
      var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
      var c = this.t.redMul(this.curve.dd).redMul(p.t);
      var d2 = this.z.redMul(p.z.redAdd(p.z));
      var e = b.redSub(a);
      var f = d2.redSub(c);
      var g = d2.redAdd(c);
      var h = b.redAdd(a);
      var nx = e.redMul(f);
      var ny = g.redMul(h);
      var nt = e.redMul(h);
      var nz = f.redMul(g);
      return this.curve.point(nx, ny, nz, nt);
    }, "_extAdd");
    Point.prototype._projAdd = /* @__PURE__ */ __name(function _projAdd(p) {
      var a = this.z.redMul(p.z);
      var b = a.redSqr();
      var c = this.x.redMul(p.x);
      var d2 = this.y.redMul(p.y);
      var e = this.curve.d.redMul(c).redMul(d2);
      var f = b.redSub(e);
      var g = b.redAdd(e);
      var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d2);
      var nx = a.redMul(f).redMul(tmp);
      var ny;
      var nz;
      if (this.curve.twisted) {
        ny = a.redMul(g).redMul(d2.redSub(this.curve._mulA(c)));
        nz = f.redMul(g);
      } else {
        ny = a.redMul(g).redMul(d2.redSub(c));
        nz = this.curve._mulC(f).redMul(g);
      }
      return this.curve.point(nx, ny, nz);
    }, "_projAdd");
    Point.prototype.add = /* @__PURE__ */ __name(function add(p) {
      if (this.isInfinity())
        return p;
      if (p.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extAdd(p);
      else
        return this._projAdd(p);
    }, "add");
    Point.prototype.mul = /* @__PURE__ */ __name(function mul(k) {
      if (this._hasDoubles(k))
        return this.curve._fixedNafMul(this, k);
      else
        return this.curve._wnafMul(this, k);
    }, "mul");
    Point.prototype.mulAdd = /* @__PURE__ */ __name(function mulAdd(k1, p, k2) {
      return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
    }, "mulAdd");
    Point.prototype.jmulAdd = /* @__PURE__ */ __name(function jmulAdd(k1, p, k2) {
      return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
    }, "jmulAdd");
    Point.prototype.normalize = /* @__PURE__ */ __name(function normalize() {
      if (this.zOne)
        return this;
      var zi = this.z.redInvm();
      this.x = this.x.redMul(zi);
      this.y = this.y.redMul(zi);
      if (this.t)
        this.t = this.t.redMul(zi);
      this.z = this.curve.one;
      this.zOne = true;
      return this;
    }, "normalize");
    Point.prototype.neg = /* @__PURE__ */ __name(function neg() {
      return this.curve.point(
        this.x.redNeg(),
        this.y,
        this.z,
        this.t && this.t.redNeg()
      );
    }, "neg");
    Point.prototype.getX = /* @__PURE__ */ __name(function getX() {
      this.normalize();
      return this.x.fromRed();
    }, "getX");
    Point.prototype.getY = /* @__PURE__ */ __name(function getY() {
      this.normalize();
      return this.y.fromRed();
    }, "getY");
    Point.prototype.eq = /* @__PURE__ */ __name(function eq(other) {
      return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
    }, "eq");
    Point.prototype.eqXToP = /* @__PURE__ */ __name(function eqXToP(x2) {
      var rx = x2.toRed(this.curve.red).redMul(this.z);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc = x2.clone();
      var t = this.curve.redN.redMul(this.z);
      for (; ; ) {
        xc.iadd(this.curve.n);
        if (xc.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    }, "eqXToP");
    Point.prototype.toP = Point.prototype.normalize;
    Point.prototype.mixedAdd = Point.prototype.add;
  }
});

// node_modules/elliptic/lib/elliptic/curve/index.js
var require_curve = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    var curve = exports;
    curve.base = require_base();
    curve.short = require_short();
    curve.mont = require_mont();
    curve.edwards = require_edwards();
  }
});

// node_modules/hash.js/lib/hash/utils.js
var require_utils3 = __commonJS({
  "node_modules/hash.js/lib/hash/utils.js"(exports) {
    "use strict";
    init_checked_fetch();
    var assert = require_minimalistic_assert();
    var inherits = require_inherits_browser();
    exports.inherits = inherits;
    function isSurrogatePair(msg, i) {
      if ((msg.charCodeAt(i) & 64512) !== 55296) {
        return false;
      }
      if (i < 0 || i + 1 >= msg.length) {
        return false;
      }
      return (msg.charCodeAt(i + 1) & 64512) === 56320;
    }
    __name(isSurrogatePair, "isSurrogatePair");
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg === "string") {
        if (!enc) {
          var p = 0;
          for (var i = 0; i < msg.length; i++) {
            var c = msg.charCodeAt(i);
            if (c < 128) {
              res[p++] = c;
            } else if (c < 2048) {
              res[p++] = c >> 6 | 192;
              res[p++] = c & 63 | 128;
            } else if (isSurrogatePair(msg, i)) {
              c = 65536 + ((c & 1023) << 10) + (msg.charCodeAt(++i) & 1023);
              res[p++] = c >> 18 | 240;
              res[p++] = c >> 12 & 63 | 128;
              res[p++] = c >> 6 & 63 | 128;
              res[p++] = c & 63 | 128;
            } else {
              res[p++] = c >> 12 | 224;
              res[p++] = c >> 6 & 63 | 128;
              res[p++] = c & 63 | 128;
            }
          }
        } else if (enc === "hex") {
          msg = msg.replace(/[^a-z0-9]+/ig, "");
          if (msg.length % 2 !== 0)
            msg = "0" + msg;
          for (i = 0; i < msg.length; i += 2)
            res.push(parseInt(msg[i] + msg[i + 1], 16));
        }
      } else {
        for (i = 0; i < msg.length; i++)
          res[i] = msg[i] | 0;
      }
      return res;
    }
    __name(toArray, "toArray");
    exports.toArray = toArray;
    function toHex(msg) {
      var res = "";
      for (var i = 0; i < msg.length; i++)
        res += zero2(msg[i].toString(16));
      return res;
    }
    __name(toHex, "toHex");
    exports.toHex = toHex;
    function htonl(w) {
      var res = w >>> 24 | w >>> 8 & 65280 | w << 8 & 16711680 | (w & 255) << 24;
      return res >>> 0;
    }
    __name(htonl, "htonl");
    exports.htonl = htonl;
    function toHex32(msg, endian) {
      var res = "";
      for (var i = 0; i < msg.length; i++) {
        var w = msg[i];
        if (endian === "little")
          w = htonl(w);
        res += zero8(w.toString(16));
      }
      return res;
    }
    __name(toHex32, "toHex32");
    exports.toHex32 = toHex32;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    __name(zero2, "zero2");
    exports.zero2 = zero2;
    function zero8(word) {
      if (word.length === 7)
        return "0" + word;
      else if (word.length === 6)
        return "00" + word;
      else if (word.length === 5)
        return "000" + word;
      else if (word.length === 4)
        return "0000" + word;
      else if (word.length === 3)
        return "00000" + word;
      else if (word.length === 2)
        return "000000" + word;
      else if (word.length === 1)
        return "0000000" + word;
      else
        return word;
    }
    __name(zero8, "zero8");
    exports.zero8 = zero8;
    function join32(msg, start, end, endian) {
      var len = end - start;
      assert(len % 4 === 0);
      var res = new Array(len / 4);
      for (var i = 0, k = start; i < res.length; i++, k += 4) {
        var w;
        if (endian === "big")
          w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
        else
          w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
        res[i] = w >>> 0;
      }
      return res;
    }
    __name(join32, "join32");
    exports.join32 = join32;
    function split32(msg, endian) {
      var res = new Array(msg.length * 4);
      for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
        var m = msg[i];
        if (endian === "big") {
          res[k] = m >>> 24;
          res[k + 1] = m >>> 16 & 255;
          res[k + 2] = m >>> 8 & 255;
          res[k + 3] = m & 255;
        } else {
          res[k + 3] = m >>> 24;
          res[k + 2] = m >>> 16 & 255;
          res[k + 1] = m >>> 8 & 255;
          res[k] = m & 255;
        }
      }
      return res;
    }
    __name(split32, "split32");
    exports.split32 = split32;
    function rotr32(w, b) {
      return w >>> b | w << 32 - b;
    }
    __name(rotr32, "rotr32");
    exports.rotr32 = rotr32;
    function rotl32(w, b) {
      return w << b | w >>> 32 - b;
    }
    __name(rotl32, "rotl32");
    exports.rotl32 = rotl32;
    function sum32(a, b) {
      return a + b >>> 0;
    }
    __name(sum32, "sum32");
    exports.sum32 = sum32;
    function sum32_3(a, b, c) {
      return a + b + c >>> 0;
    }
    __name(sum32_3, "sum32_3");
    exports.sum32_3 = sum32_3;
    function sum32_4(a, b, c, d2) {
      return a + b + c + d2 >>> 0;
    }
    __name(sum32_4, "sum32_4");
    exports.sum32_4 = sum32_4;
    function sum32_5(a, b, c, d2, e) {
      return a + b + c + d2 + e >>> 0;
    }
    __name(sum32_5, "sum32_5");
    exports.sum32_5 = sum32_5;
    function sum64(buf, pos, ah, al) {
      var bh = buf[pos];
      var bl = buf[pos + 1];
      var lo = al + bl >>> 0;
      var hi = (lo < al ? 1 : 0) + ah + bh;
      buf[pos] = hi >>> 0;
      buf[pos + 1] = lo;
    }
    __name(sum64, "sum64");
    exports.sum64 = sum64;
    function sum64_hi(ah, al, bh, bl) {
      var lo = al + bl >>> 0;
      var hi = (lo < al ? 1 : 0) + ah + bh;
      return hi >>> 0;
    }
    __name(sum64_hi, "sum64_hi");
    exports.sum64_hi = sum64_hi;
    function sum64_lo(ah, al, bh, bl) {
      var lo = al + bl;
      return lo >>> 0;
    }
    __name(sum64_lo, "sum64_lo");
    exports.sum64_lo = sum64_lo;
    function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
      var carry = 0;
      var lo = al;
      lo = lo + bl >>> 0;
      carry += lo < al ? 1 : 0;
      lo = lo + cl >>> 0;
      carry += lo < cl ? 1 : 0;
      lo = lo + dl >>> 0;
      carry += lo < dl ? 1 : 0;
      var hi = ah + bh + ch + dh + carry;
      return hi >>> 0;
    }
    __name(sum64_4_hi, "sum64_4_hi");
    exports.sum64_4_hi = sum64_4_hi;
    function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
      var lo = al + bl + cl + dl;
      return lo >>> 0;
    }
    __name(sum64_4_lo, "sum64_4_lo");
    exports.sum64_4_lo = sum64_4_lo;
    function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var carry = 0;
      var lo = al;
      lo = lo + bl >>> 0;
      carry += lo < al ? 1 : 0;
      lo = lo + cl >>> 0;
      carry += lo < cl ? 1 : 0;
      lo = lo + dl >>> 0;
      carry += lo < dl ? 1 : 0;
      lo = lo + el >>> 0;
      carry += lo < el ? 1 : 0;
      var hi = ah + bh + ch + dh + eh + carry;
      return hi >>> 0;
    }
    __name(sum64_5_hi, "sum64_5_hi");
    exports.sum64_5_hi = sum64_5_hi;
    function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var lo = al + bl + cl + dl + el;
      return lo >>> 0;
    }
    __name(sum64_5_lo, "sum64_5_lo");
    exports.sum64_5_lo = sum64_5_lo;
    function rotr64_hi(ah, al, num) {
      var r = al << 32 - num | ah >>> num;
      return r >>> 0;
    }
    __name(rotr64_hi, "rotr64_hi");
    exports.rotr64_hi = rotr64_hi;
    function rotr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    __name(rotr64_lo, "rotr64_lo");
    exports.rotr64_lo = rotr64_lo;
    function shr64_hi(ah, al, num) {
      return ah >>> num;
    }
    __name(shr64_hi, "shr64_hi");
    exports.shr64_hi = shr64_hi;
    function shr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    __name(shr64_lo, "shr64_lo");
    exports.shr64_lo = shr64_lo;
  }
});

// node_modules/hash.js/lib/hash/common.js
var require_common = __commonJS({
  "node_modules/hash.js/lib/hash/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function BlockHash() {
      this.pending = null;
      this.pendingTotal = 0;
      this.blockSize = this.constructor.blockSize;
      this.outSize = this.constructor.outSize;
      this.hmacStrength = this.constructor.hmacStrength;
      this.padLength = this.constructor.padLength / 8;
      this.endian = "big";
      this._delta8 = this.blockSize / 8;
      this._delta32 = this.blockSize / 32;
    }
    __name(BlockHash, "BlockHash");
    exports.BlockHash = BlockHash;
    BlockHash.prototype.update = /* @__PURE__ */ __name(function update(msg, enc) {
      msg = utils.toArray(msg, enc);
      if (!this.pending)
        this.pending = msg;
      else
        this.pending = this.pending.concat(msg);
      this.pendingTotal += msg.length;
      if (this.pending.length >= this._delta8) {
        msg = this.pending;
        var r = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r, msg.length);
        if (this.pending.length === 0)
          this.pending = null;
        msg = utils.join32(msg, 0, msg.length - r, this.endian);
        for (var i = 0; i < msg.length; i += this._delta32)
          this._update(msg, i, i + this._delta32);
      }
      return this;
    }, "update");
    BlockHash.prototype.digest = /* @__PURE__ */ __name(function digest(enc) {
      this.update(this._pad());
      assert(this.pending === null);
      return this._digest(enc);
    }, "digest");
    BlockHash.prototype._pad = /* @__PURE__ */ __name(function pad() {
      var len = this.pendingTotal;
      var bytes = this._delta8;
      var k = bytes - (len + this.padLength) % bytes;
      var res = new Array(k + this.padLength);
      res[0] = 128;
      for (var i = 1; i < k; i++)
        res[i] = 0;
      len <<= 3;
      if (this.endian === "big") {
        for (var t = 8; t < this.padLength; t++)
          res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = len >>> 24 & 255;
        res[i++] = len >>> 16 & 255;
        res[i++] = len >>> 8 & 255;
        res[i++] = len & 255;
      } else {
        res[i++] = len & 255;
        res[i++] = len >>> 8 & 255;
        res[i++] = len >>> 16 & 255;
        res[i++] = len >>> 24 & 255;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        for (t = 8; t < this.padLength; t++)
          res[i++] = 0;
      }
      return res;
    }, "pad");
  }
});

// node_modules/hash.js/lib/hash/sha/common.js
var require_common2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var rotr32 = utils.rotr32;
    function ft_1(s, x2, y, z) {
      if (s === 0)
        return ch32(x2, y, z);
      if (s === 1 || s === 3)
        return p32(x2, y, z);
      if (s === 2)
        return maj32(x2, y, z);
    }
    __name(ft_1, "ft_1");
    exports.ft_1 = ft_1;
    function ch32(x2, y, z) {
      return x2 & y ^ ~x2 & z;
    }
    __name(ch32, "ch32");
    exports.ch32 = ch32;
    function maj32(x2, y, z) {
      return x2 & y ^ x2 & z ^ y & z;
    }
    __name(maj32, "maj32");
    exports.maj32 = maj32;
    function p32(x2, y, z) {
      return x2 ^ y ^ z;
    }
    __name(p32, "p32");
    exports.p32 = p32;
    function s0_256(x2) {
      return rotr32(x2, 2) ^ rotr32(x2, 13) ^ rotr32(x2, 22);
    }
    __name(s0_256, "s0_256");
    exports.s0_256 = s0_256;
    function s1_256(x2) {
      return rotr32(x2, 6) ^ rotr32(x2, 11) ^ rotr32(x2, 25);
    }
    __name(s1_256, "s1_256");
    exports.s1_256 = s1_256;
    function g0_256(x2) {
      return rotr32(x2, 7) ^ rotr32(x2, 18) ^ x2 >>> 3;
    }
    __name(g0_256, "g0_256");
    exports.g0_256 = g0_256;
    function g1_256(x2) {
      return rotr32(x2, 17) ^ rotr32(x2, 19) ^ x2 >>> 10;
    }
    __name(g1_256, "g1_256");
    exports.g1_256 = g1_256;
  }
});

// node_modules/hash.js/lib/hash/sha/1.js
var require__ = __commonJS({
  "node_modules/hash.js/lib/hash/sha/1.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_5 = utils.sum32_5;
    var ft_1 = shaCommon.ft_1;
    var BlockHash = common.BlockHash;
    var sha1_K = [
      1518500249,
      1859775393,
      2400959708,
      3395469782
    ];
    function SHA12() {
      if (!(this instanceof SHA12))
        return new SHA12();
      BlockHash.call(this);
      this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
      ];
      this.W = new Array(80);
    }
    __name(SHA12, "SHA1");
    utils.inherits(SHA12, BlockHash);
    module.exports = SHA12;
    SHA12.blockSize = 512;
    SHA12.outSize = 160;
    SHA12.hmacStrength = 80;
    SHA12.padLength = 64;
    SHA12.prototype._update = /* @__PURE__ */ __name(function _update(msg, start) {
      var W4 = this.W;
      for (var i = 0; i < 16; i++)
        W4[i] = msg[start + i];
      for (; i < W4.length; i++)
        W4[i] = rotl32(W4[i - 3] ^ W4[i - 8] ^ W4[i - 14] ^ W4[i - 16], 1);
      var a = this.h[0];
      var b = this.h[1];
      var c = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      for (i = 0; i < W4.length; i++) {
        var s = ~~(i / 20);
        var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d2), e, W4[i], sha1_K[s]);
        e = d2;
        d2 = c;
        c = rotl32(b, 30);
        b = a;
        a = t;
      }
      this.h[0] = sum32(this.h[0], a);
      this.h[1] = sum32(this.h[1], b);
      this.h[2] = sum32(this.h[2], c);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
    }, "_update");
    SHA12.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    }, "digest");
  }
});

// node_modules/hash.js/lib/hash/sha/256.js
var require__2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/256.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var assert = require_minimalistic_assert();
    var sum32 = utils.sum32;
    var sum32_4 = utils.sum32_4;
    var sum32_5 = utils.sum32_5;
    var ch32 = shaCommon.ch32;
    var maj32 = shaCommon.maj32;
    var s0_256 = shaCommon.s0_256;
    var s1_256 = shaCommon.s1_256;
    var g0_256 = shaCommon.g0_256;
    var g1_256 = shaCommon.g1_256;
    var BlockHash = common.BlockHash;
    var sha256_K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    function SHA2562() {
      if (!(this instanceof SHA2562))
        return new SHA2562();
      BlockHash.call(this);
      this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ];
      this.k = sha256_K;
      this.W = new Array(64);
    }
    __name(SHA2562, "SHA256");
    utils.inherits(SHA2562, BlockHash);
    module.exports = SHA2562;
    SHA2562.blockSize = 512;
    SHA2562.outSize = 256;
    SHA2562.hmacStrength = 192;
    SHA2562.padLength = 64;
    SHA2562.prototype._update = /* @__PURE__ */ __name(function _update(msg, start) {
      var W4 = this.W;
      for (var i = 0; i < 16; i++)
        W4[i] = msg[start + i];
      for (; i < W4.length; i++)
        W4[i] = sum32_4(g1_256(W4[i - 2]), W4[i - 7], g0_256(W4[i - 15]), W4[i - 16]);
      var a = this.h[0];
      var b = this.h[1];
      var c = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      var f = this.h[5];
      var g = this.h[6];
      var h = this.h[7];
      assert(this.k.length === W4.length);
      for (i = 0; i < W4.length; i++) {
        var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W4[i]);
        var T22 = sum32(s0_256(a), maj32(a, b, c));
        h = g;
        g = f;
        f = e;
        e = sum32(d2, T1);
        d2 = c;
        c = b;
        b = a;
        a = sum32(T1, T22);
      }
      this.h[0] = sum32(this.h[0], a);
      this.h[1] = sum32(this.h[1], b);
      this.h[2] = sum32(this.h[2], c);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
      this.h[5] = sum32(this.h[5], f);
      this.h[6] = sum32(this.h[6], g);
      this.h[7] = sum32(this.h[7], h);
    }, "_update");
    SHA2562.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    }, "digest");
  }
});

// node_modules/hash.js/lib/hash/sha/224.js
var require__3 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/224.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var SHA2562 = require__2();
    function SHA2242() {
      if (!(this instanceof SHA2242))
        return new SHA2242();
      SHA2562.call(this);
      this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
      ];
    }
    __name(SHA2242, "SHA224");
    utils.inherits(SHA2242, SHA2562);
    module.exports = SHA2242;
    SHA2242.blockSize = 512;
    SHA2242.outSize = 224;
    SHA2242.hmacStrength = 192;
    SHA2242.padLength = 64;
    SHA2242.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 7), "big");
      else
        return utils.split32(this.h.slice(0, 7), "big");
    }, "digest");
  }
});

// node_modules/hash.js/lib/hash/sha/512.js
var require__4 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/512.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var common = require_common();
    var assert = require_minimalistic_assert();
    var rotr64_hi = utils.rotr64_hi;
    var rotr64_lo = utils.rotr64_lo;
    var shr64_hi = utils.shr64_hi;
    var shr64_lo = utils.shr64_lo;
    var sum64 = utils.sum64;
    var sum64_hi = utils.sum64_hi;
    var sum64_lo = utils.sum64_lo;
    var sum64_4_hi = utils.sum64_4_hi;
    var sum64_4_lo = utils.sum64_4_lo;
    var sum64_5_hi = utils.sum64_5_hi;
    var sum64_5_lo = utils.sum64_5_lo;
    var BlockHash = common.BlockHash;
    var sha512_K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    function SHA5122() {
      if (!(this instanceof SHA5122))
        return new SHA5122();
      BlockHash.call(this);
      this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
      ];
      this.k = sha512_K;
      this.W = new Array(160);
    }
    __name(SHA5122, "SHA512");
    utils.inherits(SHA5122, BlockHash);
    module.exports = SHA5122;
    SHA5122.blockSize = 1024;
    SHA5122.outSize = 512;
    SHA5122.hmacStrength = 192;
    SHA5122.padLength = 128;
    SHA5122.prototype._prepareBlock = /* @__PURE__ */ __name(function _prepareBlock(msg, start) {
      var W4 = this.W;
      for (var i = 0; i < 32; i++)
        W4[i] = msg[start + i];
      for (; i < W4.length; i += 2) {
        var c0_hi = g1_512_hi(W4[i - 4], W4[i - 3]);
        var c0_lo = g1_512_lo(W4[i - 4], W4[i - 3]);
        var c1_hi = W4[i - 14];
        var c1_lo = W4[i - 13];
        var c2_hi = g0_512_hi(W4[i - 30], W4[i - 29]);
        var c2_lo = g0_512_lo(W4[i - 30], W4[i - 29]);
        var c3_hi = W4[i - 32];
        var c3_lo = W4[i - 31];
        W4[i] = sum64_4_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
        W4[i + 1] = sum64_4_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
      }
    }, "_prepareBlock");
    SHA5122.prototype._update = /* @__PURE__ */ __name(function _update(msg, start) {
      this._prepareBlock(msg, start);
      var W4 = this.W;
      var ah = this.h[0];
      var al = this.h[1];
      var bh = this.h[2];
      var bl = this.h[3];
      var ch = this.h[4];
      var cl = this.h[5];
      var dh = this.h[6];
      var dl = this.h[7];
      var eh = this.h[8];
      var el = this.h[9];
      var fh = this.h[10];
      var fl = this.h[11];
      var gh = this.h[12];
      var gl = this.h[13];
      var hh = this.h[14];
      var hl = this.h[15];
      assert(this.k.length === W4.length);
      for (var i = 0; i < W4.length; i += 2) {
        var c0_hi = hh;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
        var c3_hi = this.k[i];
        var c3_lo = this.k[i + 1];
        var c4_hi = W4[i];
        var c4_lo = W4[i + 1];
        var T1_hi = sum64_5_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        var T1_lo = sum64_5_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
        c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        eh = sum64_hi(dh, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
      }
      sum64(this.h, 0, ah, al);
      sum64(this.h, 2, bh, bl);
      sum64(this.h, 4, ch, cl);
      sum64(this.h, 6, dh, dl);
      sum64(this.h, 8, eh, el);
      sum64(this.h, 10, fh, fl);
      sum64(this.h, 12, gh, gl);
      sum64(this.h, 14, hh, hl);
    }, "_update");
    SHA5122.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    }, "digest");
    function ch64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ ~xh & zh;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(ch64_hi, "ch64_hi");
    function ch64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ ~xl & zl;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(ch64_lo, "ch64_lo");
    function maj64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ xh & zh ^ yh & zh;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(maj64_hi, "maj64_hi");
    function maj64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ xl & zl ^ yl & zl;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(maj64_lo, "maj64_lo");
    function s0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 28);
      var c1_hi = rotr64_hi(xl, xh, 2);
      var c2_hi = rotr64_hi(xl, xh, 7);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(s0_512_hi, "s0_512_hi");
    function s0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 28);
      var c1_lo = rotr64_lo(xl, xh, 2);
      var c2_lo = rotr64_lo(xl, xh, 7);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(s0_512_lo, "s0_512_lo");
    function s1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 14);
      var c1_hi = rotr64_hi(xh, xl, 18);
      var c2_hi = rotr64_hi(xl, xh, 9);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(s1_512_hi, "s1_512_hi");
    function s1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 14);
      var c1_lo = rotr64_lo(xh, xl, 18);
      var c2_lo = rotr64_lo(xl, xh, 9);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(s1_512_lo, "s1_512_lo");
    function g0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 1);
      var c1_hi = rotr64_hi(xh, xl, 8);
      var c2_hi = shr64_hi(xh, xl, 7);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(g0_512_hi, "g0_512_hi");
    function g0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 1);
      var c1_lo = rotr64_lo(xh, xl, 8);
      var c2_lo = shr64_lo(xh, xl, 7);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(g0_512_lo, "g0_512_lo");
    function g1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 19);
      var c1_hi = rotr64_hi(xl, xh, 29);
      var c2_hi = shr64_hi(xh, xl, 6);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(g1_512_hi, "g1_512_hi");
    function g1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 19);
      var c1_lo = rotr64_lo(xl, xh, 29);
      var c2_lo = shr64_lo(xh, xl, 6);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    __name(g1_512_lo, "g1_512_lo");
  }
});

// node_modules/hash.js/lib/hash/sha/384.js
var require__5 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/384.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var SHA5122 = require__4();
    function SHA3842() {
      if (!(this instanceof SHA3842))
        return new SHA3842();
      SHA5122.call(this);
      this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
      ];
    }
    __name(SHA3842, "SHA384");
    utils.inherits(SHA3842, SHA5122);
    module.exports = SHA3842;
    SHA3842.blockSize = 1024;
    SHA3842.outSize = 384;
    SHA3842.hmacStrength = 192;
    SHA3842.padLength = 128;
    SHA3842.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 12), "big");
      else
        return utils.split32(this.h.slice(0, 12), "big");
    }, "digest");
  }
});

// node_modules/hash.js/lib/hash/sha.js
var require_sha = __commonJS({
  "node_modules/hash.js/lib/hash/sha.js"(exports) {
    "use strict";
    init_checked_fetch();
    exports.sha1 = require__();
    exports.sha224 = require__3();
    exports.sha256 = require__2();
    exports.sha384 = require__5();
    exports.sha512 = require__4();
  }
});

// node_modules/hash.js/lib/hash/ripemd.js
var require_ripemd = __commonJS({
  "node_modules/hash.js/lib/hash/ripemd.js"(exports) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var common = require_common();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_3 = utils.sum32_3;
    var sum32_4 = utils.sum32_4;
    var BlockHash = common.BlockHash;
    function RIPEMD1602() {
      if (!(this instanceof RIPEMD1602))
        return new RIPEMD1602();
      BlockHash.call(this);
      this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      this.endian = "little";
    }
    __name(RIPEMD1602, "RIPEMD160");
    utils.inherits(RIPEMD1602, BlockHash);
    exports.ripemd160 = RIPEMD1602;
    RIPEMD1602.blockSize = 512;
    RIPEMD1602.outSize = 160;
    RIPEMD1602.hmacStrength = 192;
    RIPEMD1602.padLength = 64;
    RIPEMD1602.prototype._update = /* @__PURE__ */ __name(function update(msg, start) {
      var A = this.h[0];
      var B = this.h[1];
      var C = this.h[2];
      var D = this.h[3];
      var E = this.h[4];
      var Ah = A;
      var Bh = B;
      var Ch = C;
      var Dh = D;
      var Eh = E;
      for (var j = 0; j < 80; j++) {
        var T3 = sum32(
          rotl32(
            sum32_4(A, f(j, B, C, D), msg[r[j] + start], K3(j)),
            s[j]
          ),
          E
        );
        A = E;
        E = D;
        D = rotl32(C, 10);
        C = B;
        B = T3;
        T3 = sum32(
          rotl32(
            sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
            sh[j]
          ),
          Eh
        );
        Ah = Eh;
        Eh = Dh;
        Dh = rotl32(Ch, 10);
        Ch = Bh;
        Bh = T3;
      }
      T3 = sum32_3(this.h[1], C, Dh);
      this.h[1] = sum32_3(this.h[2], D, Eh);
      this.h[2] = sum32_3(this.h[3], E, Ah);
      this.h[3] = sum32_3(this.h[4], A, Bh);
      this.h[4] = sum32_3(this.h[0], B, Ch);
      this.h[0] = T3;
    }, "update");
    RIPEMD1602.prototype._digest = /* @__PURE__ */ __name(function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "little");
      else
        return utils.split32(this.h, "little");
    }, "digest");
    function f(j, x2, y, z) {
      if (j <= 15)
        return x2 ^ y ^ z;
      else if (j <= 31)
        return x2 & y | ~x2 & z;
      else if (j <= 47)
        return (x2 | ~y) ^ z;
      else if (j <= 63)
        return x2 & z | y & ~z;
      else
        return x2 ^ (y | ~z);
    }
    __name(f, "f");
    function K3(j) {
      if (j <= 15)
        return 0;
      else if (j <= 31)
        return 1518500249;
      else if (j <= 47)
        return 1859775393;
      else if (j <= 63)
        return 2400959708;
      else
        return 2840853838;
    }
    __name(K3, "K");
    function Kh(j) {
      if (j <= 15)
        return 1352829926;
      else if (j <= 31)
        return 1548603684;
      else if (j <= 47)
        return 1836072691;
      else if (j <= 63)
        return 2053994217;
      else
        return 0;
    }
    __name(Kh, "Kh");
    var r = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8,
      3,
      10,
      14,
      4,
      9,
      15,
      8,
      1,
      2,
      7,
      0,
      6,
      13,
      11,
      5,
      12,
      1,
      9,
      11,
      10,
      0,
      8,
      12,
      4,
      13,
      3,
      7,
      15,
      14,
      5,
      6,
      2,
      4,
      0,
      5,
      9,
      7,
      12,
      2,
      10,
      14,
      1,
      3,
      8,
      11,
      6,
      15,
      13
    ];
    var rh = [
      5,
      14,
      7,
      0,
      9,
      2,
      11,
      4,
      13,
      6,
      15,
      8,
      1,
      10,
      3,
      12,
      6,
      11,
      3,
      7,
      0,
      13,
      5,
      10,
      14,
      15,
      8,
      12,
      4,
      9,
      1,
      2,
      15,
      5,
      1,
      3,
      7,
      14,
      6,
      9,
      11,
      8,
      12,
      2,
      10,
      0,
      4,
      13,
      8,
      6,
      4,
      1,
      3,
      11,
      15,
      0,
      5,
      12,
      2,
      13,
      9,
      7,
      10,
      14,
      12,
      15,
      10,
      4,
      1,
      5,
      8,
      7,
      6,
      2,
      13,
      14,
      0,
      3,
      9,
      11
    ];
    var s = [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8,
      7,
      6,
      8,
      13,
      11,
      9,
      7,
      15,
      7,
      12,
      15,
      9,
      11,
      7,
      13,
      12,
      11,
      13,
      6,
      7,
      14,
      9,
      13,
      15,
      14,
      8,
      13,
      6,
      5,
      12,
      7,
      5,
      11,
      12,
      14,
      15,
      14,
      15,
      9,
      8,
      9,
      14,
      5,
      6,
      8,
      6,
      5,
      12,
      9,
      15,
      5,
      11,
      6,
      8,
      13,
      12,
      5,
      12,
      13,
      14,
      11,
      8,
      5,
      6
    ];
    var sh = [
      8,
      9,
      9,
      11,
      13,
      15,
      15,
      5,
      7,
      7,
      8,
      11,
      14,
      14,
      12,
      6,
      9,
      13,
      15,
      7,
      12,
      8,
      9,
      11,
      7,
      7,
      12,
      7,
      6,
      15,
      13,
      11,
      9,
      7,
      15,
      11,
      8,
      6,
      6,
      14,
      12,
      13,
      5,
      14,
      13,
      13,
      7,
      5,
      15,
      5,
      8,
      11,
      14,
      14,
      6,
      14,
      6,
      9,
      12,
      9,
      12,
      5,
      15,
      8,
      8,
      5,
      12,
      9,
      12,
      5,
      14,
      6,
      8,
      13,
      6,
      5,
      15,
      13,
      11,
      11
    ];
  }
});

// node_modules/hash.js/lib/hash/hmac.js
var require_hmac = __commonJS({
  "node_modules/hash.js/lib/hash/hmac.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function Hmac(hash, key, enc) {
      if (!(this instanceof Hmac))
        return new Hmac(hash, key, enc);
      this.Hash = hash;
      this.blockSize = hash.blockSize / 8;
      this.outSize = hash.outSize / 8;
      this.inner = null;
      this.outer = null;
      this._init(utils.toArray(key, enc));
    }
    __name(Hmac, "Hmac");
    module.exports = Hmac;
    Hmac.prototype._init = /* @__PURE__ */ __name(function init(key) {
      if (key.length > this.blockSize)
        key = new this.Hash().update(key).digest();
      assert(key.length <= this.blockSize);
      for (var i = key.length; i < this.blockSize; i++)
        key.push(0);
      for (i = 0; i < key.length; i++)
        key[i] ^= 54;
      this.inner = new this.Hash().update(key);
      for (i = 0; i < key.length; i++)
        key[i] ^= 106;
      this.outer = new this.Hash().update(key);
    }, "init");
    Hmac.prototype.update = /* @__PURE__ */ __name(function update(msg, enc) {
      this.inner.update(msg, enc);
      return this;
    }, "update");
    Hmac.prototype.digest = /* @__PURE__ */ __name(function digest(enc) {
      this.outer.update(this.inner.digest());
      return this.outer.digest(enc);
    }, "digest");
  }
});

// node_modules/hash.js/lib/hash.js
var require_hash = __commonJS({
  "node_modules/hash.js/lib/hash.js"(exports) {
    init_checked_fetch();
    var hash = exports;
    hash.utils = require_utils3();
    hash.common = require_common();
    hash.sha = require_sha();
    hash.ripemd = require_ripemd();
    hash.hmac = require_hmac();
    hash.sha1 = hash.sha.sha1;
    hash.sha256 = hash.sha.sha256;
    hash.sha224 = hash.sha.sha224;
    hash.sha384 = hash.sha.sha384;
    hash.sha512 = hash.sha.sha512;
    hash.ripemd160 = hash.ripemd.ripemd160;
  }
});

// node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js
var require_secp256k1 = __commonJS({
  "node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"(exports, module) {
    init_checked_fetch();
    module.exports = {
      doubles: {
        step: 4,
        points: [
          [
            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
          ],
          [
            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
          ],
          [
            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
          ],
          [
            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
          ],
          [
            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
          ],
          [
            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
          ],
          [
            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
          ],
          [
            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
          ],
          [
            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
          ],
          [
            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
          ],
          [
            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
          ],
          [
            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
          ],
          [
            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
          ],
          [
            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
          ],
          [
            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
          ],
          [
            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
          ],
          [
            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
          ],
          [
            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
          ],
          [
            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
          ],
          [
            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
          ],
          [
            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
          ],
          [
            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
          ],
          [
            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
          ],
          [
            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
          ],
          [
            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
          ],
          [
            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
          ],
          [
            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
          ],
          [
            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
          ],
          [
            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
          ],
          [
            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
          ],
          [
            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
          ],
          [
            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
          ],
          [
            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
          ],
          [
            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
          ],
          [
            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
          ],
          [
            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
          ],
          [
            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
          ],
          [
            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
          ],
          [
            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
          ],
          [
            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
          ],
          [
            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
          ],
          [
            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
          ],
          [
            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
          ],
          [
            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
          ],
          [
            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
          ],
          [
            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
          ],
          [
            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
          ],
          [
            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
          ],
          [
            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
          ],
          [
            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
          ],
          [
            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
          ],
          [
            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
          ],
          [
            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
          ],
          [
            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
          ],
          [
            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
          ],
          [
            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
          ],
          [
            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
          ],
          [
            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
          ],
          [
            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
          ],
          [
            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
          ],
          [
            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
          ],
          [
            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
          ],
          [
            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
          ],
          [
            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
          ],
          [
            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
          ]
        ]
      },
      naf: {
        wnd: 7,
        points: [
          [
            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
          ],
          [
            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
          ],
          [
            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
          ],
          [
            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
          ],
          [
            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
          ],
          [
            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
          ],
          [
            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
          ],
          [
            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
          ],
          [
            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
          ],
          [
            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
          ],
          [
            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
          ],
          [
            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
          ],
          [
            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
          ],
          [
            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
          ],
          [
            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
          ],
          [
            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
          ],
          [
            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
          ],
          [
            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
          ],
          [
            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
          ],
          [
            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
          ],
          [
            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
          ],
          [
            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
          ],
          [
            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
          ],
          [
            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
          ],
          [
            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
          ],
          [
            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
          ],
          [
            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
          ],
          [
            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
          ],
          [
            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
          ],
          [
            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
          ],
          [
            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
          ],
          [
            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
          ],
          [
            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
          ],
          [
            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
          ],
          [
            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
          ],
          [
            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
          ],
          [
            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
          ],
          [
            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
          ],
          [
            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
          ],
          [
            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
          ],
          [
            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
          ],
          [
            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
          ],
          [
            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
          ],
          [
            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
          ],
          [
            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
          ],
          [
            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
          ],
          [
            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
          ],
          [
            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
          ],
          [
            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
          ],
          [
            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
          ],
          [
            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
          ],
          [
            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
          ],
          [
            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
          ],
          [
            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
          ],
          [
            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
          ],
          [
            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
          ],
          [
            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
          ],
          [
            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
          ],
          [
            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
          ],
          [
            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
          ],
          [
            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
          ],
          [
            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
          ],
          [
            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
          ],
          [
            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
          ],
          [
            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
          ],
          [
            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
          ],
          [
            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
          ],
          [
            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
          ],
          [
            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
          ],
          [
            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
          ],
          [
            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
          ],
          [
            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
          ],
          [
            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
          ],
          [
            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
          ],
          [
            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
          ],
          [
            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
          ],
          [
            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
          ],
          [
            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
          ],
          [
            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
          ],
          [
            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
          ],
          [
            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
          ],
          [
            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
          ],
          [
            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
          ],
          [
            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
          ],
          [
            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
          ],
          [
            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
          ],
          [
            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
          ],
          [
            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
          ],
          [
            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
          ],
          [
            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
          ],
          [
            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
          ],
          [
            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
          ],
          [
            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
          ],
          [
            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
          ],
          [
            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
          ],
          [
            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
          ],
          [
            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
          ],
          [
            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
          ],
          [
            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
          ],
          [
            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
          ],
          [
            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
          ],
          [
            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
          ],
          [
            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
          ],
          [
            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
          ],
          [
            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
          ],
          [
            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
          ],
          [
            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
          ],
          [
            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
          ],
          [
            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
          ],
          [
            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
          ],
          [
            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
          ],
          [
            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
          ],
          [
            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
          ],
          [
            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
          ],
          [
            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
          ],
          [
            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
          ],
          [
            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
          ],
          [
            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
          ],
          [
            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
          ],
          [
            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
          ],
          [
            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
          ],
          [
            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
          ],
          [
            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
          ],
          [
            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
          ],
          [
            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
          ],
          [
            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
          ],
          [
            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
          ]
        ]
      }
    };
  }
});

// node_modules/elliptic/lib/elliptic/curves.js
var require_curves = __commonJS({
  "node_modules/elliptic/lib/elliptic/curves.js"(exports) {
    "use strict";
    init_checked_fetch();
    var curves = exports;
    var hash = require_hash();
    var curve = require_curve();
    var utils = require_utils2();
    var assert = utils.assert;
    function PresetCurve(options) {
      if (options.type === "short")
        this.curve = new curve.short(options);
      else if (options.type === "edwards")
        this.curve = new curve.edwards(options);
      else
        this.curve = new curve.mont(options);
      this.g = this.curve.g;
      this.n = this.curve.n;
      this.hash = options.hash;
      assert(this.g.validate(), "Invalid curve");
      assert(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    __name(PresetCurve, "PresetCurve");
    curves.PresetCurve = PresetCurve;
    function defineCurve(name, options) {
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        get: function() {
          var curve2 = new PresetCurve(options);
          Object.defineProperty(curves, name, {
            configurable: true,
            enumerable: true,
            value: curve2
          });
          return curve2;
        }
      });
    }
    __name(defineCurve, "defineCurve");
    defineCurve("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: hash.sha256,
      gRed: false,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
      ]
    });
    defineCurve("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: hash.sha256,
      gRed: false,
      g: [
        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
      ]
    });
    defineCurve("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: hash.sha256,
      gRed: false,
      g: [
        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
      ]
    });
    defineCurve("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: hash.sha384,
      gRed: false,
      g: [
        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
      ]
    });
    defineCurve("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: hash.sha512,
      gRed: false,
      g: [
        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
      ]
    });
    defineCurve("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "9"
      ]
    });
    defineCurve("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      // -121665 * (121666^(-1)) (mod P)
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
        // 4/5
        "6666666666666666666666666666666666666666666666666666666666666658"
      ]
    });
    var pre;
    try {
      pre = require_secp256k1();
    } catch (e) {
      pre = void 0;
    }
    defineCurve("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: hash.sha256,
      // Precomputed endomorphism
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3"
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15"
        }
      ],
      gRed: false,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        pre
      ]
    });
  }
});

// node_modules/hmac-drbg/lib/hmac-drbg.js
var require_hmac_drbg = __commonJS({
  "node_modules/hmac-drbg/lib/hmac-drbg.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var hash = require_hash();
    var utils = require_utils();
    var assert = require_minimalistic_assert();
    function HmacDRBG(options) {
      if (!(this instanceof HmacDRBG))
        return new HmacDRBG(options);
      this.hash = options.hash;
      this.predResist = !!options.predResist;
      this.outLen = this.hash.outSize;
      this.minEntropy = options.minEntropy || this.hash.hmacStrength;
      this._reseed = null;
      this.reseedInterval = null;
      this.K = null;
      this.V = null;
      var entropy = utils.toArray(options.entropy, options.entropyEnc || "hex");
      var nonce = utils.toArray(options.nonce, options.nonceEnc || "hex");
      var pers = utils.toArray(options.pers, options.persEnc || "hex");
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._init(entropy, nonce, pers);
    }
    __name(HmacDRBG, "HmacDRBG");
    module.exports = HmacDRBG;
    HmacDRBG.prototype._init = /* @__PURE__ */ __name(function init(entropy, nonce, pers) {
      var seed = entropy.concat(nonce).concat(pers);
      this.K = new Array(this.outLen / 8);
      this.V = new Array(this.outLen / 8);
      for (var i = 0; i < this.V.length; i++) {
        this.K[i] = 0;
        this.V[i] = 1;
      }
      this._update(seed);
      this._reseed = 1;
      this.reseedInterval = 281474976710656;
    }, "init");
    HmacDRBG.prototype._hmac = /* @__PURE__ */ __name(function hmac() {
      return new hash.hmac(this.hash, this.K);
    }, "hmac");
    HmacDRBG.prototype._update = /* @__PURE__ */ __name(function update(seed) {
      var kmac = this._hmac().update(this.V).update([0]);
      if (seed)
        kmac = kmac.update(seed);
      this.K = kmac.digest();
      this.V = this._hmac().update(this.V).digest();
      if (!seed)
        return;
      this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
      this.V = this._hmac().update(this.V).digest();
    }, "update");
    HmacDRBG.prototype.reseed = /* @__PURE__ */ __name(function reseed(entropy, entropyEnc, add, addEnc) {
      if (typeof entropyEnc !== "string") {
        addEnc = add;
        add = entropyEnc;
        entropyEnc = null;
      }
      entropy = utils.toArray(entropy, entropyEnc);
      add = utils.toArray(add, addEnc);
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._update(entropy.concat(add || []));
      this._reseed = 1;
    }, "reseed");
    HmacDRBG.prototype.generate = /* @__PURE__ */ __name(function generate(len, enc, add, addEnc) {
      if (this._reseed > this.reseedInterval)
        throw new Error("Reseed is required");
      if (typeof enc !== "string") {
        addEnc = add;
        add = enc;
        enc = null;
      }
      if (add) {
        add = utils.toArray(add, addEnc || "hex");
        this._update(add);
      }
      var temp = [];
      while (temp.length < len) {
        this.V = this._hmac().update(this.V).digest();
        temp = temp.concat(this.V);
      }
      var res = temp.slice(0, len);
      this._update(add);
      this._reseed++;
      return utils.encode(res, enc);
    }, "generate");
  }
});

// node_modules/elliptic/lib/elliptic/ec/key.js
var require_key = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/key.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function KeyPair(ec2, options) {
      this.ec = ec2;
      this.priv = null;
      this.pub = null;
      if (options.priv)
        this._importPrivate(options.priv, options.privEnc);
      if (options.pub)
        this._importPublic(options.pub, options.pubEnc);
    }
    __name(KeyPair, "KeyPair");
    module.exports = KeyPair;
    KeyPair.fromPublic = /* @__PURE__ */ __name(function fromPublic(ec2, pub, enc) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(ec2, {
        pub,
        pubEnc: enc
      });
    }, "fromPublic");
    KeyPair.fromPrivate = /* @__PURE__ */ __name(function fromPrivate(ec2, priv, enc) {
      if (priv instanceof KeyPair)
        return priv;
      return new KeyPair(ec2, {
        priv,
        privEnc: enc
      });
    }, "fromPrivate");
    KeyPair.prototype.validate = /* @__PURE__ */ __name(function validate() {
      var pub = this.getPublic();
      if (pub.isInfinity())
        return { result: false, reason: "Invalid public key" };
      if (!pub.validate())
        return { result: false, reason: "Public key is not a point" };
      if (!pub.mul(this.ec.curve.n).isInfinity())
        return { result: false, reason: "Public key * N != O" };
      return { result: true, reason: null };
    }, "validate");
    KeyPair.prototype.getPublic = /* @__PURE__ */ __name(function getPublic(compact, enc) {
      if (typeof compact === "string") {
        enc = compact;
        compact = null;
      }
      if (!this.pub)
        this.pub = this.ec.g.mul(this.priv);
      if (!enc)
        return this.pub;
      return this.pub.encode(enc, compact);
    }, "getPublic");
    KeyPair.prototype.getPrivate = /* @__PURE__ */ __name(function getPrivate(enc) {
      if (enc === "hex")
        return this.priv.toString(16, 2);
      else
        return this.priv;
    }, "getPrivate");
    KeyPair.prototype._importPrivate = /* @__PURE__ */ __name(function _importPrivate(key, enc) {
      this.priv = new BN(key, enc || 16);
      this.priv = this.priv.umod(this.ec.curve.n);
    }, "_importPrivate");
    KeyPair.prototype._importPublic = /* @__PURE__ */ __name(function _importPublic(key, enc) {
      if (key.x || key.y) {
        if (this.ec.curve.type === "mont") {
          assert(key.x, "Need x coordinate");
        } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
          assert(key.x && key.y, "Need both x and y coordinate");
        }
        this.pub = this.ec.curve.point(key.x, key.y);
        return;
      }
      this.pub = this.ec.curve.decodePoint(key, enc);
    }, "_importPublic");
    KeyPair.prototype.derive = /* @__PURE__ */ __name(function derive(pub) {
      if (!pub.validate()) {
        assert(pub.validate(), "public point not validated");
      }
      return pub.mul(this.priv).getX();
    }, "derive");
    KeyPair.prototype.sign = /* @__PURE__ */ __name(function sign(msg, enc, options) {
      return this.ec.sign(msg, this, enc, options);
    }, "sign");
    KeyPair.prototype.verify = /* @__PURE__ */ __name(function verify(msg, signature, options) {
      return this.ec.verify(msg, signature, this, void 0, options);
    }, "verify");
    KeyPair.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    }, "inspect");
  }
});

// node_modules/elliptic/lib/elliptic/ec/signature.js
var require_signature = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/signature.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function Signature(options, enc) {
      if (options instanceof Signature)
        return options;
      if (this._importDER(options, enc))
        return;
      assert(options.r && options.s, "Signature without r or s");
      this.r = new BN(options.r, 16);
      this.s = new BN(options.s, 16);
      if (options.recoveryParam === void 0)
        this.recoveryParam = null;
      else
        this.recoveryParam = options.recoveryParam;
    }
    __name(Signature, "Signature");
    module.exports = Signature;
    function Position() {
      this.place = 0;
    }
    __name(Position, "Position");
    function getLength(buf, p) {
      var initial = buf[p.place++];
      if (!(initial & 128)) {
        return initial;
      }
      var octetLen = initial & 15;
      if (octetLen === 0 || octetLen > 4) {
        return false;
      }
      if (buf[p.place] === 0) {
        return false;
      }
      var val = 0;
      for (var i = 0, off = p.place; i < octetLen; i++, off++) {
        val <<= 8;
        val |= buf[off];
        val >>>= 0;
      }
      if (val <= 127) {
        return false;
      }
      p.place = off;
      return val;
    }
    __name(getLength, "getLength");
    function rmPadding(buf) {
      var i = 0;
      var len = buf.length - 1;
      while (!buf[i] && !(buf[i + 1] & 128) && i < len) {
        i++;
      }
      if (i === 0) {
        return buf;
      }
      return buf.slice(i);
    }
    __name(rmPadding, "rmPadding");
    Signature.prototype._importDER = /* @__PURE__ */ __name(function _importDER(data, enc) {
      data = utils.toArray(data, enc);
      var p = new Position();
      if (data[p.place++] !== 48) {
        return false;
      }
      var len = getLength(data, p);
      if (len === false) {
        return false;
      }
      if (len + p.place !== data.length) {
        return false;
      }
      if (data[p.place++] !== 2) {
        return false;
      }
      var rlen = getLength(data, p);
      if (rlen === false) {
        return false;
      }
      if ((data[p.place] & 128) !== 0) {
        return false;
      }
      var r = data.slice(p.place, rlen + p.place);
      p.place += rlen;
      if (data[p.place++] !== 2) {
        return false;
      }
      var slen = getLength(data, p);
      if (slen === false) {
        return false;
      }
      if (data.length !== slen + p.place) {
        return false;
      }
      if ((data[p.place] & 128) !== 0) {
        return false;
      }
      var s = data.slice(p.place, slen + p.place);
      if (r[0] === 0) {
        if (r[1] & 128) {
          r = r.slice(1);
        } else {
          return false;
        }
      }
      if (s[0] === 0) {
        if (s[1] & 128) {
          s = s.slice(1);
        } else {
          return false;
        }
      }
      this.r = new BN(r);
      this.s = new BN(s);
      this.recoveryParam = null;
      return true;
    }, "_importDER");
    function constructLength(arr, len) {
      if (len < 128) {
        arr.push(len);
        return;
      }
      var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
      arr.push(octets | 128);
      while (--octets) {
        arr.push(len >>> (octets << 3) & 255);
      }
      arr.push(len);
    }
    __name(constructLength, "constructLength");
    Signature.prototype.toDER = /* @__PURE__ */ __name(function toDER(enc) {
      var r = this.r.toArray();
      var s = this.s.toArray();
      if (r[0] & 128)
        r = [0].concat(r);
      if (s[0] & 128)
        s = [0].concat(s);
      r = rmPadding(r);
      s = rmPadding(s);
      while (!s[0] && !(s[1] & 128)) {
        s = s.slice(1);
      }
      var arr = [2];
      constructLength(arr, r.length);
      arr = arr.concat(r);
      arr.push(2);
      constructLength(arr, s.length);
      var backHalf = arr.concat(s);
      var res = [48];
      constructLength(res, backHalf.length);
      res = res.concat(backHalf);
      return utils.encode(res, enc);
    }, "toDER");
  }
});

// node_modules/elliptic/lib/elliptic/ec/index.js
var require_ec = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var HmacDRBG = require_hmac_drbg();
    var utils = require_utils2();
    var curves = require_curves();
    var rand = require_brorand();
    var assert = utils.assert;
    var KeyPair = require_key();
    var Signature = require_signature();
    function EC2(options) {
      if (!(this instanceof EC2))
        return new EC2(options);
      if (typeof options === "string") {
        assert(
          Object.prototype.hasOwnProperty.call(curves, options),
          "Unknown curve " + options
        );
        options = curves[options];
      }
      if (options instanceof curves.PresetCurve)
        options = { curve: options };
      this.curve = options.curve.curve;
      this.n = this.curve.n;
      this.nh = this.n.ushrn(1);
      this.g = this.curve.g;
      this.g = options.curve.g;
      this.g.precompute(options.curve.n.bitLength() + 1);
      this.hash = options.hash || options.curve.hash;
    }
    __name(EC2, "EC");
    module.exports = EC2;
    EC2.prototype.keyPair = /* @__PURE__ */ __name(function keyPair(options) {
      return new KeyPair(this, options);
    }, "keyPair");
    EC2.prototype.keyFromPrivate = /* @__PURE__ */ __name(function keyFromPrivate(priv, enc) {
      return KeyPair.fromPrivate(this, priv, enc);
    }, "keyFromPrivate");
    EC2.prototype.keyFromPublic = /* @__PURE__ */ __name(function keyFromPublic(pub, enc) {
      return KeyPair.fromPublic(this, pub, enc);
    }, "keyFromPublic");
    EC2.prototype.genKeyPair = /* @__PURE__ */ __name(function genKeyPair(options) {
      if (!options)
        options = {};
      var drbg = new HmacDRBG({
        hash: this.hash,
        pers: options.pers,
        persEnc: options.persEnc || "utf8",
        entropy: options.entropy || rand(this.hash.hmacStrength),
        entropyEnc: options.entropy && options.entropyEnc || "utf8",
        nonce: this.n.toArray()
      });
      var bytes = this.n.byteLength();
      var ns2 = this.n.sub(new BN(2));
      for (; ; ) {
        var priv = new BN(drbg.generate(bytes));
        if (priv.cmp(ns2) > 0)
          continue;
        priv.iaddn(1);
        return this.keyFromPrivate(priv);
      }
    }, "genKeyPair");
    EC2.prototype._truncateToN = /* @__PURE__ */ __name(function _truncateToN(msg, truncOnly, bitLength) {
      var byteLength;
      if (BN.isBN(msg) || typeof msg === "number") {
        msg = new BN(msg, 16);
        byteLength = msg.byteLength();
      } else if (typeof msg === "object") {
        byteLength = msg.length;
        msg = new BN(msg, 16);
      } else {
        var str = msg.toString();
        byteLength = str.length + 1 >>> 1;
        msg = new BN(str, 16);
      }
      if (typeof bitLength !== "number") {
        bitLength = byteLength * 8;
      }
      var delta = bitLength - this.n.bitLength();
      if (delta > 0)
        msg = msg.ushrn(delta);
      if (!truncOnly && msg.cmp(this.n) >= 0)
        return msg.sub(this.n);
      else
        return msg;
    }, "_truncateToN");
    EC2.prototype.sign = /* @__PURE__ */ __name(function sign(msg, key, enc, options) {
      if (typeof enc === "object") {
        options = enc;
        enc = null;
      }
      if (!options)
        options = {};
      if (typeof msg !== "string" && typeof msg !== "number" && !BN.isBN(msg)) {
        assert(
          typeof msg === "object" && msg && typeof msg.length === "number",
          "Expected message to be an array-like, a hex string, or a BN instance"
        );
        assert(msg.length >>> 0 === msg.length);
        for (var i = 0; i < msg.length; i++)
          assert((msg[i] & 255) === msg[i]);
      }
      key = this.keyFromPrivate(key, enc);
      msg = this._truncateToN(msg, false, options.msgBitLength);
      assert(!msg.isNeg(), "Can not sign a negative message");
      var bytes = this.n.byteLength();
      var bkey = key.getPrivate().toArray("be", bytes);
      var nonce = msg.toArray("be", bytes);
      assert(new BN(nonce).eq(msg), "Can not sign message");
      var drbg = new HmacDRBG({
        hash: this.hash,
        entropy: bkey,
        nonce,
        pers: options.pers,
        persEnc: options.persEnc || "utf8"
      });
      var ns1 = this.n.sub(new BN(1));
      for (var iter = 0; ; iter++) {
        var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
        k = this._truncateToN(k, true);
        if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
          continue;
        var kp = this.g.mul(k);
        if (kp.isInfinity())
          continue;
        var kpX = kp.getX();
        var r = kpX.umod(this.n);
        if (r.cmpn(0) === 0)
          continue;
        var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
        s = s.umod(this.n);
        if (s.cmpn(0) === 0)
          continue;
        var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);
        if (options.canonical && s.cmp(this.nh) > 0) {
          s = this.n.sub(s);
          recoveryParam ^= 1;
        }
        return new Signature({ r, s, recoveryParam });
      }
    }, "sign");
    EC2.prototype.verify = /* @__PURE__ */ __name(function verify(msg, signature, key, enc, options) {
      if (!options)
        options = {};
      msg = this._truncateToN(msg, false, options.msgBitLength);
      key = this.keyFromPublic(key, enc);
      signature = new Signature(signature, "hex");
      var r = signature.r;
      var s = signature.s;
      if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
        return false;
      if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
        return false;
      var sinv = s.invm(this.n);
      var u1 = sinv.mul(msg).umod(this.n);
      var u2 = sinv.mul(r).umod(this.n);
      var p;
      if (!this.curve._maxwellTrick) {
        p = this.g.mulAdd(u1, key.getPublic(), u2);
        if (p.isInfinity())
          return false;
        return p.getX().umod(this.n).cmp(r) === 0;
      }
      p = this.g.jmulAdd(u1, key.getPublic(), u2);
      if (p.isInfinity())
        return false;
      return p.eqXToP(r);
    }, "verify");
    EC2.prototype.recoverPubKey = function(msg, signature, j, enc) {
      assert((3 & j) === j, "The recovery param is more than two bits");
      signature = new Signature(signature, enc);
      var n2 = this.n;
      var e = new BN(msg);
      var r = signature.r;
      var s = signature.s;
      var isYOdd = j & 1;
      var isSecondKey = j >> 1;
      if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
        throw new Error("Unable to find sencond key candinate");
      if (isSecondKey)
        r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
      else
        r = this.curve.pointFromX(r, isYOdd);
      var rInv = signature.r.invm(n2);
      var s1 = n2.sub(e).mul(rInv).umod(n2);
      var s2 = s.mul(rInv).umod(n2);
      return this.g.mulAdd(s1, r, s2);
    };
    EC2.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
      signature = new Signature(signature, enc);
      if (signature.recoveryParam !== null)
        return signature.recoveryParam;
      for (var i = 0; i < 4; i++) {
        var Qprime;
        try {
          Qprime = this.recoverPubKey(e, signature, i);
        } catch (e2) {
          continue;
        }
        if (Qprime.eq(Q))
          return i;
      }
      throw new Error("Unable to find valid recovery factor");
    };
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/key.js
var require_key2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/key.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var cachedProperty = utils.cachedProperty;
    function KeyPair(eddsa, params) {
      this.eddsa = eddsa;
      this._secret = parseBytes(params.secret);
      if (eddsa.isPoint(params.pub))
        this._pub = params.pub;
      else
        this._pubBytes = parseBytes(params.pub);
    }
    __name(KeyPair, "KeyPair");
    KeyPair.fromPublic = /* @__PURE__ */ __name(function fromPublic(eddsa, pub) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(eddsa, { pub });
    }, "fromPublic");
    KeyPair.fromSecret = /* @__PURE__ */ __name(function fromSecret(eddsa, secret) {
      if (secret instanceof KeyPair)
        return secret;
      return new KeyPair(eddsa, { secret });
    }, "fromSecret");
    KeyPair.prototype.secret = /* @__PURE__ */ __name(function secret() {
      return this._secret;
    }, "secret");
    cachedProperty(KeyPair, "pubBytes", /* @__PURE__ */ __name(function pubBytes() {
      return this.eddsa.encodePoint(this.pub());
    }, "pubBytes"));
    cachedProperty(KeyPair, "pub", /* @__PURE__ */ __name(function pub() {
      if (this._pubBytes)
        return this.eddsa.decodePoint(this._pubBytes);
      return this.eddsa.g.mul(this.priv());
    }, "pub"));
    cachedProperty(KeyPair, "privBytes", /* @__PURE__ */ __name(function privBytes() {
      var eddsa = this.eddsa;
      var hash = this.hash();
      var lastIx = eddsa.encodingLength - 1;
      var a = hash.slice(0, eddsa.encodingLength);
      a[0] &= 248;
      a[lastIx] &= 127;
      a[lastIx] |= 64;
      return a;
    }, "privBytes"));
    cachedProperty(KeyPair, "priv", /* @__PURE__ */ __name(function priv() {
      return this.eddsa.decodeInt(this.privBytes());
    }, "priv"));
    cachedProperty(KeyPair, "hash", /* @__PURE__ */ __name(function hash() {
      return this.eddsa.hash().update(this.secret()).digest();
    }, "hash"));
    cachedProperty(KeyPair, "messagePrefix", /* @__PURE__ */ __name(function messagePrefix() {
      return this.hash().slice(this.eddsa.encodingLength);
    }, "messagePrefix"));
    KeyPair.prototype.sign = /* @__PURE__ */ __name(function sign(message) {
      assert(this._secret, "KeyPair can only verify");
      return this.eddsa.sign(message, this);
    }, "sign");
    KeyPair.prototype.verify = /* @__PURE__ */ __name(function verify(message, sig) {
      return this.eddsa.verify(message, sig, this);
    }, "verify");
    KeyPair.prototype.getSecret = /* @__PURE__ */ __name(function getSecret(enc) {
      assert(this._secret, "KeyPair is public only");
      return utils.encode(this.secret(), enc);
    }, "getSecret");
    KeyPair.prototype.getPublic = /* @__PURE__ */ __name(function getPublic(enc) {
      return utils.encode(this.pubBytes(), enc);
    }, "getPublic");
    module.exports = KeyPair;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/signature.js
var require_signature2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/signature.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    var cachedProperty = utils.cachedProperty;
    var parseBytes = utils.parseBytes;
    function Signature(eddsa, sig) {
      this.eddsa = eddsa;
      if (typeof sig !== "object")
        sig = parseBytes(sig);
      if (Array.isArray(sig)) {
        assert(sig.length === eddsa.encodingLength * 2, "Signature has invalid size");
        sig = {
          R: sig.slice(0, eddsa.encodingLength),
          S: sig.slice(eddsa.encodingLength)
        };
      }
      assert(sig.R && sig.S, "Signature without R or S");
      if (eddsa.isPoint(sig.R))
        this._R = sig.R;
      if (sig.S instanceof BN)
        this._S = sig.S;
      this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
      this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
    }
    __name(Signature, "Signature");
    cachedProperty(Signature, "S", /* @__PURE__ */ __name(function S3() {
      return this.eddsa.decodeInt(this.Sencoded());
    }, "S"));
    cachedProperty(Signature, "R", /* @__PURE__ */ __name(function R() {
      return this.eddsa.decodePoint(this.Rencoded());
    }, "R"));
    cachedProperty(Signature, "Rencoded", /* @__PURE__ */ __name(function Rencoded() {
      return this.eddsa.encodePoint(this.R());
    }, "Rencoded"));
    cachedProperty(Signature, "Sencoded", /* @__PURE__ */ __name(function Sencoded() {
      return this.eddsa.encodeInt(this.S());
    }, "Sencoded"));
    Signature.prototype.toBytes = /* @__PURE__ */ __name(function toBytes() {
      return this.Rencoded().concat(this.Sencoded());
    }, "toBytes");
    Signature.prototype.toHex = /* @__PURE__ */ __name(function toHex() {
      return utils.encode(this.toBytes(), "hex").toUpperCase();
    }, "toHex");
    module.exports = Signature;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/index.js
var require_eddsa = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var hash = require_hash();
    var curves = require_curves();
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var KeyPair = require_key2();
    var Signature = require_signature2();
    function EDDSA(curve) {
      assert(curve === "ed25519", "only tested with ed25519 so far");
      if (!(this instanceof EDDSA))
        return new EDDSA(curve);
      curve = curves[curve].curve;
      this.curve = curve;
      this.g = curve.g;
      this.g.precompute(curve.n.bitLength() + 1);
      this.pointClass = curve.point().constructor;
      this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
      this.hash = hash.sha512;
    }
    __name(EDDSA, "EDDSA");
    module.exports = EDDSA;
    EDDSA.prototype.sign = /* @__PURE__ */ __name(function sign(message, secret) {
      message = parseBytes(message);
      var key = this.keyFromSecret(secret);
      var r = this.hashInt(key.messagePrefix(), message);
      var R = this.g.mul(r);
      var Rencoded = this.encodePoint(R);
      var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
      var S3 = r.add(s_).umod(this.curve.n);
      return this.makeSignature({ R, S: S3, Rencoded });
    }, "sign");
    EDDSA.prototype.verify = /* @__PURE__ */ __name(function verify(message, sig, pub) {
      message = parseBytes(message);
      sig = this.makeSignature(sig);
      if (sig.S().gte(sig.eddsa.curve.n) || sig.S().isNeg()) {
        return false;
      }
      var key = this.keyFromPublic(pub);
      var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
      var SG = this.g.mul(sig.S());
      var RplusAh = sig.R().add(key.pub().mul(h));
      return RplusAh.eq(SG);
    }, "verify");
    EDDSA.prototype.hashInt = /* @__PURE__ */ __name(function hashInt() {
      var hash2 = this.hash();
      for (var i = 0; i < arguments.length; i++)
        hash2.update(arguments[i]);
      return utils.intFromLE(hash2.digest()).umod(this.curve.n);
    }, "hashInt");
    EDDSA.prototype.keyFromPublic = /* @__PURE__ */ __name(function keyFromPublic(pub) {
      return KeyPair.fromPublic(this, pub);
    }, "keyFromPublic");
    EDDSA.prototype.keyFromSecret = /* @__PURE__ */ __name(function keyFromSecret(secret) {
      return KeyPair.fromSecret(this, secret);
    }, "keyFromSecret");
    EDDSA.prototype.makeSignature = /* @__PURE__ */ __name(function makeSignature(sig) {
      if (sig instanceof Signature)
        return sig;
      return new Signature(this, sig);
    }, "makeSignature");
    EDDSA.prototype.encodePoint = /* @__PURE__ */ __name(function encodePoint(point) {
      var enc = point.getY().toArray("le", this.encodingLength);
      enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0;
      return enc;
    }, "encodePoint");
    EDDSA.prototype.decodePoint = /* @__PURE__ */ __name(function decodePoint(bytes) {
      bytes = utils.parseBytes(bytes);
      var lastIx = bytes.length - 1;
      var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~128);
      var xIsOdd = (bytes[lastIx] & 128) !== 0;
      var y = utils.intFromLE(normed);
      return this.curve.pointFromY(y, xIsOdd);
    }, "decodePoint");
    EDDSA.prototype.encodeInt = /* @__PURE__ */ __name(function encodeInt(num) {
      return num.toArray("le", this.encodingLength);
    }, "encodeInt");
    EDDSA.prototype.decodeInt = /* @__PURE__ */ __name(function decodeInt(bytes) {
      return utils.intFromLE(bytes);
    }, "decodeInt");
    EDDSA.prototype.isPoint = /* @__PURE__ */ __name(function isPoint(val) {
      return val instanceof this.pointClass;
    }, "isPoint");
  }
});

// node_modules/elliptic/lib/elliptic.js
var require_elliptic = __commonJS({
  "node_modules/elliptic/lib/elliptic.js"(exports) {
    "use strict";
    init_checked_fetch();
    var elliptic = exports;
    elliptic.version = require_package().version;
    elliptic.utils = require_utils2();
    elliptic.rand = require_brorand();
    elliptic.curve = require_curve();
    elliptic.curves = require_curves();
    elliptic.ec = require_ec();
    elliptic.eddsa = require_eddsa();
  }
});

// .wrangler/tmp/bundle-LJEj5T/middleware-loader.entry.ts
init_checked_fetch();

// .wrangler/tmp/bundle-LJEj5T/middleware-insertion-facade.js
init_checked_fetch();

// worker.js
init_checked_fetch();

// node_modules/crypto-es/lib/index.js
init_checked_fetch();

// node_modules/crypto-es/lib/core.js
init_checked_fetch();
var Base = class {
  /**
   * Extends this object and runs the init method.
   * Arguments to create() will be passed to init().
   *
   * @return {Object} The new object.
   *
   * @static
   *
   * @example
   *
   *     var instance = MyType.create();
   */
  static create(...args) {
    return new this(...args);
  }
  /**
   * Copies properties into this object.
   *
   * @param {Object} properties The properties to mix in.
   *
   * @example
   *
   *     MyType.mixIn({
   *         field: 'value'
   *     });
   */
  mixIn(properties) {
    return Object.assign(this, properties);
  }
  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = instance.clone();
   */
  clone() {
    const clone = new this.constructor();
    Object.assign(clone, this);
    return clone;
  }
};
__name(Base, "Base");
var WordArray = class extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words = [], sigBytes = words.length * 4) {
    super();
    let typedArray = words;
    if (typedArray instanceof ArrayBuffer) {
      typedArray = new Uint8Array(typedArray);
    }
    if (typedArray instanceof Int8Array || typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
      typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    }
    if (typedArray instanceof Uint8Array) {
      const typedArrayByteLength = typedArray.byteLength;
      const _words = [];
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
      }
      this.words = _words;
      this.sigBytes = typedArrayByteLength;
    } else {
      this.words = words;
      this.sigBytes = sigBytes;
    }
  }
  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  static random(nBytes) {
    const words = [];
    const r = /* @__PURE__ */ __name((m_w) => {
      let _m_w = m_w;
      let _m_z = 987654321;
      const mask = 4294967295;
      return () => {
        _m_z = 36969 * (_m_z & 65535) + (_m_z >> 16) & mask;
        _m_w = 18e3 * (_m_w & 65535) + (_m_w >> 16) & mask;
        let result = (_m_z << 16) + _m_w & mask;
        result /= 4294967296;
        result += 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    }, "r");
    for (let i = 0, rcache; i < nBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 4294967296);
      rcache = _r() * 987654071;
      words.push(_r() * 4294967296 | 0);
    }
    return new WordArray(words, nBytes);
  }
  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder = Hex) {
    return encoder.stringify(this);
  }
  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray) {
    const thisWords = this.words;
    const thatWords = wordArray.words;
    const thisSigBytes = this.sigBytes;
    const thatSigBytes = wordArray.sigBytes;
    this.clamp();
    if (thisSigBytes % 4) {
      for (let i = 0; i < thatSigBytes; i += 1) {
        const thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
      }
    } else {
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;
    return this;
  }
  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    const { words, sigBytes } = this;
    words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
    words.length = Math.ceil(sigBytes / 4);
  }
  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);
    return clone;
  }
};
__name(WordArray, "WordArray");
var Hex = {
  /**
   * Converts a word array to a hex string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The hex string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const hexChars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 15).toString(16));
    }
    return hexChars.join("");
  },
  /**
   * Converts a hex string to a word array.
   *
   * @param {string} hexStr The hex string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
   */
  parse(hexStr) {
    const hexStrLength = hexStr.length;
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
    }
    return new WordArray(words, hexStrLength / 2);
  }
};
var Latin1 = {
  /**
   * Converts a word array to a Latin1 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Latin1 string.
   *
   * @static
   *
   * @example
   *
   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const latin1Chars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      latin1Chars.push(String.fromCharCode(bite));
    }
    return latin1Chars.join("");
  },
  /**
   * Converts a Latin1 string to a word array.
   *
   * @param {string} latin1Str The Latin1 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
   */
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i += 1) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
var Utf8 = {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-8 string.
   *
   * @static
   *
   * @example
   *
   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
   */
  stringify(wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error("Malformed UTF-8 data");
    }
  },
  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param {string} utf8Str The UTF-8 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
   */
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
var BufferedBlockAlgorithm = class extends Base {
  constructor() {
    super();
    this._minBufferSize = 0;
  }
  /**
   * Resets this block algorithm's data buffer to its initial state.
   *
   * @example
   *
   *     bufferedBlockAlgorithm.reset();
   */
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  /**
   * Adds new data to this block algorithm's buffer.
   *
   * @param {WordArray|string} data
   *
   *     The data to append. Strings are converted to a WordArray using UTF-8.
   *
   * @example
   *
   *     bufferedBlockAlgorithm._append('data');
   *     bufferedBlockAlgorithm._append(wordArray);
   */
  _append(data) {
    let m_data = data;
    if (typeof m_data === "string") {
      m_data = Utf8.parse(m_data);
    }
    this._data.concat(m_data);
    this._nDataBytes += m_data.sigBytes;
  }
  /**
   * Processes available data blocks.
   *
   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
   *
   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
   *
   * @return {WordArray} The processed data.
   *
   * @example
   *
   *     var processedData = bufferedBlockAlgorithm._process();
   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
   */
  _process(doFlush) {
    let processedWords;
    const { _data: data, blockSize } = this;
    const dataWords = data.words;
    const dataSigBytes = data.sigBytes;
    const blockSizeBytes = blockSize * 4;
    let nBlocksReady = dataSigBytes / blockSizeBytes;
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += blockSize) {
        this._doProcessBlock(dataWords, offset);
      }
      processedWords = dataWords.splice(0, nWordsReady);
      data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = bufferedBlockAlgorithm.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone._data = this._data.clone();
    return clone;
  }
};
__name(BufferedBlockAlgorithm, "BufferedBlockAlgorithm");
var Hasher = class extends BufferedBlockAlgorithm {
  constructor(cfg) {
    super();
    this.blockSize = 512 / 32;
    this.cfg = Object.assign(new Base(), cfg);
    this.reset();
  }
  /**
   * Creates a shortcut function to a hasher's object interface.
   *
   * @param {Hasher} SubHasher The hasher to create a helper for.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
   */
  static _createHelper(SubHasher) {
    return (message, cfg) => new SubHasher(cfg).finalize(message);
  }
  /**
   * Creates a shortcut function to the HMAC's object interface.
   *
   * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
   */
  static _createHmacHelper(SubHasher) {
    return (message, key) => new HMAC(SubHasher, key).finalize(message);
  }
  /**
   * Resets this hasher to its initial state.
   *
   * @example
   *
   *     hasher.reset();
   */
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  /**
   * Updates this hasher with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {Hasher} This hasher.
   *
   * @example
   *
   *     hasher.update('message');
   *     hasher.update(wordArray);
   */
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  /**
   * Finalizes the hash computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The hash.
   *
   * @example
   *
   *     var hash = hasher.finalize();
   *     var hash = hasher.finalize('message');
   *     var hash = hasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
    const hash = this._doFinalize();
    return hash;
  }
};
__name(Hasher, "Hasher");
var HMAC = class extends Base {
  /**
   * Initializes a newly created HMAC.
   *
   * @param {Hasher} SubHasher The hash algorithm to use.
   * @param {WordArray|string} key The secret key.
   *
   * @example
   *
   *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
   */
  constructor(SubHasher, key) {
    super();
    const hasher = new SubHasher();
    this._hasher = hasher;
    let _key = key;
    if (typeof _key === "string") {
      _key = Utf8.parse(_key);
    }
    const hasherBlockSize = hasher.blockSize;
    const hasherBlockSizeBytes = hasherBlockSize * 4;
    if (_key.sigBytes > hasherBlockSizeBytes) {
      _key = hasher.finalize(key);
    }
    _key.clamp();
    const oKey = _key.clone();
    this._oKey = oKey;
    const iKey = _key.clone();
    this._iKey = iKey;
    const oKeyWords = oKey.words;
    const iKeyWords = iKey.words;
    for (let i = 0; i < hasherBlockSize; i += 1) {
      oKeyWords[i] ^= 1549556828;
      iKeyWords[i] ^= 909522486;
    }
    oKey.sigBytes = hasherBlockSizeBytes;
    iKey.sigBytes = hasherBlockSizeBytes;
    this.reset();
  }
  /**
   * Resets this HMAC to its initial state.
   *
   * @example
   *
   *     hmacHasher.reset();
   */
  reset() {
    const hasher = this._hasher;
    hasher.reset();
    hasher.update(this._iKey);
  }
  /**
   * Updates this HMAC with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {HMAC} This HMAC instance.
   *
   * @example
   *
   *     hmacHasher.update('message');
   *     hmacHasher.update(wordArray);
   */
  update(messageUpdate) {
    this._hasher.update(messageUpdate);
    return this;
  }
  /**
   * Finalizes the HMAC computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The HMAC.
   *
   * @example
   *
   *     var hmac = hmacHasher.finalize();
   *     var hmac = hmacHasher.finalize('message');
   *     var hmac = hmacHasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    const hasher = this._hasher;
    const innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
    return hmac;
  }
};
__name(HMAC, "HMAC");

// node_modules/crypto-es/lib/x64-core.js
init_checked_fetch();
var X32WordArray = WordArray;
var X64Word = class extends Base {
  /**
   * Initializes a newly created 64-bit word.
   *
   * @param {number} high The high 32 bits.
   * @param {number} low The low 32 bits.
   *
   * @example
   *
   *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
   */
  constructor(high, low) {
    super();
    this.high = high;
    this.low = low;
  }
};
__name(X64Word, "X64Word");
var X64WordArray = class extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.x64.WordArray.create();
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ]);
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ], 10);
   */
  constructor(words = [], sigBytes = words.length * 8) {
    super();
    this.words = words;
    this.sigBytes = sigBytes;
  }
  /**
   * Converts this 64-bit word array to a 32-bit word array.
   *
   * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
   *
   * @example
   *
   *     var x32WordArray = x64WordArray.toX32();
   */
  toX32() {
    const x64Words = this.words;
    const x64WordsLength = x64Words.length;
    const x32Words = [];
    for (let i = 0; i < x64WordsLength; i += 1) {
      const x64Word = x64Words[i];
      x32Words.push(x64Word.high);
      x32Words.push(x64Word.low);
    }
    return X32WordArray.create(x32Words, this.sigBytes);
  }
  /**
   * Creates a copy of this word array.
   *
   * @return {X64WordArray} The clone.
   *
   * @example
   *
   *     var clone = x64WordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);
    const { words } = clone;
    const wordsLength = words.length;
    for (let i = 0; i < wordsLength; i += 1) {
      words[i] = words[i].clone();
    }
    return clone;
  }
};
__name(X64WordArray, "X64WordArray");

// node_modules/crypto-es/lib/cipher-core.js
init_checked_fetch();

// node_modules/crypto-es/lib/enc-base64.js
init_checked_fetch();
var parseLoop = /* @__PURE__ */ __name((base64Str, base64StrLength, reverseMap) => {
  const words = [];
  let nBytes = 0;
  for (let i = 0; i < base64StrLength; i += 1) {
    if (i % 4) {
      const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
      const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
      const bitsCombined = bits1 | bits2;
      words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
      nBytes += 1;
    }
  }
  return WordArray.create(words, nBytes);
}, "parseLoop");
var Base64 = {
  /**
   * Converts a word array to a Base64 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Base64 string.
   *
   * @static
   *
   * @example
   *
   *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const map = this._map;
    wordArray.clamp();
    const base64Chars = [];
    for (let i = 0; i < sigBytes; i += 3) {
      const byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i + j * 0.75 < sigBytes; j += 1) {
        base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }
    return base64Chars.join("");
  },
  /**
   * Converts a Base64 string to a word array.
   *
   * @param {string} base64Str The Base64 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
   */
  parse(base64Str) {
    let base64StrLength = base64Str.length;
    const map = this._map;
    let reverseMap = this._reverseMap;
    if (!reverseMap) {
      this._reverseMap = [];
      reverseMap = this._reverseMap;
      for (let j = 0; j < map.length; j += 1) {
        reverseMap[map.charCodeAt(j)] = j;
      }
    }
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }
    return parseLoop(base64Str, base64StrLength, reverseMap);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};

// node_modules/crypto-es/lib/evpkdf.js
init_checked_fetch();

// node_modules/crypto-es/lib/md5.js
init_checked_fetch();
var T = [];
for (let i = 0; i < 64; i += 1) {
  T[i] = Math.abs(Math.sin(i + 1)) * 4294967296 | 0;
}
var FF = /* @__PURE__ */ __name((a, b, c, d2, x2, s, t) => {
  const n2 = a + (b & c | ~b & d2) + x2 + t;
  return (n2 << s | n2 >>> 32 - s) + b;
}, "FF");
var GG = /* @__PURE__ */ __name((a, b, c, d2, x2, s, t) => {
  const n2 = a + (b & d2 | c & ~d2) + x2 + t;
  return (n2 << s | n2 >>> 32 - s) + b;
}, "GG");
var HH = /* @__PURE__ */ __name((a, b, c, d2, x2, s, t) => {
  const n2 = a + (b ^ c ^ d2) + x2 + t;
  return (n2 << s | n2 >>> 32 - s) + b;
}, "HH");
var II = /* @__PURE__ */ __name((a, b, c, d2, x2, s, t) => {
  const n2 = a + (c ^ (b | ~d2)) + x2 + t;
  return (n2 << s | n2 >>> 32 - s) + b;
}, "II");
var MD5Algo = class extends Hasher {
  _doReset() {
    this._hash = new WordArray([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    for (let i = 0; i < 16; i += 1) {
      const offset_i = offset + i;
      const M_offset_i = M[offset_i];
      _M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
    }
    const H2 = this._hash.words;
    const M_offset_0 = _M[offset + 0];
    const M_offset_1 = _M[offset + 1];
    const M_offset_2 = _M[offset + 2];
    const M_offset_3 = _M[offset + 3];
    const M_offset_4 = _M[offset + 4];
    const M_offset_5 = _M[offset + 5];
    const M_offset_6 = _M[offset + 6];
    const M_offset_7 = _M[offset + 7];
    const M_offset_8 = _M[offset + 8];
    const M_offset_9 = _M[offset + 9];
    const M_offset_10 = _M[offset + 10];
    const M_offset_11 = _M[offset + 11];
    const M_offset_12 = _M[offset + 12];
    const M_offset_13 = _M[offset + 13];
    const M_offset_14 = _M[offset + 14];
    const M_offset_15 = _M[offset + 15];
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d2 = H2[3];
    a = FF(a, b, c, d2, M_offset_0, 7, T[0]);
    d2 = FF(d2, a, b, c, M_offset_1, 12, T[1]);
    c = FF(c, d2, a, b, M_offset_2, 17, T[2]);
    b = FF(b, c, d2, a, M_offset_3, 22, T[3]);
    a = FF(a, b, c, d2, M_offset_4, 7, T[4]);
    d2 = FF(d2, a, b, c, M_offset_5, 12, T[5]);
    c = FF(c, d2, a, b, M_offset_6, 17, T[6]);
    b = FF(b, c, d2, a, M_offset_7, 22, T[7]);
    a = FF(a, b, c, d2, M_offset_8, 7, T[8]);
    d2 = FF(d2, a, b, c, M_offset_9, 12, T[9]);
    c = FF(c, d2, a, b, M_offset_10, 17, T[10]);
    b = FF(b, c, d2, a, M_offset_11, 22, T[11]);
    a = FF(a, b, c, d2, M_offset_12, 7, T[12]);
    d2 = FF(d2, a, b, c, M_offset_13, 12, T[13]);
    c = FF(c, d2, a, b, M_offset_14, 17, T[14]);
    b = FF(b, c, d2, a, M_offset_15, 22, T[15]);
    a = GG(a, b, c, d2, M_offset_1, 5, T[16]);
    d2 = GG(d2, a, b, c, M_offset_6, 9, T[17]);
    c = GG(c, d2, a, b, M_offset_11, 14, T[18]);
    b = GG(b, c, d2, a, M_offset_0, 20, T[19]);
    a = GG(a, b, c, d2, M_offset_5, 5, T[20]);
    d2 = GG(d2, a, b, c, M_offset_10, 9, T[21]);
    c = GG(c, d2, a, b, M_offset_15, 14, T[22]);
    b = GG(b, c, d2, a, M_offset_4, 20, T[23]);
    a = GG(a, b, c, d2, M_offset_9, 5, T[24]);
    d2 = GG(d2, a, b, c, M_offset_14, 9, T[25]);
    c = GG(c, d2, a, b, M_offset_3, 14, T[26]);
    b = GG(b, c, d2, a, M_offset_8, 20, T[27]);
    a = GG(a, b, c, d2, M_offset_13, 5, T[28]);
    d2 = GG(d2, a, b, c, M_offset_2, 9, T[29]);
    c = GG(c, d2, a, b, M_offset_7, 14, T[30]);
    b = GG(b, c, d2, a, M_offset_12, 20, T[31]);
    a = HH(a, b, c, d2, M_offset_5, 4, T[32]);
    d2 = HH(d2, a, b, c, M_offset_8, 11, T[33]);
    c = HH(c, d2, a, b, M_offset_11, 16, T[34]);
    b = HH(b, c, d2, a, M_offset_14, 23, T[35]);
    a = HH(a, b, c, d2, M_offset_1, 4, T[36]);
    d2 = HH(d2, a, b, c, M_offset_4, 11, T[37]);
    c = HH(c, d2, a, b, M_offset_7, 16, T[38]);
    b = HH(b, c, d2, a, M_offset_10, 23, T[39]);
    a = HH(a, b, c, d2, M_offset_13, 4, T[40]);
    d2 = HH(d2, a, b, c, M_offset_0, 11, T[41]);
    c = HH(c, d2, a, b, M_offset_3, 16, T[42]);
    b = HH(b, c, d2, a, M_offset_6, 23, T[43]);
    a = HH(a, b, c, d2, M_offset_9, 4, T[44]);
    d2 = HH(d2, a, b, c, M_offset_12, 11, T[45]);
    c = HH(c, d2, a, b, M_offset_15, 16, T[46]);
    b = HH(b, c, d2, a, M_offset_2, 23, T[47]);
    a = II(a, b, c, d2, M_offset_0, 6, T[48]);
    d2 = II(d2, a, b, c, M_offset_7, 10, T[49]);
    c = II(c, d2, a, b, M_offset_14, 15, T[50]);
    b = II(b, c, d2, a, M_offset_5, 21, T[51]);
    a = II(a, b, c, d2, M_offset_12, 6, T[52]);
    d2 = II(d2, a, b, c, M_offset_3, 10, T[53]);
    c = II(c, d2, a, b, M_offset_10, 15, T[54]);
    b = II(b, c, d2, a, M_offset_1, 21, T[55]);
    a = II(a, b, c, d2, M_offset_8, 6, T[56]);
    d2 = II(d2, a, b, c, M_offset_15, 10, T[57]);
    c = II(c, d2, a, b, M_offset_6, 15, T[58]);
    b = II(b, c, d2, a, M_offset_13, 21, T[59]);
    a = II(a, b, c, d2, M_offset_4, 6, T[60]);
    d2 = II(d2, a, b, c, M_offset_11, 10, T[61]);
    c = II(c, d2, a, b, M_offset_2, 15, T[62]);
    b = II(b, c, d2, a, M_offset_9, 21, T[63]);
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d2 | 0;
  }
  /* eslint-ensable no-param-reassign */
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    const nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
    const nBitsTotalL = nBitsTotal;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
    data.sigBytes = (dataWords.length + 1) * 4;
    this._process();
    const hash = this._hash;
    const H2 = hash.words;
    for (let i = 0; i < 4; i += 1) {
      const H_i = H2[i];
      H2[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
    }
    return hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
__name(MD5Algo, "MD5Algo");
var MD5 = Hasher._createHelper(MD5Algo);
var HmacMD5 = Hasher._createHmacHelper(MD5Algo);

// node_modules/crypto-es/lib/evpkdf.js
var EvpKDFAlgo = class extends Base {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.EvpKDF.create();
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();
    this.cfg = Object.assign(
      new Base(),
      {
        keySize: 128 / 32,
        hasher: MD5Algo,
        iterations: 1
      },
      cfg
    );
  }
  /**
   * Derives a key from a password.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    let block;
    const { cfg } = this;
    const hasher = cfg.hasher.create();
    const derivedKey = WordArray.create();
    const derivedKeyWords = derivedKey.words;
    const { keySize, iterations } = cfg;
    while (derivedKeyWords.length < keySize) {
      if (block) {
        hasher.update(block);
      }
      block = hasher.update(password).finalize(salt);
      hasher.reset();
      for (let i = 1; i < iterations; i += 1) {
        block = hasher.finalize(block);
        hasher.reset();
      }
      derivedKey.concat(block);
    }
    derivedKey.sigBytes = keySize * 4;
    return derivedKey;
  }
};
__name(EvpKDFAlgo, "EvpKDFAlgo");
var EvpKDF = /* @__PURE__ */ __name((password, salt, cfg) => EvpKDFAlgo.create(cfg).compute(password, salt), "EvpKDF");

// node_modules/crypto-es/lib/cipher-core.js
var Cipher = class extends BufferedBlockAlgorithm {
  /**
   * Initializes a newly created cipher.
   *
   * @param {number} xformMode Either the encryption or decryption transormation mode constant.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.create(
   *       CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
   *     );
   */
  constructor(xformMode, key, cfg) {
    super();
    this.cfg = Object.assign(new Base(), cfg);
    this._xformMode = xformMode;
    this._key = key;
    this.reset();
  }
  /**
   * Creates this cipher in encryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
   */
  static createEncryptor(key, cfg) {
    return this.create(this._ENC_XFORM_MODE, key, cfg);
  }
  /**
   * Creates this cipher in decryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
   */
  static createDecryptor(key, cfg) {
    return this.create(this._DEC_XFORM_MODE, key, cfg);
  }
  /**
   * Creates shortcut functions to a cipher's object interface.
   *
   * @param {Cipher} cipher The cipher to create a helper for.
   *
   * @return {Object} An object with encrypt and decrypt shortcut functions.
   *
   * @static
   *
   * @example
   *
   *     const AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
   */
  static _createHelper(SubCipher) {
    const selectCipherStrategy = /* @__PURE__ */ __name((key) => {
      if (typeof key === "string") {
        return PasswordBasedCipher;
      }
      return SerializableCipher;
    }, "selectCipherStrategy");
    return {
      encrypt(message, key, cfg) {
        return selectCipherStrategy(key).encrypt(SubCipher, message, key, cfg);
      },
      decrypt(ciphertext, key, cfg) {
        return selectCipherStrategy(key).decrypt(SubCipher, ciphertext, key, cfg);
      }
    };
  }
  /**
   * Resets this cipher to its initial state.
   *
   * @example
   *
   *     cipher.reset();
   */
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  /**
   * Adds data to be encrypted or decrypted.
   *
   * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
   *
   * @return {WordArray} The data after processing.
   *
   * @example
   *
   *     const encrypted = cipher.process('data');
   *     const encrypted = cipher.process(wordArray);
   */
  process(dataUpdate) {
    this._append(dataUpdate);
    return this._process();
  }
  /**
   * Finalizes the encryption or decryption process.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
   *
   * @return {WordArray} The data after final processing.
   *
   * @example
   *
   *     const encrypted = cipher.finalize();
   *     const encrypted = cipher.finalize('data');
   *     const encrypted = cipher.finalize(wordArray);
   */
  finalize(dataUpdate) {
    if (dataUpdate) {
      this._append(dataUpdate);
    }
    const finalProcessedData = this._doFinalize();
    return finalProcessedData;
  }
};
__name(Cipher, "Cipher");
Cipher._ENC_XFORM_MODE = 1;
Cipher._DEC_XFORM_MODE = 2;
Cipher.keySize = 128 / 32;
Cipher.ivSize = 128 / 32;
var StreamCipher = class extends Cipher {
  constructor(...args) {
    super(...args);
    this.blockSize = 1;
  }
  _doFinalize() {
    const finalProcessedBlocks = this._process(true);
    return finalProcessedBlocks;
  }
};
__name(StreamCipher, "StreamCipher");
var BlockCipherMode = class extends Base {
  /**
   * Initializes a newly created mode.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
   */
  constructor(cipher, iv) {
    super();
    this._cipher = cipher;
    this._iv = iv;
  }
  /**
   * Creates this mode for encryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
   */
  static createEncryptor(cipher, iv) {
    return this.Encryptor.create(cipher, iv);
  }
  /**
   * Creates this mode for decryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
   */
  static createDecryptor(cipher, iv) {
    return this.Decryptor.create(cipher, iv);
  }
};
__name(BlockCipherMode, "BlockCipherMode");
function xorBlock(words, offset, blockSize) {
  const _words = words;
  let block;
  const iv = this._iv;
  if (iv) {
    block = iv;
    this._iv = void 0;
  } else {
    block = this._prevBlock;
  }
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= block[i];
  }
}
__name(xorBlock, "xorBlock");
var CBC = class extends BlockCipherMode {
};
__name(CBC, "CBC");
CBC.Encryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    xorBlock.call(this, words, offset, blockSize);
    cipher.encryptBlock(words, offset);
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
CBC.Decryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const thisBlock = words.slice(offset, offset + blockSize);
    cipher.decryptBlock(words, offset);
    xorBlock.call(this, words, offset, blockSize);
    this._prevBlock = thisBlock;
  }
};
var Pkcs7 = {
  /**
   * Pads data using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
   */
  pad(data, blockSize) {
    const blockSizeBytes = blockSize * 4;
    const nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
    const paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
    const paddingWords = [];
    for (let i = 0; i < nPaddingBytes; i += 4) {
      paddingWords.push(paddingWord);
    }
    const padding = WordArray.create(paddingWords, nPaddingBytes);
    data.concat(padding);
  },
  /**
   * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to unpad.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.unpad(wordArray);
   */
  unpad(data) {
    const _data = data;
    const nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 255;
    _data.sigBytes -= nPaddingBytes;
  }
};
var BlockCipher = class extends Cipher {
  constructor(xformMode, key, cfg) {
    super(xformMode, key, Object.assign(
      {
        mode: CBC,
        padding: Pkcs7
      },
      cfg
    ));
    this.blockSize = 128 / 32;
  }
  reset() {
    let modeCreator;
    super.reset.call(this);
    const { cfg } = this;
    const { iv, mode } = cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      modeCreator = mode.createEncryptor;
    } else {
      modeCreator = mode.createDecryptor;
      this._minBufferSize = 1;
    }
    this._mode = modeCreator.call(mode, this, iv && iv.words);
    this._mode.__creator = modeCreator;
  }
  _doProcessBlock(words, offset) {
    this._mode.processBlock(words, offset);
  }
  _doFinalize() {
    let finalProcessedBlocks;
    const { padding } = this.cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      padding.pad(this._data, this.blockSize);
      finalProcessedBlocks = this._process(true);
    } else {
      finalProcessedBlocks = this._process(true);
      padding.unpad(finalProcessedBlocks);
    }
    return finalProcessedBlocks;
  }
};
__name(BlockCipher, "BlockCipher");
var CipherParams = class extends Base {
  /**
   * Initializes a newly created cipher params object.
   *
   * @param {Object} cipherParams An object with any of the possible cipher parameters.
   *
   * @example
   *
   *     var cipherParams = CryptoJS.lib.CipherParams.create({
   *         ciphertext: ciphertextWordArray,
   *         key: keyWordArray,
   *         iv: ivWordArray,
   *         salt: saltWordArray,
   *         algorithm: CryptoJS.algo.AES,
   *         mode: CryptoJS.mode.CBC,
   *         padding: CryptoJS.pad.PKCS7,
   *         blockSize: 4,
   *         formatter: CryptoJS.format.OpenSSL
   *     });
   */
  constructor(cipherParams) {
    super();
    this.mixIn(cipherParams);
  }
  /**
   * Converts this cipher params object to a string.
   *
   * @param {Format} formatter (Optional) The formatting strategy to use.
   *
   * @return {string} The stringified cipher params.
   *
   * @throws Error If neither the formatter nor the default formatter is set.
   *
   * @example
   *
   *     var string = cipherParams + '';
   *     var string = cipherParams.toString();
   *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
   */
  toString(formatter) {
    return (formatter || this.formatter).stringify(this);
  }
};
__name(CipherParams, "CipherParams");
var OpenSSLFormatter = {
  /**
   * Converts a cipher params object to an OpenSSL-compatible string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The OpenSSL-compatible string.
   *
   * @static
   *
   * @example
   *
   *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
   */
  stringify(cipherParams) {
    let wordArray;
    const { ciphertext, salt } = cipherParams;
    if (salt) {
      wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
    } else {
      wordArray = ciphertext;
    }
    return wordArray.toString(Base64);
  },
  /**
   * Converts an OpenSSL-compatible string to a cipher params object.
   *
   * @param {string} openSSLStr The OpenSSL-compatible string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
   */
  parse(openSSLStr) {
    let salt;
    const ciphertext = Base64.parse(openSSLStr);
    const ciphertextWords = ciphertext.words;
    if (ciphertextWords[0] === 1398893684 && ciphertextWords[1] === 1701076831) {
      salt = WordArray.create(ciphertextWords.slice(2, 4));
      ciphertextWords.splice(0, 4);
      ciphertext.sigBytes -= 16;
    }
    return CipherParams.create({ ciphertext, salt });
  }
};
var SerializableCipher = class extends Base {
  /**
   * Encrypts a message.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key);
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, key, cfg) {
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    const encryptor = cipher.createEncryptor(key, _cfg);
    const ciphertext = encryptor.finalize(message);
    const cipherCfg = encryptor.cfg;
    return CipherParams.create({
      ciphertext,
      key,
      iv: cipherCfg.iv,
      algorithm: cipher,
      mode: cipherCfg.mode,
      padding: cipherCfg.padding,
      blockSize: encryptor.blockSize,
      formatter: _cfg.format
    });
  }
  /**
   * Decrypts serialized ciphertext.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, key, cfg) {
    let _ciphertext = ciphertext;
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    _ciphertext = this._parse(_ciphertext, _cfg.format);
    const plaintext = cipher.createDecryptor(key, _cfg).finalize(_ciphertext.ciphertext);
    return plaintext;
  }
  /**
   * Converts serialized ciphertext to CipherParams,
   * else assumed CipherParams already and returns ciphertext unchanged.
   *
   * @param {CipherParams|string} ciphertext The ciphertext.
   * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
   *
   * @return {CipherParams} The unserialized ciphertext.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       ._parse(ciphertextStringOrParams, format);
   */
  static _parse(ciphertext, format) {
    if (typeof ciphertext === "string") {
      return format.parse(ciphertext, this);
    }
    return ciphertext;
  }
};
__name(SerializableCipher, "SerializableCipher");
SerializableCipher.cfg = Object.assign(
  new Base(),
  { format: OpenSSLFormatter }
);
var OpenSSLKdf = {
  /**
   * Derives a key and IV from a password.
   *
   * @param {string} password The password to derive from.
   * @param {number} keySize The size in words of the key to generate.
   * @param {number} ivSize The size in words of the IV to generate.
   * @param {WordArray|string} salt
   *     (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
   *
   * @return {CipherParams} A cipher params object with the key, IV, and salt.
   *
   * @static
   *
   * @example
   *
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
   */
  execute(password, keySize, ivSize, salt) {
    let _salt = salt;
    if (!_salt) {
      _salt = WordArray.random(64 / 8);
    }
    const key = EvpKDFAlgo.create({ keySize: keySize + ivSize }).compute(password, _salt);
    const iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    key.sigBytes = keySize * 4;
    return CipherParams.create({ key, iv, salt: _salt });
  }
};
var PasswordBasedCipher = class extends SerializableCipher {
  /**
   * Encrypts a message using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password');
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, password, cfg) {
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
    _cfg.iv = derivedParams.iv;
    const ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, _cfg);
    ciphertext.mixIn(derivedParams);
    return ciphertext;
  }
  /**
   * Decrypts serialized ciphertext using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, password, cfg) {
    let _ciphertext = ciphertext;
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    _ciphertext = this._parse(_ciphertext, _cfg.format);
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, _ciphertext.salt);
    _cfg.iv = derivedParams.iv;
    const plaintext = SerializableCipher.decrypt.call(this, cipher, _ciphertext, derivedParams.key, _cfg);
    return plaintext;
  }
};
__name(PasswordBasedCipher, "PasswordBasedCipher");
PasswordBasedCipher.cfg = Object.assign(SerializableCipher.cfg, { kdf: OpenSSLKdf });

// node_modules/crypto-es/lib/enc-utf16.js
init_checked_fetch();
var swapEndian = /* @__PURE__ */ __name((word) => word << 8 & 4278255360 | word >>> 8 & 16711935, "swapEndian");
var Utf16BE = {
  /**
   * Converts a word array to a UTF-16 BE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 BE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
      utf16Chars.push(String.fromCharCode(codePoint));
    }
    return utf16Chars.join("");
  },
  /**
   * Converts a UTF-16 BE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 BE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16.parse(utf16String);
   */
  parse(utf16Str) {
    const utf16StrLength = utf16Str.length;
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
    }
    return WordArray.create(words, utf16StrLength * 2);
  }
};
var Utf16 = Utf16BE;
var Utf16LE = {
  /**
   * Converts a word array to a UTF-16 LE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 LE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
      utf16Chars.push(String.fromCharCode(codePoint));
    }
    return utf16Chars.join("");
  },
  /**
   * Converts a UTF-16 LE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 LE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
   */
  parse(utf16Str) {
    const utf16StrLength = utf16Str.length;
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
    }
    return WordArray.create(words, utf16StrLength * 2);
  }
};

// node_modules/crypto-es/lib/hmac.js
init_checked_fetch();

// node_modules/crypto-es/lib/sha1.js
init_checked_fetch();
var W = [];
var SHA1Algo = class extends Hasher {
  _doReset() {
    this._hash = new WordArray([
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d2 = H2[3];
    let e = H2[4];
    for (let i = 0; i < 80; i += 1) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const n2 = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
        W[i] = n2 << 1 | n2 >>> 31;
      }
      let t = (a << 5 | a >>> 27) + e + W[i];
      if (i < 20) {
        t += (b & c | ~b & d2) + 1518500249;
      } else if (i < 40) {
        t += (b ^ c ^ d2) + 1859775393;
      } else if (i < 60) {
        t += (b & c | b & d2 | c & d2) - 1894007588;
      } else {
        t += (b ^ c ^ d2) - 899497514;
      }
      e = d2;
      d2 = c;
      c = b << 30 | b >>> 2;
      b = a;
      a = t;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d2 | 0;
    H2[4] = H2[4] + e | 0;
  }
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;
    this._process();
    return this._hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
__name(SHA1Algo, "SHA1Algo");
var SHA1 = Hasher._createHelper(SHA1Algo);
var HmacSHA1 = Hasher._createHmacHelper(SHA1Algo);

// node_modules/crypto-es/lib/sha224.js
init_checked_fetch();

// node_modules/crypto-es/lib/sha256.js
init_checked_fetch();
var H = [];
var K = [];
var isPrime = /* @__PURE__ */ __name((n2) => {
  const sqrtN = Math.sqrt(n2);
  for (let factor = 2; factor <= sqrtN; factor += 1) {
    if (!(n2 % factor)) {
      return false;
    }
  }
  return true;
}, "isPrime");
var getFractionalBits = /* @__PURE__ */ __name((n2) => (n2 - (n2 | 0)) * 4294967296 | 0, "getFractionalBits");
var n = 2;
var nPrime = 0;
while (nPrime < 64) {
  if (isPrime(n)) {
    if (nPrime < 8) {
      H[nPrime] = getFractionalBits(n ** (1 / 2));
    }
    K[nPrime] = getFractionalBits(n ** (1 / 3));
    nPrime += 1;
  }
  n += 1;
}
var W2 = [];
var SHA256Algo = class extends Hasher {
  _doReset() {
    this._hash = new WordArray(H.slice(0));
  }
  _doProcessBlock(M, offset) {
    const _H = this._hash.words;
    let a = _H[0];
    let b = _H[1];
    let c = _H[2];
    let d2 = _H[3];
    let e = _H[4];
    let f = _H[5];
    let g = _H[6];
    let h = _H[7];
    for (let i = 0; i < 64; i += 1) {
      if (i < 16) {
        W2[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W2[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W2[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W2[i] = gamma0 + W2[i - 7] + gamma1 + W2[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W2[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d2 + t1 | 0;
      d2 = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    _H[0] = _H[0] + a | 0;
    _H[1] = _H[1] + b | 0;
    _H[2] = _H[2] + c | 0;
    _H[3] = _H[3] + d2 | 0;
    _H[4] = _H[4] + e | 0;
    _H[5] = _H[5] + f | 0;
    _H[6] = _H[6] + g | 0;
    _H[7] = _H[7] + h | 0;
  }
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;
    this._process();
    return this._hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
__name(SHA256Algo, "SHA256Algo");
var SHA256 = Hasher._createHelper(SHA256Algo);
var HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);

// node_modules/crypto-es/lib/sha224.js
var SHA224Algo = class extends SHA256Algo {
  _doReset() {
    this._hash = new WordArray([
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ]);
  }
  _doFinalize() {
    const hash = super._doFinalize.call(this);
    hash.sigBytes -= 4;
    return hash;
  }
};
__name(SHA224Algo, "SHA224Algo");
var SHA224 = SHA256Algo._createHelper(SHA224Algo);
var HmacSHA224 = SHA256Algo._createHmacHelper(SHA224Algo);

// node_modules/crypto-es/lib/sha384.js
init_checked_fetch();

// node_modules/crypto-es/lib/sha512.js
init_checked_fetch();
var K2 = [
  new X64Word(1116352408, 3609767458),
  new X64Word(1899447441, 602891725),
  new X64Word(3049323471, 3964484399),
  new X64Word(3921009573, 2173295548),
  new X64Word(961987163, 4081628472),
  new X64Word(1508970993, 3053834265),
  new X64Word(2453635748, 2937671579),
  new X64Word(2870763221, 3664609560),
  new X64Word(3624381080, 2734883394),
  new X64Word(310598401, 1164996542),
  new X64Word(607225278, 1323610764),
  new X64Word(1426881987, 3590304994),
  new X64Word(1925078388, 4068182383),
  new X64Word(2162078206, 991336113),
  new X64Word(2614888103, 633803317),
  new X64Word(3248222580, 3479774868),
  new X64Word(3835390401, 2666613458),
  new X64Word(4022224774, 944711139),
  new X64Word(264347078, 2341262773),
  new X64Word(604807628, 2007800933),
  new X64Word(770255983, 1495990901),
  new X64Word(1249150122, 1856431235),
  new X64Word(1555081692, 3175218132),
  new X64Word(1996064986, 2198950837),
  new X64Word(2554220882, 3999719339),
  new X64Word(2821834349, 766784016),
  new X64Word(2952996808, 2566594879),
  new X64Word(3210313671, 3203337956),
  new X64Word(3336571891, 1034457026),
  new X64Word(3584528711, 2466948901),
  new X64Word(113926993, 3758326383),
  new X64Word(338241895, 168717936),
  new X64Word(666307205, 1188179964),
  new X64Word(773529912, 1546045734),
  new X64Word(1294757372, 1522805485),
  new X64Word(1396182291, 2643833823),
  new X64Word(1695183700, 2343527390),
  new X64Word(1986661051, 1014477480),
  new X64Word(2177026350, 1206759142),
  new X64Word(2456956037, 344077627),
  new X64Word(2730485921, 1290863460),
  new X64Word(2820302411, 3158454273),
  new X64Word(3259730800, 3505952657),
  new X64Word(3345764771, 106217008),
  new X64Word(3516065817, 3606008344),
  new X64Word(3600352804, 1432725776),
  new X64Word(4094571909, 1467031594),
  new X64Word(275423344, 851169720),
  new X64Word(430227734, 3100823752),
  new X64Word(506948616, 1363258195),
  new X64Word(659060556, 3750685593),
  new X64Word(883997877, 3785050280),
  new X64Word(958139571, 3318307427),
  new X64Word(1322822218, 3812723403),
  new X64Word(1537002063, 2003034995),
  new X64Word(1747873779, 3602036899),
  new X64Word(1955562222, 1575990012),
  new X64Word(2024104815, 1125592928),
  new X64Word(2227730452, 2716904306),
  new X64Word(2361852424, 442776044),
  new X64Word(2428436474, 593698344),
  new X64Word(2756734187, 3733110249),
  new X64Word(3204031479, 2999351573),
  new X64Word(3329325298, 3815920427),
  new X64Word(3391569614, 3928383900),
  new X64Word(3515267271, 566280711),
  new X64Word(3940187606, 3454069534),
  new X64Word(4118630271, 4000239992),
  new X64Word(116418474, 1914138554),
  new X64Word(174292421, 2731055270),
  new X64Word(289380356, 3203993006),
  new X64Word(460393269, 320620315),
  new X64Word(685471733, 587496836),
  new X64Word(852142971, 1086792851),
  new X64Word(1017036298, 365543100),
  new X64Word(1126000580, 2618297676),
  new X64Word(1288033470, 3409855158),
  new X64Word(1501505948, 4234509866),
  new X64Word(1607167915, 987167468),
  new X64Word(1816402316, 1246189591)
];
var W3 = [];
for (let i = 0; i < 80; i += 1) {
  W3[i] = new X64Word();
}
var SHA512Algo = class extends Hasher {
  constructor() {
    super();
    this.blockSize = 1024 / 32;
  }
  _doReset() {
    this._hash = new X64WordArray([
      new X64Word(1779033703, 4089235720),
      new X64Word(3144134277, 2227873595),
      new X64Word(1013904242, 4271175723),
      new X64Word(2773480762, 1595750129),
      new X64Word(1359893119, 2917565137),
      new X64Word(2600822924, 725511199),
      new X64Word(528734635, 4215389547),
      new X64Word(1541459225, 327033209)
    ]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    const H0 = H2[0];
    const H1 = H2[1];
    const H22 = H2[2];
    const H3 = H2[3];
    const H4 = H2[4];
    const H5 = H2[5];
    const H6 = H2[6];
    const H7 = H2[7];
    const H0h = H0.high;
    let H0l = H0.low;
    const H1h = H1.high;
    let H1l = H1.low;
    const H2h = H22.high;
    let H2l = H22.low;
    const H3h = H3.high;
    let H3l = H3.low;
    const H4h = H4.high;
    let H4l = H4.low;
    const H5h = H5.high;
    let H5l = H5.low;
    const H6h = H6.high;
    let H6l = H6.low;
    const H7h = H7.high;
    let H7l = H7.low;
    let ah = H0h;
    let al = H0l;
    let bh = H1h;
    let bl = H1l;
    let ch = H2h;
    let cl = H2l;
    let dh = H3h;
    let dl = H3l;
    let eh = H4h;
    let el = H4l;
    let fh = H5h;
    let fl = H5l;
    let gh = H6h;
    let gl = H6l;
    let hh = H7h;
    let hl = H7l;
    for (let i = 0; i < 80; i += 1) {
      let Wil;
      let Wih;
      const Wi = W3[i];
      if (i < 16) {
        Wi.high = M[offset + i * 2] | 0;
        Wih = Wi.high;
        Wi.low = M[offset + i * 2 + 1] | 0;
        Wil = Wi.low;
      } else {
        const gamma0x = W3[i - 15];
        const gamma0xh = gamma0x.high;
        const gamma0xl = gamma0x.low;
        const gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
        const gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
        const gamma1x = W3[i - 2];
        const gamma1xh = gamma1x.high;
        const gamma1xl = gamma1x.low;
        const gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
        const gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
        const Wi7 = W3[i - 7];
        const Wi7h = Wi7.high;
        const Wi7l = Wi7.low;
        const Wi16 = W3[i - 16];
        const Wi16h = Wi16.high;
        const Wi16l = Wi16.low;
        Wil = gamma0l + Wi7l;
        Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
        Wil += gamma1l;
        Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
        Wil += Wi16l;
        Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
        Wi.high = Wih;
        Wi.low = Wil;
      }
      const chh = eh & fh ^ ~eh & gh;
      const chl = el & fl ^ ~el & gl;
      const majh = ah & bh ^ ah & ch ^ bh & ch;
      const majl = al & bl ^ al & cl ^ bl & cl;
      const sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
      const sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
      const sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
      const sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
      const Ki = K2[i];
      const Kih = Ki.high;
      const Kil = Ki.low;
      let t1l = hl + sigma1l;
      let t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
      t1l += chl;
      t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
      t1l += Kil;
      t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
      t1l += Wil;
      t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
      const t2l = sigma0l + majl;
      const t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = dl + t1l | 0;
      eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = t1l + t2l | 0;
      ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
    }
    H0.low = H0l + al;
    H0l = H0.low;
    H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
    H1.low = H1l + bl;
    H1l = H1.low;
    H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
    H22.low = H2l + cl;
    H2l = H22.low;
    H22.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
    H3.low = H3l + dl;
    H3l = H3.low;
    H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
    H4.low = H4l + el;
    H4l = H4.low;
    H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
    H5.low = H5l + fl;
    H5l = H5.low;
    H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
    H6.low = H6l + gl;
    H6l = H6.low;
    H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
    H7.low = H7l + hl;
    H7l = H7.low;
    H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
  }
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
    dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;
    this._process();
    const hash = this._hash.toX32();
    return hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
__name(SHA512Algo, "SHA512Algo");
var SHA512 = Hasher._createHelper(SHA512Algo);
var HmacSHA512 = Hasher._createHmacHelper(SHA512Algo);

// node_modules/crypto-es/lib/sha384.js
var SHA384Algo = class extends SHA512Algo {
  _doReset() {
    this._hash = new X64WordArray([
      new X64Word(3418070365, 3238371032),
      new X64Word(1654270250, 914150663),
      new X64Word(2438529370, 812702999),
      new X64Word(355462360, 4144912697),
      new X64Word(1731405415, 4290775857),
      new X64Word(2394180231, 1750603025),
      new X64Word(3675008525, 1694076839),
      new X64Word(1203062813, 3204075428)
    ]);
  }
  _doFinalize() {
    const hash = super._doFinalize.call(this);
    hash.sigBytes -= 16;
    return hash;
  }
};
__name(SHA384Algo, "SHA384Algo");
var SHA384 = SHA512Algo._createHelper(SHA384Algo);
var HmacSHA384 = SHA512Algo._createHmacHelper(SHA384Algo);

// node_modules/crypto-es/lib/sha3.js
init_checked_fetch();
var RHO_OFFSETS = [];
var PI_INDEXES = [];
var ROUND_CONSTANTS = [];
var _x = 1;
var _y = 0;
for (let t = 0; t < 24; t += 1) {
  RHO_OFFSETS[_x + 5 * _y] = (t + 1) * (t + 2) / 2 % 64;
  const newX = _y % 5;
  const newY = (2 * _x + 3 * _y) % 5;
  _x = newX;
  _y = newY;
}
for (let x2 = 0; x2 < 5; x2 += 1) {
  for (let y = 0; y < 5; y += 1) {
    PI_INDEXES[x2 + 5 * y] = y + (2 * x2 + 3 * y) % 5 * 5;
  }
}
var LFSR = 1;
for (let i = 0; i < 24; i += 1) {
  let roundConstantMsw = 0;
  let roundConstantLsw = 0;
  for (let j = 0; j < 7; j += 1) {
    if (LFSR & 1) {
      const bitPosition = (1 << j) - 1;
      if (bitPosition < 32) {
        roundConstantLsw ^= 1 << bitPosition;
      } else {
        roundConstantMsw ^= 1 << bitPosition - 32;
      }
    }
    if (LFSR & 128) {
      LFSR = LFSR << 1 ^ 113;
    } else {
      LFSR <<= 1;
    }
  }
  ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
}
var T2 = [];
for (let i = 0; i < 25; i += 1) {
  T2[i] = X64Word.create();
}
var SHA3Algo = class extends Hasher {
  constructor(cfg) {
    super(Object.assign(
      { outputLength: 512 },
      cfg
    ));
  }
  _doReset() {
    this._state = [];
    const state = this._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = new X64Word();
    }
    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  }
  _doProcessBlock(M, offset) {
    const state = this._state;
    const nBlockSizeLanes = this.blockSize / 2;
    for (let i = 0; i < nBlockSizeLanes; i += 1) {
      let M2i = M[offset + 2 * i];
      let M2i1 = M[offset + 2 * i + 1];
      M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
      M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
      const lane = state[i];
      lane.high ^= M2i1;
      lane.low ^= M2i;
    }
    for (let round = 0; round < 24; round += 1) {
      for (let x2 = 0; x2 < 5; x2 += 1) {
        let tMsw = 0;
        let tLsw = 0;
        for (let y = 0; y < 5; y += 1) {
          const lane2 = state[x2 + 5 * y];
          tMsw ^= lane2.high;
          tLsw ^= lane2.low;
        }
        const Tx = T2[x2];
        Tx.high = tMsw;
        Tx.low = tLsw;
      }
      for (let x2 = 0; x2 < 5; x2 += 1) {
        const Tx4 = T2[(x2 + 4) % 5];
        const Tx1 = T2[(x2 + 1) % 5];
        const Tx1Msw = Tx1.high;
        const Tx1Lsw = Tx1.low;
        const tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
        const tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
        for (let y = 0; y < 5; y += 1) {
          const lane2 = state[x2 + 5 * y];
          lane2.high ^= tMsw;
          lane2.low ^= tLsw;
        }
      }
      for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
        let tMsw;
        let tLsw;
        const lane2 = state[laneIndex];
        const laneMsw = lane2.high;
        const laneLsw = lane2.low;
        const rhoOffset = RHO_OFFSETS[laneIndex];
        if (rhoOffset < 32) {
          tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
          tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
        } else {
          tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
          tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
        }
        const TPiLane = T2[PI_INDEXES[laneIndex]];
        TPiLane.high = tMsw;
        TPiLane.low = tLsw;
      }
      const T0 = T2[0];
      const state0 = state[0];
      T0.high = state0.high;
      T0.low = state0.low;
      for (let x2 = 0; x2 < 5; x2 += 1) {
        for (let y = 0; y < 5; y += 1) {
          const laneIndex = x2 + 5 * y;
          const lane2 = state[laneIndex];
          const TLane = T2[laneIndex];
          const Tx1Lane = T2[(x2 + 1) % 5 + 5 * y];
          const Tx2Lane = T2[(x2 + 2) % 5 + 5 * y];
          lane2.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
          lane2.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
        }
      }
      const lane = state[0];
      const roundConstant = ROUND_CONSTANTS[round];
      lane.high ^= roundConstant.high;
      lane.low ^= roundConstant.low;
    }
  }
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsLeft = data.sigBytes * 8;
    const blockSizeBits = this.blockSize * 32;
    dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
    dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
    data.sigBytes = dataWords.length * 4;
    this._process();
    const state = this._state;
    const outputLengthBytes = this.cfg.outputLength / 8;
    const outputLengthLanes = outputLengthBytes / 8;
    const hashWords = [];
    for (let i = 0; i < outputLengthLanes; i += 1) {
      const lane = state[i];
      let laneMsw = lane.high;
      let laneLsw = lane.low;
      laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
      laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
      hashWords.push(laneLsw);
      hashWords.push(laneMsw);
    }
    return new WordArray(hashWords, outputLengthBytes);
  }
  clone() {
    const clone = super.clone.call(this);
    clone._state = this._state.slice(0);
    const state = clone._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = state[i].clone();
    }
    return clone;
  }
};
__name(SHA3Algo, "SHA3Algo");
var SHA3 = Hasher._createHelper(SHA3Algo);
var HmacSHA3 = Hasher._createHmacHelper(SHA3Algo);

// node_modules/crypto-es/lib/ripemd160.js
init_checked_fetch();
var _zl = WordArray.create([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
]);
var _zr = WordArray.create([
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
]);
var _sl = WordArray.create([
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
]);
var _sr = WordArray.create([
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
]);
var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
var f1 = /* @__PURE__ */ __name((x2, y, z) => x2 ^ y ^ z, "f1");
var f2 = /* @__PURE__ */ __name((x2, y, z) => x2 & y | ~x2 & z, "f2");
var f3 = /* @__PURE__ */ __name((x2, y, z) => (x2 | ~y) ^ z, "f3");
var f4 = /* @__PURE__ */ __name((x2, y, z) => x2 & z | y & ~z, "f4");
var f5 = /* @__PURE__ */ __name((x2, y, z) => x2 ^ (y | ~z), "f5");
var rotl = /* @__PURE__ */ __name((x2, n2) => x2 << n2 | x2 >>> 32 - n2, "rotl");
var RIPEMD160Algo = class extends Hasher {
  _doReset() {
    this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    for (let i = 0; i < 16; i += 1) {
      const offset_i = offset + i;
      const M_offset_i = _M[offset_i];
      _M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
    }
    const H2 = this._hash.words;
    const hl = _hl.words;
    const hr = _hr.words;
    const zl = _zl.words;
    const zr = _zr.words;
    const sl = _sl.words;
    const sr = _sr.words;
    let al = H2[0];
    let bl = H2[1];
    let cl = H2[2];
    let dl = H2[3];
    let el = H2[4];
    let ar = H2[0];
    let br = H2[1];
    let cr = H2[2];
    let dr = H2[3];
    let er = H2[4];
    let t;
    for (let i = 0; i < 80; i += 1) {
      t = al + _M[offset + zl[i]] | 0;
      if (i < 16) {
        t += f1(bl, cl, dl) + hl[0];
      } else if (i < 32) {
        t += f2(bl, cl, dl) + hl[1];
      } else if (i < 48) {
        t += f3(bl, cl, dl) + hl[2];
      } else if (i < 64) {
        t += f4(bl, cl, dl) + hl[3];
      } else {
        t += f5(bl, cl, dl) + hl[4];
      }
      t |= 0;
      t = rotl(t, sl[i]);
      t = t + el | 0;
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = t;
      t = ar + _M[offset + zr[i]] | 0;
      if (i < 16) {
        t += f5(br, cr, dr) + hr[0];
      } else if (i < 32) {
        t += f4(br, cr, dr) + hr[1];
      } else if (i < 48) {
        t += f3(br, cr, dr) + hr[2];
      } else if (i < 64) {
        t += f2(br, cr, dr) + hr[3];
      } else {
        t += f1(br, cr, dr) + hr[4];
      }
      t |= 0;
      t = rotl(t, sr[i]);
      t = t + er | 0;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = t;
    }
    t = H2[1] + cl + dr | 0;
    H2[1] = H2[2] + dl + er | 0;
    H2[2] = H2[3] + el + ar | 0;
    H2[3] = H2[4] + al + br | 0;
    H2[4] = H2[0] + bl + cr | 0;
    H2[0] = t;
  }
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
    data.sigBytes = (dataWords.length + 1) * 4;
    this._process();
    const hash = this._hash;
    const H2 = hash.words;
    for (let i = 0; i < 5; i += 1) {
      const H_i = H2[i];
      H2[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
    }
    return hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
__name(RIPEMD160Algo, "RIPEMD160Algo");
var RIPEMD160 = Hasher._createHelper(RIPEMD160Algo);
var HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160Algo);

// node_modules/crypto-es/lib/pbkdf2.js
init_checked_fetch();
var PBKDF2Algo = class extends Base {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.PBKDF2.create();
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();
    this.cfg = Object.assign(
      new Base(),
      {
        keySize: 128 / 32,
        hasher: SHA1Algo,
        iterations: 1
      },
      cfg
    );
  }
  /**
   * Computes the Password-Based Key Derivation Function 2.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    const { cfg } = this;
    const hmac = HMAC.create(cfg.hasher, password);
    const derivedKey = WordArray.create();
    const blockIndex = WordArray.create([1]);
    const derivedKeyWords = derivedKey.words;
    const blockIndexWords = blockIndex.words;
    const { keySize, iterations } = cfg;
    while (derivedKeyWords.length < keySize) {
      const block = hmac.update(salt).finalize(blockIndex);
      hmac.reset();
      const blockWords = block.words;
      const blockWordsLength = blockWords.length;
      let intermediate = block;
      for (let i = 1; i < iterations; i += 1) {
        intermediate = hmac.finalize(intermediate);
        hmac.reset();
        const intermediateWords = intermediate.words;
        for (let j = 0; j < blockWordsLength; j += 1) {
          blockWords[j] ^= intermediateWords[j];
        }
      }
      derivedKey.concat(block);
      blockIndexWords[0] += 1;
    }
    derivedKey.sigBytes = keySize * 4;
    return derivedKey;
  }
};
__name(PBKDF2Algo, "PBKDF2Algo");
var PBKDF2 = /* @__PURE__ */ __name((password, salt, cfg) => PBKDF2Algo.create(cfg).compute(password, salt), "PBKDF2");

// node_modules/crypto-es/lib/aes.js
init_checked_fetch();
var _SBOX = [];
var INV_SBOX = [];
var _SUB_MIX_0 = [];
var _SUB_MIX_1 = [];
var _SUB_MIX_2 = [];
var _SUB_MIX_3 = [];
var INV_SUB_MIX_0 = [];
var INV_SUB_MIX_1 = [];
var INV_SUB_MIX_2 = [];
var INV_SUB_MIX_3 = [];
var d = [];
for (let i = 0; i < 256; i += 1) {
  if (i < 128) {
    d[i] = i << 1;
  } else {
    d[i] = i << 1 ^ 283;
  }
}
var x = 0;
var xi = 0;
for (let i = 0; i < 256; i += 1) {
  let sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
  sx = sx >>> 8 ^ sx & 255 ^ 99;
  _SBOX[x] = sx;
  INV_SBOX[sx] = x;
  const x2 = d[x];
  const x4 = d[x2];
  const x8 = d[x4];
  let t = d[sx] * 257 ^ sx * 16843008;
  _SUB_MIX_0[x] = t << 24 | t >>> 8;
  _SUB_MIX_1[x] = t << 16 | t >>> 16;
  _SUB_MIX_2[x] = t << 8 | t >>> 24;
  _SUB_MIX_3[x] = t;
  t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
  INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
  INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
  INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
  INV_SUB_MIX_3[sx] = t;
  if (!x) {
    xi = 1;
    x = xi;
  } else {
    x = x2 ^ d[d[d[x8 ^ x2]]];
    xi ^= d[d[xi]];
  }
}
var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var AESAlgo = class extends BlockCipher {
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) {
      return;
    }
    this._keyPriorReset = this._key;
    const key = this._keyPriorReset;
    const keyWords = key.words;
    const keySize = key.sigBytes / 4;
    this._nRounds = keySize + 6;
    const nRounds = this._nRounds;
    const ksRows = (nRounds + 1) * 4;
    this._keySchedule = [];
    const keySchedule = this._keySchedule;
    for (let ksRow = 0; ksRow < ksRows; ksRow += 1) {
      if (ksRow < keySize) {
        keySchedule[ksRow] = keyWords[ksRow];
      } else {
        t = keySchedule[ksRow - 1];
        if (!(ksRow % keySize)) {
          t = t << 8 | t >>> 24;
          t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 255] << 16 | _SBOX[t >>> 8 & 255] << 8 | _SBOX[t & 255];
          t ^= RCON[ksRow / keySize | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 255] << 16 | _SBOX[t >>> 8 & 255] << 8 | _SBOX[t & 255];
        }
        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
      }
    }
    this._invKeySchedule = [];
    const invKeySchedule = this._invKeySchedule;
    for (let invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
      const ksRow = ksRows - invKsRow;
      if (invKsRow % 4) {
        t = keySchedule[ksRow];
      } else {
        t = keySchedule[ksRow - 4];
      }
      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule[invKsRow] = t;
      } else {
        invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]] ^ INV_SUB_MIX_1[_SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[_SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[_SBOX[t & 255]];
      }
    }
  }
  encryptBlock(M, offset) {
    this._doCryptBlock(
      M,
      offset,
      this._keySchedule,
      _SUB_MIX_0,
      _SUB_MIX_1,
      _SUB_MIX_2,
      _SUB_MIX_3,
      _SBOX
    );
  }
  decryptBlock(M, offset) {
    const _M = M;
    let t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
    this._doCryptBlock(
      _M,
      offset,
      this._invKeySchedule,
      INV_SUB_MIX_0,
      INV_SUB_MIX_1,
      INV_SUB_MIX_2,
      INV_SUB_MIX_3,
      INV_SBOX
    );
    t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
  }
  _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    const _M = M;
    const nRounds = this._nRounds;
    let s0 = _M[offset] ^ keySchedule[0];
    let s1 = _M[offset + 1] ^ keySchedule[1];
    let s2 = _M[offset + 2] ^ keySchedule[2];
    let s3 = _M[offset + 3] ^ keySchedule[3];
    let ksRow = 4;
    for (let round = 1; round < nRounds; round += 1) {
      const t02 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t12 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t22 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t32 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      s0 = t02;
      s1 = t12;
      s2 = t22;
      s3 = t32;
    }
    const t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    _M[offset] = t0;
    _M[offset + 1] = t1;
    _M[offset + 2] = t2;
    _M[offset + 3] = t3;
  }
};
__name(AESAlgo, "AESAlgo");
AESAlgo.keySize = 256 / 32;
var AES = BlockCipher._createHelper(AESAlgo);

// node_modules/crypto-es/lib/tripledes.js
init_checked_fetch();
var PC1 = [
  57,
  49,
  41,
  33,
  25,
  17,
  9,
  1,
  58,
  50,
  42,
  34,
  26,
  18,
  10,
  2,
  59,
  51,
  43,
  35,
  27,
  19,
  11,
  3,
  60,
  52,
  44,
  36,
  63,
  55,
  47,
  39,
  31,
  23,
  15,
  7,
  62,
  54,
  46,
  38,
  30,
  22,
  14,
  6,
  61,
  53,
  45,
  37,
  29,
  21,
  13,
  5,
  28,
  20,
  12,
  4
];
var PC2 = [
  14,
  17,
  11,
  24,
  1,
  5,
  3,
  28,
  15,
  6,
  21,
  10,
  23,
  19,
  12,
  4,
  26,
  8,
  16,
  7,
  27,
  20,
  13,
  2,
  41,
  52,
  31,
  37,
  47,
  55,
  30,
  40,
  51,
  45,
  33,
  48,
  44,
  49,
  39,
  56,
  34,
  53,
  46,
  42,
  50,
  36,
  29,
  32
];
var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
var SBOX_P = [
  {
    0: 8421888,
    268435456: 32768,
    536870912: 8421378,
    805306368: 2,
    1073741824: 512,
    1342177280: 8421890,
    1610612736: 8389122,
    1879048192: 8388608,
    2147483648: 514,
    2415919104: 8389120,
    2684354560: 33280,
    2952790016: 8421376,
    3221225472: 32770,
    3489660928: 8388610,
    3758096384: 0,
    4026531840: 33282,
    134217728: 0,
    402653184: 8421890,
    671088640: 33282,
    939524096: 32768,
    1207959552: 8421888,
    1476395008: 512,
    1744830464: 8421378,
    2013265920: 2,
    2281701376: 8389120,
    2550136832: 33280,
    2818572288: 8421376,
    3087007744: 8389122,
    3355443200: 8388610,
    3623878656: 32770,
    3892314112: 514,
    4160749568: 8388608,
    1: 32768,
    268435457: 2,
    536870913: 8421888,
    805306369: 8388608,
    1073741825: 8421378,
    1342177281: 33280,
    1610612737: 512,
    1879048193: 8389122,
    2147483649: 8421890,
    2415919105: 8421376,
    2684354561: 8388610,
    2952790017: 33282,
    3221225473: 514,
    3489660929: 8389120,
    3758096385: 32770,
    4026531841: 0,
    134217729: 8421890,
    402653185: 8421376,
    671088641: 8388608,
    939524097: 512,
    1207959553: 32768,
    1476395009: 8388610,
    1744830465: 2,
    2013265921: 33282,
    2281701377: 32770,
    2550136833: 8389122,
    2818572289: 514,
    3087007745: 8421888,
    3355443201: 8389120,
    3623878657: 0,
    3892314113: 33280,
    4160749569: 8421378
  },
  {
    0: 1074282512,
    16777216: 16384,
    33554432: 524288,
    50331648: 1074266128,
    67108864: 1073741840,
    83886080: 1074282496,
    100663296: 1073758208,
    117440512: 16,
    134217728: 540672,
    150994944: 1073758224,
    167772160: 1073741824,
    184549376: 540688,
    201326592: 524304,
    218103808: 0,
    234881024: 16400,
    251658240: 1074266112,
    8388608: 1073758208,
    25165824: 540688,
    41943040: 16,
    58720256: 1073758224,
    75497472: 1074282512,
    92274688: 1073741824,
    109051904: 524288,
    125829120: 1074266128,
    142606336: 524304,
    159383552: 0,
    176160768: 16384,
    192937984: 1074266112,
    209715200: 1073741840,
    226492416: 540672,
    243269632: 1074282496,
    260046848: 16400,
    268435456: 0,
    285212672: 1074266128,
    301989888: 1073758224,
    318767104: 1074282496,
    335544320: 1074266112,
    352321536: 16,
    369098752: 540688,
    385875968: 16384,
    402653184: 16400,
    419430400: 524288,
    436207616: 524304,
    452984832: 1073741840,
    469762048: 540672,
    486539264: 1073758208,
    503316480: 1073741824,
    520093696: 1074282512,
    276824064: 540688,
    293601280: 524288,
    310378496: 1074266112,
    327155712: 16384,
    343932928: 1073758208,
    360710144: 1074282512,
    377487360: 16,
    394264576: 1073741824,
    411041792: 1074282496,
    427819008: 1073741840,
    444596224: 1073758224,
    461373440: 524304,
    478150656: 0,
    494927872: 16400,
    511705088: 1074266128,
    528482304: 540672
  },
  {
    0: 260,
    1048576: 0,
    2097152: 67109120,
    3145728: 65796,
    4194304: 65540,
    5242880: 67108868,
    6291456: 67174660,
    7340032: 67174400,
    8388608: 67108864,
    9437184: 67174656,
    10485760: 65792,
    11534336: 67174404,
    12582912: 67109124,
    13631488: 65536,
    14680064: 4,
    15728640: 256,
    524288: 67174656,
    1572864: 67174404,
    2621440: 0,
    3670016: 67109120,
    4718592: 67108868,
    5767168: 65536,
    6815744: 65540,
    7864320: 260,
    8912896: 4,
    9961472: 256,
    11010048: 67174400,
    12058624: 65796,
    13107200: 65792,
    14155776: 67109124,
    15204352: 67174660,
    16252928: 67108864,
    16777216: 67174656,
    17825792: 65540,
    18874368: 65536,
    19922944: 67109120,
    20971520: 256,
    22020096: 67174660,
    23068672: 67108868,
    24117248: 0,
    25165824: 67109124,
    26214400: 67108864,
    27262976: 4,
    28311552: 65792,
    29360128: 67174400,
    30408704: 260,
    31457280: 65796,
    32505856: 67174404,
    17301504: 67108864,
    18350080: 260,
    19398656: 67174656,
    20447232: 0,
    21495808: 65540,
    22544384: 67109120,
    23592960: 256,
    24641536: 67174404,
    25690112: 65536,
    26738688: 67174660,
    27787264: 65796,
    28835840: 67108868,
    29884416: 67109124,
    30932992: 67174400,
    31981568: 4,
    33030144: 65792
  },
  {
    0: 2151682048,
    65536: 2147487808,
    131072: 4198464,
    196608: 2151677952,
    262144: 0,
    327680: 4198400,
    393216: 2147483712,
    458752: 4194368,
    524288: 2147483648,
    589824: 4194304,
    655360: 64,
    720896: 2147487744,
    786432: 2151678016,
    851968: 4160,
    917504: 4096,
    983040: 2151682112,
    32768: 2147487808,
    98304: 64,
    163840: 2151678016,
    229376: 2147487744,
    294912: 4198400,
    360448: 2151682112,
    425984: 0,
    491520: 2151677952,
    557056: 4096,
    622592: 2151682048,
    688128: 4194304,
    753664: 4160,
    819200: 2147483648,
    884736: 4194368,
    950272: 4198464,
    1015808: 2147483712,
    1048576: 4194368,
    1114112: 4198400,
    1179648: 2147483712,
    1245184: 0,
    1310720: 4160,
    1376256: 2151678016,
    1441792: 2151682048,
    1507328: 2147487808,
    1572864: 2151682112,
    1638400: 2147483648,
    1703936: 2151677952,
    1769472: 4198464,
    1835008: 2147487744,
    1900544: 4194304,
    1966080: 64,
    2031616: 4096,
    1081344: 2151677952,
    1146880: 2151682112,
    1212416: 0,
    1277952: 4198400,
    1343488: 4194368,
    1409024: 2147483648,
    1474560: 2147487808,
    1540096: 64,
    1605632: 2147483712,
    1671168: 4096,
    1736704: 2147487744,
    1802240: 2151678016,
    1867776: 4160,
    1933312: 2151682048,
    1998848: 4194304,
    2064384: 4198464
  },
  {
    0: 128,
    4096: 17039360,
    8192: 262144,
    12288: 536870912,
    16384: 537133184,
    20480: 16777344,
    24576: 553648256,
    28672: 262272,
    32768: 16777216,
    36864: 537133056,
    40960: 536871040,
    45056: 553910400,
    49152: 553910272,
    53248: 0,
    57344: 17039488,
    61440: 553648128,
    2048: 17039488,
    6144: 553648256,
    10240: 128,
    14336: 17039360,
    18432: 262144,
    22528: 537133184,
    26624: 553910272,
    30720: 536870912,
    34816: 537133056,
    38912: 0,
    43008: 553910400,
    47104: 16777344,
    51200: 536871040,
    55296: 553648128,
    59392: 16777216,
    63488: 262272,
    65536: 262144,
    69632: 128,
    73728: 536870912,
    77824: 553648256,
    81920: 16777344,
    86016: 553910272,
    90112: 537133184,
    94208: 16777216,
    98304: 553910400,
    102400: 553648128,
    106496: 17039360,
    110592: 537133056,
    114688: 262272,
    118784: 536871040,
    122880: 0,
    126976: 17039488,
    67584: 553648256,
    71680: 16777216,
    75776: 17039360,
    79872: 537133184,
    83968: 536870912,
    88064: 17039488,
    92160: 128,
    96256: 553910272,
    100352: 262272,
    104448: 553910400,
    108544: 0,
    112640: 553648128,
    116736: 16777344,
    120832: 262144,
    124928: 537133056,
    129024: 536871040
  },
  {
    0: 268435464,
    256: 8192,
    512: 270532608,
    768: 270540808,
    1024: 268443648,
    1280: 2097152,
    1536: 2097160,
    1792: 268435456,
    2048: 0,
    2304: 268443656,
    2560: 2105344,
    2816: 8,
    3072: 270532616,
    3328: 2105352,
    3584: 8200,
    3840: 270540800,
    128: 270532608,
    384: 270540808,
    640: 8,
    896: 2097152,
    1152: 2105352,
    1408: 268435464,
    1664: 268443648,
    1920: 8200,
    2176: 2097160,
    2432: 8192,
    2688: 268443656,
    2944: 270532616,
    3200: 0,
    3456: 270540800,
    3712: 2105344,
    3968: 268435456,
    4096: 268443648,
    4352: 270532616,
    4608: 270540808,
    4864: 8200,
    5120: 2097152,
    5376: 268435456,
    5632: 268435464,
    5888: 2105344,
    6144: 2105352,
    6400: 0,
    6656: 8,
    6912: 270532608,
    7168: 8192,
    7424: 268443656,
    7680: 270540800,
    7936: 2097160,
    4224: 8,
    4480: 2105344,
    4736: 2097152,
    4992: 268435464,
    5248: 268443648,
    5504: 8200,
    5760: 270540808,
    6016: 270532608,
    6272: 270540800,
    6528: 270532616,
    6784: 8192,
    7040: 2105352,
    7296: 2097160,
    7552: 0,
    7808: 268435456,
    8064: 268443656
  },
  {
    0: 1048576,
    16: 33555457,
    32: 1024,
    48: 1049601,
    64: 34604033,
    80: 0,
    96: 1,
    112: 34603009,
    128: 33555456,
    144: 1048577,
    160: 33554433,
    176: 34604032,
    192: 34603008,
    208: 1025,
    224: 1049600,
    240: 33554432,
    8: 34603009,
    24: 0,
    40: 33555457,
    56: 34604032,
    72: 1048576,
    88: 33554433,
    104: 33554432,
    120: 1025,
    136: 1049601,
    152: 33555456,
    168: 34603008,
    184: 1048577,
    200: 1024,
    216: 34604033,
    232: 1,
    248: 1049600,
    256: 33554432,
    272: 1048576,
    288: 33555457,
    304: 34603009,
    320: 1048577,
    336: 33555456,
    352: 34604032,
    368: 1049601,
    384: 1025,
    400: 34604033,
    416: 1049600,
    432: 1,
    448: 0,
    464: 34603008,
    480: 33554433,
    496: 1024,
    264: 1049600,
    280: 33555457,
    296: 34603009,
    312: 1,
    328: 33554432,
    344: 1048576,
    360: 1025,
    376: 34604032,
    392: 33554433,
    408: 34603008,
    424: 0,
    440: 34604033,
    456: 1049601,
    472: 1024,
    488: 33555456,
    504: 1048577
  },
  {
    0: 134219808,
    1: 131072,
    2: 134217728,
    3: 32,
    4: 131104,
    5: 134350880,
    6: 134350848,
    7: 2048,
    8: 134348800,
    9: 134219776,
    10: 133120,
    11: 134348832,
    12: 2080,
    13: 0,
    14: 134217760,
    15: 133152,
    2147483648: 2048,
    2147483649: 134350880,
    2147483650: 134219808,
    2147483651: 134217728,
    2147483652: 134348800,
    2147483653: 133120,
    2147483654: 133152,
    2147483655: 32,
    2147483656: 134217760,
    2147483657: 2080,
    2147483658: 131104,
    2147483659: 134350848,
    2147483660: 0,
    2147483661: 134348832,
    2147483662: 134219776,
    2147483663: 131072,
    16: 133152,
    17: 134350848,
    18: 32,
    19: 2048,
    20: 134219776,
    21: 134217760,
    22: 134348832,
    23: 131072,
    24: 0,
    25: 131104,
    26: 134348800,
    27: 134219808,
    28: 134350880,
    29: 133120,
    30: 2080,
    31: 134217728,
    2147483664: 131072,
    2147483665: 2048,
    2147483666: 134348832,
    2147483667: 133152,
    2147483668: 32,
    2147483669: 134348800,
    2147483670: 134217728,
    2147483671: 134219808,
    2147483672: 134350880,
    2147483673: 134217760,
    2147483674: 134219776,
    2147483675: 0,
    2147483676: 133120,
    2147483677: 2080,
    2147483678: 131104,
    2147483679: 134350848
  }
];
var SBOX_MASK = [
  4160749569,
  528482304,
  33030144,
  2064384,
  129024,
  8064,
  504,
  2147483679
];
function exchangeLR(offset, mask) {
  const t = (this._lBlock >>> offset ^ this._rBlock) & mask;
  this._rBlock ^= t;
  this._lBlock ^= t << offset;
}
__name(exchangeLR, "exchangeLR");
function exchangeRL(offset, mask) {
  const t = (this._rBlock >>> offset ^ this._lBlock) & mask;
  this._lBlock ^= t;
  this._rBlock ^= t << offset;
}
__name(exchangeRL, "exchangeRL");
var DESAlgo = class extends BlockCipher {
  _doReset() {
    const key = this._key;
    const keyWords = key.words;
    const keyBits = [];
    for (let i = 0; i < 56; i += 1) {
      const keyBitPos = PC1[i] - 1;
      keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
    }
    this._subKeys = [];
    const subKeys = this._subKeys;
    for (let nSubKey = 0; nSubKey < 16; nSubKey += 1) {
      subKeys[nSubKey] = [];
      const subKey = subKeys[nSubKey];
      const bitShift = BIT_SHIFTS[nSubKey];
      for (let i = 0; i < 24; i += 1) {
        subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
        subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
      }
      subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
      for (let i = 1; i < 7; i += 1) {
        subKey[i] >>>= (i - 1) * 4 + 3;
      }
      subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
    }
    this._invSubKeys = [];
    const invSubKeys = this._invSubKeys;
    for (let i = 0; i < 16; i += 1) {
      invSubKeys[i] = subKeys[15 - i];
    }
  }
  encryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._subKeys);
  }
  decryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._invSubKeys);
  }
  _doCryptBlock(M, offset, subKeys) {
    const _M = M;
    this._lBlock = M[offset];
    this._rBlock = M[offset + 1];
    exchangeLR.call(this, 4, 252645135);
    exchangeLR.call(this, 16, 65535);
    exchangeRL.call(this, 2, 858993459);
    exchangeRL.call(this, 8, 16711935);
    exchangeLR.call(this, 1, 1431655765);
    for (let round = 0; round < 16; round += 1) {
      const subKey = subKeys[round];
      const lBlock = this._lBlock;
      const rBlock = this._rBlock;
      let f = 0;
      for (let i = 0; i < 8; i += 1) {
        f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
      }
      this._lBlock = rBlock;
      this._rBlock = lBlock ^ f;
    }
    const t = this._lBlock;
    this._lBlock = this._rBlock;
    this._rBlock = t;
    exchangeLR.call(this, 1, 1431655765);
    exchangeRL.call(this, 8, 16711935);
    exchangeRL.call(this, 2, 858993459);
    exchangeLR.call(this, 16, 65535);
    exchangeLR.call(this, 4, 252645135);
    _M[offset] = this._lBlock;
    _M[offset + 1] = this._rBlock;
  }
};
__name(DESAlgo, "DESAlgo");
DESAlgo.keySize = 64 / 32;
DESAlgo.ivSize = 64 / 32;
DESAlgo.blockSize = 64 / 32;
var DES = BlockCipher._createHelper(DESAlgo);
var TripleDESAlgo = class extends BlockCipher {
  _doReset() {
    const key = this._key;
    const keyWords = key.words;
    if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
      throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
    }
    const key1 = keyWords.slice(0, 2);
    const key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    const key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
    this._des1 = DESAlgo.createEncryptor(WordArray.create(key1));
    this._des2 = DESAlgo.createEncryptor(WordArray.create(key2));
    this._des3 = DESAlgo.createEncryptor(WordArray.create(key3));
  }
  encryptBlock(M, offset) {
    this._des1.encryptBlock(M, offset);
    this._des2.decryptBlock(M, offset);
    this._des3.encryptBlock(M, offset);
  }
  decryptBlock(M, offset) {
    this._des3.decryptBlock(M, offset);
    this._des2.encryptBlock(M, offset);
    this._des1.decryptBlock(M, offset);
  }
};
__name(TripleDESAlgo, "TripleDESAlgo");
TripleDESAlgo.keySize = 192 / 32;
TripleDESAlgo.ivSize = 64 / 32;
TripleDESAlgo.blockSize = 64 / 32;
var TripleDES = BlockCipher._createHelper(TripleDESAlgo);

// node_modules/crypto-es/lib/rabbit.js
init_checked_fetch();
var S = [];
var C_ = [];
var G = [];
function nextState() {
  const X = this._X;
  const C = this._C;
  for (let i = 0; i < 8; i += 1) {
    C_[i] = C[i];
  }
  C[0] = C[0] + 1295307597 + this._b | 0;
  C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
  C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
  C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
  C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
  C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
  C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
  C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
  this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];
    const ga = gx & 65535;
    const gb = gx >>> 16;
    const gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
    const gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
    G[i] = gh ^ gl;
  }
  X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
  X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
  X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
  X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
  X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
  X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
  X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
  X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
}
__name(nextState, "nextState");
var RabbitAlgo = class extends StreamCipher {
  constructor(...args) {
    super(...args);
    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }
  _doReset() {
    const K3 = this._key.words;
    const { iv } = this.cfg;
    for (let i = 0; i < 4; i += 1) {
      K3[i] = (K3[i] << 8 | K3[i] >>> 24) & 16711935 | (K3[i] << 24 | K3[i] >>> 8) & 4278255360;
    }
    this._X = [
      K3[0],
      K3[3] << 16 | K3[2] >>> 16,
      K3[1],
      K3[0] << 16 | K3[3] >>> 16,
      K3[2],
      K3[1] << 16 | K3[0] >>> 16,
      K3[3],
      K3[2] << 16 | K3[1] >>> 16
    ];
    const X = this._X;
    this._C = [
      K3[2] << 16 | K3[2] >>> 16,
      K3[0] & 4294901760 | K3[1] & 65535,
      K3[3] << 16 | K3[3] >>> 16,
      K3[1] & 4294901760 | K3[2] & 65535,
      K3[0] << 16 | K3[0] >>> 16,
      K3[2] & 4294901760 | K3[3] & 65535,
      K3[1] << 16 | K3[1] >>> 16,
      K3[3] & 4294901760 | K3[0] & 65535
    ];
    const C = this._C;
    this._b = 0;
    for (let i = 0; i < 4; i += 1) {
      nextState.call(this);
    }
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[i + 4 & 7];
    }
    if (iv) {
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];
      const i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
      const i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
      const i1 = i0 >>> 16 | i2 & 4294901760;
      const i3 = i2 << 16 | i0 & 65535;
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;
      for (let i = 0; i < 4; i += 1) {
        nextState.call(this);
      }
    }
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    const X = this._X;
    nextState.call(this);
    S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
    S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
    S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
    S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
    for (let i = 0; i < 4; i += 1) {
      S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
      _M[offset + i] ^= S[i];
    }
  }
};
__name(RabbitAlgo, "RabbitAlgo");
var Rabbit = StreamCipher._createHelper(RabbitAlgo);

// node_modules/crypto-es/lib/rabbit-legacy.js
init_checked_fetch();
var S2 = [];
var C_2 = [];
var G2 = [];
function nextState2() {
  const X = this._X;
  const C = this._C;
  for (let i = 0; i < 8; i += 1) {
    C_2[i] = C[i];
  }
  C[0] = C[0] + 1295307597 + this._b | 0;
  C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_2[0] >>> 0 ? 1 : 0) | 0;
  C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_2[1] >>> 0 ? 1 : 0) | 0;
  C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_2[2] >>> 0 ? 1 : 0) | 0;
  C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_2[3] >>> 0 ? 1 : 0) | 0;
  C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_2[4] >>> 0 ? 1 : 0) | 0;
  C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_2[5] >>> 0 ? 1 : 0) | 0;
  C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_2[6] >>> 0 ? 1 : 0) | 0;
  this._b = C[7] >>> 0 < C_2[7] >>> 0 ? 1 : 0;
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];
    const ga = gx & 65535;
    const gb = gx >>> 16;
    const gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
    const gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
    G2[i] = gh ^ gl;
  }
  X[0] = G2[0] + (G2[7] << 16 | G2[7] >>> 16) + (G2[6] << 16 | G2[6] >>> 16) | 0;
  X[1] = G2[1] + (G2[0] << 8 | G2[0] >>> 24) + G2[7] | 0;
  X[2] = G2[2] + (G2[1] << 16 | G2[1] >>> 16) + (G2[0] << 16 | G2[0] >>> 16) | 0;
  X[3] = G2[3] + (G2[2] << 8 | G2[2] >>> 24) + G2[1] | 0;
  X[4] = G2[4] + (G2[3] << 16 | G2[3] >>> 16) + (G2[2] << 16 | G2[2] >>> 16) | 0;
  X[5] = G2[5] + (G2[4] << 8 | G2[4] >>> 24) + G2[3] | 0;
  X[6] = G2[6] + (G2[5] << 16 | G2[5] >>> 16) + (G2[4] << 16 | G2[4] >>> 16) | 0;
  X[7] = G2[7] + (G2[6] << 8 | G2[6] >>> 24) + G2[5] | 0;
}
__name(nextState2, "nextState");
var RabbitLegacyAlgo = class extends StreamCipher {
  constructor(...args) {
    super(...args);
    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }
  _doReset() {
    const K3 = this._key.words;
    const { iv } = this.cfg;
    this._X = [
      K3[0],
      K3[3] << 16 | K3[2] >>> 16,
      K3[1],
      K3[0] << 16 | K3[3] >>> 16,
      K3[2],
      K3[1] << 16 | K3[0] >>> 16,
      K3[3],
      K3[2] << 16 | K3[1] >>> 16
    ];
    const X = this._X;
    this._C = [
      K3[2] << 16 | K3[2] >>> 16,
      K3[0] & 4294901760 | K3[1] & 65535,
      K3[3] << 16 | K3[3] >>> 16,
      K3[1] & 4294901760 | K3[2] & 65535,
      K3[0] << 16 | K3[0] >>> 16,
      K3[2] & 4294901760 | K3[3] & 65535,
      K3[1] << 16 | K3[1] >>> 16,
      K3[3] & 4294901760 | K3[0] & 65535
    ];
    const C = this._C;
    this._b = 0;
    for (let i = 0; i < 4; i += 1) {
      nextState2.call(this);
    }
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[i + 4 & 7];
    }
    if (iv) {
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];
      const i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
      const i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
      const i1 = i0 >>> 16 | i2 & 4294901760;
      const i3 = i2 << 16 | i0 & 65535;
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;
      for (let i = 0; i < 4; i += 1) {
        nextState2.call(this);
      }
    }
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    const X = this._X;
    nextState2.call(this);
    S2[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
    S2[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
    S2[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
    S2[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
    for (let i = 0; i < 4; i += 1) {
      S2[i] = (S2[i] << 8 | S2[i] >>> 24) & 16711935 | (S2[i] << 24 | S2[i] >>> 8) & 4278255360;
      _M[offset + i] ^= S2[i];
    }
  }
};
__name(RabbitLegacyAlgo, "RabbitLegacyAlgo");
var RabbitLegacy = StreamCipher._createHelper(RabbitLegacyAlgo);

// node_modules/crypto-es/lib/rc4.js
init_checked_fetch();
function generateKeystreamWord() {
  const S3 = this._S;
  let i = this._i;
  let j = this._j;
  let keystreamWord = 0;
  for (let n2 = 0; n2 < 4; n2 += 1) {
    i = (i + 1) % 256;
    j = (j + S3[i]) % 256;
    const t = S3[i];
    S3[i] = S3[j];
    S3[j] = t;
    keystreamWord |= S3[(S3[i] + S3[j]) % 256] << 24 - n2 * 8;
  }
  this._i = i;
  this._j = j;
  return keystreamWord;
}
__name(generateKeystreamWord, "generateKeystreamWord");
var RC4Algo = class extends StreamCipher {
  _doReset() {
    const key = this._key;
    const keyWords = key.words;
    const keySigBytes = key.sigBytes;
    this._S = [];
    const S3 = this._S;
    for (let i = 0; i < 256; i += 1) {
      S3[i] = i;
    }
    for (let i = 0, j = 0; i < 256; i += 1) {
      const keyByteIndex = i % keySigBytes;
      const keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
      j = (j + S3[i] + keyByte) % 256;
      const t = S3[i];
      S3[i] = S3[j];
      S3[j] = t;
    }
    this._j = 0;
    this._i = this._j;
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    _M[offset] ^= generateKeystreamWord.call(this);
  }
};
__name(RC4Algo, "RC4Algo");
RC4Algo.keySize = 256 / 32;
RC4Algo.ivSize = 0;
var RC4 = StreamCipher._createHelper(RC4Algo);
var RC4DropAlgo = class extends RC4Algo {
  constructor(...args) {
    super(...args);
    Object.assign(this.cfg, { drop: 192 });
  }
  _doReset() {
    super._doReset.call(this);
    for (let i = this.cfg.drop; i > 0; i -= 1) {
      generateKeystreamWord.call(this);
    }
  }
};
__name(RC4DropAlgo, "RC4DropAlgo");
var RC4Drop = StreamCipher._createHelper(RC4DropAlgo);

// node_modules/crypto-es/lib/mode-cfb.js
init_checked_fetch();
function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
  const _words = words;
  let keystream;
  const iv = this._iv;
  if (iv) {
    keystream = iv.slice(0);
    this._iv = void 0;
  } else {
    keystream = this._prevBlock;
  }
  cipher.encryptBlock(keystream, 0);
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= keystream[i];
  }
}
__name(generateKeystreamAndEncrypt, "generateKeystreamAndEncrypt");
var CFB = class extends BlockCipherMode {
};
__name(CFB, "CFB");
CFB.Encryptor = class extends CFB {
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
CFB.Decryptor = class extends CFB {
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const thisBlock = words.slice(offset, offset + blockSize);
    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
    this._prevBlock = thisBlock;
  }
};

// node_modules/crypto-es/lib/mode-ctr.js
init_checked_fetch();
var CTR = class extends BlockCipherMode {
};
__name(CTR, "CTR");
CTR.Encryptor = class extends CTR {
  processBlock(words, offset) {
    const _words = words;
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;
      this._iv = void 0;
    }
    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);
    counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTR.Decryptor = CTR.Encryptor;

// node_modules/crypto-es/lib/mode-ctr-gladman.js
init_checked_fetch();
var incWord = /* @__PURE__ */ __name((word) => {
  let _word = word;
  if ((word >> 24 & 255) === 255) {
    let b1 = word >> 16 & 255;
    let b2 = word >> 8 & 255;
    let b3 = word & 255;
    if (b1 === 255) {
      b1 = 0;
      if (b2 === 255) {
        b2 = 0;
        if (b3 === 255) {
          b3 = 0;
        } else {
          b3 += 1;
        }
      } else {
        b2 += 1;
      }
    } else {
      b1 += 1;
    }
    _word = 0;
    _word += b1 << 16;
    _word += b2 << 8;
    _word += b3;
  } else {
    _word += 1 << 24;
  }
  return _word;
}, "incWord");
var incCounter = /* @__PURE__ */ __name((counter) => {
  const _counter = counter;
  _counter[0] = incWord(_counter[0]);
  if (_counter[0] === 0) {
    _counter[1] = incWord(_counter[1]);
  }
  return _counter;
}, "incCounter");
var CTRGladman = class extends BlockCipherMode {
};
__name(CTRGladman, "CTRGladman");
CTRGladman.Encryptor = class extends CTRGladman {
  processBlock(words, offset) {
    const _words = words;
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;
      this._iv = void 0;
    }
    incCounter(counter);
    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTRGladman.Decryptor = CTRGladman.Encryptor;

// node_modules/crypto-es/lib/mode-ecb.js
init_checked_fetch();
var ECB = class extends BlockCipherMode {
};
__name(ECB, "ECB");
ECB.Encryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.encryptBlock(words, offset);
  }
};
ECB.Decryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.decryptBlock(words, offset);
  }
};

// node_modules/crypto-es/lib/mode-ofb.js
init_checked_fetch();
var OFB = class extends BlockCipherMode {
};
__name(OFB, "OFB");
OFB.Encryptor = class extends OFB {
  processBlock(words, offset) {
    const _words = words;
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let keystream = this._keystream;
    if (iv) {
      this._keystream = iv.slice(0);
      keystream = this._keystream;
      this._iv = void 0;
    }
    cipher.encryptBlock(keystream, 0);
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
OFB.Decryptor = OFB.Encryptor;

// node_modules/crypto-es/lib/pad-ansix923.js
init_checked_fetch();
var AnsiX923 = {
  pad(data, blockSize) {
    const _data = data;
    const dataSigBytes = _data.sigBytes;
    const blockSizeBytes = blockSize * 4;
    const nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
    const lastBytePos = dataSigBytes + nPaddingBytes - 1;
    _data.clamp();
    _data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
    _data.sigBytes += nPaddingBytes;
  },
  unpad(data) {
    const _data = data;
    const nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 255;
    _data.sigBytes -= nPaddingBytes;
  }
};

// node_modules/crypto-es/lib/pad-iso10126.js
init_checked_fetch();
var Iso10126 = {
  pad(data, blockSize) {
    const blockSizeBytes = blockSize * 4;
    const nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
    data.concat(WordArray.random(nPaddingBytes - 1)).concat(WordArray.create([nPaddingBytes << 24], 1));
  },
  unpad(data) {
    const _data = data;
    const nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 255;
    _data.sigBytes -= nPaddingBytes;
  }
};

// node_modules/crypto-es/lib/pad-iso97971.js
init_checked_fetch();

// node_modules/crypto-es/lib/pad-zeropadding.js
init_checked_fetch();
var ZeroPadding = {
  pad(data, blockSize) {
    const _data = data;
    const blockSizeBytes = blockSize * 4;
    _data.clamp();
    _data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
  },
  unpad(data) {
    const _data = data;
    const dataWords = _data.words;
    for (let i = _data.sigBytes - 1; i >= 0; i -= 1) {
      if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
        _data.sigBytes = i + 1;
        break;
      }
    }
  }
};

// node_modules/crypto-es/lib/pad-iso97971.js
var Iso97971 = {
  pad(data, blockSize) {
    data.concat(WordArray.create([2147483648], 1));
    ZeroPadding.pad(data, blockSize);
  },
  unpad(data) {
    const _data = data;
    ZeroPadding.unpad(_data);
    _data.sigBytes -= 1;
  }
};

// node_modules/crypto-es/lib/pad-nopadding.js
init_checked_fetch();
var NoPadding = {
  pad() {
  },
  unpad() {
  }
};

// node_modules/crypto-es/lib/format-hex.js
init_checked_fetch();
var HexFormatter = {
  /**
   * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The hexadecimally encoded string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
   */
  stringify(cipherParams) {
    return cipherParams.ciphertext.toString(Hex);
  },
  /**
   * Converts a hexadecimally encoded ciphertext string to a cipher params object.
   *
   * @param {string} input The hexadecimally encoded string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
   */
  parse(input) {
    const ciphertext = Hex.parse(input);
    return CipherParams.create({ ciphertext });
  }
};

// node_modules/crypto-es/lib/index.js
var lib_default = {
  lib: {
    Base,
    WordArray,
    BufferedBlockAlgorithm,
    Hasher,
    Cipher,
    StreamCipher,
    BlockCipherMode,
    BlockCipher,
    CipherParams,
    SerializableCipher,
    PasswordBasedCipher
  },
  x64: {
    Word: X64Word,
    WordArray: X64WordArray
  },
  enc: {
    Hex,
    Latin1,
    Utf8,
    Utf16,
    Utf16BE,
    Utf16LE,
    Base64
  },
  algo: {
    HMAC,
    MD5: MD5Algo,
    SHA1: SHA1Algo,
    SHA224: SHA224Algo,
    SHA256: SHA256Algo,
    SHA384: SHA384Algo,
    SHA512: SHA512Algo,
    SHA3: SHA3Algo,
    RIPEMD160: RIPEMD160Algo,
    PBKDF2: PBKDF2Algo,
    EvpKDF: EvpKDFAlgo,
    AES: AESAlgo,
    DES: DESAlgo,
    TripleDES: TripleDESAlgo,
    Rabbit: RabbitAlgo,
    RabbitLegacy: RabbitLegacyAlgo,
    RC4: RC4Algo,
    RC4Drop: RC4DropAlgo
  },
  mode: {
    CBC,
    CFB,
    CTR,
    CTRGladman,
    ECB,
    OFB
  },
  pad: {
    Pkcs7,
    AnsiX923,
    Iso10126,
    Iso97971,
    NoPadding,
    ZeroPadding
  },
  format: {
    OpenSSL: OpenSSLFormatter,
    Hex: HexFormatter
  },
  kdf: {
    OpenSSL: OpenSSLKdf
  },
  MD5,
  HmacMD5,
  SHA1,
  HmacSHA1,
  SHA224,
  HmacSHA224,
  SHA256,
  HmacSHA256,
  SHA384,
  HmacSHA384,
  SHA512,
  HmacSHA512,
  SHA3,
  HmacSHA3,
  RIPEMD160,
  HmacRIPEMD160,
  PBKDF2,
  EvpKDF,
  AES,
  DES,
  TripleDES,
  Rabbit,
  RabbitLegacy,
  RC4,
  RC4Drop
};

// worker.js
var import_elliptic = __toESM(require_elliptic(), 1);
var ec = new import_elliptic.ec("secp256k1");
var memoryStorage = {
  blockchain: null,
  pendingTransactions: []
};
var Block = class {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions || [];
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = "";
    this.hash = this.calculateHash();
  }
  calculateHash() {
    try {
      const safeTimestamp = this.timestamp || Date.now();
      const safeTransactions = this.transactions || [];
      const safePreviousHash = this.previousHash || "";
      const safeNonce = this.nonce || 0;
      let transactionsString;
      console.log("===========>Transactions:", safeTransactions);
      try {
        transactionsString = JSON.stringify(safeTransactions);
      } catch (error) {
        console.error("Failed to stringify transactions:", error);
        transactionsString = "[]";
      }
      const data = safePreviousHash + safeTimestamp + transactionsString + safeNonce;
      return lib_default.SHA256(data).toString(lib_default.enc.Hex);
    } catch (error) {
      console.error("Error calculating hash:", error);
      return "error-calculating-hash-" + Date.now();
    }
  }
  // 工作量证明 (PoW)
  mineBlock(difficulty) {
    try {
      const target = Array(difficulty + 1).join("0");
      while (this.hash.substring(0, difficulty) !== target) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
      console.log(`Block mined: ${this.hash}`);
    } catch (error) {
      console.error("Error mining block:", error);
      throw new Error(`Mining failed: ${error.message}`);
    }
  }
};
__name(Block, "Block");
var Transaction = class {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
    this.signature = "";
  }
  calculateHash() {
    try {
      const data = this.fromAddress + this.toAddress + this.amount + this.timestamp;
      return lib_default.SHA256(data).toString(lib_default.enc.Hex);
    } catch (error) {
      console.error("Error calculating transaction hash:", error);
      return "error-calculating-tx-hash-" + Date.now();
    }
  }
  signTransaction(signingKey) {
    try {
      if (!signingKey) {
        throw new Error("No signing key provided");
      }
      if (signingKey.getPublic("hex") !== this.fromAddress) {
        throw new Error("You cannot sign transactions for other wallets!");
      }
      const hashTx = this.calculateHash();
      const sig = signingKey.sign(hashTx);
      this.signature = sig.toDER("hex");
    } catch (error) {
      console.error("Error signing transaction:", error);
      throw new Error(`Signing failed: ${error.message}`);
    }
  }
  isValid() {
    try {
      if (this.fromAddress === null)
        return true;
      if (!this.signature || this.signature.length === 0) {
        throw new Error("No signature in this transaction");
      }
      const publicKey = ec.keyFromPublic(this.fromAddress, "hex");
      return publicKey.verify(this.calculateHash(), this.signature);
    } catch (error) {
      console.error("Error validating transaction:", error);
      return false;
    }
  }
};
__name(Transaction, "Transaction");
var Blockchain = class {
  constructor() {
    this.chain = [];
    try {
      const genesisBlock = this.createGenesisBlock();
      this.chain = [genesisBlock];
    } catch (error) {
      console.error("Error creating genesis block:", error);
      this.chain = [{
        timestamp: Date.now(),
        transactions: [],
        previousHash: "0",
        hash: "genesis-" + Date.now(),
        nonce: 0
      }];
    }
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }
  // 创建创世区块
  createGenesisBlock() {
    try {
      return new Block(Date.now(), [], "0");
    } catch (error) {
      console.error("Error in createGenesisBlock:", error);
      throw error;
    }
  }
  // 初始化区块链数据
  async initialize(env) {
    console.log("Initializing blockchain...");
    try {
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || env && env.USE_IN_MEMORY_STORE === "true";
      console.log(`Using memory store: ${useMemoryStore}`);
      if (useMemoryStore) {
        if (memoryStorage.blockchain) {
          this.chain = memoryStorage.blockchain;
          this.pendingTransactions = memoryStorage.pendingTransactions || [];
          console.log(`Loaded blockchain from memory with ${this.chain.length} blocks`);
        } else {
          memoryStorage.blockchain = this.chain;
          memoryStorage.pendingTransactions = [];
          console.log("Initialized new blockchain in memory");
        }
        return;
      }
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn("KV storage not available. Using in-memory blockchain only.");
        return;
      }
      const storedChain = await env.BLOCKCHAIN_STORAGE.get("blockchain", { type: "json" });
      if (storedChain && Array.isArray(storedChain) && storedChain.length > 0) {
        this.chain = storedChain;
        console.log(`Loaded blockchain with ${this.chain.length} blocks from KV`);
      } else {
        await this.saveChain(env);
        console.log("Initialized new blockchain with genesis block and saved to KV");
      }
      const storedTx = await env.BLOCKCHAIN_STORAGE.get("pendingTransactions", { type: "json" });
      if (storedTx && Array.isArray(storedTx)) {
        this.pendingTransactions = storedTx;
        console.log(`Loaded ${this.pendingTransactions.length} pending transactions from KV`);
      }
    } catch (error) {
      console.error("Error initializing from KV:", error.message);
    }
  }
  getLatestBlock() {
    try {
      if (!this.chain || this.chain.length === 0) {
        console.warn("Chain is empty, creating genesis block");
        const genesisBlock = this.createGenesisBlock();
        this.chain = [genesisBlock];
      }
      return this.chain[this.chain.length - 1];
    } catch (error) {
      console.error("Error in getLatestBlock:", error);
      return {
        timestamp: Date.now(),
        transactions: [],
        previousHash: "0",
        hash: "error-block-" + Date.now(),
        nonce: 0
      };
    }
  }
  // 保存区块链到存储
  async saveChain(env) {
    try {
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || env && env.USE_IN_MEMORY_STORE === "true";
      if (useMemoryStore) {
        memoryStorage.blockchain = this.chain;
        console.log("Blockchain saved to memory storage");
        return;
      }
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn("KV storage not available. Cannot save blockchain.");
        return;
      }
      await env.BLOCKCHAIN_STORAGE.put("blockchain", JSON.stringify(this.chain));
      console.log("Blockchain saved to KV storage");
    } catch (error) {
      console.error("Error saving blockchain to storage:", error.message);
    }
  }
  // 保存待处理交易到存储
  async savePendingTransactions(env) {
    try {
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || env && env.USE_IN_MEMORY_STORE === "true";
      if (useMemoryStore) {
        memoryStorage.pendingTransactions = this.pendingTransactions;
        console.log("Pending transactions saved to memory storage");
        return;
      }
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn("KV storage not available. Cannot save pending transactions.");
        return;
      }
      await env.BLOCKCHAIN_STORAGE.put("pendingTransactions", JSON.stringify(this.pendingTransactions));
      console.log("Pending transactions saved to KV storage");
    } catch (error) {
      console.error("Error saving pending transactions to storage:", error.message);
    }
  }
  async minePendingTransactions(minerAddress, env) {
    try {
      const rewardTx = new Transaction(null, minerAddress, this.miningReward);
      this.pendingTransactions.push(rewardTx);
      const previousHash = this.getLatestBlock().hash;
      const block = new Block(Date.now(), this.pendingTransactions, previousHash);
      block.mineBlock(this.difficulty);
      console.log("Block successfully mined!");
      this.chain.push(block);
      this.pendingTransactions = [];
      await this.saveChain(env);
      await this.savePendingTransactions(env);
      return block;
    } catch (error) {
      console.error("Error mining transactions:", error);
      throw new Error(`Mining failed: ${error.message}`);
    }
  }
  async addTransaction(transaction, env) {
    try {
      if (!transaction.fromAddress || !transaction.toAddress) {
        throw new Error("Transaction must include from and to address");
      }
      if (typeof transaction.isValid === "function") {
        const isValid = transaction.isValid();
        if (!isValid) {
          throw new Error("Transaction validation failed");
        }
      }
      this.pendingTransactions.push(transaction);
      await this.savePendingTransactions(env);
      return transaction;
    } catch (error) {
      console.error("Error adding transaction:", error);
      throw new Error(`Failed to add transaction: ${error.message}`);
    }
  }
  getBalanceOfAddress(address) {
    try {
      let balance = 0;
      for (const block of this.chain) {
        if (!block.transactions)
          continue;
        for (const trans of block.transactions) {
          if (trans.fromAddress === address) {
            balance -= parseFloat(trans.amount);
          }
          if (trans.toAddress === address) {
            balance += parseFloat(trans.amount);
          }
        }
      }
      return balance;
    } catch (error) {
      console.error("Error calculating balance:", error);
      return 0;
    }
  }
  isChainValid() {
    try {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
        if (currentBlock.hash !== new Block(
          currentBlock.timestamp,
          currentBlock.transactions,
          currentBlock.previousHash
        ).calculateHash()) {
          return false;
        }
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error("Error validating chain:", error);
      return false;
    }
  }
};
__name(Blockchain, "Blockchain");
var Wallet = class {
  constructor(privateKey = null) {
    try {
      this.keyPair = privateKey ? ec.keyFromPrivate(privateKey) : ec.genKeyPair();
      this.privateKey = this.keyPair.getPrivate("hex");
      this.publicKey = this.keyPair.getPublic("hex");
    } catch (error) {
      console.error("Error creating wallet:", error);
      this.privateKey = "error-private-key";
      this.publicKey = "error-public-key";
    }
  }
  // 获取钱包地址
  getAddress() {
    return this.publicKey;
  }
};
__name(Wallet, "Wallet");
var blockchainInstance = null;
async function getBlockchain(env) {
  try {
    if (!blockchainInstance) {
      console.log("Creating new blockchain instance");
      blockchainInstance = new Blockchain();
      await blockchainInstance.initialize(env);
    }
    return blockchainInstance;
  } catch (error) {
    console.error("Error getting blockchain instance:", error);
    return new Blockchain();
  }
}
__name(getBlockchain, "getBlockchain");
function createResponse(data, status = 200) {
  try {
    return new Response(JSON.stringify(data, null, 2), {
      status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (error) {
    console.error("Error creating response:", error);
    return new Response(JSON.stringify({
      error: "Failed to create response",
      message: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
__name(createResponse, "createResponse");
async function handleRequest(request, env) {
  console.log("Handling request...");
  try {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    console.log(`Handling ${method} request to ${path}`);
    const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || env && env.USE_IN_MEMORY_STORE === "true";
    console.log(`Storage mode: ${useMemoryStore ? "In-Memory" : "KV"}`);
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400"
        }
      });
    }
    const blockchain = await getBlockchain(env);
    if (path === "/blockchain" && method === "GET") {
      return createResponse({
        chain: blockchain.chain,
        pendingTransactions: blockchain.pendingTransactions,
        length: blockchain.chain.length
      });
    } else if (path === "/transaction" && method === "POST") {
      const data = await request.json();
      const { fromAddress, toAddress, amount, privateKey } = data;
      const keyPair = ec.keyFromPrivate(privateKey);
      const tx = new Transaction(fromAddress, toAddress, parseFloat(amount));
      tx.signTransaction(keyPair);
      await blockchain.addTransaction(tx, env);
      return createResponse({
        message: "Transaction added successfully",
        transaction: tx
      });
    } else if (path === "/mine" && method === "POST") {
      const data = await request.json();
      const { minerAddress } = data;
      if (!minerAddress) {
        return createResponse({ error: "Missing miner address" }, 400);
      }
      const lastBlock = await blockchain.minePendingTransactions(minerAddress, env);
      return createResponse({
        message: "Block mined successfully",
        lastBlock
      });
    } else if (path.startsWith("/balance/") && method === "GET") {
      const address = path.split("/balance/")[1];
      const balance = blockchain.getBalanceOfAddress(address);
      return createResponse({
        address,
        balance
      });
    } else if (path === "/wallet/new" && method === "GET") {
      const newWallet = new Wallet();
      return createResponse({
        privateKey: newWallet.privateKey,
        publicKey: newWallet.publicKey
      });
    } else if (path === "/debug" && method === "GET") {
      try {
        return createResponse({
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          storage: useMemoryStore ? "In-Memory" : "KV",
          envAvailable: !!env,
          kvAvailable: !!(env && env.BLOCKCHAIN_STORAGE),
          env_vars: env ? {
            USE_IN_MEMORY_STORE: env.USE_IN_MEMORY_STORE
          } : "No env available",
          blockchainInitialized: !!blockchainInstance,
          blockCount: blockchain.chain.length,
          genesisBlock: blockchain.chain[0],
          pendingTransactionCount: blockchain.pendingTransactions.length,
          availablePaths: [
            "/blockchain",
            "/transaction",
            "/mine",
            "/balance/:address",
            "/wallet/new",
            "/debug"
          ]
        });
      } catch (error) {
        return createResponse({
          error: "Error generating debug info",
          message: error.message,
          stack: error.stack
        }, 500);
      }
    } else {
      return createResponse({
        error: "Not found",
        path,
        availablePaths: [
          "/blockchain",
          "/transaction",
          "/mine",
          "/balance/:address",
          "/wallet/new",
          "/debug"
        ]
      }, 404);
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return createResponse({
      error: "Internal server error",
      message: error.message,
      stack: error.stack
    }, 500);
  }
}
__name(handleRequest, "handleRequest");
var worker_default = {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest(request, env);
    } catch (error) {
      console.error("Unhandled error in fetch:", error);
      return new Response(JSON.stringify({
        error: "Unhandled server error",
        message: error.message,
        stack: error.stack
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-LJEj5T/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-LJEj5T/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

crypto-es/lib/ripemd160.js:
  (** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  
  Redistribution and use in source and binary forms, with or without modification, are permitted
  provided that the following conditions are met:
  
      - Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.
  
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
  WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  *)

crypto-es/lib/mode-ctr-gladman.js:
  (** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   *)
*/
//# sourceMappingURL=worker.js.map
