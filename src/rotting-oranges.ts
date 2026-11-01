function orangesRotting(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  const queue: [number, number, number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 || grid[i][j] === 1) continue;

      queue.push([i, j, 0]);
    }
  }

  let globalMaxTime = 0;
  while (queue.length > 0) {
    const [x, y, time] = queue.shift()!;

    if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0 || visited[x][y])
      continue;

    globalMaxTime = Math.max(globalMaxTime, time);

    visited[x][y] = true;
    grid[x][y] = 2;

    const deltas = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ];

    for (const [xDelta, yDelta] of deltas) {
      queue.push([x + xDelta, y + yDelta, time + 1]);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return globalMaxTime;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
