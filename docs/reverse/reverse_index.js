function login(){
    let password = document.getElementById("password");
    if(password.value == 999999){
        window.location.replace("next1_reverse.html");
    }
    if(password.value === "илечак"){
        window.location.replace("next2_reverse.html");
    }
    if(password.value === "илечаК"){
        window.location.replace("next2_reverse.html");
    }
}
function startTimer() {
    var my_timer = document.getElementById("timer");
    var time = parseInt(my_timer.innerHTML);
    var s = time;
    if (s == 0) {
            alert("BAIT ZU DASTSU! ТРЕТЬЯ БОМБА!");
            window.location.replace("../opening.html");
            return;
        }
    else s--;
    if (s < 10) s = "0" + s;
    my_timer.innerHTML = s;
    setTimeout(startTimer, 1000);
  }