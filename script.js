      let randomNumber = Math.floor(Math.random() * 20) + 1;
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        let userGuess = Number(guessField.value);
        console.log(randomNumber)
        if (guessCount === 1) {
          guesses.textContent = 'Palpites anteriores: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Você hackeou a Matrix!';
          lastResult.style.backgroundColor = 'green';
          document.getElementById('kungFu').play();
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 5) {
          lastResult.textContent = 'Vou gostar de ver você morrer, Mr. Anderson!';
          lowOrHi.textContent = `A chave era o número ${randomNumber}.`;
          document.getElementById('agent').play();  
          setGameOver();
        } else {
          lastResult.textContent = 'Não pense que é capaz. Saiba que é!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'A chave é um número maior!' ;
            document.getElementById('again').play();            
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'A chave é um número menor!';
            document.getElementById('again').play();
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();        
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Jogar novamente?';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 20) + 1;
      }

      

    