const BST = require('../../src/bst');

it('smaller item', () => {
  const bst = new BST(10);
  const newNode = bst.insert(5);

  expect(bst.left.value).toBe(5);
  expect(newNode.value).toBe(5);
});

it('bigger item', () => {
  const bst = new BST(10);
  const newNode = bst.insert(15);

  expect(bst.right.value).toBe(15);
  expect(newNode.value).toBe(15);
});

it('existing item', () => {
  const bst = new BST(10);
  const copy = bst.insert(10);

  expect(bst).toBe(copy);
  expect(bst.value).toBe(10);
  expect(bst.right).toBe(null);
  expect(bst.left).toBe(null);
});

it('many item', () => {
  const bst = new BST(10);
  for (let i = 1; i <= 10; i++) {
    bst.insert(10 - i);
    bst.insert(10 + i);
  }

  expect(bst.left.left.value).toBe(8);
  expect(bst.right.right.value).toBe(12);
});
