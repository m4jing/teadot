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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardFront = function (_React$Component) {
	_inherits(CardFront, _React$Component);

	function CardFront(props) {
		_classCallCheck(this, CardFront);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardFront).call(this, props));

		_this.state = {
			height: props.height
		};
		_this.handleHeightChange = _this.handleHeightChange.bind(_this);
		_this.handleResize = _this.handleResize.bind(_this);
		return _this;
	}

	_createClass(CardFront, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setPrivateProps();
			this.handleHeightChange();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.height !== nextProps.height) {
				this.setState({
					height: nextProps.height
				});
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			this.handleHeightChange();
		}
	}, {
		key: 'handleHeightChange',
		value: function handleHeightChange() {
			if (typeof window === 'undefined') {
				return;
			}

			var newHeight = parseInt(this.cardfront.clientHeight, 10);

			this.setState({
				height: newHeight
			});

			this.props.syncHeight(newHeight);
		}
	}, {
		key: 'setPrivateProps',
		value: function setPrivateProps() {
			if (typeof window === 'undefined') {
				return;
			}

			this.frontStyle = {
				position: 'relative',
				height: this.props.height || parseInt(this.cardfront.clientHeight, 10)
			};

			if (typeof this.props.height === 'number') {
				this.fixedfrontHeight = true;
				this.frontStyle.height = this.props.height;
			} else {
				this.fixedfrontHeight = false;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props;
			var duplexed = props.duplexed;
			var flipped = props.flipped;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['duplexed', 'flipped', 'className', 'children']);

			var klassName = (0, _klassName2.default)('card-front', 'clearfix', className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					className: klassName,
					tabIndex: -1,
					ref: function ref(element) {
						_this2.cardfront = element;
					},
					style: { opacity: flipped ? 0 : 1, display: 'block' }
				}),
				duplexed ? _react2.default.createElement(_EventListener2.default, { elementName: 'window', onResize: this.handleResize }) : null,
				children
			);
		}
	}]);

	return CardFront;
}(_react2.default.Component);

;

CardFront.propTypes = {
	duplexed: _react.PropTypes.bool,
	flipped: _react.PropTypes.bool,

	height: _react.PropTypes.number,
	className: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),

	syncHeight: _react.PropTypes.func
};

exports.default = CardFront;
//# sourceMappingURL=CardFront.js.map