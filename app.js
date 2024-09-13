
// task1
function changeColor(element) {
    element.style.color = "lightgray";
  }

//   task2
function strikeText(element) {
    element.style.textDecoration = "line-through";
    element.style.color = "blue";
    element.onclick = null;  // Remove event handler after the first click
  }

//   task3
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      console.log("ENTER");
    }
  });


