function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

//coinChange([1, 2, 5], 11);
//coinChange([2], 3);
coinChange([186, 419, 83, 408], 6249);
