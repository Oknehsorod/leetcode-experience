function subarraySum(nums: number[], k: number): number {
  const prefixCount = new Map<number, number>([[0, 1]]);
  let currentSum = 0;
  let result = 0;

  for (const num of nums) {
    currentSum += num;
    const needed = currentSum - k;

    if (prefixCount.has(needed)) {
      result += prefixCount.get(needed)!;
    }

    prefixCount.set(currentSum, (prefixCount.get(currentSum) ?? 0) + 1);
  }

  debugger;

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

// console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
// console.log(subarraySum([1, 2, 1, 2, 1], 3));
