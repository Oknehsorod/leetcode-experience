function sortColors(nums: number[]): void {
  let i = 0;
  let lt = 0,
    gt = nums.length - 1;
  const pivot = 1;

  while (i <= gt) {
    const num = nums[i];
    if (num < pivot) {
      [nums[i], nums[lt]] = [nums[lt], nums[i]];
      lt++;
      i++;
    } else if (num > pivot) {
      [nums[i], nums[gt]] = [nums[gt], nums[i]];
      gt--;
    } else {
      i++;
    }
  }

  debugger;
}

/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
