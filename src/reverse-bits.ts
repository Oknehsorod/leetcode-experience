function reverseBits(n: number): number {
  let result = 0;

  let count = 32;
  while (count !== 0) {
    const rightBit = n & 1;
    result = result << 1;
    result = result | rightBit;
    n = n >>> 1;
    count -= 1;
  }

  return result;
}

console.log(reverseBits(43261596));
console.log(reverseBits(2147483644));
