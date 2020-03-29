const PHONE_PRICE = 99.99;
const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 99.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = 303.91;
var amount = 0;

function calculationTax(amonut) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

// keep buying phones when you still have a money
while (amount < bank_balance) {
  //buy new phone
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
    // can afford for the accessory
    amount = amount + ACCESSORY_PRICE;
  }
}
// add tax
amount = amount + calculationTax(amount);

console.log('Your purchase: ' + formatAmount(amount));

if (amount > bank_balance) {
  console.log("You can't affort for the purchase.");
}
