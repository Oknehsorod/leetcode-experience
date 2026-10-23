const getDistance = ([x1, y1]: [number, number]) =>
  Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

const isFirstPointNearerThanSecond = (
  a: [number, number],
  b: [number, number],
) => getDistance(a) < getDistance(b);

class MyMaxPointHeap {
  private heap: [number, number][] = [];

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (
        isFirstPointNearerThanSecond(this.heap[index], this.heap[parentIndex])
      )
        break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      let largest = index;
      const left = 2 * index + 1,
        right = 2 * index + 2;

      if (
        left < this.size() &&
        isFirstPointNearerThanSecond(this.heap[largest], this.heap[left])
      )
        largest = left;

      if (
        right < this.size() &&
        isFirstPointNearerThanSecond(this.heap[largest], this.heap[right])
      )
        largest = right;

      if (largest === index) break;

      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      index = largest;
    }
  }

  public push(val: [number, number]) {
    this.heap.push(val);

    this.bubbleUp(this.size() - 1);
  }

  public pop() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    const bottom = this.heap.pop()!;
    const top = this.peek();

    this.heap[0] = bottom;
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

function kClosest(points: number[][], k: number): number[][] {
  const heap = new MyMaxPointHeap();

  for (const point of points) {
    heap.push(point as [number, number]);

    if (heap.size() > k) heap.pop();
  }

  debugger;

  const result: number[][] = [];

  while (heap.size() > 0) result.push(heap.pop()!);

  debugger;

  return result;
}

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1,
  ),
);
