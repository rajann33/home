// Navigation logic
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        const target = document.querySelector(link.getAttribute('href'));
        target.classList.add('active');
    });
});

// Tic-Tac-Toe Logic
function ticTacToeLogic() {
    const board = document.querySelectorAll('.cell');
    const status = document.getElementById('tic-tac-toe-status');
    const resetBtn = document.getElementById('tic-tac-toe-reset');
    let currentPlayer = 'X';
    let gameActive = true;
    const gameState = Array(9).fill('');

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin() {
        return winningCombinations.some(combo => combo.every(i => gameState[i] === currentPlayer));
    }

    board.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            if (!gameActive || gameState[index]) return;
            gameState[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin()) {
                status.textContent = `${currentPlayer} Wins!`;
                gameActive = false;
            } else if (!gameState.includes('')) {
                status.textContent = `It's a Draw!`;
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `${currentPlayer}'s turn`;
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        gameState.fill('');
        gameActive = true;
        currentPlayer = 'X';
        status.textContent = `X's turn`;
        board.forEach(cell => cell.textContent = '');
    });
}
ticTacToeLogic();

// Guess the Number Logic
function guessTheNumberLogic() {
    const input = document.getElementById('guess-input');
    const message = document.getElementById('guess-message');
    const submitBtn = document.getElementById('guess-btn');
    const restartBtn = document.getElementById('restart-guess');
    let targetNumber = Math.floor(Math.random() * 100) + 1;

    submitBtn.addEventListener('click', () => {
        const guess = parseInt(input.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = `Please enter a number between 1 and 100.`;
        } else if (guess === targetNumber) {
            message.textContent = `🎉 Correct! The number was ${targetNumber}.`;
        } else if (guess < targetNumber) {
            message.textContent = ` low! Try again with more high value.`;
        } else {
            message.textContent = ` high! Try again with more low value.`;
        }
    });

    restartBtn.addEventListener('click', () => {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        message.textContent = '';
        input.value = '';
    });
}
guessTheNumberLogic();

// Rock-Paper-Scissors Logic
function rockPaperScissorsLogic() {
    const buttons = document.querySelectorAll('.rps-btn');
    const result = document.getElementById('rps-result');
    const choices = ['rock', 'paper', 'scissors'];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            if (playerChoice === computerChoice) {
                result.textContent = `It's a tie! You both chose ${playerChoice}.`;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
            } else {
                result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
            }
        });
    });
}
rockPaperScissorsLogic();

// Calculator Logic
function calculatorLogic() {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.calc-buttons .btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch {
                    display.value = 'Error';
                    currentInput = '';
                }
            } else if (value === 'C') {
                currentInput = '';
                display.value = '';
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
}
calculatorLogic();
