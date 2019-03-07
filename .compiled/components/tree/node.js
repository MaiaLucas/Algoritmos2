"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(key) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Node);

        this.key = key;
        this.parent = parent;
        this.leftChild = null;
        this.rightChild = null;
    }

    _createClass(Node, [{
        key: "isRoot",
        value: function isRoot() {
            return this.parent == null;
        }
    }, {
        key: "depth",
        value: function depth() {
            if (this.isRoot()) return 0;

            return 1 + this.parent.depth();
        }

        /**
         * It returns true if the node is a leaf
         */

    }, {
        key: "isLeaf",
        value: function isLeaf() {
            return this.leftChild == null && this.rightChild == null;
        }

        /**
         * It returns true if the node has both children 
         */

    }, {
        key: "hasBothChildren",
        value: function hasBothChildren() {
            return this.leftChild != null && this.rightChild != null;
        }

        /**
         * It returns true if this node is a left child
         */

    }, {
        key: "ifLeftChild",
        value: function ifLeftChild() {}

        /**
         * It returns true if this node has a left child
         */

    }, {
        key: "hasLeftChild",
        value: function hasLeftChild() {
            return this.leftChild !== null;
        }

        /**
         * it returns true if this node is a left child
         */

    }, {
        key: "ifRightChild",
        value: function ifRightChild() {}

        /**
         * It returns true if this node has a left child
         */

    }, {
        key: "hasRightChild",
        value: function hasRightChild() {
            return this.rightChild !== null;
        }
    }]);

    return Node;
}();

exports.default = Node;
//# sourceMappingURL=node.js.map