class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.stMarks = [5, 4, 4, 5];
        this.dismised = false;
    }
    
    getInfo(){
        return 'Студент' + this.course + "го курсу " + this.university + ", " + this.fullName;
    }

    get marks () {
        if (this.dismised) { 
            return null;
        } else {
            return this.stMarks;
        }
    }

    set marks(mark) {
        if (this.dismised) { 
            console.log("Студент виключений")
        } else {
            this.stMarks.push(mark)
        }        
    }

    getAverageMark(){
        const sum = this.marks.reduce((prevVal, item) => prevVal + item, 0);
        return +(sum/this.marks.length).toFixed(2);
    }

    dismiss(){
        this.dismised = true;
    }

    recover(){
        this.dismised = false; 
    }  
}
const student1 = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');
console.log(student1.getInfo());
console.log(student1.marks);
student1.marks = 5;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(`Студент відрахований?: ${student1.dismised}`);
console.log(`Оцінки після відрахування: ${student1.marks}`);
student1.recover();
console.log(`Після відновлення чи cтудент ще відрахований в базі даних?: ${student1.dismised}`);

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 3000); 
    }

    getScholarship(){               
        if(!this.dismised && this.getAverageMark() >= 4) {
            console.log(`Ви отримали 1400 грн. стипендії`);
        }
    } 
}
const student2 = new BudgetStudent('КНЕУ м.Київ', 3, 'Тарас Бульба');
