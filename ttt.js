console.log("Welcome to TTT");
let gameover = false;
let turn = "X";

const gameTurn = ()=>{
    return turn === "X"? "0": "X"; 
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5 ,8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            gameover = true;
            document.querySelector('.info').style.fontSize = '50px';
        }    
    });
}

// logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        console.log("clicked");
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = gameTurn();
            console.log("Turned");
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = 'Turn ' + turn;
            }            
        }
    })
})

// reset
reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = '';
    })
    turn = 'X';
    gameover = false;
    document.querySelector('.info').style.fontSize = '25px';
    document.querySelector('.info').innerText = 'Turn ' + turn;
});