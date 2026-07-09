// 13. Extract Digits and Calculate Discounted Total

export {};

const paragraph: string =
  "A Core i7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

function calculateDiscountedTotal(text: string): string {
  // Extract every price written as "<number> tk"
  const priceMatches = [...text.matchAll(/(\d+)\s*tk/g)].map((m) => parseInt(m[1], 10));
  const subtotal = priceMatches.reduce((sum, price) => sum + price, 0);

  // Extract discount percentage written as "<number>%"
  const discountMatch = text.match(/(\d+)\s*%/);
  const discountPercent = discountMatch ? parseInt(discountMatch[1], 10) : 0;

  const finalTotal = subtotal - (subtotal * discountPercent) / 100;
  return `${finalTotal} tk`;
}

console.log(calculateDiscountedTotal(paragraph));
