var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('subit-error');

var passError = document.getElementById('pass-error');

var passReError = document.getElementById('passRe-error');

function validatePassRe() {
    passwordRe = document.getElementById('contact-passRe').value;
    // !validatePass() || !validatePassRe()
    if (!passwordRe.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        passReError.innerHTML = 'Re Type Password';
        return false;
    }
    passReError.innerHTML = '<i class="fas fa-check-circle">';
    return true;

}

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


function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle">';
    return true;

}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'phone no is required';
        return false;

    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;

    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits number';
        return falsel;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle">';
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
    if (!validateName() || !validatePhone() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 5000);
        return false;
    }
    submitError.innerHTML = 'sucsess full';
    return true;
}