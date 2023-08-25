let score = +prompt('Please input your score');
let grade = score >100 
    ? 'Out of score range'
    : score >=80 
    ? 'GradeA'
    : score >=70 
    ? 'GradeB'
    : score >=60 
    ? 'GradeC'
    : score >=50 
    ? 'GradeD'
    : score >=0
    ? 'GradeF'
    : 'Out of score range';

alert(grade);