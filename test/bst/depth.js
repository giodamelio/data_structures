const ava = require('ava');

const BST = require('../../src/bst');

ava.test('empty tree', (t) => {
  const bst = new BST();

  t.is(bst.depth(), 0);
});

ava.test('depth === 0', (t) => {
  const bst = new BST();
  bst.insert(10);

  t.is(bst.depth(), 0);
});

ava.test('depth === 1', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(15);
  bst.insert(5);

  t.is(bst.depth(), 1);
});

ava.test('depth === 2', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(15);
  bst.insert(20);

  t.is(bst.depth(), 2);
});

ava.test('depth === 99', (t) => {
  const bst = new BST();

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  t.is(bst.depth(), 99);
});
