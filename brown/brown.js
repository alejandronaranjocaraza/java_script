const conts = [];

for (let i = 0; i<4; i++) {
  conts[i] = document.createElement("div");
  conts[i].setAttribute("id","div".concat(i))
  conts[i].setAttribute("class","container")
  grid = document.querySelector(".grid")
  grid.appendChild(conts[i])
  
  for (let j = 0; j<4; j++) {
    let e = document.createElement("div");
    e.setAttribute("id","element".concat(i,j))
    e.setAttribute("class","element")
    conts[i].appendChild(e);

  }
}

console.log(conts[1])
