///////////////  BASIC OPERATORS  //////////////

var totalDistance, distanceAlex, distanceTim;

totalDistance = 20;

distanceAlex = totalDistance - 5;
console.log(distanceAlex);

distanceTim = totalDistance - 8;
console.log(distanceTim);

console.log(distanceTim * 2);
console.log(distanceTim / 2);

/////// logical operators

var distanceToSchool, distanceToMarket;

distanceToMarket = 30;
distanceToSchool = 25

var isCloser = distanceToSchool > distanceToMarket;
console.log(isCloser);

/////// boolean logical operators

var x = 10;
var y = 15;

var total = x < y || y != '15'
console.log(total);

var total = x < y && y != '15'
console.log(total);

var total = x > y || !(x < y && !(x != '10' && y === '15'))
console.log(total);