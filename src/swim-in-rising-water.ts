import { Heap } from '@datastructures-js/heap';

function swimInWater(grid: number[][]): number {
  const n = grid.length;
  const heap = new Heap<[number, number, number]>((a, b) => a[0] - b[0]);
  const minWater = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  const deltas = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  heap.push([grid[0][0], 0, 0]);
  minWater[0][0] = grid[0][0];

  while (!heap.isEmpty()) {
    const [cost, x, y] = heap.pop()!;
    debugger;

    if (x === n - 1 && y === n - 1) return cost;

    if (cost > minWater[x][y]) continue;

    for (const [dx, dy] of deltas) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      const nextCost = Math.max(cost, grid[nx][ny]);

      if (nextCost < minWater[nx][ny]) {
        minWater[nx][ny] = nextCost;
        heap.push([nextCost, nx, ny]);
      }
    }
  }

  return 0;
}

console.log(
  swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ]),
);
