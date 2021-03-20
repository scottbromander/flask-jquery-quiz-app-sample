$(document).ready(onInit);

const MAX_QUESTIONS = 15;
let timer = 90;
let interval;
let quizArray = [];
let questionIndex = 0;
const score = {
    true: [],
    false: []
};

function onInit() {
    $('.js-title').text(`Quiz Taker - ${title}`);
    quizArray = shuffle(questions);
    console.log(quizArray);

    $('.js-answers').on('click', '.js-btn-answers', clickAnswer);

    askQuestion();
}

function askQuestion() {
    timer = 90;
    setClock();
    interval = setInterval(tick, 1000);

    const currentQuestion = quizArray[questionIndex];
    let currentAnswers = [];

    for(let answer of currentQuestion.incorrect_answers) {
        const possibleAnswer = {};
        possibleAnswer.text = answer;
        possibleAnswer.correct = false;
        currentAnswers.push(possibleAnswer);
    }

    const correctAnswer = {};
    correctAnswer.correct = true;
    correctAnswer.text = currentQuestion.correct_answer
    currentAnswers.push(correctAnswer);
    currentAnswers = shuffle(currentAnswers);

    $('.js-question-number').text(`Question ${questionIndex + 1} of ${MAX_QUESTIONS}:`)
    $('.js-question').text(currentQuestion.question);
    $('.js-answers').empty();
    for(let answer of currentAnswers) {
        $('.js-answers').append(`
            <div class="js-btn-answers btn btn-primary question-btn">
                <p class="lead">${answer.text}</p>
            </div>
        `);
        $('.js-answers').children().last().data("correct", answer.correct);
    }
}

function clickAnswer(event) {
    let answer = $(this).data('correct');

    clearInterval(interval);

    if (answer) {
        Swal.fire({
            icon: 'success',
            title: 'Woohoo!',
            text: 'Correct',
            onClose: () => {
                iterateQuestion(true);
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect!',
            onClose: () => {
                iterateQuestion(false);
            }
        })
    }
}

function iterateQuestion(value) {
    console.log(value);
    
    score[`${value}`].push(questionIndex);
    if(questionIndex + 1 < MAX_QUESTIONS) {
        questionIndex++;
        askQuestion();
    } else {
        renderComplete();
    }
}

function tick() {
    timer--;

    setClock();

    if(timer <= 0) {
        clearInterval(interval);
        Swal.fire({
            icon: 'error',
            title: 'Bzzz!!!',
            text: 'Times Up!',
            onClose: () => {
                iterateQuestion(false);
            }
        })
    }
}

function setClock() {
    const minutes = Math.floor(timer/60);
    let seconds = timer%60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $('.js-clock').text(`${minutes + ":" + seconds}`);
}

function renderComplete() {
    $('.container').empty();
    const finalScore = (score.true.length / MAX_QUESTIONS) * 100
    $('.container').append(`
        <div class="row">
            <div class="col-md-12">
                <p class="lead text-center">You scored:</p>
                <h1 class="text-center">${finalScore}%</h1>
            </div>
        </div>
    `);
}

// UTILITY FUNCTIONS

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}