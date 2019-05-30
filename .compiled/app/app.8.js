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

//LISTA DE ADJACENCIAS
//Mapa
var outcoming = new Map();
outcoming.set(u, []);
outcoming.set(v, []);
outcoming.set(w, []);
outcoming.set(z, []);

outcoming.get(u).push(e, g);
outcoming.get(v).push(e, f);
outcoming.get(w).push(f, g, i);
outcoming.get(z).push(i);

// console.log(outcoming.get(u))

//Dicionario
var outcoming2 = {};

outcoming2[u] = [];
outcoming2[v] = [];
outcoming2[w] = [];
outcoming2[z] = [];

outcoming2[u].push(e, g);
outcoming2[v].push(e, f);
outcoming2[w].push(f, g, i);
outcoming2[z].push(i);

// console.log(outcoming2)

//MAPA DE ADJACENCIAS
//Mapa
var outcoming3 = new Map();

outcoming3.set(u, new Map());
outcoming3.set(v, new Map());
outcoming3.set(w, new Map());
outcoming3.set(z, new Map());

outcoming3.get(u).set(v, e);
outcoming3.get(u).set(w, g);

outcoming3.get(v).set(u, e);
outcoming3.get(v).set(w, f);

outcoming3.get(w).set(u, g);
outcoming3.get(w).set(v, f);
outcoming3.get(w).set(z, i);

outcoming3.get(z).set(w, i);

// console.log(outcoming3)

//Dicionario
var outcoming4 = {};

outcoming4[u] = {};
outcoming4[v] = {};
outcoming4[w] = {};
outcoming4[z] = {};

outcoming4[u][v] = e;
outcoming4[u][w] = g;

outcoming4[v][u] = e;
outcoming4[v][w] = f;

outcoming4[w][v] = f;
outcoming4[w][u] = g;
outcoming4[w][z] = i;

outcoming4[z][w] = i;

console.log(outcoming4);
//# sourceMappingURL=app.8.js.map