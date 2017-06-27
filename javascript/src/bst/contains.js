module.exports = function(BST) {
  /**
   * Check if a BST contains a value.
   * @param {OrderedValue} value - The value to check fod
   * @returns {Boolean}
   * @example
   * const bst = new BST(10);
   * assert(bst.contains(10) === true);
   * assert(bst.contains(666) === false);
   */
  BST.prototype.contains = function(value) {
    return Boolean(this.search(value));
  };
};
