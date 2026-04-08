import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1;

  const stack: TreeNode[] = [];
  let current: TreeNode | null = root,
    count = 0;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    count += 1;

    if (count === k) return current?.val;

    current = current.right;
  }

  return -1;
}

console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 1));
console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3));
