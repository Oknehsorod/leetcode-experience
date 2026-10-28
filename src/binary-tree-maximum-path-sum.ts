import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function maxPathSum(root: TreeNode | null): number {
  let globalSum = -Infinity;

  const dfs = (n: TreeNode | null): number => {
    if (n === null) return 0;

    let leftSum = dfs(n.left),
      rightSum = dfs(n.right);

    leftSum = Math.max(leftSum, 0);
    rightSum = Math.max(rightSum, 0);

    const sum = leftSum + rightSum + n.val;
    const newLocalSum = Math.max(leftSum, rightSum);

    globalSum = Math.max(globalSum, sum);

    return n.val + newLocalSum;
  };

  dfs(root);

  return globalSum;
}

console.log(maxPathSum(buildTree([1, 2, 3])));

console.log(maxPathSum(buildTree([-10, 9, 20, null, null, 15, 7])));
