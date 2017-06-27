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
function BST(value) {
  if (typeof value === 'undefined') {
    throw new Error('BST MUST have a value');
  }

  this.value = value;
  this.left = null;
  this.right = null;
}

require('./insert')(BST);
require('./to_dot')(BST);
require('./search')(BST);
require('./size')(BST);
require('./depth')(BST);
require('./contains')(BST);
require('./balance')(BST);

module.exports = BST;
