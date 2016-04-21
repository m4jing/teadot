'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

var _shallowEqual = require('../../helper/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _TextFieldLabel = require('./TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldHint = require('./TextFieldHint');

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _EnhanceTextField = require('./EnhanceTextField');

var _EnhanceTextField2 = _interopRequireDefault(_EnhanceTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isValid(value) {
	return Boolean(value || value === 0);
}

var TextField = function (_React$Component) {
	_inherits(TextField, _React$Component);

	function TextField(props) {
		_classCallCheck(this, TextField);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextField).call(this, props));

		_this.state = {
			isFocused: false,
			isClean: true,
			hasValue: false,
			helpText: undefined
		};
		_this.handleInputBlur = _this.handleInputBlur.bind(_this);
		_this.handleInputChange = _this.handleInputChange.bind(_this);
		_this.handleInputFocus = _this.handleInputFocus.bind(_this);
		_this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
		_this.handleHeightChange = _this.handleHeightChange.bind(_this);
		return _this;
	}

	_createClass(TextField, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props;
			var children = _props.children;
			var name = _props.name;
			var helpText = _props.helpText;
			var hintText = _props.hintText;
			var labelText = _props.labelText;


			var propsLeaf = children ? children.props : this.props;

			this.setState({
				helpText: helpText,
				hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
			});

			var uniqueId = name + '-' + hintText + '-' + labelText + '-' + Math.floor(Math.random() * 0xFFFF);
			this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.helpText !== this.props.helpText) {
				this.setState({
					helpText: nextProps.helpText
				});
			}

			if (nextProps.children && nextProps.children.props) {
				nextProps = nextProps.children.props;
			}

			if (nextProps.hasOwnProperty('value')) {
				var hasValue = isValid(nextProps.value) || this.state.isClean && isValid(nextProps.defaultValue);

				if (hasValue !== this.state.hasValue) {
					this.setState({
						hasValue: hasValue
					});
				}
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
			return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
		}
	}, {
		key: 'blur',
		value: function blur() {
			if (this.input) this.getInputNode().blur();
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (this.input) this.getInputNode().focus();
		}
	}, {
		key: 'select',
		value: function select() {
			if (this.input) this.getInputNode().select();
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.input ? this.getInputNode().value : undefined;
		}
	}, {
		key: 'getInputNode',
		value: function getInputNode() {
			return this.props.children || this.props.longtext ? this.input.getInputNode() : (0, _reactDom.findDOMNode)(this.input);
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			this.setState({ isFocused: false });
			if (this.props.onBlur) this.props.onBlur(event);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			this.setState({ hasValue: isValid(event.target.value), isClean: false });
			if (this.props.onChange) this.props.onChange(event, event.target.value);
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;
			this.setState({ isFocused: true });
			if (this.props.onFocus) this.props.onFocus(event);
		}
	}, {
		key: 'handleInputKeyDown',
		value: function handleInputKeyDown(event) {
			if (event.keycode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(event);
			if (this.props.onKeyDown) this.props.onKeyDown(event);
		}
	}, {
		key: 'handleHeightChange',
		value: function handleHeightChange(event, height) {
			var newHeight = height;
			if (this.props.labelText) {
				newHeight += 30;
			}
			(0, _reactDom.findDOMNode)(this).style.height = newHeight + 'px';
		}
	}, {
		key: '_isControlled',
		value: function _isControlled() {
			return this.props.hasOwnProperty('value');
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName,
			    _this2 = this;

			var props = this.props;
			var id = props.id;
			var type = props.type;
			var rows = props.rows;
			var rowsMax = props.rowsMax;
			var longtext = props.longtext;
			var disabled = props.disabled;
			var fixed = props.fixed;
			var labelText = props.labelText;
			var hintText = props.hintText;
			var validateStatus = props.validateStatus;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['id', 'type', 'rows', 'rowsMax', 'longtext', 'disabled', 'fixed', 'labelText', 'hintText', 'validateStatus', 'className', 'children']);

			var klassName = (0, _klassName2.default)('field', (_KlassName = {}, _defineProperty(_KlassName, 'hidden', 'type' in props && type === 'hidden'), _defineProperty(_KlassName, 'disabled', 'disabled' in props && disabled !== false), _defineProperty(_KlassName, 'visited', this.state.hasValue && this.state.isFocused === false), _defineProperty(_KlassName, 'focused', this.state.isFocused), _defineProperty(_KlassName, 'field--success', validateStatus === 'success'), _defineProperty(_KlassName, 'field--warning', validateStatus === 'warning'), _defineProperty(_KlassName, 'field--error', validateStatus === 'error'), _KlassName), className);

			var inputId = id || this.uniqueId;

			var labelTextElement = labelText && _react2.default.createElement(
				_TextFieldLabel2.default,
				{
					htmlFor: inputId,
					disabled: disabled,
					fixed: fixed
				},
				labelText,
				' ',
				validateStatus === 'validating' ? _react2.default.createElement(
					'span',
					null,
					'...'
				) : null
			);

			var inputProps = {
				id: inputId,
				ref: function ref(elem) {
					return _this2.input = elem;
				},
				disabled: disabled,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				onKeyDown: this.handleInputKeyDown
			};

			var inputElement = void 0;
			if (children) {
				inputElement = _react2.default.cloneElement(this.props.children, _extends({}, inputProps, children.props));
			} else {
				inputElement = longtext ? _react2.default.createElement(_EnhanceTextField2.default, _extends({}, others, inputProps, {
					rows: rows,
					rowsMax: rowsMax,
					onHeightChange: this.handleHeightChange
				})) : _react2.default.createElement(
					'div',
					{ className: 'field-control' },
					_react2.default.createElement('input', _extends({}, others, inputProps, {
						type: type,
						className: 'field-control-text'
					}))
				);
			}

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					'data-teadot': 'field',
					className: klassName
				}),
				labelTextElement,
				hintText ? _react2.default.createElement(_TextFieldHint2.default, {
					text: hintText,
					show: !(this.state.hasValue || labelText && !this.state.isFocused) || !this.state.hasValue && labelText && fixed && !this.state.isFocused
				}) : null,
				inputElement,
				validateStatus && validateStatus !== 'validating' ? _react2.default.createElement(
					'div',
					{ className: 'field-help' },
					this.state.helpText
				) : null
			);
		}
	}]);

	return TextField;
}(_react2.default.Component);

;

TextField.propTypes = {
	id: _react.PropTypes.string,
	name: _react.PropTypes.string,
	type: _react.PropTypes.string,
	value: _react.PropTypes.any,
	className: _react.PropTypes.string,
	children: _react.PropTypes.node,
	defaultValue: _react.PropTypes.any,
	validateStatus: _react.PropTypes.oneOf(['validating', 'success', 'warning', 'error']),

	disabled: _react.PropTypes.bool,
	fixed: _react.PropTypes.bool,
	longtext: _react.PropTypes.bool,

	helpText: _react.PropTypes.node,
	labelText: _react.PropTypes.node,
	hintText: _react.PropTypes.node,

	rows: _react.PropTypes.string,
	rowsMax: _react.PropTypes.string,

	onBlur: _react.PropTypes.func,
	onChange: _react.PropTypes.func,
	onFocus: _react.PropTypes.func,
	onKeyPress: _react.PropTypes.func,
	onKeyDown: _react.PropTypes.func,
	onEnterKeyDown: _react.PropTypes.func
};

TextField.defaultProps = {
	disabled: false,
	fixed: false,
	longtext: false,
	type: 'text',
	rows: '4'
};

exports.default = TextField;
//# sourceMappingURL=TextField.js.map