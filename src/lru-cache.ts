interface DoubleLinkedNode {
  key: number;
  value: number;
  next: DoubleLinkedNode | null;
  prev: DoubleLinkedNode | null;
}

class LRUCache {
  private readonly capacity: number;
  private readonly map: Map<number, DoubleLinkedNode> = new Map();
  private head: DoubleLinkedNode | null = null;
  private tail: DoubleLinkedNode | null = null;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  private remove(node: DoubleLinkedNode) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;

    node.next = null;
    node.prev = null;
    this.map.delete(node.key);
  }

  private add(node: DoubleLinkedNode) {
    this.map.set(node.key, node);

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;

    this.remove(node);
    this.add(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);
    if (node) this.remove(node);

    this.add({ key, value, next: null, prev: null });

    if (this.map.size > this.capacity && this.tail) {
      this.remove(this.tail);
    }
  }
}
