export default class Node {
    constructor(key, parent = null) {
        this.key        = key;
        this.parent     = parent;
        this.leftChild  = null;
        this.rightChild = null;
    }

    isRoot() {
        return this.parent == null
    }

    depth() {
        if( this.isRoot() ) return 0;

        return 1 + this.parent.depth()
    }

    /**
     * It returns true if the node is a leaf
     */
    isLeaf() {
        return this.leftChild == null && this.rightChild == null 
    }

    /**
     * It returns true if the node has both children 
     */
    hasBothChildren() {
        return this.leftChild != null && this.rightChild != null
    }

    /**
     * It returns true if this node is a left child
     */
    ifLeftChild() {
         
    }

    /**
     * It returns true if this node has a left child
     */
    hasLeftChild() {
        return this.leftChild !== null;
    }

    /**
     * it returns true if this node is a left child
     */
    ifRightChild() {
        
    }

    /**
     * It returns true if this node has a left child
     */
    hasRightChild() {
        return this.rightChild !== null;
    }

}