(() => {
 const input = document.querySelector("input");


// 포커스: 인풋창을 누르면 깜빡임
// 입력 요소를 입력하면
 input.addEventListener("focus", (e) => {
  console.log("--focus--");
  console.log(e);
 });

 // 블러: 포커스 다른 쪽을 누르면 인풋창 깜빡임 없어짐
//  focus상태에서 다른 요소나 다른 곳으로 focus가 이동됐을 때
 input.addEventListener("blur", (e) => {
  console.log("--blur--");
  console.log(e);
 });

 // 인풋 : 입력창에 치고 있을 때
//  입력하면 발생하는 이벤트
 input.addEventListener("input", (e) => {
  console.log("--input--");
  console.log(e);
 });

//  체인지 : blur가 될 때 value속성 값이 바뀌면 발생
// 블러가 한번 발생하는 것과 같음?
 input.addEventListener("change", (e) => {
  console.log("--change--");
  console.log(e);
 });

 // paste : 클립보드에 있는 내용을 붙일 때(복사붙여넣기)
 input.addEventListener("paste", (e) => {
  console.log("--paste--");
  console.log(e);
 });

})();