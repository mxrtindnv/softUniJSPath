function vacationSaving(input){
    let moneyNeeded = Number(input[0]);
    let currentMoney = Number(input[1]);
    
    let decisionIndex = 2;
    let decision = input[decisionIndex];

    let moneySaved = currentMoney;

    let moneyIndex = 1;
    let strikes = 0;
    let days = 0;

     while(moneySaved < moneyNeeded){
        decision = input[decisionIndex]
        days++
            
        if(decision === "save"){
            moneySaved += Number(input[moneyIndex + 2]);
            strikes = 0;
            
        }else if(decision === "spend"){
            moneySaved -= Number(input[moneyIndex + 2]);
            strikes++

        }

        if(moneySaved < 0){
            moneySaved = 0;
        } 
        
        if(strikes == 5){
            console.log(`You can't save the money.`);
            console.log(days);
            return;
        }
        moneyIndex += 2;
        decisionIndex += 2;
        
        
    }

     console.log(`You saved the money for ${days} days.`);
}
vacationSaving((["2000",

"1000",

"spend",

"1200",

"save",

"2000"]));