// 5. Count Occurrence of Each Number

export {};

const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countOccurrences(arr: number[]): Record<number, number> {
  const counts: Record<number, number> = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}

const result = countOccurrences(numbers);
for (const key of Object.keys(result).sort((a, b) => Number(a) - Number(b))) {
  console.log(`${key}: ${result[Number(key)]}`);
}
