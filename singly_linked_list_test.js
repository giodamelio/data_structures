const SLL = require('./singly_linked_list');

describe('Singly Linked List', function() {
  beforeEach(function() {
    this.sll = new SLL('A', 'B', 'C');
  });
  
  it('Prepend a node', function() {
    this.sll.prepend('Z');

    this.sll.head.value.should.equal('Z');
    this.sll.tail.value.should.equal('C');
  });

  it('Prepend to an empty linked list', function() {
    const sll = new SLL();
    sll.prepend('A');
    sll.head.value.should.equal('A');
  });

  it('Append a node', function() {
    this.sll.append('Z');

    this.sll.head.value.should.equal('A');
    this.sll.tail.value.should.equal('Z');
  });

  it('Append to an empty linked list', function() {
    const sll = new SLL();
    sll.append('A');
    sll.head.value.should.equal('A');
  });
});
