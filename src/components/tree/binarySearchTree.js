import Node from './node';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.addNode(this.root, key);
        }
    }

    otherAdd(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.otherAddNode(this.root, key);
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            if (!node.hasLeftChild()) {
                node.leftChild = new Node(key, node);
            } else {
            this.addNode(node.leftChild, key);
            }
        } else { 
            if (!node.hasRightChild()) {
                node.rightChild = new Node(key, node);
            } else {
            this.addNode(node.rightChild, key);
            }
        }
    }
   
    otherAddNode(node, key) {
        let child = (key < node.key) ? 'leftChild' : 'rightChild'
        if (node[child] == null) {
            node[child] = new Node(key, node);
        } else {
            this.otherAddNode(node[child], key);
        }
    }

    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) return null;
        if (key < node.key) {
            return (this.searchNode(node.leftChild, key))
        }
        if (key > node.key) {
            return (this.searchNode(node.rightChild, key))
        }
        return node;
    }
}
