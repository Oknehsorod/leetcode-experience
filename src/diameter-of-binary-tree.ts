import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;

  let diameter = 0;

  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0;

    const l = dfs(root.left);
    const r = dfs(root.right);

    diameter = Math.max(diameter, l + r);

    return 1 + Math.max(l, r);
  };

  dfs(root);

  return diameter;
}

//diameterOfBinaryTree(buildTree([1, 2, 3, 4, 5]));
//diameterOfBinaryTree(buildTree([1, 2]));
diameterOfBinaryTree(
  buildTree([
    4,
    -7,
    -3,
    null,
    null,
    -9,
    -3,
    9,
    -7,
    -4,
    null,
    6,
    null,
    -6,
    -6,
    null,
    null,
    0,
    6,
    5,
    null,
    9,
    null,
    null,
    -1,
    -4,
    null,
    null,
    null,
    -2,
  ]),
);
