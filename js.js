var email = document.getElementById('email');
var error = document.getElementById('spanEmail');
var btnSucess = document.getElementById('btnSucess')


function validateEmail(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = "Valid email required";
        email.style.color = "hsl(4, 100%, 67%)";
        email.style.backgroundColor = "hwb(4 75% 0%)";
        email.style.border = "2px solid hsl(4, 100%, 67%)";
        return false;
    }else{
        error.innerHTML = "";
        email.style.color = "";
        email.style.backgroundColor = "";
        email.style.border = "";
        return true;
    }
}

function btnValidate(){
    var emailBtn = document.getElementById('email').value;
    if(emailBtn == 'email@company.com'){
        location.href = "sucess.html";
    }else{
        alert('Tente Novamente!')
    }
}


