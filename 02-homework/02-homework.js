let minNumber;
let maxNumber;

do {
    minNumber = parseInt(prompt('Enter staring number'), 10);
} while (!minNumber && minNumber !== 0);

do {
    maxNumber = parseInt(prompt('Enter ending number'), 10);
} while (!maxNumber || maxNumber < minNumber);

const passEvenNumber = confirm('Do you want to pass Even numbers in sumup?')

let sumUp = 0;

for (let i = minNumber; i <= maxNumber; i++) {
    if (passEvenNumber && i % 2 == 0) {
        continue;
    } else {
        sumUp = sumUp + i;
    }
    
}

console.log(sumUp);
