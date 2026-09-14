function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  const backtrack = (path: string[], idx: number) => {
    const remainingParts = 4 - path.length;
    const remainingLength = s.length - idx;
    // debugger;

    if (
      remainingLength < remainingParts ||
      remainingLength > remainingParts * 3
    )
      return false;

    if (path.length === 4 && idx >= s.length) {
      result.push(path.join('.'));
      return true;
    }
    if (idx >= s.length || path.length >= 4) return false;

    if (s[idx] === '0') return backtrack([...path, '0'], idx + 1);

    for (let i = 1; i <= 3 && idx + i <= s.length; i++) {
      const slice = s.slice(idx, idx + i);

      if (Number.parseInt(slice) > 255) break;

      path.push(slice);

      backtrack(path, idx + i);

      path.pop();
    }

    return false;
  };

  backtrack([], 0);

  return result;
}

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('101023'));
