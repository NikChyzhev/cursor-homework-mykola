function getMaxDigit(number) {
    const arrayFromNumber = Array.from(String(number));
    return Math.max(...arrayFromNumber);
}
console.log(`max number in 349862 is ${getMaxDigit(349862)}`)

function getNumPower(num, power) {
    let numPow = num;
    if (power >= 2){        
        for (i = 2; i <= power; i++) {
        numPow = numPow * num;
        }
    }
    return numPow;
}
console.log(`number 2 in power 3 = ${getNumPower(2, 3)}`);

function getNameFirstUperRestLower (name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(`Name in correct form is ${getNameFirstUperRestLower('iVaN')}`);

function getNetSalary(grossSalary){
    return Math.round(grossSalary * 0.805)
}
console.log(`Net salary of 1.000 is ${getNetSalary(1000)}`)

function getRandomNumber(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}
console.log(`Randon number from 1 to 10 is ${getRandomNumber(1, 10)}`);

function countLetter(leter, text) {
    let counter = 0;
    const textLower = text.toLowerCase();
    for (i = 0; i < text.length; i++) {
        if (textLower.charAt(i) === leter) {
            counter += 1;
        }
    }
    return counter
}
console.log(`In word "Асталавіста" is ${countLetter("а", "Асталавіста")} letters a`);

function convertCurrency(ammountAndCurrency) {
    const ammountAndCurrencyLower = ammountAndCurrency.toLowerCase();
    const fxRate = 29;
    if (ammountAndCurrencyLower.includes('uah')) {
        const uahAmmount = parseInt(ammountAndCurrency);
        return `You can change ${ammountAndCurrency} to ${Math.round(uahAmmount / fxRate)}$`;
    } else if (ammountAndCurrencyLower.includes('$')) {
        const usdAmmount = parseInt(ammountAndCurrency);
        return `You can change ${ammountAndCurrency} to ${Math.round(usdAmmount * fxRate)} грн.`;
    } else {
        return `You entered incorrect currency of ${ammountAndCurrency}, please enter $ or UAH only.`;
    }
}
console.log(convertCurrency("100$"));
console.log(convertCurrency("2500UAH"));
console.log(convertCurrency("2500EUR"));

function getRandomPassword(length = 8) {
    let pass = "";
    for (i=0; i < length; i++){
        pass += Math.floor(Math.random() * 10);
    }
    return pass
}
console.log(`Your pass is: ${getRandomPassword(4)}`);
console.log(`Your pass is: ${getRandomPassword()}`);

function deleteLetters(letterToDelete, text) {
    let newText = "";
    for (i = 0; i < text.length; i++){
        if (text.toLowerCase().charAt(i) !== letterToDelete.toLowerCase()){
            newText += text.charAt(i);
        }
    }
    return newText;
}
console.log(`If delete letter 'a' from "blablabla" you will get ${deleteLetters('a', "blablabla")}`);

function isPalyndrom(text) {
    const textLower = text.toLowerCase();
    let reverseText = "";
    for (i = (text.length - 1); i >= 0; i--){
        reverseText += textLower.charAt(i);
    }
    return textLower === reverseText
}
console.log(`isPalyndrom("Мадам") ${isPalyndrom("Мадам")}`);
console.log(`isPalyndrom("кокос") ${isPalyndrom("кокос")}`);
console.log(`isPalyndrom("Я несу гусеня") ${isPalyndrom("Я несу гусеня")}`);

function deleteDuplicateLetter(text) {
    const textLower = text.toLowerCase();
    let newText = "";
    for (i = 0; i < text.length; i++) {
        let count = 0;
        for (j = 0; j < text.length; j++) {
            if (textLower.charAt(i) === textLower.charAt(j)){
                count += 1;
            }
        }
        if (count === 1) {
            newText += text.charAt(i)
        }
    }
    return newText
}
console.log(`deleteDuplicateLetter("Бісквіт був дуже ніжним") IS ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);