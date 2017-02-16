function search(value) {
  let current = this.root;

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

  return null;
}

module.exports = search;
