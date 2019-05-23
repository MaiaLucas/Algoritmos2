import Graph from './components/graph.list/GraphList'
import Vertex from './components/graph.list/VertexList'
import Edge from './components/graph.list/EdgeList'

// Vextexes
let v = new Vertex('v')
let u = new Vertex('u')
let w = new Vertex('w')
let z = new Vertex('z')

//Edges
let e = new Edge(v, u)
let g = new Edge(u, w)
let f = new Edge(v, w)
let i = new Edge(w, z)

//LISTA DE ADJACENCIAS
//Mapa
let outcoming = new Map()
outcoming.set(u, [])
outcoming.set(v, [])
outcoming.set(w, [])
outcoming.set(z, [])

outcoming.get(u).push(e, g)
outcoming.get(v).push(e, f)
outcoming.get(w).push(f, g, i)
outcoming.get(z).push(i)

// console.log(outcoming.get(u))

//Dicionario
let outcoming2 = {}

outcoming2[u] = []
outcoming2[v] = []
outcoming2[w] = []
outcoming2[z] = []

outcoming2[u].push(e, g)
outcoming2[v].push(e, f)
outcoming2[w].push(f, g, i)
outcoming2[z].push(i)

// console.log(outcoming2)

//MAPA DE ADJACENCIAS
//Mapa
let outcoming3 = new Map()

outcoming3.set(u, new Map())
outcoming3.set(v, new Map())
outcoming3.set(w, new Map())
outcoming3.set(z, new Map())

outcoming3.get(u).set(v, e)
outcoming3.get(u).set(w, g)

outcoming3.get(v).set(u, e)
outcoming3.get(v).set(w, f)

outcoming3.get(w).set(u, g)
outcoming3.get(w).set(v, f)
outcoming3.get(w).set(z, i)

outcoming3.get(z).set(w, i)

// console.log(outcoming3)

//Dicionario
let outcoming4 = {}

outcoming4[u] = {}
outcoming4[v] = {}
outcoming4[w] = {}
outcoming4[z] = {}

outcoming4[u][v] = e
outcoming4[u][w] = g

outcoming4[v][u] = e
outcoming4[v][w] = f

outcoming4[w][v] = f
outcoming4[w][u] = g
outcoming4[w][z] = i

outcoming4[z][w] = i

console.log(outcoming4)