function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graph = new Map<number, [number, number][]>();
  for (let i = 0; i <= n; i++) graph.set(i, []);

  for (const [u, v, w] of flights) graph.get(u)!.push([v, w]);

  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;
  let queue = [src];

  for (let steps = 0; steps <= k; steps++) {
    const nextPrices = [...prices];
    const nextQueueSet = new Set<number>();

    for (const u of queue) {
      if (!graph.has(u)) continue;

      for (const [v, weight] of graph.get(u)!) {
        if (prices[u] + weight < nextPrices[v]) {
          nextPrices[v] = prices[u] + weight;
          nextQueueSet.add(v);
        }
      }
    }

    prices = nextPrices;
    queue = Array.from(nextQueueSet);
  }

  debugger;
  return prices[dst] === Infinity ? -1 : prices[dst];
}

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1,
  ),
);
