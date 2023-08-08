let username = prompt('Enter Username');
let password = prompt('Enter Password');

if (username == null && password == null){
    alert('Username and password is required')
}
else if (username == '' && password==''){
    alert('Username and password is required')
}
else if ((username == ''|| username==null) && (password!='' || password!=null )){
    alert('Username is required')
}
else if ((username != ''|| username!=null) && (password=='' || password==null)){
    alert('Password is required')
}
else if ((username == 'admin'&& password == '1234')||(username == 'john'&& password == 'qwerty')){
    alert('Hello '+username)
}
else {alert('Invalid username or password')}

console.log(username);
console.log(password);