const btns = Array.from(document.getElementsByClassName("btn"));
const display = Array.from(document.getElementsByClassName("display"));
const COM = Array.from(document.getElementsByClassName("RPS"));
const alertBoard = document.getElementById("alertBoard");
const info = document.getElementById("info");
const restart = document.getElementById("restart")
let userChoice;
let COMchoice;
let z =0;
let RPS = Math.floor(Math.random()*3);
//player
btns[0].onclick=function(){
    display[0].style.display="block";
    userChoice = "rock";
    btns[1].onclick=""
    btns[2].onclick=""
    COMRPS();
    checking();
    btns[0].onclick=""
}
btns[1].onclick=function(){
    display[1].style.display="block";
    userChoice="paper";
    btns[0].onclick=""
    btns[2].onclick=""
    COMRPS();
    checking();
    btns[1].onclick="";
    
}
btns[2].onclick=function(){
    display[2].style.display="block";
    userChoice="scissors";
    btns[1].onclick=""
    btns[0].onclick=""
    COMRPS();
    checking();
    btns[2].onclick=""
}
//COM
function COMRPS(){ 
    let x = setInterval(function(){
        z++;
        if(z > 3){
            z=1;
        }
        if(z == 1){
            COM[2].style.display="none";
            COM[0].style.display="block";
        }
        else if(z == 2){
            COM[0].style.display="none";
            COM[1].style.display="block";
        }else{
            COM[1].style.display="none";
            COM[2].style.display="block";
        }
    },90);
    setTimeout(function(){
        clearInterval(x);
        for(i=0;i<3;i++){
            COM[i].style.display="none"
        }
        COM[RPS].style.display="block"
    }, 1000)
       
   
    if(RPS == 0){
        COMchoice="rock";
    }else if(RPS == 1){
        COMchoice="paper";
    }else{
        COMchoice="scissors";
    }
}
function checking(){
    setTimeout(
        function(){
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
    },1000);
}
restart.onclick=function(){
    location.reload();
}


