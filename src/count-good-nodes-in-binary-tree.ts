import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function goodNodesBFS(root: TreeNode | null): number {
  if (root === null) return 0;

  const queue: [TreeNode, number][] = [[root, root.val]];
  let result: number = 0;

  while (queue.length > 0) {
    const [el, maxValue] = queue.shift()!;

    if (el.val >= maxValue) result += 1;

    if (el.left) queue.push([el.left, Math.max(maxValue, el.val)]);
    if (el.right) queue.push([el.right, Math.max(maxValue, el.val)]);
  }

  return result;
}

function goodNodesDFS(root: TreeNode | null): number {
  if (root === null) return 0;

  let result = 0;
  const dfs = (n: TreeNode | null, currentMax: number) => {
    if (n === null) return;
    if (n.val >= currentMax) result += 1;

    dfs(n.left, Math.max(currentMax, n.val));
    dfs(n.right, Math.max(currentMax, n.val));
  };

  dfs(root, -Infinity);

  return result;
}

goodNodesDFS(buildTree([3, 1, 4, 3, null, 1, 5]));
