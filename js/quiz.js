const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is my education?",
    answers: [
      { text: "Bachelor of engineering", correct: true },
      { text: "Master of computer science", correct: false },
      { text: "General vocational school", correct: false },
      { text: "technical high school", correct: false },
    ],
  },
  {
    question: "Where I was born?",
    answers: [
      { text: "Warsaw, Poland", correct: false },
      { text: "Kiyv, Ukraine", correct: false },
      { text: "Seattle, USA", correct: true },
      { text: "Malaga, Spain", correct: false },
    ],
  },
  {
    question: "What is my perfect workplace?",
    answers: [
      { text: "Closed & Strict", correct: false },
      { text: "Safe & Cosy", correct: false },
      { text: "Open & Creative", correct: true },
      { text: "Extensive & Regulated", correct: false },
    ],
  },
  {
    question: "What language do I work in?",
    answers: [
      { text: "C#", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "Which one is my favorite framework?",
    answers: [
      { text: "Vue", correct: false },
      { text: "Angular", correct: false },
      { text: "Vanilla JS", correct: false },
      { text: "React", correct: true },
    ],
  },
  {
    question: "Where I see myself in five years?",
    answers: [
      { text: "as president", correct: false },
      { text: "as full stack dev", correct: true },
      { text: "as firefighter", correct: false },
      { text: "I have no idea", correct: false },
    ],
  },
  {
    question: "What is my biggest hobby?",
    answers: [
      { text: "coding", correct: false },
      { text: "watching Netflix", correct: false },
      { text: "speeddating", correct: false },
      { text: "skateboarding", correct: true },
    ],
  },
  {
    question: "What is my experience in coding?",
    answers: [
      { text: "less than a year", correct: true },
      { text: "33 years", correct: false },
      { text: "more than 4 years", correct: false },
      { text: "2 years", correct: false },
    ],
  },
];
