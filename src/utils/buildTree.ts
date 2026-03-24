import { TreeNode } from './TreeNode.ts';

export function buildTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];

  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (!current) continue;

    // Left child
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]!);
      queue.push(current.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}
