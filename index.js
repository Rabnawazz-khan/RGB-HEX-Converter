let first = document.getElementById("fInput");
let sec = document.getElementById("sInput");
let third = document.getElementById("thInput");
let output = document.getElementById("output");
let hexInput = document.getElementById("hexInput");
let rgbOutput = document.getElementById("rgbOutput");
let previewBox = document.getElementById("previewBox");
let colorPicker = document.getElementById("colorPicker");
let darkToggle = document.getElementById("darkToggle");
let icon = document.getElementById("icon");

// ✅ RGB → HEX
function findHex() {
  let r = padHex(first.value);
  let g = padHex(sec.value);
  let b = padHex(third.value);

  let convert = "#" + r + g + b;
  let upper = convert.toUpperCase();

  output.value = upper;
  previewBox.style.backgroundColor = upper;
  colorPicker.value = upper; 
}

function padHex(value) {
  let num = parseInt(value);
  if (isNaN(num) || num < 0 || num > 255) {
    return "00";
  }
  let hex = num.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// ✅ HEX → RGB
function findRGB() {
  let hex = hexInput.value.trim();

  if (hex.startsWith("#")) hex = hex.slice(1);
  if (hex.length !== 6) {
    rgbOutput.value = "Invalid!";
    return;
  }

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  rgbOutput.value = `${r}, ${g}, ${b}`;
  previewBox.style.backgroundColor = "#" + hex.toUpperCase();
  colorPicker.value = "#" + hex.toUpperCase();
}

// ✅ Copy Function
function copyText(id) {
  let input = document.getElementById(id);
  if (input.value) {
    navigator.clipboard.writeText(input.value).then(() => {
      alert("Copied: " + input.value);
    });
  } else {
    alert("Nothing to copy!");
  }
}

// ✅ Color Picker
colorPicker.addEventListener("input", () => {
  let hex = colorPicker.value.toUpperCase();
  output.value = hex;
  hexInput.value = hex;

  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  rgbOutput.value = `${r}, ${g}, ${b}`;
  first.value = r;
  sec.value = g;
  third.value = b;

  previewBox.style.backgroundColor = hex;
});

// ✅ Dark Mode Toggle
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
});
