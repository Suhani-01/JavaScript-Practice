let userScore=0;
let computerScore=0;

let userBoard=document.querySelector("#user");
let compBoard=document.querySelector("#computer");
let message=document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const gencompChoice=()=>{
    const option=["rock","paper","scissors"];
    //to generate between 0 to 2

    let cmp=Math.floor(Math.random()*3);
    return option[cmp];
}

const draw=(compchoice)=>{
    let display=`Its a Draw !!! Computer also choosed ${compchoice}`;
    message.textContent=display;
    message.style.backgroundColor="rgb(122, 139, 14)";
}

//computer won
const compwon=(compchoice)=>{
    computerScore+=1;
    compBoard.textContent=computerScore;
    let display=`You Lose !!! Computer choosed ${compchoice}`;
    message.style.backgroundColor="rgb(138, 38, 38)";
    message.textContent=display;
}

//user won
const userwon=(compchoice)=>{
    userScore+=1;
    userBoard.textContent=userScore;
    let display=`You Won !!! Computer choosed ${compchoice}`;
    message.style.backgroundColor="rgb(85, 118, 226)";
    message.textContent=display;
}

const playgame=(userchoice)=>{
    //generate computer choice
    const compchoice=gencompChoice();

    if(compchoice===userchoice){
        //Draw Game
        draw(compchoice);
    }
    else if((compchoice==="rock" && userchoice==="scissors") || (compchoice==="scissors" && userchoice==="paper") || (compchoice==="paper" && userchoice==="rock")){
        //computer won
        compwon(compchoice);
    }
    else{
        //user won
        userwon(compchoice);
    }
};

choices.forEach((choice)=>{
    //adding event for each choice 
    choice.addEventListener("click",()=>{
        //fetching the id of the sign user choosed 
        const userchoice=choice.getAttribute("id");

        //now play the game
        playgame(userchoice);


    });
});