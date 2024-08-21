const quizData = [
    {
        question: 'What is the capital of France?',
        a: 'Madrid',
        b: 'Rome',
        c: 'Paris', 
        d: 'Lisbon',
        correct: 'c'
    },
    {
        question: 'What is the capital of Portugal?',
        a: 'Madrid',
        b: 'Rome',
        c: 'Paris', 
        d: 'Lisbon',
        correct: 'd'
    },
    {
        question: 'What is the capital of Spain?',
        a: 'Madrid',
        b: 'Rome',
        c: 'Paris', 
        d: 'Lisbon',
        correct: 'a'
    },
    {
        question: 'What is the capital of Italy?',
        a: 'Madrid',
        b: 'Rome',
        c: 'Paris', 
        d: 'Lisbon',
        correct: 'b'
    },
    {
        question: 'What is the capital of India?',
        a: 'New Delhi',
        b: 'Mumbai',
        c: 'Kolkata',
        d: 'Chennai',
        correct: 'a'
    }
];

let correctAnswers = 0;
let currentQuestion = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = quizData[currentQuestion];

    questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <div class="options">
            <label>
                <input type="radio" name="answer" value="a">
                ${questionData.a}
            </label>
            <label>
                <input type="radio" name="answer" value="b">
                ${questionData.b}
            </label>
            <label>
                <input type="radio" name="answer" value="c">
                ${questionData.c}
            </label>
            <label>
                <input type="radio" name="answer" value="d">
                ${questionData.d}
            </label>
        </div>
    `;

    scoreContainer.innerHTML = `Score : ${correctAnswers}`;
}

function checkAnswer() {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (answer.value === quizData[currentQuestion].correct) {
            correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    document.getElementById('question-container').innerHTML = "";
    document.getElementById('submit').innerHTML = "";
    document.getElementById('feedback-container').innerHTML = "Quiz completed!";
    document.getElementById('score-container').innerHTML = `Your score: ${correctAnswers} / ${quizData.length}`;

    document.getElementById('home-btn-container').innerHTML = `
          <a id="home-btn" href="index.html">Home</a>
    `;

}

const scoreContainer = document.getElementById('score-container');

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

loadQuestion();