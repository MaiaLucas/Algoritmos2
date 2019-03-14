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
    //--- Method Add


    _createClass(BinarySearchTree, [{
        key: 'add',
        value: function add(key) {
            if (this.root == null) {
                this.root = new _node2.default(key);
            } else {
                this.addNode(this.root, key);
            }
        }
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
        key: 'addNode',
        value: function addNode(node, key) {
            if (key < node.key) {
                if (!node.hasLeftChild()) {
                    node.leftChild = new _node2.default(key, node);
                } else {
                    this.addNode(node.leftChild, key);
                }
            } else {
                if (!node.hasRightChild()) {
                    node.rightChild = new _node2.default(key, node);
                } else {
                    this.addNode(node.rightChild, key);
                }
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

        //--- Method Search

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

        //--- Method Ordination

    }, {
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
    }, {
        key: 'posOrder',
        value: function posOrder(operation) {
            this.posOrderNode(this.root, operation);
        }
    }, {
        key: 'posOrderNode',
        value: function posOrderNode(node, operation) {
            if (node !== null) {
                this.preOrderNode(node.leftChild, operation);
                this.preOrderNode(node.rightChild, operation);
                operation(node);
            }
        }
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
    }, {
        key: 'breadthSearchfirst',
        value: function breadthSearchfirst(operation) {
            this.breadthSearchfirstNode(this.root, operation);
        }
    }, {
        key: 'breadthSearchfirstNode',
        value: function breadthSearchfirstNode(node, operation) {
            var queue = [];
            queue.push(node);

            while (queue.length > 0) {
                var next = queue.shift();
                operation(next);
                if (next.hasLeftChild()) queue.push(next.leftChild);
                if (next.hasRightChild()) queue.push(next.rightChild);
            }
        }

        //--- Method Remove

    }, {
        key: 'remove',
        value: function remove(key) {
            var found = this.search(key);
            if (found) {
                if (found.isLeaf()) {
                    if (found.isLeftChild()) {
                        found.parent.leftChild = null;
                    } else {
                        found.parent.rightChild = null;
                    }
                    found.parent = null;
                } else if (found.hasBothChildren()) {
                    /*Menor impacto possível, a maior/menor raiz da menor/maior subarvore */

                } else {
                    if (found.isLeftChild()) {
                        if (found.hasLeftChild()) {
                            found.parent.leftChild = found.leftChild;
                            found.leftChild.parent = found.parent;
                            found.leftChild = null;
                        } else {
                            found.parent.leftChild = found.rightChild;
                            found.rightChild.parent = found.parent;
                            found.rightChild = null;
                        }
                    } else {
                        if (found.hasLeftChild()) {
                            found.parent.rightChild = found.leftChild;
                            found.leftChild.parent = found.parent;
                            found.leftChild = null;
                        } else {
                            found.parent.rightChild = found.rightChild;
                            found.rightChild.parent = found.parent;
                            found.rightChild = null;
                        }
                    }
                    found.parent = null;
                }
            }
        }

        //--- Method Maximum node

    }, {
        key: 'maximum',
        value: function maximum() {
            return this.maximumNode(this.root);
        }
    }, {
        key: 'maximumNode',
        value: function maximumNode(node) {
            var maximum = node;

            while (maximum.hasRightChild()) {
                maximum = maximum.rightChild;
            }

            return maximum;
        }

        //--- Method Minimum node

    }, {
        key: 'minimum',
        value: function minimum() {
            return this.minimumNode(this.root);
        }
    }, {
        key: 'minimumNode',
        value: function minimumNode(node) {
            var minimum = node;
            while (minimum.hasLeftChild()) {
                minimum = minimum.leftChild;
            }

            return minimum;
        }
    }]);

    return BinarySearchTree;
}();

exports.default = BinarySearchTree;
//# sourceMappingURL=binarySearchTree.js.map