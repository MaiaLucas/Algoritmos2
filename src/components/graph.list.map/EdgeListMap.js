import Vertex from './VertexListMap'

export default class Edge {

    constructor(origin, destination, element = null){
        this._origin  = origin;
        this._destination = destination;
        this._element  = element;
    }

    get element() {
        return this._element
    }

    endPoints() {
        return [this._origin, this._destination]
    }

    opposite(v) {
        return ( v === this._destination ) ? this._origin : this._destination
    }
    
}
