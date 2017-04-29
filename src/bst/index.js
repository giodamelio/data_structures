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

module.exports = BST;
