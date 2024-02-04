function toystore(input){
 let puzzle = 2.6;
 let doll = 3;
 let teddy = 4.1;
 let minion = 8.2;
 let truck = 2;
 
 let excPrice = Number(input[0]);
 let puzzleNum = Number(input[1]);
 let dollNum = Number(input[2]);
 let teddyNum = Number(input[3]);
 let minionNum = Number(input[4]);
 let truckNum = Number(input[5]);

 let price = puzzle * puzzleNum + doll * dollNum + teddy * teddyNum + minion * minionNum + truck * truckNum;
 let allNum = puzzleNum + dollNum + teddyNum + minionNum + truckNum;

 if(allNum >= 50){
    price = price - (price * 0.25);
 }

 price = price - (price * 0.1);

 if(price >= excPrice){
    console.log(`Yes! ${(price - excPrice).toFixed(2)} lv left.`);
 }else{
    console.log(`Not enough money! ${(excPrice - price).toFixed(2)} lv needed.`);
 }


}
toystore(["320", "8", "2", "5", "5", "1"]);