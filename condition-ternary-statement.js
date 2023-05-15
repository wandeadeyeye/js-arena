/////////////////// CONDITION TERNARY STATEMENT /////////////// 

var a, b;

a = 100;

// a === '100' ? (x = 'yes') : (x = 'no');
x = a === '100' ? 'yes' : 'no';
console.log(x);

var x = 10;
var y = 20;

a = x > y || !(x == 8 && (x > y || x == '20')) ? 'yes' : 'no';
console.log(a);
