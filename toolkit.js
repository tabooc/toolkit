/**
 * Copyright (c) 2009-2016 Storm and other contributors
 * https://github.com/tabooc
 *
 * Released under the MIT license
 * support IE6+ and other browsers
 * source:lib,original,contributors
 */
(function(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		exports["toolkit"] = factory();
	} else {
		root["toolkit"] = factory();
	}
}(this, function() {

	//工具箱
	var toolkit = {};
	
	//版本
	toolkit.version = '1.0.0';

	/**
	 * 空方法
	 * @return {undefined}
	 */
	toolkit.noop = function() {

	};

	/**
	 * 用逗号分割数字
	 * @param  {Number} number 要处理的数字
	 * @param  {int} length 逗号之间的长度,默认为3
	 * @return {String}
	 */
	toolkit.comma = function(number, length) {
		var source = number;
		if (!length || length < 1) {
			length = 3;
		}

		source = source.toString().split(".");
		source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), "$1,");
		return source.join(".");
	};

	/**
	 * 对目标元素按指定长度进行补0处理
	 * @param  {Number} number
	 * @param  {int} length
	 * @return {String}
	 */
	toolkit.pad = function(number, length) {
		var source = number;
		var pre = "",
			negative = (source < 0),
			string = Math.abs(source).toString();

		if (string.length < length) {
			pre = (new Array(length - string.length + 1)).join('0');
		}

		return (negative ? "-" : "") + pre + string;
	};

	/**
	 * 生成[min, max]范围内的随机整数
	 * @param  {Number}  min
	 * @param  {Number}  max
	 * @return {Number}  
	 */
	toolkit.randomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	/**
	 * 清理字符串中的html标签
	 * @param  {String} string
	 * @return {String}
	 */
	toolkit.stripTags = function(string) {
		return (string || '').replace(/<[^>]+>/g, '');
	};

	/**
	 * 对'-'分割的字符串进行驼峰化处理
	 * @param  {String} string
	 * @return {String}
	 */
	toolkit.toCamelCase = function(string) {
		var source = string.valueOf();
		if (source.indexOf('-') < 0) {
			return source;
		}
		return source.replace(/[-][^-]/g, function(match) {
			return match.charAt(1).toUpperCase();
		});
	};

	/**
	 * 去除左右空白符
	 * @param  {String} string
	 * @return {String}
	 */
	toolkit.trim = function(string) {
		var trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g');
		return string.replace(trimer, '');
	};

	/**
	 * 判断目标对象是否是数组
	 * @param  {Object}
	 * @return {Boolean}
	 */
	toolkit.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};

	/**
	 * 判断元素是否在目标数组中
	 * @param  {Array} array
	 * @param  {Object} item
	 * @return {Boolean}
	 */
	toolkit.inArray = function(array, item) {
		for (var i = 0, len = array.length; i < len; i++) {
			if (array[i] === item) {
				return true;
			}
		}
		return false;
	};

	/**
	 * 清空数组
	 * @param  {Array} array
	 * @return {Array}
	 */
	toolkit.empty = function(array) {
		array.length = 0;
		return array;
	};

	/**
	 * 元素在目标数组中的索引
	 * @param  {Array} array 目标数组
	 * @param  {Object} searchElement 要判断的元素
	 * @param  {Number} formIndex 起始位置
	 * @return {Number} index or -1
	 */
	toolkit.indexOf = function(array, searchElement, fromIndex) {

		var k;

		// 1. Let O be the result of calling ToObject passing
		//    the this value as the argument.
		if (array == null) {
			throw new TypeError('"this" is null or not defined');
		}

		var O = Object(array);

		// 2. Let lenValue be the result of calling the Get
		//    internal method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If len is 0, return -1.
		if (len === 0) {
			return -1;
		}

		// 5. If argument fromIndex was passed let n be
		//    ToInteger(fromIndex); else let n be 0.
		var n = +fromIndex || 0;

		if (Math.abs(n) === Infinity) {
			n = 0;
		}

		// 6. If n >= len, return -1.
		if (n >= len) {
			return -1;
		}

		// 7. If n >= 0, then Let k be n.
		// 8. Else, n<0, Let k be len - abs(n).
		//    If k is less than 0, then let k be 0.
		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

		// 9. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the
			//    HasProperty internal method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			//    i.  Let elementK be the result of calling the Get
			//        internal method of O with the argument ToString(k).
			//   ii.  Let same be the result of applying the
			//        Strict Equality Comparison Algorithm to
			//        searchElement and elementK.
			//  iii.  If same is true, return k.
			if (k in O && O[k] === searchElement) {
				return k;
			}
			k++;
		}
		return -1;
	};

	/**
	 * 数组去重
	 * @param  {Array} array 要处理的数组
	 * @param  {Function} fn 去重方法(默认为严格对比)
	 * @return {Array}
	 */
	toolkit.unique = function(array, fn) {
		var len = array.length,
			result = array.slice(0),
			i, datum;

		if ('function' !== typeof fn) {
			fn = function(item1, item2) {
				return item1 === item2;
			};
		}
		// 从后往前双重循环比较
		// 如果两个元素相同，删除后一个
		while (--len > 0) {
			datum = result[len];
			i = len;
			while (i--) {
				if (fn(datum, result[i])) {
					result.splice(len, 1);
					break;
				}
			}
		}

		len = array.length = result.length;
		for (i = 0; i < len; i++) {
			array[i] = result[i];
		}

		return array;
	};

	/**
	 * 数组合并
	 * @param  {Array} first 第一个数组
	 * @param  {Array} second 第二个数组
	 * @return {Array}
	 */
	toolkit.merge = function(first, second) {
		var i = first.length,
			j = 0;

		if (typeof second.length === "number") {
			for (var l = second.length; j < l; j++) {
				first[i++] = second[j];
			}

		} else {
			while (second[j] !== undefined) {
				first[i++] = second[j++];
			}
		}

		first.length = i;

		return first;
	};

	/**
	 * 日期格式化
	 * @param  {Date} source  要格式化的日期对象
	 * @param  {String} pattern 格式化规则
	 * @return {String}         格式化后的字符串
	 */
	toolkit.dateFormat = function(source, pattern) {
		if ('string' != typeof pattern) {
			return source.toString();
		}

		function replacer(patternPart, result) {
			pattern = pattern.replace(patternPart, result);
		}

		var pad = toolkit.pad,
			year = source.getFullYear(),
			month = source.getMonth() + 1,
			date2 = source.getDate(),
			hours = source.getHours(),
			minutes = source.getMinutes(),
			seconds = source.getSeconds();

		replacer(/yyyy/g, pad(year, 4));
		replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
		replacer(/MM/g, pad(month, 2));
		replacer(/M/g, month);
		replacer(/dd/g, pad(date2, 2));
		replacer(/d/g, date2);

		replacer(/HH/g, pad(hours, 2));
		replacer(/H/g, hours);
		replacer(/hh/g, pad(hours % 12, 2));
		replacer(/h/g, hours % 12);
		replacer(/mm/g, pad(minutes, 2));
		replacer(/m/g, minutes);
		replacer(/ss/g, pad(seconds, 2));
		replacer(/s/g, seconds);

		return pattern;
	};

	/**
	 * 将目标字符串转换成日期对象
	 * @param  {String} source 目标字符串
	 * @return {Date}        转换后的日起对象
	 */
	toolkit.dateParse = function(source) {
		var reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
		if ('string' == typeof source) {
			if (reg.test(source) || isNaN(Date.parse(source))) {
				var d = source.split(/ |T/),
					d1 = d.length > 1 ? d[1].split(/[^\d]/) : [0, 0, 0],
					d0 = d[0].split(/[^\d]/);
				return new Date(d0[0] - 0,
					d0[1] - 1,
					d0[2] - 0,
					d1[0] - 0,
					d1[1] - 0,
					d1[2] - 0);
			} else {
				return new Date(source);
			}
		}

		return new Date();
	};


	return toolkit;
}));