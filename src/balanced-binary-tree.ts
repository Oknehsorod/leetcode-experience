import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (n: TreeNode | null): number => {
    if (n === null) return 0;

    const leftHeight = dfs(n.left);
    if (leftHeight === -1) return -1;

    const rightHeight = dfs(n.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };

  debugger;

  return dfs(root) !== -1;
}

isBalanced(buildTree([3, 9, 20, null, null, 15, 7]));
