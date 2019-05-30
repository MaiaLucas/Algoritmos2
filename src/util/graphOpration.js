export const DFS = (graph, vertex, discovered) => { //Busca em profundidade 
    graph.incidentEdge(vertex).forEach( edge => {
        let opposite = edge.opposite(vertex)

        if( !discovered.has(opposite) ) {
            discovered.set(opposite, edge)
            DFS(graph, opposite, discovered)
        }
    } );
}

export const constructPath = (origin, destination, discovered) => {
    let path = []

    if( discovered.has(destination) ) {
        let step = destination
        path.push(step)

        while( step !== origin ) {
            let edge = discovered.get(step)
            let opposite = edge.opposite(step)
            path.push(opposite)

            step = opposite
        }

        path.reverse()
    }

    return path
}