module.exports = function(BST) {
  // eslint-disable-next-line consistent-return
  BST.prototype.search = function(value) {
    // eslint-disable-next-line consistent-this
    let current = this;

    while (current) {
      // If we found the node, return it
      if (value === current.value) {
        return current;
      }

      // If there are no more children the value is not in the tree
      if (!current.left && !current.right) {
        return null;
      }

      // If the value is smaller then the current node, we need to go left
      if (value < current.value && current.left) {
        current = current.left;
      }

      // If the value is smaller then the current node, we need to go right
      if (value > current.value && current.right) {
        current = current.right;
      }
    }
  };
};
