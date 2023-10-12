  
     
  
  
   
  // variables to store specific elements from the HTML
  var questionSpace = document.getElementById("questionSpace")
  var choiceSpace = document.getElementById("choiceSpace")
  var smart = document.getElementById("smart")
  var dumb = document.getElementById("dumb")
  var userInput = document.getElementById("userInput"); 
  var message = document.getElementById("message");
  var myDiv = document.getElementById("myDiv");
  
  
  
  smart.style.display = 'none';
  dumb.style.display = 'none';
  myDiv.style.display = 'none';
  
  
  
  var quizQuestions = [ //an array?
  {question: "what is 1+1" ,
  choices: ["2", "4", "6"],
  answer: "2"},
  {question: "what is 2+2" ,
  choices: ["4", "3", "7"],
  answer: "4"},
  {question: "what is 3+3" ,
  choices: ["4", "8", "6"],
  answer: "6"},
  {question: "how tall is angeline" ,
  choices: ["3ft", "4ft", "5ft"],
  answer: "3"},
  {question: "what is 4+4" ,
  choices: ["8", "4", "2"],
  answer: "8"},
  
  ]
  var questionState = 0;
  var score = 0;
  
  questionSpace.innerHTML = quizQuestions[questionState]['question'];
  choiceSpace.innerHTML = quizQuestions[questionState]['choices'];
  
  function submitQuestion() {
  
  if( userInput.value == "") {
    alert("Answer the question, you egg!") }


    else if(userInput.value == quizQuestions[questionState]['answer']) {
      score++
    update2()

       } else{
        update2()
       }}

  
  function update2() {
   
    if(questionState == 4) {
      userInput.style.display = "none";
      questionSpace.style.display = "none";
     choiceSpace.style.display = "none";
  message.innerHTML = "your score is " + score
  
  
  if (score >= 2) {
    areYouCool.innerHTML = "your smart you nerd"
    smart.style.display = 'block';
    dumb.style.display = 'none';
  }
  
  if (score <= 2) {
    areYouCool.innerHTML = "why you so dumb"
    smart.style.display = 'none';
    dumb.style.display = 'block';
  }
       }
         questionState++ 
           questionSpace.innerHTML = quizQuestions[questionState]['question'];
           userInput.value = ""
          
  
  
  }
  