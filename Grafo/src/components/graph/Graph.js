import Vertex from './Vertex'
import Edge from './Edge'

export default class Graph {
    constructor(){
        this.vertexes = []
        this.edges = []
    }

    addVertex(key) {
        let vertex = new Vertex(key)
        this.vertexes.push(vertex)

        return vertex
    }

    addEdge(origin, destiny) {
        let edge = new Edge(origin, destiny)
        this.edges.push(edge)
        
        return edge
    }
}
