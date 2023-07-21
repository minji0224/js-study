// (() => {})()

// radio는 name을 똑같이 맞추면 그룹이 됨
// 벨류값이 ""나오나다 체크드를 써줘야 하나 값 구할 수 있음? 

// (() => {

//   // DOM API로 탐색해서 라디오 값을 조회한 것
//   // 라디오 값: 그룹목록 중에서 선택(checked)된 라디오의 값
//   // document.form[0].elements.age; 로 들어간 것과 같다.
//   // const ageForm = document.forms[0];
//   // const ages = ageForm.elements["age"];
//   // console.log(ages);
//   // console.log(ages.value);

  const ageForm = document.querySelector("form");
  const ages = ageForm.querySelectorAll("input[name='age']");
  console.log(ages);
  // 반복문으로 체크된 요소를 탐색
  for(let age of ages) {
    if(age.checked) {
      console.log(age.value);
    }
  }

//   // 셀렉터로 체크된 입력요소의 이름 속성으로 탐색
//   const checkedAge = ageForm.querySelector("input[name='age']:checked");
//   console.log(checkedAge.value);
// })()
// (()=>{
//   const ageForm = document.querySelector("form");
//   const checkedFruits = ageForm.querySelectorAll("input[name='fruits']:checked");
//   console.log(checkedFruits);

//   // 선택된 값을 배열로 변환 ["banana", "kiwi"]
//   // 선택된 요소의 value값을 뽑기 위해 배열로 변환한듯?
//   const values = Array.from(checkedFruits).map(check => check.value);
//   console.log(values);
// })()