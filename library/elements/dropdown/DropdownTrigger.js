'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownTrigger = function (_Component) {
	_inherits(DropdownTrigger, _Component);

	function DropdownTrigger(props) {
		_classCallCheck(this, DropdownTrigger);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownTrigger).call(this, props));
	}

	_createClass(DropdownTrigger, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			var className = props.className;
			var activated = props.activated;
			var children = props.children;
			var onClick = props.onClick;

			var others = _objectWithoutProperties(props, ['className', 'activated', 'children', 'onClick']);

			var klassName = (0, _klassName2.default)('dropdown-trigger', _defineProperty({}, 'activated', activated), className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, { onClick: onClick, className: klassName }),
				children
			);
		}
	}]);

	return DropdownTrigger;
}(_react.Component);

;

DropdownTrigger.propTypes = {
	activated: _react.PropTypes.bool,
	type: _react.PropTypes.oneOf(['warp', 'menu', 'navbar']),

	className: _react.PropTypes.string,
	children: _react.PropTypes.any,
	onClick: _react.PropTypes.func
};

DropdownTrigger.defaultProps = {
	type: 'warp'
};

exports.default = DropdownTrigger;
//# sourceMappingURL=DropdownTrigger.js.map