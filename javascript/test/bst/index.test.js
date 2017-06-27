const BST = require('../../src/bst');

it('empty bst node', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const bst = new BST();
  }).toThrow('BST MUST have a value');
});

it('start with initial value', () => {
  const bst = new BST(10);

  expect(bst.value).toBe(10);
  expect(bst.right).toBe(null);
  expect(bst.left).toBe(null);
});
