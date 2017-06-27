/**
 * A simple [Singly Linked List](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).
 * @class
 * @param {Any} value - The value for the node
 * @returns {SLL} New SLL node
 */
function SLL(value) {
  if (typeof value === 'undefined') {
    throw new Error('SLL MUST have a value');
  }

  this.value = value;
  this.next = null;
}

require('./insert')(SLL);
require('./middle')(SLL);
require('./for_each')(SLL);

module.exports = SLL;
