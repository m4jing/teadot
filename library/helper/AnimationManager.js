'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function merge(r, s) {
  this.each(s, function (v, k) {
    r[k] = v;
  });
  return r;
};

function transitionEnd() {
  var transitionEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };
  if (!_ExecutionEnvironment2.default.canUseDOM) {
    return transitionEndEventNames;
  }
  var el = document.createElement('pin');

  for (var name in transitionEndEventNames) {
    if (el.style[name] !== undefined) {
      return transitionEndEventNames[name];
    }
  }
  return false;
}

var ifHasTransitionEnd = transitionEnd();

var prefixes = ['Webkit', 'Moz', 'ms', 'O', ''];

var AnimationManager = function () {
  function AnimationManager() {
    _classCallCheck(this, AnimationManager);

    this.animationHandle = 'css' + (ifHasTransitionEnd ? 3 : 2) + 'Animation';
  }

  _createClass(AnimationManager, [{
    key: 'generate',
    value: function generate(options) {
      merge(this, options);
      return this[this.animationHandle]();
    }
  }, {
    key: 'css2Animation',
    value: function css2Animation() {
      var style = {};
      style[this.horizontalDirection] = this.position[0] + 'px';
      style[this.verticalDirection] = this.position[1] + 'px';

      this.mixAnimation(style);
      return style;
    }
  }, {
    key: 'css3Animation',
    value: function css3Animation() {
      var _this = this;

      var style = {};

      prefixes.map(function (prefix) {
        var x = void 0,
            y = void 0;

        if (_this.horizontalDirection === 'right') {
          x = _this.containerWidth - _this.size.width - _this.position[0];
        } else {
          x = _this.position[0];
        }

        if (_this.verticalDirection === 'bottom') {
          y = _this.containerHeight - _this.size.height - _this.position[1];
        } else {
          y = _this.position[1];
        }

        style[prefix + 'Transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
      });

      this.mixAnimation(style);
      return style;
    }
  }, {
    key: 'mixAnimation',
    value: function mixAnimation(style) {
      var _this2 = this;

      if (!this.closeAnimation) {
        prefixes.map(function (prefix) {
          style[prefix + 'TransitionDuration'] = _this2.transitionDuration + 's';
          style[prefix + 'TransitionTimingFunction'] = _this2.transitionTimingFunction;
        });
      }
    }
  }]);

  return AnimationManager;
}();

exports.default = AnimationManager;
//# sourceMappingURL=AnimationManager.js.map