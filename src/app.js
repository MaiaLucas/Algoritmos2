import Tree from './components/tree/binarySearchTree';


let tree = new Tree();
//tree.add(13);
let keys = [ 13, 10, 40, 34, 20, 8, 11, 7 ];

keys.forEach(key => tree.add(key) );

let node = tree.search(7);

console.log(node)


