var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('subit-error');

var passError = document.getElementById('pass-error');

var passReError = document.getElementById('passRe-error');



function validatePass() {
    password = document.getElementById('contact-pass').value;
    if (password.length == 0) {
        passError.innerHTML = 'Enter password';
        return false;
    }
    if (!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        passError.innerHTML = 'Plese check ';
        return false;

    }
    passError.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}



function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Eamil is required'
        return false;

    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle">';
    return true;

}
function validateForm() {
    if (!validatePass() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 5000);
        return false;
    }
    submitError.innerHTML = 'sucsess full !!';
    return true;
}