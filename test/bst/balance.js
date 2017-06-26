const ava = require('ava');

const BST = require('../../src/bst');

ava.test('no children', t => {
  const bst = new BST(10);
  t.is(bst.balance(), 0);
});

ava.test('balanced chilren', t => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(15);
  t.is(bst.balance(), 0);
});

ava.test('left higher', t => {
  const bst = new BST(10);
  bst.insert(5);
  bst.insert(7);
  bst.insert(15);
  t.is(bst.balance(), 1);
});

ava.test('left way higher', t => {
  const bst = new BST(101);

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  t.is(bst.balance(), 99);
});

ava.test('right way higher', t => {
  const bst = new BST(0);

  for (let i = 1; i <= 100; i++) {
    bst.insert(i);
  }

  t.is(bst.balance(), -99);
});
