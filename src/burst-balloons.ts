function maxCoins(nums: number[]): number {
  const n = nums.length;
  const newNums = [1, ...nums, 1];

  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

  const dfs = (l: number, r: number) => {
    if (l > r) return 0;
    if (dp[l][r] !== 0) return dp[l][r];

    for (let i = l; i <= r; i++) {
      let coins = newNums[l - 1] * newNums[i] * newNums[r + 1];
      coins += dfs(i + 1, r) + dfs(l, i - 1);

      dp[l][r] = Math.max(dp[l][r], coins);
    }

    return dp[l][r];
  };

  debugger;

  return dfs(1, newNums.length - 2);
}

/*

  3  1  5  8
0 3  15 40 40
1 43 
2
3

*/

console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([1, 5]));
