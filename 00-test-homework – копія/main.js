const todoHolder = document.querySelector("#todoHolder");
const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInput")

let id = 0;

const deleteTodo = (e) => {
    e.target.closest("li").style.textDecoration = "line-through";
    // const elementToDelete = document.getElementById(--id);
    // elementToDelete.remove();
}

const createTodo = (text) => {
    const newLi = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.addEventListener("click", deleteTodo);
    newLi.innerHTML = `${id}. ${text}`;
    newLi.appendChild(deleteButton);
    newLi.id = id;
    id++;
    return newLi
}

const addTodo = () => {
    const inputValue = addTodoInput.value;
    if (!inputValue) return;
    const todo = createTodo(inputValue);
    todoHolder.appendChild(todo);
}

const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo();  
    addTodoForm.reset();  
}

addTodoForm.addEventListener("submit", onFormSubmit);



// function doSmth(target){
//     // event.stopPropagation();
//     // console.log(`Hy peeps! ${index}`);
//     console.log(target.id);
// }

// function doElse(){    
//     console.log("Hy peeps as well!");
// }

// const parent = document.querySelector(".parent");
// const child1 = document.querySelector(".child1");
// const child2 = document.querySelector(".child2");

// [parent, child1, child2].forEach((el, index) => 
// el.addEventListener('click', (event) => doSmth(event, index)));

// document
// .querySelectorAll('li')
// .forEach((el,idx) => el.addEventListener("click", () => doSmth(idx)))

// const longList = document.querySelector("#longList");
// longList.addEventListener("click", (e) => doSmth(e.target));