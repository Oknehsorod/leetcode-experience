function readBinaryWatch(turnedOn: number): string[] {
  const result: string[] = [];
  const digits = [1, 2, 4, 8, 16, 32];

  const backtrack = (
    idx: number,
    h: number,
    m: number,
    hUsed: number,
    mUsed: number,
  ) => {
    const totalUsed = hUsed + mUsed;

    if (h > 11 || m > 59) return;
    if (totalUsed > turnedOn) return;

    if (totalUsed === turnedOn) {
      result.push(`${h}:${m.toString().padStart(2, '0')}`);
      return;
    }
    if (idx >= digits.length) return;

    // Only hours added
    if (idx <= 3) backtrack(idx + 1, h + digits[idx], m, hUsed + 1, mUsed);

    // Only minutes added
    backtrack(idx + 1, h, m + digits[idx], hUsed, mUsed + 1);

    // Hours and minutes added
    if (idx <= 3)
      backtrack(
        idx + 1,
        h + digits[idx],
        m + digits[idx],
        hUsed + 1,
        mUsed + 1,
      );

    // Nothing added
    backtrack(idx + 1, h, m, hUsed, mUsed);
  };

  backtrack(0, 0, 0, 0, 0);

  return result;
}

readBinaryWatch(1);
