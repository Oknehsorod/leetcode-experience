import { buildTree } from './utils/buildTree.ts';
import { TreeNode } from './utils/TreeNode.ts';

function serialize(root: TreeNode | null): string {
  const preorder: string[] = [];

  const dfs = (n: TreeNode | null) => {
    if (n === null) {
      preorder.push('null');
      return;
    }

    preorder.push(n.val.toString());

    dfs(n.left);
    dfs(n.right);
  };

  dfs(root);

  debugger;

  return preorder.join();
}

function deserialize(data: string): TreeNode | null {
  if (data === '|') return null;
  const preorder = data
    .split(',')
    .map((el) => (el === 'null' ? null : Number(el)));

  debugger;

  let index = 0;
  const dfs = (): TreeNode | null => {
    if (index >= preorder.length || preorder[index] === null) {
      index += 1;
      return null;
    }

    const root = preorder[index++];

    const node = new TreeNode(root!);

    node.left = dfs();
    node.right = dfs();

    return node;
  };

  return dfs();
}

const a = serialize(buildTree([1, 2, 3, null, null, 4, 5]));

const b = deserialize(a);

debugger;
