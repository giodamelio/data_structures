const ava = require('ava');

const BST = require('../../src/bst');

ava.test('Push Single Item', (t) => {
  const bst = new BST();
  const newNode = bst.insert(10);

  t.is(bst.root.value, 10);
  t.is(newNode.value, 10);
});

ava.test('Push Smaller Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  const newNode = bst.insert(5);

  t.is(bst.root.left.value, 5);
  t.is(newNode.value, 5);
});

ava.test('Push Bigger Item', (t) => {
  const bst = new BST();
  bst.insert(10);
  const newNode = bst.insert(15);

  t.is(bst.root.right.value, 15);
  t.is(newNode.value, 15);
});

ava.test('Push Existing Item', (t) => {
  const bst = new BST();
  const first = bst.insert(10);
  const second = bst.insert(10);

  t.is(bst.root.value, 10);
  t.is(first, second);
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
