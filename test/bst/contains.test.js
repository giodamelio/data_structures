const BST = require('../../src/bst');

it('existing node', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  expect(bst.contains(5)).toBeTruthy();
});

it('not existing node', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  expect(bst.contains(55)).toBeFalsy();
});
