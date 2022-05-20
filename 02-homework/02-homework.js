debugger;
let minNumber;
let maxNumber;

do {
    minNumber = parseInt(prompt('Enter staring number'), 10);
} while (!minNumber);

do {
    maxNumber = parseInt(prompt('Enter ending number'), 10);
} while (!maxNumber);

const passEvenNumber = confirm('Do you want to pass Even numbers in sumup?')

// console.log(minNumber);
// console.log(maxNumber);
// console.log(passEvenNumber);

let sumUp = 0;

for (let i = minNumber; i <= maxNumber; i++) {
    if (passEvenNumber) {
        if (i % 2 == 0) {

        } else {
            sumUp = sumUp + i;
        }
    } else {
        sumUp = sumUp + i;
    }
    
}

console.log(sumUp);
