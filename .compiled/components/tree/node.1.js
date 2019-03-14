"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(key) {
        _classCallCheck(this, Node);

        this.key = key;
        this.parent = null;
        this.leftChild = null;
        this.rightChild = null;
    }

    _createClass(Node, [{
        key: "isLeaf",
        value: function isLeaf(node) {
            return node.leftChild == null && node.rightChild == null;
        }
    }, {
        key: "hasBothChildren",
        value: function hasBothChildren(node) {
            return node.leftChild !== null && node.rightChild !== null;
        }
    }, {
        key: "isLeftChild",
        value: function isLeftChild(node) {
            return node.parent > node.key;
        }
    }, {
        key: "isRightChild",
        value: function isRightChild(node) {
            return node.parent < node.key;
        }
    }, {
        key: "hasLeftChild",
        value: function hasLeftChild(node) {
            return node.leftChild !== null;
        }
    }, {
        key: "hasRightChild",
        value: function hasRightChild(node) {
            return node.rightChild !== null;
        }
    }]);

    return Node;
}();

exports.default = Node;
//# sourceMappingURL=node.1.js.map