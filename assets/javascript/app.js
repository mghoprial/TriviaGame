let gameTimer;

const questions = 
[
    { prompt: "You exist, correct?",
    answer: true
    },
    { prompt: "Ringo Starr is the best Beatle",
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
var score = 0;


function renderQuesions(){
console.log("rendering questions" + renderQuesions);

let $ol= $("<ol>");

for (let i=0; i<questions.length; i++){
    
    let $li = $('<li>');
    $li.text(questions[i].prompt);

    let $trueButton = $("<button>");
    $trueButton.text('true');
    $trueButton.attr('data-answer', questions[i].prompt);
    $trueButton.attr('class', "Btn");
    $trueButton.attr('value', "true");
    $trueButton.attr('id', "trueBtn");
    $trueButton.attr('data-value', 'true')
    $li.append($trueButton);
    
    
    

    
    
    let $falseButton = $("<button>");
    $falseButton.text('false');
    $falseButton.attr('data-answer', questions[i].prompt);
    $falseButton.attr('class', "Btn");
    $trueButton.attr('value', "false");
    $falseButton.attr('id', "falseBtn");
        $falseButton.attr('data-value', 'false');
        $li.append($falseButton);
        
        $ol.append($li);
    }
    
    
    
    $('.questions').append($ol);
    
}
 



function stopGame() {
    clearTimeout(gameTimer);
    alert ("Quiz Over!")
    //Your Score:0"/7");
}




$(document).ready(function() {
    
    $('#start-btn').on('click', function() {
        $(this).hide();
        alert ("you have 30 seconds to complete this very difficult quiz!")
        renderQuesions();
        gameTimer = setTimeout(stopGame, 30000);
        $(".Btn").on('click', function(){
            if(!$(this).val()){
                $(this).addClass("btn btn-danger");
                $("#trueBtn").attr("disabled", true);
                
            } else {
                $(this).addClass("btn btn-primary");
                $("#falseBtn").attr("disabled", true);

            }
            console.log("clicked");
        })
    });

          
})
