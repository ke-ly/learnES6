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

	var _lottery = __webpack_require__(2);

	var _lottery2 = _interopRequireDefault(_lottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lottery/base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Timer = function () {
	    function Timer() {
	        _classCallCheck(this, Timer);
	    }

	    _createClass(Timer, [{
	        key: 'countDown',
	        value: function countDown(end, update, handle) {
	            var now = new Date().getDate();
	            var self = this;
	            if (now - end) {
	                handle.call(self);
	            } else {
	                var last_time = end - now;
	                var px_d = 1000 * 60 * 60 * 24;
	                var px_h = 1000 * 60 * 60;
	                var px_m = 1000 * 60;
	                var px_s = 1000;
	                var d = Math.floor(last_time / px_d); //天
	                var h = Math.floor((last_time - d * px_d) / px_h);
	                var m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
	                var s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
	                var arr = [];

	                if (d > 0) {
	                    arr.push('<em>' + d + '</em>\u5929');
	                }
	                if (arr.length || h > 0) {
	                    arr.push('<em>' + h + '</em>\u65F6');
	                }
	                if (arr.length || m > 0) {
	                    arr.push('<em>' + m + '</em>\u5206');
	                }
	                if (arr.length || s > 0) {
	                    arr.push('<em>' + s + '</em>\u79D2');
	                }

	                self.last_time = arr.join('');
	                update.call(self, arr.join(''));

	                setTimeout(function () {
	                    self.countDown(end, update, handle);
	                }, 1000);
	            }
	        }
	    }]);

	    return Timer;
	}();

	exports.default = Timer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Calculate = function () {
	    function Calculate() {
	        _classCallCheck(this, Calculate);
	    }

	    _createClass(Calculate, [{
	        key: 'computeCount',

	        /**
	         *[computeCount 计算注数]   
	         *@param  {number} active [当前选中的号码]    
	         *@param  {string} play_name [当前玩法的标识]    
	         *@return {number} active [注数]    
	         */
	        value: function computeCount(active, play_name) {
	            var count = 0;
	            var exist = this.play_list.has(play_name);
	            var arr = new Array(active).fill('0'); //ES6给数组默认active的长度，并用0填充
	            if (exist && play_name.at(0) === "r") {
	                count = Calculate.combine(arr, play_name.split('')[1]);
	            };
	            return count;
	        }

	        /**
	         *[computeBonus 奖金范围预测]   
	         *@param  {number} active [当前选中的号码]    
	         *@param  {string} play_name [当前玩法的标识]    
	         *@return {array}  [奖金范围]    
	         */

	    }, {
	        key: 'computeBonus',
	        value: function computeBonus(active, play_name) {
	            var play = play_name.split('');
	            var self = this;
	            var arr = new Array(play[1] * 1).fill(0);
	            var min = void 0,
	                max = void 0;
	            if (play[0] === 'r') {
	                var min_active = 5 - (11 - active);
	                if (min_active > 0) {
	                    if (min_active - play[1] >= 0) {
	                        arr = new Array(min_active).fill(0);
	                        min = Calculate.combine(arr, play[1]).length;
	                    } else {
	                        if (play[1] - 5 > 0 && active - play[1] >= 0) {
	                            arr = new Array(active - 5).fill(0);
	                            min = Calculate.combine(arr, play[1] - 5).length;
	                        } else {
	                            min = active - play[1] > -1 ? 1 : 0;
	                        }
	                    }
	                } else {
	                    min = active - play[1] > -1 ? 1 : 0;
	                }

	                var max_active = Math.min(active, 5);

	                if (play[1] - 5 > 0) {
	                    if (active - play[1] >= 0) {
	                        arr = new Array(active - 5).fill(0);
	                        max = Calculate.combine(arr, play[1] - 5).length;
	                    } else {
	                        max = 0;
	                    }
	                } else if (play[1] - 5 < 0) {
	                    arr = new Array(Math.min(active, 5)).fill(0);
	                    max = Calculate.combine(arr, play[1]).length;
	                } else {
	                    max = 1;
	                }
	            }

	            return [min, max].map(function (item) {
	                return item * self.play_list.get(play_name).bonus;
	            });
	        }

	        /**
	        *[combine 组合运算]   
	        *@param  {array} arr [参与组合运算的数组]    
	        *@param  {number} size [组合运算的基数]    
	        *@return {number}  [计算注数]    
	        */

	    }], [{
	        key: 'combine',
	        value: function combine(arr, size) {
	            var allResult = [];
	            (function f(arr, size, result) {
	                var arrLen = arr.length;
	                if (size > arrLen) {
	                    return;
	                }
	                if (size === arrLen) {
	                    allResult.push([].concat(result, arr));
	                } else {
	                    for (var i = 0; i < arrLen; i++) {
	                        var newResult = [].concat(result);
	                        newResult.push(arr[i]);
	                        if (size === 1) {
	                            allResult.push(newResult);
	                        } else {
	                            var newArr = [].concat(arr);
	                            newArr.splice(0, i + 1);
	                            f(newArr, size - 1, newResult);
	                        }
	                    }
	                }
	            })(arr, size, []);
	        }
	    }]);

	    return Calculate;
	}();

	exports.default = Calculate;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Interface = function () {
	    function Interface() {
	        _classCallCheck(this, Interface);
	    }

	    _createClass(Interface, [{
	        key: 'getOmit',
	        value: function getOmit(issue) {
	            //遗漏
	            var self = this;
	            return new Promise(function (resolve, reject) {
	                _jquery2.default.ajax({
	                    url: '/get/omit',
	                    data: {
	                        issue: issue
	                    },
	                    dataType: 'json',
	                    success: function success(res) {
	                        self.setOmit(res.data);
	                        resolve.call(self, res);
	                    },
	                    error: function error(err) {
	                        reject.call(err);
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'getOpenCode',
	        value: function getOpenCode(issue) {
	            //获取开奖号
	            var self = this;
	            return Promise(function (resolve, reject) {
	                _jquery2.default.ajax({
	                    url: '/get/opencode',
	                    data: {
	                        issue: issue
	                    },
	                    dataType: 'json',
	                    success: function success(res) {
	                        self.setOpenCode(res.data);
	                        resolve.call(self, res);
	                    },
	                    error: function error() {
	                        reject.call(err);
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'getState',
	        value: function getState(issue) {
	            //获取当前状态
	            var self = this;
	            return Promise(function (resolve, reject) {
	                _jquery2.default.ajax({
	                    url: '/get/state',
	                    data: {
	                        issue: issue
	                    },
	                    dataType: 'json',
	                    success: function success(res) {
	                        resolve.call(self, res);
	                    },
	                    error: function error() {
	                        reject.call(err);
	                    }
	                });
	            });
	        }
	    }]);

	    return Interface;
	}();

	exports.default = Interface;

/***/ })
/******/ ]);