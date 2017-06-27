module.exports = function(SLL) {
  /**
   * Find the middle of an SLL
   * @returns {SLL} Middle SLL node
   * @example
   * const sll = new SLL(10);
   * sll.insert(20);
   * sll.insert(30);
   * assert(sll.middle().value === 20);
   */
  SLL.prototype.middle = function(value) {
    let slow, fast;
    slow = fast = this;

    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };
};
