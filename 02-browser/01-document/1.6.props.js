// 표준 HTML attribute는 js property 변환됨.
console.log(document.body.id);

// 비표준은 언디파인
console.log(document.body.something);
// 비표준(사용자정의, customized) html attribute
// getAttribute("속성명")
console.log(document.body.getAttribute("something"));


// 사용자 정의 속성 추가(변경)
// setAttribute(속성명, 값);
// 추가됐고 문서에는 표시 안되고 콘솔에 표시됨
document.body.setAttribute("option", "special");

// 속성 목록 조회(배열이 아니기 때문에 배열로 한번 바꿔준거임)
const arr = Array.from(document.body.attributes).map(
  (attr) =>`${attr.name}= "${attr.value}"`
);
console.log(arr);

// 비표준 속성중에 data-속성명
// 속성명에 언더바있으면 카멜케이스로 변환해서 찾기
//js에서는  dataset.속성명 접근 가능
const items = document.querySelectorAll("li");
for(let item of items) {
  console.log(item.dataset.sno);
  // item.dataset.major = "full-stack";
  // 데이터 속성 추가 및 변경(화면에는 안보임)
  // <li...data-major="full-stack"> ...</li>

  setTimeout(() => {
    item.dataset.major = "full-stack"
  }, 
  800);
}


const menu = document.querySelector("div");
console.log(menu.dataset.widgetName);