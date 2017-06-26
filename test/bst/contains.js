const ava = require('ava');

const BST = require('../../src/bst');

ava.test('existing node', t => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  t.truthy(bst.contains(5));
});

ava.test('not existing node', t => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);

  t.falsy(bst.contains(55));
});
