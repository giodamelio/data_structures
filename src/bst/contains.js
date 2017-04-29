module.exports = function(BST) {
  BST.prototype.contains = function(value) {
    return Boolean(this.search(value));
  };
};
