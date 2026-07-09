// 8. Print All Permutations of a String

export {};

const text: string = "cat";

function permute(chars: string[], l: number, results: string[]): void {
  if (l === chars.length - 1) {
    results.push(chars.join(""));
    return;
  }
  for (let i = l; i < chars.length; i++) {
    [chars[l], chars[i]] = [chars[i], chars[l]];
    permute(chars, l + 1, results);
    [chars[l], chars[i]] = [chars[i], chars[l]];
  }
}

function getPermutations(str: string): string[] {
  const results: string[] = [];
  permute(str.split(""), 0, results);
  return results;
}

const permutations = getPermutations(text);
console.log(`Permutations: ${permutations.join(", ")}`);
console.log(`Total permutations: ${permutations.length}`);
