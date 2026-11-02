function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  // debugger;

  const visited = new Set<number>();
  const visiting = new Set<number>();

  const dfs = (course: number): boolean => {
    // debugger;

    if (visited.has(course)) return false;
    if (visiting.has(course)) return true;

    visiting.add(course);

    for (const nextCourse of graph[course]) {
      if (dfs(nextCourse)) return true;
    }

    visiting.delete(course);
    visited.add(course);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }

  return true;
}

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
);
