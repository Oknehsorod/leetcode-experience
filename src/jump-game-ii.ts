function jump(nums: number[]): number {
  let result = 0;

  let l = 0,
    r = 0;
  while (r < nums.length - 1) {
    let farthest = 0;
    for (let i = l; i <= r; i += 1) farthest = Math.max(farthest, i + nums[i]);

    l = r + 1;
    r = farthest;

    result += 1;
  }

  return result;
}

jump([2, 3, 1, 1, 4]);
