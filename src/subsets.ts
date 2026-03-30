function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (index: number, path: number[]) => {
    if (index === nums.length) {
      result.push(path);
      return;
    }

    const num = nums[index];

    backtrack(index + 1, [...path, num]);
    backtrack(index + 1, path);
  };

  backtrack(0, []);

  return result;
}

subsets([1, 2, 3]);
