import { Stack } from './kata';

describe('Stack should', () => {
  test('error when popping from an empty stack', () => {
    expect(() => {
      new Stack().pop();
    }).toThrow();
  });

  test('return 1 when 1 is pushed', () => {
    const stack = new Stack();

    stack.push(1);

    expect(stack.pop()).toBe(1);
  });
});
