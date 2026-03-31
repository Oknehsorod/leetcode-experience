function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  const backtrack = (idx: number, current: string) => {
    if (idx === digits.length) {
      result.push(current);
      return;
    }

    const currentLetters = letters[parseInt(digits[idx]) - 2];

    for (const currentLetter of [...currentLetters]) {
      backtrack(idx + 1, current + currentLetter);
    }
  };

  backtrack(0, '');

  return result;
}

letterCombinations('23');
