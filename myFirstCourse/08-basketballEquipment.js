// Баскетболни кецове – цената им е 40% по-малка от таксата за една година

// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
function ball(input){
  let tax = Number(input[0]);

  let sneakers = tax - (tax * 0.4);
  let suit = sneakers - (sneakers * 0.2);
  let ball = suit * 0.25;
  let accessories = ball * 0.2;

  let all = tax + sneakers + suit + ball + accessories;
  console.log(all);

}
ball(["365"]);