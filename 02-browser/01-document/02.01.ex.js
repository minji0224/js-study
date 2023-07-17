const id = document.getElementById("age-table");
console.log(id);
console.log("--문제1");

const label = id.querySelectorAll("label");
console.log(label);
console.log("--문제2");

const firstTd = id.querySelector("td:first-child");
console.log(firstTd);
console.log("--문제3");

// const search =  document.getElementsByName("search")[0];
const search =  document.querySelector('form[name="search"]');
console.log(search);
console.log("--문제4");

const formFirst = search.querySelector("input");
console.log(formFirst);
console.log("--문제5");
// console.log(search.querySelector("input"));



// const formLast = search.querySelector("input:last-child");
// console.log(formLast);
// console.log("--문제6");
// console.log(search.querySelectorAll("input:last-child"));

const lastInput = document.querySelector("form input:last-child");
console.log(lastInput);
