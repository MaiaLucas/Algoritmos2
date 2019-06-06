"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//Busca em Profundidade
var DFS = exports.DFS = function DFS(graph, vertex, discovered) {
    graph.incidentEdge(vertex).forEach(function (edge) {
        var opposite = edge.opposite(vertex);

        if (!discovered.has(opposite)) {
            discovered.set(opposite, edge);
            DFS(graph, opposite, discovered);
        }
    });
};

//Busca em Profundidade Completo
var DFS_complete = exports.DFS_complete = function DFS_complete(graph) {
    var forest = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = graph.vertices()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var vertex = _step.value;

            if (!forest.has(vertex)) {
                forest.set(vertex, null);
                DFS(graph, vertex, forest);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return forest;
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

//Busca em Largura - sem nível
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

//TRABALHO Dijkstra 1.5 pts
/**
 * Não pode adicionar nenhuma propriedade ao Vertex e ao Edge (usar o que já tem)
 * Criar uma estimativa, como nos métodos acima
 */
//# sourceMappingURL=graphOpration.js.map