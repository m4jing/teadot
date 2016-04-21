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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function syncNodeAttributes(node, props) {
	if (props.selected) {
		node.setAttribute('tabindex', 0);
		node.setAttribute('selected', 'selected');
		if (props.focused) {
			node.focus();
		}
	} else {
		node.removeAttribute('tabindex');
		node.removeAttribute('selected');
	}
};

var TabBarItem = function (_React$Component) {
	_inherits(TabBarItem, _React$Component);

	function TabBarItem(props) {
		_classCallCheck(this, TabBarItem);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TabBarItem).call(this, props));
	}

	_createClass(TabBarItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName;

			var props = this.props;
			var id = props.id;
			var paneId = props.paneId;
			var selected = props.selected;
			var disabled = props.disabled;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['id', 'paneId', 'selected', 'disabled', 'className', 'children']);

			var klassName = (0, _klassName2.default)('tab-bar-item', (_KlassName = {}, _defineProperty(_KlassName, 'selected', 'selected' in props && selected !== false), _defineProperty(_KlassName, 'disabled', 'disabled' in props && disabled !== false), _KlassName), className);

			return _react2.default.createElement(
				'li',
				_extends({}, others, {
					className: klassName,
					id: id,
					role: 'baritem',
					'aria-selected': selected ? 'true' : 'false',
					'aria-expanded': selected ? 'true' : 'false',
					'aria-disabled': disabled ? 'true' : 'false',
					'aria-controls': paneId
				}),
				children
			);
		}
	}]);

	return TabBarItem;
}(_react2.default.Component);

;

TabBarItem.propTypes = {
	selected: _react.PropTypes.bool,
	disabled: _react.PropTypes.bool,

	id: _react.PropTypes.string,
	paneId: _react.PropTypes.string,
	className: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
};

TabBarItem.defaultProps = {
	focused: false,
	selected: false,
	id: null,
	paneId: null
};

exports.default = TabBarItem;
//# sourceMappingURL=TabBarItem.js.map