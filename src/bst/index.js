function BST() {
  this.root = null;
}

BST.prototype.insert = require('./insert');
BST.prototype.toDot = require('./to_dot');
BST.prototype.search = require('./search');
BST.prototype.size = require('./size');

module.exports = BST;
