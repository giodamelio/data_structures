const should = require('should');

const { BST, Node } = require('../src/bst');

describe('BST', () => {
  it('Start empty', () => {
    const bst = new BST();
    should.not.exist(bst.root);
  });

  it('Push single item', () => {
    const bst = new BST();
    bst.insert(10);
    bst.root.value.should.equal(10);
  });

  it('Push smaller item', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.root.left.value.should.equal(5);
  });

  it('Push bigger item', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(15);
    bst.root.right.value.should.equal(15);
  });

  describe('Node', () => {
    it('Create a node', () => {
      const node = new Node(3.141);
      node.value.should.equal(3.141);
      should.not.exist(node.left);
      should.not.exist(node.left);
    });
  });
});
