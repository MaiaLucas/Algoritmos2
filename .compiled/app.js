'use strict';

var _GraphList = require('./components/graph.list/GraphList');

var _GraphList2 = _interopRequireDefault(_GraphList);

var _VertexList = require('./components/graph.list/VertexList');

var _VertexList2 = _interopRequireDefault(_VertexList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vextexes
var v = new _VertexList2.default('v');
var u = new _VertexList2.default('u');
var w = new _VertexList2.default('w');
var z = new _VertexList2.default('z');

//Edges
var e = new Edge(v, u);
var g = new Edge(u, w);
var f = new Edge(v, w);
var i = new Edge(w, z);

var outcoming = new Map();
//# sourceMappingURL=app.js.map