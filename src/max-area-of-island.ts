function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (x: number, y: number): number => {
    if (x < 0 || y < 0 || x >= m || y >= n || visited[x][y] || grid[x][y] === 0) return 0;

    visited[x][y] = true;

    return dfs(x + 1, y) + dfs(x, y + 1) + dfs(x - 1, y) + dfs(x, y - 1) + 1;
  };

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] || grid[i][j] === 0) continue;

      result = Math.max(result, dfs(i, j));
    }
  }

  debugger;

  return result;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
