module.exports = function(BST) {
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
