module.exports = function(BST) {
  /**
   * Returns an integer representing the total number of levels in the tree. If there is one value, the depth should be 0, if two values it will be 1, if three values it may be 1 or 2, depending, etc.
   * @returns {Number}
   * @example
   * const bst = BST(10);
   * bst.insert(15);
   * bst.insert(20);
   * assert(bst.depth === 2);
   */
  BST.prototype.depth = function() {
    function _depth(node) {
      if (!node) {
        return 0;
      }

      const leftDepth = _depth(node.left);
      const rightDepth = _depth(node.right);

      return Math.max(leftDepth, rightDepth) + 1;
    }

    return _depth(this) - 1;
  };
};
