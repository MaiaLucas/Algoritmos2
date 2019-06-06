//Busca em Profundidade
export const DFS = (graph, vertex, discovered) => { 
    graph.incidentEdge(vertex).forEach( edge => {
        let opposite = edge.opposite(vertex)

        if( !discovered.has(opposite) ) {
            discovered.set(opposite, edge)
            DFS(graph, opposite, discovered)
        }
    } )
}

//Busca em Profundidade Completo
export const DFS_complete = (graph) => {
    let forest = new Map()
    for( let vertex of graph.vertices() ) {
        if( !forest.has(vertex) ) {
            forest.set(vertex, null)
            DFS(graph, vertex, forest)
        }
    }

    return forest
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

//Busca em Largura - sem nível
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

//TRABALHO Dijkstra 1.5 pts
/**
 * Não pode adicionar nenhuma propriedade ao Vertex e ao Edge (usar o que já tem)
 * Criar uma estimativa, como nos métodos acima
 */