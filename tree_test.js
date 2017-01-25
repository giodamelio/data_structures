const Tree = require('./tree');

describe('Tree', function() {
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
});
