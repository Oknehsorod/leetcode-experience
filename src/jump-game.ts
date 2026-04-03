function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = goal - 1; i >= 0; i -= 1) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}

canJump([2, 3, 1, 5, 4]);
