function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

// Insert a new node into the bst
BST.prototype.insert = function(value) {
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
};

// Convert the BST to dot format
BST.prototype.toDot = function() {
  let output = 'graph {\n';

  const toProcess = [this.root];
  while (toProcess.length) {
    const current = toProcess.pop();

    // If there is no current then the tree is empty
    if (!current) {
      break;
    }

    // If current has no children then the tree has only one node
    if (!current.left && !current.right) {
      output += `  ${current.value}\n`;
    }

    // Render the connection to the left node
    if (current.left) {
      output += `  ${current.value} -- ${current.left.value}[color=red]\n`;
      toProcess.push(current.left);
    }

    // Render the connection to the right node
    if (current.right) {
      output += `  ${current.value} -- ${current.right.value}[color=green]\n`;
      toProcess.push(current.right);
    }
  }

  return `${output}}\n`;
};

module.exports = BST;
