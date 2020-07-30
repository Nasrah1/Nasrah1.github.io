let questionEl = document.getElementById("question");
let step = 0;
window.onload = function () {
  console.log("loaded");
  show(step);
};
//Questions and Answers

let questionsAnswers = [
  {
    id: 1,
    question: "Commonly used data types DO NOT include:",
    answer: "Bootstraps",
    option: ["Strings", "Bootstraps", "Alerts", "Numbers"],
  },
  {
    id: 2,
    question: "The condition in an if/else statement is enclosed within ____.",
    answer: "Parentheses",
    option: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
  },
  {
    id: 3,
    question: "Arrays in JavaScript can be used to score____.",
    answer: "All of the above",
    option: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
  },
  {
    id: 4,
    question:
      "String values must be enclosed within___ when being assigned to variables.",
    answer: "Curly Brackets",
    option: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
  },
  {
    id: 5,
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "JavaScript",
    option: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
  },
];

function submitForm(e) {
  e.preventDefault();
  let quizWrapper = document.querySelector(".quiz-wrapper");
  let introWrapper = document.querySelector(".intro-wrapper");
  quizWrapper.classList.remove("hide");
  introWrapper.classList.add("hide");
  console.log("insubmit");
  let name = document.getElementById("home_form").value;

  sessionStorage.setItem("name", name);
  console.log(name);
}

let question_count = 0;
let point = 0;

function next() {
  let user_answer = document.querySelector(".option").innerHTML;

  //check answer by user
  if (user_answer == questionsAnswers[question_count].answer) {
    point += 10;
    sessionStorage.setItem("points", point);
  }

  if (question_count == questionsAnswers.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    // location.href = "end.html";
    return;
  }

  question_count++;
  show(question_count);
}

function show(count) {
  questionEl.innerHTML = `
  <h2>${questionsAnswers[count].question}</h2>
  <ul class="option_group">
    <li class="option">${questionsAnswers[count].option[0]}</li>
    <li class="option">${questionsAnswers[count].option[1]}</li>
    <li class="option">${questionsAnswers[count].option[2]}</li>
    <li class="option">${questionsAnswers[count].option[3]}</li>
  </ul>
  `;
}

function clickHandler(event) {
  console.log(event);
  if (event.target.matches("li")) {
    console.log("click");
    next();
  }
}
questionEl.addEventListener("click", clickHandler);

let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

let timex = 0;

let mytime = setInterval(function () {
  if (seconds < 59) {
    seconds++;
  } else {
    minutes++;
    seconds = 0;
  }
  let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(
    ".time"
  ).innerHTML = `${formatted_min} : ${formatted_sec}`;
}, 1000);
