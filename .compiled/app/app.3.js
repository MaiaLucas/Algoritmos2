'use strict';

var _binarySearchTree = require('./components/tree/binarySearchTree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _binarySearchTree2.default();
var keys = [13, 10, 40, 34, 20, 8, 11, 7];

keys.forEach(function (key) {
  return tree.add(key);
});

console.log(tree);
//# sourceMappingURL=app.3.js.map