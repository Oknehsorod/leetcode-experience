import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];

  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i += 1) {
      const element = queue.shift()!;
      if (i === queueLength - 1) result.push(element.val);

      if (element.left) queue.push(element.left);
      if (element.right) queue.push(element.right);
    }
  }

  return result;
}

rightSideView(buildTree([1, 2, 3, 4, null, null, null, 5]));
