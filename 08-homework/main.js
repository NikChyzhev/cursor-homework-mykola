const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// 1. getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента
  
const getSubjects = (student => Object.
    keys(student.subjects).
    map (value => value.charAt(0).toUpperCase() + value.slice(1)));      
console.log('1. getSubjects(students[0]): ', getSubjects(students[0]));

// 2. getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам
const getAverage = (...numbers) => {   
    let sum = 0;    
    numbers.forEach(element => sum += element); 
    return (sum/numbers.length).toFixed(2);
};

const getAverageMark = (student) => {
    const marks = Object.values(student.subjects).flat();    
    return getAverage(...marks);
};
console.log('2. getAverageMark(students[0]): ', getAverageMark(students[0]));

// 3.getStudentInfo(students[0]) – яка повертає інформацію загального виду по переданому студенту

const getStudentInfo = (student) => {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student),
    }
}
console.log('3. getStudentInfo(students[0]): ', getStudentInfo(students[0]));

// 4. getStudentsNames(students) – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (list) => {
    const arrNames = [];
    for (student of list) {
        arrNames.push(student.name);
    }           
    return arrNames.sort();
}
console.log('4. getStudentsNames(students): ', getStudentsNames(students));

// 5. getBestStudent(students) – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (list) => {
    let maxAvMark = 0;
    let bestStudentName;
    for (student of list) {
        if (maxAvMark <= getAverageMark(student)) {
            maxAvMark = getAverageMark(student);
            bestStudentName = student.name
        }
    }   
    return bestStudentName; 
}
console.log('5. getBestStudent(students): ', getBestStudent(students));

// 6. calculateWordLetters("тест") – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень

const calculateWordLetters = (word) => {
    const letters = word.split('');    
    const uniqLetter = letters.filter((vallue, index, arr) => arr.indexOf(vallue) === index).sort();
    let objLetters = {};
    for (i = 0; i < uniqLetter.length; i++) {
        let count = 0;
        for (j = 0; j < letters.length; j++) {
            if (uniqLetter[i] === letters[j]) {
                count ++
            }
        }
        objLetters[uniqLetter[i]] = count;
    }
    return objLetters;
}
console.log('6. calculateWordLetters("тест"): ', calculateWordLetters("тест"))