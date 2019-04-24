import Vertex from './VertexList'
import Edge from './EdgeList'

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
    // Contém um vértice e as arestas que o ligam
    /*
    Pegar um vértice junto com todas as suas arestas e imprime
    */

    adjancencyList(key) {

        
        // for(let i = 0; i < this.vertexes.length; i++) {
        //     let list

        // }

        console.log(this.vertexes)
    }
}
