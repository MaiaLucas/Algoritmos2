import Node from './node';

export class OtherNode extends Node {
    constructor(key, parent = null){
        super(key, parent);
        this.x = 0;
        this.y = 0;
    }
    
    getY() {
        this.y = this.depth();
    }

    getX() {

    }
}