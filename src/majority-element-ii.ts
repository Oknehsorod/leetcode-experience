function majorityElement(nums: number[]): number[] {
  if (nums.length <= 0) return [];
  if (nums.length === 1) return [nums[0]];

  let cand1: number | null = null;
  let cand2: number | null = null;
  let cnt1 = 0;
  let cnt2 = 0;

  for (const num of nums) {
    if (num === cand1) {
      cnt1++;
    } else if (num === cand2) {
      cnt2++;
    } else if (cnt1 === 0) {
      cand1 = num;
      cnt1 = 1;
    } else if (cnt2 === 0) {
      cand2 = num;
      cnt2 = 1;
    } else {
      cnt1--;
      cnt2--;
    }
  }

  const threshold = Math.floor(nums.length / 3);
  const result: number[] = [];

  let count1 = 0,
    count2 = 0;

  for (const num of nums) {
    if (num === cand1) count1++;
    if (num === cand2) count2++;
  }

  debugger;

  if (cand1 !== null && count1 > threshold) result.push(cand1);
  if (cand2 !== null && cand2 !== cand1 && count2 > threshold)
    result.push(cand2);

  return result;
}

/*
Time Complexity: O(2n) = O(n)
Space Complexity: O(1)
*/

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([1]));
// console.log(majorityElement([1, 2]));
console.log(majorityElement([2, 2, 1, 3]));
