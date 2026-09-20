function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  if (m === 0 || n === 0) return 0;

  const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      dp[x][y] =
        text1[x] === text2[y]
          ? 1 + (dp[x - 1]?.[y - 1] ?? 0)
          : Math.max(dp[x - 1]?.[y] ?? 0, dp[x][y - 1] ?? 0);
    }
  }

  return dp[m - 1][n - 1];
}

/*
  a
a 1

  a b c d e
a 1 1 1 1 1
c 1 1 2 2 2
e 1 1 2 2 3

  a b c d e
a 1 1 1 1 1
c 1 
e
*/

console.log(longestCommonSubsequence('a', 'a'));
console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'abc'));
console.log(longestCommonSubsequence('abc', 'def'));
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv'));
