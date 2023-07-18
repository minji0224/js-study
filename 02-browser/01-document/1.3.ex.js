const tbody = document.querySelector("tbody");
const tr = tbody.querySelector("tr");
console.log(tbody);
console.log(tbody.children.length);
console.log(tbody.children[0]);
console.log(tr);
console.log(tr.children[1]);
console.log(tr.children.length);


for(let i = 0; i < tbody.children.length; i++) {
  console.log(i);
  for (let j = 0; j < tr.children.length; j++) {
    console.log(j);
    if(i === j) {
      // let a = tbody.children[i]
      // a.tr.children[j].style.backgroudColor = "black";
      // a.cells[j].style.backgroundColor = 'black';   
      tbody.children[i].children[j].style.backgroundColor="black"; 
      tbody.children[i].cells[j].style.color = 'white'; 
     
    }
  }
}



