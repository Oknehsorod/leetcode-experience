function uniquePaths(m: number, n: number): number {
  if (m === 0 || n === 0) return 0;

  const dp = new Array(m).fill(false).map((_) => new Array(n).fill(0));
  dp[0][0] = 1;

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 && y === 0) continue;
      dp[x][y] = (dp[x - 1]?.[y] ?? 0) + (dp[x][y - 1] ?? 0);
    }
  }

  return dp[m - 1][n - 1];
}

console.log(uniquePaths(2, 2));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 7));
