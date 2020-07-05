var playing = false;
var score;

//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
    location.reload(); //reload page
    }else{//if we are not playing
        //reload page
        playing = true;
        //set score to 0
        score = 0;

document.getElementById("scorevalue").innerHTML = score;

//show countdown box
document.getElementById("timeremaining").style.display =" block";

//change button to reset
document.getElementById("startreset").innerHTML = "Reset Game"

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

