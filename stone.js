let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=['rock', 'paper','scissor']; 
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    console.log("Game was draw..");
    msg.innerText= "It's a Draw!";
    msg.style.backgroundColor="#2D4356";
}

const showWinner=(userWin,userchoice,compchoice)=>{
     if (userWin){
        userscore++;
        userscorePara.innerText=userscore;
        console.log('You win!');
        msg.innerText= `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        compscore++;
        compscorePara.innerText=compscore;
        console.log('You lose');
        msg.innerText=`Oops! You Lose.${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
     }
}
const playGame=(userchoice)=>{
    console.log("User choice= ",userchoice);
    // generate computer choice
    const compchoice =genCompchoice();
    console.log("Computer choice= ",compchoice);

    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==='rock'){
            userWin=compchoice ==='paper' ?false:true;
        }
        else if(userchoice==='paper'){
            userWin=compchoice ==='scissor' ?false:true;
        }
        else{
            userWin=compchoice ==='rock' ?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked..",userchoice);
        playGame(userchoice);
    });
})