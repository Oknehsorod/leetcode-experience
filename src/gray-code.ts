function differOneBit(a: number, b: number) {
  let x = a ^ b;

  if (x === 0) return false;

  if ((x & (x - 1)) === 0) return true;

  return false;
}

function checkBinary(current: number[]) {
  for (let i = 0; i < current.length; i++) {
    const nextI = (i + 1) % current.length;
    const element = current[i];

    if (!differOneBit(element, current[nextI])) return false;
  }

  return true;
}

function grayCode(n: number): number[] {
  let result: number[] = [];
  const max = Math.pow(2, n);

  const backtrack = (current: number[], used: Set<number>) => {
    if (current.length === max && checkBinary(current)) {
      result = current;
      return true;
    }

    for (let i = 1; i < max; i++) {
      if (used.has(i)) continue;
      used.add(i);
      const result = backtrack([...current, i], used);
      if (result) return true;
      used.delete(i);
    }

    return false;
  };

  backtrack([0], new Set([0]));

  return result;
}

console.log(grayCode(2));
console.log(grayCode(1));
// console.log(grayCode(4)); -- slow
