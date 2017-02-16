const ava = require('ava');

const BST = require('../../src/bst');

ava.test('Start empty', (t) => {
  const bst = new BST();
  t.falsy(bst.root);
});
