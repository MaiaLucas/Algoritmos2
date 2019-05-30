import Tree from './components/tree/binarySearchTree';
import { printKey, printMenuKey } from './util/transversalOperations';

let keys = [13, 10, 40, 34, 20, 8, 11, 7]

let tree = new Tree();

keys.forEach(key => tree.otherAdd(key));

// tree.preOrder(printMenuKey);

// tree.remove(8)
// console.log('   ')

// tree.preOrder(printMenuKey);

//tree.inOrder(printKey);

let min = tree.minimum()
let max = tree.maximum()

console.log( `Minimo = ${min.key} Maximo = ${max.key}` )