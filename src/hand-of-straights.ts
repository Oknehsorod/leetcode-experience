function isNStraightHand(hand: number[], groupSize: number): boolean {
  const m = hand.length;

  if (m % groupSize !== 0) return false;

  const freqMap = new Map<number, number>();

  hand.forEach((hand) => freqMap.set(hand, (freqMap.get(hand) ?? 0) + 1));

  const keys = [...freqMap.keys()].sort((a, b) => +a - +b);

  while (keys.length > 0) {
    const lastKey = keys[0];
    const count = freqMap.get(lastKey)!;

    for (let i = lastKey; i < lastKey + groupSize; i++) {
      if (!freqMap.has(i)) return false;

      const freq = freqMap.get(i)!;

      if (count > freq) return false;

      const r = freq - count;

      if (r === 0) {
        freqMap.delete(i);
      } else {
        freqMap.set(i, r);
      }
    }

    while (keys.length && !freqMap.has(keys[0])) keys.shift();
  }

  debugger;

  return true;
}

isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
