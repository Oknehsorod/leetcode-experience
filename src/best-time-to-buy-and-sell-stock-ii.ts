function maxProfit(prices: number[]): number {
  const n = prices.length;

  if (n < 2) return 0;

  const dp = Array.from({ length: 2 }, () => new Array(n).fill(-Infinity));

  const dfs = (x: number, y: number, sum: number): number => {
    debugger;

    if (y >= n) return sum;
    if (dp[x][y] !== -Infinity) {
      return sum + dp[x][y];
    }

    const price = prices[y];

    dp[x][y] = Math.max(
      x === 0 ? dfs(1, y + 1, sum - price) : dfs(0, y + 1, sum + price),
      dfs(x, y + 1, sum),
      dp[x][y],
    );

    return dp[x][y];
  };

  for (let i = prices.length - 1; i >= 0; i--) {
    dfs(0, i, 0);
    dfs(1, i, 0);
  }

  debugger;

  return dp[0][0];
}

/*
Time Complexity: O(2n) = O(n) - due cache
Space Complexity: O(2n + 2) = O(n) - n - cache, 2 - call stack
*/

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
