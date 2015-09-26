// Welcome the user
alert("Welcome to Quiz Ninja");

var quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
    ];

var score = 0;

play(quiz);

function play(quiz) {
    // main game loop
    for (var i=0, question, answer, max=quiz.length; i<max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    // end of main game loop
    gameOver();

    function ask(question) {
        return prompt(question); // quiz[i][0] is the ith questions
    }

    function check(answer) {
        if (answer === quiz[i][1]) {   // quiz[i][1] is the ith answer
            alert("Correct!");
            // increase score by 1
            score++;
        } else {
            alert("Wrong!");
        }
    }

    function gameOver() {
        // inform the player that the game has finished and them them how many points they have scored
        alert("Game Over, you scored " + score + " points");
    }
}


// for (var i = 0, max=quiz.length; i < max; i ++) {
//     // get answer from user
//     var answer = prompt(quiz[i] [0]);    // quiz[i] [0] is the ith question

//     // check if answer is correct
//     if (answer === quiz[i] [1]) {    // quiz[i] [1] is the ith answer
//         alert("Correct");
//         // increase score by 1
//         score++;
//     } else {
//         alert("Wrong");
//     }
// }

alert("Game over. You scored " + score + " points");
