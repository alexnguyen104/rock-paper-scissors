const btns = Array.from(document.getElementsByClassName("btn"));
const display = Array.from(document.getElementsByClassName("display"));
const COM = Array.from(document.getElementsByClassName("RPS"));
const alertBoard = document.getElementById("alertBoard");
const info = document.getElementById("info");
const restart = document.getElementById("restart")
let userChoice;
let COMchoice
let RPS = Math.floor(Math.random()*3);
//player
btns[0].onclick=function(){
    display[0].style.display="block";
    userChoice = "rock";
    COMRPS();
    checking();
    
}
btns[1].onclick=function(){
    display[1].style.display="block";
    userChoice="paper";
    COMRPS();
    checking();
    
}
btns[2].onclick=function(){
    display[2].style.display="block";
    userChoice="scissors";
    COMRPS();
    checking();
}
//COM
function COMRPS(){ 
    COM[RPS].style.display="block";
    if(RPS == 0){
        COMchoice="rock";
    }else if(RPS == 1){
        COMchoice="paper";
    }else{
        COMchoice="scissors";
    }
}
function checking(){
    // tie condition
    if(userChoice == COMchoice){
        alertBoard.style.display="block";
        info.textContent="Tie !"
        info.style.fontSize="150px"
        info.style.marginTop="60px"
        setTimeout(function(){
            alertBoard.style.display='none';
            info.style.fontSize="100px"
            info.style.marginTop="30px"
            for(let i=0; i<display.length;i++){
                display[i].style.display="none";
                COM[i].style.display="none";
            }
            RPS = Math.floor(Math.random()*3);
        }, 1000)
    }
    //win conditions
    switch(userChoice){
        case 'rock': if(COMchoice == "scissors"){
            whenWin();
        }
        break;
        case 'paper': if(COMchoice == "rock"){
            whenWin();
        }
        break;
        case 'scissors': if(COMchoice == "paper"){
            whenWin();
        }
        break;
    }
    function whenWin(){
        alertBoard.style.display="block";
        info.textContent="You has won !"
        restart.style.display="block";
    }
    //lose conditions
    switch(userChoice){
        case 'rock': if(COMchoice == "paper"){
            whenLose();
        }
        break;
        case 'paper': if(COMchoice == "scissors"){
            whenLose();
        }
        break;
        case 'scissors': if(COMchoice == "rock"){
            whenLose();
        }
        break;
    }
    function whenLose(){
        alertBoard.style.display="block";
        info.textContent="You has lost !";
        restart.style.display="block";
    }
}
restart.onclick=function(){
    location.reload();
}


