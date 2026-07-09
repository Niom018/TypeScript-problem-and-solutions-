// 1. Difference Between Maximum and Second Maximum

export {};

const numbers: number[] = [11, 7, 2, 15, 6];

function maxMinusSecondMax(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => b - a);
  const max = sorted[0];
  const secondMax = sorted[1];
  return max - secondMax;
}

console.log(maxMinusSecondMax(numbers));
