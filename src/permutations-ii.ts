function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const visited: boolean[] = [];

  nums.sort((a, b) => a - b);

  const backtrack = (idx: number, current: number[]) => {
    if (current.length === nums.length) {
      result.push([...current]);
      return true;
    }

    nums.forEach((num, i) => {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]))
        return;

      visited[i] = true;
      current.push(num);
      backtrack(idx + 1, current);
      current.pop();
      visited[i] = false;
    });
  };

  backtrack(0, []);

  return result;
}

permuteUnique([1, 1, 2]);
