const SLL = require('../../src/sll');

it('should insert a value at the end', () => {
  const head = new SLL(10);
  head.insert(20);

  expect(head.next.value).toBe(20);
});

it('should insert a value from the start', () => {
  const head = new SLL(10);
  head.insert(20);
  head.insert(30);

  expect(head.next.next.value).toBe(30);
});
