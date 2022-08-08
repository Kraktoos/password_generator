const copyToClipboard = document.getElementById("password-btn");
const generateBtn = document.querySelector("#generate-btn");
let last_password;

const Characters = {
  Uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Lowers: "abcdefghijklmnopqrstuvwxyz",
  Numbers: "0123456789",
  Symbols: "~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/",
};

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
});
