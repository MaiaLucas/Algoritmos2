'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VertexListMap = require('./VertexListMap');

var _VertexListMap2 = _interopRequireDefault(_VertexListMap);

var _EdgeListMap = require('./EdgeListMap');

var _EdgeListMap2 = _interopRequireDefault(_EdgeListMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
    function Graph() {
        var directed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, Graph);

        this._outgoing = new Map(); // quando não for direcionado
        this._directed = directed;
        if (this._directed) {
            this._incoming = new Map(); // quando for direcionado
        }
    }

    _createClass(Graph, [{
        key: 'addVertex',
        value: function addVertex(element) {
            // IGUAL
            var vertex = new _VertexListMap2.default(element);
            this._outgoing.set(vertex, []);

            if (this._directed) {
                this._incoming.set(vertex, []);
            }

            return vertex;
        }
    }, {
        key: 'addEdge',
        value: function addEdge(origin, destination) {
            var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var edge = new _EdgeListMap2.default(origin, destination, element);

            this._outgoing.get(origin).push(edge);

            if (!this._directed) {
                this._outgoing.get(destination).push(edge);
            } else {
                this._incoming.get(destination).push(edge);
            }

            return edge;
        }
    }, {
        key: 'incidentEdge',
        value: function incidentEdge(vertex) {
            return this._outgoing.get(vertex);
        }
    }, {
        key: 'adjacencyList',
        value: function adjacencyList() {

            this._verteces.forEach(function (vertex) {
                return console.log(vertex.adjacencyList());
            });
        }
    }]);

    return Graph;
}();

exports.default = Graph;
//# sourceMappingURL=GraphListMap.js.map