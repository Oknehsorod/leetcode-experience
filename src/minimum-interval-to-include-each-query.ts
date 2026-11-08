class CustomHeap<T> {
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

function minInterval(intervals: number[][], queries: number[]): number[] {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);

  const indexedQueries = queries.map((q, idx) => [q, idx] as [number, number]);
  indexedQueries.sort((a, b) => a[0] - b[0]);

  debugger;

  const result: number[] = new Array(queries.length).fill(-1);

  debugger;

  let i = 0;
  const heap = new CustomHeap<[number, number]>((a, b) => b[0] > a[0]);

  for (const [query, idx] of indexedQueries) {
    while (i < n && intervals[i][0] <= query) {
      heap.push([intervals[i][1] - intervals[i][0] + 1, intervals[i][1]]);
      i++;
    }

    while (heap.size() > 0 && heap.peek()[1] < query) heap.pop();

    if (heap.size() > 0) result[idx] = heap.peek()[0];
  }

  debugger;
  return result;
}

console.log(
  minInterval(
    [
      [1, 4],
      [2, 4],
      [3, 6],
      [4, 4],
    ],
    [2, 3, 4, 5],
  ),
);
