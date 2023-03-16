console.log("Welcome To MyTicTacToe");
// let muisc = new Audio("music.mp3");
let tap = new Audio("tap.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";
let Player1 = prompt("Enter 1st Player Name: ");
let Player2 = prompt("Enter 2nd Player Name: ");
var count = 0;
var ngames = prompt("Enter the number of sets: ");
var point1 = 0;
var point2 = 0;



const changeTurn = ()=> {
    return turn === "X" ? "0" : "X";
}

let d =document.querySelector('.player1');
d.innerText = Player1 + " Score";

let t = document.querySelector('.player2');
t.innerText = Player2 + " Score";

let w = document.querySelector('.point1');
w.innerText = point1 ;

let v = document.querySelector('.point2');
v.innerText = point2 ;

let s = document.querySelector('.ngames');
s.innerText = ngames ;

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
            point1++;
            w.innerText = point1 ;
            }
            else if(boxtexts[e[0]].innerText === "0"){
                document.querySelector('.info').innerText = Player2 + " Won";
                point2++;
                v.innerText = point2 ;
            }
            s.innerText = ngames ;
            gameover.play();
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "190px";
        }
    })
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
    count=0;
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})

nextRound.addEventListener('click', ()=>{
    let bt = document.querySelectorAll('.boxtext');
    Array.from(bt).forEach(e=>{
        e.innerText="";
    });
    turn = "X";
    isgameover = false;
    count=0;
    ngames--;
    s.innerText = ngames ;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";


})

newGame.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    count=0;
    point1 = 0;
    point2 = 0;
    Player1 = prompt("Enter 1st Player Name: ");
    Player2 = prompt("Enter 2nd Player Name: ");
    ngames = prompt("Enter the number of sets: ");
    d.innerText = Player1 + " Score";
    t.innerText = Player2 + " Score";
    v.innerText = point2 ;
    w.innerText = point1 ;
    s.innerText = ngames ;
})




