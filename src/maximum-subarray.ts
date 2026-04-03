function maxSubArray(nums: number[]): number {
  let maxSum = nums[0],
    curSum = 0;

  for (let num of nums) {
    curSum = Math.max(num, num + curSum);
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
