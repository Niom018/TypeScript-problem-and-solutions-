# TypeScript Programming Assignment — Batch 18

**Student Name:** Niamul Hasan
**Student ID:** NH91974
**Topic:** TypeScript Programming
**Submission Date:** Jul 26, 2026

Google Sheet (all outputs, written sequentially): **[https://docs.google.com/spreadsheets/d/1oRj0puMuyxcv90SZWmR1j24AH4tmPr-y6VXZXWJn5bg/edit?usp=sharing]**

---

## How to Run

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed (v18+ recommended)

### 2. Setup
```bash
git clone <this-repo-url>
cd ts-assignment
npm install
```
This installs the required dev dependencies: `typescript`, `ts-node`, `@types/node`.

### 3. Run a single problem directly (no build step needed)
```bash
npx ts-node src/problem1.ts
```
Replace `problem1.ts` with `problem2.ts`, `problem3.ts`, ... `problem15.ts` to run any specific problem.

### 4. Or compile all files to JavaScript, then run
```bash
npx tsc
node dist/problem1.js
```
`npx tsc` compiles everything in `src/` into `dist/` (per `tsconfig.json`). Then run any compiled file with `node dist/problemN.js`.

### 5. Run all 15 at once (optional, quick check)
```bash
npx tsc
for i in $(seq 1 15); do echo "=== Problem $i ==="; node dist/problem$i.js; echo; done
```

> `node_modules/` and `dist/` are excluded via `.gitignore` and are not pushed to GitHub.

---

## Questions & Expected Output

### 1. Difference Between Maximum and Second Maximum
Given `const numbers: number[] = [11, 7, 2, 15, 6];`, find the difference between the maximum value and the second maximum value.
**Expected Output:** `4`

### 2. Sum of Prime Numbers
Given `const numbers: number[] = [11, 15, 2, 7, 6];`, calculate the sum of all prime numbers in the array.
**Expected Output:** `20`

### 3. Sum of Unique Elements After Removing Duplicates
Given `const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];`, remove duplicate values and calculate the sum of the unique elements.
**Expected Output:** `41`

### 4. Find the Missing Number
Given `const numbers: number[] = [0, 1, 2, 4, 5];`, find the missing number using the formula `n * (n + 1) / 2 - sumOfArray`.
**Expected Output:** `3`

### 5. Count Occurrence of Each Number
Given `const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];`, count the occurrence of each number.
**Expected Output:**
```
1: 1
2: 2
3: 3
4: 4
```

### 6. Return Repetitive Elements
Given `const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];`, return only the elements that appear more than once.
**Expected Output:** `[4, 6]`

### 7. Print Unique Characters from a String
Given `const text: string = "abcaabbcc";`, print all unique characters and count the total number of unique characters.
**Expected Output:**
```
Unique characters: a, b, c
Total unique characters: 3
```

### 8. Print All Permutations of a String
Given `const text: string = "cat";`, print all possible permutations of the string and count the total number of permutations.
**Expected Output:**
```
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
```

### 9. Generate a Random Password
Given `const passwordLength: number = 8;`, generate a random password containing at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.
**Example Output:** `A9@hjs7K`

### 10. Remove All Special Characters
Given `const text: string = "s@atur!day";`, remove all special characters from the string.
**Expected Output:** `saturday`

### 11. Remove All Vowels from a String
Given `const text: string = "I am a SQA Engineer";`, remove all vowels from the string.
**Expected Output:** `m sq ngnr`

### 12. Check Valid Binary Number
Check whether a given string is a valid binary number (contains only `0` and `1`).
- `"1001"` → `true`
- `"2001"` → `false`

### 13. Extract Digits and Calculate Discounted Total
Given a paragraph mentioning a laptop price (85000 tk), a mouse price (2500 tk), and a 15% discount, extract the numeric values and calculate the final cost after discount.
**Expected Output:** `74375 tk`

### 14. Currency Note Breakdown
Given `const amount: number = 546;` and `const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];`, break down the amount into the minimum number of currency notes.
**Expected Output:**
```
500 x 1
20 x 2
5 x 1
1 x 1
```

### 15. Find 5-Mark and 10-Mark Questions
Given `const totalQuestions: number = 15;` and `const totalMarks: number = 100;`, find how many 5-mark and 10-mark questions are needed to make exactly 100 marks.
**Expected Output:**
```
5-mark questions: 10
10-mark questions: 5
```

---

## Project Structure
```
ts-assignment/
├── src/
│   ├── problem1.ts
│   ├── problem2.ts
│   ├── ...
│   └── problem15.ts
├── dist/            (generated after build, gitignored)
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

## Submission Checklist
- [ done] All 15 programs written and tested in VS Code
- [ done] Each output copied sequentially into the Google Sheet (link at top of this README)
- [ done] README updated with the Google Docs/Sheet link
- [ done] Repo pushed to GitHub with `node_modules/` excluded via `.gitignore`
- [ done] GitHub repo URL submitted before Jul 26, 2026, 11:59 PM
