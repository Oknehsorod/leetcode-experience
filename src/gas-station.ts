/*
 1. gas sum should be greater or equal to cost otherwise -1;
 2. If ratio is lower than 1, we shouldn't start from here because tank would have zero or lower value.
 3. if we have only positive ratios, any index can be the answer.

*/

const sum = (array: number[]) => array.reduce((acc, cur) => acc + cur, 0);
function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (sum(gas) < sum(cost)) return -1;

  let total = 0,
    result = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      result = i + 1;
    }
  }

  return result;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3);
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]) === -1);
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]) === 3);
console.log(canCompleteCircuit([6], [5]) === 0);
console.log(canCompleteCircuit([2], [2]) === 0);
