const quizData = [
  {
    question: "What does HTML stands for?",
    options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Making Links", "None of these"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which does CSS stands for?",
    options: ["Computer Style Sheets", "Cascade Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["Font", "Style", "CSS", "Styles"],
    answer: "Style"
  },
   {
    question: "Which is the correct HTML tag for a new paragraph?",
    options: ["<p>", "<paragraph>", "<para>", "None of these"],
    answer: "<p>"
  },
  {
    question: "Which HTML tag is used to create a clickable hyperlink?",
    options: ["<link>", "<a>", "<href>", "<web>"],
    answer: "<a>"
  }

];

let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question-container');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const header = document.getElementById('header');
const questionInfo = document.getElementById('question-info');
const questionNumber = document.getElementById('question-number');
const quizTitle = document.getElementById('quiz-title');
const quizImage=  document.getElementById('quiz-image');
const scoreImage = document.getElementById('score-image');
const startHeading = document.getElementById('start-heading');

function startQuiz() {
  startButton.style.display = 'none';
  startHeading.style.display='none';
  header.style.display = 'none';
  quizImage.style.display='none';
  scoreContainer.style.display = 'none';
  questionElement.style.display = 'block';
  optionsElement.style.display = 'block';
  nextButton.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  questionInfo.innerHTML = `<span id="quiz-title" class="small-text">Simple Quiz</span> 
                            <span id="question-number" class="small-text">${currentQuestion + 1} of ${quizData.length} Questions</span>`;
  
  
  optionsElement.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option');
    button.addEventListener('click', () => selectAnswer(option));
    optionsElement.appendChild(button);
  });

  
   // Show the submit button if it is the last question
  if (currentQuestion === quizData.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    submitButton.style.display = 'none';
  }
}

function selectAnswer(selectedOption) {
  const question = quizData[currentQuestion];
  if (selectedOption === question.answer) {
    score++;
  }

  Array.from(optionsElement.children).forEach(button => {
    button.classList.remove('selected');
  });

  const selectedButton = Array.from(optionsElement.children).find(button => button.innerText === selectedOption);
  selectedButton.classList.add('selected');
}

function showResult() {
  questionInfo.style.display = 'none';
  const resultContainer = document.createElement('div');
  resultContainer.className = 'question-container'; // Use the same class as question container
  
  const scoreElement = document.createElement('p');
  scoreElement.innerHTML = `<h2> Congratulations</h2>
  <img id="score-image" src="cong.png" alt="score Image" class="score-image">
  <p>Your score: <strong>${score}/${quizData.length}</strong></p>`;
  
  resultContainer.appendChild(scoreElement);
  
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = ''; // Clear the quiz container
  quizContainer.appendChild(resultContainer); // Append result container
}


nextButton.addEventListener('click', () => {
  const selectedButton = Array.from(optionsElement.children).find(button => button.classList.contains('selected'));
  if (!selectedButton) {
    alert('Please select an option before proceeding.');
    return;
  }

  currentQuestion++;
  if (currentQuestion === quizData.length) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'block';
  } else {
    showQuestion();
  }
});

submitButton.addEventListener('click', () => {
  showResult();
});

startButton.addEventListener('click', startQuiz);

