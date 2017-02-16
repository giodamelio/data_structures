const ava = require('ava');

const BST = require('../src/bst');

ava.test('Start empty', (t) => {
  const bst = new BST();
  t.falsy(bst.root);
});

ava.test('Push Single Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  t.is(bst.root.value, 10);
});

ava.test('Push Smaller Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  t.is(bst.root.left.value, 5);
});

ava.test('Push Bigger Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(15);
  t.is(bst.root.right.value, 15);
});

ava.test('Push Existing Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(10);
  t.is(bst.root.value, 10);
});

ava.test('Push Many Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  for (let i = 1; i <= 10; i++) {
    bst.insert(10 - i);
    bst.insert(10 + i);
  }
  t.is(bst.root.left.left.value, 8);
  t.is(bst.root.right.right.value, 12);
});

ava.test('Empty tree', (t) => {
  const bst = new BST();
  t.is(bst.toDot(), 'graph {\n}\n');
});

ava.test('One node', (t) => {
  const bst = new BST();
  bst.insert(10);
  t.is(bst.toDot(), 'graph {\n  10\n}\n');
});

ava.test('Multiple nodes', (t) => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);

  // eslint-disable-next-line max-len
  t.is(bst.toDot(), 'graph {\n  10 -- 5[color=red]\n  10 -- 15[color=green]\n  15 -- 20[color=green]\n  20\n  5\n}\n');
});

