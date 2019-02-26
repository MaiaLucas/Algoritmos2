import Node from '../components/tree/node';

export const printKey = (node) => {
    console.log(node.key);
}

export const printMenu = (node) => {

    let pattern = '';
    for( let i = 0; i < node.depth(); i++ ){
        pattern += "| ";
    }
     
    console.log(`${pattern}-> ${node.key}`)
}