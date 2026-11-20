const quickSortRange = (nums: number[], left: number, right: number) => {
  if (left >= right) return;

  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
  const pivot = nums[pivotIndex];

  let lt = left;
  let i = left;
  let gt = right;

  while (i <= gt) {
    debugger;
    if (nums[i] < pivot) {
      [nums[lt], nums[i]] = [nums[i], nums[lt]];
      lt++;
      i++;
    } else if (nums[i] > pivot) {
      [nums[i], nums[gt]] = [nums[gt], nums[i]];
      gt--;
    } else {
      i++;
    }
  }

  quickSortRange(nums, left, lt - 1);
  quickSortRange(nums, gt + 1, right);
};

function sortArray(nums: number[]): number[] {
  const n = nums.length;

  if (n < 2) return nums;

  quickSortRange(nums, 0, n - 1);

  return nums;
}

/*
Time Complexity: O(n log n)
Space Complexity: O(log n) - with call stack, O(1) - without.
*/

console.log(sortArray([5, 2, 3, 1]));
