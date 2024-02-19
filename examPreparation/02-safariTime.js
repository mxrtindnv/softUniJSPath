function safari(input){
    let budget = Number(input[0]);
    let gasSum = Number(input[1]);
    let day = input[2];
    let totalSum = 0;

    if(day === "Saturday"){
       totalSum += (gasSum * 2.1) + 100;
       totalSum = totalSum * 0.9;

    }else{
        totalSum += (gasSum * 2.1) + 100;
        totalSum = totalSum * 0.8;
    }

    if(budget >= totalSum){
        console.log(`Safari time! Money left: ${(budget - totalSum).toFixed(2)} lv.`);
    }else{
        console.log(`Not enough money! Money needed: ${(totalSum - budget).toFixed(2)} lv.`);
    }




}
safari((["105.20", "15", "Sunday"]));