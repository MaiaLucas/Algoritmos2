import Tree from './components/tree/binarySearchTree';
import { printKey, printMenuKey, printMenuKeyHeight } from './util/transversalOperations';

let keys = [13, 10, 40, 34, 20, 8, 11, 7]

let tree = new Tree();

keys.forEach(key => tree.otherAdd(key));

tree.preOrder(printMenuKeyHeight)
console.log('---------')
