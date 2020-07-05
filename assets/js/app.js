var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;


//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
    location.reload(); //reload page

    //if we are not playing
    }else{
        //reload page
        playing = true;
        //set score to 0
        score = 0;

document.getElementById("scorevalue").innerHTML = score;

//show countdown box
        show("timeremaining");
        timeremaining = 60;

document.getElementById("timeremainingvalue").innerHTML = timeremaining;

//hide game over box
        hide("gameOver");

//change button to reset
document.getElementById("startreset").innerHTML = "Reset Game";

//start countdown
startCountDown();

//generate new Q&Q
generateQA();


}
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        //check if we are playing
        if(playing==true){//yes
            if(this.innerHTML == correctAnswer){
                //correct answer
                score++;
                document.getElementById("scorevalue").innerHTML = score;
    
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct")
                }, 1000)
    
                //generate new Q&A
                generateQA();
    
            }else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong")
                }, 1000)
    
            }
    
        }
    }
}

//if we click on an answer box
    //if we are playing
       //correct?
            //yes
                //increase score 
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box

 //functions           

 //start counter
function startCountDown(){
    action = setInterval(function(){
        timeremaining -= 1;

document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0) {//game over
            stopCountDown();
            show("gameOver");

document.getElementById('gameOver').innerHTML = "<p>game over!</p><p>your score is " + score + ".</p> ";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

//stop counter
function stopCountDown(){
    clearInterval(action);
}

//hide element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show element
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generateQ&A
function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;

    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with correct answer

    //fill other boxes with wrong answers

var answers = [correctAnswer]

    for(i=1; i<5; i++){
       if(i != correctPosition){
           var wrongAnswer;
           do{
            wrongAnswer = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));//wrong answer
            
           }while(answers.indexOf(wrongAnswer)>-1)

           document.getElementById("box"+i).innerHTML = wrongAnswer;
           answers.push(wrongAnswer);

       } 
    }
}