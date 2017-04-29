module.exports = function(BST) {
  // Convert the BST to dot format
  BST.prototype.toDot = function() {
    let output = 'graph {\n';

    const toProcess = [this];
    while (toProcess.length) {
      const current = toProcess.pop();

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
};
