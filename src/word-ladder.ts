const getNeighbors = (word: string, wordSet: Set<string>): string[] => {
  const neighbors: string[] = [];
  const chars = word.split('');

  for (let i = 0; i < chars.length; i++) {
    const originalChar = chars[i];

    for (let c = 97; c <= 122; c++) {
      const newChar = String.fromCodePoint(c);
      if (newChar === originalChar) continue;

      chars[i] = newChar;
      const neighbor = chars.join('');

      if (wordSet.has(neighbor)) {
        neighbors.push(neighbor);
      }
    }

    chars[i] = originalChar;
  }

  return neighbors;
};

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  let beginSet = new Set<string>([beginWord]);
  let endSet = new Set<string>([endWord]);
  const visited = new Set([beginWord, endWord]);

  let steps = 1;
  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }

    const nextSet = new Set<string>();
    steps++;

    for (const word of beginSet) {
      for (const neighbor of getNeighbors(word, wordSet)) {
        if (endSet.has(neighbor)) return steps;

        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          nextSet.add(neighbor);
        }
      }
    }

    beginSet = nextSet;
  }

  return 0;
}

console.log(
  ladderLength('hit', 'dog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
);
