function numIslands(grid: string[][]): number {
  const m = grid.length,
    n = grid[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (x: number, y: number) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= m ||
      y >= n ||
      visited[x][y] ||
      grid[x][y] === '0'
    )
      return;

    visited[x][y] = true;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] || grid[i][j] === '0') continue;

      count += 1;
      dfs(i, j);
    }
  }

  debugger;

  return count;
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]),
);
