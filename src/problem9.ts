// 9. Generate a Random Password

export {};

const passwordLength: number = 8;

function generatePassword(length: number): string {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const special = "!@#$%^&*";
  const all = upper + lower + digits + special;

  const pick = (chars: string) => chars[Math.floor(Math.random() * chars.length)];

  // Guarantee at least one of each required type
  const required = [pick(upper), pick(lower), pick(digits), pick(special)];
  const remainingLength = Math.max(length - required.length, 0);
  const rest = Array.from({ length: remainingLength }, () => pick(all));

  const passwordChars = [...required, ...rest];

  // Shuffle so the required characters aren't always in the same positions
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
}

console.log(generatePassword(passwordLength));
