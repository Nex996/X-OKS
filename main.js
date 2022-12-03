let table=document.querySelector(".table")
let symbol="X";
let winner=document.createElement("div");
winner.className="winner";
let container=document.querySelector(".container");
let boxes="";
let counter=0;
let restart=document.createElement("div");
restart.className="restart";
restart.innerHTML=`Nobody won`

let line=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];




game()

function game(){
  
    createGrid();
    counter=0;
    boxes=document.querySelectorAll(".box");



    boxes.forEach(element => {
        element.addEventListener("click", insertSymbol);
        
    });
}



function insertSymbol(){
this.removeEventListener("click",insertSymbol);
(symbol==="X")? symbol="O":symbol="X";
this.innerHTML=symbol;
checkWinner();





}


function checkWinner(){
    line.forEach(line => {
        let box1=boxes[line[0]];
        let box2=boxes[line[1]];
        let box3=boxes[line[2]];
        if(box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML && box1.innerHTML!=""){
            box1.style.background="tomato";
            box2.style.background="tomato";
            box3.style.background="tomato";
       
            stopGame();
            winner.innerHTML=`Winner is ${symbol}`
            container.append(winner);
            setTimeout(()=>{
                winner.remove();
            },2000);
            setTimeout(game, 2000);
           
        

        } else{
            counter++;
            
        }
     
    });

    if(counter==72){
        container.append(restart);
        setTimeout(game, 2000);
        setTimeout(()=>{
            restart.remove();
        },1950)
    }

}


function stopGame(){
    boxes.forEach(element=>{
        element.removeEventListener("click", insertSymbol)
    })
}



function createGrid(){
    let content="";
    for (let index = 0; index < 9; index++) {
        content+=`<div class="box"></div>`

        
    }

    table.innerHTML=content;
}
