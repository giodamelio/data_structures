/**
 * Any value that can be compared with < and >
 * @typedef {Any} OrderedValue
 */

/**
 * A simple [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree).
 * @class
 * @param {OrderedValue} value - The value for the node
 * @returns {BST} New BST node
 */
class BST {
  constructor(value) {
    if (typeof value === 'undefined') {
      throw new Error('BST MUST have a value');
    }

    this.value = value;
    this.left = null;
    this.right = null;
  }

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
  insert(value) {
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
  }

  /**
   * Convert the BST to [dot][1] format
   * [1]: https://en.wikipedia.org/wiki/DOT_(graph_description_language)
   * @returns {String} A [dot][1] formated BST
   * [1]: https://en.wikipedia.org/wiki/DOT_(graph_description_language)
   */
  // Convert the BST to dot format
  toDot() {
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
  }

  /**
   * Search for a value in the BST.
   * @param {OrderedValue} - The value we are searching for.
   * @returns {BST|null} The found node or null if it does not exist
   * @example
   * const bst = new BST(10)
   * assert(bst.search(10).value === 10)
   * assert(bst.search(666) === null)
   */
  // eslint-disable-next-line consistent-return
  search(value) {
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
  }

  /**
   * Counts the number of nodes in the BST.
   * @returns {Number}
   * @example
   * const bst = new BST(10);
   * assert(bst.size() === 1);
   * bst.insert(22);
   * assert(bst.size() === 2);
   */
  size() {
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
  }

  /**
   * Returns an integer representing the total number of levels in the tree. If there is one value, the depth should be 0, if two values it will be 1, if three values it may be 1 or 2, depending, etc.
   * @returns {Number}
   * @example
   * const bst = BST(10);
   * bst.insert(15);
   * bst.insert(20);
   * assert(bst.depth === 2);
   */
  depth() {
    function _depth(node) {
      if (!node) {
        return 0;
      }

      const leftDepth = _depth(node.left);
      const rightDepth = _depth(node.right);

      return Math.max(leftDepth, rightDepth) + 1;
    }

    return _depth(this) - 1;
  }

  /**
   * Check if a BST contains a value.
   * @param {OrderedValue} value - The value to check fod
   * @returns {Boolean}
   * @example
   * const bst = new BST(10);
   * assert(bst.contains(10) === true);
   * assert(bst.contains(666) === false);
   */
  contains(value) {
    return Boolean(this.search(value));
  }

  /**
   * Returns an integer, positive or negative that represents how well balanced the tree is. Trees which are higher on the left than the right return a positive value, trees which are higher on the right than the left return a negative value. An ideally-balanced tree returns 0.
   * @returns {Number}
   * @example
   * const bst = new BST(10);
   * bst.insert(15);
   * bst.insert(20);
   * assert(bst.balence() === -1);
   */
  balance() {
    // If this node has no children return 0
    if (!this.left && !this.right) {
      return 0;
    }

    // Get the depth of the left and right subtrees
    const leftDepth = this.left ? this.left.depth() : 0;
    const rightDepth = this.right ? this.right.depth() : 0;

    return leftDepth - rightDepth;
  }
}

module.exports = BST;
