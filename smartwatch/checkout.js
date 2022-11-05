var nameError =document.getElementById('name-error');
var lastError =document.getElementById('last-error');
var phoneError =document.getElementById('phone-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('subit-error');

var postError =document.getElementById('post-error');

var countryError = document.getElementById('country-error');


function validateCountry(){
    var country =document.getElementById('c_state_country').value;
    if(country.length ==0){
        countryError.innerHTML='Country name ';
        return false;
    }
    if(country=="India"){
        countryError.innerHTML='<i class="fas fa-check-circle">';
        return true;
    }
    else if(country=="USA"){
        countryError.innerHTML='<i class="fas fa-check-circle">';
        return true;
    }
    else if(country=="UAE"){
        countryError.innerHTML='<i class="fas fa-check-circle">';
        return true;
    }
    else if(country=="Australia"){
        countryError.innerHTML='<i class="fas fa-check-circle">';
        return true;
    }
    else if(country=="Japan"){
        countryError.innerHTML='<i class="fas fa-check-circle">';
        return true;
    }
  
    countryError.innerHTML='write';
    return false;
}



function validateName(){
    var name = document.getElementById('c_fname').value;
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
function validateLast(){
    var last = document.getElementById('c_lname').value;
    if(last.length ==0){
    lastError.innerHTML='Name is required';
    return false;
    }

    if(!last.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        lastError.innerHTML='write full name';
        return false;
    }
    lastError.innerHTML='<i class="fas fa-check-circle">';
    return true;

}
function validatePhone(){
    var phone =document.getElementById('c_phone').value;
    if(phone.length ==0){
        phoneError.innerHTML='phone no is required';
        return false;

    }
    if(phone.length !==10){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;

    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits number';
        return falsel;
    }
    phoneError.innerHTML='<i class="fas fa-check-circle">';
    return true;


}
function validateEmail(){
    var email=document.getElementById('c_email_address').value;
    
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
function validatePost(){
    var post =document.getElementById('c_postal_zip').value;
    if(post.length ==0){
        postError.innerHTML='phone no is required';
        return false;

    }
    if(post.length !==5){
        postError.innerHTML='Phone no should be 10 digits';
        return false;

    }
    if(!post.match(/^[0-9]{5}$/)){
        postError.innerHTML='Only digits number';
        return falsel;
    }
    postError.innerHTML='<i class="fas fa-check-circle">';
    return true;


}
