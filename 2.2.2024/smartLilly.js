function birthdayMoney(input){
    let yearsOld = Number(input[0]);
    let washerCost = Number(input[1]);
    let toyCost = Number(input[2]);
    let savedMoney = 0
    
    for(let i = 1; i <= yearsOld; i++){
     if(i % 2 === 0){
         savedMoney+= (i/2) * 10
         savedMoney--
     }else{
        savedMoney+=toyCost
     }


    }

    if(savedMoney >= washerCost){
        console.log(`Yes! ${(savedMoney - washerCost).toFixed(2)}`);

    }else{
        console.log(`No! ${(washerCost - savedMoney).toFixed(2)}`);
    }




}
birthdayMoney(["21",

"1570.98",

"3"]);