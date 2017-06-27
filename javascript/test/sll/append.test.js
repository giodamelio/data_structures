const SLL = require('../../src/sll');

it('should append a new node to a single length sll', () => {
  const head = new SLL(10);
  head.append(20);

  expect(head.next.value).toBe(20);
});

it('should append a new node to a sll with multiple values', () => {
  const head = new SLL(10);
  head.append(20);
  head.append(30);

  expect(head.next.next.value).toBe(30);
});
