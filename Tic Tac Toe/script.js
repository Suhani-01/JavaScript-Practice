let isO=true;
let hidden=document.querySelector(".hiddenhu");
let winningpattern=[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8]
                    ];

let mge=document.querySelector(".message");
let btn=document.querySelectorAll(".box");
btn.forEach((bxx)=> {
    bxx.addEventListener("click",()=>{
        if(isO){
            bxx.innerText="O";
            bxx.style.color="green";
           
        }
        else{
            bxx.innerText="X";
            bxx.style.color="red";
           
        }
        isO=!isO;
        bxx.disabled=true;
        checkwinner();

    });
});

const nomodification=()=>{
    for(bxx of btn){
        bxx.disabled=true;
    }
}

document.querySelector(".restart").addEventListener("click", () => {
    location.reload(); // Reloads the current page
});


const checkwinner=()=>{
    for(let pattern of winningpattern){
        let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                mge.innerText="Winner";
                hidden.style.display="block";
                btn[pattern[0]].style.backgroundColor="gold";
                btn[pattern[1]].style.backgroundColor="gold";
                btn[pattern[2]].style.backgroundColor="gold";
                console.log("winner");
                nomodification();
                return;
            }
        }
    }
}