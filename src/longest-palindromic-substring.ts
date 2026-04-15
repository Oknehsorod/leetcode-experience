function longestPalindromeDP(s: string): string {
  const n = s.length;
  if (n <= 1) return s;

  const dp = Array.from({ length: n }, () => new Array(n).fill(false));
  let startIndex = 0,
    delta = 1;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      const currentDelta = j - i,
        isPalindrome = s[i] === s[j] && (currentDelta <= 2 || dp[i + 1][j - 1]);
      dp[i][j] = isPalindrome;
      if (isPalindrome && currentDelta + 1 > delta) {
        startIndex = i;
        delta = currentDelta + 1;
      }
    }
  }

  return s.slice(startIndex, startIndex + delta);
}

function longestPalindrome(s: string): string {
  let startIndex = 0,
    delta = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > delta) {
        startIndex = l;
        delta = r - l + 1;
      }

      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > delta) {
        startIndex = l;
        delta = r - l + 1;
      }

      l--;
      r++;
    }
  }

  return s.substring(startIndex, startIndex + delta);
}

//console.log(longestPalindrome('babad'));
//console.log(longestPalindrome('cbbd'));
//console.log(longestPalindrome('abbcccba'));
console.log(longestPalindrome('bb'));
