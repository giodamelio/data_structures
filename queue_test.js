const Queue = require('./queue');

describe('Queue', function() {
  beforeEach(function() {
    this.queue = new Queue();
    this.queue.enqueue('A');
    this.queue.enqueue('B');
    this.queue.enqueue('C');
  });

  it('Enqueue an item', function() {
    this.queue.sll.head.value.should.equal('A');
    this.queue.sll.tail.value.should.equal('C');
    this.queue.length.should.equal(3);
  });

  it('Dequeue an item', function() {
    const item = this.queue.dequeue();
    item.should.equal('A');
    this.queue.length.should.equal(2);
  });

  it('Dequeue an item from an empty queue', function() {
    const queue = new Queue();
    const item = queue.dequeue();
    (item === null).should.be.true;
  });
});
