'use strict';

var _GraphList = require('./components/graph.list/GraphList');

var _GraphList2 = _interopRequireDefault(_GraphList);

var _VertexList = require('./components/graph.list/VertexList');

var _VertexList2 = _interopRequireDefault(_VertexList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graph = new _GraphList2.default();

var v0 = graph.addVertex("v0");
var v1 = graph.addVertex("v1");
var v2 = graph.addVertex("v2");
var v3 = graph.addVertex("v3");
var v4 = graph.addVertex("v4");
var v5 = graph.addVertex("v5");

var e1 = graph.addEdge(v0, v1);
var e2 = graph.addEdge(v1, v2);
var e3 = graph.addEdge(v2, v3);
var e4 = graph.addEdge(v3, v4);
var e5 = graph.addEdge(v4, v0);
var e6 = graph.addEdge(v0, v5);
var e7 = graph.addEdge(v2, v5);
var e8 = graph.addEdge(v3, v5);
var e9 = graph.addEdge(v4, v5);

console.log();
//# sourceMappingURL=app.js.map