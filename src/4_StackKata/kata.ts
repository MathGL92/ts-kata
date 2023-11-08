export class Stack {
  private value?: number;

  push(value: number) {
    this.value = value;
  }

  pop() {
    if (!this.value) {
      throw new Error('Stack is empty');
    }

    return this.value;
  }
}
