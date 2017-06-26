const ava = require('ava');

const BST = require('../../src/bst');

ava.test('smaller item', t => {
  const bst = new BST(10);
  const newNode = bst.insert(5);

  t.is(bst.left.value, 5);
  t.is(newNode.value, 5);
});

ava.test('bigger item', t => {
  const bst = new BST(10);
  const newNode = bst.insert(15);

  t.is(bst.right.value, 15);
  t.is(newNode.value, 15);
});

ava.test('existing item', t => {
  const bst = new BST(10);
  const copy = bst.insert(10);

  t.is(bst, copy);
  t.is(bst.value, 10);
  t.is(bst.right, null);
  t.is(bst.left, null);
});

ava.test('many item', t => {
  const bst = new BST(10);
  for (let i = 1; i <= 10; i++) {
    bst.insert(10 - i);
    bst.insert(10 + i);
  }

  t.is(bst.left.left.value, 8);
  t.is(bst.right.right.value, 12);
});
