import Vertex from './Vertex'

export default class Edge {

    constructor(origin, destiny, weight = null){
        this.origin  = origin
        this.destiny = destiny
        this.weight  = weight
    }

    element() {
        return this.weight
    }

    endPoints() {
        return [this.origin, this.destiny]
    }
}
