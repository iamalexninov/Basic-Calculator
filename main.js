// -select all elements
let inputElement = document.querySelector(".calculator-screen");
//-operator buttons
let operatorButtons = document.querySelectorAll(".operator");
//-numbers
let numberButtons = document.querySelectorAll(".number");
let equalButton = document.querySelector(".equal-sign");
let clearButton = document.querySelector(".all-clear");
let deleteButton = document.querySelector(".delete");

//-Events
operatorButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    inputElement.value += e.target.value;
  })
);

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (inputElement.value == "0") {
      inputElement.value = e.target.value;
    } else {
      inputElement.value += e.target.value;
    }
  });
});

clearButton.addEventListener("click", () => {
  inputElement.value = "0";
});

deleteButton.addEventListener("click", () => {
  let str = inputElement.value.slice(0, -1);
  inputElement.value = str;
  if (inputElement.value == "") {
    inputElement.value = "0";
  }
});

equalButton.addEventListener("click", () => {
  let operators = ["+", "-", "*", "/"];
  operators.forEach((operator) => {
    let included = inputElement.value.includes(operator);
    if (included) {
      let index = inputElement.value.indexOf(operator);
      let leftPart = inputElement.value.slice(0, index);
      let rightPart = inputElement.value.slice(index + 1);

      inputElement.value = (eval(leftPart + operator + rightPart)).toFixed(1)
    }
  });
});
