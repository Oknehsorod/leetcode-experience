function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n * 2);

  for (let i = 0; i < n; i += 1) {
    result[i] = nums[i];
    result[n + i] = nums[i];
  }

  return result;
}

/*
Time Complexity: O(N)
Space Complexity: O(2N) = O(N)
*/

console.log(getConcatenation([1, 2, 1]));
