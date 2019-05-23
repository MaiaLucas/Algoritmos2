'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VertexMap = require('./VertexMap');

var _VertexMap2 = _interopRequireDefault(_VertexMap);

var _EdgeMap = require('./EdgeMap');

var _EdgeMap2 = _interopRequireDefault(_EdgeMap);

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
            var vertex = new _VertexMap2.default(element);
            this._outgoing.set(vertex, new Map());

            if (this._directed) {
                this._incoming.set(vertex, new Map());
            }

            return vertex;
        }
    }, {
        key: 'addEdge',
        value: function addEdge(origin, destination) {
            var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var edge = new _EdgeMap2.default(origin, destination, element);

            this._outgoing.get(origin).set(destination, edge);

            if (!this._directed) {
                this._outgoing.get(destination).set(origin, edge);
            } else {
                this._incoming.get(destination).set(origin, edge);
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
//# sourceMappingURL=GraphMap.js.map