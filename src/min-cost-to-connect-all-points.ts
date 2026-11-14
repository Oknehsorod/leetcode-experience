import { Heap } from '@datastructures-js/heap';

const getDistance = (p1: number[], p2: number[]) =>
  Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const heap = new Heap<[number, number]>((a, b) => a[1] - b[1]);
  const visited = new Set<number>();
  let totalCost = 0;

  visited.add(0);

  for (let i = 0; i < n; i++) {
    heap.push([i, getDistance(points[0], points[i])]);
  }

  while (!heap.isEmpty() && visited.size < n) {
    const [curr, weight] = heap.pop()!;

    if (visited.has(curr)) continue;

    visited.add(curr);
    totalCost += weight;

    for (let next = 0; next < n; next++) {
      if (visited.has(next)) continue;
      heap.push([next, getDistance(points[next], points[curr])]);
    }
  }

  return totalCost;
}

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
