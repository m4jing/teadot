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

var _index = require('../../enhance/overlay/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../enhance/portal/index');

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
	_inherits(Modal, _React$Component);

	function Modal(props) {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
	}

	_createClass(Modal, [{
		key: 'renderModalHead',
		value: function renderModalHead() {
			return _react2.default.createElement(
				'div',
				{ className: 'modal-head' },
				_react2.default.createElement(
					_Button2.default,
					{ type: 'button', kind: 'hollow', shape: 'circle', skin: 'default', onClick: this.props.onOverlayClick },
					_react2.default.createElement(_Icon2.default, { name: 'close' })
				),
				_react2.default.createElement(
					'h2',
					{ className: 'modal-head-title' },
					this.props.title
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var activated = props.activated;
			var className = props.className;
			var children = props.children;
			var onEscKeyDown = props.onEscKeyDown;
			var onOverlayClick = props.onOverlayClick;
			var onOverlayMouseDown = props.onOverlayMouseDown;
			var onOverlayMouseMove = props.onOverlayMouseMove;
			var onOverlayMouseUp = props.onOverlayMouseUp;

			var others = _objectWithoutProperties(props, ['activated', 'className', 'children', 'onEscKeyDown', 'onOverlayClick', 'onOverlayMouseDown', 'onOverlayMouseMove', 'onOverlayMouseUp']);

			var klassName = (0, _klassName2.default)('modal', _defineProperty({}, 'activated', 'activated' in props && activated !== false), className);

			return _react2.default.createElement(
				_index2.default,
				{
					type: 'modal',
					activated: activated,
					onClick: onOverlayClick,
					onMouseDown: onOverlayMouseDown,
					onMouseUp: onOverlayMouseUp,
					onMouseMove: onOverlayMouseMove,
					onEscKeyDown: onEscKeyDown
				},
				_react2.default.createElement(
					'div',
					_extends({}, others, {
						className: klassName
					}),
					this.renderModalHead(),
					_react2.default.createElement(
						'div',
						{ className: 'modal-body' },
						children
					)
				)
			);
		}
	}]);

	return Modal;
}(_react2.default.Component);

;

Modal.propTypes = {
	activated: _react.PropTypes.bool,

	title: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string,
	children: _react.PropTypes.node,

	onEscKeyDown: _react.PropTypes.func,
	onOverlayClick: _react.PropTypes.func,
	onOverlayMouseDown: _react.PropTypes.func,
	onOverlayMouseMove: _react.PropTypes.func,
	onOverlayMouseUp: _react.PropTypes.func
};

Modal.defaultProps = {
	activated: false,
	title: 'Back'
};

exports.default = (0, _index3.ActivableRenderer)()(Modal);
//# sourceMappingURL=Modal.js.map