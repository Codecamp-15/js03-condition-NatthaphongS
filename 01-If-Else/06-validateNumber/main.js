let x = prompt('input x')
let y = prompt('input y')
let sum = +x + +y;
if (sum === null || sum.trim === "" || isNaN(sum)){
    alert('Invalid Number');
}
else {
    alert(sum);
}