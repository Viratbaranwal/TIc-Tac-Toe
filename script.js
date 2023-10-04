console.log("Welcome To MyTicTacToe");
let sounds = false;
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
    return turn === "X" ? "O" : "X";
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
    let boxtexts = document.getElementsByClassName("boxtext");
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
            else if(boxtexts[e[0]].innerText === "O"){
                document.querySelector('.info').innerText = Player2 + " Won";
                point2++;
                v.innerText = point2 ;
            }
            s.innerText = ngames ;
            gameover.play();
            isgameover = true;
            if(isgameover)
            {
                ngames--;
                s.innerText = ngames;
            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            
        }
    })
}
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && isgameover==false){
            boxtext.innerText = turn;
            tap.play();
            turn = changeTurn();
            checkWin();
            
            
            count++;
            if(count === 9 && isgameover === false)
            {
                document.getElementsByClassName("info")[0].innerText = " Oops.. Nobody Won!! ";
                ngames--;
                s.innerText = ngames;
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
    if(isgameover)
    {
        ngames++;
        s.innerText = ngames;
    }
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})

nextRound.addEventListener('click', ()=>{
    let bt = document.querySelectorAll('.boxtext');
    Array.from(bt).forEach(e=>{
        e.innerText="";
    });
    if(ngames<=0)
    {
        let winner = (point1>point2)?Player1 : Player2;
        Swal.fire({
            title: winner + " won the Match.",
            confirmButtonColor: '#FF0000',
            confirmButtonText: 'New Game'
          }).then((result) => {
            if (result.isConfirmed) {
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
            }
          })
    }
    turn = "X";
    isgameover = false;
    count=0;
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


