const resultBox = document.querySelector("input[type='text']"); 
const buttons = document.querySelectorAll("input[type='button']"); 


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "C") {
      resultBox.value = "";
    } else if (e.target.value === "=") {
      if (resultBox.value) resultBox.value = eval(resultBox.value); 
    } else if (e.target.value === "Clr") {
      if (resultBox.value) resultBox.value = resultBox.value.slice(0, -1);
    } else {
      resultBox.value += e.target.value;
    }
  });
});
