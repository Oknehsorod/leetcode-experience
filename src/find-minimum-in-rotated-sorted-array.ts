function findMin(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const m = Math.floor((r + l) / 2);
    const val = nums[m];
    const rightVal = nums[r];

    if (val >= rightVal) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return nums[l];
}

findMin([3, 4, 5, 1, 2]);
