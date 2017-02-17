const ava = require('ava');

const BST = require('../../src/bst');

ava.test('start empty', (t) => {
  const bst = new BST();

  t.falsy(bst.root);
});

ava.test('start with initial values', (t) => {
  const bst = new BST([10, 15, 5]);

  t.is(bst.root.value, 10);
  t.is(bst.root.right.value, 15);
  t.is(bst.root.left.value, 5);
});
