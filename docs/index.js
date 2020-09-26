
function login(){
    let password = document.getElementById("password");
    if(password.value == 999999){
        window.location.replace("next1.html");
    }
    if(password.value === "качели"){
        window.location.replace("next2.html");
    }
    if(password.value === "Качели"){
        window.location.replace("next2.html");
    }
}


