export const runClassMethods = (
  classToRun: any,
  methods: string[],
  values: unknown[][],
  expected: unknown[] = [],
) => {
  const instance = new classToRun();

  methods.forEach((method, idx) => {
    if (idx === 0) return;
    const expectedValue = expected[idx];
    const result = instance[method](...values[idx]);
    console.log(
      `Run: ${method}(${values[idx].join(', ')}) =>`,
      result,
      ' | ',
      expectedValue,
    );
  });
};
