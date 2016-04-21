'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardBack = exports.CardFront = exports.Card = undefined;

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBack = require('./CardBack');

var _CardBack2 = _interopRequireDefault(_CardBack);

var _CardFront = require('./CardFront');

var _CardFront2 = _interopRequireDefault(_CardFront);

var _CardFrontHead = require('./CardFrontHead');

var _CardFrontHead2 = _interopRequireDefault(_CardFrontHead);

var _CardFrontBody = require('./CardFrontBody');

var _CardFrontBody2 = _interopRequireDefault(_CardFrontBody);

var _CardFrontFoot = require('./CardFrontFoot');

var _CardFrontFoot2 = _interopRequireDefault(_CardFrontFoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CardFront2.default.Head = _CardFrontHead2.default;
_CardFront2.default.Body = _CardFrontBody2.default;
_CardFront2.default.Foot = _CardFrontFoot2.default;

exports.Card = _Card2.default;
exports.CardFront = _CardFront2.default;
exports.CardBack = _CardBack2.default;
//# sourceMappingURL=index.js.map