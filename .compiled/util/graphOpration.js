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
            path.unshift(opposite);

            step = opposite;
        }
    }

    return path;
};

var BFS = exports.BFS = function BFS(graph, vertex, discovered) {
    var queue = [vertex];

    var _loop = function _loop() {
        var currentVertex = queue.shift();

        graph.incidentEdge(currentVertex).forEach(function (edge) {
            var opposite = edge.opposite(currentVertex);

            if (!discovered.has(opposite)) {
                discovered.set(opposite, edge);
                queue.push(opposite);
            }
        });
    };

    while (queue.length > 0) {
        _loop();
    }
};
//# sourceMappingURL=graphOpration.js.map