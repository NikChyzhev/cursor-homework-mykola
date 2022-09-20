export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

export function pairBoyGirrl (arr) {
    const arrGirl = [];
    const arrBoy = [];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i][arr[i].length - 1] === 'а'? arrGirl.push(arr[i]) : arrBoy.push(arr[i]);
    }
    if (arrGirl.length === arrBoy.length) {
        for (let i = 0; i < arrBoy.length; i++) {
            newArr.push ([arrBoy[i], arrGirl[i]]);
        }
    }
    return newArr;
}
// console.log('pairBoyGirrl', pairBoyGirrl(students))

function combinePairAndThem (pair, them) {    
    let newPair = [];
    for (let i = 0; i < pair.length; i++) {
        newPair.push([pair[i].join(' і '), them[i]]);        
    }
    return newPair
}
// console.log('combinePairAndThem',combinePairAndThem(pairBoyGirrl(students), themes));

function combineStudentMurk(student, mark) {
    newArr = [];
    for (let i = 0; i < student.length; i++) {
        newArr.push([student[i], mark[i]]);  
    }
    return newArr
}
// console.log('combineStudentMurk', combineStudentMurk(students, marks))

function putRandomMarkForPair(pair) {
    pair = [...pair];
    for (let i = 0; i < pair.length; i++) {
        pair[i].push(Math.round(Math.random()*(5-1)+1));
    }
    return pair
}
// console.log('putRandomMarkForPair',putRandomMarkForPair(combinePairAndThem(pairBoyGirrl(students), themes)));
