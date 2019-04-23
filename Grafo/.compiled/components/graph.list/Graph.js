'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vertex = require('./Vertex');

var _Vertex2 = _interopRequireDefault(_Vertex);

var _Edge = require('./Edge');

var _Edge2 = _interopRequireDefault(_Edge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
    function Graph() {
        _classCallCheck(this, Graph);

        this.vertexes = [];
        this.edges = [];
    }

    _createClass(Graph, [{
        key: 'addVertex',
        value: function addVertex(key) {
            // IGUAL
            var vertex = new _Vertex2.default(key);
            this.vertexes.push(vertex);

            return vertex;
        }
    }, {
        key: 'addEdge',
        value: function addEdge(origin, destiny) {
            // MUDA
            var edge = new _Edge2.default(origin, destiny);
            this.edges.push(edge);

            return edge;
        }

        //ADJANCENCYLIST() -- IMPRIMIR LISTA DE ADJACÊNCIAS

    }]);

    return Graph;
}();

exports.default = Graph;
//# sourceMappingURL=Graph.js.map