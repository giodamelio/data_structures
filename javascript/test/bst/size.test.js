const BST = require('../../src/bst');

it('one node', () => {
  const bst = new BST(10);

  expect(bst.size()).toBe(1);
});

it('many nodes', () => {
  const bst = new BST(0);
  for (let i = 1; i <= 100; i++) {
    bst.insert(100 - i);
    bst.insert(100 + i);
  }

  expect(bst.size()).toBe(200);
});
