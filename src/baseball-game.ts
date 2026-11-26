function calPoints(operations: string[]): number {
  const n = operations.length;
  const stack: number[] = [];

  let i = 0;
  while (i < n) {
    const operation = operations[i];

    // debugger;

    const num = Number.parseFloat(operation);

    if (!Number.isNaN(num)) stack.push(num);
    if (operation === 'C') stack.pop();
    if (operation === 'D') stack.push(stack.at(-1)! * 2);
    if (operation === '+') stack.push(stack.at(-1)! + stack.at(-2)!);

    i += 1;
  }

  debugger;

  return stack.reduce((acc, cur) => acc + cur, 0);
}

/*
Time Complexity: O(2n) = O(n)
Space Complexity: O(n)
*/

console.log(calPoints(['5', '2', 'C', 'D', '+']));
