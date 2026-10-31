import { buildGraph } from './utils/buildGraph.ts';
import { _Node } from './utils/GraphNode.ts';

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const linkedMap = new Map<number, _Node>();

  const dfs = (n: _Node | null): _Node | null => {
    if (n === null) return null;
    if (linkedMap.has(n?.val)) return linkedMap.get(n.val)!;

    const newNode = new _Node(n.val);
    linkedMap.set(newNode.val, newNode);

    for (const neighbor of n.neighbors) {
      const newNeighbor = dfs(neighbor);

      if (newNeighbor === null) continue;

      newNode.neighbors.push(newNeighbor);
    }

    return newNode;
  };

  return dfs(node);
}

console.log(
  cloneGraph(
    buildGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]),
  ),
);

debugger;
