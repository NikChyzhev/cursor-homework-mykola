const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const countries = [ukraine, latvia, litva];
const countryNames = ['Україна', 'Латвія', 'Литва'];
const randCountryIndex = Math.floor(Math.random() * countries.length);

console.log('Random Country is: ', countryNames[randCountryIndex]);

function getMyTaxes(salary) {
    console.log(`1. My taxes are ${this.tax * salary}`);
}
getMyTaxes.call(countries[randCountryIndex], +prompt(`enter salary`));

function getMiddleTaxes (country) {
    console.log(`2. Average tax is ${(this.tax * this.middleSalary).toFixed(2) }` )
}
getMiddleTaxes.call(countries[randCountryIndex]);

function getTotalTaxes (country) {
    console.log(`3. Total taxes are ${(this.tax * this.middleSalary * this.vacancies).toFixed(2) }` )
}
getTotalTaxes.call(countries[randCountryIndex]);

function getMySalary(country) {
    const loggerInfo = () => {
        const randSalary = (Math.random()*(2000 - 1500) + 1500).toFixed(2);
        const taxCalc = (randSalary * this.tax).toFixed(2);
        const objNew = {
            salary: randSalary,
            taxes: taxCalc,
            profit: (randSalary - taxCalc).toFixed(2),
        };
        console.log(objNew);
    };
    loggerInfo();
    
    let timerId = setInterval(loggerInfo, 10000);
    setTimeout(() => clearInterval(timerId), 100000);
};

const mySalary = getMySalary.call(countries[randCountryIndex]);


