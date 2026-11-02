function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  // debugger;

  const visited = new Set<number>();
  const visiting = new Set<number>();

  const result: number[] = [];

  const dfs = (course: number): boolean => {
    if (visited.has(course)) return false;
    if (visiting.has(course)) return true;

    visiting.add(course);

    for (const nextCourse of graph[course]) {
      if (dfs(nextCourse)) return true;
    }

    visiting.delete(course);
    visited.add(course);

    result.push(course);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
      if (dfs(i)) return [];
    }
  }

  return result.toReversed();
}

console.log(findOrder(2, []));
// console.log(findOrder(2, [[1, 0]]));
// console.log(
//   findOrder(2, [
//     [1, 0],
//     [0, 1],
//   ]),
// );
