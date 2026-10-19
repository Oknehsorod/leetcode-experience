function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length;
  const n = num2.length;
  const pos = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = Number(num1[i]) * Number(num2[j]);

      const p1 = i + j;
      const p2 = i + j + 1;

      const sum = mul + pos[p2];

      pos[p2] = sum % 10;
      pos[p1] += Math.trunc(sum / 10);

      debugger;
    }
  }

  let startIndex = 0;
  while (startIndex < pos.length && pos[startIndex] === 0) {
    startIndex++;
  }

  return pos.slice(startIndex).join('');
}

// console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
