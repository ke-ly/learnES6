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

	{
	    console.info('map和array的区别');
	    var map = new Map();
	    var arr = [];

	    //增
	    map.set('t', 1);
	    arr.push({ t: 1 });
	    console.log('Map-array-增', map, arr);

	    //查
	    var map_exist = map.has('t');
	    var arr_exist = arr.find(function (item) {
	        return item.t;
	    });

	    console.log('Map-array-查', map_exist, arr_exist);

	    //改
	    map.set('t', 2);
	    arr.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });
	    console.log('Map-array-改', map, arr);

	    //删
	    map.delete('t');
	    var index = arr.findIndex(function (item) {
	        return item.t;
	    }); //先用findIndex找下标
	    arr.splice(index, 1); //再用splice删除
	    console.log('Map-array-删', map, arr);
	}

	{
	    console.info('Set和array的区别');

	    var set = new Set();
	    var _arr = [];
	    var obj = { s: 'b' };

	    //增
	    set.add(obj);
	    _arr.push({ s: 'b' });
	    console.log('Set-array-增', set, _arr);

	    //查
	    var set_exist = set.has(obj); // true
	    var _arr_exist = _arr.find(function (item) {
	        return item.s;
	    });
	    console.log('Set-array-查', set_exist, _arr_exist);

	    //改
	    set.forEach(function (item) {
	        return item.s ? item.s = 'bb' : '';
	    });
	    _arr.forEach(function (item) {
	        return item.s ? item.s = 'bb' : '';
	    });
	    console.log('Set-array-改', set, _arr);

	    //删
	    //    set.delete(obj); //11
	    set.forEach(function (item) {
	        return item.s ? set.delete(item) : '';
	    }); //22
	    var _index = _arr.findIndex(function (item) {
	        return item.t;
	    }); //先用findIndex找下标
	    _arr.splice(_index, 1); //再用splice删除
	    console.log('Set-array-删', set, _arr);
	}

	{
	    console.info('map、set、obj三者的比较');

	    var item = { s: 'b' };
	    var _map = new Map();
	    var _set = new Set();
	    var _obj = {};

	    //增
	    _map.set('s', 'b');
	    _set.add(item);
	    _obj.s = 'b';
	    console.log('map、set、obj-增', _map, _set, _obj);

	    //查    
	    console.log('map、set、obj-查', {
	        map_esist: _map.has('s'),
	        set_exist: _set.has(item),
	        obj_exist: 's' in _obj
	    });

	    //改    
	    _map.set('s', 'bb');
	    item.s = 'bb';
	    _obj.s = 'bb';
	    console.log('map、set、obj-改', _map, _set, _obj);

	    //删
	    _map.delete('s');
	    _set.delete(item);
	    delete _obj.s;
	    console.log('map、set、obj-删', _map, _set, _obj);
	}

/***/ })
/******/ ]);