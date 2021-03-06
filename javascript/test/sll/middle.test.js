const SLL = require('../../src/sll');

it('should find the middle node', () => {
  const sll = new SLL(10);
  sll.append(20);
  sll.append(30);

  expect(sll.middle().value).toBe(20);
});

it('should work on a sll with a length of 1', () => {
  const sll = new SLL(10);

  expect(sll.middle().value).toBe(10);
});

it('when sll length is even, choose the first of the two middle nodes', () => {
  const sll = new SLL(10);
  sll.append(20);
  sll.append(30);
  sll.append(40);

  expect(sll.middle().value).toBe(20);
});
