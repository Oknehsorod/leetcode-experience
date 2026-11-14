function findItinerary(tickets: string[][]): string[] {
  const graph = new Map<string, string[]>();

  tickets.forEach(([from, to]) =>
    graph.set(from, [...(graph.get(from) ?? []), to]),
  );

  for (const [, tos] of graph) {
    tos.sort((a, b) => a.localeCompare(b));
  }

  const result: string[] = [];

  const dfs = (airport: string) => {
    const destinations = graph.get(airport);

    while (destinations && destinations.length > 0) {
      const nextAirport = destinations.shift()!;
      dfs(nextAirport);
    }

    result.unshift(airport);
  };

  dfs('JFK');

  debugger;

  return result;
}

console.log(
  findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO'],
  ]),
);
