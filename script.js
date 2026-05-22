const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

confirmPassword.addEventListener("keyup", () => {

    if(password.value === confirmPassword.value){
        message.innerHTML = "Passwords Match";
        message.style.color = "green";
    }
    else{
        message.innerHTML = "Passwords Do Not Match";
        message.style.color = "red";
    }

});