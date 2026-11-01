function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length,
    n = heights[0].length;

  const atlanticVisited: boolean[][] = Array.from({ length: m }, () =>
    new Array(n).fill(false),
  );
  const pacificVisited: boolean[][] = Array.from({ length: m }, () =>
    new Array(n).fill(false),
  );

  const dfs = (
    prevHeight: number,
    x: number,
    y: number,
    visited: boolean[][],
  ) => {
    const currentHeight = heights[x][y];
    if (prevHeight > currentHeight) return;
    if (visited[x][y]) return;

    visited[x][y] = true;

    const newCoords = [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
      [x - 1, y],
    ];

    for (const [newX, newY] of newCoords) {
      if (newX < 0 || newY < 0 || newX >= m || newY >= n) continue;
      dfs(currentHeight, newX, newY, visited);
    }
  };

  for (let i = 0; i < m; i++) dfs(0, i, 0, pacificVisited);
  for (let i = 0; i < n; i++) dfs(0, 0, i, pacificVisited);

  for (let i = 0; i < m; i++) dfs(0, i, n - 1, atlanticVisited);
  for (let i = 0; i < n; i++) dfs(0, m - 1, i, atlanticVisited);

  const result: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (atlanticVisited[i][j] && pacificVisited[i][j]) result.push([i, j]);
    }
  }

  debugger;
  return result;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
);

// console.log(
//   pacificAtlantic([
//     [1, 1],
//     [1, 1],
//     [1, 1],
//   ]),
// );
