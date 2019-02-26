'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printMenu = exports.printKey = undefined;

var _node = require('../components/tree/node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printKey = exports.printKey = function printKey(node) {
    console.log(node.key);
};

var printMenu = exports.printMenu = function printMenu(node) {

    var pattern = '';
    for (var i = 0; i < node.depth(); i++) {
        pattern += "| ";
    }

    console.log(pattern + '-> ' + node.key);
};
//# sourceMappingURL=transversalOperations.js.map