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
        key: "isLeaf",
        value: function isLeaf() {
            return this.leftChild == null && this.rightChild == null;
        }
    }, {
        key: "hasBothChildren",
        value: function hasBothChildren() {
            return this.leftChild !== null && this.rightChild !== null;
        }
    }, {
        key: "isLeftChild",
        value: function isLeftChild() {
            return this.parent.leftChild === this;
        }
    }, {
        key: "isRightChild",
        value: function isRightChild() {
            return this.parent.rightChild === this;
        }
    }, {
        key: "hasLeftChild",
        value: function hasLeftChild() {
            return this.leftChild !== null;
        }
    }, {
        key: "hasRightChild",
        value: function hasRightChild() {
            return this.rightChild !== null;
        }
    }, {
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
    }, {
        key: "height",
        value: function height() {
            if (this.isLeaf()) return 0;
            if (this.hasBothChildren()) {
                return 1 + Math.max(this.leftChild.height(), this.rightChild.height());
            } else {
                if (this.hasLeftChild()) return 1 + this.leftChild.height();else return 1 + this.rightChild.height();
            }
        }
    }]);

    return Node;
}();

exports.default = Node;
//# sourceMappingURL=node.js.map