import { runClassMethods } from './utils/runClassMethods.ts';

class TrieNode {
  public isEnd: boolean = false;
  public map = new Map<string, TrieNode>();
}

class WordDictionary {
  private root = new TrieNode();

  constructor() {}

  addWord(word: string): void {
    let current = this.root;

    for (const char of word) {
      if (!current.map.has(char)) {
        current.map.set(char, new TrieNode());
      }

      current = current.map.get(char)!;
    }

    current.isEnd = true;
  }

  search(word: string, current = this.root): boolean {
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!current.map.has(char) && char !== '.') return false;

      if (char === '.') {
        for (const childNode of current.map.values()) {
          if (this.search(word.slice(i + 1), childNode)) return true;
        }
        return false;
      }

      current = current.map.get(char)!;
    }

    return current.isEnd;
  }
}

runClassMethods(
  WordDictionary,
  [
    'WordDictionary',
    'addWord',
    'addWord',
    'addWord',
    'search',
    'search',
    'search',
    'search',
  ],
  [[], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..']],
);
