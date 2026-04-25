function maxProduct(nums: number[]): number {
  let result: number = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    result = Math.max(result, nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      current *= nums[j];
      result = Math.max(result, current);
    }
  }

  debugger;

  return result;
}

maxProduct([2, 3, -2, 4]);
maxProduct([-2, 0, -1]);
maxProduct([-2]);
