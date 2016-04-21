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

var _index = require('../../enhance/anchor/index');

var _index2 = _interopRequireDefault(_index);

var _createChainedFunction = require('../../helper/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
	_inherits(MenuItem, _Component);

	function MenuItem(props) {
		_classCallCheck(this, MenuItem);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(MenuItem, [{
		key: 'handleClick',
		value: function handleClick(event) {
			if (!this.props.href || this.props.disabled) {
				event.preventDefault();
			}

			if (this.props.disabled) {
				return;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var activated = props.activated;
			var disabled = props.disabled;
			var kind = props.kind;
			var className = props.className;
			var onClick = props.onClick;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['activated', 'disabled', 'kind', 'className', 'onClick', 'children']);

			var klassName = (0, _klassName2.default)('menu-item', (_KlassName = {}, _defineProperty(_KlassName, 'activated', activated), _defineProperty(_KlassName, 'disabled', disabled), _defineProperty(_KlassName, 'menu-item--' + kind, kind), _KlassName), className);

			if (kind === 'header') {
				return _react2.default.createElement(
					'li',
					{
						role: 'separator',
						className: klassName
					},
					children
				);
			} else {
				return _react2.default.createElement(
					'li',
					_extends({}, others, {
						className: klassName,
						role: 'presentation'
					}),
					_react2.default.createElement(_index2.default, _extends({}, props, {
						role: 'menuitem',
						tabIndex: '-1',
						onClick: (0, _createChainedFunction2.default)(onClick, this.handleClick)
					}))
				);
			}
		}
	}]);

	return MenuItem;
}(_react.Component);

;

MenuItem.propTypes = {
	activated: _react.PropTypes.bool,
	disabled: _react.PropTypes.bool,

	kind: _react.PropTypes.oneOf(['header']),

	href: _react.PropTypes.string,
	title: _react.PropTypes.string,
	className: _react.PropTypes.string,
	children: _react.PropTypes.node,
	id: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),

	onClick: _react.PropTypes.func,
	onKeyDown: _react.PropTypes.func,
	onSelect: _react.PropTypes.func
};

MenuItem.defaultProps = {
	disabled: false
};

exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map