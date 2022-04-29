# X-OKS
X OKS game
During the making of this game, we encounter two major problems. The first problem is how to change the X symbol and O with each click.
I solved this through the insertSymbol function:
```
let symbol="X";

function insertSymbol(){
this.removeEventListener("click",insertSymbol);
(symbol==="X")? symbol="O":symbol="X";
this.innerHTML=symbol;
```
The function is called each time the box element is clicked.
I declared the global variable symbol and assigned it an "X". 
In the function I check if that variable is "X", if it is, the value changes to "O", if not, I changed the value of the variable symbol to "X".

Another problem is how to check the winner.
I achieved this through the checkWinner () function. Before that, I declared an array in which I placed all possible combinations of box elements that could be a winning combination.
In function, I went through these combinations with the help of the foreach loop and checked whether certain box elements have the same value and whether one of them is empty.

```
function checkWinnner(){

    line.forEach(line => {
        let box1=boxes[line[0]];
        let box2=boxes[line[1]];
        let box3=boxes[line[2]];
        let brojac=0;
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

```
