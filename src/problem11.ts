// 11. Remove All Vowels from a String

export {};

const text: string = "I am a SQA Engineer";

function removeVowels(str: string): string {
  return str
    .toLowerCase()
    .replace(/[aeiou]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

console.log(removeVowels(text));
