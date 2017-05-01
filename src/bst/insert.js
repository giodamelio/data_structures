module.exports = function(BST) {
  /**
   * Insert a new node into the bst.
   * @param {OrderedValue} value - The value for the new node
   * @returns {BST} New BST node
   * @example
   * const bst = new BST(10);
   * const newNode = bst.insert(5); // Returns new node
   * assert(bst.left === newNode);
   */
  // eslint-disable-next-line consistent-return
  BST.prototype.insert = function(value) {
    const newNode = new BST(value);

    // eslint-disable-next-line consistent-this
    let current = this;

    while (current) {
      // The new value is already in the BST
      if (newNode.value === current.value) {
        return current;
      }

      // The new value is smaller then the current node so we need to put it on the left
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return newNode;
        }

        current = current.left;
      }

      // The new value is bigger the the current node so we need to put it on the right
      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return newNode;
        }

        current = current.right;
      }
    }
  };
};
