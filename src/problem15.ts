// 15. Find 5-Mark and 10-Mark Questions

export {};

const totalQuestions: number = 15;
const totalMarks: number = 100;

function findQuestionSplit(questions: number, marks: number): { fiveMark: number; tenMark: number } {
  // x + y = questions
  // 5x + 10y = marks
  // => y = (marks - 5 * questions) / 5
  const tenMark = (marks - 5 * questions) / 5;
  const fiveMark = questions - tenMark;
  return { fiveMark, tenMark };
}

const { fiveMark, tenMark } = findQuestionSplit(totalQuestions, totalMarks);
console.log(`5-mark questions: ${fiveMark}`);
console.log(`10-mark questions: ${tenMark}`);
