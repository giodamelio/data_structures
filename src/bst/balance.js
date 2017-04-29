module.exports = function(BST) {
  BST.prototype.balance = function() {
    // If this node has no children return 0
    if (!this.left && !this.right) {
      return 0;
    }

    // Get the depth of the left and right subtrees
    const leftDepth = this.left ? this.left.depth() : 0;
    const rightDepth = this.right ? this.right.depth() : 0;

    return leftDepth - rightDepth;
  };
};
