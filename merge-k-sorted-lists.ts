class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

const input = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
];

interface MapVal {
  head: ListNode;
  tail: ListNode;
}

function myMergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const map: Map<number, MapVal> = new Map();
  const keys: Set<number> = new Set();

  for (const listNode of lists) {
    let tmp = listNode;
    while (tmp) {
      const cachedNode = map.get(tmp.val) ?? null;
      const next = tmp.next;
      let head, tail;

      if (cachedNode) {
        tmp.next = cachedNode.head;
        head = tmp;
        tail = cachedNode.tail;
      } else {
        tmp.next = null;
        head = tail = tmp;
      }

      map.set(tmp.val, {
        head,
        tail,
      });
      keys.add(tmp.val);

      tmp = next;
    }
  }

  const sortedKeys = [...keys].toSorted((a, b) => a - b);

  const result = map.get(sortedKeys[0])?.head;

  for (let i = 0; i < sortedKeys.length - 1; i += 1) {
    const currentNode = map.get(sortedKeys[i]);
    const nextNode = map.get(sortedKeys[i + 1]);

    if (currentNode?.tail) {
      currentNode.tail.next = nextNode?.head ?? null;
    }
  }

  return result ?? null;
}

class MyMinHeap {
  private readonly heap: ListNode[] = [];

  private getParentIdx(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  public get length() {
    return this.heap.length;
  }

  public insert(node: ListNode) {
    this.heap.push(node);

    let idx = this.heap.length - 1;

    while (
      idx > 0 &&
      this.heap[this.getParentIdx(idx)].val > this.heap[idx].val
    ) {
      const parentIdx = this.getParentIdx(idx);

      let tmp = this.heap[idx];
      this.heap[idx] = this.heap[parentIdx];
      this.heap[parentIdx] = tmp;

      idx = parentIdx;
    }
  }

  public pop(): ListNode | null {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop()!;

    if (min === last) return min;

    this.heap[0] = last;

    let idx = 0;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;

      if (
        left < this.heap.length &&
        this.heap[left].val < this.heap[smallest].val
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right].val < this.heap[smallest].val
      ) {
        smallest = right;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];

      idx = smallest;
    }

    return min;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap = new MyMinHeap();

  for (const list of lists) {
    if (list === null) continue;
    heap.insert(list);
  }

  let result, tmp;
  while (heap.length > 0) {
    const min = heap.pop()!;

    if (min.next) heap.insert(min.next);
    if (tmp) {
      tmp.next = min;
      tmp = tmp.next;
    }
    if (!result) {
      result = tmp = min;
    }
  }

  return result ?? null;
}

mergeKLists(input);
