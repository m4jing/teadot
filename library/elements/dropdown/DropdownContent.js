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

var DropdownContent = function (_Component) {
	_inherits(DropdownContent, _Component);

	function DropdownContent(props) {
		_classCallCheck(this, DropdownContent);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownContent).call(this, props));
	}

	_createClass(DropdownContent, [{
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var className = props.className;
			var children = props.children;
			var size = props.size;
			var align = props.align;

			var others = _objectWithoutProperties(props, ['className', 'children', 'size', 'align']);

			var klassName = (0, _klassName2.default)('dropdown-content', (_KlassName = {}, _defineProperty(_KlassName, 'dropdown-content--' + size, size), _defineProperty(_KlassName, 'dropdown-content--' + align, align), _KlassName), className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, { className: klassName }),
				children
			);
		}
	}]);

	return DropdownContent;
}(_react.Component);

;

DropdownContent.propTypes = {
	activated: _react.PropTypes.bool,
	className: _react.PropTypes.string,

	size: _react.PropTypes.oneOf(_props.SIZES),
	align: _react.PropTypes.oneOf(_props.ALIGNS),

	children: _react.PropTypes.any
};

DropdownContent.defaultProps = {};

exports.default = DropdownContent;
//# sourceMappingURL=DropdownContent.js.map