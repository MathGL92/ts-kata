import { InputParser, Rover } from './kata';

const parser = new InputParser();
describe('acceptance tests', () => {
  describe('Rover should', () => {
    test('correctly executes multiple commands', () => {
      expect(new Rover('5 5\n1 2 N\nLMLMLMLMM', parser).navigate()).toBe('1 3 N');
      expect(new Rover('5 5\n3 3 E\nMMRMMRMRRM', parser).navigate()).toBe('5 1 E');
    });
  });
});

describe('unit tests', () => {
  describe('Rover should', () => {
    test('stay at the same place if no command is sent', () => {
      expect(new Rover('5 5\n1 2 N', parser).navigate()).toBe('1 2 N');
    });

    test('move forward correctly when facing north', () => {
      expect(new Rover('5 5\n1 2 N\nM', parser).navigate()).toBe('1 3 N');
    });

    test('move forward correctly when facing east', () => {
      expect(new Rover('5 5\n1 2 E\nM', parser).navigate()).toBe('2 2 E');
    });

    test('move forward correctly when facing south', () => {
      expect(new Rover('5 5\n1 2 S\nM', parser).navigate()).toBe('1 1 S');
    });

    test('move forward correctly when facing west', () => {
      expect(new Rover('5 5\n1 2 W\nM', parser).navigate()).toBe('0 2 W');
    });

    test('turn 90 degrees L from north to west', () => {
      expect(new Rover('5 5\n1 2 N\nL', parser).navigate()).toBe('1 2 W');
    });

    test('turn 90 degrees L from west to south', () => {
      expect(new Rover('5 5\n1 2 W\nL', parser).navigate()).toBe('1 2 S');
    });

    test('turn 90 degrees L from south to east', () => {
      expect(new Rover('5 5\n1 2 S\nL', parser).navigate()).toBe('1 2 E');
    });

    test('turn 90 degrees L from east to north', () => {
      expect(new Rover('5 5\n1 2 E\nL', parser).navigate()).toBe('1 2 N');
    });

    test('turn 90 degrees R from north to east', () => {
      expect(new Rover('5 5\n1 2 N\nR', parser).navigate()).toBe('1 2 E');
    });

    test('turn 90 degrees R from east to south', () => {
      expect(new Rover('5 5\n1 2 E\nR', parser).navigate()).toBe('1 2 S');
    });

    test('turn 90 degrees R from south to west', () => {
      expect(new Rover('5 5\n1 2 S\nR', parser).navigate()).toBe('1 2 W');
    });

    test('turn 90 degrees R from west to north', () => {
      expect(new Rover('5 5\n1 2 W\nR', parser).navigate()).toBe('1 2 N');
    });

    test('can accept two commands', () => {
      expect(new Rover('5 5\n1 2 W\nRM', parser).navigate()).toBe('1 3 N');
    });
  });
});
