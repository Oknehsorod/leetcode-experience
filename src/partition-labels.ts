function partitionLabels(s: string): number[] {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!map.has(char)) map.set(char, -1);

    map.set(char, Math.max(map.get(char)!, i));
  }

  let anchor = 0,
    longestIdx = 0;

  const result: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    longestIdx = Math.max(longestIdx, map.get(char)!);

    if (i === longestIdx) {
      result.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  debugger;

  return result;
}

// console.log(partitionLabels('ababcbacadefegdehijhklij'));
// console.log(partitionLabels('eccbbbbdec'));
console.log(partitionLabels('caedbdedda'));
