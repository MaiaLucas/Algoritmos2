'use strict';

var _binarySearchTree = require('./components/tree/binarySearchTree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

var _transversalOperations = require('./util/transversalOperations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _binarySearchTree2.default();
//tree.add(13);
var keys = [13, 10, 40, 34, 20, 8, 11, 7];

keys.forEach(function (key) {
  return tree.otherAdd(key);
});

/**/
//console.log(tree);

//-- Percusos
//tree.preOrder(printMenu);
//tree.inOrder();
//tree.posOrder(printMenu);

//-- Largura
tree.ifLeaf();
//# sourceMappingURL=app.js.map