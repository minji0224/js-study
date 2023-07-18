// 1. 요소생성(createElement)
// 2. 요소의 속성 설정(properties)
// 3. 부모요소에 append/prepend(자식요소)
// 4. 요소 앞 뒤에 추가하는 것도 있음 비포/에프터


// 엘리먼트 생성(변수에 대입만 해놓음/ 메모리에만 있음)
const alertBox = document.createElement("div");
// 클래스네임 만들기
alertBox.className = "alert";

// const alertBox = `
// <strong>안녕하세요!</strong> 중요 메시지를 확인하셨습니다.
//     </div>`

const hiText = document.createElement("strong");
hiText.textContent = "안녕하세요:) "

let count = 3;
const message = document.createTextNode(`중요 메세지 ${count}건을 확인하셨습니다.`);

// 추가하는 것
alertBox.append(hiText);
alertBox.append(message);


// append : 가장 (뒷쪽) 마지막 자식으로 추가
// prepend : 가장(앞쪽) 첫번째 자식으로 추가하는 것
setTimeout(()=> {
  document.body.prepend(alertBox);
},1000);


// 삭제하는 것 remove
setTimeout(()=> {
  document.body.remove(alertBox);
},5000);




// 1.5에 예시코드 있음
//  div.insertAdjacentHTML(where, html)