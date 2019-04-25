import Vertex from './VertexList'
import Edge from './EdgeList'

export default class Graph {
    constructor(){
        this.vertexes = []
    }

    addVertex(key) { // IGUAL
        let vertex = new Vertex(key)
        this.vertexes.push(vertex)

        return vertex
    }

    addEdge(origin, destination) { // MUDA
        let edge = new Edge(origin, destination)

        origin.addEdge(edge)
        destination.addEdge(edge.opposite(destination))

        return edge
    }

    //ADJACENCYLIST() -- IMPRIMIR LISTA DE ADJACÊNCIAS
    // Contém um vértice e as arestas que o ligam
    //Pegar um vértice junto com todas as suas arestas e imprime

    adjacencyList(key) {

        // for( let i = 0; i < this.vertexes; i++ ) {

        // }

        console.log(this.vertexes)
    }
}