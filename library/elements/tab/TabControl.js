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

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var TabControl = function (_React$Component) {
	_inherits(TabControl, _React$Component);

	function TabControl(props) {
		_classCallCheck(this, TabControl);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TabControl).call(this, props));
	}

	_createClass(TabControl, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			var onNextClick = props.onNextClick;
			var onPrevClick = props.onPrevClick;
			var className = props.className;

			var others = _objectWithoutProperties(props, ['onNextClick', 'onPrevClick', 'className']);

			var klassName = (0, _klassName2.default)('tab-control', className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					className: klassName
				}),
				_react2.default.createElement(
					_Button2.default,
					{ size: 'small', kind: 'link', shape: 'circle', skin: 'error', onClick: onPrevClick, role: 'tabcontrol' },
					_react2.default.createElement(_Icon2.default, { name: 'chevronLeft' })
				),
				_react2.default.createElement(
					_Button2.default,
					{ size: 'small', kind: 'link', shape: 'circle', skin: 'error', onClick: onNextClick, role: 'tabcontrol' },
					_react2.default.createElement(_Icon2.default, { name: 'chevronRight' })
				)
			);
		}
	}]);

	return TabControl;
}(_react2.default.Component);

;

TabControl.propTypes = {
	className: _react.PropTypes.string,
	onPrevClick: _react.PropTypes.func,
	onNextClick: _react.PropTypes.func
};

TabControl.defaultProps = {
	onPrevClick: noop,
	onNextClick: noop
};

exports.default = TabControl;
//# sourceMappingURL=TabControl.js.map