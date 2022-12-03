function squere(s){
  return Math.sqrt(2) * s;
}

function triangle(side1,side2,side3){
  var s = (side1 + side2 + side3)/2;
  return Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
}

//result
//sq
let s = 9
console.log(squere(9))
//traiangle
console.log(triangle(5,6,7))
