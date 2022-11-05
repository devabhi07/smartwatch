var usernameError =document.getElementById('username-error');


function validateUsername(){
    var username = document.getElementById('username').value;
    if(username.length ==0){
    usernameError.innerHTML='Username';
    return false;
    }

    if(!username.match(/^[A-Za-z]{4,9}$/)){
        usernameError.innerHTML='username';
        return false;
    }
    usernameError.innerHTML='good';
    return true;

}