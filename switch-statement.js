////////////////// SWITCH STATEMENT //////////////////

var day;

day = 7;

switch (day) {
    case 1:
        console.log('Today is Monday');    
        break;
    case 2:
        console.log('Today is Tuesday');    
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;
    default:
        console.log('invalid entry');
        break;
}


var grade;

grade = 71;

switch (true) {
    case (grade < 50):
        console.log('you cant processed to the next class');
        break;
    case (grade === 50):
        console.log('you are promoted but will retake the class');
        break;
    case (grade > 50 && grade <= 60):
        console.log('passed with credit');
        break;
    case (grade > 60 && grade <= 75):
        console.log('passed with distintion');
        break;
    case (grade > 75 && grade <= 100):
        console.log('passed with high distintion');
        break;
    default:
        console.log('insert grade');
        break;
}

var age;

age = 20;

switch (true) {
    case (age < 18):
        console.log('sorry, no entry');
        break;
    case (age > 18 && age <= 21):
        console.log('you can come in but no alcohol allowed');
        break;
     case (age > 21):
        console.log('enjoy your stay please');
        break;
    default:
        console.log('how old are you?');
        break;
}
