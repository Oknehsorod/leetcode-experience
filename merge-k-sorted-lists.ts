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

mergeKLists(input);

interface MapVal {
  head: ListNode;
  tail: ListNode;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
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
