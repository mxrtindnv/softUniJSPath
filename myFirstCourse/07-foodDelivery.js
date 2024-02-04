
// • Пилешко меню – 10.35 лв.

// • Меню с риба – 12.40 лв.

// • Вегетарианско меню – 8.15 лв.

function delivery(input){

 let chicken = Number(input[0]);
 let fish = Number(input[1]);
 let veggie = Number(input[2]);

 let desert = (chicken * 10.35 + fish * 12.4 + veggie * 8.15) * 0.2
 let total = chicken * 10.35 + fish * 12.4 + veggie * 8.15 + desert + 2.5
 console.log(total);

}
delivery(["2 ","4 ","3 "])