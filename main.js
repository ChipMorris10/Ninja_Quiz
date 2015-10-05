// Welcome the user
alert("Welcome to Quiz Ninja");


// view functions//
// 1st parameter is the element that's to be updated
// 2nd parameter is for the content that is to be updated with
// 3rd parameter is creating a class to the content
// class is a reserved keyword, so I'm using 'klass'
// 1st line of the function checks to see if the element already has a child, and assigns it a var name. If it doesn't, it creates one
// textContent is set to the conten provided as an argument and added to the element with appendChild
function update(element, content, klass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (klass) {
        p.className = klass;
    }
}


// dom references //
// create the questions, update the score, provide feedback on answer
var $question = document.getElementById('question');
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');


// create quiz questions
quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions":[
    { "question" : "Superman", "answer" : "Clarke Kent" },
    { "question" : "Batman", "answer" : "Bruce Wayne" },
    { "question" : "Wonder Woman", "answer" : "Dianna Prince" },
    { "question" : "Spiderman", "answer" : "Peter Parker" },
    { "question" : "Chip Morris", "answer" : "Robert Morris" }
    ]
};

// initialize the score, then update score in header
var score = 0;
update($score,score);

play(quiz);


function play(quiz) {
    // main game loop
    for (var i=0, question, answer, max=quiz.questions.length; i<max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }


// end of main game loop
gameOver();


// display the question in HTML
function ask(question) {
    update($question,quiz.question + question);
    return prompt("Enter your answer:");
}

// the right and wrong arguments are used for css styling
function check(answer) {
    if (answer === quiz.questions[i].answer) {
        update($feedback, "You are correct!", "right");
        // increase score by 1
        score++;
        update($score, score)
    } else {
        update($feedback, "Sorry, that is wrong.", "wrong");
    }
}


// inform player the game is over and how many points they scored
function gameOver() {
    update($question, "Game Over. You scored " + score + " points.");
    }
}


alert("Game over. You scored " + score + " points");
