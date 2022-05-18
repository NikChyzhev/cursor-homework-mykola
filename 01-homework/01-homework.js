const apple = 15.678, banana = 123.965, orange = 90.2345;

let maxNum = Math.max(apple, banana, orange);
let minNum = Math.min(apple, banana, orange);
let sumGoods = apple + banana + orange;
let sumRoundDown = Math.floor(apple) + Math.floor(banana) + Math.floor(orange);
let sumRoundHundreds = Math.round((apple+banana+orange)/100)*100;
let evenNumber = Math.floor(sumGoods) % 2 === 0;
let restFrom500 = 500 - sumGoods;
let avPriceRound = Number.parseFloat(sumGoods/3).toFixed(2);
let randomDiscount = Math.random()*100;
let PayAfterRandomDiscountForClient = Number.parseFloat((1-randomDiscount/100)*sumGoods).toFixed(2);
let NetProfit = Number.parseFloat(PayAfterRandomDiscountForClient - sumGoods/2).toFixed(2)



let result = `товари apple = 15.678, banana = 123.965, orange = 90.2345
максимальне число = ${maxNum}
мінімальне число = ${minNum}
вартість всіх товарів = ${sumGoods}
сума цілої частини вартості = ${sumRoundDown}
суму товарів округлену до сотень = ${sumRoundHundreds}
чи є сума всіх товарів парним = ${evenNumber}
Решта з 500 без округлення = ${restFrom500}
середнє значення цін, округлене до другого знаку = ${avPriceRound}
випадкову знижку = ${randomDiscount} %
суму до оплати після знижки = ${PayAfterRandomDiscountForClient}
чистий прибуток, якщо клієнт заплатив зі знижкою = ${NetProfit}
`

console.log(result);
// console.log("I have changed my homework")
