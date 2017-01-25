const SinglyLinkedList = require('./singly_linked_list');

module.exports = Queue;

function Queue() {
  this.sll = new SinglyLinkedList();
  this.length = 0;
}

Queue.prototype.enqueue = function(item) {
  this.sll.append(item);
  this.length += 1;
}

Queue.prototype.dequeue = function() {
  const head = this.sll.head;

  if (!head) {
    return null;
  }

  this.sll.head = head.next;
  this.length -= 1;
  return head.value;
}
