import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const queue: TreeNode[] = [root];
  const result: number[][] = [];

  while (queue.length > 0) {
    const level: number[] = [],
      queueLength = queue.length;

    for (let i = 0; i < queueLength; i += 1) {
      const element = queue.shift()!;
      level.push(element.val);

      if (element.left) queue.push(element.left);
      if (element.right) queue.push(element.right);
    }

    result.push(level);
  }

  return result;
}

console.log(levelOrder(buildTree([3, 9, 20, null, null, 15, 7])));
