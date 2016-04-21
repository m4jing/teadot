'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NeckerFoot = exports.NeckerBody = exports.NeckerHead = exports.Necker = undefined;

var _Necker = require('./Necker');

var _Necker2 = _interopRequireDefault(_Necker);

var _NeckerHead = require('./NeckerHead');

var _NeckerHead2 = _interopRequireDefault(_NeckerHead);

var _NeckerBody = require('./NeckerBody');

var _NeckerBody2 = _interopRequireDefault(_NeckerBody);

var _NeckerFoot = require('./NeckerFoot');

var _NeckerFoot2 = _interopRequireDefault(_NeckerFoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Necker2.default.Head = _NeckerHead2.default;
_Necker2.default.Body = _NeckerBody2.default;
_Necker2.default.Foot = _NeckerFoot2.default;

exports.Necker = _Necker2.default;
exports.NeckerHead = _NeckerHead2.default;
exports.NeckerBody = _NeckerBody2.default;
exports.NeckerFoot = _NeckerFoot2.default;
//# sourceMappingURL=index.js.map