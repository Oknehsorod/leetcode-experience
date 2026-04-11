function rob(nums: number[]): number {
  if (nums.length <= 2) return Math.max(...nums);

  const r = (ns: number[]) => {
    const dp = new Array(ns.length + 1);
    dp[ns.length] = 0;
    dp[ns.length - 1] = ns.at(-1);

    for (let i = ns.length - 2; i >= 0; i -= 1) {
      dp[i] = Math.max(ns[i] + dp[i + 2], dp[i + 1]);
    }

    return dp[0];
  };

  return Math.max(r(nums.slice(0, -1)), r(nums.slice(1)));
}

console.log(rob([3, 2]), rob([2, 3]));
