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
   * Insert a new node into the sll.
   * @param {Any} value - The value for the new node
   * @returns {SLL} New SLL node
   * @example
   * const sll = new SLL(10);
   * const newNode = sll.insert(5); // Returns new node
   * assert(sll.next === newNode);
   */
  insert(value) {
    if (this.next) {
      return this.next.insert(value);
    }

    const newNode = new SLL(value);
    this.next = newNode;
    return newNode;
  }

  /**
   * Find the middle of an SLL
   * @returns {SLL} Middle SLL node
   * @example
   * const sll = new SLL(10);
   * sll.insert(20);
   * sll.insert(30);
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
   * sll.insert(20);
   * sll.insert(30);
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
