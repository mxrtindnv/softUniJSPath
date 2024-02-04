function aquarium(input){
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let percentageTaken = Number(input[3]);

let square = (a * b * c);
let squares = square / 1000
let taken = squares * (percentageTaken / 100);
let total = squares - taken;
console.log(total);


}
aquarium(["85 ","75 ","47 ","17"]);