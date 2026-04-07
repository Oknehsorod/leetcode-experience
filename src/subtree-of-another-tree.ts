import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p?.val !== q?.val) return false;

  return (
    isSameTree(p?.left ?? null, q?.left ?? null) &&
    isSameTree(p?.right ?? null, q?.right ?? null)
  );
}

function isSubtree(
  root: TreeNode | null = null,
  subRoot: TreeNode | null = null,
): boolean {
  if (root === null || subRoot === null) return false;
  if (root?.val === subRoot?.val && isSameTree(root, subRoot)) return true;

  return isSubtree(root?.left, subRoot) || isSubtree(root?.right, subRoot);
}

console.log(isSubtree(buildTree([3, 4, 5, 1, 2]), buildTree([4, 1, 2])));
