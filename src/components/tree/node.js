export default class Node {
    constructor(key, parent=null) {
        this.key = key;
        this.parent = parent;
        this.leftChild = null;
        this.rightChild = null;
    }

    isLeaf() {
        return (this.leftChild == null && this.rightChild == null)
    }

    hasBothChildren() {
        return (this.leftChild !== null && this.rightChild !== null)
    }

    isLeftChild() {
        return this.parent.leftChild === this
    }

    isRightChild() {
        return this.parent.rightChild === this
    }
    
    hasLeftChild() {
        return this.leftChild !== null
    }

    hasRightChild() {
        return this.rightChild !== null
    }

    isRoot() {
        return this.parent == null
    }

    depth() {
        if(this.isRoot()) return 0
        return 1 + this.parent.depth()
    }

    height() {
        if( this.isLeaf() ) return 0;
        if( this.hasBothChildren() ) {
            return 1 + Math.max( this.leftChild.height(), this.rightChild.height() )
        } else {
            if( this.hasLeftChild() ) return 1 + this.leftChild.height();
            else return 1 + this.rightChild.height();
        }
    }

}
