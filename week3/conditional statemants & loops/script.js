
function twoInteger(num1, nun2) {

  if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
  }
  else
    if (parseInt(num2, 10) > parseInt(num1, 10)) {
      console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
      console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}
let num1 = 5
let num2 = 5
twoInteger(num1, num2)

//Write a JavaScript program that accepts two integers and displays the larger of the two.

function integer(a, b) {
  if (a >= 0 && b >= 0) {
    if (a != b) {
      console.log("The larger number is " + Math.max(a, b));
    }
    else {
      console.log("Both numbers are equal!")
    }
  } else {
    console.log("Please add an integer!");
  }
}
integer(10, 20)

//Write a JavaScript program that checks whether an integer is an even or an odd number.

function oddOrEven(num) {
  if (num % 2 == 0) {
    console.log("num is even")
  }
  else {
    console.log("num is odd")
  }
}
oddOrEven(15)