// const div =document.querySelector("div");

// // 태그명이 대문자로 나옴
// console.log(div.tagName);

// for(let elem of div.children) {
//   console.log(elem.tagName);
//   if(elem.tagName === "P") {
//     elem.style.backgroundColor = "red";
//   }
// }

// tagName
// const div = document.querySelector("div");

const container =document.querySelector("#counter-container");
const span = container.querySelector("span");


// innerHTML
let count = 1;
const id = setInterval(()=> {
//   // span.innerHTML = conut;
//   // span.textContent = count;
//   // 요소의 내부HTML을 변경
// // span.innerHTML = `<strong>${count}</strong>`

// // 추가이지만 실제로는 innerHTML 전체를 변경하는 것

// // 요소의 내부 HTML을 뒤에 추가
// // span.innerHTML += `<strong>${count}</strong>`
// // 요소의 내부 HTML을 앞에 추가
// // span.innerHTML = `<strong>${count}</strong>` + span.innerHTML;

// // 요소.insertAdjacentHTML
// // 요소에 인접한 위치에 html을 추가해라
// // (위치, 추가할 HTML)  // 텍스트포함
// // 위치: afterbegin - 시작태그 바로 뒤(첫번째 자식)
// //       beforeend - 끝태그 바로 앞(마지막 자식)
span.insertAdjacentHTML("afterbegin",`<strong>${count}</strong>`);
count++;
count > 10&& clearInterval(id);
}, 1000);



// outerHTML
// const id = setInterval(()=> {  
// outerHTML 본인 태그포함해서 변경됨(스팬태그 없어짐)
// console.log(span.outerHTML);
//  span.outerHTML`<strong>${count}</strong>`;
//  count++;
//  count > 10&& clearInterval(id);
//  }, 1000);



// textContent 
// 태그 제외하고 text노듸의 data값만 가져올 수 있다.
console.log(container.innerHTML);
console.log(container.textContent);

// hidden
span.hidden = false;
// span.hidden = true;
// 태그에 hidden이 있으면 트루 없으면 펄스

// css의 display:none;과 비슷하다
/*
css ->
.container {display: flex}
js ->
container.style.display = 'none;
container.style.display = 'flex;

이렇게 되는 걸 방지하기 위해 쓰는 듯?*/


// 그 외 속성
// console.log(div.id);

// id나 class로 선택을 하면 어떤 태그인지 잘 몰라
// 태그마다 알맞게 속성에 대한 자동완성이 안 됨.
// 일반적인 모든 HTML Element에 대한 속성만 자동ㅇ완성
document.querySelector("#txt");
document.querySelector("input").value;
