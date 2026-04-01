function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  const backtrack = (start: number, current: number[]) => {
    result.push([...current]);

    for (let i = start; i < nums.length; i += 1) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(0, []);

  return result;
}

subsetsWithDup([4, 4, 4, 1, 4]);
