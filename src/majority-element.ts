function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}


/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
