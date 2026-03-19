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

  let counter = 0,
    node: ListNode | null = head;
  while (node && counter < k) {
    node = node.next ?? null;
    counter += 1;
  }

  if (counter < k) return head;

  let prev: ListNode | null = null,
    curr = head;
  for (let i = 0; i < k; i++) {
    const next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next!;
  }

  head.next = reverseKGroup(curr, k);

  return prev;
}

reverseKGroup(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  ),
  2,
);
