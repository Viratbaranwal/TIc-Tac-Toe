console.log("Welcome To MyTicTacToe");
let muisc = new Audio("music.mp3");
let tap = new Audio("tap.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";
let Player1 = prompt("Enter 1st Player Name: ");
let Player2 = prompt("Enter 2nd Player Name: ");
var count = 0;

const changeTurn = ()=> {
    return turn === "X" ? "0" : "X";
}

const checkWin = ()=> {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            if(boxtexts[e[0]].innerText === "X"){
            document.querySelector('.info').innerText = Player1 + " Won";
            }
            else if(boxtexts[e[0]].innerText === "0"){
                document.querySelector('.info').innerText = Player2 + " Won";
            }
            gameover.play();
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}
if(isgameover===false){
    muisc.play();
}
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            tap.play();
            checkWin();
            count++;
            if(count === 9 && isgameover === false)
            {
                document.getElementsByClassName("info")[0].innerText = " Oops.. Nobody Won!! ";
            }
            else if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            } 
        }

    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    Player1 = prompt("Enter 1st Player Name: ");
    Player2 = prompt("Enter 2nd Player Name: ");

})






