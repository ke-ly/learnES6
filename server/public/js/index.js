/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    console.log('---set,map----');
	}

	{
	    var list = new Set(); //方法1
	    list.add(1);
	    list.add(2);

	    console.log('个数size', list.size);

	    var arr = [1, 2, 3, 4, 5]; //方法2
	    var list2 = new Set(arr);

	    console.log('size:', list2.size);
	}
	{
	    //set的值不能重复，可用来去重，但是不能进行数据类型的转换
	    var _arr = [1, 2, 3, 4, 5, 1, "2"];
	    var _list = new Set(_arr);

	    console.log(_list); // 1,2,3,4,5,'2';
	}
	{
	    //set 的方法
	    var methods = ['add', 'delete', 'clear', 'has'];
	    var setMethods = new Set(methods);

	    console.log('set的方法', setMethods);
	    console.log('has', setMethods.has('add'));
	    console.log('del', setMethods.delete('add'), setMethods);
	    setMethods.clear();
	    console.log('clear', setMethods);
	}
	{
	    //set的遍历
	    var _methods = ['add', 'delete', 'clear', 'has'];
	    var _setMethods = new Set(_methods);

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _setMethods.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            console.log('keys', key);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = _setMethods.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var val = _step2.value;

	            console.log('values', val);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = _setMethods.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2),
	                _key = _step3$value[0],
	                _val = _step3$value[1];

	            console.log('entries', [_key, _val]);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    _setMethods.forEach(function (item) {
	        console.log('forEach', item);
	    });
	}

	{
	    //WeakSet

	    var obj = {};
	    var weakList = new WeakSet();
	    weakList.add(obj); //只能这么加，并且weakset的值只能是对象不能是其他数据类型
	    console.log('weakList', weakList);
	    //weakList没有size和clear方法，并且不能遍历
	}

	{
	    //Map
	    var map1 = new Map(); //定义方式1
	    var k = ['a', 'a'];
	    map1.set(k, 123); //key值可以为各种数据类型
	    map1.set('b', 456);
	    console.log('map.set()', map1);

	    var map2 = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]); //定义方式2
	    //只能是一个数组且在里面必须嵌套数组，嵌套的数组必须要有两个值，一个key，一个val。
	    console.log('map[]', map2);

	    console.log('get', map2.get('b'));
	    console.log('size属性', map2.size);
	    console.log('has方法', map2.has('a'));
	    console.log('del', map2.delete('a'), map2);
	    console.log('clear', map2.clear(), map2);
	    //遍历和Set相同
	}
	{
	    //weakmap
	    //其于Map的区别和weakSet于Set的区别是相同的：key值必须为对象、没有size属性、clear方法和不能遍历
	    var o = new WeakMap();
	    var _obj = { 'a': 'aaa' };
	    o.set(_obj, 111); //不要忘了val
	    console.log('weakmap', o);
	}

/***/ })
/******/ ]);