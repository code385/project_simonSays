let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns =["yellow","red","green","purple"];

let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if (started == false){
       console.log("Game is Started");
       started = true;

       levelUp();
    };
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`; 
 
    //random btn choose
    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randtBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameFlash(randtBtn);
}

function checkAns(ind){

    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);        }
    }else{
        h3.innerHTML = `Game Over! Your Score is <b>${level*100}</b> <br>Press any Key to Start Game.`;
        document.querySelector("body").style.backgroundColor= "black";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}