'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VertexList = require('./VertexList');

var _VertexList2 = _interopRequireDefault(_VertexList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function () {
    function Edge(origin, destiny) {
        var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Edge);

        this.origin = origin;
        this.destiny = destiny;
        this.weight = weight;
    }

    _createClass(Edge, [{
        key: 'element',
        value: function element() {
            return this.weight;
        }
    }, {
        key: 'endPoints',
        value: function endPoints() {
            return [this.origin, this.destiny];
        }
    }, {
        key: 'oppsite',
        value: function oppsite(v) {
            if (v == this.origin) return this.destiny;else return this.origin;
        }
    }]);

    return Edge;
}();

exports.default = Edge;
//# sourceMappingURL=EdgeList.js.map