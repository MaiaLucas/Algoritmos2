"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var printKey = exports.printKey = function printKey(node) {
    console.log(node.key);
};

var printMenuKey = exports.printMenuKey = function printMenuKey(node) {
    var pattern = "";
    for (var i = 0; i < node.depth(); i++) {
        pattern += "|  ";
    }
    console.log(pattern + "-> " + node.key);
};
//# sourceMappingURL=transversalOperations.js.map