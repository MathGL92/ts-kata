import { leapYear } from './kata';

describe('Leap year should', () => {
  test('return true if input is 4', () => {
    expect(leapYear(4)).toBe(true);
  });

  test('return true if input is 8', () => {
    expect(leapYear(8)).toBe(true);
  });

  test('return false if input is 1', () => {
    expect(leapYear(1)).toBe(false);
  });

  test('return false if input is 100', () => {
    expect(leapYear(100)).toBe(false);
  });

  test('return true if input is 400', () => {
    expect(leapYear(400)).toBe(true);
  });
});
