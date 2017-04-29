const ava = require('ava');

const BST = require('../../src/bst');

ava.test('one node', (t) => {
  const bst = new BST(10);

  t.is(bst.size(), 1);
});

ava.test('many nodes', (t) => {
  const bst = new BST(0);
  for (let i = 1; i <= 100; i++) {
    bst.insert(100 - i);
    bst.insert(100 + i);
  }

  t.is(bst.size(), 200);
});
