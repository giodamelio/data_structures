const ava = require('ava');

const BST = require('../../src/bst');

ava.test('empty tree', (t) => {
  const bst = new BST();

  t.is(bst.search(10), null);
});

ava.test('root node', (t) => {
  const bst = new BST();
  bst.insert(10);

  t.is(bst.search(10).value, 10);
});

ava.test('smaller node', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);

  t.is(bst.search(5).value, 5);
});

ava.test('larger node', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);

  t.is(bst.search(15).value, 15);
});

ava.test('non existant node', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);

  t.falsy(bst.search(666));
});
