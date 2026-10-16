function plusOne(digits: number[]): number[] {
  const result: number[] = [];
  let nextDigit = 0;

  let i = digits.length - 1;
  while (i >= 0 || nextDigit !== 0) {
    const a = i === digits.length - 1 ? 1 : 0;
    const digit = (digits[i] ?? 0) + a + nextDigit;

    debugger;

    if (digit >= 10) {
      result.push(digit % 10);
      nextDigit = Math.trunc(digit / 10);
    } else {
      result.push(digit);
      nextDigit = 0;
    }
    i--;
  }

  return result.reverse();
}

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9]));
