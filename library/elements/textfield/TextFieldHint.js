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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldHint = function (_React$Component) {
	_inherits(TextFieldHint, _React$Component);

	function TextFieldHint(props) {
		_classCallCheck(this, TextFieldHint);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TextFieldHint).call(this, props));
	}

	_createClass(TextFieldHint, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			var show = props.show;
			var className = props.className;
			var text = props.text;


			var klassName = (0, _klassName2.default)('field-hint', className);

			return _react2.default.createElement(
				'div',
				{
					className: klassName,
					style: { display: show ? 'block' : 'none', opacity: show ? 0.8 : 0 }
				},
				text
			);
		}
	}]);

	return TextFieldHint;
}(_react2.default.Component);

;

TextFieldHint.propTypes = {
	className: _react.PropTypes.string,
	text: _react.PropTypes.node,
	show: _react.PropTypes.bool
};

TextFieldHint.defaultProps = {
	show: true
};

exports.default = TextFieldHint;
//# sourceMappingURL=TextFieldHint.js.map