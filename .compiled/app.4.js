'use strict';

var _binarySearchTree = require('./components/tree/binarySearchTree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

var _transversalOperations = require('./util/transversalOperations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = [13, 10, 40, 34, 20, 8, 11, 7];

var tree = new _binarySearchTree2.default();

keys.forEach(function (key) {
  return tree.otherAdd(key);
});

tree.preOrder(_transversalOperations.printMenuKey);
console.log('---------');
tree.remove(13);
tree.preOrder(_transversalOperations.printMenuKey);
console.log('---------');
tree.remove(20);
tree.preOrder(_transversalOperations.printMenuKey);
//# sourceMappingURL=app.4.js.map