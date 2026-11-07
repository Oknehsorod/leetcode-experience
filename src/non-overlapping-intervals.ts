function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let removeCount = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    debugger

    if (currStart < prevEnd) {
      removeCount++;
    } else {
      prevEnd = currEnd;
    }
  }

  debugger;
  return removeCount;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);
