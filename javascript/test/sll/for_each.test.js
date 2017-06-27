const SLL = require('../../src/sll');

it('should loop over sll', () => {
  const head = new SLL(10);
  const middle = head.append(20);
  const tail = head.append(30);

  const callback = jest.fn();
  head.forEach(callback);

  expect(callback).toHaveBeenCalledTimes(3);
  expect(callback).toHaveBeenCalledWith(head);
  expect(callback).toHaveBeenCalledWith(middle);
  expect(callback).toHaveBeenCalledWith(tail);
});
