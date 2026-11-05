class TrieNode {
  public map = new Map<string, TrieNode>();
  public isEnd: boolean = false;
}

class Trie {
  public node = new TrieNode();

  constructor() {}

  insert(word: string): void {
    let current = this.node;
    for (const char of word) {
      if (!current.map.has(char)) {
        current.map.set(char, new TrieNode());
      }
      current = current.map.get(char)!;
    }
    current.isEnd = true;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const m = board.length,
    n = board[0].length;

  const trie = new Trie();

  let maxWordLength = 0;
  words.forEach((word) => {
    trie.insert(word);
    maxWordLength = Math.max(maxWordLength, word.length);
  });

  const resultSet = new Set<string>();

  const dfs = (x: number, y: number, t: TrieNode, word: string) => {
    // debugger;
    if (
      x < 0 ||
      y < 0 ||
      x >= m ||
      y >= n ||
      board[x][y] === '#' ||
      !t.map.has(board[x][y])
    )
      return;

    const char = board[x][y];
    const nextNode = t.map.get(char);
    const currentPath = word + char;

    if (nextNode?.isEnd) {
      resultSet.add(currentPath);
    }

    board[x][y] = '#';

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dX, dY] of deltas) {
      dfs(x + dX, y + dY, nextNode!, currentPath);
    }

    board[x][y] = char;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie.node, '');
    }
  }

  return [...resultSet];
}

console.log(
  findWords(
    [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ],
    ['oath', 'pea', 'eat', 'rain'],
  ),
);
