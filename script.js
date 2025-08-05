// DOM Elements
let questions = []; // ✅ Global questions array
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');

// Quiz State Variables
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// Start Quiz
startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
};

// Exit Quiz
exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
};

// Continue to Quiz
continueBtn.onclick = () => {
  questions = getFiveRandomQuestions(); // ✅ Randomize on start
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestions(0);
  questionCounter(1);
  headerScore();
};

// Try Again
tryAgainBtn.onclick = () => {
  questions = getFiveRandomQuestions(); // ✅ Randomize again
  quizBox.classList.add('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScore();

  // Reset progress circle
  document.querySelector('.progress-value').textContent = '0%';
  document.querySelector('.circular-progress').style.background =
    'conic-gradient(#1903ac 0deg, rgba(255,255,255,0.1) 0deg)';
};

// Go Home
goHomeBtn.onclick = () => {
  questions = getFiveRandomQuestions(); // ✅ Reset questions
  quizSection.classList.remove('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};

// Show Next Question
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    questionNumb++;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    nextBtn.classList.remove('active');
  } else {
    showResultBox();
  }
};

// Display a question and its options
function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = questions[index].options.map(option => `<div class="option"><span>${option}</span></div>`).join('');
  optionList.innerHTML = optionTag;

  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.setAttribute('onclick', 'optionSelected(this)'));
}

// Handle Option Selection
function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    userScore++;
    headerScore();
  } else {
    answer.classList.add('incorrect');
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAnswer) {
        optionList.children[i].setAttribute('class', 'option correct');
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }

  nextBtn.classList.add('active');
}

// Display Question Counter
function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

// Update Header Score
function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

// Show Final Results
function showResultBox() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  const scoreText = document.querySelector('.score-text');
  const feedbackText = document.querySelector('.feedback-text'); 
  const percentage = (userScore / questions.length) * 100;

  scoreText.textContent = `Your Score: ${userScore} out of ${questions.length} (${percentage.toFixed(0)}%)`;

  // Add feedback based on performance
  let feedback = "";
  if (percentage >= 80) {
    feedback = "🏆 Outstanding! You're a true WebDev Wizard! 🏆";
  } else if (percentage >= 60) {
    feedback = "🎉 Excellent job! Keep it up! 🎉";
  } else if (percentage >= 30) {
    feedback = "Not bad, keep practicing! 👍";
  } else {
    feedback = "📘 Don't worry, you'll improve with more practice!";
  }

  feedbackText.textContent = feedback;

  const circularProgress = document.querySelector('.circular-progress');
  const progressValue = document.querySelector('.progress-value');
  let progressStartValue = -1;
  let progressEndValue = percentage;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#1903ac ${progressStartValue * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}


// Utility: Get 5 Random Questions
function getFiveRandomQuestions() {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10).map((q, index) => ({
    ...q,
    numb: index + 1
  }));
}
