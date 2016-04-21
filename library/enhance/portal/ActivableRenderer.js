'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivableRenderer = function ActivableRenderer() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? { delay: 0 } : arguments[0];
	return function (ActivableComponent) {
		var _class, _temp2;

		return _temp2 = _class = function (_Component) {
			_inherits(ActivableRenderer, _Component);

			function ActivableRenderer() {
				var _Object$getPrototypeO;

				var _temp, _this, _ret;

				_classCallCheck(this, ActivableRenderer);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ActivableRenderer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
					activated: _this.props.activated,
					rendered: _this.props.activated
				}, _temp), _possibleConstructorReturn(_this, _ret);
			}

			_createClass(ActivableRenderer, [{
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
					if (nextProps.activated && !this.props.activated) this.renderAndActivate();
					if (!nextProps.activated && this.props.activated) this.deactivateAndUnrender();
				}
			}, {
				key: 'renderAndActivate',
				value: function renderAndActivate() {
					var _this2 = this;

					if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
					this.setState({ rendered: true, activated: false }, function () {
						setTimeout(function () {
							return _this2.setState({ activated: true });
						}, 20);
					});
				}
			}, {
				key: 'deactivateAndUnrender',
				value: function deactivateAndUnrender() {
					var _this3 = this;

					this.setState({ rendered: true, activated: false }, function () {
						_this3.unrenderTimeout = setTimeout(function () {
							_this3.setState({ rendered: false });
							_this3.unrenderTimeout = null;
						}, _this3.props.delay);
					});
				}
			}, {
				key: 'render',
				value: function render() {
					var others = _objectWithoutProperties(this.props, []);

					var _state = this.state;
					var activated = _state.activated;
					var rendered = _state.rendered;

					return rendered ? _react2.default.createElement(ActivableComponent, _extends({}, others, { activated: activated })) : null;
				}
			}]);

			return ActivableRenderer;
		}(_react.Component), _class.propTypes = {
			activated: _react.PropTypes.bool.isRequired,
			children: _react.PropTypes.any,
			delay: _react.PropTypes.number
		}, _class.defaultProps = {
			delay: options.delay
		}, _temp2;
	};
};

exports.default = ActivableRenderer;
//# sourceMappingURL=ActivableRenderer.js.map