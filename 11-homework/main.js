function generateBlocks() {
    document.body.innerHTML = "";

    const mainSquare = [];
    
    for (let i = 0; i < 25; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.backgroundColor = `rgb(${[1,1,1].map(() => Math.floor(Math.random() * 256))})`;
        mainSquare.push(square);
    }
    
    document.body.append(...mainSquare);    
}

function generateBlocksInterval() {
    document.body.setAttribute("id", "main-square");

    generateBlocks();

    setInterval(() => generateBlocks(), 1000);    
}

generateBlocksInterval()


