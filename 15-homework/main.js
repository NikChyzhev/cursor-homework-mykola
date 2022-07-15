// 1. Створіть нескінченний генератор ідентифікаторів.

function* createIdGenerator() {
    let i = 1;
    while (i){
        yield i++;
    }    
};

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// 2. генератор, який буде регулювати розміри шрифту

function* newFontGenerator () {
    let font = 14;   
    let move = yield font;

    while (font) {        
        if (move === "up") {
            font += 2;            
        } else if (move ==="down") {
            font -= 2;
        } else {
            font;
        };
        
        move = yield font;
    }
}

const fontGenerator = newFontGenerator();

console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
