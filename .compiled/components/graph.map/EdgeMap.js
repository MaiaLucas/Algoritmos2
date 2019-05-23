'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VertexMap = require('./VertexMap');

var _VertexMap2 = _interopRequireDefault(_VertexMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function () {
    function Edge(origin, destination) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Edge);

        this._origin = origin;
        this._destination = destination;
        this._element = element;
    }

    _createClass(Edge, [{
        key: 'endPoints',
        value: function endPoints() {
            return [this._origin, this._destination];
        }
    }, {
        key: 'opposite',
        value: function opposite(v) {
            return v === this._destination ? this._origin : this._destination;
        }
    }, {
        key: 'element',
        get: function get() {
            return this._element;
        }
    }]);

    return Edge;
}();

exports.default = Edge;
//# sourceMappingURL=EdgeMap.js.map