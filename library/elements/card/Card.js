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

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CardFront = require('./CardFront');

var _CardFront2 = _interopRequireDefault(_CardFront);

var _CardBack = require('./CardBack');

var _CardBack2 = _interopRequireDefault(_CardBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
	_inherits(Card, _Component);

	function Card(props) {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));

		_this.state = {
			height: props.height,
			flipped: props.flipped
		};

		_this.handleControlClick = _this.handleControlClick.bind(_this);
		_this.handleControlKeyDown = _this.handleControlKeyDown.bind(_this);
		_this.handleFrontHeightChange = _this.handleFrontHeightChange.bind(_this);
		return _this;
	}

	_createClass(Card, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				height: nextProps.height,
				flipped: nextProps.flipped
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
		}
	}, {
		key: 'handleControlClick',
		value: function handleControlClick(event) {
			if (!this.props.duplexed) return;

			var node = event.target;

			do {
				if (this.isControlNode(node)) {
					this.setFlipped();
					return;
				}
			} while ((node = node.parentNode) !== null);
		}
	}, {
		key: 'handleControlKeyDown',
		value: function handleControlKeyDown(event) {
			if (this.isControlNode(event.target)) {
				if (event.keyCode === 13) {
					event.preventDefault();
					this.setFlipped();
				}
			}
		}
	}, {
		key: 'handleFrontHeightChange',
		value: function handleFrontHeightChange(newHeight) {
			this.setState({
				height: newHeight
			});
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
		key: 'isControlNode',
		value: function isControlNode(node) {
			return node.getAttribute('role') === 'control' && node.parentElement.parentElement === (0, _reactDom.findDOMNode)(this);
		}
	}, {
		key: 'renderControl',
		value: function renderControl() {
			return _react2.default.createElement(
				'div',
				{ className: 'card-control' },
				_react2.default.createElement(
					_Button2.default,
					{
						size: 'tiny',
						kind: 'link',
						skin: 'brand',
						role: 'control',
						tabIndex: -1,
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

				var duplexed = _this2.props.duplexed;
				var flipped = _this2.state.flipped;
				var height = _this2.state.height;
				var syncHeight = _this2.handleFrontHeightChange;

				return _react2.default.cloneElement(child, {
					duplexed: duplexed,
					flipped: flipped,
					height: height,
					syncHeight: syncHeight
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var props = this.props;
			var duplexed = props.duplexed;
			var className = props.className;

			var others = _objectWithoutProperties(props, ['duplexed', 'className']);

			var klassName = (0, _klassName2.default)('card', _defineProperty({}, 'duplexed', 'duplexed' in props && duplexed !== false), className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					ref: function ref(e) {
						_this3.card = e;
					},
					className: klassName
				}),
				duplexed ? this.renderControl() : null,
				this.renderChildren()
			);
		}
	}]);

	return Card;
}(_react.Component);

;

var noop = function noop() {};

function syncNodeAttributes(node, props) {
	if (props.duplexed) {
		node.setAttribute('tabindex', 0);
		node.setAttribute('duplexed', 'duplexed');
	} else {
		node.removeAttribute('tabindex');
		node.removeAttribute('duplexed');
	}
};

function affirmChildrenPropTypes(props, propName) {
	var error = void 0;
	var frontsCount = 0;
	var backsCount = 0;
	var children = props[propName];

	_react2.default.Children.forEach(children, function (child) {
		if (child === null) {
			return;
		}

		if (child.type === _CardFront2.default) {
			frontsCount++;
		} else if (child.type === _CardBack2.default) {
			backsCount++;
		} else {
			error = new Error('Expected `CardFront` or `CardBack` not found `' + (child.type.displayName || child.type) + '`');
		}
	});

	if (frontsCount != 1) {
		error = new Error('There should have one `CardFront` component`. ');
	}

	return error;
};

Card.propTypes = {
	duplexed: _react.PropTypes.bool,
	flipped: _react.PropTypes.bool,

	height: _react.PropTypes.string,
	className: _react.PropTypes.string,
	children: affirmChildrenPropTypes,

	onFlip: _react.PropTypes.func
};

Card.defaultProps = {
	duplexed: false,
	flipped: false,
	onFlip: noop
};

exports.default = Card;
//# sourceMappingURL=Card.js.map