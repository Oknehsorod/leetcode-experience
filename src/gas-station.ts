/*
 1. gas sum should be greater or equal to cost otherwise -1;
 2. If ratio is lower than 1, we shouldn't start from here because tank would have zero or lower value.
 3. if we have only positive ratios, any index can be the answer.

*/

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const stack: number[] = [],
    n = gas.length;
  let gasSum = 0,
    costSum = 0;

  for (let i = 0; i < gas.length; i++) {
    gasSum += gas[i];
    costSum += cost[i];
    if (gas[i] / cost[i] >= 1) stack.push(i);
  }

  if (gasSum < costSum) return -1;
  if (stack.length === n) return 0;

  while (stack.length > 0) {
    const start = stack.pop()!;

    let i = start,
      tank = 0;

    do {
      tank += gas[i] - cost[i];
      if (tank < 0) break;
      i = (i + 1) % n;
    } while (i !== start);

    if (i === start) return start;
  }

  return -1;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3);
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]) === -1);
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]) === 3);
console.log(canCompleteCircuit([6], [5]) === 0);
console.log(canCompleteCircuit([2], [2]) === 0);
