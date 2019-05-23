import Vertex from './VertexMap'
import Edge from './EdgeMap'

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
        this._outgoing.set(vertex, new Map())

        if( this._directed ) {
            this._incoming.set(vertex, new Map())
        }

        return vertex
    }

    addEdge(origin, destination, element = null) { 
        let edge = new Edge(origin, destination, element)

        this._outgoing.get(origin).set(destination, edge)
        
        if( !this._directed ) {
            this._outgoing.get(destination).set(origin, edge)
        } else {
            this._incoming.get(destination).set(origin, edge)
        }

        return edge
    }

    incidentEdge(vertex) {
        return this._outgoing.get(vertex)
    }

    adjacencyList() {

        this._verteces.forEach( vertex => console.log(vertex.adjacencyList()) )
    }
}
