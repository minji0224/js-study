
(()=> {
  const form = document.querySelector("#meta-search");
  const engine = form.querySelector("select");
  const actionUrl = {
    google: "https://www.google.com/search",
    daum: "https://search.daum.net/search",
    bing: "https://www.bing.com/search",
  }

  form.addEventListener("submit", (e) => {
   console.log(e);
   // 기본 제출 동작을 막는 행위(form이 가지고 있는 제출이벤트)
   e.preventDefault();
   
   console.log(engine.value);
   // action url 설정
   form.action = actionUrl[engine.value];
   form.submit();
   form.reset();
   })
})()