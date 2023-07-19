const btn = document.querySelector("button");

// btn.addEventListener("click", (event)=> {
//   console.log(event);
//   alert(event.target);
// });

function sayThanks(){
  alert("감사합니다.");
  btn.removeEventListener("click", sayThanks);
}
// 처음만 감사합니다 나오고 다음엔 안나옴 삭제돼서

// 함수의 이름은 함수본체의 대리자(delegate)
btn.addEventListener("click", sayThanks);

// 추가이벤트수신기(함수)
btn.addEventListener("click", (event)=> {
  console.log(event);
  alert("클릭");
});

btn.addEventListener("click", ()=> {
  console.log(this);
  alert("함수표현식");
});

btn.addEventListener("click", function (){
  console.log(this);
  alert("함수선언식");
});