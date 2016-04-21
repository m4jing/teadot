'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldLabel = function (_React$Component) {
	_inherits(TextFieldLabel, _React$Component);

	function TextFieldLabel(props) {
		_classCallCheck(this, TextFieldLabel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TextFieldLabel).call(this, props));
	}

	_createClass(TextFieldLabel, [{
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var disabled = props.disabled;
			var fixed = props.fixed;
			var htmlFor = props.htmlFor;
			var onTouchTap = props.onTouchTap;
			var className = props.className;
			var children = props.children;


			var klassName = (0, _klassName2.default)('field-label', (_KlassName = {}, _defineProperty(_KlassName, 'disabled', 'disabled' in props && disabled !== false), _defineProperty(_KlassName, 'field-label--fixed', 'fixed' in props && fixed !== false), _KlassName), className);

			return _react2.default.createElement(
				'label',
				{
					className: klassName,
					htmlFor: htmlFor,
					onTouchTap: onTouchTap
				},
				children
			);
		}
	}]);

	return TextFieldLabel;
}(_react2.default.Component);

;

TextFieldLabel.propTypes = {
	disabled: _react.PropTypes.bool,
	fixed: _react.PropTypes.bool,

	className: _react.PropTypes.string,
	children: _react.PropTypes.node,
	htmlFor: _react.PropTypes.string,

	onTouchTap: _react.PropTypes.func
};

TextFieldLabel.defaultProps = {
	disabled: false,
	fixed: false
};

exports.default = TextFieldLabel;
//# sourceMappingURL=TextFieldLabel.js.map