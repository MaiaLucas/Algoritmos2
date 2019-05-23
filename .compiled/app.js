'use strict';

var _GraphMap = require('./components/graph.map/GraphMap');

var _GraphMap2 = _interopRequireDefault(_GraphMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Graph from './components/graph.list.map/GraphListMap';

var graph = new _GraphMap2.default();

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

var edges = graph.incidentEdge(w);

console.log(edges);
//# sourceMappingURL=app.js.map