import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1;

  let result = -1,
    count = 0;
  const dfs = (n: TreeNode | null) => {
    if (n === null) return;

    dfs(n.left);

    count += 1;
    if (count === k) result = n.val;

    dfs(n.right);
  };

  dfs(root);

  return result;
}

console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 1));
console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3));
