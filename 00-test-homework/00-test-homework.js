function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin


let td = table.rows[0].cells[1];
td.style.backgroundColor = "red";

table.rows[0].cells[1].style.backgroundColor = "red";