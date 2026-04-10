function minCostClimbingStairs(cost: number[]): number {
  if (cost.length <= 2) return Math.min(...cost);

  const dp = new Array(cost.length + 1);
  dp[cost.length] = 0;
  dp[cost.length - 1] = cost.at(-1);

  for (let i = cost.length - 2; i >= 0; i--) {
    dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
  }

  return Math.min(dp[0], dp[1]);
}

//minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
