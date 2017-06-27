module.exports = function(SLL) {
  /**
   * Loop over each node in an SLL
   * @example
   * const sll = new SLL(10);
   * sll.insert(20);
   * sll.insert(30);
   * sll.forEach((node) => console.log(node)); // Logs each node in sll
   */
  SLL.prototype.forEach = function(callback) {
    let current = this;

    while (current) {
      callback(current);
      current = current.next;
    }
  };
};
