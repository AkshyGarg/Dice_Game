
onload = myFunc();
function myFunc(){
    var x = Math.random();
    var y = Math.random();
    x = Math.floor(x*5)+1;
    y = Math.floor(y*5)+1;
    var n = "images/dice"+x+".png";
    var q = "images/dice"+y+".png";
    document.querySelector(".d1").setAttribute("src",n);
    document.querySelector(".d2").setAttribute("src",q);

    var x1 = document.querySelector(".d1").getAttribute("src");
    var y1 = document.querySelector(".d2").getAttribute("src");
    if(x>y) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(x<y){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else
    {document.querySelector("h1").classList.add("draw");
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
    
