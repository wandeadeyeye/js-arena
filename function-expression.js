/////////////////// FUNCTION EXPRESSION //////////////

var calculateAge = function(age) {
    return 2023 - age;
}

var age = calculateAge(2000);
console.log(age);

calculateAge = 'John';
console.log(calculateAge);


// error
var age = calculateAge(2002);
console.log(age);