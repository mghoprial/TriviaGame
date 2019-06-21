
$(document).ready(function () {

    var gameTimer = 30;
    //console.log("timer" + gameTimer);


    let intervalId;


    var triva = {

        score= 0,

         questions = {
            q1: 'You exist, correct?',
        
            q2: 'Ringo Starr is the best Beatle',
                
            q3: 'True or flase?',
               
            q4: 'Lizard people will control the world one day',
            
            q5: 'Boop-bop boop-boop is waaaay better than bop-bop-boop',
             
           
            q6: 'Mark finally started his hw at a reasonable time and will turn it in with zero stress or worry', 
            },
        
    options:{
        q1: ['sure..?', 'no, I must be a figment of someones imagination'],

        q2: ['Of course he is!', 'No, George Harrison is. Paul and John were great songwriters but George was by far the most talented'],
        
        q3: ['true', 'flase'],

        q4: ['They already do', 'wut?'],

        q5: ['true', 'false'],

        q6: ['yep! hes a responsible and good studnet', 'no hes staying past midnight working on this']
        },
    answers: {
        q1: 'wut?',

        q2: 'No, George Harrison is. Paul and John were great songwriters but George was by far the most talented',

        q3: 'true',

        q4: 'wut?',

        q5: 'true',

        q6:'no hes staying past midnight working on this'

    }
    }

   
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
            $trueButton.attr('value', "true");
            $trueButton.attr('id', "trueBtn");
            $trueButton.attr('data-value', 'true')
            $li.append($trueButton);






            let $falseButton = $("<button>");
            $falseButton.text('false');
            $falseButton.attr('answer', questions[i].prompt);
            $falseButton.attr('class', "Btn");
            $trueButton.attr('value', "false");
            $falseButton.attr('id', "falseBtn");
            $falseButton.attr('data-value', 'false');
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
        console.log($(this).val());
        if (!$(this).val()) {
            $(this).addClass("btn btn-danger");
           // $("#trueBtn").attr("disabled", true);

        } else {
            $(this).addClass("btn btn-primary");
           // $("#falseBtn").attr("disabled", true);

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
