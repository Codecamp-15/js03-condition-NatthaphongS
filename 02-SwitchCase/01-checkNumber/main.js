let input = prompt('please input on of these[1,0,-1]');
input = +input;
switch (input){
    case 1:
        alert('One');
        break;
    case 0:
        alert('Zero');
        break;
    case -1:
        alert('Minus');
        break;
    default:
        alert('Invalid number');
}