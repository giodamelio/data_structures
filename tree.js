const assert = require('assert');

function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(...values) {
  this.children.push.apply(
    this.children,
    values.map((value) => new Tree(value))
  );
}

module.exports = Tree;
