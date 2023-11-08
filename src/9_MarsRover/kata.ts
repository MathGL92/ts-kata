enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

enum Movement {
  MoveForward = 'M',
  TurnLeft = 'L',
  TurnRight = 'R',
}

type Command = Movement[] | null;

export class Rover {
  private direction?: Direction;
  private verticalPosition: number;
  private horizontalPosition: number;
  private command: Command;

  constructor(input: string, parser: InputParser) {
    const [startingX, startingY, startingDirection, command] = parser.parse(input);
    this.command = command;
    this.horizontalPosition = startingX;
    this.verticalPosition = startingY;
    this.direction = startingDirection;
  }

  public navigate() {
    this.command?.forEach((movement) => {
      if (movement === Movement.MoveForward) this.moveForward();

      if (movement === Movement.TurnLeft) this.turnLeft();

      if (movement === Movement.TurnRight) this.turnRight();
    });

    return this.finalCoordinates();
  }

  private moveForward() {
    if (this.direction === Direction.North) this.verticalPosition += 1;
    if (this.direction === Direction.East) this.horizontalPosition += 1;
    if (this.direction === Direction.South) this.verticalPosition -= 1;
    if (this.direction === Direction.West) this.horizontalPosition -= 1;
  }

  private turnLeft() {
    if (this.direction === Direction.North) {
      return (this.direction = Direction.West);
    }

    if (this.direction === Direction.West) {
      return (this.direction = Direction.South);
    }

    if (this.direction === Direction.South) {
      return (this.direction = Direction.East);
    }

    return (this.direction = Direction.North);
  }

  private turnRight() {
    if (this.direction === Direction.North) {
      return (this.direction = Direction.East);
    }

    if (this.direction === Direction.West) {
      return (this.direction = Direction.North);
    }

    if (this.direction === Direction.South) {
      return (this.direction = Direction.West);
    }

    return (this.direction = Direction.South);
  }

  private finalCoordinates() {
    return `${this.horizontalPosition} ${this.verticalPosition} ${this.direction}`;
  }
}

export class InputParser {
  public parse(input: string): [number, number, Direction, Command | null] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_plateau, startingPositionAndDirection, commandString] = input.split('\n') as [
      string,
      string,
      string,
    ];

    const command = commandString ? (commandString.split('') as Command) : null;

    const [startingX, startingY, startingDirection] = startingPositionAndDirection.split(' ') as [
      string,
      string,
      Direction,
    ];

    return [Number(startingX), Number(startingY), startingDirection, command];
  }
}

// SIngle Repsonsibility
// Dependency Inversion
// Open closed principle
