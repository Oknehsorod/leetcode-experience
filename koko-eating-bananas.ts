function minEatingSpeed(piles: number[], h: number): number {
  let l = 1,
    r = Math.max(...piles);

  let result: number = r;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    let val = 0;
    for (const pile of piles) {
      val += Math.ceil(pile / m);
      if (val > h) break;
    }

    if (val > h) {
      l = m + 1;
    } else if (val <= h) {
      r = m - 1;
      result = Math.min(result, m);
    }
  }

  return result;
}

minEatingSpeed([3, 6, 7, 11], 8);
