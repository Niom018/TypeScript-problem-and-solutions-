// 3. Sum of Unique Elements After Removing Duplicates

export {};

const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

function sumOfUnique(arr: number[]): number {
  const uniqueValues = [...new Set(arr)];
  return uniqueValues.reduce((sum, n) => sum + n, 0);
}

console.log(sumOfUnique(numbers));
