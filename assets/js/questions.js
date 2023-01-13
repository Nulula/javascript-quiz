//This js stores the questions and question logic (?)

let quizQuestions = [
    {
      question: "Which built-in method calls a function for each element in the array?",
      choices: {
        1: "while()",
        2: "loop()",
        3: "forEach()",
        4: "None of the above",
      },
      correctChoice: "3"
    },
  
    {
      question: "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
      choices: {
        1: "concat()",
        2: "pop()",
        3: "push()",
        4: "match()",
      },
      correctChoice: "1"
    },
  
    {
      question: "JavaScript file has an extension of:",
      choices: {
        1: ".xml",
        2: ".js",
        3: ".react",
        4: ".sc",
      },
      correctChoice: "2"
    },
  
    {
      question: "Which of the dialog box display a message and a data entry field?",
      choices: {
        1: "alert()",
        2: "msg()",
        3: "confirm()",
        4: "prompt()",
      },
      correctChoice: "4"
    },
  ];

//function questions-logic
//dynamically create question in "question-title"
//dynamically create choices in "choices" (ol,li id 1,li id 2,li id 3,li id 4,ol)