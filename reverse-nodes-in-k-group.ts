class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;

  let len = 0,
    tmp: ListNode | null = head;
  while (tmp !== null) {
    tmp = tmp.next ?? null;
    len += 1;
  }

  if (len < k) return head;

  let a = head,
    b = head.next,
    depth = k;
  while (depth > 1 && a && b) {
    if (a === head) {
      a.next = null;
    }

    const bNext = b?.next;

    b.next = a;

    a = b;
    b = bNext;

    depth -= 1;
  }

  head.next = reverseKGroup(b, k);

  return a;
}

reverseKGroup(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  ),
  2,
);
