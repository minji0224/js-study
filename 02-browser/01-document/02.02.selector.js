      // id선택자로 접근하기
      const elem = document.getElementById("div-elem");
      console.log(elem);
      console.log(elem.innerHTML);
      elem.style.background = "red";

      // .querySelectorAll
      // 조건에 맞는 모든 요소
      const elements = document.querySelectorAll("ul > li:last-child");
      console.log(elements); // c 1-2  2-2

      // .querySelector
      // 조건에 맞는 처음 요소
      const div = document.querySelector("#div-elem");
      console.log(div);

      // 태그 기준으로 선택
      // document.getElementsByTagName("li");
      console.log(document.querySelectorAll("li"));

      // 클래스 기준으로 선택
      // document.getElementsByClassName("item");
      console.log(document.querySelector(".item"));

      // name속성 기준으로 선택
      // const radios = document.getElementsByName("rdo");
      // console.log(radios);

      // css 선택자
      // [속성명=값] {...}
      const radios = document.querySelectorAll("[name=rdo]");
      console.log(radios);

      //div id = elem > span 선택하려고 하는 것
      const span = document.querySelector("#div-elem > span");
      console.log(span);

      // #div-elem
      // #div-elem.querySelector
      // 자주 선택하려는 부모요소를 js셀렉터로 객체화 해놓으면 자식요소에 접근하기 편하다.
      const divElem = document.querySelector("#div-elem");
      const label = divElem.querySelector("span");
      const items = divElem.querySelectorAll("ul>li");
      console.log(label);
      console.log(items);