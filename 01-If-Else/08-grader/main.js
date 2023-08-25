let score = prompt('Input student score')
if (0 <= score && score <= 100){
    if (score>=80) {alert('GradeA')}
    else if (score>=70) {alert('GradeB')}
    else if (score>=60) {alert('GradeC')}
    else if (score>=50) {alert('GradeD')}
    else if (score<50) {alert('GradeF')}
}
else {alert('score out of range')};