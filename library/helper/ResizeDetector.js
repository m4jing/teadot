'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop(event) {
  return event;
};

var parentStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  overflow: 'scroll',
  zIndex: -1,
  visibility: 'hidden'
};

var shrinkChildStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '200%',
  height: '200%'
};

var expandChildStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

var ResizeDetector = function (_React$Component) {
  _inherits(ResizeDetector, _React$Component);

  function ResizeDetector(props) {
    _classCallCheck(this, ResizeDetector);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResizeDetector).call(this, props));

    _this.state = {
      expandChildHeight: 0,
      expandChildWidth: 0,
      expandScrollLeft: 0,
      expandScrollTop: 0,
      shrinkScrollTop: 0,
      shrinkScrollLeft: 0,
      lastWidth: 0,
      lastHeight: 0
    };
    _this.reset = _this.reset.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(ResizeDetector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.expand.scrollLeft = this.expand.scrollWidth;
      this.expand.scrollTop = this.expand.scrollHeight;

      this.shrink.scrollLeft = this.shrink.scrollWidth;
      this.shrink.scrollTop = this.shrink.scrollHeight;
    }
  }, {
    key: 'reset',
    value: function reset() {
      var parent = this.container.parentElement;

      var position = 'static';
      if (parent.currentStyle) {
        position = parent.currentStyle.position;
      } else if (window.getComputedStyle) {
        position = window.getComputedStyle(parent).position;
      }
      if (position === 'static') {
        parent.style.position = 'relative';
      }

      this.setState({
        expandChildHeight: this.expand.offsetHeight + 10,
        expandChildWidth: this.expand.offsetWidth + 10,
        lastWidth: this.props.handleWidth && this.container.parentElement.offsetWidth,
        lastHeight: this.props.handleHeight && this.container.parentElement.offsetHeight
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var state = this.state;
      var props = this.props;


      if (props.handleWidth && this.container.parentElement.offsetWidth !== state.lastWidth || props.handleHeight && this.container.parentElement.offsetHeight !== state.lastHeight) {
        this.props.onResize();
      }

      this.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.state;

      var expandStyle = Object.assign({}, expandChildStyle, {
        width: state.expandChildWidth,
        height: state.expandChildHeight
      });

      return _react2.default.createElement(
        'div',
        { style: parentStyle, ref: function ref(event) {
            _this2.container = event;
          }
        },
        _react2.default.createElement(
          'div',
          { style: parentStyle, onScroll: this.handleScroll, ref: function ref(event) {
              _this2.expand = event;
            }
          },
          _react2.default.createElement('div', { style: expandStyle })
        ),
        _react2.default.createElement(
          'div',
          { style: parentStyle, onScroll: this.handleScroll, ref: function ref(event) {
              _this2.shrink = event;
            }
          },
          _react2.default.createElement('div', { style: shrinkChildStyle })
        )
      );
    }
  }]);

  return ResizeDetector;
}(_react2.default.Component);

;

ResizeDetector.propTypes = {
  handleWidth: _react.PropTypes.bool,
  handleHeight: _react.PropTypes.bool,

  onResize: _react.PropTypes.func
};

ResizeDetector.defaultProps = {
  handleWidth: false,
  handleHeight: false,
  onResize: noop
};

exports.default = ResizeDetector;
//# sourceMappingURL=ResizeDetector.js.map