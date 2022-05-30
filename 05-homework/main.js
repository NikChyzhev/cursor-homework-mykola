const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function pairBoyGirrl (arr) {
    arr = [...arr];
    const newArr = [[arr[0], arr[2]], [arr[1], arr[3]], [arr[4], arr[5]]];
    return newArr;
}
console.log('pairBoyGirrl', pairBoyGirrl(students))

function combinePairAndThem (pair, them) {
    them = [...them];
    let newPair = [];
    for (i = 0; i < pair.length; i++) {
        newPair.push([])
        newPair[i][0] = pair[i].join(' і ');
        newPair[i][1] = them[i];
    }
    return newPair
}
console.log('combinePairAndThem',combinePairAndThem(pairBoyGirrl(students), themes));

function combineStudentMurk(student, mark) {
    newArr = [];
    for (i = 0; i < student.length; i++) {
        newArr.push([]);
        newArr[i][0] = student[i];
        newArr[i][1] = mark[i];
    }
    return newArr
}
console.log('combineStudentMurk', combineStudentMurk(students, marks))

function putRandomMarkForPair(pair) {
    pair = [...pair];
    for (i = 0; i < pair.length; i++) {
        pair[i].push(Math.round(Math.random()*(5-1)+1));
    }
    return pair
}
console.log('putRandomMarkForPair',putRandomMarkForPair(combinePairAndThem(pairBoyGirrl(students), themes)));
