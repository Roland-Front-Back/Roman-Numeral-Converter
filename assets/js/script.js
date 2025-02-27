const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const decimalToRoman = (input) => {
  const letters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";
  for (let index = 0; input; index++) {
    while (input >= values[index]) {
      input -= values[index];
      result += letters[index];
    }
  }
  return result;
}

const checkInputValue = () => {
  const inputNumber = parseInt(number.value);

  if (!number.value || isNaN(inputNumber)) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (inputNumber <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputNumber >= 3999 ) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.innerHTML = `<span class="big-text">${decimalToRoman(inputNumber)}</span>`;

  number.value = "";
};

// Handles convert btn
convertBtn.addEventListener("click", checkInputValue);

// Handles input using Enter key
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkInputValue();
  }
});