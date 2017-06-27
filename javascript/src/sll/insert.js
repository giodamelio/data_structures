module.exports = function(SLL) {
  /**
   * Insert a new node into the sll.
   * @param {Any} value - The value for the new node
   * @returns {SLL} New SLL node
   * @example
   * const sll = new SLL(10);
   * const newNode = sll.insert(5); // Returns new node
   * assert(sll.next === newNode);
   */
  SLL.prototype.insert = function(value) {
    if (this.next) {
      return this.next.insert(value);
    }

    const newNode = new SLL(value);
    this.next = newNode;
    return newNode;
  };
};
