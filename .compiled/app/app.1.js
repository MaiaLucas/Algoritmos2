'use strict';

var _node = require('./components/tree/node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = new _node2.default(13);
root.leftChild = new _node2.default(10);
root.rightChild = new _node2.default(20);
root.rightChild.rightChild = new _node2.default(34);

console.log(root);
//# sourceMappingURL=app.1.js.map