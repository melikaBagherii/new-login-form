const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");


showPassword.addEventListener("click",function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")==="password" ? "text" : "password";
    passwordField.setAttribute("type",type);
    
})

function passwordValidation(){
    if(password.length!=8){
        alert("password must have 8 characters!");
        return false;
    }
    
    // check if password contains at least a lowercase letter
    if(containNum(password)==false){
        alert("Password must have at least one digit!")
        return false;
    }

    // check if password contains at least a number
    if(containLower(password)==false){
        alert("Password must have at least one lowercase!")
        return false;
    }

    // check if password contains at least a uppercase letter
    if(containUpper(password)==false){
        alert("Password must have at least one uppercase!")
        return false;
    }
}

function containNum(str){
    return /[0-9]/.test(str)
}
function containUpper(str){
    return /[A-Z]/.test(str)
}
function containLower(str){
    return /[a-z]/.test(str)
}

function nameValidation(input){
    // var regex = /[^0-9A-Za-z]/;
    var regex = /[^A-Za-z]/;
    input.value = input.value.replace(regex,"");
    
}