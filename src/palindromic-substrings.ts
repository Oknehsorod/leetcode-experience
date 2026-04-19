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

function countSubstringsSlidingWindow(s: string): number {
  let result = 0;

  const expand = (from: number, to: number) => {
    while (from >= 0 && to < s.length && s[from] === s[to]) {
      result += 1;
      from--;
      to++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return result;
}

function countSubstringsManacher(s: string): number {
  let result = 0;

  const t = `#${s.split('').join('#')}#`;
  const n = t.length;
  const radiuses = new Array(n).fill(0);

  let l = 0,
    r = 0;

  for (let i = 0; i < n; i++) {
    radiuses[i] = i < r ? Math.min(r - i, radiuses[l + (r - i)]) : 0;

    while (
      i - radiuses[i] - 1 >= 0 &&
      i + radiuses[i] + 1 < n &&
      t[i - radiuses[i] - 1] === t[i + radiuses[i] + 1]
    )
      radiuses[i] += 1;

    if (i + radiuses[i] > r) {
      r = i + radiuses[i];
      l = i - radiuses[i];
    }
  }

  for (let i = 0; i < n; i += 1) {
    result += Math.floor((radiuses[i] + 1) / 2);
  }

  return result;
}

countSubstringsManacher('aaa');
