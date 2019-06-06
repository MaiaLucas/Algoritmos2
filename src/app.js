// import Graph from './components/graph.map/GraphMap';
import Graph from './components/graph.list.map/GraphListMap';
import { DFS, constructPath, BFS, DFS_complete } from './util/graphOpration';

let graph = new Graph()

// Sub-Graph 1
// Verteces
let v = graph.addVertex('v')
let u = graph.addVertex('u')
let w = graph.addVertex('w')
let z = graph.addVertex('z')

//Edges
let e = graph.addEdge(v, u, "e")
let g = graph.addEdge(u, w, "g")
let f = graph.addEdge(v, w, "f")
let i = graph.addEdge(w, z, "i")

// Sub-Graph 2
//Verteces
let x = graph.addVertex("x")
let y = graph.addVertex("y")
let t = graph.addVertex("t")

//Edges
let a = graph.addEdge(x, y, "a")
let b = graph.addEdge(y, t, "b")
let c = graph.addEdge(t, x, "c")

// let vertices = graph.vertices()

// for( let vertex of vertices ) {
//     console.log(vertex.element);
// }

let forest = DFS_complete(graph)
console.log(forest)

let path = constructPath(v, x, forest) // Erro : edges = edge.opposite(vertex) caminho para arvores não conectadas 

console.log(path)