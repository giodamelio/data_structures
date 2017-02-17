const ava = require('ava');

const BST = require('../../src/bst');

ava.test('empty tree', (t) => {
  const bst = new BST();

  t.is(bst.contains(10), false);
});

ava.test('existing node', (t) => {
  const bst = new BST([10, 5, 15]);

  t.is(bst.contains(5), true);
});

ava.test('not existing node', (t) => {
  const bst = new BST([10, 5, 15]);

  t.is(bst.contains(55), false);
});
