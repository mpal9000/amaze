(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.amaze = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":15}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-integer"), __esModule: true };
},{"core-js/library/fn/number/is-integer":16}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/parse-int"), __esModule: true };
},{"core-js/library/fn/number/parse-int":17}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":18}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":19}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":20}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":21}],8:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],9:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":6}],10:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":4}],11:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

var _Object$freeze = require("babel-runtime/core-js/object/freeze")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

exports["default"] = function (strings, raw) {
  return _Object$freeze(_Object$defineProperties(strings, {
    raw: {
      value: _Object$freeze(raw)
    }
  }));
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-properties":5,"babel-runtime/core-js/object/freeze":7}],14:[function(require,module,exports){
"use strict";

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

exports["default"] = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return _Array$from(arr);
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/array/from":1}],15:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":27,"../../modules/es6.array.from":61,"../../modules/es6.string.iterator":66}],16:[function(require,module,exports){
require('../../modules/es6.number.is-integer');
module.exports = require('../../modules/$.core').Number.isInteger;
},{"../../modules/$.core":27,"../../modules/es6.number.is-integer":62}],17:[function(require,module,exports){
require('../../modules/es6.number.parse-int');
module.exports = parseInt;
},{"../../modules/es6.number.parse-int":63}],18:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":27,"../../modules/es6.object.assign":64}],19:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":46}],20:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":46}],21:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/$.core').Object.freeze;
},{"../../modules/$.core":27,"../../modules/es6.object.freeze":65}],22:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],23:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":39}],24:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var toObject = require('./$.to-object')
  , IObject  = require('./$.iobject')
  , enumKeys = require('./$.enum-keys');
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = toObject(target)
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = IObject(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$.enum-keys":31,"./$.iobject":36,"./$.to-object":57}],25:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":26,"./$.wks":59}],26:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],27:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.a-function":22}],29:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":27,"./$.global":33}],30:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],31:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":46}],32:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],33:[function(require,module,exports){
var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
module.exports = global;
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],35:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":46,"./$.property-desc":49,"./$.support-desc":53}],36:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":26}],37:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":45,"./$.wks":59}],38:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./$.is-object')
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./$.is-object":39}],39:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],40:[function(require,module,exports){
// Safari has buggy iterators w/o `next`
module.exports = 'keys' in [] && !('next' in [].keys());
},{}],41:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":23}],42:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":46,"./$.hide":35,"./$.property-desc":49,"./$.tag":54,"./$.wks":59}],43:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
var returnThis = function(){ return this; };
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  var createMethod = function(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * require('./$.iter-buggy'), NAME, methods);
  }
};
},{"./$":46,"./$.def":29,"./$.has":34,"./$.hide":35,"./$.iter-buggy":40,"./$.iter-create":42,"./$.iterators":45,"./$.library":47,"./$.redef":50,"./$.tag":54,"./$.wks":59}],44:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":59}],45:[function(require,module,exports){
module.exports = {};
},{}],46:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],47:[function(require,module,exports){
module.exports = true;
},{}],48:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":27,"./$.def":29,"./$.fails":32}],49:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],50:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":35}],51:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":33}],52:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":30,"./$.to-integer":55}],53:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":32}],54:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":34,"./$.hide":35,"./$.wks":59}],55:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],56:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":55}],57:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":30}],58:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],59:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":33,"./$.shared":51,"./$.uid":58}],60:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":25,"./$.core":27,"./$.iterators":45,"./$.wks":59}],61:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $def        = require('./$.def')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      for(result = new C(length = toLength(O.length)); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$.ctx":28,"./$.def":29,"./$.is-array-iter":37,"./$.iter-call":41,"./$.iter-detect":44,"./$.to-length":56,"./$.to-object":57,"./core.get-iterator-method":60}],62:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $def = require('./$.def');

$def($def.S, 'Number', {isInteger: require('./$.is-integer')});
},{"./$.def":29,"./$.is-integer":38}],63:[function(require,module,exports){
// 20.1.2.13 Number.parseInt(string, radix)
var $def = require('./$.def');

$def($def.S, 'Number', {parseInt: parseInt});
},{"./$.def":29}],64:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":24,"./$.def":29}],65:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":39,"./$.object-sap":48}],66:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":43,"./$.string-at":52}],67:[function(require,module,exports){

},{}],68:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],69:[function(require,module,exports){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
},{"process/browser.js":68}],70:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],71:[function(require,module,exports){
var Duration = (function () {

    var millisecond = 1,
        second      = 1000 * millisecond,
        minute      = 60   * second,
        hour        = 60   * minute,
        day         = 24   * hour,
        week        = 7    * day;

    var unitMap = {
        "ms" : millisecond,
        "s"  : second,
        "m"  : minute,
        "h"  : hour,
        "d"  : day,
        "w"  : week
    };

    var Duration = function (value) {
        if (value instanceof Duration) {
          return value;
        }
        switch (typeof value) {
            case "number":
                this._milliseconds = value;
                break;
            case "string":
                this._milliseconds = Duration.parse(value).valueOf();
                break;
            case "undefined":
                this._milliseconds = 0;
                break;
            default:
                throw new Error("invalid duration: " + value);
        }
    };

    Duration.millisecond = new Duration(millisecond);
    Duration.second      = new Duration(second);
    Duration.minute      = new Duration(minute);
    Duration.hour        = new Duration(hour);
    Duration.day         = new Duration(day);
    Duration.week        = new Duration(week);

    Duration.prototype.nanoseconds = function () {
        return this._milliseconds * 1000000;
    };

    Duration.prototype.microseconds = function () {
        return this._milliseconds * 1000;
    };

    Duration.prototype.milliseconds = function () {
        return this._milliseconds;
    };

    Duration.prototype.seconds = function () {
        return Math.floor(this._milliseconds / second);
    };

    Duration.prototype.minutes = function () {
        return Math.floor(this._milliseconds / minute);
    };

    Duration.prototype.hours = function () {
        return Math.floor(this._milliseconds / hour);
    };

    Duration.prototype.days = function () {
      return Math.floor(this._milliseconds / day);
    };

    Duration.prototype.weeks = function () {
      return Math.floor(this._milliseconds / week);
    };

    Duration.prototype.toString = function () {
      var str          = "",
          milliseconds = Math.abs(this._milliseconds),
          sign         = this._milliseconds < 0 ? "-" : "";

      // no units for 0 duration
      if (milliseconds === 0) {
        return "0";
      }

      // days
      var days = Math.floor(milliseconds / day);
      if (days !== 0) {
        milliseconds -= day * days;
        str += days.toString() + "d";
      }

      // hours
      var hours = Math.floor(milliseconds / hour);
      if (hours !== 0) {
        milliseconds -= hour * hours;
        str += hours.toString() + "h";
      }

      // minutes
      var minutes = Math.floor(milliseconds / minute);
      if (minutes !== 0) {
        milliseconds -= minute * minutes;
        str += minutes.toString() + "m";
      }

      // seconds
      var seconds = Math.floor(milliseconds / second);
      if (seconds !== 0) {
        milliseconds -= second * seconds;
        str += seconds.toString() + "s";
      }

      // milliseconds
      if (milliseconds !== 0) {
        str += milliseconds.toString() + "ms";
      }

      return sign + str;
    };

    Duration.prototype.valueOf = function () {
      return this._milliseconds;
    };

    Duration.parse = function (duration) {

        if (duration === "0" || duration === "+0" || duration === "-0") {
          return new Duration(0);
        }

        var regex = /([\-\+\d\.]+)([a-z]+)/g,
            total = 0,
            count = 0,
            sign  = duration[0] === '-' ? -1 : 1,
            unit, value, match;

        while (match = regex.exec(duration)) {

            unit  = match[2];
            value = Math.abs(parseFloat(match[1]));
            count++;

            if (isNaN(value)) {
              throw new Error("invalid duration");
            }

            if (typeof unitMap[unit] === "undefined") {
              throw new Error("invalid unit: " + unit);
            }

            total += value * unitMap[unit];
        }

        if (count === 0) {
          throw new Error("invalid duration");
        }

        return new Duration(total * sign);
    };

    Duration.fromMicroseconds = function (us) {
        var ms = Math.floor(us / 1000);
        return new Duration(ms);
    };

    Duration.fromNanoseconds = function (ns) {
        var ms = Math.floor(ns / 1000000);
        return new Duration(ms);
    };

    return Duration;

}).call(this);

if (typeof module !== "undefined") {
   module.exports = Duration;
}

},{}],72:[function(require,module,exports){
/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ? 
			'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.1.3',

	_init: function () {
		this._initEvents();

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		}

// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;

// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
},{}],73:[function(require,module,exports){
/**
 * mainloop.js 1.0.1-20150816
 *
 * @author Isaac Sukin (http://www.isaacsukin.com/)
 * @license MIT
 */

!function(a){function b(a){if(e+j>a)return u=n(b),void 0;for(d+=a-e,e=a,q(a,d),a>g+1e3&&(f=.25*h+.75*f,g=a,h=0),h++,i=0;d>=c;)if(r(c),d-=c,++i>=240){m=!0;break}s(d/c),t(f,m),m=!1,u=n(b)}var c=1e3/60,d=0,e=0,f=60,g=0,h=0,i=0,j=0,k=!1,l=!1,m=!1,n=a.requestAnimationFrame||function(){var a=Date.now(),b,d;return function(e){return b=Date.now(),d=Math.max(0,c-(b-a)),a=b+d,setTimeout(function(){e(b+d)},d)}}(),o=a.cancelAnimationFrame||clearTimeout,p=function(){},q=p,r=p,s=p,t=p,u;a.MainLoop={getSimulationTimestep:function(){return c},setSimulationTimestep:function(a){return c=a,this},getFPS:function(){return f},getMaxAllowedFPS:function(){return 1e3/j},setMaxAllowedFPS:function(a){return"undefined"==typeof a&&(a=1/0),0===a?this.stop():j=1e3/a,this},resetFrameDelta:function(){var a=d;return d=0,a},setBegin:function(a){return q=a||q,this},setUpdate:function(a){return r=a||r,this},setDraw:function(a){return s=a||s,this},setEnd:function(a){return t=a||t,this},start:function(){return l||(l=!0,u=n(function(a){s(1),k=!0,e=a,g=a,h=0,u=n(b)})),this},stop:function(){return k=!1,l=!1,o(u),this},isRunning:function(){return k}},"function"==typeof define&&define.amd?define(a.MainLoop):"object"==typeof exports&&(module.exports=a.MainLoop)}(this);

},{}],74:[function(require,module,exports){
// Support for asynchronous functions

'use strict';

var aFrom        = require('es5-ext/array/from')
  , mixin        = require('es5-ext/object/mixin')
  , defineLength = require('es5-ext/function/_define-length')
  , nextTick     = require('next-tick')

  , slice = Array.prototype.slice
  , apply = Function.prototype.apply, create = Object.create
  , hasOwnProperty = Object.prototype.hasOwnProperty;

require('../lib/registered-extensions').async = function (tbi, conf) {
	var waiting = create(null), cache = create(null)
	  , base = conf.memoized, original = conf.original
	  , currentCallback, currentContext, currentArgs;

	// Initial
	conf.memoized = defineLength(function (arg) {
		var args = arguments, last = args[args.length - 1];
		if (typeof last === 'function') {
			currentCallback = last;
			args = slice.call(args, 0, -1);
		}
		return base.apply(currentContext = this, currentArgs = args);
	}, base);
	try { mixin(conf.memoized, base); } catch (ignore) {}

	// From cache (sync)
	conf.on('get', function (id) {
		var cb, context, args;
		if (!currentCallback) return;

		// Unresolved
		if (waiting[id]) {
			if (typeof waiting[id] === 'function') waiting[id] = [waiting[id], currentCallback];
			else waiting[id].push(currentCallback);
			currentCallback = null;
			return;
		}

		// Resolved, assure next tick invocation
		cb = currentCallback;
		context = currentContext;
		args = currentArgs;
		currentCallback = currentContext = currentArgs = null;
		nextTick(function () {
			var data;
			if (hasOwnProperty.call(cache, id)) {
				data = cache[id];
				conf.emit('getasync', id, args, context);
				apply.call(cb, data.context, data.args);
			} else {
				// Purged in a meantime, we shouldn't rely on cached value, recall
				currentCallback = cb;
				currentContext = context;
				currentArgs = args;
				base.apply(context, args);
			}
		});
	});

	// Not from cache
	conf.original = function () {
		var args, cb, origCb, result;
		if (!currentCallback) return apply.call(original, this, arguments);
		args = aFrom(arguments);
		cb = function self(err) {
			var cb, args, id = self.id;
			if (id == null) {
				// Shouldn't happen, means async callback was called sync way
				nextTick(apply.bind(self, this, arguments));
				return;
			}
			delete self.id;
			cb = waiting[id];
			delete waiting[id];
			if (!cb) {
				// Already processed,
				// outcome of race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)
				return;
			}
			args = aFrom(arguments);
			if (conf.has(id)) {
				if (err) {
					conf.delete(id);
				} else {
					cache[id] = { context: this, args: args };
					conf.emit('setasync', id, (typeof cb === 'function') ? 1 : cb.length);
				}
			}
			if (typeof cb === 'function') {
				result = apply.call(cb, this, args);
			} else {
				cb.forEach(function (cb) { result = apply.call(cb, this, args); }, this);
			}
			return result;
		};
		origCb = currentCallback;
		currentCallback = currentContext = currentArgs = null;
		args.push(cb);
		result = apply.call(original, this, args);
		cb.cb = origCb;
		currentCallback = cb;
		return result;
	};

	// After not from cache call
	conf.on('set', function (id) {
		if (!currentCallback) {
			conf.delete(id);
			return;
		}
		if (waiting[id]) {
			// Race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)
			if (typeof waiting[id] === 'function') waiting[id] = [waiting[id], currentCallback.cb];
			else waiting[id].push(currentCallback.cb);
		} else {
			waiting[id] = currentCallback.cb;
		}
		delete currentCallback.cb;
		currentCallback.id = id;
		currentCallback = null;
	});

	// On delete
	conf.on('delete', function (id) {
		var result;
		// If false, we don't have value yet, so we assume that intention is not
		// to memoize this call. After value is obtained we don't cache it but
		// gracefully pass to callback
		if (hasOwnProperty.call(waiting, id)) return;
		if (!cache[id]) return;
		result = cache[id];
		delete cache[id];
		conf.emit('deleteasync', id, result);
	});

	// On clear
	conf.on('clear', function () {
		var oldCache = cache;
		cache = create(null);
		conf.emit('clearasync', oldCache);
	});
};

},{"../lib/registered-extensions":81,"es5-ext/array/from":87,"es5-ext/function/_define-length":92,"es5-ext/object/mixin":115,"next-tick":125}],75:[function(require,module,exports){
// Call dispose callback on each cache purge

'use strict';

var callable   = require('es5-ext/object/valid-callable')
  , forEach    = require('es5-ext/object/for-each')
  , extensions = require('../lib/registered-extensions')

  , slice = Array.prototype.slice, apply = Function.prototype.apply;

extensions.dispose = function (dispose, conf, options) {
	var del;
	callable(dispose);
	if (options.async && extensions.async) {
		conf.on('deleteasync', del = function (id, result) {
			apply.call(dispose, null, slice.call(result.args, 1));
		});
		conf.on('clearasync', function (cache) {
			forEach(cache, function (result, id) { del(id, result); });
		});
		return;
	}
	conf.on('delete', del = function (id, result) { dispose(result); });
	conf.on('clear', function (cache) {
		forEach(cache, function (result, id) { del(id, result); });
	});
};

},{"../lib/registered-extensions":81,"es5-ext/object/for-each":110,"es5-ext/object/valid-callable":117}],76:[function(require,module,exports){
// Timeout cached values

'use strict';

var aFrom      = require('es5-ext/array/from')
  , noop       = require('es5-ext/function/noop')
  , forEach    = require('es5-ext/object/for-each')
  , timeout    = require('timers-ext/valid-timeout')
  , extensions = require('../lib/registered-extensions')

  , max = Math.max, min = Math.min, create = Object.create;

extensions.maxAge = function (maxAge, conf, options) {
	var timeouts, postfix, preFetchAge, preFetchTimeouts;

	maxAge = timeout(maxAge);
	if (!maxAge) return;

	timeouts = create(null);
	postfix = (options.async && extensions.async) ? 'async' : '';
	conf.on('set' + postfix, function (id) {
		timeouts[id] = setTimeout(function () { conf.delete(id); }, maxAge);
		if (!preFetchTimeouts) return;
		if (preFetchTimeouts[id]) clearTimeout(preFetchTimeouts[id]);
		preFetchTimeouts[id] = setTimeout(function () {
			delete preFetchTimeouts[id];
		}, preFetchAge);
	});
	conf.on('delete' + postfix, function (id) {
		clearTimeout(timeouts[id]);
		delete timeouts[id];
		if (!preFetchTimeouts) return;
		clearTimeout(preFetchTimeouts[id]);
		delete preFetchTimeouts[id];
	});

	if (options.preFetch) {
		if ((options.preFetch === true) || isNaN(options.preFetch)) {
			preFetchAge = 0.333;
		} else {
			preFetchAge = max(min(Number(options.preFetch), 1), 0);
		}
		if (preFetchAge) {
			preFetchTimeouts = {};
			preFetchAge = (1 - preFetchAge) * maxAge;
			conf.on('get' + postfix, function (id, args, context) {
				if (!preFetchTimeouts[id]) {
					preFetchTimeouts[id] =  setTimeout(function () {
						delete preFetchTimeouts[id];
						conf.delete(id);
						if (options.async) {
							args = aFrom(args);
							args.push(noop);
						}
						conf.memoized.apply(context, args);
					}, 0);
				}
			});
		}
	}

	conf.on('clear' + postfix, function () {
		forEach(timeouts, function (id) { clearTimeout(id); });
		timeouts = {};
		if (preFetchTimeouts) {
			forEach(preFetchTimeouts, function (id) { clearTimeout(id); });
			preFetchTimeouts = {};
		}
	});
};

},{"../lib/registered-extensions":81,"es5-ext/array/from":87,"es5-ext/function/noop":95,"es5-ext/object/for-each":110,"timers-ext/valid-timeout":127}],77:[function(require,module,exports){
// Limit cache size, LRU (least recently used) algorithm.

'use strict';

var toPosInteger = require('es5-ext/number/to-pos-integer')
  , lruQueue     = require('lru-queue')
  , extensions   = require('../lib/registered-extensions');

extensions.max = function (max, conf, options) {
	var postfix, queue, hit;

	max = toPosInteger(max);
	if (!max) return;

	queue = lruQueue(max);
	postfix = (options.async && extensions.async) ? 'async' : '';

	conf.on('set' + postfix, hit = function (id) {
		id = queue.hit(id);
		if (id === undefined) return;
		conf.delete(id);
	});
	conf.on('get' + postfix, hit);
	conf.on('delete' + postfix, queue.delete);
	conf.on('clear' + postfix, queue.clear);
};

},{"../lib/registered-extensions":81,"es5-ext/number/to-pos-integer":105,"lru-queue":124}],78:[function(require,module,exports){
// Reference counter, useful for garbage collector like functionality

'use strict';

var d          = require('d')
  , extensions = require('../lib/registered-extensions')

  , create = Object.create, defineProperties = Object.defineProperties;

extensions.refCounter = function (ignore, conf, options) {
	var cache, postfix;

	cache = create(null);
	postfix = (options.async && extensions.async) ? 'async' : '';

	conf.on('set' + postfix, function (id, length) { cache[id] = length || 1; });
	conf.on('get' + postfix, function (id) { ++cache[id]; });
	conf.on('delete' + postfix, function (id) { delete cache[id]; });
	conf.on('clear' + postfix, function () { cache = {}; });

	defineProperties(conf.memoized, {
		deleteRef: d(function () {
			var id = conf.get(arguments);
			if (id === null) return null;
			if (!cache[id]) return null;
			if (!--cache[id]) {
				conf.delete(id);
				return true;
			}
			return false;
		}),
		getRefCount: d(function () {
			var id = conf.get(arguments);
			if (id === null) return 0;
			if (!cache[id]) return 0;
			return cache[id];
		})
	});
};

},{"../lib/registered-extensions":81,"d":85}],79:[function(require,module,exports){
'use strict';

var normalizeOpts = require('es5-ext/object/normalize-options')
  , resolveLength = require('./lib/resolve-length')
  , plain         = require('./plain');

module.exports = function (fn/*, options*/) {
	var options = normalizeOpts(arguments[1]), length;

	if (!options.normalizer) {
		length = options.length = resolveLength(options.length, fn.length, options.async);
		if (length !== 0) {
			if (options.primitive) {
				if (length === false) {
					options.normalizer = require('./normalizers/primitive');
				} else if (length > 1) {
					options.normalizer = require('./normalizers/get-primitive-fixed')(length);
				}
			} else {
				if (length === false) options.normalizer = require('./normalizers/get')();
				else if (length === 1) options.normalizer = require('./normalizers/get-1')();
				else options.normalizer = require('./normalizers/get-fixed')(length);
			}
		}
	}

	// Assure extensions
	if (options.async) require('./ext/async');
	if (options.dispose) require('./ext/dispose');
	if (options.maxAge) require('./ext/max-age');
	if (options.max) require('./ext/max');
	if (options.refCounter) require('./ext/ref-counter');

	return plain(fn, options);
};

},{"./ext/async":74,"./ext/dispose":75,"./ext/max":77,"./ext/max-age":76,"./ext/ref-counter":78,"./lib/resolve-length":82,"./normalizers/get":131,"./normalizers/get-1":128,"./normalizers/get-fixed":129,"./normalizers/get-primitive-fixed":130,"./normalizers/primitive":132,"./plain":133,"es5-ext/object/normalize-options":116}],80:[function(require,module,exports){
'use strict';

var customError      = require('es5-ext/error/custom')
  , defineLength     = require('es5-ext/function/_define-length')
  , d                = require('d')
  , ee               = require('event-emitter').methods
  , resolveResolve   = require('./resolve-resolve')
  , resolveNormalize = require('./resolve-normalize')

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, hasOwnProperty = Object.prototype.hasOwnProperty
  , defineProperties = Object.defineProperties
  , on = ee.on, emit = ee.emit;

module.exports = function (original, length, options) {
	var cache = create(null), conf, memLength, get, set, del, clear, extDel, normalizer
	  , getListeners, setListeners, deleteListeners, memoized, resolve;
	if (length !== false) memLength = length;
	else if (isNaN(original.length)) memLength = 1;
	else memLength = original.length;

	if (options.normalizer) {
		normalizer = resolveNormalize(options.normalizer);
		get = normalizer.get;
		set = normalizer.set;
		del = normalizer.delete;
		clear = normalizer.clear;
	}
	if (options.resolvers != null) resolve = resolveResolve(options.resolvers);

	if (get) {
		memoized = defineLength(function (arg) {
			var id, result, args = arguments;
			if (resolve) args = resolve(args);
			id = get(args);
			if (id !== null) {
				if (hasOwnProperty.call(cache, id)) {
					if (getListeners) conf.emit('get', id, args, this);
					return cache[id];
				}
			}
			if (args.length === 1) result = call.call(original, this, arg);
			else result = apply.call(original, this, args);
			if (id === null) {
				id = get(args);
				if (id !== null) throw customError("Circular invocation", 'CIRCULAR_INVOCATION');
				id = set(args);
			} else if (hasOwnProperty.call(cache, id)) {
				throw customError("Circular invocation", 'CIRCULAR_INVOCATION');
			}
			cache[id] = result;
			if (setListeners) conf.emit('set', id);
			return result;
		}, memLength);
	} else if (length === 0) {
		memoized = function () {
			var result;
			if (hasOwnProperty.call(cache, 'data')) {
				if (getListeners) conf.emit('get', 'data', arguments, this);
				return cache.data;
			}
			if (!arguments.length) result = call.call(original, this);
			else result = apply.call(original, this, arguments);
			if (hasOwnProperty.call(cache, 'data')) {
				throw customError("Circular invocation", 'CIRCULAR_INVOCATION');
			}
			cache.data = result;
			if (setListeners) conf.emit('set', 'data');
			return result;
		};
	} else {
		memoized = function (arg) {
			var result, args = arguments, id;
			if (resolve) args = resolve(arguments);
			id = String(args[0]);
			if (hasOwnProperty.call(cache, id)) {
				if (getListeners) conf.emit('get', id, args, this);
				return cache[id];
			}
			if (args.length === 1) result = call.call(original, this, args[0]);
			else result = apply.call(original, this, args);
			if (hasOwnProperty.call(cache, id)) {
				throw customError("Circular invocation", 'CIRCULAR_INVOCATION');
			}
			cache[id] = result;
			if (setListeners) conf.emit('set', id);
			return result;
		};
	}
	conf = {
		original: original,
		memoized: memoized,
		get: function (args) {
			if (resolve) args = resolve(args);
			if (get) return get(args);
			return String(args[0]);
		},
		has: function (id) { return hasOwnProperty.call(cache, id); },
		delete: function (id) {
			var result;
			if (!hasOwnProperty.call(cache, id)) return;
			if (del) del(id);
			result = cache[id];
			delete cache[id];
			if (deleteListeners) conf.emit('delete', id, result);
		},
		clear: function () {
			var oldCache = cache;
			if (clear) clear();
			cache = create(null);
			conf.emit('clear', oldCache);
		},
		on: function (type, listener) {
			if (type === 'get') getListeners = true;
			else if (type === 'set') setListeners = true;
			else if (type === 'delete') deleteListeners = true;
			return on.call(this, type, listener);
		},
		emit: emit,
		updateEnv: function () { original = conf.original; }
	};
	if (get) {
		extDel = defineLength(function (arg) {
			var id, args = arguments;
			if (resolve) args = resolve(args);
			id = get(args);
			if (id === null) return;
			conf.delete(id);
		}, memLength);
	} else if (length === 0) {
		extDel = function () { return conf.delete('data'); };
	} else {
		extDel = function (arg) {
			if (resolve) arg = resolve(arguments)[0];
			return conf.delete(arg);
		};
	}
	defineProperties(memoized, {
		__memoized__: d(true),
		delete: d(extDel),
		clear: d(conf.clear)
	});
	return conf;
};

},{"./resolve-normalize":83,"./resolve-resolve":84,"d":85,"es5-ext/error/custom":91,"es5-ext/function/_define-length":92,"event-emitter":123}],81:[function(require,module,exports){
'use strict';

},{}],82:[function(require,module,exports){
'use strict';

var toPosInt = require('es5-ext/number/to-pos-integer');

module.exports = function (optsLength, fnLength, isAsync) {
	var length;
	if (isNaN(optsLength)) {
		length = fnLength;
		if (!(length >= 0)) return 1;
		if (isAsync && length) return length - 1;
		return length;
	}
	if (optsLength === false) return false;
	return toPosInt(optsLength);
};

},{"es5-ext/number/to-pos-integer":105}],83:[function(require,module,exports){
'use strict';

var callable = require('es5-ext/object/valid-callable');

module.exports = function (userNormalizer) {
	var normalizer;
	if (typeof userNormalizer === 'function') return { set: userNormalizer, get: userNormalizer };
	normalizer = { get: callable(userNormalizer.get) };
	if (userNormalizer.set !== undefined) {
		normalizer.set = callable(userNormalizer.set);
		normalizer.delete = callable(userNormalizer.delete);
		normalizer.clear = callable(userNormalizer.clear);
		return normalizer;
	}
	normalizer.set = normalizer.get;
	return normalizer;
};

},{"es5-ext/object/valid-callable":117}],84:[function(require,module,exports){
'use strict';

var toArray  = require('es5-ext/array/to-array')
  , callable = require('es5-ext/object/valid-callable')

  , slice = Array.prototype.slice
  , resolveArgs;

resolveArgs = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

module.exports = function (resolvers) {
	resolvers = toArray(resolvers);
	resolvers.forEach(function (r) {
		if (r != null) callable(r);
	});
	return resolveArgs.bind(resolvers);
};

},{"es5-ext/array/to-array":90,"es5-ext/object/valid-callable":117}],85:[function(require,module,exports){
'use strict';

var assign        = require('es5-ext/object/assign')
  , normalizeOpts = require('es5-ext/object/normalize-options')
  , isCallable    = require('es5-ext/object/is-callable')
  , contains      = require('es5-ext/string/#/contains')

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

},{"es5-ext/object/assign":107,"es5-ext/object/is-callable":111,"es5-ext/object/normalize-options":116,"es5-ext/string/#/contains":119}],86:[function(require,module,exports){
'use strict';

var toPosInt = require('../../number/to-pos-integer')
  , value    = require('../../object/valid-value')

  , indexOf = Array.prototype.indexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , abs = Math.abs, floor = Math.floor;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, l, fromIndex, val;
	if (searchElement === searchElement) { //jslint: ignore
		return indexOf.apply(this, arguments);
	}

	l = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < l; ++i) {
		if (hasOwnProperty.call(this, i)) {
			val = this[i];
			if (val !== val) return i; //jslint: ignore
		}
	}
	return -1;
};

},{"../../number/to-pos-integer":105,"../../object/valid-value":118}],87:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')()
	? Array.from
	: require('./shim');

},{"./is-implemented":88,"./shim":89}],88:[function(require,module,exports){
'use strict';

module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== 'function') return false;
	arr = ['raz', 'dwa'];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === 'dwa'));
};

},{}],89:[function(require,module,exports){
'use strict';

var iteratorSymbol = require('es6-symbol').iterator
  , isArguments    = require('../../function/is-arguments')
  , isFunction     = require('../../function/is-function')
  , toPosInt       = require('../../number/to-pos-integer')
  , callable       = require('../../object/valid-callable')
  , validValue     = require('../../object/valid-value')
  , isString       = require('../../string/is-string')

  , isArray = Array.isArray, call = Function.prototype.call
  , desc = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1], thisArg = arguments[2], Constructor, i, j, arr, l, code, iterator
	  , result, getIterator, value;

	arrayLike = Object(validValue(arrayLike));

	if (mapFn != null) callable(mapFn);
	if (!this || (this === Array) || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				l = arrayLike.length;
				if (l !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array(l = arrayLike.length);
				for (i = 0; i < l; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Constructor = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Constructor) arr = new Constructor();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (!Constructor) {
					arr[i] = value;
				} else {
					desc.value = value;
					defineProperty(arr, i, desc);
				}
				result = iterator.next();
				++i;
			}
			l = i;
		} else if (isString(arrayLike)) {
			// Source: String
			l = arrayLike.length;
			if (Constructor) arr = new Constructor();
			for (i = 0, j = 0; i < l; ++i) {
				value = arrayLike[i];
				if ((i + 1) < l) {
					code = value.charCodeAt(0);
					if ((code >= 0xD800) && (code <= 0xDBFF)) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (!Constructor) {
					arr[j] = value;
				} else {
					desc.value = value;
					defineProperty(arr, j, desc);
				}
				++j;
			}
			l = j;
		}
	}
	if (l === undefined) {
		// Source: array or array-like
		l = toPosInt(arrayLike.length);
		if (Constructor) arr = new Constructor(l);
		for (i = 0; i < l; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (!Constructor) {
				arr[i] = value;
			} else {
				desc.value = value;
				defineProperty(arr, i, desc);
			}
		}
	}
	if (Constructor) {
		desc.value = null;
		arr.length = l;
	}
	return arr;
};

},{"../../function/is-arguments":93,"../../function/is-function":94,"../../number/to-pos-integer":105,"../../object/valid-callable":117,"../../object/valid-value":118,"../../string/is-string":122,"es6-symbol":99}],90:[function(require,module,exports){
'use strict';

var from = require('./from')

  , isArray = Array.isArray;

module.exports = function (arrayLike) {
	return isArray(arrayLike) ? arrayLike : from(arrayLike);
};

},{"./from":87}],91:[function(require,module,exports){
'use strict';

var assign = require('../object/assign')

  , captureStackTrace = Error.captureStackTrace;

exports = module.exports = function (message/*, code, ext*/) {
	var err = new Error(), code = arguments[1], ext = arguments[2];
	if (ext == null) {
		if (code && (typeof code === 'object')) {
			ext = code;
			code = null;
		}
	}
	if (ext != null) assign(err, ext);
	err.message = String(message);
	if (code != null) err.code = String(code);
	if (captureStackTrace) captureStackTrace(err, exports);
	return err;
};

},{"../object/assign":107}],92:[function(require,module,exports){
'use strict';

var toPosInt = require('../number/to-pos-integer')

  , test = function (a, b) {}, desc, defineProperty
  , generate, mixin;

try {
	Object.defineProperty(test, 'length', { configurable: true, writable: false,
		enumerable: false, value: 1 });
} catch (ignore) {}

if (test.length === 1) {
	// ES6
	desc = { configurable: true, writable: false, enumerable: false };
	defineProperty = Object.defineProperty;
	module.exports = function (fn, length) {
		length = toPosInt(length);
		if (fn.length === length) return fn;
		desc.value = length;
		return defineProperty(fn, 'length', desc);
	};
} else {
	mixin = require('../object/mixin');
	generate = (function () {
		var cache = [];
		return function (l) {
			var args, i = 0;
			if (cache[l]) return cache[l];
			args = [];
			while (l--) args.push('a' + (++i).toString(36));
			return new Function('fn', 'return function (' + args.join(', ') +
				') { return fn.apply(this, arguments); };');
		};
	}());
	module.exports = function (src, length) {
		var target;
		length = toPosInt(length);
		if (src.length === length) return src;
		target = generate(length)(src);
		try { mixin(target, src); } catch (ignore) {}
		return target;
	};
}

},{"../number/to-pos-integer":105,"../object/mixin":115}],93:[function(require,module,exports){
'use strict';

var toString = Object.prototype.toString

  , id = toString.call((function () { return arguments; }()));

module.exports = function (x) { return (toString.call(x) === id); };

},{}],94:[function(require,module,exports){
'use strict';

var toString = Object.prototype.toString

  , id = toString.call(require('./noop'));

module.exports = function (f) {
	return (typeof f === "function") && (toString.call(f) === id);
};

},{"./noop":95}],95:[function(require,module,exports){
'use strict';

module.exports = function () {};

},{}],96:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')()
	? Math.sign
	: require('./shim');

},{"./is-implemented":97,"./shim":98}],97:[function(require,module,exports){
'use strict';

module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== 'function') return false;
	return ((sign(10) === 1) && (sign(-20) === -1));
};

},{}],98:[function(require,module,exports){
'use strict';

module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return (value > 0) ? 1 : -1;
};

},{}],99:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')() ? Symbol : require('./polyfill');

},{"./is-implemented":100,"./polyfill":102}],100:[function(require,module,exports){
'use strict';

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }
	if (typeof Symbol.iterator === 'symbol') return true;

	// Return 'true' for polyfills
	if (typeof Symbol.isConcatSpreadable !== 'object') return false;
	if (typeof Symbol.iterator !== 'object') return false;
	if (typeof Symbol.toPrimitive !== 'object') return false;
	if (typeof Symbol.toStringTag !== 'object') return false;
	if (typeof Symbol.unscopables !== 'object') return false;

	return true;
};

},{}],101:[function(require,module,exports){
'use strict';

module.exports = function (x) {
	return (x && ((typeof x === 'symbol') || (x['@@toStringTag'] === 'Symbol'))) || false;
};

},{}],102:[function(require,module,exports){
'use strict';

var d              = require('d')
  , validateSymbol = require('./validate-symbol')

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , Symbol, HiddenSymbol, globalSymbols = create(null);

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			defineProperty(this, name, d(value));
		}));
		return name;
	};
}());

HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
	return Symbol(description);
};
module.exports = Symbol = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(Symbol, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = Symbol(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),
	hasInstance: d('', Symbol('hasInstance')),
	isConcatSpreadable: d('', Symbol('isConcatSpreadable')),
	iterator: d('', Symbol('iterator')),
	match: d('', Symbol('match')),
	replace: d('', Symbol('replace')),
	search: d('', Symbol('search')),
	species: d('', Symbol('species')),
	split: d('', Symbol('split')),
	toPrimitive: d('', Symbol('toPrimitive')),
	toStringTag: d('', Symbol('toStringTag')),
	unscopables: d('', Symbol('unscopables'))
});
defineProperties(HiddenSymbol.prototype, {
	constructor: d(Symbol),
	toString: d('', function () { return this.__name__; })
});

defineProperties(Symbol.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(Symbol.prototype, Symbol.toPrimitive, d('',
	function () { return validateSymbol(this); }));
defineProperty(Symbol.prototype, Symbol.toStringTag, d('c', 'Symbol'));

defineProperty(HiddenSymbol.prototype, Symbol.toPrimitive,
	d('c', Symbol.prototype[Symbol.toPrimitive]));
defineProperty(HiddenSymbol.prototype, Symbol.toStringTag,
	d('c', Symbol.prototype[Symbol.toStringTag]));

},{"./validate-symbol":103,"d":85}],103:[function(require,module,exports){
'use strict';

var isSymbol = require('./is-symbol');

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};

},{"./is-symbol":101}],104:[function(require,module,exports){
'use strict';

var sign = require('../math/sign')

  , abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};

},{"../math/sign":96}],105:[function(require,module,exports){
'use strict';

var toInteger = require('./to-integer')

  , max = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };

},{"./to-integer":104}],106:[function(require,module,exports){
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var isCallable = require('./is-callable')
  , callable   = require('./valid-callable')
  , value      = require('./valid-value')

  , call = Function.prototype.call, keys = Object.keys
  , propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb/*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(isCallable(compareFn) ? compareFn.bind(obj) : undefined);
		}
		return list[method](function (key, index) {
			if (!propertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};

},{"./is-callable":111,"./valid-callable":117,"./valid-value":118}],107:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')()
	? Object.assign
	: require('./shim');

},{"./is-implemented":108,"./shim":109}],108:[function(require,module,exports){
'use strict';

module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== 'function') return false;
	obj = { foo: 'raz' };
	assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
	return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
};

},{}],109:[function(require,module,exports){
'use strict';

var keys  = require('../keys')
  , value = require('../valid-value')

  , max = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, l = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try { dest[key] = src[key]; } catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < l; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

},{"../keys":112,"../valid-value":118}],110:[function(require,module,exports){
'use strict';

module.exports = require('./_iterate')('forEach');

},{"./_iterate":106}],111:[function(require,module,exports){
// Deprecated

'use strict';

module.exports = function (obj) { return typeof obj === 'function'; };

},{}],112:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')()
	? Object.keys
	: require('./shim');

},{"./is-implemented":113,"./shim":114}],113:[function(require,module,exports){
'use strict';

module.exports = function () {
	try {
		Object.keys('primitive');
		return true;
	} catch (e) { return false; }
};

},{}],114:[function(require,module,exports){
'use strict';

var keys = Object.keys;

module.exports = function (object) {
	return keys(object == null ? object : Object(object));
};

},{}],115:[function(require,module,exports){
'use strict';

var value = require('./valid-value')

  , defineProperty = Object.defineProperty
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames = Object.getOwnPropertyNames;

module.exports = function (target, source) {
	var error;
	target = Object(value(target));
	getOwnPropertyNames(Object(value(source))).forEach(function (name) {
		try {
			defineProperty(target, name, getOwnPropertyDescriptor(source, name));
		} catch (e) { error = e; }
	});
	if (error !== undefined) throw error;
	return target;
};

},{"./valid-value":118}],116:[function(require,module,exports){
'use strict';

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

module.exports = function (options/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (options == null) return;
		process(Object(options), result);
	});
	return result;
};

},{}],117:[function(require,module,exports){
'use strict';

module.exports = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

},{}],118:[function(require,module,exports){
'use strict';

module.exports = function (value) {
	if (value == null) throw new TypeError("Cannot use null or undefined");
	return value;
};

},{}],119:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')()
	? String.prototype.contains
	: require('./shim');

},{"./is-implemented":120,"./shim":121}],120:[function(require,module,exports){
'use strict';

var str = 'razdwatrzy';

module.exports = function () {
	if (typeof str.contains !== 'function') return false;
	return ((str.contains('dwa') === true) && (str.contains('foo') === false));
};

},{}],121:[function(require,module,exports){
'use strict';

var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

},{}],122:[function(require,module,exports){
'use strict';

var toString = Object.prototype.toString

  , id = toString.call('');

module.exports = function (x) {
	return (typeof x === 'string') || (x && (typeof x === 'object') &&
		((x instanceof String) || (toString.call(x) === id))) || false;
};

},{}],123:[function(require,module,exports){
'use strict';

var d        = require('d')
  , callable = require('es5-ext/object/valid-callable')

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

},{"d":85,"es5-ext/object/valid-callable":117}],124:[function(require,module,exports){
'use strict';

var toPosInt = require('es5-ext/number/to-pos-integer')

  , create = Object.create, hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (limit) {
	var size = 0, base = 1, queue = create(null), map = create(null), index = 0, del;
	limit = toPosInt(limit);
	return {
		hit: function (id) {
			var oldIndex = map[id], nuIndex = ++index;
			queue[nuIndex] = id;
			map[id] = nuIndex;
			if (!oldIndex) {
				++size;
				if (size <= limit) return;
				id = queue[base];
				del(id);
				return id;
			}
			delete queue[oldIndex];
			if (base !== oldIndex) return;
			while (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip
		},
		delete: del = function (id) {
			var oldIndex = map[id];
			if (!oldIndex) return;
			delete queue[oldIndex];
			delete map[id];
			--size;
			if (base !== oldIndex) return;
			if (!size) {
				index = 0;
				base = 1;
				return;
			}
			while (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip
		},
		clear: function () {
			size = 0;
			base = 1;
			queue = create(null);
			map = create(null);
			index = 0;
		}
	};
};

},{"es5-ext/number/to-pos-integer":105}],125:[function(require,module,exports){
(function (process){
'use strict';

var callable, byObserver;

callable = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, i = 0;
	new Observer(function () {
		var data;
		if (!queue) return;
		data = queue;
		queue = null;
		if (typeof data === 'function') {
			data();
			return;
		}
		data.forEach(function (fn) { fn(); });
	}).observe(node, { characterData: true });
	return function (fn) {
		callable(fn);
		if (queue) {
			if (typeof queue === 'function') queue = [queue, fn];
			else queue.push(fn);
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

module.exports = (function () {
	// Node.js
	if ((typeof process !== 'undefined') && process &&
			(typeof process.nextTick === 'function')) {
		return process.nextTick;
	}

	// MutationObserver=
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') {
			return byObserver(MutationObserver);
		}
		if (typeof WebKitMutationObserver === 'function') {
			return byObserver(WebKitMutationObserver);
		}
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(callable(cb)); };
	}

	// Wide available standard
	if (typeof setTimeout === 'function') {
		return function (cb) { setTimeout(callable(cb), 0); };
	}

	return null;
}());

}).call(this,require('_process'))

},{"_process":68}],126:[function(require,module,exports){
'use strict';

module.exports = 2147483647;

},{}],127:[function(require,module,exports){
'use strict';

var toPosInt   = require('es5-ext/number/to-pos-integer')
  , maxTimeout = require('./max-timeout');

module.exports = function (value) {
	value = toPosInt(value);
	if (value > maxTimeout) throw new TypeError(value + " exceeds maximum possible timeout");
	return value;
};

},{"./max-timeout":126,"es5-ext/number/to-pos-integer":105}],128:[function(require,module,exports){
'use strict';

var indexOf = require('es5-ext/array/#/e-index-of');

module.exports = function () {
	var lastId = 0, argsMap = [], cache = [];
	return {
		get: function (args) {
			var index = indexOf.call(argsMap, args[0]);
			return (index === -1) ? null : cache[index];
		},
		set: function (args) {
			argsMap.push(args[0]);
			cache.push(++lastId);
			return lastId;
		},
		delete: function (id) {
			var index = indexOf.call(cache, id);
			if (index !== -1) {
				argsMap.splice(index, 1);
				cache.splice(index, 1);
			}
		},
		clear: function () {
			argsMap = [];
			cache = [];
		}
	};
};

},{"es5-ext/array/#/e-index-of":86}],129:[function(require,module,exports){
'use strict';

var indexOf = require('es5-ext/array/#/e-index-of')
  , create = Object.create;

module.exports = function (length) {
	var lastId = 0, map = [[], []], cache = create(null);
	return {
		get: function (args) {
			var index = 0, set = map, i;
			while (index < (length - 1)) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) return null;
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) return null;
			return set[1][i] || null;
		},
		set: function (args) {
			var index = 0, set = map, i;
			while (index < (length - 1)) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					i = set[0].push(args[index]) - 1;
					set[1].push([[], []]);
				}
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) {
				i = set[0].push(args[index]) - 1;
			}
			set[1][i] = ++lastId;
			cache[lastId] = args;
			return lastId;
		},
		delete: function (id) {
			var index = 0, set = map, i, path = [], args = cache[id];
			while (index < (length - 1)) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					return;
				}
				path.push(set, i);
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) {
				return;
			}
			id = set[1][i];
			set[0].splice(i, 1);
			set[1].splice(i, 1);
			while (!set[0].length && path.length) {
				i = path.pop();
				set = path.pop();
				set[0].splice(i, 1);
				set[1].splice(i, 1);
			}
			delete cache[id];
		},
		clear: function () {
			map = [[], []];
			cache = create(null);
		}
	};
};

},{"es5-ext/array/#/e-index-of":86}],130:[function(require,module,exports){
'use strict';

module.exports = function (length) {
	if (!length) {
		return function () { return ''; };
	}
	return function (args) {
		var id = String(args[0]), i = 0, l = length;
		while (--l) { id += '\u0001' + args[++i]; }
		return id;
	};
};

},{}],131:[function(require,module,exports){
'use strict';

var indexOf = require('es5-ext/array/#/e-index-of')
  , create = Object.create;

module.exports = function () {
	var lastId = 0, map = [], cache = create(null);
	return {
		get: function (args) {
			var index = 0, set = map, i, length = args.length;
			if (length === 0) return set[length] || null;
			if ((set = set[length])) {
				while (index < (length - 1)) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) return null;
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) return null;
				return set[1][i] || null;
			}
			return null;
		},
		set: function (args) {
			var index = 0, set = map, i, length = args.length;
			if (length === 0) {
				set[length] = ++lastId;
			} else {
				if (!set[length]) {
					set[length] = [[], []];
				}
				set = set[length];
				while (index < (length - 1)) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) {
						i = set[0].push(args[index]) - 1;
						set[1].push([[], []]);
					}
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					i = set[0].push(args[index]) - 1;
				}
				set[1][i] = ++lastId;
			}
			cache[lastId] = args;
			return lastId;
		},
		delete: function (id) {
			var index = 0, set = map, i, args = cache[id], length = args.length
			  , path = [];
			if (length === 0) {
				delete set[length];
			} else if ((set = set[length])) {
				while (index < (length - 1)) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) {
						return;
					}
					path.push(set, i);
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					return;
				}
				id = set[1][i];
				set[0].splice(i, 1);
				set[1].splice(i, 1);
				while (!set[0].length && path.length) {
					i = path.pop();
					set = path.pop();
					set[0].splice(i, 1);
					set[1].splice(i, 1);
				}
			}
			delete cache[id];
		},
		clear: function () {
			map = [];
			cache = create(null);
		}
	};
};

},{"es5-ext/array/#/e-index-of":86}],132:[function(require,module,exports){
'use strict';

module.exports = function (args) {
	var id, i, length = args.length;
	if (!length) return '\u0002';
	id = String(args[i = 0]);
	while (--length) id += '\u0001' + args[++i];
	return id;
};

},{}],133:[function(require,module,exports){
'use strict';

var callable      = require('es5-ext/object/valid-callable')
  , forEach       = require('es5-ext/object/for-each')
  , extensions    = require('./lib/registered-extensions')
  , configure     = require('./lib/configure-map')
  , resolveLength = require('./lib/resolve-length')

  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function self(fn/*, options */) {
	var options, length, conf;

	callable(fn);
	options = Object(arguments[1]);

	// Do not memoize already memoized function
	if (hasOwnProperty.call(fn, '__memoized__') && !options.force) return fn;

	// Resolve length;
	length = resolveLength(options.length, fn.length, options.async && extensions.async);

	// Configure cache map
	conf = configure(fn, length, options);

	// Bind eventual extensions
	forEach(extensions, function (fn, name) {
		if (options[name]) fn(options[name], conf, options);
	});

	if (self.__profiler__) self.__profiler__(conf);

	conf.updateEnv();
	return conf.memoized;
};

},{"./lib/configure-map":80,"./lib/registered-extensions":81,"./lib/resolve-length":82,"es5-ext/object/for-each":110,"es5-ext/object/valid-callable":117}],134:[function(require,module,exports){
'use strict';

var SingleEvent = require('geval/single');
var MultipleEvent = require('geval/multiple');
var extend = require('xtend');

/*
    Pro tip: Don't require `mercury` itself.
      require and depend on all these modules directly!
*/
var mercury = module.exports = {
    // Entry
    main: require('main-loop'),
    app: app,

    // Base
    BaseEvent: require('value-event/base-event'),

    // Input
    Delegator: require('dom-delegator'),
    // deprecated: use hg.channels instead.
    input: input,
    // deprecated: use hg.channels instead.
    handles: channels,
    channels: channels,
    // deprecated: use hg.send instead.
    event: require('value-event/event'),
    send: require('value-event/event'),
    // deprecated: use hg.sendValue instead.
    valueEvent: require('value-event/value'),
    sendValue: require('value-event/value'),
    // deprecated: use hg.sendSubmit instead.
    submitEvent: require('value-event/submit'),
    sendSubmit: require('value-event/submit'),
    // deprecated: use hg.sendChange instead.
    changeEvent: require('value-event/change'),
    sendChange: require('value-event/change'),
    // deprecated: use hg.sendKey instead.
    keyEvent: require('value-event/key'),
    sendKey: require('value-event/key'),
    // deprecated use hg.sendClick instead.
    clickEvent: require('value-event/click'),
    sendClick: require('value-event/click'),

    // State
    // remove from core: favor hg.varhash instead.
    array: require('observ-array'),
    struct: require('observ-struct'),
    // deprecated: use hg.struct instead.
    hash: require('observ-struct'),
    varhash: require('observ-varhash'),
    value: require('observ'),
    state: state,

    // Render
    diff: require('virtual-dom/vtree/diff'),
    patch: require('virtual-dom/vdom/patch'),
    partial: require('vdom-thunk'),
    create: require('virtual-dom/vdom/create-element'),
    h: require('virtual-dom/virtual-hyperscript'),

    // Utilities
    // remove from core: require computed directly instead.
    computed: require('observ/computed'),
    // remove from core: require watch directly instead.
    watch: require('observ/watch')
};

function input(names) {
    if (!names) {
        return SingleEvent();
    }

    return MultipleEvent(names);
}

function state(obj) {
    var copy = extend(obj);
    var $channels = copy.channels;
    var $handles = copy.handles;

    if ($channels) {
        copy.channels = mercury.value(null);
    } else if ($handles) {
        copy.handles = mercury.value(null);
    }

    var observ = mercury.struct(copy);
    if ($channels) {
        observ.channels.set(mercury.channels($channels, observ));
    } else if ($handles) {
        observ.handles.set(mercury.channels($handles, observ));
    }
    return observ;
}

function channels(funcs, context) {
    return Object.keys(funcs).reduce(createHandle, {});

    function createHandle(acc, name) {
        var handle = mercury.Delegator.allocateHandle(
            funcs[name].bind(null, context));

        acc[name] = handle;
        return acc;
    }
}

function app(elem, observ, render, opts) {
    mercury.Delegator(opts);
    var loop = mercury.main(observ(), render, extend({
        diff: mercury.diff,
        create: mercury.create,
        patch: mercury.patch
    }, opts));
    if (elem) {
        elem.appendChild(loop.target);
    }
    return observ(loop.update);
}

},{"dom-delegator":137,"geval/multiple":150,"geval/single":151,"main-loop":152,"observ":175,"observ-array":163,"observ-struct":170,"observ-varhash":172,"observ/computed":174,"observ/watch":176,"value-event/base-event":177,"value-event/change":178,"value-event/click":179,"value-event/event":180,"value-event/key":181,"value-event/submit":187,"value-event/value":188,"vdom-thunk":190,"virtual-dom/vdom/create-element":201,"virtual-dom/vdom/patch":204,"virtual-dom/virtual-hyperscript":208,"virtual-dom/vtree/diff":221,"xtend":222}],135:[function(require,module,exports){
var EvStore = require("ev-store")

module.exports = addEvent

function addEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        events[type] = handler
    } else if (Array.isArray(event)) {
        if (event.indexOf(handler) === -1) {
            event.push(handler)
        }
    } else if (event !== handler) {
        events[type] = [event, handler]
    }
}

},{"ev-store":139}],136:[function(require,module,exports){
var globalDocument = require("global/document")
var EvStore = require("ev-store")
var createStore = require("weakmap-shim/create-store")

var addEvent = require("./add-event.js")
var removeEvent = require("./remove-event.js")
var ProxyEvent = require("./proxy-event.js")

var HANDLER_STORE = createStore()

module.exports = DOMDelegator

function DOMDelegator(document) {
    if (!(this instanceof DOMDelegator)) {
        return new DOMDelegator(document);
    }

    document = document || globalDocument

    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.allocateHandle =
    function allocateHandle(func) {
        var handle = new Handle()

        HANDLER_STORE(handle).func = func;

        return handle
    }

DOMDelegator.transformHandle =
    function transformHandle(handle, broadcast) {
        var func = HANDLER_STORE(handle).func

        return this.allocateHandle(function (ev) {
            broadcast(ev, func);
        })
    }

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];
        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }

        this.globalListeners[eventName] = listeners;
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    this.events[eventName]++;

    if (this.events[eventName] !== 1) {
        return
    }

    var listener = this.rawEventListeners[eventName]
    if (!listener) {
        listener = this.rawEventListeners[eventName] =
            createHandler(eventName, this)
    }

    this.target.addEventListener(eventName, listener, true)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    if (this.events[eventName] === 0) {
        throw new Error("already unlistened to event.");
    }

    this.events[eventName]--;

    if (this.events[eventName] !== 0) {
        return
    }

    var listener = this.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    this.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, delegator) {
    var globalListeners = delegator.globalListeners;
    var delegatorTarget = delegator.target;

    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []

        if (globalHandlers.length > 0) {
            var globalEvent = new ProxyEvent(ev);
            globalEvent.currentTarget = delegatorTarget;
            callListeners(globalHandlers, globalEvent)
        }

        findAndInvokeListeners(ev.target, ev, eventName)
    }
}

function findAndInvokeListeners(elem, ev, eventName) {
    var listener = getListener(elem, eventName)

    if (listener && listener.handlers.length > 0) {
        var listenerEvent = new ProxyEvent(ev);
        listenerEvent.currentTarget = listener.currentTarget
        callListeners(listener.handlers, listenerEvent)

        if (listenerEvent._bubbles) {
            var nextTarget = listener.currentTarget.parentNode
            findAndInvokeListeners(nextTarget, ev, eventName)
        }
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null || typeof target === "undefined") {
        return null
    }

    var events = EvStore(target)
    // fetch list of handler fns for this event
    var handler = events[type]
    var allHandler = events.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function callListeners(handlers, ev) {
    handlers.forEach(function (handler) {
        if (typeof handler === "function") {
            handler(ev)
        } else if (typeof handler.handleEvent === "function") {
            handler.handleEvent(ev)
        } else if (handler.type === "dom-delegator-handle") {
            HANDLER_STORE(handler).func(ev)
        } else {
            throw new Error("dom-delegator: unknown handler " +
                "found: " + JSON.stringify(handlers));
        }
    })
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

function Handle() {
    this.type = "dom-delegator-handle"
}

},{"./add-event.js":135,"./proxy-event.js":147,"./remove-event.js":148,"ev-store":139,"global/document":142,"weakmap-shim/create-store":145}],137:[function(require,module,exports){
var Individual = require("individual")
var cuid = require("cuid")
var globalDocument = require("global/document")

var DOMDelegator = require("./dom-delegator.js")

var versionKey = "13"
var cacheKey = "__DOM_DELEGATOR_CACHE@" + versionKey
var cacheTokenKey = "__DOM_DELEGATOR_CACHE_TOKEN@" + versionKey
var delegatorCache = Individual(cacheKey, {
    delegators: {}
})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "select", "submit", "touchcancel",
    "touchend", "touchstart", "unload"
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var document = opts.document || globalDocument

    var cacheKey = document[cacheTokenKey]

    if (!cacheKey) {
        cacheKey =
            document[cacheTokenKey] = cuid()
    }

    var delegator = delegatorCache.delegators[cacheKey]

    if (!delegator) {
        delegator = delegatorCache.delegators[cacheKey] =
            new DOMDelegator(document)
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}

Delegator.allocateHandle = DOMDelegator.allocateHandle;
Delegator.transformHandle = DOMDelegator.transformHandle;

},{"./dom-delegator.js":136,"cuid":138,"global/document":142,"individual":143}],138:[function(require,module,exports){
/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) + 
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (typeof module !== 'undefined') {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));

},{}],139:[function(require,module,exports){
'use strict';

var OneVersionConstraint = require('individual/one-version');

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}

},{"individual/one-version":141}],140:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],141:[function(require,module,exports){
'use strict';

var Individual = require('./index.js');

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}

},{"./index.js":140}],142:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":67}],143:[function(require,module,exports){
(function (global){
var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],144:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],145:[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":146}],146:[function(require,module,exports){
module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}

},{}],147:[function(require,module,exports){
var inherits = require("inherits")

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this._bubbles = false;
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

ProxyEvent.prototype.startPropagation = function () {
    this._bubbles = true;
}

function MouseEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
}

inherits(KeyEvent, ProxyEvent)

},{"inherits":144}],148:[function(require,module,exports){
var EvStore = require("ev-store")

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        return
    } else if (Array.isArray(event)) {
        var index = event.indexOf(handler)
        if (index !== -1) {
            event.splice(index, 1)
        }
    } else if (event === handler) {
        events[type] = null
    }
}

},{"ev-store":139}],149:[function(require,module,exports){
module.exports = Event

function Event() {
    var listeners = []

    return { broadcast: broadcast, listen: event }

    function broadcast(value) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](value)
        }
    }

    function event(listener) {
        listeners.push(listener)

        return removeListener

        function removeListener() {
            var index = listeners.indexOf(listener)
            if (index !== -1) {
                listeners.splice(index, 1)
            }
        }
    }
}

},{}],150:[function(require,module,exports){
var event = require("./single.js")

module.exports = multiple

function multiple(names) {
    return names.reduce(function (acc, name) {
        acc[name] = event()
        return acc
    }, {})
}

},{"./single.js":151}],151:[function(require,module,exports){
var Event = require('./event.js')

module.exports = Single

function Single() {
    var tuple = Event()

    return function event(value) {
        if (typeof value === "function") {
            return tuple.listen(value)
        } else {
            return tuple.broadcast(value)
        }
    }
}

},{"./event.js":149}],152:[function(require,module,exports){
var raf = require("raf")
var TypedError = require("error/typed")

var InvalidUpdateInRender = TypedError({
    type: "main-loop.invalid.update.in-render",
    message: "main-loop: Unexpected update occurred in loop.\n" +
        "We are currently rendering a view, " +
            "you can't change state right now.\n" +
        "The diff is: {stringDiff}.\n" +
        "SUGGESTED FIX: find the state mutation in your view " +
            "or rendering function and remove it.\n" +
        "The view should not have any side effects.\n",
    diff: null,
    stringDiff: null
})

module.exports = main

function main(initialState, view, opts) {
    opts = opts || {}

    var currentState = initialState
    var create = opts.create
    var diff = opts.diff
    var patch = opts.patch
    var redrawScheduled = false

    var tree = opts.initialTree || view(currentState)
    var target = opts.target || create(tree, opts)
    var inRenderingTransaction = false

    currentState = null

    return {
        target: target,
        update: update
    }

    function update(state) {
        if (inRenderingTransaction) {
            throw InvalidUpdateInRender({
                diff: state._diff,
                stringDiff: JSON.stringify(state._diff)
            })
        }

        if (currentState === null && !redrawScheduled) {
            redrawScheduled = true
            raf(redraw)
        }

        currentState = state
    }

    function redraw() {
        redrawScheduled = false;
        if (currentState === null) {
            return
        }

        inRenderingTransaction = true
        var newTree = view(currentState)

        if (opts.createOnly) {
            inRenderingTransaction = false
            create(newTree, opts)
        } else {
            var patches = diff(tree, newTree, opts)
            inRenderingTransaction = false
            target = patch(target, patches, opts)
        }

        tree = newTree
        currentState = null
    }
}

},{"error/typed":155,"raf":156}],153:[function(require,module,exports){
module.exports = function(obj) {
    if (typeof obj === 'string') return camelCase(obj);
    return walk(obj);
};

function walk (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (isDate(obj) || isRegex(obj)) return obj;
    if (isArray(obj)) return map(obj, walk);
    return reduce(objectKeys(obj), function (acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
}

function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_,x) {
        return x.toUpperCase();
    });
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}

},{}],154:[function(require,module,exports){
var nargs = /\{([0-9a-zA-Z]+)\}/g
var slice = Array.prototype.slice

module.exports = template

function template(string) {
    var args

    if (arguments.length === 2 && typeof arguments[1] === "object") {
        args = arguments[1]
    } else {
        args = slice.call(arguments, 1)
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result

        if (string[index - 1] === "{" &&
            string[index + match.length] === "}") {
            return i
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null
            if (result === null || result === undefined) {
                return ""
            }

            return result
        }
    })
}

},{}],155:[function(require,module,exports){
var camelize = require("camelize")
var template = require("string-template")
var extend = require("xtend/mutable")

module.exports = TypedError

function TypedError(args) {
    if (!args) {
        throw new Error("args is required");
    }
    if (!args.type) {
        throw new Error("args.type is required");
    }
    if (!args.message) {
        throw new Error("args.message is required");
    }

    var message = args.message

    if (args.type && !args.name) {
        var errorName = camelize(args.type) + "Error"
        args.name = errorName[0].toUpperCase() + errorName.substr(1)
    }

    extend(createError, args);
    createError._name = args.name;

    return createError;

    function createError(opts) {
        var result = new Error()

        Object.defineProperty(result, "type", {
            value: result.type,
            enumerable: true,
            writable: true,
            configurable: true
        })

        var options = extend({}, args, opts)

        extend(result, options)
        result.message = template(message, options)

        return result
    }
}


},{"camelize":153,"string-template":154,"xtend/mutable":223}],156:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
  , isNative = true

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  isNative = false

  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  if(!isNative) {
    return raf.call(global, fn)
  }
  return raf.call(global, function() {
    try{
      fn.apply(this, arguments)
    } catch(e) {
      setTimeout(function() { throw e }, 0)
    }
  })
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":157}],157:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.6.3
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/*

*/

}).call(this,require('_process'))

},{"_process":68}],158:[function(require,module,exports){
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = addListener

function addListener(observArray, observ) {
    var list = observArray._list

    return observ(function (value) {
        var valueList =  observArray().slice()
        var index = list.indexOf(observ)

        // This code path should never hit. If this happens
        // there's a bug in the cleanup code
        if (index === -1) {
            var message = "observ-array: Unremoved observ listener"
            var err = new Error(message)
            err.list = list
            err.index = index
            err.observ = observ
            throw err
        }

        valueList.splice(index, 1, value)
        setNonEnumerable(valueList, "_diff", [ [index, 1, value] ])

        observArray._observSet(valueList)
    })
}

},{"./lib/set-non-enumerable.js":164}],159:[function(require,module,exports){
var addListener = require('./add-listener.js')

module.exports = applyPatch

function applyPatch (valueList, args) {
    var obs = this
    var valueArgs = args.map(unpack)

    valueList.splice.apply(valueList, valueArgs)
    obs._list.splice.apply(obs._list, args)

    var extraRemoveListeners = args.slice(2).map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    })

    extraRemoveListeners.unshift(args[0], args[1])
    var removedListeners = obs._removeListeners.splice
        .apply(obs._removeListeners, extraRemoveListeners)

    removedListeners.forEach(function (removeObservListener) {
        if (removeObservListener) {
            removeObservListener()
        }
    })

    return valueArgs
}

function unpack(value, index){
    if (index === 0 || index === 1) {
        return value
    }
    return typeof value === "function" ? value() : value
}

},{"./add-listener.js":158}],160:[function(require,module,exports){
var ObservArray = require("./index.js")

var slice = Array.prototype.slice

var ARRAY_METHODS = [
    "concat", "slice", "every", "filter", "forEach", "indexOf",
    "join", "lastIndexOf", "map", "reduce", "reduceRight",
    "some", "toString", "toLocaleString"
]

var methods = ARRAY_METHODS.map(function (name) {
    return [name, function () {
        var res = this._list[name].apply(this._list, arguments)

        if (res && Array.isArray(res)) {
            res = ObservArray(res)
        }

        return res
    }]
})

module.exports = ArrayMethods

function ArrayMethods(obs) {
    obs.push = observArrayPush
    obs.pop = observArrayPop
    obs.shift = observArrayShift
    obs.unshift = observArrayUnshift
    obs.reverse = require("./array-reverse.js")
    obs.sort = require("./array-sort.js")

    methods.forEach(function (tuple) {
        obs[tuple[0]] = tuple[1]
    })
    return obs
}



function observArrayPush() {
    var args = slice.call(arguments)
    args.unshift(this._list.length, 0)
    this.splice.apply(this, args)

    return this._list.length
}
function observArrayPop() {
    return this.splice(this._list.length - 1, 1)[0]
}
function observArrayShift() {
    return this.splice(0, 1)[0]
}
function observArrayUnshift() {
    var args = slice.call(arguments)
    args.unshift(0, 0)
    this.splice.apply(this, args)

    return this._list.length
}


function notImplemented() {
    throw new Error("Pull request welcome")
}

},{"./array-reverse.js":161,"./array-sort.js":162,"./index.js":163}],161:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require('./lib/set-non-enumerable.js')

module.exports = reverse

function reverse() {
    var obs = this
    var changes = fakeDiff(obs._list.slice().reverse())
    var valueList = obs().slice().reverse()

    var valueChanges = changes.map(applyPatch.bind(obs, valueList))

    setNonEnumerable(valueList, "_diff", valueChanges)

    obs._observSet(valueList)
    return changes
}

function fakeDiff(arr) {
    var _diff
    var len = arr.length

    if(len % 2) {
        var midPoint = (len -1) / 2
        var a = [0, midPoint].concat(arr.slice(0, midPoint))
        var b = [midPoint +1, midPoint].concat(arr.slice(midPoint +1, len))
        var _diff = [a, b]
    } else {
        _diff = [ [0, len].concat(arr) ]
    }

    return _diff
}

},{"./apply-patch.js":159,"./lib/set-non-enumerable.js":164}],162:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js")

module.exports = sort

function sort(compare) {
    var obs = this
    var list = obs._list.slice()

    var unpacked = unpack(list)

    var sorted = unpacked
            .map(function(it) { return it.val })
            .sort(compare)

    var packed = repack(sorted, unpacked)

    //fake diff - for perf
    //adiff on 10k items === ~3200ms
    //fake on 10k items === ~110ms
    var changes = [ [ 0, packed.length ].concat(packed) ]

    var valueChanges = changes.map(applyPatch.bind(obs, sorted))

    setNonEnumerable(sorted, "_diff", valueChanges)

    obs._observSet(sorted)
    return changes
}

function unpack(list) {
    var unpacked = []
    for(var i = 0; i < list.length; i++) {
        unpacked.push({
            val: ("function" == typeof list[i]) ? list[i]() : list[i],
            obj: list[i]
        })
    }
    return unpacked
}

function repack(sorted, unpacked) {
    var packed = []

    while(sorted.length) {
        var s = sorted.shift()
        var indx = indexOf(s, unpacked)
        if(~indx) packed.push(unpacked.splice(indx, 1)[0].obj)
    }

    return packed
}

function indexOf(n, h) {
    for(var i = 0; i < h.length; i++) {
        if(n === h[i].val) return i
    }
    return -1
}

},{"./apply-patch.js":159,"./lib/set-non-enumerable.js":164}],163:[function(require,module,exports){
var Observ = require("observ")

// circular dep between ArrayMethods & this file
module.exports = ObservArray

var splice = require("./splice.js")
var put = require("./put.js")
var set = require("./set.js")
var transaction = require("./transaction.js")
var ArrayMethods = require("./array-methods.js")
var addListener = require("./add-listener.js")


/*  ObservArray := (Array<T>) => Observ<
        Array<T> & { _diff: Array }
    > & {
        splice: (index: Number, amount: Number, rest...: T) =>
            Array<T>,
        push: (values...: T) => Number,
        filter: (lambda: Function, thisValue: Any) => Array<T>,
        indexOf: (item: T, fromIndex: Number) => Number
    }

    Fix to make it more like ObservHash.

    I.e. you write observables into it.
        reading methods take plain JS objects to read
        and the value of the array is always an array of plain
        objsect.

        The observ array instance itself would have indexed
        properties that are the observables
*/
function ObservArray(initialList) {
    // list is the internal mutable list observ instances that
    // all methods on `obs` dispatch to.
    var list = initialList
    var initialState = []

    // copy state out of initialList into initialState
    list.forEach(function (observ, index) {
        initialState[index] = typeof observ === "function" ?
            observ() : observ
    })

    var obs = Observ(initialState)
    obs.splice = splice

    // override set and store original for later use
    obs._observSet = obs.set
    obs.set = set

    obs.get = get
    obs.getLength = getLength
    obs.put = put
    obs.transaction = transaction

    // you better not mutate this list directly
    // this is the list of observs instances
    obs._list = list

    var removeListeners = list.map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    });
    // this is a list of removal functions that must be called
    // when observ instances are removed from `obs.list`
    // not calling this means we do not GC our observ change
    // listeners. Which causes rage bugs
    obs._removeListeners = removeListeners

    obs._type = "observ-array"
    obs._version = "3"

    return ArrayMethods(obs, list)
}

function get(index) {
    return this._list[index]
}

function getLength() {
    return this._list.length
}

},{"./add-listener.js":158,"./array-methods.js":160,"./put.js":166,"./set.js":167,"./splice.js":168,"./transaction.js":169,"observ":175}],164:[function(require,module,exports){
module.exports = setNonEnumerable;

function setNonEnumerable(object, key, value) {
    Object.defineProperty(object, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: false
    });
}

},{}],165:[function(require,module,exports){
function head (a) {
  return a[0]
}

function last (a) {
  return a[a.length - 1]
}

function tail(a) {
  return a.slice(1)
}

function retreat (e) {
  return e.pop()
}

function hasLength (e) {
  return e.length
}

function any(ary, test) {
  for(var i=0;i<ary.length;i++)
    if(test(ary[i]))
      return true
  return false
}

function score (a) {
  return a.reduce(function (s, a) {
      return s + a.length + a[1] + 1
  }, 0)
}

function best (a, b) {
  return score(a) <= score(b) ? a : b
}


var _rules // set at the bottom  

// note, naive implementation. will break on circular objects.

function _equal(a, b) {
  if(a && !b) return false
  if(Array.isArray(a))
    if(a.length != b.length) return false
  if(a && 'object' == typeof a) {
    for(var i in a)
      if(!_equal(a[i], b[i])) return false
    for(var i in b)
      if(!_equal(a[i], b[i])) return false
    return true
  }
  return a == b
}

function getArgs(args) {
  return args.length == 1 ? args[0] : [].slice.call(args)
}

// return the index of the element not like the others, or -1
function oddElement(ary, cmp) {
  var c
  function guess(a) {
    var odd = -1
    c = 0
    for (var i = a; i < ary.length; i ++) {
      if(!cmp(ary[a], ary[i])) {
        odd = i, c++
      }
    }
    return c > 1 ? -1 : odd
  }
  //assume that it is the first element.
  var g = guess(0)
  if(-1 != g) return g
  //0 was the odd one, then all the other elements are equal
  //else there more than one different element
  guess(1)
  return c == 0 ? 0 : -1
}
var exports = module.exports = function (deps, exports) {
  var equal = (deps && deps.equal) || _equal
  exports = exports || {} 
  exports.lcs = 
  function lcs() {
    var cache = {}
    var args = getArgs(arguments)
    var a = args[0], b = args[1]

    function key (a,b){
      return a.length + ':' + b.length
    }

    //find length that matches at the head

    if(args.length > 2) {
      //if called with multiple sequences
      //recurse, since lcs(a, b, c, d) == lcs(lcs(a,b), lcs(c,d))
      args.push(lcs(args.shift(), args.shift()))
      return lcs(args)
    }
    
    //this would be improved by truncating input first
    //and not returning an lcs as an intermediate step.
    //untill that is a performance problem.

    var start = 0, end = 0
    for(var i = 0; i < a.length && i < b.length 
      && equal(a[i], b[i])
      ; i ++
    )
      start = i + 1

    if(a.length === start)
      return a.slice()

    for(var i = 0;  i < a.length - start && i < b.length - start
      && equal(a[a.length - 1 - i], b[b.length - 1 - i])
      ; i ++
    )
      end = i

    function recurse (a, b) {
      if(!a.length || !b.length) return []
      //avoid exponential time by caching the results
      if(cache[key(a, b)]) return cache[key(a, b)]

      if(equal(a[0], b[0]))
        return [head(a)].concat(recurse(tail(a), tail(b)))
      else { 
        var _a = recurse(tail(a), b)
        var _b = recurse(a, tail(b))
        return cache[key(a,b)] = _a.length > _b.length ? _a : _b  
      }
    }
    
    var middleA = a.slice(start, a.length - end)
    var middleB = b.slice(start, b.length - end)

    return (
      a.slice(0, start).concat(
        recurse(middleA, middleB)
      ).concat(a.slice(a.length - end))
    )
  }

  // given n sequences, calc the lcs, and then chunk strings into stable and unstable sections.
  // unstable chunks are passed to build
  exports.chunk =
  function (q, build) {
    var q = q.map(function (e) { return e.slice() })
    var lcs = exports.lcs.apply(null, q)
    var all = [lcs].concat(q)

    function matchLcs (e) {
      if(e.length && !lcs.length || !e.length && lcs.length)
        return false //incase the last item is null
      return equal(last(e), last(lcs)) || ((e.length + lcs.length) === 0)
    }

    while(any(q, hasLength)) {
      //if each element is at the lcs then this chunk is stable.
      while(q.every(matchLcs) && q.every(hasLength))
        all.forEach(retreat)
      //collect the changes in each array upto the next match with the lcs
      var c = false
      var unstable = q.map(function (e) {
        var change = []
        while(!matchLcs(e)) {
          change.unshift(retreat(e))
          c = true
        }
        return change
      })
      if(c) build(q[0].length, unstable)
    }
  }

  //calculate a diff this is only updates
  exports.optimisticDiff =
  function (a, b) {
    var M = Math.max(a.length, b.length)
    var m = Math.min(a.length, b.length)
    var patch = []
    for(var i = 0; i < M; i++)
      if(a[i] !== b[i]) {
        var cur = [i,0], deletes = 0
        while(a[i] !== b[i] && i < m) {
          cur[1] = ++deletes
          cur.push(b[i++])
        }
        //the rest are deletes or inserts
        if(i >= m) {
          //the rest are deletes
          if(a.length > b.length)
            cur[1] += a.length - b.length
          //the rest are inserts
          else if(a.length < b.length)
            cur = cur.concat(b.slice(a.length))
        }
        patch.push(cur)
      }

    return patch
  }

  exports.diff =
  function (a, b) {
    var optimistic = exports.optimisticDiff(a, b)
    var changes = []
    exports.chunk([a, b], function (index, unstable) {
      var del = unstable.shift().length
      var insert = unstable.shift()
      changes.push([index, del].concat(insert))
    })
    return best(optimistic, changes)
  }

  exports.patch = function (a, changes, mutate) {
    if(mutate !== true) a = a.slice(a)//copy a
    changes.forEach(function (change) {
      [].splice.apply(a, change)
    })
    return a
  }

  // http://en.wikipedia.org/wiki/Concestor
  // me, concestor, you...
  exports.merge = function () {
    var args = getArgs(arguments)
    var patch = exports.diff3(args)
    return exports.patch(args[0], patch)
  }

  exports.diff3 = function () {
    var args = getArgs(arguments)
    var r = []
    exports.chunk(args, function (index, unstable) {
      var mine = unstable[0]
      var insert = resolve(unstable)
      if(equal(mine, insert)) return 
      r.push([index, mine.length].concat(insert)) 
    })
    return r
  }
  exports.oddOneOut =
    function oddOneOut (changes) {
      changes = changes.slice()
      //put the concestor first
      changes.unshift(changes.splice(1,1)[0])
      var i = oddElement(changes, equal)
      if(i == 0) // concestor was different, 'false conflict'
        return changes[1]
      if (~i)
        return changes[i] 
    }
  exports.insertMergeOverDelete = 
    //i've implemented this as a seperate rule,
    //because I had second thoughts about this.
    function insertMergeOverDelete (changes) {
      changes = changes.slice()
      changes.splice(1,1)// remove concestor
      
      //if there is only one non empty change thats okay.
      //else full confilct
      for (var i = 0, nonempty; i < changes.length; i++)
        if(changes[i].length) 
          if(!nonempty) nonempty = changes[i]
          else return // full conflict
      return nonempty
    }

  var rules = (deps && deps.rules) || [exports.oddOneOut, exports.insertMergeOverDelete]

  function resolve (changes) {
    var l = rules.length
    for (var i in rules) { // first
      
      var c = rules[i] && rules[i](changes)
      if(c) return c
    }
    changes.splice(1,1) // remove concestor
    //returning the conflicts as an object is a really bad idea,
    // because == will not detect they are the same. and conflicts build.
    // better to use
    // '<<<<<<<<<<<<<'
    // of course, i wrote this before i started on snob, so i didn't know that then.
    /*var conflict = ['>>>>>>>>>>>>>>>>']
    while(changes.length)
      conflict = conflict.concat(changes.shift()).concat('============')
    conflict.pop()
    conflict.push          ('<<<<<<<<<<<<<<<')
    changes.unshift       ('>>>>>>>>>>>>>>>')
    return conflict*/
    //nah, better is just to use an equal can handle objects
    return {'?': changes}
  }
  return exports
}
exports(null, exports)

},{}],166:[function(require,module,exports){
var addListener = require("./add-listener.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = put

// `obs.put` is a mutable implementation of `array[index] = value`
// that mutates both `list` and the internal `valueList` that
// is the current value of `obs` itself
function put(index, value) {
    var obs = this
    var valueList = obs().slice()

    var originalLength = valueList.length
    valueList[index] = typeof value === "function" ? value() : value

    obs._list[index] = value

    // remove past value listener if was observ
    var removeListener = obs._removeListeners[index]
    if (removeListener){
        removeListener()
    }

    // add listener to value if observ
    obs._removeListeners[index] = typeof value === "function" ?
        addListener(obs, value) :
        null

    // fake splice diff
    var valueArgs = index < originalLength ? 
        [index, 1, valueList[index]] :
        [index, 0, valueList[index]]

    setNonEnumerable(valueList, "_diff", [valueArgs])

    obs._observSet(valueList)
    return value
}
},{"./add-listener.js":158,"./lib/set-non-enumerable.js":164}],167:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js")
var adiff = require("adiff")

module.exports = set

function set(rawList) {
    if (!Array.isArray(rawList)) rawList = []

    var obs = this
    var changes = adiff.diff(obs._list, rawList)
    var valueList = obs().slice()

    var valueChanges = changes.map(applyPatch.bind(obs, valueList))

    setNonEnumerable(valueList, "_diff", valueChanges)

    obs._observSet(valueList)
    return changes
}

},{"./apply-patch.js":159,"./lib/set-non-enumerable.js":164,"adiff":165}],168:[function(require,module,exports){
var slice = Array.prototype.slice

var addListener = require("./add-listener.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = splice

// `obs.splice` is a mutable implementation of `splice()`
// that mutates both `list` and the internal `valueList` that
// is the current value of `obs` itself
function splice(index, amount) {
    var obs = this
    var args = slice.call(arguments, 0)
    var valueList = obs().slice()

    // generate a list of args to mutate the internal
    // list of only obs
    var valueArgs = args.map(function (value, index) {
        if (index === 0 || index === 1) {
            return value
        }

        // must unpack observables that we are adding
        return typeof value === "function" ? value() : value
    })

    valueList.splice.apply(valueList, valueArgs)
    // we remove the observs that we remove
    var removed = obs._list.splice.apply(obs._list, args)

    var extraRemoveListeners = args.slice(2).map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    })
    extraRemoveListeners.unshift(args[0], args[1])
    var removedListeners = obs._removeListeners.splice
        .apply(obs._removeListeners, extraRemoveListeners)

    removedListeners.forEach(function (removeObservListener) {
        if (removeObservListener) {
            removeObservListener()
        }
    })

    setNonEnumerable(valueList, "_diff", [valueArgs])

    obs._observSet(valueList)
    return removed
}

},{"./add-listener.js":158,"./lib/set-non-enumerable.js":164}],169:[function(require,module,exports){
module.exports = transaction

function transaction (func) {
    var obs = this
    var rawList = obs._list.slice()

    if (func(rawList) !== false){ // allow cancel
        return obs.set(rawList)
    }

}
},{}],170:[function(require,module,exports){
var Observ = require("observ")
var extend = require("xtend")

var blackList = {
    "length": "Clashes with `Function.prototype.length`.\n",
    "name": "Clashes with `Function.prototype.name`.\n",
    "_diff": "_diff is reserved key of observ-struct.\n",
    "_type": "_type is reserved key of observ-struct.\n",
    "_version": "_version is reserved key of observ-struct.\n"
}
var NO_TRANSACTION = {}

function setNonEnumerable(object, key, value) {
    Object.defineProperty(object, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: false
    })
}

/* ObservStruct := (Object<String, Observ<T>>) =>
    Object<String, Observ<T>> &
        Observ<Object<String, T> & {
            _diff: Object<String, Any>
        }>

*/
module.exports = ObservStruct

function ObservStruct(struct) {
    var keys = Object.keys(struct)

    var initialState = {}
    var currentTransaction = NO_TRANSACTION
    var nestedTransaction = NO_TRANSACTION

    keys.forEach(function (key) {
        if (blackList.hasOwnProperty(key)) {
            throw new Error("cannot create an observ-struct " +
                "with a key named '" + key + "'.\n" +
                blackList[key]);
        }

        var observ = struct[key]
        initialState[key] = typeof observ === "function" ?
            observ() : observ
    })

    var obs = Observ(initialState)
    keys.forEach(function (key) {
        var observ = struct[key]
        obs[key] = observ

        if (typeof observ === "function") {
            observ(function (value) {
                if (nestedTransaction === value) {
                    return
                }

                var state = extend(obs())
                state[key] = value
                var diff = {}
                diff[key] = value && value._diff ?
                    value._diff : value

                setNonEnumerable(state, "_diff", diff)
                currentTransaction = state
                obs.set(state)
                currentTransaction = NO_TRANSACTION
            })
        }
    })
    var _set = obs.set
    obs.set = function trackDiff(value) {
        if (currentTransaction === value) {
            return _set(value)
        }

        var newState = extend(value)
        setNonEnumerable(newState, "_diff", value)
        _set(newState)
    }

    obs(function (newState) {
        if (currentTransaction === newState) {
            return
        }

        keys.forEach(function (key) {
            var observ = struct[key]
            var newObservValue = newState[key]

            if (typeof observ === "function" &&
                observ() !== newObservValue
            ) {
                nestedTransaction = newObservValue
                observ.set(newState[key])
                nestedTransaction = NO_TRANSACTION
            }
        })
    })

    obs._type = "observ-struct"
    obs._version = "5"

    return obs
}

},{"observ":175,"xtend":171}],171:[function(require,module,exports){
module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],172:[function(require,module,exports){
var Observ = require('observ')
var extend = require('xtend')

var NO_TRANSACTION = {}

module.exports = ObservVarhash

function ObservVarhash (hash, createValue) {
  createValue = createValue || function (obj) { return obj }

  var initialState = {}
  var currentTransaction = NO_TRANSACTION

  var obs = Observ(initialState)
  setNonEnumerable(obs, '_removeListeners', {})

  setNonEnumerable(obs, 'set', obs.set)
  setNonEnumerable(obs, 'get', get.bind(obs))
  setNonEnumerable(obs, 'put', put.bind(obs, createValue, currentTransaction))
  setNonEnumerable(obs, 'delete', del.bind(obs))

  for (var key in hash) {
    obs[key] = typeof hash[key] === 'function' ?
      hash[key] : createValue(hash[key], key)

    if (isFn(obs[key])) {
      obs._removeListeners[key] = obs[key](watch(obs, key, currentTransaction))
    }
  }

  var newState = {}
  for (key in hash) {
    var observ = obs[key]
    checkKey(key)
    newState[key] = isFn(observ) ? observ() : observ
  }
  obs.set(newState)

  obs(function (newState) {
    if (currentTransaction === newState) {
      return
    }

    for (var key in hash) {
      var observ = hash[key]

      if (isFn(observ) && observ() !== newState[key]) {
        observ.set(newState[key])
      }
    }
  })

  return obs
}

// access and mutate
function get (key) {
  return this[key]
}

function put (createValue, currentTransaction, key, val) {
  checkKey(key)

  if (val === undefined) {
    throw new Error('cannot varhash.put(key, undefined).')
  }

  var observ = typeof val === 'function' ?
    val : createValue(val, key)
  var state = extend(this())

  state[key] = isFn(observ) ? observ() : observ

  if (isFn(this._removeListeners[key])) {
    this._removeListeners[key]()
  }

  this._removeListeners[key] = isFn(observ) ?
    observ(watch(this, key, currentTransaction)) : null

  setNonEnumerable(state, '_diff', diff(key, state[key]))

  this[key] = observ
  this.set(state)

  return this
}

function del (key) {
  var state = extend(this())
  if (isFn(this._removeListeners[key])) {
    this._removeListeners[key]()
  }

  delete this._removeListeners[key]
  delete state[key]
  delete this[key]

  setNonEnumerable(state, '_diff', diff(key, undefined))
  this.set(state)

  return this
}

// processing
function watch (obs, key, currentTransaction) {
  return function (value) {
    var state = extend(obs())
    state[key] = value

    setNonEnumerable(state, '_diff', diff(key, value))
    currentTransaction = state
    obs.set(state)
    currentTransaction = NO_TRANSACTION
  }
}

function diff (key, value) {
  var obj = {}
  obj[key] = value && value._diff ? value._diff : value
  return obj
}

function isFn (obj) {
  return typeof obj === 'function'
}

function setNonEnumerable(object, key, value) {
  Object.defineProperty(object, key, {
    value: value,
    writable: true,
    configurable: true,
    enumerable: false
  })
}

// errors
var blacklist = {
  name: 'Clashes with `Function.prototype.name`.',
  get: 'get is a reserved key of observ-varhash method',
  put: 'put is a reserved key of observ-varhash method',
  'delete': 'delete is a reserved key of observ-varhash method',
  _diff: '_diff is a reserved key of observ-varhash method',
  _removeListeners: '_removeListeners is a reserved key of observ-varhash'
}

function checkKey (key) {
  if (!blacklist[key]) return
  throw new Error(
    'cannot create an observ-varhash with key `' + key + '`. ' + blacklist[key]
  )
}

},{"observ":175,"xtend":173}],173:[function(require,module,exports){
arguments[4][171][0].apply(exports,arguments)
},{"dup":171}],174:[function(require,module,exports){
var Observable = require("./index.js")

module.exports = computed

function computed(observables, lambda) {
    var values = observables.map(function (o) {
        return o()
    })
    var result = Observable(lambda.apply(null, values))

    observables.forEach(function (o, index) {
        o(function (newValue) {
            values[index] = newValue
            result.set(lambda.apply(null, values))
        })
    })

    return result
}

},{"./index.js":175}],175:[function(require,module,exports){
module.exports = Observable

function Observable(value) {
    var listeners = []
    value = value === undefined ? null : value

    observable.set = function (v) {
        value = v
        listeners.forEach(function (f) {
            f(v)
        })
    }

    return observable

    function observable(listener) {
        if (!listener) {
            return value
        }

        listeners.push(listener)

        return function remove() {
            listeners.splice(listeners.indexOf(listener), 1)
        }
    }
}

},{}],176:[function(require,module,exports){
module.exports = watch

function watch(observable, listener) {
    var remove = observable(listener)
    listener(observable())
    return remove
}

},{}],177:[function(require,module,exports){
var Delegator = require('dom-delegator')

module.exports = BaseEvent

function BaseEvent(lambda) {
    return EventHandler;

    function EventHandler(fn, data, opts) {
        var handler = {
            fn: fn,
            data: data !== undefined ? data : {},
            opts: opts || {},
            handleEvent: handleEvent
        }

        if (fn && fn.type === 'dom-delegator-handle') {
            return Delegator.transformHandle(fn,
                handleLambda.bind(handler))
        }

        return handler;
    }

    function handleLambda(ev, broadcast) {
        if (this.opts.startPropagation && ev.startPropagation) {
            ev.startPropagation();
        }

        return lambda.call(this, ev, broadcast)
    }

    function handleEvent(ev) {
        var self = this

        if (self.opts.startPropagation && ev.startPropagation) {
            ev.startPropagation()
        }

        lambda.call(self, ev, broadcast)

        function broadcast(value) {
            if (typeof self.fn === 'function') {
                self.fn(value)
            } else {
                self.fn.write(value)
            }
        }
    }
}

},{"dom-delegator":137}],178:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js')

var VALID_CHANGE = ['checkbox', 'file', 'select-multiple', 'select-one'];
var VALID_INPUT = ['color', 'date', 'datetime', 'datetime-local', 'email',
    'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time',
    'url', 'week'];

module.exports = BaseEvent(changeLambda);

function changeLambda(ev, broadcast) {
    var target = ev.target

    var isValid =
        (ev.type === 'input' && VALID_INPUT.indexOf(target.type) !== -1) ||
        (ev.type === 'change' && VALID_CHANGE.indexOf(target.type) !== -1);

    if (!isValid) {
        if (ev.startPropagation) {
            ev.startPropagation()
        }
        return
    }

    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    broadcast(data)
}

},{"./base-event.js":177,"form-data-set/element":183,"xtend":186}],179:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(clickLambda);

function clickLambda(ev, broadcast) {
    var opts = this.opts;

    if (!opts.ctrl && ev.ctrlKey) {
        return;
    }

    if (!opts.meta && ev.metaKey) {
        return;
    }

    if (!opts.rightClick && ev.which === 2) {
        return;
    }

    if (this.opts.preventDefault && ev.preventDefault) {
        ev.preventDefault();
    }

    broadcast(this.data);
}

},{"./base-event.js":177}],180:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(eventLambda);

function eventLambda(ev, broadcast) {
    broadcast(this.data);
}

},{"./base-event.js":177}],181:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(keyLambda);

function keyLambda(ev, broadcast) {
    var key = this.opts.key;

    if (ev.keyCode === key) {
        broadcast(this.data);
    }
}

},{"./base-event.js":177}],182:[function(require,module,exports){
var slice = Array.prototype.slice

module.exports = iterativelyWalk

function iterativelyWalk(nodes, cb) {
    if (!('length' in nodes)) {
        nodes = [nodes]
    }
    
    nodes = slice.call(nodes)

    while(nodes.length) {
        var node = nodes.shift(),
            ret = cb(node)

        if (ret) {
            return ret
        }

        if (node.childNodes && node.childNodes.length) {
            nodes = slice.call(node.childNodes).concat(nodes)
        }
    }
}

},{}],183:[function(require,module,exports){
var walk = require('dom-walk')

var FormData = require('./index.js')

module.exports = getFormData

function buildElems(rootElem) {
    var hash = {}
    if (rootElem.name) {
    	hash[rootElem.name] = rootElem
    }

    walk(rootElem, function (child) {
        if (child.name) {
            hash[child.name] = child
        }
    })


    return hash
}

function getFormData(rootElem) {
    var elements = buildElems(rootElem)

    return FormData(elements)
}

},{"./index.js":184,"dom-walk":182}],184:[function(require,module,exports){
/*jshint maxcomplexity: 10*/

module.exports = FormData

//TODO: Massive spec: http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#constructing-form-data-set
function FormData(elements) {
    return Object.keys(elements).reduce(function (acc, key) {
        var elem = elements[key]

        acc[key] = valueOfElement(elem)

        return acc
    }, {})
}

function valueOfElement(elem) {
    if (typeof elem === "function") {
        return elem()
    } else if (containsRadio(elem)) {
        var elems = toList(elem)
        var checked = elems.filter(function (elem) {
            return elem.checked
        })[0] || null

        return checked ? checked.value : null
    } else if (Array.isArray(elem)) {
        return elem.map(valueOfElement).filter(filterNull)
    } else if (elem.tagName === undefined && elem.nodeType === undefined) {
        return FormData(elem)
    } else if (elem.tagName === "INPUT" && isChecked(elem)) {
        if (elem.hasAttribute("value")) {
            return elem.checked ? elem.value : null
        } else {
            return elem.checked
        }
    } else if (elem.tagName === "INPUT") {
        return elem.value
    } else if (elem.tagName === "TEXTAREA") {
        return elem.value
    } else if (elem.tagName === "SELECT") {
        return elem.value
    }
}

function isChecked(elem) {
    return elem.type === "checkbox" || elem.type === "radio"
}

function containsRadio(value) {
    if (value.tagName || value.nodeType) {
        return false
    }

    var elems = toList(value)

    return elems.some(function (elem) {
        return elem.tagName === "INPUT" && elem.type === "radio"
    })
}

function toList(value) {
    if (Array.isArray(value)) {
        return value
    }

    return Object.keys(value).map(prop, value)
}

function prop(x) {
    return this[x]
}

function filterNull(val) {
    return val !== null
}

},{}],185:[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],186:[function(require,module,exports){
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{"./has-keys":185}],187:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js');

var ENTER = 13

module.exports = BaseEvent(submitLambda);

function submitLambda(ev, broadcast) {
    var target = ev.target

    var isValid =
        (ev.type === 'submit' && target.tagName === 'FORM') ||
        (ev.type === 'click' && target.tagName === 'BUTTON') ||
        (ev.type === 'click' && target.type === 'submit') ||
        (
            (target.type === 'text') &&
            (ev.keyCode === ENTER && ev.type === 'keydown')
        )

    if (!isValid) {
        if (ev.startPropagation) {
            ev.startPropagation()
        }
        return
    }

    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    if (ev.preventDefault) {
        ev.preventDefault();
    }

    broadcast(data);
}

},{"./base-event.js":177,"form-data-set/element":183,"xtend":186}],188:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(valueLambda);

function valueLambda(ev, broadcast) {
    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    broadcast(data);
}

},{"./base-event.js":177,"form-data-set/element":183,"xtend":186}],189:[function(require,module,exports){
function Thunk(fn, args, key, eqArgs) {
    this.fn = fn;
    this.args = args;
    this.key = key;
    this.eqArgs = eqArgs;
}

Thunk.prototype.type = 'Thunk';
Thunk.prototype.render = render;
module.exports = Thunk;

function shouldUpdate(current, previous) {
    if (!current || !previous || current.fn !== previous.fn) {
        return true;
    }

    var cargs = current.args;
    var pargs = previous.args;

    return !current.eqArgs(cargs, pargs);
}

function render(previous) {
    if (shouldUpdate(this, previous)) {
        return this.fn.apply(null, this.args);
    } else {
        return previous.vnode;
    }
}

},{}],190:[function(require,module,exports){
var Partial = require('./partial');

module.exports = Partial();

},{"./partial":191}],191:[function(require,module,exports){
var shallowEq = require('./shallow-eq');
var Thunk = require('./immutable-thunk');

module.exports = createPartial;

function createPartial(eq) {
    return function partial(fn) {
        var args = copyOver(arguments, 1);
        var firstArg = args[0];
        var key;

        var eqArgs = eq || shallowEq;

        if (typeof firstArg === 'object' && firstArg !== null) {
            if ('key' in firstArg) {
                key = firstArg.key;
            } else if ('id' in firstArg) {
                key = firstArg.id;
            }
        }

        return new Thunk(fn, args, key, eqArgs);
    };
}

function copyOver(list, offset) {
    var newList = [];
    for (var i = list.length - 1; i >= offset; i--) {
        newList[i - offset] = list[i];
    }
    return newList;
}

},{"./immutable-thunk":189,"./shallow-eq":192}],192:[function(require,module,exports){
module.exports = shallowEq;

function shallowEq(currentArgs, previousArgs) {
    if (currentArgs.length === 0 && previousArgs.length === 0) {
        return true;
    }

    if (currentArgs.length !== previousArgs.length) {
        return false;
    }

    var len = currentArgs.length;

    for (var i = 0; i < len; i++) {
        if (currentArgs[i] !== previousArgs[i]) {
            return false;
        }
    }

    return true;
}

},{}],193:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],194:[function(require,module,exports){
arguments[4][139][0].apply(exports,arguments)
},{"dup":139,"individual/one-version":196}],195:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],196:[function(require,module,exports){
arguments[4][141][0].apply(exports,arguments)
},{"./index.js":195,"dup":141}],197:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":67}],198:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],199:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],200:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":212,"is-object":198}],201:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":210,"../vnode/is-vnode.js":213,"../vnode/is-vtext.js":214,"../vnode/is-widget.js":215,"./apply-properties":200,"global/document":197}],202:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],203:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":215,"../vnode/vpatch.js":218,"./apply-properties":200,"./update-widget":205}],204:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    // renderOptions.patch = renderOptions.patch || patchRecursive //--//
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive //++//
    renderOptions.render = renderOptions.render || render
    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":201,"./dom-index":202,"./patch-op":203,"global/document":197,"x-is-array":199}],205:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":215}],206:[function(require,module,exports){
'use strict';

var EvStore = require('ev-store');

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};

},{"ev-store":194}],207:[function(require,module,exports){
'use strict';

module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],208:[function(require,module,exports){
'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var VText = require('../vnode/vtext.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isHook = require('../vnode/is-vhook');
var isVThunk = require('../vnode/is-thunk');

var parseTag = require('./parse-tag.js');
var softSetHook = require('./hooks/soft-set-hook.js');
var evHook = require('./hooks/ev-hook.js');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}

},{"../vnode/is-thunk":211,"../vnode/is-vhook":212,"../vnode/is-vnode":213,"../vnode/is-vtext":214,"../vnode/is-widget":215,"../vnode/vnode.js":217,"../vnode/vtext.js":219,"./hooks/ev-hook.js":206,"./hooks/soft-set-hook.js":207,"./parse-tag.js":209,"x-is-array":199}],209:[function(require,module,exports){
'use strict';

var split = require('browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}

},{"browser-split":193}],210:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":211,"./is-vnode":213,"./is-vtext":214,"./is-widget":215}],211:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],212:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],213:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":216}],214:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":216}],215:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],216:[function(require,module,exports){
module.exports = "2"

},{}],217:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":211,"./is-vhook":212,"./is-vnode":213,"./is-widget":215,"./version":216}],218:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":216}],219:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":216}],220:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":212,"is-object":198}],221:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":210,"../vnode/is-thunk":211,"../vnode/is-vnode":213,"../vnode/is-vtext":214,"../vnode/is-widget":215,"../vnode/vpatch":218,"./diff-props":220,"x-is-array":199}],222:[function(require,module,exports){
arguments[4][171][0].apply(exports,arguments)
},{"dup":171}],223:[function(require,module,exports){
module.exports = extend

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],224:[function(require,module,exports){
'use strict';

module.exports = TimeTravel;

function TimeTravel(state) {
    var history = [state()];

    // Tracks the current position in history.
    var cursor = 0;

    var isRedoOrUndo = false;

    state(function recordState(newState) {

        // This function gets called whenever there is a state change.
        // State changes happen due to events being handled, or due to
        // undo/redo.

        // If we are replaying items in the history,
        // we don't want to re-add them to the end of the history.
        // Just quit.
        if (isRedoOrUndo) {
            return;
        }

        // If we've made it this far, `newState` is due to a new action,
        // not due to undo/redo.

        // If we've called `undo` a bunch of times,
        // the cursor won't be at the end.
        // Any states past the cursor should be cut off.
        history.splice(cursor + 1);

        // Add the new item to the history
        history.push(newState);

        cursor = history.length - 1;
    });

    return { undo: undo, redo: redo };

    function undo() {
        if (cursor < 1) {
            // Don't move before the beginning of time
            return undefined;
        }

        cursor--;
        isRedoOrUndo = true;
        state.set(history[cursor]);
        isRedoOrUndo = false;
        return history[cursor];
    }

    function redo() {
        if (cursor + 1 >= history.length) {
            // Don't move past the end of time
            return undefined;
        }

        cursor++;
        isRedoOrUndo = true;
        state.set(history[cursor]);
        isRedoOrUndo = false;
        return history[cursor];
    }
}

},{}],225:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(global, fn)
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":226}],226:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

}).call(this,require('_process'))

},{"_process":68}],227:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry1 = require('./internal/_curry1');
var _slice = require('./internal/_slice');
var curryN = require('./curryN');


/**
 * Creates a new list iteration function from an existing one by adding two new parameters
 * to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, Ramda's simple `map` function into one that more closely
 * resembles `Array.prototype.map`.  Note that this will only work for functions in which
 * the iteration callback function is the first parameter, and where the list is the last
 * parameter.  (This latter might be unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed(function(val, idx) {return idx + '-' + val;}, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = _slice(arguments);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});

},{"./curryN":231,"./internal/_concat":240,"./internal/_curry1":242,"./internal/_slice":253}],228:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing the contents of the given list, followed by the given
 * element.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list whose contents will be added to the beginning of the output
 *        list.
 * @return {Array} A new list containing the contents of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});

},{"./internal/_concat":240,"./internal/_curry2":243}],229:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry2 = require('./internal/_curry2');


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @category Function
 * @category Object
 * @see R.partial
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});

},{"./internal/_arity":238,"./internal/_curry2":243}],230:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * Returns a curried equivalent of the provided function. The curried
 * function has two unusual capabilities. First, its arguments needn't
 * be provided one at a time. If `f` is a ternary function and `g` is
 * `R.curry(f)`, the following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`,
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = function(a, b, c, d) {
 *        return a + b + c + d;
 *      };
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

},{"./curryN":231,"./internal/_curry1":242}],231:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var _curry2 = require('./internal/_curry2');
var _curryN = require('./internal/_curryN');


/**
 * Returns a curried equivalent of the provided function, with the
 * specified arity. The curried function has two unusual capabilities.
 * First, its arguments needn't be provided one at a time. If `g` is
 * `R.curryN(3, f)`, the following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`,
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var addFourNumbers = function() {
 *        return R.sum([].slice.call(arguments, 0, 4));
 *      };
 *
 *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

},{"./internal/_arity":238,"./internal/_curry1":242,"./internal/_curry2":243,"./internal/_curryN":244}],232:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the second argument if it is not null or undefined. If it is null
 * or undefined, the first (default) argument is returned.
 *
 * @func
 * @memberOf R
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} val The default value.
 * @param {b} val The value to return if it is not null or undefined
 * @return {*} The the second value or the default value
 * @example
 *
 *      var defaultTo42 = defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null ? d : v;
});

},{"./internal/_curry2":243}],233:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _filter = require('./internal/_filter');
var _xfilter = require('./internal/_xfilter');


/**
 * Returns a new list containing only those items that match a given predicate function.
 * The predicate function is passed one argument: *(value)*.
 *
 * Note that `R.filter` does not skip deleted or unassigned indices, unlike the native
 * `Array.prototype.filter` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Description
 *
 * Acts as a transducer if a transformer is given in list position.
 * @see R.transduce
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @see R.reject
 * @example
 *
 *      var isEven = function(n) {
 *        return n % 2 === 0;
 *      };
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 */
module.exports = _curry2(_dispatchable('filter', _xfilter, _filter));

},{"./internal/_curry2":243,"./internal/_dispatchable":245,"./internal/_filter":246,"./internal/_xfilter":255}],234:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfind = require('./internal/_xfind');


/**
 * Returns the first element of the list which matches the predicate, or `undefined` if no
 * element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 * @see R.transduce
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));

},{"./internal/_curry2":243,"./internal/_dispatchable":245,"./internal/_xfind":256}],235:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _slice = require('./internal/_slice');
var curry = require('./curry');


/**
 * Returns a new function much like the supplied one, except that the first two arguments'
 * order is reversed.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = function(a, b, c) {
 *        return ([]).concat(a, b, c);
 *      };
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = _slice(arguments);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

},{"./curry":230,"./internal/_curry1":242,"./internal/_slice":253}],236:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');


/**
 * Iterate over an input `list`, calling a provided function `fn` for each element in the
 * list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse arrays), unlike
 * the native `Array.prototype.forEach` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
 * array. In some libraries this function is named `each`.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @example
 *
 *      var printXPlusFive = function(x) { console.log(x + 5); };
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      //-> 6
 *      //-> 7
 *      //-> 8
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));

},{"./internal/_checkForMethod":239,"./internal/_curry2":243}],237:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _reduce = require('./internal/_reduce');
var _xgroupBy = require('./internal/_xgroupBy');
var append = require('./append');


/**
 * Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function
 * on each element, and grouping the results according to values returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 * @see R.transduce
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_dispatchable('groupBy', _xgroupBy, function groupBy(fn, list) {
  return _reduce(function(acc, elt) {
    var key = fn(elt);
    acc[key] = append(elt, acc[key] || (acc[key] = []));
    return acc;
  }, {}, list);
}));

},{"./append":228,"./internal/_curry2":243,"./internal/_dispatchable":245,"./internal/_reduce":251,"./internal/_xgroupBy":257}],238:[function(require,module,exports){
module.exports = function _arity(n, fn) {
  // jshint unused:vars
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

},{}],239:[function(require,module,exports){
var _isArray = require('./_isArray');
var _slice = require('./_slice');


/**
 * Similar to hasMethod, this checks whether a function has a [methodname]
 * function. If it isn't an array it will execute that function otherwise it will
 * default to the ramda implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
  };
};

},{"./_isArray":248,"./_slice":253}],240:[function(require,module,exports){
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};

},{}],241:[function(require,module,exports){
var _arity = require('./_arity');
var _slice = require('./_slice');


module.exports = function _createPartialApplicator(concat) {
  return function(fn) {
    var args = _slice(arguments, 1);
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  };
};

},{"./_arity":238,"./_slice":253}],242:[function(require,module,exports){
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0) {
      return f1;
    } else if (a != null && a['@@functional/placeholder'] === true) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

},{}],243:[function(require,module,exports){
var _curry1 = require('./_curry1');


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    var n = arguments.length;
    if (n === 0) {
      return f2;
    } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
      return f2;
    } else if (n === 1) {
      return _curry1(function(b) { return fn(a, b); });
    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true &&
                          b != null && b['@@functional/placeholder'] === true) {
      return f2;
    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
      return _curry1(function(a) { return fn(a, b); });
    } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
      return _curry1(function(b) { return fn(a, b); });
    } else {
      return fn(a, b);
    }
  };
};

},{"./_curry1":242}],244:[function(require,module,exports){
var _arity = require('./_arity');


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @return {array} An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (received[combinedIdx] == null ||
           received[combinedIdx]['@@functional/placeholder'] !== true ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (result == null || result['@@functional/placeholder'] !== true) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
};

},{"./_arity":238}],245:[function(require,module,exports){
var _isArray = require('./_isArray');
var _isTransformer = require('./_isTransformer');
var _slice = require('./_slice');


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a  function with [methodname], it will execute that
 * function (functor case). Otherwise, if it is a transformer, uses transducer
 * [xf] to return a new transformer (transducer case). Otherwise, it will
 * default to executing [fn].
 *
 * @private
 * @param {String} methodname property to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodname, xf, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    if (!_isArray(obj)) {
      var args = _slice(arguments, 0, length - 1);
      if (typeof obj[methodname] === 'function') {
        return obj[methodname].apply(obj, args);
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};

},{"./_isArray":248,"./_isTransformer":249,"./_slice":253}],246:[function(require,module,exports){
module.exports = function _filter(fn, list) {
  var idx = 0, len = list.length, result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};

},{}],247:[function(require,module,exports){
module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

},{}],248:[function(require,module,exports){
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};

},{}],249:[function(require,module,exports){
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

},{}],250:[function(require,module,exports){
module.exports = function _map(fn, list) {
  var idx = 0, len = list.length, result = Array(len);
  while (idx < len) {
    result[idx] = fn(list[idx]);
    idx += 1;
  }
  return result;
};

},{}],251:[function(require,module,exports){
var _xwrap = require('./_xwrap');
var bind = require('../bind');
var isArrayLike = require('../isArrayLike');


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0, len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
})();

},{"../bind":229,"../isArrayLike":260,"./_xwrap":259}],252:[function(require,module,exports){
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

},{}],253:[function(require,module,exports){
/**
 * An optimized, private array `slice` implementation.
 *
 * @private
 * @param {Arguments|Array} args The array or arguments object to consider.
 * @param {Number} [from=0] The array index to slice from, inclusive.
 * @param {Number} [to=args.length] The array index to slice to, exclusive.
 * @return {Array} A new, sliced array.
 * @example
 *
 *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
 *
 *      var firstThreeArgs = function(a, b, c, d) {
 *        return _slice(arguments, 0, 3);
 *      };
 *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
 */
module.exports = function _slice(args, from, to) {
  switch (arguments.length) {
    case 1: return _slice(args, 0, args.length);
    case 2: return _slice(args, from, args.length);
    default:
      var list = [];
      var idx = 0;
      var len = Math.max(0, Math.min(args.length, to) - from);
      while (idx < len) {
        list[idx] = args[from + idx];
        idx += 1;
      }
      return list;
  }
};

},{}],254:[function(require,module,exports){
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

},{}],255:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
})();

},{"./_curry2":243,"./_xfBase":254}],256:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
})();

},{"./_curry2":243,"./_reduced":252,"./_xfBase":254}],257:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _has = require('./_has');
var _xfBase = require('./_xfBase');
var append = require('../append');


module.exports = (function() {
  function XGroupBy(f, xf) {
    this.xf = xf;
    this.f = f;
    this.inputs = {};
  }
  XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
  XGroupBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    return this.xf['@@transducer/result'](result);
  };
  XGroupBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.f(input);
    this.inputs[key] = this.inputs[key] || [key, []];
    this.inputs[key][1] = append(input, this.inputs[key][1]);
    return result;
  };

  return _curry2(function _xgroupBy(f, xf) { return new XGroupBy(f, xf); });
})();

},{"../append":228,"./_curry2":243,"./_has":247,"./_xfBase":254}],258:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
})();

},{"./_curry2":243,"./_xfBase":254}],259:[function(require,module,exports){
module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());

},{}],260:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isArray = require('./internal/_isArray');


/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (x instanceof String) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

},{"./internal/_curry1":242,"./internal/_isArray":248}],261:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');


/**
 * Returns a list containing the names of all the enumerable own
 * properties of the supplied object.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, ks = [], nIdx;
      for (prop in obj) {
        if (_has(prop, obj)) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());

},{"./internal/_curry1":242,"./internal/_has":247}],262:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _map = require('./internal/_map');
var _xmap = require('./internal/_xmap');


/**
 * Returns a new list, constructed by applying the supplied function to every element of the
 * supplied list.
 *
 * Note: `R.map` does not skip deleted or unassigned indices (sparse arrays), unlike the
 * native `Array.prototype.map` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description
 *
 * Acts as a transducer if a transformer is given in list position.
 * @see R.transduce
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> b) -> [a] -> [b]
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @example
 *
 *      var double = function(x) {
 *        return x * 2;
 *      };
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 */
module.exports = _curry2(_dispatchable('map', _xmap, _map));

},{"./internal/_curry2":243,"./internal/_dispatchable":245,"./internal/_map":250,"./internal/_xmap":258}],263:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');
var curry = require('./curry');


/**
 * Accepts as its arguments a function and any number of values and returns a function that,
 * when invoked, calls the original function with all of the values prepended to the
 * original function's arguments list. In some libraries this function is named `applyLeft`.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b -> ... -> i -> j -> ... -> m -> n) -> a -> b-> ... -> i -> (j -> ... -> m -> n)
 * @param {Function} fn The function to invoke.
 * @param {...*} [args] Arguments to prepend to `fn` when the returned function is invoked.
 * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn`
 *         with `args` prepended to `fn`'s arguments list.
 * @example
 *
 *      var multiply = function(a, b) { return a * b; };
 *      var double = R.partial(multiply, 2);
 *      double(2); //=> 4
 *
 *      var greet = function(salutation, title, firstName, lastName) {
 *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *      };
 *      var sayHello = R.partial(greet, 'Hello');
 *      var sayHelloToMs = R.partial(sayHello, 'Ms.');
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 */
module.exports = curry(_createPartialApplicator(_concat));

},{"./curry":230,"./internal/_concat":240,"./internal/_createPartialApplicator":241}],264:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');
var curry = require('./curry');
var flip = require('./flip');


/**
 * Accepts as its arguments a function and any number of values and returns a function that,
 * when invoked, calls the original function with all of the values appended to the original
 * function's arguments list.
 *
 * Note that `partialRight` is the opposite of `partial`: `partialRight` fills `fn`'s arguments
 * from the right to the left.  In some libraries this function is named `applyRight`.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b-> ... -> i -> j -> ... -> m -> n) -> j -> ... -> m -> n -> (a -> b-> ... -> i)
 * @param {Function} fn The function to invoke.
 * @param {...*} [args] Arguments to append to `fn` when the returned function is invoked.
 * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn` with
 *         `args` appended to `fn`'s arguments list.
 * @example
 *
 *      var greet = function(salutation, title, firstName, lastName) {
 *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *      };
 *      var greetMsJaneJones = R.partialRight(greet, 'Ms.', 'Jane', 'Jones');
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 */
module.exports = curry(_createPartialApplicator(flip(_concat)));

},{"./curry":230,"./flip":235,"./internal/_concat":240,"./internal/_createPartialApplicator":241}],265:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":243}],266:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys that
 * satisfy the supplied predicate.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick
 * @example
 *
 *      var isUpperCase = function(val, key) { return key.toUpperCase() === key; }
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

},{"./internal/_curry2":243}],267:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });

},{"./internal/_curry2":243}],268:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});

},{"./internal/_curry2":243}],269:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Calls an input function `n` times, returning an array containing the results of those
 * function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0` and is
 * gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (i -> a) -> i -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var list = new Array(len);
  var idx = 0;
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});

},{"./internal/_curry2":243}],270:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across
 * different JS platforms.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});

},{"./internal/_curry1":242,"./keys":261}],271:[function(require,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],272:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":271}],273:[function(require,module,exports){
/*!
* vdom-virtualize
* Copyright 2014 by Marcel Klehr <mklehr@gmx.net>
*
* (MIT LICENSE)
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var VNode = require("virtual-dom/vnode/vnode")
  , VText = require("virtual-dom/vnode/vtext")

module.exports = createVNode

function createVNode(domNode, key) {
  key = key || null // XXX: Leave out `key` for now... merely used for (re-)ordering

  if(domNode.nodeType == 1) return createFromElement(domNode, key)
  if(domNode.nodeType == 3) return createFromTextNode(domNode, key)
  return
}

createVNode.fromHTML = function(html, key) {
  var domNode = document.createElement('div'); // create container
  domNode.innerHTML = html; // browser parses HTML into DOM tree
  var child = domNode.children.length ? domNode.children[0] : domNode.firstChild;
  return createVNode(child, key);
};

function createFromTextNode(tNode) {
  return new VText(tNode.nodeValue)
}


function createFromElement(el) {
  var tagName = el.tagName
  , namespace = el.namespaceURI == 'http://www.w3.org/1999/xhtml'? null : el.namespaceURI
  , properties = getElementProperties(el)
  , children = []

  for (var i = 0; i < el.childNodes.length; i++) {
    children.push(createVNode(el.childNodes[i]/*, i*/))
  }

  return new VNode(tagName, properties, children, null, namespace)
}


function getElementProperties(el) {
  var obj = {}

  props.forEach(function(propName) {
    if(!el[propName]) return

    // Special case: style
    // .style is a DOMStyleDeclaration, thus we need to iterate over all
    // rules to create a hash of applied css properties.
    //
    // You can directly set a specific .style[prop] = value so patching with vdom
    // is possible.
    if("style" == propName) {
      var css = {}
        , styleProp
      if (el.style.length) {
        for(var i=0; i<el.style.length; i++) {
          styleProp = el.style[i]
          css[styleProp] = el.style.getPropertyValue(styleProp) // XXX: add support for "!important" via getPropertyPriority()!
        }
      } else { // IE8
        for (var styleProp in el.style) {
          if (el.style[styleProp]) {
            css[styleProp] = el.style[styleProp];
          }
        }
      }

      obj[propName] = css
      return
    }

    // https://msdn.microsoft.com/en-us/library/cc848861%28v=vs.85%29.aspx
    // The img element does not support the HREF content attribute.
    // In addition, the href property is read-only for the img Document Object Model (DOM) object
    if (el.tagName.toLowerCase() === 'img' && propName === 'href') {
      return;
    }

    // Special case: dataset
    // we can iterate over .dataset with a simple for..in loop.
    // The all-time foo with data-* attribs is the dash-snake to camelCase
    // conversion.
    //
    // *This is compatible with h(), but not with every browser, thus this section was removed in favor
    // of attributes (specified below)!*
    //
    // .dataset properties are directly accessible as transparent getters/setters, so
    // patching with vdom is possible.
    /*if("dataset" == propName) {
      var data = {}
      for(var p in el.dataset) {
        data[p] = el.dataset[p]
      }
      obj[propName] = data
      return
    }*/

    // Special case: attributes
    // these are a NamedNodeMap, but we can just convert them to a hash for vdom,
    // because of https://github.com/Matt-Esch/virtual-dom/blob/master/vdom/apply-properties.js#L57
    if("attributes" == propName){
      var atts = Array.prototype.slice.call(el[propName]);
      var hash = atts.reduce(function(o,a){
        var name = a.name;
        if(obj[name]) return o;
        o[name] = el.getAttribute(a.name);
        return o;
      },{});
      return obj[propName] = hash;
    }
    if("tabIndex" == propName && el.tabIndex === -1) return

    // Special case: contentEditable
    // browser use 'inherit' by default on all nodes, but does not allow setting it to ''
    // diffing virtualize dom will trigger error
    // ref: https://github.com/Matt-Esch/virtual-dom/issues/176
    if("contentEditable" == propName && el[propName] === 'inherit') return

    if('object' === typeof el[propName]) return

    // default: just copy the property
    obj[propName] = el[propName]
    return
  })

  return obj
}

/**
 * DOMNode property white list
 * Taken from https://github.com/Raynos/react/blob/dom-property-config/src/browser/ui/dom/DefaultDOMPropertyConfig.js
 */
var props =

module.exports.properties = [
 "accept"
,"accessKey"
,"action"
,"alt"
,"async"
,"autoComplete"
,"autoPlay"
,"cellPadding"
,"cellSpacing"
,"checked"
,"className"
,"colSpan"
,"content"
,"contentEditable"
,"controls"
,"crossOrigin"
,"data"
//,"dataset" removed since attributes handles data-attributes
,"defer"
,"dir"
,"download"
,"draggable"
,"encType"
,"formNoValidate"
,"href"
,"hrefLang"
,"htmlFor"
,"httpEquiv"
,"icon"
,"id"
,"label"
,"lang"
,"list"
,"loop"
,"max"
,"mediaGroup"
,"method"
,"min"
,"multiple"
,"muted"
,"name"
,"noValidate"
,"pattern"
,"placeholder"
,"poster"
,"preload"
,"radioGroup"
,"readOnly"
,"rel"
,"required"
,"rowSpan"
,"sandbox"
,"scope"
,"scrollLeft"
,"scrolling"
,"scrollTop"
,"selected"
,"span"
,"spellCheck"
,"src"
,"srcDoc"
,"srcSet"
,"start"
,"step"
,"style"
,"tabIndex"
,"target"
,"title"
,"type"
,"value"

// Non-standard Properties
,"autoCapitalize"
,"autoCorrect"
,"property"

, "attributes"
]

var attrs =
module.exports.attrs = [
 "allowFullScreen"
,"allowTransparency"
,"charSet"
,"cols"
,"contextMenu"
,"dateTime"
,"disabled"
,"form"
,"frameBorder"
,"height"
,"hidden"
,"maxLength"
,"role"
,"rows"
,"seamless"
,"size"
,"width"
,"wmode"

// SVG Properties
,"cx"
,"cy"
,"d"
,"dx"
,"dy"
,"fill"
,"fx"
,"fy"
,"gradientTransform"
,"gradientUnits"
,"offset"
,"points"
,"r"
,"rx"
,"ry"
,"spreadMethod"
,"stopColor"
,"stopOpacity"
,"stroke"
,"strokeLinecap"
,"strokeWidth"
,"textAnchor"
,"transform"
,"version"
,"viewBox"
,"x1"
,"x2"
,"x"
,"y1"
,"y2"
,"y"
]

},{"virtual-dom/vnode/vnode":279,"virtual-dom/vnode/vtext":280}],274:[function(require,module,exports){
arguments[4][211][0].apply(exports,arguments)
},{"dup":211}],275:[function(require,module,exports){
arguments[4][212][0].apply(exports,arguments)
},{"dup":212}],276:[function(require,module,exports){
arguments[4][213][0].apply(exports,arguments)
},{"./version":278,"dup":213}],277:[function(require,module,exports){
arguments[4][215][0].apply(exports,arguments)
},{"dup":215}],278:[function(require,module,exports){
arguments[4][216][0].apply(exports,arguments)
},{"dup":216}],279:[function(require,module,exports){
arguments[4][217][0].apply(exports,arguments)
},{"./is-thunk":274,"./is-vhook":275,"./is-vnode":276,"./is-widget":277,"./version":278,"dup":217}],280:[function(require,module,exports){
arguments[4][219][0].apply(exports,arguments)
},{"./version":278,"dup":219}],281:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":288}],282:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":302}],283:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":67}],284:[function(require,module,exports){
arguments[4][198][0].apply(exports,arguments)
},{"dup":198}],285:[function(require,module,exports){
arguments[4][199][0].apply(exports,arguments)
},{"dup":199}],286:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":291}],287:[function(require,module,exports){
arguments[4][200][0].apply(exports,arguments)
},{"../vnode/is-vhook.js":295,"dup":200,"is-object":284}],288:[function(require,module,exports){
arguments[4][201][0].apply(exports,arguments)
},{"../vnode/handle-thunk.js":293,"../vnode/is-vnode.js":296,"../vnode/is-vtext.js":297,"../vnode/is-widget.js":298,"./apply-properties":287,"dup":201,"global/document":283}],289:[function(require,module,exports){
arguments[4][202][0].apply(exports,arguments)
},{"dup":202}],290:[function(require,module,exports){
arguments[4][203][0].apply(exports,arguments)
},{"../vnode/is-widget.js":298,"../vnode/vpatch.js":300,"./apply-properties":287,"./update-widget":292,"dup":203}],291:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":288,"./dom-index":289,"./patch-op":290,"global/document":283,"x-is-array":285}],292:[function(require,module,exports){
arguments[4][205][0].apply(exports,arguments)
},{"../vnode/is-widget.js":298,"dup":205}],293:[function(require,module,exports){
arguments[4][210][0].apply(exports,arguments)
},{"./is-thunk":294,"./is-vnode":296,"./is-vtext":297,"./is-widget":298,"dup":210}],294:[function(require,module,exports){
arguments[4][211][0].apply(exports,arguments)
},{"dup":211}],295:[function(require,module,exports){
arguments[4][212][0].apply(exports,arguments)
},{"dup":212}],296:[function(require,module,exports){
arguments[4][213][0].apply(exports,arguments)
},{"./version":299,"dup":213}],297:[function(require,module,exports){
arguments[4][214][0].apply(exports,arguments)
},{"./version":299,"dup":214}],298:[function(require,module,exports){
arguments[4][215][0].apply(exports,arguments)
},{"dup":215}],299:[function(require,module,exports){
arguments[4][216][0].apply(exports,arguments)
},{"dup":216}],300:[function(require,module,exports){
arguments[4][218][0].apply(exports,arguments)
},{"./version":299,"dup":218}],301:[function(require,module,exports){
arguments[4][220][0].apply(exports,arguments)
},{"../vnode/is-vhook":295,"dup":220,"is-object":284}],302:[function(require,module,exports){
arguments[4][221][0].apply(exports,arguments)
},{"../vnode/handle-thunk":293,"../vnode/is-thunk":294,"../vnode/is-vnode":296,"../vnode/is-vtext":297,"../vnode/is-widget":298,"../vnode/vpatch":300,"./diff-props":301,"dup":221,"x-is-array":285}],303:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _taggedTemplateLiteral = require('babel-runtime/helpers/tagged-template-literal')['default'];

var _Number$parseInt = require('babel-runtime/core-js/number/parse-int')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Number$isInteger = require('babel-runtime/core-js/number/is-integer')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = App;

var _templateObject = _taggedTemplateLiteral(['\n        Main loop panicked, probably because the browser tab\n        was put in the background. Discarding ', 'ms\n      '], ['\n        Main loop panicked, probably because the browser tab\n        was put in the background. Discarding ', 'ms\n      ']);

var _timers = require('timers');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _ramdaSrcKeys = require('ramda/src/keys');

var _ramdaSrcKeys2 = _interopRequireDefault(_ramdaSrcKeys);

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _ramdaSrcForEach = require('ramda/src/forEach');

var _ramdaSrcForEach2 = _interopRequireDefault(_ramdaSrcForEach);

var _ramdaSrcFind = require('ramda/src/find');

var _ramdaSrcFind2 = _interopRequireDefault(_ramdaSrcFind);

var _ramdaSrcFilter = require('ramda/src/filter');

var _ramdaSrcFilter2 = _interopRequireDefault(_ramdaSrcFilter);

var _ramdaSrcTimes = require('ramda/src/times');

var _ramdaSrcTimes2 = _interopRequireDefault(_ramdaSrcTimes);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcDefaultTo = require('ramda/src/defaultTo');

var _ramdaSrcDefaultTo2 = _interopRequireDefault(_ramdaSrcDefaultTo);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _mainloopJs = require('mainloop.js');

var _mainloopJs2 = _interopRequireDefault(_mainloopJs);

var _util = require('../util');

var _dragEventsSetup2 = require('../drag-events/setup');

var _dragEventsSetup3 = _interopRequireDefault(_dragEventsSetup2);

var _bot = require('../bot');

var _bot2 = _interopRequireDefault(_bot);

var _board = require('../board');

var _board2 = _interopRequireDefault(_board);

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 *
 */

var defaultDimension = (0, _ramdaSrcDefaultTo2['default'])(20);
var defaultMargin = (0, _ramdaSrcDefaultTo2['default'])(0.5);

/**
 * Component
 */

function App(opts) {
  var undo = opts.undo;
  var redo = opts.redo;

  var rows = defaultDimension(opts.rows);
  var columns = defaultDimension(opts.columns);
  var margin = defaultMargin(opts.margin);
  var maxWinners = opts.maxWinners || 3;
  var winners = [];
  var _hasFinished = false;
  var startTime = null;
  var pauseTime = null;

  assertRows(rows);
  assertColumns(columns);

  var cells = createCells();

  var _dragEventsSetup = (0, _dragEventsSetup3['default'])();

  var listenTo = _dragEventsSetup.listenTo;
  var unlistenTo = _dragEventsSetup.unlistenTo;

  var botIdentity = _bot2['default'].createIdentity();

  _mainloopJs2['default']
  // Values below `1000 / 144` are discouraged and
  // below `1000 / 240` are strongly discouraged
  .setSimulationTimestep(500).setUpdate(update).setDraw(draw).setEnd(end);

  var state = _mercury2['default'].state({
    rows: _mercury2['default'].value(rows),
    columns: _mercury2['default'].value(columns),
    margin: _mercury2['default'].value(margin), // percent
    cells: _mercury2['default'].varhash(cells),
    bots: _mercury2['default'].varhash({}),
    botIdentity: _mercury2['default'].value(botIdentity),
    fps: _mercury2['default'].value(0), // Used only in development
    isReady: _mercury2['default'].value(false),
    isStarted: _mercury2['default'].value(false),
    isRunning: _mercury2['default'].value(false),
    isCellEnabled: _mercury2['default'].value(isCellEnabled),
    isDraggingEnabled: _mercury2['default'].value(false),
    start: _mercury2['default'].value(start),
    pause: _mercury2['default'].value(pause),
    reset: _mercury2['default'].value(reset),
    getWinners: _mercury2['default'].value(getWinners),
    enableDragEvents: _mercury2['default'].value(enableDragEvents),
    disableDragEvents: _mercury2['default'].value(disableDragEvents),
    board: (0, _board2['default'])({ undo: undo, redo: redo }),
    channels: {
      onStart: onStart, onPause: onPause, onReset: onReset,
      addBotRandomly: addBotRandomly,
      checkReadyState: checkReadyState
    }
  });

  function createCells() {
    // TODO: Check if can pass `onAddBot()` via `props` on `render()`
    var cell = (0, _ramdaSrcPartialRight2['default'])((0, _ramdaSrcPartial2['default'])(_cell2['default'], columns), onAddBot);
    var cells = (0, _ramdaSrcTimes2['default'])(cell, rows * columns);
    return cells;
  }

  function start(cb) {
    console.log('start()');
    (0, _timers.setImmediate)(function () {
      var disableDragEvents = state.disableDragEvents();
      disableDragEvents();

      _mainloopJs2['default'].start();

      (0, _timers.setImmediate)(function () {
        (0, _raf2['default'])(function () {
          // The loop should have started by now
          if (startTime === null) {
            startTime = new Date().getTime();
          } else if (pauseTime !== null) {
            startTime += new Date().getTime() - pauseTime;
            pauseTime = null;
          }

          // state.isRunning.set(MainLoop.isRunning());
          state.isRunning.set(true);
          state.isStarted.set(true);

          if (cb) cb();
        });
      });
    });
  }

  function pause(cb) {
    (0, _timers.setImmediate)(function () {
      (0, _raf2['default'])(function () {
        _mainloopJs2['default'].stop();

        pauseTime = new Date().getTime();

        // state.isRunning.set(MainLoop.isRunning());
        state.isRunning.set(false);
        state.fps.set(0);

        if (cb) cb();
      });
    });
  }

  function reset(cb) {
    pause(function () {
      winners = [];
      _hasFinished = false;
      startTime = null;
      pauseTime = null;

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      (0, _ramdaSrcForEach2['default'])(state.bots['delete'], (0, _ramdaSrcKeys2['default'])(state.bots));

      // TODO: See https://github.com/nrw/observ-varhash/issues/15 for
      // comments related to transactions, ie. bulk updates
      var nextCells = createCells();

      (0, _ramdaSrcForEach2['default'])(function (idx) {
        return state.cells.put(idx, nextCells[idx], state.cells);
      }, (0, _ramdaSrcKeys2['default'])(state.cells));

      state.isReady.set(false);
      state.isStarted.set(false);

      var enableDragEvents = state.enableDragEvents();
      enableDragEvents();

      if (cb) cb();
    });
  }

  function isCellEnabled(index) {
    return state.cells.get(index).isEnabled()();
  }

  function onAddBot(spec) {
    registerBot(state, spec);
  }

  // TODO: Consider to `memoize()` this function,
  // but we need to cleen the cache after the game has finished,
  // ie. inside `reset()`
  function isWinner(bot) {
    return !!(0, _ramdaSrcFind2['default'])(function (_ref) {
      var id = _ref.id;
      return bot.id() === id;
    }, winners);
  }

  function getWinners() {
    return winners.length ? winners : null;
  }

  function hasGameFinished() {
    if (_hasFinished) return true;

    var totalBots = (0, _ramdaSrcKeys2['default'])(state.bots).length;
    var totalWinners = winners.length;

    var hasFinished = totalWinners > 0 && (totalWinners === totalBots || totalWinners === maxWinners || totalWinners === totalBots - 1);

    if (hasFinished) _hasFinished = true;

    return hasFinished;
  }

  function enableDragEvents() {
    if (state.isDraggingEnabled()) return;
    listenTo();
    state.isDraggingEnabled.set(true);
  }

  function disableDragEvents() {
    if (!state.isDraggingEnabled()) return;
    unlistenTo();
    state.isDraggingEnabled.set(false);
  }

  function update() {
    // Game has finished, do nothing
    if (hasGameFinished()) return;

    var currTime = new Date().getTime();

    (0, _ramdaSrcForEach2['default'])(function (bot) {
      // Bot is a winner, do nothing
      if (isWinner(bot)) return;

      var prevIndex = bot.prevIndex;
      var index = bot.index();
      var move = bot.move();
      var nextIndex = move(prevIndex, index);

      if (nextIndex !== index) {
        if (prevIndex !== index) {
          bot.prevIndex = index;
        }

        bot.nextIndex = nextIndex;

        // Bot won
        if (state.cells.get(nextIndex).isExit() && !hasGameFinished()) {
          winners.push({
            id: bot.id(),
            time: currTime - startTime
          });
        }
      }
    }, (0, _ramdaSrcValues2['default'])(state.bots));
  }

  function draw() {
    (0, _ramdaSrcForEach2['default'])(function (bot) {
      if (bot.nextIndex !== bot.index()) {
        // TODO: If we leave `row` and `col` properties inside
        // `Bot()` instances, we need to update them too here
        bot.index.set(bot.nextIndex);
      }
    }, (0, _ramdaSrcValues2['default'])(state.bots));
  }

  // TODO: Do that only in development (use "envify" for "browserify")
  function end(fps, panic) {
    if (hasGameFinished()) {
      pause();
      return;
    }

    state.fps.set(_Number$parseInt(fps));

    if (panic) {
      // This pattern introduces non-deterministic behaviour,
      // but in this case it's better than the alternative (the application
      // would look like it was running very quickly until the simulation
      // caught up to real time). See the documentation for
      // `MainLoop.setEnd()` for additional explanation.
      var discardedTime = Math.round(_mainloopJs2['default'].resetFrameDelta());
      /*eslint-disable no-console*/
      console.warn((0, _util.ln)(_templateObject, discardedTime));
      /*eslint-enable no-console*/
    }
  }

  return state;
}

/**
 * Render component.
 */

var boardProps = memoize(function (columns, margin, cells, bots, botIdentity, isReady, isRunning, winners, onStart, onPause, onReset, addBotRandomly, checkReadyState, isStarted) {
  return {
    columns: columns, margin: margin, cells: cells,
    bots: bots, botIdentity: botIdentity,
    isReady: isReady, isRunning: isRunning, winners: winners,
    onStart: onStart, onPause: onPause, onReset: onReset,
    addBotRandomly: addBotRandomly,
    checkReadyState: checkReadyState, isStarted: isStarted
  };
});

App.render = function render(state) {
  var isRunning = state.isRunning;
  var isDraggingEnabled = state.isDraggingEnabled;
  var enableDragEvents = state.enableDragEvents;
  var channels = state.channels;

  var winners = isRunning ? null : state.getWinners();

  return (0, _mercury.h)('section.amaze-App', {
    'ev-hook': new Hook({
      isRunning: isRunning,
      isDraggingEnabled: isDraggingEnabled,
      enableDragEvents: enableDragEvents
    })
  }, [_mercury2['default'].partial(_board2['default'].render, state.board, boardProps(state.columns, state.margin, state.cells, state.bots, state.botIdentity, state.isReady, isRunning, winners, channels.onStart, channels.onPause, channels.onReset, channels.addBotRandomly, channels.checkReadyState, state.isStarted))]);
};

/**
 *
 */

// TODO: Do that only in development (use "envify" for "browserify")
// hg.partial(renderFps, state.fps), //DEV-ONLY/
function Hook(opts) {
  _Object$assign(this, opts);
}

Hook.prototype.hook = function hook() {
  var _this = this;

  if (this.isDraggingEnabled || this.isRunning) return;

  (0, _timers.setImmediate)(function () {
    // DOM element will be in the real DOM by now
    _this.enableDragEvents();
  });
};

/**
 *
 */

function addBotRandomly(state, _spec) {
  var isEntryCell = function isEntryCell(cell) {
    return cell.isEntry();
  };
  var filterEntryCells = (0, _ramdaSrcFilter2['default'])(isEntryCell);
  var entryCells = filterEntryCells((0, _ramdaSrcValues2['default'])(state.cells));

  if (!entryCells.length) return;

  var randIndex = (0, _util.randomIntFromRange)(0, entryCells.length - 1);
  var index = entryCells[randIndex].index();

  // TODO: Check if it's better to not store `row` and `col`,
  // inside `Bot` instance
  var spec = _Object$assign({}, _spec, { index: index });

  registerBot(state, spec);
}

/**
 *
 */

function registerBot(state, spec) {
  state.bots.put(spec.id, (0, _bot2['default'])(state.rows(), state.columns(), state.isCellEnabled(), spec));

  state.botIdentity.set(_bot2['default'].createIdentity());

  checkReadyState(state);
}

/**
 *
 */

function checkReadyState(state) {
  if ((0, _ramdaSrcKeys2['default'])(state.bots).length && exitCellsExist(state)
  /*&& !state.isReady()*/) {
      state.isReady.set(true);
    } else {
    state.isReady.set(false);
  }
}

/**
 *
 */

function exitCellsExist(state) {
  return !!(0, _ramdaSrcFind2['default'])(function (cell) {
    return cell.isExit();
  }, (0, _ramdaSrcValues2['default'])(state.cells));
}

/**
 *
 */

function onStart(state) {
  var start = state.start();
  start();
}

/**
 *
 */

function onPause(state) {
  var pause = state.pause();
  pause();
}

/**
 *
 */

function onReset(state) {
  var reset = state.reset();
  reset();
}

/**
 * Used only in development.
 */

function renderFps(fps) {
  return (0, _mercury.h)('section.amaze-App-fpsMeter', fps + ' FPS');
}

/**
 *
 */

function assertRows(rows) {
  if (rows != null && (!_Number$isInteger(rows) || rows < 1)) {
    throw new TypeError((0, _util.ln)('Invalid "rows" option,\n      expected positive integer\n      (got ' + rows + ' :: ' + typeof rows + ')'));
  }

  return true;
}

/**
 *
 */

function assertColumns(columns) {
  if (columns != null && (!_Number$isInteger(columns) || columns < 1)) {
    throw new TypeError((0, _util.ln)('Invalid "columns" option,\n      expected positive integer\n      (got ' + columns + ' :: ' + typeof columns + '))'));
  }

  return true;
}
module.exports = exports['default'];

},{"../board":304,"../bot":308,"../cell":310,"../drag-events/setup":312,"../util":324,"babel-runtime/core-js/number/is-integer":2,"babel-runtime/core-js/number/parse-int":3,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/tagged-template-literal":13,"mainloop.js":73,"memoizee":79,"mercury":134,"raf":225,"ramda/src/defaultTo":232,"ramda/src/filter":233,"ramda/src/find":234,"ramda/src/forEach":236,"ramda/src/keys":261,"ramda/src/partial":263,"ramda/src/partialRight":264,"ramda/src/times":269,"ramda/src/values":270,"timers":69}],304:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Board;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _grid = require('../grid');

var _grid2 = _interopRequireDefault(_grid);

var _controls = require('../controls');

var _controls2 = _interopRequireDefault(_controls);

var _results = require('../results');

var _results2 = _interopRequireDefault(_results);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Board(opts) {
  var undo = opts.undo;
  var redo = opts.redo;

  return _mercury2['default'].state({
    controls: (0, _controls2['default'])({ undo: undo, redo: redo })
  });
}

/**
 * Render component.
 */

var gridProps = memoize(function (columns, margin, cells, bots, checkReadyState, isStarted) {
  return { columns: columns, margin: margin, cells: cells, bots: bots, checkReadyState: checkReadyState, isStarted: isStarted };
});

var controlsProps = memoize(function (botIdentity, isReady, isRunning, onStart, onPause, onReset, addBotRandomly, isStarted, winners) {
  return {
    botIdentity: botIdentity, isReady: isReady, isRunning: isRunning, onStart: onStart, onPause: onPause, onReset: onReset,
    addBotRandomly: addBotRandomly, isStarted: isStarted, winners: winners
  };
});

var resultsProps = memoize(function (bots, winners) {
  return { bots: bots, winners: winners };
});

Board.render = function render(state, props) {
  var controls = state.controls;

  return (0, _mercury.h)('section.amaze-Board', [_mercury2['default'].partial(renderContent, props), _mercury2['default'].partial(_controls2['default'].render, controls, controlsProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['botIdentity', 'isReady', 'isRunning', 'onStart', 'onPause', 'onReset', 'addBotRandomly', 'isStarted', 'winners'], props))))]);
};

/**
 *
 */

function renderContent(props) {
  return (0, _mercury.h)('.amaze-Board-content', [_mercury2['default'].partial(_grid2['default'].render, gridProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted'], props)))), props.winners && _mercury2['default'].partial(_results2['default'].render, resultsProps(props.bots, props.winners))]);
}
module.exports = exports['default'];

},{"../controls":311,"../grid":318,"../results":321,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/partialRight":264,"ramda/src/props":268}],305:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BotHandle;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _gestures = require('../gestures');

var _dragEventsSource = require('../drag-events/source');

var _dragEventsSource2 = _interopRequireDefault(_dragEventsSource);

/**
 * Component
 */

function BotHandle() {
  return _mercury2['default'].state({
    isDragged: _mercury2['default'].value(false),
    channels: { onDrag: onDrag }
  });
}

/**
 * Render component.
 */

BotHandle.render = function render(state, props) {
  var isDragged = state.isDragged;
  var channels = state.channels;
  var botIdentity = props.botIdentity;
  var addBotRandomly = props.addBotRandomly;
  var disabled = props.disabled;

  return (0, _mercury.h)('.amaze-BotHandle', (0, _mercury.h)('div', _Object$assign({
    title: 'Drag in or double tap to add a new Bot',
    draggable: !disabled,
    className: (0, _classnames2['default'])({
      'amaze-BotHandle-draggable': true,
      'amaze-BotHandle-draggable--disabled': disabled,
      'amaze-BotHandle-draggable--dragged': isDragged
    }),
    style: {
      backgroundColor: 'rgb(' + botIdentity.color.join() + ')'
    }
  }, !disabled ? {
    'ev-event': [(0, _dragEventsSource2['default'])(channels.onDrag, { botIdentity: botIdentity }), (0, _gestures.sendDoubleTap)(addBotRandomly, _Object$assign({}, botIdentity))]
  } : {})));
};

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragstart':
      return onDragstart(state, data);
    // case 'drag': return _onDrag(state, data);
    case 'dragend':
      return onDragend(state, data);
    // no default
  }
}

/**
 *
 */

function onDragstart(state, data) {
  state.isDragged.set(true);

  var dataToTransfer = JSON.stringify(data.botIdentity);
  data.dataTransfer.setData('text/plain', dataToTransfer);
}

/**
 *
 */

function onDragend(state) {
  state.isDragged.set(false);
}
module.exports = exports['default'];

},{"../drag-events/source":313,"../gestures":316,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"mercury":134}],306:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BotIndicators;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcAddIndex = require('ramda/src/addIndex');

var _ramdaSrcAddIndex2 = _interopRequireDefault(_ramdaSrcAddIndex);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _indicator = require('./indicator');

var _indicator2 = _interopRequireDefault(_indicator);

var mapIndexed = (0, _ramdaSrcAddIndex2['default'])(_ramdaSrcMap2['default']);

/**
 * Component
 */

function BotIndicators() {
  return null;
}

/**
 * Render component.
 */

BotIndicators.render = function render(columns, botIndicators) {
  var margin = 0; // percent
  var cellWidth = 100 / columns - 2 * margin; // percent

  var renderCell = (0, _ramdaSrcPartial2['default'])(_mercury2['default'].partial, _indicator2['default'].render, columns, cellWidth, margin);
  var renderCells = mapIndexed(renderCell);

  return (0, _mercury.h)('.amaze-BotIndicators.u-cf',
  // { style: { padding: `${margin / 2}%` } }, //REF//
  renderCells(botIndicators));
};
module.exports = exports['default'];

},{"./indicator":307,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/addIndex":227,"ramda/src/map":262,"ramda/src/partial":263}],307:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Indicator;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _mercury = require('mercury');

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Indicator() {
  return null;
}

/**
 * Render component.
 */

var indicatorStyle = memoize(function (columns, width, margin, col) {
  if (margin === undefined) margin = 0;

  return {
    width: width + '%',
    'padding-bottom': width + '%',
    margin: margin + '%',
    clear: col == 0 ? 'left' : col == columns - 1 ? 'right' : 'none' };
});

// TODO: Consider to not assign `clear: 'none'`
Indicator.render = function render(columns, width, margin, botIndicator, index) {
  var row = Math.floor(index / columns);
  var col = index - row * columns;

  return (0, _mercury.h)('.amaze-BotIndicators-indicator', {
    key: botIndicator.id,
    style: indicatorStyle(columns, width, margin, col)
  }, (0, _mercury.h)('.amaze-BotIndicators-indicatorContent', {
    style: {
      backgroundColor: 'rgb(' + botIndicator.color.join() + ')'
    }
  }));
};
module.exports = exports['default'];

},{"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/partialRight":264}],308:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Bot;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcFilter = require('ramda/src/filter');

var _ramdaSrcFilter2 = _interopRequireDefault(_ramdaSrcFilter);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _ramdaSrcKeys = require('ramda/src/keys');

var _ramdaSrcKeys2 = _interopRequireDefault(_ramdaSrcKeys);

var _ramdaSrcPickBy = require('ramda/src/pickBy');

var _ramdaSrcPickBy2 = _interopRequireDefault(_ramdaSrcPickBy);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _util = require('../util');

/**
 *
 */

function Bot(rows, columns, isCellEnabled, spec) {
  var totalCells = rows * columns;
  var _move = (0, _ramdaSrcPartial2['default'])(move, totalCells, columns, isCellEnabled, isValidIndex);

  // TODO: Consider to not store `col` and `row`,
  // otherwise we need to update them too while "moving"
  return _mercury2['default'].struct({
    id: _mercury2['default'].value(spec.id),
    prevIndex: spec.index,
    index: _mercury2['default'].value(spec.index),
    nextIndex: spec.index,
    col: _mercury2['default'].value(spec.col),
    row: _mercury2['default'].value(spec.row),
    color: _mercury2['default'].value(spec.color),
    move: _mercury2['default'].value(_move)
  });

  function isValidIndex(totalIndexes, prevIndex, index, nextIndex) {
    if (nextIndex === prevIndex) {
      if (totalIndexes > 1) {
        return false;
      }
    }

    return true;
  }
}

/**
 *
 */

// TODO: Consider to get color from uuid conversion
Bot.createIdentity = function createIdentity() {
  var id = _uuid2['default'].v4();

  // TODO: Prevent from creating duplicated colors. Consider also
  // to not create vary similar colors
  var color = (0, _util.randomRgbColor)({
    r: [0, 180],
    g: [0, 120],
    b: [0, 220]
  });

  return { id: id, color: color };
};

/**
 *
 */

function move(totalCells, columns, isCellEnabled, isValidIndex, prevIndex, index) {
  var directions = getAvailableDirections(totalCells, columns, index);

  var indexes = getAvailableIndexes(columns, index, directions);

  function filterIndexes(all) {
    var filterEnabled = (0, _ramdaSrcFilter2['default'])(isCellEnabled);

    var enabled = filterEnabled(all);

    var filterValid = (0, _ramdaSrcFilter2['default'])((0, _ramdaSrcPartial2['default'])(isValidIndex, enabled.length, prevIndex, index));

    return filterValid(enabled);
  }

  var validIndexes = filterIndexes(indexes);

  var nextIndex = pickRandomIndex(validIndexes);

  return nextIndex !== null ? nextIndex : index;
};

/**
 *
 */

function getAvailableDirections(totalCells, columns, index) {
  var validDirections = pickValidDirections({
    u: !isTopBoundary(totalCells, columns, index),
    r: !isRightBoundary(totalCells, columns, index),
    d: !isBottomBoundary(totalCells, columns, index),
    l: !isLeftBoundary(totalCells, columns, index)
  });

  return (0, _ramdaSrcKeys2['default'])(validDirections);
}

/**
 *
 */

var isValidDirection = function isValidDirection(val) {
  return val === true;
};
var pickValidDirections = (0, _ramdaSrcPickBy2['default'])(isValidDirection);

/**
 *
 */

function getAvailableIndexes(columns, index, directions) {
  var indexByDirection = (0, _ramdaSrcPartial2['default'])(getIndexByDirection, columns, index);
  return (0, _ramdaSrcMap2['default'])(indexByDirection, directions);
}

/**
 *
 */

function getIndexByDirection(columns, index, direction) {
  switch (direction) {
    case 'u':
      return moveUp(columns, index);
    case 'r':
      return moveRight(columns, index);
    case 'd':
      return moveDown(columns, index);
    case 'l':
      return moveLeft(columns, index);
    // no default
  }
}

/**
 *
 */

function pickRandomIndex(indexes) {
  var totalIndexes = indexes.length;
  return totalIndexes ? indexes[(0, _util.randomIntFromRange)(0, totalIndexes - 1)] : null;
}

/**
 *
 */

function moveUp(columns, index) {
  return index - columns;
}

/**
 *
 */

function moveRight(columns, index) {
  return index + 1;
}

/**
 *
 */

function moveDown(columns, index) {
  return index + columns;
}

/**
 *
 */

function moveLeft(columns, index) {
  return index - 1;
}

/**
 *
 */

function isBoundary(totalCells, columns, index) {
  return isTopBoundary(totalCells, columns, index) || isRightBoundary(totalCells, columns, index) || isBottomBoundary(totalCells, columns, index) || isLeftBoundary(totalCells, columns, index);
}

/**
 *
 */

function isTopBoundary(totalCells, columns, index) {
  return index < columns;
}

/**
 *
 */

function isRightBoundary(totalCells, columns, index) {
  return index == columns - 1 || (index + 1) % columns == 0;
}

/**
 *
 */

function isBottomBoundary(totalCells, columns, index) {
  return index >= totalCells - columns;
}

/**
 *
 */

function isLeftBoundary(totalCells, columns, index) {
  return index == 0 || index == columns || index % columns == 0;
}
module.exports = exports['default'];

},{"../util":324,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/filter":233,"ramda/src/keys":261,"ramda/src/map":262,"ramda/src/partial":263,"ramda/src/pickBy":266,"uuid":272}],309:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Button;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gestures = require('../gestures');

/**
 * Component
 */

function Button() {
  return _mercury2['default'].state({
    isActive: _mercury2['default'].value(false),
    channels: { onTapStart: onTapStart, onTapEnd: onTapEnd, onTapCancel: onTapCancel }
  });
}

/**
 * Render component.
 */

Button.render = function render(state) {
  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var evEvent = props['ev-event'];
  var evClick = props['ev-click'];
  var isTapped = props.isTapped;
  var className = props.className;
  var children = props.children;

  var rest = _objectWithoutProperties(props, ['ev-event', 'ev-click', 'isTapped', 'className', 'children']);

  var defaultHandlers = [(0, _gestures.sendTapStart)(state.channels.onTapStart), (0, _gestures.sendTapEnd)(state.channels.onTapEnd), (0, _gestures.sendTapCancel)(state.channels.onTapCancel)];

  var handlers = defaultHandlers.concat(evEvent ? Array.isArray(evEvent) ? evEvent : [evEvent] : []);

  return (0, _mercury.h)('button.amaze-Button', _Object$assign(_extends({
    type: 'button'
  }, rest, {
    className: (0, _classnames2['default'])(state.isActive && 'amaze-Button--active', className)
  }), evClick ? { 'ev-click': evClick } : { 'ev-event': handlers }), children);
};

/**
 *
 */

function onTapStart(state) {
  state.isActive.set(true);
}

/**
 *
 */

function onTapEnd(state) {
  state.isActive.set(false);
}

/**
 *
 */

function onTapCancel(state) {
  state.isActive.set(false);
}
module.exports = exports['default'];

},{"../gestures":316,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/extends":10,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/object-without-properties":12,"classnames":70,"mercury":134}],310:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Cell;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _gestures = require('../gestures');

var _dragEventsTarget = require('../drag-events/target');

var _dragEventsTarget2 = _interopRequireDefault(_dragEventsTarget);

var _tile = require('../tile');

var _tile2 = _interopRequireDefault(_tile);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Cell(columns, index, onAddBot) {
  var row = Math.floor(index / columns);
  var col = index - row * columns;

  var state = _mercury2['default'].state({
    columns: _mercury2['default'].value(columns),
    index: _mercury2['default'].value(index),
    row: _mercury2['default'].value(row),
    col: _mercury2['default'].value(col),
    isActive: _mercury2['default'].value(false),
    isEntry: _mercury2['default'].value(false),
    isExit: _mercury2['default'].value(false),
    isEnabled: _mercury2['default'].value(isEnabled),
    isDragHovered: _mercury2['default'].value(false),
    onDrop: _mercury2['default'].value(onDrop),
    addBot: _mercury2['default'].value(addBot),
    channels: { onTap: onTap, onDrag: onDrag }
  });

  function isEnabled() {
    return state.isActive() || state.isEntry() || state.isExit();
  }

  function addBot(botIdentity) {
    // TODO: Check if it's better to not store `row` and `col`,
    // inside `Bot` instance
    onAddBot(_Object$assign({}, botIdentity, { index: index, row: row, col: col }));
  }

  return state;
}

/**
 * Render component.
 */

var cellStyle = memoize(function (columns, col, width) {
  var margin = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  return {
    width: width + '%',
    'padding-bottom': width + '%',
    margin: margin + '%',
    clear: col == 0 ? 'left' : col == columns - 1 ? 'right' : 'none' };
});

// TODO: Consider to not assign `clear: 'none'`
var tileProps = memoize(function (isActive, isEntry, isExit, isDragHovered, botIndicators) {
  return { isActive: isActive, isEntry: isEntry, isExit: isExit, isDragHovered: isDragHovered, botIndicators: botIndicators };
});

Cell.render = function render(state, props, botIndicators) {
  var isEntry = state.isEntry;
  var channels = state.channels;

  var surfaceProps = props.isStarted ? {} : !isEntry ? {
    'ev-event': [(0, _gestures.sendTap)(channels.onTap, { botIndicators: botIndicators }), (0, _gestures.sendTap)(props.checkReadyState)]
  } : {
    'ev-event': [(0, _gestures.sendTap)(channels.onTap, { botIndicators: botIndicators }), (0, _dragEventsTarget2['default'])(channels.onDrag), (0, _gestures.sendTap)(props.checkReadyState)]
  };

  return (0, _mercury.h)('.amaze-Cell', {
    style: cellStyle.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'col'], state)).concat(_toConsumableArray((0, _ramdaSrcProps2['default'])(['width', 'margin'], props))))
  }, [_mercury2['default'].partial(_tile2['default'].render, tileProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['isActive', 'isEntry', 'isExit', 'isDragHovered'], state)).concat([botIndicators]))), (0, _mercury.h)('.amaze-Cell-surface', surfaceProps)]);
};

/**
 *
 */

function onTap(state, _ref) {
  var botIndicators = _ref.botIndicators;

  // TODO: Consider to rename `snapshot`
  var snapshot = state();

  if (botIndicators.length) return;

  if (!snapshot.isActive) {
    state.isActive.set(true);
  } else if (snapshot.isExit) {
    state.set(_Object$assign({}, snapshot, { isExit: false, isActive: false }));
  } else if (snapshot.isEntry) {
    state.set(_Object$assign({}, snapshot, { isEntry: false, isExit: true }));
  } else {
    state.isEntry.set(true);
  }
}

/**
 *
 */

function onDrag(state, data) {
  switch (data.type) {
    case 'dragenter':
      return onDragenter(state, data);
    // case 'dragover': return onDragover(state, data);
    case 'dragleave':
      return onDragleave(state, data);
    case 'drop':
      return onDrop(state, data);
    // no default
  }
}

/**
 *
 */

function onDragenter(state) {
  state.isDragHovered.set(true);
}

/**
 *
 */

function onDragleave(state) {
  state.isDragHovered.set(false);
}

/**
 *
 */

function onDrop(state, data) {
  state.isDragHovered.set(false);

  var botIdentity = JSON.parse(data.dataTransfer.getData('text/plain'));
  var addBot = state.addBot();

  addBot(botIdentity);
}
module.exports = exports['default'];

},{"../drag-events/target":314,"../gestures":316,"../tile":323,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/partialRight":264,"ramda/src/props":268}],311:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Controls;

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _gestures = require('../gestures');

var _logo = require('../logo');

var _logo2 = _interopRequireDefault(_logo);

var _botHandle = require('../bot-handle');

var _botHandle2 = _interopRequireDefault(_botHandle);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Controls(_ref) {
  var undo = _ref.undo;
  var redo = _ref.redo;

  return _mercury2['default'].state({
    startPauseBtn: (0, _button2['default'])(),
    resetBtn: (0, _button2['default'])(),
    undoBtn: (0, _button2['default'])(),
    redoBtn: (0, _button2['default'])(),
    botHandle: (0, _botHandle2['default'])(),
    channels: { undo: undo, redo: redo }
  });
}

/**
 * Render component.
 */

var startPauseBtnProps = memoize(function (isReady, isRunning, onStart, onPause, onReset, winners) {
  var disabled = !isReady;

  return _Object$assign({
    disabled: disabled,
    className: isRunning ? 'amaze-Button--pause' : 'amaze-Button--start',
    children: winners ? 'New' : isRunning ? 'Pause' : 'Start'
  }, !disabled ? {
    'ev-event': (0, _gestures.sendTap)(winners ? onReset : isRunning ? onPause : onStart)
  } : {});
});

var resetBtnProps = memoize(function (isRunning, onReset, winners) {
  var disabled = isRunning || winners && winners.length;

  return _Object$assign({
    disabled: disabled,
    children: 'Reset'
  }, !disabled ? {
    'ev-event': (0, _gestures.sendTap)(onReset)
  } : {});
});

var undoBtnProps = memoize(function (undo, isStarted) {
  var disabled = isStarted;

  return _Object$assign({
    disabled: disabled,
    children: 'Undo'
  }, !disabled ? {
    'ev-click': _mercury2['default'].sendClick(undo)
  } : {});
});

var redoBtnProps = memoize(function (redo, isStarted) {
  var disabled = isStarted;

  return _Object$assign({
    disabled: disabled,
    children: 'Redo'
  }, !disabled ? {
    'ev-click': _mercury2['default'].sendClick(redo)
  } : {});
});

var botHandleProps = memoize(function (botIdentity, addBotRandomly, isStarted) {
  var disabled = isStarted;

  return { botIdentity: botIdentity, addBotRandomly: addBotRandomly, disabled: disabled };
});

Controls.render = function render(state, props) {
  var botIdentity = props.botIdentity;
  var isReady = props.isReady;
  var isStarted = props.isStarted;
  var isRunning = props.isRunning;
  var onStart = props.onStart;
  var onPause = props.onPause;
  var onReset = props.onReset;
  var winners = props.winners;

  return (0, _mercury.h)('section.amaze-Controls.u-cf', [_mercury2['default'].partial(_logo2['default'].render), (0, _mercury.h)('.amaze-Controls-buttons.u-cf', [_mercury2['default'].partial(_button2['default'].render, state.startPauseBtn, startPauseBtnProps(isReady, isRunning, onStart, onPause, onReset, winners)), _mercury2['default'].partial(_button2['default'].render, state.resetBtn, resetBtnProps(isRunning, onReset, winners)), _mercury2['default'].partial(_button2['default'].render, state.undoBtn, undoBtnProps(state.channels.undo, isStarted)), _mercury2['default'].partial(_button2['default'].render, state.redoBtn, redoBtnProps(state.channels.redo, isStarted))]), _mercury2['default'].partial(_botHandle2['default'].render, state.botHandle, botHandleProps(botIdentity, props.addBotRandomly, isStarted))]);
};
module.exports = exports['default'];

},{"../bot-handle":305,"../button":309,"../gestures":316,"../logo":320,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/partialRight":264}],312:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

/**
 * Drag events
 */

var SOURCE_EVENTS = ['dragstart', 'drag', 'dragend'];
exports.SOURCE_EVENTS = SOURCE_EVENTS;
var TARGET_EVENTS = ['dragenter', 'dragover', 'dragleave', 'drop'];
exports.TARGET_EVENTS = TARGET_EVENTS;
var EVENTS = SOURCE_EVENTS.concat(TARGET_EVENTS);

exports.EVENTS = EVENTS;
/**
 *
 */

exports['default'] = function () {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var mode = opts.mode;
  var events = opts.events;

  var delegator = _mercury2['default'].Delegator();

  return { listenTo: listenTo, unlistenTo: unlistenTo };

  function listenTo() {
    EVENTS.forEach(_listenTo);
  }

  function unlistenTo() {
    EVENTS.forEach(_unlistenTo);
  }

  function _listenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.listenTo(name);
  }

  function _unlistenTo(name) {
    if (!isEventEnabled(name)) return;
    delegator.unlistenTo(name);
  }

  function isEventEnabled(name) {
    if (events && ! ~events.indexOf(name)) {
      return false;
    }

    if (!mode) return true;

    if (mode) {
      if (mode === 'source' && ! ~SOURCE_EVENTS.indexOf(name)) {
        return false;
      }

      if (mode === 'target' && ! ~TARGET_EVENTS.indexOf(name)) {
        return false;
      }
    }

    return true;
  }
};

},{"babel-runtime/helpers/interop-require-default":11,"mercury":134}],313:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _setup = require('./setup');

/**
 *
 */

exports['default'] = _mercury2['default'].BaseEvent(handleDrag);

// TODO: Handle also "drag" event. First need to be able to specify
// the events that we want to listent to, via `this.data`.
// // If not specified listen to all `SOURCE_EVENTS`
// TODO: Consider to move some functions to the outer scope
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget;
  var listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragstart') {
    var triggerDragstart = !listenersAdded;
    addListeners();
    if (triggerDragstart) dragstart(ev);
  }

  // TODO: Check if can remove `target` from broadcasted data,
  // from all/some handlers
  function dragstart(e) {
    if (!isRootElementOfEvent(e)) return;

    var dataTransfer = e._rawEvent.dataTransfer;
    dataTransfer.effectAllowed = 'move';

    broadcast(addData({
      type: 'dragstart',
      target: e.target,
      dataTransfer: dataTransfer
    }));
  }

  function dragend(e) {
    if (!isRootElementOfEvent(e)) return;

    removeListeners();

    broadcast(addData({
      type: 'dragend',
      target: e.target
    }));
  }

  function addData(additional) {
    return _Object$assign({}, data, additional);
  }

  function isRootElementOfEvent(e) {
    return e.target === _target;
  }

  function addListeners() {
    if (listenersAdded) return;

    delegator.addGlobalEventListener('dragstart', dragstart);
    delegator.addGlobalEventListener('dragend', dragend);
    listenersAdded = true;
  }

  function removeListeners() {
    if (!listenersAdded) return;

    delegator.removeGlobalEventListener('dragstart', dragstart);
    delegator.removeGlobalEventListener('dragend', dragend);
    listenersAdded = false;
  }
}

/**
 *
 */

function isDragEvent(ev) {
  return ~_setup.SOURCE_EVENTS.indexOf(ev.type);
}
module.exports = exports['default'];

},{"./setup":312,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],314:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _setup = require('./setup');

/**
 *
 */

exports['default'] = _mercury2['default'].BaseEvent(handleDrag);

// TODO: Allow to be able to specify the events that we want
// to listent to, via `this.data`.
// If not specified listen to all `TARGET_EVENTS`
function handleDrag(ev, broadcast) {
  // Ignore other events
  if (!isDragEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget /* || ev.target*/;
  var listenersAdded = false; // TODO: Check if can remove this

  if (ev.type === 'dragenter') {
    var triggerDragenter = !listenersAdded;
    addListeners();
    if (triggerDragenter) dragenter(ev);
  }

  function dragenter(e) {
    if (!isRootElementOfEvent(e)) return;

    broadcast(addData({
      type: 'dragenter',
      target: e.target
    }));
  }

  function dragover(e) {
    if (!isRootElementOfEvent(e)) return;

    var raw = e._rawEvent;

    // Allows us to drop
    if (e.preventDefault) e.preventDefault();else if (raw.preventDefault) raw.preventDefault();

    raw.dataTransfer.dropEffect = 'move';

    // broadcast(addData({
    //   type: 'dragover',
    //   target: e.target,
    //   dataTransfer: raw.dataTransfer,
    // }));
    // //REF//

    return false;
  }

  function dragleave(e) {
    if (!isRootElementOfEvent(e)) return;

    removeListeners();

    broadcast(addData({
      type: 'dragleave',
      target: e.target
    }));
  }

  function drop(e) {
    if (!isRootElementOfEvent(e)) return;

    var raw = e._rawEvent;

    // Stops the browser from redirecting
    if (e.stopPropagation) e.stopPropagation();else if (raw.stopPropagation) raw.stopPropagation();

    removeListeners();

    broadcast(addData({
      type: 'drop',
      target: e.target,
      dataTransfer: raw.dataTransfer
    }));
  }

  function addData(additional) {
    return _Object$assign({}, data, additional);
  }

  function isRootElementOfEvent(e) {
    return e.target === _target;
  }

  function addListeners() {
    if (listenersAdded) return;

    delegator.addGlobalEventListener('dragenter', dragenter);
    delegator.addGlobalEventListener('dragover', dragover);
    delegator.addGlobalEventListener('dragleave', dragleave);
    delegator.addGlobalEventListener('drop', drop);
    listenersAdded = true;
  }

  function removeListeners() {
    if (!listenersAdded) return;

    delegator.removeGlobalEventListener('dragenter', dragenter);
    delegator.removeGlobalEventListener('dragover', dragover);
    delegator.removeGlobalEventListener('dragleave', dragleave);
    delegator.removeGlobalEventListener('drop', drop);
    listenersAdded = false;
  }
}

/**
 *
 */

function isDragEvent(ev) {
  return ~_setup.TARGET_EVENTS.indexOf(ev.type);
}
module.exports = exports['default'];

},{"./setup":312,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],315:[function(require,module,exports){
/**
 * Based on https://github.com/GianlucaGuarini/Tocca.js, MIT license
 */

/**
 * Module dependencies
 */

'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleGesture = handleGesture;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

/**
 *
 */

var TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseout'];

var EVENTS = TOUCH_EVENTS.concat(MOUSE_EVENTS);

/**
 *
 */

// Some helpers borrowed from https://github.com/WebReflection/ie-touch
/*const msPointerEnabled = !!navigator.pointerEnabled
  || navigator.msPointerEnabled;*/ //REF//
/*const isTouch = (!!('ontouchstart' in window)
  && navigator.userAgent.indexOf('PhantomJS') < 0)
  || msPointerEnabled;*/ //REF//
/*function msEventType(type) {
  const lo = type.toLowerCase();
  const ms = `MS${type}`;
  return navigator.msPointerEnabled ? ms : lo;
}*/ //REF//
/*const touchevents = {
  touchstart: `${msEventType('PointerDown')} touchstart`,
  touchend: `${msEventType('PointerUp')} touchend`,
  touchmove: `${msEventType('PointerMove')} touchmove`,
};*/ //REF//

/**
 *
 */

var swipeThreshold = 100;
// Range of time where a tap event could be detected
var tapThreshold = 150;
// Delay needed to detect a double tap
var doubletapThreshold = 200;
// Delay needed to detect a long tap
var longtapThreshold = 1000;
// Touch events boundaries (60px by default)
var tapPrecision = 60 / 2;
// const justTouchEvents = window.JUST_ON_TOUCH_DEVICES || isTouch; //REF//

/**
 *
 */

exports['default'] = _mercury2['default'].BaseEvent(handleGesture);

function handleGesture(ev, broadcast) {
  // Ignore other events
  if (!isKnownEvent(ev)) return;

  var data = this.data;
  var delegator = _mercury2['default'].Delegator();
  var _target = ev.currentTarget;
  var listenersAdded = false; // TODO: Check if can remove this
  var tapNum = 0;
  var currX = undefined,
      currY = undefined,
      cachedX = undefined,
      cachedY = undefined;
  var tapTimer = undefined,
      timestamp = undefined,
      target = undefined;

  /**
   *
   */

  if (ev.type === 'touchstart' || ev.type === 'mousedown') {
    var triggerTapStart = !listenersAdded;
    var isTouch = ev.type === 'touchstart';

    addListeners(isTouch);

    if (triggerTapStart) tapStart(ev);
  }

  /**
   *
   */

  function tapStart(e) {
    if (!triggeredOnBoundElement(e)) return;

    var pointer = getPointerEvent(e);
    cachedX = currX = pointer.pageX;
    cachedY = currY = pointer.pageY;

    timestamp = getTimestamp();
    tapNum++;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapstart',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapMove(e) {
    if (!triggeredOnBoundElement(e)) return;

    var pointer = getPointerEvent(e);

    currX = pointer.pageX;
    currY = pointer.pageY;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapmove',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapEnd(e) {
    if (!triggeredOnBoundElement(e)) return;

    // This leads to a warning on Chrome,
    // but is required to not fire both touchstart
    // and mousedown events on touch devices
    if (e._rawEvent.preventDefault) {
      e._rawEvent.preventDefault();
    }

    var eventTypes = [];
    var now = getTimestamp();
    var deltaX = cachedX - currX;
    var deltaY = cachedY - currY;

    clearTimeout(tapTimer);

    if (deltaX <= -swipeThreshold) {
      eventTypes.push('swiperight');
    }

    if (deltaX >= swipeThreshold) {
      eventTypes.push('swipeleft');
    }

    if (deltaY <= -swipeThreshold) {
      eventTypes.push('swipedown');
    }

    if (deltaY >= swipeThreshold) {
      eventTypes.push('swipeup');
    }

    if (eventTypes.length) {
      for (var i = 0, l = eventTypes.length; i < l; ++i) {
        var type = eventTypes[i];

        broadcast(addData({
          // _rawEvent: e, //REF//
          type: type,
          target: e.target,
          distance: {
            x: Math.abs(deltaX),
            y: Math.abs(deltaY)
          }
        }));

        removeListeners(isTouchEvent(e));
      }
    } else {
      // TODO: "longtap" prevents normal "tap",
      // maybe it's better to trigger also "tap",
      // along with "longtap" event
      if (cachedX >= currX - tapPrecision && cachedX <= currX + tapPrecision && cachedY >= currY - tapPrecision && cachedY <= currY + tapPrecision) {
        if (timestamp + tapThreshold - now >= 0) {
          var type = tapNum === 2 && target === e.target ? 'doubletap' : 'tap';

          broadcast(addData({
            // _rawEvent: e, //REF//
            type: type,
            target: e.target
          }));

          target = e.target; // TOOD: Check if can remove this
        } else if (timestamp + longtapThreshold - now <= 0) {
            broadcast(addData({
              // _rawEvent: e, //REF//
              type: 'longtap',
              target: e.target
            }));

            target = e.target; // TOOD: Check if can remove this
          }
      }

      tapTimer = setTimeout(function () {
        removeListeners(isTouchEvent(e));

        tapNum = 0;
      }, doubletapThreshold);
    }

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapend',
      target: e.target
    }));
  }

  /**
   *
   */

  function tapCancel(e) {
    if (!triggeredOnBoundElement(e)) return;

    broadcast(addData({
      // _rawEvent: e, //REF//
      type: 'tapcancel',
      target: e.target
    }));

    clearTimeout(tapTimer);
    tapNum = 0;

    removeListeners(isTouchEvent(e));
  }

  /**
   *
   */

  function addData(additional) {
    return _Object$assign({}, data, additional);
  }

  /**
   *
   */

  function triggeredOnBoundElement(e) {
    return e.target === _target;
  }

  /**
   *
   */

  function addListeners() {
    var isTouch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    if (listenersAdded) return;

    if (isTouch) {
      delegator.listenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.addGlobalEventListener('touchstart', tapStart);

      delegator.addGlobalEventListener('touchmove', tapMove);

      delegator.addGlobalEventListener('touchend', tapEnd);

      delegator.addGlobalEventListener('touchcancel', tapCancel);
    } else {
      delegator.listenTo('mousemove');
      delegator.listenTo('mouseout');

      // TOOD: Check if can remove this
      delegator.addGlobalEventListener('mousedown', tapStart);

      delegator.addGlobalEventListener('mousemove', tapMove);

      delegator.addGlobalEventListener('mouseup', tapEnd);
      delegator.addGlobalEventListener('mouseout', tapEnd);
    }

    listenersAdded = true;
  }

  /**
   *
   */

  function removeListeners() {
    var isTouch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    if (!listenersAdded) return;

    if (isTouch) {
      delegator.unlistenTo('touchmove');

      // TOOD: Check if can remove this
      delegator.removeGlobalEventListener('touchstart', tapStart);

      delegator.removeGlobalEventListener('touchmove', tapMove);

      delegator.removeGlobalEventListener('touchend', tapEnd);

      delegator.removeGlobalEventListener('touchcancel', tapCancel);
    } else {
      delegator.unlistenTo('mousemove');
      delegator.unlistenTo('mouseout');

      // TOOD: Check if can remove this
      delegator.removeGlobalEventListener('mousedown', tapStart);

      delegator.removeGlobalEventListener('mousemove', tapMove);

      delegator.removeGlobalEventListener('mouseup', tapEnd);
      delegator.removeGlobalEventListener('mouseout', tapEnd);
    }

    listenersAdded = false;
  }
}

/**
 *
 */

function isKnownEvent(ev) {
  if (! ~EVENTS.indexOf(ev.type)) return false;

  if (!ev.button) return true;
  return ev.button === 1;
}

/**
 *
 */

function isTouchEvent(ev) {
  return TOUCH_EVENTS.indexOf(ev.type) > -1;
}

/**
 *
 */

function getPointerEvent(ev) {
  var raw = ev._rawEvent;
  return raw.targetTouches ? raw.targetTouches[0] : raw;
}

/**
 *
 */

function getTimestamp() {
  return new Date().getTime();
}

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],316:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _events = require('./events');

/**
 *
 */

var PREVENT_DEFUALT_EVENTS = ['longtap', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'touchmove'];

/**
 *
 */

var sendTapStart = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapstart'));
exports.sendTapStart = sendTapStart;
var sendTapMove = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapmove'));
exports.sendTapMove = sendTapMove;
var sendTapEnd = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapend'));
exports.sendTapEnd = sendTapEnd;
var sendTapCancel = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tapcancel'));
exports.sendTapCancel = sendTapCancel;
var sendTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'tap'));
exports.sendTap = sendTap;
var sendLongTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'longtap'));
exports.sendLongTap = sendLongTap;
var sendDoubleTap = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'doubletap'));
exports.sendDoubleTap = sendDoubleTap;
var sendSwipeUp = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipeup'));
exports.sendSwipeUp = sendSwipeUp;
var sendSwipeRight = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swiperight'));
exports.sendSwipeRight = sendSwipeRight;
var sendSwipeDown = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipedown'));
exports.sendSwipeDown = sendSwipeDown;
var sendSwipeLeft = _mercury2['default'].BaseEvent((0, _ramdaSrcPartial2['default'])(sendEvent, 'swipeleft'));

exports.sendSwipeLeft = sendSwipeLeft;
/**
 *
 */

function sendEvent(type, ev, _broadcast) {
  if (~PREVENT_DEFUALT_EVENTS.indexOf(type)) {
    if (ev._rawEvent.preventDefault) {
      ev._rawEvent.preventDefault();
    }
  }

  _events.handleGesture.call(this, ev, broadcast);

  function broadcast(data) {
    if (data.type === type) {
      _broadcast(data);
    }
  }
}

},{"./events":315,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/partial":263}],317:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Cells;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _ramdaSrcPick = require('ramda/src/pick');

var _ramdaSrcPick2 = _interopRequireDefault(_ramdaSrcPick);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _cell = require('../../cell');

var _cell2 = _interopRequireDefault(_cell);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Cells() {
  return null;
}

/**
 * Render component.
 */

// TODO: Check if need a `key` prop
var cellProps = memoize(function (width, margin, checkReadyState, isStarted) {
  return { width: width, margin: margin, checkReadyState: checkReadyState, isStarted: isStarted };
});

Cells.render = function render(_ref) {
  var columns = _ref.columns;
  var _ref$margin = _ref.margin;
  var margin = _ref$margin === undefined ? 0 : _ref$margin;
  var cells = _ref.cells;
  var botsByIndex = _ref.botsByIndex;
  var checkReadyState = _ref.checkReadyState;
  var isStarted = _ref.isStarted;

  var cellWidth = 100 / columns - 2 * margin; // percent

  var renderCell = function renderCell(cell) {
    return _mercury2['default'].partial(_cell2['default'].render, cell, cellProps(cellWidth, margin, checkReadyState, isStarted), getBotIndicatorsOfCell(botsByIndex, cell.index));
  };
  var renderCells = (0, _ramdaSrcMap2['default'])(renderCell);

  return (0, _mercury.h)('.amaze-Grid-cells.u-cf', { style: { padding: margin / 2 + '%' } }, renderCells((0, _ramdaSrcValues2['default'])(cells)));
};

/**
 *
 */

var extractBotIdentity = (0, _ramdaSrcPick2['default'])(['id', 'color']);
var extractBotIndicators = memoize(function (botsOnCell) {
  return (0, _ramdaSrcMap2['default'])(extractBotIdentity, botsOnCell);
});
// We need the same array reference in case there are
// no bot indicators on a cell, in order to render only
// the "changed" cells via `hg.partial()`
var emptyBotIndicators = [];

function getBotIndicatorsOfCell(botsByIndex, index) {
  var botsOnCell = botsByIndex[index];
  return botsOnCell ? extractBotIndicators(botsOnCell) : emptyBotIndicators;
}
module.exports = exports['default'];

},{"../../cell":310,"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/map":262,"ramda/src/partialRight":264,"ramda/src/pick":265,"ramda/src/values":270}],318:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Grid;

var _ramdaSrcValues = require('ramda/src/values');

var _ramdaSrcValues2 = _interopRequireDefault(_ramdaSrcValues);

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _ramdaSrcPartialRight = require('ramda/src/partialRight');

var _ramdaSrcPartialRight2 = _interopRequireDefault(_ramdaSrcPartialRight);

var _ramdaSrcGroupBy = require('ramda/src/groupBy');

var _ramdaSrcGroupBy2 = _interopRequireDefault(_ramdaSrcGroupBy);

var _ramdaSrcProp = require('ramda/src/prop');

var _ramdaSrcProp2 = _interopRequireDefault(_ramdaSrcProp);

var _ramdaSrcProps = require('ramda/src/props');

var _ramdaSrcProps2 = _interopRequireDefault(_ramdaSrcProps);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _cells = require('./cells');

var _cells2 = _interopRequireDefault(_cells);

var memoize = (0, _ramdaSrcPartialRight2['default'])(_memoizee2['default'], { max: 1 });

/**
 * Component
 */

function Grid() {
  return null;
}

/**
 * Render component.
 */

var cellsProps = memoize(function (columns, margin, cells, bots, checkReadyState, isStarted) {
  var botsByIndex = (0, _ramdaSrcGroupBy2['default'])((0, _ramdaSrcProp2['default'])('index'), (0, _ramdaSrcValues2['default'])(bots));
  return { columns: columns, margin: margin, cells: cells, botsByIndex: botsByIndex, checkReadyState: checkReadyState, isStarted: isStarted };
});

Grid.render = function render(props) {
  return (0, _mercury.h)('section.amaze-Grid', (0, _mercury.h)('.amaze-Grid-background', _mercury2['default'].partial(_cells2['default'].render, cellsProps.apply(undefined, _toConsumableArray((0, _ramdaSrcProps2['default'])(['columns', 'margin', 'cells', 'bots', 'checkReadyState', 'isStarted'], props))))));
};
module.exports = exports['default'];

},{"./cells":317,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/groupBy":237,"ramda/src/partialRight":264,"ramda/src/prop":267,"ramda/src/props":268,"ramda/src/values":270}],319:[function(require,module,exports){
/**
 * Module dependencies
 */

// import 'core-js/shim.js';
// import 'babel-runtime/node_modules/core-js/shim.js';
'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = amaze;

var _mercury = require('mercury');

var _mercuryTimeTravel = require('mercury/time-travel');

var _mercuryTimeTravel2 = _interopRequireDefault(_mercuryTimeTravel);

var _vdomVirtualize = require('vdom-virtualize');

var _vdomVirtualize2 = _interopRequireDefault(_vdomVirtualize);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

/**
 *
 */

function amaze(root) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // Get initial app state
  var state = (0, _app2['default'])(_Object$assign({}, opts, { undo: undo, redo: redo }));

  var history = (0, _mercuryTimeTravel2['default'])(state);
  function undo() {
    return history.undo();
  }
  function redo() {
    return history.redo();
  }

  // Create a rendering cycle for the app vtree
  (0, _mercury.app)(null, state, _app2['default'].render, {
    initialTree: (0, _vdomVirtualize2['default'])(root),
    target: root
  });

  // Trigger the initial render
  state.set(state());
}

module.exports = exports['default'];

},{"./app":303,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"mercury/time-travel":224,"vdom-virtualize":273}],320:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Logo;

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

/**
 * Component
 */

function Logo() {
  return null;
}

/**
 * Render component.
 */

Logo.render = function render() {
  var renderChar = (0, _ramdaSrcPartial2['default'])(_mercury.h, 'span');
  var renderChars = (0, _ramdaSrcMap2['default'])(renderChar);

  var text = 'amaze';
  return (0, _mercury.h)('h3.amaze-Logo', renderChars(text.split('')));
};
module.exports = exports['default'];

},{"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/map":262,"ramda/src/partial":263}],321:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Results;

var _durationJs = require('duration-js');

var _durationJs2 = _interopRequireDefault(_durationJs);

var _ramdaSrcMap = require('ramda/src/map');

var _ramdaSrcMap2 = _interopRequireDefault(_ramdaSrcMap);

var _ramdaSrcAddIndex = require('ramda/src/addIndex');

var _ramdaSrcAddIndex2 = _interopRequireDefault(_ramdaSrcAddIndex);

var _ramdaSrcPartial = require('ramda/src/partial');

var _ramdaSrcPartial2 = _interopRequireDefault(_ramdaSrcPartial);

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _scrollable = require('../scrollable');

var _scrollable2 = _interopRequireDefault(_scrollable);

var mapIndexed = (0, _ramdaSrcAddIndex2['default'])(_ramdaSrcMap2['default']);

/**
 * Component
 */

function Results() {
  return null;
}

/**
 *
 */

function getResults(props) {
  return props.winners.map(function (winner) {
    var bot = props.bots[winner.id];
    return {
      id: bot.id,
      color: bot.color,
      time: winner.time
    };
  });
}

/**
 * Render component.
 */

Results.render = function render(props) {
  var results = getResults(props);

  return (0, _mercury.h)('section.amaze-Results', new _scrollable2['default'](_mercury2['default'].partial(renderContent, results), {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }));
};

/**
 *
 */

function renderContent(results) {
  return (0, _mercury.h)('.amaze-Results-content', [(0, _mercury.h)('h1', 'Results'), _mercury2['default'].partial(renderTable, results)]);
}

/**
 *
 */

function renderTable(results) {
  return (0, _mercury.h)('table.amaze-Results-table', [_mercury2['default'].partial(renderHeaders, ['Place', 'Bot', 'Time'])].concat(_toConsumableArray(mapIndexed((0, _ramdaSrcPartial2['default'])(_mercury2['default'].partial, renderRow), results))));
}

/**
 *
 */

function renderHeaders(texts) {
  return (0, _mercury.h)('tr', (0, _ramdaSrcMap2['default'])(renderHeader, texts));
}

/**
 *
 */

function renderHeader(text) {
  return (0, _mercury.h)('th', (0, _mercury.h)('span', text));
}

/**
 *
 */

function renderRow(result, index) {
  return (0, _mercury.h)('tr', [(0, _mercury.h)('td', '' + (index + 1)), (0, _mercury.h)('td', _mercury2['default'].partial(renderBot, result)), (0, _mercury.h)('td', '' + new _durationJs2['default'](result.time).toString())]);
}

/**
 *
 */

function renderBot(result) {
  var color = 'rgb(' + result.color.join() + ')';

  return (0, _mercury.h)('.amaze-Results-botWrapper', (0, _mercury.h)('.amaze-Results-bot', {
    style: { 'background-color': color }
  }));
}
module.exports = exports['default'];

},{"../scrollable":322,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"duration-js":71,"mercury":134,"ramda/src/addIndex":227,"ramda/src/map":262,"ramda/src/partial":263}],322:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _timers = require('timers');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _virtualDomDiff = require('virtual-dom/diff');

var _virtualDomDiff2 = _interopRequireDefault(_virtualDomDiff);

var _virtualDomPatch = require('virtual-dom/patch');

var _virtualDomPatch2 = _interopRequireDefault(_virtualDomPatch);

var _virtualDomCreateElement = require('virtual-dom/create-element');

var _virtualDomCreateElement2 = _interopRequireDefault(_virtualDomCreateElement);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _iscrollBuildIscrollLite = require('iscroll/build/iscroll-lite');

var _iscrollBuildIscrollLite2 = _interopRequireDefault(_iscrollBuildIscrollLite);

/**
 * Widget
 */

var Scrollable = (function () {
  function Scrollable(vnode) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Scrollable);

    this.type = 'Widget';

    if (!(this instanceof Scrollable)) {
      return new Scrollable(vnode);
    }

    this.vnode = vnode;
    this.props = _Object$assign({}, props);
    this.scroller = null;
  }

  _createClass(Scrollable, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var elem = (0, _virtualDomCreateElement2['default'])(this.vnode);

      var wrapper = document.createElement('div');
      wrapper.className = (0, _classnames2['default'])('amaze-Scrollable', this.props.className);
      // TODO: Make it better
      if (this.props.style) _Object$assign(wrapper.style, this.props.style);

      var scroller = document.createElement('div');
      scroller.className = 'amaze-Scrollable-scroller';

      scroller.appendChild(elem);
      wrapper.appendChild(scroller);

      var opts = _Object$assign({
        bounce: false
      }, this.props.iscroll || {});

      (0, _timers.setImmediate)(function () {
        (0, _raf2['default'])(function () {
          _this.scroller = new _iscrollBuildIscrollLite2['default'](wrapper, opts);
          (0, _raf2['default'])(function () {
            return _this.scroller.refresh();
          });
        });
      });

      return wrapper;
    }
  }, {
    key: 'update',
    value: function update(prev, elem) {
      var _this2 = this;

      var prevVnode = prev.vnode;
      var currVnode = this.vnode;

      var patches = (0, _virtualDomDiff2['default'])(prevVnode, currVnode);
      var rootNode = elem.childNodes[0];
      var newNode = (0, _virtualDomPatch2['default'])(rootNode, patches);

      if (newNode !== elem.childNodes[0]) {
        elem.replaceChild(newNode, elem.childNodes[0]);

        (0, _raf2['default'])(function () {
          return _this2.scroller.refresh();
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() /*elem*/{
      this.scroller.destroy();
      this.scroller = null;
    }
  }]);

  return Scrollable;
})();

exports['default'] = Scrollable;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"iscroll/build/iscroll-lite":72,"raf":225,"timers":69,"virtual-dom/create-element":281,"virtual-dom/diff":282,"virtual-dom/patch":286}],323:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Tile;

var _mercury = require('mercury');

var _mercury2 = _interopRequireDefault(_mercury);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _botIndicators = require('../bot-indicators');

var _botIndicators2 = _interopRequireDefault(_botIndicators);

/**
 * Component
 */

function Tile() {
  return null;
}

/**
 * Render component.
 */

Tile.render = function render(props) {
  var isActive = props.isActive;
  var isEntry = props.isEntry;
  var isExit = props.isExit;
  var isDragHovered = props.isDragHovered;
  var botIndicators = props.botIndicators;

  var columns = botIndicators.length == 2 ? 2 : Math.ceil(Math.sqrt(botIndicators.length));

  return (0, _mercury.h)('div', {
    className: (0, _classnames2['default'])({
      'amaze-Tile': true,
      'amaze-Tile--active': isActive,
      'amaze-Tile--entry': isEntry,
      'amaze-Tile--exit': isExit,
      'amaze-Tile--hasBotIndicators': botIndicators.length > 0,
      'amaze-Tile--dragHovered': isDragHovered
    }),
    style: botIndicators.length > 0 ? { cursor: 'default' } : {}
  }, _mercury2['default'].partial(_botIndicators2['default'].render, columns, botIndicators));
};
module.exports = exports['default'];

},{"../bot-indicators":306,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"mercury":134}],324:[function(require,module,exports){
/**
 *
 */

'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.randomRgbColor = randomRgbColor;
exports.randomIntFromRange = randomIntFromRange;
exports.ln = ln;

function randomRgbColor() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var value = randomIntFromRange;
  var r = opts.r || [0, 255];
  var g = opts.g || [0, 255];
  var b = opts.b || [0, 255];

  return [value.apply(undefined, _toConsumableArray(r)), value.apply(undefined, _toConsumableArray(g)), value.apply(undefined, _toConsumableArray(b))];
}

/**
 * Returns a random integer between
 * `min` and `max` inclusive.
 */

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 */

function ln(_strings) {
  var strings = _strings.slice();
  var str = '';

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  while (strings.length || values.length) {
    str += strings.shift() || '';
    str += values.shift() || '';
  }

  return str.replace(/\s{2,}/gm, ' ');
}

},{"babel-runtime/helpers/to-consumable-array":14}]},{},[319])(319)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvcGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RhZ2dlZC10ZW1wbGF0ZS1saXRlcmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90by1jb25zdW1hYmxlLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvaXMtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItYnVnZ3kuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3VwcG9ydC1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudGFnLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZHVyYXRpb24tanMvZHVyYXRpb24uanMiLCJub2RlX21vZHVsZXMvaXNjcm9sbC9idWlsZC9pc2Nyb2xsLWxpdGUuanMiLCJub2RlX21vZHVsZXMvbWFpbmxvb3AuanMvYnVpbGQvbWFpbmxvb3AubWluLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2V4dC9hc3luYy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvZGlzcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvbWF4LWFnZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvbWF4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2V4dC9yZWYtY291bnRlci5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvY29uZmlndXJlLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvcmVnaXN0ZXJlZC1leHRlbnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2xpYi9yZXNvbHZlLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvcmVzb2x2ZS1ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbGliL3Jlc29sdmUtcmVzb2x2ZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS8jL2UtaW5kZXgtb2YuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvYXJyYXkvZnJvbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2FycmF5L2Zyb20vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS90by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9lcnJvci9jdXN0b20uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vX2RlZmluZS1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vaXMtYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL2lzLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbWF0aC9zaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L21hdGgvc2lnbi9pcy1pbXBsZW1lbnRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1pbXBsZW1lbnRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvdmFsaWRhdGUtc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvX2l0ZXJhdGUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvZm9yLWVhY2guanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2lzLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL3NoaW0uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L21peGluLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nL2lzLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvbHJ1LXF1ZXVlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9uZXh0LXRpY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL3RpbWVycy1leHQvbWF4LXRpbWVvdXQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL3RpbWVycy1leHQvdmFsaWQtdGltZW91dC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQtMS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQtZml4ZWQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9ybWFsaXplcnMvZ2V0LXByaW1pdGl2ZS1maXhlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9ybWFsaXplcnMvcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL3BsYWluLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9hZGQtZXZlbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9kb20tZGVsZWdhdG9yLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvY3VpZC9kaXN0L2Jyb3dzZXItY3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9vbmUtdmVyc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3Ivbm9kZV9tb2R1bGVzL3dlYWttYXAtc2hpbS9jcmVhdGUtc3RvcmUuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvd2Vha21hcC1zaGltL2hpZGRlbi1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL3Byb3h5LWV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3IvcmVtb3ZlLWV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL211bHRpcGxlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL3NpbmdsZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9tYWluLWxvb3AvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9lcnJvci9ub2RlX21vZHVsZXMvY2FtZWxpemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9lcnJvci9ub2RlX21vZHVsZXMvc3RyaW5nLXRlbXBsYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL21haW4tbG9vcC9ub2RlX21vZHVsZXMvZXJyb3IvdHlwZWQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9yYWYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9yYWYvbm9kZV9tb2R1bGVzL3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hZGQtbGlzdGVuZXIuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2LWFycmF5L2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1yZXZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1zb3J0LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvbGliL3NldC1ub24tZW51bWVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvbm9kZV9tb2R1bGVzL2FkaWZmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9wdXQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2LWFycmF5L3NldC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvc3BsaWNlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS90cmFuc2FjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtc3RydWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1zdHJ1Y3Qvbm9kZV9tb2R1bGVzL3h0ZW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi12YXJoYXNoL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi9jb21wdXRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2L3dhdGNoLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2Jhc2UtZXZlbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvY2hhbmdlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2tleS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMvZG9tLXdhbGsvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS1zZXQvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLXNldC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMveHRlbmQvaGFzLWtleXMuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvbm9kZV9tb2R1bGVzL3h0ZW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L3N1Ym1pdC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC92YWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL2ltbXV0YWJsZS10aHVuay5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3Zkb20tdGh1bmsvcGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL3NoYWxsb3ctZXEuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL2Jyb3dzZXItc3BsaXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL2V2LXN0b3JlL25vZGVfbW9kdWxlcy9pbmRpdmlkdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL2lzLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9ub2RlX21vZHVsZXMveC1pcy1hcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92ZG9tL2FwcGx5LXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92ZG9tL2RvbS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92ZG9tL3BhdGNoLW9wLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2guanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS91cGRhdGUtd2lkZ2V0LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3ZpcnR1YWwtaHlwZXJzY3JpcHQvaG9va3MvZXYtaG9vay5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92aXJ0dWFsLWh5cGVyc2NyaXB0L2hvb2tzL3NvZnQtc2V0LWhvb2suanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmlydHVhbC1oeXBlcnNjcmlwdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92aXJ0dWFsLWh5cGVyc2NyaXB0L3BhcnNlLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9oYW5kbGUtdGh1bmsuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdGh1bmsuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdmhvb2suanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdm5vZGUuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdnRleHQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtd2lkZ2V0LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL3ZlcnNpb24uanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdm5vZGUuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdnBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL3Z0ZXh0LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Z0cmVlL2RpZmYtcHJvcHMuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy94dGVuZC9tdXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvdGltZS10cmF2ZWwuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhZi9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FkZEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hcHBlbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2JpbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2N1cnJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jdXJyeU4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2RlZmF1bHRUby5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9maW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mbGlwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ncm91cEJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fYXJpdHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jaGVja0Zvck1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2NvbmNhdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkxLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnlOLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faGFzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzVHJhbnNmb3JtZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19tYXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19yZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19yZWR1Y2VkLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fc2xpY2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZkJhc2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194Z3JvdXBCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3htYXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194d3JhcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaXNBcnJheUxpa2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2tleXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFydGlhbFJpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waWNrLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waWNrQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3AuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90aW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC91dWlkLmpzIiwibm9kZV9tb2R1bGVzL3Zkb20tdmlydHVhbGl6ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vcGF0Y2guanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9wYXRjaC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2FwcC9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2JvYXJkL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvYm90LWhhbmRsZS9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2JvdC1pbmRpY2F0b3JzL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvYm90LWluZGljYXRvcnMvaW5kaWNhdG9yL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvYm90L2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvYnV0dG9uL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvY2VsbC9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2NvbnRyb2xzL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZHJhZy1ldmVudHMvc2V0dXAuanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9kcmFnLWV2ZW50cy9zb3VyY2UuanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9kcmFnLWV2ZW50cy90YXJnZXQuanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9nZXN0dXJlcy9ldmVudHMuanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9nZXN0dXJlcy9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2dyaWQvY2VsbHMvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9ncmlkL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9sb2dvL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvcmVzdWx0cy9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL3Njcm9sbGFibGUvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy90aWxlL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLzZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuU0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFHLEVBQUUsQ0FBQzs7b0NBRmlCLE1BQU07QUFBTixVQUFNOzs7QUFJcEMsU0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdEMsT0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDN0IsT0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDN0I7O0FBRUQsU0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNyQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvaXMtaW50ZWdlclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvcGFyc2UtaW50XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZnJlZXplID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3RyaW5ncywgcmF3KSB7XG4gIHJldHVybiBfT2JqZWN0JGZyZWV6ZShfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IF9PYmplY3QkZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfQXJyYXkkZnJvbSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfQXJyYXkkZnJvbShhcnIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLkFycmF5LmZyb207IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5OdW1iZXIuaXNJbnRlZ2VyOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbm1vZHVsZS5leHBvcnRzID0gcGFyc2VJbnQ7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5hc3NpZ247IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKXtcbiAgcmV0dXJuICQuc2V0RGVzY3MoVCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmZyZWV6ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2krK10pXG4gICAgICAsIGtleXMgICA9IGVudW1LZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH0gcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBjdHggPSBmdW5jdGlvbihmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbnZhciAkZGVmID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cFtQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuc3VwcG9ydC1kZXNjJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwiLy8gaW5kZXhlZCBvYmplY3QsIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gMCBpbiBPYmplY3QoJ3onKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAoSXRlcmF0b3JzLkFycmF5IHx8IEFycmF5LnByb3RvdHlwZVtJVEVSQVRPUl0pID09PSBpdDtcbn07IiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBmbG9vciAgICA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTsiLCIvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xufTsiLCIvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG5tb2R1bGUuZXhwb3J0cyA9ICdrZXlzJyBpbiBbXSAmJiAhKCduZXh0JyBpbiBbXS5rZXlzKCkpOyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpKDEsbmV4dCl9KTtcbiAgcmVxdWlyZSgnLi8kLnRhZycpKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRkZWYgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsICRyZWRlZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZicpXG4gICwgaGlkZSAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIEZGX0lURVJBVE9SICAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgICA9ICd2YWx1ZXMnO1xudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0Upe1xuICByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBwcm90byAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCBfbmF0aXZlICA9IHByb3RvW1NZTUJPTF9JVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsIF9kZWZhdWx0ID0gX25hdGl2ZSB8fCBjcmVhdGVNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZihfbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90byhfZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHJlcXVpcmUoJy4vJC50YWcnKShJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBTWU1CT0xfSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZighTElCUkFSWSB8fCBGT1JDRSloaWRlKHByb3RvLCBTWU1CT0xfSVRFUkFUT1IsIF9kZWZhdWx0KTtcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoS0VZUyksXG4gICAgICB2YWx1ZXM6ICBERUZBVUxUID09IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKFZBTFVFUyksXG4gICAgICBlbnRyaWVzOiBERUZBVUxUICE9IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpJHJlZGVmKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogcmVxdWlyZSgnLi8kLml0ZXItYnVnZ3knKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbn07IiwidmFyIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyAgICA9IGZhbHNlO1xudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW1NZTUJPTF9JVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICBpZighU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW1NZTUJPTF9JVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyBzYWZlID0gdHJ1ZTsgfTtcbiAgICBhcnJbU1lNQk9MX0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICAgLCBmbiAgID0gKHJlcXVpcmUoJy4vJC5jb3JlJykuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGxcbiAgICAgIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBoYXMgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaGlkZSA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBUQUcgID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWhpZGUoaXQsIFRBRywgdGFnKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCByZXF1aXJlKCcuLyQudWlkJykpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdIHx8IGl0WydAQGl0ZXJhdG9yJ10gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJGRlZiAgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pOyIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XG5cbiRkZWYoJGRlZi5TLCAnTnVtYmVyJywge2lzSW50ZWdlcjogcmVxdWlyZSgnLi8kLmlzLWludGVnZXInKX0pOyIsIi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuXG4kZGVmKCRkZWYuUywgJ051bWJlcicsIHtwYXJzZUludDogcGFyc2VJbnR9KTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUoaXQpIDogaXQ7XG4gIH07XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IixudWxsLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59OyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpe1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG4iLCJ2YXIgRHVyYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIG1pbGxpc2Vjb25kID0gMSxcbiAgICAgICAgc2Vjb25kICAgICAgPSAxMDAwICogbWlsbGlzZWNvbmQsXG4gICAgICAgIG1pbnV0ZSAgICAgID0gNjAgICAqIHNlY29uZCxcbiAgICAgICAgaG91ciAgICAgICAgPSA2MCAgICogbWludXRlLFxuICAgICAgICBkYXkgICAgICAgICA9IDI0ICAgKiBob3VyLFxuICAgICAgICB3ZWVrICAgICAgICA9IDcgICAgKiBkYXk7XG5cbiAgICB2YXIgdW5pdE1hcCA9IHtcbiAgICAgICAgXCJtc1wiIDogbWlsbGlzZWNvbmQsXG4gICAgICAgIFwic1wiICA6IHNlY29uZCxcbiAgICAgICAgXCJtXCIgIDogbWludXRlLFxuICAgICAgICBcImhcIiAgOiBob3VyLFxuICAgICAgICBcImRcIiAgOiBkYXksXG4gICAgICAgIFwid1wiICA6IHdlZWtcbiAgICB9O1xuXG4gICAgdmFyIER1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIER1cmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gRHVyYXRpb24ucGFyc2UodmFsdWUpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGR1cmF0aW9uOiBcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEdXJhdGlvbi5taWxsaXNlY29uZCA9IG5ldyBEdXJhdGlvbihtaWxsaXNlY29uZCk7XG4gICAgRHVyYXRpb24uc2Vjb25kICAgICAgPSBuZXcgRHVyYXRpb24oc2Vjb25kKTtcbiAgICBEdXJhdGlvbi5taW51dGUgICAgICA9IG5ldyBEdXJhdGlvbihtaW51dGUpO1xuICAgIER1cmF0aW9uLmhvdXIgICAgICAgID0gbmV3IER1cmF0aW9uKGhvdXIpO1xuICAgIER1cmF0aW9uLmRheSAgICAgICAgID0gbmV3IER1cmF0aW9uKGRheSk7XG4gICAgRHVyYXRpb24ud2VlayAgICAgICAgPSBuZXcgRHVyYXRpb24od2Vlayk7XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUubmFub3NlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taWxsaXNlY29uZHMgKiAxMDAwMDAwO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUubWljcm9zZWNvbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWlsbGlzZWNvbmRzICogMTAwMDtcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucHJvdG90eXBlLm1pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbGxpc2Vjb25kcztcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucHJvdG90eXBlLnNlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX21pbGxpc2Vjb25kcyAvIHNlY29uZCk7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS5taW51dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLl9taWxsaXNlY29uZHMgLyBtaW51dGUpO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUuaG91cnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX21pbGxpc2Vjb25kcyAvIGhvdXIpO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUuZGF5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX21pbGxpc2Vjb25kcyAvIGRheSk7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS53ZWVrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX21pbGxpc2Vjb25kcyAvIHdlZWspO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RyICAgICAgICAgID0gXCJcIixcbiAgICAgICAgICBtaWxsaXNlY29uZHMgPSBNYXRoLmFicyh0aGlzLl9taWxsaXNlY29uZHMpLFxuICAgICAgICAgIHNpZ24gICAgICAgICA9IHRoaXMuX21pbGxpc2Vjb25kcyA8IDAgPyBcIi1cIiA6IFwiXCI7XG5cbiAgICAgIC8vIG5vIHVuaXRzIGZvciAwIGR1cmF0aW9uXG4gICAgICBpZiAobWlsbGlzZWNvbmRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcIjBcIjtcbiAgICAgIH1cblxuICAgICAgLy8gZGF5c1xuICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIGRheSk7XG4gICAgICBpZiAoZGF5cyAhPT0gMCkge1xuICAgICAgICBtaWxsaXNlY29uZHMgLT0gZGF5ICogZGF5cztcbiAgICAgICAgc3RyICs9IGRheXMudG9TdHJpbmcoKSArIFwiZFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBob3Vyc1xuICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyBob3VyKTtcbiAgICAgIGlmIChob3VycyAhPT0gMCkge1xuICAgICAgICBtaWxsaXNlY29uZHMgLT0gaG91ciAqIGhvdXJzO1xuICAgICAgICBzdHIgKz0gaG91cnMudG9TdHJpbmcoKSArIFwiaFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBtaW51dGVzXG4gICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gbWludXRlKTtcbiAgICAgIGlmIChtaW51dGVzICE9PSAwKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyAtPSBtaW51dGUgKiBtaW51dGVzO1xuICAgICAgICBzdHIgKz0gbWludXRlcy50b1N0cmluZygpICsgXCJtXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIHNlY29uZHNcbiAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyBzZWNvbmQpO1xuICAgICAgaWYgKHNlY29uZHMgIT09IDApIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzIC09IHNlY29uZCAqIHNlY29uZHM7XG4gICAgICAgIHN0ciArPSBzZWNvbmRzLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICAgIH1cblxuICAgICAgLy8gbWlsbGlzZWNvbmRzXG4gICAgICBpZiAobWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICAgIHN0ciArPSBtaWxsaXNlY29uZHMudG9TdHJpbmcoKSArIFwibXNcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpZ24gKyBzdHI7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21pbGxpc2Vjb25kcztcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucGFyc2UgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcblxuICAgICAgICBpZiAoZHVyYXRpb24gPT09IFwiMFwiIHx8IGR1cmF0aW9uID09PSBcIiswXCIgfHwgZHVyYXRpb24gPT09IFwiLTBcIikge1xuICAgICAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oMCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVnZXggPSAvKFtcXC1cXCtcXGRcXC5dKykoW2Etel0rKS9nLFxuICAgICAgICAgICAgdG90YWwgPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwLFxuICAgICAgICAgICAgc2lnbiAgPSBkdXJhdGlvblswXSA9PT0gJy0nID8gLTEgOiAxLFxuICAgICAgICAgICAgdW5pdCwgdmFsdWUsIG1hdGNoO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4LmV4ZWMoZHVyYXRpb24pKSB7XG5cbiAgICAgICAgICAgIHVuaXQgID0gbWF0Y2hbMl07XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hbMV0pKTtcbiAgICAgICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkdXJhdGlvblwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1bml0TWFwW3VuaXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgdW5pdDogXCIgKyB1bml0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWwgKz0gdmFsdWUgKiB1bml0TWFwW3VuaXRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkdXJhdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRHVyYXRpb24odG90YWwgKiBzaWduKTtcbiAgICB9O1xuXG4gICAgRHVyYXRpb24uZnJvbU1pY3Jvc2Vjb25kcyA9IGZ1bmN0aW9uICh1cykge1xuICAgICAgICB2YXIgbXMgPSBNYXRoLmZsb29yKHVzIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiBuZXcgRHVyYXRpb24obXMpO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5mcm9tTmFub3NlY29uZHMgPSBmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgdmFyIG1zID0gTWF0aC5mbG9vcihucyAvIDEwMDAwMDApO1xuICAgICAgICByZXR1cm4gbmV3IER1cmF0aW9uKG1zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIER1cmF0aW9uO1xuXG59KS5jYWxsKHRoaXMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgbW9kdWxlLmV4cG9ydHMgPSBEdXJhdGlvbjtcbn1cbiIsIi8qISBpU2Nyb2xsIHY1LjEuMyB+IChjKSAyMDA4LTIwMTQgTWF0dGVvIFNwaW5lbGxpIH4gaHR0cDovL2N1YmlxLm9yZy9saWNlbnNlICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpIHtcbnZhciByQUYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHRmdW5jdGlvbiAoY2FsbGJhY2spIHsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbnZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBtZSA9IHt9O1xuXG5cdHZhciBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG5cdHZhciBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdmVuZG9ycyA9IFsndCcsICd3ZWJraXRUJywgJ01velQnLCAnbXNUJywgJ09UJ10sXG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB2ZW5kb3JzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRyYW5zZm9ybSA9IHZlbmRvcnNbaV0gKyAncmFuc2Zvcm0nO1xuXHRcdFx0aWYgKCB0cmFuc2Zvcm0gaW4gX2VsZW1lbnRTdHlsZSApIHJldHVybiB2ZW5kb3JzW2ldLnN1YnN0cigwLCB2ZW5kb3JzW2ldLmxlbmd0aC0xKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gX3ByZWZpeFN0eWxlIChzdHlsZSkge1xuXHRcdGlmICggX3ZlbmRvciA9PT0gZmFsc2UgKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCBfdmVuZG9yID09PSAnJyApIHJldHVybiBzdHlsZTtcblx0XHRyZXR1cm4gX3ZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xuXHR9XG5cblx0bWUuZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uIGdldFRpbWUgKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cblx0bWUuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCwgb2JqKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gb2JqICkge1xuXHRcdFx0dGFyZ2V0W2ldID0gb2JqW2ldO1xuXHRcdH1cblx0fTtcblxuXHRtZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG5cdH07XG5cblx0bWUucHJlZml4UG9pbnRlckV2ZW50ID0gZnVuY3Rpb24gKHBvaW50ZXJFdmVudCkge1xuXHRcdHJldHVybiB3aW5kb3cuTVNQb2ludGVyRXZlbnQgPyBcblx0XHRcdCdNU1BvaW50ZXInICsgcG9pbnRlckV2ZW50LmNoYXJBdCg5KS50b1VwcGVyQ2FzZSgpICsgcG9pbnRlckV2ZW50LnN1YnN0cigxMCk6XG5cdFx0XHRwb2ludGVyRXZlbnQ7XG5cdH07XG5cblx0bWUubW9tZW50dW0gPSBmdW5jdGlvbiAoY3VycmVudCwgc3RhcnQsIHRpbWUsIGxvd2VyTWFyZ2luLCB3cmFwcGVyU2l6ZSwgZGVjZWxlcmF0aW9uKSB7XG5cdFx0dmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxuXHRcdFx0c3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lLFxuXHRcdFx0ZGVzdGluYXRpb24sXG5cdFx0XHRkdXJhdGlvbjtcblxuXHRcdGRlY2VsZXJhdGlvbiA9IGRlY2VsZXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gMC4wMDA2IDogZGVjZWxlcmF0aW9uO1xuXG5cdFx0ZGVzdGluYXRpb24gPSBjdXJyZW50ICsgKCBzcGVlZCAqIHNwZWVkICkgLyAoIDIgKiBkZWNlbGVyYXRpb24gKSAqICggZGlzdGFuY2UgPCAwID8gLTEgOiAxICk7XG5cdFx0ZHVyYXRpb24gPSBzcGVlZCAvIGRlY2VsZXJhdGlvbjtcblxuXHRcdGlmICggZGVzdGluYXRpb24gPCBsb3dlck1hcmdpbiApIHtcblx0XHRcdGRlc3RpbmF0aW9uID0gd3JhcHBlclNpemUgPyBsb3dlck1hcmdpbiAtICggd3JhcHBlclNpemUgLyAyLjUgKiAoIHNwZWVkIC8gOCApICkgOiBsb3dlck1hcmdpbjtcblx0XHRcdGRpc3RhbmNlID0gTWF0aC5hYnMoZGVzdGluYXRpb24gLSBjdXJyZW50KTtcblx0XHRcdGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcblx0XHR9IGVsc2UgaWYgKCBkZXN0aW5hdGlvbiA+IDAgKSB7XG5cdFx0XHRkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gd3JhcHBlclNpemUgLyAyLjUgKiAoIHNwZWVkIC8gOCApIDogMDtcblx0XHRcdGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcblx0XHRcdGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdGluYXRpb246IE1hdGgucm91bmQoZGVzdGluYXRpb24pLFxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uXG5cdFx0fTtcblx0fTtcblxuXHR2YXIgX3RyYW5zZm9ybSA9IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtJyk7XG5cblx0bWUuZXh0ZW5kKG1lLCB7XG5cdFx0aGFzVHJhbnNmb3JtOiBfdHJhbnNmb3JtICE9PSBmYWxzZSxcblx0XHRoYXNQZXJzcGVjdGl2ZTogX3ByZWZpeFN0eWxlKCdwZXJzcGVjdGl2ZScpIGluIF9lbGVtZW50U3R5bGUsXG5cdFx0aGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyxcblx0XHRoYXNQb2ludGVyOiB3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudCwgLy8gSUUxMCBpcyBwcmVmaXhlZFxuXHRcdGhhc1RyYW5zaXRpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpIGluIF9lbGVtZW50U3R5bGVcblx0fSk7XG5cblx0Ly8gVGhpcyBzaG91bGQgZmluZCBhbGwgQW5kcm9pZCBicm93c2VycyBsb3dlciB0aGFuIGJ1aWxkIDUzNS4xOSAoYm90aCBzdG9jayBicm93c2VyIGFuZCB3ZWJ2aWV3KVxuXHRtZS5pc0JhZEFuZHJvaWQgPSAvQW5kcm9pZCAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uKSAmJiAhKC9DaHJvbWVcXC9cXGQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uKSk7XG5cblx0bWUuZXh0ZW5kKG1lLnN0eWxlID0ge30sIHtcblx0XHR0cmFuc2Zvcm06IF90cmFuc2Zvcm0sXG5cdFx0dHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EdXJhdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRHVyYXRpb24nKSxcblx0XHR0cmFuc2l0aW9uRGVsYXk6IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbkRlbGF5JyksXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpXG5cdH0pO1xuXG5cdG1lLmhhc0NsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIik7XG5cdFx0cmV0dXJuIHJlLnRlc3QoZS5jbGFzc05hbWUpO1xuXHR9O1xuXG5cdG1lLmFkZENsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoIG1lLmhhc0NsYXNzKGUsIGMpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBuZXdjbGFzcyA9IGUuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cdFx0bmV3Y2xhc3MucHVzaChjKTtcblx0XHRlLmNsYXNzTmFtZSA9IG5ld2NsYXNzLmpvaW4oJyAnKTtcblx0fTtcblxuXHRtZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlLCBjKSB7XG5cdFx0aWYgKCAhbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgYyArIFwiKFxcXFxzfCQpXCIsICdnJyk7XG5cdFx0ZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xuXHR9O1xuXG5cdG1lLm9mZnNldCA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdHZhciBsZWZ0ID0gLWVsLm9mZnNldExlZnQsXG5cdFx0XHR0b3AgPSAtZWwub2Zmc2V0VG9wO1xuXG5cdFx0Ly8ganNoaW50IC1XMDg0XG5cdFx0d2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KSB7XG5cdFx0XHRsZWZ0IC09IGVsLm9mZnNldExlZnQ7XG5cdFx0XHR0b3AgLT0gZWwub2Zmc2V0VG9wO1xuXHRcdH1cblx0XHQvLyBqc2hpbnQgK1cwODRcblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBsZWZ0LFxuXHRcdFx0dG9wOiB0b3Bcblx0XHR9O1xuXHR9O1xuXG5cdG1lLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0gZnVuY3Rpb24gKGVsLCBleGNlcHRpb25zKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gZXhjZXB0aW9ucyApIHtcblx0XHRcdGlmICggZXhjZXB0aW9uc1tpXS50ZXN0KGVsW2ldKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdG1lLmV4dGVuZChtZS5ldmVudFR5cGUgPSB7fSwge1xuXHRcdHRvdWNoc3RhcnQ6IDEsXG5cdFx0dG91Y2htb3ZlOiAxLFxuXHRcdHRvdWNoZW5kOiAxLFxuXG5cdFx0bW91c2Vkb3duOiAyLFxuXHRcdG1vdXNlbW92ZTogMixcblx0XHRtb3VzZXVwOiAyLFxuXG5cdFx0cG9pbnRlcmRvd246IDMsXG5cdFx0cG9pbnRlcm1vdmU6IDMsXG5cdFx0cG9pbnRlcnVwOiAzLFxuXG5cdFx0TVNQb2ludGVyRG93bjogMyxcblx0XHRNU1BvaW50ZXJNb3ZlOiAzLFxuXHRcdE1TUG9pbnRlclVwOiAzXG5cdH0pO1xuXG5cdG1lLmV4dGVuZChtZS5lYXNlID0ge30sIHtcblx0XHRxdWFkcmF0aWM6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcblx0XHRcdGZuOiBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHRyZXR1cm4gayAqICggMiAtIGsgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNpcmN1bGFyOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSknLFx0Ly8gTm90IHByb3Blcmx5IFwiY2lyY3VsYXJcIiBidXQgdGhpcyBsb29rcyBiZXR0ZXIsIGl0IHNob3VsZCBiZSAoMC4wNzUsIDAuODIsIDAuMTY1LCAxKVxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnNxcnQoIDEgLSAoIC0tayAqIGsgKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YmFjazoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHZhciBiID0gNDtcblx0XHRcdFx0cmV0dXJuICggayA9IGsgLSAxICkgKiBrICogKCAoIGIgKyAxICkgKiBrICsgYiApICsgMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJvdW5jZToge1xuXHRcdFx0c3R5bGU6ICcnLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdGlmICggKCBrIC89IDEgKSA8ICggMSAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIgLyAyLjc1ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDEuNSAvIDIuNzUgKSApICogayArIDAuNzU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIuNSAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi4yNSAvIDIuNzUgKSApICogayArIDAuOTM3NTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZWxhc3RpYzoge1xuXHRcdFx0c3R5bGU6ICcnLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHZhciBmID0gMC4yMixcblx0XHRcdFx0XHRlID0gMC40O1xuXG5cdFx0XHRcdGlmICggayA9PT0gMCApIHsgcmV0dXJuIDA7IH1cblx0XHRcdFx0aWYgKCBrID09IDEgKSB7IHJldHVybiAxOyB9XG5cblx0XHRcdFx0cmV0dXJuICggZSAqIE1hdGgucG93KCAyLCAtIDEwICogayApICogTWF0aC5zaW4oICggayAtIGYgLyA0ICkgKiAoIDIgKiBNYXRoLlBJICkgLyBmICkgKyAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRtZS50YXAgPSBmdW5jdGlvbiAoZSwgZXZlbnROYW1lKSB7XG5cdFx0dmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0ZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0ZXYucGFnZVggPSBlLnBhZ2VYO1xuXHRcdGV2LnBhZ2VZID0gZS5wYWdlWTtcblx0XHRlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0fTtcblxuXHRtZS5jbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuXHRcdFx0ZXY7XG5cblx0XHRpZiAoICEoLyhTRUxFQ1R8SU5QVVR8VEVYVEFSRUEpL2kpLnRlc3QodGFyZ2V0LnRhZ05hbWUpICkge1xuXHRcdFx0ZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcblx0XHRcdGV2LmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUsIHRydWUsIGUudmlldywgMSxcblx0XHRcdFx0dGFyZ2V0LnNjcmVlblgsIHRhcmdldC5zY3JlZW5ZLCB0YXJnZXQuY2xpZW50WCwgdGFyZ2V0LmNsaWVudFksXG5cdFx0XHRcdGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSxcblx0XHRcdFx0MCwgbnVsbCk7XG5cblx0XHRcdGV2Ll9jb25zdHJ1Y3RlZCA9IHRydWU7XG5cdFx0XHR0YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBtZTtcbn0pKCk7XG5cbmZ1bmN0aW9uIElTY3JvbGwgKGVsLCBvcHRpb25zKSB7XG5cdHRoaXMud3JhcHBlciA9IHR5cGVvZiBlbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG5cdHRoaXMuc2Nyb2xsZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuc2Nyb2xsZXJTdHlsZSA9IHRoaXMuc2Nyb2xsZXIuc3R5bGU7XHRcdC8vIGNhY2hlIHN0eWxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcblxuXHR0aGlzLm9wdGlvbnMgPSB7XG5cbi8vIElOU0VSVCBQT0lOVDogT1BUSU9OUyBcblxuXHRcdHN0YXJ0WDogMCxcblx0XHRzdGFydFk6IDAsXG5cdFx0c2Nyb2xsWTogdHJ1ZSxcblx0XHRkaXJlY3Rpb25Mb2NrVGhyZXNob2xkOiA1LFxuXHRcdG1vbWVudHVtOiB0cnVlLFxuXG5cdFx0Ym91bmNlOiB0cnVlLFxuXHRcdGJvdW5jZVRpbWU6IDYwMCxcblx0XHRib3VuY2VFYXNpbmc6ICcnLFxuXG5cdFx0cHJldmVudERlZmF1bHQ6IHRydWUsXG5cdFx0cHJldmVudERlZmF1bHRFeGNlcHRpb246IHsgdGFnTmFtZTogL14oSU5QVVR8VEVYVEFSRUF8QlVUVE9OfFNFTEVDVCkkLyB9LFxuXG5cdFx0SFdDb21wb3NpdGluZzogdHJ1ZSxcblx0XHR1c2VUcmFuc2l0aW9uOiB0cnVlLFxuXHRcdHVzZVRyYW5zZm9ybTogdHJ1ZVxuXHR9O1xuXG5cdGZvciAoIHZhciBpIGluIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBvcHRpb25zXG5cdHRoaXMudHJhbnNsYXRlWiA9IHRoaXMub3B0aW9ucy5IV0NvbXBvc2l0aW5nICYmIHV0aWxzLmhhc1BlcnNwZWN0aXZlID8gJyB0cmFuc2xhdGVaKDApJyA6ICcnO1xuXG5cdHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gdXRpbHMuaGFzVHJhbnNpdGlvbiAmJiB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbjtcblx0dGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSA9IHV0aWxzLmhhc1RyYW5zZm9ybSAmJiB0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtO1xuXG5cdHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT09IHRydWUgPyAndmVydGljYWwnIDogdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g7XG5cdHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCA9ICF0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCAmJiB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQ7XG5cblx0Ly8gSWYgeW91IHdhbnQgZXZlbnRQYXNzdGhyb3VnaCBJIGhhdmUgdG8gbG9jayBvbmUgb2YgdGhlIGF4ZXNcblx0dGhpcy5vcHRpb25zLnNjcm9sbFkgPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWTtcblx0dGhpcy5vcHRpb25zLnNjcm9sbFggPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgPyBmYWxzZSA6IHRoaXMub3B0aW9ucy5zY3JvbGxYO1xuXG5cdC8vIFdpdGggZXZlbnRQYXNzdGhyb3VnaCB3ZSBhbHNvIG5lZWQgbG9ja0RpcmVjdGlvbiBtZWNoYW5pc21cblx0dGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgPSB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g7XG5cdHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPyAwIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ7XG5cblx0dGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nID09ICdzdHJpbmcnID8gdXRpbHMuZWFzZVt0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nXSB8fCB1dGlscy5lYXNlLmNpcmN1bGFyIDogdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuXHR0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9IHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nID09PSB1bmRlZmluZWQgPyA2MCA6IHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nO1xuXG5cdGlmICggdGhpcy5vcHRpb25zLnRhcCA9PT0gdHJ1ZSApIHtcblx0XHR0aGlzLm9wdGlvbnMudGFwID0gJ3RhcCc7XG5cdH1cblxuLy8gSU5TRVJUIFBPSU5UOiBOT1JNQUxJWkFUSU9OXG5cblx0Ly8gU29tZSBkZWZhdWx0c1x0XG5cdHRoaXMueCA9IDA7XG5cdHRoaXMueSA9IDA7XG5cdHRoaXMuZGlyZWN0aW9uWCA9IDA7XG5cdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4vLyBJTlNFUlQgUE9JTlQ6IERFRkFVTFRTXG5cblx0dGhpcy5faW5pdCgpO1xuXHR0aGlzLnJlZnJlc2goKTtcblxuXHR0aGlzLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsIHRoaXMub3B0aW9ucy5zdGFydFkpO1xuXHR0aGlzLmVuYWJsZSgpO1xufVxuXG5JU2Nyb2xsLnByb3RvdHlwZSA9IHtcblx0dmVyc2lvbjogJzUuMS4zJyxcblxuXHRfaW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuX2luaXRFdmVudHMoKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfaW5pdFxuXG5cdH0sXG5cblx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuX2luaXRFdmVudHModHJ1ZSk7XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ2Rlc3Ryb3knKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoIGUudGFyZ2V0ICE9IHRoaXMuc2Nyb2xsZXIgfHwgIXRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdHJhbnNpdGlvblRpbWUoKTtcblx0XHRpZiAoICF0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cdH0sXG5cblx0X3N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIFJlYWN0IHRvIGxlZnQgbW91c2UgYnV0dG9uIG9ubHlcblx0XHRpZiAoIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9IDEgKSB7XG5cdFx0XHRpZiAoIGUuYnV0dG9uICE9PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8ICh0aGlzLmluaXRpYXRlZCAmJiB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5pc0JhZEFuZHJvaWQgJiYgIXV0aWxzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRwb3M7XG5cblx0XHR0aGlzLmluaXRpYXRlZFx0PSB1dGlscy5ldmVudFR5cGVbZS50eXBlXTtcblx0XHR0aGlzLm1vdmVkXHRcdD0gZmFsc2U7XG5cdFx0dGhpcy5kaXN0WFx0XHQ9IDA7XG5cdFx0dGhpcy5kaXN0WVx0XHQ9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gMDtcblxuXHRcdHRoaXMuX3RyYW5zaXRpb25UaW1lKCk7XG5cblx0XHR0aGlzLnN0YXJ0VGltZSA9IHV0aWxzLmdldFRpbWUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcblx0XHRcdHBvcyA9IHRoaXMuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzQW5pbWF0aW5nICkge1xuXHRcdFx0dGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXJ0WCAgICA9IHRoaXMueDtcblx0XHR0aGlzLnN0YXJ0WSAgICA9IHRoaXMueTtcblx0XHR0aGlzLmFic1N0YXJ0WCA9IHRoaXMueDtcblx0XHR0aGlzLmFic1N0YXJ0WSA9IHRoaXMueTtcblx0XHR0aGlzLnBvaW50WCAgICA9IHBvaW50LnBhZ2VYO1xuXHRcdHRoaXMucG9pbnRZICAgID0gcG9pbnQucGFnZVk7XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ2JlZm9yZVNjcm9sbFN0YXJ0Jyk7XG5cdH0sXG5cblx0X21vdmU6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCApIHtcdC8vIGluY3JlYXNlcyBwZXJmb3JtYW5jZSBvbiBBbmRyb2lkPyBUT0RPOiBjaGVjayFcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnRcdFx0PSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0ZGVsdGFYXHRcdD0gcG9pbnQucGFnZVggLSB0aGlzLnBvaW50WCxcblx0XHRcdGRlbHRhWVx0XHQ9IHBvaW50LnBhZ2VZIC0gdGhpcy5wb2ludFksXG5cdFx0XHR0aW1lc3RhbXBcdD0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdGFic0Rpc3RYLCBhYnNEaXN0WTtcblxuXHRcdHRoaXMucG9pbnRYXHRcdD0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFlcdFx0PSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuZGlzdFhcdFx0Kz0gZGVsdGFYO1xuXHRcdHRoaXMuZGlzdFlcdFx0Kz0gZGVsdGFZO1xuXHRcdGFic0Rpc3RYXHRcdD0gTWF0aC5hYnModGhpcy5kaXN0WCk7XG5cdFx0YWJzRGlzdFlcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RZKTtcblxuXHRcdC8vIFdlIG5lZWQgdG8gbW92ZSBhdCBsZWFzdCAxMCBwaXhlbHMgZm9yIHRoZSBzY3JvbGxpbmcgdG8gaW5pdGlhdGVcblx0XHRpZiAoIHRpbWVzdGFtcCAtIHRoaXMuZW5kVGltZSA+IDMwMCAmJiAoYWJzRGlzdFggPCAxMCAmJiBhYnNEaXN0WSA8IDEwKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB5b3UgYXJlIHNjcm9sbGluZyBpbiBvbmUgZGlyZWN0aW9uIGxvY2sgdGhlIG90aGVyXG5cdFx0aWYgKCAhdGhpcy5kaXJlY3Rpb25Mb2NrZWQgJiYgIXRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICkge1xuXHRcdFx0aWYgKCBhYnNEaXN0WCA+IGFic0Rpc3RZICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgKSB7XG5cdFx0XHRcdHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gJ2gnO1x0XHQvLyBsb2NrIGhvcml6b250YWxseVxuXHRcdFx0fSBlbHNlIGlmICggYWJzRGlzdFkgPj0gYWJzRGlzdFggKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAndic7XHRcdC8vIGxvY2sgdmVydGljYWxseVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnbic7XHRcdC8vIG5vIGxvY2tcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuZGlyZWN0aW9uTG9ja2VkID09ICdoJyApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnICkge1xuXHRcdFx0XHR0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhWSA9IDA7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ3YnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICd2ZXJ0aWNhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFYID0gMDtcblx0XHR9XG5cblx0XHRkZWx0YVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyBkZWx0YVggOiAwO1xuXHRcdGRlbHRhWSA9IHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyBkZWx0YVkgOiAwO1xuXG5cdFx0bmV3WCA9IHRoaXMueCArIGRlbHRhWDtcblx0XHRuZXdZID0gdGhpcy55ICsgZGVsdGFZO1xuXG5cdFx0Ly8gU2xvdyBkb3duIGlmIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIG5ld1ggPiAwIHx8IG5ld1ggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHRuZXdYID0gdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMueCArIGRlbHRhWCAvIDMgOiBuZXdYID4gMCA/IDAgOiB0aGlzLm1heFNjcm9sbFg7XG5cdFx0fVxuXHRcdGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy55ICsgZGVsdGFZIC8gMyA6IG5ld1kgPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHR0aGlzLmRpcmVjdGlvblggPSBkZWx0YVggPiAwID8gLTEgOiBkZWx0YVggPCAwID8gMSA6IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gZGVsdGFZID4gMCA/IC0xIDogZGVsdGFZIDwgMCA/IDEgOiAwO1xuXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vdmVkID0gdHJ1ZTtcblxuXHRcdHRoaXMuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuLyogUkVQTEFDRSBTVEFSVDogX21vdmUgKi9cblxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5zdGFydFRpbWUgPiAzMDAgKSB7XG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcblx0XHRcdHRoaXMuc3RhcnRYID0gdGhpcy54O1xuXHRcdFx0dGhpcy5zdGFydFkgPSB0aGlzLnk7XG5cdFx0fVxuXG4vKiBSRVBMQUNFIEVORDogX21vdmUgKi9cblxuXHR9LFxuXG5cdF9lbmQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0bW9tZW50dW1YLFxuXHRcdFx0bW9tZW50dW1ZLFxuXHRcdFx0ZHVyYXRpb24gPSB1dGlscy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSxcblx0XHRcdG5ld1ggPSBNYXRoLnJvdW5kKHRoaXMueCksXG5cdFx0XHRuZXdZID0gTWF0aC5yb3VuZCh0aGlzLnkpLFxuXHRcdFx0ZGlzdGFuY2VYID0gTWF0aC5hYnMobmV3WCAtIHRoaXMuc3RhcnRYKSxcblx0XHRcdGRpc3RhbmNlWSA9IE1hdGguYWJzKG5ld1kgLSB0aGlzLnN0YXJ0WSksXG5cdFx0XHR0aW1lID0gMCxcblx0XHRcdGVhc2luZyA9ICcnO1xuXG5cdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IDA7XG5cdFx0dGhpcy5pbml0aWF0ZWQgPSAwO1xuXHRcdHRoaXMuZW5kVGltZSA9IHV0aWxzLmdldFRpbWUoKTtcblxuXHRcdC8vIHJlc2V0IGlmIHdlIGFyZSBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXG5cdFx0aWYgKCB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSk7XHQvLyBlbnN1cmVzIHRoYXQgdGhlIGxhc3QgcG9zaXRpb24gaXMgcm91bmRlZFxuXG5cdFx0Ly8gd2Ugc2Nyb2xsZWQgbGVzcyB0aGFuIDEwIHBpeGVsc1xuXHRcdGlmICggIXRoaXMubW92ZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy50YXAgKSB7XG5cdFx0XHRcdHV0aWxzLnRhcChlLCB0aGlzLm9wdGlvbnMudGFwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG5cdFx0XHRcdHV0aWxzLmNsaWNrKGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbENhbmNlbCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fZXZlbnRzLmZsaWNrICYmIGR1cmF0aW9uIDwgMjAwICYmIGRpc3RhbmNlWCA8IDEwMCAmJiBkaXN0YW5jZVkgPCAxMDAgKSB7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ2ZsaWNrJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxuXHRcdGlmICggdGhpcy5vcHRpb25zLm1vbWVudHVtICYmIGR1cmF0aW9uIDwgMzAwICkge1xuXHRcdFx0bW9tZW50dW1YID0gdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy54LCB0aGlzLnN0YXJ0WCwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWCwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlcldpZHRoIDogMCwgdGhpcy5vcHRpb25zLmRlY2VsZXJhdGlvbikgOiB7IGRlc3RpbmF0aW9uOiBuZXdYLCBkdXJhdGlvbjogMCB9O1xuXHRcdFx0bW9tZW50dW1ZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IHV0aWxzLm1vbWVudHVtKHRoaXMueSwgdGhpcy5zdGFydFksIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFksIHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLndyYXBwZXJIZWlnaHQgOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1ksIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRuZXdYID0gbW9tZW50dW1YLmRlc3RpbmF0aW9uO1xuXHRcdFx0bmV3WSA9IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcblx0XHRcdHRpbWUgPSBNYXRoLm1heChtb21lbnR1bVguZHVyYXRpb24sIG1vbWVudHVtWS5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMTtcblx0XHR9XG5cbi8vIElOU0VSVCBQT0lOVDogX2VuZFxuXG5cdFx0aWYgKCBuZXdYICE9IHRoaXMueCB8fCBuZXdZICE9IHRoaXMueSApIHtcblx0XHRcdC8vIGNoYW5nZSBlYXNpbmcgZnVuY3Rpb24gd2hlbiBzY3JvbGxlciBnb2VzIG91dCBvZiB0aGUgYm91bmRhcmllc1xuXHRcdFx0aWYgKCBuZXdYID4gMCB8fCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYIHx8IG5ld1kgPiAwIHx8IG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG5cdFx0XHRcdGVhc2luZyA9IHV0aWxzLmVhc2UucXVhZHJhdGljO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1ksIHRpbWUsIGVhc2luZyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0fSxcblxuXHRfcmVzaXplOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG5cblx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoYXQucmVmcmVzaCgpO1xuXHRcdH0sIHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nKTtcblx0fSxcblxuXHRyZXNldFBvc2l0aW9uOiBmdW5jdGlvbiAodGltZSkge1xuXHRcdHZhciB4ID0gdGhpcy54LFxuXHRcdFx0eSA9IHRoaXMueTtcblxuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHRpZiAoICF0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgfHwgdGhpcy54ID4gMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMueCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdHggPSB0aGlzLm1heFNjcm9sbFg7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCB8fCB0aGlzLnkgPiAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fSBlbHNlIGlmICggdGhpcy55IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0eSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHRpZiAoIHggPT0gdGhpcy54ICYmIHkgPT0gdGhpcy55ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH0sXG5cblx0ZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fSxcblxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJmID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcdFx0Ly8gRm9yY2UgcmVmbG93XG5cblx0XHR0aGlzLndyYXBwZXJXaWR0aFx0PSB0aGlzLndyYXBwZXIuY2xpZW50V2lkdGg7XG5cdFx0dGhpcy53cmFwcGVySGVpZ2h0XHQ9IHRoaXMud3JhcHBlci5jbGllbnRIZWlnaHQ7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IHJlZnJlc2ggKi9cblxuXHRcdHRoaXMuc2Nyb2xsZXJXaWR0aFx0PSB0aGlzLnNjcm9sbGVyLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMuc2Nyb2xsZXJIZWlnaHRcdD0gdGhpcy5zY3JvbGxlci5vZmZzZXRIZWlnaHQ7XG5cblx0XHR0aGlzLm1heFNjcm9sbFhcdFx0PSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuc2Nyb2xsZXJXaWR0aDtcblx0XHR0aGlzLm1heFNjcm9sbFlcdFx0PSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGVySGVpZ2h0O1xuXG4vKiBSRVBMQUNFIEVORDogcmVmcmVzaCAqL1xuXG5cdFx0dGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsXHQ9IHRoaXMub3B0aW9ucy5zY3JvbGxYICYmIHRoaXMubWF4U2Nyb2xsWCA8IDA7XG5cdFx0dGhpcy5oYXNWZXJ0aWNhbFNjcm9sbFx0XHQ9IHRoaXMub3B0aW9ucy5zY3JvbGxZICYmIHRoaXMubWF4U2Nyb2xsWSA8IDA7XG5cblx0XHRpZiAoICF0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgKSB7XG5cdFx0XHR0aGlzLm1heFNjcm9sbFggPSAwO1xuXHRcdFx0dGhpcy5zY3JvbGxlcldpZHRoID0gdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdHRoaXMubWF4U2Nyb2xsWSA9IDA7XG5cdFx0XHR0aGlzLnNjcm9sbGVySGVpZ2h0ID0gdGhpcy53cmFwcGVySGVpZ2h0O1xuXHRcdH1cblxuXHRcdHRoaXMuZW5kVGltZSA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSAwO1xuXG5cdFx0dGhpcy53cmFwcGVyT2Zmc2V0ID0gdXRpbHMub2Zmc2V0KHRoaXMud3JhcHBlcik7XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ3JlZnJlc2gnKTtcblxuXHRcdHRoaXMucmVzZXRQb3NpdGlvbigpO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IF9yZWZyZXNoXG5cblx0fSxcblxuXHRvbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW3R5cGVdICkge1xuXHRcdFx0dGhpcy5fZXZlbnRzW3R5cGVdID0gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5fZXZlbnRzW3R5cGVdLnB1c2goZm4pO1xuXHR9LFxuXG5cdG9mZjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW3R5cGVdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBpbmRleCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5pbmRleE9mKGZuKTtcblxuXHRcdGlmICggaW5kZXggPiAtMSApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fSxcblxuXHRfZXhlY0V2ZW50OiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsID0gdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcblxuXHRcdGlmICggIWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0dGhpcy5fZXZlbnRzW3R5cGVdW2ldLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbEJ5OiBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nKSB7XG5cdFx0eCA9IHRoaXMueCArIHg7XG5cdFx0eSA9IHRoaXMueSArIHk7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRzY3JvbGxUbzogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdGVhc2luZyA9IGVhc2luZyB8fCB1dGlscy5lYXNlLmNpcmN1bGFyO1xuXG5cdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRpbWUgPiAwO1xuXG5cdFx0aWYgKCAhdGltZSB8fCAodGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgZWFzaW5nLnN0eWxlKSApIHtcblx0XHRcdHRoaXMuX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlYXNpbmcuc3R5bGUpO1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvblRpbWUodGltZSk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoeCwgeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2FuaW1hdGUoeCwgeSwgdGltZSwgZWFzaW5nLmZuKTtcblx0XHR9XG5cdH0sXG5cblx0c2Nyb2xsVG9FbGVtZW50OiBmdW5jdGlvbiAoZWwsIHRpbWUsIG9mZnNldFgsIG9mZnNldFksIGVhc2luZykge1xuXHRcdGVsID0gZWwubm9kZVR5cGUgPyBlbCA6IHRoaXMuc2Nyb2xsZXIucXVlcnlTZWxlY3RvcihlbCk7XG5cblx0XHRpZiAoICFlbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTtcblxuXHRcdHBvcy5sZWZ0IC09IHRoaXMud3JhcHBlck9mZnNldC5sZWZ0O1xuXHRcdHBvcy50b3AgIC09IHRoaXMud3JhcHBlck9mZnNldC50b3A7XG5cblx0XHQvLyBpZiBvZmZzZXRYL1kgYXJlIHRydWUgd2UgY2VudGVyIHRoZSBlbGVtZW50IHRvIHRoZSBzY3JlZW5cblx0XHRpZiAoIG9mZnNldFggPT09IHRydWUgKSB7XG5cdFx0XHRvZmZzZXRYID0gTWF0aC5yb3VuZChlbC5vZmZzZXRXaWR0aCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGggLyAyKTtcblx0XHR9XG5cdFx0aWYgKCBvZmZzZXRZID09PSB0cnVlICkge1xuXHRcdFx0b2Zmc2V0WSA9IE1hdGgucm91bmQoZWwub2Zmc2V0SGVpZ2h0IC8gMiAtIHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQgLyAyKTtcblx0XHR9XG5cblx0XHRwb3MubGVmdCAtPSBvZmZzZXRYIHx8IDA7XG5cdFx0cG9zLnRvcCAgLT0gb2Zmc2V0WSB8fCAwO1xuXG5cdFx0cG9zLmxlZnQgPSBwb3MubGVmdCA+IDAgPyAwIDogcG9zLmxlZnQgPCB0aGlzLm1heFNjcm9sbFggPyB0aGlzLm1heFNjcm9sbFggOiBwb3MubGVmdDtcblx0XHRwb3MudG9wICA9IHBvcy50b3AgID4gMCA/IDAgOiBwb3MudG9wICA8IHRoaXMubWF4U2Nyb2xsWSA/IHRoaXMubWF4U2Nyb2xsWSA6IHBvcy50b3A7XG5cblx0XHR0aW1lID0gdGltZSA9PT0gdW5kZWZpbmVkIHx8IHRpbWUgPT09IG51bGwgfHwgdGltZSA9PT0gJ2F1dG8nID8gTWF0aC5tYXgoTWF0aC5hYnModGhpcy54LXBvcy5sZWZ0KSwgTWF0aC5hYnModGhpcy55LXBvcy50b3ApKSA6IHRpbWU7XG5cblx0XHR0aGlzLnNjcm9sbFRvKHBvcy5sZWZ0LCBwb3MudG9wLCB0aW1lLCBlYXNpbmcpO1xuXHR9LFxuXG5cdF90cmFuc2l0aW9uVGltZTogZnVuY3Rpb24gKHRpbWUpIHtcblx0XHR0aW1lID0gdGltZSB8fCAwO1xuXG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbl0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbl0gPSAnMC4wMDFzJztcblx0XHR9XG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG5cdH0sXG5cblx0X3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF90cmFuc2xhdGUgKi9cblxuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnRyYW5zbGF0ZVo7XG5cbi8qIFJFUExBQ0UgRU5EOiBfdHJhbnNsYXRlICovXG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0eCA9IE1hdGgucm91bmQoeCk7XG5cdFx0XHR5ID0gTWF0aC5yb3VuZCh5KTtcblx0XHRcdHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGUudG9wID0geSArICdweCc7XG5cdFx0fVxuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXG4vLyBJTlNFUlQgUE9JTlQ6IF90cmFuc2xhdGVcblxuXHR9LFxuXG5cdF9pbml0RXZlbnRzOiBmdW5jdGlvbiAocmVtb3ZlKSB7XG5cdFx0dmFyIGV2ZW50VHlwZSA9IHJlbW92ZSA/IHV0aWxzLnJlbW92ZUV2ZW50IDogdXRpbHMuYWRkRXZlbnQsXG5cdFx0XHR0YXJnZXQgPSB0aGlzLm9wdGlvbnMuYmluZFRvV3JhcHBlciA/IHRoaXMud3JhcHBlciA6IHdpbmRvdztcblxuXHRcdGV2ZW50VHlwZSh3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMpO1xuXHRcdGV2ZW50VHlwZSh3aW5kb3csICdyZXNpemUnLCB0aGlzKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNsaWNrICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ2NsaWNrJywgdGhpcywgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICdtb3VzZWRvd24nLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZW1vdmUnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZWNhbmNlbCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHV0aWxzLmhhc1BvaW50ZXIgJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJtb3ZlJyksIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVyY2FuY2VsJyksIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVydXAnKSwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCB1dGlscy5oYXNUb3VjaCAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICd0b3VjaHN0YXJ0JywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAndG91Y2htb3ZlJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAndG91Y2hjYW5jZWwnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaGVuZCcsIHRoaXMpO1xuXHRcdH1cblxuXHRcdGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAndHJhbnNpdGlvbmVuZCcsIHRoaXMpO1xuXHRcdGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMpO1xuXHRcdGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnb1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ01TVHJhbnNpdGlvbkVuZCcsIHRoaXMpO1xuXHR9LFxuXG5cdGdldENvbXB1dGVkUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgbWF0cml4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zY3JvbGxlciwgbnVsbCksXG5cdFx0XHR4LCB5O1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtICkge1xuXHRcdFx0bWF0cml4ID0gbWF0cml4W3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcblx0XHRcdHggPSArKG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdKTtcblx0XHRcdHkgPSArKG1hdHJpeFsxM10gfHwgbWF0cml4WzVdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0eCA9ICttYXRyaXgubGVmdC5yZXBsYWNlKC9bXi1cXGQuXS9nLCAnJyk7XG5cdFx0XHR5ID0gK21hdHJpeC50b3AucmVwbGFjZSgvW14tXFxkLl0vZywgJycpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IHg6IHgsIHk6IHkgfTtcblx0fSxcblxuXHRfYW5pbWF0ZTogZnVuY3Rpb24gKGRlc3RYLCBkZXN0WSwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0c3RhcnRYID0gdGhpcy54LFxuXHRcdFx0c3RhcnRZID0gdGhpcy55LFxuXHRcdFx0c3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0ZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGZ1bmN0aW9uIHN0ZXAgKCkge1xuXHRcdFx0dmFyIG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcblx0XHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdFx0ZWFzaW5nO1xuXG5cdFx0XHRpZiAoIG5vdyA+PSBkZXN0VGltZSApIHtcblx0XHRcdFx0dGhhdC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGF0Ll90cmFuc2xhdGUoZGVzdFgsIGRlc3RZKTtcblxuXHRcdFx0XHRpZiAoICF0aGF0LnJlc2V0UG9zaXRpb24odGhhdC5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG5vdyA9ICggbm93IC0gc3RhcnRUaW1lICkgLyBkdXJhdGlvbjtcblx0XHRcdGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XG5cdFx0XHRuZXdYID0gKCBkZXN0WCAtIHN0YXJ0WCApICogZWFzaW5nICsgc3RhcnRYO1xuXHRcdFx0bmV3WSA9ICggZGVzdFkgLSBzdGFydFkgKSAqIGVhc2luZyArIHN0YXJ0WTtcblx0XHRcdHRoYXQuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuXHRcdFx0aWYgKCB0aGF0LmlzQW5pbWF0aW5nICkge1xuXHRcdFx0XHRyQUYoc3RlcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0c3RlcCgpO1xuXHR9LFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcmllbnRhdGlvbmNoYW5nZSc6XG5cdFx0XHRjYXNlICdyZXNpemUnOlxuXHRcdFx0XHR0aGlzLl9yZXNpemUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0cmFuc2l0aW9uZW5kJzpcblx0XHRcdGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnb1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnTVNUcmFuc2l0aW9uRW5kJzpcblx0XHRcdFx0dGhpcy5fdHJhbnNpdGlvbkVuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3aGVlbCc6XG5cdFx0XHRjYXNlICdET01Nb3VzZVNjcm9sbCc6XG5cdFx0XHRjYXNlICdtb3VzZXdoZWVsJzpcblx0XHRcdFx0dGhpcy5fd2hlZWwoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAna2V5ZG93bic6XG5cdFx0XHRcdHRoaXMuX2tleShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjbGljayc6XG5cdFx0XHRcdGlmICggIWUuX2NvbnN0cnVjdGVkICkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcbklTY3JvbGwudXRpbHMgPSB1dGlscztcblxuaWYgKCB0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzICkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IElTY3JvbGw7XG59IGVsc2Uge1xuXHR3aW5kb3cuSVNjcm9sbCA9IElTY3JvbGw7XG59XG5cbn0pKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpOyIsIi8qKlxuICogbWFpbmxvb3AuanMgMS4wLjEtMjAxNTA4MTZcbiAqXG4gKiBAYXV0aG9yIElzYWFjIFN1a2luIChodHRwOi8vd3d3LmlzYWFjc3VraW4uY29tLylcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbiFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2lmKGUraj5hKXJldHVybiB1PW4oYiksdm9pZCAwO2ZvcihkKz1hLWUsZT1hLHEoYSxkKSxhPmcrMWUzJiYoZj0uMjUqaCsuNzUqZixnPWEsaD0wKSxoKyssaT0wO2Q+PWM7KWlmKHIoYyksZC09YywrK2k+PTI0MCl7bT0hMDticmVha31zKGQvYyksdChmLG0pLG09ITEsdT1uKGIpfXZhciBjPTFlMy82MCxkPTAsZT0wLGY9NjAsZz0wLGg9MCxpPTAsaj0wLGs9ITEsbD0hMSxtPSExLG49YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKCl7dmFyIGE9RGF0ZS5ub3coKSxiLGQ7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBiPURhdGUubm93KCksZD1NYXRoLm1heCgwLGMtKGItYSkpLGE9YitkLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGIrZCl9LGQpfX0oKSxvPWEuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGNsZWFyVGltZW91dCxwPWZ1bmN0aW9uKCl7fSxxPXAscj1wLHM9cCx0PXAsdTthLk1haW5Mb29wPXtnZXRTaW11bGF0aW9uVGltZXN0ZXA6ZnVuY3Rpb24oKXtyZXR1cm4gY30sc2V0U2ltdWxhdGlvblRpbWVzdGVwOmZ1bmN0aW9uKGEpe3JldHVybiBjPWEsdGhpc30sZ2V0RlBTOmZ1bmN0aW9uKCl7cmV0dXJuIGZ9LGdldE1heEFsbG93ZWRGUFM6ZnVuY3Rpb24oKXtyZXR1cm4gMWUzL2p9LHNldE1heEFsbG93ZWRGUFM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEmJihhPTEvMCksMD09PWE/dGhpcy5zdG9wKCk6aj0xZTMvYSx0aGlzfSxyZXNldEZyYW1lRGVsdGE6ZnVuY3Rpb24oKXt2YXIgYT1kO3JldHVybiBkPTAsYX0sc2V0QmVnaW46ZnVuY3Rpb24oYSl7cmV0dXJuIHE9YXx8cSx0aGlzfSxzZXRVcGRhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHI9YXx8cix0aGlzfSxzZXREcmF3OmZ1bmN0aW9uKGEpe3JldHVybiBzPWF8fHMsdGhpc30sc2V0RW5kOmZ1bmN0aW9uKGEpe3JldHVybiB0PWF8fHQsdGhpc30sc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbHx8KGw9ITAsdT1uKGZ1bmN0aW9uKGEpe3MoMSksaz0hMCxlPWEsZz1hLGg9MCx1PW4oYil9KSksdGhpc30sc3RvcDpmdW5jdGlvbigpe3JldHVybiBrPSExLGw9ITEsbyh1KSx0aGlzfSxpc1J1bm5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4ga319LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoYS5NYWluTG9vcCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1hLk1haW5Mb29wKX0odGhpcyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWlubG9vcC5taW4uanMubWFwIiwiLy8gU3VwcG9ydCBmb3IgYXN5bmNocm9ub3VzIGZ1bmN0aW9uc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhRnJvbSAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5L2Zyb20nKVxuICAsIG1peGluICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L21peGluJylcbiAgLCBkZWZpbmVMZW5ndGggPSByZXF1aXJlKCdlczUtZXh0L2Z1bmN0aW9uL19kZWZpbmUtbGVuZ3RoJylcbiAgLCBuZXh0VGljayAgICAgPSByZXF1aXJlKCduZXh0LXRpY2snKVxuXG4gICwgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgLCBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZVxuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxucmVxdWlyZSgnLi4vbGliL3JlZ2lzdGVyZWQtZXh0ZW5zaW9ucycpLmFzeW5jID0gZnVuY3Rpb24gKHRiaSwgY29uZikge1xuXHR2YXIgd2FpdGluZyA9IGNyZWF0ZShudWxsKSwgY2FjaGUgPSBjcmVhdGUobnVsbClcblx0ICAsIGJhc2UgPSBjb25mLm1lbW9pemVkLCBvcmlnaW5hbCA9IGNvbmYub3JpZ2luYWxcblx0ICAsIGN1cnJlbnRDYWxsYmFjaywgY3VycmVudENvbnRleHQsIGN1cnJlbnRBcmdzO1xuXG5cdC8vIEluaXRpYWxcblx0Y29uZi5tZW1vaXplZCA9IGRlZmluZUxlbmd0aChmdW5jdGlvbiAoYXJnKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGxhc3QgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cdFx0aWYgKHR5cGVvZiBsYXN0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjdXJyZW50Q2FsbGJhY2sgPSBsYXN0O1xuXHRcdFx0YXJncyA9IHNsaWNlLmNhbGwoYXJncywgMCwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZS5hcHBseShjdXJyZW50Q29udGV4dCA9IHRoaXMsIGN1cnJlbnRBcmdzID0gYXJncyk7XG5cdH0sIGJhc2UpO1xuXHR0cnkgeyBtaXhpbihjb25mLm1lbW9pemVkLCBiYXNlKTsgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG5cdC8vIEZyb20gY2FjaGUgKHN5bmMpXG5cdGNvbmYub24oJ2dldCcsIGZ1bmN0aW9uIChpZCkge1xuXHRcdHZhciBjYiwgY29udGV4dCwgYXJncztcblx0XHRpZiAoIWN1cnJlbnRDYWxsYmFjaykgcmV0dXJuO1xuXG5cdFx0Ly8gVW5yZXNvbHZlZFxuXHRcdGlmICh3YWl0aW5nW2lkXSkge1xuXHRcdFx0aWYgKHR5cGVvZiB3YWl0aW5nW2lkXSA9PT0gJ2Z1bmN0aW9uJykgd2FpdGluZ1tpZF0gPSBbd2FpdGluZ1tpZF0sIGN1cnJlbnRDYWxsYmFja107XG5cdFx0XHRlbHNlIHdhaXRpbmdbaWRdLnB1c2goY3VycmVudENhbGxiYWNrKTtcblx0XHRcdGN1cnJlbnRDYWxsYmFjayA9IG51bGw7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVzb2x2ZWQsIGFzc3VyZSBuZXh0IHRpY2sgaW52b2NhdGlvblxuXHRcdGNiID0gY3VycmVudENhbGxiYWNrO1xuXHRcdGNvbnRleHQgPSBjdXJyZW50Q29udGV4dDtcblx0XHRhcmdzID0gY3VycmVudEFyZ3M7XG5cdFx0Y3VycmVudENhbGxiYWNrID0gY3VycmVudENvbnRleHQgPSBjdXJyZW50QXJncyA9IG51bGw7XG5cdFx0bmV4dFRpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGRhdGE7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaWQpKSB7XG5cdFx0XHRcdGRhdGEgPSBjYWNoZVtpZF07XG5cdFx0XHRcdGNvbmYuZW1pdCgnZ2V0YXN5bmMnLCBpZCwgYXJncywgY29udGV4dCk7XG5cdFx0XHRcdGFwcGx5LmNhbGwoY2IsIGRhdGEuY29udGV4dCwgZGF0YS5hcmdzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFB1cmdlZCBpbiBhIG1lYW50aW1lLCB3ZSBzaG91bGRuJ3QgcmVseSBvbiBjYWNoZWQgdmFsdWUsIHJlY2FsbFxuXHRcdFx0XHRjdXJyZW50Q2FsbGJhY2sgPSBjYjtcblx0XHRcdFx0Y3VycmVudENvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRjdXJyZW50QXJncyA9IGFyZ3M7XG5cdFx0XHRcdGJhc2UuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIE5vdCBmcm9tIGNhY2hlXG5cdGNvbmYub3JpZ2luYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGFyZ3MsIGNiLCBvcmlnQ2IsIHJlc3VsdDtcblx0XHRpZiAoIWN1cnJlbnRDYWxsYmFjaykgcmV0dXJuIGFwcGx5LmNhbGwob3JpZ2luYWwsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0YXJncyA9IGFGcm9tKGFyZ3VtZW50cyk7XG5cdFx0Y2IgPSBmdW5jdGlvbiBzZWxmKGVycikge1xuXHRcdFx0dmFyIGNiLCBhcmdzLCBpZCA9IHNlbGYuaWQ7XG5cdFx0XHRpZiAoaWQgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBTaG91bGRuJ3QgaGFwcGVuLCBtZWFucyBhc3luYyBjYWxsYmFjayB3YXMgY2FsbGVkIHN5bmMgd2F5XG5cdFx0XHRcdG5leHRUaWNrKGFwcGx5LmJpbmQoc2VsZiwgdGhpcywgYXJndW1lbnRzKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzZWxmLmlkO1xuXHRcdFx0Y2IgPSB3YWl0aW5nW2lkXTtcblx0XHRcdGRlbGV0ZSB3YWl0aW5nW2lkXTtcblx0XHRcdGlmICghY2IpIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBwcm9jZXNzZWQsXG5cdFx0XHRcdC8vIG91dGNvbWUgb2YgcmFjZSBjb25kaXRpb246IGFzeW5jRm4oMSwgY2IpLCBhc3luY0ZuLmNsZWFyKCksIGFzeW5jRm4oMSwgY2IpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGFyZ3MgPSBhRnJvbShhcmd1bWVudHMpO1xuXHRcdFx0aWYgKGNvbmYuaGFzKGlkKSkge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0Y29uZi5kZWxldGUoaWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNhY2hlW2lkXSA9IHsgY29udGV4dDogdGhpcywgYXJnczogYXJncyB9O1xuXHRcdFx0XHRcdGNvbmYuZW1pdCgnc2V0YXN5bmMnLCBpZCwgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgPyAxIDogY2IubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXN1bHQgPSBhcHBseS5jYWxsKGNiLCB0aGlzLCBhcmdzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNiLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJlc3VsdCA9IGFwcGx5LmNhbGwoY2IsIHRoaXMsIGFyZ3MpOyB9LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0XHRvcmlnQ2IgPSBjdXJyZW50Q2FsbGJhY2s7XG5cdFx0Y3VycmVudENhbGxiYWNrID0gY3VycmVudENvbnRleHQgPSBjdXJyZW50QXJncyA9IG51bGw7XG5cdFx0YXJncy5wdXNoKGNiKTtcblx0XHRyZXN1bHQgPSBhcHBseS5jYWxsKG9yaWdpbmFsLCB0aGlzLCBhcmdzKTtcblx0XHRjYi5jYiA9IG9yaWdDYjtcblx0XHRjdXJyZW50Q2FsbGJhY2sgPSBjYjtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIEFmdGVyIG5vdCBmcm9tIGNhY2hlIGNhbGxcblx0Y29uZi5vbignc2V0JywgZnVuY3Rpb24gKGlkKSB7XG5cdFx0aWYgKCFjdXJyZW50Q2FsbGJhY2spIHtcblx0XHRcdGNvbmYuZGVsZXRlKGlkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHdhaXRpbmdbaWRdKSB7XG5cdFx0XHQvLyBSYWNlIGNvbmRpdGlvbjogYXN5bmNGbigxLCBjYiksIGFzeW5jRm4uY2xlYXIoKSwgYXN5bmNGbigxLCBjYilcblx0XHRcdGlmICh0eXBlb2Ygd2FpdGluZ1tpZF0gPT09ICdmdW5jdGlvbicpIHdhaXRpbmdbaWRdID0gW3dhaXRpbmdbaWRdLCBjdXJyZW50Q2FsbGJhY2suY2JdO1xuXHRcdFx0ZWxzZSB3YWl0aW5nW2lkXS5wdXNoKGN1cnJlbnRDYWxsYmFjay5jYik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhaXRpbmdbaWRdID0gY3VycmVudENhbGxiYWNrLmNiO1xuXHRcdH1cblx0XHRkZWxldGUgY3VycmVudENhbGxiYWNrLmNiO1xuXHRcdGN1cnJlbnRDYWxsYmFjay5pZCA9IGlkO1xuXHRcdGN1cnJlbnRDYWxsYmFjayA9IG51bGw7XG5cdH0pO1xuXG5cdC8vIE9uIGRlbGV0ZVxuXHRjb25mLm9uKCdkZWxldGUnLCBmdW5jdGlvbiAoaWQpIHtcblx0XHR2YXIgcmVzdWx0O1xuXHRcdC8vIElmIGZhbHNlLCB3ZSBkb24ndCBoYXZlIHZhbHVlIHlldCwgc28gd2UgYXNzdW1lIHRoYXQgaW50ZW50aW9uIGlzIG5vdFxuXHRcdC8vIHRvIG1lbW9pemUgdGhpcyBjYWxsLiBBZnRlciB2YWx1ZSBpcyBvYnRhaW5lZCB3ZSBkb24ndCBjYWNoZSBpdCBidXRcblx0XHQvLyBncmFjZWZ1bGx5IHBhc3MgdG8gY2FsbGJhY2tcblx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh3YWl0aW5nLCBpZCkpIHJldHVybjtcblx0XHRpZiAoIWNhY2hlW2lkXSkgcmV0dXJuO1xuXHRcdHJlc3VsdCA9IGNhY2hlW2lkXTtcblx0XHRkZWxldGUgY2FjaGVbaWRdO1xuXHRcdGNvbmYuZW1pdCgnZGVsZXRlYXN5bmMnLCBpZCwgcmVzdWx0KTtcblx0fSk7XG5cblx0Ly8gT24gY2xlYXJcblx0Y29uZi5vbignY2xlYXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG9sZENhY2hlID0gY2FjaGU7XG5cdFx0Y2FjaGUgPSBjcmVhdGUobnVsbCk7XG5cdFx0Y29uZi5lbWl0KCdjbGVhcmFzeW5jJywgb2xkQ2FjaGUpO1xuXHR9KTtcbn07XG4iLCIvLyBDYWxsIGRpc3Bvc2UgY2FsbGJhY2sgb24gZWFjaCBjYWNoZSBwdXJnZVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsYWJsZSAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuICAsIGZvckVhY2ggICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9mb3ItZWFjaCcpXG4gICwgZXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4uL2xpYi9yZWdpc3RlcmVkLWV4dGVuc2lvbnMnKVxuXG4gICwgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG5leHRlbnNpb25zLmRpc3Bvc2UgPSBmdW5jdGlvbiAoZGlzcG9zZSwgY29uZiwgb3B0aW9ucykge1xuXHR2YXIgZGVsO1xuXHRjYWxsYWJsZShkaXNwb3NlKTtcblx0aWYgKG9wdGlvbnMuYXN5bmMgJiYgZXh0ZW5zaW9ucy5hc3luYykge1xuXHRcdGNvbmYub24oJ2RlbGV0ZWFzeW5jJywgZGVsID0gZnVuY3Rpb24gKGlkLCByZXN1bHQpIHtcblx0XHRcdGFwcGx5LmNhbGwoZGlzcG9zZSwgbnVsbCwgc2xpY2UuY2FsbChyZXN1bHQuYXJncywgMSkpO1xuXHRcdH0pO1xuXHRcdGNvbmYub24oJ2NsZWFyYXN5bmMnLCBmdW5jdGlvbiAoY2FjaGUpIHtcblx0XHRcdGZvckVhY2goY2FjaGUsIGZ1bmN0aW9uIChyZXN1bHQsIGlkKSB7IGRlbChpZCwgcmVzdWx0KTsgfSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbmYub24oJ2RlbGV0ZScsIGRlbCA9IGZ1bmN0aW9uIChpZCwgcmVzdWx0KSB7IGRpc3Bvc2UocmVzdWx0KTsgfSk7XG5cdGNvbmYub24oJ2NsZWFyJywgZnVuY3Rpb24gKGNhY2hlKSB7XG5cdFx0Zm9yRWFjaChjYWNoZSwgZnVuY3Rpb24gKHJlc3VsdCwgaWQpIHsgZGVsKGlkLCByZXN1bHQpOyB9KTtcblx0fSk7XG59O1xuIiwiLy8gVGltZW91dCBjYWNoZWQgdmFsdWVzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFGcm9tICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5L2Zyb20nKVxuICAsIG5vb3AgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2Z1bmN0aW9uL25vb3AnKVxuICAsIGZvckVhY2ggICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9mb3ItZWFjaCcpXG4gICwgdGltZW91dCAgICA9IHJlcXVpcmUoJ3RpbWVycy1leHQvdmFsaWQtdGltZW91dCcpXG4gICwgZXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4uL2xpYi9yZWdpc3RlcmVkLWV4dGVuc2lvbnMnKVxuXG4gICwgbWF4ID0gTWF0aC5tYXgsIG1pbiA9IE1hdGgubWluLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG5leHRlbnNpb25zLm1heEFnZSA9IGZ1bmN0aW9uIChtYXhBZ2UsIGNvbmYsIG9wdGlvbnMpIHtcblx0dmFyIHRpbWVvdXRzLCBwb3N0Zml4LCBwcmVGZXRjaEFnZSwgcHJlRmV0Y2hUaW1lb3V0cztcblxuXHRtYXhBZ2UgPSB0aW1lb3V0KG1heEFnZSk7XG5cdGlmICghbWF4QWdlKSByZXR1cm47XG5cblx0dGltZW91dHMgPSBjcmVhdGUobnVsbCk7XG5cdHBvc3RmaXggPSAob3B0aW9ucy5hc3luYyAmJiBleHRlbnNpb25zLmFzeW5jKSA/ICdhc3luYycgOiAnJztcblx0Y29uZi5vbignc2V0JyArIHBvc3RmaXgsIGZ1bmN0aW9uIChpZCkge1xuXHRcdHRpbWVvdXRzW2lkXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjb25mLmRlbGV0ZShpZCk7IH0sIG1heEFnZSk7XG5cdFx0aWYgKCFwcmVGZXRjaFRpbWVvdXRzKSByZXR1cm47XG5cdFx0aWYgKHByZUZldGNoVGltZW91dHNbaWRdKSBjbGVhclRpbWVvdXQocHJlRmV0Y2hUaW1lb3V0c1tpZF0pO1xuXHRcdHByZUZldGNoVGltZW91dHNbaWRdID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRkZWxldGUgcHJlRmV0Y2hUaW1lb3V0c1tpZF07XG5cdFx0fSwgcHJlRmV0Y2hBZ2UpO1xuXHR9KTtcblx0Y29uZi5vbignZGVsZXRlJyArIHBvc3RmaXgsIGZ1bmN0aW9uIChpZCkge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0c1tpZF0pO1xuXHRcdGRlbGV0ZSB0aW1lb3V0c1tpZF07XG5cdFx0aWYgKCFwcmVGZXRjaFRpbWVvdXRzKSByZXR1cm47XG5cdFx0Y2xlYXJUaW1lb3V0KHByZUZldGNoVGltZW91dHNbaWRdKTtcblx0XHRkZWxldGUgcHJlRmV0Y2hUaW1lb3V0c1tpZF07XG5cdH0pO1xuXG5cdGlmIChvcHRpb25zLnByZUZldGNoKSB7XG5cdFx0aWYgKChvcHRpb25zLnByZUZldGNoID09PSB0cnVlKSB8fCBpc05hTihvcHRpb25zLnByZUZldGNoKSkge1xuXHRcdFx0cHJlRmV0Y2hBZ2UgPSAwLjMzMztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJlRmV0Y2hBZ2UgPSBtYXgobWluKE51bWJlcihvcHRpb25zLnByZUZldGNoKSwgMSksIDApO1xuXHRcdH1cblx0XHRpZiAocHJlRmV0Y2hBZ2UpIHtcblx0XHRcdHByZUZldGNoVGltZW91dHMgPSB7fTtcblx0XHRcdHByZUZldGNoQWdlID0gKDEgLSBwcmVGZXRjaEFnZSkgKiBtYXhBZ2U7XG5cdFx0XHRjb25mLm9uKCdnZXQnICsgcG9zdGZpeCwgZnVuY3Rpb24gKGlkLCBhcmdzLCBjb250ZXh0KSB7XG5cdFx0XHRcdGlmICghcHJlRmV0Y2hUaW1lb3V0c1tpZF0pIHtcblx0XHRcdFx0XHRwcmVGZXRjaFRpbWVvdXRzW2lkXSA9ICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBwcmVGZXRjaFRpbWVvdXRzW2lkXTtcblx0XHRcdFx0XHRcdGNvbmYuZGVsZXRlKGlkKTtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLmFzeW5jKSB7XG5cdFx0XHRcdFx0XHRcdGFyZ3MgPSBhRnJvbShhcmdzKTtcblx0XHRcdFx0XHRcdFx0YXJncy5wdXNoKG5vb3ApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uZi5tZW1vaXplZC5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0XHR9LCAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uZi5vbignY2xlYXInICsgcG9zdGZpeCwgZnVuY3Rpb24gKCkge1xuXHRcdGZvckVhY2godGltZW91dHMsIGZ1bmN0aW9uIChpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9KTtcblx0XHR0aW1lb3V0cyA9IHt9O1xuXHRcdGlmIChwcmVGZXRjaFRpbWVvdXRzKSB7XG5cdFx0XHRmb3JFYWNoKHByZUZldGNoVGltZW91dHMsIGZ1bmN0aW9uIChpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9KTtcblx0XHRcdHByZUZldGNoVGltZW91dHMgPSB7fTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8vIExpbWl0IGNhY2hlIHNpemUsIExSVSAobGVhc3QgcmVjZW50bHkgdXNlZCkgYWxnb3JpdGhtLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB0b1Bvc0ludGVnZXIgPSByZXF1aXJlKCdlczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlcicpXG4gICwgbHJ1UXVldWUgICAgID0gcmVxdWlyZSgnbHJ1LXF1ZXVlJylcbiAgLCBleHRlbnNpb25zICAgPSByZXF1aXJlKCcuLi9saWIvcmVnaXN0ZXJlZC1leHRlbnNpb25zJyk7XG5cbmV4dGVuc2lvbnMubWF4ID0gZnVuY3Rpb24gKG1heCwgY29uZiwgb3B0aW9ucykge1xuXHR2YXIgcG9zdGZpeCwgcXVldWUsIGhpdDtcblxuXHRtYXggPSB0b1Bvc0ludGVnZXIobWF4KTtcblx0aWYgKCFtYXgpIHJldHVybjtcblxuXHRxdWV1ZSA9IGxydVF1ZXVlKG1heCk7XG5cdHBvc3RmaXggPSAob3B0aW9ucy5hc3luYyAmJiBleHRlbnNpb25zLmFzeW5jKSA/ICdhc3luYycgOiAnJztcblxuXHRjb25mLm9uKCdzZXQnICsgcG9zdGZpeCwgaGl0ID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0aWQgPSBxdWV1ZS5oaXQoaWQpO1xuXHRcdGlmIChpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0Y29uZi5kZWxldGUoaWQpO1xuXHR9KTtcblx0Y29uZi5vbignZ2V0JyArIHBvc3RmaXgsIGhpdCk7XG5cdGNvbmYub24oJ2RlbGV0ZScgKyBwb3N0Zml4LCBxdWV1ZS5kZWxldGUpO1xuXHRjb25mLm9uKCdjbGVhcicgKyBwb3N0Zml4LCBxdWV1ZS5jbGVhcik7XG59O1xuIiwiLy8gUmVmZXJlbmNlIGNvdW50ZXIsIHVzZWZ1bCBmb3IgZ2FyYmFnZSBjb2xsZWN0b3IgbGlrZSBmdW5jdGlvbmFsaXR5XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGQgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBleHRlbnNpb25zID0gcmVxdWlyZSgnLi4vbGliL3JlZ2lzdGVyZWQtZXh0ZW5zaW9ucycpXG5cbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG5cbmV4dGVuc2lvbnMucmVmQ291bnRlciA9IGZ1bmN0aW9uIChpZ25vcmUsIGNvbmYsIG9wdGlvbnMpIHtcblx0dmFyIGNhY2hlLCBwb3N0Zml4O1xuXG5cdGNhY2hlID0gY3JlYXRlKG51bGwpO1xuXHRwb3N0Zml4ID0gKG9wdGlvbnMuYXN5bmMgJiYgZXh0ZW5zaW9ucy5hc3luYykgPyAnYXN5bmMnIDogJyc7XG5cblx0Y29uZi5vbignc2V0JyArIHBvc3RmaXgsIGZ1bmN0aW9uIChpZCwgbGVuZ3RoKSB7IGNhY2hlW2lkXSA9IGxlbmd0aCB8fCAxOyB9KTtcblx0Y29uZi5vbignZ2V0JyArIHBvc3RmaXgsIGZ1bmN0aW9uIChpZCkgeyArK2NhY2hlW2lkXTsgfSk7XG5cdGNvbmYub24oJ2RlbGV0ZScgKyBwb3N0Zml4LCBmdW5jdGlvbiAoaWQpIHsgZGVsZXRlIGNhY2hlW2lkXTsgfSk7XG5cdGNvbmYub24oJ2NsZWFyJyArIHBvc3RmaXgsIGZ1bmN0aW9uICgpIHsgY2FjaGUgPSB7fTsgfSk7XG5cblx0ZGVmaW5lUHJvcGVydGllcyhjb25mLm1lbW9pemVkLCB7XG5cdFx0ZGVsZXRlUmVmOiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpZCA9IGNvbmYuZ2V0KGFyZ3VtZW50cyk7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwpIHJldHVybiBudWxsO1xuXHRcdFx0aWYgKCFjYWNoZVtpZF0pIHJldHVybiBudWxsO1xuXHRcdFx0aWYgKCEtLWNhY2hlW2lkXSkge1xuXHRcdFx0XHRjb25mLmRlbGV0ZShpZCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pLFxuXHRcdGdldFJlZkNvdW50OiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpZCA9IGNvbmYuZ2V0KGFyZ3VtZW50cyk7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwpIHJldHVybiAwO1xuXHRcdFx0aWYgKCFjYWNoZVtpZF0pIHJldHVybiAwO1xuXHRcdFx0cmV0dXJuIGNhY2hlW2lkXTtcblx0XHR9KVxuXHR9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBub3JtYWxpemVPcHRzID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMnKVxuICAsIHJlc29sdmVMZW5ndGggPSByZXF1aXJlKCcuL2xpYi9yZXNvbHZlLWxlbmd0aCcpXG4gICwgcGxhaW4gICAgICAgICA9IHJlcXVpcmUoJy4vcGxhaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4vKiwgb3B0aW9ucyovKSB7XG5cdHZhciBvcHRpb25zID0gbm9ybWFsaXplT3B0cyhhcmd1bWVudHNbMV0pLCBsZW5ndGg7XG5cblx0aWYgKCFvcHRpb25zLm5vcm1hbGl6ZXIpIHtcblx0XHRsZW5ndGggPSBvcHRpb25zLmxlbmd0aCA9IHJlc29sdmVMZW5ndGgob3B0aW9ucy5sZW5ndGgsIGZuLmxlbmd0aCwgb3B0aW9ucy5hc3luYyk7XG5cdFx0aWYgKGxlbmd0aCAhPT0gMCkge1xuXHRcdFx0aWYgKG9wdGlvbnMucHJpbWl0aXZlKSB7XG5cdFx0XHRcdGlmIChsZW5ndGggPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5ub3JtYWxpemVyID0gcmVxdWlyZSgnLi9ub3JtYWxpemVycy9wcmltaXRpdmUnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChsZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5ub3JtYWxpemVyID0gcmVxdWlyZSgnLi9ub3JtYWxpemVycy9nZXQtcHJpbWl0aXZlLWZpeGVkJykobGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGxlbmd0aCA9PT0gZmFsc2UpIG9wdGlvbnMubm9ybWFsaXplciA9IHJlcXVpcmUoJy4vbm9ybWFsaXplcnMvZ2V0JykoKTtcblx0XHRcdFx0ZWxzZSBpZiAobGVuZ3RoID09PSAxKSBvcHRpb25zLm5vcm1hbGl6ZXIgPSByZXF1aXJlKCcuL25vcm1hbGl6ZXJzL2dldC0xJykoKTtcblx0XHRcdFx0ZWxzZSBvcHRpb25zLm5vcm1hbGl6ZXIgPSByZXF1aXJlKCcuL25vcm1hbGl6ZXJzL2dldC1maXhlZCcpKGxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQXNzdXJlIGV4dGVuc2lvbnNcblx0aWYgKG9wdGlvbnMuYXN5bmMpIHJlcXVpcmUoJy4vZXh0L2FzeW5jJyk7XG5cdGlmIChvcHRpb25zLmRpc3Bvc2UpIHJlcXVpcmUoJy4vZXh0L2Rpc3Bvc2UnKTtcblx0aWYgKG9wdGlvbnMubWF4QWdlKSByZXF1aXJlKCcuL2V4dC9tYXgtYWdlJyk7XG5cdGlmIChvcHRpb25zLm1heCkgcmVxdWlyZSgnLi9leHQvbWF4Jyk7XG5cdGlmIChvcHRpb25zLnJlZkNvdW50ZXIpIHJlcXVpcmUoJy4vZXh0L3JlZi1jb3VudGVyJyk7XG5cblx0cmV0dXJuIHBsYWluKGZuLCBvcHRpb25zKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjdXN0b21FcnJvciAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9lcnJvci9jdXN0b20nKVxuICAsIGRlZmluZUxlbmd0aCAgICAgPSByZXF1aXJlKCdlczUtZXh0L2Z1bmN0aW9uL19kZWZpbmUtbGVuZ3RoJylcbiAgLCBkICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnZCcpXG4gICwgZWUgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2V2ZW50LWVtaXR0ZXInKS5tZXRob2RzXG4gICwgcmVzb2x2ZVJlc29sdmUgICA9IHJlcXVpcmUoJy4vcmVzb2x2ZS1yZXNvbHZlJylcbiAgLCByZXNvbHZlTm9ybWFsaXplID0gcmVxdWlyZSgnLi9yZXNvbHZlLW5vcm1hbGl6ZScpXG5cbiAgLCBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSwgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXG4gICwgb24gPSBlZS5vbiwgZW1pdCA9IGVlLmVtaXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgsIG9wdGlvbnMpIHtcblx0dmFyIGNhY2hlID0gY3JlYXRlKG51bGwpLCBjb25mLCBtZW1MZW5ndGgsIGdldCwgc2V0LCBkZWwsIGNsZWFyLCBleHREZWwsIG5vcm1hbGl6ZXJcblx0ICAsIGdldExpc3RlbmVycywgc2V0TGlzdGVuZXJzLCBkZWxldGVMaXN0ZW5lcnMsIG1lbW9pemVkLCByZXNvbHZlO1xuXHRpZiAobGVuZ3RoICE9PSBmYWxzZSkgbWVtTGVuZ3RoID0gbGVuZ3RoO1xuXHRlbHNlIGlmIChpc05hTihvcmlnaW5hbC5sZW5ndGgpKSBtZW1MZW5ndGggPSAxO1xuXHRlbHNlIG1lbUxlbmd0aCA9IG9yaWdpbmFsLmxlbmd0aDtcblxuXHRpZiAob3B0aW9ucy5ub3JtYWxpemVyKSB7XG5cdFx0bm9ybWFsaXplciA9IHJlc29sdmVOb3JtYWxpemUob3B0aW9ucy5ub3JtYWxpemVyKTtcblx0XHRnZXQgPSBub3JtYWxpemVyLmdldDtcblx0XHRzZXQgPSBub3JtYWxpemVyLnNldDtcblx0XHRkZWwgPSBub3JtYWxpemVyLmRlbGV0ZTtcblx0XHRjbGVhciA9IG5vcm1hbGl6ZXIuY2xlYXI7XG5cdH1cblx0aWYgKG9wdGlvbnMucmVzb2x2ZXJzICE9IG51bGwpIHJlc29sdmUgPSByZXNvbHZlUmVzb2x2ZShvcHRpb25zLnJlc29sdmVycyk7XG5cblx0aWYgKGdldCkge1xuXHRcdG1lbW9pemVkID0gZGVmaW5lTGVuZ3RoKGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdHZhciBpZCwgcmVzdWx0LCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0aWYgKHJlc29sdmUpIGFyZ3MgPSByZXNvbHZlKGFyZ3MpO1xuXHRcdFx0aWQgPSBnZXQoYXJncyk7XG5cdFx0XHRpZiAoaWQgIT09IG51bGwpIHtcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKSkge1xuXHRcdFx0XHRcdGlmIChnZXRMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnZ2V0JywgaWQsIGFyZ3MsIHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBjYWNoZVtpZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmVzdWx0ID0gY2FsbC5jYWxsKG9yaWdpbmFsLCB0aGlzLCBhcmcpO1xuXHRcdFx0ZWxzZSByZXN1bHQgPSBhcHBseS5jYWxsKG9yaWdpbmFsLCB0aGlzLCBhcmdzKTtcblx0XHRcdGlmIChpZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZCA9IGdldChhcmdzKTtcblx0XHRcdFx0aWYgKGlkICE9PSBudWxsKSB0aHJvdyBjdXN0b21FcnJvcihcIkNpcmN1bGFyIGludm9jYXRpb25cIiwgJ0NJUkNVTEFSX0lOVk9DQVRJT04nKTtcblx0XHRcdFx0aWQgPSBzZXQoYXJncyk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKSkge1xuXHRcdFx0XHR0aHJvdyBjdXN0b21FcnJvcihcIkNpcmN1bGFyIGludm9jYXRpb25cIiwgJ0NJUkNVTEFSX0lOVk9DQVRJT04nKTtcblx0XHRcdH1cblx0XHRcdGNhY2hlW2lkXSA9IHJlc3VsdDtcblx0XHRcdGlmIChzZXRMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnc2V0JywgaWQpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LCBtZW1MZW5ndGgpO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdG1lbW9pemVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCAnZGF0YScpKSB7XG5cdFx0XHRcdGlmIChnZXRMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnZ2V0JywgJ2RhdGEnLCBhcmd1bWVudHMsIHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gY2FjaGUuZGF0YTtcblx0XHRcdH1cblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmVzdWx0ID0gY2FsbC5jYWxsKG9yaWdpbmFsLCB0aGlzKTtcblx0XHRcdGVsc2UgcmVzdWx0ID0gYXBwbHkuY2FsbChvcmlnaW5hbCwgdGhpcywgYXJndW1lbnRzKTtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCAnZGF0YScpKSB7XG5cdFx0XHRcdHRocm93IGN1c3RvbUVycm9yKFwiQ2lyY3VsYXIgaW52b2NhdGlvblwiLCAnQ0lSQ1VMQVJfSU5WT0NBVElPTicpO1xuXHRcdFx0fVxuXHRcdFx0Y2FjaGUuZGF0YSA9IHJlc3VsdDtcblx0XHRcdGlmIChzZXRMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnc2V0JywgJ2RhdGEnKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRtZW1vaXplZCA9IGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdHZhciByZXN1bHQsIGFyZ3MgPSBhcmd1bWVudHMsIGlkO1xuXHRcdFx0aWYgKHJlc29sdmUpIGFyZ3MgPSByZXNvbHZlKGFyZ3VtZW50cyk7XG5cdFx0XHRpZCA9IFN0cmluZyhhcmdzWzBdKTtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBpZCkpIHtcblx0XHRcdFx0aWYgKGdldExpc3RlbmVycykgY29uZi5lbWl0KCdnZXQnLCBpZCwgYXJncywgdGhpcyk7XG5cdFx0XHRcdHJldHVybiBjYWNoZVtpZF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHJlc3VsdCA9IGNhbGwuY2FsbChvcmlnaW5hbCwgdGhpcywgYXJnc1swXSk7XG5cdFx0XHRlbHNlIHJlc3VsdCA9IGFwcGx5LmNhbGwob3JpZ2luYWwsIHRoaXMsIGFyZ3MpO1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKSkge1xuXHRcdFx0XHR0aHJvdyBjdXN0b21FcnJvcihcIkNpcmN1bGFyIGludm9jYXRpb25cIiwgJ0NJUkNVTEFSX0lOVk9DQVRJT04nKTtcblx0XHRcdH1cblx0XHRcdGNhY2hlW2lkXSA9IHJlc3VsdDtcblx0XHRcdGlmIChzZXRMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnc2V0JywgaWQpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9XG5cdGNvbmYgPSB7XG5cdFx0b3JpZ2luYWw6IG9yaWdpbmFsLFxuXHRcdG1lbW9pemVkOiBtZW1vaXplZCxcblx0XHRnZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRpZiAocmVzb2x2ZSkgYXJncyA9IHJlc29sdmUoYXJncyk7XG5cdFx0XHRpZiAoZ2V0KSByZXR1cm4gZ2V0KGFyZ3MpO1xuXHRcdFx0cmV0dXJuIFN0cmluZyhhcmdzWzBdKTtcblx0XHR9LFxuXHRcdGhhczogZnVuY3Rpb24gKGlkKSB7IHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBpZCk7IH0sXG5cdFx0ZGVsZXRlOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKSkgcmV0dXJuO1xuXHRcdFx0aWYgKGRlbCkgZGVsKGlkKTtcblx0XHRcdHJlc3VsdCA9IGNhY2hlW2lkXTtcblx0XHRcdGRlbGV0ZSBjYWNoZVtpZF07XG5cdFx0XHRpZiAoZGVsZXRlTGlzdGVuZXJzKSBjb25mLmVtaXQoJ2RlbGV0ZScsIGlkLCByZXN1bHQpO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBvbGRDYWNoZSA9IGNhY2hlO1xuXHRcdFx0aWYgKGNsZWFyKSBjbGVhcigpO1xuXHRcdFx0Y2FjaGUgPSBjcmVhdGUobnVsbCk7XG5cdFx0XHRjb25mLmVtaXQoJ2NsZWFyJywgb2xkQ2FjaGUpO1xuXHRcdH0sXG5cdFx0b246IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHRcdFx0aWYgKHR5cGUgPT09ICdnZXQnKSBnZXRMaXN0ZW5lcnMgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZSA9PT0gJ3NldCcpIHNldExpc3RlbmVycyA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlID09PSAnZGVsZXRlJykgZGVsZXRlTGlzdGVuZXJzID0gdHJ1ZTtcblx0XHRcdHJldHVybiBvbi5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyKTtcblx0XHR9LFxuXHRcdGVtaXQ6IGVtaXQsXG5cdFx0dXBkYXRlRW52OiBmdW5jdGlvbiAoKSB7IG9yaWdpbmFsID0gY29uZi5vcmlnaW5hbDsgfVxuXHR9O1xuXHRpZiAoZ2V0KSB7XG5cdFx0ZXh0RGVsID0gZGVmaW5lTGVuZ3RoKGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdHZhciBpZCwgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdGlmIChyZXNvbHZlKSBhcmdzID0gcmVzb2x2ZShhcmdzKTtcblx0XHRcdGlkID0gZ2V0KGFyZ3MpO1xuXHRcdFx0aWYgKGlkID09PSBudWxsKSByZXR1cm47XG5cdFx0XHRjb25mLmRlbGV0ZShpZCk7XG5cdFx0fSwgbWVtTGVuZ3RoKTtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDApIHtcblx0XHRleHREZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25mLmRlbGV0ZSgnZGF0YScpOyB9O1xuXHR9IGVsc2Uge1xuXHRcdGV4dERlbCA9IGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdGlmIChyZXNvbHZlKSBhcmcgPSByZXNvbHZlKGFyZ3VtZW50cylbMF07XG5cdFx0XHRyZXR1cm4gY29uZi5kZWxldGUoYXJnKTtcblx0XHR9O1xuXHR9XG5cdGRlZmluZVByb3BlcnRpZXMobWVtb2l6ZWQsIHtcblx0XHRfX21lbW9pemVkX186IGQodHJ1ZSksXG5cdFx0ZGVsZXRlOiBkKGV4dERlbCksXG5cdFx0Y2xlYXI6IGQoY29uZi5jbGVhcilcblx0fSk7XG5cdHJldHVybiBjb25mO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvUG9zSW50ID0gcmVxdWlyZSgnZXM1LWV4dC9udW1iZXIvdG8tcG9zLWludGVnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0c0xlbmd0aCwgZm5MZW5ndGgsIGlzQXN5bmMpIHtcblx0dmFyIGxlbmd0aDtcblx0aWYgKGlzTmFOKG9wdHNMZW5ndGgpKSB7XG5cdFx0bGVuZ3RoID0gZm5MZW5ndGg7XG5cdFx0aWYgKCEobGVuZ3RoID49IDApKSByZXR1cm4gMTtcblx0XHRpZiAoaXNBc3luYyAmJiBsZW5ndGgpIHJldHVybiBsZW5ndGggLSAxO1xuXHRcdHJldHVybiBsZW5ndGg7XG5cdH1cblx0aWYgKG9wdHNMZW5ndGggPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0b1Bvc0ludChvcHRzTGVuZ3RoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZXJOb3JtYWxpemVyKSB7XG5cdHZhciBub3JtYWxpemVyO1xuXHRpZiAodHlwZW9mIHVzZXJOb3JtYWxpemVyID09PSAnZnVuY3Rpb24nKSByZXR1cm4geyBzZXQ6IHVzZXJOb3JtYWxpemVyLCBnZXQ6IHVzZXJOb3JtYWxpemVyIH07XG5cdG5vcm1hbGl6ZXIgPSB7IGdldDogY2FsbGFibGUodXNlck5vcm1hbGl6ZXIuZ2V0KSB9O1xuXHRpZiAodXNlck5vcm1hbGl6ZXIuc2V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRub3JtYWxpemVyLnNldCA9IGNhbGxhYmxlKHVzZXJOb3JtYWxpemVyLnNldCk7XG5cdFx0bm9ybWFsaXplci5kZWxldGUgPSBjYWxsYWJsZSh1c2VyTm9ybWFsaXplci5kZWxldGUpO1xuXHRcdG5vcm1hbGl6ZXIuY2xlYXIgPSBjYWxsYWJsZSh1c2VyTm9ybWFsaXplci5jbGVhcik7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZXI7XG5cdH1cblx0bm9ybWFsaXplci5zZXQgPSBub3JtYWxpemVyLmdldDtcblx0cmV0dXJuIG5vcm1hbGl6ZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9BcnJheSAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5L3RvLWFycmF5JylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICwgcmVzb2x2ZUFyZ3M7XG5cbnJlc29sdmVBcmdzID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChyLCBpKSB7XG5cdFx0cmV0dXJuIHIgPyByKGFyZ3NbaV0pIDogYXJnc1tpXTtcblx0fSkuY29uY2F0KHNsaWNlLmNhbGwoYXJncywgdGhpcy5sZW5ndGgpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuXHRyZXNvbHZlcnMgPSB0b0FycmF5KHJlc29sdmVycyk7XG5cdHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG5cdFx0aWYgKHIgIT0gbnVsbCkgY2FsbGFibGUocik7XG5cdH0pO1xuXHRyZXR1cm4gcmVzb2x2ZUFyZ3MuYmluZChyZXNvbHZlcnMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9hc3NpZ24nKVxuICAsIG5vcm1hbGl6ZU9wdHMgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucycpXG4gICwgaXNDYWxsYWJsZSAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2lzLWNhbGxhYmxlJylcbiAgLCBjb250YWlucyAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucycpXG5cbiAgLCBkO1xuXG5kID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZHNjciwgdmFsdWUvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBjLCBlLCB3LCBvcHRpb25zLCBkZXNjO1xuXHRpZiAoKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB8fCAodHlwZW9mIGRzY3IgIT09ICdzdHJpbmcnKSkge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHcgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ3cnKTtcblx0fVxuXG5cdGRlc2MgPSB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlLCB3cml0YWJsZTogdyB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcblxuZC5ncyA9IGZ1bmN0aW9uIChkc2NyLCBnZXQsIHNldC8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IGdldDtcblx0XHRnZXQgPSBkc2NyO1xuXHRcdGRzY3IgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbM107XG5cdH1cblx0aWYgKGdldCA9PSBudWxsKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKGdldCkpIHtcblx0XHRvcHRpb25zID0gZ2V0O1xuXHRcdGdldCA9IHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChzZXQgPT0gbnVsbCkge1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICghaXNDYWxsYWJsZShzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGRzY3IgPT0gbnVsbCkge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdH1cblxuXHRkZXNjID0geyBnZXQ6IGdldCwgc2V0OiBzZXQsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvUG9zSW50ID0gcmVxdWlyZSgnLi4vLi4vbnVtYmVyL3RvLXBvcy1pbnRlZ2VyJylcbiAgLCB2YWx1ZSAgICA9IHJlcXVpcmUoJy4uLy4uL29iamVjdC92YWxpZC12YWx1ZScpXG5cbiAgLCBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2ZcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBhYnMgPSBNYXRoLmFicywgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50LyosIGZyb21JbmRleCovKSB7XG5cdHZhciBpLCBsLCBmcm9tSW5kZXgsIHZhbDtcblx0aWYgKHNlYXJjaEVsZW1lbnQgPT09IHNlYXJjaEVsZW1lbnQpIHsgLy9qc2xpbnQ6IGlnbm9yZVxuXHRcdHJldHVybiBpbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH1cblxuXHRsID0gdG9Qb3NJbnQodmFsdWUodGhpcykubGVuZ3RoKTtcblx0ZnJvbUluZGV4ID0gYXJndW1lbnRzWzFdO1xuXHRpZiAoaXNOYU4oZnJvbUluZGV4KSkgZnJvbUluZGV4ID0gMDtcblx0ZWxzZSBpZiAoZnJvbUluZGV4ID49IDApIGZyb21JbmRleCA9IGZsb29yKGZyb21JbmRleCk7XG5cdGVsc2UgZnJvbUluZGV4ID0gdG9Qb3NJbnQodGhpcy5sZW5ndGgpIC0gZmxvb3IoYWJzKGZyb21JbmRleCkpO1xuXG5cdGZvciAoaSA9IGZyb21JbmRleDsgaSA8IGw7ICsraSkge1xuXHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGkpKSB7XG5cdFx0XHR2YWwgPSB0aGlzW2ldO1xuXHRcdFx0aWYgKHZhbCAhPT0gdmFsKSByZXR1cm4gaTsgLy9qc2xpbnQ6IGlnbm9yZVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpXG5cdD8gQXJyYXkuZnJvbVxuXHQ6IHJlcXVpcmUoJy4vc2hpbScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGZyb20gPSBBcnJheS5mcm9tLCBhcnIsIHJlc3VsdDtcblx0aWYgKHR5cGVvZiBmcm9tICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGFyciA9IFsncmF6JywgJ2R3YSddO1xuXHRyZXN1bHQgPSBmcm9tKGFycik7XG5cdHJldHVybiBCb29sZWFuKHJlc3VsdCAmJiAocmVzdWx0ICE9PSBhcnIpICYmIChyZXN1bHRbMV0gPT09ICdkd2EnKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXRlcmF0b3JTeW1ib2wgPSByZXF1aXJlKCdlczYtc3ltYm9sJykuaXRlcmF0b3JcbiAgLCBpc0FyZ3VtZW50cyAgICA9IHJlcXVpcmUoJy4uLy4uL2Z1bmN0aW9uL2lzLWFyZ3VtZW50cycpXG4gICwgaXNGdW5jdGlvbiAgICAgPSByZXF1aXJlKCcuLi8uLi9mdW5jdGlvbi9pcy1mdW5jdGlvbicpXG4gICwgdG9Qb3NJbnQgICAgICAgPSByZXF1aXJlKCcuLi8uLi9udW1iZXIvdG8tcG9zLWludGVnZXInKVxuICAsIGNhbGxhYmxlICAgICAgID0gcmVxdWlyZSgnLi4vLi4vb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcbiAgLCB2YWxpZFZhbHVlICAgICA9IHJlcXVpcmUoJy4uLy4uL29iamVjdC92YWxpZC12YWx1ZScpXG4gICwgaXNTdHJpbmcgICAgICAgPSByZXF1aXJlKCcuLi8uLi9zdHJpbmcvaXMtc3RyaW5nJylcblxuICAsIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBkZXNjID0geyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogbnVsbCB9XG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyovKSB7XG5cdHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXSwgdGhpc0FyZyA9IGFyZ3VtZW50c1syXSwgQ29uc3RydWN0b3IsIGksIGosIGFyciwgbCwgY29kZSwgaXRlcmF0b3Jcblx0ICAsIHJlc3VsdCwgZ2V0SXRlcmF0b3IsIHZhbHVlO1xuXG5cdGFycmF5TGlrZSA9IE9iamVjdCh2YWxpZFZhbHVlKGFycmF5TGlrZSkpO1xuXG5cdGlmIChtYXBGbiAhPSBudWxsKSBjYWxsYWJsZShtYXBGbik7XG5cdGlmICghdGhpcyB8fCAodGhpcyA9PT0gQXJyYXkpIHx8ICFpc0Z1bmN0aW9uKHRoaXMpKSB7XG5cdFx0Ly8gUmVzdWx0OiBQbGFpbiBhcnJheVxuXHRcdGlmICghbWFwRm4pIHtcblx0XHRcdGlmIChpc0FyZ3VtZW50cyhhcnJheUxpa2UpKSB7XG5cdFx0XHRcdC8vIFNvdXJjZTogQXJndW1lbnRzXG5cdFx0XHRcdGwgPSBhcnJheUxpa2UubGVuZ3RoO1xuXHRcdFx0XHRpZiAobCAhPT0gMSkgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIGFycmF5TGlrZSk7XG5cdFx0XHRcdGFyciA9IG5ldyBBcnJheSgxKTtcblx0XHRcdFx0YXJyWzBdID0gYXJyYXlMaWtlWzBdO1xuXHRcdFx0XHRyZXR1cm4gYXJyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzQXJyYXkoYXJyYXlMaWtlKSkge1xuXHRcdFx0XHQvLyBTb3VyY2U6IEFycmF5XG5cdFx0XHRcdGFyciA9IG5ldyBBcnJheShsID0gYXJyYXlMaWtlLmxlbmd0aCk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIGFycltpXSA9IGFycmF5TGlrZVtpXTtcblx0XHRcdFx0cmV0dXJuIGFycjtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXJyID0gW107XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUmVzdWx0OiBOb24gcGxhaW4gYXJyYXlcblx0XHRDb25zdHJ1Y3RvciA9IHRoaXM7XG5cdH1cblxuXHRpZiAoIWlzQXJyYXkoYXJyYXlMaWtlKSkge1xuXHRcdGlmICgoZ2V0SXRlcmF0b3IgPSBhcnJheUxpa2VbaXRlcmF0b3JTeW1ib2xdKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBTb3VyY2U6IEl0ZXJhdG9yXG5cdFx0XHRpdGVyYXRvciA9IGNhbGxhYmxlKGdldEl0ZXJhdG9yKS5jYWxsKGFycmF5TGlrZSk7XG5cdFx0XHRpZiAoQ29uc3RydWN0b3IpIGFyciA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuXHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0aSA9IDA7XG5cdFx0XHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgaSkgOiByZXN1bHQudmFsdWU7XG5cdFx0XHRcdGlmICghQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRhcnJbaV0gPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZXNjLnZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdFx0ZGVmaW5lUHJvcGVydHkoYXJyLCBpLCBkZXNjKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdCsraTtcblx0XHRcdH1cblx0XHRcdGwgPSBpO1xuXHRcdH0gZWxzZSBpZiAoaXNTdHJpbmcoYXJyYXlMaWtlKSkge1xuXHRcdFx0Ly8gU291cmNlOiBTdHJpbmdcblx0XHRcdGwgPSBhcnJheUxpa2UubGVuZ3RoO1xuXHRcdFx0aWYgKENvbnN0cnVjdG9yKSBhcnIgPSBuZXcgQ29uc3RydWN0b3IoKTtcblx0XHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgKytpKSB7XG5cdFx0XHRcdHZhbHVlID0gYXJyYXlMaWtlW2ldO1xuXHRcdFx0XHRpZiAoKGkgKyAxKSA8IGwpIHtcblx0XHRcdFx0XHRjb2RlID0gdmFsdWUuY2hhckNvZGVBdCgwKTtcblx0XHRcdFx0XHRpZiAoKGNvZGUgPj0gMHhEODAwKSAmJiAoY29kZSA8PSAweERCRkYpKSB2YWx1ZSArPSBhcnJheUxpa2VbKytpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZSA9IG1hcEZuID8gY2FsbC5jYWxsKG1hcEZuLCB0aGlzQXJnLCB2YWx1ZSwgaikgOiB2YWx1ZTtcblx0XHRcdFx0aWYgKCFDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGFycltqXSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGosIGRlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsrajtcblx0XHRcdH1cblx0XHRcdGwgPSBqO1xuXHRcdH1cblx0fVxuXHRpZiAobCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gU291cmNlOiBhcnJheSBvciBhcnJheS1saWtlXG5cdFx0bCA9IHRvUG9zSW50KGFycmF5TGlrZS5sZW5ndGgpO1xuXHRcdGlmIChDb25zdHJ1Y3RvcikgYXJyID0gbmV3IENvbnN0cnVjdG9yKGwpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcblx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIGFycmF5TGlrZVtpXSwgaSkgOiBhcnJheUxpa2VbaV07XG5cdFx0XHRpZiAoIUNvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdGFycltpXSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGksIGRlc2MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoQ29uc3RydWN0b3IpIHtcblx0XHRkZXNjLnZhbHVlID0gbnVsbDtcblx0XHRhcnIubGVuZ3RoID0gbDtcblx0fVxuXHRyZXR1cm4gYXJyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZyb20gPSByZXF1aXJlKCcuL2Zyb20nKVxuXG4gICwgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5TGlrZSkge1xuXHRyZXR1cm4gaXNBcnJheShhcnJheUxpa2UpID8gYXJyYXlMaWtlIDogZnJvbShhcnJheUxpa2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL29iamVjdC9hc3NpZ24nKVxuXG4gICwgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UvKiwgY29kZSwgZXh0Ki8pIHtcblx0dmFyIGVyciA9IG5ldyBFcnJvcigpLCBjb2RlID0gYXJndW1lbnRzWzFdLCBleHQgPSBhcmd1bWVudHNbMl07XG5cdGlmIChleHQgPT0gbnVsbCkge1xuXHRcdGlmIChjb2RlICYmICh0eXBlb2YgY29kZSA9PT0gJ29iamVjdCcpKSB7XG5cdFx0XHRleHQgPSBjb2RlO1xuXHRcdFx0Y29kZSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlmIChleHQgIT0gbnVsbCkgYXNzaWduKGVyciwgZXh0KTtcblx0ZXJyLm1lc3NhZ2UgPSBTdHJpbmcobWVzc2FnZSk7XG5cdGlmIChjb2RlICE9IG51bGwpIGVyci5jb2RlID0gU3RyaW5nKGNvZGUpO1xuXHRpZiAoY2FwdHVyZVN0YWNrVHJhY2UpIGNhcHR1cmVTdGFja1RyYWNlKGVyciwgZXhwb3J0cyk7XG5cdHJldHVybiBlcnI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9Qb3NJbnQgPSByZXF1aXJlKCcuLi9udW1iZXIvdG8tcG9zLWludGVnZXInKVxuXG4gICwgdGVzdCA9IGZ1bmN0aW9uIChhLCBiKSB7fSwgZGVzYywgZGVmaW5lUHJvcGVydHlcbiAgLCBnZW5lcmF0ZSwgbWl4aW47XG5cbnRyeSB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0ZXN0LCAnbGVuZ3RoJywgeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IDEgfSk7XG59IGNhdGNoIChpZ25vcmUpIHt9XG5cbmlmICh0ZXN0Lmxlbmd0aCA9PT0gMSkge1xuXHQvLyBFUzZcblx0ZGVzYyA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogZmFsc2UsIGVudW1lcmFibGU6IGZhbHNlIH07XG5cdGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgbGVuZ3RoKSB7XG5cdFx0bGVuZ3RoID0gdG9Qb3NJbnQobGVuZ3RoKTtcblx0XHRpZiAoZm4ubGVuZ3RoID09PSBsZW5ndGgpIHJldHVybiBmbjtcblx0XHRkZXNjLnZhbHVlID0gbGVuZ3RoO1xuXHRcdHJldHVybiBkZWZpbmVQcm9wZXJ0eShmbiwgJ2xlbmd0aCcsIGRlc2MpO1xuXHR9O1xufSBlbHNlIHtcblx0bWl4aW4gPSByZXF1aXJlKCcuLi9vYmplY3QvbWl4aW4nKTtcblx0Z2VuZXJhdGUgPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjYWNoZSA9IFtdO1xuXHRcdHJldHVybiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGFyZ3MsIGkgPSAwO1xuXHRcdFx0aWYgKGNhY2hlW2xdKSByZXR1cm4gY2FjaGVbbF07XG5cdFx0XHRhcmdzID0gW107XG5cdFx0XHR3aGlsZSAobC0tKSBhcmdzLnB1c2goJ2EnICsgKCsraSkudG9TdHJpbmcoMzYpKTtcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oJ2ZuJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3Muam9pbignLCAnKSArXG5cdFx0XHRcdCcpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07Jyk7XG5cdFx0fTtcblx0fSgpKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3JjLCBsZW5ndGgpIHtcblx0XHR2YXIgdGFyZ2V0O1xuXHRcdGxlbmd0aCA9IHRvUG9zSW50KGxlbmd0aCk7XG5cdFx0aWYgKHNyYy5sZW5ndGggPT09IGxlbmd0aCkgcmV0dXJuIHNyYztcblx0XHR0YXJnZXQgPSBnZW5lcmF0ZShsZW5ndGgpKHNyYyk7XG5cdFx0dHJ5IHsgbWl4aW4odGFyZ2V0LCBzcmMpOyB9IGNhdGNoIChpZ25vcmUpIHt9XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4gICwgaWQgPSB0b1N0cmluZy5jYWxsKChmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiAodG9TdHJpbmcuY2FsbCh4KSA9PT0gaWQpOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbiAgLCBpZCA9IHRvU3RyaW5nLmNhbGwocmVxdWlyZSgnLi9ub29wJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmKSB7XG5cdHJldHVybiAodHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIikgJiYgKHRvU3RyaW5nLmNhbGwoZikgPT09IGlkKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge307XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKClcblx0PyBNYXRoLnNpZ25cblx0OiByZXF1aXJlKCcuL3NoaW0nKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzaWduID0gTWF0aC5zaWduO1xuXHRpZiAodHlwZW9mIHNpZ24gIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuICgoc2lnbigxMCkgPT09IDEpICYmIChzaWduKC0yMCkgPT09IC0xKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdGlmIChpc05hTih2YWx1ZSkgfHwgKHZhbHVlID09PSAwKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4gKHZhbHVlID4gMCkgPyAxIDogLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpID8gU3ltYm9sIDogcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHN5bWJvbDtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0c3ltYm9sID0gU3ltYm9sKCd0ZXN0IHN5bWJvbCcpO1xuXHR0cnkgeyBTdHJpbmcoc3ltYm9sKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSByZXR1cm4gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gJ3RydWUnIGZvciBwb2x5ZmlsbHNcblx0aWYgKHR5cGVvZiBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBTeW1ib2wudG9QcmltaXRpdmUgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIFN5bWJvbC51bnNjb3BhYmxlcyAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuICh4ICYmICgodHlwZW9mIHggPT09ICdzeW1ib2wnKSB8fCAoeFsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykpKSB8fCBmYWxzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIHZhbGlkYXRlU3ltYm9sID0gcmVxdWlyZSgnLi92YWxpZGF0ZS1zeW1ib2wnKVxuXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksIG9ialByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGVcbiAgLCBTeW1ib2wsIEhpZGRlblN5bWJvbCwgZ2xvYmFsU3ltYm9scyA9IGNyZWF0ZShudWxsKTtcblxudmFyIGdlbmVyYXRlTmFtZSA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBjcmVhdGVkID0gY3JlYXRlKG51bGwpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRlc2MpIHtcblx0XHR2YXIgcG9zdGZpeCA9IDAsIG5hbWU7XG5cdFx0d2hpbGUgKGNyZWF0ZWRbZGVzYyArIChwb3N0Zml4IHx8ICcnKV0pICsrcG9zdGZpeDtcblx0XHRkZXNjICs9IChwb3N0Zml4IHx8ICcnKTtcblx0XHRjcmVhdGVkW2Rlc2NdID0gdHJ1ZTtcblx0XHRuYW1lID0gJ0BAJyArIGRlc2M7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqUHJvdG90eXBlLCBuYW1lLCBkLmdzKG51bGwsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0ZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwgZCh2YWx1ZSkpO1xuXHRcdH0pKTtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcbn0oKSk7XG5cbkhpZGRlblN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbChkZXNjcmlwdGlvbikge1xuXHRpZiAodGhpcyBpbnN0YW5jZW9mIEhpZGRlblN5bWJvbCkgdGhyb3cgbmV3IFR5cGVFcnJvcignVHlwZUVycm9yOiBTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0cmV0dXJuIFN5bWJvbChkZXNjcmlwdGlvbik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pIHtcblx0dmFyIHN5bWJvbDtcblx0aWYgKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1R5cGVFcnJvcjogU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG5cdHN5bWJvbCA9IGNyZWF0ZShIaWRkZW5TeW1ib2wucHJvdG90eXBlKTtcblx0ZGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKGRlc2NyaXB0aW9uKSk7XG5cdHJldHVybiBkZWZpbmVQcm9wZXJ0aWVzKHN5bWJvbCwge1xuXHRcdF9fZGVzY3JpcHRpb25fXzogZCgnJywgZGVzY3JpcHRpb24pLFxuXHRcdF9fbmFtZV9fOiBkKCcnLCBnZW5lcmF0ZU5hbWUoZGVzY3JpcHRpb24pKVxuXHR9KTtcbn07XG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbCwge1xuXHRmb3I6IGQoZnVuY3Rpb24gKGtleSkge1xuXHRcdGlmIChnbG9iYWxTeW1ib2xzW2tleV0pIHJldHVybiBnbG9iYWxTeW1ib2xzW2tleV07XG5cdFx0cmV0dXJuIChnbG9iYWxTeW1ib2xzW2tleV0gPSBTeW1ib2woU3RyaW5nKGtleSkpKTtcblx0fSksXG5cdGtleUZvcjogZChmdW5jdGlvbiAocykge1xuXHRcdHZhciBrZXk7XG5cdFx0dmFsaWRhdGVTeW1ib2wocyk7XG5cdFx0Zm9yIChrZXkgaW4gZ2xvYmFsU3ltYm9scykgaWYgKGdsb2JhbFN5bWJvbHNba2V5XSA9PT0gcykgcmV0dXJuIGtleTtcblx0fSksXG5cdGhhc0luc3RhbmNlOiBkKCcnLCBTeW1ib2woJ2hhc0luc3RhbmNlJykpLFxuXHRpc0NvbmNhdFNwcmVhZGFibGU6IGQoJycsIFN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJykpLFxuXHRpdGVyYXRvcjogZCgnJywgU3ltYm9sKCdpdGVyYXRvcicpKSxcblx0bWF0Y2g6IGQoJycsIFN5bWJvbCgnbWF0Y2gnKSksXG5cdHJlcGxhY2U6IGQoJycsIFN5bWJvbCgncmVwbGFjZScpKSxcblx0c2VhcmNoOiBkKCcnLCBTeW1ib2woJ3NlYXJjaCcpKSxcblx0c3BlY2llczogZCgnJywgU3ltYm9sKCdzcGVjaWVzJykpLFxuXHRzcGxpdDogZCgnJywgU3ltYm9sKCdzcGxpdCcpKSxcblx0dG9QcmltaXRpdmU6IGQoJycsIFN5bWJvbCgndG9QcmltaXRpdmUnKSksXG5cdHRvU3RyaW5nVGFnOiBkKCcnLCBTeW1ib2woJ3RvU3RyaW5nVGFnJykpLFxuXHR1bnNjb3BhYmxlczogZCgnJywgU3ltYm9sKCd1bnNjb3BhYmxlcycpKVxufSk7XG5kZWZpbmVQcm9wZXJ0aWVzKEhpZGRlblN5bWJvbC5wcm90b3R5cGUsIHtcblx0Y29uc3RydWN0b3I6IGQoU3ltYm9sKSxcblx0dG9TdHJpbmc6IGQoJycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX19uYW1lX187IH0pXG59KTtcblxuZGVmaW5lUHJvcGVydGllcyhTeW1ib2wucHJvdG90eXBlLCB7XG5cdHRvU3RyaW5nOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuICdTeW1ib2wgKCcgKyB2YWxpZGF0ZVN5bWJvbCh0aGlzKS5fX2Rlc2NyaXB0aW9uX18gKyAnKSc7IH0pLFxuXHR2YWx1ZU9mOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlU3ltYm9sKHRoaXMpOyB9KVxufSk7XG5kZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCBTeW1ib2wudG9QcmltaXRpdmUsIGQoJycsXG5cdGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlU3ltYm9sKHRoaXMpOyB9KSk7XG5kZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIGQoJ2MnLCAnU3ltYm9sJykpO1xuXG5kZWZpbmVQcm9wZXJ0eShIaWRkZW5TeW1ib2wucHJvdG90eXBlLCBTeW1ib2wudG9QcmltaXRpdmUsXG5cdGQoJ2MnLCBTeW1ib2wucHJvdG90eXBlW1N5bWJvbC50b1ByaW1pdGl2ZV0pKTtcbmRlZmluZVByb3BlcnR5KEhpZGRlblN5bWJvbC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZyxcblx0ZCgnYycsIFN5bWJvbC5wcm90b3R5cGVbU3ltYm9sLnRvU3RyaW5nVGFnXSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzU3ltYm9sKHZhbHVlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcih2YWx1ZSArIFwiIGlzIG5vdCBhIHN5bWJvbFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuLi9tYXRoL3NpZ24nKVxuXG4gICwgYWJzID0gTWF0aC5hYnMsIGZsb29yID0gTWF0aC5mbG9vcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKGlzTmFOKHZhbHVlKSkgcmV0dXJuIDA7XG5cdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0aWYgKCh2YWx1ZSA9PT0gMCkgfHwgIWlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4gc2lnbih2YWx1ZSkgKiBmbG9vcihhYnModmFsdWUpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvLWludGVnZXInKVxuXG4gICwgbWF4ID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXgoMCwgdG9JbnRlZ2VyKHZhbHVlKSk7IH07XG4iLCIvLyBJbnRlcm5hbCBtZXRob2QsIHVzZWQgYnkgaXRlcmF0aW9uIGZ1bmN0aW9ucy5cbi8vIENhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2gga2V5LXZhbHVlIHBhaXIgZm91bmQgaW4gb2JqZWN0XG4vLyBPcHRpb25hbGx5IHRha2VzIGNvbXBhcmVGbiB0byBpdGVyYXRlIG9iamVjdCBpbiBzcGVjaWZpYyBvcmRlclxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi9pcy1jYWxsYWJsZScpXG4gICwgY2FsbGFibGUgICA9IHJlcXVpcmUoJy4vdmFsaWQtY2FsbGFibGUnKVxuICAsIHZhbHVlICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkLXZhbHVlJylcblxuICAsIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwga2V5cyA9IE9iamVjdC5rZXlzXG4gICwgcHJvcGVydHlJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QsIGRlZlZhbCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG9iaiwgY2IvKiwgdGhpc0FyZywgY29tcGFyZUZuKi8pIHtcblx0XHR2YXIgbGlzdCwgdGhpc0FyZyA9IGFyZ3VtZW50c1syXSwgY29tcGFyZUZuID0gYXJndW1lbnRzWzNdO1xuXHRcdG9iaiA9IE9iamVjdCh2YWx1ZShvYmopKTtcblx0XHRjYWxsYWJsZShjYik7XG5cblx0XHRsaXN0ID0ga2V5cyhvYmopO1xuXHRcdGlmIChjb21wYXJlRm4pIHtcblx0XHRcdGxpc3Quc29ydChpc0NhbGxhYmxlKGNvbXBhcmVGbikgPyBjb21wYXJlRm4uYmluZChvYmopIDogdW5kZWZpbmVkKTtcblx0XHR9XG5cdFx0cmV0dXJuIGxpc3RbbWV0aG9kXShmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuXHRcdFx0aWYgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwga2V5KSkgcmV0dXJuIGRlZlZhbDtcblx0XHRcdHJldHVybiBjYWxsLmNhbGwoY2IsIHRoaXNBcmcsIG9ialtrZXldLCBrZXksIG9iaiwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2lzLWltcGxlbWVudGVkJykoKVxuXHQ/IE9iamVjdC5hc3NpZ25cblx0OiByZXF1aXJlKCcuL3NoaW0nKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBvYmo7XG5cdGlmICh0eXBlb2YgYXNzaWduICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdG9iaiA9IHsgZm9vOiAncmF6JyB9O1xuXHRhc3NpZ24ob2JqLCB7IGJhcjogJ2R3YScgfSwgeyB0cnp5OiAndHJ6eScgfSk7XG5cdHJldHVybiAob2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSkgPT09ICdyYXpkd2F0cnp5Jztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzICA9IHJlcXVpcmUoJy4uL2tleXMnKVxuICAsIHZhbHVlID0gcmVxdWlyZSgnLi4vdmFsaWQtdmFsdWUnKVxuXG4gICwgbWF4ID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlc3QsIHNyYy8qLCDigKZzcmNuKi8pIHtcblx0dmFyIGVycm9yLCBpLCBsID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHsgZGVzdFtrZXldID0gc3JjW2tleV07IH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsOyArK2kpIHtcblx0XHRzcmMgPSBhcmd1bWVudHNbaV07XG5cdFx0a2V5cyhzcmMpLmZvckVhY2goYXNzaWduKTtcblx0fVxuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgZXJyb3I7XG5cdHJldHVybiBkZXN0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyYXRlJykoJ2ZvckVhY2gnKTtcbiIsIi8vIERlcHJlY2F0ZWRcblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKClcblx0PyBPYmplY3Qua2V5c1xuXHQ6IHJlcXVpcmUoJy4vc2hpbScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dHJ5IHtcblx0XHRPYmplY3Qua2V5cygncHJpbWl0aXZlJyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcblx0cmV0dXJuIGtleXMob2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBPYmplY3Qob2JqZWN0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsdWUgPSByZXF1aXJlKCcuL3ZhbGlkLXZhbHVlJylcblxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxuICAsIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGVycm9yO1xuXHR0YXJnZXQgPSBPYmplY3QodmFsdWUodGFyZ2V0KSk7XG5cdGdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0KHZhbHVlKHNvdXJjZSkpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSkpO1xuXHRcdH0gY2F0Y2ggKGUpIHsgZXJyb3IgPSBlOyB9XG5cdH0pO1xuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgZXJyb3I7XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG52YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIChzcmMsIG9iaikge1xuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBzcmMpIG9ialtrZXldID0gc3JjW2tleV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLyosIOKApm9wdGlvbnMqLykge1xuXHR2YXIgcmVzdWx0ID0gY3JlYXRlKG51bGwpO1xuXHRmb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdGlmIChvcHRpb25zID09IG51bGwpIHJldHVybjtcblx0XHRwcm9jZXNzKE9iamVjdChvcHRpb25zKSwgcmVzdWx0KTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdHJldHVybiBmbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2lzLWltcGxlbWVudGVkJykoKVxuXHQ/IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnNcblx0OiByZXF1aXJlKCcuL3NoaW0nKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0ciA9ICdyYXpkd2F0cnp5JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc3RyLmNvbnRhaW5zICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoKHN0ci5jb250YWlucygnZHdhJykgPT09IHRydWUpICYmIChzdHIuY29udGFpbnMoJ2ZvbycpID09PSBmYWxzZSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbiAgLCBpZCA9IHRvU3RyaW5nLmNhbGwoJycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB8fCAoeCAmJiAodHlwZW9mIHggPT09ICdvYmplY3QnKSAmJlxuXHRcdCgoeCBpbnN0YW5jZW9mIFN0cmluZykgfHwgKHRvU3RyaW5nLmNhbGwoeCkgPT09IGlkKSkpIHx8IGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGQgICAgICAgID0gcmVxdWlyZSgnZCcpXG4gICwgY2FsbGFibGUgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG5cbiAgLCBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSwgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBkZXNjcmlwdG9yID0geyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9XG5cbiAgLCBvbiwgb25jZSwgb2ZmLCBlbWl0LCBtZXRob2RzLCBkZXNjcmlwdG9ycywgYmFzZTtcblxub24gPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIGRhdGE7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHtcblx0XHRkYXRhID0gZGVzY3JpcHRvci52YWx1ZSA9IGNyZWF0ZShudWxsKTtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX19lZV9fJywgZGVzY3JpcHRvcik7XG5cdFx0ZGVzY3JpcHRvci52YWx1ZSA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0ZGF0YSA9IHRoaXMuX19lZV9fO1xuXHR9XG5cdGlmICghZGF0YVt0eXBlXSkgZGF0YVt0eXBlXSA9IGxpc3RlbmVyO1xuXHRlbHNlIGlmICh0eXBlb2YgZGF0YVt0eXBlXSA9PT0gJ29iamVjdCcpIGRhdGFbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdGVsc2UgZGF0YVt0eXBlXSA9IFtkYXRhW3R5cGVdLCBsaXN0ZW5lcl07XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBvbmNlLCBzZWxmO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblx0c2VsZiA9IHRoaXM7XG5cdG9uLmNhbGwodGhpcywgdHlwZSwgb25jZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRvZmYuY2FsbChzZWxmLCB0eXBlLCBvbmNlKTtcblx0XHRhcHBseS5jYWxsKGxpc3RlbmVyLCB0aGlzLCBhcmd1bWVudHMpO1xuXHR9KTtcblxuXHRvbmNlLl9fZWVPbmNlTGlzdGVuZXJfXyA9IGxpc3RlbmVyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YSwgbGlzdGVuZXJzLCBjYW5kaWRhdGUsIGk7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHJldHVybiB0aGlzO1xuXHRkYXRhID0gdGhpcy5fX2VlX187XG5cdGlmICghZGF0YVt0eXBlXSkgcmV0dXJuIHRoaXM7XG5cdGxpc3RlbmVycyA9IGRhdGFbdHlwZV07XG5cblx0aWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yIChpID0gMDsgKGNhbmRpZGF0ZSA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0aWYgKChjYW5kaWRhdGUgPT09IGxpc3RlbmVyKSB8fFxuXHRcdFx0XHRcdChjYW5kaWRhdGUuX19lZU9uY2VMaXN0ZW5lcl9fID09PSBsaXN0ZW5lcikpIHtcblx0XHRcdFx0aWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDIpIGRhdGFbdHlwZV0gPSBsaXN0ZW5lcnNbaSA/IDAgOiAxXTtcblx0XHRcdFx0ZWxzZSBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoKGxpc3RlbmVycyA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdChsaXN0ZW5lcnMuX19lZU9uY2VMaXN0ZW5lcl9fID09PSBsaXN0ZW5lcikpIHtcblx0XHRcdGRlbGV0ZSBkYXRhW3R5cGVdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdHZhciBpLCBsLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBhcmdzO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHJldHVybjtcblx0bGlzdGVuZXJzID0gdGhpcy5fX2VlX19bdHlwZV07XG5cdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cblx0aWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdvYmplY3QnKSB7XG5cdFx0bCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0YXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG5cdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cblx0XHRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcblx0XHRmb3IgKGkgPSAwOyAobGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV0pOyArK2kpIHtcblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3MpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0bCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRcdGZvciAoaSA9IDE7IGkgPCBsOyArK2kpIHtcblx0XHRcdFx0YXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdFx0XHR9XG5cdFx0XHRhcHBseS5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9XG59O1xuXG5tZXRob2RzID0ge1xuXHRvbjogb24sXG5cdG9uY2U6IG9uY2UsXG5cdG9mZjogb2ZmLFxuXHRlbWl0OiBlbWl0XG59O1xuXG5kZXNjcmlwdG9ycyA9IHtcblx0b246IGQob24pLFxuXHRvbmNlOiBkKG9uY2UpLFxuXHRvZmY6IGQob2ZmKSxcblx0ZW1pdDogZChlbWl0KVxufTtcblxuYmFzZSA9IGRlZmluZVByb3BlcnRpZXMoe30sIGRlc2NyaXB0b3JzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24gKG8pIHtcblx0cmV0dXJuIChvID09IG51bGwpID8gY3JlYXRlKGJhc2UpIDogZGVmaW5lUHJvcGVydGllcyhPYmplY3QobyksIGRlc2NyaXB0b3JzKTtcbn07XG5leHBvcnRzLm1ldGhvZHMgPSBtZXRob2RzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9Qb3NJbnQgPSByZXF1aXJlKCdlczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlcicpXG5cbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpbWl0KSB7XG5cdHZhciBzaXplID0gMCwgYmFzZSA9IDEsIHF1ZXVlID0gY3JlYXRlKG51bGwpLCBtYXAgPSBjcmVhdGUobnVsbCksIGluZGV4ID0gMCwgZGVsO1xuXHRsaW1pdCA9IHRvUG9zSW50KGxpbWl0KTtcblx0cmV0dXJuIHtcblx0XHRoaXQ6IGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0dmFyIG9sZEluZGV4ID0gbWFwW2lkXSwgbnVJbmRleCA9ICsraW5kZXg7XG5cdFx0XHRxdWV1ZVtudUluZGV4XSA9IGlkO1xuXHRcdFx0bWFwW2lkXSA9IG51SW5kZXg7XG5cdFx0XHRpZiAoIW9sZEluZGV4KSB7XG5cdFx0XHRcdCsrc2l6ZTtcblx0XHRcdFx0aWYgKHNpemUgPD0gbGltaXQpIHJldHVybjtcblx0XHRcdFx0aWQgPSBxdWV1ZVtiYXNlXTtcblx0XHRcdFx0ZGVsKGlkKTtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHF1ZXVlW29sZEluZGV4XTtcblx0XHRcdGlmIChiYXNlICE9PSBvbGRJbmRleCkgcmV0dXJuO1xuXHRcdFx0d2hpbGUgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHF1ZXVlLCArK2Jhc2UpKSBjb250aW51ZTsgLy9qc2xpbnQ6IHNraXBcblx0XHR9LFxuXHRcdGRlbGV0ZTogZGVsID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbaWRdO1xuXHRcdFx0aWYgKCFvbGRJbmRleCkgcmV0dXJuO1xuXHRcdFx0ZGVsZXRlIHF1ZXVlW29sZEluZGV4XTtcblx0XHRcdGRlbGV0ZSBtYXBbaWRdO1xuXHRcdFx0LS1zaXplO1xuXHRcdFx0aWYgKGJhc2UgIT09IG9sZEluZGV4KSByZXR1cm47XG5cdFx0XHRpZiAoIXNpemUpIHtcblx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRiYXNlID0gMTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHF1ZXVlLCArK2Jhc2UpKSBjb250aW51ZTsgLy9qc2xpbnQ6IHNraXBcblx0XHR9LFxuXHRcdGNsZWFyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzaXplID0gMDtcblx0XHRcdGJhc2UgPSAxO1xuXHRcdFx0cXVldWUgPSBjcmVhdGUobnVsbCk7XG5cdFx0XHRtYXAgPSBjcmVhdGUobnVsbCk7XG5cdFx0XHRpbmRleCA9IDA7XG5cdFx0fVxuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxhYmxlLCBieU9ic2VydmVyO1xuXG5jYWxsYWJsZSA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdHJldHVybiBmbjtcbn07XG5cbmJ5T2JzZXJ2ZXIgPSBmdW5jdGlvbiAoT2JzZXJ2ZXIpIHtcblx0dmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyksIHF1ZXVlLCBpID0gMDtcblx0bmV3IE9ic2VydmVyKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZGF0YTtcblx0XHRpZiAoIXF1ZXVlKSByZXR1cm47XG5cdFx0ZGF0YSA9IHF1ZXVlO1xuXHRcdHF1ZXVlID0gbnVsbDtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGRhdGEoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyBmbigpOyB9KTtcblx0fSkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cdHJldHVybiBmdW5jdGlvbiAoZm4pIHtcblx0XHRjYWxsYWJsZShmbik7XG5cdFx0aWYgKHF1ZXVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXVlID09PSAnZnVuY3Rpb24nKSBxdWV1ZSA9IFtxdWV1ZSwgZm5dO1xuXHRcdFx0ZWxzZSBxdWV1ZS5wdXNoKGZuKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cXVldWUgPSBmbjtcblx0XHRub2RlLmRhdGEgPSAoaSA9ICsraSAlIDIpO1xuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuXHQvLyBOb2RlLmpzXG5cdGlmICgodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSAmJiBwcm9jZXNzICYmXG5cdFx0XHQodHlwZW9mIHByb2Nlc3MubmV4dFRpY2sgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0cmV0dXJuIHByb2Nlc3MubmV4dFRpY2s7XG5cdH1cblxuXHQvLyBNdXRhdGlvbk9ic2VydmVyPVxuXHRpZiAoKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcpICYmIGRvY3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gYnlPYnNlcnZlcihNdXRhdGlvbk9ic2VydmVyKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBXZWJLaXRNdXRhdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gYnlPYnNlcnZlcihXZWJLaXRNdXRhdGlvbk9ic2VydmVyKTtcblx0XHR9XG5cdH1cblxuXHQvLyBXM0MgRHJhZnRcblx0Ly8gaHR0cDovL2R2Y3MudzMub3JnL2hnL3dlYnBlcmYvcmF3LWZpbGUvdGlwL3NwZWNzL3NldEltbWVkaWF0ZS9PdmVydmlldy5odG1sXG5cdGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChjYikgeyBzZXRJbW1lZGlhdGUoY2FsbGFibGUoY2IpKTsgfTtcblx0fVxuXG5cdC8vIFdpZGUgYXZhaWxhYmxlIHN0YW5kYXJkXG5cdGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoY2IpIHsgc2V0VGltZW91dChjYWxsYWJsZShjYiksIDApOyB9O1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDIxNDc0ODM2NDc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1Bvc0ludCAgID0gcmVxdWlyZSgnZXM1LWV4dC9udW1iZXIvdG8tcG9zLWludGVnZXInKVxuICAsIG1heFRpbWVvdXQgPSByZXF1aXJlKCcuL21heC10aW1lb3V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHZhbHVlID0gdG9Qb3NJbnQodmFsdWUpO1xuXHRpZiAodmFsdWUgPiBtYXhUaW1lb3V0KSB0aHJvdyBuZXcgVHlwZUVycm9yKHZhbHVlICsgXCIgZXhjZWVkcyBtYXhpbXVtIHBvc3NpYmxlIHRpbWVvdXRcIik7XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmRleE9mID0gcmVxdWlyZSgnZXM1LWV4dC9hcnJheS8jL2UtaW5kZXgtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBsYXN0SWQgPSAwLCBhcmdzTWFwID0gW10sIGNhY2hlID0gW107XG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0dmFyIGluZGV4ID0gaW5kZXhPZi5jYWxsKGFyZ3NNYXAsIGFyZ3NbMF0pO1xuXHRcdFx0cmV0dXJuIChpbmRleCA9PT0gLTEpID8gbnVsbCA6IGNhY2hlW2luZGV4XTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdGFyZ3NNYXAucHVzaChhcmdzWzBdKTtcblx0XHRcdGNhY2hlLnB1c2goKytsYXN0SWQpO1xuXHRcdFx0cmV0dXJuIGxhc3RJZDtcblx0XHR9LFxuXHRcdGRlbGV0ZTogZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBpbmRleE9mLmNhbGwoY2FjaGUsIGlkKTtcblx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0YXJnc01hcC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRjYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGFyZ3NNYXAgPSBbXTtcblx0XHRcdGNhY2hlID0gW107XG5cdFx0fVxuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluZGV4T2YgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5LyMvZS1pbmRleC1vZicpXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG5cdHZhciBsYXN0SWQgPSAwLCBtYXAgPSBbW10sIFtdXSwgY2FjaGUgPSBjcmVhdGUobnVsbCk7XG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0dmFyIGluZGV4ID0gMCwgc2V0ID0gbWFwLCBpO1xuXHRcdFx0d2hpbGUgKGluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdGlmIChpID09PSAtMSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdHNldCA9IHNldFsxXVtpXTtcblx0XHRcdFx0KytpbmRleDtcblx0XHRcdH1cblx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRpZiAoaSA9PT0gLTEpIHJldHVybiBudWxsO1xuXHRcdFx0cmV0dXJuIHNldFsxXVtpXSB8fCBudWxsO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0dmFyIGluZGV4ID0gMCwgc2V0ID0gbWFwLCBpO1xuXHRcdFx0d2hpbGUgKGluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0XHRcdGkgPSBzZXRbMF0ucHVzaChhcmdzW2luZGV4XSkgLSAxO1xuXHRcdFx0XHRcdHNldFsxXS5wdXNoKFtbXSwgW11dKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXQgPSBzZXRbMV1baV07XG5cdFx0XHRcdCsraW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdGkgPSBzZXRbMF0ucHVzaChhcmdzW2luZGV4XSkgLSAxO1xuXHRcdFx0fVxuXHRcdFx0c2V0WzFdW2ldID0gKytsYXN0SWQ7XG5cdFx0XHRjYWNoZVtsYXN0SWRdID0gYXJncztcblx0XHRcdHJldHVybiBsYXN0SWQ7XG5cdFx0fSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0dmFyIGluZGV4ID0gMCwgc2V0ID0gbWFwLCBpLCBwYXRoID0gW10sIGFyZ3MgPSBjYWNoZVtpZF07XG5cdFx0XHR3aGlsZSAoaW5kZXggPCAobGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhdGgucHVzaChzZXQsIGkpO1xuXHRcdFx0XHRzZXQgPSBzZXRbMV1baV07XG5cdFx0XHRcdCsraW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlkID0gc2V0WzFdW2ldO1xuXHRcdFx0c2V0WzBdLnNwbGljZShpLCAxKTtcblx0XHRcdHNldFsxXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHR3aGlsZSAoIXNldFswXS5sZW5ndGggJiYgcGF0aC5sZW5ndGgpIHtcblx0XHRcdFx0aSA9IHBhdGgucG9wKCk7XG5cdFx0XHRcdHNldCA9IHBhdGgucG9wKCk7XG5cdFx0XHRcdHNldFswXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHNldFsxXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgY2FjaGVbaWRdO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdG1hcCA9IFtbXSwgW11dO1xuXHRcdFx0Y2FjaGUgPSBjcmVhdGUobnVsbCk7XG5cdFx0fVxuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG5cdGlmICghbGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9O1xuXHR9XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHZhciBpZCA9IFN0cmluZyhhcmdzWzBdKSwgaSA9IDAsIGwgPSBsZW5ndGg7XG5cdFx0d2hpbGUgKC0tbCkgeyBpZCArPSAnXFx1MDAwMScgKyBhcmdzWysraV07IH1cblx0XHRyZXR1cm4gaWQ7XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvIy9lLWluZGV4LW9mJylcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGxhc3RJZCA9IDAsIG1hcCA9IFtdLCBjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGksIGxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuXHRcdFx0aWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldFtsZW5ndGhdIHx8IG51bGw7XG5cdFx0XHRpZiAoKHNldCA9IHNldFtsZW5ndGhdKSkge1xuXHRcdFx0XHR3aGlsZSAoaW5kZXggPCAobGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0XHRcdGlmIChpID09PSAtMSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0c2V0ID0gc2V0WzFdW2ldO1xuXHRcdFx0XHRcdCsraW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHNldFsxXVtpXSB8fCBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGksIGxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuXHRcdFx0aWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzZXRbbGVuZ3RoXSA9ICsrbGFzdElkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFzZXRbbGVuZ3RoXSkge1xuXHRcdFx0XHRcdHNldFtsZW5ndGhdID0gW1tdLCBbXV07XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0ID0gc2V0W2xlbmd0aF07XG5cdFx0XHRcdHdoaWxlIChpbmRleCA8IChsZW5ndGggLSAxKSkge1xuXHRcdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRpID0gc2V0WzBdLnB1c2goYXJnc1tpbmRleF0pIC0gMTtcblx0XHRcdFx0XHRcdHNldFsxXS5wdXNoKFtbXSwgW11dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2V0ID0gc2V0WzFdW2ldO1xuXHRcdFx0XHRcdCsraW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0aSA9IHNldFswXS5wdXNoKGFyZ3NbaW5kZXhdKSAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0WzFdW2ldID0gKytsYXN0SWQ7XG5cdFx0XHR9XG5cdFx0XHRjYWNoZVtsYXN0SWRdID0gYXJncztcblx0XHRcdHJldHVybiBsYXN0SWQ7XG5cdFx0fSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0dmFyIGluZGV4ID0gMCwgc2V0ID0gbWFwLCBpLCBhcmdzID0gY2FjaGVbaWRdLCBsZW5ndGggPSBhcmdzLmxlbmd0aFxuXHRcdFx0ICAsIHBhdGggPSBbXTtcblx0XHRcdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZGVsZXRlIHNldFtsZW5ndGhdO1xuXHRcdFx0fSBlbHNlIGlmICgoc2V0ID0gc2V0W2xlbmd0aF0pKSB7XG5cdFx0XHRcdHdoaWxlIChpbmRleCA8IChsZW5ndGggLSAxKSkge1xuXHRcdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhdGgucHVzaChzZXQsIGkpO1xuXHRcdFx0XHRcdHNldCA9IHNldFsxXVtpXTtcblx0XHRcdFx0XHQrK2luZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZCA9IHNldFsxXVtpXTtcblx0XHRcdFx0c2V0WzBdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0c2V0WzFdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0d2hpbGUgKCFzZXRbMF0ubGVuZ3RoICYmIHBhdGgubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aSA9IHBhdGgucG9wKCk7XG5cdFx0XHRcdFx0c2V0ID0gcGF0aC5wb3AoKTtcblx0XHRcdFx0XHRzZXRbMF0uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHNldFsxXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBjYWNoZVtpZF07XG5cdFx0fSxcblx0XHRjbGVhcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0bWFwID0gW107XG5cdFx0XHRjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0XHR9XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpZCwgaSwgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG5cdGlmICghbGVuZ3RoKSByZXR1cm4gJ1xcdTAwMDInO1xuXHRpZCA9IFN0cmluZyhhcmdzW2kgPSAwXSk7XG5cdHdoaWxlICgtLWxlbmd0aCkgaWQgKz0gJ1xcdTAwMDEnICsgYXJnc1srK2ldO1xuXHRyZXR1cm4gaWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FsbGFibGUgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcbiAgLCBmb3JFYWNoICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvZm9yLWVhY2gnKVxuICAsIGV4dGVuc2lvbnMgICAgPSByZXF1aXJlKCcuL2xpYi9yZWdpc3RlcmVkLWV4dGVuc2lvbnMnKVxuICAsIGNvbmZpZ3VyZSAgICAgPSByZXF1aXJlKCcuL2xpYi9jb25maWd1cmUtbWFwJylcbiAgLCByZXNvbHZlTGVuZ3RoID0gcmVxdWlyZSgnLi9saWIvcmVzb2x2ZS1sZW5ndGgnKVxuXG4gICwgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNlbGYoZm4vKiwgb3B0aW9ucyAqLykge1xuXHR2YXIgb3B0aW9ucywgbGVuZ3RoLCBjb25mO1xuXG5cdGNhbGxhYmxlKGZuKTtcblx0b3B0aW9ucyA9IE9iamVjdChhcmd1bWVudHNbMV0pO1xuXG5cdC8vIERvIG5vdCBtZW1vaXplIGFscmVhZHkgbWVtb2l6ZWQgZnVuY3Rpb25cblx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZm4sICdfX21lbW9pemVkX18nKSAmJiAhb3B0aW9ucy5mb3JjZSkgcmV0dXJuIGZuO1xuXG5cdC8vIFJlc29sdmUgbGVuZ3RoO1xuXHRsZW5ndGggPSByZXNvbHZlTGVuZ3RoKG9wdGlvbnMubGVuZ3RoLCBmbi5sZW5ndGgsIG9wdGlvbnMuYXN5bmMgJiYgZXh0ZW5zaW9ucy5hc3luYyk7XG5cblx0Ly8gQ29uZmlndXJlIGNhY2hlIG1hcFxuXHRjb25mID0gY29uZmlndXJlKGZuLCBsZW5ndGgsIG9wdGlvbnMpO1xuXG5cdC8vIEJpbmQgZXZlbnR1YWwgZXh0ZW5zaW9uc1xuXHRmb3JFYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uIChmbiwgbmFtZSkge1xuXHRcdGlmIChvcHRpb25zW25hbWVdKSBmbihvcHRpb25zW25hbWVdLCBjb25mLCBvcHRpb25zKTtcblx0fSk7XG5cblx0aWYgKHNlbGYuX19wcm9maWxlcl9fKSBzZWxmLl9fcHJvZmlsZXJfXyhjb25mKTtcblxuXHRjb25mLnVwZGF0ZUVudigpO1xuXHRyZXR1cm4gY29uZi5tZW1vaXplZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTaW5nbGVFdmVudCA9IHJlcXVpcmUoJ2dldmFsL3NpbmdsZScpO1xudmFyIE11bHRpcGxlRXZlbnQgPSByZXF1aXJlKCdnZXZhbC9tdWx0aXBsZScpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbi8qXG4gICAgUHJvIHRpcDogRG9uJ3QgcmVxdWlyZSBgbWVyY3VyeWAgaXRzZWxmLlxuICAgICAgcmVxdWlyZSBhbmQgZGVwZW5kIG9uIGFsbCB0aGVzZSBtb2R1bGVzIGRpcmVjdGx5IVxuKi9cbnZhciBtZXJjdXJ5ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gRW50cnlcbiAgICBtYWluOiByZXF1aXJlKCdtYWluLWxvb3AnKSxcbiAgICBhcHA6IGFwcCxcblxuICAgIC8vIEJhc2VcbiAgICBCYXNlRXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2Jhc2UtZXZlbnQnKSxcblxuICAgIC8vIElucHV0XG4gICAgRGVsZWdhdG9yOiByZXF1aXJlKCdkb20tZGVsZWdhdG9yJyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLmNoYW5uZWxzIGluc3RlYWQuXG4gICAgaW5wdXQ6IGlucHV0LFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5jaGFubmVscyBpbnN0ZWFkLlxuICAgIGhhbmRsZXM6IGNoYW5uZWxzLFxuICAgIGNoYW5uZWxzOiBjaGFubmVscyxcbiAgICAvLyBkZXByZWNhdGVkOiB1c2UgaGcuc2VuZCBpbnN0ZWFkLlxuICAgIGV2ZW50OiByZXF1aXJlKCd2YWx1ZS1ldmVudC9ldmVudCcpLFxuICAgIHNlbmQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2V2ZW50JyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLnNlbmRWYWx1ZSBpbnN0ZWFkLlxuICAgIHZhbHVlRXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L3ZhbHVlJyksXG4gICAgc2VuZFZhbHVlOiByZXF1aXJlKCd2YWx1ZS1ldmVudC92YWx1ZScpLFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5zZW5kU3VibWl0IGluc3RlYWQuXG4gICAgc3VibWl0RXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L3N1Ym1pdCcpLFxuICAgIHNlbmRTdWJtaXQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L3N1Ym1pdCcpLFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5zZW5kQ2hhbmdlIGluc3RlYWQuXG4gICAgY2hhbmdlRXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2NoYW5nZScpLFxuICAgIHNlbmRDaGFuZ2U6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2NoYW5nZScpLFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5zZW5kS2V5IGluc3RlYWQuXG4gICAga2V5RXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2tleScpLFxuICAgIHNlbmRLZXk6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2tleScpLFxuICAgIC8vIGRlcHJlY2F0ZWQgdXNlIGhnLnNlbmRDbGljayBpbnN0ZWFkLlxuICAgIGNsaWNrRXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2NsaWNrJyksXG4gICAgc2VuZENsaWNrOiByZXF1aXJlKCd2YWx1ZS1ldmVudC9jbGljaycpLFxuXG4gICAgLy8gU3RhdGVcbiAgICAvLyByZW1vdmUgZnJvbSBjb3JlOiBmYXZvciBoZy52YXJoYXNoIGluc3RlYWQuXG4gICAgYXJyYXk6IHJlcXVpcmUoJ29ic2Vydi1hcnJheScpLFxuICAgIHN0cnVjdDogcmVxdWlyZSgnb2JzZXJ2LXN0cnVjdCcpLFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5zdHJ1Y3QgaW5zdGVhZC5cbiAgICBoYXNoOiByZXF1aXJlKCdvYnNlcnYtc3RydWN0JyksXG4gICAgdmFyaGFzaDogcmVxdWlyZSgnb2JzZXJ2LXZhcmhhc2gnKSxcbiAgICB2YWx1ZTogcmVxdWlyZSgnb2JzZXJ2JyksXG4gICAgc3RhdGU6IHN0YXRlLFxuXG4gICAgLy8gUmVuZGVyXG4gICAgZGlmZjogcmVxdWlyZSgndmlydHVhbC1kb20vdnRyZWUvZGlmZicpLFxuICAgIHBhdGNoOiByZXF1aXJlKCd2aXJ0dWFsLWRvbS92ZG9tL3BhdGNoJyksXG4gICAgcGFydGlhbDogcmVxdWlyZSgndmRvbS10aHVuaycpLFxuICAgIGNyZWF0ZTogcmVxdWlyZSgndmlydHVhbC1kb20vdmRvbS9jcmVhdGUtZWxlbWVudCcpLFxuICAgIGg6IHJlcXVpcmUoJ3ZpcnR1YWwtZG9tL3ZpcnR1YWwtaHlwZXJzY3JpcHQnKSxcblxuICAgIC8vIFV0aWxpdGllc1xuICAgIC8vIHJlbW92ZSBmcm9tIGNvcmU6IHJlcXVpcmUgY29tcHV0ZWQgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICBjb21wdXRlZDogcmVxdWlyZSgnb2JzZXJ2L2NvbXB1dGVkJyksXG4gICAgLy8gcmVtb3ZlIGZyb20gY29yZTogcmVxdWlyZSB3YXRjaCBkaXJlY3RseSBpbnN0ZWFkLlxuICAgIHdhdGNoOiByZXF1aXJlKCdvYnNlcnYvd2F0Y2gnKVxufTtcblxuZnVuY3Rpb24gaW5wdXQobmFtZXMpIHtcbiAgICBpZiAoIW5hbWVzKSB7XG4gICAgICAgIHJldHVybiBTaW5nbGVFdmVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBNdWx0aXBsZUV2ZW50KG5hbWVzKTtcbn1cblxuZnVuY3Rpb24gc3RhdGUob2JqKSB7XG4gICAgdmFyIGNvcHkgPSBleHRlbmQob2JqKTtcbiAgICB2YXIgJGNoYW5uZWxzID0gY29weS5jaGFubmVscztcbiAgICB2YXIgJGhhbmRsZXMgPSBjb3B5LmhhbmRsZXM7XG5cbiAgICBpZiAoJGNoYW5uZWxzKSB7XG4gICAgICAgIGNvcHkuY2hhbm5lbHMgPSBtZXJjdXJ5LnZhbHVlKG51bGwpO1xuICAgIH0gZWxzZSBpZiAoJGhhbmRsZXMpIHtcbiAgICAgICAgY29weS5oYW5kbGVzID0gbWVyY3VyeS52YWx1ZShudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2ID0gbWVyY3VyeS5zdHJ1Y3QoY29weSk7XG4gICAgaWYgKCRjaGFubmVscykge1xuICAgICAgICBvYnNlcnYuY2hhbm5lbHMuc2V0KG1lcmN1cnkuY2hhbm5lbHMoJGNoYW5uZWxzLCBvYnNlcnYpKTtcbiAgICB9IGVsc2UgaWYgKCRoYW5kbGVzKSB7XG4gICAgICAgIG9ic2Vydi5oYW5kbGVzLnNldChtZXJjdXJ5LmNoYW5uZWxzKCRoYW5kbGVzLCBvYnNlcnYpKTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic2Vydjtcbn1cblxuZnVuY3Rpb24gY2hhbm5lbHMoZnVuY3MsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZnVuY3MpLnJlZHVjZShjcmVhdGVIYW5kbGUsIHt9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZShhY2MsIG5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZSA9IG1lcmN1cnkuRGVsZWdhdG9yLmFsbG9jYXRlSGFuZGxlKFxuICAgICAgICAgICAgZnVuY3NbbmFtZV0uYmluZChudWxsLCBjb250ZXh0KSk7XG5cbiAgICAgICAgYWNjW25hbWVdID0gaGFuZGxlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXBwKGVsZW0sIG9ic2VydiwgcmVuZGVyLCBvcHRzKSB7XG4gICAgbWVyY3VyeS5EZWxlZ2F0b3Iob3B0cyk7XG4gICAgdmFyIGxvb3AgPSBtZXJjdXJ5Lm1haW4ob2JzZXJ2KCksIHJlbmRlciwgZXh0ZW5kKHtcbiAgICAgICAgZGlmZjogbWVyY3VyeS5kaWZmLFxuICAgICAgICBjcmVhdGU6IG1lcmN1cnkuY3JlYXRlLFxuICAgICAgICBwYXRjaDogbWVyY3VyeS5wYXRjaFxuICAgIH0sIG9wdHMpKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGxvb3AudGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic2Vydihsb29wLnVwZGF0ZSk7XG59XG4iLCJ2YXIgRXZTdG9yZSA9IHJlcXVpcmUoXCJldi1zdG9yZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEV2ZW50XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgIHZhciBldmVudHMgPSBFdlN0b3JlKHRhcmdldClcbiAgICB2YXIgZXZlbnQgPSBldmVudHNbdHlwZV1cblxuICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgZXZlbnRzW3R5cGVdID0gaGFuZGxlclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4T2YoaGFuZGxlcikgPT09IC0xKSB7XG4gICAgICAgICAgICBldmVudC5wdXNoKGhhbmRsZXIpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50ICE9PSBoYW5kbGVyKSB7XG4gICAgICAgIGV2ZW50c1t0eXBlXSA9IFtldmVudCwgaGFuZGxlcl1cbiAgICB9XG59XG4iLCJ2YXIgZ2xvYmFsRG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgRXZTdG9yZSA9IHJlcXVpcmUoXCJldi1zdG9yZVwiKVxudmFyIGNyZWF0ZVN0b3JlID0gcmVxdWlyZShcIndlYWttYXAtc2hpbS9jcmVhdGUtc3RvcmVcIilcblxudmFyIGFkZEV2ZW50ID0gcmVxdWlyZShcIi4vYWRkLWV2ZW50LmpzXCIpXG52YXIgcmVtb3ZlRXZlbnQgPSByZXF1aXJlKFwiLi9yZW1vdmUtZXZlbnQuanNcIilcbnZhciBQcm94eUV2ZW50ID0gcmVxdWlyZShcIi4vcHJveHktZXZlbnQuanNcIilcblxudmFyIEhBTkRMRVJfU1RPUkUgPSBjcmVhdGVTdG9yZSgpXG5cbm1vZHVsZS5leHBvcnRzID0gRE9NRGVsZWdhdG9yXG5cbmZ1bmN0aW9uIERPTURlbGVnYXRvcihkb2N1bWVudCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBET01EZWxlZ2F0b3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NRGVsZWdhdG9yKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IGdsb2JhbERvY3VtZW50XG5cbiAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgICB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzID0ge31cbiAgICB0aGlzLmdsb2JhbExpc3RlbmVycyA9IHt9XG59XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50XG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudFxuXG5ET01EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGUgPVxuICAgIGZ1bmN0aW9uIGFsbG9jYXRlSGFuZGxlKGZ1bmMpIHtcbiAgICAgICAgdmFyIGhhbmRsZSA9IG5ldyBIYW5kbGUoKVxuXG4gICAgICAgIEhBTkRMRVJfU1RPUkUoaGFuZGxlKS5mdW5jID0gZnVuYztcblxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgfVxuXG5ET01EZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlID1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1IYW5kbGUoaGFuZGxlLCBicm9hZGNhc3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBIQU5ETEVSX1NUT1JFKGhhbmRsZSkuZnVuY1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG9jYXRlSGFuZGxlKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgYnJvYWRjYXN0KGV2LCBmdW5jKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmluZGV4T2YoZm4pID09PSAtMSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdID0gbGlzdGVuZXJzO1xuICAgIH1cblxuRE9NRGVsZWdhdG9yLnByb3RvdHlwZS5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZ2xvYmFsTGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW107XG5cbiAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoZm4pXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUubGlzdGVuVG8gPSBmdW5jdGlvbiBsaXN0ZW5UbyhldmVudE5hbWUpIHtcbiAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudHMpKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0rKztcblxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdICE9PSAxKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lciA9IHRoaXMucmF3RXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXVxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPVxuICAgICAgICAgICAgY3JlYXRlSGFuZGxlcihldmVudE5hbWUsIHRoaXMpXG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB0cnVlKVxufVxuXG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLnVubGlzdGVuVG8gPSBmdW5jdGlvbiB1bmxpc3RlblRvKGV2ZW50TmFtZSkge1xuICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50cykpIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWxyZWFkeSB1bmxpc3RlbmVkIHRvIGV2ZW50LlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLS07XG5cbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSAhPT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1cblxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9tLWRlbGVnYXRvciN1bmxpc3RlblRvOiBjYW5ub3QgXCIgK1xuICAgICAgICAgICAgXCJ1bmxpc3RlbiB0byBcIiArIGV2ZW50TmFtZSlcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIoZXZlbnROYW1lLCBkZWxlZ2F0b3IpIHtcbiAgICB2YXIgZ2xvYmFsTGlzdGVuZXJzID0gZGVsZWdhdG9yLmdsb2JhbExpc3RlbmVycztcbiAgICB2YXIgZGVsZWdhdG9yVGFyZ2V0ID0gZGVsZWdhdG9yLnRhcmdldDtcblxuICAgIHJldHVybiBoYW5kbGVyXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGV2KSB7XG4gICAgICAgIHZhciBnbG9iYWxIYW5kbGVycyA9IGdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdXG5cbiAgICAgICAgaWYgKGdsb2JhbEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBnbG9iYWxFdmVudCA9IG5ldyBQcm94eUV2ZW50KGV2KTtcbiAgICAgICAgICAgIGdsb2JhbEV2ZW50LmN1cnJlbnRUYXJnZXQgPSBkZWxlZ2F0b3JUYXJnZXQ7XG4gICAgICAgICAgICBjYWxsTGlzdGVuZXJzKGdsb2JhbEhhbmRsZXJzLCBnbG9iYWxFdmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbmRBbmRJbnZva2VMaXN0ZW5lcnMoZXYudGFyZ2V0LCBldiwgZXZlbnROYW1lKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmluZEFuZEludm9rZUxpc3RlbmVycyhlbGVtLCBldiwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gZ2V0TGlzdGVuZXIoZWxlbSwgZXZlbnROYW1lKVxuXG4gICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyRXZlbnQgPSBuZXcgUHJveHlFdmVudChldik7XG4gICAgICAgIGxpc3RlbmVyRXZlbnQuY3VycmVudFRhcmdldCA9IGxpc3RlbmVyLmN1cnJlbnRUYXJnZXRcbiAgICAgICAgY2FsbExpc3RlbmVycyhsaXN0ZW5lci5oYW5kbGVycywgbGlzdGVuZXJFdmVudClcblxuICAgICAgICBpZiAobGlzdGVuZXJFdmVudC5fYnViYmxlcykge1xuICAgICAgICAgICAgdmFyIG5leHRUYXJnZXQgPSBsaXN0ZW5lci5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgIGZpbmRBbmRJbnZva2VMaXN0ZW5lcnMobmV4dFRhcmdldCwgZXYsIGV2ZW50TmFtZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGlzdGVuZXIodGFyZ2V0LCB0eXBlKSB7XG4gICAgLy8gdGVybWluYXRlIHJlY3Vyc2lvbiBpZiBwYXJlbnQgaXMgYG51bGxgXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0eXBlb2YgdGFyZ2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdmFyIGV2ZW50cyA9IEV2U3RvcmUodGFyZ2V0KVxuICAgIC8vIGZldGNoIGxpc3Qgb2YgaGFuZGxlciBmbnMgZm9yIHRoaXMgZXZlbnRcbiAgICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXVxuICAgIHZhciBhbGxIYW5kbGVyID0gZXZlbnRzLmV2ZW50XG5cbiAgICBpZiAoIWhhbmRsZXIgJiYgIWFsbEhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGdldExpc3RlbmVyKHRhcmdldC5wYXJlbnROb2RlLCB0eXBlKVxuICAgIH1cblxuICAgIHZhciBoYW5kbGVycyA9IFtdLmNvbmNhdChoYW5kbGVyIHx8IFtdLCBhbGxIYW5kbGVyIHx8IFtdKVxuICAgIHJldHVybiBuZXcgTGlzdGVuZXIodGFyZ2V0LCBoYW5kbGVycylcbn1cblxuZnVuY3Rpb24gY2FsbExpc3RlbmVycyhoYW5kbGVycywgZXYpIHtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGV2KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuaGFuZGxlRXZlbnQoZXYpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlci50eXBlID09PSBcImRvbS1kZWxlZ2F0b3ItaGFuZGxlXCIpIHtcbiAgICAgICAgICAgIEhBTkRMRVJfU1RPUkUoaGFuZGxlcikuZnVuYyhldilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS1kZWxlZ2F0b3I6IHVua25vd24gaGFuZGxlciBcIiArXG4gICAgICAgICAgICAgICAgXCJmb3VuZDogXCIgKyBKU09OLnN0cmluZ2lmeShoYW5kbGVycykpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gTGlzdGVuZXIodGFyZ2V0LCBoYW5kbGVycykge1xuICAgIHRoaXMuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVyc1xufVxuXG5mdW5jdGlvbiBIYW5kbGUoKSB7XG4gICAgdGhpcy50eXBlID0gXCJkb20tZGVsZWdhdG9yLWhhbmRsZVwiXG59XG4iLCJ2YXIgSW5kaXZpZHVhbCA9IHJlcXVpcmUoXCJpbmRpdmlkdWFsXCIpXG52YXIgY3VpZCA9IHJlcXVpcmUoXCJjdWlkXCIpXG52YXIgZ2xvYmFsRG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG5cbnZhciBET01EZWxlZ2F0b3IgPSByZXF1aXJlKFwiLi9kb20tZGVsZWdhdG9yLmpzXCIpXG5cbnZhciB2ZXJzaW9uS2V5ID0gXCIxM1wiXG52YXIgY2FjaGVLZXkgPSBcIl9fRE9NX0RFTEVHQVRPUl9DQUNIRUBcIiArIHZlcnNpb25LZXlcbnZhciBjYWNoZVRva2VuS2V5ID0gXCJfX0RPTV9ERUxFR0FUT1JfQ0FDSEVfVE9LRU5AXCIgKyB2ZXJzaW9uS2V5XG52YXIgZGVsZWdhdG9yQ2FjaGUgPSBJbmRpdmlkdWFsKGNhY2hlS2V5LCB7XG4gICAgZGVsZWdhdG9yczoge31cbn0pXG52YXIgY29tbW9uRXZlbnRzID0gW1xuICAgIFwiYmx1clwiLCBcImNoYW5nZVwiLCBcImNsaWNrXCIsICBcImNvbnRleHRtZW51XCIsIFwiZGJsY2xpY2tcIixcbiAgICBcImVycm9yXCIsXCJmb2N1c1wiLCBcImZvY3VzaW5cIiwgXCJmb2N1c291dFwiLCBcImlucHV0XCIsIFwia2V5ZG93blwiLFxuICAgIFwia2V5cHJlc3NcIiwgXCJrZXl1cFwiLCBcImxvYWRcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsXG4gICAgXCJyZXNpemVcIiwgXCJzZWxlY3RcIiwgXCJzdWJtaXRcIiwgXCJ0b3VjaGNhbmNlbFwiLFxuICAgIFwidG91Y2hlbmRcIiwgXCJ0b3VjaHN0YXJ0XCIsIFwidW5sb2FkXCJcbl1cblxuLyogIERlbGVnYXRvciBpcyBhIHRoaW4gd3JhcHBlciBhcm91bmQgYSBzaW5nbGV0b24gYERPTURlbGVnYXRvcmBcbiAgICAgICAgaW5zdGFuY2UuXG5cbiAgICBPbmx5IG9uZSBET01EZWxlZ2F0b3Igc2hvdWxkIGV4aXN0IGJlY2F1c2Ugd2UgZG8gbm90IHdhbnRcbiAgICAgICAgZHVwbGljYXRlIGV2ZW50IGxpc3RlbmVycyBib3VuZCB0byB0aGUgRE9NLlxuXG4gICAgYERlbGVnYXRvcmAgd2lsbCBhbHNvIGBsaXN0ZW5UbygpYCBhbGwgZXZlbnRzIHVubGVzc1xuICAgICAgICBldmVyeSBjYWxsZXIgb3B0cyBvdXQgb2YgaXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IERlbGVnYXRvclxuXG5mdW5jdGlvbiBEZWxlZ2F0b3Iob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGRvY3VtZW50ID0gb3B0cy5kb2N1bWVudCB8fCBnbG9iYWxEb2N1bWVudFxuXG4gICAgdmFyIGNhY2hlS2V5ID0gZG9jdW1lbnRbY2FjaGVUb2tlbktleV1cblxuICAgIGlmICghY2FjaGVLZXkpIHtcbiAgICAgICAgY2FjaGVLZXkgPVxuICAgICAgICAgICAgZG9jdW1lbnRbY2FjaGVUb2tlbktleV0gPSBjdWlkKClcbiAgICB9XG5cbiAgICB2YXIgZGVsZWdhdG9yID0gZGVsZWdhdG9yQ2FjaGUuZGVsZWdhdG9yc1tjYWNoZUtleV1cblxuICAgIGlmICghZGVsZWdhdG9yKSB7XG4gICAgICAgIGRlbGVnYXRvciA9IGRlbGVnYXRvckNhY2hlLmRlbGVnYXRvcnNbY2FjaGVLZXldID1cbiAgICAgICAgICAgIG5ldyBET01EZWxlZ2F0b3IoZG9jdW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVmYXVsdEV2ZW50cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21tb25FdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlbGVnYXRvci5saXN0ZW5Ubyhjb21tb25FdmVudHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZWdhdG9yXG59XG5cbkRlbGVnYXRvci5hbGxvY2F0ZUhhbmRsZSA9IERPTURlbGVnYXRvci5hbGxvY2F0ZUhhbmRsZTtcbkRlbGVnYXRvci50cmFuc2Zvcm1IYW5kbGUgPSBET01EZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlO1xuIiwiLyoqXG4gKiBjdWlkLmpzXG4gKiBDb2xsaXNpb24tcmVzaXN0YW50IFVJRCBnZW5lcmF0b3IgZm9yIGJyb3dzZXJzIGFuZCBub2RlLlxuICogU2VxdWVudGlhbCBmb3IgZmFzdCBkYiBsb29rdXBzIGFuZCByZWNlbmN5IHNvcnRpbmcuXG4gKiBTYWZlIGZvciBlbGVtZW50IElEcyBhbmQgc2VydmVyLXNpZGUgbG9va3Vwcy5cbiAqXG4gKiBFeHRyYWN0ZWQgZnJvbSBDTENUUlxuICogXG4gKiBDb3B5cmlnaHQgKGMpIEVyaWMgRWxsaW90dCAyMDEyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qZ2xvYmFsIHdpbmRvdywgbmF2aWdhdG9yLCBkb2N1bWVudCwgcmVxdWlyZSwgcHJvY2VzcywgbW9kdWxlICovXG4oZnVuY3Rpb24gKGFwcCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBuYW1lc3BhY2UgPSAnY3VpZCcsXG4gICAgYyA9IDAsXG4gICAgYmxvY2tTaXplID0gNCxcbiAgICBiYXNlID0gMzYsXG4gICAgZGlzY3JldGVWYWx1ZXMgPSBNYXRoLnBvdyhiYXNlLCBibG9ja1NpemUpLFxuXG4gICAgcGFkID0gZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICAgICAgdmFyIHMgPSBcIjAwMDAwMDAwMFwiICsgbnVtO1xuICAgICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoLXNpemUpO1xuICAgIH0sXG5cbiAgICByYW5kb21CbG9jayA9IGZ1bmN0aW9uIHJhbmRvbUJsb2NrKCkge1xuICAgICAgcmV0dXJuIHBhZCgoTWF0aC5yYW5kb20oKSAqXG4gICAgICAgICAgICBkaXNjcmV0ZVZhbHVlcyA8PCAwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKGJhc2UpLCBibG9ja1NpemUpO1xuICAgIH0sXG5cbiAgICBzYWZlQ291bnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGMgPSAoYyA8IGRpc2NyZXRlVmFsdWVzKSA/IGMgOiAwO1xuICAgICAgYysrOyAvLyB0aGlzIGlzIG5vdCBzdWJsaW1pbmFsXG4gICAgICByZXR1cm4gYyAtIDE7XG4gICAgfSxcblxuICAgIGFwaSA9IGZ1bmN0aW9uIGN1aWQoKSB7XG4gICAgICAvLyBTdGFydGluZyB3aXRoIGEgbG93ZXJjYXNlIGxldHRlciBtYWtlc1xuICAgICAgLy8gaXQgSFRNTCBlbGVtZW50IElEIGZyaWVuZGx5LlxuICAgICAgdmFyIGxldHRlciA9ICdjJywgLy8gaGFyZC1jb2RlZCBhbGxvd3MgZm9yIHNlcXVlbnRpYWwgYWNjZXNzXG5cbiAgICAgICAgLy8gdGltZXN0YW1wXG4gICAgICAgIC8vIHdhcm5pbmc6IHRoaXMgZXhwb3NlcyB0aGUgZXhhY3QgZGF0ZSBhbmQgdGltZVxuICAgICAgICAvLyB0aGF0IHRoZSB1aWQgd2FzIGNyZWF0ZWQuXG4gICAgICAgIHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoYmFzZSksXG5cbiAgICAgICAgLy8gUHJldmVudCBzYW1lLW1hY2hpbmUgY29sbGlzaW9ucy5cbiAgICAgICAgY291bnRlcixcblxuICAgICAgICAvLyBBIGZldyBjaGFycyB0byBnZW5lcmF0ZSBkaXN0aW5jdCBpZHMgZm9yIGRpZmZlcmVudFxuICAgICAgICAvLyBjbGllbnRzIChzbyBkaWZmZXJlbnQgY29tcHV0ZXJzIGFyZSBmYXIgbGVzc1xuICAgICAgICAvLyBsaWtlbHkgdG8gZ2VuZXJhdGUgdGhlIHNhbWUgaWQpXG4gICAgICAgIGZpbmdlcnByaW50ID0gYXBpLmZpbmdlcnByaW50KCksXG5cbiAgICAgICAgLy8gR3JhYiBzb21lIG1vcmUgY2hhcnMgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHJhbmRvbSA9IHJhbmRvbUJsb2NrKCkgKyByYW5kb21CbG9jaygpO1xuXG4gICAgICAgIGNvdW50ZXIgPSBwYWQoc2FmZUNvdW50ZXIoKS50b1N0cmluZyhiYXNlKSwgYmxvY2tTaXplKTtcblxuICAgICAgcmV0dXJuICAobGV0dGVyICsgdGltZXN0YW1wICsgY291bnRlciArIGZpbmdlcnByaW50ICsgcmFuZG9tKTtcbiAgICB9O1xuXG4gIGFwaS5zbHVnID0gZnVuY3Rpb24gc2x1ZygpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGNvdW50ZXIsXG4gICAgICBwcmludCA9IGFwaS5maW5nZXJwcmludCgpLnNsaWNlKDAsMSkgK1xuICAgICAgICBhcGkuZmluZ2VycHJpbnQoKS5zbGljZSgtMSksXG4gICAgICByYW5kb20gPSByYW5kb21CbG9jaygpLnNsaWNlKC0yKTtcblxuICAgICAgY291bnRlciA9IHNhZmVDb3VudGVyKCkudG9TdHJpbmcoMzYpLnNsaWNlKC00KTtcblxuICAgIHJldHVybiBkYXRlLnNsaWNlKC0yKSArIFxuICAgICAgY291bnRlciArIHByaW50ICsgcmFuZG9tO1xuICB9O1xuXG4gIGFwaS5nbG9iYWxDb3VudCA9IGZ1bmN0aW9uIGdsb2JhbENvdW50KCkge1xuICAgIC8vIFdlIHdhbnQgdG8gY2FjaGUgdGhlIHJlc3VsdHMgb2YgdGhpc1xuICAgIHZhciBjYWNoZSA9IChmdW5jdGlvbiBjYWxjKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChpIGluIHdpbmRvdykge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICB9KCkpO1xuXG4gICAgYXBpLmdsb2JhbENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FjaGU7IH07XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIGFwaS5maW5nZXJwcmludCA9IGZ1bmN0aW9uIGJyb3dzZXJQcmludCgpIHtcbiAgICByZXR1cm4gcGFkKChuYXZpZ2F0b3IubWltZVR5cGVzLmxlbmd0aCArXG4gICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lmxlbmd0aCkudG9TdHJpbmcoMzYpICtcbiAgICAgIGFwaS5nbG9iYWxDb3VudCgpLnRvU3RyaW5nKDM2KSwgNCk7XG4gIH07XG5cbiAgLy8gZG9uJ3QgY2hhbmdlIGFueXRoaW5nIGZyb20gaGVyZSBkb3duLlxuICBpZiAoYXBwLnJlZ2lzdGVyKSB7XG4gICAgYXBwLnJlZ2lzdGVyKG5hbWVzcGFjZSwgYXBpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gYXBpO1xuICB9IGVsc2Uge1xuICAgIGFwcFtuYW1lc3BhY2VdID0gYXBpO1xuICB9XG5cbn0odGhpcy5hcHBsaXR1ZGUgfHwgdGhpcykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgT25lVmVyc2lvbkNvbnN0cmFpbnQgPSByZXF1aXJlKCdpbmRpdmlkdWFsL29uZS12ZXJzaW9uJyk7XG5cbnZhciBNWV9WRVJTSU9OID0gJzcnO1xuT25lVmVyc2lvbkNvbnN0cmFpbnQoJ2V2LXN0b3JlJywgTVlfVkVSU0lPTik7XG5cbnZhciBoYXNoS2V5ID0gJ19fRVZfU1RPUkVfS0VZQCcgKyBNWV9WRVJTSU9OO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2U3RvcmU7XG5cbmZ1bmN0aW9uIEV2U3RvcmUoZWxlbSkge1xuICAgIHZhciBoYXNoID0gZWxlbVtoYXNoS2V5XTtcblxuICAgIGlmICghaGFzaCkge1xuICAgICAgICBoYXNoID0gZWxlbVtoYXNoS2V5XSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKmdsb2JhbCB3aW5kb3csIGdsb2JhbCovXG5cbnZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgIHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID9cbiAgICBnbG9iYWwgOiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRpdmlkdWFsO1xuXG5mdW5jdGlvbiBJbmRpdmlkdWFsKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Rba2V5XTtcbiAgICB9XG5cbiAgICByb290W2tleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEluZGl2aWR1YWwgPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT25lVmVyc2lvbjtcblxuZnVuY3Rpb24gT25lVmVyc2lvbihtb2R1bGVOYW1lLCB2ZXJzaW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIga2V5ID0gJ19fSU5ESVZJRFVBTF9PTkVfVkVSU0lPTl8nICsgbW9kdWxlTmFtZTtcbiAgICB2YXIgZW5mb3JjZUtleSA9IGtleSArICdfRU5GT1JDRV9TSU5HTEVUT04nO1xuXG4gICAgdmFyIHZlcnNpb25WYWx1ZSA9IEluZGl2aWR1YWwoZW5mb3JjZUtleSwgdmVyc2lvbik7XG5cbiAgICBpZiAodmVyc2lvblZhbHVlICE9PSB2ZXJzaW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgaGF2ZSBvbmUgY29weSBvZiAnICtcbiAgICAgICAgICAgIG1vZHVsZU5hbWUgKyAnLlxcbicgK1xuICAgICAgICAgICAgJ1lvdSBhbHJlYWR5IGhhdmUgdmVyc2lvbiAnICsgdmVyc2lvblZhbHVlICtcbiAgICAgICAgICAgICcgaW5zdGFsbGVkLlxcbicgK1xuICAgICAgICAgICAgJ1RoaXMgbWVhbnMgeW91IGNhbm5vdCBpbnN0YWxsIHZlcnNpb24gJyArIHZlcnNpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBJbmRpdmlkdWFsKGtleSwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsInZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG4iLCJ2YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID9cbiAgICB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/XG4gICAgZ2xvYmFsIDoge307XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kaXZpZHVhbFxuXG5mdW5jdGlvbiBJbmRpdmlkdWFsKGtleSwgdmFsdWUpIHtcbiAgICBpZiAocm9vdFtrZXldKSB7XG4gICAgICAgIHJldHVybiByb290W2tleV1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocm9vdCwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsdWVcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwidmFyIGhpZGRlblN0b3JlID0gcmVxdWlyZSgnLi9oaWRkZW4tc3RvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTdG9yZTtcblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUoKSB7XG4gICAgdmFyIGtleSA9IHt9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpICYmXG4gICAgICAgICAgICB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWFrbWFwLXNoaW06IEtleSBtdXN0IGJlIG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RvcmUgPSBvYmoudmFsdWVPZihrZXkpO1xuICAgICAgICByZXR1cm4gc3RvcmUgJiYgc3RvcmUuaWRlbnRpdHkgPT09IGtleSA/XG4gICAgICAgICAgICBzdG9yZSA6IGhpZGRlblN0b3JlKG9iaiwga2V5KTtcbiAgICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBoaWRkZW5TdG9yZTtcblxuZnVuY3Rpb24gaGlkZGVuU3RvcmUob2JqLCBrZXkpIHtcbiAgICB2YXIgc3RvcmUgPSB7IGlkZW50aXR5OiBrZXkgfTtcbiAgICB2YXIgdmFsdWVPZiA9IG9iai52YWx1ZU9mO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJ2YWx1ZU9mXCIsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBrZXkgP1xuICAgICAgICAgICAgICAgIHZhbHVlT2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHN0b3JlO1xuICAgICAgICB9LFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuIiwidmFyIGluaGVyaXRzID0gcmVxdWlyZShcImluaGVyaXRzXCIpXG5cbnZhciBBTExfUFJPUFMgPSBbXG4gICAgXCJhbHRLZXlcIiwgXCJidWJibGVzXCIsIFwiY2FuY2VsYWJsZVwiLCBcImN0cmxLZXlcIixcbiAgICBcImV2ZW50UGhhc2VcIiwgXCJtZXRhS2V5XCIsIFwicmVsYXRlZFRhcmdldFwiLCBcInNoaWZ0S2V5XCIsXG4gICAgXCJ0YXJnZXRcIiwgXCJ0aW1lU3RhbXBcIiwgXCJ0eXBlXCIsIFwidmlld1wiLCBcIndoaWNoXCJcbl1cbnZhciBLRVlfUFJPUFMgPSBbXCJjaGFyXCIsIFwiY2hhckNvZGVcIiwgXCJrZXlcIiwgXCJrZXlDb2RlXCJdXG52YXIgTU9VU0VfUFJPUFMgPSBbXG4gICAgXCJidXR0b25cIiwgXCJidXR0b25zXCIsIFwiY2xpZW50WFwiLCBcImNsaWVudFlcIiwgXCJsYXllclhcIixcbiAgICBcImxheWVyWVwiLCBcIm9mZnNldFhcIiwgXCJvZmZzZXRZXCIsIFwicGFnZVhcIiwgXCJwYWdlWVwiLFxuICAgIFwic2NyZWVuWFwiLCBcInNjcmVlbllcIiwgXCJ0b0VsZW1lbnRcIlxuXVxuXG52YXIgcmtleUV2ZW50ID0gL15rZXl8aW5wdXQvXG52YXIgcm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5RXZlbnRcblxuZnVuY3Rpb24gUHJveHlFdmVudChldikge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm94eUV2ZW50KSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5RXZlbnQoZXYpXG4gICAgfVxuXG4gICAgaWYgKHJrZXlFdmVudC50ZXN0KGV2LnR5cGUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgS2V5RXZlbnQoZXYpXG4gICAgfSBlbHNlIGlmIChybW91c2VFdmVudC50ZXN0KGV2LnR5cGUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW91c2VFdmVudChldilcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEFMTF9QUk9QUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcEtleSA9IEFMTF9QUk9QU1tpXVxuICAgICAgICB0aGlzW3Byb3BLZXldID0gZXZbcHJvcEtleV1cbiAgICB9XG5cbiAgICB0aGlzLl9yYXdFdmVudCA9IGV2XG4gICAgdGhpcy5fYnViYmxlcyA9IGZhbHNlO1xufVxuXG5Qcm94eUV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9yYXdFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG59XG5cblByb3h5RXZlbnQucHJvdG90eXBlLnN0YXJ0UHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnViYmxlcyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIE1vdXNlRXZlbnQoZXYpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEFMTF9QUk9QUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcEtleSA9IEFMTF9QUk9QU1tpXVxuICAgICAgICB0aGlzW3Byb3BLZXldID0gZXZbcHJvcEtleV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IE1PVVNFX1BST1BTLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBtb3VzZVByb3BLZXkgPSBNT1VTRV9QUk9QU1tqXVxuICAgICAgICB0aGlzW21vdXNlUHJvcEtleV0gPSBldlttb3VzZVByb3BLZXldXG4gICAgfVxuXG4gICAgdGhpcy5fcmF3RXZlbnQgPSBldlxufVxuXG5pbmhlcml0cyhNb3VzZUV2ZW50LCBQcm94eUV2ZW50KVxuXG5mdW5jdGlvbiBLZXlFdmVudChldikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQUxMX1BST1BTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wS2V5ID0gQUxMX1BST1BTW2ldXG4gICAgICAgIHRoaXNbcHJvcEtleV0gPSBldltwcm9wS2V5XVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgS0VZX1BST1BTLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBrZXlQcm9wS2V5ID0gS0VZX1BST1BTW2pdXG4gICAgICAgIHRoaXNba2V5UHJvcEtleV0gPSBldltrZXlQcm9wS2V5XVxuICAgIH1cblxuICAgIHRoaXMuX3Jhd0V2ZW50ID0gZXZcbn1cblxuaW5oZXJpdHMoS2V5RXZlbnQsIFByb3h5RXZlbnQpXG4iLCJ2YXIgRXZTdG9yZSA9IHJlcXVpcmUoXCJldi1zdG9yZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUV2ZW50XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgIHZhciBldmVudHMgPSBFdlN0b3JlKHRhcmdldClcbiAgICB2YXIgZXZlbnQgPSBldmVudHNbdHlwZV1cblxuICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgICB2YXIgaW5kZXggPSBldmVudC5pbmRleE9mKGhhbmRsZXIpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgZXZlbnRzW3R5cGVdID0gbnVsbFxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gRXZlbnRcblxuZnVuY3Rpb24gRXZlbnQoKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdXG5cbiAgICByZXR1cm4geyBicm9hZGNhc3Q6IGJyb2FkY2FzdCwgbGlzdGVuOiBldmVudCB9XG5cbiAgICBmdW5jdGlvbiBicm9hZGNhc3QodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXSh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuXG4gICAgICAgIHJldHVybiByZW1vdmVMaXN0ZW5lclxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBldmVudCA9IHJlcXVpcmUoXCIuL3NpbmdsZS5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG11bHRpcGxlXG5cbmZ1bmN0aW9uIG11bHRpcGxlKG5hbWVzKSB7XG4gICAgcmV0dXJuIG5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1tuYW1lXSA9IGV2ZW50KClcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxufVxuIiwidmFyIEV2ZW50ID0gcmVxdWlyZSgnLi9ldmVudC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gU2luZ2xlXG5cbmZ1bmN0aW9uIFNpbmdsZSgpIHtcbiAgICB2YXIgdHVwbGUgPSBFdmVudCgpXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZXZlbnQodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHVwbGUubGlzdGVuKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR1cGxlLmJyb2FkY2FzdCh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciByYWYgPSByZXF1aXJlKFwicmFmXCIpXG52YXIgVHlwZWRFcnJvciA9IHJlcXVpcmUoXCJlcnJvci90eXBlZFwiKVxuXG52YXIgSW52YWxpZFVwZGF0ZUluUmVuZGVyID0gVHlwZWRFcnJvcih7XG4gICAgdHlwZTogXCJtYWluLWxvb3AuaW52YWxpZC51cGRhdGUuaW4tcmVuZGVyXCIsXG4gICAgbWVzc2FnZTogXCJtYWluLWxvb3A6IFVuZXhwZWN0ZWQgdXBkYXRlIG9jY3VycmVkIGluIGxvb3AuXFxuXCIgK1xuICAgICAgICBcIldlIGFyZSBjdXJyZW50bHkgcmVuZGVyaW5nIGEgdmlldywgXCIgK1xuICAgICAgICAgICAgXCJ5b3UgY2FuJ3QgY2hhbmdlIHN0YXRlIHJpZ2h0IG5vdy5cXG5cIiArXG4gICAgICAgIFwiVGhlIGRpZmYgaXM6IHtzdHJpbmdEaWZmfS5cXG5cIiArXG4gICAgICAgIFwiU1VHR0VTVEVEIEZJWDogZmluZCB0aGUgc3RhdGUgbXV0YXRpb24gaW4geW91ciB2aWV3IFwiICtcbiAgICAgICAgICAgIFwib3IgcmVuZGVyaW5nIGZ1bmN0aW9uIGFuZCByZW1vdmUgaXQuXFxuXCIgK1xuICAgICAgICBcIlRoZSB2aWV3IHNob3VsZCBub3QgaGF2ZSBhbnkgc2lkZSBlZmZlY3RzLlxcblwiLFxuICAgIGRpZmY6IG51bGwsXG4gICAgc3RyaW5nRGlmZjogbnVsbFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluXG5cbmZ1bmN0aW9uIG1haW4oaW5pdGlhbFN0YXRlLCB2aWV3LCBvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge31cblxuICAgIHZhciBjdXJyZW50U3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICB2YXIgY3JlYXRlID0gb3B0cy5jcmVhdGVcbiAgICB2YXIgZGlmZiA9IG9wdHMuZGlmZlxuICAgIHZhciBwYXRjaCA9IG9wdHMucGF0Y2hcbiAgICB2YXIgcmVkcmF3U2NoZWR1bGVkID0gZmFsc2VcblxuICAgIHZhciB0cmVlID0gb3B0cy5pbml0aWFsVHJlZSB8fCB2aWV3KGN1cnJlbnRTdGF0ZSlcbiAgICB2YXIgdGFyZ2V0ID0gb3B0cy50YXJnZXQgfHwgY3JlYXRlKHRyZWUsIG9wdHMpXG4gICAgdmFyIGluUmVuZGVyaW5nVHJhbnNhY3Rpb24gPSBmYWxzZVxuXG4gICAgY3VycmVudFN0YXRlID0gbnVsbFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gICAgICAgIGlmIChpblJlbmRlcmluZ1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBJbnZhbGlkVXBkYXRlSW5SZW5kZXIoe1xuICAgICAgICAgICAgICAgIGRpZmY6IHN0YXRlLl9kaWZmLFxuICAgICAgICAgICAgICAgIHN0cmluZ0RpZmY6IEpTT04uc3RyaW5naWZ5KHN0YXRlLl9kaWZmKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IG51bGwgJiYgIXJlZHJhd1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmVkcmF3U2NoZWR1bGVkID0gdHJ1ZVxuICAgICAgICAgICAgcmFmKHJlZHJhdylcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IHN0YXRlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICAgICByZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpblJlbmRlcmluZ1RyYW5zYWN0aW9uID0gdHJ1ZVxuICAgICAgICB2YXIgbmV3VHJlZSA9IHZpZXcoY3VycmVudFN0YXRlKVxuXG4gICAgICAgIGlmIChvcHRzLmNyZWF0ZU9ubHkpIHtcbiAgICAgICAgICAgIGluUmVuZGVyaW5nVHJhbnNhY3Rpb24gPSBmYWxzZVxuICAgICAgICAgICAgY3JlYXRlKG5ld1RyZWUsIG9wdHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGF0Y2hlcyA9IGRpZmYodHJlZSwgbmV3VHJlZSwgb3B0cylcbiAgICAgICAgICAgIGluUmVuZGVyaW5nVHJhbnNhY3Rpb24gPSBmYWxzZVxuICAgICAgICAgICAgdGFyZ2V0ID0gcGF0Y2godGFyZ2V0LCBwYXRjaGVzLCBvcHRzKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJlZSA9IG5ld1RyZWVcbiAgICAgICAgY3VycmVudFN0YXRlID0gbnVsbFxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSByZXR1cm4gY2FtZWxDYXNlKG9iaik7XG4gICAgcmV0dXJuIHdhbGsob2JqKTtcbn07XG5cbmZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xuICAgIGlmIChpc0RhdGUob2JqKSB8fCBpc1JlZ2V4KG9iaikpIHJldHVybiBvYmo7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkgcmV0dXJuIG1hcChvYmosIHdhbGspO1xuICAgIHJldHVybiByZWR1Y2Uob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIGNhbWVsID0gY2FtZWxDYXNlKGtleSk7XG4gICAgICAgIGFjY1tjYW1lbF0gPSB3YWxrKG9ialtrZXldKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tfLi1dKFxcd3wkKS9nLCBmdW5jdGlvbiAoXyx4KSB7XG4gICAgICAgIHJldHVybiB4LnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzRGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5cbnZhciBpc1JlZ2V4ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gICAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZSAoeHMsIGYsIGFjYykge1xuICAgIGlmICh4cy5yZWR1Y2UpIHJldHVybiB4cy5yZWR1Y2UoZiwgYWNjKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFjYyA9IGYoYWNjLCB4c1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG59XG4iLCJ2YXIgbmFyZ3MgPSAvXFx7KFswLTlhLXpBLVpdKylcXH0vZ1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVcblxuZnVuY3Rpb24gdGVtcGxhdGUoc3RyaW5nKSB7XG4gICAgdmFyIGFyZ3NcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50c1sxXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICB9XG5cbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MuaGFzT3duUHJvcGVydHkpIHtcbiAgICAgICAgYXJncyA9IHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKG5hcmdzLCBmdW5jdGlvbiByZXBsYWNlQXJnKG1hdGNoLCBpLCBpbmRleCkge1xuICAgICAgICB2YXIgcmVzdWx0XG5cbiAgICAgICAgaWYgKHN0cmluZ1tpbmRleCAtIDFdID09PSBcIntcIiAmJlxuICAgICAgICAgICAgc3RyaW5nW2luZGV4ICsgbWF0Y2gubGVuZ3RoXSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhcmdzLmhhc093blByb3BlcnR5KGkpID8gYXJnc1tpXSA6IG51bGxcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICB9KVxufVxuIiwidmFyIGNhbWVsaXplID0gcmVxdWlyZShcImNhbWVsaXplXCIpXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKFwic3RyaW5nLXRlbXBsYXRlXCIpXG52YXIgZXh0ZW5kID0gcmVxdWlyZShcInh0ZW5kL211dGFibGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlZEVycm9yXG5cbmZ1bmN0aW9uIFR5cGVkRXJyb3IoYXJncykge1xuICAgIGlmICghYXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcmdzIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MudHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcmdzLnR5cGUgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmICghYXJncy5tZXNzYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFyZ3MubWVzc2FnZSBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IGFyZ3MubWVzc2FnZVxuXG4gICAgaWYgKGFyZ3MudHlwZSAmJiAhYXJncy5uYW1lKSB7XG4gICAgICAgIHZhciBlcnJvck5hbWUgPSBjYW1lbGl6ZShhcmdzLnR5cGUpICsgXCJFcnJvclwiXG4gICAgICAgIGFyZ3MubmFtZSA9IGVycm9yTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgZXJyb3JOYW1lLnN1YnN0cigxKVxuICAgIH1cblxuICAgIGV4dGVuZChjcmVhdGVFcnJvciwgYXJncyk7XG4gICAgY3JlYXRlRXJyb3IuX25hbWUgPSBhcmdzLm5hbWU7XG5cbiAgICByZXR1cm4gY3JlYXRlRXJyb3I7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFcnJvcihvcHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgRXJyb3IoKVxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsIFwidHlwZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnR5cGUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IGV4dGVuZCh7fSwgYXJncywgb3B0cylcblxuICAgICAgICBleHRlbmQocmVzdWx0LCBvcHRpb25zKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IHRlbXBsYXRlKG1lc3NhZ2UsIG9wdGlvbnMpXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSBnbG9iYWxbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IGdsb2JhbFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgZ2xvYmFsWydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBpc05hdGl2ZSA9IHRydWVcblxuZm9yKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyYWY7IGkrKykge1xuICByYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgaXNOYXRpdmUgPSBmYWxzZVxuXG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICBpZighaXNOYXRpdmUpIHtcbiAgICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmbilcbiAgfVxuICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpIHtcbiAgICB0cnl7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgfVxuICB9KVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShnbG9iYWwsIGFyZ3VtZW50cylcbn1cbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS42LjNcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8qXG4vL0Agc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cubWFwXG4qL1xuIiwidmFyIHNldE5vbkVudW1lcmFibGUgPSByZXF1aXJlKFwiLi9saWIvc2V0LW5vbi1lbnVtZXJhYmxlLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZExpc3RlbmVyXG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKG9ic2VydkFycmF5LCBvYnNlcnYpIHtcbiAgICB2YXIgbGlzdCA9IG9ic2VydkFycmF5Ll9saXN0XG5cbiAgICByZXR1cm4gb2JzZXJ2KGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVMaXN0ID0gIG9ic2VydkFycmF5KCkuc2xpY2UoKVxuICAgICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yob2JzZXJ2KVxuXG4gICAgICAgIC8vIFRoaXMgY29kZSBwYXRoIHNob3VsZCBuZXZlciBoaXQuIElmIHRoaXMgaGFwcGVuc1xuICAgICAgICAvLyB0aGVyZSdzIGEgYnVnIGluIHRoZSBjbGVhbnVwIGNvZGVcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIm9ic2Vydi1hcnJheTogVW5yZW1vdmVkIG9ic2VydiBsaXN0ZW5lclwiXG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgICAgICAgICBlcnIubGlzdCA9IGxpc3RcbiAgICAgICAgICAgIGVyci5pbmRleCA9IGluZGV4XG4gICAgICAgICAgICBlcnIub2JzZXJ2ID0gb2JzZXJ2XG4gICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHZhbHVlKVxuICAgICAgICBzZXROb25FbnVtZXJhYmxlKHZhbHVlTGlzdCwgXCJfZGlmZlwiLCBbIFtpbmRleCwgMSwgdmFsdWVdIF0pXG5cbiAgICAgICAgb2JzZXJ2QXJyYXkuX29ic2VydlNldCh2YWx1ZUxpc3QpXG4gICAgfSlcbn1cbiIsInZhciBhZGRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vYWRkLWxpc3RlbmVyLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseVBhdGNoXG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2ggKHZhbHVlTGlzdCwgYXJncykge1xuICAgIHZhciBvYnMgPSB0aGlzXG4gICAgdmFyIHZhbHVlQXJncyA9IGFyZ3MubWFwKHVucGFjaylcblxuICAgIHZhbHVlTGlzdC5zcGxpY2UuYXBwbHkodmFsdWVMaXN0LCB2YWx1ZUFyZ3MpXG4gICAgb2JzLl9saXN0LnNwbGljZS5hcHBseShvYnMuX2xpc3QsIGFyZ3MpXG5cbiAgICB2YXIgZXh0cmFSZW1vdmVMaXN0ZW5lcnMgPSBhcmdzLnNsaWNlKDIpLm1hcChmdW5jdGlvbiAob2JzZXJ2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JzZXJ2ID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIob2JzLCBvYnNlcnYpIDpcbiAgICAgICAgICAgIG51bGxcbiAgICB9KVxuXG4gICAgZXh0cmFSZW1vdmVMaXN0ZW5lcnMudW5zaGlmdChhcmdzWzBdLCBhcmdzWzFdKVxuICAgIHZhciByZW1vdmVkTGlzdGVuZXJzID0gb2JzLl9yZW1vdmVMaXN0ZW5lcnMuc3BsaWNlXG4gICAgICAgIC5hcHBseShvYnMuX3JlbW92ZUxpc3RlbmVycywgZXh0cmFSZW1vdmVMaXN0ZW5lcnMpXG5cbiAgICByZW1vdmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZU9ic2Vydkxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChyZW1vdmVPYnNlcnZMaXN0ZW5lcikge1xuICAgICAgICAgICAgcmVtb3ZlT2JzZXJ2TGlzdGVuZXIoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB2YWx1ZUFyZ3Ncbn1cblxuZnVuY3Rpb24gdW5wYWNrKHZhbHVlLCBpbmRleCl7XG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZSgpIDogdmFsdWVcbn1cbiIsInZhciBPYnNlcnZBcnJheSA9IHJlcXVpcmUoXCIuL2luZGV4LmpzXCIpXG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuXG52YXIgQVJSQVlfTUVUSE9EUyA9IFtcbiAgICBcImNvbmNhdFwiLCBcInNsaWNlXCIsIFwiZXZlcnlcIiwgXCJmaWx0ZXJcIiwgXCJmb3JFYWNoXCIsIFwiaW5kZXhPZlwiLFxuICAgIFwiam9pblwiLCBcImxhc3RJbmRleE9mXCIsIFwibWFwXCIsIFwicmVkdWNlXCIsIFwicmVkdWNlUmlnaHRcIixcbiAgICBcInNvbWVcIiwgXCJ0b1N0cmluZ1wiLCBcInRvTG9jYWxlU3RyaW5nXCJcbl1cblxudmFyIG1ldGhvZHMgPSBBUlJBWV9NRVRIT0RTLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBbbmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5fbGlzdFtuYW1lXS5hcHBseSh0aGlzLl9saXN0LCBhcmd1bWVudHMpXG5cbiAgICAgICAgaWYgKHJlcyAmJiBBcnJheS5pc0FycmF5KHJlcykpIHtcbiAgICAgICAgICAgIHJlcyA9IE9ic2VydkFycmF5KHJlcylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheU1ldGhvZHNcblxuZnVuY3Rpb24gQXJyYXlNZXRob2RzKG9icykge1xuICAgIG9icy5wdXNoID0gb2JzZXJ2QXJyYXlQdXNoXG4gICAgb2JzLnBvcCA9IG9ic2VydkFycmF5UG9wXG4gICAgb2JzLnNoaWZ0ID0gb2JzZXJ2QXJyYXlTaGlmdFxuICAgIG9icy51bnNoaWZ0ID0gb2JzZXJ2QXJyYXlVbnNoaWZ0XG4gICAgb2JzLnJldmVyc2UgPSByZXF1aXJlKFwiLi9hcnJheS1yZXZlcnNlLmpzXCIpXG4gICAgb2JzLnNvcnQgPSByZXF1aXJlKFwiLi9hcnJheS1zb3J0LmpzXCIpXG5cbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlKSB7XG4gICAgICAgIG9ic1t0dXBsZVswXV0gPSB0dXBsZVsxXVxuICAgIH0pXG4gICAgcmV0dXJuIG9ic1xufVxuXG5cblxuZnVuY3Rpb24gb2JzZXJ2QXJyYXlQdXNoKCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgYXJncy51bnNoaWZ0KHRoaXMuX2xpc3QubGVuZ3RoLCAwKVxuICAgIHRoaXMuc3BsaWNlLmFwcGx5KHRoaXMsIGFyZ3MpXG5cbiAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGhcbn1cbmZ1bmN0aW9uIG9ic2VydkFycmF5UG9wKCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZSh0aGlzLl9saXN0Lmxlbmd0aCAtIDEsIDEpWzBdXG59XG5mdW5jdGlvbiBvYnNlcnZBcnJheVNoaWZ0KCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZSgwLCAxKVswXVxufVxuZnVuY3Rpb24gb2JzZXJ2QXJyYXlVbnNoaWZ0KCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgYXJncy51bnNoaWZ0KDAsIDApXG4gICAgdGhpcy5zcGxpY2UuYXBwbHkodGhpcywgYXJncylcblxuICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aFxufVxuXG5cbmZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlB1bGwgcmVxdWVzdCB3ZWxjb21lXCIpXG59XG4iLCJ2YXIgYXBwbHlQYXRjaCA9IHJlcXVpcmUoXCIuL2FwcGx5LXBhdGNoLmpzXCIpXG52YXIgc2V0Tm9uRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4vbGliL3NldC1ub24tZW51bWVyYWJsZS5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJzZVxuXG5mdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHZhciBvYnMgPSB0aGlzXG4gICAgdmFyIGNoYW5nZXMgPSBmYWtlRGlmZihvYnMuX2xpc3Quc2xpY2UoKS5yZXZlcnNlKCkpXG4gICAgdmFyIHZhbHVlTGlzdCA9IG9icygpLnNsaWNlKCkucmV2ZXJzZSgpXG5cbiAgICB2YXIgdmFsdWVDaGFuZ2VzID0gY2hhbmdlcy5tYXAoYXBwbHlQYXRjaC5iaW5kKG9icywgdmFsdWVMaXN0KSlcblxuICAgIHNldE5vbkVudW1lcmFibGUodmFsdWVMaXN0LCBcIl9kaWZmXCIsIHZhbHVlQ2hhbmdlcylcblxuICAgIG9icy5fb2JzZXJ2U2V0KHZhbHVlTGlzdClcbiAgICByZXR1cm4gY2hhbmdlc1xufVxuXG5mdW5jdGlvbiBmYWtlRGlmZihhcnIpIHtcbiAgICB2YXIgX2RpZmZcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aFxuXG4gICAgaWYobGVuICUgMikge1xuICAgICAgICB2YXIgbWlkUG9pbnQgPSAobGVuIC0xKSAvIDJcbiAgICAgICAgdmFyIGEgPSBbMCwgbWlkUG9pbnRdLmNvbmNhdChhcnIuc2xpY2UoMCwgbWlkUG9pbnQpKVxuICAgICAgICB2YXIgYiA9IFttaWRQb2ludCArMSwgbWlkUG9pbnRdLmNvbmNhdChhcnIuc2xpY2UobWlkUG9pbnQgKzEsIGxlbikpXG4gICAgICAgIHZhciBfZGlmZiA9IFthLCBiXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIF9kaWZmID0gWyBbMCwgbGVuXS5jb25jYXQoYXJyKSBdXG4gICAgfVxuXG4gICAgcmV0dXJuIF9kaWZmXG59XG4iLCJ2YXIgYXBwbHlQYXRjaCA9IHJlcXVpcmUoXCIuL2FwcGx5LXBhdGNoLmpzXCIpXG52YXIgc2V0Tm9uRW51bWVyYWJsZSA9IHJlcXVpcmUoXCIuL2xpYi9zZXQtbm9uLWVudW1lcmFibGUuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBzb3J0XG5cbmZ1bmN0aW9uIHNvcnQoY29tcGFyZSkge1xuICAgIHZhciBvYnMgPSB0aGlzXG4gICAgdmFyIGxpc3QgPSBvYnMuX2xpc3Quc2xpY2UoKVxuXG4gICAgdmFyIHVucGFja2VkID0gdW5wYWNrKGxpc3QpXG5cbiAgICB2YXIgc29ydGVkID0gdW5wYWNrZWRcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oaXQpIHsgcmV0dXJuIGl0LnZhbCB9KVxuICAgICAgICAgICAgLnNvcnQoY29tcGFyZSlcblxuICAgIHZhciBwYWNrZWQgPSByZXBhY2soc29ydGVkLCB1bnBhY2tlZClcblxuICAgIC8vZmFrZSBkaWZmIC0gZm9yIHBlcmZcbiAgICAvL2FkaWZmIG9uIDEwayBpdGVtcyA9PT0gfjMyMDBtc1xuICAgIC8vZmFrZSBvbiAxMGsgaXRlbXMgPT09IH4xMTBtc1xuICAgIHZhciBjaGFuZ2VzID0gWyBbIDAsIHBhY2tlZC5sZW5ndGggXS5jb25jYXQocGFja2VkKSBdXG5cbiAgICB2YXIgdmFsdWVDaGFuZ2VzID0gY2hhbmdlcy5tYXAoYXBwbHlQYXRjaC5iaW5kKG9icywgc29ydGVkKSlcblxuICAgIHNldE5vbkVudW1lcmFibGUoc29ydGVkLCBcIl9kaWZmXCIsIHZhbHVlQ2hhbmdlcylcblxuICAgIG9icy5fb2JzZXJ2U2V0KHNvcnRlZClcbiAgICByZXR1cm4gY2hhbmdlc1xufVxuXG5mdW5jdGlvbiB1bnBhY2sobGlzdCkge1xuICAgIHZhciB1bnBhY2tlZCA9IFtdXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdW5wYWNrZWQucHVzaCh7XG4gICAgICAgICAgICB2YWw6IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGxpc3RbaV0pID8gbGlzdFtpXSgpIDogbGlzdFtpXSxcbiAgICAgICAgICAgIG9iajogbGlzdFtpXVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdW5wYWNrZWRcbn1cblxuZnVuY3Rpb24gcmVwYWNrKHNvcnRlZCwgdW5wYWNrZWQpIHtcbiAgICB2YXIgcGFja2VkID0gW11cblxuICAgIHdoaWxlKHNvcnRlZC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHMgPSBzb3J0ZWQuc2hpZnQoKVxuICAgICAgICB2YXIgaW5keCA9IGluZGV4T2YocywgdW5wYWNrZWQpXG4gICAgICAgIGlmKH5pbmR4KSBwYWNrZWQucHVzaCh1bnBhY2tlZC5zcGxpY2UoaW5keCwgMSlbMF0ub2JqKVxuICAgIH1cblxuICAgIHJldHVybiBwYWNrZWRcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihuLCBoKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobiA9PT0gaFtpXS52YWwpIHJldHVybiBpXG4gICAgfVxuICAgIHJldHVybiAtMVxufVxuIiwidmFyIE9ic2VydiA9IHJlcXVpcmUoXCJvYnNlcnZcIilcblxuLy8gY2lyY3VsYXIgZGVwIGJldHdlZW4gQXJyYXlNZXRob2RzICYgdGhpcyBmaWxlXG5tb2R1bGUuZXhwb3J0cyA9IE9ic2VydkFycmF5XG5cbnZhciBzcGxpY2UgPSByZXF1aXJlKFwiLi9zcGxpY2UuanNcIilcbnZhciBwdXQgPSByZXF1aXJlKFwiLi9wdXQuanNcIilcbnZhciBzZXQgPSByZXF1aXJlKFwiLi9zZXQuanNcIilcbnZhciB0cmFuc2FjdGlvbiA9IHJlcXVpcmUoXCIuL3RyYW5zYWN0aW9uLmpzXCIpXG52YXIgQXJyYXlNZXRob2RzID0gcmVxdWlyZShcIi4vYXJyYXktbWV0aG9kcy5qc1wiKVxudmFyIGFkZExpc3RlbmVyID0gcmVxdWlyZShcIi4vYWRkLWxpc3RlbmVyLmpzXCIpXG5cblxuLyogIE9ic2VydkFycmF5IDo9IChBcnJheTxUPikgPT4gT2JzZXJ2PFxuICAgICAgICBBcnJheTxUPiAmIHsgX2RpZmY6IEFycmF5IH1cbiAgICA+ICYge1xuICAgICAgICBzcGxpY2U6IChpbmRleDogTnVtYmVyLCBhbW91bnQ6IE51bWJlciwgcmVzdC4uLjogVCkgPT5cbiAgICAgICAgICAgIEFycmF5PFQ+LFxuICAgICAgICBwdXNoOiAodmFsdWVzLi4uOiBUKSA9PiBOdW1iZXIsXG4gICAgICAgIGZpbHRlcjogKGxhbWJkYTogRnVuY3Rpb24sIHRoaXNWYWx1ZTogQW55KSA9PiBBcnJheTxUPixcbiAgICAgICAgaW5kZXhPZjogKGl0ZW06IFQsIGZyb21JbmRleDogTnVtYmVyKSA9PiBOdW1iZXJcbiAgICB9XG5cbiAgICBGaXggdG8gbWFrZSBpdCBtb3JlIGxpa2UgT2JzZXJ2SGFzaC5cblxuICAgIEkuZS4geW91IHdyaXRlIG9ic2VydmFibGVzIGludG8gaXQuXG4gICAgICAgIHJlYWRpbmcgbWV0aG9kcyB0YWtlIHBsYWluIEpTIG9iamVjdHMgdG8gcmVhZFxuICAgICAgICBhbmQgdGhlIHZhbHVlIG9mIHRoZSBhcnJheSBpcyBhbHdheXMgYW4gYXJyYXkgb2YgcGxhaW5cbiAgICAgICAgb2Jqc2VjdC5cblxuICAgICAgICBUaGUgb2JzZXJ2IGFycmF5IGluc3RhbmNlIGl0c2VsZiB3b3VsZCBoYXZlIGluZGV4ZWRcbiAgICAgICAgcHJvcGVydGllcyB0aGF0IGFyZSB0aGUgb2JzZXJ2YWJsZXNcbiovXG5mdW5jdGlvbiBPYnNlcnZBcnJheShpbml0aWFsTGlzdCkge1xuICAgIC8vIGxpc3QgaXMgdGhlIGludGVybmFsIG11dGFibGUgbGlzdCBvYnNlcnYgaW5zdGFuY2VzIHRoYXRcbiAgICAvLyBhbGwgbWV0aG9kcyBvbiBgb2JzYCBkaXNwYXRjaCB0by5cbiAgICB2YXIgbGlzdCA9IGluaXRpYWxMaXN0XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IFtdXG5cbiAgICAvLyBjb3B5IHN0YXRlIG91dCBvZiBpbml0aWFsTGlzdCBpbnRvIGluaXRpYWxTdGF0ZVxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2LCBpbmRleCkge1xuICAgICAgICBpbml0aWFsU3RhdGVbaW5kZXhdID0gdHlwZW9mIG9ic2VydiA9PT0gXCJmdW5jdGlvblwiID9cbiAgICAgICAgICAgIG9ic2VydigpIDogb2JzZXJ2XG4gICAgfSlcblxuICAgIHZhciBvYnMgPSBPYnNlcnYoaW5pdGlhbFN0YXRlKVxuICAgIG9icy5zcGxpY2UgPSBzcGxpY2VcblxuICAgIC8vIG92ZXJyaWRlIHNldCBhbmQgc3RvcmUgb3JpZ2luYWwgZm9yIGxhdGVyIHVzZVxuICAgIG9icy5fb2JzZXJ2U2V0ID0gb2JzLnNldFxuICAgIG9icy5zZXQgPSBzZXRcblxuICAgIG9icy5nZXQgPSBnZXRcbiAgICBvYnMuZ2V0TGVuZ3RoID0gZ2V0TGVuZ3RoXG4gICAgb2JzLnB1dCA9IHB1dFxuICAgIG9icy50cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXG5cbiAgICAvLyB5b3UgYmV0dGVyIG5vdCBtdXRhdGUgdGhpcyBsaXN0IGRpcmVjdGx5XG4gICAgLy8gdGhpcyBpcyB0aGUgbGlzdCBvZiBvYnNlcnZzIGluc3RhbmNlc1xuICAgIG9icy5fbGlzdCA9IGxpc3RcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBsaXN0Lm1hcChmdW5jdGlvbiAob2JzZXJ2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JzZXJ2ID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIob2JzLCBvYnNlcnYpIDpcbiAgICAgICAgICAgIG51bGxcbiAgICB9KTtcbiAgICAvLyB0aGlzIGlzIGEgbGlzdCBvZiByZW1vdmFsIGZ1bmN0aW9ucyB0aGF0IG11c3QgYmUgY2FsbGVkXG4gICAgLy8gd2hlbiBvYnNlcnYgaW5zdGFuY2VzIGFyZSByZW1vdmVkIGZyb20gYG9icy5saXN0YFxuICAgIC8vIG5vdCBjYWxsaW5nIHRoaXMgbWVhbnMgd2UgZG8gbm90IEdDIG91ciBvYnNlcnYgY2hhbmdlXG4gICAgLy8gbGlzdGVuZXJzLiBXaGljaCBjYXVzZXMgcmFnZSBidWdzXG4gICAgb2JzLl9yZW1vdmVMaXN0ZW5lcnMgPSByZW1vdmVMaXN0ZW5lcnNcblxuICAgIG9icy5fdHlwZSA9IFwib2JzZXJ2LWFycmF5XCJcbiAgICBvYnMuX3ZlcnNpb24gPSBcIjNcIlxuXG4gICAgcmV0dXJuIEFycmF5TWV0aG9kcyhvYnMsIGxpc3QpXG59XG5cbmZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0W2luZGV4XVxufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNldE5vbkVudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHNldE5vbkVudW1lcmFibGUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbn1cbiIsImZ1bmN0aW9uIGhlYWQgKGEpIHtcbiAgcmV0dXJuIGFbMF1cbn1cblxuZnVuY3Rpb24gbGFzdCAoYSkge1xuICByZXR1cm4gYVthLmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHRhaWwoYSkge1xuICByZXR1cm4gYS5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiByZXRyZWF0IChlKSB7XG4gIHJldHVybiBlLnBvcCgpXG59XG5cbmZ1bmN0aW9uIGhhc0xlbmd0aCAoZSkge1xuICByZXR1cm4gZS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gYW55KGFyeSwgdGVzdCkge1xuICBmb3IodmFyIGk9MDtpPGFyeS5sZW5ndGg7aSsrKVxuICAgIGlmKHRlc3QoYXJ5W2ldKSlcbiAgICAgIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBzY29yZSAoYSkge1xuICByZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24gKHMsIGEpIHtcbiAgICAgIHJldHVybiBzICsgYS5sZW5ndGggKyBhWzFdICsgMVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiBiZXN0IChhLCBiKSB7XG4gIHJldHVybiBzY29yZShhKSA8PSBzY29yZShiKSA/IGEgOiBiXG59XG5cblxudmFyIF9ydWxlcyAvLyBzZXQgYXQgdGhlIGJvdHRvbSAgXG5cbi8vIG5vdGUsIG5haXZlIGltcGxlbWVudGF0aW9uLiB3aWxsIGJyZWFrIG9uIGNpcmN1bGFyIG9iamVjdHMuXG5cbmZ1bmN0aW9uIF9lcXVhbChhLCBiKSB7XG4gIGlmKGEgJiYgIWIpIHJldHVybiBmYWxzZVxuICBpZihBcnJheS5pc0FycmF5KGEpKVxuICAgIGlmKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgaWYoYSAmJiAnb2JqZWN0JyA9PSB0eXBlb2YgYSkge1xuICAgIGZvcih2YXIgaSBpbiBhKVxuICAgICAgaWYoIV9lcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlXG4gICAgZm9yKHZhciBpIGluIGIpXG4gICAgICBpZighX2VxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBhID09IGJcbn1cblxuZnVuY3Rpb24gZ2V0QXJncyhhcmdzKSB7XG4gIHJldHVybiBhcmdzLmxlbmd0aCA9PSAxID8gYXJnc1swXSA6IFtdLnNsaWNlLmNhbGwoYXJncylcbn1cblxuLy8gcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBub3QgbGlrZSB0aGUgb3RoZXJzLCBvciAtMVxuZnVuY3Rpb24gb2RkRWxlbWVudChhcnksIGNtcCkge1xuICB2YXIgY1xuICBmdW5jdGlvbiBndWVzcyhhKSB7XG4gICAgdmFyIG9kZCA9IC0xXG4gICAgYyA9IDBcbiAgICBmb3IgKHZhciBpID0gYTsgaSA8IGFyeS5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGlmKCFjbXAoYXJ5W2FdLCBhcnlbaV0pKSB7XG4gICAgICAgIG9kZCA9IGksIGMrK1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYyA+IDEgPyAtMSA6IG9kZFxuICB9XG4gIC8vYXNzdW1lIHRoYXQgaXQgaXMgdGhlIGZpcnN0IGVsZW1lbnQuXG4gIHZhciBnID0gZ3Vlc3MoMClcbiAgaWYoLTEgIT0gZykgcmV0dXJuIGdcbiAgLy8wIHdhcyB0aGUgb2RkIG9uZSwgdGhlbiBhbGwgdGhlIG90aGVyIGVsZW1lbnRzIGFyZSBlcXVhbFxuICAvL2Vsc2UgdGhlcmUgbW9yZSB0aGFuIG9uZSBkaWZmZXJlbnQgZWxlbWVudFxuICBndWVzcygxKVxuICByZXR1cm4gYyA9PSAwID8gMCA6IC0xXG59XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlcHMsIGV4cG9ydHMpIHtcbiAgdmFyIGVxdWFsID0gKGRlcHMgJiYgZGVwcy5lcXVhbCkgfHwgX2VxdWFsXG4gIGV4cG9ydHMgPSBleHBvcnRzIHx8IHt9IFxuICBleHBvcnRzLmxjcyA9IFxuICBmdW5jdGlvbiBsY3MoKSB7XG4gICAgdmFyIGNhY2hlID0ge31cbiAgICB2YXIgYXJncyA9IGdldEFyZ3MoYXJndW1lbnRzKVxuICAgIHZhciBhID0gYXJnc1swXSwgYiA9IGFyZ3NbMV1cblxuICAgIGZ1bmN0aW9uIGtleSAoYSxiKXtcbiAgICAgIHJldHVybiBhLmxlbmd0aCArICc6JyArIGIubGVuZ3RoXG4gICAgfVxuXG4gICAgLy9maW5kIGxlbmd0aCB0aGF0IG1hdGNoZXMgYXQgdGhlIGhlYWRcblxuICAgIGlmKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgLy9pZiBjYWxsZWQgd2l0aCBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgIC8vcmVjdXJzZSwgc2luY2UgbGNzKGEsIGIsIGMsIGQpID09IGxjcyhsY3MoYSxiKSwgbGNzKGMsZCkpXG4gICAgICBhcmdzLnB1c2gobGNzKGFyZ3Muc2hpZnQoKSwgYXJncy5zaGlmdCgpKSlcbiAgICAgIHJldHVybiBsY3MoYXJncylcbiAgICB9XG4gICAgXG4gICAgLy90aGlzIHdvdWxkIGJlIGltcHJvdmVkIGJ5IHRydW5jYXRpbmcgaW5wdXQgZmlyc3RcbiAgICAvL2FuZCBub3QgcmV0dXJuaW5nIGFuIGxjcyBhcyBhbiBpbnRlcm1lZGlhdGUgc3RlcC5cbiAgICAvL3VudGlsbCB0aGF0IGlzIGEgcGVyZm9ybWFuY2UgcHJvYmxlbS5cblxuICAgIHZhciBzdGFydCA9IDAsIGVuZCA9IDBcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoIFxuICAgICAgJiYgZXF1YWwoYVtpXSwgYltpXSlcbiAgICAgIDsgaSArK1xuICAgIClcbiAgICAgIHN0YXJ0ID0gaSArIDFcblxuICAgIGlmKGEubGVuZ3RoID09PSBzdGFydClcbiAgICAgIHJldHVybiBhLnNsaWNlKClcblxuICAgIGZvcih2YXIgaSA9IDA7ICBpIDwgYS5sZW5ndGggLSBzdGFydCAmJiBpIDwgYi5sZW5ndGggLSBzdGFydFxuICAgICAgJiYgZXF1YWwoYVthLmxlbmd0aCAtIDEgLSBpXSwgYltiLmxlbmd0aCAtIDEgLSBpXSlcbiAgICAgIDsgaSArK1xuICAgIClcbiAgICAgIGVuZCA9IGlcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2UgKGEsIGIpIHtcbiAgICAgIGlmKCFhLmxlbmd0aCB8fCAhYi5sZW5ndGgpIHJldHVybiBbXVxuICAgICAgLy9hdm9pZCBleHBvbmVudGlhbCB0aW1lIGJ5IGNhY2hpbmcgdGhlIHJlc3VsdHNcbiAgICAgIGlmKGNhY2hlW2tleShhLCBiKV0pIHJldHVybiBjYWNoZVtrZXkoYSwgYildXG5cbiAgICAgIGlmKGVxdWFsKGFbMF0sIGJbMF0pKVxuICAgICAgICByZXR1cm4gW2hlYWQoYSldLmNvbmNhdChyZWN1cnNlKHRhaWwoYSksIHRhaWwoYikpKVxuICAgICAgZWxzZSB7IFxuICAgICAgICB2YXIgX2EgPSByZWN1cnNlKHRhaWwoYSksIGIpXG4gICAgICAgIHZhciBfYiA9IHJlY3Vyc2UoYSwgdGFpbChiKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlW2tleShhLGIpXSA9IF9hLmxlbmd0aCA+IF9iLmxlbmd0aCA/IF9hIDogX2IgIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB2YXIgbWlkZGxlQSA9IGEuc2xpY2Uoc3RhcnQsIGEubGVuZ3RoIC0gZW5kKVxuICAgIHZhciBtaWRkbGVCID0gYi5zbGljZShzdGFydCwgYi5sZW5ndGggLSBlbmQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgYS5zbGljZSgwLCBzdGFydCkuY29uY2F0KFxuICAgICAgICByZWN1cnNlKG1pZGRsZUEsIG1pZGRsZUIpXG4gICAgICApLmNvbmNhdChhLnNsaWNlKGEubGVuZ3RoIC0gZW5kKSlcbiAgICApXG4gIH1cblxuICAvLyBnaXZlbiBuIHNlcXVlbmNlcywgY2FsYyB0aGUgbGNzLCBhbmQgdGhlbiBjaHVuayBzdHJpbmdzIGludG8gc3RhYmxlIGFuZCB1bnN0YWJsZSBzZWN0aW9ucy5cbiAgLy8gdW5zdGFibGUgY2h1bmtzIGFyZSBwYXNzZWQgdG8gYnVpbGRcbiAgZXhwb3J0cy5jaHVuayA9XG4gIGZ1bmN0aW9uIChxLCBidWlsZCkge1xuICAgIHZhciBxID0gcS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc2xpY2UoKSB9KVxuICAgIHZhciBsY3MgPSBleHBvcnRzLmxjcy5hcHBseShudWxsLCBxKVxuICAgIHZhciBhbGwgPSBbbGNzXS5jb25jYXQocSlcblxuICAgIGZ1bmN0aW9uIG1hdGNoTGNzIChlKSB7XG4gICAgICBpZihlLmxlbmd0aCAmJiAhbGNzLmxlbmd0aCB8fCAhZS5sZW5ndGggJiYgbGNzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIGZhbHNlIC8vaW5jYXNlIHRoZSBsYXN0IGl0ZW0gaXMgbnVsbFxuICAgICAgcmV0dXJuIGVxdWFsKGxhc3QoZSksIGxhc3QobGNzKSkgfHwgKChlLmxlbmd0aCArIGxjcy5sZW5ndGgpID09PSAwKVxuICAgIH1cblxuICAgIHdoaWxlKGFueShxLCBoYXNMZW5ndGgpKSB7XG4gICAgICAvL2lmIGVhY2ggZWxlbWVudCBpcyBhdCB0aGUgbGNzIHRoZW4gdGhpcyBjaHVuayBpcyBzdGFibGUuXG4gICAgICB3aGlsZShxLmV2ZXJ5KG1hdGNoTGNzKSAmJiBxLmV2ZXJ5KGhhc0xlbmd0aCkpXG4gICAgICAgIGFsbC5mb3JFYWNoKHJldHJlYXQpXG4gICAgICAvL2NvbGxlY3QgdGhlIGNoYW5nZXMgaW4gZWFjaCBhcnJheSB1cHRvIHRoZSBuZXh0IG1hdGNoIHdpdGggdGhlIGxjc1xuICAgICAgdmFyIGMgPSBmYWxzZVxuICAgICAgdmFyIHVuc3RhYmxlID0gcS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IFtdXG4gICAgICAgIHdoaWxlKCFtYXRjaExjcyhlKSkge1xuICAgICAgICAgIGNoYW5nZS51bnNoaWZ0KHJldHJlYXQoZSkpXG4gICAgICAgICAgYyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICB9KVxuICAgICAgaWYoYykgYnVpbGQocVswXS5sZW5ndGgsIHVuc3RhYmxlKVxuICAgIH1cbiAgfVxuXG4gIC8vY2FsY3VsYXRlIGEgZGlmZiB0aGlzIGlzIG9ubHkgdXBkYXRlc1xuICBleHBvcnRzLm9wdGltaXN0aWNEaWZmID1cbiAgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgTSA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgICB2YXIgbSA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgICB2YXIgcGF0Y2ggPSBbXVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBNOyBpKyspXG4gICAgICBpZihhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgIHZhciBjdXIgPSBbaSwwXSwgZGVsZXRlcyA9IDBcbiAgICAgICAgd2hpbGUoYVtpXSAhPT0gYltpXSAmJiBpIDwgbSkge1xuICAgICAgICAgIGN1clsxXSA9ICsrZGVsZXRlc1xuICAgICAgICAgIGN1ci5wdXNoKGJbaSsrXSlcbiAgICAgICAgfVxuICAgICAgICAvL3RoZSByZXN0IGFyZSBkZWxldGVzIG9yIGluc2VydHNcbiAgICAgICAgaWYoaSA+PSBtKSB7XG4gICAgICAgICAgLy90aGUgcmVzdCBhcmUgZGVsZXRlc1xuICAgICAgICAgIGlmKGEubGVuZ3RoID4gYi5sZW5ndGgpXG4gICAgICAgICAgICBjdXJbMV0gKz0gYS5sZW5ndGggLSBiLmxlbmd0aFxuICAgICAgICAgIC8vdGhlIHJlc3QgYXJlIGluc2VydHNcbiAgICAgICAgICBlbHNlIGlmKGEubGVuZ3RoIDwgYi5sZW5ndGgpXG4gICAgICAgICAgICBjdXIgPSBjdXIuY29uY2F0KGIuc2xpY2UoYS5sZW5ndGgpKVxuICAgICAgICB9XG4gICAgICAgIHBhdGNoLnB1c2goY3VyKVxuICAgICAgfVxuXG4gICAgcmV0dXJuIHBhdGNoXG4gIH1cblxuICBleHBvcnRzLmRpZmYgPVxuICBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvcHRpbWlzdGljID0gZXhwb3J0cy5vcHRpbWlzdGljRGlmZihhLCBiKVxuICAgIHZhciBjaGFuZ2VzID0gW11cbiAgICBleHBvcnRzLmNodW5rKFthLCBiXSwgZnVuY3Rpb24gKGluZGV4LCB1bnN0YWJsZSkge1xuICAgICAgdmFyIGRlbCA9IHVuc3RhYmxlLnNoaWZ0KCkubGVuZ3RoXG4gICAgICB2YXIgaW5zZXJ0ID0gdW5zdGFibGUuc2hpZnQoKVxuICAgICAgY2hhbmdlcy5wdXNoKFtpbmRleCwgZGVsXS5jb25jYXQoaW5zZXJ0KSlcbiAgICB9KVxuICAgIHJldHVybiBiZXN0KG9wdGltaXN0aWMsIGNoYW5nZXMpXG4gIH1cblxuICBleHBvcnRzLnBhdGNoID0gZnVuY3Rpb24gKGEsIGNoYW5nZXMsIG11dGF0ZSkge1xuICAgIGlmKG11dGF0ZSAhPT0gdHJ1ZSkgYSA9IGEuc2xpY2UoYSkvL2NvcHkgYVxuICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICBbXS5zcGxpY2UuYXBwbHkoYSwgY2hhbmdlKVxuICAgIH0pXG4gICAgcmV0dXJuIGFcbiAgfVxuXG4gIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29uY2VzdG9yXG4gIC8vIG1lLCBjb25jZXN0b3IsIHlvdS4uLlxuICBleHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gZ2V0QXJncyhhcmd1bWVudHMpXG4gICAgdmFyIHBhdGNoID0gZXhwb3J0cy5kaWZmMyhhcmdzKVxuICAgIHJldHVybiBleHBvcnRzLnBhdGNoKGFyZ3NbMF0sIHBhdGNoKVxuICB9XG5cbiAgZXhwb3J0cy5kaWZmMyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGdldEFyZ3MoYXJndW1lbnRzKVxuICAgIHZhciByID0gW11cbiAgICBleHBvcnRzLmNodW5rKGFyZ3MsIGZ1bmN0aW9uIChpbmRleCwgdW5zdGFibGUpIHtcbiAgICAgIHZhciBtaW5lID0gdW5zdGFibGVbMF1cbiAgICAgIHZhciBpbnNlcnQgPSByZXNvbHZlKHVuc3RhYmxlKVxuICAgICAgaWYoZXF1YWwobWluZSwgaW5zZXJ0KSkgcmV0dXJuIFxuICAgICAgci5wdXNoKFtpbmRleCwgbWluZS5sZW5ndGhdLmNvbmNhdChpbnNlcnQpKSBcbiAgICB9KVxuICAgIHJldHVybiByXG4gIH1cbiAgZXhwb3J0cy5vZGRPbmVPdXQgPVxuICAgIGZ1bmN0aW9uIG9kZE9uZU91dCAoY2hhbmdlcykge1xuICAgICAgY2hhbmdlcyA9IGNoYW5nZXMuc2xpY2UoKVxuICAgICAgLy9wdXQgdGhlIGNvbmNlc3RvciBmaXJzdFxuICAgICAgY2hhbmdlcy51bnNoaWZ0KGNoYW5nZXMuc3BsaWNlKDEsMSlbMF0pXG4gICAgICB2YXIgaSA9IG9kZEVsZW1lbnQoY2hhbmdlcywgZXF1YWwpXG4gICAgICBpZihpID09IDApIC8vIGNvbmNlc3RvciB3YXMgZGlmZmVyZW50LCAnZmFsc2UgY29uZmxpY3QnXG4gICAgICAgIHJldHVybiBjaGFuZ2VzWzFdXG4gICAgICBpZiAofmkpXG4gICAgICAgIHJldHVybiBjaGFuZ2VzW2ldIFxuICAgIH1cbiAgZXhwb3J0cy5pbnNlcnRNZXJnZU92ZXJEZWxldGUgPSBcbiAgICAvL2kndmUgaW1wbGVtZW50ZWQgdGhpcyBhcyBhIHNlcGVyYXRlIHJ1bGUsXG4gICAgLy9iZWNhdXNlIEkgaGFkIHNlY29uZCB0aG91Z2h0cyBhYm91dCB0aGlzLlxuICAgIGZ1bmN0aW9uIGluc2VydE1lcmdlT3ZlckRlbGV0ZSAoY2hhbmdlcykge1xuICAgICAgY2hhbmdlcyA9IGNoYW5nZXMuc2xpY2UoKVxuICAgICAgY2hhbmdlcy5zcGxpY2UoMSwxKS8vIHJlbW92ZSBjb25jZXN0b3JcbiAgICAgIFxuICAgICAgLy9pZiB0aGVyZSBpcyBvbmx5IG9uZSBub24gZW1wdHkgY2hhbmdlIHRoYXRzIG9rYXkuXG4gICAgICAvL2Vsc2UgZnVsbCBjb25maWxjdFxuICAgICAgZm9yICh2YXIgaSA9IDAsIG5vbmVtcHR5OyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYoY2hhbmdlc1tpXS5sZW5ndGgpIFxuICAgICAgICAgIGlmKCFub25lbXB0eSkgbm9uZW1wdHkgPSBjaGFuZ2VzW2ldXG4gICAgICAgICAgZWxzZSByZXR1cm4gLy8gZnVsbCBjb25mbGljdFxuICAgICAgcmV0dXJuIG5vbmVtcHR5XG4gICAgfVxuXG4gIHZhciBydWxlcyA9IChkZXBzICYmIGRlcHMucnVsZXMpIHx8IFtleHBvcnRzLm9kZE9uZU91dCwgZXhwb3J0cy5pbnNlcnRNZXJnZU92ZXJEZWxldGVdXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZSAoY2hhbmdlcykge1xuICAgIHZhciBsID0gcnVsZXMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSBpbiBydWxlcykgeyAvLyBmaXJzdFxuICAgICAgXG4gICAgICB2YXIgYyA9IHJ1bGVzW2ldICYmIHJ1bGVzW2ldKGNoYW5nZXMpXG4gICAgICBpZihjKSByZXR1cm4gY1xuICAgIH1cbiAgICBjaGFuZ2VzLnNwbGljZSgxLDEpIC8vIHJlbW92ZSBjb25jZXN0b3JcbiAgICAvL3JldHVybmluZyB0aGUgY29uZmxpY3RzIGFzIGFuIG9iamVjdCBpcyBhIHJlYWxseSBiYWQgaWRlYSxcbiAgICAvLyBiZWNhdXNlID09IHdpbGwgbm90IGRldGVjdCB0aGV5IGFyZSB0aGUgc2FtZS4gYW5kIGNvbmZsaWN0cyBidWlsZC5cbiAgICAvLyBiZXR0ZXIgdG8gdXNlXG4gICAgLy8gJzw8PDw8PDw8PDw8PDwnXG4gICAgLy8gb2YgY291cnNlLCBpIHdyb3RlIHRoaXMgYmVmb3JlIGkgc3RhcnRlZCBvbiBzbm9iLCBzbyBpIGRpZG4ndCBrbm93IHRoYXQgdGhlbi5cbiAgICAvKnZhciBjb25mbGljdCA9IFsnPj4+Pj4+Pj4+Pj4+Pj4+PiddXG4gICAgd2hpbGUoY2hhbmdlcy5sZW5ndGgpXG4gICAgICBjb25mbGljdCA9IGNvbmZsaWN0LmNvbmNhdChjaGFuZ2VzLnNoaWZ0KCkpLmNvbmNhdCgnPT09PT09PT09PT09JylcbiAgICBjb25mbGljdC5wb3AoKVxuICAgIGNvbmZsaWN0LnB1c2ggICAgICAgICAgKCc8PDw8PDw8PDw8PDw8PDwnKVxuICAgIGNoYW5nZXMudW5zaGlmdCAgICAgICAoJz4+Pj4+Pj4+Pj4+Pj4+PicpXG4gICAgcmV0dXJuIGNvbmZsaWN0Ki9cbiAgICAvL25haCwgYmV0dGVyIGlzIGp1c3QgdG8gdXNlIGFuIGVxdWFsIGNhbiBoYW5kbGUgb2JqZWN0c1xuICAgIHJldHVybiB7Jz8nOiBjaGFuZ2VzfVxuICB9XG4gIHJldHVybiBleHBvcnRzXG59XG5leHBvcnRzKG51bGwsIGV4cG9ydHMpXG4iLCJ2YXIgYWRkTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9hZGQtbGlzdGVuZXIuanNcIilcbnZhciBzZXROb25FbnVtZXJhYmxlID0gcmVxdWlyZShcIi4vbGliL3NldC1ub24tZW51bWVyYWJsZS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwdXRcblxuLy8gYG9icy5wdXRgIGlzIGEgbXV0YWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXJyYXlbaW5kZXhdID0gdmFsdWVgXG4vLyB0aGF0IG11dGF0ZXMgYm90aCBgbGlzdGAgYW5kIHRoZSBpbnRlcm5hbCBgdmFsdWVMaXN0YCB0aGF0XG4vLyBpcyB0aGUgY3VycmVudCB2YWx1ZSBvZiBgb2JzYCBpdHNlbGZcbmZ1bmN0aW9uIHB1dChpbmRleCwgdmFsdWUpIHtcbiAgICB2YXIgb2JzID0gdGhpc1xuICAgIHZhciB2YWx1ZUxpc3QgPSBvYnMoKS5zbGljZSgpXG5cbiAgICB2YXIgb3JpZ2luYWxMZW5ndGggPSB2YWx1ZUxpc3QubGVuZ3RoXG4gICAgdmFsdWVMaXN0W2luZGV4XSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUoKSA6IHZhbHVlXG5cbiAgICBvYnMuX2xpc3RbaW5kZXhdID0gdmFsdWVcblxuICAgIC8vIHJlbW92ZSBwYXN0IHZhbHVlIGxpc3RlbmVyIGlmIHdhcyBvYnNlcnZcbiAgICB2YXIgcmVtb3ZlTGlzdGVuZXIgPSBvYnMuX3JlbW92ZUxpc3RlbmVyc1tpbmRleF1cbiAgICBpZiAocmVtb3ZlTGlzdGVuZXIpe1xuICAgICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgfVxuXG4gICAgLy8gYWRkIGxpc3RlbmVyIHRvIHZhbHVlIGlmIG9ic2VydlxuICAgIG9icy5fcmVtb3ZlTGlzdGVuZXJzW2luZGV4XSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID9cbiAgICAgICAgYWRkTGlzdGVuZXIob2JzLCB2YWx1ZSkgOlxuICAgICAgICBudWxsXG5cbiAgICAvLyBmYWtlIHNwbGljZSBkaWZmXG4gICAgdmFyIHZhbHVlQXJncyA9IGluZGV4IDwgb3JpZ2luYWxMZW5ndGggPyBcbiAgICAgICAgW2luZGV4LCAxLCB2YWx1ZUxpc3RbaW5kZXhdXSA6XG4gICAgICAgIFtpbmRleCwgMCwgdmFsdWVMaXN0W2luZGV4XV1cblxuICAgIHNldE5vbkVudW1lcmFibGUodmFsdWVMaXN0LCBcIl9kaWZmXCIsIFt2YWx1ZUFyZ3NdKVxuXG4gICAgb2JzLl9vYnNlcnZTZXQodmFsdWVMaXN0KVxuICAgIHJldHVybiB2YWx1ZVxufSIsInZhciBhcHBseVBhdGNoID0gcmVxdWlyZShcIi4vYXBwbHktcGF0Y2guanNcIilcbnZhciBzZXROb25FbnVtZXJhYmxlID0gcmVxdWlyZShcIi4vbGliL3NldC1ub24tZW51bWVyYWJsZS5qc1wiKVxudmFyIGFkaWZmID0gcmVxdWlyZShcImFkaWZmXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbmZ1bmN0aW9uIHNldChyYXdMaXN0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0xpc3QpKSByYXdMaXN0ID0gW11cblxuICAgIHZhciBvYnMgPSB0aGlzXG4gICAgdmFyIGNoYW5nZXMgPSBhZGlmZi5kaWZmKG9icy5fbGlzdCwgcmF3TGlzdClcbiAgICB2YXIgdmFsdWVMaXN0ID0gb2JzKCkuc2xpY2UoKVxuXG4gICAgdmFyIHZhbHVlQ2hhbmdlcyA9IGNoYW5nZXMubWFwKGFwcGx5UGF0Y2guYmluZChvYnMsIHZhbHVlTGlzdCkpXG5cbiAgICBzZXROb25FbnVtZXJhYmxlKHZhbHVlTGlzdCwgXCJfZGlmZlwiLCB2YWx1ZUNoYW5nZXMpXG5cbiAgICBvYnMuX29ic2VydlNldCh2YWx1ZUxpc3QpXG4gICAgcmV0dXJuIGNoYW5nZXNcbn1cbiIsInZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuXG52YXIgYWRkTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9hZGQtbGlzdGVuZXIuanNcIilcbnZhciBzZXROb25FbnVtZXJhYmxlID0gcmVxdWlyZShcIi4vbGliL3NldC1ub24tZW51bWVyYWJsZS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcGxpY2VcblxuLy8gYG9icy5zcGxpY2VgIGlzIGEgbXV0YWJsZSBpbXBsZW1lbnRhdGlvbiBvZiBgc3BsaWNlKClgXG4vLyB0aGF0IG11dGF0ZXMgYm90aCBgbGlzdGAgYW5kIHRoZSBpbnRlcm5hbCBgdmFsdWVMaXN0YCB0aGF0XG4vLyBpcyB0aGUgY3VycmVudCB2YWx1ZSBvZiBgb2JzYCBpdHNlbGZcbmZ1bmN0aW9uIHNwbGljZShpbmRleCwgYW1vdW50KSB7XG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgIHZhciB2YWx1ZUxpc3QgPSBvYnMoKS5zbGljZSgpXG5cbiAgICAvLyBnZW5lcmF0ZSBhIGxpc3Qgb2YgYXJncyB0byBtdXRhdGUgdGhlIGludGVybmFsXG4gICAgLy8gbGlzdCBvZiBvbmx5IG9ic1xuICAgIHZhciB2YWx1ZUFyZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdXN0IHVucGFjayBvYnNlcnZhYmxlcyB0aGF0IHdlIGFyZSBhZGRpbmdcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUoKSA6IHZhbHVlXG4gICAgfSlcblxuICAgIHZhbHVlTGlzdC5zcGxpY2UuYXBwbHkodmFsdWVMaXN0LCB2YWx1ZUFyZ3MpXG4gICAgLy8gd2UgcmVtb3ZlIHRoZSBvYnNlcnZzIHRoYXQgd2UgcmVtb3ZlXG4gICAgdmFyIHJlbW92ZWQgPSBvYnMuX2xpc3Quc3BsaWNlLmFwcGx5KG9icy5fbGlzdCwgYXJncylcblxuICAgIHZhciBleHRyYVJlbW92ZUxpc3RlbmVycyA9IGFyZ3Muc2xpY2UoMikubWFwKGZ1bmN0aW9uIChvYnNlcnYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnNlcnYgPT09IFwiZnVuY3Rpb25cIiA/XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihvYnMsIG9ic2VydikgOlxuICAgICAgICAgICAgbnVsbFxuICAgIH0pXG4gICAgZXh0cmFSZW1vdmVMaXN0ZW5lcnMudW5zaGlmdChhcmdzWzBdLCBhcmdzWzFdKVxuICAgIHZhciByZW1vdmVkTGlzdGVuZXJzID0gb2JzLl9yZW1vdmVMaXN0ZW5lcnMuc3BsaWNlXG4gICAgICAgIC5hcHBseShvYnMuX3JlbW92ZUxpc3RlbmVycywgZXh0cmFSZW1vdmVMaXN0ZW5lcnMpXG5cbiAgICByZW1vdmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZU9ic2Vydkxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChyZW1vdmVPYnNlcnZMaXN0ZW5lcikge1xuICAgICAgICAgICAgcmVtb3ZlT2JzZXJ2TGlzdGVuZXIoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHNldE5vbkVudW1lcmFibGUodmFsdWVMaXN0LCBcIl9kaWZmXCIsIFt2YWx1ZUFyZ3NdKVxuXG4gICAgb2JzLl9vYnNlcnZTZXQodmFsdWVMaXN0KVxuICAgIHJldHVybiByZW1vdmVkXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zYWN0aW9uXG5cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uIChmdW5jKSB7XG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgcmF3TGlzdCA9IG9icy5fbGlzdC5zbGljZSgpXG5cbiAgICBpZiAoZnVuYyhyYXdMaXN0KSAhPT0gZmFsc2UpeyAvLyBhbGxvdyBjYW5jZWxcbiAgICAgICAgcmV0dXJuIG9icy5zZXQocmF3TGlzdClcbiAgICB9XG5cbn0iLCJ2YXIgT2JzZXJ2ID0gcmVxdWlyZShcIm9ic2VydlwiKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZFwiKVxuXG52YXIgYmxhY2tMaXN0ID0ge1xuICAgIFwibGVuZ3RoXCI6IFwiQ2xhc2hlcyB3aXRoIGBGdW5jdGlvbi5wcm90b3R5cGUubGVuZ3RoYC5cXG5cIixcbiAgICBcIm5hbWVcIjogXCJDbGFzaGVzIHdpdGggYEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lYC5cXG5cIixcbiAgICBcIl9kaWZmXCI6IFwiX2RpZmYgaXMgcmVzZXJ2ZWQga2V5IG9mIG9ic2Vydi1zdHJ1Y3QuXFxuXCIsXG4gICAgXCJfdHlwZVwiOiBcIl90eXBlIGlzIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtc3RydWN0LlxcblwiLFxuICAgIFwiX3ZlcnNpb25cIjogXCJfdmVyc2lvbiBpcyByZXNlcnZlZCBrZXkgb2Ygb2JzZXJ2LXN0cnVjdC5cXG5cIlxufVxudmFyIE5PX1RSQU5TQUNUSU9OID0ge31cblxuZnVuY3Rpb24gc2V0Tm9uRW51bWVyYWJsZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pXG59XG5cbi8qIE9ic2VydlN0cnVjdCA6PSAoT2JqZWN0PFN0cmluZywgT2JzZXJ2PFQ+PikgPT5cbiAgICBPYmplY3Q8U3RyaW5nLCBPYnNlcnY8VD4+ICZcbiAgICAgICAgT2JzZXJ2PE9iamVjdDxTdHJpbmcsIFQ+ICYge1xuICAgICAgICAgICAgX2RpZmY6IE9iamVjdDxTdHJpbmcsIEFueT5cbiAgICAgICAgfT5cblxuKi9cbm1vZHVsZS5leHBvcnRzID0gT2JzZXJ2U3RydWN0XG5cbmZ1bmN0aW9uIE9ic2VydlN0cnVjdChzdHJ1Y3QpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN0cnVjdClcblxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB7fVxuICAgIHZhciBjdXJyZW50VHJhbnNhY3Rpb24gPSBOT19UUkFOU0FDVElPTlxuICAgIHZhciBuZXN0ZWRUcmFuc2FjdGlvbiA9IE5PX1RSQU5TQUNUSU9OXG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoYmxhY2tMaXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBjcmVhdGUgYW4gb2JzZXJ2LXN0cnVjdCBcIiArXG4gICAgICAgICAgICAgICAgXCJ3aXRoIGEga2V5IG5hbWVkICdcIiArIGtleSArIFwiJy5cXG5cIiArXG4gICAgICAgICAgICAgICAgYmxhY2tMaXN0W2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9ic2VydiA9IHN0cnVjdFtrZXldXG4gICAgICAgIGluaXRpYWxTdGF0ZVtrZXldID0gdHlwZW9mIG9ic2VydiA9PT0gXCJmdW5jdGlvblwiID9cbiAgICAgICAgICAgIG9ic2VydigpIDogb2JzZXJ2XG4gICAgfSlcblxuICAgIHZhciBvYnMgPSBPYnNlcnYoaW5pdGlhbFN0YXRlKVxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBvYnNlcnYgPSBzdHJ1Y3Rba2V5XVxuICAgICAgICBvYnNba2V5XSA9IG9ic2VydlxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG9ic2VydihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmVzdGVkVHJhbnNhY3Rpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGV4dGVuZChvYnMoKSlcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHt9XG4gICAgICAgICAgICAgICAgZGlmZltrZXldID0gdmFsdWUgJiYgdmFsdWUuX2RpZmYgP1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5fZGlmZiA6IHZhbHVlXG5cbiAgICAgICAgICAgICAgICBzZXROb25FbnVtZXJhYmxlKHN0YXRlLCBcIl9kaWZmXCIsIGRpZmYpXG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zYWN0aW9uID0gc3RhdGVcbiAgICAgICAgICAgICAgICBvYnMuc2V0KHN0YXRlKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2FjdGlvbiA9IE5PX1RSQU5TQUNUSU9OXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbiAgICB2YXIgX3NldCA9IG9icy5zZXRcbiAgICBvYnMuc2V0ID0gZnVuY3Rpb24gdHJhY2tEaWZmKHZhbHVlKSB7XG4gICAgICAgIGlmIChjdXJyZW50VHJhbnNhY3Rpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3NldCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGV4dGVuZCh2YWx1ZSlcbiAgICAgICAgc2V0Tm9uRW51bWVyYWJsZShuZXdTdGF0ZSwgXCJfZGlmZlwiLCB2YWx1ZSlcbiAgICAgICAgX3NldChuZXdTdGF0ZSlcbiAgICB9XG5cbiAgICBvYnMoZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG4gICAgICAgIGlmIChjdXJyZW50VHJhbnNhY3Rpb24gPT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ID0gc3RydWN0W2tleV1cbiAgICAgICAgICAgIHZhciBuZXdPYnNlcnZWYWx1ZSA9IG5ld1N0YXRlW2tleV1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnYgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIG9ic2VydigpICE9PSBuZXdPYnNlcnZWYWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbmVzdGVkVHJhbnNhY3Rpb24gPSBuZXdPYnNlcnZWYWx1ZVxuICAgICAgICAgICAgICAgIG9ic2Vydi5zZXQobmV3U3RhdGVba2V5XSlcbiAgICAgICAgICAgICAgICBuZXN0ZWRUcmFuc2FjdGlvbiA9IE5PX1RSQU5TQUNUSU9OXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIG9icy5fdHlwZSA9IFwib2JzZXJ2LXN0cnVjdFwiXG4gICAgb2JzLl92ZXJzaW9uID0gXCI1XCJcblxuICAgIHJldHVybiBvYnNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgT2JzZXJ2ID0gcmVxdWlyZSgnb2JzZXJ2JylcbnZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5cbnZhciBOT19UUkFOU0FDVElPTiA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gT2JzZXJ2VmFyaGFzaFxuXG5mdW5jdGlvbiBPYnNlcnZWYXJoYXNoIChoYXNoLCBjcmVhdGVWYWx1ZSkge1xuICBjcmVhdGVWYWx1ZSA9IGNyZWF0ZVZhbHVlIHx8IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiB9XG5cbiAgdmFyIGluaXRpYWxTdGF0ZSA9IHt9XG4gIHZhciBjdXJyZW50VHJhbnNhY3Rpb24gPSBOT19UUkFOU0FDVElPTlxuXG4gIHZhciBvYnMgPSBPYnNlcnYoaW5pdGlhbFN0YXRlKVxuICBzZXROb25FbnVtZXJhYmxlKG9icywgJ19yZW1vdmVMaXN0ZW5lcnMnLCB7fSlcblxuICBzZXROb25FbnVtZXJhYmxlKG9icywgJ3NldCcsIG9icy5zZXQpXG4gIHNldE5vbkVudW1lcmFibGUob2JzLCAnZ2V0JywgZ2V0LmJpbmQob2JzKSlcbiAgc2V0Tm9uRW51bWVyYWJsZShvYnMsICdwdXQnLCBwdXQuYmluZChvYnMsIGNyZWF0ZVZhbHVlLCBjdXJyZW50VHJhbnNhY3Rpb24pKVxuICBzZXROb25FbnVtZXJhYmxlKG9icywgJ2RlbGV0ZScsIGRlbC5iaW5kKG9icykpXG5cbiAgZm9yICh2YXIga2V5IGluIGhhc2gpIHtcbiAgICBvYnNba2V5XSA9IHR5cGVvZiBoYXNoW2tleV0gPT09ICdmdW5jdGlvbicgP1xuICAgICAgaGFzaFtrZXldIDogY3JlYXRlVmFsdWUoaGFzaFtrZXldLCBrZXkpXG5cbiAgICBpZiAoaXNGbihvYnNba2V5XSkpIHtcbiAgICAgIG9icy5fcmVtb3ZlTGlzdGVuZXJzW2tleV0gPSBvYnNba2V5XSh3YXRjaChvYnMsIGtleSwgY3VycmVudFRyYW5zYWN0aW9uKSlcbiAgICB9XG4gIH1cblxuICB2YXIgbmV3U3RhdGUgPSB7fVxuICBmb3IgKGtleSBpbiBoYXNoKSB7XG4gICAgdmFyIG9ic2VydiA9IG9ic1trZXldXG4gICAgY2hlY2tLZXkoa2V5KVxuICAgIG5ld1N0YXRlW2tleV0gPSBpc0ZuKG9ic2VydikgPyBvYnNlcnYoKSA6IG9ic2VydlxuICB9XG4gIG9icy5zZXQobmV3U3RhdGUpXG5cbiAgb2JzKGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuICAgIGlmIChjdXJyZW50VHJhbnNhY3Rpb24gPT09IG5ld1N0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gaGFzaCkge1xuICAgICAgdmFyIG9ic2VydiA9IGhhc2hba2V5XVxuXG4gICAgICBpZiAoaXNGbihvYnNlcnYpICYmIG9ic2VydigpICE9PSBuZXdTdGF0ZVtrZXldKSB7XG4gICAgICAgIG9ic2Vydi5zZXQobmV3U3RhdGVba2V5XSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9ic1xufVxuXG4vLyBhY2Nlc3MgYW5kIG11dGF0ZVxuZnVuY3Rpb24gZ2V0IChrZXkpIHtcbiAgcmV0dXJuIHRoaXNba2V5XVxufVxuXG5mdW5jdGlvbiBwdXQgKGNyZWF0ZVZhbHVlLCBjdXJyZW50VHJhbnNhY3Rpb24sIGtleSwgdmFsKSB7XG4gIGNoZWNrS2V5KGtleSlcblxuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCB2YXJoYXNoLnB1dChrZXksIHVuZGVmaW5lZCkuJylcbiAgfVxuXG4gIHZhciBvYnNlcnYgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID9cbiAgICB2YWwgOiBjcmVhdGVWYWx1ZSh2YWwsIGtleSlcbiAgdmFyIHN0YXRlID0gZXh0ZW5kKHRoaXMoKSlcblxuICBzdGF0ZVtrZXldID0gaXNGbihvYnNlcnYpID8gb2JzZXJ2KCkgOiBvYnNlcnZcblxuICBpZiAoaXNGbih0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSkpIHtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSgpXG4gIH1cblxuICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSA9IGlzRm4ob2JzZXJ2KSA/XG4gICAgb2JzZXJ2KHdhdGNoKHRoaXMsIGtleSwgY3VycmVudFRyYW5zYWN0aW9uKSkgOiBudWxsXG5cbiAgc2V0Tm9uRW51bWVyYWJsZShzdGF0ZSwgJ19kaWZmJywgZGlmZihrZXksIHN0YXRlW2tleV0pKVxuXG4gIHRoaXNba2V5XSA9IG9ic2VydlxuICB0aGlzLnNldChzdGF0ZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBkZWwgKGtleSkge1xuICB2YXIgc3RhdGUgPSBleHRlbmQodGhpcygpKVxuICBpZiAoaXNGbih0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSkpIHtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSgpXG4gIH1cblxuICBkZWxldGUgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzW2tleV1cbiAgZGVsZXRlIHN0YXRlW2tleV1cbiAgZGVsZXRlIHRoaXNba2V5XVxuXG4gIHNldE5vbkVudW1lcmFibGUoc3RhdGUsICdfZGlmZicsIGRpZmYoa2V5LCB1bmRlZmluZWQpKVxuICB0aGlzLnNldChzdGF0ZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBwcm9jZXNzaW5nXG5mdW5jdGlvbiB3YXRjaCAob2JzLCBrZXksIGN1cnJlbnRUcmFuc2FjdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHN0YXRlID0gZXh0ZW5kKG9icygpKVxuICAgIHN0YXRlW2tleV0gPSB2YWx1ZVxuXG4gICAgc2V0Tm9uRW51bWVyYWJsZShzdGF0ZSwgJ19kaWZmJywgZGlmZihrZXksIHZhbHVlKSlcbiAgICBjdXJyZW50VHJhbnNhY3Rpb24gPSBzdGF0ZVxuICAgIG9icy5zZXQoc3RhdGUpXG4gICAgY3VycmVudFRyYW5zYWN0aW9uID0gTk9fVFJBTlNBQ1RJT05cbiAgfVxufVxuXG5mdW5jdGlvbiBkaWZmIChrZXksIHZhbHVlKSB7XG4gIHZhciBvYmogPSB7fVxuICBvYmpba2V5XSA9IHZhbHVlICYmIHZhbHVlLl9kaWZmID8gdmFsdWUuX2RpZmYgOiB2YWx1ZVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGlzRm4gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBzZXROb25FbnVtZXJhYmxlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gIH0pXG59XG5cbi8vIGVycm9yc1xudmFyIGJsYWNrbGlzdCA9IHtcbiAgbmFtZTogJ0NsYXNoZXMgd2l0aCBgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWVgLicsXG4gIGdldDogJ2dldCBpcyBhIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtdmFyaGFzaCBtZXRob2QnLFxuICBwdXQ6ICdwdXQgaXMgYSByZXNlcnZlZCBrZXkgb2Ygb2JzZXJ2LXZhcmhhc2ggbWV0aG9kJyxcbiAgJ2RlbGV0ZSc6ICdkZWxldGUgaXMgYSByZXNlcnZlZCBrZXkgb2Ygb2JzZXJ2LXZhcmhhc2ggbWV0aG9kJyxcbiAgX2RpZmY6ICdfZGlmZiBpcyBhIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtdmFyaGFzaCBtZXRob2QnLFxuICBfcmVtb3ZlTGlzdGVuZXJzOiAnX3JlbW92ZUxpc3RlbmVycyBpcyBhIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtdmFyaGFzaCdcbn1cblxuZnVuY3Rpb24gY2hlY2tLZXkgKGtleSkge1xuICBpZiAoIWJsYWNrbGlzdFtrZXldKSByZXR1cm5cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdjYW5ub3QgY3JlYXRlIGFuIG9ic2Vydi12YXJoYXNoIHdpdGgga2V5IGAnICsga2V5ICsgJ2AuICcgKyBibGFja2xpc3Rba2V5XVxuICApXG59XG4iLCJ2YXIgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCIuL2luZGV4LmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcHV0ZWRcblxuZnVuY3Rpb24gY29tcHV0ZWQob2JzZXJ2YWJsZXMsIGxhbWJkYSkge1xuICAgIHZhciB2YWx1ZXMgPSBvYnNlcnZhYmxlcy5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIG8oKVxuICAgIH0pXG4gICAgdmFyIHJlc3VsdCA9IE9ic2VydmFibGUobGFtYmRhLmFwcGx5KG51bGwsIHZhbHVlcykpXG5cbiAgICBvYnNlcnZhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChvLCBpbmRleCkge1xuICAgICAgICBvKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICByZXN1bHQuc2V0KGxhbWJkYS5hcHBseShudWxsLCB2YWx1ZXMpKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9ic2VydmFibGVcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZSh2YWx1ZSkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBbXVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZVxuXG4gICAgb2JzZXJ2YWJsZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YWx1ZSA9IHZcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIGYodilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2JzZXJ2YWJsZVxuXG4gICAgZnVuY3Rpb24gb2JzZXJ2YWJsZShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2F0Y2hcblxuZnVuY3Rpb24gd2F0Y2gob2JzZXJ2YWJsZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgcmVtb3ZlID0gb2JzZXJ2YWJsZShsaXN0ZW5lcilcbiAgICBsaXN0ZW5lcihvYnNlcnZhYmxlKCkpXG4gICAgcmV0dXJuIHJlbW92ZVxufVxuIiwidmFyIERlbGVnYXRvciA9IHJlcXVpcmUoJ2RvbS1kZWxlZ2F0b3InKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudFxuXG5mdW5jdGlvbiBCYXNlRXZlbnQobGFtYmRhKSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlcjtcblxuICAgIGZ1bmN0aW9uIEV2ZW50SGFuZGxlcihmbiwgZGF0YSwgb3B0cykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgICAgICAgIGZuOiBmbixcbiAgICAgICAgICAgIGRhdGE6IGRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEgOiB7fSxcbiAgICAgICAgICAgIG9wdHM6IG9wdHMgfHwge30sXG4gICAgICAgICAgICBoYW5kbGVFdmVudDogaGFuZGxlRXZlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbiAmJiBmbi50eXBlID09PSAnZG9tLWRlbGVnYXRvci1oYW5kbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gRGVsZWdhdG9yLnRyYW5zZm9ybUhhbmRsZShmbixcbiAgICAgICAgICAgICAgICBoYW5kbGVMYW1iZGEuYmluZChoYW5kbGVyKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxhbWJkYShldiwgYnJvYWRjYXN0KSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuc3RhcnRQcm9wYWdhdGlvbiAmJiBldi5zdGFydFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldi5zdGFydFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFtYmRhLmNhbGwodGhpcywgZXYsIGJyb2FkY2FzdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFdmVudChldikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgICAgICBpZiAoc2VsZi5vcHRzLnN0YXJ0UHJvcGFnYXRpb24gJiYgZXYuc3RhcnRQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXYuc3RhcnRQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cblxuICAgICAgICBsYW1iZGEuY2FsbChzZWxmLCBldiwgYnJvYWRjYXN0KVxuXG4gICAgICAgIGZ1bmN0aW9uIGJyb2FkY2FzdCh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mbih2YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mbi53cml0ZSh2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZ2V0Rm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEtc2V0L2VsZW1lbnQnKVxuXG52YXIgQmFzZUV2ZW50ID0gcmVxdWlyZSgnLi9iYXNlLWV2ZW50LmpzJylcblxudmFyIFZBTElEX0NIQU5HRSA9IFsnY2hlY2tib3gnLCAnZmlsZScsICdzZWxlY3QtbXVsdGlwbGUnLCAnc2VsZWN0LW9uZSddO1xudmFyIFZBTElEX0lOUFVUID0gWydjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJyxcbiAgICAnbW9udGgnLCAnbnVtYmVyJywgJ3Bhc3N3b3JkJywgJ3JhbmdlJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd0aW1lJyxcbiAgICAndXJsJywgJ3dlZWsnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnQoY2hhbmdlTGFtYmRhKTtcblxuZnVuY3Rpb24gY2hhbmdlTGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXYudGFyZ2V0XG5cbiAgICB2YXIgaXNWYWxpZCA9XG4gICAgICAgIChldi50eXBlID09PSAnaW5wdXQnICYmIFZBTElEX0lOUFVULmluZGV4T2YodGFyZ2V0LnR5cGUpICE9PSAtMSkgfHxcbiAgICAgICAgKGV2LnR5cGUgPT09ICdjaGFuZ2UnICYmIFZBTElEX0NIQU5HRS5pbmRleE9mKHRhcmdldC50eXBlKSAhPT0gLTEpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIGlmIChldi5zdGFydFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldi5zdGFydFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBnZXRGb3JtRGF0YShldi5jdXJyZW50VGFyZ2V0KVxuICAgIHZhciBkYXRhID0gZXh0ZW5kKHZhbHVlLCB0aGlzLmRhdGEpXG5cbiAgICBicm9hZGNhc3QoZGF0YSlcbn1cbiIsInZhciBCYXNlRXZlbnQgPSByZXF1aXJlKCcuL2Jhc2UtZXZlbnQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnQoY2xpY2tMYW1iZGEpO1xuXG5mdW5jdGlvbiBjbGlja0xhbWJkYShldiwgYnJvYWRjYXN0KSB7XG4gICAgdmFyIG9wdHMgPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoIW9wdHMuY3RybCAmJiBldi5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW9wdHMubWV0YSAmJiBldi5tZXRhS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW9wdHMucmlnaHRDbGljayAmJiBldi53aGljaCA9PT0gMikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5wcmV2ZW50RGVmYXVsdCAmJiBldi5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdCh0aGlzLmRhdGEpO1xufVxuIiwidmFyIEJhc2VFdmVudCA9IHJlcXVpcmUoJy4vYmFzZS1ldmVudC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudChldmVudExhbWJkYSk7XG5cbmZ1bmN0aW9uIGV2ZW50TGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICBicm9hZGNhc3QodGhpcy5kYXRhKTtcbn1cbiIsInZhciBCYXNlRXZlbnQgPSByZXF1aXJlKCcuL2Jhc2UtZXZlbnQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnQoa2V5TGFtYmRhKTtcblxuZnVuY3Rpb24ga2V5TGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5vcHRzLmtleTtcblxuICAgIGlmIChldi5rZXlDb2RlID09PSBrZXkpIHtcbiAgICAgICAgYnJvYWRjYXN0KHRoaXMuZGF0YSk7XG4gICAgfVxufVxuIiwidmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gaXRlcmF0aXZlbHlXYWxrXG5cbmZ1bmN0aW9uIGl0ZXJhdGl2ZWx5V2Fsayhub2RlcywgY2IpIHtcbiAgICBpZiAoISgnbGVuZ3RoJyBpbiBub2RlcykpIHtcbiAgICAgICAgbm9kZXMgPSBbbm9kZXNdXG4gICAgfVxuICAgIFxuICAgIG5vZGVzID0gc2xpY2UuY2FsbChub2RlcylcblxuICAgIHdoaWxlKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzLnNoaWZ0KCksXG4gICAgICAgICAgICByZXQgPSBjYihub2RlKVxuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMgJiYgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbm9kZXMgPSBzbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcykuY29uY2F0KG5vZGVzKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIHdhbGsgPSByZXF1aXJlKCdkb20td2FsaycpXG5cbnZhciBGb3JtRGF0YSA9IHJlcXVpcmUoJy4vaW5kZXguanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZvcm1EYXRhXG5cbmZ1bmN0aW9uIGJ1aWxkRWxlbXMocm9vdEVsZW0pIHtcbiAgICB2YXIgaGFzaCA9IHt9XG4gICAgaWYgKHJvb3RFbGVtLm5hbWUpIHtcbiAgICBcdGhhc2hbcm9vdEVsZW0ubmFtZV0gPSByb290RWxlbVxuICAgIH1cblxuICAgIHdhbGsocm9vdEVsZW0sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubmFtZSkge1xuICAgICAgICAgICAgaGFzaFtjaGlsZC5uYW1lXSA9IGNoaWxkXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICByZXR1cm4gaGFzaFxufVxuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YShyb290RWxlbSkge1xuICAgIHZhciBlbGVtZW50cyA9IGJ1aWxkRWxlbXMocm9vdEVsZW0pXG5cbiAgICByZXR1cm4gRm9ybURhdGEoZWxlbWVudHMpXG59XG4iLCIvKmpzaGludCBtYXhjb21wbGV4aXR5OiAxMCovXG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybURhdGFcblxuLy9UT0RPOiBNYXNzaXZlIHNwZWM6IGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2Fzc29jaWF0aW9uLW9mLWNvbnRyb2xzLWFuZC1mb3Jtcy5odG1sI2NvbnN0cnVjdGluZy1mb3JtLWRhdGEtc2V0XG5mdW5jdGlvbiBGb3JtRGF0YShlbGVtZW50cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgZWxlbSA9IGVsZW1lbnRzW2tleV1cblxuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlT2ZFbGVtZW50KGVsZW0pXG5cbiAgICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxufVxuXG5mdW5jdGlvbiB2YWx1ZU9mRWxlbWVudChlbGVtKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0oKVxuICAgIH0gZWxzZSBpZiAoY29udGFpbnNSYWRpbyhlbGVtKSkge1xuICAgICAgICB2YXIgZWxlbXMgPSB0b0xpc3QoZWxlbSlcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBlbGVtcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmNoZWNrZWRcbiAgICAgICAgfSlbMF0gfHwgbnVsbFxuXG4gICAgICAgIHJldHVybiBjaGVja2VkID8gY2hlY2tlZC52YWx1ZSA6IG51bGxcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ubWFwKHZhbHVlT2ZFbGVtZW50KS5maWx0ZXIoZmlsdGVyTnVsbClcbiAgICB9IGVsc2UgaWYgKGVsZW0udGFnTmFtZSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gRm9ybURhdGEoZWxlbSlcbiAgICB9IGVsc2UgaWYgKGVsZW0udGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGlzQ2hlY2tlZChlbGVtKSkge1xuICAgICAgICBpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uY2hlY2tlZCA/IGVsZW0udmFsdWUgOiBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jaGVja2VkXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW0udGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICAgIHJldHVybiBlbGVtLnZhbHVlXG4gICAgfSBlbHNlIGlmIChlbGVtLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIikge1xuICAgICAgICByZXR1cm4gZWxlbS52YWx1ZVxuICAgIH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICAgIHJldHVybiBlbGVtLnZhbHVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NoZWNrZWQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLnR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBlbGVtLnR5cGUgPT09IFwicmFkaW9cIlxufVxuXG5mdW5jdGlvbiBjb250YWluc1JhZGlvKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLnRhZ05hbWUgfHwgdmFsdWUubm9kZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIGVsZW1zID0gdG9MaXN0KHZhbHVlKVxuXG4gICAgcmV0dXJuIGVsZW1zLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0udGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW0udHlwZSA9PT0gXCJyYWRpb1wiXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9MaXN0KHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKHByb3AsIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBwcm9wKHgpIHtcbiAgICByZXR1cm4gdGhpc1t4XVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJOdWxsKHZhbCkge1xuICAgIHJldHVybiB2YWwgIT09IG51bGxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaGFzS2V5c1xuXG5mdW5jdGlvbiBoYXNLZXlzKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UgIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBzb3VyY2UgPT09IFwib2JqZWN0XCIgfHxcbiAgICAgICAgdHlwZW9mIHNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKVxufVxuIiwidmFyIGhhc0tleXMgPSByZXF1aXJlKFwiLi9oYXMta2V5c1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgaWYgKCFoYXNLZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGdldEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhLXNldC9lbGVtZW50JylcblxudmFyIEJhc2VFdmVudCA9IHJlcXVpcmUoJy4vYmFzZS1ldmVudC5qcycpO1xuXG52YXIgRU5URVIgPSAxM1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudChzdWJtaXRMYW1iZGEpO1xuXG5mdW5jdGlvbiBzdWJtaXRMYW1iZGEoZXYsIGJyb2FkY2FzdCkge1xuICAgIHZhciB0YXJnZXQgPSBldi50YXJnZXRcblxuICAgIHZhciBpc1ZhbGlkID1cbiAgICAgICAgKGV2LnR5cGUgPT09ICdzdWJtaXQnICYmIHRhcmdldC50YWdOYW1lID09PSAnRk9STScpIHx8XG4gICAgICAgIChldi50eXBlID09PSAnY2xpY2snICYmIHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykgfHxcbiAgICAgICAgKGV2LnR5cGUgPT09ICdjbGljaycgJiYgdGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnKSB8fFxuICAgICAgICAoXG4gICAgICAgICAgICAodGFyZ2V0LnR5cGUgPT09ICd0ZXh0JykgJiZcbiAgICAgICAgICAgIChldi5rZXlDb2RlID09PSBFTlRFUiAmJiBldi50eXBlID09PSAna2V5ZG93bicpXG4gICAgICAgIClcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBpZiAoZXYuc3RhcnRQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXYuc3RhcnRQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gZ2V0Rm9ybURhdGEoZXYuY3VycmVudFRhcmdldClcbiAgICB2YXIgZGF0YSA9IGV4dGVuZCh2YWx1ZSwgdGhpcy5kYXRhKVxuXG4gICAgaWYgKGV2LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGRhdGEpO1xufVxuIiwidmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBnZXRGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YS1zZXQvZWxlbWVudCcpXG5cbnZhciBCYXNlRXZlbnQgPSByZXF1aXJlKCcuL2Jhc2UtZXZlbnQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnQodmFsdWVMYW1iZGEpO1xuXG5mdW5jdGlvbiB2YWx1ZUxhbWJkYShldiwgYnJvYWRjYXN0KSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0Rm9ybURhdGEoZXYuY3VycmVudFRhcmdldClcbiAgICB2YXIgZGF0YSA9IGV4dGVuZCh2YWx1ZSwgdGhpcy5kYXRhKVxuXG4gICAgYnJvYWRjYXN0KGRhdGEpO1xufVxuIiwiZnVuY3Rpb24gVGh1bmsoZm4sIGFyZ3MsIGtleSwgZXFBcmdzKSB7XHJcbiAgICB0aGlzLmZuID0gZm47XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLmVxQXJncyA9IGVxQXJncztcclxufVxyXG5cclxuVGh1bmsucHJvdG90eXBlLnR5cGUgPSAnVGh1bmsnO1xyXG5UaHVuay5wcm90b3R5cGUucmVuZGVyID0gcmVuZGVyO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFRodW5rO1xyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlKGN1cnJlbnQsIHByZXZpb3VzKSB7XHJcbiAgICBpZiAoIWN1cnJlbnQgfHwgIXByZXZpb3VzIHx8IGN1cnJlbnQuZm4gIT09IHByZXZpb3VzLmZuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhcmdzID0gY3VycmVudC5hcmdzO1xyXG4gICAgdmFyIHBhcmdzID0gcHJldmlvdXMuYXJncztcclxuXHJcbiAgICByZXR1cm4gIWN1cnJlbnQuZXFBcmdzKGNhcmdzLCBwYXJncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihwcmV2aW91cykge1xyXG4gICAgaWYgKHNob3VsZFVwZGF0ZSh0aGlzLCBwcmV2aW91cykpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbi5hcHBseShudWxsLCB0aGlzLmFyZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcHJldmlvdXMudm5vZGU7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIFBhcnRpYWwgPSByZXF1aXJlKCcuL3BhcnRpYWwnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGFydGlhbCgpO1xyXG4iLCJ2YXIgc2hhbGxvd0VxID0gcmVxdWlyZSgnLi9zaGFsbG93LWVxJyk7XG52YXIgVGh1bmsgPSByZXF1aXJlKCcuL2ltbXV0YWJsZS10aHVuaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBhcnRpYWw7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWwoZXEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcGFydGlhbChmbikge1xuICAgICAgICB2YXIgYXJncyA9IGNvcHlPdmVyKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBmaXJzdEFyZyA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgdmFyIGVxQXJncyA9IGVxIHx8IHNoYWxsb3dFcTtcblxuICAgICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCdrZXknIGluIGZpcnN0QXJnKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gZmlyc3RBcmcua2V5O1xuICAgICAgICAgICAgfSBlbHNlIGlmICgnaWQnIGluIGZpcnN0QXJnKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gZmlyc3RBcmcuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFRodW5rKGZuLCBhcmdzLCBrZXksIGVxQXJncyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29weU92ZXIobGlzdCwgb2Zmc2V0KSB7XG4gICAgdmFyIG5ld0xpc3QgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IG9mZnNldDsgaS0tKSB7XG4gICAgICAgIG5ld0xpc3RbaSAtIG9mZnNldF0gPSBsaXN0W2ldO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TGlzdDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxO1xyXG5cclxuZnVuY3Rpb24gc2hhbGxvd0VxKGN1cnJlbnRBcmdzLCBwcmV2aW91c0FyZ3MpIHtcclxuICAgIGlmIChjdXJyZW50QXJncy5sZW5ndGggPT09IDAgJiYgcHJldmlvdXNBcmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50QXJncy5sZW5ndGggIT09IHByZXZpb3VzQXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbiA9IGN1cnJlbnRBcmdzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBcmdzW2ldICE9PSBwcmV2aW91c0FyZ3NbaV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCIvKiFcbiAqIENyb3NzLUJyb3dzZXIgU3BsaXQgMS4xLjFcbiAqIENvcHlyaWdodCAyMDA3LTIwMTIgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+XG4gKiBBdmFpbGFibGUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBFQ01BU2NyaXB0IGNvbXBsaWFudCwgdW5pZm9ybSBjcm9zcy1icm93c2VyIHNwbGl0IG1ldGhvZFxuICovXG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyB1c2luZyBhIHJlZ2V4IG9yIHN0cmluZyBzZXBhcmF0b3IuIE1hdGNoZXMgb2YgdGhlXG4gKiBzZXBhcmF0b3IgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IGFycmF5LiBIb3dldmVyLCBpZiBgc2VwYXJhdG9yYCBpcyBhIHJlZ2V4IHRoYXQgY29udGFpbnNcbiAqIGNhcHR1cmluZyBncm91cHMsIGJhY2tyZWZlcmVuY2VzIGFyZSBzcGxpY2VkIGludG8gdGhlIHJlc3VsdCBlYWNoIHRpbWUgYHNlcGFyYXRvcmAgaXMgbWF0Y2hlZC5cbiAqIEZpeGVzIGJyb3dzZXIgYnVncyBjb21wYXJlZCB0byB0aGUgbmF0aXZlIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBhbmQgY2FuIGJlIHVzZWQgcmVsaWFibHlcbiAqIGNyb3NzLWJyb3dzZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byBzcGxpdC5cbiAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gc2VwYXJhdG9yIFJlZ2V4IG9yIHN0cmluZyB0byB1c2UgZm9yIHNlcGFyYXRpbmcgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGltaXRdIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIGluY2x1ZGUgaW4gdGhlIHJlc3VsdCBhcnJheS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2Ygc3Vic3RyaW5ncy5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQmFzaWMgdXNlXG4gKiBzcGxpdCgnYSBiIGMgZCcsICcgJyk7XG4gKiAvLyAtPiBbJ2EnLCAnYicsICdjJywgJ2QnXVxuICpcbiAqIC8vIFdpdGggbGltaXRcbiAqIHNwbGl0KCdhIGIgYyBkJywgJyAnLCAyKTtcbiAqIC8vIC0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBCYWNrcmVmZXJlbmNlcyBpbiByZXN1bHQgYXJyYXlcbiAqIHNwbGl0KCcuLndvcmQxIHdvcmQyLi4nLCAvKFthLXpdKykoXFxkKykvaSk7XG4gKiAvLyAtPiBbJy4uJywgJ3dvcmQnLCAnMScsICcgJywgJ3dvcmQnLCAnMicsICcuLiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIHNwbGl0KHVuZGVmKSB7XG5cbiAgdmFyIG5hdGl2ZVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdCxcbiAgICBjb21wbGlhbnRFeGVjTnBjZyA9IC8oKT8/Ly5leGVjKFwiXCIpWzFdID09PSB1bmRlZixcbiAgICAvLyBOUENHOiBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIHNlbGY7XG5cbiAgc2VsZiA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgYG5hdGl2ZVNwbGl0YFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VwYXJhdG9yKSAhPT0gXCJbb2JqZWN0IFJlZ0V4cF1cIikge1xuICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdLFxuICAgICAgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyBcImlcIiA6IFwiXCIpICsgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyBcIm1cIiA6IFwiXCIpICsgKHNlcGFyYXRvci5leHRlbmRlZCA/IFwieFwiIDogXCJcIikgKyAvLyBQcm9wb3NlZCBmb3IgRVM2XG4gICAgICAoc2VwYXJhdG9yLnN0aWNreSA/IFwieVwiIDogXCJcIiksXG4gICAgICAvLyBGaXJlZm94IDMrXG4gICAgICBsYXN0TGFzdEluZGV4ID0gMCxcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICBzZXBhcmF0b3IgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgXCJnXCIpLFxuICAgICAgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICBzdHIgKz0gXCJcIjsgLy8gVHlwZS1jb252ZXJ0XG4gICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZykge1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cChcIl5cIiArIHNlcGFyYXRvci5zb3VyY2UgKyBcIiQoPyFcXFxccylcIiwgZmxhZ3MpO1xuICAgIH1cbiAgICAvKiBWYWx1ZXMgZm9yIGBsaW1pdGAsIHBlciB0aGUgc3BlYzpcbiAgICAgKiBJZiB1bmRlZmluZWQ6IDQyOTQ5NjcyOTUgLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgICAqIElmIDAsIEluZmluaXR5LCBvciBOYU46IDBcbiAgICAgKiBJZiBwb3NpdGl2ZSBudW1iZXI6IGxpbWl0ID0gTWF0aC5mbG9vcihsaW1pdCk7IGlmIChsaW1pdCA+IDQyOTQ5NjcyOTUpIGxpbWl0IC09IDQyOTQ5NjcyOTY7XG4gICAgICogSWYgbmVnYXRpdmUgbnVtYmVyOiA0Mjk0OTY3Mjk2IC0gTWF0aC5mbG9vcihNYXRoLmFicyhsaW1pdCkpXG4gICAgICogSWYgb3RoZXI6IFR5cGUtY29udmVydCwgdGhlbiB1c2UgdGhlIGFib3ZlIHJ1bGVzXG4gICAgICovXG4gICAgbGltaXQgPSBsaW1pdCA9PT0gdW5kZWYgPyAtMSA+Pj4gMCA6IC8vIE1hdGgucG93KDIsIDMyKSAtIDFcbiAgICBsaW1pdCA+Pj4gMDsgLy8gVG9VaW50MzIobGltaXQpXG4gICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yLmV4ZWMoc3RyKSkge1xuICAgICAgLy8gYHNlcGFyYXRvci5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHN0ci5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3JcbiAgICAgICAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBzXG4gICAgICAgIGlmICghY29tcGxpYW50RXhlY05wY2cgJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWYpIHtcbiAgICAgICAgICAgICAgICBtYXRjaFtpXSA9IHVuZGVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlcGFyYXRvci5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSB7XG4gICAgICAgIHNlcGFyYXRvci5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvci50ZXN0KFwiXCIpKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaChzdHIuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIGxpbWl0KSA6IG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gc2VsZjtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qZ2xvYmFsIHdpbmRvdywgZ2xvYmFsKi9cblxudmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgIGdsb2JhbCA6IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGl2aWR1YWw7XG5cbmZ1bmN0aW9uIEluZGl2aWR1YWwoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gcm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdFtrZXldO1xuICAgIH1cblxuICAgIHJvb3Rba2V5XSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50O1xufSBlbHNlIHtcbiAgICB2YXIgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcblx0cmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggIT09IG51bGw7XG59O1xuIiwidmFyIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlSXNBcnJheSB8fCBpc0FycmF5XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXG59XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKFwiaXMtb2JqZWN0XCIpXG52YXIgaXNIb29rID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZob29rLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHlQcm9wZXJ0aWVzXG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhub2RlLCBwcm9wcywgcHJldmlvdXMpIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wcykge1xuICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZW1vdmVQcm9wZXJ0eShub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlLCBwcmV2aW91cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIb29rKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHByZXZpb3VzKVxuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZS5ob29rKSB7XG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLmhvb2sobm9kZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzID8gcHJldmlvdXNbcHJvcE5hbWVdIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaE9iamVjdChub2RlLCBwcm9wcywgcHJldmlvdXMsIHByb3BOYW1lLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9wZXJ0eShub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlLCBwcmV2aW91cykge1xuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICghaXNIb29rKHByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtpXSA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBcIlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbcHJvcE5hbWVdID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzVmFsdWUudW5ob29rKSB7XG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlLnVuaG9vayhub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXRjaE9iamVjdChub2RlLCBwcm9wcywgcHJldmlvdXMsIHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzID8gcHJldmlvdXNbcHJvcE5hbWVdIDogdW5kZWZpbmVkXG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGlmIChwcm9wTmFtZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgYXR0clZhbHVlID0gcHJvcFZhbHVlW2F0dHJOYW1lXVxuXG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmKHByZXZpb3VzVmFsdWUgJiYgaXNPYmplY3QocHJldmlvdXNWYWx1ZSkgJiZcbiAgICAgICAgZ2V0UHJvdG90eXBlKHByZXZpb3VzVmFsdWUpICE9PSBnZXRQcm90b3R5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICBub2RlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KG5vZGVbcHJvcE5hbWVdKSkge1xuICAgICAgICBub2RlW3Byb3BOYW1lXSA9IHt9XG4gICAgfVxuXG4gICAgdmFyIHJlcGxhY2VyID0gcHJvcE5hbWUgPT09IFwic3R5bGVcIiA/IFwiXCIgOiB1bmRlZmluZWRcblxuICAgIGZvciAodmFyIGsgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHByb3BWYWx1ZVtrXVxuICAgICAgICBub2RlW3Byb3BOYW1lXVtrXSA9ICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IHJlcGxhY2VyIDogdmFsdWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKHZhbHVlLl9fcHJvdG9fXykge1xuICAgICAgICByZXR1cm4gdmFsdWUuX19wcm90b19fXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlXG4gICAgfVxufVxuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxuXG52YXIgYXBwbHlQcm9wZXJ0aWVzID0gcmVxdWlyZShcIi4vYXBwbHktcHJvcGVydGllc1wiKVxuXG52YXIgaXNWTm9kZSA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12bm9kZS5qc1wiKVxudmFyIGlzVlRleHQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdnRleHQuanNcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy13aWRnZXQuanNcIilcbnZhciBoYW5kbGVUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9oYW5kbGUtdGh1bmsuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFbGVtZW50XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodm5vZGUsIG9wdHMpIHtcbiAgICB2YXIgZG9jID0gb3B0cyA/IG9wdHMuZG9jdW1lbnQgfHwgZG9jdW1lbnQgOiBkb2N1bWVudFxuICAgIHZhciB3YXJuID0gb3B0cyA/IG9wdHMud2FybiA6IG51bGxcblxuICAgIHZub2RlID0gaGFuZGxlVGh1bmsodm5vZGUpLmFcblxuICAgIGlmIChpc1dpZGdldCh2bm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlLmluaXQoKVxuICAgIH0gZWxzZSBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KVxuICAgIH0gZWxzZSBpZiAoIWlzVk5vZGUodm5vZGUpKSB7XG4gICAgICAgIGlmICh3YXJuKSB7XG4gICAgICAgICAgICB3YXJuKFwiSXRlbSBpcyBub3QgYSB2YWxpZCB2aXJ0dWFsIGRvbSBub2RlXCIsIHZub2RlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSAodm5vZGUubmFtZXNwYWNlID09PSBudWxsKSA/XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50KHZub2RlLnRhZ05hbWUpIDpcbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnROUyh2bm9kZS5uYW1lc3BhY2UsIHZub2RlLnRhZ05hbWUpXG5cbiAgICB2YXIgcHJvcHMgPSB2bm9kZS5wcm9wZXJ0aWVzXG4gICAgYXBwbHlQcm9wZXJ0aWVzKG5vZGUsIHByb3BzKVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGNyZWF0ZUVsZW1lbnQoY2hpbGRyZW5baV0sIG9wdHMpXG4gICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbn1cbiIsIi8vIE1hcHMgYSB2aXJ0dWFsIERPTSB0cmVlIG9udG8gYSByZWFsIERPTSB0cmVlIGluIGFuIGVmZmljaWVudCBtYW5uZXIuXG4vLyBXZSBkb24ndCB3YW50IHRvIHJlYWQgYWxsIG9mIHRoZSBET00gbm9kZXMgaW4gdGhlIHRyZWUgc28gd2UgdXNlXG4vLyB0aGUgaW4tb3JkZXIgdHJlZSBpbmRleGluZyB0byBlbGltaW5hdGUgcmVjdXJzaW9uIGRvd24gY2VydGFpbiBicmFuY2hlcy5cbi8vIFdlIG9ubHkgcmVjdXJzZSBpbnRvIGEgRE9NIG5vZGUgaWYgd2Uga25vdyB0aGF0IGl0IGNvbnRhaW5zIGEgY2hpbGQgb2Zcbi8vIGludGVyZXN0LlxuXG52YXIgbm9DaGlsZCA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tSW5kZXhcblxuZnVuY3Rpb24gZG9tSW5kZXgocm9vdE5vZGUsIHRyZWUsIGluZGljZXMsIG5vZGVzKSB7XG4gICAgaWYgKCFpbmRpY2VzIHx8IGluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljZXMuc29ydChhc2NlbmRpbmcpXG4gICAgICAgIHJldHVybiByZWN1cnNlKHJvb3ROb2RlLCB0cmVlLCBpbmRpY2VzLCBub2RlcywgMClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2Uocm9vdE5vZGUsIHRyZWUsIGluZGljZXMsIG5vZGVzLCByb290SW5kZXgpIHtcbiAgICBub2RlcyA9IG5vZGVzIHx8IHt9XG5cblxuICAgIGlmIChyb290Tm9kZSkge1xuICAgICAgICBpZiAoaW5kZXhJblJhbmdlKGluZGljZXMsIHJvb3RJbmRleCwgcm9vdEluZGV4KSkge1xuICAgICAgICAgICAgbm9kZXNbcm9vdEluZGV4XSA9IHJvb3ROb2RlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdkNoaWxkcmVuID0gdHJlZS5jaGlsZHJlblxuXG4gICAgICAgIGlmICh2Q2hpbGRyZW4pIHtcblxuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSByb290Tm9kZS5jaGlsZE5vZGVzXG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJvb3RJbmRleCArPSAxXG5cbiAgICAgICAgICAgICAgICB2YXIgdkNoaWxkID0gdkNoaWxkcmVuW2ldIHx8IG5vQ2hpbGRcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEluZGV4ID0gcm9vdEluZGV4ICsgKHZDaGlsZC5jb3VudCB8fCAwKVxuXG4gICAgICAgICAgICAgICAgLy8gc2tpcCByZWN1cnNpb24gZG93biB0aGUgdHJlZSBpZiB0aGVyZSBhcmUgbm8gbm9kZXMgZG93biBoZXJlXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4SW5SYW5nZShpbmRpY2VzLCByb290SW5kZXgsIG5leHRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjaGlsZE5vZGVzW2ldLCB2Q2hpbGQsIGluZGljZXMsIG5vZGVzLCByb290SW5kZXgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm9vdEluZGV4ID0gbmV4dEluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNcbn1cblxuLy8gQmluYXJ5IHNlYXJjaCBmb3IgYW4gaW5kZXggaW4gdGhlIGludGVydmFsIFtsZWZ0LCByaWdodF1cbmZ1bmN0aW9uIGluZGV4SW5SYW5nZShpbmRpY2VzLCBsZWZ0LCByaWdodCkge1xuICAgIGlmIChpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgbWluSW5kZXggPSAwXG4gICAgdmFyIG1heEluZGV4ID0gaW5kaWNlcy5sZW5ndGggLSAxXG4gICAgdmFyIGN1cnJlbnRJbmRleFxuICAgIHZhciBjdXJyZW50SXRlbVxuXG4gICAgd2hpbGUgKG1pbkluZGV4IDw9IG1heEluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9ICgobWF4SW5kZXggKyBtaW5JbmRleCkgLyAyKSA+PiAwXG4gICAgICAgIGN1cnJlbnRJdGVtID0gaW5kaWNlc1tjdXJyZW50SW5kZXhdXG5cbiAgICAgICAgaWYgKG1pbkluZGV4ID09PSBtYXhJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtID49IGxlZnQgJiYgY3VycmVudEl0ZW0gPD0gcmlnaHRcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SXRlbSA8IGxlZnQpIHtcbiAgICAgICAgICAgIG1pbkluZGV4ID0gY3VycmVudEluZGV4ICsgMVxuICAgICAgICB9IGVsc2UgIGlmIChjdXJyZW50SXRlbSA+IHJpZ2h0KSB7XG4gICAgICAgICAgICBtYXhJbmRleCA9IGN1cnJlbnRJbmRleCAtIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPiBiID8gMSA6IC0xXG59XG4iLCJ2YXIgYXBwbHlQcm9wZXJ0aWVzID0gcmVxdWlyZShcIi4vYXBwbHktcHJvcGVydGllc1wiKVxuXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtd2lkZ2V0LmpzXCIpXG52YXIgVlBhdGNoID0gcmVxdWlyZShcIi4uL3Zub2RlL3ZwYXRjaC5qc1wiKVxuXG52YXIgdXBkYXRlV2lkZ2V0ID0gcmVxdWlyZShcIi4vdXBkYXRlLXdpZGdldFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5UGF0Y2hcblxuZnVuY3Rpb24gYXBwbHlQYXRjaCh2cGF0Y2gsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgdHlwZSA9IHZwYXRjaC50eXBlXG4gICAgdmFyIHZOb2RlID0gdnBhdGNoLnZOb2RlXG4gICAgdmFyIHBhdGNoID0gdnBhdGNoLnBhdGNoXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBWUGF0Y2guUkVNT1ZFOlxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZU5vZGUoZG9tTm9kZSwgdk5vZGUpXG4gICAgICAgIGNhc2UgVlBhdGNoLklOU0VSVDpcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnROb2RlKGRvbU5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5WVEVYVDpcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLldJREdFVDpcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLlZOT0RFOlxuICAgICAgICAgICAgcmV0dXJuIHZOb2RlUGF0Y2goZG9tTm9kZSwgdk5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5PUkRFUjpcbiAgICAgICAgICAgIHJlb3JkZXJDaGlsZHJlbihkb21Ob2RlLCBwYXRjaClcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlXG4gICAgICAgIGNhc2UgVlBhdGNoLlBST1BTOlxuICAgICAgICAgICAgYXBwbHlQcm9wZXJ0aWVzKGRvbU5vZGUsIHBhdGNoLCB2Tm9kZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICAgICAgY2FzZSBWUGF0Y2guVEhVTks6XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVJvb3QoZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZW5kZXJPcHRpb25zLnBhdGNoKGRvbU5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKGRvbU5vZGUsIHZOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSlcbiAgICB9XG5cbiAgICBkZXN0cm95V2lkZ2V0KGRvbU5vZGUsIHZOb2RlKTtcblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUocGFyZW50Tm9kZSwgdk5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgbmV3Tm9kZSA9IHJlbmRlck9wdGlvbnMucmVuZGVyKHZOb2RlLCByZW5kZXJPcHRpb25zKVxuXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIHN0cmluZ1BhdGNoKGRvbU5vZGUsIGxlZnRWTm9kZSwgdlRleHQsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgbmV3Tm9kZVxuXG4gICAgaWYgKGRvbU5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgZG9tTm9kZS5yZXBsYWNlRGF0YSgwLCBkb21Ob2RlLmxlbmd0aCwgdlRleHQudGV4dClcbiAgICAgICAgbmV3Tm9kZSA9IGRvbU5vZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuICAgICAgICBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIodlRleHQsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgaWYgKHBhcmVudE5vZGUgJiYgbmV3Tm9kZSAhPT0gZG9tTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIHdpZGdldFBhdGNoKGRvbU5vZGUsIGxlZnRWTm9kZSwgd2lkZ2V0LCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIHVwZGF0aW5nID0gdXBkYXRlV2lkZ2V0KGxlZnRWTm9kZSwgd2lkZ2V0KVxuICAgIHZhciBuZXdOb2RlXG5cbiAgICBpZiAodXBkYXRpbmcpIHtcbiAgICAgICAgbmV3Tm9kZSA9IHdpZGdldC51cGRhdGUobGVmdFZOb2RlLCBkb21Ob2RlKSB8fCBkb21Ob2RlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Tm9kZSA9IHJlbmRlck9wdGlvbnMucmVuZGVyKHdpZGdldCwgcmVuZGVyT3B0aW9ucylcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKHBhcmVudE5vZGUgJiYgbmV3Tm9kZSAhPT0gZG9tTm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKVxuICAgIH1cblxuICAgIGlmICghdXBkYXRpbmcpIHtcbiAgICAgICAgZGVzdHJveVdpZGdldChkb21Ob2RlLCBsZWZ0Vk5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05vZGVcbn1cblxuZnVuY3Rpb24gdk5vZGVQYXRjaChkb21Ob2RlLCBsZWZ0Vk5vZGUsIHZOb2RlLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcbiAgICB2YXIgbmV3Tm9kZSA9IHJlbmRlck9wdGlvbnMucmVuZGVyKHZOb2RlLCByZW5kZXJPcHRpb25zKVxuXG4gICAgaWYgKHBhcmVudE5vZGUgJiYgbmV3Tm9kZSAhPT0gZG9tTm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgdykge1xuICAgIGlmICh0eXBlb2Ygdy5kZXN0cm95ID09PSBcImZ1bmN0aW9uXCIgJiYgaXNXaWRnZXQodykpIHtcbiAgICAgICAgdy5kZXN0cm95KGRvbU5vZGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW9yZGVyQ2hpbGRyZW4oZG9tTm9kZSwgbW92ZXMpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlc1xuICAgIHZhciBrZXlNYXAgPSB7fVxuICAgIHZhciBub2RlXG4gICAgdmFyIHJlbW92ZVxuICAgIHZhciBpbnNlcnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW92ZXMucmVtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZW1vdmUgPSBtb3Zlcy5yZW1vdmVzW2ldXG4gICAgICAgIG5vZGUgPSBjaGlsZE5vZGVzW3JlbW92ZS5mcm9tXVxuICAgICAgICBpZiAocmVtb3ZlLmtleSkge1xuICAgICAgICAgICAga2V5TWFwW3JlbW92ZS5rZXldID0gbm9kZVxuICAgICAgICB9XG4gICAgICAgIGRvbU5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGhcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1vdmVzLmluc2VydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaW5zZXJ0ID0gbW92ZXMuaW5zZXJ0c1tqXVxuICAgICAgICBub2RlID0ga2V5TWFwW2luc2VydC5rZXldXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHdlaXJkZXN0IGJ1ZyBpJ3ZlIGV2ZXIgc2VlbiBpbiB3ZWJraXRcbiAgICAgICAgZG9tTm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgaW5zZXJ0LnRvID49IGxlbmd0aCsrID8gbnVsbCA6IGNoaWxkTm9kZXNbaW5zZXJ0LnRvXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSb290KG9sZFJvb3QsIG5ld1Jvb3QpIHtcbiAgICBpZiAob2xkUm9vdCAmJiBuZXdSb290ICYmIG9sZFJvb3QgIT09IG5ld1Jvb3QgJiYgb2xkUm9vdC5wYXJlbnROb2RlKSB7XG4gICAgICAgIG9sZFJvb3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um9vdCwgb2xkUm9vdClcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Um9vdDtcbn1cbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcbnZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcblxudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1lbGVtZW50XCIpXG52YXIgZG9tSW5kZXggPSByZXF1aXJlKFwiLi9kb20taW5kZXhcIilcbnZhciBwYXRjaE9wID0gcmVxdWlyZShcIi4vcGF0Y2gtb3BcIilcbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcblxuZnVuY3Rpb24gcGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpIHtcbiAgICByZW5kZXJPcHRpb25zID0gcmVuZGVyT3B0aW9ucyB8fCB7fVxuICAgIC8vIHJlbmRlck9wdGlvbnMucGF0Y2ggPSByZW5kZXJPcHRpb25zLnBhdGNoIHx8IHBhdGNoUmVjdXJzaXZlIC8vLS0vL1xuICAgIHJlbmRlck9wdGlvbnMucGF0Y2ggPSByZW5kZXJPcHRpb25zLnBhdGNoICYmIHJlbmRlck9wdGlvbnMucGF0Y2ggIT09IHBhdGNoXG4gICAgICAgID8gcmVuZGVyT3B0aW9ucy5wYXRjaFxuICAgICAgICA6IHBhdGNoUmVjdXJzaXZlIC8vKysvL1xuICAgIHJlbmRlck9wdGlvbnMucmVuZGVyID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIgfHwgcmVuZGVyXG4gICAgcmV0dXJuIHJlbmRlck9wdGlvbnMucGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHBhdGNoUmVjdXJzaXZlKHJvb3ROb2RlLCBwYXRjaGVzLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIGluZGljZXMgPSBwYXRjaEluZGljZXMocGF0Y2hlcylcblxuICAgIGlmIChpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBkb21JbmRleChyb290Tm9kZSwgcGF0Y2hlcy5hLCBpbmRpY2VzKVxuICAgIHZhciBvd25lckRvY3VtZW50ID0gcm9vdE5vZGUub3duZXJEb2N1bWVudFxuXG4gICAgaWYgKCFyZW5kZXJPcHRpb25zLmRvY3VtZW50ICYmIG93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIHJlbmRlck9wdGlvbnMuZG9jdW1lbnQgPSBvd25lckRvY3VtZW50XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlSW5kZXggPSBpbmRpY2VzW2ldXG4gICAgICAgIHJvb3ROb2RlID0gYXBwbHlQYXRjaChyb290Tm9kZSxcbiAgICAgICAgICAgIGluZGV4W25vZGVJbmRleF0sXG4gICAgICAgICAgICBwYXRjaGVzW25vZGVJbmRleF0sXG4gICAgICAgICAgICByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHJvb3ROb2RlLCBkb21Ob2RlLCBwYXRjaExpc3QsIHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlXG4gICAgfVxuXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChpc0FycmF5KHBhdGNoTGlzdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwYXRjaE9wKHBhdGNoTGlzdFtpXSwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgcm9vdE5vZGUgPSBuZXdOb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcGF0Y2hPcChwYXRjaExpc3QsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICByb290Tm9kZSA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBwYXRjaEluZGljZXMocGF0Y2hlcykge1xuICAgIHZhciBpbmRpY2VzID0gW11cblxuICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiYVwiKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goTnVtYmVyKGtleSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuIiwidmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVdpZGdldFxuXG5mdW5jdGlvbiB1cGRhdGVXaWRnZXQoYSwgYikge1xuICAgIGlmIChpc1dpZGdldChhKSAmJiBpc1dpZGdldChiKSkge1xuICAgICAgICBpZiAoXCJuYW1lXCIgaW4gYSAmJiBcIm5hbWVcIiBpbiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA9PT0gYi5pZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5pdCA9PT0gYi5pbml0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEV2U3RvcmUgPSByZXF1aXJlKCdldi1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2SG9vaztcblxuZnVuY3Rpb24gRXZIb29rKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEV2SG9vaykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdkhvb2sodmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblxuRXZIb29rLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBlcyA9IEV2U3RvcmUobm9kZSk7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lLnN1YnN0cigzKTtcblxuICAgIGVzW3Byb3BOYW1lXSA9IHRoaXMudmFsdWU7XG59O1xuXG5Fdkhvb2sucHJvdG90eXBlLnVuaG9vayA9IGZ1bmN0aW9uKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBlcyA9IEV2U3RvcmUobm9kZSk7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lLnN1YnN0cigzKTtcblxuICAgIGVzW3Byb3BOYW1lXSA9IHVuZGVmaW5lZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gU29mdFNldEhvb2s7XG5cbmZ1bmN0aW9uIFNvZnRTZXRIb29rKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvZnRTZXRIb29rKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNvZnRTZXRIb29rKHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5cblNvZnRTZXRIb29rLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIGlmIChub2RlW3Byb3BlcnR5TmFtZV0gIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgbm9kZVtwcm9wZXJ0eU5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ3gtaXMtYXJyYXknKTtcblxudmFyIFZOb2RlID0gcmVxdWlyZSgnLi4vdm5vZGUvdm5vZGUuanMnKTtcbnZhciBWVGV4dCA9IHJlcXVpcmUoJy4uL3Zub2RlL3Z0ZXh0LmpzJyk7XG52YXIgaXNWTm9kZSA9IHJlcXVpcmUoJy4uL3Zub2RlL2lzLXZub2RlJyk7XG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoJy4uL3Zub2RlL2lzLXZ0ZXh0Jyk7XG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKCcuLi92bm9kZS9pcy13aWRnZXQnKTtcbnZhciBpc0hvb2sgPSByZXF1aXJlKCcuLi92bm9kZS9pcy12aG9vaycpO1xudmFyIGlzVlRodW5rID0gcmVxdWlyZSgnLi4vdm5vZGUvaXMtdGh1bmsnKTtcblxudmFyIHBhcnNlVGFnID0gcmVxdWlyZSgnLi9wYXJzZS10YWcuanMnKTtcbnZhciBzb2Z0U2V0SG9vayA9IHJlcXVpcmUoJy4vaG9va3Mvc29mdC1zZXQtaG9vay5qcycpO1xudmFyIGV2SG9vayA9IHJlcXVpcmUoJy4vaG9va3MvZXYtaG9vay5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGg7XG5cbmZ1bmN0aW9uIGgodGFnTmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdO1xuICAgIHZhciB0YWcsIHByb3BzLCBrZXksIG5hbWVzcGFjZTtcblxuICAgIGlmICghY2hpbGRyZW4gJiYgaXNDaGlsZHJlbihwcm9wZXJ0aWVzKSkge1xuICAgICAgICBjaGlsZHJlbiA9IHByb3BlcnRpZXM7XG4gICAgICAgIHByb3BzID0ge307XG4gICAgfVxuXG4gICAgcHJvcHMgPSBwcm9wcyB8fCBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgIHRhZyA9IHBhcnNlVGFnKHRhZ05hbWUsIHByb3BzKTtcblxuICAgIC8vIHN1cHBvcnQga2V5c1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgICAga2V5ID0gcHJvcHMua2V5O1xuICAgICAgICBwcm9wcy5rZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydCBuYW1lc3BhY2VcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ25hbWVzcGFjZScpKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9IHByb3BzLm5hbWVzcGFjZTtcbiAgICAgICAgcHJvcHMubmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGZpeCBjdXJzb3IgYnVnXG4gICAgaWYgKHRhZyA9PT0gJ0lOUFVUJyAmJlxuICAgICAgICAhbmFtZXNwYWNlICYmXG4gICAgICAgIHByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmXG4gICAgICAgIHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgIWlzSG9vayhwcm9wcy52YWx1ZSlcbiAgICApIHtcbiAgICAgICAgcHJvcHMudmFsdWUgPSBzb2Z0U2V0SG9vayhwcm9wcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtUHJvcGVydGllcyhwcm9wcyk7XG5cbiAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiBjaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICBhZGRDaGlsZChjaGlsZHJlbiwgY2hpbGROb2RlcywgdGFnLCBwcm9wcyk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbmV3IFZOb2RlKHRhZywgcHJvcHMsIGNoaWxkTm9kZXMsIGtleSwgbmFtZXNwYWNlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoYywgY2hpbGROb2RlcywgdGFnLCBwcm9wcykge1xuICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG5ldyBWVGV4dChjKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG5ldyBWVGV4dChTdHJpbmcoYykpKTtcbiAgICB9IGVsc2UgaWYgKGlzQ2hpbGQoYykpIHtcbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFkZENoaWxkKGNbaV0sIGNoaWxkTm9kZXMsIHRhZywgcHJvcHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjID09PSBudWxsIHx8IGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgVW5leHBlY3RlZFZpcnR1YWxFbGVtZW50KHtcbiAgICAgICAgICAgIGZvcmVpZ25PYmplY3Q6IGMsXG4gICAgICAgICAgICBwYXJlbnRWbm9kZToge1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVByb3BlcnRpZXMocHJvcHMpIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChpc0hvb2sodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5zdWJzdHIoMCwgMykgPT09ICdldi0nKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGV2LWZvbyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZXZIb29rKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZCh4KSB7XG4gICAgcmV0dXJuIGlzVk5vZGUoeCkgfHwgaXNWVGV4dCh4KSB8fCBpc1dpZGdldCh4KSB8fCBpc1ZUaHVuayh4KTtcbn1cblxuZnVuY3Rpb24gaXNDaGlsZHJlbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB8fCBpc0FycmF5KHgpIHx8IGlzQ2hpbGQoeCk7XG59XG5cbmZ1bmN0aW9uIFVuZXhwZWN0ZWRWaXJ0dWFsRWxlbWVudChkYXRhKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuXG4gICAgZXJyLnR5cGUgPSAndmlydHVhbC1oeXBlcnNjcmlwdC51bmV4cGVjdGVkLnZpcnR1YWwtZWxlbWVudCc7XG4gICAgZXJyLm1lc3NhZ2UgPSAnVW5leHBlY3RlZCB2aXJ0dWFsIGNoaWxkIHBhc3NlZCB0byBoKCkuXFxuJyArXG4gICAgICAgICdFeHBlY3RlZCBhIFZOb2RlIC8gVnRodW5rIC8gVldpZGdldCAvIHN0cmluZyBidXQ6XFxuJyArXG4gICAgICAgICdnb3Q6XFxuJyArXG4gICAgICAgIGVycm9yU3RyaW5nKGRhdGEuZm9yZWlnbk9iamVjdCkgK1xuICAgICAgICAnLlxcbicgK1xuICAgICAgICAnVGhlIHBhcmVudCB2bm9kZSBpczpcXG4nICtcbiAgICAgICAgZXJyb3JTdHJpbmcoZGF0YS5wYXJlbnRWbm9kZSlcbiAgICAgICAgJ1xcbicgK1xuICAgICAgICAnU3VnZ2VzdGVkIGZpeDogY2hhbmdlIHlvdXIgYGgoLi4uLCBbIC4uLiBdKWAgY2FsbHNpdGUuJztcbiAgICBlcnIuZm9yZWlnbk9iamVjdCA9IGRhdGEuZm9yZWlnbk9iamVjdDtcbiAgICBlcnIucGFyZW50Vm5vZGUgPSBkYXRhLnBhcmVudFZub2RlO1xuXG4gICAgcmV0dXJuIGVycjtcbn1cblxuZnVuY3Rpb24gZXJyb3JTdHJpbmcob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgJyAgICAnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzcGxpdCA9IHJlcXVpcmUoJ2Jyb3dzZXItc3BsaXQnKTtcblxudmFyIGNsYXNzSWRTcGxpdCA9IC8oW1xcLiNdP1thLXpBLVowLTlcXHUwMDdGLVxcdUZGRkZfOi1dKykvO1xudmFyIG5vdENsYXNzSWQgPSAvXlxcLnwjLztcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRhZztcblxuZnVuY3Rpb24gcGFyc2VUYWcodGFnLCBwcm9wcykge1xuICAgIGlmICghdGFnKSB7XG4gICAgICAgIHJldHVybiAnRElWJztcbiAgICB9XG5cbiAgICB2YXIgbm9JZCA9ICEocHJvcHMuaGFzT3duUHJvcGVydHkoJ2lkJykpO1xuXG4gICAgdmFyIHRhZ1BhcnRzID0gc3BsaXQodGFnLCBjbGFzc0lkU3BsaXQpO1xuICAgIHZhciB0YWdOYW1lID0gbnVsbDtcblxuICAgIGlmIChub3RDbGFzc0lkLnRlc3QodGFnUGFydHNbMV0pKSB7XG4gICAgICAgIHRhZ05hbWUgPSAnRElWJztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcywgcGFydCwgdHlwZSwgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWdQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJ0ID0gdGFnUGFydHNbaV07XG5cbiAgICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBwYXJ0LmNoYXJBdCgwKTtcblxuICAgICAgICBpZiAoIXRhZ05hbWUpIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSBwYXJ0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcuJykge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMgfHwgW107XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2gocGFydC5zdWJzdHJpbmcoMSwgcGFydC5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnIycgJiYgbm9JZCkge1xuICAgICAgICAgICAgcHJvcHMuaWQgPSBwYXJ0LnN1YnN0cmluZygxLCBwYXJ0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgICBpZiAocHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2gocHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wcy5uYW1lc3BhY2UgPyB0YWdOYW1lIDogdGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xufVxuIiwidmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi9pcy12bm9kZVwiKVxudmFyIGlzVlRleHQgPSByZXF1aXJlKFwiLi9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4vaXMtd2lkZ2V0XCIpXG52YXIgaXNUaHVuayA9IHJlcXVpcmUoXCIuL2lzLXRodW5rXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaGFuZGxlVGh1bmtcblxuZnVuY3Rpb24gaGFuZGxlVGh1bmsoYSwgYikge1xuICAgIHZhciByZW5kZXJlZEEgPSBhXG4gICAgdmFyIHJlbmRlcmVkQiA9IGJcblxuICAgIGlmIChpc1RodW5rKGIpKSB7XG4gICAgICAgIHJlbmRlcmVkQiA9IHJlbmRlclRodW5rKGIsIGEpXG4gICAgfVxuXG4gICAgaWYgKGlzVGh1bmsoYSkpIHtcbiAgICAgICAgcmVuZGVyZWRBID0gcmVuZGVyVGh1bmsoYSwgbnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhOiByZW5kZXJlZEEsXG4gICAgICAgIGI6IHJlbmRlcmVkQlxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGh1bmsodGh1bmssIHByZXZpb3VzKSB7XG4gICAgdmFyIHJlbmRlcmVkVGh1bmsgPSB0aHVuay52bm9kZVxuXG4gICAgaWYgKCFyZW5kZXJlZFRodW5rKSB7XG4gICAgICAgIHJlbmRlcmVkVGh1bmsgPSB0aHVuay52bm9kZSA9IHRodW5rLnJlbmRlcihwcmV2aW91cylcbiAgICB9XG5cbiAgICBpZiAoIShpc1ZOb2RlKHJlbmRlcmVkVGh1bmspIHx8XG4gICAgICAgICAgICBpc1ZUZXh0KHJlbmRlcmVkVGh1bmspIHx8XG4gICAgICAgICAgICBpc1dpZGdldChyZW5kZXJlZFRodW5rKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGh1bmsgZGlkIG5vdCByZXR1cm4gYSB2YWxpZCBub2RlXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJlZFRodW5rXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzVGh1bmtcclxuXHJcbmZ1bmN0aW9uIGlzVGh1bmsodCkge1xyXG4gICAgcmV0dXJuIHQgJiYgdC50eXBlID09PSBcIlRodW5rXCJcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzSG9va1xuXG5mdW5jdGlvbiBpc0hvb2soaG9vaykge1xuICAgIHJldHVybiBob29rICYmXG4gICAgICAodHlwZW9mIGhvb2suaG9vayA9PT0gXCJmdW5jdGlvblwiICYmICFob29rLmhhc093blByb3BlcnR5KFwiaG9va1wiKSB8fFxuICAgICAgIHR5cGVvZiBob29rLnVuaG9vayA9PT0gXCJmdW5jdGlvblwiICYmICFob29rLmhhc093blByb3BlcnR5KFwidW5ob29rXCIpKVxufVxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaXNWaXJ0dWFsTm9kZVxuXG5mdW5jdGlvbiBpc1ZpcnR1YWxOb2RlKHgpIHtcbiAgICByZXR1cm4geCAmJiB4LnR5cGUgPT09IFwiVmlydHVhbE5vZGVcIiAmJiB4LnZlcnNpb24gPT09IHZlcnNpb25cbn1cbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmlydHVhbFRleHRcblxuZnVuY3Rpb24gaXNWaXJ0dWFsVGV4dCh4KSB7XG4gICAgcmV0dXJuIHggJiYgeC50eXBlID09PSBcIlZpcnR1YWxUZXh0XCIgJiYgeC52ZXJzaW9uID09PSB2ZXJzaW9uXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzV2lkZ2V0XG5cbmZ1bmN0aW9uIGlzV2lkZ2V0KHcpIHtcbiAgICByZXR1cm4gdyAmJiB3LnR5cGUgPT09IFwiV2lkZ2V0XCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIyXCJcbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxudmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi9pcy12bm9kZVwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4vaXMtd2lkZ2V0XCIpXG52YXIgaXNUaHVuayA9IHJlcXVpcmUoXCIuL2lzLXRodW5rXCIpXG52YXIgaXNWSG9vayA9IHJlcXVpcmUoXCIuL2lzLXZob29rXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbE5vZGVcblxudmFyIG5vUHJvcGVydGllcyA9IHt9XG52YXIgbm9DaGlsZHJlbiA9IFtdXG5cbmZ1bmN0aW9uIFZpcnR1YWxOb2RlKHRhZ05hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuLCBrZXksIG5hbWVzcGFjZSkge1xuICAgIHRoaXMudGFnTmFtZSA9IHRhZ05hbWVcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IG5vUHJvcGVydGllc1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBub0NoaWxkcmVuXG4gICAgdGhpcy5rZXkgPSBrZXkgIT0gbnVsbCA/IFN0cmluZyhrZXkpIDogdW5kZWZpbmVkXG4gICAgdGhpcy5uYW1lc3BhY2UgPSAodHlwZW9mIG5hbWVzcGFjZSA9PT0gXCJzdHJpbmdcIikgPyBuYW1lc3BhY2UgOiBudWxsXG5cbiAgICB2YXIgY291bnQgPSAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB8fCAwXG4gICAgdmFyIGRlc2NlbmRhbnRzID0gMFxuICAgIHZhciBoYXNXaWRnZXRzID0gZmFsc2VcbiAgICB2YXIgaGFzVGh1bmtzID0gZmFsc2VcbiAgICB2YXIgZGVzY2VuZGFudEhvb2tzID0gZmFsc2VcbiAgICB2YXIgaG9va3NcblxuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW3Byb3BOYW1lXVxuICAgICAgICAgICAgaWYgKGlzVkhvb2socHJvcGVydHkpICYmIHByb3BlcnR5LnVuaG9vaykge1xuICAgICAgICAgICAgICAgIGlmICghaG9va3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MgPSB7fVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhvb2tzW3Byb3BOYW1lXSA9IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICBkZXNjZW5kYW50cyArPSBjaGlsZC5jb3VudCB8fCAwXG5cbiAgICAgICAgICAgIGlmICghaGFzV2lkZ2V0cyAmJiBjaGlsZC5oYXNXaWRnZXRzKSB7XG4gICAgICAgICAgICAgICAgaGFzV2lkZ2V0cyA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNUaHVua3MgJiYgY2hpbGQuaGFzVGh1bmtzKSB7XG4gICAgICAgICAgICAgICAgaGFzVGh1bmtzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWRlc2NlbmRhbnRIb29rcyAmJiAoY2hpbGQuaG9va3MgfHwgY2hpbGQuZGVzY2VuZGFudEhvb2tzKSkge1xuICAgICAgICAgICAgICAgIGRlc2NlbmRhbnRIb29rcyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzV2lkZ2V0cyAmJiBpc1dpZGdldChjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQuZGVzdHJveSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFzV2lkZ2V0cyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzVGh1bmtzICYmIGlzVGh1bmsoY2hpbGQpKSB7XG4gICAgICAgICAgICBoYXNUaHVua3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IGNvdW50ICsgZGVzY2VuZGFudHNcbiAgICB0aGlzLmhhc1dpZGdldHMgPSBoYXNXaWRnZXRzXG4gICAgdGhpcy5oYXNUaHVua3MgPSBoYXNUaHVua3NcbiAgICB0aGlzLmhvb2tzID0gaG9va3NcbiAgICB0aGlzLmRlc2NlbmRhbnRIb29rcyA9IGRlc2NlbmRhbnRIb29rc1xufVxuXG5WaXJ0dWFsTm9kZS5wcm90b3R5cGUudmVyc2lvbiA9IHZlcnNpb25cblZpcnR1YWxOb2RlLnByb3RvdHlwZS50eXBlID0gXCJWaXJ0dWFsTm9kZVwiXG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxuVmlydHVhbFBhdGNoLk5PTkUgPSAwXG5WaXJ0dWFsUGF0Y2guVlRFWFQgPSAxXG5WaXJ0dWFsUGF0Y2guVk5PREUgPSAyXG5WaXJ0dWFsUGF0Y2guV0lER0VUID0gM1xuVmlydHVhbFBhdGNoLlBST1BTID0gNFxuVmlydHVhbFBhdGNoLk9SREVSID0gNVxuVmlydHVhbFBhdGNoLklOU0VSVCA9IDZcblZpcnR1YWxQYXRjaC5SRU1PVkUgPSA3XG5WaXJ0dWFsUGF0Y2guVEhVTksgPSA4XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFBhdGNoXG5cbmZ1bmN0aW9uIFZpcnR1YWxQYXRjaCh0eXBlLCB2Tm9kZSwgcGF0Y2gpIHtcbiAgICB0aGlzLnR5cGUgPSBOdW1iZXIodHlwZSlcbiAgICB0aGlzLnZOb2RlID0gdk5vZGVcbiAgICB0aGlzLnBhdGNoID0gcGF0Y2hcbn1cblxuVmlydHVhbFBhdGNoLnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvblxuVmlydHVhbFBhdGNoLnByb3RvdHlwZS50eXBlID0gXCJWaXJ0dWFsUGF0Y2hcIlxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFRleHRcblxuZnVuY3Rpb24gVmlydHVhbFRleHQodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IFN0cmluZyh0ZXh0KVxufVxuXG5WaXJ0dWFsVGV4dC5wcm90b3R5cGUudmVyc2lvbiA9IHZlcnNpb25cblZpcnR1YWxUZXh0LnByb3RvdHlwZS50eXBlID0gXCJWaXJ0dWFsVGV4dFwiXG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKFwiaXMtb2JqZWN0XCIpXG52YXIgaXNIb29rID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZob29rXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZlByb3BzXG5cbmZ1bmN0aW9uIGRpZmZQcm9wcyhhLCBiKSB7XG4gICAgdmFyIGRpZmZcblxuICAgIGZvciAodmFyIGFLZXkgaW4gYSkge1xuICAgICAgICBpZiAoIShhS2V5IGluIGIpKSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZlthS2V5XSA9IHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFWYWx1ZSA9IGFbYUtleV1cbiAgICAgICAgdmFyIGJWYWx1ZSA9IGJbYUtleV1cblxuICAgICAgICBpZiAoYVZhbHVlID09PSBiVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoYVZhbHVlKSAmJiBpc09iamVjdChiVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoZ2V0UHJvdG90eXBlKGJWYWx1ZSkgIT09IGdldFByb3RvdHlwZShhVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgICAgICBkaWZmW2FLZXldID0gYlZhbHVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSG9vayhiVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgIGRpZmZbYUtleV0gPSBiVmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdERpZmYgPSBkaWZmUHJvcHMoYVZhbHVlLCBiVmFsdWUpXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdERpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgICAgICAgICAgZGlmZlthS2V5XSA9IG9iamVjdERpZmZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZlthS2V5XSA9IGJWYWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYktleSBpbiBiKSB7XG4gICAgICAgIGlmICghKGJLZXkgaW4gYSkpIHtcbiAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICBkaWZmW2JLZXldID0gYltiS2V5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmZcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKVxuICB9IGVsc2UgaWYgKHZhbHVlLl9fcHJvdG9fXykge1xuICAgIHJldHVybiB2YWx1ZS5fX3Byb3RvX19cbiAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgfVxufVxuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKFwieC1pcy1hcnJheVwiKVxuXG52YXIgVlBhdGNoID0gcmVxdWlyZShcIi4uL3Zub2RlL3ZwYXRjaFwiKVxudmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdm5vZGVcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZ0ZXh0XCIpXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtd2lkZ2V0XCIpXG52YXIgaXNUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy10aHVua1wiKVxudmFyIGhhbmRsZVRodW5rID0gcmVxdWlyZShcIi4uL3Zub2RlL2hhbmRsZS10aHVua1wiKVxuXG52YXIgZGlmZlByb3BzID0gcmVxdWlyZShcIi4vZGlmZi1wcm9wc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcblxuZnVuY3Rpb24gZGlmZihhLCBiKSB7XG4gICAgdmFyIHBhdGNoID0geyBhOiBhIH1cbiAgICB3YWxrKGEsIGIsIHBhdGNoLCAwKVxuICAgIHJldHVybiBwYXRjaFxufVxuXG5mdW5jdGlvbiB3YWxrKGEsIGIsIHBhdGNoLCBpbmRleCkge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBhcHBseSA9IHBhdGNoW2luZGV4XVxuICAgIHZhciBhcHBseUNsZWFyID0gZmFsc2VcblxuICAgIGlmIChpc1RodW5rKGEpIHx8IGlzVGh1bmsoYikpIHtcbiAgICAgICAgdGh1bmtzKGEsIGIsIHBhdGNoLCBpbmRleClcbiAgICB9IGVsc2UgaWYgKGIgPT0gbnVsbCkge1xuXG4gICAgICAgIC8vIElmIGEgaXMgYSB3aWRnZXQgd2Ugd2lsbCBhZGQgYSByZW1vdmUgcGF0Y2ggZm9yIGl0XG4gICAgICAgIC8vIE90aGVyd2lzZSBhbnkgY2hpbGQgd2lkZ2V0cy9ob29rcyBtdXN0IGJlIGRlc3Ryb3llZC5cbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBhZGRpbmcgdHdvIHJlbW92ZSBwYXRjaGVzIGZvciBhIHdpZGdldC5cbiAgICAgICAgaWYgKCFpc1dpZGdldChhKSkge1xuICAgICAgICAgICAgY2xlYXJTdGF0ZShhLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgICAgICBhcHBseSA9IHBhdGNoW2luZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guUkVNT1ZFLCBhLCBiKSlcbiAgICB9IGVsc2UgaWYgKGlzVk5vZGUoYikpIHtcbiAgICAgICAgaWYgKGlzVk5vZGUoYSkpIHtcbiAgICAgICAgICAgIGlmIChhLnRhZ05hbWUgPT09IGIudGFnTmFtZSAmJlxuICAgICAgICAgICAgICAgIGEubmFtZXNwYWNlID09PSBiLm5hbWVzcGFjZSAmJlxuICAgICAgICAgICAgICAgIGEua2V5ID09PSBiLmtleSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc1BhdGNoID0gZGlmZlByb3BzKGEucHJvcGVydGllcywgYi5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1BhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVlBhdGNoKFZQYXRjaC5QUk9QUywgYSwgcHJvcHNQYXRjaCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwcGx5ID0gZGlmZkNoaWxkcmVuKGEsIGIsIHBhdGNoLCBhcHBseSwgaW5kZXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZOT0RFLCBhLCBiKSlcbiAgICAgICAgICAgICAgICBhcHBseUNsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guVk5PREUsIGEsIGIpKVxuICAgICAgICAgICAgYXBwbHlDbGVhciA9IHRydWVcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWVGV4dChiKSkge1xuICAgICAgICBpZiAoIWlzVlRleHQoYSkpIHtcbiAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZURVhULCBhLCBiKSlcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYS50ZXh0ICE9PSBiLnRleHQpIHtcbiAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZURVhULCBhLCBiKSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNXaWRnZXQoYikpIHtcbiAgICAgICAgaWYgKCFpc1dpZGdldChhKSkge1xuICAgICAgICAgICAgYXBwbHlDbGVhciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLldJREdFVCwgYSwgYikpXG4gICAgfVxuXG4gICAgaWYgKGFwcGx5KSB7XG4gICAgICAgIHBhdGNoW2luZGV4XSA9IGFwcGx5XG4gICAgfVxuXG4gICAgaWYgKGFwcGx5Q2xlYXIpIHtcbiAgICAgICAgY2xlYXJTdGF0ZShhLCBwYXRjaCwgaW5kZXgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaWZmQ2hpbGRyZW4oYSwgYiwgcGF0Y2gsIGFwcGx5LCBpbmRleCkge1xuICAgIHZhciBhQ2hpbGRyZW4gPSBhLmNoaWxkcmVuXG4gICAgdmFyIG9yZGVyZWRTZXQgPSByZW9yZGVyKGFDaGlsZHJlbiwgYi5jaGlsZHJlbilcbiAgICB2YXIgYkNoaWxkcmVuID0gb3JkZXJlZFNldC5jaGlsZHJlblxuXG4gICAgdmFyIGFMZW4gPSBhQ2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIGJMZW4gPSBiQ2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIGxlbiA9IGFMZW4gPiBiTGVuID8gYUxlbiA6IGJMZW5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGxlZnROb2RlID0gYUNoaWxkcmVuW2ldXG4gICAgICAgIHZhciByaWdodE5vZGUgPSBiQ2hpbGRyZW5baV1cbiAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgIGlmICghbGVmdE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChyaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlc3Mgbm9kZXMgaW4gYiBuZWVkIHRvIGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guSU5TRVJULCBudWxsLCByaWdodE5vZGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FsayhsZWZ0Tm9kZSwgcmlnaHROb2RlLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWTm9kZShsZWZ0Tm9kZSkgJiYgbGVmdE5vZGUuY291bnQpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IGxlZnROb2RlLmNvdW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JkZXJlZFNldC5tb3Zlcykge1xuICAgICAgICAvLyBSZW9yZGVyIG5vZGVzIGxhc3RcbiAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChcbiAgICAgICAgICAgIFZQYXRjaC5PUkRFUixcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBvcmRlcmVkU2V0Lm1vdmVzXG4gICAgICAgICkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFwcGx5XG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RhdGUodk5vZGUsIHBhdGNoLCBpbmRleCkge1xuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIHNpbmdsZSB3YWxrLCBub3QgdHdvXG4gICAgdW5ob29rKHZOb2RlLCBwYXRjaCwgaW5kZXgpXG4gICAgZGVzdHJveVdpZGdldHModk5vZGUsIHBhdGNoLCBpbmRleClcbn1cblxuLy8gUGF0Y2ggcmVjb3JkcyBmb3IgYWxsIGRlc3Ryb3llZCB3aWRnZXRzIG11c3QgYmUgYWRkZWQgYmVjYXVzZSB3ZSBuZWVkXG4vLyBhIERPTSBub2RlIHJlZmVyZW5jZSBmb3IgdGhlIGRlc3Ryb3kgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlc3Ryb3lXaWRnZXRzKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoaXNXaWRnZXQodk5vZGUpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygdk5vZGUuZGVzdHJveSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBlbmRQYXRjaChcbiAgICAgICAgICAgICAgICBwYXRjaFtpbmRleF0sXG4gICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guUkVNT1ZFLCB2Tm9kZSwgbnVsbClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWTm9kZSh2Tm9kZSkgJiYgKHZOb2RlLmhhc1dpZGdldHMgfHwgdk5vZGUuaGFzVGh1bmtzKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlblxuICAgICAgICB2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBpbmRleCArPSAxXG5cbiAgICAgICAgICAgIGRlc3Ryb3lXaWRnZXRzKGNoaWxkLCBwYXRjaCwgaW5kZXgpXG5cbiAgICAgICAgICAgIGlmIChpc1ZOb2RlKGNoaWxkKSAmJiBjaGlsZC5jb3VudCkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IGNoaWxkLmNvdW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVGh1bmsodk5vZGUpKSB7XG4gICAgICAgIHRodW5rcyh2Tm9kZSwgbnVsbCwgcGF0Y2gsIGluZGV4KVxuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGEgc3ViLXBhdGNoIGZvciB0aHVua3NcbmZ1bmN0aW9uIHRodW5rcyhhLCBiLCBwYXRjaCwgaW5kZXgpIHtcbiAgICB2YXIgbm9kZXMgPSBoYW5kbGVUaHVuayhhLCBiKVxuICAgIHZhciB0aHVua1BhdGNoID0gZGlmZihub2Rlcy5hLCBub2Rlcy5iKVxuICAgIGlmIChoYXNQYXRjaGVzKHRodW5rUGF0Y2gpKSB7XG4gICAgICAgIHBhdGNoW2luZGV4XSA9IG5ldyBWUGF0Y2goVlBhdGNoLlRIVU5LLCBudWxsLCB0aHVua1BhdGNoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUGF0Y2hlcyhwYXRjaCkge1xuICAgIGZvciAodmFyIGluZGV4IGluIHBhdGNoKSB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gXCJhXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gRXhlY3V0ZSBob29rcyB3aGVuIHR3byBub2RlcyBhcmUgaWRlbnRpY2FsXG5mdW5jdGlvbiB1bmhvb2sodk5vZGUsIHBhdGNoLCBpbmRleCkge1xuICAgIGlmIChpc1ZOb2RlKHZOb2RlKSkge1xuICAgICAgICBpZiAodk5vZGUuaG9va3MpIHtcbiAgICAgICAgICAgIHBhdGNoW2luZGV4XSA9IGFwcGVuZFBhdGNoKFxuICAgICAgICAgICAgICAgIHBhdGNoW2luZGV4XSxcbiAgICAgICAgICAgICAgICBuZXcgVlBhdGNoKFxuICAgICAgICAgICAgICAgICAgICBWUGF0Y2guUFJPUFMsXG4gICAgICAgICAgICAgICAgICAgIHZOb2RlLFxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRLZXlzKHZOb2RlLmhvb2tzKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2Tm9kZS5kZXNjZW5kYW50SG9va3MgfHwgdk5vZGUuaGFzVGh1bmtzKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlblxuICAgICAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgICAgICAgICAgdW5ob29rKGNoaWxkLCBwYXRjaCwgaW5kZXgpXG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWTm9kZShjaGlsZCkgJiYgY2hpbGQuY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gY2hpbGQuY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVGh1bmsodk5vZGUpKSB7XG4gICAgICAgIHRodW5rcyh2Tm9kZSwgbnVsbCwgcGF0Y2gsIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5kZWZpbmVkS2V5cyhvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge31cblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIExpc3QgZGlmZiwgbmFpdmUgbGVmdCB0byByaWdodCByZW9yZGVyaW5nXG5mdW5jdGlvbiByZW9yZGVyKGFDaGlsZHJlbiwgYkNoaWxkcmVuKSB7XG4gICAgLy8gTyhNKSB0aW1lLCBPKE0pIG1lbW9yeVxuICAgIHZhciBiQ2hpbGRJbmRleCA9IGtleUluZGV4KGJDaGlsZHJlbilcbiAgICB2YXIgYktleXMgPSBiQ2hpbGRJbmRleC5rZXlzXG4gICAgdmFyIGJGcmVlID0gYkNoaWxkSW5kZXguZnJlZVxuXG4gICAgaWYgKGJGcmVlLmxlbmd0aCA9PT0gYkNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGJDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPKE4pIHRpbWUsIE8oTikgbWVtb3J5XG4gICAgdmFyIGFDaGlsZEluZGV4ID0ga2V5SW5kZXgoYUNoaWxkcmVuKVxuICAgIHZhciBhS2V5cyA9IGFDaGlsZEluZGV4LmtleXNcbiAgICB2YXIgYUZyZWUgPSBhQ2hpbGRJbmRleC5mcmVlXG5cbiAgICBpZiAoYUZyZWUubGVuZ3RoID09PSBhQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogYkNoaWxkcmVuLFxuICAgICAgICAgICAgbW92ZXM6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE8oTUFYKE4sIE0pKSBtZW1vcnlcbiAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXVxuXG4gICAgdmFyIGZyZWVJbmRleCA9IDBcbiAgICB2YXIgZnJlZUNvdW50ID0gYkZyZWUubGVuZ3RoXG4gICAgdmFyIGRlbGV0ZWRJdGVtcyA9IDBcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhIGFuZCBtYXRjaCBhIG5vZGUgaW4gYlxuICAgIC8vIE8oTikgdGltZSxcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBhQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFJdGVtID0gYUNoaWxkcmVuW2ldXG4gICAgICAgIHZhciBpdGVtSW5kZXhcblxuICAgICAgICBpZiAoYUl0ZW0ua2V5KSB7XG4gICAgICAgICAgICBpZiAoYktleXMuaGFzT3duUHJvcGVydHkoYUl0ZW0ua2V5KSkge1xuICAgICAgICAgICAgICAgIC8vIE1hdGNoIHVwIHRoZSBvbGQga2V5c1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IGJLZXlzW2FJdGVtLmtleV1cbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKGJDaGlsZHJlbltpdGVtSW5kZXhdKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQga2V5ZWQgaXRlbXNcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBpIC0gZGVsZXRlZEl0ZW1zKytcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNYXRjaCB0aGUgaXRlbSBpbiBhIHdpdGggdGhlIG5leHQgZnJlZSBpdGVtIGluIGJcbiAgICAgICAgICAgIGlmIChmcmVlSW5kZXggPCBmcmVlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBiRnJlZVtmcmVlSW5kZXgrK11cbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKGJDaGlsZHJlbltpdGVtSW5kZXhdKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gZnJlZSBpdGVtcyBpbiBiIHRvIG1hdGNoIHdpdGhcbiAgICAgICAgICAgICAgICAvLyB0aGUgZnJlZSBpdGVtcyBpbiBhLCBzbyB0aGUgZXh0cmEgZnJlZSBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBkZWxldGVkLlxuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IGkgLSBkZWxldGVkSXRlbXMrK1xuICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsYXN0RnJlZUluZGV4ID0gZnJlZUluZGV4ID49IGJGcmVlLmxlbmd0aCA/XG4gICAgICAgIGJDaGlsZHJlbi5sZW5ndGggOlxuICAgICAgICBiRnJlZVtmcmVlSW5kZXhdXG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYiBhbmQgYXBwZW5kIGFueSBuZXcga2V5c1xuICAgIC8vIE8oTSkgdGltZVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYkNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXdJdGVtID0gYkNoaWxkcmVuW2pdXG5cbiAgICAgICAgaWYgKG5ld0l0ZW0ua2V5KSB7XG4gICAgICAgICAgICBpZiAoIWFLZXlzLmhhc093blByb3BlcnR5KG5ld0l0ZW0ua2V5KSkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhbnkgbmV3IGtleWVkIGl0ZW1zXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGFkZGluZyBuZXcgaXRlbXMgdG8gdGhlIGVuZCBhbmQgdGhlbiBzb3J0aW5nIHRoZW1cbiAgICAgICAgICAgICAgICAvLyBpbiBwbGFjZS4gSW4gZnV0dXJlIHdlIHNob3VsZCBpbnNlcnQgbmV3IGl0ZW1zIGluIHBsYWNlLlxuICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqID49IGxhc3RGcmVlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIEFkZCBhbnkgbGVmdG92ZXIgbm9uLWtleWVkIGl0ZW1zXG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0l0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2ltdWxhdGUgPSBuZXdDaGlsZHJlbi5zbGljZSgpXG4gICAgdmFyIHNpbXVsYXRlSW5kZXggPSAwXG4gICAgdmFyIHJlbW92ZXMgPSBbXVxuICAgIHZhciBpbnNlcnRzID0gW11cbiAgICB2YXIgc2ltdWxhdGVJdGVtXG5cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGJDaGlsZHJlbi5sZW5ndGg7KSB7XG4gICAgICAgIHZhciB3YW50ZWRJdGVtID0gYkNoaWxkcmVuW2tdXG4gICAgICAgIHNpbXVsYXRlSXRlbSA9IHNpbXVsYXRlW3NpbXVsYXRlSW5kZXhdXG5cbiAgICAgICAgLy8gcmVtb3ZlIGl0ZW1zXG4gICAgICAgIHdoaWxlIChzaW11bGF0ZUl0ZW0gPT09IG51bGwgJiYgc2ltdWxhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBudWxsKSlcbiAgICAgICAgICAgIHNpbXVsYXRlSXRlbSA9IHNpbXVsYXRlW3NpbXVsYXRlSW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNpbXVsYXRlSXRlbSB8fCBzaW11bGF0ZUl0ZW0ua2V5ICE9PSB3YW50ZWRJdGVtLmtleSkge1xuICAgICAgICAgICAgLy8gaWYgd2UgbmVlZCBhIGtleSBpbiB0aGlzIHBvc2l0aW9uLi4uXG4gICAgICAgICAgICBpZiAod2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYW4gaW5zZXJ0IGRvZXNuJ3QgcHV0IHRoaXMga2V5IGluIHBsYWNlLCBpdCBuZWVkcyB0byBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGlmIChiS2V5c1tzaW11bGF0ZUl0ZW0ua2V5XSAhPT0gayArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZXMucHVzaChyZW1vdmUoc2ltdWxhdGUsIHNpbXVsYXRlSW5kZXgsIHNpbXVsYXRlSXRlbS5rZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGVJdGVtID0gc2ltdWxhdGVbc2ltdWxhdGVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZW1vdmUgZGlkbid0IHB1dCB0aGUgd2FudGVkIGl0ZW0gaW4gcGxhY2UsIHdlIG5lZWQgdG8gaW5zZXJ0IGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNpbXVsYXRlSXRlbSB8fCBzaW11bGF0ZUl0ZW0ua2V5ICE9PSB3YW50ZWRJdGVtLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydHMucHVzaCh7a2V5OiB3YW50ZWRJdGVtLmtleSwgdG86IGt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlbXMgYXJlIG1hdGNoaW5nLCBzbyBza2lwIGFoZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0ZUluZGV4KytcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydHMucHVzaCh7a2V5OiB3YW50ZWRJdGVtLmtleSwgdG86IGt9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhIGtleSBpbiBzaW11bGF0ZSBoYXMgbm8gbWF0Y2hpbmcgd2FudGVkIGtleSwgcmVtb3ZlIGl0XG4gICAgICAgICAgICBlbHNlIGlmIChzaW11bGF0ZUl0ZW0gJiYgc2ltdWxhdGVJdGVtLmtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZXMucHVzaChyZW1vdmUoc2ltdWxhdGUsIHNpbXVsYXRlSW5kZXgsIHNpbXVsYXRlSXRlbS5rZXkpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2ltdWxhdGVJbmRleCsrXG4gICAgICAgICAgICBrKytcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgdGhlIHJlbWFpbmluZyBub2RlcyBmcm9tIHNpbXVsYXRlXG4gICAgd2hpbGUoc2ltdWxhdGVJbmRleCA8IHNpbXVsYXRlLmxlbmd0aCkge1xuICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0gJiYgc2ltdWxhdGVJdGVtLmtleSkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG9ubHkgbW92ZXMgd2UgaGF2ZSBhcmUgZGVsZXRlcyB0aGVuIHdlIGNhbiBqdXN0XG4gICAgLy8gbGV0IHRoZSBkZWxldGUgcGF0Y2ggcmVtb3ZlIHRoZXNlIGl0ZW1zLlxuICAgIGlmIChyZW1vdmVzLmxlbmd0aCA9PT0gZGVsZXRlZEl0ZW1zICYmICFpbnNlcnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuLFxuICAgICAgICAgICAgbW92ZXM6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlbixcbiAgICAgICAgbW92ZXM6IHtcbiAgICAgICAgICAgIHJlbW92ZXM6IHJlbW92ZXMsXG4gICAgICAgICAgICBpbnNlcnRzOiBpbnNlcnRzXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGluZGV4LCBrZXkpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbTogaW5kZXgsXG4gICAgICAgIGtleToga2V5XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrZXlJbmRleChjaGlsZHJlbikge1xuICAgIHZhciBrZXlzID0ge31cbiAgICB2YXIgZnJlZSA9IFtdXG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXG4gICAgICAgIGlmIChjaGlsZC5rZXkpIHtcbiAgICAgICAgICAgIGtleXNbY2hpbGQua2V5XSA9IGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyZWUucHVzaChpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5czoga2V5cywgICAgIC8vIEEgaGFzaCBvZiBrZXkgbmFtZSB0byBpbmRleFxuICAgICAgICBmcmVlOiBmcmVlICAgICAgLy8gQW4gYXJyYXkgb2YgdW5rZXllZCBpdGVtIGluZGljZXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBhdGNoKGFwcGx5LCBwYXRjaCkge1xuICAgIGlmIChhcHBseSkge1xuICAgICAgICBpZiAoaXNBcnJheShhcHBseSkpIHtcbiAgICAgICAgICAgIGFwcGx5LnB1c2gocGF0Y2gpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseSA9IFthcHBseSwgcGF0Y2hdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXBwbHlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0Y2hcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lVHJhdmVsO1xuXG5mdW5jdGlvbiBUaW1lVHJhdmVsKHN0YXRlKSB7XG4gICAgdmFyIGhpc3RvcnkgPSBbc3RhdGUoKV07XG5cbiAgICAvLyBUcmFja3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gaGlzdG9yeS5cbiAgICB2YXIgY3Vyc29yID0gMDtcblxuICAgIHZhciBpc1JlZG9PclVuZG8gPSBmYWxzZTtcblxuICAgIHN0YXRlKGZ1bmN0aW9uIHJlY29yZFN0YXRlKG5ld1N0YXRlKSB7XG5cbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBhIHN0YXRlIGNoYW5nZS5cbiAgICAgICAgLy8gU3RhdGUgY2hhbmdlcyBoYXBwZW4gZHVlIHRvIGV2ZW50cyBiZWluZyBoYW5kbGVkLCBvciBkdWUgdG9cbiAgICAgICAgLy8gdW5kby9yZWRvLlxuXG4gICAgICAgIC8vIElmIHdlIGFyZSByZXBsYXlpbmcgaXRlbXMgaW4gdGhlIGhpc3RvcnksXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gcmUtYWRkIHRoZW0gdG8gdGhlIGVuZCBvZiB0aGUgaGlzdG9yeS5cbiAgICAgICAgLy8gSnVzdCBxdWl0LlxuICAgICAgICBpZiAoaXNSZWRvT3JVbmRvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSd2ZSBtYWRlIGl0IHRoaXMgZmFyLCBgbmV3U3RhdGVgIGlzIGR1ZSB0byBhIG5ldyBhY3Rpb24sXG4gICAgICAgIC8vIG5vdCBkdWUgdG8gdW5kby9yZWRvLlxuXG4gICAgICAgIC8vIElmIHdlJ3ZlIGNhbGxlZCBgdW5kb2AgYSBidW5jaCBvZiB0aW1lcyxcbiAgICAgICAgLy8gdGhlIGN1cnNvciB3b24ndCBiZSBhdCB0aGUgZW5kLlxuICAgICAgICAvLyBBbnkgc3RhdGVzIHBhc3QgdGhlIGN1cnNvciBzaG91bGQgYmUgY3V0IG9mZi5cbiAgICAgICAgaGlzdG9yeS5zcGxpY2UoY3Vyc29yICsgMSk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgaXRlbSB0byB0aGUgaGlzdG9yeVxuICAgICAgICBoaXN0b3J5LnB1c2gobmV3U3RhdGUpO1xuXG4gICAgICAgIGN1cnNvciA9IGhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHVuZG86IHVuZG8sIHJlZG86IHJlZG8gfTtcblxuICAgIGZ1bmN0aW9uIHVuZG8oKSB7XG4gICAgICAgIGlmIChjdXJzb3IgPCAxKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBtb3ZlIGJlZm9yZSB0aGUgYmVnaW5uaW5nIG9mIHRpbWVcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJzb3ItLTtcbiAgICAgICAgaXNSZWRvT3JVbmRvID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuc2V0KGhpc3RvcnlbY3Vyc29yXSk7XG4gICAgICAgIGlzUmVkb09yVW5kbyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gaGlzdG9yeVtjdXJzb3JdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZG8oKSB7XG4gICAgICAgIGlmIChjdXJzb3IgKyAxID49IGhpc3RvcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBtb3ZlIHBhc3QgdGhlIGVuZCBvZiB0aW1lXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyc29yKys7XG4gICAgICAgIGlzUmVkb09yVW5kbyA9IHRydWU7XG4gICAgICAgIHN0YXRlLnNldChoaXN0b3J5W2N1cnNvcl0pO1xuICAgICAgICBpc1JlZG9PclVuZG8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGhpc3RvcnlbY3Vyc29yXTtcbiAgICB9XG59XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHt9IDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IGdsb2JhbFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gZ2xvYmFsWydjYW5jZWwnICsgc3VmZml4XSB8fCBnbG9iYWxbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJhZjsgaSsrKSB7XG4gIHJhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKGdsb2JhbCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKVxufVxuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3NsaWNlJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbGlzdCBpdGVyYXRpb24gZnVuY3Rpb24gZnJvbSBhbiBleGlzdGluZyBvbmUgYnkgYWRkaW5nIHR3byBuZXcgcGFyYW1ldGVyc1xuICogdG8gaXRzIGNhbGxiYWNrIGZ1bmN0aW9uOiB0aGUgY3VycmVudCBpbmRleCwgYW5kIHRoZSBlbnRpcmUgbGlzdC5cbiAqXG4gKiBUaGlzIHdvdWxkIHR1cm4sIGZvciBpbnN0YW5jZSwgUmFtZGEncyBzaW1wbGUgYG1hcGAgZnVuY3Rpb24gaW50byBvbmUgdGhhdCBtb3JlIGNsb3NlbHlcbiAqIHJlc2VtYmxlcyBgQXJyYXkucHJvdG90eXBlLm1hcGAuICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgd29yayBmb3IgZnVuY3Rpb25zIGluIHdoaWNoXG4gKiB0aGUgaXRlcmF0aW9uIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGFuZCB3aGVyZSB0aGUgbGlzdCBpcyB0aGUgbGFzdFxuICogcGFyYW1ldGVyLiAgKFRoaXMgbGF0dGVyIG1pZ2h0IGJlIHVuaW1wb3J0YW50IGlmIHRoZSBsaXN0IHBhcmFtZXRlciBpcyBub3QgdXNlZC4pXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICgoYSAuLi4gLT4gYikgLi4uIC0+IFthXSAtPiAqKSAtPiAoYSAuLi4sIEludCwgW2FdIC0+IGIpIC4uLiAtPiBbYV0gLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgbGlzdCBpdGVyYXRpb24gZnVuY3Rpb24gdGhhdCBkb2VzIG5vdCBwYXNzIGluZGV4IG9yIGxpc3QgdG8gaXRzIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQW4gYWx0ZXJlZCBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyAoaXRlbSwgaW5kZXgsIGxpc3QpIHRvIGl0cyBjYWxsYmFja1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYXBJbmRleGVkID0gUi5hZGRJbmRleChSLm1hcCk7XG4gKiAgICAgIG1hcEluZGV4ZWQoZnVuY3Rpb24odmFsLCBpZHgpIHtyZXR1cm4gaWR4ICsgJy0nICsgdmFsO30sIFsnZicsICdvJywgJ28nLCAnYicsICdhJywgJ3InXSk7XG4gKiAgICAgIC8vPT4gWycwLWYnLCAnMS1vJywgJzItbycsICczLWInLCAnNC1hJywgJzUtciddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBhZGRJbmRleChmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIG9yaWdGbiA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbGlzdCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGFyZ3MgPSBfc2xpY2UoYXJndW1lbnRzKTtcbiAgICBhcmdzWzBdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gb3JpZ0ZuLmFwcGx5KHRoaXMsIF9jb25jYXQoYXJndW1lbnRzLCBbaWR4LCBsaXN0XSkpO1xuICAgICAgaWR4ICs9IDE7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgY29udGVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIGZvbGxvd2VkIGJ5IHRoZSBnaXZlblxuICogZWxlbWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHsqfSBlbCBUaGUgZWxlbWVudCB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgbmV3IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHdob3NlIGNvbnRlbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgb3V0cHV0XG4gKiAgICAgICAgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIGNvbnRlbnRzIG9mIHRoZSBvbGQgbGlzdCBmb2xsb3dlZCBieSBgZWxgLlxuICogQHNlZSBSLnByZXBlbmRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFwcGVuZCgndGVzdHMnLCBbJ3dyaXRlJywgJ21vcmUnXSk7IC8vPT4gWyd3cml0ZScsICdtb3JlJywgJ3Rlc3RzJ11cbiAqICAgICAgUi5hcHBlbmQoJ3Rlc3RzJywgW10pOyAvLz0+IFsndGVzdHMnXVxuICogICAgICBSLmFwcGVuZChbJ3Rlc3RzJ10sIFsnd3JpdGUnLCAnbW9yZSddKTsgLy89PiBbJ3dyaXRlJywgJ21vcmUnLCBbJ3Rlc3RzJ11dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhcHBlbmQoZWwsIGxpc3QpIHtcbiAgcmV0dXJuIF9jb25jYXQobGlzdCwgW2VsXSk7XG59KTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGlzIGJvdW5kIHRvIGEgY29udGV4dC5cbiAqIE5vdGU6IGBSLmJpbmRgIGRvZXMgbm90IHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgYXJndW1lbnQtYmluZGluZyBjYXBhYmlsaXRpZXMgb2ZcbiAqIFtGdW5jdGlvbi5wcm90b3R5cGUuYmluZF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vYmluZCkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzZWUgUi5wYXJ0aWFsXG4gKiBAc2lnICgqIC0+ICopIC0+IHsqfSAtPiAoKiAtPiAqKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJpbmQgdG8gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNPYmogVGhlIGNvbnRleHQgdG8gYmluZCBgZm5gIHRvXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgZXhlY3V0ZSBpbiB0aGUgY29udGV4dCBvZiBgdGhpc09iamAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBiaW5kKGZuLCB0aGlzT2JqKSB7XG4gIHJldHVybiBfYXJpdHkoZm4ubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJndW1lbnRzKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgY3VycmllZFxuICogZnVuY3Rpb24gaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy4gRmlyc3QsIGl0cyBhcmd1bWVudHMgbmVlZG4ndFxuICogYmUgcHJvdmlkZWQgb25lIGF0IGEgdGltZS4gSWYgYGZgIGlzIGEgdGVybmFyeSBmdW5jdGlvbiBhbmQgYGdgIGlzXG4gKiBgUi5jdXJyeShmKWAsIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBgUi5fX2AgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBgUi5fX2AsXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRGb3VyTnVtYmVycyA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQpIHtcbiAqICAgICAgICByZXR1cm4gYSArIGIgKyBjICsgZDtcbiAqICAgICAgfTtcbiAqXG4gKiAgICAgIHZhciBjdXJyaWVkQWRkRm91ck51bWJlcnMgPSBSLmN1cnJ5KGFkZEZvdXJOdW1iZXJzKTtcbiAqICAgICAgdmFyIGYgPSBjdXJyaWVkQWRkRm91ck51bWJlcnMoMSwgMik7XG4gKiAgICAgIHZhciBnID0gZigzKTtcbiAqICAgICAgZyg0KTsgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGN1cnJ5Tihmbi5sZW5ndGgsIGZuKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfY3VycnlOID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnlOJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBlcXVpdmFsZW50IG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbiwgd2l0aCB0aGVcbiAqIHNwZWNpZmllZCBhcml0eS4gVGhlIGN1cnJpZWQgZnVuY3Rpb24gaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy5cbiAqIEZpcnN0LCBpdHMgYXJndW1lbnRzIG5lZWRuJ3QgYmUgcHJvdmlkZWQgb25lIGF0IGEgdGltZS4gSWYgYGdgIGlzXG4gKiBgUi5jdXJyeU4oMywgZilgLCB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxKSgyKSgzKWBcbiAqICAgLSBgZygxKSgyLCAzKWBcbiAqICAgLSBgZygxLCAyKSgzKWBcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqXG4gKiBTZWNvbmRseSwgdGhlIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgYFIuX19gIG1heSBiZSB1c2VkIHRvIHNwZWNpZnlcbiAqIFwiZ2Fwc1wiLCBhbGxvd2luZyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMsXG4gKiByZWdhcmRsZXNzIG9mIHRoZWlyIHBvc2l0aW9ucy4gSWYgYGdgIGlzIGFzIGFib3ZlIGFuZCBgX2AgaXMgYFIuX19gLFxuICogdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBmb3IgdGhlIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFkZEZvdXJOdW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgcmV0dXJuIFIuc3VtKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCA0KSk7XG4gKiAgICAgIH07XG4gKlxuICogICAgICB2YXIgY3VycmllZEFkZEZvdXJOdW1iZXJzID0gUi5jdXJyeU4oNCwgYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBjdXJyeU4obGVuZ3RoLCBmbikge1xuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIF9jdXJyeTEoZm4pO1xuICB9XG4gIHJldHVybiBfYXJpdHkobGVuZ3RoLCBfY3VycnlOKGxlbmd0aCwgW10sIGZuKSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgYXJndW1lbnQgaWYgaXQgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkLiBJZiBpdCBpcyBudWxsXG4gKiBvciB1bmRlZmluZWQsIHRoZSBmaXJzdCAoZGVmYXVsdCkgYXJndW1lbnQgaXMgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IHZhbCBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7Yn0gdmFsIFRoZSB2YWx1ZSB0byByZXR1cm4gaWYgaXQgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gKiBAcmV0dXJuIHsqfSBUaGUgdGhlIHNlY29uZCB2YWx1ZSBvciB0aGUgZGVmYXVsdCB2YWx1ZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkZWZhdWx0VG80MiA9IGRlZmF1bHRUbyg0Mik7XG4gKlxuICogICAgICBkZWZhdWx0VG80MihudWxsKTsgIC8vPT4gNDJcbiAqICAgICAgZGVmYXVsdFRvNDIodW5kZWZpbmVkKTsgIC8vPT4gNDJcbiAqICAgICAgZGVmYXVsdFRvNDIoJ1JhbWRhJyk7ICAvLz0+ICdSYW1kYSdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGRlZmF1bHRUbyhkLCB2KSB7XG4gIHJldHVybiB2ID09IG51bGwgPyBkIDogdjtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX2ZpbHRlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2ZpbHRlcicpO1xudmFyIF94ZmlsdGVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGZpbHRlcicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgb25seSB0aG9zZSBpdGVtcyB0aGF0IG1hdGNoIGEgZ2l2ZW4gcHJlZGljYXRlIGZ1bmN0aW9uLlxuICogVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiBpcyBwYXNzZWQgb25lIGFyZ3VtZW50OiAqKHZhbHVlKSouXG4gKlxuICogTm90ZSB0aGF0IGBSLmZpbHRlcmAgZG9lcyBub3Qgc2tpcCBkZWxldGVkIG9yIHVuYXNzaWduZWQgaW5kaWNlcywgdW5saWtlIHRoZSBuYXRpdmVcbiAqIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHMgb24gdGhpcyBiZWhhdmlvciwgc2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmlsdGVyI0Rlc2NyaXB0aW9uXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqIEBzZWUgUi5yZWplY3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNFdmVuID0gZnVuY3Rpb24obikge1xuICogICAgICAgIHJldHVybiBuICUgMiA9PT0gMDtcbiAqICAgICAgfTtcbiAqICAgICAgUi5maWx0ZXIoaXNFdmVuLCBbMSwgMiwgMywgNF0pOyAvLz0+IFsyLCA0XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZSgnZmlsdGVyJywgX3hmaWx0ZXIsIF9maWx0ZXIpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZmluZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hmaW5kJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBsaXN0IHdoaWNoIG1hdGNoZXMgdGhlIHByZWRpY2F0ZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm9cbiAqIGVsZW1lbnQgbWF0Y2hlcy5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gYSB8IHVuZGVmaW5lZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgZWxlbWVudCBpcyB0aGVcbiAqICAgICAgICBkZXNpcmVkIG9uZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZWxlbWVudCBmb3VuZCwgb3IgYHVuZGVmaW5lZGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhzID0gW3thOiAxfSwge2E6IDJ9LCB7YTogM31dO1xuICogICAgICBSLmZpbmQoUi5wcm9wRXEoJ2EnLCAyKSkoeHMpOyAvLz0+IHthOiAyfVxuICogICAgICBSLmZpbmQoUi5wcm9wRXEoJ2EnLCA0KSkoeHMpOyAvLz0+IHVuZGVmaW5lZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZSgnZmluZCcsIF94ZmluZCwgZnVuY3Rpb24gZmluZChmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiBsaXN0W2lkeF07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3NsaWNlJyk7XG52YXIgY3VycnkgPSByZXF1aXJlKCcuL2N1cnJ5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIG11Y2ggbGlrZSB0aGUgc3VwcGxpZWQgb25lLCBleGNlcHQgdGhhdCB0aGUgZmlyc3QgdHdvIGFyZ3VtZW50cydcbiAqIG9yZGVyIGlzIHJldmVyc2VkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIChhIC0+IGIgLT4gYyAtPiAuLi4gLT4geikgLT4gKGIgLT4gYSAtPiBjIC0+IC4uLiAtPiB6KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycyByZXZlcnNlZC5cbiAqIEByZXR1cm4geyp9IFRoZSByZXN1bHQgb2YgaW52b2tpbmcgYGZuYCB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycycgb3JkZXIgcmV2ZXJzZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1lcmdlVGhyZWUgPSBmdW5jdGlvbihhLCBiLCBjKSB7XG4gKiAgICAgICAgcmV0dXJuIChbXSkuY29uY2F0KGEsIGIsIGMpO1xuICogICAgICB9O1xuICpcbiAqICAgICAgbWVyZ2VUaHJlZSgxLCAyLCAzKTsgLy89PiBbMSwgMiwgM11cbiAqXG4gKiAgICAgIFIuZmxpcChtZXJnZVRocmVlKSgxLCAyLCAzKTsgLy89PiBbMiwgMSwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGZsaXAoZm4pIHtcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgYXJncyA9IF9zbGljZShhcmd1bWVudHMpO1xuICAgIGFyZ3NbMF0gPSBiO1xuICAgIGFyZ3NbMV0gPSBhO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY2hlY2tGb3JNZXRob2QgPSByZXF1aXJlKCcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBpbnB1dCBgbGlzdGAsIGNhbGxpbmcgYSBwcm92aWRlZCBmdW5jdGlvbiBgZm5gIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlXG4gKiBsaXN0LlxuICpcbiAqIGBmbmAgcmVjZWl2ZXMgb25lIGFyZ3VtZW50OiAqKHZhbHVlKSouXG4gKlxuICogTm90ZTogYFIuZm9yRWFjaGAgZG9lcyBub3Qgc2tpcCBkZWxldGVkIG9yIHVuYXNzaWduZWQgaW5kaWNlcyAoc3BhcnNlIGFycmF5cyksIHVubGlrZVxuICogdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZC4gRm9yIG1vcmUgZGV0YWlscyBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoI0Rlc2NyaXB0aW9uXG4gKlxuICogQWxzbyBub3RlIHRoYXQsIHVubGlrZSBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgLCBSYW1kYSdzIGBmb3JFYWNoYCByZXR1cm5zIHRoZSBvcmlnaW5hbFxuICogYXJyYXkuIEluIHNvbWUgbGlicmFyaWVzIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGVhY2hgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gKikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZS4gUmVjZWl2ZXMgb25lIGFyZ3VtZW50LCBgdmFsdWVgLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG9yaWdpbmFsIGxpc3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHByaW50WFBsdXNGaXZlID0gZnVuY3Rpb24oeCkgeyBjb25zb2xlLmxvZyh4ICsgNSk7IH07XG4gKiAgICAgIFIuZm9yRWFjaChwcmludFhQbHVzRml2ZSwgWzEsIDIsIDNdKTsgLy89PiBbMSwgMiwgM11cbiAqICAgICAgLy8tPiA2XG4gKiAgICAgIC8vLT4gN1xuICogICAgICAvLy0+IDhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9jaGVja0Zvck1ldGhvZCgnZm9yRWFjaCcsIGZ1bmN0aW9uIGZvckVhY2goZm4sIGxpc3QpIHtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGZuKGxpc3RbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3hncm91cEJ5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGdyb3VwQnknKTtcbnZhciBhcHBlbmQgPSByZXF1aXJlKCcuL2FwcGVuZCcpO1xuXG5cbi8qKlxuICogU3BsaXRzIGEgbGlzdCBpbnRvIHN1Yi1saXN0cyBzdG9yZWQgaW4gYW4gb2JqZWN0LCBiYXNlZCBvbiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYSBTdHJpbmctcmV0dXJuaW5nIGZ1bmN0aW9uXG4gKiBvbiBlYWNoIGVsZW1lbnQsIGFuZCBncm91cGluZyB0aGUgcmVzdWx0cyBhY2NvcmRpbmcgdG8gdmFsdWVzIHJldHVybmVkLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IFN0cmluZykgLT4gW2FdIC0+IHtTdHJpbmc6IFthXX1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIDo6IGEgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBncm91cFxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgb3V0cHV0IG9mIGBmbmAgZm9yIGtleXMsIG1hcHBlZCB0byBhcnJheXMgb2YgZWxlbWVudHNcbiAqICAgICAgICAgdGhhdCBwcm9kdWNlZCB0aGF0IGtleSB3aGVuIHBhc3NlZCB0byBgZm5gLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBieUdyYWRlID0gUi5ncm91cEJ5KGZ1bmN0aW9uKHN0dWRlbnQpIHtcbiAqICAgICAgICB2YXIgc2NvcmUgPSBzdHVkZW50LnNjb3JlO1xuICogICAgICAgIHJldHVybiBzY29yZSA8IDY1ID8gJ0YnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA3MCA/ICdEJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgODAgPyAnQycgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDkwID8gJ0InIDogJ0EnO1xuICogICAgICB9KTtcbiAqICAgICAgdmFyIHN0dWRlbnRzID0gW3tuYW1lOiAnQWJieScsIHNjb3JlOiA4NH0sXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0VkZHknLCBzY29yZTogNTh9LFxuICogICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0phY2snLCBzY29yZTogNjl9XTtcbiAqICAgICAgYnlHcmFkZShzdHVkZW50cyk7XG4gKiAgICAgIC8vIHtcbiAqICAgICAgLy8gICAnQSc6IFt7bmFtZTogJ0RpYW5uZScsIHNjb3JlOiA5OX1dLFxuICogICAgICAvLyAgICdCJzogW3tuYW1lOiAnQWJieScsIHNjb3JlOiA4NH1dXG4gKiAgICAgIC8vICAgLy8gLi4uLFxuICogICAgICAvLyAgICdGJzogW3tuYW1lOiAnRWRkeScsIHNjb3JlOiA1OH1dXG4gKiAgICAgIC8vIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoJ2dyb3VwQnknLCBfeGdyb3VwQnksIGZ1bmN0aW9uIGdyb3VwQnkoZm4sIGxpc3QpIHtcbiAgcmV0dXJuIF9yZWR1Y2UoZnVuY3Rpb24oYWNjLCBlbHQpIHtcbiAgICB2YXIga2V5ID0gZm4oZWx0KTtcbiAgICBhY2Nba2V5XSA9IGFwcGVuZChlbHQsIGFjY1trZXldIHx8IChhY2Nba2V5XSA9IFtdKSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30sIGxpc3QpO1xufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfYXJpdHkobiwgZm4pIHtcbiAgLy8ganNoaW50IHVudXNlZDp2YXJzXG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhMCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhMCwgYTEpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMikgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMykgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDU6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA2OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDc6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDg6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA5OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDEwOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byBfYXJpdHkgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIG5vIGdyZWF0ZXIgdGhhbiB0ZW4nKTtcbiAgfVxufTtcbiIsInZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzQXJyYXknKTtcbnZhciBfc2xpY2UgPSByZXF1aXJlKCcuL19zbGljZScpO1xuXG5cbi8qKlxuICogU2ltaWxhciB0byBoYXNNZXRob2QsIHRoaXMgY2hlY2tzIHdoZXRoZXIgYSBmdW5jdGlvbiBoYXMgYSBbbWV0aG9kbmFtZV1cbiAqIGZ1bmN0aW9uLiBJZiBpdCBpc24ndCBhbiBhcnJheSBpdCB3aWxsIGV4ZWN1dGUgdGhhdCBmdW5jdGlvbiBvdGhlcndpc2UgaXQgd2lsbFxuICogZGVmYXVsdCB0byB0aGUgcmFtZGEgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIHJhbWRhIGltcGxlbXRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZG5hbWUgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uXG4gKiBAcmV0dXJuIHtPYmplY3R9IFdoYXRldmVyIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIG1ldGhvZCBpcy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY2hlY2tGb3JNZXRob2QobWV0aG9kbmFtZSwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2xlbmd0aCAtIDFdO1xuICAgIHJldHVybiAoX2lzQXJyYXkob2JqKSB8fCB0eXBlb2Ygb2JqW21ldGhvZG5hbWVdICE9PSAnZnVuY3Rpb24nKSA/XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDpcbiAgICAgIG9ialttZXRob2RuYW1lXS5hcHBseShvYmosIF9zbGljZShhcmd1bWVudHMsIDAsIGxlbmd0aCAtIDEpKTtcbiAgfTtcbn07XG4iLCIvKipcbiAqIFByaXZhdGUgYGNvbmNhdGAgZnVuY3Rpb24gdG8gbWVyZ2UgdHdvIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQxPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBbc2V0Mj1bXV0gQW4gYXJyYXktbGlrZSBvYmplY3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcsIG1lcmdlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBfY29uY2F0KFs0LCA1LCA2XSwgWzEsIDIsIDNdKTsgLy89PiBbNCwgNSwgNiwgMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY29uY2F0KHNldDEsIHNldDIpIHtcbiAgc2V0MSA9IHNldDEgfHwgW107XG4gIHNldDIgPSBzZXQyIHx8IFtdO1xuICB2YXIgaWR4O1xuICB2YXIgbGVuMSA9IHNldDEubGVuZ3RoO1xuICB2YXIgbGVuMiA9IHNldDIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjEpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQxW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjIpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQyW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9fYXJpdHknKTtcbnZhciBfc2xpY2UgPSByZXF1aXJlKCcuL19zbGljZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yKGNvbmNhdCkge1xuICByZXR1cm4gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgYXJncyA9IF9zbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBfYXJpdHkoTWF0aC5tYXgoMCwgZm4ubGVuZ3RoIC0gYXJncy5sZW5ndGgpLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBjb25jYXQoYXJncywgYXJndW1lbnRzKSk7XG4gICAgfSk7XG4gIH07XG59O1xuIiwiLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgdHdvLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkxKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMShhKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmMTtcbiAgICB9IGVsc2UgaWYgKGEgIT0gbnVsbCAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59O1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0d28tYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeTIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYyKGEsIGIpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDEgJiYgYSAhPSBudWxsICYmIGFbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZjI7XG4gICAgfSBlbHNlIGlmIChuID09PSAxKSB7XG4gICAgICByZXR1cm4gX2N1cnJ5MShmdW5jdGlvbihiKSB7IHJldHVybiBmbihhLCBiKTsgfSk7XG4gICAgfSBlbHNlIGlmIChuID09PSAyICYmIGEgIT0gbnVsbCAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBiICE9IG51bGwgJiYgYlsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYSAhPSBudWxsICYmIGFbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gX2N1cnJ5MShmdW5jdGlvbihhKSB7IHJldHVybiBmbihhLCBiKTsgfSk7XG4gICAgfSBlbHNlIGlmIChuID09PSAyICYmIGIgIT0gbnVsbCAmJiBiWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIF9jdXJyeTEoZnVuY3Rpb24oYikgeyByZXR1cm4gZm4oYSwgYik7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4oYSwgYik7XG4gICAgfVxuICB9O1xufTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL19hcml0eScpO1xuXG5cbi8qKlxuICogSW50ZXJuYWwgY3VycnlOIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IG9mIHRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHJldHVybiB7YXJyYXl9IEFuIGFycmF5IG9mIGFyZ3VtZW50cyByZWNlaXZlZCB0aHVzIGZhci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnlOKGxlbmd0aCwgcmVjZWl2ZWQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tYmluZWQgPSBbXTtcbiAgICB2YXIgYXJnc0lkeCA9IDA7XG4gICAgdmFyIGxlZnQgPSBsZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkSWR4ID0gMDtcbiAgICB3aGlsZSAoY29tYmluZWRJZHggPCByZWNlaXZlZC5sZW5ndGggfHwgYXJnc0lkeCA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAoY29tYmluZWRJZHggPCByZWNlaXZlZC5sZW5ndGggJiZcbiAgICAgICAgICAocmVjZWl2ZWRbY29tYmluZWRJZHhdID09IG51bGwgfHxcbiAgICAgICAgICAgcmVjZWl2ZWRbY29tYmluZWRJZHhdWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSAhPT0gdHJ1ZSB8fFxuICAgICAgICAgICBhcmdzSWR4ID49IGFyZ3VtZW50cy5sZW5ndGgpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2VpdmVkW2NvbWJpbmVkSWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGFyZ3VtZW50c1thcmdzSWR4XTtcbiAgICAgICAgYXJnc0lkeCArPSAxO1xuICAgICAgfVxuICAgICAgY29tYmluZWRbY29tYmluZWRJZHhdID0gcmVzdWx0O1xuICAgICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdFsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gIT09IHRydWUpIHtcbiAgICAgICAgbGVmdCAtPSAxO1xuICAgICAgfVxuICAgICAgY29tYmluZWRJZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQgPD0gMCA/IGZuLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IF9hcml0eShsZWZ0LCBfY3VycnlOKGxlbmd0aCwgY29tYmluZWQsIGZuKSk7XG4gIH07XG59O1xuIiwidmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9faXNBcnJheScpO1xudmFyIF9pc1RyYW5zZm9ybWVyID0gcmVxdWlyZSgnLi9faXNUcmFuc2Zvcm1lcicpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vX3NsaWNlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIHdpdGggZGlmZmVyZW50IHN0cmF0ZWdpZXMgYmFzZWQgb24gdGhlXG4gKiBvYmplY3QgaW4gbGlzdCBwb3NpdGlvbiAobGFzdCBhcmd1bWVudCkuIElmIGl0IGlzIGFuIGFycmF5LCBleGVjdXRlcyBbZm5dLlxuICogT3RoZXJ3aXNlLCBpZiBpdCBoYXMgYSAgZnVuY3Rpb24gd2l0aCBbbWV0aG9kbmFtZV0sIGl0IHdpbGwgZXhlY3V0ZSB0aGF0XG4gKiBmdW5jdGlvbiAoZnVuY3RvciBjYXNlKS4gT3RoZXJ3aXNlLCBpZiBpdCBpcyBhIHRyYW5zZm9ybWVyLCB1c2VzIHRyYW5zZHVjZXJcbiAqIFt4Zl0gdG8gcmV0dXJuIGEgbmV3IHRyYW5zZm9ybWVyICh0cmFuc2R1Y2VyIGNhc2UpLiBPdGhlcndpc2UsIGl0IHdpbGxcbiAqIGRlZmF1bHQgdG8gZXhlY3V0aW5nIFtmbl0uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RuYW1lIHByb3BlcnR5IHRvIGNoZWNrIGZvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgdHJhbnNkdWNlciB0byBpbml0aWFsaXplIGlmIG9iamVjdCBpcyB0cmFuc2Zvcm1lclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gZGVmYXVsdCByYW1kYSBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIG9uIG9iamVjdCBpbiBsaXN0IHBvc2l0aW9uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2Rpc3BhdGNoYWJsZShtZXRob2RuYW1lLCB4ZiwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2xlbmd0aCAtIDFdO1xuICAgIGlmICghX2lzQXJyYXkob2JqKSkge1xuICAgICAgdmFyIGFyZ3MgPSBfc2xpY2UoYXJndW1lbnRzLCAwLCBsZW5ndGggLSAxKTtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW21ldGhvZG5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBvYmpbbWV0aG9kbmFtZV0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaXNUcmFuc2Zvcm1lcihvYmopKSB7XG4gICAgICAgIHZhciB0cmFuc2R1Y2VyID0geGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIHJldHVybiB0cmFuc2R1Y2VyKG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2ZpbHRlcihmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMCwgbGVuID0gbGlzdC5sZW5ndGgsIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9oYXMocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG4iLCIvKipcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWwgVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB2YWxgIGlzIGFuIGFycmF5LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBfaXNBcnJheShbXSk7IC8vPT4gdHJ1ZVxuICogICAgICBfaXNBcnJheShudWxsKTsgLy89PiBmYWxzZVxuICogICAgICBfaXNBcnJheSh7fSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIF9pc0FycmF5KHZhbCkge1xuICByZXR1cm4gKHZhbCAhPSBudWxsICYmXG4gICAgICAgICAgdmFsLmxlbmd0aCA+PSAwICYmXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XScpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2lzVHJhbnNmb3JtZXIob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqWydAQHRyYW5zZHVjZXIvc3RlcCddID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX21hcChmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMCwgbGVuID0gbGlzdC5sZW5ndGgsIHJlc3VsdCA9IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICByZXN1bHRbaWR4XSA9IGZuKGxpc3RbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX3h3cmFwID0gcmVxdWlyZSgnLi9feHdyYXAnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vYmluZCcpO1xudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaXNBcnJheUxpa2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gX2FycmF5UmVkdWNlKHhmLCBhY2MsIGxpc3QpIHtcbiAgICB2YXIgaWR4ID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7XG4gICAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBsaXN0W2lkeF0pO1xuICAgICAgaWYgKGFjYyAmJiBhY2NbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgYWNjID0gYWNjWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10oYWNjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVJlZHVjZSh4ZiwgYWNjLCBpdGVyKSB7XG4gICAgdmFyIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICAgIGlmIChhY2MgJiYgYWNjWydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICAgIGFjYyA9IGFjY1snQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShhY2MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ldGhvZFJlZHVjZSh4ZiwgYWNjLCBvYmopIHtcbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShvYmoucmVkdWNlKGJpbmQoeGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10sIHhmKSwgYWNjKSk7XG4gIH1cblxuICB2YXIgc3ltSXRlcmF0b3IgPSAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpID8gU3ltYm9sLml0ZXJhdG9yIDogJ0BAaXRlcmF0b3InO1xuICByZXR1cm4gZnVuY3Rpb24gX3JlZHVjZShmbiwgYWNjLCBsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm4gPSBfeHdyYXAoZm4pO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UobGlzdCkpIHtcbiAgICAgIHJldHVybiBfYXJyYXlSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGlzdC5yZWR1Y2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfbWV0aG9kUmVkdWNlKGZuLCBhY2MsIGxpc3QpO1xuICAgIH1cbiAgICBpZiAobGlzdFtzeW1JdGVyYXRvcl0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF9pdGVyYWJsZVJlZHVjZShmbiwgYWNjLCBsaXN0W3N5bUl0ZXJhdG9yXSgpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaXN0Lm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfaXRlcmFibGVSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlZHVjZTogbGlzdCBtdXN0IGJlIGFycmF5IG9yIGl0ZXJhYmxlJyk7XG4gIH07XG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcmVkdWNlZCh4KSB7XG4gIHJldHVybiB4ICYmIHhbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10gPyB4IDpcbiAgICB7XG4gICAgICAnQEB0cmFuc2R1Y2VyL3ZhbHVlJzogeCxcbiAgICAgICdAQHRyYW5zZHVjZXIvcmVkdWNlZCc6IHRydWVcbiAgICB9O1xufTtcbiIsIi8qKlxuICogQW4gb3B0aW1pemVkLCBwcml2YXRlIGFycmF5IGBzbGljZWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJndW1lbnRzfEFycmF5fSBhcmdzIFRoZSBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0IHRvIGNvbnNpZGVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtmcm9tPTBdIFRoZSBhcnJheSBpbmRleCB0byBzbGljZSBmcm9tLCBpbmNsdXNpdmUuXG4gKiBAcGFyYW0ge051bWJlcn0gW3RvPWFyZ3MubGVuZ3RoXSBUaGUgYXJyYXkgaW5kZXggdG8gc2xpY2UgdG8sIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldywgc2xpY2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9zbGljZShbMSwgMiwgMywgNCwgNV0sIDEsIDMpOyAvLz0+IFsyLCAzXVxuICpcbiAqICAgICAgdmFyIGZpcnN0VGhyZWVBcmdzID0gZnVuY3Rpb24oYSwgYiwgYywgZCkge1xuICogICAgICAgIHJldHVybiBfc2xpY2UoYXJndW1lbnRzLCAwLCAzKTtcbiAqICAgICAgfTtcbiAqICAgICAgZmlyc3RUaHJlZUFyZ3MoMSwgMiwgMywgNCk7IC8vPT4gWzEsIDIsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3NsaWNlKGFyZ3MsIGZyb20sIHRvKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIF9zbGljZShhcmdzLCAwLCBhcmdzLmxlbmd0aCk7XG4gICAgY2FzZSAyOiByZXR1cm4gX3NsaWNlKGFyZ3MsIGZyb20sIGFyZ3MubGVuZ3RoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGxlbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGFyZ3MubGVuZ3RoLCB0bykgLSBmcm9tKTtcbiAgICAgIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICAgICAgbGlzdFtpZHhdID0gYXJnc1tmcm9tICsgaWR4XTtcbiAgICAgICAgaWR4ICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdDtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL2luaXQnXSgpO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfVxufTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRmlsdGVyKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaWx0ZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZihpbnB1dCkgPyB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpIDogcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZmlsdGVyKGYsIHhmKSB7IHJldHVybiBuZXcgWEZpbHRlcihmLCB4Zik7IH0pO1xufSkoKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRmluZChmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICAgIHRoaXMuZm91bmQgPSBmYWxzZTtcbiAgfVxuICBYRmluZC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgaWYgKCF0aGlzLmZvdW5kKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdm9pZCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYRmluZC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMuZm91bmQgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gX3JlZHVjZWQodGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGlucHV0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hmaW5kKGYsIHhmKSB7IHJldHVybiBuZXcgWEZpbmQoZiwgeGYpOyB9KTtcbn0pKCk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG52YXIgYXBwZW5kID0gcmVxdWlyZSgnLi4vYXBwZW5kJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhHcm91cEJ5KGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5pbnB1dHMgPSB7fTtcbiAgfVxuICBYR3JvdXBCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhHcm91cEJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiB0aGlzLmlucHV0cykge1xuICAgICAgaWYgKF9oYXMoa2V5LCB0aGlzLmlucHV0cykpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuaW5wdXRzW2tleV0pO1xuICAgICAgICBpZiAocmVzdWx0WydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhHcm91cEJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5mKGlucHV0KTtcbiAgICB0aGlzLmlucHV0c1trZXldID0gdGhpcy5pbnB1dHNba2V5XSB8fCBba2V5LCBbXV07XG4gICAgdGhpcy5pbnB1dHNba2V5XVsxXSA9IGFwcGVuZChpbnB1dCwgdGhpcy5pbnB1dHNba2V5XVsxXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGdyb3VwQnkoZiwgeGYpIHsgcmV0dXJuIG5ldyBYR3JvdXBCeShmLCB4Zik7IH0pO1xufSkoKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYTWFwKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhNYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmYoaW5wdXQpKTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeG1hcChmLCB4ZikgeyByZXR1cm4gbmV3IFhNYXAoZiwgeGYpOyB9KTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWFdyYXAoZm4pIHtcbiAgICB0aGlzLmYgPSBmbjtcbiAgfVxuICBYV3JhcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXQgbm90IGltcGxlbWVudGVkIG9uIFhXcmFwJyk7XG4gIH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24oYWNjKSB7IHJldHVybiBhY2M7IH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKGFjYywgeCkge1xuICAgIHJldHVybiB0aGlzLmYoYWNjLCB4KTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gX3h3cmFwKGZuKSB7IHJldHVybiBuZXcgWFdyYXAoZm4pOyB9O1xufSgpKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0FycmF5Jyk7XG5cblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCBhbiBvYmplY3QgaXMgc2ltaWxhciB0byBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAqIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHhgIGhhcyBhIG51bWVyaWMgbGVuZ3RoIHByb3BlcnR5IGFuZCBleHRyZW1lIGluZGljZXMgZGVmaW5lZDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pc0FycmF5TGlrZShbXSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzQXJyYXlMaWtlKHRydWUpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNBcnJheUxpa2Uoe30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNBcnJheUxpa2Uoe2xlbmd0aDogMTB9KTsgLy89PiBmYWxzZVxuICogICAgICBSLmlzQXJyYXlMaWtlKHswOiAnemVybycsIDk6ICduaW5lJywgbGVuZ3RoOiAxMH0pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHgpIHtcbiAgaWYgKF9pc0FycmF5KHgpKSB7IHJldHVybiB0cnVlOyB9XG4gIGlmICgheCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHggaW5zdGFuY2VvZiBTdHJpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICh4Lm5vZGVUeXBlID09PSAxKSB7IHJldHVybiAhIXgubGVuZ3RoOyB9XG4gIGlmICh4Lmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBpZiAoeC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHguaGFzT3duUHJvcGVydHkoMCkgJiYgeC5oYXNPd25Qcm9wZXJ0eSh4Lmxlbmd0aCAtIDEpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBjb250YWluaW5nIHRoZSBuYW1lcyBvZiBhbGwgdGhlIGVudW1lcmFibGUgb3duXG4gKiBwcm9wZXJ0aWVzIG9mIHRoZSBzdXBwbGllZCBvYmplY3QuXG4gKiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZSBvdXRwdXQgYXJyYXkgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmVcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIGRpZmZlcmVudCBKUyBwbGF0Zm9ybXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiB2fSAtPiBba11cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHRoZSBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmtleXMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbJ2EnLCAnYicsICdjJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIC8vIGNvdmVyIElFIDwgOSBrZXlzIGlzc3Vlc1xuICB2YXIgaGFzRW51bUJ1ZyA9ICEoe3RvU3RyaW5nOiBudWxsfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG4gIHZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ2NvbnN0cnVjdG9yJywgJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2hhc093blByb3BlcnR5JywgJ3RvTG9jYWxlU3RyaW5nJ107XG5cbiAgdmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobGlzdCwgaXRlbSkge1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKGxpc3RbaWR4XSA9PT0gaXRlbSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgX2N1cnJ5MShmdW5jdGlvbiBrZXlzKG9iaikge1xuICAgICAgcmV0dXJuIE9iamVjdChvYmopICE9PSBvYmogPyBbXSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfSkgOlxuICAgIF9jdXJyeTEoZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgICAgIGlmIChPYmplY3Qob2JqKSAhPT0gb2JqKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wLCBrcyA9IFtdLCBuSWR4O1xuICAgICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgICBpZiAoX2hhcyhwcm9wLCBvYmopKSB7XG4gICAgICAgICAga3Nba3MubGVuZ3RoXSA9IHByb3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChoYXNFbnVtQnVnKSB7XG4gICAgICAgIG5JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKG5JZHggPj0gMCkge1xuICAgICAgICAgIHByb3AgPSBub25FbnVtZXJhYmxlUHJvcHNbbklkeF07XG4gICAgICAgICAgaWYgKF9oYXMocHJvcCwgb2JqKSAmJiAhY29udGFpbnMoa3MsIHByb3ApKSB7XG4gICAgICAgICAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbklkeCAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ga3M7XG4gICAgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX21hcCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX21hcCcpO1xudmFyIF94bWFwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feG1hcCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0LCBjb25zdHJ1Y3RlZCBieSBhcHBseWluZyB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gdG8gZXZlcnkgZWxlbWVudCBvZiB0aGVcbiAqIHN1cHBsaWVkIGxpc3QuXG4gKlxuICogTm90ZTogYFIubWFwYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2UgYXJyYXlzKSwgdW5saWtlIHRoZVxuICogbmF0aXZlIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHMgb24gdGhpcyBiZWhhdmlvciwgc2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwI0Rlc2NyaXB0aW9uXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gYikgLT4gW2FdIC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBpbnB1dCBgbGlzdGAuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGJlIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG5ldyBsaXN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkb3VibGUgPSBmdW5jdGlvbih4KSB7XG4gKiAgICAgICAgcmV0dXJuIHggKiAyO1xuICogICAgICB9O1xuICpcbiAqICAgICAgUi5tYXAoZG91YmxlLCBbMSwgMiwgM10pOyAvLz0+IFsyLCA0LCA2XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZSgnbWFwJywgX3htYXAsIF9tYXApKTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3JlYXRlUGFydGlhbEFwcGxpY2F0b3InKTtcbnZhciBjdXJyeSA9IHJlcXVpcmUoJy4vY3VycnknKTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYXMgaXRzIGFyZ3VtZW50cyBhIGZ1bmN0aW9uIGFuZCBhbnkgbnVtYmVyIG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQsXG4gKiB3aGVuIGludm9rZWQsIGNhbGxzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHByZXBlbmRlZCB0byB0aGVcbiAqIG9yaWdpbmFsIGZ1bmN0aW9uJ3MgYXJndW1lbnRzIGxpc3QuIEluIHNvbWUgbGlicmFyaWVzIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGFwcGx5TGVmdGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKGEgLT4gYiAtPiAuLi4gLT4gaSAtPiBqIC0+IC4uLiAtPiBtIC0+IG4pIC0+IGEgLT4gYi0+IC4uLiAtPiBpIC0+IChqIC0+IC4uLiAtPiBtIC0+IG4pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsuLi4qfSBbYXJnc10gQXJndW1lbnRzIHRvIHByZXBlbmQgdG8gYGZuYCB3aGVuIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyBpbnZva2VkLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHdyYXBwaW5nIGBmbmAuIFdoZW4gaW52b2tlZCwgaXQgd2lsbCBjYWxsIGBmbmBcbiAqICAgICAgICAgd2l0aCBgYXJnc2AgcHJlcGVuZGVkIHRvIGBmbmAncyBhcmd1bWVudHMgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICogYjsgfTtcbiAqICAgICAgdmFyIGRvdWJsZSA9IFIucGFydGlhbChtdWx0aXBseSwgMik7XG4gKiAgICAgIGRvdWJsZSgyKTsgLy89PiA0XG4gKlxuICogICAgICB2YXIgZ3JlZXQgPSBmdW5jdGlvbihzYWx1dGF0aW9uLCB0aXRsZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuICogICAgICAgIHJldHVybiBzYWx1dGF0aW9uICsgJywgJyArIHRpdGxlICsgJyAnICsgZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUgKyAnISc7XG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBzYXlIZWxsbyA9IFIucGFydGlhbChncmVldCwgJ0hlbGxvJyk7XG4gKiAgICAgIHZhciBzYXlIZWxsb1RvTXMgPSBSLnBhcnRpYWwoc2F5SGVsbG8sICdNcy4nKTtcbiAqICAgICAgc2F5SGVsbG9Ub01zKCdKYW5lJywgJ0pvbmVzJyk7IC8vPT4gJ0hlbGxvLCBNcy4gSmFuZSBKb25lcyEnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY3VycnkoX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yKF9jb25jYXQpKTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3JlYXRlUGFydGlhbEFwcGxpY2F0b3InKTtcbnZhciBjdXJyeSA9IHJlcXVpcmUoJy4vY3VycnknKTtcbnZhciBmbGlwID0gcmVxdWlyZSgnLi9mbGlwJyk7XG5cblxuLyoqXG4gKiBBY2NlcHRzIGFzIGl0cyBhcmd1bWVudHMgYSBmdW5jdGlvbiBhbmQgYW55IG51bWJlciBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0LFxuICogd2hlbiBpbnZva2VkLCBjYWxscyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyBhcHBlbmRlZCB0byB0aGUgb3JpZ2luYWxcbiAqIGZ1bmN0aW9uJ3MgYXJndW1lbnRzIGxpc3QuXG4gKlxuICogTm90ZSB0aGF0IGBwYXJ0aWFsUmlnaHRgIGlzIHRoZSBvcHBvc2l0ZSBvZiBgcGFydGlhbGA6IGBwYXJ0aWFsUmlnaHRgIGZpbGxzIGBmbmAncyBhcmd1bWVudHNcbiAqIGZyb20gdGhlIHJpZ2h0IHRvIHRoZSBsZWZ0LiAgSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgYXBwbHlSaWdodGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKGEgLT4gYi0+IC4uLiAtPiBpIC0+IGogLT4gLi4uIC0+IG0gLT4gbikgLT4gaiAtPiAuLi4gLT4gbSAtPiBuIC0+IChhIC0+IGItPiAuLi4gLT4gaSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0gey4uLip9IFthcmdzXSBBcmd1bWVudHMgdG8gYXBwZW5kIHRvIGBmbmAgd2hlbiB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgaW52b2tlZC5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB3cmFwcGluZyBgZm5gLiBXaGVuIGludm9rZWQsIGl0IHdpbGwgY2FsbCBgZm5gIHdpdGhcbiAqICAgICAgICAgYGFyZ3NgIGFwcGVuZGVkIHRvIGBmbmAncyBhcmd1bWVudHMgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ3JlZXQgPSBmdW5jdGlvbihzYWx1dGF0aW9uLCB0aXRsZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuICogICAgICAgIHJldHVybiBzYWx1dGF0aW9uICsgJywgJyArIHRpdGxlICsgJyAnICsgZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUgKyAnISc7XG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBncmVldE1zSmFuZUpvbmVzID0gUi5wYXJ0aWFsUmlnaHQoZ3JlZXQsICdNcy4nLCAnSmFuZScsICdKb25lcycpO1xuICpcbiAqICAgICAgZ3JlZXRNc0phbmVKb25lcygnSGVsbG8nKTsgLy89PiAnSGVsbG8sIE1zLiBKYW5lIEpvbmVzISdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjdXJyeShfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IoZmxpcChfY29uY2F0KSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBwYXJ0aWFsIGNvcHkgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aGUga2V5cyBzcGVjaWZpZWQuICBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVcbiAqIHByb3BlcnR5IGlzIGlnbm9yZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFtrXSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBuYW1lcyBhbiBhcnJheSBvZiBTdHJpbmcgcHJvcGVydHkgbmFtZXMgdG8gY29weSBvbnRvIGEgbmV3IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHByb3BlcnRpZXMgZnJvbSBgbmFtZXNgIG9uIGl0LlxuICogQHNlZSBSLm9taXRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBpY2soWydhJywgJ2QnXSwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YTogMSwgZDogNH1cbiAqICAgICAgUi5waWNrKFsnYScsICdlJywgJ2YnXSwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YTogMX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHBpY2sobmFtZXMsIG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgaWYgKG5hbWVzW2lkeF0gaW4gb2JqKSB7XG4gICAgICByZXN1bHRbbmFtZXNbaWR4XV0gPSBvYmpbbmFtZXNbaWR4XV07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGFydGlhbCBjb3B5IG9mIGFuIG9iamVjdCBjb250YWluaW5nIG9ubHkgdGhlIGtleXMgdGhhdFxuICogc2F0aXNmeSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAodiwgayAtPiBCb29sZWFuKSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBhIGtleVxuICogICAgICAgIHNob3VsZCBiZSBpbmNsdWRlZCBvbiB0aGUgb3V0cHV0IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggb25seSBwcm9wZXJ0aWVzIHRoYXQgc2F0aXNmeSBgcHJlZGBcbiAqICAgICAgICAgb24gaXQuXG4gKiBAc2VlIFIucGlja1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc1VwcGVyQ2FzZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7IHJldHVybiBrZXkudG9VcHBlckNhc2UoKSA9PT0ga2V5OyB9XG4gKiAgICAgIFIucGlja0J5KGlzVXBwZXJDYXNlLCB7YTogMSwgYjogMiwgQTogMywgQjogNH0pOyAvLz0+IHtBOiAzLCBCOiA0fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGlja0J5KHRlc3QsIG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKHRlc3Qob2JqW3Byb3BdLCBwcm9wLCBvYmopKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIHN1cHBsaWVkIGFuIG9iamVjdCByZXR1cm5zIHRoZSBpbmRpY2F0ZWQgcHJvcGVydHkgb2YgdGhhdCBvYmplY3QsIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgcyAtPiB7czogYX0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHBhcmFtIHtTdHJpbmd9IHAgVGhlIHByb3BlcnR5IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeVxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIGF0IGBvYmoucGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wKCd4Jywge3g6IDEwMH0pOyAvLz0+IDEwMFxuICogICAgICBSLnByb3AoJ3gnLCB7fSk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwcm9wKHAsIG9iaikgeyByZXR1cm4gb2JqW3BdOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBBY3RzIGFzIG11bHRpcGxlIGBwcm9wYDogYXJyYXkgb2Yga2V5cyBpbiwgYXJyYXkgb2YgdmFsdWVzIG91dC4gUHJlc2VydmVzIG9yZGVyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtBcnJheX0gcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGZldGNoXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgb3IgcGFydGlhbGx5IGFwcGxpZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wcyhbJ3gnLCAneSddLCB7eDogMSwgeTogMn0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnByb3BzKFsnYycsICdhJywgJ2InXSwge2I6IDIsIGE6IDF9KTsgLy89PiBbdW5kZWZpbmVkLCAxLCAyXVxuICpcbiAqICAgICAgdmFyIGZ1bGxOYW1lID0gUi5jb21wb3NlKFIuam9pbignICcpLCBSLnByb3BzKFsnZmlyc3QnLCAnbGFzdCddKSk7XG4gKiAgICAgIGZ1bGxOYW1lKHtsYXN0OiAnQnVsbGV0LVRvb3RoJywgYWdlOiAzMywgZmlyc3Q6ICdUb255J30pOyAvLz0+ICdUb255IEJ1bGxldC1Ub290aCdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHByb3BzKHBzLCBvYmopIHtcbiAgdmFyIGxlbiA9IHBzLmxlbmd0aDtcbiAgdmFyIG91dCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgb3V0W2lkeF0gPSBvYmpbcHNbaWR4XV07XG4gICAgaWR4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ2FsbHMgYW4gaW5wdXQgZnVuY3Rpb24gYG5gIHRpbWVzLCByZXR1cm5pbmcgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aG9zZVxuICogZnVuY3Rpb24gY2FsbHMuXG4gKlxuICogYGZuYCBpcyBwYXNzZWQgb25lIGFyZ3VtZW50OiBUaGUgY3VycmVudCB2YWx1ZSBvZiBgbmAsIHdoaWNoIGJlZ2lucyBhdCBgMGAgYW5kIGlzXG4gKiBncmFkdWFsbHkgaW5jcmVtZW50ZWQgdG8gYG4gLSAxYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChpIC0+IGEpIC0+IGkgLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLiBQYXNzZWQgb25lIGFyZ3VtZW50LCB0aGUgY3VycmVudCB2YWx1ZSBvZiBgbmAuXG4gKiBAcGFyYW0ge051bWJlcn0gbiBBIHZhbHVlIGJldHdlZW4gYDBgIGFuZCBgbiAtIDFgLiBJbmNyZW1lbnRzIGFmdGVyIGVhY2ggZnVuY3Rpb24gY2FsbC5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIHRoZSByZXR1cm4gdmFsdWVzIG9mIGFsbCBjYWxscyB0byBgZm5gLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGltZXMoUi5pZGVudGl0eSwgNSk7IC8vPT4gWzAsIDEsIDIsIDMsIDRdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB0aW1lcyhmbiwgbikge1xuICB2YXIgbGVuID0gTnVtYmVyKG4pO1xuICB2YXIgbGlzdCA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGxpc3RbaWR4XSA9IGZuKGlkeCk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBlbnVtZXJhYmxlIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBzdXBwbGllZCBvYmplY3QuXG4gKiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZSBvdXRwdXQgYXJyYXkgaXMgbm90IGd1YXJhbnRlZWQgYWNyb3NzXG4gKiBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7azogdn0gLT4gW3ZdXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZXh0cmFjdCB2YWx1ZXMgZnJvbVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHRoZSB2YWx1ZXMgb2YgdGhlIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudmFsdWVzKHthOiAxLCBiOiAyLCBjOiAzfSk7IC8vPT4gWzEsIDIsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHZhciBwcm9wcyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbiA9IHByb3BzLmxlbmd0aDtcbiAgdmFyIHZhbHMgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICB2YWxzW2lkeF0gPSBvYmpbcHJvcHNbaWR4XV07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHZhbHM7XG59KTtcbiIsIlxudmFyIHJuZztcblxuaWYgKGdsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgdmFyIF9ybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICByZXR1cm4gX3JuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciAgX3JuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9ybmRzO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJuZztcblxuIiwiLy8gICAgIHV1aWQuanNcbi8vXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDEwLTIwMTIgUm9iZXJ0IEtpZWZmZXJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblxuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbi8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4vLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxudmFyIF9ybmcgPSByZXF1aXJlKCcuL3JuZycpO1xuXG4vLyBNYXBzIGZvciBudW1iZXIgPC0+IGhleCBzdHJpbmcgY29udmVyc2lvblxudmFyIF9ieXRlVG9IZXggPSBbXTtcbnZhciBfaGV4VG9CeXRlID0ge307XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gIF9ieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICBfaGV4VG9CeXRlW19ieXRlVG9IZXhbaV1dID0gaTtcbn1cblxuLy8gKipgcGFyc2UoKWAgLSBQYXJzZSBhIFVVSUQgaW50byBpdCdzIGNvbXBvbmVudCBieXRlcyoqXG5mdW5jdGlvbiBwYXJzZShzLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IChidWYgJiYgb2Zmc2V0KSB8fCAwLCBpaSA9IDA7XG5cbiAgYnVmID0gYnVmIHx8IFtdO1xuICBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWzAtOWEtZl17Mn0vZywgZnVuY3Rpb24ob2N0KSB7XG4gICAgaWYgKGlpIDwgMTYpIHsgLy8gRG9uJ3Qgb3ZlcmZsb3chXG4gICAgICBidWZbaSArIGlpKytdID0gX2hleFRvQnl0ZVtvY3RdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gWmVybyBvdXQgcmVtYWluaW5nIGJ5dGVzIGlmIHN0cmluZyB3YXMgc2hvcnRcbiAgd2hpbGUgKGlpIDwgMTYpIHtcbiAgICBidWZbaSArIGlpKytdID0gMDtcbiAgfVxuXG4gIHJldHVybiBidWY7XG59XG5cbi8vICoqYHVucGFyc2UoKWAgLSBDb252ZXJ0IFVVSUQgYnl0ZSBhcnJheSAoYWxhIHBhcnNlKCkpIGludG8gYSBzdHJpbmcqKlxuZnVuY3Rpb24gdW5wYXJzZShidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwLCBidGggPSBfYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4vLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxudmFyIF9zZWVkQnl0ZXMgPSBfcm5nKCk7XG5cbi8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxudmFyIF9ub2RlSWQgPSBbXG4gIF9zZWVkQnl0ZXNbMF0gfCAweDAxLFxuICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG5dO1xuXG4vLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxudmFyIF9jbG9ja3NlcSA9IChfc2VlZEJ5dGVzWzZdIDw8IDggfCBfc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7IG4rKykge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiB1bnBhcnNlKGIpO1xufVxuXG4vLyAqKmB2NCgpYCAtIEdlbmVyYXRlIHJhbmRvbSBVVUlEKipcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgLy8gRGVwcmVjYXRlZCAtICdmb3JtYXQnIGFyZ3VtZW50LCBhcyBzdXBwb3J0ZWQgaW4gdjEuMlxuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHVucGFyc2Uocm5kcyk7XG59XG5cbi8vIEV4cG9ydCBwdWJsaWMgQVBJXG52YXIgdXVpZCA9IHY0O1xudXVpZC52MSA9IHYxO1xudXVpZC52NCA9IHY0O1xudXVpZC5wYXJzZSA9IHBhcnNlO1xudXVpZC51bnBhcnNlID0gdW5wYXJzZTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuIiwiLyohXHJcbiogdmRvbS12aXJ0dWFsaXplXHJcbiogQ29weXJpZ2h0IDIwMTQgYnkgTWFyY2VsIEtsZWhyIDxta2xlaHJAZ214Lm5ldD5cclxuKlxyXG4qIChNSVQgTElDRU5TRSlcclxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuKlxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbipcclxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4qIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxudmFyIFZOb2RlID0gcmVxdWlyZShcInZpcnR1YWwtZG9tL3Zub2RlL3Zub2RlXCIpXHJcbiAgLCBWVGV4dCA9IHJlcXVpcmUoXCJ2aXJ0dWFsLWRvbS92bm9kZS92dGV4dFwiKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVWTm9kZVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVk5vZGUoZG9tTm9kZSwga2V5KSB7XHJcbiAga2V5ID0ga2V5IHx8IG51bGwgLy8gWFhYOiBMZWF2ZSBvdXQgYGtleWAgZm9yIG5vdy4uLiBtZXJlbHkgdXNlZCBmb3IgKHJlLSlvcmRlcmluZ1xyXG5cclxuICBpZihkb21Ob2RlLm5vZGVUeXBlID09IDEpIHJldHVybiBjcmVhdGVGcm9tRWxlbWVudChkb21Ob2RlLCBrZXkpXHJcbiAgaWYoZG9tTm9kZS5ub2RlVHlwZSA9PSAzKSByZXR1cm4gY3JlYXRlRnJvbVRleHROb2RlKGRvbU5vZGUsIGtleSlcclxuICByZXR1cm5cclxufVxyXG5cclxuY3JlYXRlVk5vZGUuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBrZXkpIHtcclxuICB2YXIgZG9tTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBjcmVhdGUgY29udGFpbmVyXHJcbiAgZG9tTm9kZS5pbm5lckhUTUwgPSBodG1sOyAvLyBicm93c2VyIHBhcnNlcyBIVE1MIGludG8gRE9NIHRyZWVcclxuICB2YXIgY2hpbGQgPSBkb21Ob2RlLmNoaWxkcmVuLmxlbmd0aCA/IGRvbU5vZGUuY2hpbGRyZW5bMF0gOiBkb21Ob2RlLmZpcnN0Q2hpbGQ7XHJcbiAgcmV0dXJuIGNyZWF0ZVZOb2RlKGNoaWxkLCBrZXkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRnJvbVRleHROb2RlKHROb2RlKSB7XHJcbiAgcmV0dXJuIG5ldyBWVGV4dCh0Tm9kZS5ub2RlVmFsdWUpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGcm9tRWxlbWVudChlbCkge1xyXG4gIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZVxyXG4gICwgbmFtZXNwYWNlID0gZWwubmFtZXNwYWNlVVJJID09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJz8gbnVsbCA6IGVsLm5hbWVzcGFjZVVSSVxyXG4gICwgcHJvcGVydGllcyA9IGdldEVsZW1lbnRQcm9wZXJ0aWVzKGVsKVxyXG4gICwgY2hpbGRyZW4gPSBbXVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNoaWxkcmVuLnB1c2goY3JlYXRlVk5vZGUoZWwuY2hpbGROb2Rlc1tpXS8qLCBpKi8pKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBWTm9kZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbiwgbnVsbCwgbmFtZXNwYWNlKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudFByb3BlcnRpZXMoZWwpIHtcclxuICB2YXIgb2JqID0ge31cclxuXHJcbiAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbihwcm9wTmFtZSkge1xyXG4gICAgaWYoIWVsW3Byb3BOYW1lXSkgcmV0dXJuXHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlOiBzdHlsZVxyXG4gICAgLy8gLnN0eWxlIGlzIGEgRE9NU3R5bGVEZWNsYXJhdGlvbiwgdGh1cyB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciBhbGxcclxuICAgIC8vIHJ1bGVzIHRvIGNyZWF0ZSBhIGhhc2ggb2YgYXBwbGllZCBjc3MgcHJvcGVydGllcy5cclxuICAgIC8vXHJcbiAgICAvLyBZb3UgY2FuIGRpcmVjdGx5IHNldCBhIHNwZWNpZmljIC5zdHlsZVtwcm9wXSA9IHZhbHVlIHNvIHBhdGNoaW5nIHdpdGggdmRvbVxyXG4gICAgLy8gaXMgcG9zc2libGUuXHJcbiAgICBpZihcInN0eWxlXCIgPT0gcHJvcE5hbWUpIHtcclxuICAgICAgdmFyIGNzcyA9IHt9XHJcbiAgICAgICAgLCBzdHlsZVByb3BcclxuICAgICAgaWYgKGVsLnN0eWxlLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGVsLnN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzdHlsZVByb3AgPSBlbC5zdHlsZVtpXVxyXG4gICAgICAgICAgY3NzW3N0eWxlUHJvcF0gPSBlbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcCkgLy8gWFhYOiBhZGQgc3VwcG9ydCBmb3IgXCIhaW1wb3J0YW50XCIgdmlhIGdldFByb3BlcnR5UHJpb3JpdHkoKSFcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7IC8vIElFOFxyXG4gICAgICAgIGZvciAodmFyIHN0eWxlUHJvcCBpbiBlbC5zdHlsZSkge1xyXG4gICAgICAgICAgaWYgKGVsLnN0eWxlW3N0eWxlUHJvcF0pIHtcclxuICAgICAgICAgICAgY3NzW3N0eWxlUHJvcF0gPSBlbC5zdHlsZVtzdHlsZVByb3BdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgb2JqW3Byb3BOYW1lXSA9IGNzc1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2NjODQ4ODYxJTI4dj12cy44NSUyOS5hc3B4XHJcbiAgICAvLyBUaGUgaW1nIGVsZW1lbnQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgSFJFRiBjb250ZW50IGF0dHJpYnV0ZS5cclxuICAgIC8vIEluIGFkZGl0aW9uLCB0aGUgaHJlZiBwcm9wZXJ0eSBpcyByZWFkLW9ubHkgZm9yIHRoZSBpbWcgRG9jdW1lbnQgT2JqZWN0IE1vZGVsIChET00pIG9iamVjdFxyXG4gICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ltZycgJiYgcHJvcE5hbWUgPT09ICdocmVmJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlOiBkYXRhc2V0XHJcbiAgICAvLyB3ZSBjYW4gaXRlcmF0ZSBvdmVyIC5kYXRhc2V0IHdpdGggYSBzaW1wbGUgZm9yLi5pbiBsb29wLlxyXG4gICAgLy8gVGhlIGFsbC10aW1lIGZvbyB3aXRoIGRhdGEtKiBhdHRyaWJzIGlzIHRoZSBkYXNoLXNuYWtlIHRvIGNhbWVsQ2FzZVxyXG4gICAgLy8gY29udmVyc2lvbi5cclxuICAgIC8vXHJcbiAgICAvLyAqVGhpcyBpcyBjb21wYXRpYmxlIHdpdGggaCgpLCBidXQgbm90IHdpdGggZXZlcnkgYnJvd3NlciwgdGh1cyB0aGlzIHNlY3Rpb24gd2FzIHJlbW92ZWQgaW4gZmF2b3JcclxuICAgIC8vIG9mIGF0dHJpYnV0ZXMgKHNwZWNpZmllZCBiZWxvdykhKlxyXG4gICAgLy9cclxuICAgIC8vIC5kYXRhc2V0IHByb3BlcnRpZXMgYXJlIGRpcmVjdGx5IGFjY2Vzc2libGUgYXMgdHJhbnNwYXJlbnQgZ2V0dGVycy9zZXR0ZXJzLCBzb1xyXG4gICAgLy8gcGF0Y2hpbmcgd2l0aCB2ZG9tIGlzIHBvc3NpYmxlLlxyXG4gICAgLyppZihcImRhdGFzZXRcIiA9PSBwcm9wTmFtZSkge1xyXG4gICAgICB2YXIgZGF0YSA9IHt9XHJcbiAgICAgIGZvcih2YXIgcCBpbiBlbC5kYXRhc2V0KSB7XHJcbiAgICAgICAgZGF0YVtwXSA9IGVsLmRhdGFzZXRbcF1cclxuICAgICAgfVxyXG4gICAgICBvYmpbcHJvcE5hbWVdID0gZGF0YVxyXG4gICAgICByZXR1cm5cclxuICAgIH0qL1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZTogYXR0cmlidXRlc1xyXG4gICAgLy8gdGhlc2UgYXJlIGEgTmFtZWROb2RlTWFwLCBidXQgd2UgY2FuIGp1c3QgY29udmVydCB0aGVtIHRvIGEgaGFzaCBmb3IgdmRvbSxcclxuICAgIC8vIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL01hdHQtRXNjaC92aXJ0dWFsLWRvbS9ibG9iL21hc3Rlci92ZG9tL2FwcGx5LXByb3BlcnRpZXMuanMjTDU3XHJcbiAgICBpZihcImF0dHJpYnV0ZXNcIiA9PSBwcm9wTmFtZSl7XHJcbiAgICAgIHZhciBhdHRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxbcHJvcE5hbWVdKTtcclxuICAgICAgdmFyIGhhc2ggPSBhdHRzLnJlZHVjZShmdW5jdGlvbihvLGEpe1xyXG4gICAgICAgIHZhciBuYW1lID0gYS5uYW1lO1xyXG4gICAgICAgIGlmKG9ialtuYW1lXSkgcmV0dXJuIG87XHJcbiAgICAgICAgb1tuYW1lXSA9IGVsLmdldEF0dHJpYnV0ZShhLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LHt9KTtcclxuICAgICAgcmV0dXJuIG9ialtwcm9wTmFtZV0gPSBoYXNoO1xyXG4gICAgfVxyXG4gICAgaWYoXCJ0YWJJbmRleFwiID09IHByb3BOYW1lICYmIGVsLnRhYkluZGV4ID09PSAtMSkgcmV0dXJuXHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlOiBjb250ZW50RWRpdGFibGVcclxuICAgIC8vIGJyb3dzZXIgdXNlICdpbmhlcml0JyBieSBkZWZhdWx0IG9uIGFsbCBub2RlcywgYnV0IGRvZXMgbm90IGFsbG93IHNldHRpbmcgaXQgdG8gJydcclxuICAgIC8vIGRpZmZpbmcgdmlydHVhbGl6ZSBkb20gd2lsbCB0cmlnZ2VyIGVycm9yXHJcbiAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0LUVzY2gvdmlydHVhbC1kb20vaXNzdWVzLzE3NlxyXG4gICAgaWYoXCJjb250ZW50RWRpdGFibGVcIiA9PSBwcm9wTmFtZSAmJiBlbFtwcm9wTmFtZV0gPT09ICdpbmhlcml0JykgcmV0dXJuXHJcblxyXG4gICAgaWYoJ29iamVjdCcgPT09IHR5cGVvZiBlbFtwcm9wTmFtZV0pIHJldHVyblxyXG5cclxuICAgIC8vIGRlZmF1bHQ6IGp1c3QgY29weSB0aGUgcHJvcGVydHlcclxuICAgIG9ialtwcm9wTmFtZV0gPSBlbFtwcm9wTmFtZV1cclxuICAgIHJldHVyblxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuLyoqXHJcbiAqIERPTU5vZGUgcHJvcGVydHkgd2hpdGUgbGlzdFxyXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9SYXlub3MvcmVhY3QvYmxvYi9kb20tcHJvcGVydHktY29uZmlnL3NyYy9icm93c2VyL3VpL2RvbS9EZWZhdWx0RE9NUHJvcGVydHlDb25maWcuanNcclxuICovXHJcbnZhciBwcm9wcyA9XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wcm9wZXJ0aWVzID0gW1xyXG4gXCJhY2NlcHRcIlxyXG4sXCJhY2Nlc3NLZXlcIlxyXG4sXCJhY3Rpb25cIlxyXG4sXCJhbHRcIlxyXG4sXCJhc3luY1wiXHJcbixcImF1dG9Db21wbGV0ZVwiXHJcbixcImF1dG9QbGF5XCJcclxuLFwiY2VsbFBhZGRpbmdcIlxyXG4sXCJjZWxsU3BhY2luZ1wiXHJcbixcImNoZWNrZWRcIlxyXG4sXCJjbGFzc05hbWVcIlxyXG4sXCJjb2xTcGFuXCJcclxuLFwiY29udGVudFwiXHJcbixcImNvbnRlbnRFZGl0YWJsZVwiXHJcbixcImNvbnRyb2xzXCJcclxuLFwiY3Jvc3NPcmlnaW5cIlxyXG4sXCJkYXRhXCJcclxuLy8sXCJkYXRhc2V0XCIgcmVtb3ZlZCBzaW5jZSBhdHRyaWJ1dGVzIGhhbmRsZXMgZGF0YS1hdHRyaWJ1dGVzXHJcbixcImRlZmVyXCJcclxuLFwiZGlyXCJcclxuLFwiZG93bmxvYWRcIlxyXG4sXCJkcmFnZ2FibGVcIlxyXG4sXCJlbmNUeXBlXCJcclxuLFwiZm9ybU5vVmFsaWRhdGVcIlxyXG4sXCJocmVmXCJcclxuLFwiaHJlZkxhbmdcIlxyXG4sXCJodG1sRm9yXCJcclxuLFwiaHR0cEVxdWl2XCJcclxuLFwiaWNvblwiXHJcbixcImlkXCJcclxuLFwibGFiZWxcIlxyXG4sXCJsYW5nXCJcclxuLFwibGlzdFwiXHJcbixcImxvb3BcIlxyXG4sXCJtYXhcIlxyXG4sXCJtZWRpYUdyb3VwXCJcclxuLFwibWV0aG9kXCJcclxuLFwibWluXCJcclxuLFwibXVsdGlwbGVcIlxyXG4sXCJtdXRlZFwiXHJcbixcIm5hbWVcIlxyXG4sXCJub1ZhbGlkYXRlXCJcclxuLFwicGF0dGVyblwiXHJcbixcInBsYWNlaG9sZGVyXCJcclxuLFwicG9zdGVyXCJcclxuLFwicHJlbG9hZFwiXHJcbixcInJhZGlvR3JvdXBcIlxyXG4sXCJyZWFkT25seVwiXHJcbixcInJlbFwiXHJcbixcInJlcXVpcmVkXCJcclxuLFwicm93U3BhblwiXHJcbixcInNhbmRib3hcIlxyXG4sXCJzY29wZVwiXHJcbixcInNjcm9sbExlZnRcIlxyXG4sXCJzY3JvbGxpbmdcIlxyXG4sXCJzY3JvbGxUb3BcIlxyXG4sXCJzZWxlY3RlZFwiXHJcbixcInNwYW5cIlxyXG4sXCJzcGVsbENoZWNrXCJcclxuLFwic3JjXCJcclxuLFwic3JjRG9jXCJcclxuLFwic3JjU2V0XCJcclxuLFwic3RhcnRcIlxyXG4sXCJzdGVwXCJcclxuLFwic3R5bGVcIlxyXG4sXCJ0YWJJbmRleFwiXHJcbixcInRhcmdldFwiXHJcbixcInRpdGxlXCJcclxuLFwidHlwZVwiXHJcbixcInZhbHVlXCJcclxuXHJcbi8vIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzXHJcbixcImF1dG9DYXBpdGFsaXplXCJcclxuLFwiYXV0b0NvcnJlY3RcIlxyXG4sXCJwcm9wZXJ0eVwiXHJcblxyXG4sIFwiYXR0cmlidXRlc1wiXHJcbl1cclxuXHJcbnZhciBhdHRycyA9XHJcbm1vZHVsZS5leHBvcnRzLmF0dHJzID0gW1xyXG4gXCJhbGxvd0Z1bGxTY3JlZW5cIlxyXG4sXCJhbGxvd1RyYW5zcGFyZW5jeVwiXHJcbixcImNoYXJTZXRcIlxyXG4sXCJjb2xzXCJcclxuLFwiY29udGV4dE1lbnVcIlxyXG4sXCJkYXRlVGltZVwiXHJcbixcImRpc2FibGVkXCJcclxuLFwiZm9ybVwiXHJcbixcImZyYW1lQm9yZGVyXCJcclxuLFwiaGVpZ2h0XCJcclxuLFwiaGlkZGVuXCJcclxuLFwibWF4TGVuZ3RoXCJcclxuLFwicm9sZVwiXHJcbixcInJvd3NcIlxyXG4sXCJzZWFtbGVzc1wiXHJcbixcInNpemVcIlxyXG4sXCJ3aWR0aFwiXHJcbixcIndtb2RlXCJcclxuXHJcbi8vIFNWRyBQcm9wZXJ0aWVzXHJcbixcImN4XCJcclxuLFwiY3lcIlxyXG4sXCJkXCJcclxuLFwiZHhcIlxyXG4sXCJkeVwiXHJcbixcImZpbGxcIlxyXG4sXCJmeFwiXHJcbixcImZ5XCJcclxuLFwiZ3JhZGllbnRUcmFuc2Zvcm1cIlxyXG4sXCJncmFkaWVudFVuaXRzXCJcclxuLFwib2Zmc2V0XCJcclxuLFwicG9pbnRzXCJcclxuLFwiclwiXHJcbixcInJ4XCJcclxuLFwicnlcIlxyXG4sXCJzcHJlYWRNZXRob2RcIlxyXG4sXCJzdG9wQ29sb3JcIlxyXG4sXCJzdG9wT3BhY2l0eVwiXHJcbixcInN0cm9rZVwiXHJcbixcInN0cm9rZUxpbmVjYXBcIlxyXG4sXCJzdHJva2VXaWR0aFwiXHJcbixcInRleHRBbmNob3JcIlxyXG4sXCJ0cmFuc2Zvcm1cIlxyXG4sXCJ2ZXJzaW9uXCJcclxuLFwidmlld0JveFwiXHJcbixcIngxXCJcclxuLFwieDJcIlxyXG4sXCJ4XCJcclxuLFwieTFcIlxyXG4sXCJ5MlwiXHJcbixcInlcIlxyXG5dXHJcbiIsInZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZShcIi4vdmRvbS9jcmVhdGUtZWxlbWVudC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnRcbiIsInZhciBkaWZmID0gcmVxdWlyZShcIi4vdnRyZWUvZGlmZi5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbiIsInZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG4iLCJ2YXIgcGF0Y2ggPSByZXF1aXJlKFwiLi92ZG9tL3BhdGNoLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcbnZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcblxudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1lbGVtZW50XCIpXG52YXIgZG9tSW5kZXggPSByZXF1aXJlKFwiLi9kb20taW5kZXhcIilcbnZhciBwYXRjaE9wID0gcmVxdWlyZShcIi4vcGF0Y2gtb3BcIilcbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcblxuZnVuY3Rpb24gcGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpIHtcbiAgICByZW5kZXJPcHRpb25zID0gcmVuZGVyT3B0aW9ucyB8fCB7fVxuICAgIHJlbmRlck9wdGlvbnMucGF0Y2ggPSByZW5kZXJPcHRpb25zLnBhdGNoICYmIHJlbmRlck9wdGlvbnMucGF0Y2ggIT09IHBhdGNoXG4gICAgICAgID8gcmVuZGVyT3B0aW9ucy5wYXRjaFxuICAgICAgICA6IHBhdGNoUmVjdXJzaXZlXG4gICAgcmVuZGVyT3B0aW9ucy5yZW5kZXIgPSByZW5kZXJPcHRpb25zLnJlbmRlciB8fCByZW5kZXJcblxuICAgIHJldHVybiByZW5kZXJPcHRpb25zLnBhdGNoKHJvb3ROb2RlLCBwYXRjaGVzLCByZW5kZXJPcHRpb25zKVxufVxuXG5mdW5jdGlvbiBwYXRjaFJlY3Vyc2l2ZShyb290Tm9kZSwgcGF0Y2hlcywgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBpbmRpY2VzID0gcGF0Y2hJbmRpY2VzKHBhdGNoZXMpXG5cbiAgICBpZiAoaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlXG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZG9tSW5kZXgocm9vdE5vZGUsIHBhdGNoZXMuYSwgaW5kaWNlcylcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHJvb3ROb2RlLm93bmVyRG9jdW1lbnRcblxuICAgIGlmICghcmVuZGVyT3B0aW9ucy5kb2N1bWVudCAmJiBvd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICByZW5kZXJPcHRpb25zLmRvY3VtZW50ID0gb3duZXJEb2N1bWVudFxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZUluZGV4ID0gaW5kaWNlc1tpXVxuICAgICAgICByb290Tm9kZSA9IGFwcGx5UGF0Y2gocm9vdE5vZGUsXG4gICAgICAgICAgICBpbmRleFtub2RlSW5kZXhdLFxuICAgICAgICAgICAgcGF0Y2hlc1tub2RlSW5kZXhdLFxuICAgICAgICAgICAgcmVuZGVyT3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdE5vZGVcbn1cblxuZnVuY3Rpb24gYXBwbHlQYXRjaChyb290Tm9kZSwgZG9tTm9kZSwgcGF0Y2hMaXN0LCByZW5kZXJPcHRpb25zKSB7XG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZVxuICAgIH1cblxuICAgIHZhciBuZXdOb2RlXG5cbiAgICBpZiAoaXNBcnJheShwYXRjaExpc3QpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0Y2hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdOb2RlID0gcGF0Y2hPcChwYXRjaExpc3RbaV0sIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgICAgIGlmIChkb21Ob2RlID09PSByb290Tm9kZSkge1xuICAgICAgICAgICAgICAgIHJvb3ROb2RlID0gbmV3Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Tm9kZSA9IHBhdGNoT3AocGF0Y2hMaXN0LCBkb21Ob2RlLCByZW5kZXJPcHRpb25zKVxuXG4gICAgICAgIGlmIChkb21Ob2RlID09PSByb290Tm9kZSkge1xuICAgICAgICAgICAgcm9vdE5vZGUgPSBuZXdOb2RlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdE5vZGVcbn1cblxuZnVuY3Rpb24gcGF0Y2hJbmRpY2VzKHBhdGNoZXMpIHtcbiAgICB2YXIgaW5kaWNlcyA9IFtdXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2hlcykge1xuICAgICAgICBpZiAoa2V5ICE9PSBcImFcIikge1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKE51bWJlcihrZXkpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGljZXNcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHNldEltbWVkaWF0ZSB9IGZyb20gJ3RpbWVycyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQga2V5cyBmcm9tICdyYW1kYS9zcmMva2V5cyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJ3JhbWRhL3NyYy92YWx1ZXMnO1xuaW1wb3J0IGZvckVhY2ggZnJvbSAncmFtZGEvc3JjL2ZvckVhY2gnO1xuaW1wb3J0IGZpbmQgZnJvbSAncmFtZGEvc3JjL2ZpbmQnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdyYW1kYS9zcmMvZmlsdGVyJztcbmltcG9ydCB0aW1lcyBmcm9tICdyYW1kYS9zcmMvdGltZXMnO1xuaW1wb3J0IHBhcnRpYWwgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWwnO1xuaW1wb3J0IHBhcnRpYWxSaWdodCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbFJpZ2h0JztcbmltcG9ydCBfbWVtb2l6ZSBmcm9tICdtZW1vaXplZSc7XG5pbXBvcnQgZGVmYXVsdFRvIGZyb20gJ3JhbWRhL3NyYy9kZWZhdWx0VG8nO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcbmltcG9ydCBNYWluTG9vcCBmcm9tICdtYWlubG9vcC5qcyc7XG5cbmltcG9ydCB7IHJhbmRvbUludEZyb21SYW5nZSwgbG4gfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBkcmFnRXZlbnRzU2V0dXAgZnJvbSAnLi4vZHJhZy1ldmVudHMvc2V0dXAnO1xuaW1wb3J0IEJvdCBmcm9tICcuLi9ib3QnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4uL2JvYXJkJztcbmltcG9ydCBDZWxsIGZyb20gJy4uL2NlbGwnO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKlxuICovXG5cbmNvbnN0IGRlZmF1bHREaW1lbnNpb24gPSBkZWZhdWx0VG8oMjApO1xuY29uc3QgZGVmYXVsdE1hcmdpbiA9IGRlZmF1bHRUbygwLjUpO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChvcHRzKSB7XG4gIGNvbnN0IHsgdW5kbywgcmVkbyB9ID0gb3B0cztcbiAgY29uc3Qgcm93cyA9IGRlZmF1bHREaW1lbnNpb24ob3B0cy5yb3dzKTtcbiAgY29uc3QgY29sdW1ucyA9IGRlZmF1bHREaW1lbnNpb24ob3B0cy5jb2x1bW5zKTtcbiAgY29uc3QgbWFyZ2luID0gZGVmYXVsdE1hcmdpbihvcHRzLm1hcmdpbik7XG4gIGNvbnN0IG1heFdpbm5lcnMgPSBvcHRzLm1heFdpbm5lcnMgfHwgMztcbiAgbGV0IHdpbm5lcnMgPSBbXTtcbiAgbGV0IF9oYXNGaW5pc2hlZCA9IGZhbHNlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHBhdXNlVGltZSA9IG51bGw7XG5cbiAgYXNzZXJ0Um93cyhyb3dzKTtcbiAgYXNzZXJ0Q29sdW1ucyhjb2x1bW5zKTtcblxuICBjb25zdCBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgY29uc3QgeyBsaXN0ZW5UbywgdW5saXN0ZW5UbyB9ID0gZHJhZ0V2ZW50c1NldHVwKCk7XG5cbiAgY29uc3QgYm90SWRlbnRpdHkgPSBCb3QuY3JlYXRlSWRlbnRpdHkoKTtcblxuICBNYWluTG9vcFxuICAvLyBWYWx1ZXMgYmVsb3cgYDEwMDAgLyAxNDRgIGFyZSBkaXNjb3VyYWdlZCBhbmRcbiAgLy8gYmVsb3cgYDEwMDAgLyAyNDBgIGFyZSBzdHJvbmdseSBkaXNjb3VyYWdlZFxuICAuc2V0U2ltdWxhdGlvblRpbWVzdGVwKDUwMClcbiAgLnNldFVwZGF0ZSh1cGRhdGUpXG4gIC5zZXREcmF3KGRyYXcpXG4gIC5zZXRFbmQoZW5kKTtcblxuICBjb25zdCBzdGF0ZSA9IGhnLnN0YXRlKHtcbiAgICByb3dzOiBoZy52YWx1ZShyb3dzKSxcbiAgICBjb2x1bW5zOiBoZy52YWx1ZShjb2x1bW5zKSxcbiAgICBtYXJnaW46IGhnLnZhbHVlKG1hcmdpbiksIC8vIHBlcmNlbnRcbiAgICBjZWxsczogaGcudmFyaGFzaChjZWxscyksXG4gICAgYm90czogaGcudmFyaGFzaCh7fSksXG4gICAgYm90SWRlbnRpdHk6IGhnLnZhbHVlKGJvdElkZW50aXR5KSxcbiAgICBmcHM6IGhnLnZhbHVlKDApLCAvLyBVc2VkIG9ubHkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpc1JlYWR5OiBoZy52YWx1ZShmYWxzZSksXG4gICAgaXNTdGFydGVkOiBoZy52YWx1ZShmYWxzZSksXG4gICAgaXNSdW5uaW5nOiBoZy52YWx1ZShmYWxzZSksXG4gICAgaXNDZWxsRW5hYmxlZDogaGcudmFsdWUoaXNDZWxsRW5hYmxlZCksXG4gICAgaXNEcmFnZ2luZ0VuYWJsZWQ6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBzdGFydDogaGcudmFsdWUoc3RhcnQpLFxuICAgIHBhdXNlOiBoZy52YWx1ZShwYXVzZSksXG4gICAgcmVzZXQ6IGhnLnZhbHVlKHJlc2V0KSxcbiAgICBnZXRXaW5uZXJzOiBoZy52YWx1ZShnZXRXaW5uZXJzKSxcbiAgICBlbmFibGVEcmFnRXZlbnRzOiBoZy52YWx1ZShlbmFibGVEcmFnRXZlbnRzKSxcbiAgICBkaXNhYmxlRHJhZ0V2ZW50czogaGcudmFsdWUoZGlzYWJsZURyYWdFdmVudHMpLFxuICAgIGJvYXJkOiBCb2FyZCh7IHVuZG8sIHJlZG8gfSksXG4gICAgY2hhbm5lbHM6IHtcbiAgICAgIG9uU3RhcnQsIG9uUGF1c2UsIG9uUmVzZXQsXG4gICAgICBhZGRCb3RSYW5kb21seSxcbiAgICAgIGNoZWNrUmVhZHlTdGF0ZSxcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICAvLyBUT0RPOiBDaGVjayBpZiBjYW4gcGFzcyBgb25BZGRCb3QoKWAgdmlhIGBwcm9wc2Agb24gYHJlbmRlcigpYFxuICAgIGNvbnN0IGNlbGwgPSBwYXJ0aWFsUmlnaHQocGFydGlhbChDZWxsLCBjb2x1bW5zKSwgb25BZGRCb3QpO1xuICAgIGNvbnN0IGNlbGxzID0gdGltZXMoY2VsbCwgcm93cyAqIGNvbHVtbnMpO1xuICAgIHJldHVybiBjZWxscztcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNiKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0KCknKTtcbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZURyYWdFdmVudHMgPSBzdGF0ZS5kaXNhYmxlRHJhZ0V2ZW50cygpO1xuICAgICAgZGlzYWJsZURyYWdFdmVudHMoKTtcblxuICAgICAgTWFpbkxvb3Auc3RhcnQoKTtcblxuICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICAvLyBUaGUgbG9vcCBzaG91bGQgaGF2ZSBzdGFydGVkIGJ5IG5vd1xuICAgICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsc2UgaWYgKHBhdXNlVGltZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lICs9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcGF1c2VUaW1lO1xuICAgICAgICAgICAgcGF1c2VUaW1lID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzdGF0ZS5pc1J1bm5pbmcuc2V0KE1haW5Mb29wLmlzUnVubmluZygpKTtcbiAgICAgICAgICBzdGF0ZS5pc1J1bm5pbmcuc2V0KHRydWUpO1xuICAgICAgICAgIHN0YXRlLmlzU3RhcnRlZC5zZXQodHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoY2IpIGNiKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZShjYikge1xuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICByYWYoKCkgPT4ge1xuICAgICAgICBNYWluTG9vcC5zdG9wKCk7XG5cbiAgICAgICAgcGF1c2VUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgLy8gc3RhdGUuaXNSdW5uaW5nLnNldChNYWluTG9vcC5pc1J1bm5pbmcoKSk7XG4gICAgICAgIHN0YXRlLmlzUnVubmluZy5zZXQoZmFsc2UpO1xuICAgICAgICBzdGF0ZS5mcHMuc2V0KDApO1xuXG4gICAgICAgIGlmIChjYikgY2IoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoY2IpIHtcbiAgICBwYXVzZSgoKSA9PiB7XG4gICAgICB3aW5uZXJzID0gW107XG4gICAgICBfaGFzRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBwYXVzZVRpbWUgPSBudWxsO1xuXG4gICAgICAvLyBUT0RPOiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25ydy9vYnNlcnYtdmFyaGFzaC9pc3N1ZXMvMTUgZm9yXG4gICAgICAvLyBjb21tZW50cyByZWxhdGVkIHRvIHRyYW5zYWN0aW9ucywgaWUuIGJ1bGsgdXBkYXRlc1xuICAgICAgZm9yRWFjaChzdGF0ZS5ib3RzLmRlbGV0ZSwga2V5cyhzdGF0ZS5ib3RzKSk7XG5cbiAgICAgIC8vIFRPRE86IFNlZSBodHRwczovL2dpdGh1Yi5jb20vbnJ3L29ic2Vydi12YXJoYXNoL2lzc3Vlcy8xNSBmb3JcbiAgICAgIC8vIGNvbW1lbnRzIHJlbGF0ZWQgdG8gdHJhbnNhY3Rpb25zLCBpZS4gYnVsayB1cGRhdGVzXG4gICAgICBjb25zdCBuZXh0Q2VsbHMgPSBjcmVhdGVDZWxscygpO1xuXG4gICAgICBmb3JFYWNoKFxuICAgICAgICBpZHggPT4gc3RhdGUuY2VsbHMucHV0KGlkeCwgbmV4dENlbGxzW2lkeF0sIHN0YXRlLmNlbGxzKSxcbiAgICAgICAga2V5cyhzdGF0ZS5jZWxscylcbiAgICAgICk7XG5cbiAgICAgIHN0YXRlLmlzUmVhZHkuc2V0KGZhbHNlKTtcbiAgICAgIHN0YXRlLmlzU3RhcnRlZC5zZXQoZmFsc2UpO1xuXG4gICAgICBjb25zdCBlbmFibGVEcmFnRXZlbnRzID0gc3RhdGUuZW5hYmxlRHJhZ0V2ZW50cygpO1xuICAgICAgZW5hYmxlRHJhZ0V2ZW50cygpO1xuXG4gICAgICBpZiAoY2IpIGNiKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NlbGxFbmFibGVkKGluZGV4KSB7XG4gICAgcmV0dXJuIHN0YXRlLmNlbGxzLmdldChpbmRleCkuaXNFbmFibGVkKCkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWRkQm90KHNwZWMpIHtcbiAgICByZWdpc3RlckJvdChzdGF0ZSwgc3BlYyk7XG4gIH1cblxuICAvLyBUT0RPOiBDb25zaWRlciB0byBgbWVtb2l6ZSgpYCB0aGlzIGZ1bmN0aW9uLFxuICAvLyBidXQgd2UgbmVlZCB0byBjbGVlbiB0aGUgY2FjaGUgYWZ0ZXIgdGhlIGdhbWUgaGFzIGZpbmlzaGVkLFxuICAvLyBpZS4gaW5zaWRlIGByZXNldCgpYFxuICBmdW5jdGlvbiBpc1dpbm5lcihib3QpIHtcbiAgICByZXR1cm4gISFmaW5kKCh7IGlkIH0pID0+IGJvdC5pZCgpID09PSBpZCwgd2lubmVycyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5uZXJzKCkge1xuICAgIHJldHVybiB3aW5uZXJzLmxlbmd0aCA/IHdpbm5lcnMgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzR2FtZUZpbmlzaGVkKCkge1xuICAgIGlmIChfaGFzRmluaXNoZWQpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgdG90YWxCb3RzID0ga2V5cyhzdGF0ZS5ib3RzKS5sZW5ndGg7XG4gICAgY29uc3QgdG90YWxXaW5uZXJzID0gd2lubmVycy5sZW5ndGg7XG5cbiAgICBjb25zdCBoYXNGaW5pc2hlZCA9IHRvdGFsV2lubmVycyA+IDBcbiAgICAgICYmICh0b3RhbFdpbm5lcnMgPT09IHRvdGFsQm90c1xuICAgICAgICAgIHx8IHRvdGFsV2lubmVycyA9PT0gbWF4V2lubmVyc1xuICAgICAgICAgIHx8IHRvdGFsV2lubmVycyA9PT0gdG90YWxCb3RzIC0gMSk7XG5cbiAgICBpZiAoaGFzRmluaXNoZWQpIF9oYXNGaW5pc2hlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gaGFzRmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVEcmFnRXZlbnRzKCkge1xuICAgIGlmIChzdGF0ZS5pc0RyYWdnaW5nRW5hYmxlZCgpKSByZXR1cm47XG4gICAgbGlzdGVuVG8oKTtcbiAgICBzdGF0ZS5pc0RyYWdnaW5nRW5hYmxlZC5zZXQodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlRHJhZ0V2ZW50cygpIHtcbiAgICBpZiAoIXN0YXRlLmlzRHJhZ2dpbmdFbmFibGVkKCkpIHJldHVybjtcbiAgICB1bmxpc3RlblRvKCk7XG4gICAgc3RhdGUuaXNEcmFnZ2luZ0VuYWJsZWQuc2V0KGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBHYW1lIGhhcyBmaW5pc2hlZCwgZG8gbm90aGluZ1xuICAgIGlmIChoYXNHYW1lRmluaXNoZWQoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIGZvckVhY2goYm90ID0+IHtcbiAgICAgIC8vIEJvdCBpcyBhIHdpbm5lciwgZG8gbm90aGluZ1xuICAgICAgaWYgKGlzV2lubmVyKGJvdCkpIHJldHVybjtcblxuICAgICAgY29uc3QgcHJldkluZGV4ID0gYm90LnByZXZJbmRleDtcbiAgICAgIGNvbnN0IGluZGV4ID0gYm90LmluZGV4KCk7XG4gICAgICBjb25zdCBtb3ZlID0gYm90Lm1vdmUoKTtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IG1vdmUocHJldkluZGV4LCBpbmRleCk7XG5cbiAgICAgIGlmIChuZXh0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgYm90LnByZXZJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm90Lm5leHRJbmRleCA9IG5leHRJbmRleDtcblxuICAgICAgICAvLyBCb3Qgd29uXG4gICAgICAgIGlmIChzdGF0ZS5jZWxscy5nZXQobmV4dEluZGV4KS5pc0V4aXQoKVxuICAgICAgICAgICAgJiYgIWhhc0dhbWVGaW5pc2hlZCgpKSB7XG4gICAgICAgICAgd2lubmVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBib3QuaWQoKSxcbiAgICAgICAgICAgIHRpbWU6IGN1cnJUaW1lIC0gc3RhcnRUaW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdmFsdWVzKHN0YXRlLmJvdHMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgZm9yRWFjaChib3QgPT4ge1xuICAgICAgaWYgKGJvdC5uZXh0SW5kZXggIT09IGJvdC5pbmRleCgpKSB7XG4gICAgICAgIC8vIFRPRE86IElmIHdlIGxlYXZlIGByb3dgIGFuZCBgY29sYCBwcm9wZXJ0aWVzIGluc2lkZVxuICAgICAgICAvLyBgQm90KClgIGluc3RhbmNlcywgd2UgbmVlZCB0byB1cGRhdGUgdGhlbSB0b28gaGVyZVxuICAgICAgICBib3QuaW5kZXguc2V0KGJvdC5uZXh0SW5kZXgpO1xuICAgICAgfVxuICAgIH0sIHZhbHVlcyhzdGF0ZS5ib3RzKSk7XG4gIH1cblxuICAvLyBUT0RPOiBEbyB0aGF0IG9ubHkgaW4gZGV2ZWxvcG1lbnQgKHVzZSBcImVudmlmeVwiIGZvciBcImJyb3dzZXJpZnlcIilcbiAgZnVuY3Rpb24gZW5kKGZwcywgcGFuaWMpIHtcbiAgICBpZiAoaGFzR2FtZUZpbmlzaGVkKCkpIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuZnBzLnNldChOdW1iZXIucGFyc2VJbnQoZnBzKSk7XG5cbiAgICBpZiAocGFuaWMpIHtcbiAgICAgIC8vIFRoaXMgcGF0dGVybiBpbnRyb2R1Y2VzIG5vbi1kZXRlcm1pbmlzdGljIGJlaGF2aW91cixcbiAgICAgIC8vIGJ1dCBpbiB0aGlzIGNhc2UgaXQncyBiZXR0ZXIgdGhhbiB0aGUgYWx0ZXJuYXRpdmUgKHRoZSBhcHBsaWNhdGlvblxuICAgICAgLy8gd291bGQgbG9vayBsaWtlIGl0IHdhcyBydW5uaW5nIHZlcnkgcXVpY2tseSB1bnRpbCB0aGUgc2ltdWxhdGlvblxuICAgICAgLy8gY2F1Z2h0IHVwIHRvIHJlYWwgdGltZSkuIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgIC8vIGBNYWluTG9vcC5zZXRFbmQoKWAgZm9yIGFkZGl0aW9uYWwgZXhwbGFuYXRpb24uXG4gICAgICBjb25zdCBkaXNjYXJkZWRUaW1lID0gTWF0aC5yb3VuZChNYWluTG9vcC5yZXNldEZyYW1lRGVsdGEoKSk7XG4gICAgICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuICAgICAgY29uc29sZS53YXJuKGxuYFxuICAgICAgICBNYWluIGxvb3AgcGFuaWNrZWQsIHByb2JhYmx5IGJlY2F1c2UgdGhlIGJyb3dzZXIgdGFiXG4gICAgICAgIHdhcyBwdXQgaW4gdGhlIGJhY2tncm91bmQuIERpc2NhcmRpbmcgJHtkaXNjYXJkZWRUaW1lfW1zXG4gICAgICBgKTtcbiAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1jb25zb2xlKi9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5jb25zdCBib2FyZFByb3BzID0gbWVtb2l6ZSgoY29sdW1ucywgbWFyZ2luLCBjZWxscywgYm90cywgYm90SWRlbnRpdHksIGlzUmVhZHksIGlzUnVubmluZywgd2lubmVycywgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCwgYWRkQm90UmFuZG9tbHksIGNoZWNrUmVhZHlTdGF0ZSwgaXNTdGFydGVkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29sdW1ucywgbWFyZ2luLCBjZWxscyxcbiAgICBib3RzLCBib3RJZGVudGl0eSxcbiAgICBpc1JlYWR5LCBpc1J1bm5pbmcsIHdpbm5lcnMsXG4gICAgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCxcbiAgICBhZGRCb3RSYW5kb21seSxcbiAgICBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCxcbiAgfTtcbn0pO1xuXG5BcHAucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlKSB7XG4gIGNvbnN0IHsgaXNSdW5uaW5nLCBpc0RyYWdnaW5nRW5hYmxlZCwgZW5hYmxlRHJhZ0V2ZW50cywgY2hhbm5lbHMgfSA9IHN0YXRlO1xuICBjb25zdCB3aW5uZXJzID0gaXNSdW5uaW5nID8gbnVsbCA6IHN0YXRlLmdldFdpbm5lcnMoKTtcblxuICByZXR1cm4gaChcbiAgICAnc2VjdGlvbi5hbWF6ZS1BcHAnLFxuICAgIHtcbiAgICAgICdldi1ob29rJzogbmV3IEhvb2soe1xuICAgICAgICBpc1J1bm5pbmcsXG4gICAgICAgIGlzRHJhZ2dpbmdFbmFibGVkLFxuICAgICAgICBlbmFibGVEcmFnRXZlbnRzLFxuICAgICAgfSksXG4gICAgfSxcbiAgICBbXG4gICAgICBoZy5wYXJ0aWFsKEJvYXJkLnJlbmRlciwgc3RhdGUuYm9hcmQsIGJvYXJkUHJvcHMoXG4gICAgICAgIHN0YXRlLmNvbHVtbnMsIHN0YXRlLm1hcmdpbiwgc3RhdGUuY2VsbHMsXG4gICAgICAgIHN0YXRlLmJvdHMsIHN0YXRlLmJvdElkZW50aXR5LFxuICAgICAgICBzdGF0ZS5pc1JlYWR5LCBpc1J1bm5pbmcsIHdpbm5lcnMsXG4gICAgICAgIGNoYW5uZWxzLm9uU3RhcnQsIGNoYW5uZWxzLm9uUGF1c2UsIGNoYW5uZWxzLm9uUmVzZXQsXG4gICAgICAgIGNoYW5uZWxzLmFkZEJvdFJhbmRvbWx5LFxuICAgICAgICBjaGFubmVscy5jaGVja1JlYWR5U3RhdGUsIHN0YXRlLmlzU3RhcnRlZFxuICAgICAgKSksXG5cbiAgICAgIC8vIFRPRE86IERvIHRoYXQgb25seSBpbiBkZXZlbG9wbWVudCAodXNlIFwiZW52aWZ5XCIgZm9yIFwiYnJvd3NlcmlmeVwiKVxuICAgICAgLy8gaGcucGFydGlhbChyZW5kZXJGcHMsIHN0YXRlLmZwcyksIC8vREVWLU9OTFkvXG4gICAgXVxuICApO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gSG9vayhvcHRzKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG59XG5cbkhvb2sucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiBob29rKCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nRW5hYmxlZCB8fCB0aGlzLmlzUnVubmluZykgcmV0dXJuO1xuXG4gIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgLy8gRE9NIGVsZW1lbnQgd2lsbCBiZSBpbiB0aGUgcmVhbCBET00gYnkgbm93XG4gICAgdGhpcy5lbmFibGVEcmFnRXZlbnRzKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGFkZEJvdFJhbmRvbWx5KHN0YXRlLCBfc3BlYykge1xuICBjb25zdCBpc0VudHJ5Q2VsbCA9IGNlbGwgPT4gY2VsbC5pc0VudHJ5KCk7XG4gIGNvbnN0IGZpbHRlckVudHJ5Q2VsbHMgPSBmaWx0ZXIoaXNFbnRyeUNlbGwpXG4gIGNvbnN0IGVudHJ5Q2VsbHMgPSBmaWx0ZXJFbnRyeUNlbGxzKHZhbHVlcyhzdGF0ZS5jZWxscykpXG5cbiAgaWYgKCFlbnRyeUNlbGxzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIGNvbnN0IHJhbmRJbmRleCA9IHJhbmRvbUludEZyb21SYW5nZSgwLCBlbnRyeUNlbGxzLmxlbmd0aCAtIDEpO1xuICBjb25zdCBpbmRleCA9IGVudHJ5Q2VsbHNbcmFuZEluZGV4XS5pbmRleCgpO1xuXG4gIC8vIFRPRE86IENoZWNrIGlmIGl0J3MgYmV0dGVyIHRvIG5vdCBzdG9yZSBgcm93YCBhbmQgYGNvbGAsXG4gIC8vIGluc2lkZSBgQm90YCBpbnN0YW5jZVxuICBjb25zdCBzcGVjID0gT2JqZWN0LmFzc2lnbih7fSwgX3NwZWMsIHsgaW5kZXggfSk7XG5cbiAgcmVnaXN0ZXJCb3Qoc3RhdGUsIHNwZWMpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVnaXN0ZXJCb3Qoc3RhdGUsIHNwZWMpIHtcbiAgc3RhdGUuYm90cy5wdXQoc3BlYy5pZCwgQm90KFxuICAgIHN0YXRlLnJvd3MoKSxcbiAgICBzdGF0ZS5jb2x1bW5zKCksXG4gICAgc3RhdGUuaXNDZWxsRW5hYmxlZCgpLFxuICAgIHNwZWNcbiAgKSk7XG5cbiAgc3RhdGUuYm90SWRlbnRpdHkuc2V0KEJvdC5jcmVhdGVJZGVudGl0eSgpKTtcblxuICBjaGVja1JlYWR5U3RhdGUoc3RhdGUpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tSZWFkeVN0YXRlKHN0YXRlKSB7XG4gIGlmIChrZXlzKHN0YXRlLmJvdHMpLmxlbmd0aFxuICAgICAgJiYgZXhpdENlbGxzRXhpc3Qoc3RhdGUpXG4gICAgICAvKiYmICFzdGF0ZS5pc1JlYWR5KCkqLykge1xuICAgIHN0YXRlLmlzUmVhZHkuc2V0KHRydWUpO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgc3RhdGUuaXNSZWFkeS5zZXQoZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBleGl0Q2VsbHNFeGlzdChzdGF0ZSkge1xuICByZXR1cm4gISFmaW5kKGNlbGwgPT4gY2VsbC5pc0V4aXQoKSwgdmFsdWVzKHN0YXRlLmNlbGxzKSlcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uU3RhcnQoc3RhdGUpIHtcbiAgY29uc3Qgc3RhcnQgPSBzdGF0ZS5zdGFydCgpO1xuICBzdGFydCgpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25QYXVzZShzdGF0ZSkge1xuICBjb25zdCBwYXVzZSA9IHN0YXRlLnBhdXNlKCk7XG4gIHBhdXNlKCk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvblJlc2V0KHN0YXRlKSB7XG4gIGNvbnN0IHJlc2V0ID0gc3RhdGUucmVzZXQoKTtcbiAgcmVzZXQoKTtcbn1cblxuLyoqXG4gKiBVc2VkIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyRnBzKGZwcykge1xuICByZXR1cm4gaCgnc2VjdGlvbi5hbWF6ZS1BcHAtZnBzTWV0ZXInLCBgJHtmcHN9IEZQU2ApO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0Um93cyhyb3dzKSB7XG4gIGlmIChyb3dzICE9IG51bGwgJiYgKCFOdW1iZXIuaXNJbnRlZ2VyKHJvd3MpIHx8IHJvd3MgPCAxKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IobG4oXG4gICAgICBgSW52YWxpZCBcInJvd3NcIiBvcHRpb24sXG4gICAgICBleHBlY3RlZCBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgICAoZ290ICR7cm93c30gOjogJHt0eXBlb2Ygcm93c30pYFxuICAgICkpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgaWYgKGNvbHVtbnMgIT0gbnVsbCAmJiAoIU51bWJlci5pc0ludGVnZXIoY29sdW1ucykgfHwgY29sdW1ucyA8IDEpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsbihcbiAgICAgIGBJbnZhbGlkIFwiY29sdW1uc1wiIG9wdGlvbixcbiAgICAgIGV4cGVjdGVkIHBvc2l0aXZlIGludGVnZXJcbiAgICAgIChnb3QgJHtjb2x1bW5zfSA6OiAke3R5cGVvZiBjb2x1bW5zfSkpYFxuICAgICkpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gJ21lbW9pemVlJztcbmltcG9ydCBfcHJvcHMgZnJvbSAncmFtZGEvc3JjL3Byb3BzJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL2dyaWQnO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbnRyb2xzJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4uL3Jlc3VsdHMnO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZChvcHRzKSB7XG4gIGNvbnN0IHsgdW5kbywgcmVkbyB9ID0gb3B0cztcblxuICByZXR1cm4gaGcuc3RhdGUoe1xuICAgIGNvbnRyb2xzOiBDb250cm9scyh7IHVuZG8sIHJlZG8gfSksXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuY29uc3QgZ3JpZFByb3BzID0gbWVtb2l6ZSgoY29sdW1ucywgbWFyZ2luLCBjZWxscywgYm90cywgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQpID0+IHtcbiAgcmV0dXJuIHsgY29sdW1ucywgbWFyZ2luLCBjZWxscywgYm90cywgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQgfTtcbn0pO1xuXG5jb25zdCBjb250cm9sc1Byb3BzID0gbWVtb2l6ZSgoYm90SWRlbnRpdHksIGlzUmVhZHksIGlzUnVubmluZywgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCwgYWRkQm90UmFuZG9tbHksIGlzU3RhcnRlZCwgd2lubmVycykgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvdElkZW50aXR5LCBpc1JlYWR5LCBpc1J1bm5pbmcsIG9uU3RhcnQsIG9uUGF1c2UsIG9uUmVzZXQsXG4gICAgYWRkQm90UmFuZG9tbHksIGlzU3RhcnRlZCwgd2lubmVycyxcbiAgfTtcbn0pO1xuXG5jb25zdCByZXN1bHRzUHJvcHMgPSBtZW1vaXplKChib3RzLCB3aW5uZXJzKSA9PiB7XG4gIHJldHVybiB7IGJvdHMsIHdpbm5lcnMgfTtcbn0pO1xuXG5Cb2FyZC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUsIHByb3BzKSB7XG4gIGNvbnN0IHsgY29udHJvbHMgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBoKFxuICAgICdzZWN0aW9uLmFtYXplLUJvYXJkJyxcbiAgICBbXG4gICAgICBoZy5wYXJ0aWFsKHJlbmRlckNvbnRlbnQsIHByb3BzKSxcblxuICAgICAgaGcucGFydGlhbChDb250cm9scy5yZW5kZXIsIGNvbnRyb2xzLCBjb250cm9sc1Byb3BzKFxuICAgICAgICAuLi5fcHJvcHMoW1xuICAgICAgICAgICdib3RJZGVudGl0eScsICdpc1JlYWR5JywgJ2lzUnVubmluZycsXG4gICAgICAgICAgJ29uU3RhcnQnLCAnb25QYXVzZScsICdvblJlc2V0JyxcbiAgICAgICAgICAnYWRkQm90UmFuZG9tbHknLCAnaXNTdGFydGVkJywgJ3dpbm5lcnMnLFxuICAgICAgICBdLCBwcm9wcylcbiAgICAgICkpLFxuICAgIF1cbiAgKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIGgoJy5hbWF6ZS1Cb2FyZC1jb250ZW50JywgW1xuICAgIGhnLnBhcnRpYWwoR3JpZC5yZW5kZXIsIGdyaWRQcm9wcyhcbiAgICAgIC4uLl9wcm9wcyhbXG4gICAgICAgICdjb2x1bW5zJywgJ21hcmdpbicsICdjZWxscycsICdib3RzJywgJ2NoZWNrUmVhZHlTdGF0ZScsICdpc1N0YXJ0ZWQnLFxuICAgICAgXSwgcHJvcHMpXG4gICAgKSksXG5cbiAgICBwcm9wcy53aW5uZXJzICYmIGhnLnBhcnRpYWwoUmVzdWx0cy5yZW5kZXIsIHJlc3VsdHNQcm9wcyhcbiAgICAgIHByb3BzLmJvdHMsIHByb3BzLndpbm5lcnNcbiAgICApKSxcbiAgXSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgaGcsIHsgaCB9IGZyb20gJ21lcmN1cnknO1xuXG5pbXBvcnQgeyBzZW5kRG91YmxlVGFwIH0gZnJvbSAnLi4vZ2VzdHVyZXMnO1xuaW1wb3J0IGRyYWdTb3VyY2VFdmVudHMgZnJvbSAnLi4vZHJhZy1ldmVudHMvc291cmNlJztcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3RIYW5kbGUoKSB7XG4gIHJldHVybiBoZy5zdGF0ZSh7XG4gICAgaXNEcmFnZ2VkOiBoZy52YWx1ZShmYWxzZSksXG4gICAgY2hhbm5lbHM6IHsgb25EcmFnIH0sXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuQm90SGFuZGxlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSwgcHJvcHMpIHtcbiAgY29uc3QgeyBpc0RyYWdnZWQsIGNoYW5uZWxzIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBib3RJZGVudGl0eSwgYWRkQm90UmFuZG9tbHksIGRpc2FibGVkIH0gPSBwcm9wcztcblxuICByZXR1cm4gaChcbiAgICAnLmFtYXplLUJvdEhhbmRsZScsXG4gICAgaCgnZGl2JywgT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogJ0RyYWcgaW4gb3IgZG91YmxlIHRhcCB0byBhZGQgYSBuZXcgQm90JyxcbiAgICAgIGRyYWdnYWJsZTogIWRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAgICdhbWF6ZS1Cb3RIYW5kbGUtZHJhZ2dhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2FtYXplLUJvdEhhbmRsZS1kcmFnZ2FibGUtLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdhbWF6ZS1Cb3RIYW5kbGUtZHJhZ2dhYmxlLS1kcmFnZ2VkJzogaXNEcmFnZ2VkLFxuICAgICAgfSksXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2IoJHtib3RJZGVudGl0eS5jb2xvci5qb2luKCl9KWAsXG4gICAgICB9LFxuICAgIH0sICFkaXNhYmxlZCA/IHtcbiAgICAgICdldi1ldmVudCc6IFtcbiAgICAgICAgZHJhZ1NvdXJjZUV2ZW50cyhjaGFubmVscy5vbkRyYWcsIHsgYm90SWRlbnRpdHkgfSksXG4gICAgICAgIHNlbmREb3VibGVUYXAoYWRkQm90UmFuZG9tbHksIE9iamVjdC5hc3NpZ24oe30sIGJvdElkZW50aXR5KSksXG4gICAgICBdLFxuICAgIH0gOiB7fSkpXG4gICk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvbkRyYWcoc3RhdGUsIGRhdGEpIHtcbiAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICBjYXNlICdkcmFnc3RhcnQnOiByZXR1cm4gb25EcmFnc3RhcnQoc3RhdGUsIGRhdGEpO1xuICAgIC8vIGNhc2UgJ2RyYWcnOiByZXR1cm4gX29uRHJhZyhzdGF0ZSwgZGF0YSk7XG4gICAgY2FzZSAnZHJhZ2VuZCc6IHJldHVybiBvbkRyYWdlbmQoc3RhdGUsIGRhdGEpO1xuICAgIC8vIG5vIGRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25EcmFnc3RhcnQoc3RhdGUsIGRhdGEpIHtcbiAgc3RhdGUuaXNEcmFnZ2VkLnNldCh0cnVlKTtcblxuICBjb25zdCBkYXRhVG9UcmFuc2ZlciA9IEpTT04uc3RyaW5naWZ5KGRhdGEuYm90SWRlbnRpdHkpO1xuICBkYXRhLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZGF0YVRvVHJhbnNmZXIpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25EcmFnZW5kKHN0YXRlKSB7XG4gIHN0YXRlLmlzRHJhZ2dlZC5zZXQoZmFsc2UpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9zcmMvbWFwJztcbmltcG9ydCBhZGRJbmRleCBmcm9tICdyYW1kYS9zcmMvYWRkSW5kZXgnO1xuaW1wb3J0IHBhcnRpYWwgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWwnO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IEluZGljYXRvciBmcm9tICcuL2luZGljYXRvcic7XG5cbmNvbnN0IG1hcEluZGV4ZWQgPSBhZGRJbmRleChtYXApO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdEluZGljYXRvcnMoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuQm90SW5kaWNhdG9ycy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY29sdW1ucywgYm90SW5kaWNhdG9ycykge1xuICBjb25zdCBtYXJnaW4gPSAwOyAvLyBwZXJjZW50XG4gIGNvbnN0IGNlbGxXaWR0aCA9IDEwMCAvIGNvbHVtbnMgLSAyICogbWFyZ2luOyAvLyBwZXJjZW50XG5cbiAgY29uc3QgcmVuZGVyQ2VsbCA9IHBhcnRpYWwoXG4gICAgaGcucGFydGlhbCwgSW5kaWNhdG9yLnJlbmRlciwgY29sdW1ucywgY2VsbFdpZHRoLCBtYXJnaW5cbiAgKTtcbiAgY29uc3QgcmVuZGVyQ2VsbHMgPSBtYXBJbmRleGVkKHJlbmRlckNlbGwpO1xuXG4gIHJldHVybiBoKFxuICAgICcuYW1hemUtQm90SW5kaWNhdG9ycy51LWNmJyxcbiAgICAvLyB7IHN0eWxlOiB7IHBhZGRpbmc6IGAke21hcmdpbiAvIDJ9JWAgfSB9LCAvL1JFRi8vXG4gICAgcmVuZGVyQ2VsbHMoYm90SW5kaWNhdG9ycylcbiAgKTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gJ21lbW9pemVlJztcbmltcG9ydCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuY29uc3QgbWVtb2l6ZSA9IHBhcnRpYWxSaWdodChfbWVtb2l6ZSwgeyBtYXg6IDEgfSk7XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kaWNhdG9yKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IGluZGljYXRvclN0eWxlID0gbWVtb2l6ZSgoY29sdW1ucywgd2lkdGgsIG1hcmdpbiA9IDAsIGNvbCkgPT4ge1xuICByZXR1cm4gIHtcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgJ3BhZGRpbmctYm90dG9tJzogYCR7d2lkdGh9JWAsXG4gICAgbWFyZ2luOiBgJHttYXJnaW59JWAsXG4gICAgY2xlYXI6IGNvbCA9PSAwXG4gICAgICA/ICdsZWZ0J1xuICAgICAgOiBjb2wgPT0gY29sdW1ucyAtIDFcbiAgICAgICAgID8gJ3JpZ2h0J1xuICAgICAgICAgOiAnbm9uZScsIC8vIFRPRE86IENvbnNpZGVyIHRvIG5vdCBhc3NpZ24gYGNsZWFyOiAnbm9uZSdgXG4gIH07XG59KTtcblxuSW5kaWNhdG9yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjb2x1bW5zLCB3aWR0aCwgbWFyZ2luLCBib3RJbmRpY2F0b3IsIGluZGV4KSB7XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2x1bW5zKTtcbiAgY29uc3QgY29sID0gaW5kZXggLSByb3cgKiBjb2x1bW5zO1xuXG4gIHJldHVybiBoKFxuICAgICcuYW1hemUtQm90SW5kaWNhdG9ycy1pbmRpY2F0b3InLFxuICAgIHtcbiAgICAgIGtleTogYm90SW5kaWNhdG9yLmlkLFxuICAgICAgc3R5bGU6IGluZGljYXRvclN0eWxlKGNvbHVtbnMsIHdpZHRoLCBtYXJnaW4sIGNvbCksXG4gICAgfSxcbiAgICBoKCcuYW1hemUtQm90SW5kaWNhdG9ycy1pbmRpY2F0b3JDb250ZW50Jywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiKCR7Ym90SW5kaWNhdG9yLmNvbG9yLmpvaW4oKX0pYCxcbiAgICAgIH0sXG4gICAgfSlcbiAgKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9zcmMvbWFwJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAncmFtZGEvc3JjL2ZpbHRlcic7XG5pbXBvcnQgcGFydGlhbCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbCc7XG5pbXBvcnQga2V5cyBmcm9tICdyYW1kYS9zcmMva2V5cyc7XG5pbXBvcnQgcGlja0J5IGZyb20gJ3JhbWRhL3NyYy9waWNrQnknO1xuaW1wb3J0IGhnIGZyb20gJ21lcmN1cnknO1xuXG5pbXBvcnQgeyByYW5kb21JbnRGcm9tUmFuZ2UsIHJhbmRvbVJnYkNvbG9yIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3Qocm93cywgY29sdW1ucywgaXNDZWxsRW5hYmxlZCwgc3BlYykge1xuICBjb25zdCB0b3RhbENlbGxzID0gcm93cyAqIGNvbHVtbnM7XG4gIGNvbnN0IF9tb3ZlID0gcGFydGlhbChcbiAgICBtb3ZlLCB0b3RhbENlbGxzLCBjb2x1bW5zLCBpc0NlbGxFbmFibGVkLCBpc1ZhbGlkSW5kZXhcbiAgKTtcblxuICAvLyBUT0RPOiBDb25zaWRlciB0byBub3Qgc3RvcmUgYGNvbGAgYW5kIGByb3dgLFxuICAvLyBvdGhlcndpc2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlbSB0b28gd2hpbGUgXCJtb3ZpbmdcIlxuICByZXR1cm4gaGcuc3RydWN0KHtcbiAgICBpZDogaGcudmFsdWUoc3BlYy5pZCksXG4gICAgcHJldkluZGV4OiBzcGVjLmluZGV4LFxuICAgIGluZGV4OiBoZy52YWx1ZShzcGVjLmluZGV4KSxcbiAgICBuZXh0SW5kZXg6IHNwZWMuaW5kZXgsXG4gICAgY29sOiBoZy52YWx1ZShzcGVjLmNvbCksXG4gICAgcm93OiBoZy52YWx1ZShzcGVjLnJvdyksXG4gICAgY29sb3I6IGhnLnZhbHVlKHNwZWMuY29sb3IpLFxuICAgIG1vdmU6IGhnLnZhbHVlKF9tb3ZlKSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNWYWxpZEluZGV4KHRvdGFsSW5kZXhlcywgcHJldkluZGV4LCBpbmRleCwgbmV4dEluZGV4KSB7XG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldkluZGV4KSB7XG4gICAgICBpZiAodG90YWxJbmRleGVzID4gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbi8vIFRPRE86IENvbnNpZGVyIHRvIGdldCBjb2xvciBmcm9tIHV1aWQgY29udmVyc2lvblxuQm90LmNyZWF0ZUlkZW50aXR5ID0gZnVuY3Rpb24gY3JlYXRlSWRlbnRpdHkoKSB7XG4gIGNvbnN0IGlkID0gdXVpZC52NCgpO1xuXG4gIC8vIFRPRE86IFByZXZlbnQgZnJvbSBjcmVhdGluZyBkdXBsaWNhdGVkIGNvbG9ycy4gQ29uc2lkZXIgYWxzb1xuICAvLyB0byBub3QgY3JlYXRlIHZhcnkgc2ltaWxhciBjb2xvcnNcbiAgY29uc3QgY29sb3IgPSByYW5kb21SZ2JDb2xvcih7XG4gICAgcjogWzAsIDE4MF0sXG4gICAgZzogWzAsIDEyMF0sXG4gICAgYjogWzAsIDIyMF0sXG4gIH0pO1xuXG4gIHJldHVybiB7IGlkLCBjb2xvciB9O1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gbW92ZSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpc0NlbGxFbmFibGVkLCBpc1ZhbGlkSW5kZXgsIHByZXZJbmRleCwgaW5kZXgpIHtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IGdldEF2YWlsYWJsZURpcmVjdGlvbnModG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpO1xuXG4gIGNvbnN0IGluZGV4ZXMgPSBnZXRBdmFpbGFibGVJbmRleGVzKGNvbHVtbnMsIGluZGV4LCBkaXJlY3Rpb25zKTtcblxuICBmdW5jdGlvbiBmaWx0ZXJJbmRleGVzKGFsbCkge1xuICAgIGNvbnN0IGZpbHRlckVuYWJsZWQgPSBmaWx0ZXIoaXNDZWxsRW5hYmxlZCk7XG5cbiAgICBjb25zdCBlbmFibGVkID0gZmlsdGVyRW5hYmxlZChhbGwpO1xuXG4gICAgY29uc3QgZmlsdGVyVmFsaWQgPSBmaWx0ZXIoXG4gICAgICBwYXJ0aWFsKGlzVmFsaWRJbmRleCwgZW5hYmxlZC5sZW5ndGgsIHByZXZJbmRleCwgaW5kZXgpXG4gICAgKTtcblxuICAgIHJldHVybiBmaWx0ZXJWYWxpZChlbmFibGVkKTtcbiAgfVxuXG4gIGNvbnN0IHZhbGlkSW5kZXhlcyA9IGZpbHRlckluZGV4ZXMoaW5kZXhlcyk7XG5cbiAgY29uc3QgbmV4dEluZGV4ID0gcGlja1JhbmRvbUluZGV4KHZhbGlkSW5kZXhlcyk7XG5cbiAgcmV0dXJuIG5leHRJbmRleCAhPT0gbnVsbCA/IG5leHRJbmRleCA6IGluZGV4O1xufTtcblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGdldEF2YWlsYWJsZURpcmVjdGlvbnModG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpIHtcbiAgY29uc3QgdmFsaWREaXJlY3Rpb25zID0gcGlja1ZhbGlkRGlyZWN0aW9ucyh7XG4gICAgdTogIWlzVG9wQm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpLFxuICAgIHI6ICFpc1JpZ2h0Qm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpLFxuICAgIGQ6ICFpc0JvdHRvbUJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KSxcbiAgICBsOiAhaXNMZWZ0Qm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpLFxuICB9KTtcblxuICByZXR1cm4ga2V5cyh2YWxpZERpcmVjdGlvbnMpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuY29uc3QgaXNWYWxpZERpcmVjdGlvbiA9IHZhbCA9PiB2YWwgPT09IHRydWU7XG5jb25zdCBwaWNrVmFsaWREaXJlY3Rpb25zID0gcGlja0J5KGlzVmFsaWREaXJlY3Rpb24pO1xuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlSW5kZXhlcyhjb2x1bW5zLCBpbmRleCwgZGlyZWN0aW9ucykge1xuICBjb25zdCBpbmRleEJ5RGlyZWN0aW9uID0gcGFydGlhbChnZXRJbmRleEJ5RGlyZWN0aW9uLCBjb2x1bW5zLCBpbmRleCk7XG4gIHJldHVybiBtYXAoaW5kZXhCeURpcmVjdGlvbiwgZGlyZWN0aW9ucyk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5RGlyZWN0aW9uKGNvbHVtbnMsIGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd1JzogcmV0dXJuIG1vdmVVcChjb2x1bW5zLCBpbmRleCk7XG4gICAgY2FzZSAncic6IHJldHVybiBtb3ZlUmlnaHQoY29sdW1ucywgaW5kZXgpO1xuICAgIGNhc2UgJ2QnOiByZXR1cm4gbW92ZURvd24oY29sdW1ucywgaW5kZXgpO1xuICAgIGNhc2UgJ2wnOiByZXR1cm4gbW92ZUxlZnQoY29sdW1ucywgaW5kZXgpO1xuICAgIC8vIG5vIGRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcGlja1JhbmRvbUluZGV4KGluZGV4ZXMpIHtcbiAgY29uc3QgdG90YWxJbmRleGVzID0gaW5kZXhlcy5sZW5ndGg7XG4gIHJldHVybiB0b3RhbEluZGV4ZXNcbiAgICA/IGluZGV4ZXNbcmFuZG9tSW50RnJvbVJhbmdlKDAsIHRvdGFsSW5kZXhlcyAtIDEpXVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG1vdmVVcChjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggLSBjb2x1bW5zO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gbW92ZVJpZ2h0KGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCArIDE7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBtb3ZlRG93bihjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggKyBjb2x1bW5zO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gbW92ZUxlZnQoY29sdW1ucywgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4IC0gMTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGlzQm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpIHtcbiAgcmV0dXJuIGlzVG9wQm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpXG4gICAgfHwgaXNSaWdodEJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KVxuICAgIHx8IGlzQm90dG9tQm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpXG4gICAgfHwgaXNMZWZ0Qm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNUb3BCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPCBjb2x1bW5zO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNSaWdodEJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA9PSBjb2x1bW5zIC0gMVxuICAgIHx8IChpbmRleCArIDEpICUgY29sdW1ucyA9PSAwO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNCb3R0b21Cb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gdG90YWxDZWxscyAtIGNvbHVtbnM7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBpc0xlZnRCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPT0gMFxuICAgIHx8IGluZGV4ID09IGNvbHVtbnNcbiAgICB8fCBpbmRleCAlIGNvbHVtbnMgPT0gMDtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7IHNlbmRUYXBTdGFydCwgc2VuZFRhcEVuZCwgc2VuZFRhcENhbmNlbCB9IGZyb20gJy4uL2dlc3R1cmVzJztcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oKSB7XG4gIHJldHVybiBoZy5zdGF0ZSh7XG4gICAgaXNBY3RpdmU6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBjaGFubmVsczogeyBvblRhcFN0YXJ0LCBvblRhcEVuZCwgb25UYXBDYW5jZWwgfSxcbiAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5CdXR0b24ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlLCBwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBbJ2V2LWV2ZW50J106IGV2RXZlbnQsXG4gICAgWydldi1jbGljayddOiBldkNsaWNrLFxuICAgIGlzVGFwcGVkLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICAuLi5yZXN0LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZGVmYXVsdEhhbmRsZXJzID0gW1xuICAgIHNlbmRUYXBTdGFydChzdGF0ZS5jaGFubmVscy5vblRhcFN0YXJ0KSxcbiAgICBzZW5kVGFwRW5kKHN0YXRlLmNoYW5uZWxzLm9uVGFwRW5kKSxcbiAgICBzZW5kVGFwQ2FuY2VsKHN0YXRlLmNoYW5uZWxzLm9uVGFwQ2FuY2VsKSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVycyA9IGRlZmF1bHRIYW5kbGVycy5jb25jYXQoXG4gICAgZXZFdmVudCA/IEFycmF5LmlzQXJyYXkoZXZFdmVudCkgPyBldkV2ZW50IDogW2V2RXZlbnRdIDogW11cbiAgKTtcblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uLmFtYXplLUJ1dHRvbicsXG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIGNsYXNzTmFtZTogY3goXG4gICAgICAgICAgc3RhdGUuaXNBY3RpdmUgJiYgJ2FtYXplLUJ1dHRvbi0tYWN0aXZlJyxcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBldkNsaWNrXG4gICAgICAgID8geyAnZXYtY2xpY2snOiBldkNsaWNrIH1cbiAgICAgICAgOiB7ICdldi1ldmVudCc6IGhhbmRsZXJzIH1cbiAgICApLFxuICAgIGNoaWxkcmVuXG4gICk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvblRhcFN0YXJ0KHN0YXRlKSB7XG4gIHN0YXRlLmlzQWN0aXZlLnNldCh0cnVlKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uVGFwRW5kKHN0YXRlKSB7XG4gIHN0YXRlLmlzQWN0aXZlLnNldChmYWxzZSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvblRhcENhbmNlbChzdGF0ZSkge1xuICBzdGF0ZS5pc0FjdGl2ZS5zZXQoZmFsc2UpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcbmltcG9ydCBfbWVtb2l6ZSBmcm9tICdtZW1vaXplZSc7XG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9wcm9wcyBmcm9tICdyYW1kYS9zcmMvcHJvcHMnO1xuXG5pbXBvcnQgeyBzZW5kVGFwIH0gZnJvbSAnLi4vZ2VzdHVyZXMnO1xuaW1wb3J0IGRyYWdUYXJnZXRFdmVudHMgZnJvbSAnLi4vZHJhZy1ldmVudHMvdGFyZ2V0JztcbmltcG9ydCBUaWxlIGZyb20gJy4uL3RpbGUnO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZWxsKGNvbHVtbnMsIGluZGV4LCBvbkFkZEJvdCkge1xuICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gY29sdW1ucyk7XG4gIGNvbnN0IGNvbCA9IGluZGV4IC0gcm93ICogY29sdW1ucztcblxuICBjb25zdCBzdGF0ZSA9IGhnLnN0YXRlKHtcbiAgICBjb2x1bW5zOiBoZy52YWx1ZShjb2x1bW5zKSxcbiAgICBpbmRleDogaGcudmFsdWUoaW5kZXgpLFxuICAgIHJvdzogaGcudmFsdWUocm93KSxcbiAgICBjb2w6IGhnLnZhbHVlKGNvbCksXG4gICAgaXNBY3RpdmU6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc0VudHJ5OiBoZy52YWx1ZShmYWxzZSksXG4gICAgaXNFeGl0OiBoZy52YWx1ZShmYWxzZSksXG4gICAgaXNFbmFibGVkOiBoZy52YWx1ZShpc0VuYWJsZWQpLFxuICAgIGlzRHJhZ0hvdmVyZWQ6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBvbkRyb3A6IGhnLnZhbHVlKG9uRHJvcCksXG4gICAgYWRkQm90OiBoZy52YWx1ZShhZGRCb3QpLFxuICAgIGNoYW5uZWxzOiB7IG9uVGFwLCBvbkRyYWcgfSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuICAgIHJldHVybiBzdGF0ZS5pc0FjdGl2ZSgpXG4gICAgICB8fCBzdGF0ZS5pc0VudHJ5KClcbiAgICAgIHx8IHN0YXRlLmlzRXhpdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQm90KGJvdElkZW50aXR5KSB7XG4gICAgLy8gVE9ETzogQ2hlY2sgaWYgaXQncyBiZXR0ZXIgdG8gbm90IHN0b3JlIGByb3dgIGFuZCBgY29sYCxcbiAgICAvLyBpbnNpZGUgYEJvdGAgaW5zdGFuY2VcbiAgICBvbkFkZEJvdChPYmplY3QuYXNzaWduKHt9LCBib3RJZGVudGl0eSwgeyBpbmRleCwgcm93LCBjb2wgfSkpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuY29uc3QgY2VsbFN0eWxlID0gbWVtb2l6ZSgoY29sdW1ucywgY29sLCB3aWR0aCwgbWFyZ2luID0gMCkgPT4ge1xuICByZXR1cm4gIHtcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgJ3BhZGRpbmctYm90dG9tJzogYCR7d2lkdGh9JWAsXG4gICAgbWFyZ2luOiBgJHttYXJnaW59JWAsXG4gICAgY2xlYXI6IGNvbCA9PSAwXG4gICAgICA/ICdsZWZ0J1xuICAgICAgOiBjb2wgPT0gY29sdW1ucyAtIDFcbiAgICAgICAgID8gJ3JpZ2h0J1xuICAgICAgICAgOiAnbm9uZScsIC8vIFRPRE86IENvbnNpZGVyIHRvIG5vdCBhc3NpZ24gYGNsZWFyOiAnbm9uZSdgXG4gIH07XG59KTtcblxuY29uc3QgdGlsZVByb3BzID0gbWVtb2l6ZSgoaXNBY3RpdmUsIGlzRW50cnksIGlzRXhpdCwgaXNEcmFnSG92ZXJlZCwgYm90SW5kaWNhdG9ycykgPT4ge1xuICByZXR1cm4geyBpc0FjdGl2ZSwgaXNFbnRyeSwgaXNFeGl0LCBpc0RyYWdIb3ZlcmVkLCBib3RJbmRpY2F0b3JzIH07XG59KTtcblxuQ2VsbC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUsIHByb3BzLCBib3RJbmRpY2F0b3JzKSB7XG4gIGNvbnN0IHsgaXNFbnRyeSwgY2hhbm5lbHMgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IHN1cmZhY2VQcm9wcyA9IHByb3BzLmlzU3RhcnRlZCA/IHt9IDogIWlzRW50cnlcbiAgICA/IHtcbiAgICAgICdldi1ldmVudCc6IFtcbiAgICAgICAgc2VuZFRhcChjaGFubmVscy5vblRhcCwgeyBib3RJbmRpY2F0b3JzIH0pLFxuICAgICAgICBzZW5kVGFwKHByb3BzLmNoZWNrUmVhZHlTdGF0ZSksXG4gICAgICBdLFxuICAgIH1cbiAgICA6IHtcbiAgICAgICdldi1ldmVudCc6IFtcbiAgICAgICAgc2VuZFRhcChjaGFubmVscy5vblRhcCwgeyBib3RJbmRpY2F0b3JzIH0pLFxuICAgICAgICBkcmFnVGFyZ2V0RXZlbnRzKGNoYW5uZWxzLm9uRHJhZyksXG4gICAgICAgIHNlbmRUYXAocHJvcHMuY2hlY2tSZWFkeVN0YXRlKSxcbiAgICAgIF0sXG4gICAgfTtcblxuICByZXR1cm4gaChcbiAgICAnLmFtYXplLUNlbGwnLFxuICAgIHtcbiAgICAgIHN0eWxlOiBjZWxsU3R5bGUoXG4gICAgICAgIC4uLl9wcm9wcyhbJ2NvbHVtbnMnLCAnY29sJ10sIHN0YXRlKSxcbiAgICAgICAgLi4uX3Byb3BzKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHByb3BzKVxuICAgICAgKSxcbiAgICB9LFxuICAgIFtcbiAgICAgIGhnLnBhcnRpYWwoVGlsZS5yZW5kZXIsIHRpbGVQcm9wcyguLi5fcHJvcHMoW1xuICAgICAgICAnaXNBY3RpdmUnLCAnaXNFbnRyeScsICdpc0V4aXQnLCAnaXNEcmFnSG92ZXJlZCcsXG4gICAgICBdLCBzdGF0ZSksIGJvdEluZGljYXRvcnMpKSxcblxuICAgICAgaCgnLmFtYXplLUNlbGwtc3VyZmFjZScsIHN1cmZhY2VQcm9wcyksXG4gICAgXVxuICApO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25UYXAoc3RhdGUsIHsgYm90SW5kaWNhdG9ycyB9KSB7XG4gIC8vIFRPRE86IENvbnNpZGVyIHRvIHJlbmFtZSBgc25hcHNob3RgXG4gIGNvbnN0IHNuYXBzaG90ID0gc3RhdGUoKTtcblxuICBpZiAoYm90SW5kaWNhdG9ycy5sZW5ndGgpIHJldHVybjtcblxuICBpZiAoIXNuYXBzaG90LmlzQWN0aXZlKSB7XG4gICAgc3RhdGUuaXNBY3RpdmUuc2V0KHRydWUpO1xuICB9XG5cbiAgZWxzZSBpZiAoc25hcHNob3QuaXNFeGl0KSB7XG4gICAgc3RhdGUuc2V0KE9iamVjdC5hc3NpZ24oe30sIHNuYXBzaG90LCB7IGlzRXhpdDogZmFsc2UsIGlzQWN0aXZlOiBmYWxzZSB9KSk7XG4gIH1cblxuICBlbHNlIGlmIChzbmFwc2hvdC5pc0VudHJ5KSB7XG4gICAgc3RhdGUuc2V0KE9iamVjdC5hc3NpZ24oe30sIHNuYXBzaG90LCB7IGlzRW50cnk6IGZhbHNlLCBpc0V4aXQ6IHRydWUgfSkpO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgc3RhdGUuaXNFbnRyeS5zZXQodHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uRHJhZyhzdGF0ZSwgZGF0YSkge1xuICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgIGNhc2UgJ2RyYWdlbnRlcic6IHJldHVybiBvbkRyYWdlbnRlcihzdGF0ZSwgZGF0YSk7XG4gICAgLy8gY2FzZSAnZHJhZ292ZXInOiByZXR1cm4gb25EcmFnb3ZlcihzdGF0ZSwgZGF0YSk7XG4gICAgY2FzZSAnZHJhZ2xlYXZlJzogcmV0dXJuIG9uRHJhZ2xlYXZlKHN0YXRlLCBkYXRhKTtcbiAgICBjYXNlICdkcm9wJzogcmV0dXJuIG9uRHJvcChzdGF0ZSwgZGF0YSk7XG4gICAgLy8gbm8gZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvbkRyYWdlbnRlcihzdGF0ZSkge1xuICBzdGF0ZS5pc0RyYWdIb3ZlcmVkLnNldCh0cnVlKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uRHJhZ2xlYXZlKHN0YXRlKSB7XG4gIHN0YXRlLmlzRHJhZ0hvdmVyZWQuc2V0KGZhbHNlKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uRHJvcChzdGF0ZSwgZGF0YSkge1xuICBzdGF0ZS5pc0RyYWdIb3ZlcmVkLnNldChmYWxzZSk7XG5cbiAgY29uc3QgYm90SWRlbnRpdHkgPSBKU09OLnBhcnNlKGRhdGEuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSk7XG4gIGNvbnN0IGFkZEJvdCA9IHN0YXRlLmFkZEJvdCgpO1xuXG4gIGFkZEJvdChib3RJZGVudGl0eSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gJ21lbW9pemVlJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCB7IHNlbmRUYXAgfSBmcm9tICcuLi9nZXN0dXJlcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvJztcbmltcG9ydCBCb3RIYW5kbGUgZnJvbSAnLi4vYm90LWhhbmRsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5cbmNvbnN0IG1lbW9pemUgPSBwYXJ0aWFsUmlnaHQoX21lbW9pemUsIHsgbWF4OiAxIH0pO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyb2xzKHsgdW5kbywgcmVkbyB9KSB7XG4gIHJldHVybiBoZy5zdGF0ZSh7XG4gICAgc3RhcnRQYXVzZUJ0bjogQnV0dG9uKCksXG4gICAgcmVzZXRCdG46IEJ1dHRvbigpLFxuICAgIHVuZG9CdG46IEJ1dHRvbigpLFxuICAgIHJlZG9CdG46IEJ1dHRvbigpLFxuICAgIGJvdEhhbmRsZTogQm90SGFuZGxlKCksXG4gICAgY2hhbm5lbHM6IHsgdW5kbywgcmVkbyB9LFxuICB9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IHN0YXJ0UGF1c2VCdG5Qcm9wcyA9IG1lbW9pemUoKGlzUmVhZHksIGlzUnVubmluZywgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCwgd2lubmVycykgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9ICFpc1JlYWR5O1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICBkaXNhYmxlZCxcbiAgICBjbGFzc05hbWU6IGlzUnVubmluZyA/ICdhbWF6ZS1CdXR0b24tLXBhdXNlJyA6ICdhbWF6ZS1CdXR0b24tLXN0YXJ0JyxcbiAgICBjaGlsZHJlbjogd2lubmVycyA/ICdOZXcnIDogaXNSdW5uaW5nID8gJ1BhdXNlJyA6ICdTdGFydCcsXG4gIH0sICFkaXNhYmxlZCA/IHtcbiAgICAnZXYtZXZlbnQnOiBzZW5kVGFwKHdpbm5lcnMgPyBvblJlc2V0IDogaXNSdW5uaW5nID8gb25QYXVzZSA6IG9uU3RhcnQpLFxuICB9IDoge30pO1xufSk7XG5cbmNvbnN0IHJlc2V0QnRuUHJvcHMgPSBtZW1vaXplKChpc1J1bm5pbmcsIG9uUmVzZXQsIHdpbm5lcnMpID0+IHtcbiAgY29uc3QgZGlzYWJsZWQgPSBpc1J1bm5pbmcgfHwgd2lubmVycyAmJiB3aW5uZXJzLmxlbmd0aDtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW46ICdSZXNldCcsXG4gIH0sICFkaXNhYmxlZCA/IHtcbiAgICAnZXYtZXZlbnQnOiBzZW5kVGFwKG9uUmVzZXQpLFxuICB9IDoge30pO1xufSk7XG5cbmNvbnN0IHVuZG9CdG5Qcm9wcyA9IG1lbW9pemUoKHVuZG8sIGlzU3RhcnRlZCkgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IGlzU3RhcnRlZDtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW46ICdVbmRvJyxcbiAgfSwgIWRpc2FibGVkID8ge1xuICAgICdldi1jbGljayc6IGhnLnNlbmRDbGljayh1bmRvKSxcbiAgfSA6IHt9KTtcbn0pO1xuXG5jb25zdCByZWRvQnRuUHJvcHMgPSBtZW1vaXplKChyZWRvLCBpc1N0YXJ0ZWQpID0+IHtcbiAgY29uc3QgZGlzYWJsZWQgPSBpc1N0YXJ0ZWQ7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgIGRpc2FibGVkLFxuICAgIGNoaWxkcmVuOiAnUmVkbycsXG4gIH0sICFkaXNhYmxlZCA/IHtcbiAgICAnZXYtY2xpY2snOiBoZy5zZW5kQ2xpY2socmVkbyksXG4gIH0gOiB7fSk7XG59KTtcblxuY29uc3QgYm90SGFuZGxlUHJvcHMgPSBtZW1vaXplKChib3RJZGVudGl0eSwgYWRkQm90UmFuZG9tbHksIGlzU3RhcnRlZCkgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IGlzU3RhcnRlZDtcblxuICByZXR1cm4geyBib3RJZGVudGl0eSwgYWRkQm90UmFuZG9tbHksIGRpc2FibGVkIH07XG59KTtcblxuQ29udHJvbHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlLCBwcm9wcykge1xuICBjb25zdCB7XG4gICAgYm90SWRlbnRpdHksXG4gICAgaXNSZWFkeSwgaXNTdGFydGVkLCBpc1J1bm5pbmcsXG4gICAgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCxcbiAgICB3aW5uZXJzLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIGgoJ3NlY3Rpb24uYW1hemUtQ29udHJvbHMudS1jZicsIFtcbiAgICBoZy5wYXJ0aWFsKExvZ28ucmVuZGVyKSxcblxuICAgIGgoJy5hbWF6ZS1Db250cm9scy1idXR0b25zLnUtY2YnLCBbXG4gICAgICBoZy5wYXJ0aWFsKFxuICAgICAgICBCdXR0b24ucmVuZGVyLFxuICAgICAgICBzdGF0ZS5zdGFydFBhdXNlQnRuLFxuICAgICAgICBzdGFydFBhdXNlQnRuUHJvcHMoaXNSZWFkeSwgaXNSdW5uaW5nLCBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LCB3aW5uZXJzKVxuICAgICAgKSxcblxuICAgICAgaGcucGFydGlhbChcbiAgICAgICAgQnV0dG9uLnJlbmRlcixcbiAgICAgICAgc3RhdGUucmVzZXRCdG4sXG4gICAgICAgIHJlc2V0QnRuUHJvcHMoaXNSdW5uaW5nLCBvblJlc2V0LCB3aW5uZXJzKVxuICAgICAgKSxcblxuICAgICAgaGcucGFydGlhbChcbiAgICAgICAgQnV0dG9uLnJlbmRlcixcbiAgICAgICAgc3RhdGUudW5kb0J0bixcbiAgICAgICAgdW5kb0J0blByb3BzKHN0YXRlLmNoYW5uZWxzLnVuZG8sIGlzU3RhcnRlZClcbiAgICAgICksXG5cbiAgICAgIGhnLnBhcnRpYWwoXG4gICAgICAgIEJ1dHRvbi5yZW5kZXIsXG4gICAgICAgIHN0YXRlLnJlZG9CdG4sXG4gICAgICAgIHJlZG9CdG5Qcm9wcyhzdGF0ZS5jaGFubmVscy5yZWRvLCBpc1N0YXJ0ZWQpXG4gICAgICApLFxuICAgIF0pLFxuXG4gICAgaGcucGFydGlhbChcbiAgICAgIEJvdEhhbmRsZS5yZW5kZXIsXG4gICAgICBzdGF0ZS5ib3RIYW5kbGUsXG4gICAgICBib3RIYW5kbGVQcm9wcyhib3RJZGVudGl0eSwgcHJvcHMuYWRkQm90UmFuZG9tbHksIGlzU3RhcnRlZClcbiAgICApLFxuICBdKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZyBmcm9tICdtZXJjdXJ5JztcblxuLyoqXG4gKiBEcmFnIGV2ZW50c1xuICovXG5cbmV4cG9ydCBjb25zdCBTT1VSQ0VfRVZFTlRTID0gWydkcmFnc3RhcnQnLCAnZHJhZycsICdkcmFnZW5kJ107XG5leHBvcnQgY29uc3QgVEFSR0VUX0VWRU5UUyA9IFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ107XG5leHBvcnQgY29uc3QgRVZFTlRTID0gU09VUkNFX0VWRU5UUy5jb25jYXQoVEFSR0VUX0VWRU5UUyk7XG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0cyA9IHt9KSB7XG4gIGNvbnN0IG1vZGUgPSBvcHRzLm1vZGU7XG4gIGNvbnN0IGV2ZW50cyA9IG9wdHMuZXZlbnRzO1xuXG4gIGNvbnN0IGRlbGVnYXRvciA9IGhnLkRlbGVnYXRvcigpO1xuXG4gIHJldHVybiB7IGxpc3RlblRvLCB1bmxpc3RlblRvIH07XG5cbiAgZnVuY3Rpb24gbGlzdGVuVG8oKSB7XG4gICAgRVZFTlRTLmZvckVhY2goX2xpc3RlblRvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubGlzdGVuVG8oKSB7XG4gICAgRVZFTlRTLmZvckVhY2goX3VubGlzdGVuVG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2xpc3RlblRvKG5hbWUpIHtcbiAgICBpZiAoIWlzRXZlbnRFbmFibGVkKG5hbWUpKSByZXR1cm47XG4gICAgZGVsZWdhdG9yLmxpc3RlblRvKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3VubGlzdGVuVG8obmFtZSkge1xuICAgIGlmICghaXNFdmVudEVuYWJsZWQobmFtZSkpIHJldHVybjtcbiAgICBkZWxlZ2F0b3IudW5saXN0ZW5UbyhuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlbnRFbmFibGVkKG5hbWUpIHtcbiAgICBpZiAoZXZlbnRzICYmICF+ZXZlbnRzLmluZGV4T2YobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIW1vZGUpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKG1vZGUpIHtcbiAgICAgIGlmIChtb2RlID09PSAnc291cmNlJyAmJiAhflNPVVJDRV9FVkVOVFMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlID09PSAndGFyZ2V0JyAmJiAhflRBUkdFVF9FVkVOVFMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZyBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IHsgU09VUkNFX0VWRU5UUyB9IGZyb20gJy4vc2V0dXAnO1xuXG4vKipcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgaGcuQmFzZUV2ZW50KGhhbmRsZURyYWcpO1xuXG4vLyBUT0RPOiBIYW5kbGUgYWxzbyBcImRyYWdcIiBldmVudC4gRmlyc3QgbmVlZCB0byBiZSBhYmxlIHRvIHNwZWNpZnlcbi8vIHRoZSBldmVudHMgdGhhdCB3ZSB3YW50IHRvIGxpc3RlbnQgdG8sIHZpYSBgdGhpcy5kYXRhYC5cbi8vIC8vIElmIG5vdCBzcGVjaWZpZWQgbGlzdGVuIHRvIGFsbCBgU09VUkNFX0VWRU5UU2Bcbi8vIFRPRE86IENvbnNpZGVyIHRvIG1vdmUgc29tZSBmdW5jdGlvbnMgdG8gdGhlIG91dGVyIHNjb3BlXG5mdW5jdGlvbiBoYW5kbGVEcmFnKGV2LCBicm9hZGNhc3QpIHtcbiAgLy8gSWdub3JlIG90aGVyIGV2ZW50c1xuICBpZiAoIWlzRHJhZ0V2ZW50KGV2KSkgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gIGNvbnN0IGRlbGVnYXRvciA9IGhnLkRlbGVnYXRvcigpO1xuICBjb25zdCBfdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldDtcbiAgbGV0IGxpc3RlbmVyc0FkZGVkID0gZmFsc2U7IC8vIFRPRE86IENoZWNrIGlmIGNhbiByZW1vdmUgdGhpc1xuXG4gIGlmIChldi50eXBlID09PSAnZHJhZ3N0YXJ0Jykge1xuICAgIGNvbnN0IHRyaWdnZXJEcmFnc3RhcnQgPSAhbGlzdGVuZXJzQWRkZWQ7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgaWYgKHRyaWdnZXJEcmFnc3RhcnQpIGRyYWdzdGFydChldik7XG4gIH1cblxuICAvLyBUT0RPOiBDaGVjayBpZiBjYW4gcmVtb3ZlIGB0YXJnZXRgIGZyb20gYnJvYWRjYXN0ZWQgZGF0YSxcbiAgLy8gZnJvbSBhbGwvc29tZSBoYW5kbGVyc1xuICBmdW5jdGlvbiBkcmFnc3RhcnQoZSkge1xuICAgIGlmICghaXNSb290RWxlbWVudE9mRXZlbnQoZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IGUuX3Jhd0V2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcblxuICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgIHR5cGU6ICdkcmFnc3RhcnQnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgIGRhdGFUcmFuc2ZlcixcbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnZW5kKGUpIHtcbiAgICBpZiAoIWlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgIHR5cGU6ICdkcmFnZW5kJyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRGF0YShhZGRpdGlvbmFsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIGFkZGl0aW9uYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNSb290RWxlbWVudE9mRXZlbnQoZSkge1xuICAgIHJldHVybiBlLnRhcmdldCA9PT0gX3RhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAobGlzdGVuZXJzQWRkZWQpIHJldHVybjtcblxuICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpO1xuICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ2VuZCk7XG4gICAgbGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghbGlzdGVuZXJzQWRkZWQpIHJldHVybjtcblxuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpO1xuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ2VuZCk7XG4gICAgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNEcmFnRXZlbnQoZXYpIHtcbiAgcmV0dXJuIH5TT1VSQ0VfRVZFTlRTLmluZGV4T2YoZXYudHlwZSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgaGcgZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCB7IFRBUkdFVF9FVkVOVFMgfSBmcm9tICcuL3NldHVwJztcblxuLyoqXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGhnLkJhc2VFdmVudChoYW5kbGVEcmFnKTtcblxuLy8gVE9ETzogQWxsb3cgdG8gYmUgYWJsZSB0byBzcGVjaWZ5IHRoZSBldmVudHMgdGhhdCB3ZSB3YW50XG4vLyB0byBsaXN0ZW50IHRvLCB2aWEgYHRoaXMuZGF0YWAuXG4vLyBJZiBub3Qgc3BlY2lmaWVkIGxpc3RlbiB0byBhbGwgYFRBUkdFVF9FVkVOVFNgXG5mdW5jdGlvbiBoYW5kbGVEcmFnKGV2LCBicm9hZGNhc3QpIHtcbiAgLy8gSWdub3JlIG90aGVyIGV2ZW50c1xuICBpZiAoIWlzRHJhZ0V2ZW50KGV2KSkgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gIGNvbnN0IGRlbGVnYXRvciA9IGhnLkRlbGVnYXRvcigpO1xuICBjb25zdCBfdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldC8qIHx8IGV2LnRhcmdldCovO1xuICBsZXQgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgLy8gVE9ETzogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG5cbiAgaWYgKGV2LnR5cGUgPT09ICdkcmFnZW50ZXInKSB7XG4gICAgY29uc3QgdHJpZ2dlckRyYWdlbnRlciA9ICFsaXN0ZW5lcnNBZGRlZDtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICBpZiAodHJpZ2dlckRyYWdlbnRlcikgZHJhZ2VudGVyKGV2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdlbnRlcihlKSB7XG4gICAgaWYgKCFpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSkgcmV0dXJuO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgdHlwZTogJ2RyYWdlbnRlcicsXG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdvdmVyKGUpIHtcbiAgICBpZiAoIWlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpKSByZXR1cm47XG5cbiAgICBjb25zdCByYXcgPSBlLl9yYXdFdmVudDtcblxuICAgIC8vIEFsbG93cyB1cyB0byBkcm9wXG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbHNlIGlmIChyYXcucHJldmVudERlZmF1bHQpIHJhdy5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmF3LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuXG4gICAgLy8gYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgIC8vICAgdHlwZTogJ2RyYWdvdmVyJyxcbiAgICAvLyAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgLy8gICBkYXRhVHJhbnNmZXI6IHJhdy5kYXRhVHJhbnNmZXIsXG4gICAgLy8gfSkpO1xuICAgIC8vIC8vUkVGLy9cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdsZWF2ZShlKSB7XG4gICAgaWYgKCFpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSkgcmV0dXJuO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICB0eXBlOiAnZHJhZ2xlYXZlJyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJvcChlKSB7XG4gICAgaWYgKCFpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmF3ID0gZS5fcmF3RXZlbnQ7XG5cbiAgICAvLyBTdG9wcyB0aGUgYnJvd3NlciBmcm9tIHJlZGlyZWN0aW5nXG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGVsc2UgaWYgKHJhdy5zdG9wUHJvcGFnYXRpb24pIHJhdy5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgdHlwZTogJ2Ryb3AnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgIGRhdGFUcmFuc2ZlcjogcmF3LmRhdGFUcmFuc2ZlcixcbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREYXRhKGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgYWRkaXRpb25hbCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0ID09PSBfdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmIChsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdlbnRlcik7XG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXIpO1xuICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnbGVhdmUpO1xuICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgbGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghbGlzdGVuZXJzQWRkZWQpIHJldHVybjtcblxuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnZW50ZXIpO1xuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyKTtcbiAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ2xlYXZlKTtcbiAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuICAgIGxpc3RlbmVyc0FkZGVkID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGlzRHJhZ0V2ZW50KGV2KSB7XG4gIHJldHVybiB+VEFSR0VUX0VWRU5UUy5pbmRleE9mKGV2LnR5cGUpO1xufVxuIiwiLyoqXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vR2lhbmx1Y2FHdWFyaW5pL1RvY2NhLmpzLCBNSVQgbGljZW5zZVxuICovXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZyBmcm9tICdtZXJjdXJ5JztcblxuLyoqXG4gKlxuICovXG5cbmNvbnN0IFRPVUNIX0VWRU5UUyA9IFtcbiAgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJyxcbl07XG5cbmNvbnN0IE1PVVNFX0VWRU5UUyA9IFtcbiAgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZW91dCcsXG5dO1xuXG5jb25zdCBFVkVOVFMgPSBUT1VDSF9FVkVOVFMuY29uY2F0KE1PVVNFX0VWRU5UUyk7XG5cbi8qKlxuICpcbiAqL1xuXG4vLyBTb21lIGhlbHBlcnMgYm9ycm93ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9pZS10b3VjaFxuLypjb25zdCBtc1BvaW50ZXJFbmFibGVkID0gISFuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgfHwgbmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7Ki8gLy9SRUYvL1xuLypjb25zdCBpc1RvdWNoID0gKCEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdylcbiAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdQaGFudG9tSlMnKSA8IDApXG4gIHx8IG1zUG9pbnRlckVuYWJsZWQ7Ki8gLy9SRUYvL1xuLypmdW5jdGlvbiBtc0V2ZW50VHlwZSh0eXBlKSB7XG4gIGNvbnN0IGxvID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBtcyA9IGBNUyR7dHlwZX1gO1xuICByZXR1cm4gbmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgPyBtcyA6IGxvO1xufSovIC8vUkVGLy9cbi8qY29uc3QgdG91Y2hldmVudHMgPSB7XG4gIHRvdWNoc3RhcnQ6IGAke21zRXZlbnRUeXBlKCdQb2ludGVyRG93bicpfSB0b3VjaHN0YXJ0YCxcbiAgdG91Y2hlbmQ6IGAke21zRXZlbnRUeXBlKCdQb2ludGVyVXAnKX0gdG91Y2hlbmRgLFxuICB0b3VjaG1vdmU6IGAke21zRXZlbnRUeXBlKCdQb2ludGVyTW92ZScpfSB0b3VjaG1vdmVgLFxufTsqLyAvL1JFRi8vXG5cbi8qKlxuICpcbiAqL1xuXG5jb25zdCBzd2lwZVRocmVzaG9sZCA9IDEwMDtcbi8vIFJhbmdlIG9mIHRpbWUgd2hlcmUgYSB0YXAgZXZlbnQgY291bGQgYmUgZGV0ZWN0ZWRcbmNvbnN0IHRhcFRocmVzaG9sZCA9IDE1MDtcbi8vIERlbGF5IG5lZWRlZCB0byBkZXRlY3QgYSBkb3VibGUgdGFwXG5jb25zdCBkb3VibGV0YXBUaHJlc2hvbGQgPSAyMDA7XG4vLyBEZWxheSBuZWVkZWQgdG8gZGV0ZWN0IGEgbG9uZyB0YXBcbmNvbnN0IGxvbmd0YXBUaHJlc2hvbGQgPSAxMDAwO1xuLy8gVG91Y2ggZXZlbnRzIGJvdW5kYXJpZXMgKDYwcHggYnkgZGVmYXVsdClcbmNvbnN0IHRhcFByZWNpc2lvbiA9IDYwIC8gMjtcbi8vIGNvbnN0IGp1c3RUb3VjaEV2ZW50cyA9IHdpbmRvdy5KVVNUX09OX1RPVUNIX0RFVklDRVMgfHwgaXNUb3VjaDsgLy9SRUYvL1xuXG4vKipcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgaGcuQmFzZUV2ZW50KGhhbmRsZUdlc3R1cmUpO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlR2VzdHVyZShldiwgYnJvYWRjYXN0KSB7XG4gIC8vIElnbm9yZSBvdGhlciBldmVudHNcbiAgaWYgKCFpc0tub3duRXZlbnQoZXYpKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgY29uc3QgZGVsZWdhdG9yID0gaGcuRGVsZWdhdG9yKCk7XG4gIGNvbnN0IF90YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuICBsZXQgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgLy8gVE9ETzogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gIGxldCB0YXBOdW0gPSAwO1xuICBsZXQgY3VyclgsIGN1cnJZLCBjYWNoZWRYLCBjYWNoZWRZO1xuICBsZXQgdGFwVGltZXIsIHRpbWVzdGFtcCwgdGFyZ2V0O1xuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgY29uc3QgdHJpZ2dlclRhcFN0YXJ0ID0gIWxpc3RlbmVyc0FkZGVkO1xuICAgIGNvbnN0IGlzVG91Y2ggPSBldi50eXBlID09PSAndG91Y2hzdGFydCc7XG5cbiAgICBhZGRMaXN0ZW5lcnMoaXNUb3VjaCk7XG5cbiAgICBpZiAodHJpZ2dlclRhcFN0YXJ0KSB0YXBTdGFydChldik7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gdGFwU3RhcnQoZSkge1xuICAgIGlmICghdHJpZ2dlcmVkT25Cb3VuZEVsZW1lbnQoZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHBvaW50ZXIgPSBnZXRQb2ludGVyRXZlbnQoZSk7XG4gICAgY2FjaGVkWCA9IGN1cnJYID0gcG9pbnRlci5wYWdlWDtcbiAgICBjYWNoZWRZID0gY3VyclkgPSBwb2ludGVyLnBhZ2VZO1xuXG4gICAgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgdGFwTnVtKys7XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICAvLyBfcmF3RXZlbnQ6IGUsIC8vUkVGLy9cbiAgICAgIHR5cGU6ICd0YXBzdGFydCcsXG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiB0YXBNb3ZlKGUpIHtcbiAgICBpZiAoIXRyaWdnZXJlZE9uQm91bmRFbGVtZW50KGUpKSByZXR1cm47XG5cbiAgICBjb25zdCBwb2ludGVyID0gZ2V0UG9pbnRlckV2ZW50KGUpO1xuXG4gICAgY3VyclggPSBwb2ludGVyLnBhZ2VYO1xuICAgIGN1cnJZID0gcG9pbnRlci5wYWdlWTtcblxuICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgIC8vIF9yYXdFdmVudDogZSwgLy9SRUYvL1xuICAgICAgdHlwZTogJ3RhcG1vdmUnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gdGFwRW5kKGUpIHtcbiAgICBpZiAoIXRyaWdnZXJlZE9uQm91bmRFbGVtZW50KGUpKSByZXR1cm47XG5cbiAgICAvLyBUaGlzIGxlYWRzIHRvIGEgd2FybmluZyBvbiBDaHJvbWUsXG4gICAgLy8gYnV0IGlzIHJlcXVpcmVkIHRvIG5vdCBmaXJlIGJvdGggdG91Y2hzdGFydFxuICAgIC8vIGFuZCBtb3VzZWRvd24gZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbiAgICBpZiAoZS5fcmF3RXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUuX3Jhd0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFtdO1xuICAgIGNvbnN0IG5vdyA9IGdldFRpbWVzdGFtcCgpO1xuICAgIGNvbnN0IGRlbHRhWCA9IGNhY2hlZFggLSBjdXJyWDtcbiAgICBjb25zdCBkZWx0YVkgPSBjYWNoZWRZIC0gY3Vyclk7XG5cbiAgICBjbGVhclRpbWVvdXQodGFwVGltZXIpO1xuXG4gICAgaWYgKGRlbHRhWCA8PSAtc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgIGV2ZW50VHlwZXMucHVzaCgnc3dpcGVyaWdodCcpO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggPj0gc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgIGV2ZW50VHlwZXMucHVzaCgnc3dpcGVsZWZ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSA8PSAtc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgIGV2ZW50VHlwZXMucHVzaCgnc3dpcGVkb3duJyk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSA+PSBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgZXZlbnRUeXBlcy5wdXNoKCdzd2lwZXVwJyk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50VHlwZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50VHlwZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBldmVudFR5cGVzW2ldO1xuXG4gICAgICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgICAgICAvLyBfcmF3RXZlbnQ6IGUsIC8vUkVGLy9cbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgICAgIHg6IE1hdGguYWJzKGRlbHRhWCksXG4gICAgICAgICAgICB5OiBNYXRoLmFicyhkZWx0YVkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoaXNUb3VjaEV2ZW50KGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRPRE86IFwibG9uZ3RhcFwiIHByZXZlbnRzIG5vcm1hbCBcInRhcFwiLFxuICAgICAgLy8gbWF5YmUgaXQncyBiZXR0ZXIgdG8gdHJpZ2dlciBhbHNvIFwidGFwXCIsXG4gICAgICAvLyBhbG9uZyB3aXRoIFwibG9uZ3RhcFwiIGV2ZW50XG4gICAgICBpZiAoY2FjaGVkWCA+PSBjdXJyWCAtIHRhcFByZWNpc2lvblxuICAgICAgICAgICYmIGNhY2hlZFggPD0gY3VyclggKyB0YXBQcmVjaXNpb25cbiAgICAgICAgICAmJiBjYWNoZWRZID49IGN1cnJZIC0gdGFwUHJlY2lzaW9uXG4gICAgICAgICAgJiYgY2FjaGVkWSA8PSBjdXJyWSArIHRhcFByZWNpc2lvbikge1xuICAgICAgICBpZiAodGltZXN0YW1wICsgdGFwVGhyZXNob2xkIC0gbm93ID49IDApIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGFwTnVtID09PSAyICYmIHRhcmdldCA9PT0gZS50YXJnZXRcbiAgICAgICAgICAgID8gJ2RvdWJsZXRhcCdcbiAgICAgICAgICAgIDogJ3RhcCc7XG5cbiAgICAgICAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICAgICAgICAvLyBfcmF3RXZlbnQ6IGUsIC8vUkVGLy9cbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0OyAvLyBUT09EOiBDaGVjayBpZiBjYW4gcmVtb3ZlIHRoaXNcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHRpbWVzdGFtcCArIGxvbmd0YXBUaHJlc2hvbGQgLSBub3cgPD0gMCkge1xuICAgICAgICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgICAgICAgIC8vIF9yYXdFdmVudDogZSwgLy9SRUYvL1xuICAgICAgICAgICAgdHlwZTogJ2xvbmd0YXAnLFxuICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDsgLy8gVE9PRDogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGFwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGlzVG91Y2hFdmVudChlKSk7XG5cbiAgICAgICAgdGFwTnVtID0gMDtcbiAgICAgIH0sIGRvdWJsZXRhcFRocmVzaG9sZCk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgLy8gX3Jhd0V2ZW50OiBlLCAvL1JFRi8vXG4gICAgICB0eXBlOiAndGFwZW5kJyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRhcENhbmNlbChlKSB7XG4gICAgaWYgKCF0cmlnZ2VyZWRPbkJvdW5kRWxlbWVudChlKSkgcmV0dXJuO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgLy8gX3Jhd0V2ZW50OiBlLCAvL1JFRi8vXG4gICAgICB0eXBlOiAndGFwY2FuY2VsJyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcbiAgICB0YXBOdW0gPSAwO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKGlzVG91Y2hFdmVudChlKSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkRGF0YShhZGRpdGlvbmFsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIGFkZGl0aW9uYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXJlZE9uQm91bmRFbGVtZW50KGUpIHtcbiAgICByZXR1cm4gZS50YXJnZXQgPT09IF90YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGlzVG91Y2ggPSBmYWxzZSkge1xuICAgIGlmIChsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgIGRlbGVnYXRvci5saXN0ZW5UbygndG91Y2htb3ZlJyk7XG5cbiAgICAgIC8vIFRPT0Q6IENoZWNrIGlmIGNhbiByZW1vdmUgdGhpc1xuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0YXBTdGFydCk7XG5cbiAgICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0YXBNb3ZlKTtcblxuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGFwRW5kKTtcblxuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGFwQ2FuY2VsKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGRlbGVnYXRvci5saXN0ZW5UbygnbW91c2Vtb3ZlJyk7XG4gICAgICBkZWxlZ2F0b3IubGlzdGVuVG8oJ21vdXNlb3V0Jyk7XG5cbiAgICAgIC8vIFRPT0Q6IENoZWNrIGlmIGNhbiByZW1vdmUgdGhpc1xuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRhcFN0YXJ0KTtcblxuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRhcE1vdmUpO1xuXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRhcEVuZCk7XG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0YXBFbmQpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoaXNUb3VjaCA9IGZhbHNlKSB7XG4gICAgaWYgKCFsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgIGRlbGVnYXRvci51bmxpc3RlblRvKCd0b3VjaG1vdmUnKTtcblxuICAgICAgLy8gVE9PRDogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRhcFN0YXJ0KTtcblxuICAgICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRhcE1vdmUpO1xuXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0YXBFbmQpO1xuXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0YXBDYW5jZWwpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgZGVsZWdhdG9yLnVubGlzdGVuVG8oJ21vdXNlbW92ZScpO1xuICAgICAgZGVsZWdhdG9yLnVubGlzdGVuVG8oJ21vdXNlb3V0Jyk7XG5cbiAgICAgIC8vIFRPT0Q6IENoZWNrIGlmIGNhbiByZW1vdmUgdGhpc1xuICAgICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRhcFN0YXJ0KTtcblxuICAgICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRhcE1vdmUpO1xuXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRhcEVuZCk7XG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0YXBFbmQpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyc0FkZGVkID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGlzS25vd25FdmVudChldikge1xuICBpZiAoIX5FVkVOVFMuaW5kZXhPZihldi50eXBlKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICghZXYuYnV0dG9uKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGV2LmJ1dHRvbiA9PT0gMTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldikge1xuICByZXR1cm4gVE9VQ0hfRVZFTlRTLmluZGV4T2YoZXYudHlwZSkgPiAtMTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGdldFBvaW50ZXJFdmVudChldikge1xuICBjb25zdCByYXcgPSBldi5fcmF3RXZlbnQ7XG4gIHJldHVybiByYXcudGFyZ2V0VG91Y2hlcyA/IHJhdy50YXJnZXRUb3VjaGVzWzBdIDogcmF3O1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgcGFydGlhbCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbCc7XG5pbXBvcnQgaGcgZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCB7IGhhbmRsZUdlc3R1cmUgfSBmcm9tICcuL2V2ZW50cyc7XG5cbi8qKlxuICpcbiAqL1xuXG5jb25zdCBQUkVWRU5UX0RFRlVBTFRfRVZFTlRTID0gW1xuICAnbG9uZ3RhcCcsICdzd2lwZXVwJywgJ3N3aXBlcmlnaHQnLCAnc3dpcGVkb3duJywgJ3N3aXBlbGVmdCcsICd0b3VjaG1vdmUnLFxuXTtcblxuLyoqXG4gKlxuICovXG5cbmV4cG9ydCBjb25zdCBzZW5kVGFwU3RhcnQgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICd0YXBzdGFydCcpKTtcbmV4cG9ydCBjb25zdCBzZW5kVGFwTW92ZSA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3RhcG1vdmUnKSk7XG5leHBvcnQgY29uc3Qgc2VuZFRhcEVuZCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3RhcGVuZCcpKTtcbmV4cG9ydCBjb25zdCBzZW5kVGFwQ2FuY2VsID0gaGcuQmFzZUV2ZW50KHBhcnRpYWwoc2VuZEV2ZW50LCAndGFwY2FuY2VsJykpO1xuZXhwb3J0IGNvbnN0IHNlbmRUYXAgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICd0YXAnKSk7XG5leHBvcnQgY29uc3Qgc2VuZExvbmdUYXAgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdsb25ndGFwJykpO1xuZXhwb3J0IGNvbnN0IHNlbmREb3VibGVUYXAgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdkb3VibGV0YXAnKSk7XG5leHBvcnQgY29uc3Qgc2VuZFN3aXBlVXAgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdzd2lwZXVwJykpO1xuZXhwb3J0IGNvbnN0IHNlbmRTd2lwZVJpZ2h0ID0gaGcuQmFzZUV2ZW50KHBhcnRpYWwoc2VuZEV2ZW50LCAnc3dpcGVyaWdodCcpKTtcbmV4cG9ydCBjb25zdCBzZW5kU3dpcGVEb3duID0gaGcuQmFzZUV2ZW50KHBhcnRpYWwoc2VuZEV2ZW50LCAnc3dpcGVkb3duJykpO1xuZXhwb3J0IGNvbnN0IHNlbmRTd2lwZUxlZnQgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdzd2lwZWxlZnQnKSk7XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBzZW5kRXZlbnQodHlwZSwgZXYsIF9icm9hZGNhc3QpIHtcbiAgaWYgKH5QUkVWRU5UX0RFRlVBTFRfRVZFTlRTLmluZGV4T2YodHlwZSkpIHtcbiAgICBpZiAoZXYuX3Jhd0V2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldi5fcmF3RXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVHZXN0dXJlLmNhbGwodGhpcywgZXYsIGJyb2FkY2FzdCk7XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0KGRhdGEpIHtcbiAgICBpZiAoZGF0YS50eXBlID09PSB0eXBlKSB7XG4gICAgICBfYnJvYWRjYXN0KGRhdGEpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9zcmMvbWFwJztcbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgX21lbW9pemUgZnJvbSAnbWVtb2l6ZWUnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICdyYW1kYS9zcmMvdmFsdWVzJztcbmltcG9ydCBwaWNrIGZyb20gJ3JhbWRhL3NyYy9waWNrJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCBDZWxsIGZyb20gJy4uLy4uL2NlbGwnO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZWxscygpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG4vLyBUT0RPOiBDaGVjayBpZiBuZWVkIGEgYGtleWAgcHJvcFxuY29uc3QgY2VsbFByb3BzID0gbWVtb2l6ZSgod2lkdGgsIG1hcmdpbiwgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQpID0+IHtcbiAgcmV0dXJuIHsgd2lkdGgsIG1hcmdpbiwgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQgfTtcbn0pO1xuXG5DZWxscy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoeyBjb2x1bW5zLCBtYXJnaW4gPSAwLCBjZWxscywgYm90c0J5SW5kZXgsIGNoZWNrUmVhZHlTdGF0ZSwgaXNTdGFydGVkIH0pIHtcbiAgY29uc3QgY2VsbFdpZHRoID0gMTAwIC8gY29sdW1ucyAtIDIgKiBtYXJnaW47IC8vIHBlcmNlbnRcblxuICBjb25zdCByZW5kZXJDZWxsID0gY2VsbCA9PiBoZy5wYXJ0aWFsKFxuICAgIENlbGwucmVuZGVyLFxuICAgIGNlbGwsXG4gICAgY2VsbFByb3BzKGNlbGxXaWR0aCwgbWFyZ2luLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCksXG4gICAgZ2V0Qm90SW5kaWNhdG9yc09mQ2VsbChib3RzQnlJbmRleCwgY2VsbC5pbmRleClcbiAgKTtcbiAgY29uc3QgcmVuZGVyQ2VsbHMgPSBtYXAocmVuZGVyQ2VsbCk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJy5hbWF6ZS1HcmlkLWNlbGxzLnUtY2YnLFxuICAgIHsgc3R5bGU6IHsgcGFkZGluZzogYCR7bWFyZ2luIC8gMn0lYCB9IH0sXG4gICAgcmVuZGVyQ2VsbHModmFsdWVzKGNlbGxzKSlcbiAgKTtcbn07XG5cbi8qKlxuICpcbiAqL1xuXG5jb25zdCBleHRyYWN0Qm90SWRlbnRpdHkgPSBwaWNrKFsnaWQnLCAnY29sb3InXSk7XG5jb25zdCBleHRyYWN0Qm90SW5kaWNhdG9ycyA9IG1lbW9pemUoYm90c09uQ2VsbCA9PiB7XG4gIHJldHVybiBtYXAoZXh0cmFjdEJvdElkZW50aXR5LCBib3RzT25DZWxsKTtcbn0pO1xuLy8gV2UgbmVlZCB0aGUgc2FtZSBhcnJheSByZWZlcmVuY2UgaW4gY2FzZSB0aGVyZSBhcmVcbi8vIG5vIGJvdCBpbmRpY2F0b3JzIG9uIGEgY2VsbCwgaW4gb3JkZXIgdG8gcmVuZGVyIG9ubHlcbi8vIHRoZSBcImNoYW5nZWRcIiBjZWxscyB2aWEgYGhnLnBhcnRpYWwoKWBcbmNvbnN0IGVtcHR5Qm90SW5kaWNhdG9ycyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRCb3RJbmRpY2F0b3JzT2ZDZWxsKGJvdHNCeUluZGV4LCBpbmRleCkge1xuICBjb25zdCBib3RzT25DZWxsID0gYm90c0J5SW5kZXhbaW5kZXhdO1xuICByZXR1cm4gYm90c09uQ2VsbFxuICAgID8gZXh0cmFjdEJvdEluZGljYXRvcnMoYm90c09uQ2VsbClcbiAgICA6IGVtcHR5Qm90SW5kaWNhdG9ycztcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB2YWx1ZXMgZnJvbSAncmFtZGEvc3JjL3ZhbHVlcyc7XG5pbXBvcnQgX21lbW9pemUgZnJvbSAnbWVtb2l6ZWUnO1xuaW1wb3J0IHBhcnRpYWxSaWdodCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbFJpZ2h0JztcbmltcG9ydCBncm91cEJ5IGZyb20gJ3JhbWRhL3NyYy9ncm91cEJ5JztcbmltcG9ydCBwcm9wIGZyb20gJ3JhbWRhL3NyYy9wcm9wJztcbmltcG9ydCBfcHJvcHMgZnJvbSAncmFtZGEvc3JjL3Byb3BzJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCBDZWxscyBmcm9tICcuL2NlbGxzJztcblxuY29uc3QgbWVtb2l6ZSA9IHBhcnRpYWxSaWdodChfbWVtb2l6ZSwgeyBtYXg6IDEgfSk7XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5jb25zdCBjZWxsc1Byb3BzID0gbWVtb2l6ZSgoY29sdW1ucywgbWFyZ2luLCBjZWxscywgYm90cywgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQpID0+IHtcbiAgY29uc3QgYm90c0J5SW5kZXggPSBncm91cEJ5KHByb3AoJ2luZGV4JyksIHZhbHVlcyhib3RzKSk7XG4gIHJldHVybiB7IGNvbHVtbnMsIG1hcmdpbiwgY2VsbHMsIGJvdHNCeUluZGV4LCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCB9O1xufSk7XG5cbkdyaWQucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdzZWN0aW9uLmFtYXplLUdyaWQnLFxuICAgIGgoJy5hbWF6ZS1HcmlkLWJhY2tncm91bmQnLFxuICAgICAgaGcucGFydGlhbChDZWxscy5yZW5kZXIsIGNlbGxzUHJvcHMoXG4gICAgICAgIC4uLl9wcm9wcyhbXG4gICAgICAgICAgJ2NvbHVtbnMnLCAnbWFyZ2luJywgJ2NlbGxzJywgJ2JvdHMnLCAnY2hlY2tSZWFkeVN0YXRlJywgJ2lzU3RhcnRlZCcsXG4gICAgICAgIF0sIHByb3BzKVxuICAgICAgKSkpXG4gICk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vLyBpbXBvcnQgJ2NvcmUtanMvc2hpbS5qcyc7XG4vLyBpbXBvcnQgJ2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvc2hpbS5qcyc7XG5pbXBvcnQgeyBhcHAgfSBmcm9tICdtZXJjdXJ5JztcbmltcG9ydCBUaW1lVHJhdmVsIGZyb20gJ21lcmN1cnkvdGltZS10cmF2ZWwnO1xuaW1wb3J0IHZpcnR1YWxpemUgZnJvbSAndmRvbS12aXJ0dWFsaXplJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbWF6ZShyb290LCBvcHRzID0ge30pIHtcbiAgLy8gR2V0IGluaXRpYWwgYXBwIHN0YXRlXG4gIGNvbnN0IHN0YXRlID0gQXBwKE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHsgdW5kbywgcmVkbyB9KSk7XG5cbiAgY29uc3QgaGlzdG9yeSA9IFRpbWVUcmF2ZWwoc3RhdGUpO1xuICBmdW5jdGlvbiB1bmRvKCkgeyByZXR1cm4gaGlzdG9yeS51bmRvKCk7IH1cbiAgZnVuY3Rpb24gcmVkbygpIHsgcmV0dXJuIGhpc3RvcnkucmVkbygpOyB9XG5cbiAgLy8gQ3JlYXRlIGEgcmVuZGVyaW5nIGN5Y2xlIGZvciB0aGUgYXBwIHZ0cmVlXG4gIGFwcChudWxsLCBzdGF0ZSwgQXBwLnJlbmRlciwge1xuICAgIGluaXRpYWxUcmVlOiB2aXJ0dWFsaXplKHJvb3QpLFxuICAgIHRhcmdldDogcm9vdCxcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlciB0aGUgaW5pdGlhbCByZW5kZXJcbiAgc3RhdGUuc2V0KHN0YXRlKCkpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9zcmMvbWFwJztcbmltcG9ydCBwYXJ0aWFsIGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsJztcbmltcG9ydCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbkxvZ28ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjb25zdCByZW5kZXJDaGFyID0gcGFydGlhbChoLCAnc3BhbicpO1xuICBjb25zdCByZW5kZXJDaGFycyA9IG1hcChyZW5kZXJDaGFyKTtcblxuICBjb25zdCB0ZXh0ID0gJ2FtYXplJztcbiAgcmV0dXJuIGgoJ2gzLmFtYXplLUxvZ28nLCByZW5kZXJDaGFycyh0ZXh0LnNwbGl0KCcnKSkpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IER1cmF0aW9uIGZyb20gJ2R1cmF0aW9uLWpzJztcbmltcG9ydCBtYXAgZnJvbSAncmFtZGEvc3JjL21hcCc7XG5pbXBvcnQgYWRkSW5kZXggZnJvbSAncmFtZGEvc3JjL2FkZEluZGV4JztcbmltcG9ydCBwYXJ0aWFsIGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCBTY3JvbGxhYmxlIGZyb20gJy4uL3Njcm9sbGFibGUnO1xuXG5jb25zdCBtYXBJbmRleGVkID0gYWRkSW5kZXgobWFwKTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGdldFJlc3VsdHMocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLndpbm5lcnMubWFwKHdpbm5lciA9PiB7XG4gICAgY29uc3QgYm90ID0gcHJvcHMuYm90c1t3aW5uZXIuaWRdO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogYm90LmlkLFxuICAgICAgY29sb3I6IGJvdC5jb2xvcixcbiAgICAgIHRpbWU6IHdpbm5lci50aW1lLFxuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuUmVzdWx0cy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgY29uc3QgcmVzdWx0cyA9IGdldFJlc3VsdHMocHJvcHMpO1xuXG4gIHJldHVybiBoKFxuICAgICdzZWN0aW9uLmFtYXplLVJlc3VsdHMnLFxuICAgIG5ldyBTY3JvbGxhYmxlKGhnLnBhcnRpYWwocmVuZGVyQ29udGVudCwgcmVzdWx0cyksIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KHJlc3VsdHMpIHtcbiAgcmV0dXJuIGgoJy5hbWF6ZS1SZXN1bHRzLWNvbnRlbnQnLCBbXG4gICAgaCgnaDEnLCAnUmVzdWx0cycpLFxuXG4gICAgaGcucGFydGlhbChyZW5kZXJUYWJsZSwgcmVzdWx0cyksXG4gIF0pO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyVGFibGUocmVzdWx0cykge1xuICByZXR1cm4gaCgndGFibGUuYW1hemUtUmVzdWx0cy10YWJsZScsIFtcbiAgICBoZy5wYXJ0aWFsKHJlbmRlckhlYWRlcnMsIFsnUGxhY2UnLCAnQm90JywgJ1RpbWUnXSksXG5cbiAgICAuLi5tYXBJbmRleGVkKHBhcnRpYWwoaGcucGFydGlhbCwgcmVuZGVyUm93KSwgcmVzdWx0cyksXG4gIF0pO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVycyh0ZXh0cykge1xuICByZXR1cm4gaCgndHInLCBtYXAocmVuZGVySGVhZGVyLCB0ZXh0cykpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKHRleHQpIHtcbiAgcmV0dXJuIGgoJ3RoJywgaCgnc3BhbicsIHRleHQpKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIHJlbmRlclJvdyhyZXN1bHQsIGluZGV4KSB7XG4gIHJldHVybiBoKCd0cicsIFtcbiAgICBoKCd0ZCcsIGAke2luZGV4ICsgMX1gKSxcblxuICAgIGgoJ3RkJywgaGcucGFydGlhbChyZW5kZXJCb3QsIHJlc3VsdCkpLFxuXG4gICAgaCgndGQnLCBgJHtuZXcgRHVyYXRpb24ocmVzdWx0LnRpbWUpLnRvU3RyaW5nKCl9YCksXG4gIF0pO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyQm90KHJlc3VsdCkge1xuICBjb25zdCBjb2xvciA9IGByZ2IoJHtyZXN1bHQuY29sb3Iuam9pbigpfSlgO1xuXG4gIHJldHVybiBoKFxuICAgICcuYW1hemUtUmVzdWx0cy1ib3RXcmFwcGVyJyxcbiAgICBoKCcuYW1hemUtUmVzdWx0cy1ib3QnLCB7XG4gICAgICBzdHlsZTogeyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yIH0sXG4gICAgfSlcbiAgKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHNldEltbWVkaWF0ZSB9IGZyb20gJ3RpbWVycyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgZGlmZiBmcm9tICd2aXJ0dWFsLWRvbS9kaWZmJztcbmltcG9ydCBwYXRjaCBmcm9tICd2aXJ0dWFsLWRvbS9wYXRjaCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICd2aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSVNjcm9sbCBmcm9tICdpc2Nyb2xsL2J1aWxkL2lzY3JvbGwtbGl0ZSc7XG5cbi8qKlxuICogV2lkZ2V0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYWJsZSB7XG4gIHR5cGUgPSAnV2lkZ2V0J1xuXG4gIGNvbnN0cnVjdG9yKHZub2RlLCBwcm9wcyA9IHt9KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNjcm9sbGFibGUpKSB7XG4gICAgICByZXR1cm4gbmV3IFNjcm9sbGFibGUodm5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMudm5vZGUgPSB2bm9kZTtcbiAgICB0aGlzLnByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIHRoaXMuc2Nyb2xsZXIgPSBudWxsO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbWVudCh0aGlzLnZub2RlKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGN4KCdhbWF6ZS1TY3JvbGxhYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuICAgIC8vIFRPRE86IE1ha2UgaXQgYmV0dGVyXG4gICAgaWYgKHRoaXMucHJvcHMuc3R5bGUpIE9iamVjdC5hc3NpZ24od3JhcHBlci5zdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cbiAgICBjb25zdCBzY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbGVyLmNsYXNzTmFtZSA9ICdhbWF6ZS1TY3JvbGxhYmxlLXNjcm9sbGVyJztcblxuICAgIHNjcm9sbGVyLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2Nyb2xsZXIpO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICB9LCB0aGlzLnByb3BzLmlzY3JvbGwgfHwge30pO1xuXG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXIgPSBuZXcgSVNjcm9sbCh3cmFwcGVyLCBvcHRzKTtcbiAgICAgICAgcmFmKCgpID0+IHRoaXMuc2Nyb2xsZXIucmVmcmVzaCgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICB1cGRhdGUocHJldiwgZWxlbSkge1xuICAgIGNvbnN0IHByZXZWbm9kZSA9IHByZXYudm5vZGU7XG4gICAgY29uc3QgY3VyclZub2RlID0gdGhpcy52bm9kZTtcblxuICAgIGNvbnN0IHBhdGNoZXMgPSBkaWZmKHByZXZWbm9kZSwgY3VyclZub2RlKTtcbiAgICBjb25zdCByb290Tm9kZSA9IGVsZW0uY2hpbGROb2Rlc1swXTtcbiAgICBjb25zdCBuZXdOb2RlID0gcGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMpO1xuXG4gICAgaWYgKG5ld05vZGUgIT09IGVsZW0uY2hpbGROb2Rlc1swXSkge1xuICAgICAgZWxlbS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZWxlbS5jaGlsZE5vZGVzWzBdKTtcblxuICAgICAgcmFmKCgpID0+IHRoaXMuc2Nyb2xsZXIucmVmcmVzaCgpKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KC8qZWxlbSovKSB7XG4gICAgdGhpcy5zY3JvbGxlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zY3JvbGxlciA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBCb3RJbmRpY2F0b3JzIGZyb20gJy4uL2JvdC1pbmRpY2F0b3JzJztcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaWxlKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cblRpbGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgaXNBY3RpdmUsIGlzRW50cnksIGlzRXhpdCwgaXNEcmFnSG92ZXJlZCwgYm90SW5kaWNhdG9ycyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29sdW1ucyA9IGJvdEluZGljYXRvcnMubGVuZ3RoID09IDJcbiAgICA/IDJcbiAgICA6IE1hdGguY2VpbChNYXRoLnNxcnQoYm90SW5kaWNhdG9ycy5sZW5ndGgpKTtcblxuICByZXR1cm4gaCgnZGl2Jywge1xuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2FtYXplLVRpbGUnOiB0cnVlLFxuICAgICAgJ2FtYXplLVRpbGUtLWFjdGl2ZSc6IGlzQWN0aXZlLFxuICAgICAgJ2FtYXplLVRpbGUtLWVudHJ5JzogaXNFbnRyeSxcbiAgICAgICdhbWF6ZS1UaWxlLS1leGl0JzogaXNFeGl0LFxuICAgICAgJ2FtYXplLVRpbGUtLWhhc0JvdEluZGljYXRvcnMnOiBib3RJbmRpY2F0b3JzLmxlbmd0aCA+IDAsXG4gICAgICAnYW1hemUtVGlsZS0tZHJhZ0hvdmVyZWQnOiBpc0RyYWdIb3ZlcmVkLFxuICAgIH0pLFxuICAgIHN0eWxlOiBib3RJbmRpY2F0b3JzLmxlbmd0aCA+IDAgPyB7IGN1cnNvcjogJ2RlZmF1bHQnIH0gOiB7fSxcbiAgfSwgaGcucGFydGlhbChCb3RJbmRpY2F0b3JzLnJlbmRlciwgY29sdW1ucywgYm90SW5kaWNhdG9ycykpO1xufVxuIiwiLyoqXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SZ2JDb2xvcihvcHRzID0ge30pIHtcbiAgY29uc3QgdmFsdWUgPSByYW5kb21JbnRGcm9tUmFuZ2U7XG4gIGNvbnN0IHIgPSBvcHRzLnIgfHwgWzAsIDI1NV07XG4gIGNvbnN0IGcgPSBvcHRzLmcgfHwgWzAsIDI1NV07XG4gIGNvbnN0IGIgPSBvcHRzLmIgfHwgWzAsIDI1NV07XG5cbiAgcmV0dXJuIFt2YWx1ZSguLi5yKSwgdmFsdWUoLi4uZyksIHZhbHVlKC4uLmIpXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlblxuICogYG1pbmAgYW5kIGBtYXhgIGluY2x1c2l2ZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50RnJvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxuKF9zdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3Qgc3RyaW5ncyA9IF9zdHJpbmdzLnNsaWNlKCk7XG4gIGxldCBzdHIgPSAnJztcblxuICB3aGlsZSAoc3RyaW5ncy5sZW5ndGggfHwgdmFsdWVzLmxlbmd0aCkge1xuICAgIHN0ciArPSBzdHJpbmdzLnNoaWZ0KCkgfHwgJyc7XG4gICAgc3RyICs9IHZhbHVlcy5zaGlmdCgpIHx8ICcnO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN7Mix9L2dtLCAnICcpO1xufVxuIl19
