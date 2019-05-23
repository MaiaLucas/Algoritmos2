'use strict';

var _GraphListMap = require('./components/graph.list.map/GraphListMap');

var _GraphListMap2 = _interopRequireDefault(_GraphListMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

console.log(graph);

var edges = graph.incidentEdge(w);

console.log(edges);
//# sourceMappingURL=app.js.map