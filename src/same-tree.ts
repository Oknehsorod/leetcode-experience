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

type OptionalNode = TreeNode | null;

function isSameTreeNonRecursionDFS(p: OptionalNode, q: OptionalNode): boolean {
  const stack: [OptionalNode, OptionalNode][] = [[p, q]];

  while (stack.length > 0) {
    const [a, b] = stack.pop()!;

    if (a === null && b === null) continue;
    if (a?.val !== b?.val) return false;

    stack.push(
      [a?.left ?? null, b?.left ?? null],
      [a?.right ?? null, b?.right ?? null],
    );
  }

  return true;
}

console.log(isSameTree(buildTree([1, 2, 3]), buildTree([1, 2, 3])));
