function maxProfit(prices: number[]): number {
  enum Action {
    Hold,
    Sold,
    Rest,
  }

  const n = prices.length;
  const dp = new Array(3).fill(0).map((_) => new Array(n).fill(0));

  dp[Action.Hold][0] = -prices[0];
  dp[Action.Sold][0] = 0;
  dp[Action.Rest][0] = 0;

  for (let day = 1; day < n; day++) {
    dp[Action.Hold][day] = Math.max(
      dp[Action.Hold][day - 1],
      dp[Action.Rest][day - 1] - prices[day],
    );

    dp[Action.Sold][day] = dp[Action.Hold][day - 1] + prices[day];

    dp[Action.Rest][day] = Math.max(
      dp[Action.Sold][day - 1],
      dp[Action.Rest][day - 1],
    );
  }

  return Math.max(dp[Action.Sold][n - 1], dp[Action.Rest][n - 1]);
}

// [1]
/*
  1 2  3 0 2
b - -2 -3
s 0 0 1 
c 0 0 0 1 
*/

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1, 2, 4]));
console.log(maxProfit([1]));
