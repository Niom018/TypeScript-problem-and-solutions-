// 10. Remove All Special Characters

export {};

const text: string = "s@atur!day";

function removeSpecialCharacters(str: string): string {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}

console.log(removeSpecialCharacters(text));
