function godzVsKing(input){
 let budget = Number(input[0]);
 let statistNum = Number(input[1]);
 let statistPrice = Number(input[2]);

 let decorPrice = budget * 0.1;
   if(statistNum > 150){
    statistPrice = statistPrice * 0.9;
   }

   if(budget - ((statistNum * statistPrice) + decorPrice)  >= 0){
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${(budget - ((statistNum * statistPrice) + decorPrice)).toFixed(2)} leva left.`);
   }else{
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(((statistNum*statistPrice) + decorPrice) - budget).toFixed(2)} leva more.`);
   }

}
godzVsKing(["15437.62",

"186",

"57.99"]);