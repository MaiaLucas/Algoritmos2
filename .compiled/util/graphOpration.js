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
//# sourceMappingURL=graphOpration.js.map