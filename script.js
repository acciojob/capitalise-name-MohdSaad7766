const input = document.getElementById("fname");

    function firstWord() {
      input.addEventListener("blur", function () {
        input.value = input.value.toUpperCase();
      });
    }

    // Set initial value from prompt
    const s = prompt("Enter String:");
    input.value = s;

    // Attach the blur handler
    firstWord();