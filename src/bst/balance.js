module.exports = function(BST) {
  /**
   * Returns an integer, positive or negative that represents how well balanced the tree is. Trees which are higher on the left than the right return a positive value, trees which are higher on the right than the left return a negative value. An ideally-balanced tree returns 0.
   * @returns {Number}
   * @example
   * const bst = new BST(10);
   * bst.insert(15);
   * bst.insert(20);
   * assert(bst.balence() === -1);
   */
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
