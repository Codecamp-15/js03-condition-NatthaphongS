let num = prompt('plese input any number');
//input can be null,'','you',23
// console.log(num);
// ต้องดักตัวที่มีโอกาศที่จะเป็นปัญหาก่อน
if (num == null || num.trim == "" || isNaN(num) || num == ""){
    // เงือนไข num.trim === "" ถ้าเอาขึ้นก่อนอาจจะเกิดบัคได้ เพราะถ้ากด cancle มันจะได้ค่า null แล้ว nullไม่สามารถใช้ trim(ใช้ได้แค่string) ได้ จึงทำให้เกิดerror
    alert('Invalid Number');
}
else if (+num > 0){
    alert('Positive Number');
}
else if (+num == 0){
    alert('Zero Number');
}
else if (+num < 0){
    alert('Negative Number');
}
console.log(num)
