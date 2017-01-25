const SLL = require('./singly_linked_list');

describe('Singly Linked List', function() {
  beforeEach(function() {
    this.SLL = new SLL('A', 'B', 'C');
  });
  
  it('Prepend a node', function() {
    this.SLL.prepend('Z');

    this.SLL.head.value.should.equal('Z');
    this.SLL.tail.value.should.equal('C');
  });

  it('Append a node', function() {
    this.SLL.append('Z');

    this.SLL.head.value.should.equal('A');
    this.SLL.tail.value.should.equal('Z');
  });
});
