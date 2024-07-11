/*!
 * streaming-json 0.1.2 (https://github.com/karminski/streaming-json)
 * API https://github.com/karminski/streaming-json/blob/master/doc/api.md
 * Copyright 2017-2024 karminski. All Rights Reserved
 * Licensed under MIT (https://github.com/karminski/streaming-json/blob/master/LICENSE)
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["streaming-json"] = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$e =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || commonjsGlobal || Function('return this')();

	var fails$i = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$h = fails$i;

	var functionBindNative = !fails$h(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$3 = functionBindNative;

	var FunctionPrototype$3 = Function.prototype;
	var apply$2 = FunctionPrototype$3.apply;
	var call$c = FunctionPrototype$3.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$c.bind(apply$2) : function () {
	  return call$c.apply(apply$2, arguments);
	});

	var NATIVE_BIND$2 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$b = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$b, call$b);

	var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$b.apply(fn, arguments);
	  };
	};

	var uncurryThis$j = functionUncurryThis;

	var toString$7 = uncurryThis$j({}.toString);
	var stringSlice$1 = uncurryThis$j(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$1(toString$7(it), 8, -1);
	};

	var classofRaw$1 = classofRaw$2;
	var uncurryThis$i = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw$1(fn) === 'Function') return uncurryThis$i(fn);
	};

	var documentAll$2 = typeof document == 'object' && document.all;

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

	var documentAll_1 = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var $documentAll$1 = documentAll_1;

	var documentAll$1 = $documentAll$1.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$f = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor = {};

	var fails$g = fails$i;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$g(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var NATIVE_BIND$1 = functionBindNative;

	var call$a = Function.prototype.call;

	var functionCall = NATIVE_BIND$1 ? call$a.bind(call$a) : function () {
	  return call$a.apply(call$a, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$5 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$h = functionUncurryThis;
	var fails$f = fails$i;
	var classof$a = classofRaw$2;

	var $Object$4 = Object;
	var split = uncurryThis$h(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$f(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$a(it) === 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$3 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$2 = isNullOrUndefined$3;

	var $TypeError$8 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$3 = function (it) {
	  if (isNullOrUndefined$2(it)) throw $TypeError$8("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var toIndexedObject$8 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$2(it));
	};

	var isCallable$e = isCallable$f;
	var $documentAll = documentAll_1;

	var documentAll = $documentAll.all;

	var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$e(it);
	};

	var path$9 = {};

	var path$8 = path$9;
	var global$d = global$e;
	var isCallable$d = isCallable$f;

	var aFunction = function (variable) {
	  return isCallable$d(variable) ? variable : undefined;
	};

	var getBuiltIn$9 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$8[namespace]) || aFunction(global$d[namespace])
	    : path$8[namespace] && path$8[namespace][method] || global$d[namespace] && global$d[namespace][method];
	};

	var uncurryThis$g = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$c = global$e;
	var userAgent = engineUserAgent;

	var process = global$c.process;
	var Deno = global$c.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$2 = engineV8Version;
	var fails$e = fails$i;
	var global$b = global$e;

	var $String$4 = global$b.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$e(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$5
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$8 = getBuiltIn$9;
	var isCallable$c = isCallable$f;
	var isPrototypeOf$7 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$3 = Object;

	var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$8('Symbol');
	  return isCallable$c($Symbol) && isPrototypeOf$7($Symbol.prototype, $Object$3(it));
	};

	var $String$3 = String;

	var tryToString$3 = function (argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$b = isCallable$f;
	var tryToString$2 = tryToString$3;

	var $TypeError$7 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$3 = function (argument) {
	  if (isCallable$b(argument)) return argument;
	  throw $TypeError$7(tryToString$2(argument) + ' is not a function');
	};

	var aCallable$2 = aCallable$3;
	var isNullOrUndefined$1 = isNullOrUndefined$3;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$1(func) ? undefined : aCallable$2(func);
	};

	var call$9 = functionCall;
	var isCallable$a = isCallable$f;
	var isObject$8 = isObject$9;

	var $TypeError$6 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
	  if (isCallable$a(fn = input.valueOf) && !isObject$8(val = call$9(fn, input))) return val;
	  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
	  throw $TypeError$6("Can't convert object to primitive value");
	};

	var shared$7 = {exports: {}};

	var global$a = global$e;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$b = Object.defineProperty;

	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$b(global$a, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$a[key] = value;
	  } return value;
	};

	var global$9 = global$e;
	var defineGlobalProperty = defineGlobalProperty$1;

	var SHARED = '__core-js_shared__';
	var store$3 = global$9[SHARED] || defineGlobalProperty(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$7.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.32.2',
	  mode: 'pure' ,
	  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var sharedExports = shared$7.exports;

	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var $Object$2 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$8 = function (argument) {
	  return $Object$2(requireObjectCoercible$1(argument));
	};

	var uncurryThis$f = functionUncurryThis;
	var toObject$7 = toObject$8;

	var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$7(it), key);
	};

	var uncurryThis$e = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$6 = uncurryThis$e(1.0.toString);

	var uid$3 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
	};

	var global$8 = global$e;
	var shared$6 = sharedExports;
	var hasOwn$c = hasOwnProperty_1;
	var uid$2 = uid$3;
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$3 = global$8.Symbol;
	var WellKnownSymbolsStore$2 = shared$6('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$2;

	var wellKnownSymbol$j = function (name) {
	  if (!hasOwn$c(WellKnownSymbolsStore$2, name)) {
	    WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$c(Symbol$3, name)
	      ? Symbol$3[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore$2[name];
	};

	var call$8 = functionCall;
	var isObject$7 = isObject$9;
	var isSymbol$4 = isSymbol$5;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$i = wellKnownSymbol$j;

	var $TypeError$5 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$6 = function (input, pref) {
	  if (!isObject$7(input) || isSymbol$4(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$8(exoticToPrim, input, pref);
	    if (!isObject$7(result) || isSymbol$4(result)) return result;
	    throw $TypeError$5("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$5 = toPrimitive$6;
	var isSymbol$3 = isSymbol$5;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$5(argument, 'string');
	  return isSymbol$3(key) ? key : key + '';
	};

	var global$7 = global$e;
	var isObject$6 = isObject$9;

	var document$1 = global$7.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$9 = descriptors;
	var fails$d = fails$i;
	var createElement = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$9 && !fails$d(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$8 = descriptors;
	var call$7 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$4 = createPropertyDescriptor$5;
	var toIndexedObject$7 = toIndexedObject$8;
	var toPropertyKey$3 = toPropertyKey$4;
	var hasOwn$b = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$7(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$b(O, P)) return createPropertyDescriptor$4(!call$7(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var fails$c = fails$i;
	var isCallable$9 = isCallable$f;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$9(detection) ? fails$c(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var uncurryThis$d = functionUncurryThisClause;
	var aCallable$1 = aCallable$3;
	var NATIVE_BIND = functionBindNative;

	var bind$3 = uncurryThis$d(uncurryThis$d.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$1(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$3(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$7 = descriptors;
	var fails$b = fails$i;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$b(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$5 = isObject$9;

	var $String$2 = String;
	var $TypeError$4 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$7 = function (argument) {
	  if (isObject$5(argument)) return argument;
	  throw $TypeError$4($String$2(argument) + ' is not an object');
	};

	var DESCRIPTORS$6 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$6 = anObject$7;
	var toPropertyKey$2 = toPropertyKey$4;

	var $TypeError$3 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$6(O);
	  P = toPropertyKey$2(P);
	  anObject$6(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$6(O);
	  P = toPropertyKey$2(P);
	  anObject$6(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$5 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$3 = createPropertyDescriptor$5;

	var createNonEnumerableProperty$5 = DESCRIPTORS$5 ? function (object, key, value) {
	  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$6 = global$e;
	var apply$1 = functionApply;
	var uncurryThis$c = functionUncurryThisClause;
	var isCallable$8 = isCallable$f;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var isForced = isForced_1;
	var path$7 = path$9;
	var bind$2 = functionBindContext;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
	var hasOwn$a = hasOwnProperty_1;

	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$1(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global$6 : STATIC ? global$6[TARGET] : (global$6[TARGET] || {}).prototype;

	  var target = GLOBAL ? path$7 : path$7[TARGET] || createNonEnumerableProperty$4(path$7, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$a(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind methods to global for calling from export context
	    if (options.bind && USE_NATIVE) resultProperty = bind$2(sourceProperty, global$6);
	    // wrap global constructors for prevent changes in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable$8(sourceProperty)) resultProperty = uncurryThis$c(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$4(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$4(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$a(path$7, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$4(path$7, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$4(path$7[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
	        createNonEnumerableProperty$4(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var classof$9 = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$c = Array.isArray || function isArray(argument) {
	  return classof$9(argument) === 'Array';
	};

	var $$j = _export;
	var isArray$b = isArray$c;

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	$$j({ target: 'Array', stat: true }, {
	  isArray: isArray$b
	});

	var path$6 = path$9;

	var isArray$a = path$6.Array.isArray;

	var parent$v = isArray$a;

	var isArray$9 = parent$v;

	var parent$u = isArray$9;

	var isArray$8 = parent$u;

	var parent$t = isArray$8;

	var isArray$7 = parent$t;

	var isArray$6 = isArray$7;

	var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$6);

	function _arrayWithHoles(arr) {
	  if (_Array$isArray(arr)) return arr;
	}

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$3 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$7 = function (obj) {
	  return toLength(obj.length);
	};

	var $TypeError$2 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$2 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$2 = createPropertyDescriptor$5;

	var createProperty$4 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$2(0, value));
	  else object[propertyKey] = value;
	};

	var wellKnownSymbol$h = wellKnownSymbol$j;

	var TO_STRING_TAG$3 = wellKnownSymbol$h('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$7 = isCallable$f;
	var classofRaw = classofRaw$2;
	var wellKnownSymbol$g = wellKnownSymbol$j;

	var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
	var $Object$1 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) === 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$b = functionUncurryThis;
	var isCallable$6 = isCallable$f;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$b(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$6(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$1 = store$1.inspectSource;

	var uncurryThis$a = functionUncurryThis;
	var fails$a = fails$i;
	var isCallable$5 = isCallable$f;
	var classof$7 = classof$8;
	var getBuiltIn$7 = getBuiltIn$9;
	var inspectSource = inspectSource$1;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$7('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = uncurryThis$a(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$5(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$5(argument)) return false;
	  switch (classof$7(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$3 = !construct || fails$a(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$5 = isArray$c;
	var isConstructor$2 = isConstructor$3;
	var isObject$4 = isObject$9;
	var wellKnownSymbol$f = wellKnownSymbol$j;

	var SPECIES$2 = wellKnownSymbol$f('species');
	var $Array$3 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$5(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$2(C) && (C === $Array$3 || isArray$5(C.prototype))) C = undefined;
	    else if (isObject$4(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$3 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$9 = fails$i;
	var wellKnownSymbol$e = wellKnownSymbol$j;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$1 = wellKnownSymbol$e('species');

	var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$9(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$i = _export;
	var fails$8 = fails$i;
	var isArray$4 = isArray$c;
	var isObject$3 = isObject$9;
	var toObject$6 = toObject$8;
	var lengthOfArrayLike$6 = lengthOfArrayLike$7;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
	var createProperty$3 = createProperty$4;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
	var wellKnownSymbol$d = wellKnownSymbol$j;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$d('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$8(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject$3(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$4(O);
	};

	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$2('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$i({ target: 'Array', proto: true, arity: 1, forced: FORCED$2 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$6(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$6(E);
	        doesNotExceedSafeInteger$1(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$1(n + 1);
	        createProperty$3(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var classof$6 = classof$8;

	var $String$1 = String;

	var toString$5 = function (argument) {
	  if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var objectDefineProperties = {};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

	var max$2 = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max$2(integer + length, 0) : min(integer, length);
	};

	var toIndexedObject$6 = toIndexedObject$8;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$5 = lengthOfArrayLike$7;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$6($this);
	    var length = lengthOfArrayLike$5(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var hiddenKeys$5 = {};

	var uncurryThis$9 = functionUncurryThis;
	var hasOwn$9 = hasOwnProperty_1;
	var toIndexedObject$5 = toIndexedObject$8;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$4 = hiddenKeys$5;

	var push$9 = uncurryThis$9([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$5(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$9(hiddenKeys$4, key) && hasOwn$9(O, key) && push$9(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
	    ~indexOf(result, key) || push$9(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$2 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$2);
	};

	var DESCRIPTORS$4 = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$1 = objectDefineProperty;
	var anObject$5 = anObject$7;
	var toIndexedObject$4 = toIndexedObject$8;
	var objectKeys$1 = objectKeys$2;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$5(O);
	  var props = toIndexedObject$4(Properties);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$6 = getBuiltIn$9;

	var html$1 = getBuiltIn$6('document', 'documentElement');

	var shared$5 = sharedExports;
	var uid$1 = uid$3;

	var keys$3 = shared$5('keys');

	var sharedKey$4 = function (key) {
	  return keys$3[key] || (keys$3[key] = uid$1(key));
	};

	/* global ActiveXObject -- old IE, WSH */
	var anObject$4 = anObject$7;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys$1 = enumBugKeys$3;
	var hiddenKeys$3 = hiddenKeys$5;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$3 = sharedKey$4;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$3('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys$1.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
	  return NullProtoObject();
	};

	hiddenKeys$3[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$4(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var objectGetOwnPropertyNames = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$3;

	var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys$2);
	};

	var objectGetOwnPropertyNamesExternal = {};

	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var lengthOfArrayLike$4 = lengthOfArrayLike$7;
	var createProperty$2 = createProperty$4;

	var $Array$2 = Array;
	var max$1 = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike$4(O);
	  var k = toAbsoluteIndex$1(start, length);
	  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	  var result = $Array$2(max$1(fin - k, 0));
	  var n = 0;
	  for (; k < fin; k++, n++) createProperty$2(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$5 = classofRaw$2;
	var toIndexedObject$3 = toIndexedObject$8;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$2 = arraySliceSimple;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$2(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$5(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$3(it));
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;

	var defineBuiltIn$4 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$3(target, key, value);
	  return target;
	};

	var defineProperty$a = objectDefineProperty;

	var defineBuiltInAccessor$1 = function (target, name, descriptor) {
	  return defineProperty$a.f(target, name, descriptor);
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$c = wellKnownSymbol$j;

	wellKnownSymbolWrapped.f = wellKnownSymbol$c;

	var path$5 = path$9;
	var hasOwn$8 = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$9 = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$5.Symbol || (path$5.Symbol = {});
	  if (!hasOwn$8(Symbol, NAME)) defineProperty$9(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$6 = functionCall;
	var getBuiltIn$5 = getBuiltIn$9;
	var wellKnownSymbol$b = wellKnownSymbol$j;
	var defineBuiltIn$3 = defineBuiltIn$4;

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$5('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$6(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$4 = classof$8;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$4(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$8 = objectDefineProperty.f;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
	var hasOwn$7 = hasOwnProperty_1;
	var toString$4 = objectToString;
	var wellKnownSymbol$a = wellKnownSymbol$j;

	var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');

	var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwn$7(target, TO_STRING_TAG$1)) {
	      defineProperty$8(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$2(target, 'toString', toString$4);
	    }
	  }
	};

	var global$5 = global$e;
	var isCallable$4 = isCallable$f;

	var WeakMap$1 = global$5.WeakMap;

	var weakMapBasicDetection = isCallable$4(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$4 = global$e;
	var isObject$2 = isObject$9;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
	var hasOwn$6 = hasOwnProperty_1;
	var shared$4 = sharedStore;
	var sharedKey$2 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$2 = global$4.TypeError;
	var WeakMap = global$4.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$4.state) {
	  var store = shared$4.state || (shared$4.state = new WeakMap());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store.get = store.get;
	  store.has = store.has;
	  store.set = store.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set = function (it, metadata) {
	    if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store.set(it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return store.get(it) || {};
	  };
	  has = function (it) {
	    return store.has(it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$1[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$6(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$1(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$6(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$6(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var bind$1 = functionBindContext;
	var uncurryThis$8 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject$5 = toObject$8;
	var lengthOfArrayLike$3 = lengthOfArrayLike$7;
	var arraySpeciesCreate = arraySpeciesCreate$2;

	var push$8 = uncurryThis$8([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$5($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$1(callbackfn, that);
	    var length = lengthOfArrayLike$3(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$8(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$8(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$1(7)
	};

	var $$h = _export;
	var global$3 = global$e;
	var call$5 = functionCall;
	var uncurryThis$7 = functionUncurryThis;
	var DESCRIPTORS$3 = descriptors;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var fails$7 = fails$i;
	var hasOwn$5 = hasOwnProperty_1;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var anObject$3 = anObject$7;
	var toIndexedObject$2 = toIndexedObject$8;
	var toPropertyKey = toPropertyKey$4;
	var $toString = toString$5;
	var createPropertyDescriptor$1 = createPropertyDescriptor$5;
	var nativeObjectCreate = objectCreate;
	var objectKeys = objectKeys$2;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var defineBuiltIn$2 = defineBuiltIn$4;
	var defineBuiltInAccessor = defineBuiltInAccessor$1;
	var shared$3 = sharedExports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys = hiddenKeys$5;
	var uid = uid$3;
	var wellKnownSymbol$9 = wellKnownSymbol$j;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$l = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$4 = setToStringTag$5;
	var InternalStateModule$2 = internalState;
	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';

	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);

	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global$3.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$1 = global$3.TypeError;
	var QObject = global$3.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var push$7 = uncurryThis$7([].push);

	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore$1 = shared$3('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS$3 && fails$7(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a !== 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$3) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$3(O);
	  var key = toPropertyKey(P);
	  anObject$3(Attributes);
	  if (hasOwn$5(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$3(O);
	  var properties = toIndexedObject$2(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$3 || call$5($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey(V);
	  var enumerable = call$5(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$1 && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$2(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype$1 && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys, key)) push$7(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype$1, key))) {
	      push$7(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$3) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$6(SymbolPrototype, this)) throw TypeError$1('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) call$5(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$5(this, HIDDEN) && hasOwn$5(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
	    };
	    if (DESCRIPTORS$3 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];

	  defineBuiltIn$2(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });

	  defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$9(name), name);
	  };

	  if (DESCRIPTORS$3) {
	    // https://github.com/tc39/proposal-Symbol-description
	    defineBuiltInAccessor(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });
	  }
	}

	$$h({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$l(name);
	});

	$$h({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$h({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$3 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$h({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive$1();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$4($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var NATIVE_SYMBOL$2 = symbolConstructorDetection;

	/* eslint-disable es/no-symbol -- safe */
	var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$g = _export;
	var getBuiltIn$4 = getBuiltIn$9;
	var hasOwn$4 = hasOwnProperty_1;
	var toString$3 = toString$5;
	var shared$2 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$g({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$3(key);
	    if (hasOwn$4(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$4('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$f = _export;
	var hasOwn$3 = hasOwnProperty_1;
	var isSymbol$2 = isSymbol$5;
	var tryToString$1 = tryToString$3;
	var shared$1 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$f({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$2(sym)) throw TypeError(tryToString$1(sym) + ' is not a symbol');
	    if (hasOwn$3(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var uncurryThis$6 = functionUncurryThis;

	var arraySlice$1 = uncurryThis$6([].slice);

	var uncurryThis$5 = functionUncurryThis;
	var isArray$3 = isArray$c;
	var isCallable$3 = isCallable$f;
	var classof$3 = classofRaw$2;
	var toString$2 = toString$5;

	var push$6 = uncurryThis$5([].push);

	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$3(replacer)) return replacer;
	  if (!isArray$3(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$6(keys, element);
	    else if (typeof element == 'number' || classof$3(element) === 'Number' || classof$3(element) === 'String') push$6(keys, toString$2(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$3(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$e = _export;
	var getBuiltIn$3 = getBuiltIn$9;
	var apply = functionApply;
	var call$4 = functionCall;
	var uncurryThis$4 = functionUncurryThis;
	var fails$6 = fails$i;
	var isCallable$2 = isCallable$f;
	var isSymbol$1 = isSymbol$5;
	var arraySlice = arraySlice$1;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var $String = String;
	var $stringify = getBuiltIn$3('JSON', 'stringify');
	var exec = uncurryThis$4(/./.exec);
	var charAt$2 = uncurryThis$4(''.charAt);
	var charCodeAt$1 = uncurryThis$4(''.charCodeAt);
	var replace = uncurryThis$4(''.replace);
	var numberToString = uncurryThis$4(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$6(function () {
	  var symbol = getBuiltIn$3('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) !== '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$6(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$2($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$2($replacer)) value = call$4($replacer, this, $String(key), value);
	    if (!isSymbol$1(value)) return value;
	  };
	  return apply($stringify, null, args);
	};

	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt$2(string, offset - 1);
	  var next = charAt$2(string, offset + 1);
	  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
	    return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
	  } return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$e({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice(arguments);
	      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$d = _export;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var fails$5 = fails$i;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var toObject$4 = toObject$8;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$1 = !NATIVE_SYMBOL || fails$5(function () { getOwnPropertySymbolsModule.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$d({ target: 'Object', stat: true, forced: FORCED$1 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$4(it)) : [];
	  }
	});

	var defineWellKnownSymbol$k = wellKnownSymbolDefine;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$k('asyncIterator');

	var defineWellKnownSymbol$j = wellKnownSymbolDefine;

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol$j('hasInstance');

	var defineWellKnownSymbol$i = wellKnownSymbolDefine;

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol$i('isConcatSpreadable');

	var defineWellKnownSymbol$h = wellKnownSymbolDefine;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$h('iterator');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine;

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol$g('match');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine;

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol$f('matchAll');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine;

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol$e('replace');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine;

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol$d('search');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine;

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol$c('species');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine;

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol$b('split');

	var defineWellKnownSymbol$a = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$a('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive();

	var getBuiltIn$2 = getBuiltIn$9;
	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
	var setToStringTag$3 = setToStringTag$5;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$9('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$3(getBuiltIn$2('Symbol'), 'Symbol');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$8('unscopables');

	var global$2 = global$e;
	var setToStringTag$2 = setToStringTag$5;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$2(global$2.JSON, 'JSON', true);

	var path$4 = path$9;

	var symbol$4 = path$4.Symbol;

	var iterators = {};

	var DESCRIPTORS$2 = descriptors;
	var hasOwn$2 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$2(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var fails$4 = fails$i;

	var correctPrototypeGetter = !fails$4(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$1 = hasOwnProperty_1;
	var isCallable$1 = isCallable$f;
	var toObject$3 = toObject$8;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
	  var object = toObject$3(O);
	  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$1(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object ? ObjectPrototype : null;
	};

	var fails$3 = fails$i;
	var isCallable = isCallable$f;
	var isObject$1 = isObject$9;
	var create$1 = objectCreate;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var defineBuiltIn$1 = defineBuiltIn$4;
	var wellKnownSymbol$8 = wellKnownSymbol$j;

	var ITERATOR$4 = wellKnownSymbol$8('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$1(IteratorPrototype$1) || fails$3(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$1(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable(IteratorPrototype$1[ITERATOR$4])) {
	  defineBuiltIn$1(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$5;
	var setToStringTag$1 = setToStringTag$5;
	var Iterators$5 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$5[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$c = _export;
	var call$3 = functionCall;
	var FunctionName = functionName;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf = objectGetPrototypeOf;
	var setToStringTag = setToStringTag$5;
	var defineBuiltIn = defineBuiltIn$4;
	var wellKnownSymbol$7 = wellKnownSymbol$j;
	var Iterators$4 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	FunctionName.CONFIGURABLE;
	IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$7('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }

	    return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$4[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$3(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$c({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$4[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$2 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$1 = toIndexedObject$8;
	var Iterators$3 = iterators;
	var InternalStateModule$1 = internalState;
	objectDefineProperty.f;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$2;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$1(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$1(undefined, true);
	  }
	  switch (kind) {
	    case 'keys': return createIterResultObject$1(index, false);
	    case 'values': return createIterResultObject$1(target[index], false);
	  } return createIterResultObject$1([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	Iterators$3.Arguments = Iterators$3.Array;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$1 = global$e;
	var classof$2 = classof$8;
	var createNonEnumerableProperty = createNonEnumerableProperty$5;
	var Iterators$2 = iterators;
	var wellKnownSymbol$6 = wellKnownSymbol$j;

	var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$2(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
	}

	var parent$s = symbol$4;


	var symbol$3 = parent$s;

	var wellKnownSymbol$5 = wellKnownSymbol$j;
	var defineProperty$7 = objectDefineProperty.f;

	var METADATA = wellKnownSymbol$5('metadata');
	var FunctionPrototype = Function.prototype;

	// Function.prototype[@@metadata]
	// https://github.com/tc39/proposal-decorator-metadata
	if (FunctionPrototype[METADATA] === undefined) {
	  defineProperty$7(FunctionPrototype, METADATA, {
	    value: null
	  });
	}

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-async-explicit-resource-management
	defineWellKnownSymbol$7('asyncDispose');

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-explicit-resource-management
	defineWellKnownSymbol$6('dispose');

	// TODO: Remove from `core-js@4`
	var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

	// `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators
	defineWellKnownSymbol$5('metadata');

	var parent$r = symbol$3;






	var symbol$2 = parent$r;

	var getBuiltIn$1 = getBuiltIn$9;
	var uncurryThis$3 = functionUncurryThis;

	var Symbol$2 = getBuiltIn$1('Symbol');
	var keyFor = Symbol$2.keyFor;
	var thisSymbolValue$1 = uncurryThis$3(Symbol$2.prototype.valueOf);

	// `Symbol.isRegisteredSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	var symbolIsRegistered = Symbol$2.isRegisteredSymbol || function isRegisteredSymbol(value) {
	  try {
	    return keyFor(thisSymbolValue$1(value)) !== undefined;
	  } catch (error) {
	    return false;
	  }
	};

	var $$b = _export;
	var isRegisteredSymbol$1 = symbolIsRegistered;

	// `Symbol.isRegisteredSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	$$b({ target: 'Symbol', stat: true }, {
	  isRegisteredSymbol: isRegisteredSymbol$1
	});

	var shared = sharedExports;
	var getBuiltIn = getBuiltIn$9;
	var uncurryThis$2 = functionUncurryThis;
	var isSymbol = isSymbol$5;
	var wellKnownSymbol$4 = wellKnownSymbol$j;

	var Symbol$1 = getBuiltIn('Symbol');
	var $isWellKnownSymbol = Symbol$1.isWellKnownSymbol;
	var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
	var thisSymbolValue = uncurryThis$2(Symbol$1.prototype.valueOf);
	var WellKnownSymbolsStore = shared('wks');

	for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$1), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
	  // some old engines throws on access to some keys like `arguments` or `caller`
	  try {
	    var symbolKey = symbolKeys[i];
	    if (isSymbol(Symbol$1[symbolKey])) wellKnownSymbol$4(symbolKey);
	  } catch (error) { /* empty */ }
	}

	// `Symbol.isWellKnownSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	var symbolIsWellKnown = function isWellKnownSymbol(value) {
	  if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
	  try {
	    var symbol = thisSymbolValue(value);
	    for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
	      // eslint-disable-next-line eqeqeq -- polyfilled symbols case
	      if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
	    }
	  } catch (error) { /* empty */ }
	  return false;
	};

	var $$a = _export;
	var isWellKnownSymbol$1 = symbolIsWellKnown;

	// `Symbol.isWellKnownSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	$$a({ target: 'Symbol', stat: true, forced: true }, {
	  isWellKnownSymbol: isWellKnownSymbol$1
	});

	var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

	// `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$4('matcher');

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol$3('observable');

	var $$9 = _export;
	var isRegisteredSymbol = symbolIsRegistered;

	// `Symbol.isRegistered` method
	// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	$$9({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
	  isRegistered: isRegisteredSymbol
	});

	var $$8 = _export;
	var isWellKnownSymbol = symbolIsWellKnown;

	// `Symbol.isWellKnown` method
	// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	$$8({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
	  isWellKnown: isWellKnownSymbol
	});

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

	// `Symbol.metadataKey` well-known symbol
	// https://github.com/tc39/proposal-decorator-metadata
	defineWellKnownSymbol$2('metadataKey');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = wellKnownSymbolDefine;

	defineWellKnownSymbol('replaceAll');

	var parent$q = symbol$2;




	// TODO: Remove from `core-js@4`






	var symbol$1 = parent$q;

	var symbol = symbol$1;

	var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

	var uncurryThis$1 = functionUncurryThis;
	var toIntegerOrInfinity = toIntegerOrInfinity$3;
	var toString$1 = toString$5;
	var requireObjectCoercible = requireObjectCoercible$3;

	var charAt$1 = uncurryThis$1(''.charAt);
	var charCodeAt = uncurryThis$1(''.charCodeAt);
	var stringSlice = uncurryThis$1(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$1(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$1(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var charAt = stringMultibyte.charAt;
	var toString = toString$5;
	var InternalStateModule = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject(undefined, true);
	  point = charAt(string, index);
	  state.index += point.length;
	  return createIterResultObject(point, false);
	});

	var classof$1 = classof$8;
	var getMethod$1 = getMethod$3;
	var isNullOrUndefined = isNullOrUndefined$3;
	var Iterators$1 = iterators;
	var wellKnownSymbol$3 = wellKnownSymbol$j;

	var ITERATOR$2 = wellKnownSymbol$3('iterator');

	var getIteratorMethod$7 = function (it) {
	  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$2)
	    || getMethod$1(it, '@@iterator')
	    || Iterators$1[classof$1(it)];
	};

	var getIteratorMethod$6 = getIteratorMethod$7;

	var getIteratorMethod_1 = getIteratorMethod$6;

	var parent$p = getIteratorMethod_1;


	var getIteratorMethod$5 = parent$p;

	var parent$o = getIteratorMethod$5;

	var getIteratorMethod$4 = parent$o;

	var parent$n = getIteratorMethod$4;

	var getIteratorMethod$3 = parent$n;

	var getIteratorMethod$2 = getIteratorMethod$3;

	var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$2);

	var DESCRIPTORS$1 = descriptors;
	var isArray$2 = isArray$c;

	var $TypeError$1 = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function () {
	  // makes no sense without proper strict mode support
	  if (this !== undefined) return true;
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();

	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$2(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
	    throw $TypeError$1('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $$7 = _export;
	var toObject$2 = toObject$8;
	var lengthOfArrayLike$2 = lengthOfArrayLike$7;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
	var fails$2 = fails$i;

	var INCORRECT_TO_LENGTH = fails$2(function () {
	  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
	});

	// V8 and Safari <= 15.4, FF < 23 throws InternalError
	// https://bugs.chromium.org/p/v8/issues/detail?id=12681
	var properErrorOnNonWritableLength = function () {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).push();
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	};

	var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

	// `Array.prototype.push` method
	// https://tc39.es/ecma262/#sec-array.prototype.push
	$$7({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  push: function push(item) {
	    var O = toObject$2(this);
	    var len = lengthOfArrayLike$2(O);
	    var argCount = arguments.length;
	    doesNotExceedSafeInteger(len + argCount);
	    for (var i = 0; i < argCount; i++) {
	      O[len] = arguments[i];
	      len++;
	    }
	    setArrayLength(O, len);
	    return len;
	  }
	});

	var path$3 = path$9;

	var entryVirtual$6 = function (CONSTRUCTOR) {
	  return path$3[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$5 = entryVirtual$6;

	var push$5 = entryVirtual$5('Array').push;

	var isPrototypeOf$5 = objectIsPrototypeOf;
	var method$5 = push$5;

	var ArrayPrototype$6 = Array.prototype;

	var push$4 = function (it) {
	  var own = it.push;
	  return it === ArrayPrototype$6 || (isPrototypeOf$5(ArrayPrototype$6, it) && own === ArrayPrototype$6.push) ? method$5 : own;
	};

	var parent$m = push$4;

	var push$3 = parent$m;

	var parent$l = push$3;

	var push$2 = parent$l;

	var parent$k = push$2;

	var push$1 = parent$k;

	var push = push$1;

	var _pushInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(push);

	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof _Symbol && _getIteratorMethod(r) || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (_pushInstanceProperty(a).call(a, e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}

	var $$6 = _export;
	var isArray$1 = isArray$c;
	var isConstructor$1 = isConstructor$3;
	var isObject = isObject$9;
	var toAbsoluteIndex = toAbsoluteIndex$3;
	var lengthOfArrayLike$1 = lengthOfArrayLike$7;
	var toIndexedObject = toIndexedObject$8;
	var createProperty$1 = createProperty$4;
	var wellKnownSymbol$2 = wellKnownSymbol$j;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
	var nativeSlice = arraySlice$1;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

	var SPECIES = wellKnownSymbol$2('species');
	var $Array$1 = Array;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$6({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike$1(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$1(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$1(Constructor) && (Constructor === $Array$1 || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$4 = entryVirtual$6;

	var slice$6 = entryVirtual$4('Array').slice;

	var isPrototypeOf$4 = objectIsPrototypeOf;
	var method$4 = slice$6;

	var ArrayPrototype$5 = Array.prototype;

	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$5 || (isPrototypeOf$4(ArrayPrototype$5, it) && own === ArrayPrototype$5.slice) ? method$4 : own;
	};

	var parent$j = slice$5;

	var slice$4 = parent$j;

	var parent$i = slice$4;

	var slice$3 = parent$i;

	var parent$h = slice$3;

	var slice$2 = parent$h;

	var slice$1 = slice$2;

	var _sliceInstanceProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(slice$1);

	var call$2 = functionCall;
	var anObject$2 = anObject$7;
	var getMethod = getMethod$3;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$2(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$2(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$2(innerResult);
	  return value;
	};

	var anObject$1 = anObject$7;
	var iteratorClose = iteratorClose$1;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var wellKnownSymbol$1 = wellKnownSymbol$j;
	var Iterators = iterators;

	var ITERATOR$1 = wellKnownSymbol$1('iterator');
	var ArrayPrototype$4 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype$4[ITERATOR$1] === it);
	};

	var call$1 = functionCall;
	var aCallable = aCallable$3;
	var anObject = anObject$7;
	var tryToString = tryToString$3;
	var getIteratorMethod$1 = getIteratorMethod$7;

	var $TypeError = TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(call$1(iteratorMethod, argument));
	  throw $TypeError(tryToString(argument) + ' is not iterable');
	};

	var bind = functionBindContext;
	var call = functionCall;
	var toObject$1 = toObject$8;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var isConstructor = isConstructor$3;
	var lengthOfArrayLike = lengthOfArrayLike$7;
	var createProperty = createProperty$4;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$7;

	var $Array = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$1(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = call(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol = wellKnownSymbol$j;

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var $$5 = _export;
	var from$5 = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$5({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from$5
	});

	var path$2 = path$9;

	var from$4 = path$2.Array.from;

	var parent$g = from$4;

	var from$3 = parent$g;

	var parent$f = from$3;

	var from$2 = parent$f;

	var parent$e = from$2;

	var from$1 = parent$e;

	var from = from$1;

	var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from);

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  var _context;
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = _sliceInstanceProperty$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return _Array$from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var defineProperty$6 = {exports: {}};

	var $$4 = _export;
	var DESCRIPTORS = descriptors;
	var defineProperty$5 = objectDefineProperty.f;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	$$4({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$5, sham: !DESCRIPTORS }, {
	  defineProperty: defineProperty$5
	});

	var path$1 = path$9;

	var Object$1 = path$1.Object;

	var defineProperty$4 = defineProperty$6.exports = function defineProperty(it, key, desc) {
	  return Object$1.defineProperty(it, key, desc);
	};

	if (Object$1.defineProperty.sham) defineProperty$4.sham = true;

	var definePropertyExports = defineProperty$6.exports;

	var parent$d = definePropertyExports;

	var defineProperty$3 = parent$d;

	var parent$c = defineProperty$3;

	var defineProperty$2 = parent$c;

	var parent$b = defineProperty$2;

	var defineProperty$1 = parent$b;

	var defineProperty = defineProperty$1;

	var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty);

	var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

	var iterator$4 = WrappedWellKnownSymbolModule$1.f('iterator');

	var parent$a = iterator$4;


	var iterator$3 = parent$a;

	var parent$9 = iterator$3;

	var iterator$2 = parent$9;

	var parent$8 = iterator$2;

	var iterator$1 = parent$8;

	var iterator = iterator$1;

	var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

	var toPrimitive$4 = WrappedWellKnownSymbolModule.f('toPrimitive');

	var parent$7 = toPrimitive$4;

	var toPrimitive$3 = parent$7;

	var parent$6 = toPrimitive$3;

	var toPrimitive$2 = parent$6;

	var parent$5 = toPrimitive$2;

	var toPrimitive$1 = parent$5;

	var toPrimitive = toPrimitive$1;

	var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive);

	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[_Symbol$toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  _Object$defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}

	var $$3 = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$3({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$3 = entryVirtual$6;

	var filter$3 = entryVirtual$3('Array').filter;

	var isPrototypeOf$3 = objectIsPrototypeOf;
	var method$3 = filter$3;

	var ArrayPrototype$3 = Array.prototype;

	var filter$2 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$3 || (isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.filter) ? method$3 : own;
	};

	var parent$4 = filter$2;

	var filter$1 = parent$4;

	var filter = filter$1;

	var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

	var $$2 = _export;
	var toObject = toObject$8;
	var nativeKeys = objectKeys$2;
	var fails$1 = fails$i;

	var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$2({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});

	var path = path$9;

	var keys$2 = path.Object.keys;

	var parent$3 = keys$2;

	var keys$1 = parent$3;

	var keys = keys$1;

	var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys);

	var fails = fails$i;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;

	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var $$1 = _export;
	var forEach$4 = arrayForEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	$$1({ target: 'Array', proto: true, forced: [].forEach !== forEach$4 }, {
	  forEach: forEach$4
	});

	var entryVirtual$2 = entryVirtual$6;

	var forEach$3 = entryVirtual$2('Array').forEach;

	var parent$2 = forEach$3;

	var forEach$2 = parent$2;

	var classof = classof$8;
	var hasOwn = hasOwnProperty_1;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var method$2 = forEach$2;

	var ArrayPrototype$2 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.forEach)
	    || hasOwn(DOMIterables, classof(it)) ? method$2 : own;
	};

	var forEach = forEach$1;

	var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach);

	var $ = _export;
	var uncurryThis = functionUncurryThis;
	var isArray = isArray$c;

	var nativeReverse = uncurryThis([].reverse);
	var test = [1, 2];

	// `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794
	$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse(this);
	  }
	});

	var entryVirtual$1 = entryVirtual$6;

	var reverse$3 = entryVirtual$1('Array').reverse;

	var isPrototypeOf$1 = objectIsPrototypeOf;
	var method$1 = reverse$3;

	var ArrayPrototype$1 = Array.prototype;

	var reverse$2 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.reverse) ? method$1 : own;
	};

	var parent$1 = reverse$2;

	var reverse$1 = parent$1;

	var reverse = reverse$1;

	var _reverseInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(reverse);

	var slice = slice$4;

	var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice);

	var entryVirtual = entryVirtual$6;

	var concat$3 = entryVirtual('Array').concat;

	var isPrototypeOf = objectIsPrototypeOf;
	var method = concat$3;

	var ArrayPrototype = Array.prototype;

	var concat$2 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;
	};

	var parent = concat$2;

	var concat$1 = parent;

	var concat = concat$1;

	var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat);

	var _TOKEN_SYMBOL_MAP;
	// token const
	var TOKEN_EOF = 0; // end-of-file
	var TOKEN_IGNORED = 1; // \t', '\n', '\v', '\f', '\r', ' '
	var TOKEN_LEFT_BRACKET = 2; // [
	var TOKEN_RIGHT_BRACKET = 3; // ]
	var TOKEN_LEFT_BRACE = 4; // {
	var TOKEN_RIGHT_BRACE = 5; // }
	var TOKEN_COLON = 6; // :
	var TOKEN_DOT = 7; // .
	var TOKEN_COMMA = 8; // ,
	var TOKEN_QUOTE = 9; // "
	var TOKEN_ESCAPE_CHARACTER = 10; // \
	var TOKEN_SLASH = 11; // /
	var TOKEN_NEGATIVE = 12; // -
	var TOKEN_NULL = 13; // null
	var TOKEN_TRUE = 14; // true
	var TOKEN_FALSE = 15; // false
	var TOKEN_ALPHABET_LOWERCASE_A = 16; // a
	var TOKEN_ALPHABET_LOWERCASE_B = 17; // b
	var TOKEN_ALPHABET_LOWERCASE_C = 18; // c
	var TOKEN_ALPHABET_LOWERCASE_D = 19; // d
	var TOKEN_ALPHABET_LOWERCASE_E = 20; // e
	var TOKEN_ALPHABET_LOWERCASE_F = 21; // f
	var TOKEN_ALPHABET_LOWERCASE_L = 22; // l
	var TOKEN_ALPHABET_LOWERCASE_N = 23; // n
	var TOKEN_ALPHABET_LOWERCASE_R = 24; // r
	var TOKEN_ALPHABET_LOWERCASE_S = 25; // s
	var TOKEN_ALPHABET_LOWERCASE_T = 26; // t
	var TOKEN_ALPHABET_LOWERCASE_U = 27; // u
	var TOKEN_ALPHABET_UPPERCASE_A = 28; // A
	var TOKEN_ALPHABET_UPPERCASE_B = 29; // B
	var TOKEN_ALPHABET_UPPERCASE_C = 30; // C
	var TOKEN_ALPHABET_UPPERCASE_D = 31; // D
	var TOKEN_ALPHABET_UPPERCASE_E = 32; // E
	var TOKEN_ALPHABET_UPPERCASE_F = 33; // F
	var TOKEN_NUMBER = 34; // number
	var TOKEN_NUMBER_0 = 35; // 0
	var TOKEN_NUMBER_1 = 36; // 1
	var TOKEN_NUMBER_2 = 37; // 2
	var TOKEN_NUMBER_3 = 38; // 3
	var TOKEN_NUMBER_4 = 39; // 4
	var TOKEN_NUMBER_5 = 40; // 5
	var TOKEN_NUMBER_6 = 41; // 6
	var TOKEN_NUMBER_7 = 42; // 7
	var TOKEN_NUMBER_8 = 43; // 8
	var TOKEN_NUMBER_9 = 44; // 9
	var TOKEN_OTHERS = 45; // anything else in json

	// token symbol const
	var TOKEN_EOF_SYMBOL = 'EOF';
	var TOKEN_LEFT_BRACKET_SYMBOL = '[';
	var TOKEN_RIGHT_BRACKET_SYMBOL = ']';
	var TOKEN_LEFT_BRACE_SYMBOL = '{';
	var TOKEN_RIGHT_BRACE_SYMBOL = '}';
	var TOKEN_COLON_SYMBOL = ':';
	var TOKEN_DOT_SYMBOL = '.';
	var TOKEN_COMMA_SYMBOL = ',';
	var TOKEN_QUOTE_SYMBOL = '"';
	var TOKEN_ESCAPE_CHARACTER_SYMBOL = '\\';
	var TOKEN_SLASH_SYMBOL = '/';
	var TOKEN_NEGATIVE_SYMBOL = '-';
	var TOKEN_NULL_SYMBOL = 'null';
	var TOKEN_TRUE_SYMBOL = 'true';
	var TOKEN_FALSE_SYMBOL = 'false';
	var TOKEN_ALPHABET_LOWERCASE_A_SYMBOL = 'a';
	var TOKEN_ALPHABET_LOWERCASE_B_SYMBOL = 'b';
	var TOKEN_ALPHABET_LOWERCASE_C_SYMBOL = 'c';
	var TOKEN_ALPHABET_LOWERCASE_D_SYMBOL = 'd';
	var TOKEN_ALPHABET_LOWERCASE_E_SYMBOL = 'e';
	var TOKEN_ALPHABET_LOWERCASE_F_SYMBOL = 'f';
	var TOKEN_ALPHABET_LOWERCASE_L_SYMBOL = 'l';
	var TOKEN_ALPHABET_LOWERCASE_N_SYMBOL = 'n';
	var TOKEN_ALPHABET_LOWERCASE_R_SYMBOL = 'r';
	var TOKEN_ALPHABET_LOWERCASE_S_SYMBOL = 's';
	var TOKEN_ALPHABET_LOWERCASE_T_SYMBOL = 't';
	var TOKEN_ALPHABET_LOWERCASE_U_SYMBOL = 'u';
	var TOKEN_ALPHABET_UPPERCASE_A_SYMBOL = 'A';
	var TOKEN_ALPHABET_UPPERCASE_B_SYMBOL = 'B';
	var TOKEN_ALPHABET_UPPERCASE_C_SYMBOL = 'C';
	var TOKEN_ALPHABET_UPPERCASE_D_SYMBOL = 'D';
	var TOKEN_ALPHABET_UPPERCASE_E_SYMBOL = 'E';
	var TOKEN_ALPHABET_UPPERCASE_F_SYMBOL = 'F';
	var TOKEN_NUMBER_0_SYMBOL = '0';
	var TOKEN_NUMBER_1_SYMBOL = '1';
	var TOKEN_NUMBER_2_SYMBOL = '2';
	var TOKEN_NUMBER_3_SYMBOL = '3';
	var TOKEN_NUMBER_4_SYMBOL = '4';
	var TOKEN_NUMBER_5_SYMBOL = '5';
	var TOKEN_NUMBER_6_SYMBOL = '6';
	var TOKEN_NUMBER_7_SYMBOL = '7';
	var TOKEN_NUMBER_8_SYMBOL = '8';
	var TOKEN_NUMBER_9_SYMBOL = '9';

	// token symbol const
	var TOKEN_SYMBOL_MAP = (_TOKEN_SYMBOL_MAP = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_EOF, TOKEN_EOF_SYMBOL), TOKEN_LEFT_BRACKET, TOKEN_LEFT_BRACKET_SYMBOL), TOKEN_RIGHT_BRACKET, TOKEN_RIGHT_BRACKET_SYMBOL), TOKEN_LEFT_BRACE, TOKEN_LEFT_BRACE_SYMBOL), TOKEN_RIGHT_BRACE, TOKEN_RIGHT_BRACE_SYMBOL), TOKEN_COLON, TOKEN_COLON_SYMBOL), TOKEN_DOT, TOKEN_DOT_SYMBOL), TOKEN_COMMA, TOKEN_COMMA_SYMBOL), TOKEN_QUOTE, TOKEN_QUOTE_SYMBOL), TOKEN_ESCAPE_CHARACTER, TOKEN_ESCAPE_CHARACTER_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_SLASH, TOKEN_SLASH_SYMBOL), TOKEN_NEGATIVE, TOKEN_NEGATIVE_SYMBOL), TOKEN_NULL, TOKEN_NULL_SYMBOL), TOKEN_TRUE, TOKEN_TRUE_SYMBOL), TOKEN_FALSE, TOKEN_FALSE_SYMBOL), TOKEN_ALPHABET_LOWERCASE_A, TOKEN_ALPHABET_LOWERCASE_A_SYMBOL), TOKEN_ALPHABET_LOWERCASE_B, TOKEN_ALPHABET_LOWERCASE_B_SYMBOL), TOKEN_ALPHABET_LOWERCASE_C, TOKEN_ALPHABET_LOWERCASE_C_SYMBOL), TOKEN_ALPHABET_LOWERCASE_D, TOKEN_ALPHABET_LOWERCASE_D_SYMBOL), TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_E_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_F_SYMBOL), TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L_SYMBOL), TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_N_SYMBOL), TOKEN_ALPHABET_LOWERCASE_R, TOKEN_ALPHABET_LOWERCASE_R_SYMBOL), TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_S_SYMBOL), TOKEN_ALPHABET_LOWERCASE_T, TOKEN_ALPHABET_LOWERCASE_T_SYMBOL), TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_U_SYMBOL), TOKEN_ALPHABET_UPPERCASE_A, TOKEN_ALPHABET_UPPERCASE_A_SYMBOL), TOKEN_ALPHABET_UPPERCASE_B, TOKEN_ALPHABET_UPPERCASE_B_SYMBOL), TOKEN_ALPHABET_UPPERCASE_C, TOKEN_ALPHABET_UPPERCASE_C_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_ALPHABET_UPPERCASE_D, TOKEN_ALPHABET_UPPERCASE_D_SYMBOL), TOKEN_ALPHABET_UPPERCASE_E, TOKEN_ALPHABET_UPPERCASE_E_SYMBOL), TOKEN_ALPHABET_UPPERCASE_F, TOKEN_ALPHABET_UPPERCASE_F_SYMBOL), TOKEN_NUMBER_0, TOKEN_NUMBER_0_SYMBOL), TOKEN_NUMBER_1, TOKEN_NUMBER_1_SYMBOL), TOKEN_NUMBER_2, TOKEN_NUMBER_2_SYMBOL), TOKEN_NUMBER_3, TOKEN_NUMBER_3_SYMBOL), TOKEN_NUMBER_4, TOKEN_NUMBER_4_SYMBOL), TOKEN_NUMBER_5, TOKEN_NUMBER_5_SYMBOL), TOKEN_NUMBER_6, TOKEN_NUMBER_6_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_NUMBER_7, TOKEN_NUMBER_7_SYMBOL), TOKEN_NUMBER_8, TOKEN_NUMBER_8_SYMBOL), TOKEN_NUMBER_9, TOKEN_NUMBER_9_SYMBOL));

	// helper method check if token is in ignore token
	function isIgnoreToken(c) {
	  switch (c) {
	    case '\t':
	    case '\n':
	    case '\v':
	    case '\f':
	    case '\r':
	    case ' ':
	      return true;
	  }
	  return false;
	}

	// get array real length
	function arrayLength(a) {
	  var _context;
	  if (!a) {
	    return 0;
	  }
	  return _filterInstanceProperty(_context = _Object$keys(a)).call(_context, function (el) {
	    return !(+el % 1) && +el >= 0 && +el < Math.pow(2, 32);
	  }).length;
	}

	// helper method match stack with tokens
	function matchStack(stack, tokens) {
	  var pointer = arrayLength(stack);
	  var tokensLeft = arrayLength(tokens);
	  for (;;) {
	    tokensLeft--;
	    pointer--;
	    if (tokensLeft < 0) {
	      break;
	    }
	    if (pointer < 0) {
	      return false;
	    }
	    if (stack[pointer] !== tokens[tokensLeft]) {
	      return false;
	    }
	  }
	  return true;
	}

	// main lexer
	var Lexer = /*#__PURE__*/function () {
	  function Lexer() {
	    _classCallCheck(this, Lexer);
	    this.JSONContent = ''; // input JSON content
	    this.PaddingContent = ''; // padding content for ignored characters and escape characters, etc.
	    this.JSONSegment = ''; // appended JSON segment by the AppendString() method.
	    this.TokenStack = []; // token stack for input JSON
	    this.MirrorTokenStack = []; // token stack for auto-completed tokens
	  }

	  // Get token on the stack top
	  _createClass(Lexer, [{
	    key: "getTopTokenOnStack",
	    value: function getTopTokenOnStack() {
	      if (this.TokenStack.length === 0) {
	        return TOKEN_EOF;
	      }
	      return this.TokenStack[this.TokenStack.length - 1];
	    }

	    // Get token on the mirror stack top
	  }, {
	    key: "getTopTokenOnMirrorStack",
	    value: function getTopTokenOnMirrorStack() {
	      if (this.MirrorTokenStack.length === 0) {
	        return TOKEN_EOF;
	      }
	      return this.MirrorTokenStack[this.MirrorTokenStack.length - 1];
	    }

	    // Pop token on the stack top
	  }, {
	    key: "popTokenStack",
	    value: function popTokenStack() {
	      if (this.TokenStack.length === 0) {
	        return TOKEN_EOF;
	      }
	      return this.TokenStack.pop();
	    }

	    // Pop token on the mirror stack top
	  }, {
	    key: "popMirrorTokenStack",
	    value: function popMirrorTokenStack() {
	      if (this.MirrorTokenStack.length === 0) {
	        return TOKEN_EOF;
	      }
	      return this.MirrorTokenStack.pop();
	    }

	    // Push token into the stack
	  }, {
	    key: "pushTokenStack",
	    value: function pushTokenStack(token) {
	      this.TokenStack.push(token);
	    }

	    // Push token into the mirror stack
	  }, {
	    key: "pushMirrorTokenStack",
	    value: function pushMirrorTokenStack(token) {
	      this.MirrorTokenStack.push(token);
	    }

	    // Convert mirror stack token into string
	  }, {
	    key: "dumpMirrorTokenStackToString",
	    value: function dumpMirrorTokenStackToString() {
	      var _context2, _context3, _context4;
	      var ret = '';
	      _forEachInstanceProperty(_context2 = _reverseInstanceProperty(_context3 = _sliceInstanceProperty(_context4 = this.MirrorTokenStack).call(_context4)).call(_context3)).call(_context2, function (item) {
	        ret += TOKEN_SYMBOL_MAP[item];
	      });
	      return ret;
	    }

	    // Skip JSON segment by length n
	  }, {
	    key: "skipJSONSegment",
	    value: function skipJSONSegment(n) {
	      this.JSONSegment = this.JSONSegment.substring(n);
	    }

	    // Push negative symbol `-` into JSON content
	  }, {
	    key: "pushNegativeIntoJSONContent",
	    value: function pushNegativeIntoJSONContent() {
	      this.JSONContent += TOKEN_NEGATIVE_SYMBOL;
	    }

	    // Push byte into JSON content by given
	  }, {
	    key: "pushByteIntoPaddingContent",
	    value: function pushByteIntoPaddingContent(s) {
	      this.PaddingContent += s;
	    }

	    // Append padding content into JSON content
	  }, {
	    key: "appendPaddingContentToJSONContent",
	    value: function appendPaddingContentToJSONContent() {
	      this.JSONContent += this.PaddingContent;
	    }

	    // Check if padding content is empty
	  }, {
	    key: "havePaddingContent",
	    value: function havePaddingContent() {
	      return this.PaddingContent.length > 0;
	    }

	    // Set padding content to empty
	  }, {
	    key: "cleanPaddingContent",
	    value: function cleanPaddingContent() {
	      this.PaddingContent = '';
	    }

	    // check if JSON stream stopped at an object property's key start, like `{"`
	  }, {
	    key: "streamStoppedInAnObjectKeyStart",
	    value: function streamStoppedInAnObjectKeyStart() {
	      // `{`, `"` in stack, or `,`, `"` in stack
	      var case1 = [TOKEN_LEFT_BRACE, TOKEN_QUOTE];
	      var case2 = [TOKEN_COMMA, TOKEN_QUOTE];
	      // `}` in mirror stack
	      var case3 = [TOKEN_RIGHT_BRACE];
	      return (matchStack(this.TokenStack, case1) || matchStack(this.TokenStack, case2)) && matchStack(this.MirrorTokenStack, case3);
	    }

	    // check if JSON stream stopped in an object property's key, like `{"field`
	  }, {
	    key: "streamStoppedInAnObjectKeyEnd",
	    value: function streamStoppedInAnObjectKeyEnd() {
	      // `{`, `"`, `"` in stack, or `,`, `"`, `"` in stack
	      var case1 = [TOKEN_LEFT_BRACE, TOKEN_QUOTE, TOKEN_QUOTE];
	      var case2 = [TOKEN_COMMA, TOKEN_QUOTE, TOKEN_QUOTE];
	      // `"`, `:`, `n`, `u`, `l`, `l`, `}` in mirror stack
	      var case3 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N, TOKEN_COLON, TOKEN_QUOTE];
	      return (matchStack(this.TokenStack, case1) || matchStack(this.TokenStack, case2)) && matchStack(this.MirrorTokenStack, case3);
	    }

	    // check if JSON stream stopped in an object property's value start, like `{"field": "`
	  }, {
	    key: "streamStoppedInAnObjectStringValueStart",
	    value: function streamStoppedInAnObjectStringValueStart() {
	      // `:`, `"` in stack
	      var case1 = [TOKEN_COLON, TOKEN_QUOTE];
	      // `n`, `u`, `l`, `l`, `}` in mirror stack
	      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in an object property's value finish, like `{"field": "value"`
	  }, {
	    key: "streamStoppedInAnObjectValueEnd",
	    value: function streamStoppedInAnObjectValueEnd() {
	      // `"`, `}` left
	      var tokens = [TOKEN_RIGHT_BRACE, TOKEN_QUOTE];
	      return matchStack(this.MirrorTokenStack, tokens);
	    }

	    // check if JSON stream stopped in an object property's value start by array, like `{"field":[`
	  }, {
	    key: "streamStoppedInAnObjectArrayValueStart",
	    value: function streamStoppedInAnObjectArrayValueStart() {
	      // `:`, `[` in stack
	      var case1 = [TOKEN_COLON, TOKEN_LEFT_BRACKET];
	      // `n`, `u`, `l`, `l`, `}` in mirror stack
	      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in an object property's value start by object, like `{"field":{`
	  }, {
	    key: "streamStoppedInAnObjectObjectValueStart",
	    value: function streamStoppedInAnObjectObjectValueStart() {
	      // `:`, `{` in stack
	      var case1 = [TOKEN_COLON, TOKEN_LEFT_BRACE];
	      // `n`, `u`, `l`, `l`, `}` in mirror stack
	      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in an object property's negative number value start, like `:-`
	  }, {
	    key: "streamStoppedInAnObjectNegativeNumberValueStart",
	    value: function streamStoppedInAnObjectNegativeNumberValueStart() {
	      // `:`, `-` in stack
	      var case1 = [TOKEN_COLON, TOKEN_NEGATIVE];
	      return matchStack(this.TokenStack, case1);
	    }

	    // check if JSON stream stopped in an object property's negative number value start, like `-`
	  }, {
	    key: "streamStoppedInANegativeNumberValueStart",
	    value: function streamStoppedInANegativeNumberValueStart() {
	      // `-` in stack
	      var case1 = [TOKEN_NEGATIVE];
	      // `0` in mirror stack
	      var case2 = [TOKEN_NUMBER_0];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in an array
	  }, {
	    key: "streamStoppedInAnArray",
	    value: function streamStoppedInAnArray() {
	      return this.getTopTokenOnMirrorStack() === TOKEN_RIGHT_BRACKET;
	    }

	    // check if JSON stream stopped in an array's string value end, like `["value"]`
	  }, {
	    key: "streamStoppedInAnArrayStringValueEnd",
	    value: function streamStoppedInAnArrayStringValueEnd() {
	      // `"`, `"` in stack
	      var case1 = [TOKEN_QUOTE, TOKEN_QUOTE];
	      // `"`, `]` in mirror stack
	      var case2 = [TOKEN_RIGHT_BRACKET, TOKEN_QUOTE];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in an object property's value start by array, like `{"field":{`
	  }, {
	    key: "streamStoppedInAnObjectNullValuePlaceholderStart",
	    value: function streamStoppedInAnObjectNullValuePlaceholderStart() {
	      // `n`, `u`, `l`, `l`, `}` in mirror stack
	      var case1 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
	      return matchStack(this.MirrorTokenStack, case1);
	    }

	    // check if JSON stream stopped in a string, like `""`
	  }, {
	    key: "streamStoppedInAString",
	    value: function streamStoppedInAString() {
	      return this.getTopTokenOnStack() === TOKEN_QUOTE && this.getTopTokenOnMirrorStack() === TOKEN_QUOTE;
	    }

	    // check if JSON stream stopped in a string's unicode escape, like `\u????`
	  }, {
	    key: "streamStoppedInAnStringUnicodeEscape",
	    value: function streamStoppedInAnStringUnicodeEscape() {
	      // `\`, `u` in stack
	      var case1 = [TOKEN_ESCAPE_CHARACTER, TOKEN_ALPHABET_LOWERCASE_U];
	      // `"` in mirror stack
	      var case2 = [TOKEN_QUOTE];
	      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
	    }

	    // check if JSON stream stopped in a number, like `[0-9]`
	  }, {
	    key: "streamStoppedInANumber",
	    value: function streamStoppedInANumber() {
	      return this.getTopTokenOnStack() === TOKEN_NUMBER;
	    }

	    // check if JSON stream stopped in a number first decimal place, like `.?`
	  }, {
	    key: "streamStoppedInANumberDecimalPart",
	    value: function streamStoppedInANumberDecimalPart() {
	      return this.getTopTokenOnStack() === TOKEN_DOT;
	    }

	    // check if JSON stream stopped in a number other decimal places (except first place), like `.[0-9]?`
	  }, {
	    key: "streamStoppedInANumberDecimalPartMiddle",
	    value: function streamStoppedInANumberDecimalPartMiddle() {
	      // `.`, TOKEN_NUMBER in stack
	      var case1 = [TOKEN_DOT, TOKEN_NUMBER];
	      return matchStack(this.TokenStack, case1);
	    }

	    // check if JSON stream stopped in escape character, like `\`
	  }, {
	    key: "streamStoppedWithLeadingEscapeCharacter",
	    value: function streamStoppedWithLeadingEscapeCharacter() {
	      return this.getTopTokenOnStack() === TOKEN_ESCAPE_CHARACTER;
	    }

	    // lexer match JSON token method, convert JSON segment to JSON token
	  }, {
	    key: "matchToken",
	    value: function matchToken() {
	      // segment end
	      if (this.JSONSegment.length === 0) {
	        return [TOKEN_EOF, 0];
	      }
	      var tokenSymbol = this.JSONSegment.substring(0, 1);

	      // check if ignored token
	      if (isIgnoreToken(tokenSymbol)) {
	        this.skipJSONSegment(1);
	        return [TOKEN_IGNORED, tokenSymbol];
	      }

	      // match token
	      switch (tokenSymbol) {
	        case TOKEN_LEFT_BRACKET_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_LEFT_BRACKET, tokenSymbol];
	        case TOKEN_RIGHT_BRACKET_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_RIGHT_BRACKET, tokenSymbol];
	        case TOKEN_LEFT_BRACE_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_LEFT_BRACE, tokenSymbol];
	        case TOKEN_RIGHT_BRACE_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_RIGHT_BRACE, tokenSymbol];
	        case TOKEN_COLON_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_COLON, tokenSymbol];
	        case TOKEN_DOT_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_DOT, tokenSymbol];
	        case TOKEN_COMMA_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_COMMA, tokenSymbol];
	        case TOKEN_QUOTE_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_QUOTE, tokenSymbol];
	        case TOKEN_ESCAPE_CHARACTER_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ESCAPE_CHARACTER, tokenSymbol];
	        case TOKEN_SLASH_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_SLASH, tokenSymbol];
	        case TOKEN_NEGATIVE_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NEGATIVE, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_A_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_A, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_B_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_B, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_C_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_C, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_D_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_D, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_E_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_E, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_F_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_F, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_L_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_L, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_N_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_N, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_R_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_R, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_S_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_S, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_T_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_T, tokenSymbol];
	        case TOKEN_ALPHABET_LOWERCASE_U_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_LOWERCASE_U, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_A_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_A, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_B_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_B, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_C_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_C, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_D_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_D, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_E_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_E, tokenSymbol];
	        case TOKEN_ALPHABET_UPPERCASE_F_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_ALPHABET_UPPERCASE_F, tokenSymbol];
	        case TOKEN_NUMBER_0_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_0, tokenSymbol];
	        case TOKEN_NUMBER_1_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_1, tokenSymbol];
	        case TOKEN_NUMBER_2_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_2, tokenSymbol];
	        case TOKEN_NUMBER_3_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_3, tokenSymbol];
	        case TOKEN_NUMBER_4_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_4, tokenSymbol];
	        case TOKEN_NUMBER_5_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_5, tokenSymbol];
	        case TOKEN_NUMBER_6_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_6, tokenSymbol];
	        case TOKEN_NUMBER_7_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_7, tokenSymbol];
	        case TOKEN_NUMBER_8_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_8, tokenSymbol];
	        case TOKEN_NUMBER_9_SYMBOL:
	          this.skipJSONSegment(1);
	          return [TOKEN_NUMBER_9, tokenSymbol];
	        default:
	          this.skipJSONSegment(1);
	          return [TOKEN_OTHERS, tokenSymbol];
	      }
	    }

	    // append JSON string to current JSON stream content
	    // this method will traversal all token and generate mirror token for complete full JSON
	  }, {
	    key: "AppendString",
	    value: function AppendString(str) {
	      var _this = this,
	        _context5;
	      this.JSONSegment = str;
	      for (;;) {
	        var _this$matchToken = this.matchToken(),
	          _this$matchToken2 = _slicedToArray(_this$matchToken, 2),
	          token = _this$matchToken2[0],
	          tokenSymbol = _this$matchToken2[1];
	        switch (token) {
	          case TOKEN_EOF:
	            // nothing to do with TOKEN_EOF
	            break;
	          case TOKEN_IGNORED:
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }
	            this.pushByteIntoPaddingContent(tokenSymbol);
	            break;
	          case TOKEN_OTHERS:
	            // check if JSON stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;
	            break;
	          case TOKEN_LEFT_BRACKET:
	            // check if JSON stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }
	            this.JSONContent += tokenSymbol;
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnObjectArrayValueStart()) {
	              // pop `n`, `u`, `l`, `l` from mirror stack
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	            }

	            // push `]` into mirror stack
	            this.pushMirrorTokenStack(TOKEN_RIGHT_BRACKET);
	            break;
	          case TOKEN_RIGHT_BRACKET:
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }

	            // check if JSON stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // push `]` into stack
	            this.pushTokenStack(token);
	            // pop `]` from mirror stack
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_LEFT_BRACE:
	            // check if JSON stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnObjectObjectValueStart()) {
	              // pop `n`, `u`, `l`, `l` from mirror stack
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	            }

	            // push `}` into mirror stack
	            this.pushMirrorTokenStack(TOKEN_RIGHT_BRACE);
	            break;
	          case TOKEN_RIGHT_BRACE:
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }

	            // check if JSON stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }
	            this.JSONContent += tokenSymbol;

	            // push `}` into stack
	            this.pushTokenStack(token);
	            // pop `}` from mirror stack
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_QUOTE:
	            // check if escape quote `\"`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // check if json stream stopped with padding content
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnArray()) {
	              // push `"` into mirror stack
	              this.pushMirrorTokenStack(TOKEN_QUOTE);
	            } else if (this.streamStoppedInAnArrayStringValueEnd()) {
	              // pop `"` from mirror stack
	              this.popMirrorTokenStack();
	            } else if (this.streamStoppedInAnObjectKeyStart()) {
	              // push `"`, `:`, `n`, `u`, `l`, `l` into mirror stack
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_N);
	              this.pushMirrorTokenStack(TOKEN_COLON);
	              this.pushMirrorTokenStack(TOKEN_QUOTE);
	            } else if (this.streamStoppedInAnObjectKeyEnd()) {
	              // pop `"` from mirror stack
	              this.popMirrorTokenStack();
	            } else if (this.streamStoppedInAnObjectStringValueStart()) {
	              // pop `n`, `u`, `l`, `l` from mirror stack
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              // push `"` into mirror stack
	              this.pushMirrorTokenStack(TOKEN_QUOTE);
	            } else if (this.streamStoppedInAnObjectValueEnd()) {
	              // pop `"` from mirror stack
	              this.popMirrorTokenStack();
	            } else {
	              throw new Error('invalid quote token in json stream');
	            }
	            break;
	          case TOKEN_COLON:
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }
	            this.JSONContent += tokenSymbol;
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_A:
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }
	            this.JSONContent += tokenSymbol;
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            this.itIsPartOfTokenFalse = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_F];
	              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_A];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            if (!this.itIsPartOfTokenFalse()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_B:
	            // as hex in unicode
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);

	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();

	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // \b escape `\`, `b`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from  stack
	              this.popTokenStack();
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_E:
	            // as hex in unicode
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);

	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();

	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // check if in a number, as `e` (exponent) in scientific notation
	            if (this.streamStoppedInANumberDecimalPartMiddle()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            // Omitting boolean validation functions due to placeholder logic

	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_F:
	            // as hex in unicode
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();
	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // \f escape `\`, `f`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // check if json stream stopped with padding content, like case `[true , f`
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // push `f` into stack
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnArray()) {
	              // in array
	              // push `a`, `l`, `s`, `e`
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_S);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_A);
	            } else {
	              // in object
	              // pop `n`, `u`, `l`, `l`
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              // push `a`, `l`, `s`, `e`
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_S);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_A);
	            }
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_L:
	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // helper functions to check stack states
	            this.itIsPartOfTokenFalse1 = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_A];
	              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_L];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            this.itIsPartOfTokenNull1 = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U];
	              var right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            this.itIsPartOfTokenNull2 = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_L];
	              var right = [TOKEN_ALPHABET_LOWERCASE_L];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            if (!this.itIsPartOfTokenFalse1() && !this.itIsPartOfTokenNull1() && !this.itIsPartOfTokenNull2()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_N:
	            // \n escape `\`, `n`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // Push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // Write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // Pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // Check if JSON stream stopped with padding content, like case `[true, n`
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // Write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // In a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // Push `n`
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnArray()) {
	              // In array, push `u`, `l`, `l`
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
	            } else {
	              // In object, pop `n`
	              this.popMirrorTokenStack();
	            }
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_R:
	            // \r escape `\`, `r`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // check if `t` in token stack and `r`, `u`, `e` in mirror stack
	            this.itIsPartOfTokenTrue = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_T];
	              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_R];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            if (!this.itIsPartOfTokenTrue()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_S:
	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // check if `f`, `a`, `l` in token stack and `s`, `e in mirror stack
	            this.itIsPartOfTokenFalse2 = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_A, TOKEN_ALPHABET_LOWERCASE_L];
	              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            if (!this.itIsPartOfTokenFalse2()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_T:
	            // \t escape `\`, `t`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // check if json stream stopped with padding content, like case `[true , t`
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // push `t` to stack
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnArray()) {
	              // in array
	              // push `r`, `u`, `e`
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_R);
	            } else {
	              // in object
	              // pop `n`, `u`, `l`, `l`
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              // push `r`, `u`, `e`
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
	              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_R);
	            }
	            break;
	          case TOKEN_ALPHABET_LOWERCASE_U:
	            // unicode escape `\`, `u`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              this.pushTokenStack(token);
	              this.PaddingContent += tokenSymbol;
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // check if `t`, `r` in token stack and, `u`, `e` in mirror stack
	            this.itIsPartOfTokenTrue2 = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_T, TOKEN_ALPHABET_LOWERCASE_R];
	              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };

	            // check if `n` in token stack and `u`, `l`, `l` in mirror stack
	            this.itIsPartOfTokenNull = function () {
	              var left = [TOKEN_ALPHABET_LOWERCASE_N];
	              var right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U];
	              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
	            };
	            if (!this.itIsPartOfTokenTrue2() && !this.itIsPartOfTokenNull()) {
	              continue;
	            }
	            this.pushTokenStack(token);
	            this.popMirrorTokenStack();
	            break;
	          case TOKEN_ALPHABET_UPPERCASE_A:
	          case TOKEN_ALPHABET_UPPERCASE_B:
	          case TOKEN_ALPHABET_UPPERCASE_C:
	          case TOKEN_ALPHABET_UPPERCASE_D:
	          case TOKEN_ALPHABET_LOWERCASE_C:
	          case TOKEN_ALPHABET_LOWERCASE_D:
	          case TOKEN_ALPHABET_UPPERCASE_F:
	            // as hex in unicode
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();
	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            break;
	          case TOKEN_ALPHABET_UPPERCASE_E:
	            // as hex in unicode
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();
	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // check if in a number, as `E` (exponent) in scientific notation
	            if (this.streamStoppedInANumberDecimalPartMiddle()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              continue;
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }
	            break;
	          case TOKEN_NUMBER_0:
	          case TOKEN_NUMBER_1:
	          case TOKEN_NUMBER_2:
	          case TOKEN_NUMBER_3:
	          case TOKEN_NUMBER_4:
	          case TOKEN_NUMBER_5:
	          case TOKEN_NUMBER_6:
	          case TOKEN_NUMBER_7:
	          case TOKEN_NUMBER_8:
	          case TOKEN_NUMBER_9:
	            if (this.streamStoppedInAnStringUnicodeEscape()) {
	              this.pushByteIntoPaddingContent(tokenSymbol);
	              // check if unicode escape is full length
	              if (this.PaddingContent.length === 6) {
	                this.appendPaddingContentToJSONContent();
	                this.cleanPaddingContent();
	                // pop `\`, `u` from stack
	                this.popTokenStack();
	                this.popTokenStack();
	              }
	              continue;
	            }

	            // check if json stream stopped with padding content, like `[1 , 1`
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // in negative part of a number
	            if (this.streamStoppedInANegativeNumberValueStart()) {
	              this.pushNegativeIntoJSONContent();
	              // pop `0` from mirror stack
	              this.popMirrorTokenStack();
	            }

	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string or a number, just skip token
	            if (this.streamStoppedInAString() || this.streamStoppedInANumber()) {
	              continue;
	            }

	            // in decimal part of a number
	            if (this.streamStoppedInANumberDecimalPart()) {
	              this.pushTokenStack(TOKEN_NUMBER);
	              // pop placeholder `0` in decimal part
	              this.popMirrorTokenStack();
	              continue;
	            }

	            // first number type token, push token into stack
	            this.pushTokenStack(TOKEN_NUMBER);

	            // check if we are in an object or an array
	            if (this.streamStoppedInAnArray()) {
	              continue;
	            } else if (this.streamStoppedInAnObjectNullValuePlaceholderStart()) {
	              // pop `n`, `u`, `l`, `l`
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	              this.popMirrorTokenStack();
	            }
	            break;
	          case TOKEN_COMMA:
	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }
	            // in a object or a array, keep the comma in stack but not write it into JSONContent, until next token arrival
	            this.pushByteIntoPaddingContent(tokenSymbol);
	            this.pushTokenStack(token);
	            break;
	          case TOKEN_DOT:
	            // write current token symbol to JSON content
	            this.JSONContent += tokenSymbol;

	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              continue;
	            }

	            // use 0 for decimal part placeholder
	            this.pushTokenStack(token);
	            this.pushMirrorTokenStack(TOKEN_NUMBER_0);
	            break;
	          case TOKEN_SLASH:
	            // escape character `\`, `/`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }
	            break;
	          case TOKEN_ESCAPE_CHARACTER:
	            // TOKEN_ESCAPE_CHARACTER needs to be defined somewhere
	            // double escape character `\`, `\`
	            if (this.streamStoppedWithLeadingEscapeCharacter()) {
	              // push padding escape character `\` into JSON content
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();

	              // write current token symbol to JSON content
	              this.JSONContent += tokenSymbol;

	              // pop `\` from stack
	              this.popTokenStack();
	              continue;
	            }

	            // just write escape character into stack and waiting other token trigger escape method.
	            this.pushTokenStack(token);
	            this.pushByteIntoPaddingContent(TOKEN_ESCAPE_CHARACTER_SYMBOL); // TOKEN_ESCAPE_CHARACTER_SYMBOL needs to be defined somewhere
	            break;
	          case TOKEN_NEGATIVE:
	            // TOKEN_NEGATIVE needs to be defined somewhere
	            // in a string, just skip token
	            if (this.streamStoppedInAString()) {
	              this.JSONContent += tokenSymbol;
	              continue;
	            }

	            // check if JSON stream stopped with padding content, like `[1 , -`
	            if (this.havePaddingContent()) {
	              this.appendPaddingContentToJSONContent();
	              this.cleanPaddingContent();
	            }

	            // just write negative character into stack and wait for other token to trigger it.
	            this.pushTokenStack(token);
	            if (this.streamStoppedInAnObjectNegativeNumberValueStart()) {
	              // pop `n`, `u`, `l`, `l` from mirror stack
	              for (var i = 0; i < 4; i++) {
	                // assuming "null" has been pushed into the stack as separate characters
	                this.popMirrorTokenStack();
	              }
	            }

	            // push `0` into mirror stack for placeholder
	            this.pushMirrorTokenStack(TOKEN_NUMBER_0); // TOKEN_NUMBER_0 needs to be defined somewhere
	            break;
	          default:
	            throw new Error(_concatInstanceProperty(_context5 = "unexpected token: `".concat(token, "`, token symbol: `")).call(_context5, tokenSymbol, "`"));
	        }

	        // check if end
	        if (token === TOKEN_EOF) {
	          break;
	        }
	      }
	    }

	    // Complete the incomplete JSON string by concat JSON content and mirror tokens
	  }, {
	    key: "CompleteJSON",
	    value: function CompleteJSON() {
	      return this.JSONContent + this.dumpMirrorTokenStackToString(); // Assuming an implementation of dumpMirrorTokenStackToString
	    }
	  }]);
	  return Lexer;
	}();

	exports.Lexer = Lexer;

}));
