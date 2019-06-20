//*****Psu-Psu-Psuco-Code-Psu-Psu-Psuco-Code-**************************
//start button
//make a timer that counts down from 90 seconds.  Alert if Time is up
//create multiple choice or T/F questions with checkmarks that fill
//need to create a "complete" button
// tally a score when "complete" button is hit while also stopping timer
//********************************************************************


let gameTimer;

const questions = 
[
    { prompt: "You exist, correct?",
    answer: true
    },
    { prompt: "Ringo Starr is the best Beatle",
    answer: false
    },
    { prompt: "True or false- you have good taste in music?",
    answer: false
    },
    { prompt: "True or flase?",
    answer: true 
    },
    { prompt: "Lizard people will control the world one day",
    answer: true
    },
    { prompt: "Boop-bop boop-boop is waaaay better than bop-bop-boop",
    answer: true
    },
    { prompt: "Mark finally started his hw at a reasonable time and will turn it in with zero stress or worry",
    answer: false
    }
]

function renderQuesions(){
console.log(renderQuesions);

let $ol= $("<ol>");

for (let i=0; i<questions.length; i++){
    
    let $li = $('<li>');
    $li.text(questions[i].prompt);

    let $trueButton = $("<button>");
    $trueButton.text('true');
    $trueButton.attr('data-answer', questions[i].prompt);
        $trueButton.attr('data-value', 'true')
        $li.append($trueButton);

        let $falseButton = $("<button>");
        $falseButton.text('false');
        $falseButton.attr('data-answer', questions[i].prompt);
        $falseButton.attr('data-value', 'false');
        $li.append($falseButton);

        $ol.append($li);
}



$('.questions').append($ol);

}


function stopGame() {
    clearTimeout(gameTimer);
}

$(document).ready(function() {

    $('#start-btn').on('click', function() {
        $(this).hide();
        renderQuesions();
        gameTimer = setTimeout(stopGame, 90000);
    });


})