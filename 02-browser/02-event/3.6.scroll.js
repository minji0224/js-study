

// 즉시실행함수표현식 IIFE(Immediately Invoked Function Expression)
// (function(){})()
// (()=>{})()
// 1. 이름없이 함수를 생성한 후 바로 실행하고자 할 때
// function func() {...}
// func()
// ->
// (function () {...})()

// 2. 변수나 함수명의 범위를 제한하고자 할 때
console.log(window.scrollY); // 스크롤의 현재 위치값?
console.log(window.innerHeight); // 사용자 브라우저의 현재 높이값?


(() => {
    console.log("run");
    let count = 0;
    window.addEventListener("scroll", (e) => {
    console.log(document.body.clientHeight);

    
    document.querySelector("div").innerHTML = 
    document.body.clientHeight - 
    (window.scrollY + window.innerHeight);
    // console.log("innerHTML" + document.querySelector("div"));

    const offset =
    document.body.clientHeight = (window.scrollY + window.innerHeight);

    if(offset < 50) {
      console.log("끝점에 가깝다");
      // 요소 생성
      const div = document.createElement("div");
      // 속성 설정
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      div.className="box";
      div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      div.innerHTML = count++;
      // new Date().toLocaleString();
      // 어떤 요소에 append
      document.body.append(div);

    }
  })
})();




  // clientHeight 문서 전체 높이
  // window.scrollY : 스크롤된 y축 크기
  // window.innerHeight : 브라우저의 뷰포트 높이(1페이지 풀자이즈 높이 div)
//   HTML5 표준
// window.outerWidth  // 브라우저 창의 너비
// window.innerWidth  // 브라우저 두께를 제외한 너비
// window.outerHeight // 브라우저 창의 높이
// window.innerHeight // 브라우저 두께를 제외한 높이