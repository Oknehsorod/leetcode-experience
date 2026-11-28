import { Stack } from '@datastructures-js/stack';
import { runClassMethods } from './utils/runClassMethods.ts';

class MyQueue {
  private s1 = new Stack<number>();
  private s2 = new Stack<number>();

  constructor() {}

  push(x: number): void {
    this.s1.push(x);
  }

  private normalizeStacks() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) this.s2.push(this.s1.pop()!);
    }
  }

  pop(): number {
    this.normalizeStacks();
    debugger;
    return this.s2.pop()!;
  }

  peek(): number {
    this.normalizeStacks();
    return this.s2.peek()!;
  }

  empty(): boolean {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}

runClassMethods(
  MyQueue,
  [
    'MyQueue',
    'push',
    'push',
    'push',
    'push',
    'pop',
    'push',
    'pop',
    'pop',
    'pop',
    'pop',
  ],
  [[], [1], [2], [3], [4], [], [5], [], [], [], []],
);
