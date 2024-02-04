function calc(input){

    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let yearPercent = Number(input[2]);

    let sum = deposit + period*((deposit * (yearPercent / 100) / 12));
    console.log(sum);

}
calc(["200 ","3 ","5.7 "]);