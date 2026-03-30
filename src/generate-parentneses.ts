function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const backtrack = (str: string, o: number, c: number) => {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (o > n) return;
    if (c > n) return;

    if (o - c > 0) backtrack(str + ')', o, c + 1);
    if (o < n) backtrack(str + '(', o + 1, c);
  };

  backtrack('', 0, 0);

  return result;
}

generateParenthesis(3);
