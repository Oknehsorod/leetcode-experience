function longestIncreasingPath(matrix: number[][]): number {
  const n = matrix.length;
  const m = matrix[0]?.length;

  if (n === 0) return 0;

  const dp = new Array(n).fill(0).map((_) => new Array(m).fill(0));
  let max = 1;

  const dfs = (x: number, y: number): number => {
    if (dp[x][y] !== 0) return dp[x][y];

    // debugger;

    let tmp = 1;
    const variants = [
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
      [x, y - 1],
    ];
    for (const [i, j] of variants) {
      if (
        i < 0 ||
        j < 0 ||
        i >= n ||
        j >= m ||
        matrix[i][j] <= matrix[x][y]
      )
        continue;

      tmp = Math.max(1 + dfs(i, j), tmp);
    }

    dp[x][y] = tmp;

    return tmp;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }

  debugger;

  return max;
}

/*
  0 1 2
0 1 1 2
1 2 2 1
2 3 4 2

  0 1 2
0 1 2 3
1 1 
2
*/

// console.log(
//   longestIncreasingPath([
//     [9, 9, 4],
//     [6, 6, 8],
//     [2, 1, 1],
//   ]),
// );

// console.log(
//   longestIncreasingPath([
//     [3, 4, 5],
//     [3, 2, 6],
//     [2, 2, 1],
//   ]),
// );

/*

  0 1 2
0 1 2 3
1 2 2 4
2 2 4 6


*/

console.log(
  longestIncreasingPath([
    [7, 8, 9],
    [9, 7, 6],
    [7, 2, 3],
  ]),
);

// console.log(longestIncreasingPath([[1]]));
