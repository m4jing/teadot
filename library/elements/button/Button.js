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

var _props2 = require('../../constant/props');

var _index = require('../../enhance/Ripple/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

		_this.state = {};
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleMouseUp = _this.handleMouseUp.bind(_this);
		_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
		return _this;
	}

	_createClass(Button, [{
		key: 'handleClick',
		value: function handleClick() {
			var _props;

			(_props = this.props).onClick.apply(_props, arguments);
		}
	}, {
		key: 'handleMouseUp',
		value: function handleMouseUp(event) {
			this.refs.button.blur();
			if (this.props.onMouseUp) this.props.onMouseUp(event);
		}
	}, {
		key: 'handleMouseLeave',
		value: function handleMouseLeave(event) {
			this.refs.button.blur();
			if (this.props.onMouseLeave) this.props.onMouseLeave(event);
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var activated = props.activated;
			var loading = props.loading;
			var disabled = props.disabled;
			var href = props.href;
			var size = props.size;
			var kind = props.kind;
			var skin = props.skin;
			var shape = props.shape;
			var type = props.type;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['activated', 'loading', 'disabled', 'href', 'size', 'kind', 'skin', 'shape', 'type', 'className', 'children']);

			var klassName = (0, _klassName2.default)('button', (_KlassName = {}, _defineProperty(_KlassName, 'button--' + size, size), _defineProperty(_KlassName, 'button--' + kind, kind), _defineProperty(_KlassName, 'button--' + skin, skin), _defineProperty(_KlassName, 'button--' + shape, shape), _defineProperty(_KlassName, 'activated', 'activated' in props && activated !== false), _defineProperty(_KlassName, 'loading', 'loading' in props && loading !== false), _defineProperty(_KlassName, 'disabled', 'disabled' in props && disabled !== false), _KlassName), className);

			if (href) {
				return _react2.default.createElement(
					'a',
					_extends({}, others, {
						className: klassName,
						onClick: this.handleClick,
						onMouseUp: this.onMouseUp,
						onMouseLeave: this.onMouseLeave,
						href: href,
						ref: 'button',
						'data-teadot': 'button'
					}),
					children
				);
			} else {
				return _react2.default.createElement(
					'button',
					_extends({}, others, {
						className: klassName,
						onClick: this.handleClick,
						onMouseUp: this.onMouseUp,
						onMouseLeave: this.onMouseLeave,
						type: type || 'button',
						ref: 'button',
						'data-teadot': 'button'
					}),
					children
				);
			}
		}
	}]);

	return Button;
}(_react.Component);

;

Button.propTypes = {
	activated: _react.PropTypes.bool,
	loading: _react.PropTypes.bool,
	disabled: _react.PropTypes.bool,

	size: _react.PropTypes.oneOf(_props2.SIZES),
	skin: _react.PropTypes.oneOf(_props2.SKINS),
	kind: _react.PropTypes.oneOf(['hollow', 'link']),
	type: _react.PropTypes.oneOf(['submit', 'button', 'reset']),
	shape: _react.PropTypes.oneOf(['block', 'circle']),

	href: _react.PropTypes.string,
	className: _react.PropTypes.string,

	onClick: _react.PropTypes.func,
	onMouseUp: _react.PropTypes.func,
	onMouseLeave: _react.PropTypes.func
};

Button.defaultProps = {
	loading: false,
	disabled: false,
	onClick: noop
};

exports.default = (0, _index2.default)({ centered: false })(Button);
//# sourceMappingURL=Button.js.map