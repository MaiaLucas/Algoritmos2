"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DFS = exports.DFS = function DFS(graph, vertex, discovered) {
    //Busca em profundidade 
    graph.incidentEdge(vertex).forEach(function (edge) {
        var opposite = edge.opposite(vertex);

        if (!discovered.has(opposite)) {
            discovered.set(opposite, edge);
            DFS(graph, opposite, discovered);
        }
    });
};

var constructPath = exports.constructPath = function constructPath(origin, destination, discovered) {
    var path = [];

    if (discovered.has(destination)) {
        var step = destination;
        path.push(step);

        while (step !== origin) {
            var edge = discovered.get(step);
            var opposite = edge.opposite(step);
            path.push(opposite);

            step = opposite;
        }

        path.reverse();
    }

    return path;
};
//# sourceMappingURL=graphOpration.js.map