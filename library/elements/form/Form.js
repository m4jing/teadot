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

var noop = function noop(event) {
	event.preventDefault();
};

var Form = function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form(props) {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));
	}

	_createClass(Form, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				form: this.props.form
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var horizontal = props.horizontal;
			var inline = props.inline;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['horizontal', 'inline', 'className', 'children']);

			var klassName = (0, _klassName2.default)('form', (_KlassName = {}, _defineProperty(_KlassName, 'form--inline', 'inline' in props && inline !== false), _defineProperty(_KlassName, 'form--horizontal', 'horizontal' in props && horizontal !== false), _KlassName), className);

			return _react2.default.createElement(
				'form',
				_extends({}, others, {
					className: klassName
				}),
				children
			);
		}
	}]);

	return Form;
}(_react2.default.Component);

;

Form.propTypes = {
	horizontal: _react.PropTypes.bool,
	inline: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	children: _react.PropTypes.any,
	form: _react.PropTypes.object,

	onSubmit: _react.PropTypes.func
};

Form.childContextTypes = {
	form: _react.PropTypes.object
};

Form.defaultProps = {
	onSubmit: noop
};

exports.default = Form;
//# sourceMappingURL=Form.js.map