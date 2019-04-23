import Vertex from './Vertex'
import Edge from './Edge'

export default class Graph {
    constructor(){
        this.vertexes = []
        this.edges = []
    }

    addVertex(key) { // IGUAL
        let vertex = new Vertex(key)
        this.vertexes.push(vertex)

        return vertex
    }

    addEdge(origin, destiny) { // MUDA
        let edge = new Edge(origin, destiny)
        this.edges.push(edge)
        
        return edge
    }

    //ADJANCENCYLIST() -- IMPRIMIR LISTA DE ADJACÊNCIAS
}
