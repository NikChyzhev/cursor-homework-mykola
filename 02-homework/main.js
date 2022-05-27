let minNumber;
let maxNumber;

do {
    minNumber = prompt('Enter staring number');
} while (!(Number.isInteger(parseInt(minNumber)) && minNumber % 1 === 0));

do {
    maxNumber = prompt('Enter ending number');
} while (!(Number.isInteger(parseInt(maxNumber), 10) && maxNumber % 1 === 0 && maxNumber > minNumber));

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
