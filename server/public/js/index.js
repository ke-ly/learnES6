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

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	    console.info('proxy&reflct');

	    var obj = {
	        name: '毛毛',
	        age: 24,
	        time: '2017-07-09',
	        _r: 123
	    };

	    var monitor = new Proxy(obj, {
	        //拦截读取数据
	        get: function get(target, key) {
	            return target[key].replace('2017', '2015');
	        },

	        //拦截设置数据
	        set: function set(target, key, value) {
	            if (key == 'name') {
	                return target[key] = value;
	            } else {
	                return target[key]; // '该值不能修改，返回它自己';   
	            }
	        },

	        // 拦截key in obj
	        has: function has(target, key) {
	            if (key === 'name') {
	                return true;
	            } else {
	                return false;
	            }
	        },

	        //拦截delete
	        deleteProperty: function deleteProperty(target, key) {
	            if (key.indexOf('_') > -1) {
	                delete target[key];
	                return true; //必须要加
	            } else {
	                return target[key]; // '该值不能修改，返回它自己';      
	            }
	        },

	        //拦截Object.keys, Object.getOwnPropertySymbols,Object.getOwnPropertyNames
	        ownKeys: function ownKeys(target, key) {
	            return Object.keys(target).filter(function (item) {
	                return item != 'time';
	            }); //filter 过滤  
	        }
	    });
	    console.log('get', monitor.time);
	    monitor.name = 'sbbb';
	    monitor.time = '2018-01-01';
	    console.log('set', monitor);
	    console.log('has', 'name' in monitor, 'time' in monitor);

	    delete monitor.name;
	    delete monitor._r;
	    console.log('deleteProperty', monitor);

	    console.log('Object.keys', Object.keys(obj));

	    console.log('ownKeys', Object.keys(monitor)); //["name", "age"]
	}

	{
	    var sym = Symbol.for('t');
	    var _obj = _defineProperty({
	        name: '毛毛',
	        age: 24,
	        time: '2017-07-09',
	        _r: 123
	    }, sym, 'Symbol');

	    console.log('Reflect.get', Reflect.get(_obj, 'time'));
	    Reflect.set(_obj, 'name', 'sbbb');
	    console.log('Reflect.set', _obj);

	    console.log('Reflect.has', Reflect.has(_obj, '_r'));

	    Reflect.deleteProperty(_obj, '_r');
	    console.log('Reflect.deleteProperty', _obj);

	    console.log('Reflect.ownKeys', Reflect.ownKeys(_obj));
	}

/***/ })
/******/ ]);