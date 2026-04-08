import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) return true;

  let result = true;

  const dfs = (n: TreeNode, min: number, max: number) => {
    if (n === null) return;
    if (n.val >= max || n.val <= min) {
      result = false;
      return;
    }

    if (n.left) dfs(n.left, min, n.val);
    if (n.right) dfs(n.right, n.val, max);
  };

  dfs(root, -Infinity, Infinity);

  return result;
}

console.log(isValidBST(buildTree([2, 1, 3])));
console.log(isValidBST(buildTree([5, 4, 6, null, null, 3, 7])));
console.log(isValidBST(buildTree([2, 2, 2])));
