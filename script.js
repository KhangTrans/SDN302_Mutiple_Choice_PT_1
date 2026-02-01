// Quiz Data
const quizData = [
  {
    id: 1,
    question: "What is the most accurate definition of an API?",
    options: [
      "A specialized set of tools and protocols designed exclusively for connecting to and interacting with remote databases.",
      "A software interface that enables two computer programs to communicate and exchange data with each other.",
      "A modern programming language developed with the intention of completely replacing JavaScript in web development.",
      "A dedicated hardware system along with network protocols that supports the transmission of data over the internet.",
    ],
    correctAnswer: 1, // Index of correct answer (0-based)
    unit: "Slot 3",
    creator: "PhuongDVH, KhangTN",
  },
  {
    id: 2,
    question:
      "In the API Gateway workflow, which step occurs immediately after receiving an HTTP request?",
    options: [
      "Forward the request directly to microservices.",
      "Perform rate limiting rules.",
      "Parse and validate the properties/attributes.",
      "Store data in the cache.",
    ],
    correctAnswer: 2,
    unit: "Slot 3",
    creator: "PhuongDVH, KhangTN",
  },
  {
    id: 3,
    question:
      "Which of the following statements is correct about the HTTP protocol?",
    options: [
      "It is a stateful protocol that automatically stores all session information between multiple requests.",
      "It is the most fundamental and widely used communication foundation between clients and servers across the entire World Wide Web.",
      "It is a protocol that operates exclusively at the physical layer (Physical Layer) in the TCP/IP reference model.",
      "It allows the server to proactively send responses to the client without the client needing to send any request first.",
    ],
    correctAnswer: 1,
    unit: "Slot 3",
    creator: "PhuongDVH, KhangTN",
  },
  {
    id: 4,
    question:
      "To use the built-in HTTP module in Node.js, which syntax do you use?",
    options: [
      "import { http } from 'node';",
      "const http = require('http');",
      "install module http;",
      "http.startServer();",
    ],
    correctAnswer: 1,
    unit: "Slot 3",
    creator: "PhuongDVH, KhangTN",
  },
  {
    id: 5,
    question: "Why is JSON often preferred over XML in modern APIs?",
    options: [
      "JSON supports more complex data types than XML.",
      "JSON's tag structure provides better security than XML.",
      "JSON has a smaller size and is faster to transmit.",
      "JSON requires a more complex parser than XML.",
    ],
    correctAnswer: 2,
    unit: "Slot 3",
    creator: "PhuongDVH, KhangTN",
  },
  {
    id: 6,
    question:
      "Which variable in Node.js stores the absolute path to the currently running file?",
    options: ["process.cwd()", "__dirname", "__filename", "path.resolve()"],
    correctAnswer: 2,
    unit: "Slot 3",
    creator: "ThoHP",
  },
  {
    id: 7,
    question:
      "In Node.js, which code snippet is used to create an HTTP server?",
    options: [
      "http.openServer()",
      "http.startServer()",
      "http.createServer()",
      "server.create()",
    ],
    correctAnswer: 2,
    unit: "Slot 3",
    creator: "ThoHP",
  },
  {
    id: 8,
    question:
      "When a client sends an HTTP request to a server, what is the role of Express in Node.js, and how does it make handling requests different compared to using the native http module? Express in Node.js helps to:",
    options: [
      "Send requests from the client to the server",
      "Receive and handle HTTP requests more easily than the native http module",
      "Completely replace the HTTP protocol",
      "Store data instead of a database",
    ],
    correctAnswer: 1,
    unit: "Slot 3",
    creator: "HanNN",
  },
  {
    id: 9,
    question: "How does SOAP differ from a typical REST API?",
    options: [
      "SOAP uses JSON, while REST uses XML",
      "SOAP requires a strict XML message format, while REST is more flexible",
      "SOAP only works on mobile apps",
      "SOAP does not use HTTP",
    ],
    correctAnswer: 1,
    unit: "Slot 3",
    creator: "ThuanPVH",
  },
  {
    id: 10,
    question: "Which data format is most commonly used in RESTful APIs?",
    options: ["XML", "CSV", "JSON", "HTML"],
    correctAnswer: 2,
    unit: "Slot 3",
    creator: "ThuanPVH",
  },
  // Slot 4 Questions
  {
    id: 11,
    question: "In NodeJS, why does the connect() method of MongoClient need to be handled using async/await or Promises?",
    options: [
      "Because MongoDB only supports asynchronous operations",
      "Because establishing a MongoDB connection is a non-blocking I/O operation",
      "Because NodeJS does not support callbacks",
      "Because MongoDB data is always very large"
    ],
    correctAnswer: 1,
    unit: "Slot 4",
    creator: "DuyQH",
  },
  {
    id: 12,
    question: "Which type of middleware is used to handle errors in Express?",
    options: [
      "Application middleware",
      "Router middleware",
      "Error-handling middleware",
      "Built-in middleware"
    ],
    correctAnswer: 2,
    unit: "Slot 4",
    creator: "DuyQH",
  },
  {
    id: 13,
    question: "Which command is used to quickly create an Express project using Express Generator?",
    options: [
      "npm start express",
      "express myApp",
      "node express myApp",
      "npm create node"
    ],
    correctAnswer: 1,
    unit: "Slot 4",
    creator: "DuyQH",
  },
  {
    id: 14,
    question: "In MongoDB, how is data stored?",
    options: [
      "Table",
      "Rows",
      "Documents",
      "Text Files"
    ],
    correctAnswer: 2,
    unit: "Slot 4",
    creator: "DuyQH",
  },
  {
    id: 15,
    question: "What is the most important difference between embedded documents and document references when modeling a One-to-Many relationship in MongoDB?",
    options: [
      "Embedded documents reduce the number of queries but make documents larger",
      "Document references do not support queries",
      "Embedded documents are only used for One-to-One relationships",
      "Document references cannot be used with ObjectId"
    ],
    correctAnswer: 0,
    unit: "Slot 4",
    creator: "DuyQH",
  },
  // Slot 5 Questions
  {
    id: 16,
    question: "What format does MongoDB use to store data?",
    options: [
      "XML",
      "BSON",
      "CSV",
      "SQL"
    ],
    correctAnswer: 1,
    unit: "Slot 5",
    creator: "DienPT, HungPT",
  },
  {
    id: 17,
    question: "Which library is used to connect Node.js directly to MongoDB?",
    options: [
      "mongoose",
      "mongodb",
      "express",
      "dotenv"
    ],
    correctAnswer: 1,
    unit: "Slot 5",
    creator: "DienPT, HungPT",
  },
  {
    id: 18,
    question: "In Mongoose, what is the purpose of a Schema?",
    options: [
      "To connect to the database",
      "To define data structure",
      "To render the UI",
      "To start the server"
    ],
    correctAnswer: 1,
    unit: "Slot 5",
    creator: "DienPT, HungPT",
  },
  {
    id: 19,
    question: "Which Mongoose method is commonly used to create and save a document?",
    options: [
      "save()",
      "insertOne()",
      "create()",
      "push()"
    ],
    correctAnswer: 2,
    unit: "Slot 5",
    creator: "DienPT, HungPT",
  },
  {
    id: 20,
    question: "In the MVC pattern with Mongoose, what is the role of the Controller?",
    options: [
      "Define schemas",
      "Display the view",
      "Handle logic and data",
      "Store environment variables"
    ],
    correctAnswer: 2,
    unit: "Slot 5",
    creator: "DienPT, HungPT",
  },
  {
    id: 21,
    question: "When population negatively impacts performance, which of the following solutions is most appropriate?",
    options: [
      "Always use nested populations",
      "Use select to limit the fields that can be populated",
      "Replace ObjectId with String",
      "Always populate all paths"
    ],
    correctAnswer: 1,
    unit: "Slot 5",
    creator: "HiepHNP, ThanhNT",
  },
  {
    id: 22,
    question: "According to the REST standard, which HTTP method is correctly used to update a partial resource?",
    options: [
      "PUT",
      "POST",
      "PATCH",
      "GET"
    ],
    correctAnswer: 2,
    unit: "Slot 5",
    creator: "HiepHNP, ThanhNT",
  },
  {
    id: 23,
    question: "In the Mongoose schema, which attribute is used to indicate the model referenced when using population?",
    options: [
      "type",
      "populate",
      "model",
      "ref"
    ],
    correctAnswer: 3,
    unit: "Slot 5",
    creator: "HiepHNP, ThanhNT",
  },
  {
    id: 24,
    question: "When calling .populate('author'), what does Mongoose actually do internally?",
    options: [
      "Executes a MongoDB JOIN",
      "Modifies the original collection schema",
      "Performs an additional query to fetch referenced documents",
      "Converts ObjectId into embedded documents permanently"
    ],
    correctAnswer: 2,
    unit: "Slot 5",
    creator: "HiepHNP, ThanhNT",
  },
  {
    id: 25,
    question: "Which HTTP status code is most appropriate when a client requests a resource that does not exist?",
    options: [
      "200 OK",
      "201 Created",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    correctAnswer: 2,
    unit: "Slot 5",
    creator: "HiepHNP, ThanhNT",
  },
  // Slot 7 Questions - LongNH
  {
    id: 26,
    question: "What is the main role of EJS in a Node.js application?",
    options: [
      "Handle client-side data",
      "Connect to the database",
      "Render HTML views from server-side data",
      "Manage middleware"
    ],
    correctAnswer: 2,
    unit: "Slot 7",
    creator: "LongNH",
  },
  {
    id: 27,
    question: "When using EJS, which command is used to pass data from the route to the .ejs file?",
    options: [
      "res.send()",
      "res.json()",
      "res.render()",
      "app.get()"
    ],
    correctAnswer: 2,
    unit: "Slot 7",
    creator: "LongNH",
  },
  {
    id: 28,
    question: "What is the function of the syntax <%= name %> in EJS?",
    options: [
      "Execute a loop",
      "Output the value of the variable name to HTML",
      "Declare a new variable",
      "Call an API"
    ],
    correctAnswer: 1,
    unit: "Slot 7",
    creator: "LongNH",
  },
  {
    id: 29,
    question: "What is the purpose of the code <% articles.forEach(article => { %> in EJS?",
    options: [
      "Display data on the UI",
      "Declare the variable article",
      "Create a loop to iterate through a data list",
      "Send data back to the server"
    ],
    correctAnswer: 2,
    unit: "Slot 7",
    creator: "LongNH",
  },
  {
    id: 30,
    question: "What is the main difference between EJS and JSX?",
    options: [
      "EJS is used for frontend, JSX is used for backend",
      "EJS renders on the server side, while JSX is mainly used in React on the client side",
      "JSX does not support HTML",
      "EJS cannot use JavaScript"
    ],
    correctAnswer: 1,
    unit: "Slot 7",
    creator: "LongNH",
  },
  // Slot 7 Questions - NghiLTT
  {
    id: 31,
    question: "What is EJS?",
    options: [
      "A frontend framework",
      "A CSS library",
      "A template engine for Node.js",
      "A database"
    ],
    correctAnswer: 2,
    unit: "Slot 7",
    creator: "NghiLTT",
  },
  {
    id: 32,
    question: "Where is EJS commonly used?",
    options: [
      "Client-side",
      "Server-side",
      "Database",
      "Middleware"
    ],
    correctAnswer: 1,
    unit: "Slot 7",
    creator: "NghiLTT",
  },
  {
    id: 33,
    question: "Which tag in EJS is used to print data to HTML?",
    options: [
      "<% %>",
      "<%= %>",
      "<%- %>",
      "<%# %>"
    ],
    correctAnswer: 1,
    unit: "Slot 7",
    creator: "NghiLTT",
  },
  {
    id: 34,
    question: "What is the main difference between EJS and JSX?",
    options: [
      "EJS runs on the client, JSX runs on the server",
      "EJS is used for React, JSX is used for Express",
      "EJS is faster than JSX",
      "EJS renders server-side, JSX renders client-side"
    ],
    correctAnswer: 3,
    unit: "Slot 7",
    creator: "NghiLTT",
  },
  {
    id: 35,
    question: "In EJS, through what means is data passed to the template?",
    options: [
      "URL",
      ".env file",
      "res.render() function",
      "Middleware"
    ],
    correctAnswer: 2,
    unit: "Slot 7",
    creator: "NghiLTT",
  },
  // Slot 8 Questions - Handlebars
  {
    id: 36,
    question: "What is Handlebars?",
    options: [
      "A backend framework for Node.js",
      "A templating engine for JavaScript",
      "A NoSQL database",
      "A tool for building complex frontend interfaces"
    ],
    correctAnswer: 1,
    unit: "Slot 8",
    creator: "KhoaNN, KiemDA",
  },
  {
    id: 37,
    question: "Which syntax is used in Handlebars to display variables in a template?",
    options: [
      "<% %>",
      "{{ }}",
      "[[ ]]",
      "<< >>"
    ],
    correctAnswer: 1,
    unit: "Slot 8",
    creator: "KhoaNN, KiemDA",
  },
  {
    id: 38,
    question: "What is the purpose of Helpers in Handlebars?",
    options: [
      "To create Express routes",
      "To connect to a database",
      "To handle complex logic or reuse functionality",
      "To manage the layout of the entire website"
    ],
    correctAnswer: 2,
    unit: "Slot 8",
    creator: "KhoaNN, KiemDA",
  },
  {
    id: 39,
    question: "Which structure is used to iterate over a list in Handlebars?",
    options: [
      "{{#for}}",
      "{{#map}}",
      "{{#loop}}",
      "{{#each}}"
    ],
    correctAnswer: 3,
    unit: "Slot 8",
    creator: "KhoaNN, KiemDA",
  },
  {
    id: 40,
    question: "What are Partials used for in Handlebars?",
    options: [
      "To create an Express server",
      "To reuse template components",
      "To declare global variables",
      "To handle if–else conditions"
    ],
    correctAnswer: 1,
    unit: "Slot 8",
    creator: "KhoaNN, KiemDA",
  },
];

// State Management
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let score = 0;

// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startQuizBtn = document.getElementById("start-quiz-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const reviewBtn = document.getElementById("review-btn");
const restartBtn = document.getElementById("restart-btn");
const backToResultBtn = document.getElementById("back-to-result-btn");

// Event Listeners
startQuizBtn.addEventListener("click", startQuiz);
prevBtn.addEventListener("click", previousQuestion);
nextBtn.addEventListener("click", nextQuestion);
reviewBtn.addEventListener("click", showReview);
restartBtn.addEventListener("click", restartQuiz);
backToResultBtn.addEventListener("click", backToResult);

// Initialize Quiz
function startQuiz() {
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  userAnswers = new Array(quizData.length).fill(null);
  score = 0;
  renderQuestion();
  renderQuestionNavigator();
  updateProgress();
}

// Render Current Question
function renderQuestion() {
  const question = quizData[currentQuestionIndex];

  document.getElementById("question-number").textContent =
    currentQuestionIndex + 1;
  document.getElementById("question-unit").textContent = question.unit;
  document.getElementById("question-text").textContent = question.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    if (userAnswers[currentQuestionIndex] === index) {
      optionElement.classList.add("selected");
    }

    optionElement.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;

    optionElement.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(optionElement);
  });

  updateNavigationButtons();
}

// Select Answer
function selectAnswer(answerIndex) {
  userAnswers[currentQuestionIndex] = answerIndex;
  renderQuestion();
  renderQuestionNavigator();
}

// Navigation
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    updateProgress();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    updateProgress();
  } else {
    finishQuiz();
  }
}

function updateNavigationButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === quizData.length - 1) {
    document.getElementById("next-btn-text").textContent = "Hoàn thành";
  } else {
    document.getElementById("next-btn-text").textContent = "Câu tiếp theo";
  }
}

// Update Progress Bar
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  document.getElementById("current-question").textContent =
    currentQuestionIndex + 1;
  document.getElementById("total-questions-quiz").textContent = quizData.length;
  document.getElementById("progress-percentage").textContent =
    Math.round(progress) + "%";
  document.getElementById("progress-fill").style.width = progress + "%";
}

// Render Question Navigator
function renderQuestionNavigator() {
  const questionGrid = document.getElementById("question-grid");
  questionGrid.innerHTML = "";

  quizData.forEach((_, index) => {
    const navItem = document.createElement("div");
    navItem.className = "question-nav-item";
    navItem.textContent = index + 1;

    if (userAnswers[index] !== null) {
      navItem.classList.add("answered");
    }

    if (index === currentQuestionIndex) {
      navItem.classList.add("current");
    }

    navItem.addEventListener("click", () => {
      currentQuestionIndex = index;
      renderQuestion();
      updateProgress();
    });

    questionGrid.appendChild(navItem);
  });
}

// Finish Quiz
function finishQuiz() {
  calculateScore();
  showResult();
}

// Calculate Score
function calculateScore() {
  score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === quizData[index].correctAnswer) {
      score += 2.5; // 40 questions * 2.5 = 100 points
    }
  });

  document.getElementById("score").textContent = Math.round(score);
}

// Show Result
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const correctCount = userAnswers.filter(
    (answer, index) => answer === quizData[index].correctAnswer,
  ).length;
  const incorrectCount = userAnswers.filter(
    (answer, index) =>
      answer !== null && answer !== quizData[index].correctAnswer,
  ).length;
  const unansweredCount = userAnswers.filter(
    (answer) => answer === null,
  ).length;

  document.getElementById("final-score").textContent = score;
  document.getElementById("correct-answers").textContent = correctCount;
  document.getElementById("incorrect-answers").textContent = incorrectCount;
  document.getElementById("unanswered-questions").textContent = unansweredCount;

  // Animate score circle
  const percentage = (score / 100) * 100;
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (percentage / 100) * circumference;

  setTimeout(() => {
    document.getElementById("score-circle").style.strokeDashoffset = offset;
  }, 300);

  // Set result message and icon
  const resultIcon = document.getElementById("result-icon");
  const resultTitle = document.getElementById("result-title");
  const resultMessage = document.getElementById("result-message");

  if (score >= 80) {
    resultIcon.textContent = "🎉";
    resultTitle.textContent = "Xuất sắc!";
    resultMessage.textContent =
      "Bạn đã làm bài rất tốt! Kiến thức của bạn về Node.js, MongoDB, Express, EJS và Handlebars thật ấn tượng.";
  } else if (score >= 60) {
    resultIcon.textContent = "👍";
    resultTitle.textContent = "Khá tốt!";
    resultMessage.textContent =
      "Bạn đã nắm vững phần lớn kiến thức. Hãy ôn lại một chút để đạt điểm cao hơn.";
  } else if (score >= 40) {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "Cần cố gắng thêm!";
    resultMessage.textContent =
      "Bạn cần ôn tập thêm về Node.js và các công nghệ liên quan. Đừng nản chí, hãy thử lại!";
  } else {
    resultIcon.textContent = "💪";
    resultTitle.textContent = "Hãy tiếp tục học!";
    resultMessage.textContent =
      "Đây là cơ hội tuyệt vời để học hỏi thêm. Xem lại đáp án và thử lại nhé!";
  }
}

// Show Review
function showReview() {
  resultScreen.classList.add("hidden");
  reviewScreen.classList.remove("hidden");

  const reviewContent = document.getElementById("review-content");
  reviewContent.innerHTML = "";

  quizData.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;
    const isUnanswered = userAnswer === null;

    const reviewQuestion = document.createElement("div");
    reviewQuestion.className = "review-question";

    let resultBadgeClass = "unanswered";
    let resultBadgeText = "Chưa trả lời";

    if (!isUnanswered) {
      resultBadgeClass = isCorrect ? "correct" : "incorrect";
      resultBadgeText = isCorrect ? "Đúng" : "Sai";
    }

    reviewQuestion.innerHTML = `
            <div class="review-question-header">
                <span class="review-question-number">Câu hỏi ${index + 1}</span>
                <span class="review-result-badge ${resultBadgeClass}">${resultBadgeText}</span>
            </div>
            <h3 class="review-question-text">${question.question}</h3>
            <div class="options-container">
                ${question.options
                  .map((option, optIndex) => {
                    let optionClass = "option";
                    if (optIndex === question.correctAnswer) {
                      optionClass += " correct";
                    } else if (optIndex === userAnswer && !isCorrect) {
                      optionClass += " incorrect";
                    }

                    return `
                        <div class="${optionClass}">
                            <div class="option-label">${String.fromCharCode(65 + optIndex)}</div>
                            <div class="option-text">${option}</div>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
            <div class="review-answer-info">
                <div class="review-answer-item">
                    <span class="review-answer-label">Đáp án đúng:</span>
                    <span class="review-answer-value correct">${String.fromCharCode(65 + question.correctAnswer)}</span>
                </div>
                ${
                  !isUnanswered
                    ? `
                    <div class="review-answer-item">
                        <span class="review-answer-label">Câu trả lời của bạn:</span>
                        <span class="review-answer-value ${isCorrect ? "correct" : "incorrect"}">${String.fromCharCode(65 + userAnswer)}</span>
                    </div>
                `
                    : ""
                }
                <div class="review-answer-item">
                    <span class="review-answer-label">Người tạo:</span>
                    <span class="review-answer-value">${question.creator}</span>
                </div>
            </div>
        `;

    reviewContent.appendChild(reviewQuestion);
  });
}

// Back to Result
function backToResult() {
  reviewScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

// Restart Quiz
function restartQuiz() {
  resultScreen.classList.add("hidden");
  reviewScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");

  currentQuestionIndex = 0;
  userAnswers = new Array(quizData.length).fill(null);
  score = 0;

  document.getElementById("score").textContent = "0";
  document.getElementById("score-circle").style.strokeDashoffset = 565.48;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("total-questions").textContent = quizData.length;
});
