const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click",function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")==="password" ? "text" : "password";
    passwordField.setAttribute("type",type);
})


function passwordValidation(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // if(firstname == ""){
    //     document.getElementById("firstname").style.border="2px solid red"
    // }
    // else{
    //     document.getElementById("firstname").style.border="0px"
    //     var input = document.getElementById("firstname");
    //     input.addEventListener("focus", function () {
    //         this.style.border = "2px solid rgb(77, 147, 238)";  
    //     });
    // }
    isFilled(firstname,"firstname");
    isFilled(lastname,"lastname");
    // isFilled(firstname,"email");
    
    
    // if(lastname == ""){
    //     document.getElementById("lastname").style.border="2px solid red"
    // }
    // else{
    //     document.getElementById("lastname").style.border="0px"
    //     var input = document.getElementById("lastname");
    //     input.addEventListener("focus", function () {
    //         this.style.border = "2px solid rgb(77, 147, 238)";  
    //     });
    // }
    if(emailValidation(email) == false){
        const myStyles = `
        border: 2px solid red;
    `;
        document.getElementById("email").style.cssText = myStyles;
    }
    else{
        document.getElementById("email").style.border="0px"
        var input = document.getElementById("email");
        input.addEventListener("focus", function () {
            this.style.border = "2px solid rgb(77, 147, 238)";  
        });
        input.addEventListener("blur", function () {
            this.style.border = "0px";  
        });

    }



    // let password = document.getElementById("password").value;
    if(password.length!=8 || containNum(password)==false || containLower(password)==false || (containUpper(password)==false)){
        document.getElementById("passwordError").innerHTML = "Your password must have 8 characters and contains at least one uppercase and lowercase letter and a number! ";
        document.getElementById("password").style.border="2px solid red"
    }

    else{
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("password").style.border="0px"
        var input = document.getElementById("password");
        input.addEventListener("focus", function () {
            this.style.border = "2px solid rgb(77, 147, 238)";  
        });
        input.addEventListener("blur", function () {
            this.style.border = "0px";  
        });


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
function emailValidation(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function nameValidation(input){
    // var regex = /[^0-9A-Za-z]/;
    var regex = /[^A-Za-z]/;
    input.value = input.value.replace(regex,"");
    
}


function shrink(inputId,id,top,left){
    let input = document.getElementById(inputId).value;
    const myStyles = `
        position: absolute;
        top: 345px;
        left: 130px;
        color: light gray;
        font-size: 9px;
    `;
    if(input == ""){
        
    }
    else{
        // document.getElementById(id).style.cssText = myStyles;
        // document.getElementById(id).style.cssText = myStyles;
        document.getElementById(id).style.position="absolute";
        document.getElementById(id).style.top = top;
        document.getElementById(id).style.left = left;
        document.getElementById(id).style.color = 'light gray';
        document.getElementById(id).style.fontSize = "9px";
    }
}


function isFilled(str,id){
    if(str == ""){
        document.getElementById(id).style.border="2px solid red"
    }
    else{
        document.getElementById(id).style.border="0px"
        var input = document.getElementById(id);
        input.addEventListener("focus", function () {
            this.style.border = "2px solid rgb(77, 147, 238)";  
        });
        input.addEventListener("blur", function () {
            this.style.border = "0px";  
        });
    }
}
