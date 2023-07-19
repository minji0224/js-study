// 클래스 전체를 문자열로 조회
console.log(document.body.className);
// 클래스 목록을 조회
console.log(document.body.classList);
// value값이 클래스 네임

// 클래스 추가
document.body.classList.add("article");
console.log(document.body.className);

// 클래스 존재여부(true/false)
console.log(document.body.classList.contains("article"));

// 클래스 제거
document.body.classList.remove("article");
console.log(document.body.className);

// 클래스 토글
document.body.classList.toggle("article");
console.log(document.body.className); 

if(document.body.classList.contains("aricle")) {
  document.body.classList.remove("aricle");
}else {
  document.body.classList.add("aricle");
}
console.log(document.body.className);

console.log("-----------");

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

document.body.style.display = "none";

// setTimeout을 실행하면 코드가 멈춘게 아니고
// 특정 시간후에 함수가 실행되는 것(시간이 걸려있으면 그 후 코드가 실행되고 특정 시간 이후 이 코드가 실행되는 것)
setTimeout(
  () => (document.body.style.display= ""), 1000);

  document.body.setAttribute("style","colo: red; background-color:yellow")

