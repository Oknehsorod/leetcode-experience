function countSubstrings(s: string): number {
  const n = s.length;
  if (n < 0) return 0;
  if (n === 1) return 1;

  const dp = Array.from({ length: n }, () => new Array(n).fill(false));
  let counter = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      const currentDelta = j - i,
        isPalindrome = s[i] === s[j] && (currentDelta <= 2 || dp[i + 1][j - 1]);
      dp[i][j] = isPalindrome;
      if (isPalindrome) counter += 1;
    }
  }

  return counter;
}

countSubstrings('abc');
