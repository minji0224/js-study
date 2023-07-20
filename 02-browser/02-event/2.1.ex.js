const title = document.querySelector("h2");
const list = document.querySelector("ul");
const arrow = document.querySelector("i");
// i가 인라인일때는 트랜스폼이 안먹음 인라인블럭으로바꿔줘야함

title.addEventListener("click", ()=> {
  list.hidden = !list.hidden;
  arrow.style.transform = !list.hidden 
  ? "rotate(90deg)" 
  : "rotate(0deg)"  
});