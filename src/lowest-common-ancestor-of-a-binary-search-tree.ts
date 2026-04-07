import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

const bst = (root: TreeNode | null, value: number): (TreeNode | null)[] => {
  if (!root || root?.val === value) return [root];

  return [root, ...bst(value > root.val ? root.right : root.left, value)];
};

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === null || p === null || q === null) return null;

  const a = bst(root, p?.val);
  const b = new Set(bst(root, q?.val));

  for (let i = a.length - 1; i >= 0; i -= 1) {
    const el = a[i];
    if (b.has(el)) return el;
  }

  return root;
}

// lowestCommonAncestor(
//   buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
//   new TreeNode(2),
//   new TreeNode(8),
// );

console.log(
  lowestCommonAncestor(
    buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    new TreeNode(2),
    new TreeNode(4),
  ),
);

// console.log(
//   lowestCommonAncestor(
//     buildTree([3, 1, 4, null, 2]),
//     new TreeNode(2),
//     new TreeNode(3),
//   ),
// );
