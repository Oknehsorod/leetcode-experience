class TaskHeap {
  private heap: number[] = [];

  private compare(a: number, b: number) {
    const aValue = this.heap[a];
    const bValue = this.heap[b];

    return aValue >= bValue;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.compare(parentIndex, index)) break;

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

      if (leftIndex < this.size() && this.compare(leftIndex, smallest))
        smallest = leftIndex;
      if (rightIndex < this.size() && this.compare(rightIndex, smallest))
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

function leastInterval(tasks: string[], n: number): number {
  const map = new Map<string, number>();

  for (const task of tasks) {
    map.set(task, (map.get(task) ?? 0) + 1);
  }

  const heap = new TaskHeap();

  for (const freq of map.values()) {
    heap.push(freq);
  }

  const cooldownQueue: [number, number][] = [];
  let time = 0;

  while (heap.size() > 0 || cooldownQueue.length > 0) {
    time++;

    if (cooldownQueue.length > 0 && time >= cooldownQueue[0][1]) {
      const [freq] = cooldownQueue.shift()!;
      heap.push(freq);
    }

    if (heap.size() > 0) {
      const freq = heap.pop()!;

      if (freq > 1) cooldownQueue.push([freq - 1, time + n + 1]);
    }
  }

  debugger;

  return time;
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1));
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3));
