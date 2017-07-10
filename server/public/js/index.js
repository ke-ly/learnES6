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

	console.log('promise解决异步操作的');
	{
	    //es5
	    var ajax = function ajax(cb) {
	        console.log('开始');
	        setTimeout(function () {
	            cb && cb.call();
	        }, 1000);
	    };

	    ajax(function () {
	        console.log('cbbb');
	    });
	}

	{
	    //promise基本调用
	    var _ajax = function _ajax() {
	        console.log('又开始啦');
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve();
	            }, 1000);
	        });
	    };

	    _ajax().then(function () {
	        console.log('promise的resolve-1');
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve();
	            }, 2000);
	        });
	    }).then(function () {
	        console.log('promise的resolve-2');
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve();
	            }, 3000);
	        });
	    }).then(function () {
	        console.log('promise的resolve-over');
	    });
	}

	{
	    //捕获错误
	    var _ajax2 = function _ajax2(num) {
	        return new Promise(function (resolve, reject) {
	            if (num > 5) {
	                resolve();
	            } else {
	                throw new Error('出错啦，sb！');
	            }
	        });
	    };

	    _ajax2(6).then(function () {
	        console.log('num is', 6);
	    }).catch(function (err) {
	        console.log('catch', err);
	    });

	    _ajax2(3).then(function () {
	        //小于5，不执行resolve();
	        console.log('num is', 3);
	    }).catch(function (err) {
	        console.log('catch', err);
	    });
	}

	{
	    var loadImg = function loadImg(src) {
	        return new Promise(function (resolve, reject) {
	            var img = document.createElement('img');
	            img.src = src;

	            img.onload = function () {
	                resolve(img);
	            };
	            img.onerror = function (err) {
	                reject(err);
	            };
	        });
	    };

	    var showImgs = function showImgs(imgs) {
	        imgs.forEach(function (item) {
	            document.body.appendChild(item);
	        });
	    };

	    var showImg = function showImg(img) {
	        var div = document.createElement('div');
	        div.appendChild(img);
	        document.body.appendChild(div);
	    };

	    Promise.all([//三个都加载完才执行       
	    loadImg('http://img95.699pic.com/photo/2016/08/26/97d2cfe5-b8f9-4cfe-ac3b-f6a945f1510e.jpg_wh300.jpg'), loadImg('http://img95.699pic.com/photo/2016/08/26/1ba2f350-d2b2-459b-aab1-25bd4f0951f9.jpg_wh300.jpg'), loadImg('http://img95.699pic.com/photo/2016/08/27/8295177e-441a-4624-a858-8c48fb8e2a02.jpg_wh300.jpg')]).then(showImgs);

	    Promise.race([//一个加载完就执行        
	    loadImg('http://img95.699pic.com/photo/2016/08/26/97d2cfe5-b8f9-4cfe-ac3b-f6a945f1510e.jpg_wh300.jpg11'), loadImg('http://img95.699pic.com/photo/2016/08/26/1ba2f350-d2b2-459b-aab1-25bd4f0951f9.jpg_wh300.jpg'), loadImg('http://img95.699pic.com/photo/2016/08/27/8295177e-441a-4624-a858-8c48fb8e2a02.jpg_wh300.jpg')]).then(showImg);
	}

/***/ })
/******/ ]);