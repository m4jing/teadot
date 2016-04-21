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

var _DropdownTrigger = require('./DropdownTrigger');

var _DropdownTrigger2 = _interopRequireDefault(_DropdownTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
	_inherits(Dropdown, _Component);

	function Dropdown(props) {
		_classCallCheck(this, Dropdown);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

		_this.state = {
			activated: props.activated
		};

		_this._handleTriggerClick = _this._handleTriggerClick.bind(_this);
		_this._handleWindowClick = _this._handleWindowClick.bind(_this);
		return _this;
	}

	_createClass(Dropdown, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('click', this._handleWindowClick);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('click', this._handleWindowClick);
		}
	}, {
		key: 'handleHide',
		value: function handleHide() {
			this.setState({
				activated: false
			});
			if (this.props.onHide) {
				this.props.onHide();
			}
		}
	}, {
		key: 'handleShow',
		value: function handleShow() {
			this.setState({
				activated: true
			});
			if (this.props.onShow) {
				this.props.onShow();
			}
		}
	}, {
		key: '_handleWindowClick',
		value: function _handleWindowClick(event) {
			var dropdownElement = (0, _reactDom.findDOMNode)(this);
			if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.state.activated) {
				this.handleHide();
			}
		}
	}, {
		key: '_handleTriggerClick',
		value: function _handleTriggerClick(event) {
			event.preventDefault();
			if (this.state.activated) {
				this.handleHide();
			} else {
				this.handleShow();
			}
		}
	}, {
		key: 'renderChildren',
		value: function renderChildren() {
			var _this2 = this;

			return _react2.default.Children.map(this.props.children, function (child) {
				if (child === null) {
					return null;
				}

				if (child.type === _DropdownTrigger2.default) {
					child = _react2.default.cloneElement(child, {
						type: _this2.props.type,
						activated: _this2.state.activated,
						onClick: _this2._handleTriggerClick
					});
				}
				return child;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var className = props.className;
			var type = props.type;

			var others = _objectWithoutProperties(props, ['className', 'type']);

			var klassName = (0, _klassName2.default)('dropdown', (_KlassName = {}, _defineProperty(_KlassName, 'activated', this.state.activated), _defineProperty(_KlassName, 'dropdown--' + type, type), _KlassName), className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, { className: klassName }),
				this.renderChildren()
			);
		}
	}]);

	return Dropdown;
}(_react.Component);

;

Dropdown.propTypes = {
	activated: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	children: _react.PropTypes.any,

	type: _react.PropTypes.oneOf(['menu', 'navbar']),

	onHide: _react.PropTypes.func,
	onShow: _react.PropTypes.func
};

Dropdown.defaultProps = {};

exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map