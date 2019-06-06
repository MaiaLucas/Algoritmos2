'use strict';

var _GraphListMap = require('./components/graph.list.map/GraphListMap');

var _GraphListMap2 = _interopRequireDefault(_GraphListMap);

var _graphOpration = require('./util/graphOpration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Graph from './components/graph.map/GraphMap';
var graph = new _GraphListMap2.default();

// Verteces
var v = graph.addVertex('v');
var u = graph.addVertex('u');
var w = graph.addVertex('w');
var z = graph.addVertex('z');

//Edges
var e = graph.addEdge(v, u, "e");
var g = graph.addEdge(u, w, "g");
var f = graph.addEdge(v, w, "f");
var i = graph.addEdge(w, z, "i");

//Graph 2
//Verteces
var x = graph.addVertex("x");
var y = graph.addVertex("y");
var t = graph.addVertex("t");

//Edges
var a = graph.addEdge(x, y, "a");
var b = graph.addEdge(y, t, "b");
var c = graph.addEdge(t, x, "c");

// let vertices = graph.vertices()

// for( let vertex of vertices ) {
//     console.log(vertex.element);
// }

console.log((0, _graphOpration.DFS_complete)(graph));
//# sourceMappingURL=app.js.map