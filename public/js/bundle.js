/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/haikunator/lib/haikunator.js":
/*!***************************************************!*\
  !*** ./node_modules/haikunator/lib/haikunator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomSeed = __webpack_require__(/*! random-seed */ "./node_modules/random-seed/index.js");

var _randomSeed2 = _interopRequireDefault(_randomSeed);

var _lodash = __webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Adjectives used by haikunator
 * @type {string[]}
 */
var defaultAdjectives = ['aged', 'ancient', 'autumn', 'billowing', 'bitter', 'black', 'blue', 'bold', 'broad', 'broken', 'calm', 'cold', 'cool', 'crimson', 'curly', 'damp', 'dark', 'dawn', 'delicate', 'divine', 'dry', 'empty', 'falling', 'fancy', 'flat', 'floral', 'fragrant', 'frosty', 'gentle', 'green', 'hidden', 'holy', 'icy', 'jolly', 'late', 'lingering', 'little', 'lively', 'long', 'lucky', 'misty', 'morning', 'muddy', 'mute', 'nameless', 'noisy', 'odd', 'old', 'orange', 'patient', 'plain', 'polished', 'proud', 'purple', 'quiet', 'rapid', 'raspy', 'red', 'restless', 'rough', 'round', 'royal', 'shiny', 'shrill', 'shy', 'silent', 'small', 'snowy', 'soft', 'solitary', 'sparkling', 'spring', 'square', 'steep', 'still', 'summer', 'super', 'sweet', 'throbbing', 'tight', 'tiny', 'twilight', 'wandering', 'weathered', 'white', 'wild', 'winter', 'wispy', 'withered', 'yellow', 'young'];

/**
 * Nouns used by haikunator
 * @type {string[]}
 */
var defaultNouns = ['art', 'band', 'bar', 'base', 'bird', 'block', 'boat', 'bonus', 'bread', 'breeze', 'brook', 'bush', 'butterfly', 'cake', 'cell', 'cherry', 'cloud', 'credit', 'darkness', 'dawn', 'dew', 'disk', 'dream', 'dust', 'feather', 'field', 'fire', 'firefly', 'flower', 'fog', 'forest', 'frog', 'frost', 'glade', 'glitter', 'grass', 'hall', 'hat', 'haze', 'heart', 'hill', 'king', 'lab', 'lake', 'leaf', 'limit', 'math', 'meadow', 'mode', 'moon', 'morning', 'mountain', 'mouse', 'mud', 'night', 'paper', 'pine', 'poetry', 'pond', 'queen', 'rain', 'recipe', 'resonance', 'rice', 'river', 'salad', 'scene', 'sea', 'shadow', 'shape', 'silence', 'sky', 'smoke', 'snow', 'snowflake', 'sound', 'star', 'sun', 'sun', 'sunset', 'surf', 'term', 'thunder', 'tooth', 'tree', 'truth', 'union', 'unit', 'violet', 'voice', 'water', 'waterfall', 'wave', 'wildflower', 'wind', 'wood'];

/**
 * Default options used by haikunate method
 * @type {{delimiter: string, tokenLength: number, tokenHex: boolean, tokenChars: string}}
 */
var defaultOptions = {
  delimiter: '-',
  tokenLength: 4,
  tokenHex: false,
  tokenChars: '0123456789'
};

var Haikunator = function () {
  /**
   * Initialize new haikunator
   * @param {object} defaults
   * @param {string[]} adjectives
   * @param {string[]} nouns
   * @param {string} seed
   */
  function Haikunator() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$defaults = _ref.defaults;
    var defaults = _ref$defaults === undefined ? {} : _ref$defaults;
    var _ref$adjectives = _ref.adjectives;
    var adjectives = _ref$adjectives === undefined ? defaultAdjectives : _ref$adjectives;
    var _ref$nouns = _ref.nouns;
    var nouns = _ref$nouns === undefined ? defaultNouns : _ref$nouns;
    var seed = _ref.seed;

    _classCallCheck(this, Haikunator);

    this.adjectives = adjectives;
    this.nouns = nouns;

    this.random = new _randomSeed2.default(seed);
    this.config = (0, _lodash2.default)(defaults, defaultOptions);
  }

  /**
   * Generate heroku-like random names
   * @param {object} options
   * @returns {string}
   */


  _createClass(Haikunator, [{
    key: 'haikunate',
    value: function haikunate() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      // set specified options
      var config = (0, _lodash2.default)(options, this.config);

      // set tokenChars if tokenHex is set
      if (config.tokenHex === true) {
        config.tokenChars = '0123456789abcdef';
      }

      // pick adjective and noun
      var adjective = this._randomElement(this.adjectives);
      var noun = this._randomElement(this.nouns);

      // create random token
      var token = '';
      for (var i = 0; i < config.tokenLength; i++) {
        token += this._randomElement(config.tokenChars);
      }

      // create result and return
      var sections = [adjective, noun, token];
      return sections.filter(function (e) {
        return e === 0 || e;
      }).join(config.delimiter);
    }

    /**
     * Get a random element from an array/string
     * @param {(string|Array)} array
     * @returns {*}
     * @private
     */

  }, {
    key: '_randomElement',
    value: function _randomElement(array) {
      return array[this.random(array.length)];
    }
  }]);

  return Haikunator;
}();

exports.default = Haikunator;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/json-stringify-safe/stringify.js":
/*!*******************************************************!*\
  !*** ./node_modules/json-stringify-safe/stringify.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ "./node_modules/random-seed/index.js":
/*!*******************************************!*\
  !*** ./node_modules/random-seed/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * random-seed
 * https://github.com/skratchdot/random-seed
 *
 * This code was originally written by Steve Gibson and can be found here:
 *
 * https://www.grc.com/otg/uheprng.htm
 *
 * It was slightly modified for use in node, to pass jshint, and a few additional
 * helper functions were added.
 *
 * Copyright (c) 2013 skratchdot
 * Dual Licensed under the MIT license and the original GRC copyright/license
 * included below.
 */
/*	============================================================================
									Gibson Research Corporation
				UHEPRNG - Ultra High Entropy Pseudo-Random Number Generator
	============================================================================
	LICENSE AND COPYRIGHT:  THIS CODE IS HEREBY RELEASED INTO THE PUBLIC DOMAIN
	Gibson Research Corporation releases and disclaims ALL RIGHTS AND TITLE IN
	THIS CODE OR ANY DERIVATIVES. Anyone may be freely use it for any purpose.
	============================================================================
	This is GRC's cryptographically strong PRNG (pseudo-random number generator)
	for JavaScript. It is driven by 1536 bits of entropy, stored in an array of
	48, 32-bit JavaScript variables.  Since many applications of this generator,
	including ours with the "Off The Grid" Latin Square generator, may require
	the deteriministic re-generation of a sequence of PRNs, this PRNG's initial
	entropic state can be read and written as a static whole, and incrementally
	evolved by pouring new source entropy into the generator's internal state.
	----------------------------------------------------------------------------
	ENDLESS THANKS are due Johannes Baagoe for his careful development of highly
	robust JavaScript implementations of JS PRNGs.  This work was based upon his
	JavaScript "Alea" PRNG which is based upon the extremely robust Multiply-
	With-Carry (MWC) PRNG invented by George Marsaglia. MWC Algorithm References:
	http://www.GRC.com/otg/Marsaglia_PRNGs.pdf
	http://www.GRC.com/otg/Marsaglia_MWC_Generators.pdf
	----------------------------------------------------------------------------
	The quality of this algorithm's pseudo-random numbers have been verified by
	multiple independent researchers. It handily passes the fermilab.ch tests as
	well as the "diehard" and "dieharder" test suites.  For individuals wishing
	to further verify the quality of this algorithm's pseudo-random numbers, a
	256-megabyte file of this algorithm's output may be downloaded from GRC.com,
	and a Microsoft Windows scripting host (WSH) version of this algorithm may be
	downloaded and run from the Windows command prompt to generate unique files
	of any size:
	The Fermilab "ENT" tests: http://fourmilab.ch/random/
	The 256-megabyte sample PRN file at GRC: https://www.GRC.com/otg/uheprng.bin
	The Windows scripting host version: https://www.GRC.com/otg/wsh-uheprng.js
	----------------------------------------------------------------------------
	Qualifying MWC multipliers are: 187884, 686118, 898134, 1104375, 1250205,
	1460910 and 1768863. (We use the largest one that's < 2^21)
	============================================================================ */

var stringify = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");

/*	============================================================================
This is based upon Johannes Baagoe's carefully designed and efficient hash
function for use with JavaScript.  It has a proven "avalanche" effect such
that every bit of the input affects every bit of the output 50% of the time,
which is good.	See: http://baagoe.com/en/RandomMusings/hash/avalanche.xhtml
============================================================================
*/
var Mash = function () {
	var n = 0xefc8249d;
	var mash = function (data) {
		if (data) {
			data = data.toString();
			for (var i = 0; i < data.length; i++) {
				n += data.charCodeAt(i);
				var h = 0.02519603282416938 * n;
				n = h >>> 0;
				h -= n;
				h *= n;
				n = h >>> 0;
				h -= n;
				n += h * 0x100000000; // 2^32
			}
			return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
		} else {
			n = 0xefc8249d;
		}
	};
	return mash;
};

var uheprng = function (seed) {
	return (function () {
		var o = 48; // set the 'order' number of ENTROPY-holding 32-bit values
		var c = 1; // init the 'carry' used by the multiply-with-carry (MWC) algorithm
		var p = o; // init the 'phase' (max-1) of the intermediate variable pointer
		var s = new Array(o); // declare our intermediate variables array
		var i; // general purpose local
		var j; // general purpose local
		var k = 0; // general purpose local

		// when our "uheprng" is initially invoked our PRNG state is initialized from the
		// browser's own local PRNG. This is okay since although its generator might not
		// be wonderful, it's useful for establishing large startup entropy for our usage.
		var mash = new Mash(); // get a pointer to our high-performance "Mash" hash

		// fill the array with initial mash hash values
		for (i = 0; i < o; i++) {
			s[i] = mash(Math.random());
		}

		// this PRIVATE (internal access only) function is the heart of the multiply-with-carry
		// (MWC) PRNG algorithm. When called it returns a pseudo-random number in the form of a
		// 32-bit JavaScript fraction (0.0 to <1.0) it is a PRIVATE function used by the default
		// [0-1] return function, and by the random 'string(n)' function which returns 'n'
		// characters from 33 to 126.
		var rawprng = function () {
			if (++p >= o) {
				p = 0;
			}
			var t = 1768863 * s[p] + c * 2.3283064365386963e-10; // 2^-32
			return s[p] = t - (c = t | 0);
		};

		// this EXPORTED function is the default function returned by this library.
		// The values returned are integers in the range from 0 to range-1. We first
		// obtain two 32-bit fractions (from rawprng) to synthesize a single high
		// resolution 53-bit prng (0 to <1), then we multiply this by the caller's
		// "range" param and take the "floor" to return a equally probable integer.
		var random = function (range) {
			return Math.floor(range * (rawprng() + (rawprng() * 0x200000 | 0) * 1.1102230246251565e-16)); // 2^-53
		};

		// this EXPORTED function 'string(n)' returns a pseudo-random string of
		// 'n' printable characters ranging from chr(33) to chr(126) inclusive.
		random.string = function (count) {
			var i;
			var s = '';
			for (i = 0; i < count; i++) {
				s += String.fromCharCode(33 + random(94));
			}
			return s;
		};

		// this PRIVATE "hash" function is used to evolve the generator's internal
		// entropy state. It is also called by the EXPORTED addEntropy() function
		// which is used to pour entropy into the PRNG.
		var hash = function () {
			var args = Array.prototype.slice.call(arguments);
			for (i = 0; i < args.length; i++) {
				for (j = 0; j < o; j++) {
					s[j] -= mash(args[i]);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED "clean string" function removes leading and trailing spaces and non-printing
		// control characters, including any embedded carriage-return (CR) and line-feed (LF) characters,
		// from any string it is handed. this is also used by the 'hashstring' function (below) to help
		// users always obtain the same EFFECTIVE uheprng seeding key.
		random.cleanString = function (inStr) {
			inStr = inStr.replace(/(^\s*)|(\s*$)/gi, ''); // remove any/all leading spaces
			inStr = inStr.replace(/[\x00-\x1F]/gi, ''); // remove any/all control characters
			inStr = inStr.replace(/\n /, '\n'); // remove any/all trailing spaces
			return inStr; // return the cleaned up result
		};

		// this EXPORTED "hash string" function hashes the provided character string after first removing
		// any leading or trailing spaces and ignoring any embedded carriage returns (CR) or Line Feeds (LF)
		random.hashString = function (inStr) {
			inStr = random.cleanString(inStr);
			mash(inStr); // use the string to evolve the 'mash' state
			for (i = 0; i < inStr.length; i++) { // scan through the characters in our string
				k = inStr.charCodeAt(i); // get the character code at the location
				for (j = 0; j < o; j++) { //	"mash" it into the UHEPRNG state
					s[j] -= mash(k);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED function allows you to seed the random generator.
		random.seed = function (seed) {
			if (typeof seed === 'undefined' || seed === null) {
				seed = Math.random();
			}
			if (typeof seed !== 'string') {
				seed = stringify(seed, function (key, value) {
					if (typeof value === 'function') {
						return (value).toString();
					}
					return value;
				});
			}
			random.initState();
			random.hashString(seed);
		};

		// this handy exported function is used to add entropy to our uheprng at any time
		random.addEntropy = function ( /* accept zero or more arguments */ ) {
			var args = [];
			for (i = 0; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			hash((k++) + (new Date().getTime()) + args.join('') + Math.random());
		};

		// if we want to provide a deterministic startup context for our PRNG,
		// but without directly setting the internal state variables, this allows
		// us to initialize the mash hash and PRNG's internal state before providing
		// some hashing input
		random.initState = function () {
			mash(); // pass a null arg to force mash hash to init
			for (i = 0; i < o; i++) {
				s[i] = mash(' '); // fill the array with initial mash hash values
			}
			c = 1; // init our multiply-with-carry carry
			p = o; // init our phase
		};

		// we use this (optional) exported function to signal the JavaScript interpreter
		// that we're finished using the "Mash" hash function so that it can free up the
		// local "instance variables" is will have been maintaining.  It's not strictly
		// necessary, of course, but it's good JavaScript citizenship.
		random.done = function () {
			mash = null;
		};

		// if we called "uheprng" with a seed value, then execute random.seed() before returning
		if (typeof seed !== 'undefined') {
			random.seed(seed);
		}

		// Returns a random integer between 0 (inclusive) and range (exclusive)
		random.range = function (range) {
			return random(range);
		};

		// Returns a random float between 0 (inclusive) and 1 (exclusive)
		random.random = function () {
			return random(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
		};

		// Returns a random float between min (inclusive) and max (exclusive)
		random.floatBetween = function (min, max) {
			return random.random() * (max - min) + min;
		};

		// Returns a random integer between min (inclusive) and max (inclusive)
		random.intBetween = function (min, max) {
			return Math.floor(random.random() * (max - min + 1)) + min;
		};

		// when our main outer "uheprng" function is called, after setting up our
		// initial variables and entropic state, we return an "instance pointer"
		// to the internal anonymous function which can then be used to access
		// the uheprng's various exported functions.  As with the ".done" function
		// above, we should set the returned value to 'null' once we're finished
		// using any of these functions.
		return random;
	}());
};

// Modification for use in node:
uheprng.create = function (seed) {
	return new uheprng(seed);
};
module.exports = uheprng;


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_matchgame_src_matchgame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/matchgame/src/matchgame.js */ "./src/lib/matchgame/src/matchgame.js");
/* harmony import */ var _node_modules_haikunator_lib_haikunator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/haikunator/lib/haikunator.js */ "./node_modules/haikunator/lib/haikunator.js");
/* harmony import */ var _node_modules_haikunator_lib_haikunator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_haikunator_lib_haikunator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_wordpuzzle_src_wordpuzzle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/wordpuzzle/src/wordpuzzle.js */ "./src/lib/wordpuzzle/src/wordpuzzle.js");




console.warn("I am self aware")

// GAME 1
var matchImgElem = document.querySelector('#matchImg')

var matcheesImg = [[],[]]
var matcheesList = {
  "Le droit à une vie familiale":"img/match-A.png",
  "Le droit de s'exprimer":"img/match-B.png",
  "Le droit à l'égalité":"img/match-C.png",
  "Le droit à la santé":"img/match-D.png",
  "Le droit à l'éducation":"img/match-E.png",
  "Le droit à la protection":"img/match-F.png",
  "Le droit à la justice":"img/match-G.png"
}
console.log(matcheesList)
console.log(Object.keys(matcheesList))
console.log(Object.values(matcheesList))

var matchImg = new _lib_matchgame_src_matchgame_js__WEBPACK_IMPORTED_MODULE_0__["default"](matcheesImg, matchImgElem)

// GAME 2
var matchSentenceElem = document.querySelector('#matchSentence')

var matchSentence = new _lib_matchgame_src_matchgame_js__WEBPACK_IMPORTED_MODULE_0__["default"]()

// GAME 3
var multipleChoiceElem = document.querySelector('#multipleChoice')

// GAME 4
var puzzleElem = document.querySelector('#wordsgame')
var words = [
  'amour',
  'avis',
  'bien-être',
  'bonheur',
  'club',
  'connaissance',
  'convention',
  'culture',
  'développement',
  'écrire',
  'éducation',
  'égalité',
  'enfant',
  'épanouissement',
  'états',
  'expression',
  'famille',
  'femme',
  'harmonie',
  'homme',
  'humanité',
  'idéaux',
  'justice',
  'liberté',
  'loisirs',
  'manifester',
  'mineur',
  'opinion',
  'paix',
  'parent',
  'presse',
  'principe',
  'protection',
  'religion',
  'respect',
  'santé',
  'universel',
  'vie'
]

var wordGame = new _lib_wordpuzzle_src_wordpuzzle_js__WEBPACK_IMPORTED_MODULE_2__["default"](words, puzzleElem, {
  lang: 'FR',
  orientations: ['horizontal', 'vertical'],
  height: 20,
  width: 25,
  maxAttempts: 100,
  preferOverlap: false
})

// INCOWEB
document.querySelector('#incoweb').addEventListener('click', () => {
  window.open('http://incoweb.playbac.fr/indexhtml.php5?livret=74', 'EVENTAIL_PLAYBAC', 'height=700, width=900, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no')
})

/***/ }),

/***/ "./src/lib/matchgame/src/matchgame.js":
/*!********************************************!*\
  !*** ./src/lib/matchgame/src/matchgame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *Create a word match game
 * @class wordMatch
 */
class matchGame {

}

/* harmony default export */ __webpack_exports__["default"] = (matchGame);

/***/ }),

/***/ "./src/lib/wordpuzzle/src/wordpuzzle.js":
/*!**********************************************!*\
  !*** ./src/lib/wordpuzzle/src/wordpuzzle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *Create a words puzzle game
 * @class wordPuzzle
 */
class wordPuzzle {

  /**
   *Creates an instance of wordPuzzle.
   * @param {!Array.<string>} words list of words to include in the puzzle
   * @param {!HTMLElement} domElem HTML DOM Element that will contain the game
   * @param {!Object} [opts={}] game options
   * @param {!string} [opts.lang] define the letters set to use, depending on the words language, must be the ISO 639-1 language code, default: EN
   * @param {!number} [opts.heigth] desired height of the puzzle, default: smallest possible
   * @param {!number} [opts.width] desired width of the puzzle, default: smallest possible
   * @param {!Array.<string>} [opts.orientations=allOrientations] list the authorized orientations in which the words can be formed, default: allOrientations
   * @param {!boolean} [opts.fillBlanks=true] do the game must fill the spaces not used to form a word with random letters, default: true
   * @param {!boolean} [opts.allowExtraBlanks=true] can the game add additional blanks, default: true
   * @param {!number} [opts.maxAttempts=3] number of tries before increasing puzzle size, default: 3
   * @param {!number} [opts.maxGridGrowth=10] number of puzzle grid increases, default: 10
   * @param {!boolean} [opts.preferOverlap=true] maximize word overlap or not, default: true
   * @param {!boolean} [opts.debug=false] wether or not to print the puzzle to the console, default: false
   * @memberof wordPuzzle
   */
  constructor(words, domElem, opts = {}) {

    if (!words.length) {
      throw new Error('No words provided')
    }
    this.attempts = 0
    this.gridGrowths = 0

    this.domElem = domElem
    this.allOrientations = ['horizontal','horizontalBack','vertical','verticalUp','diagonal','diagonalUp','diagonalBack','diagonalUpBack']
    this.orientations = opts.orientations || allOrientations

    /**
     * @param {Array.<string>} wordList copy and sort the words by length, inserting words into the puzzle from longest to shortest works out the best
     */
    this.wordList = words.slice(0).sort()

    // initialize the options
    let maxWordLength = this.wordList[0].length
    this.opts = {
      lang: opts.lang || 'EN',
      height: opts.height || maxWordLength,
      width: opts.width || maxWordLength,
      orientations: this.orientations,
      fillBlanks: opts.fillBlanks !== undefined ? opts.fillBlanks : true,
      allowExtraBlanks: opts.allowExtraBlanks !== undefined ? opts.allowExtraBlanks : true,
      maxAttempts: opts.maxAttempts || 3,
      maxGridGrowth: opts.maxGridGrowth !== undefined ? opts.maxGridGrowth : 10,
      preferOverlap: opts.preferOverlap !== undefined ? opts.preferOverlap : true,
      debug: opts.debug !== undefined ? opts.debug : false
    }

    this.lettersSet = this.setLetters(this.opts.lang)

    this.startSquare = null
    this.lastSquare = null
    this.selectedSquares = []
    this.curWord = ''
    this.curOrientation = null

    this.finalPuzzle = this.newPuzzle()
    this.drawPuzzle()
    this.setEventHandlers()

    // this.startTurn = this.startTurn.bind(this)
    // this.selectSquare = this.selectSquare.bind(this)
    // this.endTurn = this.endTurn.bind(this)
    // this.mouseMove = this.mouseMove.bind(this)
    // this.touchMove = this.touchMove.bind(this)
  }

  /**
   *Compute the next square given a starting square (x, y) and distance (i) from that square
   * @param {!string} orientation
   * @param {!number} x
   * @param {!number} y
   * @param {!number} i
   * @returns {{x: !number, y: !number}} an object {x, y} representing the coordinates of the next square
   * @private
   * @memberof wordPuzzle
   */
  compOrientations(orientation, x, y, i) {
    switch(orientation) {
      case 'horizontal':
        return {x: x + i, y: y }

      case 'horizontalBack':
        return {x: x - i, y: y }

      case 'vertical':
        return {x: x,   y: y + i}

      case 'verticalUp':
        return {x: x,   y: y - i}

      case 'diagonal':
        return {x: x + i, y: y + i}

      case 'diagonalBack':
        return {x: x - i, y: y + i}

      case 'diagonalUp':
        return {x: x + i, y: y - i}

      case 'diagonalUpBack':
        return {x: x - i, y: y - i}

    }
  }

  /**
   *Determines if an orientation is possible given the starting square (x, y), the height (h) and width (w) of the puzzle, and the length of the word (l)
   * @param {!string} orientation
   * @param {!number} x
   * @param {!number} y
   * @param {!number} h heigth of the puzzle
   * @param {!number} w width of the puzzle
   * @param {!number} l length of the word
   * @returns {boolean} true if the word will fit starting at the square provided using the specified orientation
   * @private
   * @memberof wordPuzzle
   */
  checkOrientations(orientation, x, y, h, w, l) {
    switch(orientation) {
      case 'horizontal':
        return w >= x + l
        
      case 'horizontalBack':
        return x + 1 >= l

      case 'vertical':
        return h >= y + l

      case 'verticalUp':
        return y + 1 >= l

      case 'diagonal':
        return (w >= x + l) && (h >= y + l)

      case 'diagonalBack':
        return (x + 1 >= l) && (h >= y + l)

      case 'diagonalUp':
        return (w >= x + l) && (y + 1 >= l)

      case 'diagonalUpBack':
        return (x + 1 >= l) && (y + 1 >= l)
    }
  }

  /**
   *Determines the next possible valid square given the square (x, y) and a word lenght of (l). This greatly reduces the number of squares that must be checked. Returning {x: x + 1, y: y} will always work but will not be optimal.
   * @param {!string} orientation
   * @param {!number} x
   * @param {!number} y
   * @param {!number} l length of the word
   * @returns {{x: number, y: number}} an object {x, y} representing the coordinates of the next square
   * @private
   * @memberof wordPuzzle
   */
  skipOrientations(orientation, x, y, l) {
    switch(orientation) {
      case 'horizontal':
        return {x: 0, y: y + 1}

      case 'horizontalBack':
        return {x: l - 1, y: y}

      case 'vertical':
        return {x: 0, y: y + 100}

      case 'verticalUp':
        return {x: 0, y: l - 1}

      case 'diagonal':
        return {x: 0, y: y + 1}

      case 'diagonalBack':
        return {x: l - 1, y: x >= l - 1 ? y + 1 : y}

      case 'diagonalUp':
        return {x: 0, y: y < l - 1 ? l - 1 : y + 1}

      case 'diagonalUpBack':
        return {x: l - 1, y: x >= l - 1 ? y + 1 : y}
    }
  }

  /**
   *Initializes the puzzle and places words in the puzzle one at a time
   * @param {Array.<string>} wordsList The list of words to fit into the puzzle
   * @param {Object} opts The options to use when filling the puzzle
   * @param {number} opts.height Height of the puzzle
   * @param {number} opts.width Width of the puzzle
   * @returns {Array.<Array>} Returns either a valid puzzle with all of the words or null if a valid
   * @private
   * @memberof wordPuzzle
   */
  fillPuzzle(wordsList, opts) {
    let i, j, len
    // initialize the puzzle with blanks
    this.curPuzzle = []
    for (i = 0; i < opts.height; i++) {
      this.curPuzzle.push([])
      for (j = 0; j < opts.width; j++) {
        this.curPuzzle[i].push('')
      }
    }

    // add each word into the puzzle one at a time
    for (i = 0, len = wordsList.length; i < len; i++) {
      if (!this.placeWordInPuzzle(this.curPuzzle, opts, wordsList[i])) {
        // if a word didn't fit in the puzzle, give up
        return null
      }
    }

    // return the puzzle
    return this.curPuzzle
  }

  /**
   *Adds the specified word to the puzzle by finding all of the possible locations where the word will fit and then randomly selecting one
   * @param {Array.<Array>} puzzle current state of the puzzle
   * @param {Object} opts controls whether or not word overlap should be maximized
   * @param {string} word word to fit into the puzzle
   * @returns {boolean} true if the word was successfully placed, false otherwise
   * @memberof wordPuzzle
   */
  placeWordInPuzzle(puzzle, opts, word) {
    // find all of the best locations where this word would fit
    let locations = this.findBestLocations(puzzle, opts, word)

    if (locations.length === 0) {
      return false
    }

    // select a location at random and place the word there
    let sel = locations[Math.floor(Math.random() * locations.length)]
    this.placeWord(puzzle, word, sel.x, sel.y, sel.orientation)

    return true
  }

  /**
   *Iterates through the puzzle and determines all of the locations where the word fit
   * @param {Array.<Array>} puzzle current state of the puzzle
   * @param {Object} options determines if overlap should be maximized or not
   * @param {string} word word to fit into the puzzle
   * @returns {Array.<{locations: Array.<{x: number, y: number}>, orientation: string, overlap: number}>} list of location objects which contain an x, y coordinate indicating the start of the word, the orientation of the word, and the number of letters that overlapped with existing letter
   * @private
   * @memberof wordPuzzle
   */
  findBestLocations(puzzle, options, word) {
    let locations = [],
        height = options.height,
        width = options.width,
        wordLength = word.length,
        maxOverlap = 0

    // loop through all of the possible orientations at this position
    for (let k = 0, len = options.orientations.length; k < len; k++) {
      let orientation = options.orientations[k], x = 0, y = 0

      // loop through every position on the board
      while( y < height ) {

        // see if this orientation is even possible at this location
        if (this.checkOrientations(orientation, x, y, height, width, wordLength)) {
          // determine if the word fits at the current position
          var overlap = this.calcOverlap(word, puzzle, x, y, orientation)

          // if the overlap was bigger than previous overlaps that we've seen
          if (overlap >= maxOverlap || (!options.preferOverlap && overlap > -1)) {
            maxOverlap = overlap
            locations.push({
              x: x, y: y,
              orientation: orientation,
              overlap: overlap})
          }

          x++

          if (x >= width) {
            x = 0
            y++
          }
        } else {
          // if current cell is invalid, then skip to the next cell where this orientation is possible. this greatly reduces the number of checks that we have to do overall
          let nextPossible = this.skipOrientations(orientation, x, y, wordLength)
          x = nextPossible.x
          y = nextPossible.y
        }
      }
    }

    // finally prune down all of the possible locations we found by
    // only using the ones with the maximum overlap that we calculated
    return options.preferOverlap ?
      this.pruneLocations(locations, maxOverlap) :
      locations
  }

  /**
   *Determines whether or not a particular word fits in a particular
  * orientation within the puzzle
  * @param {string} word word to fit into the puzzle.
  * @param {Array.<Array>} puzzle current state of the puzzle
  * @param {number} x
  * @param {number} y
  * @param {string} orientation orientation to use when computing the next square
  * @returns {number} number of letters overlapped with existing words if the word fits in the specified position, -1 if the word does not fit
   * @private
   * @memberof wordPuzzle
   */
  calcOverlap(word, puzzle, x, y, orientation) {
    let overlap = 0

    // traverse the squares to determine if the word fits
    for (let i = 0, len = word.length; i < len; i++) {

      var next = this.compOrientations(orientation, x, y, i),
          square = puzzle[next.y][next.x]

      // if the puzzle square already contains the letter we are looking for, then count it as an overlap square
      if (square === word[i]) {
        overlap++
      }
      // if it contains a different letter, than our word doesn't fit here, return -1
      else if (square !== '' ) {
        return -1
      }
    }

    // if the entire word is overlapping, skip it to ensure words aren't hidden in other words
    return overlap
  }

  /**
   *If overlap maximization is true, this function is used to prune the list of valid locations down to the ones that contain the maximum overlap that was previously calculated
   * @param {Array.<Object>} locations set of locations to prune
   * @param {number} overlap required level of overlap
   * @returns {Array.<Object>} pruned set of locations
   * @private
   * @memberof wordPuzzle
   */
  pruneLocations(locations, overlap) {
    var pruned = []
    for (let i = 0, len = locations.length; i < len; i++) {
      if (locations[i].overlap >= overlap) {
        pruned.push(locations[i])
      }
    }
    return pruned
  }

  /**
   *Places a word in the puzzle given a starting position and orientation
   * @param {Array.<Array>} puzzle current state of the puzzle
   * @param {string} word word to fit into the puzzle
   * @param {number} x
   * @param {number} y
   * @param {string} orientation orientation to use when computing the next squares
   * @private
   * @memberof wordPuzzle
   */
  placeWord(puzzle, word, x, y, orientation) {
    for (let i = 0, len = word.length; i < len; i++) {
      let next = this.compOrientations(orientation, x, y, i)
      puzzle[next.y][next.x] = word[i]
    }
  }

  /**
   *Define the letters set 
   * @param {!string} [lang=this.opts.lang] ISO 639-1 language code
   * @returns {!string} a string including every character in the set
   * @private
   * @memberof wordPuzzle
   */
  setLetters(lang = this.opts.lang) {
    switch(lang) {
      case 'EN':
        return 'abcdefghijklmnoprstuvwy'

          
      case 'ES':
        return 'abcdefghijklmnoprstuvwy'

      
      case 'FR':
        return 'abcdefghijklmnoprstuvwyéàèùâêîôûçëïü'

      
      case 'IT':
        return 'abcdefghijklmnoprstuvwyàèéìòóù'

      
      case 'DE':
        return 'abcdefghijklmnoprstuvwyäöüß'

      
      case 'JA':
        return 'アカサタナイキシチニウクスツヌエケセテネオコソトノハマヤラワヒミリヰフムユルンヘメレヱホモヨロヲガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポ'

      
      case 'ZH':
        return '安吧爸八百北不大岛的弟地东都对多儿二方港哥个关贵国过海好很会家见叫姐京九可老李零六吗妈么没美妹们明名哪那南你您朋七起千去人认日三上谁什生师识十是四他她台天湾万王我五西息系先香想小谢姓休学也一亿英友月再张这中字'

      
      case 'HI':
        return 'अआएईऍऎऐइओऑऒऊऔउबभचछडढफफ़गघग़हजझकखख़लळऌऴॡमनङञणऩॐपक़रऋॠऱसशषटतठदथधड़ढ़वयय़ज़'

      
      case 'ID':
        return 'abcdefghijklmnoprstuvwy'

      
      case 'NL':
        return 'abcdefghijklmnoprstuvwyáéíóúàèëïöüĳ'

      
      case 'PL':
        return 'abcdefghijklmnoprstuvwyąćęłńóśżź'

      
      case 'PT':
        return 'abcdefghijklmnoprstuvwyàáâãçéêíóôõú'

      
      case 'RU':
        return 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

      
      case 'KO':
        return 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅓㅗㅜㅡㅣㅑㅕㅛㅠㄲㄸㅃㅆㅉㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄㅐㅒㅔㅖㅢㅘㅙㅚㅝㅞㅟ'

      
      default:
        console.warn('Language not recognized, falling back to English')
        return 'abcdefghijklmnoprstuvwy'

    }
  }

  /**
   *
   * @param {Array.<string>} [wordList=this.wordList]
   * @param {Object} [options=this.opts]
   * @returns {Array.<Array>}
   * @memberof wordPuzzle
   */
  newPuzzle(wordList = this.wordList, options = this.opts) {
    // add the words to the puzzle
    // since puzzles are random, attempt to create a valid one up to maxAttempts and then increase the puzzle size and try again
    while (!this.curPuzzle) {
      while (!this.curPuzzle && this.attempts++ < options.maxAttempts) {
        this.curPuzzle = this.fillPuzzle(wordList, options)
      }

      if (!this.curPuzzle) {
        this.gridGrowths++
        if (this.gridGrowths > options.maxGridGrowth) {
          throw new Error(`No valid ${options.width}x${options.height} grid found and not allowed to grow more`)
        }
        console.log(`No valid ${options.width}x${options.height} grid found after ${this.attempts - 1} attempts, trying with bigger grid`)
        options.height++
        options.width++
        this.attempts = 0
      }
    }

    // fill in empty spaces with random letters
    if (options.fillBlanks) {
      for (let i = 0, k = this.curPuzzle.length ; i < k ; i++) {
        for (let j = 0, l = this.curPuzzle[i].length ; j < l ; j++) {
          if(this.curPuzzle[i][j] == '') {
            this.curPuzzle[i][j] = this.lettersSet[Math.floor(Math.random() * this.lettersSet.length)]
          }
        }
      }
    }

    if(options.debug) {this.print(this.curPuzzle)}
    return this.curPuzzle
  }

  /**
  *Wrapper around `newPuzzle` allowing to find a solution without some words
  * @param {Object} opts options to use for this puzzle
  */
  newPuzzleLax(words, opts) {
    try {
      return this.newPuzzle(words, opts);
    } catch (e) {
      if (!opts.allowedMissingWords) {
        throw e
      }
      var opts = Object.assign({}, opts); // shallow copy
      opts.allowedMissingWords--
      for (var i = 0; i < words.length; i++) {
        var wordList = words.slice(0)
        wordList.splice(i, 1)
        try {
          this.curPuzzle = this.newPuzzleLax(wordList, opts)
          console.log(`Solution found without word "${words[i]}"`)
          return this.curPuzzle
        } catch (e) {}
      }
      throw e
    }
  }

  /**
   *Returns the starting location and orientation of the specified words within the puzzle. Any words that are not found are returned in the notFound array
   * @param {Array.<Array>} puzzle
   * @param {Array.<string>} words
   * @returns {Array.<{x: number, y: number, orientation: string, word: string, overlap: number}>}
   * @public
   * @memberof wordPuzzle
   */
  solve(puzzle, words) {
    var options = {
          height:       puzzle.length,
          width:        puzzle[0].length,
          orientations: this.orientations,
          preferOverlap: true
        },
        found = [],
        notFound = []

    for(var i = 0, len = words.length; i < len; i++) {
      let word = words[i],
          locations = this.findBestLocations(puzzle, options, word)

      if (locations.length > 0 && locations[0].overlap === word.length) {
        locations[0].word = word
        found.push(locations[0])
      } else {
        notFound.push(word)
      }
    }

    return { found: found, notFound: notFound }
  }

  /**
   *Outputs a puzzle to the console, useful for debugging
   * @param {Array.<Array>} puzzle current state of the puzzle
   * @returns {string} formatted string representing the puzzle
   * @memberof wordPuzzle
   */
  print(puzzle) {
    let puzzleString = ''
    for (var i = 0, height = puzzle.length; i < height; i++) {
      var row = puzzle[i]
      for (var j = 0, width = row.length; j < width; j++) {
        puzzleString += (row[j] === '' ? ' ' : row[j]) + ' '
      }
      puzzleString += '\n'
    }

    console.log(puzzleString)
    return puzzleString
  }

  /**
   *Draws the puzzle by inserting rows of buttons into the DOM Element
   * @param {HTMLElement} [domElem=this.domElem]
   * @param {Array.<Array>} [puzzle=this.finalPuzzle]
   * @memberof wordPuzzle
   */
  drawPuzzle(domElem = this.domElem, puzzle = this.finalPuzzle) {
    while (domElem.firstChild) {
      domElem.removeChild(domElem.firstChild);
    }
    // for each row in the puzzle
    for (var i = 0, height = puzzle.length; i < height; i++) {
      // append a div to represent a row in the puzzle
      let div = document.createElement('div');
      var row = puzzle[i];
      // for each element in that row
      for (var j = 0, width = row.length; j < width; j++) {
        // append our button with the appropriate class
        let btn = document.createElement('button');
        btn.classList.add('puzzleSquare');
        btn.setAttribute('x', j);
        btn.setAttribute('y', i);
        let btnTxt = document.createTextNode(row[j] || '&nbsp;');
        btn.appendChild(btnTxt);
        div.appendChild(btn);
      }
      // close our div that represents a row
      domElem.appendChild(div);
    }
  }

  /**
   *Given two points, ensure that they are adjacent and determine what orientation the second point is relative to the first
   * @param {number} x1 x coordinate of the first point
   * @param {number} y1 y coordinate of the first point
   * @param {number} x2 x coordinate of the second point
   * @param {number} y2 y coordinate of the second point
   * @returns {string} matching orientation
   * @private
   * @memberof wordPuzzle
   */
  calcOrientation(x1, y1, x2, y2) {
    for (let i = 0 ; i < this.orientations.length ; i++) {
      let nextPos = this.compOrientations(this.orientations[i], x1, y1, 1)

      if (nextPos.x === x2 && nextPos.y === y2) {
        return this.orientations[i]
      }

      return null
    }
  }

  startTurn(e) {
    let elem = e.target
    elem.classList.add('selected')
    this.startSquare = elem
    this.selectedSquares.push(elem)
    this.curWord = elem.innerText
  }

  mouseMove(e) {
    let elem = e.target
    this.selectSquare(elem)
  }

  touchMove(e) {
    let xPos = e.touches[0].pageX
    let yPos = e.touches[0].pageY
    let elem = document.elementFromPoint(xPos, yPos)
    this.selectSquare(elem)
  }

  selectSquare(elem) {
    let lastSquare = this.selectedSquares[this.selectedSquares.length - 1]
    if (this.startSquare && elem !== this.startSquare) {
      let orientation = this.calcOrientation(
        lastSquare.getAttribute('x'),
        lastSquare.getAttribute('y'),
        elem.getAttribute('x'),
        elem.getAttribute('y'),
      )
      if (this.curOrientation == '' || this.curOrientation == orientation) {
        this.playTurn(elem)
      } else {
        this.endTurn()
      }
    }    
  }

  playTurn(elem) {
    for (var i = 0, len = this.wordList.length; i < len; i++) {
      if (this.wordList[i].toUpperCase().indexOf(this.curWord.toUpperCase() + elem.innerText.toUpperCase()) === 0) {
        elem.classList.add('selected')
        this.selectedSquares.push(elem)
        this.curWord += elem.innerText
      }
    }
  }

  endTurn() {
    for (let i = 0 ; i < this. wordList.length ; i++) {
      if (this.wordList[i].toUpperCase() === this.curWord.toUpperCase()) {
        let selected = document.querySelectorAll('.selected');
        [].forEach.call(selected, (item) => {
          item.classList.add('found')
        })
        this.wordList.splice(i, 1)
      }

      if (this.wordList.length === 0) {
        let completed = document.querySelectorAll('.puzzleSquare');
        [].forEach.call(completed, (item) => {
          item.classList.add('complete')
        })
      }
    }

    // reset the turn
    let selected = document.querySelectorAll('.selected');
    [].forEach.call(selected, (item) => {
      item.classList.remove('selected')
    })
    this.startSquare = null
    this.lastSquare = null
    this.selectedSquares = []
    this.curWord = ''
    this.curOrientation = null
  }

  

  /**
   *Set the event handlers that will trigger the recognition of the words
   * @param {HTMLElement} [domElem=this.domElem]
   * @memberof wordPuzzle
   */
  setEventHandlers(domElem = this.domElem) {
    if (window.navigator.msPointerEnabled) {
      let puzzleSquare = domElem.querySelectorAll('.puzzleSquare');
      [].forEach.call(puzzleSquare, (item) => {
        item.addEventListener('MSPointerDown', this.startTurn.bind(this))
        item.addEventListener('MSPointerOver', this.selectSquare.bind(this))
        item.addEventListener('MSPointerUp', this.endTurn.bind(this))
      })
    } else {
      let puzzleSquare = domElem.querySelectorAll('.puzzleSquare');
      [].forEach.call(puzzleSquare, (item) => {
        item.addEventListener('mousedown', this.startTurn.bind(this))
        item.addEventListener('mouseenter', this.mouseMove.bind(this))
        item.addEventListener('mouseup', this.endTurn.bind(this))
        item.addEventListener('touchstart', this.startTurn.bind(this))
        item.addEventListener('touchmove', this.touchMove.bind(this))
        item.addEventListener('touchend', this.endTurn.bind(this))
      })
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (wordPuzzle);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map