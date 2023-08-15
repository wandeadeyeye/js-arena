//////////////////  QUIZ 1  /////////////////////////

var alexGrade, saraGrade, nancyGrade;

alexGrade = (90 + 80 + 95) / 3;
saraGrade = (89 + 76 + 98) / 3;
nancyGrade = (42 + 98 + 83) / 3;

console.log('Alex average grade is:', alexGrade);
console.log('Sara average grade is:', saraGrade);
console.log('Nancy average grade is:', nancyGrade);

if (alexGrade > saraGrade && alexGrade > nancyGrade) {
    console.log('Alex has the highest grade of them all', alexGrade);
} else if (saraGrade <= alexGrade && saraGrade <= nancyGrade) {
    console.log('Sara has the highest grade of them all', saraGrade);  
} else {
   console.log('Nancy has the highest grade of them all', nancyGrade); 
}


switch (true) {
    case (alexGrade > saraGrade && alexGrade > nancyGrade):
        console.log('Alex has the highest grade of them all', alexGrade);
        break;
    case (saraGrade <= alexGrade && saraGrade <= nancyGrade):
        console.log('Sara has the highest grade of them all', saraGrade);
        break;
    default:
        console.log('Nancy has the highest grade of them all', nancyGrade);
        break;
}

