import { runClassMethods } from './utils/runClassMethods.ts';
import { Queue } from '@datastructures-js/queue';

class MyStack {
  private q1 = new Queue<number>();
  private q2 = new Queue<number>();

  constructor() {}

  push(x: number): void {
    this.q2.push(x);

    while (this.q1.size() > 0) this.q2.push(this.q1.dequeue()!);

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop(): number {
    return this.q1.dequeue()!;
  }

  top(): number {
    return this.q1.front()!;
  }

  empty(): boolean {
    return this.q1.isEmpty();
  }
}

/*
Time Complexity: push - O(n), pop/top/empty - O(1)
Space Complexity: O(n)
*/

runClassMethods(
  MyStack,
  ['MyStack', 'push', 'push', 'top', 'pop', 'empty'],
  [[], [1], [2], [], [], []],
);
