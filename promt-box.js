//////////////////////  PROMPT BOX  /////////////////////////

// prompt('whats your name?')

// var name = prompt('whats your name?');
// console.log(name);

var grade = prompt('Enter Grade');

if (grade >= 80 && grade <= 100) {
    console.log('You are Eligible with Destinion');
} else if (grade >= 60 && grade <= 80) {
    console.log('You are Eligible with High Grade');
} else if (grade >= 45 && grade <= 60) {
    console.log('You are Eligible');
} else if (grade >= 40 && grade <= 20) {
    console.log('You are in Merit');
} else {
    console.log('FAILED');
};
