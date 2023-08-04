////////// CONTINUE AND BREAK STATEMENT /////////////

console.log('continue statemane');

for (var i =1; i <= 10; i++) {
    if (i % 2 !== 0)  continue;
    console.log(i);
}

console.log('break statemane');

for (var i =1; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i);
    break;
    }
}
