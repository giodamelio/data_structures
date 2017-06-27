const SLL = require('../../src/sll');

it('should create new node', () => {
  const node = new SLL(22);
  expect(node.value).toBe(22);
});

it('requires a value', () => {
  expect(() => {
    const node = new SLL();
  }).toThrow('SLL MUST have a value');
});
