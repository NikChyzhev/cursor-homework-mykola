const APPLE = 15.678, BANANA = 123.965, ORANGE = 90.2345;

const maxNum = Math.max(APPLE, BANANA, ORANGE);
const minNum = Math.min(APPLE, BANANA, ORANGE);
const sumGoods = APPLE + BANANA + ORANGE;
const sumRoundDown = Math.floor(APPLE) + Math.floor(BANANA) + Math.floor(ORANGE);
const sumRoundHundreds = Math.round(sumGoods/100)*100;
const evenNumber = Math.floor(sumGoods) % 2 === 0;
const restFrom500 = 500 - sumGoods;
const avPriceRound = Number.parseFloat(sumGoods / 3).toFixed(2);
const randomDiscount = Math.random() * 100;
const PayAfterRandomDiscountForClient = Number.parseFloat((1 - randomDiscount / 100) * sumGoods).toFixed(2);
const NetProfit = Number.parseFloat(sumGoods/2 - randomDiscount/100 * sumGoods).toFixed(2)



console.log(`товари apple = ${APPLE}, banana = ${BANANA}, orange = ${ORANGE}`);
console.log(`максимальне число = ${maxNum}`);
console.log(`мінімальне число = ${minNum}`);
console.log(`вартість всіх товарів = ${sumGoods}`);
console.log(`сума цілої частини вартості = ${sumRoundDown}`);
console.log(`суму товарів округлену до сотень = ${sumRoundHundreds}`);
console.log(`чи є сума всіх товарів парним = ${evenNumber}`);
console.log(`Решта з 500 без округлення = ${restFrom500}`);
console.log(`середнє значення цін, округлене до другого знаку = ${avPriceRound}`);
console.log(`випадкову знижку = ${randomDiscount} %`);
console.log(`суму до оплати після знижки = ${PayAfterRandomDiscountForClient}`);
console.log(`чистий прибуток, якщо клієнт заплатив зі знижкою = ${NetProfit}`);

// console.log("I have changed my homework")
