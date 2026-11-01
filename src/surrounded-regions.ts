function solve(board: string[][]): void {
  const m = board.length,
    n = board[0].length;

  const visited: boolean[][] = Array.from({ length: m }, () =>
    new Array(n).fill(false),
  );

  const dfs = (x: number, y: number) => {
    const val = board[x][y];

    if (val === 'X') return;
    if (visited[x][y]) return;

    visited[x][y] = true;

    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dX, dY] of deltas) {
      const newX = x + dX,
        newY = y + dY;

      if (newX < 0 || newY < 0 || newX >= m || newY >= n) continue;

      dfs(newX, newY);
    }
  };

  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') dfs(i, 0);
    if (board[i][n - 1] === 'O') dfs(i, n - 1);
  }

  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') dfs(0, i);
    if (board[m - 1][i] === 'O') dfs(m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && board[i][j] === 'O') board[i][j] = 'X';
    }
  }

  debugger;
}

// console.log(
//   solve([
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
//   ]),
// );

console.log(
  solve([
    ['O', 'O'],
    ['O', 'O'],
  ]),
);
