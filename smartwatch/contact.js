var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
function validateName(){
    var name = document.getElementById('fname').value;
    if(name.length ==0){
    nameError.innerHTML='Name is required';
    return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle">';
    return true;

}
function validateEmail(){
    var email=document.getElementById('email').value;
    
    if(email.length==0){
        emailError.innerHTML='Eamil is required'
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }
    emailError.innerHTML='<i class="fas fa-check-circle">';
    return true;

}
function validateMessage(){
    var message =document.getElementById('message').value;
    if(message.length==0){
        messageError.innerHTML='Write message';
        return false
    }
    if(!message.match(/^[A-Za-z]{5,7}$/)){
        messageError.innerHTML='Ok';
        return false
    }
    emailError.innerHTML='<i class="fas fa-check-circle">';
    return true;
}