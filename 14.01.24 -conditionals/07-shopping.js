function shopping(input){
    let budget = Number(input[0]);
    let gpuNum = Number(input[1]);
    let cpuNum = Number(input[2]);
    let ramNum = Number(input[3]);

    let gpuCost = gpuNum * 250;
    let cpuCost = cpuNum * (gpuCost * 0.35);
    let ramCost = ramNum * (gpuCost * 0.1);

    let totalPrice = gpuCost + cpuCost + ramCost;

    if(gpuNum > cpuNum){
        totalPrice = totalPrice * 0.85;
    }

    if(budget >= totalPrice ){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }




}
shopping(["920.45",

"3",

"1",

"1"]);