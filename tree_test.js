const Tree = require('./tree');

describe('Tree', function() {
  beforeEach(function() {
    this.tree =
      new Tree('A', [
        new Tree('B', [
          new Tree('D'),
          new Tree('E', [
            new Tree('F'),
            new Tree('G')
          ])]),
        new Tree('C')]);
  });

  it('Add a child', function() {
    const root = new Tree('A');
    root.addChild('B');
    root.value.should.equal('A');
    root.children[0].value.should.equal('B');
  });

  it('Add multiple children', function() {
    const root = new Tree('A');
    root.addChild('B', 'C');
    root.value.should.equal('A');
    root.children[0].value.should.equal('B');
    root.children[1].value.should.equal('C');
  });

  describe('Breadth First Search', function() {
    it('List a simple array of nodes', function() {
      this.tree.breadthFirstSearch()
        .should.eql(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });
  });
});
