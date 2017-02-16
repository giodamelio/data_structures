const ava = require('ava');

const BST = require('../../src/bst');

ava.test('empty tree', (t) => {
  const bst = new BST();

  t.is(bst.size(), 0);
});

ava.test('one node', (t) => {
  const bst = new BST();
  bst.insert(10);

  t.is(bst.size(), 1);
});

ava.test('many nodes', (t) => {
  const bst = new BST();
  for (let i = 1; i <= 100; i++) {
    bst.insert(100 - i);
    bst.insert(100 + i);
  }

  t.is(bst.size(), 200);
});
