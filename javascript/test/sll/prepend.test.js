const SLL = require('../../src/sll');

it('should prepend a new node to a single length sll', () => {
  const head = new SLL(10);
  const newNode = head.prepend(20);

  expect(newNode.next).toEqual(head);
});
