'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function klassName() {
		var klasses = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				klasses.push(arg);
			} else if (Array.isArray(arg)) {
				klasses.push(klassName.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						klasses.push(key);
					}
				}
			}
		}

		return klasses.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = klassName;
	} else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
		define('klassName', [], function () {
			return klassName;
		});
	} else {
		window.klassName = klassName;
	}
})();
//# sourceMappingURL=KlassName.js.map