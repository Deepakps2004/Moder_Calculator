var box = document.getElementById("box");

function toAppend(input) {
  box.value += input;
}

function total() {
  try {
    box.value = eval(box.value);
  } catch (error) {
    box.value = "ERROR";
  }
}

function clearDisplay() {
  box.value = "";
}
