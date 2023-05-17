//////////////////////  QUIZZ 3 /////////////////

console.log('1. print odd numbers from 132 to 148');

for (var number = 132; number <= 148; number++) {
    if (number % 2 !== 0) {
     console.log(number);   
    }
    
}

console.log('2. print numbers between 25 and 100 divisible by 7 and 5');

for (var num = 25; num <= 100; num++) {
    if (num % 7 === 0 && num % 5 === 0) {
        console.log(num);
    } 
    
}