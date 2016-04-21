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

var _EventListener = require('../../helper/EventListener');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowsHeight = 30;

var EnhanceTextField = function (_React$Component) {
	_inherits(EnhanceTextField, _React$Component);

	function EnhanceTextField(props) {
		_classCallCheck(this, EnhanceTextField);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnhanceTextField).call(this, props));

		_this.state = {
			height: props.rows * rowsHeight
		};
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleResize = _this.handleResize.bind(_this);
		return _this;
	}

	_createClass(EnhanceTextField, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.syncHeightWithShadow();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.value !== this.props.value) {
				this.syncHeightWithShadow(nextProps.value);
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize(event) {
			this.syncHeightWithShadow(undefined, event);
		}
	}, {
		key: 'getInputNode',
		value: function getInputNode() {
			return this.refs.input;
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			this.getInputNode().value = value;
			this.syncHeightWithShadow(value);
		}
	}, {
		key: 'syncHeightWithShadow',
		value: function syncHeightWithShadow(newValue, event) {
			var shadow = this.refs.shadow;

			if (newValue !== undefined) {
				shadow.value = newValue;
			}

			var newHeight = shadow.scrollHeight;

			if (this.props.rowsMax >= this.props.rows) {
				newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
			}

			newHeight = Math.max(newHeight, rowsHeight);

			if (this.state.height !== newHeight) {
				this.setState({
					height: newHeight
				});

				if (this.props.onHeightChange) {
					this.props.onHeightChange(event, newHeight);
				}
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.syncHeightWithShadow(event.target.value);

			if (this.props.hasOwnProperty('valueLink')) {
				this.props.valueLink.requestChange(event.target.value);
			}

			if (this.props.onChange) {
				this.props.onChange(event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var disabled = props.disabled;
			var value = props.value;
			var defaultValue = props.defaultValue;
			var rows = props.rows;
			var valueLink = props.valueLink;
			var className = props.className;

			var others = _objectWithoutProperties(props, ['disabled', 'value', 'defaultValue', 'rows', 'valueLink', 'className']);

			var klassName = (0, _klassName2.default)('field-control', className);

			if (props.hasOwnProperty('valueLink')) {
				others.value = valueLink.value;
			}

			return _react2.default.createElement(
				'div',
				{ className: klassName },
				_react2.default.createElement(_EventListener2.default, { elementName: 'window', onResize: this.handleResize }),
				_react2.default.createElement('textarea', {
					ref: 'shadow',
					tabIndex: '-1',
					rows: rows,
					defaultValue: defaultValue,
					readOnly: true,
					value: value,
					valueLink: valueLink,
					style: _defineProperty({ resize: 'none', overflow: 'hidden', visibility: 'hidden', position: 'absolute', height: 'initial' }, 'overflow', 'hidden')
				}),
				_react2.default.createElement('textarea', _extends({}, others, {
					ref: 'input',
					rows: rows,
					disabled: disabled,
					onChange: this.handleChange,
					className: 'field-control-textarea',
					style: { cursor: disabled ? 'default' : 'initial', height: this.state.height, resize: 'none' }
				}))
			);
		}
	}]);

	return EnhanceTextField;
}(_react2.default.Component);

;

EnhanceTextField.propTypes = {
	defaultValue: _react.PropTypes.any,
	className: _react.PropTypes.string,
	value: _react.PropTypes.string,
	valueLink: _react.PropTypes.object,

	rows: _react.PropTypes.string,
	rowsMax: _react.PropTypes.string,

	disabled: _react.PropTypes.bool,

	onChange: _react.PropTypes.func,
	onHeightChange: _react.PropTypes.func
};

EnhanceTextField.defaultProps = {
	rows: '4'
};

exports.default = EnhanceTextField;
//# sourceMappingURL=EnhanceTextField.js.map