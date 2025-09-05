document.querySelector("#checkButton").addEventListener('click', () => {
    let guessInput = Number(document.querySelector("#guessInput").value);
    let resultElement = document.querySelector('#result');
    
    if(isNaN(guessInput)) {
        resultElement.innerHTML = "Please enter a valid number";
        return;
    }

    if (guessInput > 5) {
        resultElement.innerHTML = "Too big";
    } else if (guessInput < 5) {
        resultElement.innerHTML = "Too small";
    } else {
      document.querySelector('body').style.backgroundColor ="rgba(91, 133, 91, 1)"
      showResult.style.color='red';
        resultElement.innerHTML = "You win!";
    }
});

