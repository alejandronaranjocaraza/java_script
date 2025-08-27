const ulst = document.querySelector("ul");

const btn = document.querySelector("button");

const inp = document.querySelector("input");

function addInput(inp) {
  var v = inp.value;
  inp.value = "";
  const litem = document.createElement("li");
  const spn = document.createElement("span");
  const subbtn = document.createElement("button");

  litem.appendChild(spn);
  litem.appendChild(subbtn);

  spn.textContent = v;
  subbtn.textContent = "delete";

  ulst.appendChild(litem);
  subbtn.addEventListener("click",() => subbtn.parentNode.remove());
};

btn.addEventListener("click", () => addInput(inp));
