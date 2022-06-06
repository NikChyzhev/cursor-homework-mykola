// 1. getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел

const getRandomArray = (length, min, max) => {
    let newArr = [];
    for (i = 0; i < length; i++){        
        newArr.push(Math.round(Math.random()*(max - min) + min));
    }
    return newArr;
}
console.log('getRandomArray', getRandomArray(15, 1, 100));

// 2. getModa(...numbers) – яка вираховує моду

const getModa = (...numbers) => {
    numbers = numbers.filter(element => Number.isInteger(element));
    console.log('numbers: ', numbers);
    let countMax = 0;
    let moda;
    for (i = 0; i < numbers.length; i++) {
        let count = 0;
        for (j = 0; j < numbers.length; j++){
            if (numbers[i] === numbers[j]) {
                count++;
            }            
        }
        if (count > countMax) {
            countMax = count;
            moda = numbers[i];
        }
    }
    return moda;
}
console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 3. getAverage(...numbers) – яка рахує середнє арифметичне

const getAverage = (...numbers) => {
    let sum = 0;
    let count = 0;
    numbers.forEach(element => {
        if(Number.isInteger(element)) {
            sum += element;
            count++
        }
    });
    return (sum/count).toFixed(1);
}
console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4. getMedian(...numbers) – яка рахує медіану

const getMedian = (...numbers) => {
    let newArr = [];
    numbers.forEach(element => {
        if(Number.isInteger(element)) {
            newArr.push(element);
        }
    });
    newArr.sort((a, b) => {return a-b});
    if (newArr.length % 2 === 1) {
        return newArr[Math.floor(newArr.length / 2)];
    } else {
        return (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2;
    }
}
console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('getMedian(1, 2, 3, 4): ', getMedian(1, 2, 3, 4));
console.log('getMedian(1, 2, 3, 4, 5): ', getMedian(1, 2, 3, 4, 5));

// 5. filterEvenNumbers(...numbers) - фільтрує парні числа передані як аргументи функції;

const filterEvenNumbers = (...numbers) => {
    const newArr = numbers.filter((value) => {return (value !== 0 && value % 2 !== 0)});
    return newArr;
};
console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6): ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. countPositiveNumbers(...numbers) – рахує кількість чисел більших 0

const countPositiveNumbers = (...numbers) => {
   return numbers.filter((value) => {return value > 0}).length;
}
console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6): ', countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7. getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = (...numbers) => {
    return numbers.filter((value) => {return value % 5 === 0});
}
console.log('getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// 8. replaceBadWords(string) Погані слова: shit та fuck

const replaceBadWords = (string) => {
    const badWords = ['shit', 'fuck'];
    const newString = badWords.reduce((result, badWord) => {
        return result.split(badWord).join('*'.repeat(badWord.length))
    }, string);
    return newString;
}
console.log('replaceBadWords("Are you fucking kidding?"): ', replaceBadWords("Are you fucking kidding?"));
console.log('replaceBadWords("Holy shit!"): ', replaceBadWords("Holy shit!"));
console.log(`replaceBadWords("It's bullshit!"): `, replaceBadWords("It's bullshit!"));

// 9. divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви


const divideByThree = (word) => {
    const newWord = word.toLowerCase().split(' ').join('').split('');    
    let newArr = [];
    for (i = 0; i < newWord.length; i += 3) {
       newArr.push(newWord.slice(i, i+3).join(''));
    }
    return newArr;
}
console.log('divideByThree("Commander"): ', divideByThree("Commander"));
console.log('divideByThree("live"): ', divideByThree("live"));

// 10. generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові

const generateCombinations = (word) => {
    if (word.length > 10) return [];

    if (word.length < 2) return [word];

    let combinations = [];

    for (let i = 0; i < word.length; i++) {

        let subLetterCombination = generateCombinations(word.slice(0, i) + word.slice(i+1, word.length + 1));

        for (j = 0; j < subLetterCombination.length; j++) {
            combinations.push(word[i] + subLetterCombination[j]);
        }
    }
    return combinations
}
console.log('generateCombinations("man"): ', generateCombinations("man"));
console.log('generateCombinations("ol"): ', generateCombinations("ol"));

