import Node from './node';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //-- Métodos de percusos de árvore
    //- Pré ordem
    preOrder(operation) {
        this.preOrderNode(this.root, operation);
    }

    preOrderNode(node, operation) {

        if( node !== null ) {
            operation(node)
            this.preOrderNode(node.leftChild, operation);
            this.preOrderNode(node.rightChild, operation);
        }
    }
    //- Pós ordem
    posOrder(operation) {
        this.posOrderNode(this.root, operation);
    }

    posOrderNode(node, operation) { 

        if( node !== null ) {
            this.posOrderNode(node.leftChild, operation);
            this.posOrderNode(node.rightChild, operation);
            operation(node);
        }
    }
    //- Em ordem
    inOrder(operation) {
        this.inOrderNode(this.root, operation);
    }

    inOrderNode(node, operation) {
        if( node !== null ){
            this.inOrderNode(node.leftChild, operation);
            operation(node);
            this.inOrderNode(node.rightChild, operation);
        }
    }

    //-- Métodos de adição de elementos
    otherAdd(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.otherAddNode(this.root, key);
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

    //-- Métodos de pesquisa
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

    //-- Largura
    breadthSearchFirst(operation) {
        this.breadthSearchFirstNode(this.root, operation);
    }

    breadthSearchFirstNode(node, operation) {
        
        let queue = [];
        queue.push(node);

        while(queue.length > 0) {
            let next = queue.shift();
            operation(next);
            
            if( next.hasLeftChild() ) {
                queue.push(next.leftChild);
            }
            if( next.hasRightChild() ) {
                queue.push(next.rightChild);
            }
        }
    }

}
