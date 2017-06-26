const ava = require('ava');

const BST = require('../../src/bst');

ava.test('empty bst node', t => {
  t.throws(() => {
    // eslint-disable-next-line no-unused-vars
    const bst = new BST();
  }, 'BST MUST have a value');
});

ava.test('start with initial value', t => {
  const bst = new BST(10);

  t.is(bst.value, 10);
  t.is(bst.right, null);
  t.is(bst.left, null);
});
