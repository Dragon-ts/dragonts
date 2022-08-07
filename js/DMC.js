function bladeBattle(){
    window.location.href="bledbattle.html"
}

function parkourMaster(){
    window.location.href="parkourmaster.html"
}

function race(){
    window.location.href="race++.html"
}

function darkside(){
    window.location.href="darkside.html"
}


function countDown(){
    var countDownDate = new Date("Aug 7, 2022 19:30:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = days + "天 " + hours + "时 "
      + minutes + "分 " + seconds + "秒 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "游戏已开始!";
      }
    }, 1000);
}
countDown();