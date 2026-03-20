function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((r + l) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[l] <= nums[m]) {
      if (nums[l] <= target && nums[m] >= target) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[r] >= target && nums[m] <= target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
}

//search([1, 3], 2);
//search([3, 5, 1], 3);
//search([4, 5, 6, 7, 8, 1, 2, 3], 8);
//search([4, 5, 6, 7, 0, 1, 2], 0);
search([5, 1, 3], 5);
//search([1, 3], 3);
