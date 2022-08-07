function inServer(){
    var countDownDate = new Date("Aug 7, 2022 18:45:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("inServer").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("inServer").innerHTML = "已完成";
      }
    }, 1000);    
}
inServer();

function lobby(){
    var countDownDate = new Date("Aug 7, 2022 18:50:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("lobby").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("lobby").innerHTML = "已完成";
      }
    }, 1000);    
}
lobby();

function teamHead(){
    var countDownDate = new Date("Aug 7, 2022 19:20:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("teamHead").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("teamHead").innerHTML = "已完成";
      }
    }, 1000);    
}
teamHead();

function vote(){
    var countDownDate = new Date("Aug 7, 2022 19:30:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("vote").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("vote").innerHTML = "已完成";
      }
    }, 1000);    
}
vote();

function first(){
    var countDownDate = new Date("Aug 7, 2022 19:40:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("1st").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("1st").innerHTML = "已完成";
      }
    }, 1000);    
}
first();

function second(){
    var countDownDate = new Date("Aug 7, 2022 20:00:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("2nd").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("2nd").innerHTML = "已完成";
      }
    }, 1000);    
}
second();

function third(){
    var countDownDate = new Date("Aug 7, 2022 20:20:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("3rd").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("3rd").innerHTML = "已完成";
      }
    }, 1000);    
}
third();

function darkSide(){
    var countDownDate = new Date("Aug 7, 2022 20:40:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("darkSide").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("darkSide").innerHTML = "已完成";
      }
    }, 1000);    
}
darkSide();

function All(){
    var countDownDate = new Date("Aug 7, 2022 21:00:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("All").innerHTML ="预计还有" + hours + "时 "
      + minutes + "分 ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("All").innerHTML = "已完成";
      }
    }, 1000);    
}
All();