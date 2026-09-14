function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    for (let j = i - 1; j >= 0; j--) {
      // debugger;
      if (nums[j] < num) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // debugger

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([]));
