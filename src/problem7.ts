// 7. Print Unique Characters from a String

export {};

const text: string = "abcaabbcc";

function uniqueCharacters(str: string): string[] {
  return [...new Set(str.split(""))];
}

const unique = uniqueCharacters(text);
console.log(`Unique characters: ${unique.join(", ")}`);
console.log(`Total unique characters: ${unique.length}`);
