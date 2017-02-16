function BST() {
  this.root = null;
}

BST.prototype.insert = require('./insert');
BST.prototype.toDot = require('./to_dot');

module.exports = BST;
