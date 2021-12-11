//document.getElementById("count-el").innerText = 5;

/*

console.log(count);*/

//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count
// Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el");
let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
  count += 1;
  countEl.textContent = count;
}
//1. Create a function, save(), which logs out the count when its called
function save() {
  // Create a variable that contains both the count and the dash separator, i.e "2 - "
  let countDash = " " + count + " - ";
  // Render the variable in the saveEl using innerText
  saveEl.textContent += countDash;
  // this set count to 0
  countEl.textContent = 0;
  count = 0;
}
