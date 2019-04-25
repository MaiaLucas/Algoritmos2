"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
    function Vertex(element) {
        _classCallCheck(this, Vertex);

        this._element = element;
        this._outcoming = [];
        //this._incoming = []
    }

    _createClass(Vertex, [{
        key: "addEdge",
        value: function addEdge(edge) {
            this._outcoming.push(edge);
        }
    }, {
        key: "adjacencyList",
        value: function adjacencyList() {}
    }, {
        key: "element",
        get: function get() {
            return this._element;
        }
    }]);

    return Vertex;
}();

exports.default = Vertex;
//# sourceMappingURL=VertexList.js.map