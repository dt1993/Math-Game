var playing = false;
var score;
var action;
var timeremaining


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
        timeremaining = 5;

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
        
  
       
       
       //reduce time by 1 sec in loops
             //time left?
                 //yes -> continue
                 //no -> gameover
       
       //generate new Q&A


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
    
}