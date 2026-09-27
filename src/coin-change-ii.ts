function change(amount: number, coins: number[]): number {
  if (amount === 0) return 1;

  const n = coins.length;

  const dp = new Array(amount).fill(0).map((_) => new Array(n).fill(0));

  for (let i = 0; i < amount; i++) {
    const target = i + 1;
    for (let j = 0; j < n; j++) {
      const coin = coins[j];
      const c = target - coin;

      dp[i][j] =
        (c === 0 ? 1 : 0) +
        (c > 0 ? (dp[c - 1]?.[j] ?? 0) : 0) +
        (j > 0 ? (dp[i]?.[j - 1] ?? 0) : 0);
    }
  }

  debugger;

  return dp.at(-1)?.at(-1);
}

/*
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
*/

console.log(change(5, [1, 2, 5]));
console.log(change(3, [2]));
console.log(change(10, [10]));
console.log(change(0, [7]));
