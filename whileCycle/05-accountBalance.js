function accountBalance(input){
   let deposit = input[0];
   let total = 0;
   let index = 0;

   while(deposit !== "NoMoreMoney"){
     let depositMoney = Number(deposit);
     if(depositMoney < 0){
        console.log("Invalid operation!");
        break;
     }
     console.log(`Increase: ${depositMoney.toFixed(2)}`);
     total += depositMoney;
     index++
     deposit = input[index];
     
     
     
   }
   console.log(`Total: ${total.toFixed(2)}`);
     
   
    


}
accountBalance((["5.51",

"69.42",

"100",

"NoMoreMoney"]));