const BST = require('../../src/bst');

it('depth === 0', () => {
  const bst = new BST(10);

  expect(bst.depth()).toBe(0);
});

it('depth === 1', () => {
  const bst = new BST(10);
  bst.insert(15);
  bst.insert(5);

  expect(bst.depth()).toBe(1);
});

it('depth === 2', () => {
  const bst = new BST(10);
  bst.insert(15);
  bst.insert(20);

  expect(bst.depth()).toBe(2);
});

it('depth === 100', () => {
  const bst = new BST(0);

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  expect(bst.depth()).toBe(100);
});
