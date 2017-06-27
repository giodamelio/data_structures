const BST = require('../../src/bst');

it('one node', () => {
  const bst = new BST(10);
  expect(bst.toDot()).toMatchSnapshot();
});

it('multiple nodes', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);

  expect(bst.toDot()).toMatchSnapshot();
});
