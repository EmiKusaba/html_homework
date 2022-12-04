function squere(s){
  return Math.sqrt(2) * s;
}

function triangle(side1,side2,side3){
  var s = (side1 + side2 + side3)/2;
  return Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
}

function circumferenceOfCircle (circleRadius) {
  return 2 * Math.PI * circleRadius;
}
function calculateArea(myRadius) {
  return myRadius * myRadius * Math.PI;
}

//result
//sq
let s = 9
console.log(squere(9))
//traiangle
console.log(triangle(5,6,7))
//circumference and surface area
let circleRadius = 4
console.log(circumferenceOfCircle (circleRadius))

let myRadius = 4
console.log(calculateArea (myRadius))

