'use strict';

var _GraphListMap = require('./components/graph.list.map/GraphListMap');

var _GraphListMap2 = _interopRequireDefault(_GraphListMap);

var _graphOpration = require('./util/graphOpration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Graph from './components/graph.map/GraphMap';
var graph = new _GraphListMap2.default();

// Vextexes
var v = graph.addVertex('v');
var u = graph.addVertex('u');
var w = graph.addVertex('w');
var z = graph.addVertex('z');

//Edges
var e = graph.addEdge(v, u, "e");
var g = graph.addEdge(u, w, "g");
var f = graph.addEdge(v, w, "f");
var i = graph.addEdge(w, z, "i");

// console.log(graph)
var discovered = new Map();
discovered.set(v, null);
// DFS(graph, v, discovered)
(0, _graphOpration.BFS)(graph, v, discovered);

// console.log(discovered)

var path = (0, _graphOpration.constructPath)(v, z, discovered);

console.log(discovered);
//# sourceMappingURL=app.js.map