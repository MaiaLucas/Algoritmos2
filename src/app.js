// import Graph from './components/graph.map/GraphMap';
import Graph from './components/graph.list.map/GraphListMap';
import { DFS, constructPath } from './util/graphOpration';

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
let discovered = new Map()
discovered.set(v, null)
DFS(graph, v, discovered )

// console.log(discovered)

let path = constructPath(v, z, discovered)

console.log(path)