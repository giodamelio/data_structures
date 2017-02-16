const ava = require('ava');

const BST = require('../../src/bst');

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