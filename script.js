const copyToClipboard = document.getElementById("password-btn");
const generateBtn = document.querySelector("#generate-btn");
const mySlider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
let last_password;

const MIN = 1;
const MAX = 128;

const Characters = {
  Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Lowercase: "abcdefghijklmnopqrstuvwxyz",
  Numbers: "0123456789",
  Symbols: "~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/",
};

function updatePassword() {
  let password = "";
  let passwordLength = mySlider.value;
  let characters = "";

  if (uppercase.checked) {
    characters += Characters.Uppercase;
  }
  if (lowercase.checked) {
    characters += Characters.Lowercase;
  }
  if (numbers.checked) {
    characters += Characters.Numbers;
  }
  if (symbols.checked) {
    characters += Characters.Symbols;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  copyToClipboard.textContent = password;
}

copyToClipboard.onmouseover = function () {
  last_password = copyToClipboard.textContent;
  copyToClipboard.textContent = "Copy to Clipboard";
};

copyToClipboard.onmouseout = function () {
  copyToClipboard.textContent = last_password;
  last_password = "";
};

copyToClipboard.addEventListener("click", function () {
  navigator.clipboard.writeText(last_password);
  copyToClipboard.textContent = "Copied!";
});

function updateSlider() {
  if (mySlider.value > MAX) {
    mySlider.value = MAX;
  } else if (mySlider.value < MIN) {
    mySlider.value = MIN;
  }
  valPercentage = (mySlider.value / MAX) * 100;
  mySlider.style.background = `linear-gradient(to right, #a27b5c ${valPercentage}%, #3f4e4f ${valPercentage}%)`;
  sliderValue.value = mySlider.value;
  updatePassword();
}

function updateSliderValue() {
  if (sliderValue.value > MAX) {
    sliderValue.value = MAX;
  } else if (sliderValue.value < MIN) {
    sliderValue.value = MIN;
  }
  valPercentage = (sliderValue.value / MAX) * 100;
  mySlider.style.background = `linear-gradient(to right, #a27b5c ${valPercentage}%, #3f4e4f ${valPercentage}%)`;
  mySlider.value = sliderValue.value;
  updatePassword();
}

mySlider.addEventListener("input", updateSlider);
sliderValue.addEventListener("input", updateSliderValue);
uppercase.addEventListener("input", updatePassword);
lowercase.addEventListener("input", updatePassword);
numbers.addEventListener("input", updatePassword);
symbols.addEventListener("input", updatePassword);
generateBtn.addEventListener("click", updatePassword);

updatePassword();
updateSlider();
