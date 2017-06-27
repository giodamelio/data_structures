/**
 * A simple [Singly Linked List](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).
 * @class
 * @param {Any} value - The value for the node
 * @returns {SLL} New SLL node
 */
class SLL {
  constructor(value) {
    if (typeof value === 'undefined') {
      throw new Error('SLL MUST have a value');
    }

    this.value = value;
    this.next = null;
  }

  /**
   * Append a new node to the sll.
   * @param {Any} value - The value for the new node
   * @returns {SLL} New SLL node
   * @example
   * const sll = new SLL(10);
   * const newNode = sll.append(5); // Returns new node
   * assert(sll.next === newNode);
   */
  append(value) {
    if (this.next) {
      return this.next.append(value);
    }

    const newNode = new SLL(value);
    this.next = newNode;
    return newNode;
  }

  /**
   * Prepend a new node to the sll.
   * @param {Any} value - The value for the new node
   * @returns {SLL} New SLL node
   * @example
   * const sll = new SLL(10);
   * const newNode = sll.prepend(5); // Returns new node
   * assert(newNode.next === sll);
   */
  prepend(value) {
    const newNode = new SLL(value);
    newNode.next = this;
    return newNode;
  }

  /**
   * Find the middle of an SLL
   * @returns {SLL} Middle SLL node
   * @example
   * const sll = new SLL(10);
   * sll.append(20);
   * sll.append(30);
   * assert(sll.middle().value === 20);
   */
  middle() {
    let slow, fast;
    slow = fast = this;

    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  /**
   * Loop over each node in an SLL
   * @param {Function} callback - Called on each node
   * @example
   * const sll = new SLL(10);
   * sll.append(20);
   * sll.append(30);
   * sll.forEach((node) => console.log(node)); // Logs each node in sll
   */
  forEach(callback) {
    let current = this;

    while (current) {
      callback(current);
      current = current.next;
    }
  }
}

module.exports = SLL;
