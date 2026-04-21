/*
i = 0;
1: "12" -> "1_2" = dp[i + 1];
2: "12" -> "12"  = dp[i + 2];
*/

function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[dp.length - 1] = 1;
  dp[dp.length - 2] = s.endsWith('0') ? 0 : 1;

  for (let i = dp.length - 3; i >= 0; i--) {
    if (s[i] === '0') continue;

    dp[i] =
      Number.parseInt(s[i] + s[i + 1]) <= 26
        ? dp[i + 1] + dp[i + 2]
        : dp[i + 1];
  }

  return dp[0];
}

numDecodings('12');
numDecodings('226');
numDecodings('06');
