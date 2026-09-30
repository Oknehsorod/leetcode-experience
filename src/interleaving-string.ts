function isInterleave(s1: string, s2: string, s3: string): boolean {
  const n = s1.length,
    m = s2.length;

  if (m + n !== s3.length) return false;

  const dp = new Array(n + 1)
    .fill(false)
    .map((_) => new Array(m + 1).fill(false));

  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = s1[i - 1] === s3[i - 1] && dp[i - 1][0];
  }

  for (let j = 1; j <= m; j++) {
    dp[0][j] = s2[j - 1] === s3[j - 1] && dp[0][j - 1];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const idx = i + j - 1;

      dp[i][j] =
        (s3[idx] === s2[j - 1] && dp[i][j - 1]) ||
        (s3[idx] === s1[i - 1] && dp[i - 1][j]);
    }
  }

  debugger;

  return dp[n][m];
}

/*

  d b b c a s2
a f f f f t
a t
b 
c
c

s1
*/

// console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('a', '', 'a'));
