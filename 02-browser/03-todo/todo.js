const container = document.querySelector("#todo-container");

// 1: 입력창에 메모를 입력하고 추가버튼을 클릭하면 목록의 첫번째에 추가되게 하기
// + 입력창에 값이 초기화
// + 입력창에 엔터를 눌러도 추가
// 2: 목록에서 항목을 클릭하면 클릭한 항목이 삭제

// 버튼을 클릭하면 입력창의 값을 가져온 후  항목을 만들고 목록에 추가 

// 1. 버튼을 클릭하면 작동할 함수를 등록
container.querySelector("button").addEventListener(("click"), addItem);

container.querySelector("input").addEventListener(("keydown"),(e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

function addItem () {
    const input = document.querySelector("input");
    // 2. 입력값 가져오는 변수
    const value = input.value;
    // 3. 아이템li을 생성하고, 입력값을 컨텐트로 넣음
    const item = document.createElement("li");
    item.textContent = value;
  
     // 6. 항목을 클릭하면 작제하는 이벤트 핸들러 추가 
    item.addEventListener(("click"),() => {
      item.remove();
      })
    
    // 4. 아이템을 목록에 추가
    container.querySelector("ul").prepend(item);
  
     // 5. 입력값 초기화
    input.value = "";    
}






// function () {} 이면 글로벌함수기때문에 윈도우에 미리 만들어짐