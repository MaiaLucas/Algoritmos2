export const DFS = (graph, vertex, discovered) => { //Busca em profundidade 
    graph.incidentEdge(vertex).forEach( edge => {
        let opposite = edge.opposite(vertex)

        if( !discovered.has(opposite) ) {
            discovered.set(opposite, edge)
            DFS(graph, opposite, discovered)
        }
    } );
}