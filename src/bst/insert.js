const Node = require('./node');

// Insert a new node into the bst
function insert(value) {
  const newNode = new Node(value);

  // If the BST is empty, add the new value as the root
  if (!this.root) {
    this.root = newNode;
    return;
  }

  let current = this.root;

  while (current) {
    // The new value is already in the BST
    if (newNode.value === current.value) {
      return;
    }

    // The new value is smaller then the current node so we need to put it on the left
    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode;
        return;
      }

      current = current.left;
    }

    // The new value is bigger the the current node so we need to put it on the right
    if (newNode.value > current.value) {
      if (!current.right) {
        current.right = newNode;
        return;
      }

      current = current.right;
    }
  }
}

module.exports = insert;
