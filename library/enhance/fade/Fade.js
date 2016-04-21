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

var noop = function noop() {};

var FADE_KINDS = ['in'];

var Fade = function (_React$Component) {
	_inherits(Fade, _React$Component);

	function Fade(props) {
		_classCallCheck(this, Fade);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Fade).call(this, props));

		_this.state = {
			mounted: !props.transitionAppear
		};

		_this.onEnter = _this.onEnter.bind(_this);
		_this.onLeave = _this.onLeave.bind(_this);
		return _this;
	}

	_createClass(Fade, [{
		key: 'onEnter',
		value: function onEnter(callback) {
			var _this2 = this;

			return function () {
				callback();
				if (_this2.props.onEnter) {
					_this2.props.onEnter();
				}
			};
		}
	}, {
		key: 'onLeave',
		value: function onLeave(callback) {
			var _this3 = this;

			return function () {
				callback();
				if (_this3.props.onLeave) {
					_this3.props.onLeave();
				}
			};
		}
	}, {
		key: 'componentWillAppear',
		value: function componentWillAppear(callback) {
			if (!this.props.transitionAppear) {
				this.onEnter(callback)();
			}

			setTimeout(this.onEnter(callback), this.props.transitionAppearTimeout);
		}
	}, {
		key: 'componentDidAppear',
		value: function componentDidAppear() {
			this.setState({
				mounted: true
			});
		}
	}, {
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			if (!this.props.transitionEnter) {
				this.onEnter(callback)();
			}

			setTimeout(this.onEnter(callback), this.props.transitionEnterTimeout);
		}
	}, {
		key: 'componentDidEnter',
		value: function componentDidEnter() {
			this.setState({
				mounted: true
			});
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			this.setState({
				mounted: false
			});

			if (!this.props.transitionLeave) {
				this.onLeave(callback)();
			}

			setTimeout(this.onLeave(callback), this.props.transitionLeaveTimeout);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var kind = _props.kind;
			var className = _props.className;

			var others = _objectWithoutProperties(_props, ['kind', 'className']);

			var klassName = (0, _klassName2.default)('fade', _defineProperty({}, 'fade--' + kind, this.state.mounted), className);

			return _react2.default.createElement('div', _extends({}, others, { className: klassName }));
		}
	}]);

	return Fade;
}(_react2.default.Component);

;

Fade.propTypes = {
	className: _react.PropTypes.string,

	transitionAppearTimeout: _react.PropTypes.number,
	transitionEnterTimeout: _react.PropTypes.number,
	transitionLeaveTimeout: _react.PropTypes.number,
	transitionAppear: _react.PropTypes.bool,
	transitionEnter: _react.PropTypes.bool,
	transitionLeave: _react.PropTypes.bool,

	kind: _react.PropTypes.oneOf(FADE_KINDS),

	onEnter: _react.PropTypes.func,
	onLeave: _react.PropTypes.func
};

Fade.defaultProps = {
	kind: 'in',
	transitionAppearTimeout: 0,
	transitionEnterTimeout: 0,
	transitionLeaveTimeout: 0,
	transitionAppear: true,
	transitionEnter: true,
	transitionLeave: true,
	onEnter: noop,
	onLeave: noop
};

exports.default = Fade;
//# sourceMappingURL=Fade.js.map