const ava = require('ava');

const BST = require('../../src/bst');

ava.test('start empty', (t) => {
  const bst = new BST();
  t.falsy(bst.root);
});
