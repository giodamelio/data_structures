const BST = require('../../src/bst');

it('root node', () => {
  const bst = new BST(10);

  expect(bst.search(10).value).toBe(10);
});

it('smaller node', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  expect(bst.search(5).value).toBe(5);
});

it('larger node', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  expect(bst.search(15).value).toBe(15);
});

it('non existant node', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  expect(bst.search(666)).toBeFalsy();
});
