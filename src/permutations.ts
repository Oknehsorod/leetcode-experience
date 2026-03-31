function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (idx: number, current: number[]) => {
    if (current.length === nums.length) {
      result.push([...current]);
      return true;
    }

    for (const num of nums) {
      if (current.includes(num)) continue;
      backtrack(idx + 1, [...current, num]);
    }
  };

  backtrack(0, []);

  return result;
}

permute([1, 2, 3]);
