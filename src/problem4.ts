// 4. Find the Missing Number

export {};

const numbers: number[] = [0, 1, 2, 4, 5];

function findMissingNumber(arr: number[]): number {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, val) => sum + val, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber(numbers));
