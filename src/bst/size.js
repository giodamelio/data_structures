module.exports = function(BST) {
  /**
   * Counts the number of nodes in the BST.
   * @returns {Number}
   * @example
   * const bst = new BST(10);
   * assert(bst.size() === 1);
   * bst.insert(22);
   * assert(bst.size() === 2);
   */
  BST.prototype.size = function() {
    const queue = [this];
    let count = 0;

    while (queue.length) {
      const current = queue.pop();
      count += 1;

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return count;
  };
};
