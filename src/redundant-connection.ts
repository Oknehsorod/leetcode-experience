function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length;

  const parents = Array.from({ length: n + 1 }, (_, i) => i);

  const find = (target: number) => {
    if (parents[target] === target) return target;
    parents[target] = find(parents[target]);
    return parents[target];
  };

  const union = (t1: number, t2: number) => {
    const p1 = find(t1),
      p2 = find(t2);

    if (p1 === p2) return true;

    parents[p1] = p2;
    return false;
  };

  for (const [u, v] of edges) {
    if (union(u, v)) return [u, v];
  }

  return []
}

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);
