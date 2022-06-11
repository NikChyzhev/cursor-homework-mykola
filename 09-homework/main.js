const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const countries = ['ukraine', 'latvia', 'litva'];
const randCountry = countries[Math.floor(Math.random() * countries.length)];

console.log('Random Country is: ', randCountry);

function getMyTaxes(salary) {
    console.log(`1. My taxes are ${this.tax * salary}`);
}
getMyTaxes.call(eval(randCountry), +prompt(`enter salary`));

function getMiddleTaxes (country) {
    console.log(`2. Average tax is ${(this.tax * this.middleSalary).toFixed(2) }` )
}
getMiddleTaxes.call(eval(randCountry));

function getTotalTaxes (country) {
    console.log(`3. Total taxes are ${(this.tax * this.middleSalary * this.vacancies).toFixed(2) }` )
}
getTotalTaxes.call(eval(randCountry));

function getMySalary(country) {
    const randSalary = (Math.random()*(2000 - 1500) + 1500).toFixed(2);
    const taxCalc = (randSalary * this.tax).toFixed(2);
    const objNew = {
        salary: randSalary,
        taxes: taxCalc,
        profit: (randSalary - taxCalc).toFixed(2),
    };
    console.log(objNew);
};

const mySalary = getMySalary.bind(eval(randCountry));

let timerId = setInterval(mySalary, 10000);
setTimeout(() => clearInterval(timerId), 100000);
