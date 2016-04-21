'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _props = require('../../constant/props');

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _TabBarItem = require('./TabBarItem');

var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _TabPaneItem = require('./TabPaneItem');

var _TabPaneItem2 = _interopRequireDefault(_TabPaneItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
	_inherits(Tab, _React$Component);

	function Tab(props) {
		_classCallCheck(this, Tab);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

		_this.state = {
			defaultSelected: _this.getDefaultSelected(props),
			focused: props.focused
		};

		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.handlePrevClick = _this.handlePrevClick.bind(_this);
		_this.handleNextClick = _this.handleNextClick.bind(_this);
		return _this;
	}

	_createClass(Tab, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				forceRenderPaneItem: this.props.forceRenderPaneItem
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			this.setState(this.getDefaultSelected(newProps));
		}
	}, {
		key: 'isBarItemNode',
		value: function isBarItemNode(node) {
			return node.nodeName === 'LI' && node.getAttribute('role') === 'baritem' && node.parentElement.parentElement === (0, _reactDom.findDOMNode)(this);
		}
	}, {
		key: 'isBarItemDisabled',
		value: function isBarItemDisabled(node) {
			return node.getAttribute('aria-disabled') === 'true';
		}
	}, {
		key: 'isControlItemNode',
		value: function isControlItemNode(node) {
			return node.getAttribute('role') === 'tabcontrol';
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {
			var node = event.target;
			do {
				if (this.isBarItemNode(node)) {
					if (this.isBarItemDisabled(node)) {
						return;
					}
					var index = [].slice.call(node.parentNode.children).indexOf(node);
					this.setSelected(index);
					return;
				}
			} while ((node = node.parentNode) !== null);
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.isBarItemNode(event.target)) {
				var index = this.state.defaultSelected;
				var preventDefault = false;
				if (event.keyCode === 37 || event.keyCode === 38) {
					index = this.getPrevBarItem(index);
					preventDefault = true;
				} else if (event.keyCode === 39 || event.keyCode === 40) {
					index = this.getNextBarItem(index);
					preventDefault = true;
				}
				if (preventDefault) {
					event.preventDefault();
				}

				this.setSelected(index, true);
			}
		}
	}, {
		key: 'handlePrevClick',
		value: function handlePrevClick(event) {
			if (this.isControlItemNode(event.target)) {
				var index = this.getPrevBarItem(this.state.defaultSelected);
				event.preventDefault();
				this.setSelected(index);
			}
		}
	}, {
		key: 'handleNextClick',
		value: function handleNextClick(event) {
			if (this.isControlItemNode(event.target)) {
				var index = this.getNextBarItem(this.state.defaultSelected);
				event.preventDefault();
				this.setSelected(index);
			}
		}
	}, {
		key: 'setSelected',
		value: function setSelected(index, focused) {
			if (index === this.state.defaultSelected) return;
			if (index < 0 || index >= this.getBarItemsCount()) return;
			var last = this.state.defaultSelected;
			this.setState({ defaultSelected: index, focused: focused === true });
			if (typeof this.props.onSelect === 'function') {
				this.props.onSelect(index, last);
			}
		}
	}, {
		key: 'getDefaultSelected',
		value: function getDefaultSelected(props) {
			var defaultSelected = props.defaultSelected;
			if (defaultSelected === -1) {
				if (this.state && this.state.defaultSelected) {
					defaultSelected = this.state.defaultSelected;
				} else {
					defaultSelected = 0;
				}
			}
			return defaultSelected;
		}
	}, {
		key: 'getNextBarItem',
		value: function getNextBarItem(index) {
			var count = this.getBarItemsCount();
			for (var i = index + 1; i < count; i++) {
				var baritem = this.getBarItem(i);
				if (!this.isBarItemDisabled((0, _reactDom.findDOMNode)(baritem))) {
					return i;
				}
			}

			for (var _i = 0; _i < index; _i++) {
				var _baritem = this.getBarItem(_i);
				if (!this.isBarItemDisabled((0, _reactDom.findDOMNode)(_baritem))) {
					return _i;
				}
			}

			return index;
		}
	}, {
		key: 'getPrevBarItem',
		value: function getPrevBarItem(index) {
			var i = index;
			while (i--) {
				var baritem = this.getBarItem(i);
				if (!this.isBarItemDisabled((0, _reactDom.findDOMNode)(baritem))) {
					return i;
				}
			}

			i = this.getBarItemsCount();
			while (i-- > index) {
				var _baritem2 = this.getBarItem(i);
				if (!this.isBarItemDisabled((0, _reactDom.findDOMNode)(_baritem2))) {
					return i;
				}
			}

			return index;
		}
	}, {
		key: 'getBarItemsCount',
		value: function getBarItemsCount() {
			return this.props.children && this.props.children[0] ? _react2.default.Children.count(this.props.children[0].props.children) : 0;
		}
	}, {
		key: 'getPaneItemsCount',
		value: function getPaneItemsCount() {
			return this.props.children && this.props.children[1] ? _react2.default.Children.count(this.props.children[0].props.children) : 0;
		}
	}, {
		key: 'getTabBar',
		value: function getTabBar() {
			return this.refs.tabbar;
		}
	}, {
		key: 'getBarItem',
		value: function getBarItem(index) {
			return this.refs['tab-bar-item--' + index];
		}
	}, {
		key: 'getTabPane',
		value: function getTabPane() {
			return this.refs.tabpane;
		}
	}, {
		key: 'getPaneItem',
		value: function getPaneItem(index) {
			return this.refs['tab-pane-item--' + index];
		}
	}, {
		key: 'renderControl',
		value: function renderControl() {
			return _react2.default.createElement(
				'div',
				{ className: 'tab-control' },
				_react2.default.createElement(
					_Button2.default,
					{ size: 'tiny', kind: 'hollow', onClick: this.handlePrevClick, role: 'tabcontrol' },
					_react2.default.createElement(_Icon2.default, { name: 'chevronLeft' })
				),
				_react2.default.createElement(
					_Button2.default,
					{ size: 'tiny', kind: 'hollow', onClick: this.handleNextClick, role: 'tabcontrol' },
					_react2.default.createElement(_Icon2.default, { name: 'chevronRight' })
				)
			);
		}
	}, {
		key: 'renderChildren',
		value: function renderChildren() {
			var index = 0;
			var count = 0;
			var children = this.props.children;
			var state = this.state;
			var barIds = this.barIds = this.barIds || [];
			var paneIds = this.paneIds = this.paneIds || [];
			var diff = this.barIds.length - this.paneIds.length;

			while (diff++ < 0) {
				barIds.push(uuid());
				paneIds.push(uuid());
			}

			return _react2.default.Children.map(children, function (child) {
				if (child === null) {
					return null;
				}

				var result = null;

				if (count++ === 0) {
					result = (0, _react.cloneElement)(child, {
						ref: 'tabbar',
						children: _react2.default.Children.map(child.props.children, function (baritem) {
							if (baritem === null) {
								return null;
							}
							var ref = 'tab-bar-item--' + index;
							var id = barIds[index];
							var paneId = paneIds[index];
							var selected = state.defaultSelected === index;
							var focused = selected && state.focused;

							index++;

							return (0, _react.cloneElement)(baritem, {
								ref: ref,
								id: id,
								paneId: paneId,
								selected: selected,
								focused: focused
							});
						})
					});
					index = 0;
				} else {
					result = (0, _react.cloneElement)(child, {
						ref: 'tabpane',
						children: _react2.default.Children.map(child.props.children, function (paneitem) {
							if (paneitem === null) {
								return null;
							}
							var ref = 'tab-pane-item--' + index;
							var id = paneIds[index];
							var barId = barIds[index];
							var selected = state.defaultSelected === index;
							index++;
							return (0, _react.cloneElement)(paneitem, {
								ref: ref,
								id: id,
								barId: barId,
								selected: selected
							});
						})
					});
				}

				return result;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _KlassName,
			    _this2 = this;

			var props = this.props;

			var advanced = props.advanced;
			var skin = props.skin;
			var className = props.className;

			var others = _objectWithoutProperties(props, ['advanced', 'skin', 'className']);

			var klassName = (0, _klassName2.default)('tab', (_KlassName = {}, _defineProperty(_KlassName, 'advanced', advanced), _defineProperty(_KlassName, 'tab--' + skin, skin), _KlassName), className);

			if (this.state.focused) {
				setTimeout(function () {
					_this2.setState.focused = false;
				}, 0);
			}

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					className: klassName,
					onClick: this.handleClick,
					onKeyDown: this.handleKeyDown
				}),
				advanced ? this.renderControl() : null,
				this.renderChildren()
			);
		}
	}]);

	return Tab;
}(_react2.default.Component);

;

var noop = function noop() {};

var count = 0;
function uuid() {
	return 'tab-' + count++;
};

function affirmChildrenPropTypes(props, propName) {
	var error = void 0;
	var barsCount = 0;
	var panesCount = 0;
	var children = props[propName];

	_react2.default.Children.forEach(children, function (child) {
		if (child === null) {
			return;
		}

		if (child.type === _TabBar2.default) {
			_react2.default.Children.forEach(child.props.children, function (c) {
				if (c === null) {
					return;
				}
				if (c.type === _TabBarItem2.default) {
					barsCount++;
				} else {
					error = new Error('Expected `TabBarItem` not found `' + (c.type.displayName || c.type) + '`');
				}
			});
		} else if (child.type === _TabPane2.default) {
			_react2.default.Children.forEach(child.props.children, function (c) {
				if (c === null) {
					return;
				}
				if (c.type === _TabPaneItem2.default) {
					panesCount++;
				} else {
					error = new Error('Expected `TabPaneItem` not found `' + (c.type.displayName || c.type) + '`');
				}
			});
		} else {
			error = new Error('Expected `TabBar` or `TabPane` not found `' + (child.type.displayName || child.type) + '`');
		}
	});

	if (barsCount !== panesCount) {
		error = new Error('There should be an equal number of `TabBarItems` and `TabPaneItems`. ' + 'Received ' + barsCount + ' `TabBarItems` and ' + panesCount + ' `TabPaneItems`.');
	}

	return error;
};

Tab.propTypes = {
	advanced: _react.PropTypes.bool,
	focused: _react.PropTypes.bool,
	forceRenderPaneItem: _react.PropTypes.bool,
	skin: _react.PropTypes.oneOf(_props.SKINS),
	defaultSelected: _react.PropTypes.number,
	className: _react.PropTypes.string,
	children: affirmChildrenPropTypes,

	onSelect: _react.PropTypes.func
};

Tab.childContextTypes = {
	forceRenderPaneItem: _react.PropTypes.bool
};

Tab.defaultProps = {
	advanced: false,
	focused: false,
	forceRenderPaneItem: false,
	defaultSelected: -1,
	onSelect: noop
};

exports.default = Tab;
//# sourceMappingURL=Tab.js.map