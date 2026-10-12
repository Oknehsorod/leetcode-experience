function missingNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i <= nums.length; i++) {
    const num = nums[i] ?? 0;

    result = result ^ num ^ i;
  }

  return result;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
