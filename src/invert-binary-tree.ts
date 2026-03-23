class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const el = stack.pop()!;

    [el.left, el.right] = [el.right, el.left];

    if (el.left !== null) stack.push(el.left);
    if (el.right !== null) stack.push(el.right);
  }

  return root;
}
