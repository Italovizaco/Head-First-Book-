// EXERCISE 01 - basic function

function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " WOOF WOOF")
  } else {
    console.log(name + " woof woof");
  }
}
bark("Rover", 23)
bark("Spot", 13)
bark("Spike", 53)
bark("Marley", 17)

// EXERCISE 02 - passing a insufficient argument

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea)
}
makeTea(3)

// EXERCISE 03 - passing more arguments than necessary

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea)
}
makeTea(3, "Earl Grey", 25)  //the 25 was ignored

// EXERCISE 04 - arguless

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea)
}
makeTea()  //the program will read only the texts - this is not a problem

// EXERCISE 04 - function returning an argument

function bake(degrees) {
  if (degrees > 500) {
    message = "I'm not a nuclear reator!"
  } else if
    (degrees < 100) {
    message = "I'm no a refrigerator"
  } else {
    message = "That's a very comfortable temperature for me"
  }
  return message
}
//the returned message value will be the new value of status variable
let status = bake(501)
console.log(status);

// EXERCISE 05 - calculating area

function calculateArea(r) {
  if (r <= 0) {
    return 0
  } else {
    area = Math.PI * r * r;
    return area
  }
}
let radius = 5.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea);

// EXERCISE 06 - exercise stolen or not

let balance = 10500
let cameraOn = true

function steal(balance, amount) {
  cameraOn = false
  if(amount < balance){
    balance = balance - amount;
  }
  return amount
  cameraOn = true
}

let amount = steal(balance, 1250);
console.log("Criminal: you stole " + amount + "!");

