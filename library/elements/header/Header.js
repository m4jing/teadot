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

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Warpper = require('../warpper/Warpper');

var _Warpper2 = _interopRequireDefault(_Warpper);

var _HeaderNavbar = require('./HeaderNavbar');

var _HeaderNavbar2 = _interopRequireDefault(_HeaderNavbar);

var _HeaderChatbar = require('./HeaderChatbar');

var _HeaderChatbar2 = _interopRequireDefault(_HeaderChatbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

		_this.state = {
			advanced: props.advanced,
			flipped: props.flipped
		};

		_this.handleControlClick = _this.handleControlClick.bind(_this);
		_this.handleControlKeyDown = _this.handleControlKeyDown.bind(_this);
		return _this;
	}

	_createClass(Header, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				flipped: nextProps.flipped
			});
		}
	}, {
		key: 'handleControlClick',
		value: function handleControlClick(event) {

			var node = event.target;

			do {
				if (this.isHeaderControlNode(node)) {
					this.setFlipped();
					return;
				}
			} while ((node = node.parentNode) !== null);
		}
	}, {
		key: 'handleControlKeyDown',
		value: function handleControlKeyDown(event) {
			if (this.isHeaderControlNode(event.target)) {
				if (event.keyCode === 13) {
					event.preventDefault();
					this.setFlipped();
				}
			}
		}
	}, {
		key: 'isHeaderControlNode',
		value: function isHeaderControlNode(node) {
			return node.getAttribute('role') === 'control';
		}
	}, {
		key: 'setFlipped',
		value: function setFlipped() {
			this.setState({
				flipped: !this.state.flipped
			});

			if (typeof this.props.onFlip === 'function') {
				this.props.onFlip();
			}
		}
	}, {
		key: 'renderControl',
		value: function renderControl() {
			return _react2.default.createElement(
				'div',
				{ className: 'header-control' },
				_react2.default.createElement(
					_Button2.default,
					{
						size: 'medium',
						kind: 'hollow',
						role: 'control',
						tabIndex: 0,
						onClick: this.handleControlClick,
						onKeyDown: this.handleControlKeyDown
					},
					_react2.default.createElement(_Icon2.default, { name: 'repost' })
				)
			);
		}
	}, {
		key: 'renderChildren',
		value: function renderChildren() {
			var _this2 = this;

			return _react2.default.Children.map(this.props.children, function (child) {
				if (child === null) {
					return null;
				}

				var advanced = _this2.props.advanced;
				var flipped = _this2.state.flipped;

				return _react2.default.cloneElement(child, {
					advanced: advanced,
					flipped: flipped
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName2;

			var props = this.props;
			var skin = props.skin;
			var className = props.className;

			var others = _objectWithoutProperties(props, ['skin', 'className']);

			var fatherKlassName = (0, _klassName2.default)('layout-header', _defineProperty({}, 'layout-header--' + skin, skin), className);

			var klassName = (0, _klassName2.default)('header', 'clearfix', (_KlassName2 = {}, _defineProperty(_KlassName2, 'advanced', this.state.advanced), _defineProperty(_KlassName2, 'flipped', this.state.flipped), _KlassName2), className);

			return _react2.default.createElement(
				'div',
				{ className: fatherKlassName },
				_react2.default.createElement(
					_Warpper2.default,
					null,
					_react2.default.createElement(
						'div',
						_extends({}, others, {
							className: klassName
						}),
						this.state.advanced ? this.renderControl() : null,
						this.renderChildren()
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

;

function affirmChildrenPropTypes(props, propName) {
	var error = void 0;
	var navbarsCount = 0;
	var chatbarsCount = 0;
	var children = props[propName];

	_react2.default.Children.forEach(children, function (child) {
		if (child === null) {
			return;
		}

		if (child.type === _HeaderNavbar2.default) {
			navbarsCount++;
		} else if (child.type === _HeaderChatbar2.default) {
			chatbarsCount++;
		} else {
			error = new Error('Expected `HeaderNavbar` or `HeaderChatbar` not found `' + (child.type.displayName || child.type) + '`');
		}
	});

	if (navbarsCount > 1 || chatbarsCount > 1) {
		error = new Error('There should have only one `HeaderNavbar` or `HeaderChatbar`  component`. ');
	}

	return error;
};

Header.propTypes = {
	flipped: _react.PropTypes.bool,
	advanced: _react.PropTypes.bool,
	skin: _react.PropTypes.oneOf(_props.SKINS),
	className: _react.PropTypes.string,
	children: affirmChildrenPropTypes,

	onFlip: _react.PropTypes.func
};

Header.defaultProps = {
	flipped: false,
	advanced: false,
	onFlip: noop
};

exports.default = Header;
//# sourceMappingURL=Header.js.map