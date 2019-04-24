'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VertexList = require('./VertexList');

var _VertexList2 = _interopRequireDefault(_VertexList);

var _EdgeList = require('./EdgeList');

var _EdgeList2 = _interopRequireDefault(_EdgeList);

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
            var vertex = new _VertexList2.default(key);
            this.vertexes.push(vertex);

            return vertex;
        }
    }, {
        key: 'addEdge',
        value: function addEdge(origin, destiny) {
            // MUDA
            var edge = new _EdgeList2.default(origin, destiny);
            this.edges.push(edge);

            return edge;
        }

        //ADJANCENCYLIST() -- IMPRIMIR LISTA DE ADJACÊNCIAS
        // Contém um vértice e as arestas que o ligam
        /*
        Pegar um vértice junto com todas as suas arestas e imprime
        */

    }, {
        key: 'adjancencyList',
        value: function adjancencyList(key) {

            // for(let i = 0; i < this.vertexes.length; i++) {
            //     let list

            // }

            console.log(this.vertexes);
        }
    }]);

    return Graph;
}();

exports.default = Graph;
//# sourceMappingURL=Graph.js.map