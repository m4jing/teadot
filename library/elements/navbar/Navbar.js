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

var _props = require('../../constant/props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var advanced = props.advanced;
			var size = props.size;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['advanced', 'size', 'className', 'children']);

			var klassName = (0, _klassName2.default)('navbar', 'clearfix', (_KlassName = {}, _defineProperty(_KlassName, 'advanced', advanced), _defineProperty(_KlassName, 'navbar--' + size, size), _KlassName), className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					className: klassName
				}),
				children
			);
		}
	}]);

	return Navbar;
}(_react2.default.Component);

;

Navbar.propTypes = {
	advanced: _react.PropTypes.bool,
	size: _react.PropTypes.oneOf(_props.SIZES),
	className: _react.PropTypes.string,
	children: _react.PropTypes.node
};

Navbar.defaultProps = {
	advanced: false
};

exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map