'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinarySearchTree = function () {
    function BinarySearchTree() {
        _classCallCheck(this, BinarySearchTree);

        this.root = null;
    }

    //-- Métodos de percusos de árvore
    //- Pré ordem


    _createClass(BinarySearchTree, [{
        key: 'preOrder',
        value: function preOrder(operation) {
            this.preOrderNode(this.root, operation);
        }
    }, {
        key: 'preOrderNode',
        value: function preOrderNode(node, operation) {

            if (node !== null) {
                operation(node);
                this.preOrderNode(node.leftChild, operation);
                this.preOrderNode(node.rightChild, operation);
            }
        }
        //- Pós ordem

    }, {
        key: 'posOrder',
        value: function posOrder(operation) {
            this.posOrderNode(this.root, operation);
        }
    }, {
        key: 'posOrderNode',
        value: function posOrderNode(node, operation) {

            if (node !== null) {
                this.posOrderNode(node.leftChild, operation);
                this.posOrderNode(node.rightChild, operation);
                operation(node);
            }
        }
        //- Em ordem

    }, {
        key: 'inOrder',
        value: function inOrder(operation) {
            this.inOrderNode(this.root, operation);
        }
    }, {
        key: 'inOrderNode',
        value: function inOrderNode(node, operation) {
            if (node !== null) {
                this.inOrderNode(node.leftChild, operation);
                operation(node);
                this.inOrderNode(node.rightChild, operation);
            }
        }

        //-- Métodos de adição de elementos

    }, {
        key: 'otherAdd',
        value: function otherAdd(key) {
            if (this.root == null) {
                this.root = new _node2.default(key);
            } else {
                this.otherAddNode(this.root, key);
            }
        }
    }, {
        key: 'otherAddNode',
        value: function otherAddNode(node, key) {
            var child = key < node.key ? 'leftChild' : 'rightChild';
            if (node[child] == null) {
                node[child] = new _node2.default(key, node);
            } else {
                this.otherAddNode(node[child], key);
            }
        }

        //-- Métodos de pesquisa

    }, {
        key: 'search',
        value: function search(key) {
            return this.searchNode(this.root, key);
        }
    }, {
        key: 'searchNode',
        value: function searchNode(node, key) {
            if (node == null) return null;
            if (key < node.key) {
                return this.searchNode(node.leftChild, key);
            }
            if (key > node.key) {
                return this.searchNode(node.rightChild, key);
            }
            return node;
        }

        //-- Largura

    }, {
        key: 'breadthSearchFirst',
        value: function breadthSearchFirst(operation) {
            this.breadthSearchFirstNode(this.root, operation);
        }
    }, {
        key: 'breadthSearchFirstNode',
        value: function breadthSearchFirstNode(node, operation) {

            var queue = [];
            queue.push(node);

            while (queue.length > 0) {
                var next = queue.shift();
                operation(next);

                if (next.hasLeftChild()) {
                    queue.push(next.leftChild);
                }
                if (next.hasRightChild()) {
                    queue.push(next.rightChild);
                }
            }
        }
    }]);

    return BinarySearchTree;
}();

exports.default = BinarySearchTree;
//# sourceMappingURL=binarySearchTree.js.map