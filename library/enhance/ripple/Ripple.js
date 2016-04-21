'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

var _prefixer = require('../../helper/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
	centered: false,
	className: '',
	spread: 2
};

var Ripple = function Ripple() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	var _defaultProps$options = _extends({}, defaultProps, options);

	var defaultCentered = _defaultProps$options.centered;
	var defaultClassName = _defaultProps$options.className;
	var defaultSpread = _defaultProps$options.spread;

	var props = _objectWithoutProperties(_defaultProps$options, ['centered', 'className', 'spread']);

	return function (ComposedComponent) {
		var _class, _temp;

		return _temp = _class = function (_React$Component) {
			_inherits(RippledComponent, _React$Component);

			function RippledComponent(props) {
				_classCallCheck(this, RippledComponent);

				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RippledComponent).call(this, props));

				_this.state = {
					activated: false,
					restarting: false,
					left: null,
					top: null,
					width: null
				};
				_this.handleEnd = _this.handleEnd.bind(_this);
				_this.start = _this.start.bind(_this);
				_this.handleMouseDown = _this.handleMouseDown.bind(_this);
				return _this;
			}

			_createClass(RippledComponent, [{
				key: 'handleEnd',
				value: function handleEnd() {
					document.removeEventListener(this.touch ? 'touchend' : 'mouseup', this.handleEnd);
					this.setState({ activated: false });
				}
			}, {
				key: 'start',
				value: function start(_ref) {
					var _this2 = this;

					var pageX = _ref.pageX;
					var pageY = _ref.pageY;
					var touch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

					if (!this._isTouchRippleReceivingMouseEvent(touch)) {
						this.touch = touch;
						document.addEventListener(this.touch ? 'touchend' : 'mouseup', this.handleEnd);

						var _getDescriptor2 = this._getDescriptor(pageX, pageY);

						var top = _getDescriptor2.top;
						var left = _getDescriptor2.left;
						var width = _getDescriptor2.width;

						this.setState({ activated: false, restarting: true, top: top, left: left, width: width }, function () {
							_this2.refs.ripple.offsetWidth;
							_this2.setState({ activated: true, restarting: false });
						});
					}
				}
			}, {
				key: '_isTouchRippleReceivingMouseEvent',
				value: function _isTouchRippleReceivingMouseEvent(touch) {
					return this.touch && !touch;
				}
			}, {
				key: '_getDescriptor',
				value: function _getDescriptor(pageX, pageY) {
					var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect();

					var left = _ReactDOM$findDOMNode.left;
					var top = _ReactDOM$findDOMNode.top;
					var height = _ReactDOM$findDOMNode.height;
					var width = _ReactDOM$findDOMNode.width;
					var _props = this.props;
					var centered = _props.rippleCentered;
					var spread = _props.rippleSpread;

					return {
						left: centered ? 0 : pageX - left - width / 2 - window.scrollX,
						top: centered ? 0 : pageY - top - height / 2 - window.scrollY,
						width: width * spread
					};
				}
			}, {
				key: 'handleMouseDown',
				value: function handleMouseDown(event) {
					if (!this.props.disabled) this.start(event);
					if (this.props.onMouseDown) this.props.onMouseDown(event);
				}
			}, {
				key: 'render',
				value: function render() {
					if (!this.props.ripple) {
						return _react2.default.createElement(ComposedComponent, this.props);
					} else {
						var _KlassName;

						var _props2 = this.props;
						var children = _props2.children;
						var className = _props2.rippleClassName;

						var other = _objectWithoutProperties(_props2, ['children', 'rippleClassName']);

						var _state = this.state;
						var left = _state.left;
						var top = _state.top;
						var width = _state.width;

						var scale = this.state.restarting ? 0 : 1;

						var klassName = (0, _klassName2.default)('ripple-effect', (_KlassName = {}, _defineProperty(_KlassName, 'activated', this.state.activated), _defineProperty(_KlassName, 'restarting', this.state.restarting), _KlassName), className);

						var compStyle = (0, _prefixer2.default)({
							transform: 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')'
						}, { width: width, height: width });

						return _react2.default.createElement(
							ComposedComponent,
							_extends({}, other, { onMouseDown: this.handleMouseDown }),
							children ? children : null,
							_react2.default.createElement(
								'span',
								_extends({ 'data-teadot': 'ripple', className: 'ripple' }, props),
								_react2.default.createElement('span', { ref: 'ripple', role: 'ripple', className: klassName, style: compStyle })
							)
						);
					}
				}
			}]);

			return RippledComponent;
		}(_react2.default.Component), _class.propTypes = {
			children: _react.PropTypes.any,
			disabled: _react.PropTypes.bool,
			ripple: _react.PropTypes.bool,
			rippleCentered: _react.PropTypes.bool,
			rippleClassName: _react.PropTypes.string,
			rippleSpread: _react.PropTypes.number,
			onMouseDown: _react.PropTypes.func
		}, _class.defaultProps = {
			disabled: false,
			ripple: true,
			rippleCentered: defaultCentered,
			rippleClassName: defaultClassName,
			rippleSpread: defaultSpread
		}, _temp;
	};
};

exports.default = Ripple;
//# sourceMappingURL=Ripple.js.map