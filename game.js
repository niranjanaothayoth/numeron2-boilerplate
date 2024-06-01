// Iteration 2: Generate 2 random numbers and a result using a random operator

function generateRandomNumbersAndResult() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*', '/', '%'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'undefined'; // handle division by zero
            break;
        case '%':
            result = (num2 !== 0) ? num1 % num2 : 'undefined'; // handle modulo by zero
            break;
    }

    document.getElementById('number1').textContent = num1;
    document.getElementById('number2').textContent = num2;
    document.getElementById('result').textContent = result;
    return { num1, num2, operator };
}

let numbersAndResult = generateRandomNumbersAndResult();

// Iteration 3: Make the options button functional

document.getElementById('addition').addEventListener('click', function() {
    checkAnswer('+');
});

document.getElementById('subtraction').addEventListener('click', function() {
    checkAnswer('-');
});

document.getElementById('multiplication').addEventListener('click', function() {
    checkAnswer('*');
});

document.getElementById('division').addEventListener('click', function() {
    checkAnswer('/');
});

document.getElementById('modulo').addEventListener('click', function() {
    checkAnswer('%');
});

function checkAnswer(playerChoice) {
    const { operator } = numbersAndResult;
    let correct = (playerChoice === operator);

    if (correct) {
        alert('Correct!');
        score += 1;
    } else {
        alert('Incorrect!');
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html';
    }

    numbersAndResult = generateRandomNumbersAndResult();
}

// Iteration 4: Build a timer for the game

let timeLeft = 30; // 30 seconds for the game
const timerElement = document.getElementById('timer');
timerElement.textContent = timeLeft;

const timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html';
    }
}, 1000);

let score = 0;
