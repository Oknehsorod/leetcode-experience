function restoreIpAddresses(s: string): string[] {
  const result: Set<string> = new Set();

  const backtrack = (current: number[], idx: number) => {
    if (current.length === 4 && idx >= s.length) {
      result.add(current.join('.'));
      return true;
    }
    if (idx >= s.length || current.length > 4) return false;

    if (s[idx] === '0') return backtrack([...current, 0], idx + 1);

    for (let i = 1; i <= 3; i++) {
      const element = Number.parseInt(s.slice(idx, idx + i));

      if (element > 255) break;

      backtrack([...current, element], idx + i);
    }

    return false;
  };

  backtrack([], 0);

  return [...result];
}

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('101023'));
