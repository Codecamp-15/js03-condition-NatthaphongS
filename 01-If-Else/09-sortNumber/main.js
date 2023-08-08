let a = +prompt('Please input Number 1of3');
let b = +prompt('Please input Number 2of3');
let c = +prompt('Please input Number 3of3');

let max;
let med;
let min;

// V1. handle เลขไม่เหมือนกัน
// if (a > b && a > c){
//     max = a;
//     if(b > c){
//         med = b;
//         min = c;
//     }
//     else {
//         med = c;
//         min = b;
//     }
// }
// else if (b > a && b > c){
//     max = b;
//     if(a > c){
//         med = a;
//         min = c;
//     }
//     else {
//         med = c;
//         min = a;
//     }
// }
// else{
//     max = c;
//     if(a > b){
//         med = a;
//         min = b;
//     }
//     else {
//         med = b;
//         min = a;
//     }
// }

// alert( max+','+med+','+min);


//##############################
// V2. handle เลขเหมือนกันได้ด้วย
if (a >= b && a >= c){
    max = a;
    if(b >= c){
        med = b;
        min = c;
    }
    else {
        med = c;
        min = b;
    }
}
else if (b >= a && b >= c){
    max = b;
    if(a >= c){
        med = a;
        min = c;
    }
    else {
        med = c;
        min = a;
    }
}
else if (c >= a && c >= b){
    max = c;
    if(a >= b){
        med = a;
        min = b;
    }
    else {
        med = b;
        min = a;
    }
}
alert( max+','+med+','+min);