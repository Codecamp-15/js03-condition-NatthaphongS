let user = prompt('Enter you username')
user = user==''|| user==null ? 'guest':user;
if (user == 'codecamp'){
    let password = prompt('Please enter password')
    if(password=='123456'){
        user='codecamp';
    }
    else{
        alert('Wrong password (continue with guest)');
        user='guest';
    }
}
else{
    user='guest';
}

alert('Welcome '+user);
