document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  }

  if (key === "Enter") {
    event.preventDefault();
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (key === "Escape") {
    display.value = "";
  }
});
