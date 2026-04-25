function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[dp.length - 1] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
        if (dp[i]) break;
      }
    }
  }

  debugger;

  return dp[0];
}

//console.log(wordBreak('leetcode', ['leet', 'code']));
//console.log(wordBreak('applepenapple', ['apple', 'pen']));
//console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('cars', ['car', 'ca', 'rs']));
