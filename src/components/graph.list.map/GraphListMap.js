import Vertex from './VertexListMap'
import Edge from './EdgeListMap'

export default class Graph {
    constructor(directed = false){
        this._outgoing = new Map() // quando não for direcionado
        this._directed = directed
        if( this._directed ) {
            this._incoming = new Map() // quando for direcionado
        }
    }

    addVertex(element) { // IGUAL
        let vertex = new Vertex(element)
        this._outgoing.set(vertex, [])

        if( this._directed ) {
            this._incoming.set(vertex, [])
        }

        return vertex
    }

    addEdge(origin, destination, element = null) { 
        let edge = new Edge(origin, destination, element)

        this._outgoing.get(origin).push(edge)
        
        if( !this._directed ) {
            this._outgoing.get(destination).push(edge)
        } else {
            this._incoming.get(destination).push(edge)
        }

        return edge
    }

    incidentEdge(vertex) {
        return this._outgoing.get(vertex)
    }

    adjacencyList() {

        this._verteces.forEach( vertex => console.log(vertex.adjacencyList()) )
    }

    isDirected() {
        return this._directed
    }

    vertexCount() {
        //return the number of vertices in the graph
    }

    vertices() {
        //return an iterator of all vertices in the graph
        return this._outgoing.keys()
    }

    edgeCount() {
        //return the number of edges in the graph

        //for undirected graphs, make sure not to double-count edges
    }

    edges() {
        //return an iterator of all edges of the graph
    }
}
