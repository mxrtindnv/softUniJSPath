function saving(input){
    let moneySaving = Number(input[0]);
    let profits = Number(input[1]);
    let expenses = Number(input[2]);
    let goal = Number(input[3]);

    let totalMoney = ((moneySaving + profits) * 5 ) - expenses;
    if(totalMoney >= goal){
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(goal - totalMoney).toFixed(2)} BGN.`);
    }



}
saving(["15.20",
"200.00",
"7.30",
"1500.12"])
;
