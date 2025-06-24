const input = document.getElementById("fname");

input.addEventListener("blur", function () {
  input.value = input.value.toUpperCase();
});

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
