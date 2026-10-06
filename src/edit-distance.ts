function minDistance(word1: string, word2: string): number {
  const rows = word1.length,
    cols = word2.length;

  const dp = Array.from({ length: rows + 1 }, () =>
    new Array(cols + 1).fill(0),
  );

  dp[0][0] = 0;

  for (let i = 1; i <= rows; i++) dp[i][0] = 1 + dp[i - 1][0];
  for (let j = 1; j <= cols; j++) dp[0][j] = 1 + dp[0][j - 1];

  for (let i = 1; i <= rows; i++) {
    const r = i - 1;
    for (let j = 1; j <= cols; j++) {
      const c = j - 1;

      if (word1[r] === word2[c]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  debugger;

  return dp.at(-1)?.at(-1) ?? 0;
}

/*

  _ r o s
_ 0 1 2 3
h 1 1 2 3
o 2 2 1 3
r 3 _ _ _
s 4 _ 3 2
e 5 4 4 3

  _ a b
_ 0 1 2
a 1 0 

*/

console.log(minDistance('a', 'ab'));
console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
