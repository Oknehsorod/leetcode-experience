import { runClassMethods } from './utils/runClassMethods.ts';

class MedianHeap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[parentIndex], this.heap[index])) break;

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

      if (
        leftIndex < this.size() &&
        this.compare(this.heap[leftIndex], this.heap[smallest])
      )
        smallest = leftIndex;
      if (
        rightIndex < this.size() &&
        this.compare(this.heap[rightIndex], this.heap[smallest])
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

  public push(val: T) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
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

class MedianFinder {
  private maxHeap = new MedianHeap<number>((a, b) => a > b);
  private minHeap = new MedianHeap<number>((a, b) => a < b);

  constructor() {}

  addNum(num: number): void {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop()!);

    while (this.minHeap.size() > this.maxHeap.size())
      this.maxHeap.push(this.minHeap.pop()!);
  }

  findMedian(): number {
    debugger;

    const size = this.maxHeap.size() + this.minHeap.size();

    if (size % 2 !== 0) return this.maxHeap.peek();

    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
}

runClassMethods(
  MedianFinder,
  ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'],
  [[], [1], [2], [], [3], []],
);
