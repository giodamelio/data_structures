const BST = require('../../src/bst');

it('no children', () => {
  const bst = new BST(10);
  expect(bst.balance()).toBe(0);
});

it('balanced chilren', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);
  expect(bst.balance()).toBe(0);
});

it('left higher', () => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(7);
  bst.insert(15);
  expect(bst.balance()).toBe(1);
});

it('left way higher', () => {
  const bst = new BST(101);

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  expect(bst.balance()).toBe(99);
});

it('right way higher', () => {
  const bst = new BST(0);

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  expect(bst.balance()).toBe(-99);
});
