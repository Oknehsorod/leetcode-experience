class NetworkHeap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  private bubbleUp(idx: number) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.compare(this.heap[parentIdx], this.heap[idx])) break;

      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];

      idx = parentIdx;
    }
  }

  private bubbleDown(idx: number) {
    while (true) {
      let smallest = idx;
      const left = idx * 2 + 1,
        right = idx * 2 + 2;

      if (
        left < this.size() &&
        this.compare(this.heap[left], this.heap[smallest])
      )
        smallest = left;
      if (
        right < this.size() &&
        this.compare(this.heap[right], this.heap[smallest])
      )
        smallest = right;

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];

      idx = smallest;
    }
  }

  public pop(): T | null {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop()!;

    const bottom = this.heap.pop()!;
    const top = this.peek();

    this.heap[0] = bottom;
    this.bubbleDown(0);

    return top;
  }

  public push(value: T) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  public peek() {
    return this.heap[0];
  }
  public size() {
    return this.heap.length;
  }
}

function networkDelayTime(times: number[][], n: number, k: number): number {
  const adj = new Map<number, [number, number][]>();
  for (let i = 0; i <= n; i++) adj.set(i, []);

  for (const [u, v, w] of times) adj.get(u)!.push([v, w]);

  debugger;

  const distances = new Array(n + 1).fill(Infinity);
  distances[k] = 0;

  const heap = new NetworkHeap<[number, number]>((a, b) => a[0] < b[0]);
  heap.push([0, k]);

  let time = 0;
  let visitedCount = 0;

  while (heap.size() > 0) {
    const [currTime, u] = heap.pop()!;

    if (currTime > distances[u]) continue;

    time = Math.max(time, currTime);
    visitedCount++;

    for (const [v, weight] of adj.get(u)!) {
      const timeToV = currTime + weight;

      if (timeToV < distances[v]) {
        distances[v] = timeToV;
        heap.push([timeToV, v]);
      }
    }
  }

  debugger;

  return visitedCount === n ? time : -1;
}

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ),
);
