export const DFS = (graph, vertex, discovered) => { //Busca em profundidade 
    graph.incidentEdge(vertex).forEach( edge => {
        let opposite = edge.opposite(vertex)

        if( !discovered.has(opposite) ) {
            discovered.set(opposite, edge)
            DFS(graph, opposite, discovered)
        }
    } )
}

export const constructPath = (origin, destination, discovered) => {
    let path = []

    if( discovered.has(destination) ) {
        let step = destination
        path.push(step)

        while( step !== origin ) {
            let edge = discovered.get(step)
            let opposite = edge.opposite(step)
            path.unshift(opposite)

            step = opposite
        }
    }

    return path
}

export const BFS = (graph, vertex, discovered) => {
    let queue = [vertex]
    while( queue.length > 0 ) {
        let currentVertex = queue.shift()
        
        graph.incidentEdge(currentVertex).forEach( edge => {
            let opposite = edge.opposite(currentVertex)

            if( !discovered.has(opposite) ) {
                discovered.set(opposite, edge)
                queue.push(opposite)
            }
        } )
    }
}