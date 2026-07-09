// 6. Return Repetitive Elements

export {};

const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function findRepeats(arr: number[]): number[] {
  const counts: Record<number, number> = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return Object.keys(counts)
    .filter((key) => counts[Number(key)] > 1)
    .map(Number);
}

console.log(findRepeats(numbers));
