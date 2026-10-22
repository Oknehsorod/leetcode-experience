import { runClassMethods } from './utils/runClassMethods.ts';

class MyMinHeap {
  private heap: number[] = [];

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      let smallest = index;
      const leftIndex = 2 * index + 1,
        rightIndex = 2 * index + 2;

      if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[smallest])
        smallest = leftIndex;
      if (
        rightIndex < this.size() &&
        this.heap[rightIndex] < this.heap[smallest]
      )
        smallest = rightIndex;

      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];

      index = smallest;
    }
  }

  public push(val: number) {
    this.heap.push(val);

    this.bubbleUp(this.size() - 1);
  }

  public pop() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return top;
  }

  public peek() {
    return this.heap[0];
  }

  public size() {
    return this.heap.length;
  }
}

class KthLargest {
  private heap = new MyMinHeap();
  private k: number = 0;

  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.forEach((num) => this.add(num));
  }

  add(val: number): number {
    this.heap.push(val);

    while (this.heap.size() > this.k) this.heap.pop();

    return this.heap.peek()!;
  }
}

runClassMethods(
  KthLargest,
  ['add', 'add', 'add', 'add', 'add'],
  [[3], [5], [10], [9], [4]],
  [],
  [3, [4, 5, 8, 2]],
);
