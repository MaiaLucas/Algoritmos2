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
    }]);

    return BinarySearchTree;
}();

exports.default = BinarySearchTree;
//# sourceMappingURL=binarySearchTree.js.map