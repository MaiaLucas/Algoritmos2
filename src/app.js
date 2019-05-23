import Graph from './components/graph.map/GraphMap';
// import Graph from './components/graph.list.map/GraphListMap';

let graph = new Graph()

// Vextexes
let v = graph.addVertex('v')
let u = graph.addVertex('u')
let w = graph.addVertex('w')
let z = graph.addVertex('z')

//Edges
let e = graph.addEdge(v, u, "e")
let g = graph.addEdge(u, w, "g")
let f = graph.addEdge(v, w, "f")
let i = graph.addEdge(w, z, "i")

// console.log(graph)

let edges = graph.incidentEdge(w)

console.log(edges)