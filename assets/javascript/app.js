
$(document).ready(function () {

    var gameTimer = 30;
    //console.log("timer" + gameTimer);


    let intervalId;



    const questions =
        [
            {
                prompt: "You exist, correct?",
                answer: true
            },
            {
                prompt: "Ringo Starr is the best Beatle",
                answer: false
            },
            {
                prompt: "True or flase?",
                answer: true
            },
            {
                prompt: "Lizard people will control the world one day",
                answer: true
            },
            {
                prompt: "Boop-bop boop-boop is waaaay better than bop-bop-boop",
                answer: true
            },
            {
                prompt: "Mark finally started his hw at a reasonable time and will turn it in with zero stress or worry",
                answer: false
            }
        ]
    var score = 0;
    var game = $('.game') //this is a class because of                          the dot


    function renderQuesions() {

        let $timer = $('<div>'); //created div tag in                               memory
        $timer.attr('id', "timer"); //added id to div
        game.append($timer); //added div to dom

        //console.log("timer" + gameTimer);

        intervalId = setInterval(decrement, 1000);//this is what's decreasing the time by a second 
        






        let $ol = $("<ol>");

        for (let i = 0; i < questions.length; i++) {

            let $li = $('<li>');
            $li.text(questions[i].prompt);

            let $trueButton = $("<button>");
            $trueButton.text('true');
            $trueButton.attr('answer', questions[i].prompt);
            $trueButton.attr('class', "Btn");
            $trueButton.attr('data-value', 'true');
            $trueButton.attr('id', "trueBtn");
            $li.append($trueButton);






            let $falseButton = $("<button>");
            $falseButton.text('false');
            $falseButton.attr('answer', questions[i].prompt);
            $falseButton.attr('class', "Btn");
            $falseButton.attr('data-value', "false");
            $falseButton.attr('id', "falseBtn");
            $li.append($falseButton);

            $ol.append($li);
        }

        let $completebutton = $("<button>");
        $completebutton.text('complete');
        $completebutton.attr('class, "Btn');
        $completebutton.attr('id', "completeBtn");
        $ol.append($completebutton);



        $('.questions').append($ol);

    }




    function stopGame() {
        clearInterval(intervalId);
        alert("Quiz Over!")
        //Your Score:0"/6");
    }


    $('#start-btn').on('click', function () {
        $(this).hide();
        alert("you have 30 seconds to complete this very difficult quiz!")
        renderQuesions();

    });
    $(document).on('click', ".Btn", function () {
        var choice = $(this).attr('data-value');

        console.log(choice);
        if (choice === 'false') {
            $(this).addClass("btn btn-danger");
           //$("#trueBtn").attr("disabled", true);

        } else {
            $(this).addClass("btn btn-primary");
           $("#falseBtn").attr("disabled", true);

        }
        //console.log("clicked");
    })

    $(document).on('click', '#completeBtn', function () {
        stopGame(); //(document) refers to the current page



    })

    function decrement() {

        //console.log("timer" + gameTimer);

        gameTimer--;

       // console.log("timer" + gameTimer);
        $("#timer").html("<h2>" + gameTimer + "</h2>");

        if (gameTimer === 0) {

            stopGame();

            alert("Time Up!");


        }
    }

})
