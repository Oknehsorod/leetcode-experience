/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let a = l1,
    b = l2,
    num = 0,
    tmp = new ListNode(),
    result = tmp;

  while (a !== null || b !== null) {
    const sum = (a?.val ?? 0) + (b?.val ?? 0) + num;
    tmp.val = sum >= 10 ? sum - 10 : sum;
    num = sum >= 10 ? 1 : 0;

    a = a?.next ?? null;
    b = b?.next ?? null;

    if (a === null && b === null) break;

    tmp.next = new ListNode();
    tmp = tmp.next;
  }

  if (num === 1) tmp.next = new ListNode(1);

  return result;
}
