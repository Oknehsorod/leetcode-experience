function mergeTriplets(triplets: number[][], target: number[]): boolean {
  let safeTriplets = triplets;

  for (let i = 0; i < 3; i++) {
    const targetNum = target[i];

    safeTriplets = safeTriplets.filter((t) => t[i] <= targetNum);
  }

  debugger;

  return (
    safeTriplets.some((t) => t[0] === target[0]) &&
    safeTriplets.some((t) => t[1] === target[1]) &&
    safeTriplets.some((t) => t[2] === target[2])
  );
}

console.log(
  mergeTriplets(
    [
      [2, 5, 3],
      [1, 8, 4],
      [1, 7, 5],
    ],
    [2, 7, 5],
  ),
);
