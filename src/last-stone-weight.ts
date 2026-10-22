class MyMaxHeap {
  private heap: number[] = [];

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] - this.heap[index] >= 0) break;

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
      const leftIndex = 2 * index + 1,
        rightIndex = 2 * index + 2;

      if (
        leftIndex < this.size() &&
        this.heap[leftIndex] - this.heap[largest] > 0
      )
        largest = leftIndex;
      if (
        rightIndex < this.size() &&
        this.heap[rightIndex] - this.heap[largest] > 0
      )
        largest = rightIndex;

      if (largest === index) break;

      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      index = largest;
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

function lastStoneWeight(stones: number[]): number {
  const heap = new MyMaxHeap();
  stones.forEach((stone) => heap.push(stone));

  while (heap.size() > 1) {
    const stone1 = heap.pop()!;
    const stone2 = heap.pop()!;

    if (stone1 !== stone2) {
      heap.push(stone1 - stone2);
    }
  }

  return heap.size() === 1 ? heap.peek()! : 0;
}

lastStoneWeight([2, 7, 4, 1, 8, 1]);
