'use strict';

var _GraphList = require('./components/graph.list/GraphList');

var _GraphList2 = _interopRequireDefault(_GraphList);

var _VertexList = require('./components/graph.list/VertexList');

var _VertexList2 = _interopRequireDefault(_VertexList);

var _EdgeList = require('./components/graph.list/EdgeList');

var _EdgeList2 = _interopRequireDefault(_EdgeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vextexes
var v = new _VertexList2.default('v');
var u = new _VertexList2.default('u');
var w = new _VertexList2.default('w');
var z = new _VertexList2.default('z');

//Edges
var e = new _EdgeList2.default(v, u);
var g = new _EdgeList2.default(u, w);
var f = new _EdgeList2.default(v, w);
var i = new _EdgeList2.default(w, z);

var outcoming = new Map();
outcoming.set(u, []);
outcoming.set(v, []);
outcoming.set(w, []);
outcoming.set(z, []);

outcoming.get(u).push(e, g);
outcoming.get(v).push(e, f);
outcoming.get(w).push(f, g, i);
outcoming.get(z).push(i);

console.log(outcoming.get(u));
//# sourceMappingURL=app.js.map