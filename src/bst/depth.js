module.exports = function(BST) {
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
