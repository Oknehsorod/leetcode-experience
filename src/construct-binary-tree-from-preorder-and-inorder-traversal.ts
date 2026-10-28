import { TreeNode } from './utils/TreeNode.ts';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const dfs = (
    rootIdx: number,
    left: number,
    right: number,
  ): TreeNode | null => {
    // debugger;
    if (left > right) return null;

    const root = preorder[rootIdx];
    const node = new TreeNode(root);
    const inorderIdx = inorder.indexOf(root);
    const leftSize = inorderIdx - left;

    node.left = dfs(rootIdx + 1, left, inorderIdx - 1);
    node.right = dfs(rootIdx + leftSize + 1, inorderIdx + 1, right);

    return node;
  };

  return dfs(0, 0, preorder.length - 1);
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

debugger;
