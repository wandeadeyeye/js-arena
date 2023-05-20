/////////////// FUNCTION QUIZZ /////////////////

///////////// 1

function subtraction(x, y) {
    return y - x;
}

var result = subtraction(4, 8);
console.log(result);

/////////////// 2

function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    }
}

var number = isOdd(7);
console.log(number);

/////////////// 3

var addition = function (number) {
    var num = 0;
    for (var i = 1; i <= number; i++) {
    num = num + i;
    }
    return num;
}

var result =addition(5);
console.log(result);