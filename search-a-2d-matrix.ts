function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }

  return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let l = 0,
    r = matrix.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2),
      first = matrix[m][0],
      last = matrix[m][matrix[m].length - 1];

    if (last < target) {
      l = m + 1;
    } else if (first > target) {
      r = m - 1;
    } else {
      return search(matrix[m], target) > -1;
    }
  }

  return false;
}
