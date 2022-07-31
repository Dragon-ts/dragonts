var a = 0;

function play(){
	document.getElementById("button").innerHTML="点击这里";
    document.getElementById("button2").innerHTML="";
}

function play2(){
    document.getElementById("button").innerHTML="";
    document.getElementById("button2").innerHTML="点击这里";
    a = a + 1;
    if (a>6 && a<8){
        window.alert("别玩了你(恼)")
    }
    else if (a>20){
        window.open("bonus.html")
    }
    else{
        return
    }
}

function sth(){
    window.open("bonus.html")
}

function intro(){
    window.location.href="DMC/intro.html";
}

function game(){
    window.location.href="DMC/game.html"
}

function team(){
    window.location.href="DMC/team.html"
}