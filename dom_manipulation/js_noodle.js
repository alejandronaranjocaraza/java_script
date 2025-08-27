// DOM Methods

//// QUERY SELECTORS

const parent = document.querySelector(".parent");
console.log(parent)
const firstChild = parent.firstElementChild;
console.log(firstChild)

const box3 = document.querySelector("#box3");
console.log(box3)
const sibling = box3.previousElementSibling;
console.log(sibling);

// Node list of references to all matching containers
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// Create element in DOM
const newDiv = document.createElement("div");

// Append element
const container = document.querySelector(".container");
container.appendChild(newDiv);
console.log(container);// will now contain newDiv

//// ALTERING ELEMENTS

// Basic styles
newDiv.style.color = "blue";
newDiv.style.cssText = "color: blue; background:red;";
newDiv.setAttribute("style","background: red;");

newDiv.style.padding = "10px";
newDiv.style.marginTop = "5px";// new div now visible in doc

//// EVENTS

const btn1 = document.querySelector("#button1");
// Not so clean
btn1.onclick = () => alert("Hello World");
// Cleaner
btn1.addEventListener("click", () => alert("Hello World"));

function logEvent (e) {
  console.log(e)
};

function logEventTarget (e) {
  console.log(e.target)
};

function styleBackground (e) {
  e.target.style.background = "blue";
};

function makeBackBlue (e) {
  e.target.setAttribute("style", "background: blue;");
};

const btn2 = document.querySelector("#button2");
// Log event (see function above)
btn2.addEventListener("click",(e) => logEvent(e));
// Log event target (see function above)
btn2.addEventListener("click", (e) => logEventTarget(e));
// Make event target blue (see function above)
btn2.addEventListener("click", (e) => makeBackBlue(e));

//// EVENTS/LISTENERS ON MULTIPLE ELEMENTS

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  //Add event listener
  button.addEventListener("dblclick",(e) => alert("This listener is global"))});
