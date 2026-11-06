function insert(intervals: number[][], [start, end]: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;
  const n = intervals.length;

  while (i < n && intervals[i][1] < start) {
    result.push(intervals[i]);
    i += 1;
  }

  let currStart = start,
    currEnd = end;
  while (i < n && intervals[i][0] <= currEnd) {
    debugger
    currStart = Math.min(currStart, intervals[i][0]);
    currEnd = Math.max(currEnd, intervals[i][1]);
    i += 1;
  }
  result.push([currStart, currEnd]);

  while (i < n) {
    result.push(intervals[i]);
    i += 1;
  }

  debugger;

  return result;
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
