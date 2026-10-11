function isMatch(s: string, p: string): boolean {
  const n = s.length,
    m = p.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(null));
  dp[0][0] = true;

  const dfs = (sIdx: number, pIdx: number): boolean => {
    if (pIdx < 0 || sIdx < 0) return pIdx < 0 && sIdx < 0;
    if (dp[sIdx][pIdx] !== null) return dp[sIdx][pIdx];

    const sChar = s[sIdx - 1] ?? '',
      pChar = p[pIdx - 1] ?? '';

    debugger;

    if (pChar === '*') {
      const prevPChar = p[pIdx - 2];

      if (prevPChar === '.' || prevPChar === sChar) {
        dp[sIdx][pIdx] =
          dfs(sIdx - 1, pIdx) || dfs(sIdx - 1, pIdx - 2) || dfs(sIdx, pIdx - 2);
      } else {
        dp[sIdx][pIdx] = dfs(sIdx, pIdx - 2);
      }
    } else if (pChar === '.') {
      dp[sIdx][pIdx] = dfs(sIdx - 1, pIdx - 1);
    } else {
      dp[sIdx][pIdx] = pChar === sChar && dfs(sIdx - 1, pIdx - 1);
    }

    return dp[sIdx][pIdx];
  };

  dfs(n, m);

  debugger;

  return dp[n][m];
}

/*

  _ a
_ 1 0
a 0 1
a 0 0

*/

// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', 'a*'));
// console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
