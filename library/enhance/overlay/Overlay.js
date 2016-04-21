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

var _index = require('../portal/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
	_inherits(Overlay, _Component);

	function Overlay(props) {
		_classCallCheck(this, Overlay);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props));

		_this.handleEscKey = _this.handleEscKey.bind(_this);
		return _this;
	}

	_createClass(Overlay, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.activated) {
				this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.props.activated && !this.escKeyListener) {
				this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.escKeyListener) {
				document.body.removeEventListener('keydown', this.handleEscKey);
				this.escKeyListener = null;
			}
		}
	}, {
		key: 'handleEscKey',
		value: function handleEscKey(event) {
			if (this.props.activated && this.props.onEscKeyDown && event.which === 27) {
				this.props.onEscKeyDown(event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var type = props.type;
			var activated = props.activated;
			var invisible = props.invisible;
			var className = props.className;
			var children = props.children;
			var onClick = props.onClick;

			var others = _objectWithoutProperties(props, ['type', 'activated', 'invisible', 'className', 'children', 'onClick']);

			var klassName = (0, _klassName2.default)('overlay', (_KlassName = {}, _defineProperty(_KlassName, 'overlay--' + type, type), _defineProperty(_KlassName, 'activated', 'activated' in props && activated !== false), _defineProperty(_KlassName, 'invisible', 'invisible' in props && invisible !== false), _KlassName), className);

			return _react2.default.createElement(
				_index2.default,
				null,
				_react2.default.createElement(
					'div',
					_extends({}, others, {
						className: klassName
					}),
					_react2.default.createElement('div', { className: 'overlay-mask', onClick: onClick }),
					_react2.default.createElement(
						'div',
						{ className: 'overlay-warpper' },
						children
					)
				)
			);
		}
	}]);

	return Overlay;
}(_react.Component);

;

Overlay.propTypes = {
	activated: _react.PropTypes.bool,
	invisible: _react.PropTypes.bool,

	type: _react.PropTypes.oneOf(['modal', 'dialog']),

	className: _react.PropTypes.string,
	children: _react.PropTypes.node,

	onClick: _react.PropTypes.func,
	onEscKeyDown: _react.PropTypes.func
};

Overlay.defaultProps = {
	invisible: false
};

exports.default = Overlay;
//# sourceMappingURL=Overlay.js.map