function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[k] = num;
      k += 1;
    }
  }

  debugger;

  return k;
}

/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

// console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
