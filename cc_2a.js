// Coding Challenge 00

const productName = "Apple Headphones"
let costPerUnit = 70.00;
let basePrice = 130.00;
let discountRate = 0.25;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 1200

let discountedPrice = basePrice * (1-discountRate);
let finalPriceWithTax = discountedPrice *  (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Apple Headphones")
console.log ("Discounted Price: $" + discountedPrice);
console.log ("Final Price with Tax: $" + finalPriceWithTax);
console.log ("Profit Per Unit: $" + profitPerUnit);
console.log ("Break-Even Units: " +  breakEvenUnits);
console.log (isProfitablePerUnit || 0)