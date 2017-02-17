function depth() {
  if (!this.root) {
    return 0;
  }

  function _depth(node) {
    if (!node) {
      return 0;
    }

    const leftDepth = _depth(node.left);
    const rightDepth = _depth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  return _depth(this.root) - 1;
}

module.exports = depth;
