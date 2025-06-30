const input = document.getElementById("fname");


firstWord(s){
	input.addEventListener("blur", function () {
  return input.value.toUpperCase();
	
	
});

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
