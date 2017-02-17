function BST(startingValues) {
  this.root = null;

  if (startingValues && Array.isArray(startingValues)) {
    startingValues.forEach((value) => {
      this.insert(value);
    });
  }
}

BST.prototype.insert = require('./insert');
BST.prototype.toDot = require('./to_dot');
BST.prototype.search = require('./search');
BST.prototype.size = require('./size');
BST.prototype.depth = require('./depth');
BST.prototype.contains = require('./contains');

module.exports = BST;
