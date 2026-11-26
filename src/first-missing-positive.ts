function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const targetIdx = nums[i] - 1;
      [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
    }
  }

  if (nums[0] !== 1) return 1;

  debugger;

  for (let i = 1; i < n; i++) {
    const prevNum = nums[i - 1];
    const num = nums[i];

    if (prevNum + 1 !== num) return prevNum + 1;
  }

  return n + 1;
}

/*
Time Complexity: O(2n) = O(n)
Space Complexity: O(1)
*/

// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999]));
