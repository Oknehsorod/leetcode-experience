const isPalindrome = (str: string) => {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }

  return true;
};

function partition(s: string): string[][] {
  const result: string[][] = [];

  const backtrack = (idx: number, current: string[]) => {
    if (idx === s.length) {
      result.push([...current]);
      return true;
    }

    for (let i = s.length; i > idx; i -= 1) {
      const str = s.slice(idx, i);
      if (isPalindrome(str)) {
        current.push(str);
        backtrack(i, current);
        current.pop();
      }
    }
  };

  backtrack(0, []);

  return result;
}

partition('cdd');
