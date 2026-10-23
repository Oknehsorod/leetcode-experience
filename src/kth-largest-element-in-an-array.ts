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

function findKthLargest(nums: number[], k: number): number {
  const heap = new MyMinHeap();

  for (const num of nums) {
    heap.push(num);

    if (heap.size() > k) heap.pop();
  }

  return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
