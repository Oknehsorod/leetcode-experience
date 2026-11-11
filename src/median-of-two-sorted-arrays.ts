function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length,
    n = nums2.length;
  const half = Math.floor((m + n + 1) / 2);

  const minNums = m < n ? nums1 : nums2,
    maxNums = minNums === nums1 ? nums2 : nums1;
  const mMin = minNums.length,
    mMax = maxNums.length;

  let left = 0,
    right = mMin;

  while (left <= right) {
    const i = left + Math.floor((right - left) / 2);
    const j = half - i;

    const maxLeftA = i > 0 ? minNums[i - 1] : -Infinity;
    const minRightA = i < mMin ? minNums[i] : Infinity;

    const maxLeftB = j > 0 ? maxNums[j - 1] : -Infinity;
    const minRightB = j < mMax ? maxNums[j] : Infinity;

    debugger;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((mMin + mMax) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  return 0;
}

console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
