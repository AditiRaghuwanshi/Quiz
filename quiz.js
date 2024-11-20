// const followingQuestions = [
//     {
//         question: "My fav food .. chl bta naughty ho rhe ho?",
//         answers: [
//             {text: "pasta", correct: false},
//             {text: "litti chokha", correct: false},
//             {text: "cake", correct: false},
//             {text: "YOU", correct: true},
//         ]
//     },

//     {
//         question: "Fav color?",
//         answers: [
//             {text: "red", correct: false},
//             {text: "pink", correct: true},
//             {text: "black", correct: false},
//             {text: "blue", correct: false},
//         ]
//     },


//     {
//         question: "fav position?",
//         answers: [
//             {text: "doggy", correct: false},
//             {text: "69", correct: false},
//             {text: "standing", correct: false},
//             {text: "apki bnayi hui", correct: true},
//         ]
//     },


//     {
//         question: "what i love more about youu?",
//         answers: [
//             {text: "kisses", correct: false},
//             {text: "cuteness", correct: false},
//             {text: "pglpn", correct: false},
//             {text: "sex", correct: true},
//         ]
//     }
// ];


// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// const dancingKermit = document.getElementById("dancing-kermit");
// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     const currentQuestion = followingQuestions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//           button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);


//     });
// }



// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }

// }

// function showDancingKermit() {
//     const dancingKermit = document.getElementById("dancing-kermit");
//     console.log(dancingKermit);  // Log to see if it's found

//     if (dancingKermit) {
//         dancingKermit.classList.remove("hidden");
//         dancingKermit.classList.add("visible");

//         // Hide the GIF after 3 seconds
//         setTimeout(() => {
//             dancingKermit.classList.remove("visible");
//             dancingKermit.classList.add("hidden");
//         }, 3000);
//     } else {
//         console.error("Dancing Kermit container not found.");
//     }
// }

  

// // function selectAnswer(e){
// //     const selectedBtn = e.target;
// //     const isCorrect = selectedBtn.dataset.correct === "true";
// //     if(isCorrect){
// //         selectedBtn.classList.add("correct");
// //     }else{
// //         selectedBtn.classList.add("incorrect");
// //     }

// //     Array.from(answerButtons.childern).forEach(button => {
// //         if(button.dataset.correct === "true"){
// //             button.classList.add("correct");
// //         }
// //         button.disabled = true;
// //     });
// //     nextButton.style.display = "block";

// // }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
  
//     if (isCorrect) {
//       selectedBtn.classList.add("correct");
//       showDancingKermit(); // Call the function to display the GIF
//     } else {
//       selectedBtn.classList.add("incorrect");
//     }
  
//     Array.from(answerButtons.children).forEach((button) => {
//       if (button.dataset.correct === "true") {
//         button.classList.add("correct");
//       }
//       button.disabled = true;
//     });
  
//     nextButton.style.display = "block";
//   }
  
// // Function to show the dancing GIF
// // function showDancingKermit() {
// //     dancingKermit.classList.remove("hidden"); // Make the GIF visible
  
// //     // Hide the GIF after 3 seconds
// //     setTimeout(() => {
// //       dancingKermit.classList.add("hidden");
// //     }, 3000);
// //   }

// // Test function to display the GIF immediately
// function testGifDisplay() {
//     const dancingKermit = document.getElementById("dancing-kermit");
//     if (dancingKermit) {
//       dancingKermit.classList.remove("hidden");
//       dancingKermit.classList.add("visible");
  
//       setTimeout(() => {
//         dancingKermit.classList.remove("visible");
//         dancingKermit.classList.add("hidden");
//       }, 3000);
//     } else {
//       console.error("GIF container not found.");
//     }
//   }
  
//   // Call this function directly to test
//   testGifDisplay();
  
  
//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < followingQuestions.length) {
//       showQuestion();
//     } else {
//       questionElement.innerHTML = "Quiz Complete! You did amazing!";
//       nextButton.style.display = "none";
//       resetState();
//     }
//   });
  

// startQuiz();


const followingQuestions = [
    {
      question: "My fav food .. chl bta naughty ho rhe ho?",
      answers: [
        { text: "pasta", correct: false },
        { text: "litti chokha", correct: false },
        { text: "cake", correct: false },
        { text: "YOU", correct: true },
      ],
    },
    {
      question: "Fav color?",
      answers: [
        { text: "red", correct: false },
        { text: "pink", correct: true },
        { text: "black", correct: false },
        { text: "blue", correct: false },
      ],
    },
    {
      question: "fav position?",
      answers: [
        { text: "doggy", correct: false },
        { text: "69", correct: false },
        { text: "standing", correct: false },
        { text: "apki bnayi hui", correct: true },
      ],
    },
    {
      question: "what i love more about youu?",
      answers: [
        { text: "kisses", correct: false },
        { text: "cuteness", correct: false },
        { text: "pglpn", correct: false },
        { text: "sex", correct: true },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  let currentQuestionIndex = 0;
  let score = 0; // Track the score
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0; // Reset score
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = followingQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function showDancingKermit() {
    const dancingKermit = document.getElementById("dancing-kermit");
    if (dancingKermit) {
      dancingKermit.classList.remove("hidden");
      dancingKermit.classList.add("visible");
  
      setTimeout(() => {
        dancingKermit.classList.remove("visible");
        dancingKermit.classList.add("hidden");
      }, 3000);
    } else {
      console.error("Dancing Kermit container not found.");
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++; // Increment score for a correct answer
      showDancingKermit();
    } else {
      selectedButton.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < followingQuestions.length) {
      showQuestion();
    } else {
      showFinalScore(); // Show the score and message
    }
  });
  
  function showFinalScore() {
    resetState();
    questionElement.innerHTML = `
      <h2>Quiz Complete! You scored ${score} out of ${followingQuestions.length}.</h2>
      <p>Jaano mujhe orr! ❤️</p>
    `;
    nextButton.style.display = "none"; // Hide the next button
  }
  
  startQuiz();
  