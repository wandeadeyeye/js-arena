//////////////////////////// QUIZZ 2 ///////////////////

//// even numbers from 132 to 148

console.log('even numbers from 132 to 148');

var x;

x = 132;

while (x <= 148) {
    console.log(x);
    x += 2;
}

// while (x <= 148 && x % 2 === 0) {
//     console.log(x);
//     x += 2;  
// }

///  numbers from 25 to 100 divisible by 7

console.log('numbers from 25 to 100 divisible by 7');

var a;

a = 25;

while (a <= 100) {
    if (a % 7 === 0) {
        console.log(a);
    }
    a++;
}