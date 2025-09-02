const conts = [];


const btn = document.querySelector("button");
const inpt = document.querySelector("input");
btn.addEventListener("click",() => generateGrid(inpt));



function lightUp(e){
  e.target.setAttribute("style","background: red;");
}

function generateGrid(inp) {
  var n = inp.value;
  if (n>100 || parseInt(n)!=n) {
    console.log("Invalid input");
    console.log(typeof(n));
    return;
  }
  grid = document.querySelector(".grid");
  grid.innerHTML = "";
  for (let i = 0; i<n; i++) {
    conts[i] = document.createElement("div");
    conts[i].setAttribute("id","div".concat(i))
    conts[i].setAttribute("class","container");
    grid.appendChild(conts[i]);
    
    for (let j = 0; j<n; j++) {
      let e = document.createElement("div");
      e.setAttribute("id","element".concat(i,j));
      e.setAttribute("class","element");
      e.setAttribute("style","background: white;");
      e.addEventListener("mouseover", (e) => lightUp(e));
      conts[i].appendChild(e);

    }
  }
}

console.log(conts[1])
