'use strict';

var _binarySearchTree = require('./components/tree/binarySearchTree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _binarySearchTree2.default();
//tree.add(13);
var keys = [13, 10, 40, 34, 20, 8, 11, 7];

keys.forEach(function (key) {
  return tree.add(key);
});

var node = tree.search(7);

console.log(node);
//# sourceMappingURL=app.js.map