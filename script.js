// script.js
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "C++", "JavaScript"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.querySelectorAll('.options label input');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.forEach((option, index) => {
        option.nextSibling.textContent = currentQuizData.options[index];
    });
}

function getSelectedOption() {
    let selectedOption;
    optionsElement.forEach(option => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });
    return selectedOption;
}

function resetOptions() {
    optionsElement.forEach(option => {
        option.checked = false;
    });
}

submitButton.addEventListener('click', () => {
    const selectedOption = getSelectedOption();
    if (selectedOption !== undefined) {
        if (selectedOption == quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            resetOptions();
        } else {
            resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
            submitButton.disabled = true;
        }
    } else {
        alert('Please select an answer before submitting.');
    }
});

loadQuestion();