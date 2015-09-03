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
    if (!elem) {
        throw new Error(
            'Element does not exist. ' +
            'Mercury cannot be initialized.');
    }

    mercury.Delegator(opts);
    var loop = mercury.main(observ(), render, extend({
        diff: mercury.diff,
        create: mercury.create,
        patch: mercury.patch
    }, opts));

    elem.appendChild(loop.target);

    return observ(loop.update);
}

},{"dom-delegator":137,"geval/multiple":150,"geval/single":151,"main-loop":152,"observ":175,"observ-array":163,"observ-struct":170,"observ-varhash":172,"observ/computed":174,"observ/watch":176,"value-event/base-event":177,"value-event/change":178,"value-event/click":179,"value-event/event":180,"value-event/key":181,"value-event/submit":187,"value-event/value":188,"vdom-thunk":190,"virtual-dom/vdom/create-element":263,"virtual-dom/vdom/patch":266,"virtual-dom/virtual-hyperscript":270,"virtual-dom/vtree/diff":283,"xtend":193}],135:[function(require,module,exports){
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

    var loop = {
        state: initialState,
        target: target,
        update: update
    }
    return loop

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
        loop.state = state
    }

    function redraw() {
        redrawScheduled = false
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


},{"camelize":153,"string-template":154,"xtend/mutable":194}],156:[function(require,module,exports){
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
arguments[4][171][0].apply(exports,arguments)
},{"dup":171}],194:[function(require,module,exports){
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

},{}],195:[function(require,module,exports){
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

},{}],196:[function(require,module,exports){
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

},{"performance-now":197}],197:[function(require,module,exports){
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

},{"_process":68}],198:[function(require,module,exports){
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

},{"./curryN":202,"./internal/_concat":211,"./internal/_curry1":213,"./internal/_slice":224}],199:[function(require,module,exports){
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

},{"./internal/_concat":211,"./internal/_curry2":214}],200:[function(require,module,exports){
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

},{"./internal/_arity":209,"./internal/_curry2":214}],201:[function(require,module,exports){
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

},{"./curryN":202,"./internal/_curry1":213}],202:[function(require,module,exports){
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

},{"./internal/_arity":209,"./internal/_curry1":213,"./internal/_curry2":214,"./internal/_curryN":215}],203:[function(require,module,exports){
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

},{"./internal/_curry2":214}],204:[function(require,module,exports){
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

},{"./internal/_curry2":214,"./internal/_dispatchable":216,"./internal/_filter":217,"./internal/_xfilter":226}],205:[function(require,module,exports){
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

},{"./internal/_curry2":214,"./internal/_dispatchable":216,"./internal/_xfind":227}],206:[function(require,module,exports){
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

},{"./curry":201,"./internal/_curry1":213,"./internal/_slice":224}],207:[function(require,module,exports){
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

},{"./internal/_checkForMethod":210,"./internal/_curry2":214}],208:[function(require,module,exports){
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

},{"./append":199,"./internal/_curry2":214,"./internal/_dispatchable":216,"./internal/_reduce":222,"./internal/_xgroupBy":228}],209:[function(require,module,exports){
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

},{}],210:[function(require,module,exports){
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

},{"./_isArray":219,"./_slice":224}],211:[function(require,module,exports){
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

},{}],212:[function(require,module,exports){
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

},{"./_arity":209,"./_slice":224}],213:[function(require,module,exports){
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

},{}],214:[function(require,module,exports){
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

},{"./_curry1":213}],215:[function(require,module,exports){
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

},{"./_arity":209}],216:[function(require,module,exports){
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

},{"./_isArray":219,"./_isTransformer":220,"./_slice":224}],217:[function(require,module,exports){
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

},{}],218:[function(require,module,exports){
module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

},{}],219:[function(require,module,exports){
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

},{}],220:[function(require,module,exports){
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

},{}],221:[function(require,module,exports){
module.exports = function _map(fn, list) {
  var idx = 0, len = list.length, result = Array(len);
  while (idx < len) {
    result[idx] = fn(list[idx]);
    idx += 1;
  }
  return result;
};

},{}],222:[function(require,module,exports){
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

},{"../bind":200,"../isArrayLike":231,"./_xwrap":230}],223:[function(require,module,exports){
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

},{}],224:[function(require,module,exports){
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

},{}],225:[function(require,module,exports){
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

},{}],226:[function(require,module,exports){
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

},{"./_curry2":214,"./_xfBase":225}],227:[function(require,module,exports){
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

},{"./_curry2":214,"./_reduced":223,"./_xfBase":225}],228:[function(require,module,exports){
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

},{"../append":199,"./_curry2":214,"./_has":218,"./_xfBase":225}],229:[function(require,module,exports){
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

},{"./_curry2":214,"./_xfBase":225}],230:[function(require,module,exports){
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

},{}],231:[function(require,module,exports){
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

},{"./internal/_curry1":213,"./internal/_isArray":219}],232:[function(require,module,exports){
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

},{"./internal/_curry1":213,"./internal/_has":218}],233:[function(require,module,exports){
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

},{"./internal/_curry2":214,"./internal/_dispatchable":216,"./internal/_map":221,"./internal/_xmap":229}],234:[function(require,module,exports){
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

},{"./curry":201,"./internal/_concat":211,"./internal/_createPartialApplicator":212}],235:[function(require,module,exports){
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

},{"./curry":201,"./flip":206,"./internal/_concat":211,"./internal/_createPartialApplicator":212}],236:[function(require,module,exports){
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

},{"./internal/_curry2":214}],237:[function(require,module,exports){
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

},{"./internal/_curry2":214}],238:[function(require,module,exports){
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

},{"./internal/_curry2":214}],239:[function(require,module,exports){
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

},{"./internal/_curry2":214}],240:[function(require,module,exports){
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

},{"./internal/_curry2":214}],241:[function(require,module,exports){
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

},{"./internal/_curry1":213,"./keys":232}],242:[function(require,module,exports){
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

},{}],243:[function(require,module,exports){
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

},{"./rng":242}],244:[function(require,module,exports){
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

},{"virtual-dom/vnode/vnode":250,"virtual-dom/vnode/vtext":251}],245:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],246:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],247:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":249}],248:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],249:[function(require,module,exports){
module.exports = "2"

},{}],250:[function(require,module,exports){
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

},{"./is-thunk":245,"./is-vhook":246,"./is-vnode":247,"./is-widget":248,"./version":249}],251:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":249}],252:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":263}],253:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":283}],254:[function(require,module,exports){
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

},{}],255:[function(require,module,exports){
arguments[4][139][0].apply(exports,arguments)
},{"dup":139,"individual/one-version":257}],256:[function(require,module,exports){
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

},{}],257:[function(require,module,exports){
arguments[4][141][0].apply(exports,arguments)
},{"./index.js":256,"dup":141}],258:[function(require,module,exports){
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

},{"min-document":67}],259:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],260:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],261:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":266}],262:[function(require,module,exports){
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

},{"../vnode/is-vhook.js":274,"is-object":259}],263:[function(require,module,exports){
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

},{"../vnode/handle-thunk.js":272,"../vnode/is-vnode.js":275,"../vnode/is-vtext.js":276,"../vnode/is-widget.js":277,"./apply-properties":262,"global/document":258}],264:[function(require,module,exports){
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

},{}],265:[function(require,module,exports){
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

},{"../vnode/is-widget.js":277,"../vnode/vpatch.js":280,"./apply-properties":262,"./update-widget":267}],266:[function(require,module,exports){
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

},{"./create-element":263,"./dom-index":264,"./patch-op":265,"global/document":258,"x-is-array":260}],267:[function(require,module,exports){
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

},{"../vnode/is-widget.js":277}],268:[function(require,module,exports){
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

},{"ev-store":255}],269:[function(require,module,exports){
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

},{}],270:[function(require,module,exports){
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

},{"../vnode/is-thunk":273,"../vnode/is-vhook":274,"../vnode/is-vnode":275,"../vnode/is-vtext":276,"../vnode/is-widget":277,"../vnode/vnode.js":279,"../vnode/vtext.js":281,"./hooks/ev-hook.js":268,"./hooks/soft-set-hook.js":269,"./parse-tag.js":271,"x-is-array":260}],271:[function(require,module,exports){
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

},{"browser-split":254}],272:[function(require,module,exports){
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

},{"./is-thunk":273,"./is-vnode":275,"./is-vtext":276,"./is-widget":277}],273:[function(require,module,exports){
arguments[4][245][0].apply(exports,arguments)
},{"dup":245}],274:[function(require,module,exports){
arguments[4][246][0].apply(exports,arguments)
},{"dup":246}],275:[function(require,module,exports){
arguments[4][247][0].apply(exports,arguments)
},{"./version":278,"dup":247}],276:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":278}],277:[function(require,module,exports){
arguments[4][248][0].apply(exports,arguments)
},{"dup":248}],278:[function(require,module,exports){
arguments[4][249][0].apply(exports,arguments)
},{"dup":249}],279:[function(require,module,exports){
arguments[4][250][0].apply(exports,arguments)
},{"./is-thunk":273,"./is-vhook":274,"./is-vnode":275,"./is-widget":277,"./version":278,"dup":250}],280:[function(require,module,exports){
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

},{"./version":278}],281:[function(require,module,exports){
arguments[4][251][0].apply(exports,arguments)
},{"./version":278,"dup":251}],282:[function(require,module,exports){
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

},{"../vnode/is-vhook":274,"is-object":259}],283:[function(require,module,exports){
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

},{"../vnode/handle-thunk":272,"../vnode/is-thunk":273,"../vnode/is-vnode":275,"../vnode/is-vtext":276,"../vnode/is-widget":277,"../vnode/vpatch":280,"./diff-props":282,"x-is-array":260}],284:[function(require,module,exports){
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

},{"../board":285,"../bot":289,"../cell":291,"../drag-events/setup":293,"../util":305,"babel-runtime/core-js/number/is-integer":2,"babel-runtime/core-js/number/parse-int":3,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/tagged-template-literal":13,"mainloop.js":73,"memoizee":79,"mercury":134,"raf":196,"ramda/src/defaultTo":203,"ramda/src/filter":204,"ramda/src/find":205,"ramda/src/forEach":207,"ramda/src/keys":232,"ramda/src/partial":234,"ramda/src/partialRight":235,"ramda/src/times":240,"ramda/src/values":241,"timers":69}],285:[function(require,module,exports){
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

},{"../controls":292,"../grid":299,"../results":302,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/partialRight":235,"ramda/src/props":239}],286:[function(require,module,exports){
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

},{"../drag-events/source":294,"../gestures":297,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"mercury":134}],287:[function(require,module,exports){
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

},{"./indicator":288,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/addIndex":198,"ramda/src/map":233,"ramda/src/partial":234}],288:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/partialRight":235}],289:[function(require,module,exports){
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

},{"../util":305,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/filter":204,"ramda/src/keys":232,"ramda/src/map":233,"ramda/src/partial":234,"ramda/src/pickBy":237,"uuid":243}],290:[function(require,module,exports){
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

},{"../gestures":297,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/extends":10,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/object-without-properties":12,"classnames":70,"mercury":134}],291:[function(require,module,exports){
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

},{"../drag-events/target":295,"../gestures":297,"../tile":304,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/partialRight":235,"ramda/src/props":239}],292:[function(require,module,exports){
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

},{"../bot-handle":286,"../button":290,"../gestures":297,"../logo":301,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/partialRight":235}],293:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":11,"mercury":134}],294:[function(require,module,exports){
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

},{"./setup":293,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],295:[function(require,module,exports){
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

},{"./setup":293,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],296:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134}],297:[function(require,module,exports){
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

},{"./events":296,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/partial":234}],298:[function(require,module,exports){
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

},{"../../cell":291,"babel-runtime/helpers/interop-require-default":11,"memoizee":79,"mercury":134,"ramda/src/map":233,"ramda/src/partialRight":235,"ramda/src/pick":236,"ramda/src/values":241}],299:[function(require,module,exports){
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

},{"./cells":298,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"memoizee":79,"mercury":134,"ramda/src/groupBy":208,"ramda/src/partialRight":235,"ramda/src/prop":238,"ramda/src/props":239,"ramda/src/values":241}],300:[function(require,module,exports){
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
  (0, _mercury.app)(document.body, state, _app2['default'].render, {
    initialTree: (0, _vdomVirtualize2['default'])(root),
    target: root
  });

  // Trigger the initial render
  state.set(state());
}

module.exports = exports['default'];

},{"./app":284,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":11,"mercury":134,"mercury/time-travel":195,"vdom-virtualize":244}],301:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":11,"mercury":134,"ramda/src/map":233,"ramda/src/partial":234}],302:[function(require,module,exports){
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

},{"../scrollable":303,"babel-runtime/helpers/interop-require-default":11,"babel-runtime/helpers/to-consumable-array":14,"duration-js":71,"mercury":134,"ramda/src/addIndex":198,"ramda/src/map":233,"ramda/src/partial":234}],303:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"iscroll/build/iscroll-lite":72,"raf":196,"timers":69,"virtual-dom/create-element":252,"virtual-dom/diff":253,"virtual-dom/patch":261}],304:[function(require,module,exports){
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

},{"../bot-indicators":287,"babel-runtime/helpers/interop-require-default":11,"classnames":70,"mercury":134}],305:[function(require,module,exports){
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

},{"babel-runtime/helpers/to-consumable-array":14}]},{},[300])(300)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvcGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RhZ2dlZC10ZW1wbGF0ZS1saXRlcmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90by1jb25zdW1hYmxlLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvaXMtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItYnVnZ3kuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3VwcG9ydC1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudGFnLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZHVyYXRpb24tanMvZHVyYXRpb24uanMiLCJub2RlX21vZHVsZXMvaXNjcm9sbC9idWlsZC9pc2Nyb2xsLWxpdGUuanMiLCJub2RlX21vZHVsZXMvbWFpbmxvb3AuanMvYnVpbGQvbWFpbmxvb3AubWluLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2V4dC9hc3luYy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvZGlzcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvbWF4LWFnZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9leHQvbWF4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2V4dC9yZWYtY291bnRlci5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvY29uZmlndXJlLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvcmVnaXN0ZXJlZC1leHRlbnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL2xpYi9yZXNvbHZlLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9saWIvcmVzb2x2ZS1ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbGliL3Jlc29sdmUtcmVzb2x2ZS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS8jL2UtaW5kZXgtb2YuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvYXJyYXkvZnJvbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2FycmF5L2Zyb20vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS90by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9lcnJvci9jdXN0b20uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vX2RlZmluZS1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vaXMtYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL2lzLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbWF0aC9zaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L21hdGgvc2lnbi9pcy1pbXBsZW1lbnRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1pbXBsZW1lbnRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvdmFsaWRhdGUtc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvX2l0ZXJhdGUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvZm9yLWVhY2guanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2lzLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL3NoaW0uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L21peGluLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2lzLWltcGxlbWVudGVkLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nL2lzLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub2RlX21vZHVsZXMvbHJ1LXF1ZXVlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL25vZGVfbW9kdWxlcy9uZXh0LXRpY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL3RpbWVycy1leHQvbWF4LXRpbWVvdXQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9kZV9tb2R1bGVzL3RpbWVycy1leHQvdmFsaWQtdGltZW91dC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQtMS5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQtZml4ZWQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9ybWFsaXplcnMvZ2V0LXByaW1pdGl2ZS1maXhlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZW1vaXplZS9ub3JtYWxpemVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvbWVtb2l6ZWUvbm9ybWFsaXplcnMvcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL21lbW9pemVlL3BsYWluLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9hZGQtZXZlbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9kb20tZGVsZWdhdG9yLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvY3VpZC9kaXN0L2Jyb3dzZXItY3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9vbmUtdmVyc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3Ivbm9kZV9tb2R1bGVzL3dlYWttYXAtc2hpbS9jcmVhdGUtc3RvcmUuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvd2Vha21hcC1zaGltL2hpZGRlbi1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL3Byb3h5LWV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3IvcmVtb3ZlLWV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL211bHRpcGxlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL2dldmFsL3NpbmdsZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9tYWluLWxvb3AvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9lcnJvci9ub2RlX21vZHVsZXMvY2FtZWxpemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9lcnJvci9ub2RlX21vZHVsZXMvc3RyaW5nLXRlbXBsYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL21haW4tbG9vcC9ub2RlX21vZHVsZXMvZXJyb3IvdHlwZWQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9yYWYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvbWFpbi1sb29wL25vZGVfbW9kdWxlcy9yYWYvbm9kZV9tb2R1bGVzL3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hZGQtbGlzdGVuZXIuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2LWFycmF5L2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1yZXZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9hcnJheS1zb3J0LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvbGliL3NldC1ub24tZW51bWVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvbm9kZV9tb2R1bGVzL2FkaWZmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS9wdXQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2LWFycmF5L3NldC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtYXJyYXkvc3BsaWNlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1hcnJheS90cmFuc2FjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYtc3RydWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi1zdHJ1Y3Qvbm9kZV9tb2R1bGVzL3h0ZW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi12YXJoYXNoL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL29ic2Vydi9jb21wdXRlZC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy9vYnNlcnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvb2JzZXJ2L3dhdGNoLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2Jhc2UtZXZlbnQuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvY2hhbmdlLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L2tleS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMvZG9tLXdhbGsvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS1zZXQvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLXNldC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC9ub2RlX21vZHVsZXMveHRlbmQvaGFzLWtleXMuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMvdmFsdWUtZXZlbnQvbm9kZV9tb2R1bGVzL3h0ZW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3ZhbHVlLWV2ZW50L3N1Ym1pdC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92YWx1ZS1ldmVudC92YWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL2ltbXV0YWJsZS10aHVuay5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21lcmN1cnkvbm9kZV9tb2R1bGVzL3Zkb20tdGh1bmsvcGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L25vZGVfbW9kdWxlcy92ZG9tLXRodW5rL3NoYWxsb3ctZXEuanMiLCJub2RlX21vZHVsZXMvbWVyY3VyeS9ub2RlX21vZHVsZXMveHRlbmQvbXV0YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9tZXJjdXJ5L3RpbWUtdHJhdmVsLmpzIiwibm9kZV9tb2R1bGVzL3JhZi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWYvbm9kZV9tb2R1bGVzL3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hZGRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXBwZW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jdXJyeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY3VycnlOLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kZWZhdWx0VG8uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmluZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmxpcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZ3JvdXBCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2FyaXR5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jb25jYXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5MS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Mi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Ti5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc1RyYW5zZm9ybWVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fbWFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fcmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fcmVkdWNlZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3NsaWNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZCYXNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGdyb3VwQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194bWFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feHdyYXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lzQXJyYXlMaWtlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tYXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhcnRpYWwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhcnRpYWxSaWdodC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGljay5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGlja0J5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdGltZXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdXVpZC5qcyIsIm5vZGVfbW9kdWxlcy92ZG9tLXZpcnR1YWxpemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmRvbS12aXJ0dWFsaXplL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy10aHVuay5qcyIsIm5vZGVfbW9kdWxlcy92ZG9tLXZpcnR1YWxpemUvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL2lzLXZob29rLmpzIiwibm9kZV9tb2R1bGVzL3Zkb20tdmlydHVhbGl6ZS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdm5vZGUuanMiLCJub2RlX21vZHVsZXMvdmRvbS12aXJ0dWFsaXplL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy13aWRnZXQuanMiLCJub2RlX21vZHVsZXMvdmRvbS12aXJ0dWFsaXplL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92ZXJzaW9uLmpzIiwibm9kZV9tb2R1bGVzL3Zkb20tdmlydHVhbGl6ZS9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdm5vZGUuanMiLCJub2RlX21vZHVsZXMvdmRvbS12aXJ0dWFsaXplL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92dGV4dC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9icm93c2VyLXNwbGl0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9ldi1zdG9yZS9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9ub2RlX21vZHVsZXMvZ2xvYmFsL2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9pcy1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL3gtaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vcGF0Y2guanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9hcHBseS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vY3JlYXRlLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9kb20taW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9wYXRjaC1vcC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92ZG9tL3BhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vdXBkYXRlLXdpZGdldC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92aXJ0dWFsLWh5cGVyc2NyaXB0L2hvb2tzL2V2LWhvb2suanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmlydHVhbC1oeXBlcnNjcmlwdC9ob29rcy9zb2Z0LXNldC1ob29rLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3ZpcnR1YWwtaHlwZXJzY3JpcHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmlydHVhbC1oeXBlcnNjcmlwdC9wYXJzZS10YWcuanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaGFuZGxlLXRodW5rLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL2lzLXZ0ZXh0LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL3ZwYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92dHJlZS9kaWZmLXByb3BzLmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Z0cmVlL2RpZmYuanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9hcHAvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9ib2FyZC9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2JvdC1oYW5kbGUvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9ib3QtaW5kaWNhdG9ycy9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2JvdC1pbmRpY2F0b3JzL2luZGljYXRvci9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2JvdC9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2J1dHRvbi9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2NlbGwvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9jb250cm9scy9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2RyYWctZXZlbnRzL3NldHVwLmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZHJhZy1ldmVudHMvc291cmNlLmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZHJhZy1ldmVudHMvdGFyZ2V0LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZ2VzdHVyZXMvZXZlbnRzLmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZ2VzdHVyZXMvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9ncmlkL2NlbGxzL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvZ3JpZC9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvbG9nby9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL3Jlc3VsdHMvaW5kZXguanMiLCIvaG9tZS9tcGFsL3Byb2plY3RzL2FtYXplL3NyYy9zY3JvbGxhYmxlL2luZGV4LmpzIiwiL2hvbWUvbXBhbC9wcm9qZWN0cy9hbWF6ZS9zcmMvdGlsZS9pbmRleC5qcyIsIi9ob21lL21wYWwvcHJvamVjdHMvYW1hemUvc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy82QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QU07OztBQUlwQyxTQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUN0QyxPQUFHLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3QixPQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztHQUM3Qjs7QUFFRCxTQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL251bWJlci9pcy1pbnRlZ2VyXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL251bWJlci9wYXJzZS1pbnRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRmcmVlemUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdHJpbmdzLCByYXcpIHtcbiAgcmV0dXJuIF9PYmplY3QkZnJlZXplKF9PYmplY3QkZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogX09iamVjdCRmcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9BcnJheSRmcm9tID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9BcnJheSRmcm9tKGFycik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk51bWJlci5pc0ludGVnZXI7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludCcpO1xubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUludDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKFQsIEQpe1xuICByZXR1cm4gJC5zZXREZXNjcyhULCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZnJlZXplOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaSA9IDE7XG4gIHdoaWxlKGwgPiBpKXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaSsrXSlcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfSByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICB9O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIGN0eCA9IGZ1bmN0aW9uKGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xudmFyICRkZWYgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGRlZjsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSAkLmlzRW51bVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5zdXBwb3J0LWRlc2MnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCIvLyBpbmRleGVkIG9iamVjdCwgZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSAwIGluIE9iamVjdCgneicpID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIChJdGVyYXRvcnMuQXJyYXkgfHwgQXJyYXkucHJvdG90eXBlW0lURVJBVE9SXSkgPT09IGl0O1xufTsiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGZsb29yICAgID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59OyIsIi8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59OyIsIi8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbm1vZHVsZS5leHBvcnRzID0gJ2tleXMnIGluIFtdICYmICEoJ25leHQnIGluIFtdLmtleXMoKSk7IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi8kJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJykoMSxuZXh0KX0pO1xuICByZXF1aXJlKCcuLyQudGFnJykoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlZGVmICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmJylcbiAgLCBoaWRlICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgRkZfSVRFUkFUT1IgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgID0gJ3ZhbHVlcyc7XG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRSl7XG4gIHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIHByb3RvICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGNyZWF0ZU1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKF9uYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvKF9kZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgcmVxdWlyZSgnLi8kLnRhZycpKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIFNZTUJPTF9JVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCFMSUJSQVJZIHx8IEZPUkNFKWhpZGUocHJvdG8sIFNZTUJPTF9JVEVSQVRPUiwgX2RlZmF1bHQpO1xuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IF9kZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAga2V5czogICAgSVNfU0VUICAgICAgICAgICAgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZChLRVlTKSxcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoVkFMVUVTKSxcbiAgICAgIGVudHJpZXM6IERFRkFVTFQgIT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0UpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkcmVkZWYocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGRlZigkZGVmLlAgKyAkZGVmLkYgKiByZXF1aXJlKCcuLyQuaXRlci1idWdneScpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxufTsiLCJ2YXIgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HICAgID0gZmFsc2U7XG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bU1lNQk9MX0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIGlmKCFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbU1lNQk9MX0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHNhZmUgPSB0cnVlOyB9O1xuICAgIGFycltTWU1CT0xfSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgICAsIGZuICAgPSAocmVxdWlyZSgnLi8kLmNvcmUnKS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaGlkZScpOyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbFxuICAgICAgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGhhcyAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBoaWRlID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIFRBRyAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpaGlkZShpdCwgVEFHLCB0YWcpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHJlcXVpcmUoJy4vJC51aWQnKSkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl0gfHwgaXRbJ0BAaXRlcmF0b3InXSB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCAkZGVmICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiRkZWYoJGRlZi5TICsgJGRlZi5GICogIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBtYXBmbiAgID0gYXJndW1lbnRzWzFdXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCkpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7IiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcblxuJGRlZigkZGVmLlMsICdOdW1iZXInLCB7aXNJbnRlZ2VyOiByZXF1aXJlKCcuLyQuaXMtaW50ZWdlcicpfSk7IiwiLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XG5cbiRkZWYoJGRlZi5TLCAnTnVtYmVyJywge3BhcnNlSW50OiBwYXJzZUludH0pOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLmFzc2lnbicpfSk7IiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShpdCkgOiBpdDtcbiAgfTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLG51bGwsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsInZhciBEdXJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbWlsbGlzZWNvbmQgPSAxLFxuICAgICAgICBzZWNvbmQgICAgICA9IDEwMDAgKiBtaWxsaXNlY29uZCxcbiAgICAgICAgbWludXRlICAgICAgPSA2MCAgICogc2Vjb25kLFxuICAgICAgICBob3VyICAgICAgICA9IDYwICAgKiBtaW51dGUsXG4gICAgICAgIGRheSAgICAgICAgID0gMjQgICAqIGhvdXIsXG4gICAgICAgIHdlZWsgICAgICAgID0gNyAgICAqIGRheTtcblxuICAgIHZhciB1bml0TWFwID0ge1xuICAgICAgICBcIm1zXCIgOiBtaWxsaXNlY29uZCxcbiAgICAgICAgXCJzXCIgIDogc2Vjb25kLFxuICAgICAgICBcIm1cIiAgOiBtaW51dGUsXG4gICAgICAgIFwiaFwiICA6IGhvdXIsXG4gICAgICAgIFwiZFwiICA6IGRheSxcbiAgICAgICAgXCJ3XCIgIDogd2Vla1xuICAgIH07XG5cbiAgICB2YXIgRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRHVyYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBEdXJhdGlvbi5wYXJzZSh2YWx1ZSkudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZHVyYXRpb246IFwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIER1cmF0aW9uLm1pbGxpc2Vjb25kID0gbmV3IER1cmF0aW9uKG1pbGxpc2Vjb25kKTtcbiAgICBEdXJhdGlvbi5zZWNvbmQgICAgICA9IG5ldyBEdXJhdGlvbihzZWNvbmQpO1xuICAgIER1cmF0aW9uLm1pbnV0ZSAgICAgID0gbmV3IER1cmF0aW9uKG1pbnV0ZSk7XG4gICAgRHVyYXRpb24uaG91ciAgICAgICAgPSBuZXcgRHVyYXRpb24oaG91cik7XG4gICAgRHVyYXRpb24uZGF5ICAgICAgICAgPSBuZXcgRHVyYXRpb24oZGF5KTtcbiAgICBEdXJhdGlvbi53ZWVrICAgICAgICA9IG5ldyBEdXJhdGlvbih3ZWVrKTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS5uYW5vc2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbGxpc2Vjb25kcyAqIDEwMDAwMDA7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS5taWNyb3NlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taWxsaXNlY29uZHMgKiAxMDAwO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUubWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWlsbGlzZWNvbmRzO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wcm90b3R5cGUuc2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fbWlsbGlzZWNvbmRzIC8gc2Vjb25kKTtcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucHJvdG90eXBlLm1pbnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuX21pbGxpc2Vjb25kcyAvIG1pbnV0ZSk7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS5ob3VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fbWlsbGlzZWNvbmRzIC8gaG91cik7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS5kYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fbWlsbGlzZWNvbmRzIC8gZGF5KTtcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucHJvdG90eXBlLndlZWtzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5fbWlsbGlzZWNvbmRzIC8gd2Vlayk7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHIgICAgICAgICAgPSBcIlwiLFxuICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuX21pbGxpc2Vjb25kcyksXG4gICAgICAgICAgc2lnbiAgICAgICAgID0gdGhpcy5fbWlsbGlzZWNvbmRzIDwgMCA/IFwiLVwiIDogXCJcIjtcblxuICAgICAgLy8gbm8gdW5pdHMgZm9yIDAgZHVyYXRpb25cbiAgICAgIGlmIChtaWxsaXNlY29uZHMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXlzXG4gICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gZGF5KTtcbiAgICAgIGlmIChkYXlzICE9PSAwKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyAtPSBkYXkgKiBkYXlzO1xuICAgICAgICBzdHIgKz0gZGF5cy50b1N0cmluZygpICsgXCJkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIGhvdXJzXG4gICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIGhvdXIpO1xuICAgICAgaWYgKGhvdXJzICE9PSAwKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyAtPSBob3VyICogaG91cnM7XG4gICAgICAgIHN0ciArPSBob3Vycy50b1N0cmluZygpICsgXCJoXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIG1pbnV0ZXNcbiAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyBtaW51dGUpO1xuICAgICAgaWYgKG1pbnV0ZXMgIT09IDApIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzIC09IG1pbnV0ZSAqIG1pbnV0ZXM7XG4gICAgICAgIHN0ciArPSBtaW51dGVzLnRvU3RyaW5nKCkgKyBcIm1cIjtcbiAgICAgIH1cblxuICAgICAgLy8gc2Vjb25kc1xuICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIHNlY29uZCk7XG4gICAgICBpZiAoc2Vjb25kcyAhPT0gMCkge1xuICAgICAgICBtaWxsaXNlY29uZHMgLT0gc2Vjb25kICogc2Vjb25kcztcbiAgICAgICAgc3RyICs9IHNlY29uZHMudG9TdHJpbmcoKSArIFwic1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBtaWxsaXNlY29uZHNcbiAgICAgIGlmIChtaWxsaXNlY29uZHMgIT09IDApIHtcbiAgICAgICAgc3RyICs9IG1pbGxpc2Vjb25kcy50b1N0cmluZygpICsgXCJtc1wiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2lnbiArIHN0cjtcbiAgICB9O1xuXG4gICAgRHVyYXRpb24ucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWlsbGlzZWNvbmRzO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5wYXJzZSA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gXCIwXCIgfHwgZHVyYXRpb24gPT09IFwiKzBcIiB8fCBkdXJhdGlvbiA9PT0gXCItMFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbigwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWdleCA9IC8oW1xcLVxcK1xcZFxcLl0rKShbYS16XSspL2csXG4gICAgICAgICAgICB0b3RhbCA9IDAsXG4gICAgICAgICAgICBjb3VudCA9IDAsXG4gICAgICAgICAgICBzaWduICA9IGR1cmF0aW9uWzBdID09PSAnLScgPyAtMSA6IDEsXG4gICAgICAgICAgICB1bml0LCB2YWx1ZSwgbWF0Y2g7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyhkdXJhdGlvbikpIHtcblxuICAgICAgICAgICAgdW5pdCAgPSBtYXRjaFsyXTtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFsxXSkpO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGR1cmF0aW9uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVuaXRNYXBbdW5pdF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCB1bml0OiBcIiArIHVuaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3RhbCArPSB2YWx1ZSAqIHVuaXRNYXBbdW5pdF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGR1cmF0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih0b3RhbCAqIHNpZ24pO1xuICAgIH07XG5cbiAgICBEdXJhdGlvbi5mcm9tTWljcm9zZWNvbmRzID0gZnVuY3Rpb24gKHVzKSB7XG4gICAgICAgIHZhciBtcyA9IE1hdGguZmxvb3IodXMgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbihtcyk7XG4gICAgfTtcblxuICAgIER1cmF0aW9uLmZyb21OYW5vc2Vjb25kcyA9IGZ1bmN0aW9uIChucykge1xuICAgICAgICB2YXIgbXMgPSBNYXRoLmZsb29yKG5zIC8gMTAwMDAwMCk7XG4gICAgICAgIHJldHVybiBuZXcgRHVyYXRpb24obXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRHVyYXRpb247XG5cbn0pLmNhbGwodGhpcyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICBtb2R1bGUuZXhwb3J0cyA9IER1cmF0aW9uO1xufVxuIiwiLyohIGlTY3JvbGwgdjUuMS4zIH4gKGMpIDIwMDgtMjAxNCBNYXR0ZW8gU3BpbmVsbGkgfiBodHRwOi8vY3ViaXEub3JnL2xpY2Vuc2UgKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgTWF0aCkge1xudmFyIHJBRiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdHx8XG5cdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdFx0fHxcblx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdFx0fHxcblx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdGZ1bmN0aW9uIChjYWxsYmFjaykgeyB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTsgfTtcblxudmFyIHV0aWxzID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIG1lID0ge307XG5cblx0dmFyIF9lbGVtZW50U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblx0dmFyIF92ZW5kb3IgPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciB2ZW5kb3JzID0gWyd0JywgJ3dlYmtpdFQnLCAnTW96VCcsICdtc1QnLCAnT1QnXSxcblx0XHRcdHRyYW5zZm9ybSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHZlbmRvcnMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0dHJhbnNmb3JtID0gdmVuZG9yc1tpXSArICdyYW5zZm9ybSc7XG5cdFx0XHRpZiAoIHRyYW5zZm9ybSBpbiBfZWxlbWVudFN0eWxlICkgcmV0dXJuIHZlbmRvcnNbaV0uc3Vic3RyKDAsIHZlbmRvcnNbaV0ubGVuZ3RoLTEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSkoKTtcblxuXHRmdW5jdGlvbiBfcHJlZml4U3R5bGUgKHN0eWxlKSB7XG5cdFx0aWYgKCBfdmVuZG9yID09PSBmYWxzZSApIHJldHVybiBmYWxzZTtcblx0XHRpZiAoIF92ZW5kb3IgPT09ICcnICkgcmV0dXJuIHN0eWxlO1xuXHRcdHJldHVybiBfdmVuZG9yICsgc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zdWJzdHIoMSk7XG5cdH1cblxuXHRtZS5nZXRUaW1lID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24gZ2V0VGltZSAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcblxuXHRtZS5leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0LCBvYmopIHtcblx0XHRmb3IgKCB2YXIgaSBpbiBvYmogKSB7XG5cdFx0XHR0YXJnZXRbaV0gPSBvYmpbaV07XG5cdFx0fVxuXHR9O1xuXG5cdG1lLmFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG5cdH07XG5cblx0bWUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XG5cdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgISFjYXB0dXJlKTtcblx0fTtcblxuXHRtZS5wcmVmaXhQb2ludGVyRXZlbnQgPSBmdW5jdGlvbiAocG9pbnRlckV2ZW50KSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5NU1BvaW50ZXJFdmVudCA/IFxuXHRcdFx0J01TUG9pbnRlcicgKyBwb2ludGVyRXZlbnQuY2hhckF0KDkpLnRvVXBwZXJDYXNlKCkgKyBwb2ludGVyRXZlbnQuc3Vic3RyKDEwKTpcblx0XHRcdHBvaW50ZXJFdmVudDtcblx0fTtcblxuXHRtZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGFydCwgdGltZSwgbG93ZXJNYXJnaW4sIHdyYXBwZXJTaXplLCBkZWNlbGVyYXRpb24pIHtcblx0XHR2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQsXG5cdFx0XHRzcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlKSAvIHRpbWUsXG5cdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdGR1cmF0aW9uO1xuXG5cdFx0ZGVjZWxlcmF0aW9uID0gZGVjZWxlcmF0aW9uID09PSB1bmRlZmluZWQgPyAwLjAwMDYgOiBkZWNlbGVyYXRpb247XG5cblx0XHRkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTtcblx0XHRkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uO1xuXG5cdFx0aWYgKCBkZXN0aW5hdGlvbiA8IGxvd2VyTWFyZ2luICkge1xuXHRcdFx0ZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IGxvd2VyTWFyZ2luIC0gKCB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgKSA6IGxvd2VyTWFyZ2luO1xuXHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xuXHRcdFx0ZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoIGRlc3RpbmF0aW9uID4gMCApIHtcblx0XHRcdGRlc3RpbmF0aW9uID0gd3JhcHBlclNpemUgPyB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgOiAwO1xuXHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50KSArIGRlc3RpbmF0aW9uO1xuXHRcdFx0ZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb25cblx0XHR9O1xuXHR9O1xuXG5cdHZhciBfdHJhbnNmb3JtID0gX3ByZWZpeFN0eWxlKCd0cmFuc2Zvcm0nKTtcblxuXHRtZS5leHRlbmQobWUsIHtcblx0XHRoYXNUcmFuc2Zvcm06IF90cmFuc2Zvcm0gIT09IGZhbHNlLFxuXHRcdGhhc1BlcnNwZWN0aXZlOiBfcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gX2VsZW1lbnRTdHlsZSxcblx0XHRoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gd2luZG93LFxuXHRcdGhhc1BvaW50ZXI6IHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50LCAvLyBJRTEwIGlzIHByZWZpeGVkXG5cdFx0aGFzVHJhbnNpdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJykgaW4gX2VsZW1lbnRTdHlsZVxuXHR9KTtcblxuXHQvLyBUaGlzIHNob3VsZCBmaW5kIGFsbCBBbmRyb2lkIGJyb3dzZXJzIGxvd2VyIHRoYW4gYnVpbGQgNTM1LjE5IChib3RoIHN0b2NrIGJyb3dzZXIgYW5kIHdlYnZpZXcpXG5cdG1lLmlzQmFkQW5kcm9pZCA9IC9BbmRyb2lkIC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24pICYmICEoL0Nocm9tZVxcL1xcZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24pKTtcblxuXHRtZS5leHRlbmQobWUuc3R5bGUgPSB7fSwge1xuXHRcdHRyYW5zZm9ybTogX3RyYW5zZm9ybSxcblx0XHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXG5cdFx0dHJhbnNpdGlvbkR1cmF0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EZWxheTogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcblx0XHR0cmFuc2Zvcm1PcmlnaW46IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJylcblx0fSk7XG5cblx0bWUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiKTtcblx0XHRyZXR1cm4gcmUudGVzdChlLmNsYXNzTmFtZSk7XG5cdH07XG5cblx0bWUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdGlmICggbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG5ld2NsYXNzID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuZXdjbGFzcy5wdXNoKGMpO1xuXHRcdGUuY2xhc3NOYW1lID0gbmV3Y2xhc3Muam9pbignICcpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoICFtZS5oYXNDbGFzcyhlLCBjKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIiwgJ2cnKTtcblx0XHRlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG5cdH07XG5cblx0bWUub2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0dmFyIGxlZnQgPSAtZWwub2Zmc2V0TGVmdCxcblx0XHRcdHRvcCA9IC1lbC5vZmZzZXRUb3A7XG5cblx0XHQvLyBqc2hpbnQgLVcwODRcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCAtPSBlbC5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdC8vIGpzaGludCArVzA4NFxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHR0b3A6IHRvcFxuXHRcdH07XG5cdH07XG5cblx0bWUucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZWwsIGV4Y2VwdGlvbnMpIHtcblx0XHRmb3IgKCB2YXIgaSBpbiBleGNlcHRpb25zICkge1xuXHRcdFx0aWYgKCBleGNlcHRpb25zW2ldLnRlc3QoZWxbaV0pICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0bWUuZXh0ZW5kKG1lLmV2ZW50VHlwZSA9IHt9LCB7XG5cdFx0dG91Y2hzdGFydDogMSxcblx0XHR0b3VjaG1vdmU6IDEsXG5cdFx0dG91Y2hlbmQ6IDEsXG5cblx0XHRtb3VzZWRvd246IDIsXG5cdFx0bW91c2Vtb3ZlOiAyLFxuXHRcdG1vdXNldXA6IDIsXG5cblx0XHRwb2ludGVyZG93bjogMyxcblx0XHRwb2ludGVybW92ZTogMyxcblx0XHRwb2ludGVydXA6IDMsXG5cblx0XHRNU1BvaW50ZXJEb3duOiAzLFxuXHRcdE1TUG9pbnRlck1vdmU6IDMsXG5cdFx0TVNQb2ludGVyVXA6IDNcblx0fSk7XG5cblx0bWUuZXh0ZW5kKG1lLmVhc2UgPSB7fSwge1xuXHRcdHF1YWRyYXRpYzoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2lyY3VsYXI6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKScsXHQvLyBOb3QgcHJvcGVybHkgXCJjaXJjdWxhclwiIGJ1dCB0aGlzIGxvb2tzIGJldHRlciwgaXQgc2hvdWxkIGJlICgwLjA3NSwgMC44MiwgMC4xNjUsIDEpXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRiYWNrOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGIgPSA0O1xuXHRcdFx0XHRyZXR1cm4gKCBrID0gayAtIDEgKSAqIGsgKiAoICggYiArIDEgKSAqIGsgKyBiICkgKyAxO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ym91bmNlOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0aWYgKCAoIGsgLz0gMSApIDwgKCAxIC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGFzdGljOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGYgPSAwLjIyLFxuXHRcdFx0XHRcdGUgPSAwLjQ7XG5cblx0XHRcdFx0aWYgKCBrID09PSAwICkgeyByZXR1cm4gMDsgfVxuXHRcdFx0XHRpZiAoIGsgPT0gMSApIHsgcmV0dXJuIDE7IH1cblxuXHRcdFx0XHRyZXR1cm4gKCBlICogTWF0aC5wb3coIDIsIC0gMTAgKiBrICkgKiBNYXRoLnNpbiggKCBrIC0gZiAvIDQgKSAqICggMiAqIE1hdGguUEkgKSAvIGYgKSArIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdG1lLnRhcCA9IGZ1bmN0aW9uIChlLCBldmVudE5hbWUpIHtcblx0XHR2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblx0XHRldi5wYWdlWCA9IGUucGFnZVg7XG5cdFx0ZXYucGFnZVkgPSBlLnBhZ2VZO1xuXHRcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuXHR9O1xuXG5cdG1lLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG5cdFx0XHRldjtcblxuXHRcdGlmICggISgvKFNFTEVDVHxJTlBVVHxURVhUQVJFQSkvaSkudGVzdCh0YXJnZXQudGFnTmFtZSkgKSB7XG5cdFx0XHRldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdFx0ZXYuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgZS52aWV3LCAxLFxuXHRcdFx0XHR0YXJnZXQuc2NyZWVuWCwgdGFyZ2V0LnNjcmVlblksIHRhcmdldC5jbGllbnRYLCB0YXJnZXQuY2xpZW50WSxcblx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LFxuXHRcdFx0XHQwLCBudWxsKTtcblxuXHRcdFx0ZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcblx0XHRcdHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG1lO1xufSkoKTtcblxuZnVuY3Rpb24gSVNjcm9sbCAoZWwsIG9wdGlvbnMpIHtcblx0dGhpcy53cmFwcGVyID0gdHlwZW9mIGVsID09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcblx0dGhpcy5zY3JvbGxlciA9IHRoaXMud3JhcHBlci5jaGlsZHJlblswXTtcblx0dGhpcy5zY3JvbGxlclN0eWxlID0gdGhpcy5zY3JvbGxlci5zdHlsZTtcdFx0Ly8gY2FjaGUgc3R5bGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuXG5cdHRoaXMub3B0aW9ucyA9IHtcblxuLy8gSU5TRVJUIFBPSU5UOiBPUFRJT05TIFxuXG5cdFx0c3RhcnRYOiAwLFxuXHRcdHN0YXJ0WTogMCxcblx0XHRzY3JvbGxZOiB0cnVlLFxuXHRcdGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ6IDUsXG5cdFx0bW9tZW50dW06IHRydWUsXG5cblx0XHRib3VuY2U6IHRydWUsXG5cdFx0Ym91bmNlVGltZTogNjAwLFxuXHRcdGJvdW5jZUVhc2luZzogJycsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcblx0XHRwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjogeyB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvIH0sXG5cblx0XHRIV0NvbXBvc2l0aW5nOiB0cnVlLFxuXHRcdHVzZVRyYW5zaXRpb246IHRydWUsXG5cdFx0dXNlVHJhbnNmb3JtOiB0cnVlXG5cdH07XG5cblx0Zm9yICggdmFyIGkgaW4gb3B0aW9ucyApIHtcblx0XHR0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdGlvbnNcblx0dGhpcy50cmFuc2xhdGVaID0gdGhpcy5vcHRpb25zLkhXQ29tcG9zaXRpbmcgJiYgdXRpbHMuaGFzUGVyc3BlY3RpdmUgPyAnIHRyYW5zbGF0ZVooMCknIDogJyc7XG5cblx0dGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gPSB1dGlscy5oYXNUcmFuc2l0aW9uICYmIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uO1xuXHR0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtID0gdXRpbHMuaGFzVHJhbnNmb3JtICYmIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm07XG5cblx0dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaDtcblx0dGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ID0gIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoICYmIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcblxuXHQvLyBJZiB5b3Ugd2FudCBldmVudFBhc3N0aHJvdWdoIEkgaGF2ZSB0byBsb2NrIG9uZSBvZiB0aGUgYXhlc1xuXHR0aGlzLm9wdGlvbnMuc2Nyb2xsWSA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICd2ZXJ0aWNhbCcgPyBmYWxzZSA6IHRoaXMub3B0aW9ucy5zY3JvbGxZO1xuXHR0aGlzLm9wdGlvbnMuc2Nyb2xsWCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFg7XG5cblx0Ly8gV2l0aCBldmVudFBhc3N0aHJvdWdoIHdlIGFsc28gbmVlZCBsb2NrRGlyZWN0aW9uIG1lY2hhbmlzbVxuXHR0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCA9IHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICYmICF0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaDtcblx0dGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA/IDAgOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZDtcblxuXHR0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nID0gdHlwZW9mIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPT0gJ3N0cmluZycgPyB1dGlscy5lYXNlW3RoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmddIHx8IHV0aWxzLmVhc2UuY2lyY3VsYXIgOiB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nO1xuXG5cdHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nID0gdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPT09IHVuZGVmaW5lZCA/IDYwIDogdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmc7XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMudGFwID09PSB0cnVlICkge1xuXHRcdHRoaXMub3B0aW9ucy50YXAgPSAndGFwJztcblx0fVxuXG4vLyBJTlNFUlQgUE9JTlQ6IE5PUk1BTElaQVRJT05cblxuXHQvLyBTb21lIGRlZmF1bHRzXHRcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0dGhpcy5fZXZlbnRzID0ge307XG5cbi8vIElOU0VSVCBQT0lOVDogREVGQVVMVFNcblxuXHR0aGlzLl9pbml0KCk7XG5cdHRoaXMucmVmcmVzaCgpO1xuXG5cdHRoaXMuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XG5cdHRoaXMuZW5hYmxlKCk7XG59XG5cbklTY3JvbGwucHJvdG90eXBlID0ge1xuXHR2ZXJzaW9uOiAnNS4xLjMnLFxuXG5cdF9pbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cygpO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IF9pbml0XG5cblx0fSxcblxuXHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cyh0cnVlKTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnZGVzdHJveScpO1xuXHR9LFxuXG5cdF90cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggZS50YXJnZXQgIT0gdGhpcy5zY3JvbGxlciB8fCAhdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdGlmICggIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gUmVhY3QgdG8gbGVmdCBtb3VzZSBidXR0b24gb25seVxuXHRcdGlmICggdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT0gMSApIHtcblx0XHRcdGlmICggZS5idXR0b24gIT09IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgKHRoaXMuaW5pdGlhdGVkICYmIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLmlzQmFkQW5kcm9pZCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcblx0XHRcdHBvcztcblxuXHRcdHRoaXMuaW5pdGlhdGVkXHQ9IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdO1xuXHRcdHRoaXMubW92ZWRcdFx0PSBmYWxzZTtcblx0XHR0aGlzLmRpc3RYXHRcdD0gMDtcblx0XHR0aGlzLmRpc3RZXHRcdD0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAwO1xuXG5cdFx0dGhpcy5fdHJhbnNpdGlvblRpbWUoKTtcblxuXHRcdHRoaXMuc3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzSW5UcmFuc2l0aW9uICkge1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0cG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0fSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHR0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhcnRYICAgID0gdGhpcy54O1xuXHRcdHRoaXMuc3RhcnRZICAgID0gdGhpcy55O1xuXHRcdHRoaXMuYWJzU3RhcnRYID0gdGhpcy54O1xuXHRcdHRoaXMuYWJzU3RhcnRZID0gdGhpcy55O1xuXHRcdHRoaXMucG9pbnRYICAgID0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFkgICAgPSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICkge1x0Ly8gaW5jcmVhc2VzIHBlcmZvcm1hbmNlIG9uIEFuZHJvaWQ/IFRPRE86IGNoZWNrIVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludFx0XHQ9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRkZWx0YVhcdFx0PSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYLFxuXHRcdFx0ZGVsdGFZXHRcdD0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WSxcblx0XHRcdHRpbWVzdGFtcFx0PSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0YWJzRGlzdFgsIGFic0Rpc3RZO1xuXG5cdFx0dGhpcy5wb2ludFhcdFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLnBvaW50WVx0XHQ9IHBvaW50LnBhZ2VZO1xuXG5cdFx0dGhpcy5kaXN0WFx0XHQrPSBkZWx0YVg7XG5cdFx0dGhpcy5kaXN0WVx0XHQrPSBkZWx0YVk7XG5cdFx0YWJzRGlzdFhcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RYKTtcblx0XHRhYnNEaXN0WVx0XHQ9IE1hdGguYWJzKHRoaXMuZGlzdFkpO1xuXG5cdFx0Ly8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IDEwIHBpeGVscyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5lbmRUaW1lID4gMzAwICYmIChhYnNEaXN0WCA8IDEwICYmIGFic0Rpc3RZIDwgMTApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24gbG9jayB0aGUgb3RoZXJcblx0XHRpZiAoICF0aGlzLmRpcmVjdGlvbkxvY2tlZCAmJiAhdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgKSB7XG5cdFx0XHRpZiAoIGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnaCc7XHRcdC8vIGxvY2sgaG9yaXpvbnRhbGx5XG5cdFx0XHR9IGVsc2UgaWYgKCBhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkICkge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICd2JztcdFx0Ly8gbG9jayB2ZXJ0aWNhbGx5XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICduJztcdFx0Ly8gbm8gbG9ja1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ2gnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFZID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PSAndicgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0dGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YVggPSAwO1xuXHRcdH1cblxuXHRcdGRlbHRhWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IGRlbHRhWCA6IDA7XG5cdFx0ZGVsdGFZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IGRlbHRhWSA6IDA7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHQvLyBTbG93IGRvd24gaWYgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xuXHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy54ICsgZGVsdGFYIC8gMyA6IG5ld1ggPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cdFx0aWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLnkgKyBkZWx0YVkgLyAzIDogbmV3WSA+IDAgPyAwIDogdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IGRlbHRhWCA+IDAgPyAtMSA6IGRlbHRhWCA8IDAgPyAxIDogMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSBkZWx0YVkgPiAwID8gLTEgOiBkZWx0YVkgPCAwID8gMSA6IDA7XG5cblx0XHRpZiAoICF0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubW92ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfbW92ZSAqL1xuXG5cdFx0aWYgKCB0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IDMwMCApIHtcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuXHRcdFx0dGhpcy5zdGFydFggPSB0aGlzLng7XG5cdFx0XHR0aGlzLnN0YXJ0WSA9IHRoaXMueTtcblx0XHR9XG5cbi8qIFJFUExBQ0UgRU5EOiBfbW92ZSAqL1xuXG5cdH0sXG5cblx0X2VuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnQgPSBlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUsXG5cdFx0XHRtb21lbnR1bVgsXG5cdFx0XHRtb21lbnR1bVksXG5cdFx0XHRkdXJhdGlvbiA9IHV0aWxzLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lLFxuXHRcdFx0bmV3WCA9IE1hdGgucm91bmQodGhpcy54KSxcblx0XHRcdG5ld1kgPSBNYXRoLnJvdW5kKHRoaXMueSksXG5cdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyhuZXdYIC0gdGhpcy5zdGFydFgpLFxuXHRcdFx0ZGlzdGFuY2VZID0gTWF0aC5hYnMobmV3WSAtIHRoaXMuc3RhcnRZKSxcblx0XHRcdHRpbWUgPSAwLFxuXHRcdFx0ZWFzaW5nID0gJyc7XG5cblx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMDtcblx0XHR0aGlzLmluaXRpYXRlZCA9IDA7XG5cdFx0dGhpcy5lbmRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZKTtcdC8vIGVuc3VyZXMgdGhhdCB0aGUgbGFzdCBwb3NpdGlvbiBpcyByb3VuZGVkXG5cblx0XHQvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gMTAgcGl4ZWxzXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnRhcCApIHtcblx0XHRcdFx0dXRpbHMudGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdFx0dXRpbHMuY2xpY2soZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsQ2FuY2VsJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9ldmVudHMuZmxpY2sgJiYgZHVyYXRpb24gPCAyMDAgJiYgZGlzdGFuY2VYIDwgMTAwICYmIGRpc3RhbmNlWSA8IDEwMCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnZmxpY2snKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW9tZW50dW0gJiYgZHVyYXRpb24gPCAzMDAgKSB7XG5cdFx0XHRtb21lbnR1bVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB1dGlscy5tb21lbnR1bSh0aGlzLngsIHRoaXMuc3RhcnRYLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxYLCB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy53cmFwcGVyV2lkdGggOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1gsIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRtb21lbnR1bVkgPSB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy55LCB0aGlzLnN0YXJ0WSwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWSwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlckhlaWdodCA6IDAsIHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pIDogeyBkZXN0aW5hdGlvbjogbmV3WSwgZHVyYXRpb246IDAgfTtcblx0XHRcdG5ld1ggPSBtb21lbnR1bVguZGVzdGluYXRpb247XG5cdFx0XHRuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xuXHRcdFx0dGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSAxO1xuXHRcdH1cblxuLy8gSU5TRVJUIFBPSU5UOiBfZW5kXG5cblx0XHRpZiAoIG5ld1ggIT0gdGhpcy54IHx8IG5ld1kgIT0gdGhpcy55ICkge1xuXHRcdFx0Ly8gY2hhbmdlIGVhc2luZyBmdW5jdGlvbiB3aGVuIHNjcm9sbGVyIGdvZXMgb3V0IG9mIHRoZSBib3VuZGFyaWVzXG5cdFx0XHRpZiAoIG5ld1ggPiAwIHx8IG5ld1ggPCB0aGlzLm1heFNjcm9sbFggfHwgbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdFx0ZWFzaW5nID0gdXRpbHMuZWFzZS5xdWFkcmF0aWM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSwgdGltZSwgZWFzaW5nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHR9LFxuXG5cdF9yZXNpemU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcblxuXHRcdHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhhdC5yZWZyZXNoKCk7XG5cdFx0fSwgdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpO1xuXHR9LFxuXG5cdHJlc2V0UG9zaXRpb246IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dmFyIHggPSB0aGlzLngsXG5cdFx0XHR5ID0gdGhpcy55O1xuXG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdGlmICggIXRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCB8fCB0aGlzLnggPiAwICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0fSBlbHNlIGlmICggdGhpcy54IDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0eCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsIHx8IHRoaXMueSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnkgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG5cdFx0XHR5ID0gdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdGlmICggeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyh4LCB5LCB0aW1lLCB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fSxcblxuXHRlbmFibGU6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9LFxuXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmYgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1x0XHQvLyBGb3JjZSByZWZsb3dcblxuXHRcdHRoaXMud3JhcHBlcldpZHRoXHQ9IHRoaXMud3JhcHBlci5jbGllbnRXaWR0aDtcblx0XHR0aGlzLndyYXBwZXJIZWlnaHRcdD0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcblxuLyogUkVQTEFDRSBTVEFSVDogcmVmcmVzaCAqL1xuXG5cdFx0dGhpcy5zY3JvbGxlcldpZHRoXHQ9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0V2lkdGg7XG5cdFx0dGhpcy5zY3JvbGxlckhlaWdodFx0PSB0aGlzLnNjcm9sbGVyLm9mZnNldEhlaWdodDtcblxuXHRcdHRoaXMubWF4U2Nyb2xsWFx0XHQ9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zY3JvbGxlcldpZHRoO1xuXHRcdHRoaXMubWF4U2Nyb2xsWVx0XHQ9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuc2Nyb2xsZXJIZWlnaHQ7XG5cbi8qIFJFUExBQ0UgRU5EOiByZWZyZXNoICovXG5cblx0XHR0aGlzLmhhc0hvcml6b250YWxTY3JvbGxcdD0gdGhpcy5vcHRpb25zLnNjcm9sbFggJiYgdGhpcy5tYXhTY3JvbGxYIDwgMDtcblx0XHR0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsXHRcdD0gdGhpcy5vcHRpb25zLnNjcm9sbFkgJiYgdGhpcy5tYXhTY3JvbGxZIDwgMDtcblxuXHRcdGlmICggIXRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCApIHtcblx0XHRcdHRoaXMubWF4U2Nyb2xsWCA9IDA7XG5cdFx0XHR0aGlzLnNjcm9sbGVyV2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aDtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0dGhpcy5tYXhTY3JvbGxZID0gMDtcblx0XHRcdHRoaXMuc2Nyb2xsZXJIZWlnaHQgPSB0aGlzLndyYXBwZXJIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbmRUaW1lID0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cblx0XHR0aGlzLndyYXBwZXJPZmZzZXQgPSB1dGlscy5vZmZzZXQodGhpcy53cmFwcGVyKTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgncmVmcmVzaCcpO1xuXG5cdFx0dGhpcy5yZXNldFBvc2l0aW9uKCk7XG5cbi8vIElOU0VSVCBQT0lOVDogX3JlZnJlc2hcblxuXHR9LFxuXG5cdG9uOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV0gPSBbXTtcblx0XHR9XG5cblx0XHR0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChmbik7XG5cdH0sXG5cblx0b2ZmOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGluZGV4ID0gdGhpcy5fZXZlbnRzW3R5cGVdLmluZGV4T2YoZm4pO1xuXG5cdFx0aWYgKCBpbmRleCA+IC0xICkge1xuXHRcdFx0dGhpcy5fZXZlbnRzW3R5cGVdLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9LFxuXG5cdF9leGVjRXZlbnQ6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW3R5cGVdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBpID0gMCxcblx0XHRcdGwgPSB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuXG5cdFx0aWYgKCAhbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV1baV0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHR9XG5cdH0sXG5cblx0c2Nyb2xsQnk6IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHR4ID0gdGhpcy54ICsgeDtcblx0XHR5ID0gdGhpcy55ICsgeTtcblx0XHR0aW1lID0gdGltZSB8fCAwO1xuXG5cdFx0dGhpcy5zY3JvbGxUbyh4LCB5LCB0aW1lLCBlYXNpbmcpO1xuXHR9LFxuXG5cdHNjcm9sbFRvOiBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nKSB7XG5cdFx0ZWFzaW5nID0gZWFzaW5nIHx8IHV0aWxzLmVhc2UuY2lyY3VsYXI7XG5cblx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgdGltZSA+IDA7XG5cblx0XHRpZiAoICF0aW1lIHx8ICh0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGUpICkge1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZy5zdHlsZSk7XG5cdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSh4LCB5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fYW5pbWF0ZSh4LCB5LCB0aW1lLCBlYXNpbmcuZm4pO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGxUb0VsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgdGltZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgZWFzaW5nKSB7XG5cdFx0ZWwgPSBlbC5ub2RlVHlwZSA/IGVsIDogdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yKGVsKTtcblxuXHRcdGlmICggIWVsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBwb3MgPSB1dGlscy5vZmZzZXQoZWwpO1xuXG5cdFx0cG9zLmxlZnQgLT0gdGhpcy53cmFwcGVyT2Zmc2V0LmxlZnQ7XG5cdFx0cG9zLnRvcCAgLT0gdGhpcy53cmFwcGVyT2Zmc2V0LnRvcDtcblxuXHRcdC8vIGlmIG9mZnNldFgvWSBhcmUgdHJ1ZSB3ZSBjZW50ZXIgdGhlIGVsZW1lbnQgdG8gdGhlIHNjcmVlblxuXHRcdGlmICggb2Zmc2V0WCA9PT0gdHJ1ZSApIHtcblx0XHRcdG9mZnNldFggPSBNYXRoLnJvdW5kKGVsLm9mZnNldFdpZHRoIC8gMiAtIHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aCAvIDIpO1xuXHRcdH1cblx0XHRpZiAoIG9mZnNldFkgPT09IHRydWUgKSB7XG5cdFx0XHRvZmZzZXRZID0gTWF0aC5yb3VuZChlbC5vZmZzZXRIZWlnaHQgLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodCAvIDIpO1xuXHRcdH1cblxuXHRcdHBvcy5sZWZ0IC09IG9mZnNldFggfHwgMDtcblx0XHRwb3MudG9wICAtPSBvZmZzZXRZIHx8IDA7XG5cblx0XHRwb3MubGVmdCA9IHBvcy5sZWZ0ID4gMCA/IDAgOiBwb3MubGVmdCA8IHRoaXMubWF4U2Nyb2xsWCA/IHRoaXMubWF4U2Nyb2xsWCA6IHBvcy5sZWZ0O1xuXHRcdHBvcy50b3AgID0gcG9zLnRvcCAgPiAwID8gMCA6IHBvcy50b3AgIDwgdGhpcy5tYXhTY3JvbGxZID8gdGhpcy5tYXhTY3JvbGxZIDogcG9zLnRvcDtcblxuXHRcdHRpbWUgPSB0aW1lID09PSB1bmRlZmluZWQgfHwgdGltZSA9PT0gbnVsbCB8fCB0aW1lID09PSAnYXV0bycgPyBNYXRoLm1heChNYXRoLmFicyh0aGlzLngtcG9zLmxlZnQpLCBNYXRoLmFicyh0aGlzLnktcG9zLnRvcCkpIDogdGltZTtcblxuXHRcdHRoaXMuc2Nyb2xsVG8ocG9zLmxlZnQsIHBvcy50b3AsIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0X3RyYW5zaXRpb25UaW1lOiBmdW5jdGlvbiAodGltZSkge1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9IHRpbWUgKyAnbXMnO1xuXG5cdFx0aWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9ICcwLjAwMXMnO1xuXHRcdH1cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNpdGlvblRpbWVcblxuXHR9LFxuXG5cdF90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGZ1bmN0aW9uIChlYXNpbmcpIHtcblx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXSA9IGVhc2luZztcblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXG5cblx0fSxcblxuXHRfdHJhbnNsYXRlOiBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblxuLyogUkVQTEFDRSBTVEFSVDogX3RyYW5zbGF0ZSAqL1xuXG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJyArIHRoaXMudHJhbnNsYXRlWjtcblxuLyogUkVQTEFDRSBFTkQ6IF90cmFuc2xhdGUgKi9cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR4ID0gTWF0aC5yb3VuZCh4KTtcblx0XHRcdHkgPSBNYXRoLnJvdW5kKHkpO1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRcdHRoaXMuc2Nyb2xsZXJTdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0XHR9XG5cblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zbGF0ZVxuXG5cdH0sXG5cblx0X2luaXRFdmVudHM6IGZ1bmN0aW9uIChyZW1vdmUpIHtcblx0XHR2YXIgZXZlbnRUeXBlID0gcmVtb3ZlID8gdXRpbHMucmVtb3ZlRXZlbnQgOiB1dGlscy5hZGRFdmVudCxcblx0XHRcdHRhcmdldCA9IHRoaXMub3B0aW9ucy5iaW5kVG9XcmFwcGVyID8gdGhpcy53cmFwcGVyIDogd2luZG93O1xuXG5cdFx0ZXZlbnRUeXBlKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAnY2xpY2snLCB0aGlzLCB0cnVlKTtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlbW92ZScsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlY2FuY2VsJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2V1cCcsIHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICggdXRpbHMuaGFzUG9pbnRlciAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVyZG93bicpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJjYW5jZWwnKSwgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHV0aWxzLmhhc1RvdWNoICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoZW5kJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd0cmFuc2l0aW9uZW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdvVHJhbnNpdGlvbkVuZCcsIHRoaXMpO1xuXHRcdGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnTVNUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdH0sXG5cblx0Z2V0Q29tcHV0ZWRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBtYXRyaXggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNjcm9sbGVyLCBudWxsKSxcblx0XHRcdHgsIHk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cdFx0XHRtYXRyaXggPSBtYXRyaXhbdXRpbHMuc3R5bGUudHJhbnNmb3JtXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xuXHRcdFx0eCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xuXHRcdFx0eSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR4ID0gK21hdHJpeC5sZWZ0LnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcblx0XHRcdHkgPSArbWF0cml4LnRvcC5yZXBsYWNlKC9bXi1cXGQuXS9nLCAnJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgeDogeCwgeTogeSB9O1xuXHR9LFxuXG5cdF9hbmltYXRlOiBmdW5jdGlvbiAoZGVzdFgsIGRlc3RZLCBkdXJhdGlvbiwgZWFzaW5nRm4pIHtcblx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRzdGFydFggPSB0aGlzLngsXG5cdFx0XHRzdGFydFkgPSB0aGlzLnksXG5cdFx0XHRzdGFydFRpbWUgPSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRkZXN0VGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuXG5cdFx0ZnVuY3Rpb24gc3RlcCAoKSB7XG5cdFx0XHR2YXIgbm93ID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0XHRlYXNpbmc7XG5cblx0XHRcdGlmICggbm93ID49IGRlc3RUaW1lICkge1xuXHRcdFx0XHR0aGF0LmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoYXQuX3RyYW5zbGF0ZShkZXN0WCwgZGVzdFkpO1xuXG5cdFx0XHRcdGlmICggIXRoYXQucmVzZXRQb3NpdGlvbih0aGF0Lm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRcdFx0dGhhdC5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bm93ID0gKCBub3cgLSBzdGFydFRpbWUgKSAvIGR1cmF0aW9uO1xuXHRcdFx0ZWFzaW5nID0gZWFzaW5nRm4obm93KTtcblx0XHRcdG5ld1ggPSAoIGRlc3RYIC0gc3RhcnRYICkgKiBlYXNpbmcgKyBzdGFydFg7XG5cdFx0XHRuZXdZID0gKCBkZXN0WSAtIHN0YXJ0WSApICogZWFzaW5nICsgc3RhcnRZO1xuXHRcdFx0dGhhdC5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG5cdFx0XHRpZiAoIHRoYXQuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHRcdHJBRihzdGVwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcblx0XHRzdGVwKCk7XG5cdH0sXG5cdGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXHRcdHN3aXRjaCAoIGUudHlwZSApIHtcblx0XHRcdGNhc2UgJ3RvdWNoc3RhcnQnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcmRvd24nOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyRG93bic6XG5cdFx0XHRjYXNlICdtb3VzZWRvd24nOlxuXHRcdFx0XHR0aGlzLl9zdGFydChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaG1vdmUnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcm1vdmUnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyTW92ZSc6XG5cdFx0XHRjYXNlICdtb3VzZW1vdmUnOlxuXHRcdFx0XHR0aGlzLl9tb3ZlKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RvdWNoZW5kJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJ1cCc6XG5cdFx0XHRjYXNlICdNU1BvaW50ZXJVcCc6XG5cdFx0XHRjYXNlICdtb3VzZXVwJzpcblx0XHRcdGNhc2UgJ3RvdWNoY2FuY2VsJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJjYW5jZWwnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyQ2FuY2VsJzpcblx0XHRcdGNhc2UgJ21vdXNlY2FuY2VsJzpcblx0XHRcdFx0dGhpcy5fZW5kKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29yaWVudGF0aW9uY2hhbmdlJzpcblx0XHRcdGNhc2UgJ3Jlc2l6ZSc6XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RyYW5zaXRpb25lbmQnOlxuXHRcdFx0Y2FzZSAnd2Via2l0VHJhbnNpdGlvbkVuZCc6XG5cdFx0XHRjYXNlICdvVHJhbnNpdGlvbkVuZCc6XG5cdFx0XHRjYXNlICdNU1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uRW5kKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3doZWVsJzpcblx0XHRcdGNhc2UgJ0RPTU1vdXNlU2Nyb2xsJzpcblx0XHRcdGNhc2UgJ21vdXNld2hlZWwnOlxuXHRcdFx0XHR0aGlzLl93aGVlbChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdrZXlkb3duJzpcblx0XHRcdFx0dGhpcy5fa2V5KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NsaWNrJzpcblx0XHRcdFx0aWYgKCAhZS5fY29uc3RydWN0ZWQgKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuSVNjcm9sbC51dGlscyA9IHV0aWxzO1xuXG5pZiAoIHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gSVNjcm9sbDtcbn0gZWxzZSB7XG5cdHdpbmRvdy5JU2Nyb2xsID0gSVNjcm9sbDtcbn1cblxufSkod2luZG93LCBkb2N1bWVudCwgTWF0aCk7IiwiLyoqXG4gKiBtYWlubG9vcC5qcyAxLjAuMS0yMDE1MDgxNlxuICpcbiAqIEBhdXRob3IgSXNhYWMgU3VraW4gKGh0dHA6Ly93d3cuaXNhYWNzdWtpbi5jb20vKVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7aWYoZStqPmEpcmV0dXJuIHU9bihiKSx2b2lkIDA7Zm9yKGQrPWEtZSxlPWEscShhLGQpLGE+ZysxZTMmJihmPS4yNSpoKy43NSpmLGc9YSxoPTApLGgrKyxpPTA7ZD49YzspaWYocihjKSxkLT1jLCsraT49MjQwKXttPSEwO2JyZWFrfXMoZC9jKSx0KGYsbSksbT0hMSx1PW4oYil9dmFyIGM9MWUzLzYwLGQ9MCxlPTAsZj02MCxnPTAsaD0wLGk9MCxqPTAsaz0hMSxsPSExLG09ITEsbj1hLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oKXt2YXIgYT1EYXRlLm5vdygpLGIsZDtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGI9RGF0ZS5ub3coKSxkPU1hdGgubWF4KDAsYy0oYi1hKSksYT1iK2Qsc2V0VGltZW91dChmdW5jdGlvbigpe2UoYitkKX0sZCl9fSgpLG89YS5jYW5jZWxBbmltYXRpb25GcmFtZXx8Y2xlYXJUaW1lb3V0LHA9ZnVuY3Rpb24oKXt9LHE9cCxyPXAscz1wLHQ9cCx1O2EuTWFpbkxvb3A9e2dldFNpbXVsYXRpb25UaW1lc3RlcDpmdW5jdGlvbigpe3JldHVybiBjfSxzZXRTaW11bGF0aW9uVGltZXN0ZXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGM9YSx0aGlzfSxnZXRGUFM6ZnVuY3Rpb24oKXtyZXR1cm4gZn0sZ2V0TWF4QWxsb3dlZEZQUzpmdW5jdGlvbigpe3JldHVybiAxZTMvan0sc2V0TWF4QWxsb3dlZEZQUzpmdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYSYmKGE9MS8wKSwwPT09YT90aGlzLnN0b3AoKTpqPTFlMy9hLHRoaXN9LHJlc2V0RnJhbWVEZWx0YTpmdW5jdGlvbigpe3ZhciBhPWQ7cmV0dXJuIGQ9MCxhfSxzZXRCZWdpbjpmdW5jdGlvbihhKXtyZXR1cm4gcT1hfHxxLHRoaXN9LHNldFVwZGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gcj1hfHxyLHRoaXN9LHNldERyYXc6ZnVuY3Rpb24oYSl7cmV0dXJuIHM9YXx8cyx0aGlzfSxzZXRFbmQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHQ9YXx8dCx0aGlzfSxzdGFydDpmdW5jdGlvbigpe3JldHVybiBsfHwobD0hMCx1PW4oZnVuY3Rpb24oYSl7cygxKSxrPSEwLGU9YSxnPWEsaD0wLHU9bihiKX0pKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIGs9ITEsbD0hMSxvKHUpLHRoaXN9LGlzUnVubmluZzpmdW5jdGlvbigpe3JldHVybiBrfX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShhLk1haW5Mb29wKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPWEuTWFpbkxvb3ApfSh0aGlzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW5sb29wLm1pbi5qcy5tYXAiLCIvLyBTdXBwb3J0IGZvciBhc3luY2hyb25vdXMgZnVuY3Rpb25zXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFGcm9tICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvZnJvbScpXG4gICwgbWl4aW4gICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvbWl4aW4nKVxuICAsIGRlZmluZUxlbmd0aCA9IHJlcXVpcmUoJ2VzNS1leHQvZnVuY3Rpb24vX2RlZmluZS1sZW5ndGgnKVxuICAsIG5leHRUaWNrICAgICA9IHJlcXVpcmUoJ25leHQtdGljaycpXG5cbiAgLCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlXG4gICwgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5yZXF1aXJlKCcuLi9saWIvcmVnaXN0ZXJlZC1leHRlbnNpb25zJykuYXN5bmMgPSBmdW5jdGlvbiAodGJpLCBjb25mKSB7XG5cdHZhciB3YWl0aW5nID0gY3JlYXRlKG51bGwpLCBjYWNoZSA9IGNyZWF0ZShudWxsKVxuXHQgICwgYmFzZSA9IGNvbmYubWVtb2l6ZWQsIG9yaWdpbmFsID0gY29uZi5vcmlnaW5hbFxuXHQgICwgY3VycmVudENhbGxiYWNrLCBjdXJyZW50Q29udGV4dCwgY3VycmVudEFyZ3M7XG5cblx0Ly8gSW5pdGlhbFxuXHRjb25mLm1lbW9pemVkID0gZGVmaW5lTGVuZ3RoKGZ1bmN0aW9uIChhcmcpIHtcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cywgbGFzdCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblx0XHRpZiAodHlwZW9mIGxhc3QgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGN1cnJlbnRDYWxsYmFjayA9IGxhc3Q7XG5cdFx0XHRhcmdzID0gc2xpY2UuY2FsbChhcmdzLCAwLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlLmFwcGx5KGN1cnJlbnRDb250ZXh0ID0gdGhpcywgY3VycmVudEFyZ3MgPSBhcmdzKTtcblx0fSwgYmFzZSk7XG5cdHRyeSB7IG1peGluKGNvbmYubWVtb2l6ZWQsIGJhc2UpOyB9IGNhdGNoIChpZ25vcmUpIHt9XG5cblx0Ly8gRnJvbSBjYWNoZSAoc3luYylcblx0Y29uZi5vbignZ2V0JywgZnVuY3Rpb24gKGlkKSB7XG5cdFx0dmFyIGNiLCBjb250ZXh0LCBhcmdzO1xuXHRcdGlmICghY3VycmVudENhbGxiYWNrKSByZXR1cm47XG5cblx0XHQvLyBVbnJlc29sdmVkXG5cdFx0aWYgKHdhaXRpbmdbaWRdKSB7XG5cdFx0XHRpZiAodHlwZW9mIHdhaXRpbmdbaWRdID09PSAnZnVuY3Rpb24nKSB3YWl0aW5nW2lkXSA9IFt3YWl0aW5nW2lkXSwgY3VycmVudENhbGxiYWNrXTtcblx0XHRcdGVsc2Ugd2FpdGluZ1tpZF0ucHVzaChjdXJyZW50Q2FsbGJhY2spO1xuXHRcdFx0Y3VycmVudENhbGxiYWNrID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXNvbHZlZCwgYXNzdXJlIG5leHQgdGljayBpbnZvY2F0aW9uXG5cdFx0Y2IgPSBjdXJyZW50Q2FsbGJhY2s7XG5cdFx0Y29udGV4dCA9IGN1cnJlbnRDb250ZXh0O1xuXHRcdGFyZ3MgPSBjdXJyZW50QXJncztcblx0XHRjdXJyZW50Q2FsbGJhY2sgPSBjdXJyZW50Q29udGV4dCA9IGN1cnJlbnRBcmdzID0gbnVsbDtcblx0XHRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgZGF0YTtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBpZCkpIHtcblx0XHRcdFx0ZGF0YSA9IGNhY2hlW2lkXTtcblx0XHRcdFx0Y29uZi5lbWl0KCdnZXRhc3luYycsIGlkLCBhcmdzLCBjb250ZXh0KTtcblx0XHRcdFx0YXBwbHkuY2FsbChjYiwgZGF0YS5jb250ZXh0LCBkYXRhLmFyZ3MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUHVyZ2VkIGluIGEgbWVhbnRpbWUsIHdlIHNob3VsZG4ndCByZWx5IG9uIGNhY2hlZCB2YWx1ZSwgcmVjYWxsXG5cdFx0XHRcdGN1cnJlbnRDYWxsYmFjayA9IGNiO1xuXHRcdFx0XHRjdXJyZW50Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdGN1cnJlbnRBcmdzID0gYXJncztcblx0XHRcdFx0YmFzZS5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gTm90IGZyb20gY2FjaGVcblx0Y29uZi5vcmlnaW5hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYXJncywgY2IsIG9yaWdDYiwgcmVzdWx0O1xuXHRcdGlmICghY3VycmVudENhbGxiYWNrKSByZXR1cm4gYXBwbHkuY2FsbChvcmlnaW5hbCwgdGhpcywgYXJndW1lbnRzKTtcblx0XHRhcmdzID0gYUZyb20oYXJndW1lbnRzKTtcblx0XHRjYiA9IGZ1bmN0aW9uIHNlbGYoZXJyKSB7XG5cdFx0XHR2YXIgY2IsIGFyZ3MsIGlkID0gc2VsZi5pZDtcblx0XHRcdGlmIChpZCA9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFNob3VsZG4ndCBoYXBwZW4sIG1lYW5zIGFzeW5jIGNhbGxiYWNrIHdhcyBjYWxsZWQgc3luYyB3YXlcblx0XHRcdFx0bmV4dFRpY2soYXBwbHkuYmluZChzZWxmLCB0aGlzLCBhcmd1bWVudHMpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNlbGYuaWQ7XG5cdFx0XHRjYiA9IHdhaXRpbmdbaWRdO1xuXHRcdFx0ZGVsZXRlIHdhaXRpbmdbaWRdO1xuXHRcdFx0aWYgKCFjYikge1xuXHRcdFx0XHQvLyBBbHJlYWR5IHByb2Nlc3NlZCxcblx0XHRcdFx0Ly8gb3V0Y29tZSBvZiByYWNlIGNvbmRpdGlvbjogYXN5bmNGbigxLCBjYiksIGFzeW5jRm4uY2xlYXIoKSwgYXN5bmNGbigxLCBjYilcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0YXJncyA9IGFGcm9tKGFyZ3VtZW50cyk7XG5cdFx0XHRpZiAoY29uZi5oYXMoaWQpKSB7XG5cdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRjb25mLmRlbGV0ZShpZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FjaGVbaWRdID0geyBjb250ZXh0OiB0aGlzLCBhcmdzOiBhcmdzIH07XG5cdFx0XHRcdFx0Y29uZi5lbWl0KCdzZXRhc3luYycsIGlkLCAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSA/IDEgOiBjYi5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGFwcGx5LmNhbGwoY2IsIHRoaXMsIGFyZ3MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2IuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmVzdWx0ID0gYXBwbHkuY2FsbChjYiwgdGhpcywgYXJncyk7IH0sIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHRcdG9yaWdDYiA9IGN1cnJlbnRDYWxsYmFjaztcblx0XHRjdXJyZW50Q2FsbGJhY2sgPSBjdXJyZW50Q29udGV4dCA9IGN1cnJlbnRBcmdzID0gbnVsbDtcblx0XHRhcmdzLnB1c2goY2IpO1xuXHRcdHJlc3VsdCA9IGFwcGx5LmNhbGwob3JpZ2luYWwsIHRoaXMsIGFyZ3MpO1xuXHRcdGNiLmNiID0gb3JpZ0NiO1xuXHRcdGN1cnJlbnRDYWxsYmFjayA9IGNiO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gQWZ0ZXIgbm90IGZyb20gY2FjaGUgY2FsbFxuXHRjb25mLm9uKCdzZXQnLCBmdW5jdGlvbiAoaWQpIHtcblx0XHRpZiAoIWN1cnJlbnRDYWxsYmFjaykge1xuXHRcdFx0Y29uZi5kZWxldGUoaWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAod2FpdGluZ1tpZF0pIHtcblx0XHRcdC8vIFJhY2UgY29uZGl0aW9uOiBhc3luY0ZuKDEsIGNiKSwgYXN5bmNGbi5jbGVhcigpLCBhc3luY0ZuKDEsIGNiKVxuXHRcdFx0aWYgKHR5cGVvZiB3YWl0aW5nW2lkXSA9PT0gJ2Z1bmN0aW9uJykgd2FpdGluZ1tpZF0gPSBbd2FpdGluZ1tpZF0sIGN1cnJlbnRDYWxsYmFjay5jYl07XG5cdFx0XHRlbHNlIHdhaXRpbmdbaWRdLnB1c2goY3VycmVudENhbGxiYWNrLmNiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2FpdGluZ1tpZF0gPSBjdXJyZW50Q2FsbGJhY2suY2I7XG5cdFx0fVxuXHRcdGRlbGV0ZSBjdXJyZW50Q2FsbGJhY2suY2I7XG5cdFx0Y3VycmVudENhbGxiYWNrLmlkID0gaWQ7XG5cdFx0Y3VycmVudENhbGxiYWNrID0gbnVsbDtcblx0fSk7XG5cblx0Ly8gT24gZGVsZXRlXG5cdGNvbmYub24oJ2RlbGV0ZScsIGZ1bmN0aW9uIChpZCkge1xuXHRcdHZhciByZXN1bHQ7XG5cdFx0Ly8gSWYgZmFsc2UsIHdlIGRvbid0IGhhdmUgdmFsdWUgeWV0LCBzbyB3ZSBhc3N1bWUgdGhhdCBpbnRlbnRpb24gaXMgbm90XG5cdFx0Ly8gdG8gbWVtb2l6ZSB0aGlzIGNhbGwuIEFmdGVyIHZhbHVlIGlzIG9idGFpbmVkIHdlIGRvbid0IGNhY2hlIGl0IGJ1dFxuXHRcdC8vIGdyYWNlZnVsbHkgcGFzcyB0byBjYWxsYmFja1xuXHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHdhaXRpbmcsIGlkKSkgcmV0dXJuO1xuXHRcdGlmICghY2FjaGVbaWRdKSByZXR1cm47XG5cdFx0cmVzdWx0ID0gY2FjaGVbaWRdO1xuXHRcdGRlbGV0ZSBjYWNoZVtpZF07XG5cdFx0Y29uZi5lbWl0KCdkZWxldGVhc3luYycsIGlkLCByZXN1bHQpO1xuXHR9KTtcblxuXHQvLyBPbiBjbGVhclxuXHRjb25mLm9uKCdjbGVhcicsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb2xkQ2FjaGUgPSBjYWNoZTtcblx0XHRjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0XHRjb25mLmVtaXQoJ2NsZWFyYXN5bmMnLCBvbGRDYWNoZSk7XG5cdH0pO1xufTtcbiIsIi8vIENhbGwgZGlzcG9zZSBjYWxsYmFjayBvbiBlYWNoIGNhY2hlIHB1cmdlXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxhYmxlICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG4gICwgZm9yRWFjaCAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2Zvci1lYWNoJylcbiAgLCBleHRlbnNpb25zID0gcmVxdWlyZSgnLi4vbGliL3JlZ2lzdGVyZWQtZXh0ZW5zaW9ucycpXG5cbiAgLCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZSwgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbmV4dGVuc2lvbnMuZGlzcG9zZSA9IGZ1bmN0aW9uIChkaXNwb3NlLCBjb25mLCBvcHRpb25zKSB7XG5cdHZhciBkZWw7XG5cdGNhbGxhYmxlKGRpc3Bvc2UpO1xuXHRpZiAob3B0aW9ucy5hc3luYyAmJiBleHRlbnNpb25zLmFzeW5jKSB7XG5cdFx0Y29uZi5vbignZGVsZXRlYXN5bmMnLCBkZWwgPSBmdW5jdGlvbiAoaWQsIHJlc3VsdCkge1xuXHRcdFx0YXBwbHkuY2FsbChkaXNwb3NlLCBudWxsLCBzbGljZS5jYWxsKHJlc3VsdC5hcmdzLCAxKSk7XG5cdFx0fSk7XG5cdFx0Y29uZi5vbignY2xlYXJhc3luYycsIGZ1bmN0aW9uIChjYWNoZSkge1xuXHRcdFx0Zm9yRWFjaChjYWNoZSwgZnVuY3Rpb24gKHJlc3VsdCwgaWQpIHsgZGVsKGlkLCByZXN1bHQpOyB9KTtcblx0XHR9KTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uZi5vbignZGVsZXRlJywgZGVsID0gZnVuY3Rpb24gKGlkLCByZXN1bHQpIHsgZGlzcG9zZShyZXN1bHQpOyB9KTtcblx0Y29uZi5vbignY2xlYXInLCBmdW5jdGlvbiAoY2FjaGUpIHtcblx0XHRmb3JFYWNoKGNhY2hlLCBmdW5jdGlvbiAocmVzdWx0LCBpZCkgeyBkZWwoaWQsIHJlc3VsdCk7IH0pO1xuXHR9KTtcbn07XG4iLCIvLyBUaW1lb3V0IGNhY2hlZCB2YWx1ZXNcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYUZyb20gICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvZnJvbScpXG4gICwgbm9vcCAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvZnVuY3Rpb24vbm9vcCcpXG4gICwgZm9yRWFjaCAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2Zvci1lYWNoJylcbiAgLCB0aW1lb3V0ICAgID0gcmVxdWlyZSgndGltZXJzLWV4dC92YWxpZC10aW1lb3V0JylcbiAgLCBleHRlbnNpb25zID0gcmVxdWlyZSgnLi4vbGliL3JlZ2lzdGVyZWQtZXh0ZW5zaW9ucycpXG5cbiAgLCBtYXggPSBNYXRoLm1heCwgbWluID0gTWF0aC5taW4sIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbmV4dGVuc2lvbnMubWF4QWdlID0gZnVuY3Rpb24gKG1heEFnZSwgY29uZiwgb3B0aW9ucykge1xuXHR2YXIgdGltZW91dHMsIHBvc3RmaXgsIHByZUZldGNoQWdlLCBwcmVGZXRjaFRpbWVvdXRzO1xuXG5cdG1heEFnZSA9IHRpbWVvdXQobWF4QWdlKTtcblx0aWYgKCFtYXhBZ2UpIHJldHVybjtcblxuXHR0aW1lb3V0cyA9IGNyZWF0ZShudWxsKTtcblx0cG9zdGZpeCA9IChvcHRpb25zLmFzeW5jICYmIGV4dGVuc2lvbnMuYXN5bmMpID8gJ2FzeW5jJyA6ICcnO1xuXHRjb25mLm9uKCdzZXQnICsgcG9zdGZpeCwgZnVuY3Rpb24gKGlkKSB7XG5cdFx0dGltZW91dHNbaWRdID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGNvbmYuZGVsZXRlKGlkKTsgfSwgbWF4QWdlKTtcblx0XHRpZiAoIXByZUZldGNoVGltZW91dHMpIHJldHVybjtcblx0XHRpZiAocHJlRmV0Y2hUaW1lb3V0c1tpZF0pIGNsZWFyVGltZW91dChwcmVGZXRjaFRpbWVvdXRzW2lkXSk7XG5cdFx0cHJlRmV0Y2hUaW1lb3V0c1tpZF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGRlbGV0ZSBwcmVGZXRjaFRpbWVvdXRzW2lkXTtcblx0XHR9LCBwcmVGZXRjaEFnZSk7XG5cdH0pO1xuXHRjb25mLm9uKCdkZWxldGUnICsgcG9zdGZpeCwgZnVuY3Rpb24gKGlkKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRzW2lkXSk7XG5cdFx0ZGVsZXRlIHRpbWVvdXRzW2lkXTtcblx0XHRpZiAoIXByZUZldGNoVGltZW91dHMpIHJldHVybjtcblx0XHRjbGVhclRpbWVvdXQocHJlRmV0Y2hUaW1lb3V0c1tpZF0pO1xuXHRcdGRlbGV0ZSBwcmVGZXRjaFRpbWVvdXRzW2lkXTtcblx0fSk7XG5cblx0aWYgKG9wdGlvbnMucHJlRmV0Y2gpIHtcblx0XHRpZiAoKG9wdGlvbnMucHJlRmV0Y2ggPT09IHRydWUpIHx8IGlzTmFOKG9wdGlvbnMucHJlRmV0Y2gpKSB7XG5cdFx0XHRwcmVGZXRjaEFnZSA9IDAuMzMzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmVGZXRjaEFnZSA9IG1heChtaW4oTnVtYmVyKG9wdGlvbnMucHJlRmV0Y2gpLCAxKSwgMCk7XG5cdFx0fVxuXHRcdGlmIChwcmVGZXRjaEFnZSkge1xuXHRcdFx0cHJlRmV0Y2hUaW1lb3V0cyA9IHt9O1xuXHRcdFx0cHJlRmV0Y2hBZ2UgPSAoMSAtIHByZUZldGNoQWdlKSAqIG1heEFnZTtcblx0XHRcdGNvbmYub24oJ2dldCcgKyBwb3N0Zml4LCBmdW5jdGlvbiAoaWQsIGFyZ3MsIGNvbnRleHQpIHtcblx0XHRcdFx0aWYgKCFwcmVGZXRjaFRpbWVvdXRzW2lkXSkge1xuXHRcdFx0XHRcdHByZUZldGNoVGltZW91dHNbaWRdID0gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHByZUZldGNoVGltZW91dHNbaWRdO1xuXHRcdFx0XHRcdFx0Y29uZi5kZWxldGUoaWQpO1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuYXN5bmMpIHtcblx0XHRcdFx0XHRcdFx0YXJncyA9IGFGcm9tKGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHRhcmdzLnB1c2gobm9vcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25mLm1lbW9pemVkLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHRcdH0sIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjb25mLm9uKCdjbGVhcicgKyBwb3N0Zml4LCBmdW5jdGlvbiAoKSB7XG5cdFx0Zm9yRWFjaCh0aW1lb3V0cywgZnVuY3Rpb24gKGlkKSB7IGNsZWFyVGltZW91dChpZCk7IH0pO1xuXHRcdHRpbWVvdXRzID0ge307XG5cdFx0aWYgKHByZUZldGNoVGltZW91dHMpIHtcblx0XHRcdGZvckVhY2gocHJlRmV0Y2hUaW1lb3V0cywgZnVuY3Rpb24gKGlkKSB7IGNsZWFyVGltZW91dChpZCk7IH0pO1xuXHRcdFx0cHJlRmV0Y2hUaW1lb3V0cyA9IHt9O1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLy8gTGltaXQgY2FjaGUgc2l6ZSwgTFJVIChsZWFzdCByZWNlbnRseSB1c2VkKSBhbGdvcml0aG0uXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHRvUG9zSW50ZWdlciA9IHJlcXVpcmUoJ2VzNS1leHQvbnVtYmVyL3RvLXBvcy1pbnRlZ2VyJylcbiAgLCBscnVRdWV1ZSAgICAgPSByZXF1aXJlKCdscnUtcXVldWUnKVxuICAsIGV4dGVuc2lvbnMgICA9IHJlcXVpcmUoJy4uL2xpYi9yZWdpc3RlcmVkLWV4dGVuc2lvbnMnKTtcblxuZXh0ZW5zaW9ucy5tYXggPSBmdW5jdGlvbiAobWF4LCBjb25mLCBvcHRpb25zKSB7XG5cdHZhciBwb3N0Zml4LCBxdWV1ZSwgaGl0O1xuXG5cdG1heCA9IHRvUG9zSW50ZWdlcihtYXgpO1xuXHRpZiAoIW1heCkgcmV0dXJuO1xuXG5cdHF1ZXVlID0gbHJ1UXVldWUobWF4KTtcblx0cG9zdGZpeCA9IChvcHRpb25zLmFzeW5jICYmIGV4dGVuc2lvbnMuYXN5bmMpID8gJ2FzeW5jJyA6ICcnO1xuXG5cdGNvbmYub24oJ3NldCcgKyBwb3N0Zml4LCBoaXQgPSBmdW5jdGlvbiAoaWQpIHtcblx0XHRpZCA9IHF1ZXVlLmhpdChpZCk7XG5cdFx0aWYgKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XHRjb25mLmRlbGV0ZShpZCk7XG5cdH0pO1xuXHRjb25mLm9uKCdnZXQnICsgcG9zdGZpeCwgaGl0KTtcblx0Y29uZi5vbignZGVsZXRlJyArIHBvc3RmaXgsIHF1ZXVlLmRlbGV0ZSk7XG5cdGNvbmYub24oJ2NsZWFyJyArIHBvc3RmaXgsIHF1ZXVlLmNsZWFyKTtcbn07XG4iLCIvLyBSZWZlcmVuY2UgY291bnRlciwgdXNlZnVsIGZvciBnYXJiYWdlIGNvbGxlY3RvciBsaWtlIGZ1bmN0aW9uYWxpdHlcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIGV4dGVuc2lvbnMgPSByZXF1aXJlKCcuLi9saWIvcmVnaXN0ZXJlZC1leHRlbnNpb25zJylcblxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcblxuZXh0ZW5zaW9ucy5yZWZDb3VudGVyID0gZnVuY3Rpb24gKGlnbm9yZSwgY29uZiwgb3B0aW9ucykge1xuXHR2YXIgY2FjaGUsIHBvc3RmaXg7XG5cblx0Y2FjaGUgPSBjcmVhdGUobnVsbCk7XG5cdHBvc3RmaXggPSAob3B0aW9ucy5hc3luYyAmJiBleHRlbnNpb25zLmFzeW5jKSA/ICdhc3luYycgOiAnJztcblxuXHRjb25mLm9uKCdzZXQnICsgcG9zdGZpeCwgZnVuY3Rpb24gKGlkLCBsZW5ndGgpIHsgY2FjaGVbaWRdID0gbGVuZ3RoIHx8IDE7IH0pO1xuXHRjb25mLm9uKCdnZXQnICsgcG9zdGZpeCwgZnVuY3Rpb24gKGlkKSB7ICsrY2FjaGVbaWRdOyB9KTtcblx0Y29uZi5vbignZGVsZXRlJyArIHBvc3RmaXgsIGZ1bmN0aW9uIChpZCkgeyBkZWxldGUgY2FjaGVbaWRdOyB9KTtcblx0Y29uZi5vbignY2xlYXInICsgcG9zdGZpeCwgZnVuY3Rpb24gKCkgeyBjYWNoZSA9IHt9OyB9KTtcblxuXHRkZWZpbmVQcm9wZXJ0aWVzKGNvbmYubWVtb2l6ZWQsIHtcblx0XHRkZWxldGVSZWY6IGQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGlkID0gY29uZi5nZXQoYXJndW1lbnRzKTtcblx0XHRcdGlmIChpZCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdFx0XHRpZiAoIWNhY2hlW2lkXSkgcmV0dXJuIG51bGw7XG5cdFx0XHRpZiAoIS0tY2FjaGVbaWRdKSB7XG5cdFx0XHRcdGNvbmYuZGVsZXRlKGlkKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSksXG5cdFx0Z2V0UmVmQ291bnQ6IGQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGlkID0gY29uZi5nZXQoYXJndW1lbnRzKTtcblx0XHRcdGlmIChpZCA9PT0gbnVsbCkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIWNhY2hlW2lkXSkgcmV0dXJuIDA7XG5cdFx0XHRyZXR1cm4gY2FjaGVbaWRdO1xuXHRcdH0pXG5cdH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG5vcm1hbGl6ZU9wdHMgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucycpXG4gICwgcmVzb2x2ZUxlbmd0aCA9IHJlcXVpcmUoJy4vbGliL3Jlc29sdmUtbGVuZ3RoJylcbiAgLCBwbGFpbiAgICAgICAgID0gcmVxdWlyZSgnLi9wbGFpbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbi8qLCBvcHRpb25zKi8pIHtcblx0dmFyIG9wdGlvbnMgPSBub3JtYWxpemVPcHRzKGFyZ3VtZW50c1sxXSksIGxlbmd0aDtcblxuXHRpZiAoIW9wdGlvbnMubm9ybWFsaXplcikge1xuXHRcdGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoID0gcmVzb2x2ZUxlbmd0aChvcHRpb25zLmxlbmd0aCwgZm4ubGVuZ3RoLCBvcHRpb25zLmFzeW5jKTtcblx0XHRpZiAobGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5wcmltaXRpdmUpIHtcblx0XHRcdFx0aWYgKGxlbmd0aCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRvcHRpb25zLm5vcm1hbGl6ZXIgPSByZXF1aXJlKCcuL25vcm1hbGl6ZXJzL3ByaW1pdGl2ZScpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRvcHRpb25zLm5vcm1hbGl6ZXIgPSByZXF1aXJlKCcuL25vcm1hbGl6ZXJzL2dldC1wcmltaXRpdmUtZml4ZWQnKShsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobGVuZ3RoID09PSBmYWxzZSkgb3B0aW9ucy5ub3JtYWxpemVyID0gcmVxdWlyZSgnLi9ub3JtYWxpemVycy9nZXQnKSgpO1xuXHRcdFx0XHRlbHNlIGlmIChsZW5ndGggPT09IDEpIG9wdGlvbnMubm9ybWFsaXplciA9IHJlcXVpcmUoJy4vbm9ybWFsaXplcnMvZ2V0LTEnKSgpO1xuXHRcdFx0XHRlbHNlIG9wdGlvbnMubm9ybWFsaXplciA9IHJlcXVpcmUoJy4vbm9ybWFsaXplcnMvZ2V0LWZpeGVkJykobGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBc3N1cmUgZXh0ZW5zaW9uc1xuXHRpZiAob3B0aW9ucy5hc3luYykgcmVxdWlyZSgnLi9leHQvYXN5bmMnKTtcblx0aWYgKG9wdGlvbnMuZGlzcG9zZSkgcmVxdWlyZSgnLi9leHQvZGlzcG9zZScpO1xuXHRpZiAob3B0aW9ucy5tYXhBZ2UpIHJlcXVpcmUoJy4vZXh0L21heC1hZ2UnKTtcblx0aWYgKG9wdGlvbnMubWF4KSByZXF1aXJlKCcuL2V4dC9tYXgnKTtcblx0aWYgKG9wdGlvbnMucmVmQ291bnRlcikgcmVxdWlyZSgnLi9leHQvcmVmLWNvdW50ZXInKTtcblxuXHRyZXR1cm4gcGxhaW4oZm4sIG9wdGlvbnMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGN1c3RvbUVycm9yICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2Vycm9yL2N1c3RvbScpXG4gICwgZGVmaW5lTGVuZ3RoICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvZnVuY3Rpb24vX2RlZmluZS1sZW5ndGgnKVxuICAsIGQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBlZSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnZXZlbnQtZW1pdHRlcicpLm1ldGhvZHNcbiAgLCByZXNvbHZlUmVzb2x2ZSAgID0gcmVxdWlyZSgnLi9yZXNvbHZlLXJlc29sdmUnKVxuICAsIHJlc29sdmVOb3JtYWxpemUgPSByZXF1aXJlKCcuL3Jlc29sdmUtbm9ybWFsaXplJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcbiAgLCBvbiA9IGVlLm9uLCBlbWl0ID0gZWUuZW1pdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCwgb3B0aW9ucykge1xuXHR2YXIgY2FjaGUgPSBjcmVhdGUobnVsbCksIGNvbmYsIG1lbUxlbmd0aCwgZ2V0LCBzZXQsIGRlbCwgY2xlYXIsIGV4dERlbCwgbm9ybWFsaXplclxuXHQgICwgZ2V0TGlzdGVuZXJzLCBzZXRMaXN0ZW5lcnMsIGRlbGV0ZUxpc3RlbmVycywgbWVtb2l6ZWQsIHJlc29sdmU7XG5cdGlmIChsZW5ndGggIT09IGZhbHNlKSBtZW1MZW5ndGggPSBsZW5ndGg7XG5cdGVsc2UgaWYgKGlzTmFOKG9yaWdpbmFsLmxlbmd0aCkpIG1lbUxlbmd0aCA9IDE7XG5cdGVsc2UgbWVtTGVuZ3RoID0gb3JpZ2luYWwubGVuZ3RoO1xuXG5cdGlmIChvcHRpb25zLm5vcm1hbGl6ZXIpIHtcblx0XHRub3JtYWxpemVyID0gcmVzb2x2ZU5vcm1hbGl6ZShvcHRpb25zLm5vcm1hbGl6ZXIpO1xuXHRcdGdldCA9IG5vcm1hbGl6ZXIuZ2V0O1xuXHRcdHNldCA9IG5vcm1hbGl6ZXIuc2V0O1xuXHRcdGRlbCA9IG5vcm1hbGl6ZXIuZGVsZXRlO1xuXHRcdGNsZWFyID0gbm9ybWFsaXplci5jbGVhcjtcblx0fVxuXHRpZiAob3B0aW9ucy5yZXNvbHZlcnMgIT0gbnVsbCkgcmVzb2x2ZSA9IHJlc29sdmVSZXNvbHZlKG9wdGlvbnMucmVzb2x2ZXJzKTtcblxuXHRpZiAoZ2V0KSB7XG5cdFx0bWVtb2l6ZWQgPSBkZWZpbmVMZW5ndGgoZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0dmFyIGlkLCByZXN1bHQsIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHRpZiAocmVzb2x2ZSkgYXJncyA9IHJlc29sdmUoYXJncyk7XG5cdFx0XHRpZCA9IGdldChhcmdzKTtcblx0XHRcdGlmIChpZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaWQpKSB7XG5cdFx0XHRcdFx0aWYgKGdldExpc3RlbmVycykgY29uZi5lbWl0KCdnZXQnLCBpZCwgYXJncywgdGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlW2lkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXN1bHQgPSBjYWxsLmNhbGwob3JpZ2luYWwsIHRoaXMsIGFyZyk7XG5cdFx0XHRlbHNlIHJlc3VsdCA9IGFwcGx5LmNhbGwob3JpZ2luYWwsIHRoaXMsIGFyZ3MpO1xuXHRcdFx0aWYgKGlkID09PSBudWxsKSB7XG5cdFx0XHRcdGlkID0gZ2V0KGFyZ3MpO1xuXHRcdFx0XHRpZiAoaWQgIT09IG51bGwpIHRocm93IGN1c3RvbUVycm9yKFwiQ2lyY3VsYXIgaW52b2NhdGlvblwiLCAnQ0lSQ1VMQVJfSU5WT0NBVElPTicpO1xuXHRcdFx0XHRpZCA9IHNldChhcmdzKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaWQpKSB7XG5cdFx0XHRcdHRocm93IGN1c3RvbUVycm9yKFwiQ2lyY3VsYXIgaW52b2NhdGlvblwiLCAnQ0lSQ1VMQVJfSU5WT0NBVElPTicpO1xuXHRcdFx0fVxuXHRcdFx0Y2FjaGVbaWRdID0gcmVzdWx0O1xuXHRcdFx0aWYgKHNldExpc3RlbmVycykgY29uZi5lbWl0KCdzZXQnLCBpZCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sIG1lbUxlbmd0aCk7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0bWVtb2l6ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsICdkYXRhJykpIHtcblx0XHRcdFx0aWYgKGdldExpc3RlbmVycykgY29uZi5lbWl0KCdnZXQnLCAnZGF0YScsIGFyZ3VtZW50cywgdGhpcyk7XG5cdFx0XHRcdHJldHVybiBjYWNoZS5kYXRhO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXN1bHQgPSBjYWxsLmNhbGwob3JpZ2luYWwsIHRoaXMpO1xuXHRcdFx0ZWxzZSByZXN1bHQgPSBhcHBseS5jYWxsKG9yaWdpbmFsLCB0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsICdkYXRhJykpIHtcblx0XHRcdFx0dGhyb3cgY3VzdG9tRXJyb3IoXCJDaXJjdWxhciBpbnZvY2F0aW9uXCIsICdDSVJDVUxBUl9JTlZPQ0FUSU9OJyk7XG5cdFx0XHR9XG5cdFx0XHRjYWNoZS5kYXRhID0gcmVzdWx0O1xuXHRcdFx0aWYgKHNldExpc3RlbmVycykgY29uZi5lbWl0KCdzZXQnLCAnZGF0YScpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdG1lbW9pemVkID0gZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0dmFyIHJlc3VsdCwgYXJncyA9IGFyZ3VtZW50cywgaWQ7XG5cdFx0XHRpZiAocmVzb2x2ZSkgYXJncyA9IHJlc29sdmUoYXJndW1lbnRzKTtcblx0XHRcdGlkID0gU3RyaW5nKGFyZ3NbMF0pO1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKSkge1xuXHRcdFx0XHRpZiAoZ2V0TGlzdGVuZXJzKSBjb25mLmVtaXQoJ2dldCcsIGlkLCBhcmdzLCB0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGNhY2hlW2lkXTtcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmVzdWx0ID0gY2FsbC5jYWxsKG9yaWdpbmFsLCB0aGlzLCBhcmdzWzBdKTtcblx0XHRcdGVsc2UgcmVzdWx0ID0gYXBwbHkuY2FsbChvcmlnaW5hbCwgdGhpcywgYXJncyk7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaWQpKSB7XG5cdFx0XHRcdHRocm93IGN1c3RvbUVycm9yKFwiQ2lyY3VsYXIgaW52b2NhdGlvblwiLCAnQ0lSQ1VMQVJfSU5WT0NBVElPTicpO1xuXHRcdFx0fVxuXHRcdFx0Y2FjaGVbaWRdID0gcmVzdWx0O1xuXHRcdFx0aWYgKHNldExpc3RlbmVycykgY29uZi5lbWl0KCdzZXQnLCBpZCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH1cblx0Y29uZiA9IHtcblx0XHRvcmlnaW5hbDogb3JpZ2luYWwsXG5cdFx0bWVtb2l6ZWQ6IG1lbW9pemVkLFxuXHRcdGdldDogZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdGlmIChyZXNvbHZlKSBhcmdzID0gcmVzb2x2ZShhcmdzKTtcblx0XHRcdGlmIChnZXQpIHJldHVybiBnZXQoYXJncyk7XG5cdFx0XHRyZXR1cm4gU3RyaW5nKGFyZ3NbMF0pO1xuXHRcdH0sXG5cdFx0aGFzOiBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlkKTsgfSxcblx0XHRkZWxldGU6IGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICghaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaWQpKSByZXR1cm47XG5cdFx0XHRpZiAoZGVsKSBkZWwoaWQpO1xuXHRcdFx0cmVzdWx0ID0gY2FjaGVbaWRdO1xuXHRcdFx0ZGVsZXRlIGNhY2hlW2lkXTtcblx0XHRcdGlmIChkZWxldGVMaXN0ZW5lcnMpIGNvbmYuZW1pdCgnZGVsZXRlJywgaWQsIHJlc3VsdCk7XG5cdFx0fSxcblx0XHRjbGVhcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG9sZENhY2hlID0gY2FjaGU7XG5cdFx0XHRpZiAoY2xlYXIpIGNsZWFyKCk7XG5cdFx0XHRjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0XHRcdGNvbmYuZW1pdCgnY2xlYXInLCBvbGRDYWNoZSk7XG5cdFx0fSxcblx0XHRvbjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdFx0XHRpZiAodHlwZSA9PT0gJ2dldCcpIGdldExpc3RlbmVycyA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlID09PSAnc2V0Jykgc2V0TGlzdGVuZXJzID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGUgPT09ICdkZWxldGUnKSBkZWxldGVMaXN0ZW5lcnMgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIG9uLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIpO1xuXHRcdH0sXG5cdFx0ZW1pdDogZW1pdCxcblx0XHR1cGRhdGVFbnY6IGZ1bmN0aW9uICgpIHsgb3JpZ2luYWwgPSBjb25mLm9yaWdpbmFsOyB9XG5cdH07XG5cdGlmIChnZXQpIHtcblx0XHRleHREZWwgPSBkZWZpbmVMZW5ndGgoZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0dmFyIGlkLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0aWYgKHJlc29sdmUpIGFyZ3MgPSByZXNvbHZlKGFyZ3MpO1xuXHRcdFx0aWQgPSBnZXQoYXJncyk7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwpIHJldHVybjtcblx0XHRcdGNvbmYuZGVsZXRlKGlkKTtcblx0XHR9LCBtZW1MZW5ndGgpO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdGV4dERlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmYuZGVsZXRlKCdkYXRhJyk7IH07XG5cdH0gZWxzZSB7XG5cdFx0ZXh0RGVsID0gZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0aWYgKHJlc29sdmUpIGFyZyA9IHJlc29sdmUoYXJndW1lbnRzKVswXTtcblx0XHRcdHJldHVybiBjb25mLmRlbGV0ZShhcmcpO1xuXHRcdH07XG5cdH1cblx0ZGVmaW5lUHJvcGVydGllcyhtZW1vaXplZCwge1xuXHRcdF9fbWVtb2l6ZWRfXzogZCh0cnVlKSxcblx0XHRkZWxldGU6IGQoZXh0RGVsKSxcblx0XHRjbGVhcjogZChjb25mLmNsZWFyKVxuXHR9KTtcblx0cmV0dXJuIGNvbmY7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9Qb3NJbnQgPSByZXF1aXJlKCdlczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzTGVuZ3RoLCBmbkxlbmd0aCwgaXNBc3luYykge1xuXHR2YXIgbGVuZ3RoO1xuXHRpZiAoaXNOYU4ob3B0c0xlbmd0aCkpIHtcblx0XHRsZW5ndGggPSBmbkxlbmd0aDtcblx0XHRpZiAoIShsZW5ndGggPj0gMCkpIHJldHVybiAxO1xuXHRcdGlmIChpc0FzeW5jICYmIGxlbmd0aCkgcmV0dXJuIGxlbmd0aCAtIDE7XG5cdFx0cmV0dXJuIGxlbmd0aDtcblx0fVxuXHRpZiAob3B0c0xlbmd0aCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRvUG9zSW50KG9wdHNMZW5ndGgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxhYmxlID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlck5vcm1hbGl6ZXIpIHtcblx0dmFyIG5vcm1hbGl6ZXI7XG5cdGlmICh0eXBlb2YgdXNlck5vcm1hbGl6ZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiB7IHNldDogdXNlck5vcm1hbGl6ZXIsIGdldDogdXNlck5vcm1hbGl6ZXIgfTtcblx0bm9ybWFsaXplciA9IHsgZ2V0OiBjYWxsYWJsZSh1c2VyTm9ybWFsaXplci5nZXQpIH07XG5cdGlmICh1c2VyTm9ybWFsaXplci5zZXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdG5vcm1hbGl6ZXIuc2V0ID0gY2FsbGFibGUodXNlck5vcm1hbGl6ZXIuc2V0KTtcblx0XHRub3JtYWxpemVyLmRlbGV0ZSA9IGNhbGxhYmxlKHVzZXJOb3JtYWxpemVyLmRlbGV0ZSk7XG5cdFx0bm9ybWFsaXplci5jbGVhciA9IGNhbGxhYmxlKHVzZXJOb3JtYWxpemVyLmNsZWFyKTtcblx0XHRyZXR1cm4gbm9ybWFsaXplcjtcblx0fVxuXHRub3JtYWxpemVyLnNldCA9IG5vcm1hbGl6ZXIuZ2V0O1xuXHRyZXR1cm4gbm9ybWFsaXplcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b0FycmF5ICA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvdG8tYXJyYXknKVxuICAsIGNhbGxhYmxlID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuXG4gICwgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgLCByZXNvbHZlQXJncztcblxucmVzb2x2ZUFyZ3MgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKHIsIGkpIHtcblx0XHRyZXR1cm4gciA/IHIoYXJnc1tpXSkgOiBhcmdzW2ldO1xuXHR9KS5jb25jYXQoc2xpY2UuY2FsbChhcmdzLCB0aGlzLmxlbmd0aCkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG5cdHJlc29sdmVycyA9IHRvQXJyYXkocmVzb2x2ZXJzKTtcblx0cmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcblx0XHRpZiAociAhPSBudWxsKSBjYWxsYWJsZShyKTtcblx0fSk7XG5cdHJldHVybiByZXNvbHZlQXJncy5iaW5kKHJlc29sdmVycyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2Fzc2lnbicpXG4gICwgbm9ybWFsaXplT3B0cyA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zJylcbiAgLCBpc0NhbGxhYmxlICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUnKVxuICAsIGNvbnRhaW5zICAgICAgPSByZXF1aXJlKCdlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zJylcblxuICAsIGQ7XG5cbmQgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICgoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHx8ICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpKSB7XG5cdFx0b3B0aW9ucyA9IHZhbHVlO1xuXHRcdHZhbHVlID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuXHR9XG5cdGlmIChkc2NyID09IG51bGwpIHtcblx0XHRjID0gdyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0XHR3ID0gY29udGFpbnMuY2FsbChkc2NyLCAndycpO1xuXHR9XG5cblx0ZGVzYyA9IHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IGMsIGVudW1lcmFibGU6IGUsIHdyaXRhYmxlOiB3IH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSAnc3RyaW5nJykge1xuXHRcdG9wdGlvbnMgPSBzZXQ7XG5cdFx0c2V0ID0gZ2V0O1xuXHRcdGdldCA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1szXTtcblx0fVxuXHRpZiAoZ2V0ID09IG51bGwpIHtcblx0XHRnZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKHNldCA9PSBudWxsKSB7XG5cdFx0c2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKHNldCkpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9Qb3NJbnQgPSByZXF1aXJlKCcuLi8uLi9udW1iZXIvdG8tcG9zLWludGVnZXInKVxuICAsIHZhbHVlICAgID0gcmVxdWlyZSgnLi4vLi4vb2JqZWN0L3ZhbGlkLXZhbHVlJylcblxuICAsIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZlxuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGFicyA9IE1hdGguYWJzLCBmbG9vciA9IE1hdGguZmxvb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQvKiwgZnJvbUluZGV4Ki8pIHtcblx0dmFyIGksIGwsIGZyb21JbmRleCwgdmFsO1xuXHRpZiAoc2VhcmNoRWxlbWVudCA9PT0gc2VhcmNoRWxlbWVudCkgeyAvL2pzbGludDogaWdub3JlXG5cdFx0cmV0dXJuIGluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fVxuXG5cdGwgPSB0b1Bvc0ludCh2YWx1ZSh0aGlzKS5sZW5ndGgpO1xuXHRmcm9tSW5kZXggPSBhcmd1bWVudHNbMV07XG5cdGlmIChpc05hTihmcm9tSW5kZXgpKSBmcm9tSW5kZXggPSAwO1xuXHRlbHNlIGlmIChmcm9tSW5kZXggPj0gMCkgZnJvbUluZGV4ID0gZmxvb3IoZnJvbUluZGV4KTtcblx0ZWxzZSBmcm9tSW5kZXggPSB0b1Bvc0ludCh0aGlzLmxlbmd0aCkgLSBmbG9vcihhYnMoZnJvbUluZGV4KSk7XG5cblx0Zm9yIChpID0gZnJvbUluZGV4OyBpIDwgbDsgKytpKSB7XG5cdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwodGhpcywgaSkpIHtcblx0XHRcdHZhbCA9IHRoaXNbaV07XG5cdFx0XHRpZiAodmFsICE9PSB2YWwpIHJldHVybiBpOyAvL2pzbGludDogaWdub3JlXG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKClcblx0PyBBcnJheS5mcm9tXG5cdDogcmVxdWlyZSgnLi9zaGltJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgZnJvbSA9IEFycmF5LmZyb20sIGFyciwgcmVzdWx0O1xuXHRpZiAodHlwZW9mIGZyb20gIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0YXJyID0gWydyYXonLCAnZHdhJ107XG5cdHJlc3VsdCA9IGZyb20oYXJyKTtcblx0cmV0dXJuIEJvb2xlYW4ocmVzdWx0ICYmIChyZXN1bHQgIT09IGFycikgJiYgKHJlc3VsdFsxXSA9PT0gJ2R3YScpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpdGVyYXRvclN5bWJvbCA9IHJlcXVpcmUoJ2VzNi1zeW1ib2wnKS5pdGVyYXRvclxuICAsIGlzQXJndW1lbnRzICAgID0gcmVxdWlyZSgnLi4vLi4vZnVuY3Rpb24vaXMtYXJndW1lbnRzJylcbiAgLCBpc0Z1bmN0aW9uICAgICA9IHJlcXVpcmUoJy4uLy4uL2Z1bmN0aW9uL2lzLWZ1bmN0aW9uJylcbiAgLCB0b1Bvc0ludCAgICAgICA9IHJlcXVpcmUoJy4uLy4uL251bWJlci90by1wb3MtaW50ZWdlcicpXG4gICwgY2FsbGFibGUgICAgICAgPSByZXF1aXJlKCcuLi8uLi9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuICAsIHZhbGlkVmFsdWUgICAgID0gcmVxdWlyZSgnLi4vLi4vb2JqZWN0L3ZhbGlkLXZhbHVlJylcbiAgLCBpc1N0cmluZyAgICAgICA9IHJlcXVpcmUoJy4uLy4uL3N0cmluZy9pcy1zdHJpbmcnKVxuXG4gICwgaXNBcnJheSA9IEFycmF5LmlzQXJyYXksIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbFxuICAsIGRlc2MgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBudWxsIH1cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnKi8pIHtcblx0dmFyIG1hcEZuID0gYXJndW1lbnRzWzFdLCB0aGlzQXJnID0gYXJndW1lbnRzWzJdLCBDb25zdHJ1Y3RvciwgaSwgaiwgYXJyLCBsLCBjb2RlLCBpdGVyYXRvclxuXHQgICwgcmVzdWx0LCBnZXRJdGVyYXRvciwgdmFsdWU7XG5cblx0YXJyYXlMaWtlID0gT2JqZWN0KHZhbGlkVmFsdWUoYXJyYXlMaWtlKSk7XG5cblx0aWYgKG1hcEZuICE9IG51bGwpIGNhbGxhYmxlKG1hcEZuKTtcblx0aWYgKCF0aGlzIHx8ICh0aGlzID09PSBBcnJheSkgfHwgIWlzRnVuY3Rpb24odGhpcykpIHtcblx0XHQvLyBSZXN1bHQ6IFBsYWluIGFycmF5XG5cdFx0aWYgKCFtYXBGbikge1xuXHRcdFx0aWYgKGlzQXJndW1lbnRzKGFycmF5TGlrZSkpIHtcblx0XHRcdFx0Ly8gU291cmNlOiBBcmd1bWVudHNcblx0XHRcdFx0bCA9IGFycmF5TGlrZS5sZW5ndGg7XG5cdFx0XHRcdGlmIChsICE9PSAxKSByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgYXJyYXlMaWtlKTtcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRhcnJbMF0gPSBhcnJheUxpa2VbMF07XG5cdFx0XHRcdHJldHVybiBhcnI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0XHRcdC8vIFNvdXJjZTogQXJyYXlcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KGwgPSBhcnJheUxpa2UubGVuZ3RoKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7ICsraSkgYXJyW2ldID0gYXJyYXlMaWtlW2ldO1xuXHRcdFx0XHRyZXR1cm4gYXJyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRhcnIgPSBbXTtcblx0fSBlbHNlIHtcblx0XHQvLyBSZXN1bHQ6IE5vbiBwbGFpbiBhcnJheVxuXHRcdENvbnN0cnVjdG9yID0gdGhpcztcblx0fVxuXG5cdGlmICghaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0aWYgKChnZXRJdGVyYXRvciA9IGFycmF5TGlrZVtpdGVyYXRvclN5bWJvbF0pICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFNvdXJjZTogSXRlcmF0b3Jcblx0XHRcdGl0ZXJhdG9yID0gY2FsbGFibGUoZ2V0SXRlcmF0b3IpLmNhbGwoYXJyYXlMaWtlKTtcblx0XHRcdGlmIChDb25zdHJ1Y3RvcikgYXJyID0gbmV3IENvbnN0cnVjdG9yKCk7XG5cdFx0XHRyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRpID0gMDtcblx0XHRcdHdoaWxlICghcmVzdWx0LmRvbmUpIHtcblx0XHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgcmVzdWx0LnZhbHVlLCBpKSA6IHJlc3VsdC52YWx1ZTtcblx0XHRcdFx0aWYgKCFDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGFycltpXSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGksIGRlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcblx0XHRcdFx0KytpO1xuXHRcdFx0fVxuXHRcdFx0bCA9IGk7XG5cdFx0fSBlbHNlIGlmIChpc1N0cmluZyhhcnJheUxpa2UpKSB7XG5cdFx0XHQvLyBTb3VyY2U6IFN0cmluZ1xuXHRcdFx0bCA9IGFycmF5TGlrZS5sZW5ndGg7XG5cdFx0XHRpZiAoQ29uc3RydWN0b3IpIGFyciA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuXHRcdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyArK2kpIHtcblx0XHRcdFx0dmFsdWUgPSBhcnJheUxpa2VbaV07XG5cdFx0XHRcdGlmICgoaSArIDEpIDwgbCkge1xuXHRcdFx0XHRcdGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApO1xuXHRcdFx0XHRcdGlmICgoY29kZSA+PSAweEQ4MDApICYmIChjb2RlIDw9IDB4REJGRikpIHZhbHVlICs9IGFycmF5TGlrZVsrK2ldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHZhbHVlLCBqKSA6IHZhbHVlO1xuXHRcdFx0XHRpZiAoIUNvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdFx0YXJyW2pdID0gdmFsdWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGRlZmluZVByb3BlcnR5KGFyciwgaiwgZGVzYyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KytqO1xuXHRcdFx0fVxuXHRcdFx0bCA9IGo7XG5cdFx0fVxuXHR9XG5cdGlmIChsID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBTb3VyY2U6IGFycmF5IG9yIGFycmF5LWxpa2Vcblx0XHRsID0gdG9Qb3NJbnQoYXJyYXlMaWtlLmxlbmd0aCk7XG5cdFx0aWYgKENvbnN0cnVjdG9yKSBhcnIgPSBuZXcgQ29uc3RydWN0b3IobCk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuXHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgYXJyYXlMaWtlW2ldLCBpKSA6IGFycmF5TGlrZVtpXTtcblx0XHRcdGlmICghQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0YXJyW2ldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZXNjLnZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdGRlZmluZVByb3BlcnR5KGFyciwgaSwgZGVzYyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmIChDb25zdHJ1Y3Rvcikge1xuXHRcdGRlc2MudmFsdWUgPSBudWxsO1xuXHRcdGFyci5sZW5ndGggPSBsO1xuXHR9XG5cdHJldHVybiBhcnI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnJvbSA9IHJlcXVpcmUoJy4vZnJvbScpXG5cbiAgLCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG5cdHJldHVybiBpc0FycmF5KGFycmF5TGlrZSkgPyBhcnJheUxpa2UgOiBmcm9tKGFycmF5TGlrZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vb2JqZWN0L2Fzc2lnbicpXG5cbiAgLCBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZS8qLCBjb2RlLCBleHQqLykge1xuXHR2YXIgZXJyID0gbmV3IEVycm9yKCksIGNvZGUgPSBhcmd1bWVudHNbMV0sIGV4dCA9IGFyZ3VtZW50c1syXTtcblx0aWYgKGV4dCA9PSBudWxsKSB7XG5cdFx0aWYgKGNvZGUgJiYgKHR5cGVvZiBjb2RlID09PSAnb2JqZWN0JykpIHtcblx0XHRcdGV4dCA9IGNvZGU7XG5cdFx0XHRjb2RlID0gbnVsbDtcblx0XHR9XG5cdH1cblx0aWYgKGV4dCAhPSBudWxsKSBhc3NpZ24oZXJyLCBleHQpO1xuXHRlcnIubWVzc2FnZSA9IFN0cmluZyhtZXNzYWdlKTtcblx0aWYgKGNvZGUgIT0gbnVsbCkgZXJyLmNvZGUgPSBTdHJpbmcoY29kZSk7XG5cdGlmIChjYXB0dXJlU3RhY2tUcmFjZSkgY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBleHBvcnRzKTtcblx0cmV0dXJuIGVycjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1Bvc0ludCA9IHJlcXVpcmUoJy4uL251bWJlci90by1wb3MtaW50ZWdlcicpXG5cbiAgLCB0ZXN0ID0gZnVuY3Rpb24gKGEsIGIpIHt9LCBkZXNjLCBkZWZpbmVQcm9wZXJ0eVxuICAsIGdlbmVyYXRlLCBtaXhpbjtcblxudHJ5IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRlc3QsICdsZW5ndGgnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IGZhbHNlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogMSB9KTtcbn0gY2F0Y2ggKGlnbm9yZSkge31cblxuaWYgKHRlc3QubGVuZ3RoID09PSAxKSB7XG5cdC8vIEVTNlxuXHRkZXNjID0geyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSwgZW51bWVyYWJsZTogZmFsc2UgfTtcblx0ZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBsZW5ndGgpIHtcblx0XHRsZW5ndGggPSB0b1Bvc0ludChsZW5ndGgpO1xuXHRcdGlmIChmbi5sZW5ndGggPT09IGxlbmd0aCkgcmV0dXJuIGZuO1xuXHRcdGRlc2MudmFsdWUgPSBsZW5ndGg7XG5cdFx0cmV0dXJuIGRlZmluZVByb3BlcnR5KGZuLCAnbGVuZ3RoJywgZGVzYyk7XG5cdH07XG59IGVsc2Uge1xuXHRtaXhpbiA9IHJlcXVpcmUoJy4uL29iamVjdC9taXhpbicpO1xuXHRnZW5lcmF0ZSA9IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNhY2hlID0gW107XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgYXJncywgaSA9IDA7XG5cdFx0XHRpZiAoY2FjaGVbbF0pIHJldHVybiBjYWNoZVtsXTtcblx0XHRcdGFyZ3MgPSBbXTtcblx0XHRcdHdoaWxlIChsLS0pIGFyZ3MucHVzaCgnYScgKyAoKytpKS50b1N0cmluZygzNikpO1xuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbignZm4nLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYXJncy5qb2luKCcsICcpICtcblx0XHRcdFx0JykgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTsnKTtcblx0XHR9O1xuXHR9KCkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzcmMsIGxlbmd0aCkge1xuXHRcdHZhciB0YXJnZXQ7XG5cdFx0bGVuZ3RoID0gdG9Qb3NJbnQobGVuZ3RoKTtcblx0XHRpZiAoc3JjLmxlbmd0aCA9PT0gbGVuZ3RoKSByZXR1cm4gc3JjO1xuXHRcdHRhcmdldCA9IGdlbmVyYXRlKGxlbmd0aCkoc3JjKTtcblx0XHR0cnkgeyBtaXhpbih0YXJnZXQsIHNyYyk7IH0gY2F0Y2ggKGlnbm9yZSkge31cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbiAgLCBpZCA9IHRvU3RyaW5nLmNhbGwoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuICh0b1N0cmluZy5jYWxsKHgpID09PSBpZCk7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuICAsIGlkID0gdG9TdHJpbmcuY2FsbChyZXF1aXJlKCcuL25vb3AnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGYpIHtcblx0cmV0dXJuICh0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiKSAmJiAodG9TdHJpbmcuY2FsbChmKSA9PT0gaWQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2lzLWltcGxlbWVudGVkJykoKVxuXHQ/IE1hdGguc2lnblxuXHQ6IHJlcXVpcmUoJy4vc2hpbScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNpZ24gPSBNYXRoLnNpZ247XG5cdGlmICh0eXBlb2Ygc2lnbiAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gKChzaWduKDEwKSA9PT0gMSkgJiYgKHNpZ24oLTIwKSA9PT0gLTEpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0aWYgKGlzTmFOKHZhbHVlKSB8fCAodmFsdWUgPT09IDApKSByZXR1cm4gdmFsdWU7XG5cdHJldHVybiAodmFsdWUgPiAwKSA/IDEgOiAtMTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKCkgPyBTeW1ib2wgOiByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc3ltYm9sO1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRzeW1ib2wgPSBTeW1ib2woJ3Rlc3Qgc3ltYm9sJyk7XG5cdHRyeSB7IFN0cmluZyhzeW1ib2wpOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcpIHJldHVybiB0cnVlO1xuXG5cdC8vIFJldHVybiAndHJ1ZScgZm9yIHBvbHlmaWxsc1xuXHRpZiAodHlwZW9mIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgU3ltYm9sLnVuc2NvcGFibGVzICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeCkge1xuXHRyZXR1cm4gKHggJiYgKCh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHx8ICh4WydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSkpIHx8IGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGQgICAgICAgICAgICAgID0gcmVxdWlyZSgnZCcpXG4gICwgdmFsaWRhdGVTeW1ib2wgPSByZXF1aXJlKCcuL3ZhbGlkYXRlLXN5bWJvbCcpXG5cbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgb2JqUHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZVxuICAsIFN5bWJvbCwgSGlkZGVuU3ltYm9sLCBnbG9iYWxTeW1ib2xzID0gY3JlYXRlKG51bGwpO1xuXG52YXIgZ2VuZXJhdGVOYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIGNyZWF0ZWQgPSBjcmVhdGUobnVsbCk7XG5cdHJldHVybiBmdW5jdGlvbiAoZGVzYykge1xuXHRcdHZhciBwb3N0Zml4ID0gMCwgbmFtZTtcblx0XHR3aGlsZSAoY3JlYXRlZFtkZXNjICsgKHBvc3RmaXggfHwgJycpXSkgKytwb3N0Zml4O1xuXHRcdGRlc2MgKz0gKHBvc3RmaXggfHwgJycpO1xuXHRcdGNyZWF0ZWRbZGVzY10gPSB0cnVlO1xuXHRcdG5hbWUgPSAnQEAnICsgZGVzYztcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmpQcm90b3R5cGUsIG5hbWUsIGQuZ3MobnVsbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkKHZhbHVlKSk7XG5cdFx0fSkpO1xuXHRcdHJldHVybiBuYW1lO1xuXHR9O1xufSgpKTtcblxuSGlkZGVuU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG5cdGlmICh0aGlzIGluc3RhbmNlb2YgSGlkZGVuU3ltYm9sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdUeXBlRXJyb3I6IFN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXHRyZXR1cm4gU3ltYm9sKGRlc2NyaXB0aW9uKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbChkZXNjcmlwdGlvbikge1xuXHR2YXIgc3ltYm9sO1xuXHRpZiAodGhpcyBpbnN0YW5jZW9mIFN5bWJvbCkgdGhyb3cgbmV3IFR5cGVFcnJvcignVHlwZUVycm9yOiBTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0c3ltYm9sID0gY3JlYXRlKEhpZGRlblN5bWJvbC5wcm90b3R5cGUpO1xuXHRkZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcoZGVzY3JpcHRpb24pKTtcblx0cmV0dXJuIGRlZmluZVByb3BlcnRpZXMoc3ltYm9sLCB7XG5cdFx0X19kZXNjcmlwdGlvbl9fOiBkKCcnLCBkZXNjcmlwdGlvbiksXG5cdFx0X19uYW1lX186IGQoJycsIGdlbmVyYXRlTmFtZShkZXNjcmlwdGlvbikpXG5cdH0pO1xufTtcbmRlZmluZVByb3BlcnRpZXMoU3ltYm9sLCB7XG5cdGZvcjogZChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0aWYgKGdsb2JhbFN5bWJvbHNba2V5XSkgcmV0dXJuIGdsb2JhbFN5bWJvbHNba2V5XTtcblx0XHRyZXR1cm4gKGdsb2JhbFN5bWJvbHNba2V5XSA9IFN5bWJvbChTdHJpbmcoa2V5KSkpO1xuXHR9KSxcblx0a2V5Rm9yOiBkKGZ1bmN0aW9uIChzKSB7XG5cdFx0dmFyIGtleTtcblx0XHR2YWxpZGF0ZVN5bWJvbChzKTtcblx0XHRmb3IgKGtleSBpbiBnbG9iYWxTeW1ib2xzKSBpZiAoZ2xvYmFsU3ltYm9sc1trZXldID09PSBzKSByZXR1cm4ga2V5O1xuXHR9KSxcblx0aGFzSW5zdGFuY2U6IGQoJycsIFN5bWJvbCgnaGFzSW5zdGFuY2UnKSksXG5cdGlzQ29uY2F0U3ByZWFkYWJsZTogZCgnJywgU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKSksXG5cdGl0ZXJhdG9yOiBkKCcnLCBTeW1ib2woJ2l0ZXJhdG9yJykpLFxuXHRtYXRjaDogZCgnJywgU3ltYm9sKCdtYXRjaCcpKSxcblx0cmVwbGFjZTogZCgnJywgU3ltYm9sKCdyZXBsYWNlJykpLFxuXHRzZWFyY2g6IGQoJycsIFN5bWJvbCgnc2VhcmNoJykpLFxuXHRzcGVjaWVzOiBkKCcnLCBTeW1ib2woJ3NwZWNpZXMnKSksXG5cdHNwbGl0OiBkKCcnLCBTeW1ib2woJ3NwbGl0JykpLFxuXHR0b1ByaW1pdGl2ZTogZCgnJywgU3ltYm9sKCd0b1ByaW1pdGl2ZScpKSxcblx0dG9TdHJpbmdUYWc6IGQoJycsIFN5bWJvbCgndG9TdHJpbmdUYWcnKSksXG5cdHVuc2NvcGFibGVzOiBkKCcnLCBTeW1ib2woJ3Vuc2NvcGFibGVzJykpXG59KTtcbmRlZmluZVByb3BlcnRpZXMoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwge1xuXHRjb25zdHJ1Y3RvcjogZChTeW1ib2wpLFxuXHR0b1N0cmluZzogZCgnJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fX25hbWVfXzsgfSlcbn0pO1xuXG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbC5wcm90b3R5cGUsIHtcblx0dG9TdHJpbmc6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1N5bWJvbCAoJyArIHZhbGlkYXRlU3ltYm9sKHRoaXMpLl9fZGVzY3JpcHRpb25fXyArICcpJzsgfSksXG5cdHZhbHVlT2Y6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdGVTeW1ib2wodGhpcyk7IH0pXG59KTtcbmRlZmluZVByb3BlcnR5KFN5bWJvbC5wcm90b3R5cGUsIFN5bWJvbC50b1ByaW1pdGl2ZSwgZCgnJyxcblx0ZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdGVTeW1ib2wodGhpcyk7IH0pKTtcbmRlZmluZVByb3BlcnR5KFN5bWJvbC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywgZCgnYycsICdTeW1ib2wnKSk7XG5cbmRlZmluZVByb3BlcnR5KEhpZGRlblN5bWJvbC5wcm90b3R5cGUsIFN5bWJvbC50b1ByaW1pdGl2ZSxcblx0ZCgnYycsIFN5bWJvbC5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSkpO1xuZGVmaW5lUHJvcGVydHkoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLFxuXHRkKCdjJywgU3ltYm9sLnByb3RvdHlwZVtTeW1ib2wudG9TdHJpbmdUYWddKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXMtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNTeW1ib2wodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKHZhbHVlICsgXCIgaXMgbm90IGEgc3ltYm9sXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4uL21hdGgvc2lnbicpXG5cbiAgLCBhYnMgPSBNYXRoLmFicywgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoaXNOYU4odmFsdWUpKSByZXR1cm4gMDtcblx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHRpZiAoKHZhbHVlID09PSAwKSB8fCAhaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gdmFsdWU7XG5cdHJldHVybiBzaWduKHZhbHVlKSAqIGZsb29yKGFicyh2YWx1ZSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG8taW50ZWdlcicpXG5cbiAgLCBtYXggPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1heCgwLCB0b0ludGVnZXIodmFsdWUpKTsgfTtcbiIsIi8vIEludGVybmFsIG1ldGhvZCwgdXNlZCBieSBpdGVyYXRpb24gZnVuY3Rpb25zLlxuLy8gQ2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaCBrZXktdmFsdWUgcGFpciBmb3VuZCBpbiBvYmplY3Rcbi8vIE9wdGlvbmFsbHkgdGFrZXMgY29tcGFyZUZuIHRvIGl0ZXJhdGUgb2JqZWN0IGluIHNwZWNpZmljIG9yZGVyXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuL2lzLWNhbGxhYmxlJylcbiAgLCBjYWxsYWJsZSAgID0gcmVxdWlyZSgnLi92YWxpZC1jYWxsYWJsZScpXG4gICwgdmFsdWUgICAgICA9IHJlcXVpcmUoJy4vdmFsaWQtdmFsdWUnKVxuXG4gICwgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBrZXlzID0gT2JqZWN0LmtleXNcbiAgLCBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCwgZGVmVmFsKSB7XG5cdHJldHVybiBmdW5jdGlvbiAob2JqLCBjYi8qLCB0aGlzQXJnLCBjb21wYXJlRm4qLykge1xuXHRcdHZhciBsaXN0LCB0aGlzQXJnID0gYXJndW1lbnRzWzJdLCBjb21wYXJlRm4gPSBhcmd1bWVudHNbM107XG5cdFx0b2JqID0gT2JqZWN0KHZhbHVlKG9iaikpO1xuXHRcdGNhbGxhYmxlKGNiKTtcblxuXHRcdGxpc3QgPSBrZXlzKG9iaik7XG5cdFx0aWYgKGNvbXBhcmVGbikge1xuXHRcdFx0bGlzdC5zb3J0KGlzQ2FsbGFibGUoY29tcGFyZUZuKSA/IGNvbXBhcmVGbi5iaW5kKG9iaikgOiB1bmRlZmluZWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbGlzdFttZXRob2RdKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG5cdFx0XHRpZiAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpKSByZXR1cm4gZGVmVmFsO1xuXHRcdFx0cmV0dXJuIGNhbGwuY2FsbChjYiwgdGhpc0FyZywgb2JqW2tleV0sIGtleSwgb2JqLCBpbmRleCk7XG5cdFx0fSk7XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpXG5cdD8gT2JqZWN0LmFzc2lnblxuXHQ6IHJlcXVpcmUoJy4vc2hpbScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIG9iajtcblx0aWYgKHR5cGVvZiBhc3NpZ24gIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0b2JqID0geyBmb286ICdyYXonIH07XG5cdGFzc2lnbihvYmosIHsgYmFyOiAnZHdhJyB9LCB7IHRyenk6ICd0cnp5JyB9KTtcblx0cmV0dXJuIChvYmouZm9vICsgb2JqLmJhciArIG9iai50cnp5KSA9PT0gJ3JhemR3YXRyenknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgID0gcmVxdWlyZSgnLi4va2V5cycpXG4gICwgdmFsdWUgPSByZXF1aXJlKCcuLi92YWxpZC12YWx1ZScpXG5cbiAgLCBtYXggPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGVzdCwgc3JjLyosIOKApnNyY24qLykge1xuXHR2YXIgZXJyb3IsIGksIGwgPSBtYXgoYXJndW1lbnRzLmxlbmd0aCwgMiksIGFzc2lnbjtcblx0ZGVzdCA9IE9iamVjdCh2YWx1ZShkZXN0KSk7XG5cdGFzc2lnbiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHR0cnkgeyBkZXN0W2tleV0gPSBzcmNba2V5XTsgfSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlO1xuXHRcdH1cblx0fTtcblx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXJhdGUnKSgnZm9yRWFjaCcpO1xuIiwiLy8gRGVwcmVjYXRlZFxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJzsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2lzLWltcGxlbWVudGVkJykoKVxuXHQ/IE9iamVjdC5rZXlzXG5cdDogcmVxdWlyZSgnLi9zaGltJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKCdwcmltaXRpdmUnKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuXHRyZXR1cm4ga2V5cyhvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IE9iamVjdChvYmplY3QpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWx1ZSA9IHJlcXVpcmUoJy4vdmFsaWQtdmFsdWUnKVxuXG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG4gICwgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZXJyb3I7XG5cdHRhcmdldCA9IE9iamVjdCh2YWx1ZSh0YXJnZXQpKTtcblx0Z2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QodmFsdWUoc291cmNlKSkpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0XHR0cnkge1xuXHRcdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKSk7XG5cdFx0fSBjYXRjaCAoZSkgeyBlcnJvciA9IGU7IH1cblx0fSk7XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMvKiwg4oCmb3B0aW9ucyovKSB7XG5cdHZhciByZXN1bHQgPSBjcmVhdGUobnVsbCk7XG5cdGZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0aWYgKG9wdGlvbnMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdHByb2Nlc3MoT2JqZWN0KG9wdGlvbnMpLCByZXN1bHQpO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKHZhbHVlID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpXG5cdD8gU3RyaW5nLnByb3RvdHlwZS5jb250YWluc1xuXHQ6IHJlcXVpcmUoJy4vc2hpbScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyID0gJ3JhemR3YXRyenknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBzdHIuY29udGFpbnMgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuICgoc3RyLmNvbnRhaW5zKCdkd2EnKSA9PT0gdHJ1ZSkgJiYgKHN0ci5jb250YWlucygnZm9vJykgPT09IGZhbHNlKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLyosIHBvc2l0aW9uKi8pIHtcblx0cmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLCBzZWFyY2hTdHJpbmcsIGFyZ3VtZW50c1sxXSkgPiAtMTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuICAsIGlkID0gdG9TdHJpbmcuY2FsbCgnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHx8ICh4ICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcpICYmXG5cdFx0KCh4IGluc3RhbmNlb2YgU3RyaW5nKSB8fCAodG9TdHJpbmcuY2FsbCh4KSA9PT0gaWQpKSkgfHwgZmFsc2U7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1Bvc0ludCA9IHJlcXVpcmUoJ2VzNS1leHQvbnVtYmVyL3RvLXBvcy1pbnRlZ2VyJylcblxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGltaXQpIHtcblx0dmFyIHNpemUgPSAwLCBiYXNlID0gMSwgcXVldWUgPSBjcmVhdGUobnVsbCksIG1hcCA9IGNyZWF0ZShudWxsKSwgaW5kZXggPSAwLCBkZWw7XG5cdGxpbWl0ID0gdG9Qb3NJbnQobGltaXQpO1xuXHRyZXR1cm4ge1xuXHRcdGhpdDogZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbaWRdLCBudUluZGV4ID0gKytpbmRleDtcblx0XHRcdHF1ZXVlW251SW5kZXhdID0gaWQ7XG5cdFx0XHRtYXBbaWRdID0gbnVJbmRleDtcblx0XHRcdGlmICghb2xkSW5kZXgpIHtcblx0XHRcdFx0KytzaXplO1xuXHRcdFx0XHRpZiAoc2l6ZSA8PSBsaW1pdCkgcmV0dXJuO1xuXHRcdFx0XHRpZCA9IHF1ZXVlW2Jhc2VdO1xuXHRcdFx0XHRkZWwoaWQpO1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcXVldWVbb2xkSW5kZXhdO1xuXHRcdFx0aWYgKGJhc2UgIT09IG9sZEluZGV4KSByZXR1cm47XG5cdFx0XHR3aGlsZSAoIWhhc093blByb3BlcnR5LmNhbGwocXVldWUsICsrYmFzZSkpIGNvbnRpbnVlOyAvL2pzbGludDogc2tpcFxuXHRcdH0sXG5cdFx0ZGVsZXRlOiBkZWwgPSBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFtpZF07XG5cdFx0XHRpZiAoIW9sZEluZGV4KSByZXR1cm47XG5cdFx0XHRkZWxldGUgcXVldWVbb2xkSW5kZXhdO1xuXHRcdFx0ZGVsZXRlIG1hcFtpZF07XG5cdFx0XHQtLXNpemU7XG5cdFx0XHRpZiAoYmFzZSAhPT0gb2xkSW5kZXgpIHJldHVybjtcblx0XHRcdGlmICghc2l6ZSkge1xuXHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdGJhc2UgPSAxO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAoIWhhc093blByb3BlcnR5LmNhbGwocXVldWUsICsrYmFzZSkpIGNvbnRpbnVlOyAvL2pzbGludDogc2tpcFxuXHRcdH0sXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHNpemUgPSAwO1xuXHRcdFx0YmFzZSA9IDE7XG5cdFx0XHRxdWV1ZSA9IGNyZWF0ZShudWxsKTtcblx0XHRcdG1hcCA9IGNyZWF0ZShudWxsKTtcblx0XHRcdGluZGV4ID0gMDtcblx0XHR9XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FsbGFibGUsIGJ5T2JzZXJ2ZXI7XG5cbmNhbGxhYmxlID0gZnVuY3Rpb24gKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcblxuYnlPYnNlcnZlciA9IGZ1bmN0aW9uIChPYnNlcnZlcikge1xuXHR2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSwgcXVldWUsIGkgPSAwO1xuXHRuZXcgT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBkYXRhO1xuXHRcdGlmICghcXVldWUpIHJldHVybjtcblx0XHRkYXRhID0gcXVldWU7XG5cdFx0cXVldWUgPSBudWxsO1xuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0ZGF0YSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IGZuKCk7IH0pO1xuXHR9KS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblx0cmV0dXJuIGZ1bmN0aW9uIChmbikge1xuXHRcdGNhbGxhYmxlKGZuKTtcblx0XHRpZiAocXVldWUpIHtcblx0XHRcdGlmICh0eXBlb2YgcXVldWUgPT09ICdmdW5jdGlvbicpIHF1ZXVlID0gW3F1ZXVlLCBmbl07XG5cdFx0XHRlbHNlIHF1ZXVlLnB1c2goZm4pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRxdWV1ZSA9IGZuO1xuXHRcdG5vZGUuZGF0YSA9IChpID0gKytpICUgMik7XG5cdH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG5cdC8vIE5vZGUuanNcblx0aWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpICYmIHByb2Nlc3MgJiZcblx0XHRcdCh0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRyZXR1cm4gcHJvY2Vzcy5uZXh0VGljaztcblx0fVxuXG5cdC8vIE11dGF0aW9uT2JzZXJ2ZXI9XG5cdGlmICgodHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JykgJiYgZG9jdW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBieU9ic2VydmVyKE11dGF0aW9uT2JzZXJ2ZXIpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBieU9ic2VydmVyKFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFczQyBEcmFmdFxuXHQvLyBodHRwOi8vZHZjcy53My5vcmcvaGcvd2VicGVyZi9yYXctZmlsZS90aXAvc3BlY3Mvc2V0SW1tZWRpYXRlL092ZXJ2aWV3Lmh0bWxcblx0aWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGNiKSB7IHNldEltbWVkaWF0ZShjYWxsYWJsZShjYikpOyB9O1xuXHR9XG5cblx0Ly8gV2lkZSBhdmFpbGFibGUgc3RhbmRhcmRcblx0aWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChjYikgeyBzZXRUaW1lb3V0KGNhbGxhYmxlKGNiKSwgMCk7IH07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMjE0NzQ4MzY0NztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvUG9zSW50ICAgPSByZXF1aXJlKCdlczUtZXh0L251bWJlci90by1wb3MtaW50ZWdlcicpXG4gICwgbWF4VGltZW91dCA9IHJlcXVpcmUoJy4vbWF4LXRpbWVvdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0dmFsdWUgPSB0b1Bvc0ludCh2YWx1ZSk7XG5cdGlmICh2YWx1ZSA+IG1heFRpbWVvdXQpIHRocm93IG5ldyBUeXBlRXJyb3IodmFsdWUgKyBcIiBleGNlZWRzIG1heGltdW0gcG9zc2libGUgdGltZW91dFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluZGV4T2YgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5LyMvZS1pbmRleC1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGxhc3RJZCA9IDAsIGFyZ3NNYXAgPSBbXSwgY2FjaGUgPSBbXTtcblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBpbmRleE9mLmNhbGwoYXJnc01hcCwgYXJnc1swXSk7XG5cdFx0XHRyZXR1cm4gKGluZGV4ID09PSAtMSkgPyBudWxsIDogY2FjaGVbaW5kZXhdO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0YXJnc01hcC5wdXNoKGFyZ3NbMF0pO1xuXHRcdFx0Y2FjaGUucHVzaCgrK2xhc3RJZCk7XG5cdFx0XHRyZXR1cm4gbGFzdElkO1xuXHRcdH0sXG5cdFx0ZGVsZXRlOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHZhciBpbmRleCA9IGluZGV4T2YuY2FsbChjYWNoZSwgaWQpO1xuXHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRhcmdzTWFwLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdGNhY2hlLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjbGVhcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0YXJnc01hcCA9IFtdO1xuXHRcdFx0Y2FjaGUgPSBbXTtcblx0XHR9XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvIy9lLWluZGV4LW9mJylcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcblx0dmFyIGxhc3RJZCA9IDAsIG1hcCA9IFtbXSwgW11dLCBjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGk7XG5cdFx0XHR3aGlsZSAoaW5kZXggPCAobGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0c2V0ID0gc2V0WzFdW2ldO1xuXHRcdFx0XHQrK2luZGV4O1xuXHRcdFx0fVxuXHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdGlmIChpID09PSAtMSkgcmV0dXJuIG51bGw7XG5cdFx0XHRyZXR1cm4gc2V0WzFdW2ldIHx8IG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGk7XG5cdFx0XHR3aGlsZSAoaW5kZXggPCAobGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0aSA9IHNldFswXS5wdXNoKGFyZ3NbaW5kZXhdKSAtIDE7XG5cdFx0XHRcdFx0c2V0WzFdLnB1c2goW1tdLCBbXV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldCA9IHNldFsxXVtpXTtcblx0XHRcdFx0KytpbmRleDtcblx0XHRcdH1cblx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0aSA9IHNldFswXS5wdXNoKGFyZ3NbaW5kZXhdKSAtIDE7XG5cdFx0XHR9XG5cdFx0XHRzZXRbMV1baV0gPSArK2xhc3RJZDtcblx0XHRcdGNhY2hlW2xhc3RJZF0gPSBhcmdzO1xuXHRcdFx0cmV0dXJuIGxhc3RJZDtcblx0XHR9LFxuXHRcdGRlbGV0ZTogZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGksIHBhdGggPSBbXSwgYXJncyA9IGNhY2hlW2lkXTtcblx0XHRcdHdoaWxlIChpbmRleCA8IChsZW5ndGggLSAxKSkge1xuXHRcdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGF0aC5wdXNoKHNldCwgaSk7XG5cdFx0XHRcdHNldCA9IHNldFsxXVtpXTtcblx0XHRcdFx0KytpbmRleDtcblx0XHRcdH1cblx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWQgPSBzZXRbMV1baV07XG5cdFx0XHRzZXRbMF0uc3BsaWNlKGksIDEpO1xuXHRcdFx0c2V0WzFdLnNwbGljZShpLCAxKTtcblx0XHRcdHdoaWxlICghc2V0WzBdLmxlbmd0aCAmJiBwYXRoLmxlbmd0aCkge1xuXHRcdFx0XHRpID0gcGF0aC5wb3AoKTtcblx0XHRcdFx0c2V0ID0gcGF0aC5wb3AoKTtcblx0XHRcdFx0c2V0WzBdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0c2V0WzFdLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBjYWNoZVtpZF07XG5cdFx0fSxcblx0XHRjbGVhcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0bWFwID0gW1tdLCBbXV07XG5cdFx0XHRjYWNoZSA9IGNyZWF0ZShudWxsKTtcblx0XHR9XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcblx0aWYgKCFsZW5ndGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH07XG5cdH1cblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0dmFyIGlkID0gU3RyaW5nKGFyZ3NbMF0pLCBpID0gMCwgbCA9IGxlbmd0aDtcblx0XHR3aGlsZSAoLS1sKSB7IGlkICs9ICdcXHUwMDAxJyArIGFyZ3NbKytpXTsgfVxuXHRcdHJldHVybiBpZDtcblx0fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmRleE9mID0gcmVxdWlyZSgnZXM1LWV4dC9hcnJheS8jL2UtaW5kZXgtb2YnKVxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbGFzdElkID0gMCwgbWFwID0gW10sIGNhY2hlID0gY3JlYXRlKG51bGwpO1xuXHRyZXR1cm4ge1xuXHRcdGdldDogZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdHZhciBpbmRleCA9IDAsIHNldCA9IG1hcCwgaSwgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG5cdFx0XHRpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gc2V0W2xlbmd0aF0gfHwgbnVsbDtcblx0XHRcdGlmICgoc2V0ID0gc2V0W2xlbmd0aF0pKSB7XG5cdFx0XHRcdHdoaWxlIChpbmRleCA8IChsZW5ndGggLSAxKSkge1xuXHRcdFx0XHRcdGkgPSBpbmRleE9mLmNhbGwoc2V0WzBdLCBhcmdzW2luZGV4XSk7XG5cdFx0XHRcdFx0aWYgKGkgPT09IC0xKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRzZXQgPSBzZXRbMV1baV07XG5cdFx0XHRcdFx0KytpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0XHRpZiAoaSA9PT0gLTEpIHJldHVybiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gc2V0WzFdW2ldIHx8IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdHZhciBpbmRleCA9IDAsIHNldCA9IG1hcCwgaSwgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG5cdFx0XHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHNldFtsZW5ndGhdID0gKytsYXN0SWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXNldFtsZW5ndGhdKSB7XG5cdFx0XHRcdFx0c2V0W2xlbmd0aF0gPSBbW10sIFtdXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXQgPSBzZXRbbGVuZ3RoXTtcblx0XHRcdFx0d2hpbGUgKGluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGkgPSBzZXRbMF0ucHVzaChhcmdzW2luZGV4XSkgLSAxO1xuXHRcdFx0XHRcdFx0c2V0WzFdLnB1c2goW1tdLCBbXV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZXQgPSBzZXRbMV1baV07XG5cdFx0XHRcdFx0KytpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gaW5kZXhPZi5jYWxsKHNldFswXSwgYXJnc1tpbmRleF0pO1xuXHRcdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0XHRpID0gc2V0WzBdLnB1c2goYXJnc1tpbmRleF0pIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRbMV1baV0gPSArK2xhc3RJZDtcblx0XHRcdH1cblx0XHRcdGNhY2hlW2xhc3RJZF0gPSBhcmdzO1xuXHRcdFx0cmV0dXJuIGxhc3RJZDtcblx0XHR9LFxuXHRcdGRlbGV0ZTogZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwLCBzZXQgPSBtYXAsIGksIGFyZ3MgPSBjYWNoZVtpZF0sIGxlbmd0aCA9IGFyZ3MubGVuZ3RoXG5cdFx0XHQgICwgcGF0aCA9IFtdO1xuXHRcdFx0aWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRkZWxldGUgc2V0W2xlbmd0aF07XG5cdFx0XHR9IGVsc2UgaWYgKChzZXQgPSBzZXRbbGVuZ3RoXSkpIHtcblx0XHRcdFx0d2hpbGUgKGluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGF0aC5wdXNoKHNldCwgaSk7XG5cdFx0XHRcdFx0c2V0ID0gc2V0WzFdW2ldO1xuXHRcdFx0XHRcdCsraW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IGluZGV4T2YuY2FsbChzZXRbMF0sIGFyZ3NbaW5kZXhdKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlkID0gc2V0WzFdW2ldO1xuXHRcdFx0XHRzZXRbMF0uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRzZXRbMV0uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR3aGlsZSAoIXNldFswXS5sZW5ndGggJiYgcGF0aC5sZW5ndGgpIHtcblx0XHRcdFx0XHRpID0gcGF0aC5wb3AoKTtcblx0XHRcdFx0XHRzZXQgPSBwYXRoLnBvcCgpO1xuXHRcdFx0XHRcdHNldFswXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0c2V0WzFdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIGNhY2hlW2lkXTtcblx0XHR9LFxuXHRcdGNsZWFyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRtYXAgPSBbXTtcblx0XHRcdGNhY2hlID0gY3JlYXRlKG51bGwpO1xuXHRcdH1cblx0fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGlkLCBpLCBsZW5ndGggPSBhcmdzLmxlbmd0aDtcblx0aWYgKCFsZW5ndGgpIHJldHVybiAnXFx1MDAwMic7XG5cdGlkID0gU3RyaW5nKGFyZ3NbaSA9IDBdKTtcblx0d2hpbGUgKC0tbGVuZ3RoKSBpZCArPSAnXFx1MDAwMScgKyBhcmdzWysraV07XG5cdHJldHVybiBpZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsYWJsZSAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuICAsIGZvckVhY2ggICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9mb3ItZWFjaCcpXG4gICwgZXh0ZW5zaW9ucyAgICA9IHJlcXVpcmUoJy4vbGliL3JlZ2lzdGVyZWQtZXh0ZW5zaW9ucycpXG4gICwgY29uZmlndXJlICAgICA9IHJlcXVpcmUoJy4vbGliL2NvbmZpZ3VyZS1tYXAnKVxuICAsIHJlc29sdmVMZW5ndGggPSByZXF1aXJlKCcuL2xpYi9yZXNvbHZlLWxlbmd0aCcpXG5cbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2VsZihmbi8qLCBvcHRpb25zICovKSB7XG5cdHZhciBvcHRpb25zLCBsZW5ndGgsIGNvbmY7XG5cblx0Y2FsbGFibGUoZm4pO1xuXHRvcHRpb25zID0gT2JqZWN0KGFyZ3VtZW50c1sxXSk7XG5cblx0Ly8gRG8gbm90IG1lbW9pemUgYWxyZWFkeSBtZW1vaXplZCBmdW5jdGlvblxuXHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmbiwgJ19fbWVtb2l6ZWRfXycpICYmICFvcHRpb25zLmZvcmNlKSByZXR1cm4gZm47XG5cblx0Ly8gUmVzb2x2ZSBsZW5ndGg7XG5cdGxlbmd0aCA9IHJlc29sdmVMZW5ndGgob3B0aW9ucy5sZW5ndGgsIGZuLmxlbmd0aCwgb3B0aW9ucy5hc3luYyAmJiBleHRlbnNpb25zLmFzeW5jKTtcblxuXHQvLyBDb25maWd1cmUgY2FjaGUgbWFwXG5cdGNvbmYgPSBjb25maWd1cmUoZm4sIGxlbmd0aCwgb3B0aW9ucyk7XG5cblx0Ly8gQmluZCBldmVudHVhbCBleHRlbnNpb25zXG5cdGZvckVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24gKGZuLCBuYW1lKSB7XG5cdFx0aWYgKG9wdGlvbnNbbmFtZV0pIGZuKG9wdGlvbnNbbmFtZV0sIGNvbmYsIG9wdGlvbnMpO1xuXHR9KTtcblxuXHRpZiAoc2VsZi5fX3Byb2ZpbGVyX18pIHNlbGYuX19wcm9maWxlcl9fKGNvbmYpO1xuXG5cdGNvbmYudXBkYXRlRW52KCk7XG5cdHJldHVybiBjb25mLm1lbW9pemVkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFNpbmdsZUV2ZW50ID0gcmVxdWlyZSgnZ2V2YWwvc2luZ2xlJyk7XG52YXIgTXVsdGlwbGVFdmVudCA9IHJlcXVpcmUoJ2dldmFsL211bHRpcGxlJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxuLypcbiAgICBQcm8gdGlwOiBEb24ndCByZXF1aXJlIGBtZXJjdXJ5YCBpdHNlbGYuXG4gICAgICByZXF1aXJlIGFuZCBkZXBlbmQgb24gYWxsIHRoZXNlIG1vZHVsZXMgZGlyZWN0bHkhXG4qL1xudmFyIG1lcmN1cnkgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBFbnRyeVxuICAgIG1haW46IHJlcXVpcmUoJ21haW4tbG9vcCcpLFxuICAgIGFwcDogYXBwLFxuXG4gICAgLy8gQmFzZVxuICAgIEJhc2VFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQvYmFzZS1ldmVudCcpLFxuXG4gICAgLy8gSW5wdXRcbiAgICBEZWxlZ2F0b3I6IHJlcXVpcmUoJ2RvbS1kZWxlZ2F0b3InKSxcbiAgICAvLyBkZXByZWNhdGVkOiB1c2UgaGcuY2hhbm5lbHMgaW5zdGVhZC5cbiAgICBpbnB1dDogaW5wdXQsXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLmNoYW5uZWxzIGluc3RlYWQuXG4gICAgaGFuZGxlczogY2hhbm5lbHMsXG4gICAgY2hhbm5lbHM6IGNoYW5uZWxzLFxuICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBoZy5zZW5kIGluc3RlYWQuXG4gICAgZXZlbnQ6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2V2ZW50JyksXG4gICAgc2VuZDogcmVxdWlyZSgndmFsdWUtZXZlbnQvZXZlbnQnKSxcbiAgICAvLyBkZXByZWNhdGVkOiB1c2UgaGcuc2VuZFZhbHVlIGluc3RlYWQuXG4gICAgdmFsdWVFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQvdmFsdWUnKSxcbiAgICBzZW5kVmFsdWU6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L3ZhbHVlJyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLnNlbmRTdWJtaXQgaW5zdGVhZC5cbiAgICBzdWJtaXRFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQvc3VibWl0JyksXG4gICAgc2VuZFN1Ym1pdDogcmVxdWlyZSgndmFsdWUtZXZlbnQvc3VibWl0JyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLnNlbmRDaGFuZ2UgaW5zdGVhZC5cbiAgICBjaGFuZ2VFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQvY2hhbmdlJyksXG4gICAgc2VuZENoYW5nZTogcmVxdWlyZSgndmFsdWUtZXZlbnQvY2hhbmdlJyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLnNlbmRLZXkgaW5zdGVhZC5cbiAgICBrZXlFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQva2V5JyksXG4gICAgc2VuZEtleTogcmVxdWlyZSgndmFsdWUtZXZlbnQva2V5JyksXG4gICAgLy8gZGVwcmVjYXRlZCB1c2UgaGcuc2VuZENsaWNrIGluc3RlYWQuXG4gICAgY2xpY2tFdmVudDogcmVxdWlyZSgndmFsdWUtZXZlbnQvY2xpY2snKSxcbiAgICBzZW5kQ2xpY2s6IHJlcXVpcmUoJ3ZhbHVlLWV2ZW50L2NsaWNrJyksXG5cbiAgICAvLyBTdGF0ZVxuICAgIC8vIHJlbW92ZSBmcm9tIGNvcmU6IGZhdm9yIGhnLnZhcmhhc2ggaW5zdGVhZC5cbiAgICBhcnJheTogcmVxdWlyZSgnb2JzZXJ2LWFycmF5JyksXG4gICAgc3RydWN0OiByZXF1aXJlKCdvYnNlcnYtc3RydWN0JyksXG4gICAgLy8gZGVwcmVjYXRlZDogdXNlIGhnLnN0cnVjdCBpbnN0ZWFkLlxuICAgIGhhc2g6IHJlcXVpcmUoJ29ic2Vydi1zdHJ1Y3QnKSxcbiAgICB2YXJoYXNoOiByZXF1aXJlKCdvYnNlcnYtdmFyaGFzaCcpLFxuICAgIHZhbHVlOiByZXF1aXJlKCdvYnNlcnYnKSxcbiAgICBzdGF0ZTogc3RhdGUsXG5cbiAgICAvLyBSZW5kZXJcbiAgICBkaWZmOiByZXF1aXJlKCd2aXJ0dWFsLWRvbS92dHJlZS9kaWZmJyksXG4gICAgcGF0Y2g6IHJlcXVpcmUoJ3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2gnKSxcbiAgICBwYXJ0aWFsOiByZXF1aXJlKCd2ZG9tLXRodW5rJyksXG4gICAgY3JlYXRlOiByZXF1aXJlKCd2aXJ0dWFsLWRvbS92ZG9tL2NyZWF0ZS1lbGVtZW50JyksXG4gICAgaDogcmVxdWlyZSgndmlydHVhbC1kb20vdmlydHVhbC1oeXBlcnNjcmlwdCcpLFxuXG4gICAgLy8gVXRpbGl0aWVzXG4gICAgLy8gcmVtb3ZlIGZyb20gY29yZTogcmVxdWlyZSBjb21wdXRlZCBkaXJlY3RseSBpbnN0ZWFkLlxuICAgIGNvbXB1dGVkOiByZXF1aXJlKCdvYnNlcnYvY29tcHV0ZWQnKSxcbiAgICAvLyByZW1vdmUgZnJvbSBjb3JlOiByZXF1aXJlIHdhdGNoIGRpcmVjdGx5IGluc3RlYWQuXG4gICAgd2F0Y2g6IHJlcXVpcmUoJ29ic2Vydi93YXRjaCcpXG59O1xuXG5mdW5jdGlvbiBpbnB1dChuYW1lcykge1xuICAgIGlmICghbmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIFNpbmdsZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE11bHRpcGxlRXZlbnQobmFtZXMpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZShvYmopIHtcbiAgICB2YXIgY29weSA9IGV4dGVuZChvYmopO1xuICAgIHZhciAkY2hhbm5lbHMgPSBjb3B5LmNoYW5uZWxzO1xuICAgIHZhciAkaGFuZGxlcyA9IGNvcHkuaGFuZGxlcztcblxuICAgIGlmICgkY2hhbm5lbHMpIHtcbiAgICAgICAgY29weS5jaGFubmVscyA9IG1lcmN1cnkudmFsdWUobnVsbCk7XG4gICAgfSBlbHNlIGlmICgkaGFuZGxlcykge1xuICAgICAgICBjb3B5LmhhbmRsZXMgPSBtZXJjdXJ5LnZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnYgPSBtZXJjdXJ5LnN0cnVjdChjb3B5KTtcbiAgICBpZiAoJGNoYW5uZWxzKSB7XG4gICAgICAgIG9ic2Vydi5jaGFubmVscy5zZXQobWVyY3VyeS5jaGFubmVscygkY2hhbm5lbHMsIG9ic2VydikpO1xuICAgIH0gZWxzZSBpZiAoJGhhbmRsZXMpIHtcbiAgICAgICAgb2JzZXJ2LmhhbmRsZXMuc2V0KG1lcmN1cnkuY2hhbm5lbHMoJGhhbmRsZXMsIG9ic2VydikpO1xuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2O1xufVxuXG5mdW5jdGlvbiBjaGFubmVscyhmdW5jcywgY29udGV4dCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmdW5jcykucmVkdWNlKGNyZWF0ZUhhbmRsZSwge30pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGFuZGxlKGFjYywgbmFtZSkge1xuICAgICAgICB2YXIgaGFuZGxlID0gbWVyY3VyeS5EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGUoXG4gICAgICAgICAgICBmdW5jc1tuYW1lXS5iaW5kKG51bGwsIGNvbnRleHQpKTtcblxuICAgICAgICBhY2NbbmFtZV0gPSBoYW5kbGU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcHAoZWxlbSwgb2JzZXJ2LCByZW5kZXIsIG9wdHMpIHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0VsZW1lbnQgZG9lcyBub3QgZXhpc3QuICcgK1xuICAgICAgICAgICAgJ01lcmN1cnkgY2Fubm90IGJlIGluaXRpYWxpemVkLicpO1xuICAgIH1cblxuICAgIG1lcmN1cnkuRGVsZWdhdG9yKG9wdHMpO1xuICAgIHZhciBsb29wID0gbWVyY3VyeS5tYWluKG9ic2VydigpLCByZW5kZXIsIGV4dGVuZCh7XG4gICAgICAgIGRpZmY6IG1lcmN1cnkuZGlmZixcbiAgICAgICAgY3JlYXRlOiBtZXJjdXJ5LmNyZWF0ZSxcbiAgICAgICAgcGF0Y2g6IG1lcmN1cnkucGF0Y2hcbiAgICB9LCBvcHRzKSk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKGxvb3AudGFyZ2V0KTtcblxuICAgIHJldHVybiBvYnNlcnYobG9vcC51cGRhdGUpO1xufVxuIiwidmFyIEV2U3RvcmUgPSByZXF1aXJlKFwiZXYtc3RvcmVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRFdmVudFxuXG5mdW5jdGlvbiBhZGRFdmVudCh0YXJnZXQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgZXZlbnRzID0gRXZTdG9yZSh0YXJnZXQpXG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzW3R5cGVdXG5cbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIGV2ZW50c1t0eXBlXSA9IGhhbmRsZXJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGlmIChldmVudC5pbmRleE9mKGhhbmRsZXIpID09PSAtMSkge1xuICAgICAgICAgICAgZXZlbnQucHVzaChoYW5kbGVyKVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudCAhPT0gaGFuZGxlcikge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBbZXZlbnQsIGhhbmRsZXJdXG4gICAgfVxufVxuIiwidmFyIGdsb2JhbERvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIEV2U3RvcmUgPSByZXF1aXJlKFwiZXYtc3RvcmVcIilcbnZhciBjcmVhdGVTdG9yZSA9IHJlcXVpcmUoXCJ3ZWFrbWFwLXNoaW0vY3JlYXRlLXN0b3JlXCIpXG5cbnZhciBhZGRFdmVudCA9IHJlcXVpcmUoXCIuL2FkZC1ldmVudC5qc1wiKVxudmFyIHJlbW92ZUV2ZW50ID0gcmVxdWlyZShcIi4vcmVtb3ZlLWV2ZW50LmpzXCIpXG52YXIgUHJveHlFdmVudCA9IHJlcXVpcmUoXCIuL3Byb3h5LWV2ZW50LmpzXCIpXG5cbnZhciBIQU5ETEVSX1NUT1JFID0gY3JlYXRlU3RvcmUoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IERPTURlbGVnYXRvclxuXG5mdW5jdGlvbiBET01EZWxlZ2F0b3IoZG9jdW1lbnQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRE9NRGVsZWdhdG9yKSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTURlbGVnYXRvcihkb2N1bWVudCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCBnbG9iYWxEb2N1bWVudFxuXG4gICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gICAgdGhpcy5yYXdFdmVudExpc3RlbmVycyA9IHt9XG4gICAgdGhpcy5nbG9iYWxMaXN0ZW5lcnMgPSB7fVxufVxuXG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudFxuRE9NRGVsZWdhdG9yLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRcblxuRE9NRGVsZWdhdG9yLmFsbG9jYXRlSGFuZGxlID1cbiAgICBmdW5jdGlvbiBhbGxvY2F0ZUhhbmRsZShmdW5jKSB7XG4gICAgICAgIHZhciBoYW5kbGUgPSBuZXcgSGFuZGxlKClcblxuICAgICAgICBIQU5ETEVSX1NUT1JFKGhhbmRsZSkuZnVuYyA9IGZ1bmM7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZVxuICAgIH1cblxuRE9NRGVsZWdhdG9yLnRyYW5zZm9ybUhhbmRsZSA9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSGFuZGxlKGhhbmRsZSwgYnJvYWRjYXN0KSB7XG4gICAgICAgIHZhciBmdW5jID0gSEFORExFUl9TVE9SRShoYW5kbGUpLmZ1bmNcblxuICAgICAgICByZXR1cm4gdGhpcy5hbGxvY2F0ZUhhbmRsZShmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGJyb2FkY2FzdChldiwgZnVuYyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5nbG9iYWxMaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5pbmRleE9mKGZuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGZuKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbG9iYWxMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IGxpc3RlbmVycztcbiAgICB9XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdO1xuXG4gICAgICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGZuKVxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxuXG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLmxpc3RlblRvID0gZnVuY3Rpb24gbGlzdGVuVG8oZXZlbnROYW1lKSB7XG4gICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnRzKSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdKys7XG5cbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSAhPT0gMSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1cbiAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5yYXdFdmVudExpc3RlbmVyc1tldmVudE5hbWVdID1cbiAgICAgICAgICAgIGNyZWF0ZUhhbmRsZXIoZXZlbnROYW1lLCB0aGlzKVxuICAgIH1cblxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdHJ1ZSlcbn1cblxuRE9NRGVsZWdhdG9yLnByb3RvdHlwZS51bmxpc3RlblRvID0gZnVuY3Rpb24gdW5saXN0ZW5UbyhldmVudE5hbWUpIHtcbiAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudHMpKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFscmVhZHkgdW5saXN0ZW5lZCB0byBldmVudC5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS0tO1xuXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyID0gdGhpcy5yYXdFdmVudExpc3RlbmVyc1tldmVudE5hbWVdXG5cbiAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS1kZWxlZ2F0b3IjdW5saXN0ZW5UbzogY2Fubm90IFwiICtcbiAgICAgICAgICAgIFwidW5saXN0ZW4gdG8gXCIgKyBldmVudE5hbWUpXG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIYW5kbGVyKGV2ZW50TmFtZSwgZGVsZWdhdG9yKSB7XG4gICAgdmFyIGdsb2JhbExpc3RlbmVycyA9IGRlbGVnYXRvci5nbG9iYWxMaXN0ZW5lcnM7XG4gICAgdmFyIGRlbGVnYXRvclRhcmdldCA9IGRlbGVnYXRvci50YXJnZXQ7XG5cbiAgICByZXR1cm4gaGFuZGxlclxuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihldikge1xuICAgICAgICB2YXIgZ2xvYmFsSGFuZGxlcnMgPSBnbG9iYWxMaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXVxuXG4gICAgICAgIGlmIChnbG9iYWxIYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsRXZlbnQgPSBuZXcgUHJveHlFdmVudChldik7XG4gICAgICAgICAgICBnbG9iYWxFdmVudC5jdXJyZW50VGFyZ2V0ID0gZGVsZWdhdG9yVGFyZ2V0O1xuICAgICAgICAgICAgY2FsbExpc3RlbmVycyhnbG9iYWxIYW5kbGVycywgZ2xvYmFsRXZlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBmaW5kQW5kSW52b2tlTGlzdGVuZXJzKGV2LnRhcmdldCwgZXYsIGV2ZW50TmFtZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRBbmRJbnZva2VMaXN0ZW5lcnMoZWxlbSwgZXYsIGV2ZW50TmFtZSkge1xuICAgIHZhciBsaXN0ZW5lciA9IGdldExpc3RlbmVyKGVsZW0sIGV2ZW50TmFtZSlcblxuICAgIGlmIChsaXN0ZW5lciAmJiBsaXN0ZW5lci5oYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lckV2ZW50ID0gbmV3IFByb3h5RXZlbnQoZXYpO1xuICAgICAgICBsaXN0ZW5lckV2ZW50LmN1cnJlbnRUYXJnZXQgPSBsaXN0ZW5lci5jdXJyZW50VGFyZ2V0XG4gICAgICAgIGNhbGxMaXN0ZW5lcnMobGlzdGVuZXIuaGFuZGxlcnMsIGxpc3RlbmVyRXZlbnQpXG5cbiAgICAgICAgaWYgKGxpc3RlbmVyRXZlbnQuX2J1YmJsZXMpIHtcbiAgICAgICAgICAgIHZhciBuZXh0VGFyZ2V0ID0gbGlzdGVuZXIuY3VycmVudFRhcmdldC5wYXJlbnROb2RlXG4gICAgICAgICAgICBmaW5kQW5kSW52b2tlTGlzdGVuZXJzKG5leHRUYXJnZXQsIGV2LCBldmVudE5hbWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldExpc3RlbmVyKHRhcmdldCwgdHlwZSkge1xuICAgIC8vIHRlcm1pbmF0ZSByZWN1cnNpb24gaWYgcGFyZW50IGlzIGBudWxsYFxuICAgIGlmICh0YXJnZXQgPT09IG51bGwgfHwgdHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHZhciBldmVudHMgPSBFdlN0b3JlKHRhcmdldClcbiAgICAvLyBmZXRjaCBsaXN0IG9mIGhhbmRsZXIgZm5zIGZvciB0aGlzIGV2ZW50XG4gICAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV1cbiAgICB2YXIgYWxsSGFuZGxlciA9IGV2ZW50cy5ldmVudFxuXG4gICAgaWYgKCFoYW5kbGVyICYmICFhbGxIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRMaXN0ZW5lcih0YXJnZXQucGFyZW50Tm9kZSwgdHlwZSlcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnMgPSBbXS5jb25jYXQoaGFuZGxlciB8fCBbXSwgYWxsSGFuZGxlciB8fCBbXSlcbiAgICByZXR1cm4gbmV3IExpc3RlbmVyKHRhcmdldCwgaGFuZGxlcnMpXG59XG5cbmZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoaGFuZGxlcnMsIGV2KSB7XG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaGFuZGxlcihldilcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaGFuZGxlci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2KVxuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIudHlwZSA9PT0gXCJkb20tZGVsZWdhdG9yLWhhbmRsZVwiKSB7XG4gICAgICAgICAgICBIQU5ETEVSX1NUT1JFKGhhbmRsZXIpLmZ1bmMoZXYpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb20tZGVsZWdhdG9yOiB1bmtub3duIGhhbmRsZXIgXCIgK1xuICAgICAgICAgICAgICAgIFwiZm91bmQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoaGFuZGxlcnMpKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIExpc3RlbmVyKHRhcmdldCwgaGFuZGxlcnMpIHtcbiAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnNcbn1cblxuZnVuY3Rpb24gSGFuZGxlKCkge1xuICAgIHRoaXMudHlwZSA9IFwiZG9tLWRlbGVnYXRvci1oYW5kbGVcIlxufVxuIiwidmFyIEluZGl2aWR1YWwgPSByZXF1aXJlKFwiaW5kaXZpZHVhbFwiKVxudmFyIGN1aWQgPSByZXF1aXJlKFwiY3VpZFwiKVxudmFyIGdsb2JhbERvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxuXG52YXIgRE9NRGVsZWdhdG9yID0gcmVxdWlyZShcIi4vZG9tLWRlbGVnYXRvci5qc1wiKVxuXG52YXIgdmVyc2lvbktleSA9IFwiMTNcIlxudmFyIGNhY2hlS2V5ID0gXCJfX0RPTV9ERUxFR0FUT1JfQ0FDSEVAXCIgKyB2ZXJzaW9uS2V5XG52YXIgY2FjaGVUb2tlbktleSA9IFwiX19ET01fREVMRUdBVE9SX0NBQ0hFX1RPS0VOQFwiICsgdmVyc2lvbktleVxudmFyIGRlbGVnYXRvckNhY2hlID0gSW5kaXZpZHVhbChjYWNoZUtleSwge1xuICAgIGRlbGVnYXRvcnM6IHt9XG59KVxudmFyIGNvbW1vbkV2ZW50cyA9IFtcbiAgICBcImJsdXJcIiwgXCJjaGFuZ2VcIiwgXCJjbGlja1wiLCAgXCJjb250ZXh0bWVudVwiLCBcImRibGNsaWNrXCIsXG4gICAgXCJlcnJvclwiLFwiZm9jdXNcIiwgXCJmb2N1c2luXCIsIFwiZm9jdXNvdXRcIiwgXCJpbnB1dFwiLCBcImtleWRvd25cIixcbiAgICBcImtleXByZXNzXCIsIFwia2V5dXBcIiwgXCJsb2FkXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLFxuICAgIFwicmVzaXplXCIsIFwic2VsZWN0XCIsIFwic3VibWl0XCIsIFwidG91Y2hjYW5jZWxcIixcbiAgICBcInRvdWNoZW5kXCIsIFwidG91Y2hzdGFydFwiLCBcInVubG9hZFwiXG5dXG5cbi8qICBEZWxlZ2F0b3IgaXMgYSB0aGluIHdyYXBwZXIgYXJvdW5kIGEgc2luZ2xldG9uIGBET01EZWxlZ2F0b3JgXG4gICAgICAgIGluc3RhbmNlLlxuXG4gICAgT25seSBvbmUgRE9NRGVsZWdhdG9yIHNob3VsZCBleGlzdCBiZWNhdXNlIHdlIGRvIG5vdCB3YW50XG4gICAgICAgIGR1cGxpY2F0ZSBldmVudCBsaXN0ZW5lcnMgYm91bmQgdG8gdGhlIERPTS5cblxuICAgIGBEZWxlZ2F0b3JgIHdpbGwgYWxzbyBgbGlzdGVuVG8oKWAgYWxsIGV2ZW50cyB1bmxlc3NcbiAgICAgICAgZXZlcnkgY2FsbGVyIG9wdHMgb3V0IG9mIGl0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBEZWxlZ2F0b3JcblxuZnVuY3Rpb24gRGVsZWdhdG9yKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fVxuICAgIHZhciBkb2N1bWVudCA9IG9wdHMuZG9jdW1lbnQgfHwgZ2xvYmFsRG9jdW1lbnRcblxuICAgIHZhciBjYWNoZUtleSA9IGRvY3VtZW50W2NhY2hlVG9rZW5LZXldXG5cbiAgICBpZiAoIWNhY2hlS2V5KSB7XG4gICAgICAgIGNhY2hlS2V5ID1cbiAgICAgICAgICAgIGRvY3VtZW50W2NhY2hlVG9rZW5LZXldID0gY3VpZCgpXG4gICAgfVxuXG4gICAgdmFyIGRlbGVnYXRvciA9IGRlbGVnYXRvckNhY2hlLmRlbGVnYXRvcnNbY2FjaGVLZXldXG5cbiAgICBpZiAoIWRlbGVnYXRvcikge1xuICAgICAgICBkZWxlZ2F0b3IgPSBkZWxlZ2F0b3JDYWNoZS5kZWxlZ2F0b3JzW2NhY2hlS2V5XSA9XG4gICAgICAgICAgICBuZXcgRE9NRGVsZWdhdG9yKGRvY3VtZW50KVxuICAgIH1cblxuICAgIGlmIChvcHRzLmRlZmF1bHRFdmVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tbW9uRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWxlZ2F0b3IubGlzdGVuVG8oY29tbW9uRXZlbnRzW2ldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGVnYXRvclxufVxuXG5EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGUgPSBET01EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGU7XG5EZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlID0gRE9NRGVsZWdhdG9yLnRyYW5zZm9ybUhhbmRsZTtcbiIsIi8qKlxuICogY3VpZC5qc1xuICogQ29sbGlzaW9uLXJlc2lzdGFudCBVSUQgZ2VuZXJhdG9yIGZvciBicm93c2VycyBhbmQgbm9kZS5cbiAqIFNlcXVlbnRpYWwgZm9yIGZhc3QgZGIgbG9va3VwcyBhbmQgcmVjZW5jeSBzb3J0aW5nLlxuICogU2FmZSBmb3IgZWxlbWVudCBJRHMgYW5kIHNlcnZlci1zaWRlIGxvb2t1cHMuXG4gKlxuICogRXh0cmFjdGVkIGZyb20gQ0xDVFJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEVyaWMgRWxsaW90dCAyMDEyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qZ2xvYmFsIHdpbmRvdywgbmF2aWdhdG9yLCBkb2N1bWVudCwgcmVxdWlyZSwgcHJvY2VzcywgbW9kdWxlICovXG4oZnVuY3Rpb24gKGFwcCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBuYW1lc3BhY2UgPSAnY3VpZCcsXG4gICAgYyA9IDAsXG4gICAgYmxvY2tTaXplID0gNCxcbiAgICBiYXNlID0gMzYsXG4gICAgZGlzY3JldGVWYWx1ZXMgPSBNYXRoLnBvdyhiYXNlLCBibG9ja1NpemUpLFxuXG4gICAgcGFkID0gZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICAgICAgdmFyIHMgPSBcIjAwMDAwMDAwMFwiICsgbnVtO1xuICAgICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoLXNpemUpO1xuICAgIH0sXG5cbiAgICByYW5kb21CbG9jayA9IGZ1bmN0aW9uIHJhbmRvbUJsb2NrKCkge1xuICAgICAgcmV0dXJuIHBhZCgoTWF0aC5yYW5kb20oKSAqXG4gICAgICAgICAgICBkaXNjcmV0ZVZhbHVlcyA8PCAwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKGJhc2UpLCBibG9ja1NpemUpO1xuICAgIH0sXG5cbiAgICBzYWZlQ291bnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGMgPSAoYyA8IGRpc2NyZXRlVmFsdWVzKSA/IGMgOiAwO1xuICAgICAgYysrOyAvLyB0aGlzIGlzIG5vdCBzdWJsaW1pbmFsXG4gICAgICByZXR1cm4gYyAtIDE7XG4gICAgfSxcblxuICAgIGFwaSA9IGZ1bmN0aW9uIGN1aWQoKSB7XG4gICAgICAvLyBTdGFydGluZyB3aXRoIGEgbG93ZXJjYXNlIGxldHRlciBtYWtlc1xuICAgICAgLy8gaXQgSFRNTCBlbGVtZW50IElEIGZyaWVuZGx5LlxuICAgICAgdmFyIGxldHRlciA9ICdjJywgLy8gaGFyZC1jb2RlZCBhbGxvd3MgZm9yIHNlcXVlbnRpYWwgYWNjZXNzXG5cbiAgICAgICAgLy8gdGltZXN0YW1wXG4gICAgICAgIC8vIHdhcm5pbmc6IHRoaXMgZXhwb3NlcyB0aGUgZXhhY3QgZGF0ZSBhbmQgdGltZVxuICAgICAgICAvLyB0aGF0IHRoZSB1aWQgd2FzIGNyZWF0ZWQuXG4gICAgICAgIHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoYmFzZSksXG5cbiAgICAgICAgLy8gUHJldmVudCBzYW1lLW1hY2hpbmUgY29sbGlzaW9ucy5cbiAgICAgICAgY291bnRlcixcblxuICAgICAgICAvLyBBIGZldyBjaGFycyB0byBnZW5lcmF0ZSBkaXN0aW5jdCBpZHMgZm9yIGRpZmZlcmVudFxuICAgICAgICAvLyBjbGllbnRzIChzbyBkaWZmZXJlbnQgY29tcHV0ZXJzIGFyZSBmYXIgbGVzc1xuICAgICAgICAvLyBsaWtlbHkgdG8gZ2VuZXJhdGUgdGhlIHNhbWUgaWQpXG4gICAgICAgIGZpbmdlcnByaW50ID0gYXBpLmZpbmdlcnByaW50KCksXG5cbiAgICAgICAgLy8gR3JhYiBzb21lIG1vcmUgY2hhcnMgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHJhbmRvbSA9IHJhbmRvbUJsb2NrKCkgKyByYW5kb21CbG9jaygpO1xuXG4gICAgICAgIGNvdW50ZXIgPSBwYWQoc2FmZUNvdW50ZXIoKS50b1N0cmluZyhiYXNlKSwgYmxvY2tTaXplKTtcblxuICAgICAgcmV0dXJuICAobGV0dGVyICsgdGltZXN0YW1wICsgY291bnRlciArIGZpbmdlcnByaW50ICsgcmFuZG9tKTtcbiAgICB9O1xuXG4gIGFwaS5zbHVnID0gZnVuY3Rpb24gc2x1ZygpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGNvdW50ZXIsXG4gICAgICBwcmludCA9IGFwaS5maW5nZXJwcmludCgpLnNsaWNlKDAsMSkgK1xuICAgICAgICBhcGkuZmluZ2VycHJpbnQoKS5zbGljZSgtMSksXG4gICAgICByYW5kb20gPSByYW5kb21CbG9jaygpLnNsaWNlKC0yKTtcblxuICAgICAgY291bnRlciA9IHNhZmVDb3VudGVyKCkudG9TdHJpbmcoMzYpLnNsaWNlKC00KTtcblxuICAgIHJldHVybiBkYXRlLnNsaWNlKC0yKSArXG4gICAgICBjb3VudGVyICsgcHJpbnQgKyByYW5kb207XG4gIH07XG5cbiAgYXBpLmdsb2JhbENvdW50ID0gZnVuY3Rpb24gZ2xvYmFsQ291bnQoKSB7XG4gICAgLy8gV2Ugd2FudCB0byBjYWNoZSB0aGUgcmVzdWx0cyBvZiB0aGlzXG4gICAgdmFyIGNhY2hlID0gKGZ1bmN0aW9uIGNhbGMoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgIGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGkgaW4gd2luZG93KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgIH0oKSk7XG5cbiAgICBhcGkuZ2xvYmFsQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWNoZTsgfTtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgYXBpLmZpbmdlcnByaW50ID0gZnVuY3Rpb24gYnJvd3NlclByaW50KCkge1xuICAgIHJldHVybiBwYWQoKG5hdmlnYXRvci5taW1lVHlwZXMubGVuZ3RoICtcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubGVuZ3RoKS50b1N0cmluZygzNikgK1xuICAgICAgYXBpLmdsb2JhbENvdW50KCkudG9TdHJpbmcoMzYpLCA0KTtcbiAgfTtcblxuICAvLyBkb24ndCBjaGFuZ2UgYW55dGhpbmcgZnJvbSBoZXJlIGRvd24uXG4gIGlmIChhcHAucmVnaXN0ZXIpIHtcbiAgICBhcHAucmVnaXN0ZXIobmFtZXNwYWNlLCBhcGkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBhcGk7XG4gIH0gZWxzZSB7XG4gICAgYXBwW25hbWVzcGFjZV0gPSBhcGk7XG4gIH1cblxufSh0aGlzLmFwcGxpdHVkZSB8fCB0aGlzKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBPbmVWZXJzaW9uQ29uc3RyYWludCA9IHJlcXVpcmUoJ2luZGl2aWR1YWwvb25lLXZlcnNpb24nKTtcblxudmFyIE1ZX1ZFUlNJT04gPSAnNyc7XG5PbmVWZXJzaW9uQ29uc3RyYWludCgnZXYtc3RvcmUnLCBNWV9WRVJTSU9OKTtcblxudmFyIGhhc2hLZXkgPSAnX19FVl9TVE9SRV9LRVlAJyArIE1ZX1ZFUlNJT047XG5cbm1vZHVsZS5leHBvcnRzID0gRXZTdG9yZTtcblxuZnVuY3Rpb24gRXZTdG9yZShlbGVtKSB7XG4gICAgdmFyIGhhc2ggPSBlbGVtW2hhc2hLZXldO1xuXG4gICAgaWYgKCFoYXNoKSB7XG4gICAgICAgIGhhc2ggPSBlbGVtW2hhc2hLZXldID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2g7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qZ2xvYmFsIHdpbmRvdywgZ2xvYmFsKi9cblxudmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgIGdsb2JhbCA6IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGl2aWR1YWw7XG5cbmZ1bmN0aW9uIEluZGl2aWR1YWwoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gcm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdFtrZXldO1xuICAgIH1cblxuICAgIHJvb3Rba2V5XSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5kaXZpZHVhbCA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbmVWZXJzaW9uO1xuXG5mdW5jdGlvbiBPbmVWZXJzaW9uKG1vZHVsZU5hbWUsIHZlcnNpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciBrZXkgPSAnX19JTkRJVklEVUFMX09ORV9WRVJTSU9OXycgKyBtb2R1bGVOYW1lO1xuICAgIHZhciBlbmZvcmNlS2V5ID0ga2V5ICsgJ19FTkZPUkNFX1NJTkdMRVRPTic7XG5cbiAgICB2YXIgdmVyc2lvblZhbHVlID0gSW5kaXZpZHVhbChlbmZvcmNlS2V5LCB2ZXJzaW9uKTtcblxuICAgIGlmICh2ZXJzaW9uVmFsdWUgIT09IHZlcnNpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBoYXZlIG9uZSBjb3B5IG9mICcgK1xuICAgICAgICAgICAgbW9kdWxlTmFtZSArICcuXFxuJyArXG4gICAgICAgICAgICAnWW91IGFscmVhZHkgaGF2ZSB2ZXJzaW9uICcgKyB2ZXJzaW9uVmFsdWUgK1xuICAgICAgICAgICAgJyBpbnN0YWxsZWQuXFxuJyArXG4gICAgICAgICAgICAnVGhpcyBtZWFucyB5b3UgY2Fubm90IGluc3RhbGwgdmVyc2lvbiAnICsgdmVyc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZGl2aWR1YWwoa2V5LCBkZWZhdWx0VmFsdWUpO1xufVxuIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50O1xufSBlbHNlIHtcbiAgICB2YXIgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbn1cbiIsInZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgIHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID9cbiAgICBnbG9iYWwgOiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRpdmlkdWFsXG5cbmZ1bmN0aW9uIEluZGl2aWR1YWwoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChyb290W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHJvb3Rba2V5XVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyb290LCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIHJldHVybiB2YWx1ZVxufVxuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJ2YXIgaGlkZGVuU3RvcmUgPSByZXF1aXJlKCcuL2hpZGRlbi1zdG9yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVN0b3JlO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICB2YXIga2V5ID0ge307XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbidcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYWttYXAtc2hpbTogS2V5IG11c3QgYmUgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdG9yZSA9IG9iai52YWx1ZU9mKGtleSk7XG4gICAgICAgIHJldHVybiBzdG9yZSAmJiBzdG9yZS5pZGVudGl0eSA9PT0ga2V5ID9cbiAgICAgICAgICAgIHN0b3JlIDogaGlkZGVuU3RvcmUob2JqLCBrZXkpO1xuICAgIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhpZGRlblN0b3JlO1xuXG5mdW5jdGlvbiBoaWRkZW5TdG9yZShvYmosIGtleSkge1xuICAgIHZhciBzdG9yZSA9IHsgaWRlbnRpdHk6IGtleSB9O1xuICAgIHZhciB2YWx1ZU9mID0gb2JqLnZhbHVlT2Y7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInZhbHVlT2ZcIiwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGtleSA/XG4gICAgICAgICAgICAgICAgdmFsdWVPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogc3RvcmU7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG4iLCJ2YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiaW5oZXJpdHNcIilcblxudmFyIEFMTF9QUk9QUyA9IFtcbiAgICBcImFsdEtleVwiLCBcImJ1YmJsZXNcIiwgXCJjYW5jZWxhYmxlXCIsIFwiY3RybEtleVwiLFxuICAgIFwiZXZlbnRQaGFzZVwiLCBcIm1ldGFLZXlcIiwgXCJyZWxhdGVkVGFyZ2V0XCIsIFwic2hpZnRLZXlcIixcbiAgICBcInRhcmdldFwiLCBcInRpbWVTdGFtcFwiLCBcInR5cGVcIiwgXCJ2aWV3XCIsIFwid2hpY2hcIlxuXVxudmFyIEtFWV9QUk9QUyA9IFtcImNoYXJcIiwgXCJjaGFyQ29kZVwiLCBcImtleVwiLCBcImtleUNvZGVcIl1cbnZhciBNT1VTRV9QUk9QUyA9IFtcbiAgICBcImJ1dHRvblwiLCBcImJ1dHRvbnNcIiwgXCJjbGllbnRYXCIsIFwiY2xpZW50WVwiLCBcImxheWVyWFwiLFxuICAgIFwibGF5ZXJZXCIsIFwib2Zmc2V0WFwiLCBcIm9mZnNldFlcIiwgXCJwYWdlWFwiLCBcInBhZ2VZXCIsXG4gICAgXCJzY3JlZW5YXCIsIFwic2NyZWVuWVwiLCBcInRvRWxlbWVudFwiXG5dXG5cbnZhciBya2V5RXZlbnQgPSAvXmtleXxpbnB1dC9cbnZhciBybW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlFdmVudFxuXG5mdW5jdGlvbiBQcm94eUV2ZW50KGV2KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb3h5RXZlbnQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHlFdmVudChldilcbiAgICB9XG5cbiAgICBpZiAocmtleUV2ZW50LnRlc3QoZXYudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBLZXlFdmVudChldilcbiAgICB9IGVsc2UgaWYgKHJtb3VzZUV2ZW50LnRlc3QoZXYudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3VzZUV2ZW50KGV2KVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQUxMX1BST1BTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wS2V5ID0gQUxMX1BST1BTW2ldXG4gICAgICAgIHRoaXNbcHJvcEtleV0gPSBldltwcm9wS2V5XVxuICAgIH1cblxuICAgIHRoaXMuX3Jhd0V2ZW50ID0gZXZcbiAgICB0aGlzLl9idWJibGVzID0gZmFsc2U7XG59XG5cblByb3h5RXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Jhd0V2ZW50LnByZXZlbnREZWZhdWx0KClcbn1cblxuUHJveHlFdmVudC5wcm90b3R5cGUuc3RhcnRQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWJibGVzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gTW91c2VFdmVudChldikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQUxMX1BST1BTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wS2V5ID0gQUxMX1BST1BTW2ldXG4gICAgICAgIHRoaXNbcHJvcEtleV0gPSBldltwcm9wS2V5XVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgTU9VU0VfUFJPUFMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG1vdXNlUHJvcEtleSA9IE1PVVNFX1BST1BTW2pdXG4gICAgICAgIHRoaXNbbW91c2VQcm9wS2V5XSA9IGV2W21vdXNlUHJvcEtleV1cbiAgICB9XG5cbiAgICB0aGlzLl9yYXdFdmVudCA9IGV2XG59XG5cbmluaGVyaXRzKE1vdXNlRXZlbnQsIFByb3h5RXZlbnQpXG5cbmZ1bmN0aW9uIEtleUV2ZW50KGV2KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBTExfUFJPUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BLZXkgPSBBTExfUFJPUFNbaV1cbiAgICAgICAgdGhpc1twcm9wS2V5XSA9IGV2W3Byb3BLZXldXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBLRVlfUFJPUFMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGtleVByb3BLZXkgPSBLRVlfUFJPUFNbal1cbiAgICAgICAgdGhpc1trZXlQcm9wS2V5XSA9IGV2W2tleVByb3BLZXldXG4gICAgfVxuXG4gICAgdGhpcy5fcmF3RXZlbnQgPSBldlxufVxuXG5pbmhlcml0cyhLZXlFdmVudCwgUHJveHlFdmVudClcbiIsInZhciBFdlN0b3JlID0gcmVxdWlyZShcImV2LXN0b3JlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlRXZlbnRcblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQodGFyZ2V0LCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGV2ZW50cyA9IEV2U3RvcmUodGFyZ2V0KVxuICAgIHZhciBldmVudCA9IGV2ZW50c1t0eXBlXVxuXG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgZXZlbnQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gaGFuZGxlcikge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBudWxsXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBFdmVudFxuXG5mdW5jdGlvbiBFdmVudCgpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gW11cblxuICAgIHJldHVybiB7IGJyb2FkY2FzdDogYnJvYWRjYXN0LCBsaXN0ZW46IGV2ZW50IH1cblxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdCh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldKHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG5cbiAgICAgICAgcmV0dXJuIHJlbW92ZUxpc3RlbmVyXG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIGV2ZW50ID0gcmVxdWlyZShcIi4vc2luZ2xlLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbGVcblxuZnVuY3Rpb24gbXVsdGlwbGUobmFtZXMpIHtcbiAgICByZXR1cm4gbmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgYWNjW25hbWVdID0gZXZlbnQoKVxuICAgICAgICByZXR1cm4gYWNjXG4gICAgfSwge30pXG59XG4iLCJ2YXIgRXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50LmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbGVcblxuZnVuY3Rpb24gU2luZ2xlKCkge1xuICAgIHZhciB0dXBsZSA9IEV2ZW50KClcblxuICAgIHJldHVybiBmdW5jdGlvbiBldmVudCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0dXBsZS5saXN0ZW4odmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHVwbGUuYnJvYWRjYXN0KHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIHJhZiA9IHJlcXVpcmUoXCJyYWZcIilcbnZhciBUeXBlZEVycm9yID0gcmVxdWlyZShcImVycm9yL3R5cGVkXCIpXG5cbnZhciBJbnZhbGlkVXBkYXRlSW5SZW5kZXIgPSBUeXBlZEVycm9yKHtcbiAgICB0eXBlOiBcIm1haW4tbG9vcC5pbnZhbGlkLnVwZGF0ZS5pbi1yZW5kZXJcIixcbiAgICBtZXNzYWdlOiBcIm1haW4tbG9vcDogVW5leHBlY3RlZCB1cGRhdGUgb2NjdXJyZWQgaW4gbG9vcC5cXG5cIiArXG4gICAgICAgIFwiV2UgYXJlIGN1cnJlbnRseSByZW5kZXJpbmcgYSB2aWV3LCBcIiArXG4gICAgICAgICAgICBcInlvdSBjYW4ndCBjaGFuZ2Ugc3RhdGUgcmlnaHQgbm93LlxcblwiICtcbiAgICAgICAgXCJUaGUgZGlmZiBpczoge3N0cmluZ0RpZmZ9LlxcblwiICtcbiAgICAgICAgXCJTVUdHRVNURUQgRklYOiBmaW5kIHRoZSBzdGF0ZSBtdXRhdGlvbiBpbiB5b3VyIHZpZXcgXCIgK1xuICAgICAgICAgICAgXCJvciByZW5kZXJpbmcgZnVuY3Rpb24gYW5kIHJlbW92ZSBpdC5cXG5cIiArXG4gICAgICAgIFwiVGhlIHZpZXcgc2hvdWxkIG5vdCBoYXZlIGFueSBzaWRlIGVmZmVjdHMuXFxuXCIsXG4gICAgZGlmZjogbnVsbCxcbiAgICBzdHJpbmdEaWZmOiBudWxsXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5cblxuZnVuY3Rpb24gbWFpbihpbml0aWFsU3RhdGUsIHZpZXcsIG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fVxuXG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWxTdGF0ZVxuICAgIHZhciBjcmVhdGUgPSBvcHRzLmNyZWF0ZVxuICAgIHZhciBkaWZmID0gb3B0cy5kaWZmXG4gICAgdmFyIHBhdGNoID0gb3B0cy5wYXRjaFxuICAgIHZhciByZWRyYXdTY2hlZHVsZWQgPSBmYWxzZVxuXG4gICAgdmFyIHRyZWUgPSBvcHRzLmluaXRpYWxUcmVlIHx8IHZpZXcoY3VycmVudFN0YXRlKVxuICAgIHZhciB0YXJnZXQgPSBvcHRzLnRhcmdldCB8fCBjcmVhdGUodHJlZSwgb3B0cylcbiAgICB2YXIgaW5SZW5kZXJpbmdUcmFuc2FjdGlvbiA9IGZhbHNlXG5cbiAgICBjdXJyZW50U3RhdGUgPSBudWxsXG5cbiAgICB2YXIgbG9vcCA9IHtcbiAgICAgICAgc3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfVxuICAgIHJldHVybiBsb29wXG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKGluUmVuZGVyaW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IEludmFsaWRVcGRhdGVJblJlbmRlcih7XG4gICAgICAgICAgICAgICAgZGlmZjogc3RhdGUuX2RpZmYsXG4gICAgICAgICAgICAgICAgc3RyaW5nRGlmZjogSlNPTi5zdHJpbmdpZnkoc3RhdGUuX2RpZmYpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gbnVsbCAmJiAhcmVkcmF3U2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZWRyYXdTY2hlZHVsZWQgPSB0cnVlXG4gICAgICAgICAgICByYWYocmVkcmF3KVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0YXRlID0gc3RhdGVcbiAgICAgICAgbG9vcC5zdGF0ZSA9IHN0YXRlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICAgICByZWRyYXdTY2hlZHVsZWQgPSBmYWxzZVxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGluUmVuZGVyaW5nVHJhbnNhY3Rpb24gPSB0cnVlXG4gICAgICAgIHZhciBuZXdUcmVlID0gdmlldyhjdXJyZW50U3RhdGUpXG5cbiAgICAgICAgaWYgKG9wdHMuY3JlYXRlT25seSkge1xuICAgICAgICAgICAgaW5SZW5kZXJpbmdUcmFuc2FjdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICBjcmVhdGUobmV3VHJlZSwgb3B0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXRjaGVzID0gZGlmZih0cmVlLCBuZXdUcmVlLCBvcHRzKVxuICAgICAgICAgICAgaW5SZW5kZXJpbmdUcmFuc2FjdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICB0YXJnZXQgPSBwYXRjaCh0YXJnZXQsIHBhdGNoZXMsIG9wdHMpXG4gICAgICAgIH1cblxuICAgICAgICB0cmVlID0gbmV3VHJlZVxuICAgICAgICBjdXJyZW50U3RhdGUgPSBudWxsXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBjYW1lbENhc2Uob2JqKTtcbiAgICByZXR1cm4gd2FsayhvYmopO1xufTtcblxuZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG4gICAgaWYgKGlzRGF0ZShvYmopIHx8IGlzUmVnZXgob2JqKSkgcmV0dXJuIG9iajtcbiAgICBpZiAoaXNBcnJheShvYmopKSByZXR1cm4gbWFwKG9iaiwgd2Fsayk7XG4gICAgcmV0dXJuIHJlZHVjZShvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgY2FtZWwgPSBjYW1lbENhc2Uoa2V5KTtcbiAgICAgICAgYWNjW2NhbWVsXSA9IHdhbGsob2JqW2tleV0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW18uLV0oXFx3fCQpL2csIGZ1bmN0aW9uIChfLHgpIHtcbiAgICAgICAgcmV0dXJuIHgudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNEYXRlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxudmFyIGlzUmVnZXggPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcmVkdWNlICh4cywgZiwgYWNjKSB7XG4gICAgaWYgKHhzLnJlZHVjZSkgcmV0dXJuIHhzLnJlZHVjZShmLCBhY2MpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWNjID0gZihhY2MsIHhzW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbn1cbiIsInZhciBuYXJncyA9IC9cXHsoWzAtOWEtekEtWl0rKVxcfS9nXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZShzdHJpbmcpIHtcbiAgICB2YXIgYXJnc1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBhcmdzID0gYXJndW1lbnRzWzFdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIH1cblxuICAgIGlmICghYXJncyB8fCAhYXJncy5oYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgICBhcmdzID0ge31cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UobmFyZ3MsIGZ1bmN0aW9uIHJlcGxhY2VBcmcobWF0Y2gsIGksIGluZGV4KSB7XG4gICAgICAgIHZhciByZXN1bHRcblxuICAgICAgICBpZiAoc3RyaW5nW2luZGV4IC0gMV0gPT09IFwie1wiICYmXG4gICAgICAgICAgICBzdHJpbmdbaW5kZXggKyBtYXRjaC5sZW5ndGhdID09PSBcIn1cIikge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGFyZ3MuaGFzT3duUHJvcGVydHkoaSkgPyBhcmdzW2ldIDogbnVsbFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJ2YXIgY2FtZWxpemUgPSByZXF1aXJlKFwiY2FtZWxpemVcIilcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCJzdHJpbmctdGVtcGxhdGVcIilcbnZhciBleHRlbmQgPSByZXF1aXJlKFwieHRlbmQvbXV0YWJsZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGVkRXJyb3JcblxuZnVuY3Rpb24gVHlwZWRFcnJvcihhcmdzKSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFyZ3MgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmICghYXJncy50eXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFyZ3MudHlwZSBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJncy5tZXNzYWdlIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gYXJncy5tZXNzYWdlXG5cbiAgICBpZiAoYXJncy50eXBlICYmICFhcmdzLm5hbWUpIHtcbiAgICAgICAgdmFyIGVycm9yTmFtZSA9IGNhbWVsaXplKGFyZ3MudHlwZSkgKyBcIkVycm9yXCJcbiAgICAgICAgYXJncy5uYW1lID0gZXJyb3JOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBlcnJvck5hbWUuc3Vic3RyKDEpXG4gICAgfVxuXG4gICAgZXh0ZW5kKGNyZWF0ZUVycm9yLCBhcmdzKTtcbiAgICBjcmVhdGVFcnJvci5fbmFtZSA9IGFyZ3MubmFtZTtcblxuICAgIHJldHVybiBjcmVhdGVFcnJvcjtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG9wdHMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBFcnJvcigpXG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwgXCJ0eXBlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudHlwZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBvcHRpb25zID0gZXh0ZW5kKHt9LCBhcmdzLCBvcHRzKVxuXG4gICAgICAgIGV4dGVuZChyZXN1bHQsIG9wdGlvbnMpXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gdGVtcGxhdGUobWVzc2FnZSwgb3B0aW9ucylcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHt9IDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IGdsb2JhbFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gZ2xvYmFsWydjYW5jZWwnICsgc3VmZml4XSB8fCBnbG9iYWxbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuICAsIGlzTmF0aXZlID0gdHJ1ZVxuXG5mb3IodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJhZjsgaSsrKSB7XG4gIHJhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICBpc05hdGl2ZSA9IGZhbHNlXG5cbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIGlmKCFpc05hdGl2ZSkge1xuICAgIHJldHVybiByYWYuY2FsbChnbG9iYWwsIGZuKVxuICB9XG4gIHJldHVybiByYWYuY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCkge1xuICAgIHRyeXtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICB9XG4gIH0pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKVxufVxuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjYuM1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuLypcbi8vQCBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5tYXBcbiovXG4iLCJ2YXIgc2V0Tm9uRW51bWVyYWJsZSA9IHJlcXVpcmUoXCIuL2xpYi9zZXQtbm9uLWVudW1lcmFibGUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTGlzdGVuZXJcblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIob2JzZXJ2QXJyYXksIG9ic2Vydikge1xuICAgIHZhciBsaXN0ID0gb2JzZXJ2QXJyYXkuX2xpc3RcblxuICAgIHJldHVybiBvYnNlcnYoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZUxpc3QgPSAgb2JzZXJ2QXJyYXkoKS5zbGljZSgpXG4gICAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihvYnNlcnYpXG5cbiAgICAgICAgLy8gVGhpcyBjb2RlIHBhdGggc2hvdWxkIG5ldmVyIGhpdC4gSWYgdGhpcyBoYXBwZW5zXG4gICAgICAgIC8vIHRoZXJlJ3MgYSBidWcgaW4gdGhlIGNsZWFudXAgY29kZVxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwib2JzZXJ2LWFycmF5OiBVbnJlbW92ZWQgb2JzZXJ2IGxpc3RlbmVyXCJcbiAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICAgICAgICAgIGVyci5saXN0ID0gbGlzdFxuICAgICAgICAgICAgZXJyLmluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIGVyci5vYnNlcnYgPSBvYnNlcnZcbiAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVMaXN0LnNwbGljZShpbmRleCwgMSwgdmFsdWUpXG4gICAgICAgIHNldE5vbkVudW1lcmFibGUodmFsdWVMaXN0LCBcIl9kaWZmXCIsIFsgW2luZGV4LCAxLCB2YWx1ZV0gXSlcblxuICAgICAgICBvYnNlcnZBcnJheS5fb2JzZXJ2U2V0KHZhbHVlTGlzdClcbiAgICB9KVxufVxuIiwidmFyIGFkZExpc3RlbmVyID0gcmVxdWlyZSgnLi9hZGQtbGlzdGVuZXIuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5UGF0Y2hcblxuZnVuY3Rpb24gYXBwbHlQYXRjaCAodmFsdWVMaXN0LCBhcmdzKSB7XG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgdmFsdWVBcmdzID0gYXJncy5tYXAodW5wYWNrKVxuXG4gICAgdmFsdWVMaXN0LnNwbGljZS5hcHBseSh2YWx1ZUxpc3QsIHZhbHVlQXJncylcbiAgICBvYnMuX2xpc3Quc3BsaWNlLmFwcGx5KG9icy5fbGlzdCwgYXJncylcblxuICAgIHZhciBleHRyYVJlbW92ZUxpc3RlbmVycyA9IGFyZ3Muc2xpY2UoMikubWFwKGZ1bmN0aW9uIChvYnNlcnYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnNlcnYgPT09IFwiZnVuY3Rpb25cIiA/XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihvYnMsIG9ic2VydikgOlxuICAgICAgICAgICAgbnVsbFxuICAgIH0pXG5cbiAgICBleHRyYVJlbW92ZUxpc3RlbmVycy51bnNoaWZ0KGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgdmFyIHJlbW92ZWRMaXN0ZW5lcnMgPSBvYnMuX3JlbW92ZUxpc3RlbmVycy5zcGxpY2VcbiAgICAgICAgLmFwcGx5KG9icy5fcmVtb3ZlTGlzdGVuZXJzLCBleHRyYVJlbW92ZUxpc3RlbmVycylcblxuICAgIHJlbW92ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVtb3ZlT2JzZXJ2TGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHJlbW92ZU9ic2Vydkxpc3RlbmVyKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZMaXN0ZW5lcigpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHZhbHVlQXJnc1xufVxuXG5mdW5jdGlvbiB1bnBhY2sodmFsdWUsIGluZGV4KXtcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHZhbHVlKCkgOiB2YWx1ZVxufVxuIiwidmFyIE9ic2VydkFycmF5ID0gcmVxdWlyZShcIi4vaW5kZXguanNcIilcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbnZhciBBUlJBWV9NRVRIT0RTID0gW1xuICAgIFwiY29uY2F0XCIsIFwic2xpY2VcIiwgXCJldmVyeVwiLCBcImZpbHRlclwiLCBcImZvckVhY2hcIiwgXCJpbmRleE9mXCIsXG4gICAgXCJqb2luXCIsIFwibGFzdEluZGV4T2ZcIiwgXCJtYXBcIiwgXCJyZWR1Y2VcIiwgXCJyZWR1Y2VSaWdodFwiLFxuICAgIFwic29tZVwiLCBcInRvU3RyaW5nXCIsIFwidG9Mb2NhbGVTdHJpbmdcIlxuXVxuXG52YXIgbWV0aG9kcyA9IEFSUkFZX01FVEhPRFMubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFtuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLl9saXN0W25hbWVdLmFwcGx5KHRoaXMuX2xpc3QsIGFyZ3VtZW50cylcblxuICAgICAgICBpZiAocmVzICYmIEFycmF5LmlzQXJyYXkocmVzKSkge1xuICAgICAgICAgICAgcmVzID0gT2JzZXJ2QXJyYXkocmVzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1dXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5TWV0aG9kc1xuXG5mdW5jdGlvbiBBcnJheU1ldGhvZHMob2JzKSB7XG4gICAgb2JzLnB1c2ggPSBvYnNlcnZBcnJheVB1c2hcbiAgICBvYnMucG9wID0gb2JzZXJ2QXJyYXlQb3BcbiAgICBvYnMuc2hpZnQgPSBvYnNlcnZBcnJheVNoaWZ0XG4gICAgb2JzLnVuc2hpZnQgPSBvYnNlcnZBcnJheVVuc2hpZnRcbiAgICBvYnMucmV2ZXJzZSA9IHJlcXVpcmUoXCIuL2FycmF5LXJldmVyc2UuanNcIilcbiAgICBvYnMuc29ydCA9IHJlcXVpcmUoXCIuL2FycmF5LXNvcnQuanNcIilcblxuICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAodHVwbGUpIHtcbiAgICAgICAgb2JzW3R1cGxlWzBdXSA9IHR1cGxlWzFdXG4gICAgfSlcbiAgICByZXR1cm4gb2JzXG59XG5cblxuXG5mdW5jdGlvbiBvYnNlcnZBcnJheVB1c2goKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBhcmdzLnVuc2hpZnQodGhpcy5fbGlzdC5sZW5ndGgsIDApXG4gICAgdGhpcy5zcGxpY2UuYXBwbHkodGhpcywgYXJncylcblxuICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aFxufVxuZnVuY3Rpb24gb2JzZXJ2QXJyYXlQb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMuX2xpc3QubGVuZ3RoIC0gMSwgMSlbMF1cbn1cbmZ1bmN0aW9uIG9ic2VydkFycmF5U2hpZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIDEpWzBdXG59XG5mdW5jdGlvbiBvYnNlcnZBcnJheVVuc2hpZnQoKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBhcmdzLnVuc2hpZnQoMCwgMClcbiAgICB0aGlzLnNwbGljZS5hcHBseSh0aGlzLCBhcmdzKVxuXG4gICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoXG59XG5cblxuZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHVsbCByZXF1ZXN0IHdlbGNvbWVcIilcbn1cbiIsInZhciBhcHBseVBhdGNoID0gcmVxdWlyZShcIi4vYXBwbHktcGF0Y2guanNcIilcbnZhciBzZXROb25FbnVtZXJhYmxlID0gcmVxdWlyZSgnLi9saWIvc2V0LW5vbi1lbnVtZXJhYmxlLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSByZXZlcnNlXG5cbmZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgY2hhbmdlcyA9IGZha2VEaWZmKG9icy5fbGlzdC5zbGljZSgpLnJldmVyc2UoKSlcbiAgICB2YXIgdmFsdWVMaXN0ID0gb2JzKCkuc2xpY2UoKS5yZXZlcnNlKClcblxuICAgIHZhciB2YWx1ZUNoYW5nZXMgPSBjaGFuZ2VzLm1hcChhcHBseVBhdGNoLmJpbmQob2JzLCB2YWx1ZUxpc3QpKVxuXG4gICAgc2V0Tm9uRW51bWVyYWJsZSh2YWx1ZUxpc3QsIFwiX2RpZmZcIiwgdmFsdWVDaGFuZ2VzKVxuXG4gICAgb2JzLl9vYnNlcnZTZXQodmFsdWVMaXN0KVxuICAgIHJldHVybiBjaGFuZ2VzXG59XG5cbmZ1bmN0aW9uIGZha2VEaWZmKGFycikge1xuICAgIHZhciBfZGlmZlxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoXG5cbiAgICBpZihsZW4gJSAyKSB7XG4gICAgICAgIHZhciBtaWRQb2ludCA9IChsZW4gLTEpIC8gMlxuICAgICAgICB2YXIgYSA9IFswLCBtaWRQb2ludF0uY29uY2F0KGFyci5zbGljZSgwLCBtaWRQb2ludCkpXG4gICAgICAgIHZhciBiID0gW21pZFBvaW50ICsxLCBtaWRQb2ludF0uY29uY2F0KGFyci5zbGljZShtaWRQb2ludCArMSwgbGVuKSlcbiAgICAgICAgdmFyIF9kaWZmID0gW2EsIGJdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2RpZmYgPSBbIFswLCBsZW5dLmNvbmNhdChhcnIpIF1cbiAgICB9XG5cbiAgICByZXR1cm4gX2RpZmZcbn1cbiIsInZhciBhcHBseVBhdGNoID0gcmVxdWlyZShcIi4vYXBwbHktcGF0Y2guanNcIilcbnZhciBzZXROb25FbnVtZXJhYmxlID0gcmVxdWlyZShcIi4vbGliL3NldC1ub24tZW51bWVyYWJsZS5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRcblxuZnVuY3Rpb24gc29ydChjb21wYXJlKSB7XG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgbGlzdCA9IG9icy5fbGlzdC5zbGljZSgpXG5cbiAgICB2YXIgdW5wYWNrZWQgPSB1bnBhY2sobGlzdClcblxuICAgIHZhciBzb3J0ZWQgPSB1bnBhY2tlZFxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihpdCkgeyByZXR1cm4gaXQudmFsIH0pXG4gICAgICAgICAgICAuc29ydChjb21wYXJlKVxuXG4gICAgdmFyIHBhY2tlZCA9IHJlcGFjayhzb3J0ZWQsIHVucGFja2VkKVxuXG4gICAgLy9mYWtlIGRpZmYgLSBmb3IgcGVyZlxuICAgIC8vYWRpZmYgb24gMTBrIGl0ZW1zID09PSB+MzIwMG1zXG4gICAgLy9mYWtlIG9uIDEwayBpdGVtcyA9PT0gfjExMG1zXG4gICAgdmFyIGNoYW5nZXMgPSBbIFsgMCwgcGFja2VkLmxlbmd0aCBdLmNvbmNhdChwYWNrZWQpIF1cblxuICAgIHZhciB2YWx1ZUNoYW5nZXMgPSBjaGFuZ2VzLm1hcChhcHBseVBhdGNoLmJpbmQob2JzLCBzb3J0ZWQpKVxuXG4gICAgc2V0Tm9uRW51bWVyYWJsZShzb3J0ZWQsIFwiX2RpZmZcIiwgdmFsdWVDaGFuZ2VzKVxuXG4gICAgb2JzLl9vYnNlcnZTZXQoc29ydGVkKVxuICAgIHJldHVybiBjaGFuZ2VzXG59XG5cbmZ1bmN0aW9uIHVucGFjayhsaXN0KSB7XG4gICAgdmFyIHVucGFja2VkID0gW11cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB1bnBhY2tlZC5wdXNoKHtcbiAgICAgICAgICAgIHZhbDogKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbGlzdFtpXSkgPyBsaXN0W2ldKCkgOiBsaXN0W2ldLFxuICAgICAgICAgICAgb2JqOiBsaXN0W2ldXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB1bnBhY2tlZFxufVxuXG5mdW5jdGlvbiByZXBhY2soc29ydGVkLCB1bnBhY2tlZCkge1xuICAgIHZhciBwYWNrZWQgPSBbXVxuXG4gICAgd2hpbGUoc29ydGVkLmxlbmd0aCkge1xuICAgICAgICB2YXIgcyA9IHNvcnRlZC5zaGlmdCgpXG4gICAgICAgIHZhciBpbmR4ID0gaW5kZXhPZihzLCB1bnBhY2tlZClcbiAgICAgICAgaWYofmluZHgpIHBhY2tlZC5wdXNoKHVucGFja2VkLnNwbGljZShpbmR4LCAxKVswXS5vYmopXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhY2tlZFxufVxuXG5mdW5jdGlvbiBpbmRleE9mKG4sIGgpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihuID09PSBoW2ldLnZhbCkgcmV0dXJuIGlcbiAgICB9XG4gICAgcmV0dXJuIC0xXG59XG4iLCJ2YXIgT2JzZXJ2ID0gcmVxdWlyZShcIm9ic2VydlwiKVxuXG4vLyBjaXJjdWxhciBkZXAgYmV0d2VlbiBBcnJheU1ldGhvZHMgJiB0aGlzIGZpbGVcbm1vZHVsZS5leHBvcnRzID0gT2JzZXJ2QXJyYXlcblxudmFyIHNwbGljZSA9IHJlcXVpcmUoXCIuL3NwbGljZS5qc1wiKVxudmFyIHB1dCA9IHJlcXVpcmUoXCIuL3B1dC5qc1wiKVxudmFyIHNldCA9IHJlcXVpcmUoXCIuL3NldC5qc1wiKVxudmFyIHRyYW5zYWN0aW9uID0gcmVxdWlyZShcIi4vdHJhbnNhY3Rpb24uanNcIilcbnZhciBBcnJheU1ldGhvZHMgPSByZXF1aXJlKFwiLi9hcnJheS1tZXRob2RzLmpzXCIpXG52YXIgYWRkTGlzdGVuZXIgPSByZXF1aXJlKFwiLi9hZGQtbGlzdGVuZXIuanNcIilcblxuXG4vKiAgT2JzZXJ2QXJyYXkgOj0gKEFycmF5PFQ+KSA9PiBPYnNlcnY8XG4gICAgICAgIEFycmF5PFQ+ICYgeyBfZGlmZjogQXJyYXkgfVxuICAgID4gJiB7XG4gICAgICAgIHNwbGljZTogKGluZGV4OiBOdW1iZXIsIGFtb3VudDogTnVtYmVyLCByZXN0Li4uOiBUKSA9PlxuICAgICAgICAgICAgQXJyYXk8VD4sXG4gICAgICAgIHB1c2g6ICh2YWx1ZXMuLi46IFQpID0+IE51bWJlcixcbiAgICAgICAgZmlsdGVyOiAobGFtYmRhOiBGdW5jdGlvbiwgdGhpc1ZhbHVlOiBBbnkpID0+IEFycmF5PFQ+LFxuICAgICAgICBpbmRleE9mOiAoaXRlbTogVCwgZnJvbUluZGV4OiBOdW1iZXIpID0+IE51bWJlclxuICAgIH1cblxuICAgIEZpeCB0byBtYWtlIGl0IG1vcmUgbGlrZSBPYnNlcnZIYXNoLlxuXG4gICAgSS5lLiB5b3Ugd3JpdGUgb2JzZXJ2YWJsZXMgaW50byBpdC5cbiAgICAgICAgcmVhZGluZyBtZXRob2RzIHRha2UgcGxhaW4gSlMgb2JqZWN0cyB0byByZWFkXG4gICAgICAgIGFuZCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5IGlzIGFsd2F5cyBhbiBhcnJheSBvZiBwbGFpblxuICAgICAgICBvYmpzZWN0LlxuXG4gICAgICAgIFRoZSBvYnNlcnYgYXJyYXkgaW5zdGFuY2UgaXRzZWxmIHdvdWxkIGhhdmUgaW5kZXhlZFxuICAgICAgICBwcm9wZXJ0aWVzIHRoYXQgYXJlIHRoZSBvYnNlcnZhYmxlc1xuKi9cbmZ1bmN0aW9uIE9ic2VydkFycmF5KGluaXRpYWxMaXN0KSB7XG4gICAgLy8gbGlzdCBpcyB0aGUgaW50ZXJuYWwgbXV0YWJsZSBsaXN0IG9ic2VydiBpbnN0YW5jZXMgdGhhdFxuICAgIC8vIGFsbCBtZXRob2RzIG9uIGBvYnNgIGRpc3BhdGNoIHRvLlxuICAgIHZhciBsaXN0ID0gaW5pdGlhbExpc3RcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gW11cblxuICAgIC8vIGNvcHkgc3RhdGUgb3V0IG9mIGluaXRpYWxMaXN0IGludG8gaW5pdGlhbFN0YXRlXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnYsIGluZGV4KSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZVtpbmRleF0gPSB0eXBlb2Ygb2JzZXJ2ID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICAgICAgb2JzZXJ2KCkgOiBvYnNlcnZcbiAgICB9KVxuXG4gICAgdmFyIG9icyA9IE9ic2Vydihpbml0aWFsU3RhdGUpXG4gICAgb2JzLnNwbGljZSA9IHNwbGljZVxuXG4gICAgLy8gb3ZlcnJpZGUgc2V0IGFuZCBzdG9yZSBvcmlnaW5hbCBmb3IgbGF0ZXIgdXNlXG4gICAgb2JzLl9vYnNlcnZTZXQgPSBvYnMuc2V0XG4gICAgb2JzLnNldCA9IHNldFxuXG4gICAgb2JzLmdldCA9IGdldFxuICAgIG9icy5nZXRMZW5ndGggPSBnZXRMZW5ndGhcbiAgICBvYnMucHV0ID0gcHV0XG4gICAgb2JzLnRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25cblxuICAgIC8vIHlvdSBiZXR0ZXIgbm90IG11dGF0ZSB0aGlzIGxpc3QgZGlyZWN0bHlcbiAgICAvLyB0aGlzIGlzIHRoZSBsaXN0IG9mIG9ic2VydnMgaW5zdGFuY2VzXG4gICAgb2JzLl9saXN0ID0gbGlzdFxuXG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGxpc3QubWFwKGZ1bmN0aW9uIChvYnNlcnYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnNlcnYgPT09IFwiZnVuY3Rpb25cIiA/XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihvYnMsIG9ic2VydikgOlxuICAgICAgICAgICAgbnVsbFxuICAgIH0pO1xuICAgIC8vIHRoaXMgaXMgYSBsaXN0IG9mIHJlbW92YWwgZnVuY3Rpb25zIHRoYXQgbXVzdCBiZSBjYWxsZWRcbiAgICAvLyB3aGVuIG9ic2VydiBpbnN0YW5jZXMgYXJlIHJlbW92ZWQgZnJvbSBgb2JzLmxpc3RgXG4gICAgLy8gbm90IGNhbGxpbmcgdGhpcyBtZWFucyB3ZSBkbyBub3QgR0Mgb3VyIG9ic2VydiBjaGFuZ2VcbiAgICAvLyBsaXN0ZW5lcnMuIFdoaWNoIGNhdXNlcyByYWdlIGJ1Z3NcbiAgICBvYnMuX3JlbW92ZUxpc3RlbmVycyA9IHJlbW92ZUxpc3RlbmVyc1xuXG4gICAgb2JzLl90eXBlID0gXCJvYnNlcnYtYXJyYXlcIlxuICAgIG9icy5fdmVyc2lvbiA9IFwiM1wiXG5cbiAgICByZXR1cm4gQXJyYXlNZXRob2RzKG9icywgbGlzdClcbn1cblxuZnVuY3Rpb24gZ2V0KGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RbaW5kZXhdXG59XG5cbmZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGhcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2V0Tm9uRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gc2V0Tm9uRW51bWVyYWJsZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xufVxuIiwiZnVuY3Rpb24gaGVhZCAoYSkge1xuICByZXR1cm4gYVswXVxufVxuXG5mdW5jdGlvbiBsYXN0IChhKSB7XG4gIHJldHVybiBhW2EubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gdGFpbChhKSB7XG4gIHJldHVybiBhLnNsaWNlKDEpXG59XG5cbmZ1bmN0aW9uIHJldHJlYXQgKGUpIHtcbiAgcmV0dXJuIGUucG9wKClcbn1cblxuZnVuY3Rpb24gaGFzTGVuZ3RoIChlKSB7XG4gIHJldHVybiBlLmxlbmd0aFxufVxuXG5mdW5jdGlvbiBhbnkoYXJ5LCB0ZXN0KSB7XG4gIGZvcih2YXIgaT0wO2k8YXJ5Lmxlbmd0aDtpKyspXG4gICAgaWYodGVzdChhcnlbaV0pKVxuICAgICAgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHNjb3JlIChhKSB7XG4gIHJldHVybiBhLnJlZHVjZShmdW5jdGlvbiAocywgYSkge1xuICAgICAgcmV0dXJuIHMgKyBhLmxlbmd0aCArIGFbMV0gKyAxXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIGJlc3QgKGEsIGIpIHtcbiAgcmV0dXJuIHNjb3JlKGEpIDw9IHNjb3JlKGIpID8gYSA6IGJcbn1cblxuXG52YXIgX3J1bGVzIC8vIHNldCBhdCB0aGUgYm90dG9tICBcblxuLy8gbm90ZSwgbmFpdmUgaW1wbGVtZW50YXRpb24uIHdpbGwgYnJlYWsgb24gY2lyY3VsYXIgb2JqZWN0cy5cblxuZnVuY3Rpb24gX2VxdWFsKGEsIGIpIHtcbiAgaWYoYSAmJiAhYikgcmV0dXJuIGZhbHNlXG4gIGlmKEFycmF5LmlzQXJyYXkoYSkpXG4gICAgaWYoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZVxuICBpZihhICYmICdvYmplY3QnID09IHR5cGVvZiBhKSB7XG4gICAgZm9yKHZhciBpIGluIGEpXG4gICAgICBpZighX2VxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2VcbiAgICBmb3IodmFyIGkgaW4gYilcbiAgICAgIGlmKCFfZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGEgPT0gYlxufVxuXG5mdW5jdGlvbiBnZXRBcmdzKGFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MubGVuZ3RoID09IDEgPyBhcmdzWzBdIDogW10uc2xpY2UuY2FsbChhcmdzKVxufVxuXG4vLyByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IG5vdCBsaWtlIHRoZSBvdGhlcnMsIG9yIC0xXG5mdW5jdGlvbiBvZGRFbGVtZW50KGFyeSwgY21wKSB7XG4gIHZhciBjXG4gIGZ1bmN0aW9uIGd1ZXNzKGEpIHtcbiAgICB2YXIgb2RkID0gLTFcbiAgICBjID0gMFxuICAgIGZvciAodmFyIGkgPSBhOyBpIDwgYXJ5Lmxlbmd0aDsgaSArKykge1xuICAgICAgaWYoIWNtcChhcnlbYV0sIGFyeVtpXSkpIHtcbiAgICAgICAgb2RkID0gaSwgYysrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjID4gMSA/IC0xIDogb2RkXG4gIH1cbiAgLy9hc3N1bWUgdGhhdCBpdCBpcyB0aGUgZmlyc3QgZWxlbWVudC5cbiAgdmFyIGcgPSBndWVzcygwKVxuICBpZigtMSAhPSBnKSByZXR1cm4gZ1xuICAvLzAgd2FzIHRoZSBvZGQgb25lLCB0aGVuIGFsbCB0aGUgb3RoZXIgZWxlbWVudHMgYXJlIGVxdWFsXG4gIC8vZWxzZSB0aGVyZSBtb3JlIHRoYW4gb25lIGRpZmZlcmVudCBlbGVtZW50XG4gIGd1ZXNzKDEpXG4gIHJldHVybiBjID09IDAgPyAwIDogLTFcbn1cbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGVwcywgZXhwb3J0cykge1xuICB2YXIgZXF1YWwgPSAoZGVwcyAmJiBkZXBzLmVxdWFsKSB8fCBfZXF1YWxcbiAgZXhwb3J0cyA9IGV4cG9ydHMgfHwge30gXG4gIGV4cG9ydHMubGNzID0gXG4gIGZ1bmN0aW9uIGxjcygpIHtcbiAgICB2YXIgY2FjaGUgPSB7fVxuICAgIHZhciBhcmdzID0gZ2V0QXJncyhhcmd1bWVudHMpXG4gICAgdmFyIGEgPSBhcmdzWzBdLCBiID0gYXJnc1sxXVxuXG4gICAgZnVuY3Rpb24ga2V5IChhLGIpe1xuICAgICAgcmV0dXJuIGEubGVuZ3RoICsgJzonICsgYi5sZW5ndGhcbiAgICB9XG5cbiAgICAvL2ZpbmQgbGVuZ3RoIHRoYXQgbWF0Y2hlcyBhdCB0aGUgaGVhZFxuXG4gICAgaWYoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAvL2lmIGNhbGxlZCB3aXRoIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgLy9yZWN1cnNlLCBzaW5jZSBsY3MoYSwgYiwgYywgZCkgPT0gbGNzKGxjcyhhLGIpLCBsY3MoYyxkKSlcbiAgICAgIGFyZ3MucHVzaChsY3MoYXJncy5zaGlmdCgpLCBhcmdzLnNoaWZ0KCkpKVxuICAgICAgcmV0dXJuIGxjcyhhcmdzKVxuICAgIH1cbiAgICBcbiAgICAvL3RoaXMgd291bGQgYmUgaW1wcm92ZWQgYnkgdHJ1bmNhdGluZyBpbnB1dCBmaXJzdFxuICAgIC8vYW5kIG5vdCByZXR1cm5pbmcgYW4gbGNzIGFzIGFuIGludGVybWVkaWF0ZSBzdGVwLlxuICAgIC8vdW50aWxsIHRoYXQgaXMgYSBwZXJmb3JtYW5jZSBwcm9ibGVtLlxuXG4gICAgdmFyIHN0YXJ0ID0gMCwgZW5kID0gMFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aCAmJiBpIDwgYi5sZW5ndGggXG4gICAgICAmJiBlcXVhbChhW2ldLCBiW2ldKVxuICAgICAgOyBpICsrXG4gICAgKVxuICAgICAgc3RhcnQgPSBpICsgMVxuXG4gICAgaWYoYS5sZW5ndGggPT09IHN0YXJ0KVxuICAgICAgcmV0dXJuIGEuc2xpY2UoKVxuXG4gICAgZm9yKHZhciBpID0gMDsgIGkgPCBhLmxlbmd0aCAtIHN0YXJ0ICYmIGkgPCBiLmxlbmd0aCAtIHN0YXJ0XG4gICAgICAmJiBlcXVhbChhW2EubGVuZ3RoIC0gMSAtIGldLCBiW2IubGVuZ3RoIC0gMSAtIGldKVxuICAgICAgOyBpICsrXG4gICAgKVxuICAgICAgZW5kID0gaVxuXG4gICAgZnVuY3Rpb24gcmVjdXJzZSAoYSwgYikge1xuICAgICAgaWYoIWEubGVuZ3RoIHx8ICFiLmxlbmd0aCkgcmV0dXJuIFtdXG4gICAgICAvL2F2b2lkIGV4cG9uZW50aWFsIHRpbWUgYnkgY2FjaGluZyB0aGUgcmVzdWx0c1xuICAgICAgaWYoY2FjaGVba2V5KGEsIGIpXSkgcmV0dXJuIGNhY2hlW2tleShhLCBiKV1cblxuICAgICAgaWYoZXF1YWwoYVswXSwgYlswXSkpXG4gICAgICAgIHJldHVybiBbaGVhZChhKV0uY29uY2F0KHJlY3Vyc2UodGFpbChhKSwgdGFpbChiKSkpXG4gICAgICBlbHNlIHsgXG4gICAgICAgIHZhciBfYSA9IHJlY3Vyc2UodGFpbChhKSwgYilcbiAgICAgICAgdmFyIF9iID0gcmVjdXJzZShhLCB0YWlsKGIpKVxuICAgICAgICByZXR1cm4gY2FjaGVba2V5KGEsYildID0gX2EubGVuZ3RoID4gX2IubGVuZ3RoID8gX2EgOiBfYiAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHZhciBtaWRkbGVBID0gYS5zbGljZShzdGFydCwgYS5sZW5ndGggLSBlbmQpXG4gICAgdmFyIG1pZGRsZUIgPSBiLnNsaWNlKHN0YXJ0LCBiLmxlbmd0aCAtIGVuZClcblxuICAgIHJldHVybiAoXG4gICAgICBhLnNsaWNlKDAsIHN0YXJ0KS5jb25jYXQoXG4gICAgICAgIHJlY3Vyc2UobWlkZGxlQSwgbWlkZGxlQilcbiAgICAgICkuY29uY2F0KGEuc2xpY2UoYS5sZW5ndGggLSBlbmQpKVxuICAgIClcbiAgfVxuXG4gIC8vIGdpdmVuIG4gc2VxdWVuY2VzLCBjYWxjIHRoZSBsY3MsIGFuZCB0aGVuIGNodW5rIHN0cmluZ3MgaW50byBzdGFibGUgYW5kIHVuc3RhYmxlIHNlY3Rpb25zLlxuICAvLyB1bnN0YWJsZSBjaHVua3MgYXJlIHBhc3NlZCB0byBidWlsZFxuICBleHBvcnRzLmNodW5rID1cbiAgZnVuY3Rpb24gKHEsIGJ1aWxkKSB7XG4gICAgdmFyIHEgPSBxLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zbGljZSgpIH0pXG4gICAgdmFyIGxjcyA9IGV4cG9ydHMubGNzLmFwcGx5KG51bGwsIHEpXG4gICAgdmFyIGFsbCA9IFtsY3NdLmNvbmNhdChxKVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hMY3MgKGUpIHtcbiAgICAgIGlmKGUubGVuZ3RoICYmICFsY3MubGVuZ3RoIHx8ICFlLmxlbmd0aCAmJiBsY3MubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2UgLy9pbmNhc2UgdGhlIGxhc3QgaXRlbSBpcyBudWxsXG4gICAgICByZXR1cm4gZXF1YWwobGFzdChlKSwgbGFzdChsY3MpKSB8fCAoKGUubGVuZ3RoICsgbGNzLmxlbmd0aCkgPT09IDApXG4gICAgfVxuXG4gICAgd2hpbGUoYW55KHEsIGhhc0xlbmd0aCkpIHtcbiAgICAgIC8vaWYgZWFjaCBlbGVtZW50IGlzIGF0IHRoZSBsY3MgdGhlbiB0aGlzIGNodW5rIGlzIHN0YWJsZS5cbiAgICAgIHdoaWxlKHEuZXZlcnkobWF0Y2hMY3MpICYmIHEuZXZlcnkoaGFzTGVuZ3RoKSlcbiAgICAgICAgYWxsLmZvckVhY2gocmV0cmVhdClcbiAgICAgIC8vY29sbGVjdCB0aGUgY2hhbmdlcyBpbiBlYWNoIGFycmF5IHVwdG8gdGhlIG5leHQgbWF0Y2ggd2l0aCB0aGUgbGNzXG4gICAgICB2YXIgYyA9IGZhbHNlXG4gICAgICB2YXIgdW5zdGFibGUgPSBxLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gW11cbiAgICAgICAgd2hpbGUoIW1hdGNoTGNzKGUpKSB7XG4gICAgICAgICAgY2hhbmdlLnVuc2hpZnQocmV0cmVhdChlKSlcbiAgICAgICAgICBjID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VcbiAgICAgIH0pXG4gICAgICBpZihjKSBidWlsZChxWzBdLmxlbmd0aCwgdW5zdGFibGUpXG4gICAgfVxuICB9XG5cbiAgLy9jYWxjdWxhdGUgYSBkaWZmIHRoaXMgaXMgb25seSB1cGRhdGVzXG4gIGV4cG9ydHMub3B0aW1pc3RpY0RpZmYgPVxuICBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBNID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKVxuICAgIHZhciBtID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICAgIHZhciBwYXRjaCA9IFtdXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IE07IGkrKylcbiAgICAgIGlmKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgICAgdmFyIGN1ciA9IFtpLDBdLCBkZWxldGVzID0gMFxuICAgICAgICB3aGlsZShhW2ldICE9PSBiW2ldICYmIGkgPCBtKSB7XG4gICAgICAgICAgY3VyWzFdID0gKytkZWxldGVzXG4gICAgICAgICAgY3VyLnB1c2goYltpKytdKVxuICAgICAgICB9XG4gICAgICAgIC8vdGhlIHJlc3QgYXJlIGRlbGV0ZXMgb3IgaW5zZXJ0c1xuICAgICAgICBpZihpID49IG0pIHtcbiAgICAgICAgICAvL3RoZSByZXN0IGFyZSBkZWxldGVzXG4gICAgICAgICAgaWYoYS5sZW5ndGggPiBiLmxlbmd0aClcbiAgICAgICAgICAgIGN1clsxXSArPSBhLmxlbmd0aCAtIGIubGVuZ3RoXG4gICAgICAgICAgLy90aGUgcmVzdCBhcmUgaW5zZXJ0c1xuICAgICAgICAgIGVsc2UgaWYoYS5sZW5ndGggPCBiLmxlbmd0aClcbiAgICAgICAgICAgIGN1ciA9IGN1ci5jb25jYXQoYi5zbGljZShhLmxlbmd0aCkpXG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2gucHVzaChjdXIpXG4gICAgICB9XG5cbiAgICByZXR1cm4gcGF0Y2hcbiAgfVxuXG4gIGV4cG9ydHMuZGlmZiA9XG4gIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG9wdGltaXN0aWMgPSBleHBvcnRzLm9wdGltaXN0aWNEaWZmKGEsIGIpXG4gICAgdmFyIGNoYW5nZXMgPSBbXVxuICAgIGV4cG9ydHMuY2h1bmsoW2EsIGJdLCBmdW5jdGlvbiAoaW5kZXgsIHVuc3RhYmxlKSB7XG4gICAgICB2YXIgZGVsID0gdW5zdGFibGUuc2hpZnQoKS5sZW5ndGhcbiAgICAgIHZhciBpbnNlcnQgPSB1bnN0YWJsZS5zaGlmdCgpXG4gICAgICBjaGFuZ2VzLnB1c2goW2luZGV4LCBkZWxdLmNvbmNhdChpbnNlcnQpKVxuICAgIH0pXG4gICAgcmV0dXJuIGJlc3Qob3B0aW1pc3RpYywgY2hhbmdlcylcbiAgfVxuXG4gIGV4cG9ydHMucGF0Y2ggPSBmdW5jdGlvbiAoYSwgY2hhbmdlcywgbXV0YXRlKSB7XG4gICAgaWYobXV0YXRlICE9PSB0cnVlKSBhID0gYS5zbGljZShhKS8vY29weSBhXG4gICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgIFtdLnNwbGljZS5hcHBseShhLCBjaGFuZ2UpXG4gICAgfSlcbiAgICByZXR1cm4gYVxuICB9XG5cbiAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25jZXN0b3JcbiAgLy8gbWUsIGNvbmNlc3RvciwgeW91Li4uXG4gIGV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBnZXRBcmdzKGFyZ3VtZW50cylcbiAgICB2YXIgcGF0Y2ggPSBleHBvcnRzLmRpZmYzKGFyZ3MpXG4gICAgcmV0dXJuIGV4cG9ydHMucGF0Y2goYXJnc1swXSwgcGF0Y2gpXG4gIH1cblxuICBleHBvcnRzLmRpZmYzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gZ2V0QXJncyhhcmd1bWVudHMpXG4gICAgdmFyIHIgPSBbXVxuICAgIGV4cG9ydHMuY2h1bmsoYXJncywgZnVuY3Rpb24gKGluZGV4LCB1bnN0YWJsZSkge1xuICAgICAgdmFyIG1pbmUgPSB1bnN0YWJsZVswXVxuICAgICAgdmFyIGluc2VydCA9IHJlc29sdmUodW5zdGFibGUpXG4gICAgICBpZihlcXVhbChtaW5lLCBpbnNlcnQpKSByZXR1cm4gXG4gICAgICByLnB1c2goW2luZGV4LCBtaW5lLmxlbmd0aF0uY29uY2F0KGluc2VydCkpIFxuICAgIH0pXG4gICAgcmV0dXJuIHJcbiAgfVxuICBleHBvcnRzLm9kZE9uZU91dCA9XG4gICAgZnVuY3Rpb24gb2RkT25lT3V0IChjaGFuZ2VzKSB7XG4gICAgICBjaGFuZ2VzID0gY2hhbmdlcy5zbGljZSgpXG4gICAgICAvL3B1dCB0aGUgY29uY2VzdG9yIGZpcnN0XG4gICAgICBjaGFuZ2VzLnVuc2hpZnQoY2hhbmdlcy5zcGxpY2UoMSwxKVswXSlcbiAgICAgIHZhciBpID0gb2RkRWxlbWVudChjaGFuZ2VzLCBlcXVhbClcbiAgICAgIGlmKGkgPT0gMCkgLy8gY29uY2VzdG9yIHdhcyBkaWZmZXJlbnQsICdmYWxzZSBjb25mbGljdCdcbiAgICAgICAgcmV0dXJuIGNoYW5nZXNbMV1cbiAgICAgIGlmICh+aSlcbiAgICAgICAgcmV0dXJuIGNoYW5nZXNbaV0gXG4gICAgfVxuICBleHBvcnRzLmluc2VydE1lcmdlT3ZlckRlbGV0ZSA9IFxuICAgIC8vaSd2ZSBpbXBsZW1lbnRlZCB0aGlzIGFzIGEgc2VwZXJhdGUgcnVsZSxcbiAgICAvL2JlY2F1c2UgSSBoYWQgc2Vjb25kIHRob3VnaHRzIGFib3V0IHRoaXMuXG4gICAgZnVuY3Rpb24gaW5zZXJ0TWVyZ2VPdmVyRGVsZXRlIChjaGFuZ2VzKSB7XG4gICAgICBjaGFuZ2VzID0gY2hhbmdlcy5zbGljZSgpXG4gICAgICBjaGFuZ2VzLnNwbGljZSgxLDEpLy8gcmVtb3ZlIGNvbmNlc3RvclxuICAgICAgXG4gICAgICAvL2lmIHRoZXJlIGlzIG9ubHkgb25lIG5vbiBlbXB0eSBjaGFuZ2UgdGhhdHMgb2theS5cbiAgICAgIC8vZWxzZSBmdWxsIGNvbmZpbGN0XG4gICAgICBmb3IgKHZhciBpID0gMCwgbm9uZW1wdHk7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZihjaGFuZ2VzW2ldLmxlbmd0aCkgXG4gICAgICAgICAgaWYoIW5vbmVtcHR5KSBub25lbXB0eSA9IGNoYW5nZXNbaV1cbiAgICAgICAgICBlbHNlIHJldHVybiAvLyBmdWxsIGNvbmZsaWN0XG4gICAgICByZXR1cm4gbm9uZW1wdHlcbiAgICB9XG5cbiAgdmFyIHJ1bGVzID0gKGRlcHMgJiYgZGVwcy5ydWxlcykgfHwgW2V4cG9ydHMub2RkT25lT3V0LCBleHBvcnRzLmluc2VydE1lcmdlT3ZlckRlbGV0ZV1cblxuICBmdW5jdGlvbiByZXNvbHZlIChjaGFuZ2VzKSB7XG4gICAgdmFyIGwgPSBydWxlcy5sZW5ndGhcbiAgICBmb3IgKHZhciBpIGluIHJ1bGVzKSB7IC8vIGZpcnN0XG4gICAgICBcbiAgICAgIHZhciBjID0gcnVsZXNbaV0gJiYgcnVsZXNbaV0oY2hhbmdlcylcbiAgICAgIGlmKGMpIHJldHVybiBjXG4gICAgfVxuICAgIGNoYW5nZXMuc3BsaWNlKDEsMSkgLy8gcmVtb3ZlIGNvbmNlc3RvclxuICAgIC8vcmV0dXJuaW5nIHRoZSBjb25mbGljdHMgYXMgYW4gb2JqZWN0IGlzIGEgcmVhbGx5IGJhZCBpZGVhLFxuICAgIC8vIGJlY2F1c2UgPT0gd2lsbCBub3QgZGV0ZWN0IHRoZXkgYXJlIHRoZSBzYW1lLiBhbmQgY29uZmxpY3RzIGJ1aWxkLlxuICAgIC8vIGJldHRlciB0byB1c2VcbiAgICAvLyAnPDw8PDw8PDw8PDw8PCdcbiAgICAvLyBvZiBjb3Vyc2UsIGkgd3JvdGUgdGhpcyBiZWZvcmUgaSBzdGFydGVkIG9uIHNub2IsIHNvIGkgZGlkbid0IGtub3cgdGhhdCB0aGVuLlxuICAgIC8qdmFyIGNvbmZsaWN0ID0gWyc+Pj4+Pj4+Pj4+Pj4+Pj4+J11cbiAgICB3aGlsZShjaGFuZ2VzLmxlbmd0aClcbiAgICAgIGNvbmZsaWN0ID0gY29uZmxpY3QuY29uY2F0KGNoYW5nZXMuc2hpZnQoKSkuY29uY2F0KCc9PT09PT09PT09PT0nKVxuICAgIGNvbmZsaWN0LnBvcCgpXG4gICAgY29uZmxpY3QucHVzaCAgICAgICAgICAoJzw8PDw8PDw8PDw8PDw8PCcpXG4gICAgY2hhbmdlcy51bnNoaWZ0ICAgICAgICgnPj4+Pj4+Pj4+Pj4+Pj4+JylcbiAgICByZXR1cm4gY29uZmxpY3QqL1xuICAgIC8vbmFoLCBiZXR0ZXIgaXMganVzdCB0byB1c2UgYW4gZXF1YWwgY2FuIGhhbmRsZSBvYmplY3RzXG4gICAgcmV0dXJuIHsnPyc6IGNoYW5nZXN9XG4gIH1cbiAgcmV0dXJuIGV4cG9ydHNcbn1cbmV4cG9ydHMobnVsbCwgZXhwb3J0cylcbiIsInZhciBhZGRMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2FkZC1saXN0ZW5lci5qc1wiKVxudmFyIHNldE5vbkVudW1lcmFibGUgPSByZXF1aXJlKFwiLi9saWIvc2V0LW5vbi1lbnVtZXJhYmxlLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1dFxuXG4vLyBgb2JzLnB1dGAgaXMgYSBtdXRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGBhcnJheVtpbmRleF0gPSB2YWx1ZWBcbi8vIHRoYXQgbXV0YXRlcyBib3RoIGBsaXN0YCBhbmQgdGhlIGludGVybmFsIGB2YWx1ZUxpc3RgIHRoYXRcbi8vIGlzIHRoZSBjdXJyZW50IHZhbHVlIG9mIGBvYnNgIGl0c2VsZlxuZnVuY3Rpb24gcHV0KGluZGV4LCB2YWx1ZSkge1xuICAgIHZhciBvYnMgPSB0aGlzXG4gICAgdmFyIHZhbHVlTGlzdCA9IG9icygpLnNsaWNlKClcblxuICAgIHZhciBvcmlnaW5hbExlbmd0aCA9IHZhbHVlTGlzdC5sZW5ndGhcbiAgICB2YWx1ZUxpc3RbaW5kZXhdID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZSgpIDogdmFsdWVcblxuICAgIG9icy5fbGlzdFtpbmRleF0gPSB2YWx1ZVxuXG4gICAgLy8gcmVtb3ZlIHBhc3QgdmFsdWUgbGlzdGVuZXIgaWYgd2FzIG9ic2VydlxuICAgIHZhciByZW1vdmVMaXN0ZW5lciA9IG9icy5fcmVtb3ZlTGlzdGVuZXJzW2luZGV4XVxuICAgIGlmIChyZW1vdmVMaXN0ZW5lcil7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKClcbiAgICB9XG5cbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gdmFsdWUgaWYgb2JzZXJ2XG4gICAgb2JzLl9yZW1vdmVMaXN0ZW5lcnNbaW5kZXhdID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICBhZGRMaXN0ZW5lcihvYnMsIHZhbHVlKSA6XG4gICAgICAgIG51bGxcblxuICAgIC8vIGZha2Ugc3BsaWNlIGRpZmZcbiAgICB2YXIgdmFsdWVBcmdzID0gaW5kZXggPCBvcmlnaW5hbExlbmd0aCA/IFxuICAgICAgICBbaW5kZXgsIDEsIHZhbHVlTGlzdFtpbmRleF1dIDpcbiAgICAgICAgW2luZGV4LCAwLCB2YWx1ZUxpc3RbaW5kZXhdXVxuXG4gICAgc2V0Tm9uRW51bWVyYWJsZSh2YWx1ZUxpc3QsIFwiX2RpZmZcIiwgW3ZhbHVlQXJnc10pXG5cbiAgICBvYnMuX29ic2VydlNldCh2YWx1ZUxpc3QpXG4gICAgcmV0dXJuIHZhbHVlXG59IiwidmFyIGFwcGx5UGF0Y2ggPSByZXF1aXJlKFwiLi9hcHBseS1wYXRjaC5qc1wiKVxudmFyIHNldE5vbkVudW1lcmFibGUgPSByZXF1aXJlKFwiLi9saWIvc2V0LW5vbi1lbnVtZXJhYmxlLmpzXCIpXG52YXIgYWRpZmYgPSByZXF1aXJlKFwiYWRpZmZcIilcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRcblxuZnVuY3Rpb24gc2V0KHJhd0xpc3QpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmF3TGlzdCkpIHJhd0xpc3QgPSBbXVxuXG4gICAgdmFyIG9icyA9IHRoaXNcbiAgICB2YXIgY2hhbmdlcyA9IGFkaWZmLmRpZmYob2JzLl9saXN0LCByYXdMaXN0KVxuICAgIHZhciB2YWx1ZUxpc3QgPSBvYnMoKS5zbGljZSgpXG5cbiAgICB2YXIgdmFsdWVDaGFuZ2VzID0gY2hhbmdlcy5tYXAoYXBwbHlQYXRjaC5iaW5kKG9icywgdmFsdWVMaXN0KSlcblxuICAgIHNldE5vbkVudW1lcmFibGUodmFsdWVMaXN0LCBcIl9kaWZmXCIsIHZhbHVlQ2hhbmdlcylcblxuICAgIG9icy5fb2JzZXJ2U2V0KHZhbHVlTGlzdClcbiAgICByZXR1cm4gY2hhbmdlc1xufVxuIiwidmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbnZhciBhZGRMaXN0ZW5lciA9IHJlcXVpcmUoXCIuL2FkZC1saXN0ZW5lci5qc1wiKVxudmFyIHNldE5vbkVudW1lcmFibGUgPSByZXF1aXJlKFwiLi9saWIvc2V0LW5vbi1lbnVtZXJhYmxlLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGljZVxuXG4vLyBgb2JzLnNwbGljZWAgaXMgYSBtdXRhYmxlIGltcGxlbWVudGF0aW9uIG9mIGBzcGxpY2UoKWBcbi8vIHRoYXQgbXV0YXRlcyBib3RoIGBsaXN0YCBhbmQgdGhlIGludGVybmFsIGB2YWx1ZUxpc3RgIHRoYXRcbi8vIGlzIHRoZSBjdXJyZW50IHZhbHVlIG9mIGBvYnNgIGl0c2VsZlxuZnVuY3Rpb24gc3BsaWNlKGluZGV4LCBhbW91bnQpIHtcbiAgICB2YXIgb2JzID0gdGhpc1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgdmFyIHZhbHVlTGlzdCA9IG9icygpLnNsaWNlKClcblxuICAgIC8vIGdlbmVyYXRlIGEgbGlzdCBvZiBhcmdzIHRvIG11dGF0ZSB0aGUgaW50ZXJuYWxcbiAgICAvLyBsaXN0IG9mIG9ubHkgb2JzXG4gICAgdmFyIHZhbHVlQXJncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG11c3QgdW5wYWNrIG9ic2VydmFibGVzIHRoYXQgd2UgYXJlIGFkZGluZ1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZSgpIDogdmFsdWVcbiAgICB9KVxuXG4gICAgdmFsdWVMaXN0LnNwbGljZS5hcHBseSh2YWx1ZUxpc3QsIHZhbHVlQXJncylcbiAgICAvLyB3ZSByZW1vdmUgdGhlIG9ic2VydnMgdGhhdCB3ZSByZW1vdmVcbiAgICB2YXIgcmVtb3ZlZCA9IG9icy5fbGlzdC5zcGxpY2UuYXBwbHkob2JzLl9saXN0LCBhcmdzKVxuXG4gICAgdmFyIGV4dHJhUmVtb3ZlTGlzdGVuZXJzID0gYXJncy5zbGljZSgyKS5tYXAoZnVuY3Rpb24gKG9ic2Vydikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9ic2VydiA9PT0gXCJmdW5jdGlvblwiID9cbiAgICAgICAgICAgIGFkZExpc3RlbmVyKG9icywgb2JzZXJ2KSA6XG4gICAgICAgICAgICBudWxsXG4gICAgfSlcbiAgICBleHRyYVJlbW92ZUxpc3RlbmVycy51bnNoaWZ0KGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgdmFyIHJlbW92ZWRMaXN0ZW5lcnMgPSBvYnMuX3JlbW92ZUxpc3RlbmVycy5zcGxpY2VcbiAgICAgICAgLmFwcGx5KG9icy5fcmVtb3ZlTGlzdGVuZXJzLCBleHRyYVJlbW92ZUxpc3RlbmVycylcblxuICAgIHJlbW92ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVtb3ZlT2JzZXJ2TGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHJlbW92ZU9ic2Vydkxpc3RlbmVyKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZMaXN0ZW5lcigpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc2V0Tm9uRW51bWVyYWJsZSh2YWx1ZUxpc3QsIFwiX2RpZmZcIiwgW3ZhbHVlQXJnc10pXG5cbiAgICBvYnMuX29ic2VydlNldCh2YWx1ZUxpc3QpXG4gICAgcmV0dXJuIHJlbW92ZWRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNhY3Rpb25cblxuZnVuY3Rpb24gdHJhbnNhY3Rpb24gKGZ1bmMpIHtcbiAgICB2YXIgb2JzID0gdGhpc1xuICAgIHZhciByYXdMaXN0ID0gb2JzLl9saXN0LnNsaWNlKClcblxuICAgIGlmIChmdW5jKHJhd0xpc3QpICE9PSBmYWxzZSl7IC8vIGFsbG93IGNhbmNlbFxuICAgICAgICByZXR1cm4gb2JzLnNldChyYXdMaXN0KVxuICAgIH1cblxufSIsInZhciBPYnNlcnYgPSByZXF1aXJlKFwib2JzZXJ2XCIpXG52YXIgZXh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbnZhciBibGFja0xpc3QgPSB7XG4gICAgXCJsZW5ndGhcIjogXCJDbGFzaGVzIHdpdGggYEZ1bmN0aW9uLnByb3RvdHlwZS5sZW5ndGhgLlxcblwiLFxuICAgIFwibmFtZVwiOiBcIkNsYXNoZXMgd2l0aCBgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWVgLlxcblwiLFxuICAgIFwiX2RpZmZcIjogXCJfZGlmZiBpcyByZXNlcnZlZCBrZXkgb2Ygb2JzZXJ2LXN0cnVjdC5cXG5cIixcbiAgICBcIl90eXBlXCI6IFwiX3R5cGUgaXMgcmVzZXJ2ZWQga2V5IG9mIG9ic2Vydi1zdHJ1Y3QuXFxuXCIsXG4gICAgXCJfdmVyc2lvblwiOiBcIl92ZXJzaW9uIGlzIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtc3RydWN0LlxcblwiXG59XG52YXIgTk9fVFJBTlNBQ1RJT04gPSB7fVxuXG5mdW5jdGlvbiBzZXROb25FbnVtZXJhYmxlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSlcbn1cblxuLyogT2JzZXJ2U3RydWN0IDo9IChPYmplY3Q8U3RyaW5nLCBPYnNlcnY8VD4+KSA9PlxuICAgIE9iamVjdDxTdHJpbmcsIE9ic2VydjxUPj4gJlxuICAgICAgICBPYnNlcnY8T2JqZWN0PFN0cmluZywgVD4gJiB7XG4gICAgICAgICAgICBfZGlmZjogT2JqZWN0PFN0cmluZywgQW55PlxuICAgICAgICB9PlxuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBPYnNlcnZTdHJ1Y3RcblxuZnVuY3Rpb24gT2JzZXJ2U3RydWN0KHN0cnVjdCkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3RydWN0KVxuXG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHt9XG4gICAgdmFyIGN1cnJlbnRUcmFuc2FjdGlvbiA9IE5PX1RSQU5TQUNUSU9OXG4gICAgdmFyIG5lc3RlZFRyYW5zYWN0aW9uID0gTk9fVFJBTlNBQ1RJT05cblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChibGFja0xpc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGNyZWF0ZSBhbiBvYnNlcnYtc3RydWN0IFwiICtcbiAgICAgICAgICAgICAgICBcIndpdGggYSBrZXkgbmFtZWQgJ1wiICsga2V5ICsgXCInLlxcblwiICtcbiAgICAgICAgICAgICAgICBibGFja0xpc3Rba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2JzZXJ2ID0gc3RydWN0W2tleV1cbiAgICAgICAgaW5pdGlhbFN0YXRlW2tleV0gPSB0eXBlb2Ygb2JzZXJ2ID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICAgICAgb2JzZXJ2KCkgOiBvYnNlcnZcbiAgICB9KVxuXG4gICAgdmFyIG9icyA9IE9ic2Vydihpbml0aWFsU3RhdGUpXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG9ic2VydiA9IHN0cnVjdFtrZXldXG4gICAgICAgIG9ic1trZXldID0gb2JzZXJ2XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb2JzZXJ2KGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRUcmFuc2FjdGlvbiA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZXh0ZW5kKG9icygpKVxuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBkaWZmID0ge31cbiAgICAgICAgICAgICAgICBkaWZmW2tleV0gPSB2YWx1ZSAmJiB2YWx1ZS5fZGlmZiA/XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLl9kaWZmIDogdmFsdWVcblxuICAgICAgICAgICAgICAgIHNldE5vbkVudW1lcmFibGUoc3RhdGUsIFwiX2RpZmZcIiwgZGlmZilcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNhY3Rpb24gPSBzdGF0ZVxuICAgICAgICAgICAgICAgIG9icy5zZXQoc3RhdGUpXG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zYWN0aW9uID0gTk9fVFJBTlNBQ1RJT05cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHZhciBfc2V0ID0gb2JzLnNldFxuICAgIG9icy5zZXQgPSBmdW5jdGlvbiB0cmFja0RpZmYodmFsdWUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2FjdGlvbiA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfc2V0KHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlID0gZXh0ZW5kKHZhbHVlKVxuICAgICAgICBzZXROb25FbnVtZXJhYmxlKG5ld1N0YXRlLCBcIl9kaWZmXCIsIHZhbHVlKVxuICAgICAgICBfc2V0KG5ld1N0YXRlKVxuICAgIH1cblxuICAgIG9icyhmdW5jdGlvbiAobmV3U3RhdGUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2FjdGlvbiA9PT0gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnYgPSBzdHJ1Y3Rba2V5XVxuICAgICAgICAgICAgdmFyIG5ld09ic2VydlZhbHVlID0gbmV3U3RhdGVba2V5XVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ic2VydiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgb2JzZXJ2KCkgIT09IG5ld09ic2VydlZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBuZXN0ZWRUcmFuc2FjdGlvbiA9IG5ld09ic2VydlZhbHVlXG4gICAgICAgICAgICAgICAgb2JzZXJ2LnNldChuZXdTdGF0ZVtrZXldKVxuICAgICAgICAgICAgICAgIG5lc3RlZFRyYW5zYWN0aW9uID0gTk9fVFJBTlNBQ1RJT05cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgb2JzLl90eXBlID0gXCJvYnNlcnYtc3RydWN0XCJcbiAgICBvYnMuX3ZlcnNpb24gPSBcIjVcIlxuXG4gICAgcmV0dXJuIG9ic1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBPYnNlcnYgPSByZXF1aXJlKCdvYnNlcnYnKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcblxudmFyIE5PX1RSQU5TQUNUSU9OID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBPYnNlcnZWYXJoYXNoXG5cbmZ1bmN0aW9uIE9ic2VydlZhcmhhc2ggKGhhc2gsIGNyZWF0ZVZhbHVlKSB7XG4gIGNyZWF0ZVZhbHVlID0gY3JlYXRlVmFsdWUgfHwgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqIH1cblxuICB2YXIgaW5pdGlhbFN0YXRlID0ge31cbiAgdmFyIGN1cnJlbnRUcmFuc2FjdGlvbiA9IE5PX1RSQU5TQUNUSU9OXG5cbiAgdmFyIG9icyA9IE9ic2Vydihpbml0aWFsU3RhdGUpXG4gIHNldE5vbkVudW1lcmFibGUob2JzLCAnX3JlbW92ZUxpc3RlbmVycycsIHt9KVxuXG4gIHNldE5vbkVudW1lcmFibGUob2JzLCAnc2V0Jywgb2JzLnNldClcbiAgc2V0Tm9uRW51bWVyYWJsZShvYnMsICdnZXQnLCBnZXQuYmluZChvYnMpKVxuICBzZXROb25FbnVtZXJhYmxlKG9icywgJ3B1dCcsIHB1dC5iaW5kKG9icywgY3JlYXRlVmFsdWUsIGN1cnJlbnRUcmFuc2FjdGlvbikpXG4gIHNldE5vbkVudW1lcmFibGUob2JzLCAnZGVsZXRlJywgZGVsLmJpbmQob2JzKSlcblxuICBmb3IgKHZhciBrZXkgaW4gaGFzaCkge1xuICAgIG9ic1trZXldID0gdHlwZW9mIGhhc2hba2V5XSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICBoYXNoW2tleV0gOiBjcmVhdGVWYWx1ZShoYXNoW2tleV0sIGtleSlcblxuICAgIGlmIChpc0ZuKG9ic1trZXldKSkge1xuICAgICAgb2JzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XSA9IG9ic1trZXldKHdhdGNoKG9icywga2V5LCBjdXJyZW50VHJhbnNhY3Rpb24pKVxuICAgIH1cbiAgfVxuXG4gIHZhciBuZXdTdGF0ZSA9IHt9XG4gIGZvciAoa2V5IGluIGhhc2gpIHtcbiAgICB2YXIgb2JzZXJ2ID0gb2JzW2tleV1cbiAgICBjaGVja0tleShrZXkpXG4gICAgbmV3U3RhdGVba2V5XSA9IGlzRm4ob2JzZXJ2KSA/IG9ic2VydigpIDogb2JzZXJ2XG4gIH1cbiAgb2JzLnNldChuZXdTdGF0ZSlcblxuICBvYnMoZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG4gICAgaWYgKGN1cnJlbnRUcmFuc2FjdGlvbiA9PT0gbmV3U3RhdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBoYXNoKSB7XG4gICAgICB2YXIgb2JzZXJ2ID0gaGFzaFtrZXldXG5cbiAgICAgIGlmIChpc0ZuKG9ic2VydikgJiYgb2JzZXJ2KCkgIT09IG5ld1N0YXRlW2tleV0pIHtcbiAgICAgICAgb2JzZXJ2LnNldChuZXdTdGF0ZVtrZXldKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JzXG59XG5cbi8vIGFjY2VzcyBhbmQgbXV0YXRlXG5mdW5jdGlvbiBnZXQgKGtleSkge1xuICByZXR1cm4gdGhpc1trZXldXG59XG5cbmZ1bmN0aW9uIHB1dCAoY3JlYXRlVmFsdWUsIGN1cnJlbnRUcmFuc2FjdGlvbiwga2V5LCB2YWwpIHtcbiAgY2hlY2tLZXkoa2V5KVxuXG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHZhcmhhc2gucHV0KGtleSwgdW5kZWZpbmVkKS4nKVxuICB9XG5cbiAgdmFyIG9ic2VydiA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgP1xuICAgIHZhbCA6IGNyZWF0ZVZhbHVlKHZhbCwga2V5KVxuICB2YXIgc3RhdGUgPSBleHRlbmQodGhpcygpKVxuXG4gIHN0YXRlW2tleV0gPSBpc0ZuKG9ic2VydikgPyBvYnNlcnYoKSA6IG9ic2VydlxuXG4gIGlmIChpc0ZuKHRoaXMuX3JlbW92ZUxpc3RlbmVyc1trZXldKSkge1xuICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyc1trZXldKClcbiAgfVxuXG4gIHRoaXMuX3JlbW92ZUxpc3RlbmVyc1trZXldID0gaXNGbihvYnNlcnYpID9cbiAgICBvYnNlcnYod2F0Y2godGhpcywga2V5LCBjdXJyZW50VHJhbnNhY3Rpb24pKSA6IG51bGxcblxuICBzZXROb25FbnVtZXJhYmxlKHN0YXRlLCAnX2RpZmYnLCBkaWZmKGtleSwgc3RhdGVba2V5XSkpXG5cbiAgdGhpc1trZXldID0gb2JzZXJ2XG4gIHRoaXMuc2V0KHN0YXRlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGRlbCAoa2V5KSB7XG4gIHZhciBzdGF0ZSA9IGV4dGVuZCh0aGlzKCkpXG4gIGlmIChpc0ZuKHRoaXMuX3JlbW92ZUxpc3RlbmVyc1trZXldKSkge1xuICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyc1trZXldKClcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNba2V5XVxuICBkZWxldGUgc3RhdGVba2V5XVxuICBkZWxldGUgdGhpc1trZXldXG5cbiAgc2V0Tm9uRW51bWVyYWJsZShzdGF0ZSwgJ19kaWZmJywgZGlmZihrZXksIHVuZGVmaW5lZCkpXG4gIHRoaXMuc2V0KHN0YXRlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIHByb2Nlc3NpbmdcbmZ1bmN0aW9uIHdhdGNoIChvYnMsIGtleSwgY3VycmVudFRyYW5zYWN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgc3RhdGUgPSBleHRlbmQob2JzKCkpXG4gICAgc3RhdGVba2V5XSA9IHZhbHVlXG5cbiAgICBzZXROb25FbnVtZXJhYmxlKHN0YXRlLCAnX2RpZmYnLCBkaWZmKGtleSwgdmFsdWUpKVxuICAgIGN1cnJlbnRUcmFuc2FjdGlvbiA9IHN0YXRlXG4gICAgb2JzLnNldChzdGF0ZSlcbiAgICBjdXJyZW50VHJhbnNhY3Rpb24gPSBOT19UUkFOU0FDVElPTlxuICB9XG59XG5cbmZ1bmN0aW9uIGRpZmYgKGtleSwgdmFsdWUpIHtcbiAgdmFyIG9iaiA9IHt9XG4gIG9ialtrZXldID0gdmFsdWUgJiYgdmFsdWUuX2RpZmYgPyB2YWx1ZS5fZGlmZiA6IHZhbHVlXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gaXNGbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIHNldE5vbkVudW1lcmFibGUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2VcbiAgfSlcbn1cblxuLy8gZXJyb3JzXG52YXIgYmxhY2tsaXN0ID0ge1xuICBuYW1lOiAnQ2xhc2hlcyB3aXRoIGBGdW5jdGlvbi5wcm90b3R5cGUubmFtZWAuJyxcbiAgZ2V0OiAnZ2V0IGlzIGEgcmVzZXJ2ZWQga2V5IG9mIG9ic2Vydi12YXJoYXNoIG1ldGhvZCcsXG4gIHB1dDogJ3B1dCBpcyBhIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtdmFyaGFzaCBtZXRob2QnLFxuICAnZGVsZXRlJzogJ2RlbGV0ZSBpcyBhIHJlc2VydmVkIGtleSBvZiBvYnNlcnYtdmFyaGFzaCBtZXRob2QnLFxuICBfZGlmZjogJ19kaWZmIGlzIGEgcmVzZXJ2ZWQga2V5IG9mIG9ic2Vydi12YXJoYXNoIG1ldGhvZCcsXG4gIF9yZW1vdmVMaXN0ZW5lcnM6ICdfcmVtb3ZlTGlzdGVuZXJzIGlzIGEgcmVzZXJ2ZWQga2V5IG9mIG9ic2Vydi12YXJoYXNoJ1xufVxuXG5mdW5jdGlvbiBjaGVja0tleSAoa2V5KSB7XG4gIGlmICghYmxhY2tsaXN0W2tleV0pIHJldHVyblxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ2Nhbm5vdCBjcmVhdGUgYW4gb2JzZXJ2LXZhcmhhc2ggd2l0aCBrZXkgYCcgKyBrZXkgKyAnYC4gJyArIGJsYWNrbGlzdFtrZXldXG4gIClcbn1cbiIsInZhciBPYnNlcnZhYmxlID0gcmVxdWlyZShcIi4vaW5kZXguanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wdXRlZFxuXG5mdW5jdGlvbiBjb21wdXRlZChvYnNlcnZhYmxlcywgbGFtYmRhKSB7XG4gICAgdmFyIHZhbHVlcyA9IG9ic2VydmFibGVzLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gbygpXG4gICAgfSlcbiAgICB2YXIgcmVzdWx0ID0gT2JzZXJ2YWJsZShsYW1iZGEuYXBwbHkobnVsbCwgdmFsdWVzKSlcblxuICAgIG9ic2VydmFibGVzLmZvckVhY2goZnVuY3Rpb24gKG8sIGluZGV4KSB7XG4gICAgICAgIG8oZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHJlc3VsdC5zZXQobGFtYmRhLmFwcGx5KG51bGwsIHZhbHVlcykpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gT2JzZXJ2YWJsZVxuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKHZhbHVlKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdXG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHZhbHVlXG5cbiAgICBvYnNlcnZhYmxlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhbHVlID0gdlxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgZih2KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvYnNlcnZhYmxlXG5cbiAgICBmdW5jdGlvbiBvYnNlcnZhYmxlKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB3YXRjaFxuXG5mdW5jdGlvbiB3YXRjaChvYnNlcnZhYmxlLCBsaXN0ZW5lcikge1xuICAgIHZhciByZW1vdmUgPSBvYnNlcnZhYmxlKGxpc3RlbmVyKVxuICAgIGxpc3RlbmVyKG9ic2VydmFibGUoKSlcbiAgICByZXR1cm4gcmVtb3ZlXG59XG4iLCJ2YXIgRGVsZWdhdG9yID0gcmVxdWlyZSgnZG9tLWRlbGVnYXRvcicpXG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUV2ZW50XG5cbmZ1bmN0aW9uIEJhc2VFdmVudChsYW1iZGEpIHtcbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyO1xuXG4gICAgZnVuY3Rpb24gRXZlbnRIYW5kbGVyKGZuLCBkYXRhLCBvcHRzKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgICAgICAgZm46IGZuLFxuICAgICAgICAgICAgZGF0YTogZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YSA6IHt9LFxuICAgICAgICAgICAgb3B0czogb3B0cyB8fCB7fSxcbiAgICAgICAgICAgIGhhbmRsZUV2ZW50OiBoYW5kbGVFdmVudFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZuICYmIGZuLnR5cGUgPT09ICdkb20tZGVsZWdhdG9yLWhhbmRsZScpIHtcbiAgICAgICAgICAgIHJldHVybiBEZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlKGZuLFxuICAgICAgICAgICAgICAgIGhhbmRsZUxhbWJkYS5iaW5kKGhhbmRsZXIpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5zdGFydFByb3BhZ2F0aW9uICYmIGV2LnN0YXJ0UHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2LnN0YXJ0UHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYW1iZGEuY2FsbCh0aGlzLCBldiwgYnJvYWRjYXN0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgICAgIGlmIChzZWxmLm9wdHMuc3RhcnRQcm9wYWdhdGlvbiAmJiBldi5zdGFydFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldi5zdGFydFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGxhbWJkYS5jYWxsKHNlbGYsIGV2LCBicm9hZGNhc3QpXG5cbiAgICAgICAgZnVuY3Rpb24gYnJvYWRjYXN0KHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZuKHZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZuLndyaXRlKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBnZXRGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YS1zZXQvZWxlbWVudCcpXG5cbnZhciBCYXNlRXZlbnQgPSByZXF1aXJlKCcuL2Jhc2UtZXZlbnQuanMnKVxuXG52YXIgVkFMSURfQ0hBTkdFID0gWydjaGVja2JveCcsICdmaWxlJywgJ3NlbGVjdC1tdWx0aXBsZScsICdzZWxlY3Qtb25lJ107XG52YXIgVkFMSURfSU5QVVQgPSBbJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLFxuICAgICdtb250aCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAncmFuZ2UnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLFxuICAgICd1cmwnLCAnd2VlayddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudChjaGFuZ2VMYW1iZGEpO1xuXG5mdW5jdGlvbiBjaGFuZ2VMYW1iZGEoZXYsIGJyb2FkY2FzdCkge1xuICAgIHZhciB0YXJnZXQgPSBldi50YXJnZXRcblxuICAgIHZhciBpc1ZhbGlkID1cbiAgICAgICAgKGV2LnR5cGUgPT09ICdpbnB1dCcgJiYgVkFMSURfSU5QVVQuaW5kZXhPZih0YXJnZXQudHlwZSkgIT09IC0xKSB8fFxuICAgICAgICAoZXYudHlwZSA9PT0gJ2NoYW5nZScgJiYgVkFMSURfQ0hBTkdFLmluZGV4T2YodGFyZ2V0LnR5cGUpICE9PSAtMSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgaWYgKGV2LnN0YXJ0UHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2LnN0YXJ0UHJvcGFnYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGdldEZvcm1EYXRhKGV2LmN1cnJlbnRUYXJnZXQpXG4gICAgdmFyIGRhdGEgPSBleHRlbmQodmFsdWUsIHRoaXMuZGF0YSlcblxuICAgIGJyb2FkY2FzdChkYXRhKVxufVxuIiwidmFyIEJhc2VFdmVudCA9IHJlcXVpcmUoJy4vYmFzZS1ldmVudC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudChjbGlja0xhbWJkYSk7XG5cbmZ1bmN0aW9uIGNsaWNrTGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICB2YXIgb3B0cyA9IHRoaXMub3B0cztcblxuICAgIGlmICghb3B0cy5jdHJsICYmIGV2LmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghb3B0cy5tZXRhICYmIGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghb3B0cy5yaWdodENsaWNrICYmIGV2LndoaWNoID09PSAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnByZXZlbnREZWZhdWx0ICYmIGV2LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KHRoaXMuZGF0YSk7XG59XG4iLCJ2YXIgQmFzZUV2ZW50ID0gcmVxdWlyZSgnLi9iYXNlLWV2ZW50LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUV2ZW50KGV2ZW50TGFtYmRhKTtcblxuZnVuY3Rpb24gZXZlbnRMYW1iZGEoZXYsIGJyb2FkY2FzdCkge1xuICAgIGJyb2FkY2FzdCh0aGlzLmRhdGEpO1xufVxuIiwidmFyIEJhc2VFdmVudCA9IHJlcXVpcmUoJy4vYmFzZS1ldmVudC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudChrZXlMYW1iZGEpO1xuXG5mdW5jdGlvbiBrZXlMYW1iZGEoZXYsIGJyb2FkY2FzdCkge1xuICAgIHZhciBrZXkgPSB0aGlzLm9wdHMua2V5O1xuXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IGtleSkge1xuICAgICAgICBicm9hZGNhc3QodGhpcy5kYXRhKTtcbiAgICB9XG59XG4iLCJ2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRpdmVseVdhbGtcblxuZnVuY3Rpb24gaXRlcmF0aXZlbHlXYWxrKG5vZGVzLCBjYikge1xuICAgIGlmICghKCdsZW5ndGgnIGluIG5vZGVzKSkge1xuICAgICAgICBub2RlcyA9IFtub2Rlc11cbiAgICB9XG4gICAgXG4gICAgbm9kZXMgPSBzbGljZS5jYWxsKG5vZGVzKVxuXG4gICAgd2hpbGUobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXMuc2hpZnQoKSxcbiAgICAgICAgICAgIHJldCA9IGNiKG5vZGUpXG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2RlcyAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlcyA9IHNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKS5jb25jYXQobm9kZXMpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgd2FsayA9IHJlcXVpcmUoJ2RvbS13YWxrJylcblxudmFyIEZvcm1EYXRhID0gcmVxdWlyZSgnLi9pbmRleC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Rm9ybURhdGFcblxuZnVuY3Rpb24gYnVpbGRFbGVtcyhyb290RWxlbSkge1xuICAgIHZhciBoYXNoID0ge31cbiAgICBpZiAocm9vdEVsZW0ubmFtZSkge1xuICAgIFx0aGFzaFtyb290RWxlbS5uYW1lXSA9IHJvb3RFbGVtXG4gICAgfVxuXG4gICAgd2Fsayhyb290RWxlbSwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5uYW1lKSB7XG4gICAgICAgICAgICBoYXNoW2NoaWxkLm5hbWVdID0gY2hpbGRcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIHJldHVybiBoYXNoXG59XG5cbmZ1bmN0aW9uIGdldEZvcm1EYXRhKHJvb3RFbGVtKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gYnVpbGRFbGVtcyhyb290RWxlbSlcblxuICAgIHJldHVybiBGb3JtRGF0YShlbGVtZW50cylcbn1cbiIsIi8qanNoaW50IG1heGNvbXBsZXhpdHk6IDEwKi9cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRGF0YVxuXG4vL1RPRE86IE1hc3NpdmUgc3BlYzogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvYXNzb2NpYXRpb24tb2YtY29udHJvbHMtYW5kLWZvcm1zLmh0bWwjY29uc3RydWN0aW5nLWZvcm0tZGF0YS1zZXRcbmZ1bmN0aW9uIEZvcm1EYXRhKGVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciBlbGVtID0gZWxlbWVudHNba2V5XVxuXG4gICAgICAgIGFjY1trZXldID0gdmFsdWVPZkVsZW1lbnQoZWxlbSlcblxuICAgICAgICByZXR1cm4gYWNjXG4gICAgfSwge30pXG59XG5cbmZ1bmN0aW9uIHZhbHVlT2ZFbGVtZW50KGVsZW0pIHtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZWxlbSgpXG4gICAgfSBlbHNlIGlmIChjb250YWluc1JhZGlvKGVsZW0pKSB7XG4gICAgICAgIHZhciBlbGVtcyA9IHRvTGlzdChlbGVtKVxuICAgICAgICB2YXIgY2hlY2tlZCA9IGVsZW1zLmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uY2hlY2tlZFxuICAgICAgICB9KVswXSB8fCBudWxsXG5cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQgPyBjaGVja2VkLnZhbHVlIDogbnVsbFxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtKSkge1xuICAgICAgICByZXR1cm4gZWxlbS5tYXAodmFsdWVPZkVsZW1lbnQpLmZpbHRlcihmaWx0ZXJOdWxsKVxuICAgIH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBGb3JtRGF0YShlbGVtKVxuICAgIH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgaXNDaGVja2VkKGVsZW0pKSB7XG4gICAgICAgIGlmIChlbGVtLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jaGVja2VkID8gZWxlbS52YWx1ZSA6IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmNoZWNrZWRcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0udmFsdWVcbiAgICB9IGVsc2UgaWYgKGVsZW0udGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSB7XG4gICAgICAgIHJldHVybiBlbGVtLnZhbHVlXG4gICAgfSBlbHNlIGlmIChlbGVtLnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0udmFsdWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQ2hlY2tlZChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0udHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGVsZW0udHlwZSA9PT0gXCJyYWRpb1wiXG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zUmFkaW8odmFsdWUpIHtcbiAgICBpZiAodmFsdWUudGFnTmFtZSB8fCB2YWx1ZS5ub2RlVHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgZWxlbXMgPSB0b0xpc3QodmFsdWUpXG5cbiAgICByZXR1cm4gZWxlbXMuc29tZShmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gZWxlbS50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbS50eXBlID09PSBcInJhZGlvXCJcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0b0xpc3QodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5tYXAocHJvcCwgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIHByb3AoeCkge1xuICAgIHJldHVybiB0aGlzW3hdXG59XG5cbmZ1bmN0aW9uIGZpbHRlck51bGwodmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gbnVsbFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBoYXNLZXlzXG5cbmZ1bmN0aW9uIGhhc0tleXMoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZSAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICB0eXBlb2Ygc291cmNlID09PSBcImZ1bmN0aW9uXCIpXG59XG4iLCJ2YXIgaGFzS2V5cyA9IHJlcXVpcmUoXCIuL2hhcy1rZXlzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBpZiAoIWhhc0tleXMoc291cmNlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZ2V0Rm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEtc2V0L2VsZW1lbnQnKVxuXG52YXIgQmFzZUV2ZW50ID0gcmVxdWlyZSgnLi9iYXNlLWV2ZW50LmpzJyk7XG5cbnZhciBFTlRFUiA9IDEzXG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUV2ZW50KHN1Ym1pdExhbWJkYSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdExhbWJkYShldiwgYnJvYWRjYXN0KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2LnRhcmdldFxuXG4gICAgdmFyIGlzVmFsaWQgPVxuICAgICAgICAoZXYudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdGT1JNJykgfHxcbiAgICAgICAgKGV2LnR5cGUgPT09ICdjbGljaycgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB8fFxuICAgICAgICAoZXYudHlwZSA9PT0gJ2NsaWNrJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcpIHx8XG4gICAgICAgIChcbiAgICAgICAgICAgICh0YXJnZXQudHlwZSA9PT0gJ3RleHQnKSAmJlxuICAgICAgICAgICAgKGV2LmtleUNvZGUgPT09IEVOVEVSICYmIGV2LnR5cGUgPT09ICdrZXlkb3duJylcbiAgICAgICAgKVxuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIGlmIChldi5zdGFydFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldi5zdGFydFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBnZXRGb3JtRGF0YShldi5jdXJyZW50VGFyZ2V0KVxuICAgIHZhciBkYXRhID0gZXh0ZW5kKHZhbHVlLCB0aGlzLmRhdGEpXG5cbiAgICBpZiAoZXYucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3QoZGF0YSk7XG59XG4iLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGdldEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhLXNldC9lbGVtZW50JylcblxudmFyIEJhc2VFdmVudCA9IHJlcXVpcmUoJy4vYmFzZS1ldmVudC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudCh2YWx1ZUxhbWJkYSk7XG5cbmZ1bmN0aW9uIHZhbHVlTGFtYmRhKGV2LCBicm9hZGNhc3QpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRGb3JtRGF0YShldi5jdXJyZW50VGFyZ2V0KVxuICAgIHZhciBkYXRhID0gZXh0ZW5kKHZhbHVlLCB0aGlzLmRhdGEpXG5cbiAgICBicm9hZGNhc3QoZGF0YSk7XG59XG4iLCJmdW5jdGlvbiBUaHVuayhmbiwgYXJncywga2V5LCBlcUFyZ3MpIHtcclxuICAgIHRoaXMuZm4gPSBmbjtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIHRoaXMuZXFBcmdzID0gZXFBcmdzO1xyXG59XHJcblxyXG5UaHVuay5wcm90b3R5cGUudHlwZSA9ICdUaHVuayc7XHJcblRodW5rLnByb3RvdHlwZS5yZW5kZXIgPSByZW5kZXI7XHJcbm1vZHVsZS5leHBvcnRzID0gVGh1bms7XHJcblxyXG5mdW5jdGlvbiBzaG91bGRVcGRhdGUoY3VycmVudCwgcHJldmlvdXMpIHtcclxuICAgIGlmICghY3VycmVudCB8fCAhcHJldmlvdXMgfHwgY3VycmVudC5mbiAhPT0gcHJldmlvdXMuZm4pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FyZ3MgPSBjdXJyZW50LmFyZ3M7XHJcbiAgICB2YXIgcGFyZ3MgPSBwcmV2aW91cy5hcmdzO1xyXG5cclxuICAgIHJldHVybiAhY3VycmVudC5lcUFyZ3MoY2FyZ3MsIHBhcmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHByZXZpb3VzKSB7XHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlKHRoaXMsIHByZXZpb3VzKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZuLmFwcGx5KG51bGwsIHRoaXMuYXJncyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwcmV2aW91cy52bm9kZTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgUGFydGlhbCA9IHJlcXVpcmUoJy4vcGFydGlhbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWFsKCk7XHJcbiIsInZhciBzaGFsbG93RXEgPSByZXF1aXJlKCcuL3NoYWxsb3ctZXEnKTtcbnZhciBUaHVuayA9IHJlcXVpcmUoJy4vaW1tdXRhYmxlLXRodW5rJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFydGlhbDtcblxuZnVuY3Rpb24gY3JlYXRlUGFydGlhbChlcSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBwYXJ0aWFsKGZuKSB7XG4gICAgICAgIHZhciBhcmdzID0gY29weU92ZXIoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIGZpcnN0QXJnID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICB2YXIgZXFBcmdzID0gZXEgfHwgc2hhbGxvd0VxO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoJ2tleScgaW4gZmlyc3RBcmcpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBmaXJzdEFyZy5rZXk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCdpZCcgaW4gZmlyc3RBcmcpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBmaXJzdEFyZy5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVGh1bmsoZm4sIGFyZ3MsIGtleSwgZXFBcmdzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5T3ZlcihsaXN0LCBvZmZzZXQpIHtcbiAgICB2YXIgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gb2Zmc2V0OyBpLS0pIHtcbiAgICAgICAgbmV3TGlzdFtpIC0gb2Zmc2V0XSA9IGxpc3RbaV07XG4gICAgfVxuICAgIHJldHVybiBuZXdMaXN0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXE7XHJcblxyXG5mdW5jdGlvbiBzaGFsbG93RXEoY3VycmVudEFyZ3MsIHByZXZpb3VzQXJncykge1xyXG4gICAgaWYgKGN1cnJlbnRBcmdzLmxlbmd0aCA9PT0gMCAmJiBwcmV2aW91c0FyZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRBcmdzLmxlbmd0aCAhPT0gcHJldmlvdXNBcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGVuID0gY3VycmVudEFyZ3MubGVuZ3RoO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoY3VycmVudEFyZ3NbaV0gIT09IHByZXZpb3VzQXJnc1tpXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVUcmF2ZWw7XG5cbmZ1bmN0aW9uIFRpbWVUcmF2ZWwoc3RhdGUpIHtcbiAgICB2YXIgaGlzdG9yeSA9IFtzdGF0ZSgpXTtcblxuICAgIC8vIFRyYWNrcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiBoaXN0b3J5LlxuICAgIHZhciBjdXJzb3IgPSAwO1xuXG4gICAgdmFyIGlzUmVkb09yVW5kbyA9IGZhbHNlO1xuXG4gICAgc3RhdGUoZnVuY3Rpb24gcmVjb3JkU3RhdGUobmV3U3RhdGUpIHtcblxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZXJlIGlzIGEgc3RhdGUgY2hhbmdlLlxuICAgICAgICAvLyBTdGF0ZSBjaGFuZ2VzIGhhcHBlbiBkdWUgdG8gZXZlbnRzIGJlaW5nIGhhbmRsZWQsIG9yIGR1ZSB0b1xuICAgICAgICAvLyB1bmRvL3JlZG8uXG5cbiAgICAgICAgLy8gSWYgd2UgYXJlIHJlcGxheWluZyBpdGVtcyBpbiB0aGUgaGlzdG9yeSxcbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byByZS1hZGQgdGhlbSB0byB0aGUgZW5kIG9mIHRoZSBoaXN0b3J5LlxuICAgICAgICAvLyBKdXN0IHF1aXQuXG4gICAgICAgIGlmIChpc1JlZG9PclVuZG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlJ3ZlIG1hZGUgaXQgdGhpcyBmYXIsIGBuZXdTdGF0ZWAgaXMgZHVlIHRvIGEgbmV3IGFjdGlvbixcbiAgICAgICAgLy8gbm90IGR1ZSB0byB1bmRvL3JlZG8uXG5cbiAgICAgICAgLy8gSWYgd2UndmUgY2FsbGVkIGB1bmRvYCBhIGJ1bmNoIG9mIHRpbWVzLFxuICAgICAgICAvLyB0aGUgY3Vyc29yIHdvbid0IGJlIGF0IHRoZSBlbmQuXG4gICAgICAgIC8vIEFueSBzdGF0ZXMgcGFzdCB0aGUgY3Vyc29yIHNob3VsZCBiZSBjdXQgb2ZmLlxuICAgICAgICBoaXN0b3J5LnNwbGljZShjdXJzb3IgKyAxKTtcblxuICAgICAgICAvLyBBZGQgdGhlIG5ldyBpdGVtIHRvIHRoZSBoaXN0b3J5XG4gICAgICAgIGhpc3RvcnkucHVzaChuZXdTdGF0ZSk7XG5cbiAgICAgICAgY3Vyc29yID0gaGlzdG9yeS5sZW5ndGggLSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdW5kbzogdW5kbywgcmVkbzogcmVkbyB9O1xuXG4gICAgZnVuY3Rpb24gdW5kbygpIHtcbiAgICAgICAgaWYgKGN1cnNvciA8IDEpIHtcbiAgICAgICAgICAgIC8vIERvbid0IG1vdmUgYmVmb3JlIHRoZSBiZWdpbm5pbmcgb2YgdGltZVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnNvci0tO1xuICAgICAgICBpc1JlZG9PclVuZG8gPSB0cnVlO1xuICAgICAgICBzdGF0ZS5zZXQoaGlzdG9yeVtjdXJzb3JdKTtcbiAgICAgICAgaXNSZWRvT3JVbmRvID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBoaXN0b3J5W2N1cnNvcl07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkbygpIHtcbiAgICAgICAgaWYgKGN1cnNvciArIDEgPj0gaGlzdG9yeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIERvbid0IG1vdmUgcGFzdCB0aGUgZW5kIG9mIHRpbWVcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgaXNSZWRvT3JVbmRvID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuc2V0KGhpc3RvcnlbY3Vyc29yXSk7XG4gICAgICAgIGlzUmVkb09yVW5kbyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gaGlzdG9yeVtjdXJzb3JdO1xuICAgIH1cbn1cbiIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8ge30gOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gZ2xvYmFsWydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSBnbG9iYWxbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IGdsb2JhbFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmFmOyBpKyspIHtcbiAgcmFmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpXG59XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX3NsaWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fc2xpY2UnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiBmcm9tIGFuIGV4aXN0aW5nIG9uZSBieSBhZGRpbmcgdHdvIG5ldyBwYXJhbWV0ZXJzXG4gKiB0byBpdHMgY2FsbGJhY2sgZnVuY3Rpb246IHRoZSBjdXJyZW50IGluZGV4LCBhbmQgdGhlIGVudGlyZSBsaXN0LlxuICpcbiAqIFRoaXMgd291bGQgdHVybiwgZm9yIGluc3RhbmNlLCBSYW1kYSdzIHNpbXBsZSBgbWFwYCBmdW5jdGlvbiBpbnRvIG9uZSB0aGF0IG1vcmUgY2xvc2VseVxuICogcmVzZW1ibGVzIGBBcnJheS5wcm90b3R5cGUubWFwYC4gIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIGZvciBmdW5jdGlvbnMgaW4gd2hpY2hcbiAqIHRoZSBpdGVyYXRpb24gY2FsbGJhY2sgZnVuY3Rpb24gaXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgYW5kIHdoZXJlIHRoZSBsaXN0IGlzIHRoZSBsYXN0XG4gKiBwYXJhbWV0ZXIuICAoVGhpcyBsYXR0ZXIgbWlnaHQgYmUgdW5pbXBvcnRhbnQgaWYgdGhlIGxpc3QgcGFyYW1ldGVyIGlzIG5vdCB1c2VkLilcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhIC4uLiAtPiBiKSAuLi4gLT4gW2FdIC0+ICopIC0+IChhIC4uLiwgSW50LCBbYV0gLT4gYikgLi4uIC0+IFthXSAtPiAqKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiB0aGF0IGRvZXMgbm90IHBhc3MgaW5kZXggb3IgbGlzdCB0byBpdHMgY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBbiBhbHRlcmVkIGxpc3QgaXRlcmF0aW9uIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIChpdGVtLCBpbmRleCwgbGlzdCkgdG8gaXRzIGNhbGxiYWNrXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1hcEluZGV4ZWQgPSBSLmFkZEluZGV4KFIubWFwKTtcbiAqICAgICAgbWFwSW5kZXhlZChmdW5jdGlvbih2YWwsIGlkeCkge3JldHVybiBpZHggKyAnLScgKyB2YWw7fSwgWydmJywgJ28nLCAnbycsICdiJywgJ2EnLCAnciddKTtcbiAqICAgICAgLy89PiBbJzAtZicsICcxLW8nLCAnMi1vJywgJzMtYicsICc0LWEnLCAnNS1yJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFkZEluZGV4KGZuKSB7XG4gIHJldHVybiBjdXJyeU4oZm4ubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgb3JpZ0ZuID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBsaXN0ID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICB2YXIgYXJncyA9IF9zbGljZShhcmd1bWVudHMpO1xuICAgIGFyZ3NbMF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHQgPSBvcmlnRm4uYXBwbHkodGhpcywgX2NvbmNhdChhcmd1bWVudHMsIFtpZHgsIGxpc3RdKSk7XG4gICAgICBpZHggKz0gMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBjb250ZW50cyBvZiB0aGUgZ2l2ZW4gbGlzdCwgZm9sbG93ZWQgYnkgdGhlIGdpdmVuXG4gKiBlbGVtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0geyp9IGVsIFRoZSBlbGVtZW50IHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBuZXcgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3Qgd2hvc2UgY29udGVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBvdXRwdXRcbiAqICAgICAgICBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgY29udGVudHMgb2YgdGhlIG9sZCBsaXN0IGZvbGxvd2VkIGJ5IGBlbGAuXG4gKiBAc2VlIFIucHJlcGVuZFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYXBwZW5kKCd0ZXN0cycsIFsnd3JpdGUnLCAnbW9yZSddKTsgLy89PiBbJ3dyaXRlJywgJ21vcmUnLCAndGVzdHMnXVxuICogICAgICBSLmFwcGVuZCgndGVzdHMnLCBbXSk7IC8vPT4gWyd0ZXN0cyddXG4gKiAgICAgIFIuYXBwZW5kKFsndGVzdHMnXSwgWyd3cml0ZScsICdtb3JlJ10pOyAvLz0+IFsnd3JpdGUnLCAnbW9yZScsIFsndGVzdHMnXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGFwcGVuZChlbCwgbGlzdCkge1xuICByZXR1cm4gX2NvbmNhdChsaXN0LCBbZWxdKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaXMgYm91bmQgdG8gYSBjb250ZXh0LlxuICogTm90ZTogYFIuYmluZGAgZG9lcyBub3QgcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBhcmd1bWVudC1iaW5kaW5nIGNhcGFiaWxpdGllcyBvZlxuICogW0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNlZSBSLnBhcnRpYWxcbiAqIEBzaWcgKCogLT4gKikgLT4geyp9IC0+ICgqIC0+ICopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmluZCB0byBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc09iaiBUaGUgY29udGV4dCB0byBiaW5kIGBmbmAgdG9cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBleGVjdXRlIGluIHRoZSBjb250ZXh0IG9mIGB0aGlzT2JqYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNPYmopIHtcbiAgcmV0dXJuIF9hcml0eShmbi5sZW5ndGgsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzT2JqLCBhcmd1bWVudHMpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZXF1aXZhbGVudCBvZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSBjdXJyaWVkXG4gKiBmdW5jdGlvbiBoYXMgdHdvIHVudXN1YWwgY2FwYWJpbGl0aWVzLiBGaXJzdCwgaXRzIGFyZ3VtZW50cyBuZWVkbid0XG4gKiBiZSBwcm92aWRlZCBvbmUgYXQgYSB0aW1lLiBJZiBgZmAgaXMgYSB0ZXJuYXJ5IGZ1bmN0aW9uIGFuZCBgZ2AgaXNcbiAqIGBSLmN1cnJ5KGYpYCwgdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSkoMikoMylgXG4gKiAgIC0gYGcoMSkoMiwgMylgXG4gKiAgIC0gYGcoMSwgMikoMylgXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKlxuICogU2Vjb25kbHksIHRoZSBzcGVjaWFsIHBsYWNlaG9sZGVyIHZhbHVlIGBSLl9fYCBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5XG4gKiBcImdhcHNcIiwgYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLFxuICogcmVnYXJkbGVzcyBvZiB0aGVpciBwb3NpdGlvbnMuIElmIGBnYCBpcyBhcyBhYm92ZSBhbmQgYF9gIGlzIGBSLl9fYCxcbiAqIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEsIDIsIDMpYFxuICogICAtIGBnKF8sIDIsIDMpKDEpYFxuICogICAtIGBnKF8sIF8sIDMpKDEpKDIpYFxuICogICAtIGBnKF8sIF8sIDMpKDEsIDIpYFxuICogICAtIGBnKF8sIDIpKDEpKDMpYFxuICogICAtIGBnKF8sIDIpKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKF8sIDMpKDEpYFxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlOXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFkZEZvdXJOdW1iZXJzID0gZnVuY3Rpb24oYSwgYiwgYywgZCkge1xuICogICAgICAgIHJldHVybiBhICsgYiArIGMgKyBkO1xuICogICAgICB9O1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnkoYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBjdXJyeShmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZm4pO1xufSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9jdXJyeU4gPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLCB3aXRoIHRoZVxuICogc3BlY2lmaWVkIGFyaXR5LiBUaGUgY3VycmllZCBmdW5jdGlvbiBoYXMgdHdvIHVudXN1YWwgY2FwYWJpbGl0aWVzLlxuICogRmlyc3QsIGl0cyBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmUgYXQgYSB0aW1lLiBJZiBgZ2AgaXNcbiAqIGBSLmN1cnJ5TigzLCBmKWAsIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBgUi5fX2AgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBgUi5fX2AsXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKCogLT4gYSkgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IGZvciB0aGUgcmV0dXJuZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWRkRm91ck51bWJlcnMgPSBmdW5jdGlvbigpIHtcbiAqICAgICAgICByZXR1cm4gUi5zdW0oW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIDQpKTtcbiAqICAgICAgfTtcbiAqXG4gKiAgICAgIHZhciBjdXJyaWVkQWRkRm91ck51bWJlcnMgPSBSLmN1cnJ5Tig0LCBhZGRGb3VyTnVtYmVycyk7XG4gKiAgICAgIHZhciBmID0gY3VycmllZEFkZEZvdXJOdW1iZXJzKDEsIDIpO1xuICogICAgICB2YXIgZyA9IGYoMyk7XG4gKiAgICAgIGcoNCk7IC8vPT4gMTBcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGN1cnJ5TihsZW5ndGgsIGZuKSB7XG4gIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gX2N1cnJ5MShmbik7XG4gIH1cbiAgcmV0dXJuIF9hcml0eShsZW5ndGgsIF9jdXJyeU4obGVuZ3RoLCBbXSwgZm4pKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNlY29uZCBhcmd1bWVudCBpZiBpdCBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQuIElmIGl0IGlzIG51bGxcbiAqIG9yIHVuZGVmaW5lZCwgdGhlIGZpcnN0IChkZWZhdWx0KSBhcmd1bWVudCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyBhIC0+IGIgLT4gYSB8IGJcbiAqIEBwYXJhbSB7YX0gdmFsIFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtifSB2YWwgVGhlIHZhbHVlIHRvIHJldHVybiBpZiBpdCBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAqIEByZXR1cm4geyp9IFRoZSB0aGUgc2Vjb25kIHZhbHVlIG9yIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRlZmF1bHRUbzQyID0gZGVmYXVsdFRvKDQyKTtcbiAqXG4gKiAgICAgIGRlZmF1bHRUbzQyKG51bGwpOyAgLy89PiA0MlxuICogICAgICBkZWZhdWx0VG80Mih1bmRlZmluZWQpOyAgLy89PiA0MlxuICogICAgICBkZWZhdWx0VG80MignUmFtZGEnKTsgIC8vPT4gJ1JhbWRhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZGVmYXVsdFRvKGQsIHYpIHtcbiAgcmV0dXJuIHYgPT0gbnVsbCA/IGQgOiB2O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfZmlsdGVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZmlsdGVyJyk7XG52YXIgX3hmaWx0ZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZmlsdGVyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyBvbmx5IHRob3NlIGl0ZW1zIHRoYXQgbWF0Y2ggYSBnaXZlbiBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6ICoodmFsdWUpKi5cbiAqXG4gKiBOb3RlIHRoYXQgYFIuZmlsdGVyYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzLCB1bmxpa2UgdGhlIG5hdGl2ZVxuICogYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZC4gRm9yIG1vcmUgZGV0YWlscyBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maWx0ZXIjRGVzY3JpcHRpb25cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gY2FsbGVkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICogQHNlZSBSLnJlamVjdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0V2ZW4gPSBmdW5jdGlvbihuKSB7XG4gKiAgICAgICAgcmV0dXJuIG4gJSAyID09PSAwO1xuICogICAgICB9O1xuICogICAgICBSLmZpbHRlcihpc0V2ZW4sIFsxLCAyLCAzLCA0XSk7IC8vPT4gWzIsIDRdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKCdmaWx0ZXInLCBfeGZpbHRlciwgX2ZpbHRlcikpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hmaW5kID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGZpbmQnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgd2hpY2ggbWF0Y2hlcyB0aGUgcHJlZGljYXRlLCBvciBgdW5kZWZpbmVkYCBpZiBub1xuICogZWxlbWVudCBtYXRjaGVzLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBhIHwgdW5kZWZpbmVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBlbGVtZW50IGlzIHRoZVxuICogICAgICAgIGRlc2lyZWQgb25lLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBlbGVtZW50IGZvdW5kLCBvciBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeHMgPSBbe2E6IDF9LCB7YTogMn0sIHthOiAzfV07XG4gKiAgICAgIFIuZmluZChSLnByb3BFcSgnYScsIDIpKSh4cyk7IC8vPT4ge2E6IDJ9XG4gKiAgICAgIFIuZmluZChSLnByb3BFcSgnYScsIDQpKSh4cyk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKCdmaW5kJywgX3hmaW5kLCBmdW5jdGlvbiBmaW5kKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmV0dXJuIGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbn0pKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX3NsaWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fc2xpY2UnKTtcbnZhciBjdXJyeSA9IHJlcXVpcmUoJy4vY3VycnknKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgZnVuY3Rpb24gbXVjaCBsaWtlIHRoZSBzdXBwbGllZCBvbmUsIGV4Y2VwdCB0aGF0IHRoZSBmaXJzdCB0d28gYXJndW1lbnRzJ1xuICogb3JkZXIgaXMgcmV2ZXJzZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKGEgLT4gYiAtPiBjIC0+IC4uLiAtPiB6KSAtPiAoYiAtPiBhIC0+IGMgLT4gLi4uIC0+IHopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlIHdpdGggaXRzIGZpcnN0IHR3byBwYXJhbWV0ZXJzIHJldmVyc2VkLlxuICogQHJldHVybiB7Kn0gVGhlIHJlc3VsdCBvZiBpbnZva2luZyBgZm5gIHdpdGggaXRzIGZpcnN0IHR3byBwYXJhbWV0ZXJzJyBvcmRlciByZXZlcnNlZC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbWVyZ2VUaHJlZSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAqICAgICAgICByZXR1cm4gKFtdKS5jb25jYXQoYSwgYiwgYyk7XG4gKiAgICAgIH07XG4gKlxuICogICAgICBtZXJnZVRocmVlKDEsIDIsIDMpOyAvLz0+IFsxLCAyLCAzXVxuICpcbiAqICAgICAgUi5mbGlwKG1lcmdlVGhyZWUpKDEsIDIsIDMpOyAvLz0+IFsyLCAxLCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gZmxpcChmbikge1xuICByZXR1cm4gY3VycnkoZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBhcmdzID0gX3NsaWNlKGFyZ3VtZW50cyk7XG4gICAgYXJnc1swXSA9IGI7XG4gICAgYXJnc1sxXSA9IGE7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jaGVja0Zvck1ldGhvZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIGlucHV0IGBsaXN0YCwgY2FsbGluZyBhIHByb3ZpZGVkIGZ1bmN0aW9uIGBmbmAgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGVcbiAqIGxpc3QuXG4gKlxuICogYGZuYCByZWNlaXZlcyBvbmUgYXJndW1lbnQ6ICoodmFsdWUpKi5cbiAqXG4gKiBOb3RlOiBgUi5mb3JFYWNoYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2UgYXJyYXlzKSwgdW5saWtlXG4gKiB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kLiBGb3IgbW9yZSBkZXRhaWxzIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2gjRGVzY3JpcHRpb25cbiAqXG4gKiBBbHNvIG5vdGUgdGhhdCwgdW5saWtlIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAsIFJhbWRhJ3MgYGZvckVhY2hgIHJldHVybnMgdGhlIG9yaWdpbmFsXG4gKiBhcnJheS4gSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgZWFjaGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiAqKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLiBSZWNlaXZlcyBvbmUgYXJndW1lbnQsIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgb3JpZ2luYWwgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgcHJpbnRYUGx1c0ZpdmUgPSBmdW5jdGlvbih4KSB7IGNvbnNvbGUubG9nKHggKyA1KTsgfTtcbiAqICAgICAgUi5mb3JFYWNoKHByaW50WFBsdXNGaXZlLCBbMSwgMiwgM10pOyAvLz0+IFsxLCAyLCAzXVxuICogICAgICAvLy0+IDZcbiAqICAgICAgLy8tPiA3XG4gKiAgICAgIC8vLT4gOFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NoZWNrRm9yTWV0aG9kKCdmb3JFYWNoJywgZnVuY3Rpb24gZm9yRWFjaChmbiwgbGlzdCkge1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgZm4obGlzdFtpZHhdKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeGdyb3VwQnkgPSByZXF1aXJlKCcuL2ludGVybmFsL194Z3JvdXBCeScpO1xudmFyIGFwcGVuZCA9IHJlcXVpcmUoJy4vYXBwZW5kJyk7XG5cblxuLyoqXG4gKiBTcGxpdHMgYSBsaXN0IGludG8gc3ViLWxpc3RzIHN0b3JlZCBpbiBhbiBvYmplY3QsIGJhc2VkIG9uIHRoZSByZXN1bHQgb2YgY2FsbGluZyBhIFN0cmluZy1yZXR1cm5pbmcgZnVuY3Rpb25cbiAqIG9uIGVhY2ggZWxlbWVudCwgYW5kIGdyb3VwaW5nIHRoZSByZXN1bHRzIGFjY29yZGluZyB0byB2YWx1ZXMgcmV0dXJuZWQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gU3RyaW5nKSAtPiBbYV0gLT4ge1N0cmluZzogW2FdfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gOjogYSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGdyb3VwXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHRoZSBvdXRwdXQgb2YgYGZuYCBmb3Iga2V5cywgbWFwcGVkIHRvIGFycmF5cyBvZiBlbGVtZW50c1xuICogICAgICAgICB0aGF0IHByb2R1Y2VkIHRoYXQga2V5IHdoZW4gcGFzc2VkIHRvIGBmbmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGJ5R3JhZGUgPSBSLmdyb3VwQnkoZnVuY3Rpb24oc3R1ZGVudCkge1xuICogICAgICAgIHZhciBzY29yZSA9IHN0dWRlbnQuc2NvcmU7XG4gKiAgICAgICAgcmV0dXJuIHNjb3JlIDwgNjUgPyAnRicgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDcwID8gJ0QnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA4MCA/ICdDJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgOTAgPyAnQicgOiAnQSc7XG4gKiAgICAgIH0pO1xuICogICAgICB2YXIgc3R1ZGVudHMgPSBbe25hbWU6ICdBYmJ5Jywgc2NvcmU6IDg0fSxcbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnRWRkeScsIHNjb3JlOiA1OH0sXG4gKiAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnSmFjaycsIHNjb3JlOiA2OX1dO1xuICogICAgICBieUdyYWRlKHN0dWRlbnRzKTtcbiAqICAgICAgLy8ge1xuICogICAgICAvLyAgICdBJzogW3tuYW1lOiAnRGlhbm5lJywgc2NvcmU6IDk5fV0sXG4gKiAgICAgIC8vICAgJ0InOiBbe25hbWU6ICdBYmJ5Jywgc2NvcmU6IDg0fV1cbiAqICAgICAgLy8gICAvLyAuLi4sXG4gKiAgICAgIC8vICAgJ0YnOiBbe25hbWU6ICdFZGR5Jywgc2NvcmU6IDU4fV1cbiAqICAgICAgLy8gfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZSgnZ3JvdXBCeScsIF94Z3JvdXBCeSwgZnVuY3Rpb24gZ3JvdXBCeShmbiwgbGlzdCkge1xuICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbihhY2MsIGVsdCkge1xuICAgIHZhciBrZXkgPSBmbihlbHQpO1xuICAgIGFjY1trZXldID0gYXBwZW5kKGVsdCwgYWNjW2tleV0gfHwgKGFjY1trZXldID0gW10pKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSwgbGlzdCk7XG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9hcml0eShuLCBmbikge1xuICAvLyBqc2hpbnQgdW51c2VkOnZhcnNcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEwKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDY6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgODogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDk6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMTA6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIF9hcml0eSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIgbm8gZ3JlYXRlciB0aGFuIHRlbicpO1xuICB9XG59O1xuIiwidmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9faXNBcnJheScpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vX3NsaWNlJyk7XG5cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGhhc01ldGhvZCwgdGhpcyBjaGVja3Mgd2hldGhlciBhIGZ1bmN0aW9uIGhhcyBhIFttZXRob2RuYW1lXVxuICogZnVuY3Rpb24uIElmIGl0IGlzbid0IGFuIGFycmF5IGl0IHdpbGwgZXhlY3V0ZSB0aGF0IGZ1bmN0aW9uIG90aGVyd2lzZSBpdCB3aWxsXG4gKiBkZWZhdWx0IHRvIHRoZSByYW1kYSBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gcmFtZGEgaW1wbGVtdGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kbmFtZSBwcm9wZXJ0eSB0byBjaGVjayBmb3IgYSBjdXN0b20gaW1wbGVtZW50YXRpb25cbiAqIEByZXR1cm4ge09iamVjdH0gV2hhdGV2ZXIgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbWV0aG9kIGlzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jaGVja0Zvck1ldGhvZChtZXRob2RuYW1lLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciBvYmogPSBhcmd1bWVudHNbbGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIChfaXNBcnJheShvYmopIHx8IHR5cGVvZiBvYmpbbWV0aG9kbmFtZV0gIT09ICdmdW5jdGlvbicpID9cbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOlxuICAgICAgb2JqW21ldGhvZG5hbWVdLmFwcGx5KG9iaiwgX3NsaWNlKGFyZ3VtZW50cywgMCwgbGVuZ3RoIC0gMSkpO1xuICB9O1xufTtcbiIsIi8qKlxuICogUHJpdmF0ZSBgY29uY2F0YCBmdW5jdGlvbiB0byBtZXJnZSB0d28gYXJyYXktbGlrZSBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fEFyZ3VtZW50c30gW3NldDE9W11dIEFuIGFycmF5LWxpa2Ugb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQyPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldywgbWVyZ2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9jb25jYXQoWzQsIDUsIDZdLCBbMSwgMiwgM10pOyAvLz0+IFs0LCA1LCA2LCAxLCAyLCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jb25jYXQoc2V0MSwgc2V0Mikge1xuICBzZXQxID0gc2V0MSB8fCBbXTtcbiAgc2V0MiA9IHNldDIgfHwgW107XG4gIHZhciBpZHg7XG4gIHZhciBsZW4xID0gc2V0MS5sZW5ndGg7XG4gIHZhciBsZW4yID0gc2V0Mi5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuMSkge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHNldDFbaWR4XTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuMikge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHNldDJbaWR4XTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL19hcml0eScpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vX3NsaWNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IoY29uY2F0KSB7XG4gIHJldHVybiBmdW5jdGlvbihmbikge1xuICAgIHZhciBhcmdzID0gX3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIF9hcml0eShNYXRoLm1heCgwLCBmbi5sZW5ndGggLSBhcmdzLmxlbmd0aCksIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGNvbmNhdChhcmdzLCBhcmd1bWVudHMpKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCIvKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0d28tYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeTEoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYxKGEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSBpZiAoYSAhPSBudWxsICYmIGFbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZjE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHR3by1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5Mihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjIoYSwgYikge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYyO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMSAmJiBhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDEpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYSAhPSBudWxsICYmIGFbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGIgIT0gbnVsbCAmJiBiWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGYyO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMiAmJiBhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYiAhPSBudWxsICYmIGJbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gX2N1cnJ5MShmdW5jdGlvbihiKSB7IHJldHVybiBmbihhLCBiKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmbihhLCBiKTtcbiAgICB9XG4gIH07XG59O1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vX2FyaXR5Jyk7XG5cblxuLyoqXG4gKiBJbnRlcm5hbCBjdXJyeU4gZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgb2YgdGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHthcnJheX0gQW4gYXJyYXkgb2YgYXJndW1lbnRzIHJlY2VpdmVkIHRodXMgZmFyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeU4obGVuZ3RoLCByZWNlaXZlZCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21iaW5lZCA9IFtdO1xuICAgIHZhciBhcmdzSWR4ID0gMDtcbiAgICB2YXIgbGVmdCA9IGxlbmd0aDtcbiAgICB2YXIgY29tYmluZWRJZHggPSAwO1xuICAgIHdoaWxlIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCB8fCBhcmdzSWR4IDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCAmJlxuICAgICAgICAgIChyZWNlaXZlZFtjb21iaW5lZElkeF0gPT0gbnVsbCB8fFxuICAgICAgICAgICByZWNlaXZlZFtjb21iaW5lZElkeF1bJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddICE9PSB0cnVlIHx8XG4gICAgICAgICAgIGFyZ3NJZHggPj0gYXJndW1lbnRzLmxlbmd0aCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjZWl2ZWRbY29tYmluZWRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gYXJndW1lbnRzW2FyZ3NJZHhdO1xuICAgICAgICBhcmdzSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICBjb21iaW5lZFtjb21iaW5lZElkeF0gPSByZXN1bHQ7XG4gICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0WydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSAhPT0gdHJ1ZSkge1xuICAgICAgICBsZWZ0IC09IDE7XG4gICAgICB9XG4gICAgICBjb21iaW5lZElkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdCA8PSAwID8gZm4uYXBwbHkodGhpcywgY29tYmluZWQpIDogX2FyaXR5KGxlZnQsIF9jdXJyeU4obGVuZ3RoLCBjb21iaW5lZCwgZm4pKTtcbiAgfTtcbn07XG4iLCJ2YXIgX2lzQXJyYXkgPSByZXF1aXJlKCcuL19pc0FycmF5Jyk7XG52YXIgX2lzVHJhbnNmb3JtZXIgPSByZXF1aXJlKCcuL19pc1RyYW5zZm9ybWVyJyk7XG52YXIgX3NsaWNlID0gcmVxdWlyZSgnLi9fc2xpY2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgd2l0aCBkaWZmZXJlbnQgc3RyYXRlZ2llcyBiYXNlZCBvbiB0aGVcbiAqIG9iamVjdCBpbiBsaXN0IHBvc2l0aW9uIChsYXN0IGFyZ3VtZW50KS4gSWYgaXQgaXMgYW4gYXJyYXksIGV4ZWN1dGVzIFtmbl0uXG4gKiBPdGhlcndpc2UsIGlmIGl0IGhhcyBhICBmdW5jdGlvbiB3aXRoIFttZXRob2RuYW1lXSwgaXQgd2lsbCBleGVjdXRlIHRoYXRcbiAqIGZ1bmN0aW9uIChmdW5jdG9yIGNhc2UpLiBPdGhlcndpc2UsIGlmIGl0IGlzIGEgdHJhbnNmb3JtZXIsIHVzZXMgdHJhbnNkdWNlclxuICogW3hmXSB0byByZXR1cm4gYSBuZXcgdHJhbnNmb3JtZXIgKHRyYW5zZHVjZXIgY2FzZSkuIE90aGVyd2lzZSwgaXQgd2lsbFxuICogZGVmYXVsdCB0byBleGVjdXRpbmcgW2ZuXS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZG5hbWUgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiB0cmFuc2R1Y2VyIHRvIGluaXRpYWxpemUgaWYgb2JqZWN0IGlzIHRyYW5zZm9ybWVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBkZWZhdWx0IHJhbWRhIGltcGxlbWVudGF0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgb24gb2JqZWN0IGluIGxpc3QgcG9zaXRpb25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZGlzcGF0Y2hhYmxlKG1ldGhvZG5hbWUsIHhmLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciBvYmogPSBhcmd1bWVudHNbbGVuZ3RoIC0gMV07XG4gICAgaWYgKCFfaXNBcnJheShvYmopKSB7XG4gICAgICB2YXIgYXJncyA9IF9zbGljZShhcmd1bWVudHMsIDAsIGxlbmd0aCAtIDEpO1xuICAgICAgaWYgKHR5cGVvZiBvYmpbbWV0aG9kbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG9ialttZXRob2RuYW1lXS5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgICAgaWYgKF9pc1RyYW5zZm9ybWVyKG9iaikpIHtcbiAgICAgICAgdmFyIHRyYW5zZHVjZXIgPSB4Zi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zZHVjZXIob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZmlsdGVyKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCwgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gbGlzdFtpZHhdO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2hhcyhwcm9wLCBvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcbiIsIi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGlzIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHZhbGAgaXMgYW4gYXJyYXksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9pc0FycmF5KFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIF9pc0FycmF5KG51bGwpOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5KHt9KTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gX2lzQXJyYXkodmFsKSB7XG4gIHJldHVybiAodmFsICE9IG51bGwgJiZcbiAgICAgICAgICB2YWwubGVuZ3RoID49IDAgJiZcbiAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNUcmFuc2Zvcm1lcihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmpbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfbWFwKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCwgcmVzdWx0ID0gQXJyYXkobGVuKTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHJlc3VsdFtpZHhdID0gZm4obGlzdFtpZHhdKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBfeHdyYXAgPSByZXF1aXJlKCcuL194d3JhcCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9iaW5kJyk7XG52YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pc0FycmF5TGlrZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBfYXJyYXlSZWR1Y2UoeGYsIGFjYywgbGlzdCkge1xuICAgIHZhciBpZHggPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIGxpc3RbaWR4XSk7XG4gICAgICBpZiAoYWNjICYmIGFjY1snQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSkge1xuICAgICAgICBhY2MgPSBhY2NbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShhY2MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlUmVkdWNlKHhmLCBhY2MsIGl0ZXIpIHtcbiAgICB2YXIgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgICAgaWYgKGFjYyAmJiBhY2NbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgYWNjID0gYWNjWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKGFjYyk7XG4gIH1cblxuICBmdW5jdGlvbiBfbWV0aG9kUmVkdWNlKHhmLCBhY2MsIG9iaikge1xuICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKG9iai5yZWR1Y2UoYmluZCh4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSwgeGYpLCBhY2MpKTtcbiAgfVxuXG4gIHZhciBzeW1JdGVyYXRvciA9ICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7XG4gIHJldHVybiBmdW5jdGlvbiBfcmVkdWNlKGZuLCBhY2MsIGxpc3QpIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmbiA9IF94d3JhcChmbik7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShsaXN0KSkge1xuICAgICAgcmV0dXJuIF9hcnJheVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaXN0LnJlZHVjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIF9tZXRob2RSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIGlmIChsaXN0W3N5bUl0ZXJhdG9yXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gX2l0ZXJhYmxlUmVkdWNlKGZuLCBhY2MsIGxpc3Rbc3ltSXRlcmF0b3JdKCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpc3QubmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIF9pdGVyYWJsZVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlOiBsaXN0IG11c3QgYmUgYXJyYXkgb3IgaXRlcmFibGUnKTtcbiAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9yZWR1Y2VkKHgpIHtcbiAgcmV0dXJuIHggJiYgeFsnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSA/IHggOlxuICAgIHtcbiAgICAgICdAQHRyYW5zZHVjZXIvdmFsdWUnOiB4LFxuICAgICAgJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJzogdHJ1ZVxuICAgIH07XG59O1xuIiwiLyoqXG4gKiBBbiBvcHRpbWl6ZWQsIHByaXZhdGUgYXJyYXkgYHNsaWNlYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcmd1bWVudHN8QXJyYXl9IGFyZ3MgVGhlIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3QgdG8gY29uc2lkZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gW2Zyb209MF0gVGhlIGFycmF5IGluZGV4IHRvIHNsaWNlIGZyb20sIGluY2x1c2l2ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbdG89YXJncy5sZW5ndGhdIFRoZSBhcnJheSBpbmRleCB0byBzbGljZSB0bywgZXhjbHVzaXZlLlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3LCBzbGljZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgX3NsaWNlKFsxLCAyLCAzLCA0LCA1XSwgMSwgMyk7IC8vPT4gWzIsIDNdXG4gKlxuICogICAgICB2YXIgZmlyc3RUaHJlZUFyZ3MgPSBmdW5jdGlvbihhLCBiLCBjLCBkKSB7XG4gKiAgICAgICAgcmV0dXJuIF9zbGljZShhcmd1bWVudHMsIDAsIDMpO1xuICogICAgICB9O1xuICogICAgICBmaXJzdFRocmVlQXJncygxLCAyLCAzLCA0KTsgLy89PiBbMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfc2xpY2UoYXJncywgZnJvbSwgdG8pIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gX3NsaWNlKGFyZ3MsIDAsIGFyZ3MubGVuZ3RoKTtcbiAgICBjYXNlIDI6IHJldHVybiBfc2xpY2UoYXJncywgZnJvbSwgYXJncy5sZW5ndGgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB2YXIgbGVuID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oYXJncy5sZW5ndGgsIHRvKSAtIGZyb20pO1xuICAgICAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgICAgICBsaXN0W2lkeF0gPSBhcmdzW2Zyb20gKyBpZHhdO1xuICAgICAgICBpZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0O1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvaW5pdCddKCk7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9XG59O1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaWx0ZXIoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5mKGlucHV0KSA/IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCkgOiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hmaWx0ZXIoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmlsdGVyKGYsIHhmKTsgfSk7XG59KSgpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaW5kKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5mb3VuZCA9IGZhbHNlO1xuICB9XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbmQucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBpZiAoIXRoaXMuZm91bmQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB2b2lkIDApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAodGhpcy5mKGlucHV0KSkge1xuICAgICAgdGhpcy5mb3VuZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBfcmVkdWNlZCh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGZpbmQoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmluZChmLCB4Zik7IH0pO1xufSkoKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcbnZhciBhcHBlbmQgPSByZXF1aXJlKCcuLi9hcHBlbmQnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEdyb3VwQnkoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgICB0aGlzLmlucHV0cyA9IHt9O1xuICB9XG4gIFhHcm91cEJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEdyb3VwQnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIHRoaXMuaW5wdXRzKSB7XG4gICAgICBpZiAoX2hhcyhrZXksIHRoaXMuaW5wdXRzKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5pbnB1dHNba2V5XSk7XG4gICAgICAgIGlmIChyZXN1bHRbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWEdyb3VwQnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHZhciBrZXkgPSB0aGlzLmYoaW5wdXQpO1xuICAgIHRoaXMuaW5wdXRzW2tleV0gPSB0aGlzLmlucHV0c1trZXldIHx8IFtrZXksIFtdXTtcbiAgICB0aGlzLmlucHV0c1trZXldWzFdID0gYXBwZW5kKGlucHV0LCB0aGlzLmlucHV0c1trZXldWzFdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94Z3JvdXBCeShmLCB4ZikgeyByZXR1cm4gbmV3IFhHcm91cEJ5KGYsIHhmKTsgfSk7XG59KSgpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhNYXAoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuZihpbnB1dCkpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94bWFwKGYsIHhmKSB7IHJldHVybiBuZXcgWE1hcChmLCB4Zik7IH0pO1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYV3JhcChmbikge1xuICAgIHRoaXMuZiA9IGZuO1xuICB9XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdCBub3QgaW1wbGVtZW50ZWQgb24gWFdyYXAnKTtcbiAgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihhY2MpIHsgcmV0dXJuIGFjYzsgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24oYWNjLCB4KSB7XG4gICAgcmV0dXJuIHRoaXMuZihhY2MsIHgpO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBfeHdyYXAoZm4pIHsgcmV0dXJuIG5ldyBYV3JhcChmbik7IH07XG59KCkpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzQXJyYXknKTtcblxuXG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCBpcyBzaW1pbGFyIHRvIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IFR5cGVcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSB4IFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgeGAgaGFzIGEgbnVtZXJpYyBsZW5ndGggcHJvcGVydHkgYW5kIGV4dHJlbWUgaW5kaWNlcyBkZWZpbmVkOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmlzQXJyYXlMaWtlKFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaXNBcnJheUxpa2UodHJ1ZSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5pc0FycmF5TGlrZSh7fSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5pc0FycmF5TGlrZSh7bGVuZ3RoOiAxMH0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNBcnJheUxpa2UoezA6ICd6ZXJvJywgOTogJ25pbmUnLCBsZW5ndGg6IDEwfSk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gaXNBcnJheUxpa2UoeCkge1xuICBpZiAoX2lzQXJyYXkoeCkpIHsgcmV0dXJuIHRydWU7IH1cbiAgaWYgKCF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoeCBpbnN0YW5jZW9mIFN0cmluZykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHgubm9kZVR5cGUgPT09IDEpIHsgcmV0dXJuICEheC5sZW5ndGg7IH1cbiAgaWYgKHgubGVuZ3RoID09PSAwKSB7IHJldHVybiB0cnVlOyB9XG4gIGlmICh4Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4geC5oYXNPd25Qcm9wZXJ0eSgwKSAmJiB4Lmhhc093blByb3BlcnR5KHgubGVuZ3RoIC0gMSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IGNvbnRhaW5pbmcgdGhlIG5hbWVzIG9mIGFsbCB0aGUgZW51bWVyYWJsZSBvd25cbiAqIHByb3BlcnRpZXMgb2YgdGhlIHN1cHBsaWVkIG9iamVjdC5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZVxuICogY29uc2lzdGVudCBhY3Jvc3MgZGlmZmVyZW50IEpTIHBsYXRmb3Jtcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IFtrXVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGV4dHJhY3QgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIua2V5cyh7YTogMSwgYjogMiwgYzogM30pOyAvLz0+IFsnYScsICdiJywgJ2MnXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgLy8gY292ZXIgSUUgPCA5IGtleXMgaXNzdWVzXG4gIHZhciBoYXNFbnVtQnVnID0gISh7dG9TdHJpbmc6IG51bGx9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsnY29uc3RydWN0b3InLCAndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICB2YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhsaXN0LCBpdGVtKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICBpZiAobGlzdFtpZHhdID09PSBpdGVtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nID9cbiAgICBfY3VycnkxKGZ1bmN0aW9uIGtleXMob2JqKSB7XG4gICAgICByZXR1cm4gT2JqZWN0KG9iaikgIT09IG9iaiA/IFtdIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICB9KSA6XG4gICAgX2N1cnJ5MShmdW5jdGlvbiBrZXlzKG9iaikge1xuICAgICAgaWYgKE9iamVjdChvYmopICE9PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgdmFyIHByb3AsIGtzID0gW10sIG5JZHg7XG4gICAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICAgIGlmIChfaGFzKHByb3AsIG9iaikpIHtcbiAgICAgICAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc0VudW1CdWcpIHtcbiAgICAgICAgbklkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAobklkeCA+PSAwKSB7XG4gICAgICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tuSWR4XTtcbiAgICAgICAgICBpZiAoX2hhcyhwcm9wLCBvYmopICYmICFjb250YWlucyhrcywgcHJvcCkpIHtcbiAgICAgICAgICAgIGtzW2tzLmxlbmd0aF0gPSBwcm9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuSWR4IC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBrcztcbiAgICB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfbWFwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fbWFwJyk7XG52YXIgX3htYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL194bWFwJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QsIGNvbnN0cnVjdGVkIGJ5IGFwcGx5aW5nIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB0byBldmVyeSBlbGVtZW50IG9mIHRoZVxuICogc3VwcGxpZWQgbGlzdC5cbiAqXG4gKiBOb3RlOiBgUi5tYXBgIGRvZXMgbm90IHNraXAgZGVsZXRlZCBvciB1bmFzc2lnbmVkIGluZGljZXMgKHNwYXJzZSBhcnJheXMpLCB1bmxpa2UgdGhlXG4gKiBuYXRpdmUgYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZC4gRm9yIG1vcmUgZGV0YWlscyBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXAjRGVzY3JpcHRpb25cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBiKSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGlucHV0IGBsaXN0YC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gYmUgaXRlcmF0ZWQgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGxpc3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRvdWJsZSA9IGZ1bmN0aW9uKHgpIHtcbiAqICAgICAgICByZXR1cm4geCAqIDI7XG4gKiAgICAgIH07XG4gKlxuICogICAgICBSLm1hcChkb3VibGUsIFsxLCAyLCAzXSk7IC8vPT4gWzIsIDQsIDZdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKCdtYXAnLCBfeG1hcCwgX21hcCkpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IgPSByZXF1aXJlKCcuL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcicpO1xudmFyIGN1cnJ5ID0gcmVxdWlyZSgnLi9jdXJyeScpO1xuXG5cbi8qKlxuICogQWNjZXB0cyBhcyBpdHMgYXJndW1lbnRzIGEgZnVuY3Rpb24gYW5kIGFueSBudW1iZXIgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCxcbiAqIHdoZW4gaW52b2tlZCwgY2FsbHMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggYWxsIG9mIHRoZSB2YWx1ZXMgcHJlcGVuZGVkIHRvIHRoZVxuICogb3JpZ2luYWwgZnVuY3Rpb24ncyBhcmd1bWVudHMgbGlzdC4gSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgYXBwbHlMZWZ0YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiBiIC0+IC4uLiAtPiBpIC0+IGogLT4gLi4uIC0+IG0gLT4gbikgLT4gYSAtPiBiLT4gLi4uIC0+IGkgLT4gKGogLT4gLi4uIC0+IG0gLT4gbilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0gey4uLip9IFthcmdzXSBBcmd1bWVudHMgdG8gcHJlcGVuZCB0byBgZm5gIHdoZW4gdGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIGludm9rZWQuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gV2hlbiBpbnZva2VkLCBpdCB3aWxsIGNhbGwgYGZuYFxuICogICAgICAgICB3aXRoIGBhcmdzYCBwcmVwZW5kZWQgdG8gYGZuYCdzIGFyZ3VtZW50cyBsaXN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgKiBiOyB9O1xuICogICAgICB2YXIgZG91YmxlID0gUi5wYXJ0aWFsKG11bHRpcGx5LCAyKTtcbiAqICAgICAgZG91YmxlKDIpOyAvLz0+IDRcbiAqXG4gKiAgICAgIHZhciBncmVldCA9IGZ1bmN0aW9uKHNhbHV0YXRpb24sIHRpdGxlLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG4gKiAgICAgICAgcmV0dXJuIHNhbHV0YXRpb24gKyAnLCAnICsgdGl0bGUgKyAnICcgKyBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSArICchJztcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIHNheUhlbGxvID0gUi5wYXJ0aWFsKGdyZWV0LCAnSGVsbG8nKTtcbiAqICAgICAgdmFyIHNheUhlbGxvVG9NcyA9IFIucGFydGlhbChzYXlIZWxsbywgJ01zLicpO1xuICogICAgICBzYXlIZWxsb1RvTXMoJ0phbmUnLCAnSm9uZXMnKTsgLy89PiAnSGVsbG8sIE1zLiBKYW5lIEpvbmVzISdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjdXJyeShfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IoX2NvbmNhdCkpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IgPSByZXF1aXJlKCcuL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcicpO1xudmFyIGN1cnJ5ID0gcmVxdWlyZSgnLi9jdXJyeScpO1xudmFyIGZsaXAgPSByZXF1aXJlKCcuL2ZsaXAnKTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYXMgaXRzIGFyZ3VtZW50cyBhIGZ1bmN0aW9uIGFuZCBhbnkgbnVtYmVyIG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQsXG4gKiB3aGVuIGludm9rZWQsIGNhbGxzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIGFwcGVuZGVkIHRvIHRoZSBvcmlnaW5hbFxuICogZnVuY3Rpb24ncyBhcmd1bWVudHMgbGlzdC5cbiAqXG4gKiBOb3RlIHRoYXQgYHBhcnRpYWxSaWdodGAgaXMgdGhlIG9wcG9zaXRlIG9mIGBwYXJ0aWFsYDogYHBhcnRpYWxSaWdodGAgZmlsbHMgYGZuYCdzIGFyZ3VtZW50c1xuICogZnJvbSB0aGUgcmlnaHQgdG8gdGhlIGxlZnQuICBJbiBzb21lIGxpYnJhcmllcyB0aGlzIGZ1bmN0aW9uIGlzIG5hbWVkIGBhcHBseVJpZ2h0YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiBiLT4gLi4uIC0+IGkgLT4gaiAtPiAuLi4gLT4gbSAtPiBuKSAtPiBqIC0+IC4uLiAtPiBtIC0+IG4gLT4gKGEgLT4gYi0+IC4uLiAtPiBpKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Li4uKn0gW2FyZ3NdIEFyZ3VtZW50cyB0byBhcHBlbmQgdG8gYGZuYCB3aGVuIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyBpbnZva2VkLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHdyYXBwaW5nIGBmbmAuIFdoZW4gaW52b2tlZCwgaXQgd2lsbCBjYWxsIGBmbmAgd2l0aFxuICogICAgICAgICBgYXJnc2AgYXBwZW5kZWQgdG8gYGZuYCdzIGFyZ3VtZW50cyBsaXN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBncmVldCA9IGZ1bmN0aW9uKHNhbHV0YXRpb24sIHRpdGxlLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG4gKiAgICAgICAgcmV0dXJuIHNhbHV0YXRpb24gKyAnLCAnICsgdGl0bGUgKyAnICcgKyBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSArICchJztcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIGdyZWV0TXNKYW5lSm9uZXMgPSBSLnBhcnRpYWxSaWdodChncmVldCwgJ01zLicsICdKYW5lJywgJ0pvbmVzJyk7XG4gKlxuICogICAgICBncmVldE1zSmFuZUpvbmVzKCdIZWxsbycpOyAvLz0+ICdIZWxsbywgTXMuIEphbmUgSm9uZXMhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnJ5KF9jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcihmbGlwKF9jb25jYXQpKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHBhcnRpYWwgY29weSBvZiBhbiBvYmplY3QgY29udGFpbmluZyBvbmx5IHRoZSBrZXlzIHNwZWNpZmllZC4gIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZVxuICogcHJvcGVydHkgaXMgaWdub3JlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgW2tdIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7QXJyYXl9IG5hbWVzIGFuIGFycmF5IG9mIFN0cmluZyBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5IG9udG8gYSBuZXcgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY29weSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIG9ubHkgcHJvcGVydGllcyBmcm9tIGBuYW1lc2Agb24gaXQuXG4gKiBAc2VlIFIub21pdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGljayhbJ2EnLCAnZCddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxLCBkOiA0fVxuICogICAgICBSLnBpY2soWydhJywgJ2UnLCAnZiddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGljayhuYW1lcywgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICBpZiAobmFtZXNbaWR4XSBpbiBvYmopIHtcbiAgICAgIHJlc3VsdFtuYW1lc1tpZHhdXSA9IG9ialtuYW1lc1tpZHhdXTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBwYXJ0aWFsIGNvcHkgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aGUga2V5cyB0aGF0XG4gKiBzYXRpc2Z5IHRoZSBzdXBwbGllZCBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnICh2LCBrIC0+IEJvb2xlYW4pIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGEga2V5XG4gKiAgICAgICAgc2hvdWxkIGJlIGluY2x1ZGVkIG9uIHRoZSBvdXRwdXQgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHByb3BlcnRpZXMgdGhhdCBzYXRpc2Z5IGBwcmVkYFxuICogICAgICAgICBvbiBpdC5cbiAqIEBzZWUgUi5waWNrXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzVXBwZXJDYXNlID0gZnVuY3Rpb24odmFsLCBrZXkpIHsgcmV0dXJuIGtleS50b1VwcGVyQ2FzZSgpID09PSBrZXk7IH1cbiAqICAgICAgUi5waWNrQnkoaXNVcHBlckNhc2UsIHthOiAxLCBiOiAyLCBBOiAzLCBCOiA0fSk7IC8vPT4ge0E6IDMsIEI6IDR9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwaWNrQnkodGVzdCwgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAodGVzdChvYmpbcHJvcF0sIHByb3AsIG9iaikpIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdoZW4gc3VwcGxpZWQgYW4gb2JqZWN0IHJldHVybnMgdGhlIGluZGljYXRlZCBwcm9wZXJ0eSBvZiB0aGF0IG9iamVjdCwgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBzIC0+IHtzOiBhfSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gcCBUaGUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHF1ZXJ5XG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgYXQgYG9iai5wYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3AoJ3gnLCB7eDogMTAwfSk7IC8vPT4gMTAwXG4gKiAgICAgIFIucHJvcCgneCcsIHt9KTsgLy89PiB1bmRlZmluZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHByb3AocCwgb2JqKSB7IHJldHVybiBvYmpbcF07IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEFjdHMgYXMgbXVsdGlwbGUgYHByb3BgOiBhcnJheSBvZiBrZXlzIGluLCBhcnJheSBvZiB2YWx1ZXMgb3V0LiBQcmVzZXJ2ZXMgb3JkZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFtrXSAtPiB7azogdn0gLT4gW3ZdXG4gKiBAcGFyYW0ge0FycmF5fSBwcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gZmV0Y2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBvciBwYXJ0aWFsbHkgYXBwbGllZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3BzKFsneCcsICd5J10sIHt4OiAxLCB5OiAyfSk7IC8vPT4gWzEsIDJdXG4gKiAgICAgIFIucHJvcHMoWydjJywgJ2EnLCAnYiddLCB7YjogMiwgYTogMX0pOyAvLz0+IFt1bmRlZmluZWQsIDEsIDJdXG4gKlxuICogICAgICB2YXIgZnVsbE5hbWUgPSBSLmNvbXBvc2UoUi5qb2luKCcgJyksIFIucHJvcHMoWydmaXJzdCcsICdsYXN0J10pKTtcbiAqICAgICAgZnVsbE5hbWUoe2xhc3Q6ICdCdWxsZXQtVG9vdGgnLCBhZ2U6IDMzLCBmaXJzdDogJ1RvbnknfSk7IC8vPT4gJ1RvbnkgQnVsbGV0LVRvb3RoJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcHJvcHMocHMsIG9iaikge1xuICB2YXIgbGVuID0gcHMubGVuZ3RoO1xuICB2YXIgb3V0ID0gW107XG4gIHZhciBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBvdXRbaWR4XSA9IG9ialtwc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDYWxscyBhbiBpbnB1dCBmdW5jdGlvbiBgbmAgdGltZXMsIHJldHVybmluZyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRob3NlXG4gKiBmdW5jdGlvbiBjYWxscy5cbiAqXG4gKiBgZm5gIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6IFRoZSBjdXJyZW50IHZhbHVlIG9mIGBuYCwgd2hpY2ggYmVnaW5zIGF0IGAwYCBhbmQgaXNcbiAqIGdyYWR1YWxseSBpbmNyZW1lbnRlZCB0byBgbiAtIDFgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGkgLT4gYSkgLT4gaSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuIFBhc3NlZCBvbmUgYXJndW1lbnQsIHRoZSBjdXJyZW50IHZhbHVlIG9mIGBuYC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIEEgdmFsdWUgYmV0d2VlbiBgMGAgYW5kIGBuIC0gMWAuIEluY3JlbWVudHMgYWZ0ZXIgZWFjaCBmdW5jdGlvbiBjYWxsLlxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJldHVybiB2YWx1ZXMgb2YgYWxsIGNhbGxzIHRvIGBmbmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50aW1lcyhSLmlkZW50aXR5LCA1KTsgLy89PiBbMCwgMSwgMiwgMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHRpbWVzKGZuLCBuKSB7XG4gIHZhciBsZW4gPSBOdW1iZXIobik7XG4gIHZhciBsaXN0ID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgbGlzdFtpZHhdID0gZm4oaWR4KTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIGVudW1lcmFibGUgb3duIHByb3BlcnRpZXMgb2YgdGhlIHN1cHBsaWVkIG9iamVjdC5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCBhY3Jvc3NcbiAqIGRpZmZlcmVudCBKUyBwbGF0Zm9ybXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiB2fSAtPiBbdl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IHZhbHVlcyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdGhlIHZhbHVlcyBvZiB0aGUgb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi52YWx1ZXMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgdmFyIHByb3BzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICB2YXIgdmFscyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHZhbHNbaWR4XSA9IG9ialtwcm9wc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gdmFscztcbn0pO1xuIiwiXG52YXIgcm5nO1xuXG5pZiAoZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICB2YXIgX3JuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhfcm5kczgpO1xuICAgIHJldHVybiBfcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBfcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBfcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG4iLCIvLyAgICAgdXVpZC5qc1xuLy9cbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMiBSb2JlcnQgS2llZmZlclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgV2UgZmVhdHVyZVxuLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbi8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4vcm5nJyk7XG5cbi8vIE1hcHMgZm9yIG51bWJlciA8LT4gaGV4IHN0cmluZyBjb252ZXJzaW9uXG52YXIgX2J5dGVUb0hleCA9IFtdO1xudmFyIF9oZXhUb0J5dGUgPSB7fTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gIF9oZXhUb0J5dGVbX2J5dGVUb0hleFtpXV0gPSBpO1xufVxuXG4vLyAqKmBwYXJzZSgpYCAtIFBhcnNlIGEgVVVJRCBpbnRvIGl0J3MgY29tcG9uZW50IGJ5dGVzKipcbmZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gKGJ1ZiAmJiBvZmZzZXQpIHx8IDAsIGlpID0gMDtcblxuICBidWYgPSBidWYgfHwgW107XG4gIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bMC05YS1mXXsyfS9nLCBmdW5jdGlvbihvY3QpIHtcbiAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcbiAgICAgIGJ1ZltpICsgaWkrK10gPSBfaGV4VG9CeXRlW29jdF07XG4gICAgfVxuICB9KTtcblxuICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuICB3aGlsZSAoaWkgPCAxNikge1xuICAgIGJ1ZltpICsgaWkrK10gPSAwO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gKipgdW5wYXJzZSgpYCAtIENvbnZlcnQgVVVJRCBieXRlIGFycmF5IChhbGEgcGFyc2UoKSkgaW50byBhIHN0cmluZyoqXG5mdW5jdGlvbiB1bnBhcnNlKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IF9ybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgbisrKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IHVucGFyc2UoYik7XG59XG5cbi8vICoqYHY0KClgIC0gR2VuZXJhdGUgcmFuZG9tIFVVSUQqKlxuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAvLyBEZXByZWNhdGVkIC0gJ2Zvcm1hdCcgYXJndW1lbnQsIGFzIHN1cHBvcnRlZCBpbiB2MS4yXG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyBpaSsrKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbn1cblxuLy8gRXhwb3J0IHB1YmxpYyBBUElcbnZhciB1dWlkID0gdjQ7XG51dWlkLnYxID0gdjE7XG51dWlkLnY0ID0gdjQ7XG51dWlkLnBhcnNlID0gcGFyc2U7XG51dWlkLnVucGFyc2UgPSB1bnBhcnNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4iLCIvKiFcclxuKiB2ZG9tLXZpcnR1YWxpemVcclxuKiBDb3B5cmlnaHQgMjAxNCBieSBNYXJjZWwgS2xlaHIgPG1rbGVockBnbXgubmV0PlxyXG4qXHJcbiogKE1JVCBMSUNFTlNFKVxyXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4qXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKlxyXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiogVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG52YXIgVk5vZGUgPSByZXF1aXJlKFwidmlydHVhbC1kb20vdm5vZGUvdm5vZGVcIilcclxuICAsIFZUZXh0ID0gcmVxdWlyZShcInZpcnR1YWwtZG9tL3Zub2RlL3Z0ZXh0XCIpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZOb2RlXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWTm9kZShkb21Ob2RlLCBrZXkpIHtcclxuICBrZXkgPSBrZXkgfHwgbnVsbCAvLyBYWFg6IExlYXZlIG91dCBga2V5YCBmb3Igbm93Li4uIG1lcmVseSB1c2VkIGZvciAocmUtKW9yZGVyaW5nXHJcblxyXG4gIGlmKGRvbU5vZGUubm9kZVR5cGUgPT0gMSkgcmV0dXJuIGNyZWF0ZUZyb21FbGVtZW50KGRvbU5vZGUsIGtleSlcclxuICBpZihkb21Ob2RlLm5vZGVUeXBlID09IDMpIHJldHVybiBjcmVhdGVGcm9tVGV4dE5vZGUoZG9tTm9kZSwga2V5KVxyXG4gIHJldHVyblxyXG59XHJcblxyXG5jcmVhdGVWTm9kZS5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGtleSkge1xyXG4gIHZhciBkb21Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGNyZWF0ZSBjb250YWluZXJcclxuICBkb21Ob2RlLmlubmVySFRNTCA9IGh0bWw7IC8vIGJyb3dzZXIgcGFyc2VzIEhUTUwgaW50byBET00gdHJlZVxyXG4gIHZhciBjaGlsZCA9IGRvbU5vZGUuY2hpbGRyZW4ubGVuZ3RoID8gZG9tTm9kZS5jaGlsZHJlblswXSA6IGRvbU5vZGUuZmlyc3RDaGlsZDtcclxuICByZXR1cm4gY3JlYXRlVk5vZGUoY2hpbGQsIGtleSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGcm9tVGV4dE5vZGUodE5vZGUpIHtcclxuICByZXR1cm4gbmV3IFZUZXh0KHROb2RlLm5vZGVWYWx1ZSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZyb21FbGVtZW50KGVsKSB7XHJcbiAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lXHJcbiAgLCBuYW1lc3BhY2UgPSBlbC5uYW1lc3BhY2VVUkkgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnPyBudWxsIDogZWwubmFtZXNwYWNlVVJJXHJcbiAgLCBwcm9wZXJ0aWVzID0gZ2V0RWxlbWVudFByb3BlcnRpZXMoZWwpXHJcbiAgLCBjaGlsZHJlbiA9IFtdXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2hpbGRyZW4ucHVzaChjcmVhdGVWTm9kZShlbC5jaGlsZE5vZGVzW2ldLyosIGkqLykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFZOb2RlKHRhZ05hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuLCBudWxsLCBuYW1lc3BhY2UpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50UHJvcGVydGllcyhlbCkge1xyXG4gIHZhciBvYmogPSB7fVxyXG5cclxuICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XHJcbiAgICBpZighZWxbcHJvcE5hbWVdKSByZXR1cm5cclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2U6IHN0eWxlXHJcbiAgICAvLyAuc3R5bGUgaXMgYSBET01TdHlsZURlY2xhcmF0aW9uLCB0aHVzIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIGFsbFxyXG4gICAgLy8gcnVsZXMgdG8gY3JlYXRlIGEgaGFzaCBvZiBhcHBsaWVkIGNzcyBwcm9wZXJ0aWVzLlxyXG4gICAgLy9cclxuICAgIC8vIFlvdSBjYW4gZGlyZWN0bHkgc2V0IGEgc3BlY2lmaWMgLnN0eWxlW3Byb3BdID0gdmFsdWUgc28gcGF0Y2hpbmcgd2l0aCB2ZG9tXHJcbiAgICAvLyBpcyBwb3NzaWJsZS5cclxuICAgIGlmKFwic3R5bGVcIiA9PSBwcm9wTmFtZSkge1xyXG4gICAgICB2YXIgY3NzID0ge31cclxuICAgICAgICAsIHN0eWxlUHJvcFxyXG4gICAgICBpZiAoZWwuc3R5bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8ZWwuc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHN0eWxlUHJvcCA9IGVsLnN0eWxlW2ldXHJcbiAgICAgICAgICBjc3Nbc3R5bGVQcm9wXSA9IGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wKSAvLyBYWFg6IGFkZCBzdXBwb3J0IGZvciBcIiFpbXBvcnRhbnRcIiB2aWEgZ2V0UHJvcGVydHlQcmlvcml0eSgpIVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHsgLy8gSUU4XHJcbiAgICAgICAgZm9yICh2YXIgc3R5bGVQcm9wIGluIGVsLnN0eWxlKSB7XHJcbiAgICAgICAgICBpZiAoZWwuc3R5bGVbc3R5bGVQcm9wXSkge1xyXG4gICAgICAgICAgICBjc3Nbc3R5bGVQcm9wXSA9IGVsLnN0eWxlW3N0eWxlUHJvcF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBvYmpbcHJvcE5hbWVdID0gY3NzXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2M4NDg4NjElMjh2PXZzLjg1JTI5LmFzcHhcclxuICAgIC8vIFRoZSBpbWcgZWxlbWVudCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBIUkVGIGNvbnRlbnQgYXR0cmlidXRlLlxyXG4gICAgLy8gSW4gYWRkaXRpb24sIHRoZSBocmVmIHByb3BlcnR5IGlzIHJlYWQtb25seSBmb3IgdGhlIGltZyBEb2N1bWVudCBPYmplY3QgTW9kZWwgKERPTSkgb2JqZWN0XHJcbiAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJyAmJiBwcm9wTmFtZSA9PT0gJ2hyZWYnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGRhdGFzZXRcclxuICAgIC8vIHdlIGNhbiBpdGVyYXRlIG92ZXIgLmRhdGFzZXQgd2l0aCBhIHNpbXBsZSBmb3IuLmluIGxvb3AuXHJcbiAgICAvLyBUaGUgYWxsLXRpbWUgZm9vIHdpdGggZGF0YS0qIGF0dHJpYnMgaXMgdGhlIGRhc2gtc25ha2UgdG8gY2FtZWxDYXNlXHJcbiAgICAvLyBjb252ZXJzaW9uLlxyXG4gICAgLy9cclxuICAgIC8vICpUaGlzIGlzIGNvbXBhdGlibGUgd2l0aCBoKCksIGJ1dCBub3Qgd2l0aCBldmVyeSBicm93c2VyLCB0aHVzIHRoaXMgc2VjdGlvbiB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgLy8gb2YgYXR0cmlidXRlcyAoc3BlY2lmaWVkIGJlbG93KSEqXHJcbiAgICAvL1xyXG4gICAgLy8gLmRhdGFzZXQgcHJvcGVydGllcyBhcmUgZGlyZWN0bHkgYWNjZXNzaWJsZSBhcyB0cmFuc3BhcmVudCBnZXR0ZXJzL3NldHRlcnMsIHNvXHJcbiAgICAvLyBwYXRjaGluZyB3aXRoIHZkb20gaXMgcG9zc2libGUuXHJcbiAgICAvKmlmKFwiZGF0YXNldFwiID09IHByb3BOYW1lKSB7XHJcbiAgICAgIHZhciBkYXRhID0ge31cclxuICAgICAgZm9yKHZhciBwIGluIGVsLmRhdGFzZXQpIHtcclxuICAgICAgICBkYXRhW3BdID0gZWwuZGF0YXNldFtwXVxyXG4gICAgICB9XHJcbiAgICAgIG9ialtwcm9wTmFtZV0gPSBkYXRhXHJcbiAgICAgIHJldHVyblxyXG4gICAgfSovXHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlOiBhdHRyaWJ1dGVzXHJcbiAgICAvLyB0aGVzZSBhcmUgYSBOYW1lZE5vZGVNYXAsIGJ1dCB3ZSBjYW4ganVzdCBjb252ZXJ0IHRoZW0gdG8gYSBoYXNoIGZvciB2ZG9tLFxyXG4gICAgLy8gYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vTWF0dC1Fc2NoL3ZpcnR1YWwtZG9tL2Jsb2IvbWFzdGVyL3Zkb20vYXBwbHktcHJvcGVydGllcy5qcyNMNTdcclxuICAgIGlmKFwiYXR0cmlidXRlc1wiID09IHByb3BOYW1lKXtcclxuICAgICAgdmFyIGF0dHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbFtwcm9wTmFtZV0pO1xyXG4gICAgICB2YXIgaGFzaCA9IGF0dHMucmVkdWNlKGZ1bmN0aW9uKG8sYSl7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYob2JqW25hbWVdKSByZXR1cm4gbztcclxuICAgICAgICBvW25hbWVdID0gZWwuZ2V0QXR0cmlidXRlKGEubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0se30pO1xyXG4gICAgICByZXR1cm4gb2JqW3Byb3BOYW1lXSA9IGhhc2g7XHJcbiAgICB9XHJcbiAgICBpZihcInRhYkluZGV4XCIgPT0gcHJvcE5hbWUgJiYgZWwudGFiSW5kZXggPT09IC0xKSByZXR1cm5cclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGNvbnRlbnRFZGl0YWJsZVxyXG4gICAgLy8gYnJvd3NlciB1c2UgJ2luaGVyaXQnIGJ5IGRlZmF1bHQgb24gYWxsIG5vZGVzLCBidXQgZG9lcyBub3QgYWxsb3cgc2V0dGluZyBpdCB0byAnJ1xyXG4gICAgLy8gZGlmZmluZyB2aXJ0dWFsaXplIGRvbSB3aWxsIHRyaWdnZXIgZXJyb3JcclxuICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL01hdHQtRXNjaC92aXJ0dWFsLWRvbS9pc3N1ZXMvMTc2XHJcbiAgICBpZihcImNvbnRlbnRFZGl0YWJsZVwiID09IHByb3BOYW1lICYmIGVsW3Byb3BOYW1lXSA9PT0gJ2luaGVyaXQnKSByZXR1cm5cclxuXHJcbiAgICBpZignb2JqZWN0JyA9PT0gdHlwZW9mIGVsW3Byb3BOYW1lXSkgcmV0dXJuXHJcblxyXG4gICAgLy8gZGVmYXVsdDoganVzdCBjb3B5IHRoZSBwcm9wZXJ0eVxyXG4gICAgb2JqW3Byb3BOYW1lXSA9IGVsW3Byb3BOYW1lXVxyXG4gICAgcmV0dXJuXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG4vKipcclxuICogRE9NTm9kZSBwcm9wZXJ0eSB3aGl0ZSBsaXN0XHJcbiAqIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1JheW5vcy9yZWFjdC9ibG9iL2RvbS1wcm9wZXJ0eS1jb25maWcvc3JjL2Jyb3dzZXIvdWkvZG9tL0RlZmF1bHRET01Qcm9wZXJ0eUNvbmZpZy5qc1xyXG4gKi9cclxudmFyIHByb3BzID1cclxuXHJcbm1vZHVsZS5leHBvcnRzLnByb3BlcnRpZXMgPSBbXHJcbiBcImFjY2VwdFwiXHJcbixcImFjY2Vzc0tleVwiXHJcbixcImFjdGlvblwiXHJcbixcImFsdFwiXHJcbixcImFzeW5jXCJcclxuLFwiYXV0b0NvbXBsZXRlXCJcclxuLFwiYXV0b1BsYXlcIlxyXG4sXCJjZWxsUGFkZGluZ1wiXHJcbixcImNlbGxTcGFjaW5nXCJcclxuLFwiY2hlY2tlZFwiXHJcbixcImNsYXNzTmFtZVwiXHJcbixcImNvbFNwYW5cIlxyXG4sXCJjb250ZW50XCJcclxuLFwiY29udGVudEVkaXRhYmxlXCJcclxuLFwiY29udHJvbHNcIlxyXG4sXCJjcm9zc09yaWdpblwiXHJcbixcImRhdGFcIlxyXG4vLyxcImRhdGFzZXRcIiByZW1vdmVkIHNpbmNlIGF0dHJpYnV0ZXMgaGFuZGxlcyBkYXRhLWF0dHJpYnV0ZXNcclxuLFwiZGVmZXJcIlxyXG4sXCJkaXJcIlxyXG4sXCJkb3dubG9hZFwiXHJcbixcImRyYWdnYWJsZVwiXHJcbixcImVuY1R5cGVcIlxyXG4sXCJmb3JtTm9WYWxpZGF0ZVwiXHJcbixcImhyZWZcIlxyXG4sXCJocmVmTGFuZ1wiXHJcbixcImh0bWxGb3JcIlxyXG4sXCJodHRwRXF1aXZcIlxyXG4sXCJpY29uXCJcclxuLFwiaWRcIlxyXG4sXCJsYWJlbFwiXHJcbixcImxhbmdcIlxyXG4sXCJsaXN0XCJcclxuLFwibG9vcFwiXHJcbixcIm1heFwiXHJcbixcIm1lZGlhR3JvdXBcIlxyXG4sXCJtZXRob2RcIlxyXG4sXCJtaW5cIlxyXG4sXCJtdWx0aXBsZVwiXHJcbixcIm11dGVkXCJcclxuLFwibmFtZVwiXHJcbixcIm5vVmFsaWRhdGVcIlxyXG4sXCJwYXR0ZXJuXCJcclxuLFwicGxhY2Vob2xkZXJcIlxyXG4sXCJwb3N0ZXJcIlxyXG4sXCJwcmVsb2FkXCJcclxuLFwicmFkaW9Hcm91cFwiXHJcbixcInJlYWRPbmx5XCJcclxuLFwicmVsXCJcclxuLFwicmVxdWlyZWRcIlxyXG4sXCJyb3dTcGFuXCJcclxuLFwic2FuZGJveFwiXHJcbixcInNjb3BlXCJcclxuLFwic2Nyb2xsTGVmdFwiXHJcbixcInNjcm9sbGluZ1wiXHJcbixcInNjcm9sbFRvcFwiXHJcbixcInNlbGVjdGVkXCJcclxuLFwic3BhblwiXHJcbixcInNwZWxsQ2hlY2tcIlxyXG4sXCJzcmNcIlxyXG4sXCJzcmNEb2NcIlxyXG4sXCJzcmNTZXRcIlxyXG4sXCJzdGFydFwiXHJcbixcInN0ZXBcIlxyXG4sXCJzdHlsZVwiXHJcbixcInRhYkluZGV4XCJcclxuLFwidGFyZ2V0XCJcclxuLFwidGl0bGVcIlxyXG4sXCJ0eXBlXCJcclxuLFwidmFsdWVcIlxyXG5cclxuLy8gTm9uLXN0YW5kYXJkIFByb3BlcnRpZXNcclxuLFwiYXV0b0NhcGl0YWxpemVcIlxyXG4sXCJhdXRvQ29ycmVjdFwiXHJcbixcInByb3BlcnR5XCJcclxuXHJcbiwgXCJhdHRyaWJ1dGVzXCJcclxuXVxyXG5cclxudmFyIGF0dHJzID1cclxubW9kdWxlLmV4cG9ydHMuYXR0cnMgPSBbXHJcbiBcImFsbG93RnVsbFNjcmVlblwiXHJcbixcImFsbG93VHJhbnNwYXJlbmN5XCJcclxuLFwiY2hhclNldFwiXHJcbixcImNvbHNcIlxyXG4sXCJjb250ZXh0TWVudVwiXHJcbixcImRhdGVUaW1lXCJcclxuLFwiZGlzYWJsZWRcIlxyXG4sXCJmb3JtXCJcclxuLFwiZnJhbWVCb3JkZXJcIlxyXG4sXCJoZWlnaHRcIlxyXG4sXCJoaWRkZW5cIlxyXG4sXCJtYXhMZW5ndGhcIlxyXG4sXCJyb2xlXCJcclxuLFwicm93c1wiXHJcbixcInNlYW1sZXNzXCJcclxuLFwic2l6ZVwiXHJcbixcIndpZHRoXCJcclxuLFwid21vZGVcIlxyXG5cclxuLy8gU1ZHIFByb3BlcnRpZXNcclxuLFwiY3hcIlxyXG4sXCJjeVwiXHJcbixcImRcIlxyXG4sXCJkeFwiXHJcbixcImR5XCJcclxuLFwiZmlsbFwiXHJcbixcImZ4XCJcclxuLFwiZnlcIlxyXG4sXCJncmFkaWVudFRyYW5zZm9ybVwiXHJcbixcImdyYWRpZW50VW5pdHNcIlxyXG4sXCJvZmZzZXRcIlxyXG4sXCJwb2ludHNcIlxyXG4sXCJyXCJcclxuLFwicnhcIlxyXG4sXCJyeVwiXHJcbixcInNwcmVhZE1ldGhvZFwiXHJcbixcInN0b3BDb2xvclwiXHJcbixcInN0b3BPcGFjaXR5XCJcclxuLFwic3Ryb2tlXCJcclxuLFwic3Ryb2tlTGluZWNhcFwiXHJcbixcInN0cm9rZVdpZHRoXCJcclxuLFwidGV4dEFuY2hvclwiXHJcbixcInRyYW5zZm9ybVwiXHJcbixcInZlcnNpb25cIlxyXG4sXCJ2aWV3Qm94XCJcclxuLFwieDFcIlxyXG4sXCJ4MlwiXHJcbixcInhcIlxyXG4sXCJ5MVwiXHJcbixcInkyXCJcclxuLFwieVwiXHJcbl1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1RodW5rXHJcblxyXG5mdW5jdGlvbiBpc1RodW5rKHQpIHtcclxuICAgIHJldHVybiB0ICYmIHQudHlwZSA9PT0gXCJUaHVua1wiXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0hvb2tcblxuZnVuY3Rpb24gaXNIb29rKGhvb2spIHtcbiAgICByZXR1cm4gaG9vayAmJlxuICAgICAgKHR5cGVvZiBob29rLmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcImhvb2tcIikgfHxcbiAgICAgICB0eXBlb2YgaG9vay51bmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcInVuaG9va1wiKSlcbn1cbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmlydHVhbE5vZGVcblxuZnVuY3Rpb24gaXNWaXJ0dWFsTm9kZSh4KSB7XG4gICAgcmV0dXJuIHggJiYgeC50eXBlID09PSBcIlZpcnR1YWxOb2RlXCIgJiYgeC52ZXJzaW9uID09PSB2ZXJzaW9uXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzV2lkZ2V0XG5cbmZ1bmN0aW9uIGlzV2lkZ2V0KHcpIHtcbiAgICByZXR1cm4gdyAmJiB3LnR5cGUgPT09IFwiV2lkZ2V0XCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIyXCJcbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxudmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi9pcy12bm9kZVwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4vaXMtd2lkZ2V0XCIpXG52YXIgaXNUaHVuayA9IHJlcXVpcmUoXCIuL2lzLXRodW5rXCIpXG52YXIgaXNWSG9vayA9IHJlcXVpcmUoXCIuL2lzLXZob29rXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbE5vZGVcblxudmFyIG5vUHJvcGVydGllcyA9IHt9XG52YXIgbm9DaGlsZHJlbiA9IFtdXG5cbmZ1bmN0aW9uIFZpcnR1YWxOb2RlKHRhZ05hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuLCBrZXksIG5hbWVzcGFjZSkge1xuICAgIHRoaXMudGFnTmFtZSA9IHRhZ05hbWVcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IG5vUHJvcGVydGllc1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBub0NoaWxkcmVuXG4gICAgdGhpcy5rZXkgPSBrZXkgIT0gbnVsbCA/IFN0cmluZyhrZXkpIDogdW5kZWZpbmVkXG4gICAgdGhpcy5uYW1lc3BhY2UgPSAodHlwZW9mIG5hbWVzcGFjZSA9PT0gXCJzdHJpbmdcIikgPyBuYW1lc3BhY2UgOiBudWxsXG5cbiAgICB2YXIgY291bnQgPSAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB8fCAwXG4gICAgdmFyIGRlc2NlbmRhbnRzID0gMFxuICAgIHZhciBoYXNXaWRnZXRzID0gZmFsc2VcbiAgICB2YXIgaGFzVGh1bmtzID0gZmFsc2VcbiAgICB2YXIgZGVzY2VuZGFudEhvb2tzID0gZmFsc2VcbiAgICB2YXIgaG9va3NcblxuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW3Byb3BOYW1lXVxuICAgICAgICAgICAgaWYgKGlzVkhvb2socHJvcGVydHkpICYmIHByb3BlcnR5LnVuaG9vaykge1xuICAgICAgICAgICAgICAgIGlmICghaG9va3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MgPSB7fVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhvb2tzW3Byb3BOYW1lXSA9IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICBkZXNjZW5kYW50cyArPSBjaGlsZC5jb3VudCB8fCAwXG5cbiAgICAgICAgICAgIGlmICghaGFzV2lkZ2V0cyAmJiBjaGlsZC5oYXNXaWRnZXRzKSB7XG4gICAgICAgICAgICAgICAgaGFzV2lkZ2V0cyA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNUaHVua3MgJiYgY2hpbGQuaGFzVGh1bmtzKSB7XG4gICAgICAgICAgICAgICAgaGFzVGh1bmtzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWRlc2NlbmRhbnRIb29rcyAmJiAoY2hpbGQuaG9va3MgfHwgY2hpbGQuZGVzY2VuZGFudEhvb2tzKSkge1xuICAgICAgICAgICAgICAgIGRlc2NlbmRhbnRIb29rcyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzV2lkZ2V0cyAmJiBpc1dpZGdldChjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQuZGVzdHJveSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFzV2lkZ2V0cyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzVGh1bmtzICYmIGlzVGh1bmsoY2hpbGQpKSB7XG4gICAgICAgICAgICBoYXNUaHVua3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IGNvdW50ICsgZGVzY2VuZGFudHNcbiAgICB0aGlzLmhhc1dpZGdldHMgPSBoYXNXaWRnZXRzXG4gICAgdGhpcy5oYXNUaHVua3MgPSBoYXNUaHVua3NcbiAgICB0aGlzLmhvb2tzID0gaG9va3NcbiAgICB0aGlzLmRlc2NlbmRhbnRIb29rcyA9IGRlc2NlbmRhbnRIb29rc1xufVxuXG5WaXJ0dWFsTm9kZS5wcm90b3R5cGUudmVyc2lvbiA9IHZlcnNpb25cblZpcnR1YWxOb2RlLnByb3RvdHlwZS50eXBlID0gXCJWaXJ0dWFsTm9kZVwiXG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsVGV4dFxuXG5mdW5jdGlvbiBWaXJ0dWFsVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gU3RyaW5nKHRleHQpXG59XG5cblZpcnR1YWxUZXh0LnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvblxuVmlydHVhbFRleHQucHJvdG90eXBlLnR5cGUgPSBcIlZpcnR1YWxUZXh0XCJcbiIsInZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZShcIi4vdmRvbS9jcmVhdGUtZWxlbWVudC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnRcbiIsInZhciBkaWZmID0gcmVxdWlyZShcIi4vdnRyZWUvZGlmZi5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbiIsIi8qIVxuICogQ3Jvc3MtQnJvd3NlciBTcGxpdCAxLjEuMVxuICogQ29weXJpZ2h0IDIwMDctMjAxMiBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT5cbiAqIEF2YWlsYWJsZSB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIEVDTUFTY3JpcHQgY29tcGxpYW50LCB1bmlmb3JtIGNyb3NzLWJyb3dzZXIgc3BsaXQgbWV0aG9kXG4gKi9cblxuLyoqXG4gKiBTcGxpdHMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzIHVzaW5nIGEgcmVnZXggb3Igc3RyaW5nIHNlcGFyYXRvci4gTWF0Y2hlcyBvZiB0aGVcbiAqIHNlcGFyYXRvciBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSByZXN1bHQgYXJyYXkuIEhvd2V2ZXIsIGlmIGBzZXBhcmF0b3JgIGlzIGEgcmVnZXggdGhhdCBjb250YWluc1xuICogY2FwdHVyaW5nIGdyb3VwcywgYmFja3JlZmVyZW5jZXMgYXJlIHNwbGljZWQgaW50byB0aGUgcmVzdWx0IGVhY2ggdGltZSBgc2VwYXJhdG9yYCBpcyBtYXRjaGVkLlxuICogRml4ZXMgYnJvd3NlciBidWdzIGNvbXBhcmVkIHRvIHRoZSBuYXRpdmUgYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIGFuZCBjYW4gYmUgdXNlZCByZWxpYWJseVxuICogY3Jvc3MtYnJvd3Nlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIHNwbGl0LlxuICogQHBhcmFtIHtSZWdFeHB8U3RyaW5nfSBzZXBhcmF0b3IgUmVnZXggb3Igc3RyaW5nIHRvIHVzZSBmb3Igc2VwYXJhdGluZyB0aGUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtsaW1pdF0gTWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gaW5jbHVkZSBpbiB0aGUgcmVzdWx0IGFycmF5LlxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBzdWJzdHJpbmdzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBCYXNpYyB1c2VcbiAqIHNwbGl0KCdhIGIgYyBkJywgJyAnKTtcbiAqIC8vIC0+IFsnYScsICdiJywgJ2MnLCAnZCddXG4gKlxuICogLy8gV2l0aCBsaW1pdFxuICogc3BsaXQoJ2EgYiBjIGQnLCAnICcsIDIpO1xuICogLy8gLT4gWydhJywgJ2InXVxuICpcbiAqIC8vIEJhY2tyZWZlcmVuY2VzIGluIHJlc3VsdCBhcnJheVxuICogc3BsaXQoJy4ud29yZDEgd29yZDIuLicsIC8oW2Etel0rKShcXGQrKS9pKTtcbiAqIC8vIC0+IFsnLi4nLCAnd29yZCcsICcxJywgJyAnLCAnd29yZCcsICcyJywgJy4uJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gc3BsaXQodW5kZWYpIHtcblxuICB2YXIgbmF0aXZlU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LFxuICAgIGNvbXBsaWFudEV4ZWNOcGNnID0gLygpPz8vLmV4ZWMoXCJcIilbMV0gPT09IHVuZGVmLFxuICAgIC8vIE5QQ0c6IG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgc2VsZjtcblxuICBzZWxmID0gZnVuY3Rpb24oc3RyLCBzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBgbmF0aXZlU3BsaXRgXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzZXBhcmF0b3IpICE9PSBcIltvYmplY3QgUmVnRXhwXVwiKSB7XG4gICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHIsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gW10sXG4gICAgICBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/IFwiaVwiIDogXCJcIikgKyAoc2VwYXJhdG9yLm11bHRpbGluZSA/IFwibVwiIDogXCJcIikgKyAoc2VwYXJhdG9yLmV4dGVuZGVkID8gXCJ4XCIgOiBcIlwiKSArIC8vIFByb3Bvc2VkIGZvciBFUzZcbiAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gXCJ5XCIgOiBcIlwiKSxcbiAgICAgIC8vIEZpcmVmb3ggMytcbiAgICAgIGxhc3RMYXN0SW5kZXggPSAwLFxuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHNlcGFyYXRvciA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyBcImdcIiksXG4gICAgICBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgIHN0ciArPSBcIlwiOyAvLyBUeXBlLWNvbnZlcnRcbiAgICBpZiAoIWNvbXBsaWFudEV4ZWNOcGNnKSB7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKFwiXlwiICsgc2VwYXJhdG9yLnNvdXJjZSArIFwiJCg/IVxcXFxzKVwiLCBmbGFncyk7XG4gICAgfVxuICAgIC8qIFZhbHVlcyBmb3IgYGxpbWl0YCwgcGVyIHRoZSBzcGVjOlxuICAgICAqIElmIHVuZGVmaW5lZDogNDI5NDk2NzI5NSAvLyBNYXRoLnBvdygyLCAzMikgLSAxXG4gICAgICogSWYgMCwgSW5maW5pdHksIG9yIE5hTjogMFxuICAgICAqIElmIHBvc2l0aXZlIG51bWJlcjogbGltaXQgPSBNYXRoLmZsb29yKGxpbWl0KTsgaWYgKGxpbWl0ID4gNDI5NDk2NzI5NSkgbGltaXQgLT0gNDI5NDk2NzI5NjtcbiAgICAgKiBJZiBuZWdhdGl2ZSBudW1iZXI6IDQyOTQ5NjcyOTYgLSBNYXRoLmZsb29yKE1hdGguYWJzKGxpbWl0KSlcbiAgICAgKiBJZiBvdGhlcjogVHlwZS1jb252ZXJ0LCB0aGVuIHVzZSB0aGUgYWJvdmUgcnVsZXNcbiAgICAgKi9cbiAgICBsaW1pdCA9IGxpbWl0ID09PSB1bmRlZiA/IC0xID4+PiAwIDogLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgIGxpbWl0ID4+PiAwOyAvLyBUb1VpbnQzMihsaW1pdClcbiAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3IuZXhlYyhzdHIpKSB7XG4gICAgICAvLyBgc2VwYXJhdG9yLmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goc3RyLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvclxuICAgICAgICAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cHNcbiAgICAgICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZyAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZikge1xuICAgICAgICAgICAgICAgIG1hdGNoW2ldID0gdW5kZWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VwYXJhdG9yLmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHtcbiAgICAgICAgc2VwYXJhdG9yLmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yLnRlc3QoXCJcIikpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKHN0ci5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gbGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgbGltaXQpIDogb3V0cHV0O1xuICB9O1xuXG4gIHJldHVybiBzZWxmO1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLypnbG9iYWwgd2luZG93LCBnbG9iYWwqL1xuXG52YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID9cbiAgICB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/XG4gICAgZ2xvYmFsIDoge307XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kaXZpZHVhbDtcblxuZnVuY3Rpb24gSW5kaXZpZHVhbChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiByb290KSB7XG4gICAgICAgIHJldHVybiByb290W2tleV07XG4gICAgfVxuXG4gICAgcm9vdFtrZXldID0gdmFsdWU7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG4iLCJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIHZhciBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J107XG5cbiAgICBpZiAoIWRvY2N5KSB7XG4gICAgICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXSA9IG1pbkRvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuXHRyZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgeCAhPT0gbnVsbDtcbn07XG4iLCJ2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXlcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVJc0FycmF5IHx8IGlzQXJyYXlcblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcbn1cbiIsInZhciBwYXRjaCA9IHJlcXVpcmUoXCIuL3Zkb20vcGF0Y2guanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcImlzLW9iamVjdFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9vay5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5UHJvcGVydGllc1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMobm9kZSwgcHJvcHMsIHByZXZpb3VzKSB7XG4gICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSwgcHJldmlvdXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSG9vayhwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICByZW1vdmVQcm9wZXJ0eShub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlLCBwcmV2aW91cylcbiAgICAgICAgICAgIGlmIChwcm9wVmFsdWUuaG9vaykge1xuICAgICAgICAgICAgICAgIHByb3BWYWx1ZS5ob29rKG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyA/IHByZXZpb3VzW3Byb3BOYW1lXSA6IHVuZGVmaW5lZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hPYmplY3Qobm9kZSwgcHJvcHMsIHByZXZpb3VzLCBwcm9wTmFtZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSwgcHJldmlvdXMpIHtcbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1twcm9wTmFtZV1cblxuICAgICAgICBpZiAoIWlzSG9vayhwcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHByb3BOYW1lID09PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbaV0gPSBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJldmlvdXNWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIG5vZGVbcHJvcE5hbWVdID0gXCJcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c1ZhbHVlLnVuaG9vaykge1xuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZS51bmhvb2sobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGF0Y2hPYmplY3Qobm9kZSwgcHJvcHMsIHByZXZpb3VzLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyA/IHByZXZpb3VzW3Byb3BOYW1lXSA6IHVuZGVmaW5lZFxuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBpZiAocHJvcE5hbWUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGF0dHJWYWx1ZSA9IHByb3BWYWx1ZVthdHRyTmFtZV1cblxuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZihwcmV2aW91c1ZhbHVlICYmIGlzT2JqZWN0KHByZXZpb3VzVmFsdWUpICYmXG4gICAgICAgIGdldFByb3RvdHlwZShwcmV2aW91c1ZhbHVlKSAhPT0gZ2V0UHJvdG90eXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdChub2RlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSB7fVxuICAgIH1cblxuICAgIHZhciByZXBsYWNlciA9IHByb3BOYW1lID09PSBcInN0eWxlXCIgPyBcIlwiIDogdW5kZWZpbmVkXG5cbiAgICBmb3IgKHZhciBrIGluIHByb3BWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wVmFsdWVba11cbiAgICAgICAgbm9kZVtwcm9wTmFtZV1ba10gPSAodmFsdWUgPT09IHVuZGVmaW5lZCkgPyByZXBsYWNlciA6IHZhbHVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5fX3Byb3RvX18pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLl9fcHJvdG9fX1xuICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgIH1cbn1cbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcblxudmFyIGFwcGx5UHJvcGVydGllcyA9IHJlcXVpcmUoXCIuL2FwcGx5LXByb3BlcnRpZXNcIilcblxudmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdm5vZGUuanNcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZ0ZXh0LmpzXCIpXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtd2lkZ2V0LmpzXCIpXG52YXIgaGFuZGxlVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaGFuZGxlLXRodW5rLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWxlbWVudFxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHZub2RlLCBvcHRzKSB7XG4gICAgdmFyIGRvYyA9IG9wdHMgPyBvcHRzLmRvY3VtZW50IHx8IGRvY3VtZW50IDogZG9jdW1lbnRcbiAgICB2YXIgd2FybiA9IG9wdHMgPyBvcHRzLndhcm4gOiBudWxsXG5cbiAgICB2bm9kZSA9IGhhbmRsZVRodW5rKHZub2RlKS5hXG5cbiAgICBpZiAoaXNXaWRnZXQodm5vZGUpKSB7XG4gICAgICAgIHJldHVybiB2bm9kZS5pbml0KClcbiAgICB9IGVsc2UgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dClcbiAgICB9IGVsc2UgaWYgKCFpc1ZOb2RlKHZub2RlKSkge1xuICAgICAgICBpZiAod2Fybikge1xuICAgICAgICAgICAgd2FybihcIkl0ZW0gaXMgbm90IGEgdmFsaWQgdmlydHVhbCBkb20gbm9kZVwiLCB2bm9kZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHZhciBub2RlID0gKHZub2RlLm5hbWVzcGFjZSA9PT0gbnVsbCkgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudCh2bm9kZS50YWdOYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlModm5vZGUubmFtZXNwYWNlLCB2bm9kZS50YWdOYW1lKVxuXG4gICAgdmFyIHByb3BzID0gdm5vZGUucHJvcGVydGllc1xuICAgIGFwcGx5UHJvcGVydGllcyhub2RlLCBwcm9wcylcblxuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGUgPSBjcmVhdGVFbGVtZW50KGNoaWxkcmVuW2ldLCBvcHRzKVxuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlXG59XG4iLCIvLyBNYXBzIGEgdmlydHVhbCBET00gdHJlZSBvbnRvIGEgcmVhbCBET00gdHJlZSBpbiBhbiBlZmZpY2llbnQgbWFubmVyLlxuLy8gV2UgZG9uJ3Qgd2FudCB0byByZWFkIGFsbCBvZiB0aGUgRE9NIG5vZGVzIGluIHRoZSB0cmVlIHNvIHdlIHVzZVxuLy8gdGhlIGluLW9yZGVyIHRyZWUgaW5kZXhpbmcgdG8gZWxpbWluYXRlIHJlY3Vyc2lvbiBkb3duIGNlcnRhaW4gYnJhbmNoZXMuXG4vLyBXZSBvbmx5IHJlY3Vyc2UgaW50byBhIERPTSBub2RlIGlmIHdlIGtub3cgdGhhdCBpdCBjb250YWlucyBhIGNoaWxkIG9mXG4vLyBpbnRlcmVzdC5cblxudmFyIG5vQ2hpbGQgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluZGV4XG5cbmZ1bmN0aW9uIGRvbUluZGV4KHJvb3ROb2RlLCB0cmVlLCBpbmRpY2VzLCBub2Rlcykge1xuICAgIGlmICghaW5kaWNlcyB8fCBpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VzLnNvcnQoYXNjZW5kaW5nKVxuICAgICAgICByZXR1cm4gcmVjdXJzZShyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMsIDApXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNlKHJvb3ROb2RlLCB0cmVlLCBpbmRpY2VzLCBub2Rlcywgcm9vdEluZGV4KSB7XG4gICAgbm9kZXMgPSBub2RlcyB8fCB7fVxuXG5cbiAgICBpZiAocm9vdE5vZGUpIHtcbiAgICAgICAgaWYgKGluZGV4SW5SYW5nZShpbmRpY2VzLCByb290SW5kZXgsIHJvb3RJbmRleCkpIHtcbiAgICAgICAgICAgIG5vZGVzW3Jvb3RJbmRleF0gPSByb290Tm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZDaGlsZHJlbiA9IHRyZWUuY2hpbGRyZW5cblxuICAgICAgICBpZiAodkNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gcm9vdE5vZGUuY2hpbGROb2Rlc1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb290SW5kZXggKz0gMVxuXG4gICAgICAgICAgICAgICAgdmFyIHZDaGlsZCA9IHZDaGlsZHJlbltpXSB8fCBub0NoaWxkXG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IHJvb3RJbmRleCArICh2Q2hpbGQuY291bnQgfHwgMClcblxuICAgICAgICAgICAgICAgIC8vIHNraXAgcmVjdXJzaW9uIGRvd24gdGhlIHRyZWUgaWYgdGhlcmUgYXJlIG5vIG5vZGVzIGRvd24gaGVyZVxuICAgICAgICAgICAgICAgIGlmIChpbmRleEluUmFuZ2UoaW5kaWNlcywgcm9vdEluZGV4LCBuZXh0SW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGROb2Rlc1tpXSwgdkNoaWxkLCBpbmRpY2VzLCBub2Rlcywgcm9vdEluZGV4KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvb3RJbmRleCA9IG5leHRJbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzXG59XG5cbi8vIEJpbmFyeSBzZWFyY2ggZm9yIGFuIGluZGV4IGluIHRoZSBpbnRlcnZhbCBbbGVmdCwgcmlnaHRdXG5mdW5jdGlvbiBpbmRleEluUmFuZ2UoaW5kaWNlcywgbGVmdCwgcmlnaHQpIHtcbiAgICBpZiAoaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIG1pbkluZGV4ID0gMFxuICAgIHZhciBtYXhJbmRleCA9IGluZGljZXMubGVuZ3RoIC0gMVxuICAgIHZhciBjdXJyZW50SW5kZXhcbiAgICB2YXIgY3VycmVudEl0ZW1cblxuICAgIHdoaWxlIChtaW5JbmRleCA8PSBtYXhJbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoKG1heEluZGV4ICsgbWluSW5kZXgpIC8gMikgPj4gMFxuICAgICAgICBjdXJyZW50SXRlbSA9IGluZGljZXNbY3VycmVudEluZGV4XVxuXG4gICAgICAgIGlmIChtaW5JbmRleCA9PT0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbSA+PSBsZWZ0ICYmIGN1cnJlbnRJdGVtIDw9IHJpZ2h0XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEl0ZW0gPCBsZWZ0KSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGN1cnJlbnRJbmRleCArIDFcbiAgICAgICAgfSBlbHNlICBpZiAoY3VycmVudEl0ZW0gPiByaWdodCkge1xuICAgICAgICAgICAgbWF4SW5kZXggPSBjdXJyZW50SW5kZXggLSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICAgIHJldHVybiBhID4gYiA/IDEgOiAtMVxufVxuIiwidmFyIGFwcGx5UHJvcGVydGllcyA9IHJlcXVpcmUoXCIuL2FwcGx5LXByb3BlcnRpZXNcIilcblxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2guanNcIilcblxudmFyIHVwZGF0ZVdpZGdldCA9IHJlcXVpcmUoXCIuL3VwZGF0ZS13aWRnZXRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseVBhdGNoXG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2godnBhdGNoLCBkb21Ob2RlLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIHR5cGUgPSB2cGF0Y2gudHlwZVxuICAgIHZhciB2Tm9kZSA9IHZwYXRjaC52Tm9kZVxuICAgIHZhciBwYXRjaCA9IHZwYXRjaC5wYXRjaFxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVlBhdGNoLlJFTU9WRTpcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVOb2RlKGRvbU5vZGUsIHZOb2RlKVxuICAgICAgICBjYXNlIFZQYXRjaC5JTlNFUlQ6XG4gICAgICAgICAgICByZXR1cm4gaW5zZXJ0Tm9kZShkb21Ob2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guVlRFWFQ6XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nUGF0Y2goZG9tTm9kZSwgdk5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5XSURHRVQ6XG4gICAgICAgICAgICByZXR1cm4gd2lkZ2V0UGF0Y2goZG9tTm9kZSwgdk5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5WTk9ERTpcbiAgICAgICAgICAgIHJldHVybiB2Tm9kZVBhdGNoKGRvbU5vZGUsIHZOb2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guT1JERVI6XG4gICAgICAgICAgICByZW9yZGVyQ2hpbGRyZW4oZG9tTm9kZSwgcGF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZVxuICAgICAgICBjYXNlIFZQYXRjaC5QUk9QUzpcbiAgICAgICAgICAgIGFwcGx5UHJvcGVydGllcyhkb21Ob2RlLCBwYXRjaCwgdk5vZGUucHJvcGVydGllcylcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlXG4gICAgICAgIGNhc2UgVlBhdGNoLlRIVU5LOlxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VSb290KGRvbU5vZGUsXG4gICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9ucy5wYXRjaChkb21Ob2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucykpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShkb21Ob2RlLCB2Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUpXG4gICAgfVxuXG4gICAgZGVzdHJveVdpZGdldChkb21Ob2RlLCB2Tm9kZSk7XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlKHBhcmVudE5vZGUsIHZOb2RlLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIG5ld05vZGUgPSByZW5kZXJPcHRpb25zLnJlbmRlcih2Tm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBzdHJpbmdQYXRjaChkb21Ob2RlLCBsZWZ0Vk5vZGUsIHZUZXh0LCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChkb21Ob2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIGRvbU5vZGUucmVwbGFjZURhdGEoMCwgZG9tTm9kZS5sZW5ndGgsIHZUZXh0LnRleHQpXG4gICAgICAgIG5ld05vZGUgPSBkb21Ob2RlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcbiAgICAgICAgbmV3Tm9kZSA9IHJlbmRlck9wdGlvbnMucmVuZGVyKHZUZXh0LCByZW5kZXJPcHRpb25zKVxuXG4gICAgICAgIGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZVxufVxuXG5mdW5jdGlvbiB3aWRnZXRQYXRjaChkb21Ob2RlLCBsZWZ0Vk5vZGUsIHdpZGdldCwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciB1cGRhdGluZyA9IHVwZGF0ZVdpZGdldChsZWZ0Vk5vZGUsIHdpZGdldClcbiAgICB2YXIgbmV3Tm9kZVxuXG4gICAgaWYgKHVwZGF0aW5nKSB7XG4gICAgICAgIG5ld05vZGUgPSB3aWRnZXQudXBkYXRlKGxlZnRWTm9kZSwgZG9tTm9kZSkgfHwgZG9tTm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld05vZGUgPSByZW5kZXJPcHRpb25zLnJlbmRlcih3aWRnZXQsIHJlbmRlck9wdGlvbnMpXG4gICAgfVxuXG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSlcbiAgICB9XG5cbiAgICBpZiAoIXVwZGF0aW5nKSB7XG4gICAgICAgIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgbGVmdFZOb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIHZOb2RlUGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB2Tm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG4gICAgdmFyIG5ld05vZGUgPSByZW5kZXJPcHRpb25zLnJlbmRlcih2Tm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgIGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZVxufVxuXG5mdW5jdGlvbiBkZXN0cm95V2lkZ2V0KGRvbU5vZGUsIHcpIHtcbiAgICBpZiAodHlwZW9mIHcuZGVzdHJveSA9PT0gXCJmdW5jdGlvblwiICYmIGlzV2lkZ2V0KHcpKSB7XG4gICAgICAgIHcuZGVzdHJveShkb21Ob2RlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVvcmRlckNoaWxkcmVuKGRvbU5vZGUsIG1vdmVzKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXNcbiAgICB2YXIga2V5TWFwID0ge31cbiAgICB2YXIgbm9kZVxuICAgIHZhciByZW1vdmVcbiAgICB2YXIgaW5zZXJ0XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVzLnJlbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVtb3ZlID0gbW92ZXMucmVtb3Zlc1tpXVxuICAgICAgICBub2RlID0gY2hpbGROb2Rlc1tyZW1vdmUuZnJvbV1cbiAgICAgICAgaWYgKHJlbW92ZS5rZXkpIHtcbiAgICAgICAgICAgIGtleU1hcFtyZW1vdmUua2V5XSA9IG5vZGVcbiAgICAgICAgfVxuICAgICAgICBkb21Ob2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBtb3Zlcy5pbnNlcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGluc2VydCA9IG1vdmVzLmluc2VydHNbal1cbiAgICAgICAgbm9kZSA9IGtleU1hcFtpbnNlcnQua2V5XVxuICAgICAgICAvLyB0aGlzIGlzIHRoZSB3ZWlyZGVzdCBidWcgaSd2ZSBldmVyIHNlZW4gaW4gd2Via2l0XG4gICAgICAgIGRvbU5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGluc2VydC50byA+PSBsZW5ndGgrKyA/IG51bGwgOiBjaGlsZE5vZGVzW2luc2VydC50b10pXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlUm9vdChvbGRSb290LCBuZXdSb290KSB7XG4gICAgaWYgKG9sZFJvb3QgJiYgbmV3Um9vdCAmJiBvbGRSb290ICE9PSBuZXdSb290ICYmIG9sZFJvb3QucGFyZW50Tm9kZSkge1xuICAgICAgICBvbGRSb290LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1Jvb3QsIG9sZFJvb3QpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoXCJ4LWlzLWFycmF5XCIpXG5cbnZhciByZW5kZXIgPSByZXF1aXJlKFwiLi9jcmVhdGUtZWxlbWVudFwiKVxudmFyIGRvbUluZGV4ID0gcmVxdWlyZShcIi4vZG9tLWluZGV4XCIpXG52YXIgcGF0Y2hPcCA9IHJlcXVpcmUoXCIuL3BhdGNoLW9wXCIpXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG5cbmZ1bmN0aW9uIHBhdGNoKHJvb3ROb2RlLCBwYXRjaGVzLCByZW5kZXJPcHRpb25zKSB7XG4gICAgcmVuZGVyT3B0aW9ucyA9IHJlbmRlck9wdGlvbnMgfHwge31cbiAgICByZW5kZXJPcHRpb25zLnBhdGNoID0gcmVuZGVyT3B0aW9ucy5wYXRjaCAmJiByZW5kZXJPcHRpb25zLnBhdGNoICE9PSBwYXRjaFxuICAgICAgICA/IHJlbmRlck9wdGlvbnMucGF0Y2hcbiAgICAgICAgOiBwYXRjaFJlY3Vyc2l2ZVxuICAgIHJlbmRlck9wdGlvbnMucmVuZGVyID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIgfHwgcmVuZGVyXG5cbiAgICByZXR1cm4gcmVuZGVyT3B0aW9ucy5wYXRjaChyb290Tm9kZSwgcGF0Y2hlcywgcmVuZGVyT3B0aW9ucylcbn1cblxuZnVuY3Rpb24gcGF0Y2hSZWN1cnNpdmUocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgaW5kaWNlcyA9IHBhdGNoSW5kaWNlcyhwYXRjaGVzKVxuXG4gICAgaWYgKGluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZVxuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGRvbUluZGV4KHJvb3ROb2RlLCBwYXRjaGVzLmEsIGluZGljZXMpXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSByb290Tm9kZS5vd25lckRvY3VtZW50XG5cbiAgICBpZiAoIXJlbmRlck9wdGlvbnMuZG9jdW1lbnQgJiYgb3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgcmVuZGVyT3B0aW9ucy5kb2N1bWVudCA9IG93bmVyRG9jdW1lbnRcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGVJbmRleCA9IGluZGljZXNbaV1cbiAgICAgICAgcm9vdE5vZGUgPSBhcHBseVBhdGNoKHJvb3ROb2RlLFxuICAgICAgICAgICAgaW5kZXhbbm9kZUluZGV4XSxcbiAgICAgICAgICAgIHBhdGNoZXNbbm9kZUluZGV4XSxcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3ROb2RlXG59XG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2gocm9vdE5vZGUsIGRvbU5vZGUsIHBhdGNoTGlzdCwgcmVuZGVyT3B0aW9ucykge1xuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVcbiAgICB9XG5cbiAgICB2YXIgbmV3Tm9kZVxuXG4gICAgaWYgKGlzQXJyYXkocGF0Y2hMaXN0KSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3Tm9kZSA9IHBhdGNoT3AocGF0Y2hMaXN0W2ldLCBkb21Ob2RlLCByZW5kZXJPcHRpb25zKVxuXG4gICAgICAgICAgICBpZiAoZG9tTm9kZSA9PT0gcm9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICByb290Tm9kZSA9IG5ld05vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld05vZGUgPSBwYXRjaE9wKHBhdGNoTGlzdCwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICBpZiAoZG9tTm9kZSA9PT0gcm9vdE5vZGUpIHtcbiAgICAgICAgICAgIHJvb3ROb2RlID0gbmV3Tm9kZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3ROb2RlXG59XG5cbmZ1bmN0aW9uIHBhdGNoSW5kaWNlcyhwYXRjaGVzKSB7XG4gICAgdmFyIGluZGljZXMgPSBbXVxuXG4gICAgZm9yICh2YXIga2V5IGluIHBhdGNoZXMpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gXCJhXCIpIHtcbiAgICAgICAgICAgIGluZGljZXMucHVzaChOdW1iZXIoa2V5KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpY2VzXG59XG4iLCJ2YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtd2lkZ2V0LmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlV2lkZ2V0XG5cbmZ1bmN0aW9uIHVwZGF0ZVdpZGdldChhLCBiKSB7XG4gICAgaWYgKGlzV2lkZ2V0KGEpICYmIGlzV2lkZ2V0KGIpKSB7XG4gICAgICAgIGlmIChcIm5hbWVcIiBpbiBhICYmIFwibmFtZVwiIGluIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmlkID09PSBiLmlkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbml0ID09PSBiLmluaXRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZTdG9yZSA9IHJlcXVpcmUoJ2V2LXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZIb29rO1xuXG5mdW5jdGlvbiBFdkhvb2sodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRXZIb29rKSkge1xuICAgICAgICByZXR1cm4gbmV3IEV2SG9vayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5Fdkhvb2sucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiAobm9kZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgdmFyIGVzID0gRXZTdG9yZShub2RlKTtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyKDMpO1xuXG4gICAgZXNbcHJvcE5hbWVdID0gdGhpcy52YWx1ZTtcbn07XG5cbkV2SG9vay5wcm90b3R5cGUudW5ob29rID0gZnVuY3Rpb24obm9kZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgdmFyIGVzID0gRXZTdG9yZShub2RlKTtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyKDMpO1xuXG4gICAgZXNbcHJvcE5hbWVdID0gdW5kZWZpbmVkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBTb2Z0U2V0SG9vaztcblxuZnVuY3Rpb24gU29mdFNldEhvb2sodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29mdFNldEhvb2spKSB7XG4gICAgICAgIHJldHVybiBuZXcgU29mdFNldEhvb2sodmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblxuU29mdFNldEhvb2sucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiAobm9kZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgaWYgKG5vZGVbcHJvcGVydHlOYW1lXSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICBub2RlW3Byb3BlcnR5TmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgneC1pcy1hcnJheScpO1xuXG52YXIgVk5vZGUgPSByZXF1aXJlKCcuLi92bm9kZS92bm9kZS5qcycpO1xudmFyIFZUZXh0ID0gcmVxdWlyZSgnLi4vdm5vZGUvdnRleHQuanMnKTtcbnZhciBpc1ZOb2RlID0gcmVxdWlyZSgnLi4vdm5vZGUvaXMtdm5vZGUnKTtcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZSgnLi4vdm5vZGUvaXMtdnRleHQnKTtcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoJy4uL3Zub2RlL2lzLXdpZGdldCcpO1xudmFyIGlzSG9vayA9IHJlcXVpcmUoJy4uL3Zub2RlL2lzLXZob29rJyk7XG52YXIgaXNWVGh1bmsgPSByZXF1aXJlKCcuLi92bm9kZS9pcy10aHVuaycpO1xuXG52YXIgcGFyc2VUYWcgPSByZXF1aXJlKCcuL3BhcnNlLXRhZy5qcycpO1xudmFyIHNvZnRTZXRIb29rID0gcmVxdWlyZSgnLi9ob29rcy9zb2Z0LXNldC1ob29rLmpzJyk7XG52YXIgZXZIb29rID0gcmVxdWlyZSgnLi9ob29rcy9ldi1ob29rLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaDtcblxuZnVuY3Rpb24gaCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZE5vZGVzID0gW107XG4gICAgdmFyIHRhZywgcHJvcHMsIGtleSwgbmFtZXNwYWNlO1xuXG4gICAgaWYgKCFjaGlsZHJlbiAmJiBpc0NoaWxkcmVuKHByb3BlcnRpZXMpKSB7XG4gICAgICAgIGNoaWxkcmVuID0gcHJvcGVydGllcztcbiAgICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHByb3BzIHx8IHByb3BlcnRpZXMgfHwge307XG4gICAgdGFnID0gcGFyc2VUYWcodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgLy8gc3VwcG9ydCBrZXlzXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICBrZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgIHByb3BzLmtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IG5hbWVzcGFjZVxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbmFtZXNwYWNlJykpIHtcbiAgICAgICAgbmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlO1xuICAgICAgICBwcm9wcy5uYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gZml4IGN1cnNvciBidWdcbiAgICBpZiAodGFnID09PSAnSU5QVVQnICYmXG4gICAgICAgICFuYW1lc3BhY2UgJiZcbiAgICAgICAgcHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiZcbiAgICAgICAgcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAhaXNIb29rKHByb3BzLnZhbHVlKVxuICAgICkge1xuICAgICAgICBwcm9wcy52YWx1ZSA9IHNvZnRTZXRIb29rKHByb3BzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKHByb3BzKTtcblxuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIGNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgIGFkZENoaWxkKGNoaWxkcmVuLCBjaGlsZE5vZGVzLCB0YWcsIHByb3BzKTtcbiAgICB9XG5cblxuICAgIHJldHVybiBuZXcgVk5vZGUodGFnLCBwcm9wcywgY2hpbGROb2Rlcywga2V5LCBuYW1lc3BhY2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjLCBjaGlsZE5vZGVzLCB0YWcsIHByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBjID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobmV3IFZUZXh0KGMpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjID09PSAnbnVtYmVyJykge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobmV3IFZUZXh0KFN0cmluZyhjKSkpO1xuICAgIH0gZWxzZSBpZiAoaXNDaGlsZChjKSkge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2goYyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGMpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWRkQ2hpbGQoY1tpXSwgY2hpbGROb2RlcywgdGFnLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGMgPT09IG51bGwgfHwgYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBVbmV4cGVjdGVkVmlydHVhbEVsZW1lbnQoe1xuICAgICAgICAgICAgZm9yZWlnbk9iamVjdDogYyxcbiAgICAgICAgICAgIHBhcmVudFZub2RlOiB7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUHJvcGVydGllcyhwcm9wcykge1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgaWYgKGlzSG9vayh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BOYW1lLnN1YnN0cigwLCAzKSA9PT0gJ2V2LScpIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgZXYtZm9vIHN1cHBvcnRcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBldkhvb2sodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NoaWxkKHgpIHtcbiAgICByZXR1cm4gaXNWTm9kZSh4KSB8fCBpc1ZUZXh0KHgpIHx8IGlzV2lkZ2V0KHgpIHx8IGlzVlRodW5rKHgpO1xufVxuXG5mdW5jdGlvbiBpc0NoaWxkcmVuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIHx8IGlzQXJyYXkoeCkgfHwgaXNDaGlsZCh4KTtcbn1cblxuZnVuY3Rpb24gVW5leHBlY3RlZFZpcnR1YWxFbGVtZW50KGRhdGEpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG5cbiAgICBlcnIudHlwZSA9ICd2aXJ0dWFsLWh5cGVyc2NyaXB0LnVuZXhwZWN0ZWQudmlydHVhbC1lbGVtZW50JztcbiAgICBlcnIubWVzc2FnZSA9ICdVbmV4cGVjdGVkIHZpcnR1YWwgY2hpbGQgcGFzc2VkIHRvIGgoKS5cXG4nICtcbiAgICAgICAgJ0V4cGVjdGVkIGEgVk5vZGUgLyBWdGh1bmsgLyBWV2lkZ2V0IC8gc3RyaW5nIGJ1dDpcXG4nICtcbiAgICAgICAgJ2dvdDpcXG4nICtcbiAgICAgICAgZXJyb3JTdHJpbmcoZGF0YS5mb3JlaWduT2JqZWN0KSArXG4gICAgICAgICcuXFxuJyArXG4gICAgICAgICdUaGUgcGFyZW50IHZub2RlIGlzOlxcbicgK1xuICAgICAgICBlcnJvclN0cmluZyhkYXRhLnBhcmVudFZub2RlKVxuICAgICAgICAnXFxuJyArXG4gICAgICAgICdTdWdnZXN0ZWQgZml4OiBjaGFuZ2UgeW91ciBgaCguLi4sIFsgLi4uIF0pYCBjYWxsc2l0ZS4nO1xuICAgIGVyci5mb3JlaWduT2JqZWN0ID0gZGF0YS5mb3JlaWduT2JqZWN0O1xuICAgIGVyci5wYXJlbnRWbm9kZSA9IGRhdGEucGFyZW50Vm5vZGU7XG5cbiAgICByZXR1cm4gZXJyO1xufVxuXG5mdW5jdGlvbiBlcnJvclN0cmluZyhvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAnICAgICcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNwbGl0ID0gcmVxdWlyZSgnYnJvd3Nlci1zcGxpdCcpO1xuXG52YXIgY2xhc3NJZFNwbGl0ID0gLyhbXFwuI10/W2EtekEtWjAtOVxcdTAwN0YtXFx1RkZGRl86LV0rKS87XG52YXIgbm90Q2xhc3NJZCA9IC9eXFwufCMvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlVGFnO1xuXG5mdW5jdGlvbiBwYXJzZVRhZyh0YWcsIHByb3BzKSB7XG4gICAgaWYgKCF0YWcpIHtcbiAgICAgICAgcmV0dXJuICdESVYnO1xuICAgIH1cblxuICAgIHZhciBub0lkID0gIShwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaWQnKSk7XG5cbiAgICB2YXIgdGFnUGFydHMgPSBzcGxpdCh0YWcsIGNsYXNzSWRTcGxpdCk7XG4gICAgdmFyIHRhZ05hbWUgPSBudWxsO1xuXG4gICAgaWYgKG5vdENsYXNzSWQudGVzdCh0YWdQYXJ0c1sxXSkpIHtcbiAgICAgICAgdGFnTmFtZSA9ICdESVYnO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzLCBwYXJ0LCB0eXBlLCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhZ1BhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcnQgPSB0YWdQYXJ0c1tpXTtcblxuICAgICAgICBpZiAoIXBhcnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IHBhcnQuY2hhckF0KDApO1xuXG4gICAgICAgIGlmICghdGFnTmFtZSkge1xuICAgICAgICAgICAgdGFnTmFtZSA9IHBhcnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcyB8fCBbXTtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChwYXJ0LnN1YnN0cmluZygxLCBwYXJ0Lmxlbmd0aCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcjJyAmJiBub0lkKSB7XG4gICAgICAgICAgICBwcm9wcy5pZCA9IHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChwcm9wcy5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzLm5hbWVzcGFjZSA/IHRhZ05hbWUgOiB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG59XG4iLCJ2YXIgaXNWTm9kZSA9IHJlcXVpcmUoXCIuL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuL2lzLXZ0ZXh0XCIpXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi9pcy13aWRnZXRcIilcbnZhciBpc1RodW5rID0gcmVxdWlyZShcIi4vaXMtdGh1bmtcIilcblxubW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVUaHVua1xuXG5mdW5jdGlvbiBoYW5kbGVUaHVuayhhLCBiKSB7XG4gICAgdmFyIHJlbmRlcmVkQSA9IGFcbiAgICB2YXIgcmVuZGVyZWRCID0gYlxuXG4gICAgaWYgKGlzVGh1bmsoYikpIHtcbiAgICAgICAgcmVuZGVyZWRCID0gcmVuZGVyVGh1bmsoYiwgYSlcbiAgICB9XG5cbiAgICBpZiAoaXNUaHVuayhhKSkge1xuICAgICAgICByZW5kZXJlZEEgPSByZW5kZXJUaHVuayhhLCBudWxsKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGE6IHJlbmRlcmVkQSxcbiAgICAgICAgYjogcmVuZGVyZWRCXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUaHVuayh0aHVuaywgcHJldmlvdXMpIHtcbiAgICB2YXIgcmVuZGVyZWRUaHVuayA9IHRodW5rLnZub2RlXG5cbiAgICBpZiAoIXJlbmRlcmVkVGh1bmspIHtcbiAgICAgICAgcmVuZGVyZWRUaHVuayA9IHRodW5rLnZub2RlID0gdGh1bmsucmVuZGVyKHByZXZpb3VzKVxuICAgIH1cblxuICAgIGlmICghKGlzVk5vZGUocmVuZGVyZWRUaHVuaykgfHxcbiAgICAgICAgICAgIGlzVlRleHQocmVuZGVyZWRUaHVuaykgfHxcbiAgICAgICAgICAgIGlzV2lkZ2V0KHJlbmRlcmVkVGh1bmspKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aHVuayBkaWQgbm90IHJldHVybiBhIHZhbGlkIG5vZGVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcmVkVGh1bmtcbn1cbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmlydHVhbFRleHRcblxuZnVuY3Rpb24gaXNWaXJ0dWFsVGV4dCh4KSB7XG4gICAgcmV0dXJuIHggJiYgeC50eXBlID09PSBcIlZpcnR1YWxUZXh0XCIgJiYgeC52ZXJzaW9uID09PSB2ZXJzaW9uXG59XG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxuVmlydHVhbFBhdGNoLk5PTkUgPSAwXG5WaXJ0dWFsUGF0Y2guVlRFWFQgPSAxXG5WaXJ0dWFsUGF0Y2guVk5PREUgPSAyXG5WaXJ0dWFsUGF0Y2guV0lER0VUID0gM1xuVmlydHVhbFBhdGNoLlBST1BTID0gNFxuVmlydHVhbFBhdGNoLk9SREVSID0gNVxuVmlydHVhbFBhdGNoLklOU0VSVCA9IDZcblZpcnR1YWxQYXRjaC5SRU1PVkUgPSA3XG5WaXJ0dWFsUGF0Y2guVEhVTksgPSA4XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFBhdGNoXG5cbmZ1bmN0aW9uIFZpcnR1YWxQYXRjaCh0eXBlLCB2Tm9kZSwgcGF0Y2gpIHtcbiAgICB0aGlzLnR5cGUgPSBOdW1iZXIodHlwZSlcbiAgICB0aGlzLnZOb2RlID0gdk5vZGVcbiAgICB0aGlzLnBhdGNoID0gcGF0Y2hcbn1cblxuVmlydHVhbFBhdGNoLnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvblxuVmlydHVhbFBhdGNoLnByb3RvdHlwZS50eXBlID0gXCJWaXJ0dWFsUGF0Y2hcIlxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcImlzLW9iamVjdFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9va1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZQcm9wc1xuXG5mdW5jdGlvbiBkaWZmUHJvcHMoYSwgYikge1xuICAgIHZhciBkaWZmXG5cbiAgICBmb3IgKHZhciBhS2V5IGluIGEpIHtcbiAgICAgICAgaWYgKCEoYUtleSBpbiBiKSkge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhVmFsdWUgPSBhW2FLZXldXG4gICAgICAgIHZhciBiVmFsdWUgPSBiW2FLZXldXG5cbiAgICAgICAgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGFWYWx1ZSkgJiYgaXNPYmplY3QoYlZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGdldFByb3RvdHlwZShiVmFsdWUpICE9PSBnZXRQcm90b3R5cGUoYVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgZGlmZlthS2V5XSA9IGJWYWx1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hvb2soYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgICAgICBkaWZmW2FLZXldID0gYlZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3REaWZmID0gZGlmZlByb3BzKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIGRpZmZbYUtleV0gPSBvYmplY3REaWZmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSBiVmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGJLZXkgaW4gYikge1xuICAgICAgICBpZiAoIShiS2V5IGluIGEpKSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZltiS2V5XSA9IGJbYktleV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaWZmXG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgfSBlbHNlIGlmICh2YWx1ZS5fX3Byb3RvX18pIHtcbiAgICByZXR1cm4gdmFsdWUuX19wcm90b19fXG4gIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlXG4gIH1cbn1cbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcblxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2hcIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdGh1bmtcIilcbnZhciBoYW5kbGVUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9oYW5kbGUtdGh1bmtcIilcblxudmFyIGRpZmZQcm9wcyA9IHJlcXVpcmUoXCIuL2RpZmYtcHJvcHNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG5cbmZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICAgIHZhciBwYXRjaCA9IHsgYTogYSB9XG4gICAgd2FsayhhLCBiLCBwYXRjaCwgMClcbiAgICByZXR1cm4gcGF0Y2hcbn1cblxuZnVuY3Rpb24gd2FsayhhLCBiLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICB2YXIgYXBwbHlDbGVhciA9IGZhbHNlXG5cbiAgICBpZiAoaXNUaHVuayhhKSB8fCBpc1RodW5rKGIpKSB7XG4gICAgICAgIHRodW5rcyhhLCBiLCBwYXRjaCwgaW5kZXgpXG4gICAgfSBlbHNlIGlmIChiID09IG51bGwpIHtcblxuICAgICAgICAvLyBJZiBhIGlzIGEgd2lkZ2V0IHdlIHdpbGwgYWRkIGEgcmVtb3ZlIHBhdGNoIGZvciBpdFxuICAgICAgICAvLyBPdGhlcndpc2UgYW55IGNoaWxkIHdpZGdldHMvaG9va3MgbXVzdCBiZSBkZXN0cm95ZWQuXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgYWRkaW5nIHR3byByZW1vdmUgcGF0Y2hlcyBmb3IgYSB3aWRnZXQuXG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICAgICAgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgYSwgYikpXG4gICAgfSBlbHNlIGlmIChpc1ZOb2RlKGIpKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGEpKSB7XG4gICAgICAgICAgICBpZiAoYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiZcbiAgICAgICAgICAgICAgICBhLm5hbWVzcGFjZSA9PT0gYi5uYW1lc3BhY2UgJiZcbiAgICAgICAgICAgICAgICBhLmtleSA9PT0gYi5rZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHNQYXRjaCA9IGRpZmZQcm9wcyhhLnByb3BlcnRpZXMsIGIucHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNQYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guUFJPUFMsIGEsIHByb3BzUGF0Y2gpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseSA9IGRpZmZDaGlsZHJlbihhLCBiLCBwYXRjaCwgYXBwbHksIGluZGV4KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WTk9ERSwgYSwgYikpXG4gICAgICAgICAgICAgICAgYXBwbHlDbGVhciA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZOT0RFLCBhLCBiKSlcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVlRleHQoYikpIHtcbiAgICAgICAgaWYgKCFpc1ZUZXh0KGEpKSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgICAgICBhcHBseUNsZWFyID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGEudGV4dCAhPT0gYi50ZXh0KSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzV2lkZ2V0KGIpKSB7XG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5XSURHRVQsIGEsIGIpKVxuICAgIH1cblxuICAgIGlmIChhcHBseSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBseVxuICAgIH1cblxuICAgIGlmIChhcHBseUNsZWFyKSB7XG4gICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlmZkNoaWxkcmVuKGEsIGIsIHBhdGNoLCBhcHBseSwgaW5kZXgpIHtcbiAgICB2YXIgYUNoaWxkcmVuID0gYS5jaGlsZHJlblxuICAgIHZhciBvcmRlcmVkU2V0ID0gcmVvcmRlcihhQ2hpbGRyZW4sIGIuY2hpbGRyZW4pXG4gICAgdmFyIGJDaGlsZHJlbiA9IG9yZGVyZWRTZXQuY2hpbGRyZW5cblxuICAgIHZhciBhTGVuID0gYUNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBiTGVuID0gYkNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBsZW4gPSBhTGVuID4gYkxlbiA/IGFMZW4gOiBiTGVuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgcmlnaHROb2RlID0gYkNoaWxkcmVuW2ldXG4gICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICBpZiAoIWxlZnROb2RlKSB7XG4gICAgICAgICAgICBpZiAocmlnaHROb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXNzIG5vZGVzIGluIGIgbmVlZCB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLklOU0VSVCwgbnVsbCwgcmlnaHROb2RlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhbGsobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVk5vZGUobGVmdE5vZGUpICYmIGxlZnROb2RlLmNvdW50KSB7XG4gICAgICAgICAgICBpbmRleCArPSBsZWZ0Tm9kZS5jb3VudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyZWRTZXQubW92ZXMpIHtcbiAgICAgICAgLy8gUmVvcmRlciBub2RlcyBsYXN0XG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goXG4gICAgICAgICAgICBWUGF0Y2guT1JERVIsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgb3JkZXJlZFNldC5tb3Zlc1xuICAgICAgICApKVxuICAgIH1cblxuICAgIHJldHVybiBhcHBseVxufVxuXG5mdW5jdGlvbiBjbGVhclN0YXRlKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzaW5nbGUgd2Fsaywgbm90IHR3b1xuICAgIHVuaG9vayh2Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgIGRlc3Ryb3lXaWRnZXRzKHZOb2RlLCBwYXRjaCwgaW5kZXgpXG59XG5cbi8vIFBhdGNoIHJlY29yZHMgZm9yIGFsbCBkZXN0cm95ZWQgd2lkZ2V0cyBtdXN0IGJlIGFkZGVkIGJlY2F1c2Ugd2UgbmVlZFxuLy8gYSBET00gbm9kZSByZWZlcmVuY2UgZm9yIHRoZSBkZXN0cm95IGZ1bmN0aW9uXG5mdW5jdGlvbiBkZXN0cm95V2lkZ2V0cyh2Tm9kZSwgcGF0Y2gsIGluZGV4KSB7XG4gICAgaWYgKGlzV2lkZ2V0KHZOb2RlKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZOb2RlLmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcGF0Y2hbaW5kZXhdID0gYXBwZW5kUGF0Y2goXG4gICAgICAgICAgICAgICAgcGF0Y2hbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgdk5vZGUsIG51bGwpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVk5vZGUodk5vZGUpICYmICh2Tm9kZS5oYXNXaWRnZXRzIHx8IHZOb2RlLmhhc1RodW5rcykpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgICAgICBkZXN0cm95V2lkZ2V0cyhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICBpZiAoaXNWTm9kZShjaGlsZCkgJiYgY2hpbGQuY291bnQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBjaGlsZC5jb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBhIHN1Yi1wYXRjaCBmb3IgdGh1bmtzXG5mdW5jdGlvbiB0aHVua3MoYSwgYiwgcGF0Y2gsIGluZGV4KSB7XG4gICAgdmFyIG5vZGVzID0gaGFuZGxlVGh1bmsoYSwgYilcbiAgICB2YXIgdGh1bmtQYXRjaCA9IGRpZmYobm9kZXMuYSwgbm9kZXMuYilcbiAgICBpZiAoaGFzUGF0Y2hlcyh0aHVua1BhdGNoKSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBuZXcgVlBhdGNoKFZQYXRjaC5USFVOSywgbnVsbCwgdGh1bmtQYXRjaClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhdGNoZXMocGF0Y2gpIHtcbiAgICBmb3IgKHZhciBpbmRleCBpbiBwYXRjaCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IFwiYVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEV4ZWN1dGUgaG9va3Mgd2hlbiB0d28gbm9kZXMgYXJlIGlkZW50aWNhbFxuZnVuY3Rpb24gdW5ob29rKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoaXNWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgaWYgKHZOb2RlLmhvb2tzKSB7XG4gICAgICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBlbmRQYXRjaChcbiAgICAgICAgICAgICAgICBwYXRjaFtpbmRleF0sXG4gICAgICAgICAgICAgICAgbmV3IFZQYXRjaChcbiAgICAgICAgICAgICAgICAgICAgVlBhdGNoLlBST1BTLFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkS2V5cyh2Tm9kZS5ob29rcylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodk5vZGUuZGVzY2VuZGFudEhvb2tzIHx8IHZOb2RlLmhhc1RodW5rcykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICAgICAgICAgIHVuaG9vayhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpICYmIGNoaWxkLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IGNoaWxkLmNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZEtleXMob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBMaXN0IGRpZmYsIG5haXZlIGxlZnQgdG8gcmlnaHQgcmVvcmRlcmluZ1xuZnVuY3Rpb24gcmVvcmRlcihhQ2hpbGRyZW4sIGJDaGlsZHJlbikge1xuICAgIC8vIE8oTSkgdGltZSwgTyhNKSBtZW1vcnlcbiAgICB2YXIgYkNoaWxkSW5kZXggPSBrZXlJbmRleChiQ2hpbGRyZW4pXG4gICAgdmFyIGJLZXlzID0gYkNoaWxkSW5kZXgua2V5c1xuICAgIHZhciBiRnJlZSA9IGJDaGlsZEluZGV4LmZyZWVcblxuICAgIGlmIChiRnJlZS5sZW5ndGggPT09IGJDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBiQ2hpbGRyZW4sXG4gICAgICAgICAgICBtb3ZlczogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTyhOKSB0aW1lLCBPKE4pIG1lbW9yeVxuICAgIHZhciBhQ2hpbGRJbmRleCA9IGtleUluZGV4KGFDaGlsZHJlbilcbiAgICB2YXIgYUtleXMgPSBhQ2hpbGRJbmRleC5rZXlzXG4gICAgdmFyIGFGcmVlID0gYUNoaWxkSW5kZXguZnJlZVxuXG4gICAgaWYgKGFGcmVlLmxlbmd0aCA9PT0gYUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGJDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPKE1BWChOLCBNKSkgbWVtb3J5XG4gICAgdmFyIG5ld0NoaWxkcmVuID0gW11cblxuICAgIHZhciBmcmVlSW5kZXggPSAwXG4gICAgdmFyIGZyZWVDb3VudCA9IGJGcmVlLmxlbmd0aFxuICAgIHZhciBkZWxldGVkSXRlbXMgPSAwXG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYSBhbmQgbWF0Y2ggYSBub2RlIGluIGJcbiAgICAvLyBPKE4pIHRpbWUsXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgYUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhSXRlbSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgaXRlbUluZGV4XG5cbiAgICAgICAgaWYgKGFJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKGJLZXlzLmhhc093blByb3BlcnR5KGFJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXRjaCB1cCB0aGUgb2xkIGtleXNcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBiS2V5c1thSXRlbS5rZXldXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIGtleWVkIGl0ZW1zXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gaSAtIGRlbGV0ZWRJdGVtcysrXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWF0Y2ggdGhlIGl0ZW0gaW4gYSB3aXRoIHRoZSBuZXh0IGZyZWUgaXRlbSBpbiBiXG4gICAgICAgICAgICBpZiAoZnJlZUluZGV4IDwgZnJlZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gYkZyZWVbZnJlZUluZGV4KytdXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIGZyZWUgaXRlbXMgaW4gYiB0byBtYXRjaCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZyZWUgaXRlbXMgaW4gYSwgc28gdGhlIGV4dHJhIGZyZWUgbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgZGVsZXRlZC5cbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBpIC0gZGVsZXRlZEl0ZW1zKytcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFzdEZyZWVJbmRleCA9IGZyZWVJbmRleCA+PSBiRnJlZS5sZW5ndGggP1xuICAgICAgICBiQ2hpbGRyZW4ubGVuZ3RoIDpcbiAgICAgICAgYkZyZWVbZnJlZUluZGV4XVxuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGIgYW5kIGFwcGVuZCBhbnkgbmV3IGtleXNcbiAgICAvLyBPKE0pIHRpbWVcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJDaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmV3SXRlbSA9IGJDaGlsZHJlbltqXVxuXG4gICAgICAgIGlmIChuZXdJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKCFhS2V5cy5oYXNPd25Qcm9wZXJ0eShuZXdJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgYW55IG5ldyBrZXllZCBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBhZGRpbmcgbmV3IGl0ZW1zIHRvIHRoZSBlbmQgYW5kIHRoZW4gc29ydGluZyB0aGVtXG4gICAgICAgICAgICAgICAgLy8gaW4gcGxhY2UuIEluIGZ1dHVyZSB3ZSBzaG91bGQgaW5zZXJ0IG5ldyBpdGVtcyBpbiBwbGFjZS5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0l0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaiA+PSBsYXN0RnJlZUluZGV4KSB7XG4gICAgICAgICAgICAvLyBBZGQgYW55IGxlZnRvdmVyIG5vbi1rZXllZCBpdGVtc1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdJdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRlID0gbmV3Q2hpbGRyZW4uc2xpY2UoKVxuICAgIHZhciBzaW11bGF0ZUluZGV4ID0gMFxuICAgIHZhciByZW1vdmVzID0gW11cbiAgICB2YXIgaW5zZXJ0cyA9IFtdXG4gICAgdmFyIHNpbXVsYXRlSXRlbVxuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBiQ2hpbGRyZW4ubGVuZ3RoOykge1xuICAgICAgICB2YXIgd2FudGVkSXRlbSA9IGJDaGlsZHJlbltrXVxuICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuXG4gICAgICAgIC8vIHJlbW92ZSBpdGVtc1xuICAgICAgICB3aGlsZSAoc2ltdWxhdGVJdGVtID09PSBudWxsICYmIHNpbXVsYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgbnVsbCkpXG4gICAgICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIG5lZWQgYSBrZXkgaW4gdGhpcyBwb3NpdGlvbi4uLlxuICAgICAgICAgICAgaWYgKHdhbnRlZEl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpbXVsYXRlSXRlbSAmJiBzaW11bGF0ZUl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGFuIGluc2VydCBkb2Vzbid0IHB1dCB0aGlzIGtleSBpbiBwbGFjZSwgaXQgbmVlZHMgdG8gbW92ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYktleXNbc2ltdWxhdGVJdGVtLmtleV0gIT09IGsgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRlSXRlbSA9IHNpbXVsYXRlW3NpbXVsYXRlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlIGRpZG4ndCBwdXQgdGhlIHdhbnRlZCBpdGVtIGluIHBsYWNlLCB3ZSBuZWVkIHRvIGluc2VydCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZW1zIGFyZSBtYXRjaGluZywgc28gc2tpcCBhaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGVJbmRleCsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0cy5wdXNoKHtrZXk6IHdhbnRlZEl0ZW0ua2V5LCB0bzoga30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYSBrZXkgaW4gc2ltdWxhdGUgaGFzIG5vIG1hdGNoaW5nIHdhbnRlZCBrZXksIHJlbW92ZSBpdFxuICAgICAgICAgICAgZWxzZSBpZiAoc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbXVsYXRlSW5kZXgrK1xuICAgICAgICAgICAgaysrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHRoZSByZW1haW5pbmcgbm9kZXMgZnJvbSBzaW11bGF0ZVxuICAgIHdoaWxlKHNpbXVsYXRlSW5kZXggPCBzaW11bGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgc2ltdWxhdGVJdGVtID0gc2ltdWxhdGVbc2ltdWxhdGVJbmRleF1cbiAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBvbmx5IG1vdmVzIHdlIGhhdmUgYXJlIGRlbGV0ZXMgdGhlbiB3ZSBjYW4ganVzdFxuICAgIC8vIGxldCB0aGUgZGVsZXRlIHBhdGNoIHJlbW92ZSB0aGVzZSBpdGVtcy5cbiAgICBpZiAocmVtb3Zlcy5sZW5ndGggPT09IGRlbGV0ZWRJdGVtcyAmJiAhaW5zZXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW4sXG4gICAgICAgIG1vdmVzOiB7XG4gICAgICAgICAgICByZW1vdmVzOiByZW1vdmVzLFxuICAgICAgICAgICAgaW5zZXJ0czogaW5zZXJ0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpbmRleCwga2V5KSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IGluZGV4LFxuICAgICAgICBrZXk6IGtleVxuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5SW5kZXgoY2hpbGRyZW4pIHtcbiAgICB2YXIga2V5cyA9IHt9XG4gICAgdmFyIGZyZWUgPSBbXVxuICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblxuICAgICAgICBpZiAoY2hpbGQua2V5KSB7XG4gICAgICAgICAgICBrZXlzW2NoaWxkLmtleV0gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleXM6IGtleXMsICAgICAvLyBBIGhhc2ggb2Yga2V5IG5hbWUgdG8gaW5kZXhcbiAgICAgICAgZnJlZTogZnJlZSAgICAgIC8vIEFuIGFycmF5IG9mIHVua2V5ZWQgaXRlbSBpbmRpY2VzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRQYXRjaChhcHBseSwgcGF0Y2gpIHtcbiAgICBpZiAoYXBwbHkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoYXBwbHkpKSB7XG4gICAgICAgICAgICBhcHBseS5wdXNoKHBhdGNoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHkgPSBbYXBwbHksIHBhdGNoXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGx5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGNoXG4gICAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgc2V0SW1tZWRpYXRlIH0gZnJvbSAndGltZXJzJztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBrZXlzIGZyb20gJ3JhbWRhL3NyYy9rZXlzJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAncmFtZGEvc3JjL3ZhbHVlcyc7XG5pbXBvcnQgZm9yRWFjaCBmcm9tICdyYW1kYS9zcmMvZm9yRWFjaCc7XG5pbXBvcnQgZmluZCBmcm9tICdyYW1kYS9zcmMvZmluZCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ3JhbWRhL3NyYy9maWx0ZXInO1xuaW1wb3J0IHRpbWVzIGZyb20gJ3JhbWRhL3NyYy90aW1lcyc7XG5pbXBvcnQgcGFydGlhbCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbCc7XG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gJ21lbW9pemVlJztcbmltcG9ydCBkZWZhdWx0VG8gZnJvbSAncmFtZGEvc3JjL2RlZmF1bHRUbyc7XG5pbXBvcnQgaGcsIHsgaCB9IGZyb20gJ21lcmN1cnknO1xuaW1wb3J0IE1haW5Mb29wIGZyb20gJ21haW5sb29wLmpzJztcblxuaW1wb3J0IHsgcmFuZG9tSW50RnJvbVJhbmdlLCBsbiB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGRyYWdFdmVudHNTZXR1cCBmcm9tICcuLi9kcmFnLWV2ZW50cy9zZXR1cCc7XG5pbXBvcnQgQm90IGZyb20gJy4uL2JvdCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vYm9hcmQnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi4vY2VsbCc7XG5cbmNvbnN0IG1lbW9pemUgPSBwYXJ0aWFsUmlnaHQoX21lbW9pemUsIHsgbWF4OiAxIH0pO1xuXG4vKipcbiAqXG4gKi9cblxuY29uc3QgZGVmYXVsdERpbWVuc2lvbiA9IGRlZmF1bHRUbygyMCk7XG5jb25zdCBkZWZhdWx0TWFyZ2luID0gZGVmYXVsdFRvKDAuNSk7XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKG9wdHMpIHtcbiAgY29uc3QgeyB1bmRvLCByZWRvIH0gPSBvcHRzO1xuICBjb25zdCByb3dzID0gZGVmYXVsdERpbWVuc2lvbihvcHRzLnJvd3MpO1xuICBjb25zdCBjb2x1bW5zID0gZGVmYXVsdERpbWVuc2lvbihvcHRzLmNvbHVtbnMpO1xuICBjb25zdCBtYXJnaW4gPSBkZWZhdWx0TWFyZ2luKG9wdHMubWFyZ2luKTtcbiAgY29uc3QgbWF4V2lubmVycyA9IG9wdHMubWF4V2lubmVycyB8fCAzO1xuICBsZXQgd2lubmVycyA9IFtdO1xuICBsZXQgX2hhc0ZpbmlzaGVkID0gZmFsc2U7XG4gIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICBsZXQgcGF1c2VUaW1lID0gbnVsbDtcblxuICBhc3NlcnRSb3dzKHJvd3MpO1xuICBhc3NlcnRDb2x1bW5zKGNvbHVtbnMpO1xuXG4gIGNvbnN0IGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICBjb25zdCB7IGxpc3RlblRvLCB1bmxpc3RlblRvIH0gPSBkcmFnRXZlbnRzU2V0dXAoKTtcblxuICBjb25zdCBib3RJZGVudGl0eSA9IEJvdC5jcmVhdGVJZGVudGl0eSgpO1xuXG4gIE1haW5Mb29wXG4gIC8vIFZhbHVlcyBiZWxvdyBgMTAwMCAvIDE0NGAgYXJlIGRpc2NvdXJhZ2VkIGFuZFxuICAvLyBiZWxvdyBgMTAwMCAvIDI0MGAgYXJlIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkXG4gIC5zZXRTaW11bGF0aW9uVGltZXN0ZXAoNTAwKVxuICAuc2V0VXBkYXRlKHVwZGF0ZSlcbiAgLnNldERyYXcoZHJhdylcbiAgLnNldEVuZChlbmQpO1xuXG4gIGNvbnN0IHN0YXRlID0gaGcuc3RhdGUoe1xuICAgIHJvd3M6IGhnLnZhbHVlKHJvd3MpLFxuICAgIGNvbHVtbnM6IGhnLnZhbHVlKGNvbHVtbnMpLFxuICAgIG1hcmdpbjogaGcudmFsdWUobWFyZ2luKSwgLy8gcGVyY2VudFxuICAgIGNlbGxzOiBoZy52YXJoYXNoKGNlbGxzKSxcbiAgICBib3RzOiBoZy52YXJoYXNoKHt9KSxcbiAgICBib3RJZGVudGl0eTogaGcudmFsdWUoYm90SWRlbnRpdHkpLFxuICAgIGZwczogaGcudmFsdWUoMCksIC8vIFVzZWQgb25seSBpbiBkZXZlbG9wbWVudFxuICAgIGlzUmVhZHk6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc1N0YXJ0ZWQ6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc1J1bm5pbmc6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc0NlbGxFbmFibGVkOiBoZy52YWx1ZShpc0NlbGxFbmFibGVkKSxcbiAgICBpc0RyYWdnaW5nRW5hYmxlZDogaGcudmFsdWUoZmFsc2UpLFxuICAgIHN0YXJ0OiBoZy52YWx1ZShzdGFydCksXG4gICAgcGF1c2U6IGhnLnZhbHVlKHBhdXNlKSxcbiAgICByZXNldDogaGcudmFsdWUocmVzZXQpLFxuICAgIGdldFdpbm5lcnM6IGhnLnZhbHVlKGdldFdpbm5lcnMpLFxuICAgIGVuYWJsZURyYWdFdmVudHM6IGhnLnZhbHVlKGVuYWJsZURyYWdFdmVudHMpLFxuICAgIGRpc2FibGVEcmFnRXZlbnRzOiBoZy52YWx1ZShkaXNhYmxlRHJhZ0V2ZW50cyksXG4gICAgYm9hcmQ6IEJvYXJkKHsgdW5kbywgcmVkbyB9KSxcbiAgICBjaGFubmVsczoge1xuICAgICAgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCxcbiAgICAgIGFkZEJvdFJhbmRvbWx5LFxuICAgICAgY2hlY2tSZWFkeVN0YXRlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGxzKCkge1xuICAgIC8vIFRPRE86IENoZWNrIGlmIGNhbiBwYXNzIGBvbkFkZEJvdCgpYCB2aWEgYHByb3BzYCBvbiBgcmVuZGVyKClgXG4gICAgY29uc3QgY2VsbCA9IHBhcnRpYWxSaWdodChwYXJ0aWFsKENlbGwsIGNvbHVtbnMpLCBvbkFkZEJvdCk7XG4gICAgY29uc3QgY2VsbHMgPSB0aW1lcyhjZWxsLCByb3dzICogY29sdW1ucyk7XG4gICAgcmV0dXJuIGNlbGxzO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoY2IpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQoKScpO1xuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICBjb25zdCBkaXNhYmxlRHJhZ0V2ZW50cyA9IHN0YXRlLmRpc2FibGVEcmFnRXZlbnRzKCk7XG4gICAgICBkaXNhYmxlRHJhZ0V2ZW50cygpO1xuXG4gICAgICBNYWluTG9vcC5zdGFydCgpO1xuXG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgIC8vIFRoZSBsb29wIHNob3VsZCBoYXZlIHN0YXJ0ZWQgYnkgbm93XG4gICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxzZSBpZiAocGF1c2VUaW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGFydFRpbWUgKz0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwYXVzZVRpbWU7XG4gICAgICAgICAgICBwYXVzZVRpbWUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHN0YXRlLmlzUnVubmluZy5zZXQoTWFpbkxvb3AuaXNSdW5uaW5nKCkpO1xuICAgICAgICAgIHN0YXRlLmlzUnVubmluZy5zZXQodHJ1ZSk7XG4gICAgICAgICAgc3RhdGUuaXNTdGFydGVkLnNldCh0cnVlKTtcblxuICAgICAgICAgIGlmIChjYikgY2IoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKGNiKSB7XG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgIE1haW5Mb29wLnN0b3AoKTtcblxuICAgICAgICBwYXVzZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAvLyBzdGF0ZS5pc1J1bm5pbmcuc2V0KE1haW5Mb29wLmlzUnVubmluZygpKTtcbiAgICAgICAgc3RhdGUuaXNSdW5uaW5nLnNldChmYWxzZSk7XG4gICAgICAgIHN0YXRlLmZwcy5zZXQoMCk7XG5cbiAgICAgICAgaWYgKGNiKSBjYigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldChjYikge1xuICAgIHBhdXNlKCgpID0+IHtcbiAgICAgIHdpbm5lcnMgPSBbXTtcbiAgICAgIF9oYXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHBhdXNlVGltZSA9IG51bGw7XG5cbiAgICAgIC8vIFRPRE86IFNlZSBodHRwczovL2dpdGh1Yi5jb20vbnJ3L29ic2Vydi12YXJoYXNoL2lzc3Vlcy8xNSBmb3JcbiAgICAgIC8vIGNvbW1lbnRzIHJlbGF0ZWQgdG8gdHJhbnNhY3Rpb25zLCBpZS4gYnVsayB1cGRhdGVzXG4gICAgICBmb3JFYWNoKHN0YXRlLmJvdHMuZGVsZXRlLCBrZXlzKHN0YXRlLmJvdHMpKTtcblxuICAgICAgLy8gVE9ETzogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ucncvb2JzZXJ2LXZhcmhhc2gvaXNzdWVzLzE1IGZvclxuICAgICAgLy8gY29tbWVudHMgcmVsYXRlZCB0byB0cmFuc2FjdGlvbnMsIGllLiBidWxrIHVwZGF0ZXNcbiAgICAgIGNvbnN0IG5leHRDZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAgIGZvckVhY2goXG4gICAgICAgIGlkeCA9PiBzdGF0ZS5jZWxscy5wdXQoaWR4LCBuZXh0Q2VsbHNbaWR4XSwgc3RhdGUuY2VsbHMpLFxuICAgICAgICBrZXlzKHN0YXRlLmNlbGxzKVxuICAgICAgKTtcblxuICAgICAgc3RhdGUuaXNSZWFkeS5zZXQoZmFsc2UpO1xuICAgICAgc3RhdGUuaXNTdGFydGVkLnNldChmYWxzZSk7XG5cbiAgICAgIGNvbnN0IGVuYWJsZURyYWdFdmVudHMgPSBzdGF0ZS5lbmFibGVEcmFnRXZlbnRzKCk7XG4gICAgICBlbmFibGVEcmFnRXZlbnRzKCk7XG5cbiAgICAgIGlmIChjYikgY2IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2VsbEVuYWJsZWQoaW5kZXgpIHtcbiAgICByZXR1cm4gc3RhdGUuY2VsbHMuZ2V0KGluZGV4KS5pc0VuYWJsZWQoKSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25BZGRCb3Qoc3BlYykge1xuICAgIHJlZ2lzdGVyQm90KHN0YXRlLCBzcGVjKTtcbiAgfVxuXG4gIC8vIFRPRE86IENvbnNpZGVyIHRvIGBtZW1vaXplKClgIHRoaXMgZnVuY3Rpb24sXG4gIC8vIGJ1dCB3ZSBuZWVkIHRvIGNsZWVuIHRoZSBjYWNoZSBhZnRlciB0aGUgZ2FtZSBoYXMgZmluaXNoZWQsXG4gIC8vIGllLiBpbnNpZGUgYHJlc2V0KClgXG4gIGZ1bmN0aW9uIGlzV2lubmVyKGJvdCkge1xuICAgIHJldHVybiAhIWZpbmQoKHsgaWQgfSkgPT4gYm90LmlkKCkgPT09IGlkLCB3aW5uZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbm5lcnMoKSB7XG4gICAgcmV0dXJuIHdpbm5lcnMubGVuZ3RoID8gd2lubmVycyA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNHYW1lRmluaXNoZWQoKSB7XG4gICAgaWYgKF9oYXNGaW5pc2hlZCkgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCB0b3RhbEJvdHMgPSBrZXlzKHN0YXRlLmJvdHMpLmxlbmd0aDtcbiAgICBjb25zdCB0b3RhbFdpbm5lcnMgPSB3aW5uZXJzLmxlbmd0aDtcblxuICAgIGNvbnN0IGhhc0ZpbmlzaGVkID0gdG90YWxXaW5uZXJzID4gMFxuICAgICAgJiYgKHRvdGFsV2lubmVycyA9PT0gdG90YWxCb3RzXG4gICAgICAgICAgfHwgdG90YWxXaW5uZXJzID09PSBtYXhXaW5uZXJzXG4gICAgICAgICAgfHwgdG90YWxXaW5uZXJzID09PSB0b3RhbEJvdHMgLSAxKTtcblxuICAgIGlmIChoYXNGaW5pc2hlZCkgX2hhc0ZpbmlzaGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBoYXNGaW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZURyYWdFdmVudHMoKSB7XG4gICAgaWYgKHN0YXRlLmlzRHJhZ2dpbmdFbmFibGVkKCkpIHJldHVybjtcbiAgICBsaXN0ZW5UbygpO1xuICAgIHN0YXRlLmlzRHJhZ2dpbmdFbmFibGVkLnNldCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVEcmFnRXZlbnRzKCkge1xuICAgIGlmICghc3RhdGUuaXNEcmFnZ2luZ0VuYWJsZWQoKSkgcmV0dXJuO1xuICAgIHVubGlzdGVuVG8oKTtcbiAgICBzdGF0ZS5pc0RyYWdnaW5nRW5hYmxlZC5zZXQoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIEdhbWUgaGFzIGZpbmlzaGVkLCBkbyBub3RoaW5nXG4gICAgaWYgKGhhc0dhbWVGaW5pc2hlZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgZm9yRWFjaChib3QgPT4ge1xuICAgICAgLy8gQm90IGlzIGEgd2lubmVyLCBkbyBub3RoaW5nXG4gICAgICBpZiAoaXNXaW5uZXIoYm90KSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBib3QucHJldkluZGV4O1xuICAgICAgY29uc3QgaW5kZXggPSBib3QuaW5kZXgoKTtcbiAgICAgIGNvbnN0IG1vdmUgPSBib3QubW92ZSgpO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gbW92ZShwcmV2SW5kZXgsIGluZGV4KTtcblxuICAgICAgaWYgKG5leHRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBib3QucHJldkluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBib3QubmV4dEluZGV4ID0gbmV4dEluZGV4O1xuXG4gICAgICAgIC8vIEJvdCB3b25cbiAgICAgICAgaWYgKHN0YXRlLmNlbGxzLmdldChuZXh0SW5kZXgpLmlzRXhpdCgpXG4gICAgICAgICAgICAmJiAhaGFzR2FtZUZpbmlzaGVkKCkpIHtcbiAgICAgICAgICB3aW5uZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGJvdC5pZCgpLFxuICAgICAgICAgICAgdGltZTogY3VyclRpbWUgLSBzdGFydFRpbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB2YWx1ZXMoc3RhdGUuYm90cykpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBmb3JFYWNoKGJvdCA9PiB7XG4gICAgICBpZiAoYm90Lm5leHRJbmRleCAhPT0gYm90LmluZGV4KCkpIHtcbiAgICAgICAgLy8gVE9ETzogSWYgd2UgbGVhdmUgYHJvd2AgYW5kIGBjb2xgIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICAgIC8vIGBCb3QoKWAgaW5zdGFuY2VzLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGVtIHRvbyBoZXJlXG4gICAgICAgIGJvdC5pbmRleC5zZXQoYm90Lm5leHRJbmRleCk7XG4gICAgICB9XG4gICAgfSwgdmFsdWVzKHN0YXRlLmJvdHMpKTtcbiAgfVxuXG4gIC8vIFRPRE86IERvIHRoYXQgb25seSBpbiBkZXZlbG9wbWVudCAodXNlIFwiZW52aWZ5XCIgZm9yIFwiYnJvd3NlcmlmeVwiKVxuICBmdW5jdGlvbiBlbmQoZnBzLCBwYW5pYykge1xuICAgIGlmIChoYXNHYW1lRmluaXNoZWQoKSkge1xuICAgICAgcGF1c2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5mcHMuc2V0KE51bWJlci5wYXJzZUludChmcHMpKTtcblxuICAgIGlmIChwYW5pYykge1xuICAgICAgLy8gVGhpcyBwYXR0ZXJuIGludHJvZHVjZXMgbm9uLWRldGVybWluaXN0aWMgYmVoYXZpb3VyLFxuICAgICAgLy8gYnV0IGluIHRoaXMgY2FzZSBpdCdzIGJldHRlciB0aGFuIHRoZSBhbHRlcm5hdGl2ZSAodGhlIGFwcGxpY2F0aW9uXG4gICAgICAvLyB3b3VsZCBsb29rIGxpa2UgaXQgd2FzIHJ1bm5pbmcgdmVyeSBxdWlja2x5IHVudGlsIHRoZSBzaW11bGF0aW9uXG4gICAgICAvLyBjYXVnaHQgdXAgdG8gcmVhbCB0aW1lKS4gU2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICAgICAgLy8gYE1haW5Mb29wLnNldEVuZCgpYCBmb3IgYWRkaXRpb25hbCBleHBsYW5hdGlvbi5cbiAgICAgIGNvbnN0IGRpc2NhcmRlZFRpbWUgPSBNYXRoLnJvdW5kKE1haW5Mb29wLnJlc2V0RnJhbWVEZWx0YSgpKTtcbiAgICAgIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gICAgICBjb25zb2xlLndhcm4obG5gXG4gICAgICAgIE1haW4gbG9vcCBwYW5pY2tlZCwgcHJvYmFibHkgYmVjYXVzZSB0aGUgYnJvd3NlciB0YWJcbiAgICAgICAgd2FzIHB1dCBpbiB0aGUgYmFja2dyb3VuZC4gRGlzY2FyZGluZyAke2Rpc2NhcmRlZFRpbWV9bXNcbiAgICAgIGApO1xuICAgICAgLyplc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUqL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IGJvYXJkUHJvcHMgPSBtZW1vaXplKChjb2x1bW5zLCBtYXJnaW4sIGNlbGxzLCBib3RzLCBib3RJZGVudGl0eSwgaXNSZWFkeSwgaXNSdW5uaW5nLCB3aW5uZXJzLCBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LCBhZGRCb3RSYW5kb21seSwgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5zLCBtYXJnaW4sIGNlbGxzLFxuICAgIGJvdHMsIGJvdElkZW50aXR5LFxuICAgIGlzUmVhZHksIGlzUnVubmluZywgd2lubmVycyxcbiAgICBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LFxuICAgIGFkZEJvdFJhbmRvbWx5LFxuICAgIGNoZWNrUmVhZHlTdGF0ZSwgaXNTdGFydGVkLFxuICB9O1xufSk7XG5cbkFwcC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUpIHtcbiAgY29uc3QgeyBpc1J1bm5pbmcsIGlzRHJhZ2dpbmdFbmFibGVkLCBlbmFibGVEcmFnRXZlbnRzLCBjaGFubmVscyB9ID0gc3RhdGU7XG4gIGNvbnN0IHdpbm5lcnMgPSBpc1J1bm5pbmcgPyBudWxsIDogc3RhdGUuZ2V0V2lubmVycygpO1xuXG4gIHJldHVybiBoKFxuICAgICdzZWN0aW9uLmFtYXplLUFwcCcsXG4gICAge1xuICAgICAgJ2V2LWhvb2snOiBuZXcgSG9vayh7XG4gICAgICAgIGlzUnVubmluZyxcbiAgICAgICAgaXNEcmFnZ2luZ0VuYWJsZWQsXG4gICAgICAgIGVuYWJsZURyYWdFdmVudHMsXG4gICAgICB9KSxcbiAgICB9LFxuICAgIFtcbiAgICAgIGhnLnBhcnRpYWwoQm9hcmQucmVuZGVyLCBzdGF0ZS5ib2FyZCwgYm9hcmRQcm9wcyhcbiAgICAgICAgc3RhdGUuY29sdW1ucywgc3RhdGUubWFyZ2luLCBzdGF0ZS5jZWxscyxcbiAgICAgICAgc3RhdGUuYm90cywgc3RhdGUuYm90SWRlbnRpdHksXG4gICAgICAgIHN0YXRlLmlzUmVhZHksIGlzUnVubmluZywgd2lubmVycyxcbiAgICAgICAgY2hhbm5lbHMub25TdGFydCwgY2hhbm5lbHMub25QYXVzZSwgY2hhbm5lbHMub25SZXNldCxcbiAgICAgICAgY2hhbm5lbHMuYWRkQm90UmFuZG9tbHksXG4gICAgICAgIGNoYW5uZWxzLmNoZWNrUmVhZHlTdGF0ZSwgc3RhdGUuaXNTdGFydGVkXG4gICAgICApKSxcblxuICAgICAgLy8gVE9ETzogRG8gdGhhdCBvbmx5IGluIGRldmVsb3BtZW50ICh1c2UgXCJlbnZpZnlcIiBmb3IgXCJicm93c2VyaWZ5XCIpXG4gICAgICAvLyBoZy5wYXJ0aWFsKHJlbmRlckZwcywgc3RhdGUuZnBzKSwgLy9ERVYtT05MWS9cbiAgICBdXG4gICk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBIb29rKG9wdHMpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbn1cblxuSG9vay5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uIGhvb2soKSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmdFbmFibGVkIHx8IHRoaXMuaXNSdW5uaW5nKSByZXR1cm47XG5cbiAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAvLyBET00gZWxlbWVudCB3aWxsIGJlIGluIHRoZSByZWFsIERPTSBieSBub3dcbiAgICB0aGlzLmVuYWJsZURyYWdFdmVudHMoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gYWRkQm90UmFuZG9tbHkoc3RhdGUsIF9zcGVjKSB7XG4gIGNvbnN0IGlzRW50cnlDZWxsID0gY2VsbCA9PiBjZWxsLmlzRW50cnkoKTtcbiAgY29uc3QgZmlsdGVyRW50cnlDZWxscyA9IGZpbHRlcihpc0VudHJ5Q2VsbClcbiAgY29uc3QgZW50cnlDZWxscyA9IGZpbHRlckVudHJ5Q2VsbHModmFsdWVzKHN0YXRlLmNlbGxzKSlcblxuICBpZiAoIWVudHJ5Q2VsbHMubGVuZ3RoKSByZXR1cm47XG5cbiAgY29uc3QgcmFuZEluZGV4ID0gcmFuZG9tSW50RnJvbVJhbmdlKDAsIGVudHJ5Q2VsbHMubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IGluZGV4ID0gZW50cnlDZWxsc1tyYW5kSW5kZXhdLmluZGV4KCk7XG5cbiAgLy8gVE9ETzogQ2hlY2sgaWYgaXQncyBiZXR0ZXIgdG8gbm90IHN0b3JlIGByb3dgIGFuZCBgY29sYCxcbiAgLy8gaW5zaWRlIGBCb3RgIGluc3RhbmNlXG4gIGNvbnN0IHNwZWMgPSBPYmplY3QuYXNzaWduKHt9LCBfc3BlYywgeyBpbmRleCB9KTtcblxuICByZWdpc3RlckJvdChzdGF0ZSwgc3BlYyk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZWdpc3RlckJvdChzdGF0ZSwgc3BlYykge1xuICBzdGF0ZS5ib3RzLnB1dChzcGVjLmlkLCBCb3QoXG4gICAgc3RhdGUucm93cygpLFxuICAgIHN0YXRlLmNvbHVtbnMoKSxcbiAgICBzdGF0ZS5pc0NlbGxFbmFibGVkKCksXG4gICAgc3BlY1xuICApKTtcblxuICBzdGF0ZS5ib3RJZGVudGl0eS5zZXQoQm90LmNyZWF0ZUlkZW50aXR5KCkpO1xuXG4gIGNoZWNrUmVhZHlTdGF0ZShzdGF0ZSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBjaGVja1JlYWR5U3RhdGUoc3RhdGUpIHtcbiAgaWYgKGtleXMoc3RhdGUuYm90cykubGVuZ3RoXG4gICAgICAmJiBleGl0Q2VsbHNFeGlzdChzdGF0ZSlcbiAgICAgIC8qJiYgIXN0YXRlLmlzUmVhZHkoKSovKSB7XG4gICAgc3RhdGUuaXNSZWFkeS5zZXQodHJ1ZSk7XG4gIH1cblxuICBlbHNlIHtcbiAgICBzdGF0ZS5pc1JlYWR5LnNldChmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGV4aXRDZWxsc0V4aXN0KHN0YXRlKSB7XG4gIHJldHVybiAhIWZpbmQoY2VsbCA9PiBjZWxsLmlzRXhpdCgpLCB2YWx1ZXMoc3RhdGUuY2VsbHMpKVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25TdGFydChzdGF0ZSkge1xuICBjb25zdCBzdGFydCA9IHN0YXRlLnN0YXJ0KCk7XG4gIHN0YXJ0KCk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvblBhdXNlKHN0YXRlKSB7XG4gIGNvbnN0IHBhdXNlID0gc3RhdGUucGF1c2UoKTtcbiAgcGF1c2UoKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uUmVzZXQoc3RhdGUpIHtcbiAgY29uc3QgcmVzZXQgPSBzdGF0ZS5yZXNldCgpO1xuICByZXNldCgpO1xufVxuXG4vKipcbiAqIFVzZWQgb25seSBpbiBkZXZlbG9wbWVudC5cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJGcHMoZnBzKSB7XG4gIHJldHVybiBoKCdzZWN0aW9uLmFtYXplLUFwcC1mcHNNZXRlcicsIGAke2Zwc30gRlBTYCk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRSb3dzKHJvd3MpIHtcbiAgaWYgKHJvd3MgIT0gbnVsbCAmJiAoIU51bWJlci5pc0ludGVnZXIocm93cykgfHwgcm93cyA8IDEpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsbihcbiAgICAgIGBJbnZhbGlkIFwicm93c1wiIG9wdGlvbixcbiAgICAgIGV4cGVjdGVkIHBvc2l0aXZlIGludGVnZXJcbiAgICAgIChnb3QgJHtyb3dzfSA6OiAke3R5cGVvZiByb3dzfSlgXG4gICAgKSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGFzc2VydENvbHVtbnMoY29sdW1ucykge1xuICBpZiAoY29sdW1ucyAhPSBudWxsICYmICghTnVtYmVyLmlzSW50ZWdlcihjb2x1bW5zKSB8fCBjb2x1bW5zIDwgMSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxuKFxuICAgICAgYEludmFsaWQgXCJjb2x1bW5zXCIgb3B0aW9uLFxuICAgICAgZXhwZWN0ZWQgcG9zaXRpdmUgaW50ZWdlclxuICAgICAgKGdvdCAke2NvbHVtbnN9IDo6ICR7dHlwZW9mIGNvbHVtbnN9KSlgXG4gICAgKSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgX21lbW9pemUgZnJvbSAnbWVtb2l6ZWUnO1xuaW1wb3J0IF9wcm9wcyBmcm9tICdyYW1kYS9zcmMvcHJvcHMnO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi4vZ3JpZCc7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29udHJvbHMnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi4vcmVzdWx0cyc7XG5cbmNvbnN0IG1lbW9pemUgPSBwYXJ0aWFsUmlnaHQoX21lbW9pemUsIHsgbWF4OiAxIH0pO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKG9wdHMpIHtcbiAgY29uc3QgeyB1bmRvLCByZWRvIH0gPSBvcHRzO1xuXG4gIHJldHVybiBoZy5zdGF0ZSh7XG4gICAgY29udHJvbHM6IENvbnRyb2xzKHsgdW5kbywgcmVkbyB9KSxcbiAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5jb25zdCBncmlkUHJvcHMgPSBtZW1vaXplKChjb2x1bW5zLCBtYXJnaW4sIGNlbGxzLCBib3RzLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCkgPT4ge1xuICByZXR1cm4geyBjb2x1bW5zLCBtYXJnaW4sIGNlbGxzLCBib3RzLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCB9O1xufSk7XG5cbmNvbnN0IGNvbnRyb2xzUHJvcHMgPSBtZW1vaXplKChib3RJZGVudGl0eSwgaXNSZWFkeSwgaXNSdW5uaW5nLCBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LCBhZGRCb3RSYW5kb21seSwgaXNTdGFydGVkLCB3aW5uZXJzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYm90SWRlbnRpdHksIGlzUmVhZHksIGlzUnVubmluZywgb25TdGFydCwgb25QYXVzZSwgb25SZXNldCxcbiAgICBhZGRCb3RSYW5kb21seSwgaXNTdGFydGVkLCB3aW5uZXJzLFxuICB9O1xufSk7XG5cbmNvbnN0IHJlc3VsdHNQcm9wcyA9IG1lbW9pemUoKGJvdHMsIHdpbm5lcnMpID0+IHtcbiAgcmV0dXJuIHsgYm90cywgd2lubmVycyB9O1xufSk7XG5cbkJvYXJkLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSwgcHJvcHMpIHtcbiAgY29uc3QgeyBjb250cm9scyB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ3NlY3Rpb24uYW1hemUtQm9hcmQnLFxuICAgIFtcbiAgICAgIGhnLnBhcnRpYWwocmVuZGVyQ29udGVudCwgcHJvcHMpLFxuXG4gICAgICBoZy5wYXJ0aWFsKENvbnRyb2xzLnJlbmRlciwgY29udHJvbHMsIGNvbnRyb2xzUHJvcHMoXG4gICAgICAgIC4uLl9wcm9wcyhbXG4gICAgICAgICAgJ2JvdElkZW50aXR5JywgJ2lzUmVhZHknLCAnaXNSdW5uaW5nJyxcbiAgICAgICAgICAnb25TdGFydCcsICdvblBhdXNlJywgJ29uUmVzZXQnLFxuICAgICAgICAgICdhZGRCb3RSYW5kb21seScsICdpc1N0YXJ0ZWQnLCAnd2lubmVycycsXG4gICAgICAgIF0sIHByb3BzKVxuICAgICAgKSksXG4gICAgXVxuICApO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyQ29udGVudChwcm9wcykge1xuICByZXR1cm4gaCgnLmFtYXplLUJvYXJkLWNvbnRlbnQnLCBbXG4gICAgaGcucGFydGlhbChHcmlkLnJlbmRlciwgZ3JpZFByb3BzKFxuICAgICAgLi4uX3Byb3BzKFtcbiAgICAgICAgJ2NvbHVtbnMnLCAnbWFyZ2luJywgJ2NlbGxzJywgJ2JvdHMnLCAnY2hlY2tSZWFkeVN0YXRlJywgJ2lzU3RhcnRlZCcsXG4gICAgICBdLCBwcm9wcylcbiAgICApKSxcblxuICAgIHByb3BzLndpbm5lcnMgJiYgaGcucGFydGlhbChSZXN1bHRzLnJlbmRlciwgcmVzdWx0c1Byb3BzKFxuICAgICAgcHJvcHMuYm90cywgcHJvcHMud2lubmVyc1xuICAgICkpLFxuICBdKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBoZywgeyBoIH0gZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCB7IHNlbmREb3VibGVUYXAgfSBmcm9tICcuLi9nZXN0dXJlcyc7XG5pbXBvcnQgZHJhZ1NvdXJjZUV2ZW50cyBmcm9tICcuLi9kcmFnLWV2ZW50cy9zb3VyY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdEhhbmRsZSgpIHtcbiAgcmV0dXJuIGhnLnN0YXRlKHtcbiAgICBpc0RyYWdnZWQ6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBjaGFubmVsczogeyBvbkRyYWcgfSxcbiAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5Cb3RIYW5kbGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlLCBwcm9wcykge1xuICBjb25zdCB7IGlzRHJhZ2dlZCwgY2hhbm5lbHMgfSA9IHN0YXRlO1xuICBjb25zdCB7IGJvdElkZW50aXR5LCBhZGRCb3RSYW5kb21seSwgZGlzYWJsZWQgfSA9IHByb3BzO1xuXG4gIHJldHVybiBoKFxuICAgICcuYW1hemUtQm90SGFuZGxlJyxcbiAgICBoKCdkaXYnLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiAnRHJhZyBpbiBvciBkb3VibGUgdGFwIHRvIGFkZCBhIG5ldyBCb3QnLFxuICAgICAgZHJhZ2dhYmxlOiAhZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICAgJ2FtYXplLUJvdEhhbmRsZS1kcmFnZ2FibGUnOiB0cnVlLFxuICAgICAgICAnYW1hemUtQm90SGFuZGxlLWRyYWdnYWJsZS0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2FtYXplLUJvdEhhbmRsZS1kcmFnZ2FibGUtLWRyYWdnZWQnOiBpc0RyYWdnZWQsXG4gICAgICB9KSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYigke2JvdElkZW50aXR5LmNvbG9yLmpvaW4oKX0pYCxcbiAgICAgIH0sXG4gICAgfSwgIWRpc2FibGVkID8ge1xuICAgICAgJ2V2LWV2ZW50JzogW1xuICAgICAgICBkcmFnU291cmNlRXZlbnRzKGNoYW5uZWxzLm9uRHJhZywgeyBib3RJZGVudGl0eSB9KSxcbiAgICAgICAgc2VuZERvdWJsZVRhcChhZGRCb3RSYW5kb21seSwgT2JqZWN0LmFzc2lnbih7fSwgYm90SWRlbnRpdHkpKSxcbiAgICAgIF0sXG4gICAgfSA6IHt9KSlcbiAgKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uRHJhZyhzdGF0ZSwgZGF0YSkge1xuICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgIGNhc2UgJ2RyYWdzdGFydCc6IHJldHVybiBvbkRyYWdzdGFydChzdGF0ZSwgZGF0YSk7XG4gICAgLy8gY2FzZSAnZHJhZyc6IHJldHVybiBfb25EcmFnKHN0YXRlLCBkYXRhKTtcbiAgICBjYXNlICdkcmFnZW5kJzogcmV0dXJuIG9uRHJhZ2VuZChzdGF0ZSwgZGF0YSk7XG4gICAgLy8gbm8gZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvbkRyYWdzdGFydChzdGF0ZSwgZGF0YSkge1xuICBzdGF0ZS5pc0RyYWdnZWQuc2V0KHRydWUpO1xuXG4gIGNvbnN0IGRhdGFUb1RyYW5zZmVyID0gSlNPTi5zdHJpbmdpZnkoZGF0YS5ib3RJZGVudGl0eSk7XG4gIGRhdGEuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBkYXRhVG9UcmFuc2Zlcik7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvbkRyYWdlbmQoc3RhdGUpIHtcbiAgc3RhdGUuaXNEcmFnZ2VkLnNldChmYWxzZSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWFwIGZyb20gJ3JhbWRhL3NyYy9tYXAnO1xuaW1wb3J0IGFkZEluZGV4IGZyb20gJ3JhbWRhL3NyYy9hZGRJbmRleCc7XG5pbXBvcnQgcGFydGlhbCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbCc7XG5pbXBvcnQgaGcsIHsgaCB9IGZyb20gJ21lcmN1cnknO1xuXG5pbXBvcnQgSW5kaWNhdG9yIGZyb20gJy4vaW5kaWNhdG9yJztcblxuY29uc3QgbWFwSW5kZXhlZCA9IGFkZEluZGV4KG1hcCk7XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm90SW5kaWNhdG9ycygpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5Cb3RJbmRpY2F0b3JzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjb2x1bW5zLCBib3RJbmRpY2F0b3JzKSB7XG4gIGNvbnN0IG1hcmdpbiA9IDA7IC8vIHBlcmNlbnRcbiAgY29uc3QgY2VsbFdpZHRoID0gMTAwIC8gY29sdW1ucyAtIDIgKiBtYXJnaW47IC8vIHBlcmNlbnRcblxuICBjb25zdCByZW5kZXJDZWxsID0gcGFydGlhbChcbiAgICBoZy5wYXJ0aWFsLCBJbmRpY2F0b3IucmVuZGVyLCBjb2x1bW5zLCBjZWxsV2lkdGgsIG1hcmdpblxuICApO1xuICBjb25zdCByZW5kZXJDZWxscyA9IG1hcEluZGV4ZWQocmVuZGVyQ2VsbCk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJy5hbWF6ZS1Cb3RJbmRpY2F0b3JzLnUtY2YnLFxuICAgIC8vIHsgc3R5bGU6IHsgcGFkZGluZzogYCR7bWFyZ2luIC8gMn0lYCB9IH0sIC8vUkVGLy9cbiAgICByZW5kZXJDZWxscyhib3RJbmRpY2F0b3JzKVxuICApO1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgX21lbW9pemUgZnJvbSAnbWVtb2l6ZWUnO1xuaW1wb3J0IHsgaCB9IGZyb20gJ21lcmN1cnknO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRpY2F0b3IoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuY29uc3QgaW5kaWNhdG9yU3R5bGUgPSBtZW1vaXplKChjb2x1bW5zLCB3aWR0aCwgbWFyZ2luID0gMCwgY29sKSA9PiB7XG4gIHJldHVybiAge1xuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICAncGFkZGluZy1ib3R0b20nOiBgJHt3aWR0aH0lYCxcbiAgICBtYXJnaW46IGAke21hcmdpbn0lYCxcbiAgICBjbGVhcjogY29sID09IDBcbiAgICAgID8gJ2xlZnQnXG4gICAgICA6IGNvbCA9PSBjb2x1bW5zIC0gMVxuICAgICAgICAgPyAncmlnaHQnXG4gICAgICAgICA6ICdub25lJywgLy8gVE9ETzogQ29uc2lkZXIgdG8gbm90IGFzc2lnbiBgY2xlYXI6ICdub25lJ2BcbiAgfTtcbn0pO1xuXG5JbmRpY2F0b3IucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGNvbHVtbnMsIHdpZHRoLCBtYXJnaW4sIGJvdEluZGljYXRvciwgaW5kZXgpIHtcbiAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIGNvbHVtbnMpO1xuICBjb25zdCBjb2wgPSBpbmRleCAtIHJvdyAqIGNvbHVtbnM7XG5cbiAgcmV0dXJuIGgoXG4gICAgJy5hbWF6ZS1Cb3RJbmRpY2F0b3JzLWluZGljYXRvcicsXG4gICAge1xuICAgICAga2V5OiBib3RJbmRpY2F0b3IuaWQsXG4gICAgICBzdHlsZTogaW5kaWNhdG9yU3R5bGUoY29sdW1ucywgd2lkdGgsIG1hcmdpbiwgY29sKSxcbiAgICB9LFxuICAgIGgoJy5hbWF6ZS1Cb3RJbmRpY2F0b3JzLWluZGljYXRvckNvbnRlbnQnLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2IoJHtib3RJbmRpY2F0b3IuY29sb3Iuam9pbigpfSlgLFxuICAgICAgfSxcbiAgICB9KVxuICApO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgbWFwIGZyb20gJ3JhbWRhL3NyYy9tYXAnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdyYW1kYS9zcmMvZmlsdGVyJztcbmltcG9ydCBwYXJ0aWFsIGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsJztcbmltcG9ydCBrZXlzIGZyb20gJ3JhbWRhL3NyYy9rZXlzJztcbmltcG9ydCBwaWNrQnkgZnJvbSAncmFtZGEvc3JjL3BpY2tCeSc7XG5pbXBvcnQgaGcgZnJvbSAnbWVyY3VyeSc7XG5cbmltcG9ydCB7IHJhbmRvbUludEZyb21SYW5nZSwgcmFuZG9tUmdiQ29sb3IgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdChyb3dzLCBjb2x1bW5zLCBpc0NlbGxFbmFibGVkLCBzcGVjKSB7XG4gIGNvbnN0IHRvdGFsQ2VsbHMgPSByb3dzICogY29sdW1ucztcbiAgY29uc3QgX21vdmUgPSBwYXJ0aWFsKFxuICAgIG1vdmUsIHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGlzQ2VsbEVuYWJsZWQsIGlzVmFsaWRJbmRleFxuICApO1xuXG4gIC8vIFRPRE86IENvbnNpZGVyIHRvIG5vdCBzdG9yZSBgY29sYCBhbmQgYHJvd2AsXG4gIC8vIG90aGVyd2lzZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGVtIHRvbyB3aGlsZSBcIm1vdmluZ1wiXG4gIHJldHVybiBoZy5zdHJ1Y3Qoe1xuICAgIGlkOiBoZy52YWx1ZShzcGVjLmlkKSxcbiAgICBwcmV2SW5kZXg6IHNwZWMuaW5kZXgsXG4gICAgaW5kZXg6IGhnLnZhbHVlKHNwZWMuaW5kZXgpLFxuICAgIG5leHRJbmRleDogc3BlYy5pbmRleCxcbiAgICBjb2w6IGhnLnZhbHVlKHNwZWMuY29sKSxcbiAgICByb3c6IGhnLnZhbHVlKHNwZWMucm93KSxcbiAgICBjb2xvcjogaGcudmFsdWUoc3BlYy5jb2xvciksXG4gICAgbW92ZTogaGcudmFsdWUoX21vdmUpLFxuICB9KTtcblxuICBmdW5jdGlvbiBpc1ZhbGlkSW5kZXgodG90YWxJbmRleGVzLCBwcmV2SW5kZXgsIGluZGV4LCBuZXh0SW5kZXgpIHtcbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2SW5kZXgpIHtcbiAgICAgIGlmICh0b3RhbEluZGV4ZXMgPiAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuLy8gVE9ETzogQ29uc2lkZXIgdG8gZ2V0IGNvbG9yIGZyb20gdXVpZCBjb252ZXJzaW9uXG5Cb3QuY3JlYXRlSWRlbnRpdHkgPSBmdW5jdGlvbiBjcmVhdGVJZGVudGl0eSgpIHtcbiAgY29uc3QgaWQgPSB1dWlkLnY0KCk7XG5cbiAgLy8gVE9ETzogUHJldmVudCBmcm9tIGNyZWF0aW5nIGR1cGxpY2F0ZWQgY29sb3JzLiBDb25zaWRlciBhbHNvXG4gIC8vIHRvIG5vdCBjcmVhdGUgdmFyeSBzaW1pbGFyIGNvbG9yc1xuICBjb25zdCBjb2xvciA9IHJhbmRvbVJnYkNvbG9yKHtcbiAgICByOiBbMCwgMTgwXSxcbiAgICBnOiBbMCwgMTIwXSxcbiAgICBiOiBbMCwgMjIwXSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgaWQsIGNvbG9yIH07XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBtb3ZlKHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGlzQ2VsbEVuYWJsZWQsIGlzVmFsaWRJbmRleCwgcHJldkluZGV4LCBpbmRleCkge1xuICBjb25zdCBkaXJlY3Rpb25zID0gZ2V0QXZhaWxhYmxlRGlyZWN0aW9ucyh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCk7XG5cbiAgY29uc3QgaW5kZXhlcyA9IGdldEF2YWlsYWJsZUluZGV4ZXMoY29sdW1ucywgaW5kZXgsIGRpcmVjdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIGZpbHRlckluZGV4ZXMoYWxsKSB7XG4gICAgY29uc3QgZmlsdGVyRW5hYmxlZCA9IGZpbHRlcihpc0NlbGxFbmFibGVkKTtcblxuICAgIGNvbnN0IGVuYWJsZWQgPSBmaWx0ZXJFbmFibGVkKGFsbCk7XG5cbiAgICBjb25zdCBmaWx0ZXJWYWxpZCA9IGZpbHRlcihcbiAgICAgIHBhcnRpYWwoaXNWYWxpZEluZGV4LCBlbmFibGVkLmxlbmd0aCwgcHJldkluZGV4LCBpbmRleClcbiAgICApO1xuXG4gICAgcmV0dXJuIGZpbHRlclZhbGlkKGVuYWJsZWQpO1xuICB9XG5cbiAgY29uc3QgdmFsaWRJbmRleGVzID0gZmlsdGVySW5kZXhlcyhpbmRleGVzKTtcblxuICBjb25zdCBuZXh0SW5kZXggPSBwaWNrUmFuZG9tSW5kZXgodmFsaWRJbmRleGVzKTtcblxuICByZXR1cm4gbmV4dEluZGV4ICE9PSBudWxsID8gbmV4dEluZGV4IDogaW5kZXg7XG59O1xuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlRGlyZWN0aW9ucyh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCkge1xuICBjb25zdCB2YWxpZERpcmVjdGlvbnMgPSBwaWNrVmFsaWREaXJlY3Rpb25zKHtcbiAgICB1OiAhaXNUb3BCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCksXG4gICAgcjogIWlzUmlnaHRCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCksXG4gICAgZDogIWlzQm90dG9tQm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpLFxuICAgIGw6ICFpc0xlZnRCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCksXG4gIH0pO1xuXG4gIHJldHVybiBrZXlzKHZhbGlkRGlyZWN0aW9ucyk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5jb25zdCBpc1ZhbGlkRGlyZWN0aW9uID0gdmFsID0+IHZhbCA9PT0gdHJ1ZTtcbmNvbnN0IHBpY2tWYWxpZERpcmVjdGlvbnMgPSBwaWNrQnkoaXNWYWxpZERpcmVjdGlvbik7XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVJbmRleGVzKGNvbHVtbnMsIGluZGV4LCBkaXJlY3Rpb25zKSB7XG4gIGNvbnN0IGluZGV4QnlEaXJlY3Rpb24gPSBwYXJ0aWFsKGdldEluZGV4QnlEaXJlY3Rpb24sIGNvbHVtbnMsIGluZGV4KTtcbiAgcmV0dXJuIG1hcChpbmRleEJ5RGlyZWN0aW9uLCBkaXJlY3Rpb25zKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGdldEluZGV4QnlEaXJlY3Rpb24oY29sdW1ucywgaW5kZXgsIGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3UnOiByZXR1cm4gbW92ZVVwKGNvbHVtbnMsIGluZGV4KTtcbiAgICBjYXNlICdyJzogcmV0dXJuIG1vdmVSaWdodChjb2x1bW5zLCBpbmRleCk7XG4gICAgY2FzZSAnZCc6IHJldHVybiBtb3ZlRG93bihjb2x1bW5zLCBpbmRleCk7XG4gICAgY2FzZSAnbCc6IHJldHVybiBtb3ZlTGVmdChjb2x1bW5zLCBpbmRleCk7XG4gICAgLy8gbm8gZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBwaWNrUmFuZG9tSW5kZXgoaW5kZXhlcykge1xuICBjb25zdCB0b3RhbEluZGV4ZXMgPSBpbmRleGVzLmxlbmd0aDtcbiAgcmV0dXJuIHRvdGFsSW5kZXhlc1xuICAgID8gaW5kZXhlc1tyYW5kb21JbnRGcm9tUmFuZ2UoMCwgdG90YWxJbmRleGVzIC0gMSldXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gbW92ZVVwKGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCAtIGNvbHVtbnM7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBtb3ZlUmlnaHQoY29sdW1ucywgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4ICsgMTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG1vdmVEb3duKGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCArIGNvbHVtbnM7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBtb3ZlTGVmdChjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggLSAxO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCkge1xuICByZXR1cm4gaXNUb3BCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleClcbiAgICB8fCBpc1JpZ2h0Qm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpXG4gICAgfHwgaXNCb3R0b21Cb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleClcbiAgICB8fCBpc0xlZnRCb3VuZGFyeSh0b3RhbENlbGxzLCBjb2x1bW5zLCBpbmRleCk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBpc1RvcEJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA8IGNvbHVtbnM7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBpc1JpZ2h0Qm91bmRhcnkodG90YWxDZWxscywgY29sdW1ucywgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4ID09IGNvbHVtbnMgLSAxXG4gICAgfHwgKGluZGV4ICsgMSkgJSBjb2x1bW5zID09IDA7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBpc0JvdHRvbUJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSB0b3RhbENlbGxzIC0gY29sdW1ucztcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIGlzTGVmdEJvdW5kYXJ5KHRvdGFsQ2VsbHMsIGNvbHVtbnMsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA9PSAwXG4gICAgfHwgaW5kZXggPT0gY29sdW1uc1xuICAgIHx8IGluZGV4ICUgY29sdW1ucyA9PSAwO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgc2VuZFRhcFN0YXJ0LCBzZW5kVGFwRW5kLCBzZW5kVGFwQ2FuY2VsIH0gZnJvbSAnLi4vZ2VzdHVyZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgcmV0dXJuIGhnLnN0YXRlKHtcbiAgICBpc0FjdGl2ZTogaGcudmFsdWUoZmFsc2UpLFxuICAgIGNoYW5uZWxzOiB7IG9uVGFwU3RhcnQsIG9uVGFwRW5kLCBvblRhcENhbmNlbCB9LFxuICB9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbkJ1dHRvbi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUsIHByb3BzID0ge30pIHtcbiAgY29uc3Qge1xuICAgIFsnZXYtZXZlbnQnXTogZXZFdmVudCxcbiAgICBbJ2V2LWNsaWNrJ106IGV2Q2xpY2ssXG4gICAgaXNUYXBwZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3QsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBkZWZhdWx0SGFuZGxlcnMgPSBbXG4gICAgc2VuZFRhcFN0YXJ0KHN0YXRlLmNoYW5uZWxzLm9uVGFwU3RhcnQpLFxuICAgIHNlbmRUYXBFbmQoc3RhdGUuY2hhbm5lbHMub25UYXBFbmQpLFxuICAgIHNlbmRUYXBDYW5jZWwoc3RhdGUuY2hhbm5lbHMub25UYXBDYW5jZWwpLFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZXJzID0gZGVmYXVsdEhhbmRsZXJzLmNvbmNhdChcbiAgICBldkV2ZW50ID8gQXJyYXkuaXNBcnJheShldkV2ZW50KSA/IGV2RXZlbnQgOiBbZXZFdmVudF0gOiBbXVxuICApO1xuXG4gIHJldHVybiBoKFxuICAgICdidXR0b24uYW1hemUtQnV0dG9uJyxcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgY2xhc3NOYW1lOiBjeChcbiAgICAgICAgICBzdGF0ZS5pc0FjdGl2ZSAmJiAnYW1hemUtQnV0dG9uLS1hY3RpdmUnLFxuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGV2Q2xpY2tcbiAgICAgICAgPyB7ICdldi1jbGljayc6IGV2Q2xpY2sgfVxuICAgICAgICA6IHsgJ2V2LWV2ZW50JzogaGFuZGxlcnMgfVxuICAgICksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uVGFwU3RhcnQoc3RhdGUpIHtcbiAgc3RhdGUuaXNBY3RpdmUuc2V0KHRydWUpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25UYXBFbmQoc3RhdGUpIHtcbiAgc3RhdGUuaXNBY3RpdmUuc2V0KGZhbHNlKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uVGFwQ2FuY2VsKHN0YXRlKSB7XG4gIHN0YXRlLmlzQWN0aXZlLnNldChmYWxzZSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgaGcsIHsgaCB9IGZyb20gJ21lcmN1cnknO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gJ21lbW9pemVlJztcbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgX3Byb3BzIGZyb20gJ3JhbWRhL3NyYy9wcm9wcyc7XG5cbmltcG9ydCB7IHNlbmRUYXAgfSBmcm9tICcuLi9nZXN0dXJlcyc7XG5pbXBvcnQgZHJhZ1RhcmdldEV2ZW50cyBmcm9tICcuLi9kcmFnLWV2ZW50cy90YXJnZXQnO1xuaW1wb3J0IFRpbGUgZnJvbSAnLi4vdGlsZSc7XG5cbmNvbnN0IG1lbW9pemUgPSBwYXJ0aWFsUmlnaHQoX21lbW9pemUsIHsgbWF4OiAxIH0pO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGwoY29sdW1ucywgaW5kZXgsIG9uQWRkQm90KSB7XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2x1bW5zKTtcbiAgY29uc3QgY29sID0gaW5kZXggLSByb3cgKiBjb2x1bW5zO1xuXG4gIGNvbnN0IHN0YXRlID0gaGcuc3RhdGUoe1xuICAgIGNvbHVtbnM6IGhnLnZhbHVlKGNvbHVtbnMpLFxuICAgIGluZGV4OiBoZy52YWx1ZShpbmRleCksXG4gICAgcm93OiBoZy52YWx1ZShyb3cpLFxuICAgIGNvbDogaGcudmFsdWUoY29sKSxcbiAgICBpc0FjdGl2ZTogaGcudmFsdWUoZmFsc2UpLFxuICAgIGlzRW50cnk6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc0V4aXQ6IGhnLnZhbHVlKGZhbHNlKSxcbiAgICBpc0VuYWJsZWQ6IGhnLnZhbHVlKGlzRW5hYmxlZCksXG4gICAgaXNEcmFnSG92ZXJlZDogaGcudmFsdWUoZmFsc2UpLFxuICAgIG9uRHJvcDogaGcudmFsdWUob25Ecm9wKSxcbiAgICBhZGRCb3Q6IGhnLnZhbHVlKGFkZEJvdCksXG4gICAgY2hhbm5lbHM6IHsgb25UYXAsIG9uRHJhZyB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHN0YXRlLmlzQWN0aXZlKClcbiAgICAgIHx8IHN0YXRlLmlzRW50cnkoKVxuICAgICAgfHwgc3RhdGUuaXNFeGl0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRCb3QoYm90SWRlbnRpdHkpIHtcbiAgICAvLyBUT0RPOiBDaGVjayBpZiBpdCdzIGJldHRlciB0byBub3Qgc3RvcmUgYHJvd2AgYW5kIGBjb2xgLFxuICAgIC8vIGluc2lkZSBgQm90YCBpbnN0YW5jZVxuICAgIG9uQWRkQm90KE9iamVjdC5hc3NpZ24oe30sIGJvdElkZW50aXR5LCB7IGluZGV4LCByb3csIGNvbCB9KSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5jb25zdCBjZWxsU3R5bGUgPSBtZW1vaXplKChjb2x1bW5zLCBjb2wsIHdpZHRoLCBtYXJnaW4gPSAwKSA9PiB7XG4gIHJldHVybiAge1xuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICAncGFkZGluZy1ib3R0b20nOiBgJHt3aWR0aH0lYCxcbiAgICBtYXJnaW46IGAke21hcmdpbn0lYCxcbiAgICBjbGVhcjogY29sID09IDBcbiAgICAgID8gJ2xlZnQnXG4gICAgICA6IGNvbCA9PSBjb2x1bW5zIC0gMVxuICAgICAgICAgPyAncmlnaHQnXG4gICAgICAgICA6ICdub25lJywgLy8gVE9ETzogQ29uc2lkZXIgdG8gbm90IGFzc2lnbiBgY2xlYXI6ICdub25lJ2BcbiAgfTtcbn0pO1xuXG5jb25zdCB0aWxlUHJvcHMgPSBtZW1vaXplKChpc0FjdGl2ZSwgaXNFbnRyeSwgaXNFeGl0LCBpc0RyYWdIb3ZlcmVkLCBib3RJbmRpY2F0b3JzKSA9PiB7XG4gIHJldHVybiB7IGlzQWN0aXZlLCBpc0VudHJ5LCBpc0V4aXQsIGlzRHJhZ0hvdmVyZWQsIGJvdEluZGljYXRvcnMgfTtcbn0pO1xuXG5DZWxsLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSwgcHJvcHMsIGJvdEluZGljYXRvcnMpIHtcbiAgY29uc3QgeyBpc0VudHJ5LCBjaGFubmVscyB9ID0gc3RhdGU7XG5cbiAgY29uc3Qgc3VyZmFjZVByb3BzID0gcHJvcHMuaXNTdGFydGVkID8ge30gOiAhaXNFbnRyeVxuICAgID8ge1xuICAgICAgJ2V2LWV2ZW50JzogW1xuICAgICAgICBzZW5kVGFwKGNoYW5uZWxzLm9uVGFwLCB7IGJvdEluZGljYXRvcnMgfSksXG4gICAgICAgIHNlbmRUYXAocHJvcHMuY2hlY2tSZWFkeVN0YXRlKSxcbiAgICAgIF0sXG4gICAgfVxuICAgIDoge1xuICAgICAgJ2V2LWV2ZW50JzogW1xuICAgICAgICBzZW5kVGFwKGNoYW5uZWxzLm9uVGFwLCB7IGJvdEluZGljYXRvcnMgfSksXG4gICAgICAgIGRyYWdUYXJnZXRFdmVudHMoY2hhbm5lbHMub25EcmFnKSxcbiAgICAgICAgc2VuZFRhcChwcm9wcy5jaGVja1JlYWR5U3RhdGUpLFxuICAgICAgXSxcbiAgICB9O1xuXG4gIHJldHVybiBoKFxuICAgICcuYW1hemUtQ2VsbCcsXG4gICAge1xuICAgICAgc3R5bGU6IGNlbGxTdHlsZShcbiAgICAgICAgLi4uX3Byb3BzKFsnY29sdW1ucycsICdjb2wnXSwgc3RhdGUpLFxuICAgICAgICAuLi5fcHJvcHMoWyd3aWR0aCcsICdtYXJnaW4nXSwgcHJvcHMpXG4gICAgICApLFxuICAgIH0sXG4gICAgW1xuICAgICAgaGcucGFydGlhbChUaWxlLnJlbmRlciwgdGlsZVByb3BzKC4uLl9wcm9wcyhbXG4gICAgICAgICdpc0FjdGl2ZScsICdpc0VudHJ5JywgJ2lzRXhpdCcsICdpc0RyYWdIb3ZlcmVkJyxcbiAgICAgIF0sIHN0YXRlKSwgYm90SW5kaWNhdG9ycykpLFxuXG4gICAgICBoKCcuYW1hemUtQ2VsbC1zdXJmYWNlJywgc3VyZmFjZVByb3BzKSxcbiAgICBdXG4gICk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvblRhcChzdGF0ZSwgeyBib3RJbmRpY2F0b3JzIH0pIHtcbiAgLy8gVE9ETzogQ29uc2lkZXIgdG8gcmVuYW1lIGBzbmFwc2hvdGBcbiAgY29uc3Qgc25hcHNob3QgPSBzdGF0ZSgpO1xuXG4gIGlmIChib3RJbmRpY2F0b3JzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIGlmICghc25hcHNob3QuaXNBY3RpdmUpIHtcbiAgICBzdGF0ZS5pc0FjdGl2ZS5zZXQodHJ1ZSk7XG4gIH1cblxuICBlbHNlIGlmIChzbmFwc2hvdC5pc0V4aXQpIHtcbiAgICBzdGF0ZS5zZXQoT2JqZWN0LmFzc2lnbih7fSwgc25hcHNob3QsIHsgaXNFeGl0OiBmYWxzZSwgaXNBY3RpdmU6IGZhbHNlIH0pKTtcbiAgfVxuXG4gIGVsc2UgaWYgKHNuYXBzaG90LmlzRW50cnkpIHtcbiAgICBzdGF0ZS5zZXQoT2JqZWN0LmFzc2lnbih7fSwgc25hcHNob3QsIHsgaXNFbnRyeTogZmFsc2UsIGlzRXhpdDogdHJ1ZSB9KSk7XG4gIH1cblxuICBlbHNlIHtcbiAgICBzdGF0ZS5pc0VudHJ5LnNldCh0cnVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25EcmFnKHN0YXRlLCBkYXRhKSB7XG4gIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgY2FzZSAnZHJhZ2VudGVyJzogcmV0dXJuIG9uRHJhZ2VudGVyKHN0YXRlLCBkYXRhKTtcbiAgICAvLyBjYXNlICdkcmFnb3Zlcic6IHJldHVybiBvbkRyYWdvdmVyKHN0YXRlLCBkYXRhKTtcbiAgICBjYXNlICdkcmFnbGVhdmUnOiByZXR1cm4gb25EcmFnbGVhdmUoc3RhdGUsIGRhdGEpO1xuICAgIGNhc2UgJ2Ryb3AnOiByZXR1cm4gb25Ecm9wKHN0YXRlLCBkYXRhKTtcbiAgICAvLyBubyBkZWZhdWx0XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIG9uRHJhZ2VudGVyKHN0YXRlKSB7XG4gIHN0YXRlLmlzRHJhZ0hvdmVyZWQuc2V0KHRydWUpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25EcmFnbGVhdmUoc3RhdGUpIHtcbiAgc3RhdGUuaXNEcmFnSG92ZXJlZC5zZXQoZmFsc2UpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gb25Ecm9wKHN0YXRlLCBkYXRhKSB7XG4gIHN0YXRlLmlzRHJhZ0hvdmVyZWQuc2V0KGZhbHNlKTtcblxuICBjb25zdCBib3RJZGVudGl0eSA9IEpTT04ucGFyc2UoZGF0YS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpKTtcbiAgY29uc3QgYWRkQm90ID0gc3RhdGUuYWRkQm90KCk7XG5cbiAgYWRkQm90KGJvdElkZW50aXR5KTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgX21lbW9pemUgZnJvbSAnbWVtb2l6ZWUnO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IHsgc2VuZFRhcCB9IGZyb20gJy4uL2dlc3R1cmVzJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2xvZ28nO1xuaW1wb3J0IEJvdEhhbmRsZSBmcm9tICcuLi9ib3QtaGFuZGxlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcblxuY29uc3QgbWVtb2l6ZSA9IHBhcnRpYWxSaWdodChfbWVtb2l6ZSwgeyBtYXg6IDEgfSk7XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJvbHMoeyB1bmRvLCByZWRvIH0pIHtcbiAgcmV0dXJuIGhnLnN0YXRlKHtcbiAgICBzdGFydFBhdXNlQnRuOiBCdXR0b24oKSxcbiAgICByZXNldEJ0bjogQnV0dG9uKCksXG4gICAgdW5kb0J0bjogQnV0dG9uKCksXG4gICAgcmVkb0J0bjogQnV0dG9uKCksXG4gICAgYm90SGFuZGxlOiBCb3RIYW5kbGUoKSxcbiAgICBjaGFubmVsczogeyB1bmRvLCByZWRvIH0sXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuY29uc3Qgc3RhcnRQYXVzZUJ0blByb3BzID0gbWVtb2l6ZSgoaXNSZWFkeSwgaXNSdW5uaW5nLCBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LCB3aW5uZXJzKSA9PiB7XG4gIGNvbnN0IGRpc2FibGVkID0gIWlzUmVhZHk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgIGRpc2FibGVkLFxuICAgIGNsYXNzTmFtZTogaXNSdW5uaW5nID8gJ2FtYXplLUJ1dHRvbi0tcGF1c2UnIDogJ2FtYXplLUJ1dHRvbi0tc3RhcnQnLFxuICAgIGNoaWxkcmVuOiB3aW5uZXJzID8gJ05ldycgOiBpc1J1bm5pbmcgPyAnUGF1c2UnIDogJ1N0YXJ0JyxcbiAgfSwgIWRpc2FibGVkID8ge1xuICAgICdldi1ldmVudCc6IHNlbmRUYXAod2lubmVycyA/IG9uUmVzZXQgOiBpc1J1bm5pbmcgPyBvblBhdXNlIDogb25TdGFydCksXG4gIH0gOiB7fSk7XG59KTtcblxuY29uc3QgcmVzZXRCdG5Qcm9wcyA9IG1lbW9pemUoKGlzUnVubmluZywgb25SZXNldCwgd2lubmVycykgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IGlzUnVubmluZyB8fCB3aW5uZXJzICYmIHdpbm5lcnMubGVuZ3RoO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICBkaXNhYmxlZCxcbiAgICBjaGlsZHJlbjogJ1Jlc2V0JyxcbiAgfSwgIWRpc2FibGVkID8ge1xuICAgICdldi1ldmVudCc6IHNlbmRUYXAob25SZXNldCksXG4gIH0gOiB7fSk7XG59KTtcblxuY29uc3QgdW5kb0J0blByb3BzID0gbWVtb2l6ZSgodW5kbywgaXNTdGFydGVkKSA9PiB7XG4gIGNvbnN0IGRpc2FibGVkID0gaXNTdGFydGVkO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICBkaXNhYmxlZCxcbiAgICBjaGlsZHJlbjogJ1VuZG8nLFxuICB9LCAhZGlzYWJsZWQgPyB7XG4gICAgJ2V2LWNsaWNrJzogaGcuc2VuZENsaWNrKHVuZG8pLFxuICB9IDoge30pO1xufSk7XG5cbmNvbnN0IHJlZG9CdG5Qcm9wcyA9IG1lbW9pemUoKHJlZG8sIGlzU3RhcnRlZCkgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IGlzU3RhcnRlZDtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW46ICdSZWRvJyxcbiAgfSwgIWRpc2FibGVkID8ge1xuICAgICdldi1jbGljayc6IGhnLnNlbmRDbGljayhyZWRvKSxcbiAgfSA6IHt9KTtcbn0pO1xuXG5jb25zdCBib3RIYW5kbGVQcm9wcyA9IG1lbW9pemUoKGJvdElkZW50aXR5LCBhZGRCb3RSYW5kb21seSwgaXNTdGFydGVkKSA9PiB7XG4gIGNvbnN0IGRpc2FibGVkID0gaXNTdGFydGVkO1xuXG4gIHJldHVybiB7IGJvdElkZW50aXR5LCBhZGRCb3RSYW5kb21seSwgZGlzYWJsZWQgfTtcbn0pO1xuXG5Db250cm9scy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUsIHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBib3RJZGVudGl0eSxcbiAgICBpc1JlYWR5LCBpc1N0YXJ0ZWQsIGlzUnVubmluZyxcbiAgICBvblN0YXJ0LCBvblBhdXNlLCBvblJlc2V0LFxuICAgIHdpbm5lcnMsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gaCgnc2VjdGlvbi5hbWF6ZS1Db250cm9scy51LWNmJywgW1xuICAgIGhnLnBhcnRpYWwoTG9nby5yZW5kZXIpLFxuXG4gICAgaCgnLmFtYXplLUNvbnRyb2xzLWJ1dHRvbnMudS1jZicsIFtcbiAgICAgIGhnLnBhcnRpYWwoXG4gICAgICAgIEJ1dHRvbi5yZW5kZXIsXG4gICAgICAgIHN0YXRlLnN0YXJ0UGF1c2VCdG4sXG4gICAgICAgIHN0YXJ0UGF1c2VCdG5Qcm9wcyhpc1JlYWR5LCBpc1J1bm5pbmcsIG9uU3RhcnQsIG9uUGF1c2UsIG9uUmVzZXQsIHdpbm5lcnMpXG4gICAgICApLFxuXG4gICAgICBoZy5wYXJ0aWFsKFxuICAgICAgICBCdXR0b24ucmVuZGVyLFxuICAgICAgICBzdGF0ZS5yZXNldEJ0bixcbiAgICAgICAgcmVzZXRCdG5Qcm9wcyhpc1J1bm5pbmcsIG9uUmVzZXQsIHdpbm5lcnMpXG4gICAgICApLFxuXG4gICAgICBoZy5wYXJ0aWFsKFxuICAgICAgICBCdXR0b24ucmVuZGVyLFxuICAgICAgICBzdGF0ZS51bmRvQnRuLFxuICAgICAgICB1bmRvQnRuUHJvcHMoc3RhdGUuY2hhbm5lbHMudW5kbywgaXNTdGFydGVkKVxuICAgICAgKSxcblxuICAgICAgaGcucGFydGlhbChcbiAgICAgICAgQnV0dG9uLnJlbmRlcixcbiAgICAgICAgc3RhdGUucmVkb0J0bixcbiAgICAgICAgcmVkb0J0blByb3BzKHN0YXRlLmNoYW5uZWxzLnJlZG8sIGlzU3RhcnRlZClcbiAgICAgICksXG4gICAgXSksXG5cbiAgICBoZy5wYXJ0aWFsKFxuICAgICAgQm90SGFuZGxlLnJlbmRlcixcbiAgICAgIHN0YXRlLmJvdEhhbmRsZSxcbiAgICAgIGJvdEhhbmRsZVByb3BzKGJvdElkZW50aXR5LCBwcm9wcy5hZGRCb3RSYW5kb21seSwgaXNTdGFydGVkKVxuICAgICksXG4gIF0pO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnIGZyb20gJ21lcmN1cnknO1xuXG4vKipcbiAqIERyYWcgZXZlbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFNPVVJDRV9FVkVOVFMgPSBbJ2RyYWdzdGFydCcsICdkcmFnJywgJ2RyYWdlbmQnXTtcbmV4cG9ydCBjb25zdCBUQVJHRVRfRVZFTlRTID0gWydkcmFnZW50ZXInLCAnZHJhZ292ZXInLCAnZHJhZ2xlYXZlJywgJ2Ryb3AnXTtcbmV4cG9ydCBjb25zdCBFVkVOVFMgPSBTT1VSQ0VfRVZFTlRTLmNvbmNhdChUQVJHRVRfRVZFTlRTKTtcblxuLyoqXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRzID0ge30pIHtcbiAgY29uc3QgbW9kZSA9IG9wdHMubW9kZTtcbiAgY29uc3QgZXZlbnRzID0gb3B0cy5ldmVudHM7XG5cbiAgY29uc3QgZGVsZWdhdG9yID0gaGcuRGVsZWdhdG9yKCk7XG5cbiAgcmV0dXJuIHsgbGlzdGVuVG8sIHVubGlzdGVuVG8gfTtcblxuICBmdW5jdGlvbiBsaXN0ZW5UbygpIHtcbiAgICBFVkVOVFMuZm9yRWFjaChfbGlzdGVuVG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5saXN0ZW5UbygpIHtcbiAgICBFVkVOVFMuZm9yRWFjaChfdW5saXN0ZW5Ubyk7XG4gIH1cblxuICBmdW5jdGlvbiBfbGlzdGVuVG8obmFtZSkge1xuICAgIGlmICghaXNFdmVudEVuYWJsZWQobmFtZSkpIHJldHVybjtcbiAgICBkZWxlZ2F0b3IubGlzdGVuVG8obmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdW5saXN0ZW5UbyhuYW1lKSB7XG4gICAgaWYgKCFpc0V2ZW50RW5hYmxlZChuYW1lKSkgcmV0dXJuO1xuICAgIGRlbGVnYXRvci51bmxpc3RlblRvKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFdmVudEVuYWJsZWQobmFtZSkge1xuICAgIGlmIChldmVudHMgJiYgIX5ldmVudHMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghbW9kZSkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAobW9kZSkge1xuICAgICAgaWYgKG1vZGUgPT09ICdzb3VyY2UnICYmICF+U09VUkNFX0VWRU5UUy5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGUgPT09ICd0YXJnZXQnICYmICF+VEFSR0VUX0VWRU5UUy5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnIGZyb20gJ21lcmN1cnknO1xuXG5pbXBvcnQgeyBTT1VSQ0VfRVZFTlRTIH0gZnJvbSAnLi9zZXR1cCc7XG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBoZy5CYXNlRXZlbnQoaGFuZGxlRHJhZyk7XG5cbi8vIFRPRE86IEhhbmRsZSBhbHNvIFwiZHJhZ1wiIGV2ZW50LiBGaXJzdCBuZWVkIHRvIGJlIGFibGUgdG8gc3BlY2lmeVxuLy8gdGhlIGV2ZW50cyB0aGF0IHdlIHdhbnQgdG8gbGlzdGVudCB0bywgdmlhIGB0aGlzLmRhdGFgLlxuLy8gLy8gSWYgbm90IHNwZWNpZmllZCBsaXN0ZW4gdG8gYWxsIGBTT1VSQ0VfRVZFTlRTYFxuLy8gVE9ETzogQ29uc2lkZXIgdG8gbW92ZSBzb21lIGZ1bmN0aW9ucyB0byB0aGUgb3V0ZXIgc2NvcGVcbmZ1bmN0aW9uIGhhbmRsZURyYWcoZXYsIGJyb2FkY2FzdCkge1xuICAvLyBJZ25vcmUgb3RoZXIgZXZlbnRzXG4gIGlmICghaXNEcmFnRXZlbnQoZXYpKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgY29uc3QgZGVsZWdhdG9yID0gaGcuRGVsZWdhdG9yKCk7XG4gIGNvbnN0IF90YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuICBsZXQgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgLy8gVE9ETzogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG5cbiAgaWYgKGV2LnR5cGUgPT09ICdkcmFnc3RhcnQnKSB7XG4gICAgY29uc3QgdHJpZ2dlckRyYWdzdGFydCA9ICFsaXN0ZW5lcnNBZGRlZDtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICBpZiAodHJpZ2dlckRyYWdzdGFydCkgZHJhZ3N0YXJ0KGV2KTtcbiAgfVxuXG4gIC8vIFRPRE86IENoZWNrIGlmIGNhbiByZW1vdmUgYHRhcmdldGAgZnJvbSBicm9hZGNhc3RlZCBkYXRhLFxuICAvLyBmcm9tIGFsbC9zb21lIGhhbmRsZXJzXG4gIGZ1bmN0aW9uIGRyYWdzdGFydChlKSB7XG4gICAgaWYgKCFpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZS5fcmF3RXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgdHlwZTogJ2RyYWdzdGFydCcsXG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgZGF0YVRyYW5zZmVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdlbmQoZSkge1xuICAgIGlmICghaXNSb290RWxlbWVudE9mRXZlbnQoZSkpIHJldHVybjtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgdHlwZTogJ2RyYWdlbmQnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREYXRhKGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgYWRkaXRpb25hbCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Jvb3RFbGVtZW50T2ZFdmVudChlKSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0ID09PSBfdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmIChsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdzdGFydCk7XG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnZW5kKTtcbiAgICBsaXN0ZW5lcnNBZGRlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdzdGFydCk7XG4gICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnZW5kKTtcbiAgICBsaXN0ZW5lcnNBZGRlZCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBpc0RyYWdFdmVudChldikge1xuICByZXR1cm4gflNPVVJDRV9FVkVOVFMuaW5kZXhPZihldi50eXBlKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBoZyBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IHsgVEFSR0VUX0VWRU5UUyB9IGZyb20gJy4vc2V0dXAnO1xuXG4vKipcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgaGcuQmFzZUV2ZW50KGhhbmRsZURyYWcpO1xuXG4vLyBUT0RPOiBBbGxvdyB0byBiZSBhYmxlIHRvIHNwZWNpZnkgdGhlIGV2ZW50cyB0aGF0IHdlIHdhbnRcbi8vIHRvIGxpc3RlbnQgdG8sIHZpYSBgdGhpcy5kYXRhYC5cbi8vIElmIG5vdCBzcGVjaWZpZWQgbGlzdGVuIHRvIGFsbCBgVEFSR0VUX0VWRU5UU2BcbmZ1bmN0aW9uIGhhbmRsZURyYWcoZXYsIGJyb2FkY2FzdCkge1xuICAvLyBJZ25vcmUgb3RoZXIgZXZlbnRzXG4gIGlmICghaXNEcmFnRXZlbnQoZXYpKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgY29uc3QgZGVsZWdhdG9yID0gaGcuRGVsZWdhdG9yKCk7XG4gIGNvbnN0IF90YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0LyogfHwgZXYudGFyZ2V0Ki87XG4gIGxldCBsaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAvLyBUT0RPOiBDaGVjayBpZiBjYW4gcmVtb3ZlIHRoaXNcblxuICBpZiAoZXYudHlwZSA9PT0gJ2RyYWdlbnRlcicpIHtcbiAgICBjb25zdCB0cmlnZ2VyRHJhZ2VudGVyID0gIWxpc3RlbmVyc0FkZGVkO1xuICAgIGFkZExpc3RlbmVycygpO1xuICAgIGlmICh0cmlnZ2VyRHJhZ2VudGVyKSBkcmFnZW50ZXIoZXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ2VudGVyKGUpIHtcbiAgICBpZiAoIWlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpKSByZXR1cm47XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICB0eXBlOiAnZHJhZ2VudGVyJyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ292ZXIoZSkge1xuICAgIGlmICghaXNSb290RWxlbWVudE9mRXZlbnQoZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHJhdyA9IGUuX3Jhd0V2ZW50O1xuXG4gICAgLy8gQWxsb3dzIHVzIHRvIGRyb3BcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVsc2UgaWYgKHJhdy5wcmV2ZW50RGVmYXVsdCkgcmF3LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByYXcuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG5cbiAgICAvLyBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgLy8gICB0eXBlOiAnZHJhZ292ZXInLFxuICAgIC8vICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAvLyAgIGRhdGFUcmFuc2ZlcjogcmF3LmRhdGFUcmFuc2ZlcixcbiAgICAvLyB9KSk7XG4gICAgLy8gLy9SRUYvL1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ2xlYXZlKGUpIHtcbiAgICBpZiAoIWlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgIHR5cGU6ICdkcmFnbGVhdmUnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgICBpZiAoIWlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpKSByZXR1cm47XG5cbiAgICBjb25zdCByYXcgPSBlLl9yYXdFdmVudDtcblxuICAgIC8vIFN0b3BzIHRoZSBicm93c2VyIGZyb20gcmVkaXJlY3RpbmdcbiAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZWxzZSBpZiAocmF3LnN0b3BQcm9wYWdhdGlvbikgcmF3LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICB0eXBlOiAnZHJvcCcsXG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgZGF0YVRyYW5zZmVyOiByYXcuZGF0YVRyYW5zZmVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERhdGEoYWRkaXRpb25hbCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBhZGRpdGlvbmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUm9vdEVsZW1lbnRPZkV2ZW50KGUpIHtcbiAgICByZXR1cm4gZS50YXJnZXQgPT09IF90YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKGxpc3RlbmVyc0FkZGVkKSByZXR1cm47XG5cbiAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ2VudGVyKTtcbiAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3Zlcik7XG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdsZWF2ZSk7XG4gICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgICBsaXN0ZW5lcnNBZGRlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFsaXN0ZW5lcnNBZGRlZCkgcmV0dXJuO1xuXG4gICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdlbnRlcik7XG4gICAgZGVsZWdhdG9yLnJlbW92ZUdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXIpO1xuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnbGVhdmUpO1xuICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNEcmFnRXZlbnQoZXYpIHtcbiAgcmV0dXJuIH5UQVJHRVRfRVZFTlRTLmluZGV4T2YoZXYudHlwZSk7XG59XG4iLCIvKipcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9HaWFubHVjYUd1YXJpbmkvVG9jY2EuanMsIE1JVCBsaWNlbnNlXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnIGZyb20gJ21lcmN1cnknO1xuXG4vKipcbiAqXG4gKi9cblxuY29uc3QgVE9VQ0hfRVZFTlRTID0gW1xuICAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLFxuXTtcblxuY29uc3QgTU9VU0VfRVZFTlRTID0gW1xuICAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ21vdXNlb3V0Jyxcbl07XG5cbmNvbnN0IEVWRU5UUyA9IFRPVUNIX0VWRU5UUy5jb25jYXQoTU9VU0VfRVZFTlRTKTtcblxuLyoqXG4gKlxuICovXG5cbi8vIFNvbWUgaGVscGVycyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL2llLXRvdWNoXG4vKmNvbnN0IG1zUG9pbnRlckVuYWJsZWQgPSAhIW5hdmlnYXRvci5wb2ludGVyRW5hYmxlZFxuICB8fCBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDsqLyAvL1JFRi8vXG4vKmNvbnN0IGlzVG91Y2ggPSAoISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxuICAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1BoYW50b21KUycpIDwgMClcbiAgfHwgbXNQb2ludGVyRW5hYmxlZDsqLyAvL1JFRi8vXG4vKmZ1bmN0aW9uIG1zRXZlbnRUeXBlKHR5cGUpIHtcbiAgY29uc3QgbG8gPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG1zID0gYE1TJHt0eXBlfWA7XG4gIHJldHVybiBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCA/IG1zIDogbG87XG59Ki8gLy9SRUYvL1xuLypjb25zdCB0b3VjaGV2ZW50cyA9IHtcbiAgdG91Y2hzdGFydDogYCR7bXNFdmVudFR5cGUoJ1BvaW50ZXJEb3duJyl9IHRvdWNoc3RhcnRgLFxuICB0b3VjaGVuZDogYCR7bXNFdmVudFR5cGUoJ1BvaW50ZXJVcCcpfSB0b3VjaGVuZGAsXG4gIHRvdWNobW92ZTogYCR7bXNFdmVudFR5cGUoJ1BvaW50ZXJNb3ZlJyl9IHRvdWNobW92ZWAsXG59OyovIC8vUkVGLy9cblxuLyoqXG4gKlxuICovXG5cbmNvbnN0IHN3aXBlVGhyZXNob2xkID0gMTAwO1xuLy8gUmFuZ2Ugb2YgdGltZSB3aGVyZSBhIHRhcCBldmVudCBjb3VsZCBiZSBkZXRlY3RlZFxuY29uc3QgdGFwVGhyZXNob2xkID0gMTUwO1xuLy8gRGVsYXkgbmVlZGVkIHRvIGRldGVjdCBhIGRvdWJsZSB0YXBcbmNvbnN0IGRvdWJsZXRhcFRocmVzaG9sZCA9IDIwMDtcbi8vIERlbGF5IG5lZWRlZCB0byBkZXRlY3QgYSBsb25nIHRhcFxuY29uc3QgbG9uZ3RhcFRocmVzaG9sZCA9IDEwMDA7XG4vLyBUb3VjaCBldmVudHMgYm91bmRhcmllcyAoNjBweCBieSBkZWZhdWx0KVxuY29uc3QgdGFwUHJlY2lzaW9uID0gNjAgLyAyO1xuLy8gY29uc3QganVzdFRvdWNoRXZlbnRzID0gd2luZG93LkpVU1RfT05fVE9VQ0hfREVWSUNFUyB8fCBpc1RvdWNoOyAvL1JFRi8vXG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBoZy5CYXNlRXZlbnQoaGFuZGxlR2VzdHVyZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHZXN0dXJlKGV2LCBicm9hZGNhc3QpIHtcbiAgLy8gSWdub3JlIG90aGVyIGV2ZW50c1xuICBpZiAoIWlzS25vd25FdmVudChldikpIHJldHVybjtcblxuICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICBjb25zdCBkZWxlZ2F0b3IgPSBoZy5EZWxlZ2F0b3IoKTtcbiAgY29uc3QgX3RhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gIGxldCBsaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAvLyBUT0RPOiBDaGVjayBpZiBjYW4gcmVtb3ZlIHRoaXNcbiAgbGV0IHRhcE51bSA9IDA7XG4gIGxldCBjdXJyWCwgY3VyclksIGNhY2hlZFgsIGNhY2hlZFk7XG4gIGxldCB0YXBUaW1lciwgdGltZXN0YW1wLCB0YXJnZXQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXYudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICBjb25zdCB0cmlnZ2VyVGFwU3RhcnQgPSAhbGlzdGVuZXJzQWRkZWQ7XG4gICAgY29uc3QgaXNUb3VjaCA9IGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcblxuICAgIGFkZExpc3RlbmVycyhpc1RvdWNoKTtcblxuICAgIGlmICh0cmlnZ2VyVGFwU3RhcnQpIHRhcFN0YXJ0KGV2KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiB0YXBTdGFydChlKSB7XG4gICAgaWYgKCF0cmlnZ2VyZWRPbkJvdW5kRWxlbWVudChlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcG9pbnRlciA9IGdldFBvaW50ZXJFdmVudChlKTtcbiAgICBjYWNoZWRYID0gY3VyclggPSBwb2ludGVyLnBhZ2VYO1xuICAgIGNhY2hlZFkgPSBjdXJyWSA9IHBvaW50ZXIucGFnZVk7XG5cbiAgICB0aW1lc3RhbXAgPSBnZXRUaW1lc3RhbXAoKTtcbiAgICB0YXBOdW0rKztcblxuICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgIC8vIF9yYXdFdmVudDogZSwgLy9SRUYvL1xuICAgICAgdHlwZTogJ3RhcHN0YXJ0JyxcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRhcE1vdmUoZSkge1xuICAgIGlmICghdHJpZ2dlcmVkT25Cb3VuZEVsZW1lbnQoZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHBvaW50ZXIgPSBnZXRQb2ludGVyRXZlbnQoZSk7XG5cbiAgICBjdXJyWCA9IHBvaW50ZXIucGFnZVg7XG4gICAgY3VyclkgPSBwb2ludGVyLnBhZ2VZO1xuXG4gICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgLy8gX3Jhd0V2ZW50OiBlLCAvL1JFRi8vXG4gICAgICB0eXBlOiAndGFwbW92ZScsXG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiB0YXBFbmQoZSkge1xuICAgIGlmICghdHJpZ2dlcmVkT25Cb3VuZEVsZW1lbnQoZSkpIHJldHVybjtcblxuICAgIC8vIFRoaXMgbGVhZHMgdG8gYSB3YXJuaW5nIG9uIENocm9tZSxcbiAgICAvLyBidXQgaXMgcmVxdWlyZWQgdG8gbm90IGZpcmUgYm90aCB0b3VjaHN0YXJ0XG4gICAgLy8gYW5kIG1vdXNlZG93biBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xuICAgIGlmIChlLl9yYXdFdmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5fcmF3RXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudFR5cGVzID0gW107XG4gICAgY29uc3Qgbm93ID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgY29uc3QgZGVsdGFYID0gY2FjaGVkWCAtIGN1cnJYO1xuICAgIGNvbnN0IGRlbHRhWSA9IGNhY2hlZFkgLSBjdXJyWTtcblxuICAgIGNsZWFyVGltZW91dCh0YXBUaW1lcik7XG5cbiAgICBpZiAoZGVsdGFYIDw9IC1zd2lwZVRocmVzaG9sZCkge1xuICAgICAgZXZlbnRUeXBlcy5wdXNoKCdzd2lwZXJpZ2h0Jyk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCA+PSBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgZXZlbnRUeXBlcy5wdXNoKCdzd2lwZWxlZnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFZIDw9IC1zd2lwZVRocmVzaG9sZCkge1xuICAgICAgZXZlbnRUeXBlcy5wdXNoKCdzd2lwZWRvd24nKTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFZID49IHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICBldmVudFR5cGVzLnB1c2goJ3N3aXBldXAnKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRUeXBlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZXZlbnRUeXBlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGV2ZW50VHlwZXNbaV07XG5cbiAgICAgICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgICAgIC8vIF9yYXdFdmVudDogZSwgLy9SRUYvL1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgICAgICBkaXN0YW5jZToge1xuICAgICAgICAgICAgeDogTWF0aC5hYnMoZGVsdGFYKSxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGRlbHRhWSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVycyhpc1RvdWNoRXZlbnQoZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgLy8gVE9ETzogXCJsb25ndGFwXCIgcHJldmVudHMgbm9ybWFsIFwidGFwXCIsXG4gICAgICAvLyBtYXliZSBpdCdzIGJldHRlciB0byB0cmlnZ2VyIGFsc28gXCJ0YXBcIixcbiAgICAgIC8vIGFsb25nIHdpdGggXCJsb25ndGFwXCIgZXZlbnRcbiAgICAgIGlmIChjYWNoZWRYID49IGN1cnJYIC0gdGFwUHJlY2lzaW9uXG4gICAgICAgICAgJiYgY2FjaGVkWCA8PSBjdXJyWCArIHRhcFByZWNpc2lvblxuICAgICAgICAgICYmIGNhY2hlZFkgPj0gY3VyclkgLSB0YXBQcmVjaXNpb25cbiAgICAgICAgICAmJiBjYWNoZWRZIDw9IGN1cnJZICsgdGFwUHJlY2lzaW9uKSB7XG4gICAgICAgIGlmICh0aW1lc3RhbXAgKyB0YXBUaHJlc2hvbGQgLSBub3cgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0YXBOdW0gPT09IDIgJiYgdGFyZ2V0ID09PSBlLnRhcmdldFxuICAgICAgICAgICAgPyAnZG91YmxldGFwJ1xuICAgICAgICAgICAgOiAndGFwJztcblxuICAgICAgICAgIGJyb2FkY2FzdChhZGREYXRhKHtcbiAgICAgICAgICAgIC8vIF9yYXdFdmVudDogZSwgLy9SRUYvL1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7IC8vIFRPT0Q6IENoZWNrIGlmIGNhbiByZW1vdmUgdGhpc1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAodGltZXN0YW1wICsgbG9uZ3RhcFRocmVzaG9sZCAtIG5vdyA8PSAwKSB7XG4gICAgICAgICAgYnJvYWRjYXN0KGFkZERhdGEoe1xuICAgICAgICAgICAgLy8gX3Jhd0V2ZW50OiBlLCAvL1JFRi8vXG4gICAgICAgICAgICB0eXBlOiAnbG9uZ3RhcCcsXG4gICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0OyAvLyBUT09EOiBDaGVjayBpZiBjYW4gcmVtb3ZlIHRoaXNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YXBUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoaXNUb3VjaEV2ZW50KGUpKTtcblxuICAgICAgICB0YXBOdW0gPSAwO1xuICAgICAgfSwgZG91YmxldGFwVGhyZXNob2xkKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICAvLyBfcmF3RXZlbnQ6IGUsIC8vUkVGLy9cbiAgICAgIHR5cGU6ICd0YXBlbmQnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gdGFwQ2FuY2VsKGUpIHtcbiAgICBpZiAoIXRyaWdnZXJlZE9uQm91bmRFbGVtZW50KGUpKSByZXR1cm47XG5cbiAgICBicm9hZGNhc3QoYWRkRGF0YSh7XG4gICAgICAvLyBfcmF3RXZlbnQ6IGUsIC8vUkVGLy9cbiAgICAgIHR5cGU6ICd0YXBjYW5jZWwnLFxuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICB9KSk7XG5cbiAgICBjbGVhclRpbWVvdXQodGFwVGltZXIpO1xuICAgIHRhcE51bSA9IDA7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoaXNUb3VjaEV2ZW50KGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiBhZGREYXRhKGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgYWRkaXRpb25hbCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG5cbiAgZnVuY3Rpb24gdHJpZ2dlcmVkT25Cb3VuZEVsZW1lbnQoZSkge1xuICAgIHJldHVybiBlLnRhcmdldCA9PT0gX3RhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoaXNUb3VjaCA9IGZhbHNlKSB7XG4gICAgaWYgKGxpc3RlbmVyc0FkZGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgZGVsZWdhdG9yLmxpc3RlblRvKCd0b3VjaG1vdmUnKTtcblxuICAgICAgLy8gVE9PRDogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRhcFN0YXJ0KTtcblxuICAgICAgZGVsZWdhdG9yLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRhcE1vdmUpO1xuXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0YXBFbmQpO1xuXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0YXBDYW5jZWwpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgZGVsZWdhdG9yLmxpc3RlblRvKCdtb3VzZW1vdmUnKTtcbiAgICAgIGRlbGVnYXRvci5saXN0ZW5UbygnbW91c2VvdXQnKTtcblxuICAgICAgLy8gVE9PRDogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGFwU3RhcnQpO1xuXG4gICAgICBkZWxlZ2F0b3IuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGFwTW92ZSk7XG5cbiAgICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGFwRW5kKTtcbiAgICAgIGRlbGVnYXRvci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRhcEVuZCk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhpc1RvdWNoID0gZmFsc2UpIHtcbiAgICBpZiAoIWxpc3RlbmVyc0FkZGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgZGVsZWdhdG9yLnVubGlzdGVuVG8oJ3RvdWNobW92ZScpO1xuXG4gICAgICAvLyBUT09EOiBDaGVjayBpZiBjYW4gcmVtb3ZlIHRoaXNcbiAgICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGFwU3RhcnQpO1xuXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGFwTW92ZSk7XG5cbiAgICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRhcEVuZCk7XG5cbiAgICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRhcENhbmNlbCk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBkZWxlZ2F0b3IudW5saXN0ZW5UbygnbW91c2Vtb3ZlJyk7XG4gICAgICBkZWxlZ2F0b3IudW5saXN0ZW5UbygnbW91c2VvdXQnKTtcblxuICAgICAgLy8gVE9PRDogQ2hlY2sgaWYgY2FuIHJlbW92ZSB0aGlzXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGFwU3RhcnQpO1xuXG4gICAgICBkZWxlZ2F0b3IucmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGFwTW92ZSk7XG5cbiAgICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGFwRW5kKTtcbiAgICAgIGRlbGVnYXRvci5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRhcEVuZCk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzQWRkZWQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNLbm93bkV2ZW50KGV2KSB7XG4gIGlmICghfkVWRU5UUy5pbmRleE9mKGV2LnR5cGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFldi5idXR0b24pIHJldHVybiB0cnVlO1xuICByZXR1cm4gZXYuYnV0dG9uID09PSAxO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGV2KSB7XG4gIHJldHVybiBUT1VDSF9FVkVOVFMuaW5kZXhPZihldi50eXBlKSA+IC0xO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gZ2V0UG9pbnRlckV2ZW50KGV2KSB7XG4gIGNvbnN0IHJhdyA9IGV2Ll9yYXdFdmVudDtcbiAgcmV0dXJuIHJhdy50YXJnZXRUb3VjaGVzID8gcmF3LnRhcmdldFRvdWNoZXNbMF0gOiByYXc7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBwYXJ0aWFsIGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsJztcbmltcG9ydCBoZyBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IHsgaGFuZGxlR2VzdHVyZSB9IGZyb20gJy4vZXZlbnRzJztcblxuLyoqXG4gKlxuICovXG5cbmNvbnN0IFBSRVZFTlRfREVGVUFMVF9FVkVOVFMgPSBbXG4gICdsb25ndGFwJywgJ3N3aXBldXAnLCAnc3dpcGVyaWdodCcsICdzd2lwZWRvd24nLCAnc3dpcGVsZWZ0JywgJ3RvdWNobW92ZScsXG5dO1xuXG4vKipcbiAqXG4gKi9cblxuZXhwb3J0IGNvbnN0IHNlbmRUYXBTdGFydCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3RhcHN0YXJ0JykpO1xuZXhwb3J0IGNvbnN0IHNlbmRUYXBNb3ZlID0gaGcuQmFzZUV2ZW50KHBhcnRpYWwoc2VuZEV2ZW50LCAndGFwbW92ZScpKTtcbmV4cG9ydCBjb25zdCBzZW5kVGFwRW5kID0gaGcuQmFzZUV2ZW50KHBhcnRpYWwoc2VuZEV2ZW50LCAndGFwZW5kJykpO1xuZXhwb3J0IGNvbnN0IHNlbmRUYXBDYW5jZWwgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICd0YXBjYW5jZWwnKSk7XG5leHBvcnQgY29uc3Qgc2VuZFRhcCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3RhcCcpKTtcbmV4cG9ydCBjb25zdCBzZW5kTG9uZ1RhcCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ2xvbmd0YXAnKSk7XG5leHBvcnQgY29uc3Qgc2VuZERvdWJsZVRhcCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ2RvdWJsZXRhcCcpKTtcbmV4cG9ydCBjb25zdCBzZW5kU3dpcGVVcCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3N3aXBldXAnKSk7XG5leHBvcnQgY29uc3Qgc2VuZFN3aXBlUmlnaHQgPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdzd2lwZXJpZ2h0JykpO1xuZXhwb3J0IGNvbnN0IHNlbmRTd2lwZURvd24gPSBoZy5CYXNlRXZlbnQocGFydGlhbChzZW5kRXZlbnQsICdzd2lwZWRvd24nKSk7XG5leHBvcnQgY29uc3Qgc2VuZFN3aXBlTGVmdCA9IGhnLkJhc2VFdmVudChwYXJ0aWFsKHNlbmRFdmVudCwgJ3N3aXBlbGVmdCcpKTtcblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIHNlbmRFdmVudCh0eXBlLCBldiwgX2Jyb2FkY2FzdCkge1xuICBpZiAoflBSRVZFTlRfREVGVUFMVF9FVkVOVFMuaW5kZXhPZih0eXBlKSkge1xuICAgIGlmIChldi5fcmF3RXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2Ll9yYXdFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUdlc3R1cmUuY2FsbCh0aGlzLCBldiwgYnJvYWRjYXN0KTtcblxuICBmdW5jdGlvbiBicm9hZGNhc3QoZGF0YSkge1xuICAgIGlmIChkYXRhLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIF9icm9hZGNhc3QoZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWFwIGZyb20gJ3JhbWRhL3NyYy9tYXAnO1xuaW1wb3J0IHBhcnRpYWxSaWdodCBmcm9tICdyYW1kYS9zcmMvcGFydGlhbFJpZ2h0JztcbmltcG9ydCBfbWVtb2l6ZSBmcm9tICdtZW1vaXplZSc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJ3JhbWRhL3NyYy92YWx1ZXMnO1xuaW1wb3J0IHBpY2sgZnJvbSAncmFtZGEvc3JjL3BpY2snO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IENlbGwgZnJvbSAnLi4vLi4vY2VsbCc7XG5cbmNvbnN0IG1lbW9pemUgPSBwYXJ0aWFsUmlnaHQoX21lbW9pemUsIHsgbWF4OiAxIH0pO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGxzKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbi8vIFRPRE86IENoZWNrIGlmIG5lZWQgYSBga2V5YCBwcm9wXG5jb25zdCBjZWxsUHJvcHMgPSBtZW1vaXplKCh3aWR0aCwgbWFyZ2luLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCkgPT4ge1xuICByZXR1cm4geyB3aWR0aCwgbWFyZ2luLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCB9O1xufSk7XG5cbkNlbGxzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih7IGNvbHVtbnMsIG1hcmdpbiA9IDAsIGNlbGxzLCBib3RzQnlJbmRleCwgY2hlY2tSZWFkeVN0YXRlLCBpc1N0YXJ0ZWQgfSkge1xuICBjb25zdCBjZWxsV2lkdGggPSAxMDAgLyBjb2x1bW5zIC0gMiAqIG1hcmdpbjsgLy8gcGVyY2VudFxuXG4gIGNvbnN0IHJlbmRlckNlbGwgPSBjZWxsID0+IGhnLnBhcnRpYWwoXG4gICAgQ2VsbC5yZW5kZXIsXG4gICAgY2VsbCxcbiAgICBjZWxsUHJvcHMoY2VsbFdpZHRoLCBtYXJnaW4sIGNoZWNrUmVhZHlTdGF0ZSwgaXNTdGFydGVkKSxcbiAgICBnZXRCb3RJbmRpY2F0b3JzT2ZDZWxsKGJvdHNCeUluZGV4LCBjZWxsLmluZGV4KVxuICApO1xuICBjb25zdCByZW5kZXJDZWxscyA9IG1hcChyZW5kZXJDZWxsKTtcblxuICByZXR1cm4gaChcbiAgICAnLmFtYXplLUdyaWQtY2VsbHMudS1jZicsXG4gICAgeyBzdHlsZTogeyBwYWRkaW5nOiBgJHttYXJnaW4gLyAyfSVgIH0gfSxcbiAgICByZW5kZXJDZWxscyh2YWx1ZXMoY2VsbHMpKVxuICApO1xufTtcblxuLyoqXG4gKlxuICovXG5cbmNvbnN0IGV4dHJhY3RCb3RJZGVudGl0eSA9IHBpY2soWydpZCcsICdjb2xvciddKTtcbmNvbnN0IGV4dHJhY3RCb3RJbmRpY2F0b3JzID0gbWVtb2l6ZShib3RzT25DZWxsID0+IHtcbiAgcmV0dXJuIG1hcChleHRyYWN0Qm90SWRlbnRpdHksIGJvdHNPbkNlbGwpO1xufSk7XG4vLyBXZSBuZWVkIHRoZSBzYW1lIGFycmF5IHJlZmVyZW5jZSBpbiBjYXNlIHRoZXJlIGFyZVxuLy8gbm8gYm90IGluZGljYXRvcnMgb24gYSBjZWxsLCBpbiBvcmRlciB0byByZW5kZXIgb25seVxuLy8gdGhlIFwiY2hhbmdlZFwiIGNlbGxzIHZpYSBgaGcucGFydGlhbCgpYFxuY29uc3QgZW1wdHlCb3RJbmRpY2F0b3JzID0gW107XG5cbmZ1bmN0aW9uIGdldEJvdEluZGljYXRvcnNPZkNlbGwoYm90c0J5SW5kZXgsIGluZGV4KSB7XG4gIGNvbnN0IGJvdHNPbkNlbGwgPSBib3RzQnlJbmRleFtpbmRleF07XG4gIHJldHVybiBib3RzT25DZWxsXG4gICAgPyBleHRyYWN0Qm90SW5kaWNhdG9ycyhib3RzT25DZWxsKVxuICAgIDogZW1wdHlCb3RJbmRpY2F0b3JzO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHZhbHVlcyBmcm9tICdyYW1kYS9zcmMvdmFsdWVzJztcbmltcG9ydCBfbWVtb2l6ZSBmcm9tICdtZW1vaXplZSc7XG5pbXBvcnQgcGFydGlhbFJpZ2h0IGZyb20gJ3JhbWRhL3NyYy9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IGdyb3VwQnkgZnJvbSAncmFtZGEvc3JjL2dyb3VwQnknO1xuaW1wb3J0IHByb3AgZnJvbSAncmFtZGEvc3JjL3Byb3AnO1xuaW1wb3J0IF9wcm9wcyBmcm9tICdyYW1kYS9zcmMvcHJvcHMnO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IENlbGxzIGZyb20gJy4vY2VsbHMnO1xuXG5jb25zdCBtZW1vaXplID0gcGFydGlhbFJpZ2h0KF9tZW1vaXplLCB7IG1heDogMSB9KTtcblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IGNlbGxzUHJvcHMgPSBtZW1vaXplKChjb2x1bW5zLCBtYXJnaW4sIGNlbGxzLCBib3RzLCBjaGVja1JlYWR5U3RhdGUsIGlzU3RhcnRlZCkgPT4ge1xuICBjb25zdCBib3RzQnlJbmRleCA9IGdyb3VwQnkocHJvcCgnaW5kZXgnKSwgdmFsdWVzKGJvdHMpKTtcbiAgcmV0dXJuIHsgY29sdW1ucywgbWFyZ2luLCBjZWxscywgYm90c0J5SW5kZXgsIGNoZWNrUmVhZHlTdGF0ZSwgaXNTdGFydGVkIH07XG59KTtcblxuR3JpZC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ3NlY3Rpb24uYW1hemUtR3JpZCcsXG4gICAgaCgnLmFtYXplLUdyaWQtYmFja2dyb3VuZCcsXG4gICAgICBoZy5wYXJ0aWFsKENlbGxzLnJlbmRlciwgY2VsbHNQcm9wcyhcbiAgICAgICAgLi4uX3Byb3BzKFtcbiAgICAgICAgICAnY29sdW1ucycsICdtYXJnaW4nLCAnY2VsbHMnLCAnYm90cycsICdjaGVja1JlYWR5U3RhdGUnLCAnaXNTdGFydGVkJyxcbiAgICAgICAgXSwgcHJvcHMpXG4gICAgICApKSlcbiAgKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbi8vIGltcG9ydCAnY29yZS1qcy9zaGltLmpzJztcbi8vIGltcG9ydCAnYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9zaGltLmpzJztcbmltcG9ydCB7IGFwcCB9IGZyb20gJ21lcmN1cnknO1xuaW1wb3J0IFRpbWVUcmF2ZWwgZnJvbSAnbWVyY3VyeS90aW1lLXRyYXZlbCc7XG5pbXBvcnQgdmlydHVhbGl6ZSBmcm9tICd2ZG9tLXZpcnR1YWxpemUnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuLyoqXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFtYXplKHJvb3QsIG9wdHMgPSB7fSkge1xuICAvLyBHZXQgaW5pdGlhbCBhcHAgc3RhdGVcbiAgY29uc3Qgc3RhdGUgPSBBcHAoT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgeyB1bmRvLCByZWRvIH0pKTtcblxuICBjb25zdCBoaXN0b3J5ID0gVGltZVRyYXZlbChzdGF0ZSk7XG4gIGZ1bmN0aW9uIHVuZG8oKSB7IHJldHVybiBoaXN0b3J5LnVuZG8oKTsgfVxuICBmdW5jdGlvbiByZWRvKCkgeyByZXR1cm4gaGlzdG9yeS5yZWRvKCk7IH1cblxuICAvLyBDcmVhdGUgYSByZW5kZXJpbmcgY3ljbGUgZm9yIHRoZSBhcHAgdnRyZWVcbiAgYXBwKGRvY3VtZW50LmJvZHksIHN0YXRlLCBBcHAucmVuZGVyLCB7XG4gICAgaW5pdGlhbFRyZWU6IHZpcnR1YWxpemUocm9vdCksXG4gICAgdGFyZ2V0OiByb290LFxuICB9KTtcblxuICAvLyBUcmlnZ2VyIHRoZSBpbml0aWFsIHJlbmRlclxuICBzdGF0ZS5zZXQoc3RhdGUoKSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWFwIGZyb20gJ3JhbWRhL3NyYy9tYXAnO1xuaW1wb3J0IHBhcnRpYWwgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWwnO1xuaW1wb3J0IHsgaCB9IGZyb20gJ21lcmN1cnknO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuTG9nby5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IHJlbmRlckNoYXIgPSBwYXJ0aWFsKGgsICdzcGFuJyk7XG4gIGNvbnN0IHJlbmRlckNoYXJzID0gbWFwKHJlbmRlckNoYXIpO1xuXG4gIGNvbnN0IHRleHQgPSAnYW1hemUnO1xuICByZXR1cm4gaCgnaDMuYW1hemUtTG9nbycsIHJlbmRlckNoYXJzKHRleHQuc3BsaXQoJycpKSk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgRHVyYXRpb24gZnJvbSAnZHVyYXRpb24tanMnO1xuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9zcmMvbWFwJztcbmltcG9ydCBhZGRJbmRleCBmcm9tICdyYW1kYS9zcmMvYWRkSW5kZXgnO1xuaW1wb3J0IHBhcnRpYWwgZnJvbSAncmFtZGEvc3JjL3BhcnRpYWwnO1xuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcblxuaW1wb3J0IFNjcm9sbGFibGUgZnJvbSAnLi4vc2Nyb2xsYWJsZSc7XG5cbmNvbnN0IG1hcEluZGV4ZWQgPSBhZGRJbmRleChtYXApO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVzdWx0cyhwcm9wcykge1xuICByZXR1cm4gcHJvcHMud2lubmVycy5tYXAod2lubmVyID0+IHtcbiAgICBjb25zdCBib3QgPSBwcm9wcy5ib3RzW3dpbm5lci5pZF07XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBib3QuaWQsXG4gICAgICBjb2xvcjogYm90LmNvbG9yLFxuICAgICAgdGltZTogd2lubmVyLnRpbWUsXG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVyIGNvbXBvbmVudC5cbiAqL1xuXG5SZXN1bHRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICBjb25zdCByZXN1bHRzID0gZ2V0UmVzdWx0cyhwcm9wcyk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ3NlY3Rpb24uYW1hemUtUmVzdWx0cycsXG4gICAgbmV3IFNjcm9sbGFibGUoaGcucGFydGlhbChyZW5kZXJDb250ZW50LCByZXN1bHRzKSwge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgIH0sXG4gICAgfSlcbiAgKTtcbn1cblxuLyoqXG4gKlxuICovXG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQocmVzdWx0cykge1xuICByZXR1cm4gaCgnLmFtYXplLVJlc3VsdHMtY29udGVudCcsIFtcbiAgICBoKCdoMScsICdSZXN1bHRzJyksXG5cbiAgICBoZy5wYXJ0aWFsKHJlbmRlclRhYmxlLCByZXN1bHRzKSxcbiAgXSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUYWJsZShyZXN1bHRzKSB7XG4gIHJldHVybiBoKCd0YWJsZS5hbWF6ZS1SZXN1bHRzLXRhYmxlJywgW1xuICAgIGhnLnBhcnRpYWwocmVuZGVySGVhZGVycywgWydQbGFjZScsICdCb3QnLCAnVGltZSddKSxcblxuICAgIC4uLm1hcEluZGV4ZWQocGFydGlhbChoZy5wYXJ0aWFsLCByZW5kZXJSb3cpLCByZXN1bHRzKSxcbiAgXSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXJzKHRleHRzKSB7XG4gIHJldHVybiBoKCd0cicsIG1hcChyZW5kZXJIZWFkZXIsIHRleHRzKSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIodGV4dCkge1xuICByZXR1cm4gaCgndGgnLCBoKCdzcGFuJywgdGV4dCkpO1xufVxuXG4vKipcbiAqXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyUm93KHJlc3VsdCwgaW5kZXgpIHtcbiAgcmV0dXJuIGgoJ3RyJywgW1xuICAgIGgoJ3RkJywgYCR7aW5kZXggKyAxfWApLFxuXG4gICAgaCgndGQnLCBoZy5wYXJ0aWFsKHJlbmRlckJvdCwgcmVzdWx0KSksXG5cbiAgICBoKCd0ZCcsIGAke25ldyBEdXJhdGlvbihyZXN1bHQudGltZSkudG9TdHJpbmcoKX1gKSxcbiAgXSk7XG59XG5cbi8qKlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJCb3QocmVzdWx0KSB7XG4gIGNvbnN0IGNvbG9yID0gYHJnYigke3Jlc3VsdC5jb2xvci5qb2luKCl9KWA7XG5cbiAgcmV0dXJuIGgoXG4gICAgJy5hbWF6ZS1SZXN1bHRzLWJvdFdyYXBwZXInLFxuICAgIGgoJy5hbWF6ZS1SZXN1bHRzLWJvdCcsIHtcbiAgICAgIHN0eWxlOiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IgfSxcbiAgICB9KVxuICApO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgc2V0SW1tZWRpYXRlIH0gZnJvbSAndGltZXJzJztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBkaWZmIGZyb20gJ3ZpcnR1YWwtZG9tL2RpZmYnO1xuaW1wb3J0IHBhdGNoIGZyb20gJ3ZpcnR1YWwtZG9tL3BhdGNoJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ3ZpcnR1YWwtZG9tL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJU2Nyb2xsIGZyb20gJ2lzY3JvbGwvYnVpbGQvaXNjcm9sbC1saXRlJztcblxuLyoqXG4gKiBXaWRnZXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxhYmxlIHtcbiAgdHlwZSA9ICdXaWRnZXQnXG5cbiAgY29uc3RydWN0b3Iodm5vZGUsIHByb3BzID0ge30pIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2Nyb2xsYWJsZSkpIHtcbiAgICAgIHJldHVybiBuZXcgU2Nyb2xsYWJsZSh2bm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy52bm9kZSA9IHZub2RlO1xuICAgIHRoaXMucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgdGhpcy5zY3JvbGxlciA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtZW50KHRoaXMudm5vZGUpO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gY3goJ2FtYXplLVNjcm9sbGFibGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgLy8gVE9ETzogTWFrZSBpdCBiZXR0ZXJcbiAgICBpZiAodGhpcy5wcm9wcy5zdHlsZSkgT2JqZWN0LmFzc2lnbih3cmFwcGVyLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcblxuICAgIGNvbnN0IHNjcm9sbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsZXIuY2xhc3NOYW1lID0gJ2FtYXplLVNjcm9sbGFibGUtc2Nyb2xsZXInO1xuXG4gICAgc2Nyb2xsZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzY3JvbGxlcik7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBib3VuY2U6IGZhbHNlLFxuICAgIH0sIHRoaXMucHJvcHMuaXNjcm9sbCB8fCB7fSk7XG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxlciA9IG5ldyBJU2Nyb2xsKHdyYXBwZXIsIG9wdHMpO1xuICAgICAgICByYWYoKCkgPT4gdGhpcy5zY3JvbGxlci5yZWZyZXNoKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIHVwZGF0ZShwcmV2LCBlbGVtKSB7XG4gICAgY29uc3QgcHJldlZub2RlID0gcHJldi52bm9kZTtcbiAgICBjb25zdCBjdXJyVm5vZGUgPSB0aGlzLnZub2RlO1xuXG4gICAgY29uc3QgcGF0Y2hlcyA9IGRpZmYocHJldlZub2RlLCBjdXJyVm5vZGUpO1xuICAgIGNvbnN0IHJvb3ROb2RlID0gZWxlbS5jaGlsZE5vZGVzWzBdO1xuICAgIGNvbnN0IG5ld05vZGUgPSBwYXRjaChyb290Tm9kZSwgcGF0Y2hlcyk7XG5cbiAgICBpZiAobmV3Tm9kZSAhPT0gZWxlbS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBlbGVtLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBlbGVtLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICByYWYoKCkgPT4gdGhpcy5zY3JvbGxlci5yZWZyZXNoKCkpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koLyplbGVtKi8pIHtcbiAgICB0aGlzLnNjcm9sbGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNjcm9sbGVyID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IGhnLCB7IGggfSBmcm9tICdtZXJjdXJ5JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEJvdEluZGljYXRvcnMgZnJvbSAnLi4vYm90LWluZGljYXRvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbGUoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlciBjb21wb25lbnQuXG4gKi9cblxuVGlsZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgY29uc3QgeyBpc0FjdGl2ZSwgaXNFbnRyeSwgaXNFeGl0LCBpc0RyYWdIb3ZlcmVkLCBib3RJbmRpY2F0b3JzIH0gPSBwcm9wcztcblxuICBjb25zdCBjb2x1bW5zID0gYm90SW5kaWNhdG9ycy5sZW5ndGggPT0gMlxuICAgID8gMlxuICAgIDogTWF0aC5jZWlsKE1hdGguc3FydChib3RJbmRpY2F0b3JzLmxlbmd0aCkpO1xuXG4gIHJldHVybiBoKCdkaXYnLCB7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnYW1hemUtVGlsZSc6IHRydWUsXG4gICAgICAnYW1hemUtVGlsZS0tYWN0aXZlJzogaXNBY3RpdmUsXG4gICAgICAnYW1hemUtVGlsZS0tZW50cnknOiBpc0VudHJ5LFxuICAgICAgJ2FtYXplLVRpbGUtLWV4aXQnOiBpc0V4aXQsXG4gICAgICAnYW1hemUtVGlsZS0taGFzQm90SW5kaWNhdG9ycyc6IGJvdEluZGljYXRvcnMubGVuZ3RoID4gMCxcbiAgICAgICdhbWF6ZS1UaWxlLS1kcmFnSG92ZXJlZCc6IGlzRHJhZ0hvdmVyZWQsXG4gICAgfSksXG4gICAgc3R5bGU6IGJvdEluZGljYXRvcnMubGVuZ3RoID4gMCA/IHsgY3Vyc29yOiAnZGVmYXVsdCcgfSA6IHt9LFxuICB9LCBoZy5wYXJ0aWFsKEJvdEluZGljYXRvcnMucmVuZGVyLCBjb2x1bW5zLCBib3RJbmRpY2F0b3JzKSk7XG59XG4iLCIvKipcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJnYkNvbG9yKG9wdHMgPSB7fSkge1xuICBjb25zdCB2YWx1ZSA9IHJhbmRvbUludEZyb21SYW5nZTtcbiAgY29uc3QgciA9IG9wdHMuciB8fCBbMCwgMjU1XTtcbiAgY29uc3QgZyA9IG9wdHMuZyB8fCBbMCwgMjU1XTtcbiAgY29uc3QgYiA9IG9wdHMuYiB8fCBbMCwgMjU1XTtcblxuICByZXR1cm4gW3ZhbHVlKC4uLnIpLCB2YWx1ZSguLi5nKSwgdmFsdWUoLi4uYildO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuXG4gKiBgbWluYCBhbmQgYG1heGAgaW5jbHVzaXZlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbG4oX3N0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCBzdHJpbmdzID0gX3N0cmluZ3Muc2xpY2UoKTtcbiAgbGV0IHN0ciA9ICcnO1xuXG4gIHdoaWxlIChzdHJpbmdzLmxlbmd0aCB8fCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgc3RyICs9IHN0cmluZ3Muc2hpZnQoKSB8fCAnJztcbiAgICBzdHIgKz0gdmFsdWVzLnNoaWZ0KCkgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcc3syLH0vZ20sICcgJyk7XG59XG4iXX0=
