import Tree from './components/tree/binarySearchTree';
import { printKey, printMenu } from './util/transversalOperations';


let tree = new Tree();
//tree.add(13);
let keys = [ 13, 10, 40, 34, 20, 8, 11, 7 ];

keys.forEach(key => tree.otherAdd(key) );

/**/
//console.log(tree);

//-- Percusos
//tree.preOrder(printMenu);
//tree.inOrder();
//tree.posOrder(printMenu);

//-- Largura
tree.ifLeaf();