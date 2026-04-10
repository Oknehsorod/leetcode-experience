function rob(nums: number[]): number {
  const dp = new Array(nums.length + 1);
  dp[nums.length] = 0;
  dp[nums.length - 1] = nums.at(-1);

  for (let i = nums.length - 2; i >= 0; i -= 1) {
    dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
  }

  return dp[0];
}

rob([1, 2, 3, 1]);
