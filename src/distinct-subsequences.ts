function numDistinct(s: string, t: string): number {
  const rows = s.length;
  const columns = t.length;

  const dp = Array.from({ length: rows + 1 }, () =>
    new Array(columns + 1).fill(0),
  );
  dp[0][0] = 1;

  for (let i = 0; i <= rows; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= rows; i++) {
    const r = i - 1;

    for (let j = 1; j <= columns; j++) {
      const c = j - 1;

      if (s[r] === t[c]) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
        continue;
      }

      dp[i][j] = dp[i - 1][j] ?? 0;
    }
    // debugger;
  }

  debugger;

  return dp[rows][columns];
}

/*

  r a b b i t
r 1 0 0 0 0 0
a 1 1 0 0 0 0
b 1 1 1 0 0 0
b 1 1 2 1 0 0
b 1 1 3 3 0 0
i 1 1 3 3 3 0
t 1 1 3 3 3 3
*/

console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct('babgbag', 'bag'));
