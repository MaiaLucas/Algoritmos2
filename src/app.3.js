import Tree from './components/tree/binarySearchTree';

let tree = new Tree();
let keys = [ 13, 10, 40, 34, 20, 8, 11, 7 ];

keys.forEach(key => tree.add(key) );


console.log(tree);
